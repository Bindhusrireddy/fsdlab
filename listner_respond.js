const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.once('event', () => {
    console.log('The event was triggered for the first time!');
});
myEmitter.emit('event');
myEmitter.emit('event'); 
