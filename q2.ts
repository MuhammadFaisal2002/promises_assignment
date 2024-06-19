async function simulateTask(){
    console.log("task running");
    await new Promise<void>((resolve)=>{
        setTimeout(() => {
            console.log("solved");
            resolve()
        }, 1000);
    }
    )
}
simulateTask()