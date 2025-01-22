function delayedMessage(message, delay,callback)
{
   setTimeout(function(){
        console.log(message);
      callback();
   },delay)

}
function messagePrinted() {
    console.log("Message has been printed!");
}
delayedMessage("Hello, this message is delayed!", 2000, messagePrinted);