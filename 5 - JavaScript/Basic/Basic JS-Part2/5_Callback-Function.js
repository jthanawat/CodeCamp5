// * Callback Function *
// function thanawat() {
//     console.log('thanawat');
//     return 0;
// }

// setTimeout(thanawat, 3000);
// setTimeout(callback, millisecond);

// function RandomNumber(callbackFn) {
//     const randomNumber = Math.floor(Math.random() * 10);
//     callbackFn(randomNumber)
// }

// RandomNumber((randomNumber) => {
//     console.log(randomNumber);
// });

// function calculateNumber(number, calculatorFn) {
//     return calculatorFn(number);
// }

// const result1 = calculateNumber(5, (number) => number + 1);
// const result2 = calculateNumber(5, (number) => number / 2);
// const result3 = calculateNumber(5, (number) => number * number);
// const result4 = calculateNumber(5, (number) => number ** 3);
// const result5 = calculateNumber(5, (number) => (number - 1) ** 2);
// const result6 = calculateNumber(5, (number) => [number]);
// const result6 = calculateNumber(5, (number) => {
//     let array = [];
//     array.push(number);
//     return array
// });
// const result7 = calculateNumber(5, (number) => [number, number + 1, number + 2]);
// const result8 = calculateNumber(5, (number) => [number - 1, number, number + 1]);
// const result9 = calculateNumber(7, (number) => {
//     let arr = [];
//     for (let i = 0; i <= number; i++) {
//         arr.push(i);
//     }
//     return arr;
// });
// console.log(result9);

// const result10 = calculateNumber(7, (number) => {
//     let arr = [];
//     for (let i = number; i >= 1; i--) {
//         arr.push(i);
//     }
//     return arr;
// });
// console.log(result10);

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log(result6);

// Math.floor() ปัดลง
// Math.ceil() ปัดขึ้น

//------------------------
// function map(array, transformFn) {
//     let newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         let transformElement = transformFn(array[i]);
//         newArray.push(transformElement)
//     }

//     return newArray
// }

// let array = [
//     { id: 1, name: 'sonter' },
//     { id: 2, name: 'kla' },
//     { id: 3, name: 'tong' }
// ];
//--------------------------

function find (array, conditionFn) {
    for (let i = 0; i < array.length; i++) {
        if (conditionFn(array[i])) return array[i];
    }
}

let array = [
        { id: 1, name: 'sonter' },
        { id: 2, name: 'kla' },
        { id: 3, name: 'tong' }
    ];

    const targetElement = find(array, (element) => element,id === 2);
    targetElement = { id:2, name: 'sonter'}


//--------------------------

const buttons = map(array, element => <button key=${element.id}> ${element.name} </button>);

function filter(array, filterFn) {
    let filterArray = [];

    for (let i =0; i < array.length; i++) {
        if (filterFn(array[i]) === true ) {
            filterArray.push(array[i]);
        }
    }
    return filterArray;
}

let array = [
    { id: 1, name: 'sonter' },
    { id: 2, name: 'kla' },
    { id: 3, name: 'tong' },
    { id: 4, name: 'k' }
];

let filterArray = filter(array, element => element.id % 2 === 1);
let filterArray = filter(array, element => element.id % 2 === 0);
let filterArray = filter(array, element => element.name.length === 4);


//----------------------------

function map(array, transformFn) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let transformElement = transformFn(array[i]);
        newArray.push(transformElement)
    }

    return newArray
}

let array = [1, 2, 3, 4, 5]
let newArray1 = map(array, (ele) => {
    return ele * 2
})

console.log(newArray1)

function generateToArray(startNumber, limit, step, callbackFn) {
    return callbackFn(startNumber, step, limit)
};

const result1 = generateToArray(5, 5, 3, (start, step, limit) => {
    let array = [];
    let current = start;
    for (let i = 1; i <= limit; i++) {
        array.push(current);
        current += step
    }
    return array;

});


console.log(result1);
result1 = [5, 8, 11, 14, 17]


// function generateToArray(number, limit, callbackFn) {
//     return callbackFn(number, limit)
// };

// const result1 = generateToArray(5, 5, (number, limit) => {
//     let arr = [];
//     for (let i = number; i < number + limit; i++) {
//         arr.push(i)
//     }
//     return arr;
// });

// console.log(result1);