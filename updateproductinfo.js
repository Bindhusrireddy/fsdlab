function updateproductinfo(product,discount,instock){
    const {id,name}=product;
    return {...{id,name},discount,instock};
}
const product ={id:101,name:"laptop",price:10000,category:"electronics"};
const updateobj=updateproductinfo(product,10,true);
console.log(updateobj);