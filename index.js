const Dispatcher = require('./eventUnderstanding')

const myEmitter = new Dispatcher();

function once(data){
    console.log('my Emitter is working', data)
}
function twice(data){
    console.log('my  second Emitter is working', data)
}
function fire(data){
    console.log('my click function', data)
}
function three (data){
    console.log('my three function', data)
}

myEmitter.when('click', fire)
myEmitter.when('click', three)

myEmitter.when('start', once);
myEmitter.when('start', twice);
// myEmitter.dispatch('start', [1,2,3]);
// myEmitter.remove('start', once)
  