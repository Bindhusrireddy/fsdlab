const EventEmitter = require('events');

class EventManagement {
    constructor(){
        this.events = {
            start: new EventEmitter(),
            inprogress: new EventEmitter(),
            completed: new EventEmitter()
        };
    }

    startEvent() {
        console.log("Event has started.");
        this.events.start.emit('start');
    }
    inprogressEvent() {
        console.log("Event is in progress.");
        this.events.inprogress.emit('inprogress');
    }

    completedEvent() {
        console.log("Event has completed.");
        this.events.completed.emit('completed');
    }

    onStart(callback) {
        this.events.start.on('start', callback);
    }

    onInProgress(callback) {
        this.events.inprogress.on('inprogress', callback);
    }

    onCompleted(callback) {
        this.events.completed.on('completed', callback);
    }
}


const eventManager = new EventManagement();

eventManager.onStart(() => {
    console.log("Listener: The event has started!");
});

eventManager.onInProgress(() => {
    console.log("Listener: The event is in progress.");
});

eventManager.onCompleted(() => {
    console.log("Listener: The event has completed.");
});

eventManager.startEvent();
eventManager.inprogressEvent();
eventManager.completedEvent();
