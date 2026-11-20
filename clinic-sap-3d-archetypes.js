/**
 * Clinic & SAP 3D OSPE Archetypes + Case Mapper
 * Aligned with Pharmacy Council OSPE Skill Manual & RxCU OFFLINE_DATA
 */
window.CLINIC_SAP_ARCHETYPES = {
  CLINIC_MDI: {
    id: 'CLINIC_MDI',
    track: 'Clinic',
    code: 'OSPE-CL4801',
    week: 'Week 1',
    name: 'Salbutamol MDI (Metered-Dose Inhaler)',
    category: 'ยาเทคนิคพิเศษ · MDI',
    rxText: 'Dx: Asthma | Rx: Salbutamol 100 mcg/puff MDI — Sig: 1-2 puffs prn for dyspnea (หรือ TID)',
    device: 'mdi',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ทักทาย ยืนยันตัวตน & ตรวจฉลาก', pts: 1.0, cam: 'device',
        choices: [
          { id: '2id', label: 'ถามชื่อ-นามสกุล + วันเดือนปีเกิด/HN & ถามประวัติแพ้ยา', correct: true },
          { id: 'skip', label: 'ยื่นหลอดยาให้ทันทีโดยไม่ถามชื่อและประวัติแพ้ยา', correct: false }
        ],
        hint: 'ยืนยันตัวตนผู้ป่วยด้วย 2 ตัวบ่งชี้ (ชื่อ-นามสกุล และ HN/วันเกิด) พร้อมซักประวัติแพ้ยาและประสบการณ์ใช้ MDI' },
      { id: 'uncap', type: 'device_uncap', title: '2. ถือหลอดตั้งตรง & เปิดฝาครอบปากหลอด', pts: 1.0, cam: 'device',
        hint: 'คลิกเปิดฝาครอบปากหลอดยาพ่นออก ตรวจดูว่าไม่มีสิ่งแปลกปลอมในปากหลอด และถือในแนวตั้งเสมอ' },
      { id: 'shake', type: 'device_shake', title: '3. เขย่าหลอดพ่นในแนวตั้ง 4–5 ครั้ง', pts: 1.5, cam: 'device',
        targetShakes: 5,
        hint: 'กดเขย่าหลอดพ่นในแนวตั้งให้ครบ 4–5 ครั้ง เพื่อให้น้ำยาและสารขับดันผสมเป็นเนื้อเดียวกัน' },
      { id: 'exhale', type: 'patient_exhale', title: '4. หายใจออกทางปากให้สุด (ห้ามเป่าใส่หลอด)', pts: 1.0, cam: 'device',
        hint: 'ให้ผู้ป่วยหายใจออกทางปากให้สุดเต็มที่ก่อนอมปากหลอด (ระวังห้ามหายใจใส่ปากหลอดยา)' },
      { id: 'actuate', type: 'mdi_actuate', title: '5. อมปากหลอด & กดพ่นพร้อมสูดเข้าช้าๆ ลึกๆ', pts: 2.0, cam: 'device',
        hint: 'อมปากหลอดให้สนิทด้วยริมฝีปาก (ไม่กัด) เริ่มหายใจเข้าทางปากช้าๆ พร้อมกดหลอดยาลง 1 ครั้ง แล้วสูดเข้าลึกจนสุด' },
      { id: 'hold', type: 'breath_hold', title: '6. กลั้นหายใจไว้ประมาณ 10 วินาที', pts: 1.5, cam: 'device',
        targetSecs: 10,
        hint: 'เอาหลอดยาออกจากปาก ปิดปากสนิท กลั้นหายใจไว้ 10 วินาที (หรือนานที่สุดเท่าที่ทำได้) แล้วผ่อนลมหายใจออกช้าๆ' },
      { id: 'clean_cap', type: 'device_clean_cap', title: '7. เช็ดปากหลอดด้วยทิชชูแห้ง & ปิดฝา', pts: 1.0, cam: 'device',
        allowWashCanister: false,
        hint: 'เช็ดทำความสะอาดปากหลอดด้วยผ้า/ทิชชูแห้ง (ห้ามนำกระป๋องยาโลหะไปล้างน้ำ!) และปิดฝาครอบให้เรียบร้อย' },
      { id: 'counsel', type: 'clinic_confirm', title: '8. คำแนะนำเว้น 1 นาที & การใช้ Reliever', pts: 1.0, cam: 'overview',
        choices: [
          { id: 'good', label: 'หากพ่นซ้ำให้เว้น 1 นาที · เก็บ <30°C · Salbutamol ใช้บรรเทาอาการหอบเฉียบพลัน', correct: true },
          { id: 'bad', label: 'พ่นติดกัน 2 ครั้งทันทีโดยไม่ต้องเว้น · ล้างกระป๋องยาด้วยน้ำสบู่ทุกวัน', correct: false }
        ],
        hint: 'สรุปคำแนะนำสำคัญ: เว้น 1 นาทีก่อนพ่นกดที่ 2, เก็บที่อุณหภูมิห้อง <30°C และเฝ้าระวังอาการหอบกำเริบ' }
    ]
  },

  CLINIC_TURBUHALER: {
    id: 'CLINIC_TURBUHALER',
    track: 'Clinic',
    code: 'OSPE-CL83M209',
    week: 'Week 1',
    name: 'Budesonide/Formoterol Turbuhaler (DPI)',
    category: 'ยาเทคนิคพิเศษ · Turbuhaler',
    rxText: 'Dx: Asthma | Rx: Budesonide/Formoterol 160/4.5 mcg Turbuhaler — Sig: 1 puff BID & prn',
    device: 'turbuhaler',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน & กำจัดเสมหะก่อนใช้', pts: 1.0, cam: 'device',
        choices: [
          { id: 'ok', label: 'ยืนยันชื่อ-นามสกุล/แพ้ยา + แนะนำกำจัดเสมหะ/บ้วนน้ำลายออกจากลำคอก่อนสูด', correct: true },
          { id: 'no', label: 'ให้ผู้ป่วยเขย่าหลอด Turbuhaler แรงๆ 5 ครั้งก่อนเปิดฝา', correct: false }
        ],
        hint: 'ยืนยันตัวตน ซักประวัติแพ้ยา และแนะนำให้กำจัดเสมหะหรือบ้วนน้ำลายออกจากลำคอก่อนใช้ยา' },
      { id: 'uncap', type: 'device_uncap', title: '2. หมุนเปิดฝาครอบ & ถือหลอดตั้งตรง', pts: 1.0, cam: 'device',
        hint: 'หมุนเกลียวเปิดฝาครอบออก และถือหลอด Turbuhaler ในแนวตั้งตรง (ปลายหลอดสูดอยู่ด้านบนเสมอ)' },
      { id: 'twist_click', type: 'turbuhaler_load', title: '3. บิดฐานขวาสุด → ซ้ายสุดจนดัง "คลิก"', pts: 2.0, cam: 'device',
        hint: 'บิดฐานหมุนสีแดงไปทางขวาจนสุด แล้วบิดกลับมาทางซ้ายจนสุด จนได้ยินเสียง "คลิก (Click)" แสดงว่าโหลดยาพร้อมสูด' },
      { id: 'exhale', type: 'patient_exhale', title: '4. หายใจออกให้สุด (ห้ามเป่าใส่หลอด)', pts: 1.0, cam: 'device',
        hint: 'หายใจออกทางปากให้สุดห่างจากตัวหลอด (ห้ามเป่าลมเข้าไปในปากหลอดยา เพราะความชื้นจะทำให้ผงยาจับตัว)' },
      { id: 'inhale_deep', type: 'dpi_inhale', title: '5. อมปากหลอด & สูดเข้าแรงและลึก (Quick & Deep)', pts: 2.0, cam: 'device',
        hint: 'อมปากหลอดให้สนิท แล้วสูดลมหายใจเข้าทางปากให้ "แรงและลึก" จนสุด (DPI ต้องใช้แรงสูดของผู้ป่วยเอง)' },
      { id: 'hold', type: 'breath_hold', title: '6. กลั้นหายใจ 10 วินาที & ผ่อนลมหายใจ', pts: 1.0, cam: 'device',
        targetSecs: 10,
        hint: 'เอาหลอดออกจากปาก กลั้นหายใจ 10 วินาที แล้วค่อยๆ ผ่อนลมหายใจออกช้าๆ' },
      { id: 'clean_cap', type: 'device_clean_cap', title: '7. เช็ดปากหลอดด้วยผ้าแห้ง & ปิดฝาเกลียว', pts: 1.0, cam: 'device',
        allowWashCanister: false,
        hint: 'เช็ดปากหลอดด้วยกระดาษทิชชูแห้งเท่านั้น (ห้ามล้างน้ำ!) และหมุนปิดฝาครอบให้สนิท' },
      { id: 'rinse_mouth', type: 'clinic_confirm', title: '8. บ้วนปากด้วยน้ำเปล่าหลังใช้ (ICS)', pts: 1.0, cam: 'overview',
        choices: [
          { id: 'rinse', label: 'กลั้วคอและบ้วนปากด้วยน้ำเปล่าแล้วบ้วนทิ้งทุกครั้ง ป้องกันเชื้อราในช่องปาก/เสียงแหบ', correct: true },
          { id: 'swallow', label: 'ดื่มน้ำกลืนตามทันทีโดยไม่ต้องบ้วนปากทิ้ง', correct: false }
        ],
        hint: 'เนื่องจากมีสเตียรอยด์ (Budesonide) ต้องกลั้วคอและบ้วนปากทิ้งทุกครั้งหลังสูด เพื่อลดความเสี่ยงเชื้อราในช่องปาก (Oral candidiasis)' }
    ]
  },

  CLINIC_ACCUHALER: {
    id: 'CLINIC_ACCUHALER',
    track: 'Clinic',
    code: 'OSPE-CL-ACCU01',
    week: 'Week 2',
    name: 'Fluticasone/Salmeterol Accuhaler (Diskus)',
    category: 'ยาเทคนิคพิเศษ · Accuhaler',
    rxText: 'Dx: Asthma / COPD | Rx: Salmeterol/Fluticasone 50/250 mcg Accuhaler — Sig: 1 puff BID',
    device: 'accuhaler',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน & ตรวจตัวเลขโดส', pts: 1.0, cam: 'device',
        choices: [
          { id: 'ok', label: 'ยืนยันชื่อ-นามสกุล/วันเกิด ตรวจประวัติแพ้ยา และสังเกตหน้าต่าง Dose counter', correct: true },
          { id: 'no', label: 'เขย่าตลับ Accuhaler แรงๆ เพื่อตรวจสอบว่ามียาเหลือหรือไม่', correct: false }
        ],
        hint: 'ยืนยันตัวตนผู้ป่วย ถามประวัติแพ้ยา และตรวจสอบ Dose counter (ไม่ต้องเขย่าตลับยา)' },
      { id: 'open_cover', type: 'accuhaler_open', title: '2. ถือแนวราบ & เลื่อนฝาครอบด้วยนิ้วโป้งจนดัง "คลิก"', pts: 1.5, cam: 'device',
        hint: 'ถือ Accuhaler ในแนวราบ ใช้นิ้วหัวแม่มือดันร่องเลื่อนฝาครอบออกไปจนสุดเสียง "คลิก" เพื่อเปิดปากหลอด' },
      { id: 'slide_lever', type: 'accuhaler_lever', title: '3. ดันก้านเลื่อน (Lever) จนดัง "คลิก" (ห้ามคว่ำ/เขย่า)', pts: 2.0, cam: 'device',
        hint: 'ดันก้านเลื่อนด้านข้างออกไปจนสุดได้ยินเสียง "คลิก" เพื่อเปิดบลิสเตอร์ยา (จากนี้ห้ามคว่ำหรือเขย่าเด็ดขาด!)' },
      { id: 'exhale', type: 'patient_exhale', title: '4. หายใจออกทางปากให้สุดห่างจากปากหลอด', pts: 1.0, cam: 'device',
        hint: 'หายใจออกทางปากให้สุดเต็มที่โดยไม่เป่าใส่ปากหลอดยา' },
      { id: 'inhale_deep', type: 'dpi_inhale', title: '5. อมปากหลอด & สูดเข้าแรงและลึก (Quick & Deep)', pts: 2.0, cam: 'device',
        hint: 'อมปากหลอดให้สนิท สูดลมหายใจเข้าทางปากให้แรงและลึกจนสุด (อาจไม่รู้สึกถึงรสชาติของผงยาเป็นเรื่องปกติ)' },
      { id: 'hold', type: 'breath_hold', title: '6. กลั้นหายใจ 10 วินาที & ปิดฝาครอบ', pts: 1.5, cam: 'device',
        targetSecs: 10,
        hint: 'กลั้นหายใจ 10 วินาที ผ่อนลมหายใจออก เช็ดปากหลอดด้วยทิชชูแห้ง แล้วเลื่อนฝาครอบปิดกลับจนดังคลิก' },
      { id: 'rinse_mouth', type: 'clinic_confirm', title: '7. บ้วนปากด้วยน้ำเปล่าและบ้วนทิ้ง (ICS)', pts: 1.0, cam: 'overview',
        choices: [
          { id: 'rinse', label: 'กลั้วคอและบ้วนปากด้วยน้ำเปล่าทิ้งทุกครั้งหลังสูด เพื่อลดเชื้อราในช่องปาก', correct: true },
          { id: 'no_rinse', label: 'ไม่ต้องบ้วนปาก และเก็บยาในช่องแช่แข็ง', correct: false }
        ],
        hint: 'ยามีส่วนประกอบของ Fluticasone (ICS) จึงต้องบ้วนปากทิ้งทุกครั้งหลังใช้ และเก็บที่อุณหภูมิห้องพ้นความชื้น' }
    ]
  },

  CLINIC_NASAL_SPRAY: {
    id: 'CLINIC_NASAL_SPRAY',
    track: 'Clinic',
    code: 'OSPE-CL83M111',
    week: 'Week 2',
    name: 'Fluticasone Propionate Nasal Spray',
    category: 'ยาเทคนิคพิเศษ · Nasal Spray',
    rxText: 'Dx: Allergic Rhinitis | Rx: Fluticasone propionate 50 mcg/puff Nasal Spray — Sig: 2 puffs each nostril OD/BID',
    device: 'nasal_spray',
    videos: [],
    steps: [
      { id: 'id_blow', type: 'clinic_confirm', title: '1. ยืนยันตัวตน & สั่งน้ำมูกเบาๆ ให้จมูกโล่ง', pts: 1.0, cam: 'device',
        choices: [
          { id: 'ok', label: 'ยืนยันตัวตนด้วย 2 ตัวบ่งชี้ ซักประวัติแพ้ยา และให้สั่งน้ำมูกเบาๆ ก่อนพ่นยา', correct: true },
          { id: 'no', label: 'ให้เงยหน้าไปด้านหลังสุดก่อนพ่นยา เพื่อให้น้ำยาไหลลงคอเร็วๆ', correct: false }
        ],
        hint: 'ยืนยันตัวตน ซักประวัติแพ้ยา และแนะนำให้ผู้ป่วยสั่งน้ำมูกเบาๆ เพื่อเคลียร์โพรงจมูกก่อนพ่น' },
      { id: 'shake_prime', type: 'nasal_prime', title: '2. เขย่าขวดเบาๆ เปิดฝา & Prime (ครั้งแรก)', pts: 1.5, cam: 'device',
        hint: 'เขย่าขวดเบาๆ ในแนวตั้ง เปิดฝาครอบ และกดพ่นทดสอบในอากาศ (Prime) จนเห็นละอองฝอยสม่ำเสมอ' },
      { id: 'tilt_angle', type: 'nasal_angle', title: '3. ก้มศีรษะเล็กน้อย & สอดปลายพ่นเฉียงออกหางตา', pts: 2.5, cam: 'device',
        hint: 'สำคัญมาก! ก้มศีรษะเล็กน้อย สอดปลายหลอดพ่นให้ชี้ "เฉียงออกด้านข้างไปทางหางตา/ปีกจมูกด้านนอก" (ห้ามชี้เข้าผนังกั้นจมูก!)' },
      { id: 'spray_inhale', type: 'nasal_actuate', title: '4. ปิดรูจมูกอีกข้าง & กดพ่นพร้อมสูดเข้าเบาๆ', pts: 2.5, cam: 'device',
        hint: 'ใช้นิ้วกดปิดรูจมูกอีกข้าง กดหัวพ่นลงให้สุดพร้อมสูดลมหายใจเข้าทางจมูกเบาๆ (ไม่สูดแรงจนยาลงคอ)' },
      { id: 'exhale_clean', type: 'device_clean_cap', title: '5. หายใจออกทางปาก เช็ดปลายพ่น & ปิดฝา', pts: 1.5, cam: 'device',
        allowWashCanister: false,
        hint: 'ผ่อนลมหายใจออกทางปาก เช็ดปลายหัวพ่นด้วยทิชชูแห้งสะอาด และปิดฝาครอบให้เรียบร้อย' },
      { id: 'counsel', type: 'clinic_confirm', title: '6. คำแนะนำการใช้ต่อเนื่อง & อาการข้างเคียง', pts: 1.0, cam: 'overview',
        choices: [
          { id: 'ok', label: 'ยาสเตียรอยด์พ่นจมูกใช้ต่อเนื่องทุกวัน เห็นผลเต็มที่ใน 1–2 สัปดาห์ · ระวังเลือดกำเดาไหลหากพ่นผิดทิศ', correct: true },
          { id: 'no', label: 'ใช้เฉพาะเวลาคัดจมูกเท่านั้น ห้ามใช้ต่อเนื่องเกิน 3 วัน', correct: false }
        ],
        hint: 'Intranasal corticosteroids ต้องใช้สม่ำเสมอทุกวัน (ต่างจาก Oxymetazoline) และพ่นเฉียงออกด้านข้างเพื่อลดเลือดกำเดาไหล' }
    ]
  },

  CLINIC_EYE_DROPS: {
    id: 'CLINIC_EYE_DROPS',
    track: 'Clinic',
    code: 'OSPE-CL83M103',
    week: 'Week 3',
    name: 'Chloramphenicol 0.5% Eye Drops',
    category: 'ยาเทคนิคพิเศษ · ยาหยอดตา',
    rxText: 'Dx: Bacterial Conjunctivitis | Rx: Chloramphenicol 0.5% eye drop — Sig: 1-2 drops O.D. (ตาขวา) q 6 hr',
    device: 'eye_drops',
    videos: [],
    steps: [
      { id: 'id_wash', type: 'clinic_confirm', title: '1. ยืนยันตัวตน, ล้างมือ & ตรวจวันหมดอายุ', pts: 1.5, cam: 'device',
        choices: [
          { id: 'ok', label: 'ยืนยันตัวตน ล้างมือสะอาด เช็ดแห้ง ตรวจวันหมดอายุ (ใช้ได้ 28 วันหลังเปิด) และกำขวดให้อุ่นถ้าแช่เย็น', correct: true },
          { id: 'no', label: 'เก็บยาหยอดตาที่เปิดใช้แล้วไว้ได้นาน 1 ปีตามวันหมดอายุข้างกล่อง', correct: false }
        ],
        hint: 'ล้างมือให้สะอาด ตรวจความสมบูรณ์และวันหมดอายุ (หลังเปิดขวดใช้ได้ไม่เกิน 28 วัน / 1 เดือน)' },
      { id: 'pull_sac', type: 'eye_pull_sac', title: '2. เงยหน้า & ดึงเปลือกตาล่างเป็นกระพุ้ง (Conjunctival sac)', pts: 2.0, cam: 'device',
        hint: 'เงยหน้ามองเพดาน ใช้นิ้วชี้ดึงเปลือกตาล่างลงเบาๆ ให้เกิดแอ่งกระพุ้งตาสำหรับรับหยดยา' },
      { id: 'instill_drop', type: 'eye_instill', title: '3. หยอด 1 หยดลงกระพุ้งตา (ห้ามปลายขวดแตะตา)', pts: 2.5, cam: 'device',
        hint: 'ถือขวดห่างจากตา ~1–2 ซม. บีบขวดเบาๆ ให้ยาหยดลงในกระพุ้งตาล่าง 1 หยด โดยห้ามปลายหลอดสัมผัสลูกตาหรือขนตา' },
      { id: 'occlude', type: 'eye_occlude', title: '4. หลับตาเบาๆ & กดหัวตา (Nasolacrimal occlusion) 1–2 นาที', pts: 2.0, cam: 'device',
        hint: 'หลับตาเบาๆ (ห้ามขยี้หรือบีบตาแน่น) และใช้นิ้วกดบริเวณหัวตาค้างไว้ 1–2 นาที เพื่อลดการดูดซึมยาเข้าสู่ร่างกาย' },
      { id: 'clean_cap', type: 'device_clean_cap', title: '5. ซับส่วนเกิน & ปิดฝาขวดทันที', pts: 1.0, cam: 'device',
        allowWashCanister: false,
        hint: 'ใช้ทิชชูสะอาดซับยาส่วนเกินรอบดวงตา และปิดฝาขวดให้สนิททันที (ห้ามเช็ดปลายหลอดหยด!)' },
      { id: 'counsel', type: 'clinic_confirm', title: '6. คำแนะนำหยอดยาหลายชนิด & ระยะเวลาใช้', pts: 1.0, cam: 'overview',
        choices: [
          { id: 'ok', label: 'หากมียาหยอดตาอื่นให้เว้น 5–10 นาที (หยอดน้ำใสก่อนยาขุ่น/ขี้ผึ้งป้ายตา) และถอดคอนแทคเลนส์ก่อนหยอด', correct: true },
          { id: 'no', label: 'หยอดยาหลายขวดต่อกันได้ทันทีและใส่คอนแทคเลนส์ทับได้เลย', correct: false }
        ],
        hint: 'เว้นระยะห่างระหว่างยาหยอดตา 5–10 นาที และงดใส่คอนแทคเลนส์ขณะมีอาการตาติดเชื้อ' }
    ]
  },

  CLINIC_INSULIN_PEN: {
    id: 'CLINIC_INSULIN_PEN',
    track: 'Clinic',
    code: 'OSPE-CL5228',
    week: 'Week 3',
    name: 'Insulin Pen (NPH / Premixed 70/30)',
    category: 'ยาเทคนิคพิเศษ · Insulin Pen',
    rxText: 'Dx: Type 2 DM | Rx: Insulin 70/30 Penfill — Sig: 15 Units SC before breakfast',
    device: 'insulin_pen',
    videos: [],
    steps: [
      { id: 'roll_mix', type: 'insulin_roll', title: '1. คลึงปากกาเบาๆ 10 ครั้ง (ห้ามเขย่าแรง)', pts: 1.5, cam: 'device',
        hint: 'สำหรับอินซูลินชนิดน้ำขุ่น (NPH / Premixed) ให้คลึงปากกาบนฝ่ามือเบาๆ 10 ครั้งและพลิกขึ้นลงจนขาวสม่ำเสมอ ห้ามเขย่าแรง!' },
      { id: 'swab_needle', type: 'insulin_swab_needle', title: '2. เช็ดจุกยาง Alcohol 70% & สวมหัวเข็มใหม่', pts: 1.5, cam: 'device',
        hint: 'เช็ดจุกยางด้วยสำลีชุบ Alcohol 70% รอให้แห้ง แล้วหมุนสวมหัวเข็มใหม่ให้แน่นตรง' },
      { id: 'prime_2u', type: 'insulin_prime', title: '3. ทดสอบเข็ม (Prime) 2 Units ไล่อากาศ', pts: 1.5, cam: 'device',
        hint: 'หมุนไปที่ 2 Units หันปลายเข็มชี้ขึ้น เคาะเบาๆ แล้วกดปุ่มฉีดจนเห็นหยดยาพุ่งที่ปลายเข็ม' },
      { id: 'dial_dose', type: 'insulin_dial', title: '4. หมุนตั้งขนาดยาที่ต้องการ (15 Units)', pts: 2.0, cam: 'device',
        targetUnits: 15,
        hint: 'หมุนปุ่มปรับขนาดยาที่ปลายปากกาไปที่ตัวเลข 15 Units อย่างแม่นยำ' },
      { id: 'inject_hold', type: 'insulin_inject', title: '5. เช็ดผิวหนัง & แทงเข็ม 90° กดฉีดค้าง 10 วินาที', pts: 2.5, cam: 'device',
        hint: 'เช็ดผิวหนังบริเวณหน้าท้อง (ห่างสะดือ ≥2 นิ้ว) รอแอลกอฮอล์แห้ง แทงเข็มตั้งฉาก 90° กดปุ่มฉีดจนเลขกลับเป็น 0 และนับค้าง 10 วินาทีก่อนถอนเข็ม' },
      { id: 'counsel', type: 'clinic_confirm', title: '6. การเก็บรักษา & หมุนเวียนตำแหน่งฉีด', pts: 1.0, cam: 'overview',
        choices: [
          { id: 'ok', label: 'ปากกาที่เปิดใช้แล้วเก็บอุณหภูมิห้อง (<30°C) ได้ 28–30 วัน · ปากกายังไม่เปิดเก็บตู้เย็น 2–8°C · หมุนเวียนจุดฉีดทุกครั้ง', correct: true },
          { id: 'no', label: 'นำปากกาที่สวมเข็มค้างไว้แช่ช่องแข็งได้ และฉีดซ้ำจุดเดิมทุกวัน', correct: false }
        ],
        hint: 'หมุนเวียนจุดฉีดป้องกันก้อนไขมันใต้ผิวหนัง (Lipohypertrophy) และสังเกตอาการน้ำตาลต่ำ (Hypoglycemia)' }
    ]
  },

  CLINIC_HISTORY_COUNSELING: {
    id: 'CLINIC_HISTORY_COUNSELING',
    track: 'Clinic',
    code: 'OSPE-CL83M105',
    week: 'Week 4',
    name: 'ซักประวัติและจ่ายยา (History Taking & Counseling)',
    category: 'ซักประวัติและจ่ายยา · Counter',
    rxText: 'ผู้ป่วยหญิง 28 ปี มาที่ร้านยาด้วยอาการปวดศีรษะข้างเดียวตุบๆ ร่วมกับคลื่นไส้ แพ้แสง',
    device: 'counter_consult',
    sceneState: 'STATE_COUNSEL',
    videos: [],
    steps: [
      { id: 'history_opqr', type: 'ai_dialogue', title: '1. ทักทาย & ซักประวัติอาการ, Red Flags, แพ้ยา (AI Chat + Block)', pts: 4.5, cam: 'device',
        role: 'patient',
        minTurns: 2,
        requiredKeywords: ['สวัสดี', 'แพ้ยา', 'อาการ', 'ปวด', 'โรคประจำตัว', 'ยา'],
        blocks: [
          '👋 สวัสดีครับ เภสัชกรขอสอบถามชื่อ-นามสกุลและอาการที่มาวันนี้ครับ',
          '⚡ ลักษณะปวดหัวเป็นแบบไหนครับ ปวดข้างเดียว ตุบๆ คลื่นไส้ หรือแพ้แสงไหมครับ',
          '🚨 มีไข้ คอแข็ง แขนขาอ่อนแรง หรือปวดรุนแรงเฉียบพลันไหมครับ (Red flags)',
          '💊 มีประวัติแพ้ยา โรคประจำตัว หรือยาที่ใช้เป็นประจำไหมครับ'
        ],
        fallbackReply: 'ปวดตุบๆ ข้างเดียวค่ะ คลื่นไส้มาก เวลาเจอแสงจ้าๆ จะปวดหนักขึ้น เป็นมาประมาณ 3 ชั่วโมงแล้ว ไม่มีไข้ ไม่แพ้ยาค่ะ',
        hint: 'กดเลือก Block ประโยคหรือพิมพ์ซักประวัติผู้ป่วยจริง (AI ตอบโต้สดบน Speech Bubble เหนือศีรษะผู้ป่วย)' },
      { id: 'assess_plan', type: 'clinic_confirm', title: '3. ประเมินโรค & เลือกจ่ายยาที่เหมาะสม', pts: 3.0, cam: 'device',
        choices: [
          { id: 'ok', label: 'ประเมินเป็น Migraine (ไม่มี Red flags) → เลือกจ่าย NSAIDs (เช่น Ibuprofen 400 mg) หรือ Sumatriptan หากจำเป็น', correct: true },
          { id: 'no', label: 'จ่าย Ergotamine + Caffeine ร่วมกับยาต้านไวรัส Protease Inhibitor (Ritonavir)', correct: false }
        ],
        hint: 'เลือกการประเมินและการจ่ายยาที่ปลอดภัย (หลีกเลี่ยง Drug Interaction รุนแรงของ Ergotamine กับ CYP3A4 inhibitors)' },
      { id: 'counsel_redflag', type: 'clinic_confirm', title: '4. ให้คำแนะนำวิธีใช้ยา อาการข้างเคียง & Red Flags', pts: 2.5, cam: 'overview',
        choices: [
          { id: 'ok', label: 'รับประทานยาแก้ปวดทันทีเมื่อเริ่มมีอาการ · NSAIDs หลังอาหารทันที · หลีกเลี่ยงสิ่งกระตุ้น · พบแพทย์หากมี Red flags', correct: true },
          { id: 'no', label: 'รับประทานยาแก้ปวดตอนท้องว่างก่อนนอนทุกวันแม้ไม่มีอาการ', correct: false }
        ],
        hint: 'สรุปวิธีใช้ยา (Abortive therapy กินทันทีที่เริ่มปวด), ข้อควรระวังทางเดินอาหาร และอาการที่ต้องไปพบแพทย์' }
    ]
  },

  CLINIC_ISBAR: {
    id: 'CLINIC_ISBAR',
    track: 'Clinic',
    code: 'OSPE-CL83M109',
    week: 'Week 4',
    name: 'ISBAR การสื่อสารประสานงานแพทย์ (Metformin in CKD)',
    category: 'ประสานงานแพทย์ · ISBAR',
    rxText: 'ผู้ป่วย DM + CKD (eGFR 24 mL/min/1.73m²) ได้รับคำสั่งใช้ยา Metformin 1,000 mg 1x2 pc',
    device: 'isbar_phone',
    sceneState: 'STATE_COUNSEL',
    videos: [],
    steps: [
      { id: 'i_identify', type: 'clinic_confirm', title: '1. [I] Identify — แนะนำตัวเภสัชกร & ข้อมูลผู้ป่วย', pts: 2.0, cam: 'device',
        choices: [
          { id: 'ok', label: 'สวัสดีครับ/ค่ะ นิสิตเภสัชกร... จากหอผู้ป่วยอายุรกรรม ขอเรียนปรึกษา นพ... เรื่องคุณสมชาย HN... เตียง 4', correct: true },
          { id: 'no', label: 'คุณหมอครับ มียาผิดครับ ช่วยแก้ให้หน่อย', correct: false }
        ],
        hint: 'Identify: แนะนำชื่อ-ตำแหน่งเภสัชกร หน่วยงาน และระบุชื่อผู้ป่วย/HN/วอร์ด และชื่อแพทย์ที่ปรึกษาให้ชัดเจน' },
      { id: 'sbar_chat', type: 'ai_dialogue', title: '2. สื่อสารแพทย์แบบ SBAR (AI Doctor + Block)', pts: 4.0, cam: 'device',
        role: 'doctor',
        minTurns: 2,
        requiredKeywords: ['metformin', 'egfr', 'lactic', 'หยุด', 'linagliptin'],
        blocks: [
          '📌 [S] ผู้ป่วยได้รับ Metformin 1,000 mg 1x2 เกินขนาดเมื่อเทียบกับค่าไตครับ',
          '📋 [B] ผู้ป่วยเป็น DM + CKD ผลตรวจล่าสุด eGFR = 24 mL/min/1.73m² (< 30)',
          '⚠️ [A] ประเมินว่าเสี่ยงเกิดภาวะ Lactic acidosis ซึ่งอันตรายถึงชีวิตครับ',
          '💊 [R] ขอเสนอหยุด Metformin และพิจารณาเปลี่ยนเป็น Linagliptin 5 mg OD ครับ'
        ],
        fallbackReply: 'ขอบคุณครับเภสัชกร eGFR 24 จริงด้วย เสี่ยง Lactic acidosis มาก งั้นเดี๋ยวหมอ Off Metformin แล้วสั่ง Linagliptin 5 mg OD แทนนะครับ',
        hint: 'ต่อ Block SBAR หรือพิมพ์คุยประสานงานแพทย์ (AI แพทย์จะตอบกลับและประเมินความครบถ้วนของ S-B-A-R)' },
      { id: 'a_assessment', type: 'clinic_confirm', title: '4. [A] Assessment — ประเมินความเสี่ยงทางคลินิก', pts: 2.0, cam: 'device',
        choices: [
          { id: 'ok', label: 'การสะสมของ Metformin ในผู้ป่วย eGFR < 30 เสี่ยงเกิดภาวะ Lactic acidosis ซึ่งอันตรายถึงชีวิต', correct: true },
          { id: 'no', label: 'เสี่ยงต่อการเกิดภาวะน้ำตาลในเลือดสูงเล็กน้อยเท่านั้น ไม่อันตราย', correct: false }
        ],
        hint: 'Assessment: ชี้แจงความรุนแรงและกลไกอันตราย (Metformin-associated lactic acidosis)' },
      { id: 'r_recommend', type: 'clinic_confirm', title: '5. [R] Recommendation — เสนอแผนปรับยาอย่างชัดเจน', pts: 2.0, cam: 'overview',
        choices: [
          { id: 'ok', label: 'ขอเสนอหยุดยา Metformin (เนื่องจาก eGFR < 30) และพิจารณาเปลี่ยนเป็น Linagliptin 5 mg OD หรือ Insulin', correct: true },
          { id: 'no', label: 'ให้รับประทาน Metformin 1,000 mg BID ต่อไปและนัดเจาะเลือดอีก 6 เดือน', correct: false }
        ],
        hint: 'Recommendation: เสนอทางเลือกการปรับขนาดยาหรือเปลี่ยนยาที่ปลอดภัยในผู้ป่วยไตเรื้อรัง (เช่น DPP-4i ที่ไม่ต้องปรับขนาดอย่าง Linagliptin)' }
    ]
  },

  SAP_LAW_DISPENSING: {
    id: 'SAP_LAW_DISPENSING',
    track: 'SAP',
    code: 'OSPE-SP4903',
    week: 'SAP Core',
    name: 'กฎหมายยา & จรรยาบรรณ (Diazepam & Fluoxetine DRP)',
    category: 'SAP · กฎหมายและจรรยาบรรณ',
    rxText: 'ลูกค้ามาขอซื้อ Diazepam 5 mg และ Fluoxetine 20 mg ที่ร้านยา (อ้างว่าเคยได้จากคลินิก แต่วันนี้ไม่มีใบสั่งแพทย์)',
    device: 'sap_law_desk',
    sceneState: 'STATE_DOCUMENT',
    videos: [],
    steps: [
      { id: 'classify_law', type: 'clinic_confirm', title: '1. จำแนกประเภทตามกฎหมายยา & วัตถุออกฤทธิ์', pts: 2.5, cam: 'device',
        choices: [
          { id: 'ok', label: 'Diazepam = วัตถุออกฤทธิ์ประเภท 4 (ประมวลกฎหมายยาเสพติด พ.ศ. 2564) · Fluoxetine = ยาอันตราย', correct: true },
          { id: 'no', label: 'Diazepam = ยาอันตรายทั่วไป เภสัชกรร้านยาจ่ายเองได้โดยไม่ต้องมีใบสั่งแพทย์', correct: false }
        ],
        hint: 'จำแนกสถานะทางกฎหมายของ Diazepam (วัตถุออกฤทธิ์ต่อจิตและประสาท ประเภท 4) และ Fluoxetine (ยาอันตราย)' },
      { id: 'refuse_polite', type: 'ai_dialogue', title: '2. สื่อสารปฏิเสธตามกฎหมาย & ซัก DRP (AI Chat + Block)', pts: 2.5, cam: 'device',
        role: 'patient',
        minTurns: 1,
        requiredKeywords: ['diazepam', 'วัตถุออกฤทธิ์', 'ใบสั่ง', 'fluoxetine', 'เช้า'],
        blocks: [
          '⚖️ ขออภัยครับ Diazepam เป็นวัตถุออกฤทธิ์ประเภท 4 ขายในร้านยาโดยไม่มีใบสั่งแพทย์ไม่ได้ครับ',
          '🔍 ไม่ทราบว่าคุณลูกค้าทาน Fluoxetine เวลาไหนครับ ทำไมถึงมีอาการนอนไม่หลับ',
          '☀️ Fluoxetine มีฤทธิ์กระตุ้น แนะนำให้ย้ายไปทานตอนเช้าหลังอาหาร จะช่วยลดปัญหานอนไม่หลับครับ'
        ],
        fallbackReply: 'อ๋อ เข้าใจแล้วค่ะ ปกติกิน Fluoxetine ก่อนนอนทุกวันเลย มิน่าถึงนอนไม่หลับ งั้นจะลองย้ายมากินตอนเช้าดูนะคะ',
        hint: 'ใช้ Block หรือพิมพ์อธิบายข้อกฎหมาย Diazepam อย่างสุภาพและซักถาม DRP ของ Fluoxetine' },
      { id: 'solve_drp', type: 'clinic_confirm', title: '3. ประเมินสาเหตุนอนไม่หลับ (DRP จาก Fluoxetine)', pts: 2.5, cam: 'device',
        choices: [
          { id: 'ok', label: 'Fluoxetine มีฤทธิ์กระตุ้นระบบประสาท (Activating effect) การกินมื้อเย็นทำให้นอนไม่หลับ → แนะนำปรับไปกินตอนเช้า', correct: true },
          { id: 'no', label: 'Fluoxetine ทำให้ง่วงซึมมาก ควรย้ายไปกินก่อนนอนทุกวัน', correct: false }
        ],
        hint: 'วิเคราะห์สาเหตุที่ผู้ป่วยนอนไม่หลับจนต้องพึ่ง Diazepam: Fluoxetine เป็น SSRI ที่มี activating effect!' },
      { id: 'refer_doc', type: 'clinic_confirm', title: '4. แนะนำติดตามอาการ & ส่งต่อแพทย์หากจำเป็น', pts: 2.5, cam: 'overview',
        choices: [
          { id: 'ok', label: 'แนะนำสุขอนามัยการนอน (Sleep hygiene) ไม่หยุดยาซึมเศร้าเอง และกลับไปพบแพทย์ตามนัดเพื่อประเมินอาการต่อเนื่อง', correct: true },
          { id: 'no', label: 'ให้หยุดยา Fluoxetine ทันทีเพื่อแก้ปัญหานอนไม่หลับ', correct: false }
        ],
        hint: 'ให้คำแนะนำต่อเนื่องอย่างมีจรรยาบรรณ: ห้ามหยุดยา SSRI เองกะทันหัน และประสานพบแพทย์เจ้าของไข้' }
    ]
  },

  CLINIC_MDI_SPACER: {
    id: 'CLINIC_MDI_SPACER',
    track: 'Clinic',
    code: 'OSPE-CLSD02',
    week: 'CLSD',
    name: 'MDI + Spacer (Metered-Dose Inhaler with Valved Holding Chamber)',
    category: 'ยาเทคนิคพิเศษ · MDI + Spacer',
    rxText: 'Dx: Asthma / COPD | Rx: Salbutamol / ICS MDI + Spacer (AeroChamber) — Sig: 1-2 puffs via spacer',
    device: 'mdi_spacer',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน 2 ตัวบ่งชี้ & ถามประวัติแพ้ยา', pts: 1.0, cam: 'device',
        choices: [
          { id: '2id', label: 'ถามชื่อ-นามสกุล + วันเดือนปีเกิด/HN & ประวัติแพ้ยา/ใช้ Spacer', correct: true },
          { id: 'skip', label: 'จ่ายยาและกระบอก Spacer โดยไม่ตรวจชื่อและประวัติแพ้ยา', correct: false }
        ],
        hint: 'ยืนยันตัวตน 2 ตัวบ่งชี้ และตรวจสอบความสะอาด/ลิ้นวาล์วของ Spacer ก่อนใช้งาน' },
      { id: 'uncap', type: 'device_uncap', title: '2. เปิดฝาครอบ MDI & ตรวจลิ้นวาล์ว Spacer', pts: 1.0, cam: 'device',
        hint: 'ถอดฝาครอบปากหลอด MDI ออก ตรวจดูสิ่งแปลกปลอมทั้งในปากหลอด MDI และกระบอก Spacer' },
      { id: 'shake', type: 'device_shake', title: '3. เขย่า MDI แนวตั้ง 4–5 ครั้ง แล้วสวมเข้าท้าย Spacer', pts: 1.5, cam: 'device',
        targetShakes: 5,
        hint: 'เขย่าหลอดพ่น MDI ในแนวตั้ง 4–5 ครั้ง จากนั้นเสียบปากหลอด MDI เข้ากับช่องด้านท้ายของ Spacer ให้แน่น' },
      { id: 'exhale', type: 'patient_exhale', title: '4. หายใจออกทางปากให้สุดก่อนอมปากกระบอก Spacer', pts: 1.0, cam: 'device',
        hint: 'ให้ผู้ป่วยหายใจออกทางปากให้สุด (ห้ามเป่าลมเข้าไปในกระบอก Spacer)' },
      { id: 'actuate', type: 'mdi_actuate', title: '5. กดพ่น 1 ครั้งเข้า Spacer & สูดเข้าช้าๆ ลึกๆ', pts: 2.0, cam: 'device',
        hint: 'กดหลอดยา 1 ครั้ง (ทีละ 1 กดเท่านั้น) แล้วสูดลมหายใจเข้าทางปากช้าๆ ลึกๆ (หรือหายใจเข้า-ออกปกติผ่าน Spacer 5–6 ครั้งในเด็ก/ผู้สูงอายุ)' },
      { id: 'hold', type: 'breath_hold', title: '6. กลั้นหายใจ 10 วินาที แล้วผ่อนลมออกช้าๆ', pts: 1.5, cam: 'device',
        targetSecs: 10,
        hint: 'เอาปากออกจากกระบอก Spacer ปิดปากสนิท กลั้นหายใจประมาณ 10 วินาที' },
      { id: 'clean_cap', type: 'device_clean_cap', title: '7. ถอด MDI ปิดฝา & แนะนำการล้าง Spacer', pts: 1.0, cam: 'device',
        allowWashCanister: false,
        hint: 'ถอด MDI ปิดฝาครอบ · แนะนำล้าง Spacer สัปดาห์ละ 1 ครั้งด้วยน้ำยาล้างจานเจือจาง แล้วผึ่งลมให้แห้ง (ห้ามเช็ดถูด้านในเพราะจะเกิดไฟฟ้าสถิต)' },
      { id: 'counsel', type: 'clinic_confirm', title: '8. คำแนะนำพ่นทีละ 1 กด เว้น 1 นาที & บ้วนปาก', pts: 1.0, cam: 'overview',
        choices: [
          { id: 'good', label: 'พ่นทีละ 1 กดเข้า Spacer (ห้ามกดซ้อน 2 กด) เว้น 1 นาที · บ้วนปากหลังพ่น ICS', correct: true },
          { id: 'bad', label: 'กดพ่น 2 ครั้งรวดเข้า Spacer แล้วสูดทีเดียว · ใช้ผ้าแห้งเช็ดด้านใน Spacer', correct: false }
        ],
        hint: 'ย้ำห้ามกด 2 puffs พร้อมกันใน Spacer และห้ามใช้ผ้าเช็ดภายในกระบอก Spacer เพื่อป้องกันไฟฟ้าสถิต' }
    ]
  },

  CLINIC_HANDIHALER: {
    id: 'CLINIC_HANDIHALER',
    track: 'Clinic',
    code: 'OSPE-CLSD05',
    week: 'CLSD',
    name: 'Tiotropium HandiHaler (Dry Powder Capsule Inhaler)',
    category: 'ยาเทคนิคพิเศษ · HandiHaler',
    rxText: 'Dx: COPD | Rx: Tiotropium 18 mcg/capsule (Spiriva HandiHaler) — Sig: Inhale 1 cap OD',
    device: 'handihaler',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน 2 ตัวบ่งชี้ & เตือนห้ามกลืนแคปซูล', pts: 1.0, cam: 'device',
        choices: [
          { id: '2id', label: 'ยืนยันชื่อ-สกุล + HN/วันเกิด · ย้ำว่าแคปซูลนี้ใช้สูดพ่น ห้ามกลืนเด็ดขาด', correct: true },
          { id: 'skip', label: 'แนะนำให้กลืนแคปซูลพร้อมน้ำอุ่นวันละ 1 ครั้ง', correct: false }
        ],
        hint: 'ยา Spiriva HandiHaler เป็นแคปซูลสำหรับสูดทางปากเท่านั้น ห้ามรับประทาน/กลืน' },
      { id: 'uncap', type: 'device_uncap', title: '2. เปิดฝาครอบกันฝุ่น & เปิดส่วนปากสูดขึ้น', pts: 1.0, cam: 'device',
        hint: 'กดปุ่มด้านข้างเพื่อเปิดฝาครอบสีเขียว จากนั้นเปิดส่วนปากสูด (mouthpiece) สีขาวขึ้น' },
      { id: 'load_cap', type: 'capsule_load', title: '3. ใส่แคปซูล 1 เม็ดลงช่องกลาง & ปิดปากสูดจนดังคลิก', pts: 1.5, cam: 'device',
        hint: 'แกะฟอยล์นำแคปซูล 1 เม็ดใส่ลงในช่องตรงกลาง แล้วกดปิดปากสูดลงให้แน่นจนได้ยินเสียงคลิก' },
      { id: 'pierce', type: 'capsule_pierce', title: '4. กดปุ่มเจาะด้านข้าง 1 ครั้งแล้วปล่อย (ถือตั้งตรง)', pts: 1.5, cam: 'device',
        hint: 'ถือเครื่องตั้งตรง กดปุ่มสีเขียวด้านข้างเข้าไปจนสุด 1 ครั้งเพื่อเจาะแคปซูล แล้วปล่อยนิ้วออก' },
      { id: 'exhale', type: 'patient_exhale', title: '5. หายใจออกให้สุด (หันหน้าออกจากเครื่อง)', pts: 1.0, cam: 'device',
        hint: 'หายใจออกให้สุดโดยหันหน้าออกจากปากสูด ห้ามเป่าลมเข้าไปในเครื่อง' },
      { id: 'inhale', type: 'inhale_forceful', title: '6. อมปากสูด & สูดเข้าแรง ลึก สม่ำเสมอจนแคปซูลสั่น', pts: 2.0, cam: 'device',
        hint: 'อมปากสูดให้สนิท สูดลมหายใจเข้าทางปากให้แรงและลึกจนได้ยินเสียงแคปซูลสั่น/หมุน (rattling sound)' },
      { id: 'hold', type: 'breath_hold', title: '7. กลั้นหายใจ 10 วินาที (สูดซ้ำอีกครั้งเพื่อความหมดจด)', pts: 1.0, cam: 'device',
        targetSecs: 10,
        hint: 'กลั้นหายใจ 10 วินาที แล้วสามารถสูดซ้ำอีกครั้งเพื่อให้มั่นใจว่าผงยาหมดแคปซูล' },
      { id: 'discard', type: 'clinic_confirm', title: '8. เทแคปซูลเปล่าทิ้ง & ปิดเครื่อง', pts: 1.0, cam: 'overview',
        choices: [
          { id: 'good', label: 'เปิดปากสูดเทเปลือกแคปซูลทิ้ง ปิดปากสูดและฝาครอบ · แกะฟอยล์ใช้ทีละเม็ด', correct: true },
          { id: 'bad', label: 'แกะแคปซูลทั้งหมดใส่ตลับยาไว้ล่วงหน้า · ล้างเครื่องด้วยน้ำร้อนทุกวัน', correct: false }
        ],
        hint: 'ห้ามแกะแคปซูลออกจากแผงฟอยล์ล่วงหน้าเพราะยาดูดความชื้นง่าย' }
    ]
  },

  CLINIC_EASYHALER: {
    id: 'CLINIC_EASYHALER',
    track: 'Clinic',
    code: 'OSPE-CLSD06',
    week: 'CLSD',
    name: 'Easyhaler (Dry Powder Inhaler)',
    category: 'ยาเทคนิคพิเศษ · Easyhaler',
    rxText: 'Dx: Asthma / COPD | Rx: Budesonide / Formoterol Easyhaler — Sig: 1-2 inhalations BID',
    device: 'easyhaler',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน 2 ตัวบ่งชี้ & ประวัติแพ้ยา', pts: 1.0, cam: 'device',
        choices: [
          { id: '2id', label: 'ถามชื่อ-นามสกุล + HN/วันเกิด & ประวัติแพ้ยา', correct: true },
          { id: 'skip', label: 'จ่ายยาโดยไม่ยืนยันตัวตน', correct: false }
        ],
        hint: 'ยืนยันตัวตนผู้ป่วยด้วย 2 ตัวบ่งชี้ก่อนสาธิตอุปกรณ์ Easyhaler' },
      { id: 'uncap', type: 'device_uncap', title: '2. ถอดฝาครอบปากสูดออก', pts: 1.0, cam: 'device',
        hint: 'ดึงฝาครอบปากสูดออกในแนวตั้ง' },
      { id: 'shake', type: 'device_shake', title: '3. เขย่าเครื่องในแนวตั้ง 3–5 ครั้ง', pts: 1.5, cam: 'device',
        targetShakes: 4,
        hint: 'ถือเครื่องตั้งตรง เขย่าขึ้นลง 3–5 ครั้งเพื่อให้ผงยาเรียงตัวสม่ำเสมอ' },
      { id: 'click', type: 'plunger_click', title: '4. กดด้านบนเครื่องลง 1 ครั้งจนดังคลิก แล้วปล่อย', pts: 1.5, cam: 'device',
        hint: 'ถือตั้งตรง กดปุ่มด้านบนลง 1 ครั้งจนได้ยินเสียงคลิก แล้วปล่อยให้เด้งกลับ (ห้ามกดซ้ำหลายครั้ง)' },
      { id: 'exhale', type: 'patient_exhale', title: '5. หายใจออกให้สุด (ห้ามเป่าใส่เครื่อง)', pts: 1.0, cam: 'device',
        hint: 'หายใจออกทางปากให้สุดโดยหันหน้าออกจากปากสูด' },
      { id: 'inhale', type: 'inhale_forceful', title: '6. อมปากสูด & สูดเข้าแรงและลึก', pts: 2.0, cam: 'device',
        hint: 'อมปากสูดให้สนิท สูดลมหายใจเข้าทางปากให้แรงและลึกอย่างสม่ำเสมอ' },
      { id: 'hold', type: 'breath_hold', title: '7. กลั้นหายใจ 10 วินาที', pts: 1.0, cam: 'device',
        targetSecs: 10,
        hint: 'เอาเครื่องออกจากปาก กลั้นหายใจ 10 วินาที แล้วผ่อนลมหายใจออกช้าๆ' },
      { id: 'clean_cap', type: 'device_clean_cap', title: '8. เช็ดแห้ง ปิดฝา & บ้วนปากหลังพ่นสเตียรอยด์', pts: 1.0, cam: 'device',
        allowWashCanister: false,
        hint: 'เช็ดปากสูดด้วยทิชชูแห้ง ห้ามล้างน้ำ ปิดฝา และบ้วนปากกลั้วคอบ้วนทิ้งทุกครั้งหากมียา ICS' }
    ]
  },

  CLINIC_SWINGHALER: {
    id: 'CLINIC_SWINGHALER',
    track: 'Clinic',
    code: 'OSPE-CLSD07',
    week: 'CLSD',
    name: 'Swinghaler (Dry Powder Inhaler)',
    category: 'ยาเทคนิคพิเศษ · Swinghaler',
    rxText: 'Dx: Asthma | Rx: Budesonide Swinghaler 200 mcg — Sig: 1 inhalation BID',
    device: 'swinghaler',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน 2 ตัวบ่งชี้ & ประวัติแพ้ยา', pts: 1.0, cam: 'device',
        choices: [
          { id: '2id', label: 'ถามชื่อ-นามสกุล + HN/วันเกิด & ประวัติแพ้ยา', correct: true },
          { id: 'skip', label: 'จ่ายยาโดยไม่ถามชื่อผู้ป่วย', correct: false }
        ],
        hint: 'ยืนยันตัวตนผู้ป่วยก่อนสอนวิธีใช้ Swinghaler' },
      { id: 'uncap', type: 'device_uncap', title: '2. ถอดฝาครอบป้องกันออก', pts: 1.0, cam: 'device',
        hint: 'เปิดฝาครอบด้านล่าง/ปากสูดออก' },
      { id: 'shake', type: 'device_shake', title: '3. เขย่าเครื่องในแนวตั้ง 3–5 ครั้ง', pts: 1.5, cam: 'device',
        targetShakes: 4,
        hint: 'ถือเครื่องตั้งตรง เขย่าเบาๆ 3–5 ครั้งก่อนโหลดยา' },
      { id: 'click', type: 'plunger_click', title: '4. กดคันโยก/ปากสูดขึ้น-ลง 1 รอบจนดังคลิก', pts: 1.5, cam: 'device',
        hint: 'ดันคันโยกปากสูดขึ้นลง 1 ครั้งจนได้ยินเสียงคลิกเพื่อตักผงยา 1 โดส' },
      { id: 'exhale', type: 'patient_exhale', title: '5. หายใจออกให้สุดห่างจากเครื่อง', pts: 1.0, cam: 'device',
        hint: 'หายใจออกให้สุด ห้ามเป่าใส่ปากสูด' },
      { id: 'inhale', type: 'inhale_forceful', title: '6. อมปากสูด & สูดเข้าแรงและลึก', pts: 2.0, cam: 'device',
        hint: 'อมปากสูดให้สนิทแล้วสูดลมหายใจเข้าแรงและลึก' },
      { id: 'hold', type: 'breath_hold', title: '7. กลั้นหายใจ 10 วินาที', pts: 1.0, cam: 'device',
        targetSecs: 10,
        hint: 'กลั้นหายใจไว้ 10 วินาทีแล้วค่อยผ่อนลมออก' },
      { id: 'clean_cap', type: 'device_clean_cap', title: '8. เช็ดแห้ง ปิดฝา & บ้วนปาก', pts: 1.0, cam: 'device',
        allowWashCanister: false,
        hint: 'เช็ดปากสูดด้วยทิชชูแห้ง ปิดฝา และบ้วนปากหลังใช้ Budesonide' }
    ]
  },

  CLINIC_ELLIPTA: {
    id: 'CLINIC_ELLIPTA',
    track: 'Clinic',
    code: 'OSPE-CLSDEX01',
    week: 'CLSD',
    name: 'Ellipta (Dry Powder Inhaler)',
    category: 'ยาเทคนิคพิเศษ · Ellipta',
    rxText: 'Dx: Asthma / COPD | Rx: Fluticasone Furoate / Vilanterol (Relvar Ellipta) — Sig: 1 inhalation OD',
    device: 'ellipta',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน 2 ตัวบ่งชี้ & แนะนำห้ามเขย่า', pts: 1.0, cam: 'device',
        choices: [
          { id: '2id', label: 'ถามชื่อ-นามสกุล + HN/วันเกิด · ย้ำว่า Ellipta ไม่ต้องเขย่าและห้ามปิดช่องระบายอากาศ', correct: true },
          { id: 'skip', label: 'แนะนำให้เขย่าแรงๆ 5 ครั้งก่อนเปิดฝาทุกครั้ง', correct: false }
        ],
        hint: 'Ellipta เป็น DPI ที่บรรจุในฟอยล์บลิสเตอร์ภายใน ไม่ต้องเขย่า' },
      { id: 'open_cover', type: 'accuhaler_open', title: '2. เลื่อนฝาครอบลงจนสุดให้ดังคลิก (ตัวเลขลดลง 1)', pts: 2.0, cam: 'device',
        hint: 'เลื่อนฝาครอบลงด้านล่างจนได้ยินเสียงคลิก 1 ครั้ง (เปิดทิ้งไว้แล้วไม่สูดแล้วปิดกลับจะเสียยา 1 โดส!)' },
      { id: 'exhale', type: 'patient_exhale', title: '3. หายใจออกให้สุดห่างจากปากสูด', pts: 1.0, cam: 'device',
        hint: 'หายใจออกให้สุด โดยหันหน้าออกจากเครื่องและห้ามเป่าใส่เครื่อง' },
      { id: 'inhale', type: 'inhale_forceful', title: '4. อมปากสูด (ไม่ปิดช่องลม) & สูดเข้าแรง ลึก สม่ำเสมอ', pts: 2.5, cam: 'device',
        hint: 'ระวังนิ้วมืออย่าบังช่องระบายอากาศด้านบน อมปากสูดให้สนิทแล้วสูดเข้าแรงและลึก' },
      { id: 'hold', type: 'breath_hold', title: '5. กลั้นหายใจ 3–4 วินาที (หรือถึง 10 วินาที)', pts: 1.5, cam: 'device',
        targetSecs: 10,
        hint: 'เอาเครื่องออกจากปาก กลั้นหายใจอย่างน้อย 3–4 วินาที (มาตรฐานสภาฯ นิยมสอนกลั้น 10 วินาที)' },
      { id: 'clean_cap', type: 'device_clean_cap', title: '6. เช็ดปากสูด เลื่อนฝาปิด & บ้วนปาก', pts: 2.0, cam: 'device',
        allowWashCanister: false,
        hint: 'เช็ดปากสูดด้วยทิชชูแห้ง เลื่อนฝาปิดขึ้นให้สนิท และบ้วนปากกลั้วคอบ้วนทิ้งทุกครั้ง' }
    ]
  },

  CLINIC_RESPIMAT: {
    id: 'CLINIC_RESPIMAT',
    track: 'Clinic',
    code: 'OSPE-CLSDEX02',
    week: 'CLSD',
    name: 'Respimat (Soft Mist Inhaler)',
    category: 'ยาเทคนิคพิเศษ · Respimat',
    rxText: 'Dx: COPD / Asthma | Rx: Tiotropium / Olodaterol Respimat — Sig: 2 puffs OD',
    device: 'respimat',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน 2 ตัวบ่งชี้ & หลักการ TOP (Turn-Open-Press)', pts: 1.0, cam: 'device',
        choices: [
          { id: '2id', label: 'ถามชื่อ-นามสกุล + HN/วันเกิด · จำง่ายๆ ด้วยหลัก TOP (Turn-Open-Press)', correct: true },
          { id: 'skip', label: 'เปิดฝาครอบก่อนแล้วค่อยหมุนฐานเครื่อง', correct: false }
        ],
        hint: 'Respimat ใช้หลัก TOP: Turn (หมุนฐานขณะปิดฝา) -> Open (เปิดฝา) -> Press (กดพ่น)' },
      { id: 'turn', type: 'respimat_turn', title: '2. (Turn) ปิดฝาไว้ & หมุนฐานใสตามลูกศรครึ่งรอบจนดังคลิก', pts: 2.0, cam: 'device',
        hint: 'จับเครื่องตั้งตรง ขณะฝาปิดสนิท ให้หมุนฐานใสไปทางลูกศร 180 องศา (ครึ่งรอบ) จนได้ยินเสียงคลิก' },
      { id: 'uncap', type: 'device_uncap', title: '3. (Open) เปิดฝาครอบพับขึ้นจนสุด', pts: 1.0, cam: 'device',
        hint: 'เปิดฝาครอบด้านบนขึ้นจนสุด' },
      { id: 'exhale', type: 'patient_exhale', title: '4. หายใจออกช้าๆ ให้สุด', pts: 1.0, cam: 'device',
        hint: 'หายใจออกช้าๆ ให้สุดปอดห่างจากเครื่อง' },
      { id: 'actuate', type: 'mdi_actuate', title: '5. (Press) อมปากสูด (ไม่บังช่องลม) & กดปุ่มพ่นพร้อมสูดช้าๆ ลึกๆ', pts: 2.5, cam: 'device',
        hint: 'ปิดริมฝีปากรอบปากสูดโดยไม่บังช่องระบายอากาศด้านข้าง กดปุ่มปล่อยยาพร้อมสูดลมหายใจเข้าช้าๆ ลึกๆ' },
      { id: 'hold', type: 'breath_hold', title: '6. กลั้นหายใจ 10 วินาที แล้วปิดฝา', pts: 1.5, cam: 'device',
        targetSecs: 10,
        hint: 'กลั้นหายใจ 10 วินาที (หรือนานที่สุดเท่าที่ทำได้) แล้วปิดฝาครอบ' },
      { id: 'counsel', type: 'clinic_confirm', title: '7. พ่นครบ 2 กด & อายุหลังใส่หลอดยา 3 เดือน', pts: 1.0, cam: 'overview',
        choices: [
          { id: 'good', label: 'ทำซ้ำ TOP อีกครั้งจนครบ 2 กด · ยาหมดอายุหลังใส่หลอด 3 เดือน · ถ้าไม่ได้ใช้ >7 วันให้พ่นทิ้ง 1 กด', correct: true },
          { id: 'bad', label: 'เขย่าเครื่องทุกครั้งก่อนพ่น · ใช้ได้จนกว่ายาหมดแม้เกิน 1 ปี', correct: false }
        ],
        hint: 'Respimat ไม่ต้องเขย่า และมีอายุการใช้งาน 3 เดือนหลังประกอบหลอดยาครั้งแรก' }
    ]
  },

  CLINIC_NASAL_DROPS: {
    id: 'CLINIC_NASAL_DROPS',
    track: 'Clinic',
    code: 'OSPE-CLSD10',
    week: 'CLSD',
    name: 'Nasal Drops (ยาหยอดจมูก)',
    category: 'ยาเทคนิคพิเศษ · Nasal Drops',
    rxText: 'Dx: Rhinitis / Nasal Congestion | Rx: Oxymetazoline / Ephedrine Nasal Drops — Sig: 1-2 drops each nostril BID-TID (max 3-5 days)',
    device: 'nasal_drops',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน 2 ตัวบ่งชี้ & สั่งน้ำมูกก่อนหยอด', pts: 1.5, cam: 'device',
        choices: [
          { id: '2id', label: 'ถามชื่อ-สกุล + HN/วันเกิด · ให้สั่งน้ำมูกเบาๆ และล้างมือก่อนหยอด', correct: true },
          { id: 'skip', label: 'หยอดยาทันทีโดยไม่ต้องสั่งน้ำมูก', correct: false }
        ],
        hint: 'สั่งน้ำมูกเบาๆ ให้โพรงจมูกโล่งก่อนหยอดยา' },
      { id: 'uncap', type: 'device_uncap', title: '2. เปิดฝาหลอดหยด (ห้ามปลายหลอดสัมผัสจมูก)', pts: 1.5, cam: 'device',
        hint: 'เปิดฝาขวดยาหยอดจมูกและดูดยาขึ้นในหลอดหยด' },
      { id: 'position', type: 'clinic_confirm', title: '3. จัดท่าศีรษะหงายไปด้านหลัง (Mygind / Mecca position)', pts: 2.0, cam: 'overview',
        choices: [
          { id: 'back', label: 'นอนหงายหนุนหมอนใต้ไหล่ให้ศีรษะเงยไปด้านหลัง หรือก้มศีรษะระหว่างเข่า (Mecca)', correct: true },
          { id: 'upright', label: 'นั่งตัวตรงแล้วหยอดยาเหมือนยาพ่นจมูก', correct: false }
        ],
        hint: 'ยาหยอดจมูกต้องเงยศีรษะไปด้านหลังเพื่อให้ยาไหลเคลือบโพรงจมูกไม่ไหลลงคอทันที' },
      { id: 'instill', type: 'eye_instill', title: '4. หยอดยา 1–2 หยดลงรูจมูกแต่ละข้าง & ค้างท่าเดิม 2–3 นาที', pts: 2.5, cam: 'device',
        hint: 'หยอดยาตามจำนวนหยดที่กำหนดโดยไม่ให้ปลายหลอดแตะผนังจมูก และเอียง/เงยศีรษะค้างไว้ 2–3 นาที' },
      { id: 'clean_cap', type: 'device_clean_cap', title: '5. เช็ดปลายหลอดหยด ปิดฝา & เตือน Rebound Congestion', pts: 2.5, cam: 'device',
        allowWashCanister: false,
        hint: 'หากเป็นยาหดหลอดเลือด (Oxymetazoline) ห้ามใช้ติดต่อกันเกิน 3–5 วันเพื่อป้องกัน Rhinitis medicamentosa' }
    ]
  },

  CLINIC_NASAL_IRRIGATION: {
    id: 'CLINIC_NASAL_IRRIGATION',
    track: 'Clinic',
    code: 'OSPE-CLSD11',
    week: 'CLSD',
    name: '0.9% NSS Nasal Irrigation (การล้างจมูกด้วยน้ำเกลือ)',
    category: 'ยาเทคนิคพิเศษ · Nasal Irrigation',
    rxText: 'Dx: Allergic Rhinitis / Sinusitis | Rx: 0.9% Normal Saline Solution + Syringe 20 mL / จุกล้างจมูก',
    device: 'nasal_irrigation',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน & เตรียม 0.9% NSS (ห้ามใช้น้ำเปล่า)', pts: 1.5, cam: 'device',
        choices: [
          { id: 'nss', label: 'ยืนยันตัวตน · ใช้ 0.9% NSS ที่สะอาด (อุ่นเล็กน้อยได้) ห้ามใช้น้ำประปา/น้ำดื่ม', correct: true },
          { id: 'tap', label: 'ใช้น้ำประปาผสมเกลือแกงทำเองแบบกะปริมาณ', correct: false }
        ],
        hint: 'การใช้น้ำเปล่า/น้ำประปาจะแสบจมูกและเสี่ยงติดเชื้อได้' },
      { id: 'uncap', type: 'device_uncap', title: '2. ดูด 0.9% NSS ใส่ Syringe 10–20 mL & สวมจุกล้างจมูก', pts: 2.0, cam: 'device',
        hint: 'ดูดน้ำเกลือ 10–20 mL ใส่ Syringe ให้เรียบร้อย' },
      { id: 'posture', type: 'clinic_confirm', title: '3. ก้มหน้าเหนืออ่างล้างหน้า เอียงศีรษะ & อ้าปากออกเสียง "อาาา"', pts: 2.5, cam: 'overview',
        choices: [
          { id: 'aaa', label: 'ก้มหน้าลงเล็กน้อย อ้าปากกลั้นหายใจหรือออกเสียง "อาาา" ยาวๆ ขณะฉีดล้าง', correct: true },
          { id: 'inhale', label: 'เงยหน้าขึ้นและสูดลมหายใจเข้าแรงๆ ขณะฉีดน้ำเกลือ', correct: false }
        ],
        hint: 'การออกเสียง "อาาา" จะช่วยปิดเพดานอ่อน ทำให้น้ำเกลือไม่ไหลลงคอและไม่สำลัก' },
      { id: 'irrigate', type: 'eye_instill', title: '4. ดันน้ำเกลือเบาๆ เข้าจมูกทีละข้างจนไหลออกอีกข้าง', pts: 2.5, cam: 'device',
        hint: 'ดันก้าน Syringe เบาๆ อย่างต่อเนื่องจนน้ำเกลือไหลออกทางรูจมูกอีกข้าง แล้วสั่งน้ำมูกเบาๆ (ห้ามอุดรูจมูกข้างเดียวแล้วสั่งแรง)' },
      { id: 'clean_cap', type: 'clinic_confirm', title: '5. ล้าง Syringe & จุกซิลิโคนด้วยน้ำสะอาดแล้วผึ่งให้แห้ง', pts: 1.5, cam: 'overview',
        choices: [
          { id: 'dry', label: 'ล้างอุปกรณ์ด้วยน้ำสะอาด/น้ำสบู่อ่อนๆ คว่ำผึ่งลมให้แห้งสนิท · NSS เปิดขวดใช้ได้ ~1 เดือน', correct: true },
          { id: 'dirty', label: 'ไม่ต้องล้าง Syringe เก็บไว้ใช้ต่อได้เลย', correct: false }
        ],
        hint: 'ทำความสะอาดอุปกรณ์ทุกครั้งหลังใช้เพื่อป้องกันเชื้อราและแบคทีเรีย' }
    ]
  },

  CLINIC_EAR_DROPS: {
    id: 'CLINIC_EAR_DROPS',
    track: 'Clinic',
    code: 'OSPE-CLSD12',
    week: 'CLSD',
    name: 'Ear Drops (ยาหยอดหู)',
    category: 'ยาเทคนิคพิเศษ · Ear Drops',
    rxText: 'Dx: Otitis Externa | Rx: Ofloxacin / Polymyxin B Otic Drops — Sig: 3-4 drops affected ear BID',
    device: 'ear_drops',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน & อุ่นขวดยาในฝ่ามือ 1–2 นาที', pts: 2.0, cam: 'device',
        choices: [
          { id: 'warm', label: 'ยืนยันตัวตน · กำขวดยาในฝ่ามือ 1–2 นาทีให้อุณหภูมิใกล้เคียงร่างกาย (ป้องกันเวียนศีรษะ)', correct: true },
          { id: 'cold', label: 'หยิบก้นขวดจากตู้เย็นแล้วหยอดใส่หูทันที', correct: false }
        ],
        hint: 'ยาหยอดหูที่เย็นเกินไปจะกระตุ้น vestibular system ทำให้เกิดอาการเวียนศีรษะ/คลื่นไส้ได้' },
      { id: 'uncap', type: 'device_uncap', title: '2. เปิดฝาขวดยาหยอดหู (ระวังปลายหลอดแตะใบหู)', pts: 1.5, cam: 'device',
        hint: 'เปิดฝาขวดยาโดยไม่ให้ปลายหลอดสัมผัสสิ่งสกปรก' },
      { id: 'pull_ear', type: 'clinic_confirm', title: '3. นอนตะแคง & ดึงใบหูให้รูหูตรง (ผู้ใหญ่ vs เด็ก <3 ปี)', pts: 2.5, cam: 'overview',
        choices: [
          { id: 'adult', label: 'ผู้ใหญ่: ดึงใบหูขึ้นบนและไปด้านหลัง (Up & Back) | เด็ก <3 ปี: ดึงลงล่างและไปด้านหลัง (Down & Back)', correct: true },
          { id: 'wrong', label: 'ผู้ใหญ่: ดึงใบหูลงล่างและไปด้านหน้า', correct: false }
        ],
        hint: 'ผู้ใหญ่ดึงใบหู Up & Back; เด็กอายุต่ำกว่า 3 ปีดึง Down & Back' },
      { id: 'instill', type: 'eye_instill', title: '4. หยอดยาตามจำนวนหยด & นอนตะแคงค้างไว้ 3–5 นาที', pts: 2.5, cam: 'device',
        hint: 'หยอดยาลงข้างผนังรูหู กดติ่งหูหน้า (tragus) เบาๆ และนอนตะแคงค้างไว้ 3–5 นาที' },
      { id: 'clean_cap', type: 'device_clean_cap', title: '5. ปิดฝาสนิท & ห้ามใช้ยาหยอดตาแทน/ร่วมกับยาหยอดหู', pts: 1.5, cam: 'device',
        allowWashCanister: false,
        hint: 'ปิดฝาให้สนิท เก็บที่อุณหภูมิห้องพ้นแสง และเช็ดส่วนเกินด้วยสำลีสะอาด' }
    ]
  },

  CLINIC_EYE_OINTMENT: {
    id: 'CLINIC_EYE_OINTMENT',
    track: 'Clinic',
    code: 'OSPE-CLSD14',
    week: 'CLSD',
    name: 'Ophthalmic Ointment (ยาป้ายตา)',
    category: 'ยาเทคนิคพิเศษ · Eye Ointment',
    rxText: 'Dx: Bacterial Conjunctivitis | Rx: Terramycin® Ophthalmic Ointment — Sig: ป้ายตาขวา ยาว ~1 ซม. วันละ 1 ครั้ง ก่อนนอน (hs OD)',
    device: 'eye_ointment',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน 2 ตัวบ่งชี้ & ล้างมือให้สะอาด', pts: 1.0, cam: 'device',
        choices: [
          { id: '2id', label: 'ถามชื่อ-สกุล + HN/วันเกิด · ตรวจตาข้างขวา (OD) · ล้างมือด้วยสบู่ก่อนป้ายตา', correct: true },
          { id: 'skip', label: 'จ่ายหลอดยาโดยไม่ตรวจข้างตาและไม่ให้ล้างมือ', correct: false }
        ],
        hint: 'ตรวจสอบข้างตา (OD = ขวา, OS = ซ้าย, OU = สองข้าง) และล้างมือให้สะอาด' },
      { id: 'uncap', type: 'device_uncap', title: '2. เปิดฝาหลอดยา (ห้ามปลายหลอดแตะตาหรือขนตา)', pts: 1.5, cam: 'device',
        hint: 'เปิดฝาหลอดยาป้ายตา วางฝาบนทิชชูสะอาด' },
      { id: 'pull_sac', type: 'eye_pull_sac', title: '3. เงยหน้า มองขึ้นบน & ดึงเปลือกตาล่างเป็นกระพุ้ง', pts: 2.0, cam: 'device',
        hint: 'ใช้นิ้วชี้ดึงเปลือกตาล่างลงเบาๆ ให้เกิดกระพุ้งตาและมองขึ้นด้านบน' },
      { id: 'instill', type: 'eye_instill', title: '4. บีบขี้ผึ้งยาว ~1 ซม. จากหัวตาไปหางตา & หลับตา 1–2 นาที', pts: 3.0, cam: 'device',
        hint: 'บีบเนื้อยาเป็นเส้นยาวประมาณ 1 เซนติเมตร (หรือ 0.5 นิ้ว) ลงในกระพุ้งตาล่าง หมุนหลอดเพื่อตัดเส้นยา แล้วหลับตา 1–2 นาที (ห้ามขยี้ตา)' },
      { id: 'clean_cap', type: 'device_clean_cap', title: '5. เช็ดปลายหลอดด้วยทิชชูสะอาด (ห้ามล้างน้ำ) & ปิดฝา', pts: 1.5, cam: 'device',
        allowWashCanister: false,
        hint: 'เช็ดปลายหลอดด้วยทิชชูแห้งสะอาด ห้ามล้างด้วยน้ำ และปิดฝาให้สนิททันที' },
      { id: 'counsel', type: 'clinic_confirm', title: '6. เตือนอาการตาพร่ามัวชั่วคราว & อายุหลังเปิดใช้ 1 เดือน', pts: 1.0, cam: 'overview',
        choices: [
          { id: 'good', label: 'หลังป้ายตาจะมองเห็นพร่ามัวชั่วคราว (ห้ามขับรถทันที จึงนิยมใช้ก่อนนอน) · ใช้ได้ไม่เกิน 30 วันหลังเปิด · ถอดคอนแทคเลนส์', correct: true },
          { id: 'bad', label: 'ล้างปลายหลอดด้วยน้ำอุ่นทุกครั้ง · ป้ายตาก่อนหยอดยาหยอดตา', correct: false }
        ],
        hint: 'หากมียาหยอดตาและยาป้ายตาใช้ร่วมกัน ให้หยอดยาหยอดตาก่อน แล้วรอ 5–10 นาทีจึงป้ายตา' }
    ]
  },

  CLINIC_SUBLINGUAL: {
    id: 'CLINIC_SUBLINGUAL',
    track: 'Clinic',
    code: 'OSPE-CLSD15',
    week: 'CLSD',
    name: 'Sublingual Nitrate (ยาอมใต้ลิ้น)',
    category: 'ยาเทคนิคพิเศษ · Sublingual Tablet',
    rxText: 'Dx: Angina Pectoris | Rx: Isosorbide Dinitrate 5 mg SL / Nitroglycerin 0.6 mg SL — Sig: 1 tab SL prn chest pain',
    device: 'sublingual',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน & ให้นั่งลงก่อนอมยาทุกครั้ง', pts: 2.0, cam: 'overview',
        choices: [
          { id: 'sit', label: 'ยืนยันตัวตน · ให้นั่งพักหรือเอนหลังก่อนอมยาเพื่อป้องกันความดันตก/หน้ามืดล้ม', correct: true },
          { id: 'stand', label: 'ยืนเดินไปมาขณะอมยาเพื่อให้ยาดูดซึมเร็วขึ้น', correct: false }
        ],
        hint: 'ยา Nitrate ขยายหลอดเลือดรวดเร็ว อาจทำให้เกิด Orthostatic hypotension และหน้ามืดเป็นลมได้' },
      { id: 'uncap', type: 'device_uncap', title: '2. เปิดฝาขวดแก้วสีชาหยิบยา 1 เม็ด (มือแห้ง)', pts: 1.5, cam: 'device',
        hint: 'หยิบยา 1 เม็ดด้วยมือที่แห้ง แล้วรีบปิดฝาขวดแก้วสีชาให้สนิททันที (ห้ามแบ่งใส่ตลับพลาสติก)' },
      { id: 'place_sl', type: 'sublingual_place', title: '3. วางยาใต้ลิ้นปล่อยให้ละลายเอง (ห้ามเคี้ยว/ห้ามกลืน)', pts: 3.0, cam: 'device',
        hint: 'วางเม็ดยาไว้ใต้ลิ้น ปล่อยให้ละลายดูดซึมเอง ห้ามเคี้ยว ห้ามกลืน และงดดื่มน้ำระหว่างอมยา (อาจรู้สึกซ่าหรือปวดศีรษะตุบๆ เล็กน้อย)' },
      { id: 'redose', type: 'clinic_confirm', title: '4. เกณฑ์อมซ้ำ & โทร 1669 (อมทุก 5 นาที ไม่เกิน 3 เม็ดใน 15 นาที)', pts: 2.5, cam: 'overview',
        choices: [
          { id: '1669', label: 'ถ้าไม่ดีขึ้นใน 5 นาที อมซ้ำได้ทุก 5 นาที (สูงสุด 3 เม็ดใน 15 นาที) หากยังไม่หายให้รีบไป รพ./โทร 1669', correct: true },
          { id: 'max5', label: 'อมต่อเนื่องได้ถึง 5–6 เม็ดภายใน 10 นาทีจนกว่าจะหายเจ็บหน้าอก', correct: false }
        ],
        hint: 'หากอาการเจ็บหน้าอกไม่ทุเลาหลังอมเม็ดที่ 1 (5 นาที) ให้โทร 1669 หรือเตรียมไปโรงพยาบาลทันที และอมซ้ำได้ไม่เกิน 3 เม็ด' },
      { id: 'storage', type: 'clinic_confirm', title: '5. การเก็บรักษา (ขวดแก้วสีชา ปิดสนิท พกติดตัว ห้ามพกแนบตัวที่ร้อน)', pts: 1.0, cam: 'overview',
        choices: [
          { id: 'amber', label: 'เก็บในขวดแก้วสีชาดั้งเดิม ปิดฝาสนิท พ้นแสงและความร้อน · ห้ามใช้ร่วมกับ Sildenafil (PDE5i)', correct: true },
          { id: 'pillbox', label: 'แกะใส่ซองยาใสพกในกระเป๋ากางเกง', correct: false }
        ],
        hint: 'ห้ามใช้ร่วมกับยาในกลุ่ม PDE5 inhibitors (เช่น Sildenafil) เพราะอาจเกิด Severe hypotension' }
    ]
  },

  CLINIC_RECTAL_SUPP: {
    id: 'CLINIC_RECTAL_SUPP',
    track: 'Clinic',
    code: 'OSPE-CLSD16A',
    week: 'CLSD',
    name: 'Rectal Suppository & Enema (ยาเหน็บ/สวนทวารหนัก)',
    category: 'ยาเทคนิคพิเศษ · Rectal',
    rxText: 'Dx: Hemorrhoids / Constipation | Rx: Bisacodyl 10 mg Rectal Supp (หรือ Unison Enema) — Sig: 1 supp PR prn',
    device: 'rectal_supp',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน ล้างมือ & เช็กความแข็งตัวของยาเหน็บ', pts: 1.5, cam: 'device',
        choices: [
          { id: 'fridge', label: 'ล้างมือให้สะอาด · หากยานิ่มให้แช่ตู้เย็นช่องธรรมดา 15–30 นาทีก่อนแกะฟอยล์', correct: true },
          { id: 'soft', label: 'ถ้ายานิ่มเหลวให้ใช้มือบีบปั้นแล้วเหน็บได้เลย', correct: false }
        ],
        hint: 'ยาเหน็บทวารหนักที่นิ่มเกินไปจะสอดยาก ควรแช่ตู้เย็นหรือแช่น้ำเย็นทั้งฟอยล์ให้แข็งตัวก่อน' },
      { id: 'uncap', type: 'device_uncap', title: '2. แกะห่อฟอยล์/พลาสติก & หล่อลื่นปลายด้วยน้ำสะอาด/KY Jelly', pts: 2.0, cam: 'device',
        hint: 'ฉีกซองฟอยล์ออก (ห้ามใช้วาสลีน/ปิโตรเลียมเจลลี่หล่อลื่นเพราะอาจขัดขวางการดูดซึม ให้ใช้น้ำสะอาดหรือ Water-soluble lubricant)' },
      { id: 'position', type: 'clinic_confirm', title: '3. จัดท่านอนตะแคงซ้าย งอเข่าขวาขึ้น (Sims position)', pts: 2.0, cam: 'overview',
        choices: [
          { id: 'sims', label: 'นอนตะแคงซ้าย เหยียดขาซ้ายตรง และงอเข่าขวาเข้าหาหน้าอก', correct: true },
          { id: 'stand', label: 'ยืนตรงแล้วสอดยาเหน็บ', correct: false }
        ],
        hint: 'ท่านอนตะแคงซ้ายงอเข่าขวาจะช่วยให้กล้ามเนื้อหูรูดทวารหนักคลายตัว' },
      { id: 'insert', type: 'rectal_insert', title: '4. สอดยาด้านเรียวแหลมเข้าทวารหนักลึก ~1 นิ้ว (ผู้ใหญ่) พ้นหูรูด', pts: 3.0, cam: 'device',
        hint: 'ค่อยๆ สอดด้านปลายแหลมเข้าไปจนพ้นกล้ามเนื้อหูรูด (ประมาณ 1 นิ้วในผู้ใหญ่ หรือ 0.5 นิ้วในเด็ก) หนีบก้นและนอนพัก 15 นาที' },
      { id: 'counsel', type: 'clinic_confirm', title: '5. นอนพัก 15 นาที & ล้างมือหลังเหน็บยา', pts: 1.5, cam: 'overview',
        choices: [
          { id: 'rest', label: 'นอนท่าเดิมประมาณ 15 นาทีเพื่อไม่ให้ยาหลุดออกและรอให้ยาละลาย · ล้างมือด้วยสบู่', correct: true },
          { id: 'walk', label: 'ลุกเดินทันทีหลังเหน็บยา', correct: false }
        ],
        hint: 'เก็บยาเหน็บที่เหลือในตู้เย็นช่องธรรมดา (2–8°C) ห้ามแช่ช่องแข็ง' }
    ]
  },

  CLINIC_VAGINAL_SUPP: {
    id: 'CLINIC_VAGINAL_SUPP',
    track: 'Clinic',
    code: 'OSPE-CLSD17',
    week: 'CLSD',
    name: 'Vaginal Suppository + Applicator (ยาเหน็บช่องคลอด)',
    category: 'ยาเทคนิคพิเศษ · Vaginal',
    rxText: 'Dx: Vulvovaginal Candidiasis | Rx: Clotrimazole 100 mg Vaginal Tablet + Applicator — Sig: 1 tab PV hs x 6 days',
    device: 'vaginal_supp',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน 2 ตัวบ่งชี้ & แนะนำใช้ก่อนนอน + ล้างมือ', pts: 1.5, cam: 'device',
        choices: [
          { id: '2id', label: 'ยืนยันตัวตน · ล้างมือให้สะอาด · ปัสสาวะให้เรียบร้อยก่อนเหน็บยาในเวลาก่อนนอน', correct: true },
          { id: 'morning', label: 'เหน็บยาในตอนเช้าก่อนออกไปทำงานตามปกติ', correct: false }
        ],
        hint: 'ยาเหน็บช่องคลอดควรเหน็บก่อนนอนเพื่อให้ยาละลายและออกฤทธิ์ได้เต็มที่โดยไม่ไหลเยิ้ม' },
      { id: 'uncap', type: 'device_uncap', title: '2. แกะเม็ดยาใส่ปลาย Applicator (หรือจุ่มน้ำสะอาด 1–2 วิ)', pts: 2.0, cam: 'device',
        hint: 'นำเม็ดยาสอดเข้าที่ปลายก้านช่วยสอด (Applicator) ให้พอดี หรือหากสอดด้วยนิ้วมือให้ชุบน้ำสะอาดเล็กน้อย' },
      { id: 'insert', type: 'vaginal_insert', title: '3. นอนหงายชันเข่า สอด Applicator ลึกเท่าที่สบาย & ดันก้านปล่อยยา', pts: 3.5, cam: 'device',
        hint: 'นอนหงายแยกขาและชันเข่าขึ้น สอด Applicator เข้าช่องคลอดอย่างนุ่มนวล ดันลูกสูบจนสุดเพื่อปล่อยยา แล้วดึงก้านออก' },
      { id: 'clean_cap', type: 'clinic_confirm', title: '4. นอนหงายพัก 15 นาที & ล้าง Applicator ด้วยน้ำสบู่อ่อนๆ', pts: 1.5, cam: 'overview',
        choices: [
          { id: 'wash', label: 'นอนพัก 15 นาที · ถอดล้าง Applicator ด้วยน้ำสบู่อ่อนและน้ำสะอาด ผึ่งให้แห้ง · ใส่ผ้าอนามัยแบบแผ่นได้', correct: true },
          { id: 'tampon', label: 'ใส่ผ้าอนามัยแบบสอด (Tampon) เพื่อกันยาไหลออก', correct: false }
        ],
        hint: 'ห้ามใช้ผ้าอนามัยแบบสอด (Tampon) เพราะจะดูดซับตัวยาออกหมด' },
      { id: 'counsel', type: 'clinic_confirm', title: '5. งดเพศสัมพันธ์ระหว่างรักษา & ใช้ครบคอร์สแม้อาการดีขึ้น', pts: 1.5, cam: 'overview',
        choices: [
          { id: 'full', label: 'ใช้ต่อเนื่องให้ครบคอร์สแม้มีประจำเดือน · งดเพศสัมพันธ์ (Clotrimazole อาจทำให้ถุงยางอนามัยเสื่อม)', correct: true },
          { id: 'stop', label: 'หยุดยาทันทีเมื่ออาการคันหายไปใน 2 วันแรก', correct: false }
        ],
        hint: 'ยาเหน็บที่มีน้ำมันเป็นส่วนประกอบอาจทำให้ถุงยางอนามัยยางธรรมชาติ (Latex) รั่วซึมได้' }
    ]
  },

  CLINIC_INSULIN_MIX: {
    id: 'CLINIC_INSULIN_MIX',
    track: 'Clinic',
    code: 'OSPE-CLSD19',
    week: 'CLSD',
    name: 'Insulin Vial & Syringe (การผสมยาฉีดอินซูลิน Clear before Cloudy)',
    category: 'ยาเทคนิคพิเศษ · Insulin Syringe',
    rxText: 'Dx: DM Type 2 | Rx: RI 6 U + NPH 14 U (Total 20 U) SC AC เช้า — ผสมใน Syringe เดียวกัน',
    device: 'insulin_pen',
    videos: [],
    steps: [
      { id: 'roll', type: 'insulin_roll', title: '1. คลึงขวด NPH (ขุ่น) ระหว่างฝ่ามือ 10–20 ครั้ง (ห้ามเขย่า)', pts: 2.0, cam: 'device',
        hint: 'คลึงขวดอินซูลินชนิดขุ่น (NPH) เบาๆ ระหว่างฝ่ามือจนผสมเป็นเนื้อเดียวกัน ห้ามเขย่าแรง' },
      { id: 'air_cloudy', type: 'clinic_confirm', title: '2. หลักผสม Clear before Cloudy (อัดลม ขุ่น -> ใส | ดูดยา ใส -> ขุ่น)', pts: 3.0, cam: 'device',
        choices: [
          { id: 'clear_first', label: '1) อัดอากาศเข้าขวดขุ่น (14U) → 2) อัดอากาศเข้าขวดใส (6U) → 3) ดูดยาใส (6U) → 4) ดูดยาขุ่น (14U รวม 20U)', correct: true },
          { id: 'cloudy_first', label: 'ดูดยาขุ่น (NPH) ก่อนแล้วค่อยไปดูดยาใส (RI)', correct: false }
        ],
        hint: 'จำหลัก "ลม ขุ่น-ใส | ยา ใส-ขุ่น" (Clear before Cloudy) เพื่อไม่ให้ขวดใส RI ปนเปื้อน NPH!' },
      { id: 'dial', type: 'insulin_dial', title: '3. ตรวจสอบปริมาณยารวมใน Syringe (6 + 14 = 20 Units)', pts: 2.0, cam: 'device',
        targetUnits: 20,
        hint: 'ตั้งและตรวจสอบปริมาตรยารวมทั้งหมดให้ได้ 20 Units (ห้ามฉีดเกินขนาด)' },
      { id: 'inject', type: 'insulin_inject', title: '4. เช็ด Alcohol รอแห้ง ยกผิวหนัง แทง 90° (หรือ 45° ถ้าผอม) & ฉีดช้าๆ', pts: 3.0, cam: 'overview',
        hint: 'เช็ด Alcohol รอให้แห้งสนิท หยิบผิวหนังหน้าท้องขึ้นเบาๆ แทงเข็มฉีดเข้าชั้นใต้ผิวหนัง (SC) และเปลี่ยนจุดฉีดหมุนเวียน (Rotation)' }
    ]
  },

  CLINIC_NICOTINE: {
    id: 'CLINIC_NICOTINE',
    track: 'Clinic',
    code: 'OSPE-CLSD20',
    week: 'CLSD',
    name: 'Nicotine Replacement Therapy (Patch & Gum - Chew & Park)',
    category: 'ยาเทคนิคพิเศษ · Smoking Cessation',
    rxText: 'Dx: Tobacco Dependence | Rx: Nicotine Gum 2 mg (หรือ Nicotine Patch) — Sig: เคี้ยวเมื่ออยากบุหรี่',
    device: 'nicotine_gum',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน & งดเครื่องดื่มกรด (กาแฟ/น้ำส้ม/น้ำอัดลม) 15 นาทีก่อนเคี้ยว', pts: 2.0, cam: 'overview',
        choices: [
          { id: 'no_acid', label: 'ยืนยันตัวตน · งดอาหารและเครื่องดื่มที่มีฤทธิ์เป็นกรด (กาแฟ/น้ำอัดลม/น้ำผลไม้) ก่อนและระหว่างเคี้ยว 15 นาที', correct: true },
          { id: 'coffee', label: 'เคี้ยวหมากฝรั่งนิโคตินพร้อมดื่มกาแฟร้อนได้ตามปกติ', correct: false }
        ],
        hint: 'ความเป็นกรดจะลด pH ในช่องปาก ทำให้ Nicotine ไม่สามารถดูดซึมผ่านเยื่อบุกระพุ้งแก้มได้' },
      { id: 'chew_park', type: 'gum_chew_park', title: '2. เทคนิค "เคี้ยวและพัก" (Chew & Park) นาน 30 นาที', pts: 3.5, cam: 'device',
        hint: 'เคี้ยวช้าๆ จนเริ่มได้รสเผ็ดซ่า/เปปเปอร์มินต์ -> หยุดเคี้ยวแล้ว "พัก" หมากฝรั่งไว้ที่กระพุ้งแก้ม (Park) จนรสจางลง จึงเริ่มเคี้ยวใหม่สลับกันนาน 30 นาที' },
      { id: 'avoid_swallow', type: 'clinic_confirm', title: '3. เตือนห้ามกลืนน้ำลายที่มีนิโคติน (ทำให้สะอึก/แสบคอ/ปวดท้อง)', pts: 2.5, cam: 'overview',
        choices: [
          { id: 'park_ok', label: 'ห้ามเคี้ยวต่อเนื่องเหมือนหมากฝรั่งทั่วไป เพราะจะกลืนนิโคตินลงกระเพาะทำให้สะอึก คลื่นไส้ แสบคอ', correct: true },
          { id: 'fast', label: 'เคี้ยวเร็วๆ ต่อเนื่องตลอด 30 นาทีเพื่อให้ยาออกฤทธิ์ไว', correct: false }
        ],
        hint: 'หากเป็นแผ่นแปะ Nicotine Patch: แปะบนผิวหนังแห้งสะอาดไม่มีขน บริเวณต้นแขน/ลำตัว เปลี่ยนตำแหน่งทุกวัน' },
      { id: 'counsel', type: 'clinic_confirm', title: '4. ขนาดยาสูงสุดไม่เกิน 24 ชิ้น/วัน & ห้ามสูบบุหรี่ร่วมด้วย', pts: 2.0, cam: 'overview',
        choices: [
          { id: 'limit', label: 'ห้ามใช้เกิน 24 ชิ้น/วัน · ห้ามสูบบุหรี่ระหว่างใช้เพื่อป้องกัน Nicotine toxicity · ห่อกระดาษทิ้งให้พ้นมือเด็ก/สัตว์เลี้ยง', correct: true },
          { id: 'smoke', label: 'สูบบุหรี่สลับกับเคี้ยวหมากฝรั่งได้ไม่จำกัด', correct: false }
        ],
        hint: 'แนะนำกำลังใจการเลิกบุหรี่และนัดติดตามอาการอยากยา' }
    ]
  },

  CLINIC_DRY_SYRUP: {
    id: 'CLINIC_DRY_SYRUP',
    track: 'Clinic',
    code: 'OSPE-CLSD21',
    week: 'CLSD',
    name: 'Dry Syrup Reconstitution & Oral Syringe (ยาผงแห้งผสมน้ำ)',
    category: 'ยาเทคนิคพิเศษ · Dry Syrup',
    rxText: 'Dx: Acute Otitis Media (Child 15 kg) | Rx: Amoxicillin/Clavulanate Dry Syrup — Sig: 5 mL PO q12h x 7 days',
    device: 'dry_syrup',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตนผู้ป่วย/ผู้ปกครอง น้ำหนักเด็ก & ประวัติแพ้ยา Penicillin', pts: 1.5, cam: 'overview',
        choices: [
          { id: 'wt', label: 'ยืนยันตัวตนเด็ก + น้ำหนักตัว (15 kg) + ถามประวัติแพ้ยากลุ่ม Penicillin', correct: true },
          { id: 'skip', label: 'ผสมยาให้เลยโดยไม่ถามน้ำหนักและประวัติแพ้ยา', correct: false }
        ],
        hint: 'ขนาดยาเด็กต้องคำนวณตามน้ำหนักตัว (mg/kg/day) และเช็กประวัติแพ้ Penicillin เสมอ' },
      { id: 'reconstitute', type: 'syrup_reconstitute', title: '2. เคาะผงยาให้ร่วน -> เติมน้ำต้มสุกเย็น 2 รอบถึงขีดระดับ -> เขย่าให้ละลาย', pts: 3.5, cam: 'device',
        hint: '1) เคาะขวดให้ผงยาร่วน 2) เติมน้ำต้มสุกที่เย็นแล้วประมาณครึ่งหนึ่งแล้วเขย่า 3) เติมน้ำส่วนที่เหลือจนถึงขีดบอกระดับพอดี (ในระดับสายตา) แล้วเขย่าจนไม่เหลือตะกอน' },
      { id: 'draw_syringe', type: 'clinic_confirm', title: '3. สาธิตการดูดยาด้วย Oral Syringe 5 mL & เขย่าขวดก่อนป้อนทุกครั้ง', pts: 3.0, cam: 'device',
        choices: [
          { id: 'oral_syr', label: 'เขย่าขวดก่อนใช้ทุกครั้ง · ดูดยาด้วย Oral Syringe ให้ขอบบนของลูกสูบตรงขีด 5 mL (ป้อนช้าๆ ข้างกระพุ้งแก้ม)', correct: true },
          { id: 'spoon', label: 'ใช้ช้อนชาตักยาแทนได้เลยและไม่ต้องเขย่าขวดซ้ำ', correct: false }
        ],
        hint: 'ใช้ Oral Syringe ที่มีความแม่นยำกว่าช้อนครัวเรือน และป้อนเข้าข้างกระพุ้งแก้มเด็กช้าๆ กันสำลัก' },
      { id: 'storage', type: 'clinic_confirm', title: '4. การเก็บรักษาหลังผสม (แช่ตู้เย็น 2–8°C / ใช้ได้ 7 วัน) & กินให้ครบ', pts: 2.0, cam: 'overview',
        choices: [
          { id: 'bud7', label: 'Amox/Clav หลังผสมเก็บในตู้เย็นช่องธรรมดา 2–8°C (ห้ามแช่แข็ง) ทิ้งส่วนที่เหลือหลังครบ 7 วัน · กินจนครบคอร์ส', correct: true },
          { id: 'bud30', label: 'เก็บที่อุณหภูมิห้องได้นาน 1 เดือน', correct: false }
        ],
        hint: 'ยา Amoxicillin/Clavulanate หลังผสมน้ำมีอายุเพียง 7 วันในตู้เย็น (2–8°C)' }
    ]
  },

  CLINIC_OC_PILLS: {
    id: 'CLINIC_OC_PILLS',
    track: 'Clinic',
    code: 'OSPE-CLSD22',
    week: 'CLSD',
    name: 'Oral Contraceptives (COC 21/28 & POP - Missed Pill Rules)',
    category: 'ยาเทคนิคพิเศษ · Oral Contraceptives',
    rxText: 'Rx: Combined Oral Contraceptive (21 หรือ 28 เม็ด) — Sig: 1 tab PO OD เวลาเดียวกันทุกวัน',
    device: 'oc_pills',
    videos: [],
    steps: [
      { id: 'id_check', type: 'clinic_confirm', title: '1. ยืนยันตัวตน & คัดกรองข้อห้ามใช้ (Migraine with aura / DVT / สูบบุหรี่ >35 ปี)', pts: 2.0, cam: 'overview',
        choices: [
          { id: 'screen', label: 'ซักประวัติประจำเดือน, Migraine with aura, ลิ่มเลือดอุดตัน (VTE), ความดันโลหิต, การให้นมบุตร', correct: true },
          { id: 'skip', label: 'จ่ายยาคุมกำเนิดโดยไม่คัดกรองข้อห้ามใช้', correct: false }
        ],
        hint: 'หากให้นมบุตร หรือมีข้อห้ามต่อ Estrogen ให้พิจารณา Progestin-only pills (POP) แทน COC' },
      { id: 'start_day', type: 'clinic_confirm', title: '2. วิธีเริ่มแผงแรก (วันที่ 1–5 ของประจำเดือน) & 21 vs 28 เม็ด', pts: 2.5, cam: 'device',
        choices: [
          { id: 'day1_5', label: 'เริ่มเม็ดแรกภายในวันที่ 1–5 ของรอบเดือน · แบบ 21 เม็ด: กินหมดเว้น 7 วัน | แบบ 28 เม็ด: กินต่อเนื่องไม่ต้องเว้น', correct: true },
          { id: 'wait_end', label: 'รอให้ประจำเดือนหมดสนิทก่อนจึงเริ่มกินเม็ดแรก และเว้น 7 วันในแบบ 28 เม็ด', correct: false }
        ],
        hint: 'แบบ 28 เม็ดจะมีเม็ดแป้ง/ธาตุเหล็ก 4–7 เม็ดท้ายแผง กินต่อแผงใหม่ทันทีไม่ต้องเว้นวัน' },
      { id: 'missed_1', type: 'clinic_confirm', title: '3. กรณีลืมกิน 1 เม็ด (หรือ <24 ชม. สำหรับ COC)', pts: 2.5, cam: 'device',
        choices: [
          { id: 'take1', label: 'กินเม็ดที่ลืมทันทีที่นึกได้ และกินเม็ดถัดไปตามเวลาปกติ (อาจกิน 2 เม็ดในวันเดียวได้) ไม่ต้องคุมกำเนิดเสริม', correct: true },
          { id: 'skip1', label: 'ข้ามเม็ดที่ลืมทิ้งไปเลยแล้วกินเฉพาะเม็ดของวันนี้', correct: false }
        ],
        hint: 'ลืม 1 เม็ดของ COC ให้กินทันทีที่นึกได้และกินต่อตามเวลาปกติ' },
      { id: 'missed_2', type: 'clinic_confirm', title: '4. กรณีลืมกิน >= 2 เม็ดติดต่อกัน (COC)', pts: 3.0, cam: 'overview',
        choices: [
          { id: 'take_last', label: 'กินเม็ดล่าสุดที่ลืมทันที (ทิ้งเม็ดก่อนหน้าที่ลืม) + กินต่อตามปกติ + ใช้ถุงยางอนามัยร่วมด้วยอย่างน้อย 7 วัน', correct: true },
          { id: 'all_at_once', label: 'กินรวบยอดทีเดียว 3–4 เม็ดที่ลืมทั้งหมดในมื้อเดียว', correct: false }
        ],
        hint: 'หากลืมในช่วงสัปดาห์ที่ 3 ให้กินฮอร์โมนต่อจนหมดแล้วขึ้นแผงใหม่ทันทีโดยไม่ต้องเว้นเม็ดแป้ง/7 วัน' }
    ]
  },

  CLINIC_TABLET_COUNTING: {
    id: 'CLINIC_TABLET_COUNTING',
    track: 'Clinic',
    code: 'OSPE-CL-COUNT',
    week: 'Dispensing',
    name: 'การนับเม็ดยาและเขียนฉลากยา (Tablet Counting & Labeling)',
    category: 'งานบริบาล · นับเม็ดยา & ฉลาก',
    sceneState: 'STATE_LAB',
    rxText: 'Rx: Amoxicillin 500 mg #21 tabs (1x3 pc x 7d) + Paracetamol 500 mg #10 tabs',
    device: 'tablet_counting',
    videos: [],
    steps: [
      { id: 'check_rx', type: 'clinic_confirm', title: '1. ตรวจสอบใบสั่งยา & ความถูกต้องของขวดยา (5 Rights)', pts: 2.0, cam: 'overview',
        choices: [
          { id: '5r', label: 'ตรวจชื่อผู้ป่วย ยา ขนาด ความแรง วันหมดอายุ และคำนวณจำนวนเม็ดที่ต้องนับ (1x3 x 7 วัน = 21 เม็ด)', correct: true },
          { id: 'guess', label: 'เทเม็ดยาใส่ซองโดยประมาณไม่ต้องคำนวณและไม่ตรวจวันหมดอายุ', correct: false }
        ],
        hint: 'ตรวจสอบฉลากขวดสต็อกยา 3 ครั้ง (ก่อนหยิบ / ก่อนเท / หลังเก็บ) และเช็ดถาดนับยาด้วย Alcohol 70%' },
      { id: 'count_tray', type: 'tray_count', title: '2. นับเม็ดยาบนถาดนับยาด้วยไม้พาย (ไม่ใช้มือเปล่าสัมผัสยา)', pts: 4.0, cam: 'device',
        targetCount: 21,
        hint: 'ใช้ไม้พาย (Spatula) กวาดนับเม็ดยาลงช่องรางบนถาดนับยาให้ครบ 21 เม็ดพอดี โดยไม่ใช้มือเปล่าสัมผัสเม็ดยา' },
      { id: 'label_aux', type: 'clinic_confirm', title: '3. บรรจุซองกันแสง/ความชื้น & เขียนฉลากหลัก + ฉลากช่วย (Aux Labels)', pts: 4.0, cam: 'overview',
        choices: [
          { id: 'full_lbl', label: 'ระบุชื่อ-สกุลผู้ป่วย, ชื่อยา/ความแรง, วิธีใช้ "รับประทานครั้งละ 1 เม็ด วันละ 3 ครั้ง หลังอาหาร" + ฉลากช่วย "รับประทานติดต่อกันจนหมด"', correct: true },
          { id: 'short_lbl', label: 'เขียนแค่ "กินวันละ 3 เวลา" โดยไม่ระบุชื่อผู้ป่วยและความแรงยา', correct: false }
        ],
        hint: 'ยาปฏิชีวนะต้องติดฉลากช่วย "รับประทานติดต่อกันจนหมด" และเทยาส่วนเกินกลับเข้าขวดเดิมทันที' }
    ]
  },

  CLINIC_RX_AUDIT: {
    id: 'CLINIC_RX_AUDIT',
    track: 'Clinic',
    code: 'OSPE-CL-RXAUDIT',
    week: 'Screening',
    name: 'การตรวจสอบใบสั่งยา & ค้นหา DRP (Prescription Screening)',
    category: 'งานบริบาล · ตรวจใบสั่งยา',
    sceneState: 'STATE_DOCUMENT',
    rxText: 'ตรวจเอกสารใบสั่งยาและข้อมูลผู้ป่วยเพื่อค้นหา Medication Error / Drug Interaction / Contraindication',
    device: 'desk',
    videos: [],
    steps: [
      { id: 'audit_doc', type: 'clinic_confirm', title: '1. วิเคราะห์ใบสั่งยาจากเอกสารแนบ & ระบุปัญหา DRP ที่พบ', pts: 4.0, cam: 'overview',
        choices: [
          { id: 'found_drp', label: 'ตรวจสอบชื่อผู้ป่วย, ประวัติแพ้ยา, ขนาดยาตาม CrCl/น้ำหนัก, Drug Interaction และความสมบูรณ์ของใบสั่งยา (วัน/ลายเซ็นแพทย์)', correct: true },
          { id: 'dispense', label: 'จ่ายยาตามใบสั่งยาไปก่อนโดยไม่ต้องตรวจสอบประวัติแพ้ยาและขนาดยา', correct: false }
        ],
        hint: 'ตรวจสอบทั้ง Administrative completeness (ชื่อ อายุ HN วันที่ ลายเซ็น) และ Pharmaceutical appropriateness (Dose, DDI, Allergy, Contraindication)' },
      { id: 'resolve_ai', type: 'ai_dialogue', title: '2. ประสานงานแพทย์/สื่อสารเพื่อแก้ไขปัญหาการใช้ยา (SBAR / Counseling)', pts: 6.0, cam: 'overview',
        blocks: [
          'สวัสดีครับ/ค่ะ จากห้องยา ขอเรียนปรึกษาแพทย์เรื่องใบสั่งยาของผู้ป่วยรายนี้ครับ/ค่ะ',
          'พบปัญหาด้านความปลอดภัยของยา (DRP / Allergy / Dose / Interaction) ดังนี้...',
          'จึงขอเสนอแนะทางเลือกในการปรับเปลี่ยนยา/ขนาดยาที่เหมาะสมคือ...',
          'รบกวนแพทย์พิจารณายืนยันคำสั่งการรักษาด้วยครับ/ค่ะ'
        ],
        role: 'doctor',
        aiRole: 'แพทย์เจ้าของไข้ / ผู้ประเมิน',
        requiredKeywords: ['ปัญหา', 'เสนอ', 'ปรับ', 'แพ้', 'interaction', 'ขนาด', 'ยืนยัน', 'drp', 'dose'],
        hint: 'ใช้ Block ประโยคหรือพิมพ์ข้อความสื่อสารปัญหา DRP และข้อเสนอแนะอย่างสุภาพชัดเจน' }
    ]
  },

  CLINIC_DIS_CONSULT: {
    id: 'CLINIC_DIS_CONSULT',
    track: 'Clinic',
    code: 'OSPE-CL-DIS',
    week: 'DIS',
    name: 'การสืบค้นข้อมูลยาและตอบคำถามบุคลากรทางการแพทย์ (DIS & Consultation)',
    category: 'งานบริบาล · เภสัชสนเทศ (DIS)',
    sceneState: 'STATE_DOCUMENT',
    rxText: 'สืบค้นข้อมูลจากแหล่งอ้างอิงมาตรฐาน (Micromedex / Lexicomp / MIMS / Thai NLEM) เพื่อตอบคำถามแพทย์/พยาบาลอย่างเป็นระบบ',
    device: 'desk',
    videos: [],
    steps: [
      { id: 'dis_identify', type: 'clinic_confirm', title: '1. วิเคราะห์คำถาม & เลือกแหล่งข้อมูลปฐมภูมิ/ทุติยภูมิที่เหมาะสม', pts: 4.0, cam: 'overview',
        choices: [
          { id: 'ebm_ok', label: 'ระบุ Ultimate Question ของผู้ถาม ค้นข้อมูลจากฐานข้อมูลมาตรฐาน (เช่น Lexicomp/Micromedex/Guideline) พร้อมประเมินความน่าเชื่อถือ', correct: true },
          { id: 'guess_dis', label: 'ตอบคำถามจากความจำโดยไม่ตรวจสอบข้อมูลอ้างอิงหรือระบุแหล่งที่มา', correct: false }
        ],
        hint: 'ตรวจสอบข้อมูลจากเอกสารสถานีด้านขวา (ตารางยา/บทความ/คำถามแพทย์) แล้วสรุปคำตอบที่ตรงประเด็น' },
      { id: 'dis_reply', type: 'ai_dialogue', title: '2. ตอบคำถามและประสานงานบุคลากรทางการแพทย์ (Doctor / Nurse)', pts: 6.0, cam: 'overview',
        role: 'doctor',
        blocks: [
          'สวัสดีครับ/ค่ะ จากงานเภสัชสนเทศ ขอตอบคำถามเรื่องการใช้ยาของผู้ป่วยรายนี้ครับ/ค่ะ',
          'จากข้อมูลอ้างอิงมาตรฐาน พบคำแนะนำ/ขนาดยา/ความเข้ากันได้ของยา คือ...',
          'ข้อควรระวังและการติดตามอาการเพิ่มเติมที่แนะนำคือ...',
          'หากต้องการข้อมูลเพิ่มเติมสามารถแจ้งได้ทันทีครับ/ค่ะ'
        ],
        requiredKeywords: ['ข้อมูล', 'แนะนำ', 'ขนาด', 'ติดตาม', 'ระวัง', 'เอกสาร', 'dose'],
        hint: 'สื่อสารคำตอบที่สืบค้นได้ชัดเจน กระชับ พร้อมระบุข้อควรระวังและการติดตามผล' }
    ]
  },

  CLINIC_ADR_ALLERGY: {
    id: 'CLINIC_ADR_ALLERGY',
    track: 'Clinic',
    code: 'OSPE-CL-ADR',
    week: 'ADR',
    name: 'การประเมินอาการไม่พึงประสงค์และประวัติแพ้ยา (ADR & Allergy Assessment)',
    category: 'งานบริบาล · ประเมิน ADR/แพ้ยา',
    sceneState: 'STATE_DOCUMENT',
    rxText: 'ซักประวัติไทม์ไลน์การเกิดผื่น/อาการแพ้ยา ประเมินความสัมพันธ์ (Naranjo Algorithm) แยก Type A/B และออกบัตรแพ้ยา',
    device: 'desk',
    videos: [],
    steps: [
      { id: 'adr_assess', type: 'clinic_confirm', title: '1. ประเมิน Naranjo Score, ชนิดการแพ้ยา (Type A/B) & Cross-reactivity', pts: 4.0, cam: 'overview',
        choices: [
          { id: 'adr_ok', label: 'ซัก Timeline (ระยะเวลาเริ่มยา-เกิดอาการ), ลักษณะผื่น/SJS-TEN danger signs, ประเมิน Naranjo และหลีกเลี่ยงยาที่มี Cross-reactivity', correct: true },
          { id: 'adr_bad', label: 'ให้รับประทานยาเดิมต่อเพื่อดูอาการและไม่ต้องออกบัตรแพ้ยา', correct: false }
        ],
        hint: 'คัดกรอง Severe Cutaneous Adverse Reactions (SCARs) เช่น ไข้สูง ตุ่มพอง เยื่อบุอักเสบ และประเมินความน่าจะเป็นตาม Naranjo' },
      { id: 'adr_counsel', type: 'ai_dialogue', title: '2. แจ้งผลประเมิน ออกบัตรแพ้ยา & ให้คำแนะนำผู้ป่วย', pts: 6.0, cam: 'overview',
        role: 'patient',
        blocks: [
          'สวัสดีครับ/ค่ะ ขออนุญาตซักประวัติเพิ่มเติมเรื่องเวลาที่เริ่มทานยาและลักษณะอาการแพ้ครับ/ค่ะ',
          'จากการประเมิน พบว่าอาการดังกล่าวเข้าข่ายอาการไม่พึงประสงค์/แพ้ยา จึงต้องหยุดยาที่สงสัยทันที',
          'เภสัชกรจะออกบัตรแพ้ยาให้พกติดตัว และแสดงทุกครั้งที่เข้ารับการรักษาครับ/ค่ะ',
          'หากมีอาการผิดปกติรุนแรง เช่น หายใจลำบาก ปากบวม ผื่นลอก ให้รีบไปโรงพยาบาลทันทีครับ/ค่ะ'
        ],
        requiredKeywords: ['แพ้', 'หยุด', 'บัตร', 'ระวัง', 'cross', 'ผื่น', 'โรงพยาบาล'],
        hint: 'แจ้งชื่อยาที่แพ้ ยาที่ห้ามใช้ร่วม ออกบัตรแพ้ยา และเตือนอาการอันตรายที่ต้องรีบพบแพทย์' }
    ]
  },

  CLINIC_HIGH_ALERT: {
    id: 'CLINIC_HIGH_ALERT',
    track: 'Clinic',
    code: 'OSPE-CLSP01',
    week: 'Special Precautions',
    name: 'การให้คำแนะนำยาความเสี่ยงสูง/ต้องระมัดระวังเป็นพิเศษ (High-Alert Drugs)',
    category: 'งานบริบาล · ภาคผนวก ข / High-Alert',
    sceneState: 'STATE_COUNSEL',
    rxText: 'ยาที่มีดัชนีการรักษาแคบหรือความเสี่ยงสูง (Warfarin, Digoxin, Phenytoin, Lithium, Methotrexate, Colchicine) — เน้นย้ำขนาดยา DDI และอาการพิษ',
    device: 'counter_consult',
    videos: [],
    steps: [
      { id: 'ha_verify', type: 'clinic_confirm', title: '1. ตรวจสอบขนาดยา, ค่า Lab เป้าหมาย (INR/Level) & ปฏิกิริยาระหว่างยา/อาหาร', pts: 3.5, cam: 'overview',
        choices: [
          { id: 'ha_ok', label: 'ยืนยันขนาดยา/ความแรงตรงตามเม็ดยา ตรวจ DDI/อาหาร (เช่น วิตามิน K, NSAIDs, สมุนไพร) และย้ำการตรวจติดตามค่า Lab', correct: true },
          { id: 'ha_skip', label: 'ปรับเพิ่ม-ลดขนาดยาเองได้เมื่อลืมกินยา และซื้อยาแก้ปวด NSAIDs ทานร่วมได้ตามปกติ', correct: false }
        ],
        hint: 'ตรวจสอบความถูกต้องของขนาดยา อาหาร/ยาที่ตีกัน และเกณฑ์ค่าทางห้องปฏิบัติการที่ต้องติดตาม' },
      { id: 'ha_counsel', type: 'ai_dialogue', title: '2. สื่อสารคำแนะนำเฉพาะ & สัญญาณเตือนพิษจากยา (Red Flags)', pts: 6.5, cam: 'device',
        role: 'patient',
        blocks: [
          'สวัสดีครับ/ค่ะ ยานี้เป็นยาที่ต้องระมัดระวังเป็นพิเศษ ขอแนะนำวิธีรับประทานที่ถูกต้องและสม่ำเสมอครับ/ค่ะ',
          'ควรหลีกเลี่ยงการซื้อยาอื่น สมุนไพร หรืออาหารบางชนิดรับประทานร่วมกันโดยไม่ปรึกษาแพทย์/เภสัชกร',
          'หากพบอาการเตือนความเป็นพิษหรือเลือดออกผิดปกติ (เช่น จ้ำเลือด เลือดออกตามไรฟัน ถ่ายดำ มองเห็นภาพสีเหลือง) ให้รีบพบแพทย์ทันที',
          'หากลืมรับประทานยา ห้ามเพิ่มขนาดยาเป็น 2 เท่าในมื้อถัดไปเด็ดขาดครับ/ค่ะ'
        ],
        requiredKeywords: ['ขนาด', 'ห้าม', 'พบแพทย์', 'เลือด', 'ลืม', 'ติดตาม', 'ระวัง'],
        hint: 'เน้นวิธีรับประทานที่แม่นยำ การจัดการเมื่อลืมกินยา และอาการ Red Flags ที่ต้องรีบมาโรงพยาบาล' }
    ]
  },

  CLINIC_LAB_PK: {
    id: 'CLINIC_LAB_PK',
    track: 'Clinic',
    code: 'OSPE-CL4806',
    week: 'Lab / PK',
    name: 'การแปลผลทางห้องปฏิบัติการ & คำนวณทางคลินิก (Clinical Lab & PK)',
    category: 'งานบริบาล · แปลผล Lab / PK',
    sceneState: 'STATE_DOCUMENT',
    rxText: 'คำนวณค่าพารามิเตอร์ทางคลินิก (LDL-C Friedewald, CrCl Cockcroft-Gault, Corrected Ca, Dose Adjustment) และแปลผลให้คำแนะนำ',
    device: 'desk',
    videos: [],
    steps: [
      { id: 'lab_calc', type: 'clinic_confirm', title: '1. คำนวณค่าทางคลินิก & แปลผลความผิดปกติจากใบรายงาน Lab', pts: 4.0, cam: 'overview',
        choices: [
          { id: 'calc_ok', label: 'เลือกใช้สูตรคำนวณมาตรฐานให้ถูกต้อง ตรวจสอบเงื่อนไขข้อจำกัดของสูตร (เช่น TG < 400 mg/dL) และแปลผลเทียบค่าปกติ', correct: true },
          { id: 'calc_bad', label: 'ใช้สูตรคำนวณโดยไม่ตรวจสอบหน่วยและเงื่อนไขข้อจำกัดของค่า Lab', correct: false }
        ],
        hint: 'ตรวจสอบตัวเลข Lab จากเอกสารสถานีด้านขวา คำนวณตามสูตรมาตรฐาน และประเมินเป้าหมายการรักษา' },
      { id: 'lab_counsel', type: 'ai_dialogue', title: '2. อธิบายผลการตรวจ & แนวทางการปรับพฤติกรรม/การใช้ยา', pts: 6.0, cam: 'overview',
        role: 'patient',
        blocks: [
          'สวัสดีครับ/ค่ะ จากผลการตรวจทางห้องปฏิบัติการและค่าที่คำนวณได้ พบว่า...',
          'เกณฑ์เป้าหมายที่เหมาะสมสำหรับผู้ป่วยรายนี้คือ...',
          'ขอแนะนำการปรับพฤติกรรมและการใช้ยาอย่างต่อเนื่องพร้อมนัดตรวจติดตามผล Lab ครับ/ค่ะ'
        ],
        requiredKeywords: ['ผล', 'คำนวณ', 'เกณฑ์', 'อาหาร', 'ออกกำลัง', 'ติดตาม', 'ยา'],
        hint: 'สรุปค่าที่คำนวณได้ให้เข้าใจง่าย พร้อมแนะนำเป้าหมายการรักษาและการดูแลตนเอง' }
    ]
  },

  SAP_ETHICS: {
    id: 'SAP_ETHICS',
    track: 'SAP',
    code: 'OSPE-SP-ETHICS',
    week: 'SAP',
    name: 'จรรยาบรรณแห่งวิชาชีพเภสัชกรรม (Professional Ethics)',
    category: 'SAP · จรรยาบรรณวิชาชีพ',
    sceneState: 'STATE_DOCUMENT',
    rxText: 'วิเคราะห์ประเด็นจริยธรรมทางเภสัชกรรม (Autonomy, Beneficence, Non-maleficence, Justice, Confidentiality) และข้อบังคับสภาเภสัชกรรมว่าด้วยจรรยาบรรณ',
    device: 'desk',
    videos: [],
    steps: [
      { id: 'ethics_principle', type: 'clinic_confirm', title: '1. ระบุประเด็นผิดจรรยาบรรณ & หลักจริยธรรมที่เกี่ยวข้อง', pts: 4.0, cam: 'overview',
        choices: [
          { id: 'eth_ok', label: 'ยึดประโยชน์และความปลอดภัยของผู้ป่วยเป็นสำคัญ (Beneficence/Non-maleficence) รักษาความลับ ไม่โฆษณาโอ้อวด และปฏิบัติตามจรรยาบรรณสภาฯ', correct: true },
          { id: 'eth_bad', label: 'เปิดเผยข้อมูลการรักษาผู้ป่วยเพื่อผลประโยชน์ทางการค้าหรือจ่ายยาโดยไม่คำนึงถึงจรรยาบรรณ', correct: false }
        ],
        hint: 'วิเคราะห์สถานการณ์ตามข้อบังคับสภาเภสัชกรรมว่าด้วยจรรยาบรรณแห่งวิชาชีพเภสัชกรรม' },
      { id: 'ethics_resolve', type: 'ai_dialogue', title: '2. ชี้แจงแนวทางปฏิบัติที่ถูกต้องตามจรรยาบรรณวิชาชีพ', pts: 6.0, cam: 'overview',
        role: 'patient',
        blocks: [
          'ตามหลักจรรยาบรรณแห่งวิชาชีพเภสัชกรรม เภสัชกรมีหน้าที่ปกป้องสิทธิและความปลอดภัยของผู้ป่วยเป็นอันดับแรกครับ/ค่ะ',
          'ในสถานการณ์นี้ แนวทางปฏิบัติที่ถูกต้องและเหมาะสมตามข้อบังคับสภาเภสัชกรรมคือ...',
          'ขอชี้แจงเหตุผลด้านวิชาการและจริยธรรมเพื่อความเข้าใจที่ตรงกันครับ/ค่ะ'
        ],
        requiredKeywords: ['จรรยาบรรณ', 'สิทธิ', 'ความลับ', 'ปลอดภัย', 'วิชาชีพ', 'แนะนำ'],
        hint: 'สื่อสารเหตุผลเชิงจริยธรรมอย่างสุภาพ มั่นคง และเป็นมืออาชีพ' }
    ]
  },

  SAP_REGULATORY_DOC: {
    id: 'SAP_REGULATORY_DOC',
    track: 'SAP',
    code: 'OSPE-SP-REG',
    week: 'SAP',
    name: 'กฎหมายยา การจำแนกประเภทยา & เอกสารกำกับสถานที่ (Regulatory & Docs)',
    category: 'SAP · กฎหมายยาและเอกสาร',
    sceneState: 'STATE_DOCUMENT',
    rxText: 'ตรวจสอบความถูกต้องตาม พ.ร.บ.ยา พ.ศ.2510, ประเภทยา (ยาอันตราย/ควบคุมพิเศษ/สามัญประจำบ้าน), ทะเบียนยา, บัญชี ข.ย. และข้อกำหนดสถานที่ขายยา (GPP)',
    device: 'desk',
    videos: [],
    steps: [
      { id: 'reg_audit', type: 'clinic_confirm', title: '1. ตรวจสอบข้อกำหนดกฎหมายยา / การจำแนกประเภทยา / เอกสารบัญชี', pts: 4.0, cam: 'overview',
        choices: [
          { id: 'reg_ok', label: 'จำแนกประเภทยา ตรวจเลขทะเบียนตำรับยา ตรวจสอบความครบถ้วนของบัญชี ข.ย. และปฏิบัติตามมาตรฐาน GPP อย่างเคร่งครัด', correct: true },
          { id: 'reg_bad', label: 'สามารถจัดเก็บและจ่ายยาทุกประเภทปะปนกันได้โดยไม่ต้องมีใบอนุญาตหรือบัญชีควบคุม', correct: false }
        ],
        hint: 'อ่านรายละเอียดเอกสารกฎหมาย/ฉลาก/ตารางในหน้าต่างด้านขวาเพื่อระบุจุดที่ผิดหรือไม่ครบถ้วน' },
      { id: 'reg_explain', type: 'ai_dialogue', title: '2. อธิบายข้อกฎหมายและแนวทางแก้ไขให้ถูกต้อง (Regulatory Explanation)', pts: 6.0, cam: 'overview',
        role: 'doctor',
        blocks: [
          'จากการตรวจสอบตาม พ.ร.บ.ยา และกฎกระทรวงที่เกี่ยวข้อง พบประเด็นสำคัญดังนี้ครับ/ค่ะ',
          'ประเภทยาและข้อกำหนดในการจัดเก็บ/ส่งมอบ/จัดทำบัญชีที่ถูกต้องคือ...',
          'แนวทางแก้ไขเพื่อให้เป็นไปตามกฎหมายและมาตรฐาน GPP คือ...'
        ],
        requiredKeywords: ['พ.ร.บ.', 'ประเภท', 'ทะเบียน', 'บัญชี', 'กฎหมาย', 'gpp', 'ใบอนุญาต'],
        hint: 'สรุปข้อกฎหมาย ประเภทยา เอกสารที่ต้องจัดทำ และแนวทางแก้ไขให้ถูกต้อง' }
    ]
  },

  SAP_HEALTH_SYSTEM: {
    id: 'SAP_HEALTH_SYSTEM',
    track: 'SAP',
    code: 'OSPE-SP-SYS',
    week: 'SAP',
    name: 'ระบบสุขภาพ สิทธิการรักษา & เภสัชเศรษฐศาสตร์ (Health Systems & NLEM)',
    category: 'SAP · ระบบสุขภาพและสิทธิ',
    sceneState: 'STATE_DOCUMENT',
    rxText: 'ให้คำปรึกษาสิทธิหลักประกันสุขภาพ (บัตรทอง UC / ประกันสังคม SSS / ข้าราชการ CSMBS), บัญชียาหลักแห่งชาติ (NLEM) และความคุ้มค่าทางเศรษฐศาสตร์',
    device: 'desk',
    videos: [],
    steps: [
      { id: 'sys_check', type: 'clinic_confirm', title: '1. ประเมินสิทธิการรักษา เกณฑ์เบิกจ่ายยา (NLEM) & ทางเลือกที่คุ้มค่า', pts: 4.0, cam: 'overview',
        choices: [
          { id: 'sys_ok', label: 'ตรวจสอบสิทธิการรักษา (UC/SSS/CSMBS) เกณฑ์บัญชียาหลักแห่งชาติ (ก-ง/จ(2)) และประสานส่งต่อ/ขออนุมัติเบิกจ่ายตามระบบ', correct: true },
          { id: 'sys_bad', label: 'ปฏิเสธการรักษาทันทีโดยไม่แนะนำสิทธิหรือทางเลือกยาในบัญชียาหลักแห่งชาติ', correct: false }
        ],
        hint: 'ตรวจสอบสิทธิและเงื่อนไขการเบิกจ่ายยาตามบัญชียาหลักแห่งชาติจากข้อมูลสถานี' },
      { id: 'sys_counsel', type: 'ai_dialogue', title: '2. อธิบายสิทธิการรักษาและทางเลือกการใช้ยาอย่างเข้าใจง่าย', pts: 6.0, cam: 'overview',
        role: 'patient',
        blocks: [
          'สวัสดีครับ/ค่ะ ขอชี้แจงรายละเอียดสิทธิการรักษาและการเบิกจ่ายยาให้ทราบครับ/ค่ะ',
          'สำหรับยานี้มีเกณฑ์ในบัญชียาหลักแห่งชาติ/ทางเลือกทดแทนที่เบิกจ่ายได้ตามสิทธิคือ...',
          'ขั้นตอนการประสานงานหรือเอกสารที่ต้องใช้เพิ่มเติมมีดังนี้ครับ/ค่ะ'
        ],
        requiredKeywords: ['สิทธิ', 'บัญชี', 'เบิก', 'ยาหลัก', 'ส่งต่อ', 'แนะนำ'],
        hint: 'อธิบายสิทธิการรักษา ทางเลือกยา และขั้นตอนดำเนินการให้ผู้ป่วย/ผู้เกี่ยวข้องเข้าใจชัดเจน' }
    ]
  }
};

