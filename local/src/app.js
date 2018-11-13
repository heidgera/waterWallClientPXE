'use strict';

var appData = '../ForBoot/appData';

var fs = require('fs');

if (fs.existsSync('/boot/appData/config.js')) {
  console.log('on pi');
  appData = '/boot/appData';
}

var obtains = [
  './src/wallControl.js',
  'µ/socket.js',
  `${appData}/config.js`,
  'child_process',
];

obtain(obtains, ({ valves }, socket, { config }, { execSync })=> {
  exports.app = {};

  var control = socket.get('192.168.0.1');

  var _ = 1;

  var test = [[_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],

              /////////////////////////////////////
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [0, 0, 0, 0, _, _, _, _, 0, 0, 0, 0],
              [0, 0, 0, 0, _, _, _, _, 0, 0, 0, 0],
              [0, 0, 0, 0, _, _, _, _, 0, 0, 0, 0],
              [0, 0, 0, 0, _, _, _, _, 0, 0, 0, 0],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],

              /////////////////////////////////////
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, _, _, 0, _, _, 0, 0, 0, 0, 0, 0],
              [_, _, _, _, _, _, _, 0, 0, 0, 0, 0],
              [_, _, _, _, _, _, _, 0, 0, 0, 0, 0],
              [0, _, _, _, _, _, 0, 0, 0, 0, 0, 0],
              [0, 0, _, _, _, 0, 0, _, 0, _, 0, 0],
              [0, 0, 0, _, 0, 0, _, _, _, _, _, 0],
              [0, 0, 0, 0, 0, 0, _, _, _, _, _, 0],
              [0, 0, 0, 0, 0, 0, 0, _, _, _, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, _, 0, 0, 0],

              /////////////////////////////////////
              [_, _, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, _, _, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, _, _, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, _, _, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, _, _, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, _, _, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, _, _, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, _, _, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, _, _, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, _, _, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, _, _],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, _, _, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, _, _, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, _, _, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, _, _, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, _, _, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, _, _, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, _, _, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, _, _, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, _, _, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [_, _, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

              /////////////////////////////////////
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, _, _, 0, 0, 0, 0, _, _, 0, 0],
              [0, 0, _, _, 0, 0, 0, 0, _, _, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, _, 0, 0, 0, 0, 0, 0, 0, 0, _, 0],
              [0, _, _, 0, 0, 0, 0, 0, 0, _, _, 0],
              [0, 0, _, _, _, _, _, _, _, _, 0, 0],
              [0, 0, 0, _, _, _, _, _, _, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  var count = 0;

  window.onbeforeunload = ()=> {
    valves.allOff();
  };

  exports.app.start = ()=> {

    var serNum = execSync(`cat /proc/cpuinfo | grep Serial | cut -d ' ' -f 2`);
    console.log(serNum.toString());

    control.addListener('drawRow', (pack)=> {
      valves.rasterRow(pack.data, pack.stamp - control.timeOffset);
    });

    control.addListener('drawRaster', (pack)=> {
      valves.drawRaster(pack.data, pack.stamp - control.timeOffset);
    });

    control.addListener('pixelWidth', (wid)=> {
      valves.pixel.width = wid;
    });

    control.addListener('pixelHeight', (hgt)=> {
      valves.pixel.height = hgt;
      console.log('Pixel height set to ' + valves.pixel.height);
    });

    control.connect();

    control.onconnect = ()=> {
      console.log('connected to server');

      control.synchronize();
      control.send({ uuid: serNum });
    };

    valves.pixel.height = 60;

    /*let defaultDraw = setInterval(()=> {
      valves.drawRaster(test, Date.now() + 50);
    }, (test.length + 10) * valves.pixel.height);*/

    console.log('started');

    document.onkeydown = (e)=> {
      let key = e.key.charCodeAt(0) - 97;
      console.log(key);
      if (key >= 0 && key < 24) {
        valves.force(key, 1);
      }
    };

    document.onkeyup = (e)=> {
      let key = e.key.charCodeAt(0) - 97;
      console.log(key);
      if (key >= 0 && key < 24) {
        valves.force(key, 0);
      }
    };

  };

  provide(exports);
});
