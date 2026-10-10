# 🎨 PLE-CC Platform Design System (DESIGN.md)

**Project:** PLE-CC Exam Prep Platform (RxCU 2569)  
**Target Users:** นิสิตเภสัชศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย (RxCU84/85)  
**Version:** 1.0  
**Scope:** Comprehensive UI/UX Guidelines, Tokens, Components, and Accessibility Standards

---

## 1. Brand Identity & Visual Language
แพลตฟอร์ม PLE-CC ได้รับการออกแบบขึ้นเพื่อเป็นศูนย์กลางการฝึกซ้อมสอบความรู้ผู้ขอขึ้นทะเบียนเป็นผู้ประกอบวิชาชีพเภสัชกรรม (PLE-CC1 และ PLE-CC2) โดยเน้นความน่าเชื่อถือทางวิชาการ (Academic Credibility), ความรวดเร็วคล่องตัว (High Responsiveness), และความสบายตาในขณะฝึกซ้อมสอบเป็นเวลานาน (Cognitive Comfort)

---

## 2. Color System & Design Tokens

### 2.1 Primary & Brand Colors
| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| `--primary` | `#2563EB` (Blue 600) | ปุ่มหลัก (Primary Action), ลิงก์สำคัญ, Active Tab |
| `--primary-hover` | `#1D4ED8` (Blue 700) | สถานะ Hover ของปุ่มหลัก |
| `--primary-light` | `#EFF6FF` (Blue 50) | พื้นหลังไอคอน, ไฮไลต์กล่องข้อมูลสำคัญ |
| `--primary-border` | `#BFDBFE` (Blue 200) | ขอบกรอบเน้นสีน้ำเงิน |

### 2.2 Semantic & Status Colors
| Status | Token Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Success** | `--success` | `#16A34A` (Green 600) | สอบผ่าน, ติ๊ก Checklist สำเร็จ, Toast สำเร็จ |
| **Success Bg** | `--success-light`| `#F0FDF4` (Green 50) | พื้นหลังการ์ดความสำเร็จ, แบนเนอร์กู้คืนเซสชัน Solo |
| **Danger** | `--danger` | `#DC2626` (Red 600) | สอบตก, ปุ่มยุบห้อง/เตะผู้ใช้, Toast ข้อผิดพลาด |
| **Danger Bg** | `--danger-light` | `#FEF2F2` (Red 50) | กล่องแจ้งเตือนวิกฤต, พื้นหลังปุ่มอันตราย |
| **Warning** | `--warning` | `#D97706` (Amber 600) | แจ้งเตือนเวลาใกล้หมด, คำเตือนสถานะห้อง |
| **Warning Bg** | `--warning-light`| `#FFFBEB` (Amber 50) | พื้นหลังกล่องข้อควรระวัง |
| **Info** | `--info` | `#0284C7` (Sky 600) | ข้อมูลทั่วไป, แนะนำการใช้งาน |

### 2.3 Neutral & Surface Colors (Light Mode)
| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| `--bg` | `#F8FAFC` (Slate 50) | พื้นหลังหลักของหน้าเว็บ (Canvas) |
| `--surface` | `#FFFFFF` (Pure White) | พื้นหลังการ์ด, โมดอล, ช่องกรอกข้อมูล |
| `--border` | `#E2E8F0` (Slate 200) | ขอบเส้นแบ่ง, ขอบการ์ด |
| `--text-primary` | `#0F172A` (Slate 900) | หัวข้อเรื่อง, ข้อความหลักที่ต้องการความคมชัด |
| `--text-secondary` | `#475569` (Slate 600) | เนื้อหาอธิบายทั่วไป, คำชี้แจง |
| `--text-muted` | `#94A3B8` (Slate 400) | วันที่, ตัวช่วยพิมพ์, Placeholder |

---

## 3. Typography Hierarchy

| Category | Font Family | Size (Desktop) | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `'Bai Jamjuree', sans-serif` | 2.25rem (36px) | 800 | 1.2 | หัวข้อหลักหน้าแรก, เลขจับเวลาสถานี |
| **Heading 1**| `'Bai Jamjuree', sans-serif` | 1.5rem (24px) | 700 | 1.3 | หัวข้อสถานีสอบ, ชื่อโมดอล |
| **Heading 2**| `'Bai Jamjuree', sans-serif` | 1.25rem (20px) | 700 | 1.35 | หัวข้อย่อยในการ์ด, กล่องผลลัพธ์ |
| **Body Lead**| `'Bai Jamjuree', sans-serif` | 1.05rem (17px) | 500 / 600 | 1.5 | บทบาทผู้ป่วย (Scenario), คำสั่งสำคัญ |
| **Body Regular**| `'Bai Jamjuree', sans-serif` | 0.95rem (15px) | 400 / 500 | 1.6 | รายละเอียดเคส, คำอธิบายตัวเลือก |
| **Small / Meta**| `'Bai Jamjuree', sans-serif` | 0.85rem (13.6px) | 400 / 600 | 1.45 | แท็กสถานะ, คำแนะนำใต้ช่องกรอก |
| **Monospace**| `'JetBrains Mono', 'Fira Code', monospace` | 1.0rem - 2.5rem | 700 / 900 | 1.0 | รหัส PIN ห้องสอบ 4 หลัก, Case ID |

