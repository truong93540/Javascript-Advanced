// function createCouter(){
//     let couter = 0

//     function increase(){
//         return ++couter
//     }
//     return increase
// }

// const counter1 = createCouter()

// console.log(counter1())
// console.log(counter1())
// console.log(counter1())

// const counter2 = createCouter()

// console.log(counter2())
// console.log(counter2())
// console.log(counter2())


// console.log("(Info) Hàm gửi mail bắt đầu chạy")
// console.log("(Error) Xảy ra lỗi tại xx. Message: xx")
// console.log("(Info) Hàm gửi mail bắt đầu chạy")


// function createLogger(namespace){
//     function logger(message){
//         console.log(`[${namespace}] ${message}`)
//     }
//     return logger
// }

// // =====================App========================

// // Register.js

// const infoLogger = createLogger('Info')

// infoLogger('Bắt đầu gửi mail')
// infoLogger('Gửi mail lỗi lần 1, thử gửi lại ...')
// infoLogger('Gửi mail thanh công cho user xxx')

// // ForgotPassword.js
// const errorLogger = createLogger('Error')

// errorLogger('Email không tồn tịa trong DB')
// errorLogger('Gửi mail lỗi lần 1, thử gửi lại ...')
// errorLogger('Email thành thông cho user xxx')


function createSrorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}//toán tử ?? nếu đằng trước là undefine hoặc null thì sẽ tự động lấy vế đằng sau

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))// lưu dữ liệu trên trình duyệt
    }

    const storage = {
        get(key){
            return store[key]
        },
        set(key, value){
            store[key] = value
            save()
        },
        remove(key){
            delete store[key]
            save()
        }
    }
    return storage
}

// Profile.js
const profileSetting = createSrorage('profile_setting')

console.log(profileSetting.get('fullName'))

profileSetting.set('fullName', 'VanTruong')
profileSetting.set('age', 20)
profileSetting.set('address', 'Hai Phong')

const profileSetting2 = createSrorage('profile_setting_2')

console.log(profileSetting2.get('fullName2'))

profileSetting2.set('fullName2', 'VanTruong')
profileSetting2.set('age2', 20)
profileSetting2.set('address2', 'Hai Phong')