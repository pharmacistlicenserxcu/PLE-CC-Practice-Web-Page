# PLE-CC Design System & UI Specification 🎨
เอกสารมาตรฐานการออกแบบส่วนต่อประสานผู้ใช้ (UI/UX Design System) สำหรับระบบเตรียมสอบใบประกอบวิชาชีพเภสัชกรรม คณะเภสัชศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย (RxCU84/85)

---

## 1. ปรัชญาและแนวคิดการออกแบบ (Design Philosophy)
- Warm Light Minimalist: โทนสีหลักเป็นพื้นหลังครีมอบอุ่น นุ่มนวล สบายตา เหมาะกับการอ่านโจทย์และการสอบแบบจ้องหน้าจอเป็นเวลานาน
- Clinical Professionalism: ให้ความรู้สึกเป็นมืออาชีพ เรียบร้อย ชัดเจน และตรงไปตรงมา
- Consistency: ใช้องค์ประกอบ ปุ่ม การ์ด และลำดับความสำคัญ (Visual Hierarchy) เหมือนกันทุกหน้า ทั้ง OSPE Simulator, Case Viewer, Case Library และ Quiz Platform

---

## 2. โทนสีและ Design Tokens (Color Palette)

### 2.1 สีพื้นหลังและพื้นผิว (Surfaces & Backgrounds)
- พื้นหลังหลัก (Background): `#F6F5F1` (วอร์มครีม ละมุนตา ไม่สว่างจ้า)
- พื้นหลังรอง (Secondary Background): `#ECEAE4` (ใช้สำหรับแถบนำทาง ช่องป้อนข้อมูล หรือแถบตาราง)
- การ์ดและพื้นผิวคอนเทนต์ (Surface / Card): `#FFFFFF` (สีขาวเพื่อให้อ่านตัวหนังสือและผล Lab ชัดเจนที่สุด)
- เส้นขอบ (Border): `#E4E2DA` (เส้นขอบหลัก นุ่มนวล ไม่แย่งสายตา)
- เส้นขอบเข้ม (Border Dark): `#D0CCC2` (เส้นแบ่งส่วนสำคัญ)

### 2.2 สีตัวอักษร (Typography Colors)
- ตัวอักษรหลัก (Primary Text): `#1C2320` (สีเทาเข้มเกือบดำ สบายตากว่าสีดำสนิท)
- ตัวอักษรรอง (Secondary Text): `#555C54` (สีเทากลาง สำหรับคำอธิบายประกอบ)
- ตัวอักษรจาง / Meta (Muted Text): `#475569` (สำหรับตัวเลขนับเวลา แหล่งที่มา วันที่)

### 2.3 สีประจำหมวดวิชา (Track Colors)
- Clinic (สายคลินิก):
  - Primary: `#0891B2` / `#0E7490` (ฟ้าอมเขียว Cyan/Teal)
  - Soft Badge: `#ECFEFF`
  - Border: `#A5F3FC`
- Product (สายผลิตภัณฑ์):
  - Primary: `#7C3AED` (ม่วง Royal Purple)
  - Soft Badge: `#F3E8FF`
  - Border: `#DDD6FE`
- SAP (สายบริหารและสังคม):
  - Primary: `#D97706` (ส้มทอง Amber)
  - Soft Badge: `#FEF3C7`
  - Border: `#FDE68A`
- Combined / All Track:
  - Primary: `#4F46E5` (คราม Indigo)
  - Soft Badge: `#EEF2FF`
  - Border: `#C7D2FE`

### 2.4 สีสถานะ (Status Colors)
- ผ่าน / สำเร็จ / ถูกต้อง (Success): `#16A34A` (Soft: `#DCFCE7`, Border: `#86EFAC`)
- คำเตือน / กำลังดำเนินงาน (Warning): `#D97706` (Soft: `#FEF3C7`, Border: `#FDE68A`)
- ไม่ผ่าน / ข้อผิดพลาด / ซ่อน (Danger): `#DC2626` / `#EF4444` (Soft: `#FEE2E2`, Border: `#FECACA`)

---

## 3. ตัวอักษรและแบบอักษร (Typography)
- Font Family:
  - หัวข้อและเนื้อหาหลัก: `Bai Jamjuree`, sans-serif (น้ำหนัก 300, 400, 500, 600, 700)
  - ตัวเลข รหัส และตัวจับเวลา: `IBM Plex Mono`, monospace (น้ำหนัก 400, 500, 600, 700)
