const events = require("events");

function createEmitter(opened, closed) {    
  const emitterFun = new events.EventEmitter();

  emitterFun.once("open", opened);
  emitterFun.once("close", closed);

  return emitterFun;
}

function opened(emitter) {
  emitter.emit("open");
}
function closed(emitter) {
  emitter.emit("close");
}
let emitter = createEmitter(
  () => console.log("Opened!"), () => console.log("Closed!")
);
opened(emitter);
closed(emitter);