
// console.log(age)  // =>   undefined
// // console.log(fullName)   // =>   Uncaught ReferenceError: fullName is not defined

// var age = 16



// {
//     console.log(fullName) // Uncaught ReferenceError: Cannot access 'fullName' before initialization
//     let fullName = "Văn Trường"
//     //Lưu ý: khi khai báo biến với let và const khi được hoisted không được tạo giá trị và được đưa vào "Temporal Dead Zone"
// }



// let fullName = "Nguyen Van A"
// {
//     {
//         {
//             console.log(fullName)
//             let fullName = "Nguyen Van B"
//         }
//     }
// }



const counter1 = makeCounter()

console.log(counter1())

function makeCounter(){
    let counter = 0

    return increate

    function increate(){
        return ++counter
    }
}