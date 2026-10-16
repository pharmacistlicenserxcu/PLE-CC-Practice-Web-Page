# แผนปฏิบัติการฉบับสมบูรณ์: การแก้ปัญหาข้ามสถานี และการให้ผู้ประเมินย้อนกลับทำ Checklist

เอกสารแผนงานทางเทคนิคนี้ครอบคลุม 2 ประเด็นหลักตามที่ประธานโครงการมอบหมาย:
1. การแก้ปัญหาข้ามสถานีและตัดจบการสอบก่อนเวลา (Race Condition 4 จุด ในโหมด Cohort Breakout)
2. การพัฒนาระบบให้ผู้ประเมินย้อนกลับไปดูและกรอก Checklist สถานีก่อนหน้าได้ (Examiner Local Review Mode)

---

## 1. การวิเคราะห์สาเหตุเชิงลึก: ปัญหาข้ามสถานีและตัดจบก่อนเวลา (Root Cause Analysis)

### อาการที่ตรวจพบ:
ในการสอบจำลอง Mock Exam 2569 Week 2 ชุด B (มีทั้งหมด 5 สถานี: สถานี 1-5):
- เมื่อเวลาของสถานีที่ 4 หมดลง (00:00) ระบบกลับกระโดดข้ามสถานีที่ 5 ไปยังหน้าสรุปผลการสอบทันที
- ในบางรอบ มีอาการตัดจบตั้งแต่สถานีที่ 1 ไปหน้าสรุปผลทันที

### สาเหตุทางวิศวกรรม (The 4-Point Race Condition Cycle):
เกิดจากวงจร Race Condition ระหว่างตัวจับเวลาในเครื่อง (Client Timer) กับเหตุการณ์ตอบสนองของ Firebase Realtime Database ดังนี้:

1. จุดเริ่มต้น (startLocalCountdown):
   เมื่อตัวเลขนับถอยหลังลดลงจนแตะ 0 (บรรทัด 7486) ฟังก์ชันสั่ง `clearInterval(SimState.timerInterval)` แต่ไม่ได้ปรับ `SimState.timerRunning = false`
2. การเปิดหน้าต่าง 3 วินาที (showTimeoutPopup):
   ระบบเปิดหน้าต่างแจ้งเตือนหมดเวลา 3 วินาที เพื่อเตรียมพาผู้สอบไปยังสถานีถัดไป
3. การแทรกแซงของ Firebase Snapshot (Data Re-entry):
   ในระหว่างช่วง 3 วินาทีนี้ หากมีผู้ประเมินจากโต๊ะใดโต๊ะหนึ่งติ๊กคะแนน Firebase จะส่งข้อมูล Snapshot ใหม่เข้ามา ทำให้ฟังก์ชัน `applyRoomState` ถูกเรียกทำงาน
4. การสร้าง Timer ซ้อน (Duplicate Countdown):
   ใน `applyRoomState` (บรรทัด 6644) มีเงื่อนไข:
   `if (SimState.timerRunning && !SimState.timerInterval) { startLocalCountdown(); }`
   เนื่องจาก `timerRunning` ยังเป็น true อยู่ ระบบจึงเข้าใจผิดว่าตัวจับเวลากำลังทำงานแต่ Interval หายไป จึงสั่งเริ่มตัวนับถอยหลังรอบที่ 2 ขนานกันขึ้นมา
5. หายนะตอนเปลี่ยนสถานี (Double Callback Execution):
   - Callback ตัวแรกทำงาน: สั่ง `nextStation()` เลื่อนจากสถานี 4 ไปยังสถานี 5
   - Callback ตัวที่สองตามมาติดๆ ในเสี้ยววินาที: เห็นว่าสถานะปัจจุบันอยู่ที่สถานี 5 (ซึ่งเท่ากับ `stations.length - 1`) จึงสั่ง `finishExamSimulation()` ทันที
   - ผลลัพธ์: ผู้เข้าสอบและผู้ประเมินจึงถูกตัดข้ามสถานี 5 ไปยังหน้าผลสอบทันที

---

## 2. การแก้ปัญหาข้ามสถานี 4 จุด (Minimal Patch - ปลอดภัย 100%)

เพื่อหยุดปัญหานี้อย่างถาวรโดยไม่กระทบระบบอื่น จะทำการแก้ไขเพียง 15 บรรทัดใน `Website/PLE CC Webpage/exam-simulation.html` (และซิงก์ไปยัง `apps_script_deploy/exam-simulation.html`):

