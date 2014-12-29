var es = require('../')
  , it = require('it-is').style('colour')

exports ['wait callback gets a string when piping buffer'] = function (test) {
  buffers = [new Buffer('data')]

  var reader =
    es.readable(function (i, callback) {
      if(i >= buffers.length)
        return this.emit('end')
      this.emit('data', buffers[i])
      callback(null, buffers[i])
    })

  reader.pipe(es.wait(function(err, data) {
    it(data).typeof('string')
    test.done()
  }))
}

require('./helper')(module)
