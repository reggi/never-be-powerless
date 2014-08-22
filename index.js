var spawn = require('child_process').spawn;
var T = require("timbre");

setInterval(function(){
  var pmset = spawn("pmset",["-g", "ac"]);
  pmset.stdout.on('data', function (data) {
    data = data.toString("utf8");
    var not_attached = (data == "No adapter attached.\n");
    if(not_attached){
      T("audio", {load:"./hova.wav"}).play();
    }
  });
}, 500);
