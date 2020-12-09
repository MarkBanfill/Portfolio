// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// fullPageScrollPureJS https://github.com/amendoa/fullPageScrollPureJS
(function() {
  'use strict';
  // Main function
  var fullScroll = function(params) {
    var main = document.getElementById('main');
    var sections = main.getElementsByTagName('section');
    var defaults = {
      container: main,
      sections: sections,
      animateTime: params.animateTime || 0.7,
      animateFunction: params.animateFunction || 'ease',
      maxPosition: sections.length - 1,
      currentPosition: 0,
      displayDots: typeof params.displayDots != 'undefined' ? params.displayDots : true,
			dotsPosition: params.dotsPosition || 'left'
    };
    this.defaults = defaults;
    this.init();
  };
  // Initialise plugin
  fullScroll.prototype.init = function() {
    this.buildPublicFunctions().buildSections().buildDots().addEvents();
    var anchor = location.hash.replace('#', '').split('/')[0];
    location.hash = 0;
    this.changeCurrentPosition(anchor);
    this.registerIeTags();
  };
  // Build sections
  fullScroll.prototype.buildSections = function() {
    var sections = this.defaults.sections;
    for (var i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-index', i);
    }
    return this;
  };

  // Build dots navigation
  fullScroll.prototype.buildDots = function () {
		this.ul = document.createElement('ul');
		this.ul.className = this.updateClass(1, 'dots', this.ul.className);
		//this.ul.className = this.updateClass(1, this.defaults.dotsPosition == 'right' ? 'dots-right' : 'dots-left', this.ul.className);
		var _self = this;
		var sections = this.defaults.sections;
		for (var i = 0; i < sections.length; i++) {
			var li = document.createElement('li');
			var a = document.createElement('a');
			a.setAttribute('href', '#' + i);
			li.appendChild(a);
			_self.ul.appendChild(li);
		}
		this.ul.childNodes[0].firstChild.className = this.updateClass(1, 'active', this.ul.childNodes[0].firstChild.className);
		if (this.defaults.displayDots) {
			document.body.appendChild(this.ul);
		}
		return this;
	};
  // Add events
  fullScroll.prototype.addEvents = function() {
    if (document.addEventListener) {
      document.addEventListener('mousewheel', this.mouseWheelAndKey, false);
      document.addEventListener('wheel', this.mouseWheelAndKey, false);
      document.addEventListener('keyup', this.mouseWheelAndKey, false);
      document.addEventListener('touchstart', this.touchStart, false);
      document.addEventListener('touchend', this.touchEnd, false);
      window.addEventListener("hashchange", this.hashChange, false);
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (!('ontouchstart' in window)) {
          document.body.style = "overflow: scroll;";
          document.documentElement.style = "overflow: scroll;";
        }
      }
    } else {
      document.attachEvent('onmousewheel', this.mouseWheelAndKey, false);
      document.attachEvent('onkeyup', this.mouseWheelAndKey, false);
    }
    return this;
  };
  // Build public functions
  fullScroll.prototype.buildPublicFunctions = function() {
    var mTouchStart = 0;
    var mTouchEnd = 0;
    var _self = this;
    this.mouseWheelAndKey = function(event) {
      // Added by MB to check if portfolio screenshot preview is open
      var preview = document.getElementById('container');
      if (preview != null) {
        if (preview.classList.contains('pushback')) {
          return false;
        }
      }
      if (event.deltaY > 0 || event.keyCode == 40) {
        _self.defaults.currentPosition++;
        _self.changeCurrentPosition(_self.defaults.currentPosition);
      } else if (event.deltaY < 0 || event.keyCode == 38) {
        _self.defaults.currentPosition--;
        _self.changeCurrentPosition(_self.defaults.currentPosition);
      }
      _self.removeEvents();
    };
    this.touchStart = function(event) {
      mTouchStart = parseInt(event.changedTouches[0].clientY);
      mTouchEnd = 0;
    };
    this.touchEnd = function(event) {
      // Added by MB to check if portfolio screenshot preview is open
      var preview = document.getElementById('container');
      if (preview != null) {
        if (preview.classList.contains('pushback')) {
          return false;
        }
      }
      mTouchEnd = parseInt(event.changedTouches[0].clientY);
      if (mTouchEnd - mTouchStart > 100 || mTouchStart - mTouchEnd > 100) {
        if (mTouchEnd > mTouchStart) {
          _self.defaults.currentPosition--;
        } else {
          _self.defaults.currentPosition++;
        }
        _self.changeCurrentPosition(_self.defaults.currentPosition);
      }
    };
    this.hashChange = function(event) {
      if (location) {
        var anchor = location.hash.replace('#', '').split('/')[0];
        if (anchor !== "") {
          if (anchor < 0) {
            _self.changeCurrentPosition(0);
          } else if (anchor > _self.defaults.maxPosition) {
            _self.changeCurrentPosition(_self.defaults.maxPosition);
          } else {
            _self.defaults.currentPosition = anchor;
            _self.animateScroll();
          }
        }
      }
    };
    // Remove events for just over 1 second to allow animation to finish
    this.removeEvents = function() {
      if (document.addEventListener) {
        document.removeEventListener('mousewheel', this.mouseWheelAndKey, false);
        document.removeEventListener('wheel', this.mouseWheelAndKey, false);
        document.removeEventListener('keyup', this.mouseWheelAndKey, false);
        document.removeEventListener('touchstart', this.touchStart, false);
        document.removeEventListener('touchend', this.touchEnd, false);
      } else {
        document.detachEvent('onmousewheel', this.mouseWheelAndKey, false);
        document.detachEvent('onkeyup', this.mouseWheelAndKey, false);
      }
      setTimeout(function() {
        _self.addEvents();
      }, 1100);
    };
    // Setup animation
    this.animateScroll = function() {
      var animateTime = this.defaults.animateTime;
      var animateFunction = this.defaults.animateFunction;
      var position = this.defaults.currentPosition * 100;
      var sections = this.defaults.sections;
      this.defaults.container.style.webkitTransform = 'translateY(-' + position + '%)';
      this.defaults.container.style.mozTransform = 'translateY(-' + position + '%)';
      this.defaults.container.style.msTransform = 'translateY(-' + position + '%)';
      this.defaults.container.style.transform = 'translateY(-' + position + '%)';
      this.defaults.container.style.webkitTransition = 'all ' + animateTime + 's ' + animateFunction;
      this.defaults.container.style.mozTransition = 'all ' + animateTime + 's ' + animateFunction;
      this.defaults.container.style.msTransition = 'all ' + animateTime + 's ' + animateFunction;
      this.defaults.container.style.transition = 'all ' + animateTime + 's ' + animateFunction;
      for (var i = 0; i < this.ul.childNodes.length; i++) {
					this.ul.childNodes[i].firstChild.className = this.updateClass(2, 'active', this.ul.childNodes[i].firstChild.className);
          sections[i].className = this.updateClass(2, 'active', sections[i].className);
					if (i == this.defaults.currentPosition) {
					this.ul.childNodes[i].firstChild.className = this.updateClass(1, 'active', this.ul.childNodes[i].firstChild.className);
          sections[i].className = this.updateClass(1, 'active', sections[i].className);
				}
			}
    };
    // Perform the position change
    this.changeCurrentPosition = function(position) {
      if (position !== "") {
        if (position < 0) {
          position = 0;
        }
        if (position > this.defaults.maxPosition) {
          position = this.defaults.maxPosition;
        }
        _self.defaults.currentPosition = position;
        location.hash = _self.defaults.currentPosition;
      }
    };
    this.registerIeTags = function () {
			document.createElement('section');
		};
    // Update class on dots navigation
    this.updateClass = function (type, newClass, currentClass) {
			if (type == 1) {
				return currentClass += '' + newClass;
			} else if (type == 2) {
				return currentClass.replace(newClass, '');
			}
		};
    return this;
  };
  window.fullScroll = fullScroll;
})();
