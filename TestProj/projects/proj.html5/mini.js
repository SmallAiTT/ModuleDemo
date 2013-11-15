function ClassManager() {
    return arguments.callee.name || arguments.callee.toString().match(/^function ([^(]+)/)[1];
}

var cc = cc || {};

cc.loadGame = function(t) {
    return t();
}, cc.getRes4GameModule = function(t) {
    var e = cc.res4GameModules[t];
    if (!e) return [];
    for (var i = [], n = 0; n < e.length; ++n) i.push({
        src: e[n]
    });
    return i;
}, cc.loadGameModule = function(t, e) {
    var i = cc.res4GameModules[t];
    if (!i) return e([]);
    for (var n = [], r = 0; r < i.length; ++r) n.push({
        src: i[r]
    });
    e(n);
};

var res = {
    bg_1_jpg: "bg_1.jpg",
    btnbg_1_png: "btnbg_1.png"
}, js_TestProj = {
    Sprite_js: "_0",
    Layer_js: "_1"
};

cc.res4GameModules = {}, cc.res4GameModules[js_TestProj.Sprite_js] = [ res.btnbg_1_png, res.bg_1_jpg ], 
cc.res4GameModules[js_TestProj.Layer_js] = [ res.btnbg_1_png, res.bg_1_jpg ];

var cc = cc || {};

ClassManager.id = 0 | 998 * Math.random(), ClassManager.compileSuper = function(t, e, i) {
    var n = t.toString(), r = n.indexOf("("), c = n.indexOf(")"), o = n.substring(r + 1, c);
    o = o.trim();
    for (var s = n.indexOf("{"), a = n.lastIndexOf("}"), n = n.substring(s + 1, a); -1 != n.indexOf("this._super"); ) {
        var h = n.indexOf("this._super"), u = n.indexOf("(", h), l = n.indexOf(")", u), _ = n.substring(u + 1, l);
        _ = _.trim();
        var d = _ ? "," : "", f = arguments.callee.ClassManager();
        n = n.substring(0, h) + f + "[" + i + "]." + e + ".call(this" + d + n.substring(u + 1);
    }
    return Function(o, n);
}, ClassManager.compileSuper.ClassManager = ClassManager, ClassManager.getNewID = function() {
    return this.id++;
}, function() {
    var t = /\b_super\b/, e = document.ccConfig && document.ccConfig.CLASS_RELEASE_MODE ? document.ccConfig.CLASS_RELEASE_MODE : null;
    e && console.log("release Mode"), cc.Class = function() {}, cc.Class.extend = function(i) {
        function n() {
            this.ctor && this.ctor.apply(this, arguments);
        }
        var r = this.prototype, c = Object.create(r), o = ClassManager.getNewID();
        ClassManager[o] = r;
        var s = {
            writable: !0,
            enumerable: !1,
            configurable: !0
        };
        for (var a in i) e && "function" == typeof i[a] && "function" == typeof r[a] && t.test(i[a]) ? (s.value = ClassManager.compileSuper(i[a], a, o), 
        Object.defineProperty(c, a, s)) : "function" == typeof i[a] && "function" == typeof r[a] && t.test(i[a]) ? (s.value = function(t, e) {
            return function() {
                var i = this._super;
                this._super = r[t];
                var n = e.apply(this, arguments);
                return this._super = i, n;
            };
        }(a, i[a]), Object.defineProperty(c, a, s)) : "function" == typeof i[a] ? (s.value = i[a], 
        Object.defineProperty(c, a, s)) : c[a] = i[a];
        return n.id = o, s.value = o, Object.defineProperty(c, "__pid", s), n.prototype = c, 
        s.value = n, Object.defineProperty(n.prototype, "constructor", s), n.extend = arguments.callee, 
        n.implement = function(t) {
            for (var e in t) c[e] = t[e];
        }, n;
    }, Function.prototype.bind = Function.prototype.bind || function(t) {
        var e = this;
        return function() {
            var i = Array.prototype.slice.call(arguments);
            return e.apply(t || null, i);
        };
    };
}(), cc.inherits = function(t, e) {
    function i() {}
    i.prototype = e.prototype, t.superClass_ = e.prototype, t.prototype = new i(), t.prototype.constructor = t;
}, cc.base = function(t, e) {
    var i = arguments.callee.caller;
    if (i.superClass_) return ret = i.superClass_.constructor.apply(t, Array.prototype.slice.call(arguments, 1));
    for (var n = Array.prototype.slice.call(arguments, 2), r = !1, c = t.constructor; c; c = c.superClass_ && c.superClass_.constructor) if (c.prototype[e] === i) r = !0; else if (r) return c.prototype[e].apply(t, n);
    if (t[e] === i) return t.constructor.prototype[e].apply(t, n);
    throw Error("cc.base called from a method of one name to a method of a different name");
}, cc.concatObjectProperties = function(t, e) {
    t || (t = {});
    for (var i in e) t[i] = e[i];
    return t;
}, cc.Point = function(t, e) {
    this.x = t || 0, this.y = e || 0;
}, cc.PointMake = function(t, e) {
    return cc.log("cc.PointMake will be deprecated sooner or later. Use cc.p instead."), 
    new cc.Point(t, e);
}, cc.p = function(t, e) {
    return new cc.Point(t, e);
}, cc._p = cc.p, cc.PointZero = function() {
    return cc.p(0, 0);
}, Object.defineProperties(cc, {
    POINT_ZERO: {
        get: function() {
            return cc.p(0, 0);
        }
    },
    SIZE_ZERO: {
        get: function() {
            return cc.size(0, 0);
        }
    },
    RECT_ZERO: {
        get: function() {
            return cc.rect(0, 0, 0, 0);
        }
    }
}), cc.pointEqualToPoint = function(t, e) {
    return t && e ? t.x === e.x && t.y === e.y : !1;
}, cc.Size = function(t, e) {
    this.width = t || 0, this.height = e || 0;
}, cc.SizeMake = function(t, e) {
    return cc.log("cc.SizeMake will be deprecated sooner or later. Use cc.size instead."), 
    cc.size(t, e);
}, cc.size = function(t, e) {
    return new cc.Size(t, e);
}, cc._size = cc.size, cc.SizeZero = function() {
    return cc.size(0, 0);
}, cc.sizeEqualToSize = function(t, e) {
    return t && e ? t.width == e.width && t.height == e.height : !1;
}, cc.Rect = function(t, e, i, n) {
    switch (arguments.length) {
      case 0:
        this.origin = cc.p(0, 0), this.size = cc.size(0, 0);
        break;

      case 1:
        var r = t;
        if (r) {
            if (!(r instanceof cc.Rect)) throw "unknown argument type";
            this.origin = cc.p(r.origin.x, r.origin.y), this.size = cc.size(r.size.width, r.size.height);
        } else this.origin = cc.p(0, 0), this.size = cc.size(0, 0);
        break;

      case 2:
        this.origin = t ? cc.p(t.x, t.y) : cc.p(0, 0), this.size = e ? cc.size(e.width, e.height) : cc.size(0, 0);
        break;

      case 4:
        this.origin = cc.p(t || 0, e || 0), this.size = cc.size(i || 0, n || 0);
        break;

      default:
        throw "unknown argument type";
    }
}, cc.RectMake = function(t, e, i, n) {
    return cc.log("cc.RectMake will be deprecated sooner or later. Use cc.rect instead."), 
    cc.rect(t, e, i, n);
}, cc.rect = function(t, e, i, n) {
    return new cc.Rect(t, e, i, n);
}, cc._rect = cc.rect, cc.RectZero = function() {
    return cc.rect(0, 0, 0, 0);
}, cc.rectEqualToRect = function(t, e) {
    return t && e ? cc.pointEqualToPoint(t.origin, e.origin) && cc.sizeEqualToSize(t.size, e.size) : !1;
}, cc._rectEqualToZero = function(t) {
    return t ? 0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height : !1;
}, cc.rectContainsRect = function(t, e) {
    return t && e ? !(t.x >= e.x || t.y >= e.y || t.x + t.width <= e.x + e.width || t.y + t.height <= e.y + e.height) : !1;
}, cc.rectGetMaxX = function(t) {
    return t.x + t.width;
}, cc.rectGetMidX = function(t) {
    return t.x + t.width / 2;
}, cc.rectGetMinX = function(t) {
    return t.x;
}, cc.rectGetMaxY = function(t) {
    return t.y + t.height;
}, cc.rectGetMidY = function(t) {
    return t.y + t.height / 2;
}, cc.rectGetMinY = function(t) {
    return t.y;
}, cc.rectContainsPoint = function(t, e) {
    return e.x >= cc.rectGetMinX(t) && e.x <= cc.rectGetMaxX(t) && e.y >= cc.rectGetMinY(t) && e.y <= cc.rectGetMaxY(t);
}, cc.rectIntersectsRect = function(t, e) {
    return !(cc.rectGetMaxX(t) < cc.rectGetMinX(e) || cc.rectGetMaxX(e) < cc.rectGetMinX(t) || cc.rectGetMaxY(t) < cc.rectGetMinY(e) || cc.rectGetMaxY(e) < cc.rectGetMinY(t));
}, cc.rectOverlapsRect = function(t, e) {
    return !(t.x + t.width < e.x || e.x + e.width < t.x || t.y + t.height < e.y || e.y + e.height < t.y);
}, cc.rectUnion = function(t, e) {
    var i = cc.rect(0, 0, 0, 0);
    return i.x = Math.min(t.x, e.x), i.y = Math.min(t.y, e.y), i.width = Math.max(t.x + t.width, e.x + e.width) - i.x, 
    i.height = Math.max(t.y + t.height, e.y + e.height) - i.y, i;
}, cc.rectIntersection = function(t, e) {
    var i = cc.rect(Math.max(cc.rectGetMinX(t), cc.rectGetMinX(e)), Math.max(cc.rectGetMinY(t), cc.rectGetMinY(e)), 0, 0);
    return i.width = Math.min(cc.rectGetMaxX(t), cc.rectGetMaxX(e)) - cc.rectGetMinX(i), 
    i.height = Math.min(cc.rectGetMaxY(t), cc.rectGetMaxY(e)) - cc.rectGetMinY(i), i;
}, cc.Rect.prototype.getX = function() {
    return this.origin.x;
}, cc.Rect.prototype.setX = function(t) {
    this.origin.x = t;
}, cc.Rect.prototype.getY = function() {
    return this.origin.y;
}, cc.Rect.prototype.setY = function(t) {
    this.origin.y = t;
}, cc.Rect.prototype.getWidth = function() {
    return this.size.width;
}, cc.Rect.prototype.setWidth = function(t) {
    this.size.width = t;
}, cc.Rect.prototype.getHeight = function() {
    return this.size.height;
}, cc.Rect.prototype.setHeight = function(t) {
    this.size.height = t;
}, Object.defineProperties(cc.Rect.prototype, {
    x: {
        get: function() {
            return this.getX();
        },
        set: function(t) {
            this.setX(t);
        },
        enumerable: !0,
        configurable: !0
    },
    y: {
        get: function() {
            return this.getY();
        },
        set: function(t) {
            this.setY(t);
        },
        enumerable: !0,
        configurable: !0
    },
    width: {
        get: function() {
            return this.getWidth();
        },
        set: function(t) {
            this.setWidth(t);
        },
        enumerable: !0,
        configurable: !0
    },
    height: {
        get: function() {
            return this.getHeight();
        },
        set: function(t) {
            this.setHeight(t);
        },
        enumerable: !0,
        configurable: !0
    }
});

var sys = sys || {};

try {
    sys.localStorage = window.localStorage;
} catch (e) {
    "SECURITY_ERR" === e.name && cc.log("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option"), 
    sys.localStorage = function() {};
}

switch (Object.defineProperties(sys, {
    capabilities: {
        get: function() {
            var t = {
                canvas: !0
            };
            return cc.Browser.supportWebGL && (t.opengl = !0), "ontouchstart" in document.documentElement || window.navigator.msPointerEnabled ? t.touches = !0 : "onmouseup" in document.documentElement && (t.mouse = !0), 
            "onkeyup" in document.documentElement && (t.keyboard = !0), (window.DeviceMotionEvent || window.DeviceOrientationEvent) && (t.accelerometer = !0), 
            t;
        },
        enumerable: !0,
        configurable: !0
    },
    os: {
        get: function() {
            var t = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? !0 : !1, e = navigator.userAgent.match(/android/i) || navigator.platform.match(/android/i) ? !0 : !1, i = navigator.appVersion;
            return -1 != navigator.appVersion.indexOf("Win") ? i = "Windows" : -1 != navigator.appVersion.indexOf("Mac") ? i = "OS X" : -1 != navigator.appVersion.indexOf("X11") ? i = "UNIX" : -1 != navigator.appVersion.indexOf("Linux") ? i = "Linux" : t ? i = "iOS" : e && (i = "Android"), 
            i;
        },
        enumerable: !0,
        configurable: !0
    },
    platform: {
        get: function() {
            return "browser";
        },
        enumerable: !0,
        configurable: !0
    },
    version: {
        get: function() {
            return cc.ENGINE_VERSION;
        },
        enumerable: !0,
        configurable: !0
    }
}), sys.garbageCollect = function() {}, sys.dumpRoot = function() {}, sys.restartVM = function() {}, 
cc.ENGINE_VERSION = "Cocos2d-html5-v2.2", cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL = 0, 
cc.DIRECTOR_STATS_POSITION = cc.p(0, 0), cc.DIRECTOR_FPS_INTERVAL = .5, cc.COCOSNODE_RENDER_SUBPIXEL = 1, 
cc.SPRITEBATCHNODE_RENDER_SUBPIXEL = 1, cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA = 0, 
cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP = 0, cc.TEXTURE_ATLAS_USE_VAO = 0, cc.TEXTURE_NPOT_SUPPORT = 0, 
cc.RETINA_DISPLAY_SUPPORT = 1, cc.RETINA_DISPLAY_FILENAME_SUFFIX = "-hd", cc.USE_LA88_LABELS = 1, 
cc.SPRITE_DEBUG_DRAW = 0, cc.SPRITEBATCHNODE_DEBUG_DRAW = 0, cc.LABELBMFONT_DEBUG_DRAW = 0, 
cc.LABELATLAS_DEBUG_DRAW = 0, cc.IS_RETINA_DISPLAY_SUPPORTED = 1, cc.DEFAULT_ENGINE = cc.ENGINE_VERSION + "-canvas", 
cc.config = {
    platform: sys.platform
}, cc.dumpConfig = function() {
    for (var t in sys) cc.log(t + " = " + sys[t]);
}, cc.ENABLE_STACKABLE_ACTIONS = 1, cc.ENABLE_GL_STATE_CACHE = 1, cc.create3DContext = function(t, e) {
    for (var i = [ "webgl", "experimental-webgl", "webkit-3d", "moz-webgl" ], n = null, r = 0; r < i.length; ++r) {
        try {
            n = t.getContext(i[r], e);
        } catch (c) {}
        if (n) break;
    }
    return n;
}, cc.Browser = {}, function() {
    var t = navigator.userAgent;
    cc.Browser.ua = t.toLowerCase(), cc.Browser.platform = navigator.platform.toLowerCase(), 
    cc.Browser.isMobile = -1 != cc.Browser.ua.indexOf("mobile") || -1 != cc.Browser.ua.indexOf("android"), 
    cc.Browser.type = function() {
        var t = cc.Browser.ua.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baidubrowser|maxthon|ie|opera|firefox/) || cc.Browser.ua.match(/chrome|safari/);
        if (t && t.length > 0) {
            var e = t[0];
            return "micromessenger" == e ? "wechat" : e;
        }
        return "unknow";
    }(), cc.Browser.mode = "ie" == cc.Browser.type && document.documentMode, document.ccConfig || (document.ccConfig = {});
    var e = document.ccConfig;
    if (cc._userRenderMode = parseInt(e.renderMode) || 0, 1 === cc._userRenderMode || 0 === cc._userRenderMode && cc.Browser.isMobile) cc.Browser.supportWebGL = !1; else {
        cc.Browser.supportWebGL = !(null == window.WebGLRenderingContext);
        var i = document.createElement("Canvas"), n = cc.create3DContext(i, {
            stencil: !0,
            preserveDrawingBuffer: !0
        });
        cc.Browser.supportWebGL = !(null == n);
    }
    2 !== cc._userRenderMode || cc.Browser.supportWebGL || (cc.__renderDoesnotSupport = !0), 
    cc.Browser.supportWebAudio = function() {
        try {
            var t = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
            return t ? !0 : !1;
        } catch (e) {
            return !1;
        }
    }(), cc.Browser.openURL = function(t) {
        if (this.isMobile) {
            var e = cc.Director.getInstance().getWinSize(), i = e.width + "px", n = e.height + "px", r = cc.$new("div");
            r.style.backgroundColor = "#ffffff", r.style.width = i, r.style.height = n, r.style.zindex = 1e3, 
            r.style.position = "absolute", r.style.top = "0px", r.style.left = "0px", r.id = "cocos2d-browser";
            var c = cc.$new("iframe");
            c.src = t, c.style.width = i, c.style.height = n, c.setAttribute("frameborder", "no"), 
            c.setAttribute("scrolling", "no"), r.appendChild(c), c.onload = function() {
                var t = document.createElement("img");
                t.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OERBMEM3OUQzRTMxMUUyODg2Q0RFNjU1QkU1RjlFQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OERBMEM3QUQzRTMxMUUyODg2Q0RFNjU1QkU1RjlFQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk4REEwQzc3RDNFMzExRTI4ODZDREU2NTVCRTVGOUVBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk4REEwQzc4RDNFMzExRTI4ODZDREU2NTVCRTVGOUVBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NwBuoAAAA/tJREFUeNrEWF0sW3EUb6+28zFhbGadsBaNhazV+kpDYhFWKRGWbHvwFV5IvPiIFw9evElEPEiWSUgsIWoIglhmUomPxj6aKC0zKVJjtPU5o9j5J7dLdbf33jKc5Jfc3v+v5/+755x7/j1lMoiNBRDh4AO88HvO2m+ACbAC+AJQAyz2JCbBFyMBWQA/xv+3DUAXLuivudhcY4BMwCuAB+NqDPmNAnAAOsCZvQgk4BnjeiwEwAbM2YoQA14yrteQEANgDcML7gXjZgw9OAuJkADu3JAIb7Q/hr+GtCwuLs6LDq+iooLvhBAREhFEl11ZWRne0tIiIeNIpVKv4uJi4dTUVApNt0EY3ohILSIiwqO7u1sql8vD8vLyJJ2dnXH2HDabzczPz3/Y1taWzOfz78XExDxSq9Vyd3d3jMK9F2pWr6lEtLa2RmVnZ4tt7w0NDWlTU1OVtkK7urqSQ0NDzzW5hYWFjcTExAGDwXDkyD+VSkZ7e3tsWlpamP19mUwWplQqk9B1UlKST3NzczxE4K49D4mCiDwn24PyPMjIyHjs6urKIVpLSEgInp6eZsM6Kzw8nEvEMZvNBxC1BbI9KCMhkUgUy8vLRpL1QIFA4EcSyZmcnJzpS4mYnZ3dj46O7p2fn193xIGi/CeiFovlFIp5pqGhYZ5qD1qFiQxCjk1OTsqEQmEAFReloL+/X0sVAadFWE2n02VA+O+TcVZXV01QkO8ODw9P6fjEnO2zvb2936g4XC7XG4rWm65P2iL8/f05kN8nBQUFQkqnGMYcGBjIys3N5dLxjY7ydDrE6urqsNLSUqmbmxuH1tOBkMzMTIHRaNxSqVTmS4soKyvjFRUViTw9PV2dTR901WAOh7M/MjKyeeHCbGpqEhcWFkY5Wl9aWtpUKBRaONziSbsii/Xm5OTk7EIdU6/X7zpaW1xc/Al5HxkfH9/e2dk5rqmpeUrE6+vr06ADzpEIlI5kMjFwPhh5PB5DJBKdK7KDg4Oj2tpaVUdHxw/0eWxszIjyj8Jvy4N60FdVVX2Grnt4dkaowYJESAG3yaLR09Oz5uvrexwbGxuAR2erpKTkI6RqxW5DM6RnLT09PQQV5vDwsDYlJWUU+I4EIDMhEQLAA6q0DA4OrqMCg/c/qL6+XtXY2Kgn4sGJuavRaFbFYrFPeXn5FIj6ReFa64KnIpJOpaMK39vbM9XV1X13lF9kc3Nz+xMTEwZo89s03A4ycRE1N/RjF/WPKgyfDRU39Gu7w1qYyNYAtwDB1yhgGPDBfgzU4bMi7xoEjAI6iWZRdGMGH80Cr2goRlP5W8B7qwBHfw1YO6kEH4yC8EnJ5QKbnuDFh17nr4BPRP9P/BFgAHo7ZNgI9EbHAAAAAElFTkSuQmCC", 
                r.appendChild(t), t.style.zindex = 1e3, t.style.position = "absolute", t.style.bottom = "10px", 
                t.style.right = "10px", t.onclick = function() {
                    r.remove();
                };
            };
            var o = document.ccConfig.tag, s = document.getElementById(o).parentNode;
            s && s.appendChild(r);
        } else window.open(t);
    };
}(), cc.RenderDoesnotSupport = function() {
    return "undefined" === cc.__renderDoesnotSupport ? !1 : cc.__renderDoesnotSupport;
}, cc.$ = function(t) {
    var e = this == cc ? document : this, i = t instanceof HTMLElement ? t : e.querySelector(t);
    return i && (i.find = i.find || cc.$, i.hasClass = i.hasClass || function(t) {
        return this.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"));
    }, i.addClass = i.addClass || function(t) {
        return this.hasClass(t) || (this.className && (this.className += " "), this.className += t), 
        this;
    }, i.removeClass = i.removeClass || function(t) {
        return this.hasClass(t) && (this.className = this.className.replace(t, "")), this;
    }, i.remove = i.remove || function() {
        return this.parentNode && this.parentNode.removeChild(this), this;
    }, i.appendTo = i.appendTo || function(t) {
        return t.appendChild(this), this;
    }, i.prependTo = i.prependTo || function(t) {
        return t.childNodes[0] ? t.insertBefore(this, t.childNodes[0]) : t.appendChild(this), 
        this;
    }, i.transforms = i.transforms || function() {
        return this.style[cc.$.trans] = cc.$.translate(this.position) + cc.$.rotate(this.rotation) + cc.$.scale(this.scale) + cc.$.skew(this.skew), 
        this;
    }, i.position = i.position || {
        x: 0,
        y: 0
    }, i.rotation = i.rotation || 0, i.scale = i.scale || {
        x: 1,
        y: 1
    }, i.skew = i.skew || {
        x: 0,
        y: 0
    }, i.translates = function(t, e) {
        return this.position.x = t, this.position.y = e, this.transforms(), this;
    }, i.rotate = function(t) {
        return this.rotation = t, this.transforms(), this;
    }, i.resize = function(t, e) {
        return this.scale.x = t, this.scale.y = e, this.transforms(), this;
    }, i.setSkew = function(t, e) {
        return this.skew.x = t, this.skew.y = e, this.transforms(), this;
    }), i;
}, cc.Browser.type) {
  case "firefox":
    cc.$.pfx = "Moz", cc.$.hd = !0;
    break;

  case "chrome":
  case "safari":
    cc.$.pfx = "webkit", cc.$.hd = !0;
    break;

  case "opera":
    cc.$.pfx = "O", cc.$.hd = !1;
    break;

  case "ie":
    cc.$.pfx = "ms", cc.$.hd = !1;
    break;

  default:
    cc.$.pfx = "webkit", cc.$.hd = !0;
}

if (cc.$.trans = cc.$.pfx + "Transform", cc.$.translate = cc.$.hd ? function(t) {
    return "translate3d(" + t.x + "px, " + t.y + "px, 0) ";
} : function(t) {
    return "translate(" + t.x + "px, " + t.y + "px) ";
}, cc.$.rotate = cc.$.hd ? function(t) {
    return "rotateZ(" + t + "deg) ";
} : function(t) {
    return "rotate(" + t + "deg) ";
}, cc.$.scale = function(t) {
    return "scale(" + t.x + ", " + t.y + ") ";
}, cc.$.skew = function(t) {
    return "skewX(" + -t.x + "deg) skewY(" + t.y + "deg)";
}, cc.$new = function(t) {
    return cc.$(document.createElement(t));
}, cc.$.findpos = function(t) {
    var e = 0, i = 0;
    do e += t.offsetLeft, i += t.offsetTop; while (t = t.offsetParent);
    return {
        x: e,
        y: i
    };
}, cc.clone = function(t) {
    var e = t.constructor ? new t.constructor() : {};
    for (var i in t) {
        var n = t[i];
        e[i] = "object" != typeof n || !n || n instanceof cc.Node || n instanceof HTMLElement ? n : cc.clone(n);
    }
    return e;
}, cc.associateWithNative = function() {}, cc.IS_SHOW_DEBUG_ON_PAGE = cc.IS_SHOW_DEBUG_ON_PAGE || !1, 
cc._logToWebPage = function(t) {
    var e = document.getElementById("logInfoList");
    if (!e) {
        var i = document.createElement("Div");
        i.setAttribute("id", "logInfoDiv"), cc.canvas.parentNode.appendChild(i), i.setAttribute("width", "300"), 
        i.setAttribute("height", cc.canvas.height), i.style.zIndex = "99999", i.style.position = "absolute", 
        i.style.top = "0", i.style.left = "0", e = document.createElement("ul"), i.appendChild(e), 
        e.setAttribute("id", "logInfoList"), e.style.height = "450px", e.style.color = "#fff", 
        e.style.textAlign = "left", e.style.listStyle = "disc outside", e.style.fontSize = "12px", 
        e.style.fontFamily = "arial", e.style.padding = "0 0 0 20px", e.style.margin = "0", 
        e.style.textShadow = "0 0 3px #000", e.style.zIndex = "99998", e.style.position = "absolute", 
        e.style.top = "0", e.style.left = "0", e.style.overflowY = "hidden";
        var n = document.createElement("Div");
        i.appendChild(n), n.style.width = "300px", n.style.height = cc.canvas.height + "px", 
        n.style.opacity = "0.1", n.style.background = "#fff", n.style.border = "1px solid #dfdfdf", 
        n.style.borderRadius = "8px";
    }
    var r = document.createElement("li");
    r.innerHTML = t, 0 == e.childNodes.length ? e.appendChild(r) : e.insertBefore(r, e.childNodes[0]);
}, cc.log = function(t) {
    cc.IS_SHOW_DEBUG_ON_PAGE ? cc._logToWebPage(t) : console.log(t);
}, cc.MessageBox = function(t) {
    console.log(t);
}, cc.Assert = function(t, e) {
    console.assert ? console.assert(t, e) : t || e && alert(e);
}, cc.initDebugSetting = function() {
    0 == cc.COCOS2D_DEBUG ? (cc.log = function() {}, cc.logINFO = function() {}, cc.logERROR = function() {}, 
    cc.Assert = function() {}) : 1 == cc.COCOS2D_DEBUG ? (cc.logINFO = cc.log, cc.logERROR = function() {}) : cc.COCOS2D_DEBUG > 1 && (cc.logINFO = cc.log, 
    cc.logERROR = cc.log);
}, cc.LANGUAGE_ENGLISH = 0, cc.LANGUAGE_CHINESE = 1, cc.LANGUAGE_FRENCH = 2, cc.LANGUAGE_ITALIAN = 3, 
cc.LANGUAGE_GERMAN = 4, cc.LANGUAGE_SPANISH = 5, cc.LANGUAGE_RUSSIAN = 6, cc.LANGUAGE_KOREAN = 7, 
cc.LANGUAGE_JAPANESE = 8, cc.LANGUAGE_HUNGARIAN = 9, cc.LANGUAGE_PORTUGUESE = 10, 
cc.LANGUAGE_ARABIC = 11, cc.LANGUAGE_NORWEGIAN = 12, cc.LANGUAGE_POLISH = 13, cc.Codec = {
    name: "Jacob__Codec"
}, cc.unzip = function() {
    return cc.Codec.GZip.gunzip.apply(cc.Codec.GZip, arguments);
}, cc.unzipBase64 = function() {
    var t = cc.Codec.Base64.decode.apply(cc.Codec.Base64, arguments);
    return cc.Codec.GZip.gunzip.apply(cc.Codec.GZip, [ t ]);
}, cc.unzipBase64AsArray = function(t, e) {
    e = e || 1;
    var i, n, r, c = this.unzipBase64(t), o = [];
    for (i = 0, r = c.length / e; r > i; i++) for (o[i] = 0, n = e - 1; n >= 0; --n) o[i] += c.charCodeAt(i * e + n) << 8 * n;
    return o;
}, cc.unzipAsArray = function(t, e) {
    e = e || 1;
    var i, n, r, c = this.unzip(t), o = [];
    for (i = 0, r = c.length / e; r > i; i++) for (o[i] = 0, n = e - 1; n >= 0; --n) o[i] += c.charCodeAt(i * e + n) << 8 * n;
    return o;
}, cc.StringToArray = function(t) {
    var e, i = t.split(","), n = [];
    for (e = 0; e < i.length; e++) n.push(parseInt(i[e]));
    return n;
}, cc.Codec.Base64 = {
    name: "Jacob__Codec__Base64"
}, cc.Codec.Base64._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", 
cc.Codec.Base64.decode = function(t) {
    var e, i, n, r, c, o, s, a = [], h = 0;
    for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < t.length; ) r = this._keyStr.indexOf(t.charAt(h++)), 
    c = this._keyStr.indexOf(t.charAt(h++)), o = this._keyStr.indexOf(t.charAt(h++)), 
    s = this._keyStr.indexOf(t.charAt(h++)), e = r << 2 | c >> 4, i = (15 & c) << 4 | o >> 2, 
    n = (3 & o) << 6 | s, a.push(String.fromCharCode(e)), 64 != o && a.push(String.fromCharCode(i)), 
    64 != s && a.push(String.fromCharCode(n));
    return a = a.join("");
}, cc.Codec.Base64.decodeAsArray = function(t, e) {
    var i, n, r, c = this.decode(t), o = [];
    for (i = 0, r = c.length / e; r > i; i++) for (o[i] = 0, n = e - 1; n >= 0; --n) o[i] += c.charCodeAt(i * e + n) << 8 * n;
    return o;
}, cc.uint8ArrayToUint32Array = function(t) {
    if (t.length % 4 != 0) return null;
    for (var e = t.length / 4, i = window.Uint32Array ? new Uint32Array(e) : [], n = 0; e > n; n++) {
        var r = 4 * n;
        i[n] = t[r] + 256 * t[r + 1] + 65536 * t[r + 2] + t[r + 3] * (1 << 24);
    }
    return i;
}, cc.Codec.GZip = function(t) {
    this.data = t, this.debug = !1, this.gpflags = void 0, this.files = 0, this.unzipped = [], 
    this.buf32k = new Array(32768), this.bIdx = 0, this.modeZIP = !1, this.bytepos = 0, 
    this.bb = 1, this.bits = 0, this.nameBuf = [], this.fileout = void 0, this.literalTree = new Array(cc.Codec.GZip.LITERALS), 
    this.distanceTree = new Array(32), this.treepos = 0, this.Places = null, this.len = 0, 
    this.fpos = new Array(17), this.fpos[0] = 0, this.flens = void 0, this.fmax = void 0;
}, cc.Codec.GZip.gunzip = function(t) {
    t.constructor === Array || t.constructor === String;
    var e = new cc.Codec.GZip(t);
    return e.gunzip()[0][0];
}, cc.Codec.GZip.HufNode = function() {
    this.b0 = 0, this.b1 = 0, this.jump = null, this.jumppos = -1;
}, cc.Codec.GZip.LITERALS = 288, cc.Codec.GZip.NAMEMAX = 256, cc.Codec.GZip.bitReverse = [ 0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47, 175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255 ], 
cc.Codec.GZip.cplens = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0 ], 
cc.Codec.GZip.cplext = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99 ], 
cc.Codec.GZip.cpdist = [ 1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577 ], 
cc.Codec.GZip.cpdext = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ], 
cc.Codec.GZip.border = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ], 
cc.Codec.GZip.prototype.gunzip = function() {
    return this.outputArr = [], this.nextFile(), this.unzipped;
}, cc.Codec.GZip.prototype.readByte = function() {
    return this.bits += 8, this.bytepos < this.data.length ? this.data.charCodeAt(this.bytepos++) : -1;
}, cc.Codec.GZip.prototype.byteAlign = function() {
    this.bb = 1;
}, cc.Codec.GZip.prototype.readBit = function() {
    var t;
    return this.bits++, t = 1 & this.bb, this.bb >>= 1, 0 == this.bb && (this.bb = this.readByte(), 
    t = 1 & this.bb, this.bb = this.bb >> 1 | 128), t;
}, cc.Codec.GZip.prototype.readBits = function(t) {
    for (var e = 0, i = t; i--; ) e = e << 1 | this.readBit();
    return t && (e = cc.Codec.GZip.bitReverse[e] >> 8 - t), e;
}, cc.Codec.GZip.prototype.flushBuffer = function() {
    this.bIdx = 0;
}, cc.Codec.GZip.prototype.addBuffer = function(t) {
    this.buf32k[this.bIdx++] = t, this.outputArr.push(String.fromCharCode(t)), 32768 == this.bIdx && (this.bIdx = 0);
}, cc.Codec.GZip.prototype.IsPat = function() {
    for (;;) {
        if (this.fpos[this.len] >= this.fmax) return -1;
        if (this.flens[this.fpos[this.len]] == this.len) return this.fpos[this.len]++;
        this.fpos[this.len]++;
    }
}, cc.Codec.GZip.prototype.Rec = function() {
    var t, e = this.Places[this.treepos];
    if (17 == this.len) return -1;
    if (this.treepos++, this.len++, t = this.IsPat(), t >= 0) e.b0 = t; else if (e.b0 = 32768, 
    this.Rec()) return -1;
    if (t = this.IsPat(), t >= 0) e.b1 = t, e.jump = null; else if (e.b1 = 32768, e.jump = this.Places[this.treepos], 
    e.jumppos = this.treepos, this.Rec()) return -1;
    return this.len--, 0;
}, cc.Codec.GZip.prototype.CreateTree = function(t, e, i) {
    var n;
    for (this.Places = t, this.treepos = 0, this.flens = i, this.fmax = e, n = 0; 17 > n; n++) this.fpos[n] = 0;
    return this.len = 0, this.Rec() ? -1 : 0;
}, cc.Codec.GZip.prototype.DecodeValue = function(t) {
    for (var e, i, n, r = 0, c = t[r]; ;) if (n = this.readBit()) {
        if (!(32768 & c.b1)) return c.b1;
        for (c = c.jump, e = t.length, i = 0; e > i; i++) if (t[i] === c) {
            r = i;
            break;
        }
    } else {
        if (!(32768 & c.b0)) return c.b0;
        r++, c = t[r];
    }
    return -1;
}, cc.Codec.GZip.prototype.DeflateLoop = function() {
    var t, e, i, n, r;
    do if (t = this.readBit(), i = this.readBits(2), 0 == i) {
        var c, o;
        for (this.byteAlign(), c = this.readByte(), c |= this.readByte() << 8, o = this.readByte(), 
        o |= this.readByte() << 8, 65535 & (c ^ ~o) && document.write("BlockLen checksum mismatch\n"); c--; ) e = this.readByte(), 
        this.addBuffer(e);
    } else if (1 == i) for (var s; ;) if (s = cc.Codec.GZip.bitReverse[this.readBits(7)] >> 1, 
    s > 23 ? (s = s << 1 | this.readBit(), s > 199 ? (s -= 128, s = s << 1 | this.readBit()) : (s -= 48, 
    s > 143 && (s += 136))) : s += 256, 256 > s) this.addBuffer(s); else {
        if (256 == s) break;
        var r, a;
        for (s -= 257, r = this.readBits(cc.Codec.GZip.cplext[s]) + cc.Codec.GZip.cplens[s], 
        s = cc.Codec.GZip.bitReverse[this.readBits(5)] >> 3, cc.Codec.GZip.cpdext[s] > 8 ? (a = this.readBits(8), 
        a |= this.readBits(cc.Codec.GZip.cpdext[s] - 8) << 8) : a = this.readBits(cc.Codec.GZip.cpdext[s]), 
        a += cc.Codec.GZip.cpdist[s], s = 0; r > s; s++) {
            var e = this.buf32k[this.bIdx - a & 32767];
            this.addBuffer(e);
        }
    } else if (2 == i) {
        var s, h, u, l, _, d = new Array(320);
        for (u = 257 + this.readBits(5), l = 1 + this.readBits(5), _ = 4 + this.readBits(4), 
        s = 0; 19 > s; s++) d[s] = 0;
        for (s = 0; _ > s; s++) d[cc.Codec.GZip.border[s]] = this.readBits(3);
        for (r = this.distanceTree.length, n = 0; r > n; n++) this.distanceTree[n] = new cc.Codec.GZip.HufNode();
        if (this.CreateTree(this.distanceTree, 19, d, 0)) return this.flushBuffer(), 1;
        h = u + l, n = 0;
        for (var f = -1; h > n; ) if (f++, s = this.DecodeValue(this.distanceTree), 16 > s) d[n++] = s; else if (16 == s) {
            var p;
            if (s = 3 + this.readBits(2), n + s > h) return this.flushBuffer(), 1;
            for (p = n ? d[n - 1] : 0; s--; ) d[n++] = p;
        } else {
            if (s = 17 == s ? 3 + this.readBits(3) : 11 + this.readBits(7), n + s > h) return this.flushBuffer(), 
            1;
            for (;s--; ) d[n++] = 0;
        }
        for (r = this.literalTree.length, n = 0; r > n; n++) this.literalTree[n] = new cc.Codec.GZip.HufNode();
        if (this.CreateTree(this.literalTree, u, d, 0)) return this.flushBuffer(), 1;
        for (r = this.literalTree.length, n = 0; r > n; n++) this.distanceTree[n] = new cc.Codec.GZip.HufNode();
        var g = new Array();
        for (n = u; n < d.length; n++) g[n - u] = d[n];
        if (this.CreateTree(this.distanceTree, l, g, 0)) return this.flushBuffer(), 1;
        for (;;) if (s = this.DecodeValue(this.literalTree), s >= 256) {
            var r, a;
            if (s -= 256, 0 == s) break;
            for (s--, r = this.readBits(cc.Codec.GZip.cplext[s]) + cc.Codec.GZip.cplens[s], 
            s = this.DecodeValue(this.distanceTree), cc.Codec.GZip.cpdext[s] > 8 ? (a = this.readBits(8), 
            a |= this.readBits(cc.Codec.GZip.cpdext[s] - 8) << 8) : a = this.readBits(cc.Codec.GZip.cpdext[s]), 
            a += cc.Codec.GZip.cpdist[s]; r--; ) {
                var e = this.buf32k[this.bIdx - a & 32767];
                this.addBuffer(e);
            }
        } else this.addBuffer(s);
    } while (!t);
    return this.flushBuffer(), this.byteAlign(), 0;
}, cc.Codec.GZip.prototype.unzipFile = function(t) {
    var e;
    for (this.gunzip(), e = 0; e < this.unzipped.length; e++) if (this.unzipped[e][1] == t) return this.unzipped[e][0];
}, cc.Codec.GZip.prototype.nextFile = function() {
    this.outputArr = [], this.modeZIP = !1;
    var t = [];
    if (t[0] = this.readByte(), t[1] = this.readByte(), 120 == t[0] && 218 == t[1] && (this.DeflateLoop(), 
    this.unzipped[this.files] = [ this.outputArr.join(""), "geonext.gxt" ], this.files++), 
    31 == t[0] && 139 == t[1] && (this.skipdir(), this.unzipped[this.files] = [ this.outputArr.join(""), "file" ], 
    this.files++), 80 == t[0] && 75 == t[1] && (this.modeZIP = !0, t[2] = this.readByte(), 
    t[3] = this.readByte(), 3 == t[2] && 4 == t[3])) {
        t[0] = this.readByte(), t[1] = this.readByte(), this.gpflags = this.readByte(), 
        this.gpflags |= this.readByte() << 8;
        var e = this.readByte();
        e |= this.readByte() << 8, this.readByte(), this.readByte(), this.readByte(), this.readByte();
        var i = this.readByte();
        i |= this.readByte() << 8, i |= this.readByte() << 16, i |= this.readByte() << 24;
        var n = this.readByte();
        n |= this.readByte() << 8, n |= this.readByte() << 16, n |= this.readByte() << 24;
        var r = this.readByte();
        r |= this.readByte() << 8;
        var c = this.readByte();
        for (c |= this.readByte() << 8, s = 0, this.nameBuf = []; r--; ) {
            var o = this.readByte();
            "/" == o | ":" == o ? s = 0 : s < cc.Codec.GZip.NAMEMAX - 1 && (this.nameBuf[s++] = String.fromCharCode(o));
        }
        this.fileout || (this.fileout = this.nameBuf);
        for (var s = 0; c > s; ) o = this.readByte(), s++;
        8 == e && (this.DeflateLoop(), this.unzipped[this.files] = [ this.outputArr.join(""), this.nameBuf.join("") ], 
        this.files++), this.skipdir();
    }
}, cc.Codec.GZip.prototype.skipdir = function() {
    var t, e, i, n, r, c = [];
    if (8 & this.gpflags && (c[0] = this.readByte(), c[1] = this.readByte(), c[2] = this.readByte(), 
    c[3] = this.readByte(), t = this.readByte(), t |= this.readByte() << 8, t |= this.readByte() << 16, 
    t |= this.readByte() << 24, e = this.readByte(), e |= this.readByte() << 8, e |= this.readByte() << 16, 
    e |= this.readByte() << 24), this.modeZIP && this.nextFile(), c[0] = this.readByte(), 
    8 != c[0]) return 0;
    if (this.gpflags = this.readByte(), this.readByte(), this.readByte(), this.readByte(), 
    this.readByte(), this.readByte(), i = this.readByte(), 4 & this.gpflags) for (c[0] = this.readByte(), 
    c[2] = this.readByte(), this.len = c[0] + 256 * c[1], n = 0; n < this.len; n++) this.readByte();
    if (8 & this.gpflags) for (n = 0, this.nameBuf = []; r = this.readByte(); ) ("7" == r || ":" == r) && (n = 0), 
    n < cc.Codec.GZip.NAMEMAX - 1 && (this.nameBuf[n++] = r);
    if (16 & this.gpflags) for (;r = this.readByte(); ) ;
    2 & this.gpflags && (this.readByte(), this.readByte()), this.DeflateLoop(), e = this.readByte(), 
    e |= this.readByte() << 8, e |= this.readByte() << 16, e |= this.readByte() << 24, 
    this.modeZIP && this.nextFile();
}, cc.INVALID_INDEX = -1, cc.PI = Math.PI, cc.FLT_MAX = parseFloat("3.402823466e+38F"), 
cc.RAD = cc.PI / 180, cc.DEG = 180 / cc.PI, cc.UINT_MAX = 4294967295, cc.SWAP = function(t, e, i) {
    if ("object" == typeof i && "undefined" != typeof i.x && "undefined" != typeof i.y) {
        var n = i[t];
        i[t] = i[e], i[e] = n;
    } else cc.Assert(!1, "CC_SWAP is being modified from original macro, please check usage");
}, cc.lerp = function(t, e, i) {
    return t + (e - t) * i;
}, cc.RANDOM_MINUS1_1 = function() {
    return 2 * (Math.random() - .5);
}, cc.RANDOM_0_1 = function() {
    return Math.random();
}, cc.DEGREES_TO_RADIANS = function(t) {
    return t * cc.RAD;
}, cc.RADIANS_TO_DEGREES = function(t) {
    return t * cc.DEG;
}, cc.REPEAT_FOREVER = Number.MAX_VALUE - 1, cc.BLEND_SRC = cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA ? 1 : 770, 
cc.BLEND_DST = 771, cc.NODE_DRAW_SETUP = function(t) {
    t._shaderProgram && (t._shaderProgram.use(), t._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4());
}, cc.ENABLE_DEFAULT_GL_STATES = function() {}, cc.DISABLE_DEFAULT_GL_STATES = function() {}, 
cc.INCREMENT_GL_DRAWS = function(t) {
    cc.g_NumberOfDraws += t;
}, cc.FLT_EPSILON = 1.192092896e-7, cc.CONTENT_SCALE_FACTOR = cc.IS_RETINA_DISPLAY_SUPPORTED ? function() {
    return cc.Director.getInstance().getContentScaleFactor();
} : function() {
    return 1;
}, cc.POINT_POINTS_TO_PIXELS = function(t) {
    return cc.p(t.x * cc.CONTENT_SCALE_FACTOR(), t.y * cc.CONTENT_SCALE_FACTOR());
}, cc.SIZE_POINTS_TO_PIXELS = function(t) {
    return cc.size(t.width * cc.CONTENT_SCALE_FACTOR(), t.height * cc.CONTENT_SCALE_FACTOR());
}, cc.SIZE_PIXELS_TO_POINTS = function(t) {
    return cc.size(t.width / cc.CONTENT_SCALE_FACTOR(), t.height / cc.CONTENT_SCALE_FACTOR());
}, cc.POINT_PIXELS_TO_POINTS = function(t) {
    return cc.p(t.x / cc.CONTENT_SCALE_FACTOR(), t.y / cc.CONTENT_SCALE_FACTOR());
}, cc.RECT_PIXELS_TO_POINTS = cc.IS_RETINA_DISPLAY_SUPPORTED ? function(t) {
    return cc.rect(t.x / cc.CONTENT_SCALE_FACTOR(), t.y / cc.CONTENT_SCALE_FACTOR(), t.width / cc.CONTENT_SCALE_FACTOR(), t.height / cc.CONTENT_SCALE_FACTOR());
} : function(t) {
    return t;
}, cc.RECT_POINTS_TO_PIXELS = cc.IS_RETINA_DISPLAY_SUPPORTED ? function(t) {
    return cc.rect(t.x * cc.CONTENT_SCALE_FACTOR(), t.y * cc.CONTENT_SCALE_FACTOR(), t.width * cc.CONTENT_SCALE_FACTOR(), t.height * cc.CONTENT_SCALE_FACTOR());
} : function(t) {
    return t;
}, !cc.Browser.supportWebGL) {
    var gl = gl || {};
    gl.ONE = 1, gl.ZERO = 0, gl.SRC_ALPHA = 770, gl.ONE_MINUS_SRC_ALPHA = 771, gl.ONE_MINUS_DST_COLOR = 775;
}

cc.CHECK_GL_ERROR_DEBUG = function() {
    var t = cc.renderContext.getError();
    t && cc.log("WebGL error " + t);
}, cc.SAX_NONE = 0, cc.SAX_KEY = 1, cc.SAX_DICT = 2, cc.SAX_INT = 3, cc.SAX_REAL = 4, 
cc.SAX_STRING = 5, cc.SAX_ARRAY = 6;

var Uint8Array = Uint8Array || Array;

if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
    var IEBinaryToArray_ByteStr_Script = '<!-- IEBinaryToArray_ByteStr -->\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr = CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex = LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last = ""\r\n   End If\r\nEnd Function\r\n', myVBScript = document.createElement("script");
    myVBScript.type = "text/vbscript", myVBScript.textContent = IEBinaryToArray_ByteStr_Script, 
    document.body.appendChild(myVBScript), cc._convertResponseBodyToText = function(t) {
        for (var e = {}, i = 0; 256 > i; i++) for (var n = 0; 256 > n; n++) e[String.fromCharCode(i + 256 * n)] = String.fromCharCode(i) + String.fromCharCode(n);
        var r = IEBinaryToArray_ByteStr(t), c = IEBinaryToArray_ByteStr_Last(t);
        return r.replace(/[\s\S]/g, function(t) {
            return e[t];
        }) + c;
    };
}

cc.FileUtils = cc.Class.extend({
    _fileDataCache: null,
    _textFileCache: null,
    _directory: null,
    _filenameLookupDict: null,
    _searchResolutionsOrderArray: null,
    _searchPathArray: null,
    _defaultResRootPath: "",
    ctor: function() {
        this._fileDataCache = {}, this._textFileCache = {}, this._searchPathArray = [], 
        this._searchPathArray.push(this._defaultResRootPath), this._searchResolutionsOrderArray = [], 
        this._searchResolutionsOrderArray.push("");
    },
    purgeCachedEntries: function() {
        this._searchPathArray = [];
    },
    getByteArrayFromFile: function(t) {
        return t = this.fullPathForFilename(t), this._fileDataCache.hasOwnProperty(t) ? this._fileDataCache[t] : this._loadBinaryFileData(t);
    },
    _getXMLHttpRequest: function() {
        return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP");
    },
    unloadBinaryFileData: function(t) {
        this._fileDataCache.hasOwnProperty(t) && delete this._fileDataCache[t];
    },
    preloadBinaryFileData: function(t) {
        t = this.fullPathForFilename(t);
        var e = this, i = this._getXMLHttpRequest();
        i.open("GET", t, !0), /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (i.setRequestHeader("Accept-Charset", "x-user-defined"), 
        i.onreadystatechange = function() {
            if (4 == i.readyState) {
                if (200 == i.status) {
                    var n = cc._convertResponseBodyToText(i.responseBody);
                    n && (e._fileDataCache[t] = e._stringConvertToArray(n));
                } else cc.Loader.getInstance().onResLoadingErr(t);
                cc.Loader.getInstance().onResLoaded();
            }
        }) : (i.overrideMimeType && i.overrideMimeType("text/plain; charset=x-user-defined"), 
        i.onload = function() {
            var n = i.responseText;
            n ? e._fileDataCache[t] = e._stringConvertToArray(n) : cc.Loader.getInstance().onResLoadingErr(t), 
            cc.Loader.getInstance().onResLoaded();
        }), i.send(null);
    },
    _loadBinaryFileData: function(t) {
        var e = this._getXMLHttpRequest();
        e.open("GET", t, !1);
        var i = null;
        if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
            if (e.setRequestHeader("Accept-Charset", "x-user-defined"), e.send(null), 200 != e.status) return null;
            var n = cc._convertResponseBodyToText(e.responseBody);
            n && (i = this._stringConvertToArray(n), this._fileDataCache[t] = i);
        } else {
            if (e.overrideMimeType && e.overrideMimeType("text/plain; charset=x-user-defined"), 
            e.send(null), 200 != e.status) return null;
            i = this._stringConvertToArray(e.responseText), this._fileDataCache[t] = i;
        }
        return i;
    },
    _stringConvertToArray: function(t) {
        if (!t) return null;
        for (var e = new Uint8Array(t.length), i = 0; i < t.length; i++) e[i] = 255 & t.charCodeAt(i);
        return e;
    },
    unloadTextFileData: function(t) {
        this._textFileCache.hasOwnProperty(t) && delete this._textFileCache[t];
    },
    preloadTextFileData: function(t) {
        t = this.fullPathForFilename(t);
        var e = this, i = this._getXMLHttpRequest();
        i.open("GET", t, !0), /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (i.setRequestHeader("Accept-Charset", "utf-8"), 
        i.onreadystatechange = function() {
            if (4 == i.readyState) {
                if (200 == i.status) {
                    var n = i.responseText;
                    n && (e._textFileCache[t] = n);
                } else cc.Loader.getInstance().onResLoadingErr(t);
                cc.Loader.getInstance().onResLoaded();
            }
        }) : (i.overrideMimeType && i.overrideMimeType("text/plain; charset=utf-8"), i.onload = function() {
            i.responseText ? e._textFileCache[t] = i.responseText : cc.Loader.getInstance().onResLoadingErr(t), 
            cc.Loader.getInstance().onResLoaded();
        }), i.send(null);
    },
    _loadTextFileData: function(t) {
        var e = this._getXMLHttpRequest();
        e.open("GET", t, !1);
        var i = null;
        return /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? e.setRequestHeader("Accept-Charset", "utf-8") : e.overrideMimeType && e.overrideMimeType("text/plain; charset=utf-8"), 
        e.send(null), 200 != e.status ? null : (i = e.responseText, i && (this._textFileCache[t] = i), 
        i);
    },
    getTextFileData: function(t) {
        return this._textFileCache.hasOwnProperty(t) ? this._textFileCache[t] : this._loadTextFileData(t);
    },
    getFileDataFromZip: function() {},
    removeSuffixFromFile: function() {},
    popupNotify: !0,
    fullPathFromRelativePath: function(t) {
        return t;
    },
    fullPathForFilename: function(t) {
        for (var e, i = !1, n = this._getNewFilename(t), r = 0; r < this._searchPathArray.length; r++) {
            for (var c = this._searchPathArray[r], o = 0; o < this._searchResolutionsOrderArray.length; o++) {
                var s = this._searchResolutionsOrderArray[o];
                if (e = this._getPathForFilename(n, s, c)) {
                    i = !0;
                    break;
                }
            }
            if (i) break;
        }
        return i ? e : n;
    },
    loadFilenameLookup: function(t) {
        var e = this.fullPathForFilename(t);
        if (e.length > 0) {
            var i = cc.SAXParser.getInstance().parse(e), n = i.metadata, r = parseInt(n.version);
            if (1 != r) return cc.log("cocos2d: ERROR: Invalid filenameLookup dictionary version: " + r + ". Filename: " + t), 
            void 0;
            this.setFilenameLookupDictionary(i.filenames);
        }
    },
    setFilenameLookupDictionary: function(t) {
        this._filenameLookupDict = t;
    },
    fullPathFromRelativeFile: function(t, e) {
        var i;
        return t ? (i = e.substring(0, e.lastIndexOf("/") + 1), i + t) : (i = e.substring(0, e.lastIndexOf(".")), 
        i += ".png");
    },
    setSearchResolutionsOrder: function(t) {
        this._searchResolutionsOrderArray = t;
    },
    getSearchResolutionsOrder: function() {
        return this._searchResolutionsOrderArray;
    },
    setSearchPath: function(t) {
        this._searchPathArray = t;
    },
    getSearchPath: function() {
        return this._searchPathArray;
    },
    getResourceDirectory: function() {
        return this._directory;
    },
    setResourcePath: function() {},
    dictionaryWithContentsOfFile: function(t) {
        return cc.log("dictionaryWithContentsOfFile is deprecated. Use createDictionaryWithContentsOfFile instead"), 
        this.createDictionaryWithContentsOfFile(t);
    },
    createDictionaryWithContentsOfFile: function(t) {
        return cc.SAXParser.getInstance().parse(t);
    },
    getStringFromFile: function(t) {
        return this.getTextFileData(t);
    },
    dictionaryWithContentsOfFileThreadSafe: function(t) {
        return cc.SAXParser.getInstance().parse(t);
    },
    getWritablePath: function() {
        return "";
    },
    setPopupNotify: function(t) {
        cc.popupNotify = t;
    },
    isPopupNotify: function() {
        return cc.popupNotify;
    },
    _resourceRootPath: "",
    getResourceRootPath: function() {
        return this._resourceRootPath;
    },
    setResourceRootPath: function(t) {
        this._resourceRootPath = t;
    },
    _getNewFilename: function(t) {
        var e = null, i = this._filenameLookupDict ? this._filenameLookupDict[t] : null;
        return i && 0 !== i.length ? (e = i, cc.log("FOUND NEW FILE NAME: " + e)) : e = t, 
        e;
    },
    _getPathForFilename: function(t, e, i) {
        var n, r = this.getResourceRootPath();
        t && t.length > 0 && (0 === t.indexOf("/") || 0 === t.indexOf("\\")) ? n = "" : r.length > 0 ? (n = r, 
        "\\" != n[n.length - 1] && "/" != n[n.length - 1] && (n += "/")) : n = r;
        var c = t, o = "", s = t.lastIndexOf("/");
        -1 != s && (o = t.substr(0, s + 1), c = t.substr(s + 1));
        var a = i;
        return a.length > 0 && a.lastIndexOf("/") !== a.length - 1 && (a += "/"), a += o, 
        a += e, a.length > 0 && a.lastIndexOf("/") !== a.length - 1 && (a += "/"), a += c, 
        n += a;
    },
    _getFullPathForDirectoryAndFilename: function() {},
    setSearchPaths: function(t) {
        var e = !1;
        this._searchPathArray = [];
        for (var i = 0; i < t.length; i++) {
            var n, r, c = t[i];
            this.isAbsolutePath(c) || (n = this._defaultResRootPath), r = n + c, r.length > 0 && "/" != r[r.length - 1] && (r += "/"), 
            e || r != this._defaultResRootPath || (e = !0), this._searchPathArray.push(r);
        }
        e || this._searchPathArray.push(this._defaultResRootPath);
    },
    addSearchPath: function(t) {
        var e;
        this.isAbsolutePath(t) || (e = this._defaultResRootPath), t = e + t, t.length > 0 && "/" != t[t.length - 1] && (t += "/"), 
        this._searchPathArray.push(t);
    },
    getSearchPaths: function() {},
    isAbsolutePath: function(t) {
        return "/" == t[0];
    }
}), cc.s_SharedFileUtils = null, cc.FileUtils.getInstance = function() {
    return null == cc.s_SharedFileUtils && (cc.s_SharedFileUtils = new cc.FileUtils()), 
    cc.s_SharedFileUtils;
}, cc.Color3B = function(t, e, i) {
    switch (arguments.length) {
      case 0:
        this.r = 0, this.g = 0, this.b = 0;
        break;

      case 1:
        t && t instanceof cc.Color3B ? (this.r = 0 | t.r || 0, this.g = 0 | t.g || 0, this.b = 0 | t.b || 0) : (this.r = 0, 
        this.g = 0, this.b = 0);
        break;

      case 3:
        this.r = 0 | t || 0, this.g = 0 | e || 0, this.b = 0 | i || 0;
        break;

      default:
        throw "unknown argument type";
    }
}, cc.c3b = function(t, e, i) {
    return new cc.Color3B(t, e, i);
}, cc.integerToColor3B = function(t) {
    t = t || 0;
    var e = 255, i = new cc.Color3B();
    return i.r = t & e, i.g = t >> 8 & e, i.b = t >> 16 & e, i;
}, cc.c3 = cc.c3b, cc.c3BEqual = function(t, e) {
    return t.r === e.r && t.g === e.g && t.b === e.b;
}, Object.defineProperties(cc, {
    WHITE: {
        get: function() {
            return cc.c3b(255, 255, 255);
        }
    },
    YELLOW: {
        get: function() {
            return cc.c3b(255, 255, 0);
        }
    },
    BLUE: {
        get: function() {
            return cc.c3b(0, 0, 255);
        }
    },
    GREEN: {
        get: function() {
            return cc.c3b(0, 255, 0);
        }
    },
    RED: {
        get: function() {
            return cc.c3b(255, 0, 0);
        }
    },
    MAGENTA: {
        get: function() {
            return cc.c3b(255, 0, 255);
        }
    },
    BLACK: {
        get: function() {
            return cc.c3b(0, 0, 0);
        }
    },
    ORANGE: {
        get: function() {
            return cc.c3b(255, 127, 0);
        }
    },
    GRAY: {
        get: function() {
            return cc.c3b(166, 166, 166);
        }
    }
}), cc.white = function() {
    return new cc.Color3B(255, 255, 255);
}, cc.yellow = function() {
    return new cc.Color3B(255, 255, 0);
}, cc.blue = function() {
    return new cc.Color3B(0, 0, 255);
}, cc.green = function() {
    return new cc.Color3B(0, 255, 0);
}, cc.red = function() {
    return new cc.Color3B(255, 0, 0);
}, cc.magenta = function() {
    return new cc.Color3B(255, 0, 255);
}, cc.black = function() {
    return new cc.Color3B(0, 0, 0);
}, cc.orange = function() {
    return new cc.Color3B(255, 127, 0);
}, cc.gray = function() {
    return new cc.Color3B(166, 166, 166);
}, cc.Color4B = function(t, e, i, n) {
    this.r = 0 | t, this.g = 0 | e, this.b = 0 | i, this.a = 0 | n;
}, cc.c4b = function(t, e, i, n) {
    return new cc.Color4B(t, e, i, n);
}, cc.c4 = cc.c4b, cc.Color4F = function(t, e, i, n) {
    this.r = t, this.g = e, this.b = i, this.a = n;
}, cc.c4f = function(t, e, i, n) {
    return new cc.Color4F(t, e, i, n);
}, cc.c4FFromccc3B = function(t) {
    return new cc.Color4F(t.r / 255, t.g / 255, t.b / 255, 1);
}, cc.c4FFromccc4B = function(t) {
    return new cc.Color4F(t.r / 255, t.g / 255, t.b / 255, t.a / 255);
}, cc.c4BFromccc4F = function(t) {
    return new cc.Color4B(0 | 255 * t.r, 0 | 255 * t.g, 0 | 255 * t.b, 0 | 255 * t.a);
}, cc.c4FEqual = function(t, e) {
    return t.r == e.r && t.g == e.g && t.b == e.b && t.a == e.a;
}, cc.Vertex2F = function(t, e) {
    this.x = t || 0, this.y = e || 0;
}, cc.Vertex2 = function(t, e) {
    return new cc.Vertex2F(t, e);
}, cc.Vertex3F = function(t, e, i) {
    this.x = t || 0, this.y = e || 0, this.z = i || 0;
}, cc.vertex3 = function(t, e, i) {
    return new cc.Vertex3F(t, e, i);
}, cc.Tex2F = function(t, e) {
    this.u = t || 0, this.v = e || 0;
}, cc.tex2 = function(t, e) {
    return new cc.Tex2F(t, e);
}, cc.PointSprite = function(t, e, i) {
    this.pos = t || new cc.Vertex2F(0, 0), this.color = e || new cc.Color4B(0, 0, 0, 0), 
    this.size = i || 0;
}, cc.Quad2 = function(t, e, i, n) {
    this.tl = t || new cc.Vertex2F(0, 0), this.tr = e || new cc.Vertex2F(0, 0), this.bl = i || new cc.Vertex2F(0, 0), 
    this.br = n || new cc.Vertex2F(0, 0);
}, cc.Quad3 = function(t, e, i, n) {
    this.bl = t || new cc.Vertex3F(0, 0, 0), this.br = e || new cc.Vertex3F(0, 0, 0), 
    this.tl = i || new cc.Vertex3F(0, 0, 0), this.tr = n || new cc.Vertex3F(0, 0, 0);
}, cc.GridSize = function(t, e) {
    this.x = t, this.y = e;
}, cc.g = function(t, e) {
    return new cc.GridSize(t, e);
}, cc.V2F_C4B_T2F = function(t, e, i) {
    this.vertices = t || new cc.Vertex2F(0, 0), this.colors = e || new cc.Color4B(0, 0, 0, 0), 
    this.texCoords = i || new cc.Tex2F(0, 0);
}, cc.V2F_C4F_T2F = function(t, e, i) {
    this.vertices = t || new cc.Vertex2F(0, 0), this.colors = e || new cc.Color4F(0, 0, 0, 0), 
    this.texCoords = i || new cc.Tex2F(0, 0);
}, cc.V3F_C4B_T2F = function(t, e, i) {
    this.vertices = t || new cc.Vertex3F(0, 0, 0), this.colors = e || new cc.Color4B(0, 0, 0, 0), 
    this.texCoords = i || new cc.Tex2F(0, 0);
}, cc.V2F_C4B_T2F_Triangle = function(t, e, i) {
    this.a = t || new cc.V2F_C4B_T2F(), this.b = e || new cc.V2F_C4B_T2F(), this.c = i || new cc.V2F_C4B_T2F();
}, cc.V2F_C4B_T2F_Quad = function(t, e, i, n) {
    this.bl = t || new cc.V2F_C4B_T2F(), this.br = e || new cc.V2F_C4B_T2F(), this.tl = i || new cc.V2F_C4B_T2F(), 
    this.tr = n || new cc.V2F_C4B_T2F();
}, cc.V2F_C4B_T2F_QuadZero = function() {
    return new cc.V2F_C4B_T2F_Quad(new cc.V2F_C4B_T2F(new cc.Vertex2F(0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V2F_C4B_T2F(new cc.Vertex2F(0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V2F_C4B_T2F(new cc.Vertex2F(0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V2F_C4B_T2F(new cc.Vertex2F(0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)));
}, cc.V3F_C4B_T2F_Quad = function(t, e, i, n) {
    this.tl = t || new cc.V3F_C4B_T2F(), this.bl = e || new cc.V3F_C4B_T2F(), this.tr = i || new cc.V3F_C4B_T2F(), 
    this.br = n || new cc.V3F_C4B_T2F();
}, cc.V3F_C4B_T2F_QuadZero = function() {
    return new cc.V3F_C4B_T2F_Quad(new cc.V3F_C4B_T2F(new cc.Vertex3F(0, 0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V3F_C4B_T2F(new cc.Vertex3F(0, 0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V3F_C4B_T2F(new cc.Vertex3F(0, 0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V3F_C4B_T2F(new cc.Vertex3F(0, 0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)));
}, cc.V3F_C4B_T2F_QuadCopy = function(t) {
    if (!t) return cc.V3F_C4B_T2F_QuadZero();
    t.tl, t.bl, t.tr, t.br;
    return new cc.V3F_C4B_T2F_Quad(new cc.V3F_C4B_T2F(new cc.Vertex3F(t.tl.vertices.x, t.tl.vertices.y, t.tl.vertices.z), new cc.Color4B(t.tl.colors.r, t.tl.colors.g, t.tl.colors.b, t.tl.colors.a), new cc.Tex2F(t.tl.texCoords.u, t.tl.texCoords.v)), new cc.V3F_C4B_T2F(new cc.Vertex3F(t.bl.vertices.x, t.bl.vertices.y, t.bl.vertices.z), new cc.Color4B(t.bl.colors.r, t.bl.colors.g, t.bl.colors.b, t.bl.colors.a), new cc.Tex2F(t.bl.texCoords.u, t.bl.texCoords.v)), new cc.V3F_C4B_T2F(new cc.Vertex3F(t.tr.vertices.x, t.tr.vertices.y, t.tr.vertices.z), new cc.Color4B(t.tr.colors.r, t.tr.colors.g, t.tr.colors.b, t.tr.colors.a), new cc.Tex2F(t.tr.texCoords.u, t.tr.texCoords.v)), new cc.V3F_C4B_T2F(new cc.Vertex3F(t.br.vertices.x, t.br.vertices.y, t.br.vertices.z), new cc.Color4B(t.br.colors.r, t.br.colors.g, t.br.colors.b, t.br.colors.a), new cc.Tex2F(t.br.texCoords.u, t.br.texCoords.v)));
}, cc.V3F_C4B_T2F_QuadsCopy = function(t) {
    if (!t) return [];
    for (var e = [], i = 0; i < t.length; i++) e.push(cc.V3F_C4B_T2F_QuadCopy(t[i]));
    return e;
}, cc.V2F_C4F_T2F_Quad = function(t, e, i, n) {
    this.bl = t || new cc.V2F_C4F_T2F(), this.br = e || new cc.V2F_C4F_T2F(), this.tl = i || new cc.V2F_C4F_T2F(), 
    this.tr = n || new cc.V2F_C4F_T2F();
}, cc.BlendFunc = function(t, e) {
    this.src = t, this.dst = e;
}, cc.BlendFuncDisable = function() {
    return new cc.BlendFunc(gl.ONE, gl.ZERO);
}, cc.T2F_Quad = function(t, e, i, n) {
    this.bl = t, this.br = e, this.tl = i, this.tr = n;
}, cc.AnimationFrameData = function(t, e, i) {
    this.texCoords = t, this.delay = e, this.size = i;
}, cc.convertColor3BtoHexString = function(t) {
    var e = t.r.toString(16), i = t.g.toString(16), n = t.b.toString(16), r = "#" + (t.r < 16 ? "0" + e : e) + (t.g < 16 ? "0" + i : i) + (t.b < 16 ? "0" + n : n);
    return r;
}, cc.Browser.supportWebGL && (cc.Color4B = function(t, e, i, n, r, c) {
    this._arrayBuffer = r || new ArrayBuffer(cc.Color4B.BYTES_PER_ELEMENT), this._offset = c || 0;
    var o = this._arrayBuffer, s = this._offset, a = Uint8Array.BYTES_PER_ELEMENT;
    this._rU8 = new Uint8Array(o, s, 1), this._gU8 = new Uint8Array(o, s + a, 1), this._bU8 = new Uint8Array(o, s + 2 * a, 1), 
    this._aU8 = new Uint8Array(o, s + 3 * a, 1), this._rU8[0] = t || 0, this._gU8[0] = e || 0, 
    this._bU8[0] = i || 0, this._aU8[0] = n || 0;
}, cc.Color4B.BYTES_PER_ELEMENT = 4, Object.defineProperties(cc.Color4B.prototype, {
    r: {
        get: function() {
            return this._rU8[0];
        },
        set: function(t) {
            this._rU8[0] = t;
        },
        enumerable: !0
    },
    g: {
        get: function() {
            return this._gU8[0];
        },
        set: function(t) {
            this._gU8[0] = t;
        },
        enumerable: !0
    },
    b: {
        get: function() {
            return this._bU8[0];
        },
        set: function(t) {
            this._bU8[0] = t;
        },
        enumerable: !0
    },
    a: {
        get: function() {
            return this._aU8[0];
        },
        set: function(t) {
            this._aU8[0] = t;
        },
        enumerable: !0
    }
}), cc.Color4F = function(t, e, i, n, r, c) {
    this._arrayBuffer = r || new ArrayBuffer(cc.Color4F.BYTES_PER_ELEMENT), this._offset = c || 0;
    var o = this._arrayBuffer, s = this._offset, a = Float32Array.BYTES_PER_ELEMENT;
    this._rF32 = new Float32Array(o, s, 1), this._rF32[0] = t || 0, this._gF32 = new Float32Array(o, s + a, 1), 
    this._gF32[0] = e || 0, this._bF32 = new Float32Array(o, s + 2 * a, 1), this._bF32[0] = i || 0, 
    this._aF32 = new Float32Array(o, s + 3 * a, 1), this._aF32[0] = n || 0;
}, cc.Color4F.BYTES_PER_ELEMENT = 16, Object.defineProperties(cc.Color4F.prototype, {
    r: {
        get: function() {
            return this._rF32[0];
        },
        set: function(t) {
            this._rF32[0] = t;
        },
        enumerable: !0
    },
    g: {
        get: function() {
            return this._gF32[0];
        },
        set: function(t) {
            this._gF32[0] = t;
        },
        enumerable: !0
    },
    b: {
        get: function() {
            return this._bF32[0];
        },
        set: function(t) {
            this._bF32[0] = t;
        },
        enumerable: !0
    },
    a: {
        get: function() {
            return this._aF32[0];
        },
        set: function(t) {
            this._aF32[0] = t;
        },
        enumerable: !0
    }
}), cc.Vertex2F = function(t, e, i, n) {
    this._arrayBuffer = i || new ArrayBuffer(cc.Vertex2F.BYTES_PER_ELEMENT), this._offset = n || 0, 
    this._xF32 = new Float32Array(this._arrayBuffer, this._offset, 1), this._yF32 = new Float32Array(this._arrayBuffer, this._offset + 4, 1), 
    this._xF32[0] = t || 0, this._yF32[0] = e || 0;
}, cc.Vertex2F.BYTES_PER_ELEMENT = 8, Object.defineProperties(cc.Vertex2F.prototype, {
    x: {
        get: function() {
            return this._xF32[0];
        },
        set: function(t) {
            this._xF32[0] = t;
        },
        enumerable: !0
    },
    y: {
        get: function() {
            return this._yF32[0];
        },
        set: function(t) {
            this._yF32[0] = t;
        },
        enumerable: !0
    }
}), cc.Vertex3F = function(t, e, i, n, r) {
    this._arrayBuffer = n || new ArrayBuffer(cc.Vertex3F.BYTES_PER_ELEMENT), this._offset = r || 0;
    var c = this._arrayBuffer, o = this._offset;
    this._xF32 = new Float32Array(c, o, 1), this._xF32[0] = t || 0, this._yF32 = new Float32Array(c, o + Float32Array.BYTES_PER_ELEMENT, 1), 
    this._yF32[0] = e || 0, this._zF32 = new Float32Array(c, o + 2 * Float32Array.BYTES_PER_ELEMENT, 1), 
    this._zF32[0] = i || 0;
}, cc.Vertex3F.BYTES_PER_ELEMENT = 12, Object.defineProperties(cc.Vertex3F.prototype, {
    x: {
        get: function() {
            return this._xF32[0];
        },
        set: function(t) {
            this._xF32[0] = t;
        },
        enumerable: !0
    },
    y: {
        get: function() {
            return this._yF32[0];
        },
        set: function(t) {
            this._yF32[0] = t;
        },
        enumerable: !0
    },
    z: {
        get: function() {
            return this._zF32[0];
        },
        set: function(t) {
            this._zF32[0] = t;
        },
        enumerable: !0
    }
}), cc.Tex2F = function(t, e, i, n) {
    this._arrayBuffer = i || new ArrayBuffer(cc.Tex2F.BYTES_PER_ELEMENT), this._offset = n || 0, 
    this._uF32 = new Float32Array(this._arrayBuffer, this._offset, 1), this._vF32 = new Float32Array(this._arrayBuffer, this._offset + 4, 1), 
    this._uF32[0] = t || 0, this._vF32[0] = e || 0;
}, cc.Tex2F.BYTES_PER_ELEMENT = 8, Object.defineProperties(cc.Tex2F.prototype, {
    u: {
        get: function() {
            return this._uF32[0];
        },
        set: function(t) {
            this._uF32[0] = t;
        },
        enumerable: !0
    },
    v: {
        get: function() {
            return this._vF32[0];
        },
        set: function(t) {
            this._vF32[0] = t;
        },
        enumerable: !0
    }
}), cc.Quad2 = function(t, e, i, n, r, c) {
    this._arrayBuffer = r || new ArrayBuffer(cc.Quad2.BYTES_PER_ELEMENT), this._offset = c || 0;
    var o = this._arrayBuffer, s = cc.Vertex2F.BYTES_PER_ELEMENT;
    this._tl = t ? new cc.Vertex2F(t.x, t.y, o, 0) : new cc.Vertex2F(0, 0, o, 0), this._tr = e ? new cc.Vertex2F(e.x, e.y, o, s) : new cc.Vertex2F(0, 0, o, s), 
    this._bl = i ? new cc.Vertex2F(i.x, i.y, o, 2 * s) : new cc.Vertex2F(0, 0, o, 2 * s), 
    this._br = n ? new cc.Vertex2F(n.x, n.y, o, 3 * s) : new cc.Vertex2F(0, 0, o, 3 * s);
}, cc.Quad2.BYTES_PER_ELEMENT = 32, Object.defineProperties(cc.Quad2.prototype, {
    tl: {
        get: function() {
            return this._tl;
        },
        set: function(t) {
            this._tl.x = t.x, this._tl.y = t.y;
        },
        enumerable: !0
    },
    tr: {
        get: function() {
            return this._tr;
        },
        set: function(t) {
            this._tr.x = t.x, this._tr.y = t.y;
        },
        enumerable: !0
    },
    bl: {
        get: function() {
            return this._bl;
        },
        set: function(t) {
            this._bl.x = t.x, this._bl.y = t.y;
        },
        enumerable: !0
    },
    br: {
        get: function() {
            return this._br;
        },
        set: function(t) {
            this._br.x = t.x, this._br.y = t.y;
        },
        enumerable: !0
    }
}), cc.V3F_C4B_T2F = function(t, e, i, n, r) {
    this._arrayBuffer = n || new ArrayBuffer(cc.V3F_C4B_T2F.BYTES_PER_ELEMENT), this._offset = r || 0;
    var c = this._arrayBuffer, o = this._offset, s = cc.Vertex3F.BYTES_PER_ELEMENT;
    this._vertices = t ? new cc.Vertex3F(t.x, t.y, t.z, c, o) : new cc.Vertex3F(0, 0, 0, c, o), 
    this._colors = e ? new cc.Color4B(e.r, e.g, e.b, e.a, c, o + s) : new cc.Color4B(0, 0, 0, 0, c, o + s), 
    this._texCoords = i ? new cc.Tex2F(i.u, i.v, c, o + s + cc.Color4B.BYTES_PER_ELEMENT) : new cc.Tex2F(0, 0, c, o + s + cc.Color4B.BYTES_PER_ELEMENT);
}, cc.V3F_C4B_T2F.BYTES_PER_ELEMENT = 24, Object.defineProperties(cc.V3F_C4B_T2F.prototype, {
    vertices: {
        get: function() {
            return this._vertices;
        },
        set: function(t) {
            var e = this._vertices;
            e.x = t.x, e.y = t.y, e.z = t.z;
        },
        enumerable: !0
    },
    colors: {
        get: function() {
            return this._colors;
        },
        set: function(t) {
            var e = this._colors;
            e.r = t.r, e.g = t.g, e.b = t.b, e.a = t.a;
        },
        enumerable: !0
    },
    texCoords: {
        get: function() {
            return this._texCoords;
        },
        set: function(t) {
            this._texCoords.u = t.u, this._texCoords.v = t.v;
        },
        enumerable: !0
    }
}), cc.V3F_C4B_T2F_Quad = function(t, e, i, n, r, c) {
    this._arrayBuffer = r || new ArrayBuffer(cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT), 
    this._offset = c || 0;
    var o = this._arrayBuffer, s = this._offset, a = cc.V3F_C4B_T2F.BYTES_PER_ELEMENT;
    this._tl = t ? new cc.V3F_C4B_T2F(t.vertices, t.colors, t.texCoords, o, s) : new cc.V3F_C4B_T2F(null, null, null, o, s), 
    this._bl = e ? new cc.V3F_C4B_T2F(e.vertices, e.colors, e.texCoords, o, s + a) : new cc.V3F_C4B_T2F(null, null, null, o, s + a), 
    this._tr = i ? new cc.V3F_C4B_T2F(i.vertices, i.colors, i.texCoords, o, s + 2 * a) : new cc.V3F_C4B_T2F(null, null, null, o, s + 2 * a), 
    this._br = n ? new cc.V3F_C4B_T2F(n.vertices, n.colors, n.texCoords, o, s + 3 * a) : new cc.V3F_C4B_T2F(null, null, null, o, s + 3 * a);
}, cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT = 96, Object.defineProperties(cc.V3F_C4B_T2F_Quad.prototype, {
    tl: {
        get: function() {
            return this._tl;
        },
        set: function(t) {
            var e = this._tl;
            e.vertices = t.vertices, e.colors = t.colors, e.texCoords = t.texCoords;
        },
        enumerable: !0
    },
    bl: {
        get: function() {
            return this._bl;
        },
        set: function(t) {
            var e = this._bl;
            e.vertices = t.vertices, e.colors = t.colors, e.texCoords = t.texCoords;
        },
        enumerable: !0
    },
    tr: {
        get: function() {
            return this._tr;
        },
        set: function(t) {
            var e = this._tr;
            e.vertices = t.vertices, e.colors = t.colors, e.texCoords = t.texCoords;
        },
        enumerable: !0
    },
    br: {
        get: function() {
            return this._br;
        },
        set: function(t) {
            var e = this._br;
            e.vertices = t.vertices, e.colors = t.colors, e.texCoords = t.texCoords;
        },
        enumerable: !0
    },
    arrayBuffer: {
        get: function() {
            return this._arrayBuffer;
        },
        enumerable: !0
    }
}), cc.V3F_C4B_T2F_QuadZero = function() {
    return new cc.V3F_C4B_T2F_Quad();
}, cc.V3F_C4B_T2F_QuadCopy = function(t) {
    if (!t) return cc.V3F_C4B_T2F_QuadZero();
    var e = t.tl, i = t.bl, n = t.tr, r = t.br;
    return {
        tl: {
            vertices: {
                x: e.vertices.x,
                y: e.vertices.y,
                z: e.vertices.z
            },
            colors: {
                r: e.colors.r,
                g: e.colors.g,
                b: e.colors.b,
                a: e.colors.a
            },
            texCoords: {
                u: e.texCoords.u,
                v: e.texCoords.v
            }
        },
        bl: {
            vertices: {
                x: i.vertices.x,
                y: i.vertices.y,
                z: i.vertices.z
            },
            colors: {
                r: i.colors.r,
                g: i.colors.g,
                b: i.colors.b,
                a: i.colors.a
            },
            texCoords: {
                u: i.texCoords.u,
                v: i.texCoords.v
            }
        },
        tr: {
            vertices: {
                x: n.vertices.x,
                y: n.vertices.y,
                z: n.vertices.z
            },
            colors: {
                r: n.colors.r,
                g: n.colors.g,
                b: n.colors.b,
                a: n.colors.a
            },
            texCoords: {
                u: n.texCoords.u,
                v: n.texCoords.v
            }
        },
        br: {
            vertices: {
                x: r.vertices.x,
                y: r.vertices.y,
                z: r.vertices.z
            },
            colors: {
                r: r.colors.r,
                g: r.colors.g,
                b: r.colors.b,
                a: r.colors.a
            },
            texCoords: {
                u: r.texCoords.u,
                v: r.texCoords.v
            }
        }
    };
}, cc.V2F_C4B_T2F = function(t, e, i, n, r) {
    this._arrayBuffer = n || new ArrayBuffer(cc.V2F_C4B_T2F.BYTES_PER_ELEMENT), this._offset = r || 0;
    var c = this._arrayBuffer, o = this._offset, s = cc.Vertex2F.BYTES_PER_ELEMENT;
    this._vertices = t ? new cc.Vertex2F(t.x, t.y, c, o) : new cc.Vertex2F(0, 0, c, o), 
    this._colors = e ? new cc.Color4B(e.r, e.g, e.b, e.a, c, o + s) : new cc.Color4B(0, 0, 0, 0, c, o + s), 
    this._texCoords = i ? new cc.Tex2F(i.u, i.v, c, o + s + cc.Color4B.BYTES_PER_ELEMENT) : new cc.Tex2F(0, 0, c, o + s + cc.Color4B.BYTES_PER_ELEMENT);
}, cc.V2F_C4B_T2F.BYTES_PER_ELEMENT = 20, Object.defineProperties(cc.V2F_C4B_T2F.prototype, {
    vertices: {
        get: function() {
            return this._vertices;
        },
        set: function(t) {
            this._vertices.x = t.x, this._vertices.y = t.y;
        },
        enumerable: !0
    },
    colors: {
        get: function() {
            return this._colors;
        },
        set: function(t) {
            var e = this._colors;
            e.r = t.r, e.g = t.g, e.b = t.b, e.a = t.a;
        },
        enumerable: !0
    },
    texCoords: {
        get: function() {
            return this._texCoords;
        },
        set: function(t) {
            this._texCoords.u = t.u, this._texCoords.v = t.v;
        },
        enumerable: !0
    }
}), cc.V2F_C4B_T2F_Triangle = function(t, e, i, n, r) {
    this._arrayBuffer = n || new ArrayBuffer(cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT), 
    this._offset = r || 0;
    var c = this._arrayBuffer, o = this._offset, s = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT;
    this._a = t ? new cc.V2F_C4B_T2F(t.vertices, t.colors, t.texCoords, c, o) : new cc.V2F_C4B_T2F(null, null, null, c, o), 
    this._b = e ? new cc.V2F_C4B_T2F(e.vertices, e.colors, e.texCoords, c, o + s) : new cc.V2F_C4B_T2F(null, null, null, c, o + s), 
    this._c = i ? new cc.V2F_C4B_T2F(i.vertices, i.colors, i.texCoords, c, o + 2 * s) : new cc.V2F_C4B_T2F(null, null, null, c, o + 2 * s);
}, cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT = 60, Object.defineProperties(cc.V2F_C4B_T2F_Triangle.prototype, {
    a: {
        get: function() {
            return this._a;
        },
        set: function(t) {
            var e = this._a;
            e.vertices = t.vertices, e.colors = t.colors, e.texCoords = t.texCoords;
        },
        enumerable: !0
    },
    b: {
        get: function() {
            return this._b;
        },
        set: function(t) {
            var e = this._b;
            e.vertices = t.vertices, e.colors = t.colors, e.texCoords = t.texCoords;
        },
        enumerable: !0
    },
    c: {
        get: function() {
            return this._c;
        },
        set: function(t) {
            var e = this._c;
            e.vertices = t.vertices, e.colors = t.colors, e.texCoords = t.texCoords;
        },
        enumerable: !0
    }
})), cc.convertHexNumToColor3B = function(t) {
    var e = t.substr(1).split(""), i = parseInt("0x" + e[0] + e[1]), n = parseInt("0x" + e[2] + e[3]), r = parseInt("0x" + e[4] + e[5]);
    return new cc.Color3B(i, n, r);
}, cc.TEXT_ALIGNMENT_LEFT = 0, cc.TEXT_ALIGNMENT_CENTER = 1, cc.TEXT_ALIGNMENT_RIGHT = 2, 
cc.VERTICAL_TEXT_ALIGNMENT_TOP = 0, cc.VERTICAL_TEXT_ALIGNMENT_CENTER = 1, cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM = 2, 
cc._Dictionary = cc.Class.extend({
    _keyMapTb: null,
    _valueMapTb: null,
    __currId: 0,
    ctor: function() {
        this._keyMapTb = {}, this._valueMapTb = {}, this.__currId = 2 << (0 | 10 * Math.random());
    },
    __getKey: function() {
        return this.__currId++, "key_" + this.__currId;
    },
    setObject: function(t, e) {
        if (null != e) {
            var i = this.__getKey();
            this._keyMapTb[i] = e, this._valueMapTb[i] = t;
        }
    },
    objectForKey: function(t) {
        if (null == t) return null;
        var e = this._keyMapTb;
        for (var i in e) if (e[i] === t) return this._valueMapTb[i];
        return null;
    },
    valueForKey: function(t) {
        return this.objectForKey(t);
    },
    removeObjectForKey: function(t) {
        if (null != t) {
            var e = this._keyMapTb;
            for (var i in e) if (e[i] === t) return delete this._valueMapTb[i], delete e[i], 
            void 0;
        }
    },
    removeObjectsForKeys: function(t) {
        if (null != t) for (var e = 0; e < t.length; e++) this.removeObjectForKey(t[e]);
    },
    allKeys: function() {
        var t = [], e = this._keyMapTb;
        for (var i in e) t.push(e[i]);
        return t;
    },
    removeAllObjects: function() {
        this._keyMapTb = {}, this._valueMapTb = {};
    },
    count: function() {
        return this.allKeys().length;
    }
}), cc.FontDefinition = function() {
    this.fontName = "Arial", this.fontSize = 12, this.fontAlignmentH = cc.TEXT_ALIGNMENT_CENTER, 
    this.fontAlignmentV = cc.VERTICAL_TEXT_ALIGNMENT_TOP, this.fontFillColor = cc.WHITE, 
    this.fontDimensions = cc.size(0, 0), this.strokeEnabled = !1, this.strokeColor = cc.WHITE, 
    this.strokeSize = 1, this.shadowEnabled = !1, this.shadowOffset = cc.size(0, 0), 
    this.shadowBlur = 0, this.shadowOpacity = 1;
}, cc.UIInterfaceOrientationLandscapeLeft = -90, cc.UIInterfaceOrientationLandscapeRight = 90, 
cc.UIInterfaceOrientationPortraitUpsideDown = 180, cc.UIInterfaceOrientationPortrait = 0, 
cc.Acceleration = function(t, e, i, n) {
    this.x = t || 0, this.y = e || 0, this.z = i || 0, this.timestamp = n || 0;
}, cc.Accelerometer = cc.Class.extend({
    setDelegate: function(t) {
        cc.AccelerometerDispatcher.getInstance().addDelegate(t);
    },
    setAccelerometerInterval: function(t) {
        cc.AccelerometerDispatcher.getInstance().setAccelerometerInterval(t);
    }
}), cc.AccelerometerDispatcher = cc.Class.extend({
    _delegate: null,
    _acceleration: null,
    _deviceEvent: null,
    _interval: 0,
    _minus: 1,
    init: function() {
        this._acceleration = new cc.Acceleration(), this._deviceEvent = window.DeviceMotionEvent || window.DeviceOrientationEvent;
        var t = navigator.userAgent;
        return (/Android/.test(t) || /Adr/.test(t) && "ucbrowser" == cc.Browser.type) && (this._minus = -1), 
        "mqqbrowser" == cc.Browser.type && (this._deviceEvent = window.DeviceOrientationEvent), 
        !0;
    },
    getDelegate: function() {
        return this._delegate;
    },
    addDelegate: function(t) {
        this._delegate = t;
        var e = this.didAccelerate.bind(this);
        this._delegate ? this._deviceEvent == window.DeviceMotionEvent ? window.addEventListener("devicemotion", e, !1) : window.addEventListener("deviceorientation", e, !1) : this._deviceEvent == window.DeviceMotionEvent ? window.removeEventListener("devicemotion", e) : window.removeEventListener("deviceorientation", e);
    },
    setAccelerometerInterval: function(t) {
        this._interval !== t && (this._interval = t);
    },
    didAccelerate: function(t) {
        if (this._delegate) {
            var e = Date.now();
            if (!((e - this._acceleration.timestamp) / 1e3 < this._interval)) {
                if (this._deviceEvent == window.DeviceMotionEvent) {
                    var i = t.accelerationIncludingGravity;
                    this._acceleration.x = this._minus * i.x * .1, this._acceleration.y = this._minus * i.y * .1, 
                    this._acceleration.z = .1 * i.z;
                } else this._acceleration.x = t.gamma / 90 * .981, this._acceleration.y = .981 * -(t.beta / 90), 
                this._acceleration.z = t.alpha / 90 * .981;
                this._acceleration.timestamp = Date.now();
                var n = this._acceleration.x;
                switch (window.orientation) {
                  case cc.UIInterfaceOrientationLandscapeRight:
                    this._acceleration.x = -this._acceleration.y, this._acceleration.y = n;
                    break;

                  case cc.UIInterfaceOrientationLandscapeLeft:
                    this._acceleration.x = this._acceleration.y, this._acceleration.y = -n;
                    break;

                  case cc.UIInterfaceOrientationPortraitUpsideDown:
                    this._acceleration.x = -this._acceleration.x, this._acceleration.y = -this._acceleration.y;
                    break;

                  case cc.UIInterfaceOrientationPortrait:                }
                this._delegate.onAccelerometer(this._acceleration);
            }
        }
    }
}), cc.AccelerometerDispatcher.getInstance = function() {
    return this._instance || (this._instance = new cc.AccelerometerDispatcher(), this._instance.init()), 
    this._instance;
}, function() {
    "use strict";
    function t(t) {
        throw t;
    }
    function e(t, e) {
        var i = t.split("."), n = E;
        !(i[0] in n) && n.execScript && n.execScript("var " + i[0]);
        for (var r; i.length && (r = i.shift()); ) i.length || e === m ? n = n[r] ? n[r] : n[r] = {} : n[r] = e;
    }
    function i(t) {
        if ("string" == typeof t) {
            var e, i, n = t.split("");
            for (e = 0, i = n.length; i > e; e++) n[e] = (255 & n[e].charCodeAt(0)) >>> 0;
            t = n;
        }
        for (var r, c = 1, o = 0, s = t.length, a = 0; s > 0; ) {
            r = s > 1024 ? 1024 : s, s -= r;
            do c += t[a++], o += c; while (--r);
            c %= 65521, o %= 65521;
        }
        return (o << 16 | c) >>> 0;
    }
    function n(e, i) {
        this.index = "number" == typeof i ? i : 0, this.i = 0, this.buffer = e instanceof (y ? Uint8Array : Array) ? e : new (y ? Uint8Array : Array)(32768), 
        2 * this.buffer.length <= this.index && t(Error("invalid index")), this.buffer.length <= this.index && this.f();
    }
    function r(t) {
        this.buffer = new (y ? Uint16Array : Array)(2 * t), this.length = 0;
    }
    function c(t) {
        var e, i, n, r, c, o, s, a, h, u = t.length, l = 0, _ = Number.POSITIVE_INFINITY;
        for (a = 0; u > a; ++a) t[a] > l && (l = t[a]), t[a] < _ && (_ = t[a]);
        for (e = 1 << l, i = new (y ? Uint32Array : Array)(e), n = 1, r = 0, c = 2; l >= n; ) {
            for (a = 0; u > a; ++a) if (t[a] === n) {
                for (o = 0, s = r, h = 0; n > h; ++h) o = o << 1 | 1 & s, s >>= 1;
                for (h = o; e > h; h += c) i[h] = n << 16 | a;
                ++r;
            }
            ++n, r <<= 1, c <<= 1;
        }
        return [ i, l, _ ];
    }
    function o(t, e) {
        this.h = D, this.w = 0, this.input = t, this.b = 0, e && (e.lazy && (this.w = e.lazy), 
        "number" == typeof e.compressionType && (this.h = e.compressionType), e.outputBuffer && (this.a = y && e.outputBuffer instanceof Array ? new Uint8Array(e.outputBuffer) : e.outputBuffer), 
        "number" == typeof e.outputIndex && (this.b = e.outputIndex)), this.a || (this.a = new (y ? Uint8Array : Array)(32768));
    }
    function s(t, e) {
        this.length = t, this.G = e;
    }
    function a() {
        var e = F;
        switch (A) {
          case 3 === e:
            return [ 257, e - 3, 0 ];

          case 4 === e:
            return [ 258, e - 4, 0 ];

          case 5 === e:
            return [ 259, e - 5, 0 ];

          case 6 === e:
            return [ 260, e - 6, 0 ];

          case 7 === e:
            return [ 261, e - 7, 0 ];

          case 8 === e:
            return [ 262, e - 8, 0 ];

          case 9 === e:
            return [ 263, e - 9, 0 ];

          case 10 === e:
            return [ 264, e - 10, 0 ];

          case 12 >= e:
            return [ 265, e - 11, 1 ];

          case 14 >= e:
            return [ 266, e - 13, 1 ];

          case 16 >= e:
            return [ 267, e - 15, 1 ];

          case 18 >= e:
            return [ 268, e - 17, 1 ];

          case 22 >= e:
            return [ 269, e - 19, 2 ];

          case 26 >= e:
            return [ 270, e - 23, 2 ];

          case 30 >= e:
            return [ 271, e - 27, 2 ];

          case 34 >= e:
            return [ 272, e - 31, 2 ];

          case 42 >= e:
            return [ 273, e - 35, 3 ];

          case 50 >= e:
            return [ 274, e - 43, 3 ];

          case 58 >= e:
            return [ 275, e - 51, 3 ];

          case 66 >= e:
            return [ 276, e - 59, 3 ];

          case 82 >= e:
            return [ 277, e - 67, 4 ];

          case 98 >= e:
            return [ 278, e - 83, 4 ];

          case 114 >= e:
            return [ 279, e - 99, 4 ];

          case 130 >= e:
            return [ 280, e - 115, 4 ];

          case 162 >= e:
            return [ 281, e - 131, 5 ];

          case 194 >= e:
            return [ 282, e - 163, 5 ];

          case 226 >= e:
            return [ 283, e - 195, 5 ];

          case 257 >= e:
            return [ 284, e - 227, 5 ];

          case 258 === e:
            return [ 285, e - 258, 0 ];

          default:
            t("invalid length: " + e);
        }
    }
    function h(e, i) {
        function n(e, i) {
            var n, r = e.G, c = [], o = 0;
            n = B[e.length], c[o++] = 65535 & n, c[o++] = n >> 16 & 255, c[o++] = n >> 24;
            var s;
            switch (A) {
              case 1 === r:
                s = [ 0, r - 1, 0 ];
                break;

              case 2 === r:
                s = [ 1, r - 2, 0 ];
                break;

              case 3 === r:
                s = [ 2, r - 3, 0 ];
                break;

              case 4 === r:
                s = [ 3, r - 4, 0 ];
                break;

              case 6 >= r:
                s = [ 4, r - 5, 1 ];
                break;

              case 8 >= r:
                s = [ 5, r - 7, 1 ];
                break;

              case 12 >= r:
                s = [ 6, r - 9, 2 ];
                break;

              case 16 >= r:
                s = [ 7, r - 13, 2 ];
                break;

              case 24 >= r:
                s = [ 8, r - 17, 3 ];
                break;

              case 32 >= r:
                s = [ 9, r - 25, 3 ];
                break;

              case 48 >= r:
                s = [ 10, r - 33, 4 ];
                break;

              case 64 >= r:
                s = [ 11, r - 49, 4 ];
                break;

              case 96 >= r:
                s = [ 12, r - 65, 5 ];
                break;

              case 128 >= r:
                s = [ 13, r - 97, 5 ];
                break;

              case 192 >= r:
                s = [ 14, r - 129, 6 ];
                break;

              case 256 >= r:
                s = [ 15, r - 193, 6 ];
                break;

              case 384 >= r:
                s = [ 16, r - 257, 7 ];
                break;

              case 512 >= r:
                s = [ 17, r - 385, 7 ];
                break;

              case 768 >= r:
                s = [ 18, r - 513, 8 ];
                break;

              case 1024 >= r:
                s = [ 19, r - 769, 8 ];
                break;

              case 1536 >= r:
                s = [ 20, r - 1025, 9 ];
                break;

              case 2048 >= r:
                s = [ 21, r - 1537, 9 ];
                break;

              case 3072 >= r:
                s = [ 22, r - 2049, 10 ];
                break;

              case 4096 >= r:
                s = [ 23, r - 3073, 10 ];
                break;

              case 6144 >= r:
                s = [ 24, r - 4097, 11 ];
                break;

              case 8192 >= r:
                s = [ 25, r - 6145, 11 ];
                break;

              case 12288 >= r:
                s = [ 26, r - 8193, 12 ];
                break;

              case 16384 >= r:
                s = [ 27, r - 12289, 12 ];
                break;

              case 24576 >= r:
                s = [ 28, r - 16385, 13 ];
                break;

              case 32768 >= r:
                s = [ 29, r - 24577, 13 ];
                break;

              default:
                t("invalid distance");
            }
            n = s, c[o++] = n[0], c[o++] = n[1], c[o++] = n[2];
            var a, h;
            for (a = 0, h = c.length; h > a; ++a) p[g++] = c[a];
            E[c[0]]++, v[c[3]]++, T = e.length + i - 1, _ = null;
        }
        var r, c, o, a, h, u, l, _, d, f = {}, p = y ? new Uint16Array(2 * i.length) : [], g = 0, T = 0, E = new (y ? Uint32Array : Array)(286), v = new (y ? Uint32Array : Array)(30), S = e.w;
        if (!y) {
            for (o = 0; 285 >= o; ) E[o++] = 0;
            for (o = 0; 29 >= o; ) v[o++] = 0;
        }
        for (E[256] = 1, r = 0, c = i.length; c > r; ++r) {
            for (o = h = 0, a = 3; a > o && r + o !== c; ++o) h = h << 8 | i[r + o];
            if (f[h] === m && (f[h] = []), u = f[h], !(0 < T--)) {
                for (;0 < u.length && 32768 < r - u[0]; ) u.shift();
                if (r + 3 >= c) {
                    for (_ && n(_, -1), o = 0, a = c - r; a > o; ++o) d = i[r + o], p[g++] = d, ++E[d];
                    break;
                }
                if (0 < u.length) {
                    var x = m, C = m, R = 0, I = m, b = m, O = m, D = m, L = i.length, b = 0, D = u.length;
                    t: for (;D > b; b++) {
                        if (x = u[D - b - 1], I = 3, R > 3) {
                            for (O = R; O > 3; O--) if (i[x + O - 1] !== i[r + O - 1]) continue t;
                            I = R;
                        }
                        for (;258 > I && L > r + I && i[x + I] === i[r + I]; ) ++I;
                        if (I > R && (C = x, R = I), 258 === I) break;
                    }
                    l = new s(R, r - C), _ ? _.length < l.length ? (d = i[r - 1], p[g++] = d, ++E[d], 
                    n(l, 0)) : n(_, -1) : l.length < S ? _ = l : n(l, 0);
                } else _ ? n(_, -1) : (d = i[r], p[g++] = d, ++E[d]);
            }
            u.push(r);
        }
        return p[g++] = 256, E[256]++, e.L = E, e.K = v, y ? p.subarray(0, g) : p;
    }
    function u(t, e) {
        function i(t) {
            var e = S[t][x[t]];
            e === T ? (i(t + 1), i(t + 1)) : --E[e], ++x[t];
        }
        var n, c, o, s, a, h = t.length, u = new r(572), l = new (y ? Uint8Array : Array)(h);
        if (!y) for (s = 0; h > s; s++) l[s] = 0;
        for (s = 0; h > s; ++s) 0 < t[s] && u.push(s, t[s]);
        if (n = Array(u.length / 2), c = new (y ? Uint32Array : Array)(u.length / 2), 1 === n.length) return l[u.pop().index] = 1, 
        l;
        for (s = 0, a = u.length / 2; a > s; ++s) n[s] = u.pop(), c[s] = n[s].value;
        var _, d, f, p, g, T = c.length, m = new (y ? Uint16Array : Array)(e), A = new (y ? Uint8Array : Array)(e), E = new (y ? Uint8Array : Array)(T), v = Array(e), S = Array(e), x = Array(e), C = (1 << e) - T, R = 1 << e - 1;
        for (m[e - 1] = T, d = 0; e > d; ++d) R > C ? A[d] = 0 : (A[d] = 1, C -= R), C <<= 1, 
        m[e - 2 - d] = (m[e - 1 - d] / 2 | 0) + T;
        for (m[0] = A[0], v[0] = Array(m[0]), S[0] = Array(m[0]), d = 1; e > d; ++d) m[d] > 2 * m[d - 1] + A[d] && (m[d] = 2 * m[d - 1] + A[d]), 
        v[d] = Array(m[d]), S[d] = Array(m[d]);
        for (_ = 0; T > _; ++_) E[_] = e;
        for (f = 0; f < m[e - 1]; ++f) v[e - 1][f] = c[f], S[e - 1][f] = f;
        for (_ = 0; e > _; ++_) x[_] = 0;
        for (1 === A[e - 1] && (--E[0], ++x[e - 1]), d = e - 2; d >= 0; --d) {
            for (p = _ = 0, g = x[d + 1], f = 0; f < m[d]; f++) p = v[d + 1][g] + v[d + 1][g + 1], 
            p > c[_] ? (v[d][f] = p, S[d][f] = T, g += 2) : (v[d][f] = c[_], S[d][f] = _, ++_);
            x[d] = 0, 1 === A[d] && i(d);
        }
        for (o = E, s = 0, a = n.length; a > s; ++s) l[n[s].index] = o[s];
        return l;
    }
    function l(e) {
        var i, n, r, c, o = new (y ? Uint16Array : Array)(e.length), s = [], a = [], h = 0;
        for (i = 0, n = e.length; n > i; i++) s[e[i]] = (0 | s[e[i]]) + 1;
        for (i = 1, n = 16; n >= i; i++) a[i] = h, h += 0 | s[i], h > 1 << i && t("overcommitted"), 
        h <<= 1;
        for (65536 > h && t("undercommitted"), i = 0, n = e.length; n > i; i++) for (h = a[e[i]], 
        a[e[i]] += 1, r = o[i] = 0, c = e[i]; c > r; r++) o[i] = o[i] << 1 | 1 & h, h >>>= 1;
        return o;
    }
    function _(t, e) {
        this.input = t, this.a = new (y ? Uint8Array : Array)(32768), this.h = M.j;
        var i, n = {};
        !e && (e = {}) || "number" != typeof e.compressionType || (this.h = e.compressionType);
        for (i in e) n[i] = e[i];
        n.outputBuffer = this.a, this.z = new o(this.input, n);
    }
    function d(e, i) {
        switch (this.k = [], this.l = 32768, this.e = this.g = this.c = this.q = 0, this.input = y ? new Uint8Array(e) : e, 
        this.s = !1, this.m = k, this.B = !1, (i || !(i = {})) && (i.index && (this.c = i.index), 
        i.bufferSize && (this.l = i.bufferSize), i.bufferType && (this.m = i.bufferType), 
        i.resize && (this.B = i.resize)), this.m) {
          case U:
            this.b = 32768, this.a = new (y ? Uint8Array : Array)(32768 + this.l + 258);
            break;

          case k:
            this.b = 0, this.a = new (y ? Uint8Array : Array)(this.l), this.f = this.J, this.t = this.H, 
            this.o = this.I;
            break;

          default:
            t(Error("invalid inflate mode"));
        }
    }
    function f(e, i) {
        for (var n, r = e.g, c = e.e, o = e.input, s = e.c; i > c; ) n = o[s++], n === m && t(Error("input buffer is broken")), 
        r |= n << c, c += 8;
        return n = r & (1 << i) - 1, e.g = r >>> i, e.e = c - i, e.c = s, n;
    }
    function p(e, i) {
        for (var n, r, c, o = e.g, s = e.e, a = e.input, h = e.c, u = i[0], l = i[1]; l > s; ) n = a[h++], 
        n === m && t(Error("input buffer is broken")), o |= n << s, s += 8;
        return r = u[o & (1 << l) - 1], c = r >>> 16, e.g = o >> c, e.e = s - c, e.c = h, 
        65535 & r;
    }
    function g(t) {
        function e(t, e, i) {
            var n, r, c, o;
            for (o = 0; t > o; ) switch (n = p(this, e)) {
              case 16:
                for (c = 3 + f(this, 2); c--; ) i[o++] = r;
                break;

              case 17:
                for (c = 3 + f(this, 3); c--; ) i[o++] = 0;
                r = 0;
                break;

              case 18:
                for (c = 11 + f(this, 7); c--; ) i[o++] = 0;
                r = 0;
                break;

              default:
                r = i[o++] = n;
            }
            return i;
        }
        var i, n, r, o, s = f(t, 5) + 257, a = f(t, 5) + 1, h = f(t, 4) + 4, u = new (y ? Uint8Array : Array)(z.length);
        for (o = 0; h > o; ++o) u[z[o]] = f(t, 3);
        i = c(u), n = new (y ? Uint8Array : Array)(s), r = new (y ? Uint8Array : Array)(a), 
        t.o(c(e.call(t, s, i, n)), c(e.call(t, a, i, r)));
    }
    function T(e, i) {
        var n, r;
        switch (this.input = e, this.c = 0, (i || !(i = {})) && (i.index && (this.c = i.index), 
        i.verify && (this.M = i.verify)), n = e[this.c++], r = e[this.c++], 15 & n) {
          case ge:
            this.method = ge;
            break;

          default:
            t(Error("unsupported compression method"));
        }
        0 !== ((n << 8) + r) % 31 && t(Error("invalid fcheck flag:" + ((n << 8) + r) % 31)), 
        32 & r && t(Error("fdict flag is not supported")), this.A = new d(e, {
            index: this.c,
            bufferSize: i.bufferSize,
            bufferType: i.bufferType,
            resize: i.resize
        });
    }
    var m = void 0, A = !0, E = this, y = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array;
    n.prototype.f = function() {
        var t, e = this.buffer, i = e.length, n = new (y ? Uint8Array : Array)(i << 1);
        if (y) n.set(e); else for (t = 0; i > t; ++t) n[t] = e[t];
        return this.buffer = n;
    }, n.prototype.d = function(t, e, i) {
        var n, r = this.buffer, c = this.index, o = this.i, s = r[c];
        if (i && e > 1 && (t = e > 8 ? (I[255 & t] << 24 | I[t >>> 8 & 255] << 16 | I[t >>> 16 & 255] << 8 | I[t >>> 24 & 255]) >> 32 - e : I[t] >> 8 - e), 
        8 > e + o) s = s << e | t, o += e; else for (n = 0; e > n; ++n) s = s << 1 | t >> e - n - 1 & 1, 
        8 === ++o && (o = 0, r[c++] = I[s], s = 0, c === r.length && (r = this.f()));
        r[c] = s, this.buffer = r, this.i = o, this.index = c;
    }, n.prototype.finish = function() {
        var t, e = this.buffer, i = this.index;
        return 0 < this.i && (e[i] <<= 8 - this.i, e[i] = I[e[i]], i++), y ? t = e.subarray(0, i) : (e.length = i, 
        t = e), t;
    };
    var v, S = new (y ? Uint8Array : Array)(256);
    for (v = 0; 256 > v; ++v) {
        for (var x = v, C = x, R = 7, x = x >>> 1; x; x >>>= 1) C <<= 1, C |= 1 & x, --R;
        S[v] = (C << R & 255) >>> 0;
    }
    var I = S, b = [ 0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117 ];
    y && new Uint32Array(b), r.prototype.getParent = function(t) {
        return 2 * ((t - 2) / 4 | 0);
    }, r.prototype.push = function(t, e) {
        var i, n, r, c = this.buffer;
        for (i = this.length, c[this.length++] = e, c[this.length++] = t; i > 0 && (n = this.getParent(i), 
        c[i] > c[n]); ) r = c[i], c[i] = c[n], c[n] = r, r = c[i + 1], c[i + 1] = c[n + 1], 
        c[n + 1] = r, i = n;
        return this.length;
    }, r.prototype.pop = function() {
        var t, e, i, n, r, c = this.buffer;
        for (e = c[0], t = c[1], this.length -= 2, c[0] = c[this.length], c[1] = c[this.length + 1], 
        r = 0; (n = 2 * r + 2, !(n >= this.length)) && (n + 2 < this.length && c[n + 2] > c[n] && (n += 2), 
        c[n] > c[r]); ) i = c[r], c[r] = c[n], c[n] = i, i = c[r + 1], c[r + 1] = c[n + 1], 
        c[n + 1] = i, r = n;
        return {
            index: t,
            value: e,
            length: this.length
        };
    };
    var O, D = 2, L = {
        NONE: 0,
        r: 1,
        j: D,
        N: 3
    }, w = [];
    for (O = 0; 288 > O; O++) switch (A) {
      case 143 >= O:
        w.push([ O + 48, 8 ]);
        break;

      case 255 >= O:
        w.push([ O - 144 + 400, 9 ]);
        break;

      case 279 >= O:
        w.push([ O - 256 + 0, 7 ]);
        break;

      case 287 >= O:
        w.push([ O - 280 + 192, 8 ]);
        break;

      default:
        t("invalid literal: " + O);
    }
    o.prototype.n = function() {
        var e, i, r, c, o = this.input;
        switch (this.h) {
          case 0:
            for (r = 0, c = o.length; c > r; ) {
                i = y ? o.subarray(r, r + 65535) : o.slice(r, r + 65535), r += i.length;
                var s = i, a = r === c, _ = m, d = m, f = m, p = m, g = m, T = this.a, E = this.b;
                if (y) {
                    for (T = new Uint8Array(this.a.buffer); T.length <= E + s.length + 5; ) T = new Uint8Array(T.length << 1);
                    T.set(this.a);
                }
                if (_ = a ? 1 : 0, T[E++] = 0 | _, d = s.length, f = ~d + 65536 & 65535, T[E++] = 255 & d, 
                T[E++] = d >>> 8 & 255, T[E++] = 255 & f, T[E++] = f >>> 8 & 255, y) T.set(s, E), 
                E += s.length, T = T.subarray(0, E); else {
                    for (p = 0, g = s.length; g > p; ++p) T[E++] = s[p];
                    T.length = E;
                }
                this.b = E, this.a = T;
            }
            break;

          case 1:
            var v = new n(new Uint8Array(this.a.buffer), this.b);
            v.d(1, 1, A), v.d(1, 2, A);
            var S, x, C, R = h(this, o);
            for (S = 0, x = R.length; x > S; S++) if (C = R[S], n.prototype.d.apply(v, w[C]), 
            C > 256) v.d(R[++S], R[++S], A), v.d(R[++S], 5), v.d(R[++S], R[++S], A); else if (256 === C) break;
            this.a = v.finish(), this.b = this.a.length;
            break;

          case D:
            var I, b, O, L, F, P, N, B, M, U, k, W, G, V, X, z = new n(new Uint8Array(this.a), this.b), H = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ], Y = Array(19);
            for (I = D, z.d(1, 1, A), z.d(I, 2, A), b = h(this, o), P = u(this.L, 15), N = l(P), 
            B = u(this.K, 7), M = l(B), O = 286; O > 257 && 0 === P[O - 1]; O--) ;
            for (L = 30; L > 1 && 0 === B[L - 1]; L--) ;
            var j, q, Z, Q, K, J, $ = O, te = L, ee = new (y ? Uint32Array : Array)($ + te), ie = new (y ? Uint32Array : Array)(316), ne = new (y ? Uint8Array : Array)(19);
            for (j = q = 0; $ > j; j++) ee[q++] = P[j];
            for (j = 0; te > j; j++) ee[q++] = B[j];
            if (!y) for (j = 0, Q = ne.length; Q > j; ++j) ne[j] = 0;
            for (j = K = 0, Q = ee.length; Q > j; j += q) {
                for (q = 1; Q > j + q && ee[j + q] === ee[j]; ++q) ;
                if (Z = q, 0 === ee[j]) if (3 > Z) for (;0 < Z--; ) ie[K++] = 0, ne[0]++; else for (;Z > 0; ) J = 138 > Z ? Z : 138, 
                J > Z - 3 && Z > J && (J = Z - 3), 10 >= J ? (ie[K++] = 17, ie[K++] = J - 3, ne[17]++) : (ie[K++] = 18, 
                ie[K++] = J - 11, ne[18]++), Z -= J; else if (ie[K++] = ee[j], ne[ee[j]]++, Z--, 
                3 > Z) for (;0 < Z--; ) ie[K++] = ee[j], ne[ee[j]]++; else for (;Z > 0; ) J = 6 > Z ? Z : 6, 
                J > Z - 3 && Z > J && (J = Z - 3), ie[K++] = 16, ie[K++] = J - 3, ne[16]++, Z -= J;
            }
            for (e = y ? ie.subarray(0, K) : ie.slice(0, K), U = u(ne, 7), V = 0; 19 > V; V++) Y[V] = U[H[V]];
            for (F = 19; F > 4 && 0 === Y[F - 1]; F--) ;
            for (k = l(U), z.d(O - 257, 5, A), z.d(L - 1, 5, A), z.d(F - 4, 4, A), V = 0; F > V; V++) z.d(Y[V], 3, A);
            for (V = 0, X = e.length; X > V; V++) if (W = e[V], z.d(k[W], U[W], A), W >= 16) {
                switch (V++, W) {
                  case 16:
                    G = 2;
                    break;

                  case 17:
                    G = 3;
                    break;

                  case 18:
                    G = 7;
                    break;

                  default:
                    t("invalid code: " + W);
                }
                z.d(e[V], G, A);
            }
            var re, ce, oe, se, ae, he, ue, le, _e = [ N, P ], de = [ M, B ];
            for (ae = _e[0], he = _e[1], ue = de[0], le = de[1], re = 0, ce = b.length; ce > re; ++re) if (oe = b[re], 
            z.d(ae[oe], he[oe], A), oe > 256) z.d(b[++re], b[++re], A), se = b[++re], z.d(ue[se], le[se], A), 
            z.d(b[++re], b[++re], A); else if (256 === oe) break;
            this.a = z.finish(), this.b = this.a.length;
            break;

          default:
            t("invalid compression type");
        }
        return this.a;
    };
    var F, P, N = [];
    for (F = 3; 258 >= F; F++) P = a(), N[F] = P[2] << 24 | P[1] << 16 | P[0];
    var B = y ? new Uint32Array(N) : N, M = L;
    _.prototype.n = function() {
        var e, n, r, c, o, s, a, h = 0;
        switch (a = this.a, e = ge) {
          case ge:
            n = Math.LOG2E * Math.log(32768) - 8;
            break;

          default:
            t(Error("invalid compression method"));
        }
        switch (r = n << 4 | e, a[h++] = r, e) {
          case ge:
            switch (this.h) {
              case M.NONE:
                o = 0;
                break;

              case M.r:
                o = 1;
                break;

              case M.j:
                o = 2;
                break;

              default:
                t(Error("unsupported compression type"));
            }
            break;

          default:
            t(Error("invalid compression method"));
        }
        return c = o << 6 | 0, a[h++] = c | 31 - (256 * r + c) % 31, s = i(this.input), 
        this.z.b = h, a = this.z.n(), h = a.length, y && (a = new Uint8Array(a.buffer), 
        a.length <= h + 4 && (this.a = new Uint8Array(a.length + 4), this.a.set(a), a = this.a), 
        a = a.subarray(0, h + 4)), a[h++] = s >> 24 & 255, a[h++] = s >> 16 & 255, a[h++] = s >> 8 & 255, 
        a[h++] = 255 & s, a;
    }, e("Zlib.Deflate", _), e("Zlib.Deflate.compress", function(t, e) {
        return new _(t, e).n();
    }), e("Zlib.Deflate.CompressionType", M), e("Zlib.Deflate.CompressionType.NONE", M.NONE), 
    e("Zlib.Deflate.CompressionType.FIXED", M.r), e("Zlib.Deflate.CompressionType.DYNAMIC", M.j);
    var U = 0, k = 1, W = {
        D: U,
        C: k
    };
    d.prototype.p = function() {
        for (;!this.s; ) {
            var e = f(this, 3);
            switch (1 & e && (this.s = A), e >>>= 1) {
              case 0:
                var i = this.input, n = this.c, r = this.a, c = this.b, o = m, s = m, a = m, h = r.length, u = m;
                switch (this.e = this.g = 0, o = i[n++], o === m && t(Error("invalid uncompressed block header: LEN (first byte)")), 
                s = o, o = i[n++], o === m && t(Error("invalid uncompressed block header: LEN (second byte)")), 
                s |= o << 8, o = i[n++], o === m && t(Error("invalid uncompressed block header: NLEN (first byte)")), 
                a = o, o = i[n++], o === m && t(Error("invalid uncompressed block header: NLEN (second byte)")), 
                a |= o << 8, s === ~a && t(Error("invalid uncompressed block header: length verify")), 
                n + s > i.length && t(Error("input buffer is broken")), this.m) {
                  case U:
                    for (;c + s > r.length; ) {
                        if (u = h - c, s -= u, y) r.set(i.subarray(n, n + u), c), c += u, n += u; else for (;u--; ) r[c++] = i[n++];
                        this.b = c, r = this.f(), c = this.b;
                    }
                    break;

                  case k:
                    for (;c + s > r.length; ) r = this.f({
                        v: 2
                    });
                    break;

                  default:
                    t(Error("invalid inflate mode"));
                }
                if (y) r.set(i.subarray(n, n + s), c), c += s, n += s; else for (;s--; ) r[c++] = i[n++];
                this.c = n, this.b = c, this.a = r;
                break;

              case 1:
                this.o(ie, re);
                break;

              case 2:
                g(this);
                break;

              default:
                t(Error("unknown BTYPE: " + e));
            }
        }
        return this.t();
    };
    var G, V, X = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ], z = y ? new Uint16Array(X) : X, H = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258 ], Y = y ? new Uint16Array(H) : H, j = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0 ], q = y ? new Uint8Array(j) : j, Z = [ 1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577 ], Q = y ? new Uint16Array(Z) : Z, K = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ], J = y ? new Uint8Array(K) : K, $ = new (y ? Uint8Array : Array)(288);
    for (G = 0, V = $.length; V > G; ++G) $[G] = 143 >= G ? 8 : 255 >= G ? 9 : 279 >= G ? 7 : 8;
    var te, ee, ie = c($), ne = new (y ? Uint8Array : Array)(30);
    for (te = 0, ee = ne.length; ee > te; ++te) ne[te] = 5;
    var re = c(ne);
    d.prototype.o = function(t, e) {
        var i = this.a, n = this.b;
        this.u = t;
        for (var r, c, o, s, a = i.length - 258; 256 !== (r = p(this, t)); ) if (256 > r) n >= a && (this.b = n, 
        i = this.f(), n = this.b), i[n++] = r; else for (c = r - 257, s = Y[c], 0 < q[c] && (s += f(this, q[c])), 
        r = p(this, e), o = Q[r], 0 < J[r] && (o += f(this, J[r])), n >= a && (this.b = n, 
        i = this.f(), n = this.b); s--; ) i[n] = i[n++ - o];
        for (;8 <= this.e; ) this.e -= 8, this.c--;
        this.b = n;
    }, d.prototype.I = function(t, e) {
        var i = this.a, n = this.b;
        this.u = t;
        for (var r, c, o, s, a = i.length; 256 !== (r = p(this, t)); ) if (256 > r) n >= a && (i = this.f(), 
        a = i.length), i[n++] = r; else for (c = r - 257, s = Y[c], 0 < q[c] && (s += f(this, q[c])), 
        r = p(this, e), o = Q[r], 0 < J[r] && (o += f(this, J[r])), n + s > a && (i = this.f(), 
        a = i.length); s--; ) i[n] = i[n++ - o];
        for (;8 <= this.e; ) this.e -= 8, this.c--;
        this.b = n;
    }, d.prototype.f = function() {
        var t, e, i = new (y ? Uint8Array : Array)(this.b - 32768), n = this.b - 32768, r = this.a;
        if (y) i.set(r.subarray(32768, i.length)); else for (t = 0, e = i.length; e > t; ++t) i[t] = r[t + 32768];
        if (this.k.push(i), this.q += i.length, y) r.set(r.subarray(n, n + 32768)); else for (t = 0; 32768 > t; ++t) r[t] = r[n + t];
        return this.b = 32768, r;
    }, d.prototype.J = function(t) {
        var e, i, n, r, c = this.input.length / this.c + 1 | 0, o = this.input, s = this.a;
        return t && ("number" == typeof t.v && (c = t.v), "number" == typeof t.F && (c += t.F)), 
        2 > c ? (i = (o.length - this.c) / this.u[2], r = 258 * (i / 2) | 0, n = r < s.length ? s.length + r : s.length << 1) : n = s.length * c, 
        y ? (e = new Uint8Array(n), e.set(s)) : e = s, this.a = e;
    }, d.prototype.t = function() {
        var t, e, i, n, r, c = 0, o = this.a, s = this.k, a = new (y ? Uint8Array : Array)(this.q + (this.b - 32768));
        if (0 === s.length) return y ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
        for (e = 0, i = s.length; i > e; ++e) for (t = s[e], n = 0, r = t.length; r > n; ++n) a[c++] = t[n];
        for (e = 32768, i = this.b; i > e; ++e) a[c++] = o[e];
        return this.k = [], this.buffer = a;
    }, d.prototype.H = function() {
        var t, e = this.b;
        return y ? this.B ? (t = new Uint8Array(e), t.set(this.a.subarray(0, e))) : t = this.a.subarray(0, e) : (this.a.length > e && (this.a.length = e), 
        t = this.a), this.buffer = t;
    }, T.prototype.p = function() {
        var e, n, r = this.input;
        return e = this.A.p(), this.c = this.A.c, this.M && (n = (r[this.c++] << 24 | r[this.c++] << 16 | r[this.c++] << 8 | r[this.c++]) >>> 0, 
        n !== i(e) && t(Error("invalid adler-32 checksum"))), e;
    }, e("Zlib.Inflate", T), e("Zlib.Inflate.BufferType", W), W.ADAPTIVE = W.C, W.BLOCK = W.D, 
    e("Zlib.Inflate.prototype.decompress", T.prototype.p);
    var ce = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];
    y && new Uint16Array(ce);
    var oe = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258 ];
    y && new Uint16Array(oe);
    var se = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0 ];
    y && new Uint8Array(se);
    var ae = [ 1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577 ];
    y && new Uint16Array(ae);
    var he = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ];
    y && new Uint8Array(he);
    var ue, le, _e = new (y ? Uint8Array : Array)(288);
    for (ue = 0, le = _e.length; le > ue; ++ue) _e[ue] = 143 >= ue ? 8 : 255 >= ue ? 9 : 279 >= ue ? 7 : 8;
    c(_e);
    var de, fe, pe = new (y ? Uint8Array : Array)(30);
    for (de = 0, fe = pe.length; fe > de; ++de) pe[de] = 5;
    c(pe);
    var ge = 8;
}.call(this), cc.RESOLUTION_POLICY = {
    EXACT_FIT: 0,
    NO_BORDER: 1,
    SHOW_ALL: 2,
    FIXED_HEIGHT: 3,
    FIXED_WIDTH: 4,
    UNKNOWN: 5
}, cc.Touches = [], cc.TouchesIntergerDict = {}, cc.EGLView = cc.Class.extend({
    _delegate: null,
    _screenSize: null,
    _designResolutionSize: null,
    _viewPortRect: null,
    _viewName: "",
    _scaleX: 1,
    _originalScaleX: 1,
    _scaleY: 1,
    _originalScaleY: 1,
    _indexBitsUsed: 0,
    _maxTouches: 5,
    _resolutionPolicy: cc.RESOLUTION_POLICY.UNKNOWN,
    _initialize: !1,
    _captured: !1,
    _wnd: null,
    _hDC: null,
    _hRC: null,
    _accelerometerKeyHook: null,
    _supportTouch: !1,
    _contentTranslateLeftTop: null,
    _menu: null,
    _wndProc: null,
    _ele: null,
    _frameZoomFactor: 1,
    __resizeWithBrowserSize: !1,
    __isAdjustSizeToBrowser: !1,
    ctor: function() {
        this._ele = cc.container.parentNode === document.body ? document.documentElement : cc.container.parentNode, 
        this._viewName = "Cocos2dHTML5", this._designResolutionSize = cc.SizeZero(), this._viewPortRect = cc.RectZero(), 
        this._delegate = cc.Director.getInstance().getTouchDispatcher(), this._contentTranslateLeftTop = {
            left: 0,
            top: 0
        }, this._screenSize = cc.size(cc.canvas.width, cc.canvas.height), this._hDC = cc.canvas, 
        this._hRC = cc.renderContext;
    },
    initialize: function() {
        this._scrollToBottom(), this._initialize = !0;
    },
    _resizeWithBrowserSize: function(t) {
        var e;
        t ? this.__resizeWithBrowserSize || (this.__resizeWithBrowserSize = !0, e = this._adjustSizeToBrowser.bind(this), 
        window.addEventListener("resize", e, !1)) : this.__resizeWithBrowserSize && (this.__resizeWithBrowserSize = !0, 
        e = this._adjustSizeToBrowser.bind(this), window.removeEventListener("resize", e, !1));
    },
    _scrollToBottom: function() {
        cc.Browser.isMobile && (cc.canvas.height = this._ele.clientHeight + 500, window.location.href = "#bottom");
    },
    _initScreenSize: function() {
        var t = this._screenSize;
        t.width = this._ele.clientWidth, t.height = this._ele.clientHeight, navigator.userAgent.match(/iPhone/i) && (t.height += t.width / 320 * 60);
    },
    _setupViewport: function(t, e) {
        for (var i, n = document.head, r = n.getElementsByTagName("meta"), c = 0; c < r.length; c++) {
            var o = r[c];
            if ("viewport" == o.name.toLowerCase()) {
                i = o;
                break;
            }
        }
        i || (i = document.createElement("meta"), i.name = "viewport", n.appendChild(i)), 
        i.content = t ? "width=" + e + ",user-scalable=no" : "height=" + e + ",user-scalable=no";
    },
    _adjustSizeToBrowser: function() {
        if (this.__isAdjustSizeToBrowser = !0, this._scrollToBottom(), this._initScreenSize(), 
        !cc.Browser.isMobile) {
            var t = cc.canvas;
            t.width = this._screenSize.width, t.height = this._screenSize.height, "opengl" in sys.capabilities || cc.renderContext.translate(0, t.height);
            var e = document.querySelector("#" + document.ccConfig.tag).parentNode;
            e && (e.style.width = t.width + "px", e.style.height = t.height + "px");
            var i = document.body;
            i && (i.style.padding = "0px", i.style.border = "0px", i.style.margin = "0px");
        }
        this.setDesignResolutionSize();
    },
    _adjustSizeKeepCanvasSize: function() {
        "opengl" in sys.capabilities || cc.renderContext.translate(0, cc.canvas.height), 
        this._screenSize = cc.size(cc.canvas.width, cc.canvas.height), this.setDesignResolutionSize();
    },
    end: function() {},
    isOpenGLReady: function() {
        return null != this._hDC && null != this._hRC;
    },
    setFrameZoomFactor: function(t) {
        this._frameZoomFactor = t, this.centerWindow(), cc.Director.getInstance().setProjection(cc.Director.getInstance().getProjection());
    },
    swapBuffers: function() {},
    setIMEKeyboardState: function(t) {},
    setContentTranslateLeftTop: function(t, e) {
        this._contentTranslateLeftTop = {
            left: t,
            top: e
        };
    },
    getContentTranslateLeftTop: function() {
        return this._contentTranslateLeftTop;
    },
    getFrameSize: function() {
        return cc.size(this._screenSize.width, this._screenSize.height);
    },
    setFrameSize: function(t, e) {
        this._designResolutionSize.width = this._screenSize.width = t, this._designResolutionSize.height = this._screenSize.height = e, 
        this.centerWindow(), cc.Director.getInstance().setProjection(cc.Director.getInstance().getProjection());
    },
    centerWindow: function() {},
    setAccelerometerKeyHook: function(t) {
        this._accelerometerKeyHook = t;
    },
    getVisibleSize: function() {
        return this._resolutionPolicy === cc.RESOLUTION_POLICY.NO_BORDER ? cc.size(this._screenSize.width / this._scaleX, this._screenSize.height / this._scaleY) : cc.size(this._designResolutionSize.width, this._designResolutionSize.height);
    },
    getVisibleOrigin: function() {
        return this._resolutionPolicy === cc.RESOLUTION_POLICY.NO_BORDER ? cc.p((this._designResolutionSize.width - this._screenSize.width / this._scaleX) / 2, (this._designResolutionSize.height - this._screenSize.height / this._scaleY) / 2) : cc.p(0, 0);
    },
    canSetContentScaleFactor: function() {
        return !0;
    },
    setDesignResolutionSize: function(t, e, i) {
        if (cc.Assert(i !== cc.RESOLUTION_POLICY.UNKNOWN, "should set resolutionPolicy"), 
        0 != t && 0 != e) {
            null != t && null != e && (this._designResolutionSize = cc.size(t, e)), null != i && (this._resolutionPolicy = i), 
            this._initialize || this.initialize();
            var n = this._screenSize, r = this._designResolutionSize, c = this._resolutionPolicy;
            this._scaleX = n.width / r.width, this._scaleY = n.height / r.height, c === cc.RESOLUTION_POLICY.NO_BORDER && (this._scaleX = this._scaleY = Math.max(this._scaleX, this._scaleY)), 
            c === cc.RESOLUTION_POLICY.SHOW_ALL && (this._scaleX = this._scaleY = Math.min(this._scaleX, this._scaleY)), 
            c === cc.RESOLUTION_POLICY.FIXED_HEIGHT && (this._scaleX = this._scaleY, r.width = Math.ceil(n.width / this._scaleX)), 
            c === cc.RESOLUTION_POLICY.FIXED_WIDTH && (this._scaleY = this._scaleX, r.height = Math.ceil(n.height / this._scaleY));
            var o = r.width * this._scaleX, s = r.height * this._scaleY;
            this._viewPortRect = cc.rect((n.width - o) / 2, (n.height - s) / 2, o, s);
            var a = cc.Director.getInstance();
            if (a._winSizeInPoints = this.getDesignResolutionSize(), cc.renderContextType === cc.CANVAS) if (c === cc.RESOLUTION_POLICY.SHOW_ALL) {
                var h = Math.abs(n.height - s) / 2;
                cc.canvas.width = o, cc.canvas.height = s, cc.container.style.textAlign = "center", 
                cc.container.style.verticalAlign = "middle", cc.renderContext.translate(0, s), this._ele.style.paddingTop = h + "px", 
                this._ele.style.paddingBottom = h + "px", this._viewPortRect = cc.rect(0, 0, o, s);
            } else (c === cc.RESOLUTION_POLICY.NO_BORDER || c === cc.RESOLUTION_POLICY.FIXED_WIDTH || c === cc.RESOLUTION_POLICY.FIXED_HEIGHT || c === cc.RESOLUTION_POLICY.EXACT_FIT) && (cc.canvas.width = o, 
            cc.canvas.height = s, cc.renderContext.translate(this._viewPortRect.x, this._viewPortRect.y + this._viewPortRect.height)); else a._createStatsLabel(), 
            a.setGLDefaultValues();
            this._originalScaleX = this._scaleX, this._originalScaleY = this._scaleY, cc.DOM._resetEGLViewDiv(), 
            cc.Browser.isMobile && this.__isAdjustSizeToBrowser && this._calculateViewPortByPolicy();
        }
    },
    _calculateViewPortByPolicy: function() {},
    _setScaleXYForRenderTexture: function() {
        var t = cc.CONTENT_SCALE_FACTOR();
        this._scaleX = t, this._scaleY = t;
    },
    _resetScale: function() {
        this._scaleX = this._originalScaleX, this._scaleY = this._originalScaleY;
    },
    getDesignResolutionSize: function() {
        return cc.size(this._designResolutionSize.width, this._designResolutionSize.height);
    },
    setTouchDelegate: function(t) {
        this._delegate = t;
    },
    setViewPortInPoints: function(t, e, i, n) {
        var r = this._frameZoomFactor, c = this._scaleX, o = this._scaleY;
        cc.renderContext.viewport(t * c * r + this._viewPortRect.x * r, e * o * r + this._viewPortRect.y * r, i * c * r, n * o * r);
    },
    setScissorInPoints: function(t, e, i, n) {
        var r = this._frameZoomFactor, c = this._scaleX, o = this._scaleY;
        cc.renderContext.scissor(t * c * r + this._viewPortRect.x * r, e * o * r + this._viewPortRect.y * r, i * c * r, n * o * r);
    },
    isScissorEnabled: function() {
        var t = cc.renderContext;
        return t.isEnabled(t.SCISSOR_TEST);
    },
    getScissorRect: function() {
        var t = cc.renderContext, e = this._scaleX, i = this._scaleY, n = t.getParameter(t.SCISSOR_BOX);
        return cc.rect((n[0] - this._viewPortRect.x) / e, (n[1] - this._viewPortRect.y) / i, n[2] / e, n[3] / i);
    },
    setViewName: function(t) {
        null != t && t.length > 0 && (this._viewName = t);
    },
    getViewName: function() {
        return this._viewName;
    },
    getViewPortRect: function() {
        return this._viewPortRect;
    },
    getScaleX: function() {
        return this._scaleX;
    },
    getScaleY: function() {
        return this._scaleY;
    },
    convertToLocationInView: function(t, e, i) {
        return {
            x: t - i.left,
            y: i.top + i.height - e
        };
    },
    handleTouchesBegin: function(t, e, i, n) {
        for (var r = [], c = this._viewPortRect, o = this._scaleX, s = this._scaleY, a = 0; t > a; ++a) {
            var h = e[a], u = i[a], l = n[a], _ = cc.TouchesIntergerDict[h], d = 0;
            if (null == _) {
                if (d = this._getUnUsedIndex(), -1 == d) {
                    cc.log("The touches is more than MAX_TOUCHES, nUnusedIndex = " + d);
                    continue;
                }
                var f = cc.Touches[d] = new cc.Touch();
                f.setTouchInfo(d, (u - c.x) / o, (l - c.y) / s);
                var p = 0 | d;
                cc.TouchesIntergerDict[h] = p, r.push(f);
            }
        }
        0 != r.length && this._delegate.touchesBegan(r, null);
    },
    handleTouchesMove: function(t, e, i, n) {
        for (var r = [], c = this._scaleX, o = this._scaleY, s = this._viewPortRect.x, a = this._viewPortRect.y, h = 0; t > h; ++h) {
            var u = e[h], l = i[h], _ = n[h], d = cc.TouchesIntergerDict[u];
            if (null != d) {
                var f = cc.Touches[d];
                if (!f) return;
                f.setTouchInfo(d, (l - s) / c, (_ - a) / o), r.push(f);
            }
        }
        0 != r.length && this._delegate.touchesMoved(r, null);
    },
    handleTouchesEnd: function(t, e, i, n) {
        var r = [];
        this.getSetOfTouchesEndOrCancel(r, t, e, i, n), this._delegate.touchesEnded(r, null);
    },
    handleTouchesCancel: function(t, e, i, n) {
        var r = [];
        this.getSetOfTouchesEndOrCancel(r, t, e, i, n), this._delegate.touchesCancelled(r, null);
    },
    getSetOfTouchesEndOrCancel: function(t, e, i, n, r) {
        for (var c = this._scaleX, o = this._scaleY, s = this._viewPortRect, a = 0; e > a; ++a) {
            var h = i[a], u = n[a], l = r[a], _ = cc.TouchesIntergerDict[h];
            if (null != _) {
                var d = cc.Touches[_];
                if (!d) return;
                d.setTouchInfo(_, (u - s.x) / c, (l - s.y) / o), t.push(d), cc.Touches[_] = null, 
                this._removeUsedIndexBit(_), delete cc.TouchesIntergerDict[h];
            }
        }
    },
    _getUnUsedIndex: function() {
        var t, e = this._indexBitsUsed;
        for (t = 0; t < this._maxTouches; t++) {
            if (!(1 & e)) return this._indexBitsUsed |= 1 << t, t;
            e >>= 1;
        }
        return -1;
    },
    _removeUsedIndexBit: function(t) {
        if (!(0 > t || t >= this._maxTouches)) {
            var e = 1 << t;
            e = ~e, this._indexBitsUsed &= e;
        }
    },
    touchesBegan: function(t) {
        for (var e, i = [], n = [], r = [], c = 0, o = 0; o < t.length; o++) e = t[o], i[c] = e.getId() || o, 
        n[c] = e.getLocation().x, r[c] = e.getLocation().y, ++c;
        this.handleTouchesBegin(c, i, n, r);
    },
    touchesMoved: function(t) {
        for (var e, i = [], n = [], r = [], c = 0, o = 0; o < t.length; o++) e = t[o], i[c] = e.getId() || o, 
        n[c] = e.getLocation().x, r[c] = e.getLocation().y, ++c;
        this.handleTouchesMove(c, i, n, r);
    },
    touchesEnded: function(t) {
        for (var e, i = [], n = [], r = [], c = 0, o = 0; o < t.length; o++) e = t[o], i[c] = e.getId() || o, 
        n[c] = e.getLocation().x, r[c] = e.getLocation().y, ++c;
        this.handleTouchesEnd(c, i, n, r);
    },
    touchesCancelled: function(t) {
        for (var e, i = [], n = [], r = [], c = 0, o = 0; o < t.length; o++) e = t[o], i[c] = e.getId() || o, 
        n[c] = e.getLocation().x, r[c] = e.getLocation().y, ++c;
        this.handleTouchesCancel(c, i, n, r);
    }
}), cc.EGLView.getInstance = function() {
    return this._instance || (this._instance = new cc.EGLView()), this._instance;
}, cc.FMT_JPG = 0, cc.FMT_PNG = 1, cc.FMT_TIFF = 2, cc.FMT_RAWDATA = 3, cc.FMT_WEBP = 4, 
cc.FMT_UNKNOWN = 5, cc.ALIGN_CENTER = 51, cc.ALIGN_TOP = 19, cc.ALIGN_TOP_RIGHT = 18, 
cc.ALIGN_RIGHT = 50, cc.ALIGN_BOTTOM_RIGHT = 34, cc.ALIGN_BOTTOM = 35, cc.ALIGN_BOTTOM_LEFT = 33, 
cc.ALIGN_LEFT = 49, cc.ALIGN_TOP_LEFT = 17, cc.RGB_PREMULTIPLY_APLHA = function(t, e, i, n) {
    return t * (n + 1) >> 8 | e * (n + 1) >> 8 << 8 | i * (n + 1) >> 8 << 16 | n << 24;
}, cc.tImageSource = function(t, e, i) {
    this.data = t, this.size = e || 0, this.offset = i || 0;
}, cc.pngReadCallback = function(t, e, i) {
    var n = new cc.tImageSource();
    n = cc.png_get_io_ptr(t), n.offset + i <= n.size ? (cc.memcpy(e, n.data + n.offset, i), 
    n.offset += i) : cc.png_error(t, "pngReaderCallback failed");
}, cc.getImageFormatByData = function(t) {
    return t.length > 8 && 137 == t[0] && 80 == t[1] && 78 == t[2] && 71 == t[3] && 13 == t[4] && 10 == t[5] && 26 == t[6] && 10 == t[7] ? cc.FMT_PNG : t.length > 2 && (73 == t[0] && 73 == t[1] || 77 == t[0] && 77 == t[1] || 255 == t[0] && 216 == t[1]) ? cc.FMT_TIFF : cc.FMT_UNKNOWN;
}, cc.Image = cc.Class.extend({
    _width: 0,
    _height: 0,
    _bitsPerComponent: 0,
    _data: 0,
    _hasAlpha: !1,
    _preMulti: !1,
    initWithImageFile: function(t, e) {
        {
            var i = cc.FileUtils.getInstance().getFileData(t, "rb");
            i.length;
        }
        return null != i && i.length > 0 ? this.initWithImageData(i, i.length, e) : !1;
    },
    initWithImageFileThreadSafe: function(t, e) {
        return this.initWithImageFile(t, e);
    },
    initWithImageData: function(t, e, i, n, r, c) {
        if (c = c || 8, n = n || 0, r = r || 0, i = i || cc.FMT_UNKNOWN, !t || 0 >= e) return !1;
        if (cc.FMT_PNG == i) return this._initWithPngData(t, e);
        if (cc.FMT_JPG == i) return this._initWithJpgData(t, e);
        if (cc.FMT_TIFF == i) return this._initWithTiffData(t, e);
        if (cc.FMT_RAWDATA == i) return this._initWithRawData(t, e, n, r, c);
        if (e > 8 && 137 == t[0] && 80 == t[1] && 78 == t[2] && 71 == t[3] && 13 == t[4] && 10 == t[5] && 26 == t[6] && 10 == t[7]) return this._initWithPngData(t, e);
        if (e > 2) {
            if (73 == t[0] && 73 == t[1] || 77 == t[0] && 77 == t[1]) return this._initWithTiffData(t, e);
            if (255 == t[0] && 216 == t[1]) return this._initWithTiffData(t, e);
        }
        return !1;
    },
    getData: function() {
        return this._data;
    },
    getDataLen: function() {
        return this._width * this._height;
    },
    hasAlpha: function() {
        return this._hasAlpha;
    },
    isPremultipliedAlpha: function() {
        return this._preMulti;
    },
    getWidth: function() {
        return this._width;
    },
    getHeight: function() {
        return this._height;
    },
    getBitsPerComponent: function() {
        return this._bitsPerComponent;
    },
    saveToFile: function() {
        return cc.log("doesn't support saveToFile on Cocos2d-Html5"), !1;
    },
    _initWithJpgData: function() {
        return !1;
    },
    _initWithPngData: function() {
        return !1;
    },
    _initWithTiffData: function() {
        return !1;
    },
    _initWithRawData: function() {
        return !1;
    },
    _saveImageToPNG: function() {
        return !1;
    },
    _saveImageToJPG: function() {
        return !1;
    },
    initWithString: function() {
        return !1;
    }
}), cc.kmScalar = Number, cc.kmBool = Number, cc.kmEnum = Number, cc.KM_FALSE = 0, 
cc.KM_TRUE = 1, cc.kmPI = 3.141592, cc.kmPIOver180 = .017453, cc.kmPIUnder180 = 57.295779, 
cc.kmEpsilon = 1 / 64, cc.kmSQR = function(t) {
    return t * t;
}, cc.kmDegreesToRadians = function(t) {
    return t * cc.kmPIOver180;
}, cc.kmRadiansToDegrees = function(t) {
    return t * cc.kmPIUnder180;
}, cc.kmMin = function(t, e) {
    return e > t ? t : e;
}, cc.kmMax = function(t, e) {
    return t > e ? t : e;
}, cc.kmAlmostEqual = function(t, e) {
    return t + cc.kmEpsilon > e && t - cc.kmEpsilon < e;
}, cc.SHADER_POSITION_UCOLOR_FRAG = "                                           \nprecision lowp float;                    \n                                         \nvarying vec4 v_fragmentColor;            \n                                         \nvoid main()                              \n{                                        \n    gl_FragColor = v_fragmentColor;      \n}                                        \n", 
cc.SHADER_POSITION_UCOLOR_VERT = "                                               \nattribute vec4 a_position;               \nuniform    vec4 u_color;                 \nuniform float u_pointSize;               \n                                         \nvarying lowp vec4 v_fragmentColor;       \n                                         \nvoid main(void)                          \n{                                        \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    gl_PointSize = u_pointSize;          \n    v_fragmentColor = u_color;           \n}", 
cc.SHADER_POSITION_COLOR_FRAG = "                                        \nprecision lowp float;                 \nvarying vec4 v_fragmentColor;         \n                                      \nvoid main()                           \n{                                     \n     gl_FragColor = v_fragmentColor;       \n} ", 
cc.SHADER_POSITION_COLOR_VERT = "                                                \nattribute vec4 a_position;                \nattribute vec4 a_color;                   \n                                          \nvarying lowp vec4 v_fragmentColor;        \n                                          \nvoid main()                               \n{                                         \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor = a_color;             \n}", 
cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_FRAG = "                                               \n// #extension GL_OES_standard_derivatives : enable																			\n\nvarying mediump vec4 v_color;																								\nvarying mediump vec2 v_texcoord;																							    \n\nvoid main()																													\n{																															\n// #if defined GL_OES_standard_derivatives																					\n// gl_FragColor = v_color*smoothstep(0.0, length(fwidth(v_texcoord)), 1.0 - length(v_texcoord));							    \n// #else																														\ngl_FragColor = v_color * step(0.0, 1.0 - length(v_texcoord));														        \n// #endif																													\n}", 
cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_VERT = "																	        \nattribute mediump vec4 a_position;									\nattribute mediump vec2 a_texcoord;									\nattribute mediump vec4 a_color;										\n\nvarying mediump vec4 v_color;										\nvarying mediump vec2 v_texcoord;									    \n\nvoid main()															\n{																	\n     v_color = a_color;//vec4(a_color.rgb * a_color.a, a_color.a);				\n     v_texcoord = a_texcoord;										\n																        \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n}", 
cc.SHADER_POSITION_TEXTURE_FRAG = "                                             \nprecision lowp float;                      \n                                           \nvarying vec2 v_texCoord;                   \nuniform sampler2D CC_Texture0;             \n                                           \nvoid main()                                \n{                                          \n    gl_FragColor =  texture2D(CC_Texture0, v_texCoord);   \n}", 
cc.SHADER_POSITION_TEXTURE_VERT = "                                                   \nattribute vec4 a_position;                   \nattribute vec2 a_texCoord;                  \n                                            \nvarying mediump vec2 v_texCoord;           \n                                           \nvoid main()                                \n{                                          \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_texCoord = a_texCoord;               \n}", 
cc.SHADER_POSITION_TEXTURE_UCOLOR_FRAG = "                                                \nprecision lowp float;                        \n                                             \nuniform vec4 u_color;                        \nvarying vec2 v_texCoord;                     \n                                             \nuniform sampler2D CC_Texture0;               \n                                             \nvoid main()                                  \n{                                            \n    gl_FragColor =  texture2D(CC_Texture0, v_texCoord) * u_color;    \n}", 
cc.SHADER_POSITION_TEXTURE_UCOLOR_VERT = "                                               \nattribute vec4 a_position;                   \nattribute vec2 a_texCoord;                   \n                                             \nvarying mediump vec2 v_texCoord;             \n                                             \nvoid main()                                  \n{                                            \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_texCoord = a_texCoord;                 \n}", 
cc.SHADER_POSITION_TEXTURE_A8COLOR_FRAG = "                                               \nprecision lowp float;                        \n                                             \nvarying vec4 v_fragmentColor;                \nvarying vec2 v_texCoord;                     \nuniform sampler2D CC_Texture0;                 \n                                             \nvoid main()                                  \n{                                            \n    gl_FragColor = vec4( v_fragmentColor.rgb,         \n        v_fragmentColor.a * texture2D(CC_Texture0, v_texCoord).a   \n    );                                       \n}", 
cc.SHADER_POSITION_TEXTURE_A8COLOR_VERT = "                                               \nattribute vec4 a_position;                   \nattribute vec2 a_texCoord;                   \nattribute vec4 a_color;                      \n                                             \nvarying lowp vec4 v_fragmentColor;           \nvarying mediump vec2 v_texCoord;             \n                                             \nvoid main()                                  \n{                                            \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor = a_color;               \n    v_texCoord = a_texCoord;                 \n}", 
cc.SHADER_POSITION_TEXTURE_COLOR_FRAG = "                                               \nprecision lowp float;                        \n                                             \nvarying vec4 v_fragmentColor;                \nvarying vec2 v_texCoord;                     \nuniform sampler2D CC_Texture0;               \n                                             \nvoid main()                                  \n{                                            \n    gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);         \n}", 
cc.SHADER_POSITION_TEXTURE_COLOR_VERT = "                                               \nattribute vec4 a_position;                   \nattribute vec2 a_texCoord;                   \nattribute vec4 a_color;                      \n                                             \nvarying lowp vec4 v_fragmentColor;           \nvarying mediump vec2 v_texCoord;             \n                                             \nvoid main()                                  \n{                                            \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor = a_color;               \n    v_texCoord = a_texCoord;                 \n}", 
cc.SHADER_POSITION_TEXTURE_COLOR_ALPHATEST_FRAG = "                                                  \nprecision lowp float;                           \n                                                \nvarying vec4 v_fragmentColor;                   \nvarying vec2 v_texCoord;                        \nuniform sampler2D CC_Texture0;                  \nuniform float CC_alpha_value;                   \n                                                \nvoid main()                                     \n{                                               \n    vec4 texColor = texture2D(CC_Texture0, v_texCoord);          \n                                                \n    // mimic: glAlphaFunc(GL_GREATER)           \n    //pass if ( incoming_pixel >= CC_alpha_value ) => fail if incoming_pixel < CC_alpha_value         \n                                                \n    if ( texColor.a <= CC_alpha_value )          \n        discard;                                \n                                                \n    gl_FragColor = texColor * v_fragmentColor;  \n}", 
cc.SHADEREX_SWITCHMASK_FRAG = "                                                   \nprecision lowp float;                            \n                                                 \nvarying vec4 v_fragmentColor;                    \nvarying vec2 v_texCoord;                         \nuniform sampler2D u_texture;                     \nuniform sampler2D   u_mask;                      \n                                                 \nvoid main()                                      \n{                                                \n    vec4 texColor   = texture2D(u_texture, v_texCoord);          \n    vec4 maskColor  = texture2D(u_mask, v_texCoord);             \n    vec4 finalColor = vec4(texColor.r, texColor.g, texColor.b, maskColor.a * texColor.a);        \n    gl_FragColor    = v_fragmentColor * finalColor;              \n}", 
cc.g_sharedTextureCache = null, cc.loadImage = function(t) {
    var e = cc.computeImageFormatType(t);
    if (e == cc.FMT_UNKNOWN) return cc.log("unsupported format:" + t), void 0;
    var i = new Image();
    i.src = t, i.addEventListener("load", function() {
        cc.TextureCache.getInstance().cacheImage(t, i), this.removeEventListener("load", arguments.callee, !1);
    }, !1);
}, cc.computeImageFormatType = function(t) {
    return t.toLowerCase().indexOf(".jpg") > 0 || t.toLowerCase().indexOf(".jpeg") > 0 ? cc.FMT_JPG : t.toLowerCase().indexOf(".png") > 0 ? cc.FMT_PNG : t.toLowerCase().indexOf(".webp") > 0 ? cc.FMT_WEBP : cc.FMT_UNKNOWN;
}, cc.TextureCache = cc.Class.extend({
    _textures: null,
    _textureColorsCache: null,
    _textureKeySeq: null,
    _rendererInitialized: !1,
    _loadedTexturesBefore: null,
    _loadingTexturesBefore: null,
    ctor: function() {
        cc.Assert(null == cc.g_sharedTextureCache, "Attempted to allocate a second instance of a singleton."), 
        this._textureKeySeq += 0 | 1e3 * Math.random(), this._textures = {}, this._textureColorsCache = {}, 
        cc.renderContextType === cc.WEBGL && (this._loadedTexturesBefore = {}, this._loadingTexturesBefore = {});
    },
    _addImageAsyncCallBack: function(t, e) {
        t && "string" == typeof e ? t[e]() : t && "function" == typeof e && e.call(t);
    },
    _initializingRenderer: function() {
        this._rendererInitialized = !0;
        var t, e = this._loadedTexturesBefore, i = this._textures;
        for (t in e) {
            var n = e[t], r = new cc.Texture2D();
            r.initWithElement(n), r.handleLoadedTexture(), i[t] = r;
        }
        this._loadedTexturesBefore = {};
    },
    addPVRTCImage: function() {
        cc.Assert(0, "TextureCache:addPVRTCImage does not support on HTML5");
    },
    addETCImage: function() {
        cc.Assert(0, "TextureCache:addPVRTCImage does not support on HTML5");
    },
    description: function() {
        return "<TextureCache | Number of textures = " + this._textures.length + ">";
    },
    textureForKey: function(t) {
        var e = cc.FileUtils.getInstance().fullPathForFilename(t);
        return this._textures.hasOwnProperty(e) ? this._textures[e] : null;
    },
    getKeyByTexture: function(t) {
        for (var e in this._textures) if (this._textures[e] == t) return e;
        return null;
    },
    _generalTextureKey: function() {
        return this._textureKeySeq++, "_textureKey_" + this._textureKeySeq;
    },
    getTextureColors: function(t) {
        var e = this.getKeyByTexture(t);
        return e || (e = t instanceof HTMLImageElement ? t.src : this._generalTextureKey()), 
        this._textureColorsCache.hasOwnProperty(e) || (this._textureColorsCache[e] = cc.generateTextureCacheForColor(t)), 
        this._textureColorsCache[e];
    },
    addPVRImage: function(t) {
        cc.Assert(null != t, "TextureCache: file image MUST not be null"), t = cc.FileUtils.getInstance().fullPathForFilename(t);
        var e = t;
        if (null != this._textures[e]) return this._textures[e];
        var i = new cc.Texture2D();
        return i.initWithPVRFile(e) ? this._textures[e] = i : cc.log("cocos2d: Couldn't add PVRImage:" + e + " in TextureCache"), 
        i;
    },
    removeAllTextures: function() {
        var t = this._textures;
        for (var e in t) t[e] && t[e].releaseTexture();
        this._textures = {};
    },
    removeTexture: function(t) {
        if (t) {
            var e = this._textures;
            for (var i in e) e[i] == t && (e[i].releaseTexture(), delete e[i]);
        }
    },
    removeTextureForKey: function(t) {
        if (null != t) {
            var e = cc.FileUtils.getInstance().fullPathForFilename(t);
            this._textures[e] && delete this._textures[e];
        }
    },
    addImageAsync: function(t, e, i) {
        cc.Assert(null != t, "TextureCache: path MUST not be null"), t = cc.FileUtils.getInstance().fullPathForFilename(t);
        var n, r, c = this._textures[t];
        if (c) c.isLoaded() ? this._addImageAsyncCallBack(e, i) : (r = this, n = c.getHtmlElementObj(), 
        n.addEventListener("load", function() {
            c.handleLoadedTexture(), r._addImageAsyncCallBack(e, i), this.removeEventListener("load", arguments.callee, !1);
        })); else {
            n = new Image(), n.crossOrigin = "Anonymous", r = this, n.addEventListener("load", function() {
                r._textures.hasOwnProperty(t) && r._textures[t].handleLoadedTexture(), r._addImageAsyncCallBack(e, i), 
                this.removeEventListener("load", arguments.callee, !1), this.removeEventListener("error", arguments.callee, !1);
            }), n.addEventListener("error", function() {
                cc.Loader.getInstance().onResLoadingErr(t), r._textures.hasOwnProperty(t) && delete r._textures[t], 
                this.removeEventListener("error", arguments.callee, !1);
            }), n.src = t;
            var o = new cc.Texture2D();
            o.initWithElement(n), this._textures[t] = o;
        }
        return this._textures[t];
    },
    _addImageBeforeRenderer: function(t) {
        var e = new Image();
        e.crossOrigin = "Anonymous";
        var i = this;
        e.addEventListener("load", function() {
            cc.Loader.getInstance().onResLoaded(), i._loadedTexturesBefore[t] = e, delete i._loadingTexturesBefore[t], 
            this.removeEventListener("load", arguments.callee, !1), this.removeEventListener("error", arguments.callee, !1);
        }), e.addEventListener("error", function() {
            cc.Loader.getInstance().onResLoadingErr(t), delete i._loadingTexturesBefore[t], 
            this.removeEventListener("error", arguments.callee, !1);
        }), e.src = t, this._loadingTexturesBefore[t] = e;
    },
    addImage: function(t) {
        if (cc.Assert(null != t, "TextureCache: path MUST not be null"), cc.renderContextType === cc.WEBGL && !this._rendererInitialized) return this._addImageBeforeRenderer(t);
        t = cc.FileUtils.getInstance().fullPathForFilename(t);
        var e, i = this._textures[t];
        if (i) i.isLoaded() ? cc.Loader.getInstance().onResLoaded() : (e = i.getHtmlElementObj(), 
        e.addEventListener("load", function() {
            i.handleLoadedTexture(), cc.Loader.getInstance().onResLoaded(), this.removeEventListener("load", arguments.callee, !1);
        })); else {
            e = new Image(), e.crossOrigin = "Anonymous";
            var n = this;
            e.addEventListener("load", function() {
                cc.Loader.getInstance().onResLoaded(), n._textures.hasOwnProperty(t) && n._textures[t].handleLoadedTexture(), 
                this.removeEventListener("load", arguments.callee, !1), this.removeEventListener("error", arguments.callee, !1);
            }), e.addEventListener("error", function() {
                cc.Loader.getInstance().onResLoadingErr(t), n._textures.hasOwnProperty(t) && delete n._textures[t], 
                this.removeEventListener("error", arguments.callee, !1);
            }), e.src = t;
            var r = new cc.Texture2D();
            r.initWithElement(e), this._textures[t] = r;
        }
        return this._textures[t];
    },
    cacheImage: function(t, e) {
        if (e instanceof cc.Texture2D) return this._textures[t] = e, void 0;
        var i = new cc.Texture2D();
        i.initWithElement(e), i.handleLoadedTexture(), this._textures[t] = i;
    },
    addUIImage: function(t, e) {
        if (cc.Assert(null != t, "TextureCache: image MUST not be nulll"), e && this._textures.hasOwnProperty(e) && this._textures[e]) return this._textures[e];
        var i = new cc.Texture2D();
        return i.initWithImage(t), null != e && null != i ? this._textures[e] = i : cc.log("cocos2d: Couldn't add UIImage in TextureCache"), 
        i;
    },
    dumpCachedTextureInfo: function() {
        var t = 0, e = 0, i = this._textures;
        for (var n in i) {
            var r = i[n];
            t++, r.getHtmlElementObj() instanceof HTMLImageElement ? cc.log("cocos2d: '" + n + "' id=" + r.getHtmlElementObj().src + " " + r.getPixelsWide() + " x " + r.getPixelsHigh()) : cc.log("cocos2d: '" + n + "' id= HTMLCanvasElement " + r.getPixelsWide() + " x " + r.getPixelsHigh()), 
            e += r.getPixelsWide() * r.getPixelsHigh() * 4;
        }
        var c = this._textureColorsCache;
        for (n in c) {
            var o = c[n];
            for (var s in o) {
                var a = o[s];
                t++, cc.log("cocos2d: '" + n + "' id= HTMLCanvasElement " + a.width + " x " + a.height), 
                e += a.width * a.height * 4;
            }
        }
        cc.log("cocos2d: TextureCache dumpDebugInfo: " + t + " textures, HTMLCanvasElement for " + e / 1024 + " KB (" + (e / 1048576).toFixed(2) + " MB)");
    }
}), cc.TextureCache.getInstance = function() {
    return cc.g_sharedTextureCache || (cc.g_sharedTextureCache = new cc.TextureCache()), 
    cc.g_sharedTextureCache;
}, cc.TextureCache.purgeSharedTextureCache = function() {
    cc.g_sharedTextureCache = null;
}, cc.DrawingPrimitive = cc.Class.extend({
    _renderContext: null,
    setRenderContext: function(t) {
        this._renderContext = t;
    },
    getRenderContext: function() {
        return this._renderContext;
    },
    ctor: function(t) {
        this._renderContext = t;
    },
    drawPoint: function() {
        cc.log("DrawingPrimitive.drawPoint() not implement!");
    },
    drawPoints: function() {
        cc.log("DrawingPrimitive.drawPoints() not implement!");
    },
    drawLine: function() {
        cc.log("DrawingPrimitive.drawLine() not implement!");
    },
    drawRect: function() {
        cc.log("DrawingPrimitive.drawRect() not implement!");
    },
    drawSolidRect: function() {
        cc.log("DrawingPrimitive.drawSolidRect() not implement!");
    },
    drawPoly: function() {
        cc.log("DrawingPrimitive.drawPoly() not implement!");
    },
    drawSolidPoly: function() {
        cc.log("DrawingPrimitive.drawSolidPoly() not implement!");
    },
    drawCircle: function() {
        cc.log("DrawingPrimitive.drawCircle() not implement!");
    },
    drawQuadBezier: function() {
        cc.log("DrawingPrimitive.drawQuadBezier() not implement!");
    },
    drawCubicBezier: function() {
        cc.log("DrawingPrimitive.drawCubicBezier() not implement!");
    },
    drawCatmullRom: function() {
        cc.log("DrawingPrimitive.drawCardinalSpline() not implement!");
    },
    drawCardinalSpline: function() {
        cc.log("DrawingPrimitive.drawCardinalSpline() not implement!");
    }
}), cc.DrawingPrimitiveCanvas = cc.DrawingPrimitive.extend({
    drawPoint: function(t, e) {
        e || (e = 1);
        var i = cc.EGLView.getInstance().getScaleX(), n = cc.EGLView.getInstance().getScaleY(), r = cc.p(t.x * i, t.y * n);
        this._renderContext.beginPath(), this._renderContext.arc(r.x, -r.y, e * i, 0, 2 * Math.PI, !1), 
        this._renderContext.closePath(), this._renderContext.fill();
    },
    drawPoints: function(t, e, i) {
        if (null != t) {
            i || (i = 1);
            var n = this._renderContext, r = cc.EGLView.getInstance().getScaleX(), c = cc.EGLView.getInstance().getScaleY();
            n.beginPath();
            for (var o = 0, s = t.length; s > o; o++) n.arc(t[o].x * r, -t[o].y * c, i * r, 0, 2 * Math.PI, !1);
            n.closePath(), n.fill();
        }
    },
    drawLine: function(t, e) {
        var i = this._renderContext, n = cc.EGLView.getInstance().getScaleX(), r = cc.EGLView.getInstance().getScaleY();
        i.beginPath(), i.moveTo(t.x * n, -t.y * r), i.lineTo(e.x * n, -e.y * r), i.closePath(), 
        i.stroke();
    },
    drawRect: function(t, e) {
        this.drawLine(cc.p(t.x, t.y), cc.p(e.x, t.y)), this.drawLine(cc.p(e.x, t.y), cc.p(e.x, e.y)), 
        this.drawLine(cc.p(e.x, e.y), cc.p(t.x, e.y)), this.drawLine(cc.p(t.x, e.y), cc.p(t.x, t.y));
    },
    drawSolidRect: function(t, e, i) {
        var n = [ t, cc.p(e.x, t.y), e, cc.p(t.x, e.y) ];
        this.drawSolidPoly(n, 4, i);
    },
    drawPoly: function(t, e, i, n) {
        if (n = n || !1, null != t) {
            if (t.length < 3) throw new Error("Polygon's point must greater than 2");
            var r = t[0], c = this._renderContext, o = cc.EGLView.getInstance().getScaleX(), s = cc.EGLView.getInstance().getScaleY();
            c.beginPath(), c.moveTo(r.x * o, -r.y * s);
            for (var a = 1, h = t.length; h > a; a++) c.lineTo(t[a].x * o, -t[a].y * s);
            i && c.closePath(), n ? c.fill() : c.stroke();
        }
    },
    drawSolidPoly: function(t, e, i) {
        this.setDrawColor4F(i.r, i.g, i.b, i.a), this.drawPoly(t, e, !0, !0);
    },
    drawCircle: function(t, e, i, n, r) {
        r = r || !1;
        var c = this._renderContext, o = cc.EGLView.getInstance().getScaleX(), s = cc.EGLView.getInstance().getScaleY();
        c.beginPath();
        var a = i - 2 * Math.PI;
        c.arc(0 | t.x * o, 0 | -(t.y * s), e * o, -i, -a, !1), r && c.lineTo(0 | t.x * o, 0 | -(t.y * s)), 
        c.stroke();
    },
    drawQuadBezier: function(t, e, i, n) {
        for (var r = [], c = 0, o = 0; n > o; o++) {
            var s = Math.pow(1 - c, 2) * t.x + 2 * (1 - c) * c * e.x + c * c * i.x, a = Math.pow(1 - c, 2) * t.y + 2 * (1 - c) * c * e.y + c * c * i.y;
            r.push(cc.p(s, a)), c += 1 / n;
        }
        r.push(cc.p(i.x, i.y)), this.drawPoly(r, n + 1, !1, !1);
    },
    drawCubicBezier: function(t, e, i, n, r) {
        for (var c = [], o = 0, s = 0; r > s; s++) {
            var a = Math.pow(1 - o, 3) * t.x + 3 * Math.pow(1 - o, 2) * o * e.x + 3 * (1 - o) * o * o * i.x + o * o * o * n.x, h = Math.pow(1 - o, 3) * t.y + 3 * Math.pow(1 - o, 2) * o * e.y + 3 * (1 - o) * o * o * i.y + o * o * o * n.y;
            c.push(cc.p(a, h)), o += 1 / r;
        }
        c.push(cc.p(n.x, n.y)), this.drawPoly(c, r + 1, !1, !1);
    },
    drawCatmullRom: function(t, e) {
        this.drawCardinalSpline(t, .5, e);
    },
    drawCardinalSpline: function(t, e, i) {
        cc.renderContext.strokeStyle = "rgba(255,255,255,1)";
        for (var n, r, c = [], o = 1 / t.length, s = 0; i + 1 > s; s++) {
            var a = s / i;
            1 == a ? (n = t.length - 1, r = 1) : (n = 0 | a / o, r = (a - o * n) / o);
            var h = cc.CardinalSplineAt(cc.getControlPointAt(t, n - 1), cc.getControlPointAt(t, n - 0), cc.getControlPointAt(t, n + 1), cc.getControlPointAt(t, n + 2), e, r);
            c.push(h);
        }
        this.drawPoly(c, i + 1, !1, !1);
    },
    drawImage: function(t, e, i, n, r) {
        var c = arguments.length;
        switch (c) {
          case 2:
            var o = t.height;
            this._renderContext.drawImage(t, e.x, -(e.y + o));
            break;

          case 3:
            this._renderContext.drawImage(t, e.x, -(e.y + i.height), i.width, i.height);
            break;

          case 5:
            this._renderContext.drawImage(t, e.x, e.y, i.width, i.height, n.x, -(n.y + r.height), r.width, r.height);
            break;

          default:
            throw new Error("Argument must be non-nil");
        }
    },
    drawStar: function(t, e, i) {
        var n = t || this._renderContext;
        e *= cc.EGLView.getInstance().getScaleX(), i instanceof cc.Color4F && (i = new cc.Color3B(0 | 255 * i.r, 0 | 255 * i.g, 0 | 255 * i.b));
        var r = "rgba(" + i.r + "," + i.g + "," + i.b;
        n.fillStyle = r + ",1)";
        var c = e / 10;
        n.beginPath(), n.moveTo(-e, e), n.lineTo(0, c), n.lineTo(e, e), n.lineTo(c, 0), 
        n.lineTo(e, -e), n.lineTo(0, -c), n.lineTo(-e, -e), n.lineTo(-c, 0), n.lineTo(-e, e), 
        n.closePath(), n.fill();
        var o = n.createRadialGradient(0, 0, c, 0, 0, e);
        o.addColorStop(0, r + ", 1)"), o.addColorStop(.3, r + ", 0.8)"), o.addColorStop(1, r + ", 0.0)"), 
        n.fillStyle = o, n.beginPath();
        var s = 0, a = cc.PI2;
        n.arc(0, 0, e - c, s, a, !1), n.closePath(), n.fill();
    },
    drawColorBall: function(t, e, i) {
        var n = t || this._renderContext;
        e *= cc.EGLView.getInstance().getScaleX(), i instanceof cc.Color4F && (i = new cc.Color3B(0 | 255 * i.r, 0 | 255 * i.g, 0 | 255 * i.b));
        var r = "rgba(" + i.r + "," + i.g + "," + i.b, c = e / 10, o = n.createRadialGradient(0, 0, c, 0, 0, e);
        o.addColorStop(0, r + ", 1)"), o.addColorStop(.3, r + ", 0.8)"), o.addColorStop(.6, r + ", 0.4)"), 
        o.addColorStop(1, r + ", 0.0)"), n.fillStyle = o, n.beginPath();
        var s = 0, a = cc.PI2;
        n.arc(0, 0, e, s, a, !1), n.closePath(), n.fill();
    },
    fillText: function(t, e, i) {
        this._renderContext.fillText(t, e, -i);
    },
    setDrawColor4B: function(t, e, i, n) {
        this._renderContext.fillStyle = "rgba(" + t + "," + e + "," + i + "," + n / 255 + ")", 
        this._renderContext.strokeStyle = "rgba(" + t + "," + e + "," + i + "," + n / 255 + ")";
    },
    setDrawColor4F: function(t, e, i, n) {
        this._renderContext.fillStyle = "rgba(" + (0 | 255 * t) + "," + (0 | 255 * e) + "," + (0 | 255 * i) + "," + n + ")", 
        this._renderContext.strokeStyle = "rgba(" + (0 | 255 * t) + "," + (0 | 255 * e) + "," + (0 | 255 * i) + "," + n + ")";
    },
    setPointSize: function() {},
    setLineWidth: function(t) {
        this._renderContext.lineWidth = t * cc.EGLView.getInstance().getScaleX();
    }
}), cc.DrawingPrimitiveWebGL = cc.DrawingPrimitive.extend({
    _initialized: !1,
    _shader: null,
    _colorLocation: -1,
    _color: null,
    _pointSizeLocation: -1,
    _pointSize: -1,
    ctor: function(t) {
        if (null == t && (t = cc.renderContext), !t instanceof WebGLRenderingContext) throw "Can't initialise DrawingPrimitiveWebGL. context need is WebGLRenderingContext";
        cc.DrawingPrimitive.prototype.ctor.call(this, t), this._color = new cc.Color4F(1, 1, 1, 1);
    },
    lazy_init: function() {
        this._initialized || (this._shader = cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_UCOLOR), 
        this._colorLocation = this._renderContext.getUniformLocation(this._shader.getProgram(), "u_color"), 
        this._pointSizeLocation = this._renderContext.getUniformLocation(this._shader.getProgram(), "u_pointSize"), 
        this._initialized = !0);
    },
    drawInit: function() {
        this._initialized = !1;
    },
    drawPoint: function(t) {
        this.lazy_init(), this._shader.use(), this._shader.setUniformForModelViewAndProjectionMatrixWithMat4(), 
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION), this._shader.setUniformLocationWith4fv(this._colorLocation, new Float32Array(this._color._arrayBuffer, 0, 4), 1), 
        this._shader.setUniformLocationWith1f(this._pointSizeLocation, this._pointSize);
        var e = this._renderContext, i = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, i), e.bufferData(e.ARRAY_BUFFER, new Float32Array([ t.x, t.y ]), e.STATIC_DRAW), 
        e.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, e.FLOAT, !1, 0, 0), e.drawArrays(e.POINTS, 0, 1), 
        e.deleteBuffer(i), cc.INCREMENT_GL_DRAWS(1);
    },
    drawPoints: function(t) {
        if (t && 0 != t.length) {
            this.lazy_init(), this._shader.use(), this._shader.setUniformForModelViewAndProjectionMatrixWithMat4(), 
            cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION), this._shader.setUniformLocationWith4fv(this._colorLocation, new Float32Array(this._color._arrayBuffer, 0, 4), 1), 
            this._shader.setUniformLocationWith1f(this._pointSizeLocation, this._pointSize);
            var e = this._renderContext, i = e.createBuffer();
            e.bindBuffer(e.ARRAY_BUFFER, i), e.bufferData(e.ARRAY_BUFFER, this._pointsToTypeArray(t), e.STATIC_DRAW), 
            e.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, e.FLOAT, !1, 0, 0), e.drawArrays(e.POINTS, 0, t.length), 
            e.deleteBuffer(i), cc.INCREMENT_GL_DRAWS(1);
        }
    },
    _pointsToTypeArray: function(t) {
        for (var e = new Float32Array(2 * t.length), i = 0; i < t.length; i++) e[2 * i] = t[i].x, 
        e[2 * i + 1] = t[i].y;
        return e;
    },
    drawLine: function(t, e) {
        this.lazy_init(), this._shader.use(), this._shader.setUniformForModelViewAndProjectionMatrixWithMat4(), 
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION), this._shader.setUniformLocationWith4fv(this._colorLocation, new Float32Array(this._color._arrayBuffer, 0, 4), 1);
        var i = this._renderContext, n = i.createBuffer();
        i.bindBuffer(i.ARRAY_BUFFER, n), i.bufferData(i.ARRAY_BUFFER, this._pointsToTypeArray([ t, e ]), i.STATIC_DRAW), 
        i.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, i.FLOAT, !1, 0, 0), i.drawArrays(i.LINES, 0, 2), 
        i.deleteBuffer(n), cc.INCREMENT_GL_DRAWS(1);
    },
    drawRect: function(t, e) {
        this.drawLine(cc.p(t.x, t.y), cc.p(e.x, t.y)), this.drawLine(cc.p(e.x, t.y), cc.p(e.x, e.y)), 
        this.drawLine(cc.p(e.x, e.y), cc.p(t.x, e.y)), this.drawLine(cc.p(t.x, e.y), cc.p(t.x, t.y));
    },
    drawSolidRect: function(t, e, i) {
        var n = [ t, cc.p(e.x, t.y), e, cc.p(t.x, e.y) ];
        this.drawSolidPoly(n, 4, i);
    },
    drawPoly: function(t, e, i) {
        this.lazy_init(), this._shader.use(), this._shader.setUniformForModelViewAndProjectionMatrixWithMat4(), 
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION), this._shader.setUniformLocationWith4fv(this._colorLocation, new Float32Array(this._color._arrayBuffer, 0, 4), 1);
        var n = this._renderContext, r = n.createBuffer();
        n.bindBuffer(n.ARRAY_BUFFER, r), n.bufferData(n.ARRAY_BUFFER, this._pointsToTypeArray(t), n.STATIC_DRAW), 
        n.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, n.FLOAT, !1, 0, 0), i ? n.drawArrays(n.LINE_LOOP, 0, t.length) : n.drawArrays(n.LINE_STRIP, 0, t.length), 
        n.deleteBuffer(r), cc.INCREMENT_GL_DRAWS(1);
    },
    drawSolidPoly: function(t, e, i) {
        this.lazy_init(), i || (i = this._color), this._shader.use(), this._shader.setUniformForModelViewAndProjectionMatrixWithMat4(), 
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION), this._shader.setUniformLocationWith4fv(this._colorLocation, new Float32Array(i._arrayBuffer, 0, 4), 1);
        var n = this._renderContext, r = n.createBuffer();
        n.bindBuffer(n.ARRAY_BUFFER, r), n.bufferData(n.ARRAY_BUFFER, this._pointsToTypeArray(t), n.STATIC_DRAW), 
        n.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, n.FLOAT, !1, 0, 0), n.drawArrays(n.TRIANGLE_FAN, 0, t.length), 
        n.deleteBuffer(r), cc.INCREMENT_GL_DRAWS(1);
    },
    drawCircle: function(t, e, i, n, r) {
        this.lazy_init();
        var c = 1;
        r && c++;
        var o = 2 * Math.PI / n, s = new Float32Array(2 * (n + 2));
        if (s) {
            for (var a = 0; n >= a; a++) {
                var h = a * o, u = e * Math.cos(h + i) + t.x, l = e * Math.sin(h + i) + t.y;
                s[2 * a] = u, s[2 * a + 1] = l;
            }
            s[2 * (n + 1)] = t.x, s[2 * (n + 1) + 1] = t.y, this._shader.use(), this._shader.setUniformForModelViewAndProjectionMatrixWithMat4(), 
            cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION), this._shader.setUniformLocationWith4fv(this._colorLocation, new Float32Array(this._color._arrayBuffer, 0, 4), 1);
            var _ = this._renderContext, d = _.createBuffer();
            _.bindBuffer(_.ARRAY_BUFFER, d), _.bufferData(_.ARRAY_BUFFER, s, _.STATIC_DRAW), 
            _.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, _.FLOAT, !1, 0, 0), _.drawArrays(_.LINE_STRIP, 0, n + c), 
            _.deleteBuffer(d), cc.INCREMENT_GL_DRAWS(1);
        }
    },
    drawQuadBezier: function(t, e, i, n) {
        this.lazy_init();
        for (var r = new Float32Array(2 * (n + 1)), c = 0, o = 0; n > o; o++) r[2 * o] = Math.pow(1 - c, 2) * t.x + 2 * (1 - c) * c * e.x + c * c * i.x, 
        r[2 * o + 1] = Math.pow(1 - c, 2) * t.y + 2 * (1 - c) * c * e.y + c * c * i.y, c += 1 / n;
        r[2 * n] = i.x, r[2 * n + 1] = i.y, this._shader.use(), this._shader.setUniformForModelViewAndProjectionMatrixWithMat4(), 
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION), this._shader.setUniformLocationWith4fv(this._colorLocation, new Float32Array(this._color._arrayBuffer, 0, 4), 1);
        var s = this._renderContext, a = s.createBuffer();
        s.bindBuffer(s.ARRAY_BUFFER, a), s.bufferData(s.ARRAY_BUFFER, r, s.STATIC_DRAW), 
        s.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, s.FLOAT, !1, 0, 0), s.drawArrays(s.LINE_STRIP, 0, n + 1), 
        s.deleteBuffer(a), cc.INCREMENT_GL_DRAWS(1);
    },
    drawCubicBezier: function(t, e, i, n, r) {
        this.lazy_init();
        for (var c = new Float32Array(2 * (r + 1)), o = 0, s = 0; r > s; s++) c[2 * s] = Math.pow(1 - o, 3) * t.x + 3 * Math.pow(1 - o, 2) * o * e.x + 3 * (1 - o) * o * o * i.x + o * o * o * n.x, 
        c[2 * s + 1] = Math.pow(1 - o, 3) * t.y + 3 * Math.pow(1 - o, 2) * o * e.y + 3 * (1 - o) * o * o * i.y + o * o * o * n.y, 
        o += 1 / r;
        c[2 * r] = n.x, c[2 * r + 1] = n.y, this._shader.use(), this._shader.setUniformForModelViewAndProjectionMatrixWithMat4(), 
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION), this._shader.setUniformLocationWith4fv(this._colorLocation, new Float32Array(this._color._arrayBuffer, 0, 4), 1);
        var a = this._renderContext, h = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, h), a.bufferData(a.ARRAY_BUFFER, c, a.STATIC_DRAW), 
        a.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, a.FLOAT, !1, 0, 0), a.drawArrays(a.LINE_STRIP, 0, r + 1), 
        a.deleteBuffer(h), cc.INCREMENT_GL_DRAWS(1);
    },
    drawCatmullRom: function(t, e) {
        this.drawCardinalSpline(t, .5, e);
    },
    drawCardinalSpline: function(t, e, i) {
        this.lazy_init();
        for (var n, r, c = new Float32Array(2 * (i + 1)), o = 1 / t.length, s = 0; i + 1 > s; s++) {
            var a = s / i;
            1 == a ? (n = t.length - 1, r = 1) : (n = 0 | a / o, r = (a - o * n) / o);
            var h = cc.CardinalSplineAt(cc.getControlPointAt(t, n - 1), cc.getControlPointAt(t, n), cc.getControlPointAt(t, n + 1), cc.getControlPointAt(t, n + 2), e, r);
            c[2 * s] = h.x, c[2 * s + 1] = h.y;
        }
        this._shader.use(), this._shader.setUniformForModelViewAndProjectionMatrixWithMat4(), 
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION), this._shader.setUniformLocationWith4fv(this._colorLocation, new Float32Array(this._color._arrayBuffer, 0, 4), 1);
        var u = this._renderContext, l = u.createBuffer();
        u.bindBuffer(u.ARRAY_BUFFER, l), u.bufferData(u.ARRAY_BUFFER, c, u.STATIC_DRAW), 
        u.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, u.FLOAT, !1, 0, 0), u.drawArrays(u.LINE_STRIP, 0, i + 1), 
        u.deleteBuffer(l), cc.INCREMENT_GL_DRAWS(1);
    },
    setDrawColor4B: function(t, e, i, n) {
        this._color.r = t / 255, this._color.g = e / 255, this._color.b = i / 255, this._color.a = n / 255;
    },
    setDrawColor4F: function(t, e, i, n) {
        this._color.r = t, this._color.g = e, this._color.b = i, this._color.a = n;
    },
    setPointSize: function(t) {
        this._pointSize = t * cc.CONTENT_SCALE_FACTOR();
    },
    setLineWidth: function(t) {
        this._renderContext.lineWidth && this._renderContext.lineWidth(t);
    }
}), cc.PI2 = 2 * Math.PI, cc.ConfigurationType = {
    ConfigurationError: 0,
    ConfigurationString: 1,
    ConfigurationInt: 2,
    ConfigurationDouble: 3,
    ConfigurationBoolean: 4
}, cc.Configuration = cc.Class.extend({
    _maxTextureSize: 0,
    _maxModelviewStackDepth: 0,
    _supportsPVRTC: !1,
    _supportsNPOT: !1,
    _supportsBGRA8888: !1,
    _supportsDiscardFramebuffer: !1,
    _supportsShareableVAO: !1,
    _maxSamplesAllowed: 0,
    _maxTextureUnits: 0,
    _GlExtensions: "",
    _valueDict: null,
    ctor: function() {
        this._maxTextureSize = 0, this._maxModelviewStackDepth = 0, this._supportsPVRTC = !1, 
        this._supportsNPOT = !1, this._supportsBGRA8888 = !1, this._supportsDiscardFramebuffer = !1, 
        this._supportsShareableVAO = !1, this._maxSamplesAllowed = 0, this._maxTextureUnits = 0, 
        this._GlExtensions = "", this._valueDict = {};
    },
    getMaxTextureSize: function() {
        return this._maxTextureSize;
    },
    getMaxModelviewStackDepth: function() {
        return this._maxModelviewStackDepth;
    },
    getMaxTextureUnits: function() {
        return this._maxTextureUnits;
    },
    supportsNPOT: function() {
        return this._supportsNPOT;
    },
    supportsPVRTC: function() {
        return this._supportsPVRTC;
    },
    supportsBGRA8888: function() {
        return this._supportsBGRA8888;
    },
    supportsDiscardFramebuffer: function() {
        return this._supportsDiscardFramebuffer;
    },
    supportsShareableVAO: function() {
        return this._supportsShareableVAO;
    },
    checkForGLExtension: function(t) {
        return this._GlExtensions.indexOf(t) > -1;
    },
    init: function() {
        var t = this._valueDict;
        return t["cocos2d.x.version"] = cc.ENGINE_VERSION, t["cocos2d.x.compiled_with_profiler"] = !1, 
        t["cocos2d.x.compiled_with_gl_state_cache"] = cc.ENABLE_GL_STATE_CACHE, !0;
    },
    getCString: function(t, e) {
        var i = this._valueDict;
        return i.hasOwnProperty(t) ? i[t] : e;
    },
    getBool: function(t, e) {
        null == e && (e = !1);
        var i = this._valueDict;
        return i.hasOwnProperty(t) ? i[t] : e;
    },
    getNumber: function(t, e) {
        null == e && (e = 0);
        var i = this._valueDict;
        return i.hasOwnProperty(t) ? i[t] : e;
    },
    getObject: function(t) {
        var e = this._valueDict;
        return e.hasOwnProperty(t) ? e[t] : null;
    },
    setObject: function(t, e) {
        this._valueDict[t] = e;
    },
    dumpInfo: function() {
        0 === cc.ENABLE_GL_STATE_CACHE && (cc.log(""), cc.log("cocos2d: **** WARNING **** CC_ENABLE_PROFILERS is defined. Disable it when you finish profiling (from ccConfig.js)"), 
        cc.log(""));
    },
    gatherGPUInfo: function() {
        if (cc.renderContextType !== cc.CANVAS) {
            var t = cc.renderContext, e = this._valueDict;
            e["gl.vendor"] = t.getParameter(t.VENDOR), e["gl.renderer"] = t.getParameter(t.RENDERER), 
            e["gl.version"] = t.getParameter(t.VERSION), this._GlExtensions = "";
            for (var i = t.getSupportedExtensions(), n = 0; n < i.length; n++) this._GlExtensions += i[n] + " ";
            this._maxTextureSize = t.getParameter(t.MAX_TEXTURE_SIZE), e["gl.max_texture_size"] = this._maxTextureSize, 
            this._maxTextureUnits = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS), e["gl.max_texture_units"] = this._maxTextureUnits, 
            this._supportsPVRTC = this.checkForGLExtension("GL_IMG_texture_compression_pvrtc"), 
            e["gl.supports_PVRTC"] = this._supportsPVRTC, this._supportsNPOT = !1, e["gl.supports_NPOT"] = this._supportsNPOT, 
            this._supportsBGRA8888 = this.checkForGLExtension("GL_IMG_texture_format_BGRA888"), 
            e["gl.supports_BGRA8888"] = this._supportsBGRA8888, this._supportsDiscardFramebuffer = this.checkForGLExtension("GL_EXT_discard_framebuffer"), 
            e["gl.supports_discard_framebuffer"] = this._supportsDiscardFramebuffer, this._supportsShareableVAO = this.checkForGLExtension("vertex_array_object"), 
            e["gl.supports_vertex_array_object"] = this._supportsShareableVAO, cc.CHECK_GL_ERROR_DEBUG();
        }
    },
    loadConfigFile: function(t) {
        var e = cc.FileUtils.getInstance(), i = e.fullPathForFilename(t), n = e.dictionaryWithContentsOfFileThreadSafe(i);
        if (null != n) {
            var r = n.data;
            if (!r) return cc.log("Expected 'data' dict, but not found. Config file: " + t), 
            void 0;
            for (var c in r) this._valueDict[c] = r[c];
        }
    }
}), cc.Configuration._sharedConfiguration = null, cc.Configuration.getInstance = function() {
    return cc.Configuration._sharedConfiguration || (cc.Configuration._sharedConfiguration = new cc.Configuration(), 
    cc.Configuration._sharedConfiguration.init()), cc.Configuration._sharedConfiguration;
}, cc.Configuration.purgeConfiguration = function() {
    cc.Configuration._sharedConfiguration = null;
}, cc.ACTION_TAG_INVALID = -1, cc.Action = cc.Class.extend({
    _originalTarget: null,
    _target: null,
    _tag: cc.ACTION_TAG_INVALID,
    ctor: function() {
        this._originalTarget = null, this._target = null, this._tag = cc.ACTION_TAG_INVALID;
    },
    description: function() {
        return "<cc.Action | Tag = " + this._tag + ">";
    },
    copy: function() {
        return cc.clone(this);
    },
    clone: function() {
        var t = new cc.Action();
        return t._originalTarget = null, t._target = null, t._tag = this._tag, t;
    },
    isDone: function() {
        return !0;
    },
    startWithTarget: function(t) {
        this._originalTarget = t, this._target = t;
    },
    stop: function() {
        this._target = null;
    },
    step: function() {
        cc.log("[Action step]. override me");
    },
    update: function() {
        cc.log("[Action update]. override me");
    },
    getTarget: function() {
        return this._target;
    },
    setTarget: function(t) {
        this._target = t;
    },
    getOriginalTarget: function() {
        return this._originalTarget;
    },
    setOriginalTarget: function(t) {
        this._originalTarget = t;
    },
    getTag: function() {
        return this._tag;
    },
    setTag: function(t) {
        this._tag = t;
    },
    retain: function() {},
    release: function() {}
}), cc.Action.create = function() {
    return new cc.Action();
}, cc.FiniteTimeAction = cc.Action.extend({
    _duration: 0,
    ctor: function() {
        cc.Action.prototype.ctor.call(this), this._duration = 0;
    },
    getDuration: function() {
        return this._duration;
    },
    setDuration: function(t) {
        this._duration = t;
    },
    reverse: function() {
        return cc.log("cocos2d: FiniteTimeAction#reverse: Implement me"), null;
    },
    clone: function() {
        return new cc.FiniteTimeAction();
    }
}), cc.Speed = cc.Action.extend({
    _speed: 0,
    _innerAction: null,
    ctor: function() {
        cc.Action.prototype.ctor.call(this), this._speed = 0, this._innerAction = null;
    },
    getSpeed: function() {
        return this._speed;
    },
    setSpeed: function(t) {
        this._speed = t;
    },
    initWithAction: function(t, e) {
        return cc.Assert(null != t, ""), this._innerAction = t, this._speed = e, !0;
    },
    clone: function() {
        var t = new cc.Speed();
        return t.initWithAction(this._innerAction.clone(), this._speed), t;
    },
    startWithTarget: function(t) {
        cc.Action.prototype.startWithTarget.call(this, t), this._innerAction.startWithTarget(t);
    },
    stop: function() {
        this._innerAction.stop(), cc.Action.prototype.stop.call(this);
    },
    step: function(t) {
        this._innerAction.step(t * this._speed);
    },
    isDone: function() {
        return this._innerAction.isDone();
    },
    reverse: function() {
        return cc.Speed.create(this._innerAction.reverse(), this._speed);
    },
    setInnerAction: function(t) {
        this._innerAction != t && (this._innerAction = t);
    },
    getInnerAction: function() {
        return this._innerAction;
    }
}), cc.Speed.create = function(t, e) {
    var i = new cc.Speed();
    return i && i.initWithAction(t, e) ? i : null;
}, cc.Follow = cc.Action.extend({
    _followedNode: null,
    _boundarySet: !1,
    _boundaryFullyCovered: !1,
    _halfScreenSize: null,
    _fullScreenSize: null,
    leftBoundary: 0,
    rightBoundary: 0,
    topBoundary: 0,
    bottomBoundary: 0,
    _worldRect: null,
    ctor: function() {
        cc.Action.prototype.ctor.call(this), this._followedNode = null, this._boundarySet = !1, 
        this._boundaryFullyCovered = !1, this._halfScreenSize = null, this._fullScreenSize = null, 
        this.leftBoundary = 0, this.rightBoundary = 0, this.topBoundary = 0, this.bottomBoundary = 0, 
        this._worldRect = cc.RectZero();
    },
    clone: function() {
        var t = new cc.Follow(), e = this._worldRect, i = new cc.Rect(e.x, e.y, e.width, e.height);
        return t.initWithTarget(this._followedNode, i), t;
    },
    isBoundarySet: function() {
        return this._boundarySet;
    },
    setBoudarySet: function(t) {
        this._boundarySet = t;
    },
    initWithTarget: function(t, e) {
        cc.Assert(null != t, ""), e = e || cc.RectZero(), this._followedNode = t, this._worldRect = e, 
        this._boundarySet = !cc._rectEqualToZero(e), this._boundaryFullyCovered = !1;
        var i = cc.Director.getInstance().getWinSize();
        return this._fullScreenSize = cc.p(i.width, i.height), this._halfScreenSize = cc.pMult(this._fullScreenSize, .5), 
        this._boundarySet && (this.leftBoundary = -(e.x + e.width - this._fullScreenSize.x), 
        this.rightBoundary = -e.x, this.topBoundary = -e.y, this.bottomBoundary = -(e.y + e.height - this._fullScreenSize.y), 
        this.rightBoundary < this.leftBoundary && (this.rightBoundary = this.leftBoundary = (this.leftBoundary + this.rightBoundary) / 2), 
        this.topBoundary < this.bottomBoundary && (this.topBoundary = this.bottomBoundary = (this.topBoundary + this.bottomBoundary) / 2), 
        this.topBoundary == this.bottomBoundary && this.leftBoundary == this.rightBoundary && (this._boundaryFullyCovered = !0)), 
        !0;
    },
    step: function() {
        var t = this._followedNode.getPositionX(), e = this._followedNode.getPositionY();
        if (t = this._halfScreenSize.x - t, e = this._halfScreenSize.y - e, this._boundarySet) {
            if (this._boundaryFullyCovered) return;
            this._target.setPosition(cc.clampf(t, this.leftBoundary, this.rightBoundary), cc.clampf(e, this.bottomBoundary, this.topBoundary));
        } else this._target.setPosition(t, e);
    },
    isDone: function() {
        return !this._followedNode.isRunning();
    },
    stop: function() {
        this._target = null, cc.Action.prototype.stop.call(this);
    }
}), cc.Follow.create = function(t, e) {
    e = e || new cc.RectZero();
    var i = new cc.Follow();
    return null != e && i && i.initWithTarget(t, e) ? i : i && i.initWithTarget(t) ? i : null;
}, cc.ActionInterval = cc.FiniteTimeAction.extend({
    _elapsed: 0,
    _firstTick: !1,
    ctor: function() {
        cc.FiniteTimeAction.prototype.ctor.call(this), this._elapsed = 0, this._firstTick = !1;
    },
    getElapsed: function() {
        return this._elapsed;
    },
    initWithDuration: function(t) {
        return this._duration = 0 === t ? cc.FLT_EPSILON : t, this._elapsed = 0, this._firstTick = !0, 
        !0;
    },
    isDone: function() {
        return this._elapsed >= this._duration;
    },
    clone: function() {
        var t = new cc.ActionInterval();
        return t.initWithDuration(this._duration), t;
    },
    step: function(t) {
        this._firstTick ? (this._firstTick = !1, this._elapsed = 0) : this._elapsed += t;
        var e = this._elapsed / (this._duration > 1.192092896e-7 ? this._duration : 1.192092896e-7);
        e = 1 > e ? e : 1, this.update(e > 0 ? e : 0);
    },
    startWithTarget: function(t) {
        cc.Action.prototype.startWithTarget.call(this, t), this._elapsed = 0, this._firstTick = !0;
    },
    reverse: function() {
        return cc.Assert(!1, "cc.IntervalAction: reverse not implemented."), null;
    },
    setAmplitudeRate: function() {
        cc.Assert(0, "Actioninterval setAmplitudeRate");
    },
    getAmplitudeRate: function() {
        return cc.Assert(0, "Actioninterval getAmplitudeRate"), 0;
    }
}), cc.ActionInterval.create = function(t) {
    var e = new cc.ActionInterval();
    return e.initWithDuration(t), e;
}, cc.Sequence = cc.ActionInterval.extend({
    _actions: null,
    _split: null,
    _last: 0,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._actions = [], this._split = null, 
        this._last = 0;
    },
    initWithTwoActions: function(t, e) {
        cc.Assert(null != t, "Sequence.initWithTwoActions"), cc.Assert(null != e, "Sequence.initWithTwoActions");
        var i = t.getDuration() + e.getDuration();
        return this.initWithDuration(i), this._actions[0] = t, this._actions[1] = e, !0;
    },
    clone: function() {
        var t = new cc.Sequence();
        return t.initWithTwoActions(this._actions[0].clone(), this._actions[1].clone()), 
        t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t), this._split = this._actions[0].getDuration() / this._duration, 
        this._last = -1;
    },
    stop: function() {
        -1 !== this._last && this._actions[this._last].stop(), cc.Action.prototype.stop.call(this);
    },
    update: function(t) {
        var e, i = 0, n = this._split, r = this._actions, c = this._last;
        n > t ? (e = n ? t / n : 1, 0 === i && 1 === c && (r[1].update(0), r[1].stop())) : (i = 1, 
        e = 1 === n ? 1 : (t - n) / (1 - n), -1 === c && (r[0].startWithTarget(this._target), 
        r[0].update(1), r[0].stop()), c || (r[0].update(1), r[0].stop())), c === i && r[i].isDone() || (c !== i && r[i].startWithTarget(this._target), 
        r[i].update(e), this._last = i);
    },
    reverse: function() {
        return cc.Sequence._actionOneTwo(this._actions[1].reverse(), this._actions[0].reverse());
    },
    copy: function() {
        return this.clone();
    }
}), cc.Sequence.create = function(t) {
    var e = t instanceof Array ? t : arguments;
    e.length > 0 && null == e[e.length - 1] && cc.log("parameters should not be ending with null in Javascript");
    for (var i = e[0], n = 1; n < e.length; n++) e[n] && (i = cc.Sequence._actionOneTwo(i, e[n]));
    return i;
}, cc.Sequence._actionOneTwo = function(t, e) {
    var i = new cc.Sequence();
    return i.initWithTwoActions(t, e), i;
}, cc.Repeat = cc.ActionInterval.extend({
    _times: 0,
    _total: 0,
    _nextDt: 0,
    _actionInstant: !1,
    _innerAction: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._times = 0, this._total = 0, this._nextDt = 0, 
        this._actionInstant = !1, this._innerAction = null;
    },
    initWithAction: function(t, e) {
        var i = t.getDuration() * e;
        return this.initWithDuration(i) ? (this._times = e, this._innerAction = t, t instanceof cc.ActionInstant && (this._times -= 1), 
        this._total = 0, !0) : !1;
    },
    clone: function() {
        var t = new cc.Repeat();
        return t.initWithAction(this._innerAction.clone(), this._times), t;
    },
    startWithTarget: function(t) {
        this._total = 0, this._nextDt = this._innerAction.getDuration() / this._duration, 
        cc.ActionInterval.prototype.startWithTarget.call(this, t), this._innerAction.startWithTarget(t);
    },
    stop: function() {
        this._innerAction.stop(), cc.Action.prototype.stop.call(this);
    },
    update: function(t) {
        var e = this._innerAction, i = this._duration, n = this._times, r = this._nextDt;
        if (t >= r) {
            for (;t > r && this._total < n; ) e.update(1), this._total++, e.stop(), e.startWithTarget(this._target), 
            r += e.getDuration() / i, this._nextDt = r;
            t >= 1 && this._total < n && this._total++, this._actionInstant && (this._total == n ? (e.update(1), 
            e.stop()) : e.update(t - (r - e.getDuration() / i)));
        } else e.update(t * n % 1);
    },
    isDone: function() {
        return this._total == this._times;
    },
    reverse: function() {
        return cc.Repeat.create(this._innerAction.reverse(), this._times);
    },
    setInnerAction: function(t) {
        this._innerAction != t && (this._innerAction = t);
    },
    getInnerAction: function() {
        return this._innerAction;
    }
}), cc.Repeat.create = function(t, e) {
    var i = new cc.Repeat();
    return i.initWithAction(t, e), i;
}, cc.RepeatForever = cc.ActionInterval.extend({
    _innerAction: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._innerAction = null;
    },
    initWithAction: function(t) {
        return cc.Assert(null != t, ""), this._innerAction = t, !0;
    },
    clone: function() {
        var t = new cc.RepeatForever();
        return t.initWithAction(this._innerAction.clone()), t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t), this._innerAction.startWithTarget(t);
    },
    step: function(t) {
        var e = this._innerAction;
        e.step(t), e.isDone() && (e.startWithTarget(this._target), e.step(e.getElapsed() - e.getDuration()));
    },
    isDone: function() {
        return !1;
    },
    reverse: function() {
        return cc.RepeatForever.create(this._innerAction.reverse());
    },
    setInnerAction: function(t) {
        this._innerAction != t && (this._innerAction = t);
    },
    getInnerAction: function() {
        return this._innerAction;
    }
}), cc.RepeatForever.create = function(t) {
    var e = new cc.RepeatForever();
    return e && e.initWithAction(t) ? e : null;
}, cc.Spawn = cc.ActionInterval.extend({
    _one: null,
    _two: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._one = null, this._two = null;
    },
    initWithTwoActions: function(t, e) {
        cc.Assert(null != t, "no action1"), cc.Assert(null != e, "no action2");
        var i = !1, n = t.getDuration(), r = e.getDuration();
        return this.initWithDuration(Math.max(n, r)) && (this._one = t, this._two = e, n > r ? this._two = cc.Sequence._actionOneTwo(e, cc.DelayTime.create(n - r)) : r > n && (this._one = cc.Sequence._actionOneTwo(t, cc.DelayTime.create(r - n))), 
        i = !0), i;
    },
    clone: function() {
        var t = new cc.Spawn();
        return t.initWithTwoActions(this._one.clone(), this._two.clone()), t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t), this._one.startWithTarget(t), 
        this._two.startWithTarget(t);
    },
    stop: function() {
        this._one.stop(), this._two.stop(), cc.Action.prototype.stop.call(this);
    },
    update: function(t) {
        this._one && this._one.update(t), this._two && this._two.update(t);
    },
    reverse: function() {
        return cc.Spawn._actionOneTwo(this._one.reverse(), this._two.reverse());
    }
}), cc.Spawn.create = function(t) {
    var e = t instanceof Array ? t : arguments;
    e.length > 0 && null == e[e.length - 1] && cc.log("parameters should not be ending with null in Javascript");
    for (var i = e[0], n = 1; n < e.length; n++) null != e[n] && (i = this._actionOneTwo(i, e[n]));
    return i;
}, cc.Spawn._actionOneTwo = function(t, e) {
    var i = new cc.Spawn();
    return i.initWithTwoActions(t, e), i;
}, cc.RotateTo = cc.ActionInterval.extend({
    _dstAngleX: 0,
    _startAngleX: 0,
    _diffAngleX: 0,
    _dstAngleY: 0,
    _startAngleY: 0,
    _diffAngleY: 0,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._dstAngleX = 0, this._startAngleX = 0, 
        this._diffAngleX = 0, this._dstAngleY = 0, this._startAngleY = 0, this._diffAngleY = 0;
    },
    initWithDuration: function(t, e, i) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._dstAngleX = e || 0, 
        this._dstAngleY = i || this._dstAngleX, !0) : !1;
    },
    clone: function() {
        var t = new cc.RotateTo();
        return t.initWithDuration(this._duration, this._dstAngleX, this._dstAngleY), t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t);
        var e = t.getRotationX() % 360, i = this._dstAngleX - e;
        i > 180 && (i -= 360), -180 > i && (i += 360), this._startAngleX = e, this._diffAngleX = i, 
        this._startAngleY = t.getRotationY() % 360;
        var n = this._dstAngleY - this._startAngleY;
        n > 180 && (n -= 360), -180 > n && (n += 360), this._diffAngleY = n;
    },
    reverse: function() {
        cc.Assert(0, "RotateTo reverse not implemented");
    },
    update: function(t) {
        this._target && (this._target.setRotationX(this._startAngleX + this._diffAngleX * t), 
        this._target.setRotationY(this._startAngleY + this._diffAngleY * t));
    }
}), cc.RotateTo.create = function(t, e, i) {
    var n = new cc.RotateTo();
    return n.initWithDuration(t, e, i), n;
}, cc.RotateBy = cc.ActionInterval.extend({
    _angleX: 0,
    _startAngleX: 0,
    _angleY: 0,
    _startAngleY: 0,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._angleX = 0, this._startAngleX = 0, 
        this._angleY = 0, this._startAngleY = 0;
    },
    initWithDuration: function(t, e, i) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._angleX = e || 0, 
        this._angleY = i || this._angleX, !0) : !1;
    },
    clone: function() {
        var t = new cc.RotateBy();
        return t.initWithDuration(this._duration, this._angleX, this._angleY), t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t), this._startAngleX = t.getRotationX(), 
        this._startAngleY = t.getRotationY();
    },
    update: function(t) {
        this._target && (this._target.setRotationX(this._startAngleX + this._angleX * t), 
        this._target.setRotationY(this._startAngleY + this._angleY * t));
    },
    reverse: function() {
        return cc.RotateBy.create(this._duration, -this._angleX, -this._angleY);
    }
}), cc.RotateBy.create = function(t, e, i) {
    var n = new cc.RotateBy();
    return n.initWithDuration(t, e, i), n;
}, cc.MoveBy = cc.ActionInterval.extend({
    _positionDelta: null,
    _startPosition: null,
    _previousPosition: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._positionDelta = cc.p(0, 0), this._startPosition = cc.p(0, 0), 
        this._previousPosition = cc.p(0, 0);
    },
    initWithDuration: function(t, e) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._positionDelta.x = e.x, 
        this._positionDelta.y = e.y, !0) : !1;
    },
    clone: function() {
        var t = new cc.MoveBy();
        return t.initWithDuration(this._duration, this._positionDelta), t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t);
        var e = t.getPositionX(), i = t.getPositionY();
        this._previousPosition.x = e, this._previousPosition.y = i, this._startPosition.x = e, 
        this._startPosition.y = i;
    },
    update: function(t) {
        if (this._target) {
            var e = this._positionDelta.x * t, i = this._positionDelta.y * t, n = this._startPosition;
            if (cc.ENABLE_STACKABLE_ACTIONS) {
                var r = this._target.getPositionX(), c = this._target.getPositionY(), o = this._previousPosition;
                n.x = n.x + r - o.x, n.y = n.y + c - o.y, e += n.x, i += n.y, this._target.setPosition(e, i), 
                o.x = e, o.y = i;
            } else this._target.setPosition(n.x + e, n.y + i);
        }
    },
    reverse: function() {
        return cc.MoveBy.create(this._duration, cc.p(-this._positionDelta.x, -this._positionDelta.y));
    }
}), cc.MoveBy.create = function(t, e) {
    var i = new cc.MoveBy();
    return i.initWithDuration(t, e), i;
}, cc.MoveTo = cc.MoveBy.extend({
    _endPosition: null,
    ctor: function() {
        cc.MoveBy.prototype.ctor.call(this), this._endPosition = cc.p(0, 0);
    },
    initWithDuration: function(t, e) {
        return cc.MoveBy.prototype.initWithDuration.call(this, t, e) ? (this._endPosition.x = e.x, 
        this._endPosition.y = e.y, !0) : !1;
    },
    clone: function() {
        var t = new cc.MoveTo();
        return t.initWithDuration(this._duration, this._endPosition), t;
    },
    startWithTarget: function(t) {
        cc.MoveBy.prototype.startWithTarget.call(this, t), this._positionDelta.x = this._endPosition.x - t.getPositionX(), 
        this._positionDelta.y = this._endPosition.y - t.getPositionY();
    }
}), cc.MoveTo.create = function(t, e) {
    var i = new cc.MoveTo();
    return i.initWithDuration(t, e), i;
}, cc.SkewTo = cc.ActionInterval.extend({
    _skewX: 0,
    _skewY: 0,
    _startSkewX: 0,
    _startSkewY: 0,
    _endSkewX: 0,
    _endSkewY: 0,
    _deltaX: 0,
    _deltaY: 0,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._skewX = 0, this._skewY = 0, this._startSkewX = 0, 
        this._startSkewY = 0, this._endSkewX = 0, this._endSkewY = 0, this._deltaX = 0, 
        this._deltaY = 0;
    },
    initWithDuration: function(t, e, i) {
        var n = !1;
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) && (this._endSkewX = e, 
        this._endSkewY = i, n = !0), n;
    },
    clone: function() {
        var t = new cc.SkewTo();
        return t.initWithDuration(this._duration, this._endSkewX, this._endSkewY), t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t), this._startSkewX = t.getSkewX() % 180, 
        this._deltaX = this._endSkewX - this._startSkewX, this._deltaX > 180 && (this._deltaX -= 360), 
        this._deltaX < -180 && (this._deltaX += 360), this._startSkewY = t.getSkewY() % 360, 
        this._deltaY = this._endSkewY - this._startSkewY, this._deltaY > 180 && (this._deltaY -= 360), 
        this._deltaY < -180 && (this._deltaY += 360);
    },
    update: function(t) {
        this._target.setSkewX(this._startSkewX + this._deltaX * t), this._target.setSkewY(this._startSkewY + this._deltaY * t);
    }
}), cc.SkewTo.create = function(t, e, i) {
    var n = new cc.SkewTo();
    return n && n.initWithDuration(t, e, i), n;
}, cc.SkewBy = cc.SkewTo.extend({
    initWithDuration: function(t, e, i) {
        var n = !1;
        return cc.SkewTo.prototype.initWithDuration.call(this, t, e, i) && (this._skewX = e, 
        this._skewY = i, n = !0), n;
    },
    clone: function() {
        var t = new cc.SkewBy();
        return t.initWithDuration(this._duration, this._skewX, this._skewY), t;
    },
    startWithTarget: function(t) {
        cc.SkewTo.prototype.startWithTarget.call(this, t), this._deltaX = this._skewX, this._deltaY = this._skewY, 
        this._endSkewX = this._startSkewX + this._deltaX, this._endSkewY = this._startSkewY + this._deltaY;
    },
    reverse: function() {
        return cc.SkewBy.create(this._duration, -this._skewX, -this._skewY);
    }
}), cc.SkewBy.create = function(t, e, i) {
    var n = new cc.SkewBy();
    return n && n.initWithDuration(t, e, i), n;
}, cc.JumpBy = cc.ActionInterval.extend({
    _startPosition: null,
    _delta: null,
    _height: 0,
    _jumps: 0,
    _previousPosition: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._startPosition = cc.p(0, 0), this._previousPosition = cc.p(0, 0), 
        this._delta = cc.p(0, 0), this._height = 0, this._jumps = 0;
    },
    initWithDuration: function(t, e, i, n) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._delta.x = e.x, 
        this._delta.y = e.y, this._height = i, this._jumps = n, !0) : !1;
    },
    clone: function() {
        var t = new cc.JumpBy();
        return t.initWithDuration(this._duration, this._delta, this._height, this._jumps), 
        t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t);
        var e = t.getPositionX(), i = t.getPositionY();
        this._previousPosition.x = e, this._previousPosition.y = i, this._startPosition.x = e, 
        this._startPosition.y = i;
    },
    update: function(t) {
        if (this._target) {
            var e = t * this._jumps % 1, i = 4 * this._height * e * (1 - e);
            i += this._delta.y * t;
            var n = this._delta.x * t, r = this._startPosition;
            if (cc.ENABLE_STACKABLE_ACTIONS) {
                var c = this._target.getPositionX(), o = this._target.getPositionY(), s = this._previousPosition;
                r.x = r.x + c - s.x, r.y = r.y + o - s.y, n += r.x, i += r.y, this._target.setPosition(n, i), 
                s.x = n, s.y = i;
            } else this._target.setPosition(r.x + n, r.y + i);
        }
    },
    reverse: function() {
        return cc.JumpBy.create(this._duration, cc.p(-this._delta.x, -this._delta.y), this._height, this._jumps);
    }
}), cc.JumpBy.create = function(t, e, i, n) {
    var r = new cc.JumpBy();
    return r.initWithDuration(t, e, i, n), r;
}, cc.JumpTo = cc.JumpBy.extend({
    startWithTarget: function(t) {
        cc.JumpBy.prototype.startWithTarget.call(this, t), this._delta.x = this._delta.x - this._startPosition.x, 
        this._delta.y = this._delta.y - this._startPosition.y;
    },
    clone: function() {
        var t = new cc.JumpTo();
        return t.initWithDuration(this._duration, this._delta, this._height, this._jumps), 
        t;
    }
}), cc.JumpTo.create = function(t, e, i, n) {
    var r = new cc.JumpTo();
    return r.initWithDuration(t, e, i, n), r;
}, cc.bezierAt = function(t, e, i, n, r) {
    return Math.pow(1 - r, 3) * t + 3 * r * Math.pow(1 - r, 2) * e + 3 * Math.pow(r, 2) * (1 - r) * i + Math.pow(r, 3) * n;
}, cc.BezierBy = cc.ActionInterval.extend({
    _config: null,
    _startPosition: null,
    _previousPosition: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._config = [], this._startPosition = cc.p(0, 0), 
        this._previousPosition = cc.p(0, 0);
    },
    initWithDuration: function(t, e) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._config = e, 
        !0) : !1;
    },
    clone: function() {
        for (var t = new cc.BezierBy(), e = [], i = 0; i < this._config.length; i++) {
            var n = this._config[i];
            e.push(cc.p(n.x, n.y));
        }
        return t.initWithDuration(this._duration, e), t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t);
        var e = t.getPositionX(), i = t.getPositionY();
        this._previousPosition.x = e, this._previousPosition.y = i, this._startPosition.x = e, 
        this._startPosition.y = i;
    },
    update: function(t) {
        if (this._target) {
            var e = this._config, i = 0, n = e[0].x, r = e[1].x, c = e[2].x, o = 0, s = e[0].y, a = e[1].y, h = e[2].y, u = cc.bezierAt(i, n, r, c, t), l = cc.bezierAt(o, s, a, h, t), _ = this._startPosition;
            if (cc.ENABLE_STACKABLE_ACTIONS) {
                var d = this._target.getPositionX(), f = this._target.getPositionY(), p = this._previousPosition;
                _.x = _.x + d - p.x, _.y = _.y + f - p.y, u += _.x, l += _.y, this._target.setPosition(u, l), 
                p.x = u, p.y = l;
            } else this._target.setPosition(_.x + u, _.y + l);
        }
    },
    reverse: function() {
        var t = this._config, e = [ cc.pAdd(t[1], cc.pNeg(t[2])), cc.pAdd(t[0], cc.pNeg(t[2])), cc.pNeg(t[2]) ];
        return cc.BezierBy.create(this._duration, e);
    }
}), cc.BezierBy.create = function(t, e) {
    var i = new cc.BezierBy();
    return i.initWithDuration(t, e), i;
}, cc.BezierTo = cc.BezierBy.extend({
    _toConfig: null,
    ctor: function() {
        cc.BezierBy.prototype.ctor.call(this), this._toConfig = [];
    },
    initWithDuration: function(t, e) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._toConfig = e, 
        !0) : !1;
    },
    clone: function() {
        var t = new cc.BezierTo();
        return t.initWithDuration(this._duration, this._toConfig), t;
    },
    startWithTarget: function(t) {
        cc.BezierBy.prototype.startWithTarget.call(this, t);
        var e = this._startPosition, i = this._toConfig, n = this._config;
        n[0] = cc.pSub(i[0], e), n[1] = cc.pSub(i[1], e), n[2] = cc.pSub(i[2], e);
    }
}), cc.BezierTo.create = function(t, e) {
    var i = new cc.BezierTo();
    return i.initWithDuration(t, e), i;
}, cc.ScaleTo = cc.ActionInterval.extend({
    _scaleX: 1,
    _scaleY: 1,
    _startScaleX: 1,
    _startScaleY: 1,
    _endScaleX: 0,
    _endScaleY: 0,
    _deltaX: 0,
    _deltaY: 0,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._scaleX = 1, this._scaleY = 1, 
        this._startScaleX = 1, this._startScaleY = 1, this._endScaleX = 0, this._endScaleY = 0, 
        this._deltaX = 0, this._deltaY = 0;
    },
    initWithDuration: function(t, e, i) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._endScaleX = e, 
        this._endScaleY = null != i ? i : e, !0) : !1;
    },
    clone: function() {
        var t = new cc.ScaleTo();
        return t.initWithDuration(this._duration, this._endScaleX, this._endScaleY), t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t), this._startScaleX = t.getScaleX(), 
        this._startScaleY = t.getScaleY(), this._deltaX = this._endScaleX - this._startScaleX, 
        this._deltaY = this._endScaleY - this._startScaleY;
    },
    update: function(t) {
        this._target && this._target.setScale(this._startScaleX + this._deltaX * t, this._startScaleY + this._deltaY * t);
    }
}), cc.ScaleTo.create = function(t, e, i) {
    var n = new cc.ScaleTo();
    return n.initWithDuration(t, e, i), n;
}, cc.ScaleBy = cc.ScaleTo.extend({
    startWithTarget: function(t) {
        cc.ScaleTo.prototype.startWithTarget.call(this, t), this._deltaX = this._startScaleX * this._endScaleX - this._startScaleX, 
        this._deltaY = this._startScaleY * this._endScaleY - this._startScaleY;
    },
    reverse: function() {
        return cc.ScaleBy.create(this._duration, 1 / this._endScaleX, 1 / this._endScaleY);
    },
    clone: function() {
        var t = new cc.ScaleBy();
        return t.initWithDuration(this._duration, this._endScaleX, this._endScaleY), t;
    }
}), cc.ScaleBy.create = function(t, e, i) {
    var n = new cc.ScaleBy();
    return n.initWithDuration(t, e, i), n;
}, cc.Blink = cc.ActionInterval.extend({
    _times: 0,
    _originalState: !1,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._times = 0, this._originalState = !1;
    },
    initWithDuration: function(t, e) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._times = e, 
        !0) : !1;
    },
    clone: function() {
        var t = new cc.Blink();
        return t.initWithDuration(this._duration, this._times), t;
    },
    update: function(t) {
        if (this._target && !this.isDone()) {
            var e = 1 / this._times, i = t % e;
            this._target.setVisible(i > e / 2);
        }
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t), this._originalState = t.isVisible();
    },
    stop: function() {
        this._target.setVisible(this._originalState), cc.ActionInterval.prototype.stop.call(this);
    },
    reverse: function() {
        return cc.Blink.create(this._duration, this._times);
    }
}), cc.Blink.create = function(t, e) {
    var i = new cc.Blink();
    return i.initWithDuration(t, e), i;
}, cc.FadeIn = cc.ActionInterval.extend({
    update: function(t) {
        this._target.setOpacity(255 * t);
    },
    reverse: function() {
        return cc.FadeOut.create(this._duration);
    },
    clone: function() {
        var t = new cc.FadeIn();
        return t.initWithDuration(this._duration), t;
    }
}), cc.FadeIn.create = function(t) {
    var e = new cc.FadeIn();
    return e.initWithDuration(t), e;
}, cc.FadeOut = cc.ActionInterval.extend({
    update: function(t) {
        this._target.setOpacity(255 * (1 - t));
    },
    reverse: function() {
        return cc.FadeIn.create(this._duration);
    },
    clone: function() {
        var t = new cc.FadeOut();
        return t.initWithDuration(this._duration), t;
    }
}), cc.FadeOut.create = function(t) {
    var e = new cc.FadeOut();
    return e.initWithDuration(t), e;
}, cc.FadeTo = cc.ActionInterval.extend({
    _toOpacity: null,
    _fromOpacity: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._toOpacity = 0, this._fromOpacity = 0;
    },
    initWithDuration: function(t, e) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._toOpacity = e, 
        !0) : !1;
    },
    clone: function() {
        var t = new cc.FadeTo();
        return t.initWithDuration(this._duration, this._toOpacity), t;
    },
    update: function(t) {
        this._target.setOpacity(this._fromOpacity + (this._toOpacity - this._fromOpacity) * t);
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t), this._fromOpacity = t.getOpacity();
    }
}), cc.FadeTo.create = function(t, e) {
    var i = new cc.FadeTo();
    return i.initWithDuration(t, e), i;
}, cc.TintTo = cc.ActionInterval.extend({
    _to: null,
    _from: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._to = cc.c3b(0, 0, 0), this._from = cc.c3b(0, 0, 0);
    },
    initWithDuration: function(t, e, i, n) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._to = cc.c3b(e, i, n), 
        !0) : !1;
    },
    clone: function() {
        var t = new cc.TintTo(), e = this._to;
        return t.initWithDuration(this._duration, e.r, e.g, e.b), t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t), this._from = this._target.getColor();
    },
    update: function(t) {
        var e = this._from, i = this._to;
        this._target.setColor(cc.c3b(e.r + (i.r - e.r) * t, e.g + (i.g - e.g) * t, e.b + (i.b - e.b) * t));
    }
}), cc.TintTo.create = function(t, e, i, n) {
    var r = new cc.TintTo();
    return r.initWithDuration(t, e, i, n), r;
}, cc.TintBy = cc.ActionInterval.extend({
    _deltaR: 0,
    _deltaG: 0,
    _deltaB: 0,
    _fromR: 0,
    _fromG: 0,
    _fromB: 0,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._deltaR = 0, this._deltaG = 0, 
        this._deltaB = 0, this._fromR = 0, this._fromG = 0, this._fromB = 0;
    },
    initWithDuration: function(t, e, i, n) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._deltaR = e, 
        this._deltaG = i, this._deltaB = n, !0) : !1;
    },
    clone: function() {
        var t = new cc.TintBy();
        return t.initWithDuration(this._duration, this._deltaR, this._deltaG, this._deltaB), 
        t;
    },
    startWithTarget: function(t) {
        if (cc.ActionInterval.prototype.startWithTarget.call(this, t), t.RGBAProtocol) {
            var e = t.getColor();
            this._fromR = e.r, this._fromG = e.g, this._fromB = e.b;
        }
    },
    update: function(t) {
        this._target.RGBAProtocol && this._target.setColor(cc.c3b(this._fromR + this._deltaR * t, this._fromG + this._deltaG * t, this._fromB + this._deltaB * t));
    },
    reverse: function() {
        return cc.TintBy.create(this._duration, -this._deltaR, -this._deltaG, -this._deltaB);
    }
}), cc.TintBy.create = function(t, e, i, n) {
    var r = new cc.TintBy();
    return r.initWithDuration(t, e, i, n), r;
}, cc.DelayTime = cc.ActionInterval.extend({
    update: function() {},
    reverse: function() {
        return cc.DelayTime.create(this._duration);
    },
    clone: function() {
        var t = new cc.DelayTime();
        return t.initWithDuration(this._duration), t;
    }
}), cc.DelayTime.create = function(t) {
    var e = new cc.DelayTime();
    return e.initWithDuration(t), e;
}, cc.ReverseTime = cc.ActionInterval.extend({
    _other: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._other = null;
    },
    initWithAction: function(t) {
        return cc.Assert(null != t, ""), cc.Assert(t != this._other, ""), cc.ActionInterval.prototype.initWithDuration.call(this, t.getDuration()) ? (this._other = t, 
        !0) : !1;
    },
    clone: function() {
        var t = new cc.ReverseTime();
        return t.initWithAction(this._other.clone()), t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t), this._other.startWithTarget(t);
    },
    update: function(t) {
        this._other && this._other.update(1 - t);
    },
    reverse: function() {
        return this._other.clone();
    },
    stop: function() {
        this._other.stop(), cc.Action.prototype.stop.call(this);
    }
}), cc.ReverseTime.create = function(t) {
    var e = new cc.ReverseTime();
    return e.initWithAction(t), e;
}, cc.Animate = cc.ActionInterval.extend({
    _animation: null,
    _nextFrame: 0,
    _origFrame: null,
    _executedLoops: 0,
    _splitTimes: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._animation = null, this._nextFrame = 0, 
        this._origFrame = null, this._executedLoops = 0, this._splitTimes = null;
    },
    getAnimation: function() {
        return this._animation;
    },
    setAnimation: function(t) {
        this._animation = t;
    },
    initWithAnimation: function(t) {
        cc.Assert(null != t, "Animate: argument Animation must be non-NULL");
        var e = t.getDuration();
        if (this.initWithDuration(e * t.getLoops())) {
            this._nextFrame = 0, this.setAnimation(t), this._origFrame = null, this._executedLoops = 0;
            var i = [], n = 0, r = e / t.getTotalDelayUnits(), c = t.getFrames();
            cc.ArrayVerifyType(c, cc.AnimationFrame);
            for (var o = 0; o < c.length; o++) {
                var s = c[o], a = n * r / e;
                n += s.getDelayUnits(), i.push(a);
            }
            return this._splitTimes = i, !0;
        }
        return !1;
    },
    clone: function() {
        var t = new cc.Animate();
        return t.initWithAnimation(this._animation.clone()), t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t), this._animation.getRestoreOriginalFrame() && (this._origFrame = t.displayFrame()), 
        this._nextFrame = 0, this._executedLoops = 0;
    },
    update: function(t) {
        if (1 > t) {
            t *= this._animation.getLoops();
            var e = 0 | t;
            e > this._executedLoops && (this._nextFrame = 0, this._executedLoops++), t %= 1;
        }
        for (var i = this._animation.getFrames(), n = i.length, r = this._splitTimes, c = this._nextFrame; n > c && r[c] <= t; c++) this._target.setDisplayFrame(i[c].getSpriteFrame()), 
        this._nextFrame = c + 1;
    },
    reverse: function() {
        var t = this._animation, e = t.getFrames(), i = [];
        if (cc.ArrayVerifyType(e, cc.AnimationFrame), e.length > 0) for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n];
            if (!r) break;
            i.push(r.clone());
        }
        var c = cc.Animation.createWithAnimationFrames(i, t.getDelayPerUnit(), t.getLoops());
        return c.setRestoreOriginalFrame(t.getRestoreOriginalFrame()), cc.Animate.create(c);
    },
    stop: function() {
        this._animation.getRestoreOriginalFrame() && this._target && this._target.setDisplayFrame(this._origFrame), 
        cc.Action.prototype.stop.call(this);
    }
}), cc.Animate.create = function(t) {
    var e = new cc.Animate();
    return e.initWithAnimation(t), e;
}, cc.TargetedAction = cc.ActionInterval.extend({
    _action: null,
    _forcedTarget: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._action = null, this._forcedTarget = null;
    },
    initWithTarget: function(t, e) {
        return this.initWithDuration(e.getDuration()) ? (this._forcedTarget = t, this._action = e, 
        !0) : !1;
    },
    clone: function() {
        var t = new cc.TargetedAction();
        return t.initWithTarget(this._forcedTarget, this._action.clone()), t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t), this._action.startWithTarget(this._forcedTarget);
    },
    stop: function() {
        this._action.stop();
    },
    update: function(t) {
        this._action.update(t);
    },
    getForcedTarget: function() {
        return this._forcedTarget;
    },
    setForcedTarget: function(t) {
        this._forcedTarget != t && (this._forcedTarget = t);
    }
}), cc.TargetedAction.create = function(t, e) {
    var i = new cc.TargetedAction();
    return i.initWithTarget(t, e), i;
}, cc.TARGET_PLATFORM = {
    WINDOWS: 0,
    LINUX: 1,
    MACOS: 2,
    ANDROID: 3,
    IPHONE: 4,
    IPAD: 5,
    BLACKBERRY: 6,
    NACL: 7,
    EMSCRIPTEN: 8,
    MOBILE_BROWSER: 100,
    PC_BROWSER: 101
}, cc.ORIENTATION_PORTRAIT = 0, cc.ORIENTATION_PORTRAIT_UPSIDE_DOWN = 1, cc.ORIENTATION_LANDSCAPE_LEFT = 2, 
cc.ORIENTATION_LANDSCAPE_RIGHT = 3, cc.CANVAS = 0, cc.WEBGL = 1, cc.drawingUtil = null, 
cc.renderContext = null, cc.canvas = null, cc.gameDiv = null, cc.renderContextType = cc.CANVAS, 
cc.originalCanvasSize = cc.size(0, 0), window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
}(), window.console || (window.console = {}, window.console.log = function() {}, 
window.console.assert = function() {}), cc.isAddedHiddenEvent = !1, cc.setup = function(t, e, i) {
    function n() {
        document[c] || cc.Director.getInstance()._resetLastUpdate();
    }
    var r = cc.$(t) || cc.$("#" + t);
    if ("CANVAS" == r.tagName ? (e = e || r.width, i = i || r.height, cc.container = cc.$new("DIV"), 
    cc.canvas = r, cc.canvas.parentNode.insertBefore(cc.container, cc.canvas), cc.canvas.appendTo(cc.container), 
    cc.container.style.width = (e || 480) + "px", cc.container.style.height = (i || 320) + "px", 
    cc.container.setAttribute("id", "Cocos2dGameContainer"), cc.container.style.margin = "0 auto", 
    cc.canvas.setAttribute("width", e || 480), cc.canvas.setAttribute("height", i || 320)) : ("DIV" != r.tagName && cc.log("Warning: target element is not a DIV or CANVAS"), 
    e = e || r.clientWidth, i = i || r.clientHeight, cc.canvas = cc.$new("CANVAS"), 
    cc.canvas.addClass("gameCanvas"), cc.canvas.setAttribute("width", e || 480), cc.canvas.setAttribute("height", i || 320), 
    cc.container = r, r.appendChild(cc.canvas), cc.container.style.width = (e || 480) + "px", 
    cc.container.style.height = (i || 320) + "px"), cc.container.style.position = "relative", 
    cc.container.style.overflow = "hidden", cc.container.top = "100%", !cc.__renderDoesnotSupport) {
        cc.Browser.supportWebGL && (cc.renderContext = cc.webglContext = cc.create3DContext(cc.canvas, {
            stencil: !0,
            preserveDrawingBuffer: !0,
            alpha: !1
        })), cc.renderContext ? (cc.renderContextType = cc.WEBGL, window.gl = cc.renderContext, 
        cc.drawingUtil = new cc.DrawingPrimitiveWebGL(cc.renderContext), cc.TextureCache.getInstance()._initializingRenderer()) : (cc.renderContext = cc.canvas.getContext("2d"), 
        cc.mainRenderContextBackup = cc.renderContext, cc.renderContextType = cc.CANVAS, 
        cc.renderContext.translate(0, cc.canvas.height), cc.drawingUtil = new cc.DrawingPrimitiveCanvas(cc.renderContext)), 
        cc.originalCanvasSize = cc.size(cc.canvas.width, cc.canvas.height), cc.gameDiv = cc.container, 
        cc.log(cc.ENGINE_VERSION), cc.Configuration.getInstance(), cc.setContextMenuEnable(!1), 
        cc.Browser.isMobile && (cc._addUserSelectStatus(), cc._addBottomTag());
        var c, o;
        "undefined" != typeof document.hidden ? (c = "hidden", o = "visibilitychange") : "undefined" != typeof document.mozHidden ? (c = "mozHidden", 
        o = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (c = "msHidden", 
        o = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (c = "webkitHidden", 
        o = "webkitvisibilitychange"), "undefined" == typeof document.addEventListener || "undefined" == typeof c ? cc.isAddedHiddenEvent = !1 : (cc.isAddedHiddenEvent = !0, 
        document.addEventListener(o, n, !1));
    }
}, cc._addUserSelectStatus = function() {
    var t = document.createElement("style");
    t.type = "text/css", document.body.appendChild(t), t.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}";
}, cc._addBottomTag = function() {
    var t = document.createElement("div");
    t.id = "bottom", t.style.border = t.style.margin = t.style.padding = t.style.height = t.style.lineHeight = t.style.fontSize = "0px", 
    document.body.appendChild(t), window.location.href = "#bottom";
}, cc._isContextMenuEnable = !1, cc.setContextMenuEnable = function(t) {
    cc._isContextMenuEnable = t, cc.canvas.oncontextmenu = cc._isContextMenuEnable ? function() {} : function() {
        return !1;
    };
}, cc.Application = cc.Class.extend({
    _animationInterval: null,
    ctor: function() {
        this._animationInterval = 0, cc.Assert(!cc._sharedApplication, "CCApplication ctor"), 
        cc._sharedApplication = this;
    },
    setAnimationInterval: function(t) {
        this._animationInterval = t;
    },
    statusBarFrame: function(t) {
        t && (t = cc.rect(0, 0, 0, 0));
    },
    getTargetPlatform: function() {
        return cc.Browser.isMobile ? cc.TARGET_PLATFORM.MOBILE_BROWSER : cc.TARGET_PLATFORM.PC_BROWSER;
    },
    run: function() {
        if (!this.applicationDidFinishLaunching()) return 0;
        var t, e = cc.Director.getInstance(), i = window;
        return i.requestAnimFrame && this._animationInterval == 1 / 60 ? (t = function() {
            e.mainLoop(), i.requestAnimFrame(t);
        }, i.requestAnimFrame(t)) : (t = function() {
            e.mainLoop();
        }, setInterval(t, 1e3 * this._animationInterval)), 0;
    }
}), cc.Application.getInstance = function() {
    return cc.Assert(cc._sharedApplication, "sharedApplication"), cc._sharedApplication;
}, cc.Application.getCurrentLanguage = function() {
    var t = cc.LANGUAGE_ENGLISH, e = navigator.language;
    if (e || (e = navigator.browserLanguage || navigator.userLanguage), !e) return t;
    switch (e = e.toLowerCase()) {
      case "zh-cn":
        t = cc.LANGUAGE_CHINESE;
        break;

      case "fr":
        t = cc.LANGUAGE_FRENCH;
        break;

      case "it":
        t = cc.LANGUAGE_ITALIAN;
        break;

      case "de":
        t = cc.LANGUAGE_GERMAN;
        break;

      case "es":
        t = cc.LANGUAGE_SPANISH;
        break;

      case "ru":
        t = cc.LANGUAGE_RUSSIAN;
        break;

      case "ko":
        t = cc.LANGUAGE_KOREAN;
        break;

      case "ja":
        t = cc.LANGUAGE_JAPANESE;
        break;

      case "hu":
        t = cc.LANGUAGE_HUNGARIAN;
        break;

      case "pt":
        t = cc.LANGUAGE_PORTUGUESE;
        break;

      case "ar":
        t = cc.LANGUAGE_ARABIC;
        break;

      case "no":
        t = cc.LANGUAGE_NORWEGIAN;
        break;

      case "pl":
        t = cc.LANGUAGE_POLISH;
    }
    return t;
}, cc._sharedApplication = null, cc.AppController = cc.Class.extend({
    didFinishLaunchingWithOptions: function() {
        return cc.Application.getInstance().run(), !0;
    },
    applicationWillResignActive: function() {
        cc.Director.getInstance().pause();
    },
    applicationDidBecomeActive: function() {
        cc.Director.getInstance().resume();
    },
    applicationDidEnterBackground: function() {
        cc.Application.getInstance().applicationDidEnterBackground();
    },
    applicationWillEnterForeground: function() {
        cc.Application.getInstance().applicationWillEnterForeground();
    },
    applicationWillTerminate: function() {}
}), cc.AppController.shareAppController = function() {
    return null == cc.sharedAppController && (cc.sharedAppController = new cc.AppController()), 
    cc.Assert(cc.sharedAppController, "shareAppController"), cc.sharedAppController;
}, cc.sharedAppController = null, cc.AffineTransform = function(t, e, i, n, r, c) {
    this.a = t, this.b = e, this.c = i, this.d = n, this.tx = r, this.ty = c;
}, cc.__AffineTransformMake = function(t, e, i, n, r, c) {
    return {
        a: t,
        b: e,
        c: i,
        d: n,
        tx: r,
        ty: c
    };
}, cc.AffineTransformMake = function(t, e, i, n, r, c) {
    return {
        a: t,
        b: e,
        c: i,
        d: n,
        tx: r,
        ty: c
    };
}, cc.__PointApplyAffineTransform = function(t, e) {
    return {
        x: e.a * t.x + e.c * t.y + e.tx,
        y: e.b * t.x + e.d * t.y + e.ty
    };
}, cc.PointApplyAffineTransform = function(t, e) {
    return {
        x: e.a * t.x + e.c * t.y + e.tx,
        y: e.b * t.x + e.d * t.y + e.ty
    };
}, cc._PointApplyAffineTransform = function(t, e, i) {
    return {
        x: i.a * t + i.c * e + i.tx,
        y: i.b * t + i.d * e + i.ty
    };
}, cc.__SizeApplyAffineTransform = function(t, e) {
    return {
        width: e.a * t.width + e.c * t.height,
        height: e.b * t.width + e.d * t.height
    };
}, cc.SizeApplyAffineTransform = function(t, e) {
    return {
        width: e.a * t.width + e.c * t.height,
        height: e.b * t.width + e.d * t.height
    };
}, cc.AffineTransformMakeIdentity = function() {
    return {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0
    };
}, cc.AffineTransformIdentity = function() {
    return {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0
    };
}, cc.RectApplyAffineTransform = function(t, e) {
    var i = cc.rectGetMinY(t), n = cc.rectGetMinX(t), r = cc.rectGetMaxX(t), c = cc.rectGetMaxY(t), o = cc._PointApplyAffineTransform(n, i, e), s = cc._PointApplyAffineTransform(r, i, e), a = cc._PointApplyAffineTransform(n, c, e), h = cc._PointApplyAffineTransform(r, c, e), u = Math.min(o.x, s.x, a.x, h.x), l = Math.max(o.x, s.x, a.x, h.x), _ = Math.min(o.y, s.y, a.y, h.y), d = Math.max(o.y, s.y, a.y, h.y);
    return cc.rect(u, _, l - u, d - _);
}, cc._RectApplyAffineTransformIn = function(t, e) {
    var i = cc.rectGetMinY(t), n = cc.rectGetMinX(t), r = cc.rectGetMaxX(t), c = cc.rectGetMaxY(t), o = cc._PointApplyAffineTransform(n, i, e), s = cc._PointApplyAffineTransform(r, i, e), a = cc._PointApplyAffineTransform(n, c, e), h = cc._PointApplyAffineTransform(r, c, e), u = Math.min(o.x, s.x, a.x, h.x), l = Math.max(o.x, s.x, a.x, h.x), _ = Math.min(o.y, s.y, a.y, h.y), d = Math.max(o.y, s.y, a.y, h.y);
    return t.x = u, t.y = _, t.width = l - u, t.height = d - _, t;
}, cc.AffineTransformTranslate = function(t, e, i) {
    return {
        a: t.a,
        b: t.b,
        c: t.c,
        d: t.d,
        tx: t.tx + t.a * e + t.c * i,
        ty: t.ty + t.b * e + t.d * i
    };
}, cc.AffineTransformScale = function(t, e, i) {
    return {
        a: t.a * e,
        b: t.b * e,
        c: t.c * i,
        d: t.d * i,
        tx: t.tx,
        ty: t.ty
    };
}, cc.AffineTransformRotate = function(t, e) {
    var i = Math.sin(e), n = Math.cos(e);
    return {
        a: t.a * n + t.c * i,
        b: t.b * n + t.d * i,
        c: t.c * n - t.a * i,
        d: t.d * n - t.b * i,
        tx: t.tx,
        ty: t.ty
    };
}, cc.AffineTransformConcat = function(t, e) {
    return {
        a: t.a * e.a + t.b * e.c,
        b: t.a * e.b + t.b * e.d,
        c: t.c * e.a + t.d * e.c,
        d: t.c * e.b + t.d * e.d,
        tx: t.tx * e.a + t.ty * e.c + e.tx,
        ty: t.tx * e.b + t.ty * e.d + e.ty
    };
}, cc.AffineTransformEqualToTransform = function(t, e) {
    return t.a === e.a && t.b === e.b && t.c === e.c && t.d === e.d && t.tx === e.tx && t.ty === e.ty;
}, cc.AffineTransformInvert = function(t) {
    var e = 1 / (t.a * t.d - t.b * t.c);
    return {
        a: e * t.d,
        b: -e * t.b,
        c: -e * t.c,
        d: e * t.a,
        tx: e * (t.c * t.ty - t.d * t.tx),
        ty: e * (t.b * t.tx - t.a * t.ty)
    };
}, cc.ComponentContainer = cc.Class.extend({
    _components: null,
    _owner: null,
    ctor: function(t) {
        this._components = null, this._owner = t;
    },
    getComponent: function(t) {
        return cc.Assert(null != t, "Argument must be non-nil"), t = t.trim(), this._components[t];
    },
    add: function(t) {
        cc.Assert(null != t, "Argument must be non-nil"), cc.Assert(null == t.getOwner(), "Component already added. It can't be added again"), 
        null == this._components && (this._components = {}, this._owner.scheduleUpdate());
        var e = this._components[t.getName()];
        return e ? (cc.Assert(null == e, "Component already added. It can't be added again"), 
        !1) : (t.setOwner(this._owner), this._components[t.getName()] = t, t.onEnter(), 
        !0);
    },
    remove: function(t) {
        if (cc.Assert(null != t, "Argument must be non-nil"), !this._components) return !1;
        var e = this._components;
        t = t.trim();
        var i = e[t];
        return i ? !1 : (i.onExit(), i.setOwner(null), delete e[t], !0);
    },
    removeAll: function() {
        if (this._components) {
            var t = this._components;
            for (var e in t) {
                var i = t[e];
                i.onExit(), i.setOwner(null), delete t[e];
            }
            this._owner.unscheduleUpdate(), this._components = null;
        }
    },
    _alloc: function() {
        this._components = {};
    },
    visit: function(t) {
        if (this._components) {
            var e = this._components;
            for (var i in e) e[i].update(t);
        }
    },
    isEmpty: function() {
        if (!this._components) return !0;
        for (var t in this._components) return !1;
        return !0;
    }
}), cc.kmMat4 = function() {
    this.mat = new Float32Array([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
}, cc.kmMat4Fill = function(t, e) {
    t.mat[0] = t.mat[1] = t.mat[2] = t.mat[3] = t.mat[4] = t.mat[5] = t.mat[6] = t.mat[7] = t.mat[8] = t.mat[9] = t.mat[10] = t.mat[11] = t.mat[12] = t.mat[13] = t.mat[14] = t.mat[15] = e;
}, cc.kmMat4Identity = function(t) {
    return t.mat[1] = t.mat[2] = t.mat[3] = t.mat[4] = t.mat[6] = t.mat[7] = t.mat[8] = t.mat[9] = t.mat[11] = t.mat[12] = t.mat[13] = t.mat[14] = 0, 
    t.mat[0] = t.mat[5] = t.mat[10] = t.mat[15] = 1, t;
}, cc.kmMat4._get = function(t, e, i) {
    return t.mat[e + 4 * i];
}, cc.kmMat4._set = function(t, e, i, n) {
    t.mat[e + 4 * i] = n;
}, cc.kmMat4._swap = function(t, e, i, n, r) {
    var c = cc.kmMat4._get(t, e, i);
    cc.kmMat4._set(t, e, i, cc.kmMat4._get(t, n, r)), cc.kmMat4._set(t, n, r, c);
}, cc.kmMat4._gaussj = function(t, e) {
    var i, n, r, c, o, s, a, h, u = 0, l = 0, _ = 4, d = 4, f = [ 0, 0, 0, 0 ], p = [ 0, 0, 0, 0 ], g = [ 0, 0, 0, 0 ];
    for (i = 0; _ > i; i++) {
        for (s = 0, n = 0; _ > n; n++) if (1 != g[n]) for (r = 0; _ > r; r++) 0 == g[r] && Math.abs(cc.kmMat4._get(t, n, r)) >= s && (s = Math.abs(cc.kmMat4._get(t, n, r)), 
        l = n, u = r);
        if (++g[u], l != u) {
            for (c = 0; _ > c; c++) cc.kmMat4._swap(t, l, c, u, c);
            for (c = 0; d > c; c++) cc.kmMat4._swap(e, l, c, u, c);
        }
        if (p[i] = l, f[i] = u, 0 == cc.kmMat4._get(t, u, u)) return cc.KM_FALSE;
        for (h = 1 / cc.kmMat4._get(t, u, u), cc.kmMat4._set(t, u, u, 1), c = 0; _ > c; c++) cc.kmMat4._set(t, u, c, cc.kmMat4._get(t, u, c) * h);
        for (c = 0; d > c; c++) cc.kmMat4._set(e, u, c, cc.kmMat4._get(e, u, c) * h);
        for (o = 0; _ > o; o++) if (o != u) {
            for (a = cc.kmMat4._get(t, o, u), cc.kmMat4._set(t, o, u, 0), c = 0; _ > c; c++) cc.kmMat4._set(t, o, c, cc.kmMat4._get(t, o, c) - cc.kmMat4._get(t, u, c) * a);
            for (c = 0; d > c; c++) cc.kmMat4._set(e, o, c, cc.kmMat4._get(t, o, c) - cc.kmMat4._get(e, u, c) * a);
        }
    }
    for (c = _ - 1; c >= 0; c--) if (p[c] != f[c]) for (r = 0; _ > r; r++) cc.kmMat4._swap(t, r, p[c], r, f[c]);
    return cc.KM_TRUE;
}, cc.kmMat4._identity = new Float32Array([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]), 
cc.kmMat4Inverse = function(t, e) {
    var i = new cc.kmMat4(), n = new cc.kmMat4();
    return cc.kmMat4Assign(i, e), cc.kmMat4Identity(n), cc.kmMat4._gaussj(i, n) == cc.KM_FALSE ? null : (cc.kmMat4Assign(t, i), 
    t);
}, cc.kmMat4IsIdentity = function(t) {
    for (var e = 0; 16 > e; e++) if (cc.kmMat4._identity[e] != t.mat[e]) return !1;
    return !0;
}, cc.kmMat4Transpose = function(t, e) {
    var i, n, r = t.mat, c = e.mat;
    for (n = 0; 4 > n; ++n) for (i = 0; 4 > i; ++i) r[4 * n + i] = c[4 * i + n];
    return t;
}, cc.kmMat4Multiply = function(t, e, i) {
    var n = t.mat, r = e.mat[0], c = e.mat[1], o = e.mat[2], s = e.mat[3], a = e.mat[4], h = e.mat[5], u = e.mat[6], l = e.mat[7], _ = e.mat[8], d = e.mat[9], f = e.mat[10], p = e.mat[11], g = e.mat[12], T = e.mat[13], m = e.mat[14], A = e.mat[15], E = i.mat[0], y = i.mat[1], v = i.mat[2], S = i.mat[3], x = i.mat[4], C = i.mat[5], R = i.mat[6], I = i.mat[7], b = i.mat[8], O = i.mat[9], D = i.mat[10], L = i.mat[11], w = i.mat[12], F = i.mat[13], P = i.mat[14], N = i.mat[15];
    return n[0] = E * r + y * a + v * _ + S * g, n[1] = E * c + y * h + v * d + S * T, 
    n[2] = E * o + y * u + v * f + S * m, n[3] = E * s + y * l + v * p + S * A, n[4] = x * r + C * a + R * _ + I * g, 
    n[5] = x * c + C * h + R * d + I * T, n[6] = x * o + C * u + R * f + I * m, n[7] = x * s + C * l + R * p + I * A, 
    n[8] = b * r + O * a + D * _ + L * g, n[9] = b * c + O * h + D * d + L * T, n[10] = b * o + O * u + D * f + L * m, 
    n[11] = b * s + O * l + D * p + L * A, n[12] = w * r + F * a + P * _ + N * g, n[13] = w * c + F * h + P * d + N * T, 
    n[14] = w * o + F * u + P * f + N * m, n[15] = w * s + F * l + P * p + N * A, t;
}, cc.getMat4MultiplyValue = function(t, e) {
    var i = t.mat, n = e.mat, r = new Float32Array(16);
    return r[0] = i[0] * n[0] + i[4] * n[1] + i[8] * n[2] + i[12] * n[3], r[1] = i[1] * n[0] + i[5] * n[1] + i[9] * n[2] + i[13] * n[3], 
    r[2] = i[2] * n[0] + i[6] * n[1] + i[10] * n[2] + i[14] * n[3], r[3] = i[3] * n[0] + i[7] * n[1] + i[11] * n[2] + i[15] * n[3], 
    r[4] = i[0] * n[4] + i[4] * n[5] + i[8] * n[6] + i[12] * n[7], r[5] = i[1] * n[4] + i[5] * n[5] + i[9] * n[6] + i[13] * n[7], 
    r[6] = i[2] * n[4] + i[6] * n[5] + i[10] * n[6] + i[14] * n[7], r[7] = i[3] * n[4] + i[7] * n[5] + i[11] * n[6] + i[15] * n[7], 
    r[8] = i[0] * n[8] + i[4] * n[9] + i[8] * n[10] + i[12] * n[11], r[9] = i[1] * n[8] + i[5] * n[9] + i[9] * n[10] + i[13] * n[11], 
    r[10] = i[2] * n[8] + i[6] * n[9] + i[10] * n[10] + i[14] * n[11], r[11] = i[3] * n[8] + i[7] * n[9] + i[11] * n[10] + i[15] * n[11], 
    r[12] = i[0] * n[12] + i[4] * n[13] + i[8] * n[14] + i[12] * n[15], r[13] = i[1] * n[12] + i[5] * n[13] + i[9] * n[14] + i[13] * n[15], 
    r[14] = i[2] * n[12] + i[6] * n[13] + i[10] * n[14] + i[14] * n[15], r[15] = i[3] * n[12] + i[7] * n[13] + i[11] * n[14] + i[15] * n[15], 
    r;
}, cc.getMat4MultiplyWithMat4 = function(t, e, i) {
    var n = t.mat, r = e.mat, c = i.mat;
    return c[0] = n[0] * r[0] + n[4] * r[1] + n[8] * r[2] + n[12] * r[3], c[1] = n[1] * r[0] + n[5] * r[1] + n[9] * r[2] + n[13] * r[3], 
    c[2] = n[2] * r[0] + n[6] * r[1] + n[10] * r[2] + n[14] * r[3], c[3] = n[3] * r[0] + n[7] * r[1] + n[11] * r[2] + n[15] * r[3], 
    c[4] = n[0] * r[4] + n[4] * r[5] + n[8] * r[6] + n[12] * r[7], c[5] = n[1] * r[4] + n[5] * r[5] + n[9] * r[6] + n[13] * r[7], 
    c[6] = n[2] * r[4] + n[6] * r[5] + n[10] * r[6] + n[14] * r[7], c[7] = n[3] * r[4] + n[7] * r[5] + n[11] * r[6] + n[15] * r[7], 
    c[8] = n[0] * r[8] + n[4] * r[9] + n[8] * r[10] + n[12] * r[11], c[9] = n[1] * r[8] + n[5] * r[9] + n[9] * r[10] + n[13] * r[11], 
    c[10] = n[2] * r[8] + n[6] * r[9] + n[10] * r[10] + n[14] * r[11], c[11] = n[3] * r[8] + n[7] * r[9] + n[11] * r[10] + n[15] * r[11], 
    c[12] = n[0] * r[12] + n[4] * r[13] + n[8] * r[14] + n[12] * r[15], c[13] = n[1] * r[12] + n[5] * r[13] + n[9] * r[14] + n[13] * r[15], 
    c[14] = n[2] * r[12] + n[6] * r[13] + n[10] * r[14] + n[14] * r[15], c[15] = n[3] * r[12] + n[7] * r[13] + n[11] * r[14] + n[15] * r[15], 
    i.mat;
}, cc.kmMat4Assign = function(t, e) {
    if (t != e) {
        var i = t.mat, n = e.mat;
        return i[0] = n[0], i[1] = n[1], i[2] = n[2], i[3] = n[3], i[4] = n[4], i[5] = n[5], 
        i[6] = n[6], i[7] = n[7], i[8] = n[8], i[9] = n[9], i[10] = n[10], i[11] = n[11], 
        i[12] = n[12], i[13] = n[13], i[14] = n[14], i[15] = n[15], t;
    }
}, cc.kmMat4AreEqual = function(t, e) {
    cc.Assert(t != e, "You are comparing the same thing!");
    for (var i = 0; 16 > i; i++) if (!(t.mat[i] + cc.kmEpsilon > e.mat[i] && t.mat[i] - cc.kmEpsilon < e.mat[i])) return !1;
    return !0;
}, cc.kmMat4RotationX = function(t, e) {
    return t.mat[0] = 1, t.mat[1] = 0, t.mat[2] = 0, t.mat[3] = 0, t.mat[4] = 0, t.mat[5] = Math.cos(e), 
    t.mat[6] = Math.sin(e), t.mat[7] = 0, t.mat[8] = 0, t.mat[9] = -Math.sin(e), t.mat[10] = Math.cos(e), 
    t.mat[11] = 0, t.mat[12] = 0, t.mat[13] = 0, t.mat[14] = 0, t.mat[15] = 1, t;
}, cc.kmMat4RotationY = function(t, e) {
    return t.mat[0] = Math.cos(e), t.mat[1] = 0, t.mat[2] = -Math.sin(e), t.mat[3] = 0, 
    t.mat[4] = 0, t.mat[5] = 1, t.mat[6] = 0, t.mat[7] = 0, t.mat[8] = Math.sin(e), 
    t.mat[9] = 0, t.mat[10] = Math.cos(e), t.mat[11] = 0, t.mat[12] = 0, t.mat[13] = 0, 
    t.mat[14] = 0, t.mat[15] = 1, t;
}, cc.kmMat4RotationZ = function(t, e) {
    return t.mat[0] = Math.cos(e), t.mat[1] = Math.sin(e), t.mat[2] = 0, t.mat[3] = 0, 
    t.mat[4] = -Math.sin(e), t.mat[5] = Math.cos(e), t.mat[6] = 0, t.mat[7] = 0, t.mat[8] = 0, 
    t.mat[9] = 0, t.mat[10] = 1, t.mat[11] = 0, t.mat[12] = 0, t.mat[13] = 0, t.mat[14] = 0, 
    t.mat[15] = 1, t;
}, cc.kmMat4RotationPitchYawRoll = function(t, e, i, n) {
    var r = Math.cos(e), c = Math.sin(e), o = Math.cos(i), s = Math.sin(i), a = Math.cos(n), h = Math.sin(n), u = c * s, l = r * s;
    return t.mat[0] = o * a, t.mat[4] = o * h, t.mat[8] = -s, t.mat[1] = u * a - r * h, 
    t.mat[5] = u * h + r * a, t.mat[9] = c * o, t.mat[2] = l * a + c * h, t.mat[6] = l * h - c * a, 
    t.mat[10] = r * o, t.mat[3] = t.mat[7] = t.mat[11] = 0, t.mat[15] = 1, t;
}, cc.kmMat4RotationQuaternion = function(t, e) {
    return t.mat[0] = 1 - 2 * (e.y * e.y + e.z * e.z), t.mat[1] = 2 * (e.x * e.y + e.z * e.w), 
    t.mat[2] = 2 * (e.x * e.z - e.y * e.w), t.mat[3] = 0, t.mat[4] = 2 * (e.x * e.y - e.z * e.w), 
    t.mat[5] = 1 - 2 * (e.x * e.x + e.z * e.z), t.mat[6] = 2 * (e.z * e.y + e.x * e.w), 
    t.mat[7] = 0, t.mat[8] = 2 * (e.x * e.z + e.y * e.w), t.mat[9] = 2 * (e.y * e.z - e.x * e.w), 
    t.mat[10] = 1 - 2 * (e.x * e.x + e.y * e.y), t.mat[11] = 0, t.mat[12] = 0, t.mat[13] = 0, 
    t.mat[14] = 0, t.mat[15] = 1, t;
}, cc.kmMat4RotationTranslation = function(t, e, i) {
    return t.mat[0] = e.mat[0], t.mat[1] = e.mat[1], t.mat[2] = e.mat[2], t.mat[3] = 0, 
    t.mat[4] = e.mat[3], t.mat[5] = e.mat[4], t.mat[6] = e.mat[5], t.mat[7] = 0, t.mat[8] = e.mat[6], 
    t.mat[9] = e.mat[7], t.mat[10] = e.mat[8], t.mat[11] = 0, t.mat[12] = i.x, t.mat[13] = i.y, 
    t.mat[14] = i.z, t.mat[15] = 1, t;
}, cc.kmMat4Scaling = function(t, e, i, n) {
    return t.mat[0] = e, t.mat[5] = i, t.mat[10] = n, t.mat[15] = 1, t.mat[1] = t.mat[2] = t.mat[3] = t.mat[4] = t.mat[6] = t.mat[7] = t.mat[8] = t.mat[9] = t.mat[11] = t.mat[12] = t.mat[13] = t.mat[14] = 0, 
    t;
}, cc.kmMat4Translation = function(t, e, i, n) {
    return t.mat[0] = t.mat[5] = t.mat[10] = t.mat[15] = 1, t.mat[1] = t.mat[2] = t.mat[3] = t.mat[4] = t.mat[6] = t.mat[7] = t.mat[8] = t.mat[9] = t.mat[11] = 0, 
    t.mat[12] = e, t.mat[13] = i, t.mat[14] = n, t;
}, cc.kmMat4GetUpVec3 = function(t, e) {
    return t.x = e.mat[4], t.y = e.mat[5], t.z = e.mat[6], cc.kmVec3Normalize(t, t), 
    t;
}, cc.kmMat4GetRightVec3 = function(t, e) {
    return t.x = e.mat[0], t.y = e.mat[1], t.z = e.mat[2], cc.kmVec3Normalize(t, t), 
    t;
}, cc.kmMat4GetForwardVec3 = function(t, e) {
    return t.x = e.mat[8], t.y = e.mat[9], t.z = e.mat[10], cc.kmVec3Normalize(t, t), 
    t;
}, cc.kmMat4PerspectiveProjection = function(t, e, i, n, r) {
    var c = cc.kmDegreesToRadians(e / 2), o = r - n, s = Math.sin(c);
    if (0 == o || 0 == s || 0 == i) return null;
    var a = Math.cos(c) / s;
    return cc.kmMat4Identity(t), t.mat[0] = a / i, t.mat[5] = a, t.mat[10] = -(r + n) / o, 
    t.mat[11] = -1, t.mat[14] = -2 * n * r / o, t.mat[15] = 0, t;
}, cc.kmMat4OrthographicProjection = function(t, e, i, n, r, c, o) {
    return cc.kmMat4Identity(t), t.mat[0] = 2 / (i - e), t.mat[5] = 2 / (r - n), t.mat[10] = -2 / (o - c), 
    t.mat[12] = -((i + e) / (i - e)), t.mat[13] = -((r + n) / (r - n)), t.mat[14] = -((o + c) / (o - c)), 
    t;
}, cc.kmMat4LookAt = function(t, e, i, n) {
    var r = new cc.kmVec3(), c = new cc.kmVec3(), o = new cc.kmVec3(), s = new cc.kmVec3(), a = new cc.kmMat4();
    return cc.kmVec3Subtract(r, i, e), cc.kmVec3Normalize(r, r), cc.kmVec3Assign(c, n), 
    cc.kmVec3Normalize(c, c), cc.kmVec3Cross(o, r, c), cc.kmVec3Normalize(o, o), cc.kmVec3Cross(s, o, r), 
    cc.kmVec3Normalize(o, o), cc.kmMat4Identity(t), t.mat[0] = o.x, t.mat[4] = o.y, 
    t.mat[8] = o.z, t.mat[1] = s.x, t.mat[5] = s.y, t.mat[9] = s.z, t.mat[2] = -r.x, 
    t.mat[6] = -r.y, t.mat[10] = -r.z, cc.kmMat4Translation(a, -e.x, -e.y, -e.z), cc.kmMat4Multiply(t, t, a), 
    t;
}, cc.kmMat4RotationAxisAngle = function(t, e, i) {
    var n = Math.cos(i), r = Math.sin(i), c = new cc.kmVec3();
    return cc.kmVec3Normalize(c, e), t.mat[0] = n + c.x * c.x * (1 - n), t.mat[1] = c.z * r + c.y * c.x * (1 - n), 
    t.mat[2] = -c.y * r + c.z * c.x * (1 - n), t.mat[3] = 0, t.mat[4] = -c.z * r + c.x * c.y * (1 - n), 
    t.mat[5] = n + c.y * c.y * (1 - n), t.mat[6] = c.x * r + c.z * c.y * (1 - n), t.mat[7] = 0, 
    t.mat[8] = c.y * r + c.x * c.z * (1 - n), t.mat[9] = -c.x * r + c.y * c.z * (1 - n), 
    t.mat[10] = n + c.z * c.z * (1 - n), t.mat[11] = 0, t.mat[12] = 0, t.mat[13] = 0, 
    t.mat[14] = 0, t.mat[15] = 1, t;
}, cc.kmMat4ExtractRotation = function(t, e) {
    return t.mat[0] = e.mat[0], t.mat[1] = e.mat[1], t.mat[2] = e.mat[2], t.mat[3] = e.mat[4], 
    t.mat[4] = e.mat[5], t.mat[5] = e.mat[6], t.mat[6] = e.mat[8], t.mat[7] = e.mat[9], 
    t.mat[8] = e.mat[10], t;
}, cc.kmMat4ExtractPlane = function(t, e, i) {
    switch (i) {
      case cc.KM_PLANE_RIGHT:
        t.a = e.mat[3] - e.mat[0], t.b = e.mat[7] - e.mat[4], t.c = e.mat[11] - e.mat[8], 
        t.d = e.mat[15] - e.mat[12];
        break;

      case cc.KM_PLANE_LEFT:
        t.a = e.mat[3] + e.mat[0], t.b = e.mat[7] + e.mat[4], t.c = e.mat[11] + e.mat[8], 
        t.d = e.mat[15] + e.mat[12];
        break;

      case cc.KM_PLANE_BOTTOM:
        t.a = e.mat[3] + e.mat[1], t.b = e.mat[7] + e.mat[5], t.c = e.mat[11] + e.mat[9], 
        t.d = e.mat[15] + e.mat[13];
        break;

      case cc.KM_PLANE_TOP:
        t.a = e.mat[3] - e.mat[1], t.b = e.mat[7] - e.mat[5], t.c = e.mat[11] - e.mat[9], 
        t.d = e.mat[15] - e.mat[13];
        break;

      case cc.KM_PLANE_FAR:
        t.a = e.mat[3] - e.mat[2], t.b = e.mat[7] - e.mat[6], t.c = e.mat[11] - e.mat[10], 
        t.d = e.mat[15] - e.mat[14];
        break;

      case cc.KM_PLANE_NEAR:
        t.a = e.mat[3] + e.mat[2], t.b = e.mat[7] + e.mat[6], t.c = e.mat[11] + e.mat[10], 
        t.d = e.mat[15] + e.mat[14];
        break;

      default:
        cc.Assert(0, "Invalid plane index");
    }
    var n = Math.sqrt(t.a * t.a + t.b * t.b + t.c * t.c);
    return t.a /= n, t.b /= n, t.c /= n, t.d /= n, t;
}, cc.kmMat4RotationToAxisAngle = function(t, e, i) {
    var n = new cc.kmQuaternion(), r = new cc.kmMat3();
    return cc.kmMat4ExtractRotation(r, i), cc.kmQuaternionRotationMatrix(n, r), cc.kmQuaternionToAxisAngle(n, t, e), 
    t;
}, cc.NODE_TAG_INVALID = -1, cc.NODE_ON_ENTER = null, cc.NODE_ON_EXIT = null, cc.s_globalOrderOfArrival = 1, 
cc.Node = cc.Class.extend({
    _zOrder: 0,
    _vertexZ: 0,
    _rotationX: 0,
    _rotationY: 0,
    _scaleX: 1,
    _scaleY: 1,
    _position: null,
    _skewX: 0,
    _skewY: 0,
    _children: null,
    _visible: !0,
    _anchorPoint: null,
    _anchorPointInPoints: null,
    _contentSize: null,
    _running: !1,
    _parent: null,
    _ignoreAnchorPointForPosition: !1,
    _tag: cc.NODE_TAG_INVALID,
    _userData: null,
    _userObject: null,
    _transformDirty: !0,
    _inverseDirty: !0,
    _cacheDirty: !0,
    _transformGLDirty: null,
    _transform: null,
    _inverse: null,
    _reorderChildDirty: !1,
    _shaderProgram: null,
    _orderOfArrival: 0,
    _actionManager: null,
    _scheduler: null,
    _initializedNode: !1,
    _additionalTransformDirty: !1,
    _additionalTransform: null,
    _componentContainer: null,
    _isTransitionFinished: !1,
    _rotationRadiansX: 0,
    _rotationRadiansY: 0,
    _initNode: function() {
        this._anchorPoint = cc.p(0, 0), this._anchorPointInPoints = cc.p(0, 0), this._contentSize = cc.size(0, 0), 
        this._position = cc.p(0, 0), this._children = [], this._transform = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            tx: 0,
            ty: 0
        };
        var t = cc.Director.getInstance();
        this._actionManager = t.getActionManager(), this._scheduler = t.getScheduler(), 
        this._initializedNode = !0, this._additionalTransform = cc.AffineTransformMakeIdentity(), 
        this._componentContainer = new cc.ComponentContainer(this);
    },
    init: function() {
        return this._initializedNode === !1 && this._initNode(), !0;
    },
    _arrayMakeObjectsPerformSelector: function(t, e) {
        if (t && 0 !== t.length) {
            var i, n, r = t.length, c = cc.Node.StateCallbackType;
            switch (e) {
              case c.onEnter:
                for (i = 0; r > i; i++) n = t[i], n && n.onEnter();
                break;

              case c.onExit:
                for (i = 0; r > i; i++) n = t[i], n && n.onExit();
                break;

              case c.onEnterTransitionDidFinish:
                for (i = 0; r > i; i++) n = t[i], n && n.onEnterTransitionDidFinish();
                break;

              case c.cleanup:
                for (i = 0; r > i; i++) n = t[i], n && n.cleanup();
                break;

              case c.updateTransform:
                for (i = 0; r > i; i++) n = t[i], n && n.updateTransform();
                break;

              case c.onExitTransitionDidStart:
                for (i = 0; r > i; i++) n = t[i], n && n.onExitTransitionDidStart();
                break;

              case c.sortAllChildren:
                for (i = 0; r > i; i++) n = t[i], n && n.sortAllChildren();
                break;

              default:
                throw "Unknown callback function";
            }
        }
    },
    setNodeDirty: null,
    _setNodeDirtyForCanvas: function() {
        this._setNodeDirtyForCache(), this._transformDirty === !1 && (this._transformDirty = this._inverseDirty = !0);
    },
    _setNodeDirtyForWebGL: function() {
        this._transformDirty === !1 && (this._transformDirty = this._inverseDirty = !0);
    },
    getSkewX: function() {
        return this._skewX;
    },
    setSkewX: function(t) {
        this._skewX = t, this.setNodeDirty();
    },
    getSkewY: function() {
        return this._skewY;
    },
    setSkewY: function(t) {
        this._skewY = t, this.setNodeDirty();
    },
    getZOrder: function() {
        return this._zOrder;
    },
    _setZOrder: function(t) {
        this._zOrder = t;
    },
    setZOrder: function(t) {
        this._setZOrder(t), this._parent && this._parent.reorderChild(this, t);
    },
    getVertexZ: function() {
        return this._vertexZ;
    },
    setVertexZ: function(t) {
        this._vertexZ = t;
    },
    getRotation: function() {
        return cc.Assert(this._rotationX == this._rotationY, "CCNode#rotation. RotationX != RotationY. Don't know which one to return"), 
        this._rotationX;
    },
    setRotation: function(t) {
        this._rotationX = this._rotationY = t, this._rotationRadiansX = .017453292519943295 * this._rotationX, 
        this._rotationRadiansY = .017453292519943295 * this._rotationY, this.setNodeDirty();
    },
    getRotationX: function() {
        return this._rotationX;
    },
    setRotationX: function(t) {
        this._rotationX = t, this._rotationRadiansX = .017453292519943295 * this._rotationX, 
        this.setNodeDirty();
    },
    getRotationY: function() {
        return this._rotationY;
    },
    setRotationY: function(t) {
        this._rotationY = t, this._rotationRadiansY = .017453292519943295 * this._rotationY, 
        this.setNodeDirty();
    },
    getScale: function() {
        return cc.Assert(this._scaleX == this._scaleY, "cc.Node#scale. ScaleX != ScaleY. Don't know which one to return"), 
        this._scaleX;
    },
    setScale: function(t, e) {
        this._scaleX = t, this._scaleY = e || 0 === e ? e : t, this.setNodeDirty();
    },
    getScaleX: function() {
        return this._scaleX;
    },
    setScaleX: function(t) {
        this._scaleX = t, this.setNodeDirty();
    },
    getScaleY: function() {
        return this._scaleY;
    },
    setScaleY: function(t) {
        this._scaleY = t, this.setNodeDirty();
    },
    setPosition: function(t, e) {
        var i = this._position;
        2 == arguments.length ? (i.x = t, i.y = e) : 1 == arguments.length && (i.x = t.x, 
        i.y = t.y), this.setNodeDirty();
    },
    getPosition: function() {
        return cc.p(this._position.x, this._position.y);
    },
    getPositionX: function() {
        return this._position.x;
    },
    setPositionX: function(t) {
        this._position.x = t, this.setNodeDirty();
    },
    getPositionY: function() {
        return this._position.y;
    },
    setPositionY: function(t) {
        this._position.y = t, this.setNodeDirty();
    },
    getChildrenCount: function() {
        return this._children.length;
    },
    getChildren: function() {
        return this._children;
    },
    isVisible: function() {
        return this._visible;
    },
    setVisible: function(t) {
        this._visible = t, this.setNodeDirty();
    },
    getAnchorPoint: function() {
        return cc.p(this._anchorPoint.x, this._anchorPoint.y);
    },
    setAnchorPoint: function(t) {
        var e = this._anchorPoint;
        if (!cc.pointEqualToPoint(t, e)) {
            e.x = t.x, e.y = t.y;
            var i = this._anchorPointInPoints, n = this._contentSize;
            i.x = n.width * t.x, i.y = n.height * t.y, this.setNodeDirty();
        }
    },
    getAnchorPointInPoints: function() {
        return cc.p(this._anchorPointInPoints.x, this._anchorPointInPoints.y);
    },
    getContentSize: function() {
        return cc.size(this._contentSize.width, this._contentSize.height);
    },
    setContentSize: function(t) {
        var e = this._contentSize;
        if (!cc.sizeEqualToSize(t, e)) {
            e.width = t.width, e.height = t.height;
            var i = this._anchorPointInPoints, n = this._anchorPoint;
            i.x = e.width * n.x, i.y = e.height * n.y, this.setNodeDirty();
        }
    },
    isRunning: function() {
        return this._running;
    },
    getParent: function() {
        return this._parent;
    },
    setParent: function(t) {
        this._parent = t;
    },
    isIgnoreAnchorPointForPosition: function() {
        return this._ignoreAnchorPointForPosition;
    },
    ignoreAnchorPointForPosition: function(t) {
        t != this._ignoreAnchorPointForPosition && (this._ignoreAnchorPointForPosition = t, 
        this.setNodeDirty());
    },
    getTag: function() {
        return this._tag;
    },
    setTag: function(t) {
        this._tag = t;
    },
    getUserData: function() {
        return this._userData;
    },
    setUserData: function(t) {
        this._userData = t;
    },
    getUserObject: function() {
        return this._userObject;
    },
    setUserObject: function(t) {
        this._userObject != t && (this._userObject = t);
    },
    getOrderOfArrival: function() {
        return this._orderOfArrival;
    },
    setOrderOfArrival: function(t) {
        this._orderOfArrival = t;
    },
    getActionManager: function() {
        return this._actionManager || (this._actionManager = cc.Director.getInstance().getActionManager()), 
        this._actionManager;
    },
    setActionManager: function(t) {
        this._actionManager != t && (this.stopAllActions(), this._actionManager = t);
    },
    getScheduler: function() {
        return this._scheduler || (this._scheduler = cc.Director.getInstance().getScheduler()), 
        this._scheduler;
    },
    setScheduler: function(t) {
        this._scheduler != t && (this.unscheduleAllCallbacks(), this._scheduler = t);
    },
    getBoundingBox: function() {
        var t = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
        return cc._RectApplyAffineTransformIn(t, this.nodeToParentTransform());
    },
    cleanup: function() {
        this.stopAllActions(), this.unscheduleAllCallbacks(), this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.cleanup);
    },
    description: function() {
        return "<cc.Node | Tag =" + this._tag + ">";
    },
    getChildByTag: function(t) {
        var e = this._children;
        if (null != e) for (var i = 0; i < e.length; i++) {
            var n = e[i];
            if (n && n._tag == t) return n;
        }
        return null;
    },
    addChild: function(t, e, i) {
        if (t === this) return console.warn("cc.Node.addChild: An Node can't be added as a child of itself."), 
        void 0;
        if (cc.Assert(null != t, "Argument must be non-nil"), null !== t._parent) return cc.Assert(null === t._parent, "child already added. It can't be added again"), 
        void 0;
        var n = null != e ? e : t._zOrder;
        t._tag = null != i ? i : t._tag, this._insertChild(t, n), t._parent = this, this._running && (t.onEnter(), 
        this._isTransitionFinished && t.onEnterTransitionDidFinish());
    },
    removeFromParent: function(t) {
        this._parent && (null == t && (t = !0), this._parent.removeChild(this, t));
    },
    removeFromParentAndCleanup: function(t) {
        cc.log("removeFromParentAndCleanup is deprecated. Use removeFromParent instead"), 
        this.removeFromParent(t);
    },
    removeChild: function(t, e) {
        0 !== this._children.length && (null == e && (e = !0), this._children.indexOf(t) > -1 && this._detachChild(t, e), 
        this.setNodeDirty());
    },
    removeChildByTag: function(t, e) {
        cc.Assert(t != cc.NODE_TAG_INVALID, "Invalid tag");
        var i = this.getChildByTag(t);
        null == i ? cc.log("cocos2d: removeChildByTag(tag = " + t + "): child not found!") : this.removeChild(i, e);
    },
    removeAllChildrenWithCleanup: function(t) {
        cc.log("removeAllChildrenWithCleanup is deprecated. Use removeAllChildren instead"), 
        this.removeAllChildren(t);
    },
    removeAllChildren: function(t) {
        var e = this._children;
        if (null != e) {
            null == t && (t = !0);
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n && (this._running && (n.onExitTransitionDidStart(), n.onExit()), t && n.cleanup(), 
                n.setParent(null));
            }
            this._children.length = 0;
        }
    },
    _detachChild: function(t, e) {
        this._running && (t.onExitTransitionDidStart(), t.onExit()), e && t.cleanup(), t.setParent(null), 
        cc.ArrayRemoveObject(this._children, t);
    },
    _insertChild: function(t, e) {
        this._reorderChildDirty = !0, this._children.push(t), t._setZOrder(e);
    },
    reorderChild: function(t, e) {
        cc.Assert(null != t, "Child must be non-nil"), this._reorderChildDirty = !0, t.setOrderOfArrival(cc.s_globalOrderOfArrival++), 
        t._setZOrder(e), this.setNodeDirty();
    },
    sortAllChildren: function() {
        if (this._reorderChildDirty) {
            var t, e, i, n = this._children, r = n.length;
            for (t = 0; r > t; t++) {
                var c = n[t];
                for (e = t - 1, i = n[e]; e >= 0 && (c._zOrder < i._zOrder || c._zOrder == i._zOrder && c._orderOfArrival < i._orderOfArrival); ) n[e + 1] = i, 
                e -= 1, i = n[e];
                n[e + 1] = c;
            }
            this._reorderChildDirty = !1;
        }
    },
    draw: function() {},
    transformAncestors: function() {
        null != this._parent && (this._parent.transformAncestors(), this._parent.transform());
    },
    onEnter: function() {
        this._isTransitionFinished = !1, this._running = !0, this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onEnter), 
        this.resumeSchedulerAndActions();
    },
    onEnterTransitionDidFinish: function() {
        this._isTransitionFinished = !0, this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onEnterTransitionDidFinish);
    },
    onExitTransitionDidStart: function() {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onExitTransitionDidStart);
    },
    onExit: function() {
        this._running = !1, this.pauseSchedulerAndActions(), this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onExit), 
        this._componentContainer.removeAll();
    },
    runAction: function(t) {
        return cc.Assert(null != t, "Argument must be non-nil"), this.getActionManager().addAction(t, this, !this._running), 
        t;
    },
    stopAllActions: function() {
        this.getActionManager().removeAllActionsFromTarget(this);
    },
    stopAction: function(t) {
        this.getActionManager().removeAction(t);
    },
    stopActionByTag: function(t) {
        cc.Assert(t != cc.ACTION_TAG_INVALID, "Invalid tag"), this.getActionManager().removeActionByTag(t, this);
    },
    getActionByTag: function(t) {
        return cc.Assert(t != cc.ACTION_TAG_INVALID, "Invalid tag"), this.getActionManager().getActionByTag(t, this);
    },
    numberOfRunningActions: function() {
        return this.getActionManager().numberOfRunningActionsInTarget(this);
    },
    scheduleUpdate: function() {
        this.scheduleUpdateWithPriority(0);
    },
    scheduleUpdateWithPriority: function(t) {
        this.getScheduler().scheduleUpdateForTarget(this, t, !this._running);
    },
    unscheduleUpdate: function() {
        this.getScheduler().unscheduleUpdateForTarget(this);
    },
    schedule: function(t, e, i, n) {
        e = e || 0, cc.Assert(t, "Argument must be non-nil"), cc.Assert(e >= 0, "Argument must be positive"), 
        i = null == i ? cc.REPEAT_FOREVER : i, n = n || 0, this.getScheduler().scheduleCallbackForTarget(this, t, e, i, n, !this._running);
    },
    scheduleOnce: function(t, e) {
        this.schedule(t, 0, 0, e);
    },
    unschedule: function(t) {
        t && this.getScheduler().unscheduleCallbackForTarget(this, t);
    },
    unscheduleAllCallbacks: function() {
        this.getScheduler().unscheduleAllCallbacksForTarget(this);
    },
    resumeSchedulerAndActions: function() {
        this.getScheduler().resumeTarget(this), this.getActionManager().resumeTarget(this);
    },
    pauseSchedulerAndActions: function() {
        this.getScheduler().pauseTarget(this), this.getActionManager().pauseTarget(this);
    },
    setAdditionalTransform: function(t) {
        this._additionalTransform = t, this._transformDirty = !0, this._additionalTransformDirty = !0;
    },
    parentToNodeTransform: function() {
        return this._inverseDirty && (this._inverse = cc.AffineTransformInvert(this.nodeToParentTransform()), 
        this._inverseDirty = !1), this._inverse;
    },
    nodeToWorldTransform: function() {
        for (var t = this.nodeToParentTransform(), e = this._parent; null != e; e = e.getParent()) t = cc.AffineTransformConcat(t, e.nodeToParentTransform());
        return t;
    },
    worldToNodeTransform: function() {
        return cc.AffineTransformInvert(this.nodeToWorldTransform());
    },
    convertToNodeSpace: function(t) {
        return cc.PointApplyAffineTransform(t, this.worldToNodeTransform());
    },
    convertToWorldSpace: function(t) {
        return cc.PointApplyAffineTransform(t, this.nodeToWorldTransform());
    },
    convertToNodeSpaceAR: function(t) {
        return cc.pSub(this.convertToNodeSpace(t), this._anchorPointInPoints);
    },
    convertToWorldSpaceAR: function(t) {
        var e = cc.pAdd(t, this._anchorPointInPoints);
        return this.convertToWorldSpace(e);
    },
    _convertToWindowSpace: function(t) {
        var e = this.convertToWorldSpace(t);
        return cc.Director.getInstance().convertToUI(e);
    },
    convertTouchToNodeSpace: function(t) {
        var e = t.getLocation();
        return this.convertToNodeSpace(e);
    },
    convertTouchToNodeSpaceAR: function(t) {
        var e = t.getLocation();
        return e = cc.Director.getInstance().convertToGL(e), this.convertToNodeSpaceAR(e);
    },
    update: function(t) {
        this._componentContainer && !this._componentContainer.isEmpty() && this._componentContainer.visit(t);
    },
    updateTransform: function() {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform);
    },
    retain: function() {},
    release: function() {},
    getComponent: function(t) {
        return this._componentContainer.getComponent(t);
    },
    addComponent: function(t) {
        this._componentContainer.add(t);
    },
    removeComponent: function(t) {
        return this._componentContainer.remove(t);
    },
    removeAllComponents: function() {
        this._componentContainer.removeAll();
    },
    _transform4x4: null,
    _stackMatrix: null,
    _glServerState: null,
    _camera: null,
    _grid: null,
    ctor: null,
    _ctorForCanvas: function() {
        this._initNode();
    },
    _ctorForWebGL: function() {
        this._initNode();
        var t = new cc.kmMat4();
        t.mat[2] = t.mat[3] = t.mat[6] = t.mat[7] = t.mat[8] = t.mat[9] = t.mat[11] = t.mat[14] = 0, 
        t.mat[10] = t.mat[15] = 1, this._transform4x4 = t, this._glServerState = 0, this._stackMatrix = new cc.kmMat4();
    },
    visit: null,
    _visitForCanvas: function(t) {
        if (this._visible) {
            var e, i, n = t || cc.renderContext, r = this._children;
            n.save(), this.transform(n);
            var c = r.length;
            if (c > 0) {
                for (this.sortAllChildren(), e = 0; c > e && (i = r[e], i._zOrder < 0); e++) i.visit(n);
                for (this.draw(n); c > e; e++) r[e].visit(n);
            } else this.draw(n);
            this._orderOfArrival = 0, n.restore();
        }
    },
    _visitForWebGL: function() {
        if (this._visible) {
            var t, e = cc.renderContext, i = cc.current_stack;
            i.stack.push(i.top), cc.kmMat4Assign(this._stackMatrix, i.top), i.top = this._stackMatrix;
            var n = this._grid;
            n && n._active && n.beforeDraw(), this.transform();
            var r = this._children;
            if (r && r.length > 0) {
                var c = r.length;
                for (this.sortAllChildren(), t = 0; c > t && (r[t] && r[t]._zOrder < 0); t++) r[t].visit();
                for (this.draw(e); c > t; t++) r[t] && r[t].visit();
            } else this.draw(e);
            this._orderOfArrival = 0, n && n._active && n.afterDraw(this), i.top = i.stack.pop();
        }
    },
    transform: null,
    _transformForCanvas: function(t) {
        var e = t || cc.renderContext, i = cc.EGLView.getInstance(), n = this.nodeToParentTransform();
        e.transform(n.a, n.c, n.b, n.d, n.tx * i.getScaleX(), -n.ty * i.getScaleY());
    },
    _transformForWebGL: function() {
        var t = this._transform4x4, e = cc.current_stack.top, i = this.nodeToParentTransform(), n = t.mat;
        if (n[0] = i.a, n[4] = i.c, n[12] = i.tx, n[1] = i.b, n[5] = i.d, n[13] = i.ty, 
        n[14] = this._vertexZ, cc.kmMat4Multiply(e, e, t), null != this._camera && (null == this._grid || !this._grid.isActive())) {
            var r = this._anchorPointInPoints.x, c = this._anchorPointInPoints.y, o = 0 !== r || 0 !== c;
            o ? (cc.kmGLTranslatef(cc.RENDER_IN_SUBPIXEL(r), cc.RENDER_IN_SUBPIXEL(c), 0), this._camera.locate(), 
            cc.kmGLTranslatef(cc.RENDER_IN_SUBPIXEL(-r), cc.RENDER_IN_SUBPIXEL(-c), 0)) : this._camera.locate();
        }
    },
    nodeToParentTransform: null,
    _nodeToParentTransformForCanvas: function() {
        if (this._transform || (this._transform = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            tx: 0,
            ty: 0
        }), this._transformDirty) {
            var t = this._transform;
            t.tx = this._position.x, t.ty = this._position.y;
            var e = 1, i = 0;
            this._rotationX && (e = Math.cos(this._rotationRadiansX), i = Math.sin(this._rotationRadiansX)), 
            t.a = t.d = e, t.b = -i, t.c = i;
            var n = this._scaleX, r = this._scaleY, c = this._anchorPointInPoints.x, o = this._anchorPointInPoints.y, s = 1e-6 > n && n > -1e-6 ? 1e-6 : n, a = 1e-6 > r && r > -1e-6 ? 1e-6 : r;
            if (this._skewX || this._skewY) {
                var h = Math.tan(-this._skewX * Math.PI / 180), u = Math.tan(-this._skewY * Math.PI / 180), l = o * h * s, _ = c * u * a;
                t.a = e + -i * u, t.b = e * h + -i, t.c = i + e * u, t.d = i * h + e, t.tx += e * l + -i * _, 
                t.ty += i * l + e * _;
            }
            (1 !== n || 1 !== r) && (t.a *= s, t.c *= s, t.b *= a, t.d *= a), t.tx += e * -c * s + -i * o * a, 
            t.ty -= i * -c * s + e * o * a, this._ignoreAnchorPointForPosition && (t.tx += c, 
            t.ty += o), this._additionalTransformDirty && (this._transform = cc.AffineTransformConcat(this._transform, this._additionalTransform), 
            this._additionalTransformDirty = !1), this._transformDirty = !1;
        }
        return this._transform;
    },
    _nodeToParentTransformForWebGL: function() {
        if (this._transformDirty) {
            var t = this._position.x, e = this._position.y, i = this._anchorPointInPoints.x, n = -i, r = this._anchorPointInPoints.y, c = -r, o = this._scaleX, s = this._scaleY;
            this._ignoreAnchorPointForPosition && (t += i, e += r);
            var a = 1, h = 0, u = 1, l = 0;
            (0 !== this._rotationX || 0 !== this._rotationY) && (a = Math.cos(-this._rotationRadiansX), 
            h = Math.sin(-this._rotationRadiansX), u = Math.cos(-this._rotationRadiansY), l = Math.sin(-this._rotationRadiansY));
            var _ = this._skewX || this._skewY;
            _ || 0 === i && 0 === r || (t += u * n * o + -h * c * s, e += l * n * o + a * c * s);
            var d = {
                a: u * o,
                b: l * o,
                c: -h * s,
                d: a * s,
                tx: t,
                ty: e
            };
            _ && (d = cc.AffineTransformConcat({
                a: 1,
                b: Math.tan(cc.DEGREES_TO_RADIANS(this._skewY)),
                c: Math.tan(cc.DEGREES_TO_RADIANS(this._skewX)),
                d: 1,
                tx: 0,
                ty: 0
            }, d), (0 !== i || 0 !== r) && (d = cc.AffineTransformTranslate(d, n, c))), this._additionalTransformDirty && (d = cc.AffineTransformConcat(d, this._additionalTransform), 
            this._additionalTransformDirty = !1), this._transform = d, this._transformDirty = !1;
        }
        return this._transform;
    },
    _setNodeDirtyForCache: function() {
        this._cacheDirty = !0, this._parent && this._parent._setNodeDirtyForCache();
    },
    getCamera: function() {
        return this._camera || (this._camera = new cc.Camera()), this._camera;
    },
    getGrid: function() {
        return this._grid;
    },
    setGrid: function(t) {
        this._grid = t;
    },
    getShaderProgram: function() {
        return this._shaderProgram;
    },
    setShaderProgram: function(t) {
        this._shaderProgram = t;
    },
    getGLServerState: function() {
        return this._glServerState;
    },
    setGLServerState: function(t) {
        this._glServerState = t;
    },
    getBoundingBoxToWorld: function() {
        var t = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
        if (t = cc.RectApplyAffineTransform(t, this.nodeToWorldTransform()), t = cc.rect(0 | t.x - 4, 0 | t.y - 4, 0 | t.width + 8, 0 | t.height + 8), 
        !this._children) return t;
        for (var e = this._children, i = 0; i < e.length; i++) {
            var n = e[i];
            if (n && n._visible) {
                var r = n.getBoundingBoxToWorld();
                r && (t = cc.rectUnion(t, r));
            }
        }
        return t;
    }
}), cc.Browser.supportWebGL ? (cc.Node.prototype.ctor = cc.Node.prototype._ctorForWebGL, 
cc.Node.prototype.setNodeDirty = cc.Node.prototype._setNodeDirtyForWebGL, cc.Node.prototype.visit = cc.Node.prototype._visitForWebGL, 
cc.Node.prototype.transform = cc.Node.prototype._transformForWebGL, cc.Node.prototype.nodeToParentTransform = cc.Node.prototype._nodeToParentTransformForWebGL) : (cc.Node.prototype.ctor = cc.Node.prototype._ctorForCanvas, 
cc.Node.prototype.setNodeDirty = cc.Node.prototype._setNodeDirtyForCanvas, cc.Node.prototype.visit = cc.Node.prototype._visitForCanvas, 
cc.Node.prototype.transform = cc.Node.prototype._transformForCanvas, cc.Node.prototype.nodeToParentTransform = cc.Node.prototype._nodeToParentTransformForCanvas), 
cc.Node.create = function() {
    return new cc.Node();
}, cc.Node.StateCallbackType = {
    onEnter: 1,
    onExit: 2,
    cleanup: 3,
    onEnterTransitionDidFinish: 4,
    updateTransform: 5,
    onExitTransitionDidStart: 6,
    sortAllChildren: 7
}, cc.NodeRGBA = cc.Node.extend({
    RGBAProtocol: !0,
    _displayedOpacity: 255,
    _realOpacity: 255,
    _displayedColor: null,
    _realColor: null,
    _cascadeColorEnabled: !1,
    _cascadeOpacityEnabled: !1,
    ctor: function() {
        cc.Node.prototype.ctor.call(this), this._displayedOpacity = 255, this._realOpacity = 255, 
        this._displayedColor = cc.WHITE, this._realColor = cc.WHITE, this._cascadeColorEnabled = !1, 
        this._cascadeOpacityEnabled = !1;
    },
    getOpacity: function() {
        return this._realOpacity;
    },
    getDisplayedOpacity: function() {
        return this._displayedOpacity;
    },
    setOpacity: function(t) {
        if (this._displayedOpacity = this._realOpacity = t, this._cascadeOpacityEnabled) {
            var e = 255, i = this._parent;
            i && i.RGBAProtocol && i.isCascadeOpacityEnabled() && (e = i.getDisplayedOpacity()), 
            this.updateDisplayedOpacity(e);
        }
    },
    updateDisplayedOpacity: function(t) {
        if (this._displayedOpacity = this._realOpacity * t / 255, this._cascadeOpacityEnabled) for (var e = this._children, i = 0; i < e.length; i++) {
            var n = e[i];
            n && n.RGBAProtocol && n.updateDisplayedOpacity(this._displayedOpacity);
        }
    },
    isCascadeOpacityEnabled: function() {
        return this._cascadeOpacityEnabled;
    },
    setCascadeOpacityEnabled: function(t) {
        this._cascadeOpacityEnabled = t;
    },
    getColor: function() {
        var t = this._realColor;
        return new cc.Color3B(t.r, t.g, t.b);
    },
    getDisplayedColor: function() {
        return this._displayedColor;
    },
    setColor: function(t) {
        var e = this._displayedColor, i = this._realColor;
        if (e.r = t.r, e.g = t.g, e.b = t.b, i.r = t.r, i.g = t.g, i.b = t.b, this._cascadeColorEnabled) {
            var n = cc.white(), r = this._parent;
            r && r.RGBAProtocol && r.isCascadeColorEnabled() && (n = r.getDisplayedColor()), 
            this.updateDisplayedColor(n);
        }
    },
    updateDisplayedColor: function(t) {
        var e = this._displayedColor, i = this._realColor;
        if (e.r = i.r * t.r / 255, e.g = i.g * t.g / 255, e.b = i.b * t.b / 255, this._cascadeColorEnabled) for (var n = this._children, r = 0; r < n.length; r++) {
            var c = n[r];
            c && c.RGBAProtocol && c.updateDisplayedColor(e);
        }
    },
    isCascadeColorEnabled: function() {
        return this._cascadeColorEnabled;
    },
    setCascadeColorEnabled: function(t) {
        this._cascadeColorEnabled = t;
    },
    setOpacityModifyRGB: function() {},
    isOpacityModifyRGB: function() {
        return !1;
    }
}), cc.SPRITE_INDEX_NOT_INITIALIZED = -1, cc.generateTextureCacheForColor = function(t) {
    function e() {
        var e = cc.generateTextureCacheForColor, n = t.width, r = t.height;
        i[0].width = n, i[0].height = r, i[1].width = n, i[1].height = r, i[2].width = n, 
        i[2].height = r, i[3].width = n, i[3].height = r, e.canvas.width = n, e.canvas.height = r;
        var c = e.canvas.getContext("2d");
        c.drawImage(t, 0, 0), e.tempCanvas.width = n, e.tempCanvas.height = r;
        for (var o = c.getImageData(0, 0, n, r).data, s = 0; 4 > s; s++) {
            var a = i[s].getContext("2d");
            a.getImageData(0, 0, n, r).data, e.tempCtx.drawImage(t, 0, 0);
            for (var h = e.tempCtx.getImageData(0, 0, n, r), u = h.data, l = 0; l < o.length; l += 4) u[l] = 0 === s ? o[l] : 0, 
            u[l + 1] = 1 === s ? o[l + 1] : 0, u[l + 2] = 2 === s ? o[l + 2] : 0, u[l + 3] = o[l + 3];
            a.putImageData(h, 0, 0);
        }
        t.onload = null;
    }
    if (t.hasOwnProperty("channelCache")) return t.channelCache;
    var i = [ document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas") ];
    try {
        e();
    } catch (n) {
        t.onload = e;
    }
    return t.channelCache = i, i;
}, cc.generateTextureCacheForColor.canvas = document.createElement("canvas"), cc.generateTextureCacheForColor.tempCanvas = document.createElement("canvas"), 
cc.generateTextureCacheForColor.tempCtx = cc.generateTextureCacheForColor.tempCanvas.getContext("2d"), 
cc.generateTintImage2 = function(t, e, i) {
    i || (i = cc.rect(0, 0, t.width, t.height), i = cc.RECT_PIXELS_TO_POINTS(i));
    var n;
    n = e instanceof cc.Color4F ? cc.c4b(255 * e.r, 255 * e.g, 255 * e.b, 255 * e.a) : cc.c4b(e.r, e.g, e.b, 50);
    var r = document.createElement("canvas"), c = r.getContext("2d");
    return r.width != i.width && (r.width = i.width), r.height != i.height && (r.height = i.height), 
    c.save(), c.drawImage(t, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height), 
    c.globalCompositeOperation = "source-in", c.globalAlpha = n.a / 255, c.fillStyle = "rgb(" + n.r + "," + n.g + "," + n.b + ")", 
    c.fillRect(0, 0, i.width, i.height), c.restore(), r;
}, cc.generateTintImage = function(t, e, i, n, r) {
    n || (n = cc.rect(0, 0, t.width, t.height));
    var c;
    c = null == i.a ? cc.c4f(i.r / 255, i.g / 255, i.b / 255, 1) : i;
    var o, s = Math.min(n.width, e[0].width), a = Math.min(n.height, e[0].height), h = r;
    h ? (o = h.getContext("2d"), o.clearRect(0, 0, s, a)) : (h = document.createElement("canvas"), 
    h.width = s, h.height = a, o = h.getContext("2d")), o.save(), o.globalCompositeOperation = "lighter";
    var u = o.globalAlpha;
    return c.r > 0 && (o.globalAlpha = c.r * u, o.drawImage(e[0], n.x, n.y, s, a, 0, 0, s, a)), 
    c.g > 0 && (o.globalAlpha = c.g * u, o.drawImage(e[1], n.x, n.y, s, a, 0, 0, s, a)), 
    c.b > 0 && (o.globalAlpha = c.b * u, o.drawImage(e[2], n.x, n.y, s, a, 0, 0, s, a)), 
    0 === c.r && 0 === c.g && 0 === c.b && (o.globalAlpha = u, o.drawImage(e[3], n.x, n.y, s, a, 0, 0, s, a)), 
    o.restore(), h;
}, cc.cutRotateImageToCanvas = function(t, e) {
    if (!t) return null;
    if (!e) return t;
    var i = document.createElement("canvas");
    i.width = e.width, i.height = e.height;
    var n = i.getContext("2d");
    return n.translate(i.width / 2, i.height / 2), n.rotate(-1.5707963267948966), n.drawImage(t, e.x, e.y, e.height, e.width, -e.height / 2, -e.width / 2, e.height, e.width), 
    i;
}, cc.TransformValues = function(t, e, i, n, r, c) {
    this.pos = t, this.scale = e, this.rotation = i, this.skew = n, this.ap = r, this.visible = c;
}, cc.RENDER_IN_SUBPIXEL = function(t) {
    return 0 | t;
}, cc.SPRITEBATCHNODE_RENDER_SUBPIXEL && (cc.RENDER_IN_SUBPIXEL = function(t) {
    return t;
}), cc.Sprite = cc.NodeRGBA.extend({
    RGBAProtocol: !0,
    _textureAtlas: null,
    _atlasIndex: 0,
    _batchNode: null,
    _dirty: !1,
    _recursiveDirty: null,
    _hasChildren: null,
    _shouldBeHidden: !1,
    _transformToBatch: null,
    _blendFunc: null,
    _texture: null,
    _rect: null,
    _rectRotated: !1,
    _offsetPosition: null,
    _unflippedOffsetPositionFromCenter: null,
    _opacityModifyRGB: !1,
    _flippedX: !1,
    _flippedY: !1,
    _textureLoaded: !1,
    _loadedEventListeners: null,
    _newTextureWhenChangeColor: null,
    textureLoaded: function() {
        return this._textureLoaded;
    },
    addLoadedEventListener: function(t, e) {
        this._loadedEventListeners.push({
            eventCallback: t,
            eventTarget: e
        });
    },
    _callLoadedEventCallbacks: function() {
        for (var t = this._loadedEventListeners, e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            n.eventCallback.call(n.eventTarget, this);
        }
        t.length = 0;
    },
    isDirty: function() {
        return this._dirty;
    },
    setDirty: function(t) {
        this._dirty = t;
    },
    isTextureRectRotated: function() {
        return this._rectRotated;
    },
    getAtlasIndex: function() {
        return this._atlasIndex;
    },
    setAtlasIndex: function(t) {
        this._atlasIndex = t;
    },
    getTextureRect: function() {
        return cc.rect(this._rect.x, this._rect.y, this._rect.width, this._rect.height);
    },
    getTextureAtlas: function() {
        return this._textureAtlas;
    },
    setTextureAtlas: function(t) {
        this._textureAtlas = t;
    },
    getSpriteBatchNode: function() {
        return this._batchNode;
    },
    setSpriteBatchNode: function(t) {
        this._batchNode = t;
    },
    getOffsetPosition: function() {
        return cc.p(this._offsetPosition.x, this._offsetPosition.y);
    },
    getBlendFunc: function() {
        return this._blendFunc;
    },
    initWithSpriteFrame: function(t) {
        cc.Assert(null != t, ""), t.textureLoaded() || (this._textureLoaded = !1, t.addLoadedEventListener(this._spriteFrameLoadedCallback, this));
        var e = this.initWithTexture(t.getTexture(), t.getRect());
        return this.setDisplayFrame(t), e;
    },
    _spriteFrameLoadedCallback: null,
    _spriteFrameLoadedCallbackForWebGL: function(t) {
        this.setNodeDirty(), this.setTextureRect(t.getRect(), t.isRotated(), t.getOriginalSize()), 
        this._callLoadedEventCallbacks();
    },
    _spriteFrameLoadedCallbackForCanvas: function(t) {
        this.setNodeDirty(), this.setTextureRect(t.getRect(), t.isRotated(), t.getOriginalSize());
        var e = this.getColor();
        (255 !== e.r || 255 !== e.g || 255 !== e.b) && this._changeTextureColor(), this._callLoadedEventCallbacks();
    },
    initWithSpriteFrameName: function(t) {
        cc.Assert(null != t, "");
        var e = cc.SpriteFrameCache.getInstance().getSpriteFrame(t);
        return this.initWithSpriteFrame(e);
    },
    useBatchNode: function(t) {
        this._textureAtlas = t.getTextureAtlas(), this._batchNode = t;
    },
    setVertexRect: function(t) {
        this._rect.x = t.x, this._rect.y = t.y, this._rect.width = t.width, this._rect.height = t.height;
    },
    sortAllChildren: function() {
        if (this._reorderChildDirty) {
            for (var t, e, i, n = this._children, r = 1; r < n.length; r++) {
                for (e = n[r], t = r - 1, i = n[t]; t >= 0 && (e._zOrder < i._zOrder || e._zOrder == i._zOrder && e._orderOfArrival < i._orderOfArrival); ) n[t + 1] = i, 
                t -= 1, i = n[t];
                n[t + 1] = e;
            }
            this._batchNode && this._arrayMakeObjectsPerformSelector(n, cc.Node.StateCallbackType.sortAllChildren), 
            this._reorderChildDirty = !1;
        }
    },
    reorderChild: function(t, e) {
        cc.Assert(null != t, "child is null"), cc.Assert(this._children.indexOf(t) > -1, "this child is not in children list"), 
        e !== t.getZOrder() && (this._batchNode && !this._reorderChildDirty && (this._setReorderChildDirtyRecursively(), 
        this._batchNode.reorderBatch(!0)), cc.Node.prototype.reorderChild.call(this, t, e));
    },
    removeChild: function(t, e) {
        this._batchNode && this._batchNode.removeSpriteFromAtlas(t), cc.Node.prototype.removeChild.call(this, t, e);
    },
    removeAllChildren: function(t) {
        var e = this._children, i = this._batchNode;
        if (i && null != e) for (var n = 0, r = e.length; r > n; n++) i.removeSpriteFromAtlas(e[n]);
        cc.Node.prototype.removeAllChildren.call(this, t), this._hasChildren = !1;
    },
    setDirtyRecursively: function(t) {
        this._recursiveDirty = t, this.setDirty(t);
        var e = this._children;
        if (null != e) for (var i = 0; i < e.length; i++) e[i] instanceof cc.Sprite && e[i].setDirtyRecursively(!0);
    },
    SET_DIRTY_RECURSIVELY: function() {
        this._batchNode && !this._recursiveDirty && (this._recursiveDirty = !0, this._dirty = !0, 
        this._hasChildren && this.setDirtyRecursively(!0));
    },
    setPosition: function(t) {
        arguments.length >= 2 ? cc.Node.prototype.setPosition.call(this, t, arguments[1]) : cc.Node.prototype.setPosition.call(this, t), 
        this.SET_DIRTY_RECURSIVELY();
    },
    setRotation: function(t) {
        cc.Node.prototype.setRotation.call(this, t), this.SET_DIRTY_RECURSIVELY();
    },
    setRotationX: function(t) {
        cc.Node.prototype.setRotationX.call(this, t), this.SET_DIRTY_RECURSIVELY();
    },
    setRotationY: function(t) {
        cc.Node.prototype.setRotationY.call(this, t), this.SET_DIRTY_RECURSIVELY();
    },
    setSkewX: function(t) {
        cc.Node.prototype.setSkewX.call(this, t), this.SET_DIRTY_RECURSIVELY();
    },
    setSkewY: function(t) {
        cc.Node.prototype.setSkewY.call(this, t), this.SET_DIRTY_RECURSIVELY();
    },
    setScaleX: function(t) {
        cc.Node.prototype.setScaleX.call(this, t), this.SET_DIRTY_RECURSIVELY();
    },
    setScaleY: function(t) {
        cc.Node.prototype.setScaleY.call(this, t), this.SET_DIRTY_RECURSIVELY();
    },
    setScale: function(t, e) {
        cc.Node.prototype.setScale.call(this, t, e), this.SET_DIRTY_RECURSIVELY();
    },
    setVertexZ: function(t) {
        cc.Node.prototype.setVertexZ.call(this, t), this.SET_DIRTY_RECURSIVELY();
    },
    setAnchorPoint: function(t) {
        cc.Node.prototype.setAnchorPoint.call(this, t), this.SET_DIRTY_RECURSIVELY();
    },
    setVisible: function(t) {
        cc.Node.prototype.setVisible.call(this, t), this.SET_DIRTY_RECURSIVELY();
    },
    ignoreAnchorPointForPosition: function(t) {
        cc.Assert(!this._batchNode, "ignoreAnchorPointForPosition is invalid in cc.Sprite"), 
        cc.Node.prototype.ignoreAnchorPointForPosition.call(this, t);
    },
    setFlippedX: function(t) {
        this._flippedX != t && (this._flippedX = t, this.setTextureRect(this._rect, this._rectRotated, this._contentSize), 
        this.setNodeDirty());
    },
    setFlippedY: function(t) {
        this._flippedY != t && (this._flippedY = t, this.setTextureRect(this._rect, this._rectRotated, this._contentSize), 
        this.setNodeDirty());
    },
    isFlippedX: function() {
        return this._flippedX;
    },
    isFlippedY: function() {
        return this._flippedY;
    },
    setOpacityModifyRGB: null,
    _setOpacityModifyRGBForWebGL: function(t) {
        this._opacityModifyRGB !== t && (this._opacityModifyRGB = t, this.updateColor());
    },
    _setOpacityModifyRGBForCanvas: function(t) {
        this._opacityModifyRGB !== t && (this._opacityModifyRGB = t, this.setNodeDirty());
    },
    isOpacityModifyRGB: function() {
        return this._opacityModifyRGB;
    },
    updateDisplayedOpacity: null,
    _updateDisplayedOpacityForWebGL: function(t) {
        cc.NodeRGBA.prototype.updateDisplayedOpacity.call(this, t), this.updateColor();
    },
    _updateDisplayedOpacityForCanvas: function(t) {
        cc.NodeRGBA.prototype.updateDisplayedOpacity.call(this, t), this._changeTextureColor(), 
        this.setNodeDirty();
    },
    setDisplayFrameWithAnimationName: function(t, e) {
        cc.Assert(t, "cc.Sprite#setDisplayFrameWithAnimationName. animationName must not be null");
        var i = cc.AnimationCache.getInstance().getAnimation(t);
        cc.Assert(i, "cc.Sprite#setDisplayFrameWithAnimationName: Frame not found");
        var n = i.getFrames()[e];
        cc.Assert(n, "cc.Sprite#setDisplayFrame. Invalid frame"), this.setDisplayFrame(n.getSpriteFrame());
    },
    getBatchNode: function() {
        return this._batchNode;
    },
    _setReorderChildDirtyRecursively: function() {
        if (!this._reorderChildDirty) {
            this._reorderChildDirty = !0;
            for (var t = this._parent; t && t != this._batchNode; ) t._setReorderChildDirtyRecursively(), 
            t = t.getParent();
        }
    },
    getTexture: function() {
        return this._texture;
    },
    _quad: null,
    _quadWebBuffer: null,
    _quadDirty: !1,
    _colorized: !1,
    _isLighterMode: !1,
    _originalTexture: null,
    _textureRect_Canvas: null,
    _drawSize_Canvas: null,
    ctor: null,
    _ctorForWebGL: function(t) {
        if (cc.NodeRGBA.prototype.ctor.call(this), this._shouldBeHidden = !1, this._offsetPosition = cc.p(0, 0), 
        this._unflippedOffsetPositionFromCenter = cc.p(0, 0), this._blendFunc = {
            src: cc.BLEND_SRC,
            dst: cc.BLEND_DST
        }, this._rect = cc.rect(0, 0, 0, 0), this._quad = new cc.V3F_C4B_T2F_Quad(), this._quadWebBuffer = cc.renderContext.createBuffer(), 
        this._quadDirty = !0, this._textureLoaded = !0, this._loadedEventListeners = [], 
        t) if ("string" == typeof t) {
            var e = cc.SpriteFrameCache.getInstance().getSpriteFrame(t);
            this.initWithSpriteFrame(e);
        } else if ("object" == typeof t) if (t instanceof cc.SpriteFrame) this.initWithSpriteFrame(t); else if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) {
            var i = new cc.Texture2D();
            i.initWithElement(t), i.handleLoadedTexture(), this.initWithTexture(i);
        } else t instanceof cc.Texture2D && this.initWithTexture(t);
    },
    _ctorForCanvas: function(t) {
        if (cc.NodeRGBA.prototype.ctor.call(this), this._shouldBeHidden = !1, this._offsetPosition = cc.p(0, 0), 
        this._unflippedOffsetPositionFromCenter = cc.p(0, 0), this._blendFunc = {
            src: cc.BLEND_SRC,
            dst: cc.BLEND_DST
        }, this._rect = cc.rect(0, 0, 0, 0), this._newTextureWhenChangeColor = !1, this._textureLoaded = !0, 
        this._loadedEventListeners = [], this._textureRect_Canvas = cc.rect(0, 0, 0, 0), 
        this._drawSize_Canvas = cc.size(0, 0), t) if ("string" == typeof t) {
            var e = cc.SpriteFrameCache.getInstance().getSpriteFrame(t);
            this.initWithSpriteFrame(e);
        } else if ("object" == typeof t) if (t instanceof cc.SpriteFrame) this.initWithSpriteFrame(t); else if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) {
            var i = new cc.Texture2D();
            i.initWithElement(t), i.handleLoadedTexture(), this.initWithTexture(i);
        } else t instanceof cc.Texture2D && this.initWithTexture(t);
    },
    getQuad: function() {
        return this._quad;
    },
    setBlendFunc: null,
    _setBlendFuncForWebGL: function(t, e) {
        this._blendFunc = 1 == arguments.length ? t : {
            src: t,
            dst: e
        };
    },
    _setBlendFuncForCanvas: function(t, e) {
        this._blendFunc = 1 == arguments.length ? t : {
            src: t,
            dst: e
        }, this._isLighterMode = this._blendFunc && (this._blendFunc.src == gl.SRC_ALPHA && this._blendFunc.dst == gl.ONE || this._blendFunc.src == gl.ONE && this._blendFunc.dst == gl.ONE);
    },
    init: null,
    _initForWebGL: function() {
        if (arguments.length > 0) return this.initWithFile(arguments[0], arguments[1]);
        cc.NodeRGBA.prototype.init.call(this), this._dirty = this._recursiveDirty = !1, 
        this._opacityModifyRGB = !0, this._blendFunc.src = cc.BLEND_SRC, this._blendFunc.dst = cc.BLEND_DST, 
        this.setTexture(null), this._textureLoaded = !0, this._flippedX = this._flippedY = !1, 
        this.setAnchorPoint(cc.p(.5, .5)), this._offsetPosition = cc.PointZero(), this._hasChildren = !1;
        var t = {
            r: 255,
            g: 255,
            b: 255,
            a: 255
        };
        return this._quad.bl.colors = t, this._quad.br.colors = t, this._quad.tl.colors = t, 
        this._quad.tr.colors = t, this._quadDirty = !0, this.setTextureRect(cc.RectZero(), !1, cc.SizeZero()), 
        !0;
    },
    _initForCanvas: function() {
        return arguments.length > 0 ? this.initWithFile(arguments[0], arguments[1]) : (cc.NodeRGBA.prototype.init.call(this), 
        this._dirty = this._recursiveDirty = !1, this._opacityModifyRGB = !0, this._blendFunc.src = cc.BLEND_SRC, 
        this._blendFunc.dst = cc.BLEND_DST, this.setTexture(null), this._textureLoaded = !0, 
        this._flippedX = this._flippedY = !1, this.setAnchorPoint(cc.p(.5, .5)), this._offsetPosition = cc.PointZero(), 
        this._hasChildren = !1, this.setTextureRect(cc.RectZero(), !1, cc.SizeZero()), !0);
    },
    initWithFile: function(t, e) {
        cc.Assert(null != t, "Sprite#initWithFile():Invalid filename for sprite");
        var i = cc.TextureCache.getInstance().textureForKey(t);
        if (i) {
            if (!e) {
                var n = i.getContentSize();
                e = cc.rect(0, 0, n.width, n.height);
            }
            return this.initWithTexture(i, e);
        }
        return i = cc.TextureCache.getInstance().addImage(t), this.initWithTexture(i, e);
    },
    initWithTexture: null,
    _initWithTextureForWebGL: function(t, e, i) {
        var n = arguments.length;
        if (0 == n) throw "Sprite.initWithTexture(): Argument must be non-nil ";
        if (i = i || !1, !cc.NodeRGBA.prototype.init.call(this)) return !1;
        this._batchNode = null, this._recursiveDirty = !1, this._dirty = !1, this._opacityModifyRGB = !0, 
        this._blendFunc.src = cc.BLEND_SRC, this._blendFunc.dst = cc.BLEND_DST, this._flippedX = this._flippedY = !1, 
        this.setAnchorPoint(cc.p(.5, .5)), this._offsetPosition = cc.p(0, 0), this._hasChildren = !1;
        var r = new cc.Color4B(255, 255, 255, 255), c = this._quad;
        c.bl.colors = r, c.br.colors = r, c.tl.colors = r, c.tr.colors = r;
        var o = t.isLoaded();
        if (this._textureLoaded = o, !o) {
            if (this._rectRotated = i || !1, e) {
                var s = this._rect;
                s.x = e.x, s.y = e.y, s.width = e.width, s.height = e.height;
            }
            return t.addLoadedEventListener(this._textureLoadedCallback, this), !0;
        }
        return e || (e = cc.rect(0, 0, 0, 0), e.size = t.getContentSize()), this.setTexture(t), 
        this.setTextureRect(e, i, e.size), this.setBatchNode(null), this._quadDirty = !0, 
        !0;
    },
    _initWithTextureForCanvas: function(t, e, i) {
        var n = arguments.length;
        if (0 == n) throw "Sprite.initWithTexture(): Argument must be non-nil ";
        if (i = i || !1, !cc.NodeRGBA.prototype.init.call(this)) return !1;
        this._batchNode = null, this._recursiveDirty = !1, this._dirty = !1, this._opacityModifyRGB = !0, 
        this._blendFunc.src = cc.BLEND_SRC, this._blendFunc.dst = cc.BLEND_DST, this._flippedX = this._flippedY = !1, 
        this.setAnchorPoint(cc.p(.5, .5)), this._offsetPosition = cc.p(0, 0), this._hasChildren = !1;
        var r = t.isLoaded();
        return this._textureLoaded = r, r ? (e || (e = cc.rect(0, 0, 0, 0), e.size = t.getContentSize()), 
        this._originalTexture = t, this.setTexture(t), this.setTextureRect(e, i, e.size), 
        this.setBatchNode(null), !0) : (this._rectRotated = i || !1, e && (this._rect.x = e.x, 
        this._rect.y = e.y, this._rect.width = e.width, this._rect.height = e.height), t.addLoadedEventListener(this._textureLoadedCallback, this), 
        !0);
    },
    _textureLoadedCallback: null,
    _textureLoadedCallbackForWebGL: function(t) {
        this._textureLoaded = !0;
        var e = this._rect;
        e ? cc._rectEqualToZero(e) && (e.size = t.getContentSize()) : (e = cc.rect(0, 0, 0, 0), 
        e.size = t.getContentSize()), this.setTexture(t), this.setTextureRect(e, this._rectRotated, e.size), 
        this.setBatchNode(null), this._quadDirty = !0, this._callLoadedEventCallbacks();
    },
    _textureLoadedCallbackForCanvas: function(t) {
        this._textureLoaded = !0;
        var e = this._rect;
        e ? cc._rectEqualToZero(e) && (e.size = t.getContentSize()) : (e = cc.rect(0, 0, 0, 0), 
        e.size = t.getContentSize()), this._originalTexture = t, this.setTexture(t), this.setTextureRect(e, this._rectRotated, e.size), 
        this.setBatchNode(null), this._callLoadedEventCallbacks();
    },
    setTextureRect: null,
    _setTextureRectForWebGL: function(t, e, i) {
        this._rectRotated = e || !1, i = i || t.size, this.setContentSize(i), this.setVertexRect(t), 
        this._setTextureCoords(t);
        var n = this._unflippedOffsetPositionFromCenter;
        this._flippedX && (n.x = -n.x), this._flippedY && (n.y = -n.y);
        var r = this._rect;
        if (this._offsetPosition.x = n.x + (this._contentSize.width - r.width) / 2, this._offsetPosition.y = n.y + (this._contentSize.height - r.height) / 2, 
        this._batchNode) this._dirty = !0; else {
            var c = 0 + this._offsetPosition.x, o = 0 + this._offsetPosition.y, s = c + r.width, a = o + r.height, h = this._quad;
            h.bl.vertices = {
                x: c,
                y: o,
                z: 0
            }, h.br.vertices = {
                x: s,
                y: o,
                z: 0
            }, h.tl.vertices = {
                x: c,
                y: a,
                z: 0
            }, h.tr.vertices = {
                x: s,
                y: a,
                z: 0
            }, this._quadDirty = !0;
        }
    },
    _setTextureRectForCanvas: function(t, e, i) {
        this._rectRotated = e || !1, i = i || t.size, this.setContentSize(i), this.setVertexRect(t);
        var n = this._textureRect_Canvas, r = cc.CONTENT_SCALE_FACTOR();
        n.x = 0 | t.x * r, n.y = 0 | t.y * r, n.width = 0 | t.width * r, n.height = 0 | t.height * r;
        var c = this._unflippedOffsetPositionFromCenter;
        this._flippedX && (c.x = -c.x), this._flippedY && (c.y = -c.y), this._offsetPosition.x = c.x + (this._contentSize.width - this._rect.width) / 2, 
        this._offsetPosition.y = c.y + (this._contentSize.height - this._rect.height) / 2, 
        this._batchNode && (this._dirty = !0);
    },
    updateTransform: null,
    _updateTransformForWebGL: function() {
        if (this.isDirty()) {
            var t = this._quad, e = this._parent;
            if (!this._visible || e && e != this._batchNode && e._shouldBeHidden) t.br.vertices = {
                x: 0,
                y: 0,
                z: 0
            }, t.tl.vertices = {
                x: 0,
                y: 0,
                z: 0
            }, t.tr.vertices = {
                x: 0,
                y: 0,
                z: 0
            }, t.bl.vertices = {
                x: 0,
                y: 0,
                z: 0
            }, this._shouldBeHidden = !0; else {
                this._shouldBeHidden = !1, this._transformToBatch = e && e != this._batchNode ? cc.AffineTransformConcat(this.nodeToParentTransform(), e._transformToBatch) : this.nodeToParentTransform();
                var i = this._transformToBatch, n = this._rect.size, r = this._offsetPosition.x, c = this._offsetPosition.y, o = r + n.width, s = c + n.height, a = i.tx, h = i.ty, u = i.a, l = i.b, _ = i.d, d = -i.c, f = r * u - c * d + a, p = r * l + c * _ + h, g = o * u - c * d + a, T = o * l + c * _ + h, m = o * u - s * d + a, A = o * l + s * _ + h, E = r * u - s * d + a, y = r * l + s * _ + h, v = this._vertexZ;
                t.bl.vertices = {
                    x: cc.RENDER_IN_SUBPIXEL(f),
                    y: cc.RENDER_IN_SUBPIXEL(p),
                    z: v
                }, t.br.vertices = {
                    x: cc.RENDER_IN_SUBPIXEL(g),
                    y: cc.RENDER_IN_SUBPIXEL(T),
                    z: v
                }, t.tl.vertices = {
                    x: cc.RENDER_IN_SUBPIXEL(E),
                    y: cc.RENDER_IN_SUBPIXEL(y),
                    z: v
                }, t.tr.vertices = {
                    x: cc.RENDER_IN_SUBPIXEL(m),
                    y: cc.RENDER_IN_SUBPIXEL(A),
                    z: v
                };
            }
            this._textureAtlas.updateQuad(t, this._atlasIndex), this._recursiveDirty = !1, this.setDirty(!1);
        }
        if (this._hasChildren && this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform), 
        cc.SPRITE_DEBUG_DRAW) {
            var S = [ cc.p(this._quad.bl.vertices.x, this._quad.bl.vertices.y), cc.p(this._quad.br.vertices.x, this._quad.br.vertices.y), cc.p(this._quad.tr.vertices.x, this._quad.tr.vertices.y), cc.p(this._quad.tl.vertices.x, this._quad.tl.vertices.y) ];
            cc.drawingUtil.drawPoly(S, 4, !0);
        }
    },
    _updateTransformForCanvas: function() {
        if (this._dirty) {
            var t = this._parent;
            !this._visible || t && t != this._batchNode && t._shouldBeHidden ? this._shouldBeHidden = !0 : (this._shouldBeHidden = !1, 
            this._transformToBatch = t && t != this._batchNode ? cc.AffineTransformConcat(this.nodeToParentTransform(), t._transformToBatch) : this.nodeToParentTransform()), 
            this._recursiveDirty = !1, this._dirty = !1;
        }
        this._hasChildren && this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform);
    },
    addChild: null,
    _addChildForWebGL: function(t, e, i) {
        cc.Assert(null != t, "Argument must be non-NULL"), null == e && (e = t._zOrder), 
        null == i && (i = t._tag), this._batchNode && (cc.Assert(t instanceof cc.Sprite, "cc.Sprite only supports cc.Sprites as children when using cc.SpriteBatchNode"), 
        cc.Assert(t.getTexture()._webTextureObj === this._textureAtlas.getTexture()._webTextureObj, ""), 
        this._batchNode.appendChild(t), this._reorderChildDirty || this._setReorderChildDirtyRecursively()), 
        cc.Node.prototype.addChild.call(this, t, e, i), this._hasChildren = !0;
    },
    _addChildForCanvas: function(t, e, i) {
        cc.Assert(null != t, "Argument must be non-NULL"), null == e && (e = t._zOrder), 
        null == i && (i = t._tag), cc.Node.prototype.addChild.call(this, t, e, i), this._hasChildren = !0;
    },
    updateColor: function() {
        var t = this._displayedColor, e = this._displayedOpacity, i = {
            r: t.r,
            g: t.g,
            b: t.b,
            a: e
        };
        this._opacityModifyRGB && (i.r *= e / 255, i.g *= e / 255, i.b *= e / 255);
        var n = this._quad;
        n.bl.colors = i, n.br.colors = i, n.tl.colors = i, n.tr.colors = i, this._batchNode && (this._atlasIndex != cc.SPRITE_INDEX_NOT_INITIALIZED ? this._textureAtlas.updateQuad(n, this._atlasIndex) : this._dirty = !0), 
        this._quadDirty = !0;
    },
    setOpacity: null,
    _setOpacityForWebGL: function(t) {
        cc.NodeRGBA.prototype.setOpacity.call(this, t), this.updateColor();
    },
    _setOpacityForCanvas: function(t) {
        cc.NodeRGBA.prototype.setOpacity.call(this, t), this.setNodeDirty();
    },
    setColor: null,
    _setColorForWebGL: function(t) {
        cc.NodeRGBA.prototype.setColor.call(this, t), this.updateColor();
    },
    _setColorForCanvas: function(t) {
        var e = this.getColor();
        (e.r !== t.r || e.g !== t.g || e.b !== t.b) && (cc.NodeRGBA.prototype.setColor.call(this, t), 
        this._changeTextureColor(), this.setNodeDirty());
    },
    updateDisplayedColor: null,
    _updateDisplayedColorForWebGL: function(t) {
        cc.NodeRGBA.prototype.updateDisplayedColor.call(this, t), this.updateColor();
    },
    _updateDisplayedColorForCanvas: function(t) {
        cc.NodeRGBA.prototype.updateDisplayedColor.call(this, t), this._changeTextureColor(), 
        this.setNodeDirty();
    },
    setDisplayFrame: null,
    _setDisplayFrameForWebGL: function(t) {
        this.setNodeDirty();
        var e = t.getOffset();
        this._unflippedOffsetPositionFromCenter.x = e.x, this._unflippedOffsetPositionFromCenter.y = e.y;
        var i = t.getTexture(), n = t.textureLoaded();
        n || (this._textureLoaded = !1, t.addLoadedEventListener(function(t) {
            this._textureLoaded = !0;
            var e = t.getTexture();
            e != this._texture && this.setTexture(e), this.setTextureRect(t.getRect(), t._rectRotated, t.getOriginalSize()), 
            this._callLoadedEventCallbacks();
        }, this)), i != this._texture && this.setTexture(i), this._rectRotated = t.isRotated(), 
        this.setTextureRect(t.getRect(), this._rectRotated, t.getOriginalSize());
    },
    _setDisplayFrameForCanvas: function(t) {
        this.setNodeDirty();
        var e = t.getOffset();
        this._unflippedOffsetPositionFromCenter.x = e.x, this._unflippedOffsetPositionFromCenter.y = e.y, 
        this._rectRotated = t.isRotated();
        var i = t.getTexture(), n = t.textureLoaded();
        if (n || (this._textureLoaded = !1, t.addLoadedEventListener(function(t) {
            this._textureLoaded = !0;
            var e = t.getTexture();
            e != this._texture && this.setTexture(e), this.setTextureRect(t.getRect(), this._rectRotated, t.getOriginalSize()), 
            this._callLoadedEventCallbacks();
        }, this)), i != this._texture && this.setTexture(i), this._rectRotated && (this._originalTexture = i), 
        this.setTextureRect(t.getRect(), this._rectRotated, t.getOriginalSize()), this._colorized = !1, 
        n) {
            var r = this.getColor();
            (255 !== r.r || 255 !== r.g || 255 !== r.b) && this._changeTextureColor();
        }
    },
    isFrameDisplayed: null,
    _isFrameDisplayedForWebGL: function(t) {
        return cc.rectEqualToRect(t.getRect(), this._rect) && t.getTexture().getName() == this._texture.getName() && cc.pointEqualToPoint(t.getOffset(), this._unflippedOffsetPositionFromCenter);
    },
    _isFrameDisplayedForCanvas: function(t) {
        return t.getTexture() != this._texture ? !1 : cc.rectEqualToRect(t.getRect(), this._rect);
    },
    displayFrame: function() {
        return cc.SpriteFrame.createWithTexture(this._texture, cc.RECT_POINTS_TO_PIXELS(this._rect), this._rectRotated, cc.POINT_POINTS_TO_PIXELS(this._unflippedOffsetPositionFromCenter), cc.SIZE_POINTS_TO_PIXELS(this._contentSize));
    },
    setBatchNode: null,
    _setBatchNodeForWebGL: function(t) {
        if (this._batchNode = t, this._batchNode) this._transformToBatch = cc.AffineTransformIdentity(), 
        this.setTextureAtlas(this._batchNode.getTextureAtlas()); else {
            this._atlasIndex = cc.SPRITE_INDEX_NOT_INITIALIZED, this.setTextureAtlas(null), 
            this._recursiveDirty = !1, this.setDirty(!1);
            var e = this._offsetPosition.x, i = this._offsetPosition.y, n = e + this._rect.width, r = i + this._rect.height, c = this._quad;
            c.bl.vertices = {
                x: e,
                y: i,
                z: 0
            }, c.br.vertices = {
                x: n,
                y: i,
                z: 0
            }, c.tl.vertices = {
                x: e,
                y: r,
                z: 0
            }, c.tr.vertices = {
                x: n,
                y: r,
                z: 0
            }, this._quadDirty = !0;
        }
    },
    _setBatchNodeForCanvas: function(t) {
        this._batchNode = t, this._batchNode ? (this._transformToBatch = cc.AffineTransformIdentity(), 
        this.setTextureAtlas(this._batchNode.getTextureAtlas())) : (this._atlasIndex = cc.SPRITE_INDEX_NOT_INITIALIZED, 
        this.setTextureAtlas(null), this._recursiveDirty = !1, this.setDirty(!1));
    },
    setTexture: null,
    _setTextureForWebGL: function(t) {
        cc.Assert(!t || t instanceof cc.Texture2D, "setTexture expects a CCTexture2D. Invalid argument"), 
        cc.Assert(!this._batchNode, "cc.Sprite: Batched sprites should use the same texture as the batchnode"), 
        t ? this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_TEXTURECOLOR)) : this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_COLOR)), 
        this._batchNode || this._texture == t || (this._texture = t, this._updateBlendFunc());
    },
    _setTextureForCanvas: function(t) {
        cc.Assert(!t || t instanceof cc.Texture2D, "setTexture expects a CCTexture2D. Invalid argument"), 
        this._texture != t && (t && t.getHtmlElementObj() instanceof HTMLImageElement && (this._originalTexture = t), 
        this._texture = t);
    },
    _updateBlendFunc: function() {
        cc.Assert(!this._batchNode, "cc.Sprite: _updateBlendFunc doesn't work when the sprite is rendered using a cc.CCSpriteBatchNode"), 
        this._texture && this._texture.hasPremultipliedAlpha() ? (this._blendFunc.src = cc.BLEND_SRC, 
        this._blendFunc.dst = cc.BLEND_DST, this.setOpacityModifyRGB(!0)) : (this._blendFunc.src = gl.SRC_ALPHA, 
        this._blendFunc.dst = gl.ONE_MINUS_SRC_ALPHA, this.setOpacityModifyRGB(!1));
    },
    _changeTextureColor: function() {
        var t, e = this._texture, i = this._textureRect_Canvas;
        if (e && i.width > 0 && this._originalTexture) {
            if (t = e.getHtmlElementObj(), !t) return;
            var n = cc.TextureCache.getInstance().getTextureColors(this._originalTexture.getHtmlElementObj());
            n && (this._colorized = !0, t instanceof HTMLCanvasElement && !this._rectRotated && !this._newTextureWhenChangeColor ? cc.generateTintImage(t, n, this._displayedColor, i, t) : (t = cc.generateTintImage(t, n, this._displayedColor, i), 
            e = new cc.Texture2D(), e.initWithElement(t), e.handleLoadedTexture(), this.setTexture(e)));
        }
    },
    _setTextureCoords: function(t) {
        t = cc.RECT_POINTS_TO_PIXELS(t);
        var e = this._batchNode ? this._textureAtlas.getTexture() : this._texture;
        if (e) {
            var i, n, r, c, o, s = e.getPixelsWide(), a = e.getPixelsHigh(), h = this._quad;
            this._rectRotated ? (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (i = (2 * t.x + 1) / (2 * s), 
            n = i + (2 * t.height - 2) / (2 * s), r = (2 * t.y + 1) / (2 * a), c = r + (2 * t.width - 2) / (2 * a)) : (i = t.x / s, 
            n = (t.x + t.height) / s, r = t.y / a, c = (t.y + t.width) / a), this._flippedX && (o = r, 
            r = c, c = o), this._flippedY && (o = i, i = n, n = o), h.bl.texCoords.u = i, h.bl.texCoords.v = r, 
            h.br.texCoords.u = i, h.br.texCoords.v = c, h.tl.texCoords.u = n, h.tl.texCoords.v = r, 
            h.tr.texCoords.u = n, h.tr.texCoords.v = c) : (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (i = (2 * t.x + 1) / (2 * s), 
            n = i + (2 * t.width - 2) / (2 * s), r = (2 * t.y + 1) / (2 * a), c = r + (2 * t.height - 2) / (2 * a)) : (i = t.x / s, 
            n = (t.x + t.width) / s, r = t.y / a, c = (t.y + t.height) / a), this._flippedX && (o = i, 
            i = n, n = o), this._flippedY && (o = r, r = c, c = o), h.bl.texCoords.u = i, h.bl.texCoords.v = c, 
            h.br.texCoords.u = n, h.br.texCoords.v = c, h.tl.texCoords.u = i, h.tl.texCoords.v = r, 
            h.tr.texCoords.u = n, h.tr.texCoords.v = r), this._quadDirty = !0;
        }
    },
    draw: null,
    _drawForWebGL: function() {
        if (this._textureLoaded) {
            var t = cc.renderContext, e = this._texture;
            if (e ? e._isLoaded && (this._shaderProgram.use(), this._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4(), 
            cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst), cc.glBindTexture2DN(0, e), 
            cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSCOLORTEX), t.bindBuffer(t.ARRAY_BUFFER, this._quadWebBuffer), 
            this._quadDirty && (t.bufferData(t.ARRAY_BUFFER, this._quad.arrayBuffer, t.DYNAMIC_DRAW), 
            this._quadDirty = !1), t.vertexAttribPointer(0, 3, t.FLOAT, !1, 24, 0), t.vertexAttribPointer(1, 4, t.UNSIGNED_BYTE, !0, 24, 12), 
            t.vertexAttribPointer(2, 2, t.FLOAT, !1, 24, 16), t.drawArrays(t.TRIANGLE_STRIP, 0, 4)) : (this._shaderProgram.use(), 
            this._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4(), cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst), 
            cc.glBindTexture2D(null), cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR), 
            t.bindBuffer(t.ARRAY_BUFFER, this._quadWebBuffer), this._quadDirty && (cc.renderContext.bufferData(cc.renderContext.ARRAY_BUFFER, this._quad.arrayBuffer, cc.renderContext.STATIC_DRAW), 
            this._quadDirty = !1), t.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 3, t.FLOAT, !1, 24, 0), 
            t.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, t.UNSIGNED_BYTE, !0, 24, 12), t.drawArrays(t.TRIANGLE_STRIP, 0, 4)), 
            cc.g_NumberOfDraws++, 0 !== cc.SPRITE_DEBUG_DRAW) if (1 === cc.SPRITE_DEBUG_DRAW) {
                var i = this._quad, n = [ cc.p(i.tl.vertices.x, i.tl.vertices.y), cc.p(i.bl.vertices.x, i.bl.vertices.y), cc.p(i.br.vertices.x, i.br.vertices.y), cc.p(i.tr.vertices.x, i.tr.vertices.y) ];
                cc.drawingUtil.drawPoly(n, 4, !0);
            } else if (2 === cc.SPRITE_DEBUG_DRAW) {
                var r = this.getTextureRect().size, c = this.getOffsetPosition(), o = [ cc.p(c.x, c.y), cc.p(c.x + r.width, c.y), cc.p(c.x + r.width, c.y + r.height), cc.p(c.x, c.y + r.height) ];
                cc.drawingUtil.drawPoly(o, 4, !0);
            }
        }
    },
    _drawForCanvas: function(t) {
        if (this._textureLoaded) {
            var e = t || cc.renderContext;
            this._isLighterMode && (e.globalCompositeOperation = "lighter");
            var i = cc.EGLView.getInstance().getScaleX(), n = cc.EGLView.getInstance().getScaleY();
            e.globalAlpha = this._displayedOpacity / 255;
            var r = this._rect, c = this._contentSize, o = this._offsetPosition, s = this._drawSize_Canvas, a = 0 | o.x, h = -o.y - r.height, u = this._textureRect_Canvas;
            if (s.width = r.width * i, s.height = r.height * n, (this._flippedX || this._flippedY) && (e.save(), 
            this._flippedX && (a = -o.x - r.width, e.scale(-1, 1)), this._flippedY && (h = o.y, 
            e.scale(1, -1))), a *= i, h *= n, this._texture && r.width > 0) {
                var l = this._texture.getHtmlElementObj();
                this._colorized ? e.drawImage(l, 0, 0, u.width, u.height, a, h, s.width, s.height) : e.drawImage(l, u.x, u.y, u.width, u.height, a, h, s.width, s.height);
            } else if (0 !== c.width) {
                var _ = this.getColor();
                e.fillStyle = "rgba(" + _.r + "," + _.g + "," + _.b + ",1)", e.fillRect(a, h, c.width * i, c.height * n);
            }
            if (1 === cc.SPRITE_DEBUG_DRAW) {
                e.strokeStyle = "rgba(0,255,0,1)", a /= i, h /= n, h = -h;
                var d = [ cc.p(a, h), cc.p(a + r.width, h), cc.p(a + r.width, h - r.height), cc.p(a, h - r.height) ];
                cc.drawingUtil.drawPoly(d, 4, !0);
            } else if (2 === cc.SPRITE_DEBUG_DRAW) {
                e.strokeStyle = "rgba(0,255,0,1)";
                var f = this._rect.size;
                h = -h;
                var p = [ cc.p(a, h), cc.p(a + f.width, h), cc.p(a + f.width, h - f.height), cc.p(a, h - f.height) ];
                cc.drawingUtil.drawPoly(p, 4, !0);
            }
            (this._flippedX || this._flippedY) && e.restore(), cc.g_NumberOfDraws++;
        }
    }
}), cc.Browser.supportWebGL ? (cc.Sprite.prototype._spriteFrameLoadedCallback = cc.Sprite.prototype._spriteFrameLoadedCallbackForWebGL, 
cc.Sprite.prototype.setOpacityModifyRGB = cc.Sprite.prototype._setOpacityModifyRGBForWebGL, 
cc.Sprite.prototype.updateDisplayedOpacity = cc.Sprite.prototype._updateDisplayedOpacityForWebGL, 
cc.Sprite.prototype.ctor = cc.Sprite.prototype._ctorForWebGL, cc.Sprite.prototype.setBlendFunc = cc.Sprite.prototype._setBlendFuncForWebGL, 
cc.Sprite.prototype.init = cc.Sprite.prototype._initForWebGL, cc.Sprite.prototype.initWithTexture = cc.Sprite.prototype._initWithTextureForWebGL, 
cc.Sprite.prototype._textureLoadedCallback = cc.Sprite.prototype._textureLoadedCallbackForWebGL, 
cc.Sprite.prototype.setTextureRect = cc.Sprite.prototype._setTextureRectForWebGL, 
cc.Sprite.prototype.updateTransform = cc.Sprite.prototype._updateTransformForWebGL, 
cc.Sprite.prototype.addChild = cc.Sprite.prototype._addChildForWebGL, cc.Sprite.prototype.setOpacity = cc.Sprite.prototype._setOpacityForWebGL, 
cc.Sprite.prototype.setColor = cc.Sprite.prototype._setColorForWebGL, cc.Sprite.prototype.updateDisplayedColor = cc.Sprite.prototype._updateDisplayedColorForWebGL, 
cc.Sprite.prototype.setDisplayFrame = cc.Sprite.prototype._setDisplayFrameForWebGL, 
cc.Sprite.prototype.isFrameDisplayed = cc.Sprite.prototype._isFrameDisplayedForWebGL, 
cc.Sprite.prototype.setBatchNode = cc.Sprite.prototype._setBatchNodeForWebGL, cc.Sprite.prototype.setTexture = cc.Sprite.prototype._setTextureForWebGL, 
cc.Sprite.prototype.draw = cc.Sprite.prototype._drawForWebGL) : (cc.Sprite.prototype._spriteFrameLoadedCallback = cc.Sprite.prototype._spriteFrameLoadedCallbackForCanvas, 
cc.Sprite.prototype.setOpacityModifyRGB = cc.Sprite.prototype._setOpacityModifyRGBForCanvas, 
cc.Sprite.prototype.updateDisplayedOpacity = cc.Sprite.prototype._updateDisplayedOpacityForCanvas, 
cc.Sprite.prototype.ctor = cc.Sprite.prototype._ctorForCanvas, cc.Sprite.prototype.setBlendFunc = cc.Sprite.prototype._setBlendFuncForCanvas, 
cc.Sprite.prototype.init = cc.Sprite.prototype._initForCanvas, cc.Sprite.prototype.initWithTexture = cc.Sprite.prototype._initWithTextureForCanvas, 
cc.Sprite.prototype._textureLoadedCallback = cc.Sprite.prototype._textureLoadedCallbackForCanvas, 
cc.Sprite.prototype.setTextureRect = cc.Sprite.prototype._setTextureRectForCanvas, 
cc.Sprite.prototype.updateTransform = cc.Sprite.prototype._updateTransformForCanvas, 
cc.Sprite.prototype.addChild = cc.Sprite.prototype._addChildForCanvas, cc.Sprite.prototype.setOpacity = cc.Sprite.prototype._setOpacityForCanvas, 
cc.Sprite.prototype.setColor = cc.Sprite.prototype._setColorForCanvas, cc.Sprite.prototype.updateDisplayedColor = cc.Sprite.prototype._updateDisplayedColorForCanvas, 
cc.Sprite.prototype.setDisplayFrame = cc.Sprite.prototype._setDisplayFrameForCanvas, 
cc.Sprite.prototype.isFrameDisplayed = cc.Sprite.prototype._isFrameDisplayedForCanvas, 
cc.Sprite.prototype.setBatchNode = cc.Sprite.prototype._setBatchNodeForCanvas, cc.Sprite.prototype.setTexture = cc.Sprite.prototype._setTextureForCanvas, 
cc.Sprite.prototype.draw = cc.Sprite.prototype._drawForCanvas), cc.Sprite.createWithTexture = function(t, e) {
    var i = arguments.length, n = new cc.Sprite();
    switch (i) {
      case 1:
        return n && n.initWithTexture(t) ? n : null;

      case 2:
        return n && n.initWithTexture(t, e) ? n : null;

      default:
        throw "Sprite.createWithTexture(): Argument must be non-nil ";
    }
}, cc.Sprite.create = function(t, e) {
    var i = arguments.length, n = new cc.Sprite();
    if (0 === i) {
        if (n.init()) return n;
    } else if (n && n.init(t, e)) return n;
    return null;
}, cc.Sprite.createWithSpriteFrameName = function(t) {
    var e = null;
    if ("string" != typeof t) return cc.log("Invalid argument. Expecting string."), 
    null;
    if (e = cc.SpriteFrameCache.getInstance().getSpriteFrame(t), !e) return cc.log("Invalid spriteFrameName: " + t), 
    null;
    var i = new cc.Sprite();
    return i && i.initWithSpriteFrame(e) ? i : null;
}, cc.Sprite.createWithSpriteFrame = function(t) {
    var e = new cc.Sprite();
    return e && e.initWithSpriteFrame(t) ? e : null;
}, cc.TOUCH_ALL_AT_ONCE = 0, cc.TOUCH_ONE_BY_ONE = 1, cc.Layer = cc.Node.extend({
    _isTouchEnabled: !1,
    _isAccelerometerEnabled: !1,
    _isKeyboardEnabled: !1,
    _touchPriority: 0,
    _touchMode: cc.TOUCH_ALL_AT_ONCE,
    _isMouseEnabled: !1,
    _mousePriority: 0,
    ctor: function() {
        cc.Node.prototype.ctor.call(this), this._isTouchEnabled = !1, this._isAccelerometerEnabled = !1, 
        this._isKeyboardEnabled = !1, this._touchPriority = 0, this._touchMode = cc.TOUCH_ALL_AT_ONCE, 
        this._isMouseEnabled = !1, this._mousePriority = 0;
    },
    _initLayer: function() {
        this.setAnchorPoint(cc.p(.5, .5)), this._ignoreAnchorPointForPosition = !0;
        var t = cc.Director.getInstance();
        this.setContentSize(t.getWinSize());
    },
    init: function() {
        return cc.Node.prototype.init.call(this), this._initLayer(), !0;
    },
    registerWithTouchDispatcher: function() {
        this._touchMode === cc.TOUCH_ALL_AT_ONCE ? cc.registerStandardDelegate(this, this._touchPriority) : cc.registerTargetedDelegate(this._touchPriority, !0, this);
    },
    isMouseEnabled: function() {
        return this._isMouseEnabled;
    },
    setMouseEnabled: function(t) {
        this._isMouseEnabled != t && (this._isMouseEnabled = t, this._running && (t ? cc.Director.getInstance().getMouseDispatcher().addMouseDelegate(this, this._mousePriority) : cc.Director.getInstance().getMouseDispatcher().removeMouseDelegate(this)));
    },
    setMousePriority: function(t) {
        this._mousePriority !== t && (this._mousePriority = t, this._isMouseEnabled && (this.setMouseEnabled(!1), 
        this.setMouseEnabled(!0)));
    },
    getMousePriority: function() {
        return this._mousePriority;
    },
    isTouchEnabled: function() {
        return this._isTouchEnabled;
    },
    setTouchEnabled: function(t) {
        this._isTouchEnabled !== t && (this._isTouchEnabled = t, this._running && (t ? this.registerWithTouchDispatcher() : cc.unregisterTouchDelegate(this)));
    },
    getTouchPriority: function() {
        return this._touchPriority;
    },
    setTouchPriority: function(t) {
        this._touchPriority !== t && (this._touchPriority = t, this._isTouchEnabled && (this.setTouchEnabled(!1), 
        this.setTouchEnabled(!0)));
    },
    getTouchMode: function() {
        return this._touchMode;
    },
    setTouchMode: function(t) {
        this._touchMode !== t && (this._touchMode = t, this._isTouchEnabled && (this.setTouchEnabled(!1), 
        this.setTouchEnabled(!0)));
    },
    isAccelerometerEnabled: function() {
        return this._isAccelerometerEnabled;
    },
    setAccelerometerEnabled: function(t) {
        if (t !== this._isAccelerometerEnabled && (this._isAccelerometerEnabled = t, this._running)) {
            var e = cc.Director.getInstance();
            t ? e.getAccelerometer().setDelegate(this) : e.getAccelerometer().setDelegate(null);
        }
    },
    setAccelerometerInterval: function(t) {
        this._isAccelerometerEnabled && cc.Director.getInstance().getAccelerometer().setAccelerometerInterval(t);
    },
    onAccelerometer: function() {
        cc.Assert(!1, "Layer#onAccelerometer override me");
    },
    isKeyboardEnabled: function() {
        return this._isKeyboardEnabled;
    },
    setKeyboardEnabled: function(t) {
        if (t !== this._isKeyboardEnabled && (this._isKeyboardEnabled = t, this._running)) {
            var e = cc.Director.getInstance();
            t ? e.getKeyboardDispatcher().addDelegate(this) : e.getKeyboardDispatcher().removeDelegate(this);
        }
    },
    onEnter: function() {
        var t = cc.Director.getInstance();
        this._isTouchEnabled && this.registerWithTouchDispatcher(), cc.Node.prototype.onEnter.call(this), 
        this._isAccelerometerEnabled && t.getAccelerometer().setDelegate(this), this._isKeyboardEnabled && t.getKeyboardDispatcher().addDelegate(this), 
        this._isMouseEnabled && t.getMouseDispatcher().addMouseDelegate(this, this._mousePriority);
    },
    onExit: function() {
        var t = cc.Director.getInstance();
        this._isTouchEnabled && cc.unregisterTouchDelegate(this), this._isAccelerometerEnabled && t.getAccelerometer().setDelegate(null), 
        this._isKeyboardEnabled && t.getKeyboardDispatcher().removeDelegate(this), this._isMouseEnabled && t.getMouseDispatcher().removeMouseDelegate(this), 
        cc.Node.prototype.onExit.call(this);
    },
    onEnterTransitionDidFinish: function() {
        this._isAccelerometerEnabled && cc.Director.getInstance().getAccelerometer().setDelegate(this), 
        cc.Node.prototype.onEnterTransitionDidFinish.call(this);
    },
    onTouchBegan: function() {
        return cc.Assert(!1, "Layer#onTouchBegan override me"), !0;
    },
    onTouchMoved: function() {},
    onTouchEnded: function() {},
    onTouchCancelled: function() {},
    onTouchesBegan: function() {},
    onTouchesMoved: function() {},
    onTouchesEnded: function() {},
    onTouchesCancelled: function() {},
    onMouseDown: function() {
        return !1;
    },
    onMouseDragged: function() {
        return !1;
    },
    onMouseMoved: function() {
        return !1;
    },
    onMouseUp: function() {
        return !1;
    },
    onRightMouseDown: function() {
        return !1;
    },
    onRightMouseDragged: function() {
        return !1;
    },
    onRightMouseUp: function() {
        return !1;
    },
    onOtherMouseDown: function() {
        return !1;
    },
    onOtherMouseDragged: function() {
        return !1;
    },
    onOtherMouseUp: function() {
        return !1;
    },
    onScrollWheel: function() {
        return !1;
    },
    onMouseEntered: function() {
        return !1;
    },
    onMouseExited: function() {
        return !1;
    },
    onKeyDown: function() {},
    onKeyUp: function() {}
}), cc.Layer.create = function() {
    var t = new cc.Layer();
    return t && t.init() ? t : null;
}, cc.LayerRGBA = cc.Layer.extend({
    RGBAProtocol: !0,
    _displayedOpacity: 0,
    _realOpacity: 0,
    _displayedColor: null,
    _realColor: null,
    _cascadeOpacityEnabled: !1,
    _cascadeColorEnabled: !1,
    ctor: function() {
        cc.Layer.prototype.ctor.call(this), this.RGBAProtocol = !0, this._displayedOpacity = 255, 
        this._realOpacity = 255, this._displayedColor = cc.white(), this._realColor = cc.white(), 
        this._cascadeOpacityEnabled = !1, this._cascadeColorEnabled = !1;
    },
    init: function() {
        return cc.Layer.prototype.init.call(this) ? (this.setCascadeOpacityEnabled(!1), 
        this.setCascadeColorEnabled(!1), !0) : !1;
    },
    getOpacity: function() {
        return this._realOpacity;
    },
    getDisplayedOpacity: function() {
        return this._displayedOpacity;
    },
    setOpacity: function(t) {
        if (this._displayedOpacity = this._realOpacity = t, this._cascadeOpacityEnabled) {
            var e = 255, i = this._parent;
            i && i.RGBAProtocol && i.isCascadeOpacityEnabled() && (e = i.getDisplayedOpacity()), 
            this.updateDisplayedOpacity(e);
        }
    },
    updateDisplayedOpacity: function(t) {
        if (this._displayedOpacity = 0 | this._realOpacity * t / 255, this._cascadeOpacityEnabled) for (var e = this._children, i = 0; i < e.length; i++) {
            var n = e[i];
            n && n.RGBAProtocol && n.updateDisplayedOpacity(this._displayedOpacity);
        }
    },
    isCascadeOpacityEnabled: function() {
        return this._cascadeOpacityEnabled;
    },
    setCascadeOpacityEnabled: function(t) {
        this._cascadeOpacityEnabled = t;
    },
    getColor: function() {
        var t = this._realColor;
        return cc.c3b(t.r, t.g, t.b);
    },
    getDisplayedColor: function() {
        var t = this._displayedColor;
        return cc.c3b(t.r, t.g, t.b);
    },
    setColor: function(t) {
        var e = this._displayedColor, i = this._realColor;
        if (e.r = i.r = t.r, e.g = i.g = t.g, e.b = i.b = t.b, this._cascadeColorEnabled) {
            var n, r = this._parent;
            n = r && r.RGBAProtocol && r.isCascadeColorEnabled() ? r.getDisplayedColor() : cc.white(), 
            this.updateDisplayedColor(n);
        }
    },
    updateDisplayedColor: function(t) {
        var e = this._displayedColor, i = this._realColor;
        if (e.r = 0 | i.r * t.r / 255, e.g = 0 | i.g * t.g / 255, e.b = 0 | i.b * t.b / 255, 
        this._cascadeColorEnabled) for (var n = this._children, r = 0; r < n.length; r++) {
            var c = n[r];
            c && c.RGBAProtocol && c.updateDisplayedColor(e);
        }
    },
    isCascadeColorEnabled: function() {
        return this._cascadeColorEnabled;
    },
    setCascadeColorEnabled: function(t) {
        this._cascadeColorEnabled = t;
    },
    setOpacityModifyRGB: function() {},
    isOpacityModifyRGB: function() {
        return !1;
    }
}), cc.LayerColor = cc.LayerRGBA.extend({
    _blendFunc: null,
    getBlendFunc: function() {
        return this._blendFunc;
    },
    changeWidthAndHeight: function(t, e) {
        this.setContentSize(cc.size(t, e));
    },
    changeWidth: function(t) {
        this.setContentSize(cc.size(t, this._contentSize.height));
    },
    changeHeight: function(t) {
        this.setContentSize(cc.size(this._contentSize.width, t));
    },
    setOpacityModifyRGB: function() {},
    isOpacityModifyRGB: function() {
        return !1;
    },
    setColor: function(t) {
        cc.LayerRGBA.prototype.setColor.call(this, t), this._updateColor();
    },
    setOpacity: function(t) {
        cc.LayerRGBA.prototype.setOpacity.call(this, t), this._updateColor();
    },
    _isLighterMode: !1,
    _squareVertices: null,
    _squareColors: null,
    _verticesFloat32Buffer: null,
    _colorsUint8Buffer: null,
    _squareVerticesAB: null,
    _squareColorsAB: null,
    _ctorForCanvas: function() {
        cc.LayerRGBA.prototype.ctor.call(this), this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST);
    },
    _ctorForWebGL: function() {
        cc.LayerRGBA.prototype.ctor.call(this), this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST), 
        this._squareVerticesAB = new ArrayBuffer(32), this._squareColorsAB = new ArrayBuffer(64);
        var t = this._squareVerticesAB, e = this._squareColorsAB, i = cc.Vertex2F.BYTES_PER_ELEMENT, n = cc.Color4F.BYTES_PER_ELEMENT;
        this._squareVertices = [ new cc.Vertex2F(0, 0, t, 0), new cc.Vertex2F(0, 0, t, i), new cc.Vertex2F(0, 0, t, 2 * i), new cc.Vertex2F(0, 0, t, 3 * i) ], 
        this._squareColors = [ new cc.Color4F(0, 0, 0, 1, e, 0), new cc.Color4F(0, 0, 0, 1, e, n), new cc.Color4F(0, 0, 0, 1, e, 2 * n), new cc.Color4F(0, 0, 0, 1, e, 3 * n) ], 
        this._verticesFloat32Buffer = cc.renderContext.createBuffer(), this._colorsUint8Buffer = cc.renderContext.createBuffer();
    },
    setBlendFunc: function(t, e) {
        this._blendFunc = 1 == arguments.length ? t : {
            src: t,
            dst: e
        }, cc.renderContextType === cc.CANVAS && (this._isLighterMode = this._blendFunc && 1 == this._blendFunc.src && 771 == this._blendFunc.dst);
    },
    init: function(t, e, i) {
        if (!cc.Layer.prototype.init.call(this)) return !1;
        cc.renderContextType !== cc.CANVAS && this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_COLOR));
        var n = cc.Director.getInstance().getWinSize();
        t = t || new cc.Color4B(0, 0, 0, 255), e = e || n.width, i = i || n.height;
        var r = this._displayedColor;
        r.r = t.r, r.g = t.g, r.b = t.b;
        var c = this._realColor;
        return c.r = t.r, c.g = t.g, c.b = t.b, this._displayedOpacity = t.a, this._realOpacity = t.a, 
        this.setContentSize(cc.size(e, i)), this._updateColor(), !0;
    },
    setContentSize: null,
    _setContentSizeForWebGL: function(t) {
        var e = this._squareVertices;
        e[1].x = t.width, e[2].y = t.height, e[3].x = t.width, e[3].y = t.height, this._bindLayerVerticesBufferData(), 
        cc.Layer.prototype.setContentSize.call(this, t);
    },
    _updateColor: null,
    _updateColorForCanvas: function() {},
    _updateColorForWebGL: function() {
        for (var t = this._displayedColor, e = this._displayedOpacity, i = this._squareColors, n = 0; 4 > n; n++) i[n].r = t.r / 255, 
        i[n].g = t.g / 255, i[n].b = t.b / 255, i[n].a = e / 255;
        this._bindLayerColorsBufferData();
    },
    _bindLayerVerticesBufferData: function() {
        var t = cc.renderContext;
        t.bindBuffer(t.ARRAY_BUFFER, this._verticesFloat32Buffer), t.bufferData(t.ARRAY_BUFFER, this._squareVerticesAB, t.STATIC_DRAW);
    },
    _bindLayerColorsBufferData: function() {
        var t = cc.renderContext;
        t.bindBuffer(t.ARRAY_BUFFER, this._colorsUint8Buffer), t.bufferData(t.ARRAY_BUFFER, this._squareColorsAB, t.STATIC_DRAW);
    },
    draw: null,
    _drawForCanvas: function(t) {
        var e = t || cc.renderContext, i = this.getContentSize(), n = cc.EGLView.getInstance(), r = this._displayedColor;
        e.fillStyle = "rgba(" + (0 | r.r) + "," + (0 | r.g) + "," + (0 | r.b) + "," + this._displayedOpacity / 255 + ")", 
        e.fillRect(0, 0, i.width * n.getScaleX(), -i.height * n.getScaleY()), cc.g_NumberOfDraws++;
    },
    _drawForWebGL: function(t) {
        var e = t || cc.renderContext;
        cc.NODE_DRAW_SETUP(this), cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR), 
        e.bindBuffer(e.ARRAY_BUFFER, this._verticesFloat32Buffer), e.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, e.FLOAT, !1, 0, 0), 
        e.bindBuffer(e.ARRAY_BUFFER, this._colorsUint8Buffer), e.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, e.FLOAT, !1, 0, 0), 
        cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst), e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
    }
}), cc.Browser.supportWebGL ? (cc.LayerColor.prototype.ctor = cc.LayerColor.prototype._ctorForWebGL, 
cc.LayerColor.prototype.setContentSize = cc.LayerColor.prototype._setContentSizeForWebGL, 
cc.LayerColor.prototype._updateColor = cc.LayerColor.prototype._updateColorForWebGL, 
cc.LayerColor.prototype.draw = cc.LayerColor.prototype._drawForWebGL) : (cc.LayerColor.prototype.ctor = cc.LayerColor.prototype._ctorForCanvas, 
cc.LayerColor.prototype.setContentSize = cc.LayerRGBA.prototype.setContentSize, 
cc.LayerColor.prototype._updateColor = cc.LayerColor.prototype._updateColorForCanvas, 
cc.LayerColor.prototype.draw = cc.LayerColor.prototype._drawForCanvas), cc.LayerColor.create = function(t, e, i) {
    var n = new cc.LayerColor();
    switch (arguments.length) {
      case 0:
        n.init();
        break;

      case 1:
        n.init(t);
        break;

      case 3:
        n.init(t, e, i);
        break;

      default:
        n.init();
    }
    return n;
}, cc.LayerGradient = cc.LayerColor.extend({
    _startColor: null,
    _endColor: null,
    _startOpacity: null,
    _endOpacity: null,
    _alongVector: null,
    _compressedInterpolation: !1,
    _gradientStartPoint: null,
    _gradientEndPoint: null,
    ctor: function() {
        cc.LayerColor.prototype.ctor.call(this), this._startColor = new cc.Color3B(0, 0, 0), 
        this._endColor = new cc.Color3B(0, 0, 0), this._alongVector = cc.p(0, -1), this._startOpacity = 255, 
        this._endOpacity = 255, this._gradientStartPoint = cc.p(0, 0), this._gradientEndPoint = cc.p(0, 0);
    },
    setContentSize: function(t) {
        cc.LayerColor.prototype.setContentSize.call(this, t), this._updateColor();
    },
    getStartColor: function() {
        return this._realColor;
    },
    setStartColor: function(t) {
        this.setColor(t);
    },
    setEndColor: function(t) {
        this._endColor = t, this._updateColor();
    },
    getEndColor: function() {
        return this._endColor;
    },
    setStartOpacity: function(t) {
        this._startOpacity = t, this._updateColor();
    },
    getStartOpacity: function() {
        return this._startOpacity;
    },
    setEndOpacity: function(t) {
        this._endOpacity = t, this._updateColor();
    },
    getEndOpacity: function() {
        return this._endOpacity;
    },
    setVector: function(t) {
        this._alongVector.x = t.x, this._alongVector.y = t.y, this._updateColor();
    },
    getVector: function() {
        return cc.p(this._alongVector.x, this._alongVector.y);
    },
    isCompressedInterpolation: function() {
        return this._compressedInterpolation;
    },
    setCompressedInterpolation: function(t) {
        this._compressedInterpolation = t, this._updateColor();
    },
    init: function(t, e, i) {
        t = t || cc.c4(0, 0, 0, 255), e = e || cc.c4(0, 0, 0, 255), i = i || cc.p(0, -1);
        var n = this._startColor, r = this._endColor;
        return n.r = t.r, n.g = t.g, n.b = t.b, this._startOpacity = t.a, r.r = e.r, r.g = e.g, 
        r.b = e.b, this._endOpacity = e.a, this._alongVector = i, this._compressedInterpolation = !0, 
        cc.LayerColor.prototype.init.call(this, cc.c4b(t.r, t.g, t.b, 255)), !0;
    },
    draw: function(t) {
        if (cc.renderContextType === cc.WEBGL) return cc.LayerColor.prototype.draw.call(this, t), 
        void 0;
        var e = t || cc.renderContext;
        this._isLighterMode && (e.globalCompositeOperation = "lighter"), e.save();
        var i = cc.EGLView.getInstance(), n = this.getContentSize().width * i.getScaleX(), r = this.getContentSize().height * i.getScaleY(), c = e.createLinearGradient(this._gradientStartPoint.x, this._gradientStartPoint.y, this._gradientEndPoint.x, this._gradientEndPoint.y), o = this._displayedColor, s = this._endColor;
        c.addColorStop(0, "rgba(" + Math.round(o.r) + "," + Math.round(o.g) + "," + Math.round(o.b) + "," + (this._startOpacity / 255).toFixed(4) + ")"), 
        c.addColorStop(1, "rgba(" + Math.round(s.r) + "," + Math.round(s.g) + "," + Math.round(s.b) + "," + (this._endOpacity / 255).toFixed(4) + ")"), 
        e.fillStyle = c, e.fillRect(0, 0, n, -r), 0 != this._rotation && e.rotate(this._rotationRadians), 
        e.restore();
    },
    _updateColor: function() {
        var t = this._alongVector;
        if (cc.renderContextType === cc.CANVAS) {
            var e = .5 * this.getContentSize().width, i = .5 * this.getContentSize().height;
            this._gradientStartPoint = cc.p(e * -t.x + e, i * t.y - i), this._gradientEndPoint = cc.p(e * t.x + e, i * -t.y - i);
        } else {
            var n = cc.pLength(t);
            if (0 === n) return;
            var r = Math.sqrt(2), c = cc.p(t.x / n, t.y / n);
            if (this._compressedInterpolation) {
                var o = 1 / (Math.abs(c.x) + Math.abs(c.y));
                c = cc.pMult(c, o * r);
            }
            var s = this._displayedOpacity / 255, a = this._displayedColor, h = this._endColor, u = {
                r: a.r / 255,
                g: a.g / 255,
                b: a.b / 255,
                a: this._startOpacity * s / 255
            }, l = {
                r: h.r / 255,
                g: h.g / 255,
                b: h.b / 255,
                a: this._endOpacity * s / 255
            }, _ = this._squareColors, d = _[0], f = _[1], p = _[2], g = _[3];
            d.r = l.r + (u.r - l.r) * ((r + c.x + c.y) / (2 * r)), d.g = l.g + (u.g - l.g) * ((r + c.x + c.y) / (2 * r)), 
            d.b = l.b + (u.b - l.b) * ((r + c.x + c.y) / (2 * r)), d.a = l.a + (u.a - l.a) * ((r + c.x + c.y) / (2 * r)), 
            f.r = l.r + (u.r - l.r) * ((r - c.x + c.y) / (2 * r)), f.g = l.g + (u.g - l.g) * ((r - c.x + c.y) / (2 * r)), 
            f.b = l.b + (u.b - l.b) * ((r - c.x + c.y) / (2 * r)), f.a = l.a + (u.a - l.a) * ((r - c.x + c.y) / (2 * r)), 
            p.r = l.r + (u.r - l.r) * ((r + c.x - c.y) / (2 * r)), p.g = l.g + (u.g - l.g) * ((r + c.x - c.y) / (2 * r)), 
            p.b = l.b + (u.b - l.b) * ((r + c.x - c.y) / (2 * r)), p.a = l.a + (u.a - l.a) * ((r + c.x - c.y) / (2 * r)), 
            g.r = l.r + (u.r - l.r) * ((r - c.x - c.y) / (2 * r)), g.g = l.g + (u.g - l.g) * ((r - c.x - c.y) / (2 * r)), 
            g.b = l.b + (u.b - l.b) * ((r - c.x - c.y) / (2 * r)), g.a = l.a + (u.a - l.a) * ((r - c.x - c.y) / (2 * r)), 
            this._bindLayerColorsBufferData();
        }
    }
}), cc.LayerGradient.create = function(t, e, i) {
    var n = new cc.LayerGradient();
    switch (arguments.length) {
      case 2:
        if (n && n.init(t, e)) return n;
        break;

      case 3:
        if (n && n.init(t, e, i)) return n;
        break;

      case 0:
        if (n && n.init()) return n;
        break;

      default:
        throw "Arguments error ";
    }
    return null;
}, cc.LayerMultiplex = cc.Layer.extend({
    _enabledLayer: 0,
    _layers: null,
    initWithLayer: function(t) {
        return this._layers = [], this._layers.push(t), this._enabledLayer = 0, this.addChild(t), 
        !0;
    },
    initWithLayers: function(t) {
        return this._layers = t, this._enabledLayer = 0, this.addChild(this._layers[this._enabledLayer]), 
        !0;
    },
    switchTo: function(t) {
        cc.Assert(t < this._layers.length, "Invalid index in MultiplexLayer switchTo message"), 
        this.removeChild(this._layers[this._enabledLayer], !0), this._enabledLayer = t, 
        this.addChild(this._layers[t]);
    },
    switchToAndReleaseMe: function(t) {
        cc.Assert(t < this._layers.count(), "Invalid index in MultiplexLayer switchTo message"), 
        this.removeChild(this._layers[this._enabledLayer], !0), this._layers[this._enabledLayer] = null, 
        this._enabledLayer = t, this.addChild(this._layers[t]);
    },
    addLayer: function(t) {
        cc.Assert(this._layers, "cc.Layer addLayer"), this._layers.push(t);
    }
}), cc.LayerMultiplex.create = function() {
    arguments.length > 0 && null == arguments[arguments.length - 1] && cc.log("parameters should not be ending with null in Javascript");
    var t = new cc.LayerMultiplex();
    return t.initWithLayers(arguments) ? t : null;
}, cc.Scene = cc.Node.extend({
    ctor: function() {
        cc.Node.prototype.ctor.call(this), this._ignoreAnchorPointForPosition = !0, this.setAnchorPoint(cc.p(.5, .5)), 
        this.setContentSize(cc.Director.getInstance().getWinSize());
    }
}), cc.Scene.create = function() {
    return new cc.Scene();
}, cc.LabelTTF = cc.Sprite.extend({
    _dimensions: null,
    _hAlignment: cc.TEXT_ALIGNMENT_CENTER,
    _vAlignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
    _fontName: null,
    _fontSize: 0,
    _string: "",
    _isMultiLine: !1,
    _fontStyleStr: null,
    _colorStyleStr: null,
    _shadowEnabled: !1,
    _shadowOffset: null,
    _shadowOpacity: 0,
    _shadowBlur: 0,
    _strokeEnabled: !1,
    _strokeColor: null,
    _strokeSize: 0,
    _strokeColorStr: null,
    _textFillColor: null,
    _fillColorStr: null,
    _strokeShadowOffsetX: 0,
    _strokeShadowOffsetY: 0,
    _originalPosition: null,
    _needUpdateTexture: !1,
    _labelCanvas: null,
    _labelContext: null,
    ctor: function() {
        cc.Sprite.prototype.ctor.call(this), this._dimensions = cc.SizeZero(), this._hAlignment = cc.TEXT_ALIGNMENT_LEFT, 
        this._vAlignment = cc.VERTICAL_TEXT_ALIGNMENT_TOP, this._opacityModifyRGB = !1, 
        this._fontStyleStr = "", this._colorStyleStr = "", this._fontName = "Arial", this._isMultiLine = !1, 
        this._shadowEnabled = !1, this._shadowOffset = cc.SizeZero(), this._shadowOpacity = 0, 
        this._shadowBlur = 0, this._strokeEnabled = !1, this._strokeColor = cc.white(), 
        this._strokeSize = 0, this._strokeColorStr = "", this._textFillColor = cc.white(), 
        this._fillColorStr = "rgba(255,255,255,1)", this._strokeShadowOffsetX = 0, this._strokeShadowOffsetY = 0, 
        this._originalPosition = cc.PointZero(), this._needUpdateTexture = !1, this._setColorStyleStr();
    },
    init: function() {
        return this.initWithString(" ", this._fontName, this._fontSize);
    },
    description: function() {
        return "<cc.LabelTTF | FontName =" + this._fontName + " FontSize = " + this._fontSize.toFixed(1) + ">";
    },
    setColor: null,
    _setColorForCanvas: function(t) {
        this.setFontFillColor(t, !0);
    },
    getColor: null,
    _getColorForCanvas: function() {
        return this._textFillColor;
    },
    setOpacity: null,
    _setOpacityForCanvas: function(t) {
        this._opacity !== t && (cc.Sprite.prototype.setOpacity.call(this, t), this._setColorStyleStr(), 
        this._needUpdateTexture = !0);
    },
    _setColorStyleStr: function() {
        var t = this._textFillColor;
        if (this._colorStyleStr = "rgba(" + t.r + "," + t.g + "," + t.b + ", " + this._displayedOpacity / 255 + ")", 
        this._strokeEnabled) {
            var e = this._strokeColor;
            this._strokeColorStr = "rgba(" + e.r + "," + e.g + "," + e.b + ", " + this._displayedOpacity / 255 + ")";
        }
    },
    getString: function() {
        return this._string;
    },
    getHorizontalAlignment: function() {
        return this._hAlignment;
    },
    getVerticalAlignment: function() {
        return this._vAlignment;
    },
    getDimensions: function() {
        return cc.size(this._dimensions.width, this._dimensions.height);
    },
    getFontSize: function() {
        return this._fontSize;
    },
    getFontName: function() {
        return this._fontName;
    },
    initWithString: function(t, e, i, n, r, c) {
        var o = t + "";
        return cc.Assert(null != o, "cc.LabelTTF.initWithString() label is null"), i = i || 16, 
        n = n || cc.size(0, i), r = r || cc.TEXT_ALIGNMENT_LEFT, c = c || cc.VERTICAL_TEXT_ALIGNMENT_TOP, 
        cc.Sprite.prototype.init.call(this) ? (this._opacityModifyRGB = !1, this._dimensions = cc.size(n.width, n.height), 
        this._fontName = e || "Arial", this._hAlignment = r, this._vAlignment = c, this._fontSize = i, 
        this._fontStyleStr = this._fontSize + "px '" + e + "'", this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(e, this._fontSize), 
        this.setString(o), this._setColorStyleStr(), this._updateTexture(), this._needUpdateTexture = !1, 
        !0) : !1;
    },
    initWithStringAndTextDefinition: null,
    _initWithStringAndTextDefinitionForCanvas: function(t, e) {
        return cc.Sprite.prototype.init.call(this) ? (this._updateWithTextDefinition(e, !1), 
        this.setString(t), !0) : !1;
    },
    _initWithStringAndTextDefinitionForWebGL: function(t, e) {
        return cc.Sprite.prototype.init.call(this) ? (this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.LabelTTF._SHADER_PROGRAM)), 
        this._updateWithTextDefinition(e, !1), this.setString(t), !0) : !1;
    },
    setTextDefinition: function(t) {
        t && this._updateWithTextDefinition(t, !0);
    },
    getTextDefinition: function() {
        return this._prepareTextDefinition(!1);
    },
    enableShadow: function(t, e, i) {
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        var n = this._shadowOffset;
        (n && n.width != t.width || n.height != t.height) && (n.width = t.width, n.height = t.height), 
        this._shadowOpacity != e && (this._shadowOpacity = e), this._shadowBlur != i && (this._shadowBlur = i), 
        this._needUpdateTexture = !0;
    },
    disableShadow: function() {
        this._shadowEnabled && (this._shadowEnabled = !1, this._needUpdateTexture = !0);
    },
    enableStroke: function(t, e) {
        this._strokeEnabled === !1 && (this._strokeEnabled = !0);
        var i = this._strokeColor;
        (i.r !== t.r || i.g !== t.g || i.b !== t.b) && (this._strokeColor = t, this._strokeColorStr = "rgba(" + (0 | t.r) + "," + (0 | t.g) + "," + (0 | t.b) + ", 1)"), 
        this._strokeSize !== e && (this._strokeSize = e || 0), this._needUpdateTexture = !0;
    },
    disableStroke: function() {
        this._strokeEnabled && (this._strokeEnabled = !1, this._needUpdateTexture = !0);
    },
    setFontFillColor: null,
    _setFontFillColorForCanvas: function(t) {
        var e = this._textFillColor;
        (e.r != t.r || e.g != t.g || e.b != t.b) && (this._textFillColor = t, this._setColorStyleStr(), 
        this._needUpdateTexture = !0);
    },
    _setFontFillColorForWebGL: function(t) {
        var e = this._textFillColor;
        (e.r != t.r || e.g != t.g || e.b != t.b) && (this._textFillColor = t, this._fillColorStr = "rgba(" + (0 | t.r) + "," + (0 | t.g) + "," + (0 | t.b) + ", 1)", 
        this._needUpdateTexture = !0);
    },
    _updateWithTextDefinition: function(t, e) {
        t.fontDimensions ? (this._dimensions.width = t.fontDimensions.width, this._dimensions.height = t.fontDimensions.height) : (this._dimensions.width = 0, 
        this._dimensions.height = 0), this._hAlignment = t.fontAlignmentH, this._vAlignment = t.fontAlignmentV, 
        this._fontName = t.fontName, this._fontSize = t.fontSize || 12, this._fontStyleStr = this._fontSize + "px '" + this._fontName + "'", 
        this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, this._fontSize), 
        t.shadowEnabled && this.enableShadow(t.shadowOffset, t.shadowOpacity, t.shadowBlur, !1), 
        t.strokeEnabled && this.enableStroke(t.strokeColor, t.strokeSize, !1), this.setFontFillColor(t.fontFillColor, !1), 
        e && this._updateTexture();
    },
    _prepareTextDefinition: function(t) {
        var e = new cc.FontDefinition();
        if (t ? (e.fontSize = this._fontSize, e.fontDimensions = cc.SIZE_POINTS_TO_PIXELS(this._dimensions)) : (e.fontSize = this._fontSize, 
        e.fontDimensions = cc.size(this._dimensions.width, this._dimensions.height)), e.fontName = this._fontName, 
        e.fontAlignmentH = this._hAlignment, e.fontAlignmentV = this._vAlignment, this._strokeEnabled) {
            e.strokeEnabled = !0;
            var i = this._strokeColor;
            e.strokeColor = new cc.Color3B(i.r, i.g, i.b), e.strokeSize = this._strokeSize;
        } else e.strokeEnabled = !1;
        this._shadowEnabled ? (e.shadowEnabled = !0, e.shadowBlur = this._shadowBlur, e.shadowOpacity = this._shadowOpacity, 
        e.shadowOffset = t ? cc.SIZE_POINTS_TO_PIXELS(this._shadowOffset) : cc.size(this._shadowOffset.width, this._shadowOffset.height)) : e._shadowEnabled = !1;
        var n = this._textFillColor;
        return e.fontFillColor = new cc.Color3B(n.r, n.g, n.b), e;
    },
    _fontClientHeight: 18,
    setString: function(t) {
        t = String(t), this._string != t && (this._string = t + "", this._needUpdateTexture = !0);
    },
    setHorizontalAlignment: function(t) {
        t !== this._hAlignment && (this._hAlignment = t, this._needUpdateTexture = !0);
    },
    setVerticalAlignment: function(t) {
        t != this._vAlignment && (this._vAlignment = t, this._needUpdateTexture = !0);
    },
    setDimensions: function(t) {
        (t.width != this._dimensions.width || t.height != this._dimensions.height) && (this._dimensions = t, 
        this._needUpdateTexture = !0);
    },
    setFontSize: function(t) {
        this._fontSize !== t && (this._fontSize = t, this._fontStyleStr = t + "px '" + this._fontName + "'", 
        this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, t), this._needUpdateTexture = !0);
    },
    setFontName: function(t) {
        this._fontName && this._fontName != t && (this._fontName = t, this._fontStyleStr = this._fontSize + "px '" + t + "'", 
        this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(t, this._fontSize), this._needUpdateTexture = !0);
    },
    _drawTTFInCanvas: function(t) {
        if (t) {
            var e = this._contentSize.height, i = this._vAlignment, n = this._hAlignment, r = this._fontClientHeight;
            t.setTransform(1, 0, 0, 1, 0, e), t.font != this._fontStyleStr && (t.font = this._fontStyleStr), 
            t.fillStyle = cc.renderContextType === cc.CANVAS ? this._colorStyleStr : "rgba(255,255,255,1)";
            var c = this._strokeEnabled;
            c && (t.lineWidth = this._strokeSize, t.strokeStyle = this._strokeColorStr);
            var o = !1, s = !1;
            if (this._shadowEnabled) {
                var a = this._shadowOffset;
                t.shadowColor = "rgba(128,128,128,1)", o = a.width < 0, s = a.height < 0, t.shadowOffsetX = a.width, 
                t.shadowOffsetY = -a.height, t.shadowBlur = this._shadowBlur;
            }
            t.textBaseline = cc.LabelTTF._textBaseline[i], t.textAlign = cc.LabelTTF._textAlign[n];
            var h = 0, u = this._strokeShadowOffsetX, l = this._strokeShadowOffsetY, _ = 0, d = this._contentSize.width - u;
            if (h = n === cc.TEXT_ALIGNMENT_RIGHT ? o ? d + u : d : n === cc.TEXT_ALIGNMENT_CENTER ? o ? d / 2 + u : d / 2 : o ? u : 0, 
            this._isMultiLine) {
                var f = this._strings.length;
                i === cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM ? (_ = r + e - r * f, s && (_ -= l)) : i === cc.VERTICAL_TEXT_ALIGNMENT_CENTER ? (_ = r / 2 + (e - r * f) / 2, 
                s && (_ -= l)) : s ? _ -= l / 2 : _ += l / 2;
                for (var p = 0; f > p; p++) {
                    var g = this._strings[p], T = -e + r * p + _;
                    c && t.strokeText(g, h, T), t.fillText(g, h, T);
                }
            } else i === cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM ? (_ = s ? -l : 0, c && t.strokeText(this._string, h, _), 
            t.fillText(this._string, h, _)) : i === cc.VERTICAL_TEXT_ALIGNMENT_TOP ? (_ = s ? -l / 2 - e : -e + l / 2, 
            c && t.strokeText(this._string, h, _), t.fillText(this._string, h, _)) : (_ = s ? -l - e / 2 : -e / 2, 
            c && t.strokeText(this._string, h, _), t.fillText(this._string, h, _));
        }
    },
    _getLabelContext: function() {
        if (this._labelContext) return this._labelContext;
        if (!this._labelCanvas) {
            var t = document.createElement("canvas"), e = new cc.Texture2D();
            e.initWithElement(t), this.setTexture(e), this._labelCanvas = t;
        }
        return this._labelContext = this._labelCanvas.getContext("2d"), this._labelContext;
    },
    _updateTTF: function() {
        var t = this._dimensions.width, e = this._labelContext, i = e.measureText(this._string).width;
        if (-1 !== this._string.indexOf("\n") || 0 !== t && i > t && -1 !== this._string.indexOf(" ")) {
            for (var n = this._strings = this._string.split("\n"), r = this._lineWidths = [], c = 0; c < n.length; c++) {
                if (-1 !== n[c].indexOf(" ") && t > 0) {
                    var o = t / e.measureText(this._strings[c]).width, s = 0 | o * n[c].length + 1, a = s, h = 0;
                    if (1 > o) {
                        do {
                            a = n[c].lastIndexOf(" ", a - 1);
                            var u = n[c].substring(0, a);
                            if (h = e.measureText(u).width, -1 === a) {
                                a = n[c].indexOf(" ", s);
                                break;
                            }
                        } while (h > t);
                        var l = n[c].substr(a + 1);
                        n.splice(c + 1, 0, l), n[c] = u;
                    }
                }
                r[c] = h || e.measureText(n[c]).width;
            }
            this._isMultiLine = !0;
        } else this._isMultiLine = !1;
        var _, d = 0, f = 0;
        if (this._strokeEnabled && (d = f = this._strokeSize), this._shadowEnabled) {
            var p = this._shadowOffset;
            d += Math.abs(p.width), f += Math.abs(p.height);
        }
        _ = 0 === t ? this._isMultiLine ? cc.size(0 | Math.max.apply(Math, this._lineWidths) + d, 0 | this._fontClientHeight * this._strings.length + f) : cc.size(0 | i + d, 0 | this._fontClientHeight + f) : 0 === this._dimensions.height ? this._isMultiLine ? cc.size(0 | t + d, 0 | this._fontClientHeight * this._strings.length + f) : cc.size(0 | t + d, 0 | this._fontClientHeight + f) : cc.size(0 | t + d, 0 | this._dimensions.height + f), 
        this.setContentSize(_), this._strokeShadowOffsetX = d, this._strokeShadowOffsetY = f, 
        this._anchorPointInPoints.x = this._contentSize.width * this._anchorPoint.x, this._anchorPointInPoints.y = this._contentSize.height * this._anchorPoint.y, 
        this.setPosition(this._originalPosition);
    },
    setPosition: function(t, e) {
        var i = this._originalPosition;
        2 == arguments.length ? (i.x = t, i.y = e) : (i.x = t.x, i.y = t.y);
        var n = 0, r = 0;
        if (this._strokeEnabled && (n = r = 2 * this._strokeSize), this._shadowEnabled) {
            var c = this._shadowOffset;
            n += c.width > 0 ? 0 : c.width, r += c.height > 0 ? 0 : c.height;
        }
        var o = cc.p(i.x + n, i.y + r);
        cc.Sprite.prototype.setPosition.call(this, o);
    },
    setPositionX: function(t) {
        this._originalPosition.x = t, cc.Sprite.prototype.setPositionX.call(this, t);
    },
    setPositionY: function(t) {
        this._originalPosition.y = t, cc.Sprite.prototype.setPositionY.call(this, t);
    },
    getPosition: function() {
        return this._needUpdateTexture && this._updateTTF(), cc.p(this._originalPosition.x, this._originalPosition.y);
    },
    getContentSize: function() {
        return this._needUpdateTexture && this._updateTTF(), cc.Sprite.prototype.getContentSize.call(this);
    },
    _updateTexture: function() {
        var t = this._getLabelContext(), e = this._labelCanvas, i = this._contentSize;
        if (0 === this._string.length) return e.width = 1, e.height = i.height, this.setTextureRect(cc.rect(0, 0, 1, i.height)), 
        !0;
        t.font = this._fontStyleStr, this._updateTTF();
        var n = i.width, r = i.height, c = e.width == n && e.height == r;
        return e.width = n, e.height = r, c && t.clearRect(0, 0, n, r), this._drawTTFInCanvas(t), 
        this._texture.handleLoadedTexture(), this.setTextureRect(cc.rect(0, 0, n, r)), !0;
    },
    visit: function(t) {
        if (this._string && "" != this._string) {
            this._needUpdateTexture && (this._needUpdateTexture = !1, this._updateTexture());
            var e = t || cc.renderContext;
            cc.Sprite.prototype.visit.call(this, e);
        }
    },
    draw: null,
    _drawForWebGL: function(t) {
        if (this._string && "" != this._string) {
            var e = t || cc.renderContext, i = this._texture;
            if (i && i._isLoaded && (this._shaderProgram.use(), this._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4(), 
            cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst), cc._currentBoundTexture[0] = i, 
            e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, i._webTextureObj), cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSCOLORTEX), 
            e.bindBuffer(e.ARRAY_BUFFER, this._quadWebBuffer), this._quadDirty && (e.bufferData(e.ARRAY_BUFFER, this._quad.arrayBuffer, e.STATIC_DRAW), 
            this._quadDirty = !1), e.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 3, e.FLOAT, !1, 24, 0), 
            e.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, e.FLOAT, !1, 24, 16), e.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, e.UNSIGNED_BYTE, !0, 24, 12), 
            e.drawArrays(e.TRIANGLE_STRIP, 0, 4)), 1 === cc.SPRITE_DEBUG_DRAW) {
                var n = this._quad, r = [ cc.p(n.tl.vertices.x, n.tl.vertices.y), cc.p(n.bl.vertices.x, n.bl.vertices.y), cc.p(n.br.vertices.x, n.br.vertices.y), cc.p(n.tr.vertices.x, n.tr.vertices.y) ];
                cc.drawingUtil.drawPoly(r, 4, !0);
            } else if (2 === cc.SPRITE_DEBUG_DRAW) {
                var c = this.getTextureRect().size, o = this.getOffsetPosition(), s = [ cc.p(o.x, o.y), cc.p(o.x + c.width, o.y), cc.p(o.x + c.width, o.y + c.height), cc.p(o.x, o.y + c.height) ];
                cc.drawingUtil.drawPoly(s, 4, !0);
            }
            cc.g_NumberOfDraws++;
        }
    },
    _setTextureRectForCanvas: function(t, e, i) {
        this._rectRotated = e || !1, i = i || t.size, this.setContentSize(i), this.setVertexRect(t);
        var n = this._textureRect_Canvas;
        n.x = t.x, n.y = t.y, n.width = t.width, n.height = t.height;
        var r = this._unflippedOffsetPositionFromCenter;
        this._flippedX && (r.x = -r.x), this._flippedY && (r.y = -r.y), this._offsetPosition.x = r.x + (this._contentSize.width - this._rect.width) / 2, 
        this._offsetPosition.y = r.y + (this._contentSize.height - this._rect.height) / 2, 
        this._batchNode && (this._dirty = !0);
    },
    _setTextureCoords: function(t) {
        var e = this._batchNode ? this._textureAtlas.getTexture() : this._texture;
        if (e) {
            var i, n, r, c, o, s = e.getPixelsWide(), a = e.getPixelsHigh(), h = this._quad;
            this._rectRotated ? (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (i = (2 * t.x + 1) / (2 * s), 
            n = i + (2 * t.height - 2) / (2 * s), r = (2 * t.y + 1) / (2 * a), c = r + (2 * t.width - 2) / (2 * a)) : (i = t.x / s, 
            n = (t.x + t.height) / s, r = t.y / a, c = (t.y + t.width) / a), this._flippedX && (o = r, 
            r = c, c = o), this._flippedY && (o = i, i = n, n = o), h.bl.texCoords.u = i, h.bl.texCoords.v = r, 
            h.br.texCoords.u = i, h.br.texCoords.v = c, h.tl.texCoords.u = n, h.tl.texCoords.v = r, 
            h.tr.texCoords.u = n, h.tr.texCoords.v = c) : (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (i = (2 * t.x + 1) / (2 * s), 
            n = i + (2 * t.width - 2) / (2 * s), r = (2 * t.y + 1) / (2 * a), c = r + (2 * t.height - 2) / (2 * a)) : (i = t.x / s, 
            n = (t.x + t.width) / s, r = t.y / a, c = (t.y + t.height) / a), this._flippedX && (o = i, 
            i = n, n = o), this._flippedY && (o = r, r = c, c = o), h.bl.texCoords.u = i, h.bl.texCoords.v = c, 
            h.br.texCoords.u = n, h.br.texCoords.v = c, h.tl.texCoords.u = i, h.tl.texCoords.v = r, 
            h.tr.texCoords.u = n, h.tr.texCoords.v = r), this._quadDirty = !0;
        }
    }
}), cc.Browser.supportWebGL ? (cc.LabelTTF.prototype.setColor = cc.Sprite.prototype.setColor, 
cc.LabelTTF.prototype.getColor = cc.Sprite.prototype.getColor, cc.LabelTTF.prototype.setOpacity = cc.Sprite.prototype.setOpacity, 
cc.LabelTTF.prototype.initWithStringAndTextDefinition = cc.LabelTTF.prototype._initWithStringAndTextDefinitionForWebGL, 
cc.LabelTTF.prototype.setFontFillColor = cc.LabelTTF.prototype._setFontFillColorForWebGL, 
cc.LabelTTF.prototype.draw = cc.LabelTTF.prototype._drawForWebGL, cc.LabelTTF.prototype.setTextureRect = cc.Sprite.prototype._setTextureRectForWebGL) : (cc.LabelTTF.prototype.setColor = cc.LabelTTF.prototype._setColorForCanvas, 
cc.LabelTTF.prototype.getColor = cc.LabelTTF.prototype._getColorForCanvas, cc.LabelTTF.prototype.setOpacity = cc.LabelTTF.prototype._setOpacityForCanvas, 
cc.LabelTTF.prototype.initWithStringAndTextDefinition = cc.LabelTTF.prototype._initWithStringAndTextDefinitionForCanvas, 
cc.LabelTTF.prototype.setFontFillColor = cc.LabelTTF.prototype._setFontFillColorForCanvas, 
cc.LabelTTF.prototype.draw = cc.Sprite.prototype.draw, cc.LabelTTF.prototype.setTextureRect = cc.LabelTTF.prototype._setTextureRectForCanvas), 
cc.LabelTTF._textAlign = [ "left", "center", "right" ], cc.LabelTTF._textBaseline = [ "top", "middle", "bottom" ], 
cc.LabelTTF.create = function(t, e, i, n, r, c) {
    var o = new cc.LabelTTF();
    return o.initWithString(t, e, i, n, r, c) ? o : null;
}, cc.LabelTTF.createWithFontDefinition = function(t, e) {
    var i = new cc.LabelTTF();
    return i && i.initWithStringAndTextDefinition(t, e) ? i : null;
}, cc.LabelTTF._SHADER_PROGRAM = cc.USE_LA88_LABELS ? cc.SHADER_POSITION_TEXTURECOLOR : cc.SHADER_POSITION_TEXTUREA8COLOR, 
cc.LabelTTF.__labelHeightDiv = document.createElement("div"), cc.LabelTTF.__labelHeightDiv.style.fontFamily = "Arial", 
cc.LabelTTF.__labelHeightDiv.style.position = "absolute", cc.LabelTTF.__labelHeightDiv.style.left = "-100px", 
cc.LabelTTF.__labelHeightDiv.style.top = "-100px", cc.LabelTTF.__labelHeightDiv.style.lineHeight = "normal", 
document.body.appendChild(cc.LabelTTF.__labelHeightDiv), cc.LabelTTF.__getFontHeightByDiv = function(t, e) {
    var i = cc.LabelTTF.__fontHeightCache[t + "." + e];
    if (i > 0) return i;
    var n = cc.LabelTTF.__labelHeightDiv;
    return n.innerHTML = "ajghl~!", n.style.fontFamily = t, n.style.fontSize = e + "px", 
    i = n.clientHeight, cc.LabelTTF.__fontHeightCache[t + "." + e] = i, n.innerHTML = "", 
    i;
}, cc.LabelTTF.__fontHeightCache = {};

var cc = cc || {};

cc.AudioEngine = cc.Class.extend({
    _audioID: 0,
    _audioIDList: null,
    ctor: function() {
        this._audioIDList = {};
    },
    _checkCanPlay: function(t) {
        var e = document.createElement("audio");
        if (e.canPlayType) {
            var i = function(t) {
                var i = e.canPlayType(t);
                return "no" != i && "" != i;
            };
            t.mp3 = i("audio/mpeg"), t.mp4 = i("audio/mp4"), t.m4a = i("audio/x-m4a") || i("audio/aac"), 
            t.ogg = i('audio/ogg; codecs="vorbis"'), t.wav = i('audio/wav; codecs="1"');
        } else {
            var n = [ "mp3", "mp4", "m4a", "ogg", "wav" ];
            for (var r in n) t[n[r]] = !1;
        }
    },
    _getPathWithoutExt: function(t) {
        if ("string" != typeof t) return null;
        var e = t.lastIndexOf(".");
        return -1 !== e ? t.substring(0, e) : t;
    },
    _getExtFromFullPath: function(t) {
        var e = t.lastIndexOf(".");
        return -1 !== e ? t.substring(e + 1, t.length) : -1;
    }
}), cc.SimpleSFX = function(t, e) {
    this.audio = t, this.ext = e || ".ogg";
}, cc.SimpleAudioEngine = cc.AudioEngine.extend({
    _supportedFormat: null,
    _effectList: {},
    _soundList: {},
    _playingMusic: null,
    _effectsVolume: 1,
    _maxAudioInstance: 10,
    _capabilities: null,
    _soundSupported: !1,
    _canPlay: !0,
    ctor: function() {
        cc.AudioEngine.prototype.ctor.call(this), this._supportedFormat = [], this._effectList = {}, 
        this._soundList = {}, this._capabilities = {
            mp3: !1,
            ogg: !1,
            wav: !1,
            mp4: !1,
            m4a: !1
        };
        var t = this._capabilities;
        this._checkCanPlay(t), this._soundSupported = t.mp3 || t.mp4 || t.m4a || t.ogg || t.wav;
        var e = navigator.userAgent;
        (/Mobile/.test(e) && (/iPhone OS/.test(e) || /iPad/.test(e) || /Firefox/.test(e)) || /MSIE/.test(e)) && (this._canPlay = !1);
    },
    init: function() {
        return this._getSupportedAudioFormat(), this._soundSupported;
    },
    preloadMusic: function(t) {
        this.preloadSound(t);
    },
    preloadEffect: function(t) {
        this.preloadSound(t);
    },
    preloadSound: function(t) {
        if (this._soundSupported) {
            var e = this._getExtFromFullPath(t), i = this._getPathWithoutExt(t);
            if (this.isFormatSupported(e) && !this._soundList.hasOwnProperty(i) && this._canPlay) {
                var n = new cc.SimpleSFX();
                n.ext = e, n.audio = new Audio(t), n.audio.preload = "auto";
                var r = function() {
                    cc.Loader.getInstance().onResLoaded(), this.removeEventListener("canplaythrough", r, !1), 
                    this.removeEventListener("error", c, !1);
                }, c = function(t) {
                    cc.Loader.getInstance().onResLoadingErr(t.srcElement.src), this.removeEventListener("canplaythrough", r, !1), 
                    this.removeEventListener("error", c, !1);
                };
                return n.audio.addEventListener("canplaythrough", r, !1), n.audio.addEventListener("error", c, !1), 
                this._soundList[i] = n, n.audio.load(), void 0;
            }
        }
        cc.Loader.getInstance().onResLoaded();
    },
    playMusic: function(t, e) {
        if (this._soundSupported) {
            var i, n = this._getPathWithoutExt(t), r = this._getExtFromFullPath(t), c = this._soundList;
            if (c.hasOwnProperty(this._playingMusic) && c[this._playingMusic].audio.pause(), 
            this._playingMusic = n, c.hasOwnProperty(this._playingMusic)) i = c[this._playingMusic].audio; else {
                var o = new cc.SimpleSFX();
                o.ext = r, i = o.audio = new Audio(t), o.audio.preload = "auto", c[n] = o, o.audio.load();
            }
            i.addEventListener("pause", this._musicListener, !1), i.loop = e || !1, i.play(), 
            cc.AudioEngine.isMusicPlaying = !0;
        }
    },
    _musicListener: function() {
        cc.AudioEngine.isMusicPlaying = !1, this.removeEventListener("pause", arguments.callee, !1);
    },
    stopMusic: function(t) {
        var e = this._soundList, i = this._playingMusic;
        if (e.hasOwnProperty(i)) {
            var n = e[i].audio;
            n.pause(), n.currentTime = n.duration, t && delete e[i], cc.AudioEngine.isMusicPlaying = !1;
        }
    },
    pauseMusic: function() {
        if (this._soundList.hasOwnProperty(this._playingMusic)) {
            var t = this._soundList[this._playingMusic].audio;
            t.pause(), cc.AudioEngine.isMusicPlaying = !1;
        }
    },
    resumeMusic: function() {
        if (this._soundList.hasOwnProperty(this._playingMusic)) {
            var t = this._soundList[this._playingMusic].audio;
            t.play(), t.addEventListener("pause", this._musicListener, !1), cc.AudioEngine.isMusicPlaying = !0;
        }
    },
    rewindMusic: function() {
        if (this._soundList.hasOwnProperty(this._playingMusic)) {
            var t = this._soundList[this._playingMusic].audio;
            t.currentTime = 0, t.play(), t.addEventListener("pause", this._musicListener, !1), 
            cc.AudioEngine.isMusicPlaying = !0;
        }
    },
    willPlayMusic: function() {
        return !1;
    },
    getMusicVolume: function() {
        return this._soundList.hasOwnProperty(this._playingMusic) ? this._soundList[this._playingMusic].audio.volume : 0;
    },
    setMusicVolume: function(t) {
        if (this._soundList.hasOwnProperty(this._playingMusic)) {
            var e = this._soundList[this._playingMusic].audio;
            e.volume = t > 1 ? 1 : 0 > t ? 0 : t;
        }
    },
    isMusicPlaying: function() {
        return cc.AudioEngine.isMusicPlaying;
    },
    playEffect: function(t, e) {
        if (!this._soundSupported) return null;
        var i, n = this._getPathWithoutExt(t);
        i = this._soundList.hasOwnProperty(n) ? this._soundList[n].ext : this._getExtFromFullPath(t);
        var r, c = this._getEffectList(n);
        if (c.length > 0) for (var o = 0; o < c.length; o++) if (c[o].ended) {
            r = c[o], r.currentTime = 0, window.chrome && r.load();
            break;
        }
        if (!r) {
            if (c.length >= this._maxAudioInstance) return cc.log("Error: " + t + " greater than " + this._maxAudioInstance), 
            t;
            r = new Audio(n + "." + i), r.volume = this._effectsVolume, c.push(r);
        }
        e && (r.loop = e), r.play();
        var s = this._audioID++;
        return this._audioIDList[s] = r, s;
    },
    getEffectsVolume: function() {
        return this._effectsVolume;
    },
    setEffectsVolume: function(t) {
        this._effectsVolume = t > 1 ? 1 : 0 > t ? 0 : t;
        var e, i, n = this._effectList;
        for (var r in n) if (e = n[r], e.length > 0) for (var c = 0; c < e.length; c++) i = e[c], 
        i.volume = this._effectsVolume;
    },
    pauseEffect: function(t) {
        if (null != t && this._audioIDList.hasOwnProperty(t)) {
            var e = this._audioIDList[t];
            e.ended || e.pause();
        }
    },
    pauseAllEffects: function() {
        var t, e, i = this._effectList;
        for (var n in i) {
            t = i[n];
            for (var r = 0; r < t.length; r++) e = t[r], e.ended || e.pause();
        }
    },
    resumeEffect: function(t) {
        if (null != t && this._audioIDList.hasOwnProperty(t)) {
            var e = this._audioIDList[t];
            e.ended || e.play();
        }
    },
    resumeAllEffects: function() {
        var t, e, i = this._effectList;
        for (var n in i) if (t = i[n], t.length > 0) for (var r = 0; r < t.length; r++) e = t[r], 
        e.ended || e.play();
    },
    stopEffect: function(t) {
        if (null != t && this._audioIDList.hasOwnProperty(t)) {
            var e = this._audioIDList[t];
            e.ended || (e.loop = !1, e.currentTime = e.duration);
        }
    },
    stopAllEffects: function() {
        var t, e, i = this._effectList;
        for (var n in i) {
            t = i[n];
            for (var r = 0; r < t.length; r++) e = t[r], e.ended || (e.loop = !1, e.currentTime = e.duration);
        }
    },
    unloadEffect: function(t) {
        if (t) {
            var e = this._getPathWithoutExt(t);
            this._effectList.hasOwnProperty(e) && delete this._effectList[e];
            var i, n, r = this._audioIDList;
            for (var c in r) i = r[c], n = this._getPathWithoutExt(i.src), n.indexOf(e) > -1 && (this.stopEffect(c), 
            delete r[c]);
        }
    },
    _getEffectList: function(t) {
        var e = this._effectList;
        return e.hasOwnProperty(t) ? e[t] : (e[t] = [], e[t]);
    },
    isFormatSupported: function(t) {
        for (var e, i = this._supportedFormat, n = 0; n < i.length; n++) if (e = i[n], e == t) return !0;
        return !1;
    },
    _getSupportedAudioFormat: function() {
        if (this._soundSupported) {
            var t = [ "ogg", "mp3", "wav", "mp4", "m4a" ];
            for (var e in t) {
                var i = t[e];
                this._capabilities[i] && this._supportedFormat.push(i);
            }
        }
    }
}), cc.WebAudioSFX = function(t, e, i, n, r) {
    this.key = t, this.sourceNode = e, this.volumeNode = i, this.startTime = n || 0, 
    this.pauseTime = r || 0, this.isPaused = !1;
}, cc.WebAudioEngine = cc.AudioEngine.extend({
    _ctx: null,
    _supportedFormat: null,
    _soundSupported: !1,
    _audioData: null,
    _audiosLoading: null,
    _music: null,
    _musicVolume: 1,
    _effects: null,
    _effectsVolume: 1,
    ctor: function() {
        cc.AudioEngine.prototype.ctor.call(this), this._supportedFormat = [], this._audioData = {}, 
        this._audiosLoading = {}, this._effects = {};
    },
    init: function() {
        this._ctx = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
        var t = {};
        this._checkCanPlay(t);
        var e = [ "ogg", "mp3", "wav", "mp4", "m4a" ], i = this._supportedFormat;
        for (var n in e) {
            var r = e[n];
            t[r] && i.push(r);
        }
        return this._soundSupported = i.length > 0, this._soundSupported;
    },
    isFormatSupported: function(t) {
        var e = this._supportedFormat;
        for (var i in e) if (t === e[i]) return !0;
        return !1;
    },
    _fetchData: function(t, e, i) {
        var n = new window.XMLHttpRequest();
        n.open("GET", t, !0), n.responseType = "arraybuffer";
        var r = this;
        n.onload = function() {
            r._ctx.decodeAudioData(n.response, e, i);
        }, n.onerror = i, n.send();
    },
    preloadMusic: function(t) {
        this.preloadSound(t);
    },
    preloadEffect: function(t) {
        this.preloadSound(t);
    },
    preloadSound: function(t) {
        if (this._soundSupported) {
            var e = this._getExtFromFullPath(t), i = this._getPathWithoutExt(t);
            if (!this.isFormatSupported(e) || i in this._audioData || i in this._audiosLoading) return cc.Loader.getInstance().onResLoaded(), 
            void 0;
            this._audiosLoading[i] = !0;
            var n = this;
            this._fetchData(t, function(t) {
                n._audioData[i] = t, delete n._audiosLoading[i], cc.Loader.getInstance().onResLoaded();
            }, function() {
                delete n._audiosLoading[i], cc.Loader.getInstance().onResLoadingErr(t);
            });
        }
    },
    _beginSound: function(t, e, i, n) {
        var r = new cc.WebAudioSFX();
        if (e = e || !1, i = i || 1, n = n || 0, r.key = t, r.sourceNode = this._ctx.createBufferSource(), 
        r.sourceNode.buffer = this._audioData[t], r.sourceNode.loop = e, r.volumeNode = this._ctx.createGainNode(), 
        r.volumeNode.gain.value = i, r.sourceNode.connect(r.volumeNode), r.volumeNode.connect(this._ctx.destination), 
        r.sourceNode.start) r.sourceNode.start(0, n); else if (r.sourceNode.noteGrainOn) {
            var c = r.sourceNode.buffer.duration;
            e ? r.sourceNode.noteGrainOn(0, n, c) : r.sourceNode.noteGrainOn(0, n, c - n);
        } else r.sourceNode.noteOn(0);
        return r.startTime = this._ctx.currentTime - n, r.pauseTime = r.startTime, r.isPaused = !1, 
        r;
    },
    _isSoundPlaying: function(t) {
        return 2 == t.sourceNode.playbackState;
    },
    _isSoundPaused: function(t) {
        return this._isSoundPlaying(t) ? !1 : t.isPaused;
    },
    isMusicPlaying: function() {
        return this._music ? this._isSoundPlaying(this._music) : !1;
    },
    playMusic: function(t, e) {
        var i = this._getPathWithoutExt(t), n = this._getExtFromFullPath(t);
        if (e = e || !1, this._music && this.stopMusic(), i in this._audioData) this._music = this._beginSound(i, e, this.getMusicVolume()); else if (this.isFormatSupported(n) && !(i in this._audiosLoading)) {
            this._audiosLoading[i] = !0;
            var r = this;
            this._fetchData(t, function(n) {
                r._audioData[i] = n, delete r._audiosLoading[i], r.playMusic(t, e);
            }, function() {
                delete r._audiosLoading[i];
            });
        }
    },
    _endSound: function(t) {
        t.sourceNode.stop ? t.sourceNode.stop(0) : t.sourceNode.noteOff(0);
    },
    stopMusic: function(t) {
        if (this._music) {
            var e = this._music.key;
            this._endSound(this._music), this._music = null, t && delete this._audioData[e];
        }
    },
    _pauseSound: function(t) {
        t.pauseTime = this._ctx.currentTime, t.isPaused = !0, this._endSound(t);
    },
    pauseMusic: function() {
        this.isMusicPlaying() && this._pauseSound(this._music);
    },
    _resumeSound: function(t, e) {
        var i = t.key, n = t.sourceNode.loop, r = (t.pauseTime - t.startTime) % t.sourceNode.buffer.duration;
        return this._beginSound(i, n, e, r);
    },
    resumeMusic: function() {
        this._music && this._isSoundPaused(this._music) && (this._music = this._resumeSound(this._music, this.getMusicVolume()));
    },
    rewindMusic: function() {
        if (this._music) {
            var t = this._music.key, e = this._music.sourceNode.loop, i = this.getMusicVolume();
            this._endSound(this._music), this._music = this._beginSound(t, e, i);
        }
    },
    willPlayMusic: function() {
        return !1;
    },
    getMusicVolume: function() {
        return this._musicVolume;
    },
    _setSoundVolume: function(t, e) {
        t.volumeNode.gain.value = e;
    },
    setMusicVolume: function(t) {
        t > 1 ? t = 1 : 0 > t && (t = 0), this.getMusicVolume() != t && (this._musicVolume = t, 
        this._music && this._setSoundVolume(this._music, t));
    },
    playEffect: function(t, e) {
        var i = this._getPathWithoutExt(t), n = this._getExtFromFullPath(t);
        if (e = e || !1, i in this._audioData) {
            var r = this._effects;
            i in r || (r[i] = []);
            var c = r[i];
            for (var o in c) {
                var s = c[o];
                if (!this._isSoundPlaying(s) && !this._isSoundPaused(s)) return c[o] = this._beginSound(i, e, this.getEffectsVolume()), 
                t;
            }
            c.push(this._beginSound(i, e, this.getEffectsVolume()));
        } else if (this.isFormatSupported(n) && !(i in this._audiosLoading)) {
            this._audiosLoading[i] = !0;
            var a = this;
            this._fetchData(t, function(n) {
                a._audioData[i] = n, delete a._audiosLoading[i], a.playEffect(t, e);
            }, function() {
                delete a._audiosLoading[i];
            });
        }
        var h = this._audioID++;
        return this._audioIDList[h] = this._effects[i], h;
    },
    getEffectsVolume: function() {
        return this._effectsVolume;
    },
    setEffectsVolume: function(t) {
        if (t > 1 ? t = 1 : 0 > t && (t = 0), this.getEffectsVolume() != t) {
            this._effectsVolume = t;
            var e = this._effects;
            for (var i in e) {
                var n = e[i];
                for (var r in n) this._setSoundVolume(n[r], t);
            }
        }
    },
    _pauseSoundList: function(t) {
        for (var e in t) {
            var i = t[e];
            this._isSoundPlaying(i) && this._pauseSound(i);
        }
    },
    pauseEffect: function(t) {
        null != t && this._audioIDList.hasOwnProperty(t) && this._pauseSoundList(this._audioIDList[t]);
    },
    pauseAllEffects: function() {
        for (var t in this._effects) this._pauseSoundList(this._effects[t]);
    },
    _resumeSoundList: function(t, e) {
        for (var i in t) {
            var n = t[i];
            this._isSoundPaused(n) && (t[i] = this._resumeSound(n, e));
        }
    },
    resumeEffect: function(t) {
        null != t && this._audioIDList.hasOwnProperty(t) && this._resumeSoundList(this._audioIDList[t], this.getEffectsVolume());
    },
    resumeAllEffects: function() {
        for (var t in this._effects) this._resumeSoundList(this._effects[t], this.getEffectsVolume());
    },
    stopEffect: function(t) {
        null != t && this._audioIDList.hasOwnProperty(t) && this._endSound(this._audioIDList[t]);
    },
    stopAllEffects: function() {
        var t = this._effects;
        for (var e in t) {
            var i = t[e];
            for (var n in i) this._endSound(i[n]);
            delete t[e];
        }
    },
    unloadEffect: function(t) {
        if (t) {
            var e = this._getPathWithoutExt(t);
            this._effects.hasOwnProperty(e) && (this.stopEffect(t), delete this._effects[keyname]), 
            e in this._audioData && delete this._audioData[e];
        }
    }
}), cc.AudioEngine._instance = null, cc.AudioEngine.isMusicPlaying = !1, cc.AudioEngine.getInstance = function() {
    if (!this._instance) {
        var t = navigator.userAgent;
        this._instance = cc.Browser.supportWebAudio && (/iPhone OS/.test(t) || /iPad/.test(t)) ? new cc.WebAudioEngine() : new cc.SimpleAudioEngine(), 
        this._instance.init();
    }
    return this._instance;
}, cc.AudioEngine.end = function() {
    this._instance && (this._instance.stopMusic(), this._instance.stopAllEffects()), 
    this._instance = null;
}, cc.SAXParser = cc.Class.extend({
    xmlDoc: null,
    _parser: null,
    _xmlDict: null,
    _isSupportDOMParser: null,
    ctor: function() {
        this._xmlDict = {}, window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser()) : this._isSupportDOMParser = !1;
    },
    parse: function(t) {
        var e = t;
        t = this.getList(t);
        var i = this._parserXML(t, e), n = i.documentElement;
        if ("plist" != n.tagName) throw "cocos2d: " + e + " is not a plist file";
        for (var r = null, c = 0, o = n.childNodes.length; o > c && (r = n.childNodes[c], 
        1 != r.nodeType); c++) ;
        return i = null, this._parseNode(r);
    },
    tmxParse: function(t, e) {
        return (null == e || e === !1) && (t = this.getList(t)), this._parserXML(t);
    },
    _parserXML: function(t, e) {
        var i;
        return this._isSupportDOMParser ? i = this._parser.parseFromString(t, "text/xml") : (i = new ActiveXObject("Microsoft.XMLDOM"), 
        i.async = "false", i.loadXML(t)), null == i && cc.log("cocos2d:xml " + e + " not found!"), 
        i;
    },
    _parseNode: function(t) {
        var e = null;
        switch (t.tagName) {
          case "dict":
            e = this._parseDict(t);
            break;

          case "array":
            e = this._parseArray(t);
            break;

          case "string":
            if (1 == t.childNodes.length) e = t.firstChild.nodeValue; else {
                e = "";
                for (var i = 0; i < t.childNodes.length; i++) e += t.childNodes[i].nodeValue;
            }
            break;

          case "false":
            e = !1;
            break;

          case "true":
            e = !0;
            break;

          case "real":
            e = parseFloat(t.firstChild.nodeValue);
            break;

          case "integer":
            e = parseInt(t.firstChild.nodeValue, 10);
        }
        return e;
    },
    _parseArray: function(t) {
        for (var e = [], i = 0, n = t.childNodes.length; n > i; i++) {
            var r = t.childNodes[i];
            1 == r.nodeType && e.push(this._parseNode(r));
        }
        return e;
    },
    _parseDict: function(t) {
        for (var e = {}, i = null, n = 0, r = t.childNodes.length; r > n; n++) {
            var c = t.childNodes[n];
            1 == c.nodeType && ("key" == c.tagName ? i = c.firstChild.nodeValue : e[i] = this._parseNode(c));
        }
        return e;
    },
    preloadPlist: function(t) {
        if (t = cc.FileUtils.getInstance().fullPathForFilename(t), window.XMLHttpRequest) {
            var e = new XMLHttpRequest();
            e.overrideMimeType && e.overrideMimeType("text/xml");
        }
        if (null != e) {
            var i = this;
            e.onreadystatechange = function() {
                4 == e.readyState && (e.responseText ? (cc.Loader.getInstance().onResLoaded(), i._xmlDict[t] = e.responseText, 
                e = null) : cc.Assert("cocos2d:There was a problem retrieving the xml data:" + e.statusText));
            }, e.open("GET", t, !0), e.send(null);
        } else cc.Assert("cocos2d:Your browser does not support XMLHTTP.");
    },
    unloadPlist: function(t) {
        this._xmlDict.hasOwnProperty(t) && delete this._xmlDict[t];
    },
    getName: function(t) {
        var e = t.lastIndexOf("/", t.length) + 1, i = t.lastIndexOf(".", t.length);
        return t.substring(e, i);
    },
    getExt: function(t) {
        var e = t.lastIndexOf(".", t.length) + 1;
        return t.substring(e, t.length);
    },
    getList: function(t) {
        return null != this._xmlDict ? this._xmlDict[t] : null;
    }
}), cc.SAXParser.getInstance = function() {
    return this._instance || (this._instance = new cc.SAXParser()), this._instance;
}, cc.SAXParser._instance = null, cc.ActionEase = cc.ActionInterval.extend({
    _inner: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this), this._inner = null;
    },
    initWithAction: function(t) {
        return cc.Assert(null != t, ""), this.initWithDuration(t.getDuration()) ? (this._inner = t, 
        !0) : !1;
    },
    clone: function() {
        var t = new cc.ActionEase();
        return t.initWithAction(this._inner.clone()), t;
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t), this._inner.startWithTarget(this._target);
    },
    stop: function() {
        this._inner.stop(), cc.ActionInterval.prototype.stop.call(this);
    },
    update: function(t) {
        this._inner.update(t);
    },
    reverse: function() {
        return cc.ActionEase.create(this._inner.reverse());
    },
    getInnerAction: function() {
        return this._inner;
    }
}), cc.ActionEase.create = function(t) {
    var e = new cc.ActionEase();
    return e && e.initWithAction(t), e;
}, cc.EaseRateAction = cc.ActionEase.extend({
    _rate: 0,
    ctor: function() {
        cc.ActionEase.prototype.ctor.call(this), this._rate = 0;
    },
    setRate: function(t) {
        this._rate = t;
    },
    getRate: function() {
        return this._rate;
    },
    initWithAction: function(t, e) {
        return cc.ActionEase.prototype.initWithAction.call(this, t) ? (this._rate = e, !0) : !1;
    },
    clone: function() {
        var t = new cc.EaseRateAction();
        return t.initWithAction(this._inner.clone(), this._rate), t;
    },
    reverse: function() {
        return cc.EaseRateAction.create(this._inner.reverse(), 1 / this._rate);
    }
}), cc.EaseRateAction.create = function(t, e) {
    var i = new cc.EaseRateAction();
    return i && i.initWithAction(t, e), i;
}, cc.EaseIn = cc.EaseRateAction.extend({
    update: function(t) {
        this._inner.update(Math.pow(t, this._rate));
    },
    reverse: function() {
        return cc.EaseIn.create(this._inner.reverse(), 1 / this._rate);
    },
    clone: function() {
        var t = new cc.EaseIn();
        return t.initWithAction(this._inner.clone(), this._rate), t;
    }
}), cc.EaseIn.create = function(t, e) {
    var i = new cc.EaseIn();
    return i && i.initWithAction(t, e), i;
}, cc.EaseOut = cc.EaseRateAction.extend({
    update: function(t) {
        this._inner.update(Math.pow(t, 1 / this._rate));
    },
    reverse: function() {
        return cc.EaseOut.create(this._inner.reverse(), 1 / this._rate);
    },
    clone: function() {
        var t = new cc.EaseOut();
        return t.initWithAction(this._inner.clone(), this._rate), t;
    }
}), cc.EaseOut.create = function(t, e) {
    var i = new cc.EaseOut();
    return i && i.initWithAction(t, e), i;
}, cc.EaseInOut = cc.EaseRateAction.extend({
    update: function(t) {
        t *= 2, 1 > t ? this._inner.update(.5 * Math.pow(t, this._rate)) : this._inner.update(1 - .5 * Math.pow(2 - t, this._rate));
    },
    clone: function() {
        var t = new cc.EaseInOut();
        return t.initWithAction(this._inner.clone(), this._rate), t;
    },
    reverse: function() {
        return cc.EaseInOut.create(this._inner.reverse(), this._rate);
    }
}), cc.EaseInOut.create = function(t, e) {
    var i = new cc.EaseInOut();
    return i && i.initWithAction(t, e), i;
}, cc.EaseExponentialIn = cc.ActionEase.extend({
    update: function(t) {
        this._inner.update(0 === t ? 0 : Math.pow(2, 10 * (t - 1)));
    },
    reverse: function() {
        return cc.EaseExponentialOut.create(this._inner.reverse());
    },
    clone: function() {
        var t = new cc.EaseExponentialIn();
        return t.initWithAction(this._inner.clone()), t;
    }
}), cc.EaseExponentialIn.create = function(t) {
    var e = new cc.EaseExponentialIn();
    return e && e.initWithAction(t), e;
}, cc.EaseExponentialOut = cc.ActionEase.extend({
    update: function(t) {
        this._inner.update(1 == t ? 1 : -Math.pow(2, -10 * t) + 1);
    },
    reverse: function() {
        return cc.EaseExponentialIn.create(this._inner.reverse());
    },
    clone: function() {
        var t = new cc.EaseExponentialOut();
        return t.initWithAction(this._inner.clone()), t;
    }
}), cc.EaseExponentialOut.create = function(t) {
    var e = new cc.EaseExponentialOut();
    return e && e.initWithAction(t), e;
}, cc.EaseExponentialInOut = cc.ActionEase.extend({
    update: function(t) {
        1 != t && 0 !== t && (t *= 2, t = 1 > t ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)), 
        this._inner.update(t);
    },
    reverse: function() {
        return cc.EaseExponentialInOut.create(this._inner.reverse());
    },
    clone: function() {
        var t = new cc.EaseExponentialInOut();
        return t.initWithAction(this._inner.clone()), t;
    }
}), cc.EaseExponentialInOut.create = function(t) {
    var e = new cc.EaseExponentialInOut();
    return e && e.initWithAction(t), e;
}, cc.EaseSineIn = cc.ActionEase.extend({
    update: function(t) {
        t = 0 === t || 1 == t ? t : -1 * Math.cos(t * Math.PI / 2) + 1, this._inner.update(t);
    },
    reverse: function() {
        return cc.EaseSineOut.create(this._inner.reverse());
    },
    clone: function() {
        var t = new cc.EaseSineIn();
        return t.initWithAction(this._inner.clone()), t;
    }
}), cc.EaseSineIn.create = function(t) {
    var e = new cc.EaseSineIn();
    return e && e.initWithAction(t), e;
}, cc.EaseSineOut = cc.ActionEase.extend({
    update: function(t) {
        t = 0 === t || 1 == t ? t : Math.sin(t * Math.PI / 2), this._inner.update(t);
    },
    reverse: function() {
        return cc.EaseSineIn.create(this._inner.reverse());
    },
    clone: function() {
        var t = new cc.EaseSineOut();
        return t.initWithAction(this._inner.clone()), t;
    }
}), cc.EaseSineOut.create = function(t) {
    var e = new cc.EaseSineOut();
    return e && e.initWithAction(t), e;
}, cc.EaseSineInOut = cc.ActionEase.extend({
    update: function(t) {
        t = 0 === t || 1 == t ? t : -.5 * (Math.cos(Math.PI * t) - 1), this._inner.update(t);
    },
    clone: function() {
        var t = new cc.EaseSineInOut();
        return t.initWithAction(this._inner.clone()), t;
    },
    reverse: function() {
        return cc.EaseSineInOut.create(this._inner.reverse());
    }
}), cc.EaseSineInOut.create = function(t) {
    var e = new cc.EaseSineInOut();
    return e && e.initWithAction(t), e;
}, cc.EaseElastic = cc.ActionEase.extend({
    _period: null,
    ctor: function() {
        cc.ActionEase.prototype.ctor.call(this), this._period = .3;
    },
    getPeriod: function() {
        return this._period;
    },
    setPeriod: function(t) {
        this._period = t;
    },
    initWithAction: function(t, e) {
        return cc.ActionEase.prototype.initWithAction.call(this, t), this._period = null == e ? .3 : e, 
        !0;
    },
    reverse: function() {
        return cc.Assert(0, "Override me"), null;
    },
    clone: function() {
        var t = new cc.EaseElastic();
        return t.initWithAction(this._inner.clone(), this._period), t;
    }
}), cc.EaseElastic.create = function(t, e) {
    var i = new cc.EaseElastic();
    return i && i.initWithAction(t, e) ? i : null;
}, cc.EaseElasticIn = cc.EaseElastic.extend({
    update: function(t) {
        var e = 0;
        if (0 === t || 1 === t) e = t; else {
            var i = this._period / 4;
            t -= 1, e = -Math.pow(2, 10 * t) * Math.sin((t - i) * Math.PI * 2 / this._period);
        }
        this._inner.update(e);
    },
    reverse: function() {
        return cc.EaseElasticOut.create(this._inner.reverse(), this._period);
    },
    clone: function() {
        var t = new cc.EaseElasticIn();
        return t.initWithAction(this._inner.clone(), this._period), t;
    }
}), cc.EaseElasticIn.create = function(t, e) {
    var i = new cc.EaseElasticIn();
    return i && i.initWithAction(t, e) ? i : null;
}, cc.EaseElasticOut = cc.EaseElastic.extend({
    update: function(t) {
        var e = 0;
        if (0 === t || 1 == t) e = t; else {
            var i = this._period / 4;
            e = Math.pow(2, -10 * t) * Math.sin((t - i) * Math.PI * 2 / this._period) + 1;
        }
        this._inner.update(e);
    },
    reverse: function() {
        return cc.EaseElasticIn.create(this._inner.reverse(), this._period);
    },
    clone: function() {
        var t = new cc.EaseElasticOut();
        return t.initWithAction(this._inner.clone(), this._period), t;
    }
}), cc.EaseElasticOut.create = function(t, e) {
    var i = new cc.EaseElasticOut();
    return i && i.initWithAction(t, e), i;
}, cc.EaseElasticInOut = cc.EaseElastic.extend({
    update: function(t) {
        var e = 0, i = this._period;
        if (0 === t || 1 == t) e = t; else {
            t = 2 * t, i || (i = this._period = .3 * 1.5);
            var n = i / 4;
            t -= 1, e = 0 > t ? -.5 * Math.pow(2, 10 * t) * Math.sin((t - n) * Math.PI * 2 / i) : Math.pow(2, -10 * t) * Math.sin((t - n) * Math.PI * 2 / i) * .5 + 1;
        }
        this._inner.update(e);
    },
    reverse: function() {
        return cc.EaseElasticInOut.create(this._inner.reverse(), this._period);
    },
    clone: function() {
        var t = new cc.EaseElasticInOut();
        return t.initWithAction(this._inner.clone(), this._period), t;
    }
}), cc.EaseElasticInOut.create = function(t, e) {
    var i = new cc.EaseElasticInOut();
    return i && i.initWithAction(t, e), i;
}, cc.EaseBounce = cc.ActionEase.extend({
    bounceTime: function(t) {
        return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? (t -= 1.5 / 2.75, 7.5625 * t * t + .75) : 2.5 / 2.75 > t ? (t -= 2.25 / 2.75, 
        7.5625 * t * t + .9375) : (t -= 2.625 / 2.75, 7.5625 * t * t + .984375);
    },
    clone: function() {
        var t = new cc.EaseBounce();
        return t.initWithAction(this._inner.clone()), t;
    },
    reverse: function() {
        return cc.EaseBounce.create(this._inner.reverse());
    }
}), cc.EaseBounce.create = function(t) {
    var e = new cc.EaseBounce();
    return e && e.initWithAction(t), e;
}, cc.EaseBounceIn = cc.EaseBounce.extend({
    update: function(t) {
        var e = 1 - this.bounceTime(1 - t);
        this._inner.update(e);
    },
    reverse: function() {
        return cc.EaseBounceOut.create(this._inner.reverse());
    },
    clone: function() {
        var t = new cc.EaseBounceIn();
        return t.initWithAction(this._inner.clone()), t;
    }
}), cc.EaseBounceIn.create = function(t) {
    var e = new cc.EaseBounceIn();
    return e && e.initWithAction(t), e;
}, cc.EaseBounceOut = cc.EaseBounce.extend({
    update: function(t) {
        var e = this.bounceTime(t);
        this._inner.update(e);
    },
    reverse: function() {
        return cc.EaseBounceIn.create(this._inner.reverse());
    },
    clone: function() {
        var t = new cc.EaseBounceOut();
        return t.initWithAction(this._inner.clone()), t;
    }
}), cc.EaseBounceOut.create = function(t) {
    var e = new cc.EaseBounceOut();
    return e && e.initWithAction(t), e;
}, cc.EaseBounceInOut = cc.EaseBounce.extend({
    update: function(t) {
        var e = 0;
        .5 > t ? (t = 2 * t, e = .5 * (1 - this.bounceTime(1 - t))) : e = .5 * this.bounceTime(2 * t - 1) + .5, 
        this._inner.update(e);
    },
    clone: function() {
        var t = new cc.EaseBounceInOut();
        return t.initWithAction(this._inner.clone()), t;
    },
    reverse: function() {
        return cc.EaseBounceInOut.create(this._inner.reverse());
    }
}), cc.EaseBounceInOut.create = function(t) {
    var e = new cc.EaseBounceInOut();
    return e && e.initWithAction(t), e;
}, cc.EaseBackIn = cc.ActionEase.extend({
    update: function(t) {
        var e = 1.70158;
        t = 0 === t || 1 == t ? t : t * t * ((e + 1) * t - e), this._inner.update(t);
    },
    reverse: function() {
        return cc.EaseBackOut.create(this._inner.reverse());
    },
    clone: function() {
        var t = new cc.EaseBackIn();
        return t.initWithAction(this._inner.clone()), t;
    }
}), cc.EaseBackIn.create = function(t) {
    var e = new cc.EaseBackIn();
    return e && e.initWithAction(t), e;
}, cc.EaseBackOut = cc.ActionEase.extend({
    update: function(t) {
        var e = 1.70158;
        t -= 1, this._inner.update(t * t * ((e + 1) * t + e) + 1);
    },
    reverse: function() {
        return cc.EaseBackIn.create(this._inner.reverse());
    },
    clone: function() {
        var t = new cc.EaseBackOut();
        return t.initWithAction(this._inner.clone()), t;
    }
}), cc.EaseBackOut.create = function(t) {
    var e = new cc.EaseBackOut();
    return e && e.initWithAction(t), e;
}, cc.EaseBackInOut = cc.ActionEase.extend({
    update: function(t) {
        var e = 2.5949095;
        t = 2 * t, 1 > t ? this._inner.update(t * t * ((e + 1) * t - e) / 2) : (t -= 2, 
        this._inner.update(t * t * ((e + 1) * t + e) / 2 + 1));
    },
    clone: function() {
        var t = new cc.EaseBackInOut();
        return t.initWithAction(this._inner.clone()), t;
    },
    reverse: function() {
        return cc.EaseBackInOut.create(this._inner.reverse());
    }
}), cc.EaseBackInOut.create = function(t) {
    var e = new cc.EaseBackInOut();
    return e && e.initWithAction(t), e;
}, cc.RESOURCE_TYPE = {
    IMAGE: [ "png", "jpg", "bmp", "jpeg", "gif" ],
    SOUND: [ "mp3", "ogg", "wav", "mp4", "m4a" ],
    XML: [ "plist", "xml", "fnt", "tmx", "tsx" ],
    BINARY: [ "ccbi" ],
    FONT: "FONT",
    TEXT: [ "txt", "vsh", "fsh", "json" ],
    UNKNOW: []
}, cc.Loader = cc.Class.extend({
    _curNumber: 0,
    _totalNumber: 0,
    _loadedNumber: 0,
    _resouces: null,
    _animationInterval: 1 / 60,
    _interval: null,
    _isAsync: !1,
    ctor: function() {
        this._resouces = [];
    },
    initWithResources: function(t, e, i) {
        if (cc.Assert(null != t, "resources should not null"), e && (this._selector = e, 
        this._target = i), t != this._resouces || 0 == this._curNumber) {
            if (this._curNumber = 0, this._loadedNumber = 0, t[0] instanceof Array) for (var n = 0; n < t.length; n++) {
                var r = t[n];
                this._resouces = this._resouces.concat(r);
            } else this._resouces = t;
            this._totalNumber = this._resouces.length;
        }
        this._schedulePreload();
    },
    setAsync: function(t) {
        this._isAsync = t;
    },
    onResLoadingErr: function(t) {
        cc.log("cocos2d:Failed loading resource: " + t);
    },
    onResLoaded: function() {
        this._loadedNumber++;
    },
    getPercentage: function() {
        var t = 0;
        return t = 0 == this._totalNumber ? 100 : 0 | this._loadedNumber / this._totalNumber * 100;
    },
    releaseResources: function(t) {
        if (t && t.length > 0) for (var e, i = cc.TextureCache.getInstance(), n = cc.AudioEngine.getInstance(), r = cc.SAXParser.getInstance(), c = cc.FileUtils.getInstance(), o = 0; o < t.length; o++) {
            e = t[o];
            var s = this._getResType(e);
            switch (s) {
              case "IMAGE":
                i.removeTextureForKey(e.src);
                break;

              case "SOUND":
                n.unloadEffect(e.src);
                break;

              case "XML":
                r.unloadPlist(e.src);
                break;

              case "BINARY":
                c.unloadBinaryFileData(e.src);
                break;

              case "TEXT":
                c.unloadTextFileData(e.src);
                break;

              case "FONT":
                this._unregisterFaceFont(e);
                break;

              default:
                throw "cocos2d:unknown filename extension: " + s;
            }
        }
    },
    _preload: function() {
        if (this._updatePercent(), this._isAsync) {
            var t = cc.Director.getInstance()._frameRate;
            if (null != t && 20 > t) return cc.log("cocos2d: frame rate less than 20 fps, skip frame."), 
            void 0;
        }
        this._curNumber < this._totalNumber && (this._loadOneResource(), this._curNumber++);
    },
    _loadOneResource: function() {
        var t = cc.TextureCache.getInstance(), e = cc.AudioEngine.getInstance(), i = cc.SAXParser.getInstance(), n = cc.FileUtils.getInstance(), r = this._resouces[this._curNumber], c = this._getResType(r);
        switch (c) {
          case "IMAGE":
            t.addImage(r.src);
            break;

          case "SOUND":
            e.preloadSound(r.src);
            break;

          case "XML":
            i.preloadPlist(r.src);
            break;

          case "BINARY":
            n.preloadBinaryFileData(r.src);
            break;

          case "TEXT":
            n.preloadTextFileData(r.src);
            break;

          case "FONT":
            this._registerFaceFont(r);
            break;

          default:
            throw "cocos2d:unknown filename extension: " + c;
        }
    },
    _schedulePreload: function() {
        var t = this;
        this._interval = setInterval(function() {
            t._preload();
        }, 1e3 * this._animationInterval);
    },
    _unschedulePreload: function() {
        clearInterval(this._interval);
    },
    _getResType: function(t) {
        var e = t.fontName;
        if (null != e) return cc.RESOURCE_TYPE.FONT;
        var i = t.src, n = i.substring(i.lastIndexOf(".") + 1, i.length), r = n.indexOf("?");
        r > 0 && (n = n.substring(0, r));
        for (var c in cc.RESOURCE_TYPE) if (-1 != cc.RESOURCE_TYPE[c].indexOf(n)) return c;
        return n;
    },
    _updatePercent: function() {
        var t = this.getPercentage();
        t >= 100 && (this._unschedulePreload(), this._complete());
    },
    _complete: function() {
        this._target && "string" == typeof this._selector ? this._target[this._selector](this) : this._target && "function" == typeof this._selector ? this._selector.call(this._target, this) : this._selector(this), 
        this._curNumber = 0, this._loadedNumber = 0, this._totalNumber = 0;
    },
    _registerFaceFont: function(t) {
        var e = t.src, i = cc.FileUtils.getInstance();
        if (e && e.length > 0) {
            var n = document.createElement("style");
            n.type = "text/css", document.body.appendChild(n);
            for (var r = "@font-face { font-family:" + t.fontName + "; src:", c = 0; c < e.length; c++) r += "url('" + i.fullPathForFilename(encodeURI(e[c].src)) + "') format('" + e[c].type + "')", 
            r += c == e.length - 1 ? ";" : ",";
            n.textContent += r + "};";
            var o = document.createElement("div");
            o.style.fontFamily = t.fontName, o.innerHTML = ".", o.style.position = "absolute", 
            o.style.left = "-100px", o.style.top = "-100px", document.body.appendChild(o);
        }
        cc.Loader.getInstance().onResLoaded();
    },
    _unregisterFaceFont: function() {}
}), cc.Loader.preload = function(t, e, i) {
    return this._instance || (this._instance = new cc.Loader()), this._instance.initWithResources(t, e, i), 
    this._instance;
}, cc.Loader.preloadAsync = function(t, e, i) {
    return this._instance || (this._instance = new cc.Loader()), this._instance.setAsync(!0), 
    this._instance.initWithResources(t, e, i), this._instance;
}, cc.Loader.purgeCachedData = function(t) {
    this._instance && this._instance.releaseResources(t);
}, cc.Loader.getInstance = function() {
    return this._instance || (this._instance = new cc.Loader()), this._instance;
}, cc.Loader._instance = null, cc.LoaderScene = cc.Scene.extend({
    _logo: null,
    _logoTexture: null,
    _texture2d: null,
    _bgLayer: null,
    _label: null,
    _winSize: null,
    ctor: function() {
        cc.Scene.prototype.ctor.call(this), this._winSize = cc.Director.getInstance().getWinSize();
    },
    init: function() {
        cc.Scene.prototype.init.call(this);
        var t = 160, e = 200, i = cc.p(this._winSize.width / 2, this._winSize.height / 2);
        this._logoTexture = new Image();
        var n = this;
        this._logoTexture.addEventListener("load", function() {
            n._initStage(i), this.removeEventListener("load", arguments.callee, !1);
        }), this._logoTexture.src = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAlAAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM4MDBEMDY2QTU1MjExRTFBQTAzQjEzMUNFNzMxRkQwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM4MDBEMDY1QTU1MjExRTFBQTAzQjEzMUNFNzMxRkQwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU2RTk0OEM4OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU2RTk0OEM5OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQADQkJCQoJDQoKDRMMCwwTFhENDREWGhUVFhUVGhkUFhUVFhQZGR0fIB8dGScnKionJzk4ODg5QEBAQEBAQEBAQAEODAwOEA4RDw8RFA4RDhQVERISERUfFRUXFRUfKB0ZGRkZHSgjJiAgICYjLCwoKCwsNzc1NzdAQEBAQEBAQEBA/8AAEQgAyACgAwEiAAIRAQMRAf/EALAAAAEFAQEAAAAAAAAAAAAAAAQAAgMFBgcBAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgUQAAIBAgIEBwoLBgQGAwAAAAECAwAEEQUhMRIGQVFxsTITFGGBwdEiQlKSMzWRoeFicqKyI1NzFYJjJDQWB9KjVCbxwkNkJWXik3QRAAIBAgMFBQcDBQEAAAAAAAABAhEDIRIEMUFRcTJhwVIUBZGhsSJyEzOB0ULhYpIjUxX/2gAMAwEAAhEDEQA/AMJSpUqAVKlXuFAeUq9wpUB5XuFe4V6ooDzZHDox0CnGMinzwl7Z8NajaHeoO3vmTBZBtp9YUIqTEV5ROxHKnWRnaU8VRMhFBUjpV7hSoSeUq9pUB5Sr2lhQHlKvcK8oBV7hSFSRrtaKAZs07YNPM1pG2xJIAw1jSeandry/8X4m8VCKkWwaWwam7Xl/4v1W8VLtmX/i/VbxUoKkWwakSM407tmX/i/VbxUmzGwjQsjdY41IARie/U0IbZO0kNtCXnOCkEBeFu4KI3Bs7DNb27ya+jDx3kJeEnpJJEcQVbWDsk17u5urd591ucZkWhym2Vnd9RkCDEpFxDRpbw0bunu5mlp2De2FMLYXOD2wB2xbOeraUcYGJ72mlSUiqzzdzMd3Z3mixltA2yzcK/NlHM1DQyRXce1HocdNOEfJXZ88y9ZojOqhiBszIRiHQ8Y4cK5TvHuzLljHNMqxNoDjLFraHHnjPxcNCGVbxEUzYNTx5jZSxhpW6qTzlwJ+DCvO2Zf+L9VvFSgqyHYNLYNTdssPxfibxUu15f8Ai/VPiqCakOwa82DU/a8v/F+JvFTDdWPBL8R8VKCvYRYV5UzoMAy6QdIIqI0B4KJtxiRQwou16QoGUkntH5Tz0RbZbmF2hktraSVBo2lUkY8tDye0flPPXTslVUyiyVRsjqUOA4yMT8dW2ram2m6UVTNq9S7EIyUVJydMTn/6DnP+im9Wl+g5z/opvVrpteEhQWY4AaSTwAVf5WPiZh/9S5/zj7zltzlmYWkfWXNvJDGTgGcYDHirR7i7mSbwXParsFMrgb7w6jKw/wCmnc9I14kF3vpvCljbMyWMOJL4aEiB8qU/ObUK7HYWVrl1pFZWiCOCBQqKOLjPGTrNZZqKbUXVHq2nNwTuJRk1VpbgXN8s7Rk5ym0UQQzhIG2NAjhxHWbI+gCBVjBBFbwxwQqEiiUJGg1BVGAFe7dV28WYLYZFmF2Th1UD7JGjymGyn1iK5OyzIBGB1HgrLZhamzumQAGJwSqnSCh1q3GOCodxt4cxurdcpzuN4cyhiWaF5Bg09udUmnWw1H/jV9nFuJ7Quo+8h8peThFA+047vduyMtk7fYqTl07YFdfUufMPzT5p71UdtlmYXaGS2t3mQHAsgxANdadYJopLe4QS2867EsZ4QfCNYrCFbjdDPmgkYyWFxgVf04ifJf6ScNdRUW1XBb6FU5TjF5EpSSrGu/s5lN+g5z/opvVpfoOc/wCim9WtdHnatvObJXDW7xLGhB8nrPaY9/HCr+tEdPCVaSeDoYLnqF63lzW4/PFSW3ecxbI84VSzWUwUaSdg0DXXK5nvAipnd6qgKvWnQO7pri9ZUEmm3Vl2j1kr8pRlFRyquBNZjGxQ/S56Y1S2fu9OVueon11Szahoou06QoQUXadIVCD2FJJ7R+U89dMydv8Axdn+TH9muZye0flPPXQstlK5Tbka1gUjlC1q0vVLkeb6r+O3Tx9xcY1nt8c0NrZCyiOE1108NYjGv1joo7Js1jzKyScYLIvkzL6LDwHXVJksH9Sb49dKNq0tj1jA6uriOCL+02FWX7iVtZX1/AzaHTyeoauKn2MX9W79zebiZCuR5MjSrhfXuEtwTrUeZH+yNfdrRNcxI6IzhXlJEak6WIGJ2Rw4ChWnChndtlVBLMdQA0k1gbXNMzzDfDLs6mjaPKppJbWwJ1bOwwxw43OnHh71YT3DpfWUJmFlb5jHHDdeXBHIsrRea5TSqvxqG04cNN62vetoCS4tre5mgnkGE9q+3DKOkuI2WX6LDQRRHWDh1UCtwj7QRg2wdl8Djgw1qe7XvW0BQ3kfZ7mSLgU+T9E6RVbnuVrnWVSWqj+Lt8ZbRuHEdKPkYVcZ2MJY5fSGyeVar45+rkWQHAqccalPE5km1htWK5nK4Wnt5FuUBUwOMG4nGkA/BXUrW4S6torlOjMgcd/xVn7rLo7zKs0uEjCNeSvdwoBhgsZxX1l2j36k3Lu+uyprdj5Vs5A+i/lD48a0aaVJOPi7jB6lbzWozpjB48pf1NDXNN4vfl7+Z4BXS65pvF78vfzPAK71XTHmZ/S/yT+jvJ7L3fHytz1E+upbL+Qj5W56jfXWRnsIYKLtekKEFGWvSFQgyjk9o/Keet3YthlMP/5x9msJJ7R+U89biyb/AMXEv7gD6tadL1T+kwepRrC39ZkLDMbiwMvUHRPG0bjlGg8ore/23sxBldxfMPLupNhT8yL/AORNZbdzJ484scytxgLqJY5LZj6Q2sV5G1Vud1mjjyG0ij0NEGSZToKyhjtqw4waztuiXA3qKTbSxltfGhbZlE95ZtZqxVbgiOZhrER9ph3Svk9+pJILZ4Y4DGBFCUMKjRsGPobPFhUfW0NJmljE2xJcIrcI2vFUEln1lRXd6lrazXT9GCNpD+yNqoI7mOVduNw6nzlOIoPOUa6yye1XXcbMR5GdQ3xY0BSbj31/FcTQZirJ+q431q7anbHCTZ72Bw7lbPrKBMcBWNNgbMBBh+bsjBdni0VJ1lARZs6yWiupxCuMDy6KpS2IwOo6DTr3Mre3e5tZZVUM4ZBjqOOJoWO4jkXajcOOMHGgDISvWIrdAkKR80+TzVl908bPPL3LzxOuHdifxVfiTAg92qI/w+/8gGgSyN/mR7XPVlp0lF/3L3mbVKtu5Hjbk/8AHE2Fc03i9+Xv5ngFdKNc13i9+Xv5ngFaNV0x5nn+l/kn9HeEWXu+PlbnqJ9dS2Xu9OVueon11kZ7CGCjLXpCgxRlr0hUIPYUcntH5Tz1s8vb+Bt1/dqPirGSe0flPPWusG/g4Py15q06XqlyMWvVYQ+ruI9xJOqzO9hOto/sP8tbGOFIrmWeM7IuMDMnAXXQJOUjQeOsJk0nY96ip0CYunrjaHx1t+srPJUbXBm2LrFPikwTOb+T+VhbZxGMrDXp83x1QSy2tucJpUjPETp+Cn5/ftaRvKvtp3Kx48HG3erHMzOxZiWZtLMdJNQSbbL71Vk6yynViOkqnEEfOWtPbXi3EQkGg6mXiNckjeSJxJGxR10qw0GtxuxmvbImD4CZMFlA4fRfv0BqesqqzTMZNMEDbIHtHH2QeCiZJSqMQdOGiue53mz3czQwsRbIcNHnkec3c4qAMuriz68gTIToxwOOnlp0MjxMJYW741Gs3RVldtbygE/dMcHX/moDaxTiWNZB53B3arb8/wC+4SOF4sf/AKxU9kcBsfOGHfoUHtG/RbzY5Die5HHhXdvavqiZ9Q8Jdlq4/gbKua7xe/L38zwCuhpf2Uk/Zo50kmwJKIdogDjw1VzzeL35e/meAVp1LTgqY4nn+mRauzqmqwrjzCLL3fHytz1E+upLL+Qj5W56jfXWRnroYKLtekKEFF2vSFQg9hSSe0flPPWosm/hIfoLzVl5PaPynnrRWb/w0X0F5q06XqlyM2sVYx5gmbFre/t71NY2T+0h8VbSO5SWNJUOKSAMp7jDGspmMPaLRlXS6eWve1/FRO7WYdbZm1Y/eW/R7qHxHRXGojlm3ulid6aVbaW+OALvgCLq2Hm9WxHKWqjhj6xsK1e8dm15l4niG1LZkswGsxtrPeOmsvayBJA1VItlWjptLuTdPMo7LtjRDq9naK4+WF9IrUW7BaHOljGqVHB7w2hzVoZt87d8vaNYSLl02CcRsDEbJbj71Uu7UBkvJ7/D7q2QoDxySaAO8MTXdxRVMpRp5XZOWdF/ms7R5XdyKfKWJsO/5PhrG5XlNxmEywW6bTnTxAAcJNbGSMXkM1pjgbiNo1PziPJ+Os7u7m/6ReM00ZOgxSpqYYHT3wRXMKN4ll9zUG4bQfNshu8sZVuEA2hirA4qe/VOwwrVbzbww5mI44UKRRYkbWG0S3JWctbd7u5WFfOOLHiUdJqmaipfLsIsObhWe001lMkMVvJNjhghIALMcBxCs7fxXQmkupx1bXDswGPlaTidVaEyKNXkoo4eBV+Sq7L7Vs9zcBgeyQ4GQ/MB1crmoim2orezqcowTuSeEY48jQ7oZX2PLzdyLhNd6RjrEY6I7+uspvH78vfzPAK6UAAAFGAGgAcArmu8Xvy9/M8ArTfio24RW5nnaG67uou3H/KPuqT2X8hHytz1G+upLL3enK3PUb66ys9RDBRdr0hQgou06QqEGUkntH5Tz1e238vF9BeaqKT2j8p56vbb+Xi+gvNWjTdUuRn1XTHmTh8KrJTJlt8t1CPIY44cGnpJVjTJYkmjaN9Ib4u7V923njTethRauZJV3PaW1rfLIiXEDYg6R4VYc9CXW7thfOZbKdbGZtLW8uPVY/u3GrkNUkM9zlcxUjbhfWOA90cRq4gv4LhdqN+VToNYWmnRm9NNVWNTyHc6VWBv8wt4YeHqm6xyPmroq1Z7WGFLSxTq7WLSuPSdjrkfumq5yHXDUeA92oO2SKpVumNAaoJLMXH3myp0rpJ4uKhc3tbDM5BMri1zAj79j7KTiY8TcdBpcsith0286o+sPCagEX9Pzg4zXUCp6QYse8oouCG3tk6m1BYv05W6T+IdyolxbHDAAa2OgDlNCz3ryN2WxBd5PJMg1t81eId2ukqnLlTBbfcuY+9uJLiRcvtPvHdsHK+cfRHcHDWsyawjyy0WBcDI3lTP6TeIcFV+S5OmXx9bJg1048o8Cj0V8Jq2DVu09nL80up7OxHi+oal3P8AXB/IsZS8T/YOV65zvCcc7vfzPAK3ivWCz445zeH954BXOr6I8yfSfyz+jvCLP3fHytz1G+upLP3fHytz1E+usbPaQ0UXadIUIKLtekKhB7Ckk9o/Keer22/l4/oLzVRSe0flPPV7b/y8X0F5q0abqlyM+q6Y8yQsBTDMor1o8aiaE1pbluMqS3sbLLHIhSRQyngqukhaJ9uBjo+H5aOa3ao2t34qouRlLajTalGP8v0IY8ylXQ+PKPFU/bYXOLPge6CKia0LaxTOxHu1Q7cuBd9yPEJ7TbjXKO8CajbMIF6CNIeNvJHjqIWJ7tSpYkalqVblwIdyG+RGXur0hXYJFxal+Dhq5y3slkv3Y2pD0pTr+QUClpJRUdo9XW4OLrTHtM16cZLLWkeC7y4jvlNEpcRtw1Ux27Ci448NZrTFy3nn3IQWxlgGrDZ3pza7/M8ArZo+ArF5171uvp+CqdV0R5l/psUrs2vB3hdl7vTlbnqJ9dS2Xu+PlbnqJ9dY2eshooq16QoQUXa9IVCD2FLJ7RuU89WNtmUSQqkgYMgw0accKrpPaPynnrZWG4Vi+VWmY5tnMWXG+XrIYnA0rhj0mdcTgdNdwnKDqjmduM1SRR/qlr8/4KX6pa8T/BVzDuLZXudRZblmbxXcPUNPc3KqCIwrbOzgrHEnHjoyD+3eSXkht7DeKG4umDGOJVUklfouThXfmbnZ7Cvy1vt9pmv1W1+d8FL9VteJvgq5yrcOGfLmzHN80iyyETPbptAEFo2ZG8pmUa1OFNn3Ky6W/sbDKM5hv5bx2WTZA+7RF2y52WOPJTzE+z2Dy1vt9pT/AKpacTerS/U7Tib1a04/t7kDXPY03jhN0W6sQ7K7W3q2dnrMccaDy/8At80kuZfqWYxWNtlcvUPPhiGYhWDeUy7IwYU8xPs9g8tb7faUn6pacTerTxm9oOBvVq3v9z927aynuId44LiWKNnjhAXF2UYhRg516qpsryjLr21665zFLSTaK9U2GOA87SwqY37knRU+BzOzags0s1Oyr+BKM6sxwP6tSDPLMen6vy0rvdm3Sxlu7K/S7WDDrFUDUTxgnTU826eXW7KlxmqQuwDBXUKcD+1Xee/wXuKX5XDGWLapSVcOyhEM/seJ/V+WnjeGx4pPV+Wkm6kKZlFay3Jlt7iFpYZY8ASVK6DjtDDA0f8A0Tl340/1f8Ndx8xJVWXB0KbktFFpNzdVXAC/qOwA0CQni2flrO3Vwbm5lnI2TKxbDirX/wBE5d+NcfV/wVR7xZPa5U9utvI8nWhmbbw0YEAYYAVxfhfy5rlKR4Fulu6X7mW1mzT8S4Yis/5CPlbnqJ9dSWfu9OVueon11mZvQ2i7XpChKKtekKhBlNJ7R+U89bDfGTb3a3ZX0Lcj6kdY+T2j8p560288m1kWQr6MJ+ylSAr+2cnV5renjs3H1loX+3j9XvbbtxLN9lqW4UnV5jdnjtXHxihtyZNjeSBu5J9k1BJe7xy7W5CJ/wCzuD/mTVTf2+fq97LJuLrPsNRueS7W6aJ/38x+vLVXuY+xvHaNxbf2GoCezf8A36j/APsSf8w1sLnqczTefJluYoLm5uo5F61sBshItP1cNFYe1f8A3ir/APfE/wCZUe9bB94r5jwuPsrQFhmG4l/Z2M17HdW90tuu3IkTHaCjWdIw0VVZdks9/C06yJFEp2dp+E1bbqybGTZ8vpQD7L1XRv8A7blT96Oda7tpNuuNE37Cq9KSisjyuUoxrStKllHbLlWTXsMs8chuSuwEPDqwoLe5y+YRE/gLzmqRekvKKtd4327yM/ulHxmrHJStySWVRyrjxKI2XC/CTlnlPPKTpTdFbP0L1bgrf5Lp0G3dPhQHwV0S1lzBsns3sESR8Crh9WAJGjSOKuU3E+zdZQ3oJh8IArdZXFDmOTpHa3i2+YrI2KtKy4ricBsBuHHgFXSo440+Wa2qqxjvM9uMoy+WvzWpLCWWWE28HxL6e43ojgkeSCBY1Ri5BGIUDT51cl3vm276BBqSEH4WbxV0tlkyXJcxTMb+OW6uY9mGHrCzDQwwAbTp2uKuTZ9N1uYsfRRR8WPhrm419mSSjRyiqxVK7y23B/ftuTm2oSdJyzNVw3BFn7vTlbnqF9dS2fu9OVueon11lZuQ2iLdsGFD05H2dNQGV0ntG5Tz1dWm9N1b2kVq8EVwsI2UaQaQOKhmitZGLOmk68DhSFvY+gfWNSAg7z3Qvo7yKCKIohiaNR5LKxx8qpxvjcqS0VpbxvwOAcRQPZ7D0G9Y0uz2HoH1jUCpLY7zXlpbm3eKO5QuzjrBqZji3x17PvNcyT288VvDBJbMWUovS2hslW7mFQ9nsPQPrGl2ew9A+saCod/WNxtbYsrfb17WBxx5ddD2281xC88klvDcSXEnWuzrqOGGC9zRUPZ7D0G9Y0uzWHoH1jQVCLreq6ntZbaO3it1mGy7RjTs1X2mYy20ZiCq8ZOODcdEdmsPQb1jS7PYegfWNdJuLqnQiSUlRqpFLmryxtH1Ma7Qw2gNNPOdSt0oI27p007s9h6B9Y0uz2HoH1jXX3Z+I4+1b8IJdX89xLHKQFMXQUahpxoiPN5P+onfU+A0/s9h6DesaXZ7D0D6xpG7OLbUtu0StW5JJx2bBsmbtiSiEk+cxoCWWSaVpZOk2vDVo0VYdnsPQb1jSNvZcCH1jSd2c+p1XAmFqEOmOPEfaH+BQd1ueo211IzrgFUYKNAAqI1WztCpUqVCRUqVKgFSpUqAVKlSoBUqVKgFSpUqAVKlSoBUqVKgFSpUqAVKlSoD/9k=", 
        this._logoTexture.width = t, this._logoTexture.height = e, this._bgLayer = cc.LayerColor.create(cc.c4(32, 32, 32, 255)), 
        this._bgLayer.setPosition(0, 0), this.addChild(this._bgLayer, 0), this._label = cc.LabelTTF.create("Loading... 0%", "Arial", 14), 
        this._label.setColor(cc.c3(180, 180, 180)), this._label.setOpacity(0), this._label.setPosition(cc.pAdd(i, cc.p(0, -e / 2 - 10))), 
        this._bgLayer.addChild(this._label, 10);
    },
    _initStage: function(t) {
        this._texture2d = new cc.Texture2D(), this._texture2d.initWithElement(this._logoTexture), 
        this._texture2d.handleLoadedTexture(), this._logo = cc.Sprite.createWithTexture(this._texture2d), 
        this._logo.setPosition(t), this._bgLayer.addChild(this._logo, 10), this._logoFadeIn();
    },
    onEnter: function() {
        cc.Node.prototype.onEnter.call(this), this.schedule(this._startLoading, .3);
    },
    onExit: function() {
        cc.Node.prototype.onExit.call(this);
        var t = "Loading... 0%";
        this._label.setString(t);
    },
    initWithResources: function(t, e, i) {
        this.resources = t, this.selector = e, this.target = i;
    },
    _startLoading: function() {
        this.unschedule(this._startLoading), cc.Loader.preload(this.resources, this.selector, this.target), 
        this.schedule(this._updatePercent);
    },
    _logoFadeIn: function() {
        var t = cc.Spawn.create(cc.EaseBounce.create(cc.MoveBy.create(.25, cc.p(0, 10))), cc.FadeIn.create(.5)), e = cc.Sequence.create(cc.DelayTime.create(.15), t.clone());
        this._logo.runAction(t), this._label.runAction(e);
    },
    _updatePercent: function() {
        var t = cc.Loader.getInstance().getPercentage(), e = "Loading... " + t + "%";
        this._label.setString(e), t >= 100 && this.unschedule(this._updatePercent);
    }
}), cc.LoaderScene.preload = function(t, e, i) {
    this._instance || (this._instance = new cc.LoaderScene(), this._instance.init()), 
    this._instance.initWithResources(t, e, i);
    var n = cc.Director.getInstance();
    return n.getRunningScene() ? n.replaceScene(this._instance) : n.runWithScene(this._instance), 
    this._instance;
}, cc.Camera = cc.Class.extend({
    _eyeX: null,
    _eyeY: null,
    _eyeZ: null,
    _centerX: null,
    _centerY: null,
    _centerZ: null,
    _upX: null,
    _upY: null,
    _upZ: null,
    _dirty: null,
    _lookupMatrix: null,
    ctor: function() {
        this._lookupMatrix = new cc.kmMat4(), this.restore();
    },
    description: function() {
        return "<CCCamera | center =(" + this._centerX + "," + this._centerY + "," + this._centerZ + ")>";
    },
    setDirty: function(t) {
        this._dirty = t;
    },
    isDirty: function() {
        return this._dirty;
    },
    restore: function() {
        this._eyeX = this._eyeY = 0, this._eyeZ = cc.Camera.getZEye(), this._centerX = this._centerY = this._centerZ = 0, 
        this._upX = 0, this._upY = 1, this._upZ = 0, cc.kmMat4Identity(this._lookupMatrix), 
        this._dirty = !1;
    },
    locate: function() {
        if (this._dirty) {
            var t = new cc.kmVec3(), e = new cc.kmVec3(), i = new cc.kmVec3();
            cc.kmVec3Fill(t, this._eyeX, this._eyeY, this._eyeZ), cc.kmVec3Fill(e, this._centerX, this._centerY, this._centerZ), 
            cc.kmVec3Fill(i, this._upX, this._upY, this._upZ), cc.kmMat4LookAt(this._lookupMatrix, t, e, i), 
            this._dirty = !1;
        }
        cc.kmGLMultMatrix(this._lookupMatrix);
    },
    setEyeXYZ: function(t, e, i) {
        this.setEye(t, e, i);
    },
    setEye: function(t, e, i) {
        this._eyeX = t, this._eyeY = e, this._eyeZ = i, this._dirty = !0;
    },
    setCenterXYZ: function(t, e, i) {
        this.setCenter(t, e, i);
    },
    setCenter: function(t, e, i) {
        this._centerX = t, this._centerY = e, this._centerZ = i, this._dirty = !0;
    },
    setUpXYZ: function(t, e, i) {
        this.setUp(t, e, i);
    },
    setUp: function(t, e, i) {
        this._upX = t, this._upY = e, this._upZ = i, this._dirty = !0;
    },
    getEyeXYZ: function() {
        return {
            x: this._eyeX,
            y: this._eyeY,
            z: this._eyeZ
        };
    },
    getEye: function() {
        return {
            x: this._eyeX,
            y: this._eyeY,
            z: this._eyeZ
        };
    },
    getCenterXYZ: function() {
        return {
            x: this._centerX,
            y: this._centerY,
            z: this._centerZ
        };
    },
    getCenter: function() {
        return {
            x: this._centerX,
            y: this._centerY,
            z: this._centerZ
        };
    },
    getUpXYZ: function() {
        return {
            x: this._upX,
            y: this._upY,
            z: this._upZ
        };
    },
    getUp: function() {
        return {
            x: this._upX,
            y: this._upY,
            z: this._upZ
        };
    },
    _DISALLOW_COPY_AND_ASSIGN: function() {}
}), cc.Camera.getZEye = function() {
    return cc.FLT_EPSILON;
}, cc.HashElement = cc.Class.extend({
    actions: null,
    target: null,
    actionIndex: 0,
    currentAction: null,
    currentActionSalvaged: !1,
    paused: !1,
    hh: null,
    ctor: function() {
        this.actions = [], this._target = null, this.actionIndex = 0, this.currentAction = null, 
        this.currentActionSalvaged = !1, this.paused = !1, this.hh = null;
    }
}), cc.ActionManager = cc.Class.extend({
    _targets: null,
    _currentTarget: null,
    _currentTargetSalvaged: !1,
    _searchElementByTarget: function(t, e) {
        for (var i = 0; i < t.length; i++) if (e == t[i].target) return t[i];
        return null;
    },
    ctor: function() {
        this._targets = [], this._currentTarget = null, this._currentTargetSalvaged = !1;
    },
    addAction: function(t, e, i) {
        cc.Assert(null != t, "no action"), cc.Assert(null != e, "");
        var n = this._searchElementByTarget(this._targets, e);
        n || (n = new cc.HashElement(), n.paused = i, n.target = e, this._targets.push(n)), 
        this._actionAllocWithHashElement(n), n.actions.push(t), t.startWithTarget(e);
    },
    removeAllActions: function() {
        for (var t = this._targets, e = 0; e < t.length; e++) {
            var i = t[e];
            i && this.removeAllActionsFromTarget(i.target, !0);
        }
    },
    removeAllActionsFromTarget: function(t, e) {
        if (null != t) {
            var i = this._searchElementByTarget(this._targets, t);
            i && (-1 === i.actions.indexOf(i.currentAction) || i.currentActionSalvaged || (i.currentActionSalvaged = !0), 
            i.actions = [], this._currentTarget != i || e ? this._deleteHashElement(i) : this._currentTargetSalvaged = !0);
        }
    },
    removeAction: function(t) {
        if (null != t) {
            var e = t.getOriginalTarget(), i = this._searchElementByTarget(this._targets, e);
            if (i) {
                for (var n = 0; n < i.actions.length; n++) if (i.actions[n] == t) {
                    i.actions.splice(n, 1);
                    break;
                }
            } else cc.log("cocos2d: removeAction: Target not found");
        }
    },
    removeActionByTag: function(t, e) {
        cc.Assert(t != cc.ACTION_TAG_INVALID, ""), cc.Assert(null != e, "");
        var i = this._searchElementByTarget(this._targets, e);
        if (i) for (var n = i.actions.length, r = 0; n > r; ++r) {
            var c = i.actions[r];
            if (c && c.getTag() === t && c.getOriginalTarget() == e) {
                this._removeActionAtIndex(r, i);
                break;
            }
        }
    },
    getActionByTag: function(t, e) {
        cc.Assert(t != cc.ACTION_TAG_INVALID, "");
        var i = this._searchElementByTarget(this._targets, e);
        if (i) {
            if (null != i.actions) for (var n = 0; n < i.actions.length; ++n) {
                var r = i.actions[n];
                if (r && r.getTag() === t) return r;
            }
            cc.log("cocos2d : getActionByTag(tag =" + t + "): Action not found");
        }
        return null;
    },
    numberOfRunningActionsInTarget: function(t) {
        var e = this._searchElementByTarget(this._targets, t);
        return e ? e.actions ? e.actions.length : 0 : 0;
    },
    pauseTarget: function(t) {
        var e = this._searchElementByTarget(this._targets, t);
        e && (e.paused = !0);
    },
    resumeTarget: function(t) {
        var e = this._searchElementByTarget(this._targets, t);
        e && (e.paused = !1);
    },
    pauseAllRunningActions: function() {
        for (var t = [], e = this._targets, i = 0; i < e.length; i++) {
            var n = e[i];
            n && !n.paused && (n.paused = !0, t.push(n.target));
        }
        return t;
    },
    resumeTargets: function(t) {
        if (t) for (var e = 0; e < t.length; e++) t[e] && this.resumeTarget(t[e]);
    },
    purgeSharedManager: function() {
        cc.Director.getInstance().getScheduler().unscheduleUpdateForTarget(this);
    },
    _removeActionAtIndex: function(t, e) {
        var i = e.actions[t];
        i != e.currentAction || e.currentActionSalvaged || (e.currentActionSalvaged = !0), 
        cc.ArrayRemoveObjectAtIndex(e.actions, t), e.actionIndex >= t && e.actionIndex--, 
        0 == e.actions.length && (this._currentTarget == e ? this._currentTargetSalvaged = !0 : this._deleteHashElement(e));
    },
    _deleteHashElement: function(t) {
        cc.ArrayRemoveObject(this._targets, t), t && (t.actions = null, t.target = null);
    },
    _actionAllocWithHashElement: function(t) {
        null == t.actions && (t.actions = []);
    },
    update: function(t) {
        for (var e, i = this._targets, n = 0; n < i.length; n++) {
            if (this._currentTarget = i[n], e = this._currentTarget, !e.paused) for (e.actionIndex = 0; e.actionIndex < e.actions.length; e.actionIndex++) if (e.currentAction = e.actions[e.actionIndex], 
            e.currentAction) {
                if (e.currentActionSalvaged = !1, e.currentAction.step(t), e.currentActionSalvaged) e.currentAction = null; else if (e.currentAction.isDone()) {
                    e.currentAction.stop();
                    var r = e.currentAction;
                    e.currentAction = null, this.removeAction(r);
                }
                e.currentAction = null;
            }
            this._currentTargetSalvaged && 0 === e.actions.length && this._deleteHashElement(e);
        }
    }
}), cc.TouchSelectorBeganBit = 1, cc.TouchSelectorMovedBit = 2, cc.TouchSelectorEndedBit = 4, 
cc.TouchSelectorCancelledBit = 8, cc.TouchSelectorAllBits = cc.TouchSelectorBeganBit | cc.TouchSelectorMovedBit | cc.TouchSelectorEndedBit | cc.TouchSelectorCancelledBit, 
cc.TOUCH_BEGAN = 0, cc.TOUCH_MOVED = 1, cc.TOUCH_ENDED = 2, cc.TOUCH_CANCELLED = 3, 
cc.TouchMax = 4, cc.less = function(t, e) {
    return t.getPriority() > e.getPriority();
}, cc.TouchHandlerHelperData = function(t) {
    this.type = t;
}, cc.TouchDispatcher = cc.Class.extend({
    _mousePressed: !1,
    _targetedHandlers: null,
    _standardHandlers: null,
    _locked: !1,
    _toAdd: !1,
    _toRemove: !1,
    _handlersToAdd: null,
    _handlersToRemove: null,
    _toQuit: !1,
    _dispatchEvents: !1,
    _handlerHelperData: [ new cc.TouchHandlerHelperData(cc.TOUCH_BEGAN), new cc.TouchHandlerHelperData(cc.TOUCH_MOVED), new cc.TouchHandlerHelperData(cc.TOUCH_ENDED), new cc.TouchHandlerHelperData(cc.TOUCH_CANCELLED) ],
    init: function() {
        return this._dispatchEvents = !0, this._targetedHandlers = [], this._standardHandlers = [], 
        this._handlersToAdd = [], this._handlersToRemove = [], this._toRemove = !1, this._toAdd = !1, 
        this._toQuit = !1, this._locked = !1, this._mousePressed = !1, cc.TouchDispatcher.registerHtmlElementEvent(cc.canvas), 
        !0;
    },
    _setMousePressed: function(t) {
        this._mousePressed = t;
    },
    _getMousePressed: function() {
        return this._mousePressed;
    },
    isDispatchEvents: function() {
        return this._dispatchEvents;
    },
    setDispatchEvents: function(t) {
        this._dispatchEvents = t;
    },
    _addStandardDelegate: function(t, e) {
        e = e || 0;
        var i = cc.StandardTouchHandler.create(t, e);
        if (this._locked) {
            if (-1 != this._handlersToRemove.indexOf(t)) return cc.ArrayRemoveObject(this._handlersToRemove, t), 
            void 0;
            this._handlersToAdd.push(i), this._toAdd = !0;
        } else this._standardHandlers = this.forceAddHandler(i, this._standardHandlers);
    },
    _addTargetedDelegate: function(t, e, i) {
        var n = cc.TargetedTouchHandler.create(t, e, i);
        if (this._locked) {
            if (-1 != this._handlersToRemove.indexOf(t)) return cc.ArrayRemoveObject(this._handlersToRemove, t), 
            void 0;
            this._handlersToAdd.push(n), this._toAdd = !0;
        } else this._targetedHandlers = this.forceAddHandler(n, this._targetedHandlers);
    },
    forceAddHandler: function(t, e) {
        for (var i, n = 0, r = 0; r < e.length; r++) if (i = e[r], i && (i.getPriority() < t.getPriority() && ++n, 
        i.getDelegate() == t.getDelegate())) return cc.Assert(0, "The handler has been added."), 
        e;
        return cc.ArrayAppendObjectToIndex(e, t, n);
    },
    forceRemoveAllDelegates: function() {
        this._standardHandlers.length = 0, this._targetedHandlers.length = 0;
    },
    _removeDelegate: function(t) {
        if (null != t) if (this._locked) {
            var e = this.findHandler(this._handlersToAdd, t);
            if (e) return cc.ArrayRemoveObject(this._handlersToAdd, e), void 0;
            this._handlersToRemove.push(t), this._toRemove = !0;
        } else this.forceRemoveDelegate(t);
    },
    removeAllDelegates: function() {
        this._locked ? this._toQuit = !0 : this.forceRemoveAllDelegates();
    },
    setPriority: function(t, e) {
        cc.Assert(null != e, "TouchDispatcher.setPriority():Arguments is null");
        var i = this.findHandler(e);
        cc.Assert(null != i, "TouchDispatcher.setPriority():Cant find TouchHandler"), i.getPriority() != t && (i.setPriority(t), 
        this.rearrangeHandlers(this._targetedHandlers), this.rearrangeHandlers(this._standardHandlers));
    },
    touches: function(t, e, i) {
        cc.Assert(i >= 0 && 4 > i, "TouchDispatcher.touches()"), this._locked = !0;
        var n = this._targetedHandlers.length, r = this._standardHandlers.length, c = n && r, o = c ? t.slice() : t, s = this._handlerHelperData[i];
        if (n > 0) for (var a, h, u, l = 0; l < t.length; l++) {
            a = t[l];
            for (var _ = 0; _ < this._targetedHandlers.length && (h = this._targetedHandlers[_], 
            h); _++) {
                if (u = !1, i == cc.TOUCH_BEGAN) h.getDelegate().onTouchBegan && (u = h.getDelegate().onTouchBegan(a, e), 
                u && h.getClaimedTouches().push(a)); else if (h.getClaimedTouches().length > 0) switch (u = !0, 
                s.type) {
                  case cc.TOUCH_MOVED:
                    cc.Browser.isMobile ? h.getDelegate().onTouchMoved && h.getDelegate().onTouchMoved(a, e) : this._mousePressed && h.getDelegate().onTouchMoved && h.getDelegate().onTouchMoved(a, e);
                    break;

                  case cc.TOUCH_ENDED:
                    h.getDelegate().onTouchEnded && h.getDelegate().onTouchEnded(a, e), h.getClaimedTouches().length = 0;
                    break;

                  case cc.TOUCH_CANCELLED:
                    h.getDelegate().onTouchCancelled && h.getDelegate().onTouchCancelled(a, e), h.getClaimedTouches().length = 0;
                }
                if (u && h.isSwallowsTouches()) {
                    c && cc.ArrayRemoveObject(o, a);
                    break;
                }
            }
        }
        if (r > 0) for (l = 0; l < this._standardHandlers.length && (h = this._standardHandlers[l], 
        h); l++) switch (s.type) {
          case cc.TOUCH_BEGAN:
            o.length > 0 && h.getDelegate().onTouchesBegan && h.getDelegate().onTouchesBegan(o, e);
            break;

          case cc.TOUCH_MOVED:
            o.length > 0 && (cc.Browser.isMobile ? h.getDelegate().onTouchesMoved && h.getDelegate().onTouchesMoved(o, e) : this._mousePressed && h.getDelegate().onTouchesMoved && h.getDelegate().onTouchesMoved(o, e));
            break;

          case cc.TOUCH_ENDED:
            h.getDelegate().onTouchesEnded && h.getDelegate().onTouchesEnded(o, e);
            break;

          case cc.TOUCH_CANCELLED:
            h.getDelegate().onTouchesCancelled && h.getDelegate().onTouchesCancelled(o, e);
        }
        if (c && (o = null), this._locked = !1, this._toRemove) {
            for (this._toRemove = !1, l = 0; l < this._handlersToRemove.length; l++) this.forceRemoveDelegate(this._handlersToRemove[l]);
            this._handlersToRemove.length = 0;
        }
        if (this._toAdd) {
            for (this._toAdd = !1, l = 0; l < this._handlersToAdd.length && (h = this._handlersToAdd[l], 
            h); l++) h instanceof cc.TargetedTouchHandler ? this._targetedHandlers = this.forceAddHandler(h, this._targetedHandlers) : this._standardHandlers = this.forceAddHandler(h, this._standardHandlers);
            this._handlersToAdd.length = 0;
        }
        this._toQuit && (this._toQuit = !1, this.forceRemoveAllDelegates());
    },
    touchesBegan: function(t, e) {
        this._dispatchEvents && this.touches(t, e, cc.TOUCH_BEGAN);
    },
    touchesMoved: function(t, e) {
        this._dispatchEvents && this.touches(t, e, cc.TOUCH_MOVED);
    },
    touchesEnded: function(t, e) {
        this._dispatchEvents && this.touches(t, e, cc.TOUCH_ENDED);
    },
    touchesCancelled: function(t, e) {
        this._dispatchEvents && this.touches(t, e, cc.TOUCH_CANCELLED);
    },
    findHandler: function(t, e) {
        switch (arguments.length) {
          case 1:
            e = arguments[0];
            for (var i = 0; i < this._targetedHandlers.length; i++) if (this._targetedHandlers[i].getDelegate() == e) return this._targetedHandlers[i];
            for (i = 0; i < this._standardHandlers.length; i++) if (this._standardHandlers[i].getDelegate() == e) return this._standardHandlers[i];
            return null;

          case 2:
            for (cc.Assert(null != t && null != e, "TouchDispatcher.findHandler():Arguments is null"), 
            i = 0; i < t.length; i++) if (t[i].getDelegate() == e) return t[i];
            return null;

          default:
            throw "Argument must be non-nil ";
        }
    },
    forceRemoveDelegate: function(t) {
        for (var e, i = 0; i < this._standardHandlers.length; i++) if (e = this._standardHandlers[i], 
        e && e.getDelegate() == t) {
            cc.ArrayRemoveObject(this._standardHandlers, e);
            break;
        }
        for (i = 0; i < this._targetedHandlers.length; i++) if (e = this._targetedHandlers[i], 
        e && e.getDelegate() == t) {
            cc.ArrayRemoveObject(this._targetedHandlers, e);
            break;
        }
    },
    rearrangeHandlers: function(t) {
        t.sort(cc.less);
    }
}), cc.TouchDispatcher.preTouchPoint = cc.p(0, 0), cc.TouchDispatcher.isRegisterEvent = !1, 
cc.getHTMLElementPosition = function(t) {
    var e = document.documentElement, i = window, n = null;
    return n = "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : t instanceof HTMLCanvasElement ? {
        left: 0,
        top: 0,
        width: t.width,
        height: t.height
    } : {
        left: 0,
        top: 0,
        width: parseInt(t.style.width),
        height: parseInt(t.style.height)
    }, {
        left: n.left + i.pageXOffset - e.clientLeft,
        top: n.top + i.pageYOffset - e.clientTop,
        width: n.width,
        height: n.height
    };
}, cc.ProcessMouseupEvent = function(t, e) {
    var i, n, r = cc.getHTMLElementPosition(t);
    null != e.pageX ? (i = e.pageX, n = e.pageY) : (r.left -= document.body.scrollLeft, 
    r.top -= document.body.scrollTop, i = e.clientX, n = e.clientY);
    var c = cc.EGLView.getInstance().convertToLocationInView(i, n, r), o = new cc.Touch(c.x, c.y);
    o._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y), 
    cc.TouchDispatcher.preTouchPoint.x = c.x, cc.TouchDispatcher.preTouchPoint.y = c.y;
    var s = [];
    s.push(o), cc.EGLView.getInstance().touchesEnded(s, null);
}, cc.TouchDispatcher.registerHtmlElementEvent = function(t) {
    if (!cc.TouchDispatcher.isRegisterEvent) {
        if (cc.Browser.isMobile) if (window.navigator.msPointerEnabled) {
            var e = {
                MSPointerDown: "touchesBegan",
                MSPointerMove: "touchesMoved",
                MSPointerUp: "touchesEnded",
                MSPointerCancel: "touchesCancelled"
            };
            for (var i in e) !function(e, i) {
                t.addEventListener(e, function(e) {
                    var n = cc.getHTMLElementPosition(t);
                    n.left -= document.body.scrollLeft, n.top -= document.body.scrollTop;
                    var r, c, o;
                    r = e.clientX, c = e.clientY;
                    var s = cc.EGLView.getInstance().convertToLocationInView(r, c, n), o = new cc.Touch(s.x, s.y);
                    o._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y), 
                    cc.TouchDispatcher.preTouchPoint.x = s.x, cc.TouchDispatcher.preTouchPoint.y = s.y, 
                    cc.Director.getInstance().getTouchDispatcher()[i]([ o ], null), e.stopPropagation(), 
                    e.preventDefault();
                }, !1);
            }(i, e[i]);
        } else t.addEventListener("touchstart", function(e) {
            if (e.changedTouches) {
                var i = [], n = cc.getHTMLElementPosition(t);
                n.left -= document.body.scrollLeft, n.top -= document.body.scrollTop;
                for (var r, c, o, s, a, h = e.changedTouches.length, u = 0; h > u; u++) if (r = e.changedTouches[u]) {
                    c = r.clientX, o = r.clientY;
                    var l = cc.EGLView.getInstance().convertToLocationInView(c, o, n);
                    s = null, r.hasOwnProperty("identifier") ? (s = new cc.Touch(l.x, l.y, r.identifier), 
                    a = cc.TouchDispatcher._getPreTouch(s).getLocation(), s._setPrevPoint(a.x, a.y), 
                    cc.TouchDispatcher._setPreTouch(s)) : (s = new cc.Touch(l.x, l.y), s._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y)), 
                    cc.TouchDispatcher.preTouchPoint.x = l.x, cc.TouchDispatcher.preTouchPoint.y = l.y, 
                    i.push(s);
                }
                cc.EGLView.getInstance().touchesBegan(i, null), e.stopPropagation(), e.preventDefault();
            }
        }, !1), t.addEventListener("touchmove", function(e) {
            if (e.changedTouches) {
                var i = [], n = cc.getHTMLElementPosition(t);
                n.left -= document.body.scrollLeft, n.top -= document.body.scrollTop;
                for (var r, c, o, s, a, h = e.changedTouches.length, u = 0; h > u; u++) if (r = e.changedTouches[u]) {
                    c = r.clientX, o = r.clientY;
                    var l = cc.EGLView.getInstance().convertToLocationInView(c, o, n);
                    s = null, r.hasOwnProperty("identifier") ? (s = new cc.Touch(l.x, l.y, r.identifier), 
                    a = cc.TouchDispatcher._getPreTouch(s).getLocation(), s._setPrevPoint(a.x, a.y), 
                    cc.TouchDispatcher._setPreTouch(s)) : (s = new cc.Touch(l.x, l.y), s._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y)), 
                    cc.TouchDispatcher.preTouchPoint.x = l.x, cc.TouchDispatcher.preTouchPoint.y = l.y, 
                    i.push(s);
                }
                cc.EGLView.getInstance().touchesMoved(i, null), e.stopPropagation(), e.preventDefault();
            }
        }, !1), t.addEventListener("touchend", function(e) {
            if (e.changedTouches) {
                var i = [], n = cc.getHTMLElementPosition(t);
                n.left -= document.body.scrollLeft, n.top -= document.body.scrollTop;
                for (var r, c, o, s, a, h = e.changedTouches.length, u = 0; h > u; u++) if (r = e.changedTouches[u]) {
                    c = r.clientX, o = r.clientY;
                    var l = cc.EGLView.getInstance().convertToLocationInView(c, o, n);
                    s = null, r.hasOwnProperty("identifier") ? (s = new cc.Touch(l.x, l.y, r.identifier), 
                    a = cc.TouchDispatcher._getPreTouch(s).getLocation(), s._setPrevPoint(a.x, a.y), 
                    cc.TouchDispatcher._deletePreTouchWithSameId(s)) : (s = new cc.Touch(l.x, l.y), 
                    s._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y)), 
                    cc.TouchDispatcher.preTouchPoint.x = l.x, cc.TouchDispatcher.preTouchPoint.y = l.y, 
                    i.push(s);
                }
                cc.EGLView.getInstance().touchesEnded(i, null), e.stopPropagation(), e.preventDefault();
            }
        }, !1), t.addEventListener("touchcancel", function(e) {
            if (e.changedTouches) {
                var i = [], n = cc.getHTMLElementPosition(t);
                n.left -= document.body.scrollLeft, n.top -= document.body.scrollTop;
                for (var r, c, o, s, a, h = e.changedTouches.length, u = 0; h > u; u++) if (r = e.changedTouches[u]) {
                    c = r.clientX, o = r.clientY;
                    var l = cc.EGLView.getInstance().convertToLocationInView(c, o, n);
                    s = null, r.hasOwnProperty("identifier") ? (s = new cc.Touch(l.x, l.y, r.identifier), 
                    a = cc.TouchDispatcher._getPreTouch(s).getLocation(), s._setPrevPoint(a.x, a.y), 
                    cc.TouchDispatcher._deletePreTouchWithSameId(s)) : (s = new cc.Touch(l.x, l.y), 
                    s._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y)), 
                    cc.TouchDispatcher.preTouchPoint.x = l.x, cc.TouchDispatcher.preTouchPoint.y = l.y, 
                    i.push(s);
                }
                cc.EGLView.getInstance().touchesCancelled(i, null), e.stopPropagation(), e.preventDefault();
            }
        }, !1); else window.addEventListener("mousedown", function() {
            cc.Director.getInstance().getTouchDispatcher()._setMousePressed(!0);
        }), window.addEventListener("mouseup", function(e) {
            cc.Director.getInstance().getTouchDispatcher()._setMousePressed(!1);
            var i, n, r = cc.getHTMLElementPosition(t);
            if (null != e.pageX ? (i = e.pageX, n = e.pageY) : (r.left -= document.body.scrollLeft, 
            r.top -= document.body.scrollTop, i = e.clientX, n = e.clientY), !cc.rectContainsPoint(new cc.Rect(r.left, r.top, r.width, r.height), cc.p(i, n))) {
                var c = cc.EGLView.getInstance().convertToLocationInView(i, n, r), o = new cc.Touch(c.x, c.y);
                o._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y), 
                cc.TouchDispatcher.preTouchPoint.x = c.x, cc.TouchDispatcher.preTouchPoint.y = c.y;
                var s = [];
                s.push(o), cc.EGLView.getInstance().touchesEnded(s, null);
            }
        }), t.addEventListener("mousedown", function(e) {
            var i, n, r = cc.getHTMLElementPosition(t);
            null != e.pageX ? (i = e.pageX, n = e.pageY) : (r.left -= document.body.scrollLeft, 
            r.top -= document.body.scrollTop, i = e.clientX, n = e.clientY);
            var c = cc.EGLView.getInstance().convertToLocationInView(i, n, r), o = new cc.Touch(c.x, c.y);
            o._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y), 
            cc.TouchDispatcher.preTouchPoint.x = c.x, cc.TouchDispatcher.preTouchPoint.y = c.y;
            var s = [];
            s.push(o), cc.EGLView.getInstance().touchesBegan(s, null);
        }), t.addEventListener("mouseup", function(e) {
            cc.ProcessMouseupEvent(t, e);
        }), t.addEventListener("mousemove", function(e) {
            var i, n, r = cc.getHTMLElementPosition(t);
            null != e.pageX ? (i = e.pageX, n = e.pageY) : (r.left -= document.body.scrollLeft, 
            r.top -= document.body.scrollTop, i = e.clientX, n = e.clientY);
            var c = cc.EGLView.getInstance().convertToLocationInView(i, n, r), o = new cc.Touch(c.x, c.y);
            o._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y), 
            cc.TouchDispatcher.preTouchPoint.x = c.x, cc.TouchDispatcher.preTouchPoint.y = c.y;
            var s = [];
            s.push(o), cc.EGLView.getInstance().touchesMoved(s, null);
        });
        cc.TouchDispatcher.isRegisterEvent = !0;
    }
}, cc.TouchDispatcher._getPreTouch = function(t) {
    for (var e = null, i = cc.TouchDispatcher._preTouchPool, n = t.getId(), r = i.length - 1; r >= 0; r--) if (i[r].getId() == n) {
        e = i[r];
        break;
    }
    return e || (e = t), e;
}, cc.TouchDispatcher._setPreTouch = function(t) {
    for (var e = !1, i = cc.TouchDispatcher._preTouchPool, n = t.getId(), r = i.length - 1; r >= 0; r--) if (i[r].getId() == n) {
        i[r] = t, e = !0;
        break;
    }
    e || (i.length <= 50 ? i.push(t) : (i[cc.TouchDispatcher._preTouchPoolPointer] = t, 
    cc.TouchDispatcher._preTouchPoolPointer = (cc.TouchDispatcher._preTouchPoolPointer + 1) % 50));
}, cc.TouchDispatcher._deletePreTouchWithSameId = function(t) {
    for (var e, i = cc.TouchDispatcher._preTouchPool, n = t.getId(), r = i.length - 1; r >= 0; r--) if (i[r].getId() == n) {
        e = i.pop(), r != i.length && (i[r] = e);
        break;
    }
}, cc.TouchDispatcher._preTouchPool = [], cc.TouchDispatcher._preTouchPoolPointer = 0, 
cc.registerTargetedDelegate = function(t, e, i) {
    cc.Director.getInstance().getTouchDispatcher()._addTargetedDelegate(i, t, e);
}, cc.registerStandardDelegate = function(t, e) {
    cc.Director.getInstance().getTouchDispatcher()._addStandardDelegate(t, e);
}, cc.unregisterTouchDelegate = function(t) {
    cc.Director.getInstance().getTouchDispatcher()._removeDelegate(t);
}, cc.TYPE_BACK_CLICKED = 1, cc.TYPE_MENU_CLICKED = 2, cc.KEY = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pause: 19,
    capslock: 20,
    escape: 27,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    Delete: 46,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    num0: 96,
    num1: 97,
    num2: 98,
    num3: 99,
    num4: 100,
    num5: 101,
    num6: 102,
    num7: 103,
    num8: 104,
    num9: 105,
    "*": 106,
    "+": 107,
    "-": 109,
    numdel: 110,
    "/": 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrolllock: 145,
    semicolon: 186,
    ",": 186,
    equal: 187,
    "=": 187,
    ";": 188,
    comma: 188,
    dash: 189,
    ".": 190,
    period: 190,
    forwardslash: 191,
    grave: 192,
    "[": 219,
    openbracket: 219,
    "]": 221,
    closebracket: 221,
    backslash: 220,
    quote: 222,
    space: 32
}, cc.KeyboardDispatcher = cc.Class.extend({
    addDelegate: function(t) {
        t && (this._locked ? (this._handlersToAdd.push(t), this._toAdd = !0) : this.forceAddDelegate(t));
    },
    removeDelegate: function(t) {
        t && (this._locked ? (this._handlersToRemove.push(t), this._toRemove = !0) : this.forceRemoveDelegate(t));
    },
    forceAddDelegate: function(t) {
        var e = cc.KeyboardHandler.create(t);
        if (e) {
            for (var i = 0; i < this._delegates; i++) this._delegates[i].getDelegate() == e.getDelegate();
            this._delegates.push(e);
        }
    },
    forceRemoveDelegate: function(t) {
        for (var e = 0; e < this._delegates.length; e++) if (this._delegates[e].getDelegate() == t) return this._delegates.splice(e, 1), 
        void 0;
    },
    dispatchKeyboardMSG: function(t, e) {
        this._locked = !0, t.stopPropagation(), t.preventDefault();
        var i = 0;
        if (e && t) for (i = 0; i < this._delegates.length; i++) this._delegates[i].getDelegate() && this._delegates[i].getDelegate().onKeyDown && this._delegates[i].getDelegate().onKeyDown(t.keyCode); else if (!e && t) for (i = 0; i < this._delegates.length; i++) this._delegates[i].getDelegate() && this._delegates[i].getDelegate().onKeyUp && this._delegates[i].getDelegate().onKeyUp(t.keyCode);
        if (this._locked = !1, this._toRemove) {
            for (this._toRemove = !1, i = 0; i < this._handlersToRemove.length; ++i) this.forceRemoveDelegate(this._handlersToRemove[i]);
            delete this._handlersToRemove, this._handlersToRemove = [];
        }
        if (this._toAdd) {
            for (this._toAdd = !1, i = 0; i < this._handlersToAdd.length; ++i) this.forceAddDelegate(this._handlersToAdd[i]);
            this._handlersToAdd = [];
        }
        return !0;
    },
    _delegates: [],
    _locked: !1,
    _toAdd: !1,
    _toRemove: !1,
    _handlersToAdd: [],
    _handlersToRemove: []
}), cc.KeyboardDispatcher.getInstance = function() {
    return cc.keyboardDispatcher || (cc.keyboardDispatcher = new cc.KeyboardDispatcher(), 
    cc.canvas.setAttribute("tabindex", 1), cc.canvas.style.outline = "none", cc.canvas.style.cursor = "default", 
    cc.canvas.addEventListener("keydown", function(t) {
        cc.keyboardDispatcher.dispatchKeyboardMSG(t, !0);
    }), cc.canvas.addEventListener("keyup", function(t) {
        cc.keyboardDispatcher.dispatchKeyboardMSG(t, !1);
    })), cc.keyboardDispatcher;
}, cc.KeyboardDispatcher.purgeSharedDispatcher = function() {
    cc.keyboardDispatcher && (delete cc.keyboardDispatcher, cc.keyboardDispatcher = null);
}, cc.Touch = cc.Class.extend({
    _point: null,
    _prevPoint: cc.PointZero(),
    _id: 0,
    ctor: function(t, e, i) {
        this._point = cc.p(t || 0, e || 0), this._id = i || 0;
    },
    getLocation: function() {
        return this._point;
    },
    getPreviousLocation: function() {
        return this._prevPoint;
    },
    getDelta: function() {
        return cc.pSub(this._point, this._prevPoint);
    },
    getID: function() {
        return this._id;
    },
    getId: function() {
        return this._id;
    },
    setTouchInfo: function(t, e, i) {
        this._prevPoint = this._point, this._point = cc.p(e || 0, i || 0), this._id = t;
    },
    _setPrevPoint: function(t, e) {
        this._prevPoint = cc.p(t || 0, e || 0);
    }
}), cc.TouchDelegate = cc.Class.extend({
    _eventTypeFuncMap: null,
    onTouchBegan: function() {
        return !1;
    },
    onTouchMoved: function() {},
    onTouchEnded: function() {},
    onTouchCancelled: function() {},
    onTouchesBegan: function() {},
    onTouchesMoved: function() {},
    onTouchesEnded: function() {},
    onTouchesCancelled: function() {},
    touchDelegateRetain: function() {},
    touchDelegateRelease: function() {}
}), cc.TargetedTouchDelegate = cc.TouchDelegate.extend({
    onTouchBegan: function() {
        return !1;
    },
    onTouchMoved: function() {},
    onTouchEnded: function() {},
    onTouchCancelled: function() {}
}), cc.StandardTouchDelegate = cc.TouchDelegate.extend({
    onTouchesBegan: function() {},
    onTouchesMoved: function() {},
    onTouchesEnded: function() {},
    onTouchesCancelled: function() {}
}), cc.MOUSE_DOWN = 1, cc.MOUSE_MOVED = 2, cc.MOUSE_DRAGGED = 4, cc.MOUSE_UP = 8, 
cc.RIGHT_MOUSE_DOWN = 16, cc.RIGHT_MOUSE_DRAGGED = 32, cc.RIGHT_MOUSE_UP = 64, cc.OTHER_MOUSE_DOWN = 128, 
cc.OTHER_MOUSE_DRAGGED = 256, cc.OTHER_MOUSE_UP = 512, cc.SCROLL_WHEEL = 1024, cc.MOUSE_ENTERED = 2048, 
cc.MOUSE_EXITED = 4096, cc.MOUSE_LEFTBUTTON = 0, cc.MOUSE_MIDDLEBUTTON = 1, cc.MOUSE_RIGHTBUTTON = 2, 
cc.MouseEventDelegate = cc.Class.extend({
    onMouseDown: function() {
        return !1;
    },
    onMouseDragged: function() {
        return !1;
    },
    onMouseMoved: function() {
        return !1;
    },
    onMouseUp: function() {
        return !1;
    },
    onRightMouseDown: function() {
        return !1;
    },
    onRightMouseDragged: function() {
        return !1;
    },
    onRightMouseUp: function() {
        return !1;
    },
    onOtherMouseDown: function() {
        return !1;
    },
    onOtherMouseDragged: function() {
        return !1;
    },
    onOtherMouseUp: function() {
        return !1;
    },
    onScrollWheel: function() {
        return !1;
    },
    onMouseEntered: function() {
        return !1;
    },
    onMouseExited: function() {
        return !1;
    }
}), cc.Mouse = cc.Touch.extend({
    _wheelDelta: 0,
    _button: cc.MOUSE_LEFTBUTTON,
    getWheelDelta: function() {
        return this._wheelDelta;
    },
    setWheelDelta: function(t) {
        this._wheelDelta = t;
    },
    getButton: function() {
        return this._button;
    },
    setButton: function(t) {
        this._button = t;
    }
}), cc.MouseHandler = cc.Class.extend({
    _delegate: null,
    _priority: 0,
    _enabledSelectors: 0,
    getDelegate: function() {
        return this._delegate;
    },
    setDelegate: function(t) {
        this._delegate = t;
    },
    getPriority: function() {
        return this._priority;
    },
    setPriority: function(t) {
        this._priority = t;
    },
    getEnabledSelectors: function() {
        return this._enabledSelectors;
    },
    setEnalbedSelectors: function(t) {
        this._enabledSelectors = t;
    },
    initWithDelegate: function(t, e) {
        this._delegate = t, this._priority = e;
    }
}), cc.MouseHandler.create = function(t, e) {
    var i = new cc.MouseHandler();
    return i.initWithDelegate(t, e), i;
}, cc.MouseDispatcher = cc.Class.extend({
    _mousePressed: !1,
    _rightMousePressed: !1,
    _mouseDelegateHandlers: null,
    _dispatchEvents: !1,
    init: function() {
        return this._dispatchEvents = !0, this._mouseDelegateHandlers = [], this._mousePressed = !1, 
        this._rightMousePressed = !1, cc.MouseDispatcher._registerHtmlElementEvent(cc.canvas), 
        !0;
    },
    _setMousePressed: function(t) {
        this._mousePressed = t;
    },
    _getMousePressed: function() {
        return this._mousePressed;
    },
    _setRightMousePressed: function(t) {
        this._rightMousePressed = t;
    },
    _getRightMousePressed: function() {
        return this._rightMousePressed;
    },
    addMouseDelegate: function(t, e) {
        var i = cc.MouseHandler.create(t, e);
        this._mouseDelegateHandlers = this.forceAddHandler(i, this._mouseDelegateHandlers);
    },
    forceAddHandler: function(t, e) {
        for (var i = 0, n = 0; n < e.length; n++) {
            var r = e[n];
            if (r && (r.getPriority() < t.getPriority() && ++i, r.getDelegate() == t.getDelegate())) return cc.Assert(0, "TouchDispatcher.forceAddHandler()"), 
            e;
        }
        return cc.ArrayAppendObjectToIndex(e, t, i);
    },
    removeMouseDelegate: function(t) {
        if (null != t) for (var e = 0; e < this._mouseDelegateHandlers.length; e++) {
            var i = this._mouseDelegateHandlers[e];
            if (i && i.getDelegate() == t) {
                cc.ArrayRemoveObject(this._mouseDelegateHandlers, i);
                break;
            }
        }
    },
    _findHandler: function(t) {
        for (var e = 0; e < this._mouseDelegateHandlers.length; e++) if (this._mouseDelegateHandlers[e] && this._mouseDelegateHandlers[e].getDelegate() == t) return this._mouseDelegateHandlers[e];
        return null;
    },
    setPriority: function(t, e) {
        cc.Assert(null != e, "MouseDispatcher.setPriority():Arguments is null");
        var i = this._findHandler(e);
        cc.Assert(null != i, "MouseDispatcher.setPriority():Cant find MouseHandler"), i.getPriority() != t && (i.setPriority(t), 
        this._mouseDelegateHandlers.sort(cc.less));
    },
    removeAllMouseDelegates: function() {
        this._mouseDelegateHandlers.length = 0;
    },
    mouseHandle: function(t, e, i) {
        for (var n = 0; n < this._mouseDelegateHandlers.length; n++) {
            var r = this._mouseDelegateHandlers[n];
            switch (i) {
              case cc.MOUSE_DOWN:
                t.getButton() == cc.MOUSE_RIGHTBUTTON ? r.getDelegate().onRightMouseDown && r.getDelegate().onRightMouseDown(t) : r.getDelegate().onMouseDown && r.getDelegate().onMouseDown(t);
                break;

              case cc.MOUSE_UP:
                t.getButton() == cc.MOUSE_RIGHTBUTTON ? r.getDelegate().onRightMouseUp && r.getDelegate().onRightMouseUp(t) : r.getDelegate().onMouseUp && r.getDelegate().onMouseUp(t);
                break;

              case cc.MOUSE_MOVED:
                this._mousePressed ? r.getDelegate().onMouseDragged && r.getDelegate().onMouseDragged(t) : this._rightMousePressed ? r.getDelegate().onRightMouseDragged && r.getDelegate().onRightMouseDragged(t) : r.getDelegate().onMouseMoved && r.getDelegate().onMouseMoved(t);
                break;

              case cc.MOUSE_ENTERED:
                r.getDelegate().onMouseEntered && r.getDelegate().onMouseEntered(t);
                break;

              case cc.MOUSE_EXITED:
                r.getDelegate().onMouseExited && r.getDelegate().onMouseExited(t);
                break;

              case cc.SCROLL_WHEEL:
                r.getDelegate().onScrollWheel && r.getDelegate().onScrollWheel(t);
            }
        }
    }
}), cc.MouseDispatcher._preMousePoint = cc.p(0, 0), cc.MouseDispatcher._isRegisterEvent = !1, 
cc.MouseDispatcher._registerHtmlElementEvent = function(t) {
    function e(e) {
        var i = cc.getHTMLElementPosition(t), n = e.pageX, r = e.pageY, c = cc.EGLView.getInstance(), o = (n - i.left) / c.getScaleX(), s = (i.height - (r - i.top)) / c.getScaleY(), a = new cc.Mouse(o, s);
        return a._setPrevPoint(cc.MouseDispatcher._preMousePoint.x, cc.MouseDispatcher._preMousePoint.y), 
        a.setButton(e.button), cc.MouseDispatcher._preMousePoint.x = o, cc.MouseDispatcher._preMousePoint.y = s, 
        a;
    }
    cc.MouseDispatcher._isRegisterEvent || (window.addEventListener("mousedown", function(t) {
        t.button == cc.MOUSE_RIGHTBUTTON ? cc.Director.getInstance().getMouseDispatcher()._setRightMousePressed(!0) : cc.Director.getInstance().getMouseDispatcher()._setMousePressed(!0);
    }), window.addEventListener("mouseup", function(t) {
        t.button == cc.MOUSE_RIGHTBUTTON ? cc.Director.getInstance().getMouseDispatcher()._setRightMousePressed(!1) : cc.Director.getInstance().getMouseDispatcher()._setMousePressed(!1);
    }), t.addEventListener("mousedown", function(t) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(e(t), t, cc.MOUSE_DOWN);
    }), t.addEventListener("mouseup", function(t) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(e(t), t, cc.MOUSE_UP);
    }), t.addEventListener("mousemove", function(t) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(e(t), t, cc.MOUSE_MOVED);
    }), t.addEventListener("mousewheel", function(t) {
        var i = e(t);
        i.setWheelDelta(t.wheelDelta), cc.Director.getInstance().getMouseDispatcher().mouseHandle(i, t, cc.SCROLL_WHEEL);
    }, !1), t.addEventListener("DOMMouseScroll", function(t) {
        var i = e(t);
        i.setWheelDelta(-120 * t.detail), cc.Director.getInstance().getMouseDispatcher().mouseHandle(i, t, cc.SCROLL_WHEEL);
    }), t.addEventListener("mouseout", function(t) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(e(t), t, cc.MOUSE_EXITED);
    }, !1), t.addEventListener("mouseover", function(t) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(e(t), t, cc.MOUSE_ENTERED);
    }, !1));
}, cc.VERTEX_ATTRIB_FLAG_NONE = 0, cc.VERTEX_ATTRIB_FLAG_POSITION = 1, cc.VERTEX_ATTRIB_FLAG_COLOR = 2, 
cc.VERTEX_ATTRIB_FLAG_TEXCOORDS = 4, cc.VERTEX_ATTRIB_FLAG_POSCOLORTEX = cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR | cc.VERTEX_ATTRIB_FLAG_TEXCOORDS, 
cc.GL_ALL = 0, cc._currentProjectionMatrix = -1, cc._vertexAttribPosition = !1, 
cc._vertexAttribColor = !1, cc._vertexAttribTexCoords = !1, cc.ENABLE_GL_STATE_CACHE && (cc.MAX_ACTIVETEXTURE = 16, 
cc._currentShaderProgram = -1, cc._currentBoundTexture = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ], 
cc._blendingSource = -1, cc._blendingDest = -1, cc._GLServerState = 0, cc.TEXTURE_ATLAS_USE_VAO && (cc._uVAO = 0)), 
cc.glInvalidateStateCache = function() {
    if (cc.kmGLFreeAll(), cc._currentProjectionMatrix = -1, cc._vertexAttribPosition = !1, 
    cc._vertexAttribColor = !1, cc._vertexAttribTexCoords = !1, cc.ENABLE_GL_STATE_CACHE) {
        cc._currentShaderProgram = -1;
        for (var t = 0; t < cc.MAX_ACTIVETEXTURE; t++) cc._currentBoundTexture[t] = -1;
        cc._blendingSource = -1, cc._blendingDest = -1, cc._GLServerState = 0;
    }
}, cc.glUseProgram = function(t) {
    t !== cc._currentShaderProgram && (cc._currentShaderProgram = t, cc.renderContext.useProgram(t));
}, cc.ENABLE_GL_STATE_CACHE || (cc.glUseProgram = function(t) {
    cc.renderContext.useProgram(t);
}), cc.glDeleteProgram = function(t) {
    cc.ENABLE_GL_STATE_CACHE && t === cc._currentShaderProgram && (cc._currentShaderProgram = -1), 
    gl.deleteProgram(t);
}, cc.glBlendFunc = function(t, e) {
    (t !== cc._blendingSource || e !== cc._blendingDest) && (cc._blendingSource = t, 
    cc._blendingDest = e, cc.setBlending(t, e));
}, cc.setBlending = function(t, e) {
    var i = cc.renderContext;
    t === i.ONE && e === i.ZERO ? i.disable(i.BLEND) : (i.enable(i.BLEND), cc.renderContext.blendFunc(t, e));
}, cc.glBlendFuncForParticle = function(t, e) {
    if (t !== cc._blendingSource || e !== cc._blendingDest) {
        cc._blendingSource = t, cc._blendingDest = e;
        var i = cc.renderContext;
        t === i.ONE && e === i.ZERO ? i.disable(i.BLEND) : (i.enable(i.BLEND), i.blendFuncSeparate(i.SRC_ALPHA, e, t, e));
    }
}, cc.ENABLE_GL_STATE_CACHE || (cc.glBlendFunc = cc.setBlending), cc.glBlendResetToCache = function() {
    var t = cc.renderContext;
    t.blendEquation(t.FUNC_ADD), cc.ENABLE_GL_STATE_CACHE ? cc.setBlending(cc._blendingSource, cc._blendingDest) : cc.setBlending(t.BLEND_SRC, t.BLEND_DST);
}, cc.setProjectionMatrixDirty = function() {
    cc._currentProjectionMatrix = -1;
}, cc.glEnableVertexAttribs = function(t) {
    var e = cc.renderContext, i = t & cc.VERTEX_ATTRIB_FLAG_POSITION;
    i !== cc._vertexAttribPosition && (i ? e.enableVertexAttribArray(cc.VERTEX_ATTRIB_POSITION) : e.disableVertexAttribArray(cc.VERTEX_ATTRIB_POSITION), 
    cc._vertexAttribPosition = i);
    var n = t & cc.VERTEX_ATTRIB_FLAG_COLOR;
    n !== cc._vertexAttribColor && (n ? e.enableVertexAttribArray(cc.VERTEX_ATTRIB_COLOR) : e.disableVertexAttribArray(cc.VERTEX_ATTRIB_COLOR), 
    cc._vertexAttribColor = n);
    var r = t & cc.VERTEX_ATTRIB_FLAG_TEXCOORDS;
    r !== cc._vertexAttribTexCoords && (r ? e.enableVertexAttribArray(cc.VERTEX_ATTRIB_TEX_COORDS) : e.disableVertexAttribArray(cc.VERTEX_ATTRIB_TEX_COORDS), 
    cc._vertexAttribTexCoords = r);
}, cc.glBindTexture2D = function(t) {
    cc.glBindTexture2DN(0, t);
}, cc.glBindTexture2DN = function(t, e) {
    if (cc._currentBoundTexture[t] != e) {
        cc._currentBoundTexture[t] = e;
        var i = cc.renderContext;
        i.activeTexture(i.TEXTURE0 + t), e ? i.bindTexture(i.TEXTURE_2D, e._webTextureObj) : i.bindTexture(i.TEXTURE_2D, null);
    }
}, cc.ENABLE_GL_STATE_CACHE || (cc.glBindTexture2DN = function(t, e) {
    var i = cc.renderContext;
    i.activeTexture(i.TEXTURE0 + t), e ? i.bindTexture(i.TEXTURE_2D, e._webTextureObj) : i.bindTexture(i.TEXTURE_2D, null);
}), cc.glDeleteTexture = function(t) {
    cc.glDeleteTextureN(0, t);
}, cc.glDeleteTextureN = function(t, e) {
    cc.ENABLE_GL_STATE_CACHE && e == cc._currentBoundTexture[t] && (cc._currentBoundTexture[t] = -1), 
    cc.renderContext.deleteTexture(e);
}, cc.glBindVAO = function(t) {
    cc.TEXTURE_ATLAS_USE_VAO && cc.ENABLE_GL_STATE_CACHE && cc._uVAO != t && (cc._uVAO = t);
}, cc.glEnable = function() {
    cc.ENABLE_GL_STATE_CACHE;
}, cc.VERTEX_ATTRIB_POSITION = 0, cc.VERTEX_ATTRIB_COLOR = 1, cc.VERTEX_ATTRIB_TEX_COORDS = 2, 
cc.VERTEX_ATTRIB_MAX = 3, cc.UNIFORM_PMATRIX = 0, cc.UNIFORM_MVMATRIX = 1, cc.UNIFORM_MVPMATRIX = 2, 
cc.UNIFORM_TIME = 3, cc.UNIFORM_SINTIME = 4, cc.UNIFORM_COSTIME = 5, cc.UNIFORM_RANDOM01 = 6, 
cc.UNIFORM_SAMPLER = 7, cc.UNIFORM_MAX = 8, cc.SHADER_POSITION_TEXTURECOLOR = "ShaderPositionTextureColor", 
cc.SHADER_POSITION_TEXTURECOLORALPHATEST = "ShaderPositionTextureColorAlphaTest", 
cc.SHADER_POSITION_COLOR = "ShaderPositionColor", cc.SHADER_POSITION_TEXTURE = "ShaderPositionTexture", 
cc.SHADER_POSITION_TEXTURE_UCOLOR = "ShaderPositionTexture_uColor", cc.SHADER_POSITION_TEXTUREA8COLOR = "ShaderPositionTextureA8Color", 
cc.SHADER_POSITION_UCOLOR = "ShaderPosition_uColor", cc.SHADER_POSITION_LENGTHTEXTURECOLOR = "ShaderPositionLengthTextureColor", 
cc.UNIFORM_PMATRIX_S = "CC_PMatrix", cc.UNIFORM_MVMATRIX_S = "CC_MVMatrix", cc.UNIFORM_MVPMATRIX_S = "CC_MVPMatrix", 
cc.UNIFORM_TIME_S = "CC_Time", cc.UNIFORM_SINTIME_S = "CC_SinTime", cc.UNIFORM_COSTIME_S = "CC_CosTime", 
cc.UNIFORM_RANDOM01_S = "CC_Random01", cc.UNIFORM_SAMPLER_S = "CC_Texture0", cc.UNIFORM_ALPHA_TEST_VALUE_S = "CC_alpha_value", 
cc.ATTRIBUTE_NAME_COLOR = "a_color", cc.ATTRIBUTE_NAME_POSITION = "a_position", 
cc.ATTRIBUTE_NAME_TEX_COORD = "a_texCoord", cc.HashUniformEntry = function(t, e, i) {
    this.value = t, this.location = e, this.hh = i || {};
}, cc.GLProgram = cc.Class.extend({
    _glContext: null,
    _programObj: null,
    _vertShader: null,
    _fragShader: null,
    _uniforms: null,
    _hashForUniforms: null,
    _usesTime: !1,
    _updateUniformLocation: function(t, e) {
        if (null == t) return !1;
        for (var i = !0, n = null, r = 0; r < this._hashForUniforms.length; r++) this._hashForUniforms[r].location == t && (n = this._hashForUniforms[r]);
        return n ? n.value == e ? i = !1 : n.value = e : (n = new cc.HashUniformEntry(), 
        n.location = t, n.value = e, this._hashForUniforms.push(n)), i;
    },
    _description: function() {
        return "<CCGLProgram = " + this.toString() + " | Program = " + this._programObj.toString() + ", VertexShader = " + this._vertShader.toString() + ", FragmentShader = " + this._fragShader.toString() + ">";
    },
    _compileShader: function(t, e, i) {
        if (!i || !t) return !1;
        var n = e == this._glContext.VERTEX_SHADER ? "precision highp float;\n" : "precision mediump float;\n";
        i = n + "uniform mat4 CC_PMatrix;         \nuniform mat4 CC_MVMatrix;        \nuniform mat4 CC_MVPMatrix;       \nuniform vec4 CC_Time;            \nuniform vec4 CC_SinTime;         \nuniform vec4 CC_CosTime;         \nuniform vec4 CC_Random01;        \n//CC INCLUDES END                \n  \n" + i, 
        this._glContext.shaderSource(t, i), this._glContext.compileShader(t);
        var r = this._glContext.getShaderParameter(t, this._glContext.COMPILE_STATUS);
        return r || (cc.log("cocos2d: ERROR: Failed to compile shader:\n" + this._glContext.getShaderSource(t)), 
        e == this._glContext.VERTEX_SHADER ? cc.log("cocos2d: \n" + this.vertexShaderLog()) : cc.log("cocos2d: \n" + this.fragmentShaderLog())), 
        1 == r;
    },
    ctor: function(t) {
        this._programObj = null, this._vertShader = null, this._fragShader = null, this._uniforms = [], 
        this._hashForUniforms = [], this._glContext = t || cc.renderContext;
    },
    destroyProgram: function() {
        this._vertShader = null, this._fragShader = null, this._uniforms = null, this._hashForUniforms = null, 
        this._glContext.deleteProgram(this._programObj);
    },
    initWithVertexShaderByteArray: function(t, e) {
        return this._programObj = cc.renderContext.createProgram(), this._vertShader = null, 
        this._fragShader = null, t && (this._vertShader = this._glContext.createShader(this._glContext.VERTEX_SHADER), 
        this._compileShader(this._vertShader, this._glContext.VERTEX_SHADER, t) || cc.log("cocos2d: ERROR: Failed to compile vertex shader")), 
        e && (this._fragShader = this._glContext.createShader(this._glContext.FRAGMENT_SHADER), 
        this._compileShader(this._fragShader, this._glContext.FRAGMENT_SHADER, e) || cc.log("cocos2d: ERROR: Failed to compile fragment shader")), 
        this._vertShader && this._glContext.attachShader(this._programObj, this._vertShader), 
        cc.CHECK_GL_ERROR_DEBUG(), this._fragShader && this._glContext.attachShader(this._programObj, this._fragShader), 
        this._hashForUniforms = [], cc.CHECK_GL_ERROR_DEBUG(), !0;
    },
    initWithString: function(t, e) {
        return this.initWithVertexShaderByteArray(t, e);
    },
    initWithVertexShaderFilename: function(t, e) {
        var i = cc.FileUtils.getInstance(), n = i.getTextFileData(i.fullPathForFilename(t)), r = i.getTextFileData(i.fullPathForFilename(e));
        return this.initWithVertexShaderByteArray(n, r);
    },
    init: function(t, e) {
        return this.initWithVertexShaderFilename(t, e);
    },
    addAttribute: function(t, e) {
        this._glContext.bindAttribLocation(this._programObj, e, t);
    },
    link: function() {
        if (cc.Assert(null != this._programObj, "Cannot link invalid program"), this._glContext.linkProgram(this._programObj), 
        this._vertShader && this._glContext.deleteShader(this._vertShader), this._fragShader && this._glContext.deleteShader(this._fragShader), 
        this._vertShader = null, this._fragShader = null, cc.COCOS2D_DEBUG) {
            var t = this._glContext.getProgramParameter(this._programObj, this._glContext.LINK_STATUS);
            if (!t) return cc.log("cocos2d: ERROR: Failed to link program: " + this._programObj), 
            cc.glDeleteProgram(this._programObj), this._programObj = null, !1;
        }
        return !0;
    },
    use: function() {
        cc.glUseProgram(this._programObj);
    },
    updateUniforms: function() {
        this._uniforms[cc.UNIFORM_PMATRIX] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_PMATRIX_S), 
        this._uniforms[cc.UNIFORM_MVMATRIX] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_MVMATRIX_S), 
        this._uniforms[cc.UNIFORM_MVPMATRIX] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_MVPMATRIX_S), 
        this._uniforms[cc.UNIFORM_TIME] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_TIME_S), 
        this._uniforms[cc.UNIFORM_SINTIME] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_SINTIME_S), 
        this._uniforms[cc.UNIFORM_COSTIME] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_COSTIME_S), 
        this._usesTime = null != this._uniforms[cc.UNIFORM_TIME] || null != this._uniforms[cc.UNIFORM_SINTIME] || null != this._uniforms[cc.UNIFORM_COSTIME], 
        this._uniforms[cc.UNIFORM_RANDOM01] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_RANDOM01_S), 
        this._uniforms[cc.UNIFORM_SAMPLER] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_SAMPLER_S), 
        this.use(), this.setUniformLocationWith1i(this._uniforms[cc.UNIFORM_SAMPLER], 0);
    },
    getUniformLocationForName: function(t) {
        return cc.Assert(null != t, "Invalid uniform name"), cc.Assert(0 != this._programObj, "Invalid operation. Cannot get uniform location when program is not initialized"), 
        this._glContext.getUniformLocation(this._programObj, t);
    },
    getUniformMVPMatrix: function() {
        return this._uniforms[cc.UNIFORM_MVPMATRIX];
    },
    getUniformSampler: function() {
        return this._uniforms[cc.UNIFORM_SAMPLER];
    },
    setUniformLocationWith1i: function(t, e) {
        var i = this._updateUniformLocation(t, e);
        i && this._glContext.uniform1i(t, e);
    },
    setUniformLocationWith2i: function(t, e, i) {
        var n = [ e, i ], r = this._updateUniformLocation(t, n);
        r && this._glContext.uniform2i(t, e, i);
    },
    setUniformLocationWith3i: function(t, e, i, n) {
        var r = [ e, i, n ], c = this._updateUniformLocation(t, r);
        c && this._glContext.uniform3i(t, e, i, n);
    },
    setUniformLocationWith4i: function(t, e, i, n, r) {
        var c = [ e, i, n, r ], o = this._updateUniformLocation(t, c);
        o && this._glContext.uniform4i(t, e, i, n, r);
    },
    setUniformLocationWith2iv: function(t, e) {
        var i = this._updateUniformLocation(t, e);
        i && this._glContext.uniform2iv(t, e);
    },
    setUniformLocationWith3iv: function(t, e) {
        var i = this._updateUniformLocation(t, e);
        i && this._glContext.uniform3iv(t, e);
    },
    setUniformLocationWith4iv: function(t, e) {
        var i = this._updateUniformLocation(t, e);
        i && this._glContext.uniform4iv(t, e);
    },
    setUniformLocationI32: function() {
        this.setUniformLocationWith1i(arguments[0], arguments[1]);
    },
    setUniformLocationWith1f: function(t, e) {
        var i = this._updateUniformLocation(t, e);
        i && this._glContext.uniform1f(t, e);
    },
    setUniformLocationWith2f: function(t, e, i) {
        var n = [ e, i ], r = this._updateUniformLocation(t, n);
        r && this._glContext.uniform2f(t, e, i);
    },
    setUniformLocationWith3f: function(t, e, i, n) {
        var r = [ e, i, n ], c = this._updateUniformLocation(t, r);
        c && this._glContext.uniform3f(t, e, i, n);
    },
    setUniformLocationWith4f: function(t, e, i, n, r) {
        var c = [ e, i, n, r ], o = this._updateUniformLocation(t, c);
        o && this._glContext.uniform4f(t, e, i, n, r);
    },
    setUniformLocationWith2fv: function(t, e) {
        var i = this._updateUniformLocation(t, e);
        i && this._glContext.uniform2fv(t, e);
    },
    setUniformLocationWith3fv: function(t, e) {
        var i = this._updateUniformLocation(t, e);
        i && this._glContext.uniform3fv(t, e);
    },
    setUniformLocationWith4fv: function(t, e) {
        var i = this._updateUniformLocation(t, e);
        i && this._glContext.uniform4fv(t, e);
    },
    setUniformLocationWithMatrix4fv: function(t, e) {
        var i = this._updateUniformLocation(t, e);
        i && this._glContext.uniformMatrix4fv(t, !1, e);
    },
    setUniformLocationF32: function() {
        if (!(arguments.length < 2)) switch (arguments.length) {
          case 2:
            this.setUniformLocationWith1f(arguments[0], arguments[1]);
            break;

          case 3:
            this.setUniformLocationWith2f(arguments[0], arguments[1], arguments[2]);
            break;

          case 4:
            this.setUniformLocationWith3f(arguments[0], arguments[1], arguments[2], arguments[3]);
            break;

          case 5:
            this.setUniformLocationWith4f(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
        }
    },
    setUniformsForBuiltins: function() {
        var t = new cc.kmMat4(), e = new cc.kmMat4(), i = new cc.kmMat4();
        if (cc.kmGLGetMatrix(cc.KM_GL_PROJECTION, t), cc.kmGLGetMatrix(cc.KM_GL_MODELVIEW, e), 
        cc.kmMat4Multiply(i, t, e), this.setUniformLocationWithMatrix4fv(this._uniforms[cc.UNIFORM_PMATRIX], t.mat, 1), 
        this.setUniformLocationWithMatrix4fv(this._uniforms[cc.UNIFORM_MVMATRIX], e.mat, 1), 
        this.setUniformLocationWithMatrix4fv(this._uniforms[cc.UNIFORM_MVPMATRIX], i.mat, 1), 
        this._usesTime) {
            var n = cc.Director.getInstance(), r = n.getTotalFrames() * n.getAnimationInterval();
            this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_TIME], r / 10, r, 2 * r, 4 * r), 
            this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_SINTIME], r / 8, r / 4, r / 2, Math.sin(r)), 
            this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_COSTIME], r / 8, r / 4, r / 2, Math.cos(r));
        }
        -1 != this._uniforms[cc.UNIFORM_RANDOM01] && this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_RANDOM01], Math.random(), Math.random(), Math.random(), Math.random());
    },
    setUniformForModelViewProjectionMatrix: function() {
        this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_MVPMATRIX], !1, cc.getMat4MultiplyValue(cc.projection_matrix_stack.top, cc.modelview_matrix_stack.top));
    },
    setUniformForModelViewProjectionMatrixWithMat4: function(t) {
        cc.kmMat4Multiply(t, cc.projection_matrix_stack.top, cc.modelview_matrix_stack.top), 
        this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_MVPMATRIX], !1, t.mat);
    },
    setUniformForModelViewAndProjectionMatrixWithMat4: function() {
        this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_MVMATRIX], !1, cc.modelview_matrix_stack.top.mat), 
        this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_PMATRIX], !1, cc.projection_matrix_stack.top.mat);
    },
    vertexShaderLog: function() {
        return this._glContext.getShaderInfoLog(this._vertShader);
    },
    getVertexShaderLog: function() {
        return this._glContext.getShaderInfoLog(this._vertShader);
    },
    getFragmentShaderLog: function() {
        return this._glContext.getShaderInfoLog(this._vertShader);
    },
    fragmentShaderLog: function() {
        return this._glContext.getShaderInfoLog(this._fragShader);
    },
    programLog: function() {
        return this._glContext.getProgramInfoLog(this._programObj);
    },
    getProgramLog: function() {
        return this._glContext.getProgramInfoLog(this._programObj);
    },
    reset: function() {
        this._vertShader = null, this._fragShader = null, this._uniforms = [], this._glContext.deleteProgram(this._programObj), 
        this._programObj = null;
        for (var t = 0; t < this._hashForUniforms.length; t++) this._hashForUniforms[t].value = null, 
        this._hashForUniforms[t] = null;
        this._hashForUniforms = [];
    },
    getProgram: function() {
        return this._programObj;
    },
    retain: function() {},
    release: function() {}
}), cc.GLProgram.create = function(t, e) {
    var i = new cc.GLProgram();
    return i.init(t, e) ? i : null;
}, cc.SHADERTYPE_POSITION_TEXTURECOLOR = 0, cc.SHADERTYPE_POSITION_TEXTURECOLOR_ALPHATEST = 1, 
cc.SHADERTYPE_POSITION_COLOR = 2, cc.SHADERTYPE_POSITION_TEXTURE = 3, cc.SHADERTYPE_POSITION_TEXTURE_UCOLOR = 4, 
cc.SHADERTYPE_POSITION_TEXTURE_A8COLOR = 5, cc.SHADERTYPE_POSITION_UCOLOR = 6, cc.SHADERTYPE_POSITION_LENGTH_TEXTURECOLOR = 7, 
cc.SHADERTYPE_MAX = 8, cc._sharedShaderCache = null, cc.ShaderCache = cc.Class.extend({
    _programs: null,
    _init: function() {
        return this.loadDefaultShaders(), !0;
    },
    _loadDefaultShader: function(t, e) {
        switch (e) {
          case cc.SHADERTYPE_POSITION_TEXTURECOLOR:
            t.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_COLOR_VERT, cc.SHADER_POSITION_TEXTURE_COLOR_FRAG), 
            t.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION), t.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR), 
            t.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;

          case cc.SHADERTYPE_POSITION_TEXTURECOLOR_ALPHATEST:
            t.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_COLOR_VERT, cc.SHADER_POSITION_TEXTURE_COLOR_ALPHATEST_FRAG), 
            t.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION), t.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR), 
            t.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;

          case cc.SHADERTYPE_POSITION_COLOR:
            t.initWithVertexShaderByteArray(cc.SHADER_POSITION_COLOR_VERT, cc.SHADER_POSITION_COLOR_FRAG), 
            t.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION), t.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);
            break;

          case cc.SHADERTYPE_POSITION_TEXTURE:
            t.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_VERT, cc.SHADER_POSITION_TEXTURE_FRAG), 
            t.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION), t.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;

          case cc.SHADERTYPE_POSITION_TEXTURE_UCOLOR:
            t.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_UCOLOR_VERT, cc.SHADER_POSITION_TEXTURE_UCOLOR_FRAG), 
            t.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION), t.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;

          case cc.SHADERTYPE_POSITION_TEXTURE_A8COLOR:
            t.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_A8COLOR_VERT, cc.SHADER_POSITION_TEXTURE_A8COLOR_FRAG), 
            t.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION), t.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR), 
            t.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;

          case cc.SHADERTYPE_POSITION_UCOLOR:
            t.initWithVertexShaderByteArray(cc.SHADER_POSITION_UCOLOR_VERT, cc.SHADER_POSITION_UCOLOR_FRAG), 
            t.addAttribute("aVertex", cc.VERTEX_ATTRIB_POSITION);
            break;

          case cc.SHADERTYPE_POSITION_LENGTH_TEXTURECOLOR:
            t.initWithVertexShaderByteArray(cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_VERT, cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_FRAG), 
            t.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION), t.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS), 
            t.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);
            break;

          default:
            return cc.log("cocos2d: cc.ShaderCache._loadDefaultShader, error shader type"), 
            void 0;
        }
        t.link(), t.updateUniforms();
    },
    ctor: function() {
        this._programs = {};
    },
    loadDefaultShaders: function() {
        var t = new cc.GLProgram();
        this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_TEXTURECOLOR), this._programs[cc.SHADER_POSITION_TEXTURECOLOR] = t, 
        this._programs.ShaderPositionTextureColor = t, t = new cc.GLProgram(), this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_TEXTURECOLOR_ALPHATEST), 
        this._programs[cc.SHADER_POSITION_TEXTURECOLORALPHATEST] = t, this._programs.ShaderPositionTextureColorAlphaTest = t, 
        t = new cc.GLProgram(), this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_COLOR), 
        this._programs[cc.SHADER_POSITION_COLOR] = t, this._programs.ShaderPositionColor = t, 
        t = new cc.GLProgram(), this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_TEXTURE), 
        this._programs[cc.SHADER_POSITION_TEXTURE] = t, this._programs.ShaderPositionTexture = t, 
        t = new cc.GLProgram(), this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_TEXTURE_UCOLOR), 
        this._programs[cc.SHADER_POSITION_TEXTURE_UCOLOR] = t, this._programs.ShaderPositionTextureUColor = t, 
        t = new cc.GLProgram(), this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_TEXTURE_A8COLOR), 
        this._programs[cc.SHADER_POSITION_TEXTUREA8COLOR] = t, this._programs.ShaderPositionTextureA8Color = t, 
        t = new cc.GLProgram(), this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_UCOLOR), 
        this._programs[cc.SHADER_POSITION_UCOLOR] = t, this._programs.ShaderPositionUColor = t, 
        t = new cc.GLProgram(), this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_LENGTH_TEXTURECOLOR), 
        this._programs[cc.SHADER_POSITION_LENGTHTEXTURECOLOR] = t, this._programs.ShaderPositionLengthTextureColor = t;
    },
    reloadDefaultShaders: function() {
        var t = this.programForKey(cc.SHADER_POSITION_TEXTURECOLOR);
        t.reset(), this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_TEXTURECOLOR), t = this.programForKey(cc.SHADER_POSITION_TEXTURECOLORALPHATEST), 
        t.reset(), this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_TEXTURECOLOR_ALPHATEST), 
        t = this.programForKey(cc.SHADER_POSITION_COLOR), t.reset(), this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_COLOR), 
        t = this.programForKey(cc.SHADER_POSITION_TEXTURE), t.reset(), this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_TEXTURE), 
        t = this.programForKey(cc.SHADER_POSITION_TEXTURE_UCOLOR), t.reset(), this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_TEXTURE_UCOLOR), 
        t = this.programForKey(cc.SHADER_POSITION_TEXTUREA8COLOR), t.reset(), this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_TEXTURE_A8COLOR), 
        t = this.programForKey(cc.SHADER_POSITION_UCOLOR), t.reset(), this._loadDefaultShader(t, cc.SHADERTYPE_POSITION_UCOLOR);
    },
    programForKey: function(t) {
        return this._programs[t];
    },
    getProgram: function(t) {
        return this._programs[t];
    },
    addProgram: function(t, e) {
        this._programs[e] = t;
    }
}), cc.ShaderCache.getInstance = function() {
    return cc._sharedShaderCache || (cc._sharedShaderCache = new cc.ShaderCache(), cc._sharedShaderCache._init()), 
    cc._sharedShaderCache;
}, cc.ShaderCache.purgeSharedShaderCache = function() {
    cc._sharedShaderCache = null;
}, cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888 = 0, cc.TEXTURE_2D_PIXEL_FORMAT_RGB888 = 1, 
cc.TEXTURE_2D_PIXEL_FORMAT_RGB565 = 2, cc.TEXTURE_2D_PIXEL_FORMAT_A8 = 3, cc.TEXTURE_2D_PIXEL_FORMAT_I8 = 4, 
cc.TEXTURE_2D_PIXEL_FORMAT_AI88 = 5, cc.TEXTURE_2D_PIXEL_FORMAT_RGBA4444 = 6, cc.TEXTURE_2D_PIXEL_FORMAT_RGB5A1 = 7, 
cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC4 = 8, cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC2 = 9, cc.TEXTURE_2D_PIXEL_FORMAT_DEFAULT = cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888, 
cc._defaultAlphaPixelFormat = cc.TEXTURE_2D_PIXEL_FORMAT_DEFAULT, cc.PVRHaveAlphaPremultiplied_ = !1, 
cc._texParams = function(t, e, i, n) {
    this.minFilter = t || 0, this.magFilter = e || 0, this.wrapS = i || 0, this.wrapT = n || 0;
}, cc.Texture2DWebGL = cc.Class.extend({
    _pVRHaveAlphaPremultiplied: null,
    _pixelFormat: null,
    _pixelsWide: null,
    _pixelsHigh: null,
    _name: null,
    _contentSize: null,
    _maxS: null,
    _maxT: null,
    _hasPremultipliedAlpha: null,
    _hasMipmaps: !1,
    _shaderProgram: null,
    _isLoaded: !1,
    _htmlElementObj: null,
    _webTextureObj: null,
    _loadedEventListeners: null,
    ctor: function() {
        this._pixelsWide = 0, this._pixelsHigh = 0, this._name = "", this._maxS = 0, this._maxT = 0, 
        this._hasPremultipliedAlpha = !1, this._contentSize = cc.size(0, 0), this._hasMipmaps = !1, 
        this._pVRHaveAlphaPremultiplied = !0, this._pixelFormat = cc.Texture2D.defaultAlphaPixelFormat(), 
        this._shaderProgram = null, this._isLoaded = !1, this._htmlElementObj = null, this._webTextureObj = null, 
        this._loadedEventListeners = [];
    },
    releaseTexture: function() {
        this._webTextureObj && cc.renderContext.deleteTexture(this._webTextureObj);
    },
    getPixelFormat: function() {
        return this._pixelFormat;
    },
    getPixelsWide: function() {
        return this._pixelsWide;
    },
    getPixelsHigh: function() {
        return this._pixelsHigh;
    },
    getName: function() {
        return this._webTextureObj;
    },
    getContentSize: function() {
        return cc.size(this._contentSize.width / cc.CONTENT_SCALE_FACTOR(), this._contentSize.height / cc.CONTENT_SCALE_FACTOR());
    },
    getContentSizeInPixels: function() {
        return this._contentSize;
    },
    getMaxS: function() {
        return this._maxS;
    },
    setMaxS: function(t) {
        this._maxS = t;
    },
    getMaxT: function() {
        return this._maxT;
    },
    setMaxT: function(t) {
        this._maxT = t;
    },
    getShaderProgram: function() {
        return this._shaderProgram;
    },
    setShaderProgram: function(t) {
        this._shaderProgram = t;
    },
    hasPremultipliedAlpha: function() {
        return this._hasPremultipliedAlpha;
    },
    hasMipmaps: function() {
        return this._hasMipmaps;
    },
    description: function() {
        return "<cc.Texture2D | Name = " + this._name + " | Dimensions = " + this._pixelsWide + " x " + this._pixelsHigh + " | Coordinates = (" + this._maxS + ", " + this._maxT + ")>";
    },
    releaseData: function(t) {
        t = null;
    },
    keepData: function(t) {
        return t;
    },
    initWithData: function(t, e, i, n, r) {
        var c = cc.renderContext, o = 0;
        o = e === cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888 ? 24 : this.bitsPerPixelForFormat(e);
        var s = i * o / 8;
        switch (s % 8 === 0 ? c.pixelStorei(c.UNPACK_ALIGNMENT, 8) : s % 4 === 0 ? c.pixelStorei(c.UNPACK_ALIGNMENT, 4) : s % 2 === 0 ? c.pixelStorei(c.UNPACK_ALIGNMENT, 2) : c.pixelStorei(c.UNPACK_ALIGNMENT, 1), 
        this._webTextureObj = c.createTexture(), c.bindTexture(c.TEXTURE_2D, this._webTextureObj), 
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR), 
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), 
        e) {
          case cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888:
            c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, i, n, 0, c.RGBA, c.UNSIGNED_BYTE, t);
            break;

          case cc.TEXTURE_2D_PIXEL_FORMAT_RGB888:
            c.texImage2D(c.TEXTURE_2D, 0, c.RGB, i, n, 0, c.RGB, c.UNSIGNED_BYTE, t);
            break;

          case cc.TEXTURE_2D_PIXEL_FORMAT_RGBA4444:
            c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, i, n, 0, c.RGBA, c.UNSIGNED_SHORT_4_4_4_4, t);
            break;

          case cc.TEXTURE_2D_PIXEL_FORMAT_RGB5A1:
            c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, i, n, 0, c.RGBA, c.UNSIGNED_SHORT_5_5_5_1, t);
            break;

          case cc.TEXTURE_2D_PIXEL_FORMAT_RGB565:
            c.texImage2D(c.TEXTURE_2D, 0, c.RGB, i, n, 0, c.RGB, c.UNSIGNED_SHORT_5_6_5, t);
            break;

          case cc.TEXTURE_2D_PIXEL_FORMAT_AI88:
            c.texImage2D(c.TEXTURE_2D, 0, c.LUMINANCE_ALPHA, i, n, 0, c.LUMINANCE_ALPHA, c.UNSIGNED_BYTE, t);
            break;

          case cc.TEXTURE_2D_PIXEL_FORMAT_A8:
            c.texImage2D(c.TEXTURE_2D, 0, c.ALPHA, i, n, 0, c.ALPHA, c.UNSIGNED_BYTE, t);
            break;

          case cc.TEXTURE_2D_PIXEL_FORMAT_I8:
            c.texImage2D(c.TEXTURE_2D, 0, c.LUMINANCE, i, n, 0, c.LUMINANCE, c.UNSIGNED_BYTE, t);
            break;

          default:
            cc.Assert(0, "NSInternalInconsistencyException");
        }
        return this._contentSize = r, this._pixelsWide = i, this._pixelsHigh = n, this._pixelFormat = e, 
        this._maxS = r.width / i, this._maxT = r.height / n, this._hasPremultipliedAlpha = !1, 
        this._hasMipmaps = !1, this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_TEXTURE)), 
        this._isLoaded = !0, !0;
    },
    drawAtPoint: function(t) {
        var e = [ 0, this._maxT, this._maxS, this._maxT, 0, 0, this._maxS, 0 ], i = this._pixelsWide * this._maxS, n = this._pixelsHigh * this._maxT, r = [ t.x, t.y, 0, i + t.x, t.y, 0, t.x, n + t.y, 0, i + t.x, n + t.y, 0 ];
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_TEXCOORDS), 
        this._shaderProgram.use(), this._shaderProgram.setUniformsForBuiltins(), cc.glBindTexture2D(this);
        var c = cc.renderContext;
        c.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, c.FLOAT, !1, 0, r), c.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, c.FLOAT, !1, 0, e), 
        c.drawArrays(c.TRIANGLE_STRIP, 0, 4);
    },
    drawInRect: function(t) {
        var e = [ 0, this._maxT, this._maxS, this._maxT, 0, 0, this._maxS, 0 ], i = [ t.x, t.y, t.x + t.width, t.y, t.x, t.y + t.height, t.x + t.width, t.y + t.height ];
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_TEXCOORDS), 
        this._shaderProgram.use(), this._shaderProgram.setUniformsForBuiltins(), cc.glBindTexture2D(this);
        var n = cc.renderContext;
        n.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, n.FLOAT, !1, 0, i), n.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, n.FLOAT, !1, 0, e), 
        n.drawArrays(n.TRIANGLE_STRIP, 0, 4);
    },
    initWithImage: function(t) {
        if (null == t) return cc.log("cocos2d: cc.Texture2D. Can't create Texture. UIImage is nil"), 
        !1;
        var e = t.getWidth(), i = t.getHeight(), n = cc.Configuration.getInstance(), r = n.getMaxTextureSize();
        return e > r || i > r ? (cc.log("cocos2d: WARNING: Image (" + e + " x " + i + ") is bigger than the supported " + r + " x " + r), 
        !1) : (this._isLoaded = !0, this._initPremultipliedATextureWithImage(t, e, i));
    },
    initWithElement: function(t) {
        t && (this._webTextureObj = cc.renderContext.createTexture(), this._htmlElementObj = t);
    },
    getHtmlElementObj: function() {
        return this._htmlElementObj;
    },
    isLoaded: function() {
        return this._isLoaded;
    },
    handleLoadedTexture: function() {
        this._isLoaded = !0;
        var t = cc.renderContext;
        cc.glBindTexture2D(this), t.pixelStorei(t.UNPACK_ALIGNMENT, 4), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this._htmlElementObj), 
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), 
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), 
        this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_TEXTURE)), 
        t.bindTexture(t.TEXTURE_2D, null);
        var e = this._htmlElementObj.width, i = this._htmlElementObj.height;
        this._contentSize = new cc.Size(e, i), this._pixelsWide = e, this._pixelsHigh = i, 
        this._pixelFormat = cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888, this._maxS = 1, this._maxT = 1, 
        this._hasPremultipliedAlpha = !1, this._hasMipmaps = !1, this._callLoadedEventCallbacks();
    },
    initWithString: function(t, e, i, n, r, c) {
        3 == arguments.length && (e = arguments[1], i = arguments[2], n = cc.size(0, 0), 
        r = cc.TEXT_ALIGNMENT_CENTER, c = cc.VERTICAL_TEXT_ALIGNMENT_TOP);
        var o, s = new cc.Image();
        return cc.VERTICAL_TEXT_ALIGNMENT_TOP === c ? o = cc.TEXT_ALIGNMENT_CENTER === r ? cc.ALIGN_TOP : cc.TEXT_ALIGNMENT_LEFT === r ? cc.ALIGN_TOP_LEFT : cc.ALIGN_TOP_RIGHT : cc.VERTICAL_TEXT_ALIGNMENT_CENTER === c ? o = cc.TEXT_ALIGNMENT_CENTER === r ? cc.ALIGN_CENTER : cc.TEXT_ALIGNMENT_LEFT === r ? cc.ALIGN_LEFT : cc.ALIGN_RIGHT : cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM === c ? o = cc.TEXT_ALIGNMENT_CENTER === r ? cc.ALIGN_BOTTOM : cc.TEXT_ALIGNMENT_LEFT === r ? cc.ALIGN_BOTTOM_LEFT : cc.ALIGN_BOTTOM_RIGHT : cc.Assert(!1, "Not supported alignment format!"), 
        s.initWithString(t, n.width, n.height, o, e, i) ? this.initWithImage(s) : !1;
    },
    initWithETCFile: function() {
        return !1;
    },
    initWithPVRFile: function(t) {
        var e = !1, i = new cc.TexturePVR();
        return e = i.initWithContentsOfFile(t), e ? (i.setRetainName(!0), this._name = i.getName(), 
        this._maxS = 1, this._maxT = 1, this._pixelsWide = i.getWidth(), this._pixelsHigh = i.getHeight(), 
        this._contentSize = cc.size(this._pixelsWide, this._pixelsHigh), this._hasPremultipliedAlpha = cc.PVRHaveAlphaPremultiplied_, 
        this._pixelFormat = i.getFormat(), this.setAntiAliasTexParameters()) : cc.log("cocos2d: Couldn't load PVR image " + t), 
        e;
    },
    initWithPVRTCData: function() {
        return cc.Configuration.getInstance().supportsPVRTC() ? !0 : (cc.log("cocos2d: WARNING: PVRTC images is not supported."), 
        !1);
    },
    setTexParameters: function(t) {
        var e = cc.renderContext;
        cc.Assert(this._pixelsWide == cc.NextPOT(this._pixelsWide) && this._pixelsHigh == cc.NextPOT(this._pixelsHigh) || t.wrapS == e.CLAMP_TO_EDGE && t.wrapT == e.CLAMP_TO_EDGE, "WebGLRenderingContext.CLAMP_TO_EDGE should be used in NPOT textures"), 
        cc.glBindTexture2D(this), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.minFilter), 
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t.magFilter), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, t.wrapS), 
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, t.wrapT);
    },
    setAntiAliasTexParameters: function() {
        var t = cc.renderContext;
        cc.glBindTexture2D(this), this._hasMipmaps ? t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_NEAREST) : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), 
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST);
    },
    setAliasTexParameters: function() {
        var t = cc.renderContext;
        cc.glBindTexture2D(this), this._hasMipmaps ? t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST_MIPMAP_NEAREST) : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), 
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST);
    },
    generateMipmap: function() {
        cc.Assert(this._pixelsWide == cc.NextPOT(this._pixelsWide) && this._pixelsHigh == cc.NextPOT(this._pixelsHigh), "Mimpap texture only works in POT textures"), 
        cc.glBindTexture2D(this), cc.renderContext.generateMipmap(cc.renderContext.TEXTURE_2D), 
        this._hasMipmaps = !0;
    },
    stringForFormat: function() {
        switch (this._pixelFormat) {
          case cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888:
            return "RGBA8888";

          case cc.TEXTURE_2D_PIXEL_FORMAT_RGB888:
            return "RGB888";

          case cc.TEXTURE_2D_PIXEL_FORMAT_RGB565:
            return "RGB565";

          case cc.TEXTURE_2D_PIXEL_FORMAT_RGBA4444:
            return "RGBA4444";

          case cc.TEXTURE_2D_PIXEL_FORMAT_RGB5A1:
            return "RGB5A1";

          case cc.TEXTURE_2D_PIXEL_FORMAT_AI88:
            return "AI88";

          case cc.TEXTURE_2D_PIXEL_FORMAT_A8:
            return "A8";

          case cc.TEXTURE_2D_PIXEL_FORMAT_I8:
            return "I8";

          case cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC4:
            return "PVRTC4";

          case cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC2:
            return "PVRTC2";

          default:
            cc.Assert(!1, "unrecognized pixel format"), cc.log("stringForFormat: " + this._pixelFormat + ", cannot give useful result");
        }
        return "";
    },
    bitsPerPixelForFormat: function(t) {
        switch (t = t || this._pixelFormat) {
          case cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888:
            return 32;

          case cc.TEXTURE_2D_PIXEL_FORMAT_RGB888:
            return 32;

          case cc.TEXTURE_2D_PIXEL_FORMAT_RGB565:
            return 16;

          case cc.TEXTURE_2D_PIXEL_FORMAT_A8:
            return 8;

          case cc.TEXTURE_2D_PIXEL_FORMAT_RGBA4444:
            return 16;

          case cc.TEXTURE_2D_PIXEL_FORMAT_RGB5A1:
            return 16;

          case cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC4:
            return 4;

          case cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC2:
            return 2;

          case cc.TEXTURE_2D_PIXEL_FORMAT_I8:
            return 8;

          case cc.TEXTURE_2D_PIXEL_FORMAT_AI88:
            return 16;

          default:
            return cc.Assert(!1, "illegal pixel format"), cc.log("bitsPerPixelForFormat: " + this._pixelFormat + ", cannot give useful result"), 
            -1;
        }
    },
    _initPremultipliedATextureWithImage: function(t, e, i) {
        var n, r = t.getData(), c = null, o = null, s = t.hasAlpha(), a = cc.size(t.getWidth(), t.getHeight()), h = cc.TEXTURE_2D_PIXEL_FORMAT_DEFAULT, u = t.getBitsPerComponent();
        s || (u >= 8 ? h = cc.TEXTURE_2D_PIXEL_FORMAT_RGB888 : (cc.log("cocos2d: cc.Texture2D: Using RGB565 texture since image has no alpha"), 
        h = cc.TEXTURE_2D_PIXEL_FORMAT_RGB565));
        var l = e * i;
        if (h == cc.TEXTURE_2D_PIXEL_FORMAT_RGB565) if (s) for (r = new Uint16Array(e * i), 
        c = t.getData(), n = 0; l > n; ++n) r[n] = (c[n] >> 0 & 255) >> 3 << 11 | (c[n] >> 8 & 255) >> 2 << 5 | (c[n] >> 16 & 255) >> 3 << 0; else for (r = new Uint16Array(e * i), 
        o = t.getData(), n = 0; l > n; ++n) r[n] = (255 & o[n]) >> 3 << 11 | (255 & o[n]) >> 2 << 5 | (255 & o[n]) >> 3 << 0; else if (h == cc.TEXTURE_2D_PIXEL_FORMAT_RGBA4444) for (r = new Uint16Array(e * i), 
        c = t.getData(), n = 0; l > n; ++n) r[n] = (c[n] >> 0 & 255) >> 4 << 12 | (c[n] >> 8 & 255) >> 4 << 8 | (c[n] >> 16 & 255) >> 4 << 4 | (c[n] >> 24 & 255) >> 4 << 0; else if (h == cc.TEXTURE_2D_PIXEL_FORMAT_RGB5A1) for (r = new Uint16Array(e * i), 
        c = t.getData(), n = 0; l > n; ++n) r[n] = (c[n] >> 0 & 255) >> 3 << 11 | (c[n] >> 8 & 255) >> 3 << 6 | (c[n] >> 16 & 255) >> 3 << 1 | (c[n] >> 24 & 255) >> 7 << 0; else if (h == cc.TEXTURE_2D_PIXEL_FORMAT_A8) for (r = new Uint8Array(e * i), 
        c = t.getData(), n = 0; l > n; ++n) r[n] = c >> 24 & 255;
        if (s && h == cc.TEXTURE_2D_PIXEL_FORMAT_RGB888) for (c = t.getData(), r = new Uint8Array(e * i * 3), 
        n = 0; l > n; ++n) r[3 * n] = c >> 0 & 255, r[3 * n + 1] = c >> 8 & 255, r[3 * n + 2] = c >> 16 & 255;
        return this.initWithData(r, h, e, i, a), r != t.getData() && (r = null), this._hasPremultipliedAlpha = t.isPremultipliedAlpha(), 
        !0;
    },
    addLoadedEventListener: function(t, e) {
        this._loadedEventListeners.push({
            eventCallback: t,
            eventTarget: e
        });
    },
    removeLoadedEventListener: function(t) {
        for (var e = this._loadedEventListeners, i = 0; i < e.length; i++) {
            var n = e[i];
            n.eventTarget == t && e.splice(i, 1);
        }
    },
    _callLoadedEventCallbacks: function() {
        for (var t = this._loadedEventListeners, e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            n.eventCallback.call(n.eventTarget, this);
        }
        t.length = 0;
    }
}), cc.Texture2DCanvas = cc.Class.extend({
    _contentSize: null,
    _isLoaded: !1,
    _htmlElementObj: null,
    _loadedEventListeners: null,
    ctor: function() {
        this._contentSize = cc.size(0, 0), this._isLoaded = !1, this._htmlElementObj = null, 
        this._loadedEventListeners = [];
    },
    getPixelsWide: function() {
        return this._contentSize.width;
    },
    getPixelsHigh: function() {
        return this._contentSize.height;
    },
    getContentSize: function() {
        return cc.size(this._contentSize.width / cc.CONTENT_SCALE_FACTOR(), this._contentSize.height / cc.CONTENT_SCALE_FACTOR());
    },
    getContentSizeInPixels: function() {
        return this._contentSize;
    },
    initWithElement: function(t) {
        t && (this._htmlElementObj = t);
    },
    getHtmlElementObj: function() {
        return this._htmlElementObj;
    },
    isLoaded: function() {
        return this._isLoaded;
    },
    handleLoadedTexture: function() {
        this._isLoaded = !0;
        var t = this._htmlElementObj;
        this._contentSize = new cc.Size(t.width, t.height), this._callLoadedEventCallbacks();
    },
    description: function() {
        return "<cc.Texture2D | width = " + this._contentSize.width + " height " + this._contentSize.height + ">";
    },
    initWithData: function() {
        return !1;
    },
    initWithImage: function() {
        return !1;
    },
    initWithString: function() {
        return !1;
    },
    releaseTexture: function() {},
    getName: function() {
        return null;
    },
    getMaxS: function() {
        return 1;
    },
    setMaxS: function() {},
    getMaxT: function() {
        return 1;
    },
    setMaxT: function() {},
    getShaderProgram: function() {
        return null;
    },
    setShaderProgram: function() {},
    hasPremultipliedAlpha: function() {
        return !1;
    },
    hasMipmaps: function() {
        return !1;
    },
    releaseData: function(t) {
        t = null;
    },
    keepData: function(t) {
        return t;
    },
    drawAtPoint: function() {},
    drawInRect: function() {},
    initWithETCFile: function() {
        return !1;
    },
    initWithPVRFile: function() {
        return !1;
    },
    initWithPVRTCData: function() {
        return !0;
    },
    setTexParameters: function() {},
    setAntiAliasTexParameters: function() {},
    setAliasTexParameters: function() {},
    generateMipmap: function() {},
    stringForFormat: function() {
        return "";
    },
    bitsPerPixelForFormat: function() {
        return -1;
    },
    addLoadedEventListener: function(t, e) {
        this._loadedEventListeners.push({
            eventCallback: t,
            eventTarget: e
        });
    },
    removeLoadedEventListener: function(t) {
        for (var e = this._loadedEventListeners, i = 0; i < e.length; i++) {
            var n = e[i];
            n.eventTarget == t && e.splice(i, 1);
        }
    },
    _callLoadedEventCallbacks: function() {
        for (var t = this._loadedEventListeners, e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            n.eventCallback.call(n.eventTarget, this);
        }
        t.length = 0;
    }
}), cc.Texture2D = cc.Browser.supportWebGL ? cc.Texture2DWebGL : cc.Texture2DCanvas, 
cc.Texture2D.setDefaultAlphaPixelFormat = function(t) {
    cc._defaultAlphaPixelFormat = t;
}, cc.Texture2D.defaultAlphaPixelFormat = function() {
    return cc._defaultAlphaPixelFormat;
}, cc.Texture2D.getDefaultAlphaPixelFormat = function() {
    return cc._defaultAlphaPixelFormat;
}, cc.Texture2D.PVRImagesHavePremultipliedAlpha = function(t) {
    cc.PVRHaveAlphaPremultiplied_ = t;
}, cc.TextureAtlas = cc.Class.extend({
    _indices: null,
    _buffersVBO: null,
    _dirty: !1,
    _capacity: 0,
    _texture: null,
    _quads: null,
    _quadsArrayBuffer: null,
    _quadsWebBuffer: null,
    _quadsReader: null,
    ctor: function() {
        this._buffersVBO = [];
    },
    getTotalQuads: function() {
        return this._totalQuads;
    },
    getCapacity: function() {
        return this._capacity;
    },
    getTexture: function() {
        return this._texture;
    },
    setTexture: function(t) {
        this._texture = t;
    },
    setDirty: function(t) {
        this._dirty = t;
    },
    isDirty: function() {
        return this._dirty;
    },
    getQuads: function() {
        return this._quads;
    },
    setQuads: function(t) {
        this._quads = t;
    },
    _copyQuadsToTextureAtlas: function(t, e) {
        if (t) for (var i = 0; i < t.length; i++) this._setQuadToArray(t[i], e + i);
    },
    _setQuadToArray: function(t, e) {
        var i = this._quads;
        return i[e] ? (i[e].bl = t.bl, i[e].br = t.br, i[e].tl = t.tl, i[e].tr = t.tr, void 0) : (i[e] = new cc.V3F_C4B_T2F_Quad(t.tl, t.bl, t.tr, t.br, this._quadsArrayBuffer, e * cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT), 
        void 0);
    },
    description: function() {
        return "<cc.TextureAtlas | totalQuads =" + this._totalQuads + ">";
    },
    _setupIndices: function() {
        if (0 !== this._capacity) for (var t = this._indices, e = this._capacity, i = 0; e > i; i++) cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP ? (t[6 * i + 0] = 4 * i + 0, 
        t[6 * i + 1] = 4 * i + 0, t[6 * i + 2] = 4 * i + 2, t[6 * i + 3] = 4 * i + 1, t[6 * i + 4] = 4 * i + 3, 
        t[6 * i + 5] = 4 * i + 3) : (t[6 * i + 0] = 4 * i + 0, t[6 * i + 1] = 4 * i + 1, 
        t[6 * i + 2] = 4 * i + 2, t[6 * i + 3] = 4 * i + 3, t[6 * i + 4] = 4 * i + 2, t[6 * i + 5] = 4 * i + 1);
    },
    _setupVBO: function() {
        var t = cc.renderContext;
        this._buffersVBO[0] = t.createBuffer(), this._buffersVBO[1] = t.createBuffer(), 
        this._quadsWebBuffer = t.createBuffer(), this._mapBuffers();
    },
    _mapBuffers: function() {
        var t = cc.renderContext;
        t.bindBuffer(t.ARRAY_BUFFER, this._quadsWebBuffer), t.bufferData(t.ARRAY_BUFFER, this._quadsArrayBuffer, t.DYNAMIC_DRAW), 
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._buffersVBO[1]), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this._indices, t.STATIC_DRAW);
    },
    initWithFile: function(t, e) {
        var i = cc.TextureCache.getInstance().addImage(t);
        return i ? this.initWithTexture(i, e) : (cc.log("cocos2d: Could not open file: " + t), 
        !1);
    },
    initWithTexture: function(t, e) {
        e = 0 | e, this._capacity = e, this._totalQuads = 0, this._texture = t, cc.Assert(null == this._quads && null == this._indices, "TextureAtlas.initWithTexture():_quads and _indices should not be null"), 
        this._quads = [], this._indices = new Uint16Array(6 * e);
        var i = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
        if (this._quadsArrayBuffer = new ArrayBuffer(i * e), this._quadsReader = new Uint8Array(this._quadsArrayBuffer), 
        (!this._quads || !this._indices) && e > 0) return !1;
        for (var n = this._quads, r = 0; e > r; r++) n[r] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, r * i);
        return this._setupIndices(), this._setupVBO(), this._dirty = !0, !0;
    },
    updateQuad: function(t, e) {
        this._totalQuads = Math.max(e + 1, this._totalQuads), this._setQuadToArray(t, e), 
        this._dirty = !0;
    },
    insertQuad: function(t, e) {
        cc.Assert(e < this._capacity, "insertQuadWithTexture: Invalid index"), this._totalQuads++, 
        cc.Assert(this._totalQuads <= this._capacity, "invalid totalQuads");
        var i = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, n = this._totalQuads - 1 - e, r = e * i, c = n * i;
        this._quads[this._totalQuads - 1] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, (this._totalQuads - 1) * i), 
        this._quadsReader.set(this._quadsReader.subarray(r, r + c), r + i), this._setQuadToArray(t, e), 
        this._dirty = !0;
    },
    insertQuads: function(t, e, i) {
        i = i || t.length;
        var n = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
        cc.Assert(e + i <= this._capacity, "insertQuadWithTexture: Invalid index + amount"), 
        this._totalQuads += i, cc.Assert(this._totalQuads <= this._capacity, "invalid totalQuads");
        var r, c = this._totalQuads - 1 - e - i, o = e * n, s = c * n, a = this._totalQuads - 1 - i;
        for (r = 0; i > r; r++) this._quads[a + r] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, (this._totalQuads - 1) * n);
        for (this._quadsReader.set(this._quadsReader.subarray(o, o + s), o + n * i), r = 0; i > r; r++) this._setQuadToArray(t[r], e + r);
        this._dirty = !0;
    },
    insertQuadFromIndex: function(t, e) {
        if (cc.Assert(e >= 0 && e < this._totalQuads, "insertQuadFromIndex:atIndex: Invalid index"), 
        cc.Assert(t >= 0 && t < this._totalQuads, "insertQuadFromIndex:atIndex: Invalid index"), 
        t !== e) {
            var i, n, r = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, c = this._quadsReader, o = c.subarray(t * r, r);
            t > e ? (i = e * r, n = (t - e) * r, c.set(c.subarray(i, i + n), i + r), c.set(o, i)) : (i = (t + 1) * r, 
            n = (e - t) * r, c.set(c.subarray(i, i + n), i - r), c.set(o, e * r)), this._dirty = !0;
        }
    },
    removeQuadAtIndex: function(t) {
        cc.Assert(t < this._totalQuads, "removeQuadAtIndex: Invalid index");
        var e = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
        if (this._totalQuads--, this._quads.length = this._totalQuads, t !== this._totalQuads) {
            var i = (t + 1) * e, n = (this._totalQuads - t) * e;
            this._quadsReader.set(this._quadsReader.subarray(i, i + n), i - e);
        }
        this._dirty = !0;
    },
    removeQuadsAtIndex: function(t, e) {
        if (cc.Assert(t + e <= this._totalQuads, "removeQuadAtIndex: index + amount out of bounds"), 
        this._totalQuads -= e, t !== this._totalQuads) {
            var i = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, n = (t + e) * i, r = (this._totalQuads - t) * i, c = t * i;
            this._quadsReader.set(this._quadsReader.subarray(n, n + r), c);
        }
        this._dirty = !0;
    },
    removeAllQuads: function() {
        this._quads.length = 0, this._totalQuads = 0;
    },
    _setDirty: function(t) {
        this._dirty = t;
    },
    resizeCapacity: function(t) {
        if (t == this._capacity) return !0;
        var e = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, i = this._capacity;
        this._totalQuads = Math.min(this._totalQuads, t), this._capacity = 0 | t;
        var n, r = this._capacity, c = this._totalQuads;
        if (null == this._quads) for (this._quads = [], this._quadsArrayBuffer = new ArrayBuffer(e * r), 
        this._quadsReader = new Uint8Array(this._quadsArrayBuffer), n = 0; r > n; n++) this._quads = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, n * e); else {
            var o, s, a = this._quads;
            if (r > i) {
                for (o = [], s = new ArrayBuffer(e * r), n = 0; c > n; n++) o[n] = new cc.V3F_C4B_T2F_Quad(a[n].tl, a[n].bl, a[n].tr, a[n].br, s, n * e);
                for (;r > n; n++) o[n] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, s, n * e);
                this._quadsReader = new Uint8Array(s), this._quads = o, this._quadsArrayBuffer = s;
            } else {
                var h = Math.max(c, r);
                for (o = [], s = new ArrayBuffer(e * r), n = 0; h > n; n++) o[n] = new cc.V3F_C4B_T2F_Quad(a[n].tl, a[n].bl, a[n].tr, a[n].br, s, n * e);
                this._quadsReader = new Uint8Array(s), this._quads = o, this._quadsArrayBuffer = s;
            }
        }
        if (null == this._indices) this._indices = new Uint16Array(6 * r); else if (r > i) {
            var u = new Uint16Array(6 * r);
            u.set(this._indices, 0), this._indices = u;
        } else this._indices = this._indices.subarray(0, 6 * r);
        return this._setupIndices(), this._mapBuffers(), this._dirty = !0, !0;
    },
    increaseTotalQuadsWith: function(t) {
        this._totalQuads += t;
    },
    moveQuadsFromIndex: function(t, e, i) {
        if (2 == arguments.length) {
            if (i = e, e = this._totalQuads - t, cc.Assert(i + (this._totalQuads - t) <= this._capacity, "moveQuadsFromIndex move is out of bounds"), 
            0 === e) return;
        } else if (cc.Assert(i + e <= this._totalQuads, "moveQuadsFromIndex:newIndex: Invalid index"), 
        cc.Assert(t < this._totalQuads, "moveQuadsFromIndex:oldIndex: Invalid index"), t == i) return;
        var n, r, c = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, o = t * c, s = e * c, a = this._quadsReader, h = a.subarray(o, o + s), u = i * c;
        t > i ? (n = (t - i) * c, r = i * c, a.set(a.subarray(r, r + n), r + s)) : (n = (i - t) * c, 
        r = (t + e) * c, a.set(a.subarray(r, r + n), o)), a.set(h, u), this._dirty = !0;
    },
    fillWithEmptyQuadsFromIndex: function(t, e) {
        for (var i = e * cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, n = new Uint8Array(this._quadsArrayBuffer, t * cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, i), r = 0; i > r; r++) n[r] = 0;
    },
    drawNumberOfQuads: function(t, e) {
        if (e = e || 0, 0 !== t && this._texture && this._texture.isLoaded()) {
            var i = cc.renderContext;
            cc.glBindTexture2D(this._texture), cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSCOLORTEX), 
            i.bindBuffer(i.ARRAY_BUFFER, this._quadsWebBuffer), this._dirty && i.bufferData(i.ARRAY_BUFFER, this._quadsArrayBuffer, i.DYNAMIC_DRAW), 
            i.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 3, i.FLOAT, !1, 24, 0), i.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, i.UNSIGNED_BYTE, !0, 24, 12), 
            i.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, i.FLOAT, !1, 24, 16), this._dirty && (this._dirty = !1), 
            i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this._buffersVBO[1]), cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP ? i.drawElements(i.TRIANGLE_STRIP, 6 * t, i.UNSIGNED_SHORT, 6 * e * this._indices.BYTES_PER_ELEMENT) : i.drawElements(i.TRIANGLES, 6 * t, i.UNSIGNED_SHORT, 6 * e * this._indices.BYTES_PER_ELEMENT), 
            cc.g_NumberOfDraws++;
        }
    },
    drawQuads: function() {
        this.drawNumberOfQuads(this._totalQuads, 0);
    },
    _releaseBuffer: function() {
        var t = cc.renderContext;
        this._buffersVBO && (this._buffersVBO[0] && t.deleteBuffer(this._buffersVBO[0]), 
        this._buffersVBO[1] && t.deleteBuffer(this._buffersVBO[1])), this._quadsWebBuffer && t.deleteBuffer(this._quadsWebBuffer);
    }
}), cc.TextureAtlas.create = function(t, e) {
    var i = new cc.TextureAtlas();
    return i && i.initWithFile(t, e) ? i : null;
}, cc.TextureAtlas.createWithTexture = function(t, e) {
    var i = new cc.TextureAtlas();
    return i && i.initWithTexture(t, e) ? i : null;
}, cc.AtlasNode = cc.NodeRGBA.extend({
    RGBAProtocol: !0,
    _itemsPerRow: 0,
    _itemsPerColumn: 0,
    _itemWidth: 0,
    _itemHeight: 0,
    _colorUnmodified: null,
    _textureAtlas: null,
    _opacityModifyRGB: !1,
    _blendFunc: null,
    _quadsToDraw: 0,
    _ignoreContentScaleFactor: !1,
    ctor: function() {
        cc.NodeRGBA.prototype.ctor.call(this), this._colorUnmodified = cc.white(), this._blendFunc = {
            src: cc.BLEND_SRC,
            dst: cc.BLEND_DST
        }, this._ignoreContentScaleFactor = !1;
    },
    updateAtlasValues: function() {
        cc.Assert(!1, "cc.AtlasNode:Abstract updateAtlasValue not overridden");
    },
    getColor: function() {
        return this._opacityModifyRGB ? this._colorUnmodified : cc.NodeRGBA.prototype.getColor.call(this);
    },
    setOpacityModifyRGB: function(t) {
        var e = this.getColor();
        this._opacityModifyRGB = t, this.setColor(e);
    },
    isOpacityModifyRGB: function() {
        return this._opacityModifyRGB;
    },
    getBlendFunc: function() {
        return this._blendFunc;
    },
    setBlendFunc: function(t, e) {
        this._blendFunc = 1 == arguments.length ? t : {
            src: t,
            dst: e
        };
    },
    setTextureAtlas: function(t) {
        this._textureAtlas = t;
    },
    getTextureAtlas: function() {
        return this._textureAtlas;
    },
    getQuadsToDraw: function() {
        return this._quadsToDraw;
    },
    setQuadsToDraw: function(t) {
        this._quadsToDraw = t;
    },
    _textureForCanvas: null,
    _originalTexture: null,
    _uniformColor: null,
    _colorF32Array: null,
    initWithTileFile: function(t, e, i, n) {
        cc.Assert(null != t, "title should not be null");
        var r = cc.TextureCache.getInstance().addImage(t);
        return this.initWithTexture(r, e, i, n);
    },
    initWithTexture: null,
    _initWithTextureForCanvas: function(t, e, i, n) {
        return this._itemWidth = e, this._itemHeight = i, this._opacityModifyRGB = !0, this._originalTexture = t, 
        this._originalTexture ? (this._textureForCanvas = this._originalTexture, this._calculateMaxItems(), 
        this._quadsToDraw = n, !0) : (cc.log("cocos2d: Could not initialize cc.AtlasNode. Invalid Texture."), 
        !1);
    },
    _initWithTextureForWebGL: function(t, e, i, n) {
        this._itemWidth = e, this._itemHeight = i, this._colorUnmodified = cc.WHITE, this._opacityModifyRGB = !0, 
        this._blendFunc.src = cc.BLEND_SRC, this._blendFunc.dst = cc.BLEND_DST;
        var r = this._realColor;
        return this._colorF32Array = new Float32Array([ r.r / 255, r.g / 255, r.b / 255, this._realOpacity / 255 ]), 
        this._textureAtlas = new cc.TextureAtlas(), this._textureAtlas.initWithTexture(t, n), 
        this._textureAtlas ? (this._updateBlendFunc(), this._updateOpacityModifyRGB(), this._calculateMaxItems(), 
        this._quadsToDraw = n, this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_TEXTURE_UCOLOR)), 
        this._uniformColor = cc.renderContext.getUniformLocation(this.getShaderProgram().getProgram(), "u_color"), 
        !0) : (cc.log("cocos2d: Could not initialize cc.AtlasNode. Invalid Texture."), !1);
    },
    draw: null,
    _drawForWebGL: function(t) {
        var e = t || cc.renderContext;
        cc.NODE_DRAW_SETUP(this), cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst), 
        e.uniform4fv(this._uniformColor, this._colorF32Array), this._textureAtlas.drawNumberOfQuads(this._quadsToDraw, 0);
    },
    setColor: null,
    _setColorForCanvas: function(t) {
        var e = this._realColor;
        if (e.r != t.r || e.g != t.g || e.b != t.b) {
            var i = new cc.Color3B(t.r, t.g, t.b);
            if (this._colorUnmodified = t, this._opacityModifyRGB) {
                var n = this._displayedOpacity;
                i.r = i.r * n / 255, i.g = i.g * n / 255, i.b = i.b * n / 255;
            }
            if (cc.NodeRGBA.prototype.setColor.call(this, t), this.getTexture()) {
                var r = this._originalTexture.getHtmlElementObj();
                if (!r) return;
                var c = cc.TextureCache.getInstance().getTextureColors(r);
                if (c) {
                    var o = cc.rect(0, 0, r.width, r.height);
                    r = cc.generateTintImage(r, c, this._realColor, o);
                    var s = new cc.Texture2D();
                    s.initWithElement(r), s.handleLoadedTexture(), this.setTexture(s);
                }
            }
        }
    },
    _setColorForWebGL: function(t) {
        var e = cc.Color3B(t.r, t.g, t.b);
        this._colorUnmodified = t;
        var i = this._displayedOpacity;
        this._opacityModifyRGB && (e.r = e.r * i / 255, e.g = e.g * i / 255, e.b = e.b * i / 255), 
        cc.NodeRGBA.prototype.setColor.call(this, t);
        var n = this._displayedColor;
        this._colorF32Array = new Float32Array([ n.r / 255, n.g / 255, n.b / 255, i / 255 ]);
    },
    setOpacity: null,
    _setOpacityForCanvas: function(t) {
        cc.NodeRGBA.prototype.setOpacity.call(this, t), this._opacityModifyRGB && this.setColor(this._colorUnmodified);
    },
    _setOpacityForWebGL: function(t) {
        if (cc.NodeRGBA.prototype.setOpacity.call(this, t), this._opacityModifyRGB) this.setColor(this._colorUnmodified); else {
            var e = this._displayedColor;
            this._colorF32Array = new Float32Array([ e.r / 255, e.g / 255, e.b / 255, this._displayedOpacity / 255 ]);
        }
    },
    getTexture: null,
    _getTextureForCanvas: function() {
        return this._textureForCanvas;
    },
    _getTextureForWebGL: function() {
        return this._textureAtlas.getTexture();
    },
    setTexture: null,
    _setTextureForCanvas: function(t) {
        this._textureForCanvas = t;
    },
    _setTextureForWebGL: function(t) {
        this._textureAtlas.setTexture(t), this._updateBlendFunc(), this._updateOpacityModifyRGB();
    },
    _calculateMaxItems: null,
    _calculateMaxItemsForCanvas: function() {
        var t = this.getTexture(), e = t.getContentSize();
        this._itemsPerColumn = 0 | e.height / this._itemHeight, this._itemsPerRow = 0 | e.width / this._itemWidth;
    },
    _calculateMaxItemsForWebGL: function() {
        var t = this.getTexture(), e = t.getContentSize();
        this._ignoreContentScaleFactor && (e = t.getContentSizeInPixels()), this._itemsPerColumn = 0 | e.height / this._itemHeight, 
        this._itemsPerRow = 0 | e.width / this._itemWidth;
    },
    _updateBlendFunc: function() {
        this._textureAtlas.getTexture().hasPremultipliedAlpha() || (this._blendFunc.src = gl.SRC_ALPHA, 
        this._blendFunc.dst = gl.ONE_MINUS_SRC_ALPHA);
    },
    _updateOpacityModifyRGB: function() {
        this._opacityModifyRGB = this._textureAtlas.getTexture().hasPremultipliedAlpha();
    },
    _setIgnoreContentScaleFactor: function(t) {
        this._ignoreContentScaleFactor = t;
    }
}), cc.Browser.supportWebGL ? (cc.AtlasNode.prototype.initWithTexture = cc.AtlasNode.prototype._initWithTextureForWebGL, 
cc.AtlasNode.prototype.draw = cc.AtlasNode.prototype._drawForWebGL, cc.AtlasNode.prototype.setColor = cc.AtlasNode.prototype._setColorForWebGL, 
cc.AtlasNode.prototype.setOpacity = cc.AtlasNode.prototype._setOpacityForWebGL, 
cc.AtlasNode.prototype.getTexture = cc.AtlasNode.prototype._getTextureForWebGL, 
cc.AtlasNode.prototype.setTexture = cc.AtlasNode.prototype._setTextureForWebGL, 
cc.AtlasNode.prototype._calculateMaxItems = cc.AtlasNode.prototype._calculateMaxItemsForWebGL) : (cc.AtlasNode.prototype.initWithTexture = cc.AtlasNode.prototype._initWithTextureForCanvas, 
cc.AtlasNode.prototype.draw = cc.Node.prototype.draw, cc.AtlasNode.prototype.setColor = cc.AtlasNode.prototype._setColorForCanvas, 
cc.AtlasNode.prototype.setOpacity = cc.AtlasNode.prototype._setOpacityForCanvas, 
cc.AtlasNode.prototype.getTexture = cc.AtlasNode.prototype._getTextureForCanvas, 
cc.AtlasNode.prototype.setTexture = cc.AtlasNode.prototype._setTextureForCanvas, 
cc.AtlasNode.prototype._calculateMaxItems = cc.AtlasNode.prototype._calculateMaxItemsForCanvas), 
cc.AtlasNode.create = function(t, e, i, n) {
    var r = new cc.AtlasNode();
    return r.initWithTileFile(t, e, i, n) ? r : null;
}, cc.LabelAtlas = cc.AtlasNode.extend({
    _string: null,
    _mapStartChar: null,
    initWithString: function(t, e, i, n, r) {
        var c, o, s, a, h = t + "";
        if (cc.Assert(null !== h, "Label must be non-nil"), 2 === arguments.length) {
            var u = cc.FileUtils.getInstance(), l = u.fullPathForFilename(e), _ = l.substr(0, l.lastIndexOf("/")) + "/", d = u.dictionaryWithContentsOfFileThreadSafe(l);
            cc.Assert(1 == parseInt(d.version, 10), "Unsupported version. Upgrade cocos2d version"), 
            c = _ + d.textureFilename;
            var f = cc.CONTENT_SCALE_FACTOR();
            o = parseInt(d.itemWidth, 10) / f, s = parseInt(d.itemHeight, 10) / f, a = String.fromCharCode(parseInt(d.firstChar, 10));
        } else c = e, o = i || 0, s = n || 0, a = r || " ";
        var p = null;
        return p = c instanceof cc.Texture2D ? c : cc.TextureCache.getInstance().addImage(c), 
        this.initWithTexture(p, o, s, h.length) ? (this._mapStartChar = a, this.setString(h), 
        !0) : !1;
    },
    setColor: function(t) {
        cc.AtlasNode.prototype.setColor.call(this, t), this.updateAtlasValues();
    },
    getString: function() {
        return this._string;
    },
    draw: function(t) {
        if (cc.AtlasNode.prototype.draw.call(this, t), cc.LABELATLAS_DEBUG_DRAW) {
            var e = this.getContentSize(), i = [ cc.p(0, 0), cc.p(e.width, 0), cc.p(e.width, e.height), cc.p(0, e.height) ];
            cc.drawingUtil.drawPoly(i, 4, !0);
        }
    },
    updateAtlasValues: null,
    _updateAtlasValuesForCanvas: function() {
        for (var t = this._string, e = t.length, i = this.getTexture(), n = this._itemWidth, r = this._itemHeight, c = cc.CONTENT_SCALE_FACTOR(), o = 0; e > o; o++) {
            var s = t.charCodeAt(o) - this._mapStartChar.charCodeAt(0), a = parseInt(s % this._itemsPerRow, 10) * c, h = parseInt(s / this._itemsPerRow, 10) * c, u = cc.rect(a * n, h * r, n, r), l = t.charCodeAt(o), _ = this.getChildByTag(o);
            _ ? 32 == l ? (_.init(), _.setTextureRect(cc.rect(0, 0, 10, 10), !1, cc.SizeZero())) : (_.initWithTexture(i, u), 
            _.setVisible(!0), _.setOpacity(this._displayedOpacity)) : (_ = new cc.Sprite(), 
            32 == l ? (_.init(), _.setTextureRect(cc.rect(0, 0, 10, 10), !1, cc.SizeZero())) : _.initWithTexture(i, u), 
            this.addChild(_, 0, o)), _.setPosition(o * n + n / 2, r / 2);
        }
    },
    _updateAtlasValuesForWebGL: function() {
        var t = this._string, e = t.length, i = this._textureAtlas, n = i.getTexture(), r = n.getPixelsWide(), c = n.getPixelsHigh(), o = this._itemWidth, s = this._itemHeight;
        this._ignoreContentScaleFactor || (o = this._itemWidth * cc.CONTENT_SCALE_FACTOR(), 
        s = this._itemHeight * cc.CONTENT_SCALE_FACTOR()), cc.Assert(e <= i.getCapacity(), "updateAtlasValues: Invalid String length");
        for (var a = i.getQuads(), h = this._displayedColor, u = {
            r: h.r,
            g: h.g,
            b: h.b,
            a: this._displayedOpacity
        }, l = this._itemWidth, _ = 0; e > _; _++) {
            var d, f, p, g, T = t.charCodeAt(_) - this._mapStartChar.charCodeAt(0), m = T % this._itemsPerRow, A = 0 | T / this._itemsPerRow;
            cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (d = (2 * m * o + 1) / (2 * r), f = d + (2 * o - 2) / (2 * r), 
            p = (2 * A * s + 1) / (2 * c), g = p + (2 * s - 2) / (2 * c)) : (d = m * o / r, 
            f = d + o / r, p = A * s / c, g = p + s / c);
            var E = a[_], y = E.tl, v = E.tr, S = E.bl, x = E.br;
            y.texCoords.u = d, y.texCoords.v = p, v.texCoords.u = f, v.texCoords.v = p, S.texCoords.u = d, 
            S.texCoords.v = g, x.texCoords.u = f, x.texCoords.v = g, S.vertices.x = _ * l, S.vertices.y = 0, 
            S.vertices.z = 0, x.vertices.x = _ * l + l, x.vertices.y = 0, x.vertices.z = 0, 
            y.vertices.x = _ * l, y.vertices.y = this._itemHeight, y.vertices.z = 0, v.vertices.x = _ * l + l, 
            v.vertices.y = this._itemHeight, v.vertices.z = 0, y.colors = u, v.colors = u, S.colors = u, 
            x.colors = u;
        }
        if (e > 0) {
            i.setDirty(!0);
            var C = i.getTotalQuads();
            e > C && i.increaseTotalQuadsWith(e - C);
        }
    },
    setString: null,
    _setStringForCanvas: function(t) {
        t = String(t);
        var e = t.length;
        if (this._string = t, this.setContentSize(cc.size(e * this._itemWidth, this._itemHeight)), 
        this._children) {
            var i = this._children;
            e = i.length;
            for (var n = 0; e > n; n++) {
                var r = i[n];
                r && r.setVisible(!1);
            }
        }
        this.updateAtlasValues(), this._quadsToDraw = e;
    },
    _setStringForWebGL: function(t) {
        t = String(t);
        var e = t.length;
        e > this._textureAtlas.getTotalQuads() && this._textureAtlas.resizeCapacity(e), 
        this._string = t, this.setContentSize(cc.size(e * this._itemWidth, this._itemHeight)), 
        this.updateAtlasValues(), this._quadsToDraw = e;
    },
    setOpacity: null,
    _setOpacityForCanvas: function(t) {
        if (this._displayedOpacity !== t) {
            cc.AtlasNode.prototype.setOpacity.call(this, t);
            for (var e = this._children, i = 0, n = e.length; n > i; i++) e[i] && e[i].setOpacity(t);
        }
    },
    _setOpacityForWebGL: function(t) {
        this._opacity !== t && cc.AtlasNode.prototype.setOpacity.call(this, t);
    }
}), cc.Browser.supportWebGL ? (cc.LabelAtlas.prototype.updateAtlasValues = cc.LabelAtlas.prototype._updateAtlasValuesForWebGL, 
cc.LabelAtlas.prototype.setString = cc.LabelAtlas.prototype._setStringForWebGL, 
cc.LabelAtlas.prototype.setOpacity = cc.LabelAtlas.prototype._setOpacityForWebGL) : (cc.LabelAtlas.prototype.updateAtlasValues = cc.LabelAtlas.prototype._updateAtlasValuesForCanvas, 
cc.LabelAtlas.prototype.setString = cc.LabelAtlas.prototype._setStringForCanvas, 
cc.LabelAtlas.prototype.setOpacity = cc.LabelAtlas.prototype._setOpacityForCanvas), 
cc.LabelAtlas.create = function() {
    var t = new cc.LabelAtlas();
    return t && cc.LabelAtlas.prototype.initWithString.apply(t, arguments) ? t : null;
}, cc.POINT_EPSILON = parseFloat("1.192092896e-07F"), cc.pNeg = function(t) {
    return cc.p(-t.x, -t.y);
}, cc.pAdd = function(t, e) {
    return cc.p(t.x + e.x, t.y + e.y);
}, cc.pSub = function(t, e) {
    return cc.p(t.x - e.x, t.y - e.y);
}, cc.pMult = function(t, e) {
    return cc.p(t.x * e, t.y * e);
}, cc.pMidpoint = function(t, e) {
    return cc.pMult(cc.pAdd(t, e), .5);
}, cc.pDot = function(t, e) {
    return t.x * e.x + t.y * e.y;
}, cc.pCross = function(t, e) {
    return t.x * e.y - t.y * e.x;
}, cc.pPerp = function(t) {
    return cc.p(-t.y, t.x);
}, cc.pRPerp = function(t) {
    return cc.p(t.y, -t.x);
}, cc.pProject = function(t, e) {
    return cc.pMult(e, cc.pDot(t, e) / cc.pDot(e, e));
}, cc.pRotate = function(t, e) {
    return cc.p(t.x * e.x - t.y * e.y, t.x * e.y + t.y * e.x);
}, cc.pUnrotate = function(t, e) {
    return cc.p(t.x * e.x + t.y * e.y, t.y * e.x - t.x * e.y);
}, cc.pLengthSQ = function(t) {
    return cc.pDot(t, t);
}, cc.pDistanceSQ = function(t, e) {
    return cc.pLengthSQ(cc.pSub(t, e));
}, cc.pLength = function(t) {
    return Math.sqrt(cc.pLengthSQ(t));
}, cc.pDistance = function(t, e) {
    return cc.pLength(cc.pSub(t, e));
}, cc.pNormalize = function(t) {
    return cc.pMult(t, 1 / cc.pLength(t));
}, cc.pForAngle = function(t) {
    return cc.p(Math.cos(t), Math.sin(t));
}, cc.pToAngle = function(t) {
    return Math.atan2(t.y, t.x);
}, cc.clampf = function(t, e, i) {
    if (e > i) {
        var n = e;
        e = i, i = n;
    }
    return e > t ? e : i > t ? t : i;
}, cc.pClamp = function(t, e, i) {
    return cc.p(cc.clampf(t.x, e.x, i.x), cc.clampf(t.y, e.y, i.y));
}, cc.pFromSize = function(t) {
    return cc.p(t.width, t.height);
}, cc.pCompOp = function(t, e) {
    return cc.p(e(t.x), e(t.y));
}, cc.pLerp = function(t, e, i) {
    return cc.pAdd(cc.pMult(t, 1 - i), cc.pMult(e, i));
}, cc.pFuzzyEqual = function(t, e, i) {
    return t.x - i <= e.x && e.x <= t.x + i && t.y - i <= e.y && e.y <= t.y + i ? !0 : !1;
}, cc.pCompMult = function(t, e) {
    return cc.p(t.x * e.x, t.y * e.y);
}, cc.pAngleSigned = function(t, e) {
    var i = cc.pNormalize(t), n = cc.pNormalize(e), r = Math.atan2(i.x * n.y - i.y * n.x, cc.pDot(i, n));
    return Math.abs(r) < cc.POINT_EPSILON ? 0 : r;
}, cc.pAngle = function(t, e) {
    var i = Math.acos(cc.pDot(cc.pNormalize(t), cc.pNormalize(e)));
    return Math.abs(i) < cc.POINT_EPSILON ? 0 : i;
}, cc.pRotateByAngle = function(t, e, i) {
    var n = cc.pSub(t, e), r = Math.cos(i), c = Math.sin(i), o = n.x;
    return n.x = o * r - n.y * c + e.x, n.y = o * c + n.y * r + e.y, n;
}, cc.pLineIntersect = function(t, e, i, n, r) {
    if (t.x == e.x && t.y == e.y || i.x == n.x && i.y == n.y) return !1;
    var c = e.x - t.x, o = e.y - t.y, s = n.x - i.x, a = n.y - i.y, h = t.x - i.x, u = t.y - i.y, l = a * c - s * o;
    return r.x = s * u - a * h, r.y = c * u - o * h, 0 == l ? 0 == r.x || 0 == r.y ? !0 : !1 : (r.x = r.x / l, 
    r.y = r.y / l, !0);
}, cc.pSegmentIntersect = function(t, e, i, n) {
    var r = cc.p(0, 0);
    return cc.pLineIntersect(t, e, i, n, r) && r.x >= 0 && r.x <= 1 && r.y >= 0 && r.y <= 1 ? !0 : !1;
}, cc.pIntersectPoint = function(t, e, i, n) {
    var r = cc.p(0, 0);
    if (cc.pLineIntersect(t, e, i, n, r)) {
        var c = cc.p(0, 0);
        return c.x = t.x + r.x * (e.x - t.x), c.y = t.y + r.x * (e.y - t.y), c;
    }
    return cc.PointZero();
}, cc.pSameAs = function(t, e) {
    return null != t && null != e ? t.x == e.x && t.y == e.y : !1;
}, cc.pZeroIn = function(t) {
    t.x = 0, t.y = 0;
}, cc.pIn = function(t, e) {
    t.x = e.x, t.y = e.y;
}, cc.pMultIn = function(t, e) {
    t.x *= e, t.y *= e;
}, cc.pSubIn = function(t, e) {
    t.x -= e.x, t.y -= e.y;
}, cc.pAddIn = function(t, e) {
    t.x += e.x, t.y += e.y;
}, cc.pNormalizeIn = function(t) {
    cc.pMultIn(t, 1 / Math.sqrt(t.x * t.x + t.y * t.y));
}, cc.SCENE_FADE = 4208917214, cc.TransitionEaseScene = cc.Class.extend({
    easeActionWithAction: function() {}
}), cc.TRANSITION_ORIENTATION_LEFT_OVER = 0, cc.TRANSITION_ORIENTATION_RIGHT_OVER = 1, 
cc.TRANSITION_ORIENTATION_UP_OVER = 0, cc.TRANSITION_ORIENTATION_DOWN_OVER = 1, 
cc.TransitionScene = cc.Scene.extend({
    _inScene: null,
    _outScene: null,
    _duration: null,
    _isInSceneOnTop: !1,
    _isSendCleanupToScene: !1,
    _setNewScene: function() {
        this.unschedule(this._setNewScene);
        var t = cc.Director.getInstance();
        this._isSendCleanupToScene = t.isSendCleanupToScene(), t.replaceScene(this._inScene), 
        t.getTouchDispatcher().setDispatchEvents(!0), this._outScene.setVisible(!0);
    },
    _sceneOrder: function() {
        this._isInSceneOnTop = !0;
    },
    draw: function() {
        this._isInSceneOnTop ? (this._outScene.visit(), this._inScene.visit()) : (this._inScene.visit(), 
        this._outScene.visit());
    },
    onEnter: function() {
        cc.Node.prototype.onEnter.call(this), cc.Director.getInstance().getTouchDispatcher().setDispatchEvents(!1), 
        this._outScene.onExitTransitionDidStart(), this._inScene.onEnter();
    },
    onExit: function() {
        cc.Node.prototype.onExit.call(this), cc.Director.getInstance().getTouchDispatcher().setDispatchEvents(!0), 
        this._outScene.onExit(), this._inScene.onEnterTransitionDidFinish();
    },
    cleanup: function() {
        cc.Node.prototype.cleanup.call(this), this._isSendCleanupToScene && this._outScene.cleanup();
    },
    initWithDuration: function(t, e) {
        return cc.Assert(null != e, "CCTransitionScene.initWithDuration() Argument scene must be non-nil"), 
        this.init() ? (this._duration = t, this.setAnchorPoint(cc.p(0, 0)), this.setPosition(0, 0), 
        this._inScene = e, this._outScene = cc.Director.getInstance().getRunningScene(), 
        this._outScene || (this._outScene = cc.Scene.create(), this._outScene.init()), cc.Assert(this._inScene != this._outScene, "CCTransitionScene.initWithDuration() Incoming scene must be different from the outgoing scene"), 
        this._sceneOrder(), !0) : !1;
    },
    finish: function() {
        this._inScene.setVisible(!0), this._inScene.setPosition(0, 0), this._inScene.setScale(1), 
        this._inScene.setRotation(0), cc.renderContextType === cc.WEBGL && this._inScene.getCamera().restore(), 
        this._outScene.setVisible(!1), this._outScene.setPosition(0, 0), this._outScene.setScale(1), 
        this._outScene.setRotation(0), cc.renderContextType === cc.WEBGL && this._outScene.getCamera().restore(), 
        this.schedule(this._setNewScene, 0);
    },
    hideOutShowIn: function() {
        this._inScene.setVisible(!0), this._outScene.setVisible(!1);
    }
}), cc.TransitionScene.create = function(t, e) {
    var i = new cc.TransitionScene();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionSceneOriented = cc.TransitionScene.extend({
    _orientation: 0,
    initWithDuration: function(t, e, i) {
        return cc.TransitionScene.prototype.initWithDuration.call(this, t, e) && (this._orientation = i), 
        !0;
    }
}), cc.TransitionSceneOriented.create = function(t, e, i) {
    var n = new cc.TransitionSceneOriented();
    return n.initWithDuration(t, e, i), n;
}, cc.TransitionRotoZoom = cc.TransitionScene.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this), this._inScene.setScale(.001), this._outScene.setScale(1), 
        this._inScene.setAnchorPoint(cc.p(.5, .5)), this._outScene.setAnchorPoint(cc.p(.5, .5));
        var t = cc.Sequence.create(cc.Spawn.create(cc.ScaleBy.create(this._duration / 2, .001), cc.RotateBy.create(this._duration / 2, 720)), cc.DelayTime.create(this._duration / 2));
        this._outScene.runAction(t), this._inScene.runAction(cc.Sequence.create(t.reverse(), cc.CallFunc.create(this.finish, this)));
    }
}), cc.TransitionRotoZoom.create = function(t, e) {
    var i = new cc.TransitionRotoZoom();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionJumpZoom = cc.TransitionScene.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var t = cc.Director.getInstance().getWinSize();
        this._inScene.setScale(.5), this._inScene.setPosition(t.width, 0), this._inScene.setAnchorPoint(cc.p(.5, .5)), 
        this._outScene.setAnchorPoint(cc.p(.5, .5));
        var e = cc.JumpBy.create(this._duration / 4, cc.p(-t.width, 0), t.width / 4, 2), i = cc.ScaleTo.create(this._duration / 4, 1), n = cc.ScaleTo.create(this._duration / 4, .5), r = cc.Sequence.create(n, e), c = cc.Sequence.create(e, i), o = cc.DelayTime.create(this._duration / 2);
        this._outScene.runAction(r), this._inScene.runAction(cc.Sequence.create(o, c, cc.CallFunc.create(this.finish, this)));
    }
}), cc.TransitionJumpZoom.create = function(t, e) {
    var i = new cc.TransitionJumpZoom();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionMoveInL = cc.TransitionScene.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this), this.initScenes();
        var t = this.action();
        this._inScene.runAction(cc.Sequence.create(this.easeActionWithAction(t), cc.CallFunc.create(this.finish, this)));
    },
    initScenes: function() {
        this._inScene.setPosition(-cc.Director.getInstance().getWinSize().width, 0);
    },
    action: function() {
        return cc.MoveTo.create(this._duration, cc.p(0, 0));
    },
    easeActionWithAction: function(t) {
        return cc.EaseOut.create(t, 2);
    }
}), cc.TransitionMoveInL.create = function(t, e) {
    var i = new cc.TransitionMoveInL();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionMoveInR = cc.TransitionMoveInL.extend({
    initScenes: function() {
        this._inScene.setPosition(cc.Director.getInstance().getWinSize().width, 0);
    }
}), cc.TransitionMoveInR.create = function(t, e) {
    var i = new cc.TransitionMoveInR();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionMoveInT = cc.TransitionMoveInL.extend({
    initScenes: function() {
        this._inScene.setPosition(0, cc.Director.getInstance().getWinSize().height);
    }
}), cc.TransitionMoveInT.create = function(t, e) {
    var i = new cc.TransitionMoveInT();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionMoveInB = cc.TransitionMoveInL.extend({
    initScenes: function() {
        this._inScene.setPosition(0, -cc.Director.getInstance().getWinSize().height);
    }
}), cc.TransitionMoveInB.create = function(t, e) {
    var i = new cc.TransitionMoveInB();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.ADJUST_FACTOR = .5, cc.TransitionSlideInL = cc.TransitionScene.extend({
    _sceneOrder: function() {
        this._isInSceneOnTop = !1;
    },
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this), this.initScenes();
        var t = this.action(), e = this.action(), i = this.easeActionWithAction(t), n = cc.Sequence.create(this.easeActionWithAction(e), cc.CallFunc.create(this.finish, this));
        this._inScene.runAction(i), this._outScene.runAction(n);
    },
    initScenes: function() {
        this._inScene.setPosition(-(cc.Director.getInstance().getWinSize().width - cc.ADJUST_FACTOR), 0);
    },
    action: function() {
        return cc.MoveBy.create(this._duration, cc.p(cc.Director.getInstance().getWinSize().width - cc.ADJUST_FACTOR, 0));
    },
    easeActionWithAction: function(t) {
        return cc.EaseOut.create(t, 2);
    }
}), cc.TransitionSlideInL.create = function(t, e) {
    var i = new cc.TransitionSlideInL();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionSlideInR = cc.TransitionSlideInL.extend({
    _sceneOrder: function() {
        this._isInSceneOnTop = !0;
    },
    initScenes: function() {
        this._inScene.setPosition(cc.Director.getInstance().getWinSize().width - cc.ADJUST_FACTOR, 0);
    },
    action: function() {
        return cc.MoveBy.create(this._duration, cc.p(-(cc.Director.getInstance().getWinSize().width - cc.ADJUST_FACTOR), 0));
    }
}), cc.TransitionSlideInR.create = function(t, e) {
    var i = new cc.TransitionSlideInR();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionSlideInB = cc.TransitionSlideInL.extend({
    _sceneOrder: function() {
        this._isInSceneOnTop = !1;
    },
    initScenes: function() {
        this._inScene.setPosition(0, cc.Director.getInstance().getWinSize().height - cc.ADJUST_FACTOR);
    },
    action: function() {
        return cc.MoveBy.create(this._duration, cc.p(0, -(cc.Director.getInstance().getWinSize().height - cc.ADJUST_FACTOR)));
    }
}), cc.TransitionSlideInB.create = function(t, e) {
    var i = new cc.TransitionSlideInB();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionSlideInT = cc.TransitionSlideInL.extend({
    _sceneOrder: function() {
        this._isInSceneOnTop = !0;
    },
    initScenes: function() {
        this._inScene.setPosition(0, -(cc.Director.getInstance().getWinSize().height - cc.ADJUST_FACTOR));
    },
    action: function() {
        return cc.MoveBy.create(this._duration, cc.p(0, cc.Director.getInstance().getWinSize().height - cc.ADJUST_FACTOR));
    }
}), cc.TransitionSlideInT.create = function(t, e) {
    var i = new cc.TransitionSlideInT();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionShrinkGrow = cc.TransitionScene.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this), this._inScene.setScale(.001), this._outScene.setScale(1), 
        this._inScene.setAnchorPoint(cc.p(2 / 3, .5)), this._outScene.setAnchorPoint(cc.p(1 / 3, .5));
        var t = cc.ScaleTo.create(this._duration, .01), e = cc.ScaleTo.create(this._duration, 1);
        this._inScene.runAction(this.easeActionWithAction(e)), this._outScene.runAction(cc.Sequence.create(this.easeActionWithAction(t), cc.CallFunc.create(this.finish, this)));
    },
    easeActionWithAction: function(t) {
        return cc.EaseOut.create(t, 2);
    }
}), cc.TransitionShrinkGrow.create = function(t, e) {
    var i = new cc.TransitionShrinkGrow();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionFlipX = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var t, e;
        this._inScene.setVisible(!1);
        var i, n, r, c;
        this._orientation === cc.TRANSITION_ORIENTATION_RIGHT_OVER ? (i = 90, n = 270, r = 90, 
        c = 0) : (i = -90, n = 90, r = -90, c = 0), t = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Show.create(), cc.OrbitCamera.create(this._duration / 2, 1, 0, n, i, 0, 0), cc.CallFunc.create(this.finish, this)), 
        e = cc.Sequence.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, c, r, 0, 0), cc.Hide.create(), cc.DelayTime.create(this._duration / 2)), 
        this._inScene.runAction(t), this._outScene.runAction(e);
    }
}), cc.TransitionFlipX.create = function(t, e, i) {
    null == i && (i = cc.TRANSITION_ORIENTATION_RIGHT_OVER);
    var n = new cc.TransitionFlipX();
    return n.initWithDuration(t, e, i), n;
}, cc.TransitionFlipY = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var t, e;
        this._inScene.setVisible(!1);
        var i, n, r, c;
        this._orientation == cc.TRANSITION_ORIENTATION_UP_OVER ? (i = 90, n = 270, r = 90, 
        c = 0) : (i = -90, n = 90, r = -90, c = 0), t = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Show.create(), cc.OrbitCamera.create(this._duration / 2, 1, 0, n, i, 90, 0), cc.CallFunc.create(this.finish, this)), 
        e = cc.Sequence.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, c, r, 90, 0), cc.Hide.create(), cc.DelayTime.create(this._duration / 2)), 
        this._inScene.runAction(t), this._outScene.runAction(e);
    }
}), cc.TransitionFlipY.create = function(t, e, i) {
    null == i && (i = cc.TRANSITION_ORIENTATION_UP_OVER);
    var n = new cc.TransitionFlipY();
    return n.initWithDuration(t, e, i), n;
}, cc.TransitionFlipAngular = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var t, e;
        this._inScene.setVisible(!1);
        var i, n, r, c;
        this._orientation === cc.TRANSITION_ORIENTATION_RIGHT_OVER ? (i = 90, n = 270, r = 90, 
        c = 0) : (i = -90, n = 90, r = -90, c = 0), t = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Show.create(), cc.OrbitCamera.create(this._duration / 2, 1, 0, n, i, -45, 0), cc.CallFunc.create(this.finish, this)), 
        e = cc.Sequence.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, c, r, 45, 0), cc.Hide.create(), cc.DelayTime.create(this._duration / 2)), 
        this._inScene.runAction(t), this._outScene.runAction(e);
    }
}), cc.TransitionFlipAngular.create = function(t, e, i) {
    null == i && (i = cc.TRANSITION_ORIENTATION_RIGHT_OVER);
    var n = new cc.TransitionFlipAngular();
    return n.initWithDuration(t, e, i), n;
}, cc.TransitionZoomFlipX = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var t, e;
        this._inScene.setVisible(!1);
        var i, n, r, c;
        this._orientation === cc.TRANSITION_ORIENTATION_RIGHT_OVER ? (i = 90, n = 270, r = 90, 
        c = 0) : (i = -90, n = 90, r = -90, c = 0), t = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, n, i, 0, 0), cc.ScaleTo.create(this._duration / 2, 1), cc.Show.create()), cc.CallFunc.create(this.finish, this)), 
        e = cc.Sequence.create(cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, c, r, 0, 0), cc.ScaleTo.create(this._duration / 2, .5)), cc.Hide.create(), cc.DelayTime.create(this._duration / 2)), 
        this._inScene.setScale(.5), this._inScene.runAction(t), this._outScene.runAction(e);
    }
}), cc.TransitionZoomFlipX.create = function(t, e, i) {
    null == i && (i = cc.TRANSITION_ORIENTATION_RIGHT_OVER);
    var n = new cc.TransitionZoomFlipX();
    return n.initWithDuration(t, e, i), n;
}, cc.TransitionZoomFlipY = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var t, e;
        this._inScene.setVisible(!1);
        var i, n, r, c;
        this._orientation === cc.TRANSITION_ORIENTATION_UP_OVER ? (i = 90, n = 270, r = 90, 
        c = 0) : (i = -90, n = 90, r = -90, c = 0), t = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, n, i, 90, 0), cc.ScaleTo.create(this._duration / 2, 1), cc.Show.create()), cc.CallFunc.create(this.finish, this)), 
        e = cc.Sequence.create(cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, c, r, 90, 0), cc.ScaleTo.create(this._duration / 2, .5)), cc.Hide.create(), cc.DelayTime.create(this._duration / 2)), 
        this._inScene.setScale(.5), this._inScene.runAction(t), this._outScene.runAction(e);
    }
}), cc.TransitionZoomFlipY.create = function(t, e, i) {
    null == i && (i = cc.TRANSITION_ORIENTATION_UP_OVER);
    var n = new cc.TransitionZoomFlipY();
    return n.initWithDuration(t, e, i), n;
}, cc.TransitionZoomFlipAngular = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var t, e;
        this._inScene.setVisible(!1);
        var i, n, r, c;
        this._orientation === cc.TRANSITION_ORIENTATION_RIGHT_OVER ? (i = 90, n = 270, r = 90, 
        c = 0) : (i = -90, n = 90, r = -90, c = 0), t = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, n, i, -45, 0), cc.ScaleTo.create(this._duration / 2, 1), cc.Show.create()), cc.Show.create(), cc.CallFunc.create(this.finish, this)), 
        e = cc.Sequence.create(cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, c, r, 45, 0), cc.ScaleTo.create(this._duration / 2, .5)), cc.Hide.create(), cc.DelayTime.create(this._duration / 2)), 
        this._inScene.setScale(.5), this._inScene.runAction(t), this._outScene.runAction(e);
    }
}), cc.TransitionZoomFlipAngular.create = function(t, e, i) {
    null == i && (i = cc.TRANSITION_ORIENTATION_RIGHT_OVER);
    var n = new cc.TransitionZoomFlipAngular();
    return n.initWithDuration(t, e, i), n;
}, cc.TransitionFade = cc.TransitionScene.extend({
    _color: null,
    ctor: function() {
        cc.TransitionScene.prototype.ctor.call(this), this._color = new cc.Color4B();
    },
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var t = cc.LayerColor.create(this._color);
        this._inScene.setVisible(!1), this.addChild(t, 2, cc.SCENE_FADE);
        var e = this.getChildByTag(cc.SCENE_FADE), i = cc.Sequence.create(cc.FadeIn.create(this._duration / 2), cc.CallFunc.create(this.hideOutShowIn, this), cc.FadeOut.create(this._duration / 2), cc.CallFunc.create(this.finish, this));
        e.runAction(i);
    },
    onExit: function() {
        cc.TransitionScene.prototype.onExit.call(this), this.removeChildByTag(cc.SCENE_FADE, !1);
    },
    initWithDuration: function(t, e, i) {
        return i = i || cc.black(), cc.TransitionScene.prototype.initWithDuration.call(this, t, e) && (this._color.r = i.r, 
        this._color.g = i.g, this._color.b = i.b, this._color.a = 0), !0;
    }
}), cc.TransitionFade.create = function(t, e, i) {
    var n = new cc.TransitionFade();
    return n.initWithDuration(t, e, i), n;
}, cc.TransitionCrossFade = cc.TransitionScene.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var t = new cc.Color4B(0, 0, 0, 0), e = cc.Director.getInstance().getWinSize(), i = cc.LayerColor.create(t), n = cc.RenderTexture.create(e.width, e.height);
        if (null != n) {
            n.getSprite().setAnchorPoint(cc.p(.5, .5)), n.setPosition(e.width / 2, e.height / 2), 
            n.setAnchorPoint(cc.p(.5, .5)), n.begin(), this._inScene.visit(), n.end();
            var r = cc.RenderTexture.create(e.width, e.height);
            r.getSprite().setAnchorPoint(cc.p(.5, .5)), r.setPosition(e.width / 2, e.height / 2), 
            r.setAnchorPoint(cc.p(.5, .5)), r.begin(), this._outScene.visit(), r.end(), n.getSprite().setBlendFunc(gl.ONE, gl.ONE), 
            r.getSprite().setBlendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA), i.addChild(n), 
            i.addChild(r), n.getSprite().setOpacity(255), r.getSprite().setOpacity(255);
            var c = cc.Sequence.create(cc.FadeTo.create(this._duration, 0), cc.CallFunc.create(this.hideOutShowIn, this), cc.CallFunc.create(this.finish, this));
            r.getSprite().runAction(c), this.addChild(i, 2, cc.SCENE_FADE);
        }
    },
    onExit: function() {
        this.removeChildByTag(cc.SCENE_FADE, !1), cc.TransitionScene.prototype.onExit.call(this);
    },
    draw: function() {}
}), cc.TransitionCrossFade.create = function(t, e) {
    var i = new cc.TransitionCrossFade();
    return i.initWithDuration(t, e), i;
}, cc.TransitionTurnOffTiles = cc.TransitionScene.extend({
    _sceneOrder: function() {
        this._isInSceneOnTop = !1;
    },
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var t = cc.Director.getInstance().getWinSize(), e = t.width / t.height, i = 0 | 12 * e, n = 12, r = cc.TurnOffTiles.create(this._duration, cc.size(i, n)), c = this.easeActionWithAction(r);
        this._outScene.runAction(cc.Sequence.create(c, cc.CallFunc.create(this.finish, this), cc.StopGrid.create()));
    },
    easeActionWithAction: function(t) {
        return t;
    }
}), cc.TransitionTurnOffTiles.create = function(t, e) {
    var i = new cc.TransitionTurnOffTiles();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionSplitCols = cc.TransitionScene.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this), this._inScene.setVisible(!1);
        var t = this.action(), e = cc.Sequence.create(t, cc.CallFunc.create(this.hideOutShowIn, this), t.reverse());
        this.runAction(cc.Sequence.create(this.easeActionWithAction(e), cc.CallFunc.create(this.finish, this), cc.StopGrid.create()));
    },
    easeActionWithAction: function(t) {
        return cc.EaseInOut.create(t, 3);
    },
    action: function() {
        return cc.SplitCols.create(this._duration / 2, 3);
    }
}), cc.TransitionSplitCols.create = function(t, e) {
    var i = new cc.TransitionSplitCols();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionSplitRows = cc.TransitionSplitCols.extend({
    action: function() {
        return cc.SplitRows.create(this._duration / 2, 3);
    }
}), cc.TransitionSplitRows.create = function(t, e) {
    var i = new cc.TransitionSplitRows();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionFadeTR = cc.TransitionScene.extend({
    _sceneOrder: function() {
        this._isInSceneOnTop = !1;
    },
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var t = cc.Director.getInstance().getWinSize(), e = t.width / t.height, i = 0 | 12 * e, n = 12, r = this.actionWithSize(cc.size(i, n));
        this._outScene.runAction(cc.Sequence.create(this.easeActionWithAction(r), cc.CallFunc.create(this.finish, this), cc.StopGrid.create()));
    },
    easeActionWithAction: function(t) {
        return t;
    },
    actionWithSize: function(t) {
        return cc.FadeOutTRTiles.create(this._duration, t);
    }
}), cc.TransitionFadeTR.create = function(t, e) {
    var i = new cc.TransitionFadeTR();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionFadeBL = cc.TransitionFadeTR.extend({
    actionWithSize: function(t) {
        return cc.FadeOutBLTiles.create(this._duration, t);
    }
}), cc.TransitionFadeBL.create = function(t, e) {
    var i = new cc.TransitionFadeBL();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionFadeUp = cc.TransitionFadeTR.extend({
    actionWithSize: function(t) {
        return cc.FadeOutUpTiles.create(this._duration, t);
    }
}), cc.TransitionFadeUp.create = function(t, e) {
    var i = new cc.TransitionFadeUp();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.TransitionFadeDown = cc.TransitionFadeTR.extend({
    actionWithSize: function(t) {
        return cc.FadeOutDownTiles.create(this._duration, t);
    }
}), cc.TransitionFadeDown.create = function(t, e) {
    var i = new cc.TransitionFadeDown();
    return null != i && i.initWithDuration(t, e) ? i : null;
}, cc.kmVec3 = function(t, e, i) {
    this.x = t || 0, this.y = e || 0, this.z = i || 0;
}, cc.kmVec3Fill = function(t, e, i, n) {
    return t ? (t.x = e, t.y = i, t.z = n, t) : new cc.kmVec3(e, i, n);
}, cc.kmVec3Length = function(t) {
    return Math.sqrt(cc.kmSQR(t.x) + cc.kmSQR(t.y) + cc.kmSQR(t.z));
}, cc.kmVec3LengthSq = function(t) {
    return cc.kmSQR(t.x) + cc.kmSQR(t.y) + cc.kmSQR(t.z);
}, cc.kmVec3Normalize = function(t, e) {
    var i = 1 / cc.kmVec3Length(e);
    return t.x = e.x * i, t.y = e.y * i, t.z = e.z * i, t;
}, cc.kmVec3Cross = function(t, e, i) {
    return t.x = e.y * i.z - e.z * i.y, t.y = e.z * i.x - e.x * i.z, t.z = e.x * i.y - e.y * i.x, 
    t;
}, cc.kmVec3Dot = function(t, e) {
    return t.x * e.x + t.y * e.y + t.z * e.z;
}, cc.kmVec3Add = function(t, e, i) {
    return t.x = e.x + i.x, t.y = e.y + i.y, t.z = e.z + i.z, t;
}, cc.kmVec3Subtract = function(t, e, i) {
    return t.x = e.x - i.x, t.y = e.y - i.y, t.z = e.z - i.z, t;
}, cc.kmVec3Transform = function(t, e, i) {
    return t.x = e.x * i.mat[0] + e.y * i.mat[4] + e.z * i.mat[8] + i.mat[12], t.y = e.x * i.mat[1] + e.y * i.mat[5] + e.z * i.mat[9] + i.mat[13], 
    t.z = e.x * i.mat[2] + e.y * i.mat[6] + e.z * i.mat[10] + i.mat[14], t;
}, cc.kmVec3TransformNormal = function(t, e, i) {
    return t.x = e.x * i.mat[0] + e.y * i.mat[4] + e.z * i.mat[8], t.y = e.x * i.mat[1] + e.y * i.mat[5] + e.z * i.mat[9], 
    t.z = e.x * i.mat[2] + e.y * i.mat[6] + e.z * i.mat[10], t;
}, cc.kmVec3TransformCoord = function(t, e, i) {
    var n = new cc.kmVec4(), r = new cc.kmVec4();
    return cc.kmVec4Fill(r, e.x, e.y, e.z, 1), cc.kmVec4Transform(n, r, i), t.x = n.x / n.w, 
    t.y = n.y / n.w, t.z = n.z / n.w, t;
}, cc.kmVec3Scale = function(t, e, i) {
    return t.x = e.x * i, t.y = e.y * i, t.z = e.z * i, t;
}, cc.kmVec3AreEqual = function(t, e) {
    return t.x < e.x + cc.kmEpsilon && t.x > e.x - cc.kmEpsilon && t.y < e.y + cc.kmEpsilon && t.y > e.y - cc.kmEpsilon && t.z < e.z + cc.kmEpsilon && t.z > e.z - cc.kmEpsilon ? 1 : 0;
}, cc.kmVec3InverseTransform = function(t, e, i) {
    var n = new cc.kmVec3(e.x - i.mat[12], e.y - i.mat[13], e.z - i.mat[14]);
    return t.x = n.x * i.mat[0] + n.y * i.mat[1] + n.z * i.mat[2], t.y = n.x * i.mat[4] + n.y * i.mat[5] + n.z * i.mat[6], 
    t.z = n.x * i.mat[8] + n.y * i.mat[9] + n.z * i.mat[10], t;
}, cc.kmVec3InverseTransformNormal = function(t, e, i) {
    return t.x = e.x * i.mat[0] + e.y * i.mat[1] + e.z * i.mat[2], t.y = e.x * i.mat[4] + e.y * i.mat[5] + e.z * i.mat[6], 
    t.z = e.x * i.mat[8] + e.y * i.mat[9] + e.z * i.mat[10], t;
}, cc.kmVec3Assign = function(t, e) {
    return t == e ? t : (t.x = e.x, t.y = e.y, t.z = e.z, t);
}, cc.kmVec3Zero = function(t) {
    return t.x = 0, t.y = 0, t.z = 0, t;
}, cc.kmVec3ToTypeArray = function(t) {
    if (!t) return null;
    var e = new Float32Array(3);
    return e[0] = t.x, e[1] = t.y, e[2] = t.z, e;
}, cc.km_mat4_stack = function(t, e, i, n) {
    this.top = i, this.stack = n;
}, cc.km_mat4_stack.INITIAL_SIZE = 30, cc.km_mat4_stack_initialize = function(t) {
    t.stack = [], t.top = null;
}, cc.km_mat4_stack_push = function(t, e) {
    t.stack.push(t.top), t.top = new cc.kmMat4(), cc.kmMat4Assign(t.top, e);
}, cc.km_mat4_stack_pop = function(t) {
    t.top = t.stack.pop();
}, cc.km_mat4_stack_release = function(t) {
    t.stack = null, t.top = null, t = null;
}, cc.KM_GL_MODELVIEW = 5888, cc.KM_GL_PROJECTION = 5889, cc.KM_GL_TEXTURE = 5890, 
cc.modelview_matrix_stack = new cc.km_mat4_stack(), cc.projection_matrix_stack = new cc.km_mat4_stack(), 
cc.texture_matrix_stack = new cc.km_mat4_stack(), cc.current_stack = null, cc.initialized = !1, 
cc.lazyInitialize = function() {
    if (!cc.initialized) {
        var t = new cc.kmMat4();
        cc.km_mat4_stack_initialize(cc.modelview_matrix_stack), cc.km_mat4_stack_initialize(cc.projection_matrix_stack), 
        cc.km_mat4_stack_initialize(cc.texture_matrix_stack), cc.current_stack = cc.modelview_matrix_stack, 
        cc.initialized = !0, cc.kmMat4Identity(t), cc.km_mat4_stack_push(cc.modelview_matrix_stack, t), 
        cc.km_mat4_stack_push(cc.projection_matrix_stack, t), cc.km_mat4_stack_push(cc.texture_matrix_stack, t);
    }
}, cc.lazyInitialize(), cc.kmGLFreeAll = function() {
    cc.km_mat4_stack_release(cc.modelview_matrix_stack), cc.km_mat4_stack_release(cc.projection_matrix_stack), 
    cc.km_mat4_stack_release(cc.texture_matrix_stack), cc.initialized = !1, cc.current_stack = null;
}, cc.kmGLPushMatrix = function() {
    cc.km_mat4_stack_push(cc.current_stack, cc.current_stack.top);
}, cc.kmGLPushMatrixWitMat4 = function(t) {
    cc.current_stack.stack.push(cc.current_stack.top), cc.kmMat4Assign(t, cc.current_stack.top), 
    cc.current_stack.top = t;
}, cc.kmGLPopMatrix = function() {
    cc.current_stack.top = cc.current_stack.stack.pop();
}, cc.kmGLMatrixMode = function(t) {
    switch (t) {
      case cc.KM_GL_MODELVIEW:
        cc.current_stack = cc.modelview_matrix_stack;
        break;

      case cc.KM_GL_PROJECTION:
        cc.current_stack = cc.projection_matrix_stack;
        break;

      case cc.KM_GL_TEXTURE:
        cc.current_stack = cc.texture_matrix_stack;
        break;

      default:
        cc.Assert(0, "Invalid matrix mode specified");
    }
}, cc.kmGLLoadIdentity = function() {
    cc.kmMat4Identity(cc.current_stack.top);
}, cc.kmGLLoadMatrix = function(t) {
    cc.kmMat4Assign(cc.current_stack.top, t);
}, cc.kmGLMultMatrix = function(t) {
    cc.kmMat4Multiply(cc.current_stack.top, cc.current_stack.top, t);
}, cc.kmGLTranslatef = function(t, e, i) {
    var n = new cc.kmMat4();
    cc.kmMat4Translation(n, t, e, i), cc.kmMat4Multiply(cc.current_stack.top, cc.current_stack.top, n);
}, cc.kmGLRotatef = function(t, e, i, n) {
    var r = new cc.kmVec3(e, i, n), c = new cc.kmMat4();
    cc.kmMat4RotationAxisAngle(c, r, cc.kmDegreesToRadians(t)), cc.kmMat4Multiply(cc.current_stack.top, cc.current_stack.top, c);
}, cc.kmGLScalef = function(t, e, i) {
    var n = new cc.kmMat4();
    cc.kmMat4Scaling(n, t, e, i), cc.kmMat4Multiply(cc.current_stack.top, cc.current_stack.top, n);
}, cc.kmGLGetMatrix = function(t, e) {
    switch (t) {
      case cc.KM_GL_MODELVIEW:
        cc.kmMat4Assign(e, cc.modelview_matrix_stack.top);
        break;

      case cc.KM_GL_PROJECTION:
        cc.kmMat4Assign(e, cc.projection_matrix_stack.top);
        break;

      case cc.KM_GL_TEXTURE:
        cc.kmMat4Assign(e, cc.texture_matrix_stack.top);
        break;

      default:
        cc.Assert(1, "Invalid matrix mode specified");
    }
}, cc.g_NumberOfDraws = 0, cc.DIRECTOR_PROJECTION_2D = 0, cc.DIRECTOR_PROJECTION_3D = 1, 
cc.DIRECTOR_PROJECTION_CUSTOM = 3, cc.DIRECTOR_PROJECTION_DEFAULT = cc.DIRECTOR_PROJECTION_3D, 
cc.DEVICE_ORIENTATION_PORTRAIT = 0, cc.DEVICE_ORIENTATION_LANDSCAPE_LEFT = 1, cc.DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN = 2, 
cc.DEVICE_ORIENTATION_LANDSCAPE_RIGHT = 3, cc.DEVICE_MAX_ORIENTATIONS = 2, cc.DirectorDelegate = cc.Class.extend({
    updateProjection: function() {}
}), cc.GLToClipTransform = function(t) {
    var e = new cc.kmMat4();
    cc.kmGLGetMatrix(cc.KM_GL_PROJECTION, e);
    var i = new cc.kmMat4();
    cc.kmGLGetMatrix(cc.KM_GL_MODELVIEW, i), cc.kmMat4Multiply(t, e, i);
}, cc.Director = cc.Class.extend({
    _landscape: !1,
    _nextDeltaTimeZero: !1,
    _paused: !1,
    _purgeDirecotorInNextLoop: !1,
    _sendCleanupToScene: !1,
    _animationInterval: 0,
    _oldAnimationInterval: 0,
    _projection: 0,
    _accumDt: 0,
    _contentScaleFactor: 1,
    _displayStats: !1,
    _deltaTime: 0,
    _frameRate: 0,
    _FPSLabel: null,
    _SPFLabel: null,
    _drawsLabel: null,
    _winSizeInPoints: null,
    _lastUpdate: null,
    _nextScene: null,
    _notificationNode: null,
    _openGLView: null,
    _scenesStack: null,
    _projectionDelegate: null,
    _runningScene: null,
    _frames: 0,
    _totalFrames: 0,
    _secondsPerFrame: 0,
    _dirtyRegion: null,
    _scheduler: null,
    _actionManager: null,
    _touchDispatcher: null,
    _keyboardDispatcher: null,
    _accelerometer: null,
    _mouseDispatcher: null,
    _isBlur: !1,
    ctor: function() {
        if (this._lastUpdate = Date.now(), !cc.isAddedHiddenEvent) {
            var t = this;
            window.addEventListener("focus", function() {
                t._lastUpdate = Date.now();
            }, !1);
        }
    },
    _resetLastUpdate: function() {
        this._lastUpdate = Date.now();
    },
    init: function() {
        return this._oldAnimationInterval = this._animationInterval = 1 / cc.defaultFPS, 
        this._scenesStack = [], this._projection = cc.DIRECTOR_PROJECTION_DEFAULT, this._projectionDelegate = null, 
        this._accumDt = 0, this._frameRate = 0, this._displayStats = !1, this._totalFrames = this._frames = 0, 
        this._lastUpdate = Date.now(), this._paused = !1, this._purgeDirecotorInNextLoop = !1, 
        this._winSizeInPoints = cc.size(0, 0), this._openGLView = null, this._contentScaleFactor = 1, 
        this._scheduler = new cc.Scheduler(), this._actionManager = new cc.ActionManager(), 
        this._scheduler.scheduleUpdateForTarget(this._actionManager, cc.PRIORITY_SYSTEM, !1), 
        this._touchDispatcher = new cc.TouchDispatcher(), this._touchDispatcher.init(), 
        this._keyboardDispatcher = cc.KeyboardDispatcher.getInstance(), this._accelerometer = new cc.Accelerometer(), 
        this._mouseDispatcher = new cc.MouseDispatcher(), this._mouseDispatcher.init(), 
        !0;
    },
    calculateDeltaTime: function() {
        var t = Date.now();
        this._nextDeltaTimeZero ? (this._deltaTime = 0, this._nextDeltaTimeZero = !1) : this._deltaTime = (t - this._lastUpdate) / 1e3, 
        cc.COCOS2D_DEBUG > 0 && this._deltaTime > .2 && (this._deltaTime = 1 / 60), this._lastUpdate = t;
    },
    convertToGL: function(t) {
        var e = new cc.kmMat4();
        cc.GLToClipTransform(e);
        var i = new cc.kmMat4();
        cc.kmMat4Inverse(i, e);
        var n = e.mat[14] / e.mat[15], r = this._openGLView.getDesignResolutionSize(), c = new cc.kmVec3(2 * t.x / r.width - 1, 1 - 2 * t.y / r.height, n), o = new cc.kmVec3();
        return cc.kmVec3TransformCoord(o, c, i), cc.p(o.x, o.y);
    },
    convertToUI: function(t) {
        var e = new cc.kmMat4();
        cc.GLToClipTransform(e);
        var i = new cc.kmVec3(), n = new cc.kmVec3(t.x, t.y, 0);
        cc.kmVec3TransformCoord(i, n, e);
        var r = this._openGLView.getDesignResolutionSize();
        return cc.p(r.width * (.5 * i.x + .5), r.height * (.5 * -i.y + .5));
    },
    drawScene: function() {
        this.calculateDeltaTime(), this._paused || this._scheduler.update(this._deltaTime), 
        this._clear(), this._nextScene && this.setNextScene(), this._beforeVisitScene && this._beforeVisitScene(), 
        this._runningScene && this._runningScene.visit(), this._notificationNode && this._notificationNode.visit(), 
        this._displayStats && this._showStats(), this._afterVisitScene && this._afterVisitScene(), 
        this._totalFrames++, this._displayStats && this._calculateMPF();
    },
    _clearCanvas: function() {
        cc.renderContext.clearRect(0, 0, cc.canvas.width, -cc.canvas.height);
    },
    _clearWebGL: function() {
        var t = cc.renderContext;
        t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT);
    },
    _beforeVisitScene: null,
    _afterVisitScene: null,
    _beforeVisitSceneWebGL: function() {
        cc.kmGLPushMatrix();
    },
    _afterVisitSceneWebGL: function() {
        cc.kmGLPopMatrix();
    },
    end: function() {
        this._purgeDirecotorInNextLoop = !0;
    },
    getContentScaleFactor: function() {
        return this._contentScaleFactor;
    },
    getNotificationNode: function() {
        return this._notificationNode;
    },
    getWinSize: function() {
        return cc.size(this._winSizeInPoints.width, this._winSizeInPoints.height);
    },
    getWinSizeInPixels: function() {
        return cc.size(this._winSizeInPoints.width * this._contentScaleFactor, this._winSizeInPoints.height * this._contentScaleFactor);
    },
    getVisibleSize: function() {
        return this._openGLView ? this._openGLView.getVisibleSize() : this.getWinSize();
    },
    getVisibleOrigin: function() {
        return this._openGLView ? this._openGLView.getVisibleOrigin() : cc.p(0, 0);
    },
    getZEye: function() {
        return this._winSizeInPoints.height / 1.1566;
    },
    pause: function() {
        this._paused || (this._oldAnimationInterval = this._animationInterval, this.setAnimationInterval(.25), 
        this._paused = !0);
    },
    popScene: function() {
        cc.Assert(null != this._runningScene, "running scene should not null"), this._scenesStack.pop();
        var t = this._scenesStack.length;
        0 == t ? this.end() : (this._sendCleanupToScene = !0, this._nextScene = this._scenesStack[t - 1]);
    },
    purgeCachedData: function() {
        cc.LabelBMFont.purgeCachedData();
    },
    purgeDirector: function() {
        this.getScheduler().unscheduleAllCallbacks(), this._touchDispatcher.removeAllDelegates(), 
        this._runningScene && (this._runningScene.onExitTransitionDidStart(), this._runningScene.onExit(), 
        this._runningScene.cleanup()), this._runningScene = null, this._nextScene = null, 
        this._scenesStack = [], this.stopAnimation(), cc.LabelBMFont.purgeCachedData(), 
        cc.AnimationCache.purgeSharedAnimationCache(), cc.SpriteFrameCache.purgeSharedSpriteFrameCache(), 
        cc.TextureCache.purgeSharedTextureCache(), cc.CHECK_GL_ERROR_DEBUG();
    },
    pushScene: function(t) {
        cc.Assert(t, "the scene should not null"), this._sendCleanupToScene = !1, this._scenesStack.push(t), 
        this._nextScene = t;
    },
    replaceScene: function(t) {
        cc.Assert(this._runningScene, "Use runWithScene: instead to start the director"), 
        cc.Assert(null != t, "the scene should not be null");
        var e = this._scenesStack.length;
        0 === e ? (this._sendCleanupToScene = !0, this._scenesStack[e] = t, this._nextScene = t) : (this._sendCleanupToScene = !0, 
        this._scenesStack[e - 1] = t, this._nextScene = t);
    },
    resume: function() {
        this._paused && (this.setAnimationInterval(this._oldAnimationInterval), this._lastUpdate = Date.now(), 
        this._lastUpdate || cc.log("cocos2d: Director: Error in gettimeofday"), this._paused = !1, 
        this._deltaTime = 0);
    },
    runWithScene: function(t) {
        cc.Assert(null != t, "This command can only be used to start the CCDirector. There is already a scene present."), 
        cc.Assert(null == this._runningScene, "_runningScene should be null"), this.pushScene(t), 
        this.startAnimation();
    },
    setAlphaBlending: function(t) {
        t ? cc.glBlendFunc(cc.BLEND_SRC, cc.BLEND_DST) : cc.glBlendFunc(cc.renderContext.ONE, cc.renderContext.ZERO);
    },
    setContentScaleFactor: function(t) {
        t != this._contentScaleFactor && (this._contentScaleFactor = t, this._createStatsLabel());
    },
    setDepthTest: function(t) {
        cc.renderContextType !== cc.CANVAS && (t ? (cc.renderContext.clearDepth(1), cc.renderContext.enable(cc.renderContext.DEPTH_TEST), 
        cc.renderContext.depthFunc(cc.renderContext.LEQUAL)) : cc.renderContext.disable(cc.renderContext.DEPTH_TEST));
    },
    setDefaultValues: function() {},
    setGLDefaultValues: function() {
        this.setAlphaBlending(!0), this.setDepthTest(!1), this.setProjection(this._projection), 
        cc.renderContext.clearColor(0, 0, 0, 1);
    },
    setNextDeltaTimeZero: function(t) {
        this._nextDeltaTimeZero = t;
    },
    setNextScene: function() {
        var t = this._runningScene ? this._runningScene instanceof cc.TransitionScene : !1, e = this._nextScene ? this._nextScene instanceof cc.TransitionScene : !1;
        e || (this._runningScene && (this._runningScene.onExitTransitionDidStart(), this._runningScene.onExit()), 
        this._sendCleanupToScene && this._runningScene && this._runningScene.cleanup()), 
        this._runningScene = this._nextScene, this._nextScene = null, t || null == this._runningScene || (this._runningScene.onEnter(), 
        this._runningScene.onEnterTransitionDidFinish());
    },
    setNotificationNode: function(t) {
        this._notificationNode = t;
    },
    getDelegate: function() {
        return this._projectionDelegate;
    },
    setDelegate: function(t) {
        this._projectionDelegate = t;
    },
    setOpenGLView: function(t) {
        if (this._winSizeInPoints = cc.size(cc.canvas.width, cc.canvas.height), this._openGLView = t || cc.EGLView.getInstance(), 
        cc.renderContextType !== cc.CANVAS) {
            var e = cc.Configuration.getInstance();
            e.gatherGPUInfo(), e.dumpInfo(), this._createStatsLabel(), this.setGLDefaultValues(), 
            this._touchDispatcher.setDispatchEvents(!0);
        }
    },
    setViewport: function() {
        if (this._openGLView) {
            var t = this._winSizeInPoints;
            this._openGLView.setViewPortInPoints(0, 0, t.width, t.height);
        }
    },
    setProjection: function(t) {
        var e = this._winSizeInPoints;
        if (cc.renderContextType === cc.WEBGL) switch (this.setViewport(), t) {
          case cc.DIRECTOR_PROJECTION_2D:
            cc.kmGLMatrixMode(cc.KM_GL_PROJECTION), cc.kmGLLoadIdentity();
            var i = new cc.kmMat4();
            cc.kmMat4OrthographicProjection(i, 0, e.width, 0, e.height, -1024, 1024), cc.kmGLMultMatrix(i), 
            cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW), cc.kmGLLoadIdentity();
            break;

          case cc.DIRECTOR_PROJECTION_3D:
            var n = this.getZEye(), r = new cc.kmMat4(), c = new cc.kmMat4();
            cc.kmGLMatrixMode(cc.KM_GL_PROJECTION), cc.kmGLLoadIdentity(), cc.kmMat4PerspectiveProjection(r, 60, e.width / e.height, .1, 2 * n), 
            cc.kmGLMultMatrix(r), cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW), cc.kmGLLoadIdentity();
            var o = cc.kmVec3Fill(null, e.width / 2, e.height / 2, n), s = cc.kmVec3Fill(null, e.width / 2, e.height / 2, 0), a = cc.kmVec3Fill(null, 0, 1, 0);
            cc.kmMat4LookAt(c, o, s, a), cc.kmGLMultMatrix(c);
            break;

          case cc.DIRECTOR_PROJECTION_CUSTOM:
            this._projectionDelegate && this._projectionDelegate.updateProjection();
            break;

          default:
            cc.log("cocos2d: Director: unrecognized projection");
        }
        this._projection = t, cc.setProjectionMatrixDirty();
    },
    _showStats: function() {
        this._frames++, this._accumDt += this._deltaTime, this._displayStats && (this._FPSLabel && this._SPFLabel && this._drawsLabel ? (this._accumDt > cc.DIRECTOR_FPS_INTERVAL && (this._SPFLabel.setString(this._secondsPerFrame.toFixed(3)), 
        this._frameRate = this._frames / this._accumDt, this._frames = 0, this._accumDt = 0, 
        this._FPSLabel.setString(this._frameRate.toFixed(1)), this._drawsLabel.setString((0 | cc.g_NumberOfDraws).toString())), 
        this._FPSLabel.visit(), this._SPFLabel.visit(), this._drawsLabel.visit()) : this._createStatsLabel()), 
        cc.g_NumberOfDraws = 0;
    },
    isSendCleanupToScene: function() {
        return this._sendCleanupToScene;
    },
    getRunningScene: function() {
        return this._runningScene;
    },
    getAnimationInterval: function() {
        return this._animationInterval;
    },
    isDisplayStats: function() {
        return this._displayStats;
    },
    setDisplayStats: function(t) {
        this._displayStats = t;
    },
    getSecondsPerFrame: function() {
        return this._secondsPerFrame;
    },
    getOpenGLView: function() {
        return this._openGLView;
    },
    isNextDeltaTimeZero: function() {
        return this._nextDeltaTimeZero;
    },
    isPaused: function() {
        return this._paused;
    },
    getTotalFrames: function() {
        return this._totalFrames;
    },
    getProjection: function() {
        return this._projection;
    },
    popToRootScene: function() {
        this.popToSceneStackLevel(1);
    },
    popToSceneStackLevel: function(t) {
        cc.Assert(null != this._runningScene, "A running Scene is needed");
        var e = this._scenesStack, i = e.length;
        if (0 == i) return this.end(), void 0;
        if (!(t > i)) {
            for (;i > t; ) {
                var n = e.pop();
                n.isRunning() && (n.onExitTransitionDidStart(), n.onExit()), n.cleanup(), i--;
            }
            this._nextScene = e[e.length - 1], this._sendCleanupToScene = !1;
        }
    },
    getScheduler: function() {
        return this._scheduler;
    },
    setScheduler: function(t) {
        this._scheduler != t && (this._scheduler = t);
    },
    getActionManager: function() {
        return this._actionManager;
    },
    setActionManager: function(t) {
        this._actionManager != t && (this._actionManager = t);
    },
    getTouchDispatcher: function() {
        return this._touchDispatcher;
    },
    setTouchDispatcher: function(t) {
        this._touchDispatcher != t && (this._touchDispatcher = t);
    },
    getKeyboardDispatcher: function() {
        return this._keyboardDispatcher;
    },
    setKeyboardDispatcher: function(t) {
        this._keyboardDispatcher = t;
    },
    getAccelerometer: function() {
        return this._accelerometer;
    },
    setAccelerometer: function(t) {
        this._accelerometer != t && (this._accelerometer = t);
    },
    getDeltaTime: function() {
        return this._deltaTime;
    },
    getMouseDispatcher: function() {
        return this._mouseDispatcher;
    },
    setMouseDispatcher: function(t) {
        this._mouseDispatcher != t && (this._mouseDispatcher = t);
    },
    _createStatsLabel: null,
    _createStatsLabelForWebGL: function() {
        if (null != cc.Director._fpsImageLoaded && 0 != cc.Director._fpsImageLoaded) {
            var t = new cc.Texture2D();
            t.initWithElement(cc.Director._fpsImage), t.handleLoadedTexture();
            var e = cc.EGLView.getInstance().getDesignResolutionSize().height / 320;
            0 === e && (e = this._winSizeInPoints.height / 320);
            var i = new cc.LabelAtlas();
            i._setIgnoreContentScaleFactor(!0), i.initWithString("00.0", t, 12, 32, "."), i.setScale(e), 
            this._FPSLabel = i, i = new cc.LabelAtlas(), i._setIgnoreContentScaleFactor(!0), 
            i.initWithString("0.000", t, 12, 32, "."), i.setScale(e), this._SPFLabel = i, i = new cc.LabelAtlas(), 
            i._setIgnoreContentScaleFactor(!0), i.initWithString("000", t, 12, 32, "."), i.setScale(e), 
            this._drawsLabel = i;
            var n = cc.DIRECTOR_STATS_POSITION;
            this._drawsLabel.setPosition(cc.pAdd(cc.p(0, 34 * e), n)), this._SPFLabel.setPosition(cc.pAdd(cc.p(0, 17 * e), n)), 
            this._FPSLabel.setPosition(n);
        }
    },
    _createStatsLabelForCanvas: function() {
        var t = 0;
        t = this._winSizeInPoints.width > this._winSizeInPoints.height ? 0 | this._winSizeInPoints.height / 320 * 24 : 0 | this._winSizeInPoints.width / 320 * 24, 
        this._FPSLabel = cc.LabelTTF.create("000.0", "Arial", t), this._SPFLabel = cc.LabelTTF.create("0.000", "Arial", t), 
        this._drawsLabel = cc.LabelTTF.create("0000", "Arial", t);
        var e = cc.DIRECTOR_STATS_POSITION, i = this._drawsLabel.getContentSize();
        this._drawsLabel.setPosition(cc.pAdd(cc.p(i.width / 2, 5 * i.height / 2), e)), i = this._SPFLabel.getContentSize(), 
        this._SPFLabel.setPosition(cc.pAdd(cc.p(i.width / 2, 3 * i.height / 2), e)), i = this._FPSLabel.getContentSize(), 
        this._FPSLabel.setPosition(cc.pAdd(cc.p(i.width / 2, i.height / 2), e));
    },
    _calculateMPF: function() {
        var t = Date.now();
        this._secondsPerFrame = (t - this._lastUpdate) / 1e3;
    }
}), cc.Browser.supportWebGL ? (cc.Director.prototype._clear = cc.Director.prototype._clearWebGL, 
cc.Director.prototype._beforeVisitScene = cc.Director.prototype._beforeVisitSceneWebGL, 
cc.Director.prototype._afterVisitScene = cc.Director.prototype._afterVisitSceneWebGL, 
cc.Director.prototype._createStatsLabel = cc.Director.prototype._createStatsLabelForWebGL) : (cc.Director.prototype._clear = cc.Director.prototype._clearCanvas, 
cc.Director.prototype._createStatsLabel = cc.Director.prototype._createStatsLabelForCanvas), 
cc.DisplayLinkDirector = cc.Director.extend({
    invalid: !1,
    startAnimation: function() {
        this._nextDeltaTimeZero = !0, this.invalid = !1, cc.Application.getInstance().setAnimationInterval(this._animationInterval);
    },
    mainLoop: function() {
        this._purgeDirecotorInNextLoop ? (this._purgeDirecotorInNextLoop = !1, this.purgeDirector()) : this.invalid || this.drawScene();
    },
    stopAnimation: function() {
        this.invalid = !0;
    },
    setAnimationInterval: function(t) {
        this._animationInterval = t, this.invalid || (this.stopAnimation(), this.startAnimation());
    }
}), cc.s_SharedDirector = null, cc.firstUseDirector = !0, cc.Director.getInstance = function() {
    return cc.firstUseDirector && (cc.firstUseDirector = !1, cc.s_SharedDirector = new cc.DisplayLinkDirector(), 
    cc.s_SharedDirector.init(), cc.s_SharedDirector.setOpenGLView(cc.EGLView.getInstance())), 
    cc.s_SharedDirector;
}, cc.firstRun = !0, cc.defaultFPS = 60, cc.Director._fpsImage = new Image(), cc.Director._fpsImage.addEventListener("load", function() {
    cc.Director._fpsImageLoaded = !0, this.removeEventListener("load", arguments.callee, !1);
}), cc.Director._fpsImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAYAAAD9qabkAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfcAgcQLxxUBNp/AAAQZ0lEQVR42u2be3QVVZbGv1N17829eRLyIKAEOiISEtPhJTJAYuyBDmhWjAEx4iAGBhxA4wABbVAMWUAeykMCM+HRTcBRWkNH2l5moS0LCCrQTkYeQWBQSCAIgYRXEpKbW/XNH5zS4noR7faPEeu31l0h4dSpvc+t/Z199jkFWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhY/H9D/MR9qfKnLj/00U71aqfJn9+HCkCR/Wk36ddsgyJ/1wF4fkDfqqm9/gPsUeTnVr6a2xlQfnxdI7zs0W7irzD17Ytb2WT7EeNv/r4ox1O3Quf2QP2pgt9utwfout4FQE8AVBSlnaRmfvAURQkg2RlAbwB9AThlW5L0GaiKojhJhgOIBqDa7XaPrusdPtr5kQwF0BVAAoBIABRCKDd5aFUhRDAAw57eAOwAhKIoupft3zoqhB1AqLwuHIBut9uFt02qqvqRDJR2dAEQJj/BAOjn56dqmma+xiaECAEQAWAggLsB6A6HQ2iaZggBhBAqgEAAnQB0kzaEmT4hAITT6VQ8Ho/HJAKKECJQtr8LwD1y/A1/vcdfEUIEyfZ9AcQbYvZ942Px88L2UwlJR0dH0EMPPbRj5syZPUeNGrXR7Xb/641xIwJ1XY9NSUlZm52dfW+XLl1w8uRJzJ8//+OGhoYJqqqe1TSt1Wsm9NN1PSIqKmr12rVrR5WUlHy1bdu2AQCumWc3IYRD1/UwVVXnFRQUTIuNjUVzczN2797dWFJSkq8oymZd15sAGAEnFEUJ1nX9nzIzM1dnZmZGh4SE4OTJk5g5c+Zf29vbp9pstrMej6fVOyhIhgAYU1hY+B+hoaGoqKg4XVlZea+XTULTNFdCQsLGiRMnPuR2u3UhBOV9eeDAAWXTpk095DUe6WsoyRE5OTlr0tLSAux2O/bs2cO5c+e+pijKUpIXSHaQVAGkvPLKK++6XK4OksJLCFlXV2cvKSlJBFAjhU+x2WwhHo9nUHp6+urMzMy7wsLCUF9fjxdffPHjxsbGiTab7WuPx9NiEutOuq4PyMjI+M+srKyYqKgoHD58GDNmzNjq8XhyVFU9b/q+LH7hBAEYu3PnTlZVVRFAGgCX6f/tAHoOHDjwa0p27txp/JO9e/f+QM7cipw9nfL3kQBKt2zZQpJ87rnn6mQmoHilw2EACs+cOUOSrK+vZ1NTE0nyo48+IoBpxswoBcMJ4Ndjx471kOTFixe5d+9ekqTH42H//v13A4jyzpAURfEH0H/OnDnthu1z5sw558MmFUCPWbNmnaMP3nrrLZoyDmP8Hl68eDFJ8siRI9/Yc+zYMQKYKdtAztrTrl27xptRXV1NAKMAOAyBBBA/Y8aMdpLs6Ojgxx9//E37+++//29yvFXppwvAwMcee8xjtDHsuXLlCqOjo//ia3wsfpkoALqFhoZuIckJEyackimm3dQmEMDUmpoakmRISMhhAHOHDx/eQJIbN24kgKEyMAHAFRMTs2XXrl1saWkhSZ0kp0+ffhrAr3wEW/S8efOukORLL72kA1gKYMPWrVtJkk899dRJAHeYrgsEsIQkjx8/TgDvAPjd448/3kaSb7zxBmUa7vC6z53BwcFbSHL9+vU6Sc6aNes8gF5ewWAH0PfVV18lSQL4DMBGIcQ6AKtcLleBFC2jXtFt8ODBe0iyoqKCAJYByC8qKmJDQwOzsrK+MAmqo1OnTveHhoa+GRkZ+XZkZOSWiIiIvzgcjk9mzpypkWRmZuZpmbYbGV4AgPnNzc1sa2sjgN0A5iQmJtaSZHl5OQHcb/K3s81mW0uSTU1NBFAFYFbfvn1Pk+Tbb79NAA8IIVzW42/hByA+Pz/fLR/2ZXIda05NI/z9/TeR5J49ewhgqlxTrtI0jY2NjQQw3zTLuWJiYjaUlJToS5Ys6fjkk080kwDEeAmADcA9GzZsIElGRUW9CyAWwLApU6Y0kOSKFSsog9QICGdERMTGsrIyZmVlEcC9AB4IDw/fTpLbtm0jgN94CUAnAJmVlZVcs2aNZ/LkyRdJcvbs2b4EwAkgZfPmzTxw4AABFAN4BkC6vFeUSewcAO5duXIlSTIhIaEawGMAxgKYAmAGgCS73e5vrKVk/yGythANYEhCQsIhkly+fDkBpKqqGmL6DgIALDKN/3yZpVWQZGVlJQE8aPI3KiMjo5okV61aRQAjAPQBMPfIkSN0u90EUCBtsPiFEwpgbn19PdetW2fM5N4zQ9ekpKQqkty0aRMBpMjiWM6JEydIkoqirJUFJ6iq6pAPVy8A6cZMehMBUACEuVyuFwG8HBwcPEIWx367ZMkSjSQXLVrUJouTRorrkAHdA8BdQogsAOsKCwtJkmPGjDkvMw2bDDo/ADEjRoz4XylyFbm5uY0mAbjLyyZ/AOOrq6tZVlbWsWDBgo69e/eyoqKCgwcPPg4gSQaoIRbp27dvN7KF+tLSUr28vJwFBQXtMpvpYRIM7+wrAkDeqVOnePbsWQIoNKfzpiXPg8uXLydJJicnNwF4f+nSpW6STEtLq5fjYwhk1wkTJtSQ5Ouvv04AqTKj+N2xY8dIkgEBAW/Ie1v8wncRegwZMmQvSfbr12+3Ua33WqPfOWbMmP0kWVpaSgCDZAqcfejQIWNZsEGKgvnh9gfQb9myZd8nAEJVVZtMkUNk8CcNHTq0liR1XWdYWNhmH1mJIme80OnTp18x1rp5eXkEsNJms92Fb7e/IgEsvHz5Mp999tkmAI/l5uZeMC0B7vEqqAYAyL106RJJsra2lpWVld+sucePH38ZQG+5NncBeOrgwYMkqbe3t/Po0aOsra011wAWyl0H7x0JJ4DE+fPnu0kyPT29DsDdUrBuyNKEEAkAdpw/f/6GeoEM8GUmfwEgPCIiopwkGxsbabPZPgOw6L777vvm4p49e26VGYjFLxUhhD+ApLKyMp44ccIoVnXybgbgzkcfffRzklyzZg0BDJYCMMmoCwQFBXkLgLGWvvcWAgBToSsKwNPTp09vMR7UuLi4rwH0lgU8c/Db5ezbeeTIkRWzZ8++aMxu+fn5BPCADBwHgP4LFy701NXVEUAJgAnPP/98kyxMNgHo53A4zH77BQQETMvPz7+Um5vbBuAlAFMSExPPmdbVL0qh8Acw8fDhw5SCchVAEYAVb775JknyhRdeaJYztHfxMwLAaqNwCGC2FArv8x0hAHKNLGPKlCme5OTk/Zs3bzb7O0wKiiG8KXl5ed8IxenTp0mSR48e1UmyW7duWywBuD2xyQcgFECgoih+8H1gyJgZV5Lkyy+/3CbTRIePtl2HDBmyw1QBHyGDdXZdXR1JUghRKkXBjOMHCoBdpr0L3nvvPZLkF198wejo6O0A4lVVDTb74HQ6AwD8Wq7Jh8rgGgDgQ13XjVR8qaxJuADMbmlpYXl5uV5UVNRWUFDgfv/993Vj/ZydnU1c37eHXML4S3viAcQqitJD2l104cIFY8lTKsXSBWBMVVWVcd9yed2A1NTUQ6Zl00CvLMMOoHdubm6zFIlWOf5+PsY/Kj09vdrU11QAwwGsv3jxIk21m2DZr10I0RXAuAcffPBgaWkpV69eTYfDcdiwUxY0w6xw+flX8L1xApjevXv3lREREaW6rofB93aPDUDQpEmTMgHgtddeqwBwEd/utZvpqK6uPgEAcXFxkA94NwB9unfvjrNnz4LklwDcf08iIqv66Zs2bXrl4YcfxooVKxAbG7uqrq5uAYA2TdOEqqpGYIi2tjbl6aeffu/YsWPv5uTk7JaC1wHg4Pnz542MwoVvTx+21dbWYvjw4WLixIl+2dnZ9lGjRgmSTE1NRUpKCkwFTGiaxtTU1OXTpk3707Bhw/6g67pDipnT4biuj7qut+Lbk3Vf1tTUXI9qu91Pjq1QFEUBgJaWFgBo8yGOQ8eNGxcAAOvXr/8QwBUfYygAKL169eoCABcuXACAWtn2hOGv0+kMNO1KiPDw8F4A4rZv3/7R1KlTR0+bNu1ht9u9r1+/fqitrQXJgwDarRC6/QjPzs4+QJIffPCB9/aQmSAA43ft2mW0e1QGoi8CAPyLsZccExNTC2BlRkbGRdOyYJCP2csBIN6UAZzCd7cBbQCijYp/dXU1ExMTz6SmptaMHj36f9LS0vYlJCRsl6mxIWSdu3fv/g5J7t+/nwC2AShMTk6+SJKff/45AWRLYbD7+fndAeDf5BJnLoCCyZMnt5JkdnZ2C4B/F0KEm1Pu+Pj4rST55ZdfEsBWAK+mpaVdMo3raDn7KwDuSEpK+m+S3LBhAwG8DuCtHTt2UBbpjgC408vvcFVV15HkuXPnjMp+p5uMf0RcXNyHJNnQ0EBVVfcCWBQXF3fG+Jv0yxABPwB5LS0tRmFxN4BlTzzxxGWSXLx4sS5F3GGFy+1Hp5SUlJq6ujoWFxdTpsZ2H+0iIyMj/0iSWVlZX5mr5jfJFroPGzasxlhTnjp1iiTZ3NxMl8tlrCd9pfa9SkpKSJI5OTmnZOageLUZZqxvfVFWVkZcPwdgNwnSCKPqb17jkmR8fPzfZMDZ5CRsFBmNI7h95s2b1yhT7/MAYmStwCx4vy0uLqa3v5qmEcCfvSr1QQAeXb16NY3Cm3HQ55133iGAp+SxZTNhKSkpfzUddkrFjYevzAQCeGjp0qXfsYckY2NjTwD4leGDLCL2HTdunNtoY+zWSHFcIHdsFCtcfuZ1vO9Eqs3m7/F47sb1k2qX/f3997W2tl7BjWfpBYDOzzzzzIVJkyZh0KBBCwEsB3AJvl9AETabLcDj8dwRFRW1ctasWb8JCgpSzp07d62wsPC/Wltb8xRFadR1/ZqPXYbgAQMGbI2Pjw/+6quv9ldVVT0r01ezuPRJSUn5Y9euXXVd11WzDaqq6kePHm3+7LPPRgO4KlNuxWazhXo8nuTk5OSXMjIyEl0uFxoaGtqKior+dPXq1VdUVT0jj7r68ieoT58+vx8yZMjdx48fP1JVVTVF9m20VW02WyfZf97YsWPjXS4X6urqWvPy8jYCWCyEuEDS8FdVFKWzruv//OSTTy5OTk7uqWkaPv3007qysrJ8RVH+LI8ym8/rB3Tu3HnRI488knLo0KG2ffv2ZQI4C98vP6mqqoZqmpaclpa2cOTIkX39/f3R0NDQUVxc/G5TU9PLqqrWa5rWLH1QVFUN0TStX1JSUvH48eP7BwYG4uDBg1cKCgpeBbBe2u+2Qug2EwD5N5sMPuNtMe8XP4TT6Qxoa2sbIGeXvUKIK7d4IISiKC5d1wPljOfA9bPwzYqiXNV13dd6Uqiq6qdpml2mpe02m63d4/G4vcTF5fF47LJf71nJA6BZVVW3pmntuPHlmAD5wk6Q9NnbHp9vHaqq6tA0zU/64PZhk1FfCZB9G/23ALiqKEqzD39tpvbGUqoFwFUhRLP3yzpCCDtJpxyXDulfG27+pqRR3DXsUWVd4Yq0x/taVQjhIhksC8L+ABpM9ljBf5sKwI8pIBr75L5E4vvu+UNeG/a+hv+AL7yFH8qPtOfHjtOP6V/Bja8D6z/B2Nys/1u9Xv33tLf4GfF/LC4GCJwByWIAAAAASUVORK5CYII=", 
cc.PRIORITY_SYSTEM = -2147483648, cc.PRIORITY_NON_SYSTEM = cc.PRIORITY_SYSTEM + 1, 
cc.ArrayVerifyType = function(t, e) {
    if (t && t.length > 0) for (var i = 0; i < t.length; i++) if (!(t[i] instanceof e)) return cc.log("element type is wrong!"), 
    !1;
    return !0;
}, cc.ArrayRemoveObjectAtIndex = function(t, e) {
    t.splice(e, 1);
}, cc.ArrayRemoveObject = function(t, e) {
    for (var i = 0, n = t.length; n > i; i++) if (t[i] == e) {
        t.splice(i, 1);
        break;
    }
}, cc.ArrayRemoveArray = function(t, e) {
    for (var i = 0, n = e.length; n > i; i++) cc.ArrayRemoveObject(t, e[i]);
}, cc.ArrayGetIndexOfValue = function(t, e) {
    return t.indexOf(e);
}, cc.ArrayAppendObject = function(t, e) {
    t.push(e);
}, cc.ArrayAppendObjectToIndex = function(t, e, i) {
    return t.splice(i, 0, e), t;
}, cc.ArrayAppendObjectsToIndex = function(t, e, i) {
    return t.splice.apply(t, [ i, 0 ].concat(e)), t;
}, cc.ArrayGetIndexOfObject = function(t, e) {
    for (var i = 0, n = t.length; n > i; i++) if (t[i] == e) return i;
    return -1;
}, cc.ArrayContainsObject = function(t, e) {
    return -1 != cc.ArrayGetIndexOfObject(t, e);
}, cc.HASH_FIND_INT = function(t, e) {
    if (null == t) return null;
    for (var i = 0; i < t.length; i++) if (t[i].target === e) return t[i];
    return null;
}, cc.ListEntry = function(t, e, i, n, r, c) {
    this.prev = t, this.next = e, this.target = i, this.priority = n, this.paused = r, 
    this.markedForDeletion = c;
}, cc.HashUpdateEntry = function(t, e, i, n) {
    this.list = t, this.entry = e, this.target = i, this.hh = n;
}, cc.HashTimerEntry = function(t, e, i, n, r, c, o) {
    this.timers = t, this.target = e, this.timerIndex = i, this.currentTimer = n, this.currentTimerSalvaged = r, 
    this.paused = c, this.hh = o;
}, cc.Timer = cc.Class.extend({
    _interval: 0,
    _selector: null,
    _target: null,
    _elapsed: 0,
    _runForever: !1,
    _useDelay: !1,
    _timesExecuted: 0,
    _repeat: 0,
    _delay: 0,
    ctor: function() {},
    getInterval: function() {
        return this._interval;
    },
    setInterval: function() {},
    getSelector: function() {
        return this._selector;
    },
    initWithTarget: function(t, e, i, n, r) {
        return this._target = t, this._selector = e, this._elapsed = -1, this._interval = i || 0, 
        this._delay = r || 0, this._useDelay = this._delay > 0, this._repeat = null == n ? cc.REPEAT_FOREVER : n, 
        this._runForever = this._repeat == cc.REPEAT_FOREVER, !0;
    },
    _callSelector: function() {
        "string" == typeof this._selector ? this._target[this._selector](this._elapsed) : this._selector.call(this._target, this._elapsed);
    },
    update: function(t) {
        if (-1 == this._elapsed) this._elapsed = 0, this._timesExecuted = 0; else {
            var e = this._target, i = this._selector;
            this._runForever && !this._useDelay ? (this._elapsed += t, this._elapsed >= this._interval && (e && i && this._callSelector(), 
            this._elapsed = 0)) : (this._elapsed += t, this._useDelay ? this._elapsed >= this._delay && (e && i && this._callSelector(), 
            this._elapsed = this._elapsed - this._delay, this._timesExecuted += 1, this._useDelay = !1) : this._elapsed >= this._interval && (e && i && this._callSelector(), 
            this._elapsed = 0, this._timesExecuted += 1), this._timesExecuted > this._repeat && cc.Director.getInstance().getScheduler().unscheduleCallbackForTarget(e, i));
        }
    }
}), cc.Timer.timerWithTarget = function(t, e, i) {
    if (arguments.length < 2) throw new Error("timerWithTarget'argument can't is null");
    var n = new cc.Timer();
    return i = i || 0, n.initWithTarget(t, e, i, cc.REPEAT_FOREVER, 0), n;
}, cc._sharedScheduler = null, cc.Scheduler = cc.Class.extend({
    _timeScale: 1,
    _updatesNegList: null,
    _updates0List: null,
    _updatesPosList: null,
    _hashForUpdates: null,
    _hashForTimers: null,
    _currentTarget: null,
    _currentTargetSalvaged: !1,
    _updateHashLocked: !1,
    ctor: function() {
        this._timeScale = 1, this._updatesNegList = [], this._updates0List = [], this._updatesPosList = [], 
        this._hashForUpdates = [], this._hashForTimers = [], this._currentTarget = null, 
        this._currentTargetSalvaged = !1, this._updateHashLocked = !1;
    },
    _removeHashElement: function(t) {
        t.Timer = null, t.target = null, cc.ArrayRemoveObject(this._hashForTimers, t), t = null;
    },
    _findElementFromArray: function(t, e) {
        for (var i = 0; i < t.length; i++) if (t[i].target == e) return t[i];
        return null;
    },
    _removeUpdateFromHash: function(t) {
        var e = this._findElementFromArray(this._hashForUpdates, t.target);
        e && (cc.ArrayRemoveObject(e.list, e.entry), e.entry = null, e.target = null, cc.ArrayRemoveObject(this._hashForUpdates, e));
    },
    _priorityIn: function(t, e, i, n) {
        var r = new cc.ListEntry(null, null, e, i, n, !1);
        if (t) {
            for (var c = !1, o = 0; o < t.length; o++) if (i < t[o].priority) {
                t = cc.ArrayAppendObjectToIndex(t, r, o), c = !0;
                break;
            }
            c || t.push(r);
        } else t = [], t.push(r);
        var s = new cc.HashUpdateEntry(t, r, e, null);
        return this._hashForUpdates.push(s), t;
    },
    _appendIn: function(t, e, i) {
        var n = new cc.ListEntry(null, null, e, 0, i, !1);
        t.push(n);
        var r = new cc.HashUpdateEntry(t, n, e, null);
        this._hashForUpdates.push(r);
    },
    setTimeScale: function(t) {
        this._timeScale = t;
    },
    getTimeScale: function() {
        return this._timeScale;
    },
    update: function(t) {
        this._updateHashLocked = !0, 1 != this._timeScale && (t *= this._timeScale);
        var e, i;
        for (i = 0; i < this._updatesNegList.length; i++) e = this._updatesNegList[i], e.paused || e.markedForDeletion || e.target.update(t);
        for (i = 0; i < this._updates0List.length; i++) e = this._updates0List[i], e.paused || e.markedForDeletion || e.target.update(t);
        for (i = 0; i < this._updatesPosList.length; i++) e = this._updatesPosList[i], e.paused || e.markedForDeletion || e.target.update(t);
        var n;
        for (i = 0; i < this._hashForTimers.length; i++) {
            if (this._currentTarget = this._hashForTimers[i], n = this._currentTarget, this._currentTargetSalvaged = !1, 
            !this._currentTarget.paused) for (n.timerIndex = 0; n.timerIndex < n.timers.length; n.timerIndex++) n.currentTimer = n.timers[n.timerIndex], 
            n.currentTimerSalvaged = !1, n.currentTimer.update(t), n.currentTimer = null;
            this._currentTargetSalvaged && 0 == this._currentTarget.timers.length && this._removeHashElement(this._currentTarget);
        }
        for (i = 0; i < this._updatesNegList.length; i++) this._updatesNegList[i].markedForDeletion && this._removeUpdateFromHash(this._updatesNegList[i]);
        for (i = 0; i < this._updates0List.length; i++) this._updates0List[i].markedForDeletion && this._removeUpdateFromHash(this._updates0List[i]);
        for (i = 0; i < this._updatesPosList.length; i++) this._updatesPosList[i].markedForDeletion && this._removeUpdateFromHash(this._updatesPosList[i]);
        this._updateHashLocked = !1, this._currentTarget = null;
    },
    scheduleCallbackForTarget: function(t, e, i, n, r, c) {
        cc.Assert(e, "scheduler.scheduleCallbackForTarget() Argument callback_fn must be non-NULL"), 
        cc.Assert(t, "scheduler.scheduleCallbackForTarget() Argument target must be non-NULL"), 
        i = i || 0, n = null == n ? cc.REPEAT_FOREVER : n, r = r || 0, c = c || !1;
        var o = cc.HASH_FIND_INT(this._hashForTimers, t);
        o ? cc.Assert(o.paused == c, "Sheduler.scheduleCallbackForTarget()") : (o = new cc.HashTimerEntry(null, t, 0, null, null, c, null), 
        this._hashForTimers.push(o));
        var s;
        if (null == o.timers) o.timers = []; else for (var a = 0; a < o.timers.length; a++) if (s = o.timers[a], 
        e == s._selector) return cc.log("CCSheduler#scheduleCallback. Callback already scheduled. Updating interval from:" + s.getInterval().toFixed(4) + " to " + i.toFixed(4)), 
        s._interval = i, void 0;
        s = new cc.Timer(), s.initWithTarget(t, e, i, n, r), o.timers.push(s);
    },
    scheduleUpdateForTarget: function(t, e, i) {
        var n = cc.HASH_FIND_INT(this._hashForUpdates, t);
        return n ? (cc.COCOS2D_DEBUG >= 1 && cc.Assert(n.entry.markedForDeletion, ""), n.entry.markedForDeletion = !1, 
        void 0) : (0 == e ? this._appendIn(this._updates0List, t, i) : 0 > e ? this._updatesNegList = this._priorityIn(this._updatesNegList, t, e, i) : this._updatesPosList = this._priorityIn(this._updatesPosList, t, e, i), 
        void 0);
    },
    unscheduleCallbackForTarget: function(t, e) {
        if (null != t && null != e) {
            var i = cc.HASH_FIND_INT(this._hashForTimers, t);
            if (null != i) for (var n = 0; n < i.timers.length; n++) {
                var r = i.timers[n];
                if (e == r._selector) return r != i.currentTimer || i.currentTimerSalvaged || (i.currentTimerSalvaged = !0), 
                cc.ArrayRemoveObjectAtIndex(i.timers, n), i.timerIndex >= n && i.timerIndex--, 0 == i.timers.length && (this._currentTarget == i ? this._currentTargetSalvaged = !0 : this._removeHashElement(i)), 
                void 0;
            }
        }
    },
    unscheduleUpdateForTarget: function(t) {
        if (null != t) {
            var e = cc.HASH_FIND_INT(this._hashForUpdates, t);
            null != e && (this._updateHashLocked ? e.entry.markedForDeletion = !0 : this._removeUpdateFromHash(e.entry));
        }
    },
    unscheduleAllCallbacksForTarget: function(t) {
        if (null != t) {
            var e = cc.HASH_FIND_INT(this._hashForTimers, t);
            e && (!e.currentTimerSalvaged && cc.ArrayContainsObject(e.timers, e.currentTimer) && (e.currentTimerSalvaged = !0), 
            e.timers.length = 0, this._currentTarget == e ? this._currentTargetSalvaged = !0 : this._removeHashElement(e)), 
            this.unscheduleUpdateForTarget(t);
        }
    },
    unscheduleAllCallbacks: function() {
        this.unscheduleAllCallbacksWithMinPriority(cc.PRIORITY_SYSTEM);
    },
    unscheduleAllCallbacksWithMinPriority: function(t) {
        var e;
        for (e = 0; e < this._hashForTimers.length; e++) this.unscheduleAllCallbacksForTarget(this._hashForTimers[e].target);
        if (0 > t) for (e = 0; e < this._updatesNegList.length; e++) this.unscheduleUpdateForTarget(this._updatesNegList[e].target);
        if (0 >= t) for (e = 0; e < this._updates0List.length; e++) this.unscheduleUpdateForTarget(this._updates0List[e].target);
        for (e = 0; e < this._updatesPosList.length; e++) this._updatesPosList[e].priority >= t && this.unscheduleUpdateForTarget(this._updatesPosList[e].target);
    },
    pauseAllTargets: function() {
        return this.pauseAllTargetsWithMinPriority(cc.PRIORITY_SYSTEM);
    },
    pauseAllTargetsWithMinPriority: function(t) {
        var e, i, n = [];
        for (e = 0; e < this._hashForTimers.length; e++) i = this._hashForTimers[e], i && (i.paused = !0, 
        n.push(i.target));
        if (0 > t) for (e = 0; e < this._updatesNegList.length; e++) i = this._updatesNegList[e], 
        i && (i.paused = !0, n.push(i.target));
        if (0 >= t) for (e = 0; e < this._updates0List.length; e++) i = this._updates0List[e], 
        i && (i.paused = !0, n.push(i.target));
        for (e = 0; e < this._updatesPosList.length; e++) i = this._updatesPosList[e], i && (i.paused = !0, 
        n.push(i.target));
        return n;
    },
    resumeTargets: function(t) {
        if (t) for (var e = 0; e < t.length; e++) this.resumeTarget(t[e]);
    },
    pauseTarget: function(t) {
        cc.Assert(null != t, "Scheduler.pauseTarget():entry must be non nil");
        var e = cc.HASH_FIND_INT(this._hashForTimers, t);
        e && (e.paused = !0);
        var i = cc.HASH_FIND_INT(this._hashForUpdates, t);
        i && (cc.Assert(null != i.entry, "Scheduler.pauseTarget():entry must be non nil"), 
        i.entry.paused = !0);
    },
    resumeTarget: function(t) {
        cc.Assert(null != t, "");
        var e = cc.HASH_FIND_INT(this._hashForTimers, t);
        e && (e.paused = !1);
        var i = cc.HASH_FIND_INT(this._hashForUpdates, t);
        i && (cc.Assert(null != i.entry, "Scheduler.resumeTarget():entry must be non nil"), 
        i.entry.paused = !1);
    },
    isTargetPaused: function(t) {
        cc.Assert(null != t, "Scheduler.isTargetPaused():target must be non nil");
        var e = cc.HASH_FIND_INT(this._hashForTimers, t);
        return e ? e.paused : !1;
    }
});

var m1 = {
    a: "m1"
};

console.log("m1");

var m2 = {};

m2.a = "FFFF", console.log("m2");

var tt = tt || {};

tt.Btn = cc.Sprite.extend({
    init: function() {
        return this._super(res.btnbg_1_png), !0;
    }
}), tt.Btn.create = function() {
    var t = new tt.Btn();
    return t.init(), t;
}, tt.Sprite = cc.Sprite.extend({
    init: function() {
        this._super(res.bg_1_jpg);
        var t = tt.Btn.create();
        return this.addChild(t), t.setPosition(100, 100), !0;
    }
}), tt.Sprite.create = function() {
    var t = new tt.Sprite();
    return t.init(), t;
}, tt.Layer = cc.Layer.extend({
    init: function() {
        this._super();
        var t = tt.Sprite.create();
        this.addChild(t);
        var e = cc.Director.getInstance().getWinSize();
        return t.setPosition(e.width / 2, e.height / 2), !0;
    }
}), tt.Layer.create = function() {
    var t = new tt.Layer();
    return t.init(), t;
}, cc.loadGame(function() {
    var t = {
        COCOS2D_DEBUG: 2,
        showFPS: !0,
        loadExtension: !0,
        frameRate: 60,
        tag: "gameCanvas",
        test: js_TestProj.Layer_js,
        renderMode: 1
    };
    document.ccConfig = t;
    var e = cc.Application.extend({
        config: t,
        ctor: function() {
            this._super(), cc.COCOS2D_DEBUG = this.config.COCOS2D_DEBUG, cc.setup(this.config.tag), 
            cc.AppController.shareAppController().didFinishLaunchingWithOptions();
        },
        applicationDidFinishLaunching: function() {
            var t = cc.Director.getInstance(), e = [];
            return e.push("../../res/"), cc.FileUtils.getInstance().setSearchPaths(e), t.setDisplayStats(this.config.showFPS), 
            t.setAnimationInterval(1 / this.config.frameRate), cc.log("++++++++++++++++enter point for game++++++++++++"), 
            cc.loadGameModule(js_TestProj.Layer_js, function(t) {
                cc.LoaderScene.preload(t, function() {
                    var t = cc.Scene.create();
                    t.addChild(tt.Layer.create({})), cc.Director.getInstance().replaceScene(t);
                });
            }), !0;
        }
    });
    new e();
});