var exec = require('child_process').exec;

var obj = function() {
  this.command = "ffmpegthumbnailer";
  this.input_filename = undefined;
  this.output_filename = undefined;
  this.error_callback = undefined;
  this.success_callback = undefined;
  this.thumb_size = '0';
}

obj.prototype.create = function(video) {
  this.input_filename = video;
  return this;
}

obj.prototype.size = function(size) {
  this.thumb_size = size;
  return this;
}

obj.prototype.output = function(video) {
  this.output_filename = video;
  return this;
}

obj.prototype.success = function(success_callback) {
  this.success_callback = success_callback;
  return this;
}

obj.prototype.error = function(error_callback) {
  this.error_callback = error_callback;
  return this;
}


obj.prototype.done = function() {
  var self = this;
  var commandline = [this.command,
                    '-i', '"' + this.input_filename + '"',
                    '-o', '"' + this.output_filename + '"',
                    '-s' + this.thumb_size]

  exec(commandline.join(' '), function(error, stdout, stderr) {

    if (error !== null) {
      if (self.error_callback)
        self.error_callback.call(this, "" + error);
    }

  });
}

module.exports = {
  obj: obj
}