/**
 * Map any Clinic or SAP station from OFFLINE_DATA to a playable 3D Archetype
 */
window.mapClinicSapToArchetype = function(station) {
  const cid = String(station.caseId || '').toUpperCase();
  const titleTxt = `${station.title || ''}`.toLowerCase();
  const mg = `${station.mainGroup || ''}`.toLowerCase();
  const txt = `${cid} ${titleTxt} ${mg} ${station.disease || ''}`.toLowerCase();
  const cat = String(station.category || '').toLowerCase();

  // 0. SAP Track routing (only true SAP cases or OSPE-SP*; keep OSPE-CL83M203 in Clinic!)
  if (cat === 'sap' || cid.startsWith('OSPE-SP')) {
    if (txt.includes('จรรยาบรรณ') || txt.includes('ethic')) return 'SAP_ETHICS';
    if (mg.includes('ซักประวัติและจ่ายยา') || txt.includes('tramadol') || txt.includes('diazepam') || txt.includes('cough syrup') || txt.includes('ยาแก้ไอ') || txt.includes('เยาวชน')) {
      return 'SAP_LAW_DISPENSING';
    }
    if (txt.includes('สิทธิ') || txt.includes('หลักประกัน') || txt.includes('บัญชียาหลัก') || txt.includes('เศรษฐศาสตร์') || txt.includes('health system')) return 'SAP_HEALTH_SYSTEM';
    return 'SAP_REGULATORY_DOC';
  }

  // 1. Exact CLSD Case ID priority (prevents keyword cross-matches like 'spacer', 'spiriva', 'syringe')
  if (cid.includes('CLSD01')) return 'CLINIC_MDI';
  if (cid.includes('CLSD02')) return 'CLINIC_MDI_SPACER';
  if (cid.includes('CLSD03')) return 'CLINIC_TURBUHALER';
  if (cid.includes('CLSD04')) return 'CLINIC_ACCUHALER';
  if (cid.includes('CLSD05')) return 'CLINIC_HANDIHALER';
  if (cid.includes('CLSD06')) return 'CLINIC_EASYHALER';
  if (cid.includes('CLSD07')) return 'CLINIC_SWINGHALER';
  if (cid.includes('CLSDEX01')) return 'CLINIC_ELLIPTA';
  if (cid.includes('CLSDEX02')) return 'CLINIC_RESPIMAT';
  if (cid.includes('CLSD08') || cid.includes('CLSD09')) return 'CLINIC_NASAL_SPRAY';
  if (cid.includes('CLSD10')) return 'CLINIC_NASAL_DROPS';
  if (cid.includes('CLSD11')) return 'CLINIC_NASAL_IRRIGATION';
  if (cid.includes('CLSD12')) return 'CLINIC_EAR_DROPS';
  if (cid.includes('CLSD13')) return 'CLINIC_EYE_DROPS';
  if (cid.includes('CLSD14')) return 'CLINIC_EYE_OINTMENT';
  if (cid.includes('CLSD15')) return 'CLINIC_SUBLINGUAL';
  if (cid.includes('CLSD16')) return 'CLINIC_RECTAL_SUPP';
  if (cid.includes('CLSD17')) return 'CLINIC_VAGINAL_SUPP';
  if (cid.includes('CLSD18')) return 'CLINIC_INSULIN_PEN';
  if (cid.includes('CLSD19')) return 'CLINIC_INSULIN_MIX';
  if (cid.includes('CLSD20')) return 'CLINIC_NICOTINE';
  if (cid.includes('CLSD21')) return 'CLINIC_DRY_SYRUP';
  if (cid.includes('CLSD22') || cid.includes('CLSD23')) return 'CLINIC_OC_PILLS';

  // 2. High-priority Clinic functional categories (check BEFORE device keywords to prevent false matches like CL4814/CL6611/CL5717)
  if (mg.includes('ตรวจสอบใบสั่งยา') || txt.includes('ตรวจใบสั่งยา') || txt.includes('ตรวจสอบใบสั่งยา') || txt.includes('prescription screening')) {
    return 'CLINIC_RX_AUDIT';
  }
  if (mg.includes('ประเมินการแพ้ยา') || txt.includes('การแพ้ยา') || txt.includes('naranjo') || txt.includes('บัตรแพ้ยา') || txt.includes('ประเมินและจัดการ adr')) {
    return 'CLINIC_ADR_ALLERGY';
  }
  if (mg.includes('แปลผลทางห้องปฏิบัติการ') || mg.includes('แปลผลทางคลินิก') || txt.includes('friedewald') || txt.includes('ldl-c') || txt.includes('แปลผลทางห้องปฏิบัติการ') || txt.includes('คำนวณขนาดยาทางคลินิก')) {
    return 'CLINIC_LAB_PK';
  }
  if (mg.includes('ค้นข้อมูลและประสานงาน') || txt.includes('สืบค้นข้อมูล') || txt.includes('เภสัชสนเทศ') || txt.includes('drug information')) {
    return 'CLINIC_DIS_CONSULT';
  }
  if (cid.includes('CLSP') || mg.includes('ภาคผนวก ข') || mg.includes('ระมัดระวังในการใช้เป็นพิเศษ')) {
    return 'CLINIC_HIGH_ALERT';
  }

  // 3. Keyword fallback for general Clinic device/skill stations (with strict boundaries)
  if (txt.includes('spacer') || txt.includes('aerochamber')) return 'CLINIC_MDI_SPACER';
  if (txt.includes('turbuhaler') || txt.includes('budesonide/formoterol')) return 'CLINIC_TURBUHALER';
  if (txt.includes('accuhaler') || txt.includes('diskus')) return 'CLINIC_ACCUHALER';
  if (txt.includes('respimat')) return 'CLINIC_RESPIMAT';
  if (txt.includes('handihaler') || txt.includes('spiriva')) return 'CLINIC_HANDIHALER';
  if (txt.includes('easyhaler')) return 'CLINIC_EASYHALER';
  if (txt.includes('swinghaler')) return 'CLINIC_SWINGHALER';
  if (txt.includes('ellipta') || txt.includes('relvar')) return 'CLINIC_ELLIPTA';
  if (/\bmdi\b/.test(txt) || txt.includes('salbutamol') || txt.includes('evohaler')) return 'CLINIC_MDI';
  if (txt.includes('nasal drop') || txt.includes('หยอดจมูก')) return 'CLINIC_NASAL_DROPS';
  if (txt.includes('irrigation') || txt.includes('ล้างจมูก') || txt.includes('0.9% nss')) return 'CLINIC_NASAL_IRRIGATION';
  if (txt.includes('nasal') || txt.includes('พ่นจมูก')) return 'CLINIC_NASAL_SPRAY';
  if ((titleTxt.includes('ear drop') || titleTxt.includes('หยอดหู') || /\botic\b/.test(txt) || txt.includes('otitis externa')) && !txt.includes('otitis media')) return 'CLINIC_EAR_DROPS';
  if (txt.includes('ป้ายตา') || ((txt.includes('eye') || txt.includes('ophthalmic') || txt.includes('ตา')) && txt.includes('ointment'))) return 'CLINIC_EYE_OINTMENT';
  if (txt.includes('หยอดตา') || txt.includes('eye drop') || txt.includes('conjunctivitis')) return 'CLINIC_EYE_DROPS';
  if (txt.includes('sublingual') || txt.includes('อมใต้ลิ้น') || txt.includes('nitrate') || txt.includes('isosorbide')) return 'CLINIC_SUBLINGUAL';
  if (txt.includes('rectal') || txt.includes('เหน็บทวาร') || txt.includes('ทวารหนัก') || txt.includes('enema')) return 'CLINIC_RECTAL_SUPP';
  if (txt.includes('เหน็บช่องคลอด') || txt.includes('สอดช่องคลอด') || txt.includes('vaginal supp') || txt.includes('vaginal tab') || txt.includes('applicator') || (txt.includes('clotrimazole') && txt.includes('ช่องคลอด'))) return 'CLINIC_VAGINAL_SUPP';
  if (txt.includes('clear before cloudy') || txt.includes('ผสมอินซูลิน')) return 'CLINIC_INSULIN_MIX';
  if (txt.includes('insulin') || txt.includes('อินซูลิน')) return 'CLINIC_INSULIN_PEN';
  if (txt.includes('nicotine') || txt.includes('เลิกบุหรี่') || txt.includes('หมากฝรั่ง')) return 'CLINIC_NICOTINE';
  if (txt.includes('dry syrup') || txt.includes('ยาผงแห้ง') || txt.includes('ยาน้ำเชื่อมแห้ง') || txt.includes('oral syringe')) return 'CLINIC_DRY_SYRUP';
  if (txt.includes('contraceptive') || txt.includes('ยาคุม') || /\b(coc|pop)\b/.test(txt)) return 'CLINIC_OC_PILLS';

  // Tablet counting & ISBAR
  if (txt.includes('นับเม็ดยา') || txt.includes('tablet counting') || txt.includes('เขียนฉลาก')) return 'CLINIC_TABLET_COUNTING';
  if (txt.includes('isbar') || txt.includes('ประสานงานแพทย์') || txt.includes('สื่อสารประสานงาน')) return 'CLINIC_ISBAR';

  return 'CLINIC_HISTORY_COUNSELING';
};
