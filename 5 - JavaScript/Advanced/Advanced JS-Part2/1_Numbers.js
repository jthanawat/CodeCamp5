// * Numbers *
// Lab
let num = 1.23456;
alert(Math.floor(num * 100) / 100);

// Exercise : ให้เขียนฟังก์ชัน random(min, max) ที่จะ random เลข float ตั้งแต่ min จนถึง max มาให้เรา (ไม่รวม max)
function random(min, max) {
  return Math.random() * (max - min) + min;     //max-min ดู range ที่ random เลื่อนมา 1,5 โดย + min
}

alert(random(1, 5));