### จุดที่ 1: ปิดสวิตช์ตัวจับเวลาทันทีเมื่อเวลาหมด (startLocalCountdown แถวบรรทัด 7486)
เมื่อเวลาแตะ 0 ให้รีเซ็ต `timerRunning = false` ทันที เพื่อตัดวงจรไม่ให้ `applyRoomState` สร้าง Timer ซ้ำ:
```javascript
if (SimState.timerValue <= 0) {
  clearInterval(SimState.timerInterval);
  SimState.timerInterval = null;
  SimState.timerRunning = false; // FIX 1: ป้องกัน applyRoomState เข้าใจผิด
  if (SimState.timeoutTransitionMode === 'manual') {
    showManualTimeoutPopup();
  } else {
    showTimeoutPopup(() => {
      const canAdvance = (!SimState.isLobby) || SimState.isHost || (SimState.examMode === 'standard' && SimState.role === 'examiner');
      if (canAdvance) {
        if (SimState.currentIdx < SimState.stations.length - 1) {
          nextStation();
        } else {
          finishExamSimulation();
        }
      }
    });
  }
}
```

### จุดที่ 2: ป้องกันหน้าต่างหมดเวลาและการเรียก Callback ซ้ำ (showTimeoutPopup แถวบรรทัด 7439)
เพิ่มตัวล็อก Debounce และตั้ง ID ให้กับ Overlay หากมีหน้าต่างหมดเวลาเปิดอยู่แล้ว จะไม่สร้างใหม่และไม่สร้าง Callback ซ้ำ:
```javascript
let _timeoutPopupActive = false;
function showTimeoutPopup(callback) {
  if (_timeoutPopupActive || document.getElementById('auto-timeout-overlay')) return;
  _timeoutPopupActive = true;
  playTimeoutSound();
  const overlay = document.createElement('div');
  overlay.id = 'auto-timeout-overlay';
  overlay.className = 'fullscreen-overlay';
  overlay.innerHTML = `
    <div style="font-size: 6rem; margin-bottom: 1rem; animation: pulse 1s infinite;">⏰</div>
    <h1 style="font-size: 3.5rem; margin-bottom: 1rem; color: var(--danger); font-family: var(--font-title); font-weight: 800;">หมดเวลา!</h1>
    <p style="font-size: 1.5rem; color: var(--text-muted); font-family: var(--font-body);">กำลังเตรียมพร้อม...</p>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => {
    if (document.body.contains(overlay)) document.body.removeChild(overlay);
    _timeoutPopupActive = false;
    if (callback) callback();
  }, 3000);
}
```

### จุดที่ 3: บล็อกไม่ให้ Examiner ในโหมด Cohort เขียนเปลี่ยนสถานีลง Firebase (jumpToStation แถวบรรทัด 9172)
ในโหมด Cohort Breakout เฉพาะ Super Host เท่านั้นที่สั่งเปลี่ยนสถานีกลางได้ กรรมการประจำโต๊ะไม่มีสิทธิ์เขียนทับ `currentStationIdx` ในห้องรวม:
```javascript
// In Cohort Breakout, only Super Host can change global room stations
if (SimState.examMode === 'cohort_breakout' && SimState.isLobby && !SimState.isHost) return;
```

### จุดที่ 4: ล็อกสถานะก่อนประมวลผลจบการสอบ (applyRoomState แถวบรรทัด 6763)
ล็อก `SimState.isFinishingExam = true` ก่อนเรียก `await finishExamSimulation()` เพื่อไม่ให้ Snapshot ถัดไปที่ส่งเข้ามาเรียกซ้ำ:
```javascript
if (room.status === 'results') {
  if (SimState.isFinishingExam || SimState.isExamFinished) {
    return;
  }
  SimState.isFinishingExam = true; // FIX 4: ล็อกก่อนเริ่ม async
  await finishExamSimulation();
}
```

---

## 3. ระบบให้ผู้ประเมินย้อนกลับทำ Checklist (Examiner Local Review Mode)

### ปัญหาที่ต้องแก้ไข:
ในการสอบจริง เวลา 4 นาทีอาจไม่เพียงพอสำหรับกรรมการบางท่านในการพิมพ์ Comment หรือกดบันทึกคะแนน กรรมการจึงต้องการปุ่ม "ย้อนกลับ" เพื่อตรวจสถานีที่แล้วให้เสร็จ โดยต้องไม่ทำให้ผู้เข้าสอบหรือห้องสอบทั้งหมดกระตุกหรือเปลี่ยนสถานีตาม

### การออกแบบระบบการแยกสถานะ (State Isolation Architecture):
เราจะไม่เปลี่ยนตัวแปรของห้องสอบใน Firebase แต่จะสร้างระบบดูเฉพาะหน้าจอกรรมการ (Client-side Local View) ดังนี้:

1. ตัวแปรสถานะอิสระ:
   - `SimState._localReviewIdx`: เก็บหมายเลข index ของสถานีที่กำลังย้อนดู (หากเป็น null แปลว่าดูสถานีปัจจุบัน)
   - หน้าจอ Examinee: อิงตาม `room.currentStationIdx` จาก Firebase เสมอ ไม่รู้จัก `_localReviewIdx` จึงปลอดภัย 100%

2. แถบเตือนบนหน้าจอกรรมการ (Visual Feedback):
   เมื่อกดย้อนดู ระบบจะแสดงแบนเนอร์สีส้มเด่นชัด:
   `โหมดดูย้อนหลัง: คุณกำลังตรวจสถานีที่ X (ห้องสอบกำลังอยู่ที่สถานีที่ Y) [ปุ่มกลับสถานีปัจจุบัน]`

3. ความถูกต้องของการบันทึกคะแนน (Score Integrity):
   ฟังก์ชัน `updateLobbyChecklistOnServer` ใช้หมายเลขสถานีตามเคสที่กำลังเปิดอยู่:
   `const currStationNum = SimState.stations[SimState.currentIdx].stationNumber;`
   ดังนั้นเมื่อกรรมการย้อนดูสถานีที่ 2 และติ๊กคะแนน ข้อมูลจะเขียนลง:
   `rooms/[roomId]/breakouts/[tableId]/scores/2`
   ซึ่งเป็นสถานีที่ 2 อย่างถูกต้อง ไม่มีการเขียนทับคะแนนของสถานีปัจจุบัน

4. กลไกดึงกลับอัตโนมัติ (Auto Snapback):
   หากกรรมการกำลังย้อนดูสถานีที่ 2 แต่ Super Host สั่งเปลี่ยนจากสถานี 3 ไปสถานี 4:
   เมื่อ Firebase ส่งสถานีใหม่มา `applyRoomState` จะตรวจพบว่าห้องสอบเปลี่ยนสถานีแล้ว ระบบจะล้างค่า `_localReviewIdx = null` ดึงหน้าจอกรรมการกลับมาสถานีที่ 4 ทันที พร้อมแสดง Toast แจ้งเตือน:
   `ห้องสอบเปลี่ยนไปสถานีที่ 4 แล้ว ระบบพาคุณกลับสู่สถานีปัจจุบัน`

---

## 4. โค้ดที่ต้องเพิ่มสำหรับ Local Review Mode (Component Details)

### 1. เพิ่มปุ่มและแบนเนอร์ใน HTML (ใต้ Sticky Header แถวบรรทัด 2543)
```html
<!-- แบนเนอร์แจ้งเตือนโหมดดูย้อนหลัง -->
<div id="local-review-banner" style="display:none; background:rgba(245,158,11,0.12); border:1.5px solid rgba(245,158,11,0.5); border-radius:var(--radius-sm); padding:0.45rem 1rem; font-size:0.85rem; font-family:var(--font-title); color:#fbbf24; align-items:center; justify-content:space-between; gap:0.75rem; margin-bottom:0.5rem;">
  <span>
    🔄 <strong>โหมดดูย้อนหลัง:</strong> คุณกำลังตรวจ <span id="local-review-station-label">สถานีที่ X</span>
    <span id="local-review-global-hint" style="color:var(--text-muted); font-size:0.8rem;"></span>
  </span>
  <button onclick="snapToCurrentStation()" style="background:#d97706; color:#fff; border:none; border-radius:var(--radius-sm); padding:0.3rem 0.85rem; font-size:0.82rem; font-weight:700; cursor:pointer;">
    ↩️ กลับสถานีปัจจุบัน
  </button>
