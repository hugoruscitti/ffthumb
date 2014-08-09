var fft = require('./ffthumb');

var ff = new fft.obj();

function on_error(error) {
  console.log("ERROR: " + error);
}

function on_success() {
  console.log("OK");
}

ff.create('Despicable.Me.2.2013.480p.BDRip.XviD.Audio.Latino-JcGoku21.avi').
    output('thumb22.png').
    size('720').
    error(on_error).
    success(on_success).
    done();
