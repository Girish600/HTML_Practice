const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com" }
];

// Q1:- Callback implements

// function fetchUserByIdCallback(id, callback){
//     if(!id)return callback("id not found")
//     if(typeof id !=="number")return callback ("Invalid id number")
//         setTimeout(()=>{
//     let user = users.find((ele)=>ele.id== id);
//     if(user){
//         callback(user)
//     }else{
//         callback(`data not found ${id}`)
//     }
//     },2000)
// }
// fetchUserByIdCallback(1, (result)=>{
//     console.log(result);
// })

// Q2

function fetchUserByIdCallback(id, callback){
    if(!id)return callback("id not found", null)
    if(typeof id !=="number")return callback ("Invalid id number", null)
        setTimeout(()=>{
    let user = users.find((ele)=>ele.id== id);
    if(user){
        callback(user)
    }else{
        callback(`data not found ${id}`,null)
    }
    },2000)
}
fetchUserByIdCallback(2, (err, result)=>{
    if (err) {
        console.error("error =>", err)
    }else{
    console.log(result);
    }
})

// Q3: Promise creation

// function fetchUserByIdPromise(id){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             let user = users.find((ele)=>ele.id== id);
//             if(user){
//                 resolve(user)
//             }else{
//                 reject(`data not found ${id}`);
//             }
//         },2000)
//     });
// }
// fetchUserByIdPromise(7).then(user =>{
//     console.log("the fetched entry id-", user);
// })
// .catch(error=>{
//     console.log("error-", error);    
// });

// Q4

// Q5:- async/await

// function fetchUserByIdPromise(id){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             let user = users.find((ele)=>ele.id== id);
//             if(user){
//                 resolve(user)
//             }else{
//                 reject(`data not found ${id}`);
//             }
//         },2000)
//     });
// }
// async function getUserData(id) {
//     try{
//         const user= await fetchUserByIdPromise(id);
//         console.log(user);
//     }   catch(error){
//         console.log("error-", error);       
//     }
// }

// getUserData(6);