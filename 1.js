(function() { window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() { return !1 };
    NEJ.P = function(Dz2x) { if (!Dz2x || !Dz2x.length) return null; var Vx8p = window; for (var a = Dz2x.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; Vx8p = Vx8p[a[i]] = Vx8p[a[i]] || {}, i++); return Vx8p };
    NEJ.Q = function(bL3x, Dz2x) { bL3x = bL3x || NEJ.O; var bs3x = Dz2x.split("."); for (var i = 0, l = bs3x.length; i < l; i++) { bL3x = bL3x[bs3x[i]]; if (!bL3x) break } return bL3x };
    NEJ.C = function() { var bNs9j = function() { return NEJ.O.toString.call(arguments[0]) != "[object Function]" }; var bIG8y = function(A2x, bv3x) { for (var x in bv3x)
                if (A2x == bv3x[x]) return x; return null }; var bqQ4U = { cl3x: 0, bk3x: 1, bC3x: 2, bR3x: 3, bJ3x: 4, eT5Y: 5, jJ6D: 6, eh4l: 7 },
            te9V = { cs3x: 0, bl3x: 1, bH3x: 2, cc3x: 3, bN3x: 4, gu5z: 5, ko6i: 6, fS5X: 7 }; return function() { var fi5n = function() { this.bJj8b(); return this.cl3x.apply(this, arguments) };
            fi5n.prototype.bJj8b = NEJ.F;
            fi5n.prototype.cl3x = NEJ.F;
            fi5n.O3x = function(AD1x, bsE4I) { if (bNs9j(AD1x)) return; if (bsE4I == null || !!bsE4I) NEJ.X(this, AD1x, bNs9j);
                this.bOp9g = AD1x;
                this.cg3x = AD1x.prototype; var bB3x = function() {};
                bB3x.prototype = AD1x.prototype;
                this.prototype = new bB3x; var EH2x = this.prototype;
                EH2x.constructor = this; var dQ4U; for (var x in bqQ4U) { dQ4U = bIG8y(bqQ4U[x], te9V); if (!dQ4U || !this.cg3x[x]) continue;
                    EH2x[x] = function(T3x) { return function() { this[T3x].apply(this, arguments) } }(dQ4U) } var BT1x = {}; for (var x in te9V) { dQ4U = bIG8y(te9V[x], bqQ4U); if (!dQ4U || !this.cg3x[dQ4U]) continue;
                    BT1x[dQ4U] = AD1x;
                    EH2x[x] = function(T3x) { return function() { var m2x, bB3x = this.bqy4C[T3x],
                                bab9S = bB3x.prototype[T3x];
                            this.bqy4C[T3x] = bB3x.bOp9g || AD1x; if (!!bab9S) m2x = bab9S.apply(this, arguments);
                            this.bqy4C[T3x] = AD1x; return m2x } }(dQ4U) } EH2x.bJj8b = function() { this.bqy4C = NEJ.X({}, BT1x) };
                EH2x.cya8S = EH2x.cs3x; return EH2x }; return fi5n } }();
    NEJ.X = function(gc5h, bM3x, dE4I) { if (!gc5h || !bM3x) return gc5h;
        dE4I = dE4I || NEJ.F; for (var x in bM3x) { if (bM3x.hasOwnProperty(x) && !dE4I(bM3x[x], x)) gc5h[x] = bM3x[x] } return gc5h };
    NEJ.EX = function(gc5h, bM3x) { if (!gc5h || !bM3x) return gc5h; for (var x in gc5h) { if (gc5h.hasOwnProperty(x) && bM3x[x] != null) gc5h[x] = bM3x[x] } return gc5h }; var EN2x = Function.prototype;
    EN2x.ec4g = function(lE7x, bqh4l) { var f = NEJ.F,
            bqh4l = bqh4l || f,
            lE7x = lE7x || f,
            dd4h = this; return function() { var d2x = { args: NEJ.R.slice.call(arguments, 0) };
            lE7x(d2x); if (!d2x.stopped) { d2x.value = dd4h.apply(this, d2x.args);
                bqh4l(d2x) } return d2x.value } };
    EN2x.g2x = function() { var bg3x = arguments,
            gc5h = arguments[0],
            bqf4j = this; return function() { var uM9D = NEJ.R.slice.call(bg3x, 1);
            NEJ.R.push.apply(uM9D, arguments); return bqf4j.apply(gc5h || window, uM9D) } };
    EN2x.dV4Z = function() { var bg3x = arguments,
            gc5h = NEJ.R.shift.call(bg3x),
            bqf4j = this; return function() { NEJ.R.push.apply(arguments, bg3x); return bqf4j.apply(gc5h || window, arguments) } }; var EN2x = String.prototype; if (!EN2x.trim) { EN2x.trim = function() { var cM4Q = /(?:^\s+)|(?:\s+$)/g; return function() { return this.replace(cM4Q, "") } }() } if (!window.MWF) window.MWF = NEJ; if (!window.mwf) window.mwf = NEJ.P("nej"); if (!window.console) { NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F } var lt, gt, amp, nbsp, quot, apos, copy, reg })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        N3x = c2x("nej.p"),
        ZO9F = window.navigator.platform,
        sr9i = window.navigator.userAgent; var kj6d = { mac: ZO9F, win: ZO9F, linux: ZO9F, ipad: sr9i, ipod: sr9i, iphone: ZO9F, android: sr9i };
    N3x.ZM9D = kj6d; for (var x in kj6d) kj6d[x] = (new RegExp(x, "i")).test(kj6d[x]);
    kj6d.ios = kj6d.ipad || kj6d.iphone || kj6d.ipod;
    kj6d.tablet = kj6d.ipad;
    kj6d.desktop = kj6d.mac || kj6d.win || kj6d.linux && !kj6d.android; var hB5G = { engine: "unknow", release: "unknow", browser: "unknow", version: "unknow", prefix: { css: "", pro: "", clz: "" } };
    N3x.cR4V = hB5G; if (/msie\s+(.*?);/i.test(sr9i) || /trident\/.+rv:([\d\.]+)/i.test(sr9i)) { hB5G.engine = "trident";
        hB5G.browser = "ie";
        hB5G.version = RegExp.$1;
        hB5G.prefix = { css: "ms", pro: "ms", clz: "MS", evt: "MS" }; var nj7c = { 6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0" };
        hB5G.release = nj7c[document.documentMode] || nj7c[parseInt(hB5G.version)] } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(sr9i)) { hB5G.engine = "webkit";
        hB5G.release = RegExp.$1 || "";
        hB5G.prefix = { css: "webkit", pro: "webkit", clz: "WebKit" } } else if (/rv\:(.*?)\)\s+gecko\//i.test(sr9i)) { hB5G.engine = "gecko";
        hB5G.release = RegExp.$1 || "";
        hB5G.browser = "firefox";
        hB5G.prefix = { css: "Moz", pro: "moz", clz: "Moz" }; if (/firefox\/(.*?)(?=\s|$)/i.test(sr9i)) hB5G.version = RegExp.$1 || "" } else if (/presto\/(.*?)\s/i.test(sr9i)) { hB5G.engine = "presto";
        hB5G.release = RegExp.$1 || "";
        hB5G.browser = "opera";
        hB5G.prefix = { css: "O", pro: "o", clz: "O" }; if (/version\/(.*?)(?=\s|$)/i.test(sr9i)) hB5G.version = RegExp.$1 || "" } if (hB5G.browser == "unknow") { var nj7c = ["chrome", "maxthon", "safari"]; for (var i = 0, l = nj7c.length, T3x; i < l; i++) { T3x = nj7c[i] == "safari" ? "version" : nj7c[i]; if ((new RegExp(T3x + "/(.*?)(?=\\s|$)", "i")).test(sr9i)) { hB5G.browser = nj7c[i];
                hB5G.version = RegExp.$1.trim(); break } } } N3x.buT5Y = {}; var ZL9C = hB5G.engine != "trident";
    N3x.mp7i = { gecko: hB5G.engine != "gecko", webkit: hB5G.engine != "webkit", presto: hB5G.engine != "presto", trident0: ZL9C || hB5G.release > "2.0", trident1: ZL9C || hB5G.release < "6.0", trident2: ZL9C || hB5G.release > "3.0", trident: ZL9C || hB5G.release >= "6.0" } })();
(function() { var iA6u = NEJ.P("nej.c"),
        R3x = {}; var bpU3x = function() { var cM4Q = /^([\w]+?:\/\/.*?(?=\/|$))/i; return function(V3x) { V3x = V3x || ""; if (cM4Q.test(V3x)) return RegExp.$1; return location.protocol + "//" + location.host } }(); var JK4O = function() { var bwv5A = function(i2x, bv3x) { if (!i2x || !i2x.length) return; for (var i = 0, l = i2x.length, kv6p; i < l; i++) { kv6p = i2x[i]; if (kv6p.indexOf("://") > 0) bv3x[bpU3x(kv6p)] = kv6p } }; var bc3x = { portrait: { name: "portrait", dft: "portrait/" }, "ajax.swf": { name: "ajax", dft: "nej_proxy_flash.swf" }, "chart.swf": { name: "chart", dft: "nej_flex_chart.swf" }, "audio.swf": { name: "audio", dft: "nej_player_audio.swf" }, "video.swf": { name: "video", dft: "nej_player_video.swf" }, "clipboard.swf": { name: "clipboard", dft: "nej_clipboard.swf" } }; return function(bM3x) { iA6u.EP2x("root", bM3x.root || "/res/"); var bpJ3x, fw5B = iA6u.x2x("root"); for (var x in bc3x) { bpJ3x = bc3x[x];
                iA6u.EP2x(x, bM3x[bpJ3x.name] || fw5B + bpJ3x.dft) } var Au1x = bM3x.p_csrf; if (Au1x == !0) { Au1x = { cookie: "AntiCSRF", param: "AntiCSRF" } } iA6u.EP2x("csrf", NEJ.EX({ cookie: "", param: "" }, Au1x));
            R3x.frames = {};
            bwv5A(bM3x.p_frame, R3x.frames);
            R3x.flashs = {};
            bwv5A(bM3x.p_flash, R3x.flashs) } }();
    iA6u.EP2x = function(J3x, A2x) { R3x[J3x] = A2x };
    iA6u.x2x = function(J3x) { return R3x[J3x] };
    iA6u.bOz9q = function(V3x) { var uO9F = bpU3x(V3x); return R3x.frames[uO9F] || uO9F + "/res/nej_proxy_frame.html" };
    iA6u.bOS9J = function(V3x) { return R3x.flashs[bpU3x(V3x)] };
    JK4O(window.NEJ_CONF || NEJ.O) })();
(function() { var c2x = NEJ.P,
        N3x = c2x("nej.p"),
        iA6u = c2x("nej.c"),
        bM3x = window.NEJ_CONF || NEJ.O; if (N3x.mp7i.trident) return;
    iA6u.EP2x("storage.swf", bM3x.storage || iA6u.x2x("root") + "nej_storage.swf"); if (N3x.cR4V.release < "4.0") { iA6u.EP2x("blank.png", bM3x.blank || iA6u.x2x("root") + "nej_blank.gif") } var i2x = bM3x.xdr,
        fU5Z = /^(https?:\/\/.*?)(?=\/|$)/i,
        jh6b = /[\/?=&]/i; var bNy9p = function(V3x) { return (fU5Z.test(V3x) ? RegExp.$1 : "").toLowerCase() }; if (!!i2x && !!i2x.length)
        for (var i = i2x.length - 1, V3x, J3x; i >= 0; i--) { V3x = i2x[i];
            J3x = bNy9p(V3x); if (!!J3x) iA6u.EP2x(J3x, V3x) } iA6u.cxV8N = function(V3x) { var J3x = bNy9p(V3x); if (!J3x) { if (jh6b.test(V3x)) { J3x = location.protocol + "//" + location.host } else if (V3x.indexOf("://") < 0) { J3x = location.protocol + "//" + V3x } else { J3x = V3x } } return iA6u.x2x(J3x) || J3x + "/res/nej_xdomain.html" } })();
(function() { var c2x = NEJ.P,
        iA6u = c2x("nej.c"),
        N3x = c2x("nej.g"),
        fW5b = +(new Date);
    N3x.cxU8M = 1e4 - fW5b;
    N3x.bpG3x = 10001 - fW5b;
    N3x.cxS8K = 10002 - fW5b;
    N3x.byK6E = 10003 - fW5b;
    N3x.bPc9T = 10004 - fW5b;
    N3x.cxQ8I = 10005 - fW5b;
    N3x.bpD3x = 10006 - fW5b;
    N3x.bPu0x = 10007 - fW5b;
    N3x.xd0x = "Content-Type";
    N3x.cxM8E = "text/plain";
    N3x.CV2x = "multipart/form-data";
    N3x.bPx0x = "application/x-www-form-urlencoded";
    N3x.bpz3x = iA6u.x2x("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" })();
(function() { var c2x = NEJ.P,
        eU5Z = NEJ.R,
        N3x = c2x("nej.p"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        ba3x = c2x("nej.h"); var kV7O = N3x.cR4V.prefix,
        bwL5Q = N3x.buT5Y,
        bPy0x = { scale: "scale({x|1},{y|1})", rotate: "rotate({a})", translate: "translate({x},{y})" },
        bPz0x = { scale: "scale3d({x|1},{y|1},{z|1})", rotate: "rotate3d({x},{y},{z},{a})", translate: "translate3d({x},{y},{z})" },
        JQ4U = { transition: !0, transform: !0, animation: !0, keyframes: !0, box: !0, "box-pack": !0, "box-flex": !0, marquee: !0, "border-radius": !0, "user-select": !0 }; var JK4O = function() { var rv9m = ba3x.bCL7E();
        bwL5Q.css3d = !!rv9m && rv9m.m41 != null; var cM4Q = /-([a-z])/g; for (var x in JQ4U) { JQ4U[bCR7K(x)] = JQ4U[x] } }; var bCR7K = function() { var cM4Q = /-([a-z])/g; return function(T3x) { T3x = T3x || ""; return T3x.replace(cM4Q, function($1, $2) { return $2.toUpperCase() }) } }(); var bCV7O = function(T3x) { return (!bwL5Q.css3d ? bPy0x : bPz0x)[T3x] }; var bDa7T = function() { var cM4Q = /\s+/; return function(fi5n) { fi5n = (fi5n || "").trim(); return !!fi5n ? fi5n.split(cM4Q) : null } }(); var ZD9u = function(E2x, t2x, fi5n) { E2x = a1x.x2x(E2x); if (!E2x) return;
        k2x.be3x(bDa7T(fi5n), function(dK4O) { E2x.classList[t2x](dK4O) }) };
    ba3x.EQ2x = function(i2x) { return eU5Z.slice.call(i2x, 0) };
    ba3x.bpu3x = function(E2x) { return ba3x.EQ2x(E2x.children) };
    ba3x.bpt3x = function(E2x, fi5n) { return ba3x.EQ2x(E2x.getElementsByClassName(fi5n)) };
    ba3x.bps3x = function(E2x, EU2x) { ZD9u(E2x, "add", EU2x) };
    ba3x.bpp3x = function(E2x, EV2x) { ZD9u(E2x, "remove", EV2x) };
    ba3x.JT4X = function(E2x, EV2x, EU2x) { ZD9u(E2x, "remove", EV2x);
        ZD9u(E2x, "add", EU2x) };
    ba3x.bpg3x = function(E2x, fi5n) { E2x = a1x.x2x(E2x); if (!E2x) return !1; var i2x = E2x.classList; if (!i2x || !i2x.length) return !1; return k2x.cV4Z(bDa7T(fi5n), function(dK4O) { return i2x.contains(dK4O) }) >= 0 };
    ba3x.bpd3x = function(E2x, dK4O) {};
    ba3x.bpc3x = function(E2x) {};
    ba3x.bpb3x = function(fD5I, mG7z) { fD5I.selectionEnd = mG7z.end || 0;
        fD5I.selectionStart = mG7z.start || 0;
        fD5I.focus() };
    ba3x.boY3x = function(fD5I) { return { end: fD5I.selectionEnd, start: fD5I.selectionStart } };
    ba3x.boU3x = function() { var AR1x = function(dK4O, d2x) { var E2x = h2x.U3x(d2x); if (!E2x.value) a1x.w2x(E2x, dK4O) }; var EX2x = function(dK4O, d2x) { a1x.y2x(h2x.U3x(d2x), dK4O) }; return function(E2x, eC4G, dK4O) { if (eC4G == 1) { h2x.q2x(E2x, "blur", AR1x.g2x(null, dK4O)) } if (eC4G == 1 || eC4G == -1) { h2x.q2x(E2x, "focus", EX2x.g2x(null, dK4O)) } } }();
    ba3x.boS3x = function(G2x) { return (new XMLSerializer).serializeToString(G2x) || "" };
    ba3x.boR3x = function(zZ1x) { var fw5B = (new DOMParser).parseFromString(zZ1x, "text/xml").documentElement; return fw5B.nodeName == "parsererror" ? null : fw5B };
    ba3x.boJ3x = function(E2x) {};
    ba3x.mE7x = function(E2x) { return null };
    ba3x.boC3x = function(E2x) { return null };
    ba3x.boA3x = function(dI4M) {};
    ba3x.bov3x = function() { var bg3x = ba3x.EQ2x(arguments);
        bg3x[0] = a1x.x2x(bg3x[0]); if (!bg3x[0]) return null;
        bg3x[1] = (bg3x[1] || "").toLowerCase(); if (!bg3x[1]) return null; return bg3x };
    ba3x.zU1x = function() { var vr0x = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup" },
            iz6t = { transitionend: "TransitionEnd", animationend: "AnimationEnd", animationstart: "AnimationStart", animationiteration: "AnimationIteration" }; var bPC0x = function(t2x) { return (kV7O.evt || kV7O.pro) + t2x }; return function() { var bg3x = ba3x.bov3x.apply(ba3x, arguments); if (!bg3x) return; var Zd9U = iz6t[bg3x[1]],
                Zc9T = vr0x[bg3x[1]]; if (!!Zd9U) { bg3x[4] = bg3x[1];
                bg3x[1] = bPC0x(Zd9U) } else if (!!Zc9T) { var T3x = "on" + bg3x[1]; if (!(T3x in bg3x[0])) { bg3x[4] = bg3x[1];
                    bg3x[1] = Zc9T } } return bg3x } }();
    ba3x.bom3x = function() { var bg3x = arguments;
        bg3x[0].addEventListener(bg3x[1], bg3x[2], !!bg3x[3]) };
    ba3x.Za9R = function() { var bg3x = arguments;
        bg3x[0].removeEventListener(bg3x[1], bg3x[2], !!bg3x[3]) };
    ba3x.bok3x = function(E2x, t2x, e2x) { var d2x = document.createEvent("Event");
        d2x.initEvent(t2x, !0, !0);
        NEJ.X(d2x, e2x);
        E2x.dispatchEvent(d2x) };
    ba3x.bCL7E = function() { var fU5Z = /\((.*?)\)/,
            jh6b = /\s*,\s*/,
            i2x = ["m11", "m12", "m21", "m22", "m41", "m42"]; var YY9P = function(rv9m) { var ia5f = {}; if (fU5Z.test(rv9m || "")) { k2x.be3x(RegExp.$1.split(jh6b), function(A2x, s2x) { ia5f[i2x[s2x]] = A2x || "" }) } return ia5f }; return function(rv9m) { if (!!window.CSSMatrix) return new CSSMatrix(rv9m); var T3x = kV7O.clz + "CSSMatrix"; if (!!window[T3x]) return new window[T3x](rv9m || ""); return YY9P(rv9m) } }();
    ba3x.bLc8U = function() { var cM4Q = /\{(.*?)\}/g; return function(T3x, bv3x) { bv3x = bv3x || o; var oW8O = bCV7O(T3x); return !oW8O ? "" : oW8O.replace(cM4Q, function($1, $2) { var bs3x = $2.split("|"); return bv3x[bs3x[0]] || bs3x[1] || "0" }) } }();
    ba3x.boe3x = function(E2x, T3x, A2x) { E2x.style[ba3x.bNm9d(T3x)] = A2x };
    ba3x.bNm9d = function() { var cM4Q = /^[a-z]/,
            boc3x = kV7O.css; var bPD0x = function(T3x) { return T3x.replace(cM4Q, function($1) { return boc3x + $1.toUpperCase() }) }; return function(T3x) { T3x = bCR7K(T3x); var bPN0x = ba3x.bPO0x(T3x, JQ4U); return bPN0x ? bPD0x(T3x) : T3x } }();
    ba3x.bPO0x = function() { var cM4Q = /^([a-z]+?)[A-Z]/; return function(T3x, bv3x) { if (!bv3x[T3x]) { if (cM4Q.test(T3x)) T3x = RegExp.$1 } return !!bv3x[T3x] } }();
    ba3x.bPR0x = function() { var cM4Q = /\$<(.*?)>/gi,
            boc3x = "-" + kV7O.css.toLowerCase() + "-"; return function(jr6l) { return jr6l.replace(cM4Q, function($1, $2) { var eO5T = $2,
                    bs3x = eO5T.split("|"),
                    oW8O = bCV7O(bs3x[0]); if (!!oW8O) { return ba3x.bLc8U(bs3x[0], k2x.ho5t(bs3x[1])) } return !ba3x.bPU0x(eO5T, JQ4U) ? eO5T : boc3x + eO5T }) } }();
    ba3x.bPU0x = function(T3x, bv3x) { return !!bv3x[T3x] };
    ba3x.bnP3x = function(cd3x, jr6l) { cd3x.textContent = jr6l };
    ba3x.bnM3x = function(cd3x, jr6l) { var vW0x = cd3x.sheet,
            bq3x = vW0x.cssRules.length;
        vW0x.insertRule(jr6l, bq3x); return vW0x.cssRules[bq3x] };
    ba3x.cxA8s = function(E2x, e2x) {};
    ba3x.YS9J = function(YQ9H) { return (YQ9H || "").toLowerCase() != "transparent" };
    ba3x.bPX0x = function(E2x) {};
    ba3x.bnC3x = function(E2x, T3x) { if (!!E2x.getAttribute) return E2x.getAttribute(T3x); return "" };
    ba3x.YH9y = function(fb5g) { a1x.cH4L(fb5g) };
    JK4O() })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        N3x = c2x("nej.p"),
        ba3x = c2x("nej.h"); if (N3x.mp7i.trident0) return; var fW5b = +(new Date);
    R3x = {};
    ba3x.bpd3x = ba3x.bpd3x.ec4g(function(d2x) { d2x.stopped = !0; var bg3x = d2x.args,
            C2x = a1x.kD6x(bg3x[0]),
            J3x = "hover-" + C2x; if (!C2x || !!R3x[J3x]) return;
        R3x[J3x] = !0;
        h2x.q2x(C2x, "mouseenter", a1x.y2x.g2x(a1x, C2x, bg3x[1]));
        h2x.q2x(C2x, "mouseleave", a1x.w2x.g2x(a1x, C2x, bg3x[1])) });
    ba3x.bpc3x = function() { var cxy8q = function() {}; return ba3x.bpc3x.ec4g(function(d2x) { d2x.stopped = !0; var E2x = d2x.args[0],
                C2x = "fixed-" + a1x.kD6x(E2x); if (!!R3x[C2x]) return; var bc3x = {};
            R3x[C2x] = bc3x }) }();
    ba3x.boJ3x = ba3x.boJ3x.ec4g(function(d2x) { d2x.stopped = !0; var E2x = d2x.args[0],
            cd3x = E2x.style,
            bKV8N = a1x.oE8w();
        cd3x.width = bKV8N.scrollWidth + "px";
        cd3x.height = bKV8N.scrollHeight + "px" });
    ba3x.mE7x = ba3x.mE7x.ec4g(function(d2x) { d2x.stopped = !0; var E2x = d2x.args[0],
            jZ6T = R3x[E2x.msk]; if (!jZ6T) { E2x.msk = fW5b++;
            jZ6T = a1x.cT4X("iframe");
            jZ6T.style.position = "absolute";
            R3x[E2x.msk] = jZ6T } d2x.value = jZ6T; var cd3x = jZ6T.style;
        cd3x.top = (parseInt(a1x.da4e(E2x, "top")) || 0) + "px";
        cd3x.left = (parseInt(a1x.da4e(E2x, "left")) || 0) + "px";
        cd3x.width = E2x.offsetWidth + "px";
        cd3x.height = E2x.offsetHeight + "px";
        E2x.insertAdjacentElement("beforeBegin", jZ6T) });
    ba3x.boC3x = ba3x.boC3x.ec4g(function(d2x) { d2x.stopped = !0; var jZ6T = R3x[d2x.args[0].msk]; if (!!jZ6T) a1x.mq7j(jZ6T) }) })();
(function() { var c2x = NEJ.P,
        N3x = c2x("nej.p"),
        a1x = c2x("nej.e"),
        ba3x = c2x("nej.h"); if (N3x.mp7i.trident1) return;
    ba3x.zU1x = function() { var vr0x = { touchcancel: "MSPointerCancel", touchstart: "MSPointerDown", touchmove: "MSPointerMove", touchend: "MSPointerUp" }; return ba3x.zU1x.ec4g(function(d2x) { var bg3x = ba3x.bov3x.apply(ba3x, d2x.args); if (!bg3x) { d2x.stopped = !0; return } var t2x = vr0x[bg3x[1]]; if (!!t2x && ("on" + t2x).toLowerCase() in bg3x[0]) { bg3x[4] = bg3x[1];
                bg3x[1] = t2x;
                d2x.stopped = !0;
                d2x.value = bg3x } }) }();
    ba3x.YS9J = function(YQ9H) { return !0 };
    ba3x.YH9y = ba3x.YH9y.ec4g(function(d2x) { d2x.stopped = !0; var fb5g = d2x.args[0];
        a1x.X3x(fb5g, "display", "none"); try { fb5g.contentWindow.document.body.innerHTML = "&nbsp;" } catch (ex) {} }) })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        N3x = c2x("nej.p"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        ba3x = c2x("nej.h"),
        bnn3x = {}; if (N3x.mp7i.trident) return;
    ba3x.EQ2x = ba3x.EQ2x.ec4g(function(d2x) { d2x.stopped = !0; var i2x = d2x.args[0]; if (!i2x) { d2x.value = null; return } var s2x = 0,
            m2x = []; while (!!i2x[s2x]) { m2x.push(i2x[s2x++]) } d2x.value = m2x });
    ba3x.bpu3x = ba3x.bpu3x.ec4g(function(d2x) { d2x.stopped = !0; var bs3x = [];
        k2x.be3x(d2x.args[0].childNodes, function(f2x) { if (f2x.nodeType == 1) bs3x.push(f2x) });
        d2x.value = bs3x });
    ba3x.bpt3x = ba3x.bpt3x.ec4g(function(d2x) { var E2x = d2x.args[0]; if (!!E2x.getElementsByClassName) return;
        d2x.stopped = !0; var m2x = [],
            bnl3x = new RegExp("(\\s|^)(?:" + d2x.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k2x.be3x(E2x.getElementsByTagName("*"), function(f2x) { if (bnl3x.test(f2x.className)) m2x.push(f2x) });
        d2x.value = m2x });
    ba3x.bpb3x = ba3x.bpb3x.ec4g(function(d2x) { var fD5I = d2x.args[0],
            mG7z = d2x.args[1]; if (fD5I.selectionStart == null) { d2x.stopped = !0; var cE4I = fD5I.createTextRange();
            cE4I.collapse(!0);
            cE4I.moveStart("character", mG7z.start);
            cE4I.moveEnd("character", mG7z.end - mG7z.start);
            cE4I.select();
            fD5I.focus() } });
    ba3x.boY3x = ba3x.boY3x.ec4g(function(d2x) { var fD5I = d2x.args[0];
        fD5I.focus(); if (fD5I.selectionStart == null) { d2x.stopped = !0; var bvt5y = document.selection.createRange(); var bvF5K = fD5I.createTextRange();
            bvF5K.moveToBookmark(bvt5y.getBookmark()); var bni3x = fD5I.createTextRange();
            bni3x.collapse(!0);
            bni3x.setEndPoint("EndToStart", bvF5K); var iq6k = bni3x.text.length;
            d2x.value = { start: iq6k, end: iq6k + bvt5y.text.length } } });
    ba3x.boS3x = ba3x.boS3x.ec4g(function(d2x) { if (!!window.XMLSerializer) return;
        d2x.stopped = !0; var E2x = d2x.args[0];
        d2x.value = E2x.xml != null ? E2x.xml : E2x.outHTML });
    ba3x.boR3x = function() { var KQ4U = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"]; var bPZ0x = function() { try { for (var i = 0, l = KQ4U.length; i < l; i++) return new ActiveXObject(KQ4U[i]) } catch (ex) { return null } }; return ba3x.boR3x.ec4g(function(d2x) { if (!!window.DOMParser) return;
            d2x.stopped = !0; var Ei2x = bPZ0x(); if (!!Ei2x && Ei2x.loadXML(d2x.args[0]) && !Ei2x.parseError.errorCode) d2x.value = Ei2x.documentElement }) }();
    ba3x.zU1x = function() { var iz6t = { input: "propertychange", load: "readystatechange" }; for (var x in iz6t) bnn3x[iz6t[x]] = !0; var bQa0x = function(E2x, t2x) { if ("on" + t2x in E2x) return null; return iz6t[t2x] || "" }; var bQb0x = function(t2x, dd4h) { var dq4u = dd4h; switch (t2x) {
                case "readystatechange":
                    dq4u = function(d2x) { var E2x = h2x.U3x(d2x) || this; if (E2x.readyState == "loaded" || E2x.readyState == "complete") { d2x.target = E2x;
                            dd4h.call(E2x, d2x) } }; break;
                case "propertychange":
                    dq4u = function(d2x) { var E2x = h2x.U3x(d2x) || this; if ("value" in E2x && d2x.propertyName == "value") { d2x.target = E2x;
                            dd4h.call(E2x, d2x) } }; break } return dq4u }; return ba3x.zU1x.ec4g(function(d2x) { var bg3x = ba3x.bov3x.apply(ba3x, d2x.args); if (!bg3x) { d2x.stopped = !0; return } var t2x = bQa0x(bg3x[0], bg3x[1]); if (!!t2x) { d2x.stopped = !0;
                bg3x[4] = bg3x[1];
                bg3x[1] = t2x; if (!!bg3x[2]) { bg3x[5] = bg3x[2];
                    bg3x[2] = bQb0x(bg3x[1], bg3x[2]) } d2x.value = bg3x } }, function(d2x) { var bg3x = d2x.value; if (!bg3x[0] || !k2x.gb5g(bg3x[2])) return; if (!k2x.gb5g(bg3x[5])) bg3x[5] = bg3x[2];
            bg3x[2] = bg3x[2].g2x(bg3x[0]) }) }();
    ba3x.bom3x = ba3x.bom3x.ec4g(function(d2x) { var bg3x = d2x.args; if (!!bnn3x[bg3x[1]] || !document.addEventListener) { d2x.stopped = !0;
            bg3x[0].attachEvent("on" + bg3x[1], bg3x[2]) } });
    ba3x.Za9R = ba3x.Za9R.ec4g(function(d2x) { var bg3x = d2x.args; if (!!bnn3x[bg3x[1]] || !document.removeEventListener) { d2x.stopped = !0;
            bg3x[0].detachEvent("on" + bg3x[1], bg3x[2]) } });
    ba3x.bok3x = ba3x.bok3x.ec4g(function(d2x) { if (!document.createEvent) { d2x.stopped = !0; var bg3x = d2x.args,
                byY6S = document.createEventObject();
            NEJ.X(byY6S, bg3x[2]); try { bg3x[0].fireEvent("on" + bg3x[1], byY6S) } catch (ex) { console.error(ex.message);
                console.error(ex.stack) } } });
    ba3x.boe3x = ba3x.boe3x.ec4g(function(d2x) { var bg3x = d2x.args,
            T3x = bg3x[1].toLowerCase(); if (T3x == "opacity" && !(T3x in document.body.style)) { bg3x[1] = "filter";
            bg3x[2] = "alpha(opacity=" + bg3x[2] * 100 + ")" } });
    ba3x.bnP3x = function() { var fc5h = 30; return ba3x.bnP3x.ec4g(function(d2x) { var E2x = d2x.args[0]; if (!E2x.styleSheet) return;
            d2x.stopped = !0; var jr6l = d2x.args[1]; var i2x = document.styleSheets; if (i2x.length > fc5h) { E2x = i2x[fc5h];
                jr6l = E2x.cssText + jr6l } else { E2x = E2x.styleSheet } E2x.cssText = jr6l }) }();
    ba3x.bnM3x = ba3x.bnM3x.ec4g(function(d2x) { var bg3x = d2x.args,
            vW0x = bg3x[0].sheet; if (!!vW0x) return;
        d2x.stopped = !0; var vW0x = bg3x[0].styleSheet,
            bq3x = vW0x.rules.length,
            bs3x = bg3x[1].split(/[\{\}]/);
        vW0x.addRule(bs3x[0], bs3x[1], bq3x);
        d2x.value = vW0x.rules[bq3x] });
    ba3x.boU3x = function() { var AR1x = function(dK4O, d2x) { a1x.w2x(h2x.U3x(d2x), dK4O) }; return ba3x.boU3x.ec4g(function(d2x) { if (N3x.cR4V.release >= "4.0") return; var bg3x = d2x.args; if (bg3x[1] != 1) { h2x.q2x(bg3x[0], "blur", AR1x.g2x(null, bg3x[2]));
                bg3x[1] = -1 } }) }();
    ba3x.YS9J = function(YQ9H) { return !0 };
    ba3x.bnC3x = ba3x.bnC3x.ec4g(function(d2x) { var bg3x = d2x.args,
            f2x = (bg3x[0].attributes || Y3x)[bg3x[1]]; if (!!f2x) { d2x.stopped = !0;
            d2x.value = f2x.value } }, function(d2x) { var bg3x = d2x.args; if (bg3x[1] == "maxlength" && d2x.value == 2147483647) d2x.value = "" }); if (N3x.cR4V.release < 5) { ba3x.boA3x = function() { var eZ5e, fb5g, jt6n = [],
                bmB3x = "cb-" + +(new Date),
                bi3x = '<script>parent.nej.h["' + bmB3x + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>"; var bCY7R = function() { eZ5e = window.clearTimeout(eZ5e); if (!jt6n.length) return; var dI4M = jt6n.shift(); try { var vb0x = fb5g.contentWindow.document;
                    vb0x.open();
                    vb0x.write("<head><title>");
                    vb0x.write(document.title);
                    vb0x.write("</title>");
                    vb0x.write(bi3x.replace("#<HASH>", encodeURIComponent(dI4M)));
                    vb0x.write("</head><body></body>"); if (location.hostname != document.domain) vb0x.domain = document.domain;
                    vb0x.close();
                    ba3x[bmB3x] = !1 } catch (ex) { console.log(ex.message || ex);
                    jt6n.unshift(dI4M) } eZ5e = window.setTimeout(bCY7R, 50) }; return ba3x.boA3x.ec4g(function(d2x) { d2x.stopped = !0; var dI4M = d2x.args[0]; if (!!ba3x[bmB3x] || !fb5g && !dI4M) return;
                jt6n.push(dI4M); if (!fb5g) fb5g = a1x.Yi9Z();
                bCY7R() }) }() } try { document.execCommand("BackgroundImageCache", !1, !0) } catch (e) {} })();
(function() { var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        ba3x = c2x("nej.h"),
        N3x = c2x("nej.p"),
        Yf9W = N3x.buT5Y; if (N3x.mp7i.gecko) return; var JK4O = function() { Yf9W.css3d = Yf9W.css3d || "MozPerspective" in document.body.style; if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function(hO5T, E2x) { if (!hO5T || !E2x) return; switch (hO5T) {
                case "beforeEnd":
                    this.appendChild(E2x); return;
                case "beforeBegin":
                    this.parentNode.insertBefore(E2x, this); return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(E2x) : this.insertBefore(E2x, this.firstChild); return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(E2x) : this.parentNode.insertBefore(E2x, this.nextSibling); return } }; if (!("innerText" in document.body)) { HTMLElement.prototype["__defineGetter__"]("innerText", function() { return this.textContent });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(bi3x) { this.textContent = bi3x }) } };
    ba3x.zU1x = function() { var fU5Z = /^(?:transitionend|animationend|animationstart|animationiteration)$/i; return ba3x.zU1x.ec4g(function(d2x) { var bg3x = d2x.args; if (fU5Z.test(bg3x[1] || "")) { d2x.stopped = !0;
                d2x.value = bg3x } }) }();
    ba3x.bPX0x = function() { var bQd0x = function(d2x) { h2x.bh3x(d2x);
            h2x.U3x(d2x).control.click() }; return function(E2x) { h2x.q2x(E2x, "click", bQd0x) } }();
    JK4O() })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        ba3x = c2x("nej.h"); var XX9O = function() { var nj7c = !!document.body.classList; return function() { return nj7c } }(); var bKE8w = function() { var cM4Q = /\s+/g; return function(fi5n) { fi5n = (fi5n || "").trim(); return !fi5n ? null : new RegExp("(\\s|^)(?:" + fi5n.replace(cM4Q, "|") + ")(?=\\s|$)", "g") } }();
    ba3x.JT4X = ba3x.JT4X.ec4g(function(d2x) { if (XX9O()) return;
        d2x.stopped = !0; var bg3x = d2x.args,
            E2x = a1x.x2x(bg3x[0]); if (!E2x || !bg3x[1] && !bg3x[2]) return; var fi5n = E2x.className || ""; var EU2x = " " + (bg3x[2] || ""),
            EV2x = bKE8w((bg3x[1] || "") + EU2x);!!EV2x && (fi5n = fi5n.replace(EV2x, "$1"));
        E2x.className = (fi5n + EU2x).replace(/\s+/g, " ").trim() });
    ba3x.bps3x = ba3x.bps3x.ec4g(function(d2x) { if (XX9O()) return;
        d2x.stopped = !0; var bg3x = d2x.args;
        ba3x.JT4X(bg3x[0], "", bg3x[1]) });
    ba3x.bpp3x = ba3x.bpp3x.ec4g(function(d2x) { if (XX9O()) return;
        d2x.stopped = !0; var bg3x = d2x.args;
        ba3x.JT4X(bg3x[0], bg3x[1], "") });
    ba3x.bpg3x = ba3x.bpg3x.ec4g(function(d2x) { if (XX9O()) return;
        d2x.stopped = !0; var bg3x = d2x.args,
            E2x = a1x.x2x(bg3x[0]); if (!E2x) { d2x.value = !1; return } var cM4Q = bKE8w(bg3x[1]);
        d2x.value = !cM4Q ? !1 : cM4Q.test(E2x.className || "") }) })();
(function() { var c2x = NEJ.P,
        N3x = c2x("nej.p"),
        ba3x = c2x("nej.h"); if (N3x.mp7i.webkit) return;
    ba3x.YS9J = function(YQ9H) { return !0 } })();
(function() { var c2x = NEJ.P,
        ba3x = c2x("nej.h"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        cO4S = c2x("nej.x"),
        R3x = {}; var bLb8T = function(E2x) { E2x = a1x.x2x(E2x); if (!E2x || !R3x[E2x.id]) return; var XS9J = !0,
            C2x = E2x.id;
        k2x.ee4i(R3x[C2x], function() { XS9J = !1; return !0 }); if (XS9J) delete R3x[C2x] };
    h2x.q2x = cO4S.q2x = function() { var bQf0x = function() { var bg3x = ba3x.zU1x.apply(ba3x, arguments); if (!bg3x || !bg3x[2]) return; var tb9S = a1x.kD6x(bg3x[0]),
                nQ7J = R3x[tb9S] || {};
            R3x[tb9S] = nQ7J;
            tb9S = bg3x[4] || bg3x[1]; var zx1x = nQ7J[tb9S] || [];
            nQ7J[tb9S] = zx1x;
            zx1x.push({ type: bg3x[1], func: bg3x[2], capt: !!bg3x[3], sfun: bg3x[5] || bg3x[2] }); return bg3x.slice(0, 4) }; return function() { var bg3x = bQf0x.apply(null, arguments); if (!!bg3x) ba3x.bom3x.apply(ba3x, bg3x); return this } }();
    h2x.mg7Z = cO4S.mg7Z = function() { var bQg0x = function() { var uM9D = arguments,
                tb9S = a1x.kD6x(uM9D[0]),
                nQ7J = R3x[tb9S],
                t2x = (uM9D[1] || "").toLowerCase(),
                d2x = uM9D[2]; if (!nQ7J || !t2x || !d2x) return;
            nQ7J = nQ7J[t2x]; if (!nQ7J) return; var bQl0x = !!uM9D[3],
                s2x = k2x.cV4Z(nQ7J, function(iz6t) { return d2x == iz6t.sfun && bQl0x == iz6t.capt }); if (s2x < 0) return; var iz6t = nQ7J.splice(s2x, 1)[0]; return !iz6t ? null : [a1x.x2x(tb9S), iz6t.type, iz6t.func, iz6t.capt] }; return function() { var bg3x = bQg0x.apply(null, arguments); if (!!bg3x) { ba3x.Za9R.apply(ba3x, bg3x);
                bLb8T(bg3x[0]) } return this } }();
    h2x.iw6q = cO4S.iw6q = function() { var bsZ4d = function() { var uM9D = arguments,
                tb9S = a1x.kD6x(uM9D[0]),
                nQ7J = R3x[tb9S],
                zx1x = (uM9D[1] || "").toLowerCase(); if (!nQ7J || !zx1x) return; var E2x = a1x.x2x(tb9S);
            k2x.me7X(nQ7J[zx1x], function(iz6t, s2x, i2x) { ba3x.Za9R(E2x, iz6t.type, iz6t.func, iz6t.capt);
                i2x.splice(s2x, 1) });
            delete nQ7J[zx1x] }; var bQm0x = function(E2x) { E2x = a1x.x2x(E2x); if (!E2x) return; var C2x = E2x.id;
            k2x.ee4i(R3x[C2x], function(i2x, t2x) { bsZ4d(C2x, t2x) });
            delete R3x[C2x] }; return function(E2x, t2x) {!t2x ? bQm0x(E2x) : bsZ4d(E2x, t2x);
            bLb8T(E2x); return this } }();
    h2x.U3x = function() { var blT2x; var Fo2x = function(T3x, E2x) { var bs3x = T3x.split(":"); if (bs3x.length > 1) { if (!blT2x) blT2x = { c: a1x.bz3x, d: a1x.u2x, a: a1x.ga5f }; var Fq2x = blT2x[bs3x[0]]; if (!!Fq2x) return !!Fq2x(E2x, bs3x[1]);
                T3x = bs3x[1] } return !!a1x.ga5f(E2x, T3x) || !!a1x.u2x(E2x, T3x) || a1x.bz3x(E2x, T3x) }; return function(d2x) { if (!d2x) return null; var E2x = d2x.target || d2x.srcElement,
                dE4I = arguments[1]; if (!dE4I) return E2x; if (k2x.fe5j(dE4I)) dE4I = Fo2x.g2x(null, dE4I); if (k2x.gb5g(dE4I)) { while (E2x) { if (!!dE4I(E2x)) return E2x;
                    E2x = E2x.parentNode } return null } return E2x } }();
    h2x.bh3x = function(d2x) { h2x.rw9n(d2x);
        h2x.ce3x(d2x); return this };
    h2x.rw9n = function(d2x) { if (!!d2x) {!!d2x.stopPropagation ? d2x.stopPropagation() : d2x.cancelBubble = !0 } return this };
    h2x.ce3x = function(d2x) { if (!!d2x) {!!d2x.preventDefault ? d2x.preventDefault() : d2x.returnValue = !1 } return this };
    h2x.cxo8g = function() { var pO8G = !1; var bQy0x = function() { if (pO8G) return;
            pO8G = !0;
            h2x.q2x(document, "click", bQJ1x, !0) }; var bQJ1x = function(d2x) { var E2x = h2x.U3x(d2x),
                bQS1x = a1x.u2x(E2x, "stopped"); if (bQS1x == "true") { h2x.bh3x(d2x);
                a1x.u2x(E2x, "stopped", "false") } }; return function(d2x) { if (!d2x) return; if (d2x.type == "click") { h2x.bh3x(d2x); return } bQy0x();
            a1x.u2x(h2x.U3x(d2x), "stopped", "true") } }();
    h2x.kw6q = function(d2x) { return d2x.pageX != null ? d2x.pageX : d2x.clientX + a1x.oE8w().scrollLeft };
    h2x.oc8U = function(d2x) { return d2x.pageY != null ? d2x.pageY : d2x.clientY + a1x.oE8w().scrollTop };
    h2x.z2x = cO4S.z2x = function(E2x, t2x, e2x) { var bg3x = ba3x.zU1x(E2x, t2x); if (!!bg3x) ba3x.bok3x(bg3x[0], bg3x[1], e2x); return this };
    c2x("dbg").dumpEV = function() { return R3x };
    cO4S.isChange = !0 })();
(function() { var o = !0,
        w = null;
    (function(B) {
        function v(a) { if ("bug-string-char-index" == a) return "a" != "a" [0]; var f, c = "json" == a; if (c || "json-stringify" == a || "json-parse" == a) { if ("json-stringify" == a || c) { var d = k.stringify,
                        b = "function" == typeof d && l; if (b) {
                        (f = function() { return 1 }).toJSON = f; try { b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({ a: [f, o, !1, w, "\0\b\n\f\r\t"] }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1)) } catch (n) { b = !1 } } if (!c) return b } if ("json-parse" == a || c) { a = k.parse; if ("function" == typeof a) try { if (0 === a("0") && !a(!1)) { f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'); var e = 5 == f.a.length && 1 === f.a[0]; if (e) { try { e = !a('"\t"') } catch (g) {} if (e) try { e = 1 !== a("01") } catch (i) {} } } } catch (O) { e = !1 }
                    if (!c) return e } return b && e } } var m = {}.toString,
            p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {}); var l = new Date(-0xc782b5b800cec); try { l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds() } catch (P) {} if (!v("json")) { var s = v("bug-string-char-index"); if (!l) var t = Math.floor,
                J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function(a, f) { return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400) }; if (!(p = {}.hasOwnProperty)) p = function(a) { var f = {},
                    c; if ((f.__proto__ = w, f.__proto__ = { toString: 1 }, f).toString != m) p = function(a) { var f = this.__proto__,
                        a = a in (this.__proto__ = w, this);
                    this.__proto__ = f; return a };
                else { c = f.constructor;
                    p = function(a) { var f = (this.constructor || c).prototype; return a in this && !(a in f && this[a] === f[a]) } } f = w; return p.call(this, a) }; var K = { "boolean": 1, number: 1, string: 1, "undefined": 1 };
            C = function(a, f) { var c = 0,
                    b, h, n;
                (b = function() { this.valueOf = 0 }).prototype.valueOf = 0;
                h = new b; for (n in h) p.call(h, n) && c++;
                b = h = w; if (c) c = c == 2 ? function(a, f) { var c = {},
                        b = m.call(a) == "[object Function]",
                        d; for (d in a) !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d) } : function(a, f) { var c = m.call(a) == "[object Function]",
                        b, d; for (b in a) !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b) };
                else { h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function(a, f) { var c = m.call(a) == "[object Function]",
                            b, d; if (d = !c)
                            if (d = typeof a.constructor != "function") { d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d] }
                        d = d ? a.hasOwnProperty : p; for (b in a) !(c && b == "prototype") && d.call(a, b) && f(b); for (c = h.length; b = h[--c]; d.call(a, b) && f(b)); } } c(a, f) }; if (!v("json-stringify")) { var L = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" },
                    u = function(a, f) { return ("000000" + (f || 0)).slice(-a) },
                    G = function(a) { var f = '"',
                            b = 0,
                            d = a.length,
                            h = d > 10 && s,
                            n; for (h && (n = a.split("")); b < d; b++) { var e = a.charCodeAt(b); switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e]; break;
                                default:
                                    if (e < 32) { f = f + ("\\u00" + u(2, e.toString(16))); break } f = f + (h ? n[b] : s ? a.charAt(b) : a[b]) } } return f + '"' },
                    E = function(a, b, c, d, h, n, e) { var g = b[a],
                            i, j, k, l, q, s, v, x, y; try { g = b[a] } catch (A) {} if (typeof g == "object" && g) { i = m.call(g); if (i == "[object Date]" && !p.call(g, "toJSON"))
                                if (g > -1 / 0 && g < 1 / 0) { if (z) { k = t(g / 864e5); for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++); for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                        k = 1 + k - z(i, j);
                                        l = (g % 864e5 + 864e5) % 864e5;
                                        q = t(l / 36e5) % 24;
                                        s = t(l / 6e4) % 60;
                                        v = t(l / 1e3) % 60;
                                        l = l % 1e3 } else { i = g.getUTCFullYear();
                                        j = g.getUTCMonth();
                                        k = g.getUTCDate();
                                        q = g.getUTCHours();
                                        s = g.getUTCMinutes();
                                        v = g.getUTCSeconds();
                                        l = g.getUTCMilliseconds() } g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z" } else g = w;
                            else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a) } c && (g = c.call(b, a, g)); if (g === w) return "null";
                        i = m.call(g); if (i == "[object Boolean]") return "" + g; if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null"; if (i == "[object String]") return G("" + g); if (typeof g == "object") { for (a = e.length; a--;)
                                if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h; if (i == "[object Array]") { j = 0; for (a = g.length; j < a; y || (y = o), j++) { i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i) } a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]" } else { C(d || g, function(a) { var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o) });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}" } e.pop(); return a } };
                k.stringify = function(a, b, c) { var d, h, j; if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]") h = b;
                        else if (m.call(b) == "[object Array]") { j = {}; for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1)); } if (c)
                        if (m.call(c) == "[object Number]") { if ((c = c - c % 1) > 0) { d = ""; for (c > 10 && (c = 10); d.length < c; d = d + " "); } } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10)); return E("", (i = {}, i[""] = a, i), h, j, d, "", []) } } if (!v("json-parse")) { var M = String.fromCharCode,
                    N = { 92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r" },
                    b, A, j = function() { b = A = w; throw SyntaxError() },
                    q = function() { for (var a = A, f = a.length, c, d, h, k, e; b < f;) { e = a.charCodeAt(b); switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++; break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++; return c;
                                case 34:
                                    c = "@"; for (b++; b < f;) { e = a.charCodeAt(b); if (e < 32) j();
                                        else if (e == 92) { e = a.charCodeAt(++b); switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++; break;
                                                case 117:
                                                    d = ++b; for (h = b + 4; b < h; b++) { e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j() } c = c + M("0x" + a.slice(d, b)); break;
                                                default:
                                                    j() } } else { if (e == 34) break;
                                            e = a.charCodeAt(b); for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b) } } if (a.charCodeAt(b) == 34) { b++; return c } j();
                                default:
                                    d = b; if (e == 45) { k = o;
                                        e = a.charCodeAt(++b) } if (e >= 48 && e <= 57) { for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++); if (a.charCodeAt(b) == 46) { for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h } e = a.charCodeAt(b); if (e == 101 || e == 69) { e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++; for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h } return +a.slice(d, b) } k && j(); if (a.slice(b, b + 4) == "true") { b = b + 4; return o } if (a.slice(b, b + 5) == "false") { b = b + 5; return false } if (a.slice(b, b + 4) == "null") { b = b + 4; return w } j() } } return "$" },
                    F = function(a) { var b, c;
                        a == "$" && j(); if (typeof a == "string") { if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1); if (a == "[") { for (b = [];; c || (c = o)) { a = q(); if (a == "]") break; if (c)
                                        if (a == ",") { a = q();
                                            a == "]" && j() } else j();
                                    a == "," && j();
                                    b.push(F(a)) } return b } if (a == "{") { for (b = {};; c || (c = o)) { a = q(); if (a == "}") break; if (c)
                                        if (a == ",") { a = q();
                                            a == "}" && j() } else j();
                                    (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q()) } return b } j() } return a },
                    I = function(a, b, c) { c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c },
                    H = function(a, b, c) { var d = a[b],
                            h; if (typeof d == "object" && d)
                            if (m.call(d) == "[object Array]")
                                for (h = d.length; h--;) I(d, h, c);
                            else C(d, function(a) { I(d, a, c) }); return c.call(a, b, d) };
                k.parse = function(a, f) { var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w; return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c } } } D && define(function() { return k }) })(this) })();
(function() { var c2x = NEJ.P,
        N3x = c2x("nej.p"); if (N3x.mp7i.trident0) return;
    JSON.parse = JSON.parse.ec4g(function(d2x) { var cK4O = d2x.args[0] || ""; if (cK4O.length >= 5e5) { d2x.stopped = !0;
            d2x.value = eval("(" + cK4O + ")") } }) })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        dO4S = c2x("nej.g"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        ba3x = c2x("nej.h"),
        cO4S = c2x("nej.x"),
        Ft2x, blE2x = {},
        R3x = document.createDocumentFragment();
    a1x.kD6x = cO4S.kD6x = function(E2x) { E2x = a1x.x2x(E2x); if (!E2x) return; var C2x = !!E2x.id ? E2x.id : "auto-id-" + k2x.XH8z(16);
        E2x.id = C2x; if (a1x.x2x(C2x) != E2x) blE2x[C2x] = E2x; return C2x };
    a1x.x2x = cO4S.x2x = function(E2x) { var f2x = blE2x["" + E2x]; if (!!f2x) return f2x; if (!k2x.fe5j(E2x) && !k2x.tY9P(E2x)) return E2x; return document.getElementById(E2x) };
    a1x.cQ4U = cO4S.cQ4U = function(E2x, dK4O) { E2x = a1x.x2x(E2x); if (!E2x) return null; var i2x = ba3x.bpu3x(E2x); if (!!dK4O) k2x.me7X(i2x, function(f2x, s2x) { if (!a1x.bz3x(f2x, dK4O)) i2x.splice(s2x, 1) }); return i2x };
    a1x.I2x = cO4S.I2x = function(E2x, fi5n) { E2x = a1x.x2x(E2x); return !E2x ? null : ba3x.bpt3x(E2x, fi5n.trim()) };
    a1x.bKd8V = cO4S.bKd8V = function(E2x) { E2x = a1x.x2x(E2x); if (!!E2x) { E2x = E2x.parentNode; while (!!E2x) { if (E2x.scrollHeight > E2x.clientHeight) break;
                E2x = E2x.parentNode } if (!!E2x) return E2x } var nQ7J = document.body.scrollHeight,
            zx1x = document.documentElement.scrollHeight; return zx1x >= nQ7J ? document.documentElement : document.body };
    a1x.oE8w = function() { var bKr8j = function(i2x) { var m2x = 0;
            k2x.be3x(i2x, function(gm5r) { if (!gm5r) return; if (!m2x) { m2x = gm5r } else { m2x = Math.min(m2x, gm5r) } }); return m2x }; return function(vb0x) { var Fu2x = vb0x || document,
                zk1x = Fu2x.body,
                zj1x = Fu2x.documentElement,
                m2x = { scrollTop: Math.max(zk1x.scrollTop, zj1x.scrollTop), scrollLeft: Math.max(zk1x.scrollLeft, zj1x.scrollLeft), clientWidth: bKr8j([zk1x.clientWidth, zk1x.offsetWidth, zj1x.clientWidth, zj1x.offsetWidth]), clientHeight: bKr8j([zk1x.clientHeight, zk1x.offsetHeight, zj1x.clientHeight, zj1x.offsetHeight]) };
            m2x.scrollWidth = Math.max(m2x.clientWidth, zk1x.scrollWidth, zj1x.scrollWidth);
            m2x.scrollHeight = Math.max(m2x.clientHeight, zk1x.scrollHeight, zj1x.scrollHeight); return m2x } }();
    a1x.cxi8a = function(fc5h, oa8S) { var m2x = NEJ.X({}, oa8S),
            bMr9i = fc5h.width / fc5h.height,
            XF8x = oa8S.width / oa8S.height; if (bMr9i > XF8x && oa8S.height > fc5h.height) { m2x.height = fc5h.height;
            m2x.width = m2x.height * XF8x } if (bMr9i < XF8x && oa8S.width > fc5h.width) { m2x.width = fc5h.width;
            m2x.height = m2x.width / XF8x } return m2x };
    a1x.cxh8Z = function() { var cM4Q = /\s+/; var tl9c = { left: function() { return 0 }, center: function(gK5P, oa8S) { return (gK5P.width - oa8S.width) / 2 }, right: function(gK5P, oa8S) { return gK5P.width - oa8S.width }, top: function() { return 0 }, middle: function(gK5P, oa8S) { return (gK5P.height - oa8S.height) / 2 }, bottom: function(gK5P, oa8S) { return gK5P.height - oa8S.height } }; return function(gK5P, oa8S, ng7Z) { var m2x = {},
                bs3x = (ng7Z || "").split(cM4Q),
                gl5q = tl9c[bs3x[1]] || tl9c.middle,
                gD5I = tl9c[bs3x[0]] || tl9c.center;
            m2x.top = gl5q(gK5P, oa8S);
            m2x.left = gD5I(gK5P, oa8S); return m2x } }();
    a1x.rd8V = cO4S.rd8V = function(E2x, dK4O) { ba3x.bpd3x(E2x, dK4O || a1x.u2x(E2x, "hover") || "js-hover"); return this };
    a1x.Fv2x = cO4S.Fv2x = function(E2x) { E2x = a1x.x2x(E2x); if (!E2x) return;
        ba3x.bpc3x(E2x) };
    a1x.bRm1x = cO4S.bRm1x = function() { var R3x = {},
            btK4O = 2; var bRX1x = function(C2x, dK4O, d2x) { R3x[C2x] = [h2x.kw6q(d2x), h2x.oc8U(d2x)];
            a1x.y2x(C2x, dK4O) }; var bSj1x = function(C2x, dK4O, d2x) { var bE3x = R3x[C2x]; if (!k2x.en4r(bE3x)) return; var bSA1x = Math.abs(h2x.kw6q(d2x) - bE3x[0]),
                bSG1x = Math.abs(h2x.oc8U(d2x) - bE3x[1]); if (bSA1x > btK4O || bSG1x > btK4O) bkT2x(C2x, dK4O) }; var bkT2x = function(C2x, dK4O) { if (k2x.en4r(R3x[C2x])) { R3x[C2x] = -1;
                a1x.w2x(C2x, dK4O) } }; return function(E2x, dK4O) { var C2x = a1x.kD6x(E2x); if (!C2x || R3x[C2x] != null) return;
            R3x[C2x] = -1;
            dK4O = dK4O || a1x.u2x(C2x, "highlight") || "js-highlight";
            h2x.q2x(C2x, "touchstart", bRX1x.g2x(null, C2x, dK4O));
            h2x.q2x(document, "touchmove", bSj1x.g2x(null, C2x, dK4O));
            h2x.q2x(document, "touchend", bkT2x.g2x(null, C2x, dK4O));
            h2x.q2x(document, "touchcancel", bkT2x.g2x(null, C2x, dK4O)) } }();
    a1x.zd1x = cO4S.zd1x = function() { var bSV1x = function(C2x, dK4O, bTb1x) { var E2x = a1x.x2x(C2x),
                d2x = { clazz: dK4O, target: E2x }; if (a1x.bz3x(E2x, dK4O)) { d2x.toggled = !1;
                a1x.w2x(E2x, dK4O) } else { d2x.toggled = !0;
                a1x.y2x(E2x, dK4O) } bTb1x.call(null, d2x) }; return function(E2x, e2x) { E2x = a1x.x2x(E2x); if (!!E2x) { var ia5f = { ontoggle: bm3x, clazz: "js-toggle", element: E2x.parentNode }; if (k2x.fe5j(e2x)) { var f2x = a1x.x2x(e2x);!!f2x ? ia5f.element = f2x : ia5f.clazz = e2x } else { NEJ.EX(ia5f, e2x);
                    ia5f.element = a1x.x2x(ia5f.element) } var C2x = a1x.kD6x(ia5f.element);
                h2x.q2x(E2x, "click", bSV1x.g2x(null, C2x, ia5f.clazz, ia5f.ontoggle || bm3x)) } return this } }();
    a1x.lN7G = cO4S.lN7G = function(E2x, e2x) { E2x = a1x.x2x(E2x); if (!E2x) return; var eC4G = 0,
            dK4O = "js-focus"; if (k2x.tY9P(e2x)) { eC4G = e2x } else if (k2x.fe5j(e2x)) { dK4O = e2x } else if (k2x.ke6Y(e2x)) { eC4G = e2x.mode || eC4G;
            dK4O = e2x.clazz || dK4O } var A2x = parseInt(a1x.u2x(E2x, "mode")); if (!isNaN(A2x)) eC4G = A2x;
        A2x = a1x.u2x(E2x, "focus"); if (!!A2x) dK4O = A2x;
        ba3x.boU3x(E2x, eC4G, dK4O); return this };
    a1x.cT4X = function() { var bv3x = { a: { href: "#", hideFocus: !0 }, style: { type: "text/css" }, link: { type: "text/css", rel: "stylesheet" }, iframe: { frameBorder: 0 }, script: { defer: !0, type: "text/javascript" } }; return function(eX5c, fi5n, bB3x) { var E2x = document.createElement(eX5c);
            NEJ.X(E2x, bv3x[eX5c.toLowerCase()]); if (!!fi5n) E2x.className = fi5n;
            bB3x = a1x.x2x(bB3x); if (!!bB3x) bB3x.appendChild(E2x); return E2x } }();
    a1x.Yi9Z = function() { var bUo1x = function() { if (location.hostname == document.domain) return "about:blank"; return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();' }; var bUL2x = function(T3x) { T3x = T3x.trim(); if (!T3x) return a1x.cT4X("iframe"); var fb5g; try { fb5g = document.createElement('<iframe name="' + T3x + '"></iframe>');
                fb5g.frameBorder = 0 } catch (e) { fb5g = a1x.cT4X("iframe");
                fb5g.name = T3x } return fb5g }; return function(e2x) { e2x = e2x || Y3x; var fb5g = bUL2x(e2x.name || ""); if (!e2x.visible) fb5g.style.display = "none"; if (k2x.gb5g(e2x.onload)) h2x.q2x(fb5g, "load", function(d2x) { if (!fb5g.src) return;
                h2x.iw6q(fb5g, "load");
                e2x.onload(d2x) }); var bB3x = e2x.parent; if (k2x.gb5g(bB3x)) { try { bB3x(fb5g) } catch (e) {} } else {
                (a1x.x2x(bB3x) || document.body).appendChild(fb5g) } var dw4A = e2x.src || bUo1x();
            window.setTimeout(function() { fb5g.src = dw4A }, 0); return fb5g } }();
    a1x.cH4L = cO4S.cH4L = function() { var byQ6K = function(LL4P) { LL4P.src = dO4S.bpz3x }; var bzQ6K = function(up9g) { up9g.src = "about:blank" }; return function(E2x, bVe2x) { E2x = a1x.x2x(E2x); if (!E2x) return this; if (!bVe2x) h2x.iw6q(E2x);
            delete blE2x[E2x.id]; var eX5c = E2x.tagName; if (eX5c == "IFRAME") { bzQ6K(E2x) } else if (eX5c == "IMG") { byQ6K(E2x) } else if (!!E2x.getElementsByTagName) { k2x.be3x(E2x.getElementsByTagName("img"), byQ6K);
                k2x.be3x(E2x.getElementsByTagName("iframe"), bzQ6K) } if (!!E2x.parentNode) { E2x.parentNode.removeChild(E2x) } return this } }();
    a1x.mq7j = cO4S.mq7j = function(E2x) { E2x = a1x.x2x(E2x); if (!!E2x) R3x.appendChild(E2x); return this };
    a1x.bAA6u = cO4S.bAA6u = function(E2x) { E2x = a1x.x2x(E2x); if (!E2x) return;
        k2x.me7X(E2x.childNodes, function(f2x) { a1x.cH4L(f2x) }) };
    a1x.Fz2x = cO4S.Fz2x = function() { var dK4O, fU5Z = /\s+/; var bVu2x = function() { if (!!dK4O) return;
            dK4O = a1x.sj9a(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a1x.bCh6b() }; return function(E2x, e2x) { E2x = a1x.x2x(E2x); if (!E2x) return;
            bVu2x();
            e2x = e2x || Y3x; var bB3x = E2x.parentNode; if (!a1x.bz3x(bB3x, dK4O)) { bB3x = a1x.cT4X("span", dK4O);
                E2x.insertAdjacentElement("beforeBegin", bB3x);
                bB3x.appendChild(E2x) } var bCD6x = e2x.nid || "",
                f2x = a1x.I2x(bB3x, bCD6x || dK4O + "-show")[0]; if (!f2x) { var dD4H = ((e2x.clazz || "") + " " + bCD6x).trim();
                dD4H = dK4O + "-show" + (!dD4H ? "" : " ") + dD4H;
                f2x = a1x.cT4X(e2x.tag || "span", dD4H);
                bB3x.appendChild(f2x) } var dD4H = e2x.clazz; if (!!dD4H) { dD4H = (dD4H || "").trim().split(fU5Z)[0] + "-parent";
                a1x.y2x(bB3x, dD4H) } return f2x } }();
    a1x.u2x = cO4S.u2x = function() { var bkG2x = {},
            eX5c = "data-",
            cM4Q = /\-(.{1})/gi; var CK2x = function(E2x) { var C2x = a1x.kD6x(E2x); if (!!bkG2x[C2x]) return; var bv3x = {};
            k2x.be3x(E2x.attributes, function(f2x) { var J3x = f2x.nodeName; if (J3x.indexOf(eX5c) != 0) return;
                J3x = J3x.replace(eX5c, "").replace(cM4Q, function($1, $2) { return $2.toUpperCase() });
                bv3x[J3x] = f2x.nodeValue || "" });
            bkG2x[C2x] = bv3x }; return function(E2x, J3x, A2x) { E2x = a1x.x2x(E2x); if (!E2x) return null; var Xb8T = E2x.dataset; if (!Xb8T) { CK2x(E2x);
                Xb8T = bkG2x[E2x.id] } if (A2x !== undefined) Xb8T[J3x] = A2x; return Xb8T[J3x] } }();
    a1x.ga5f = cO4S.ga5f = function(E2x, T3x, A2x) { E2x = a1x.x2x(E2x); if (!E2x) return ""; if (A2x !== undefined && !!E2x.setAttribute) E2x.setAttribute(T3x, A2x); return ba3x.bnC3x(E2x, T3x) };
    a1x.mV7O = function(dr4v) { var qD8v = document.createElement("div");
        qD8v.innerHTML = dr4v; var i2x = a1x.cQ4U(qD8v); return i2x.length > 1 ? qD8v : i2x[0] };
    a1x.bVD2x = cO4S.bVD2x = function(E2x) { E2x = a1x.x2x(E2x); return !E2x ? "" : ba3x.boS3x(E2x) };
    a1x.bIr8j = function(zZ1x) { zZ1x = (zZ1x || "").trim(); return !zZ1x ? null : ba3x.boR3x(zZ1x) };
    a1x.bVG2x = function(cZ4d, t2x) { cZ4d = cZ4d || ""; switch (t2x) {
            case "xml":
                cZ4d = a1x.bIr8j(cZ4d); break;
            case "json":
                try { cZ4d = JSON.parse(cZ4d) } catch (ex) { cZ4d = null } break } return cZ4d };
    a1x.hJ5O = cO4S.hJ5O = function() { var bXd2x = function(E2x) { return E2x == document.body || E2x == document.documentElement }; return function(dJ4N, nw7p) { dJ4N = a1x.x2x(dJ4N); if (!dJ4N) return null;
            nw7p = a1x.x2x(nw7p) || null; var m2x = { x: 0, y: 0 },
                bky2x, dh4l, WZ8R; while (!!dJ4N && dJ4N != nw7p) { bky2x = bXd2x(dJ4N);
                dh4l = bky2x ? 0 : dJ4N.scrollLeft;
                WZ8R = parseInt(a1x.da4e(dJ4N, "borderLeftWidth")) || 0;
                m2x.x += dJ4N.offsetLeft + WZ8R - dh4l;
                dh4l = bky2x ? 0 : dJ4N.scrollTop;
                WZ8R = parseInt(a1x.da4e(dJ4N, "borderTopWidth")) || 0;
                m2x.y += dJ4N.offsetTop + WZ8R - dh4l;
                dJ4N = dJ4N.offsetParent } return m2x } }();
    a1x.mO7H = cO4S.mO7H = function(E2x) { var bj3x = a1x.hJ5O(E2x);
        window.scrollTo(bj3x.x, bj3x.y); return this };
    a1x.cwG8y = function(rv9m) { rv9m = (rv9m || "").trim(); return ba3x.bCL7E(rv9m) };
    a1x.bXe2x = cO4S.bXe2x = function(E2x, T3x, bv3x) { E2x = a1x.x2x(E2x); if (!E2x) return this; var A2x = ba3x.bLc8U(T3x, bv3x); if (!A2x) return this;
        a1x.X3x(E2x, "transform", A2x); return this };
    a1x.fy5D = cO4S.fy5D = function(E2x, bv3x) { E2x = a1x.x2x(E2x); if (!!E2x) k2x.ee4i(bv3x, function(A2x, T3x) { a1x.X3x(E2x, T3x, A2x) }); return this };
    a1x.bXk2x = cO4S.bXk2x = function(fD5I, e2x) { fD5I = a1x.x2x(fD5I); if (!fD5I) return { start: 0, end: 0 }; if (k2x.tY9P(e2x)) e2x = { start: e2x, end: e2x }; if (e2x != null) { if (e2x.end == null) e2x.end = e2x.start || 0;
            ba3x.bpb3x(fD5I, e2x) } else { e2x = ba3x.boY3x(fD5I) } return e2x };
    a1x.X3x = cO4S.X3x = function(E2x, T3x, A2x) { E2x = a1x.x2x(E2x); if (!!E2x) ba3x.boe3x(E2x, T3x, A2x); return this };
    a1x.da4e = cO4S.da4e = function(E2x, T3x) { E2x = a1x.x2x(E2x); if (!E2x) return ""; var gr5w = !window.getComputedStyle ? E2x.currentStyle || Y3x : window.getComputedStyle(E2x, null); return gr5w[ba3x.bNm9d(T3x)] || "" };
    a1x.bMs9j = function() { var cM4Q = /[\s\r\n]+/gi; return function(cd3x) { cd3x = (cd3x || "").trim().replace(cM4Q, " "); if (!cd3x) return; var f2x = a1x.cT4X("style");
            document.head.appendChild(f2x);
            ba3x.bnP3x(f2x, ba3x.bPR0x(cd3x)); return f2x } }();
    a1x.bMP9G = function(we0x) { try { we0x = we0x.trim(); if (!!we0x) return (new Function(we0x))() } catch (ex) { console.error(ex.message);
            console.error(ex.stack) } };
    a1x.sj9a = function() { var cM4Q = /#<.*?>/g,
            fW5b = +(new Date); return function(jr6l) { if (!Ft2x) Ft2x = []; var fi5n = "auto-" + fW5b++;
            Ft2x.push(jr6l.replace(cM4Q, fi5n)); return fi5n } }();
    a1x.bCh6b = function() { if (!!Ft2x) { a1x.bMs9j(Ft2x.join(""));
            Ft2x = null } return this };
    a1x.cwD8v = function(cd3x, jr6l) { cd3x = a1x.x2x(cd3x); return !cd3x ? null : ba3x.bnM3x(cd3x, jr6l) };
    a1x.y2x = cO4S.y2x = function() { ba3x.bps3x.apply(ba3x, arguments); return this };
    a1x.w2x = cO4S.w2x = function() { ba3x.bpp3x.apply(ba3x, arguments); return this };
    a1x.ev4z = cO4S.ev4z = function() { ba3x.JT4X.apply(ba3x, arguments); return this };
    a1x.bz3x = cO4S.bz3x = function() { return ba3x.bpg3x.apply(ba3x, arguments) }; if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cO4S.isChange = !0 })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        eU5Z = NEJ.R,
        bm3x = NEJ.F,
        a1x = c2x("nej.e"),
        ba3x = c2x("nej.h"),
        k2x = c2x("nej.u"); var Bk1x = function(j2x, t2x) { try { t2x = t2x.toLowerCase(); if (j2x === null) return t2x == "null"; if (j2x === undefined) return t2x == "undefined"; return Y3x.toString.call(j2x).toLowerCase() == "[object " + t2x + "]" } catch (e) { return !1 } };
    k2x.gb5g = function(j2x) { return Bk1x(j2x, "function") };
    k2x.fe5j = function(j2x) { return Bk1x(j2x, "string") };
    k2x.tY9P = function(j2x) { return Bk1x(j2x, "number") };
    k2x.cwC8u = function(j2x) { return Bk1x(j2x, "boolean") };
    k2x.FB2x = function(j2x) { return Bk1x(j2x, "date") };
    k2x.en4r = function(j2x) { return Bk1x(j2x, "array") };
    k2x.ke6Y = function(j2x) { return Bk1x(j2x, "object") };
    k2x.fh5m = function() { var cM4Q = /[^\x00-\xfff]/g; return function(bi3x) { return ("" + (bi3x || "")).replace(cM4Q, "**").length } }();
    k2x.cV4Z = function(i2x, r2x) { var dE4I = k2x.gb5g(r2x) ? r2x : function(A2x) { return A2x === r2x },
            s2x = k2x.ee4i(i2x, dE4I); return s2x != null ? s2x : -1 };
    k2x.cwy8q = function() { var bty4C; var LU4Y = function(i2x, nn7g, nm7f) { if (nn7g > nm7f) return -1; var CW2x = Math.ceil((nn7g + nm7f) / 2),
                m2x = bty4C(i2x[CW2x], CW2x, i2x); if (m2x == 0) return CW2x; if (m2x < 0) return LU4Y(i2x, nn7g, CW2x - 1); return LU4Y(i2x, CW2x + 1, nm7f) }; return function(i2x, Fq2x) { bty4C = Fq2x || bm3x; return LU4Y(i2x, 0, i2x.length - 1) } }();
    k2x.me7X = function(i2x, dq4u, id6X) { if (!i2x || !i2x.length || !k2x.gb5g(dq4u)) return null; for (var i = i2x.length - 1; i >= 0; i--)
            if (!!dq4u.call(id6X, i2x[i], i, i2x)) return i; return null };
    k2x.be3x = function(i2x, dq4u, id6X) { if (!i2x || !i2x.length || !k2x.gb5g(dq4u)) return this; if (!!i2x.forEach) { i2x.forEach(dq4u, id6X); return this } for (var i = 0, l = i2x.length; i < l; i++) dq4u.call(id6X, i2x[i], i, i2x); return this };
    k2x.ee4i = function(i2x, dq4u, id6X) { if (!i2x || !k2x.gb5g(dq4u)) return null; if (i2x.length != null) { if (i2x.length > 0)
                for (var i = 0, l = i2x.length; i < l; i++)
                    if (!!dq4u.call(id6X, i2x[i], i, i2x)) return i } if (k2x.ke6Y(i2x)) { for (var x in i2x)
                if (i2x.hasOwnProperty(x) && !!dq4u.call(id6X, i2x[x], x, i2x)) return x } return null };
    k2x.bYc2x = function(if6Z, bYe2x, e2x) { if6Z = if6Z || [];
        e2x = e2x || Y3x; var bwG5L = !!e2x.union,
            uv9m = !!e2x.begin,
            WP8H = e2x.compare,
            bYr2x = bwG5L && uv9m ? k2x.me7X : k2x.be3x;
        bYr2x(bYe2x, function(r2x) { if (!!WP8H) WP8H = WP8H.dV4Z(r2x); var s2x = k2x.cV4Z(if6Z, WP8H || r2x); if (s2x >= 0) if6Z.splice(s2x, 1); if (bwG5L) if6Z[uv9m ? "unshift" : "push"](r2x) }); return if6Z };
    k2x.Ec2x = function(bv3x, bi3x) { if (!bv3x || !bi3x || !bi3x.replace) return bi3x || ""; return bi3x.replace(bv3x.r, function($1) { var m2x = bv3x[!bv3x.i ? $1.toLowerCase() : $1]; return m2x != null ? m2x : $1 }) };
    k2x.dL4P = function() { var bv3x = { r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g, "<": "&lt;", ">": "&gt;", "&": "&amp;", " ": "&nbsp;", '"': "&quot;", "'": "&#39;", "\n": "<br/>", "\r": "", "&lt;": "&lt;", "&gt;": "&gt;" }; return function(bi3x) { return k2x.Ec2x(bv3x, bi3x) } }();
    k2x.LW4a = function() { var bv3x = { r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi, "&lt;": "<", "&gt;": ">", "&amp;": "&", "&nbsp;": " ", "&#39;": "'", "&quot;": '"', "<br/>": "\n" }; return function(bi3x) { return k2x.Ec2x(bv3x, bi3x) } }();
    k2x.iV6P = function() { var bv3x = { i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g },
            bYs2x = ["上午", "下午"],
            bYE2x = ["A.M.", "P.M."],
            bjS2x = ["日", "一", "二", "三", "四", "五", "六"],
            bYF2x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            bYG2x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]; var Md4h = function(ft5y) { ft5y = parseInt(ft5y) || 0; return (ft5y < 10 ? "0" : "") + ft5y }; var bYV3x = function(oG8y) { return oG8y < 12 ? 0 : 1 }; return function(bA3x, FF3x, bZa3x) { if (!bA3x || !FF3x) return "";
            bA3x = k2x.WI8A(bA3x);
            bv3x.yyyy = bA3x.getFullYear();
            bv3x.yy = ("" + bv3x.yyyy).substr(2);
            bv3x.M = bA3x.getMonth() + 1;
            bv3x.MM = Md4h(bv3x.M);
            bv3x.eM = bYG2x[bv3x.M - 1];
            bv3x.cM = bYF2x[bv3x.M - 1];
            bv3x.d = bA3x.getDate();
            bv3x.dd = Md4h(bv3x.d);
            bv3x.H = bA3x.getHours();
            bv3x.HH = Md4h(bv3x.H);
            bv3x.m = bA3x.getMinutes();
            bv3x.mm = Md4h(bv3x.m);
            bv3x.s = bA3x.getSeconds();
            bv3x.ss = Md4h(bv3x.s);
            bv3x.ms = bA3x.getMilliseconds();
            bv3x.w = bjS2x[bA3x.getDay()]; var bBD6x = bYV3x(bv3x.H);
            bv3x.ct = bYs2x[bBD6x];
            bv3x.et = bYE2x[bBD6x]; if (!!bZa3x) { bv3x.H = bv3x.H % 12 } return k2x.Ec2x(bv3x, FF3x) } }();
    k2x.WI8A = function(bA3x) { var cD4H = bA3x; if (k2x.fe5j(bA3x)) cD4H = new Date(Date.parse(bA3x)); if (!k2x.FB2x(bA3x)) cD4H = new Date(bA3x); return cD4H };
    k2x.Fv2x = function(bZz3x, bZF3x) { return (new Number(bZz3x)).toFixed(bZF3x) };
    k2x.bjC2x = function() { var fU5Z = /([^\/:])\/.*$/,
            jh6b = /\/[^\/]+$/,
            BQ1x = /[#\?]/,
            bjx2x = location.href.split(/[?#]/)[0],
            rl8d = document.createElement("a"); var bjv2x = function(lJ7C) { return (lJ7C || "").indexOf("://") > 0 }; var bEK7D = function(lJ7C) { return (lJ7C || "").split(BQ1x)[0].replace(jh6b, "/") }; var bZN3x = function(lJ7C, fw5B) { if (lJ7C.indexOf("/") == 0) return fw5B.replace(fU5Z, "$1") + lJ7C; return bEK7D(fw5B) + lJ7C };
        bjx2x = bEK7D(bjx2x); return function(lJ7C, fw5B) { lJ7C = (lJ7C || "").trim(); if (!bjv2x(fw5B)) fw5B = bjx2x; if (!lJ7C) return fw5B; if (bjv2x(lJ7C)) return lJ7C;
            lJ7C = bZN3x(lJ7C, fw5B);
            rl8d.href = lJ7C;
            lJ7C = rl8d.href; return bjv2x(lJ7C) ? lJ7C : rl8d.getAttribute("href", 4) } }();
    k2x.caL3x = function() { var cM4Q = /^([\w]+?:\/\/.*?(?=\/|$))/i; return function(V3x) { if (cM4Q.test(V3x || "")) return RegExp.$1.toLowerCase(); return "" } }();
    k2x.bFO7H = function(G2x, ia5f) { if (!G2x) return ia5f; var T3x = G2x.tagName.toLowerCase(),
            i2x = a1x.cQ4U(G2x); if (!i2x || !i2x.length) { ia5f[T3x] = G2x.textContent || G2x.text || ""; return ia5f } var dQ4U = {};
        ia5f[T3x] = dQ4U;
        k2x.be3x(i2x, function(f2x) { k2x.bFO7H(f2x, dQ4U) }); return ia5f };
    k2x.cwf8X = function(zZ1x) { try { return k2x.bFO7H(a1x.bIr8j(zZ1x), {}) } catch (ex) { return null } };
    k2x.bFS7L = function(hy5D, Mm4q) { var ia5f = {};
        k2x.be3x((hy5D || "").split(Mm4q), function(T3x) { var Wz8r = T3x.split("="); if (!Wz8r || !Wz8r.length) return; var J3x = Wz8r.shift(); if (!J3x) return;
            ia5f[decodeURIComponent(J3x)] = decodeURIComponent(Wz8r.join("=")) }); return ia5f };
    k2x.uG9x = function(gc5h, Mm4q, cbA3x) { if (!gc5h) return ""; var bs3x = []; for (var x in gc5h) { bs3x.push(encodeURIComponent(x) + "=" + (!!cbA3x ? encodeURIComponent(gc5h[x]) : gc5h[x])) } return bs3x.join(Mm4q || ",") };
    k2x.ho5t = function(bD3x) { return k2x.bFS7L(bD3x, "&") };
    k2x.df4j = function(gc5h) { return k2x.uG9x(gc5h, "&", !0) };
    k2x.cvZ8R = function(gc5h) { return ba3x.EQ2x(gc5h) };
    k2x.cvY8Q = function(i2x, dE4I) { var m2x = {};
        k2x.be3x(i2x, function(r2x) { var J3x = r2x; if (!!dE4I) { J3x = dE4I(r2x) } m2x[J3x] = r2x }); return m2x };
    k2x.cvX8P = function(ft5y, fY5d) { var cbH3x = ("" + ft5y).length,
            cbK3x = Math.max(1, parseInt(fY5d) || 0),
            dh4l = cbK3x - cbH3x; if (dh4l > 0) { ft5y = (new Array(dh4l + 1)).join("0") + ft5y } return "" + ft5y };
    k2x.Wp8h = function(gc5h, T3x) { if (!k2x.en4r(T3x)) { try { delete gc5h[T3x] } catch (e) { gc5h[T3x] = undefined } return this } k2x.be3x(T3x, k2x.Wp8h.g2x(k2x, gc5h)); return this };
    k2x.XH8z = function() { var bLB9s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; return function(bq3x) { bq3x = bq3x || 10; var m2x = []; for (var i = 0, bLE9v; i < bq3x; ++i) { bLE9v = Math.floor(Math.random() * bLB9s.length);
                m2x.push(bLB9s.charAt(bLE9v)) } return m2x.join("") } }();
    k2x.Mz4D = function(fL5Q, fc5h) { return Math.floor(Math.random() * (fc5h - fL5Q) + fL5Q) };
    k2x.mT7M = function(bq3x) { bq3x = Math.max(0, Math.min(bq3x || 8, 30)); var fL5Q = Math.pow(10, bq3x - 1),
            fc5h = fL5Q * 10; return k2x.Mz4D(fL5Q, fc5h).toString() };
    k2x.Wi8a = function() { var fW5b = +(new Date); return function() { return "" + fW5b++ } }() })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        eU5Z = NEJ.R,
        bm3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        N3x = c2x("nej.ut"),
        nF7y; if (!!N3x.cy3x) return;
    N3x.cy3x = NEJ.C();
    nF7y = N3x.cy3x.prototype;
    N3x.cy3x.B2x = function(e2x) { e2x = e2x || {}; var co3x = !!this.yz1x && this.yz1x.shift(); if (!co3x) { co3x = new this(e2x);
            this.cch3x = (this.cch3x || 0) + 1 } co3x.bk3x(e2x); return co3x };
    N3x.cy3x.S3x = function() { var MK4O = function(r2x, s2x, i2x) { r2x.S3x();
            i2x.splice(s2x, 1) }; return function(co3x) { if (!co3x) return null; if (!k2x.en4r(co3x)) { if (!(co3x instanceof this)) { var fi5n = co3x.constructor; if (!!fi5n.S3x) fi5n.S3x(co3x); return null } if (co3x == this.eK5P) delete this.eK5P; if (co3x == this.yv1x) delete this.yv1x;
                co3x.bC3x(); if (!this.yz1x) this.yz1x = []; if (k2x.cV4Z(this.yz1x, co3x) < 0) { this.yz1x.push(co3x) } return null } k2x.me7X(co3x, MK4O, this) } }();
    N3x.cy3x.fX5c = function(e2x) { e2x = e2x || {}; if (!this.eK5P) this.eK5P = this.B2x(e2x); return this.eK5P };
    N3x.cy3x.ccH3x = function(e2x, qN8F) { e2x = e2x || {}; if (!!qN8F && !!this.yv1x) { this.yv1x.S3x();
            delete this.yv1x } if (!this.yv1x) { this.yv1x = this.B2x(e2x) } else { this.yv1x.bk3x(e2x) } return this.yv1x };
    nF7y.cl3x = function() { var fW5b = +(new Date); return function() { this.id = fW5b++;
            this.lk7d = {};
            this.btx4B = {} } }();
    nF7y.bk3x = function(e2x) { this.biI2x(e2x) };
    nF7y.bC3x = function() { this.iw6q();
        this.FO3x() };
    nF7y.bU3x = function() { var fW5b = +(new Date); var ccN3x = function(bg3x) { if (!bg3x || bg3x.length < 3) return;
            this.btx4B["de-" + fW5b++] = bg3x;
            h2x.q2x.apply(h2x, bg3x) }; return function(i2x) { k2x.be3x(i2x, ccN3x, this) } }();
    nF7y.FO3x = function() { var ccO3x = function(bg3x, J3x, bv3x) { delete bv3x[J3x];
            h2x.mg7Z.apply(h2x, bg3x) }; return function() { k2x.ee4i(this.btx4B, ccO3x) } }();
    nF7y.cvP8H = function(dE4I) { dE4I = dE4I || bm3x;
        k2x.ee4i(this, function(Co2x, J3x, bv3x) { if (!!Co2x && !!Co2x.S3x && !dE4I(Co2x)) { delete bv3x[J3x];
                Co2x.S3x() } }) };
    nF7y.S3x = function() { this.constructor.S3x(this) };
    nF7y.bvv5A = function(t2x) { var d2x = this.lk7d[t2x.toLowerCase()]; return !!d2x && d2x !== bm3x };
    nF7y.q2x = function(t2x, d2x) { this.uY0x.apply(this, arguments); return this };
    nF7y.mg7Z = function(t2x, d2x) { var t2x = (t2x || "").toLowerCase(),
            dH4L = this.lk7d[t2x]; if (!k2x.en4r(dH4L)) { if (dH4L == d2x) delete this.lk7d[t2x]; return } k2x.me7X(dH4L, function(eH5M, s2x, i2x) { if (eH5M == d2x) i2x.splice(s2x, 1) }) };
    nF7y.uY0x = function(t2x, d2x) { if (!!t2x && k2x.gb5g(d2x)) this.lk7d[t2x.toLowerCase()] = d2x; return this };
    nF7y.biI2x = function() { var cdk3x = function(d2x, t2x) { this.uY0x(t2x, d2x) }; return function(dH4L) { k2x.ee4i(dH4L, cdk3x, this); return this } }();
    nF7y.iw6q = function() { var bio2x = function(d2x, t2x) { this.iw6q(t2x) }; return function(t2x) { var t2x = (t2x || "").toLowerCase(); if (!!t2x) { delete this.lk7d[t2x] } else { k2x.ee4i(this.lk7d, bio2x, this) } return this } }();
    nF7y.big2x = function(t2x, d2x) { if (!t2x || !k2x.gb5g(d2x)) return this;
        t2x = t2x.toLowerCase(); var dH4L = this.lk7d[t2x]; if (!dH4L) { this.lk7d[t2x] = d2x; return this } if (!k2x.en4r(dH4L)) { this.lk7d[t2x] = [dH4L] } this.lk7d[t2x].push(d2x); return this };
    nF7y.z2x = function(t2x) { var d2x = this.lk7d[(t2x || "").toLowerCase()]; if (!d2x) return this; var bg3x = eU5Z.slice.call(arguments, 1); if (!k2x.en4r(d2x)) return d2x.apply(this, bg3x);
        k2x.be3x(d2x, function(dd4h) { try { dd4h.apply(this, bg3x) } catch (ex) { console.error(ex.message);
                console.error(ex.stack) } }, this); return this };
    N3x.VR8J = function() { var R3x = {}; return function(C2x, fi5n, e2x) { var eJ5O = fi5n.cdn3x; if (!eJ5O) { eJ5O = k2x.XH8z(10);
                fi5n.cdn3x = eJ5O } var J3x = C2x + "-" + eJ5O,
                co3x = R3x[J3x]; if (!!e2x && !co3x) { co3x = fi5n.B2x(e2x);
                co3x.S3x = co3x.S3x.ec4g(function(d2x) { delete R3x[J3x];
                    delete co3x.S3x });
                R3x[J3x] = co3x } return co3x } }() })();
(function() { var o = NEJ.O,
        u = NEJ.P("nej.u"),
        j = NEJ.P("nej.j");
    j.gF5K = function() { var cD4H = new Date,
            cdo3x = +cD4H,
            bhS2x = 864e5; var cdp3x = function(T3x) { var ql8d = document.cookie,
                rn8f = "\\b" + T3x + "=",
                VL8D = ql8d.search(rn8f); if (VL8D < 0) return "";
            VL8D += rn8f.length - 2; var yf0x = ql8d.indexOf(";", VL8D); if (yf0x < 0) yf0x = ql8d.length; return ql8d.substring(VL8D, yf0x) || "" }; return function(T3x, j2x) { if (j2x === undefined) return cdp3x(T3x); if (u.fe5j(j2x)) { if (!!j2x) { document.cookie = T3x + "=" + j2x + ";"; return j2x } j2x = { expires: -100 } } j2x = j2x || o; var ql8d = T3x + "=" + (j2x.value || "") + ";";
            delete j2x.value; if (j2x.expires !== undefined) { cD4H.setTime(cdo3x + j2x.expires * bhS2x);
                j2x.expires = cD4H.toGMTString() } ql8d += u.uG9x(j2x, ";");
            document.cookie = ql8d } }() })();
(function() { var c2x = NEJ.P,
        bm3x = NEJ.F,
        iA6u = c2x("nej.c"),
        dO4S = c2x("nej.g"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        N3x = c2x("nej.ut.j"),
        k2x = c2x("nej.u"),
        b2x; if (!!N3x.FT3x) return;
    N3x.FT3x = NEJ.C();
    b2x = N3x.FT3x.O3x(H2x.cy3x);
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.oy8q = { noescape: false, url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4 };
        NEJ.EX(this.oy8q, e2x); var Au1x = iA6u.x2x("csrf"); if ((/^\/[^\/]/.test(this.oy8q.url) || this.oy8q.url.indexOf(location.protocol + "//" + location.host) == 0) && !!Au1x.cookie && !!Au1x.param) { var bD3x = encodeURIComponent(Au1x.param) + "=" + encodeURIComponent(v2x.gF5K(Au1x.cookie) || ""),
                Mm4q = this.oy8q.url.indexOf("?") < 0 ? "?" : "&";
            this.oy8q.url += Mm4q + bD3x } this.VG8y = e2x.headers || {}; var bi3x = this.VG8y[dO4S.xd0x]; if (bi3x == null) this.VG8y[dO4S.xd0x] = dO4S.bPx0x };
    b2x.bC3x = function() { this.bH3x();
        delete this.yd0x;
        delete this.oy8q;
        delete this.VG8y };
    b2x.cdq3x = function(bi3x) { var bv3x = { r: /\<|\>/g, "<": "&lt;", ">": "&gt;" }; if (!this.oy8q.noescape) { return k2x.Ec2x(bv3x, bi3x) } else { return bi3x } };
    b2x.tQ9H = function(d2x) { var dY4c = d2x.status; if (dY4c == -1) { this.z2x("onerror", { code: dO4S.byK6E, message: "请求[" + this.oy8q.url + "]超时！" }); return } if (("" + dY4c).indexOf("2") != 0) { this.z2x("onerror", { data: dY4c, code: dO4S.bpD3x, message: "服务器返回异常状态[" + dY4c + "]!", extData: d2x.result }); return } this.z2x("onload", a1x.bVG2x(this.cdq3x(d2x.result), this.oy8q.type)) };
    b2x.ck3x = bm3x;
    b2x.bhD1x = function(j2x) { var V3x = this.oy8q.url; if (!V3x) { this.z2x("onerror", { code: dO4S.bpG3x, message: "没有输入请求地址！" }); return this } try { this.oy8q.data = j2x == null ? null : j2x; var d2x = { request: this.oy8q, headers: this.VG8y }; try { this.z2x("onbeforerequest", d2x) } catch (ex) { console.error(ex.message);
                console.error(ex.stack) } this.ck3x(d2x) } catch (e) { this.z2x("onerror", { code: dO4S.bpD3x, message: "请求[" + V3x + "]失败:" + e.message + "！" }) } return this };
    b2x.jo6i = bm3x })();
(function() { var c2x = NEJ.P,
        bm3x = NEJ.F,
        ba3x = c2x("nej.h"),
        dO4S = c2x("nej.g"),
        k2x = c2x("nej.u"),
        N3x = c2x("nej.ut.j"),
        R3x = {},
        No5t; if (!!N3x.VB8t) return;
    N3x.VB8t = NEJ.C();
    No5t = N3x.VB8t.O3x(N3x.FT3x);
    No5t.bC3x = function() { this.bH3x();
        window.clearTimeout(this.dN4R);
        delete this.dN4R; try { this.pX8P.onreadystatechange = bm3x;
            this.pX8P.abort() } catch (e) {} delete this.pX8P };
    No5t.ck3x = function() { var cdr3x = function(A2x, J3x) { this.pX8P.setRequestHeader(J3x, A2x) }; return function(e2x) { var fA5F = e2x.request,
                nL7E = e2x.headers;
            this.pX8P = ba3x.bhi1x(); if (nL7E[dO4S.xd0x] === dO4S.CV2x) { delete nL7E[dO4S.xd0x];
                this.pX8P.upload.onprogress = this.hj5o.g2x(this, 1); if (fA5F.data.tagName === "FORM") fA5F.data = new FormData(fA5F.data) } this.pX8P.onreadystatechange = this.hj5o.g2x(this, 2); if (fA5F.timeout != 0) { this.dN4R = window.setTimeout(this.hj5o.g2x(this, 3), fA5F.timeout) } this.pX8P.open(fA5F.method, fA5F.url, !fA5F.sync);
            k2x.ee4i(nL7E, cdr3x, this); if (!!this.oy8q.cookie && "withCredentials" in this.pX8P) this.pX8P.withCredentials = !0;
            this.pX8P.send(fA5F.data) } }();
    No5t.hj5o = function(t2x) { switch (t2x) {
            case 1:
                this.z2x("onuploading", arguments[1]); break;
            case 2:
                if (this.pX8P.readyState == 4) this.tQ9H({ status: this.pX8P.status, result: this.pX8P.responseText || "" }); break;
            case 3:
                this.tQ9H({ status: -1 }); break } };
    No5t.jo6i = function() { this.tQ9H({ status: 0 }); return this } })();
(function() { if (typeof TrimPath === "undefined") { TrimPath = {}; if (typeof exports !== "undefined") TrimPath = exports } var NO5T = {},
        Vp8h = [],
        bGb7U = /\s+/g,
        fW5b = +(new Date),
        FY3x, bM3x, ll7e; var Cr2x = function() { var fU5Z = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            jh6b = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            BQ1x = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            bhb1x = /^new\s+/,
            cdS4W = /['"]/; var ceK4O = function(A2x) { if (fU5Z.test(A2x)) return;
            A2x = A2x.split(".")[0].trim(); if (!A2x || cdS4W.test(A2x)) return;
            A2x = A2x.replace(bhb1x, ""); try { if (BQ1x.test(A2x)) return;
                ll7e[A2x] = 1 } catch (e) {} }; return function(bi3x) { bi3x = bi3x || ""; if (!bi3x || fU5Z.test(bi3x)) return; var bs3x = bi3x.split(jh6b); for (var i = 0, l = bs3x.length; i < l; i++) ceK4O(bs3x[i]) } }(); var cfk4o = function(dm4q) { if (dm4q[2] != "in") throw "bad for loop statement: " + dm4q.join(" ");
        Vp8h.push(dm4q[1]);
        Cr2x(dm4q[3]); return "var __HASH__" + dm4q[1] + " = " + dm4q[3] + "," + dm4q[1] + "," + dm4q[1] + "_count=0;" + "if (!!__HASH__" + dm4q[1] + ")" + "for(var " + dm4q[1] + "_key in __HASH__" + dm4q[1] + "){" + dm4q[1] + " = __HASH__" + dm4q[1] + "[" + dm4q[1] + "_key];" + "if (typeof(" + dm4q[1] + ')=="function") continue;' + dm4q[1] + "_count++;" }; var cfn4r = function() { var dm4q = Vp8h[Vp8h.length - 1]; return "}; if(!__HASH__" + dm4q + "||!" + dm4q + "_count){" }; var cgq4u = function() { Vp8h.pop(); return "};" }; var cgs4w = function(dm4q) { if (dm4q[2] != "as") throw "bad for list loop statement: " + dm4q.join(" "); var Oe6Y = dm4q[1].split(".."); if (Oe6Y.length > 1) { Cr2x(Oe6Y[0]);
            Cr2x(Oe6Y[1]); return "for(var " + dm4q[3] + "," + dm4q[3] + "_index=0," + dm4q[3] + "_beg=" + Oe6Y[0] + "," + dm4q[3] + "_end=" + Oe6Y[1] + "," + dm4q[3] + "_length=parseInt(" + dm4q[3] + "_end-" + dm4q[3] + "_beg+1);" + dm4q[3] + "_index<" + dm4q[3] + "_length;" + dm4q[3] + "_index++){" + dm4q[3] + " = " + dm4q[3] + "_beg+" + dm4q[3] + "_index;" } else { Cr2x(dm4q[1]); return "for(var __LIST__" + dm4q[3] + " = " + dm4q[1] + "," + dm4q[3] + "," + dm4q[3] + "_index=0," + dm4q[3] + "_length=__LIST__" + dm4q[3] + ".length;" + dm4q[3] + "_index<" + dm4q[3] + "_length;" + dm4q[3] + "_index++){" + dm4q[3] + " = __LIST__" + dm4q[3] + "[" + dm4q[3] + "_index];" } }; var cgt4x = function(dm4q) { if (!dm4q || !dm4q.length) return;
        dm4q.shift(); var T3x = dm4q[0].split("(")[0]; return "var " + T3x + " = function" + dm4q.join("").replace(T3x, "") + "{var __OUT=[];" }; var cgu4y = function(dm4q) { if (!dm4q[1]) throw "bad include statement: " + dm4q.join(" "); return 'if (typeof inline == "function"){__OUT.push(inline(' }; var bgS1x = function(kV7O, dm4q) { Cr2x(dm4q.slice(1).join(" ")); return kV7O }; var cgw4A = function(dm4q) { return bgS1x("if(", dm4q) }; var cgx4B = function(dm4q) { return bgS1x("}else if(", dm4q) }; var cgy4C = function(dm4q) { return bgS1x("var ", dm4q) };
    bM3x = { blk: /^\{(cdata|minify|eval)/i, tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include", def: { "if": { pfix: cgw4A, sfix: "){", pmin: 1 }, "else": { pfix: "}else{" }, elseif: { pfix: cgx4B, sfix: "){", pdft: "true" }, "/if": { pfix: "}" }, "for": { pfix: cfk4o, pmin: 3 }, forelse: { pfix: cfn4r }, "/for": { pfix: cgq4u }, list: { pfix: cgs4w, pmin: 3 }, "/list": { pfix: "};" }, "break": { pfix: "break;" }, "var": { pfix: cgy4C, sfix: ";" }, macro: { pfix: cgt4x }, "/macro": { pfix: 'return __OUT.join("");};' }, trim: { pfix: function() { FY3x = !0 } }, "/trim": { pfix: function() { FY3x = null } }, inline: { pfix: cgu4y, pmin: 1, sfix: "));}" } }, ext: { seed: function(kV7O) { return (kV7O || "") + "" + fW5b }, "default": function(A2x, kr6l) { return A2x || kr6l } } }; var cgB4F = function() { var cgD4H = /\\([\{\}])/g; return function(bi3x, iH6B) { bi3x = bi3x.replace(cgD4H, "$1"); var dm4q = bi3x.slice(1, -1).split(bGb7U),
                bc3x = bM3x.def[dm4q[0]]; if (!bc3x) { Vc8U(bi3x, iH6B); return } if (!!bc3x.pmin && bc3x.pmin >= dm4q.length) throw "Statement needs more parameters:" + bi3x;
            iH6B.push(!!bc3x.pfix && typeof bc3x.pfix != "string" ? bc3x.pfix(dm4q) : bc3x.pfix || ""); if (!!bc3x.sfix) { if (dm4q.length <= 1) { if (!!bc3x.pdft) iH6B.push(bc3x.pdft) } else { for (var i = 1, l = dm4q.length; i < l; i++) { if (i > 1) iH6B.push(" ");
                        iH6B.push(dm4q[i]) } } iH6B.push(bc3x.sfix) } } }(); var bMN9E = function(Ga3x, iH6B) { if (!Ga3x || !Ga3x.length) return; if (Ga3x.length == 1) { var bgH1x = Ga3x.pop();
            Cr2x(bgH1x);
            iH6B.push(bgH1x == "" ? '""' : bgH1x); return } var bgC1x = Ga3x.pop().split(":");
        iH6B.push("__MDF['" + bgC1x.shift() + "'](");
        bMN9E(Ga3x, iH6B); if (bgC1x.length > 0) { var bg3x = bgC1x.join(":");
            Cr2x(bg3x);
            iH6B.push("," + bg3x) } iH6B.push(")") }; var Vc8U = function(bi3x, iH6B) { if (!bi3x) return; var vv0x = bi3x.split("\n"); if (!vv0x || !vv0x.length) return; for (var i = 0, l = vv0x.length, gV5a; i < l; i++) { gV5a = vv0x[i]; if (!!FY3x) { gV5a = gV5a.trim(); if (!gV5a) continue } cgE4I(gV5a, iH6B); if (!!FY3x && i < l - 1) iH6B.push("__OUT.push('\\n');") } }; var cgE4I = function() { var cgF4J = /\|\|/g,
            cgG4K = /#@@#/g; return function(bi3x, iH6B) { var Os6m = "}",
                Ou6o = -1,
                bq3x = bi3x.length,
                uv9m, gC5H, Gh3x, UH8z, OB6v; while (Ou6o + Os6m.length < bq3x) { uv9m = "${";
                gC5H = "}";
                Gh3x = bi3x.indexOf(uv9m, Ou6o + Os6m.length); if (Gh3x < 0) break; if (bi3x.charAt(Gh3x + 2) == "%") { uv9m = "${%";
                    gC5H = "%}" } UH8z = bi3x.indexOf(gC5H, Gh3x + uv9m.length); if (UH8z < 0) break;
                UE8w(bi3x.substring(Ou6o + Os6m.length, Gh3x), iH6B);
                OB6v = bi3x.substring(Gh3x + uv9m.length, UH8z).replace(cgF4J, "#@@#").split("|"); for (var i = 0, l = OB6v.length; i < l; OB6v[i] = OB6v[i].replace(cgG4K, "||"), i++);
                iH6B.push("__OUT.push(");
                bMN9E(OB6v, iH6B);
                iH6B.push(");");
                Os6m = gC5H;
                Ou6o = UH8z } UE8w(bi3x.substring(Ou6o + Os6m.length), iH6B) } }(); var UE8w = function() { var bv3x = { r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'" }; var cgH4L = function(bi3x) { return (bi3x || "").replace(bv3x.r, function($1) { return bv3x[$1] || $1 }) }; return function(bi3x, iH6B) { if (!bi3x) return;
            iH6B.push("__OUT.push('" + cgH4L(bi3x) + "');") } }(); var cgW4a = function() { var chh4l = /\t/g,
            chj4n = /\n/g,
            chm4q = /\r\n?/g; var bvb5g = function(bi3x, uv9m) { var s2x = bi3x.indexOf("}", uv9m + 1); while (bi3x.charAt(s2x - 1) == "\\") { s2x = bi3x.indexOf("}", s2x + 1) } return s2x }; var cho4s = function() { var bs3x = [],
                Bn1x = arguments[0]; for (var x in Bn1x) { x = (x || "").trim(); if (!x) continue;
                bs3x.push(x + "=$v('" + x + "')") } return bs3x.length > 0 ? "var " + bs3x.join(",") + ";" : "" }; return function(bi3x) { ll7e = {};
            bi3x = bi3x.replace(chm4q, "\n").replace(chh4l, "    "); var pY8Q = ["if(!__CTX) return '';", ""];
            pY8Q.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            pY8Q.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            pY8Q.push("__OUT=[];"); var Bw1x = -1,
                bq3x = bi3x.length; var mu7n, Gi3x, OC6w, OG6A, xW0x, OQ6K, bfP1x, OR6L; while (Bw1x + 1 < bq3x) { mu7n = Bw1x;
                mu7n = bi3x.indexOf("{", mu7n + 1); while (mu7n >= 0) { Gi3x = bvb5g(bi3x, mu7n);
                    OC6w = bi3x.substring(mu7n, Gi3x);
                    OG6A = OC6w.match(bM3x.blk); if (!!OG6A) { xW0x = OG6A[1].length + 1;
                        OQ6K = bi3x.indexOf("}", mu7n + xW0x); if (OQ6K >= 0) { bfP1x = OQ6K - mu7n - xW0x <= 0 ? "{/" + OG6A[1] + "}" : OC6w.substr(xW0x + 1);
                            xW0x = bi3x.indexOf(bfP1x, OQ6K + 1); if (xW0x >= 0) { Vc8U(bi3x.substring(Bw1x + 1, mu7n), pY8Q);
                                OR6L = bi3x.substring(OQ6K + 1, xW0x); switch (OG6A[1]) {
                                    case "cdata":
                                        UE8w(OR6L, pY8Q); break;
                                    case "minify":
                                        UE8w(OR6L.replace(chj4n, " ").replace(bGb7U, " "), pY8Q); break;
                                    case "eval":
                                        if (!!OR6L) pY8Q.push("__OUT.push((function(){" + OR6L + "})());"); break } mu7n = Bw1x = xW0x + bfP1x.length - 1 } } } else if (bi3x.charAt(mu7n - 1) != "$" && bi3x.charAt(mu7n - 1) != "\\" && OC6w.substr(OC6w.charAt(1) == "/" ? 2 : 1).search(bM3x.tag) == 0) { break } mu7n = bi3x.indexOf("{", mu7n + 1) } if (mu7n < 0) break;
                Gi3x = bvb5g(bi3x, mu7n); if (Gi3x < 0) break;
                Vc8U(bi3x.substring(Bw1x + 1, mu7n), pY8Q);
                cgB4F(bi3x.substring(mu7n, Gi3x + 1), pY8Q);
                Bw1x = Gi3x } Vc8U(bi3x.substring(Bw1x + 1), pY8Q);
            pY8Q.push(';return __OUT.join("");');
            pY8Q[1] = cho4s(ll7e);
            ll7e = null; return new Function("__CTX", "__MDF", pY8Q.join("")) } }();
    TrimPath.seed = function() { return fW5b };
    TrimPath.merge = function() { var OS6M = {};
        TrimPath.dump = function() { return { func: OS6M, text: NO5T } }; return function(eJ5O, j2x, iT6N) { try { j2x = j2x || {}; if (!OS6M[eJ5O] && !NO5T[eJ5O]) return ""; if (!OS6M[eJ5O]) { OS6M[eJ5O] = cgW4a(NO5T[eJ5O]);
                    delete NO5T[eJ5O] } if (!!iT6N) { for (var x in bM3x.ext)
                        if (!iT6N[x]) iT6N[x] = bM3x.ext[x] } return OS6M[eJ5O](j2x, iT6N || bM3x.ext) } catch (ex) { return ex.message || "" } } }();
    TrimPath.parse = function() { var chs4w = +(new Date); return function(bi3x, eJ5O) { if (!bi3x) return "";
            eJ5O = eJ5O || "ck_" + chs4w++;
            NO5T[eJ5O] = bi3x; return eJ5O } }() })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        eA4E = {};
    a1x.Gl3x = TrimPath.seed;
    a1x.bP3x = function() { var byL6F = function(C2x) { return !a1x.ik6e ? "" : a1x.ik6e(C2x) }; return function(eJ5O, j2x, iT6N) { j2x = j2x || {};
            j2x.inline = byL6F;
            iT6N = NEJ.X(NEJ.X({}, eA4E), iT6N);
            iT6N.rand = k2x.mT7M;
            iT6N.format = k2x.iV6P;
            iT6N.escape = k2x.dL4P;
            iT6N.inline = byL6F; return TrimPath.merge(eJ5O, j2x, iT6N) } }();
    a1x.er4v = function(bi3x, cia5f) { if (!bi3x) return ""; var eJ5O, E2x = a1x.x2x(bi3x); if (!!E2x) { eJ5O = E2x.id;
            bi3x = E2x.value || E2x.innerText; if (!cia5f) a1x.cH4L(E2x) } return TrimPath.parse(bi3x, eJ5O) };
    a1x.dS4W = function(bB3x, eJ5O, j2x, iT6N) { bB3x = a1x.x2x(bB3x); if (!!bB3x) bB3x.innerHTML = a1x.bP3x(eJ5O, j2x, iT6N); return this };
    a1x.cvd8V = function(bv3x) { NEJ.X(eA4E, bv3x) };
    c2x("dbg").dumpJST = function() { return TrimPath.dump() } })();
(function() { var cP4T = NEJ.P("nej.p"),
        N3x = window,
        kj6d = cP4T.ZM9D,
        bzT6N = kj6d.ipad || kj6d.iphone; if (!bzT6N && !!N3x.requestAnimationFrame && !!N3x.cancelRequestAnimationFrame) return; var kV7O = cP4T.cR4V.prefix.pro; if (!bzT6N && !!N3x[kV7O + "RequestAnimationFrame"] && !!N3x[kV7O + "CancelRequestAnimationFrame"]) { N3x.requestAnimationFrame = N3x[kV7O + "RequestAnimationFrame"];
        N3x.cancelRequestAnimationFrame = N3x[kV7O + "CancelRequestAnimationFrame"]; return } var Ut8l = kj6d.desktop ? 80 : kj6d.ios ? 50 : 30;
    N3x.requestAnimationFrame = function(dq4u) { return window.setTimeout(function() { try { dq4u(+(new Date)) } catch (ex) {} }, 1e3 / Ut8l) };
    N3x.cancelRequestAnimationFrame = function(C2x) { window.clearTimeout(C2x); return this } })();
(function() { var c2x = NEJ.P,
        bm3x = NEJ.F,
        k2x = c2x("nej.u"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        ba3x = c2x("nej.h"),
        cO4S = c2x("nej.x"),
        Us8k = c2x("nej.ut.j.cb"),
        gh5m; if (!!a1x.pU8M) return;
    a1x.pU8M = cO4S.pU8M = function() { var R3x = {},
            fU5Z = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d2x) { var C2x = decodeURIComponent(d2x.target),
                t2x = d2x.type.toLowerCase(); var dd4h = R3x[C2x + "-on" + t2x]; if (!!dd4h) { try { dd4h(d2x) } catch (e) {} return } var cJ4N = R3x[C2x + "-tgt"]; if (!!cJ4N && fU5Z.test(t2x)) { bAN6H(cJ4N, d2x) } }; var bfw1x = function(e2x) { var bB3x = a1x.x2x(e2x.parent) || document.body,
                dr4v = a1x.bP3x(gh5m, e2x);
            bB3x.insertAdjacentHTML(!e2x.hidden ? "beforeEnd" : "afterBegin", dr4v) }; var bAN6H = function(C2x, d2x) { var t2x = d2x.type.toLowerCase();
            requestAnimationFrame(function() { h2x.z2x(C2x, t2x) }) }; var civ5A = function(hb5g) { return !!hb5g && !!hb5g.inited && !!hb5g.inited() }; var Pg6a = function(C2x) { var bs3x = [document.embeds[C2x], a1x.x2x(C2x), document[C2x], window[C2x]],
                s2x = k2x.ee4i(bs3x, civ5A),
                hb5g = bs3x[s2x],
                bfp1x = C2x + "-count";
            R3x[bfp1x]++; if (!!hb5g || R3x[bfp1x] > 100) { R3x[C2x](hb5g);
                delete R3x[C2x];
                delete R3x[bfp1x]; return } window.setTimeout(Pg6a.g2x(null, C2x), 300) }; var cjn5s = function(e2x) { var C2x = e2x.id,
                fP5U = e2x.params; if (!fP5U) { fP5U = {};
                e2x.params = fP5U } var ll7e = fP5U.flashvars || "";
            ll7e += (!ll7e ? "" : "&") + ("id=" + C2x); if (!e2x.hidden && (!!e2x.target || ba3x.YS9J(fP5U.wmode))) { var hf5k = a1x.kD6x(e2x.target) || a1x.kD6x(e2x.parent),
                    Ue7X = k2x.Wi8a();
                Us8k["cb" + Ue7X] = bAN6H.g2x(null, hf5k);
                ll7e += "&onevent=nej.ut.j.cb.cb" + Ue7X;
                R3x[C2x + "-tgt"] = hf5k } fP5U.flashvars = ll7e;
            k2x.ee4i(e2x, function(A2x, J3x) { if (k2x.gb5g(A2x) && J3x != "onready") { R3x[C2x + "-" + J3x] = A2x } }) }; return function(e2x) { e2x = NEJ.X({}, e2x); if (!e2x.src) return; var C2x = "flash_" + k2x.Wi8a();
            e2x.id = C2x;
            cjn5s(e2x);
            bfw1x(e2x); if (!e2x.onready) return;
            R3x[C2x] = e2x.onready;
            R3x[C2x + "-count"] = 0;
            Pg6a(C2x) } }();
    gh5m = a1x.er4v('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cO4S.isChange = !0 })();
(function() { var c2x = NEJ.P,
        iA6u = c2x("nej.c"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        N3x = c2x("nej.ut.j"),
        Us8k = c2x("nej.ut.j.cb"),
        R3x = {},
        fW5b = +(new Date),
        bfi1x; if (!!N3x.bfh1x) return;
    Us8k["ld" + fW5b] = function(J3x, cZ4d) { var jd6X = R3x[J3x]; if (!jd6X) return;
        delete R3x[J3x];
        jd6X.tQ9H({ status: 200, result: cZ4d }) };
    Us8k["er" + fW5b] = function(J3x, dY4c) { var jd6X = R3x[J3x]; if (!jd6X) return;
        delete R3x[J3x];
        jd6X.tQ9H({ status: dY4c || 0 }) };
    N3x.bfh1x = NEJ.C();
    bfi1x = N3x.bfh1x.O3x(N3x.FT3x);
    bfi1x.ck3x = function(e2x) { var hb5g = R3x.flash; if (k2x.en4r(hb5g)) { hb5g.push(this.ck3x.g2x(this, e2x)); return } if (!hb5g) { R3x.flash = [this.ck3x.g2x(this, e2x)];
            a1x.pU8M({ hidden: !0, src: iA6u.x2x("ajax.swf"), onready: function(hb5g) { if (!hb5g) return; var i2x = R3x.flash;
                    R3x.flash = hb5g;
                    k2x.me7X(i2x, function(dd4h) { try { dd4h() } catch (e) {} }) } }); return } this.yd0x = "swf-" + k2x.mT7M();
        R3x[this.yd0x] = this; var j2x = NEJ.EX({ url: "", data: null, method: "GET" }, e2x.request);
        j2x.key = this.yd0x;
        j2x.headers = e2x.headers;
        j2x.onerror = "nej.ut.j.cb.er" + fW5b;
        j2x.onloaded = "nej.ut.j.cb.ld" + fW5b; var bEo7h = iA6u.bOS9J(j2x.url); if (!!bEo7h) j2x.policyURL = bEo7h;
        hb5g.request(j2x) };
    bfi1x.jo6i = function() { delete R3x[this.yd0x];
        this.tQ9H({ status: 0 }); return this } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        ba3x = c2x("nej.h");
    ba3x.bEy7r = function() { var cM4Q = /^([\w]+?:\/\/.*?(?=\/|$))/i; return function(hw5B) { hw5B = hw5B || ""; if (cM4Q.test(hw5B)) return RegExp.$1; return "*" } }();
    ba3x.bfd1x = function(j2x) { return j2x };
    ba3x.bfb1x = function(bFv7o, e2x) { if (!bFv7o.postMessage) return;
        e2x = e2x || Y3x;
        bFv7o.postMessage(ba3x.bfd1x(e2x.data), ba3x.bEy7r(e2x.origin)) } })();
(function() { var c2x = NEJ.P,
        bm3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        N3x = c2x("nej.ut"),
        b2x; if (!!N3x.fr5w) return;
    N3x.fr5w = NEJ.C();
    b2x = N3x.fr5w.O3x(N3x.cy3x);
    b2x.cl3x = function() { this.P3x = {};
        this.cs3x() };
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.Pr6l = a1x.x2x(e2x.element) || window;
        this.bFV7O(e2x.event);
        this.cjY5d();
        this.z2x("oninit") };
    b2x.bC3x = function() { var Eq2x = function(A2x, J3x, bv3x) { if (!k2x.en4r(A2x)) { k2x.Wp8h(this.Pr6l, J3x) } delete bv3x[J3x] }; return function() { this.bH3x();
            k2x.ee4i(this.P3x, Eq2x, this);
            delete this.Pr6l } }();
    b2x.TY7R = function(E2x, t2x) { E2x = a1x.x2x(E2x); return E2x == this.Pr6l && (!t2x || !!this.P3x["on" + t2x]) };
    b2x.bFV7O = function(d2x) { if (k2x.fe5j(d2x)) { var T3x = "on" + d2x; if (!this.P3x[T3x]) { this.P3x[T3x] = this.ckB5G.g2x(this, d2x) } this.bHt8l(d2x); return } if (k2x.en4r(d2x)) { k2x.be3x(d2x, this.bFV7O, this) } };
    b2x.bHt8l = function(t2x) { var d2x = "on" + t2x,
            dd4h = this.Pr6l[d2x],
            bHJ8B = this.P3x[d2x]; if (dd4h != bHJ8B) { this.TV7O(t2x); if (!!dd4h && dd4h != bm3x) this.bIx8p(t2x, dd4h);
            this.Pr6l[d2x] = bHJ8B } };
    b2x.bIx8p = function(t2x, dd4h, ckP5U) { var i2x = this.P3x[t2x]; if (!i2x) { i2x = [];
            this.P3x[t2x] = i2x } if (k2x.gb5g(dd4h)) {!ckP5U ? i2x.push(dd4h) : i2x.unshift(dd4h) } };
    b2x.TV7O = function(t2x, dd4h) { var i2x = this.P3x[t2x]; if (!i2x || !i2x.length) return; if (!dd4h) { delete this.P3x[t2x]; return } k2x.me7X(i2x, function(A2x, s2x, Gu3x) { if (dd4h === A2x) { Gu3x.splice(s2x, 1); return !0 } }) };
    b2x.ckB5G = function(t2x, d2x) { d2x = d2x || { noargs: !0 };
        d2x.type = t2x;
        this.z2x("ondispatch", d2x); if (!!d2x.stopped) return;
        k2x.be3x(this.P3x[t2x], function(dd4h) { try { dd4h(d2x) } catch (ex) { console.error(ex.message);
                console.error(ex.stack) } }) };
    b2x.cjY5d = function() { var beB1x = function(d2x) { var bg3x = d2x.args,
                t2x = bg3x[1].toLowerCase(); if (this.TY7R(bg3x[0], t2x)) { d2x.stopped = !0;
                this.bHt8l(t2x);
                this.bIx8p(t2x, bg3x[2], bg3x[3]);
                this.z2x("oneventadd", { type: t2x, listener: bg3x[2] }) } }; var ckQ5V = function(d2x) { var bg3x = d2x.args,
                t2x = bg3x[1].toLowerCase(); if (this.TY7R(bg3x[0], t2x)) { d2x.stopped = !0;
                this.TV7O(t2x, bg3x[2]) } }; var bio2x = function(d2x) { var bg3x = d2x.args,
                t2x = (bg3x[1] || "").toLowerCase(); if (this.TY7R(bg3x[0])) { if (!!t2x) { this.TV7O(t2x); return } k2x.ee4i(this.P3x, function(A2x, J3x) { if (k2x.en4r(A2x)) { this.TV7O(J3x) } }, this) } }; var ckR5W = function(d2x) { var bg3x = d2x.args,
                t2x = bg3x[1].toLowerCase(); if (this.TY7R(bg3x[0], t2x)) { d2x.stopped = !0;
                bg3x[0]["on" + t2x].apply(bg3x[0], bg3x.slice(2)) } }; return function() { if (!!this.ckS5X) return;
            this.ckS5X = true;
            h2x.q2x = h2x.q2x.ec4g(beB1x.g2x(this));
            h2x.mg7Z = h2x.mg7Z.ec4g(ckQ5V.g2x(this));
            h2x.iw6q = h2x.iw6q.ec4g(bio2x.g2x(this));
            h2x.z2x = h2x.z2x.ec4g(ckR5W.g2x(this)) } }() })();
(function() { var c2x = NEJ.P,
        N3x = c2x("nej.p"),
        ba3x = c2x("nej.h"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"); if (N3x.mp7i.trident) return; if (!!window.postMessage) { ba3x.bfd1x = ba3x.bfd1x.ec4g(function(d2x) { d2x.stopped = !0;
            d2x.value = JSON.stringify(d2x.args[0]) }); return } var J3x = "MSG|",
        jt6n = []; var clb5g = function() { var T3x = unescape(window.name || "").trim(); if (!T3x || T3x.indexOf(J3x) != 0) return;
        window.name = ""; var m2x = k2x.bFS7L(T3x.replace(J3x, ""), "|"),
            hw5B = (m2x.origin || "").toLowerCase(); if (!!hw5B && hw5B != "*" && location.href.toLowerCase().indexOf(hw5B) != 0) return;
        h2x.z2x(window, "message", { data: JSON.parse(m2x.data || "null"), source: window.frames[m2x.self] || m2x.self, origin: ba3x.bEy7r(m2x.ref || document.referrer) }) }; var clc5h = function() { var TJ7C; var clM5R = function(bv3x, s2x, i2x) { if (k2x.cV4Z(TJ7C, bv3x.w) < 0) { TJ7C.push(bv3x.w);
                i2x.splice(s2x, 1);
                bv3x.w.name = bv3x.d } }; return function() { TJ7C = [];
            k2x.me7X(jt6n, clM5R);
            TJ7C = null } }();
    ba3x.bfb1x = function() { var cmd6X = function(j2x) { var m2x = {};
            j2x = j2x || Y3x;
            m2x.origin = j2x.origin || "";
            m2x.ref = location.href;
            m2x.self = j2x.source;
            m2x.data = JSON.stringify(j2x.data); return J3x + k2x.uG9x(m2x, "|", !0) }; return ba3x.bfb1x.ec4g(function(d2x) { d2x.stopped = !0; var bg3x = d2x.args;
            jt6n.unshift({ w: bg3x[0], d: escape(cmd6X(bg3x[1])) }) }) }();
    H2x.fr5w.B2x({ element: window, event: "message" });
    window.setInterval(clc5h, 100);
    window.setInterval(clb5g, 20) })();
(function() { var c2x = NEJ.P,
        ba3x = c2x("nej.h"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j");
    v2x.cme6Y = function() { var im6g = window.name || "_parent",
            cmj6d = { gl5q: window.top, im6g: window, bB3x: window.parent }; return function(cJ4N, e2x) { if (typeof cJ4N == "string") { cJ4N = cmj6d[cJ4N] || window.frames[cJ4N]; if (!cJ4N) return this } var j2x = NEJ.X({ origin: "*", source: im6g }, e2x);
            ba3x.bfb1x(cJ4N, j2x); return this } }() })();
(function() { var c2x = NEJ.P,
        iA6u = c2x("nej.c"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        N3x = c2x("nej.ut.j"),
        R3x = {},
        TB7u; if (!!N3x.bdX1x) return;
    N3x.bdX1x = NEJ.C();
    TB7u = N3x.bdX1x.O3x(N3x.FT3x);
    TB7u.cl3x = function() { var eB4F = "NEJ-AJAX-DATA:",
            CK2x = !1; var bdT1x = function(d2x) { var j2x = d2x.data; if (j2x.indexOf(eB4F) != 0) return;
            j2x = JSON.parse(j2x.replace(eB4F, "")); var jd6X = R3x[j2x.key]; if (!jd6X) return;
            delete R3x[j2x.key];
            j2x.result = decodeURIComponent(j2x.result || "");
            jd6X.tQ9H(j2x) }; var bdP1x = function() { if (!CK2x) { CK2x = !0;
                h2x.q2x(window, "message", bdT1x) } }; return function() { this.cs3x();
            bdP1x() } }();
    TB7u.ck3x = function(e2x) { var fA5F = e2x.request,
            jd6X = iA6u.bOz9q(fA5F.url),
            up9g = R3x[jd6X]; if (k2x.en4r(up9g)) { up9g.push(this.ck3x.g2x(this, e2x)); return } if (!up9g) { R3x[jd6X] = [this.ck3x.g2x(this, e2x)];
            a1x.Yi9Z({ src: jd6X, visible: !1, onload: function(d2x) { var i2x = R3x[jd6X];
                    R3x[jd6X] = h2x.U3x(d2x).contentWindow;
                    k2x.me7X(i2x, function(dd4h) { try { dd4h() } catch (e) {} }) } }); return } this.yd0x = "frm-" + k2x.mT7M();
        R3x[this.yd0x] = this; var j2x = NEJ.EX({ url: "", data: null, timeout: 0, method: "GET" }, fA5F);
        j2x.key = this.yd0x;
        j2x.headers = e2x.headers;
        v2x.cme6Y(R3x[jd6X], { data: j2x }) };
    TB7u.jo6i = function() { delete R3x[this.yd0x];
        this.tQ9H({ status: 0 }); return this } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        dO4S = c2x("nej.g"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        N3x = c2x("nej.ut.j"),
        R3x = {},
        GA3x; if (!!N3x.bdM1x) return;
    N3x.bdM1x = NEJ.C();
    GA3x = N3x.bdM1x.O3x(N3x.FT3x);
    GA3x.cl3x = function() { var eB4F = "NEJ-UPLOAD-RESULT:",
            CK2x = !1; var bdT1x = function(d2x) { var j2x = d2x.data; if (j2x.indexOf(eB4F) != 0) return;
            j2x = JSON.parse(j2x.replace(eB4F, "")); var jd6X = R3x[j2x.key]; if (!jd6X) return;
            delete R3x[j2x.key];
            jd6X.tQ9H(decodeURIComponent(j2x.result)) }; var bdP1x = function() { if (!CK2x) { CK2x = !0;
                h2x.q2x(window, "message", bdT1x) } }; return function() { this.cs3x();
            bdP1x() } }();
    GA3x.bC3x = function() { this.bH3x();
        a1x.cH4L(this.bdJ1x);
        delete this.bdJ1x;
        window.clearTimeout(this.dN4R);
        delete this.dN4R };
    GA3x.tQ9H = function(cZ4d) { var Q3x; try { Q3x = JSON.parse(cZ4d);
            this.z2x("onload", Q3x) } catch (e) { this.z2x("onerror", { code: dO4S.bPc9T, message: cZ4d }) } };
    GA3x.ck3x = function() { var cmm6g = function() { var lp7i, cZ4d; try { var lp7i = this.bdJ1x.contentWindow.document.body,
                    cZ4d = lp7i.innerText || lp7i.textContent } catch (e) { return } this.tQ9H(cZ4d) }; var bdC0x = function(V3x, eC4G, ql8d) { v2x.bp3x(V3x, { type: "json", method: "POST", cookie: ql8d, mode: parseInt(eC4G) || 0, onload: function(j2x) { if (!this.dN4R) return;
                    this.z2x("onuploading", j2x);
                    this.dN4R = window.setTimeout(bdC0x.g2x(this, V3x, eC4G, ql8d), 1e3) }.g2x(this), onerror: function(bQ3x) { if (!this.dN4R) return;
                    this.dN4R = window.setTimeout(bdC0x.g2x(this, V3x, eC4G, ql8d), 1e3) }.g2x(this) }) }; return function(e2x) { var fA5F = e2x.request,
                nL7E = e2x.headers,
                eD4H = fA5F.data,
                T3x = "fom-" + k2x.mT7M();
            R3x[T3x] = this;
            eD4H.target = T3x;
            eD4H.method = "POST";
            eD4H.enctype = dO4S.CV2x;
            eD4H.encoding = dO4S.CV2x; var V3x = eD4H.action || "",
                lm7f = V3x.indexOf("?") <= 0 ? "?" : "&";
            eD4H.action = V3x + lm7f + "_proxy_=form";
            this.bdJ1x = a1x.Yi9Z({ name: T3x, onload: function(d2x) { var up9g = h2x.U3x(d2x);
                    h2x.q2x(up9g, "load", cmm6g.g2x(this));
                    eD4H.submit(); var brp4t = (eD4H.nej_query || Y3x).value; if (!brp4t) return; var eC4G = (eD4H.nej_mode || Y3x).value,
                        ql8d = (eD4H.nej_cookie || Y3x).value == "true";
                    this.dN4R = window.setTimeout(bdC0x.g2x(this, brp4t, eC4G, ql8d), 100) }.g2x(this) }) } }();
    GA3x.jo6i = function() { this.z2x("onerror", { code: dO4S.bPu0x, message: "客户端终止文件上传" }); return this } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        ba3x = c2x("nej.h"),
        N3x = c2x("nej.ut.j");
    ba3x.bhi1x = function() { return new XMLHttpRequest };
    ba3x.bdB0x = function(eC4G, Tt7m, e2x) { var bv3x = !!Tt7m ? { 2: N3x.bdM1x } : { 2: N3x.bdX1x, 3: N3x.bfh1x }; return (bv3x[eC4G] || N3x.VB8t).B2x(e2x) } })();
(function() { var c2x = NEJ.P,
        N3x = c2x("nej.p"),
        ba3x = c2x("nej.h"); if (N3x.mp7i.trident) return;
    ba3x.bhi1x = function() { var KQ4U = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"]; var cmn6h = function() { for (var i = 0, l = KQ4U.length; i < l; i++) { try { return new ActiveXObject(KQ4U[i]) } catch (e) {} } return null }; return ba3x.bhi1x.ec4g(function(d2x) { if (!!window.XMLHttpRequest) return;
            d2x.stopped = !0;
            d2x.value = cmn6h() }) }();
    ba3x.bdB0x = function() { var BT1x = { 0: 2, 1: 3 }; return ba3x.bdB0x.ec4g(function(d2x) { var bg3x = d2x.args,
                eC4G = bg3x[0] || 0;
            bg3x[0] = !!bg3x[1] ? 2 : BT1x[eC4G] || eC4G }) }() })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        ba3x = c2x("nej.h"),
        dO4S = c2x("nej.g"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        N3x = c2x("nej.ut.j"),
        mK7D = {},
        Fo2x = bm3x;
    v2x.jo6i = function(eJ5O) { var R3x = mK7D[eJ5O]; if (!R3x) return this;
        R3x.req.jo6i(); return this };
    v2x.Ts7l = function(dE4I) { Fo2x = dE4I || bm3x; return this };
    v2x.bp3x = function() { var iG6A = (location.protocol + "//" + location.host).toLowerCase(); var cmt6n = function(V3x) { var hw5B = k2x.caL3x(V3x); return !!hw5B && hw5B != iG6A }; var cmK6E = function(nL7E) { return (nL7E || Y3x)[dO4S.xd0x] == dO4S.CV2x }; var cmL6F = function(e2x) { var Tt7m = cmK6E(e2x.headers); if (!cmt6n(e2x.url) && !Tt7m) return N3x.VB8t.B2x(e2x); return ba3x.bdB0x(e2x.mode, Tt7m, e2x) }; var Eq2x = function(eJ5O) { var R3x = mK7D[eJ5O]; if (!R3x) return; if (!!R3x.req) R3x.req.S3x();
            delete mK7D[eJ5O] }; var btP4T = function(eJ5O, t2x) { var R3x = mK7D[eJ5O]; if (!R3x) return;
            Eq2x(eJ5O); try { var d2x = { type: t2x, result: arguments[2] };
                Fo2x(d2x); if (!d2x.stopped)(R3x[t2x] || bm3x)(d2x.result) } catch (ex) { console.error(ex.message);
                console.error(ex) } }; var xc0x = function(eJ5O, j2x) { btP4T(eJ5O, "onload", j2x) }; var yp0x = function(eJ5O, bQ3x) { btP4T(eJ5O, "onerror", bQ3x) }; return function(V3x, e2x) { e2x = e2x || {}; var eJ5O = k2x.mT7M(),
                R3x = { onload: e2x.onload || bm3x, onerror: e2x.onerror || bm3x };
            mK7D[eJ5O] = R3x;
            e2x.onload = xc0x.g2x(null, eJ5O);
            e2x.onerror = yp0x.g2x(null, eJ5O); if (!!e2x.query) { var lm7f = V3x.indexOf("?") < 0 ? "?" : "&",
                    bD3x = e2x.query; if (k2x.ke6Y(bD3x)) bD3x = k2x.df4j(bD3x); if (!!bD3x) V3x += lm7f + bD3x } e2x.url = V3x;
            R3x.req = cmL6F(e2x);
            R3x.req.bhD1x(e2x.data); return eJ5O } }();
    v2x.gd5i = function(eD4H, e2x) { var gy5D = { mode: 0, type: "json", query: null, cookie: !1, headers: {}, onload: null, onerror: null, onuploading: null, onbeforerequest: null };
        NEJ.EX(gy5D, e2x);
        gy5D.data = eD4H;
        gy5D.method = "POST";
        gy5D.timeout = 0;
        gy5D.headers[dO4S.xd0x] = dO4S.CV2x; return v2x.bp3x(eD4H.action, gy5D) } })();
(function() { var c2x = NEJ.P,
        bm3x = NEJ.F,
        dO4S = c2x("nej.g"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        N3x = c2x("nej.ut.j"),
        lu7n, ji6c = 6e4; if (!!N3x.PL6F) return;
    N3x.PL6F = NEJ.C();
    lu7n = N3x.PL6F.O3x(H2x.cy3x);
    lu7n.cl3x = function() { this.cs3x();
        this.PM6G = { onerror: this.cmU6O.g2x(this), onloaded: this.cnG6A.g2x(this) }; if (!this.constructor.P3x) this.constructor.P3x = { loaded: {} } };
    lu7n.bk3x = function(e2x) { this.bl3x(e2x);
        this.GF3x = e2x.version;
        this.bdd0x = e2x.timeout;
        this.PM6G.version = this.GF3x;
        this.PM6G.timeout = this.bdd0x };
    lu7n.bwI5N = function(J3x) { delete this.constructor.P3x[J3x] };
    lu7n.yr0x = function(J3x) { return this.constructor.P3x[J3x] };
    lu7n.bwX5c = function(J3x, j2x) { this.constructor.P3x[J3x] = j2x };
    lu7n.Tg7Z = bm3x;
    lu7n.bxe5j = function(fA5F) { h2x.iw6q(fA5F) };
    lu7n.bdb0x = function(fA5F) { fA5F.src = this.kE6y;
        document.head.appendChild(fA5F) };
    lu7n.yu1x = function() { var R3x = this.yr0x(this.kE6y); if (!R3x) return;
        window.clearTimeout(R3x.timer);
        this.bxe5j(R3x.request);
        delete R3x.bind;
        delete R3x.timer;
        delete R3x.request;
        this.bwI5N(this.kE6y);
        this.yr0x("loaded")[this.kE6y] = !0 };
    lu7n.Tf7Y = function(T3x) { var R3x = this.yr0x(this.kE6y); if (!R3x) return; var i2x = R3x.bind;
        this.yu1x(); if (!!i2x && i2x.length > 0) { var co3x; while (i2x.length) { co3x = i2x.shift(); try { co3x.z2x(T3x, arguments[1]) } catch (ex) { console.error(ex.message);
                    console.error(ex.stack) } co3x.S3x() } } };
    lu7n.ep4t = function(bQ3x) { this.Tf7Y("onerror", bQ3x) };
    lu7n.byq5v = function() { this.Tf7Y("onloaded") };
    lu7n.coh6b = function(V3x) { this.constructor.B2x(this.PM6G).GG3x(V3x) };
    lu7n.byz6t = function(bQ3x) { var R3x = this.yr0x(this.uU0x); if (!R3x) return; if (!!bQ3x) R3x.error++;
        R3x.loaded++; if (R3x.loaded < R3x.total) return;
        this.bwI5N(this.uU0x);
        this.z2x(R3x.error > 0 ? "onerror" : "onloaded") };
    lu7n.cmU6O = function(bQ3x) { this.byz6t(!0) };
    lu7n.cnG6A = function() { this.byz6t() };
    lu7n.GG3x = function(V3x) { V3x = k2x.bjC2x(V3x); if (!V3x) { this.z2x("onerror", { code: dO4S.bpG3x, message: "请指定要载入的资源地址！" }); return this } this.kE6y = V3x; if (!!this.GF3x) this.kE6y += (this.kE6y.indexOf("?") < 0 ? "?" : "&") + this.GF3x; if (this.yr0x("loaded")[this.kE6y]) { try { this.z2x("onloaded") } catch (ex) { console.error(ex.message);
                console.error(ex.stack) } this.S3x(); return this } var R3x = this.yr0x(this.kE6y),
            fA5F; if (!!R3x) { R3x.bind.unshift(this);
            R3x.timer = window.clearTimeout(R3x.timer) } else { fA5F = this.Tg7Z();
            R3x = { request: fA5F, bind: [this] };
            this.bwX5c(this.kE6y, R3x);
            h2x.q2x(fA5F, "load", this.byq5v.g2x(this));
            h2x.q2x(fA5F, "error", this.ep4t.g2x(this, { code: dO4S.bpD3x, message: "无法加载指定资源文件[" + this.kE6y + "]！" })) } if (this.bdd0x != 0) R3x.timer = window.setTimeout(this.ep4t.g2x(this, { code: dO4S.byK6E, message: "指定资源文件[" + this.kE6y + "]载入超时！" }), this.bdd0x || ji6c); if (!!fA5F) this.bdb0x(fA5F);
        this.z2x("onloading"); return this };
    lu7n.byG6A = function(i2x) { if (!i2x || !i2x.length) { this.z2x("onerror", { code: dO4S.bpG3x, message: "请指定要载入的资源队列！" }); return this } this.uU0x = k2x.mT7M(); var R3x = { error: 0, loaded: 0, total: i2x.length };
        this.bwX5c(this.uU0x, R3x); for (var i = 0, l = i2x.length; i < l; i++) { if (!i2x[i]) { R3x.total--; continue } this.coh6b(i2x[i]) } this.z2x("onloading"); return this } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        a1x = c2x("nej.e"),
        ba3x = c2x("nej.h"),
        N3x = c2x("nej.ut.j"),
        PT6N; if (!!N3x.bcN0x) return;
    N3x.bcN0x = NEJ.C();
    PT6N = N3x.bcN0x.O3x(N3x.PL6F);
    PT6N.Tg7Z = function() { var fb5g = a1x.cT4X("iframe");
        fb5g.width = 0;
        fb5g.height = 0;
        fb5g.style.display = "none"; return fb5g };
    PT6N.bdb0x = function(fA5F) { fA5F.src = this.kE6y;
        document.body.appendChild(fA5F) };
    PT6N.ep4t = function(bQ3x) { var fb5g = (this.yr0x(this.kE6y) || Y3x).request;
        this.Tf7Y("onerror", bQ3x);
        ba3x.YH9y(fb5g) };
    PT6N.byq5v = function() { var lp7i = null,
            fb5g = (this.yr0x(this.kE6y) || Y3x).request; try { lp7i = fb5g.contentWindow.document.body } catch (ex) {} this.Tf7Y("onloaded", lp7i);
        ba3x.YH9y(fb5g) } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        N3x = c2x("nej.ut.j"),
        bcL0x; if (!!N3x.SZ7S) return;
    N3x.SZ7S = NEJ.C();
    bcL0x = N3x.SZ7S.O3x(N3x.PL6F);
    bcL0x.Tg7Z = function() { return a1x.cT4X("link") };
    bcL0x.bdb0x = function(fA5F) { fA5F.href = this.kE6y;
        document.head.appendChild(fA5F) } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        N3x = c2x("nej.ut.j"),
        SY7R; if (!!N3x.SU7N) return;
    N3x.SU7N = NEJ.C();
    SY7R = N3x.SU7N.O3x(N3x.PL6F);
    SY7R.bk3x = function(e2x) { this.bl3x(e2x);
        this.bza6U = e2x.async;
        this.bcw0x = e2x.charset;
        this.PM6G.async = !1;
        this.PM6G.charset = this.bcw0x };
    SY7R.Tg7Z = function() { var fA5F = a1x.cT4X("script"); if (this.bza6U != null) fA5F.async = !!this.bza6U; if (this.bcw0x != null) fA5F.charset = this.bcw0x; return fA5F };
    SY7R.bxe5j = function(fA5F) { a1x.cH4L(fA5F) } })();
(function() { var c2x = NEJ.P,
        v2x = c2x("nej.j"),
        N3x = c2x("nej.ut.j");
    v2x.com6g = function(V3x, e2x) { N3x.SU7N.B2x(e2x).GG3x(V3x); return this };
    v2x.cou6o = function(i2x, e2x) { N3x.SU7N.B2x(e2x).byG6A(i2x); return this };
    v2x.cuc7V = function(V3x, e2x) { N3x.SZ7S.B2x(e2x).GG3x(V3x); return this };
    v2x.coG6A = function(i2x, e2x) { N3x.SZ7S.B2x(e2x).byG6A(i2x); return this };
    v2x.bAm6g = function(V3x, e2x) { N3x.bcN0x.B2x(e2x).GG3x(V3x); return this } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        R3x = {},
        rB9s = +(new Date) + "-";
    a1x.cG4K = function() { var cu3x = 0; var Qb6V = function() { if (cu3x > 0) return;
            cu3x = 0;
            h2x.z2x(document, "templateready");
            h2x.iw6q(document, "templateready") }; var SG7z = function(fD5I, e2x) { var dw4A = a1x.u2x(fD5I, "src"); if (!dw4A) return;
            e2x = e2x || Y3x; var fw5B = e2x.root; if (!fw5B) { fw5B = fD5I.ownerDocument.location.href } else { fw5B = k2x.bjC2x(fw5B) } dw4A = dw4A.split(",");
            k2x.be3x(dw4A, function(A2x, s2x, i2x) { i2x[s2x] = k2x.bjC2x(A2x, fw5B) }); return dw4A }; var cpm6g = function(fD5I, e2x) { if (!fD5I) return; var dw4A = SG7z(fD5I, e2x); if (!!dw4A) v2x.coG6A(dw4A, { version: a1x.u2x(fD5I, "version") });
            a1x.bMs9j(fD5I.value) }; var cpR6L = function(A2x) { cu3x--;
            a1x.bMP9G(A2x);
            Qb6V() }; var cqk6e = function(fD5I, e2x) { if (!fD5I) return; var dw4A = SG7z(fD5I, e2x),
                eO5T = fD5I.value; if (!!dw4A) { cu3x++; var e2x = { version: a1x.u2x(fD5I, "version"), onloaded: cpR6L.g2x(null, eO5T) };
                window.setTimeout(v2x.cou6o.g2x(v2x, dw4A, e2x), 0); return } a1x.bMP9G(eO5T) }; var cqp6j = function(lp7i) { cu3x--;
            a1x.cG4K(lp7i);
            Qb6V() }; var cqs6m = function(fD5I, e2x) { if (!fD5I) return; var dw4A = SG7z(fD5I, e2x)[0]; if (!!dw4A) { cu3x++; var e2x = { version: a1x.u2x(fD5I, "version"), onloaded: cqp6j };
                window.setTimeout(v2x.bAm6g.g2x(v2x, dw4A, e2x), 0) } }; var cqt7m = function(C2x, cZ4d) { cu3x--;
            a1x.GN3x(C2x, cZ4d || "");
            Qb6V() }; var cqv7o = function(fD5I, e2x) { if (!fD5I || !fD5I.id) return; var C2x = fD5I.id,
                dw4A = SG7z(fD5I, e2x)[0]; if (!!dw4A) { cu3x++; var V3x = dw4A + (dw4A.indexOf("?") < 0 ? "?" : "&") + (a1x.u2x(fD5I, "version") || ""),
                    e2x = { type: "text", method: "GET", onload: cqt7m.g2x(null, C2x) };
                window.setTimeout(v2x.bp3x.g2x(v2x, V3x, e2x), 0) } }; var cqy7r = function(f2x, e2x) { var t2x = f2x.name.toLowerCase(); switch (t2x) {
                case "jst":
                    a1x.er4v(f2x, !0); return;
                case "txt":
                    a1x.GN3x(f2x.id, f2x.value || ""); return;
                case "ntp":
                    a1x.hM5R(f2x.value || "", f2x.id); return;
                case "js":
                    cqk6e(f2x, e2x); return;
                case "css":
                    cpm6g(f2x, e2x); return;
                case "html":
                    cqs6m(f2x, e2x); return;
                case "res":
                    cqv7o(f2x, e2x); return } };
        H2x.fr5w.B2x({ element: document, event: "templateready", oneventadd: Qb6V }); return function(E2x, e2x) { E2x = a1x.x2x(E2x); if (!!E2x) { var i2x = E2x.tagName == "TEXTAREA" ? [E2x] : E2x.getElementsByTagName("textarea");
                k2x.be3x(i2x, function(f2x) { cqy7r(f2x, e2x) });
                a1x.cH4L(E2x, !0) } Qb6V(); return this } }();
    a1x.GN3x = function(J3x, A2x) { R3x[J3x] = A2x || ""; return this };
    a1x.ik6e = function(J3x) { return R3x[J3x] || "" };
    a1x.hM5R = function(E2x, J3x) { J3x = J3x || k2x.mT7M();
        E2x = a1x.x2x(E2x) || E2x;
        a1x.GN3x(rB9s + J3x, E2x);
        a1x.mq7j(E2x); return J3x };
    a1x.dt4x = function(J3x) { if (!J3x) return null;
        J3x = rB9s + J3x; var A2x = a1x.ik6e(J3x); if (!A2x) return null; if (k2x.fe5j(A2x)) { A2x = a1x.mV7O(A2x);
            a1x.GN3x(J3x, A2x) } return A2x.cloneNode(!0) };
    a1x.yD1x = function() { var Fo2x = function(A2x, J3x) { return J3x == "offset" || J3x == "limit" }; return function(i2x, r2x, e2x) { var bs3x = []; if (!i2x || !i2x.length || !r2x) return bs3x;
            e2x = e2x || Y3x; var dF4J = i2x.length,
                jb6V = parseInt(e2x.offset) || 0,
                gC5H = Math.min(dF4J, jb6V + (parseInt(e2x.limit) || dF4J)),
                cm3x = { total: i2x.length, range: [jb6V, gC5H] };
            NEJ.X(cm3x, e2x, Fo2x); for (var i = jb6V, co3x; i < gC5H; i++) { cm3x.index = i;
                cm3x.data = i2x[i];
                co3x = r2x.B2x(cm3x); var C2x = co3x.BO1x();
                R3x[C2x] = co3x;
                co3x.S3x = co3x.S3x.ec4g(function(C2x, co3x) { delete R3x[C2x];
                    delete co3x.S3x }.g2x(null, C2x, co3x));
                bs3x.push(co3x) } return bs3x } }();
    a1x.bDn7g = function(C2x) { return R3x[C2x] };
    a1x.ctJ7C = function(dD4H, e2x) { e2x = e2x || Y3x;
        a1x.cG4K(e2x.tid || "template-box");
        h2x.q2x(document, "templateready", function() { dD4H.B2x().z2x("onshow", e2x) }) };
    c2x("dbg").dumpTC = function() { return R3x } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        N3x = c2x("nej.ui"),
        b2x; if (!!N3x.et4x) return;
    N3x.et4x = NEJ.C();
    b2x = N3x.et4x.O3x(H2x.cy3x);
    b2x.cl3x = function() { this.cs3x();
        a1x.bCh6b();
        this.bZ3x();
        this.bR3x() };
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.cqN7G(e2x.clazz);
        this.bFc7V(e2x.parent) };
    b2x.bC3x = function() { this.bH3x();
        this.bFi7b();
        delete this.fE5J;
        a1x.mq7j(this.o2x);
        a1x.w2x(this.o2x, this.bbL0x);
        delete this.bbL0x };
    b2x.bZ3x = bm3x;
    b2x.bR3x = function() { if (!this.ca3x) this.Sx7q();
        this.o2x = a1x.dt4x(this.ca3x); if (!this.o2x) this.o2x = a1x.cT4X("div", this.lg7Z);
        a1x.y2x(this.o2x, this.lg7Z) };
    b2x.Sx7q = bm3x;
    b2x.cqN7G = function(dK4O) { this.bbL0x = dK4O || "";
        a1x.y2x(this.o2x, this.bbL0x) };
    b2x.crg7Z = function() { if (!this.lg7Z) return;
        a1x.y2x(this.fE5J, this.lg7Z + "-parent") };
    b2x.bFi7b = function() { if (!this.lg7Z) return;
        a1x.w2x(this.fE5J, this.lg7Z + "-parent") };
    b2x.kB6v = function() { return this.o2x };
    b2x.bFc7V = function(bB3x) { if (!this.o2x) return this;
        this.bFi7b(); if (k2x.gb5g(bB3x)) { this.fE5J = bB3x(this.o2x) } else { this.fE5J = a1x.x2x(bB3x); if (!!this.fE5J) this.fE5J.appendChild(this.o2x) } this.crg7Z(); return this };
    b2x.M3x = function() { if (!this.fE5J || !this.o2x || this.o2x.parentNode == this.fE5J) return this;
        this.fE5J.appendChild(this.o2x); return this };
    b2x.bo3x = function() { a1x.mq7j(this.o2x); return this } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        ba3x = c2x("nej.h"),
        N3x = c2x("nej.ui"),
        uN9E, bHe8W; if (!!N3x.Qn6h) return;
    N3x.Qn6h = NEJ.C();
    uN9E = N3x.Qn6h.O3x(N3x.et4x);
    bHe8W = N3x.Qn6h.cg3x;
    uN9E.bk3x = function(e2x) { this.bl3x(e2x);
        this.uY0x("oncontentready", e2x.oncontentready || this.cro7h.g2x(this));
        this.crE7x = !!e2x.nohack;
        this.crO7H = !!e2x.destroyable;
        this.GO3x(e2x.content) };
    uN9E.bC3x = function() { this.z2x("onbeforerecycle");
        this.bH3x();
        this.Sn7g();
        this.GO3x("");
        a1x.fy5D(this.o2x, { top: "", left: "" }) };
    uN9E.cro7h = bm3x;
    uN9E.GQ3x = bm3x;
    uN9E.Sn7g = function() { a1x.mq7j(this.o2x); if (!!this.mE7x) { this.mE7x = ba3x.boC3x(this.o2x);
            delete this.mE7x } };
    uN9E.GO3x = function(bi3x) { if (!this.o2x || !this.yH1x || bi3x == null) return this;
        bi3x = bi3x || "";
        k2x.fe5j(bi3x) ? this.yH1x.innerHTML = bi3x : this.yH1x.appendChild(bi3x);
        this.z2x("oncontentready", this.yH1x); return this };
    uN9E.fV5a = function(bj3x) { var A2x = bj3x.top; if (A2x != null) { A2x += "px";
            a1x.X3x(this.o2x, "top", A2x);
            a1x.X3x(this.mE7x, "top", A2x) } var A2x = bj3x.left; if (A2x != null) { A2x += "px";
            a1x.X3x(this.o2x, "left", A2x);
            a1x.X3x(this.mE7x, "left", A2x) } return this };
    uN9E.M3x = function() { a1x.X3x(this.o2x, "visibility", "hidden");
        bHe8W.M3x.apply(this, arguments);
        this.GQ3x();
        a1x.X3x(this.o2x, "visibility", ""); if (!this.crE7x) { this.mE7x = ba3x.mE7x(this.o2x) } return this };
    uN9E.bo3x = function() { this.crO7H ? this.S3x() : this.Sn7g(); return this } })();
(function() { var c2x = NEJ.P,
        bm3x = NEJ.F,
        k2x = c2x("nej.u"),
        a1x = c2x("nej.e"),
        N3x = c2x("nej.ui"),
        AG1x; if (!!N3x.Sj7c) return;
    N3x.Sj7c = NEJ.C();
    AG1x = N3x.Sj7c.O3x(N3x.et4x);
    AG1x.bk3x = function(e2x) { this.Qv6p();
        this.bl3x(this.crV7O(e2x));
        this.bS3x.onbeforerecycle = this.S3x.g2x(this);
        this.nO7H = this.bbc0x() };
    AG1x.bC3x = function() { this.z2x("onbeforerecycle");
        this.bH3x();
        delete this.bS3x;
        a1x.mq7j(this.o2x); var yL1x = this.nO7H; if (!!yL1x) { delete this.nO7H;
            yL1x.S3x() } };
    AG1x.bbc0x = bm3x;
    AG1x.crV7O = function(e2x) { var m2x = {};
        k2x.ee4i(e2x, function(r2x, J3x) { this.bS3x.hasOwnProperty(J3x) ? this.bS3x[J3x] = r2x : m2x[J3x] = r2x }, this); return m2x };
    AG1x.Qv6p = function() { this.bS3x = { clazz: "", parent: null, content: this.o2x, destroyable: !1, oncontentready: null, nohack: !1 } };
    AG1x.M3x = function() { if (!!this.nO7H) this.nO7H.M3x();
        this.z2x("onaftershow"); return this };
    AG1x.bo3x = function() { if (!!this.nO7H) this.nO7H.bo3x(); return this } })();
(function() { var c2x = NEJ.P,
        dO4S = c2x("nej.g"),
        ba3x = c2x("nej.h"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        N3x = c2x("nej.ui"),
        Qw6q, bLA9r; if (!!N3x.GU3x) return; var hQ5V = a1x.sj9a(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + dO4S.bpz3x + ");}");
    N3x.GU3x = NEJ.C();
    Qw6q = N3x.GU3x.O3x(N3x.et4x);
    bLA9r = N3x.GU3x.cg3x;
    Qw6q.bk3x = function(e2x) { this.bl3x(e2x); var bi3x = e2x.content || "&nbsp;";
        k2x.fe5j(bi3x) ? this.o2x.innerHTML = bi3x : this.o2x.appendChild(bi3x) };
    Qw6q.bC3x = function() { this.bH3x();
        this.o2x.innerHTML = "&nbsp;" };
    Qw6q.bZ3x = function() { this.lg7Z = hQ5V };
    Qw6q.M3x = function() { ba3x.boJ3x(this.o2x);
        bLA9r.M3x.apply(this, arguments); return this } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        N3x = c2x("nej.ut"),
        uB9s; if (!!N3x.wp0x) return;
    N3x.wp0x = NEJ.C();
    uB9s = N3x.wp0x.O3x(N3x.cy3x);
    uB9s.bk3x = function(e2x) { this.bl3x(e2x);
        this.csb7U = !!e2x.overflow;
        this.o2x = a1x.x2x(e2x.body);
        this.yM1x = a1x.x2x(e2x.view) || a1x.bKd8V(this.o2x);
        this.bMd9U = a1x.x2x(e2x.mbar) || this.o2x;
        this.Se7X = parseInt(e2x.direction) || 0; if (!!e2x.isRelative) { this.o2x.style.position = "relative";
            this.baW0x = true;
            this.baU0x() } this.bU3x([
            [document, "mouseup", this.baR0x.g2x(this)],
            [document, "mousemove", this.baP0x.g2x(this)],
            [this.bMd9U, "mousedown", this.Qx6r.g2x(this)]
        ]) };
    uB9s.baU0x = function() { if (!!this.baW0x) { this.GV3x = a1x.hJ5O(this.o2x, this.yM1x);
            this.GV3x.x -= parseInt(a1x.da4e(this.o2x, "left")) || 0;
            this.GV3x.y -= parseInt(a1x.da4e(this.o2x, "top")) || 0 } };
    uB9s.bC3x = function() { this.bH3x();
        delete this.o2x;
        delete this.bMd9U;
        delete this.yM1x };
    uB9s.baL0x = function() { return { x: Math.max(this.yM1x.clientWidth, this.yM1x.scrollWidth) - this.o2x.offsetWidth, y: Math.max(this.yM1x.clientHeight, this.yM1x.scrollHeight) - this.o2x.offsetHeight } };
    uB9s.Qx6r = function(d2x) { h2x.bh3x(d2x); if (!!this.hP5U) return;
        this.hP5U = { x: h2x.kw6q(d2x), y: h2x.oc8U(d2x) };
        this.bNj9a = this.baL0x();
        this.z2x("ondragstart", d2x) };
    uB9s.baP0x = function(d2x) { if (!this.hP5U) return; var bj3x = { x: h2x.kw6q(d2x), y: h2x.oc8U(d2x) }; var se9V = bj3x.x - this.hP5U.x,
            sg9X = bj3x.y - this.hP5U.y,
            A2x = { top: (parseInt(a1x.da4e(this.o2x, "top")) || 0) + sg9X, left: (parseInt(a1x.da4e(this.o2x, "left")) || 0) + se9V }; if (this.baW0x) { this.baU0x();
            A2x.top = A2x.top + this.GV3x.y;
            A2x.left = A2x.left + this.GV3x.x } this.hP5U = bj3x;
        this.fV5a(A2x) };
    uB9s.baR0x = function(d2x) { if (!this.hP5U) return;
        delete this.bNj9a;
        delete this.hP5U;
        this.z2x("ondragend", this.baK0x()) };
    uB9s.fV5a = function(d2x) { if (!this.csb7U) { var bNB9s = this.bNj9a || this.baL0x();
            d2x.top = Math.min(bNB9s.y, Math.max(0, d2x.top));
            d2x.left = Math.min(bNB9s.x, Math.max(0, d2x.left)) } var cd3x = this.o2x.style; if (this.baW0x) { this.baU0x();
            d2x.top = d2x.top - this.GV3x.y;
            d2x.left = d2x.left - this.GV3x.x } if (this.Se7X == 0 || this.Se7X == 2) cd3x.top = d2x.top + "px"; if (this.Se7X == 0 || this.Se7X == 1) cd3x.left = d2x.left + "px";
        this.z2x("onchange", d2x); return this };
    uB9s.baK0x = function() { return { left: parseInt(a1x.da4e(this.o2x, "left")) || 0, top: parseInt(a1x.da4e(this.o2x, "top")) || 0 } } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        a1x = NEJ.P("nej.e"),
        h2x = NEJ.P("nej.v"),
        k2x = NEJ.P("nej.u"),
        H2x = NEJ.P("nej.ut"),
        N3x = NEJ.P("nej.ui"),
        hQ5V, gh5m, b2x, K3x; if (!!N3x.RZ7S) return;
    N3x.RZ7S = NEJ.C();
    b2x = N3x.RZ7S.O3x(N3x.Qn6h);
    K3x = N3x.RZ7S.cg3x;
    b2x.cl3x = function() { this.qK8C = {};
        this.jD6x = { onchange: this.baP0x.g2x(this) };
        this.cs3x() };
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.csh7a(e2x.mask);
        this.csk7d(e2x.align);
        this.yO1x(e2x.title); if (!e2x.draggable) return;
        this.jc6W = H2x.wp0x.B2x(this.jD6x) };
    b2x.bC3x = function() { this.bH3x();
        delete this.pl8d;
        delete this.QB6v; if (!!this.yS1x) { this.yS1x.S3x();
            delete this.yS1x } if (!!this.jc6W) { this.jc6W.S3x();
            delete this.jc6W } };
    b2x.bZ3x = function() { this.lg7Z = hQ5V;
        this.ca3x = gh5m };
    b2x.bR3x = function() { this.cc3x(); var i2x = a1x.cQ4U(this.o2x);
        this.yH1x = i2x[1];
        this.jD6x.mbar = i2x[0];
        this.jD6x.body = this.o2x;
        h2x.q2x(i2x[2], "mousedown", this.csC7v.g2x(this));
        h2x.q2x(this.jD6x.mbar, "mousedown", this.Qx6r.g2x(this));
        this.buf4j = a1x.cQ4U(this.jD6x.mbar)[0] };
    b2x.csC7v = function(d2x) { h2x.bh3x(d2x);
        this.z2x("onclose", d2x); if (!d2x.stopped) { this.bo3x() } };
    b2x.Qx6r = function(d2x) { h2x.z2x(document, "click") };
    b2x.baP0x = function(d2x) { if (!this.mE7x) return;
        a1x.fy5D(this.mE7x, { top: d2x.top + "px", left: d2x.left + "px" }) };
    b2x.GQ3x = function() { var eH5M = [function() { return 0 }, function(mR7K, Ba1x, bj3x, J3x) { if (J3x == "top" && window.top != window.self) { var RS7L = 0,
                        Bd1x = 0; if (top.g_topBarHeight) RS7L = top.g_topBarHeight; if (top.g_bottomBarShow && top.g_bottomBarHeight) Bd1x = top.g_bottomBarHeight; if (mR7K.top <= RS7L) { var baw0x = Math.max(0, (Ba1x.height - (RS7L - mR7K.top) - Bd1x - bj3x.height) / 2); return baw0x + RS7L } else { var baw0x = Math.max(0, (Ba1x.height - Bd1x - bj3x.height) / 2); return baw0x + mR7K.top } } return Math.max(0, mR7K[J3x] + (Ba1x[hE5J[J3x]] - bj3x[hE5J[J3x]]) / 2) }, function(mR7K, Ba1x, bj3x, J3x) { return mR7K[J3x] + (Ba1x[hE5J[J3x]] - bj3x[hE5J[J3x]]) }],
            csF7y = ["left", "top"],
            hE5J = { left: "width", top: "height" }; return function() { var A2x = {},
                cd3x = this.o2x.style,
                iK6E = a1x.oE8w(),
                mR7K = { left: iK6E.scrollLeft, top: iK6E.scrollTop },
                Ba1x = { width: iK6E.clientWidth, height: iK6E.clientHeight },
                bj3x = { width: this.o2x.offsetWidth, height: this.o2x.offsetHeight },
                dh4l = { left: iK6E.clientWidth - this.o2x.offsetWidth, top: iK6E.clientHeight - this.o2x.offsetHeight };
            k2x.be3x(csF7y, function(J3x, s2x) { var dd4h = eH5M[this.pl8d[s2x]]; if (!dd4h) return;
                A2x[J3x] = dd4h(mR7K, Ba1x, bj3x, J3x) }, this);
            this.fV5a(A2x) } }();
    b2x.ctm7f = function() { if (!this.yS1x) { if (!this.QB6v) return;
            this.qK8C.parent = this.fE5J;
            this.yS1x = this.QB6v.B2x(this.qK8C) } this.yS1x.M3x() };
    b2x.Sn7g = function() { if (!!this.yS1x) this.yS1x.bo3x();
        K3x.Sn7g.apply(this, arguments) };
    b2x.csh7a = function(jZ6T) { if (!!jZ6T) { if (jZ6T instanceof N3x.GU3x) { this.yS1x = jZ6T; return } if (k2x.gb5g(jZ6T)) { this.QB6v = jZ6T; return } this.QB6v = N3x.GU3x; if (k2x.fe5j(jZ6T)) this.qK8C.clazz = jZ6T; return } this.QB6v = null };
    b2x.yO1x = function(eG4K, dr4v) { if (!!this.buf4j) { var bab9S = !dr4v ? "innerText" : "innerHTML";
            this.buf4j[bab9S] = eG4K || "标题" } return this };
    b2x.csk7d = function() { var cM4Q = /\s+/,
            ctk7d = { left: 0, center: 1, right: 2, auto: 3 },
            cti7b = { top: 0, middle: 1, bottom: 2, auto: 3 }; return function(ng7Z) { this.pl8d = (ng7Z || "").split(cM4Q); var dQ4U = ctk7d[this.pl8d[0]]; if (dQ4U == null) dQ4U = 1;
            this.pl8d[0] = dQ4U; var dQ4U = cti7b[this.pl8d[1]]; if (dQ4U == null) dQ4U = 1;
            this.pl8d[1] = dQ4U; return this } }();
    b2x.M3x = function() { K3x.M3x.apply(this, arguments);
        this.ctm7f(); return this };
    hQ5V = a1x.sj9a(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gh5m = a1x.hM5R('<div class="' + hQ5V + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>') })();
(function() { var c2x = NEJ.P,
        k2x = c2x("nej.u"),
        N3x = c2x("nej.ui"),
        bal0x; if (!!N3x.RN7G) return;
    N3x.RN7G = NEJ.C();
    bal0x = N3x.RN7G.O3x(N3x.Sj7c);
    bal0x.bbc0x = function() { return N3x.RZ7S.B2x(this.bS3x) };
    bal0x.Qv6p = function() { N3x.RN7G.cg3x.Qv6p.apply(this, arguments);
        this.bS3x.mask = null;
        this.bS3x.title = "标题";
        this.bS3x.align = "";
        this.bS3x.draggable = !1;
        this.bS3x.onclose = null } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        bd3x = c2x("nej.ui"),
        n2x = c2x("nm.l"),
        b2x, K3x;
    n2x.dW4a = NEJ.C();
    b2x = n2x.dW4a.O3x(bd3x.RN7G);
    b2x.bk3x = function(e2x) { e2x.clazz = "m-layer z-show " + (e2x.clazz || "");
        e2x.nohack = true;
        e2x.draggable = true;
        this.bl3x(e2x) };
    b2x.dy4C = function(f2x, bF3x) { if (!f2x) return;
        a1x.X3x(f2x, "display", !bF3x ? "none" : "");
        f2x.lastChild.innerText = bF3x || "" };
    b2x.dM4Q = function(gi5n, cC4G, QK6E, QN6H) { var dD4H = "js-lock"; if (cC4G === undefined) return a1x.bz3x(gi5n, dD4H);!cC4G ? a1x.w2x(gi5n, dD4H) : a1x.y2x(gi5n, dD4H);
        gi5n.firstChild.innerText = !cC4G ? QK6E : QN6H };
    n2x.dW4a.M3x = function(e2x) { e2x = e2x || {}; if (e2x.mask === undefined) e2x.mask = "m-mask"; if (e2x.parent === undefined) e2x.parent = document.body; if (e2x.draggable === undefined) e2x.draggable = true;!!this.eK5P && this.eK5P.S3x();
        this.eK5P = this.B2x(e2x);
        this.eK5P.M3x(e2x); return this.eK5P };
    n2x.dW4a.bo3x = function() {!!this.eK5P && this.eK5P.S3x() } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        b2x, K3x;
    n2x.bqV4Z = NEJ.C();
    b2x = n2x.bqV4Z.O3x(n2x.dW4a);
    K3x = n2x.bqV4Z.cg3x;
    b2x.bk3x = function(e2x) { this.bl3x(e2x); if (e2x.bubble === undefined) e2x.bubble = true;
        this.QP6J = e2x.bubble;
        this.pq8i = e2x.message || "" };
    b2x.bZ3x = function() { this.ca3x = a1x.hM5R('<div class="lyct f-cb f-tc"></div>') };
    b2x.bR3x = function() { this.cc3x();
        h2x.q2x(this.o2x, "click", this.cw3x.g2x(this)) };
    b2x.cw3x = function(d2x) { var f2x = h2x.U3x(d2x, "d:action"); if (!f2x) return; if (f2x.href) h2x.ce3x(d2x); if (a1x.u2x(f2x, "action") == "close") this.bo3x(); if (this.QP6J === !1) h2x.rw9n(d2x);
        this.z2x("onaction", a1x.u2x(f2x, "action")) };
    b2x.M3x = function() { K3x.M3x.call(this);
        this.o2x.innerHTML = this.pq8i }; var fW5b = a1x.er4v('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="#" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l2x.mt7m = function() { var eZ5e; var co3x; var bqM4Q = function(gg5l, W3x) { if (k2x.gb5g(gg5l, "function") && gg5l(W3x) != -1) co3x.S3x() }; var yY1x = function() {!!co3x && co3x.bo3x() }; return function(e2x) { clearTimeout(eZ5e);
            e2x = e2x || {};
            e2x.title = e2x.title || "提示";
            e2x.clazz = e2x.clazz || "";
            e2x.parent = e2x.parent || document.body;
            e2x.buttons = e2x.buttons || [];
            e2x.message = a1x.bP3x(fW5b, e2x);
            e2x.onaction = bqM4Q.g2x(null, e2x.action); if (e2x.mask === undefined) e2x.mask = true; if (e2x.draggable === undefined) e2x.draggable = true;!!co3x && co3x.S3x();
            co3x = n2x.bqV4Z.B2x(e2x);
            co3x.M3x(); if (e2x.autoclose) eZ5e = setTimeout(yY1x.g2x(null), 2e3); return co3x } }();
    l2x.fd5i = function(e2x) { e2x = e2x || {};
        e2x.clazz = e2x.clazz || "m-layer-w1";
        e2x.buttons = [{ klass: "u-btn2-2", action: "close", text: e2x.btntxt || "确定" }]; var co3x = l2x.mt7m(e2x); return co3x };
    l2x.gU5Z = function(e2x) { e2x = e2x || {};
        e2x.clazz = e2x.clazz || "m-layer-w2";
        e2x.buttons = [{ klass: "u-btn2-2", action: "ok", text: e2x.btnok || "确定", style: e2x.okstyle || "" }, { klass: "u-btn2-1", action: "close", text: e2x.btncc || "取消", style: e2x.ccstyle || "" }]; var co3x = l2x.mt7m(e2x); return co3x } })();
(function() { var c2x = NEJ.P,
        bm3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u");
    a1x.ctf7Y = function() { var fU5Z = /[\r\n]/gi,
            R3x = {}; var cte7X = function(cK4O) { return (cK4O || "").replace(fU5Z, "aa").length }; var bzy6s = function(C2x) { var bc3x = R3x[C2x],
                bzL6F = a1x.x2x(C2x),
                vT0x = a1x.x2x(C2x + "-counter"); if (!bzL6F || !bc3x) return; var d2x = { input: bzL6F.value };
            d2x.length = bc3x.onlength(d2x.input);
            d2x.delta = bc3x.max - d2x.length;
            bc3x.onchange(d2x);
            vT0x.innerHTML = d2x.value || "剩余" + d2x.delta + "个字" }; return function(E2x, e2x) { var C2x = a1x.kD6x(E2x); if (!C2x || !!R3x[C2x]) return; var bc3x = NEJ.X({}, e2x);
            bc3x.onchange = bc3x.onchange || bm3x;
            bc3x.onlength = cte7X; if (!bc3x.max) { var bzO6I = parseInt(a1x.ga5f(C2x, "maxlength")),
                    bzP6J = parseInt(a1x.u2x(C2x, "maxLength"));
                bc3x.max = bzO6I || bzP6J || 100; if (!bzO6I && !!bzP6J) bc3x.onlength = k2x.fh5m } R3x[C2x] = bc3x;
            h2x.q2x(C2x, "input", bzy6s.g2x(null, C2x)); var f2x = a1x.Fz2x(C2x, { nid: bc3x.nid || "js-counter", clazz: bc3x.clazz });
            bc3x.xid = C2x + "-counter";
            f2x.id = bc3x.xid;
            bzy6s(C2x) } }() })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        ba3x = c2x("nej.h");
    ba3x.bqw4A = function(E2x, dK4O) {} })();
(function() { var c2x = NEJ.P,
        bm3x = NEJ.F,
        N3x = c2x("nej.p"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        ba3x = c2x("nej.h"); if (N3x.mp7i.trident) return;
    ba3x.bqw4A = function() { var R3x = {}; var EX2x = function(d2x) { var cN4R = h2x.U3x(d2x); if (!!cN4R.value) return;
            a1x.X3x(a1x.Fz2x(cN4R), "display", "none") }; var AR1x = function(d2x) { var cN4R = h2x.U3x(d2x); if (!!cN4R.value) return;
            a1x.X3x(a1x.Fz2x(cN4R), "display", "") }; var ctd7W = function(cN4R, dK4O) { var C2x = a1x.kD6x(cN4R),
                jU6O = a1x.Fz2x(cN4R, { tag: "label", clazz: dK4O });
            jU6O.htmlFor = C2x; var cZ4d = a1x.ga5f(cN4R, "placeholder") || "";
            jU6O.innerText = cZ4d == "null" ? "" : cZ4d; var cp3x = cN4R.offsetHeight + "px";
            a1x.fy5D(jU6O, { left: 0, display: !cN4R.value ? "" : "none" }) }; return ba3x.bqw4A.ec4g(function(d2x) { d2x.stopped = !0; var bg3x = d2x.args,
                cN4R = a1x.x2x(bg3x[0]); if (!!R3x[cN4R.id]) return;
            ctd7W(cN4R, bg3x[1]);
            R3x[cN4R.id] = !0;
            h2x.q2x(cN4R, "blur", AR1x.g2x(null));
            h2x.q2x(cN4R, "focus", EX2x.g2x(null)) }) }() })();
(function() { var c2x = NEJ.P,
        ba3x = c2x("nej.h"),
        a1x = c2x("nej.e"),
        cO4S = c2x("nej.x");
    a1x.fC5H = cO4S.fC5H = function(E2x, dK4O) { ba3x.bqw4A(E2x, a1x.u2x(E2x, "holder") || dK4O || "js-placeholder"); return this };
    cO4S.isChange = !0 })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        N3x = c2x("nej.ut"),
        he5j; if (!!N3x.QV6P) return;
    N3x.QV6P = NEJ.C();
    he5j = N3x.QV6P.O3x(N3x.cy3x);
    he5j.cl3x = function() { this.cs3x();
        this.Db2x = { tp: { nid: "js-nej-tp" }, ok: { nid: "js-nej-ok" }, er: { nid: "js-nej-er" } } };
    he5j.bk3x = function(e2x) { this.bl3x(e2x);
        this.fJ5O = document.forms[e2x.form] || a1x.x2x(e2x.form);
        this.bU3x([
            [this.fJ5O, "keypress", this.ctc7V.g2x(this)]
        ]);
        this.pq8i = e2x.message || {};
        this.pq8i.pass = this.pq8i.pass || "&nbsp;"; var eC4G = this.ot8l(this.fJ5O, "focusMode", 1); if (!isNaN(eC4G)) { this.bAY6S = { mode: eC4G, clazz: e2x.focus } } this.za1x = e2x.holder;
        this.Db2x.tp.clazz = "js-mhd " + (e2x.tip || "js-tip");
        this.Db2x.ok.clazz = "js-mhd " + (e2x.pass || "js-pass");
        this.Db2x.er.clazz = "js-mhd " + (e2x.error || "js-error");
        this.bBw6q = e2x.invalid || "js-invalid";
        this.ctb7U(e2x);
        this.fT5Y(); if (!!this.zb1x) this.zb1x.focus() };
    he5j.bC3x = function() { this.bH3x();
        delete this.pq8i;
        delete this.zb1x;
        delete this.Dv2x;
        delete this.fJ5O;
        delete this.bCc6W;
        delete this.Rc7V };
    he5j.ot8l = function(f2x, DB2x, t2x) { var A2x = a1x.u2x(f2x, DB2x); switch (t2x) {
            case 1:
                return parseInt(A2x);
            case 2:
                return (A2x || "").toLowerCase() == "true";
            case 3:
                return this.bqa3x(A2x) } return A2x };
    he5j.zg1x = function(A2x, t2x) { if (t2x == "date") return this.bqa3x(A2x); return parseInt(A2x) };
    he5j.RA7t = function() { var jh6b = /^button|submit|reset|image|hidden|file$/i; return function(f2x) { f2x = this.x2x(f2x) || f2x; var t2x = f2x.type; return !!f2x.name && !jh6b.test(f2x.type || "") } }();
    he5j.cta7T = function() { var jh6b = /^hidden$/i; return function(f2x) { if (this.RA7t(f2x)) return !0;
            f2x = this.x2x(f2x) || f2x; var t2x = f2x.type || ""; return jh6b.test(t2x) } }();
    he5j.bqa3x = function() { var cM4Q = /[-\/]/; var csY7R = function(A2x) { if (!A2x) return "";
            A2x = A2x.split(cM4Q);
            A2x.push(A2x.shift()); return A2x.join("/") }; return function(A2x) { if ((A2x || "").toLowerCase() == "now") return +(new Date); return Date.parse(csY7R(A2x)) } }();
    he5j.ctc7V = function(d2x) { if (d2x.keyCode != 13) return;
        this.z2x("onenter", d2x) };
    he5j.csX7Q = function(C2x, T3x) { var qw8o = this.Rc7V[T3x],
            A2x = this.ot8l(C2x, T3x); if (!A2x || !qw8o) return;
        this.Ry7r(C2x, qw8o);
        this.bpB3x(C2x, T3x, A2x) };
    he5j.csU7N = function(C2x, T3x) { try { var bDf7Y = this.ot8l(C2x, T3x); if (!bDf7Y) return; var A2x = new RegExp(bDf7Y);
            this.bpB3x(C2x, T3x, A2x);
            this.Ry7r(C2x, this.Rc7V[T3x]) } catch (e) {} };
    he5j.csT7M = function(C2x, T3x) { var qw8o = this.Rc7V[T3x]; if (!!qw8o && this.ot8l(C2x, T3x, 2)) this.Ry7r(C2x, qw8o) };
    he5j.bpq3x = function(C2x, T3x, A2x) { A2x = parseInt(A2x); if (isNaN(A2x)) return;
        this.bpB3x(C2x, T3x, A2x);
        this.Ry7r(C2x, this.Rc7V[T3x]) };
    he5j.bDr7k = function(C2x, T3x) { this.bpq3x(C2x, T3x, this.ot8l(C2x, T3x)) };
    he5j.bDA7t = function(C2x, T3x) { this.bpq3x(C2x, T3x, a1x.ga5f(C2x, T3x)) };
    he5j.bDT7M = function(C2x, T3x, t2x) { var A2x = this.zg1x(this.ot8l(C2x, T3x), this.ot8l(C2x, "type"));
        this.bpq3x(C2x, T3x, A2x) };
    he5j.csS7L = function() { var fU5Z = /^input|textarea$/i; var EX2x = function(d2x) { this.ow8o(h2x.U3x(d2x)) }; var AR1x = function(d2x) { var f2x = h2x.U3x(d2x); if (!this.ot8l(f2x, "ignore", 2)) { this.bEp7i(f2x) } }; return function(f2x) { if (this.ot8l(f2x, "autoFocus", 2)) this.zb1x = f2x; var pk8c = a1x.ga5f(f2x, "placeholder"); if (!!pk8c && pk8c != "null") a1x.fC5H(f2x, this.za1x); if (!!this.bAY6S && fU5Z.test(f2x.tagName)) a1x.lN7G(f2x, this.bAY6S); var C2x = a1x.kD6x(f2x);
            this.csT7M(C2x, "required");
            this.csX7Q(C2x, "type");
            this.csU7N(C2x, "pattern");
            this.bDA7t(C2x, "maxlength");
            this.bDA7t(C2x, "minlength");
            this.bDr7k(C2x, "maxLength");
            this.bDr7k(C2x, "minLength");
            this.bDT7M(C2x, "min");
            this.bDT7M(C2x, "max"); var T3x = f2x.name;
            this.pq8i[T3x + "-tip"] = this.ot8l(f2x, "tip");
            this.pq8i[T3x + "-error"] = this.ot8l(f2x, "message");
            this.ow8o(f2x); var bt3x = this.Dv2x[C2x],
                j2x = (bt3x || Y3x).data || Y3x,
                Rr7k = this.ot8l(f2x, "counter", 2); if (Rr7k && (j2x.maxlength || j2x.maxLength)) { a1x.ctf7Y(C2x, { nid: this.Db2x.tp.nid, clazz: "js-counter" }) } if (!!bt3x && fU5Z.test(f2x.tagName)) { this.bU3x([
                    [f2x, "focus", EX2x.g2x(this)],
                    [f2x, "blur", AR1x.g2x(this)]
                ]) } else if (this.ot8l(f2x, "focus", 2)) { this.bU3x([
                    [f2x, "focus", EX2x.g2x(this)]
                ]) } } }();
    he5j.ctb7U = function() { var Ep2x = { number: /^[\d]+$/i, url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i, email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i, date: function(v) { return !v || !isNaN(this.bqa3x(v)) } }; var csR7K = { required: function(f2x) { var t2x = f2x.type,
                    csQ7J = !f2x.value,
                    csP7I = (t2x == "checkbox" || t2x == "radio") && !f2x.checked; if (csP7I || csQ7J) return -1 }, type: function(f2x, e2x) { var cM4Q = this.bCc6W[e2x.type],
                    eO5T = f2x.value.trim(),
                    csO7H = !!cM4Q.test && !cM4Q.test(eO5T),
                    csM7F = k2x.gb5g(cM4Q) && !cM4Q.call(this, eO5T); if (csO7H || csM7F) return -2 }, pattern: function(f2x, e2x) { if (!e2x.pattern.test(f2x.value)) return -3 }, maxlength: function(f2x, e2x) { if (f2x.value.length > e2x.maxlength) return -4 }, minlength: function(f2x, e2x) { if (f2x.value.length < e2x.minlength) return -5 }, maxLength: function(f2x, e2x) { if (k2x.fh5m(f2x.value) > e2x.maxLength) return -4 }, minLength: function(f2x, e2x) { if (k2x.fh5m(f2x.value) < e2x.minLength) return -5 }, min: function(f2x, e2x) { var ft5y = this.zg1x(f2x.value, e2x.type); if (isNaN(ft5y) || ft5y < e2x.min) return -6 }, max: function(f2x, e2x) { var ft5y = this.zg1x(f2x.value, e2x.type); if (isNaN(ft5y) || ft5y > e2x.max) return -7 } }; return function(e2x) { this.bCc6W = NEJ.X(NEJ.X({}, Ep2x), e2x.type);
            this.Rc7V = NEJ.X(NEJ.X({}, csR7K), e2x.attr) } }();
    he5j.Ry7r = function(C2x, vF0x) { if (!k2x.gb5g(vF0x)) return; var bt3x = this.Dv2x[C2x]; if (!bt3x || !bt3x.func) { bt3x = bt3x || {};
            bt3x.func = [];
            this.Dv2x[C2x] = bt3x } bt3x.func.push(vF0x) };
    he5j.bpB3x = function(C2x, T3x, A2x) { if (!T3x) return; var bt3x = this.Dv2x[C2x]; if (!bt3x || !bt3x.data) { bt3x = bt3x || {};
            bt3x.data = {};
            this.Dv2x[C2x] = bt3x } bt3x.data[T3x] = A2x };
    he5j.bEp7i = function(f2x) { f2x = this.x2x(f2x) || f2x; var bt3x = this.Dv2x[a1x.kD6x(f2x)]; if (!f2x || !bt3x || !this.RA7t(f2x)) return !0; var m2x;
        k2x.ee4i(bt3x.func, function(eH5M) { m2x = eH5M.call(this, f2x, bt3x.data); return m2x != null }, this); if (m2x == null) { var d2x = { target: f2x, form: this.fJ5O };
            this.z2x("oncheck", d2x);
            m2x = d2x.value } var d2x = { target: f2x, form: this.fJ5O }; if (m2x != null) { d2x.code = m2x;
            this.z2x("oninvalid", d2x); if (!d2x.stopped) { this.csL7E(f2x, d2x.value || this.pq8i[f2x.name + m2x]) } } else { this.z2x("onvalid", d2x); if (!d2x.stopped) this.csJ7C(f2x, d2x.value) } return m2x == null };
    he5j.vD0x = function() { var csI7B = function(Zd9U, Zc9T) { return Zd9U == Zc9T ? "block" : "none" }; var csH7A = function(f2x, t2x, bF3x) { var pk8c = bGu7n.call(this, f2x, t2x); if (!pk8c && !!bF3x) pk8c = a1x.Fz2x(f2x, this.Db2x[t2x]); return pk8c }; var bGu7n = function(f2x, t2x) { var pk8c; if (t2x == "tp") pk8c = a1x.x2x(f2x.name + "-tip"); if (!pk8c) pk8c = a1x.I2x(f2x.parentNode, this.Db2x[t2x].nid)[0]; return pk8c }; return function(f2x, bF3x, t2x) { f2x = this.x2x(f2x) || f2x; if (!f2x) return;
            t2x == "er" ? a1x.y2x(f2x, this.bBw6q) : a1x.w2x(f2x, this.bBw6q); var pk8c = csH7A.call(this, f2x, t2x, bF3x); if (!!pk8c && !!bF3x) pk8c.innerHTML = bF3x;
            k2x.ee4i(this.Db2x, function(A2x, J3x) { a1x.X3x(bGu7n.call(this, f2x, J3x), "display", csI7B(t2x, J3x)) }, this) } }();
    he5j.ow8o = function(f2x, bF3x) { this.vD0x(f2x, bF3x || this.pq8i[f2x.name + "-tip"], "tp"); return this };
    he5j.csJ7C = function(f2x, bF3x) { this.vD0x(f2x, bF3x || this.pq8i[f2x.name + "-pass"] || this.pq8i.pass, "ok"); return this };
    he5j.csL7E = function(f2x, bF3x) { this.vD0x(f2x, bF3x || this.pq8i[f2x.name + "-error"], "er"); return this };
    he5j.hR5W = function() { var fU5Z = /^(?:radio|checkbox)$/i; var csG7z = function(A2x) { return A2x == null ? "" : A2x }; var bHq8i = function(A2x, f2x) { if (fU5Z.test(f2x.type || "")) { f2x.checked = A2x == f2x.value } else { f2x.value = csG7z(A2x) } }; return function(T3x, A2x) { var f2x = this.x2x(T3x); if (!f2x) return this; if (f2x.tagName == "SELECT" || !f2x.length) { bHq8i(A2x, f2x) } else { k2x.be3x(f2x, bHq8i.g2x(null, A2x)) } return this } }();
    he5j.x2x = function(T3x) { return this.fJ5O.elements[T3x] };
    he5j.ctq7j = function() { return this.fJ5O };
    he5j.Rx7q = function() { var fU5Z = /^radio|checkbox$/i,
            jh6b = /^number|date$/; var csE7x = function(bv3x, f2x) { var T3x = f2x.name,
                A2x = f2x.value,
                bt3x = bv3x[T3x],
                t2x = this.ot8l(f2x, "type"); if (jh6b.test(t2x)) A2x = this.zg1x(A2x, t2x); if (fU5Z.test(f2x.type) && !f2x.checked) { A2x = this.ot8l(f2x, "value"); if (!A2x) return } if (!!bt3x) { if (!k2x.en4r(bt3x)) { bt3x = [bt3x];
                    bv3x[T3x] = bt3x } bt3x.push(A2x) } else { bv3x[T3x] = A2x } }; return function() { var m2x = {};
            k2x.be3x(this.fJ5O.elements, function(f2x) { if (this.cta7T(f2x)) csE7x.call(this, m2x, f2x) }, this); return m2x } }();
    he5j.RC7v = function() { var csD7w = function(f2x) { if (this.RA7t(f2x)) this.ow8o(f2x) }; return function() { this.fJ5O.reset();
            k2x.be3x(this.fJ5O.elements, csD7w, this); return this } }();
    he5j.cts7l = function() { this.fJ5O.submit(); return this };
    he5j.fT5Y = function() { var csq7j = function(f2x) { if (this.RA7t(f2x)) this.csS7L(f2x) }; return function() { this.Dv2x = {};
            k2x.be3x(this.fJ5O.elements, csq7j, this); return this } }();
    he5j.csp7i = function(f2x) { f2x = this.x2x(f2x) || f2x; if (!!f2x) return this.bEp7i(f2x); var m2x = !0;
        k2x.be3x(this.fJ5O.elements, function(f2x) { var kc6W = this.csp7i(f2x);
            m2x = m2x && kc6W }, this); return m2x } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        b2x, K3x;
    n2x.baj9a = NEJ.C();
    b2x = n2x.baj9a.O3x(n2x.dW4a);
    K3x = n2x.baj9a.cg3x;
    b2x.bR3x = function() { this.cc3x();
        h2x.q2x(this.o2x, "click", this.cw3x.g2x(this));
        h2x.q2x(document, "mousewheel", this.xR0x.g2x(this)); if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.xR0x.g2x(this)) };
    b2x.bk3x = function(e2x) { this.bl3x(e2x); if (e2x.jst) { this.o2x.innerHTML = a1x.bP3x(e2x.jst, e2x.data) } else if (e2x.ntp) { this.o2x.appendChild(a1x.dt4x(e2x.ntp)) } else if (e2x.txt) { this.o2x.innerHTML = a1x.ik6e(e2x.txt) } else if (e2x.html) { this.o2x.innerHTML = e2x.html } var QU6O = this.o2x.getElementsByTagName("form"); if (QU6O.length) { this.fJ5O = H2x.QV6P.B2x({ form: QU6O[0] }) } this.Bh1x = a1x.cQ4U(this.o2x)[0] };
    b2x.bC3x = function() { this.z2x("ondestroy");
        this.bH3x();
        this.o2x.innerHTML = "";
        delete this.Bh1x };
    b2x.cw3x = function(d2x) { var f2x = h2x.U3x(d2x, "d:action"),
            j2x = this.fJ5O ? this.fJ5O.Rx7q() : null,
            d2x = { action: a1x.u2x(f2x, "action") }; if (j2x) d2x.data = j2x; if (d2x.action) { this.z2x("onaction", d2x); if (d2x.stopped) return;
            this.bo3x() } };
    b2x.xR0x = function(d2x) { if (!this.Bh1x) return;
        h2x.bh3x(d2x); var dh4l = d2x.wheelDelta || -d2x.detail;
        this.Bh1x.scrollTop -= dh4l };
    l2x.jk6e = function(e2x) { e2x.destroyable = e2x.destroyable || true;
        e2x.title = e2x.title || "提示";
        e2x.draggable = true;
        e2x.parent = document.body;
        e2x.mask = e2x.mask || true; var yL1x = n2x.baj9a.B2x(e2x);
        yL1x.M3x(); return yL1x } })();
(function() { var p = NEJ.P("nej.u"); var bKq8i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        QS6M = {},
        Bl1x = {}; for (var i = 0, l = bKq8i.length, c; i < l; i++) { c = bKq8i.charAt(i);
        QS6M[i] = c;
        Bl1x[c] = i } var cso7h = function(iI6C) { var s2x = 0,
            c, m2x = []; while (s2x < iI6C.length) { c = iI6C[s2x]; if (c < 128) { m2x.push(String.fromCharCode(c));
                s2x++ } else if (c > 191 && c < 224) { m2x.push(String.fromCharCode((c & 31) << 6 | iI6C[s2x + 1] & 63));
                s2x += 2 } else { m2x.push(String.fromCharCode((c & 15) << 12 | (iI6C[s2x + 1] & 63) << 6 | iI6C[s2x + 2] & 63));
                s2x += 3 } } return m2x.join("") }; var csl7e = function() { var gV5a = /\r\n/g; return function(j2x) { j2x = j2x.replace(gV5a, "\n"); var m2x = [],
                nj7c = String.fromCharCode(237); if (nj7c.charCodeAt(0) < 0)
                for (var i = 0, l = j2x.length, c; i < l; i++) { c = j2x.charCodeAt(i);
                    c > 0 ? m2x.push(c) : m2x.push(256 + c >> 6 | 192, 256 + c & 63 | 128) } else
                    for (var i = 0, l = j2x.length, c; i < l; i++) { c = j2x.charCodeAt(i); if (c < 128) m2x.push(c);
                        else if (c > 127 && c < 2048) m2x.push(c >> 6 | 192, c & 63 | 128);
                        else m2x.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128) }
            return m2x } }(); var Hk3x = function(iI6C) { var s2x = 0,
            m2x = [],
            eC4G = iI6C.length % 3; if (eC4G == 1) iI6C.push(0, 0); if (eC4G == 2) iI6C.push(0); while (s2x < iI6C.length) { m2x.push(QS6M[iI6C[s2x] >> 2], QS6M[(iI6C[s2x] & 3) << 4 | iI6C[s2x + 1] >> 4], QS6M[(iI6C[s2x + 1] & 15) << 2 | iI6C[s2x + 2] >> 6], QS6M[iI6C[s2x + 2] & 63]);
            s2x += 3 } if (eC4G == 1) m2x[m2x.length - 1] = m2x[m2x.length - 2] = "="; if (eC4G == 2) m2x[m2x.length - 1] = "="; return m2x.join("") }; var csi7b = function() { var qN8F = /\n|\r|=/g; return function(j2x) { var s2x = 0,
                m2x = [];
            j2x = j2x.replace(qN8F, ""); for (var i = 0, l = j2x.length; i < l; i += 4) m2x.push(Bl1x[j2x.charAt(i)] << 2 | Bl1x[j2x.charAt(i + 1)] >> 4, (Bl1x[j2x.charAt(i + 1)] & 15) << 4 | Bl1x[j2x.charAt(i + 2)] >> 2, (Bl1x[j2x.charAt(i + 2)] & 3) << 6 | Bl1x[j2x.charAt(i + 3)]); var bq3x = m2x.length,
                eC4G = j2x.length % 4; if (eC4G == 2) m2x = m2x.slice(0, bq3x - 2); if (eC4G == 3) m2x = m2x.slice(0, bq3x - 1); return m2x } }();
    p.ctw7p = function(j2x) { return cso7h(csi7b(j2x)) };
    p.csf7Y = function(j2x) { try { return window.btoa(j2x) } catch (ex) { return Hk3x(csl7e(j2x)) } } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        N3x = c2x("nej.p"),
        k2x = c2x("nej.u"),
        n2x = c2x("nm.l"),
        D2x = c2x("nm.w"),
        bI3x = c2x("nej.ui"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K3x; var TYPE_MAP = { 13: "playlist", 17: "program", 18: "song", 19: "album" };
    n2x.bLM9D = NEJ.C();
    b2x = n2x.bLM9D.O3x(n2x.dW4a);
    b2x.bZ3x = function() { this.ca3x = "m-download-layer" };
    b2x.bR3x = function() { this.cc3x(); var i2x = a1x.I2x(this.o2x, "j-flag");
        this.bmM3x = i2x[0];
        this.bmG3x = i2x[1];
        this.bLS9J = i2x[2];
        v2x.bp3x("/client/version/get", { type: "json", onload: this.cse7X.g2x(this) }); if (N3x.ZM9D.mac) { a1x.w2x(this.bmM3x.parentNode, "f-hide");
            a1x.y2x(this.bmG3x.parentNode, "f-hide");
            a1x.y2x(this.bLS9J, "f-hide") } else { a1x.y2x(this.bmM3x.parentNode, "f-hide");
            a1x.w2x(this.bmG3x.parentNode, "f-hide");
            a1x.w2x(this.bLS9J, "f-hide") } };
    b2x.bk3x = function(e2x) { e2x.clazz = " m-layer-down";
        e2x.parent = e2x.parent || document.body;
        e2x.title = "下载";
        e2x.draggable = !0;
        e2x.destroyalbe = !0;
        e2x.mask = true;
        this.bl3x(e2x);
        this.bU3x([
            [this.o2x, "click", this.bO3x.g2x(this)]
        ]);
        this.eg4k = TYPE_MAP[e2x.type];
        this.gx5C = e2x.id };
    b2x.bC3x = function() { this.bH3x() };
    b2x.zs1x = function() { this.bo3x() };
    b2x.BZ2x = function(d2x) { this.z2x("onok", A2x);
        this.bo3x() };
    b2x.bO3x = function(d2x) { var f2x = h2x.U3x(d2x, "d:action"); switch (a1x.u2x(f2x, "action")) {
            case "download":
                this.bo3x();
                window.open(a1x.u2x(f2x, "src")); break;
            case "orpheus":
                this.bo3x();
                location.href = "orpheus://" + k2x.csf7Y(JSON.stringify({ type: this.eg4k, id: this.gx5C, cmd: "download" })); break } };
    b2x.cse7X = function(d2x) { if ((d2x || Y3x).code == 200) { this.GF3x = d2x.data;
            this.bmM3x.innerText = "V" + this.GF3x.mac;
            this.bmG3x.innerText = "V" + this.GF3x.pc } };
    l2x.RV7O = function(e2x) { n2x.bLM9D.B2x(e2x).M3x() } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        k2x = c2x("nej.u"),
        p2x = c2x("nm.d"),
        bM3x = {};
    p2x.x2x = function(J3x) { return bM3x[J3x] };
    p2x.om8e = function(J3x, bc3x) { bM3x[J3x] = bc3x };
    p2x.eQ5V = function(j2x) { k2x.ee4i(j2x, function(r2x, J3x) { var bc3x = bM3x[J3x] || {};
            NEJ.X(bc3x, r2x);
            bM3x[J3x] = bc3x }) } })();
(function() { var c2x = NEJ.P,
        bm3x = NEJ.F,
        ba3x = c2x("nej.h");
    ba3x.RW7P = function(J3x) { return localStorage.getItem(J3x) };
    ba3x.RX7Q = function(J3x, A2x) { localStorage.setItem(J3x, A2x) };
    ba3x.blL2x = function(J3x) { localStorage.removeItem(J3x) };
    ba3x.blK2x = function() { localStorage.clear() };
    ba3x.csd7W = function() { var m2x = []; for (var i = 0, l = localStorage.length; i < l; i++) m2x.push(localStorage.key(i)); return m2x };
    ba3x.blD2x = function() {
        (document.onstorageready || bm3x)() };
    ba3x.blB2x = function() { return !0 } })();
(function() { var c2x = NEJ.P,
        N3x = c2x("nej.p"),
        iA6u = c2x("nej.c"),
        ba3x = c2x("nej.h"),
        rs8k; if (N3x.mp7i.trident || !!window.localStorage) return; var csc7V = function() { var qD8v, eZ5e; var bfw1x = function() { qD8v = document.createElement("div");
            NEJ.X(qD8v.style, { position: "absolute", top: 0, left: 0, width: "1px", height: "1px", zIndex: 1e4, overflow: "hidden" });
            document.body.insertAdjacentElement("afterBegin", qD8v);
            qD8v.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iA6u.x2x("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>' }; var Pg6a = function() { eZ5e = window.clearTimeout(eZ5e); var hb5g = qD8v.getElementsByTagName("object")[0]; if (!!hb5g.initStorage) { delete qD8v;
                rs8k = hb5g;
                rs8k.initStorage("nej-storage");
                (document.onstorageready || bm3x)(); return } eZ5e = window.setTimeout(Pg6a, 500) }; return function() { if (!!rs8k) return;
            bfw1x();
            Pg6a() } }();
    ba3x.RW7P = ba3x.RW7P.ec4g(function(d2x) { d2x.stopped = !0; if (!rs8k) return;
        d2x.value = rs8k.getItem(d2x.args[0]) });
    ba3x.RX7Q = ba3x.RX7Q.ec4g(function(d2x) { d2x.stopped = !0; if (!rs8k) return; var bg3x = d2x.args;
        rs8k.setItem(bg3x[0], bg3x[1]) });
    ba3x.blL2x = ba3x.blL2x.ec4g(function(d2x) { d2x.stopped = !0; if (!rs8k) return;
        rs8k.removeItem(d2x.args[0]) });
    ba3x.blK2x = ba3x.blK2x.ec4g(function(d2x) { d2x.stopped = !0; if (!!rs8k) rs8k.clear() });
    ba3x.blD2x = ba3x.blD2x.ec4g(function(d2x) { d2x.stopped = !0;
        csc7V() });
    ba3x.blB2x = ba3x.blB2x.ec4g(function(d2x) { d2x.stopped = !0;
        d2x.value = !!rs8k }) })();
(function() { var c2x = NEJ.P,
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        ba3x = c2x("nej.h"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        R3x = {};
    v2x.vs0x = function(J3x, A2x) { var brs4w = JSON.stringify(A2x); try { ba3x.RX7Q(J3x, brs4w) } catch (ex) { console.error(ex.message);
            console.error(ex) } if (brs4w != ba3x.RW7P(J3x)) R3x[J3x] = A2x; return this };
    v2x.th9Y = function(J3x) { var j2x = JSON.parse(ba3x.RW7P(J3x) || "null"); return j2x == null ? R3x[J3x] : j2x };
    v2x.brA4E = function(J3x, A2x) { var j2x = v2x.th9Y(J3x); if (j2x == null) { j2x = A2x;
            v2x.vs0x(J3x, j2x) } return j2x };
    v2x.Qr6l = function(J3x) { delete R3x[J3x];
        ba3x.blL2x(J3x); return this };
    v2x.ctx7q = function() { var bll2x = function(r2x, J3x, bv3x) { delete bv3x[J3x] }; return function() { k2x.ee4i(R3x, bll2x);
            ba3x.blK2x(); return this } }();
    v2x.cty7r = function(m2x) { m2x = m2x || {};
        k2x.be3x(ba3x.csd7W(), function(J3x) { m2x[J3x] = v2x.th9Y(J3x) }); return m2x };
    H2x.fr5w.B2x({ element: document, event: "storageready", oneventadd: function() { if (ba3x.blB2x()) { document.onstorageready() } } }); var crZ7S = function() { var crX7Q = function(A2x, J3x, bv3x) { ba3x.RX7Q(J3x, JSON.stringify(A2x));
            delete bv3x[J3x] }; return function() { k2x.ee4i(R3x, crX7Q) } }();
    h2x.q2x(document, "storageready", crZ7S);
    ba3x.blD2x() })();
(function() { var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        N3x = c2x("nej.ut"),
        Hq3x; if (!!N3x.blc2x) return;
    N3x.blc2x = NEJ.C();
    Hq3x = N3x.blc2x.O3x(N3x.cy3x);
    Hq3x.cl3x = function() { var fW5b = +(new Date),
            mc7V = "dat-" + fW5b; return function() { this.cs3x(); var R3x = this.constructor[mc7V]; if (!R3x) { R3x = {};
                this.constructor[mc7V] = R3x } this.P3x = R3x } }();
    Hq3x.x2x = function(J3x) { return this.P3x[J3x] };
    Hq3x.om8e = function(J3x, A2x) { var lT7M = this.P3x[J3x];
        this.P3x[J3x] = A2x;
        h2x.z2x(localCache, "cachechange", { key: J3x, type: "set", oldValue: lT7M, newValue: A2x }); return this };
    Hq3x.cH4L = function(J3x) { var lT7M = this.P3x[J3x];
        k2x.Wp8h(this.P3x, J3x);
        h2x.z2x(localCache, "cachechange", { key: J3x, type: "delete", oldValue: lT7M, newValue: undefined }); return lT7M };
    Hq3x.Sz7s = function(Dz2x) { return NEJ.Q(this.P3x, Dz2x) };
    window.localCache = N3x.blc2x.B2x();
    N3x.fr5w.B2x({ element: localCache, event: "cachechange" }) })();
(function() { var c2x = NEJ.P,
        eU5Z = NEJ.R,
        bm3x = NEJ.F,
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        N3x = c2x("nej.ut"),
        mc7V = "dat-" + +(new Date),
        mf7Y; if (!!N3x.bkX2x) return;
    N3x.bkX2x = NEJ.C();
    mf7Y = N3x.bkX2x.O3x(N3x.cy3x);
    mf7Y.cl3x = function() { this.cs3x();
        this.P3x = this.constructor[mc7V]; if (!this.P3x) { this.P3x = {};
            this.P3x[mc7V + "-l"] = {};
            this.constructor[mc7V] = this.P3x } };
    mf7Y.qG8y = function(J3x) { return this.P3x[J3x] };
    mf7Y.ok8c = function(J3x, A2x) { this.P3x[J3x] = A2x };
    mf7Y.ks6m = function(J3x, kr6l) { var j2x = this.qG8y(J3x); if (j2x == null) { j2x = kr6l;
            this.ok8c(J3x, j2x) } return j2x };
    mf7Y.crW7P = function(J3x) { if (J3x != null) { delete this.P3x[J3x]; return } k2x.ee4i(this.P3x, function(r2x, J3x) { if (J3x == mc7V + "-l") return;
            this.crW7P(J3x) }, this) };
    mf7Y.ctz7s = function(J3x) { if (!!v2x.Qr6l) return v2x.Qr6l(J3x) };
    mf7Y.crR7K = function(J3x) { if (!!v2x.th9Y) return v2x.th9Y(J3x) };
    mf7Y.crQ7J = function(J3x, A2x) { if (!!v2x.vs0x) v2x.vs0x(J3x, A2x) };
    mf7Y.Dq2x = function(J3x, kr6l) { var j2x = this.Qh6b(J3x); if (j2x == null) { j2x = kr6l;
            this.vi0x(J3x, j2x) } return j2x };
    mf7Y.Qh6b = function(J3x) { var j2x = this.qG8y(J3x); if (j2x != null) return j2x;
        j2x = this.crR7K(J3x); if (j2x != null) this.ok8c(J3x, j2x); return j2x };
    mf7Y.vi0x = function(J3x, A2x) { this.crQ7J(J3x, A2x);
        this.ok8c(J3x, A2x) };
    mf7Y.bwh5m = function(J3x) { if (J3x != null) { delete this.P3x[J3x]; if (!!v2x.Qr6l) v2x.Qr6l(J3x); return } k2x.ee4i(this.P3x, function(r2x, J3x) { if (J3x == mc7V + "-l") return;
            this.bwh5m(J3x) }, this) };
    mf7Y.ctA7t = function() { this.bwh5m(); return this };
    mf7Y.ctB7u = function(J3x) { var j2x = this.P3x[mc7V + "-l"];
        delete j2x[J3x] };
    mf7Y.bkz2x = function(J3x) { var j2x = this.P3x[mc7V + "-l"],
            bg3x = eU5Z.slice.call(arguments, 1);
        k2x.be3x(j2x[J3x], function(dq4u) { try { dq4u.apply(null, bg3x) } catch (ex) { console.error(ex.message);
                console.error(ex.stack) } });
        delete j2x[J3x] };
    mf7Y.bkx2x = function(J3x, dq4u) { dq4u = dq4u || bm3x; var i2x = this.P3x[mc7V + "-l"][J3x]; if (!i2x) { i2x = [dq4u];
            this.P3x[mc7V + "-l"][J3x] = i2x; return !1 } i2x.push(dq4u); return !0 };
    mf7Y.crL7E = function(i2x, bj3x, fY5d) { if (!i2x) return !1;
        bj3x = parseInt(bj3x) || 0;
        fY5d = parseInt(fY5d) || 0; if (!fY5d) { if (!i2x.loaded) return !1;
            fY5d = i2x.length } if (!!i2x.loaded) fY5d = Math.min(fY5d, i2x.length - bj3x); for (var i = 0; i < fY5d; i++)
            if (!i2x[bj3x + i]) return !1; return !0 } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        k2x = c2x("nej.u"),
        N3x = c2x("nej.ut"),
        b2x, K3x; if (!!N3x.Qf6Z) return;
    N3x.Qf6Z = NEJ.C();
    b2x = N3x.Qf6Z.O3x(N3x.bkX2x);
    K3x = N3x.Qf6Z.cg3x;
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.uU0x = e2x.key || "id";
        this.bb3x = e2x.data || Y3x;
        this.crK7D = !!e2x.autogc;
        this.crI7B(e2x.id) };
    b2x.bC3x = function() { this.bH3x(); if (!!this.dN4R) { this.bwW5b() } };
    b2x.crI7B = function(C2x) { var R3x; if (!!C2x) { R3x = this.P3x[C2x]; if (!R3x) { R3x = {};
                this.P3x[C2x] = R3x } } R3x = R3x || this.P3x;
        R3x.hash = R3x.hash || {};
        this.Qd6X = R3x };
    b2x.bwW5b = function() { this.dN4R = window.clearTimeout(this.dN4R); var bv3x = {};
        k2x.ee4i(this.Qd6X, function(i2x, J3x) { if (J3x == "hash") return; if (!k2x.en4r(i2x)) return;
            k2x.be3x(i2x, function(r2x) { if (!r2x) return;
                bv3x[r2x[this.uU0x]] = !0 }, this) }, this);
        k2x.ee4i(this.SL7E(), function(r2x, C2x, dI4M) { if (!bv3x[C2x]) { delete dI4M[C2x] } }) };
    b2x.crH7A = function() { if (!!this.dN4R) { this.dN4R = window.clearTimeout(this.dN4R) } this.dN4R = window.setTimeout(this.bwW5b.g2x(this), 150) };
    b2x.zz1x = function(r2x, SO7H) { r2x = this.bxK5P(r2x, SO7H) || r2x; if (!r2x) return null; var J3x = r2x[this.uU0x]; if (J3x != null) { var hF5K = this.SL7E()[J3x]; if (!!hF5K) r2x = NEJ.X(hF5K, r2x);
            this.SL7E()[J3x] = r2x } delete r2x.bxR5W; return r2x };
    b2x.bxK5P = bm3x;
    b2x.bkd2x = function(J3x, r2x) { if (!r2x) return; if (!k2x.en4r(r2x)) { var i2x = this.gO5T(J3x),
                r2x = this.zz1x(r2x, J3x); if (!!r2x) i2x.unshift(r2x); return } k2x.me7X(r2x, this.bkd2x.g2x(this, J3x)) };
    b2x.PY6S = function(J3x, cq3x) { var i2x = this.gO5T(J3x);
        i2x.length = Math.max(i2x.length, cq3x);
        this.bkb2x(J3x); return this };
    b2x.jF6z = function(J3x) { return this.gO5T(J3x).length };
    b2x.bkb2x = function(J3x, nk7d) { this.gO5T(J3x).loaded = nk7d != !1; return this };
    b2x.SP7I = function(J3x) { return !!this.gO5T(J3x).loaded };
    b2x.re8W = function(J3x, i2x) { this.sY9P(J3x);
        this.bjQ2x({ key: J3x, offset: 0, limit: i2x.length + 1 }, { list: i2x, total: i2x.length }) };
    b2x.gO5T = function() { var EA2x = function(J3x) { return (J3x || "") + (!J3x ? "" : "-") + "list" }; return function(J3x) { var J3x = EA2x(J3x),
                i2x = this.Qd6X[J3x]; if (!i2x) { i2x = [];
                this.Qd6X[J3x] = i2x } return i2x } }();
    b2x.SL7E = function() { var dI4M = this.Qd6X.hash; if (!dI4M) { dI4M = {};
            this.Qd6X.hash = dI4M } return dI4M };
    b2x.bjP2x = function() { var EA2x = function(e2x) { return "r-" + e2x.key }; return function(e2x) { var hV5a = NEJ.X({}, e2x),
                mD7w = EA2x(hV5a); if (!this.bkx2x(mD7w, this.z2x.g2x(this))) { hV5a.rkey = mD7w;
                hV5a.onload = this.crG7z.g2x(this, hV5a);
                this.z2x("dopullrefresh", hV5a) } return this } }();
    b2x.crG7z = function(e2x, i2x) { this.bkd2x(e2x.key, i2x);
        this.bkz2x(e2x.rkey, "onpullrefresh", e2x) };
    b2x.nC7v = function() { var EA2x = function(e2x) { return "r-" + e2x.key + "-" + e2x.offset + "-" + e2x.limit }; return function(e2x) { e2x = e2x || Y3x; var hV5a = { key: "" + e2x.key || "", ext: e2x.ext || null, data: e2x.data || null, offset: parseInt(e2x.offset) || 0, limit: parseInt(e2x.limit) || 0 },
                i2x = this.gO5T(hV5a.key); if (this.crL7E(i2x, hV5a.offset, hV5a.limit)) { this.z2x("onlistload", hV5a); return this } var mD7w = EA2x(hV5a); if (!this.bkx2x(mD7w, this.z2x.g2x(this))) { hV5a.rkey = mD7w;
                hV5a.onload = this.bjQ2x.g2x(this, hV5a);
                this.z2x("doloadlist", hV5a) } return this } }();
    b2x.bjQ2x = function() { var Eq2x = function(r2x, s2x, i2x) { if (!!r2x) { return !0 } i2x.splice(s2x, 1) }; return function(e2x, m2x) { e2x = e2x || Y3x; var J3x = e2x.key,
                bj3x = e2x.offset,
                bzm6g = this.gO5T(J3x); var i2x = m2x || []; if (!k2x.en4r(i2x)) { i2x = m2x.result || m2x.list || []; var cq3x = parseInt(m2x.total); if (!isNaN(cq3x) || cq3x > i2x.length) { this.PY6S(J3x, cq3x) } } k2x.be3x(i2x, function(r2x, s2x) { bzm6g[bj3x + s2x] = this.zz1x(r2x, J3x) }, this); if (i2x.length < e2x.limit) { this.bkb2x(J3x);
                k2x.me7X(bzm6g, Eq2x) } this.bkz2x(e2x.rkey, "onlistload", e2x) } }();
    b2x.sY9P = function() { var Eq2x = function(r2x, s2x, i2x) { i2x.splice(s2x, 1) }; return function(J3x) { var i2x = this.gO5T(J3x);
            k2x.me7X(i2x, Eq2x);
            this.bkb2x(J3x, !1); if (this.crK7D) { this.crH7A() } return this } }();
    b2x.bzq6k = function(r2x, SO7H) { return !r2x.bxR5W };
    b2x.ej4n = function(C2x) { return this.SL7E()[C2x] };
    b2x.ctC7v = function(C2x) { var r2x = this.ej4n(C2x); if (!!r2x) r2x.bxR5W = !0 };
    b2x.Te7X = function() { var EA2x = function(e2x) { return "r-" + e2x.key + "-" + e2x.id }; return function(e2x) { e2x = e2x || Y3x; var C2x = e2x[this.uU0x],
                hV5a = { id: C2x, ext: e2x.ext, data: e2x.data || {}, key: "" + e2x.key || "" };
            r2x = this.ej4n(C2x);
            hV5a.data[this.uU0x] = C2x; if (!!r2x && this.bzq6k(r2x, hV5a.key)) { this.z2x("onitemload", hV5a); return this } var mD7w = EA2x(hV5a); if (!this.bkx2x(mD7w, this.z2x.g2x(this))) { hV5a.rkey = mD7w;
                hV5a.onload = this.crD7w.g2x(this, hV5a);
                this.z2x("doloaditem", hV5a) } return this } }();
    b2x.crD7w = function(e2x, r2x) { e2x = e2x || Y3x;
        this.zz1x(r2x, e2x.key);
        this.bkz2x(e2x.rkey, "onitemload", e2x) };
    b2x.iF6z = function(e2x) { e2x = NEJ.X({}, e2x);
        e2x.onload = this.wt0x.g2x(this, e2x);
        this.z2x("doadditem", e2x) };
    b2x.wt0x = function(e2x, r2x) { var J3x = e2x.key;
        r2x = this.zz1x(r2x, J3x); if (!!r2x) { var eB4F = 0,
                i2x = this.gO5T(J3x); if (!e2x.push) { eB4F = -1; var bj3x = e2x.offset || 0;
                i2x.splice(bj3x, 0, r2x) } else if (i2x.loaded) { eB4F = 1;
                i2x.push(r2x) } else { i2x.length++ } } var d2x = { key: J3x, flag: eB4F, data: r2x, action: "add", ext: e2x.ext };
        this.z2x("onitemadd", d2x); return d2x };
    b2x.Hv3x = function(e2x) { e2x = NEJ.X({}, e2x);
        e2x.onload = this.biT2x.g2x(this, e2x);
        this.z2x("dodeleteitem", e2x) };
    b2x.biT2x = function(e2x, bAa6U) { var r2x, J3x = e2x.key; if (!!bAa6U) { r2x = this.ej4n(e2x.id) || null; var C2x = e2x.id,
                crC7v = this.uU0x,
                i2x = this.gO5T(J3x),
                s2x = k2x.cV4Z(i2x, function(hF5K) { return !!hF5K && hF5K[crC7v] == C2x }); if (s2x >= 0) i2x.splice(s2x, 1) } var d2x = { key: J3x, data: r2x, action: "delete", ext: e2x.ext };
        this.z2x("onitemdelete", d2x); return d2x };
    b2x.Tn7g = function(e2x) { e2x = NEJ.X({}, e2x);
        e2x.onload = this.crA7t.g2x(this, e2x);
        this.z2x("doupdateitem", e2x) };
    b2x.crA7t = function(e2x, r2x) { var J3x = e2x.key; if (!!r2x) r2x = this.zz1x(r2x, J3x); var d2x = { key: J3x, data: r2x, action: "update", ext: e2x.ext };
        this.z2x("onitemupdate", d2x); return d2x } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        k2x = c2x("nej.u"),
        N3x = c2x("nej.ut"),
        b2x; if (!!N3x.biH2x) return;
    N3x.biH2x = NEJ.C();
    b2x = N3x.biH2x.O3x(N3x.Qf6Z);
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.biI2x({ doloadlist: this.TA7t.g2x(this), doloaditem: this.bih2x.g2x(this), doadditem: this.bAx6r.g2x(this), dodeleteitem: this.TM7F.g2x(this), doupdateitem: this.TP7I.g2x(this), dopullrefresh: this.bAG6A.g2x(this) }) };
    b2x.TA7t = bm3x;
    b2x.bAG6A = bm3x;
    b2x.bih2x = bm3x;
    b2x.bAx6r = bm3x;
    b2x.TM7F = bm3x;
    b2x.TP7I = bm3x })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"),
        b2x, K3x;
    p2x.gW5b = NEJ.C();
    b2x = p2x.gW5b.O3x(H2x.biH2x);
    b2x.ck3x = function() { var Px6r = location.protocol + "//" + location.host; var crz7s = function(bs3x, j2x) { var bv3x = { conf: {}, data: {}, urls: [] };
            k2x.be3x(bs3x, function(J3x, s2x, i2x) { var bc3x = p2x.x2x(J3x); if (!bc3x) return; var bhz1x = bAZ6T(bc3x.url, j2x[J3x]);
                bv3x.urls.push(bhz1x);
                bv3x.conf[bhz1x] = bc3x;
                bv3x.data[bhz1x] = JSON.stringify(j2x[J3x] == null ? "" : j2x[J3x]) }); return bv3x }; var bAZ6T = function(V3x, j2x) { return V3x.replace(/\{(.*?)\}/gi, function($1, $2) { return j2x[$2] || $1 }) }; var bBf6Z = function(bc3x, e2x, d2x) { h2x.z2x(window, "requesterror", d2x); if (!!d2x.stopped) return; var HC3x = bc3x.onerror || e2x.onerror; if (k2x.fe5j(HC3x)) { this.z2x(HC3x, d2x, e2x) } else {
                (HC3x || bm3x).call(this, d2x, e2x) } var d2x = { result: d2x, option: e2x };
            this.z2x("onerror", d2x); if (!d2x.stopped)(bc3x.onmessage || bm3x).call(this, d2x.result.code, d2x.result) }; var bBn6h = function(Q3x, bc3x, e2x) { var m2x = Q3x; if (k2x.gb5g(bc3x.format)) { m2x = bc3x.format.call(this, Q3x, e2x) } return m2x }; var xc0x = function(Q3x, bc3x, e2x, te9V) { if (k2x.gb5g(bc3x.beforeload)) { bc3x.beforeload.call(this, Q3x, e2x, bc3x) } if (Q3x && Q3x.code != null && Q3x.code != 200) { bBf6Z.call(this, bc3x, e2x, { key: e2x.key, code: Q3x.code, message: Q3x.message || "", captchaId: Q3x.captchaId, ext: Q3x }); return } var m2x = Q3x; if (!te9V) { m2x = bBn6h.call(this, Q3x, bc3x, e2x) } else if (k2x.gb5g(bc3x.format)) { var bhq1x = [];
                k2x.be3x(te9V.urls, function(V3x) { bhq1x.push(bBn6h.call(this, Q3x[V3x], te9V.conf[V3x], e2x)) }, this);
                bhq1x.push(e2x);
                m2x = bc3x.format.apply(this, bhq1x) } var sU9L = bc3x.onload || e2x.onload,
                bBC6w = bc3x.finaly || e2x.finaly || bm3x; if (k2x.fe5j(sU9L)) { bBC6w.call(this, this.z2x(sU9L, m2x), e2x) } else { bBC6w.call(this, (sU9L || bm3x).call(this, m2x), e2x) } }; var yp0x = function(bc3x, e2x, bQ3x) { bBf6Z.call(this, bc3x, e2x, { key: e2x.key, code: bQ3x.code || -1, message: bQ3x.message || "" }) }; return function(bc3x, e2x) { if (k2x.fe5j(bc3x)) { bc3x = p2x.x2x(bc3x) } delete e2x.value;
            (bc3x.filter || bm3x).call(this, e2x, bc3x); var Q3x = e2x.value; if (!!Q3x) { xc0x.call(this, Q3x, bc3x, e2x); return } var V3x, j2x = e2x.data || Y3x,
                wk0x = { cookie: !0, type: bc3x.rtype || "json", method: bc3x.type || "POST", onerror: yp0x.g2x(this, bc3x, e2x), noescape: bc3x.noescape }; if (k2x.en4r(bc3x.url)) { var te9V = crz7s(bc3x.url, j2x);
                V3x = Px6r + "/api/batch";
                wk0x.data = k2x.df4j(te9V.data);
                wk0x.onload = xc0x.dV4Z(this, bc3x, e2x, te9V);
                wk0x.headers = { "batch-method": "POST" };
                delete te9V.data } else { var kV7O = bc3x.url.indexOf(":") < 0 ? Px6r : "";
                V3x = bAZ6T(kV7O + bc3x.url, j2x);
                wk0x.data = k2x.df4j(e2x.data);
                wk0x.onload = xc0x.dV4Z(this, bc3x, e2x) } if (wk0x.method == "GET") wk0x.query = wk0x.data; return v2x.bp3x(V3x, wk0x) } }();
    b2x.Bu1x = function() { var fU5Z = /^get|list|pull$/i; return function(bBP6J, e2x) { var J3x = e2x.key,
                bc3x = p2x.x2x(J3x.split("-")[0] + "-" + bBP6J); if (fU5Z.test(bBP6J) && J3x.indexOf("post-") < 0) bc3x.type = "GET";
            this.ck3x(bc3x, e2x) } }();
    b2x.ctD7w = function(J3x, i2x) { var cq3x = i2x.length;
        this.bjQ2x({ key: J3x, offset: 0, limit: cq3x + 1 }, { list: i2x, total: cq3x }) };
    b2x.TA7t = function(e2x) { this.Bu1x("list", e2x) };
    b2x.bih2x = function(e2x) { this.Bu1x("get", e2x) };
    b2x.bAG6A = function(e2x) { this.Bu1x("pull", e2x) };
    b2x.bAx6r = function(e2x) { this.Bu1x("add", e2x) };
    b2x.TM7F = function(e2x) { this.Bu1x("del", e2x) };
    b2x.TP7I = function(e2x) { this.Bu1x("update", e2x) };
    b2x.cru7n = function(r2x) { this.zz1x(r2x) };
    H2x.fr5w.B2x({ element: window, event: "requesterror" }) })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"),
        p2x = c2x("nm.d"),
        bhp1x = {},
        b2x, K3x; var sS9J = function(m2x, e2x) { m2x.conf = e2x.conf; return m2x };
    p2x.eQ5V({ "res-mv-get": { type: "GET", url: "/api/v1/mv/detail", format: function(Q3x, e2x) { return sS9J({ mv: Q3x }, e2x) } }, "res-song-get": { type: "GET", url: "/api/song/detail", format: function(m2x, e2x) { if (!!m2x.songs && m2x.songs.length > 0) m2x.song = m2x.songs[0];
                else m2x.song = bhp1x;
                delete m2x.songs; return sS9J(m2x, e2x) }, filter: function(e2x) { e2x.data.ids = "[" + e2x.data.id + "]" } }, "res-program-get": { type: "GET", url: "/api/dj/program/detail", format: sS9J }, "res-album-get": { type: "GET", url: "/api/album/{id}", format: sS9J }, "res-playlist-get": { type: "GET", url: "/api/playlist/detail", format: function(m2x, e2x) { m2x.playlist = m2x.result;
                delete m2x.result; return sS9J(m2x, e2x) } }, "res-mv-play": { type: "GET", url: "/api/song/mv/play", format: sS9J }, "res-playlist-play": { type: "GET", url: "/api/playlist/update/playcount", format: sS9J }, "res-program-play": { type: "GET", url: "/api/dj/program/listen", format: sS9J }, "res-djradio-get": { type: "GET", url: "/api/dj/program/byradio", filter: function(e2x) { var i2x = e2x.data.id.split("-");
                e2x.data.radioId = i2x[0];
                e2x.data.asc = i2x[1] == 2;
                e2x.data.limit = 1e3;
                delete e2x.data.id }, format: function(Q3x, e2x) { var crt7m = { id: e2x.data.radioId, programs: Q3x.programs }; return sS9J({ djradio: crt7m }, e2x) } }, "res-hotSongs-get": { type: "GET", url: "/api/artist/{id}", format: sS9J }, "res-lyric-get": { type: "GET", url: "/api/song/lyric", filter: function(e2x) { e2x.data.lv = 0;
                e2x.data.tv = 0 }, format: function(m2x, e2x) { var uH9y = { lyric: "", nolyric: true }; if (m2x.code == 200 && m2x.lrc && m2x.lrc.lyric) { uH9y.lyric = m2x.lrc.lyric;
                    uH9y.nolyric = false } else { uH9y.nolyric = true } return sS9J({ lyric: uH9y }, e2x) } } });
    p2x.uF9w = NEJ.C();
    b2x = p2x.uF9w.O3x(p2x.gW5b);
    b2x.crr7k = function(t2x, cF4J) { return this.qG8y(this.Uc7V(t2x, cF4J)) };
    b2x.Pm6g = function(t2x, cF4J, e2x) { e2x = e2x || {}; var j2x = this.qG8y(this.Uc7V(t2x, cF4J)); if (j2x && (t2x != 13 && t2x != 19 || e2x.conf && e2x.conf.useCache)) { this.z2x("onresourceload", t2x, cF4J, j2x, e2x.conf); return } e2x.data = { id: cF4J };
        e2x.onload = this.crq7j.g2x(this, t2x, cF4J);
        e2x.onerror = this.crp7i.g2x(this, t2x, cF4J);
        this.ck3x("res-" + this.zM1x(t2x) + "-get", e2x) };
    b2x.crq7j = function(t2x, cF4J, m2x) { var j2x = m2x[this.zM1x(t2x)];
        this.ok8c(this.Uc7V(t2x, cF4J), j2x);
        this.z2x("onresourceload", t2x, cF4J, j2x, m2x.conf) };
    b2x.crp7i = function(t2x, cF4J, m2x, e2x) { if (m2x.code != 404) { this.z2x("onresourceerror", t2x, cF4J, m2x.code); return } this.ok8c(this.Uc7V(t2x, cF4J), bhp1x);
        this.z2x("onresourceload", t2x, cF4J, bhp1x, e2x.conf) };
    b2x.ctE7x = function(t2x, e2x) { this.ck3x("res-" + this.zM1x(t2x) + "-play", e2x) };
    b2x.Uc7V = function(t2x, cF4J) { return "res-" + this.zM1x(t2x) + "-" + cF4J };
    b2x.zM1x = function(t2x) { var bv3x = { 2: "hotSongs", 13: "playlist", 17: "program", 18: "song", 19: "album", 21: "mv", 41: "lyric", 70: "djradio" }; return bv3x[t2x] };
    p2x.uF9w.HE3x = function(t2x, cF4J) { if (!this.eK5P) this.eK5P = p2x.uF9w.B2x({}); return this.eK5P.crr7k(t2x, cF4J) } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        p2x = c2x("nm.d"),
        bgW1x = /^[1-9][0-9]*$/,
        b2x, K3x; var LOCAL_LOG_KEY = "local-log";
    p2x.eQ5V({ "bi-log": { url: "/api/feedback/weblog" }, "bi-batch-log": { url: "/api/feedback/weblog" }, "plus-mv-count": { url: "/api/song/mv/play" }, "plus-song-count": { url: "/api/song/play" }, "plus-dj-count": { type: "GET", url: "/api/dj/program/listen" }, "plus-playlist-count": { type: "GET", url: "/api/playlist/update/playcount" } });
    p2x.hL5Q = NEJ.C();
    b2x = p2x.hL5Q.O3x(p2x.gW5b);
    b2x.gf5k = function(W3x, bc3x) { if (!W3x || !bc3x) return; if (k2x.fe5j(bc3x)) { try { bc3x = JSON.parse(bc3x) } catch (_e) { if (console && console.warn) { console.warn("bilog error: ", a1x) } } } if (!k2x.ke6Y(bc3x)) return;
        this.ck3x("bi-log", { data: { logs: JSON.stringify([{ action: W3x, json: bc3x }]) } }); if (typeof GEnvType == "string" && GEnvType == "local") { console.log("[BI LOG] action=" + W3x + ", json=" + JSON.stringify(bc3x)) } };
    b2x.Uj8b = function(nh7a) { if (!k2x.en4r(nh7a)) return;
        this.ck3x("bi-batch-log", { data: { logs: JSON.stringify(nh7a) } }) };
    b2x.bDN7G = function(bc3x) { if (!bc3x || !bc3x.type || !bc3x.rid) return; var mS7L = bc3x.type; if (bgW1x.test(mS7L)) { mS7L = this.zM1x(mS7L) } if (!mS7L) return; if (mS7L == "playlist") mS7L = "list";
        this.gf5k("search", { type: mS7L, id: bc3x.rid || null, keyword: bc3x.keyword || null }) };
    b2x.Ph6b = function() { var crk7d = /^\/m\/(song|album|playlist)\?id=(\d+)/; return function(bc3x) { if (!bc3x || !bc3x.type || !bc3x.rid) return; if (bc3x.play === undefined) bc3x.play = true; var mS7L = bc3x.type; if (bgW1x.test(mS7L)) { mS7L = this.zM1x(mS7L) } if (!mS7L) return; if (mS7L == "playlist") mS7L = "list"; var Q3x = { id: bc3x.rid, type: mS7L }; if (mS7L == "song" && bc3x.source) { Q3x.source = this.bEk7d(bc3x.source); if (!!bc3x.sourceid) Q3x.sourceid = bc3x.sourceid } this.gf5k(!bc3x.play ? "addto" : "play", Q3x); if (mS7L == "song" && bc3x.hash && bc3x.hash.match(crk7d)) { this.gf5k(!bc3x.play ? "addto" : "play", { type: RegExp.$1, id: RegExp.$2 }) } } }();
    b2x.bgT1x = function(C2x, bA3x, dJ4N, Cn2x) { var Q3x = { type: "song", wifi: 0, download: 0 }; var crh7a = { 1: "ui", 2: "playend", 3: "interrupt", 4: "exception" };
        Q3x.id = C2x;
        Q3x.time = Math.round(bA3x);
        Q3x.end = k2x.fe5j(Cn2x) ? Cn2x : crh7a[Cn2x] || ""; if (dJ4N && dJ4N.fid) { Q3x.source = this.bEk7d(dJ4N.fid);
            Q3x.sourceId = dJ4N.fdata } this.gf5k("play", Q3x) };
    b2x.bEI7B = function(t2x, cF4J) { if (!t2x || !cF4J) return; if (bgW1x.test(t2x)) t2x = this.zM1x(t2x); if (t2x != "playlist" && t2x != "dj") return; var bc3x = p2x.x2x("plus-" + t2x + "-count"); if (!bc3x) return !1;
        this.ck3x(bc3x, { data: { id: cF4J } }); var R3x = this.ks6m("play-hist-" + t2x, []); if (k2x.cV4Z(R3x, cF4J) < 0) { R3x.push(cF4J); return !0 } return !1 };
    b2x.zM1x = function(t2x) { var bv3x = { 1: "user", 2: "artist", 13: "playlist", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist" }; return bv3x[t2x] };
    b2x.bEk7d = function(HF3x) { var bv3x = { 1: "user", 2: "artist", 13: "list", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist", 32: "search", 33: "search", 34: "event", 35: "msg" }; return bv3x[HF3x] };
    b2x.crf7Y = function(gS5X) { var nh7a = this.Dq2x(LOCAL_LOG_KEY, []);
        nh7a.unshift(gS5X); if (nh7a.length > 200) { nh7a.length = 200 } this.vi0x(LOCAL_LOG_KEY, nh7a) };
    b2x.crd7W = function() { return this.Qh6b(LOCAL_LOG_KEY) } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        n2x = c2x("nm.l"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"); if (!p2x.uF9w) return; var R3x = p2x.uF9w.B2x({ onresourceload: crc7V }); var vR0x = p2x.hL5Q.fX5c();

    function crc7V(t2x, cF4J, j2x, bc3x) { var i2x = []; switch (parseInt(t2x)) {
            case 2:
                i2x = j2x; break;
            case 13:
                i2x = j2x.tracks; break;
            case 18:
                i2x.push(j2x); break;
            case 19:
                i2x = j2x.songs; break;
            case 21:
                if (j2x.mp && j2x.mp.fee && j2x.mp.pl <= 0) { l2x.bgJ1x(j2x.data.id, j2x.mp.fee); return } break } if (l2x.HH3x(i2x, true, null, t2x == 19 ? { source: "album", sourceid: cF4J } : null) == 0) { return } l2x.fd5i({ clazz: "m-layer-w2", bubble: !1, message: bc3x.message }) }

    function cra7T(d2x, qo8g, vL0x, eA4E) { eA4E = eA4E || {}; if (d2x.action == "ok") { if (vL0x) { location.dispatch2("/payfee?songId=" + vL0x) } else { location.dispatch2("/payfee?fee=" + qo8g || 1) } vR0x.gf5k("click", { type: "tobuyvip", name: "box", source: eA4E.source || "song", sourceid: eA4E.sourceid || vL0x || 0 }) } else if (d2x.action == "song") { location.dispatch2("/payfee?singleSong=true&songId=" + vL0x);
            vR0x.gf5k("click", { type: "tobuyone", name: "box", source: eA4E.source || "song", sourceid: eA4E.sourceid || vL0x || 0 }) } }

    function Pc6W(bF3x) { l2x.fd5i({ clazz: "m-layer-w2", bubble: !1, message: bF3x, btntxt: "知道了" }) }

    function Pa6U(bF3x, Q3x) { Pc6W((Q3x || Y3x).toast || bF3x) } l2x.hS5X = function(bF3x, C2x, t2x, cqZ7S, bf3x) { bF3x = bF3x || "由于版权保护，您所在的地区暂时无法使用。"; if (cqZ7S && bf3x && bf3x.privilege && bf3x.privilege.toast) { v2x.bp3x("/api/song/toast", { query: { id: bf3x.id }, type: "json", onload: Pa6U.g2x(this, bF3x), onerror: Pa6U.g2x(this, bF3x) }) } else if (C2x && t2x) { R3x.Pm6g(t2x, C2x, { conf: { message: bF3x, useCache: t2x != 18 } }) } else { Pc6W(bF3x) } };
    l2x.sP9G = function(qo8g, vL0x, t2x, eA4E, mh7a) { var bM3x, oW8O = "m-popup-info",
            bgw1x = "单首购买",
            bgv1x = "马上去开通",
            cA3x = "唱片公司要求，当前歌曲须付费使用。",
            bHk8c = true; try { bM3x = top.api.feeMessage || {} } catch (e) { bM3x = {} } if (qo8g == 1 || qo8g == 8 || qo8g == 16) { if (t2x == "song") { oW8O = "m-popup-song-buy";
                cA3x = bM3x["vip2"] || cA3x;
                bgv1x = bM3x["vip2button"] || "包月购买";
                bgw1x = bM3x["vip2link"] || bgw1x; if (mh7a && mh7a.flag !== undefined) { var bs3x = mh7a.flag.toString(2).split(""); if (parseInt(bs3x.pop(), 10) == 1) { bHk8c = false } } } else { cA3x = bM3x["vip"] || cA3x } } else if (qo8g == 4) { cA3x = bM3x["album"] || cA3x;
            bgv1x = "立即订购" } else { cA3x = bM3x["unknow"] || cA3x } l2x.jk6e({ clazz: "m-layer-w5", html: a1x.bP3x(oW8O, { songTxt: bgw1x, tip: cA3x, oktext: bgv1x, cctext: "以后再说", showSongText: bHk8c }), onaction: cra7T.dV4Z(null, qo8g, vL0x, eA4E) }) };
    l2x.bHp8h = function(hi5n, hg5l) { l2x.gU5Z({ title: "提示", message: "唱片公司要求，该歌曲须下载后播放", btnok: "下载", btncc: "取消", okstyle: "u-btn2-w1", ccstyle: "u-btn2-w1", action: function(t2x) { if (t2x == "ok") { l2x.RV7O({ id: hi5n, type: hg5l }) } } }) };
    l2x.bgJ1x = function(nV7O, qo8g) { var bM3x, cA3x = "唱片公司要求，当前歌曲须付费使用。"; try { bM3x = top.api.feeMessage || {} } catch (e) { bM3x = {} } if (qo8g == 1 || qo8g == 8) { cA3x = bM3x["vip"] || cA3x } else if (qo8g == 4) { cA3x = bM3x["album"] || cA3x } else { cA3x = bM3x["unknow"] || cA3x } return l2x.jk6e({ clazz: "m-layer-w5", html: a1x.bP3x("m-popup-info", { tip: cA3x, oktext: "马上去开通", cctext: "以后再说" }), onaction: function(d2x) { if (d2x.action == "ok") { location.dispatch2("/payfee?mvId=" + nV7O);
                    vR0x.gf5k("click", { type: "tobuyone", name: "box", source: "mv", sourceid: nV7O || 0 }) } } }) };
    l2x.HH3x = function() {
        function compareFee(cqW7P, cqU7N) { var bv3x = { 1: 99, 8: 99, 4: 88, 16: 99 }; return (bv3x[cqW7P] || 0) - (bv3x[cqU7N] || 0) } return function(i2x, cA3x, sO9F, eA4E) { sO9F = sO9F || {}; var vF0x = [],
                HI3x = {},
                bID8v = 0,
                bIE8w = 0,
                HJ3x = null; if (!i2x || !i2x.length) return vF0x;
            k2x.be3x(i2x, function(bf3x) { var eW5b = l2x.oB8t(bf3x); if (eW5b == 0) { vF0x.push(bf3x) } else if (eW5b == 10) { if (bf3x.privilege) { bf3x.fee = bf3x.privilege.fee } if (compareFee(bf3x.fee, HI3x.fee) > 0) { HI3x = bf3x } } else if (eW5b == 11) {++bID8v; if (!sO9F.play) vF0x.push(bf3x) } else if (eW5b == 1e3) {++bIE8w; if (!sO9F.download) vF0x.push(bf3x) } else if (eW5b == 100) { HJ3x = bf3x } }); if (vF0x.length == 0 && cA3x) { if (bID8v == i2x.length) { var rx9o = i2x[0].privilege || {}; if (rx9o.payed) { l2x.hS5X("唱片公司要求，该歌曲须下载后播放") } else { l2x.sP9G(rx9o.fee, null, null, eA4E) } } else if (bIE8w == i2x.length) { l2x.hS5X("因版权方要求，该歌曲不支持下载") } else if (HI3x.id) { l2x.sP9G(HI3x.fee, HI3x.id, null, eA4E, HI3x.privilege) } else { if (HJ3x && i2x.length == 1 && HJ3x.privilege && HJ3x.privilege.st < 0 && HJ3x.privilege.toast) { l2x.hS5X(null, null, null, true, HJ3x) } else { l2x.hS5X() } } } return vF0x } }();
    l2x.oB8t = function(bf3x) { if (!bf3x) return 0; var eW5b = bf3x.privilege; if (bf3x.program) return 0; if (window.GAbroad) return 100; if (eW5b) { if (eW5b.st != null && eW5b.st < 0) { return 100 } if (eW5b.fee > 0 && eW5b.fee != 8 && eW5b.payed == 0 && eW5b.pl <= 0) return 10; if (eW5b.fee == 16) return 11; if ((eW5b.fee == 0 || eW5b.payed) && eW5b.pl > 0 && eW5b.dl == 0) return 1e3; if (eW5b.pl == 0 && eW5b.dl == 0) return 100; return 0 } else { var dY4c = bf3x.status != null ? bf3x.status : bf3x.st != null ? bf3x.st : 0; if (bf3x.status >= 0) return 0; if (bf3x.fee > 0) return 10; return 100 } } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        N3x = c2x("nej.ui"),
        b2x; if (!!N3x.Uo8g) return; var hQ5V = a1x.sj9a(".#<uispace>{position:absolute;background:#fff;}");
    N3x.Uo8g = NEJ.C();
    b2x = N3x.Uo8g.O3x(N3x.Qn6h);
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.bU3x([
            [document, "click", this.ry9p.g2x(this)]
        ]);
        this.cqS7L = !!e2x.nostop;
        this.bJO8G = { top: e2x.top, left: e2x.left } };
    b2x.bC3x = function() { delete this.vB0x;
        delete this.bgg1x;
        delete this.pl8d;
        delete this.bKm8e;
        delete this.Up8h;
        delete this.bJO8G;
        this.bH3x() };
    b2x.bZ3x = function() { this.lg7Z = hQ5V };
    b2x.bR3x = function() { this.cc3x();
        this.yH1x = this.o2x;
        h2x.q2x(this.o2x, "click", this.cqR7K.g2x(this)) };
    b2x.ry9p = function(d2x) { if (d2x.button != 2) this.bo3x() };
    b2x.cqR7K = function(d2x) { if (this.cqS7L) return;
        h2x.rw9n(d2x); var E2x = h2x.U3x(d2x); if (E2x.tagName == "A") h2x.ce3x(d2x) };
    b2x.cqQ7J = function() { var cM4Q = /\s+/i; return function(ng7Z) { ng7Z = (ng7Z || "").trim().toLowerCase().split(cM4Q);
            ng7Z[0] = ng7Z[0] || "bottom";
            ng7Z[1] = ng7Z[1] || "left";
            this.pl8d = ng7Z } }();
    b2x.cqP7I = function(ng7Z) { var m2x = {},
            mb7U = this.bgg1x,
            ctG7z = a1x.oE8w(),
            dn4r = this.o2x.offsetWidth,
            cp3x = this.o2x.offsetHeight; switch (ng7Z[0]) {
            case "top":
                m2x.top = mb7U.top - cp3x;
                m2x.left = ng7Z[1] == "right" ? mb7U.left + mb7U.width - dn4r : mb7U.left; break;
            case "left":
                m2x.left = mb7U.left - dn4r;
                m2x.top = ng7Z[1] == "bottom" ? mb7U.top + mb7U.height - cp3x : mb7U.top; break;
            case "right":
                m2x.left = mb7U.left + mb7U.width;
                m2x.top = ng7Z[1] == "bottom" ? mb7U.top + mb7U.height - cp3x : mb7U.top; break;
            default:
                m2x.top = mb7U.top + mb7U.height;
                m2x.left = ng7Z[1] == "right" ? mb7U.left + mb7U.width - dn4r : mb7U.left; break } return m2x };
    b2x.GQ3x = function() { if (!this.bKm8e) { this.fV5a(this.bJO8G); return } if (!!this.Up8h) { this.fV5a(this.vB0x); return } if (!!this.bgg1x) this.fV5a(this.cqP7I(this.pl8d)) };
    b2x.cqL7E = function(E2x, dh4l, d2x) { dh4l = dh4l || Y3x; var bLl9c = a1x.oE8w(),
            cO4S = h2x.kw6q(d2x) + (dh4l.left || 0),
            gI5N = h2x.oc8U(d2x) + (dh4l.top || 0),
            dn4r = E2x.offsetWidth + (dh4l.right || 0),
            cp3x = E2x.offsetHeight + (dh4l.bottom || 0),
            HL3x = bLl9c.scrollWidth,
            bfQ1x = bLl9c.scrollHeight,
            bfy1x = cO4S + dn4r,
            bfx1x = gI5N + cp3x; switch (this.pl8d[0]) {
            case "top":
                gI5N = bfx1x > bfQ1x ? gI5N - cp3x : gI5N; if (this.pl8d[1] == "right") { cO4S = cO4S - dn4r < 0 ? 0 : cO4S - dn4r } else { cO4S = bfy1x > HL3x ? HL3x - dn4r : cO4S } break;
            case "left":
                cO4S = bfy1x > HL3x ? HL3x - dn4r : cO4S; if (this.pl8d[1] == "top") { gI5N = bfx1x > bfQ1x ? gI5N - cp3x : gI5N } else { gI5N = gI5N - cp3x < 0 ? gI5N : gI5N - cp3x } break;
            case "right":
                cO4S = cO4S - dn4r < 0 ? 0 : cO4S - dn4r; if (this.pl8d[1] == "top") { gI5N = bfx1x > bfQ1x ? gI5N - cp3x : gI5N } else { gI5N = gI5N - cp3x < 0 ? gI5N : gI5N - cp3x } break;
            default:
                gI5N = gI5N - cp3x < 0 ? gI5N : gI5N - cp3x; if (this.pl8d[1] == "left") { cO4S = bfy1x > HL3x ? HL3x - dn4r : cO4S } else { cO4S = cO4S - dn4r < 0 ? 0 : cO4S - dn4r } break } return { top: gI5N, left: cO4S } };
    b2x.bft1x = function() { var cqK7D = function(E2x, dh4l) { E2x = a1x.x2x(E2x); if (!E2x) return;
            dh4l = dh4l || Y3x; var bj3x = a1x.hJ5O(E2x); return { top: bj3x.y - (dh4l.top || 0), left: bj3x.x - (dh4l.left || 0), width: E2x.offsetWidth + (dh4l.right || 0), height: E2x.offsetHeight + (dh4l.bottom || 0) } }; return function(e2x) { e2x = e2x || Y3x;
            this.Up8h = e2x.event;
            this.cqQ7J(e2x.align); if (!!this.Up8h) this.vB0x = this.cqL7E(e2x.target, e2x.delta, this.Up8h);
            this.bgg1x = cqK7D(e2x.target, e2x.delta);
            this.bKm8e = !!e2x.fitable;
            this.M3x(); return this } }() })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        N3x = c2x("nej.ui"),
        b2x, K3x; if (!!N3x.zR1x) return;
    N3x.zR1x = NEJ.C();
    b2x = N3x.zR1x.O3x(N3x.Sj7c);
    K3x = N3x.zR1x.cg3x;
    N3x.zR1x.ctH7A = function() { var cqG7z = function(d2x, C2x, fi5n, js6m, OJ6D) { var co3x, J3x = C2x + "-i",
                R3x = fi5n.xv0x,
                bLV9M = !!js6m.noclear,
                bMb9S = !!js6m.toggled; if (k2x.gb5g(js6m.onbeforeclick)) { var Uz8r = js6m.noclear,
                    cqF7y = js6m.toggled; try { js6m.onbeforeclick(js6m) } catch (e) {} bLV9M = !!js6m.noclear;
                bMb9S = !!js6m.toggled;
                js6m.toggled = cqF7y;
                js6m.noclear = Uz8r } var Co2x = R3x[J3x]; if (bMb9S && !!Co2x) { Co2x.bo3x(); return } h2x.bh3x(d2x); if (!bLV9M) { h2x.z2x(document, "click");
                co3x = fi5n.B2x(js6m) } else { co3x = fi5n.ccH3x(js6m, !0) } R3x[J3x] = co3x;
            co3x.uY0x("onbeforerecycle", function() { delete R3x[J3x] });
            co3x.bft1x(OJ6D) }; return function(f2x, e2x) { f2x = a1x.x2x(f2x); if (!f2x) return this; if (!this.xv0x) this.xv0x = {}; var C2x = a1x.kD6x(f2x); if (!!this.xv0x[C2x]) return this;
            e2x = NEJ.X({}, e2x); var OJ6D = NEJ.EX({ align: "", delta: null, fitable: !1 }, e2x);
            OJ6D.target = C2x;
            e2x.destroyable = !0; if (!e2x.fixed) { OJ6D.fitable = !0;
                e2x.parent = document.body } this.xv0x[C2x] = [C2x, e2x.event || "click", cqG7z.dV4Z(null, C2x, this, e2x, OJ6D)];
            h2x.q2x.apply(h2x, this.xv0x[C2x]); return this } }();
    N3x.zR1x.ctI7B = function(f2x) { if (!this.xv0x) return this; var C2x = a1x.kD6x(f2x),
            d2x = this.xv0x[C2x]; if (!d2x) return this;
        delete this.xv0x[C2x];
        h2x.mg7Z.apply(h2x, d2x); var co3x = this.xv0x[C2x + "-i"]; if (!!co3x) co3x.bo3x(); return this };
    b2x.bbc0x = function() { return N3x.Uo8g.B2x(this.bS3x) };
    b2x.Qv6p = function() { K3x.Qv6p.apply(this, arguments);
        this.bS3x.top = null;
        this.bS3x.left = null;
        this.bS3x.nostop = !1 };
    b2x.bft1x = function(e2x) { if (!!this.nO7H) this.nO7H.bft1x(e2x); return this } })();
(function() { var c2x = NEJ.P,
        bd3x = c2x("nej.ui"),
        n2x = c2x("nm.l"),
        b2x, K3x;
    n2x.beV1x = NEJ.C();
    b2x = n2x.beV1x.O3x(bd3x.zR1x);
    b2x.bk3x = function(e2x) { e2x.nohack = true;
        this.bl3x(e2x) } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        n2x = c2x("nm.l"),
        b2x, K3x;
    n2x.Z3x = NEJ.C();
    b2x = n2x.Z3x.O3x(n2x.beV1x);
    K3x = n2x.Z3x.cg3x;
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.eg4k = e2x.type || 1 };
    b2x.bR3x = function() { this.cc3x();
        this.o2x = a1x.mV7O(this.cqD7w()); var i2x = a1x.cQ4U(this.o2x);
        this.oQ8I = i2x[0];
        this.ci3x = i2x[1] };
    b2x.cqD7w = function() { return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>' };
    b2x.GQ3x = function() { var A2x = {},
            cd3x = this.o2x.style,
            iK6E = a1x.oE8w(),
            mR7K = { left: iK6E.scrollLeft, top: iK6E.scrollTop },
            dh4l = { left: iK6E.clientWidth - this.o2x.offsetWidth, top: iK6E.clientHeight - this.o2x.offsetHeight };
        A2x.top = Math.max(0, mR7K.top + dh4l.top / 2);
        A2x.left = Math.max(0, mR7K.left + dh4l.left / 2);
        this.nO7H.fV5a(A2x) };
    b2x.M3x = function(e2x) { K3x.M3x.call(this);
        this.GQ3x();
        this.eg4k == 1 ? a1x.ev4z(this.oQ8I, "u-icn-32", "u-icn-31") : a1x.ev4z(this.oQ8I, "u-icn-31", "u-icn-32");
        this.ci3x.innerHTML = e2x.tip || "" };
    n2x.Z3x.M3x = function() { var eZ5e; return function(e2x) { clearTimeout(eZ5e); if (e2x.parent === undefined) e2x.parent = document.body; if (e2x.autoclose === undefined) e2x.autoclose = true;
            e2x.clazz = "m-sysmsg";!!this.eK5P && this.eK5P.S3x();
            this.eK5P = this.B2x(e2x);
            this.eK5P.M3x(e2x); if (e2x.autoclose) eZ5e = setTimeout(this.bo3x.g2x(this), 2e3) } }();
    n2x.Z3x.bo3x = function() {!!this.eK5P && this.eK5P.bo3x() } })();
(function() { var c2x = NEJ.P,
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"); if (window["GRef"] && window["GRef"] == "mail") { v2x.bp3x = v2x.bp3x.ec4g(function(d2x) { e2x = d2x.args[1];
            e2x.query = e2x.query || {}; if (k2x.fe5j(e2x.query)) e2x.query = k2x.ho5t(e2x.query);
            e2x.query.ref = "mail" }) } })();
(function() { var c2x = NEJ.P,
        bm3x = NEJ.F,
        eU5Z = NEJ.R,
        H2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        p2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        J3x = "playlist-tracks_",
        b2x;
    p2x.eQ5V({ "playlist_my-list": { url: "/api/user/playlist", type: "GET", format: function(Q3x, e2x) { this.cqC7v(Q3x.playlist); return { total: 0, list: eU5Z } }, onerror: function() { this.z2x("onlisterror") } }, "playlist_new-add": { url: "/api/playlist/create", format: function(Q3x, e2x) { var iJ6D = Q3x.playlist;
                iJ6D.creator = GUser;
                iJ6D.isHost = !0;
                iJ6D.typeFlag = "playlist"; return iJ6D }, finaly: function(d2x, e2x) { h2x.z2x(p2x.hl5q, "listchange", d2x) }, onmessage: function() { var ln7g = { 507: "歌单数量超过上限！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！" }; return function(cb3x) { n2x.Z3x.M3x({ tip: ln7g[cb3x] || "创建失败", type: 2 }) } }() }, "playlist_new-del": { url: "/api/playlist/delete", type: "GET", filter: function(e2x) { e2x.id = e2x.data.pid }, finaly: function(d2x, e2x) { h2x.z2x(p2x.hl5q, "listchange", d2x) }, onmessage: function() { var ln7g = { 404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！" }; return function(cb3x) { n2x.Z3x.M3x({ tip: ln7g[cb3x] || "删除失败", type: 2 }) } }() }, "playlist_fav-add": { type: "GET", url: "/api/playlist/subscribe", filter: function(e2x) { var eA4E = e2x.ext || {};
                e2x.ext = NEJ.X(eA4E, e2x.data);
                e2x.data = { id: e2x.ext.id } }, format: function(Q3x, e2x) { n2x.Z3x.M3x({ tip: "收藏成功" + (Q3x.point > 0 ? ' 获得<em class="s-fc6">' + Q3x.point + "积分</em>" : "") }); var r2x = e2x.ext;
                r2x.subscribedCount++; return r2x }, finaly: function(d2x, e2x) { h2x.z2x(p2x.cqB7u, "listchange", d2x);
                h2x.z2x(p2x.cqB7u, "itemchange", { attr: "subscribedCount", data: d2x.data }) }, onmessage: function() { var ln7g = { 404: "歌单不存在！", 501: "歌单已经收藏！", 506: "歌单收藏数量超过上限！" }; return function(cb3x) { n2x.Z3x.M3x({ type: 2, tip: ln7g[cb3x] || "收藏失败，请稍后再试！" }) } }() }, "playlist_fav-del": { url: "/api/playlist/unsubscribe", type: "GET", filter: function(e2x) { e2x.id = e2x.data.id = e2x.data.pid }, finaly: function(d2x, e2x) { h2x.z2x(p2x.hl5q, "listchange", d2x) }, onmessage: function() { var ln7g = { 404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！" }; return function(cb3x) { n2x.Z3x.M3x({ tip: ln7g[cb3x], type: 2 }) } }() }, "playlist_new-update": { url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"], filter: function(e2x) { var j2x = e2x.data,
                    UI8A = {};
                UI8A["playlist-update-name"] = { id: j2x.id, name: j2x.name };
                UI8A["playlist-update-tag"] = { id: j2x.id, tags: j2x.tags.join(";") };
                UI8A["playlist-update-desc"] = { id: j2x.id, desc: j2x.description };
                e2x.data = UI8A;
                e2x.ext = j2x }, format: function(T3x, pd8V, Oz6t, e2x) { if (T3x.code == 200 && pd8V.code == 200 && Oz6t.code == 200) { e2x.ext.allSuccess = true;
                    n2x.Z3x.M3x({ tip: "保存成功" }) } else if (T3x.code == 407 || pd8V.code == 407 || Oz6t.code == 407) { e2x.ext.allSuccess = false;
                    n2x.Z3x.M3x({ type: 2, tip: "输入内容包含关键字" }) } else { e2x.ext.allSuccess = false;
                    n2x.Z3x.M3x({ type: 2, tip: "保存失败" }) } return this.ej4n(e2x.ext.id) }, finaly: function(d2x, e2x) { h2x.z2x(p2x.hl5q, "listchange", d2x) }, onmessage: function(cb3x) { n2x.Z3x.M3x({ type: 2, tip: "保存失败" }) } }, "playlist-update-name": { url: "/api/playlist/update/name", format: function(Q3x, e2x) { var r2x = this.ej4n(e2x.ext.id); if (Q3x.code == 200) r2x.name = e2x.ext.name; return Q3x } }, "playlist-update-tag": { url: "/api/playlist/tags/update", format: function(Q3x, e2x) { var r2x = this.ej4n(e2x.ext.id); if (Q3x.code == 200) r2x.tags = e2x.ext.tags; return Q3x } }, "playlist-update-desc": { url: "/api/playlist/desc/update", format: function(Q3x, e2x) { var r2x = this.ej4n(e2x.ext.id); if (Q3x.code == 200) r2x.description = e2x.ext.description; return Q3x } }, "playlist-update-cover": { url: "/api/playlist/cover/update", filter: function(e2x) { e2x.url = e2x.data.url;
                delete e2x.data.url }, format: function(Q3x, e2x) { n2x.Z3x.M3x({ tip: "保存成功" }); var r2x = this.ej4n(e2x.data.id);
                r2x.coverImgUrl = e2x.url;
                e2x.ext = r2x; return r2x }, onmessage: function(cb3x) { n2x.Z3x.M3x({ type: 2, tip: "保存失败" }) }, finaly: function(d2x, e2x) { h2x.z2x(p2x.hl5q, "itemchange", { attr: "coverImgUrl", data: e2x.ext }) } }, "playlist-upcount": { url: "/api/playlist/update/playcount", type: "GET", format: function(Q3x, e2x) { var iJ6D = this.ej4n(e2x.data.id); if (!iJ6D) return;
                iJ6D.playCount++;
                h2x.z2x(p2x.hl5q, "itemchange", { attr: "playcount", data: iJ6D }) } } });
    p2x.hl5q = NEJ.C();
    b2x = p2x.hl5q.O3x(p2x.gW5b);
    b2x.cl3x = function() { this.cs3x() };
    b2x.brr4v = function() { var cU4Y = GUser.userId;
        this.nC7v({ limit: 1001, key: "playlist_my-" + cU4Y, data: { offset: 0, limit: 1001, uid: cU4Y } }) };
    b2x.cqC7v = function(i2x) { var cU4Y = GUser.userId,
            iR6L = [],
            bry4C = [];
        k2x.be3x(i2x, function(r2x) { r2x.typeFlag = "playlist"; if (r2x.creator && r2x.creator.userId == cU4Y) { if (r2x.specialType == 5) r2x.name = "我喜欢的音乐";
                r2x.isHost = !0;
                iR6L.push(r2x) } else { bry4C.push(r2x) } });
        this.re8W("playlist_new-" + cU4Y, iR6L);
        this.re8W("playlist_fav-" + cU4Y, bry4C) };
    b2x.cqz7s = function(j2x) { this.ck3x("playlist-update-cover", { data: j2x }) };
    b2x.ctK7D = function() { var Ox6r = this.cqx7q.x2x("host-plist"); if (Ox6r.length == 0) { return } if (Ox6r.length == 1 && Ox6r[0].trackCount <= 0) { return } for (var i = 0, len = Ox6r.length; i < len; i++) { var r2x = Ox6r[i]; if (r2x.trackCount > 0) return r2x.id } return this.cqx7q.x2x("host-plist")[0].id };
    b2x.cqw7p = function(C2x) { if (GUser && GUser.userId > 0) { this.ck3x("playlist-upcount", { data: { id: C2x } }) } };
    b2x.AW1x = function() { if (GUser && GUser.userId > 0) { return !0 } else { top.login(); return !1 } };
    b2x.ctL7E = function() { return GUser.userId };
    b2x.bev1x = function(r2x) { if (r2x.userId == GUser.userId && r2x.specialType == 5) r2x.name = "我喜欢的音乐";
        h2x.z2x(this.constructor, "itemchange", { data: this.zz1x(r2x) }); return r2x };
    H2x.fr5w.B2x({ element: p2x.hl5q, event: ["listchange", "playcountchange", "itemchange"] }) })();
(function() { var c2x = NEJ.P,
        eU5Z = NEJ.R,
        bm3x = NEJ.F,
        Y3x = NEJ.O,
        H2x = c2x("nej.ut"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        b2x, K3x;
    p2x.eQ5V({ "program-get": { url: "/api/dj/program/detail", format: function(Q3x) { return Q3x.program } }, "program_djradio-list": { type: "GET", url: "/api/dj/program/byradio", filter: function(e2x) { e2x.data.limit = 1e3;
                delete e2x.data.id }, format: function(Q3x, e2x) { var bti4m = [],
                    Aa1x = Q3x.programs; if (Aa1x) { for (var i = 0, l = Aa1x.length; i < l; i++) { if (Aa1x[i].programFeeType < 10 || Aa1x[i].buyed) { bti4m.push(Aa1x[i]) } } } return bti4m } }, "program_fav-list": { url: "/api/djprogram/subscribed/paged", format: function(Q3x, e2x) { return Q3x.programs }, onerror: "onlisterror" }, "program_fav-add": { url: "/api/djprogram/subscribe", filter: function(e2x) { e2x.ext = e2x.data;
                e2x.data = { id: e2x.ext.id };
                e2x.id = e2x.data.id }, format: function(Q3x, e2x) { n2x.Z3x.M3x({ tip: "收藏成功" }); var r2x = e2x.ext;
                r2x.subscribedCount++;
                r2x.subscribed = !0; return r2x }, finaly: function(d2x, e2x) { h2x.z2x(p2x.pp8h, "listchange", d2x) }, onmessage: function() { var ln7g = { 404: "节目不存在！", 501: "节目已收藏！" }; return function(cb3x) { n2x.Z3x.M3x({ type: 2, tip: ln7g[cb3x] || "收藏失败！" }) } }() }, "program_fav-del": { url: "/api/djprogram/unsubscribe", finaly: function(d2x, e2x) { h2x.z2x(p2x.pp8h, "listchange", d2x) }, onmessage: function() { var ln7g = { 404: "节目不存在！", 502: "没有收藏此节目！" }; return function(cb3x) { l2x.bet1x({ txt: ln7g[cb3x] || "取消收藏失败！" }) } }() }, "program-update-count": { type: "GET", url: "/api/dj/program/listen", filter: function(e2x) { var r2x = this.ej4n(e2x.data.id) || Y3x;
                e2x.ext = (r2x.listenerCount || 0) + 1 }, format: function(Q3x, e2x) { var r2x = this.ej4n(e2x.data.id); if (!!r2x) { r2x.listenerCount = Math.max(e2x.ext, r2x.listenerCount || 0) } }, finaly: function(d2x, e2x) { h2x.z2x(p2x.pp8h, "itemchange", { attr: "playCount", data: this.ej4n(e2x.data.id) }) } }, "program-like": { url: "/api/resource/like", filter: function(e2x) { e2x.data = { threadId: "A_DJ_1_" + e2x.id } }, format: function(Q3x, e2x) { var r2x = e2x.ext.data || this.ej4n(e2x.id);
                r2x.liked = true;
                r2x.likedCount++;
                e2x.ext.data = r2x; try { top.player.setLike(r2x) } catch (e) {} return r2x }, finaly: function(d2x, e2x) { h2x.z2x(p2x.pp8h, "itemchange", { attr: "likedCount", data: e2x.ext.data }) } }, "program-unlike": { url: "/api/resource/unlike", filter: function(e2x) { e2x.data = { threadId: "A_DJ_1_" + e2x.id } }, format: function(Q3x, e2x) { var r2x = e2x.ext.data || this.ej4n(e2x.id);
                r2x.liked = false;
                r2x.likedCount--;
                e2x.ext.data = r2x; try { top.player.setLike(r2x) } catch (e) {} return r2x }, finaly: function(d2x, e2x) { h2x.z2x(p2x.pp8h, "itemchange", { attr: "likedCount", data: e2x.ext.data }) } } });
    p2x.pp8h = NEJ.C();
    b2x = p2x.pp8h.O3x(p2x.gW5b);
    b2x.ctM7F = function() { var cU4Y = GUser.userId;
        this.nC7v({ limit: 1001, key: "program_fav-" + cU4Y, data: { offset: 0, limit: 1e3, uid: cU4Y } }) };
    b2x.ctN7G = function(cS4W) { var oO8G = cS4W[this.uU0x];
        l2x.cqr6l(4, function(R3x) { R3x.re8W("track_program-" + oO8G, cS4W.songs) });
        delete cS4W.songs; var bK3x = cS4W.mainSong;
        l2x.cqr6l(4, function(R3x) { R3x.re8W("track_program_main-" + oO8G, !bK3x ? [] : [bK3x]) });
        cS4W.mainSong = (bK3x || Y3x).id };
    b2x.ctO7H = function(C2x) { var cS4W = this.ej4n(C2x),
            cU4Y = localCache.Sz7s("host.profile.userId"); return !!cS4W && cS4W.dj.userId == cU4Y };
    b2x.ctP7I = function(C2x) { return !1 };
    b2x.bev1x = function(r2x) { h2x.z2x(this.constructor, "itemchange", { attr: "detail", data: this.zz1x(r2x) }); return r2x };
    b2x.cqw7p = function(C2x) { this.ck3x("program-update-count", { data: { id: C2x } }) };
    l2x.bui4m = function(e2x) { var R3x = p2x.pp8h.B2x({ onitemadd: function() {
                (e2x.onsuccess || bm3x)() }, onerror: function() {
                (e2x.onerror || bm3x)() } }); if (e2x.data.liked) { R3x.Ow6q(e2x.data) } else { R3x.vf0x(e2x.data) } };
    b2x.vf0x = function(cS4W) { if (!l2x.hc5h()) return; var cm3x = { ext: {} }; if (k2x.ke6Y(cS4W)) { cm3x.id = cS4W.id;
            cm3x.ext.data = cS4W } else { cm3x.id = cS4W } this.ck3x("program-like", cm3x) };
    b2x.Ow6q = function(cS4W) { if (!l2x.hc5h()) return; var cm3x = { ext: {} }; if (k2x.ke6Y(cS4W)) { cm3x.id = cS4W.id;
            cm3x.ext.data = cS4W } else { cm3x.id = cS4W } this.ck3x("program-unlike", cm3x) };
    H2x.fr5w.B2x({ element: p2x.pp8h, event: ["listchange", "itemchange"] }) })();
(function() { var c2x = NEJ.P,
        bm3x = NEJ.F,
        eU5Z = NEJ.R,
        H2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        p2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        l2x = c2x("nm.x"),
        J3x = "playlist-tracks_",
        l2x = c2x("nm.x"),
        b2x;
    p2x.eQ5V({ "track-get": { url: "/api/v3/song/detail", filter: function(e2x) { e2x.data.c = JSON.stringify([{ id: e2x.data.id }]) }, format: function(Q3x, e2x) { var bf3x = l2x.Bm1x(Q3x.songs[0]);
                bf3x.privilege = Q3x.privileges[0]; return bf3x } }, "track_playlist-list": { url: "/api/v3/playlist/detail", filter: function(e2x) { e2x.data.n = 1e3 }, format: function(Q3x, e2x) { var gH5M = [];
                this.rp8h.bev1x(Q3x.playlist);
                k2x.be3x(Q3x.playlist.tracks, function(bK3x, s2x) { var bvi5n = l2x.Bm1x(bK3x);
                    bvi5n.privilege = Q3x.privileges[s2x];
                    gH5M.push(bvi5n) }, this); return gH5M } }, "track_album-list": { url: "/api/v1/album/{id}", format: function(Q3x, e2x) { var gH5M = [];
                k2x.be3x(Q3x.songs, function(bf3x) { gH5M.push(l2x.Bm1x(bf3x)) }); return gH5M } }, "track_playlist-add": { url: "/api/playlist/manipulate/tracks", filter: function(e2x) { var bv3x = {},
                    j2x = e2x.data,
                    cqo6i = this.gO5T(e2x.key) || [];
                Br1x = [];
                k2x.be3x(cqo6i, function(bK3x) { var C2x = k2x.ke6Y(bK3x) ? bK3x.id : bK3x;
                    bv3x[C2x] = true });
                e2x.ext = [];
                k2x.be3x(j2x.tracks, function(bK3x) { var C2x = k2x.ke6Y(bK3x) ? bK3x.id : bK3x; if (!bv3x[C2x]) { Br1x.push(C2x);
                        bv3x[C2x] = true;
                        e2x.ext.push(bK3x) } });
                j2x.trackIds = JSON.stringify(Br1x);
                j2x.op = "add"; if (!Br1x.length) { e2x.value = { code: 502 } } }, format: function(Q3x, e2x) { n2x.Z3x.M3x({ tip: "已添加至歌单" }); var iJ6D = this.rp8h.ej4n(e2x.data.pid); if (!!Q3x.coverImgUrl) iJ6D.coverImgUrl = Q3x.coverImgUrl;
                k2x.me7X(e2x.ext, function(bK3x) { this.wt0x(e2x, k2x.ke6Y(bK3x) ? bK3x : null); if (!!iJ6D) iJ6D.trackCount++ }, this);
                h2x.z2x(p2x.hl5q, "itemchange", { data: iJ6D || {}, cmd: "add" });
                this.z2x("onaddsuccess"); return null }, finaly: function(d2x, e2x) { h2x.z2x(p2x.uV0x, "listchange", { key: e2x.key, action: "refresh" }); var oO8G = e2x.data.pid,
                    cq3x = this.jF6z(e2x.key) }, onmessage: function() { var ln7g = { 502: "歌曲已存在！", 505: "歌单已满！" }; return function(cb3x) { setTimeout(function() { n2x.Z3x.M3x({ tip: ln7g[cb3x] || "添加失败，请稍后再试！", type: 2 }) }, 0) } }() }, "track_playlist-del": { url: "/api/playlist/manipulate/tracks", filter: function(e2x) { var j2x = e2x.data;
                e2x.ext = j2x.trackIds;
                j2x.trackIds = JSON.stringify(j2x.trackIds);
                j2x.op = "del" }, format: function(Q3x, e2x) { var iJ6D = this.rp8h.ej4n(e2x.data.pid);
                k2x.be3x(e2x.ext, function(C2x) { this.biT2x({ id: C2x, key: "track_playlist-" + e2x.data.pid }, !0); if (!!iJ6D) iJ6D.trackCount = Math.max(0, iJ6D.trackCount - 1) }, this);
                h2x.z2x(p2x.hl5q, "itemchange", { data: iJ6D || {}, cmd: "del" }); return null }, finaly: function(d2x, e2x) { h2x.z2x(p2x.uV0x, "listchange", { key: e2x.key, action: "refresh" }) }, onmessage: function(cb3x) { l2x.bet1x({ text: "歌曲删除失败！" }) } }, "track_program-list": { url: "/api/dj/program/detail", format: function(Q3x, e2x) { return this.bvC5H.bev1x(Q3x.program).songs }, onerror: "onlisterror" }, "track_listen_record-list": { url: "/api/v1/play/record", format: function(Q3x, e2x) { var i2x = []; if (e2x.data.type == -1) { if (Q3x.weekData && Q3x.weekData.length) { e2x.data.type = 1 } else { e2x.data.type = 0 } } if (e2x.data.type == 1) { i2x = this.bvD5I(Q3x.weekData) } else { i2x = this.bvD5I(Q3x.allData) } return i2x }, onerror: "onlisterror" }, "track_day-list": { url: "/api/v2/discovery/recommend/songs", format: function(Q3x, e2x) { var nh7a = [],
                    i2x = Q3x.recommend || [];
                k2x.be3x(i2x, function(bf3x, s2x) { nh7a.push({ action: "recommendimpress", json: { alg: bf3x.alg, scene: "user-song", position: s2x, id: bf3x.id } }) });
                this.kz6t.Uj8b(nh7a);
                e2x.limit = i2x.length; return i2x }, onerror: "onlisterror" }, "track_lyric-get": { type: "GET", url: "/api/song/lyric", filter: function(e2x) { e2x.data.lv = 0;
                e2x.data.tv = 0 }, format: function(m2x, e2x) { return m2x }, onload: "onlyricload", onerror: "onlyricerror" } });
    p2x.uV0x = NEJ.C();
    b2x = p2x.uV0x.O3x(p2x.gW5b);
    b2x.cl3x = function() { this.cs3x();
        this.rp8h = p2x.hl5q.B2x();
        this.bvC5H = p2x.pp8h.B2x();
        this.kz6t = p2x.hL5Q.B2x() };
    b2x.bvD5I = function(i2x) { var m2x = [],
            fc5h = 0;
        k2x.be3x(i2x, function(r2x, s2x) { var bf3x = l2x.Bm1x(r2x.song); if (s2x == 0) { fc5h = r2x.score } bf3x.max = fc5h;
            bf3x.playCount = r2x.playCount;
            bf3x.score = r2x.score;
            m2x.push(bf3x) }); return m2x };
    H2x.fr5w.B2x({ element: p2x.uV0x, event: ["listchange"] }) })();
(function() {
    function J() { var d = "6skV4PUYecGhx07l".split("");
        this.d = function(f) { if (null == f || void 0 == f) return f; if (0 != f.length % 2) throw Error("1100"); for (var b = [], c = 0; c < f.length; c++) { 0 == c % 2 && b.push("%"); for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) { b.push(a.toString(16)); break } } return decodeURIComponent(b.join("")) } } var k = (new J).d,
        d = (new J).d,
        e = (new J).d,
        f = (new J).d,
        g = (new J).d;
    (function() { var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function() { var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function() {
                function d(b, c) { if (null == b) return null; for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++)); return f }

                function f(b) { if (null == b) return null; for (var c = [], l = a[15], d = b.length; l < d; l++) { var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])] } return c }

                function g(h) { var c = []; if (null == h || void 0 == h || h.length == a[15]) return za(L); if (h.length >= L) { var c = a[15],
                            l = []; if (null != h && h.length != a[15]) { if (h.length < L) throw Error(b[134]); for (var d = a[15]; d < L; d++) l[d] = h[c + d] } return l } for (l = a[15]; l < L; l++) c[l] = h[l % h.length]; return c }

                function e(h) { var c = a[405]; if (null != h)
                        for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length; if (null == h || c < a[15]) h = new String(b[0]);
                    else { for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0]) } return h }

                function k(h, c, l) { var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74],
                        e = []; if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g);
                    else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g);
                    else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]);
                    else throw Error(b[111]); return e.join(b[0]) }

                function za(b) { for (var c = [], l = a[15]; l < b; l++) c[l] = a[15]; return c }

                function Z(h, c, l, d, f) { if (null != h && h.length != a[15]) { if (null == l) throw Error(b[131]); if (h.length < f) throw Error(b[134]); for (var e = a[15]; e < f; e++) l[d + e] = h[c + e] } }

                function Aa(b) { var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299]; return c }

                function ma(h) { if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h); for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else throw Error(b[146]);
                    else c.push(h.charCodeAt(d)); return c }

                function Na(b) { if (null == b || b.length == a[15]) return [];
                    b = new String(b); for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) { var e = parseInt(b.charAt(d++), a[58]) << a[23],
                            g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g) } return c }

                function Ma(c) { var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]); return d.join(b[0]) }

                function na(b, c) { if (null == b || null == c || b.length != c.length) return b; for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]); return d }

                function Y(a, b) { a = x(a);
                    b = x(b); return x(a ^ b) }

                function Oa(a, b) { return x(a + b) }

                function x(c) { if (c < a[290]) return x(a[291] - (a[290] - c)); if (c >= a[290] && c <= a[282]) return c; if (c > a[282]) return x(a[292] + c - a[282]); throw Error(b[136]) }

                function Pa(h) {
                    function d() { for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try { var g = h[e];
                            l()(g) && f.push(g) } catch (k) {}
                        return f.join(b[56]) }

                    function l() {
                        function h(a) { var c = {}; return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c } var d = [c[21], c[141], B[6]],
                            l = [],
                            f = c[139],
                            e = b[327],
                            g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f; for (f = a[15]; f < d.length; f++) l[f] = h(d[f]); return function(c) { for (var f = a[15]; f < l.length; f++) { var e = h(c + b[34] + d[f]),
                                    g = l[f]; if (e.height !== g.height || e.width !== g.width) return !0 } return !1 } }

                    function f() { var a = null,
                            h = null,
                            d = []; try { h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112]) } catch (l) {} if (!a) return d; try { d.push(a[b[20]]()) } catch (g) {} try { d.push(e(a, h)) } catch (k) {} return d.join(b[56]) }

                    function e(h, d) { try { var f = c[76],
                                l = b[240],
                                g = h[c[43]]();
                            h[c[33]](h[c[113]], g); var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19]; var t = h[c[20]](),
                                X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X); var la = h[c[48]](h[c[149]]); return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]()) } catch ($a) { return b[324] } }

                    function g() { var h = C[b[167]](b[155]),
                            d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]]; if (!window[c[154]]) return d.join(b[0]); for (var l = a[15]; l < f.length; l++) try { C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h) } catch (e) { d.push(b[349]) }
                        return d.join(b[54]) }

                    function k() { try { var h = C[b[167]](c[79]),
                                d = h[B[7]](b[354]),
                                f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]); return h[b[149]]() } catch (l) { return b[237] } }

                    function m() { try { return window[b[355]] && n.h ? q() : r() } catch (a) { return b[31] } }

                    function r() { if (!y[b[4]]) return b[0]; var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [],
                            f = {};
                        d.push(p(y[b[4]], function(h) { f[h.name] = a[541]; var d = p(h, function(a) { return [a.type, a.suffixes].join(b[144]) }).join(b[34]); return [h.name, h.description, d].join(c[88]) }, this).join(b[25]));
                        d.push(p(h, function(a) { if (f[a]) return b[0];
                            a = y[b[4]][a]; if (!a) return b[0]; var h = p(a, function(a) { return [a.type, a.suffixes].join(b[144]) }).join(b[34]); return [a.name, a.description, h].join(c[88]) }, this).join(b[56])); return d.join(b[56]) }

                    function q() { return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function(a) { try { return new window[b[355]](a), a } catch (h) { return null } }).join(b[56]) : b[0] }

                    function p(a, b, h) { var c = []; if (null == a) return c; if (I && a.map === I) return a.map(b, h);
                        E(a, function(a, d, f) { c[c.length] = b.call(h, a, d, f) }); return c }

                    function E(b, h) { if (null !== b)
                            if (z && b.forEach === z) b.forEach(h, void 0);
                            else if (b.length === +b.length)
                            for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
                        else
                            for (c in b)
                                if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break } var z = Array.prototype.forEach,
                        I = Array.prototype.map,
                        n = { e: M, j: !0, i: !0, h: !0, b: !0, a: !0 };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function() { var h = [],
                            l = []; if (Qa) { var e; try { e = !!window[b[339]] } catch (X) { e = !0 } h.push(e); var p; try { p = !!window[c[38]] } catch (z) { p = !0 } h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]); if (e = n.i) try { var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354])) } catch (r) { e = !1 }
                            if (e) try { h.push(k()), n.b && h.push(f()) } catch (E) { h.push(b[59]) } h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m()) } u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152])))); return u } }

                function M(h) { var c = a[88],
                        d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375]; for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15]; switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k } e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h); try { for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try { var q = parseInt(B.charAt(z) + b[0]),
                                p = q || q === a[15] ? p + q : p + a[541];
                            E++ } catch (n) { p += a[541], E++ } E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N); for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try { var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C) } catch (A) { u++, H += C } u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41])) } catch (y) { d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0])) } return d.join(b[0]) }

                function ba(h, c) { if (h < a[15] || h >= a[43]) throw Error(b[30]); for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g)); return parseInt(d.join(b[0])) }

                function ca(a, c, d) { a = b[0] + a; if (a.length > c) throw Error(b[87]); if (a.length == c) return a; for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a); return e.join(b[0]) }

                function U(b, c) { if (b <= a[15]) return [a[15]]; for (var d = [], e = a[15]; e < b; e++) d.push(c); return d }

                function r(a) { return null == a || void 0 == a }

                function m(a, b, c) { this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c }

                function Ra(a) { if (r(a) || r(a.f) || r(a.c)) return !1; try { if (r(window[a.f])) return !1 } catch (b) { return !1 } return !0 }

                function v(c, d) { if (r(c)) return b[0]; for (var e = a[15]; e < c.length; e++) { var f = c[e]; if (!r(f) && f.f == d) return f } }

                function da() { var h;
                    a: { if (!r(q))
                            for (h = a[15]; h < q.length; h++) { var d = q[h]; if (d.g && !Ra(d)) { h = d; break a } } h = null }
                    var e; if (r(h)) { try { e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163])) } catch (f) { e = !1 } if (e) { var g; try { g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163])) } catch (k) { g = !1 } if (g) { var m; try { m = window.decodeURI(b[208]) === b[24] } catch (C) { m = !1 } if (m) { var x; try { x = window.decodeURIComponent(b[209]) === b[28] } catch (F) { x = !1 } if (x) { var p; try { p = window.encodeURI(b[24]) === b[208] } catch (E) { p = !1 } if (p) { var z; try { z = window.encodeURIComponent(b[28]) === b[209] } catch (I) { z = !1 } if (z) { var n; try { n = window.escape(b[28]) === b[209] } catch (A) { n = !1 } if (n) { var y; try { y = window.unescape(b[209]) === b[28] } catch (G) { y = !1 } if (y) { var w; try { w = window.eval(b[304]) === a[273] } catch (D) { w = !1 } e = w ? null : v(q, b[171]) } else e = v(q, c[172]) } else e = v(q, b[342]) } else e = v(q, c[30]) } else e = v(q, c[16]) } else e = v(q, B[2]) } else e = v(q, b[320]) } else e = v(q, c[58]) } else e = v(q, c[89]) } else e = h; return e }

                function Sa() { var a = da(); if (!r(a)) return a.c; try { a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311]) } catch (c) { a = null } if (!r(a)) return a.c; try { a = r(context) || r(context[b[185]]) ? null : v(q, b[265]) } catch (d) { a = null } return r(a) ? null : a.c }

                function Ba(c) { for (var d = [], e = a[15]; e < c; e++) { var f = Math.random() * Ta,
                            f = Math.floor(f);
                        d.push(ea.charAt(f)) } return d.join(b[0]) }

                function P(h) { for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) { var f = d[e].indexOf(b[57]); if (f >= a[15]) { var g = d[e].substring(f + a[541], d[e].length); if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g) } } return null }

                function Ca(h) { var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
                        e = b[0]; if (null == h || void 0 == h) return h; if (typeof h == [b[291], b[220], b[121]].join(b[0])) { for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) { var g = b[29] + d[f] + b[262],
                                    k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191] }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541])); return e += b[143] } return null }

                function oa(a, d, e, f) { var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0]) }

                function Da(a) { window[pa] = a }

                function Ea(a) { window[qa] = a }

                function Fa(c, d) { for (var e = [], f = a[15]; f < d; f++) e.push(c); return e.join(b[0]) }

                function Ga(a, c) { var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1) }

                function ra() { var a = P(V); if (null == a || void 0 == a || a == b[0]) a = window[qa]; return a }

                function Ua() { var a = ra(); if (null == a || void 0 == a || a == b[0]) return !1; try { return (a = parseInt(a)) && a >= fa ? !0 : !1 } catch (c) { return !1 } }

                function ga(c) { if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]); return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1]) }

                function Q() { var a = P(S); if (null == a || void 0 == a || a == b[0]) a = window[pa]; return a }

                function Va() { var c = Q(); if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c); return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]() }

                function Ha(d, e) { var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]() }

                function Ia() { if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) { var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d)) } }

                function ua() { Ia();
                    window[qa] = null;
                    window[pa] = null; var h = !0,
                        t = { v: b[227] },
                        l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa; var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]); try { var q = (new Pa({ b: Xa, a: Ya })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1) } catch (C) { t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1 } try { var v = l = Ca(t),
                            t = Za; if (null == t || void 0 == t) throw Error(b[120]); if (null == v || void 0 == v) v = b[0]; var q = v,
                            y;
                        y = null == v ? e([]) : e(ma(v)); var A = ma(q + y),
                            p = ma(t);
                        null == A && (A = []);
                        y = []; for (var E = a[15]; E < va; E++) { var z = Math.random() * a[301],
                                z = Math.floor(z);
                            y[E] = x(z) } var p = g(p),
                            p = na(p, g(y)),
                            E = p = g(p),
                            I; if (null == A || void 0 == A || A.length == a[15]) I = za(F);
                        else { var n = A.length,
                                J = a[15],
                                J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n); for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z } n = I; if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = []; for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) { I[D] = []; for (var H = a[15]; H < F; H++) I[D][H] = n[G++] } G = [];
                        Z(y, a[15], G, a[15], va); for (var u = I.length, L = a[15]; L < u; L++) { var O, M; var N = I[L]; if (null == N) M = null;
                            else { for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w } var Q;
                            w = M; if (null == w) Q = null;
                            else { for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D } var ca = d(Q, a[127]);
                            O = d(ca, a[36]); var xa = na(O, p),
                                ia;
                            w = xa;
                            D = E; if (null == w) ia = null;
                            else if (null == D) ia = w;
                            else { for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H } var xa = na(ia, E),
                                ja = f(xa),
                                ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja } var ka; if (null == G || void 0 == G) ka = null;
                        else if (G.length == a[15]) ka = b[0];
                        else { var ya = a[19]; try { for (var u = [], R = a[15]; R < G.length;)
                                    if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya;
                                    else { u.push(k(G, R, G.length - R)); break }
                                ka = u.join(b[0]) } catch (ra) { throw Error(b[111]) } } l = ka } catch (ga) { l = Ca({ ec: b[43], em: ga.message }), h = !1 } l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta) } m.prototype = { toString: function() { return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143] } }; var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0,
                    Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]],
                    y = window[c[6]],
                    N = a[16],
                    T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158],
                    L = a[158],
                    ha = a[23],
                    va = a[23],
                    d = function(b, c) { if (null == b) return null; for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++)); return e },
                    Za = b[345],
                    S = b[299],
                    V = c[100],
                    fa = a[91],
                    ea = b[275],
                    Ta = ea.length,
                    sa = a[444],
                    ta = a[396],
                    Ya = !1,
                    Xa = !1,
                    O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56],
                    A = function(d, e) { if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]); for (var f = a[15]; f < e.length; f++) { var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]); if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f] } return null }(O, A),
                    pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    K = function(c) { var d = []; if (!c) return d;
                        c = c.split(b[38]); for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e)); return d }(O);
                K.push(null);
                K.push(b[38] + O);
                (function(d) { for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) { var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541]) } return e })(S) > a[541] && Ia();
                (function() { var a = Q(); if (null == a || void 0 == a || a == b[0]) a = !1;
                    else { var c; if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c } return a })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua() })() })() })() })();
(function() {})();
(function() { var bvP5U; var sF9w = "VISITOR_CLIENT_NO_COOKIE_SUPPORT"; var cqn6h = 0; var bvW5b = 0; var bvZ5e = 1; var bwe5j = 0; var bei1x = ""; var bwl5q = ""; var bwm5r = ""; var UL8D = ""; var UM8E = ""; var bed1x = ""; var bws5x = 0; var bwt5y = ""; var HS3x = ""; var BK1x = 0; var bdY1x = ntes_get_domain(); var bdS1x = null; var ctQ7J = "//analytics.163.com"; var cqj6d = function() {};

    function is_spider() { return /baiduspider/gi.test(window.navigator.userAgent) }

    function ntes_get_domain() { var f = document.domain; var d = f.split("."); var c = d.length; var e = /^\d+$/g; if (e.test(d[c - 1])) { return f } if (d.length < 3) { return "." + f } var g = ["com", "net", "org", "gov", "co"]; var b, a = false; for (b = 0; b < g.length; b++) { if (d[c - 2] == g[b]) { a = true } } if (!a) { return "." + d[c - 2] + "." + d[c - 1] } else { return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1] } }

    function ntes_set_cookie_long(a, c) { var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bdY1x }

    function ntes_set_cookie(a, c) { var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bdY1x }

    function ntes_set_cookie_new(b, d, a) { if (!a || a == "") { a = 1e3 * 60 * 60 * 24 * 365 * 1 } var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bdY1x }

    function ntes_get_cookie(c) { var a = document.cookie; var d = c + "="; var g = a.length; var b = 0; while (b < g) { var e = b + d.length; if (a.substring(b, e) == d) { var f = a.indexOf(";", e); if (f == -1) { f = g } return unescape(a.substring(e, f)) } b = a.indexOf(" ", b) + 1; if (b == 0) { break } } return -1 }

    function ntes_get_flashver() { var f = "",
            n = navigator; if (n.plugins && n.plugins.length) { for (var ii = 0; ii < n.plugins.length; ii++) { if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) { f = n.plugins[ii].description.split("Shockwave Flash")[1]; break } } } else { if (window.ActiveXObject) { for (var ii = 10; ii >= 2; ii--) { try { var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');"); if (fl) { f = ii + ".0"; break } } catch (e) {} } } } return f } var cqi6c = 0; var Ot6n = 8;

    function ntes_hex_md5(a) { return binl2hex(ntes_core_md5(str2binl(a), a.length * Ot6n)) }

    function ntes_core_md5(p, k) { p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k; var o = 1732584193; var n = -271733879; var m = -1732584194; var l = 271733878; for (var g = 0; g < p.length; g += 16) { var j = o; var h = n; var f = m; var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e) } return Array(o, n, m, l) }

    function md5_cmn(h, e, d, c, g, f) { return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d) }

    function md5_ff(g, f, k, j, e, i, h) { return md5_cmn(f & k | ~f & j, g, f, e, i, h) }

    function md5_gg(g, f, k, j, e, i, h) { return md5_cmn(f & j | k & ~j, g, f, e, i, h) }

    function md5_hh(g, f, k, j, e, i, h) { return md5_cmn(f ^ k ^ j, g, f, e, i, h) }

    function md5_ii(g, f, k, j, e, i, h) { return md5_cmn(k ^ (f | ~j), g, f, e, i, h) }

    function safe_add(a, d) { var c = (a & 65535) + (d & 65535); var b = (a >> 16) + (d >> 16) + (c >> 16); return b << 16 | c & 65535 }

    function bit_rol(a, b) { return a << b | a >>> 32 - b }

    function str2binl(d) { var c = new Array; var a = (1 << Ot6n) - 1; for (var b = 0; b < d.length * Ot6n; b += Ot6n) { c[b >> 5] |= (d.charCodeAt(b / Ot6n) & a) << b % 32 } return c }

    function binl2hex(c) { var b = cqi6c ? "0123456789ABCDEF" : "0123456789abcdef"; var d = ""; for (var a = 0; a < c.length * 4; a++) { d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15) } return d }

    function str_to_ent(e) { var a = ""; var d; for (d = 0; d < e.length; d++) { var f = e.charCodeAt(d); var b = ""; if (f > 255) { while (f >= 1) { b = "0123456789".charAt(f % 10) + b;
                    f = f / 10 } if (b == "") { b = "0" } b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b } else { a += e.charAt(d) } } return a }

    function ntes_get_navigation_info() { UL8D = "-";
        bed1x = "-";
        UM8E = "-"; var c = window.self,
            b = window.screen,
            a = window.navigator; if (c.screen) { UL8D = b.width + "x" + b.height;
            bed1x = b.colorDepth + "-bit" } else { if (c.java) { var e = java.awt.Toolkit.getDefaultToolkit(); var f = e.getScreenSize();
                UL8D = f.width + "x" + f.height } } if (a.language) { UM8E = a.language.toLowerCase() } else { if (a.browserLanguage) { UM8E = a.browserLanguage.toLowerCase() } } var g = new Date(document.lastModified);
        bws5x = g.getTime() / 1e3 }

    function fetch_visitor_hash() { var c = new Date; var b = document.body.clientWidth + ":" + document.body.clientHeight; var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b); return ntes_hex_md5(a) }

    function ctS7L(c, b, f) { var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
            a, d = f || cqj6d;
        a = window[e] = new Image;
        a.onload = function() { window[e] = null;
            d() };
        a.onerror = function() { window[e] = null;
            d() };
        a.src = b;
        a = null }

    function neteaseTracker(l, a, m, k) { if (is_spider()) { return } var e = k || bvP5U;
        bei1x = escape(a || document.location);
        bwl5q = escape(m || document.title);
        bwm5r = l === true ? "" : escape(l || document.referrer);
        bwt5y = ntes_get_flashver(); var b = (new Date).getTime(); if (bdS1x == null) { document.cookie = "__ntes__test__cookies=" + b;
            bdS1x = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString() } if (e == "undefined" || !e) { return } if (bei1x.indexOf("http") != 0) { return } var h = ntes_get_cookie("_ntes_nnid"); if (h == -1) { if (bdS1x) { sF9w = fetch_visitor_hash();
                bvW5b = 1;
                ntes_set_cookie_long("_ntes_nnid", sF9w + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", sF9w) } } else { var o = h.indexOf(","); var p = h.indexOf("|"); var f = false; if (p == -1) { p = h.length } sF9w = h.substr(0, o);
            BK1x = h.substr(o + 1, p - o - 1); if (BK1x == 0) { BK1x = (new Date).getTime();
                f = true } if (!sF9w) { sF9w = fetch_visitor_hash();
                f = true } if (f) { ntes_set_cookie_long("_ntes_nnid", sF9w + "," + BK1x);
                ntes_set_cookie_long("_ntes_nuid", sF9w) } if (BK1x != 0 && b - BK1x > 365 * 86400 * 1e3) { BK1x = 0;
                ntes_set_cookie_long("_ntes_nnid", sF9w + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", sF9w) } }

        function c(q, i) { var s = ntes_get_cookie(q),
                r = ntes_get_cookie(i); return s == -1 ? r == -1 ? "" : r : s } HS3x = c("P_INFO", "P_OINFO");
        HS3x = HS3x ? HS3x.substr(0, HS3x.indexOf("|")) : "";
        bwe5j = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info(); var n = ["_nacc=", e, "&_nvid=", sF9w, "&_nvtm=", cqn6h, "&_nvsf=", bvZ5e, "&_nvfi=", bvW5b, "&_nlag=", UM8E, "&_nlmf=", bws5x, "&_nres=", UL8D, "&_nscd=", bed1x, "&_nstm=", bwe5j, "&_nurl=", bei1x, "&_ntit=", bwl5q, "&_nref=", bwm5r, "&_nfla=", bwt5y, "&_nssn=", HS3x, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bvZ5e = 0;
        neteaseTracker.callback = null } bvP5U = "iad";
    neteaseTracker() })();
(function() {})();
var CryptoJS = CryptoJS || function(u, p) { var d = {},
        l = d.lib = {},
        s = function() {},
        t = l.Base = { extend: function(a) { s.prototype = this; var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function() { c.$super.init.apply(this, arguments) });
                c.init.prototype = c;
                c.$super = this; return c }, create: function() { var a = this.extend();
                a.init.apply(a, arguments); return a }, init: function() {}, mixIn: function(a) { for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString) }, clone: function() { return this.init.prototype.extend(this) } },
        r = l.WordArray = t.extend({ init: function(a, c) { a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length }, toString: function(a) { return (a || v).stringify(this) }, concat: function(a) { var c = this.words,
                    e = a.words,
                    j = this.sigBytes;
                a = a.sigBytes;
                this.clamp(); if (j % 4)
                    for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length)
                    for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
                else c.push.apply(c, e);
                this.sigBytes += a; return this }, clamp: function() { var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = u.ceil(c / 4) }, clone: function() { var a = t.clone.call(this);
                a.words = this.words.slice(0); return a }, random: function(a) { for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0); return new r.init(c, a) } }),
        w = d.enc = {},
        v = w.Hex = { stringify: function(a) { var c = a.words;
                a = a.sigBytes; for (var e = [], j = 0; j < a; j++) { var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16)) } return e.join("") }, parse: function(a) { for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8); return new r.init(e, c / 2) } },
        b = w.Latin1 = { stringify: function(a) { var c = a.words;
                a = a.sigBytes; for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255)); return e.join("") }, parse: function(a) { for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4); return new r.init(e, c) } },
        x = w.Utf8 = { stringify: function(a) { try { return decodeURIComponent(escape(b.stringify(a))) } catch (c) { throw Error("Malformed UTF-8 data") } }, parse: function(a) { return b.parse(unescape(encodeURIComponent(a))) } },
        q = l.BufferedBlockAlgorithm = t.extend({ reset: function() { this.j2x = new r.init;
                this.bxj5o = 0 }, UN8F: function(a) { "string" == typeof a && (a = x.parse(a));
                this.j2x.concat(a);
                this.bxj5o += a.sigBytes }, Aj1x: function(a) { var c = this.j2x,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this.bxh5m, 0);
                a = b * k;
                j = u.min(4 * a, j); if (a) { for (var q = 0; q < a; q += k) this.bxq5v(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j } return new r.init(q, j) }, clone: function() { var a = t.clone.call(this);
                a.j2x = this.j2x.clone(); return a }, bxh5m: 0 });
    l.Hasher = q.extend({ cfg: t.extend(), init: function(a) { this.cfg = this.cfg.extend(a);
            this.reset() }, reset: function() { q.reset.call(this);
            this.bdI1x() }, update: function(a) { this.UN8F(a);
            this.Aj1x(); return this }, finalize: function(a) { a && this.UN8F(a); return this.UO8G() }, blockSize: 16, bdO1x: function(a) { return function(b, e) { return (new a.init(e)).finalize(b) } }, cqf6Z: function(a) { return function(b, e) { return (new n.HMAC.init(a, e)).finalize(b) } } }); var n = d.algo = {}; return d }(Math);
(function() { var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = { stringify: function(d) { var l = d.words,
                p = d.sigBytes,
                t = this.bv3x;
            d.clamp();
            d = []; for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63)); if (l = t.charAt(64))
                for (; d.length % 4;) d.push(l); return d.join("") }, parse: function(d) { var l = d.length,
                s = this.bv3x,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t)); for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) { var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                        b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++ }
            return p.create(t, r) }, bv3x: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" } })();
(function(u) {
    function p(b, n, a, c, e, j, k) { b = b + (n & a | ~n & c) + e + k; return (b << j | b >>> 32 - j) + n }

    function d(b, n, a, c, e, j, k) { b = b + (n & c | a & ~c) + e + k; return (b << j | b >>> 32 - j) + n }

    function l(b, n, a, c, e, j, k) { b = b + (n ^ a ^ c) + e + k; return (b << j | b >>> 32 - j) + n }

    function s(b, n, a, c, e, j, k) { b = b + (a ^ (n | ~c)) + e + k; return (b << j | b >>> 32 - j) + n } for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({ bdI1x: function() { this.dI4M = new w.init([1732584193, 4023233417, 2562383102, 271733878]) }, bxq5v: function(q, n) { for (var a = 0; 16 > a; a++) { var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360 } var a = this.dI4M.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0 }, UO8G: function() { var b = this.j2x,
                n = b.words,
                a = 8 * this.bxj5o,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32; var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.Aj1x();
            b = this.dI4M;
            n = b.words; for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360; return b }, clone: function() { var b = v.clone.call(this);
            b.dI4M = this.dI4M.clone(); return b } });
    t.MD5 = v.bdO1x(r);
    t.HmacMD5 = v.cqf6Z(r) })(Math);
(function() { var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({ cfg: d.extend({ keySize: 4, hasher: p.MD5, iterations: 1 }), init: function(d) { this.cfg = this.cfg.extend(d) }, compute: function(d, r) { for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) { n && s.update(n); var n = s.update(d).finalize(r);
                    s.reset(); for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                    b.concat(n) } b.sigBytes = 4 * q; return b } });
    u.EvpKDF = function(d, l, p) { return s.create(p).compute(d, l) } })();
CryptoJS.lib.Cipher || function(u) { var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({ cfg: l.extend(), createEncryptor: function(e, a) { return this.create(this.bdD0x, e, a) }, createDecryptor: function(e, a) { return this.create(this.cqd6X, e, a) }, init: function(e, a, b) { this.cfg = this.cfg.extend(b);
                this.bxS5X = e;
                this.J3x = a;
                this.reset() }, reset: function() { t.reset.call(this);
                this.bdI1x() }, process: function(e) { this.UN8F(e); return this.Aj1x() }, finalize: function(e) { e && this.UN8F(e); return this.UO8G() }, keySize: 4, ivSize: 4, bdD0x: 1, cqd6X: 2, bdO1x: function(e) { return { encrypt: function(b, k, d) { return ("string" == typeof k ? c : a).encrypt(e, b, k, d) }, decrypt: function(b, k, d) { return ("string" == typeof k ? c : a).decrypt(e, b, k, d) } } } });
    d.StreamCipher = v.extend({ UO8G: function() { return this.Aj1x(!0) }, blockSize: 1 }); var b = p.mode = {},
        x = function(e, a, b) { var c = this.bxY5d;
            c ? this.bxY5d = u : c = this.byb5g; for (var d = 0; d < b; d++) e[a + d] ^= c[d] },
        q = (d.BlockCipherMode = l.extend({ createEncryptor: function(e, a) { return this.Encryptor.create(e, a) }, createDecryptor: function(e, a) { return this.Decryptor.create(e, a) }, init: function(e, a) { this.bye5j = e;
                this.bxY5d = a } })).extend();
    q.Encryptor = q.extend({ processBlock: function(e, a) { var b = this.bye5j,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.byb5g = e.slice(a, a + c) } });
    q.Decryptor = q.extend({ processBlock: function(e, a) { var b = this.bye5j,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.byb5g = d } });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = { pad: function(a, b) { for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c) }, unpad: function(a) { a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255 } };
    d.BlockCipher = v.extend({ cfg: v.cfg.extend({ mode: b, padding: q }), reset: function() { v.reset.call(this); var a = this.cfg,
                b = a.iv,
                a = a.mode; if (this.bxS5X == this.bdD0x) var c = a.createEncryptor;
            else c = a.createDecryptor, this.bxh5m = 1;
            this.eC4G = c.call(a, this, b && b.words) }, bxq5v: function(a, b) { this.eC4G.processBlock(a, b) }, UO8G: function() { var a = this.cfg.padding; if (this.bxS5X == this.bdD0x) { a.pad(this.j2x, this.blockSize); var b = this.Aj1x(!0) } else b = this.Aj1x(!0), a.unpad(b); return b }, blockSize: 4 }); var n = d.CipherParams = l.extend({ init: function(a) { this.mixIn(a) }, toString: function(a) { return (a || this.formatter).stringify(this) } }),
        b = (p.format = {}).OpenSSL = { stringify: function(a) { var b = a.ciphertext;
                a = a.salt; return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r) }, parse: function(a) { a = r.parse(a); var b = a.words; if (1398893684 == b[0] && 1701076831 == b[1]) { var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16 } return n.create({ ciphertext: a, salt: c }) } },
        a = d.SerializableCipher = l.extend({ cfg: l.extend({ format: b }), encrypt: function(a, b, c, d) { d = this.cfg.extend(d); var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg; return n.create({ ciphertext: b, key: c, iv: l.iv, algorithm: a, mode: l.mode, padding: l.padding, blockSize: a.blockSize, formatter: d.format }) }, decrypt: function(a, b, c, d) { d = this.cfg.extend(d);
                b = this.YY9P(b, d.format); return a.createDecryptor(c, d).finalize(b.ciphertext) }, YY9P: function(a, b) { return "string" == typeof a ? b.parse(a, this) : a } }),
        p = (p.kdf = {}).OpenSSL = { execute: function(a, b, c, d) { d || (d = s.random(8));
                a = w.create({ keySize: b + c }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b; return n.create({ key: a, iv: c, salt: d }) } },
        c = d.PasswordBasedCipher = a.extend({ cfg: a.cfg.extend({ kdf: p }), encrypt: function(b, c, d, l) { l = this.cfg.extend(l);
                d = l.kdf.execute(d, b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d); return b }, decrypt: function(b, c, d, l) { l = this.cfg.extend(l);
                c = this.YY9P(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv; return a.decrypt.call(this, b, c, d.key, l) } }) }();
(function() { for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283; for (var e = 0, j = 0, c = 0; 256 > c; c++) { var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e; var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1 } var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        d = d.AES = p.extend({ bdI1x: function() { for (var a = this.J3x, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cpV6P = d + 6) + 1), e = this.cpU6O = [], j = 0; j < a; j++)
                    if (j < d) e[j] = c[j];
                    else { var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k }
                c = this.cpT6N = []; for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]] }, encryptBlock: function(a, b) { this.byf5k(a, b, this.cpU6O, t, r, w, v, l) }, decryptBlock: function(a, c) { var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.byf5k(a, c, this.cpT6N, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d }, byf5k: function(a, b, c, d, e, j, l, f) { for (var m = this.cpV6P, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                    s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                    t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                    n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                    g = q,
                    h = s,
                    k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n }, keySize: 8 });
    u.AES = p.bdO1x(d) })();

function RSAKeyPair(a, b, c) { this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m) }

function twoDigit(a) { return (10 > a ? "0" : "") + String(a) }

function encryptedString(a, b) { for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++; for (; 0 != c.length % a.chunkSize;) c[e++] = 0; for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) { for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " " } return g.substring(0, g.length - 1) }

function decryptedString(a, b) { var e, f, g, h, c = b.split(" "),
        d = ""; for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8); return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d }

function setMaxDigits(a) { maxDigits = a, ZERO_ARRAY = new Array(maxDigits); for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1 }

function BigInt(a) { this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1 }

function biFromDecimal(a) { for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);) ++c; if (c == a.length) d = new BigInt;
    else { for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b } return d }

function biCopy(a) { var b = new BigInt(!0); return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b }

function biFromNumber(a) { var c, b = new BigInt; for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits; return b }

function reverseStr(a) { var c, b = ""; for (c = a.length - 1; c > -1; --c) b += a.charAt(c); return b }

function biToString(a, b) { var d, e, c = new BigInt; for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]]; return (a.isNeg ? "-" : "") + reverseStr(e) }

function biToDecimal(a) { var c, d, b = new BigInt; for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]); return (a.isNeg ? "-" : "") + reverseStr(d) }

function digitToHex(a) { var b = 15,
        c = ""; for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4; return reverseStr(c) }

function biToHex(a) { var d, b = ""; for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]); return b }

function charToHex(a) { var h, b = 48,
        c = b + 9,
        d = 97,
        e = d + 25,
        f = 65,
        g = 90; return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0 }

function hexToDigit(a) { var d, b = 0,
        c = Math.min(a.length, 4); for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d)); return b }

function biFromHex(a) { var d, e, b = new BigInt,
        c = a.length; for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4))); return b }

function biFromString(a, b) { var g, h, i, j, c = "-" == a.charAt(0),
        d = c ? 1 : 0,
        e = new BigInt,
        f = new BigInt; for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b); return e.isNeg = c, e }

function biDump(a) { return (a.isNeg ? "-" : "") + a.digits.join(" ") }

function biAdd(a, b) { var c, d, e, f; if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg;
    else { for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg } return c }

function biSubtract(a, b) { var c, d, e, f; if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg;
    else { for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d); if (-1 == e) { for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg } else c.isNeg = a.isNeg } return c }

function biHighIndex(a) { for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];) --b; return b }

function biNumBits(a) { var e, b = biHighIndex(a),
        c = a.digits[b],
        d = (b + 1) * bitsPerDigit; for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1; return e }

function biMultiply(a, b) { var d, h, i, k, c = new BigInt,
        e = biHighIndex(a),
        f = biHighIndex(b); for (k = 0; f >= k; ++k) { for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d } return c.isNeg = a.isNeg != b.isNeg, c }

function biMultiplyDigit(a, b) { var c, d, e, f; for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits; return result.digits[1 + c] = d, result }

function arrayCopy(a, b, c, d, e) { var g, h, f = Math.min(b + e, a.length); for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g] }

function biShiftLeft(a, b) { var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt; for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f; return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d }

function biShiftRight(a, b) { var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt; for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f; return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d }

function biMultiplyByRadixPower(a, b) { var c = new BigInt; return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c }

function biDivideByRadixPower(a, b) { var c = new BigInt; return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c }

function biModuloByRadixPower(a, b) { var c = new BigInt; return arrayCopy(a.digits, 0, c.digits, 0, b), c }

function biCompare(a, b) { if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg); for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]); return 0 }

function biDivideModulo(a, b) { var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a),
        d = biNumBits(b),
        e = b.isNeg; if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g); for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1; for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); - 1 != biCompare(g, k);) ++f.digits[j - h], g = biSubtract(g, k); for (l = j; l > h; --l) { for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;) --f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1]) } return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g) }

function biDivide(a, b) { return biDivideModulo(a, b)[0] }

function biModulo(a, b) { return biDivideModulo(a, b)[1] }

function biMultiplyMod(a, b, c) { return biModulo(biMultiply(a, b), c) }

function biPow(a, b) { for (var c = bigOne, d = a;;) { if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d) } return c }

function biPowMod(a, b, c) { for (var d = bigOne, e = a, f = b;;) { if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c) } return d }

function BarrettMu(a) { this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1; var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod }

function BarrettMu_modulo(a) { var i, b = biDivideByRadixPower(a, this.k - 1),
        c = biMultiply(b, this.mu),
        d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1),
        f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1),
        h = biSubtract(e, g); for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0; return h }

function BarrettMu_multiplyMod(a, b) { var c = biMultiply(a, b); return this.modulo(c) }

function BarrettMu_powMod(a, b) { var d, e, c = new BigInt; for (c.digits[0] = 1, d = a, e = b;;) { if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d) } return c }
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2,
    biRadixBits = 16,
    bitsPerDigit = biRadixBits,
    biRadix = 65536,
    biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix,
    maxDigitVal = biRadix - 1,
    maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
! function() {
    function a(a) { var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            c = ""; for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e); return c }

    function b(a, b) { var c = CryptoJS.enc.Utf8.parse(b),
            d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a),
            f = CryptoJS.AES.encrypt(e, c, { iv: d, mode: CryptoJS.mode.CBC }); return f.toString() }

    function c(a, b, c) { var d, e; return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a) }

    function d(d, e, f, g) { var h = {},
            i = a(16); return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h }

    function e(a, b, d, e) { var f = {}; return f.encText = c(a + e, b, d), f } window.asrsea = d, window.ecnonasr = e }();
(function() { var c2x = NEJ.P,
        dO4S = c2x("nej.g"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        Oq6k = c2x("nm.x.ek");
    Oq6k.emj = { "色": "00e0b", "流感": "509f6", "这边": "259df", "弱": "8642d", "嘴唇": "bc356", "亲": "62901", "开心": "477df", "呲牙": "22677", "憨笑": "ec152", "猫": "b5ff6", "皱眉": "8ace6", "幽灵": "15bb7", "蛋糕": "b7251", "发怒": "52b3a", "大哭": "b17a8", "兔子": "76aea", "星星": "8a5aa", "钟情": "76d2e", "牵手": "41762", "公鸡": "9ec4e", "爱意": "e341f", "禁止": "56135", "狗": "fccf6", "亲亲": "95280", "叉": "104e0", "礼物": "312ec", "晕": "bda92", "呆": "557c9", "生病": "38701", "钻石": "14af6", "拜": "c9d05", "怒": "c4f7f", "示爱": "0c368", "汗": "5b7a4", "小鸡": "6bee2", "痛苦": "55932", "撇嘴": "575cc", "惶恐": "e10b4", "口罩": "24d81", "吐舌": "3cfe4", "心碎": "875d3", "生气": "e8204", "可爱": "7b97d", "鬼脸": "def52", "跳舞": "741d5", "男孩": "46b8e", "奸笑": "289dc", "猪": "6935b", "圈": "3ece0", "便便": "462db", "外星": "0a22b", "圣诞": "8e7", "流泪": "01000", "强": "1", "爱心": "0CoJU", "女孩": "m6Qyw", "惊恐": "8W8ju", "大笑": "d" };
    Oq6k.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"] })();
(function() { var c2x = NEJ.P,
        dO4S = c2x("nej.g"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        Oq6k = c2x("nm.x.ek"),
        l2x = c2x("nm.x"); if (v2x.bp3x.redefine) return;
    window.GEnc = true; var bdp0x = function(cpQ6K) { var m2x = [];
        k2x.be3x(cpQ6K, function(cpP6J) { m2x.push(Oq6k.emj[cpP6J]) }); return m2x.join("") }; var cpO6I = v2x.bp3x;
    v2x.bp3x = function(V3x, e2x) { var j2x = {},
            e2x = NEJ.X({}, e2x),
            lm7f = V3x.indexOf("?"); if (window.GEnc && /(^|\.com)\/api/.test(V3x) && !(e2x.headers && e2x.headers[dO4S.xd0x] == dO4S.CV2x) && !e2x.noEnc) { if (lm7f != -1) { j2x = k2x.ho5t(V3x.substring(lm7f + 1));
                V3x = V3x.substring(0, lm7f) } if (e2x.query) { j2x = NEJ.X(j2x, k2x.fe5j(e2x.query) ? k2x.ho5t(e2x.query) : e2x.query) } if (e2x.data) { j2x = NEJ.X(j2x, k2x.fe5j(e2x.data) ? k2x.ho5t(e2x.data) : e2x.data) } j2x["csrf_token"] = v2x.gF5K("__csrf");
            V3x = V3x.replace("api", "weapi");
            e2x.method = "post";
            delete e2x.query; var byB6v = window.asrsea(JSON.stringify(j2x), bdp0x(["流泪", "强"]), bdp0x(Oq6k.md), bdp0x(["爱心", "女孩", "惊恐", "大笑"]));
            e2x.data = k2x.df4j({ params: byB6v.encText, encSecKey: byB6v.encSecKey }) } cpO6I(V3x, e2x) };
    v2x.bp3x.redefine = true })();
(function() { window.setTimeout(function() { var bp = document.createElement("script"); var curProtocol = window.location.protocol.split(":")[0]; if (curProtocol === "https") { bp.src = "https://zz.bdstatic.com/linksubmit/push.js" } else { bp.src = "http://push.zhanzhang.baidu.com/push.js" } var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s) }, 3e3) })();
(function() {})();
(function() {})();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        cP4T = c2x("nej.p"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        di4m = c2x("nm.u"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        bdn0x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
        j2x = { "大笑": "86", "可爱": "85", "憨笑": "359", "色": "95", "亲亲": "363", "惊恐": "96", "流泪": "356", "亲": "362", "呆": "352", "哀伤": "342", "呲牙": "343", "吐舌": "348", "撇嘴": "353", "怒": "361", "奸笑": "341", "汗": "97", "痛苦": "346", "惶恐": "354", "生病": "350", "口罩": "351", "大哭": "357", "晕": "355", "发怒": "115", "开心": "360", "鬼脸": "94", "皱眉": "87", "流感": "358", "爱心": "33", "心碎": "34", "钟情": "303", "星星": "309", "生气": "314", "便便": "89", "强": "13", "弱": "372", "拜": "14", "牵手": "379", "跳舞": "380", "禁止": "374", "这边": "262", "爱意": "106", "示爱": "376", "嘴唇": "367", "狗": "81", "猫": "78", "猪": "100", "兔子": "459", "小鸡": "450", "公鸡": "461", "幽灵": "116", "圣诞": "411", "外星": "101", "钻石": "52", "礼物": "107", "男孩": "0", "女孩": "1", "蛋糕": "337", 18: "186", "圈": "312", "叉": "313" },
        cpL6F = function() { if (h2x && h2x.z2x) { h2x.dispatchEventalias = h2x.z2x } };
    cpL6F();
    l2x.bdj0x = function(bK3x) { if (!bK3x || bK3x.copyrightId === undefined || !!bK3x.program) return false; if (window.GAbroad) { bK3x.fee = 0; return true } if (bK3x.status < 0) return true; var On6h; if (typeof GCopyrights !== "undefined") On6h = GCopyrights; try { if (!On6h && !!top.GCopyrights) On6h = top.GCopyrights } catch (e) {} if (On6h) { var s2x = k2x.cV4Z(On6h, bK3x.copyrightId); if (s2x >= 0) return true } return false };
    l2x.bdf0x = function() { var Al1x = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
            vr0x = { 2: "artist", 13: "playlist", 17: "dj", 19: "album", 18: "song", 31: "toplist", 32: "searchsong", 33: "searchlyric", 34: "event", 70: "djradio", 24: "day", 50: "record" },
            cpJ6D = { song: "单曲", album: "专辑", artist: "歌手", playlist: "歌单", dj: "电台节目", searchsong: "单曲搜索", searchlyric: "歌词搜索", toplist: "榜单", event: "动态", djradio: "电台", day: "每日歌曲推荐", record: "听歌排行榜" }; var cpI6C = function(J3x, j2x, Ol6f) { switch (J3x) {
                case "event":
                    j2x = j2x.split("|"); return "/event?id=" + j2x[0] + "&uid=" + j2x[1];
                case "searchsong":
                case "searchlyric":
                    var t2x = J3x == "searchsong" ? 1 : 1006; return "/search/m/?s=" + encodeURIComponent(j2x) + "&type=" + t2x;
                case "toplist":
                    return "/discover/toplist?id=" + j2x + "&_hash=songlist-" + Ol6f;
                case "day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + Ol6f;;
                case "record":
                    j2x = j2x.split("|"); return "/user/songs/rank?id=" + j2x[0] + "&cat=" + j2x[1]; break;
                default:
                    return "/" + J3x + "?id=" + j2x + "&_hash=songlist-" + Ol6f } }; return function(dJ4N, Ol6f) { if (!dJ4N) return null; var HF3x = dJ4N.fid || (dJ4N.type != 18 ? dJ4N.type : null),
                bcS0x = dJ4N.fdata || dJ4N.rid,
                bzo6i = dJ4N.page || dJ4N.fhref; var J3x = vr0x[HF3x]; if (!J3x) { var xn0x = (bzo6i || "").match(Al1x); if (xn0x) J3x = xn0x[1] } if (!J3x) return null; return { title: cpJ6D[J3x], link: !vr0x[HF3x] ? bzo6i : cpI6C(J3x, bcS0x, Ol6f), fid: HF3x, fdata: bcS0x } } }();
    l2x.Va8S = function(kr6l) { var ds4w = kr6l; if (typeof GUser !== "undefined" && GUser.userId > 0) ds4w = GUser; return ds4w };
    l2x.hc5h = function() { if (typeof GUser !== "undefined" && GUser.userId > 0) { return true } else { top.login(); return false } };
    l2x.HV3x = function() { var Al1x = /#(.*?)$/; return function(gl5q) { var iG6A = gl5q === false ? location : top.location; return Al1x.test(iG6A.href) ? RegExp.$1 : "" } }();
    l2x.An1x = function() { var Ao1x = a1x.cT4X("audio"),
            cpB6v = Ao1x.canPlayType && Ao1x.canPlayType("audio/mpeg"); if (cpB6v) return 2; var cpA6u = l2x.bcz0x().supported; if (cpA6u) return 1; return 0 };
    l2x.bcz0x = function() { var gc5h, bck0x = !1,
            bci0x = ""; if (cP4T.cR4V.browser == "ie") { try { gc5h = new ActiveXObject("ShockwaveFlash.ShockwaveFlash") } catch (e) { gc5h = null } if (gc5h) { bck0x = !0;
                bci0x = gc5h.GetVariable("$version") } } else { if (navigator.plugins && navigator.plugins.length > 0) { gc5h = navigator.plugins["Shockwave Flash"]; if (gc5h) { bck0x = !0;
                    bci0x = gc5h.description } } } return { supported: bck0x, version: bci0x } };
    l2x.qC8u = function() { return "网易云音乐" };
    l2x.cpz6t = function() { return j2x };
    l2x.bAj6d = function(cZ4d) { var C2x = j2x[cZ4d]; return C2x == null ? "" : bdn0x.replace("{ID}", C2x) };
    l2x.sy9p = function(bi3x, dD4H, HY3x) { if (!bi3x) return ""; if (!!HY3x) { bi3x = l2x.cpt6n(bi3x) } return l2x.bce0x(l2x.cps6m(bi3x, dD4H)) };
    l2x.bbJ0x = function() { var NT5Y = { AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g, LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g, ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g, ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g, LING: /\n/g, BLANK: /\s/g, MLINE: /([ \f\r\t\v]*\n){2,}/g },
            bbE0x = { LINK: '<a href="${url}" class="${klass}">${value}</a>', AT: '<a href="${url}" class="${klass}">@${value}</a>', ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>' },
            cpj6d = { r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g, "<": "&lt;", ">": "&gt;", "&": "&amp;", " ": "&nbsp;", '"': "&quot;", "'": "&#39;", "&lt;": "&lt;", "&gt;": "&gt;" },
            cph6b = ["AT", "LINK", "ACT_NOLINK", "ACT"]; var cpg6a = function(dp4t, bbz0x) { dp4t = HZ3x(dp4t); if (!!bbz0x) { dp4t = dp4t.replace(NT5Y.MLINE, "\n\n").replace(NT5Y.LING, "</br>") } dp4t = l2x.bce0x(dp4t); return dp4t }; var HZ3x = function(bi3x) { return k2x.Ec2x(cpj6d, bi3x) }; return function(dp4t, e2x, ef4j) { e2x = e2x || {};
            ef4j = ef4j || {};
            ef4j.actHash = {}; var cpf6Z = !!e2x.parseLink,
                cpd6X = !!e2x.parseAct,
                cpc6W = e2x.linkTpl || bbE0x.LINK,
                cpb6V = e2x.atTpl || bbE0x.AT,
                coX6R = e2x.actTpl || bbE0x.ACT,
                bbz0x = !!e2x.keepSpace,
                bbo0x = e2x.linkKlass || "s-fc7";
            ctX7Q = e2x.actBiJson || ""; if (!dp4t) return "";
            dp4t = dp4t.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " "); var kx6r = cph6b[cpf6Z + 2 * cpd6X],
                cM4Q = NT5Y[kx6r],
                bs3x = null,
                kX7Q = null,
                gz5E = 0,
                ctY7R = "",
                ctZ7S = ""; var Av1x = [];
            cM4Q.lastIndex = 0; while (bs3x = cM4Q.exec(dp4t)) { var fN5S = { html: "", before: bs3x.index - 1, after: bs3x.index + bs3x[0].length }; if (bs3x[1]) { var kX7Q = bs3x[2].replace(/[^\x00-\xff]/g, "**"); if (kX7Q.length < 4 || kX7Q.length > 32) {} else { var NN5S = a1x.er4v(cpb6V);
                        fN5S.html = a1x.bP3x(NN5S, { value: HZ3x(bs3x[2]), url: encodeURI("/user/home?nickname=" + bs3x[2]), klass: bbo0x });
                        Av1x.push(fN5S) } } else if (bs3x.length > 8 && bs3x[4]) { var NN5S = a1x.er4v(cpc6W);
                    fN5S.html = a1x.bP3x(NN5S, { value: HZ3x(bs3x[4]), url: encodeURI(bs3x[4]), klass: bbo0x });
                    Av1x.push(fN5S) } else { var bCj6d = kx6r == "ACT_NOLINK" ? 4 : 9; var NN5S = a1x.er4v(coX6R);
                    fN5S.html = a1x.bP3x(NN5S, { value: HZ3x(bs3x[bCj6d]), klass: bbo0x });
                    Av1x.push(fN5S);
                    ef4j.actHash[bs3x[bCj6d].slice(1, -1)] = true } } var coN6H = Av1x.length,
                kr6l = { before: dp4t.length - 1, after: 0 },
                baF0x = ""; for (var i = 0; i <= coN6H; i++) { var iq6k, gC5H;
                iq6k = (Av1x[i - 1] || kr6l).after;
                gC5H = (Av1x[i] || kr6l).before; if (gC5H >= iq6k && iq6k >= 0 && gC5H <= dp4t.length - 1) { baF0x += cpg6a(dp4t.substring(iq6k, gC5H + 1), bbz0x) } if (Av1x[i]) { baF0x += Av1x[i].html } } return baF0x } }();
    l2x.cpt6n = function() { var cM4Q = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g"); return function(bi3x) { return (bi3x || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cM4Q, function($0, $1) { return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>' }) } }();
    l2x.cps6m = function() { var cM4Q = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g; var eH5M = function(kX7Q, dD4H) { return '<a href="/user/home?nickname=' + encodeURIComponent(kX7Q) + '" class="' + (dD4H || "") + '">@' + kX7Q + "</a>" }; return function(bi3x, dD4H) { return (bi3x || "").replace(cM4Q, function($0, $1) { return eH5M($1, dD4H) }) } }();
    l2x.bce0x = function() { var cM4Q = /\[(.*?)\]/g; return function(bi3x) { return (bi3x || "").replace(cM4Q, function($1, $2) { var V3x = l2x.bAj6d($2); return !V3x ? $1 : '<img src="' + V3x + '"/>' }) } }();
    l2x.zd1x = function(E2x, dD4H) { a1x.bz3x(E2x, dD4H) ? a1x.w2x(E2x, dD4H) : a1x.y2x(E2x, dD4H) };
    l2x.NG5L = function(cJ4N, hw5B) { cJ4N = a1x.x2x(cJ4N);
        hw5B = a1x.x2x(hw5B); if (!cJ4N || !hw5B) return !1; for (hw5B = hw5B.parentNode; !!hw5B && hw5B != cJ4N; hw5B = hw5B.parentNode); return hw5B == cJ4N };
    l2x.lO7H = function() { var bCF6z = function(ft5y) { return (ft5y < 10 ? "0" : "") + ft5y }; return function(jM6G) { jM6G = parseInt(jM6G) || 0; if (!jM6G) return "00:00"; var NE5J = Math.floor(jM6G % 60),
                coL6F = Math.floor(jM6G / 60); return bCF6z(coL6F) + ":" + bCF6z(NE5J) } }();
    l2x.vJ0x = function(fl5q, ur9i) { if (!fl5q || fl5q.length == 0) return "";
        ur9i = ur9i || "/"; var bs3x = []; for (var i = fl5q.length - 1; i >= 0; i--) { bs3x.unshift(fl5q[i].name) } return bs3x.join(ur9i) };
    l2x.pz8r = function() { var ND5I = function(hn5s, dD4H, cJ4N) { if (!hn5s || !hn5s.name) return ""; if (!hn5s.id) return '<span class="' + dD4H + '">' + k2x.dL4P(hn5s.name) + "</span>"; return "<a" + (cJ4N ? ' target="_blank"' : "") + ' class="' + dD4H + '" href="/artist?id=' + hn5s.id + '" hidefocus="true">' + k2x.dL4P(hn5s.name) + "</a>" }; return function(fl5q, T3x, ur9i, cJ4N, bDi7b) { if (!fl5q || !fl5q.length) return "";
            ur9i = ur9i || "/";
            T3x = T3x || "";
            Im3x = ""; var eG4K = []; for (var i = 0, i2x = [], rD9u = [], ff5k; i < fl5q.length; ++i) { eG4K.push(fl5q[i].name); if (!fl5q[i] || fl5q[i].id <= 0) { rD9u.push(fl5q[i]); continue } if (k2x.gb5g(T3x)) { ff5k = T3x(fl5q[i]) } else { ff5k = ND5I(fl5q[i], T3x, cJ4N) } if (ff5k && bDi7b && fl5q[i].tns && fl5q[i].tns.length > 0) { Im3x = k2x.dL4P(fl5q[i].tns[0]);
                    ff5k += '<span class="s-fc8" title="' + Im3x + '"> - (' + Im3x + ")</span>" }!!ff5k && i2x.push(ff5k) } for (var i = 0, ff5k; i < rD9u.length; ++i) { if (k2x.gb5g(T3x)) { ff5k = T3x(rD9u[i]) } else { ff5k = ND5I(rD9u[i], T3x, cJ4N) } if (ff5k && bDi7b && rD9u[i].tns && rD9u[i].tns.length > 0) { Im3x = k2x.dL4P(rD9u[i].tns[0]);
                    ff5k += '<span class="s-fc8" title="' + Im3x + '"> - (' + Im3x + ")</span>" }!!ff5k && i2x.push(ff5k) } return '<span title="' + eG4K.join(ur9i) + '">' + i2x.join(ur9i) + "</span>" } }();
    l2x.wM0x = function(fa5f) { return !!fa5f && /^[0-9]{11}$/.test(fa5f) };
    l2x.cua7T = function(fa5f) { if (!l2x.wM0x(fa5f)) return fa5f; return fa5f.substring(0, 3) + "****" + fa5f.substr(7) };
    l2x.je6Y = function() { var cM4Q = /^\s+$/g; return function(hy5D) { return !hy5D || cM4Q.test(hy5D) } }();
    l2x.Iq3x = function() { var bqm4q = /[^\x00-\xfff]/g; return function(hy5D) { var coJ6D = hy5D.match(bqm4q) || [],
                dF4J = coJ6D.length; return hy5D.length + dF4J } }();
    l2x.Aw1x = function() { var bqm4q = /[^\x00-\xfff]/; return function(hy5D, gm5r) { for (var i = 0, len = hy5D.length; i < len && gm5r > 0; i++) { if (bqm4q.test(hy5D.charAt(i))) { gm5r -= 2; if (gm5r < 0) { break } } else { gm5r -= 1 } } return hy5D.substring(0, i) } }();
    l2x.Ay1x = function(hy5D, gm5r, Rr7k) { gm5r = gm5r || 10;
        Rr7k = Rr7k || nej.p.cR4V.engine == "trident" && parseInt(nej.p.cR4V.release) < 5; if (Rr7k && l2x.Iq3x(hy5D) > gm5r) { return l2x.Aw1x(hy5D, gm5r) + "..." } else { return hy5D } };
    l2x.bEG7z = function(f2x) { return f2x === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f2x.type || f2x.href || ~f2x.tabIndex) };
    l2x.coI6C = function(d2x, cJ4N) { if (!d2x || !cJ4N) return !0; var f2x, t2x = d2x.type.toLowerCase(); if (t2x == "mouseout") { f2x = d2x.relatedTarget || d2x.toElement } else if (t2x == "mouseover") { f2x = d2x.relatedTarget || d2x.fromElement } return !f2x || f2x !== cJ4N && !l2x.NG5L(cJ4N, f2x) };
    l2x.rd8V = function() { R3x = {}; return function(f2x, dK4O) { var C2x = a1x.kD6x(f2x),
                J3x = "hover-" + C2x; if (!dK4O || !C2x || !!R3x[J3x]) return;
            R3x[J3x] = !0;
            h2x.q2x(C2x, "mouseover", function() { var bpW3x = a1x.I2x(f2x, "hshow") || []; var bpM3x = a1x.I2x(f2x, "icn-dislike") || [];
                a1x.y2x(C2x, "z-hover");
                a1x.X3x(bpW3x[0], "display", "block");
                a1x.X3x(bpM3x[0], "display", "block") });
            h2x.q2x(C2x, "mouseout", function() { var bpW3x = a1x.I2x(f2x, "hshow") || []; var bpM3x = a1x.I2x(f2x, "icn-dislike") || [];
                a1x.w2x(C2x, "z-hover");
                a1x.X3x(bpW3x[0], "display", "none");
                a1x.X3x(bpM3x[0], "display", "none") }) } }();
    l2x.bEU7N = function() { var bv3x = { r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi, "(": "\\(", ")": "\\)", "[": "\\[", "]": "\\]", "{": "\\{", "}": "\\}", "*": "\\*", "+": "\\+", "^": "\\^", $: "\\$", "?": "\\?", "!": "\\!", "\\": "\\\\", "|": "\\|", ".": "\\." }; return function(hy5D) { return k2x.Ec2x(bv3x, hy5D) } }();
    l2x.sq9h = function(bA3x) { if (k2x.FB2x(bA3x)) bA3x = bA3x.getTime(); var fI5N = new Date,
            nb7U = fI5N.getTime() - bA3x; if (nb7U <= 6e4) return "刚刚"; var qH8z = fI5N.getHours() * 36e5 + fI5N.getMinutes() * 6e4 + fI5N.getSeconds() * 1e3; if (nb7U <= qH8z) { if (nb7U < 36e5) { var Nw5B = Math.floor(nb7U / 6e4); return Nw5B + "分钟前" } return k2x.iV6P(bA3x, "HH:mm") } else { if (nb7U < qH8z + 864e5) { return "昨天" + k2x.iV6P(bA3x, "HH:mm") } else { var gk5p = fI5N.getFullYear(),
                    bpm3x = new Date(gk5p, 0, 1); var qH8z = fI5N.getTime() - bpm3x.getTime(); if (nb7U < qH8z) { return k2x.iV6P(bA3x, "M月d日 HH:mm") } return k2x.iV6P(bA3x, "yyyy年M月d日") } } };
    l2x.coH6B = function(bA3x) { if (k2x.FB2x(bA3x)) bA3x = bA3x.getTime(); var fI5N = new Date,
            nb7U = fI5N.getTime() - bA3x; var qH8z = fI5N.getHours() * 36e5 + fI5N.getMinutes() * 6e4 + fI5N.getSeconds() * 1e3; if (nb7U <= qH8z) { return "今天" + k2x.iV6P(bA3x, "HH:mm") } else { if (nb7U < qH8z + 864e5) { return "昨天" + k2x.iV6P(bA3x, "HH:mm") } else { return k2x.iV6P(bA3x, "yy-MM-dd HH:mm") } } };
    l2x.coD6x = function(bA3x) { if (k2x.FB2x(bA3x)) bA3x = bA3x.getTime(); var fI5N = new Date,
            nb7U = fI5N.getTime() - bA3x; if (nb7U <= 6e4) return "刚刚"; var qH8z = fI5N.getHours() * 36e5 + fI5N.getMinutes() * 6e4 + fI5N.getSeconds() * 1e3; if (nb7U <= qH8z) { if (nb7U < 36e5) { var Nw5B = Math.floor(nb7U / 6e4); return Nw5B + "分钟前" } return k2x.iV6P(bA3x, "HH:mm") } else { if (nb7U < qH8z + 864e5) { return "昨天" + k2x.iV6P(bA3x, "HH:mm") } else if (nb7U < qH8z + 864e5 * 6) { var gk5p = fI5N.getFullYear(),
                    bpm3x = new Date(gk5p, 0, 1); var qH8z = fI5N.getTime() - bpm3x.getTime(); if (nb7U < qH8z) { return k2x.iV6P(bA3x, "M月d日 HH:mm") } return k2x.iV6P(bA3x, "yyyy年M月d日") } else { return "最近" } } };
    l2x.Nu5z = function() { var cM4Q = /\{(.*?)\}/gi; return function(oW8O, j2x) { return (oW8O || "").replace(cM4Q, function($1, $2) { var A2x = j2x[$2]; return A2x == null ? $1 : A2x }) } }();
    l2x.eQ5V = function() { var bg3x = Array.prototype.slice.call(arguments, 0),
            oW8O = bg3x.shift(); if (oW8O) { return oW8O.replace(/{(\d+)}/g, function($1, $2) { return $2 < bg3x.length ? bg3x[$2] : $1 }) } return "" };
    l2x.Is3x = function(i2x, dD4H, kV7O) { return "";
        kV7O = kV7O || " - "; if (i2x && i2x.length) { return kV7O + (!!dD4H ? '<span class="' + dD4H + '">' + i2x[0] + "</span>" : i2x[0]) } return "" };
    l2x.bFU7N = function() { if (window.getSelection) { var qP8H = window.getSelection(); if (qP8H && qP8H.focusNode && qP8H.focusNode.tagName) { var AB1x = a1x.cQ4U(qP8H.focusNode); for (var i = 0, wf0x; i < AB1x.length; ++i) { wf0x = AB1x[i].tagName; if (!wf0x) continue;
                    wf0x = wf0x.toLowerCase(); if (wf0x == "textarea" || wf0x == "input") return !0 } } } else if (document.selection) { var cE4I = document.selection.createRange(); if (cE4I) { var f2x = cE4I.parentElement(); if (f2x && f2x.tagName) { var wf0x = f2x.tagName.toLowerCase(); if (wf0x == "textarea" || wf0x == "input") return !0 } } } return !1 };
    l2x.AE1x = function(fs5x) { if (/^[A-Z]\:\\/i.test(fs5x)) { fs5x = fs5x.split("\\") } else { fs5x = fs5x.split("/") } fs5x = fs5x[fs5x.length - 1]; return fs5x };
    l2x.coA6u = function() { var Ep2x = [13, 17, 34, 19, 18, 21]; return function(C2x) { var bs3x = (C2x || "").split("_"); return { type: Ep2x[bs3x[2]] || -1, id: bs3x[3] || "" } } }();
    l2x.boV3x = function(ds4w) { if (4 == ds4w.userType) { return '<sup class="icn u-icn2 u-icn2-music2"></sup>' } else if (ds4w.authStatus == 1) { return '<sup class="u-icn u-icn-1"></sup>' } else if (ds4w.expertTags && ds4w.expertTags.length) { return '<sup class="u-icn u-icn-84"></sup>' } };
    l2x.Nt5y = function(ft5y) { ft5y += ""; if (ft5y) { return ft5y.substr(0, 3) + "****" + ft5y.substr(ft5y.length - 4) } };
    l2x.cud7W = function(s2x, cq3x) { return (s2x % cq3x + cq3x) % cq3x };
    l2x.bHc8U = function() { var Ep2x = ["playlist", "program", "event", "album", "song", "mv", "topic"]; return function(C2x) { var bs3x = (C2x || "").split("_"),
                m2x = { type: Ep2x[bs3x[2]] || -1, id: bs3x[3] || "" }; if (m2x.type == "event") { m2x.uid = bs3x[4] || ""; return "/" + m2x.type + "?id=" + m2x.id + "&uid=" + m2x.uid } return "/" + m2x.type + "?id=" + m2x.id } }();
    l2x.bHd8V = function() { var Ep2x = ["歌单", "电台节目", "动态", "专辑", "单曲", "MV", "专栏文章"]; return function(C2x) { var bs3x = (C2x || "").split("_"); return Ep2x[bs3x[2]] || "资源" } }();
    l2x.cop6j = function(bD3x) { var qs = bD3x.length > 0 ? bD3x.substring(1) : "",
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length; for (i = 0; i < len; i++) { item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]); if (name.length) { args[name] = value } } return args };
    l2x.bHg8Y = function(vx0x, Nm5r) { var VP8H = 0,
            dY4c = new Array;
        k2x.be3x(vx0x, function(V3x, s2x) { var db4f = a1x.cT4X("img");
            db4f.src = V3x;
            h2x.q2x(db4f, "load", function(s2x, d2x) { dY4c[s2x] = 1;
                VP8H++; if (VP8H == vx0x.length) Nm5r(vx0x, dY4c) }.g2x(this, s2x));
            h2x.q2x(db4f, "error", function(d2x, s2x) { dY4c[s2x] = 0;
                VP8H++; if (VP8H == vx0x.length) Nm5r(vx0x, dY4c) }.g2x(this, s2x)) }) };
    l2x.VQ8I = function(i2x, dE4I) { var m2x = [];
        k2x.be3x(i2x, function(r2x, s2x, id6X) { m2x.push(dE4I(r2x, s2x, id6X)) }); return m2x };
    l2x.Ts7l = function(i2x, dE4I, id6X) { var m2x = [];
        k2x.be3x(i2x, function(r2x, s2x) { if (dE4I.call(id6X, r2x, s2x, i2x)) { m2x.push(r2x) } }); return m2x };
    l2x.coo6i = function(bi3x) { return k2x.dL4P((bi3x || "").replace(/\s{2,}/g, " ").trim()) };
    l2x.bng3x = function(bf3x) { if (bf3x.transNames && bf3x.transNames.length) { return bf3x.transNames[0] } else if (bf3x.alias && bf3x.alias.length) { return bf3x.alias[0] } };
    l2x.bne3x = function(Oz6t) { if (Oz6t) { return Oz6t.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>") } };
    l2x.bmN3x = function(f2x) { var f2x = a1x.x2x(f2x),
            cZ4d = f2x && f2x.getElementsByTagName("textarea")[0],
            J3x = a1x.u2x(f2x, "key"),
            bms3x = a1x.u2x(f2x, "simple") == "1",
            bIz8r = p2x.uV0x.fX5c(); if (!(f2x && cZ4d && J3x)) return; if (bms3x) { bIz8r.re8W(J3x, l2x.Bm1x(JSON.parse(cZ4d.value))) } else { bIz8r.re8W(J3x, JSON.parse(cZ4d.value || cZ4d.defaultValue)) } f2x.innerHTML = ""; return J3x };
    l2x.con6h = function(oh8Z) { if (!oh8Z.onbeforelistload) { oh8Z.onbeforelistload = function(d2x) { d2x.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>' } } if (!oh8Z.onemptylist) { oh8Z.onemptylist = function(d2x) { d2x.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (oh8Z.emptyMsg || "暂时还没有数据") + "</h3></div>" } } return oh8Z };
    l2x.Bm1x = function(ht5y) { if (k2x.en4r(ht5y)) { var ef4j = [];
            k2x.be3x(ht5y, function(bms3x) { ef4j.push(bIJ8B(bms3x)) }); return ef4j } else { return bIJ8B(ht5y) }

        function bIJ8B(ht5y) { if (!ht5y) return null; var ef4j = { album: ht5y.al, alias: ht5y.alia || ht5y.ala || [], artists: ht5y.ar || [], commentThreadId: "R_SO_4_" + ht5y.id, copyrightId: ht5y.cp || 0, duration: ht5y.dt || 0, id: ht5y.id, mvid: ht5y.mv || 0, name: ht5y.name || "", cd: ht5y.cd, position: ht5y.no || 0, ringtone: ht5y.rt, rtUrl: ht5y.rtUrl, status: ht5y.st || 0, pstatus: ht5y.pst || 0, fee: ht5y.fee || 0, version: ht5y.v || 0, eq: ht5y.eq, songType: ht5y.t || 0, mst: ht5y.mst, score: ht5y.pop || 0, ftype: ht5y.ftype, rtUrls: ht5y.rtUrls, transNames: ht5y.tns, privilege: ht5y.privilege, lyrics: ht5y.lyrics }; return ef4j } };
    l2x.cue7X = function() { var f2x = a1x.mV7O('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f2x);
        h2x.q2x(f2x, "click", function(d2x) { h2x.bh3x(d2x);
            a1x.cH4L(f2x) }) };
    l2x.lj7c = function(cu3x) { if (cu3x < 1e5) { return cu3x } else { return Math.floor(cu3x / 1e4) + "万" } };
    l2x.sp9g = function(cu3x, cZ4d) { return "<i>" + (cu3x ? "(" + cu3x + ")" : cZ4d) + "</i>" };
    l2x.bJg8Y = function(t2x, hh5m) { var e2x = {}; if (!k2x.ke6Y(hh5m)) { return e2x } switch (parseInt(t2x)) {
            case 17:
                e2x.title = hh5m.name;
                e2x.author = (hh5m.radio || []).name;
                e2x.picUrl = hh5m.coverUrl;
                e2x.category = hh5m.radio.category; break;
            case 19:
                e2x.title = hh5m.name;
                e2x.author = l2x.vJ0x(hh5m.artists);
                e2x.authors = l2x.vJ0x(hh5m.artists, " / ");
                e2x.picUrl = hh5m.picUrl; break;
            case 13:
                e2x.title = hh5m.name;
                e2x.author = (hh5m.creator || []).nickname;
                e2x.picUrl = hh5m.coverImgUrl; break;
            case 18:
                e2x.title = hh5m.name;
                e2x.author = l2x.vJ0x(hh5m.artists);
                e2x.picUrl = (hh5m.album || []).picUrl; break;
            case 20:
                e2x.title = hh5m.name;
                e2x.author = "";
                e2x.picUrl = hh5m.img1v1Url; break;
            case 21:
                e2x.title = hh5m.name;
                e2x.author = hh5m.artistName;
                e2x.authors = l2x.vJ0x(hh5m.artists, " / ");
                e2x.picUrl = hh5m.newCover || hh5m.cover; break;
            case 70:
                e2x.title = hh5m.name;
                e2x.author = (hh5m.dj || []).nickname;
                e2x.picUrl = hh5m.picUrl;
                e2x.category = hh5m.category; break;
            default:
                break } return e2x };
    l2x.bJl8d = function() { return location.hostname.indexOf("igame.163.com") >= 0 };
    l2x.col6f = function(eH5M, uI9z, e2x) { var bL3x, bg3x, m2x; var ji6c = null; var MX5c = 0; if (!e2x) e2x = {}; var Wa8S = function() { MX5c = e2x.leading === false ? 0 : +(new Date);
            ji6c = null;
            m2x = eH5M.apply(bL3x, bg3x); if (!ji6c) bL3x = bg3x = null }; return function() { var fI5N = +(new Date); if (!MX5c && e2x.leading === false) MX5c = fI5N; var blz2x = uI9z - (fI5N - MX5c);
            bL3x = this;
            bg3x = arguments; if (blz2x <= 0 || blz2x > uI9z) { if (ji6c) { clearTimeout(ji6c);
                    ji6c = null } MX5c = fI5N;
                m2x = eH5M.apply(bL3x, bg3x); if (!ji6c) bL3x = bg3x = null } else if (!ji6c && e2x.trailing !== false) { ji6c = setTimeout(Wa8S, blz2x) } return m2x } };
    l2x.bKb8T = function(eH5M, uI9z, qI8A) { var ji6c, bg3x, bL3x, MT5Y, m2x; var Wa8S = function() { var gz5E = new Date - MT5Y; if (gz5E < uI9z && gz5E >= 0) { ji6c = setTimeout(Wa8S, uI9z - gz5E) } else { ji6c = null; if (!qI8A) { m2x = eH5M.apply(bL3x, bg3x); if (!ji6c) bL3x = bg3x = null } } }; return function() { bL3x = this;
            bg3x = arguments;
            MT5Y = new Date; var blv2x = qI8A && !ji6c; if (!ji6c) ji6c = setTimeout(Wa8S, uI9z); if (blv2x) { m2x = eH5M.apply(bL3x, bg3x);
                bL3x = bg3x = null } return m2x } };
    l2x.MR5W = function(f2x, iv6p) { if (f2x) { var f2x = f2x.firstElementChild; if (f2x) { f2x.firstElementChild && (f2x = f2x.firstElementChild);
                f2x.setAttribute("xlink:href", "/style/pc/svg/" + iv6p) } } };
    l2x.bKD8v = function(eG4K) { if (!eG4K || !eG4K.length) { return } eG4K = /^#(.+?)#$/.exec(eG4K)[1];
        eG4K = eG4K.replace(/\s/g, " ");
        v2x.bp3x("/api/act/detail", { type: "json", method: "post", data: k2x.df4j({ actname: eG4K }), onload: function(Q3x) { if (!Q3x || Q3x.code != 200 || !Q3x.act) { n2x.Z3x.M3x({ type: 2, tip: "该话题暂未创建" }) } else { location.dispatch2("/activity?id=" + Q3x.act.actId) } }, onerror: function(bQ3x) { n2x.Z3x.M3x({ type: 2, tip: "操作失败，请稍后再试" }) } }) };
    l2x.blf2x = function(MQ5V, xu0x) { if (!MQ5V || !xu0x) return false; if (MQ5V == xu0x) return true; return l2x.blf2x(MQ5V, xu0x.parentNode) };
    a1x.fF5K = function(bB3x, la7T) { if (!bB3x) return null; if (!la7T) return bB3x.firstChild; return a1x.I2x(bB3x, la7T)[0] };
    l2x.cok6e = function(hy5D) { return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hy5D) };
    l2x.cuf7Y = function(st9k) { if (!st9k) { return "0b" } var cof6Z = ["Bytes", "KB", "MB", "GB"]; var bd3x = Math.floor(Math.log(st9k) / Math.log(1024)); return (st9k / Math.pow(1024, Math.floor(bd3x))).toFixed(bd3x == 1 ? 0 : 1) + cof6Z[bd3x] };
    l2x.bLy9p = function(dp4t, fc5h, cob6V) { if (!dp4t) return dp4t; var dF4J = k2x.fh5m(dp4t); if (dF4J <= fc5h) return dp4t; var bkr2x = dF4J - dp4t.length,
            bkp2x = dp4t.length - bkr2x; var fL5Q = Math.ceil(fc5h / 2),
            coa6U = fc5h,
            bLH9y = 0; if (bkr2x < fL5Q) fL5Q = fc5h - bkr2x; if (bkp2x < fc5h) fc5h = bkp2x + Math.ceil((fc5h - bkp2x) / 2); while (fL5Q <= fc5h) { bLH9y = k2x.fh5m(dp4t.substr(0, fL5Q)); var bkl2x = coa6U - bLH9y; if (bkl2x == 0) break; if (bkl2x == 1) { var cnZ6T = k2x.fh5m(dp4t.charAt(fL5Q)); if (cnZ6T == 1) { fL5Q++; break } else { break } } fL5Q += Math.floor(bkl2x / 2) } return dp4t.substr(0, fL5Q) + (!!cob6V ? "" : "...") } })();
(function() {
    function cnX6R() { var Aq1x = function(jm6g) { if (jm6g < -128) { return Aq1x(128 - (-128 - jm6g)) } else if (jm6g >= -128 && jm6g <= 127) { return jm6g } else if (jm6g > 127) { return Aq1x(-129 + jm6g - 127) } else { throw new Error("1001") } }; var cnW6Q = function(jm6g, bj3x) { return Aq1x(jm6g + bj3x) }; var cnV6P = function(Wh8Z, bjw2x) { if (Wh8Z == null) { return null } if (bjw2x == null) { return Wh8Z } var po8g = []; var cnU6O = bjw2x.length; for (var i = 0, bq3x = Wh8Z.length; i < bq3x; i++) { po8g[i] = cnW6Q(Wh8Z[i], bjw2x[i % cnU6O]) } return po8g }; var cnT6N = function(Wj8b) { if (Wj8b == null) { return Wj8b } var po8g = []; var cnR6L = Wj8b.length; for (var i = 0, bq3x = cnR6L; i < bq3x; i++) { po8g[i] = Aq1x(0 - Wj8b[i]) } return po8g }; var cnQ6K = function(bjo2x, MH4L) { bjo2x = Aq1x(bjo2x);
            MH4L = Aq1x(MH4L); return Aq1x(bjo2x ^ MH4L) }; var bMS9J = function(MG4K, biv2x) { if (MG4K == null || biv2x == null || MG4K.length != biv2x.length) { return MG4K } var po8g = []; var cnN6H = MG4K.length; for (var i = 0, bq3x = cnN6H; i < bq3x; i++) { po8g[i] = cnQ6K(MG4K[i], biv2x[i]) } return po8g }; var bNe9V = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]; var cnM6G = function(cP4T) { var IA3x = [];
            IA3x.push(bNe9V[cP4T >>> 4 & 15]);
            IA3x.push(bNe9V[cP4T & 15]); return IA3x.join("") }; var cnL6F = function(st9k) { var bq3x = st9k.length; if (st9k == null || bq3x < 0) { return new String("") } var IA3x = []; for (var i = 0; i < bq3x; i++) { IA3x.push(cnM6G(st9k[i])) } return IA3x.join("") }; var bNo9f = function(Wt8l) { if (Wt8l == null || Wt8l.length == 0) { return Wt8l } var bhL2x = new String(Wt8l); var po8g = []; var bq3x = bhL2x.length / 2; var bj3x = 0; for (var i = 0; i < bq3x; i++) { var nm7f = parseInt(bhL2x.charAt(bj3x++), 16) << 4; var nn7g = parseInt(bhL2x.charAt(bj3x++), 16);
                po8g[i] = Aq1x(nm7f + nn7g) } return po8g }; var cnK6E = function(cK4O) { if (cK4O == null || cK4O == undefined) { return cK4O } var Mr4v = encodeURIComponent(cK4O); var st9k = []; var bNC9t = Mr4v.length; for (var i = 0; i < bNC9t; i++) { if (Mr4v.charAt(i) == "%") { if (i + 2 < bNC9t) { st9k.push(bNo9f(Mr4v.charAt(++i) + "" + Mr4v.charAt(++i))[0]) } else { throw new Error("1009") } } else { st9k.push(Mr4v.charCodeAt(i)) } } return st9k }; var cnJ6D = function(uJ9A) { var bd3x = 0;
            bd3x += (uJ9A[0] & 255) << 24;
            bd3x += (uJ9A[1] & 255) << 16;
            bd3x += (uJ9A[2] & 255) << 8;
            bd3x += uJ9A[3] & 255; return bd3x }; var cug7Z = function(bd3x) { var uJ9A = [];
            uJ9A[0] = bd3x >>> 24 & 255;
            uJ9A[1] = bd3x >>> 16 & 255;
            uJ9A[2] = bd3x >>> 8 & 255;
            uJ9A[3] = bd3x & 255; return uJ9A }; var cnF6z = function(dw4A, bgX1x, bq3x) { var ef4j = []; if (dw4A == null || dw4A.length == 0) { return ef4j } if (dw4A.length < bq3x) { throw new Error("1003") } for (var i = 0; i < bq3x; i++) { ef4j[i] = dw4A[bgX1x + i] } return ef4j }; var bgV1x = function(dw4A, bgX1x, qn8f, cnE6y, bq3x) { if (dw4A == null || dw4A.length == 0) { return qn8f } if (qn8f == null) { throw new Error("1004") } if (dw4A.length < bq3x) { throw new Error("1003") } for (var i = 0; i < bq3x; i++) { qn8f[cnE6y + i] = dw4A[bgX1x + i] } return qn8f }; var cnD6x = function(bq3x) { var bs3x = []; for (var i = 0; i < bq3x; i++) { bs3x[i] = 0 } return bs3x }; var cnB6v = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125]; var IF3x = 64; var Wy8q = 64; var brQ4U = 4; var cnA6u = function(oV8N) { var bss4w = []; if (oV8N == null || oV8N == undefined || oV8N.length == 0) { return cnD6x(Wy8q) } if (oV8N.length >= Wy8q) { return cnF6z(oV8N, 0, Wy8q) } else { for (var i = 0; i < Wy8q; i++) { bss4w[i] = oV8N[i % oV8N.length] } } return bss4w }; var cnz6t = function(WA8s) { if (WA8s == null || WA8s.length % IF3x != 0) { throw new Error("1005") } var bgA1x = []; var bj3x = 0; var cnx6r = WA8s.length / IF3x; for (var i = 0; i < cnx6r; i++) { bgA1x[i] = []; for (var j = 0; j < IF3x; j++) { bgA1x[i][j] = WA8s[bj3x++] } } return bgA1x }; var cnw6q = function(bsQ4U) { var nm7f = bsQ4U >>> 4 & 15; var nn7g = bsQ4U & 15; var bj3x = nm7f * 16 + nn7g; return cnB6v[bj3x] }; var bsY4c = function(bgj1x) { if (bgj1x == null) { return null } var bta4e = []; for (var i = 0, bq3x = bgj1x.length; i < bq3x; i++) { bta4e[i] = cnw6q(bgj1x[i]) } return bta4e }; var cnu6o = function(IG3x, oV8N) { if (IG3x == null) { return null } if (IG3x.length == 0) { return [] } if (IG3x.length % IF3x != 0) { throw new Error("1005") } oV8N = cnA6u(oV8N); var bge1x = oV8N; var bfV1x = cnz6t(IG3x); var Mj4n = []; var cnt6n = bfV1x.length; for (var i = 0; i < cnt6n; i++) { var bfG1x = bsY4c(bfV1x[i]);
                bfG1x = bsY4c(bfG1x); var bfC1x = bMS9J(bfG1x, bge1x); var cns6m = cnV6P(bfC1x, cnT6N(bge1x));
                bfC1x = bMS9J(cns6m, oV8N);
                bgV1x(bfC1x, 0, Mj4n, i * IF3x, IF3x);
                bge1x = bfV1x[i] } var btL4P = [];
            bgV1x(Mj4n, Mj4n.length - brQ4U, btL4P, 0, brQ4U); var bq3x = cnJ6D(btL4P); if (bq3x > Mj4n.length) { throw new Error("1006") } var po8g = [];
            bgV1x(Mj4n, 0, po8g, 0, bq3x); return po8g }; var cnr6l = function(WE8w, J3x) { if (WE8w == null) { return null } var btR4V = new String(WE8w); if (btR4V.length == 0) { return [] } var IG3x = bNo9f(btR4V); if (J3x == null || J3x == undefined) { throw new Error("1007") } var oV8N = cnK6E(J3x); return cnu6o(IG3x, oV8N) };
        this.cnq6k = function(WE8w, J3x) { var cnp6j = cnr6l(WE8w, J3x); var bfk1x = new String(cnL6F(cnp6j)); var WG8y = []; var cnn6h = bfk1x.length / 2; var bj3x = 0; for (var i = 0; i < cnn6h; i++) { WG8y.push("%");
                WG8y.push(bfk1x.charAt(bj3x++));
                WG8y.push(bfk1x.charAt(bj3x++)) } return WG8y.join("") } } window.settmusic = (new cnX6R).cnq6k })();
(function() { var c2x = NEJ.P,
        bm3x = NEJ.F,
        H2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        J3x = "Search-tracks_",
        b2x;
    p2x.eQ5V({ "search-suggest": { url: "/api/search/suggest/web", type: "POST", format: function(Q3x) { return Q3x }, onerror: function(Q3x, e2x) { if (Q3x.code == 407) { e2x.onForbidden() } } }, "search-multimatch": { url: "/api/search/suggest/multimatch", type: "GET" }, "search-list": { url: "/api/cloudsearch/get/web", type: "post", noescape: true, filter: function(e2x, bc3x) { window.log && window.log("searchkeywordclient", { type: this.cnk6e(parseInt(e2x.data.type)) || "suggest", keyword: e2x.data.s, offset: e2x.offset }) }, format: function(Q3x, e2x) { if (Q3x.abroad) { try { Q3x.result = JSON.parse(decodeURIComponent(settmusic(Q3x.result, p2x.sk))) } catch (e) {} } Q3x.result = Q3x.result || {}; var i2x, cq3x, jR6L = [],
                    sJ9A = e2x.data.s || "",
                    fY5d = e2x.data.limit,
                    t2x = parseInt(e2x.data.type) || 1,
                    m2x = Q3x.result; switch (t2x) {
                    case 1:
                        i2x = this.buM5R(m2x.songs, e2x.data.hlpretag, e2x.data.hlposttag);
                        cq3x = m2x.songCount; break;
                    case 10:
                        i2x = m2x.albums;
                        cq3x = m2x.albumCount; break;
                    case 100:
                        i2x = m2x.artists;
                        cq3x = m2x.artistCount; break;
                    case 1e3:
                        i2x = m2x.playlists;
                        cq3x = m2x.playlistCount; break;
                    case 1002:
                        i2x = m2x.userprofiles;
                        cq3x = m2x.userprofileCount; break;
                    case 1004:
                        i2x = m2x.mvs;
                        cq3x = m2x.mvCount; break;
                    case 1006:
                        i2x = this.buM5R(m2x.songs, e2x.data.hlpretag, e2x.data.hlposttag);
                        cq3x = m2x.songCount; break;
                    case 1009:
                        var pe8W = m2x.djRadios; if (!!pe8W) { k2x.be3x(pe8W, function(A2x, s2x, cnj6d) { A2x.xid = A2x.id;
                                A2x.id = A2x.id + "_rad" }); if (pe8W.length) { this.re8W("radio_search-" + e2x.data.s, pe8W) } } cq3x = Math.min(m2x.djprogramCount, 500);
                        i2x = m2x.djprograms || []; if (e2x.data.isPub) { k2x.me7X(pe8W, function(A2x, s2x, cnj6d) { A2x.stype = 1;
                                i2x.unshift(A2x) });
                            cq3x = Math.min(i2x.length, 500) } break } this.z2x("onsearchload", Q3x); if (i2x && i2x.length) { for (var i = 0; i < fY5d; i++) { if (i < i2x.length) { jR6L.push(i2x[i]) } else { jR6L.push(null) } } } return { more: !0, total: Math.min(cq3x || 0, sJ9A.length < 3 ? 500 : 5e3), list: jR6L } }, onerror: function(Q3x, e2x) { e2x.onload(e2x, []); if (k2x.gb5g(e2x.onerror)) { e2x.onerror(Q3x) } } } });
    p2x.DE2x = NEJ.C();
    b2x = p2x.DE2x.O3x(p2x.gW5b);
    b2x.cl3x = function() { this.cs3x() };
    b2x.cnh6b = function(J3x, e2x) { if (!J3x) return; if (!!this.bvh5m) v2x.jo6i(this.bvh5m);
        this.bvh5m = this.ck3x("search-suggest", NEJ.X({ data: { s: J3x, limit: 8 } }, e2x)) };
    b2x.cne6Y = function(J3x, e2x) { if (!J3x) return;
        this.ck3x("search-multimatch", NEJ.X({ data: { s: J3x } }, e2x)) };
    b2x.buM5R = function() { var cnd6X = function(gV5a, bvo5t, bvs5x) { var cna6U = gV5a.match(new RegExp(bvo5t + "(.+?)" + bvs5x, "gi")),
                cu3x = 0;
            k2x.be3x(cna6U, function(r2x) { cu3x += r2x.replace(new RegExp(bvo5t, "g"), "").replace(new RegExp(bvs5x, "g"), "").length }); return cu3x }; return function(in6h, cmZ6T, cmY6S) { var bvE5J = [];
            k2x.be3x(in6h, function(bf3x, bd3x) { bf3x = l2x.Bm1x(bf3x); var WO8G = bf3x.lyrics || [],
                    dF4J = WO8G.length,
                    jb6V = 0,
                    cq3x = 4,
                    WY8Q = { l: 0, v: 0 },
                    bcl0x; if (dF4J > 4) { k2x.be3x(WO8G, function(gV5a, s2x) { var bvS5X = cnd6X(gV5a, cmZ6T, cmY6S); if (bvS5X > WY8Q.v) { WY8Q.v = bvS5X;
                            WY8Q.l = s2x } });
                    jb6V = WY8Q.l;
                    jb6V = Math.max(jb6V, 0);
                    bcl0x = dF4J - jb6V - 4; if (bcl0x < 0) jb6V += bcl0x;
                    bf3x.lrcAbstractEnd = jb6V + cq3x - 1 } else { bf3x.lrcAbstractEnd = dF4J - 1 } bf3x.lrcAbstractStart = jb6V;
                bf3x.indexId = (WO8G && WO8G.length ? "L" : "NL") + bf3x.id;
                bvE5J.push(bf3x) }); return bvE5J } }();
    b2x.cnk6e = function(t2x) { switch (t2x) {
            case 1:
                return "song"; break;
            case 100:
                return "artist"; break;
            case 10:
                return "album"; break;
            case 1004:
                return "mv"; break;
            case 1006:
                return "lyric"; break;
            case 1e3:
                return "list"; break;
            case 1009:
                return "djradio"; break;
            case 1002:
                return "user"; break;
            default:
                return "suggest"; break } } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        F2x = c2x("nm.m"),
        n2x = c2x("nm.l"),
        cX4b = c2x("nm.i"),
        L3x = c2x("nm.m.sch"),
        b2x, K3x; var Xd8V = { songs: 1, artists: 100, albums: 10, playlists: 1e3, mvs: 1004 };
    L3x.LO4S = NEJ.C();
    b2x = L3x.LO4S.O3x(H2x.cy3x);
    b2x.cl3x = function(f2x) { this.cs3x();
        this.bR3x(f2x);
        this.P3x = p2x.DE2x.fX5c() };
    b2x.bR3x = function(f2x) { this.o2x = f2x; var i2x = a1x.I2x(f2x, "j-flag");
        this.ew4A = i2x[0];
        this.bbQ0x = i2x[1];
        this.cf3x = i2x[2];
        this.mB7u = i2x[3];
        h2x.q2x(this.ew4A, "input", this.fz5E.g2x(this));
        h2x.q2x(this.ew4A, "keyup", this.fz5E.g2x(this));
        h2x.q2x(this.ew4A, "focus", this.fZ5e.g2x(this));
        h2x.q2x(this.bbQ0x, "click", this.fZ5e.g2x(this));
        h2x.q2x(this.ew4A, "blur", this.bbI0x.g2x(this));
        h2x.q2x(this.cf3x, "click", this.Xf8X.g2x(this));
        h2x.q2x(this.o2x, "keydown", this.bby0x.g2x(this));
        h2x.q2x(this.o2x, "keypress", this.Xg8Y.g2x(this));
        h2x.q2x(this.mB7u, "mouseover", this.LK4O.g2x(this));
        h2x.q2x(this.mB7u, "mouseout", this.LK4O.g2x(this)); if (this.ew4A.value) { this.ew4A.value = "" } if (this.ew4A.style.opacity != null) { this.ew4A.style.opacity = 1 } };
    b2x.fz5E = function(d2x) { if (d2x.type == "keyup" && d2x.keyCode == 8 || d2x.keyCode == 46) { this.Et2x() } else if (d2x.type == "input" || d2x.type == "propertychange") { setTimeout(this.Et2x.g2x(this), 0) } };
    b2x.fZ5e = function() { this.vM0x(this.bbQ0x, !1);
        a1x.y2x(this.o2x, "m-srch-fcs");
        this.ew4A.focus();
        this.Et2x();
        a1x.y2x(a1x.I2x("g-topbar", "j-showoff")[0], "f-hide") };
    b2x.bbI0x = function() { if (!this.ew4A.value) { this.vM0x(this.bbQ0x, !0) } var Ev2x = a1x.I2x(this.mB7u, "slt"); if (this.Xm8e(this.mB7u) && Ev2x.length > 0 && a1x.u2x(Ev2x[0], "type")) { var iv6p = Ev2x[0].href; if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(iv6p)) { window.log("search", { rid: RegExp.$2, type: RegExp.$1, keyword: this.ew4A.value }) } this.bqc3x(Ev2x[0].href) } this.vM0x(this.mB7u, !1);
        a1x.w2x(this.o2x, "m-srch-fcs") };
    b2x.vM0x = function(f2x, kZ7S) { a1x.X3x(f2x, "display", !kZ7S ? "none" : "") };
    b2x.Xm8e = function(f2x) { return a1x.da4e(f2x, "display") != "none" };
    b2x.Et2x = function() { var Ez2x = function(sR9I, cZ4d) { if (!cZ4d) return; return cZ4d.replace(new RegExp(l2x.bEU7N(sR9I), "gi"), function($1) { return '<span class="s-fc7 f-tdn">' + $1 + "</span>" }) }; var cmX6R = function(hy5D) { var gm5r = this.o2x.clientWidth > 250 ? 41 : 17; if (l2x.Iq3x(hy5D) > gm5r) { return l2x.Aw1x(hy5D, gm5r) + "..." } else { return hy5D } }; var XG8y = function(m2x) { return m2x.songs && m2x.songs.length || m2x.albums && m2x.albums.length || m2x.artists && m2x.artists.length || m2x.playlists && m2x.playlists.length }; var sU9L = function(sR9I, d2x) { if (!l2x.bEG7z(this.ew4A) || l2x.je6Y(this.ew4A.value)) { this.vM0x(this.mB7u, !1); return } d2x.keyword = k2x.dL4P(sR9I); var dr4v = a1x.bP3x("m-search-suggest", d2x, { mark: Ez2x.g2x(this, sR9I), cutStr: cmX6R.g2x(this) }),
                rY9P = d2x.result.order;
            this.mB7u.innerHTML = dr4v;
            this.vM0x(this.mB7u, XG8y(d2x.result) ? !0 : !1); if (!!rY9P && !!rY9P.length && Xd8V[rY9P[0]]) { this.bnv3x = { keyword: sR9I, type: Xd8V[rY9P[0]] } } }; var cmW6Q = function() { this.vM0x(this.mB7u, !1); return }; return function() { var A2x = this.ew4A.value; if (l2x.je6Y(A2x)) { this.vM0x(this.mB7u, !1); return } this.P3x.cnh6b(A2x, { onload: sU9L.g2x(this, A2x), onForbidden: cmW6Q.g2x(this) }) } }();
    b2x.Xg8Y = function(d2x) { if (d2x.keyCode != 13) return; var Ev2x = a1x.I2x(this.mB7u, "slt"); if (this.Xm8e(this.mB7u) && Ev2x.length > 0) { this.bqc3x(Ev2x[0].href);
            this.vM0x(this.mB7u, !1); return } this.Xf8X();
        this.vM0x(this.mB7u, !1) };
    b2x.bby0x = function(d2x) { if (!this.Xm8e(this.mB7u)) return; var i2x = a1x.I2x(this.mB7u, "xtag"),
            dF4J = i2x.length,
            s2x = k2x.cV4Z(i2x, function(r2x) { return a1x.bz3x(r2x, "slt") }); switch (d2x.keyCode) {
            case 38:
                if (s2x >= 0) a1x.w2x(i2x[s2x], "slt");
                a1x.y2x(i2x[s2x <= 0 ? dF4J - 1 : s2x - 1], "slt"); break;
            case 40:
                if (s2x >= 0) a1x.w2x(i2x[s2x], "slt");
                a1x.y2x(i2x[(s2x + 1) % dF4J], "slt"); break } };
    b2x.LK4O = function(d2x) { if (!this.Xm8e(this.mB7u)) return; var Lr4v, E2x = h2x.U3x(d2x),
            i2x = a1x.I2x(this.mB7u, "xtag"); if (E2x.tagName.toLowerCase() == "a") Lr4v = E2x;
        else if (E2x.parentNode.tagName.toLowerCase() == "a") Lr4v = E2x.parentNode; if (!Lr4v) return;
        k2x.be3x(i2x, function(r2x) { a1x.w2x(r2x, "slt");
            a1x.u2x(r2x, "type", "") }); if (d2x.type == "mouseout") return;
        a1x.y2x(Lr4v, "slt");
        a1x.u2x(Lr4v, "type", "mouse") };
    b2x.Xf8X = function() { var dI4M = location.hash,
            s2x = dI4M.indexOf("?"),
            bD3x = k2x.ho5t(dI4M.substring(s2x + 1));
        bD3x.s = this.ew4A.value; if (l2x.je6Y(bD3x.s)) return; if (!bD3x.type && this.bnv3x && this.bnv3x.keyword == bD3x.s) { bD3x.type = this.bnv3x.type } this.bqc3x("/search/#/?" + k2x.df4j(bD3x));
        this.ew4A.blur() };
    b2x.bqc3x = function(V3x) { if (location.dispatch2) { location.dispatch2(V3x) } else { location.href = V3x } };
    L3x.LO4S.cmT6N = function() { var i2x = a1x.I2x(document.body, "j-suggest");
        k2x.be3x(i2x, function(r2x) { new L3x.LO4S(r2x) }) };
    L3x.LO4S.cmT6N() })();
(function() { var c2x = NEJ.P,
        bm3x = NEJ.F,
        H2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        p2x = c2x("nm.d"),
        b2x;
    p2x.eQ5V({ "mv_artist-list": { url: "/api/artist/mvs", type: "get", format: function(Q3x) { return { total: Q3x.size || 0, list: Q3x.mvs || [] } } }, "album_artist-list": { url: "/api/artist/albums/{id}", type: "get", format: function(Q3x) { return { total: Q3x.size || 0, list: Q3x.hotAlbums || [] } } }, "ydcailing_post-list": { url: "/api/cailing/all", type: "POST", format: function(Q3x) { return Q3x.result.songs } }, "wo-list": { url: "/api/unicom/wo/content", format: function(Q3x, e2x) { if (e2x.offset == 0) { var oM8E = Q3x.data[0];
                    this.z2x("onfirstload", oM8E);
                    Q3x.data.splice(0, 1); return Q3x.data } else { return Q3x.data } } } });
    p2x.AM1x = NEJ.C();
    b2x = p2x.AM1x.O3x(p2x.gW5b);
    b2x.cl3x = function() { this.cs3x() };
    b2x.Lp4t = function() { var rB9s = "LOCAL_FLAG"; return function(t2x, cmQ6K) { var j2x = this.Dq2x(rB9s, {}); if (j2x[t2x]) { return true } else { if (!cmQ6K) { j2x[t2x] = true;
                    this.vi0x(rB9s, j2x) } return false } } }() })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        N3x = c2x("nej.ut"),
        bmK3x; if (!!N3x.np7i) return;
    N3x.np7i = NEJ.C();
    bmK3x = N3x.np7i.O3x(N3x.cy3x);
    bmK3x.bk3x = function() { var cmP6J = function(d2x) { d2x.matched = d2x.source == d2x.target }; return function(e2x) { e2x.oncheck = e2x.oncheck || cmP6J;
            this.bl3x(e2x);
            this.bV3x = e2x.list;
            this.ic6W = e2x.dataset || "id";
            this.jS6M = e2x.selected || "js-selected" } }();
    bmK3x.nT7M = function(A2x) { var E2x, d2x = { target: A2x };
        k2x.be3x(this.bV3x, function(f2x) { delete d2x.matched;
            d2x.source = a1x.u2x(f2x, this.ic6W);
            this.z2x("oncheck", d2x); if (!d2x.matched) { a1x.w2x(f2x, this.jS6M) } else { E2x = f2x;
                a1x.y2x(f2x, this.jS6M) } }, this); return E2x } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        a1x = c2x("nej.e"),
        N3x = c2x("nej.ut"),
        oI8A; if (!!N3x.cL4P) return;
    N3x.cL4P = NEJ.C();
    oI8A = N3x.cL4P.O3x(N3x.cy3x);
    oI8A.cl3x = function() { this.ix6r = {};
        this.cs3x();
        this.bJ3x() };
    oI8A.bk3x = function(e2x) { this.bl3x(e2x);
        this.bmE3x = e2x.umi || "";
        this.zG1x = e2x.dispatcher;
        this.IU3x = e2x.composite || Y3x;
        this.biI2x({ onshow: this.eT5Y.g2x(this), onhide: this.jJ6D.g2x(this), onrefresh: this.eh4l.g2x(this), onmessage: this.qr8j.g2x(this), onbeforehide: this.cmO6I.g2x(this) }) };
    oI8A.bC3x = function() { delete this.bmE3x;
        this.ix6r = {};
        this.bH3x() };
    oI8A.sZ9Q = function(d2x) { if (!!d2x) d2x.stopped = !0 };
    oI8A.bJ3x = bm3x;
    oI8A.eT5Y = bm3x;
    oI8A.jJ6D = bm3x;
    oI8A.eh4l = bm3x;
    oI8A.qr8j = bm3x;
    oI8A.cmO6I = bm3x;
    oI8A.pv8n = function(nw7p, bF3x, eC4G) { this.zG1x.bmm3x({ to: nw7p, mode: eC4G || 0, data: bF3x, from: this.bmE3x }) };
    oI8A.cui7b = function(t2x, j2x) { this.zG1x.zC1x(t2x, { from: this.bmE3x, data: j2x }) };
    oI8A.cuj7c = function() { this.zG1x.lM7F.apply(this.zG1x, arguments) };
    oI8A.cmH6B = function() { return this.ix6r };
    a1x.XQ9H = function() { if (!!window.dispatcher) { dispatcher.bzp6j.apply(dispatcher, arguments) } } })();
(function() { var c2x = NEJ.P,
        bm3x = NEJ.F,
        Y3x = NEJ.O,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        N3x = c2x("nej.ut"),
        wO0x; if (!!N3x.dl4p) return;
    N3x.dl4p = NEJ.C();
    wO0x = N3x.dl4p.O3x(N3x.cL4P);
    wO0x.cmC6w = function(e2x) { var bB3x; if (!bB3x) { var j2x = e2x.input || Y3x;
            bB3x = a1x.x2x(j2x.parent) } if (!bB3x) { var j2x = e2x.data || Y3x;
            bB3x = a1x.x2x(j2x.parent) } if (!bB3x) { bB3x = a1x.x2x(e2x.parent) } return bB3x };
    wO0x.eT5Y = function(e2x) { var bB3x = this.cmC6w(e2x); if (!!bB3x && !!this.o2x) bB3x.appendChild(this.o2x);
        this.gu5z(e2x);
        this.bzA6u("onshow", e2x);
        this.eh4l(e2x) };
    wO0x.eh4l = function(e2x) { this.fS5X(e2x);
        this.bzA6u("onrefresh", e2x) };
    wO0x.jJ6D = function() { this.ko6i();
        this.cmz6t();
        a1x.mq7j(this.o2x) };
    wO0x.bzE6y = function() { var fU5Z = /^onshow|onrefresh|delay$/; return function(bX3x) { return fU5Z.test(bX3x) } }();
    wO0x.bzG6A = bm3x;
    wO0x.bzA6u = function() { var bzJ6D = function(bD3x, e2x, bX3x, oO8G) { if (this.bzE6y(oO8G)) return; if (!!bD3x) bX3x += (bX3x.indexOf("?") > 1 ? "&" : "?") + bD3x; var cN4R = this.bzG6A(oO8G, e2x) || {};
            cN4R.location = e2x;
            cN4R.parent = this.ix6r[oO8G];
            this.zG1x.hZ5e(bX3x, { input: cN4R }) }; return function(t2x, e2x) { if (!e2x.nodelay) { if (!!this.IU3x.delay) return; var bzM6G = this.IU3x[t2x] || Y3x; if (bzM6G.delay) return } var bD3x = k2x.df4j(e2x.param) || ""; if (t2x == "onrefresh") { k2x.ee4i(this.IU3x, bzJ6D.g2x(this, bD3x, e2x)) } k2x.ee4i(bzM6G, bzJ6D.g2x(this, bD3x, e2x)) } }();
    wO0x.cmz6t = function() { var yY1x = function(bX3x, oO8G) { if (!this.bzE6y(oO8G)) this.zG1x.bo3x(bX3x) }; return function() { k2x.ee4i(this.IU3x, yY1x, this);
            k2x.ee4i(this.IU3x.onshow, yY1x, this);
            k2x.ee4i(this.IU3x.onrefresh, yY1x, this) } }() })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        F2x = c2x("nm.m"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"),
        b2x, K3x;
    F2x.Lk4o = NEJ.C();
    b2x = F2x.Lk4o.O3x(H2x.cy3x);
    b2x.cl3x = function() { this.cs3x();
        this.o2x = a1x.x2x("g-topbar"); var i2x = a1x.I2x(this.o2x, "j-tflag");
        this.bkj2x = i2x[0];
        this.IW3x = i2x[1];
        this.tg9X = i2x[2];
        this.bzS6M = i2x[3];
        this.bjf2x = i2x[4];
        this.cmy6s = H2x.np7i.B2x({ list: this.bkj2x.getElementsByTagName("a"), selected: "z-slt", dataset: "module" });
        this.biZ2x = H2x.np7i.B2x({ list: this.bjf2x.getElementsByTagName("a"), selected: "z-slt", dataset: "module" });
        this.bU3x([
            [this.o2x, "click", this.Lf4j.g2x(this)],
            [this.IW3x, "click", this.cw3x.g2x(this)],
            [this.IW3x, "mouseout", this.bAd6X.g2x(this, 0)],
            [this.IW3x, "mouseover", this.bAd6X.g2x(this, 1)]
        ]);
        window.scrollTopbar = this.cmx6r.g2x(this);
        window.matchNav = this.bAi6c.g2x(this);
        window.polling = this.qA8s.g2x(this);
        this.Le4i = p2x.AM1x.B2x();
        this.cmw6q();
        this.IX3x(); var bD3x = k2x.ho5t(location.href.split("?")[1]) || {}; if (bD3x.market) { a1x.x2x("topbar-download-link").href = "/download?market=" + bD3x.market } var biG2x = a1x.I2x(this.o2x, "j-showoff"); if (biG2x && !this.Le4i.Lp4t("newMvSearch")) { a1x.w2x(biG2x[0], "f-hide");
            window.setTimeout(function() { a1x.y2x(biG2x[0], "f-hide") }, 5e3) } };
    b2x.qA8s = function(d2x) { var dI4M = l2x.HV3x(); if (!/^\/msg/.test(dI4M)) { var IY3x = 0;
            IY3x += d2x.comment;
            IY3x += d2x.forward;
            IY3x += d2x.msg;
            IY3x += d2x.notice; if (IY3x > 0) { this.tg9X.innerHTML = a1x.bP3x("m-topbar-mesg-count", { count: IY3x }) } else { this.tg9X.innerHTML = "" } var ex4B = "/at"; if (d2x.notice) ex4B = "/notify"; if (d2x.comment) ex4B = "/comment"; if (d2x.msg > 0) ex4B = "/private"; if (d2x.forward > 0) ex4B = "/at";
            this.tg9X.href = "/msg/#" + ex4B } else { this.tg9X.innerHTML = "" } var i2x = a1x.I2x(this.bkj2x, "j-t"); if (!/^\/friend/.test(dI4M)) { if (i2x && i2x.length) { a1x.X3x(i2x[0], "display", d2x.event > 0 ? "" : "none") } } else { a1x.X3x(i2x[0], "display", "none") } };
    b2x.cw3x = function(d2x) { var f2x = h2x.U3x(d2x, "d:action"); if (f2x) { switch (a1x.u2x(f2x, "action")) {
                case "login":
                    h2x.ce3x(d2x); var t2x = a1x.u2x(f2x, "type"); if (t2x) { if (t2x == "sina" || t2x == "tencent") top.open(f2x.href);
                        else top.login(t2x == "mobile" ? 0 : 3) } else { top.login() } break;
                case "logout":
                    h2x.ce3x(d2x);
                    top.logout(); break;
                case "viewStore":
                    if (!this.Le4i.Lp4t("storeNew")) { a1x.y2x(this.bhj1x, "f-vhide") } break;
                case "viewLevel":
                    if (!this.Le4i.Lp4t("levelNew")) { a1x.y2x(this.bha1x, "f-vhide") } break } } };
    b2x.Lf4j = function(d2x) { var f2x = h2x.U3x(d2x, "d:action"); if (!f2x) return; var W3x = a1x.u2x(f2x, "action"); switch (W3x) {
            case "bilog":
                var bgQ1x = a1x.u2x(f2x, "logAction"),
                    bgf1x = a1x.u2x(f2x, "logJson");
                window.log(bgQ1x, bgf1x); break } };
    b2x.bAd6X = function(zu1x, d2x) { if (this.bAT6N) { this.bAT6N.style.display = !zu1x ? "none" : "" } };
    b2x.cmx6r = function(fO5T) { a1x.X3x(this.o2x, "top", -fO5T + "px") };
    b2x.bAi6c = function(ex4B, cmv6p) { this.cmy6s.nT7M(ex4B); if (ex4B == "discover") { a1x.y2x(this.bzS6M, "f-hide");
            a1x.w2x(this.bjf2x, "f-hide");
            window.g_topBarHeight = 105;
            this.biZ2x.nT7M(cmv6p) } else { a1x.w2x(this.bzS6M, "f-hide");
            a1x.y2x(this.bjf2x, "f-hide");
            window.g_topBarHeight = 75 } };
    b2x.cmw6q = function() { var up9g = a1x.x2x("g_iframe"); if (!up9g) return; var gl5q = up9g.contentWindow.document.getElementById("g_top");
        this.bAi6c(a1x.u2x(gl5q, "module"), a1x.u2x(gl5q, "sub")) };
    b2x.IX3x = function() { var ds4w = GUser || {},
            cmu6o = GUserAcc || {}; if (ds4w && ds4w.userId) { a1x.dS4W(this.IW3x, "m-topbar-user-login", NEJ.X(ds4w, cmu6o));
            a1x.X3x(this.tg9X, "display", "") } else { this.IW3x.innerHTML = a1x.ik6e("m-topbar-user-unlogin");
            this.tg9X.innerHTML = ""; var i2x = a1x.I2x(this.bkj2x, "j-t");
            a1x.X3x(i2x[0], "display", "none");
            a1x.X3x(this.tg9X, "display", "none") } var i2x = a1x.I2x(this.IW3x, "j-uflag");
        this.bAT6N = i2x[0];
        this.cuk7d = i2x[1];
        this.bha1x = i2x[2];
        this.bhj1x = i2x[3]; if (!this.Le4i.Lp4t("storeNew", true)) { a1x.w2x(this.bhj1x, "f-vhide") } else { a1x.y2x(this.bhj1x, "f-vhide") } if (!this.Le4i.Lp4t("levelNew", true)) { a1x.w2x(this.bha1x, "f-vhide") } else { a1x.y2x(this.bha1x, "f-vhide") } } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"),
        p2x = c2x("nm.d"),
        b2x, K3x;
    p2x.eQ5V({ "polling-get": { type: "GET", url: "/api/pl/count", format: function(Q3x) { h2x.z2x(p2x.sl9c, "message", Q3x) } } });
    p2x.sl9c = NEJ.C();
    b2x = p2x.sl9c.O3x(p2x.gW5b);
    b2x.Yj9a = function() { this.ck3x("polling-get", {}) };
    b2x.tZ9Q = function() { var eZ5e; return function() { if (!!eZ5e) return;
            eZ5e = window.setInterval(this.Yj9a.g2x(this), 1e5);
            this.Yj9a() } }();
    H2x.fr5w.B2x({ event: "message", element: p2x.sl9c }) })();
var io = "undefined" === typeof module ? {} : module.exports;
(function() {
    (function(exports, global) { var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function(host, details) { var uri = io.util.parseUri(host),
                uuri, socket; if (global && global.location) { uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port } uuri = io.util.uniqueUri(uri); var options = { host: uri.host, secure: "https" == uri.protocol, port: uri.port || ("https" == uri.protocol ? 443 : 80), query: uri.query || "" };
            io.util.merge(options, details); if (options["force new connection"] || !io.sockets[uuri]) { socket = new io.Socket(options) } if (!options["force new connection"] && socket) { io.sockets[uuri] = socket } socket = socket || io.sockets[uuri]; return socket.of(uri.path.length > 1 ? uri.path : "") } })("object" === typeof module ? module.exports : this.io = {}, this);
    (function(exports, global) { var util = exports.util = {}; var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/; var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function(str) { var m = re.exec(str || ""),
                uri = {},
                i = 14; while (i--) { uri[parts[i]] = m[i] || "" } return uri };
        util.uniqueUri = function(uri) { var protocol = uri.protocol,
                host = uri.host,
                port = uri.port; if ("document" in global) { host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port) } else { host = host || "localhost"; if (!port && protocol == "https") { port = 443 } } return (protocol || "http") + "://" + host + ":" + (port || 80) };
        util.query = function(base, addition) { var query = util.chunkQuery(base || ""),
                components = [];
            util.merge(query, util.chunkQuery(addition || "")); for (var part in query) { if (query.hasOwnProperty(part)) { components.push(part + "=" + query[part]) } } return components.length ? "?" + components.join("&") : "" };
        util.chunkQuery = function(qs) { var query = {},
                params = qs.split("&"),
                i = 0,
                l = params.length,
                kv; for (; i < l; ++i) { kv = params[i].split("="); if (kv[0]) { query[kv[0]] = kv[1] } } return query }; var pageLoaded = false;
        util.load = function(fn) { if ("document" in global && document.readyState === "complete" || pageLoaded) { return fn() } util.on(global, "load", fn, false) };
        util.on = function(element, event, fn, capture) { if (element.attachEvent) { element.attachEvent("on" + event, fn) } else if (element.addEventListener) { element.addEventListener(event, fn, capture) } };
        util.request = function(xdomain) { if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) { return new XDomainRequest } if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) { return new XMLHttpRequest } if (!xdomain) { try { return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP") } catch (e) {} } return null }; if ("undefined" != typeof window) { util.load(function() { pageLoaded = true }) } util.defer = function(fn) { if (!util.ua.webkit || "undefined" != typeof importScripts) { return fn() } util.load(function() { setTimeout(fn, 100) }) };
        util.merge = function merge(target, additional, deep, lastseen) { var seen = lastseen || [],
                depth = typeof deep == "undefined" ? 2 : deep,
                prop; for (prop in additional) { if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) { if (typeof target[prop] !== "object" || !depth) { target[prop] = additional[prop];
                        seen.push(additional[prop]) } else { util.merge(target[prop], additional[prop], depth - 1, seen) } } } return target };
        util.mixin = function(ctor, ctor2) { util.merge(ctor.prototype, ctor2.prototype) };
        util.inherit = function(ctor, ctor2) {
            function f() {} f.prototype = ctor2.prototype;
            ctor.prototype = new f };
        util.isArray = Array.isArray || function(obj) { return Object.prototype.toString.call(obj) === "[object Array]" };
        util.intersect = function(arr, arr2) { var ret = [],
                longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr; for (var i = 0, l = shortest.length; i < l; i++) { if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i]) } return ret };
        util.indexOf = function(arr, o, i) { for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {} return j <= i ? -1 : i };
        util.toArray = function(enu) { var arr = []; for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]); return arr };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() { try { var a = new XMLHttpRequest } catch (e) { return false } return a.withCredentials != undefined }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) })("undefined" != typeof io ? io : module.exports, this);
    (function(exports, io) { exports.EventEmitter = EventEmitter;

        function EventEmitter() {} EventEmitter.prototype.on = function(name, fn) { if (!this.$events) { this.$events = {} } if (!this.$events[name]) { this.$events[name] = fn } else if (io.util.isArray(this.$events[name])) { this.$events[name].push(fn) } else { this.$events[name] = [this.$events[name], fn] } return this };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function(name, fn) { var self = this;

            function on() { self.removeListener(name, on);
                fn.apply(this, arguments) } on.listener = fn;
            this.on(name, on); return this };
        EventEmitter.prototype.removeListener = function(name, fn) { if (this.$events && this.$events[name]) { var list = this.$events[name]; if (io.util.isArray(list)) { var pos = -1; for (var i = 0, l = list.length; i < l; i++) { if (list[i] === fn || list[i].listener && list[i].listener === fn) { pos = i; break } } if (pos < 0) { return this } list.splice(pos, 1); if (!list.length) { delete this.$events[name] } } else if (list === fn || list.listener && list.listener === fn) { delete this.$events[name] } } return this };
        EventEmitter.prototype.removeAllListeners = function(name) { if (name === undefined) { this.$events = {}; return this } if (this.$events && this.$events[name]) { this.$events[name] = null } return this };
        EventEmitter.prototype.listeners = function(name) { if (!this.$events) { this.$events = {} } if (!this.$events[name]) { this.$events[name] = [] } if (!io.util.isArray(this.$events[name])) { this.$events[name] = [this.$events[name]] } return this.$events[name] };
        EventEmitter.prototype.emit = function(name) { if (!this.$events) { return false } var handler = this.$events[name]; if (!handler) { return false } var args = Array.prototype.slice.call(arguments, 1); if ("function" == typeof handler) { handler.apply(this, args) } else if (io.util.isArray(handler)) { var listeners = handler.slice(); for (var i = 0, l = listeners.length; i < l; i++) { listeners[i].apply(this, args) } } else { return false } return true } })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, nativeJSON) { "use strict"; if (nativeJSON && nativeJSON.parse) { return exports.JSON = { parse: nativeJSON.parse, stringify: nativeJSON.stringify } } var JSON = exports.JSON = {};

        function f(n) { return n < 10 ? "0" + n : n }

        function date(d, key) { return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null } var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
            rep;

        function quote(string) { escapable.lastIndex = 0; return escapable.test(string) ? '"' + string.replace(escapable, function(a) { var c = meta[a]; return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + string + '"' }

        function str(key, holder) { var i, k, v, length, mind = gap,
                partial, value = holder[key]; if (value instanceof Date) { value = date(key) } if (typeof rep === "function") { value = rep.call(holder, key, value) } switch (typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) { return "null" } gap += indent;
                    partial = []; if (Object.prototype.toString.apply(value) === "[object Array]") { length = value.length; for (i = 0; i < length; i += 1) { partial[i] = str(i, value) || "null" } v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind; return v } if (rep && typeof rep === "object") { length = rep.length; for (i = 0; i < length; i += 1) { if (typeof rep[i] === "string") { k = rep[i];
                                v = str(k, value); if (v) { partial.push(quote(k) + (gap ? ": " : ":") + v) } } } } else { for (k in value) { if (Object.prototype.hasOwnProperty.call(value, k)) { v = str(k, value); if (v) { partial.push(quote(k) + (gap ? ": " : ":") + v) } } } } v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind; return v } } JSON.stringify = function(value, replacer, space) { var i;
            gap = "";
            indent = ""; if (typeof space === "number") { for (i = 0; i < space; i += 1) { indent += " " } } else if (typeof space === "string") { indent = space } rep = replacer; if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) { throw new Error("JSON.stringify") } return str("", { "": value }) };
        JSON.parse = function(text, reviver) { var j;

            function walk(holder, key) { var k, v, value = holder[key]; if (value && typeof value === "object") { for (k in value) { if (Object.prototype.hasOwnProperty.call(value, k)) { v = walk(value, k); if (v !== undefined) { value[k] = v } else { delete value[k] } } } } return reviver.call(holder, key, value) } text = String(text);
            cx.lastIndex = 0; if (cx.test(text)) { text = text.replace(cx, function(a) { return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }) } if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) { j = eval("(" + text + ")"); return typeof reviver === "function" ? walk({ "": j }, "") : j } throw new SyntaxError("JSON.parse") } })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function(exports, io) { var parser = exports.parser = {}; var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"]; var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"]; var advice = parser.advice = ["reconnect"]; var JSON = io.JSON,
            indexOf = io.util.indexOf;
        parser.encodePacket = function(packet) { var type = indexOf(packets, packet.type),
                id = packet.id || "",
                endpoint = packet.endpoint || "",
                ack = packet.ack,
                data = null; switch (packet.type) {
                case "error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : ""; if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : ""); break;
                case "message":
                    if (packet.data !== "") data = packet.data; break;
                case "event":
                    var ev = { name: packet.name }; if (packet.args && packet.args.length) { ev.args = packet.args } data = JSON.stringify(ev); break;
                case "json":
                    data = JSON.stringify(packet.data); break;
                case "connect":
                    if (packet.qs) data = packet.qs; break;
                case "ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : ""); break } var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint]; if (data !== null && data !== undefined) encoded.push(data); return encoded.join(":") };
        parser.encodePayload = function(packets) { var decoded = ""; if (packets.length == 1) return packets[0]; for (var i = 0, l = packets.length; i < l; i++) { var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i] } return decoded }; var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function(data) { var pieces = data.match(regexp); if (!pieces) return {}; var id = pieces[2] || "",
                data = pieces[5] || "",
                packet = { type: packets[pieces[1]], endpoint: pieces[4] || "" }; if (id) { packet.id = id; if (pieces[3]) packet.ack = "data";
                else packet.ack = true } switch (packet.type) {
                case "error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || ""; break;
                case "message":
                    packet.data = data || ""; break;
                case "event":
                    try { var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args } catch (e) {} packet.args = packet.args || []; break;
                case "json":
                    try { packet.data = JSON.parse(data) } catch (e) {} break;
                case "connect":
                    packet.qs = data || ""; break;
                case "ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/); if (pieces) { packet.ackId = pieces[1];
                        packet.args = []; if (pieces[3]) { try { packet.args = pieces[3] ? JSON.parse(pieces[3]) : [] } catch (e) {} } } break;
                case "disconnect":
                case "heartbeat":
                    break } return packet };
        parser.decodePayload = function(data) { if (data.charAt(0) == "�") { var ret = []; for (var i = 1, length = ""; i < data.length; i++) { if (data.charAt(i) == "�") { ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = "" } else { length += data.charAt(i) } } return ret } else { return [parser.decodePacket(data)] } } })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io) { exports.Transport = Transport;

        function Transport(socket, sessid) { this.socket = socket;
            this.sessid = sessid } io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function() { return true };
        Transport.prototype.onData = function(data) { this.clearCloseTimeout(); if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) { this.setCloseTimeout() } if (data !== "") { var msgs = io.parser.decodePayload(data); if (msgs && msgs.length) { for (var i = 0, l = msgs.length; i < l; i++) { this.onPacket(msgs[i]) } } } return this };
        Transport.prototype.onPacket = function(packet) { this.socket.setHeartbeatTimeout(); if (packet.type == "heartbeat") { return this.onHeartbeat() } if (packet.type == "connect" && packet.endpoint == "") { this.onConnect() } if (packet.type == "error" && packet.advice == "reconnect") { this.isOpen = false } this.socket.onPacket(packet); return this };
        Transport.prototype.setCloseTimeout = function() { if (!this.closeTimeout) { var self = this;
                this.closeTimeout = setTimeout(function() { self.onDisconnect() }, this.socket.closeTimeout) } };
        Transport.prototype.onDisconnect = function() { if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect(); return this };
        Transport.prototype.onConnect = function() { this.socket.onConnect(); return this };
        Transport.prototype.clearCloseTimeout = function() { if (this.closeTimeout) { clearTimeout(this.closeTimeout);
                this.closeTimeout = null } };
        Transport.prototype.clearTimeouts = function() { this.clearCloseTimeout(); if (this.reopenTimeout) { clearTimeout(this.reopenTimeout) } };
        Transport.prototype.packet = function(packet) { this.send(io.parser.encodePacket(packet)) };
        Transport.prototype.onHeartbeat = function(heartbeat) { this.packet({ type: "heartbeat" }) };
        Transport.prototype.onOpen = function() { this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen() };
        Transport.prototype.onClose = function() { var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect() };
        Transport.prototype.prepareUrl = function() { var options = this.socket.options; return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid };
        Transport.prototype.ready = function(socket, fn) { fn.call(this) } })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) { exports.Socket = Socket;

        function Socket(options) { this.options = { port: 80, secure: false, document: "document" in global ? document : false, resource: "socket.io", transports: io.transports, "connect timeout": 1e4, "try multiple transports": true, reconnect: true, "reconnection delay": 500, "reconnection limit": Infinity, "reopen delay": 3e3, "max reconnection attempts": 10, "sync disconnect on unload": false, "auto connect": true, "flash policy port": 10843, manualFlush: false };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false; if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) { var self = this;
                io.util.on(global, "beforeunload", function() { self.disconnectSync() }, false) } if (this.options["auto connect"]) { this.connect() } } io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function(name) { if (!this.namespaces[name]) { this.namespaces[name] = new io.SocketNamespace(this, name); if (name !== "") { this.namespaces[name].packet({ type: "connect" }) } } return this.namespaces[name] };
        Socket.prototype.publish = function() { this.emit.apply(this, arguments); var nsp; for (var i in this.namespaces) { if (this.namespaces.hasOwnProperty(i)) { nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments) } } };

        function empty() {} Socket.prototype.handshake = function(fn) { var self = this,
                options = this.options;

            function complete(data) { if (data instanceof Error) { self.connecting = false;
                    self.onError(data.message) } else { fn.apply(null, data.split(":")) } } var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/"); if (this.isXDomain() && !io.util.ua.hasCORS) { var insertAt = document.getElementsByTagName("script")[0],
                    script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function(data) { complete(data);
                    script.parentNode.removeChild(script) }) } else { var xhr = io.util.request();
                xhr.open("GET", url, true); if (this.isXDomain()) { xhr.withCredentials = true } xhr.onreadystatechange = function() { if (xhr.readyState == 4) { xhr.onreadystatechange = empty; if (xhr.status == 200) { complete(xhr.responseText) } else if (xhr.status == 403) { self.onError(xhr.responseText) } else { self.connecting = false;!self.reconnecting && self.onError(xhr.responseText) } } };
                xhr.send(null) } };
        Socket.prototype.getTransport = function(override) { var transports = override || this.transports,
                match; for (var i = 0, transport; transport = transports[i]; i++) { if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) { return new io.Transport[transport](this, this.sessionid) } } return null };
        Socket.prototype.connect = function(fn) { if (this.connecting && this.transports != "jsonp-polling") { return this } var self = this;
            self.connecting = true;
            this.handshake(function(sid, heartbeat, close, transports) { self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3; var check = function() { return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global }; if (!check()) { transports = "jsonp-polling" } if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) { if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports); if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function() { self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open(); if (self.options["connect timeout"]) { self.connectTimeoutTimer = setTimeout(function() { if (!self.connected) { self.connecting = false; if (self.options["try multiple transports"]) { var remaining = self.transports; while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {} if (remaining.length) { connect(remaining) } else { self.publish("connect_failed") } } } }, self.options["connect timeout"]) } }) } connect(self.transports);
                self.once("connect", function() { clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn() }) }); return this };
        Socket.prototype.setHeartbeatTimeout = function() { clearTimeout(this.heartbeatTimeoutTimer); if (this.transport && !this.transport.heartbeats()) return; var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function() { self.transport.onClose() }, this.heartbeatTimeout) };
        Socket.prototype.packet = function(data) { if (this.connected && !this.doBuffer) { this.transport.packet(data) } else { this.buffer.push(data) } return this };
        Socket.prototype.setBuffer = function(v) { this.doBuffer = v; if (!v && this.connected && this.buffer.length) { if (!this.options["manualFlush"]) { this.flushBuffer() } } };
        Socket.prototype.flushBuffer = function() { this.transport.payload(this.buffer);
            this.buffer = [] };
        Socket.prototype.disconnect = function() { if (this.connected || this.connecting) { if (this.open) { this.of("").packet({ type: "disconnect" }) } this.onDisconnect("booted") } return this };
        Socket.prototype.disconnectSync = function() { var xhr = io.util.request(); var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted") };
        Socket.prototype.isXDomain = function() { var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80); return this.options.host !== global.location.hostname || this.options.port != port };
        Socket.prototype.onConnect = function() { if (!this.connected) { this.connected = true;
                this.connecting = false; if (!this.doBuffer) { this.setBuffer(false) } this.emit("connect") } };
        Socket.prototype.onOpen = function() { this.open = true };
        Socket.prototype.onClose = function() { this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer) };
        Socket.prototype.onPacket = function(packet) { this.of(packet.endpoint).onPacket(packet) };
        Socket.prototype.onError = function(err) { if (err && err.advice) { if (err.advice === "reconnect" && (this.connected || this.connecting)) { this.disconnect(); if (this.options.reconnect) { this.reconnect() } } } this.publish("error", err && err.reason ? err.reason : err) };
        Socket.prototype.onDisconnect = function(reason) { var wasConnected = this.connected,
                wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false; if (wasConnected || wasConnecting) { this.transport.close();
                this.transport.clearTimeouts(); if (wasConnected) { this.publish("disconnect", reason); if ("booted" != reason && this.options.reconnect && !this.reconnecting) { this.reconnect() } } } };
        Socket.prototype.reconnect = function() { this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"]; var self = this,
                maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"],
                limit = this.options["reconnection limit"];

            function reset() { if (self.connected) { for (var i in self.namespaces) { if (self.namespaces.hasOwnProperty(i) && "" !== i) { self.namespaces[i].packet({ type: "connect" }) } } self.publish("reconnect", self.transport.name, self.reconnectionAttempts) } clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple }

            function maybeReconnect() { if (!self.reconnecting) { return } if (self.connected) { return reset() } if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") { return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3) } if (self.reconnectionAttempts++ >= maxAttempts) { if (!self.redoTransports) { self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect() } else { self.publish("reconnect_failed");
                        reset() } } else { if (self.reconnectionDelay < limit) { self.reconnectionDelay *= 2 } self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay) } } this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect) } })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) { exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) { this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {} } io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function() { return this.socket.of.apply(this.socket, arguments) };
        SocketNamespace.prototype.packet = function(packet) { packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {}; return this };
        SocketNamespace.prototype.send = function(data, fn) { var packet = { type: this.flags.json ? "json" : "message", data: data }; if ("function" == typeof fn) { packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn } return this.packet(packet) };
        SocketNamespace.prototype.emit = function(name) { var args = Array.prototype.slice.call(arguments, 1),
                lastArg = args[args.length - 1],
                packet = { type: "event", name: name }; if ("function" == typeof lastArg) { packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1) } packet.args = args; return this.packet(packet) };
        SocketNamespace.prototype.disconnect = function() { if (this.name === "") { this.socket.disconnect() } else { this.packet({ type: "disconnect" });
                this.$emit("disconnect") } return this };
        SocketNamespace.prototype.onPacket = function(packet) { var self = this;

            function ack() { self.packet({ type: "ack", args: io.util.toArray(arguments), ackId: packet.id }) } switch (packet.type) {
                case "connect":
                    this.$emit("connect"); break;
                case "disconnect":
                    if (this.name === "") { this.socket.onDisconnect(packet.reason || "booted") } else { this.$emit("disconnect", packet.reason) } break;
                case "message":
                case "json":
                    var params = ["message", packet.data]; if (packet.ack == "data") { params.push(ack) } else if (packet.ack) { this.packet({ type: "ack", ackId: packet.id }) } this.$emit.apply(this, params); break;
                case "event":
                    var params = [packet.name].concat(packet.args); if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params); break;
                case "ack":
                    if (this.acks[packet.ackId]) { this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId] } break;
                case "error":
                    if (packet.advice) { this.socket.onError(packet) } else { if (packet.reason == "unauthorized") { this.$emit("connect_failed", packet.reason) } else { this.$emit("error", packet.reason) } } break } };

        function Flag(nsp, name) { this.namespace = nsp;
            this.name = name } Flag.prototype.send = function() { this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments) };
        Flag.prototype.emit = function() { this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments) } })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) { exports.websocket = WS;

        function WS(socket) { io.Transport.apply(this, arguments) } io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function() { var query = io.util.query(this.socket.options.query),
                self = this,
                Socket; if (!Socket) { Socket = global.MozWebSocket || global.WebSocket } this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function() { self.onOpen();
                self.socket.setBuffer(false) };
            this.websocket.onmessage = function(ev) { self.onData(ev.data) };
            this.websocket.onclose = function() { self.onClose();
                self.socket.setBuffer(true) };
            this.websocket.onerror = function(e) { self.onError(e) }; return this }; if (io.util.ua.iDevice) { WS.prototype.send = function(data) { var self = this;
                setTimeout(function() { self.websocket.send(data) }, 0); return this } } else { WS.prototype.send = function(data) { this.websocket.send(data); return this } } WS.prototype.payload = function(arr) { for (var i = 0, l = arr.length; i < l; i++) { this.packet(arr[i]) } return this };
        WS.prototype.close = function() { this.websocket.close(); return this };
        WS.prototype.onError = function(e) { this.socket.onError(e) };
        WS.prototype.scheme = function() { return this.socket.options.secure ? "wss" : "ws" };
        WS.check = function() { return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global };
        WS.xdomainCheck = function() { return true };
        io.transports.push("websocket") })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) { exports.flashsocket = Flashsocket;

        function Flashsocket() { io.Transport.websocket.apply(this, arguments) } io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function() { var self = this,
                args = arguments;
            WebSocket.Yo9f(function() { io.Transport.websocket.prototype.open.apply(self, args) }); return this };
        Flashsocket.prototype.send = function() { var self = this,
                args = arguments;
            WebSocket.Yo9f(function() { io.Transport.websocket.prototype.send.apply(self, args) }); return this };
        Flashsocket.prototype.close = function() { WebSocket.KS4W.length = 0;
            io.Transport.websocket.prototype.close.call(this); return this };
        Flashsocket.prototype.ready = function(socket, fn) {
            function init() { var options = socket.options,
                    port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"]; if (!Flashsocket.loaded) { if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") { WEB_SOCKET_SWF_LOCATION = path.join("/") } if (port !== 843) { WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port) } WebSocket.beS1x();
                    Flashsocket.loaded = true } fn.call(self) } var self = this; if (document.body) return init();
            io.util.load(init) };
        Flashsocket.check = function() { if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false; return swfobject.getFlashPlayerVersion().major >= 10 };
        Flashsocket.xdomainCheck = function() { return true }; if (typeof window != "undefined") { WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true } io.transports.push("flashsocket") })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports); if ("undefined" != typeof window) { var swfobject = function() { var D = "undefined",
                r = "object",
                S = "Shockwave Flash",
                W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                x = "onreadystatechange",
                O = window,
                j = document,
                t = navigator,
                T = false,
                U = [h],
                o = [],
                N = [],
                I = [],
                l, Q, E, B, J = false,
                a = false,
                n, G, m = true,
                M = function() { var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(),
                        Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah),
                        ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1",
                        ag = [0, 0, 0],
                        ab = null; if (typeof t.plugins != D && typeof t.plugins[S] == r) { ab = t.plugins[S].description; if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) { T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0 } } else { if (typeof O[["Active"].concat("Object").join("X")] != D) { try { var ad = new(window[["Active"].concat("Object").join("X")])(W); if (ad) { ab = ad.GetVariable("$version"); if (ab) { X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)] } } } catch (Z) {} } } return { w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac } }(),
                k = function() { if (!M.w3) { return } if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) { f() } if (!J) { if (typeof j.addEventListener != D) { j.addEventListener("DOMContentLoaded", f, false) } if (M.ie && M.win) { j.attachEvent(x, function() { if (j.readyState == "complete") { j.detachEvent(x, arguments.callee);
                                    f() } }); if (O == top) {
                                (function() { if (J) { return } try { j.documentElement.doScroll("left") } catch (X) { setTimeout(arguments.callee, 0); return } f() })() } } if (M.wk) {
                            (function() { if (J) { return } if (!/loaded|complete/.test(j.readyState)) { setTimeout(arguments.callee, 0); return } f() })() } s(f) } }();

            function f() { if (J) { return } try { var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z) } catch (aa) { return } J = true; var X = U.length; for (var Y = 0; Y < X; Y++) { U[Y]() } }

            function K(X) { if (J) { X() } else { U[U.length] = X } }

            function s(Y) { if (typeof O.addEventListener != D) { O.addEventListener("load", Y, false) } else { if (typeof j.addEventListener != D) { j.addEventListener("load", Y, false) } else { if (typeof O.attachEvent != D) { i(O, "onload", Y) } else { if (typeof O.onload == "function") { var X = O.onload;
                                O.onload = function() { X();
                                    Y() } } else { O.onload = Y } } } } }

            function h() { if (T) { V() } else { H() } }

            function V() { var X = j.getElementsByTagName("body")[0]; var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden"; var Z = X.appendChild(aa); if (Z) { var Y = 0;
                    (function() { if (typeof Z.GetVariable != D) { var ab = Z.GetVariable("$version"); if (ab) { ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)] } } else { if (Y < 10) { Y++;
                                setTimeout(arguments.callee, 10); return } } X.removeChild(aa);
                        Z = null;
                        H() })() } else { H() } }

            function H() { var ag = o.length; if (ag > 0) { for (var af = 0; af < ag; af++) { var Y = o[af].id; var ab = o[af].callbackFn; var aa = { success: false, id: Y }; if (M.pv[0] > 0) { var ae = c(Y); if (ae) { if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) { w(Y, true); if (ab) { aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa) } } else { if (o[af].expressInstall && A()) { var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0"; if (ae.getAttribute("class")) { ai.styleclass = ae.getAttribute("class") } if (ae.getAttribute("align")) { ai.align = ae.getAttribute("align") } var ah = {}; var X = ae.getElementsByTagName("param"); var ac = X.length; for (var ad = 0; ad < ac; ad++) { if (X[ad].getAttribute("name").toLowerCase() != "movie") { ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value") } } P(ai, ah, Y, ab) } else { p(ae); if (ab) { ab(aa) } } } } } else { w(Y, true); if (ab) { var Z = z(Y); if (Z && typeof Z.SetVariable != D) { aa.success = true;
                                    aa.ref = Z } ab(aa) } } } } }

            function z(aa) { var X = null; var Y = c(aa); if (Y && Y.nodeName == "OBJECT") { if (typeof Y.SetVariable != D) { X = Y } else { var Z = Y.getElementsByTagName(r)[0]; if (Z) { X = Z } } } return X }

            function A() { return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312) }

            function P(aa, ab, X, Z) { a = true;
                E = Z || null;
                B = { success: false, id: X }; var ae = c(X); if (ae) { if (ae.nodeName == "OBJECT") { l = g(ae);
                        Q = null } else { l = ae;
                        Q = X } aa.id = R; if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) { aa.width = "310" } if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) { aa.height = "137" } j.title = j.title.slice(0, 47) + " - Flash Player Installation"; var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title; if (typeof ab.flashvars != D) { ab.flashvars += "&" + ac } else { ab.flashvars = ac } if (M.ie && M.win && ae.readyState != 4) { var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function() { if (ae.readyState == 4) { ae.parentNode.removeChild(ae) } else { setTimeout(arguments.callee, 10) } })() } u(aa, ab, X) } }

            function p(Y) { if (M.ie && M.win && Y.readyState != 4) { var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function() { if (Y.readyState == 4) { Y.parentNode.removeChild(Y) } else { setTimeout(arguments.callee, 10) } })() } else { Y.parentNode.replaceChild(g(Y), Y) } }

            function g(ab) { var aa = C("div"); if (M.win && M.ie) { aa.innerHTML = ab.innerHTML } else { var Y = ab.getElementsByTagName(r)[0]; if (Y) { var ad = Y.childNodes; if (ad) { var X = ad.length; for (var Z = 0; Z < X; Z++) { if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) { aa.appendChild(ad[Z].cloneNode(true)) } } } } } return aa }

            function u(ai, ag, Y) { var X, aa = c(Y); if (M.wk && M.wk < 312) { return X } if (aa) { if (typeof ai.id == D) { ai.id = Y } if (M.ie && M.win) { var ah = ""; for (var ae in ai) { if (ai[ae] != Object.prototype[ae]) { if (ae.toLowerCase() == "data") { ag.movie = ai[ae] } else { if (ae.toLowerCase() == "styleclass") { ah += ' class="' + ai[ae] + '"' } else { if (ae.toLowerCase() != "classid") { ah += " " + ae + '="' + ai[ae] + '"' } } } } } var af = ""; for (var ad in ag) { if (ag[ad] != Object.prototype[ad]) { af += '<param name="' + ad + '" value="' + ag[ad] + '" />' } } aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id) } else { var Z = C(r);
                        Z.setAttribute("type", q); for (var ac in ai) { if (ai[ac] != Object.prototype[ac]) { if (ac.toLowerCase() == "styleclass") { Z.setAttribute("class", ai[ac]) } else { if (ac.toLowerCase() != "classid") { Z.setAttribute(ac, ai[ac]) } } } } for (var ab in ag) { if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") { e(Z, ab, ag[ab]) } } aa.parentNode.replaceChild(Z, aa);
                        X = Z } } return X }

            function e(Z, X, Y) { var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa) }

            function y(Y) { var X = c(Y); if (X && X.nodeName == "OBJECT") { if (M.ie && M.win) { X.style.display = "none";
                        (function() { if (X.readyState == 4) { b(Y) } else { setTimeout(arguments.callee, 10) } })() } else { X.parentNode.removeChild(X) } } }

            function b(Z) { var Y = c(Z); if (Y) { for (var X in Y) { if (typeof Y[X] == "function") { Y[X] = null } } Y.parentNode.removeChild(Y) } }

            function c(Z) { var X = null; try { X = j.getElementById(Z) } catch (Y) {} return X }

            function C(X) { return j.createElement(X) }

            function i(Z, X, Y) { Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y] }

            function F(Z) { var Y = M.pv,
                    X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0; return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false }

            function v(ac, Y, ad, ab) { if (M.ie && M.mac) { return } var aa = j.getElementsByTagName("head")[0]; if (!aa) { return } var X = ad && typeof ad == "string" ? ad : "screen"; if (ab) { n = null;
                    G = null } if (!n || G != X) { var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z); if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) { n = j.styleSheets[j.styleSheets.length - 1] } G = X } if (M.ie && M.win) { if (n && typeof n.addRule == r) { n.addRule(ac, Y) } } else { if (n && typeof j.createTextNode != D) { n.appendChild(j.createTextNode(ac + " {" + Y + "}")) } } }

            function w(Z, X) { if (!m) { return } var Y = X ? "visible" : "hidden"; if (J && c(Z)) { c(Z).style.visibility = Y } else { v("#" + Z, "visibility:" + Y) } }

            function L(Y) { var Z = /[\\\"<>\.;]/; var X = Z.exec(Y) != null; return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y } var d = function() { if (M.ie && M.win) { window.attachEvent("onunload", function() { var ac = I.length; for (var ab = 0; ab < ac; ab++) { I[ab][0].detachEvent(I[ab][1], I[ab][2]) } var Z = N.length; for (var aa = 0; aa < Z; aa++) { y(N[aa]) } for (var Y in M) { M[Y] = null } M = null; for (var X in swfobject) { swfobject[X] = null } swfobject = null }) } }(); return { registerObject: function(ab, X, aa, Z) { if (M.w3 && ab && X) { var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false) } else { if (Z) { Z({ success: false, id: ab }) } } }, getObjectById: function(X) { if (M.w3) { return z(X) } }, embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) { var X = { success: false, id: ah }; if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) { w(ah, false);
                        K(function() { ae += "";
                            ag += ""; var aj = {}; if (af && typeof af === r) { for (var al in af) { aj[al] = af[al] } } aj.data = ab;
                            aj.width = ae;
                            aj.height = ag; var am = {}; if (ad && typeof ad === r) { for (var ak in ad) { am[ak] = ad[ak] } } if (Z && typeof Z === r) { for (var ai in Z) { if (typeof am.flashvars != D) { am.flashvars += "&" + ai + "=" + Z[ai] } else { am.flashvars = ai + "=" + Z[ai] } } } if (F(Y)) { var an = u(aj, am, ah); if (aj.id == ah) { w(ah, true) } X.success = true;
                                X.ref = an } else { if (aa && A()) { aj.data = aa;
                                    P(aj, am, ah, ac); return } else { w(ah, true) } } if (ac) { ac(X) } }) } else { if (ac) { ac(X) } } }, switchOffAutoHideShow: function() { m = false }, ua: M, getFlashPlayerVersion: function() { return { major: M.pv[0], minor: M.pv[1], release: M.pv[2] } }, hasFlashPlayerVersion: F, createSWF: function(Z, Y, X) { if (M.w3) { return u(Z, Y, X) } else { return undefined } }, showExpressInstall: function(Z, aa, X, Y) { if (M.w3 && A()) { P(Z, aa, X, Y) } }, removeSWF: function(X) { if (M.w3) { y(X) } }, createCSS: function(aa, Z, Y, X) { if (M.w3) { v(aa, Z, Y, X) } }, addDomLoadEvent: K, addLoadEvent: s, getQueryParamValue: function(aa) { var Z = j.location.search || j.location.hash; if (Z) { if (/\?/.test(Z)) { Z = Z.split("?")[1] } if (aa == null) { return L(Z) } var Y = Z.split("&"); for (var X = 0; X < Y.length; X++) { if (Y[X].substring(0, Y[X].indexOf("=")) == aa) { return L(Y[X].substring(Y[X].indexOf("=") + 1)) } } } return "" }, expressInstallCallback: function() { if (a) { var X = c(R); if (X && l) { X.parentNode.replaceChild(l, X); if (Q) { w(Q, true); if (M.ie && M.win) { l.style.display = "block" } } if (E) { E(B) } } a = false } } } }() }(function() { if ("undefined" == typeof window || window.WebSocket) return; var console = window.console; if (!console || !console.log || !console.error) { console = { log: function() {}, error: function() {} } } if (!swfobject.hasFlashPlayerVersion("10.0.0")) { console.error("Flash Player >= 10.0.0 is required."); return } if (location.protocol == "file:") { console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...") } WebSocket = function(url, protocols, proxyHost, proxyPort, headers) { var self = this;
            self.gx5C = WebSocket.cms6m++;
            WebSocket.bBB6v[self.gx5C] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lk7d = {}; if (!protocols) { protocols = [] } else if (typeof protocols == "string") { protocols = [protocols] } setTimeout(function() { WebSocket.Yo9f(function() { WebSocket.od8V.create(self.gx5C, url, protocols, proxyHost || null, proxyPort || 0, headers || null) }) }, 0) };
        WebSocket.prototype.send = function(data) { if (this.readyState == WebSocket.CONNECTING) { throw "INVALID_STATE_ERR: Web Socket connection has not been established" } var result = WebSocket.od8V.send(this.gx5C, encodeURIComponent(data)); if (result < 0) { return true } else { this.bufferedAmount += result; return false } };
        WebSocket.prototype.close = function() { if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) { return } this.readyState = WebSocket.CLOSING;
            WebSocket.od8V.close(this.gx5C) };
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) { if (!(type in this.lk7d)) { this.lk7d[type] = [] } this.lk7d[type].push(listener) };
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) { if (!(type in this.lk7d)) return; var events = this.lk7d[type]; for (var i = events.length - 1; i >= 0; --i) { if (events[i] === listener) { events.splice(i, 1); break } } };
        WebSocket.prototype.dispatchEvent = function(event) { var events = this.lk7d[event.type] || []; for (var i = 0; i < events.length; ++i) { events[i](event) } var handler = this["on" + event.type]; if (handler) handler(event) };
        WebSocket.prototype.cmr6l = function(flashEvent) { if ("readyState" in flashEvent) { this.readyState = flashEvent.readyState } if ("protocol" in flashEvent) { this.protocol = flashEvent.protocol } var jsEvent; if (flashEvent.type == "open" || flashEvent.type == "error") { jsEvent = this.bBG6A(flashEvent.type) } else if (flashEvent.type == "close") { jsEvent = this.bBG6A("close") } else if (flashEvent.type == "message") { var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cmq6k("message", data) } else { throw "unknown event type: " + flashEvent.type } this.dispatchEvent(jsEvent) };
        WebSocket.prototype.bBG6A = function(type) { if (document.createEvent && window.Event) { var event = document.createEvent("Event");
                event.initEvent(type, false, false); return event } else { return { type: type, bubbles: false, cancelable: false } } };
        WebSocket.prototype.cmq6k = function(type, data) { if (document.createEvent && window.MessageEvent && !window.opera) { var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null); return event } else { return { type: type, data: data, bubbles: false, cancelable: false } } };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.od8V = null;
        WebSocket.bBB6v = {};
        WebSocket.KS4W = [];
        WebSocket.cms6m = 0;
        WebSocket.loadFlashPolicyFile = function(url) { WebSocket.Yo9f(function() { WebSocket.od8V.loadManualPolicyFile(url) }) };
        WebSocket.beS1x = function() { if (WebSocket.od8V) return; if (WebSocket.cmp6j) { window.WEB_SOCKET_SWF_LOCATION = WebSocket.cmp6j } if (!window.WEB_SOCKET_SWF_LOCATION) { console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf"); return } var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute"; if (WebSocket.cmo6i()) { container.style.left = "0px";
                container.style.top = "0px" } else { container.style.left = "-100px";
                container.style.top = "-100px" } var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, { hasPriority: true, swliveconnect: true, allowScriptAccess: "always" }, null, function(e) { if (!e.success) { console.error("[WebSocket] swfobject.embedSWF failed") } }) };
        WebSocket.cul7e = function() { setTimeout(function() { WebSocket.od8V = document.getElementById("webSocketFlash");
                WebSocket.od8V.setCallerUrl(location.href);
                WebSocket.od8V.setDebug(!!window.WEB_SOCKET_DEBUG); for (var i = 0; i < WebSocket.KS4W.length; ++i) { WebSocket.KS4W[i]() } WebSocket.KS4W = [] }, 0) };
        WebSocket.cum7f = function() { setTimeout(function() { try { var events = WebSocket.od8V.receiveEvents(); for (var i = 0; i < events.length; ++i) { WebSocket.bBB6v[events[i].webSocketId].cmr6l(events[i]) } } catch (e) { console.error(e) } }, 0); return true };
        WebSocket.cun7g = function(message) { console.log(decodeURIComponent(message)) };
        WebSocket.dy4C = function(message) { console.error(decodeURIComponent(message)) };
        WebSocket.Yo9f = function(task) { if (WebSocket.od8V) { task() } else { WebSocket.KS4W.push(task) } };
        WebSocket.cmo6i = function() { if (!window.navigator || !window.navigator.mimeTypes) { return false } var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"]; if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) { return false } return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false }; if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) { if (window.addEventListener) { window.addEventListener("load", function() { WebSocket.beS1x() }, false) } else { window.attachEvent("onload", function() { WebSocket.beS1x() }) } } })();
    (function(exports, io, global) { exports.XHR = XHR;

        function XHR(socket) { if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = [] } io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function() { this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout(); return this };
        XHR.prototype.payload = function(payload) { var msgs = []; for (var i = 0, l = payload.length; i < l; i++) { msgs.push(io.parser.encodePacket(payload[i])) } this.send(io.parser.encodePayload(msgs)) };
        XHR.prototype.send = function(data) { this.post(data); return this };

        function empty() {} XHR.prototype.post = function(data) { var self = this;
            this.socket.setBuffer(true);

            function stateChange() { if (this.readyState == 4) { this.onreadystatechange = empty;
                    self.posting = false; if (this.status == 200) { self.socket.setBuffer(false) } else { self.onClose() } } }

            function onload() { this.onload = empty;
                self.socket.setBuffer(false) } this.sendXHR = this.request("POST"); if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) { this.sendXHR.onload = this.sendXHR.onerror = onload } else { this.sendXHR.onreadystatechange = stateChange } this.sendXHR.send(data) };
        XHR.prototype.close = function() { this.onClose(); return this };
        XHR.prototype.request = function(method) { var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true); if (method == "POST") { try { if (req.setRequestHeader) { req.setRequestHeader("Content-type", "text/plain;charset=UTF-8") } else { req.contentType = "text/plain" } } catch (e) {} } return req };
        XHR.prototype.scheme = function() { return this.socket.options.secure ? "https" : "http" };
        XHR.check = function(socket, xdomain) { try { var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol; if (request && !(usesXDomReq && isXProtocol)) { return true } } catch (e) {} return false };
        XHR.xdomainCheck = function(socket) { return XHR.check(socket, true) } })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) { exports.htmlfile = HTMLFile;

        function HTMLFile(socket) { io.Transport.XHR.apply(this, arguments) } io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function() { this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this; var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe); var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function() { self.destroy() }) };
        HTMLFile.prototype.c2x = function(data, doc) { data = data.replace(/\\\//g, "/");
            this.onData(data); try { var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script) } catch (e) {} };
        HTMLFile.prototype.destroy = function() { if (this.iframe) { try { this.iframe.src = "about:blank" } catch (e) {} this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage() } };
        HTMLFile.prototype.close = function() { this.destroy(); return io.Transport.XHR.prototype.close.call(this) };
        HTMLFile.check = function(socket) { if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) { try { var a = new(window[["Active"].concat("Object").join("X")])("htmlfile"); return a && io.Transport.XHR.check(socket) } catch (e) {} } return false };
        HTMLFile.xdomainCheck = function() { return false };
        io.transports.push("htmlfile") })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) { exports["xhr-polling"] = XHRPolling;

        function XHRPolling() { io.Transport.XHR.apply(this, arguments) } io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function() { return false };
        XHRPolling.prototype.open = function() { var self = this;
            io.Transport.XHR.prototype.open.call(self); return false };

        function empty() {} XHRPolling.prototype.get = function() { if (!this.isOpen) return; var self = this;

            function stateChange() { if (this.readyState == 4) { this.onreadystatechange = empty; if (this.status == 200) { self.onData(this.responseText);
                        self.get() } else { self.onClose() } } }

            function onload() { this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get() }

            function onerror() { self.retryCounter++; if (!self.retryCounter || self.retryCounter > 3) { self.onClose() } else { self.get() } } this.xhr = this.request(); if (global.XDomainRequest && this.xhr instanceof XDomainRequest) { this.xhr.onload = onload;
                this.xhr.onerror = onerror } else { this.xhr.onreadystatechange = stateChange } this.xhr.send(null) };
        XHRPolling.prototype.onClose = function() { io.Transport.XHR.prototype.onClose.call(this); if (this.xhr) { this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty; try { this.xhr.abort() } catch (e) {} this.xhr = null } };
        XHRPolling.prototype.ready = function(socket, fn) { var self = this;
            io.util.defer(function() { fn.call(self) }) };
        io.transports.push("xhr-polling") })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io, global) { var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) { io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length; var self = this;
            io.j.push(function(msg) { self.c2x(msg) }) } io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function(data) { var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index); if (!this.form) { var form = document.createElement("form"),
                    area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index,
                    iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area } this.form.action = this.prepareUrl() + query;

            function complete() { initIframe();
                self.socket.setBuffer(false) }

            function initIframe() { if (self.iframe) { self.form.removeChild(self.iframe) } try { iframe = document.createElement('<iframe name="' + self.iframeId + '">') } catch (e) { iframe = document.createElement("iframe");
                    iframe.name = self.iframeId } iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe } initIframe();
            this.area.value = io.JSON.stringify(data); try { this.form.submit() } catch (e) {} if (this.iframe.attachEvent) { iframe.onreadystatechange = function() { if (self.iframe.readyState == "complete") { complete() } } } else { this.iframe.onload = complete } this.socket.setBuffer(true) };
        JSONPPolling.prototype.get = function() { var self = this,
                script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index); if (this.script) { this.script.parentNode.removeChild(this.script);
                this.script = null } script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function() { self.onClose() }; var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script; if (indicator) { setTimeout(function() { var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe) }, 100) } };
        JSONPPolling.prototype.c2x = function(msg) { this.onData(msg); if (this.isOpen) { this.get() } return this };
        JSONPPolling.prototype.ready = function(socket, fn) { var self = this; if (!indicator) return fn.call(this);
            io.util.load(function() { fn.call(self) }) };
        JSONPPolling.check = function() { return "document" in global };
        JSONPPolling.xdomainCheck = function() { return true };
        io.transports.push("jsonp-polling") })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this); if (typeof define === "function" && define.amd) { define([], function() { return io }) } })();
(function() { var isArray = Array.isArray; if (isArray === undefined) { isArray = function(arr) { return Object.prototype.toString.call(arr) === "[object Array]" } } var root = this;

    function EventEmitter() {} if (typeof module !== "undefined" && module.exports) { module.exports.EventEmitter = EventEmitter } else { root = window;
        root.EventEmitter = EventEmitter } var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) { if (!this.dH4L) this.dH4L = {};
        this.bCg6a = n };
    EventEmitter.prototype.emit = function() { var type = arguments[0]; if (type === "error") { if (!this.dH4L || !this.dH4L.error || isArray(this.dH4L.error) && !this.dH4L.error.length) { if (this.domain) { var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er); return false } if (arguments[1] instanceof Error) { throw arguments[1] } else { throw new Error("Uncaught, unspecified 'error' event.") } return false } } if (!this.dH4L) return false; var handler = this.dH4L[type]; if (!handler) return false; if (typeof handler == "function") { if (this.domain) { this.domain.enter() } switch (arguments.length) {
                case 1:
                    handler.call(this); break;
                case 2:
                    handler.call(this, arguments[1]); break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]); break;
                default:
                    var l = arguments.length; var args = new Array(l - 1); for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                    handler.apply(this, args) } if (this.domain) { this.domain.exit() } return true } else if (isArray(handler)) { if (this.domain) { this.domain.enter() } var l = arguments.length; var args = new Array(l - 1); for (var i = 1; i < l; i++) args[i - 1] = arguments[i]; var listeners = handler.slice(); for (var i = 0, l = listeners.length; i < l; i++) { listeners[i].apply(this, args) } if (this.domain) { this.domain.exit() } return true } else { return false } };
    EventEmitter.prototype.addListener = function(type, listener) { if ("function" !== typeof listener) { throw new Error("addListener only takes instances of Function") } if (!this.dH4L) this.dH4L = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener); if (!this.dH4L[type]) { this.dH4L[type] = listener } else if (isArray(this.dH4L[type])) { this.dH4L[type].push(listener) } else { this.dH4L[type] = [this.dH4L[type], listener] } if (isArray(this.dH4L[type]) && !this.dH4L[type].warned) { var m; if (this.bCg6a !== undefined) { m = this.bCg6a } else { m = defaultMaxListeners } if (m && m > 0 && this.dH4L[type].length > m) { this.dH4L[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dH4L[type].length);
                console.trace() } } return this };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) { if ("function" !== typeof listener) { throw new Error(".once only takes instances of Function") } var self = this;

        function g() { self.removeListener(type, g);
            listener.apply(this, arguments) } g.listener = listener;
        self.on(type, g); return this };
    EventEmitter.prototype.removeListener = function(type, listener) { if ("function" !== typeof listener) { throw new Error("removeListener only takes instances of Function") } if (!this.dH4L || !this.dH4L[type]) return this; var list = this.dH4L[type]; if (isArray(list)) { var position = -1; for (var i = 0, length = list.length; i < length; i++) { if (list[i] === listener || list[i].listener && list[i].listener === listener) { position = i; break } } if (position < 0) return this;
            list.splice(position, 1) } else if (list === listener || list.listener && list.listener === listener) { delete this.dH4L[type] } return this };
    EventEmitter.prototype.removeAllListeners = function(type) { if (arguments.length === 0) { this.dH4L = {}; return this } var events = this.dH4L && this.dH4L[type]; if (!events) return this; if (isArray(events)) { events.splice(0) } else { this.dH4L[type] = null } return this };
    EventEmitter.prototype.listeners = function(type) { if (!this.dH4L) this.dH4L = {}; if (!this.dH4L[type]) this.dH4L[type] = []; if (!isArray(this.dH4L[type])) { this.dH4L[type] = [this.dH4L[type]] } return this.dH4L[type] } })();
(function() { if (typeof Object.create !== "function") { Object.create = function(o) {
            function F() {} F.prototype = o; return new F } } var root = window; var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo; var socket = null; var id = 1; var callbacks = {}; var route = "web-connector.messageHandler."; var isRegister = false; var success = 200; var register_ack = "register"; var bind_ack = "bind"; var regBind_ack = "registerAndBind"; var cancelBind_ack = "cancelBind"; var message_store = {}; var heartbeat_interval = 1e3 * 60; var heartbeat_timer; var current_user; var current_domain; var cacheMessageIds = []; var cacheSize = 100;
    pomelo.init = function(host, port, reconnect, cb) { var url = "ws://" + host; if (port) { url += ":" + port } var params; if (reconnect) { params = { "force new connection": true, reconnect: true, "max reconnection attempts": 50 } } else { params = { "force new connection": true, reconnect: false } } socket = io.connect(url, params);
        socket.on("connect", function() { console.log("[pomeloclient.init] websocket connected!");
            cb() });
        socket.on("reconnect", function() { pomelo.emit("reconnect") });
        socket.on("message", function(data) { message_store = {}; if (typeof data === "string") { data = JSON.parse(data) } if (data instanceof Array) { processMessageBatch(data) } else { processMessage(data);
                emitMessage() } });
        socket.on("error", function(err) { cb(err) });
        socket.on("disconnect", function(reason) { isRegister = false;
            pomelo.emit("disconnect", reason) }) }; var request = function(method, opts, cb) { if (!method) { console.error("request message error with no method."); return } id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts) }; var notify = function(method, msg) { if (!method) { console.error("notify message error with no method."); return } sendMsg(method, 0, msg) }; var sendMsg = function(method, msgId, msg) { var path = route + method; var rs = { id: msgId, route: path, msg: msg }; var sg = JSON.stringify(rs);
        socket.send(sg) }; var processMessageBatch = function(msgs) { for (var i = 0, l = msgs.length; i < l; i++) { processMessage(msgs[i]) } emitMessage() }; var emitMessage = function() { for (var key in message_store) { pomelo.emit(key, message_store[key]) } }; var processMessage = function(msg) { if (msg.id) { var cb = callbacks[msg.id];
            delete callbacks[msg.id]; if (typeof cb !== "function") { console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id); return } cb(msg.body); if (msg.body.type === register_ack && msg.body.code == success) { isRegister = true } if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) { heartbeat_timer = setInterval(function() { notify("heartbeat", { flag: "online", domain: current_domain, user: current_user }) }, heartbeat_interval) } if (msg.body.type === cancelBind_ack && msg.body.code == success) { clearInterval(heartbeat_timer) } return } else { if (!filterMessage(msg)) { return } if (!message_store[msg.route]) { if (msg.body instanceof Array) { message_store[msg.route] = msg.body } else { message_store[msg.route] = [msg.body] } } else { var arr = message_store[msg.route]; if (msg.body instanceof Array) { var messages = msg.body; for (var i = 0; i < messages.length; i++) { arr.push(messages[i]) } } else { arr.push(msg.body) } message_store[msg.route] = arr } } }; var filterMessage = function(message) { var msgs = message.body; var ids = []; var results = {}; if (msgs instanceof Array) { for (var i = 0; i < msgs.length; i++) { var id = msgs[i].msgId;
                ids.push(id) } var duplicatedIds = checkMessage(ids); if (duplicatedIds.length !== 0) { return false } else { cacheMessageIds = cacheMessageIds.concat(ids); if (cacheMessageIds.length > cacheSize) { var length = cacheMessageIds - cacheSize; for (var i = 0; i < length; i++) { cacheMessageIds.shift() } } } } return true }; var checkMessage = function(ids) { var array = []; for (var i = 0; i < cacheMessageIds.length; i++) { var id = cacheMessageIds[i]; for (var j = 0; j < ids.length; j++) { if (ids[j] === id) { array.push(id) } } } return array };
    pomelo.register = function(opts, cb) { request("register", opts, cb) };
    pomelo.bind = function(opts, cb) { if (isRegister) { current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb) } else { console.log("cannot bind without registration.") } };
    pomelo.registerAndBind = function(opts, cb) { current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb) };
    pomelo.cancelBind = function(opts, cb) { current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb) };
    pomelo.getOnlineUser = function(opts, cb) { request("getOnlineUser", opts, cb) };
    pomelo.disconnect = function() { if (socket) { socket.disconnect();
            socket = null } };
    pomelo.ackMessage = function(domain, msgs) { var msgIds = ""; var types = ""; var message = {}; var user; for (var i = 0; i < msgs.length; i++) { var data = msgs[i]; if (!user) { user = data.user } msgIds += data.msgId;
            types += data.type; if (i !== msgs.length - 1) { msgIds += ";";
                types += ";" } } var message = { user: user, msgIds: msgIds, types: types, domain: domain };
        notify("ack", message) } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        l2x = c2x("nm.x"),
        di4m = c2x("nm.u"),
        p2x = c2x("nm.d"),
        KL4P = c2x("pomelo"),
        dk4o = 0,
        b2x, K3x;
    p2x.eQ5V({ "polling-init": { url: "/api/push/init", format: function(Q3x) { dk4o = 2; var rI9z = { domain: "music.163.com", host: MUSIC_CONFIG.pushHost, port: MUSIC_CONFIG.pushPort, key: MUSIC_CONFIG.pushKey, secret: "bec0b878892740c498505a85eb3dcec9" },
                    j2x = Q3x.account || Y3x,
                    cU4Y = GUser.userId;
                KL4P.init(rI9z.host, rI9z.port, true, this.cmi6c.g2x(this, { user: cU4Y, nonce: j2x.nonce, domain: rI9z.domain, productKey: rI9z.key, signature: j2x.signature, expire_time: j2x.expireTime })) }, onerror: function() { return this.bcy0x() } } });
    p2x.zi1x = NEJ.C();
    b2x = p2x.zi1x.O3x(p2x.gW5b);
    b2x.cl3x = function() { var pO8G = !1; return function(e2x) { if (!pO8G) { pO8G = !0 } this.cs3x(e2x);
            KL4P.on("specify", this.qr8j.g2x(this));
            KL4P.on("broadcast", this.qr8j.g2x(this)) } }();
    b2x.qr8j = function(d2x) { k2x.be3x(d2x, function(bF3x) { h2x.z2x(p2x.zi1x, "message", bF3x) }, this) };
    b2x.bcy0x = function() { var bA3x = 500; return function() { dk4o = 0;
            KL4P.disconnect(); if (bA3x > 6e4) bA3x = 500;
            bA3x *= 2 } }();
    b2x.cmi6c = function(e2x, bQ3x) { if (!!bQ3x) { return this.bcy0x() } dk4o = 3;
        KL4P.registerAndBind(e2x, function(m2x) { if (m2x.code != 200) { return this.bcy0x() } dk4o = 4 }.g2x(this)) };
    b2x.cuo7h = function() { di4m.cmf6Z.fX5c().cup7i() };
    b2x.cuq7j = function() { di4m.cmf6Z.fX5c().cur7k() };
    b2x.bcj0x = function() { var pO8G = !1; return function() { if (pO8G) return;
            pO8G = !0;
            this.ck3x("polling-init", {}) } }();
    H2x.fr5w.B2x({ event: "message", element: p2x.zi1x }) })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        cP4T = c2x("nej.p"),
        k2x = c2x("nej.u"),
        n2x = c2x("nm.l"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        dj4n = c2x("api"),
        b2x, K3x; var gh5m = a1x.hM5R('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n2x.bbk0x = NEJ.C();
    b2x = n2x.bbk0x.O3x(n2x.dW4a);
    K3x = n2x.bbk0x.cg3x;
    b2x.bk3x = function(e2x) { e2x.title = "意见反馈";
        this.bl3x(e2x) };
    b2x.bZ3x = function() { this.ca3x = gh5m };
    b2x.bR3x = function() { this.cc3x();
        this.gG5L = {}; var Jb3x = a1x.I2x; var CA2x = h2x.q2x;
        this.gG5L.submit_btn = Jb3x(this.o2x, "u-btn2")[0];
        this.gG5L.cancle_btn = Jb3x(this.o2x, "u-btn2")[1];
        this.gG5L.prompt_msg = Jb3x(this.o2x, "u-err")[0];
        this.gG5L.zs = Jb3x(this.o2x, "zs")[0];
        a1x.X3x(this.gG5L.zs, "display", "none");
        this.gG5L.fb_txt = Jb3x(this.o2x, "u-txt")[0];
        this.gG5L.contact = Jb3x(this.o2x, "u-txt")[1];
        a1x.fC5H(this.gG5L.fb_txt, "holder");
        a1x.fC5H(this.gG5L.contact, "holder"); if (a1x.bz3x(this.gG5L.fb_txt.parentNode, "holder-parent")) { a1x.X3x(this.gG5L.fb_txt.parentNode, "display", "block") } if (a1x.bz3x(this.gG5L.contact.parentNode, "holder-parent")) { a1x.X3x(this.gG5L.contact.parentNode, "display", "block") } CA2x(this.gG5L.submit_btn, "click", this.cmc6W.g2x(this));
        CA2x(this.gG5L.cancle_btn, "click", this.cma6U.g2x(this));
        CA2x(this.gG5L.prompt_msg, "msgShow", this.clZ6T.g2x(this));
        CA2x(this.gG5L.fb_txt, "keyup", this.tn9e.g2x(this));
        CA2x(this.gG5L.fb_txt, "input", this.fo5t.g2x(this));
        CA2x(this.gG5L.contact, "keyup", this.clY6S.g2x(this));
        CA2x(this.gG5L.contact, "input", this.bDp7i.g2x(this));
        this.kz6t = p2x.hL5Q.B2x() };
    b2x.cmc6W = function(d2x) { h2x.bh3x(d2x); if (this.ct3x()) return; var bi3x = this.gG5L.fb_txt.value.trim(); var bq3x = bi3x.length; var e2x = { type: "json", method: "post", noEnc: true }; var bDu7n = this.gG5L.contact.value.trim(); var YJ9A = { ua: navigator.userAgent, hash: top.location.hash, href: location.href, flash: l2x.bcz0x(), contact: bDu7n }; var j2x = { content: bi3x, client: "web", xInfo: JSON.stringify(YJ9A) },
            nh7a = this.kz6t.crd7W(); if (nh7a && nh7a.length) { j2x.log = nh7a.join("\n") } if (bq3x == 0) { this.gG5L.prompt_msg.innerHTML = "反馈内容不能为空";
            a1x.X3x(this.gG5L.prompt_msg, "display", "block"); return } if (bDu7n.length > 100) { this.gG5L.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a1x.X3x(this.gG5L.prompt_msg, "display", "block"); return } this.ct3x(true);
        e2x.data = k2x.df4j(j2x);
        e2x.onload = this.clU6O.g2x(this);
        e2x.onerror = this.hU5Z.g2x(this);
        v2x.bp3x("/api/feedback/web", e2x) };
    b2x.fo5t = function(d2x) { var bq3x = this.gG5L.fb_txt.value.trim().length; if (bq3x > 0) a1x.X3x(this.gG5L.prompt_msg, "display", "none");
        cP4T.cR4V.browser == "ie" && cP4T.cR4V.version < "7.0" ? setTimeout(this.fz5E.g2x(this), 0) : this.fz5E() };
    b2x.tn9e = function(d2x) { if (d2x.keyCode === 8) this.fz5E() };
    b2x.fz5E = function() { var bq3x = this.gG5L.fb_txt.value.trim().length;
        this.gG5L.zs.innerHTML = !bq3x ? "0/140" : bq3x + "/140" };
    b2x.bDp7i = function(d2x) { var bq3x = this.gG5L.contact.value.trim().length; if (bq3x > 0) a1x.X3x(this.gG5L.prompt_msg, "display", "none") };
    b2x.clY6S = function(d2x) { if (d2x.keyCode === 8) this.bDp7i() };
    b2x.cma6U = function(d2x) { h2x.ce3x(d2x);
        this.bo3x() };
    b2x.clZ6T = function(d2x) { var f2x = h2x.U3x(d2x);
        f2x.innerHTML = "请输入反馈内容" };
    b2x.cus7l = function(cut7m) { var f2x = h2x.U3x(d2x);
        f2x.innerHTML = "" };
    b2x.clU6O = function(m2x) { this.ct3x(false);
        this.bo3x();
        n2x.Z3x.M3x({ tip: "意见发送成功", autoclose: true }) };
    b2x.hU5Z = function(m2x) { this.ct3x(false);
        n2x.Z3x.M3x({ tip: "意见发送失败", autoclose: true }) };
    b2x.ct3x = function(cC4G) { return this.dM4Q(this.gG5L.submit_btn, cC4G, "发送意见", "发送中...") };
    b2x.M3x = function() { K3x.M3x.call(this);
        this.ct3x(false);
        this.gG5L.fb_txt.value = "";
        this.gG5L.contact.value = "";
        a1x.X3x(this.gG5L.prompt_msg, "display", "none");
        this.fz5E() };
    l2x.clQ6K = function(e2x) { e2x = e2x || {}; if (e2x.title === undefined) e2x.title = "意见反馈";
        n2x.bbk0x.M3x(e2x) };
    dj4n.feedback = l2x.feedback = l2x.clQ6K })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        N3x = c2x("nej.ui"),
        b2x; if (!!N3x.vX0x) return;
    N3x.vX0x = NEJ.C();
    b2x = N3x.vX0x.O3x(N3x.et4x);
    b2x.cl3x = function() { this.gx5C = this.bEe7X();
        this.cs3x() };
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.cn3x = e2x.index;
        this.fR5W = e2x.total;
        this.gJ5O = e2x.range;
        this.fT5Y(e2x.data) };
    b2x.bC3x = function() { this.bH3x();
        delete this.bb3x;
        delete this.cn3x;
        delete this.fR5W;
        delete this.gJ5O };
    b2x.hm5r = bm3x;
    b2x.bEe7X = function() { var fW5b = +(new Date); return function() { return "itm-" + ++fW5b } }();
    b2x.BO1x = function() { return this.gx5C };
    b2x.hk5p = function() { return this.bb3x };
    b2x.fT5Y = function(j2x) { this.bb3x = j2x || {};
        this.hm5r(this.bb3x) } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        N3x = c2x("nej.ui"),
        b2x, K3x; if (!!N3x.rm8e) return;
    N3x.rm8e = NEJ.C();
    b2x = N3x.rm8e.O3x(N3x.vX0x);
    K3x = N3x.rm8e.cg3x;
    b2x.bk3x = function(e2x) { this.clP6J = e2x.pkey || "id";
        this.bl3x(e2x) };
    b2x.Da2x = function(j2x) { this.z2x("ondelete", { ext: j2x, id: this.BO1x(), data: this.hk5p(), body: this.kB6v() }) };
    b2x.Kz4D = function(j2x) { this.z2x("onupdate", { ext: j2x, id: this.BO1x(), data: this.hk5p(), body: this.kB6v() }) };
    b2x.fT5Y = function(j2x) { K3x.fT5Y.apply(this, arguments);
        this.gx5C = this.bb3x[this.clP6J] || this.bEe7X() } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        eU5Z = NEJ.R,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        N3x = c2x("nej.ui"),
        b2x, hQ5V, boD3x; if (!!N3x.boB3x) return;
    N3x.boB3x = NEJ.C();
    b2x = N3x.boB3x.O3x(N3x.et4x);
    b2x.bk3x = function(e2x) { this.YL9C = NEJ.X({}, e2x);
        this.fB5G = NEJ.X({}, e2x);
        delete this.YL9C.onchange;
        this.fB5G.onchange = this.go5t.g2x(this);
        this.bl3x(e2x);
        this.clO5T({ number: e2x.number, label: e2x.label || Y3x }) };
    b2x.bC3x = function() { this.bH3x(); if (!!this.kg6a) { this.kg6a.S3x();
            delete this.kg6a } delete this.YL9C;
        delete this.fB5G;
        this.clN5S();
        this.o2x.innerHTML = "&nbsp;" };
    b2x.bZ3x = function() { this.lg7Z = hQ5V };
    b2x.clO5T = function(j2x) { a1x.dS4W(this.o2x, boD3x, j2x); var fW5b = a1x.Gl3x();
        this.fB5G.list = a1x.I2x(this.o2x, "js-i-" + fW5b);
        this.fB5G.pbtn = (a1x.I2x(this.o2x, "js-p-" + fW5b) || eU5Z)[0];
        this.fB5G.nbtn = (a1x.I2x(this.o2x, "js-n-" + fW5b) || eU5Z)[0] };
    b2x.bR3x = function() { this.cc3x() };
    b2x.cuu7n = function(j2x) { return a1x.bP3x(boD3x, j2x) };
    b2x.go5t = function(d2x) { if (this.Kt4x) return; var s2x = d2x.index,
            cq3x = d2x.total;
        this.Kt4x = !0;
        this.Ks4w(s2x, cq3x);
        k2x.be3x(this.Zb9S, function(rN9E) { rN9E.Ks4w(s2x, cq3x) });
        this.Kt4x = !1;
        this.z2x("onchange", d2x) };
    b2x.g2x = function(bB3x) { bB3x = a1x.x2x(bB3x); if (!bB3x) return this; var cm3x = NEJ.X({}, this.YL9C);
        cm3x.parent = bB3x;
        cm3x.index = this.rL9C();
        cm3x.total = this.jF6z(); var rN9E = this.constructor.B2x(cm3x);
        rN9E.uY0x("onchange", this.fB5G.onchange); if (!this.Zb9S) this.Zb9S = [];
        this.Zb9S.push(rN9E); return this };
    b2x.clN5S = function() { var bll2x = function(rN9E, s2x, i2x) { rN9E.S3x();
            i2x.splice(s2x, 1) }; return function() { k2x.me7X(this.Zb9S, bll2x) } }();
    b2x.jv6p = function(s2x) { if (!this.kg6a) return;
        this.kg6a.jv6p(s2x) };
    b2x.rL9C = function() { if (!this.kg6a) return 1; return this.kg6a.rL9C() };
    b2x.jF6z = function() { if (!this.kg6a) return 1; return this.kg6a.jF6z() };
    b2x.Ks4w = function(s2x, cq3x) { if (!this.kg6a) return;
        this.kg6a.Ks4w(s2x, cq3x) };
    b2x.bjc2x = function(cq3x) { if (!this.kg6a) return;
        this.kg6a.bjc2x(cq3x) };
    hQ5V = a1x.sj9a(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    boD3x = a1x.er4v('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}') })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        N3x = c2x("nej.ut"),
        b2x; if (!!N3x.Ze9V) return;
    N3x.Ze9V = NEJ.C();
    b2x = N3x.Ze9V.O3x(N3x.cy3x);
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.Zf9W = e2x.pbtn;
        this.cf3x = e2x.nbtn;
        this.Zg9X = e2x.sbtn;
        this.Zj9a = e2x.ebtn;
        this.ic6W = e2x.event || "click";
        this.jS6M = e2x.selected || "js-selected";
        this.mP7I = e2x.disabled || "js-disabled";
        this.clL5Q(e2x.list);
        this.Ks4w(e2x.index || 1, e2x.total || 1) };
    b2x.bC3x = function() { this.bH3x();
        delete this.bV3x;
        delete this.ic6W;
        delete this.Zf9W;
        delete this.cf3x;
        delete this.Zg9X;
        delete this.Zj9a;
        delete this.bGK7D;
        delete this.fR5W;
        delete this.cn3x;
        delete this.jS6M;
        delete this.mP7I };
    b2x.clL5Q = function() { var bfr1x = function(f2x) { this.bV3x.push(f2x);
            this.bU3x([
                [f2x, this.ic6W, this.cI4M.dV4Z(this, 0)]
            ]) }; return function(i2x) { this.bV3x = [];
            this.bU3x([
                [this.Zf9W, "click", this.cI4M.dV4Z(this, -1)],
                [this.cf3x, "click", this.cI4M.dV4Z(this, 1)],
                [this.Zg9X, "click", this.cI4M.dV4Z(this, -2)],
                [this.Zj9a, "click", this.cI4M.dV4Z(this, 2)]
            ]);
            k2x.be3x(i2x, bfr1x, this) } }();
    b2x.DC2x = function(f2x, s2x) { if (s2x == null) { f2x.innerText = "";
            a1x.X3x(f2x, "display", "none");
            a1x.w2x(f2x, this.jS6M) } else { f2x.innerText = s2x;
            a1x.X3x(f2x, "display", "");
            s2x == this.cn3x ? a1x.y2x(f2x, this.jS6M) : a1x.w2x(f2x, this.jS6M) } };
    b2x.beh1x = function() { if (this.cn3x <= 1) { a1x.y2x(this.Zf9W, this.mP7I);
            a1x.y2x(this.Zg9X, this.mP7I) } else { a1x.w2x(this.Zf9W, this.mP7I);
            a1x.w2x(this.Zg9X, this.mP7I) } if (this.cn3x >= this.fR5W) { a1x.y2x(this.cf3x, this.mP7I);
            a1x.y2x(this.Zj9a, this.mP7I) } else { a1x.w2x(this.cf3x, this.mP7I);
            a1x.w2x(this.Zj9a, this.mP7I) } };
    b2x.Zl9c = bm3x;
    b2x.bcW0x = function() { this.Zl9c();
        this.beh1x();
        this.z2x("onchange", { last: this.bGK7D, total: this.fR5W, index: this.cn3x, ext: this.bcE0x }) };
    b2x.bHm8e = function(s2x) { s2x = parseInt(s2x); if (isNaN(s2x) || this.fR5W == null) return !1;
        s2x = Math.max(1, Math.min(s2x, this.fR5W));
        this.bGK7D = this.cn3x;
        this.cn3x = s2x; return !0 };
    b2x.baC0x = function(cq3x) { cq3x = parseInt(cq3x); if (isNaN(cq3x) || cq3x < 1) return !1;
        this.fR5W = cq3x; return !0 };
    b2x.cI4M = function(d2x, eB4F) { h2x.ce3x(d2x); var E2x = h2x.U3x(d2x); if (!E2x || a1x.bz3x(E2x, this.jS6M) || a1x.bz3x(E2x, this.mP7I)) return; var s2x = E2x.innerText; switch (eB4F) {
            case 1:
            case -1:
                s2x = this.cn3x + eB4F; break;
            case 2:
                s2x = this.fR5W; break;
            case -2:
                s2x = 1; break } this.jv6p(s2x) };
    b2x.rL9C = function() { return this.cn3x };
    b2x.jv6p = function(s2x) { var clK5P = this.cn3x;
        this.bHm8e(s2x); if (clK5P != this.cn3x) this.bcW0x(); return this };
    b2x.jF6z = function() { return this.fR5W };
    b2x.PY6S = function(cq3x) { if (this.baC0x(cq3x) && this.cn3x != null) { this.cn3x = 1;
            this.bcW0x() } return this };
    b2x.bjc2x = function(cq3x) { if (this.baC0x(cq3x)) { this.Zl9c();
            this.beh1x() } return this };
    b2x.Ks4w = function(s2x, cq3x) { if (!this.baC0x(cq3x) || !this.bHm8e(s2x)) return this;
        this.bcW0x(); return this } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        cO4S = c2x("nej.x"),
        N3x = c2x("nej.ut"),
        b2x; if (!!N3x.Ke4i) return;
    N3x.Ke4i = NEJ.C();
    b2x = N3x.Ke4i.O3x(N3x.Ze9V);
    b2x.cl3x = function() { this.cs3x(); var f2x = a1x.cT4X("span", "zdot");
        f2x.innerText = "...";
        this.Zr9i = [f2x.cloneNode(true), f2x] };
    b2x.bC3x = function() { this.bH3x();
        this.bHN8F() };
    b2x.bHN8F = function() { a1x.mq7j(this.Zr9i[0]);
        a1x.mq7j(this.Zr9i[1]) };
    b2x.Zl9c = function() { this.bcE0x = { last: !1, first: !1, list: this.bV3x };
        this.bHN8F();
        this.DC2x(this.bV3x[0], 1); var bE3x = 1,
            bq3x = this.bV3x.length; if (this.fR5W < bq3x) { for (var pH8z; bE3x < bq3x; bE3x++) { pH8z = bE3x + 1;
                this.DC2x(this.bV3x[bE3x], pH8z > this.fR5W ? null : pH8z) } return } if (this.cn3x > 1) { var cu3x = Math.floor((bq3x - 2) / 2),
                clJ5O = this.fR5W - bq3x + 2,
                iq6k = Math.max(2, this.cn3x - cu3x); if (this.fR5W >= bq3x) { iq6k = Math.min(iq6k, clJ5O) } if (iq6k > 2) { this.bV3x[0].insertAdjacentElement("afterEnd", this.Zr9i[0]);
                this.bcE0x.first = !0 } for (var s2x;; bE3x++) { s2x = iq6k + bE3x - 1; if (s2x > this.cn3x) break;
                this.DC2x(this.bV3x[bE3x], s2x) } } if (this.cn3x < this.fR5W) { var s2x, iq6k = this.cn3x + 1; for (var i = 0, l = bq3x - 2;; i++, bE3x++) { s2x = iq6k + i; if (bE3x > l || s2x > this.fR5W) break;
                this.DC2x(this.bV3x[bE3x], s2x) } if (s2x < this.fR5W) { this.bV3x[bE3x].insertAdjacentElement("beforeBegin", this.Zr9i[1]);
                this.bcE0x.last = !0 } if (s2x <= this.fR5W) { this.DC2x(this.bV3x[bE3x++], this.fR5W) } } for (; bE3x < bq3x; bE3x++) { this.DC2x(this.bV3x[bE3x]) } };
    a1x.clI5N = cO4S.clI5N = function(bB3x, e2x) { var C2x = a1x.kD6x(bB3x); if (!C2x) return null; if (!N3x.VR8J(C2x, N3x.Ke4i)) { e2x = e2x || {}; var i2x = !e2x.clazz ? a1x.cQ4U(C2x) : a1x.I2x(C2x, e2x.clazz);
            e2x.pbtn = i2x.shift();
            e2x.nbtn = i2x.pop();
            e2x.list = i2x;
            delete e2x.clazz } return N3x.VR8J(C2x, N3x.Ke4i, e2x || Y3x) };
    cO4S.isChange = !0 })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        eU5Z = NEJ.R,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        N3x = c2x("nej.ui"),
        b2x, K3x, gh5m; if (!!N3x.Ka4e) return;
    N3x.Ka4e = NEJ.C();
    b2x = N3x.Ka4e.O3x(N3x.boB3x);
    K3x = N3x.Ka4e.cg3x;
    b2x.bk3x = function(e2x) { e2x.number = parseInt(e2x.number) || 9;
        this.bl3x(e2x);
        this.kg6a = H2x.Ke4i.B2x(this.fB5G) };
    b2x.go5t = function(d2x) { if (!!this.YL9C.noend) { var bIw8o = d2x.ext || Y3x,
                i2x = bIw8o.list || eU5Z; if (bIw8o.last) { a1x.X3x(i2x[i2x.length - 1], "display", "none") } } K3x.go5t.apply(this, arguments) } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        bd3x = c2x("nej.ui"),
        N3x = c2x("nej.ut"),
        b2x; if (!!N3x.Zv9m) return;
    N3x.Zv9m = NEJ.C();
    b2x = N3x.Zv9m.O3x(N3x.cy3x);
    b2x.bk3x = function(e2x) { this.il6f = {};
        this.bl3x(e2x);
        this.ij6d = a1x.x2x(e2x.parent);
        this.eM5R = { parent: this.ij6d };
        this.qF8x = parseInt(e2x.limit) || 10;
        this.wQ0x = parseInt(e2x.first) || this.qF8x;
        this.clE5J(e2x.item);
        this.clD5I(e2x.cache || Y3x);
        this.clC5H(e2x.pager || Y3x);
        this.fT5Y() };
    b2x.bC3x = function() { this.z2x("onbeforerecycle");
        this.JU4Y();
        this.bH3x(); if (this.il6f.clear) { this.P3x.sY9P(this.il6f.key) } this.P3x.S3x(); if (!!this.is6m) { this.is6m.S3x();
            delete this.is6m } delete this.bJk8c;
        delete this.fB5G;
        delete this.Zz9q;
        delete this.P3x;
        delete this.ij6d;
        delete this.JS4W;
        delete this.eM5R;
        delete this.il6f };
    b2x.bJw8o = function() { var cM4Q = /\{(.*?)\}/gi,
            clB5G = function(oW8O, j2x) { return (oW8O || "{id}{seed}").replace(cM4Q, function($1, $2) { var A2x = j2x[$2]; return A2x == null ? $1 : A2x }) }; return function(C2x) { var J3x = clB5G(this.eM5R.jstIdTempalte, { id: C2x, seed: a1x.Gl3x() }); if (!this.eM5R.jstIdType) { return a1x.x2x(J3x) } else if (this.eM5R.jstIdType == 1) { return (a1x.I2x(this.ij6d, J3x) || [])[0] } } }();
    b2x.yt1x = function(bE3x, bj3x, fY5d, bq3x) { var m2x = { index: 1, total: 1 }; if (bj3x >= bE3x) { m2x.index = Math.floor((bj3x - bE3x) / fY5d) + 2 } if (bq3x > bE3x) { m2x.total = Math.ceil((bq3x - bE3x) / fY5d) + 1 } return m2x };
    b2x.bJH8z = function(J3x) { delete this.JS4W;
        this.Jm4q = J3x;
        this.bU3x([
            [this.ij6d, "click", this.cly5D.g2x(this)]
        ]) };
    b2x.clE5J = function(r2x) { if (k2x.fe5j(r2x)) { this.bJH8z(r2x); return } NEJ.X(this.eM5R, r2x); var dD4H = this.eM5R.klass;
        delete this.eM5R.klass; if (k2x.fe5j(dD4H)) { this.bJH8z(dD4H); return } delete this.Jm4q;
        this.JS4W = dD4H;
        this.eM5R.ondelete = this.z2x.g2x(this, "ondelete");
        this.eM5R.onupdate = this.z2x.g2x(this, "onupdate") };
    b2x.clD5I = function(R3x) { var dD4H = R3x.klass,
            js6m = NEJ.X({}, R3x);
        this.il6f.key = js6m.lkey;
        this.il6f.data = js6m.data || {};
        this.il6f.clear = !!js6m.clear;
        this.eM5R.pkey = js6m.key || "id";
        js6m.onlistload = this.bfR1x.g2x(this);
        js6m.onpullrefresh = this.clx5C.g2x(this); if (!!dD4H && "onlistchange" in dD4H) { this.bU3x([
                [dD4H, "listchange", this.bfA1x.g2x(this)]
            ]) } else { js6m.onitemadd = this.ZF9w.g2x(this);
            js6m.onitemdelete = this.ZG9x.g2x(this);
            js6m.onitemupdate = this.bKg8Y.g2x(this) } this.P3x = (dD4H || N3x.Qf6Z).B2x(js6m); if (R3x.total != null) { this.P3x.PY6S(this.il6f.key, R3x.total) } if (!!R3x.list) { this.P3x.re8W(this.il6f.key, R3x.list) } };
    b2x.clC5H = function(rN9E) { this.bJk8c = rN9E.klass || bd3x.Ka4e;
        this.fB5G = NEJ.X({}, rN9E); if (k2x.en4r(rN9E.parent)) { this.fB5G.parent = rN9E.parent[0];
            this.JN4R = rN9E.parent.slice(1); if (!this.JN4R || !this.JN4R.length) { delete this.JN4R } } delete this.fB5G.klass };
    b2x.JU4Y = function() { var fU5Z = /^(?:table|tr|tbody|ul|ol|select)$/i; return function() { this.z2x("onbeforelistclear", { parent: this.ij6d }); if (!!this.fg5l && this.fg5l.length > 0) { this.fg5l = this.JS4W.S3x(this.fg5l);
                delete this.fg5l } if (fU5Z.test(this.ij6d.tagName)) { a1x.bAA6u(this.ij6d) } else { this.ij6d.innerHTML = "" } } }();
    b2x.blx2x = function(ZH9y) { if (!!this.fB5G.fixed) return;
        a1x.X3x(this.fB5G.parent, "display", ZH9y);
        k2x.be3x(this.JN4R, function(bB3x) { a1x.X3x(bB3x, "display", ZH9y) }, this) };
    b2x.bjY2x = function() { var s2x = this.fB5G.index || 1;
        delete this.fB5G.index; if (!!this.is6m) { s2x = this.is6m.rL9C() } this.ym0x({ last: s2x, index: s2x }) };
    b2x.ym0x = function(d2x) { this.z2x("onpagechange", d2x) };
    b2x.bKH8z = function(bj3x) { this.il6f.offset = bj3x;
        this.TA7t() };
    b2x.bKT8L = function(e2x) { return e2x };
    b2x.TA7t = function() { this.JE4I(); var j2x = this.il6f.data;
        j2x.offset = this.il6f.offset; var oM8E = j2x.offset == 0;
        j2x.total = oM8E;
        this.il6f.limit = oM8E ? this.wQ0x : this.qF8x;
        j2x.limit = this.il6f.limit;
        this.P3x.nC7v(this.bKT8L(NEJ.X({}, this.il6f))) };
    b2x.bfR1x = function(e2x) { if (e2x.key != this.il6f.key || e2x.offset != this.il6f.offset) return;
        this.ZU9L(); var i2x = this.P3x.gO5T(e2x.key); if (!i2x || !i2x.length) { this.bgp1x(); return } var fY5d = e2x.limit,
            bj3x = e2x.offset; if (this.bpX3x(i2x, bj3x, fY5d)) return;
        this.z2x("onbeforelistrender", { list: i2x, offset: bj3x, parent: this.ij6d }); if (!!this.Jm4q) { this.eM5R.xlist = i2x;
            this.eM5R.beg = bj3x;
            this.eM5R.end = Math.min(i2x.length, bj3x + fY5d) - 1;
            this.eM5R.act = "list"; var dr4v = a1x.bP3x(this.Jm4q, this.eM5R);
            this.JB4F(dr4v) } else { this.eM5R.limit = fY5d;
            this.eM5R.offset = bj3x; var gB5G = a1x.yD1x(i2x, this.JS4W, this.eM5R);
            this.JA4E(gB5G) } this.z2x("onafterlistrender", { list: i2x, offset: bj3x, parent: this.ij6d }) };
    b2x.clx5C = function(e2x) { if (!this.Zz9q) return;
        delete this.Zz9q;
        this.ZU9L("onafterpullrefresh");
        this.fT5Y() };
    b2x.bLs9j = function(s2x, cq3x) { if (!!this.is6m) { var yf0x = this.is6m.rL9C(),
                clw5B = this.is6m.jF6z(); if (yf0x > cq3x || cq3x != clw5B) { this.is6m.S3x();
                delete this.is6m;
                this.ym0x({ last: yf0x, index: Math.min(s2x, cq3x) }); return !0 } } else { this.fB5G.index = s2x;
            this.fB5G.total = cq3x;
            this.is6m = this.bJk8c.B2x(this.fB5G);
            this.is6m.uY0x("onchange", this.ym0x.g2x(this));
            k2x.be3x(this.JN4R, function(bB3x) { this.is6m.g2x(bB3x) }, this) } };
    b2x.ZW9N = function() { var fW5b = +(new Date); return function(j2x) { var C2x = j2x[this.eM5R.pkey]; if (!C2x) { j2x["dirty-data"] = !0;
                j2x[this.eM5R.pkey] = "dirty-" + fW5b++ } return j2x } }();
    b2x.ZY9P = function(j2x) { var C2x = j2x[this.eM5R.pkey]; if (!!j2x["dirty-data"]) { delete j2x["dirty-data"];
            delete j2x[this.eM5R.pkey] } return C2x };
    b2x.ZZ9Q = function() { var clv5A = function(jE6y, lp7i) { this.ij6d.insertAdjacentElement(jE6y, lp7i) }; return function(jE6y, j2x) { var Gu3x = [j2x]; if (!!this.Jm4q) { this.eM5R.xlist = Gu3x;
                this.eM5R.beg = 0;
                this.eM5R.end = 0;
                this.eM5R.act = "add";
                this.JB4F(a1x.bP3x(this.Jm4q, this.eM5R), jE6y) } else { this.eM5R.limit = 1;
                this.eM5R.offset = 0;
                this.eM5R.parent = clv5A.g2x(this, jE6y); var gB5G = a1x.yD1x(Gu3x, this.JS4W, this.eM5R);
                this.eM5R.parent = this.ij6d;
                this.JA4E(gB5G) } } }();
    b2x.JE4I = bm3x;
    b2x.ZU9L = function(T3x) { var d2x = { parent: this.ij6d };
        this.z2x(T3x || "onafterlistload", d2x); if (!d2x.stopped) { a1x.mq7j(this.ci3x) } };
    b2x.bpX3x = bm3x;
    b2x.bac9T = function(bF3x, jE6y) { if (k2x.fe5j(bF3x)) { if (!this.ci3x) this.ci3x = a1x.cT4X("div");
            this.ci3x.innerHTML = bF3x } else { this.ci3x = bF3x } this.ij6d.insertAdjacentElement(jE6y || "beforeEnd", this.ci3x) };
    b2x.vD0x = function(T3x, kr6l, jE6y) { var d2x = { parent: this.ij6d };
        this.z2x(T3x, d2x); if (!d2x.stopped) { this.bac9T(d2x.value || kr6l, jE6y) } };
    b2x.bgp1x = bm3x;
    b2x.JB4F = bm3x;
    b2x.JA4E = bm3x;
    b2x.cly5D = function() { var fU5Z = /^(?:delete|update)$/; return function(d2x) { var f2x = h2x.U3x(d2x, "d:action"); if (!f2x) return; var W3x = a1x.u2x(f2x, "action"); if (!fU5Z.test(W3x)) return; var C2x = a1x.u2x(f2x, "id"); if (!C2x) return; var r2x = this.P3x.ej4n(C2x); if (!r2x) return;
            h2x.bh3x(d2x);
            this.z2x("on" + W3x, { data: r2x, id: r2x[this.eM5R.pkey], body: a1x.x2x(this.bJw8o(C2x)) }) } }();
    b2x.ZF9w = bm3x;
    b2x.TM7F = function(d2x) { var j2x = d2x.data || {},
            e2x = { data: j2x, key: this.il6f.key, id: j2x[this.eM5R.pkey] };
        this.z2x("onbeforedelete", e2x);
        this.P3x.Hv3x(e2x) };
    b2x.ZG9x = bm3x;
    b2x.TP7I = function(d2x) { var j2x = d2x.data || {},
            e2x = { data: j2x, key: this.il6f.key };
        this.z2x("onbeforeupdate", e2x);
        this.P3x.Tn7g(e2x) };
    b2x.bKg8Y = function(d2x) { this.Js4w(d2x, "onafterupdate"); if (d2x.stopped) return; var C2x = d2x.data[this.eM5R.pkey]; if (!!this.fg5l) { var r2x = a1x.bDn7g(C2x); if (!!r2x) r2x.fT5Y(d2x.data) } else { var f2x = a1x.x2x(C2x + "" + a1x.Gl3x()); if (!f2x) return; var i2x = this.P3x.gO5T(d2x.key),
                s2x = k2x.cV4Z(i2x, d2x.data); if (s2x < 0) return;
            this.eM5R.list = i2x;
            this.eM5R.beg = s2x;
            this.eM5R.end = s2x;
            this.eM5R.act = "update"; var dr4v = a1x.bP3x(this.Jm4q, this.eM5R);
            f2x.insertAdjacentHTML("afterEnd", dr4v);
            a1x.cH4L(f2x) } };
    b2x.Js4w = function(d2x, T3x) { var r2x = d2x.data; if (!r2x || r2x[this.eM5R.pkey] == null) { this.z2x("onerror", d2x);
            d2x.stopped = !0 } if (!d2x.stopped) { this.z2x(T3x, d2x) } };
    b2x.bpE3x = bm3x;
    b2x.boL3x = bm3x;
    b2x.bfA1x = function(d2x) { if (d2x.key != this.il6f.key) return; switch (d2x.action) {
            case "add":
                this.ZF9w(d2x); break;
            case "delete":
                this.ZG9x(d2x); break;
            case "update":
                this.bKg8Y(d2x); break;
            case "refresh":
                this.fT5Y(); break;
            case "unshift":
                this.boL3x(d2x.offset, d2x.limit); break;
            case "append":
                this.bpE3x(d2x.offset, d2x.limit); break } };
    b2x.oz8r = function(r2x) { this.TP7I({ data: r2x }) };
    b2x.lo7h = function(r2x) { this.TM7F({ data: r2x }) };
    b2x.si9Z = function(r2x) { this.P3x.iF6z({ data: r2x, key: this.il6f.key }) };
    b2x.sb9S = function() { return this.P3x };
    b2x.biM2x = function(j2x) { this.ZZ9Q("afterBegin", this.ZW9N(j2x)); return this.ZY9P(j2x) };
    b2x.bLW9N = function(j2x) { this.ZZ9Q("beforeEnd", this.ZW9N(j2x)); return this.ZY9P(j2x) };
    b2x.fT5Y = function() { this.JU4Y();
        this.bjY2x() };
    b2x.cuv7o = function() { this.P3x.sY9P(this.il6f.key);
        this.fT5Y() };
    b2x.bjP2x = function() { if (!!this.Zz9q) return;
        this.Zz9q = !0;
        this.vD0x("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.P3x.bjP2x({ key: this.il6f.key, data: this.il6f.data }) };
    b2x.jF6z = function() { return this.P3x.jF6z(this.il6f.key) };
    b2x.bLY9P = function() { return this.is6m };
    b2x.SP7I = function() { return this.P3x.SP7I(this.il6f.key) };
    b2x.clt5y = function() { return this.fg5l } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        eU5Z = NEJ.R,
        k2x = c2x("nej.u"),
        a1x = c2x("nej.e"),
        N3x = c2x("nej.ut"),
        b2x, K3x; if (!!N3x.iy6s) return;
    N3x.iy6s = NEJ.C();
    b2x = N3x.iy6s.O3x(N3x.Zv9m);
    K3x = N3x.iy6s.cg3x;
    b2x.yt1x = function(bj3x, bq3x) { return K3x.yt1x.call(this, this.wQ0x, bj3x, this.qF8x, bq3x) };
    b2x.brn4r = function(s2x) { var bj3x = 0; if (s2x > 1) bj3x = this.wQ0x + (s2x - 2) * this.qF8x; return bj3x };
    b2x.ym0x = function(d2x) { K3x.ym0x.apply(this, arguments); if (!d2x.stopped) { this.bKH8z(this.brn4r(d2x.index)) } };
    b2x.JE4I = function() { this.JU4Y();
        this.vD0x("onbeforelistload", "列表加载中...") };
    b2x.ZU9L = function() { K3x.ZU9L.apply(this, arguments);
        this.JU4Y() };
    b2x.bpX3x = function(i2x, bj3x, fY5d) { var bt3x = this.yt1x(bj3x, i2x.length); if (this.bLs9j(bt3x.index, bt3x.total)) return !0;
        this.blx2x(bt3x.total > 1 ? "" : "none") };
    b2x.bgp1x = function() { this.vD0x("onemptylist", "没有列表数据！") };
    b2x.bac9T = function(bF3x, jE6y) { if (!jE6y && k2x.fe5j(bF3x)) { this.ij6d.innerHTML = bF3x; return } K3x.bac9T.apply(this, arguments) };
    b2x.JB4F = function(dr4v) { this.ij6d.innerHTML = dr4v };
    b2x.JA4E = function(gB5G) { this.fg5l = gB5G };
    b2x.ZF9w = function(d2x) { this.Js4w(d2x, "onafteradd"); if (!d2x.stopped) this.fT5Y() };
    b2x.ZG9x = function(d2x) { this.Js4w(d2x, "onafterdelete"); if (!d2x.stopped) this.fT5Y() };
    b2x.bpE3x = function(bj3x, fY5d) { var s2x = 1; if (!!this.is6m) { s2x = this.is6m.rL9C() } var jb6V = this.brn4r(s2x),
            gC5H = jb6V + (s2x > 1 ? this.qF8x : this.wQ0x); if (bj3x >= gC5H && !!this.is6m) { var bt3x = this.yt1x(0, this.jF6z());
            this.is6m.bjc2x(bt3x.total);
            this.blx2x(bt3x.total > 1 ? "" : "none") } else { this.fT5Y() } };
    b2x.boL3x = function(bj3x, fY5d) { var s2x = 1; if (!!this.is6m) { s2x = this.is6m.rL9C() } var jb6V = this.brn4r(s2x),
            bt3x = this.yt1x(jb6V, this.jF6z());
        this.ym0x({ last: s2x, index: bt3x.index }) } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"),
        D2x = c2x("nm.w"),
        fc5h = 40,
        b2x, K3x;
    D2x.Zs9j = NEJ.C();
    b2x = D2x.Zs9j.O3x(H2x.cy3x);
    K3x = D2x.Zs9j.cg3x;
    b2x.cl3x = function() { this.cs3x() };
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.Ki4m = e2x.inputer;
        this.bhC1x = e2x.tipper;
        this.bU3x([
            [this.Ki4m, "input", this.fo5t.g2x(this)]
        ]) };
    b2x.bC3x = function() { this.bH3x();
        this.Jf3x(null, null) };
    b2x.fo5t = function(d2x) { if (d2x && d2x.type == "keyup" && (d2x.keyCode != 8 || d2x.keyCode != 68)) return; var T3x = this.Ki4m.value,
            cux7q; if (l2x.Iq3x(T3x) > fc5h) { this.Ki4m.value = l2x.Aw1x(T3x, fc5h);
            this.Jf3x("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g2x(this)) } else if (T3x.indexOf("#") >= 0 || T3x.indexOf("@") >= 0) { this.Jf3x("歌单名不能包含字符“@”和“#”！") } else { this.Jf3x(null, null);
            this.z2x("onchange", { value: T3x }) } };
    b2x.clq5v = function() { this.fo5t() };
    b2x.Jf3x = function() { var C2x = 0; return function(dp4t, bME9v) { if (!!C2x) window.clearTimeout(C2x); if (!dp4t) { a1x.y2x(this.bhC1x, "f-vhide");
                this.bMF9w = !1; return } this.bhC1x.innerHTML = '<i class="u-icn u-icn-25"></i>' + dp4t;
            a1x.w2x(this.bhC1x, "f-vhide");
            this.bMF9w = !0; if (k2x.gb5g(bME9v)) C2x = window.setTimeout(function() { this.Jf3x(null, null);
                bME9v() }.g2x(this), 1e3) } }();
    b2x.bMM9D = function() { if (this.bMF9w) return !1; if (l2x.je6Y(this.Ki4m.value)) { this.Jf3x("歌单名不能为空"); return !1 } return !0 };
    b2x.fp5u = function() { return this.Ki4m.value } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        n2x = c2x("nm.l"),
        D2x = c2x("nm.w"),
        bI3x = c2x("nej.ui"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K3x;
    n2x.Yz9q = NEJ.C();
    b2x = n2x.Yz9q.O3x(n2x.dW4a);
    K3x = n2x.Yz9q.cg3x;
    b2x.cl3x = function() { this.cs3x() };
    b2x.bR3x = function() { this.cc3x(); var i2x = a1x.I2x(this.o2x, "j-flag");
        this.Yy9p = { inputer: i2x[0], tipper: i2x[1] };
        this.gR5W = { onerror: this.bMW9N.g2x(this), onitemadd: this.bMW9N.g2x(this) };
        this.oU8M = i2x[2];
        h2x.q2x(i2x[2], "click", this.Bf1x.g2x(this));
        h2x.q2x(i2x[3], "click", this.zs1x.g2x(this));
        h2x.q2x(this.o2x, "keypress", this.bNc9T.g2x(this)) };
    b2x.bZ3x = function() { this.ca3x = "m-wgt-create" };
    b2x.bk3x = function(e2x) { e2x.clazz = " m-layer-w2";
        e2x.parent = e2x.parent || document.body;
        e2x.title = "新建歌单";
        e2x.draggable = !0;
        e2x.destroyalbe = !0;
        e2x.mask = true;
        this.bl3x(e2x);
        this.Yy9p.inputer.value = e2x.name || "";
        this.tT9K = D2x.Zs9j.B2x(this.Yy9p);
        this.tT9K.clq5v();
        this.P3x = p2x.hl5q.B2x(this.gR5W);
        setTimeout(function() { this.Yy9p.inputer.focus() }.g2x(this), 0) };
    b2x.bC3x = function() { this.bH3x(); if (this.tT9K) { this.tT9K.S3x();
            delete this.tT9K } this.rJ9A(!1);
        this.Yy9p.inputer.value = "" };
    b2x.rJ9A = function(KK4O) { this.no7h = KK4O; if (KK4O) { this.oU8M.innerHTML = "<i>新建中...</i>";
            a1x.y2x(this.oU8M, "u-btn2-dis") } else { this.oU8M.innerHTML = "<i>新 建</i>";
            a1x.w2x(this.oU8M, "u-btn2-dis") } };
    b2x.Bf1x = function() { if (this.no7h || !this.tT9K.bMM9D()) return; var cm3x = { key: "playlist_new-" + GUser.userId, data: { name: this.tT9K.fp5u() }, offset: 1 };
        this.P3x.iF6z(cm3x);
        this.rJ9A(!0) };
    b2x.bMW9N = function(d2x) { var cb3x = (d2x.result || Y3x).code; if (!cb3x) { this.z2x("onsuccess", d2x.data) } else { this.z2x("onerror", d2x) } this.bo3x() };
    b2x.zs1x = function() { this.bo3x() };
    b2x.bNc9T = function(d2x) { if (d2x.keyCode == 13) this.Bf1x() } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        b2x, K3x;
    n2x.bcf0x = NEJ.C();
    b2x = n2x.bcf0x.O3x(n2x.dW4a);
    K3x = n2x.bcf0x.cg3x;
    b2x.cl3x = function() { this.cs3x() };
    b2x.bR3x = function() { this.cc3x(); var i2x = a1x.I2x(this.o2x, "j-flag");
        this.hK5P = { limit: 301, parent: i2x[1], cache: { klass: p2x.hl5q, lkey: "playlist_new-" + GUser.userId, onlisterror: this.bhT2x.g2x(this) }, item: { klass: "m-wgt-subscribe-item", cutStr: l2x.Ay1x, escape: k2x.dL4P } };
        this.gR5W = { onsuccess: this.XR9I.g2x(this), onerror: this.ep4t.g2x(this) };
        h2x.q2x(i2x[0], "click", this.Bf1x.g2x(this));
        h2x.q2x(i2x[1], "click", this.ly7r.g2x(this)) };
    b2x.bZ3x = function() { this.ca3x = "m-wgt-subscribe" };
    b2x.bk3x = function(e2x) { e2x.parent = e2x.parent || document.body;
        e2x.clazz = " m-layer-w2";
        e2x.title = "添加到歌单";
        e2x.draggable = !0;
        e2x.mask = !0;
        this.bl3x(e2x);
        this.XL8D = (e2x.tracks || []).reverse();
        this.hK5P.item.size = this.XL8D.length;
        this.gR5W.name = e2x.name || "";
        this.bNE9v = p2x.uV0x.B2x({ onaddsuccess: this.zm1x.g2x(this) });
        this.rp8h = p2x.hl5q.B2x({ onlistload: this.clp5u.g2x(this) });
        this.rp8h.brr4v();
        k2x.be3x(this.XL8D, function(r2x, s2x, i2x) { if (!k2x.ke6Y(r2x)) { i2x[s2x] = this.bNE9v.ej4n(r2x) || r2x } }, this) };
    b2x.clp5u = function() { if (this.du4y) this.du4y.S3x();
        this.du4y = H2x.iy6s.B2x(this.hK5P) };
    b2x.Bf1x = function() { this.bo3x(); if (this.Bt1x) this.Bt1x.S3x();
        this.Bt1x = n2x.Yz9q.B2x(this.gR5W);
        this.Bt1x.M3x() };
    b2x.ly7r = function() { var clo5t = function(f2x) { while (f2x && f2x != document) { if (f2x.tagName.toLowerCase() == "li") { return f2x } f2x = f2x.parentNode } }; return function(d2x) { h2x.ce3x(d2x); var E2x = h2x.U3x(d2x),
                bbU0x = clo5t(E2x); if (!!bbU0x && !a1x.bz3x(bbU0x, "dis")) { this.XR9I({ id: a1x.u2x(bbU0x, "id") }) } } }();
    b2x.XR9I = function(d2x) { var C2x = d2x.id; if (!C2x || !this.XL8D.length) return;
        this.bNE9v.iF6z({ key: "track_playlist-" + C2x, data: { tracks: this.XL8D, pid: C2x } });
        this.bo3x() };
    b2x.zm1x = function() { this.z2x("onsuccess");
        n2x.Z3x.M3x({ tip: "收藏成功" }) };
    b2x.ep4t = function(d2x) { this.bo3x();
        this.z2x("onerror", d2x); var cA3x = "收藏失败"; switch (d2x.code) {
            case 405:
                cA3x = "操作过于频繁，先休息一下再试吧"; break;
            case 507:
                cA3x = "歌单数量超过限制"; break;
            case 502:
                cA3x = "歌曲已经存在" } n2x.Z3x.M3x({ tip: cA3x, type: 2 }) };
    b2x.bhT2x = function() { this.bo3x();
        n2x.Z3x.M3x({ tip: "列表下载失败，请稍后再试", type: 2 }) };
    l2x.lM7F = function(e2x) { if (!GUser || !GUser.userId || GUser.userId <= 0) { top.login(); return } n2x.bcf0x.M3x(e2x) } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        cP4T = c2x("nej.p"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"); var bcr0x, nk7d, V3x = decodeURIComponent(location.href),
        jd6X = /.+(http:\/\/.+\/proxy.html)/.test(V3x) ? RegExp.$1 : ""; if (!!jd6X) { v2x.vs0x("mail_proxy_url", jd6X) } else { jd6X = v2x.th9Y("mail_proxy_url") || "about:blank" } bcr0x = a1x.Yi9Z({ src: jd6X, onload: function() { nk7d = true } }); var brE4I = function() { v2x.gF5K("USER_TRIGGER", { value: true, expire: 1 / (24 * 60), path: "/" }) }; var cln5s = function() { if (cP4T.cR4V.browser == "ie" && parseInt(cP4T.cR4V.version) < 9) { l2x.fd5i({ clazz: "m-layer-w2", message: "当前浏览器版本过低，暂时无法使用，请升级后再试。" }); return false } return true };
    l2x.WM8E = function(t2x, C2x, W3x) { if (!cln5s()) return;
        brE4I(); if (W3x == "stop") { if (!nk7d) throw "proxy not loaded";
            brE4I();
            bcr0x.contentWindow.location.replace(jd6X + "#" + k2x.df4j({ to: "ifrmMusic", message: JSON.stringify({ s: +(new Date), action: "stop" }) })) } else { bcr0x.contentWindow.location.replace(jd6X + "#" + k2x.df4j({ to: "ifrmMusic", message: JSON.stringify({ type: t2x, id: C2x, s: +(new Date), action: W3x }) })) } } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        p2x = c2x("nm.d"); var kz6t = p2x.hL5Q.B2x(); var nt7m = p2x.uV0x.B2x({ onlistload: clm5r, onitemload: clk5p, onerror: ep4t }); var BB1x = p2x.pp8h.B2x({ onlistload: clj5o, onitemload: cli5n, onerror: ep4t }); var brS4W = {};

    function vh0x(d2x) { var f2x = h2x.U3x(d2x, "d:resAction"),
            W3x = a1x.u2x(f2x, "resAction"); if (f2x && (W3x == "play" || W3x == "addto")) { var t2x = parseInt(a1x.u2x(f2x, "resType"));
            brW4a({ action: W3x, type: t2x, id: a1x.u2x(f2x, "resId"), from: a1x.u2x(f2x, "resFrom"), data: a1x.u2x(f2x, "resData"), order: a1x.u2x(f2x, "resOrder"), node: f2x }); if (t2x != 13) brZ4d(f2x) } }

    function brW4a(bM3x) { var W3x = bM3x.action,
            t2x = bM3x.type,
            C2x = bM3x.id,
            dJ4N = bM3x.from,
            j2x = bM3x.data,
            rY9P = bM3x.order,
            e2x = { limit: 1e3, offset: 0, data: { id: C2x }, ext: { id: C2x, action: W3x, type: t2x, from: dJ4N, data: j2x, node: bM3x.node } }; if (W3x != "play" && W3x != "addto" || !t2x) return; if (window.GRef && GRef == "mail") { l2x.WM8E(t2x, C2x, W3x); return } switch (t2x) {
            case 13:
                e2x.key = "track_playlist-" + C2x;
                nt7m.nC7v(e2x); break;
            case 17:
                e2x.key = "program";
                e2x.id = C2x;
                BB1x.Te7X(e2x); if (W3x == "play") { v2x.bp3x("/api/dj/program/listen", { query: { id: C2x } }) } break;
            case 18:
                e2x.key = "track";
                e2x.id = C2x;
                nt7m.Te7X(e2x); break;
            case 19:
                e2x.key = "track_album-" + C2x;
                nt7m.nC7v(e2x); break;
            case 24:
                e2x.key = "track_day";
                nt7m.nC7v(e2x); break;
            case 2:
                e2x.key = "track_artist_top-" + C2x;
                nt7m.nC7v(e2x); break;
            case 70:
                e2x.key = "program_djradio-" + C2x + "-" + rY9P;
                e2x.data.radioId = C2x;
                e2x.data.asc = rY9P == 2;
                BB1x.nC7v(e2x); break } }

    function bsj4n(i2x) { var m2x = [];
        k2x.be3x(i2x, function(r2x) { if (r2x.mainSong) { r2x.mainSong.program = r2x;
                m2x.push(r2x.mainSong);
                r2x.localupdatetime = +(new Date);
                nt7m.cru7n(r2x.mainSong);
                r2x.mainTrackId = r2x.mainSong.id;
                delete r2x.mainSong } else { var bsl4p = nt7m.ej4n(r2x.mainTrackId);
                bsl4p && m2x.push(bsl4p) } }); return m2x }

    function Wx8p(i2x, e2x) { var qN8F = e2x.action == "play" && e2x.type != 17 && e2x.type != 18,
            eS5X = e2x.action == "play"; if (!i2x.length) return; if (e2x.type == 19) { i2x = l2x.HH3x(i2x, true, { play: true }, { source: "album", sourceid: e2x.id }) } else { i2x = l2x.HH3x(i2x, true, { play: true }) } k2x.be3x(i2x, function(r2x) { r2x.source = l2x.bdf0x({ fid: e2x.from, fdata: e2x.data, type: e2x.type, rid: e2x.id }, r2x.id) });
        top.player.addTo(i2x, qN8F, eS5X);
        kz6t.Ph6b({ rid: e2x.id, type: e2x.type, hash: l2x.HV3x(), play: eS5X, source: e2x.from, sourceid: e2x.data }) }

    function clm5r(d2x) { var eA4E = d2x.ext || {};
        i2x = nt7m.gO5T(d2x.key);
        Wx8p(i2x, eA4E); if (eA4E.type == 13 && eA4E.action == "play" && i2x && i2x.length > 0) { brZ4d(eA4E.node);
            v2x.bp3x("/api/playlist/update/playcount", { query: { id: eA4E.id } }) } }

    function clk5p(d2x) { var i2x = [nt7m.ej4n(d2x.id)],
            bf3x = i2x[0],
            pt8l = l2x.oB8t(bf3x),
            rx9o = bf3x.privilege || {}; if (pt8l == 10) { l2x.sP9G(rx9o.fee || bf3x.fee, bf3x.id, "song", null, rx9o) } else if (pt8l == 100) { l2x.hS5X(null, null, null, true, bf3x) } else if (pt8l == 11) { l2x.bHp8h(bf3x.id, 18) } else { Wx8p(i2x, d2x.ext) } }

    function clj5o(d2x) { var i2x = bsj4n(BB1x.gO5T(d2x.key));
        Wx8p(i2x, d2x.ext) }

    function cli5n(d2x) { var i2x = bsj4n([BB1x.ej4n(d2x.id)]);
        Wx8p(i2x, d2x.ext) }

    function ep4t() { top.player.tipPlay("无法播放，音乐已下线") }

    function brZ4d(f2x) { var t2x = a1x.u2x(f2x, "resType"),
            C2x = a1x.u2x(f2x, "resId"),
            J3x = t2x + "-" + C2x; if (brS4W[J3x]) return; var bsy4C = a1x.x2x("play-count"),
            bhK2x = a1x.I2x(f2x.parentNode, "nb"),
            Mv4z = null; if (bsy4C) { Mv4z = bsy4C } else { Mv4z = !!bhK2x && !!bhK2x[0] ? bhK2x[0] : null } if (Mv4z) { var cu3x = Mv4z.innerHTML; if (/^\d+$/.test(cu3x)) { Mv4z.innerText = +cu3x + 1 } brS4W[J3x] = true } } l2x.clh5m = function(f2x) { h2x.q2x(f2x || document.body, "click", vh0x.g2x(this)) };
    l2x.clg5l = function(W3x, t2x, C2x) { brW4a({ action: W3x, type: t2x, id: C2x }) } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        p2x = c2x("nm.d"),
        b2x, K3x;
    p2x.eQ5V({ "share-all": { url: "/api/share/friends/resource", format: function(m2x, e2x) { this.cle5j(m2x, e2x) }, onerror: "onshareerror" }, "share-sns": { url: "/api/share/resource/sns", format: function(m2x, e2x) { this.z2x("onshareall", e2x.result) }, onerror: function(m2x, e2x) { this.z2x("onshareall", e2x.result) } }, "share-private": { url: "/api/msg/private/send", onload: "onshareprivate", onerror: "onshareerror" }, share_img_compound: { url: "/upload/event/img/compound", type: "POST", format: function(m2x, e2x) { e2x.options.picUrl = m2x.picUrl;
                this.bsS4W(e2x.options, e2x.result) }, onerror: function(m2x, e2x) { this.z2x("onshareall", e2x.result) } }, "vid-get": { url: "/api/video/coversvid/get", format: function(Q3x, e2x) { this.ok8c("vid_info-" + e2x.data.nosKey, Q3x); return Q3x } } });
    p2x.bqC4G = NEJ.C();
    b2x = p2x.bqC4G.O3x(p2x.gW5b);
    b2x.cld5i = function() { var tI9z = function(Q3x, e2x) { e2x.times++; if (e2x.times > 10) { this.z2x("onvinfoerror", e2x.key, Q3x) } else { setTimeout(eH5M.g2x(this, e2x), e2x.times * 1e3) } }; var xe0x = function(Q3x, e2x) { this.z2x("onvinfo", e2x.key, Q3x) }; var eH5M = function(e2x) { var V3x = e2x.url;
            v2x.bp3x(V3x + "?vinfo", { method: "GET", type: "json", mode: 1, onload: xe0x.dV4Z(this, e2x), onerror: tI9z.dV4Z(this, e2x) }) }; return function(e2x) { e2x.times = 0;
            eH5M.call(this, e2x) } }();
    b2x.cuz7s = function() { var NB5G; var tI9z = function(Q3x, e2x) { if (Q3x.code > 0) { clearInterval(this.BR1x);
                this.z2x("onviderror", e2x.data.nosKey) } }; var xe0x = function(J3x, Q3x) { if (Q3x.vid && Q3x.covers) { clearInterval(this.BR1x);
                this.z2x("onvid", J3x, Q3x) } }; var eH5M = function(e2x) { if (+(new Date) - NB5G > 60 * 60 * 1e3) { clearInterval(this.BR1x);
                this.z2x("onviderror", e2x.data.nosKey); return } e2x.onload = xe0x.g2x(this, e2x.data.nosKey);
            e2x.onerror = tI9z.g2x(this);
            this.ck3x("vid-get", e2x) }; return function(e2x) { if (!e2x || !e2x.data) return;
            NB5G = +(new Date);
            this.BR1x = clearInterval(this.BR1x);
            this.BR1x = setInterval(eH5M.g2x(this, e2x), 1e4);
            eH5M.apply(this, arguments) } }();
    b2x.cla5f = function() { this.BR1x = clearInterval(this.BR1x) };
    b2x.cle5j = function(m2x, mY7R) { if (m2x.event && mY7R.snsTypes) { if (mY7R.pics) { var btA4E = []; for (var i = 0, len = mY7R.pics.length; i < len; i++) { btA4E[i] = mY7R.pics[i].originId } this.ck3x("share_img_compound", { data: { picIds: btA4E.join(",") }, options: mY7R, result: m2x }) } else { mY7R.picUrl = mY7R.picUrl;
                this.bsS4W(mY7R, m2x) } } else { this.z2x("onshareall", m2x) } var vR0x = p2x.hL5Q.B2x();
        vR0x.gf5k(mY7R.isPub ? "pubevent" : "shareevent", { id: m2x.id }) };
    b2x.bsS4W = function(mY7R, m2x) { var cm3x = {};
        cm3x.eventid = m2x.event.id;
        cm3x.eventtype = m2x.event.type;
        mY7R.picUrl && (cm3x.picUrl = mY7R.picUrl);
        cm3x.snsTypes = mY7R.snsTypes;
        cm3x.msg = mY7R.data.msg || "";
        cm3x.type = mY7R.data.type;
        mY7R.data.id && (cm3x.id = mY7R.data.id);
        this.ck3x("share-sns", { data: cm3x, result: m2x }) };
    b2x.ckZ5e = function(e2x) { var j2x = { type: "", id: 0, threadId: "", msg: "", actId: 0, pics: "", uuid: "publish-" + +(new Date) + k2x.mT7M(5) };
        j2x = NEJ.EX(j2x, e2x); if (!(j2x.id > 0)) { delete j2x.id;
            j2x.type = "noresource" } if (!j2x.threadId) { delete j2x.threadId } if (!j2x.actId) { delete j2x.actId } if (!j2x.pics) { delete j2x.pics } else { j2x.pics = JSON.stringify(j2x.pics) } this.ck3x("share-all", { data: j2x, snsTypes: e2x.snsTypes, picUrl: e2x.picUrl, pics: e2x.pics, isPub: e2x.isPub }) };
    b2x.ckY5d = function(e2x) { this.ck3x("share-private", e2x) };
    b2x.ckX5c = function(e2x) { this.ck3x("share-all", e2x) } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K3x; var ckW5b = { 40: !0 };
    p2x.eQ5V({ "event-list": { url: "/api/v1/event/get", filter: function(e2x) { e2x.data.getcounts = true;
                e2x.data.pagesize = e2x.data.limit; if (e2x.data.offset == 0) { e2x.data.lasttime = -1 } delete e2x.data.offset }, format: function(Q3x, e2x) { Q3x.event = l2x.Ts7l(Q3x.event, function(r2x, s2x) { return !ckW5b[r2x.type] });
                this.ckV5a(Q3x.event);
                e2x.data.lasttime = Q3x.lasttime; if (Q3x.event.length) { Q3x.event.length = e2x.limit } return { list: Q3x.event, total: Q3x.size } } }, "event_latest-list": { url: "/api/act/event/getnews", format: function(Q3x, e2x) { return { list: Q3x.events, total: Q3x.count } } }, "event-pull": { url: "/api/event/getnews", filter: function(e2x) { e2x.data.pagesize = 20 }, format: function(Q3x, e2x) { return Q3x.event } }, "ievent-get": { type: "GET", url: "/api/event/get", onload: "oneventload", onerror: "oneventloaderror" }, "ievent-new-get": { type: "GET", url: "/api/event/getnews", onload: "oneventnewload" }, "ievent_user-list": { type: "GET", url: "/api/event/get/{userId}", filter: function(e2x) { e2x.data.time = -1;
                e2x.data.getcounts = true }, format: function(Q3x, e2x) { Q3x.events.length = e2x.limit; return { list: Q3x.events, total: Q3x.size } } }, "ievent-res-get": { url: "/api/res/status", format: function(m2x, e2x) { m2x.conf = e2x.conf; return m2x } }, "ievent-like": { url: "/api/resource/like", onload: "oneventlike", filter: function(e2x, bc3x) { if (e2x.like) { if (e2x.comment) { bc3x.url = "/api/v1/comment/like" } else { bc3x.url = "/api/resource/like" } bc3x.onload = "oneventlike";
                    bc3x.onerror = "oneventlikeerr" } else { if (e2x.comment) { bc3x.url = "/api/v1/comment/unlike" } else { bc3x.url = "/api/resource/unlike" } bc3x.onload = "oneventunlike";
                    bc3x.onerror = "oneventunlikeerr" } }, format: function(m2x, e2x) { m2x.eid = e2x.eid;
                m2x.origin = e2x.origin;
                m2x.ext = e2x.ext; return m2x } }, "ievent_user-del": { url: "/api/event/delete", format: function(m2x, e2x) { m2x.id = e2x.data.id; return m2x } }, "event-del": { url: "/api/event/delete", filter: function(e2x, bc3x) { if (e2x.data.type == "nointer") { bc3x.url = "/api/event/rcmd/reject" } else if (e2x.data.transcoding) { bc3x.url = "/api/event/video/transcoding/delete" } else { bc3x.url = "/api/event/delete" } }, format: function(m2x, e2x) { m2x.id = e2x.data.id; return m2x } }, "event_activity-del": { url: "/api/event/delete", format: function(m2x, e2x) { m2x.id = e2x.data.id; return m2x } }, "event_activity-list": { url: "/api/act/event", filter: function(e2x) { e2x.data.lasttime = e2x.data.lasttime || -1;
                e2x.data.pagesize = e2x.data.limit;
                e2x.data.getcounts = true;
                delete e2x.data.offset }, format: function(Q3x, e2x) { e2x.data.lasttime = Q3x.lasttime; var i2x = Q3x.events; if (Q3x.more) i2x = this.ckU5Z(i2x, e2x.data.pagesize); return { list: i2x, total: Q3x.size } }, onerror: "onlisterror" } });
    p2x.yw1x = NEJ.C();
    b2x = p2x.yw1x.O3x(p2x.gW5b);
    b2x.cl3x = function() { this.cs3x() };
    b2x.bbp0x = function(t2x, cF4J) { return t2x + "-" + cF4J };
    b2x.cuA7t = function(e2x) { this.ck3x("ievent-get", e2x) };
    b2x.cuB7u = function(e2x) { this.ck3x("ievent-new-get", e2x) };
    b2x.cuC7v = function(e2x) { this.ck3x("ievent-user-get", e2x) };
    b2x.cuE7x = function(t2x, cF4J) { return this.qG8y(this.bbp0x(t2x, cF4J)) };
    b2x.cuF7y = function(Ia3x, e2x) { if (!Ia3x || !Ia3x.length) return;
        e2x = e2x || {}; var bv3x = { song: 2, album: 4, playlist: 1, mv: 3, program: 5 }; for (var i = 0, Br1x = [], buj4n = [], j2x; i < Ia3x.length; ++i) { j2x = Ia3x[i];
            j2x = this.qG8y(this.bbp0x(j2x.type, j2x.id)); if (!j2x) { Br1x.push(Ia3x[i].id);
                buj4n.push(bv3x[Ia3x[i].type] || 0) } } if (!Br1x.length) { this.z2x("oneventresload", e2x.conf); return } e2x.data = { ids: JSON.stringify(Br1x), types: JSON.stringify(buj4n) };
        e2x.onload = this.ckO5T.g2x(this);
        this.ck3x("ievent-res-get", e2x) };
    b2x.ckO5T = function(m2x) { if (m2x.code != 200) { this.z2x("oneventreserror", m2x.code); return } var bv3x = { 1: "playlist", 2: "song", 3: "mv", 4: "album", 5: "program" }; for (var i = 0, i2x = m2x.results; i < i2x.length; ++i) { this.ok8c(this.bbp0x(bv3x[i2x[i].type], i2x[i].id), i2x[i]) } this.z2x("oneventresload", m2x.conf) };
    b2x.bur5w = function(j2x) { var J3x = "event-list";
        this.bkd2x(J3x, j2x);
        this.z2x("onitemadd", { key: J3x, action: "add", data: j2x, flag: -1 }) };
    b2x.vf0x = function(e2x) { this.ck3x("ievent-like", e2x) };
    b2x.lo7h = function(e2x) { this.ck3x("ievent-delete", e2x) };
    b2x.ckU5Z = function(i2x, fY5d) { for (var i = i2x.length; i < fY5d; i++) i2x.push(null); return i2x };
    b2x.ckV5a = function(i2x) { var m2x = []; if (!i2x || !i2x.length) return;
        k2x.be3x(i2x, function(d2x) { d2x.biData = this.buv5A(d2x) }, this) };
    b2x.buv5A = function() { var Xd8V = { 32: "comment", 33: "activity", 34: "recomment_artist" },
            ckN5S = [13, 17, 18, 19, 20, 21, 22, 28, 31]; return function(d2x) { var Q3x = { id: d2x.id, sourceid: d2x.user.userId, alg: d2x.rcmdInfo ? d2x.rcmdInfo.alg : null, contentType: Xd8V[d2x.type] || (k2x.cV4Z(ckN5S, d2x.type) != -1 ? "user_event" : "other") }; return Q3x } }();
    b2x.Ci2x = function(ckL5Q, d2x) { var Q3x = this.buv5A(d2x);
        Q3x.actionType = ckL5Q; if (window.log) log("eventclick", Q3x) };
    b2x.cuG7z = function(e2x) { this.ck3x("event_latest-list", e2x) } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        bI3x = c2x("nej.ui"),
        l2x = c2x("nm.x"),
        L3x = c2x("nm.w"),
        b2x, K3x;
    L3x.Vd8V = NEJ.C();
    b2x = L3x.Vd8V.O3x(bI3x.et4x);
    K3x = L3x.Vd8V.cg3x;
    b2x.bk3x = function(e2x) { this.bl3x(e2x); var gK5P = e2x.box || Y3x;
        a1x.fy5D(this.o2x, { position: "absolute", width: gK5P.width + "px", height: gK5P.height + "px", top: gK5P.top + "px", left: gK5P.left + "px" });
        window.uploader = this };
    b2x.bC3x = function() { this.bH3x() };
    b2x.ly7r = function(d2x) { this.z2x("onselect", d2x);
        console.log("select", d2x) };
    b2x.ri8a = function(d2x) { this.z2x("onprogress", d2x);
        console.log("progress", d2x) };
    b2x.tt9k = function(d2x) { if (d2x.code == 200) { this.z2x("oncomplete", d2x) } else { this.ep4t(d2x) } console.log("complete", d2x) };
    b2x.ep4t = function(d2x) { this.z2x("onerror", d2x);
        console.log("error", d2x) };
    b2x.gd5i = bm3x;
    b2x.ckJ5O = bm3x })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        bI3x = c2x("nej.ui"),
        l2x = c2x("nm.x"),
        L3x = c2x("nm.w"),
        gg5l = c2x("cb"),
        b2x, K3x;
    L3x.beq1x = NEJ.C();
    b2x = L3x.beq1x.O3x(L3x.Vd8V);
    K3x = L3x.beq1x.cg3x;
    b2x.cl3x = function() { this.cs3x() };
    b2x.bk3x = function(e2x) { this.bl3x(e2x); var J3x = k2x.mT7M(8),
            jp6j = "onselect" + J3x,
            jl6f = "onprogress" + J3x,
            bvn5s = "oncomplete" + J3x,
            bQ3x = "onerror" + J3x;
        gg5l[jp6j] = this.ly7r.g2x(this);
        gg5l[jl6f] = this.ri8a.g2x(this);
        gg5l[bvn5s] = this.tt9k.g2x(this);
        gg5l[bQ3x] = this.ep4t.g2x(this); var ckI5N = "/style/swf/MusicUpload.swf?v=20150202",
            bv3x = { music: "音频(*.mp3,*.m4a,*.x-m4a)", image: "*.jpg;*.jpeg;*.png;*.gif;" },
            ll7e = { url: e2x.api, token: e2x.token, filter: bv3x[e2x.accept] || e2x.accept || e2x.flashAccept || "", multiple: e2x.multiple, error: "cb." + bQ3x, select: "cb." + jp6j, progress: "cb." + jl6f, complete: "cb." + bvn5s };
        this.od8V = a1x.pU8M({ src: ckI5N, hidden: false, parent: this.o2x, onready: this.OY6S.g2x(this), width: e2x.box.width, height: e2x.box.height, params: { flashvars: k2x.uG9x(ll7e, "&", false), allowscriptaccess: "always", wmode: "transparent" } }) };
    b2x.bC3x = function() { this.bH3x();
        this.o2x.innerHTML = "" };
    b2x.OY6S = function(hb5g) { this.od8V = hb5g };
    b2x.gd5i = function(ir6l) { this.od8V.upload(ir6l) };
    b2x.ckJ5O = function() { this.od8V.cancle() };
    b2x.qg8Y = function(Cw2x) { this.od8V.disable(Cw2x) } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        dO4S = c2x("nej.g"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        bI3x = c2x("nej.ui"),
        l2x = c2x("nm.x"),
        L3x = c2x("nm.w"),
        b2x, K3x; var hQ5V = a1x.sj9a(".#<uispace>{position:absolute;z-index:100;overflow:hidden;cursor:pointer;}.#<uispace> .hfile{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;opacity:0;filter:Alpha(opacity=0);font-size:12px;font-size:16px;*font-size:15px;}"); var gh5m = a1x.hM5R('<div class="' + hQ5V + '"><form><input multiple="multiple" type="file" name="uploadfile" class="hfile" size="70"></form></div>');
    L3x.bgq1x = NEJ.C();
    b2x = L3x.bgq1x.O3x(L3x.Vd8V);
    K3x = L3x.bgq1x.cg3x;
    b2x.bZ3x = function() { this.lg7Z = hQ5V;
        this.ca3x = gh5m };
    b2x.bR3x = function() { this.cc3x(); var bn3x = a1x.cQ4U(this.o2x);
        this.bw3x = bn3x[0];
        h2x.q2x(this.bw3x.uploadfile, "change", this.qf8X.g2x(this)) };
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.ckH5M = e2x.api || "";
        this.Um8e = e2x.multiple;
        this.bw3x.multiple = this.Um8e ? "coverImgUrl" : "";
        this.bw3x.reset();
        this.TD7w = [];
        this.Tz7s = {}; var bv3x = { music: "audio/mp3,audio/x-m4a,audio/m4a", image: "image/*" }; if (e2x.accept || e2x.htmlAccept) { this.bw3x.uploadfile.accept = bv3x[e2x.accept] || e2x.accept || e2x.htmlAccept } if (e2x.tipTitle) { this.bw3x.uploadfile.title = e2x.tipTitle } };
    b2x.bC3x = function() { this.bH3x();
        this.bjl2x();
        this.bw3x.reset();
        delete this.TD7w;
        delete this.Tz7s;
        this.bw3x.uploadfile.accept = "*" };
    b2x.qf8X = function(d2x) { var bwb5g = this.bw3x.uploadfile.files,
            bwc5h = []; if (!this.Um8e) { this.TD7w = [];
            this.Tz7s = {} } for (var i = 0, ii = bwb5g.length; i < ii; i++) { var SB7u = this.ckG5L(bwb5g[i]);
            this.TD7w.push(SB7u);
            this.Tz7s[SB7u.uuid] = SB7u;
            bwc5h.push(SB7u); if (!this.Um8e) break } this.ly7r(bwc5h);
        this.bw3x.reset() };
    b2x.bjl2x = function() { if (this.bwj5o) { this.bwk5p = true;
            v2x.jo6i(this.Hd3x);
            this.bwk5p = false;
            delete this.bwj5o;
            delete this.Hd3x } };
    b2x.ckG5L = function(dx4B) { return { uuid: "file-" + +(new Date) + k2x.mT7M(5), name: dx4B.name, size: dx4B.size, refernce: dx4B } };
    b2x.gd5i = function(ir6l) { this.bjl2x(); var dx4B = this.Um8e ? this.Tz7s[ir6l] : this.TD7w[0],
            j2x = new FormData,
            nL7E = {}; if (dx4B) { nL7E[dO4S.xd0x] = dO4S.CV2x;
            j2x.append("fileupload", dx4B.refernce);
            this.bwj5o = dx4B;
            this.Hd3x = v2x.bp3x(this.ckH5M, { type: "json", method: "post", headers: nL7E, data: j2x, timeout: 0, onload: this.zc1x.g2x(this, ir6l), onerror: this.zc1x.g2x(this, ir6l), onuploading: this.ckF5K.g2x(this, ir6l) }) } };
    b2x.zc1x = function(ir6l, d2x) { d2x.uuid = ir6l; if (d2x.code == 200) { this.tt9k(d2x) } else { if (!this.bwk5p) { this.ep4t(d2x) } } };
    b2x.ckF5K = function(ir6l, d2x) { d2x.uuid = ir6l;
        this.ri8a(d2x) };
    b2x.ckD5I = function() { this.bjl2x() };
    b2x.qg8Y = function(Cw2x) { if (Cw2x) { this.bo3x() } else { this.M3x() } } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        L3x = c2x("nm.w"),
        ckC5H = typeof FormData != "undefined";
    L3x.CN2x = NEJ.C();
    L3x.CN2x.O3x(ckC5H ? L3x.bgq1x : L3x.beq1x) })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        dO4S = c2x("nej.g"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        ff5k = c2x("nej.n"),
        H2x = c2x("nej.ut"),
        bd3x = c2x("nej.ui"),
        D2x = c2x("nm.w"),
        n2x = c2x("nm.l"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        L3x = c2x("nm.x.f"),
        b2x, K3x, bao0x = { 0: "", "-1": "不能添加重复图片", "-10": "最多只能添加9张", "-3": "请选择不超过5M的图片" },
        baZ0x = 5 * 1024 * 1024,
        cuH7A = 80,
        ckA5F = /\.(bmp|jpg|jpeg|png|gif)$/i;
    D2x.bwC5H = NEJ.C();
    b2x = D2x.bwC5H.O3x(H2x.wp0x);
    b2x.baL0x = function() { return { x: this.yM1x.clientWidth - this.o2x.offsetWidth, y: this.yM1x.clientHeight - this.o2x.offsetHeight } };
    D2x.bbm0x = NEJ.C();
    b2x = D2x.bbm0x.O3x(bd3x.et4x);
    b2x.bZ3x = function() { this.ca3x = "m-xwgt-share-upload" };
    b2x.bR3x = function() { this.cc3x(); var i2x = a1x.I2x(this.o2x, "j-flag");
        this.So7h = i2x.shift();
        this.CT2x = i2x.shift();
        this.Qi6c = i2x.shift();
        this.ckz5E = { onselect: this.bwN5S.dV4Z(this, 0), onerror: this.ep4t.g2x(this), oncomplete: this.tt9k.g2x(this), multiple: true, parent: this.CT2x, api: "/upload/event/img", htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif", flashAccept: "图片(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)", box: { width: 60, height: 60, top: 0, left: 0 }, tipTitle: "上传图片" };
        this.bwP5U = { onselect: this.bwN5S.dV4Z(this, 1), onerror: this.ep4t.g2x(this), oncomplete: this.tt9k.g2x(this), multiple: true, parent: this.CT2x, api: "/upload/event/img", htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif", flashAccept: "图片(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)", box: { width: 20, height: 20, top: 0, left: 0 }, tipTitle: "上传图片" };
        this.cky5D = D2x.CN2x.B2x(this.ckz5E) };
    b2x.bC3x = function() { h2x.iw6q(this.rM9D, "click"); if (!!this.fn5s) { for (var i = this.fn5s.length - 1; i >= 0; i--) { a1x.cH4L(this.fn5s[i].element, false); if (this.fn5s[i].dragger) this.fn5s[i].dragger.S3x() } } this.fn5s = [];
        this.SH7A = {}; if (this.zl1x) { clearTimeout(this.zl1x) } this.zl1x = 0;
        this.GH3x && this.GH3x.S3x();
        delete this.GH3x;
        this.bH3x() };
    b2x.bwN5S = function(i2x, s2x) { if (!i2x) return; for (var i = 0, len = i2x.length; i < len; i++) { if (!ckA5F.test(i2x[i].name)) { this.bdg0x({ path: i2x[i].name, index: s2x, uuid: i2x[i].uuid, status: -4, fail: "这不是<br>图片" }) } else if (i2x[i].size > baZ0x) { this.bdl0x(-3);
                this.bdg0x({ path: i2x[i].name, index: s2x, uuid: i2x[i].uuid, status: -3, fail: "上传<br>失败" }) } else { this.bdg0x({ path: i2x[i].name, index: s2x, uuid: i2x[i].uuid, status: 0 }) } } };
    b2x.ep4t = function(d2x) { var dx4B = this.SH7A[d2x.uuid];
        dx4B.status = -4;
        dx4B.fail = "上传<br>失败";
        this.bxp5u(dx4B);
        this.zp1x() };
    b2x.tt9k = function(d2x) { var dx4B = this.SH7A[d2x.uuid];
        dx4B.status = 2; var bt3x = NEJ.X({}, d2x.picInfo);
        bt3x.originId = bt3x.originIdStr;
        bt3x.squareId = bt3x.squareIdStr;
        bt3x.rectangleId = bt3x.rectangleIdStr;
        bt3x.pcSquareId = bt3x.pcSquareIdStr;
        bt3x.pcRectangleId = bt3x.pcRectangleIdStr;
        bt3x.originJpgId = bt3x.originJpgIdStr || bt3x.originJpgId;
        dx4B.picInfo = bt3x;
        dx4B.picUrl = d2x.picInfo.pcSquareUrl;
        this.bxp5u(dx4B);
        this.zp1x() };
    b2x.bdg0x = function(dx4B) { if (this.fn5s.length >= 9) { this.bdl0x(-10, 3e3, this.bxr5w.g2x(this)); return } this.ckx5C(dx4B);
        this.fn5s.push(dx4B);
        this.SH7A[dx4B.uuid] = dx4B; if (!!this.fn5s.length) { this.o2x.style.display = "" } if (this.fn5s.length >= 9) { this.CT2x.style.display = "none" } else { this.CT2x.style.display = "" } this.zp1x() };
    b2x.zp1x = function() { var bdq0x = -1,
            bxG5L = 0; for (var i = 0, l = this.fn5s.length; i < l; i++) { if (this.fn5s[i].status == 1) { return } if (this.fn5s[i].status == 0 && bdq0x < 0) { bdq0x = i } if (this.fn5s[i].status == 2 || this.fn5s[i].status < 0) { bxG5L++ } } var r2x = this.fn5s[bdq0x]; if (r2x) {
            (r2x.index == 0 ? this.cky5D : this.GH3x).gd5i(r2x.uuid);
            r2x.status = 1;
            this.z2x("onstartupload", {}) } else if (bxG5L == this.fn5s.length) { this.z2x("onfinishupload", {}) } };
    b2x.bdl0x = function(s2x, jM6G, gg5l) { if (this.PJ6D < s2x) { return } if (this.zl1x) { clearTimeout(this.zl1x);
            this.zl1x = 0 } if (jM6G) { this.Qi6c.innerText = bao0x[s2x * 1];
            this.PJ6D = s2x;
            this.zl1x = setTimeout(this.TR7K.g2x(this, s2x, gg5l), jM6G) } else { this.Qi6c.innerText = bao0x[s2x];
            this.PJ6D = s2x } this.Qi6c.style.display = "" };
    b2x.TR7K = function(s2x, gg5l) { if (s2x && this.PJ6D !== s2x) { return } this.PJ6D = 0;
        this.Qi6c.innerText = bao0x[0];
        this.Qi6c.style.display = "none";
        gg5l && gg5l() };
    b2x.ckx5C = function(dx4B) { var j2x = {}; if (dx4B.fail) { j2x.fail = dx4B.fail } var dr4v = a1x.bP3x("m-xwgt-share-upload-preview", j2x);
        dx4B.element = a1x.mV7O(dr4v);
        h2x.q2x(a1x.I2x(dx4B.element, "del")[0], "mousedown", this.ckw5B.g2x(this, dx4B), false);
        this.So7h.insertBefore(dx4B.element, this.So7h.lastElementChild);
        dx4B.dragger = D2x.bwC5H.B2x({ view: this.So7h.parentNode, body: dx4B.element, overflow: false, direction: 0, isRelative: 1, ondragstart: this.Qx6r.g2x(this, dx4B), onchange: this.ckv5A.g2x(this, dx4B), ondragend: this.baR0x.g2x(this, dx4B) }) };
    b2x.bxp5u = function(dx4B) { if (!dx4B || !dx4B.element) { return false } var j2x = {}; if (dx4B.fail) { j2x.fail = dx4B.fail } else { j2x.url = dx4B.picUrl } a1x.y2x(dx4B.element, "z-fail");
        dx4B.element.firstChild.outerHTML = a1x.bP3x("m-xwgt-share-upload-preview-img", j2x) };
    b2x.Qx6r = function(r2x, jE6y) { a1x.y2x(r2x.element, "z-sel") };
    b2x.ckv5A = function(r2x, jE6y) { var cuJ7C, gz5E = this.fn5s.length - 1,
            oj8b; for (var i = gz5E; i >= 0; i--) { a1x.w2x(this.fn5s[i].element, "z-jump"); if (this.fn5s[i] == r2x) { oj8b = i } else { a1x.fy5D(this.fn5s[i].element, { left: "", top: "" }) } } var Pk6e = { x: 46 + 92 * (oj8b % 5) + jE6y.left, y: 46 + 92 * (oj8b / 5 >> 0) + jE6y.top }; var bfm1x = Pk6e.x / 92 >> 0,
            bfz1x = Pk6e.y / 92 >> 0,
            xr0x = Math.max(0, Math.min(gz5E, bfz1x * 5 + bfm1x)); if (xr0x == oj8b) { return } var cks5x = xr0x < oj8b; for (var i = Math.min(xr0x, oj8b); i <= Math.max(xr0x, oj8b); i++) { if (i !== oj8b) { var byg5l = i % 5; if (cks5x) { if (byg5l == 4) { a1x.fy5D(this.fn5s[i].element, { left: "-368px", top: "92px" }) } else { a1x.fy5D(this.fn5s[i].element, { left: "92px", top: "" }) } } else { if (byg5l == 0) { a1x.fy5D(this.fn5s[i].element, { left: "368px", top: "-92px" }) } else { a1x.fy5D(this.fn5s[i].element, { left: "-92px", top: "" }) } } } } };
    b2x.baR0x = function(r2x, jE6y) { var cuK7D, gz5E = this.fn5s.length - 1,
            oj8b; for (var i = gz5E; i >= 0; i--) { a1x.fy5D(this.fn5s[i].element, { left: "", top: "" }); if (this.fn5s[i] == r2x) { oj8b = i } } a1x.w2x(r2x.element, "z-sel"); var Pk6e = { x: 46 + 92 * (oj8b % 5) + jE6y.left, y: 46 + 92 * (oj8b / 5 >> 0) + jE6y.top }; var bfm1x = Pk6e.x / 92 >> 0,
            bfz1x = Pk6e.y / 92 >> 0,
            xr0x = Math.max(0, Math.min(gz5E, bfz1x * 5 + bfm1x)); if (xr0x == oj8b) { return } this.So7h.insertBefore(r2x.element, (this.fn5s[xr0x + (xr0x > oj8b ? 1 : 0)] || {}).element || this.CT2x);
        this.fn5s.splice(oj8b, 1);
        this.fn5s.splice(xr0x, 0, r2x) };
    b2x.ckw5B = function(r2x, d2x) { a1x.cH4L(r2x.element, false); if (r2x.dragger) r2x.dragger.S3x();
        delete r2x.dragger; var s2x = -1; for (var i = this.fn5s.length - 1; i >= 0; i--) { if (this.fn5s[i] == r2x) { s2x = i; break } } this.fn5s.splice(s2x, s2x >= 0 ? 1 : 0);
        delete r2x; if (this.fn5s.length >= 9) { this.CT2x.style.display = "none" } else { this.CT2x.style.display = "" } if (!this.fn5s.length) { this.o2x.style.display = "none";
            this.TR7K(0) } else { this.bxr5w() } this.zp1x() };
    b2x.bxr5w = function() { var byj5o = false; for (var i = 0, len = this.fn5s.length; i < len; i++) { if (this.fn5s[i].status == -3) { byj5o = true } } if (byj5o) { this.bdl0x(-3) } else { this.TR7K(-3) } };
    b2x.Ov6p = function() { var ef4j = []; for (var i = this.fn5s.length - 1; i >= 0; i--) { if (this.fn5s[i].status == 2) { ef4j.unshift(this.fn5s[i].picInfo) } } return ef4j };
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.bwP5U.parent = e2x.button;
        this.GH3x && this.GH3x.S3x();
        this.GH3x = D2x.CN2x.B2x(this.bwP5U);
        this.o2x.style.display = "none"; if (!!this.fn5s) { for (var i = this.fn5s.length - 1; i >= 0; i--) { a1x.cH4L(this.fn5s[i].element, false); if (this.fn5s[i].dragger) this.fn5s[i].dragger.S3x() } } this.fn5s = [];
        this.SH7A = {}; if (this.zl1x) { clearTimeout(this.zl1x) } this.TR7K(0);
        this.PJ6D = 0 };
    H2x.fr5w.B2x({ element: D2x.bbm0x, event: ["onstartupload", "onfinishupload"] }) })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        eU5Z = NEJ.R,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        bd3x = c2x("nej.ui"),
        N3x = c2x("nej.ut"),
        b2x, K3x; if (!!N3x.mX7Q) return;
    N3x.mX7Q = NEJ.C();
    b2x = N3x.mX7Q.O3x(N3x.Zv9m);
    K3x = N3x.mX7Q.cg3x;
    b2x.bk3x = function(e2x) { this.ckp5u(e2x.more);
        this.UR8J = a1x.x2x(e2x.sbody);
        this.bU3x([
            [this.UR8J, "scroll", this.cko5t.g2x(this)]
        ]); var dh4l = e2x.delta; if (dh4l == null) dh4l = 30;
        this.Ok6e = Math.max(0, dh4l); var cu3x = parseInt(e2x.count) || 0;
        this.iL6F = Math.max(0, cu3x); var ft5y = parseInt(e2x.number) || 0; if (ft5y > 1 && ft5y <= cu3x) { this.zg1x = ft5y } this.bl3x(e2x) };
    b2x.bC3x = function() { this.bH3x();
        delete this.zE1x;
        delete this.UR8J;
        delete this.rF9w;
        delete this.VK8C };
    b2x.yt1x = function(bj3x, bq3x) { var bE3x = this.wQ0x + (this.iL6F - 1) * this.qF8x,
            fY5d = this.iL6F * this.qF8x; return K3x.yt1x.call(this, bE3x, bj3x, fY5d, bq3x) };
    b2x.ckp5u = function(VN8F) { this.zE1x = a1x.x2x(VN8F);
        this.bU3x([
            [this.zE1x, "click", this.nH7A.g2x(this)]
        ]) };
    b2x.bhZ2x = function(E2x) { E2x = E2x || {}; if (this.rF9w || !E2x) return; if (!E2x.scrollHeight) E2x = a1x.oE8w(); var bj3x = a1x.hJ5O(this.ij6d),
            dh4l = bj3x.y + this.ij6d.offsetHeight - E2x.scrollTop - E2x.clientHeight,
            bij2x = E2x.scrollHeight <= E2x.clientHeight; if (dh4l <= this.Ok6e || bij2x && !this.rF9w) { this.nH7A() } };
    b2x.cko5t = function(d2x) { if (this.rF9w) return;
        this.bhZ2x(h2x.U3x(d2x)) };
    b2x.ym0x = function(d2x) { K3x.ym0x.apply(this, arguments); if (!d2x.stopped) { this.JU4Y(); var bj3x = 0; if (d2x.index > 1) { bj3x = this.wQ0x + ((d2x.index - 1) * this.iL6F - 1) * this.qF8x } this.hP5U = bj3x;
            this.nH7A() } };
    b2x.bKT8L = function(e2x) { if (!!this.zg1x) { var dh4l = e2x.offset > 0 ? this.qF8x : this.wQ0x,
                fY5d = dh4l + this.qF8x * (this.zg1x - 1);
            this.hP5U = e2x.offset + fY5d;
            e2x.data.limit = fY5d;
            e2x.limit = fY5d;
            delete this.zg1x } return e2x };
    b2x.bfR1x = function(e2x) { delete this.VK8C;
        K3x.bfR1x.apply(this, arguments);
        this.byP6J() };
    b2x.bfA1x = function(d2x) { if (d2x.key != this.il6f.key) return; switch (d2x.action) {
            case "refresh":
            case "append":
                delete this.VK8C; break } K3x.bfA1x.apply(this, arguments) };
    b2x.JE4I = function() { this.vD0x("onbeforelistload", "列表加载中...");
        a1x.X3x(this.zE1x, "display", "none") };
    b2x.bpX3x = function(i2x, bj3x, fY5d) { var bq3x = i2x.length,
            bis2x = i2x.loaded ? bj3x + fY5d >= bq3x : bj3x + fY5d > bq3x;
        this.hP5U = Math.min(this.hP5U, bq3x);
        a1x.X3x(this.zE1x, "display", bis2x ? "none" : ""); if (bis2x) this.rF9w = !0; if (this.iL6F > 0) { var bt3x = this.yt1x(bj3x, i2x.length); if (this.bLs9j(bt3x.index, bt3x.total)) return !0; var dh4l = this.wQ0x - this.qF8x,
                ft5y = this.iL6F * this.qF8x;
            this.rF9w = (bj3x + fY5d - dh4l) % ft5y == 0 || bis2x;
            a1x.X3x(this.zE1x, "display", this.rF9w ? "none" : "");
            this.blx2x(this.rF9w && bt3x.total > 1 ? "" : "none") } };
    b2x.bgp1x = function() { this.hP5U = 0;
        this.rF9w = !0;
        this.vD0x("onemptylist", "没有列表数据！") };
    b2x.JB4F = function(dr4v, jE6y) { this.ij6d.insertAdjacentHTML(jE6y || "beforeEnd", dr4v) };
    b2x.JA4E = function(gB5G) { this.fg5l = this.fg5l || []; if (k2x.en4r(gB5G)) { eU5Z.push.apply(this.fg5l, gB5G) } else { this.fg5l.push(gB5G) } };
    b2x.ZF9w = function(d2x) { a1x.mq7j(this.ci3x);
        this.Js4w(d2x, "onafteradd"); var eB4F = d2x.flag; if (d2x.stopped || !eB4F) return; if (this.iL6F > 0) { this.bjY2x(); return } this.hP5U += 1;
        eB4F == -1 ? this.biM2x(d2x.data) : this.bLW9N(d2x.data) };
    b2x.ZG9x = function(d2x) { this.Js4w(d2x, "onafterdelete"); if (d2x.stopped) return; if (this.iL6F > 0) { this.bjY2x(); return } var C2x = d2x.data[this.eM5R.pkey]; if (!!this.fg5l) { var r2x = a1x.bDn7g(C2x),
                s2x = k2x.cV4Z(this.fg5l, r2x); if (s2x >= 0) { this.fg5l.splice(s2x, 1);
                this.hP5U -= 1 } if (!!r2x) r2x.S3x() } else { var f2x = a1x.x2x(this.bJw8o(C2x)); if (!!f2x) this.hP5U -= 1;
            a1x.cH4L(f2x) } if (this.hP5U <= 0) this.nH7A() };
    b2x.bpE3x = function(bj3x, fY5d) { if (bj3x != this.hP5U) return; if (this.SP7I()) { this.rF9w = !1;
            this.byP6J() } };
    b2x.boL3x = function(bj3x, fY5d) { if (bj3x != 0) return; var Gu3x = this.P3x.gO5T(this.il6f.key); for (var i = fY5d - 1; i >= 0; i--) { this.biM2x(Gu3x[i]) } };
    b2x.byP6J = function() { var E2x = this.UR8J; if (!E2x || this.rF9w) return;
        this.bhZ2x(this.UR8J) };
    b2x.fT5Y = function() { delete this.rF9w;
        K3x.fT5Y.apply(this, arguments) };
    b2x.nH7A = function() { if (!!this.VK8C) return;
        this.VK8C = !0; var bj3x = this.hP5U;
        this.hP5U += bj3x == 0 ? this.wQ0x : this.qF8x;
        this.bKH8z(bj3x) } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        cO4S = c2x("nej.x"),
        N3x = c2x("nej.ut"),
        b2x; if (!!N3x.DD2x) return;
    N3x.DD2x = NEJ.C();
    b2x = N3x.DD2x.O3x(N3x.cy3x);
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.ic6W = e2x.event || "click";
        this.jS6M = e2x.selected || "js-selected";
        this.mP7I = e2x.disabled || "js-disabled";
        this.byV6P = !!e2x.inverse;
        this.ckn5s(e2x.list);
        this.FM3x(e2x.index || 0) };
    b2x.bC3x = function() { var ckm5r = function(f2x) { this.bjX2x(f2x, !1) }; return function() { this.bH3x();
            k2x.be3x(this.bV3x, ckm5r, this);
            delete this.bV3x;
            delete this.ic6W;
            delete this.cn3x;
            delete this.mP7I;
            delete this.jS6M;
            delete this.byV6P } }();
    b2x.ckn5s = function() { var bfr1x = function(r2x) { if (!r2x) return;
            this.bV3x.push(r2x); var s2x = this.bV3x.length - 1,
                dd4h = this.bkn2x[s2x]; if (!dd4h) { dd4h = this.FM3x.g2x(this, s2x);
                this.bkn2x[s2x] = dd4h } this.bU3x([
                [r2x, this.ic6W, dd4h]
            ]) }; return function(i2x) { this.bV3x = []; if (!this.bkn2x) this.bkn2x = [];
            k2x.be3x(i2x, bfr1x, this) } }();
    b2x.bjX2x = function(E2x, ckk5p) {!!ckk5p && !this.byV6P ? a1x.y2x(E2x, this.jS6M) : a1x.w2x(E2x, this.jS6M) };
    b2x.FM3x = function(s2x, LI4M, j2x) { var E2x = this.bV3x[s2x]; if (LI4M != !0 && (s2x == this.cn3x || !E2x || a1x.bz3x(E2x, this.mP7I))) { h2x.ce3x(arguments[1]); return this } var d2x = { index: s2x, last: this.cn3x, list: this.nC7v(), data: j2x || a1x.u2x(E2x, "value") };
        this.cn3x = s2x;
        E2x = this.bV3x[d2x.last]; if (!!E2x) this.bjX2x(E2x, !1);
        E2x = this.bV3x[this.cn3x];
        this.bjX2x(E2x, !0);
        this.z2x("onchange", d2x); if (!d2x.nostop) h2x.ce3x(arguments[1]); return this };
    b2x.rL9C = function() { return this.cn3x };
    b2x.nC7v = function() { return this.bV3x };
    a1x.ckj5o = cO4S.ckj5o = function(bB3x, e2x) { var C2x = a1x.kD6x(bB3x); if (!C2x) return null; if (!N3x.VR8J(C2x, N3x.DD2x)) { e2x = e2x || {};
            e2x.list = !e2x.clazz ? a1x.cQ4U(C2x) : a1x.I2x(C2x, e2x.clazz);
            delete e2x.clazz } return N3x.VR8J(C2x, N3x.DD2x, e2x || Y3x) };
    cO4S.isChange = !0 })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        l2x = c2x("nm.x"); var SETTING_KEY = "player-setting"; var mw7p = { mode: 4, volume: .8, autoPlay: false, index: 0, lock: false };
    mw7p = v2x.th9Y(SETTING_KEY) || mw7p;
    l2x.blI2x = function() { return mw7p };
    l2x.DN2x = function(DO2x) { if (DO2x) { mw7p = DO2x;
            v2x.vs0x(SETTING_KEY, DO2x) } } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"),
        gS5X = c2x("nm.w.player.log"); var kz6t = p2x.hL5Q.B2x(); var LogLevel = { ERROR: 10, INFO: 6, DEBUG: 2 }; var my7r = function(t2x, bF3x, pt8l) { var cZ4d = l2x.eQ5V("{0} {1} {2}", k2x.iV6P(new Date, "yyyy-MM-dd HH:mm:ss"), t2x, bF3x); if (pt8l == LogLevel.ERROR) { kz6t.gf5k("playerror", { message: bF3x }) } if (pt8l >= LogLevel.INFO) { kz6t.crf7Y(cZ4d) } if (location.hostname.indexOf("igame.163.com") != -1) { console.log(cZ4d) } };
    gS5X.bT3x = function() { my7r("PLAY_ERROR", l2x.eQ5V.apply(null, arguments), LogLevel.ERROR) };
    gS5X.oH8z = function() { my7r("PLAY_INFO", l2x.eQ5V.apply(null, arguments), LogLevel.INFO) };
    gS5X.cuM7F = function() { my7r("PLAY_DEBUG", l2x.eQ5V.apply(null, arguments), LogLevel.DEBUG) } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        D2x = c2x("nm.w"),
        gg5l = c2x("flash.cb"); var dH4L = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"]; var DT2x, XN9E, sH9y;
    D2x.ckh5m = function(t2x, dq4u) { if (t2x != "flash") { if (!DT2x) { DT2x = a1x.cT4X("audio");
                k2x.be3x(dH4L, function(t2x) { h2x.q2x(DT2x, t2x, onMediaCallBack) }) } if (DT2x && DT2x.canPlayType && DT2x.canPlayType("audio/mpeg")) { dq4u(new MediaWrap("audio")); return } } if (!XN9E) { a1x.pU8M({ src: "/style/swf/music/music.swf?v=20151204", hidden: true, params: { allowscriptaccess: "always" }, onready: function(hb5g) { XN9E = hb5g;
                    k2x.be3x(dH4L, function(t2x) { gg5l[t2x] = onMediaCallBack;
                        XN9E.addCallback(t2x, "flash.cb." + t2x) });
                    dq4u(new MediaWrap("flash")) }.g2x(this) }) } else { dq4u(new MediaWrap("flash")) } };

    function MediaWrap(DX2x) { var lt7m;
        H2x.fr5w.B2x({ element: this, event: dH4L.concat(["interrupt", "recover"]) });
        lt7m = DX2x == "audio" ? DT2x : XN9E;
        this.type = DX2x;
        this.destroy = function() {};
        this.setSrc = function(V3x) { if (sH9y != this) { var gz5E = sH9y; if (gz5E) { gz5E.interrupt() } sH9y = this } if (DX2x == "flash") { lt7m.setSrc(V3x) } else { lt7m.src = V3x } };
        this.play = function() { if (sH9y != this) { var gz5E = sH9y; if (gz5E) { gz5E.interrupt();
                    sH9y = this;
                    this.recover() } else { sH9y = this } } if (DX2x == "flash") { lt7m.as_play() } else { lt7m.play() } };
        this.pause = function() { if (sH9y != this) return; if (DX2x == "flash") { lt7m.as_pause() } else { lt7m.pause() } };
        this.load = function() { if (sH9y != this) return; if (DX2x == "flash") { lt7m.as_load() } else { lt7m.load() } };
        this.interrupt = function() { onMediaCallBack({ type: "interrupt" }) };
        this.recover = function() { onMediaCallBack({ type: "recover" }) };
        this.getMedia = function() { return lt7m }; var nx7q = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k2x.be3x(nx7q, function(T3x) { var Ln4r = "get" + T3x,
                Lj4n = "set" + T3x; if (DX2x == "flash") { if (!this[Ln4r]) { this[Ln4r] = function() { return lt7m[Ln4r]() } } if (!this[Lj4n]) { this[Lj4n] = function(value) { lt7m[Lj4n](value) } } } else { var bzW6Q = T3x.slice(0, 1).toLowerCase() + T3x.slice(1); if (!this[Ln4r]) { this[Ln4r] = function() { return lt7m[bzW6Q] } } if (!this[Lj4n]) { this[Lj4n] = function(value) { lt7m[bzW6Q] = value } } } }, this) }

    function onMediaCallBack(d2x) { if (sH9y) { h2x.z2x(sH9y, d2x.type, d2x) } } })();
(function() { var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        cP4T = c2x("nej.p"),
        D2x = c2x("nm.w"),
        l2x = c2x("nm.x"),
        gS5X = c2x("nm.w.player.log"),
        b2x; var DEFAULT_BR = 128e3; var CDN_HOST_REG = /(m\d+\.music\.126\.net)/; var MAX_STALLED_RETRY = 2; var MediaError = { MEDIA_ERR_ABORTED: 1, MEDIA_ERR_NETWORK: 2, MEDIA_ERR_DECODE: 3, MEDIA_ERR_SRC_NOT_SUPPORTED: 4 }; var ErrorType = { INFO_GET_ERR: 1, NET_ERR: 2, UNKNOWN_ERR: 10 }; var LoadState = { LOAD_START: 1, LOADED_META: 2, IN_RELOAD: 3, IN_RE_GET_URL: 4, IN_SWITCH_CDN: 5, IN_SWITCH_MEDIA: 6 }; var RetryLevel = { NONE: 0, GET_URL: 1, RELOAD: 2, SWITCH_CDN: 3 }; var bzY6S = false;
    D2x.fm5r = NEJ.C();
    b2x = D2x.fm5r.O3x(H2x.cy3x);
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.cr3x = {};
        this.XT9K(e2x.media);
        v2x.bp3x("/api/cdns", { type: "json", onload: function(d2x) { if (d2x.code) { this.pm8e = d2x.data } }.g2x(this) }) };
    b2x.bC3x = function() { this.bH3x();
        delete this.cr3x };
    b2x.Yr9i = function(bf3x) { if (!bf3x) return; var Ah1x = this.cr3x.volume; if (this.dA4E) { this.dA4E.pause() } this.cr3x = { time: 0, id: bf3x.id, duration: bf3x.duration / 1e3, play: this.cr3x.play, stalledRetryCount: 0 }; if (Ah1x != null) { this.cr3x.volume = Ah1x } this.cr3x.loadState = LoadState.LOAD_START;
        this.bAk6e(bf3x.id);
        gS5X.oH8z("play song id: {0}", bf3x.id) };
    b2x.eL5Q = function() { if (this.cr3x.error) { this.cr3x.error = null; if (this.cr3x.error == ErrorType.INFO_GET_ERR || this.bAn6h()) { this.bAo6i() } else { this.KI4M() } } else { if (this.dA4E) { this.dA4E.play() } } this.cr3x.play = true;
        this.os8k("play") };
    b2x.fv5A = function() { if (this.dA4E) { this.dA4E.pause() } this.cr3x.play = false;
        this.os8k("pause") };
    b2x.ni7b = function(bA3x) { if (this.dA4E) { this.dA4E.setCurrentTime(bA3x) } this.cr3x.time = bA3x;
        gS5X.oH8z("seek to: {0}", bA3x) };
    b2x.bno3x = function() { return this.cr3x.duration || 0 };
    b2x.uh9Y = function() { return !!this.cr3x.play };
    b2x.lV7O = function(Ky4C) { this.cr3x.volume = Ky4C; if (this.dA4E) { this.dA4E.setVolume(Ky4C) } };
    b2x.bot3x = function() { return this.cr3x.time };
    b2x.XT9K = function(t2x) { D2x.ckh5m(t2x, function(lt7m) { this.dA4E = lt7m;
            gS5X.oH8z("media loaded: {0}", lt7m.type);
            this.bU3x([
                [this.dA4E, "loadedmetadata", this.ckf5k.g2x(this)],
                [this.dA4E, "ended", this.ckd5i.g2x(this)],
                [this.dA4E, "waiting", this.wj0x.g2x(this)],
                [this.dA4E, "play", this.ss9j.g2x(this)],
                [this.dA4E, "pause", this.boG3x.g2x(this)],
                [this.dA4E, "playing", this.JZ4d.g2x(this)],
                [this.dA4E, "timeupdate", this.ckc5h.g2x(this)],
                [this.dA4E, "progress", this.ri8a.g2x(this)],
                [this.dA4E, "stalled", this.bqt4x.g2x(this)],
                [this.dA4E, "interrupt", this.fv5A.g2x(this)],
                [this.dA4E, "recover", this.ckb5g.g2x(this)],
                [this.dA4E, "error", this.ep4t.g2x(this)]
            ]); if (this.cr3x) { if (this.cr3x.loadState == LoadState.LOAD_START || this.cr3x.loadState == LoadState.IN_SWITCH_MEDIA) { this.bqx4B(); if (this.cr3x.volume != null) { this.dA4E.setVolume(this.cr3x.volume) } } } }.g2x(this)) };
    b2x.cka5f = function(t2x) { this.FO3x();
        this.dA4E.destroy();
        this.cr3x.loadState = LoadState.IN_SWITCH_MEDIA;
        this.wj0x();
        this.XT9K(t2x);
        gS5X.oH8z("switch media") };
    b2x.cuQ8I = function() { return this.dA4E };
    b2x.bAk6e = function() { this.wj0x();
        v2x.bp3x("/api/song/enhance/player/url", { type: "json", query: { ids: JSON.stringify([this.cr3x.id]), br: DEFAULT_BR }, onload: this.bBu6o.g2x(this), onerror: this.bBu6o.g2x(this) }) };
    b2x.bBu6o = function(d2x) { if (d2x.code == 200 && d2x.data && d2x.data.length) { var bt3x = d2x.data[0]; if (!bt3x.url) { this.cr3x.error = ErrorType.INFO_GET_ERR;
                this.os8k("error", { code: this.cr3x.error }); return } this.cr3x.playUrl = bt3x.url;
            this.cr3x.expireTime = (new Date).getTime() + bt3x.expi * 1e3;
            this.bqx4B() } else { this.cr3x.error = ErrorType.INFO_GET_ERR;
            this.os8k("error", { code: this.cr3x.error });
            gS5X.bT3x("info load error") } };
    b2x.bqx4B = function() { if (this.dA4E) { var V3x = this.cr3x.playUrl; if (this.cr3x.time > 0 && (this.cr3x.loadState == LoadState.IN_RE_GET_URL || this.cr3x.loadState == LoadState.IN_RE_GET_URL)) { V3x += "#t=" + this.cr3x.time } this.dA4E.setSrc(V3x);
            gS5X.oH8z("load mp3: {0},loadState: {1}.", V3x, this.cr3x.loadState) } };
    b2x.bBv6p = function() { if (/#t=(\d+)$/.test(this.dA4E.getSrc())) { return parseInt(RegExp.$1) || 0 } else { return 0 } };
    b2x.KI4M = function() { var bA3x = parseInt(this.cr3x.time) || 0,
            cjV5a = this.bBv6p(); if (bA3x === cjV5a) { this.dA4E.load() } else { this.dA4E.setSrc(this.cr3x.playUrl + "#t=" + bA3x) } this.cr3x.loadState = LoadState.IN_RELOAD;
        this.wj0x();
        gS5X.oH8z("reload from: {0}", bA3x) };
    b2x.bAo6i = function() { this.cr3x.loadState = LoadState.IN_RE_GET_URL;
        this.bAk6e() };
    b2x.bBx6r = function() { var uO9F = getHost(this.cr3x.playUrl); if (uO9F) { for (var i = 0; i < this.pm8e.length; i++) { var jP6J = this.pm8e[i] || [],
                    s2x = jP6J.indexOf(uO9F); if (s2x >= 0 && jP6J.length > 1) { return jP6J[(s2x + 1) % jP6J.length] } } }

        function getHost(V3x) { if (CDN_HOST_REG.test(V3x)) return RegExp.$1 } };
    b2x.cjU5Z = function() { this.cr3x.playUrl = this.cr3x.playUrl.replace(CDN_HOST_REG, this.bBx6r());
        this.cr3x.loadState = LoadState.IN_SWITCH_CDN;
        this.bqx4B();
        this.wj0x() };
    b2x.ckf5k = function() { if (this.cr3x.loadState == LoadState.LOAD_START) { this.cr3x.loadState = LoadState.LOADED_META; if (this.dA4E.type == "audio") { this.cr3x.duration = this.dA4E.getDuration() } this.os8k("loadedmeta", { duration: this.cr3x.duration }) } else { this.cr3x.loadState = LoadState.LOADED_META } if (this.cr3x.play) { this.dA4E.play() } else { this.dA4E.pause() } if (this.cr3x.time && parseInt(this.cr3x.time) != this.bBv6p()) { this.dA4E.setCurrentTime(this.cr3x.time) } this.EI2x();
        this.JZ4d();
        bzY6S = true;
        gS5X.oH8z("loaded meta") };
    b2x.ckd5i = function() { this.cr3x.ended = true;
        this.os8k("ended") };
    b2x.wj0x = function() { if (!this.cr3x.waiting) { this.cr3x.waiting = true;
            this.cr3x.waitTimestamp = +(new Date);
            this.os8k("waiting") } };
    b2x.JZ4d = function() { this.cr3x.waiting = false;
        this.cr3x.waitTimestamp = 0;
        this.os8k("playing") };
    b2x.ss9j = function() { this.os8k("play") };
    b2x.boG3x = function() { this.os8k("pause") };
    b2x.ckc5h = function() { if (this.cr3x.loadState != LoadState.LOADED_META) return; var bA3x = this.dA4E.getCurrentTime(); if (this.cr3x.waiting && bA3x > this.cr3x.time) { this.JZ4d() } this.cr3x.time = bA3x;
        this.os8k("timeupdate", { time: this.cr3x.time, duration: this.cr3x.duration }) };
    b2x.ri8a = function(d2x) { if (this.cr3x.loadState != LoadState.LOADED_META) return; var m2x = {}; if (d2x.data) { m2x.total = d2x.data.total;
            m2x.loaded = d2x.data.loaded } else { var xw0x = this.dA4E.getBuffered(),
                bA3x = this.dA4E.getCurrentTime(),
                nk7d = 0; for (var i = 0; i < xw0x.length; i++) { if (bA3x > xw0x.start(i) && bA3x < xw0x.end(i)) { nk7d = xw0x.end(i); break } } m2x.total = this.cr3x.duration;
            m2x.loaded = Math.min(nk7d, m2x.total) } this.os8k("progress", m2x) };
    b2x.EI2x = function() { if (this.cr3x.retry) { clearTimeout(this.cr3x.retry.tid);
            this.cr3x.retry = null } };
    b2x.ep4t = function() { var bQ3x = this.dA4E.getError();
        gS5X.bT3x("media error code: {0}, netState: {1}", bQ3x.code, this.dA4E.getNetworkState()); if (bQ3x.code == MediaError.MEDIA_ERR_NETWORK || bQ3x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) { var DO2x = l2x.blI2x(); if (!this.cr3x.retry) { this.cr3x.retry = { level: RetryLevel.NONE } } else { window.clearTimeout(this.cr3x.retry.tid) } if (this.cr3x.retry.level == RetryLevel.NONE) { if (this.bAn6h()) { this.cr3x.retry.level = RetryLevel.GET_URL;
                    this.bAo6i();
                    gS5X.oH8z("Url expired, get url.") } else { this.cr3x.retry.level = RetryLevel.RELOAD;
                    this.cr3x.retry.tid = setTimeout(this.KI4M.g2x(this), 3e3);
                    gS5X.oH8z("Reload mp3 3s later.") } } else if (this.cr3x.retry.level == RetryLevel.GET_URL) { this.cr3x.retry.level = RetryLevel.RELOAD;
                this.cr3x.retry.tid = setTimeout(this.KI4M.g2x(this), 3e3);
                gS5X.oH8z("Reload mp3 3s later.") } else if (this.cr3x.retry.level == RetryLevel.RELOAD) { this.cr3x.retry.level = RetryLevel.SWITCH_CDN; if (this.bBx6r()) { this.cr3x.retry.tid = setTimeout(this.cjU5Z.g2x(this), 5e3);
                    gS5X.oH8z("Switch CDN 5s later.") } else { this.cr3x.retry.tid = setTimeout(this.KI4M.g2x(this), 5e3);
                    gS5X.oH8z("Reload mp3 5s later.") } } else if (!bzY6S && this.dA4E.type == "audio" && !DO2x.useFlash && !cP4T.ZM9D.mac && l2x.bcz0x().supported) { DO2x.useFlash = true;
                l2x.DN2x(DO2x);
                this.cka5f("flash") } else { this.EI2x();
                this.fv5A();
                this.cr3x.error = ErrorType.NET_ERR;
                this.os8k("error", { code: this.cr3x.error });
                gS5X.bT3x("error can not retry.") } } else { this.EI2x();
            this.fv5A();
            this.cr3x.error = ErrorType.UNKNOWN_ERR;
            this.os8k("error", { code: this.cr3x.error });
            gS5X.bT3x("error can not retry.") } };
    b2x.bqt4x = function() { var hf5k = 0,
            bBE6y = 5e3; return function() { this.wj0x();
            clearTimeout(hf5k);
            setTimeout(function() { var fI5N = +(new Date); if (this.cr3x.waiting && fI5N - this.cr3x.waitTimestamp >= bBE6y && this.cr3x.stalledRetryCount < MAX_STALLED_RETRY) { gS5X.oH8z("stalled too long retry.");
                    this.cr3x.stalledRetryCount++;
                    this.KI4M() } }.g2x(this), bBE6y);
            gS5X.oH8z("stalled") } }();
    b2x.bAn6h = function() { var fI5N = +(new Date); return fI5N > this.cr3x.expireTime };
    b2x.ckb5g = function() { var bA3x = parseInt(this.cr3x.time) || 0;
        this.dA4E.setSrc(this.cr3x.playUrl + "#t=" + bA3x);
        this.cr3x.loadState = LoadState.IN_RELOAD;
        this.wj0x();
        gS5X.oH8z("recover from: {0}", bA3x) };
    b2x.os8k = function(W3x, j2x) { h2x.z2x(D2x.fm5r, "playaction", { action: W3x, data: j2x || {} }) };
    H2x.fr5w.B2x({ element: D2x.fm5r, event: ["playaction"] }) })();
(function() { if (!(window == top)) { return } var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"),
        D2x = c2x("nm.w"),
        b2x;
    D2x.EE2x = NEJ.C();
    b2x = D2x.EE2x.O3x(D2x.fm5r);
    K3x = D2x.EE2x.cg3x;
    b2x.cl3x = function() { this.cs3x() };
    b2x.cjT5Y = function(bK3x) { this.Yr9i(bK3x);
        this.eL5Q() };
    b2x.bqS4W = function() { this.fv5A() };
    b2x.vh0x = function(d2x) { if (d2x.action == "play") { this.fv5A() } };
    b2x.os8k = function(W3x, j2x) { h2x.z2x(D2x.EE2x, "tmpplayaction", { action: W3x, data: j2x || {}, tmp: true }) };
    b2x.rq8i = function() { return this.cr3x };
    H2x.fr5w.B2x({ element: D2x.EE2x, event: ["tmpplayaction"] }) })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        ff5k = c2x("nej.n"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        bd3x = c2x("nej.ui"),
        D2x = c2x("nm.w"),
        n2x = c2x("nm.l"),
        jA6u = c2x("nm.c"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K3x, ZQ9H = [{ item: "m-publish-search-single", type: 1 }, { item: "m-publish-search-artist", type: 100 }, { item: "m-publish-search-album", type: 10 }, { item: "m-publish-search-mv", type: 1004 }, { item: "m-publish-search-playlist", type: 1e3 }, { item: "m-publish-search-djRadio", type: 1009 }]; var bpK3x = { song: 0, artist: 1, album: 2, mv: 3, playlist: 4, djradio: 5 };
    D2x.bpw3x = NEJ.C();
    b2x = D2x.bpw3x.O3x(bd3x.et4x);
    b2x.cl3x = function(e2x) { this.cs3x(e2x); var i2x = a1x.I2x(this.o2x, "j-flag");
        this.cuU8M = i2x.shift();
        this.cjP5U = i2x.shift();
        this.ET2x = i2x.shift();
        this.bpr3x = i2x.shift();
        this.bpo3x = [i2x.shift(), i2x.shift(), i2x.shift(), i2x.shift(), i2x.shift(), i2x.shift()];
        this.ZA9r = i2x.shift();
        this.bCv6p = i2x.shift();
        this.qz8r = { list: this.bpo3x, selected: "z-curr", onchange: this.bCB6v.g2x(this) };
        h2x.q2x(this.ET2x, "input", this.Zo9f.g2x(this));
        h2x.q2x(this.ET2x, "propertychange", this.Zo9f.g2x(this));
        h2x.q2x(this.ET2x, "keyup", this.Zo9f.g2x(this));
        h2x.q2x(this.cjP5U, "click", this.Zo9f.g2x(this));
        h2x.q2x(this.ZA9r, "click", this.cw3x.g2x(this));
        h2x.q2x(this.bCv6p, "click", function() { this.z2x("oncancel", {}) }.g2x(this));
        this.P3x = p2x.DE2x.fX5c();
        this.Kd4h = top.nm.w.EE2x.fX5c();
        H2x.fr5w.B2x({ element: top.nm.w.EE2x, event: ["tmpplayaction"] });
        this.qK8C = { limit: 100, offset: 0, parent: this.ZA9r, onbeforelistload: this.pE8w.g2x(this) };
        p2x.sk = "fuck" + a1x.u2x(this.bpr3x, "xname") + "458";
        h2x.q2x(top.nm.w.EE2x, "tmpplayaction", this.vh0x.g2x(this)) };
    b2x.bZ3x = function() { this.ca3x = "m-xwgt-publish-search" };
    b2x.bk3x = function(e2x) { this.bl3x(e2x); if (!!this.At1x) { this.At1x.S3x();
            delete this.At1x } this.qz8r.index = bpK3x[e2x.type || "song"];
        this.At1x = H2x.DD2x.B2x(this.qz8r);
        this.ET2x.value = "";
        this.ET2x.focus();
        this.su9l = "";
        this.cuW8O = 0; if (e2x.showMV == true) { this.bpo3x[bpK3x["mv"]].parentNode.style.display = "";
            a1x.y2x(this.bpr3x, "srchtab-1") } else { this.bpo3x[bpK3x["mv"]].parentNode.style.display = "none";
            a1x.w2x(this.bpr3x, "srchtab-1") } if (!!this.du4y) { this.du4y = this.du4y.S3x() } if (e2x.hideBack) { a1x.y2x(this.bCv6p.parentNode, "f-hide") } };
    b2x.bC3x = function() { this.Kd4h.bqS4W();
        this.bH3x() };
    b2x.Zo9f = function() { var value = this.ET2x.value.trim(); if (value && value.length) { if (value != this.su9l) { this.su9l = value;
                this.bCB6v({ index: this.At1x.rL9C() }) } } else { if (this.du4y) { this.du4y = this.du4y.S3x() } } this.su9l = value };
    b2x.cw3x = function() { var cjN5S = function(E2x) { return a1x.bz3x(E2x, "sitm") || a1x.bz3x(E2x, "itm") || a1x.bz3x(E2x, "mv-item") },
            cjM5R = function(E2x) { return a1x.bz3x(E2x, "ply") },
            bCS7L = function() { n2x.Z3x.M3x({ type: 2, tip: "因合作方要求，该资源需付费使用" }) },
            cjL5Q = function() { n2x.Z3x.M3x({ type: 2, tip: "因合作方要求，该资源需下载后播放" }) },
            bmT3x = function(bf3x) { if (bf3x && bf3x.privilege && bf3x.privilege.toast) { v2x.bp3x("/api/song/toast", { query: { id: bf3x.id }, type: "json", onload: Pa6U.g2x(this), onerror: Pa6U.g2x(this) }) } else { Pc6W() } },
            Pa6U = function(Q3x) { Pc6W((Q3x || Y3x).toast) },
            Pc6W = function(bF3x) { n2x.Z3x.M3x({ type: 2, tip: bF3x || "因合作方要求，该资源暂时下架>_<" }) }; return function(d2x) { var Eg2x = h2x.U3x(d2x, cjM5R),
                i2x = h2x.U3x(d2x, cjN5S),
                dY4c = this.Kd4h.rq8i(); if (!!i2x) { h2x.bh3x(d2x);
                this.KP4T = a1x.u2x(i2x, "id");
                this.KU4Y = a1x.u2x(i2x, "type"); if (this.KU4Y == 18) { var bK3x = this.P3x.ej4n(this.KP4T),
                        pt8l = l2x.oB8t(bK3x); if (!Eg2x) { if (pt8l == 10) { bCS7L(); return } else if (pt8l == 100) { bmT3x(bK3x); return } } else { if (pt8l == 10) { bCS7L(); return } else if (pt8l == 100) { bmT3x(bK3x); return } else if (pt8l == 11) { cjL5Q(); return } else { a1x.w2x(this.Af1x, "z-pause z-loading"); if (Eg2x == this.Af1x && dY4c.play && !dY4c.ended) { this.Kd4h.bqS4W() } else { this.Af1x = Eg2x;
                                this.Kd4h.cjT5Y(bK3x) } return } } } else if (this.KU4Y == 70) { if (a1x.bz3x(i2x, "z-noprogram")) { n2x.Z3x.M3x({ type: 2, tip: "不能分享没有节目的电台" }); return } } this.cjK5P() } } }();
    b2x.cjK5P = function() { var hh5m = this.P3x.ej4n(this.KP4T),
            sk9b = l2x.bJg8Y(this.KU4Y, hh5m);
        sk9b.title = sk9b.title || "";
        sk9b.author = sk9b.author || "";
        sk9b.picUrl = sk9b.picUrl || "";
        sk9b.authors = sk9b.authors || ""; if (this.KU4Y == 70) { this.KP4T = this.KP4T.slice(0, -4) } this.z2x("onfinish", { id: this.KP4T, type: this.KU4Y, data: sk9b }) };
    b2x.vh0x = function(d2x) { var j2x = d2x.data; if (!this.Af1x) { return } switch (d2x.action) {
            case "play":
                a1x.ev4z(this.Af1x, "z-pause z-play", "z-loading"); break;
            case "pause":
            case "ended":
                a1x.w2x(this.Af1x, "z-pause z-loading"); break;
            case "error":
                n2x.Z3x.M3x({ type: 2, tip: "试听遇到问题，播放失败" });
                a1x.w2x(this.Af1x, "z-pause z-loading"); break;
            case "playing":
                a1x.ev4z(this.Af1x, "z-loading", "z-pause"); break;
            case "waiting":
                a1x.ev4z(this.Af1x, "z-pause", "z-loading"); break } };
    b2x.cjJ5O = function(d2x) { if (d2x.result.code == 407) { this.ZA9r.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>'; return } this.ZA9r.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>' };
    b2x.bCB6v = function(d2x) { if (!this.su9l || d2x.index < 0 || d2x.index > 5) { return } this.Kd4h.bqS4W(); var bc3x = ZQ9H[d2x.index],
            e2x = NEJ.X({}, this.qK8C);
        e2x.cache = { klass: p2x.DE2x, clear: true, onerror: this.cjJ5O.g2x(this) };
        e2x.cache.lkey = "search-publish-" + bc3x.type + "-" + this.su9l;
        e2x.item = { klass: bc3x.item, getRestrictLevel: l2x.oB8t, dur2time: l2x.lO7H }; if (!e2x.cache.data) { e2x.cache.data = {} } e2x.cache.data.s = this.su9l;
        e2x.cache.data.type = bc3x.type;
        e2x.cache.data.isPub = true; if (bc3x.type == 1) { e2x.cache.data.hlpretag = '<span class="s-fc7">';
            e2x.cache.data.hlposttag = "</span>" } e2x.onemptylist = this.cjH5M.g2x(this, this.su9l); if (!!this.DU2x) this.P3x.sY9P(this.DU2x); if (!!this.du4y) { this.du4y = this.du4y.S3x() } this.du4y = H2x.mX7Q.B2x(e2x);
        this.DU2x = e2x.cache.lkey };
    b2x.pE8w = function(d2x) { d2x.value = a1x.ik6e("m-publish-search-loading") };
    b2x.cjH5M = function(J3x, d2x) { a1x.dS4W(d2x.parent, "m-publish-emtpy-message", { key: J3x });
        d2x.stopped = true } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        cP4T = c2x("nej.p"),
        v2x = c2x("nej.j"),
        ch3x = c2x("nej.ut"),
        bI3x = c2x("nej.ui"),
        D2x = c2x("nm.w"),
        b2x, K3x; var cjG5L = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    D2x.DM2x = NEJ.C();
    b2x = D2x.DM2x.O3x(bI3x.et4x); var gh5m = a1x.er4v("m-wgt-receiverInput"); var cjF5K = a1x.er4v("m-wgt-receiverList"); var hQ5V = a1x.sj9a(cjG5L); var cjC5H = a1x.er4v('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b2x.cl3x = function(e2x) { this.bb3x = [];
        this.tX9O = e2x.receiver || null;
        this.cjB5G = e2x.unique || false;
        this.mv7o = e2x.err;
        this.bEb7U(this.bEd7W, e2x.uid);
        this.cs3x(e2x) };
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.LM4Q();
        this.LP4T();
        this.WX8P(); if (e2x.receiver) this.bkt2x(e2x.receiver.nickname, e2x.receiver.userId);
        a1x.X3x(this.za1x, "display", "block");
        a1x.X3x(this.bks2x, "cursor", "text");
        a1x.X3x(this.za1x, "cursor", "text") };
    b2x.bZ3x = function() { var j2x = this.bEs7l();
        this.ca3x = a1x.hM5R(a1x.bP3x(gh5m, { receiver: this.tX9O, users: j2x }));
        this.lg7Z = hQ5V };
    b2x.bR3x = function() { this.cc3x(); var bx3x = a1x.I2x(this.o2x, "j-flag"); var gB5G = a1x.I2x(this.o2x, "j-item");
        this.bks2x = bx3x[0];
        this.bEF7y = bx3x[1];
        this.dG4K = bx3x[2];
        this.za1x = bx3x[3];
        this.WJ8B = bx3x[4];
        this.bjE2x = bx3x[5];
        this.fg5l = gB5G;
        a1x.y2x(this.fg5l[0], "j-selected");
        h2x.q2x(this.dG4K, "keyup", this.bjD2x.g2x(this));
        h2x.q2x(this.dG4K, "keydown", this.Mk4o.g2x(this));
        h2x.q2x(this.dG4K, "focus", this.kd6X.g2x(this));
        h2x.q2x(this.WJ8B, "click", this.cjz5E.g2x(this));
        h2x.q2x(this.bks2x, "click", this.cjy5D.g2x(this));
        h2x.q2x(document.body, "click", this.nq7j.g2x(this));
        h2x.q2x(this.dG4K, "input", this.fo5t.g2x(this));
        h2x.q2x(this.dG4K, "blur", this.oN8F.g2x(this)) };
    b2x.bC3x = function(e2x) { h2x.mg7Z(document.body, "click", this.nq7j.g2x(this));
        this.bH3x();
        this.WX8P();
        this.cjt5y();
        this.nq7j() };
    b2x.bjD2x = function(d2x) { h2x.bh3x(d2x); var iQ6K = d2x.keyCode || d2x.which; var bi3x = this.dG4K.value; var bq3x = this.fg5l.length; var qB8t = a1x.I2x(this.o2x, "j-selected")[0]; switch (iQ6K) {
            case 13:
                var kf6Z = a1x.ga5f(qB8t, "data-username"); var hu5z = a1x.ga5f(qB8t, "data-userId");
                this.bkt2x(kf6Z, hu5z);
                this.nq7j();
                this.dG4K.value = ""; break;
            case 38:
                var s2x = a1x.ga5f(qB8t, "data-index") - 1 < 0 ? bq3x - 1 : a1x.ga5f(qB8t, "data-index") - 1;
                a1x.w2x(qB8t, "j-selected");
                a1x.y2x(this.fg5l[s2x], "j-selected"); break;
            case 40:
                var s2x = parseInt(a1x.ga5f(qB8t, "data-index")) + 1 >= bq3x ? 0 : parseInt(a1x.ga5f(qB8t, "data-index")) + 1;
                a1x.w2x(qB8t, "j-selected");
                a1x.y2x(this.fg5l[s2x], "j-selected"); break;
            default:
                this.uP0x() } };
    b2x.Mk4o = function(d2x) { var iQ6K = d2x.keyCode || d2x.which; var bi3x = this.dG4K.value; var s2x = a1x.I2x(this.o2x, "j-receiver").length - 1; if (iQ6K === 8 && bi3x === "") this.cjs5x(s2x) };
    b2x.fo5t = function(d2x) { var bi3x = this.dG4K.value; if (bi3x.length > 10) { this.dG4K.value = bi3x.substring(0, 10); return } cP4T.cR4V.browser == "ie" && cP4T.cR4V.version < "7.0" ? setTimeout(this.bhF1x.g2x(this), 0) : this.bhF1x();
        this.LP4T() };
    b2x.kd6X = function() { if (this.bb3x[0]) this.uP0x();
        else this.bEb7U(this.cjr5w);
        a1x.X3x(this.za1x, "display", "none") };
    b2x.oN8F = function() { var bq3x = a1x.I2x(this.o2x, "j-receiver").length; if (this.dG4K.value.trim() == "" && bq3x <= 0) a1x.X3x(this.za1x, "display", "block") };
    b2x.bkt2x = function(kf6Z, hu5z) { var FX3x = this.NU5Z(); if (FX3x.length >= 10) { this.dy4C(); return } var bd3x; for (bd3x = 0; bd3x < FX3x.length; bd3x++) { if (FX3x[bd3x] == hu5z) { this.nq7j(); return } } if (!kf6Z || !hu5z) return; var f2x = a1x.dt4x(a1x.hM5R(a1x.bP3x(cjC5H, { username: kf6Z, userId: hu5z }))); var bB3x = this.bEF7y.parentNode; if (this.cjB5G) { this.WX8P() } bB3x.insertBefore(f2x, this.bEF7y);
        this.dG4K.value = ""; var bq3x = a1x.I2x(this.o2x, "j-receiver").length; if (bq3x > 1) a1x.X3x(this.za1x, "display", "none");
        this.bhF1x();
        this.LP4T() };
    b2x.WX8P = function() { var Oc6W = a1x.I2x(this.o2x, "j-receiver"); var bd3x; if (Oc6W.length > 0) { for (bd3x = 0; bd3x < Oc6W.length; bd3x++) { a1x.cH4L(Oc6W[bd3x], false) } } };
    b2x.cjt5y = function() { this.dG4K.value = "" };
    b2x.cjs5x = function(s2x) { this.dy4C(!0); var Oc6W = a1x.I2x(this.o2x, "j-receiver");
        a1x.cH4L(Oc6W[s2x], false);
        this.LP4T() };
    b2x.uP0x = function() { var bi3x = this.dG4K.value; var bD3x = bi3x.trim().toLowerCase(); var j2x;
        bD3x = bD3x.replace(/\[/g, "\\[");
        bD3x = bD3x.replace(/\]/g, "\\]");
        j2x = this.bEs7l(bD3x);
        this.cjq5v(j2x) };
    b2x.nq7j = function(d2x) { a1x.X3x(this.WJ8B, "display", "none") };
    b2x.dy4C = function(gy5D) { if (gy5D && this.mv7o) { a1x.X3x(this.mv7o, "display", "none"); return } if (this.mv7o) a1x.X3x(this.mv7o, "display", "block") };
    b2x.cjz5E = function(d2x) { h2x.ce3x(d2x); var dc4g = d2x.target || d2x.srcElement; if (a1x.bz3x(dc4g, "j-flag")) return; var bB3x = dc4g.nodeName.toLowerCase() == "a" ? dc4g.parentNode : dc4g.parentNode.parentNode; var kf6Z = a1x.ga5f(bB3x, "data-username"); var hu5z = a1x.ga5f(bB3x, "data-userId");
        this.bkt2x(kf6Z, hu5z);
        this.nq7j();
        a1x.X3x(this.za1x, "display", "none") };
    b2x.cjy5D = function(d2x) { h2x.bh3x(d2x); var dc4g = d2x.target || d2x.srcElement; if (a1x.bz3x(dc4g.parentNode, "j-receiver")) { a1x.cH4L(dc4g.parentNode, false);
            this.dy4C(!0);
            this.LP4T() } else this.dG4K.focus() };
    b2x.bhF1x = function() { this.bjE2x.innerHTML = this.dG4K.value; var dn4r = this.bjE2x.offsetWidth + 2;
        a1x.X3x(this.dG4K, "width", dn4r + "px") };
    b2x.LP4T = function() { var UV8N = a1x.hJ5O(this.dG4K, this.o2x).y; var bGz7s = Math.floor((UV8N - 8) / 27); if (bGz7s < 0) return;
        a1x.X3x(this.bks2x, "height", 19 + bGz7s * 29 + "px") };
    b2x.LM4Q = function() { var py8q = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"]; for (var i = 0; i < py8q.length; i++) { a1x.X3x(this.bjE2x, py8q[i], a1x.da4e(this.dG4K, py8q[i])) } };
    b2x.bEb7U = function(dq4u, C2x) { var cU4Y = C2x ? C2x : window.GUser.userId; var V3x = "/api/user/getfollows/" + cU4Y; var fA5F = v2x.bp3x(V3x, { sync: false, method: "get", query: "offset = 0&limit=1000&order=true", onload: dq4u.g2x(this), onerror: function(j2x) { this.bb3x = [] }, onbeforerequest: function(j2x) {} }) };
    b2x.bEd7W = function(j2x) { this.bb3x = JSON.parse(j2x).follow || []; var C2x = GUser.userId; for (var i = 0; i < this.bb3x.length; i++) { if (this.bb3x[i].userId == C2x) { this.bb3x.splice(i, 1); continue } this.bb3x[i].avatarUrl = this.bb3x[i].avatarUrl + "?param=30y30" } };
    b2x.cjr5w = function(j2x) { if (this.bb3x[0]) return;
        this.bEd7W(j2x);
        this.uP0x() };
    b2x.bEs7l = function(bD3x) { var bD3x = bD3x ? bD3x : "";
        this.bb3x = this.bb3x[0] ? this.bb3x : []; var bq3x = this.bb3x.length; var Or6l = this.NU5Z(); var rE9v = []; var Oy6s, OA6u, bga1x; if (!this.bb3x[0]) return rE9v; for (var bd3x = 0; bd3x < bq3x; bd3x++) { bga1x = false; for (var v2x = 0; v2x < Or6l.length; v2x++) { if (this.bb3x[bd3x].userId == Or6l[v2x]) { bga1x = true; break } } if (bga1x) continue;
            Oy6s = this.bb3x[bd3x].nickname.toLowerCase().search(bD3x);
            OA6u = this.bb3x[bd3x].py ? this.bb3x[bd3x].py.toLowerCase().search(bD3x) : -1; if (Oy6s !== -1 || OA6u != -1) rE9v.push(this.bb3x[bd3x]) } return rE9v };
    b2x.cjq5v = function(j2x) { a1x.dS4W(this.WJ8B, cjF5K, { users: j2x });
        a1x.y2x(a1x.I2x(this.o2x, "j-item")[0], "j-selected");
        this.fg5l = a1x.I2x(this.o2x, "j-item");
        a1x.X3x(this.WJ8B, "display", "block") };
    b2x.NU5Z = function() { var rE9v = a1x.I2x(this.o2x, "j-receiver") || []; var hu5z = []; for (var i = 0; i < rE9v.length; i++) { hu5z.push(a1x.ga5f(rE9v[i], "data-id")) } return hu5z };
    b2x.cuY8Q = function() { var hu5z = this.NU5Z(); var rE9v = []; for (var i = 0; i < hu5z.length; i++) { for (var j = 0; j < this.bb3x.length; j++) { if (hu5z[i] == this.bb3x[j].userId) rE9v.push(this.bb3x[j]) } } return rE9v };
    b2x.cjo5t = function() { this.WX8P() };
    D2x.DM2x.M3x = function(e2x) { if (!GUser || !GUser.userId || GUser.userId <= 0) { n2x.nR7K.M3x({ title: "登录" }); return } e2x = e2x || {}; if (e2x.parent === undefined) e2x.parent = document.body;!!this.eK5P && this.eK5P.S3x();
        this.eK5P = this.B2x(e2x) };
    D2x.DM2x.bo3x = function() {!!this.eK5P && this.eK5P.S3x() };
    D2x.DM2x.Dl2x = function() { return this.nq7j() };
    D2x.DM2x.cva8S = function() { return this.uP0x() } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        b2x, K3x;
    n2x.Go3x = NEJ.C();
    b2x = n2x.Go3x.O3x(n2x.beV1x);
    K3x = n2x.Go3x.cg3x;
    b2x.bk3x = function() { var Dk2x; var cjj5o = function(A2x, J3x) { Dk2x = Dk2x || []; if (J3x != "18") Dk2x.push({ key: J3x, value: A2x }) }; return function(e2x) { this.bl3x(e2x); if (e2x.upwards) { a1x.y2x(this.o2x, "m-emts-up") } else { a1x.w2x(this.o2x, "m-emts-up") } if (e2x.rightwards) { a1x.y2x(this.o2x, "m-emts-right") } else { a1x.w2x(this.o2x, "m-emts-right") } if (!Dk2x) { var bv3x = l2x.cpz6t();
                k2x.ee4i(bv3x, cjj5o) } var bq3x = Dk2x.length;
            Dk2x.splice(bq3x - 2, 0, { key: "18", value: "186" });
            this.Uf7Y = Dk2x;
            this.cji5n = !!e2x.autoHide } }();
    b2x.bZ3x = function() { this.ca3x = "ntp-portrait" };
    b2x.bR3x = function() { this.cc3x(); var i2x = a1x.I2x(this.o2x, "j-flag");
        this.bG3x = i2x[0];
        this.cjh5m = i2x[1];
        this.cjg5l = i2x[2];
        this.cjf5k = i2x[3];
        h2x.q2x(this.bG3x, "click", this.xA0x.g2x(this));
        h2x.q2x(this.cjh5m, "click", this.Dg2x.g2x(this, 1));
        h2x.q2x(this.cjf5k, "click", this.Dg2x.g2x(this, 2)) };
    b2x.beM1x = function(s2x) { this.TT7M = s2x; var bj3x = (s2x - 1) * 50; var i2x = this.Uf7Y.slice(bj3x, Math.min(bj3x + 50, this.Uf7Y.length));
        this.bG3x.innerHTML = a1x.bP3x("jst-portrait", { plist: i2x }, { purl: l2x.bAj6d });
        this.cjg5l.innerText = s2x + "/" + Math.ceil(this.Uf7Y.length / 50) };
    b2x.Dg2x = function(s2x) { var cje5j = Math.ceil(this.Uf7Y.length / 50); if (s2x == 1 && this.TT7M == 1 || s2x == 2 && this.TT7M == cje5j) return;
        s2x == 1 ? this.beM1x(this.TT7M - 1) : this.beM1x(this.TT7M + 1) };
    b2x.xA0x = function(d2x) { var E2x = h2x.U3x(d2x, "d:text"); if (!E2x) return; var d2x = { url: a1x.u2x(E2x, "url"), text: a1x.u2x(E2x, "text") };
        this.z2x("onselect", d2x); if (this.cji5n && !d2x.stopped) { this.bo3x() } };
    b2x.M3x = function() { K3x.M3x.call(this);
        this.beM1x(1) } })();
(function() { var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        cP4T = c2x("nej.p"),
        ba3x = c2x("nej.h"),
        H2x = c2x("nej.ut"),
        jh6b = /^[#?]+/,
        BQ1x = /#(.*?)$/,
        xB0x = window,
        bey1x = !history.pushState || cP4T.ZM9D.android || !history.auto; var TN7G = function(V3x, bdW1x) { xB0x.history[!bdW1x ? "pushState" : "replaceState"](null, document.title, V3x) }; var Tx7q = function() { return location.parse(xB0x.location.href) };
    TN7G = TN7G.ec4g(function(d2x) { if (!bey1x) return; var bg3x = d2x.args;
        d2x.stopped = !0;
        V3x = bg3x[0].replace(jh6b, "");!bg3x[1] ? xB0x.location.hash = V3x : xB0x.location.replace("#" + V3x) });
    Tx7q = Tx7q.ec4g(function(d2x) { if (!bey1x) return;
        d2x.stopped = !0; var dI4M = BQ1x.test(xB0x.location.href) ? RegExp.$1 : "";
        d2x.value = location.parse(dI4M.replace(jh6b, "")) });
    location.redirect = function(V3x, bdW1x) { TN7G(V3x, bdW1x); return this };
    location.active = function() { var eZ5e, V3x, iG6A, cC4G, Nm5r; var bdu0x = function(iv6p) { if (!!cC4G) { cC4G = !1; return } var d2x = { oldValue: iG6A, newValue: Tx7q() }; if (!!location.ignored) { location.ignored = !1 } else { h2x.z2x(location, "beforeurlchange", d2x); if (d2x.stopped) { if (!!iG6A) { cC4G = !0;
                        TN7G(iG6A.href, !0) } return } } V3x = xB0x.location.href;
            iG6A = d2x.newValue;
            h2x.z2x(location, "urlchange", iG6A);
            ba3x.boA3x(iG6A.href) }; var bII8A = function() { if (V3x != xB0x.location.href) bdu0x();
            eZ5e = requestAnimationFrame(bII8A) }; return function(bL3x) { if (!!Nm5r) return this;
            Nm5r = !0;
            xB0x = bL3x || window; if (bey1x && "onhashchange" in window && cP4T.mp7i.trident2) { h2x.q2x(xB0x, "hashchange", bdu0x);
                bdu0x() } else if (!eZ5e) { eZ5e = requestAnimationFrame(bII8A) } return this } }();
    location.parse = function() { var fU5Z = /^https?:\/\/.*?\//i,
            jh6b = /[?#]/; return function(V3x) { var m2x = { href: V3x };
            V3x = (V3x || "").replace(fU5Z, "/").split(jh6b); var cu3x = 1; if (V3x[0] == "/" && (V3x[1] || "").indexOf("/") == 0) cu3x = 2;
            m2x.path = V3x.splice(0, cu3x).join("?");
            m2x.query = k2x.ho5t(V3x.join("&")); return m2x } }();
    location.same = function(V3x) { return Tx7q().href == V3x };
    H2x.fr5w.B2x({ element: location, event: ["beforeurlchange", "urlchange"] }) })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        fG5L = c2x("nm.ut");
    fG5L.ti9Z = function(ez4D) { var gs5x = { text: "", start: 0, end: 0 }; if (ez4D.setSelectionRange) { gs5x.start = ez4D.selectionStart;
            gs5x.end = ez4D.selectionEnd;
            gs5x.text = gs5x.start != gs5x.end ? ez4D.value.substring(gs5x.start, gs5x.end) : "" } else if (document.selection) { var i, Td7W = document.selection.createRange(),
                xP0x = document.body.createTextRange();
            xP0x.moveToElementText(ez4D);
            gs5x.text = Td7W.text;
            gs5x.bookmark = Td7W.getBookmark(); for (i = 0; xP0x.compareEndPoints("StartToStart", Td7W) < 0 && Td7W.moveStart("character", -1) !== 0; i++) { if (ez4D.value.charAt(i) == "\n") { i++ } } gs5x.start = i;
            gs5x.end = gs5x.text.length + gs5x.start } return gs5x };
    fG5L.Tc7V = function(ez4D, gs5x) { var xP0x; if (!gs5x) { gs5x = { text: "", start: 0, end: 0 } } ez4D.focus(); if (ez4D.setSelectionRange) { ez4D.setSelectionRange(gs5x.start, gs5x.end) } else if (ez4D.createTextRange) { xP0x = ez4D.createTextRange(); if (ez4D.value.length === gs5x.start) { xP0x.collapse(false);
                xP0x.select() } else { xP0x.moveToBookmark(gs5x.bookmark);
                xP0x.select() } } };
    fG5L.GJ3x = function(ez4D, gs5x, cZ4d) { var gs5x = gs5x || { text: "", start: 0, end: 0 }; var bcJ0x, bJu8m, xP0x, PW6Q, bJx8p, bJy8q, CX2x;
        this.Tc7V(ez4D, gs5x); if (ez4D.setSelectionRange) { bcJ0x = ez4D.value;
            bJu8m = bcJ0x.substring(0, gs5x.start) + cZ4d + bcJ0x.substring(gs5x.end);
            bJx8p = bJy8q = gs5x.start + cZ4d.length;
            CX2x = ez4D.scrollTop;
            ez4D.value = bJu8m; if (ez4D.scrollTop != CX2x) { ez4D.scrollTop = CX2x } ez4D.setSelectionRange(bJx8p, bJy8q) } else if (ez4D.createTextRange) { PW6Q = document.selection.createRange();
            PW6Q.text = cZ4d;
            PW6Q.setEndPoint("StartToEnd", PW6Q);
            PW6Q.select() } h2x.z2x(ez4D, "keyup") } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        cP4T = c2x("nej.p"),
        k2x = c2x("nej.u"),
        ch3x = c2x("nej.ut"),
        D2x = c2x("nm.w"),
        fG5L = c2x("nm.ut"),
        b2x;
    D2x.bJB8t = NEJ.C();
    b2x = D2x.bJB8t.O3x(ch3x.cy3x);
    b2x.cl3x = function(e2x) { this.cs3x(e2x) };
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.fM5R = e2x.txt;
        this.CS2x = e2x.sgtsContainer;
        this.bJK8C = e2x.sgtsList[0];
        this.Sm7f = e2x.sgtsItem;
        this.nY8Q = e2x.rangeData;
        this.GR3x = e2x.atIndex;
        a1x.y2x(this.Sm7f[0], "selected-item");
        this.Qu6o() };
    b2x.bC3x = function() { this.bH3x();
        h2x.mg7Z(document.body, "keyup", this.bJR8J.g2x(this));
        h2x.mg7Z(document.body, "click", this.bJV8N.g2x(this)) };
    b2x.Qu6o = function() { this.bU3x([
            [document.body, "keyup", this.bJR8J.g2x(this)],
            [document.body, "click", this.bJV8N.g2x(this)],
            [this.fM5R, "keydown", this.bJW8O.g2x(this)],
            [this.fM5R, "keypress", this.bJW8O.g2x(this)],
            [this.bJK8C, "click", this.bKa8S.g2x(this)],
            [this.bJK8C, "mouseover", this.CQ2x.g2x(this)]
        ]) };
    b2x.CQ2x = function(d2x) { var dc4g = h2x.U3x(d2x); var r2x = a1x.I2x(this.CS2x, "selected-item"); if (a1x.bz3x(dc4g, "j-sgt")) { a1x.w2x(r2x[0], "selected-item");
            a1x.y2x(dc4g, "selected-item") } };
    b2x.bJR8J = function(d2x) { var r2x = a1x.I2x(this.CS2x, "selected-item"); var bq3x = this.Sm7f.length; var iQ6K = d2x.keyCode || d2x.which; var s2x, j2x; switch (iQ6K) {
            case 38:
                s2x = a1x.ga5f(r2x[0], "data-index") - 1 < 0 ? bq3x - 1 : a1x.ga5f(r2x[0], "data-index") - 1;
                a1x.w2x(r2x[0], "selected-item");
                a1x.y2x(this.Sm7f[s2x], "selected-item"); break;
            case 40:
                s2x = parseInt(a1x.ga5f(r2x[0], "data-index")) + 1 >= bq3x ? 0 : parseInt(a1x.ga5f(r2x[0], "data-index")) + 1;
                a1x.w2x(r2x[0], "selected-item");
                a1x.y2x(this.Sm7f[s2x], "selected-item"); break;
            case 13:
                this.bKa8S(d2x); break;
            case 27:
                this.nq7j(); break;
            case 32:
                var bi3x = this.fM5R.value; var s2x = fG5L.ti9Z(this.fM5R); if (bi3x.charAt(s2x.start - 1) !== " ") return;
                this.nq7j(); break } };
    b2x.bJW8O = function(d2x) { var iQ6K = d2x.keyCode || d2x.which; if (iQ6K === 13 || iQ6K === 38 || iQ6K === 40) { h2x.ce3x(d2x);
            d2x.keyCode = 0;
            d2x.which = 0;
            d2x.returnvalue = false } };
    b2x.bJV8N = function(d2x) { var dc4g = d2x.target || d2x.srcElement; if (dc4g === this.fM5R) return;
        this.nq7j() };
    b2x.bKa8S = function(d2x) { h2x.bh3x(d2x); var r2x = a1x.I2x(this.CS2x, "selected-item")[0]; var qB8t = d2x.target || d2x.srcElement; var t2x = d2x.type; if (a1x.bz3x(qB8t, "lst")) return; if (t2x == "click") { a1x.w2x(r2x, "selected-item");
            a1x.y2x(qB8t, "selected-item") } else qB8t = r2x; var j2x = qB8t.innerHTML + " ";
        this.nq7j(); var gs5x = this.nY8Q;
        gs5x.start = this.GR3x + 1; if (cP4T.cR4V.browser == "ie" && cP4T.cR4V.version < "9.0") { this.fM5R.value = this.fM5R.value.substring(0, gs5x.start) + this.fM5R.value.substring(gs5x.end, this.fM5R.value.length);
            gs5x.end = gs5x.start } fG5L.GJ3x(this.fM5R, gs5x, j2x);
        h2x.z2x(this.fM5R, "keyup") };
    b2x.nq7j = function(d2x) { if (!!this.CS2x) a1x.X3x(this.CS2x, "display", "none");
        this.S3x() };
    b2x.uP0x = function(d2x) { if (!!this.CS2x) a1x.X3x(this.CS2x, "display", "block") } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        D2x = c2x("nm.w"),
        ch3x = c2x("nej.ut"),
        bI3x = c2x("nej.ui"),
        b2x; var cjc5h = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}"; var cjb5g = a1x.er4v("m-wgt-atlist"); var hQ5V = a1x.sj9a(cjc5h);
    D2x.bKe8W = NEJ.C();
    b2x = D2x.bKe8W.O3x(bI3x.et4x);
    b2x.cl3x = function(e2x) { this.fB5G = {};
        this.cs3x() };
    b2x.bk3x = function(e2x) { this.fB5G.txt = a1x.x2x(e2x.target);
        this.fB5G.data = e2x.data;
        this.fB5G.offset = e2x.offset;
        this.fB5G.rangeData = e2x.rangeData;
        this.fB5G.atIndex = e2x.atIndex;
        this.ciZ5e(e2x);
        this.bl3x(e2x);
        this.fB5G.sgtsContainer = this.o2x;
        this.fB5G.sgtsList = a1x.I2x(this.o2x, "lst");
        this.fB5G.sgtsItem = a1x.I2x(this.o2x, "f-thide");
        this.RC7v(e2x);
        this.ciY5d = D2x.bJB8t.B2x(this.fB5G) };
    b2x.bC3x = function(e2x) { this.bH3x();
        this.ciY5d.S3x() };
    b2x.bZ3x = function() { this.lg7Z = hQ5V };
    b2x.bR3x = function() { this.cc3x() };
    b2x.ciZ5e = function(e2x) { this.o2x = a1x.dt4x(a1x.hM5R(a1x.bP3x(cjb5g, e2x.data))) };
    b2x.RC7v = function(e2x) { var bKj8b = a1x.I2x(this.o2x, "selected-item")[0]; if (bKj8b) a1x.w2x(bKj8b, "selected-item"); var cO4S = e2x.offset.x + "px"; var gI5N = e2x.offset.y + "px";
        a1x.X3x(this.o2x, "left", cO4S);
        a1x.X3x(this.o2x, "top", gI5N) } })();
(function() { var c2x = NEJ.P,
        v2x = c2x("nej.j"),
        fG5L = c2x("nm.ut");
    fG5L.bKk8c = function(bi3x) { if (!GUser || !GUser.userId || GUser.userId <= 0) return; var cM4Q = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g; var GX3x = bi3x.match(cM4Q) || []; for (var bd3x = 0; bd3x < GX3x.length; bd3x++) { GX3x[bd3x] = GX3x[bd3x].split("@")[1] } GX3x = GX3x.reverse(); var hu5z = GUser.userId; var ciW5b = v2x.th9Y("mentioners" + hu5z) || []; var iP6J = GX3x.concat(ciW5b); if (iP6J.length > 10) iP6J = iP6J.slice(0, 10);
        v2x.vs0x("mentioners" + hu5z, iP6J) };
    fG5L.ciU5Z = function() { if (!GUser || !GUser.userId || GUser.userId <= 0) return; var hu5z = GUser.userId; return v2x.th9Y("mentioners" + hu5z) || [] } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        cP4T = c2x("nej.p"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        ch3x = c2x("nej.ut"),
        D2x = c2x("nm.w"),
        fG5L = c2x("nm.ut"),
        b2x;
    D2x.bKz8r = NEJ.C();
    b2x = D2x.bKz8r.O3x(ch3x.cy3x);
    b2x.cl3x = function(e2x) { this.cs3x(e2x);
        this.bKA8s() };
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.fM5R = e2x.txt;
        this.o2x = e2x.body;
        this.bKB8t = e2x.before;
        this.Kt4x = e2x.flag;
        this.ciT5Y = e2x.after;
        this.pK8C = []; if (cP4T.cR4V.browser != "ie") { setTimeout(function() { this.kS7L() }.g2x(this), 0) } this.Qu6o() };
    b2x.bC3x = function() { this.bH3x(); if (this.to9f) this.to9f.S3x();
        delete this.to9f };
    b2x.Qu6o = function() { this.bU3x([
            [this.fM5R, "keyup", this.bKN8F.g2x(this, this.fM5R)],
            [this.fM5R, "click", this.bKN8F.g2x(this, this.fM5R)],
            [this.fM5R, "focus", this.kS7L.g2x(this)]
        ]) };
    b2x.kS7L = function(d2x) { this.nY8Q = fG5L.ti9Z(this.fM5R) };
    b2x.bKA8s = function() { if (!GUser || !GUser.userId || GUser.userId <= 0) { window.GFollowers = []; return } var cU4Y = window.GUser.userId; var V3x = "/api/user/getfollows/" + cU4Y; var fA5F = v2x.bp3x(V3x, { sync: false, method: "get", query: "offset = 0&limit=1000&order=true", onload: function(j2x) { window.GFollowers = JSON.parse(j2x).follow }.g2x(this), onerror: function(j2x) {}, onbeforerequest: function(j2x) {} }) };
    b2x.bKS8K = function(index) { var A2x = this.fM5R.value,
            bj3x, boT3x, boO3x, Rn7g;
        this.bKB8t.innerHTML = k2x.dL4P(A2x.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>'); var nj7c = a1x.I2x(this.bKB8t, "j-test"); for (var bd3x = 0; bd3x < nj7c.length; bd3x++) { nj7c[bd3x].innerText = " " } this.Kt4x.innerHTML = A2x.charAt(index);
        this.ciT5Y.innerHTML = k2x.dL4P(A2x.substr(index + 1, A2x.length));
        Rn7g = parseInt(a1x.da4e(this.fM5R, "lineHeight"));
        a1x.X3x(this.o2x, "display", "block");
        boT3x = a1x.hJ5O(this.Kt4x, this.o2x);
        boO3x = a1x.hJ5O(this.fM5R);
        a1x.X3x(this.o2x, "display", "none"); var cO4S = boT3x.x + boO3x.x; var gI5N = boT3x.y + boO3x.y + Rn7g;
        bj3x = { x: cO4S, y: gI5N };
        this.ciQ5V(bj3x) };
    b2x.bKN8F = function(ez4D, d2x) { h2x.ce3x(d2x); var ez4D = ez4D; var A2x = ez4D.value; var bq3x = A2x.length; var s2x = fG5L.ti9Z(ez4D).start; var bKY8Q = 0; var iQ6K = d2x.keyCode || d2x.which; var iP6J;
        this.nY8Q = fG5L.ti9Z(ez4D); var bKZ8R = false; for (var i = 1; i < 20; i++) { iP6J = s2x - i; if (A2x.charAt(iP6J) === " ") break; if (A2x.charAt(iP6J) === "@") { bKZ8R = true;
                this.GR3x = bKY8Q = iP6J; break } } if (bKZ8R && d2x.shiftKey === false && iQ6K !== 38 && iQ6K !== 40) { if (iQ6K !== 27 && iQ6K !== 13) { this.to9f ? this.to9f.S3x() : null;
                this.bKS8K(bKY8Q) } } else if (iQ6K !== 38 && iQ6K !== 40 && d2x.keyCode !== 32) { this.to9f ? this.to9f.S3x() : null } };
    b2x.ciQ5V = function(bj3x) { var bj3x = bj3x; var j2x = this.Hh3x(); var e2x = { parent: document.body, offset: bj3x, data: j2x, target: this.fM5R, rangeData: this.nY8Q, atIndex: this.GR3x };
        this.to9f ? this.to9f.S3x() : null;
        this.to9f = D2x.bKe8W.B2x(e2x) };
    b2x.Hh3x = function() { var ciP5U = fG5L.ti9Z(this.fM5R).start; var ciO5T = this.GR3x + 1; var bLh9Y = fG5L.ciU5Z() || []; var bLk9b = []; var bD3x = this.fM5R.value.substring(ciO5T, ciP5U).toLowerCase();
        bD3x = bD3x.replace(/\[/g, "\\[");
        bD3x = bD3x.replace(/\]/g, "\\]"); if (window.GFollowers) { this.pK8C = window.GFollowers[0] ? window.GFollowers : [] } else this.pK8C = []; if (!this.pK8C[0]) this.bKA8s(); for (var bd3x = 0; bd3x < bLh9Y.length; bd3x++) { for (var v2x = 0; v2x < this.pK8C.length; v2x++) { if (this.pK8C[v2x].nickname == bLh9Y[bd3x]) bLk9b.push(this.pK8C[v2x]) } } this.pK8C = k2x.bYc2x(this.pK8C, bLk9b, { union: true, begin: true }); var ciN5S = this.pK8C.length; var RH7A = []; var Oy6s, OA6u; if (!this.pK8C[0]) return { suggests: RH7A }; for (var i = 0; i < ciN5S; i++) { Oy6s = this.pK8C[i].nickname.toLowerCase().search(bD3x);
            OA6u = this.pK8C[i].py ? this.pK8C[i].py.toLowerCase().search(bD3x) : -1; if (Oy6s !== -1 || OA6u != -1) RH7A.push(this.pK8C[i]); if (RH7A.length === 10) break } return { suggests: RH7A } };
    b2x.QL6F = function() { var gs5x = this.nY8Q || { text: "", start: 0, end: 0 };
        h2x.z2x(this.fM5R, "focus");
        fG5L.GJ3x(this.fM5R, gs5x, "@");
        this.nY8Q = fG5L.ti9Z(this.fM5R);
        this.GR3x = gs5x.start;
        this.bKS8K(this.GR3x) };
    b2x.Dl2x = function() { if (this.to9f) this.to9f.S3x() } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        D2x = c2x("nm.w"),
        ch3x = c2x("nej.ut"),
        bI3x = c2x("nej.ui"),
        b2x; var ciL5Q = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}"; var ciJ5O = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>'; var gh5m = a1x.hM5R(ciJ5O); var hQ5V = a1x.sj9a(ciL5Q);
    D2x.QD6x = NEJ.C();
    b2x = D2x.QD6x.O3x(bI3x.et4x);
    b2x.cl3x = function(e2x) { this.fB5G = {};
        this.cs3x() };
    b2x.bk3x = function(e2x) { this.bl3x(e2x);
        this.fB5G.txt = a1x.x2x(e2x.target);
        this.LM4Q();
        this.QC6w = D2x.bKz8r.B2x(this.fB5G) };
    b2x.bC3x = function(e2x) { this.bH3x();
        this.QC6w.S3x() };
    b2x.bZ3x = function() { this.ca3x = gh5m;
        this.lg7Z = hQ5V };
    b2x.bR3x = function() { this.cc3x(); var i2x = a1x.cQ4U(a1x.x2x(this.o2x));
        this.fB5G.body = this.o2x;
        this.fB5G.before = i2x[0];
        this.fB5G.flag = i2x[1];
        this.fB5G.after = i2x[2] };
    b2x.LM4Q = function() { var py8q = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"]; for (var i = 0; i < py8q.length; i++) { if (py8q[i] === "width" && a1x.da4e(this.fB5G.txt, py8q[i]) == "100%") { a1x.X3x(this.o2x, py8q[i], this.fB5G.txt.offsetWidth + "px"); continue } a1x.X3x(this.o2x, py8q[i], a1x.da4e(this.fB5G.txt, py8q[i])) } };
    b2x.QL6F = function() { this.QC6w.QL6F() };
    b2x.Dl2x = function() { this.QC6w.Dl2x() } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        eU5Z = NEJ.R,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        jA6u = c2x("nm.c"),
        R3x = {},
        b2x; if (!!jA6u.blh2x) return;
    jA6u.blh2x = NEJ.C();
    b2x = jA6u.blh2x.O3x(H2x.cy3x);
    b2x.cl3x = function() { this.cs3x() };
    b2x.bk3x = function(e2x) { this.bl3x(e2x) };
    b2x.bC3x = function() { this.bH3x() };
    b2x.CG2x = function(eJ5O, dq4u, SM7F) { if (R3x[eJ5O]) { this.hs5x("register commonJST[" + eJ5O + "] duplicate"); return } if (!k2x.gb5g(dq4u)) { dq4u = ctl.comJST.ciI5N(eJ5O, dq4u, SM7F) } R3x[eJ5O] = dq4u };
    b2x.ciH5M = function(To7h) { if (k2x.en4r(To7h)) { k2x.be3x(To7h, function(r2x) { ctl.comJST.CG2x.apply(this, r2x) }, this) } else if (k2x.ke6Y(To7h)) { k2x.ee4i(To7h, function(eO5T, J3x) { ctl.comJST.CG2x(J3x, eO5T) }) } };
    b2x.ciI5N = function(eJ5O, tq9h, SM7F) { tq9h = tq9h || {};
        NEJ.X(tq9h, { comJST: this.nM7F }); if (tq9h.resetDataName && !k2x.en4r(tq9h.resetDataName)) { tq9h.resetDataName = [tq9h.resetDataName] } return function() { var j2x = arguments[0],
                iT6N = arguments[1]; if (tq9h.resetDataName) { var iP6J = {}; for (var i = 0, ii = tq9h.resetDataName.length; i < ii; i++) { iP6J[tq9h.resetDataName[i]] = arguments[i] } j2x = iP6J;
                iT6N = arguments[ii] } NEJ.X(j2x, tq9h, dE4I); if (SM7F) { iT6N = iT6N || {};
                NEJ.X(iT6N, SM7F) } return a1x.bP3x(eJ5O, j2x, iT6N) } };
    b2x.nM7F = function(eJ5O) { if (!R3x[eJ5O]) { this.hs5x("commonJST[" + eJ5O + "] is unregister"); return "" } else { return R3x[eJ5O].apply(null, eU5Z.slice.call(arguments, 1)) } };
    b2x.dump = function() { return R3x };
    b2x.hs5x = function(ciF5K) { if (console && console.log) { console.log(ciF5K) } }; var dE4I = function(eO5T, J3x) { return J3x == "resetDataName" };
    c2x("ctl").comJST = jA6u.blh2x.fX5c() })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        bm3x = NEJ.F,
        eU5Z = NEJ.R,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        jA6u = c2x("nm.c"),
        R3x = {},
        b2x; if (!!jA6u.bhJ2x) return;
    jA6u.bhJ2x = NEJ.C();
    b2x = jA6u.bhJ2x.O3x(H2x.cy3x);
    b2x.cl3x = function() { this.cs3x(); var e2x = { "com-mv-artists": function(fl5q, dK4O, Ez2x, bhB1x) { return a1x.bP3x("com-mv-artists", { artists: fl5q, clazz: dK4O, boxClazz: bhB1x, mark: Ez2x || function(cK4O) { return cK4O }, escape: k2x.dL4P, comJST: ctl.comJST.nM7F }) }, "com-album-artists": function(fl5q, dK4O, Ez2x, bhB1x) { return a1x.bP3x("com-album-artists", { artists: fl5q, clazz: dK4O, boxClazz: bhB1x, mark: Ez2x || function(cK4O) { return cK4O }, escape: k2x.dL4P, comJST: ctl.comJST.nM7F }) }, "com-artists-title": { resetDataName: ["artists"], escape: k2x.dL4P } }; for (var C2x in e2x) { ctl.comJST.CG2x(C2x, e2x[C2x]) } };
    b2x.bk3x = function(e2x) { this.bl3x(e2x) };
    b2x.bC3x = function() { this.bH3x() };
    c2x("ctl").comJSTUtil = jA6u.bhJ2x.fX5c() })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        a1x = c2x("nej.e"),
        cP4T = c2x("nej.p"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        D2x = c2x("nm.w"),
        fG5L = c2x("nm.ut"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        Ua7T = [2, 3],
        dD4H = ["sn", "db"],
        b2x, K3x, ciE5J = { 13: "playlist", 17: "djprogram", 18: "song", 19: "album", 20: "artist", 21: "mv", 24: "topic", 25: "activity", 70: "djradio", 38: "concert", 39: "video" },
        Uh8Z = { djprogram: "节目", album: "专辑", playlist: "歌单", song: "单曲", yunsong: "单曲", artist: "歌手", mv: "MV", topic: "音乐专栏", djradio: "电台", concert: "演出", video: "视频" },
        bLZ9Q = { djprogram: " - ", album: " - ", playlist: " by ", song: " - ", yunsong: " - ", artist: "", mv: " - ", djradio: " by " },
        ciC5H = { 0: 13, 1: 17, 3: 19, 4: 18, 5: 21, 6: 24, 14: 70, 17: 20 },
        CC2x = { pubEventWithPics: false, pubEventWithoutResource: false, pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片" };
    n2x.vZ0x = NEJ.C();
    b2x = n2x.vZ0x.O3x(n2x.dW4a);
    K3x = n2x.vZ0x.cg3x;
    b2x.bk3x = function(e2x) { if (e2x.onclose === undefined) { e2x.onclose = this.bMi9Z.g2x(this) } this.bl3x(e2x);
        this.yR1x = e2x.isPub;
        this.jH6B = e2x.rid || -1;
        this.eg4k = e2x.type || -1;
        this.bgi1x = e2x.purl;
        this.Uu8m = e2x.name || "";
        this.OK6E = e2x.author || "";
        this.beY1x = e2x.authors || "";
        this.UA8s = e2x.actId;
        this.UG8y = e2x.actName;
        this.bMG9x = e2x.title;
        this.UK8C = {};
        this.ciB5G = e2x.mesg || "";
        this.ciA5F = e2x.placeholder || "说点什么吧";
        this.bda0x = e2x.hideTip; var i2x, fI5N = +(new Date); try { i2x = top.localCache.x2x("user") || {} } catch (e) { i2x = {} } for (var i = 0, i2x = i2x.bindings || [], eu4y; i < i2x.length; ++i) { eu4y = !i2x[i].tokenJsonStr ? null : JSON.parse(i2x[i].tokenJsonStr); if (!eu4y || eu4y.expires_in === undefined) continue; var Ve8W = parseInt(eu4y.expires_in),
                Vh8Z = parseInt(i2x[i].refreshTime),
                ciz5E = (Ve8W + Vh8Z) * 1e3 - 5 * 60 * 1e3; if (ciz5E > fI5N) this.UK8C[i2x[i].type] = !0 } this.tX9O = D2x.DM2x.B2x({ parent: this.Vk8c, err: this.bNd9U }); if (this.gL5Q) { this.gL5Q.S3x() } this.gL5Q = D2x.QD6x.B2x({ parent: document.body, target: this.eR5W }); if (this.eg4k == 24 || this.eg4k == 21 || this.tE9v()) { this.wP0x.style.display = "none" } else { this.wP0x.style.display = "";
            this.nE7x = D2x.bbm0x.B2x({ parent: this.bbj0x, button: this.wP0x, onstartupload: this.bNt9k.g2x(this, true), onfinishupload: this.bNt9k.g2x(this, false) }) } if (this.tE9v()) { this.of8X.innerText = "";
            a1x.y2x(this.of8X, "info-video");
            this.Ig3x = D2x.bNA9r.B2x({ parent: this.of8X, windowBody: this.o2x, onstepping: this.ciy5D.g2x(this), oncancel: function() { this.bo3x() }.g2x(this) }); if (e2x.extError) { this.Ig3x.baY0x({ agent: e2x.videoUploadAgent, errorCode: -600 }) } else { this.Ig3x.FM3x({ agent: e2x.videoUploadAgent, fileName: e2x.videoFileName }) } a1x.y2x(this.baV0x, "f-hide") } else { a1x.w2x(this.baV0x, "f-hide") } };
    b2x.bC3x = function() { this.bH3x(); if (this.tX9O) { this.tX9O.S3x();
            delete this.tX9O } if (this.gL5Q) { this.gL5Q.S3x();
            delete this.gL5Q } if (this.nE7x) { this.nE7x.S3x();
            delete this.nE7x } if (this.lQ7J) { this.lQ7J.S3x();
            delete this.lQ7J } };
    b2x.bZ3x = function() { this.ca3x = "m-wgt-sharewin" };
    b2x.bR3x = function() { this.cc3x();
        this.bNi9Z = a1x.cQ4U(this.o2x)[0]; var bn3x = a1x.I2x(this.o2x, "j-flag");
        this.pG8y = bn3x.shift();
        this.bNd9U = bn3x.shift();
        this.Vk8c = bn3x.shift();
        this.eR5W = bn3x.shift();
        this.of8X = bn3x.shift();
        this.brc4g = bn3x.shift();
        this.ciw5B = bn3x.shift();
        this.wP0x = bn3x.shift();
        this.ci3x = bn3x.shift();
        this.bbj0x = bn3x.shift();
        this.yl0x = bn3x.shift();
        this.cvb8T = bn3x.shift();
        this.baV0x = bn3x.shift();
        this.ea4e = bn3x.shift();
        this.Ir3x = a1x.I2x(this.baV0x, "j-t");
        this.At1x = H2x.DD2x.B2x({ list: a1x.cQ4U(this.pG8y), selected: "z-slt", onchange: this.bpj3x.g2x(this) }); if (cP4T.cR4V.browser == "ie" && cP4T.cR4V.version < "8.0") { a1x.X3x(this.Vk8c, "position", "relative");
            a1x.X3x(this.Vk8c, "zIndex", "10") } h2x.q2x(window, "snsbind", this.Nk5p.g2x(this));
        h2x.q2x(this.eR5W, "input", this.fo5t.g2x(this));
        h2x.q2x(this.eR5W, "keyup", this.tn9e.g2x(this));
        h2x.q2x(this.o2x, "click", this.cw3x.g2x(this));
        this.P3x = p2x.bqC4G.B2x();
        this.P3x.q2x("onshareall", this.VV8N.g2x(this, 0));
        this.P3x.q2x("onshareerror", this.hU5Z.g2x(this));
        this.P3x.q2x("onshareprivate", this.VV8N.g2x(this, 1));
        this.VW8O = p2x.yw1x.B2x();
        this.hs5x = p2x.hL5Q.B2x(); try { this.MZ5e = top.api.sharePermission } catch (e) {} if (!this.MZ5e) { this.MZ5e = CC2x;
            v2x.bp3x("/api/event/user/permission", { type: "json", onload: function(d2x) { if (d2x.code == 200) { this.MZ5e = NEJ.EX(CC2x, d2x) } }.g2x(this) }) } };
    b2x.bpj3x = function(d2x) { d2x.index == 0 ? a1x.w2x(this.bNi9Z, "m-plshare") : a1x.y2x(this.bNi9Z, "m-plshare");
        this.Vk8c.style.display = d2x.index == 0 ? "none" : "";
        this.ciw5B.style.display = d2x.index == 0 ? "" : "none";
        this.wP0x.style.display = d2x.index == 0 ? "" : "none"; if (this.eg4k == 24 || this.eg4k == 21) { this.wP0x.style.display = "none" } this.bNd9U.style.display = "none";
        this.eR5W.value = "";
        this.bT3x();
        this.BL1x(); if (d2x.index == 0) { var dn4r = a1x.da4e(this.eR5W, "width"); if (dn4r == "auto" || !dn4r) { return } else { if (this.gL5Q) { this.gL5Q.S3x() } this.gL5Q = D2x.QD6x.B2x({ parent: document.body, target: this.eR5W }) } this.bbj0x.style.display = "" } else { if (this.gL5Q) { this.gL5Q.S3x();
                delete this.gL5Q } this.bbj0x.style.display = "none" } };
    b2x.cw3x = function(d2x) { var f2x = h2x.U3x(d2x, "d:action"); if (!f2x) return; if (a1x.u2x(f2x, "action") == "search") { if (!this.tE9v()) { h2x.ce3x(d2x) } } else if (a1x.u2x(f2x, "default") === undefined) { h2x.ce3x(d2x) } switch (a1x.u2x(f2x, "action")) {
            case "txt":
                this.kS7L(); break;
            case "search":
                if (this.tE9v()) {} else if (this.yR1x && this.eg4k != 24) { if (this.lQ7J) { this.lQ7J.S3x() } this.lQ7J = D2x.bpw3x.B2x({ parent: this.o2x.parentNode, onfinish: this.bkZ2x.g2x(this), oncancel: this.ciu5z.g2x(this) });
                    this.bil2x = true;
                    this.o2x.style.display = "none";
                    this.yh0x(this.jH6B > 0 ? "更换音乐" : "添加音乐") } break;
            case "at":
                h2x.rw9n(d2x);!!this.gA5F && this.gA5F.bo3x();
                this.gL5Q.QL6F();
                this.fz5E(); break;
            case "emot":
                h2x.rw9n(d2x);!!this.gL5Q && this.gL5Q.Dl2x(); if (!this.gA5F) { this.gA5F = n2x.Go3x.B2x({ parent: this.brc4g });
                    this.gA5F.q2x("onselect", this.xA0x.g2x(this)) } this.gA5F.M3x(); break;
            case "upload":
                break;
            case "sns":
                h2x.bh3x(d2x); var bhy1x, bD3x, t2x = a1x.u2x(f2x, "type"); if (!this.UK8C[t2x]) { bhy1x = f2x.href.split("?");
                    bD3x = k2x.ho5t(bhy1x[1]);
                    bD3x["csrf_token"] = v2x.gF5K("__csrf");
                    top.open(bhy1x[0] + "?" + k2x.df4j(bD3x)); return } var bv3x = { 2: "sn", 3: "db", 4: "rr" };
                l2x.zd1x(f2x, "u-slg-" + bv3x[t2x] + "-gray"); break;
            case "close":
                !!this.gA5F && this.gA5F.bo3x();
                this.bMi9Z(); break;
            case "share":
                h2x.bh3x(d2x); if (this.tE9v()) { if (!a1x.bz3x(f2x, "u-btn2-2-dis")) { this.cit5y() } } else if (a1x.bz3x(f2x, "u-btn2-2-dis")) { if (!this.MZ5e.pubEventWithoutResource && !(this.jH6B > 0)) { this.cis5x() } else {} } else if (!(this.jH6B > 0) && !this.eR5W.value && this.nE7x && this.nE7x.Ov6p().length == 0) { n2x.Z3x.M3x({ type: 2, tip: "请输入内容" }) } else { this.cir5w() } break } };
    b2x.cis5x = function() { var rH9y = 0,
            bgU1x = function() { if (rH9y % 2) { a1x.w2x(this.of8X, "z-show") } else { a1x.y2x(this.of8X, "z-show") } rH9y++; if (rH9y > 5) { clearInterval(eZ5e) } },
            eZ5e; return function() { rH9y = 0;
            clearInterval(eZ5e);
            eZ5e = setInterval(bgU1x.g2x(this), 200) } }();
    b2x.Nk5p = function(m2x) { m2x = m2x.result;
        this.UK8C[m2x.type] = !0; var s2x = k2x.cV4Z(Ua7T, m2x.type),
            cd3x = "u-slg-" + dD4H[s2x] + "-gray";
        a1x.w2x(this.Ir3x[s2x], cd3x) };
    b2x.bkZ2x = function(bt3x) { var j2x = bt3x.data;
        this.jH6B = bt3x.id;
        this.eg4k = bt3x.type;
        this.o2x.style.display = "";
        this.yh0x(this.bMG9x);
        this.lQ7J && this.lQ7J.S3x();
        this.bil2x = false;
        this.bgi1x = j2x.picUrl;
        this.Uu8m = j2x.title || "";
        this.OK6E = j2x.author || "";
        this.beY1x = j2x.authors || "";
        this.cio5t();
        this.Mf4j() };
    b2x.ciy5D = function(e2x) { this.bgi1x = e2x.coverUrl;
        this.Mc4g = e2x;
        this.Mf4j() };
    b2x.ciu5z = function() { this.lQ7J && this.lQ7J.S3x();
        this.o2x.style.display = "";
        this.yh0x(this.bMG9x);
        this.bil2x = false;
        this.Mf4j() };
    b2x.xA0x = function(d2x) { var bi3x = "[" + d2x.text + "]";
        fG5L.GJ3x(this.eR5W, this.nY8Q, bi3x);
        this.fz5E() };
    b2x.fo5t = function(d2x) { cP4T.cR4V.browser == "ie" && cP4T.cR4V.version < "7.0" ? setTimeout(this.fz5E.g2x(this), 0) : this.fz5E() };
    b2x.tn9e = function(d2x) { this.kS7L(); if (d2x.keyCode == 8) this.fz5E() };
    b2x.fz5E = function() { this.kS7L();
        this.BL1x() };
    b2x.BL1x = function() { var bq3x = Math.ceil(k2x.fh5m(this.eR5W.value.trim()) / 2);
        this.ci3x.innerText = 140 - bq3x;
        bq3x > 140 ? a1x.ev4z(this.ci3x, "s-fc4", "s-fc6") : a1x.ev4z(this.ci3x, "s-fc6", "s-fc4") };
    b2x.cir5w = function() { if (this.ct3x()) return; if (k2x.fh5m(this.eR5W.value.trim()) > 280) { this.bT3x("字数超过140个字符"); return } var t2x = this.At1x.rL9C(),
            j2x; if (t2x == 0) { for (var i = 0, xY0x = []; i < this.Ir3x.length; ++i) { if (!a1x.bz3x(this.Ir3x[i], "u-slg-" + dD4H[i] + "-gray")) xY0x.push(Ua7T[i]) } this.ct3x(!0);
            j2x = { id: this.jH6B, msg: this.eR5W.value.trim(), type: this.WR8J(this.eg4k), picUrl: this.bgi1x, snsTypes: xY0x.join(","), isPub: this.yR1x }; if (this.UA8s > 0) { j2x.actId = this.UA8s; if (this.UG8y) { j2x.msg = "#" + this.UG8y + "#" + j2x.msg } } var mC7v = this.nE7x && this.nE7x.Ov6p(); if (mC7v && mC7v.length) { j2x.pics = mC7v } this.P3x.ckZ5e(j2x) } else { var rE9v = this.tX9O.NU5Z(); if (rE9v.length <= 0) { this.bT3x("请至少选择一位好友"); return } this.P3x.ckY5d({ data: { id: this.jH6B, msg: this.eR5W.value.trim(), type: this.WR8J(this.eg4k), userIds: "[" + rE9v.join(",") + "]" } }) } };
    b2x.cit5y = function() { if (this.ct3x()) { return } this.hs5x.gf5k("click", { target: "share", targetid: "button", page: "sharevideo" }); if (k2x.fh5m(this.eR5W.value.trim()) > 280) { this.bT3x("字数超过140个字符"); return } for (var i = 0, xY0x = []; i < this.Ir3x.length; ++i) { if (!a1x.bz3x(this.Ir3x[i], "u-slg-" + dD4H[i] + "-gray")) xY0x.push(Ua7T[i]) } this.ct3x(!0); var vq0x = this.Mc4g.fileInfo,
            j2x = { msg: this.eR5W.value.trim(), type: "video" },
            cim5r = { vid: vq0x.vid, coverId: this.Mc4g.coverId, nosKey: vq0x.objectKey, size: vq0x.size, duration: Math.floor(vq0x.duration / 1e3), width: vq0x.width, height: vq0x.height }; if (this.UA8s > 0) { j2x.actId = this.UA8s; if (this.UG8y) { j2x.msg = "#" + this.UG8y + "#" + j2x.msg } } j2x.videoinfo = JSON.stringify(cim5r);
        this.P3x.ckX5c({ data: j2x, snsTypes: "" }) };
    b2x.VV8N = function(t2x, m2x) { this.ct3x(!1);
        this.bo3x(); if (!this.bda0x) { if (this.tE9v()) { n2x.Z3x.M3x({ tip: "视频将在转码完成后自动发出", autoclose: true }) } else { n2x.Z3x.M3x({ tip: "分享成功" + (m2x.point > 0 ? ' 获得<em class="s-fc6">' + m2x.point + "积分</em>" : ""), autoclose: true }) } } h2x.z2x(n2x.vZ0x, "sharesuccess", { isPrivate: t2x, rid: this.jH6B, rtype: this.eg4k, data: m2x.event });
        this.z2x("onshare") };
    b2x.hU5Z = function(m2x) { this.ct3x(!1); var bF3x = "分享失败"; if (m2x.code) { switch (m2x.code) {
                case 404:
                    bF3x = "分享的资源不存在"; break;
                case 407:
                    bF3x = "输入内容包含有关键字"; break;
                case 408:
                    bF3x = "分享太快了，过会再分享吧"; break;
                case 315:
                    bF3x = m2x.message || "根据对方设置，你没有该操作权限"; break;
                case 329:
                    return l2x.fd5i({ clazz: "m-layer-w2", btntxt: "知道了", message: "当前账号存在较多未完成发布的视频<br>请稍后再试" }) } } this.bT3x(bF3x) };
    b2x.kS7L = function() { this.nY8Q = fG5L.ti9Z(this.eR5W) };
    b2x.bT3x = function(bF3x) { this.dy4C(this.ea4e, bF3x) };
    b2x.ct3x = function(cC4G) { return this.dM4Q(this.yl0x, cC4G, "分享", "分享中...") };
    b2x.WR8J = function(jm6g) { return ciE5J[jm6g] || "" };
    b2x.cil5q = function() { var ez4D, tV9M = this.WR8J(this.eg4k);
        this.of8X.style.display = ""; if (this.jH6B <= 0) { this.of8X.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>' } else { if (!this.Uu8m) { this.of8X.style.display = "none"; return } var XE8w = this.yR1x && this.eg4k != 24;
            ez4D = (Uh8Z[tV9M] ? Uh8Z[tV9M] + "：" : "") + this.Uu8m + (bLZ9Q[tV9M] || " ") + (tV9M == "mv" || tV9M == "album" ? this.beY1x || this.OK6E : this.OK6E);
            a1x.dS4W(this.of8X, "m-xwgt-share-infobar", { canChange: XE8w, info: ez4D }); if (XE8w) { a1x.w2x(this.of8X, "z-dis") } else { a1x.y2x(this.of8X, "z-dis") } } a1x.w2x(this.of8X, "info-video") };
    b2x.cio5t = function() { var tV9M = this.WR8J(this.eg4k),
            ez4D = (Uh8Z[tV9M] ? Uh8Z[tV9M] + "：" : "") + this.Uu8m + (bLZ9Q[tV9M] || " ") + (tV9M == "mv" || tV9M == "album" ? this.beY1x || this.OK6E : this.OK6E);
        XE8w = this.yR1x && this.eg4k != 24; if (this.tE9v()) { a1x.y2x(this.of8X, "info-video") } else { a1x.w2x(this.of8X, "info-video");
            a1x.dS4W(this.of8X, "m-xwgt-share-infobar", { canChange: XE8w, isPub: this.yR1x, info: ez4D }) } };
    b2x.bsU4Y = function() { var IQ3x = this.eR5W.value; if (this.yR1x) { if (!!this.bil2x) { return !!IQ3x && !!IQ3x.length || !!this.nE7x && this.nE7x.Ov6p().length > 0 } else { return this.jH6B > 0 || !!IQ3x && !!IQ3x.length || !!this.nE7x && this.nE7x.Ov6p().length > 0 } } else { return !!IQ3x && !!IQ3x.length || !!this.nE7x && this.nE7x.Ov6p().length > 0 } };
    b2x.Mf4j = function() { var bos3x = false; if (this.tE9v()) { if (this.Mc4g && this.Mc4g.fileInfo && this.Mc4g.coverId) { bos3x = true } } else if (!this.yR1x || this.MZ5e.pubEventWithoutResource || this.jH6B > 0) { bos3x = true } if (bos3x) { a1x.w2x(this.yl0x, "u-btn2-2-dis") } else { a1x.y2x(this.yl0x, "u-btn2-2-dis") } };
    b2x.bNt9k = function(bnL3x) { if (bnL3x) { a1x.y2x(this.yl0x, "u-btn2-2-dis") } else { this.Mf4j() } };
    b2x.bMi9Z = function(d2x) { if (d2x) { d2x.stopped = true } if (this.tE9v()) { this.hs5x.gf5k("click", { target: d2x ? "cross" : "cancel", targetid: "button", page: "sharevideo" });
            this.Ig3x.cij5o(this.bsU4Y()) } else if (this.bsU4Y()) { l2x.gU5Z({ title: "提示", message: "是否退出本次编辑？", btnok: "退出", action: function(W3x) { if (W3x == "ok") { this.bo3x() } }.g2x(this) }) } else { this.bo3x() } };
    b2x.yh0x = function(eG4K, dr4v) { this.nO7H.yO1x(eG4K, dr4v) };
    b2x.XK8C = function(t2x) { this.hs5x.gf5k("page", { type: t2x }) };
    b2x.tE9v = function() { return this.eg4k == 39 };
    b2x.M3x = function() { var chY5d = function(r2x, s2x) { var cd3x = "u-slg-" + dD4H[s2x] + "-gray";!this.UK8C[Ua7T[s2x]] ? a1x.y2x(r2x, cd3x) : a1x.w2x(r2x, cd3x) }; return function() { if (this.tE9v()) { this.yh0x("添加视频") } K3x.M3x.call(this);
            this.o2x.style.display = "";
            this.bT3x();
            this.ct3x(!1);
            this.At1x.FM3x(0);
            this.eR5W.focus();
            this.eR5W.value = this.ciB5G || "";
            this.eR5W.placeholder = this.ciA5F || ""; if (!this.tE9v()) { this.cil5q() } this.fz5E();
            this.tX9O.cjo5t();
            k2x.be3x(this.Ir3x, chY5d, this);
            this.kS7L(); if (this.yR1x) { this.pG8y.style.display = "none" } else { this.pG8y.style.display = "" } this.Mf4j() } }();
    b2x.bo3x = function(d2x) { K3x.bo3x.call(this);!!this.gA5F && this.gA5F.bo3x(); if (this.tX9O) { this.tX9O.S3x();
            delete this.tX9O } if (this.gL5Q) { this.gL5Q.S3x();
            delete this.gL5Q } if (this.nE7x) { this.nE7x.S3x();
            delete this.nE7x } if (this.Ig3x) { this.Ig3x = this.Ig3x.S3x() } if (this.lQ7J) { this.lQ7J.S3x();
            delete this.lQ7J } };
    l2x.lH7A = function(e2x) { if (!GUser || !GUser.userId || GUser.userId <= 0) { top.login(); return } if (e2x.title === undefined) { e2x.title = "分享" } if (e2x.actId && e2x.type != 39) { var t2x = ciC5H[e2x.resourceType],
                do4s = e2x.resourceJson,
                hh5m; if (k2x.fe5j(do4s)) { try { do4s = JSON.parse(do4s) } catch (e) {} } if (t2x) { hh5m = l2x.bJg8Y(t2x, do4s);
                e2x.name = hh5m.title;
                e2x.author = hh5m.author;
                e2x.picUrl = hh5m.picUrl;
                e2x.type = t2x;
                e2x.rid = (do4s || []).id } } n2x.vZ0x.M3x(e2x) };
    H2x.fr5w.B2x({ element: n2x.vZ0x, event: ["sharesuccess"] }) })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        n2x = c2x("nm.l"),
        D2x = c2x("nm.w"),
        bI3x = c2x("nej.ui"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K3x;
    n2x.XY9P = NEJ.C();
    b2x = n2x.XY9P.O3x(n2x.dW4a);
    K3x = n2x.XY9P.cg3x;
    b2x.cl3x = function() { this.cs3x() };
    b2x.bR3x = function() { this.cc3x(); var i2x = a1x.I2x(this.o2x, "j-flag");
        h2x.q2x(i2x[0], "click", this.BZ2x.g2x(this)) };
    b2x.bZ3x = function() { this.ca3x = "m-import-ok" };
    b2x.bk3x = function(e2x) { e2x.parent = e2x.parent || document.body;
        e2x.title = "歌曲同步完成";
        this.bl3x(e2x) };
    b2x.bC3x = function() { this.bH3x() };
    b2x.BZ2x = function(d2x) { this.bo3x(); if (location.pathname.indexOf("my") >= 0) { location.reload() } else { location.dispatch2("/my/") } };
    b2x.zs1x = function() { this.bo3x() };
    b2x.bNc9T = function(d2x) { if (d2x.keyCode == 13) this.Bf1x() } })();
(function() { var c2x = NEJ.P,
        Y3x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        N3x = c2x("nej.p"),
        k2x = c2x("nej.u"),
        n2x = c2x("nm.l"),
        D2x = c2x("nm.w"),
        bI3x = c2x("nej.ui"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K3x;
    n2x.btk4o = NEJ.C();
    b2x = n2x.btk4o.O3x(n2x.dW4a);
    b2x.bZ3x = function() { this.ca3x = "m-programtips-layer" };
    b2x.bR3x = function() { this.cc3x();
        this.bV3x = a1x.I2x(this.o2x, "j-flag") };
    b2x.bk3x = function(e2x) { e2x.clazz = " m-layer-programtips";
        e2x.parent = e2x.parent || document.body;
        e2x.title = "付费内容提示";
        e2x.draggable = !0;
        e2x.destroyalbe = !0;
        e2x.mask = true;
        this.bl3x(e2x);
        this.gx5C = e2x.id;
        this.chV5a = e2x.radiotype;
        this.kE6y = location.protocol + "//" + (this.chT4X() || "music.163.com") + "/m/" + this.chV5a + "?id=" + this.gx5C;
        this.chS4W() };
    b2x.bC3x = function() { this.bH3x() };
    b2x.zs1x = function() { this.bo3x() };
    b2x.BZ2x = function(d2x) { this.z2x("onok", A2x);
        this.bo3x() };
    l2x.btt4x = function(e2x) { n2x.btk4o.B2x(e2x).M3x() };
    b2x.chS4W = function() { v2x.bp3x("/api/web/qrcode/get", { method: "POST", type: "json", data: k2x.df4j({ url: this.kE6y, size: 180 }), onload: function(j2x) { if (j2x.code == 200) { this.chR4V(j2x.qrcodeImageUrl) } else { alert("二维码获取失败") } }.g2x(this) }) };
    b2x.chT4X = function() { var chO4S = location.host; if (chO4S.indexOf("music") >= 0) { return "music.163.com" } else { return "igame.163.com" } };
    b2x.chR4V = function(jV6P) { this.bV3x[0].style.backgroundImage = "url(" + jV6P + ")" } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        cP4T = c2x("nej.p"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        F2x = c2x("nm.m"),
        n2x = c2x("nm.l"),
        L3x = c2x("nm.m.f"),
        b2x, K3x;
    F2x.cL4P = NEJ.C();
    b2x = F2x.cL4P.O3x(H2x.dl4p);
    b2x.bJ3x = function() { var pO8G = !1; return function() { if (pO8G) return;
            pO8G = !0;
            this.bN3x(); if (top == self) { return } this.rg8Y = a1x.x2x("g_backtop"); if (window.GRef != "mail") {} else { this.btB4F() } H2x.fr5w.B2x({ element: window, event: ["share", "playchange", "snsbind", "playstatechange"] });
            this.bU3x([
                [window, "scroll", this.xV0x.g2x(this)],
                [document, "keyup", this.chN4R.g2x(this)],
                [document.body, "click", this.ry9p.g2x(this)],
                [document, "mouseup", this.chI4M.g2x(this)],
                [this.rg8Y, "click", this.KH4L.g2x(this)],
                [p2x.sl9c, "message", this.qA8s.g2x(this)]
            ]);
            l2x.clh5m(document.body);
            this.xV0x(); if (this.xZ0x !== false && typeof GUser !== "undefined" && GUser.userId > 0) p2x.sl9c.fX5c().tZ9Q(); try { top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo(); if (cP4T.cR4V.browser == "ie" && parseInt(cP4T.cR4V.version) < 9 && /#(.*?)$/.test(top.document.title)) { top.document.title = "网易云音乐" } else { var gr5w = top.player.getPlaying(); if (gr5w && gr5w.track && gr5w.playing) { top.document.title = decodeURIComponent("%E2%96%B6%20") + gr5w.track.name } else { top.document.title = document.title } } } catch (e) {} window.share = this.xC0x.g2x(this);
            this.kn6h = p2x.hL5Q.B2x();
            window.log = this.my7r.g2x(this); var rn8f = location.search; if (rn8f) { var bD3x = rn8f.substr(rn8f.indexOf("?") + 1),
                    gc5h = k2x.ho5t(bD3x); if (gc5h && gc5h["_hash"]) location.hash = gc5h["_hash"] } } }();
    b2x.chN4R = function(d2x) { var f2x = h2x.U3x(d2x); try { if (d2x.keyCode == 80 && l2x.bFU7N() || ["textarea", "input"].indexOf(f2x.tagName.toLowerCase()) >= 0) return;
            h2x.z2x(top.document, "keyup", { ctrlKey: d2x.ctrlKey, keyCode: d2x.keyCode }) } catch (e) {} };
    b2x.ry9p = function(d2x) { var f2x = h2x.U3x(d2x); if (f2x && f2x.tagName == "INPUT") return; var f2x = h2x.U3x(d2x, "d:pid"); if (f2x) { h2x.ce3x(d2x); var oO8G = a1x.u2x(f2x, "pid"),
                yb0x = a1x.u2x(f2x, "ptype"),
                W3x = a1x.u2x(f2x, "action") || "play"; switch (W3x) {
                case "subscribe":
                    l2x.lM7F({ tracks: [oO8G] }); break } } f2x = h2x.U3x(d2x, "d:resAction"); if (f2x && f2x.className.indexOf("-dis") == -1) { var cF4J = a1x.u2x(f2x, "resId"),
                t2x = a1x.u2x(f2x, "resType"),
                beT1x = a1x.u2x(f2x, "resRadiotype"),
                bqR4V = a1x.u2x(f2x, "resRadioid"),
                dJ4N = a1x.u2x(f2x, "resFrom"),
                j2x = a1x.u2x(f2x, "resData"),
                W3x = a1x.u2x(f2x, "resAction"),
                bmT3x = a1x.u2x(f2x, "resCopyright"),
                Zn9e = a1x.u2x(f2x, "resAuditstatus"); if (W3x != "log" && W3x != "bilog") h2x.ce3x(d2x); switch (W3x) {
                case "log":
                    j2x = (j2x || "").split("|"); if (!!j2x[0]) { var bc3x = { id: cF4J, alg: j2x[2] || "itembased", scene: j2x[3], position: j2x[1] || 0 }; if (!!j2x[4]) bc3x.srcid = j2x[4];
                        window.log(j2x[0], bc3x) } break;
                case "bilog":
                    var bgQ1x = a1x.u2x(f2x, "logAction"),
                        bgf1x = a1x.u2x(f2x, "logJson");
                    window.log(bgQ1x, bgf1x); break;
                case "share":
                    if (Zn9e && Zn9e == 1) { l2x.hS5X("由于版权问题，该节目暂时无法分享。") } else { share(cF4J, t2x, a1x.u2x(f2x, "resPic"), a1x.u2x(f2x, "resName"), a1x.u2x(f2x, "resAuthor"), a1x.u2x(f2x, "resAuthors")) } break;
                case "fav":
                case "subscribe":
                    if (t2x == 18) { var pt8l = a1x.u2x(f2x, "resLevel"),
                            qo8g = a1x.u2x(f2x, "resFee"); if (pt8l == 10) { l2x.sP9G(qo8g, cF4J, "song"); break } l2x.lM7F({ tracks: [cF4J] }) } break;
                case "download":
                    l2x.RV7O({ id: cF4J, type: t2x }); break;
                case "programtips":
                    if (Zn9e && Zn9e == 1) { l2x.hS5X("由于版权问题，该节目暂时无法分享。") } else { l2x.btt4x({ id: bqR4V, radiotype: beT1x }) } break } } if (top == self) return; try { top.onIframeClick(d2x) } catch (e) {} };
    b2x.chI4M = function(d2x) { try { h2x.z2x(top.document, "mouseup") } catch (e) {} };
    b2x.xV0x = function() { var chH4L = function() { var cp3x = window.innerHeight; if (!k2x.tY9P(cp3x)) cp3x = (document.documentElement || document.body).clientHeight; return cp3x }; return function(d2x) { if (!this.rg8Y) return; var ZB9s = chH4L(),
                fO5T = document.documentElement.scrollTop || document.body.scrollTop;
            a1x.X3x(this.rg8Y, "display", fO5T > 0 ? "" : "none"); if (cP4T.cR4V.browser == "ie" && cP4T.cR4V.version < "7.0") { var gl5q = Math.min(document.body.clientHeight, ZB9s + fO5T) - 204;
                a1x.X3x(this.rg8Y, "top", gl5q + "px") } } }();
    b2x.KH4L = function(d2x) { h2x.ce3x(d2x);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0 };
    b2x.xC0x = function() { var bjy2x = function(d2x) { h2x.z2x(window, "share", d2x) }; return function(cF4J, t2x, AU1x, T3x, QM6G, Jp4t) { l2x.lH7A({ rid: cF4J, type: t2x, purl: AU1x, name: T3x, author: QM6G, authors: Jp4t, onshare: bjy2x.g2x(this) }) } }();
    b2x.my7r = function(W3x, bc3x) { try { top.log(W3x, bc3x) } catch (e) { switch (W3x) {
                case "play":
                    this.kn6h.eL5Q(bc3x); break;
                case "search":
                    this.kn6h.bDN7G(bc3x); break;
                default:
                    this.kn6h.gf5k(W3x, bc3x) } } };
    b2x.btB4F = function() { var bag9X, bhQ2x = false,
            bs3x = [45, 60]; var chG4K = function(bF3x) { if (bF3x.title != "MailBoxImport") return; var Q3x = JSON.parse(bF3x.content || "null") || Y3x; if (Q3x.status == 10) { n2x.XY9P.B2x().M3x();
                window.clearTimeout(bag9X) } }; var sU9L = function(d2x) { if (d2x.code == 200) { if (d2x.status == 1) { h2x.q2x(p2x.zi1x, "message", chG4K.g2x(this));
                    p2x.zi1x.B2x().bcj0x();
                    bhQ2x = true } else { if (bhQ2x) { if (d2x.status == 10) { n2x.XY9P.B2x().M3x();
                            h2x.iw6q(p2x.zi1x, "message");
                            window.clearTimeout(bag9X);
                            bhQ2x = false } } else { window.clearTimeout(bag9X) } } } }; return function() { var rZ9Q = bs3x.shift() * 1e3;
            v2x.bp3x("/api/musicbox/mail/status", { type: "json", method: "get", onload: sU9L.g2x(this) }); if (rZ9Q) { bag9X = window.setTimeout(arguments.callee, rZ9Q) } } }();
    b2x.qA8s = function(d2x) { try { top.polling(d2x) } catch (e) {} } })()