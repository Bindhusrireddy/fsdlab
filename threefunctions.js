
function multiplyByTwo(num, callback)
{
    return callback(num*2);
}
function substractThree(num,callback)
{
    return callback(num-3);
}
function addTen(num,callback)
{
    return callback(num+10);
}
function result(sum)
{
    console.log(sum);
}
function main()
{
    multiplyByTwo(13,function(result1){

    substractThree(result1,function(result2){
    addTen(result2,function(result3){
        result(result3)});

    });
});
}
main();
