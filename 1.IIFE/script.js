// IIFE là 1 hàm được gọi ngay lập tức
// Nên dùng dấu ; trước IIFE
// IIFE là hàm "private"


// const callNow = new function(){
//     console.log("Now")
// }

// const callNow = function (){
//     console.log("Now")
// }

// callNow()


// let i = 0

// ;(function () {
//     let fullName = "Văn Trường"
//     console.log(fullName)
// })()


const app = (function(){
    // private
    const cars= []
    return {
        get(index){
            return cars[index]
        },
        add(car){
            cars.push(car)
        },
        edit(index, car){
            cars[index] = car
        },
        delete(index){
            cars.splice(index, 1)
        }
    }
})()

// const arr = []
// arr.push(1)
// arr.push(2)
// arr.push(3)
// arr.push(4)
// console.log(arr)