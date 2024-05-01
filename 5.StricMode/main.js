// "use strict"

/*
- Đặc trưng: Không thể khai báo biến mà không sử dụng từ khóa var, let, const
- Báo lỗi khi gán lại giá trị cho thuộc tính có writable: false
- Báo lỗi cho hàm có tham số trùng tên
- Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block 
- Không đặt tên biến, tên hàm bằng từ khóa "nhạy cảm" của ngôn ngữ

*/

// var fullName = "Nguyễn Văn A"

// function testFunc(){
//     "use strict"
//     var age = 18 // tạo ra biến ở phạm vi global
//     {
//         {
//             {
//                 {
//                     {
//                         age = 30
//                     }
//                 }
//             }
//         }
//     }
//     age = 18
// }

// testFunc()

// console.log(fullName)
// // console.log(age)



const student = Object.freeze({ // không cho phép sửa
    fullName: "Nguyễn Văn A"
}) 

student.fullName = "Nguyễn Văn B"

console.log(student)