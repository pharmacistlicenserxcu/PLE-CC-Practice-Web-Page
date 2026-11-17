/**
 * Compounding Lab 3D — Core 6 Archetypes + 120 CC2 Product Station Mapper
 * Aligned with Pharmacy Council OSPE Rubrics & Chula Pharmacy 46 Training Videos
 */
window.LAB_ARCHETYPES = {
  SOLUTION_NAHCO3: {
    id: 'SOLUTION_NAHCO3',
    code: 'OSPE-PD83M01',
    name: 'Sodium Bicarbonate Oral Solution (30 mL)',
    category: 'Oral Solution',
    rxText: 'NaHCO₃ 1.5 g + Glycerin 5.0 mL + Preservative 0.5 mL + Purified Water q.s. ad 30.0 mL',
    bud: '14d_fridge',
    auxLabels: ['เก็บในตู้เย็น 2–8°C'],
    videos: ['C03-1', 'T03', 'T04-1', 'T04-2', 'T10'],
    steps: [
      { id: 'label', type: 'label_uncap', title: '1. ตรวจฉลาก 3 ครั้ง & เปิดฝาหงาย', pts: 1.0, cam: 'overview',
        hint: 'คลิกขวด NaHCO₃ หมุนอ่านฉลากให้ครบ 3 ครั้ง (ก่อนหยิบ, ก่อนชั่ง, หลังชั่ง) แล้วเปิดฝาวางหงายบนโต๊ะ' },
      { id: 'tare', type: 'fold_tare', title: '2. พับกระทง, ปิดกระจก & กด TARE', pts: 1.5, cam: 'weigh',
        hint: 'พับกระทงกระดาษไขทแยงมุม วางบนจานชั่ง เลื่อนปิดกระจกกันลม แล้วกดปุ่ม TARE สีเขียว (0.000 g)' },
      { id: 'weigh', type: 'scoop_weigh', title: '3. ตัก & เคาะชั่ง NaHCO₃ (1.500 g)', pts: 1.5, cam: 'weigh',
        targetMass: 1.500, tol: 0.075,
        hint: 'ใช้ Spatula ตักผง NaHCO₃ แล้วเคาะลงกระทงทีละน้อยให้ได้ 1.500 g (±5% = 1.425–1.575 g)' },
      { id: 'water', type: 'pour_beaker', title: '4. เทน้ำกลั่น 10–15 mL & คนละลาย', pts: 1.5, cam: 'pour',
        liquidId: 'water', targetMin: 10, targetMax: 15.5, needStir: true,
        hint: 'ลากขวด Purified Water มาเหนือบีกเกอร์ เอียงเท 10–15 mL แล้วใช้แท่งแก้วคนจนผงละลายใส' },
      { id: 'gly', type: 'pour_beaker', title: '5. เท Glycerin 5.0 mL + Draining Time', pts: 1.5, cam: 'pour',
        liquidId: 'glycerin', targetMin: 4.5, targetMax: 5.5, needDrain: true,
        hint: 'เอียงขวด Glycerin เทลงบีกเกอร์ ~5.0 mL และค้างเอียงรอ Draining Time อย่างน้อย 10 วิ' },
      { id: 'rinse', type: 'rinse_transfer', title: '6. Rinse บีกเกอร์ ≥2 รอบ ลงกระบอกตวง', pts: 1.0, cam: 'pour',
        minRinses: 2,
        hint: 'ใช้ขวดน้ำกลั่นฉีด Rinse บีกเกอร์อย่างน้อย 2 รอบ แล้วเทของเหลวทั้งหมดลงกระบอกตวง 50 mL' },
      { id: 'meniscus', type: 'eye_meniscus', title: '7. อ่าน Meniscus ระดับสายตา (30.0 mL)', pts: 1.0, cam: 'meniscus',
        targetVol: 30.0, tol: 0.5,
        hint: 'กล้องปรับมาระดับสายตาแล้ว! กดหยดน้ำด้วย Dropper จนท้องน้ำ (Lower Meniscus) แตะขีด 30.0 mL' },
      { id: 'package', type: 'package_label', title: '8. บรรจุขวดชา & ติดฉลาก BUD 14 วัน', pts: 1.0, cam: 'overview',
        correctBud: '14d_fridge', reqAux: 'fridge',
        hint: 'สวมกรวยเทยาลงขวดแก้วสีชา ปิดฝา และเลือก BUD 14 วัน (เก็บในตู้เย็น)' }
    ]
  },

  MUCILAGE_SCMC: {
    id: 'MUCILAGE_SCMC',
    code: 'OSPE-PD83M02',
    name: 'Sodium CMC Mucilage (20 mL)',
    category: 'Mucilage / Gel-Sol',
    rxText: 'Sodium CMC 0.20 g + Preservative solution 0.2 mL + Hot Purified Water q.s. ad 20.0 mL',
    bud: '14d_fridge',
    auxLabels: ['เก็บในตู้เย็น 2–8°C'],
    videos: ['C04-3', 'T10', 'T04-1'],
    steps: [
      { id: 'label', type: 'label_uncap', title: '1. ตรวจฉลาก SCMC & เปิดฝาหงาย', pts: 1.5, cam: 'overview',
        hint: 'อ่านฉลาก SCMC ครบ 3 ครั้งและเปิดฝาวางหงายบนโต๊ะ' },
      { id: 'water', type: 'pour_beaker', title: '2. เทน้ำร้อน 15 mL ลงบีกเกอร์', pts: 2.0, cam: 'pour',
        liquidId: 'water', targetMin: 13, targetMax: 17, needStir: false,
        hint: 'เทน้ำร้อน (Purified Water) ประมาณ 15 mL ลงในบีกเกอร์เพื่อเตรียมโปรยผง SCMC' },
      { id: 'sprinkle', type: 'sprinkle_stir', title: '3. โปรยผง SCMC ช้าๆ & กวนเบาๆ (กันก้อน/ฟอง)', pts: 3.0, cam: 'birdeye',
        targetMass: 0.20, maxSpeed: 0.65,
        hint: 'มุมมอง Bird-Eye: โปรยผง SCMC ทีละน้อย (ห้ามเทพรวด!) แล้วกวนแท่งแก้วช้าๆ ป้องกัน Lumping และฟองอากาศ' },
      { id: 'rinse', type: 'rinse_transfer', title: '4. Rinse บีกเกอร์ 2 รอบ ลงกระบอกตวง', pts: 1.5, cam: 'pour',
        minRinses: 2,
        hint: 'ฉีดน้ำกลั่น Rinse บีกเกอร์ ≥2 รอบ แล้วย้ายลงกระบอกตวง' },
      { id: 'meniscus', type: 'eye_meniscus', title: '5. ปรับ Meniscus 20.0 mL ระดับสายตา', pts: 1.0, cam: 'meniscus',
        targetVol: 20.0, tol: 0.5,
        hint: 'ใช้ Dropper ปรับท้องน้ำแตะขีด 20.0 mL ที่ระดับสายตา' },
      { id: 'package', type: 'package_label', title: '6. บรรจุขวดชา & กำหนด BUD 14 วัน', pts: 1.0, cam: 'overview',
        correctBud: '14d_fridge', reqAux: 'fridge',
        hint: 'เทลงขวดสีชา ปิดฝา และเลือก BUD 14 วัน (แช่เย็น)' }
    ]
  },

  SUSPENSION_TABLET: {
    id: 'SUSPENSION_TABLET',
    code: 'OSPE-PD83M03',
    name: 'Pediatric Enalapril Suspension from Tablets (30 mL)',
    category: 'Extemporaneous Suspension',
    rxText: 'Enalapril 5 mg tablets (3 tabs) + Glycerin (Levigating) q.s. + Suspending Vehicle q.s. ad 30.0 mL',
    bud: '14d_fridge',
    auxLabels: ['เขย่าขวดก่อนใช้', 'เก็บในตู้เย็น 2–8°C'],
    videos: ['C04-5', 'T01', 'T12', 'T10'],
    steps: [
      { id: 'pound', type: 'mortar_grind', title: '1. ตอกเม็ดยา & บดวนละเอียด (Bird-Eye)', pts: 2.0, cam: 'birdeye',
        mortarType: 'porcelain', needPound: true, targetGrind: 100,
        hint: 'มุมมอง Bird-Eye: กดตอก (Pound) ให้เม็ดยาแตกก่อน แล้วลากวนลูกโกร่งเป็นวงกลมบดจนละเอียด' },
      { id: 'levigate', type: 'mortar_levigate', title: '2. หยด Glycerin ทำ Smooth Paste', pts: 2.0, cam: 'birdeye',
        targetDrops: 4, targetGrind: 80,
        hint: 'หยด Glycerin 3–5 หยดลงผงยา แล้วบดวนทำ Smooth Paste ไม่ให้เหลือเม็ดหยาบ' },
      { id: 'vehicle', type: 'pour_beaker', title: '3. เติม Suspending Vehicle ทีละส่วน', pts: 1.5, cam: 'pour',
        liquidId: 'water', targetMin: 12, targetMax: 18, needStir: true,
        hint: 'เท Suspending Vehicle ลงผสมทีละส่วนและคนให้เข้ากัน' },
      { id: 'rinse', type: 'rinse_transfer', title: '4. Rinse โกร่ง 3 รอบ ลงกระบอกตวง', pts: 1.5, cam: 'pour',
        minRinses: 3,
        hint: 'ล้างโกร่งบดยาด้วยน้ำกระสายยา ≥3 รอบ เพื่อกู้ตัวยาทั้งหมดลงกระบอกตวง' },
      { id: 'meniscus', type: 'eye_meniscus', title: '5. อ่าน Meniscus ระดับสายตา (30.0 mL)', pts: 1.5, cam: 'meniscus',
        targetVol: 30.0, tol: 0.5,
        hint: 'หยด Vehicle ปรับปริมาตรจนท้องน้ำแตะขีด 30.0 mL ที่ระดับสายตา' },
      { id: 'package', type: 'package_label', title: '6. บรรจุขวด + ฉลากช่วย "เขย่าขวดก่อนใช้"', pts: 1.5, cam: 'overview',
        correctBud: '14d_fridge', reqAux: 'shake',
        hint: 'บรรจุขวดชา เลือกฉลากช่วย "เขย่าขวดก่อนใช้" และ BUD 14 วัน (แช่เย็น)' }
    ]
  },

  GEL_CARBOPOL: {
    id: 'GEL_CARBOPOL',
    code: 'OSPE-PD83M04',
    name: 'Carbopol Hydrogel (20 g)',
    category: 'Topical Gel',
    rxText: 'Carbopol 940 (0.30 g) + Triethanolamine (7 drops) + Active Drug (0.03 g) + Purified Water (19.43 g)',
    bud: '30d_room',
    auxLabels: ['ใช้ภายนอก ห้ามรับประทาน'],
    videos: ['C06-1', 'T06', 'T04-1'],
    steps: [
      { id: 'tare', type: 'fold_tare', title: '1. วางบีกเกอร์บนตาชั่ง & กด TARE', pts: 1.5, cam: 'weigh',
        hint: 'วางภาชนะบนจานชั่ง ปิดกระจกกันลม แล้วกด TARE (0.000 g)' },
      { id: 'weigh_water', type: 'pour_beaker', title: '2. เทน้ำกลั่นเตรียมฐานเจล (~19.4 mL)', pts: 2.0, cam: 'pour',
        liquidId: 'water', targetMin: 17.5, targetMax: 21.0, needStir: false,
        hint: 'เท Purified Water ประมาณ 19.4 mL ลงบีกเกอร์อย่างแม่นยำ' },
      { id: 'sprinkle', type: 'sprinkle_stir', title: '3. โปรย Carbopol 940 ทีละน้อย & กวนเบา', pts: 2.5, cam: 'birdeye',
        targetMass: 0.30, maxSpeed: 0.7,
        hint: 'มุมมอง Bird-Eye: โปรย Carbopol ช้าๆ ป้องกันก้อน และกวนเบาๆ ป้องกันฟองอากาศ' },
      { id: 'neutralize', type: 'drop_neutralize', title: '4. หยด TEA 7 หยด ปรับ pH จนเจลใส', pts: 2.5, cam: 'birdeye',
        targetDrops: 7, tolDrops: 1,
        hint: 'ใช้ Dropper หยด Triethanolamine ทีละหยด (เป้า 7 หยด) แล้วคนจนเจลข้นใส' },
      { id: 'package', type: 'package_label', title: '5. บรรจุตลับ & ฉลาก "ใช้ภายนอก" (BUD 30 วัน)', pts: 1.5, cam: 'overview',
        correctBud: '30d_room', reqAux: 'external',
        hint: 'บรรจุตลับยา เลือกฉลาก "ใช้ภายนอก" และ BUD 30 วัน (Water-containing topical)' }
    ]
  },

  SEMISOLID_SLAB: {
    id: 'SEMISOLID_SLAB',
    code: 'OSPE-PD83M06',
    name: 'Sulfur Ointment / Semisolid Incorporation on Slab',
    category: 'Semisolid Ointment / Cream',
    rxText: 'Sulfur precipitated 1.0 g + Mineral oil (Levigating) q.s. + White Ointment Base q.s. ad 20.0 g',
    bud: '6mo_room',
    auxLabels: ['ใช้ภายนอก ห้ามรับประทาน'],
    videos: ['T05', 'T13', 'T14', 'C05-3'],
    steps: [
      { id: 'tare', type: 'fold_tare', title: '1. พับกระทง 2 ชั้น (Double Paper) & TARE', pts: 1.5, cam: 'weigh',
        hint: 'พับกระทงกระดาษไขซ้อนกระดาษขาวสำหรับชั่งสารกึ่งแข็ง วางบนจานชั่งแล้วกด TARE' },
      { id: 'weigh', type: 'scoop_weigh', title: '2. ชั่งผงยา Sulfur 1.000 g (±5%)', pts: 2.0, cam: 'weigh',
        targetMass: 1.000, tol: 0.050,
        hint: 'ตักและเคาะผง Sulfur ลงกระทงให้ได้ 1.000 g (0.950–1.050 g)' },
      { id: 'levigate_slab', type: 'slab_spatulate', title: '3. บดผสมบน Slab (Levigation + Geometric Dilution)', pts: 4.5, cam: 'birdeye',
        stages: ['1:1', '1:2', '1:4'],
        hint: 'มุมมอง Bird-Eye บน Ointment Slab: หยด Mineral Oil แล้วลาก Spatula ถูเป็นรูปเลข 8 ผสมแบบ Geometric 1:1 → 1:2 → 1:4 จนเนื้อเนียน' },
      { id: 'package', type: 'package_label', title: '4. บรรจุตลับ & ฉลาก "ใช้ภายนอก" (BUD 6 เดือน)', pts: 2.0, cam: 'overview',
        correctBud: '6mo_room', reqAux: 'external',
        hint: 'ปาดบรรจุตลับยา เลือกฉลาก "ใช้ภายนอก" และ BUD 6 เดือน (Nonaqueous)' }
    ]
  },

  CAMPHOR_INTERVENTION: {
    id: 'CAMPHOR_INTERVENTION',
    code: 'OSPE-PD83M08',
    name: 'Camphor Pulverization by Intervention',
    category: 'Special Powder Technique',
    rxText: 'Camphor 1.0 g + Alcohol 95% (Intervening agent) q.s. + Talcum / Starch q.s. ad 10.0 g',
    bud: '6mo_room',
    auxLabels: ['ใช้ภายนอก ห้ามรับประทาน'],
    videos: ['T02-1', 'T02-2', 'T12', 'T01'],
    steps: [
      { id: 'choose_mortar', type: 'select_mortar', title: '1. เลือกโกร่งที่เหมาะสม (Glass vs Porcelain)', pts: 2.0, cam: 'overview',
        correctMortar: 'glass',
        hint: 'Camphor มีกลิ่นติดแน่นและระเหิดง่าย ต้องเลือกใช้โกร่งแก้ว (Glass Mortar) หรือโกร่งกระเบื้อง?' },
      { id: 'drop_alc', type: 'mortar_levigate', title: '2. หยด Alcohol 95% ด้วย Dropper (3–5 หยด)', pts: 2.5, cam: 'birdeye',
        targetDrops: 4, targetGrind: 60,
        hint: 'ใช้ Dropper หยด Alcohol 95% พอเปียกชื้น (3–5 หยด ห้ามแฉะโชก!) เพื่อช่วยลดขนาดผลึก Camphor' },
      { id: 'grind_evap', type: 'mortar_grind', title: '3. บดวนเบาๆ ทิศทางเดียวจน Alcohol ระเหยแห้ง', pts: 3.5, cam: 'birdeye',
        mortarType: 'glass', needPound: false, targetGrind: 100,
        hint: 'มุมมอง Bird-Eye: ออกแรงบดวนเบาๆ ทิศทางเดียวจน Alcohol ระเหยหมด ได้ผงแห้งละเอียด และปาดข้างโกร่ง' },
      { id: 'package', type: 'package_label', title: '4. บรรจุซอง/ขวดยาผง & BUD 6 เดือน', pts: 2.0, cam: 'overview',
        correctBud: '6mo_room', reqAux: 'external',
        hint: 'บรรจุภาชนะปิดสนิท เลือกฉลาก "ใช้ภายนอก" และ BUD 6 เดือน' }
    ]
  },

  EMULSION_DRYGUM: {
    id: 'EMULSION_DRYGUM',
    code: 'OSPE-PD-EMUL01',
    name: 'Mineral Oil Emulsion (Dry Gum 4:2:1 Method)',
    category: 'Emulsion (4:2:1)',
    rxText: 'Mineral Oil 10.0 mL + Acacia 2.5 g + Purified Water 5.0 mL (Primary) → q.s. ad 30.0 mL',
    bud: '14d_fridge',
    auxLabels: ['เขย่าขวดก่อนใช้', 'เก็บในตู้เย็น 2–8°C'],
    videos: ['C04-7', 'C04-8', 'T10'],
    steps: [
      { id: 'ratio_check', type: 'clinic_confirm', title: '1. สัดส่วน Primary Emulsion (Dry Gum)', pts: 1.5, cam: 'overview',
        choices: [
          { id: '421', label: 'อัตราส่วน Oil : Water : Acacia = 4 : 2 : 1 (บด Oil + Acacia ในโกร่งแห้งก่อน)', correct: true },
          { id: '124', label: 'อัตราส่วน Oil : Water : Acacia = 1 : 2 : 4 (เติมน้ำลงโกร่งก่อน)', correct: false }
        ],
        hint: 'วิธี Dry Gum (Continental) ใช้สัดส่วน Oil : Water : Gum = 4 : 2 : 1 โดยผสม Oil กับ Acacia ในโกร่งแห้งก่อน' },
      { id: 'emulsion_click', type: 'emulsion_triturate', title: '2. เติมน้ำรวดเดียว & บดเร็ว จนเกิด "Clicking Sound"', pts: 4.5, cam: 'birdeye',
        targetGrind: 100,
        hint: 'มุมมอง Bird-Eye: เติมน้ำ 5.0 mL รวดเดียว แล้วบดวนเร็วๆ ต่อเนื่องจนเนื้อยาเปลี่ยนเป็นสีขาวข้น และเกิดเสียง "คลิก (Clicking sound)"' },
      { id: 'rinse', type: 'rinse_transfer', title: '3. เจือจางด้วยน้ำทีละน้อย & Rinse โกร่งลงกระบอกตวง', pts: 1.5, cam: 'pour',
        minRinses: 2,
        hint: 'เจือจาง Primary Emulsion ด้วยน้ำทีละน้อยแล้ว Rinse โกร่ง ≥2 รอบ ลงกระบอกตวง' },
      { id: 'meniscus', type: 'eye_meniscus', title: '4. ปรับ Meniscus 30.0 mL ระดับสายตา', pts: 1.5, cam: 'meniscus',
        targetVol: 30.0, tol: 0.5,
        hint: 'ปรับปริมาตรจนท้องน้ำแตะขีด 30.0 mL ที่ระดับสายตา' },
      { id: 'package', type: 'package_label', title: '5. บรรจุขวดชา + ฉลาก "เขย่าขวดก่อนใช้"', pts: 1.0, cam: 'overview',
        correctBud: '14d_fridge', reqAux: 'shake',
        hint: 'บรรจุขวดชา เลือกฉลาก "เขย่าขวดก่อนใช้" และ BUD 14 วัน (แช่เย็น)' }
    ]
  },

  SOLID_POWDER_CHARTULAE: {
    id: 'SOLID_POWDER_CHARTULAE',
    track: 'Product',
    code: 'OSPE-PD83M07',
    name: 'Solid Dosage Forms: Trituration, Geometric Dilution & Divided Powders (Chartulae)',
    category: 'Solid Dosage Forms (Powder / Capsule)',
    rxText: 'Rx: Active Drug 0.100 g + Lactose q.s. ad 3.000 g — M. ft. pulv. div. in chart. No. VI',
    targetMass: 1.500, targetVol: 30.0, tol: 0.05,
    auxLabels: ['เก็บในภาชนะปิดสนิท พ้นความชื้น', 'ยาใช้ภายใน'],
    videos: ['C07-1', 'C07-2'],
    steps: [
      { id: 'tare', type: 'fold_tare', title: '1. พับกระดาษชั่งยา 2 ชั้น & กด TARE', pts: 1.5, cam: 'weigh',
        hint: 'พับกระดาษไขชั่งยา ปิดกระจกกันลม และกด TARE ให้หน้าปัดเป็น 0.000 g' },
      { id: 'weigh', type: 'scoop_weigh', title: '2. ตักชั่งผงยาหลัก & Lactose (1.500 g ±5%)', pts: 2.0, cam: 'weigh',
        targetMass: 1.500, tol: 0.075,
        hint: 'ตักและเคาะผงยาลงบนกระดาษชั่งให้ได้น้ำหนักตามสูตรอย่างแม่นยำ' },
      { id: 'geometric', type: 'geometric_dilute', title: '3. ผสมแบบ Geometric Dilution (1:1) ในโกร่งกระเบื้อง', pts: 3.0, cam: 'birdeye',
        targetGrind: 100,
        hint: 'ผสมตัวยาสำคัญกับสารช่วยในสัดส่วนเท่ากัน (1:1) แล้วบดวนผสมเพิ่มทีละเท่าตัวจนเข้ากันสม่ำเสมอ' },
      { id: 'chartulae', type: 'fold_chartulae', title: '4. แบ่งห่อกระดาษ (Chartulae) / บรรจุแคปซูล', pts: 2.5, cam: 'overview',
        hint: 'วางกระดาษเรียงซ้อนกัน แบ่งผงยาเท่าๆ กันแล้วพับห่อกระดาษยา (Chartulae) ให้เรียบร้อย' },
      { id: 'package', type: 'package_label', title: '5. บรรจุซองกันชื้น & ติดฉลาก (BUD 6 เดือน)', pts: 1.0, cam: 'overview',
        correctBud: '6m_rt', reqAux: 'ext',
        hint: 'บรรจุซองปิดสนิท พ้นแสง/ความชื้น และกำหนด BUD ≤ 6 เดือน (หรือ ≤ 25% ของอายุยาเดิม)' }
    ]
  },

  FILTRATION_PREP: {
    id: 'FILTRATION_PREP',
    track: 'Product',
    code: 'OSPE-PD83W101',
    name: 'Filtration & Aromatic Water Preparation (Peppermint Water)',
    category: 'Special Technique · Filtration',
    rxText: 'Rx: Peppermint Spirit 2 mL + Talc 1.5 g + Purified Water q.s. ad 30 mL (Filter through fluted paper)',
    targetMass: 1.500, targetVol: 30.0, tol: 0.5,
    auxLabels: ['เก็บในขวดแก้วสีชา ปิดสนิท', 'ใช้เป็นน้ำกระสายยา / Carminative'],
    videos: ['T08', 'C03-2'],
    steps: [
      { id: 'tare', type: 'fold_tare', title: '1. พับกระทงชั่ง Talc (Filter Aid) & กด TARE', pts: 1.5, cam: 'weigh',
        hint: 'พับกระดาษชั่งยา ปิดกระจกกันลม แล้วกด TARE ก่อนชั่ง Talc' },
      { id: 'weigh', type: 'scoop_weigh', title: '2. ชั่ง Talc (1.500 g) เพื่อช่วยดูดซับและกรอง', pts: 1.5, cam: 'weigh',
        targetMass: 1.500, tol: 0.075,
        hint: 'ชั่ง Purified Talc 1.500 g เพื่อเป็น Distributing & Filtering Agent' },
      { id: 'water', type: 'pour_beaker', title: '3. เติม Purified Water 20 mL & คนผสมให้กระจายตัว', pts: 2.0, cam: 'pour',
        liquidId: 'water', targetMin: 18, targetMax: 22, needStir: true,
        hint: 'เทน้ำกลั่นลงในบีกเกอร์แล้วคนให้ Talc และน้ำมันหอมระเหยกระจายตัวทั่วถึง' },
      { id: 'filter', type: 'filter_pour', title: '4. พับกระดาษกรองจีบ (Fluted) & กรองผ่านกรวยแก้วจนใส', pts: 3.5, cam: 'pour',
        hint: 'วางกระดาษกรองจีบลงในกรวยแก้ว เทสารละลายกรองช้าๆ (เทส่วนแรกกลับซ้ำหากยังขุ่น) จนได้ Filtrate ใส' },
      { id: 'package', type: 'package_label', title: '5. ปรับปริมาตร & บรรจุขวดแก้วสีชาปิดสนิท', pts: 1.5, cam: 'overview',
        correctBud: '14d_rt', reqAux: 'ext',
        hint: 'บรรจุขวดแก้วสีชาปิดสนิทป้องกันการระเหยของน้ำมันหอมระเหย' }
    ]
  },

  SUPPOSITORY_MOLD: {
    id: 'SUPPOSITORY_MOLD',
    track: 'Product',
    code: 'OSPE-PD-SUPP',
    name: 'Suppository Molding & Displacement Value Calculation',
    category: 'Semisolid / Molded · Suppository',
    rxText: 'Rx: Active Drug + Cocoa Butter / PEG Base — M. ft. supp. No. VI (Calculate Displacement Value)',
    targetMass: 1.500, targetVol: 30.0, tol: 0.05,
    auxLabels: ['เหน็บทวารหนัก / ช่องคลอด', 'เก็บในตู้เย็น 2–8°C'],
    videos: ['C06-1', 'C06-2'],
    steps: [
      { id: 'dv_calc', type: 'clinic_confirm', title: '1. คำนวณ Displacement Value (DV) & ปริมาณ Base เผื่อสูญเสีย', pts: 2.5, cam: 'overview',
        choices: [
          { id: 'dv_ok', label: 'คำนวณน้ำหนักยาทั้งหมด ÷ DV เพื่อหาน้ำหนัก Base ที่ถูกแทนที่ + เผื่อสูญเสีย 1–2 เม็ด (Excess)', correct: true },
          { id: 'no_dv', label: 'ไม่ต้องคิด Displacement Value และชั่งพอดีจำนวนเม็ดไม่ต้องเผื่อสูญเสีย', correct: false }
        ],
        hint: 'การเตรียมยาเหน็บด้วยวิธีหลอมเท (Fusion) ต้องคิด Displacement Value และคำนวณเผื่อสูญเสีย (เช่น เตรียมสำหรับ 8 เม็ดเพื่อเทจริง 6 เม็ด)' },
      { id: 'tare', type: 'fold_tare', title: '2. พับกระทงชั่งตัวยา & เบสยาเหน็บ (TARE)', pts: 1.5, cam: 'weigh',
        hint: 'พับกระดาษชั่งยา ปิดกระจกกันลม และกด TARE' },
      { id: 'weigh', type: 'scoop_weigh', title: '3. ชั่งตัวยาสำคัญ (1.500 g ±5%)', pts: 2.0, cam: 'weigh',
        targetMass: 1.500, tol: 0.075,
        hint: 'ชั่งตัวยาสำคัญให้แม่นยำก่อนนำไปผสมในเบสที่หลอมเหลว' },
      { id: 'mold', type: 'mold_pour_cool', title: '4. หลอมเบส 2/3 ส่วน ผสมยา เทล้นพิมพ์ (Overfill) & ปาดแต่งเมื่อเย็น', pts: 3.0, cam: 'overview',
        hint: 'หลอม Cocoa Butter ด้วยความร้อนต่ำ (Water bath) เทลงพิมพ์โลหะให้ล้นเล็กน้อย ทิ้งให้แข็งตัวแล้วใช้ไม้พายอุ่นปาดส่วนเกิน' },
      { id: 'package', type: 'package_label', title: '5. ห่อฟอยล์ & ฉลาก "ห้ามรับประทาน / เก็บในตู้เย็น"', pts: 1.0, cam: 'overview',
        correctBud: '14d_fridge', reqAux: 'ext',
        hint: 'ห่อด้วยอะลูมิเนียมฟอยล์และติดฉลาก "ยาใช้ภายนอก / ห้ามรับประทาน" เก็บในตู้เย็น 2–8°C' }
    ]
  },

  STERILE_IV_CALC: {
    id: 'STERILE_IV_CALC',
    track: 'Product',
    code: 'OSPE-PD83W105',
    name: 'Sterile Compounding / IV Admixture & Aseptic Technique',
    category: 'Sterile Preparation & Calculation',
    rxText: 'Rx: KCl 20 mEq in 0.9% NSS 500 mL IV Drip — Aseptic Compounding under LAF Hood',
    targetMass: 1.500, targetVol: 30.0, tol: 0.5,
    auxLabels: ['High-Alert Drug', 'ใช้ภายใน 24 ชม. หลังผสม'],
    videos: ['C08-1', 'C08-2'],
    steps: [
      { id: 'calc_check', type: 'clinic_confirm', title: '1. ตรวจสอบความเข้มข้น & คำนวณปริมาตรดูดยา (mEq -> mL)', pts: 2.5, cam: 'overview',
        choices: [
          { id: 'safe_conc', label: 'KCl 20 mEq/10 mL -> ดูด 10 mL ผสมใน 500 mL (40 mEq/L, Rate ≤ 10–20 mEq/hr) · ห้าม IV Push เด็ดขาด', correct: true },
          { id: 'push', label: 'ฉีด KCl 20 mEq IV Push ช้าๆ ได้โดยตรงไม่ต้องเจือจาง', correct: false }
        ],
        hint: 'KCl เป็น High-Alert Drug ต้องเจือจางก่อนบริหารยาทาง IV เสมอ และห้าม IV Bolus/Push' },
      { id: 'aseptic_prep', type: 'clinic_confirm', title: '2. การเตรียมพื้นที่ในตู้ Laminar Air Flow (First Air & Swab 70% Alcohol)', pts: 2.5, cam: 'overview',
        choices: [
          { id: 'laf', label: 'วางอุปกรณ์ไม่บังทิศทางลม (First Air) · เช็ด Rubber stopper & Injection port ด้วย 70% Alcohol รอแห้ง', correct: true },
          { id: 'block', label: 'วางขวดยาเรียงซ้อนบังด้านหน้าเข็มขณะดูดยาได้', correct: false }
        ],
        hint: 'หลีกเลี่ยงการบัง First Air ที่เป่าผ่าน HEPA filter และห้ามสัมผัสจุดวิกฤต (Critical Sites: ปลายเข็ม/แกนลูกสูบ)' },
      { id: 'iv_inject', type: 'aseptic_iv_inject', title: '3. ดูดยาปราศจากเชื้อ ไล่ฟองอากาศ & ฉีดเข้าถุงน้ำเกลือ (Invert ผสม)', pts: 3.5, cam: 'overview',
        hint: 'ดูดยาตามปริมาตรที่คำนวณ ไล่ฟองอากาศ ฉีดเข้า Injection port แล้วพลิกถุงน้ำเกลือขึ้นลงเบาๆ 5–10 ครั้งให้ยาผสมทั่วถึง' },
      { id: 'package', type: 'package_label', title: '4. ตรวจตะกอน/สิ่งแปลกปลอม & ติดฉลาก High-Alert + BUD', pts: 1.5, cam: 'overview',
        correctBud: '14d_fridge', reqAux: 'ext',
        hint: 'ส่องตรวจความใส (Visual inspection) และติดฉลาก High-Alert Drug พร้อมวัน-เวลาหมดอายุ (USP <797>)' }
    ]
  },

  PRODUCT_STABILITY_AUDIT: {
    id: 'PRODUCT_STABILITY_AUDIT',
    track: 'Product',
    code: 'OSPE-CL83M101',
    name: 'Dosage Form Identification, Stability & Pharmaceutical Incompatibility',
    category: 'Product Evaluation & Stability',
    sceneState: 'STATE_DOCUMENT',
    rxText: 'วิเคราะห์รูปแบบยาเตรียม (Dosage Form), ปัญหาความไม่คงตัวทางกายภาพ/เคมี (Incompatibility) และแนวทางแก้ไข',
    targetMass: 1.500, targetVol: 30.0, tol: 0.5,
    auxLabels: ['ตรวจสอบความคงตัว', 'เลือกบรรจุภัณฑ์เหมาะสม'],
    videos: [],
    steps: [
      { id: 'identify_issue', type: 'clinic_confirm', title: '1. ระบุสาเหตุความไม่คงตัว / Incompatibility ของตำรับจากเอกสาร', pts: 4.0, cam: 'overview',
        choices: [
          { id: 'mech_ok', label: 'วิเคราะห์ชนิดความไม่คงตัว (Eutectic, Hydrolysis, Oxidation, Creaming/Cracking, Precipitation) และกลไกการเกิด', correct: true },
          { id: 'ignore', label: 'จ่ายยาตามเดิมโดยไม่ต้องปรับปรุงตำรับหรือเปลี่ยนบรรจุภัณฑ์', correct: false }
        ],
        hint: 'ตรวจสอบส่วนประกอบในตำรับจากเอกสารด้านขวาเพื่อระบุปฏิกิริยาและรูปแบบการเสื่อมสลาย' },
      { id: 'resolve_ai', type: 'ai_dialogue', title: '2. อธิบายแนวทางแก้ไขตำรับ/การเก็บรักษา (Compounder / QC Explanation)', pts: 6.0, cam: 'overview',
        role: 'doctor',
        blocks: [
          'จากการตรวจสอบตำรับ พบปัญหาความไม่คงตัวทางกายภาพ/เคมี คือ...',
          'แนวทางแก้ไขด้านเภสัชกรรม (เช่น ใช้ Adsorbent / เปลี่ยนลำดับผสม / ปรับ pH / ใช้ขวดสีชา) คือ...',
          'ข้อแนะนำเรื่องภาชนะบรรจุและอายุการใช้งานหลังเตรียม (BUD) ที่เหมาะสมคือ...'
        ],
        requiredKeywords: ['ปัญหา', 'แก้', 'คงตัว', 'bud', 'ภาชนะ', 'ผสม', 'เก็บ'],
        fallbackReply: 'ถูกต้องครับ การอธิบายกลไกความไม่คงตัวและวิธีแก้ไขตำรับชัดเจนและเป็นระบบมากครับ',
        hint: 'อธิบายกลไกความไม่คงตัว วิธีแก้ไขตำรับ และภาชนะ/BUD ที่เหมาะสม' }
    ]
  }
};

