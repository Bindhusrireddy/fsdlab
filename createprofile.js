
function createProfile(object,intrest){
    const {name,age}=object;
    const [a,b]=intrest;
    return {name,age,a,b};
}
const object={name:"bindhu",age:20,branch:"cse"};
const intrest=["reading books","playing chess","listening music"];
let obj1=createProfile(object,intrest);
console.log(obj1);