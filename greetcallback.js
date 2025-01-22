
function greet(name,callback)
{
    let message =`hello ${name}!`;
    callback(message);
}
function printmessage(message)
{
    console.log(message);
}
greet("Bindhu",printmessage);








