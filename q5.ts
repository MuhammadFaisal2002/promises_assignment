async function fetchData(){
    return await new Promise<void>((resolve)=>{
    setTimeout(() => {
        console.log("fetch data");
        resolve()
    }, 1000);
})}
async function processData(){
    return await new Promise<void>((resolve)=>{
    setTimeout(() => {
        console.log("process data");
        resolve()
    }, 1000);
})}
async function executeData(){
    try{
        const fetchdata = await fetchData();
        console.log(fetchdata);
    }
    catch(error){
        console.log(error,"error");
        
    }
}
executeData()