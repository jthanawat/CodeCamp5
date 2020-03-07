// * Map and Set *
// Exercise 1 : ให้ arr เป็น Array
// สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr 

function unique(arr) {
    let valueSet = new Set(arr);
    let result = [];
  
    for (let element of valueSet) {
      result.push(element)
    }
    return result;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  
  alert(unique(values));
  
  
  //Exercise 2 : Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน ( Optional )
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
  
  
  //Exercise 3 : ได้ array จาก map.keys() แต่ไม่สามารถใช้ push ได้ (Optional)
  let map = new Map();
  
  map.set("name", "John");
  
  let keys = map.keys();
  
  // Error: keys.push is not a function
  keys.push("more");