</div>

<!-- ปุ่มย้อนดูสถานีก่อนหน้าสำหรับกรรมการ -->
<div id="examiner-local-nav" style="display:none; gap:6px; align-items:center; margin-bottom:0.5rem;">
  <button id="btn-local-prev" onclick="localPrevStation()" style="padding:5px 12px; font-size:12.5px; background:var(--bg); border:1.5px solid #d97706; color:#fbbf24; border-radius:var(--radius-sm); cursor:pointer;">
    ⬅️ ย้อนดู Checklist สถานีก่อนหน้า
  </button>
  <span style="font-size:0.78rem; color:var(--text-muted);">(ดูย้อนหลังได้เฉพาะหน้าจอนี้ ไม่กระทบห้องสอบ)</span>
</div>
```

### 2. ฟังก์ชันควบคุมการย้อนดูและ Snapback
```javascript
function localPrevStation() {
  if (!SimState.isLobby || SimState.isHost) return;
  if (SimState.examMode !== 'cohort_breakout' || SimState.role !== 'examiner') return;

  const targetIdx = SimState.currentIdx - 1;
  if (targetIdx < 0) return;

  SimState._localReviewIdx = targetIdx;
  SimState.currentIdx = targetIdx;
  renderStation(targetIdx);
  updateLocalReviewBanner();
}

