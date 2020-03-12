// * Object *
// Lab

let user = {
    name: "Thanawat",
    age: 30,
    "computer skill": null
};

user.height = 160;
user.IsSingle = true;
console.log(user);
console.log(user["computer skill"]);
alert(user.name);

delete user.name
console.log(user);


// Exercise : ให้สร้าง Object แบบ Object Iteral โดยให้กำหนดตัวแปรชื่อ human โดยมี Properties ทั้ง 5 อย่าง
// ชื่อของผู้เรียน เป็น String
// อายุของผู้เรียนเป็น number
// บ้านของตัวเองเป็น String
// โสดหรือไม่โสดเป็น boolean
// คะแนนความฉลาดของตัวเองเป็น number (เต็ม 10)

let human = {};

human.name = "Thanawat",
human.age = 24,
human.group = "Nat",
human.IsSingle = true,
human["Intelligent Score"] = 4

console.log(human);