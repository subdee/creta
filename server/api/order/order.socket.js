/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Order = require('./order.model');

exports.register = function(socket) {
  Order.schema.post('update', function (doc) {
    onUpdate(socket, doc);
  });
};

function onUpdate(socket, doc) {
  socket.emit('order:completed', doc);
}
