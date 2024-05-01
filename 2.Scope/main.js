/* Scope - Phạm vi

- Các loại phạm vi:
    - Global - toàn cầu
    - Code block - Khối mã: let, const
    - Local scope - Hàm: var, function
- Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó
 và bên ngoài nó
*/

// var message = "Học về scope"

// function log(){
//     console.log("In ra log")
// }

// function logger(){
//     console.log(message)
//     log()
// }

// logger()


// {
//     const age = 18
//     var age1 = 19
// }

// console.log(age)
// console.log(age1)
// // if else, for, while


function logger(){
    var fullName = "Văn Trường"
    console.log(fullName)
}

console.log(fullName)

logger()