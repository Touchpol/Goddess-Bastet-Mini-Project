// cat: { name:{th,en}, trait:{th,en}, fur, eye, ear, pattern, patternColor, longHair, eye2? }
// ear: n normal · f fold · c curl · b big · s small ; pattern: none · stripe · point · spot · patch · tux · mask
const groups = {
  thai: { name:{th:"แมวไทยสายฉลาด", en:"Smart Thai Cats"}, short:{th:"แมวไทย", en:"Thai"}, color:"--group-thai",
    desc:{th:"คุณชอบแมวที่ฉลาด รู้ใจ และผูกพันกับคน แมวไทยช่างคุย ติดเจ้าของ และเลี้ยงง่ายในอากาศบ้านเรา",
      en:"You love cats that are smart, intuitive, and bonded to people. Thai cats are chatty, devoted, and thrive in our climate."},
    cats:[
      { name:{th:"วิเชียรมาศ",en:"Wichien Maat"}, trait:{th:"ช่างพูด ติดคน",en:"Talkative, people-oriented"}, fur:"#efe3cf", eye:"#3d7fc4", ear:"n", pattern:"point", patternColor:"#4a3426", longHair:0 },
      { name:{th:"โคราช (สีสวาด)",en:"Korat (Si-Sawat)"}, trait:{th:"ขนสีเงิน แมวนำโชค",en:"Silver-blue coat, lucky cat"}, fur:"#8d96a3", eye:"#7cbf4a", ear:"n", pattern:"none", patternColor:"", longHair:0 },
      { name:{th:"ขาวมณี",en:"Khao Manee"}, trait:{th:"ขาวทั้งตัว ตาสองสี",en:"All white, odd-eyed"}, fur:"#f6f3ee", eye:"#3d7fc4", ear:"n", pattern:"none", patternColor:"", longHair:0, eye2:"#d9a521" },
      { name:{th:"ศุภลักษณ์",en:"Suphalak"}, trait:{th:"สีทองแดง หายาก",en:"Copper coat, rare"}, fur:"#7a4a2c", eye:"#d9a521", ear:"n", pattern:"none", patternColor:"", longHair:0 },
      { name:{th:"โกนจา",en:"Konja"}, trait:{th:"ดำสนิท ขี้เล่น",en:"Jet black, playful"}, fur:"#26211e", eye:"#e0b33a", ear:"n", pattern:"none", patternColor:"", longHair:0 },
      { name:{th:"แมวส้มไทย",en:"Thai Orange Cat"}, trait:{th:"อ้วนกลม กินเก่ง",en:"Round and chunky, big eater"}, fur:"#e58c3a", eye:"#c9a227", ear:"n", pattern:"stripe", patternColor:"#b8601d", longHair:0 },
      { name:{th:"แมวลายสลิด",en:"Thai Striped Cat"}, trait:{th:"แมวบ้านสายถึก",en:"Sturdy domestic cat"}, fur:"#9a8670", eye:"#9fb33a", ear:"n", pattern:"stripe", patternColor:"#4e4035", longHair:0 },
      { name:{th:"แมวสามสี",en:"Thai Calico"}, trait:{th:"สวย ฉลาด เอาแต่ใจ",en:"Pretty, smart, strong-willed"}, fur:"#f4efe6", eye:"#c9a227", ear:"n", pattern:"patch", patternColor:"#d9822f", longHair:0 },
      { name:{th:"แมวหางสั้นแม่โขง",en:"Mekong Bobtail"}, trait:{th:"หางสั้นงอ ซื่อสัตย์",en:"Short kinked tail, loyal"}, fur:"#d8c7ae", eye:"#5ea3d6", ear:"n", pattern:"point", patternColor:"#6b5442", longHair:0 },
      { name:{th:"แมววัว (ขาวดำ)",en:"Thai Bicolor (Cow Cat)"}, trait:{th:"ร่าเริง ไม่กลัวใคร",en:"Cheerful, fearless"}, fur:"#2a2523", eye:"#d9a521", ear:"n", pattern:"tux", patternColor:"#f4efe6", longHair:0 }
    ]},
  fluffy: { name:{th:"ขนยาวขี้อ้อน", en:"Fluffy & Affectionate"}, short:{th:"ขนยาว", en:"Fluffy"}, color:"--group-fluffy",
    desc:{th:"คุณชอบแมวขนฟู นุ่ม ใจเย็น และชอบให้กอด เหมาะกับคนที่อยากได้เพื่อนนั่งเล่นเงียบๆ ที่บ้าน",
      en:"You love cats with soft, fluffy coats — calm and cuddly. Perfect for someone who wants a quiet companion at home."},
    cats:[
      { name:{th:"เปอร์เซีย",en:"Persian"}, trait:{th:"หน้าแบน ใจเย็นสุดๆ",en:"Flat face, ultra calm"}, fur:"#f3ece2", eye:"#d98a2b", ear:"s", pattern:"none", patternColor:"", longHair:1 },
      { name:{th:"แร็กดอล",en:"Ragdoll"}, trait:{th:"ตัวอ่อนปวกเปียกเวลาอุ้ม",en:"Goes limp when picked up"}, fur:"#f0e6d6", eye:"#3d7fc4", ear:"n", pattern:"point", patternColor:"#6d5848", longHair:1 },
      { name:{th:"เมนคูน",en:"Maine Coon"}, trait:{th:"ยักษ์ใจดี",en:"Gentle giant"}, fur:"#8a6a4c", eye:"#c9a227", ear:"b", pattern:"stripe", patternColor:"#4d3a2a", longHair:1 },
      { name:{th:"นอร์วีเจียนฟอเรสต์",en:"Norwegian Forest Cat"}, trait:{th:"ขนหนา ชอบปีนป่าย",en:"Thick coat, loves climbing"}, fur:"#a39582", eye:"#7cbf4a", ear:"n", pattern:"stripe", patternColor:"#5d5244", longHair:1 },
      { name:{th:"ไซบีเรียน",en:"Siberian"}, trait:{th:"ทนหนาว ขี้อ้อน",en:"Cold-hardy, affectionate"}, fur:"#b0a089", eye:"#c9a227", ear:"n", pattern:"stripe", patternColor:"#6a5a48", longHair:1 },
      { name:{th:"เบอร์แมน",en:"Birman"}, trait:{th:"ถุงเท้าขาว อ่อนโยน",en:"White \"socks\", gentle"}, fur:"#efe4d0", eye:"#3d7fc4", ear:"n", pattern:"point", patternColor:"#5e4a3a", longHair:1 },
      { name:{th:"หิมาลายัน",en:"Himalayan"}, trait:{th:"ขนฟู ตาสีฟ้า",en:"Fluffy coat, blue eyes"}, fur:"#f2e8da", eye:"#4f9be0", ear:"s", pattern:"point", patternColor:"#7a6050", longHair:1 },
      { name:{th:"เตอร์กิชแองโกร่า",en:"Turkish Angora"}, trait:{th:"สง่างาม ตาสองสี",en:"Elegant, odd-eyed"}, fur:"#faf7f2", eye:"#3d7fc4", ear:"n", pattern:"none", patternColor:"", longHair:1, eye2:"#d9a521" },
      { name:{th:"บริติชลองแฮร์",en:"British Longhair"}, trait:{th:"นิ่ง สุขุม",en:"Calm, composed"}, fur:"#8e98a6", eye:"#d98a2b", ear:"s", pattern:"none", patternColor:"", longHair:1 },
      { name:{th:"บาลินีส",en:"Balinese"}, trait:{th:"ช่างพูด ขนนุ่ม",en:"Chatty, silky coat"}, fur:"#efe2cc", eye:"#3d7fc4", ear:"b", pattern:"point", patternColor:"#4a3426", longHair:1 }
    ]},
  active: { name:{th:"ขนสั้นจอมซน", en:"Playful Shorthairs"}, short:{th:"จอมซน", en:"Playful"}, color:"--group-active",
    desc:{th:"คุณชอบแมวขนสั้นที่ตื่นตัว อยากรู้อยากเห็น และเล่นสนุก เหมาะกับบ้านที่มีเวลาเล่นด้วยทุกวัน",
      en:"You love alert, curious, playful shorthaired cats. Great for a home with time to play every day."},
    cats:[
      { name:{th:"อเมริกันช็อตแฮร์",en:"American Shorthair"}, trait:{th:"เลี้ยงง่าย เป็นมิตร",en:"Easygoing, friendly"}, fur:"#b9b3aa", eye:"#7cbf4a", ear:"n", pattern:"stripe", patternColor:"#3f3a35", longHair:0 },
      { name:{th:"เบงกอล",en:"Bengal"}, trait:{th:"ลายเสือดาว ชอบน้ำ",en:"Leopard-spotted, loves water"}, fur:"#d9a35c", eye:"#7cbf4a", ear:"n", pattern:"spot", patternColor:"#4a3220", longHair:0 },
      { name:{th:"อะบิสซิเนียน",en:"Abyssinian"}, trait:{th:"อยากรู้อยากเห็น",en:"Curious"}, fur:"#b8743d", eye:"#c9a227", ear:"b", pattern:"none", patternColor:"", longHair:0 },
      { name:{th:"บริติชช็อตแฮร์",en:"British Shorthair"}, trait:{th:"แก้มป่อง ชิลล์",en:"Chubby cheeks, laid-back"}, fur:"#7f8a99", eye:"#d98a2b", ear:"s", pattern:"none", patternColor:"", longHair:0 },
      { name:{th:"รัสเซียนบลู",en:"Russian Blue"}, trait:{th:"ขี้อาย แต่รักเจ้าของ",en:"Shy but devoted"}, fur:"#6f7d8c", eye:"#5fb04a", ear:"b", pattern:"none", patternColor:"", longHair:0 },
      { name:{th:"สยาม (Siamese)",en:"Siamese"}, trait:{th:"เสียงดัง ขี้อ้อน",en:"Vocal, affectionate"}, fur:"#efe3cf", eye:"#3d7fc4", ear:"b", pattern:"point", patternColor:"#3b2a20", longHair:0 },
      { name:{th:"อียิปเชียนมาว",en:"Egyptian Mau"}, trait:{th:"วิ่งเร็วที่สุด",en:"Fastest runner"}, fur:"#bfb8ab", eye:"#8fc23f", ear:"n", pattern:"spot", patternColor:"#4a4540", longHair:0 },
      { name:{th:"โอซิแคท",en:"Ocicat"}, trait:{th:"ลายจุด ขี้เล่นแบบหมา",en:"Spotted, playful like a dog"}, fur:"#c9a37a", eye:"#c9a227", ear:"n", pattern:"spot", patternColor:"#5a3c24", longHair:0 },
      { name:{th:"เบอร์มีส",en:"Burmese"}, trait:{th:"ติดคน ชอบนั่งตัก",en:"People-loving, lap cat"}, fur:"#5a3d2b", eye:"#d9a521", ear:"n", pattern:"none", patternColor:"", longHair:0 },
      { name:{th:"ซาวันนาห์",en:"Savannah"}, trait:{th:"ตัวสูง กระโดดเก่ง",en:"Tall, great jumper"}, fur:"#d6b07a", eye:"#9fb33a", ear:"b", pattern:"spot", patternColor:"#2e2318", longHair:0 }
    ]},
  unique: { name:{th:"หน้าตาไม่ซ้ำใคร", en:"One of a Kind"}, short:{th:"ไม่ซ้ำใคร", en:"Unique"}, color:"--group-unique",
    desc:{th:"คุณชอบแมวที่มีเอกลักษณ์ หูพับ ขาสั้น หรือไม่มีขน เห็นครั้งเดียวก็จำได้ และพร้อมดูแลเป็นพิเศษ",
      en:"You love cats with a distinctive look — folded ears, short legs, or no fur — unforgettable at first sight, and you're ready to give them extra care."},
    cats:[
      { name:{th:"สฟิงซ์",en:"Sphynx"}, trait:{th:"ไม่มีขน อุ่นเหมือนพีช",en:"Hairless, warm like a peach"}, fur:"#e7bfa8", eye:"#7cbf4a", ear:"b", pattern:"none", patternColor:"", longHair:0 },
      { name:{th:"สก็อตติชโฟลด์",en:"Scottish Fold"}, trait:{th:"หูพับ หน้ากลม",en:"Folded ears, round face"}, fur:"#a7adb5", eye:"#d98a2b", ear:"f", pattern:"stripe", patternColor:"#6d737b", longHair:0 },
      { name:{th:"มันช์กิ้น",en:"Munchkin"}, trait:{th:"ขาสั้นน่ารัก",en:"Cute short legs"}, fur:"#d9c3a0", eye:"#c9a227", ear:"n", pattern:"patch", patternColor:"#8a6a4c", longHair:0 },
      { name:{th:"เดวอนเร็กซ์",en:"Devon Rex"}, trait:{th:"หูใหญ่ เหมือนเอเลี่ยน",en:"Big ears, alien-like"}, fur:"#c8b8a6", eye:"#d9a521", ear:"b", pattern:"none", patternColor:"", longHair:0 },
      { name:{th:"คอร์นิชเร็กซ์",en:"Cornish Rex"}, trait:{th:"ขนหยิก ตัวเพรียว",en:"Curly coat, slender"}, fur:"#e6d6c2", eye:"#c9a227", ear:"b", pattern:"patch", patternColor:"#2b2522", longHair:0 },
      { name:{th:"ปีเตอร์บอลด์",en:"Peterbald"}, trait:{th:"ขนน้อย ขายาว",en:"Sparse coat, long legs"}, fur:"#d7b19a", eye:"#5fb04a", ear:"b", pattern:"none", patternColor:"", longHair:0 },
      { name:{th:"อเมริกันเคิร์ล",en:"American Curl"}, trait:{th:"หูม้วนไปข้างหลัง",en:"Ears curl backward"}, fur:"#c79a62", eye:"#7cbf4a", ear:"c", pattern:"stripe", patternColor:"#7a5530", longHair:0 },
      { name:{th:"เจแปนนีสบ็อบเทล",en:"Japanese Bobtail"}, trait:{th:"หางปอม แมวกวัก",en:"Pom-pom tail, \"beckoning cat\""}, fur:"#f5f1ea", eye:"#d9a521", ear:"n", pattern:"patch", patternColor:"#d9822f", longHair:0 },
      { name:{th:"ลีคอย (แมวหมาป่า)",en:"Lykoi (Werewolf Cat)"}, trait:{th:"หน้ากากดำ ลุคหมาป่า",en:"Black mask, wolf-like look"}, fur:"#8b8580", eye:"#d9a521", ear:"n", pattern:"mask", patternColor:"#2a2624", longHair:0 },
      { name:{th:"เอ็กซอติกช็อตแฮร์",en:"Exotic Shorthair"}, trait:{th:"หน้าแบน ขนสั้น",en:"Flat face, short coat"}, fur:"#d9a668", eye:"#d98a2b", ear:"s", pattern:"none", patternColor:"", longHair:0 }
    ]}
};
