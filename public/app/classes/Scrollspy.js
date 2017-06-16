"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var window_service_1 = require("../services/window.service");
var Scrollspy = (function () {
    function Scrollspy() {
        // initialize current window reference
        var _win = new window_service_1.WindowRef();
        this.window = _win.nativeWindow;
    }
    Scrollspy.prototype.scrollTo = function (yPoint, duration) {
        var _this = this;
        setTimeout(function () {
            _this.window.scrollTo(0, yPoint);
        }, duration);
        return;
    };
    Scrollspy.prototype.smoothScroll = function (eID) {
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            this.window.scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20)
            speed = 20;
        var step = Math.round(distance / 100);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                this.scrollTo(leapY, timer * speed);
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            this.scrollTo(leapY, timer * speed);
            leapY -= step;
            if (leapY < stopY)
                leapY = stopY;
            timer++;
        }
    };
    Scrollspy.prototype.currentYPosition = function () {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset)
            return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop)
            return document.body.scrollTop;
        return 0;
    };
    Scrollspy.prototype.elmYPosition = function (eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    };
    return Scrollspy;
}());
exports.Scrollspy = Scrollspy;
//# sourceMappingURL=Scrollspy.js.map