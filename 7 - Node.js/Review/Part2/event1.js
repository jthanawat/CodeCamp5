const EventEmitter = require('events')
const em1 = new EventEmitter()

setInterval( () => em1.emit(('one sec.'), {id:1, text: 'One sec'}), 1000)


em1.on('one sec.', (e) => {
  console.log(e);
})