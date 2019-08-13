

class Dispatcher {
    constructor(){
        this._eventsMap = {};
    }
    
    // event  
    when(event, call_back){
        if((event in this._eventsMap) === false){
            this._eventsMap[event] = [];
        }
        this._eventsMap[event].push(call_back);
        console.log('when', event)
        const allCallback = this._eventsMap[event];

        console.log("_eventsMap" ,allCallback)
    }

    /**
     * remove event key from events map all together
     * @param {string} event 
     */

    forget(event){
        console.log('forget', event)
        delete this._eventsMap[event];
    }

    /**
     * remove the callback listener from callbacks array
     * @param {string} event 
     * @param {function} call_back 
     */

    remove(event, call_back){
        const allCallback = this._eventsMap[event];
        let count = 0;
        for (const callback of allCallback) {
           console.log('remove', allCallback)
            if (callback == call_back){
                allCallback.splice(count, 1)
            }
            count++;
        }
    }
    
    dispatch = (event, data)=>{
        const allEventCallbacks = this._eventsMap[event];

        for (const call_back of allEventCallbacks) {
            call_back(data)
        }
        console.log('event', event)

    }
}


module.exports = Dispatcher;