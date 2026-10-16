# แผนงานปรับปรุงระบบประเมินย้อนหลัง (Universal Examiner Local Review) และแก้ไขเสถียรภาพแพลตฟอร์ม PLE-CC

เอกสารข้อเสนอการพัฒนาเชิงเทคนิค (Technical Implementation Plan)
โครงการเตรียมสอบใบประกอบวิชาชีพเภสัชกรรม (PLE-CC) คณะเภสัชศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย

---

## 1. คำอธิบายเป้าหมาย (Goal Description)

เป้าหมายหลักของการปรับปรุงครั้งนี้คือ:
1. ออกแบบและสร้างระบบประเมินย้อนหลังเฉพาะเครื่องของผู้ประเมิน (Universal Examiner Local Review Mode) ให้ครอบคลุมทั้ง 3 โหมดการสอบ:
   - โหมดห้องเดี่ยวมาตรฐาน (Standard Practice Room 1-on-1): ผู้ประเมินสามารถย้อนดูและตรวจ Checklist สถานี 1 ถึง N ได้อย่างอิสระโดยหน้าจอของผู้เข้าสอบไม่หลุดจากสถานีปัจจุบัน
   - โหมดแยกโต๊ะสอบกลุ่มใหญ่ (Cohort Breakout Mode): ผู้ประเมินประจำโต๊ะสามารถย้อนกลับไปตรวจสถานีก่อนหน้าของโต๊ะตนเองได้ โดยไม่ไปสั่งเปลี่ยนสถานีของห้องสอบหลักที่ Super Host ควบคุมอยู่
   - โหมดแลปกริ๊งหมุนวนฐาน (Carousel Rotation Mode): ผู้ประเมินซึ่งประจำอยู่ที่ฐานเดิมตลอดการสอบ (เช่น ประจำฐานที่ 3) สามารถย้อนดู Checklist ของฐานเดิมแต่เปลี่ยนตัวผู้เข้าสอบในรอบก่อนหน้า (เช่น รอบที่ 1 นิสิต ก, รอบที่ 2 นิสิต ข) เพื่อตรวจหรือปรับคะแนนย้อนหลังได้โดยไม่กระทบผู้เข้าสอบรอบปัจจุบัน
2. ปิดช่องโหว่ Race Condition 4 จุด เพื่อกำจัดปัญหาสถานีข้าม (เช่น สถานี 4 ข้ามไป 5) และการจบสอบก่อนกำหนด
3. แก้ไขระบบ Auto-Checklist และการแสดงผลคำตอบอัตนัยในหน้าสรุปผลการสอบ
4. แก้ไขฟังก์ชัน Silent Midnight Cleanup เพื่อป้องกันการสูบโควตา Bandwidth ของ Firebase Spark (360 MB ต่อวัน)

---

## 2. สิ่งที่ต้องการความเห็นชอบจากผู้ใช้งาน (User Review Required)

> [!IMPORTANT]
> 1. พฤติกรรมของโหมดแลปกริ๊ง (Carousel Rotation): ในโหมดนี้อาจารย์ผู้ประเมินจะประจำอยู่ที่ฐานเดิมตลอดเวลา ดังนั้นการย้อนตรวจคะแนนจึงเป็นการคงเคสและ Checklist เดิมไว้ แต่สลับดูคะแนนของผู้เข้าสอบแต่ละคนที่เคยผ่านมาที่ฐานนี้ (เช่น รอบที่ 1 นิสิต A, รอบที่ 2 นิสิต B) ซึ่งระบบจะสร้างแถบเลือกรายชื่อผู้เข้าสอบในรอบก่อนหน้าให้คลิกตรวจได้ทันที
> 2. พฤติกรรมในโหมด Standard และ Cohort Breakout: การย้อนตรวจคะแนนจะเป็นการสลับเคสและ Checklist ไปยังสถานีก่อนหน้า (เช่น กำลังสอบสถานี 4 แต่ขอย้อนดูสถานี 2) โดยมีแถบแบนเนอร์สีเหลืองเตือนสถานะ พร้อมเวลานับถอยหลังของสถานีจริง และปุ่มคลิกเดียวเพื่อกระโดดกลับสู่สถานีปัจจุบัน
> 3. การแยกสถานะ Local State อย่างเด็ดขาด: ระบบ Local Review จะทำงานบนตัวแปร SimState._isLocalReview ในเครื่องของผู้ประเมินเท่านั้น โดยจะไม่มีการเรียกฟังก์ชัน jumpToStation หรือเขียนทับ currentStationIdx ใน Firebase เด็ดขาด จึงรับประกันได้ว่าจะไม่เกิด Race Condition หรือการแย่งสิทธิ์เปลี่ยนสถานี

