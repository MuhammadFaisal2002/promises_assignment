async function fetchwithError(){
    return await new Promise((res,rej)=>{  
        setTimeout(() => {
           let randNum = Math.random() 
           if (randNum > 0.5){
            console.log("promise solve success")
           }
           else{
            console.log("promise failed");
           }
        }, 1000);
})
}
fetchwithError().then(
    (data)=>{
        console.log(data,"success")
    }
).catch(
    (err)=>{
        console.log("failed",err);
        
    }
)
