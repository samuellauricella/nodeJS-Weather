var getUser = (id, callback) =>{
    let user = {
        id: id,
        name: 'Samuel'
    };
    setTimeout(()=>{
        callback(user)
    },3000)
}

getUser(23, (userObject)=>{
    console.log(userObject);
})