---

## 3. คำถามเปิดเพื่อการตัดสินใจ (Open Questions)

> [!NOTE]
> ข้อที่ 1: เมื่อ Super Host สั่งเปลี่ยนรอบการสอบในขณะที่ผู้ประเมินยังตรวจย้อนหลังอยู่ในโหมด Local Review:
> - ทางเลือก ก (แนะนำ): แสดงแถบเตือนสีแดงสดและเสียงกระดิ่งว่า ห้องสอบหลักเปลี่ยนเป็นสถานี/รอบถัดไปแล้ว แต่ยังคงให้ผู้ประเมินตรวจย้อนหลังต่อจนกว่าจะกดปุ่ม กลับสู่รอบปัจจุบัน ด้วยตนเอง
> - ทางเลือก ข: ดึงหน้าจอของผู้ประเมินกลับสู่สถานีปัจจุบันทันทีอัตโนมัติ

---

## 4. แผนการแก้ไขโค้ดเชิงลึก (Proposed Changes)

### ส่วนที่ 1: การจัดการตัวแปรสถานะและฟังก์ชัน Local Review ใน exam-simulation.html

#### [MODIFY] Website/PLE CC Webpage/exam-simulation.html

1. เพิ่มตัวแปรสถานะ Local Review ใน SimState:
```javascript
// Local Review State Isolation
SimState._isLocalReview = false;
SimState._localReviewStationIdx = null;
SimState._localReviewParticipantId = null;
SimState._localReviewRound = null;
```

2. สร้างฟังก์ชัน enterExaminerLocalReview:
- สำหรับโหมด Standard และ Cohort Breakout:
```javascript
function enterStationLocalReview(targetStationIdx) {
  if (targetStationIdx === SimState.currentIdx) {
    exitExaminerLocalReview();
    return;
  }
  SimState._isLocalReview = true;
  SimState._localReviewStationIdx = targetStationIdx;
  
  const targetSt = SimState.stations[targetStationIdx];
  if (!targetSt) return;
  
  renderStationLocalView(targetStationIdx);
  renderLocalReviewBanner();
}
```

- สำหรับโหมด Carousel Rotation (แลปกริ๊ง):
```javascript
function enterCarouselParticipantReview(targetRound, participantId, participantName) {
  SimState._isLocalReview = true;
  SimState._localReviewRound = targetRound;
  SimState._localReviewParticipantId = participantId;
  
  const assignedStationNum = SimState.myCarouselStation || (SimState.currentIdx + 1);
  const room = SimState.cachedRoom || {};
  const participantProgress = (room.participantScores?.[participantId]?.stations?.[assignedStationNum]?.checkedProgress) || [];
  
  SimState.studentScores[assignedStationNum] = [...participantProgress];
  
  const currentCase = SimState.stations[assignedStationNum - 1]?.case;
  if (currentCase) {
    renderExamChecklist(assignedStationNum, currentCase);
    updateExamProgressUI(assignedStationNum, currentCase);
  }
  
  renderCarouselReviewBanner(targetRound, participantName);
}
```

