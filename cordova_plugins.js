
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "admob-plus-cordova.AdMob",
          "file": "plugins/admob-plus-cordova/www/admob.js",
          "pluginId": "admob-plus-cordova",
        "clobbers": [
          "admob"
        ]
        },
      {
          "id": "cordova-plugin-fullscreen.AndroidFullScreen",
          "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
          "pluginId": "cordova-plugin-fullscreen",
        "clobbers": [
          "AndroidFullScreen"
        ]
        },
      {
          "id": "cordova-plugin-screen-orientation.screenorientation",
          "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
          "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
          "cordova.plugins.screenorientation"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "admob-plus-cordova": "1.28.0",
      "cordova-plugin-fullscreen": "1.3.0",
      "cordova-plugin-screen-orientation": "3.0.2"
    };
    // BOTTOM OF METADATA
    });
    