/**
 * Scrollspy
 */
import { Inject } from '@angular/core'
import { WindowRef } from '../services/window.service'



export class Scrollspy {

    // @Inject('Window') window: Window
    private window: Window
    

    constructor() {

        // initialize current window reference
        let _win = new WindowRef()
        this.window = _win.nativeWindow
    }


    scrollTo(yPoint: number, duration: number) {

        setTimeout(() => {
            this.window.scrollTo(0, yPoint)
        }, duration);
        return;
    }
    
    smoothScroll(eID) {
        
		var startY = this.currentYPosition();
		var stopY = this.elmYPosition(eID);
		var distance = stopY > startY ? stopY - startY : startY - stopY;
		if (distance < 100) {
			this.window.scrollTo(0, stopY); return;
		}
		var speed = Math.round(distance / 100);
		if (speed >= 20) speed = 20;
		var step = Math.round(distance / 100);
		var leapY = stopY > startY ? startY + step : startY - step;
		var timer = 0;
		if (stopY > startY) {
			for (var i = startY; i < stopY; i += step) {
				this.scrollTo(leapY, timer * speed);
				leapY += step; if (leapY > stopY) leapY = stopY; timer++;
			} return;
		}
		for (var i = startY; i > stopY; i -= step) {
			this.scrollTo(leapY, timer * speed);
			leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
		}
	}

    private currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
    }

    private elmYPosition(eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = <HTMLElement>node.offsetParent;
            y += node.offsetTop;
        } return y;
    }
}