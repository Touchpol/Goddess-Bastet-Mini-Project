// Meow Haven i18n: dictionary-driven TH/EN switcher.
// Static text uses data-i18n (textContent) or data-i18n-html (innerHTML) attributes.
// Dynamic screens (built by script.js / about.html's inline script) re-render themselves
// via onLangChange() callbacks after the language switches.
const I18N = {
  th: {
    "nav.aria": "หลัก",
    "nav.openMenu": "เปิดเมนู",
    "nav.closeMenu": "ปิดเมนู",
    "nav.toggleTheme": "สลับธีม",
    "nav.play": "เริ่มเล่น",
    "nav.explore": "สำรวจ",
    "nav.exploreMyth": "↗ สายมูแมว",
    "nav.exploreHow": "↗ เล่นยังไง",
    "nav.exploreAbout": "↗ เกี่ยวกับโปรเจกต์",
    "nav.exploreHome": "↗ กลับหน้าแรก",
    "nav.groups": "กลุ่มแมว",
    "nav.groups4": "↗ 4 กลุ่มแมว",
    "nav.breeds40": "↗ 40 สายพันธุ์",
    "nav.groupsBastet": "↗ ตำนาน Bastet",
    "nav.playNow": "เล่นเลย",
    "nav.playAB": "↗ A/B Test",
    "nav.playStart": "↗ เริ่มเลือกแมว",
    "nav.exploreTypes": "↗ ประเภทของแมว",

    "hero.chip": "สำหรับคนรักแมว",
    "hero.title": "หาแมว<em>ที่ใช่</em><br>สำหรับคุณ",
    "hero.lede": "เลือกแมวที่ชอบทีละคู่ ครบ 20 คู่แล้วมาดูกันว่าคุณเหมาะกับแมวกลุ่มไหนที่สุด",
    "hero.start": "เริ่มเลย →",
    "hero.howto": "เล่นยังไง",
    "hero.facts.breeds": "สายพันธุ์",
    "hero.facts.groups": "กลุ่ม",
    "hero.facts.pairs": "คู่",
    "hero.facts.minutes": "นาที",

    "about.chip": "🐱 สายมูแมว",
    "about.title": "จากเทพีอียิปต์ ถึงแมวมงคลสยาม",
    "about.lede": "ทำไมมนุษย์ถึงยกแมวให้เป็น “ผู้คุ้มครองบ้าน” มาตั้งแต่โบราณ",
    "about.sub1": "ต้นตำรับ: บาสเต็ต เทพีแมวแห่งอียิปต์",
    "about.story1": "บาสเต็ตเป็นเทพีของอียิปต์โบราณ ซึ่งอาจมีต้นกำเนิดจากนูเบีย และมีผู้บูชามาตั้งแต่ราชวงศ์ที่ 2 (ราว 2890 ปีก่อนคริสตกาล) หรือเกือบ 5,000 ปีที่แล้ว",
    "about.f1.b": "จากสิงโตสู่แมว",
    "about.f1.s": "เดิมเธอเป็นเทพีสิงโตสายนักรบแห่งดวงอาทิตย์ ก่อนจะกลายเป็นเทพีแมวอย่างที่รู้จักกันในปัจจุบัน",
    "about.f2.b": "พลังคุ้มครอง",
    "about.f2.s": "นับถือกันว่าเป็นเทพีผู้ปกป้องจากโรคติดต่อและวิญญาณชั่วร้าย และเป็นเทพีแห่งการตั้งครรภ์และการคลอดบุตร อาจเพราะแมวบ้านขยายพันธุ์เก่ง",
    "about.f3.b": "แมว = ของสูง",
    "about.f3.s": "แมวหลวงบางตัวได้สวมเครื่องประดับทองคำ และได้กินอาหารจานเดียวกับคนในบ้าน",
    "about.f4.b": "สายมูตัวจริง",
    "about.f4.s": "เมื่อขุดค้นวิหารของบาสเต็ต พบมัมมี่แมวมากกว่า 300,000 ตัว และถ้าแมวตาย ทั้งครอบครัวจะไว้ทุกข์อย่างหนัก",
    "about.f5.b": "เทศกาลใหญ่",
    "about.f5.s": "เทศกาลของเทพีองค์นี้มีผู้มาร่วมราว 700,000 คนในแต่ละปี มีทั้งร้อง เต้น ดื่มไวน์กันเต็มที่",
    "about.sub2": "มาถึงสยาม: แมวไทยก็มีของ",
    "about.story2": "แม้ไม่มีหลักฐานว่าลัทธิบาสเต็ตส่งต่อมาถึงไทยโดยตรง แต่ความเชื่อว่า “แมวคือผู้พิทักษ์ ผู้นำโชค” มีอยู่ในบ้านเราเช่นกัน",
    "about.g1.b": "ตำราแมวไทย",
    "about.g1.s": "ในสมุดข่อยโบราณ แยกแมวมงคล เช่น วิเชียรมาศ ศุภลักษณ์ โกนจา ว่าตัวไหนเลี้ยงแล้วรวย",
    "about.g2.b": "แห่นางแมว",
    "about.g2.s": "อุ้มแมวแห่ไปขอฝนให้พืชผล",
    "about.g3.b": "อุ้มแมวขึ้นบ้านใหม่",
    "about.g3.s": "ความเชื่อว่าแมวช่วยเสริมความร่มเย็นให้บ้าน",
    "about.summary": "<b>สรุป:</b> ห่างกันหลายพันปี ห่างกันหลายพันกิโลเมตร แต่มนุษย์ยกแมวเป็น “ผู้คุ้มครองบ้าน” เหมือนกัน 🐈‍⬛✨",
    "about.source": "ที่มา: Bastet – Wikipedia",

    "types.chip": "🐾 รู้จักแมว",
    "types.title": "ประเภทของแมว",
    "types.lede": "แมวแบ่งได้หลายมุมมอง ทั้งทางชีววิทยา สายพันธุ์แมวบ้าน สายพันธุ์ไทยโบราณ และความยาวของขน",

    "types.sub1": "การจำแนกทางชีววิทยา (วงศ์ Felidae)",
    "types.story1": "วงศ์แมวมีประมาณ 40 สายพันธุ์ แบ่งออกเป็น 2 วงศ์ย่อยหลัก",
    "types.big1.b": "สิงโต", "types.big1.s": "อยู่รวมกันเป็นฝูง ตัวผู้มีขนสร้อยคอ พบในแอฟริกาและอินเดีย",
    "types.big2.b": "เสือโคร่ง", "types.big2.s": "แมวตระกูลใหญ่ที่สุด มีลายทาง ว่ายน้ำเก่ง",
    "types.big3.b": "เสือดาว", "types.big3.s": "ปรับตัวเก่ง ลากเหยื่อขึ้นต้นไม้ เสือดำคือเสือดาวที่มีเมลานิน",
    "types.big4.b": "เสือจากัวร์", "types.big4.s": "กัดแรงมาก อาศัยในอเมริกากลางและใต้",
    "types.big5.b": "เสือดาวหิมะ", "types.big5.s": "อาศัยบนที่สูง หางยาวหนา ไม่สามารถคำรามได้",
    "types.big6.b": "เสือลายเมฆ", "types.big6.s": "ลายคล้ายเมฆ เขี้ยวยาวเมื่อเทียบกับตัว พบในไทย",
    "types.smallcats": "<b>แมวเล็ก (Felinae):</b> ตัวอย่างเช่น เสือชีตาห์ (สัตว์บกที่วิ่งเร็วที่สุด) พูม่า ลิงซ์ แมวดาว แมวหัวแบน แมวทองเอเชีย และแมวบ้าน (Felis catus) ซึ่งถูกเลี้ยงมาแล้วราว 9,000–10,000 ปี ส่วนใหญ่คำรามไม่ได้ แต่ร้องครางได้",

    "types.sub2": "สายพันธุ์แมวบ้านที่นิยม",
    "types.story2": "จำนวนสายพันธุ์ที่ได้รับการรับรองขึ้นอยู่กับสมาคม เช่น CFA รับรองประมาณ 45 สายพันธุ์ ส่วน TICA รับรองมากกว่า 70 สายพันธุ์",
    "types.breed1.b": "เปอร์เซีย", "types.breed1.s": "ขนยาว ใจเย็นและขี้อ้อน หน้าแบน มักมีปัญหาการหายใจและขี้ตาไหล ต้องแปรงขนทุกวัน",
    "types.breed2.b": "เอ็กซอติกช็อตแฮร์", "types.breed2.s": "ขนสั้นหนา ใจเย็น หน้าแบบเปอร์เซียแต่ดูแลง่ายกว่า",
    "types.breed3.b": "บริติชช็อตแฮร์", "types.breed3.s": "ขนสั้นหนา สบายๆ เป็นตัวของตัวเอง ไม่ชอบถูกจับบ่อย อ้วนง่าย",
    "types.breed4.b": "สก็อตติชโฟลด์", "types.breed4.s": "ขนสั้นหรือยาว อ่อนโยน หูพับจากยีนที่มีผลต่อกระดูกอ่อน เสี่ยงปัญหาข้อ",
    "types.breed5.b": "เมนคูน", "types.breed5.s": "ขนยาว เป็นมิตร ฉลาด ตัวใหญ่มาก เสี่ยงโรคหัวใจ (HCM)",
    "types.breed6.b": "แร็กดอล", "types.breed6.s": "ขนกึ่งยาว ตัวอ่อนปวกเปียกเวลาอุ้ม ติดคน ตาสีฟ้า เข้ากับเด็กได้ดี",
    "types.breed7.b": "เบงกอล", "types.breed7.s": "ขนสั้น พลังเยอะ ขี้เล่น ลายคล้ายเสือป่า ต้องการกิจกรรมมาก",
    "types.breed8.b": "สฟิงซ์", "types.breed8.s": "ไม่มีขน ขี้อ้อนมาก ต้องอาบน้ำบ่อยเพื่อลดความมันผิว ไวต่อความเย็นและแดด",
    "types.breed9.b": "อเมริกันช็อตแฮร์", "types.breed9.s": "ขนสั้น ปรับตัวง่าย แข็งแรง เลี้ยงง่าย",

    "types.sub3": "แมวไทย",
    "types.story3": "ตำราแมวไทยโบราณบรรยายแมวมงคลไว้หลายแบบ (ส่วนใหญ่อ้างว่ามีประมาณ 17 ชนิด) ที่รู้จักและพบในปัจจุบันมีดังนี้",
    "types.thai1.b": "วิเชียรมาศ (Siamese)", "types.thai1.s": "ขนสีครีม มีแต้มสีน้ำตาลเข้มที่หน้า หู ขา และหาง ตาสีฟ้า ต้นตระกูลของสยามในปัจจุบัน ช่างพูดและผูกพันกับเจ้าของ",
    "types.thai2.b": "โคราช (สีสวาด/มาเล็ด)", "types.thai2.s": "ขนสีเงินอมฟ้าปลายขนเป็นประกาย ตาสีเขียวเหมือนต้นข้าวอ่อน หน้ารูปหัวใจ ถือเป็นแมวนำโชค มักให้เป็นของขวัญแต่งงาน",
    "types.thai3.b": "ศุภลักษณ์ (ทองแดง)", "types.thai3.s": "ขนสีทองแดงล้วน ตาสีเหลืองทอง คล้ายแมวพม่า",
    "types.thai4.b": "ขาวมณี", "types.thai4.s": "ขนขาวล้วน ตาสีฟ้า เหลือง หรือสองสี (ตาสองสีถือว่ายิ่งดี) ควรตรวจการได้ยิน เพราะแมวขาวตาสีฟ้ามีแนวโน้มหูหนวก",
    "types.thai5.b": "โกนจา", "types.thai5.s": "ดำสนิททั้งตัว ตาสีเหลืองอำพัน เชื่อว่าช่วยปัดเป่าสิ่งไม่ดี",

    "types.sub4": "แบ่งตามความยาวขน",
    "types.coat1.b": "ขนสั้น", "types.coat1.s": "ดูแลง่าย แปรงขนสัปดาห์ละ 1–2 ครั้ง",
    "types.coat2.b": "ขนยาว", "types.coat2.s": "ต้องแปรงขนเกือบทุกวัน เพื่อป้องกันขนพันกันและก้อนขน",
    "types.coat3.b": "ไม่มีขน", "types.coat3.s": "ไม่ใช่แมวที่ไม่ก่อภูมิแพ้ ต้องดูแลผิวแทนการดูแลขน",

    "types.note": "<b>ข้อแนะนำ:</b> หากจะเลี้ยงแมวหน้าแบน หูพับ หรือสายพันธุ์ตัวใหญ่ ควรเลือกผู้เพาะพันธุ์ที่ตรวจสุขภาพพ่อแม่แมว หรือพิจารณารับแมวจรไปอุปการะ ซึ่งมักแข็งแรงกว่า",

    "how.title": "เล่นยังไง",
    "how.lede": "ใช้เวลาประมาณ 1 นาที เล่นได้ทั้งมือถือและคอมพิวเตอร์",
    "how.s1.b": "เลือกตัวที่ชอบ",
    "how.s1.s": "แมวขึ้นมาทีละคู่ คลิกการ์ด หรือกด A / B หรือ ← → บนคีย์บอร์ด",
    "how.s2.b": "ครบ 20 คู่",
    "how.s2.s": "ทุกตัวโผล่มาแค่ครั้งเดียว และจะเจอกับแมวต่างกลุ่มเสมอ",
    "how.s3.b": "ดูผลลัพธ์",
    "how.s3.s": "รู้ทันทีว่าคุณชอบแมวกลุ่มไหนที่สุด พร้อมคะแนนและตัวที่คุณเลือก",

    "groups.title": "แมว 4 กลุ่ม",
    "groups.lede": "คุณจะเป็นสายไหน? ลองเล่นเพื่อหาคำตอบ",

    "breeds.title": "แมว 4 กลุ่ม 40 สายพันธุ์",
    "breeds.lede": "ทุกตัวจะโผล่มาในเกมครั้งเดียว และจะเจอกับแมวต่างกลุ่มเสมอ",

    "cta.title": "พร้อมหาแมวที่ใช่หรือยัง?",
    "cta.lede": "เลือกไปตามใจชอบ ไม่มีถูกไม่มีผิด แล้วให้เทพี Bastet เป็นคนชี้ทาง",
    "cta.start": "เริ่มเลย →",

    "test.hint": "กด A / B หรือ ← →",
    "test.title": "ชอบตัวไหนมากกว่า?",
    "test.or": "หรือ",
    "test.pair": "คู่ที่ {n} / {total}",

    "result.chip": "ผลของคุณ",
    "result.again": "เล่นอีกครั้ง",
    "result.home": "กลับหน้าแรก",
    "result.scoresTitle": "คะแนนแต่ละกลุ่ม",
    "result.scoresLede": "จาก 20 ครั้งที่คุณเลือก",
    "result.pickedTitle": "แมวที่คุณเลือกในกลุ่มนี้",
    "result.pickedTitleTie": "แมวที่คุณเลือกในกลุ่มที่ชนะ",
    "result.points": "คะแนน",
    "result.tie": "เสมอกัน {n} กลุ่ม คุณชอบแมวหลายแบบเท่าๆ กัน ",

    "last.title": "ผลครั้งก่อน",
    "last.lede": "คุณชอบแมว {names} มากที่สุด",
    "last.and": " และ ",
    "last.howTitle": "เล่นยังไง",
    "last.howLede": "ใช้เวลาประมาณ 1 นาที",
    "last.rule1": "แมวจะขึ้นมาทีละคู่ เลือกตัวที่ชอบมากกว่า",
    "last.rule2": "คลิกการ์ด หรือกด A / B หรือ ← →",
    "last.rule3": "ครบ 20 คู่ ระบบจะบอกว่าคุณชอบแมวกลุ่มไหน",

    "footer.bastetDesc": "สืบทอดจิตวิญญาณจากลัทธิบูชาเทพีบาสเตตแห่งอียิปต์โบราณตั้งแต่ 3100 ปีก่อนคริสตกาล หน้าที่แท้จริงของมนุษย์คือการเป็นทาสรับใช้ เปิดกระป๋อง และกราบไหว้เจ้านาย",
    "footer.link1": "𓏬 วิธีได้ยันต์ 5 แถว",
    "footer.link2": "𓏬 บัญชาปลาทู",
    "footer.link3": "𓏬 สมาคมทาส",
    "footer.link4": "𓏬 หมดตัวเพราะกลัวเจ้านาย",
    "footer.link5": "𓏬 คัมภีร์ตักทราย (The Holy Litter Box)",
    "footer.link6": "𓏬 ทฤษฎีกล่องลัง (If It Fits, I Sits)",
    "footer.link7": "𓏬 กฏแรงโน้มถ่วง (Pushing Things Off Tables)",
    "footer.link8": "𓏬 วิ่งมาราธอนตี 3 (3 AM Zoomies Support)",
    "footer.link9": "𓏬 ใบรับรองการเป็นทาส (Certified Cat Servant)",
    "footer.templeDesc": "ศูนย์บัญชาการหลักใต้เงื้อมเงาของมหาพีระมิดแห่งกิซ่า ต้นกำเนิดจักรวาลแมว",
    "footer.mapBtn": "เปิดแผนที่นำทางสู่พีระมิด 🗺️",
    "footer.quote": "\"ขอให้กระบะทรายสะอาดสะอ้านและขนมเลียไม่ขาดแคลน 🐾\"",

    "about.meta": "มินิโปรเจกต์ Meow Haven เกมเลือกแมวทีละคู่ เพื่อหาว่าคุณเหมาะกับแมวกลุ่มไหน ตั้งชื่อตามเทพีแมว Bastet",
    "about.hero.title": "เทพีแมว <em>Bastet</em><br>เลือกแมวให้คุณ",
    "about.hero.lede": "มินิโปรเจกต์ที่ได้แรงบันดาลใจจาก Bastet เทพีแห่งแมวของอียิปต์โบราณ ให้คุณเลือกแมวที่ชอบทีละคู่ แล้วมาดูว่าหัวใจคุณเป็นของแมวกลุ่มไหน",
    "about.hero.start": "เริ่มเล่นเลย →",
    "about.foot": "Goddess Bastet Mini Project · เครดิตรูปแมวดูที่ images/cats/CREDITS.md",
  },
  en: {
    "nav.aria": "Main",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "nav.toggleTheme": "Toggle theme",
    "nav.play": "Play",
    "nav.explore": "Explore",
    "nav.exploreMyth": "↗ Cat Mythology",
    "nav.exploreHow": "↗ How to Play",
    "nav.exploreAbout": "↗ About the Project",
    "nav.exploreHome": "↗ Back to Home",
    "nav.groups": "Cat Groups",
    "nav.groups4": "↗ 4 Cat Groups",
    "nav.breeds40": "↗ 40 Breeds",
    "nav.groupsBastet": "↗ Legend of Bastet",
    "nav.playNow": "Play Now",
    "nav.playAB": "↗ A/B Test",
    "nav.playStart": "↗ Start Picking Cats",
    "nav.exploreTypes": "↗ Types of Cats",

    "hero.chip": "For Cat Lovers",
    "hero.title": "Find the <em>right</em><br>cat for you",
    "hero.lede": "Pick your favorite cat from each pair. After 20 rounds, find out which cat group suits you best.",
    "hero.start": "Start →",
    "hero.howto": "How to Play",
    "hero.facts.breeds": "breeds",
    "hero.facts.groups": "groups",
    "hero.facts.pairs": "pairs",
    "hero.facts.minutes": "min",

    "about.chip": "🐱 Cat Mythology",
    "about.title": "From Egyptian Goddess to Thailand's Lucky Cats",
    "about.lede": "Why humans have called cats “guardians of the home” since ancient times",
    "about.sub1": "The Original: Bastet, Egypt's Cat Goddess",
    "about.story1": "Bastet was an ancient Egyptian goddess, possibly originating in Nubia, worshipped since as early as the 2nd Dynasty (around 2890 BC) — nearly 5,000 years ago.",
    "about.f1.b": "From Lion to Cat",
    "about.f1.s": "She was originally a lioness warrior goddess of the sun, before becoming the cat goddess known today.",
    "about.f2.b": "Protective Power",
    "about.f2.s": "Revered as a protector against disease and evil spirits, and as a goddess of pregnancy and childbirth — perhaps because domestic cats bred so prolifically.",
    "about.f3.b": "Cats as Royalty",
    "about.f3.s": "Some royal cats wore gold jewelry and ate from the same dish as the family.",
    "about.f4.b": "True Devotion",
    "about.f4.s": "Excavations at Bastet's temple uncovered over 300,000 cat mummies, and when a cat died, the whole family would mourn deeply.",
    "about.f5.b": "A Grand Festival",
    "about.f5.s": "Her annual festival drew around 700,000 attendees, filled with singing, dancing, and wine.",
    "about.sub2": "Arriving in Siam: Thai Cats Have Their Own Lore",
    "about.story2": "Although there's no evidence the cult of Bastet reached Thailand directly, the belief that “cats are guardians and luck-bringers” exists here too.",
    "about.g1.b": "Thai Cat Treatises",
    "about.g1.s": "Ancient Thai manuscripts classified lucky cats — like Wichien Maat, Suphalak, and Konja — noting which breeds bring wealth.",
    "about.g2.b": "The Cat Rain Parade",
    "about.g2.s": "Carrying a cat in procession to pray for rain for the crops.",
    "about.g3.b": "Carrying a Cat into a New Home",
    "about.g3.s": "The belief that a cat brings peace and coolness to a new home.",
    "about.summary": "<b>In short:</b> Thousands of years apart, thousands of kilometers apart — yet humans crowned cats “guardians of the home” all the same. 🐈‍⬛✨",
    "about.source": "Source: Bastet – Wikipedia",

    "types.chip": "🐾 Get to Know Cats",
    "types.title": "Types of Cats",
    "types.lede": "Cats can be grouped in several ways: biologically, by domestic breed, Thai native breeds, and by coat length.",

    "types.sub1": "Biological Classification (Family Felidae)",
    "types.story1": "The cat family has about 40 species, split into two main subfamilies.",
    "types.big1.b": "Lion", "types.big1.s": "Lives in prides; males have manes; found in Africa and India",
    "types.big2.b": "Tiger", "types.big2.s": "Largest cat species; striped; strong swimmer",
    "types.big3.b": "Leopard", "types.big3.s": "Highly adaptable; hauls prey into trees; black panthers are melanistic leopards",
    "types.big4.b": "Jaguar", "types.big4.s": "Extremely strong bite; lives in Central and South America",
    "types.big5.b": "Snow Leopard", "types.big5.s": "Lives at high altitude; long thick tail; cannot roar",
    "types.big6.b": "Clouded Leopard", "types.big6.s": "Cloud-like markings; long canines relative to body size; found in Thailand",
    "types.smallcats": "<b>Small Cats (Felinae):</b> Examples include the cheetah (fastest land animal), puma, lynx, leopard cat, fishing cat, Asian golden cat, and the domestic cat (Felis catus), domesticated roughly 9,000–10,000 years ago. Most cannot roar, but they can purr.",

    "types.sub2": "Popular Domestic Breeds",
    "types.story2": "The number of recognized breeds depends on the registry: CFA recognizes about 45 breeds, TICA 70+.",
    "types.breed1.b": "Persian", "types.breed1.s": "Long coat; calm, affectionate. Flat face; prone to breathing issues and tear staining; needs daily brushing",
    "types.breed2.b": "Exotic Shorthair", "types.breed2.s": "Short, dense coat; calm. Persian-type face with easier coat care",
    "types.breed3.b": "British Shorthair", "types.breed3.s": "Short, dense coat; easygoing, independent. Dislikes frequent handling; gains weight easily",
    "types.breed4.b": "Scottish Fold", "types.breed4.s": "Short/long coat; gentle. Folded ears come from a gene affecting cartilage; risk of painful joints",
    "types.breed5.b": "Maine Coon", "types.breed5.s": "Long coat; friendly, intelligent. Very large; risk of heart disease (HCM)",
    "types.breed6.b": "Ragdoll", "types.breed6.s": "Semi-long coat; goes limp when held, people-oriented. Blue eyes; good with children",
    "types.breed7.b": "Bengal", "types.breed7.s": "Short coat; high-energy, playful. Wild-looking spots; needs lots of activity",
    "types.breed8.b": "Sphynx", "types.breed8.s": "Hairless; very affectionate. Needs regular baths to remove skin oils; sensitive to cold and sun",
    "types.breed9.b": "American Shorthair", "types.breed9.s": "Short coat; adaptable. Hardy and easy to keep",

    "types.sub3": "Thai Cats",
    "types.story3": "Ancient Thai cat manuscripts describe many auspicious cat types (most sources cite around 17). The best-known surviving ones are:",
    "types.thai1.b": "Wichien Maat (Siamese)", "types.thai1.s": "Cream coat with dark brown points on face, ears, legs, and tail; blue eyes; ancestor of the modern Siamese; vocal and attached to owners",
    "types.thai2.b": "Korat (Si Sawat / Malet)", "types.thai2.s": "Silver-blue coat with shimmering tips; green eyes likened to young rice; heart-shaped face; considered lucky and often given as wedding gifts",
    "types.thai3.b": "Suphalak (Thong Daeng)", "types.thai3.s": "Solid copper-brown coat; golden-yellow eyes; similar to the Burmese",
    "types.thai4.b": "Khao Manee", "types.thai4.s": "Pure white; blue, yellow, or odd-colored eyes (odd eyes are prized); hearing should be checked, as white blue-eyed cats are prone to deafness",
    "types.thai5.b": "Konja", "types.thai5.s": "Solid black; amber eyes; believed to ward off danger",

    "types.sub4": "By Coat Length",
    "types.coat1.b": "Shorthair", "types.coat1.s": "Easy care; brush 1–2 times per week",
    "types.coat2.b": "Longhair", "types.coat2.s": "Brush almost daily to prevent mats and hairballs",
    "types.coat3.b": "Hairless", "types.coat3.s": "Not hypoallergenic; requires skin care instead of coat care",

    "types.note": "<b>Note:</b> If you plan to get a flat-faced, fold-eared, or giant breed, choose a breeder that health-screens the parent cats, or consider adopting a rescue cat, which is often hardier.",

    "how.title": "How to Play",
    "how.lede": "Takes about 1 minute. Play on mobile or desktop.",
    "how.s1.b": "Pick Your Favorite",
    "how.s1.s": "Cats appear in pairs — click a card, or press A / B or ← → on your keyboard.",
    "how.s2.b": "Complete 20 Pairs",
    "how.s2.s": "Every cat appears only once, always paired against a cat from a different group.",
    "how.s3.b": "See Your Result",
    "how.s3.s": "Instantly find out which group you like most, with scores and the cats you picked.",

    "groups.title": "4 Cat Groups",
    "groups.lede": "Which type are you? Play to find out.",

    "breeds.title": "4 Groups, 40 Breeds",
    "breeds.lede": "Every cat appears once in the game, always matched against a different group.",

    "cta.title": "Ready to find the right cat?",
    "cta.lede": "Pick whatever you like — there's no wrong answer. Let the goddess Bastet guide the way.",
    "cta.start": "Start →",

    "test.hint": "Press A / B or ← →",
    "test.title": "Which one do you like more?",
    "test.or": "or",
    "test.pair": "Pair {n} / {total}",

    "result.chip": "Your Result",
    "result.again": "Play Again",
    "result.home": "Back to Home",
    "result.scoresTitle": "Score by Group",
    "result.scoresLede": "From your 20 picks",
    "result.pickedTitle": "Cats you picked in this group",
    "result.pickedTitleTie": "Cats you picked in the winning group",
    "result.points": "pts",
    "result.tie": "Tied across {n} groups — you like several types equally. ",

    "last.title": "Previous Result",
    "last.lede": "You liked {names} the most",
    "last.and": " and ",
    "last.howTitle": "How to Play",
    "last.howLede": "Takes about 1 minute",
    "last.rule1": "Cats appear in pairs — pick the one you like more.",
    "last.rule2": "Click a card, or press A / B or ← →.",
    "last.rule3": "After 20 pairs, we'll tell you which group you like.",

    "footer.bastetDesc": "Carrying on the spiritual tradition of worshipping the Egyptian cat goddess Bastet since 3100 BC. A human's true duty: serve as staff, open the cans, and bow to the master.",
    "footer.link1": "𓏬 How to Earn the 5-Stripe Blessing",
    "footer.link2": "𓏬 The Mackerel Decree",
    "footer.link3": "𓏬 The Servants' Guild",
    "footer.link4": "𓏬 Broke From Fearing the Boss",
    "footer.link5": "𓏬 The Holy Litter Box",
    "footer.link6": "𓏬 The Box Theory (If It Fits, I Sits)",
    "footer.link7": "𓏬 The Law of Gravity (Pushing Things Off Tables)",
    "footer.link8": "𓏬 3 AM Marathon (3 AM Zoomies Support)",
    "footer.link9": "𓏬 Certified Cat Servant",
    "footer.templeDesc": "Main command center beneath the shadow of the Great Pyramid of Giza, birthplace of the cat universe.",
    "footer.mapBtn": "Open directions to the pyramid 🗺️",
    "footer.quote": "\"May your litter box stay clean and your treats never run out. 🐾\"",

    "about.meta": "Meow Haven mini project — a pairwise cat-picking game to find out which cat group suits you, named after the cat goddess Bastet.",
    "about.hero.title": "The Cat Goddess <em>Bastet</em><br>Picks Your Cat",
    "about.hero.lede": "A mini project inspired by Bastet, the ancient Egyptian cat goddess. Pick your favorite cat from each pair, and find out which cat group has your heart.",
    "about.hero.start": "Start Playing →",
    "about.foot": "Goddess Bastet Mini Project · Cat photo credits at images/cats/CREDITS.md",
  }
};

