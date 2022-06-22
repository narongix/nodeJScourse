// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             longtitude: 0,
//             latitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia',(data) => {
//     console.log(data)
// })

const add = (a,b,callback) => {
    setTimeout(()=>{
        callback(a+b)
    },2000)
   
}

add(1,4,(sum)=>{
    console.log(sum)//should print :5
})