3. สร้างฟังก์ชัน exitExaminerLocalReview:
```javascript
function exitExaminerLocalReview() {
  SimState._isLocalReview = false;
  SimState._localReviewStationIdx = null;
  SimState._localReviewParticipantId = null;
  SimState._localReviewRound = null;
  
  removeLocalReviewBanner();
  
  if (SimState.examMode === 'carousel_rotation') {
    // Restore current active round candidate
    const r = (SimState.cachedRoom && SimState.cachedRoom.currentStationIdx) || 0;
    const N = SimState.stations.length || 1;
    const assignedStationNum = SimState.myCarouselStation || 1;
    const startNum = ((assignedStationNum - 1 - r + N) % N) + 1;
    const currentPartId = SimState.cachedRoom?.carouselPosts?.['st_' + startNum]?.startParticipantId;
    const currentProgress = (currentPartId && SimState.cachedRoom?.participantScores?.[currentPartId]?.stations?.[assignedStationNum]?.checkedProgress) || [];
    SimState.studentScores[assignedStationNum] = [...currentProgress];
    
    const currentCase = SimState.stations[assignedStationNum - 1]?.case;
    if (currentCase) {
      renderExamChecklist(assignedStationNum, currentCase);
      updateExamProgressUI(assignedStationNum, currentCase);
    }
  } else {
    // Restore active station
    renderStation(SimState.currentIdx);
  }
}
```

4. ปรับฟังก์ชัน toggleExamChecklistItem เพื่อบันทึกคะแนนตรงตามโหมดในขณะตรวจย้อนหลัง:
- ในโหมด Standard: บันทึกลง SimState.studentScores[stationNum] และส่ง scoresByStation ขึ้น Firebase
- ในโหมด Cohort Breakout: บันทึกลง rooms/{roomId}/breakouts/{tableId}/scores/{stationNum} โดยตรง
- ในโหมด Carousel Rotation: บันทึกลง rooms/{roomId}/participantScores/{targetPartId}/stations/{assignedStationNum} โดยตรง

5. แก้ไขฟังก์ชัน applyRoomState เพื่อป้องกันการกระชากหน้าจอเมื่ออยู่ในโหมด Local Review:
```javascript
if (SimState._isLocalReview) {
  // Update real-time timer in review banner only, do not force-render station
  updateReviewBannerLiveTimer(room);
  return;
}
```

---

### ส่วนที่ 2: การป้องกัน Race Condition 4 จุดใน exam-simulation.html

1. จุดที่ 1 ใน startLocalCountdown (บรรทัด 7497):
   เมื่อเวลานับถอยหลังถึง 0 ให้ทำการตั้งค่า SimState.timerRunning = false ทันทีเพื่อหยุดลูปนับถอยหลัง
2. จุดที่ 2 ใน showTimeoutPopup (บรรทัด 7439):
   เพิ่มตัวแปร _isShowingTimeoutPopup เพื่อป้องกันการเปิดหน้าต่างแจ้งเตือนซ้ำซ้อนและการส่งคำสั่ง nextStation เบิ้ล
3. จุดที่ 3 ใน jumpToStation (บรรทัด 9184):
   ล็อกสิทธิ์ไม่ให้ผู้ประเมินในโหมด Cohort Breakout หรือ Carousel Rotation ส่งค่า currentStationIdx ไปยังห้องสอบส่วนกลาง
4. จุดที่ 4 ใน applyRoomState (บรรทัด 6763):
   ตั้งค่า SimState.isFinishingExam = true ทันทีตั้งแต่เริ่มเข้าสู่กระบวนการจบสอบ ก่อนเรียกคำสั่ง await finishExamSimulation()

---

### ส่วนที่ 3: การแก้ไขระบบ Auto-Checklist และหน้าสรุปผลคำตอบอัตนัย

1. ใน renderExamChecklist (บรรทัด 8766):
   แนบ attribute data-tag ให้กับ element ทุกรายการ โดยดึงจาก item.tag หรือสร้างจากลำดับข้อ เช่น ข้อ 1.1 หรือ 1.1