let LANG = (function () {
  try {
    const saved = localStorage.getItem("meowHavenLang");
    if (saved === "th" || saved === "en") return saved;
  } catch (error) { }
  return (navigator.language || "th").toLowerCase().startsWith("en") ? "en" : "th";
})();

function t(key) {
  return (I18N[LANG] && I18N[LANG][key]) ?? I18N.th[key] ?? key;
}
// Fill {placeholders} in a translated string, e.g. t("test.pair", {n:1, total:20})
function tf(key, vars) {
  return t(key).replace(/\{(\w+)\}/g, (match, name) => (vars && name in vars) ? vars[name] : match);
}

const LANG_CHANGE_CALLBACKS = [];
function onLangChange(fn) { LANG_CHANGE_CALLBACKS.push(fn); }

function applyI18n() {
  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-aria-label]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel)); });
  const meta = document.querySelector('meta[name="description"][data-i18n-meta]');
  if (meta) meta.setAttribute("content", t(meta.dataset.i18nMeta));
  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) {
    langBtn.textContent = LANG === "th" ? "EN" : "TH";
    langBtn.setAttribute("aria-label", LANG === "th" ? "Switch to English" : "สลับเป็นภาษาไทย");
  }
}

function setLang(lang) {
  if (lang !== "th" && lang !== "en") return;
  LANG = lang;
  try { localStorage.setItem("meowHavenLang", lang); } catch (error) { }
  applyI18n();
  LANG_CHANGE_CALLBACKS.forEach(fn => fn());
}

document.addEventListener("DOMContentLoaded", () => {
  applyI18n();
  const langBtn = document.getElementById("langToggleBtn");
  langBtn?.addEventListener("click", () => setLang(LANG === "th" ? "en" : "th"));
});
