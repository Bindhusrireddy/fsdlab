async function s(){
    console.log("A");
    await new Promise(resolve => setTimeout(resolve, 1000));  
    console.log("B");
    console.log("C");
}

console.log("Iam outside");
s();  