- ขนาดและระยะความสูงบรรทัด (Font Sizes & Line Height):
  - Heading 1 (ชื่อเคส/หัวเรื่องหลัก): `1.4rem - 1.8rem` | Line-height `1.3` | Bold (700)
  - Heading 2 (ชื่อหมวด เช่น สถานการณ์, ข้อมูลผู้ป่วย): `1.1rem - 1.25rem` | Line-height `1.4` | Bold (700)
  - Heading 3 (หัวข้อย่อย): `0.95rem - 1.05rem` | Line-height `1.5` | Semi-bold (600)
  - Body Text (เนื้อหาโจทย์และ Checklist): `0.9rem - 1.0rem` | Line-height `1.6 - 1.7` | Regular (400)
  - Small / Badge / Meta: `0.72rem - 0.82rem` | Line-height `1.3` | Medium/Bold (500-700)

---

## 4. รัศมีความโค้งและเงา (Radius & Shadows)
- Radius Tokens:
  - ป้ายกำกับเล็ก (Badge / Chip): `border-radius: 4px` หรือ `6px`
  - ปุ่มกดมาตรฐาน (Standard Button): `border-radius: 8px` หรือ `10px`
  - ปุ่มทรงแคปซูล (Pill Button / Modern Control): `border-radius: 9999px`
  - การ์ดและกล่องเนื้อหา (Card / Container): `border-radius: 12px` หรือ `14px`
  - หน้าต่าง Modal และ Dialog: `border-radius: 16px` หรือ `20px`
- Shadow Tokens:
  - Subtle (กล่องทั่วไป): `0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)`
  - Elevated (การ์ดที่กดได้ / Dropdown): `0 4px 16px rgba(0,0,0,0.07)`
  - Floating (Modal / Alert): `0 20px 48px rgba(0,0,0,0.10)`

---

## 5. กฎการออกแบบส่วนประกอบสำคัญ (Component Guidelines)

### 5.1 แผงควบคุมผู้ประเมิน (Examiner Control Panel)
- โครงสร้าง: ใช้พื้นผิวการ์ดสีขาว ขอบสีเทาหรือส้มทองบาง `1px solid var(--border)` เสริมแถบไอคอนชัดเจน
- ป้ายสถานะ (Status Pill):
  - เมื่อยังไม่ส่งข้อมูล: `🔒 ยังไม่ส่ง (Hidden)` ใช้สีเทาหรือส้มอ่อน ไม่ฉูดฉาดเกินไป
  - เมื่อส่งข้อมูลแล้ว: `🟢 ส่งแล้ว (Active)` ใช้สีเขียวซอฟต์พาสเทล
- ปุ่มกดกระทำ (Action Buttons):
  - ปุ่มส่งข้อมูล: ใช้ทรง Pill Button ขอบมน มั่นคง มีเงาเบาๆ บ่งบอกความพร้อมในการกด
  - ปุ่มซ่อนข้อมูลกลับ: ใช้แบบ Soft Outline สีแดงโปร่งแสง เพื่อลดความแข็งกระด้างและป้องกันการกดพลาด

### 5.2 ช่องเติมคำตอบ (Interactive Fill-in-the-Blank)
- ช่องกรอก: ขอบมน `6px` สีขอบ `1.5px solid var(--border)` กว้างพอดีกับขนาดที่ระบุ (`len: short/medium/long`)
- ปุ่มส่งคำตอบ: วางชิดช่องกรอก พร้อมไอคอนจรวดหรือข้อความ `Send`
- เมื่อตรวจเสร็จ: แสดงผลลัพธ์ผ่าน Badge สีเขียว `✓ ถูกต้อง` หรือสีแดง `❌ ยังไม่ถูก` ทันที

### 5.3 กล่องวิดีโอ (VDO Media Embed & Print)
- บนหน้าจอ (Screen): แสดงเป็น Player การ์ดกว้างไม่เกิน 620px อัตราส่วน 16:9 ไร้ขอบดำหนาเกินไป พร้อมปุ่มเปิดแท็บใหม่
- ในเอกสารพิมพ์ (PDF Print): ซ่อน Iframe อัตโนมัติ (`no-print`) และแสดงกล่อง QR Code ชัดเจน เพื่อให้สแกนดูคลิปได้จากกระดาษรายงานผล

---

## 6. กฎการรองรับอุปกรณ์เคลื่อนที่และจอแคบ (Responsive Rules)
- Touch Targets: ปุ่มกดสำคัญต้องมีความสูงไม่ต่ำกว่า 40px - 44px
- Horizontal Overflow: ห้ามมีแนวนอน Scrollbar ในหน้าหลัก กล่องเนื้อหาทุกชิ้นต้องมี `max-width: 100%` และ `box-sizing: border-box`
- Dynamic Wrap: แผงควบคุมและปุ่มสถานะต้องใช้ `display: flex; flex-wrap: wrap; gap: ...` เพื่อให้จัดเรียงอัตโนมัติบนจอสมาร์ตโฟน
