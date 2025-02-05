const events = require('events')

let myE = new events.EventEmitter()

myE.on("UserDetails",(name,age)=>{
    console.log(`Hello , ${name} !`)
    console.log(`You are ${age} years old`)
})

myE.emit("UserDetails","Bindhu",19)
console.log("-".repeat(40))
myE.emit("UserDetails","Rushi",20)
console.log("-".repeat(40))