---

## 4. Spacing, Radius & Elevation

### 4.1 Border Radius
- `--radius-sm`: `6px` (ปุ่มขนาดเล็ก, ชิปคะแนน, ช่องกรอก OTP)
- `--radius-md`: `10px` (การ์ดข้อสอบ, Checklist Item, กล่องข้อความ)
- `--radius-lg`: `16px` (การ์ดใหญ่, กล่องตั้งค่าห้องสอบ, โมดอลหลัก)
- `--radius-full`: `9999px` (Pill badges, Avatar, ปุ่มวงกลม)

### 4.2 Elevation & Shadows
- `--shadow-sm`: `0 1px 3px rgba(0,0,0,0.06)` (ชิป, ปุ่มปกติ)
- `--shadow-md`: `0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.04)` (การ์ดทั่วไป)
- `--shadow-lg`: `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)` (เมนูลอย, Sticky Bar)
- `--shadow-xl`: `0 20px 25px -5px rgba(0,0,0,0.15), 0 10px 10px -5px rgba(0,0,0,0.04)` (โมดอลกลางจอ, Toasts)

---

## 5. UI Component Specifications

### 5.1 Interactive Checklist Items
- **Min Height:** ต้องมี `min-height: 44px` เสมอ เพื่อรองรับมาตรฐาน Touch Target ของนิ้วมือบนสมาร์ทโฟน/แท็บเล็ต
- **Padding:** `0.75rem 1rem` (Desktop), `0.65rem 0.75rem` (Mobile)
- **Checked State:**
  - พื้นหลังเปลี่ยนเป็นสีเขียวอ่อนโปร่งใส (`rgba(16, 185, 129, 0.08)`)
  - ขอบซ้ายหรือขอบกรอบเป็นสีเขียว `--success`
  - กล่อง Checkbox แสดงเครื่องหมายถูกสีขาวบนพื้นเขียว
- **AI-Auto Checked State:**
  - ขอบซ้ายเน้นสีฟ้าเข้ม `3.5px solid #0ea5e9`
  - มีไอคอนกำกับ `🤖 AI Checked` ชัดเจน

### 5.2 Buttons
- **Touch Target:** ทุกปุ่มมีส่วนสูงไม่น้อยกว่า `40px` (ปุ่มปกติ) หรือ `48px` (ปุ่มหลักในการสอบ)
- **Disabled State:** `opacity: 0.55`, `cursor: not-allowed`, ไม่มีปฏิกิริยาต่อการคลิกหรือ Hover
- **No Blockers:** หลีกเลี่ยงการใช้ `href="#"` หรือ `javascript:void(0)` ในปุ่ม ให้ใช้ `<button type="button">` เสมอ

### 5.3 Notification & Feedback System
- **Toasts (`showPleToast`):**
  - แสดงผลมุมขวาบนแบบลอยตัว (Non-blocking) ไม่บังส่วนกลางของโจทย์
  - สามารถปิดเองอัตโนมัติภายใน 3-4 วินาที หรือคลิกเพื่อปิดได้ทันที
  - รองรับ 4 สถานะ: Success ✅, Error ❌, Warning ⚠️, Info ℹ️
- **Confirmation Modals (`showPleConfirmModal`):**
  - ใช้แทน Native `confirm()` ซึ่งหยุดการทำงานของ Browser thread
  - มีการเบลอฉากหลัง (`backdrop-filter: blur(6px)`)
  - รองรับการกดแป้นพิมพ์ `Escape (ESC)` หรือคลิกพื้นหลังเพื่อยกเลิกอย่างปลอดภัย

---

## 6. Accessibility (a11y) & Keyboard Navigation
1. **Escape Key Handling:** ทุก Modal และ Drawer ในหน้าเว็บต้องผูก Event Listener ให้สามารถปิดได้ทันทีเมื่อกดปุ่ม `ESC`
2. **Focus Visibility:** ทุกองค์ประกอบที่มีการคลิกได้ (Buttons, Inputs, Checkboxes) ต้องมี `:focus-visible` ชัดเจน
3. **Clean Plain Text Output:** ในการสรุปผลหรือส่งข้อมูลไปยัง Google Sheets ห้ามใช้เครื่องหมายดอกจันเน้นข้อความ (`**` หรือ `*`) และห้ามมีแท็ก `<br>` โดยเด็ดขาด ให้ใช้การเว้นบรรทัดจริง (`\n\n`) และลำดับหัวข้อด้วย Emoji ตามระเบียบข้อ 3.6 ของโครงการ