/**
 * Map any of the 126 OSPE-PD stations in OFFLINE_DATA to a playable 3D Dosage Form Archetype
 */
window.mapStationToArchetype = function(station) {
  const cid = String(station.caseId || '').toUpperCase();
  const titleTxt = `${station.title || ''}`.toLowerCase();
  const txt = `${cid} ${titleTxt} ${station.mainGroup || ''} ${station.disease || ''}`.toLowerCase();
  if (txt.includes('ความไม่คงตัว') || txt.includes('incompat') || txt.includes('การระบุรูปแบบยา') || cid.startsWith('OSPE-CL')) {
    return 'PRODUCT_STABILITY_AUDIT';
  }
  if (txt.includes('sterile') || txt.includes('kcl') || txt.includes('iv ') || txt.includes('laf') || txt.includes('aseptic') || txt.includes('parenteral')) {
    return 'STERILE_IV_CALC';
  }
  if (txt.includes('suppository') || txt.includes('suppositories') || txt.includes('ยาเหน็บ') || txt.includes('displacement')) {
    return 'SUPPOSITORY_MOLD';
  }
  if (txt.includes('filtration') || txt.includes('peppermint') || txt.includes('aromatic water') || txt.includes('กรอง')) {
    return 'FILTRATION_PREP';
  }
  if (txt.includes('emulsion') || txt.includes('อิมัลชัน') || txt.includes('dry gum') || txt.includes('wet gum')) {
    return 'EMULSION_DRYGUM';
  }
  if (txt.includes('camphor') || txt.includes('intervention') || txt.includes('เมนทอล') || txt.includes('พิมเสน')) {
    return 'CAMPHOR_INTERVENTION';
  }
  if (txt.includes('carbopol') || txt.includes('hydrogel') || txt.includes('เจล') || /\bgel\b/.test(txt)) {
    return 'GEL_CARBOPOL';
  }
  if (txt.includes('suspension') || txt.includes('แขวนตะกอน') || txt.includes('เม็ดยา') || txt.includes('enalapril') || txt.includes('extemporaneous') || titleTxt.includes('calamine lotion')) {
    return 'SUSPENSION_TABLET';
  }
  if (txt.includes('mucilage') || txt.includes('scmc') || txt.includes('cmc')) {
    return 'MUCILAGE_SCMC';
  }
  if (txt.includes('ointment') || txt.includes('cream') || txt.includes('paste') || txt.includes('slab') || txt.includes('ขี้ผึ้ง') || txt.includes('ครีม') || txt.includes('semisolid')) {
    return 'SEMISOLID_SLAB';
  }
  if (/\bsolid dosage\b/.test(txt) || txt.includes('trituration') || txt.includes('geometric') || txt.includes('powder') || txt.includes('capsule') || txt.includes('ยาผง') || txt.includes('แคปซูล')) {
    return 'SOLID_POWDER_CHARTULAE';
  }
  return 'SOLUTION_NAHCO3';
};
