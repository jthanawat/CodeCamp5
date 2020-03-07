// * Cloning and merging *
// Lab

const obj = {
    name: "thanawat",
    age: 24,
    height: 160,
    weight: 46,
  }
  
  let clone = {}; //// Object.assign({}, obj);
  
  for (let key in obj) { 
    clone[key] = obj[key];
  }
  clone.name = "kla";
  
  // console.log(clone.name);
  
  
  // Exercise 1 : ให้ทำตามคำสั่งต่อไปนี้
  // สร้าง Object เปล่าขึ้นมา
  // เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”
  // เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”
  // เปลี่ยน properties name เป็น “Boy”
  // ลบ properties name ออกจาก Object
  
  let obj = {};
  obj.name = "Sonter";
  obj.surname = "Pakorn";
  obj.name = "Boy";
  delete obj.name;
  
  
  // Exercise 2 : ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj 
  // และ ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties ไหม ถ้ามีให้คืนค่า true ถ้าไม่มีให้คืนค่า false
  
  function isEmpty(obj) {
    let isEmpty = true;
    for (let key in obj) {
      isEmpty = false;
    }
    return isEmpty;
  }
  
  
  // Exercise 3 : การเขียนข้างล่างต่อไปนี้ Error  ไหม
  // ans. ไม่ Error
  
  const user = {
    name: "John"
  };
  // does it work?
  user.name = "Pete";
  
  
  // Exercise 4 : จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงาน
  // และมี value เป็นเงินเดือน ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด
  
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  function sum(salaries) {
  let sum = 0;
    for (let key in salaries) {
      sum = sum + salaries[key];
    }
    return sum;
  }
  console.log(sum(salaries))
  
  
  //Exercise 5 : จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties 
  // นั้นมี value เป็น number ให้คุณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร
  
  function multiplyNumeric(obj, times) {
    for (let key in obj) {
      if (typeof (obj[key]) == "number") {
        obj[key] *= times;
      }
    }
    return obj;
  }
  
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  console.log(multiplyNumberic(obj, 2));
  
  
  
  // Clone เพิ่มเติม
  const obj = {
    name: 'sonter',
    age: 18,
    height: 196,
    weight: 70,
  }
  
  const obj2 = {
    name: 'Nat',
    weight: 98
  }
  
  const obj3 = {
    name: 'Tle',
    skill: "nodejs"
  }
  
  const obj4 = {
    name: 'Kla',
    address: 'Thailand'
  }
  
  Object.assign(obj3, obj, obj2, obj4);
  
  console.log(obj3);
  
  console.log(obj);
  
  console.log(obj2);  