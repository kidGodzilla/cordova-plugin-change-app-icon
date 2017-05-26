var exec = require('cordova/exec');

var changeAppIcon = {
    revertToDefaultAppIcon: function (successCallback, errorCallback) {     
        if (cordova.platformId.toUpperCase() === 'IOS') {
            console.log('changeAppIcon Android Not Supported');
            return;
        }

        if (successCallback == null) errorCallback = function () { };
        if (errorCallback == null) errorCallback = function () { };

        if (typeof errorCallback != "function") {
            console.log("revertToDefaultAppIcon errorCallback not a function");
            return;
        }

        if (typeof successCallback != "function") {
            console.log("revertToDefaultAppIcon successCallback not a function");
            return;
        }   

        exec(success, failure, "ChangeAppIcon", "changeIcon", [null]);
    },
    changeAppIcon: function (successCallback, errorCallback, alternateIconName) {
        if (cordova.platformId.toUpperCase() === 'IOS') {
            console.log('changeAppIcon Android Not Supported');
            return;
        }

        if (successCallback == null) errorCallback = function () { };
        if (errorCallback == null) errorCallback = function () { };

        if (typeof errorCallback != "function") {
            console.log("changeAppIcon errorCallback not a function");
            return;
        }

        if (typeof successCallback != "function") {
            console.log("changeAppIcon successCallback not a function");
            return;
        }

        exec(success, failure, "ChangeAppIcon", "changeIcon", [alternateIconName]);
    }
}

module.exports = changeAppIcon;