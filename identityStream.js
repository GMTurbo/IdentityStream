var Stream = require('stream').Stream;
var util = require('util');

function IdentityStream() {
  this.writable = true;
  this.readable = true;
}

util.inherits(IdentityStream, Stream);

IdentityStream.prototype.write = function(data) {
  this.emit('data', data);
};

IdentityStream.prototype.end = function() {
  this.emit('end');
};

IdentityStream.prototype.destroy = function() {
  this.emit('close');
};

module.exports = IdentityStream;
