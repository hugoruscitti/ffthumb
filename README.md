ffthumb
=======

A simple thumb creator videos in nodejs

Install
-------

on OS X:

    brew install ffmpegthumbnailer

on Ubuntu:

    sudo apt-get install ffmpegthumbnailer

then:

    npm install ffthumb


How to use
----------

```
var fft = require('./ffthumb');

var ff = new fft.obj();

function on_error(error) {
  console.log(error);
}

ff.create('Despicable_Me_2.avi').
    output('thumb.png').
    size('100').
    error(on_error).
    done();
```

![](thumb.png)
