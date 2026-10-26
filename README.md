# Bangkok Contrasts — Old / New Bangkok

เว็บไซต์โปรเจกต์ Coding for Graphic Design (GAD23867) สำรวจความแตกต่างระหว่างกรุงเทพฯ เก่าและกรุงเทพฯ ใหม่

## หน้าเว็บไซต์
- `index.html` — Home: เปิดคอนเซปต์และแนะนำคู่ตรงข้าม
- `story.html` — Story: เล่าเรื่องรากเมือง การเปลี่ยนผ่าน และเมืองร่วมสมัย
- `collection.html` — Collection: แกลเลอรีภาพ กรอง Old/New และเปิดดูภาพขนาดใหญ่
- `about.html` — About: แนวคิด หลักการออกแบบ และระบบสี
- `style.css` — รูปแบบทั้งหมดและ Responsive breakpoints
- `script.js` — เมนูมือถือ แถบ progress การกรองแกลเลอรี และ lightbox

## วิธีเปิดดูในเครื่อง
1. แตกไฟล์ ZIP
2. เปิดโฟลเดอร์ใน VS Code
3. เปิด `index.html` ด้วย Live Server (แนะนำ) หรือเปิดไฟล์ในเบราว์เซอร์โดยตรง
4. ต้องเชื่อมต่ออินเทอร์เน็ตเพื่อโหลด Google Fonts และรูปภาพจาก Unsplash

## Deploy ไป Vercel
1. สร้าง repository บน GitHub แล้วอัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้
2. เข้า Vercel แล้วเลือก **Add New → Project** และ Import repository
3. เลือก Framework Preset เป็น **Other**
4. ปล่อย Build Command และ Output Directory ว่างไว้ (เป็น static HTML)
5. กด Deploy — ไม่จำเป็นต้องมี `package.json` หรือ build step

## ก่อนส่งงาน
- รูปภาพปัจจุบันเป็นภาพประกอบตัวอย่างจาก Unsplash และอาจไม่ใช่กรุงเทพฯ ทุกภาพ ควรแทนด้วยภาพกรุงเทพฯ ที่ถ่ายเองหรือมีสิทธิ์ใช้งาน เพื่อให้ตรงหัวข้อและมีเอกลักษณ์
- ตรวจชื่อผู้จัดทำ/ข้อมูลวิชาให้ตรงกับที่อาจารย์กำหนด
- ทดสอบลิงก์ทั้ง 4 หน้า รวมถึง mobile menu และ filter gallery บนมือถือ
- ตรวจสอบการใช้งานภาพและเครดิตก่อนเผยแพร่

## Mood & Tone
- Base `#FFF9F2`: ครีมอ่อน สบายตา
- Text `#343C45`: เทาเข้ม อ่านง่าย
- Soft Green `#A8CFA5`: เขียวเสจพาสเทล สื่อถึงเมืองเก่าและความสงบ
- Soft Cyan `#9CCFD0`: ฟ้าอมเขียวอ่อน เชื่อมความเก่ากับใหม่
- Warm Cream `#F4D7A5`: เหลืองพาสเทล เพิ่มความอบอุ่น
- Typography: Noto Sans Thai สำหรับภาษาไทย + IBM Plex Mono สำหรับตัวเลขและ label
