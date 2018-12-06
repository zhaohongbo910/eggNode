'use strict';
module.exports = app => {
	// app.sessionStore = {
	// 	// support promise / async
	// 	async get (key) {
	// 	  // return value;
	// 	},
	// 	async set (key, value, maxAge) {
	// 	  // set key to store
	// 	},
	// 	async destroy (key) {
	// 	  // destroy key
	// 	},
	// };

    app.once('server', server => {
      // websocket
      console.log(server,'server on start up')
    });
    app.on('error', (err, ctx) => {
        // report error
        console.log(err,ctx)
    });
    app.on('request', ctx => {
        // log receive request
        console.log(ctx,'ctx' + new Date())
    });
    app.on('response', ctx => {
      // ctx.starttime is set by framework
      const used = Date.now() - ctx.starttime;
      // log total cost
    });

  };