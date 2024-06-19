async function fetchData1(){
    return new Promise<void>((resolve,reject)=>{
        setTimeout(() => {
            console.log("data fetch successfully");
            resolve();
        }, 1000);
        
    })
}
fetchData1().then((message)=>{
    console.log(message);
    
})