2. ใน autoCheckLinkedChecklistItem (app.js บรรทัด 4079):
   ตรวจสอบการคลิกอย่างแม่นยำ หากผู้ประเมินเคยยืนยันรายการนั้นไว้แล้วจะไม่ทำการคลิกปลดออก
3. ใน setupExaminerLiveBlanksWatcher (บรรทัด 9545):
   ทำการบันทึก SimState.writtenAnswers[stationNum] = decodedAnswers ทันทีเมื่อได้รับคำตอบสดจาก Firebase
4. ใน finishExamSimulation (บรรทัด 12719):
   หาก SimState.writtenAnswers ในเครื่องไม่มีข้อมูล ให้ทำการดึงคำตอบจาก Firebase โหนด examineeAnswers หรือ participantAnswers มาผสานก่อนแสดงผลบนตารางสรุป

---

### ส่วนที่ 4: การแก้ไข Firebase Bandwidth Quota Drain

1. ใน initMidnightAutoCleanup (บรรทัด 1551):
   ปรับให้ฟังก์ชันนี้ทำงานเฉพาะเครื่องของ Host เท่านั้น โดยตรวจสอบเงื่อนไข SimState.isHost === true
   และใช้คำสั่ง Query แบบเจาะจงเฉพาะห้องที่หมดอายุ แทนการดาวน์โหลดโหนด rooms ทั้งหมดมาบนเครื่องของผู้เข้าสอบทุกคน

---

## 5. แผนการทดสอบและตรวจสอบความถูกต้อง (Verification Plan)

### การทดสอบแบบอัตโนมัติ (Automated Tests)
1. ตรวจสอบไวยากรณ์และความถูกต้องของไฟล์ผ่าน Node.js syntax check:
   node -c "Website/PLE CC Webpage/app.js"
2. ตรวจสอบจำนวนเครื่องหมายดอกจัน (Strict Zero Asterisk Gate):
   powershell -Command "Select-String -Path 'Website\PLE CC Webpage\exam-simulation.html' -Pattern ([char]42) | Measure-Object"
3. รันสคริปต์จำลองการคลิกย้อนตรวจคะแนนใน 3 โหมดเพื่อยืนยันว่าไม่มีคำสั่งเขียนทับ currentStationIdx

### การทดสอบด้วยตนเอง (Manual Verification Checklist)
1. ทดสอบโหมด Standard Practice Room:
   - เปิดห้องสอบ 2 จอ (Examiner และ Examinee)
   - เริ่มสอบไปยังสถานีที่ 3
   - ฝั่ง Examiner กดย้อนดูสถานีที่ 1 ตรวจสอบว่าหน้าจอ Examinee ยังอยู่ที่สถานี 3 ปกติ
   - ปรับคะแนนสถานีที่ 1 แล้วกดย้อนกลับสถานี 3 ตรวจสอบว่าคะแนนสถานีที่ 1 และ 3 บันทึกครบถ้วน
2. ทดสอบโหมด Cohort Breakout:
   - ทดสอบ Super Host สั่งเปลี่ยนสถานี ขณะที่ Examiner กำลังตรวจสถานีย้อนหลัง
   - ยืนยันว่าหน้าจอ Examiner ไม่เกิด Error และสามารถกลับสู่สถานีสดได้ถูกต้อง
3. ทดสอบโหมด Carousel Rotation (แลปกริ๊ง):
   - สลับตรวจคะแนนของผู้เข้าสอบรอบที่ 1 และ 2 ยืนยันว่า Checklist ยังเป็นของฐานเดิม แต่รายชื่อและคะแนนเปลี่ยนตามตัวนิสิต
4. ตรวจสอบหน้าสรุปผลการสอบ:
   - ยืนยันว่าคำตอบอัตนัยที่นิสิตพิมพ์ส่ง แสดงข้อความคำตอบจริง ไม่ขึ้นว่า (ไม่ได้พิมพ์ตอบ)
