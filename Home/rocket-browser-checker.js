"use strict";

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var RocketBrowserCompatibilityChecker = function () {
    function RocketBrowserCompatibilityChecker(options) {
        _classCallCheck(this, RocketBrowserCompatibilityChecker);
        this.passiveSupported = false;
        this._checkPassiveOption(this);
        this.options = !!this.passiveSupported && options;
    }

    _createClass(RocketBrowserCompatibilityChecker, [
        {
            key: "_checkPassiveOption",
            value: function (self) {
                try {
                    var options = {
                        get passive() {
                            return !(self.passiveSupported = true);
                        }
                    };
                    window.addEventListener("test", null, options);
                    window.removeEventListener("test", null, options);
                } catch (err) {
                    self.passiveSupported = false;
                }
            }
        },
        {
            key: "initRequestIdleCallback",
            value: function () {
                if (!("requestIdleCallback" in window)) {
                    window.requestIdleCallback = function (cb) {
                        var start = Date.now();
                        return setTimeout(function () {
                            cb({
                                didTimeout: false,
                                timeRemaining: function () {
                                    return Math.max(0, 50 - (Date.now() - start));
                                }
                            });
                        }, 1);
                    };
                }

                if (!("cancelIdleCallback" in window)) {
                    window.cancelIdleCallback = function (id) {
                        return clearTimeout(id);
                    };
                }
            }
        },
        {
            key: "isDataSaverModeOn",
            value: function () {
                return "connection" in navigator && navigator.connection.saveData === true;
            }
        },
        {
            key: "supportsLinkPrefetch",
            value: function () {
                var elem = document.createElement("link");
                return (
                    elem.relList &&
                    elem.relList.supports &&
                    elem.relList.supports("prefetch") &&
                    window.IntersectionObserver &&
                    "isIntersecting" in IntersectionObserverEntry.prototype
                );
            }
        },
        {
            key: "isSlowConnection",
            value: function () {
                return (
                    "connection" in navigator &&
                    "effectiveType" in navigator.connection &&
                    (navigator.connection.effectiveType === "2g" ||
                        navigator.connection.effectiveType === "slow-2g")
                );
            }
        }
    ]);

    return RocketBrowserCompatibilityChecker;
}();

// Ready-to-use function to initialize
(function () {
    if (typeof RocketPreloadLinksConfig !== "undefined") {
        new RocketBrowserCompatibilityChecker({ capture: true, passive: true }).initRequestIdleCallback();
    }
})();
