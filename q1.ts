let Greet = new Promise((res,rej)=>{
    setTimeout(() => {
       res("soved") 
    }, 2000);
}
)
async function fetchGreeting(){
    try{
        let status = await Greet 
        console.log(status,"try");
    }
    catch(exception){
        console.log(exception,"catch");
        
    }
}
fetchGreeting()