function snapToCurrentStation() {
  if (!SimState.cachedRoom) return;
  const globalIdx = SimState.cachedRoom.currentStationIdx !== undefined
    ? SimState.cachedRoom.currentStationIdx
    : SimState.currentIdx;
  SimState._localReviewIdx = null;
  renderStation(globalIdx);
  updateLocalReviewBanner();
  if (typeof showPleToast === 'function') {
    showPleToast('กลับสู่สถานีปัจจุบันของห้องสอบแล้ว', 'success');
  }
}

function updateLocalReviewBanner() {
  const banner = document.getElementById('local-review-banner');
  const localNav = document.getElementById('examiner-local-nav');
  const prevBtn = document.getElementById('btn-local-prev');

  const isExaminerInCohort = SimState.isLobby && !SimState.isHost && SimState.examMode === 'cohort_breakout' && SimState.role === 'examiner';
  if (!isExaminerInCohort) {
    if (banner) banner.style.display = 'none';
    if (localNav) localNav.style.display = 'none';
    return;
  }

  if (localNav) localNav.style.display = 'flex';
  if (prevBtn) prevBtn.disabled = SimState.currentIdx <= 0;

  const isInLocalReview = SimState._localReviewIdx !== null && SimState._localReviewIdx !== undefined;
  if (banner) {
    banner.style.display = isInLocalReview ? 'flex' : 'none';
    if (isInLocalReview) {
      const stLabel = document.getElementById('local-review-station-label');
      const hintLabel = document.getElementById('local-review-global-hint');
      const globalIdx = SimState.cachedRoom?.currentStationIdx ?? SimState.currentIdx;
      if (stLabel) stLabel.textContent = `สถานีที่ ${SimState.currentIdx + 1}`;
      if (hintLabel) hintLabel.textContent = ` (ห้องสอบกำลังอยู่ที่สถานีที่ ${globalIdx + 1})`;
    }
  }
}
window.localPrevStation = localPrevStation;
window.snapToCurrentStation = snapToCurrentStation;
window.updateLocalReviewBanner = updateLocalReviewBanner;
```

---

## 5. ยุทธศาสตร์การดำเนินงาน 2 เฟส (Strict Two-Phase Strategy)

เพื่อความปลอดภัยสูงสุดและป้องกันไม่ให้เกิดผลกระทบข้างเคียง (Zero Blast Radius):

### เฟสที่ 1 (แนะนำเริ่มทำทันที): ปิดบั๊กข้ามสถานี Race Condition 4 จุด
- ดำเนินการใส่ Fix 1 ถึง 4 (ประมาณ 15 บรรทัด)
- ไม่เพิ่ม State ใหม่ และไม่เพิ่มปุ่มใหม่
- ผลลัพธ์: แก้ปัญหาตัดจบการสอบและข้ามสถานี 5 ให้หายขาด 100% ปลอดภัยต่อทุกโหมดสอบ

### เฟสที่ 2 (ทำต่อหลังผ่านการทดสอบ): เพิ่มฟังก์ชัน Local Review Mode
- ดำเนินการเพิ่มปุ่มย้อนดู Checklist และฟังก์ชัน Snapback ตามข้อ 4
- ทดสอบการติ๊กคะแนนย้อนหลังและการดึงกลับอัตโนมัติ

---

## 6. แผนการทดสอบความถูกต้อง (Verification Protocol)

1. ตรวจสอบโค้ดไม่มีเครื่องหมายดอกจัน:
   `Select-String "Website\PLE CC Webpage\exam-simulation.html" -Pattern "\*\*" | Measure-Object` (ต้องได้ 0)
2. ทดสอบจำลองสถานการณ์ Mock Exam 2569 Week 2 ชุด B (5 สถานี):
   - เปิดห้องสอบแบบ Cohort Breakout 5 สถานี
   - ให้เวลาสถานีที่ 4 นับถอยหลังถึง 00:00 พร้อมมีการติ๊กคะแนนส่ง Snapshot
   - ยืนยันว่า: ระบบเลื่อนไปยัง สถานีที่ 5 อย่างถูกต้อง ไม่มีการข้ามไปหน้าสรุปผล
   - เมื่อสถานีที่ 5 หมดเวลา ระบบจึงจะเข้าสู่หน้าผลการสอบและ Podium
