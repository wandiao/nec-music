(function() { window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() { return !1 };
    NEJ.P = function(Co2x) { if (!Co2x || !Co2x.length) return null; var Wh8Z = window; for (var a = Co2x.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; Wh8Z = Wh8Z[a[i]] = Wh8Z[a[i]] || {}, i++); return Wh8Z };
    NEJ.Q = function(bL3x, Co2x) { bL3x = bL3x || NEJ.O; var bs2x = Co2x.split("."); for (var i = 0, l = bs2x.length; i < l; i++) { bL3x = bL3x[bs2x[i]]; if (!bL3x) break } return bL3x };
    NEJ.C = function() { var brx5C = function() { return NEJ.O.toString.call(arguments[0]) != "[object Function]" }; var brC5H = function(A2x, bv2x) { for (var x in bv2x)
                if (A2x == bv2x[x]) return x; return null }; var bjV3x = { cl3x: 0, bk2x: 1, bC2x: 2, bR3x: 3, bJ3x: 4, eZ4d: 5, kn6h: 6, ej4n: 7 },
            sD9u = { cs3x: 0, bl2x: 1, bH3x: 2, cb3x: 3, bM3x: 4, gB5G: 5, kY6S: 6, fO5T: 7 }; return function() { var fe4i = function() { this.bsx5C(); return this.cl3x.apply(this, arguments) };
            fe4i.prototype.bsx5C = NEJ.F;
            fe4i.prototype.cl3x = NEJ.F;
            fe4i.O2x = function(Ay2x, bsQ5V) { if (brx5C(Ay2x)) return; if (bsQ5V == null || !!bsQ5V) NEJ.X(this, Ay2x, brx5C);
                this.ckI7B = Ay2x;
                this.cg3x = Ay2x.prototype; var bB2x = function() {};
                bB2x.prototype = Ay2x.prototype;
                this.prototype = new bB2x; var AJ2x = this.prototype;
                AJ2x.constructor = this; var dQ3x; for (var x in bjV3x) { dQ3x = brC5H(bjV3x[x], sD9u); if (!dQ3x || !this.cg3x[x]) continue;
                    AJ2x[x] = function(T2x) { return function() { this[T2x].apply(this, arguments) } }(dQ3x) } var AS2x = {}; for (var x in sD9u) { dQ3x = brC5H(sD9u[x], bjV3x); if (!dQ3x || !this.cg3x[dQ3x]) continue;
                    AS2x[dQ3x] = Ay2x;
                    AJ2x[x] = function(T2x) { return function() { var m2x, bB2x = this.bby1x[T2x],
                                ZY0x = bB2x.prototype[T2x];
                            this.bby1x[T2x] = bB2x.ckI7B || Ay2x; if (!!ZY0x) m2x = ZY0x.apply(this, arguments);
                            this.bby1x[T2x] = Ay2x; return m2x } }(dQ3x) } AJ2x.bsx5C = function() { this.bby1x = NEJ.X({}, AS2x) };
                AJ2x.cxA0x = AJ2x.cs3x; return AJ2x }; return fe4i } }();
    NEJ.X = function(gc5h, bN3x, dD3x) { if (!gc5h || !bN3x) return gc5h;
        dD3x = dD3x || NEJ.F; for (var x in bN3x) { if (bN3x.hasOwnProperty(x) && !dD3x(bN3x[x], x)) gc5h[x] = bN3x[x] } return gc5h };
    NEJ.EX = function(gc5h, bN3x) { if (!gc5h || !bN3x) return gc5h; for (var x in gc5h) { if (gc5h.hasOwnProperty(x) && bN3x[x] != null) gc5h[x] = bN3x[x] } return gc5h }; var EL3x = Function.prototype;
    EL3x.ef4j = function(lz6t, bcv1x) { var f = NEJ.F,
            bcv1x = bcv1x || f,
            lz6t = lz6t || f,
            dc3x = this; return function() { var d2x = { args: NEJ.R.slice.call(arguments, 0) };
            lz6t(d2x); if (!d2x.stopped) { d2x.value = dc3x.apply(this, d2x.args);
                bcv1x(d2x) } return d2x.value } };
    EL3x.g2x = function() { var bg2x = arguments,
            gc5h = arguments[0],
            blt3x = this; return function() { var uZ0x = NEJ.R.slice.call(bg2x, 1);
            NEJ.R.push.apply(uZ0x, arguments); return blt3x.apply(gc5h || window, uZ0x) } };
    EL3x.dW3x = function() { var bg2x = arguments,
            gc5h = NEJ.R.shift.call(bg2x),
            blt3x = this; return function() { NEJ.R.push.apply(arguments, bg2x); return blt3x.apply(gc5h || window, arguments) } }; var EL3x = String.prototype; if (!EL3x.trim) { EL3x.trim = function() { var cO3x = /(?:^\s+)|(?:\s+$)/g; return function() { return this.replace(cO3x, "") } }() } if (!window.MWF) window.MWF = NEJ; if (!window.mwf) window.mwf = NEJ.P("nej"); if (!window.console) { NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F } var lt, gt, amp, nbsp, quot, apos, copy, reg })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        M2x = c2x("nej.p"),
        ZS0x = window.navigator.platform,
        tg9X = window.navigator.userAgent; var kg6a = { mac: ZS0x, win: ZS0x, linux: ZS0x, ipad: tg9X, ipod: tg9X, iphone: ZS0x, android: tg9X };
    M2x.ZQ0x = kg6a; for (var x in kg6a) kg6a[x] = (new RegExp(x, "i")).test(kg6a[x]);
    kg6a.ios = kg6a.ipad || kg6a.iphone || kg6a.ipod;
    kg6a.tablet = kg6a.ipad;
    kg6a.desktop = kg6a.mac || kg6a.win || kg6a.linux && !kg6a.android; var hF5K = { engine: "unknow", release: "unknow", browser: "unknow", version: "unknow", prefix: { css: "", pro: "", clz: "" } };
    M2x.cS3x = hF5K; if (/msie\s+(.*?);/i.test(tg9X) || /trident\/.+rv:([\d\.]+)/i.test(tg9X)) { hF5K.engine = "trident";
        hF5K.browser = "ie";
        hF5K.version = RegExp.$1;
        hF5K.prefix = { css: "ms", pro: "ms", clz: "MS", evt: "MS" }; var nk7d = { 6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0" };
        hF5K.release = nk7d[document.documentMode] || nk7d[parseInt(hF5K.version)] } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(tg9X)) { hF5K.engine = "webkit";
        hF5K.release = RegExp.$1 || "";
        hF5K.prefix = { css: "webkit", pro: "webkit", clz: "WebKit" } } else if (/rv\:(.*?)\)\s+gecko\//i.test(tg9X)) { hF5K.engine = "gecko";
        hF5K.release = RegExp.$1 || "";
        hF5K.browser = "firefox";
        hF5K.prefix = { css: "Moz", pro: "moz", clz: "Moz" }; if (/firefox\/(.*?)(?=\s|$)/i.test(tg9X)) hF5K.version = RegExp.$1 || "" } else if (/presto\/(.*?)\s/i.test(tg9X)) { hF5K.engine = "presto";
        hF5K.release = RegExp.$1 || "";
        hF5K.browser = "opera";
        hF5K.prefix = { css: "O", pro: "o", clz: "O" }; if (/version\/(.*?)(?=\s|$)/i.test(tg9X)) hF5K.version = RegExp.$1 || "" } if (hF5K.browser == "unknow") { var nk7d = ["chrome", "maxthon", "safari"]; for (var i = 0, l = nk7d.length, T2x; i < l; i++) { T2x = nk7d[i] == "safari" ? "version" : nk7d[i]; if ((new RegExp(T2x + "/(.*?)(?=\\s|$)", "i")).test(tg9X)) { hF5K.browser = nk7d[i];
                hF5K.version = RegExp.$1.trim(); break } } } M2x.btV5a = {}; var ZO0x = hF5K.engine != "trident";
    M2x.mr7k = { gecko: hF5K.engine != "gecko", webkit: hF5K.engine != "webkit", presto: hF5K.engine != "presto", trident0: ZO0x || hF5K.release > "2.0", trident1: ZO0x || hF5K.release < "6.0", trident2: ZO0x || hF5K.release > "3.0", trident: ZO0x || hF5K.release >= "6.0" } })();
(function() { var iz5E = NEJ.P("nej.c"),
        R2x = {}; var blR3x = function() { var cO3x = /^([\w]+?:\/\/.*?(?=\/|$))/i; return function(V2x) { V2x = V2x || ""; if (cO3x.test(V2x)) return RegExp.$1; return location.protocol + "//" + location.host } }(); var PY7R = function() { var bur5w = function(i2x, bv2x) { if (!i2x || !i2x.length) return; for (var i = 0, l = i2x.length, kJ6D; i < l; i++) { kJ6D = i2x[i]; if (kJ6D.indexOf("://") > 0) bv2x[blR3x(kJ6D)] = kJ6D } }; var bc2x = { portrait: { name: "portrait", dft: "portrait/" }, "ajax.swf": { name: "ajax", dft: "nej_proxy_flash.swf" }, "chart.swf": { name: "chart", dft: "nej_flex_chart.swf" }, "audio.swf": { name: "audio", dft: "nej_player_audio.swf" }, "video.swf": { name: "video", dft: "nej_player_video.swf" }, "clipboard.swf": { name: "clipboard", dft: "nej_clipboard.swf" } }; return function(bN3x) { iz5E.EM3x("root", bN3x.root || "/res/"); var biI2x, fw4A = iz5E.x2x("root"); for (var x in bc2x) { biI2x = bc2x[x];
                iz5E.EM3x(x, bN3x[biI2x.name] || fw4A + biI2x.dft) } var An2x = bN3x.p_csrf; if (An2x == !0) { An2x = { cookie: "AntiCSRF", param: "AntiCSRF" } } iz5E.EM3x("csrf", NEJ.EX({ cookie: "", param: "" }, An2x));
            R2x.frames = {};
            bur5w(bN3x.p_frame, R2x.frames);
            R2x.flashs = {};
            bur5w(bN3x.p_flash, R2x.flashs) } }();
    iz5E.EM3x = function(J2x, A2x) { R2x[J2x] = A2x };
    iz5E.x2x = function(J2x) { return R2x[J2x] };
    iz5E.ccc5h = function(V2x) { var uB0x = blR3x(V2x); return R2x.frames[uB0x] || uB0x + "/res/nej_proxy_frame.html" };
    iz5E.cjc7V = function(V2x) { return R2x.flashs[blR3x(V2x)] };
    PY7R(window.NEJ_CONF || NEJ.O) })();
(function() { var c2x = NEJ.P,
        M2x = c2x("nej.p"),
        iz5E = c2x("nej.c"),
        bN3x = window.NEJ_CONF || NEJ.O; if (M2x.mr7k.trident) return;
    iz5E.EM3x("storage.swf", bN3x.storage || iz5E.x2x("root") + "nej_storage.swf"); if (M2x.cS3x.release < "4.0") { iz5E.EM3x("blank.png", bN3x.blank || iz5E.x2x("root") + "nej_blank.gif") } var i2x = bN3x.xdr,
        fZ5e = /^(https?:\/\/.*?)(?=\/|$)/i,
        jj6d = /[\/?=&]/i; var buW5b = function(V2x) { return (fZ5e.test(V2x) ? RegExp.$1 : "").toLowerCase() }; if (!!i2x && !!i2x.length)
        for (var i = i2x.length - 1, V2x, J2x; i >= 0; i--) { V2x = i2x[i];
            J2x = buW5b(V2x); if (!!J2x) iz5E.EM3x(J2x, V2x) } iz5E.cxn0x = function(V2x) { var J2x = buW5b(V2x); if (!J2x) { if (jj6d.test(V2x)) { J2x = location.protocol + "//" + location.host } else if (V2x.indexOf("://") < 0) { J2x = location.protocol + "//" + V2x } else { J2x = V2x } } return iz5E.x2x(J2x) || J2x + "/res/nej_xdomain.html" } })();
(function() { var c2x = NEJ.P,
        iz5E = c2x("nej.c"),
        M2x = c2x("nej.g"),
        fY5d = +(new Date);
    M2x.cxj0x = 1e4 - fY5d;
    M2x.bhS2x = 10001 - fY5d;
    M2x.cxi0x = 10002 - fY5d;
    M2x.bvV6P = 10003 - fY5d;
    M2x.bRe2x = 10004 - fY5d;
    M2x.cxc0x = 10005 - fY5d;
    M2x.blB3x = 10006 - fY5d;
    M2x.bSW3x = 10007 - fY5d;
    M2x.ws1x = "Content-Type";
    M2x.cwX0x = "text/plain";
    M2x.Eu3x = "multipart/form-data";
    M2x.bTF3x = "application/x-www-form-urlencoded";
    M2x.bar0x = iz5E.x2x("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" })();
(function() { var c2x = NEJ.P,
        eT4X = NEJ.R,
        M2x = c2x("nej.p"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        ba2x = c2x("nej.h"); var kR6L = M2x.cS3x.prefix,
        bwP6J = M2x.btV5a,
        bXz4D = { scale: "scale({x|1},{y|1})", rotate: "rotate({a})", translate: "translate({x},{y})" },
        cbZ5e = { scale: "scale3d({x|1},{y|1},{z|1})", rotate: "rotate3d({x},{y},{z},{a})", translate: "translate3d({x},{y},{z})" },
        Mr5w = { transition: !0, transform: !0, animation: !0, keyframes: !0, box: !0, "box-pack": !0, "box-flex": !0, marquee: !0, "border-radius": !0, "user-select": !0 }; var PY7R = function() { var sh9Y = ba2x.bzb6V();
        bwP6J.css3d = !!sh9Y && sh9Y.m41 != null; var cO3x = /-([a-z])/g; for (var x in Mr5w) { Mr5w[bzj6d(x)] = Mr5w[x] } }; var bzj6d = function() { var cO3x = /-([a-z])/g; return function(T2x) { T2x = T2x || ""; return T2x.replace(cO3x, function($1, $2) { return $2.toUpperCase() }) } }(); var bzQ7J = function(T2x) { return (!bwP6J.css3d ? bXz4D : cbZ5e)[T2x] }; var bzR7K = function() { var cO3x = /\s+/; return function(fe4i) { fe4i = (fe4i || "").trim(); return !!fe4i ? fe4i.split(cO3x) : null } }(); var Zs0x = function(E2x, t2x, fe4i) { E2x = a1x.x2x(E2x); if (!E2x) return;
        k2x.be2x(bzR7K(fe4i), function(dJ3x) { E2x.classList[t2x](dJ3x) }) };
    ba2x.EZ3x = function(i2x) { return eT4X.slice.call(i2x, 0) };
    ba2x.boh4l = function(E2x) { return ba2x.EZ3x(E2x.children) };
    ba2x.boQ4U = function(E2x, fe4i) { return ba2x.EZ3x(E2x.getElementsByClassName(fe4i)) };
    ba2x.bpf4j = function(E2x, Fc3x) { Zs0x(E2x, "add", Fc3x) };
    ba2x.bqq4u = function(E2x, Fd3x) { Zs0x(E2x, "remove", Fd3x) };
    ba2x.QA7t = function(E2x, Fd3x, Fc3x) { Zs0x(E2x, "remove", Fd3x);
        Zs0x(E2x, "add", Fc3x) };
    ba2x.bce1x = function(E2x, fe4i) { E2x = a1x.x2x(E2x); if (!E2x) return !1; var i2x = E2x.classList; if (!i2x || !i2x.length) return !1; return k2x.cV3x(bzR7K(fe4i), function(dJ3x) { return i2x.contains(dJ3x) }) >= 0 };
    ba2x.bcI1x = function(E2x, dJ3x) {};
    ba2x.bdc1x = function(E2x) {};
    ba2x.bdl1x = function(fE4I, mX7Q) { fE4I.selectionEnd = mX7Q.end || 0;
        fE4I.selectionStart = mX7Q.start || 0;
        fE4I.focus() };
    ba2x.bfj2x = function(fE4I) { return { end: fE4I.selectionEnd, start: fE4I.selectionStart } };
    ba2x.bfY2x = function() { var BK2x = function(dJ3x, d2x) { var E2x = h2x.U2x(d2x); if (!E2x.value) a1x.w2x(E2x, dJ3x) }; var Fi3x = function(dJ3x, d2x) { a1x.y2x(h2x.U2x(d2x), dJ3x) }; return function(E2x, eD4H, dJ3x) { if (eD4H == 1) { h2x.q2x(E2x, "blur", BK2x.g2x(null, dJ3x)) } if (eD4H == 1 || eD4H == -1) { h2x.q2x(E2x, "focus", Fi3x.g2x(null, dJ3x)) } } }();
    ba2x.bjd3x = function(G2x) { return (new XMLSerializer).serializeToString(G2x) || "" };
    ba2x.bjC3x = function(zH2x) { var fw4A = (new DOMParser).parseFromString(zH2x, "text/xml").documentElement; return fw4A.nodeName == "parsererror" ? null : fw4A };
    ba2x.bjI3x = function(E2x) {};
    ba2x.mM7F = function(E2x) { return null };
    ba2x.bkl3x = function(E2x) { return null };
    ba2x.bkw3x = function(dI3x) {};
    ba2x.bli3x = function() { var bg2x = ba2x.EZ3x(arguments);
        bg2x[0] = a1x.x2x(bg2x[0]); if (!bg2x[0]) return null;
        bg2x[1] = (bg2x[1] || "").toLowerCase(); if (!bg2x[1]) return null; return bg2x };
    ba2x.zw2x = function() { var uO0x = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup" },
            il5q = { transitionend: "TransitionEnd", animationend: "AnimationEnd", animationstart: "AnimationStart", animationiteration: "AnimationIteration" }; var clx7q = function(t2x) { return (kR6L.evt || kR6L.pro) + t2x }; return function() { var bg2x = ba2x.bli3x.apply(ba2x, arguments); if (!bg2x) return; var Zh0x = il5q[bg2x[1]],
                Zg0x = uO0x[bg2x[1]]; if (!!Zh0x) { bg2x[4] = bg2x[1];
                bg2x[1] = clx7q(Zh0x) } else if (!!Zg0x) { var T2x = "on" + bg2x[1]; if (!(T2x in bg2x[0])) { bg2x[4] = bg2x[1];
                    bg2x[1] = Zg0x } } return bg2x } }();
    ba2x.bmH3x = function() { var bg2x = arguments;
        bg2x[0].addEventListener(bg2x[1], bg2x[2], !!bg2x[3]) };
    ba2x.Zf0x = function() { var bg2x = arguments;
        bg2x[0].removeEventListener(bg2x[1], bg2x[2], !!bg2x[3]) };
    ba2x.bnY4c = function(E2x, t2x, e2x) { var d2x = document.createEvent("Event");
        d2x.initEvent(t2x, !0, !0);
        NEJ.X(d2x, e2x);
        E2x.dispatchEvent(d2x) };
    ba2x.bzb6V = function() { var fZ5e = /\((.*?)\)/,
            jj6d = /\s*,\s*/,
            i2x = ["m11", "m12", "m21", "m22", "m41", "m42"]; var Ze0x = function(sh9Y) { var hZ5e = {}; if (fZ5e.test(sh9Y || "")) { k2x.be2x(RegExp.$1.split(jj6d), function(A2x, s2x) { hZ5e[i2x[s2x]] = A2x || "" }) } return hZ5e }; return function(sh9Y) { if (!!window.CSSMatrix) return new CSSMatrix(sh9Y); var T2x = kR6L.clz + "CSSMatrix"; if (!!window[T2x]) return new window[T2x](sh9Y || ""); return Ze0x(sh9Y) } }();
    ba2x.bzS7L = function() { var cO3x = /\{(.*?)\}/g; return function(T2x, bv2x) { bv2x = bv2x || o; var pG8y = bzQ7J(T2x); return !pG8y ? "" : pG8y.replace(cO3x, function($1, $2) { var bs2x = $2.split("|"); return bv2x[bs2x[0]] || bs2x[1] || "0" }) } }();
    ba2x.bqQ4U = function(E2x, T2x, A2x) { E2x.style[ba2x.bzT7M(T2x)] = A2x };
    ba2x.bzT7M = function() { var cO3x = /^[a-z]/,
            baK0x = kR6L.css; var cmg8Y = function(T2x) { return T2x.replace(cO3x, function($1) { return baK0x + $1.toUpperCase() }) }; return function(T2x) { T2x = bzj6d(T2x); var cnJ8B = ba2x.cnN8F(T2x, Mr5w); return cnJ8B ? cmg8Y(T2x) : T2x } }();
    ba2x.cnN8F = function() { var cO3x = /^([a-z]+?)[A-Z]/; return function(T2x, bv2x) { if (!bv2x[T2x]) { if (cO3x.test(T2x)) T2x = RegExp.$1 } return !!bv2x[T2x] } }();
    ba2x.cnQ8I = function() { var cO3x = /\$<(.*?)>/gi,
            baK0x = "-" + kR6L.css.toLowerCase() + "-"; return function(jp6j) { return jp6j.replace(cO3x, function($1, $2) { var eM4Q = $2,
                    bs2x = eM4Q.split("|"),
                    pG8y = bzQ7J(bs2x[0]); if (!!pG8y) { return ba2x.bzS7L(bs2x[0], k2x.ho5t(bs2x[1])) } return !ba2x.bOQ0x(eM4Q, Mr5w) ? eM4Q : baK0x + eM4Q }) } }();
    ba2x.bOQ0x = function(T2x, bv2x) { return !!bv2x[T2x] };
    ba2x.bdd1x = function(cd3x, jp6j) { cd3x.textContent = jp6j };
    ba2x.bds1x = function(cd3x, jp6j) { var wX1x = cd3x.sheet,
            bp2x = wX1x.cssRules.length;
        wX1x.insertRule(jp6j, bp2x); return wX1x.cssRules[bp2x] };
    ba2x.cvY0x = function(E2x, e2x) {};
    ba2x.Za0x = function(YY0x) { return (YY0x || "").toLowerCase() != "transparent" };
    ba2x.bPD1x = function(E2x) {};
    ba2x.bgM2x = function(E2x, T2x) { if (!!E2x.getAttribute) return E2x.getAttribute(T2x); return "" };
    ba2x.YW0x = function(fc4g) { a1x.cH3x(fc4g) };
    PY7R() })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        M2x = c2x("nej.p"),
        ba2x = c2x("nej.h"); if (M2x.mr7k.trident0) return; var fY5d = +(new Date);
    R2x = {};
    ba2x.bcI1x = ba2x.bcI1x.ef4j(function(d2x) { d2x.stopped = !0; var bg2x = d2x.args,
            C2x = a1x.kL6F(bg2x[0]),
            J2x = "hover-" + C2x; if (!C2x || !!R2x[J2x]) return;
        R2x[J2x] = !0;
        h2x.q2x(C2x, "mouseenter", a1x.y2x.g2x(a1x, C2x, bg2x[1]));
        h2x.q2x(C2x, "mouseleave", a1x.w2x.g2x(a1x, C2x, bg2x[1])) });
    ba2x.bdc1x = function() { var cvS0x = function() {}; return ba2x.bdc1x.ef4j(function(d2x) { d2x.stopped = !0; var E2x = d2x.args[0],
                C2x = "fixed-" + a1x.kL6F(E2x); if (!!R2x[C2x]) return; var bc2x = {};
            R2x[C2x] = bc2x }) }();
    ba2x.bjI3x = ba2x.bjI3x.ef4j(function(d2x) { d2x.stopped = !0; var E2x = d2x.args[0],
            cd3x = E2x.style,
            bBT7M = a1x.oc7V();
        cd3x.width = bBT7M.scrollWidth + "px";
        cd3x.height = bBT7M.scrollHeight + "px" });
    ba2x.mM7F = ba2x.mM7F.ef4j(function(d2x) { d2x.stopped = !0; var E2x = d2x.args[0],
            km6g = R2x[E2x.msk]; if (!km6g) { E2x.msk = fY5d++;
            km6g = a1x.cT3x("iframe");
            km6g.style.position = "absolute";
            R2x[E2x.msk] = km6g } d2x.value = km6g; var cd3x = km6g.style;
        cd3x.top = (parseInt(a1x.da3x(E2x, "top")) || 0) + "px";
        cd3x.left = (parseInt(a1x.da3x(E2x, "left")) || 0) + "px";
        cd3x.width = E2x.offsetWidth + "px";
        cd3x.height = E2x.offsetHeight + "px";
        E2x.insertAdjacentElement("beforeBegin", km6g) });
    ba2x.bkl3x = ba2x.bkl3x.ef4j(function(d2x) { d2x.stopped = !0; var km6g = R2x[d2x.args[0].msk]; if (!!km6g) a1x.mA7t(km6g) }) })();
(function() { var c2x = NEJ.P,
        M2x = c2x("nej.p"),
        a1x = c2x("nej.e"),
        ba2x = c2x("nej.h"); if (M2x.mr7k.trident1) return;
    ba2x.zw2x = function() { var uO0x = { touchcancel: "MSPointerCancel", touchstart: "MSPointerDown", touchmove: "MSPointerMove", touchend: "MSPointerUp" }; return ba2x.zw2x.ef4j(function(d2x) { var bg2x = ba2x.bli3x.apply(ba2x, d2x.args); if (!bg2x) { d2x.stopped = !0; return } var t2x = uO0x[bg2x[1]]; if (!!t2x && ("on" + t2x).toLowerCase() in bg2x[0]) { bg2x[4] = bg2x[1];
                bg2x[1] = t2x;
                d2x.stopped = !0;
                d2x.value = bg2x } }) }();
    ba2x.Za0x = function(YY0x) { return !0 };
    ba2x.YW0x = ba2x.YW0x.ef4j(function(d2x) { d2x.stopped = !0; var fc4g = d2x.args[0];
        a1x.X2x(fc4g, "display", "none"); try { fc4g.contentWindow.document.body.innerHTML = "&nbsp;" } catch (ex) {} }) })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        M2x = c2x("nej.p"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        ba2x = c2x("nej.h"),
        bjS3x = {}; if (M2x.mr7k.trident) return;
    ba2x.EZ3x = ba2x.EZ3x.ef4j(function(d2x) { d2x.stopped = !0; var i2x = d2x.args[0]; if (!i2x) { d2x.value = null; return } var s2x = 0,
            m2x = []; while (!!i2x[s2x]) { m2x.push(i2x[s2x++]) } d2x.value = m2x });
    ba2x.boh4l = ba2x.boh4l.ef4j(function(d2x) { d2x.stopped = !0; var bs2x = [];
        k2x.be2x(d2x.args[0].childNodes, function(f2x) { if (f2x.nodeType == 1) bs2x.push(f2x) });
        d2x.value = bs2x });
    ba2x.boQ4U = ba2x.boQ4U.ef4j(function(d2x) { var E2x = d2x.args[0]; if (!!E2x.getElementsByClassName) return;
        d2x.stopped = !0; var m2x = [],
            bkb3x = new RegExp("(\\s|^)(?:" + d2x.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k2x.be2x(E2x.getElementsByTagName("*"), function(f2x) { if (bkb3x.test(f2x.className)) m2x.push(f2x) });
        d2x.value = m2x });
    ba2x.bdl1x = ba2x.bdl1x.ef4j(function(d2x) { var fE4I = d2x.args[0],
            mX7Q = d2x.args[1]; if (fE4I.selectionStart == null) { d2x.stopped = !0; var cG3x = fE4I.createTextRange();
            cG3x.collapse(!0);
            cG3x.moveStart("character", mX7Q.start);
            cG3x.moveEnd("character", mX7Q.end - mX7Q.start);
            cG3x.select();
            fE4I.focus() } });
    ba2x.bfj2x = ba2x.bfj2x.ef4j(function(d2x) { var fE4I = d2x.args[0];
        fE4I.focus(); if (fE4I.selectionStart == null) { d2x.stopped = !0; var bBV7O = document.selection.createRange(); var bBY7R = fE4I.createTextRange();
            bBY7R.moveToBookmark(bBV7O.getBookmark()); var bkZ3x = fE4I.createTextRange();
            bkZ3x.collapse(!0);
            bkZ3x.setEndPoint("EndToStart", bBY7R); var iq5v = bkZ3x.text.length;
            d2x.value = { start: iq5v, end: iq5v + bBV7O.text.length } } });
    ba2x.bjd3x = ba2x.bjd3x.ef4j(function(d2x) { if (!!window.XMLSerializer) return;
        d2x.stopped = !0; var E2x = d2x.args[0];
        d2x.value = E2x.xml != null ? E2x.xml : E2x.outHTML });
    ba2x.bjC3x = function() { var Kj5o = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"]; var bPV1x = function() { try { for (var i = 0, l = Kj5o.length; i < l; i++) return new ActiveXObject(Kj5o[i]) } catch (ex) { return null } }; return ba2x.bjC3x.ef4j(function(d2x) { if (!!window.DOMParser) return;
            d2x.stopped = !0; var BI2x = bPV1x(); if (!!BI2x && BI2x.loadXML(d2x.args[0]) && !BI2x.parseError.errorCode) d2x.value = BI2x.documentElement }) }();
    ba2x.zw2x = function() { var il5q = { input: "propertychange", load: "readystatechange" }; for (var x in il5q) bjS3x[il5q[x]] = !0; var bPX1x = function(E2x, t2x) { if ("on" + t2x in E2x) return null; return il5q[t2x] || "" }; var bQa1x = function(t2x, dc3x) { var du3x = dc3x; switch (t2x) {
                case "readystatechange":
                    du3x = function(d2x) { var E2x = h2x.U2x(d2x) || this; if (E2x.readyState == "loaded" || E2x.readyState == "complete") { d2x.target = E2x;
                            dc3x.call(E2x, d2x) } }; break;
                case "propertychange":
                    du3x = function(d2x) { var E2x = h2x.U2x(d2x) || this; if ("value" in E2x && d2x.propertyName == "value") { d2x.target = E2x;
                            dc3x.call(E2x, d2x) } }; break } return du3x }; return ba2x.zw2x.ef4j(function(d2x) { var bg2x = ba2x.bli3x.apply(ba2x, d2x.args); if (!bg2x) { d2x.stopped = !0; return } var t2x = bPX1x(bg2x[0], bg2x[1]); if (!!t2x) { d2x.stopped = !0;
                bg2x[4] = bg2x[1];
                bg2x[1] = t2x; if (!!bg2x[2]) { bg2x[5] = bg2x[2];
                    bg2x[2] = bQa1x(bg2x[1], bg2x[2]) } d2x.value = bg2x } }, function(d2x) { var bg2x = d2x.value; if (!bg2x[0] || !k2x.ge5j(bg2x[2])) return; if (!k2x.ge5j(bg2x[5])) bg2x[5] = bg2x[2];
            bg2x[2] = bg2x[2].g2x(bg2x[0]) }) }();
    ba2x.bmH3x = ba2x.bmH3x.ef4j(function(d2x) { var bg2x = d2x.args; if (!!bjS3x[bg2x[1]] || !document.addEventListener) { d2x.stopped = !0;
            bg2x[0].attachEvent("on" + bg2x[1], bg2x[2]) } });
    ba2x.Zf0x = ba2x.Zf0x.ef4j(function(d2x) { var bg2x = d2x.args; if (!!bjS3x[bg2x[1]] || !document.removeEventListener) { d2x.stopped = !0;
            bg2x[0].detachEvent("on" + bg2x[1], bg2x[2]) } });
    ba2x.bnY4c = ba2x.bnY4c.ef4j(function(d2x) { if (!document.createEvent) { d2x.stopped = !0; var bg2x = d2x.args,
                bCb7U = document.createEventObject();
            NEJ.X(bCb7U, bg2x[2]); try { bg2x[0].fireEvent("on" + bg2x[1], bCb7U) } catch (ex) { console.error(ex.message);
                console.error(ex.stack) } } });
    ba2x.bqQ4U = ba2x.bqQ4U.ef4j(function(d2x) { var bg2x = d2x.args,
            T2x = bg2x[1].toLowerCase(); if (T2x == "opacity" && !(T2x in document.body.style)) { bg2x[1] = "filter";
            bg2x[2] = "alpha(opacity=" + bg2x[2] * 100 + ")" } });
    ba2x.bdd1x = function() { var fa4e = 30; return ba2x.bdd1x.ef4j(function(d2x) { var E2x = d2x.args[0]; if (!E2x.styleSheet) return;
            d2x.stopped = !0; var jp6j = d2x.args[1]; var i2x = document.styleSheets; if (i2x.length > fa4e) { E2x = i2x[fa4e];
                jp6j = E2x.cssText + jp6j } else { E2x = E2x.styleSheet } E2x.cssText = jp6j }) }();
    ba2x.bds1x = ba2x.bds1x.ef4j(function(d2x) { var bg2x = d2x.args,
            wX1x = bg2x[0].sheet; if (!!wX1x) return;
        d2x.stopped = !0; var wX1x = bg2x[0].styleSheet,
            bp2x = wX1x.rules.length,
            bs2x = bg2x[1].split(/[\{\}]/);
        wX1x.addRule(bs2x[0], bs2x[1], bp2x);
        d2x.value = wX1x.rules[bp2x] });
    ba2x.bfY2x = function() { var BK2x = function(dJ3x, d2x) { a1x.w2x(h2x.U2x(d2x), dJ3x) }; return ba2x.bfY2x.ef4j(function(d2x) { if (M2x.cS3x.release >= "4.0") return; var bg2x = d2x.args; if (bg2x[1] != 1) { h2x.q2x(bg2x[0], "blur", BK2x.g2x(null, bg2x[2]));
                bg2x[1] = -1 } }) }();
    ba2x.Za0x = function(YY0x) { return !0 };
    ba2x.bgM2x = ba2x.bgM2x.ef4j(function(d2x) { var bg2x = d2x.args,
            f2x = (bg2x[0].attributes || Y2x)[bg2x[1]]; if (!!f2x) { d2x.stopped = !0;
            d2x.value = f2x.value } }, function(d2x) { var bg2x = d2x.args; if (bg2x[1] == "maxlength" && d2x.value == 2147483647) d2x.value = "" }); if (M2x.cS3x.release < 5) { ba2x.bkw3x = function() { var eR4V, fc4g, ji6c = [],
                boC4G = "cb-" + +(new Date),
                bi2x = '<script>parent.nej.h["' + boC4G + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>"; var bCo7h = function() { eR4V = window.clearTimeout(eR4V); if (!ji6c.length) return; var dI3x = ji6c.shift(); try { var uM0x = fc4g.contentWindow.document;
                    uM0x.open();
                    uM0x.write("<head><title>");
                    uM0x.write(document.title);
                    uM0x.write("</title>");
                    uM0x.write(bi2x.replace("#<HASH>", encodeURIComponent(dI3x)));
                    uM0x.write("</head><body></body>"); if (location.hostname != document.domain) uM0x.domain = document.domain;
                    uM0x.close();
                    ba2x[boC4G] = !1 } catch (ex) { console.log(ex.message || ex);
                    ji6c.unshift(dI3x) } eR4V = window.setTimeout(bCo7h, 50) }; return ba2x.bkw3x.ef4j(function(d2x) { d2x.stopped = !0; var dI3x = d2x.args[0]; if (!!ba2x[boC4G] || !fc4g && !dI3x) return;
                ji6c.push(dI3x); if (!fc4g) fc4g = a1x.YL9C();
                bCo7h() }) }() } try { document.execCommand("BackgroundImageCache", !1, !0) } catch (e) {} })();
(function() { var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        ba2x = c2x("nej.h"),
        M2x = c2x("nej.p"),
        YJ9A = M2x.btV5a; if (M2x.mr7k.gecko) return; var PY7R = function() { YJ9A.css3d = YJ9A.css3d || "MozPerspective" in document.body.style; if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function(hU5Z, E2x) { if (!hU5Z || !E2x) return; switch (hU5Z) {
                case "beforeEnd":
                    this.appendChild(E2x); return;
                case "beforeBegin":
                    this.parentNode.insertBefore(E2x, this); return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(E2x) : this.insertBefore(E2x, this.firstChild); return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(E2x) : this.parentNode.insertBefore(E2x, this.nextSibling); return } }; if (!("innerText" in document.body)) { HTMLElement.prototype["__defineGetter__"]("innerText", function() { return this.textContent });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(bi2x) { this.textContent = bi2x }) } };
    ba2x.zw2x = function() { var fZ5e = /^(?:transitionend|animationend|animationstart|animationiteration)$/i; return ba2x.zw2x.ef4j(function(d2x) { var bg2x = d2x.args; if (fZ5e.test(bg2x[1] || "")) { d2x.stopped = !0;
                d2x.value = bg2x } }) }();
    ba2x.bPD1x = function() { var bRv2x = function(d2x) { h2x.bh2x(d2x);
            h2x.U2x(d2x).control.click() }; return function(E2x) { h2x.q2x(E2x, "click", bRv2x) } }();
    PY7R() })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        ba2x = c2x("nej.h"); var YC9t = function() { var nk7d = !!document.body.classList; return function() { return nk7d } }(); var bCF7y = function() { var cO3x = /\s+/g; return function(fe4i) { fe4i = (fe4i || "").trim(); return !fe4i ? null : new RegExp("(\\s|^)(?:" + fe4i.replace(cO3x, "|") + ")(?=\\s|$)", "g") } }();
    ba2x.QA7t = ba2x.QA7t.ef4j(function(d2x) { if (YC9t()) return;
        d2x.stopped = !0; var bg2x = d2x.args,
            E2x = a1x.x2x(bg2x[0]); if (!E2x || !bg2x[1] && !bg2x[2]) return; var fe4i = E2x.className || ""; var Fc3x = " " + (bg2x[2] || ""),
            Fd3x = bCF7y((bg2x[1] || "") + Fc3x);!!Fd3x && (fe4i = fe4i.replace(Fd3x, "$1"));
        E2x.className = (fe4i + Fc3x).replace(/\s+/g, " ").trim() });
    ba2x.bpf4j = ba2x.bpf4j.ef4j(function(d2x) { if (YC9t()) return;
        d2x.stopped = !0; var bg2x = d2x.args;
        ba2x.QA7t(bg2x[0], "", bg2x[1]) });
    ba2x.bqq4u = ba2x.bqq4u.ef4j(function(d2x) { if (YC9t()) return;
        d2x.stopped = !0; var bg2x = d2x.args;
        ba2x.QA7t(bg2x[0], bg2x[1], "") });
    ba2x.bce1x = ba2x.bce1x.ef4j(function(d2x) { if (YC9t()) return;
        d2x.stopped = !0; var bg2x = d2x.args,
            E2x = a1x.x2x(bg2x[0]); if (!E2x) { d2x.value = !1; return } var cO3x = bCF7y(bg2x[1]);
        d2x.value = !cO3x ? !1 : cO3x.test(E2x.className || "") }) })();
(function() { var c2x = NEJ.P,
        M2x = c2x("nej.p"),
        ba2x = c2x("nej.h"); if (M2x.mr7k.webkit) return;
    ba2x.Za0x = function(YY0x) { return !0 } })();
(function() { var c2x = NEJ.P,
        ba2x = c2x("nej.h"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        cN3x = c2x("nej.x"),
        R2x = {}; var bCT7M = function(E2x) { E2x = a1x.x2x(E2x); if (!E2x || !R2x[E2x.id]) return; var YA9r = !0,
            C2x = E2x.id;
        k2x.dZ4d(R2x[C2x], function() { YA9r = !1; return !0 }); if (YA9r) delete R2x[C2x] };
    h2x.q2x = cN3x.q2x = function() { var bSm2x = function() { var bg2x = ba2x.zw2x.apply(ba2x, arguments); if (!bg2x || !bg2x[2]) return; var tO0x = a1x.kL6F(bg2x[0]),
                ns7l = R2x[tO0x] || {};
            R2x[tO0x] = ns7l;
            tO0x = bg2x[4] || bg2x[1]; var yu1x = ns7l[tO0x] || [];
            ns7l[tO0x] = yu1x;
            yu1x.push({ type: bg2x[1], func: bg2x[2], capt: !!bg2x[3], sfun: bg2x[5] || bg2x[2] }); return bg2x.slice(0, 4) }; return function() { var bg2x = bSm2x.apply(null, arguments); if (!!bg2x) ba2x.bmH3x.apply(ba2x, bg2x); return this } }();
    h2x.mg7Z = cN3x.mg7Z = function() { var bSI3x = function() { var uZ0x = arguments,
                tO0x = a1x.kL6F(uZ0x[0]),
                ns7l = R2x[tO0x],
                t2x = (uZ0x[1] || "").toLowerCase(),
                d2x = uZ0x[2]; if (!ns7l || !t2x || !d2x) return;
            ns7l = ns7l[t2x]; if (!ns7l) return; var bSL3x = !!uZ0x[3],
                s2x = k2x.cV3x(ns7l, function(il5q) { return d2x == il5q.sfun && bSL3x == il5q.capt }); if (s2x < 0) return; var il5q = ns7l.splice(s2x, 1)[0]; return !il5q ? null : [a1x.x2x(tO0x), il5q.type, il5q.func, il5q.capt] }; return function() { var bg2x = bSI3x.apply(null, arguments); if (!!bg2x) { ba2x.Zf0x.apply(ba2x, bg2x);
                bCT7M(bg2x[0]) } return this } }();
    h2x.it5y = cN3x.it5y = function() { var bDJ8B = function() { var uZ0x = arguments,
                tO0x = a1x.kL6F(uZ0x[0]),
                ns7l = R2x[tO0x],
                yu1x = (uZ0x[1] || "").toLowerCase(); if (!ns7l || !yu1x) return; var E2x = a1x.x2x(tO0x);
            k2x.mz7s(ns7l[yu1x], function(il5q, s2x, i2x) { ba2x.Zf0x(E2x, il5q.type, il5q.func, il5q.capt);
                i2x.splice(s2x, 1) });
            delete ns7l[yu1x] }; var bUw3x = function(E2x) { E2x = a1x.x2x(E2x); if (!E2x) return; var C2x = E2x.id;
            k2x.dZ4d(R2x[C2x], function(i2x, t2x) { bDJ8B(C2x, t2x) });
            delete R2x[C2x] }; return function(E2x, t2x) {!t2x ? bUw3x(E2x) : bDJ8B(E2x, t2x);
            bCT7M(E2x); return this } }();
    h2x.U2x = function() { var bgs2x; var Fx3x = function(T2x, E2x) { var bs2x = T2x.split(":"); if (bs2x.length > 1) { if (!bgs2x) bgs2x = { c: a1x.by2x, d: a1x.u2x, a: a1x.gi5n }; var Fy3x = bgs2x[bs2x[0]]; if (!!Fy3x) return !!Fy3x(E2x, bs2x[1]);
                T2x = bs2x[1] } return !!a1x.gi5n(E2x, T2x) || !!a1x.u2x(E2x, T2x) || a1x.by2x(E2x, T2x) }; return function(d2x) { if (!d2x) return null; var E2x = d2x.target || d2x.srcElement,
                dD3x = arguments[1]; if (!dD3x) return E2x; if (k2x.fi4m(dD3x)) dD3x = Fx3x.g2x(null, dD3x); if (k2x.ge5j(dD3x)) { while (E2x) { if (!!dD3x(E2x)) return E2x;
                    E2x = E2x.parentNode } return null } return E2x } }();
    h2x.bh2x = function(d2x) { h2x.rQ9H(d2x);
        h2x.ce3x(d2x); return this };
    h2x.rQ9H = function(d2x) { if (!!d2x) {!!d2x.stopPropagation ? d2x.stopPropagation() : d2x.cancelBubble = !0 } return this };
    h2x.ce3x = function(d2x) { if (!!d2x) {!!d2x.preventDefault ? d2x.preventDefault() : d2x.returnValue = !1 } return this };
    h2x.cvr0x = function() { var oS8K = !1; var bUB3x = function() { if (oS8K) return;
            oS8K = !0;
            h2x.q2x(document, "click", bUH3x, !0) }; var bUH3x = function(d2x) { var E2x = h2x.U2x(d2x),
                bUN3x = a1x.u2x(E2x, "stopped"); if (bUN3x == "true") { h2x.bh2x(d2x);
                a1x.u2x(E2x, "stopped", "false") } }; return function(d2x) { if (!d2x) return; if (d2x.type == "click") { h2x.bh2x(d2x); return } bUB3x();
            a1x.u2x(h2x.U2x(d2x), "stopped", "true") } }();
    h2x.kI6C = function(d2x) { return d2x.pageX != null ? d2x.pageX : d2x.clientX + a1x.oc7V().scrollLeft };
    h2x.nt7m = function(d2x) { return d2x.pageY != null ? d2x.pageY : d2x.clientY + a1x.oc7V().scrollTop };
    h2x.z2x = cN3x.z2x = function(E2x, t2x, e2x) { var bg2x = ba2x.zw2x(E2x, t2x); if (!!bg2x) ba2x.bnY4c(bg2x[0], bg2x[1], e2x); return this };
    c2x("dbg").dumpEV = function() { return R2x };
    cN3x.isChange = !0 })();
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
        M2x = c2x("nej.p"); if (M2x.mr7k.trident0) return;
    JSON.parse = JSON.parse.ef4j(function(d2x) { var cL3x = d2x.args[0] || ""; if (cL3x.length >= 5e5) { d2x.stopped = !0;
            d2x.value = eval("(" + cL3x + ")") } }) })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        dP3x = c2x("nej.g"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        ba2x = c2x("nej.h"),
        cN3x = c2x("nej.x"),
        Fz3x, bke3x = {},
        R2x = document.createDocumentFragment();
    a1x.kL6F = cN3x.kL6F = function(E2x) { E2x = a1x.x2x(E2x); if (!E2x) return; var C2x = !!E2x.id ? E2x.id : "auto-id-" + k2x.Yp9g(16);
        E2x.id = C2x; if (a1x.x2x(C2x) != E2x) bke3x[C2x] = E2x; return C2x };
    a1x.x2x = cN3x.x2x = function(E2x) { var f2x = bke3x["" + E2x]; if (!!f2x) return f2x; if (!k2x.fi4m(E2x) && !k2x.vt0x(E2x)) return E2x; return document.getElementById(E2x) };
    a1x.cQ3x = cN3x.cQ3x = function(E2x, dJ3x) { E2x = a1x.x2x(E2x); if (!E2x) return null; var i2x = ba2x.boh4l(E2x); if (!!dJ3x) k2x.mz7s(i2x, function(f2x, s2x) { if (!a1x.by2x(f2x, dJ3x)) i2x.splice(s2x, 1) }); return i2x };
    a1x.I2x = cN3x.I2x = function(E2x, fe4i) { E2x = a1x.x2x(E2x); return !E2x ? null : ba2x.boQ4U(E2x, fe4i.trim()) };
    a1x.bEq8i = cN3x.bEq8i = function(E2x) { E2x = a1x.x2x(E2x); if (!!E2x) { E2x = E2x.parentNode; while (!!E2x) { if (E2x.scrollHeight > E2x.clientHeight) break;
                E2x = E2x.parentNode } if (!!E2x) return E2x } var ns7l = document.body.scrollHeight,
            yu1x = document.documentElement.scrollHeight; return yu1x >= ns7l ? document.documentElement : document.body };
    a1x.oc7V = function() { var bEr8j = function(i2x) { var m2x = 0;
            k2x.be2x(i2x, function(gl5q) { if (!gl5q) return; if (!m2x) { m2x = gl5q } else { m2x = Math.min(m2x, gl5q) } }); return m2x }; return function(uM0x) { var FE3x = uM0x || document,
                xT1x = FE3x.body,
                xU1x = FE3x.documentElement,
                m2x = { scrollTop: Math.max(xT1x.scrollTop, xU1x.scrollTop), scrollLeft: Math.max(xT1x.scrollLeft, xU1x.scrollLeft), clientWidth: bEr8j([xT1x.clientWidth, xT1x.offsetWidth, xU1x.clientWidth, xU1x.offsetWidth]), clientHeight: bEr8j([xT1x.clientHeight, xT1x.offsetHeight, xU1x.clientHeight, xU1x.offsetHeight]) };
            m2x.scrollWidth = Math.max(m2x.clientWidth, xT1x.scrollWidth, xU1x.scrollWidth);
            m2x.scrollHeight = Math.max(m2x.clientHeight, xT1x.scrollHeight, xU1x.scrollHeight); return m2x } }();
    a1x.cvk0x = function(fa4e, nu7n) { var m2x = NEJ.X({}, nu7n),
            bEt8l = fa4e.width / fa4e.height,
            Yh9Y = nu7n.width / nu7n.height; if (bEt8l > Yh9Y && nu7n.height > fa4e.height) { m2x.height = fa4e.height;
            m2x.width = m2x.height * Yh9Y } if (bEt8l < Yh9Y && nu7n.width > fa4e.width) { m2x.width = fa4e.width;
            m2x.height = m2x.width / Yh9Y } return m2x };
    a1x.cvi0x = function() { var cO3x = /\s+/; var sC9t = { left: function() { return 0 }, center: function(gG5L, nu7n) { return (gG5L.width - nu7n.width) / 2 }, right: function(gG5L, nu7n) { return gG5L.width - nu7n.width }, top: function() { return 0 }, middle: function(gG5L, nu7n) { return (gG5L.height - nu7n.height) / 2 }, bottom: function(gG5L, nu7n) { return gG5L.height - nu7n.height } }; return function(gG5L, nu7n, mC7v) { var m2x = {},
                bs2x = (mC7v || "").split(cO3x),
                gk5p = sC9t[bs2x[1]] || sC9t.middle,
                gD5I = sC9t[bs2x[0]] || sC9t.center;
            m2x.top = gk5p(gG5L, nu7n);
            m2x.left = gD5I(gG5L, nu7n); return m2x } }();
    a1x.rc8U = cN3x.rc8U = function(E2x, dJ3x) { ba2x.bcI1x(E2x, dJ3x || a1x.u2x(E2x, "hover") || "js-hover"); return this };
    a1x.FI3x = cN3x.FI3x = function(E2x) { E2x = a1x.x2x(E2x); if (!E2x) return;
        ba2x.bdc1x(E2x) };
    a1x.bVj3x = cN3x.bVj3x = function() { var R2x = {},
            bEz8r = 2; var bVp3x = function(C2x, dJ3x, d2x) { R2x[C2x] = [h2x.kI6C(d2x), h2x.nt7m(d2x)];
            a1x.y2x(C2x, dJ3x) }; var bVG3x = function(C2x, dJ3x, d2x) { var bF3x = R2x[C2x]; if (!k2x.ep4t(bF3x)) return; var bVM3x = Math.abs(h2x.kI6C(d2x) - bF3x[0]),
                bWo3x = Math.abs(h2x.nt7m(d2x) - bF3x[1]); if (bVM3x > bEz8r || bWo3x > bEz8r) bbr1x(C2x, dJ3x) }; var bbr1x = function(C2x, dJ3x) { if (k2x.ep4t(R2x[C2x])) { R2x[C2x] = -1;
                a1x.w2x(C2x, dJ3x) } }; return function(E2x, dJ3x) { var C2x = a1x.kL6F(E2x); if (!C2x || R2x[C2x] != null) return;
            R2x[C2x] = -1;
            dJ3x = dJ3x || a1x.u2x(C2x, "highlight") || "js-highlight";
            h2x.q2x(C2x, "touchstart", bVp3x.g2x(null, C2x, dJ3x));
            h2x.q2x(document, "touchmove", bVG3x.g2x(null, C2x, dJ3x));
            h2x.q2x(document, "touchend", bbr1x.g2x(null, C2x, dJ3x));
            h2x.q2x(document, "touchcancel", bbr1x.g2x(null, C2x, dJ3x)) } }();
    a1x.xZ1x = cN3x.xZ1x = function() { var bXS4W = function(C2x, dJ3x, bXT4X) { var E2x = a1x.x2x(C2x),
                d2x = { clazz: dJ3x, target: E2x }; if (a1x.by2x(E2x, dJ3x)) { d2x.toggled = !1;
                a1x.w2x(E2x, dJ3x) } else { d2x.toggled = !0;
                a1x.y2x(E2x, dJ3x) } bXT4X.call(null, d2x) }; return function(E2x, e2x) { E2x = a1x.x2x(E2x); if (!!E2x) { var hZ5e = { ontoggle: bm2x, clazz: "js-toggle", element: E2x.parentNode }; if (k2x.fi4m(e2x)) { var f2x = a1x.x2x(e2x);!!f2x ? hZ5e.element = f2x : hZ5e.clazz = e2x } else { NEJ.EX(hZ5e, e2x);
                    hZ5e.element = a1x.x2x(hZ5e.element) } var C2x = a1x.kL6F(hZ5e.element);
                h2x.q2x(E2x, "click", bXS4W.g2x(null, C2x, hZ5e.clazz, hZ5e.ontoggle || bm2x)) } return this } }();
    a1x.ln6h = cN3x.ln6h = function(E2x, e2x) { E2x = a1x.x2x(E2x); if (!E2x) return; var eD4H = 0,
            dJ3x = "js-focus"; if (k2x.vt0x(e2x)) { eD4H = e2x } else if (k2x.fi4m(e2x)) { dJ3x = e2x } else if (k2x.jZ6T(e2x)) { eD4H = e2x.mode || eD4H;
            dJ3x = e2x.clazz || dJ3x } var A2x = parseInt(a1x.u2x(E2x, "mode")); if (!isNaN(A2x)) eD4H = A2x;
        A2x = a1x.u2x(E2x, "focus"); if (!!A2x) dJ3x = A2x;
        ba2x.bfY2x(E2x, eD4H, dJ3x); return this };
    a1x.cT3x = function() { var bv2x = { a: { href: "#", hideFocus: !0 }, style: { type: "text/css" }, link: { type: "text/css", rel: "stylesheet" }, iframe: { frameBorder: 0 }, script: { defer: !0, type: "text/javascript" } }; return function(eY4c, fe4i, bB2x) { var E2x = document.createElement(eY4c);
            NEJ.X(E2x, bv2x[eY4c.toLowerCase()]); if (!!fe4i) E2x.className = fe4i;
            bB2x = a1x.x2x(bB2x); if (!!bB2x) bB2x.appendChild(E2x); return E2x } }();
    a1x.YL9C = function() { var caO5T = function() { if (location.hostname == document.domain) return "about:blank"; return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();' }; var cbt5y = function(T2x) { T2x = T2x.trim(); if (!T2x) return a1x.cT3x("iframe"); var fc4g; try { fc4g = document.createElement('<iframe name="' + T2x + '"></iframe>');
                fc4g.frameBorder = 0 } catch (e) { fc4g = a1x.cT3x("iframe");
                fc4g.name = T2x } return fc4g }; return function(e2x) { e2x = e2x || Y2x; var fc4g = cbt5y(e2x.name || ""); if (!e2x.visible) fc4g.style.display = "none"; if (k2x.ge5j(e2x.onload)) h2x.q2x(fc4g, "load", function(d2x) { if (!fc4g.src) return;
                h2x.it5y(fc4g, "load");
                e2x.onload(d2x) }); var bB2x = e2x.parent; if (k2x.ge5j(bB2x)) { try { bB2x(fc4g) } catch (e) {} } else {
                (a1x.x2x(bB2x) || document.body).appendChild(fc4g) } var dw3x = e2x.src || caO5T();
            window.setTimeout(function() { fc4g.src = dw3x }, 0); return fc4g } }();
    a1x.cH3x = cN3x.cH3x = function() { var bHw9n = function(ND6x) { ND6x.src = dP3x.bar0x }; var bHB9s = function(uS0x) { uS0x.src = "about:blank" }; return function(E2x, cdi5n) { E2x = a1x.x2x(E2x); if (!E2x) return this; if (!cdi5n) h2x.it5y(E2x);
            delete bke3x[E2x.id]; var eY4c = E2x.tagName; if (eY4c == "IFRAME") { bHB9s(E2x) } else if (eY4c == "IMG") { bHw9n(E2x) } else if (!!E2x.getElementsByTagName) { k2x.be2x(E2x.getElementsByTagName("img"), bHw9n);
                k2x.be2x(E2x.getElementsByTagName("iframe"), bHB9s) } if (!!E2x.parentNode) { E2x.parentNode.removeChild(E2x) } return this } }();
    a1x.mA7t = cN3x.mA7t = function(E2x) { E2x = a1x.x2x(E2x); if (!!E2x) R2x.appendChild(E2x); return this };
    a1x.bHU9L = cN3x.bHU9L = function(E2x) { E2x = a1x.x2x(E2x); if (!E2x) return;
        k2x.mz7s(E2x.childNodes, function(f2x) { a1x.cH3x(f2x) }) };
    a1x.FO4S = cN3x.FO4S = function() { var dJ3x, fZ5e = /\s+/; var cfg6a = function() { if (!!dJ3x) return;
            dJ3x = a1x.sg9X(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a1x.bIU9L() }; return function(E2x, e2x) { E2x = a1x.x2x(E2x); if (!E2x) return;
            cfg6a();
            e2x = e2x || Y2x; var bB2x = E2x.parentNode; if (!a1x.by2x(bB2x, dJ3x)) { bB2x = a1x.cT3x("span", dJ3x);
                E2x.insertAdjacentElement("beforeBegin", bB2x);
                bB2x.appendChild(E2x) } var bIV9M = e2x.nid || "",
                f2x = a1x.I2x(bB2x, bIV9M || dJ3x + "-show")[0]; if (!f2x) { var dE3x = ((e2x.clazz || "") + " " + bIV9M).trim();
                dE3x = dJ3x + "-show" + (!dE3x ? "" : " ") + dE3x;
                f2x = a1x.cT3x(e2x.tag || "span", dE3x);
                bB2x.appendChild(f2x) } var dE3x = e2x.clazz; if (!!dE3x) { dE3x = (dE3x || "").trim().split(fZ5e)[0] + "-parent";
                a1x.y2x(bB2x, dE3x) } return f2x } }();
    a1x.u2x = cN3x.u2x = function() { var bgG2x = {},
            eY4c = "data-",
            cO3x = /\-(.{1})/gi; var CO3x = function(E2x) { var C2x = a1x.kL6F(E2x); if (!!bgG2x[C2x]) return; var bv2x = {};
            k2x.be2x(E2x.attributes, function(f2x) { var J2x = f2x.nodeName; if (J2x.indexOf(eY4c) != 0) return;
                J2x = J2x.replace(eY4c, "").replace(cO3x, function($1, $2) { return $2.toUpperCase() });
                bv2x[J2x] = f2x.nodeValue || "" });
            bgG2x[C2x] = bv2x }; return function(E2x, J2x, A2x) { E2x = a1x.x2x(E2x); if (!E2x) return null; var XO9F = E2x.dataset; if (!XO9F) { CO3x(E2x);
                XO9F = bgG2x[E2x.id] } if (A2x !== undefined) XO9F[J2x] = A2x; return XO9F[J2x] } }();
    a1x.gi5n = cN3x.gi5n = function(E2x, T2x, A2x) { E2x = a1x.x2x(E2x); if (!E2x) return ""; if (A2x !== undefined && !!E2x.setAttribute) E2x.setAttribute(T2x, A2x); return ba2x.bgM2x(E2x, T2x) };
    a1x.ne7X = function(ds3x) { var qb8T = document.createElement("div");
        qb8T.innerHTML = ds3x; var i2x = a1x.cQ3x(qb8T); return i2x.length > 1 ? qb8T : i2x[0] };
    a1x.cgq6k = cN3x.cgq6k = function(E2x) { E2x = a1x.x2x(E2x); return !E2x ? "" : ba2x.bjd3x(E2x) };
    a1x.bJa9R = function(zH2x) { zH2x = (zH2x || "").trim(); return !zH2x ? null : ba2x.bjC3x(zH2x) };
    a1x.cgB6v = function(cZ3x, t2x) { cZ3x = cZ3x || ""; switch (t2x) {
            case "xml":
                cZ3x = a1x.bJa9R(cZ3x); break;
            case "json":
                try { cZ3x = JSON.parse(cZ3x) } catch (ex) { cZ3x = null } break } return cZ3x };
    a1x.hJ5O = cN3x.hJ5O = function() { var cgP6J = function(E2x) { return E2x == document.body || E2x == document.documentElement }; return function(dK3x, ny7r) { dK3x = a1x.x2x(dK3x); if (!dK3x) return null;
            ny7r = a1x.x2x(ny7r) || null; var m2x = { x: 0, y: 0 },
                bjE3x, dh3x, XC9t; while (!!dK3x && dK3x != ny7r) { bjE3x = cgP6J(dK3x);
                dh3x = bjE3x ? 0 : dK3x.scrollLeft;
                XC9t = parseInt(a1x.da3x(dK3x, "borderLeftWidth")) || 0;
                m2x.x += dK3x.offsetLeft + XC9t - dh3x;
                dh3x = bjE3x ? 0 : dK3x.scrollTop;
                XC9t = parseInt(a1x.da3x(dK3x, "borderTopWidth")) || 0;
                m2x.y += dK3x.offsetTop + XC9t - dh3x;
                dK3x = dK3x.offsetParent } return m2x } }();
    a1x.ng7Z = cN3x.ng7Z = function(E2x) { var bj2x = a1x.hJ5O(E2x);
        window.scrollTo(bj2x.x, bj2x.y); return this };
    a1x.cub0x = function(sh9Y) { sh9Y = (sh9Y || "").trim(); return ba2x.bzb6V(sh9Y) };
    a1x.chh6b = cN3x.chh6b = function(E2x, T2x, bv2x) { E2x = a1x.x2x(E2x); if (!E2x) return this; var A2x = ba2x.bzS7L(T2x, bv2x); if (!A2x) return this;
        a1x.X2x(E2x, "transform", A2x); return this };
    a1x.fy4C = cN3x.fy4C = function(E2x, bv2x) { E2x = a1x.x2x(E2x); if (!!E2x) k2x.dZ4d(bv2x, function(A2x, T2x) { a1x.X2x(E2x, T2x, A2x) }); return this };
    a1x.chq6k = cN3x.chq6k = function(fE4I, e2x) { fE4I = a1x.x2x(fE4I); if (!fE4I) return { start: 0, end: 0 }; if (k2x.vt0x(e2x)) e2x = { start: e2x, end: e2x }; if (e2x != null) { if (e2x.end == null) e2x.end = e2x.start || 0;
            ba2x.bdl1x(fE4I, e2x) } else { e2x = ba2x.bfj2x(fE4I) } return e2x };
    a1x.X2x = cN3x.X2x = function(E2x, T2x, A2x) { E2x = a1x.x2x(E2x); if (!!E2x) ba2x.bqQ4U(E2x, T2x, A2x); return this };
    a1x.da3x = cN3x.da3x = function(E2x, T2x) { E2x = a1x.x2x(E2x); if (!E2x) return ""; var gn5s = !window.getComputedStyle ? E2x.currentStyle || Y2x : window.getComputedStyle(E2x, null); return gn5s[ba2x.bzT7M(T2x)] || "" };
    a1x.bJv9m = function() { var cO3x = /[\s\r\n]+/gi; return function(cd3x) { cd3x = (cd3x || "").trim().replace(cO3x, " "); if (!cd3x) return; var f2x = a1x.cT3x("style");
            document.head.appendChild(f2x);
            ba2x.bdd1x(f2x, ba2x.cnQ8I(cd3x)); return f2x } }();
    a1x.bJB9s = function(wt1x) { try { wt1x = wt1x.trim(); if (!!wt1x) return (new Function(wt1x))() } catch (ex) { console.error(ex.message);
            console.error(ex.stack) } };
    a1x.sg9X = function() { var cO3x = /#<.*?>/g,
            fY5d = +(new Date); return function(jp6j) { if (!Fz3x) Fz3x = []; var fe4i = "auto-" + fY5d++;
            Fz3x.push(jp6j.replace(cO3x, fe4i)); return fe4i } }();
    a1x.bIU9L = function() { if (!!Fz3x) { a1x.bJv9m(Fz3x.join(""));
            Fz3x = null } return this };
    a1x.ctW0x = function(cd3x, jp6j) { cd3x = a1x.x2x(cd3x); return !cd3x ? null : ba2x.bds1x(cd3x, jp6j) };
    a1x.y2x = cN3x.y2x = function() { ba2x.bpf4j.apply(ba2x, arguments); return this };
    a1x.w2x = cN3x.w2x = function() { ba2x.bqq4u.apply(ba2x, arguments); return this };
    a1x.ev4z = cN3x.ev4z = function() { ba2x.QA7t.apply(ba2x, arguments); return this };
    a1x.by2x = cN3x.by2x = function() { return ba2x.bce1x.apply(ba2x, arguments) }; if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cN3x.isChange = !0 })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        eT4X = NEJ.R,
        bm2x = NEJ.F,
        a1x = c2x("nej.e"),
        ba2x = c2x("nej.h"),
        k2x = c2x("nej.u"); var Dj3x = function(j2x, t2x) { try { t2x = t2x.toLowerCase(); if (j2x === null) return t2x == "null"; if (j2x === undefined) return t2x == "undefined"; return Y2x.toString.call(j2x).toLowerCase() == "[object " + t2x + "]" } catch (e) { return !1 } };
    k2x.ge5j = function(j2x) { return Dj3x(j2x, "function") };
    k2x.fi4m = function(j2x) { return Dj3x(j2x, "string") };
    k2x.vt0x = function(j2x) { return Dj3x(j2x, "number") };
    k2x.ctV0x = function(j2x) { return Dj3x(j2x, "boolean") };
    k2x.FY4c = function(j2x) { return Dj3x(j2x, "date") };
    k2x.ep4t = function(j2x) { return Dj3x(j2x, "array") };
    k2x.jZ6T = function(j2x) { return Dj3x(j2x, "object") };
    k2x.fh4l = function() { var cO3x = /[^\x00-\xfff]/g; return function(bi2x) { return ("" + (bi2x || "")).replace(cO3x, "**").length } }();
    k2x.cV3x = function(i2x, r2x) { var dD3x = k2x.ge5j(r2x) ? r2x : function(A2x) { return A2x === r2x },
            s2x = k2x.dZ4d(i2x, dD3x); return s2x != null ? s2x : -1 };
    k2x.ctO9F = function() { var bKv9m; var Qe7X = function(i2x, nE7x, ni7b) { if (nE7x > ni7b) return -1; var Ep3x = Math.ceil((nE7x + ni7b) / 2),
                m2x = bKv9m(i2x[Ep3x], Ep3x, i2x); if (m2x == 0) return Ep3x; if (m2x < 0) return Qe7X(i2x, nE7x, Ep3x - 1); return Qe7X(i2x, Ep3x + 1, ni7b) }; return function(i2x, Fy3x) { bKv9m = Fy3x || bm2x; return Qe7X(i2x, 0, i2x.length - 1) } }();
    k2x.mz7s = function(i2x, du3x, ib5g) { if (!i2x || !i2x.length || !k2x.ge5j(du3x)) return null; for (var i = i2x.length - 1; i >= 0; i--)
            if (!!du3x.call(ib5g, i2x[i], i, i2x)) return i; return null };
    k2x.be2x = function(i2x, du3x, ib5g) { if (!i2x || !i2x.length || !k2x.ge5j(du3x)) return this; if (!!i2x.forEach) { i2x.forEach(du3x, ib5g); return this } for (var i = 0, l = i2x.length; i < l; i++) du3x.call(ib5g, i2x[i], i, i2x); return this };
    k2x.dZ4d = function(i2x, du3x, ib5g) { if (!i2x || !k2x.ge5j(du3x)) return null; if (i2x.length != null) { if (i2x.length > 0)
                for (var i = 0, l = i2x.length; i < l; i++)
                    if (!!du3x.call(ib5g, i2x[i], i, i2x)) return i } if (k2x.jZ6T(i2x)) { for (var x in i2x)
                if (i2x.hasOwnProperty(x) && !!du3x.call(ib5g, i2x[x], x, i2x)) return x } return null };
    k2x.ckt7m = function(hY5d, ckH7A, e2x) { hY5d = hY5d || [];
        e2x = e2x || Y2x; var bLT0x = !!e2x.union,
            ue0x = !!e2x.begin,
            Xo9f = e2x.compare,
            coz8r = bLT0x && ue0x ? k2x.mz7s : k2x.be2x;
        coz8r(ckH7A, function(r2x) { if (!!Xo9f) Xo9f = Xo9f.dW3x(r2x); var s2x = k2x.cV3x(hY5d, Xo9f || r2x); if (s2x >= 0) hY5d.splice(s2x, 1); if (bLT0x) hY5d[ue0x ? "unshift" : "push"](r2x) }); return hY5d };
    k2x.Bo2x = function(bv2x, bi2x) { if (!bv2x || !bi2x || !bi2x.replace) return bi2x || ""; return bi2x.replace(bv2x.r, function($1) { var m2x = bv2x[!bv2x.i ? $1.toLowerCase() : $1]; return m2x != null ? m2x : $1 }) };
    k2x.dM3x = function() { var bv2x = { r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g, "<": "&lt;", ">": "&gt;", "&": "&amp;", " ": "&nbsp;", '"': "&quot;", "'": "&#39;", "\n": "<br/>", "\r": "", "&lt;": "&lt;", "&gt;": "&gt;" }; return function(bi2x) { return k2x.Bo2x(bv2x, bi2x) } }();
    k2x.Qj7c = function() { var bv2x = { r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi, "&lt;": "<", "&gt;": ">", "&amp;": "&", "&nbsp;": " ", "&#39;": "'", "&quot;": '"', "<br/>": "\n" }; return function(bi2x) { return k2x.Bo2x(bv2x, bi2x) } }();
    k2x.iY5d = function() { var bv2x = { i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g },
            cpe8W = ["ä¸Šåˆ", "ä¸‹åˆ"],
            cqo9f = ["A.M.", "P.M."],
            bbp1x = ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
            cqZ9Q = ["ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­", "ä¸ƒ", "å…«", "ä¹", "å", "åä¸€", "åäºŒ"],
            csB9s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]; var QP7I = function(ft4x) { ft4x = parseInt(ft4x) || 0; return (ft4x < 10 ? "0" : "") + ft4x }; var csE9v = function(oN8F) { return oN8F < 12 ? 0 : 1 }; return function(bA2x, Gi4m, ctf9W) { if (!bA2x || !Gi4m) return "";
            bA2x = k2x.WW9N(bA2x);
            bv2x.yyyy = bA2x.getFullYear();
            bv2x.yy = ("" + bv2x.yyyy).substr(2);
            bv2x.M = bA2x.getMonth() + 1;
            bv2x.MM = QP7I(bv2x.M);
            bv2x.eM = csB9s[bv2x.M - 1];
            bv2x.cM = cqZ9Q[bv2x.M - 1];
            bv2x.d = bA2x.getDate();
            bv2x.dd = QP7I(bv2x.d);
            bv2x.H = bA2x.getHours();
            bv2x.HH = QP7I(bv2x.H);
            bv2x.m = bA2x.getMinutes();
            bv2x.mm = QP7I(bv2x.m);
            bv2x.s = bA2x.getSeconds();
            bv2x.ss = QP7I(bv2x.s);
            bv2x.ms = bA2x.getMilliseconds();
            bv2x.w = bbp1x[bA2x.getDay()]; var bNA0x = csE9v(bv2x.H);
            bv2x.ct = cpe8W[bNA0x];
            bv2x.et = cqo9f[bNA0x]; if (!!ctf9W) { bv2x.H = bv2x.H % 12 } return k2x.Bo2x(bv2x, Gi4m) } }();
    k2x.WW9N = function(bA2x) { var cD3x = bA2x; if (k2x.fi4m(bA2x)) cD3x = new Date(Date.parse(bA2x)); if (!k2x.FY4c(bA2x)) cD3x = new Date(bA2x); return cD3x };
    k2x.FI3x = function(csW9N, csU9L) { return (new Number(csW9N)).toFixed(csU9L) };
    k2x.bdp1x = function() { var fZ5e = /([^\/:])\/.*$/,
            jj6d = /\/[^\/]+$/,
            DI3x = /[#\?]/,
            bdz1x = location.href.split(/[?#]/)[0],
            rk8c = document.createElement("a"); var bed1x = function(lH7A) { return (lH7A || "").indexOf("://") > 0 }; var bNw0x = function(lH7A) { return (lH7A || "").split(DI3x)[0].replace(jj6d, "/") }; var csQ9H = function(lH7A, fw4A) { if (lH7A.indexOf("/") == 0) return fw4A.replace(fZ5e, "$1") + lH7A; return bNw0x(fw4A) + lH7A };
        bdz1x = bNw0x(bdz1x); return function(lH7A, fw4A) { lH7A = (lH7A || "").trim(); if (!bed1x(fw4A)) fw4A = bdz1x; if (!lH7A) return fw4A; if (bed1x(lH7A)) return lH7A;
            lH7A = csQ9H(lH7A, fw4A);
            rk8c.href = lH7A;
            lH7A = rk8c.href; return bed1x(lH7A) ? lH7A : rk8c.getAttribute("href", 4) } }();
    k2x.csL9C = function() { var cO3x = /^([\w]+?:\/\/.*?(?=\/|$))/i; return function(V2x) { if (cO3x.test(V2x || "")) return RegExp.$1.toLowerCase(); return "" } }();
    k2x.bNs0x = function(G2x, hZ5e) { if (!G2x) return hZ5e; var T2x = G2x.tagName.toLowerCase(),
            i2x = a1x.cQ3x(G2x); if (!i2x || !i2x.length) { hZ5e[T2x] = G2x.textContent || G2x.text || ""; return hZ5e } var dQ3x = {};
        hZ5e[T2x] = dQ3x;
        k2x.be2x(i2x, function(f2x) { k2x.bNs0x(f2x, dQ3x) }); return hZ5e };
    k2x.ctj9a = function(zH2x) { try { return k2x.bNs0x(a1x.bJa9R(zH2x), {}) } catch (ex) { return null } };
    k2x.bNq0x = function(hC5H, JB5G) { var hZ5e = {};
        k2x.be2x((hC5H || "").split(JB5G), function(T2x) { var WM9D = T2x.split("="); if (!WM9D || !WM9D.length) return; var J2x = WM9D.shift(); if (!J2x) return;
            hZ5e[decodeURIComponent(J2x)] = decodeURIComponent(WM9D.join("=")) }); return hZ5e };
    k2x.uk0x = function(gc5h, JB5G, csH9y) { if (!gc5h) return ""; var bs2x = []; for (var x in gc5h) { bs2x.push(encodeURIComponent(x) + "=" + (!!csH9y ? encodeURIComponent(gc5h[x]) : gc5h[x])) } return bs2x.join(JB5G || ",") };
    k2x.ho5t = function(bD2x) { return k2x.bNq0x(bD2x, "&") };
    k2x.df3x = function(gc5h) { return k2x.uk0x(gc5h, "&", !0) };
    k2x.ctl9c = function(gc5h) { return ba2x.EZ3x(gc5h) };
    k2x.ctm9d = function(i2x, dD3x) { var m2x = {};
        k2x.be2x(i2x, function(r2x) { var J2x = r2x; if (!!dD3x) { J2x = dD3x(r2x) } m2x[J2x] = r2x }); return m2x };
    k2x.ctn9e = function(ft4x, fV5a) { var csA9r = ("" + ft4x).length,
            csz9q = Math.max(1, parseInt(fV5a) || 0),
            dh3x = csz9q - csA9r; if (dh3x > 0) { ft4x = (new Array(dh3x + 1)).join("0") + ft4x } return "" + ft4x };
    k2x.WH9y = function(gc5h, T2x) { if (!k2x.ep4t(T2x)) { try { delete gc5h[T2x] } catch (e) { gc5h[T2x] = undefined } return this } k2x.be2x(T2x, k2x.WH9y.g2x(k2x, gc5h)); return this };
    k2x.Yp9g = function() { var bNo0x = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; return function(bp2x) { bp2x = bp2x || 10; var m2x = []; for (var i = 0, bNn0x; i < bp2x; ++i) { bNn0x = Math.floor(Math.random() * bNo0x.length);
                m2x.push(bNo0x.charAt(bNn0x)) } return m2x.join("") } }();
    k2x.JG5L = function(fG4K, fa4e) { return Math.floor(Math.random() * (fa4e - fG4K) + fG4K) };
    k2x.mJ7C = function(bp2x) { bp2x = Math.max(0, Math.min(bp2x || 8, 30)); var fG4K = Math.pow(10, bp2x - 1),
            fa4e = fG4K * 10; return k2x.JG5L(fG4K, fa4e).toString() };
    k2x.WB8t = function() { var fY5d = +(new Date); return function() { return "" + fY5d++ } }() })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        eT4X = NEJ.R,
        bm2x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        M2x = c2x("nej.ut"),
        nI7B; if (!!M2x.cz3x) return;
    M2x.cz3x = NEJ.C();
    nI7B = M2x.cz3x.prototype;
    M2x.cz3x.B2x = function(e2x) { e2x = e2x || {}; var cp3x = !!this.yL2x && this.yL2x.shift(); if (!cp3x) { cp3x = new this(e2x);
            this.csw9n = (this.csw9n || 0) + 1 } cp3x.bk2x(e2x); return cp3x };
    M2x.cz3x.S2x = function() { var JI5N = function(r2x, s2x, i2x) { r2x.S2x();
            i2x.splice(s2x, 1) }; return function(cp3x) { if (!cp3x) return null; if (!k2x.ep4t(cp3x)) { if (!(cp3x instanceof this)) { var fe4i = cp3x.constructor; if (!!fe4i.S2x) fe4i.S2x(cp3x); return null } if (cp3x == this.eJ4N) delete this.eJ4N; if (cp3x == this.yO2x) delete this.yO2x;
                cp3x.bC2x(); if (!this.yL2x) this.yL2x = []; if (k2x.cV3x(this.yL2x, cp3x) < 0) { this.yL2x.push(cp3x) } return null } k2x.mz7s(cp3x, JI5N, this) } }();
    M2x.cz3x.fX5c = function(e2x) { e2x = e2x || {}; if (!this.eJ4N) this.eJ4N = this.B2x(e2x); return this.eJ4N };
    M2x.cz3x.csv9m = function(e2x, qD8v) { e2x = e2x || {}; if (!!qD8v && !!this.yO2x) { this.yO2x.S2x();
            delete this.yO2x } if (!this.yO2x) { this.yO2x = this.B2x(e2x) } else { this.yO2x.bk2x(e2x) } return this.yO2x };
    nI7B.cl3x = function() { var fY5d = +(new Date); return function() { this.id = fY5d++;
            this.kQ6K = {};
            this.bNi0x = {} } }();
    nI7B.bk2x = function(e2x) { this.blq3x(e2x) };
    nI7B.bC2x = function() { this.it5y();
        this.Gq4u() };
    nI7B.bU3x = function() { var fY5d = +(new Date); var crZ9Q = function(bg2x) { if (!bg2x || bg2x.length < 3) return;
            this.bNi0x["de-" + fY5d++] = bg2x;
            h2x.q2x.apply(h2x, bg2x) }; return function(i2x) { k2x.be2x(i2x, crZ9Q, this) } }();
    nI7B.Gq4u = function() { var crY9P = function(bg2x, J2x, bv2x) { delete bv2x[J2x];
            h2x.mg7Z.apply(h2x, bg2x) }; return function() { k2x.dZ4d(this.bNi0x, crY9P) } }();
    nI7B.ctr9i = function(dD3x) { dD3x = dD3x || bm2x;
        k2x.dZ4d(this, function(EF3x, J2x, bv2x) { if (!!EF3x && !!EF3x.S2x && !dD3x(EF3x)) { delete bv2x[J2x];
                EF3x.S2x() } }) };
    nI7B.S2x = function() { this.constructor.S2x(this) };
    nI7B.bNf0x = function(t2x) { var d2x = this.kQ6K[t2x.toLowerCase()]; return !!d2x && d2x !== bm2x };
    nI7B.q2x = function(t2x, d2x) { this.uC0x.apply(this, arguments); return this };
    nI7B.mg7Z = function(t2x, d2x) { var t2x = (t2x || "").toLowerCase(),
            dH3x = this.kQ6K[t2x]; if (!k2x.ep4t(dH3x)) { if (dH3x == d2x) delete this.kQ6K[t2x]; return } k2x.mz7s(dH3x, function(eH4L, s2x, i2x) { if (eH4L == d2x) i2x.splice(s2x, 1) }) };
    nI7B.uC0x = function(t2x, d2x) { if (!!t2x && k2x.ge5j(d2x)) this.kQ6K[t2x.toLowerCase()] = d2x; return this };
    nI7B.blq3x = function() { var crU9L = function(d2x, t2x) { this.uC0x(t2x, d2x) }; return function(dH3x) { k2x.dZ4d(dH3x, crU9L, this); return this } }();
    nI7B.it5y = function() { var bmY3x = function(d2x, t2x) { this.it5y(t2x) }; return function(t2x) { var t2x = (t2x || "").toLowerCase(); if (!!t2x) { delete this.kQ6K[t2x] } else { k2x.dZ4d(this.kQ6K, bmY3x, this) } return this } }();
    nI7B.bmZ3x = function(t2x, d2x) { if (!t2x || !k2x.ge5j(d2x)) return this;
        t2x = t2x.toLowerCase(); var dH3x = this.kQ6K[t2x]; if (!dH3x) { this.kQ6K[t2x] = d2x; return this } if (!k2x.ep4t(dH3x)) { this.kQ6K[t2x] = [dH3x] } this.kQ6K[t2x].push(d2x); return this };
    nI7B.z2x = function(t2x) { var d2x = this.kQ6K[(t2x || "").toLowerCase()]; if (!d2x) return this; var bg2x = eT4X.slice.call(arguments, 1); if (!k2x.ep4t(d2x)) return d2x.apply(this, bg2x);
        k2x.be2x(d2x, function(dc3x) { try { dc3x.apply(this, bg2x) } catch (ex) { console.error(ex.message);
                console.error(ex.stack) } }, this); return this };
    M2x.Wu8m = function() { var R2x = {}; return function(C2x, fe4i, e2x) { var eC4G = fe4i.crT9K; if (!eC4G) { eC4G = k2x.Yp9g(10);
                fe4i.crT9K = eC4G } var J2x = C2x + "-" + eC4G,
                cp3x = R2x[J2x]; if (!!e2x && !cp3x) { cp3x = fe4i.B2x(e2x);
                cp3x.S2x = cp3x.S2x.ef4j(function(d2x) { delete R2x[J2x];
                    delete cp3x.S2x });
                R2x[J2x] = cp3x } return cp3x } }() })();
(function() { var o = NEJ.O,
        u = NEJ.P("nej.u"),
        j = NEJ.P("nej.j");
    j.gJ5O = function() { var cD3x = new Date,
            crS9J = +cD3x,
            bot4x = 864e5; var crP9G = function(T2x) { var qK8C = document.cookie,
                rN9E = "\\b" + T2x + "=",
                Wr8j = qK8C.search(rN9E); if (Wr8j < 0) return "";
            Wr8j += rN9E.length - 2; var yU2x = qK8C.indexOf(";", Wr8j); if (yU2x < 0) yU2x = qK8C.length; return qK8C.substring(Wr8j, yU2x) || "" }; return function(T2x, j2x) { if (j2x === undefined) return crP9G(T2x); if (u.fi4m(j2x)) { if (!!j2x) { document.cookie = T2x + "=" + j2x + ";"; return j2x } j2x = { expires: -100 } } j2x = j2x || o; var qK8C = T2x + "=" + (j2x.value || "") + ";";
            delete j2x.value; if (j2x.expires !== undefined) { cD3x.setTime(crS9J + j2x.expires * bot4x);
                j2x.expires = cD3x.toGMTString() } qK8C += u.uk0x(j2x, ";");
            document.cookie = qK8C } }() })();
(function() { var c2x = NEJ.P,
        bm2x = NEJ.F,
        iz5E = c2x("nej.c"),
        dP3x = c2x("nej.g"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        M2x = c2x("nej.ut.j"),
        k2x = c2x("nej.u"),
        b2x; if (!!M2x.Gs4w) return;
    M2x.Gs4w = NEJ.C();
    b2x = M2x.Gs4w.O2x(H2x.cz3x);
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.oh7a = { noescape: false, url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4 };
        NEJ.EX(this.oh7a, e2x); var An2x = iz5E.x2x("csrf"); if ((/^\/[^\/]/.test(this.oh7a.url) || this.oh7a.url.indexOf(location.protocol + "//" + location.host) == 0) && !!An2x.cookie && !!An2x.param) { var bD2x = encodeURIComponent(An2x.param) + "=" + encodeURIComponent(v2x.gJ5O(An2x.cookie) || ""),
                JB5G = this.oh7a.url.indexOf("?") < 0 ? "?" : "&";
            this.oh7a.url += JB5G + bD2x } this.Wl8d = e2x.headers || {}; var bi2x = this.Wl8d[dP3x.ws1x]; if (bi2x == null) this.Wl8d[dP3x.ws1x] = dP3x.bTF3x };
    b2x.bC2x = function() { this.bH3x();
        delete this.yX2x;
        delete this.oh7a;
        delete this.Wl8d };
    b2x.crO9F = function(bi2x) { var bv2x = { r: /\<|\>/g, "<": "&lt;", ">": "&gt;" }; if (!this.oh7a.noescape) { return k2x.Bo2x(bv2x, bi2x) } else { return bi2x } };
    b2x.sV9M = function(d2x) { var dY4c = d2x.status; if (dY4c == -1) { this.z2x("onerror", { code: dP3x.bvV6P, message: "è¯·æ±‚[" + this.oh7a.url + "]è¶…æ—¶ï¼" }); return } if (("" + dY4c).indexOf("2") != 0) { this.z2x("onerror", { data: dY4c, code: dP3x.blB3x, message: "æœåŠ¡å™¨è¿”å›žå¼‚å¸¸çŠ¶æ€[" + dY4c + "]!", extData: d2x.result }); return } this.z2x("onload", a1x.cgB6v(this.crO9F(d2x.result), this.oh7a.type)) };
    b2x.ck3x = bm2x;
    b2x.bbo1x = function(j2x) { var V2x = this.oh7a.url; if (!V2x) { this.z2x("onerror", { code: dP3x.bhS2x, message: "æ²¡æœ‰è¾“å…¥è¯·æ±‚åœ°å€ï¼" }); return this } try { this.oh7a.data = j2x == null ? null : j2x; var d2x = { request: this.oh7a, headers: this.Wl8d }; try { this.z2x("onbeforerequest", d2x) } catch (ex) { console.error(ex.message);
                console.error(ex.stack) } this.ck3x(d2x) } catch (e) { this.z2x("onerror", { code: dP3x.blB3x, message: "è¯·æ±‚[" + V2x + "]å¤±è´¥:" + e.message + "ï¼" }) } return this };
    b2x.jk6e = bm2x })();
(function() { var c2x = NEJ.P,
        bm2x = NEJ.F,
        ba2x = c2x("nej.h"),
        dP3x = c2x("nej.g"),
        k2x = c2x("nej.u"),
        M2x = c2x("nej.ut.j"),
        R2x = {},
        Kf5k; if (!!M2x.Wc8U) return;
    M2x.Wc8U = NEJ.C();
    Kf5k = M2x.Wc8U.O2x(M2x.Gs4w);
    Kf5k.bC2x = function() { this.bH3x();
        window.clearTimeout(this.dN3x);
        delete this.dN3x; try { this.qO8G.onreadystatechange = bm2x;
            this.qO8G.abort() } catch (e) {} delete this.qO8G };
    Kf5k.ck3x = function() { var crK9B = function(A2x, J2x) { this.qO8G.setRequestHeader(J2x, A2x) }; return function(e2x) { var fF4J = e2x.request,
                nM7F = e2x.headers;
            this.qO8G = ba2x.bcD1x(); if (nM7F[dP3x.ws1x] === dP3x.Eu3x) { delete nM7F[dP3x.ws1x];
                this.qO8G.upload.onprogress = this.hl5q.g2x(this, 1); if (fF4J.data.tagName === "FORM") fF4J.data = new FormData(fF4J.data) } this.qO8G.onreadystatechange = this.hl5q.g2x(this, 2); if (fF4J.timeout != 0) { this.dN3x = window.setTimeout(this.hl5q.g2x(this, 3), fF4J.timeout) } this.qO8G.open(fF4J.method, fF4J.url, !fF4J.sync);
            k2x.dZ4d(nM7F, crK9B, this); if (!!this.oh7a.cookie && "withCredentials" in this.qO8G) this.qO8G.withCredentials = !0;
            this.qO8G.send(fF4J.data) } }();
    Kf5k.hl5q = function(t2x) { switch (t2x) {
            case 1:
                this.z2x("onuploading", arguments[1]); break;
            case 2:
                if (this.qO8G.readyState == 4) this.sV9M({ status: this.qO8G.status, result: this.qO8G.responseText || "" }); break;
            case 3:
                this.sV9M({ status: -1 }); break } };
    Kf5k.jk6e = function() { this.sV9M({ status: 0 }); return this } })();
(function() { if (typeof TrimPath === "undefined") { TrimPath = {}; if (typeof exports !== "undefined") TrimPath = exports } var Kx5C = {},
        Wa8S = [],
        bNc0x = /\s+/g,
        fY5d = +(new Date),
        GA4E, bN3x, ll6f; var AG2x = function() { var fZ5e = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            jj6d = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            DI3x = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            bdn1x = /^new\s+/,
            crD9u = /['"]/; var crA9r = function(A2x) { if (fZ5e.test(A2x)) return;
            A2x = A2x.split(".")[0].trim(); if (!A2x || crD9u.test(A2x)) return;
            A2x = A2x.replace(bdn1x, ""); try { if (DI3x.test(A2x)) return;
                ll6f[A2x] = 1 } catch (e) {} }; return function(bi2x) { bi2x = bi2x || ""; if (!bi2x || fZ5e.test(bi2x)) return; var bs2x = bi2x.split(jj6d); for (var i = 0, l = bs2x.length; i < l; i++) crA9r(bs2x[i]) } }(); var crz9q = function(dk3x) { if (dk3x[2] != "in") throw "bad for loop statement: " + dk3x.join(" ");
        Wa8S.push(dk3x[1]);
        AG2x(dk3x[3]); return "var __HASH__" + dk3x[1] + " = " + dk3x[3] + "," + dk3x[1] + "," + dk3x[1] + "_count=0;" + "if (!!__HASH__" + dk3x[1] + ")" + "for(var " + dk3x[1] + "_key in __HASH__" + dk3x[1] + "){" + dk3x[1] + " = __HASH__" + dk3x[1] + "[" + dk3x[1] + "_key];" + "if (typeof(" + dk3x[1] + ')=="function") continue;' + dk3x[1] + "_count++;" }; var crw9n = function() { var dk3x = Wa8S[Wa8S.length - 1]; return "}; if(!__HASH__" + dk3x + "||!" + dk3x + "_count){" }; var crt9k = function() { Wa8S.pop(); return "};" }; var crs9j = function(dk3x) { if (dk3x[2] != "as") throw "bad for list loop statement: " + dk3x.join(" "); var KF5K = dk3x[1].split(".."); if (KF5K.length > 1) { AG2x(KF5K[0]);
            AG2x(KF5K[1]); return "for(var " + dk3x[3] + "," + dk3x[3] + "_index=0," + dk3x[3] + "_beg=" + KF5K[0] + "," + dk3x[3] + "_end=" + KF5K[1] + "," + dk3x[3] + "_length=parseInt(" + dk3x[3] + "_end-" + dk3x[3] + "_beg+1);" + dk3x[3] + "_index<" + dk3x[3] + "_length;" + dk3x[3] + "_index++){" + dk3x[3] + " = " + dk3x[3] + "_beg+" + dk3x[3] + "_index;" } else { AG2x(dk3x[1]); return "for(var __LIST__" + dk3x[3] + " = " + dk3x[1] + "," + dk3x[3] + "," + dk3x[3] + "_index=0," + dk3x[3] + "_length=__LIST__" + dk3x[3] + ".length;" + dk3x[3] + "_index<" + dk3x[3] + "_length;" + dk3x[3] + "_index++){" + dk3x[3] + " = __LIST__" + dk3x[3] + "[" + dk3x[3] + "_index];" } }; var crn9e = function(dk3x) { if (!dk3x || !dk3x.length) return;
        dk3x.shift(); var T2x = dk3x[0].split("(")[0]; return "var " + T2x + " = function" + dk3x.join("").replace(T2x, "") + "{var __OUT=[];" }; var crm9d = function(dk3x) { if (!dk3x[1]) throw "bad include statement: " + dk3x.join(" "); return 'if (typeof inline == "function"){__OUT.push(inline(' }; var ber1x = function(kR6L, dk3x) { AG2x(dk3x.slice(1).join(" ")); return kR6L }; var crj9a = function(dk3x) { return ber1x("if(", dk3x) }; var cri9Z = function(dk3x) { return ber1x("}else if(", dk3x) }; var crh9Y = function(dk3x) { return ber1x("var ", dk3x) };
    bN3x = { blk: /^\{(cdata|minify|eval)/i, tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include", def: { "if": { pfix: crj9a, sfix: "){", pmin: 1 }, "else": { pfix: "}else{" }, elseif: { pfix: cri9Z, sfix: "){", pdft: "true" }, "/if": { pfix: "}" }, "for": { pfix: crz9q, pmin: 3 }, forelse: { pfix: crw9n }, "/for": { pfix: crt9k }, list: { pfix: crs9j, pmin: 3 }, "/list": { pfix: "};" }, "break": { pfix: "break;" }, "var": { pfix: crh9Y, sfix: ";" }, macro: { pfix: crn9e }, "/macro": { pfix: 'return __OUT.join("");};' }, trim: { pfix: function() { GA4E = !0 } }, "/trim": { pfix: function() { GA4E = null } }, inline: { pfix: crm9d, pmin: 1, sfix: "));}" } }, ext: { seed: function(kR6L) { return (kR6L || "") + "" + fY5d }, "default": function(A2x, ky6s) { return A2x || ky6s } } }; var cra9R = function() { var cqW9N = /\\([\{\}])/g; return function(bi2x, iJ5O) { bi2x = bi2x.replace(cqW9N, "$1"); var dk3x = bi2x.slice(1, -1).split(bNc0x),
                bc2x = bN3x.def[dk3x[0]]; if (!bc2x) { VK8C(bi2x, iJ5O); return } if (!!bc2x.pmin && bc2x.pmin >= dk3x.length) throw "Statement needs more parameters:" + bi2x;
            iJ5O.push(!!bc2x.pfix && typeof bc2x.pfix != "string" ? bc2x.pfix(dk3x) : bc2x.pfix || ""); if (!!bc2x.sfix) { if (dk3x.length <= 1) { if (!!bc2x.pdft) iJ5O.push(bc2x.pdft) } else { for (var i = 1, l = dk3x.length; i < l; i++) { if (i > 1) iJ5O.push(" ");
                        iJ5O.push(dk3x[i]) } } iJ5O.push(bc2x.sfix) } } }(); var bMN0x = function(GJ4N, iJ5O) { if (!GJ4N || !GJ4N.length) return; if (GJ4N.length == 1) { var bfZ2x = GJ4N.pop();
            AG2x(bfZ2x);
            iJ5O.push(bfZ2x == "" ? '""' : bfZ2x); return } var bgr2x = GJ4N.pop().split(":");
        iJ5O.push("__MDF['" + bgr2x.shift() + "'](");
        bMN0x(GJ4N, iJ5O); if (bgr2x.length > 0) { var bg2x = bgr2x.join(":");
            AG2x(bg2x);
            iJ5O.push("," + bg2x) } iJ5O.push(")") }; var VK8C = function(bi2x, iJ5O) { if (!bi2x) return; var vm0x = bi2x.split("\n"); if (!vm0x || !vm0x.length) return; for (var i = 0, l = vm0x.length, gY5d; i < l; i++) { gY5d = vm0x[i]; if (!!GA4E) { gY5d = gY5d.trim(); if (!gY5d) continue } cqL9C(gY5d, iJ5O); if (!!GA4E && i < l - 1) iJ5O.push("__OUT.push('\\n');") } }; var cqL9C = function() { var cqK9B = /\|\|/g,
            cqJ9A = /#@@#/g; return function(bi2x, iJ5O) { var KS5X = "}",
                KZ5e = -1,
                bp2x = bi2x.length,
                ue0x, gC5H, GN4R, VE8w, Lf5k; while (KZ5e + KS5X.length < bp2x) { ue0x = "${";
                gC5H = "}";
                GN4R = bi2x.indexOf(ue0x, KZ5e + KS5X.length); if (GN4R < 0) break; if (bi2x.charAt(GN4R + 2) == "%") { ue0x = "${%";
                    gC5H = "%}" } VE8w = bi2x.indexOf(gC5H, GN4R + ue0x.length); if (VE8w < 0) break;
                VB8t(bi2x.substring(KZ5e + KS5X.length, GN4R), iJ5O);
                Lf5k = bi2x.substring(GN4R + ue0x.length, VE8w).replace(cqK9B, "#@@#").split("|"); for (var i = 0, l = Lf5k.length; i < l; Lf5k[i] = Lf5k[i].replace(cqJ9A, "||"), i++);
                iJ5O.push("__OUT.push(");
                bMN0x(Lf5k, iJ5O);
                iJ5O.push(");");
                KS5X = gC5H;
                KZ5e = VE8w } VB8t(bi2x.substring(KZ5e + KS5X.length), iJ5O) } }(); var VB8t = function() { var bv2x = { r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'" }; var cqI9z = function(bi2x) { return (bi2x || "").replace(bv2x.r, function($1) { return bv2x[$1] || $1 }) }; return function(bi2x, iJ5O) { if (!bi2x) return;
            iJ5O.push("__OUT.push('" + cqI9z(bi2x) + "');") } }(); var cqE9v = function() { var cqB9s = /\t/g,
            cqz9q = /\n/g,
            cqy9p = /\r\n?/g; var bMK0x = function(bi2x, ue0x) { var s2x = bi2x.indexOf("}", ue0x + 1); while (bi2x.charAt(s2x - 1) == "\\") { s2x = bi2x.indexOf("}", s2x + 1) } return s2x }; var cqw9n = function() { var bs2x = [],
                DD3x = arguments[0]; for (var x in DD3x) { x = (x || "").trim(); if (!x) continue;
                bs2x.push(x + "=$v('" + x + "')") } return bs2x.length > 0 ? "var " + bs2x.join(",") + ";" : "" }; return function(bi2x) { ll6f = {};
            bi2x = bi2x.replace(cqy9p, "\n").replace(cqB9s, "    "); var qW8O = ["if(!__CTX) return '';", ""];
            qW8O.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            qW8O.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            qW8O.push("__OUT=[];"); var DK3x = -1,
                bp2x = bi2x.length; var mw7p, EG3x, Lz5E, LB5G, zn2x, LC5H, bjQ3x, LG5L; while (DK3x + 1 < bp2x) { mw7p = DK3x;
                mw7p = bi2x.indexOf("{", mw7p + 1); while (mw7p >= 0) { EG3x = bMK0x(bi2x, mw7p);
                    Lz5E = bi2x.substring(mw7p, EG3x);
                    LB5G = Lz5E.match(bN3x.blk); if (!!LB5G) { zn2x = LB5G[1].length + 1;
                        LC5H = bi2x.indexOf("}", mw7p + zn2x); if (LC5H >= 0) { bjQ3x = LC5H - mw7p - zn2x <= 0 ? "{/" + LB5G[1] + "}" : Lz5E.substr(zn2x + 1);
                            zn2x = bi2x.indexOf(bjQ3x, LC5H + 1); if (zn2x >= 0) { VK8C(bi2x.substring(DK3x + 1, mw7p), qW8O);
                                LG5L = bi2x.substring(LC5H + 1, zn2x); switch (LB5G[1]) {
                                    case "cdata":
                                        VB8t(LG5L, qW8O); break;
                                    case "minify":
                                        VB8t(LG5L.replace(cqz9q, " ").replace(bNc0x, " "), qW8O); break;
                                    case "eval":
                                        if (!!LG5L) qW8O.push("__OUT.push((function(){" + LG5L + "})());"); break } mw7p = DK3x = zn2x + bjQ3x.length - 1 } } } else if (bi2x.charAt(mw7p - 1) != "$" && bi2x.charAt(mw7p - 1) != "\\" && Lz5E.substr(Lz5E.charAt(1) == "/" ? 2 : 1).search(bN3x.tag) == 0) { break } mw7p = bi2x.indexOf("{", mw7p + 1) } if (mw7p < 0) break;
                EG3x = bMK0x(bi2x, mw7p); if (EG3x < 0) break;
                VK8C(bi2x.substring(DK3x + 1, mw7p), qW8O);
                cra9R(bi2x.substring(mw7p, EG3x + 1), qW8O);
                DK3x = EG3x } VK8C(bi2x.substring(DK3x + 1), qW8O);
            qW8O.push(';return __OUT.join("");');
            qW8O[1] = cqw9n(ll6f);
            ll6f = null; return new Function("__CTX", "__MDF", qW8O.join("")) } }();
    TrimPath.seed = function() { return fY5d };
    TrimPath.merge = function() { var LI5N = {};
        TrimPath.dump = function() { return { func: LI5N, text: Kx5C } }; return function(eC4G, j2x, iS5X) { try { j2x = j2x || {}; if (!LI5N[eC4G] && !Kx5C[eC4G]) return ""; if (!LI5N[eC4G]) { LI5N[eC4G] = cqE9v(Kx5C[eC4G]);
                    delete Kx5C[eC4G] } if (!!iS5X) { for (var x in bN3x.ext)
                        if (!iS5X[x]) iS5X[x] = bN3x.ext[x] } return LI5N[eC4G](j2x, iS5X || bN3x.ext) } catch (ex) { return ex.message || "" } } }();
    TrimPath.parse = function() { var cqv9m = +(new Date); return function(bi2x, eC4G) { if (!bi2x) return "";
            eC4G = eC4G || "ck_" + cqv9m++;
            Kx5C[eC4G] = bi2x; return eC4G } }() })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        fj4n = {};
    a1x.Ha4e = TrimPath.seed;
    a1x.bP3x = function() { var bMI0x = function(C2x) { return !a1x.hX5c ? "" : a1x.hX5c(C2x) }; return function(eC4G, j2x, iS5X) { j2x = j2x || {};
            j2x.inline = bMI0x;
            iS5X = NEJ.X(NEJ.X({}, fj4n), iS5X);
            iS5X.rand = k2x.mJ7C;
            iS5X.format = k2x.iY5d;
            iS5X.escape = k2x.dM3x;
            iS5X.inline = bMI0x; return TrimPath.merge(eC4G, j2x, iS5X) } }();
    a1x.en4r = function(bi2x, cqq9h) { if (!bi2x) return ""; var eC4G, E2x = a1x.x2x(bi2x); if (!!E2x) { eC4G = E2x.id;
            bi2x = E2x.value || E2x.innerText; if (!cqq9h) a1x.cH3x(E2x) } return TrimPath.parse(bi2x, eC4G) };
    a1x.dT3x = function(bB2x, eC4G, j2x, iS5X) { bB2x = a1x.x2x(bB2x); if (!!bB2x) bB2x.innerHTML = a1x.bP3x(eC4G, j2x, iS5X); return this };
    a1x.ctt9k = function(bv2x) { NEJ.X(fj4n, bv2x) };
    c2x("dbg").dumpJST = function() { return TrimPath.dump() } })();
(function() { var cP3x = NEJ.P("nej.p"),
        M2x = window,
        kg6a = cP3x.ZQ0x,
        bMB0x = kg6a.ipad || kg6a.iphone; if (!bMB0x && !!M2x.requestAnimationFrame && !!M2x.cancelRequestAnimationFrame) return; var kR6L = cP3x.cS3x.prefix.pro; if (!bMB0x && !!M2x[kR6L + "RequestAnimationFrame"] && !!M2x[kR6L + "CancelRequestAnimationFrame"]) { M2x.requestAnimationFrame = M2x[kR6L + "RequestAnimationFrame"];
        M2x.cancelRequestAnimationFrame = M2x[kR6L + "CancelRequestAnimationFrame"]; return } var Vh8Z = kg6a.desktop ? 80 : kg6a.ios ? 50 : 30;
    M2x.requestAnimationFrame = function(du3x) { return window.setTimeout(function() { try { du3x(+(new Date)) } catch (ex) {} }, 1e3 / Vh8Z) };
    M2x.cancelRequestAnimationFrame = function(C2x) { window.clearTimeout(C2x); return this } })();
(function() { var c2x = NEJ.P,
        bm2x = NEJ.F,
        k2x = c2x("nej.u"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        ba2x = c2x("nej.h"),
        cN3x = c2x("nej.x"),
        Vf8X = c2x("nej.ut.j.cb"),
        gd5i; if (!!a1x.qY8Q) return;
    a1x.qY8Q = cN3x.qY8Q = function() { var R2x = {},
            fZ5e = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d2x) { var C2x = decodeURIComponent(d2x.target),
                t2x = d2x.type.toLowerCase(); var dc3x = R2x[C2x + "-on" + t2x]; if (!!dc3x) { try { dc3x(d2x) } catch (e) {} return } var cI3x = R2x[C2x + "-tgt"]; if (!!cI3x && fZ5e.test(t2x)) { bMA0x(cI3x, d2x) } }; var bme3x = function(e2x) { var bB2x = a1x.x2x(e2x.parent) || document.body,
                ds3x = a1x.bP3x(gd5i, e2x);
            bB2x.insertAdjacentHTML(!e2x.hidden ? "beforeEnd" : "afterBegin", ds3x) }; var bMA0x = function(C2x, d2x) { var t2x = d2x.type.toLowerCase();
            requestAnimationFrame(function() { h2x.z2x(C2x, t2x) }) }; var cqc9T = function(ha5f) { return !!ha5f && !!ha5f.inited && !!ha5f.inited() }; var LP5U = function(C2x) { var bs2x = [document.embeds[C2x], a1x.x2x(C2x), document[C2x], window[C2x]],
                s2x = k2x.dZ4d(bs2x, cqc9T),
                ha5f = bs2x[s2x],
                bmT3x = C2x + "-count";
            R2x[bmT3x]++; if (!!ha5f || R2x[bmT3x] > 100) { R2x[C2x](ha5f);
                delete R2x[C2x];
                delete R2x[bmT3x]; return } window.setTimeout(LP5U.g2x(null, C2x), 300) }; var cqb9S = function(e2x) { var C2x = e2x.id,
                fR5W = e2x.params; if (!fR5W) { fR5W = {};
                e2x.params = fR5W } var ll6f = fR5W.flashvars || "";
            ll6f += (!ll6f ? "" : "&") + ("id=" + C2x); if (!e2x.hidden && (!!e2x.target || ba2x.Za0x(fR5W.wmode))) { var he5j = a1x.kL6F(e2x.target) || a1x.kL6F(e2x.parent),
                    Vc8U = k2x.WB8t();
                Vf8X["cb" + Vc8U] = bMA0x.g2x(null, he5j);
                ll6f += "&onevent=nej.ut.j.cb.cb" + Vc8U;
                R2x[C2x + "-tgt"] = he5j } fR5W.flashvars = ll6f;
            k2x.dZ4d(e2x, function(A2x, J2x) { if (k2x.ge5j(A2x) && J2x != "onready") { R2x[C2x + "-" + J2x] = A2x } }) }; return function(e2x) { e2x = NEJ.X({}, e2x); if (!e2x.src) return; var C2x = "flash_" + k2x.WB8t();
            e2x.id = C2x;
            cqb9S(e2x);
            bme3x(e2x); if (!e2x.onready) return;
            R2x[C2x] = e2x.onready;
            R2x[C2x + "-count"] = 0;
            LP5U(C2x) } }();
    gd5i = a1x.en4r('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cN3x.isChange = !0 })();
(function() { var c2x = NEJ.P,
        iz5E = c2x("nej.c"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        M2x = c2x("nej.ut.j"),
        Vf8X = c2x("nej.ut.j.cb"),
        R2x = {},
        fY5d = +(new Date),
        bnz4D; if (!!M2x.bnJ4N) return;
    Vf8X["ld" + fY5d] = function(J2x, cZ3x) { var iZ5e = R2x[J2x]; if (!iZ5e) return;
        delete R2x[J2x];
        iZ5e.sV9M({ status: 200, result: cZ3x }) };
    Vf8X["er" + fY5d] = function(J2x, dY4c) { var iZ5e = R2x[J2x]; if (!iZ5e) return;
        delete R2x[J2x];
        iZ5e.sV9M({ status: dY4c || 0 }) };
    M2x.bnJ4N = NEJ.C();
    bnz4D = M2x.bnJ4N.O2x(M2x.Gs4w);
    bnz4D.ck3x = function(e2x) { var ha5f = R2x.flash; if (k2x.ep4t(ha5f)) { ha5f.push(this.ck3x.g2x(this, e2x)); return } if (!ha5f) { R2x.flash = [this.ck3x.g2x(this, e2x)];
            a1x.qY8Q({ hidden: !0, src: iz5E.x2x("ajax.swf"), onready: function(ha5f) { if (!ha5f) return; var i2x = R2x.flash;
                    R2x.flash = ha5f;
                    k2x.mz7s(i2x, function(dc3x) { try { dc3x() } catch (e) {} }) } }); return } this.yX2x = "swf-" + k2x.mJ7C();
        R2x[this.yX2x] = this; var j2x = NEJ.EX({ url: "", data: null, method: "GET" }, e2x.request);
        j2x.key = this.yX2x;
        j2x.headers = e2x.headers;
        j2x.onerror = "nej.ut.j.cb.er" + fY5d;
        j2x.onloaded = "nej.ut.j.cb.ld" + fY5d; var bMx0x = iz5E.cjc7V(j2x.url); if (!!bMx0x) j2x.policyURL = bMx0x;
        ha5f.request(j2x) };
    bnz4D.jk6e = function() { delete R2x[this.yX2x];
        this.sV9M({ status: 0 }); return this } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        ba2x = c2x("nej.h");
    ba2x.bMv0x = function() { var cO3x = /^([\w]+?:\/\/.*?(?=\/|$))/i; return function(hA5F) { hA5F = hA5F || ""; if (cO3x.test(hA5F)) return RegExp.$1; return "*" } }();
    ba2x.boi4m = function(j2x) { return j2x };
    ba2x.bok4o = function(bMu0x, e2x) { if (!bMu0x.postMessage) return;
        e2x = e2x || Y2x;
        bMu0x.postMessage(ba2x.boi4m(e2x.data), ba2x.bMv0x(e2x.origin)) } })();
(function() { var c2x = NEJ.P,
        bm2x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        M2x = c2x("nej.ut"),
        b2x; if (!!M2x.fv4z) return;
    M2x.fv4z = NEJ.C();
    b2x = M2x.fv4z.O2x(M2x.cz3x);
    b2x.cl3x = function() { this.P2x = {};
        this.cs3x() };
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.LQ5V = a1x.x2x(e2x.element) || window;
        this.bMt0x(e2x.event);
        this.cpJ8B();
        this.z2x("oninit") };
    b2x.bC2x = function() { var DC3x = function(A2x, J2x, bv2x) { if (!k2x.ep4t(A2x)) { k2x.WH9y(this.LQ5V, J2x) } delete bv2x[J2x] }; return function() { this.bH3x();
            k2x.dZ4d(this.P2x, DC3x, this);
            delete this.LQ5V } }();
    b2x.UZ8R = function(E2x, t2x) { E2x = a1x.x2x(E2x); return E2x == this.LQ5V && (!t2x || !!this.P2x["on" + t2x]) };
    b2x.bMt0x = function(d2x) { if (k2x.fi4m(d2x)) { var T2x = "on" + d2x; if (!this.P2x[T2x]) { this.P2x[T2x] = this.cpI8A.g2x(this, d2x) } this.bMr0x(d2x); return } if (k2x.ep4t(d2x)) { k2x.be2x(d2x, this.bMt0x, this) } };
    b2x.bMr0x = function(t2x) { var d2x = "on" + t2x,
            dc3x = this.LQ5V[d2x],
            bMp0x = this.P2x[d2x]; if (dc3x != bMp0x) { this.UX8P(t2x); if (!!dc3x && dc3x != bm2x) this.bMo0x(t2x, dc3x);
            this.LQ5V[d2x] = bMp0x } };
    b2x.bMo0x = function(t2x, dc3x, cpB8t) { var i2x = this.P2x[t2x]; if (!i2x) { i2x = [];
            this.P2x[t2x] = i2x } if (k2x.ge5j(dc3x)) {!cpB8t ? i2x.push(dc3x) : i2x.unshift(dc3x) } };
    b2x.UX8P = function(t2x, dc3x) { var i2x = this.P2x[t2x]; if (!i2x || !i2x.length) return; if (!dc3x) { delete this.P2x[t2x]; return } k2x.mz7s(i2x, function(A2x, s2x, Hh4l) { if (dc3x === A2x) { Hh4l.splice(s2x, 1); return !0 } }) };
    b2x.cpI8A = function(t2x, d2x) { d2x = d2x || { noargs: !0 };
        d2x.type = t2x;
        this.z2x("ondispatch", d2x); if (!!d2x.stopped) return;
        k2x.be2x(this.P2x[t2x], function(dc3x) { try { dc3x(d2x) } catch (ex) { console.error(ex.message);
                console.error(ex.stack) } }) };
    b2x.cpJ8B = function() { var baL0x = function(d2x) { var bg2x = d2x.args,
                t2x = bg2x[1].toLowerCase(); if (this.UZ8R(bg2x[0], t2x)) { d2x.stopped = !0;
                this.bMr0x(t2x);
                this.bMo0x(t2x, bg2x[2], bg2x[3]);
                this.z2x("oneventadd", { type: t2x, listener: bg2x[2] }) } }; var cpu8m = function(d2x) { var bg2x = d2x.args,
                t2x = bg2x[1].toLowerCase(); if (this.UZ8R(bg2x[0], t2x)) { d2x.stopped = !0;
                this.UX8P(t2x, bg2x[2]) } }; var bmY3x = function(d2x) { var bg2x = d2x.args,
                t2x = (bg2x[1] || "").toLowerCase(); if (this.UZ8R(bg2x[0])) { if (!!t2x) { this.UX8P(t2x); return } k2x.dZ4d(this.P2x, function(A2x, J2x) { if (k2x.ep4t(A2x)) { this.UX8P(J2x) } }, this) } }; var cpt8l = function(d2x) { var bg2x = d2x.args,
                t2x = bg2x[1].toLowerCase(); if (this.UZ8R(bg2x[0], t2x)) { d2x.stopped = !0;
                bg2x[0]["on" + t2x].apply(bg2x[0], bg2x.slice(2)) } }; return function() { if (!!this.cps8k) return;
            this.cps8k = true;
            h2x.q2x = h2x.q2x.ef4j(baL0x.g2x(this));
            h2x.mg7Z = h2x.mg7Z.ef4j(cpu8m.g2x(this));
            h2x.it5y = h2x.it5y.ef4j(bmY3x.g2x(this));
            h2x.z2x = h2x.z2x.ef4j(cpt8l.g2x(this)) } }() })();
(function() { var c2x = NEJ.P,
        M2x = c2x("nej.p"),
        ba2x = c2x("nej.h"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"); if (M2x.mr7k.trident) return; if (!!window.postMessage) { ba2x.boi4m = ba2x.boi4m.ef4j(function(d2x) { d2x.stopped = !0;
            d2x.value = JSON.stringify(d2x.args[0]) }); return } var J2x = "MSG|",
        ji6c = []; var cpm8e = function() { var T2x = unescape(window.name || "").trim(); if (!T2x || T2x.indexOf(J2x) != 0) return;
        window.name = ""; var m2x = k2x.bNq0x(T2x.replace(J2x, ""), "|"),
            hA5F = (m2x.origin || "").toLowerCase(); if (!!hA5F && hA5F != "*" && location.href.toLowerCase().indexOf(hA5F) != 0) return;
        h2x.z2x(window, "message", { data: JSON.parse(m2x.data || "null"), source: window.frames[m2x.self] || m2x.self, origin: ba2x.bMv0x(m2x.ref || document.referrer) }) }; var cpl8d = function() { var US8K; var cpa8S = function(bv2x, s2x, i2x) { if (k2x.cV3x(US8K, bv2x.w) < 0) { US8K.push(bv2x.w);
                i2x.splice(s2x, 1);
                bv2x.w.name = bv2x.d } }; return function() { US8K = [];
            k2x.mz7s(ji6c, cpa8S);
            US8K = null } }();
    ba2x.bok4o = function() { var coV8N = function(j2x) { var m2x = {};
            j2x = j2x || Y2x;
            m2x.origin = j2x.origin || "";
            m2x.ref = location.href;
            m2x.self = j2x.source;
            m2x.data = JSON.stringify(j2x.data); return J2x + k2x.uk0x(m2x, "|", !0) }; return ba2x.bok4o.ef4j(function(d2x) { d2x.stopped = !0; var bg2x = d2x.args;
            ji6c.unshift({ w: bg2x[0], d: escape(coV8N(bg2x[1])) }) }) }();
    H2x.fv4z.B2x({ element: window, event: "message" });
    window.setInterval(cpl8d, 100);
    window.setInterval(cpm8e, 20) })();
(function() { var c2x = NEJ.P,
        ba2x = c2x("nej.h"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j");
    v2x.coU8M = function() { var iv5A = window.name || "_parent",
            coQ8I = { gk5p: window.top, iv5A: window, bB2x: window.parent }; return function(cI3x, e2x) { if (typeof cI3x == "string") { cI3x = coQ8I[cI3x] || window.frames[cI3x]; if (!cI3x) return this } var j2x = NEJ.X({ origin: "*", source: iv5A }, e2x);
            ba2x.bok4o(cI3x, j2x); return this } }() })();
(function() { var c2x = NEJ.P,
        iz5E = c2x("nej.c"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        M2x = c2x("nej.ut.j"),
        R2x = {},
        UP8H; if (!!M2x.bbN1x) return;
    M2x.bbN1x = NEJ.C();
    UP8H = M2x.bbN1x.O2x(M2x.Gs4w);
    UP8H.cl3x = function() { var eA4E = "NEJ-AJAX-DATA:",
            CO3x = !1; var bch1x = function(d2x) { var j2x = d2x.data; if (j2x.indexOf(eA4E) != 0) return;
            j2x = JSON.parse(j2x.replace(eA4E, "")); var iZ5e = R2x[j2x.key]; if (!iZ5e) return;
            delete R2x[j2x.key];
            j2x.result = decodeURIComponent(j2x.result || "");
            iZ5e.sV9M(j2x) }; var bcj1x = function() { if (!CO3x) { CO3x = !0;
                h2x.q2x(window, "message", bch1x) } }; return function() { this.cs3x();
            bcj1x() } }();
    UP8H.ck3x = function(e2x) { var fF4J = e2x.request,
            iZ5e = iz5E.ccc5h(fF4J.url),
            uS0x = R2x[iZ5e]; if (k2x.ep4t(uS0x)) { uS0x.push(this.ck3x.g2x(this, e2x)); return } if (!uS0x) { R2x[iZ5e] = [this.ck3x.g2x(this, e2x)];
            a1x.YL9C({ src: iZ5e, visible: !1, onload: function(d2x) { var i2x = R2x[iZ5e];
                    R2x[iZ5e] = h2x.U2x(d2x).contentWindow;
                    k2x.mz7s(i2x, function(dc3x) { try { dc3x() } catch (e) {} }) } }); return } this.yX2x = "frm-" + k2x.mJ7C();
        R2x[this.yX2x] = this; var j2x = NEJ.EX({ url: "", data: null, timeout: 0, method: "GET" }, fF4J);
        j2x.key = this.yX2x;
        j2x.headers = e2x.headers;
        v2x.coU8M(R2x[iZ5e], { data: j2x }) };
    UP8H.jk6e = function() { delete R2x[this.yX2x];
        this.sV9M({ status: 0 }); return this } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        dP3x = c2x("nej.g"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        M2x = c2x("nej.ut.j"),
        R2x = {},
        Hk4o; if (!!M2x.bcx1x) return;
    M2x.bcx1x = NEJ.C();
    Hk4o = M2x.bcx1x.O2x(M2x.Gs4w);
    Hk4o.cl3x = function() { var eA4E = "NEJ-UPLOAD-RESULT:",
            CO3x = !1; var bch1x = function(d2x) { var j2x = d2x.data; if (j2x.indexOf(eA4E) != 0) return;
            j2x = JSON.parse(j2x.replace(eA4E, "")); var iZ5e = R2x[j2x.key]; if (!iZ5e) return;
            delete R2x[j2x.key];
            iZ5e.sV9M(decodeURIComponent(j2x.result)) }; var bcj1x = function() { if (!CO3x) { CO3x = !0;
                h2x.q2x(window, "message", bch1x) } }; return function() { this.cs3x();
            bcj1x() } }();
    Hk4o.bC2x = function() { this.bH3x();
        a1x.cH3x(this.bcA1x);
        delete this.bcA1x;
        window.clearTimeout(this.dN3x);
        delete this.dN3x };
    Hk4o.sV9M = function(cZ3x) { var Q2x; try { Q2x = JSON.parse(cZ3x);
            this.z2x("onload", Q2x) } catch (e) { this.z2x("onerror", { code: dP3x.bRe2x, message: cZ3x }) } };
    Hk4o.ck3x = function() { var coO8G = function() { var lI7B, cZ3x; try { var lI7B = this.bcA1x.contentWindow.document.body,
                    cZ3x = lI7B.innerText || lI7B.textContent } catch (e) { return } this.sV9M(cZ3x) }; var bcU1x = function(V2x, eD4H, qK8C) { v2x.bq2x(V2x, { type: "json", method: "POST", cookie: qK8C, mode: parseInt(eD4H) || 0, onload: function(j2x) { if (!this.dN3x) return;
                    this.z2x("onuploading", j2x);
                    this.dN3x = window.setTimeout(bcU1x.g2x(this, V2x, eD4H, qK8C), 1e3) }.g2x(this), onerror: function(bQ3x) { if (!this.dN3x) return;
                    this.dN3x = window.setTimeout(bcU1x.g2x(this, V2x, eD4H, qK8C), 1e3) }.g2x(this) }) }; return function(e2x) { var fF4J = e2x.request,
                nM7F = e2x.headers,
                eE4I = fF4J.data,
                T2x = "fom-" + k2x.mJ7C();
            R2x[T2x] = this;
            eE4I.target = T2x;
            eE4I.method = "POST";
            eE4I.enctype = dP3x.Eu3x;
            eE4I.encoding = dP3x.Eu3x; var V2x = eE4I.action || "",
                lK7D = V2x.indexOf("?") <= 0 ? "?" : "&";
            eE4I.action = V2x + lK7D + "_proxy_=form";
            this.bcA1x = a1x.YL9C({ name: T2x, onload: function(d2x) { var uS0x = h2x.U2x(d2x);
                    h2x.q2x(uS0x, "load", coO8G.g2x(this));
                    eE4I.submit(); var bMj0x = (eE4I.nej_query || Y2x).value; if (!bMj0x) return; var eD4H = (eE4I.nej_mode || Y2x).value,
                        qK8C = (eE4I.nej_cookie || Y2x).value == "true";
                    this.dN3x = window.setTimeout(bcU1x.g2x(this, bMj0x, eD4H, qK8C), 100) }.g2x(this) }) } }();
    Hk4o.jk6e = function() { this.z2x("onerror", { code: dP3x.bSW3x, message: "å®¢æˆ·ç«¯ç»ˆæ­¢æ–‡ä»¶ä¸Šä¼ " }); return this } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        ba2x = c2x("nej.h"),
        M2x = c2x("nej.ut.j");
    ba2x.bcD1x = function() { return new XMLHttpRequest };
    ba2x.bdm1x = function(eD4H, UJ8B, e2x) { var bv2x = !!UJ8B ? { 2: M2x.bcx1x } : { 2: M2x.bbN1x, 3: M2x.bnJ4N }; return (bv2x[eD4H] || M2x.Wc8U).B2x(e2x) } })();
(function() { var c2x = NEJ.P,
        M2x = c2x("nej.p"),
        ba2x = c2x("nej.h"); if (M2x.mr7k.trident) return;
    ba2x.bcD1x = function() { var Kj5o = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"]; var coJ8B = function() { for (var i = 0, l = Kj5o.length; i < l; i++) { try { return new ActiveXObject(Kj5o[i]) } catch (e) {} } return null }; return ba2x.bcD1x.ef4j(function(d2x) { if (!!window.XMLHttpRequest) return;
            d2x.stopped = !0;
            d2x.value = coJ8B() }) }();
    ba2x.bdm1x = function() { var AS2x = { 0: 2, 1: 3 }; return ba2x.bdm1x.ef4j(function(d2x) { var bg2x = d2x.args,
                eD4H = bg2x[0] || 0;
            bg2x[0] = !!bg2x[1] ? 2 : AS2x[eD4H] || eD4H }) }() })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        ba2x = c2x("nej.h"),
        dP3x = c2x("nej.g"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        M2x = c2x("nej.ut.j"),
        mT7M = {},
        Fx3x = bm2x;
    v2x.jk6e = function(eC4G) { var R2x = mT7M[eC4G]; if (!R2x) return this;
        R2x.req.jk6e(); return this };
    v2x.UG8y = function(dD3x) { Fx3x = dD3x || bm2x; return this };
    v2x.bq2x = function() { var iK5P = (location.protocol + "//" + location.host).toLowerCase(); var coG8y = function(V2x) { var hA5F = k2x.csL9C(V2x); return !!hA5F && hA5F != iK5P }; var coD8v = function(nM7F) { return (nM7F || Y2x)[dP3x.ws1x] == dP3x.Eu3x }; var coC8u = function(e2x) { var UJ8B = coD8v(e2x.headers); if (!coG8y(e2x.url) && !UJ8B) return M2x.Wc8U.B2x(e2x); return ba2x.bdm1x(e2x.mode, UJ8B, e2x) }; var DC3x = function(eC4G) { var R2x = mT7M[eC4G]; if (!R2x) return; if (!!R2x.req) R2x.req.S2x();
            delete mT7M[eC4G] }; var bMh0x = function(eC4G, t2x) { var R2x = mT7M[eC4G]; if (!R2x) return;
            DC3x(eC4G); try { var d2x = { type: t2x, result: arguments[2] };
                Fx3x(d2x); if (!d2x.stopped)(R2x[t2x] || bm2x)(d2x.result) } catch (ex) { console.error(ex.message);
                console.error(ex) } }; var wA1x = function(eC4G, j2x) { bMh0x(eC4G, "onload", j2x) }; var zE2x = function(eC4G, bQ3x) { bMh0x(eC4G, "onerror", bQ3x) }; return function(V2x, e2x) { e2x = e2x || {}; var eC4G = k2x.mJ7C(),
                R2x = { onload: e2x.onload || bm2x, onerror: e2x.onerror || bm2x };
            mT7M[eC4G] = R2x;
            e2x.onload = wA1x.g2x(null, eC4G);
            e2x.onerror = zE2x.g2x(null, eC4G); if (!!e2x.query) { var lK7D = V2x.indexOf("?") < 0 ? "?" : "&",
                    bD2x = e2x.query; if (k2x.jZ6T(bD2x)) bD2x = k2x.df3x(bD2x); if (!!bD2x) V2x += lK7D + bD2x } e2x.url = V2x;
            R2x.req = coC8u(e2x);
            R2x.req.bbo1x(e2x.data); return eC4G } }();
    v2x.gg5l = function(eE4I, e2x) { var gx5C = { mode: 0, type: "json", query: null, cookie: !1, headers: {}, onload: null, onerror: null, onuploading: null, onbeforerequest: null };
        NEJ.EX(gx5C, e2x);
        gx5C.data = eE4I;
        gx5C.method = "POST";
        gx5C.timeout = 0;
        gx5C.headers[dP3x.ws1x] = dP3x.Eu3x; return v2x.bq2x(eE4I.action, gx5C) } })();
(function() { var c2x = NEJ.P,
        bm2x = NEJ.F,
        dP3x = c2x("nej.g"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        M2x = c2x("nej.ut.j"),
        lN7G, jq6k = 6e4; if (!!M2x.Md5i) return;
    M2x.Md5i = NEJ.C();
    lN7G = M2x.Md5i.O2x(H2x.cz3x);
    lN7G.cl3x = function() { this.cs3x();
        this.Mf5k = { onerror: this.coA8s.g2x(this), onloaded: this.cow8o.g2x(this) }; if (!this.constructor.P2x) this.constructor.P2x = { loaded: {} } };
    lN7G.bk2x = function(e2x) { this.bl2x(e2x);
        this.Ho4s = e2x.version;
        this.bfK2x = e2x.timeout;
        this.Mf5k.version = this.Ho4s;
        this.Mf5k.timeout = this.bfK2x };
    lN7G.bMe0x = function(J2x) { delete this.constructor.P2x[J2x] };
    lN7G.zI2x = function(J2x) { return this.constructor.P2x[J2x] };
    lN7G.bMc0x = function(J2x, j2x) { this.constructor.P2x[J2x] = j2x };
    lN7G.Us8k = bm2x;
    lN7G.bLZ0x = function(fF4J) { h2x.it5y(fF4J) };
    lN7G.bgm2x = function(fF4J) { fF4J.src = this.kA6u;
        document.head.appendChild(fF4J) };
    lN7G.zJ2x = function() { var R2x = this.zI2x(this.kA6u); if (!R2x) return;
        window.clearTimeout(R2x.timer);
        this.bLZ0x(R2x.request);
        delete R2x.bind;
        delete R2x.timer;
        delete R2x.request;
        this.bMe0x(this.kA6u);
        this.zI2x("loaded")[this.kA6u] = !0 };
    lN7G.Up8h = function(T2x) { var R2x = this.zI2x(this.kA6u); if (!R2x) return; var i2x = R2x.bind;
        this.zJ2x(); if (!!i2x && i2x.length > 0) { var cp3x; while (i2x.length) { cp3x = i2x.shift(); try { cp3x.z2x(T2x, arguments[1]) } catch (ex) { console.error(ex.message);
                    console.error(ex.stack) } cp3x.S2x() } } };
    lN7G.em4q = function(bQ3x) { this.Up8h("onerror", bQ3x) };
    lN7G.bLY0x = function() { this.Up8h("onloaded") };
    lN7G.cnU8M = function(V2x) { this.constructor.B2x(this.Mf5k).Ht4x(V2x) };
    lN7G.bLW0x = function(bQ3x) { var R2x = this.zI2x(this.uf0x); if (!R2x) return; if (!!bQ3x) R2x.error++;
        R2x.loaded++; if (R2x.loaded < R2x.total) return;
        this.bMe0x(this.uf0x);
        this.z2x(R2x.error > 0 ? "onerror" : "onloaded") };
    lN7G.coA8s = function(bQ3x) { this.bLW0x(!0) };
    lN7G.cow8o = function() { this.bLW0x() };
    lN7G.Ht4x = function(V2x) { V2x = k2x.bdp1x(V2x); if (!V2x) { this.z2x("onerror", { code: dP3x.bhS2x, message: "è¯·æŒ‡å®šè¦è½½å…¥çš„èµ„æºåœ°å€ï¼" }); return this } this.kA6u = V2x; if (!!this.Ho4s) this.kA6u += (this.kA6u.indexOf("?") < 0 ? "?" : "&") + this.Ho4s; if (this.zI2x("loaded")[this.kA6u]) { try { this.z2x("onloaded") } catch (ex) { console.error(ex.message);
                console.error(ex.stack) } this.S2x(); return this } var R2x = this.zI2x(this.kA6u),
            fF4J; if (!!R2x) { R2x.bind.unshift(this);
            R2x.timer = window.clearTimeout(R2x.timer) } else { fF4J = this.Us8k();
            R2x = { request: fF4J, bind: [this] };
            this.bMc0x(this.kA6u, R2x);
            h2x.q2x(fF4J, "load", this.bLY0x.g2x(this));
            h2x.q2x(fF4J, "error", this.em4q.g2x(this, { code: dP3x.blB3x, message: "æ— æ³•åŠ è½½æŒ‡å®šèµ„æºæ–‡ä»¶[" + this.kA6u + "]ï¼" })) } if (this.bfK2x != 0) R2x.timer = window.setTimeout(this.em4q.g2x(this, { code: dP3x.bvV6P, message: "æŒ‡å®šèµ„æºæ–‡ä»¶[" + this.kA6u + "]è½½å…¥è¶…æ—¶ï¼" }), this.bfK2x || jq6k); if (!!fF4J) this.bgm2x(fF4J);
        this.z2x("onloading"); return this };
    lN7G.bLV0x = function(i2x) { if (!i2x || !i2x.length) { this.z2x("onerror", { code: dP3x.bhS2x, message: "è¯·æŒ‡å®šè¦è½½å…¥çš„èµ„æºé˜Ÿåˆ—ï¼" }); return this } this.uf0x = k2x.mJ7C(); var R2x = { error: 0, loaded: 0, total: i2x.length };
        this.bMc0x(this.uf0x, R2x); for (var i = 0, l = i2x.length; i < l; i++) { if (!i2x[i]) { R2x.total--; continue } this.cnU8M(i2x[i]) } this.z2x("onloading"); return this } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        ba2x = c2x("nej.h"),
        M2x = c2x("nej.ut.j"),
        Mx6r; if (!!M2x.bhh2x) return;
    M2x.bhh2x = NEJ.C();
    Mx6r = M2x.bhh2x.O2x(M2x.Md5i);
    Mx6r.Us8k = function() { var fc4g = a1x.cT3x("iframe");
        fc4g.width = 0;
        fc4g.height = 0;
        fc4g.style.display = "none"; return fc4g };
    Mx6r.bgm2x = function(fF4J) { fF4J.src = this.kA6u;
        document.body.appendChild(fF4J) };
    Mx6r.em4q = function(bQ3x) { var fc4g = (this.zI2x(this.kA6u) || Y2x).request;
        this.Up8h("onerror", bQ3x);
        ba2x.YW0x(fc4g) };
    Mx6r.bLY0x = function() { var lI7B = null,
            fc4g = (this.zI2x(this.kA6u) || Y2x).request; try { lI7B = fc4g.contentWindow.document.body } catch (ex) {} this.Up8h("onloaded", lI7B);
        ba2x.YW0x(fc4g) } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        M2x = c2x("nej.ut.j"),
        bhk2x; if (!!M2x.Ui8a) return;
    M2x.Ui8a = NEJ.C();
    bhk2x = M2x.Ui8a.O2x(M2x.Md5i);
    bhk2x.Us8k = function() { return a1x.cT3x("link") };
    bhk2x.bgm2x = function(fF4J) { fF4J.href = this.kA6u;
        document.head.appendChild(fF4J) } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        M2x = c2x("nej.ut.j"),
        Ug8Y; if (!!M2x.Ud8V) return;
    M2x.Ud8V = NEJ.C();
    Ug8Y = M2x.Ud8V.O2x(M2x.Md5i);
    Ug8Y.bk2x = function(e2x) { this.bl2x(e2x);
        this.bLU0x = e2x.async;
        this.bic2x = e2x.charset;
        this.Mf5k.async = !1;
        this.Mf5k.charset = this.bic2x };
    Ug8Y.Us8k = function() { var fF4J = a1x.cT3x("script"); if (this.bLU0x != null) fF4J.async = !!this.bLU0x; if (this.bic2x != null) fF4J.charset = this.bic2x; return fF4J };
    Ug8Y.bLZ0x = function(fF4J) { a1x.cH3x(fF4J) } })();
(function() { var c2x = NEJ.P,
        v2x = c2x("nej.j"),
        M2x = c2x("nej.ut.j");
    v2x.cnP8H = function(V2x, e2x) { M2x.Ud8V.B2x(e2x).Ht4x(V2x); return this };
    v2x.cnO8G = function(i2x, e2x) { M2x.Ud8V.B2x(e2x).bLV0x(i2x); return this };
    v2x.ctz9q = function(V2x, e2x) { M2x.Ui8a.B2x(e2x).Ht4x(V2x); return this };
    v2x.cnK8C = function(i2x, e2x) { M2x.Ui8a.B2x(e2x).bLV0x(i2x); return this };
    v2x.bLQ0x = function(V2x, e2x) { M2x.bhh2x.B2x(e2x).Ht4x(V2x); return this } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        R2x = {},
        rY9P = +(new Date) + "-";
    a1x.cF3x = function() { var cu3x = 0; var ME6y = function() { if (cu3x > 0) return;
            cu3x = 0;
            h2x.z2x(document, "templateready");
            h2x.it5y(document, "templateready") }; var TX8P = function(fE4I, e2x) { var dw3x = a1x.u2x(fE4I, "src"); if (!dw3x) return;
            e2x = e2x || Y2x; var fw4A = e2x.root; if (!fw4A) { fw4A = fE4I.ownerDocument.location.href } else { fw4A = k2x.bdp1x(fw4A) } dw3x = dw3x.split(",");
            k2x.be2x(dw3x, function(A2x, s2x, i2x) { i2x[s2x] = k2x.bdp1x(A2x, fw4A) }); return dw3x }; var cnF8x = function(fE4I, e2x) { if (!fE4I) return; var dw3x = TX8P(fE4I, e2x); if (!!dw3x) v2x.cnK8C(dw3x, { version: a1x.u2x(fE4I, "version") });
            a1x.bJv9m(fE4I.value) }; var cnE8w = function(A2x) { cu3x--;
            a1x.bJB9s(A2x);
            ME6y() }; var cnD8v = function(fE4I, e2x) { if (!fE4I) return; var dw3x = TX8P(fE4I, e2x),
                eM4Q = fE4I.value; if (!!dw3x) { cu3x++; var e2x = { version: a1x.u2x(fE4I, "version"), onloaded: cnE8w.g2x(null, eM4Q) };
                window.setTimeout(v2x.cnO8G.g2x(v2x, dw3x, e2x), 0); return } a1x.bJB9s(eM4Q) }; var cnC8u = function(lI7B) { cu3x--;
            a1x.cF3x(lI7B);
            ME6y() }; var cnz8r = function(fE4I, e2x) { if (!fE4I) return; var dw3x = TX8P(fE4I, e2x)[0]; if (!!dw3x) { cu3x++; var e2x = { version: a1x.u2x(fE4I, "version"), onloaded: cnC8u };
                window.setTimeout(v2x.bLQ0x.g2x(v2x, dw3x, e2x), 0) } }; var cny8q = function(C2x, cZ3x) { cu3x--;
            a1x.HL4P(C2x, cZ3x || "");
            ME6y() }; var cnp8h = function(fE4I, e2x) { if (!fE4I || !fE4I.id) return; var C2x = fE4I.id,
                dw3x = TX8P(fE4I, e2x)[0]; if (!!dw3x) { cu3x++; var V2x = dw3x + (dw3x.indexOf("?") < 0 ? "?" : "&") + (a1x.u2x(fE4I, "version") || ""),
                    e2x = { type: "text", method: "GET", onload: cny8q.g2x(null, C2x) };
                window.setTimeout(v2x.bq2x.g2x(v2x, V2x, e2x), 0) } }; var cnm8e = function(f2x, e2x) { var t2x = f2x.name.toLowerCase(); switch (t2x) {
                case "jst":
                    a1x.en4r(f2x, !0); return;
                case "txt":
                    a1x.HL4P(f2x.id, f2x.value || ""); return;
                case "ntp":
                    a1x.hW5b(f2x.value || "", f2x.id); return;
                case "js":
                    cnD8v(f2x, e2x); return;
                case "css":
                    cnF8x(f2x, e2x); return;
                case "html":
                    cnz8r(f2x, e2x); return;
                case "res":
                    cnp8h(f2x, e2x); return } };
        H2x.fv4z.B2x({ element: document, event: "templateready", oneventadd: ME6y }); return function(E2x, e2x) { E2x = a1x.x2x(E2x); if (!!E2x) { var i2x = E2x.tagName == "TEXTAREA" ? [E2x] : E2x.getElementsByTagName("textarea");
                k2x.be2x(i2x, function(f2x) { cnm8e(f2x, e2x) });
                a1x.cH3x(E2x, !0) } ME6y(); return this } }();
    a1x.HL4P = function(J2x, A2x) { R2x[J2x] = A2x || ""; return this };
    a1x.hX5c = function(J2x) { return R2x[J2x] || "" };
    a1x.hW5b = function(E2x, J2x) { J2x = J2x || k2x.mJ7C();
        E2x = a1x.x2x(E2x) || E2x;
        a1x.HL4P(rY9P + J2x, E2x);
        a1x.mA7t(E2x); return J2x };
    a1x.dq3x = function(J2x) { if (!J2x) return null;
        J2x = rY9P + J2x; var A2x = a1x.hX5c(J2x); if (!A2x) return null; if (k2x.fi4m(A2x)) { A2x = a1x.ne7X(A2x);
            a1x.HL4P(J2x, A2x) } return A2x.cloneNode(!0) };
    a1x.zY2x = function() { var Fx3x = function(A2x, J2x) { return J2x == "offset" || J2x == "limit" }; return function(i2x, r2x, e2x) { var bs2x = []; if (!i2x || !i2x.length || !r2x) return bs2x;
            e2x = e2x || Y2x; var dF3x = i2x.length,
                iT5Y = parseInt(e2x.offset) || 0,
                gC5H = Math.min(dF3x, iT5Y + (parseInt(e2x.limit) || dF3x)),
                cm3x = { total: i2x.length, range: [iT5Y, gC5H] };
            NEJ.X(cm3x, e2x, Fx3x); for (var i = iT5Y, cp3x; i < gC5H; i++) { cm3x.index = i;
                cm3x.data = i2x[i];
                cp3x = r2x.B2x(cm3x); var C2x = cp3x.Cy3x();
                R2x[C2x] = cp3x;
                cp3x.S2x = cp3x.S2x.ef4j(function(C2x, cp3x) { delete R2x[C2x];
                    delete cp3x.S2x }.g2x(null, C2x, cp3x));
                bs2x.push(cp3x) } return bs2x } }();
    a1x.bLI0x = function(C2x) { return R2x[C2x] };
    a1x.ctA9r = function(dE3x, e2x) { e2x = e2x || Y2x;
        a1x.cF3x(e2x.tid || "template-box");
        h2x.q2x(document, "templateready", function() { dE3x.B2x().z2x("onshow", e2x) }) };
    c2x("dbg").dumpTC = function() { return R2x } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        M2x = c2x("nej.ui"),
        b2x; if (!!M2x.es4w) return;
    M2x.es4w = NEJ.C();
    b2x = M2x.es4w.O2x(H2x.cz3x);
    b2x.cl3x = function() { this.cs3x();
        a1x.bIU9L();
        this.bZ3x();
        this.bR3x() };
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.cni8a(e2x.clazz);
        this.bLG0x(e2x.parent) };
    b2x.bC2x = function() { this.bH3x();
        this.bLD0x();
        delete this.fA4E;
        a1x.mA7t(this.o2x);
        a1x.w2x(this.o2x, this.blr3x);
        delete this.blr3x };
    b2x.bZ3x = bm2x;
    b2x.bR3x = function() { if (!this.ca3x) this.TB8t();
        this.o2x = a1x.dq3x(this.ca3x); if (!this.o2x) this.o2x = a1x.cT3x("div", this.li6c);
        a1x.y2x(this.o2x, this.li6c) };
    b2x.TB8t = bm2x;
    b2x.cni8a = function(dJ3x) { this.blr3x = dJ3x || "";
        a1x.y2x(this.o2x, this.blr3x) };
    b2x.cmX8P = function() { if (!this.li6c) return;
        a1x.y2x(this.fA4E, this.li6c + "-parent") };
    b2x.bLD0x = function() { if (!this.li6c) return;
        a1x.w2x(this.fA4E, this.li6c + "-parent") };
    b2x.kq6k = function() { return this.o2x };
    b2x.bLG0x = function(bB2x) { if (!this.o2x) return this;
        this.bLD0x(); if (k2x.ge5j(bB2x)) { this.fA4E = bB2x(this.o2x) } else { this.fA4E = a1x.x2x(bB2x); if (!!this.fA4E) this.fA4E.appendChild(this.o2x) } this.cmX8P(); return this };
    b2x.N2x = function() { if (!this.fA4E || !this.o2x || this.o2x.parentNode == this.fA4E) return this;
        this.fA4E.appendChild(this.o2x); return this };
    b2x.bo2x = function() { a1x.mA7t(this.o2x); return this } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        ba2x = c2x("nej.h"),
        M2x = c2x("nej.ui"),
        uv0x, bLC0x; if (!!M2x.Ny6s) return;
    M2x.Ny6s = NEJ.C();
    uv0x = M2x.Ny6s.O2x(M2x.es4w);
    bLC0x = M2x.Ny6s.cg3x;
    uv0x.bk2x = function(e2x) { this.bl2x(e2x);
        this.uC0x("oncontentready", e2x.oncontentready || this.cmT8L.g2x(this));
        this.cmS8K = !!e2x.nohack;
        this.cmR8J = !!e2x.destroyable;
        this.HW4a(e2x.content) };
    uv0x.bC2x = function() { this.z2x("onbeforerecycle");
        this.bH3x();
        this.Tx8p();
        this.HW4a("");
        a1x.fy4C(this.o2x, { top: "", left: "" }) };
    uv0x.cmT8L = bm2x;
    uv0x.HX4b = bm2x;
    uv0x.Tx8p = function() { a1x.mA7t(this.o2x); if (!!this.mM7F) { this.mM7F = ba2x.bkl3x(this.o2x);
            delete this.mM7F } };
    uv0x.HW4a = function(bi2x) { if (!this.o2x || !this.Ae2x || bi2x == null) return this;
        bi2x = bi2x || "";
        k2x.fi4m(bi2x) ? this.Ae2x.innerHTML = bi2x : this.Ae2x.appendChild(bi2x);
        this.z2x("oncontentready", this.Ae2x); return this };
    uv0x.fU5Z = function(bj2x) { var A2x = bj2x.top; if (A2x != null) { A2x += "px";
            a1x.X2x(this.o2x, "top", A2x);
            a1x.X2x(this.mM7F, "top", A2x) } var A2x = bj2x.left; if (A2x != null) { A2x += "px";
            a1x.X2x(this.o2x, "left", A2x);
            a1x.X2x(this.mM7F, "left", A2x) } return this };
    uv0x.N2x = function() { a1x.X2x(this.o2x, "visibility", "hidden");
        bLC0x.N2x.apply(this, arguments);
        this.HX4b();
        a1x.X2x(this.o2x, "visibility", ""); if (!this.cmS8K) { this.mM7F = ba2x.mM7F(this.o2x) } return this };
    uv0x.bo2x = function() { this.cmR8J ? this.S2x() : this.Tx8p(); return this } })();
(function() { var c2x = NEJ.P,
        bm2x = NEJ.F,
        k2x = c2x("nej.u"),
        a1x = c2x("nej.e"),
        M2x = c2x("nej.ui"),
        Af2x; if (!!M2x.Tt8l) return;
    M2x.Tt8l = NEJ.C();
    Af2x = M2x.Tt8l.O2x(M2x.es4w);
    Af2x.bk2x = function(e2x) { this.NJ6D();
        this.bl2x(this.cmQ8I(e2x));
        this.bS3x.onbeforerecycle = this.S2x.g2x(this);
        this.nZ7S = this.bof4j() };
    Af2x.bC2x = function() { this.z2x("onbeforerecycle");
        this.bH3x();
        delete this.bS3x;
        a1x.mA7t(this.o2x); var Ah2x = this.nZ7S; if (!!Ah2x) { delete this.nZ7S;
            Ah2x.S2x() } };
    Af2x.bof4j = bm2x;
    Af2x.cmQ8I = function(e2x) { var m2x = {};
        k2x.dZ4d(e2x, function(r2x, J2x) { this.bS3x.hasOwnProperty(J2x) ? this.bS3x[J2x] = r2x : m2x[J2x] = r2x }, this); return m2x };
    Af2x.NJ6D = function() { this.bS3x = { clazz: "", parent: null, content: this.o2x, destroyable: !1, oncontentready: null, nohack: !1 } };
    Af2x.N2x = function() { if (!!this.nZ7S) this.nZ7S.N2x();
        this.z2x("onaftershow"); return this };
    Af2x.bo2x = function() { if (!!this.nZ7S) this.nZ7S.bo2x(); return this } })();
(function() { var c2x = NEJ.P,
        dP3x = c2x("nej.g"),
        ba2x = c2x("nej.h"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        M2x = c2x("nej.ui"),
        NS6M, bLB0x; if (!!M2x.Ic4g) return; var hV5a = a1x.sg9X(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + dP3x.bar0x + ");}");
    M2x.Ic4g = NEJ.C();
    NS6M = M2x.Ic4g.O2x(M2x.es4w);
    bLB0x = M2x.Ic4g.cg3x;
    NS6M.bk2x = function(e2x) { this.bl2x(e2x); var bi2x = e2x.content || "&nbsp;";
        k2x.fi4m(bi2x) ? this.o2x.innerHTML = bi2x : this.o2x.appendChild(bi2x) };
    NS6M.bC2x = function() { this.bH3x();
        this.o2x.innerHTML = "&nbsp;" };
    NS6M.bZ3x = function() { this.li6c = hV5a };
    NS6M.N2x = function() { ba2x.bjI3x(this.o2x);
        bLB0x.N2x.apply(this, arguments); return this } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        M2x = c2x("nej.ut"),
        uK0x; if (!!M2x.xa1x) return;
    M2x.xa1x = NEJ.C();
    uK0x = M2x.xa1x.O2x(M2x.cz3x);
    uK0x.bk2x = function(e2x) { this.bl2x(e2x);
        this.cmM8E = !!e2x.overflow;
        this.o2x = a1x.x2x(e2x.body);
        this.AA2x = a1x.x2x(e2x.view) || a1x.bEq8i(this.o2x);
        this.bLA0x = a1x.x2x(e2x.mbar) || this.o2x;
        this.Tm8e = parseInt(e2x.direction) || 0; if (!!e2x.isRelative) { this.o2x.style.position = "relative";
            this.bpH4L = true;
            this.bpM4Q() } this.bU3x([
            [document, "mouseup", this.bpV4Z.g2x(this)],
            [document, "mousemove", this.bqd4h.g2x(this)],
            [this.bLA0x, "mousedown", this.NX6R.g2x(this)]
        ]) };
    uK0x.bpM4Q = function() { if (!!this.bpH4L) { this.Ie4i = a1x.hJ5O(this.o2x, this.AA2x);
            this.Ie4i.x -= parseInt(a1x.da3x(this.o2x, "left")) || 0;
            this.Ie4i.y -= parseInt(a1x.da3x(this.o2x, "top")) || 0 } };
    uK0x.bC2x = function() { this.bH3x();
        delete this.o2x;
        delete this.bLA0x;
        delete this.AA2x };
    uK0x.bqI4M = function() { return { x: Math.max(this.AA2x.clientWidth, this.AA2x.scrollWidth) - this.o2x.offsetWidth, y: Math.max(this.AA2x.clientHeight, this.AA2x.scrollHeight) - this.o2x.offsetHeight } };
    uK0x.NX6R = function(d2x) { h2x.bh2x(d2x); if (!!this.hM5R) return;
        this.hM5R = { x: h2x.kI6C(d2x), y: h2x.nt7m(d2x) };
        this.bLz0x = this.bqI4M();
        this.z2x("ondragstart", d2x) };
    uK0x.bqd4h = function(d2x) { if (!this.hM5R) return; var bj2x = { x: h2x.kI6C(d2x), y: h2x.nt7m(d2x) }; var rR9I = bj2x.x - this.hM5R.x,
            rd8V = bj2x.y - this.hM5R.y,
            A2x = { top: (parseInt(a1x.da3x(this.o2x, "top")) || 0) + rd8V, left: (parseInt(a1x.da3x(this.o2x, "left")) || 0) + rR9I }; if (this.bpH4L) { this.bpM4Q();
            A2x.top = A2x.top + this.Ie4i.y;
            A2x.left = A2x.left + this.Ie4i.x } this.hM5R = bj2x;
        this.fU5Z(A2x) };
    uK0x.bpV4Z = function(d2x) { if (!this.hM5R) return;
        delete this.bLz0x;
        delete this.hM5R;
        this.z2x("ondragend", this.baF0x()) };
    uK0x.fU5Z = function(d2x) { if (!this.cmM8E) { var bLx0x = this.bLz0x || this.bqI4M();
            d2x.top = Math.min(bLx0x.y, Math.max(0, d2x.top));
            d2x.left = Math.min(bLx0x.x, Math.max(0, d2x.left)) } var cd3x = this.o2x.style; if (this.bpH4L) { this.bpM4Q();
            d2x.top = d2x.top - this.Ie4i.y;
            d2x.left = d2x.left - this.Ie4i.x } if (this.Tm8e == 0 || this.Tm8e == 2) cd3x.top = d2x.top + "px"; if (this.Tm8e == 0 || this.Tm8e == 1) cd3x.left = d2x.left + "px";
        this.z2x("onchange", d2x); return this };
    uK0x.baF0x = function() { return { left: parseInt(a1x.da3x(this.o2x, "left")) || 0, top: parseInt(a1x.da3x(this.o2x, "top")) || 0 } } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = NEJ.P("nej.e"),
        h2x = NEJ.P("nej.v"),
        k2x = NEJ.P("nej.u"),
        H2x = NEJ.P("nej.ut"),
        M2x = NEJ.P("nej.ui"),
        hV5a, gd5i, b2x, K2x; if (!!M2x.Tj8b) return;
    M2x.Tj8b = NEJ.C();
    b2x = M2x.Tj8b.O2x(M2x.Ny6s);
    K2x = M2x.Tj8b.cg3x;
    b2x.cl3x = function() { this.pV8N = {};
        this.jD6x = { onchange: this.bqd4h.g2x(this) };
        this.cs3x() };
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.cmD8v(e2x.mask);
        this.cmA8s(e2x.align);
        this.zU2x(e2x.title); if (!e2x.draggable) return;
        this.jc6W = H2x.xa1x.B2x(this.jD6x) };
    b2x.bC2x = function() { this.bH3x();
        delete this.pA8s;
        delete this.NZ6T; if (!!this.zN2x) { this.zN2x.S2x();
            delete this.zN2x } if (!!this.jc6W) { this.jc6W.S2x();
            delete this.jc6W } };
    b2x.bZ3x = function() { this.li6c = hV5a;
        this.ca3x = gd5i };
    b2x.bR3x = function() { this.cb3x(); var i2x = a1x.cQ3x(this.o2x);
        this.Ae2x = i2x[1];
        this.jD6x.mbar = i2x[0];
        this.jD6x.body = this.o2x;
        h2x.q2x(i2x[2], "mousedown", this.cmr8j.g2x(this));
        h2x.q2x(this.jD6x.mbar, "mousedown", this.NX6R.g2x(this));
        this.bLu0x = a1x.cQ3x(this.jD6x.mbar)[0] };
    b2x.cmr8j = function(d2x) { h2x.bh2x(d2x);
        this.z2x("onclose", d2x); if (!d2x.stopped) { this.bo2x() } };
    b2x.NX6R = function(d2x) { h2x.z2x(document, "click") };
    b2x.bqd4h = function(d2x) { if (!this.mM7F) return;
        a1x.fy4C(this.mM7F, { top: d2x.top + "px", left: d2x.left + "px" }) };
    b2x.HX4b = function() { var eH4L = [function() { return 0 }, function(mU7N, CR3x, bj2x, J2x) { if (J2x == "top" && window.top != window.self) { var Tg7Z = 0,
                        CT3x = 0; if (top.g_topBarHeight) Tg7Z = top.g_topBarHeight; if (top.g_bottomBarShow && top.g_bottomBarHeight) CT3x = top.g_bottomBarHeight; if (mU7N.top <= Tg7Z) { var bcy1x = Math.max(0, (CR3x.height - (Tg7Z - mU7N.top) - CT3x - bj2x.height) / 2); return bcy1x + Tg7Z } else { var bcy1x = Math.max(0, (CR3x.height - CT3x - bj2x.height) / 2); return bcy1x + mU7N.top } } return Math.max(0, mU7N[J2x] + (CR3x[hH5M[J2x]] - bj2x[hH5M[J2x]]) / 2) }, function(mU7N, CR3x, bj2x, J2x) { return mU7N[J2x] + (CR3x[hH5M[J2x]] - bj2x[hH5M[J2x]]) }],
            cmo8g = ["left", "top"],
            hH5M = { left: "width", top: "height" }; return function() { var A2x = {},
                cd3x = this.o2x.style,
                iL5Q = a1x.oc7V(),
                mU7N = { left: iL5Q.scrollLeft, top: iL5Q.scrollTop },
                CR3x = { width: iL5Q.clientWidth, height: iL5Q.clientHeight },
                bj2x = { width: this.o2x.offsetWidth, height: this.o2x.offsetHeight },
                dh3x = { left: iL5Q.clientWidth - this.o2x.offsetWidth, top: iL5Q.clientHeight - this.o2x.offsetHeight };
            k2x.be2x(cmo8g, function(J2x, s2x) { var dc3x = eH4L[this.pA8s[s2x]]; if (!dc3x) return;
                A2x[J2x] = dc3x(mU7N, CR3x, bj2x, J2x) }, this);
            this.fU5Z(A2x) } }();
    b2x.cmn8f = function() { if (!this.zN2x) { if (!this.NZ6T) return;
            this.pV8N.parent = this.fA4E;
            this.zN2x = this.NZ6T.B2x(this.pV8N) } this.zN2x.N2x() };
    b2x.Tx8p = function() { if (!!this.zN2x) this.zN2x.bo2x();
        K2x.Tx8p.apply(this, arguments) };
    b2x.cmD8v = function(km6g) { if (!!km6g) { if (km6g instanceof M2x.Ic4g) { this.zN2x = km6g; return } if (k2x.ge5j(km6g)) { this.NZ6T = km6g; return } this.NZ6T = M2x.Ic4g; if (k2x.fi4m(km6g)) this.pV8N.clazz = km6g; return } this.NZ6T = null };
    b2x.zU2x = function(eI4M, ds3x) { if (!!this.bLu0x) { var ZY0x = !ds3x ? "innerText" : "innerHTML";
            this.bLu0x[ZY0x] = eI4M || "æ ‡é¢˜" } return this };
    b2x.cmA8s = function() { var cO3x = /\s+/,
            cmm8e = { left: 0, center: 1, right: 2, auto: 3 },
            cml8d = { top: 0, middle: 1, bottom: 2, auto: 3 }; return function(mC7v) { this.pA8s = (mC7v || "").split(cO3x); var dQ3x = cmm8e[this.pA8s[0]]; if (dQ3x == null) dQ3x = 1;
            this.pA8s[0] = dQ3x; var dQ3x = cml8d[this.pA8s[1]]; if (dQ3x == null) dQ3x = 1;
            this.pA8s[1] = dQ3x; return this } }();
    b2x.N2x = function() { K2x.N2x.apply(this, arguments);
        this.cmn8f(); return this };
    hV5a = a1x.sg9X(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gd5i = a1x.hW5b('<div class="' + hV5a + '"><div class="zbar"><div class="zttl">æ ‡é¢˜</div></div><div class="zcnt"></div><span class="zcls" title="å…³é—­çª—ä½“">Ã—</span></div>') })();
(function() { var c2x = NEJ.P,
        k2x = c2x("nej.u"),
        M2x = c2x("nej.ui"),
        bcW1x; if (!!M2x.Td7W) return;
    M2x.Td7W = NEJ.C();
    bcW1x = M2x.Td7W.O2x(M2x.Tt8l);
    bcW1x.bof4j = function() { return M2x.Tj8b.B2x(this.bS3x) };
    bcW1x.NJ6D = function() { M2x.Td7W.cg3x.NJ6D.apply(this, arguments);
        this.bS3x.mask = null;
        this.bS3x.title = "æ ‡é¢˜";
        this.bS3x.align = "";
        this.bS3x.draggable = !1;
        this.bS3x.onclose = null } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        bd2x = c2x("nej.ui"),
        n2x = c2x("nm.l"),
        b2x, K2x;
    n2x.dV3x = NEJ.C();
    b2x = n2x.dV3x.O2x(bd2x.Td7W);
    b2x.bk2x = function(e2x) { e2x.clazz = "m-layer z-show " + (e2x.clazz || "");
        e2x.nohack = true;
        e2x.draggable = true;
        this.bl2x(e2x) };
    b2x.dz3x = function(f2x, bE2x) { if (!f2x) return;
        a1x.X2x(f2x, "display", !bE2x ? "none" : "");
        f2x.lastChild.innerText = bE2x || "" };
    b2x.dL3x = function(gj5o, cC3x, Or6l, Ot6n) { var dE3x = "js-lock"; if (cC3x === undefined) return a1x.by2x(gj5o, dE3x);!cC3x ? a1x.w2x(gj5o, dE3x) : a1x.y2x(gj5o, dE3x);
        gj5o.firstChild.innerText = !cC3x ? Or6l : Ot6n };
    n2x.dV3x.N2x = function(e2x) { e2x = e2x || {}; if (e2x.mask === undefined) e2x.mask = "m-mask"; if (e2x.parent === undefined) e2x.parent = document.body; if (e2x.draggable === undefined) e2x.draggable = true;!!this.eJ4N && this.eJ4N.S2x();
        this.eJ4N = this.B2x(e2x);
        this.eJ4N.N2x(e2x); return this.eJ4N };
    n2x.dV3x.bo2x = function() {!!this.eJ4N && this.eJ4N.S2x() } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        b2x, K2x;
    n2x.bdO1x = NEJ.C();
    b2x = n2x.bdO1x.O2x(n2x.dV3x);
    K2x = n2x.bdO1x.cg3x;
    b2x.bk2x = function(e2x) { this.bl2x(e2x); if (e2x.bubble === undefined) e2x.bubble = true;
        this.Ox6r = e2x.bubble;
        this.po8g = e2x.message || "" };
    b2x.bZ3x = function() { this.ca3x = a1x.hW5b('<div class="lyct f-cb f-tc"></div>') };
    b2x.bR3x = function() { this.cb3x();
        h2x.q2x(this.o2x, "click", this.cv3x.g2x(this)) };
    b2x.cv3x = function(d2x) { var f2x = h2x.U2x(d2x, "d:action"); if (!f2x) return; if (f2x.href) h2x.ce3x(d2x); if (a1x.u2x(f2x, "action") == "close") this.bo2x(); if (this.Ox6r === !1) h2x.rQ9H(d2x);
        this.z2x("onaction", a1x.u2x(f2x, "action")) };
    b2x.N2x = function() { K2x.N2x.call(this);
        this.o2x.innerHTML = this.po8g }; var fY5d = a1x.en4r('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="#" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l2x.mp7i = function() { var eR4V; var cp3x; var beh1x = function(gb5g, W2x) { if (k2x.ge5j(gb5g, "function") && gb5g(W2x) != -1) cp3x.S2x() }; var zt2x = function() {!!cp3x && cp3x.bo2x() }; return function(e2x) { clearTimeout(eR4V);
            e2x = e2x || {};
            e2x.title = e2x.title || "æç¤º";
            e2x.clazz = e2x.clazz || "";
            e2x.parent = e2x.parent || document.body;
            e2x.buttons = e2x.buttons || [];
            e2x.message = a1x.bP3x(fY5d, e2x);
            e2x.onaction = beh1x.g2x(null, e2x.action); if (e2x.mask === undefined) e2x.mask = true; if (e2x.draggable === undefined) e2x.draggable = true;!!cp3x && cp3x.S2x();
            cp3x = n2x.bdO1x.B2x(e2x);
            cp3x.N2x(); if (e2x.autoclose) eR4V = setTimeout(zt2x.g2x(null), 2e3); return cp3x } }();
    l2x.fb4f = function(e2x) { e2x = e2x || {};
        e2x.clazz = e2x.clazz || "m-layer-w1";
        e2x.buttons = [{ klass: "u-btn2-2", action: "close", text: e2x.btntxt || "ç¡®å®š" }]; var cp3x = l2x.mp7i(e2x); return cp3x };
    l2x.gQ5V = function(e2x) { e2x = e2x || {};
        e2x.clazz = e2x.clazz || "m-layer-w2";
        e2x.buttons = [{ klass: "u-btn2-2", action: "ok", text: e2x.btnok || "ç¡®å®š", style: e2x.okstyle || "" }, { klass: "u-btn2-1", action: "close", text: e2x.btncc || "å–æ¶ˆ", style: e2x.ccstyle || "" }]; var cp3x = l2x.mp7i(e2x); return cp3x } })();
(function() { var c2x = NEJ.P,
        bm2x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u");
    a1x.cmk8c = function() { var fZ5e = /[\r\n]/gi,
            R2x = {}; var cmj8b = function(cL3x) { return (cL3x || "").replace(fZ5e, "aa").length }; var bLs0x = function(C2x) { var bc2x = R2x[C2x],
                bLr0x = a1x.x2x(C2x),
                wf1x = a1x.x2x(C2x + "-counter"); if (!bLr0x || !bc2x) return; var d2x = { input: bLr0x.value };
            d2x.length = bc2x.onlength(d2x.input);
            d2x.delta = bc2x.max - d2x.length;
            bc2x.onchange(d2x);
            wf1x.innerHTML = d2x.value || "å‰©ä½™" + d2x.delta + "ä¸ªå­—" }; return function(E2x, e2x) { var C2x = a1x.kL6F(E2x); if (!C2x || !!R2x[C2x]) return; var bc2x = NEJ.X({}, e2x);
            bc2x.onchange = bc2x.onchange || bm2x;
            bc2x.onlength = cmj8b; if (!bc2x.max) { var bLq0x = parseInt(a1x.gi5n(C2x, "maxlength")),
                    bLo9f = parseInt(a1x.u2x(C2x, "maxLength"));
                bc2x.max = bLq0x || bLo9f || 100; if (!bLq0x && !!bLo9f) bc2x.onlength = k2x.fh4l } R2x[C2x] = bc2x;
            h2x.q2x(C2x, "input", bLs0x.g2x(null, C2x)); var f2x = a1x.FO4S(C2x, { nid: bc2x.nid || "js-counter", clazz: bc2x.clazz });
            bc2x.xid = C2x + "-counter";
            f2x.id = bc2x.xid;
            bLs0x(C2x) } }() })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        ba2x = c2x("nej.h");
    ba2x.bfP2x = function(E2x, dJ3x) {} })();
(function() { var c2x = NEJ.P,
        bm2x = NEJ.F,
        M2x = c2x("nej.p"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        ba2x = c2x("nej.h"); if (M2x.mr7k.trident) return;
    ba2x.bfP2x = function() { var R2x = {}; var Fi3x = function(d2x) { var cM3x = h2x.U2x(d2x); if (!!cM3x.value) return;
            a1x.X2x(a1x.FO4S(cM3x), "display", "none") }; var BK2x = function(d2x) { var cM3x = h2x.U2x(d2x); if (!!cM3x.value) return;
            a1x.X2x(a1x.FO4S(cM3x), "display", "") }; var cmb8T = function(cM3x, dJ3x) { var C2x = a1x.kL6F(cM3x),
                jH6B = a1x.FO4S(cM3x, { tag: "label", clazz: dJ3x });
            jH6B.htmlFor = C2x; var cZ3x = a1x.gi5n(cM3x, "placeholder") || "";
            jH6B.innerText = cZ3x == "null" ? "" : cZ3x; var cq3x = cM3x.offsetHeight + "px";
            a1x.fy4C(jH6B, { left: 0, display: !cM3x.value ? "" : "none" }) }; return ba2x.bfP2x.ef4j(function(d2x) { d2x.stopped = !0; var bg2x = d2x.args,
                cM3x = a1x.x2x(bg2x[0]); if (!!R2x[cM3x.id]) return;
            cmb8T(cM3x, bg2x[1]);
            R2x[cM3x.id] = !0;
            h2x.q2x(cM3x, "blur", BK2x.g2x(null));
            h2x.q2x(cM3x, "focus", Fi3x.g2x(null)) }) }() })();
(function() { var c2x = NEJ.P,
        ba2x = c2x("nej.h"),
        a1x = c2x("nej.e"),
        cN3x = c2x("nej.x");
    a1x.fx4B = cN3x.fx4B = function(E2x, dJ3x) { ba2x.bfP2x(E2x, a1x.u2x(E2x, "holder") || dJ3x || "js-placeholder"); return this };
    cN3x.isChange = !0 })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        M2x = c2x("nej.ut"),
        hf5k; if (!!M2x.Oz6t) return;
    M2x.Oz6t = NEJ.C();
    hf5k = M2x.Oz6t.O2x(M2x.cz3x);
    hf5k.cl3x = function() { this.cs3x();
        this.AV2x = { tp: { nid: "js-nej-tp" }, ok: { nid: "js-nej-ok" }, er: { nid: "js-nej-er" } } };
    hf5k.bk2x = function(e2x) { this.bl2x(e2x);
        this.fL4P = document.forms[e2x.form] || a1x.x2x(e2x.form);
        this.bU3x([
            [this.fL4P, "keypress", this.clY8Q.g2x(this)]
        ]);
        this.po8g = e2x.message || {};
        this.po8g.pass = this.po8g.pass || "&nbsp;"; var eD4H = this.os7l(this.fL4P, "focusMode", 1); if (!isNaN(eD4H)) { this.bLl9c = { mode: eD4H, clazz: e2x.focus } } this.zk2x = e2x.holder;
        this.AV2x.tp.clazz = "js-mhd " + (e2x.tip || "js-tip");
        this.AV2x.ok.clazz = "js-mhd " + (e2x.pass || "js-pass");
        this.AV2x.er.clazz = "js-mhd " + (e2x.error || "js-error");
        this.bLj9a = e2x.invalid || "js-invalid";
        this.clT8L(e2x);
        this.fQ5V(); if (!!this.zf2x) this.zf2x.focus() };
    hf5k.bC2x = function() { this.bH3x();
        delete this.po8g;
        delete this.zf2x;
        delete this.BE2x;
        delete this.fL4P;
        delete this.bLi9Z;
        delete this.OD6x };
    hf5k.os7l = function(f2x, BJ2x, t2x) { var A2x = a1x.u2x(f2x, BJ2x); switch (t2x) {
            case 1:
                return parseInt(A2x);
            case 2:
                return (A2x || "").toLowerCase() == "true";
            case 3:
                return this.bht2x(A2x) } return A2x };
    hf5k.yW2x = function(A2x, t2x) { if (t2x == "date") return this.bht2x(A2x); return parseInt(A2x) };
    hf5k.ST7M = function() { var jj6d = /^button|submit|reset|image|hidden|file$/i; return function(f2x) { f2x = this.x2x(f2x) || f2x; var t2x = f2x.type; return !!f2x.name && !jj6d.test(f2x.type || "") } }();
    hf5k.clR8J = function() { var jj6d = /^hidden$/i; return function(f2x) { if (this.ST7M(f2x)) return !0;
            f2x = this.x2x(f2x) || f2x; var t2x = f2x.type || ""; return jj6d.test(t2x) } }();
    hf5k.bht2x = function() { var cO3x = /[-\/]/; var clJ7C = function(A2x) { if (!A2x) return "";
            A2x = A2x.split(cO3x);
            A2x.push(A2x.shift()); return A2x.join("/") }; return function(A2x) { if ((A2x || "").toLowerCase() == "now") return +(new Date); return Date.parse(clJ7C(A2x)) } }();
    hf5k.clY8Q = function(d2x) { if (d2x.keyCode != 13) return;
        this.z2x("onenter", d2x) };
    hf5k.clI7B = function(C2x, T2x) { var qG8y = this.OD6x[T2x],
            A2x = this.os7l(C2x, T2x); if (!A2x || !qG8y) return;
        this.SS7L(C2x, qG8y);
        this.bii2x(C2x, T2x, A2x) };
    hf5k.clG7z = function(C2x, T2x) { try { var bLd9U = this.os7l(C2x, T2x); if (!bLd9U) return; var A2x = new RegExp(bLd9U);
            this.bii2x(C2x, T2x, A2x);
            this.SS7L(C2x, this.OD6x[T2x]) } catch (e) {} };
    hf5k.clD7w = function(C2x, T2x) { var qG8y = this.OD6x[T2x]; if (!!qG8y && this.os7l(C2x, T2x, 2)) this.SS7L(C2x, qG8y) };
    hf5k.bio2x = function(C2x, T2x, A2x) { A2x = parseInt(A2x); if (isNaN(A2x)) return;
        this.bii2x(C2x, T2x, A2x);
        this.SS7L(C2x, this.OD6x[T2x]) };
    hf5k.bLb9S = function(C2x, T2x) { this.bio2x(C2x, T2x, this.os7l(C2x, T2x)) };
    hf5k.bLa9R = function(C2x, T2x) { this.bio2x(C2x, T2x, a1x.gi5n(C2x, T2x)) };
    hf5k.bKZ9Q = function(C2x, T2x, t2x) { var A2x = this.yW2x(this.os7l(C2x, T2x), this.os7l(C2x, "type"));
        this.bio2x(C2x, T2x, A2x) };
    hf5k.clw7p = function() { var fZ5e = /^input|textarea$/i; var Fi3x = function(d2x) { this.oJ8B(h2x.U2x(d2x)) }; var BK2x = function(d2x) { var f2x = h2x.U2x(d2x); if (!this.os7l(f2x, "ignore", 2)) { this.bKY9P(f2x) } }; return function(f2x) { if (this.os7l(f2x, "autoFocus", 2)) this.zf2x = f2x; var pc8U = a1x.gi5n(f2x, "placeholder"); if (!!pc8U && pc8U != "null") a1x.fx4B(f2x, this.zk2x); if (!!this.bLl9c && fZ5e.test(f2x.tagName)) a1x.ln6h(f2x, this.bLl9c); var C2x = a1x.kL6F(f2x);
            this.clD7w(C2x, "required");
            this.clI7B(C2x, "type");
            this.clG7z(C2x, "pattern");
            this.bLa9R(C2x, "maxlength");
            this.bLa9R(C2x, "minlength");
            this.bLb9S(C2x, "maxLength");
            this.bLb9S(C2x, "minLength");
            this.bKZ9Q(C2x, "min");
            this.bKZ9Q(C2x, "max"); var T2x = f2x.name;
            this.po8g[T2x + "-tip"] = this.os7l(f2x, "tip");
            this.po8g[T2x + "-error"] = this.os7l(f2x, "message");
            this.oJ8B(f2x); var bt2x = this.BE2x[C2x],
                j2x = (bt2x || Y2x).data || Y2x,
                OO6I = this.os7l(f2x, "counter", 2); if (OO6I && (j2x.maxlength || j2x.maxLength)) { a1x.cmk8c(C2x, { nid: this.AV2x.tp.nid, clazz: "js-counter" }) } if (!!bt2x && fZ5e.test(f2x.tagName)) { this.bU3x([
                    [f2x, "focus", Fi3x.g2x(this)],
                    [f2x, "blur", BK2x.g2x(this)]
                ]) } else if (this.os7l(f2x, "focus", 2)) { this.bU3x([
                    [f2x, "focus", Fi3x.g2x(this)]
                ]) } } }();
    hf5k.clT8L = function() { var CM3x = { number: /^[\d]+$/i, url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i, email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i, date: function(v) { return !v || !isNaN(this.bht2x(v)) } }; var clu7n = { required: function(f2x) { var t2x = f2x.type,
                    clo7h = !f2x.value,
                    clk7d = (t2x == "checkbox" || t2x == "radio") && !f2x.checked; if (clk7d || clo7h) return -1 }, type: function(f2x, e2x) { var cO3x = this.bLi9Z[e2x.type],
                    eM4Q = f2x.value.trim(),
                    cli7b = !!cO3x.test && !cO3x.test(eM4Q),
                    clh7a = k2x.ge5j(cO3x) && !cO3x.call(this, eM4Q); if (cli7b || clh7a) return -2 }, pattern: function(f2x, e2x) { if (!e2x.pattern.test(f2x.value)) return -3 }, maxlength: function(f2x, e2x) { if (f2x.value.length > e2x.maxlength) return -4 }, minlength: function(f2x, e2x) { if (f2x.value.length < e2x.minlength) return -5 }, maxLength: function(f2x, e2x) { if (k2x.fh4l(f2x.value) > e2x.maxLength) return -4 }, minLength: function(f2x, e2x) { if (k2x.fh4l(f2x.value) < e2x.minLength) return -5 }, min: function(f2x, e2x) { var ft4x = this.yW2x(f2x.value, e2x.type); if (isNaN(ft4x) || ft4x < e2x.min) return -6 }, max: function(f2x, e2x) { var ft4x = this.yW2x(f2x.value, e2x.type); if (isNaN(ft4x) || ft4x > e2x.max) return -7 } }; return function(e2x) { this.bLi9Z = NEJ.X(NEJ.X({}, CM3x), e2x.type);
            this.OD6x = NEJ.X(NEJ.X({}, clu7n), e2x.attr) } }();
    hf5k.SS7L = function(C2x, wi1x) { if (!k2x.ge5j(wi1x)) return; var bt2x = this.BE2x[C2x]; if (!bt2x || !bt2x.func) { bt2x = bt2x || {};
            bt2x.func = [];
            this.BE2x[C2x] = bt2x } bt2x.func.push(wi1x) };
    hf5k.bii2x = function(C2x, T2x, A2x) { if (!T2x) return; var bt2x = this.BE2x[C2x]; if (!bt2x || !bt2x.data) { bt2x = bt2x || {};
            bt2x.data = {};
            this.BE2x[C2x] = bt2x } bt2x.data[T2x] = A2x };
    hf5k.bKY9P = function(f2x) { f2x = this.x2x(f2x) || f2x; var bt2x = this.BE2x[a1x.kL6F(f2x)]; if (!f2x || !bt2x || !this.ST7M(f2x)) return !0; var m2x;
        k2x.dZ4d(bt2x.func, function(eH4L) { m2x = eH4L.call(this, f2x, bt2x.data); return m2x != null }, this); if (m2x == null) { var d2x = { target: f2x, form: this.fL4P };
            this.z2x("oncheck", d2x);
            m2x = d2x.value } var d2x = { target: f2x, form: this.fL4P }; if (m2x != null) { d2x.code = m2x;
            this.z2x("oninvalid", d2x); if (!d2x.stopped) { this.clg7Z(f2x, d2x.value || this.po8g[f2x.name + m2x]) } } else { this.z2x("onvalid", d2x); if (!d2x.stopped) this.cld7W(f2x, d2x.value) } return m2x == null };
    hf5k.wy1x = function() { var clc7V = function(Zh0x, Zg0x) { return Zh0x == Zg0x ? "block" : "none" }; var cla7T = function(f2x, t2x, bE2x) { var pc8U = bKO9F.call(this, f2x, t2x); if (!pc8U && !!bE2x) pc8U = a1x.FO4S(f2x, this.AV2x[t2x]); return pc8U }; var bKO9F = function(f2x, t2x) { var pc8U; if (t2x == "tp") pc8U = a1x.x2x(f2x.name + "-tip"); if (!pc8U) pc8U = a1x.I2x(f2x.parentNode, this.AV2x[t2x].nid)[0]; return pc8U }; return function(f2x, bE2x, t2x) { f2x = this.x2x(f2x) || f2x; if (!f2x) return;
            t2x == "er" ? a1x.y2x(f2x, this.bLj9a) : a1x.w2x(f2x, this.bLj9a); var pc8U = cla7T.call(this, f2x, t2x, bE2x); if (!!pc8U && !!bE2x) pc8U.innerHTML = bE2x;
            k2x.dZ4d(this.AV2x, function(A2x, J2x) { a1x.X2x(bKO9F.call(this, f2x, J2x), "display", clc7V(t2x, J2x)) }, this) } }();
    hf5k.oJ8B = function(f2x, bE2x) { this.wy1x(f2x, bE2x || this.po8g[f2x.name + "-tip"], "tp"); return this };
    hf5k.cld7W = function(f2x, bE2x) { this.wy1x(f2x, bE2x || this.po8g[f2x.name + "-pass"] || this.po8g.pass, "ok"); return this };
    hf5k.clg7Z = function(f2x, bE2x) { this.wy1x(f2x, bE2x || this.po8g[f2x.name + "-error"], "er"); return this };
    hf5k.hO5T = function() { var fZ5e = /^(?:radio|checkbox)$/i; var ckX7Q = function(A2x) { return A2x == null ? "" : A2x }; var bKN9E = function(A2x, f2x) { if (fZ5e.test(f2x.type || "")) { f2x.checked = A2x == f2x.value } else { f2x.value = ckX7Q(A2x) } }; return function(T2x, A2x) { var f2x = this.x2x(T2x); if (!f2x) return this; if (f2x.tagName == "SELECT" || !f2x.length) { bKN9E(A2x, f2x) } else { k2x.be2x(f2x, bKN9E.g2x(null, A2x)) } return this } }();
    hf5k.x2x = function(T2x) { return this.fL4P.elements[T2x] };
    hf5k.ctE9v = function() { return this.fL4P };
    hf5k.SA7t = function() { var fZ5e = /^radio|checkbox$/i,
            jj6d = /^number|date$/; var ckS7L = function(bv2x, f2x) { var T2x = f2x.name,
                A2x = f2x.value,
                bt2x = bv2x[T2x],
                t2x = this.os7l(f2x, "type"); if (jj6d.test(t2x)) A2x = this.yW2x(A2x, t2x); if (fZ5e.test(f2x.type) && !f2x.checked) { A2x = this.os7l(f2x, "value"); if (!A2x) return } if (!!bt2x) { if (!k2x.ep4t(bt2x)) { bt2x = [bt2x];
                    bv2x[T2x] = bt2x } bt2x.push(A2x) } else { bv2x[T2x] = A2x } }; return function() { var m2x = {};
            k2x.be2x(this.fL4P.elements, function(f2x) { if (this.clR8J(f2x)) ckS7L.call(this, m2x, f2x) }, this); return m2x } }();
    hf5k.Sy7r = function() { var ckR7K = function(f2x) { if (this.ST7M(f2x)) this.oJ8B(f2x) }; return function() { this.fL4P.reset();
            k2x.be2x(this.fL4P.elements, ckR7K, this); return this } }();
    hf5k.ctF9w = function() { this.fL4P.submit(); return this };
    hf5k.fQ5V = function() { var ckP7I = function(f2x) { if (this.ST7M(f2x)) this.clw7p(f2x) }; return function() { this.BE2x = {};
            k2x.be2x(this.fL4P.elements, ckP7I, this); return this } }();
    hf5k.ckO7H = function(f2x) { f2x = this.x2x(f2x) || f2x; if (!!f2x) return this.bKY9P(f2x); var m2x = !0;
        k2x.be2x(this.fL4P.elements, function(f2x) { var jY6S = this.ckO7H(f2x);
            m2x = m2x && jY6S }, this); return m2x } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        b2x, K2x;
    n2x.Ss7l = NEJ.C();
    b2x = n2x.Ss7l.O2x(n2x.dV3x);
    K2x = n2x.Ss7l.cg3x;
    b2x.bR3x = function() { this.cb3x();
        h2x.q2x(this.o2x, "click", this.cv3x.g2x(this));
        h2x.q2x(document, "mousewheel", this.yg1x.g2x(this)); if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.yg1x.g2x(this)) };
    b2x.bk2x = function(e2x) { this.bl2x(e2x); if (e2x.jst) { this.o2x.innerHTML = a1x.bP3x(e2x.jst, e2x.data) } else if (e2x.ntp) { this.o2x.appendChild(a1x.dq3x(e2x.ntp)) } else if (e2x.txt) { this.o2x.innerHTML = a1x.hX5c(e2x.txt) } else if (e2x.html) { this.o2x.innerHTML = e2x.html } var PA6u = this.o2x.getElementsByTagName("form"); if (PA6u.length) { this.fL4P = H2x.Oz6t.B2x({ form: PA6u[0] }) } this.DT3x = a1x.cQ3x(this.o2x)[0] };
    b2x.bC2x = function() { this.z2x("ondestroy");
        this.bH3x();
        this.o2x.innerHTML = "";
        delete this.DT3x };
    b2x.cv3x = function(d2x) { var f2x = h2x.U2x(d2x, "d:action"),
            j2x = this.fL4P ? this.fL4P.SA7t() : null,
            d2x = { action: a1x.u2x(f2x, "action") }; if (j2x) d2x.data = j2x; if (d2x.action) { this.z2x("onaction", d2x); if (d2x.stopped) return;
            this.bo2x() } };
    b2x.yg1x = function(d2x) { if (!this.DT3x) return;
        h2x.bh2x(d2x); var dh3x = d2x.wheelDelta || -d2x.detail;
        this.DT3x.scrollTop -= dh3x };
    l2x.jh6b = function(e2x) { e2x.destroyable = e2x.destroyable || true;
        e2x.title = e2x.title || "æç¤º";
        e2x.draggable = true;
        e2x.parent = document.body;
        e2x.mask = e2x.mask || true; var Ah2x = n2x.Ss7l.B2x(e2x);
        Ah2x.N2x(); return Ah2x } })();
(function() { var p = NEJ.P("nej.u"); var bKI9z = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        PQ7J = {},
        Ef3x = {}; for (var i = 0, l = bKI9z.length, c; i < l; i++) { c = bKI9z.charAt(i);
        PQ7J[i] = c;
        Ef3x[c] = i } var ckL7E = function(iF5K) { var s2x = 0,
            c, m2x = []; while (s2x < iF5K.length) { c = iF5K[s2x]; if (c < 128) { m2x.push(String.fromCharCode(c));
                s2x++ } else if (c > 191 && c < 224) { m2x.push(String.fromCharCode((c & 31) << 6 | iF5K[s2x + 1] & 63));
                s2x += 2 } else { m2x.push(String.fromCharCode((c & 15) << 12 | (iF5K[s2x + 1] & 63) << 6 | iF5K[s2x + 2] & 63));
                s2x += 3 } } return m2x.join("") }; var ckK7D = function() { var gY5d = /\r\n/g; return function(j2x) { j2x = j2x.replace(gY5d, "\n"); var m2x = [],
                nk7d = String.fromCharCode(237); if (nk7d.charCodeAt(0) < 0)
                for (var i = 0, l = j2x.length, c; i < l; i++) { c = j2x.charCodeAt(i);
                    c > 0 ? m2x.push(c) : m2x.push(256 + c >> 6 | 192, 256 + c & 63 | 128) } else
                    for (var i = 0, l = j2x.length, c; i < l; i++) { c = j2x.charCodeAt(i); if (c < 128) m2x.push(c);
                        else if (c > 127 && c < 2048) m2x.push(c >> 6 | 192, c & 63 | 128);
                        else m2x.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128) }
            return m2x } }(); var IN4R = function(iF5K) { var s2x = 0,
            m2x = [],
            eD4H = iF5K.length % 3; if (eD4H == 1) iF5K.push(0, 0); if (eD4H == 2) iF5K.push(0); while (s2x < iF5K.length) { m2x.push(PQ7J[iF5K[s2x] >> 2], PQ7J[(iF5K[s2x] & 3) << 4 | iF5K[s2x + 1] >> 4], PQ7J[(iF5K[s2x + 1] & 15) << 2 | iF5K[s2x + 2] >> 6], PQ7J[iF5K[s2x + 2] & 63]);
            s2x += 3 } if (eD4H == 1) m2x[m2x.length - 1] = m2x[m2x.length - 2] = "="; if (eD4H == 2) m2x[m2x.length - 1] = "="; return m2x.join("") }; var ckJ7C = function() { var qD8v = /\n|\r|=/g; return function(j2x) { var s2x = 0,
                m2x = [];
            j2x = j2x.replace(qD8v, ""); for (var i = 0, l = j2x.length; i < l; i += 4) m2x.push(Ef3x[j2x.charAt(i)] << 2 | Ef3x[j2x.charAt(i + 1)] >> 4, (Ef3x[j2x.charAt(i + 1)] & 15) << 4 | Ef3x[j2x.charAt(i + 2)] >> 2, (Ef3x[j2x.charAt(i + 2)] & 3) << 6 | Ef3x[j2x.charAt(i + 3)]); var bp2x = m2x.length,
                eD4H = j2x.length % 4; if (eD4H == 2) m2x = m2x.slice(0, bp2x - 2); if (eD4H == 3) m2x = m2x.slice(0, bp2x - 1); return m2x } }();
    p.ctG9x = function(j2x) { return ckL7E(ckJ7C(j2x)) };
    p.ckG7z = function(j2x) { try { return window.btoa(j2x) } catch (ex) { return IN4R(ckK7D(j2x)) } } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        M2x = c2x("nej.p"),
        k2x = c2x("nej.u"),
        n2x = c2x("nm.l"),
        D2x = c2x("nm.w"),
        bI3x = c2x("nej.ui"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K2x; var TYPE_MAP = { 13: "playlist", 17: "program", 18: "song", 19: "album" };
    n2x.bKF9w = NEJ.C();
    b2x = n2x.bKF9w.O2x(n2x.dV3x);
    b2x.bZ3x = function() { this.ca3x = "m-download-layer" };
    b2x.bR3x = function() { this.cb3x(); var i2x = a1x.I2x(this.o2x, "j-flag");
        this.bnj4n = i2x[0];
        this.bnl4p = i2x[1];
        this.bKE9v = i2x[2];
        v2x.bq2x("/client/version/get", { type: "json", onload: this.ckC7v.g2x(this) }); if (M2x.ZQ0x.mac) { a1x.w2x(this.bnj4n.parentNode, "f-hide");
            a1x.y2x(this.bnl4p.parentNode, "f-hide");
            a1x.y2x(this.bKE9v, "f-hide") } else { a1x.y2x(this.bnj4n.parentNode, "f-hide");
            a1x.w2x(this.bnl4p.parentNode, "f-hide");
            a1x.w2x(this.bKE9v, "f-hide") } };
    b2x.bk2x = function(e2x) { e2x.clazz = " m-layer-down";
        e2x.parent = e2x.parent || document.body;
        e2x.title = "ä¸‹è½½";
        e2x.draggable = !0;
        e2x.destroyalbe = !0;
        e2x.mask = true;
        this.bl2x(e2x);
        this.bU3x([
            [this.o2x, "click", this.bO3x.g2x(this)]
        ]);
        this.et4x = TYPE_MAP[e2x.type];
        this.gw5B = e2x.id };
    b2x.bC2x = function() { this.bH3x() };
    b2x.yV2x = function() { this.bo2x() };
    b2x.AQ2x = function(d2x) { this.z2x("onok", A2x);
        this.bo2x() };
    b2x.bO3x = function(d2x) { var f2x = h2x.U2x(d2x, "d:action"); switch (a1x.u2x(f2x, "action")) {
            case "download":
                this.bo2x();
                window.open(a1x.u2x(f2x, "src")); break;
            case "orpheus":
                this.bo2x();
                location.href = "orpheus://" + k2x.ckG7z(JSON.stringify({ type: this.et4x, id: this.gw5B, cmd: "download" })); break } };
    b2x.ckC7v = function(d2x) { if ((d2x || Y2x).code == 200) { this.Ho4s = d2x.data;
            this.bnj4n.innerText = "V" + this.Ho4s.mac;
            this.bnl4p.innerText = "V" + this.Ho4s.pc } };
    l2x.Sd7W = function(e2x) { n2x.bKF9w.B2x(e2x).N2x() } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        k2x = c2x("nej.u"),
        p2x = c2x("nm.d"),
        bN3x = {};
    p2x.x2x = function(J2x) { return bN3x[J2x] };
    p2x.oH8z = function(J2x, bc2x) { bN3x[J2x] = bc2x };
    p2x.eO4S = function(j2x) { k2x.dZ4d(j2x, function(r2x, J2x) { var bc2x = bN3x[J2x] || {};
            NEJ.X(bc2x, r2x);
            bN3x[J2x] = bc2x }) } })();
(function() { var c2x = NEJ.P,
        bm2x = NEJ.F,
        ba2x = c2x("nej.h");
    ba2x.Sc7V = function(J2x) { return localStorage.getItem(J2x) };
    ba2x.Sb7U = function(J2x, A2x) { localStorage.setItem(J2x, A2x) };
    ba2x.box4B = function(J2x) { localStorage.removeItem(J2x) };
    ba2x.boA4E = function() { localStorage.clear() };
    ba2x.ckB7u = function() { var m2x = []; for (var i = 0, l = localStorage.length; i < l; i++) m2x.push(localStorage.key(i)); return m2x };
    ba2x.boD4H = function() {
        (document.onstorageready || bm2x)() };
    ba2x.boK4O = function() { return !0 } })();
(function() { var c2x = NEJ.P,
        M2x = c2x("nej.p"),
        iz5E = c2x("nej.c"),
        ba2x = c2x("nej.h"),
        sf9W; if (M2x.mr7k.trident || !!window.localStorage) return; var ckA7t = function() { var qb8T, eR4V; var bme3x = function() { qb8T = document.createElement("div");
            NEJ.X(qb8T.style, { position: "absolute", top: 0, left: 0, width: "1px", height: "1px", zIndex: 1e4, overflow: "hidden" });
            document.body.insertAdjacentElement("afterBegin", qb8T);
            qb8T.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iz5E.x2x("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>' }; var LP5U = function() { eR4V = window.clearTimeout(eR4V); var ha5f = qb8T.getElementsByTagName("object")[0]; if (!!ha5f.initStorage) { delete qb8T;
                sf9W = ha5f;
                sf9W.initStorage("nej-storage");
                (document.onstorageready || bm2x)(); return } eR4V = window.setTimeout(LP5U, 500) }; return function() { if (!!sf9W) return;
            bme3x();
            LP5U() } }();
    ba2x.Sc7V = ba2x.Sc7V.ef4j(function(d2x) { d2x.stopped = !0; if (!sf9W) return;
        d2x.value = sf9W.getItem(d2x.args[0]) });
    ba2x.Sb7U = ba2x.Sb7U.ef4j(function(d2x) { d2x.stopped = !0; if (!sf9W) return; var bg2x = d2x.args;
        sf9W.setItem(bg2x[0], bg2x[1]) });
    ba2x.box4B = ba2x.box4B.ef4j(function(d2x) { d2x.stopped = !0; if (!sf9W) return;
        sf9W.removeItem(d2x.args[0]) });
    ba2x.boA4E = ba2x.boA4E.ef4j(function(d2x) { d2x.stopped = !0; if (!!sf9W) sf9W.clear() });
    ba2x.boD4H = ba2x.boD4H.ef4j(function(d2x) { d2x.stopped = !0;
        ckA7t() });
    ba2x.boK4O = ba2x.boK4O.ef4j(function(d2x) { d2x.stopped = !0;
        d2x.value = !!sf9W }) })();
(function() { var c2x = NEJ.P,
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        ba2x = c2x("nej.h"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        R2x = {};
    v2x.vo0x = function(J2x, A2x) { var bKD9u = JSON.stringify(A2x); try { ba2x.Sb7U(J2x, bKD9u) } catch (ex) { console.error(ex.message);
            console.error(ex) } if (bKD9u != ba2x.Sc7V(J2x)) R2x[J2x] = A2x; return this };
    v2x.sm9d = function(J2x) { var j2x = JSON.parse(ba2x.Sc7V(J2x) || "null"); return j2x == null ? R2x[J2x] : j2x };
    v2x.bKB9s = function(J2x, A2x) { var j2x = v2x.sm9d(J2x); if (j2x == null) { j2x = A2x;
            v2x.vo0x(J2x, j2x) } return j2x };
    v2x.Qo7h = function(J2x) { delete R2x[J2x];
        ba2x.box4B(J2x); return this };
    v2x.ctH9y = function() { var bpm4q = function(r2x, J2x, bv2x) { delete bv2x[J2x] }; return function() { k2x.dZ4d(R2x, bpm4q);
            ba2x.boA4E(); return this } }();
    v2x.ctI9z = function(m2x) { m2x = m2x || {};
        k2x.be2x(ba2x.ckB7u(), function(J2x) { m2x[J2x] = v2x.sm9d(J2x) }); return m2x };
    H2x.fv4z.B2x({ element: document, event: "storageready", oneventadd: function() { if (ba2x.boK4O()) { document.onstorageready() } } }); var ckp7i = function() { var ckm7f = function(A2x, J2x, bv2x) { ba2x.Sb7U(J2x, JSON.stringify(A2x));
            delete bv2x[J2x] }; return function() { k2x.dZ4d(R2x, ckm7f) } }();
    h2x.q2x(document, "storageready", ckp7i);
    ba2x.boD4H() })();
(function() { var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        M2x = c2x("nej.ut"),
        IT4X; if (!!M2x.bpU4Y) return;
    M2x.bpU4Y = NEJ.C();
    IT4X = M2x.bpU4Y.O2x(M2x.cz3x);
    IT4X.cl3x = function() { var fY5d = +(new Date),
            mq7j = "dat-" + fY5d; return function() { this.cs3x(); var R2x = this.constructor[mq7j]; if (!R2x) { R2x = {};
                this.constructor[mq7j] = R2x } this.P2x = R2x } }();
    IT4X.x2x = function(J2x) { return this.P2x[J2x] };
    IT4X.oH8z = function(J2x, A2x) { var lO7H = this.P2x[J2x];
        this.P2x[J2x] = A2x;
        h2x.z2x(localCache, "cachechange", { key: J2x, type: "set", oldValue: lO7H, newValue: A2x }); return this };
    IT4X.cH3x = function(J2x) { var lO7H = this.P2x[J2x];
        k2x.WH9y(this.P2x, J2x);
        h2x.z2x(localCache, "cachechange", { key: J2x, type: "delete", oldValue: lO7H, newValue: undefined }); return lO7H };
    IT4X.RX7Q = function(Co2x) { return NEJ.Q(this.P2x, Co2x) };
    window.localCache = M2x.bpU4Y.B2x();
    M2x.fv4z.B2x({ element: localCache, event: "cachechange" }) })();
(function() { var c2x = NEJ.P,
        eT4X = NEJ.R,
        bm2x = NEJ.F,
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        M2x = c2x("nej.ut"),
        mq7j = "dat-" + +(new Date),
        mt7m; if (!!M2x.bqF4J) return;
    M2x.bqF4J = NEJ.C();
    mt7m = M2x.bqF4J.O2x(M2x.cz3x);
    mt7m.cl3x = function() { this.cs3x();
        this.P2x = this.constructor[mq7j]; if (!this.P2x) { this.P2x = {};
            this.P2x[mq7j + "-l"] = {};
            this.constructor[mq7j] = this.P2x } };
    mt7m.qc8U = function(J2x) { return this.P2x[J2x] };
    mt7m.om7f = function(J2x, A2x) { this.P2x[J2x] = A2x };
    mt7m.kG6A = function(J2x, ky6s) { var j2x = this.qc8U(J2x); if (j2x == null) { j2x = ky6s;
            this.om7f(J2x, j2x) } return j2x };
    mt7m.ckl7e = function(J2x) { if (J2x != null) { delete this.P2x[J2x]; return } k2x.dZ4d(this.P2x, function(r2x, J2x) { if (J2x == mq7j + "-l") return;
            this.ckl7e(J2x) }, this) };
    mt7m.ctL9C = function(J2x) { if (!!v2x.Qo7h) return v2x.Qo7h(J2x) };
    mt7m.ckh7a = function(J2x) { if (!!v2x.sm9d) return v2x.sm9d(J2x) };
    mt7m.ckg7Z = function(J2x, A2x) { if (!!v2x.vo0x) v2x.vo0x(J2x, A2x) };
    mt7m.BV2x = function(J2x, ky6s) { var j2x = this.Qt7m(J2x); if (j2x == null) { j2x = ky6s;
            this.vd0x(J2x, j2x) } return j2x };
    mt7m.Qt7m = function(J2x) { var j2x = this.qc8U(J2x); if (j2x != null) return j2x;
        j2x = this.ckh7a(J2x); if (j2x != null) this.om7f(J2x, j2x); return j2x };
    mt7m.vd0x = function(J2x, A2x) { this.ckg7Z(J2x, A2x);
        this.om7f(J2x, A2x) };
    mt7m.bKt9k = function(J2x) { if (J2x != null) { delete this.P2x[J2x]; if (!!v2x.Qo7h) v2x.Qo7h(J2x); return } k2x.dZ4d(this.P2x, function(r2x, J2x) { if (J2x == mq7j + "-l") return;
            this.bKt9k(J2x) }, this) };
    mt7m.ctM9D = function() { this.bKt9k(); return this };
    mt7m.ctN9E = function(J2x) { var j2x = this.P2x[mq7j + "-l"];
        delete j2x[J2x] };
    mt7m.baO0x = function(J2x) { var j2x = this.P2x[mq7j + "-l"],
            bg2x = eT4X.slice.call(arguments, 1);
        k2x.be2x(j2x[J2x], function(du3x) { try { du3x.apply(null, bg2x) } catch (ex) { console.error(ex.message);
                console.error(ex.stack) } });
        delete j2x[J2x] };
    mt7m.baT0x = function(J2x, du3x) { du3x = du3x || bm2x; var i2x = this.P2x[mq7j + "-l"][J2x]; if (!i2x) { i2x = [du3x];
            this.P2x[mq7j + "-l"][J2x] = i2x; return !1 } i2x.push(du3x); return !0 };
    mt7m.cka7T = function(i2x, bj2x, fV5a) { if (!i2x) return !1;
        bj2x = parseInt(bj2x) || 0;
        fV5a = parseInt(fV5a) || 0; if (!fV5a) { if (!i2x.loaded) return !1;
            fV5a = i2x.length } if (!!i2x.loaded) fV5a = Math.min(fV5a, i2x.length - bj2x); for (var i = 0; i < fV5a; i++)
            if (!i2x[bj2x + i]) return !1; return !0 } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        k2x = c2x("nej.u"),
        M2x = c2x("nej.ut"),
        b2x, K2x; if (!!M2x.QB7u) return;
    M2x.QB7u = NEJ.C();
    b2x = M2x.QB7u.O2x(M2x.bqF4J);
    K2x = M2x.QB7u.cg3x;
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.uf0x = e2x.key || "id";
        this.bb2x = e2x.data || Y2x;
        this.cjY7R = !!e2x.autogc;
        this.cjW7P(e2x.id) };
    b2x.bC2x = function() { this.bH3x(); if (!!this.dN3x) { this.bKq9h() } };
    b2x.cjW7P = function(C2x) { var R2x; if (!!C2x) { R2x = this.P2x[C2x]; if (!R2x) { R2x = {};
                this.P2x[C2x] = R2x } } R2x = R2x || this.P2x;
        R2x.hash = R2x.hash || {};
        this.QN7G = R2x };
    b2x.bKq9h = function() { this.dN3x = window.clearTimeout(this.dN3x); var bv2x = {};
        k2x.dZ4d(this.QN7G, function(i2x, J2x) { if (J2x == "hash") return; if (!k2x.ep4t(i2x)) return;
            k2x.be2x(i2x, function(r2x) { if (!r2x) return;
                bv2x[r2x[this.uf0x]] = !0 }, this) }, this);
        k2x.dZ4d(this.RO7H(), function(r2x, C2x, dI3x) { if (!bv2x[C2x]) { delete dI3x[C2x] } }) };
    b2x.cjU7N = function() { if (!!this.dN3x) { this.dN3x = window.clearTimeout(this.dN3x) } this.dN3x = window.setTimeout(this.bKq9h.g2x(this), 150) };
    b2x.AB2x = function(r2x, RN7G) { r2x = this.bKp9g(r2x, RN7G) || r2x; if (!r2x) return null; var J2x = r2x[this.uf0x]; if (J2x != null) { var hy5D = this.RO7H()[J2x]; if (!!hy5D) r2x = NEJ.X(hy5D, r2x);
            this.RO7H()[J2x] = r2x } delete r2x.bKn9e; return r2x };
    b2x.bKp9g = bm2x;
    b2x.bcd1x = function(J2x, r2x) { if (!r2x) return; if (!k2x.ep4t(r2x)) { var i2x = this.gN5S(J2x),
                r2x = this.AB2x(r2x, J2x); if (!!r2x) i2x.unshift(r2x); return } k2x.mz7s(r2x, this.bcd1x.g2x(this, J2x)) };
    b2x.QY7R = function(J2x, co3x) { var i2x = this.gN5S(J2x);
        i2x.length = Math.max(i2x.length, co3x);
        this.bck1x(J2x); return this };
    b2x.jI6C = function(J2x) { return this.gN5S(J2x).length };
    b2x.bck1x = function(J2x, nl7e) { this.gN5S(J2x).loaded = nl7e != !1; return this };
    b2x.RK7D = function(J2x) { return !!this.gN5S(J2x).loaded };
    b2x.rn8f = function(J2x, i2x) { this.tn9e(J2x);
        this.bcF1x({ key: J2x, offset: 0, limit: i2x.length + 1 }, { list: i2x, total: i2x.length }) };
    b2x.gN5S = function() { var Da3x = function(J2x) { return (J2x || "") + (!J2x ? "" : "-") + "list" }; return function(J2x) { var J2x = Da3x(J2x),
                i2x = this.QN7G[J2x]; if (!i2x) { i2x = [];
                this.QN7G[J2x] = i2x } return i2x } }();
    b2x.RO7H = function() { var dI3x = this.QN7G.hash; if (!dI3x) { dI3x = {};
            this.QN7G.hash = dI3x } return dI3x };
    b2x.bcK1x = function() { var Da3x = function(e2x) { return "r-" + e2x.key }; return function(e2x) { var hR5W = NEJ.X({}, e2x),
                mP7I = Da3x(hR5W); if (!this.baT0x(mP7I, this.z2x.g2x(this))) { hR5W.rkey = mP7I;
                hR5W.onload = this.cjN7G.g2x(this, hR5W);
                this.z2x("dopullrefresh", hR5W) } return this } }();
    b2x.cjN7G = function(e2x, i2x) { this.bcd1x(e2x.key, i2x);
        this.baO0x(e2x.rkey, "onpullrefresh", e2x) };
    b2x.no7h = function() { var Da3x = function(e2x) { return "r-" + e2x.key + "-" + e2x.offset + "-" + e2x.limit }; return function(e2x) { e2x = e2x || Y2x; var hR5W = { key: "" + e2x.key || "", ext: e2x.ext || null, data: e2x.data || null, offset: parseInt(e2x.offset) || 0, limit: parseInt(e2x.limit) || 0 },
                i2x = this.gN5S(hR5W.key); if (this.cka7T(i2x, hR5W.offset, hR5W.limit)) { this.z2x("onlistload", hR5W); return this } var mP7I = Da3x(hR5W); if (!this.baT0x(mP7I, this.z2x.g2x(this))) { hR5W.rkey = mP7I;
                hR5W.onload = this.bcF1x.g2x(this, hR5W);
                this.z2x("doloadlist", hR5W) } return this } }();
    b2x.bcF1x = function() { var DC3x = function(r2x, s2x, i2x) { if (!!r2x) { return !0 } i2x.splice(s2x, 1) }; return function(e2x, m2x) { e2x = e2x || Y2x; var J2x = e2x.key,
                bj2x = e2x.offset,
                bKm9d = this.gN5S(J2x); var i2x = m2x || []; if (!k2x.ep4t(i2x)) { i2x = m2x.result || m2x.list || []; var co3x = parseInt(m2x.total); if (!isNaN(co3x) || co3x > i2x.length) { this.QY7R(J2x, co3x) } } k2x.be2x(i2x, function(r2x, s2x) { bKm9d[bj2x + s2x] = this.AB2x(r2x, J2x) }, this); if (i2x.length < e2x.limit) { this.bck1x(J2x);
                k2x.mz7s(bKm9d, DC3x) } this.baO0x(e2x.rkey, "onlistload", e2x) } }();
    b2x.tn9e = function() { var DC3x = function(r2x, s2x, i2x) { i2x.splice(s2x, 1) }; return function(J2x) { var i2x = this.gN5S(J2x);
            k2x.mz7s(i2x, DC3x);
            this.bck1x(J2x, !1); if (this.cjY7R) { this.cjU7N() } return this } }();
    b2x.bKl9c = function(r2x, RN7G) { return !r2x.bKn9e };
    b2x.eh4l = function(C2x) { return this.RO7H()[C2x] };
    b2x.ctR0x = function(C2x) { var r2x = this.eh4l(C2x); if (!!r2x) r2x.bKn9e = !0 };
    b2x.RI7B = function() { var Da3x = function(e2x) { return "r-" + e2x.key + "-" + e2x.id }; return function(e2x) { e2x = e2x || Y2x; var C2x = e2x[this.uf0x],
                hR5W = { id: C2x, ext: e2x.ext, data: e2x.data || {}, key: "" + e2x.key || "" };
            r2x = this.eh4l(C2x);
            hR5W.data[this.uf0x] = C2x; if (!!r2x && this.bKl9c(r2x, hR5W.key)) { this.z2x("onitemload", hR5W); return this } var mP7I = Da3x(hR5W); if (!this.baT0x(mP7I, this.z2x.g2x(this))) { hR5W.rkey = mP7I;
                hR5W.onload = this.cjH7A.g2x(this, hR5W);
                this.z2x("doloaditem", hR5W) } return this } }();
    b2x.cjH7A = function(e2x, r2x) { e2x = e2x || Y2x;
        this.AB2x(r2x, e2x.key);
        this.baO0x(e2x.rkey, "onitemload", e2x) };
    b2x.iD5I = function(e2x) { e2x = NEJ.X({}, e2x);
        e2x.onload = this.xd1x.g2x(this, e2x);
        this.z2x("doadditem", e2x) };
    b2x.xd1x = function(e2x, r2x) { var J2x = e2x.key;
        r2x = this.AB2x(r2x, J2x); if (!!r2x) { var eA4E = 0,
                i2x = this.gN5S(J2x); if (!e2x.push) { eA4E = -1; var bj2x = e2x.offset || 0;
                i2x.splice(bj2x, 0, r2x) } else if (i2x.loaded) { eA4E = 1;
                i2x.push(r2x) } else { i2x.length++ } } var d2x = { key: J2x, flag: eA4E, data: r2x, action: "add", ext: e2x.ext };
        this.z2x("onitemadd", d2x); return d2x };
    b2x.Jf5k = function(e2x) { e2x = NEJ.X({}, e2x);
        e2x.onload = this.bdv1x.g2x(this, e2x);
        this.z2x("dodeleteitem", e2x) };
    b2x.bdv1x = function(e2x, bKk9b) { var r2x, J2x = e2x.key; if (!!bKk9b) { r2x = this.eh4l(e2x.id) || null; var C2x = e2x.id,
                cjF7y = this.uf0x,
                i2x = this.gN5S(J2x),
                s2x = k2x.cV3x(i2x, function(hy5D) { return !!hy5D && hy5D[cjF7y] == C2x }); if (s2x >= 0) i2x.splice(s2x, 1) } var d2x = { key: J2x, data: r2x, action: "delete", ext: e2x.ext };
        this.z2x("onitemdelete", d2x); return d2x };
    b2x.RE7x = function(e2x) { e2x = NEJ.X({}, e2x);
        e2x.onload = this.cjE7x.g2x(this, e2x);
        this.z2x("doupdateitem", e2x) };
    b2x.cjE7x = function(e2x, r2x) { var J2x = e2x.key; if (!!r2x) r2x = this.AB2x(r2x, J2x); var d2x = { key: J2x, data: r2x, action: "update", ext: e2x.ext };
        this.z2x("onitemupdate", d2x); return d2x } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        k2x = c2x("nej.u"),
        M2x = c2x("nej.ut"),
        b2x; if (!!M2x.bdP1x) return;
    M2x.bdP1x = NEJ.C();
    b2x = M2x.bdP1x.O2x(M2x.QB7u);
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.blq3x({ doloadlist: this.RD7w.g2x(this), doloaditem: this.bdX1x.g2x(this), doadditem: this.bKj9a.g2x(this), dodeleteitem: this.RC7v.g2x(this), doupdateitem: this.RB7u.g2x(this), dopullrefresh: this.bKi9Z.g2x(this) }) };
    b2x.RD7w = bm2x;
    b2x.bKi9Z = bm2x;
    b2x.bdX1x = bm2x;
    b2x.bKj9a = bm2x;
    b2x.RC7v = bm2x;
    b2x.RB7u = bm2x })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"),
        b2x, K2x;
    p2x.hc5h = NEJ.C();
    b2x = p2x.hc5h.O2x(H2x.bdP1x);
    b2x.ck3x = function() { var Rf7Y = location.protocol + "//" + location.host; var cjA7t = function(bs2x, j2x) { var bv2x = { conf: {}, data: {}, urls: [] };
            k2x.be2x(bs2x, function(J2x, s2x, i2x) { var bc2x = p2x.x2x(J2x); if (!bc2x) return; var bet1x = bKh9Y(bc2x.url, j2x[J2x]);
                bv2x.urls.push(bet1x);
                bv2x.conf[bet1x] = bc2x;
                bv2x.data[bet1x] = JSON.stringify(j2x[J2x] == null ? "" : j2x[J2x]) }); return bv2x }; var bKh9Y = function(V2x, j2x) { return V2x.replace(/\{(.*?)\}/gi, function($1, $2) { return j2x[$2] || $1 }) }; var bKg9X = function(bc2x, e2x, d2x) { h2x.z2x(window, "requesterror", d2x); if (!!d2x.stopped) return; var Jh5m = bc2x.onerror || e2x.onerror; if (k2x.fi4m(Jh5m)) { this.z2x(Jh5m, d2x, e2x) } else {
                (Jh5m || bm2x).call(this, d2x, e2x) } var d2x = { result: d2x, option: e2x };
            this.z2x("onerror", d2x); if (!d2x.stopped)(bc2x.onmessage || bm2x).call(this, d2x.result.code, d2x.result) }; var bKf9W = function(Q2x, bc2x, e2x) { var m2x = Q2x; if (k2x.ge5j(bc2x.format)) { m2x = bc2x.format.call(this, Q2x, e2x) } return m2x }; var wA1x = function(Q2x, bc2x, e2x, sD9u) { if (k2x.ge5j(bc2x.beforeload)) { bc2x.beforeload.call(this, Q2x, e2x, bc2x) } if (Q2x && Q2x.code != null && Q2x.code != 200) { bKg9X.call(this, bc2x, e2x, { key: e2x.key, code: Q2x.code, message: Q2x.message || "", captchaId: Q2x.captchaId, ext: Q2x }); return } var m2x = Q2x; if (!sD9u) { m2x = bKf9W.call(this, Q2x, bc2x, e2x) } else if (k2x.ge5j(bc2x.format)) { var beI1x = [];
                k2x.be2x(sD9u.urls, function(V2x) { beI1x.push(bKf9W.call(this, Q2x[V2x], sD9u.conf[V2x], e2x)) }, this);
                beI1x.push(e2x);
                m2x = bc2x.format.apply(this, beI1x) } var sX9O = bc2x.onload || e2x.onload,
                bKd9U = bc2x.finaly || e2x.finaly || bm2x; if (k2x.fi4m(sX9O)) { bKd9U.call(this, this.z2x(sX9O, m2x), e2x) } else { bKd9U.call(this, (sX9O || bm2x).call(this, m2x), e2x) } }; var zE2x = function(bc2x, e2x, bQ3x) { bKg9X.call(this, bc2x, e2x, { key: e2x.key, code: bQ3x.code || -1, message: bQ3x.message || "" }) }; return function(bc2x, e2x) { if (k2x.fi4m(bc2x)) { bc2x = p2x.x2x(bc2x) } delete e2x.value;
            (bc2x.filter || bm2x).call(this, e2x, bc2x); var Q2x = e2x.value; if (!!Q2x) { wA1x.call(this, Q2x, bc2x, e2x); return } var V2x, j2x = e2x.data || Y2x,
                xD1x = { cookie: !0, type: bc2x.rtype || "json", method: bc2x.type || "POST", onerror: zE2x.g2x(this, bc2x, e2x), noescape: bc2x.noescape }; if (k2x.ep4t(bc2x.url)) { var sD9u = cjA7t(bc2x.url, j2x);
                V2x = Rf7Y + "/api/batch";
                xD1x.data = k2x.df3x(sD9u.data);
                xD1x.onload = wA1x.dW3x(this, bc2x, e2x, sD9u);
                xD1x.headers = { "batch-method": "POST" };
                delete sD9u.data } else { var kR6L = bc2x.url.indexOf(":") < 0 ? Rf7Y : "";
                V2x = bKh9Y(kR6L + bc2x.url, j2x);
                xD1x.data = k2x.df3x(e2x.data);
                xD1x.onload = wA1x.dW3x(this, bc2x, e2x) } if (xD1x.method == "GET") xD1x.query = xD1x.data; return v2x.bq2x(V2x, xD1x) } }();
    b2x.Ek3x = function() { var fZ5e = /^get|list|pull$/i; return function(bKc9T, e2x) { var J2x = e2x.key,
                bc2x = p2x.x2x(J2x.split("-")[0] + "-" + bKc9T); if (fZ5e.test(bKc9T) && J2x.indexOf("post-") < 0) bc2x.type = "GET";
            this.ck3x(bc2x, e2x) } }();
    b2x.ctS0x = function(J2x, i2x) { var co3x = i2x.length;
        this.bcF1x({ key: J2x, offset: 0, limit: co3x + 1 }, { list: i2x, total: co3x }) };
    b2x.RD7w = function(e2x) { this.Ek3x("list", e2x) };
    b2x.bdX1x = function(e2x) { this.Ek3x("get", e2x) };
    b2x.bKi9Z = function(e2x) { this.Ek3x("pull", e2x) };
    b2x.bKj9a = function(e2x) { this.Ek3x("add", e2x) };
    b2x.RC7v = function(e2x) { this.Ek3x("del", e2x) };
    b2x.RB7u = function(e2x) { this.Ek3x("update", e2x) };
    b2x.cjl7e = function(r2x) { this.AB2x(r2x) };
    H2x.fv4z.B2x({ element: window, event: "requesterror" }) })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"),
        p2x = c2x("nm.d"),
        bfB2x = {},
        b2x, K2x; var sZ9Q = function(m2x, e2x) { m2x.conf = e2x.conf; return m2x };
    p2x.eO4S({ "res-mv-get": { type: "GET", url: "/api/v1/mv/detail", format: function(Q2x, e2x) { return sZ9Q({ mv: Q2x }, e2x) } }, "res-song-get": { type: "GET", url: "/api/song/detail", format: function(m2x, e2x) { if (!!m2x.songs && m2x.songs.length > 0) m2x.song = m2x.songs[0];
                else m2x.song = bfB2x;
                delete m2x.songs; return sZ9Q(m2x, e2x) }, filter: function(e2x) { e2x.data.ids = "[" + e2x.data.id + "]" } }, "res-program-get": { type: "GET", url: "/api/dj/program/detail", format: sZ9Q }, "res-album-get": { type: "GET", url: "/api/album/{id}", format: sZ9Q }, "res-playlist-get": { type: "GET", url: "/api/playlist/detail", format: function(m2x, e2x) { m2x.playlist = m2x.result;
                delete m2x.result; return sZ9Q(m2x, e2x) } }, "res-mv-play": { type: "GET", url: "/api/song/mv/play", format: sZ9Q }, "res-playlist-play": { type: "GET", url: "/api/playlist/update/playcount", format: sZ9Q }, "res-program-play": { type: "GET", url: "/api/dj/program/listen", format: sZ9Q }, "res-djradio-get": { type: "GET", url: "/api/dj/program/byradio", filter: function(e2x) { var i2x = e2x.data.id.split("-");
                e2x.data.radioId = i2x[0];
                e2x.data.asc = i2x[1] == 2;
                e2x.data.limit = 1e3;
                delete e2x.data.id }, format: function(Q2x, e2x) { var cjk7d = { id: e2x.data.radioId, programs: Q2x.programs }; return sZ9Q({ djradio: cjk7d }, e2x) } }, "res-hotSongs-get": { type: "GET", url: "/api/artist/{id}", format: sZ9Q }, "res-lyric-get": { type: "GET", url: "/api/song/lyric", filter: function(e2x) { e2x.data.lv = 0;
                e2x.data.tv = 0 }, format: function(m2x, e2x) { var uL0x = { lyric: "", nolyric: true }; if (m2x.code == 200 && m2x.lrc && m2x.lrc.lyric) { uL0x.lyric = m2x.lrc.lyric;
                    uL0x.nolyric = false } else { uL0x.nolyric = true } return sZ9Q({ lyric: uL0x }, e2x) } } });
    p2x.tV0x = NEJ.C();
    b2x = p2x.tV0x.O2x(p2x.hc5h);
    b2x.cjj7c = function(t2x, cE3x) { return this.qc8U(this.Ru7n(t2x, cE3x)) };
    b2x.Rn7g = function(t2x, cE3x, e2x) { e2x = e2x || {}; var j2x = this.qc8U(this.Ru7n(t2x, cE3x)); if (j2x && (t2x != 13 && t2x != 19 || e2x.conf && e2x.conf.useCache)) { this.z2x("onresourceload", t2x, cE3x, j2x, e2x.conf); return } e2x.data = { id: cE3x };
        e2x.onload = this.cji7b.g2x(this, t2x, cE3x);
        e2x.onerror = this.cjh7a.g2x(this, t2x, cE3x);
        this.ck3x("res-" + this.yj1x(t2x) + "-get", e2x) };
    b2x.cji7b = function(t2x, cE3x, m2x) { var j2x = m2x[this.yj1x(t2x)];
        this.om7f(this.Ru7n(t2x, cE3x), j2x);
        this.z2x("onresourceload", t2x, cE3x, j2x, m2x.conf) };
    b2x.cjh7a = function(t2x, cE3x, m2x, e2x) { if (m2x.code != 404) { this.z2x("onresourceerror", t2x, cE3x, m2x.code); return } this.om7f(this.Ru7n(t2x, cE3x), bfB2x);
        this.z2x("onresourceload", t2x, cE3x, bfB2x, e2x.conf) };
    b2x.ctT0x = function(t2x, e2x) { this.ck3x("res-" + this.yj1x(t2x) + "-play", e2x) };
    b2x.Ru7n = function(t2x, cE3x) { return "res-" + this.yj1x(t2x) + "-" + cE3x };
    b2x.yj1x = function(t2x) { var bv2x = { 2: "hotSongs", 13: "playlist", 17: "program", 18: "song", 19: "album", 21: "mv", 41: "lyric", 70: "djradio" }; return bv2x[t2x] };
    p2x.tV0x.Jg5l = function(t2x, cE3x) { if (!this.eJ4N) this.eJ4N = p2x.tV0x.B2x({}); return this.eJ4N.cjj7c(t2x, cE3x) } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        p2x = c2x("nm.d"),
        bgt2x = /^[1-9][0-9]*$/,
        b2x, K2x; var LOCAL_LOG_KEY = "local-log";
    p2x.eO4S({ "bi-log": { url: "/api/feedback/weblog" }, "bi-batch-log": { url: "/api/feedback/weblog" }, "plus-mv-count": { url: "/api/song/mv/play" }, "plus-song-count": { url: "/api/song/play" }, "plus-dj-count": { type: "GET", url: "/api/dj/program/listen" }, "plus-playlist-count": { type: "GET", url: "/api/playlist/update/playcount" } });
    p2x.hI5N = NEJ.C();
    b2x = p2x.hI5N.O2x(p2x.hc5h);
    b2x.gf5k = function(W2x, bc2x) { if (!W2x || !bc2x) return; if (k2x.fi4m(bc2x)) { try { bc2x = JSON.parse(bc2x) } catch (_e) { if (console && console.warn) { console.warn("bilog error: ", a1x) } } } if (!k2x.jZ6T(bc2x)) return;
        this.ck3x("bi-log", { data: { logs: JSON.stringify([{ action: W2x, json: bc2x }]) } }); if (typeof GEnvType == "string" && GEnvType == "local") { console.log("[BI LOG] action=" + W2x + ", json=" + JSON.stringify(bc2x)) } };
    b2x.RG7z = function(mF7y) { if (!k2x.ep4t(mF7y)) return;
        this.ck3x("bi-batch-log", { data: { logs: JSON.stringify(mF7y) } }) };
    b2x.bJV9M = function(bc2x) { if (!bc2x || !bc2x.type || !bc2x.rid) return; var mD7w = bc2x.type; if (bgt2x.test(mD7w)) { mD7w = this.yj1x(mD7w) } if (!mD7w) return; if (mD7w == "playlist") mD7w = "list";
        this.gf5k("search", { type: mD7w, id: bc2x.rid || null, keyword: bc2x.keyword || null }) };
    b2x.Ra7T = function() { var ciU7N = /^\/m\/(song|album|playlist)\?id=(\d+)/; return function(bc2x) { if (!bc2x || !bc2x.type || !bc2x.rid) return; if (bc2x.play === undefined) bc2x.play = true; var mD7w = bc2x.type; if (bgt2x.test(mD7w)) { mD7w = this.yj1x(mD7w) } if (!mD7w) return; if (mD7w == "playlist") mD7w = "list"; var Q2x = { id: bc2x.rid, type: mD7w }; if (mD7w == "song" && bc2x.source) { Q2x.source = this.bJT9K(bc2x.source); if (!!bc2x.sourceid) Q2x.sourceid = bc2x.sourceid } this.gf5k(!bc2x.play ? "addto" : "play", Q2x); if (mD7w == "song" && bc2x.hash && bc2x.hash.match(ciU7N)) { this.gf5k(!bc2x.play ? "addto" : "play", { type: RegExp.$1, id: RegExp.$2 }) } } }();
    b2x.bhe2x = function(C2x, bA2x, dK3x, Bb2x) { var Q2x = { type: "song", wifi: 0, download: 0 }; var ciN7G = { 1: "ui", 2: "playend", 3: "interrupt", 4: "exception" };
        Q2x.id = C2x;
        Q2x.time = Math.round(bA2x);
        Q2x.end = k2x.fi4m(Bb2x) ? Bb2x : ciN7G[Bb2x] || ""; if (dK3x && dK3x.fid) { Q2x.source = this.bJT9K(dK3x.fid);
            Q2x.sourceId = dK3x.fdata } this.gf5k("play", Q2x) };
    b2x.bJR9I = function(t2x, cE3x) { if (!t2x || !cE3x) return; if (bgt2x.test(t2x)) t2x = this.yj1x(t2x); if (t2x != "playlist" && t2x != "dj") return; var bc2x = p2x.x2x("plus-" + t2x + "-count"); if (!bc2x) return !1;
        this.ck3x(bc2x, { data: { id: cE3x } }); var R2x = this.kG6A("play-hist-" + t2x, []); if (k2x.cV3x(R2x, cE3x) < 0) { R2x.push(cE3x); return !0 } return !1 };
    b2x.yj1x = function(t2x) { var bv2x = { 1: "user", 2: "artist", 13: "playlist", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist" }; return bv2x[t2x] };
    b2x.bJT9K = function(Je5j) { var bv2x = { 1: "user", 2: "artist", 13: "list", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist", 32: "search", 33: "search", 34: "event", 35: "msg" }; return bv2x[Je5j] };
    b2x.ciI7B = function(gR5W) { var mF7y = this.BV2x(LOCAL_LOG_KEY, []);
        mF7y.unshift(gR5W); if (mF7y.length > 200) { mF7y.length = 200 } this.vd0x(LOCAL_LOG_KEY, mF7y) };
    b2x.ciG7z = function() { return this.Qt7m(LOCAL_LOG_KEY) } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        n2x = c2x("nm.l"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"); if (!p2x.tV0x) return; var R2x = p2x.tV0x.B2x({ onresourceload: ciE7x }); var vR0x = p2x.hI5N.fX5c();

    function ciE7x(t2x, cE3x, j2x, bc2x) { var i2x = []; switch (parseInt(t2x)) {
            case 2:
                i2x = j2x; break;
            case 13:
                i2x = j2x.tracks; break;
            case 18:
                i2x.push(j2x); break;
            case 19:
                i2x = j2x.songs; break;
            case 21:
                if (j2x.mp && j2x.mp.fee && j2x.mp.pl <= 0) { l2x.bhQ2x(j2x.data.id, j2x.mp.fee); return } break } if (l2x.Jd5i(i2x, true, null, t2x == 19 ? { source: "album", sourceid: cE3x } : null) == 0) { return } l2x.fb4f({ clazz: "m-layer-w2", bubble: !1, message: bc2x.message }) }

    function ciC7v(d2x, qo8g, vz0x, fj4n) { fj4n = fj4n || {}; if (d2x.action == "ok") { if (vz0x) { location.dispatch2("/payfee?songId=" + vz0x) } else { location.dispatch2("/payfee?fee=" + qo8g || 1) } vR0x.gf5k("click", { type: "tobuyvip", name: "box", source: fj4n.source || "song", sourceid: fj4n.sourceid || vz0x || 0 }) } else if (d2x.action == "song") { location.dispatch2("/payfee?singleSong=true&songId=" + vz0x);
            vR0x.gf5k("click", { type: "tobuyone", name: "box", source: fj4n.source || "song", sourceid: fj4n.sourceid || vz0x || 0 }) } }

    function QL7E(bE2x) { l2x.fb4f({ clazz: "m-layer-w2", bubble: !1, message: bE2x, btntxt: "çŸ¥é“äº†" }) }

    function QG7z(bE2x, Q2x) { QL7E((Q2x || Y2x).toast || bE2x) } l2x.hP5U = function(bE2x, C2x, t2x, ciB7u, bf2x) { bE2x = bE2x || "ç”±äºŽç‰ˆæƒä¿æŠ¤ï¼Œæ‚¨æ‰€åœ¨çš„åœ°åŒºæš‚æ—¶æ— æ³•ä½¿ç”¨ã€‚"; if (ciB7u && bf2x && bf2x.privilege && bf2x.privilege.toast) { v2x.bq2x("/api/song/toast", { query: { id: bf2x.id }, type: "json", onload: QG7z.g2x(this, bE2x), onerror: QG7z.g2x(this, bE2x) }) } else if (C2x && t2x) { R2x.Rn7g(t2x, C2x, { conf: { message: bE2x, useCache: t2x != 18 } }) } else { QL7E(bE2x) } };
    l2x.tA9r = function(qo8g, vz0x, t2x, fj4n, ms7l) { var bN3x, pG8y = "m-popup-info",
            biq2x = "å•é¦–è´­ä¹°",
            biu2x = "é©¬ä¸ŠåŽ»å¼€é€š",
            cA3x = "å”±ç‰‡å…¬å¸è¦æ±‚ï¼Œå½“å‰æ­Œæ›²é¡»ä»˜è´¹ä½¿ç”¨ã€‚",
            bJO9F = true; try { bN3x = top.api.feeMessage || {} } catch (e) { bN3x = {} } if (qo8g == 1 || qo8g == 8 || qo8g == 16) { if (t2x == "song") { pG8y = "m-popup-song-buy";
                cA3x = bN3x["vip2"] || cA3x;
                biu2x = bN3x["vip2button"] || "åŒ…æœˆè´­ä¹°";
                biq2x = bN3x["vip2link"] || biq2x; if (ms7l && ms7l.flag !== undefined) { var bs2x = ms7l.flag.toString(2).split(""); if (parseInt(bs2x.pop(), 10) == 1) { bJO9F = false } } } else { cA3x = bN3x["vip"] || cA3x } } else if (qo8g == 4) { cA3x = bN3x["album"] || cA3x;
            biu2x = "ç«‹å³è®¢è´­" } else { cA3x = bN3x["unknow"] || cA3x } l2x.jh6b({ clazz: "m-layer-w5", html: a1x.bP3x(pG8y, { songTxt: biq2x, tip: cA3x, oktext: biu2x, cctext: "ä»¥åŽå†è¯´", showSongText: bJO9F }), onaction: ciC7v.dW3x(null, qo8g, vz0x, fj4n) }) };
    l2x.bJN9E = function(hn5s, gV5a) { l2x.gQ5V({ title: "æç¤º", message: "å”±ç‰‡å…¬å¸è¦æ±‚ï¼Œè¯¥æ­Œæ›²é¡»ä¸‹è½½åŽæ’­æ”¾", btnok: "ä¸‹è½½", btncc: "å–æ¶ˆ", okstyle: "u-btn2-w1", ccstyle: "u-btn2-w1", action: function(t2x) { if (t2x == "ok") { l2x.Sd7W({ id: hn5s, type: gV5a }) } } }) };
    l2x.bhQ2x = function(nL7E, qo8g) { var bN3x, cA3x = "å”±ç‰‡å…¬å¸è¦æ±‚ï¼Œå½“å‰æ­Œæ›²é¡»ä»˜è´¹ä½¿ç”¨ã€‚"; try { bN3x = top.api.feeMessage || {} } catch (e) { bN3x = {} } if (qo8g == 1 || qo8g == 8) { cA3x = bN3x["vip"] || cA3x } else if (qo8g == 4) { cA3x = bN3x["album"] || cA3x } else { cA3x = bN3x["unknow"] || cA3x } return l2x.jh6b({ clazz: "m-layer-w5", html: a1x.bP3x("m-popup-info", { tip: cA3x, oktext: "é©¬ä¸ŠåŽ»å¼€é€š", cctext: "ä»¥åŽå†è¯´" }), onaction: function(d2x) { if (d2x.action == "ok") { location.dispatch2("/payfee?mvId=" + nL7E);
                    vR0x.gf5k("click", { type: "tobuyone", name: "box", source: "mv", sourceid: nL7E || 0 }) } } }) };
    l2x.Jd5i = function() {
        function compareFee(cix7q, civ7o) { var bv2x = { 1: 99, 8: 99, 4: 88, 16: 99 }; return (bv2x[cix7q] || 0) - (bv2x[civ7o] || 0) } return function(i2x, cA3x, sS9J, fj4n) { sS9J = sS9J || {}; var wi1x = [],
                IZ4d = {},
                bJM9D = 0,
                bJL9C = 0,
                IY4c = null; if (!i2x || !i2x.length) return wi1x;
            k2x.be2x(i2x, function(bf2x) { var eX4b = l2x.ol7e(bf2x); if (eX4b == 0) { wi1x.push(bf2x) } else if (eX4b == 10) { if (bf2x.privilege) { bf2x.fee = bf2x.privilege.fee } if (compareFee(bf2x.fee, IZ4d.fee) > 0) { IZ4d = bf2x } } else if (eX4b == 11) {++bJM9D; if (!sS9J.play) wi1x.push(bf2x) } else if (eX4b == 1e3) {++bJL9C; if (!sS9J.download) wi1x.push(bf2x) } else if (eX4b == 100) { IY4c = bf2x } }); if (wi1x.length == 0 && cA3x) { if (bJM9D == i2x.length) { var sl9c = i2x[0].privilege || {}; if (sl9c.payed) { l2x.hP5U("å”±ç‰‡å…¬å¸è¦æ±‚ï¼Œè¯¥æ­Œæ›²é¡»ä¸‹è½½åŽæ’­æ”¾") } else { l2x.tA9r(sl9c.fee, null, null, fj4n) } } else if (bJL9C == i2x.length) { l2x.hP5U("å› ç‰ˆæƒæ–¹è¦æ±‚ï¼Œè¯¥æ­Œæ›²ä¸æ”¯æŒä¸‹è½½") } else if (IZ4d.id) { l2x.tA9r(IZ4d.fee, IZ4d.id, null, fj4n, IZ4d.privilege) } else { if (IY4c && i2x.length == 1 && IY4c.privilege && IY4c.privilege.st < 0 && IY4c.privilege.toast) { l2x.hP5U(null, null, null, true, IY4c) } else { l2x.hP5U() } } } return wi1x } }();
    l2x.ol7e = function(bf2x) { if (!bf2x) return 0; var eX4b = bf2x.privilege; if (bf2x.program) return 0; if (window.GAbroad) return 100; if (eX4b) { if (eX4b.st != null && eX4b.st < 0) { return 100 } if (eX4b.fee > 0 && eX4b.fee != 8 && eX4b.payed == 0 && eX4b.pl <= 0) return 10; if (eX4b.fee == 16) return 11; if ((eX4b.fee == 0 || eX4b.payed) && eX4b.pl > 0 && eX4b.dl == 0) return 1e3; if (eX4b.pl == 0 && eX4b.dl == 0) return 100; return 0 } else { var dY4c = bf2x.status != null ? bf2x.status : bf2x.st != null ? bf2x.st : 0; if (bf2x.status >= 0) return 0; if (bf2x.fee > 0) return 10; return 100 } } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        M2x = c2x("nej.ui"),
        b2x; if (!!M2x.RV7O) return; var hV5a = a1x.sg9X(".#<uispace>{position:absolute;background:#fff;}");
    M2x.RV7O = NEJ.C();
    b2x = M2x.RV7O.O2x(M2x.Ny6s);
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.bU3x([
            [document, "click", this.sb9S.g2x(this)]
        ]);
        this.cis7l = !!e2x.nostop;
        this.bJK9B = { top: e2x.top, left: e2x.left } };
    b2x.bC2x = function() { delete this.xE1x;
        delete this.bjT3x;
        delete this.pA8s;
        delete this.bJI9z;
        delete this.RY7R;
        delete this.bJK9B;
        this.bH3x() };
    b2x.bZ3x = function() { this.li6c = hV5a };
    b2x.bR3x = function() { this.cb3x();
        this.Ae2x = this.o2x;
        h2x.q2x(this.o2x, "click", this.cin7g.g2x(this)) };
    b2x.sb9S = function(d2x) { if (d2x.button != 2) this.bo2x() };
    b2x.cin7g = function(d2x) { if (this.cis7l) return;
        h2x.rQ9H(d2x); var E2x = h2x.U2x(d2x); if (E2x.tagName == "A") h2x.ce3x(d2x) };
    b2x.cih7a = function() { var cO3x = /\s+/i; return function(mC7v) { mC7v = (mC7v || "").trim().toLowerCase().split(cO3x);
            mC7v[0] = mC7v[0] || "bottom";
            mC7v[1] = mC7v[1] || "left";
            this.pA8s = mC7v } }();
    b2x.cif7Y = function(mC7v) { var m2x = {},
            mi7b = this.bjT3x,
            ctY0x = a1x.oc7V(),
            dm3x = this.o2x.offsetWidth,
            cq3x = this.o2x.offsetHeight; switch (mC7v[0]) {
            case "top":
                m2x.top = mi7b.top - cq3x;
                m2x.left = mC7v[1] == "right" ? mi7b.left + mi7b.width - dm3x : mi7b.left; break;
            case "left":
                m2x.left = mi7b.left - dm3x;
                m2x.top = mC7v[1] == "bottom" ? mi7b.top + mi7b.height - cq3x : mi7b.top; break;
            case "right":
                m2x.left = mi7b.left + mi7b.width;
                m2x.top = mC7v[1] == "bottom" ? mi7b.top + mi7b.height - cq3x : mi7b.top; break;
            default:
                m2x.top = mi7b.top + mi7b.height;
                m2x.left = mC7v[1] == "right" ? mi7b.left + mi7b.width - dm3x : mi7b.left; break } return m2x };
    b2x.HX4b = function() { if (!this.bJI9z) { this.fU5Z(this.bJK9B); return } if (!!this.RY7R) { this.fU5Z(this.xE1x); return } if (!!this.bjT3x) this.fU5Z(this.cif7Y(this.pA8s)) };
    b2x.chG6A = function(E2x, dh3x, d2x) { dh3x = dh3x || Y2x; var bJu9l = a1x.oc7V(),
            cN3x = h2x.kI6C(d2x) + (dh3x.left || 0),
            gM5R = h2x.nt7m(d2x) + (dh3x.top || 0),
            dm3x = E2x.offsetWidth + (dh3x.right || 0),
            cq3x = E2x.offsetHeight + (dh3x.bottom || 0),
            IS4W = bJu9l.scrollWidth,
            bkA3x = bJu9l.scrollHeight,
            bkE3x = cN3x + dm3x,
            bkK3x = gM5R + cq3x; switch (this.pA8s[0]) {
            case "top":
                gM5R = bkK3x > bkA3x ? gM5R - cq3x : gM5R; if (this.pA8s[1] == "right") { cN3x = cN3x - dm3x < 0 ? 0 : cN3x - dm3x } else { cN3x = bkE3x > IS4W ? IS4W - dm3x : cN3x } break;
            case "left":
                cN3x = bkE3x > IS4W ? IS4W - dm3x : cN3x; if (this.pA8s[1] == "top") { gM5R = bkK3x > bkA3x ? gM5R - cq3x : gM5R } else { gM5R = gM5R - cq3x < 0 ? gM5R : gM5R - cq3x } break;
            case "right":
                cN3x = cN3x - dm3x < 0 ? 0 : cN3x - dm3x; if (this.pA8s[1] == "top") { gM5R = bkK3x > bkA3x ? gM5R - cq3x : gM5R } else { gM5R = gM5R - cq3x < 0 ? gM5R : gM5R - cq3x } break;
            default:
                gM5R = gM5R - cq3x < 0 ? gM5R : gM5R - cq3x; if (this.pA8s[1] == "left") { cN3x = bkE3x > IS4W ? IS4W - dm3x : cN3x } else { cN3x = cN3x - dm3x < 0 ? 0 : cN3x - dm3x } break } return { top: gM5R, left: cN3x } };
    b2x.bkL3x = function() { var chA6u = function(E2x, dh3x) { E2x = a1x.x2x(E2x); if (!E2x) return;
            dh3x = dh3x || Y2x; var bj2x = a1x.hJ5O(E2x); return { top: bj2x.y - (dh3x.top || 0), left: bj2x.x - (dh3x.left || 0), width: E2x.offsetWidth + (dh3x.right || 0), height: E2x.offsetHeight + (dh3x.bottom || 0) } }; return function(e2x) { e2x = e2x || Y2x;
            this.RY7R = e2x.event;
            this.cih7a(e2x.align); if (!!this.RY7R) this.xE1x = this.chG6A(e2x.target, e2x.delta, this.RY7R);
            this.bjT3x = chA6u(e2x.target, e2x.delta);
            this.bJI9z = !!e2x.fitable;
            this.N2x(); return this } }() })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        M2x = c2x("nej.ui"),
        b2x, K2x; if (!!M2x.zr2x) return;
    M2x.zr2x = NEJ.C();
    b2x = M2x.zr2x.O2x(M2x.Tt8l);
    K2x = M2x.zr2x.cg3x;
    M2x.zr2x.ctZ0x = function() { var chp6j = function(d2x, C2x, fe4i, jm6g, Ql7e) { var cp3x, J2x = C2x + "-i",
                R2x = fe4i.vD0x,
                bJo9f = !!jm6g.noclear,
                bJn9e = !!jm6g.toggled; if (k2x.ge5j(jm6g.onbeforeclick)) { var Sg7Z = jm6g.noclear,
                    chi6c = jm6g.toggled; try { jm6g.onbeforeclick(jm6g) } catch (e) {} bJo9f = !!jm6g.noclear;
                bJn9e = !!jm6g.toggled;
                jm6g.toggled = chi6c;
                jm6g.noclear = Sg7Z } var EF3x = R2x[J2x]; if (bJn9e && !!EF3x) { EF3x.bo2x(); return } h2x.bh2x(d2x); if (!bJo9f) { h2x.z2x(document, "click");
                cp3x = fe4i.B2x(jm6g) } else { cp3x = fe4i.csv9m(jm6g, !0) } R2x[J2x] = cp3x;
            cp3x.uC0x("onbeforerecycle", function() { delete R2x[J2x] });
            cp3x.bkL3x(Ql7e) }; return function(f2x, e2x) { f2x = a1x.x2x(f2x); if (!f2x) return this; if (!this.vD0x) this.vD0x = {}; var C2x = a1x.kL6F(f2x); if (!!this.vD0x[C2x]) return this;
            e2x = NEJ.X({}, e2x); var Ql7e = NEJ.EX({ align: "", delta: null, fitable: !1 }, e2x);
            Ql7e.target = C2x;
            e2x.destroyable = !0; if (!e2x.fixed) { Ql7e.fitable = !0;
                e2x.parent = document.body } this.vD0x[C2x] = [C2x, e2x.event || "click", chp6j.dW3x(null, C2x, this, e2x, Ql7e)];
            h2x.q2x.apply(h2x, this.vD0x[C2x]); return this } }();
    M2x.zr2x.cua0x = function(f2x) { if (!this.vD0x) return this; var C2x = a1x.kL6F(f2x),
            d2x = this.vD0x[C2x]; if (!d2x) return this;
        delete this.vD0x[C2x];
        h2x.mg7Z.apply(h2x, d2x); var cp3x = this.vD0x[C2x + "-i"]; if (!!cp3x) cp3x.bo2x(); return this };
    b2x.bof4j = function() { return M2x.RV7O.B2x(this.bS3x) };
    b2x.NJ6D = function() { K2x.NJ6D.apply(this, arguments);
        this.bS3x.top = null;
        this.bS3x.left = null;
        this.bS3x.nostop = !1 };
    b2x.bkL3x = function(e2x) { if (!!this.nZ7S) this.nZ7S.bkL3x(e2x); return this } })();
(function() { var c2x = NEJ.P,
        bd2x = c2x("nej.ui"),
        n2x = c2x("nm.l"),
        b2x, K2x;
    n2x.blY3x = NEJ.C();
    b2x = n2x.blY3x.O2x(bd2x.zr2x);
    b2x.bk2x = function(e2x) { e2x.nohack = true;
        this.bl2x(e2x) } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        n2x = c2x("nm.l"),
        b2x, K2x;
    n2x.Z2x = NEJ.C();
    b2x = n2x.Z2x.O2x(n2x.blY3x);
    K2x = n2x.Z2x.cg3x;
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.et4x = e2x.type || 1 };
    b2x.bR3x = function() { this.cb3x();
        this.o2x = a1x.ne7X(this.chf6Z()); var i2x = a1x.cQ3x(this.o2x);
        this.pn8f = i2x[0];
        this.ci3x = i2x[1] };
    b2x.chf6Z = function() { return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>' };
    b2x.HX4b = function() { var A2x = {},
            cd3x = this.o2x.style,
            iL5Q = a1x.oc7V(),
            mU7N = { left: iL5Q.scrollLeft, top: iL5Q.scrollTop },
            dh3x = { left: iL5Q.clientWidth - this.o2x.offsetWidth, top: iL5Q.clientHeight - this.o2x.offsetHeight };
        A2x.top = Math.max(0, mU7N.top + dh3x.top / 2);
        A2x.left = Math.max(0, mU7N.left + dh3x.left / 2);
        this.nZ7S.fU5Z(A2x) };
    b2x.N2x = function(e2x) { K2x.N2x.call(this);
        this.HX4b();
        this.et4x == 1 ? a1x.ev4z(this.pn8f, "u-icn-32", "u-icn-31") : a1x.ev4z(this.pn8f, "u-icn-31", "u-icn-32");
        this.ci3x.innerHTML = e2x.tip || "" };
    n2x.Z2x.N2x = function() { var eR4V; return function(e2x) { clearTimeout(eR4V); if (e2x.parent === undefined) e2x.parent = document.body; if (e2x.autoclose === undefined) e2x.autoclose = true;
            e2x.clazz = "m-sysmsg";!!this.eJ4N && this.eJ4N.S2x();
            this.eJ4N = this.B2x(e2x);
            this.eJ4N.N2x(e2x); if (e2x.autoclose) eR4V = setTimeout(this.bo2x.g2x(this), 2e3) } }();
    n2x.Z2x.bo2x = function() {!!this.eJ4N && this.eJ4N.bo2x() } })();
(function() { var c2x = NEJ.P,
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"); if (window["GRef"] && window["GRef"] == "mail") { v2x.bq2x = v2x.bq2x.ef4j(function(d2x) { e2x = d2x.args[1];
            e2x.query = e2x.query || {}; if (k2x.fi4m(e2x.query)) e2x.query = k2x.ho5t(e2x.query);
            e2x.query.ref = "mail" }) } })();
(function() { var c2x = NEJ.P,
        bm2x = NEJ.F,
        eT4X = NEJ.R,
        H2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        p2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        J2x = "playlist-tracks_",
        b2x;
    p2x.eO4S({ "playlist_my-list": { url: "/api/user/playlist", type: "GET", format: function(Q2x, e2x) { this.chc6W(Q2x.playlist); return { total: 0, list: eT4X } }, onerror: function() { this.z2x("onlisterror") } }, "playlist_new-add": { url: "/api/playlist/create", format: function(Q2x, e2x) { var iG5L = Q2x.playlist;
                iG5L.creator = GUser;
                iG5L.isHost = !0;
                iG5L.typeFlag = "playlist"; return iG5L }, finaly: function(d2x, e2x) { h2x.z2x(p2x.hj5o, "listchange", d2x) }, onmessage: function() { var lF7y = { 507: "æ­Œå•æ•°é‡è¶…è¿‡ä¸Šé™ï¼", 405: "ä½ æ“ä½œå¤ªå¿«äº†ï¼Œè¯·ä¼‘æ¯ä¸€ä¼šå†è¯•ï¼", 406: "ä½ æ“ä½œå¤ªå¿«äº†ï¼Œè¯·ä¼‘æ¯ä¸€ä¼šå†è¯•ï¼" }; return function(cc3x) { n2x.Z2x.N2x({ tip: lF7y[cc3x] || "åˆ›å»ºå¤±è´¥", type: 2 }) } }() }, "playlist_new-del": { url: "/api/playlist/delete", type: "GET", filter: function(e2x) { e2x.id = e2x.data.pid }, finaly: function(d2x, e2x) { h2x.z2x(p2x.hj5o, "listchange", d2x) }, onmessage: function() { var lF7y = { 404: "æ­Œå•ä¸å­˜åœ¨ï¼", 405: "ä½ æ“ä½œå¤ªå¿«äº†ï¼Œè¯·ä¼‘æ¯ä¸€ä¼šå†è¯•ï¼", 406: "ä½ æ“ä½œå¤ªå¿«äº†ï¼Œè¯·ä¼‘æ¯ä¸€ä¼šå†è¯•ï¼" }; return function(cc3x) { n2x.Z2x.N2x({ tip: lF7y[cc3x] || "åˆ é™¤å¤±è´¥", type: 2 }) } }() }, "playlist_fav-add": { type: "GET", url: "/api/playlist/subscribe", filter: function(e2x) { var fj4n = e2x.ext || {};
                e2x.ext = NEJ.X(fj4n, e2x.data);
                e2x.data = { id: e2x.ext.id } }, format: function(Q2x, e2x) { n2x.Z2x.N2x({ tip: "æ”¶è—æˆåŠŸ" + (Q2x.point > 0 ? ' èŽ·å¾—<em class="s-fc6">' + Q2x.point + "ç§¯åˆ†</em>" : "") }); var r2x = e2x.ext;
                r2x.subscribedCount++; return r2x }, finaly: function(d2x, e2x) { h2x.z2x(p2x.cgZ6T, "listchange", d2x);
                h2x.z2x(p2x.cgZ6T, "itemchange", { attr: "subscribedCount", data: d2x.data }) }, onmessage: function() { var lF7y = { 404: "æ­Œå•ä¸å­˜åœ¨ï¼", 501: "æ­Œå•å·²ç»æ”¶è—ï¼", 506: "æ­Œå•æ”¶è—æ•°é‡è¶…è¿‡ä¸Šé™ï¼" }; return function(cc3x) { n2x.Z2x.N2x({ type: 2, tip: lF7y[cc3x] || "æ”¶è—å¤±è´¥ï¼Œè¯·ç¨åŽå†è¯•ï¼" }) } }() }, "playlist_fav-del": { url: "/api/playlist/unsubscribe", type: "GET", filter: function(e2x) { e2x.id = e2x.data.id = e2x.data.pid }, finaly: function(d2x, e2x) { h2x.z2x(p2x.hj5o, "listchange", d2x) }, onmessage: function() { var lF7y = { 404: "æ­Œå•ä¸å­˜åœ¨ï¼", 405: "ä½ æ“ä½œå¤ªå¿«äº†ï¼Œè¯·ä¼‘æ¯ä¸€ä¼šå†è¯•ï¼", 406: "ä½ æ“ä½œå¤ªå¿«äº†ï¼Œè¯·ä¼‘æ¯ä¸€ä¼šå†è¯•ï¼" }; return function(cc3x) { n2x.Z2x.N2x({ tip: lF7y[cc3x], type: 2 }) } }() }, "playlist_new-update": { url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"], filter: function(e2x) { var j2x = e2x.data,
                    Sk7d = {};
                Sk7d["playlist-update-name"] = { id: j2x.id, name: j2x.name };
                Sk7d["playlist-update-tag"] = { id: j2x.id, tags: j2x.tags.join(";") };
                Sk7d["playlist-update-desc"] = { id: j2x.id, desc: j2x.description };
                e2x.data = Sk7d;
                e2x.ext = j2x }, format: function(T2x, pv8n, Qa7T, e2x) { if (T2x.code == 200 && pv8n.code == 200 && Qa7T.code == 200) { e2x.ext.allSuccess = true;
                    n2x.Z2x.N2x({ tip: "ä¿å­˜æˆåŠŸ" }) } else if (T2x.code == 407 || pv8n.code == 407 || Qa7T.code == 407) { e2x.ext.allSuccess = false;
                    n2x.Z2x.N2x({ type: 2, tip: "è¾“å…¥å†…å®¹åŒ…å«å…³é”®å­—" }) } else { e2x.ext.allSuccess = false;
                    n2x.Z2x.N2x({ type: 2, tip: "ä¿å­˜å¤±è´¥" }) } return this.eh4l(e2x.ext.id) }, finaly: function(d2x, e2x) { h2x.z2x(p2x.hj5o, "listchange", d2x) }, onmessage: function(cc3x) { n2x.Z2x.N2x({ type: 2, tip: "ä¿å­˜å¤±è´¥" }) } }, "playlist-update-name": { url: "/api/playlist/update/name", format: function(Q2x, e2x) { var r2x = this.eh4l(e2x.ext.id); if (Q2x.code == 200) r2x.name = e2x.ext.name; return Q2x } }, "playlist-update-tag": { url: "/api/playlist/tags/update", format: function(Q2x, e2x) { var r2x = this.eh4l(e2x.ext.id); if (Q2x.code == 200) r2x.tags = e2x.ext.tags; return Q2x } }, "playlist-update-desc": { url: "/api/playlist/desc/update", format: function(Q2x, e2x) { var r2x = this.eh4l(e2x.ext.id); if (Q2x.code == 200) r2x.description = e2x.ext.description; return Q2x } }, "playlist-update-cover": { url: "/api/playlist/cover/update", filter: function(e2x) { e2x.url = e2x.data.url;
                delete e2x.data.url }, format: function(Q2x, e2x) { n2x.Z2x.N2x({ tip: "ä¿å­˜æˆåŠŸ" }); var r2x = this.eh4l(e2x.data.id);
                r2x.coverImgUrl = e2x.url;
                e2x.ext = r2x; return r2x }, onmessage: function(cc3x) { n2x.Z2x.N2x({ type: 2, tip: "ä¿å­˜å¤±è´¥" }) }, finaly: function(d2x, e2x) { h2x.z2x(p2x.hj5o, "itemchange", { attr: "coverImgUrl", data: e2x.ext }) } }, "playlist-upcount": { url: "/api/playlist/update/playcount", type: "GET", format: function(Q2x, e2x) { var iG5L = this.eh4l(e2x.data.id); if (!iG5L) return;
                iG5L.playCount++;
                h2x.z2x(p2x.hj5o, "itemchange", { attr: "playcount", data: iG5L }) } } });
    p2x.hj5o = NEJ.C();
    b2x = p2x.hj5o.O2x(p2x.hc5h);
    b2x.cl3x = function() { this.cs3x() };
    b2x.bJi9Z = function() { var cU3x = GUser.userId;
        this.no7h({ limit: 1001, key: "playlist_my-" + cU3x, data: { offset: 0, limit: 1001, uid: cU3x } }) };
    b2x.chc6W = function(i2x) { var cU3x = GUser.userId,
            iU5Z = [],
            bJh9Y = [];
        k2x.be2x(i2x, function(r2x) { r2x.typeFlag = "playlist"; if (r2x.creator && r2x.creator.userId == cU3x) { if (r2x.specialType == 5) r2x.name = "æˆ‘å–œæ¬¢çš„éŸ³ä¹";
                r2x.isHost = !0;
                iU5Z.push(r2x) } else { bJh9Y.push(r2x) } });
        this.rn8f("playlist_new-" + cU3x, iU5Z);
        this.rn8f("playlist_fav-" + cU3x, bJh9Y) };
    b2x.cgM6G = function(j2x) { this.ck3x("playlist-update-cover", { data: j2x }) };
    b2x.cud0x = function() { var PS7L = this.cgz6t.x2x("host-plist"); if (PS7L.length == 0) { return } if (PS7L.length == 1 && PS7L[0].trackCount <= 0) { return } for (var i = 0, len = PS7L.length; i < len; i++) { var r2x = PS7L[i]; if (r2x.trackCount > 0) return r2x.id } return this.cgz6t.x2x("host-plist")[0].id };
    b2x.cgy6s = function(C2x) { if (GUser && GUser.userId > 0) { this.ck3x("playlist-upcount", { data: { id: C2x } }) } };
    b2x.DQ3x = function() { if (GUser && GUser.userId > 0) { return !0 } else { top.login(); return !1 } };
    b2x.cue0x = function() { return GUser.userId };
    b2x.bnN4R = function(r2x) { if (r2x.userId == GUser.userId && r2x.specialType == 5) r2x.name = "æˆ‘å–œæ¬¢çš„éŸ³ä¹";
        h2x.z2x(this.constructor, "itemchange", { data: this.AB2x(r2x) }); return r2x };
    H2x.fv4z.B2x({ element: p2x.hj5o, event: ["listchange", "playcountchange", "itemchange"] }) })();
(function() { var c2x = NEJ.P,
        eT4X = NEJ.R,
        bm2x = NEJ.F,
        Y2x = NEJ.O,
        H2x = c2x("nej.ut"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        b2x, K2x;
    p2x.eO4S({ "program-get": { url: "/api/dj/program/detail", format: function(Q2x) { return Q2x.program } }, "program_djradio-list": { type: "GET", url: "/api/dj/program/byradio", filter: function(e2x) { e2x.data.limit = 1e3;
                delete e2x.data.id }, format: function(Q2x, e2x) { var bIZ9Q = [],
                    zQ2x = Q2x.programs; if (zQ2x) { for (var i = 0, l = zQ2x.length; i < l; i++) { if (zQ2x[i].programFeeType < 10 || zQ2x[i].buyed) { bIZ9Q.push(zQ2x[i]) } } } return bIZ9Q } }, "program_fav-list": { url: "/api/djprogram/subscribed/paged", format: function(Q2x, e2x) { return Q2x.programs }, onerror: "onlisterror" }, "program_fav-add": { url: "/api/djprogram/subscribe", filter: function(e2x) { e2x.ext = e2x.data;
                e2x.data = { id: e2x.ext.id };
                e2x.id = e2x.data.id }, format: function(Q2x, e2x) { n2x.Z2x.N2x({ tip: "æ”¶è—æˆåŠŸ" }); var r2x = e2x.ext;
                r2x.subscribedCount++;
                r2x.subscribed = !0; return r2x }, finaly: function(d2x, e2x) { h2x.z2x(p2x.pD8v, "listchange", d2x) }, onmessage: function() { var lF7y = { 404: "èŠ‚ç›®ä¸å­˜åœ¨ï¼", 501: "èŠ‚ç›®å·²æ”¶è—ï¼" }; return function(cc3x) { n2x.Z2x.N2x({ type: 2, tip: lF7y[cc3x] || "æ”¶è—å¤±è´¥ï¼" }) } }() }, "program_fav-del": { url: "/api/djprogram/unsubscribe", finaly: function(d2x, e2x) { h2x.z2x(p2x.pD8v, "listchange", d2x) }, onmessage: function() { var lF7y = { 404: "èŠ‚ç›®ä¸å­˜åœ¨ï¼", 502: "æ²¡æœ‰æ”¶è—æ­¤èŠ‚ç›®ï¼" }; return function(cc3x) { l2x.bnZ4d({ txt: lF7y[cc3x] || "å–æ¶ˆæ”¶è—å¤±è´¥ï¼" }) } }() }, "program-update-count": { type: "GET", url: "/api/dj/program/listen", filter: function(e2x) { var r2x = this.eh4l(e2x.data.id) || Y2x;
                e2x.ext = (r2x.listenerCount || 0) + 1 }, format: function(Q2x, e2x) { var r2x = this.eh4l(e2x.data.id); if (!!r2x) { r2x.listenerCount = Math.max(e2x.ext, r2x.listenerCount || 0) } }, finaly: function(d2x, e2x) { h2x.z2x(p2x.pD8v, "itemchange", { attr: "playCount", data: this.eh4l(e2x.data.id) }) } }, "program-like": { url: "/api/resource/like", filter: function(e2x) { e2x.data = { threadId: "A_DJ_1_" + e2x.id } }, format: function(Q2x, e2x) { var r2x = e2x.ext.data || this.eh4l(e2x.id);
                r2x.liked = true;
                r2x.likedCount++;
                e2x.ext.data = r2x; try { top.player.setLike(r2x) } catch (e) {} return r2x }, finaly: function(d2x, e2x) { h2x.z2x(p2x.pD8v, "itemchange", { attr: "likedCount", data: e2x.ext.data }) } }, "program-unlike": { url: "/api/resource/unlike", filter: function(e2x) { e2x.data = { threadId: "A_DJ_1_" + e2x.id } }, format: function(Q2x, e2x) { var r2x = e2x.ext.data || this.eh4l(e2x.id);
                r2x.liked = false;
                r2x.likedCount--;
                e2x.ext.data = r2x; try { top.player.setLike(r2x) } catch (e) {} return r2x }, finaly: function(d2x, e2x) { h2x.z2x(p2x.pD8v, "itemchange", { attr: "likedCount", data: e2x.ext.data }) } } });
    p2x.pD8v = NEJ.C();
    b2x = p2x.pD8v.O2x(p2x.hc5h);
    b2x.cug0x = function() { var cU3x = GUser.userId;
        this.no7h({ limit: 1001, key: "program_fav-" + cU3x, data: { offset: 0, limit: 1e3, uid: cU3x } }) };
    b2x.cui0x = function(cR3x) { var oG8y = cR3x[this.uf0x];
        l2x.cgl6f(4, function(R2x) { R2x.rn8f("track_program-" + oG8y, cR3x.songs) });
        delete cR3x.songs; var bK3x = cR3x.mainSong;
        l2x.cgl6f(4, function(R2x) { R2x.rn8f("track_program_main-" + oG8y, !bK3x ? [] : [bK3x]) });
        cR3x.mainSong = (bK3x || Y2x).id };
    b2x.cuj0x = function(C2x) { var cR3x = this.eh4l(C2x),
            cU3x = localCache.RX7Q("host.profile.userId"); return !!cR3x && cR3x.dj.userId == cU3x };
    b2x.cuk0x = function(C2x) { return !1 };
    b2x.bnN4R = function(r2x) { h2x.z2x(this.constructor, "itemchange", { attr: "detail", data: this.AB2x(r2x) }); return r2x };
    b2x.cgy6s = function(C2x) { this.ck3x("program-update-count", { data: { id: C2x } }) };
    l2x.bIT9K = function(e2x) { var R2x = p2x.pD8v.B2x({ onitemadd: function() {
                (e2x.onsuccess || bm2x)() }, onerror: function() {
                (e2x.onerror || bm2x)() } }); if (e2x.data.liked) { R2x.PN6H(e2x.data) } else { R2x.vc0x(e2x.data) } };
    b2x.vc0x = function(cR3x) { if (!l2x.hb5g()) return; var cm3x = { ext: {} }; if (k2x.jZ6T(cR3x)) { cm3x.id = cR3x.id;
            cm3x.ext.data = cR3x } else { cm3x.id = cR3x } this.ck3x("program-like", cm3x) };
    b2x.PN6H = function(cR3x) { if (!l2x.hb5g()) return; var cm3x = { ext: {} }; if (k2x.jZ6T(cR3x)) { cm3x.id = cR3x.id;
            cm3x.ext.data = cR3x } else { cm3x.id = cR3x } this.ck3x("program-unlike", cm3x) };
    H2x.fv4z.B2x({ element: p2x.pD8v, event: ["listchange", "itemchange"] }) })();
(function() { var c2x = NEJ.P,
        bm2x = NEJ.F,
        eT4X = NEJ.R,
        H2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        p2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        l2x = c2x("nm.x"),
        J2x = "playlist-tracks_",
        l2x = c2x("nm.x"),
        b2x;
    p2x.eO4S({ "track-get": { url: "/api/v3/song/detail", filter: function(e2x) { e2x.data.c = JSON.stringify([{ id: e2x.data.id }]) }, format: function(Q2x, e2x) { var bf2x = l2x.Eo3x(Q2x.songs[0]);
                bf2x.privilege = Q2x.privileges[0]; return bf2x } }, "track_playlist-list": { url: "/api/v3/playlist/detail", filter: function(e2x) { e2x.data.n = 1e3 }, format: function(Q2x, e2x) { var gF5K = [];
                this.rF9w.bnN4R(Q2x.playlist);
                k2x.be2x(Q2x.playlist.tracks, function(bK3x, s2x) { var bIS9J = l2x.Eo3x(bK3x);
                    bIS9J.privilege = Q2x.privileges[s2x];
                    gF5K.push(bIS9J) }, this); return gF5K } }, "track_album-list": { url: "/api/v1/album/{id}", format: function(Q2x, e2x) { var gF5K = [];
                k2x.be2x(Q2x.songs, function(bf2x) { gF5K.push(l2x.Eo3x(bf2x)) }); return gF5K } }, "track_playlist-add": { url: "/api/playlist/manipulate/tracks", filter: function(e2x) { var bv2x = {},
                    j2x = e2x.data,
                    cgd6X = this.gN5S(e2x.key) || [];
                EB3x = [];
                k2x.be2x(cgd6X, function(bK3x) { var C2x = k2x.jZ6T(bK3x) ? bK3x.id : bK3x;
                    bv2x[C2x] = true });
                e2x.ext = [];
                k2x.be2x(j2x.tracks, function(bK3x) { var C2x = k2x.jZ6T(bK3x) ? bK3x.id : bK3x; if (!bv2x[C2x]) { EB3x.push(C2x);
                        bv2x[C2x] = true;
                        e2x.ext.push(bK3x) } });
                j2x.trackIds = JSON.stringify(EB3x);
                j2x.op = "add"; if (!EB3x.length) { e2x.value = { code: 502 } } }, format: function(Q2x, e2x) { n2x.Z2x.N2x({ tip: "å·²æ·»åŠ è‡³æ­Œå•" }); var iG5L = this.rF9w.eh4l(e2x.data.pid); if (!!Q2x.coverImgUrl) iG5L.coverImgUrl = Q2x.coverImgUrl;
                k2x.mz7s(e2x.ext, function(bK3x) { this.xd1x(e2x, k2x.jZ6T(bK3x) ? bK3x : null); if (!!iG5L) iG5L.trackCount++ }, this);
                h2x.z2x(p2x.hj5o, "itemchange", { data: iG5L || {}, cmd: "add" });
                this.z2x("onaddsuccess"); return null }, finaly: function(d2x, e2x) { h2x.z2x(p2x.vs0x, "listchange", { key: e2x.key, action: "refresh" }); var oG8y = e2x.data.pid,
                    co3x = this.jI6C(e2x.key) }, onmessage: function() { var lF7y = { 502: "æ­Œæ›²å·²å­˜åœ¨ï¼", 505: "æ­Œå•å·²æ»¡ï¼" }; return function(cc3x) { setTimeout(function() { n2x.Z2x.N2x({ tip: lF7y[cc3x] || "æ·»åŠ å¤±è´¥ï¼Œè¯·ç¨åŽå†è¯•ï¼", type: 2 }) }, 0) } }() }, "track_playlist-del": { url: "/api/playlist/manipulate/tracks", filter: function(e2x) { var j2x = e2x.data;
                e2x.ext = j2x.trackIds;
                j2x.trackIds = JSON.stringify(j2x.trackIds);
                j2x.op = "del" }, format: function(Q2x, e2x) { var iG5L = this.rF9w.eh4l(e2x.data.pid);
                k2x.be2x(e2x.ext, function(C2x) { this.bdv1x({ id: C2x, key: "track_playlist-" + e2x.data.pid }, !0); if (!!iG5L) iG5L.trackCount = Math.max(0, iG5L.trackCount - 1) }, this);
                h2x.z2x(p2x.hj5o, "itemchange", { data: iG5L || {}, cmd: "del" }); return null }, finaly: function(d2x, e2x) { h2x.z2x(p2x.vs0x, "listchange", { key: e2x.key, action: "refresh" }) }, onmessage: function(cc3x) { l2x.bnZ4d({ text: "æ­Œæ›²åˆ é™¤å¤±è´¥ï¼" }) } }, "track_program-list": { url: "/api/dj/program/detail", format: function(Q2x, e2x) { return this.bIR9I.bnN4R(Q2x.program).songs }, onerror: "onlisterror" }, "track_listen_record-list": { url: "/api/v1/play/record", format: function(Q2x, e2x) { var i2x = []; if (e2x.data.type == -1) { if (Q2x.weekData && Q2x.weekData.length) { e2x.data.type = 1 } else { e2x.data.type = 0 } } if (e2x.data.type == 1) { i2x = this.bIQ9H(Q2x.weekData) } else { i2x = this.bIQ9H(Q2x.allData) } return i2x }, onerror: "onlisterror" }, "track_day-list": { url: "/api/v2/discovery/recommend/songs", format: function(Q2x, e2x) { var mF7y = [],
                    i2x = Q2x.recommend || [];
                k2x.be2x(i2x, function(bf2x, s2x) { mF7y.push({ action: "recommendimpress", json: { alg: bf2x.alg, scene: "user-song", position: s2x, id: bf2x.id } }) });
                this.ks6m.RG7z(mF7y);
                e2x.limit = i2x.length; return i2x }, onerror: "onlisterror" }, "track_lyric-get": { type: "GET", url: "/api/song/lyric", filter: function(e2x) { e2x.data.lv = 0;
                e2x.data.tv = 0 }, format: function(m2x, e2x) { return m2x }, onload: "onlyricload", onerror: "onlyricerror" } });
    p2x.vs0x = NEJ.C();
    b2x = p2x.vs0x.O2x(p2x.hc5h);
    b2x.cl3x = function() { this.cs3x();
        this.rF9w = p2x.hj5o.B2x();
        this.bIR9I = p2x.pD8v.B2x();
        this.ks6m = p2x.hI5N.B2x() };
    b2x.bIQ9H = function(i2x) { var m2x = [],
            fa4e = 0;
        k2x.be2x(i2x, function(r2x, s2x) { var bf2x = l2x.Eo3x(r2x.song); if (s2x == 0) { fa4e = r2x.score } bf2x.max = fa4e;
            bf2x.playCount = r2x.playCount;
            bf2x.score = r2x.score;
            m2x.push(bf2x) }); return m2x };
    H2x.fv4z.B2x({ element: p2x.vs0x, event: ["listchange"] }) })();
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
(function() { var bIP9G; var sG9x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT"; var cfR6L = 0; var bIO9F = 0; var bIN9E = 1; var bIL9C = 0; var bpz4D = ""; var bIK9B = ""; var bII9z = ""; var Sp7i = ""; var Sq7j = ""; var bpN4R = ""; var bIH9y = 0; var bIG9x = ""; var IC4G = ""; var AT2x = 0; var bqn4r = ntes_get_domain(); var bqo4s = null; var cul0x = "//analytics.163.com"; var cfB6v = function() {};

    function is_spider() { return /baiduspider/gi.test(window.navigator.userAgent) }

    function ntes_get_domain() { var f = document.domain; var d = f.split("."); var c = d.length; var e = /^\d+$/g; if (e.test(d[c - 1])) { return f } if (d.length < 3) { return "." + f } var g = ["com", "net", "org", "gov", "co"]; var b, a = false; for (b = 0; b < g.length; b++) { if (d[c - 2] == g[b]) { a = true } } if (!a) { return "." + d[c - 2] + "." + d[c - 1] } else { return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1] } }

    function ntes_set_cookie_long(a, c) { var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bqn4r }

    function ntes_set_cookie(a, c) { var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bqn4r }

    function ntes_set_cookie_new(b, d, a) { if (!a || a == "") { a = 1e3 * 60 * 60 * 24 * 365 * 1 } var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bqn4r }

    function ntes_get_cookie(c) { var a = document.cookie; var d = c + "="; var g = a.length; var b = 0; while (b < g) { var e = b + d.length; if (a.substring(b, e) == d) { var f = a.indexOf(";", e); if (f == -1) { f = g } return unescape(a.substring(e, f)) } b = a.indexOf(" ", b) + 1; if (b == 0) { break } } return -1 }

    function ntes_get_flashver() { var f = "",
            n = navigator; if (n.plugins && n.plugins.length) { for (var ii = 0; ii < n.plugins.length; ii++) { if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) { f = n.plugins[ii].description.split("Shockwave Flash")[1]; break } } } else { if (window.ActiveXObject) { for (var ii = 10; ii >= 2; ii--) { try { var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');"); if (fl) { f = ii + ".0"; break } } catch (e) {} } } } return f } var cfA6u = 0; var Pu6o = 8;

    function ntes_hex_md5(a) { return binl2hex(ntes_core_md5(str2binl(a), a.length * Pu6o)) }

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

    function str2binl(d) { var c = new Array; var a = (1 << Pu6o) - 1; for (var b = 0; b < d.length * Pu6o; b += Pu6o) { c[b >> 5] |= (d.charCodeAt(b / Pu6o) & a) << b % 32 } return c }

    function binl2hex(c) { var b = cfA6u ? "0123456789ABCDEF" : "0123456789abcdef"; var d = ""; for (var a = 0; a < c.length * 4; a++) { d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15) } return d }

    function str_to_ent(e) { var a = ""; var d; for (d = 0; d < e.length; d++) { var f = e.charCodeAt(d); var b = ""; if (f > 255) { while (f >= 1) { b = "0123456789".charAt(f % 10) + b;
                    f = f / 10 } if (b == "") { b = "0" } b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b } else { a += e.charAt(d) } } return a }

    function ntes_get_navigation_info() { Sp7i = "-";
        bpN4R = "-";
        Sq7j = "-"; var c = window.self,
            b = window.screen,
            a = window.navigator; if (c.screen) { Sp7i = b.width + "x" + b.height;
            bpN4R = b.colorDepth + "-bit" } else { if (c.java) { var e = java.awt.Toolkit.getDefaultToolkit(); var f = e.getScreenSize();
                Sp7i = f.width + "x" + f.height } } if (a.language) { Sq7j = a.language.toLowerCase() } else { if (a.browserLanguage) { Sq7j = a.browserLanguage.toLowerCase() } } var g = new Date(document.lastModified);
        bIH9y = g.getTime() / 1e3 }

    function fetch_visitor_hash() { var c = new Date; var b = document.body.clientWidth + ":" + document.body.clientHeight; var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b); return ntes_hex_md5(a) }

    function cum0x(c, b, f) { var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
            a, d = f || cfB6v;
        a = window[e] = new Image;
        a.onload = function() { window[e] = null;
            d() };
        a.onerror = function() { window[e] = null;
            d() };
        a.src = b;
        a = null }

    function neteaseTracker(l, a, m, k) { if (is_spider()) { return } var e = k || bIP9G;
        bpz4D = escape(a || document.location);
        bIK9B = escape(m || document.title);
        bII9z = l === true ? "" : escape(l || document.referrer);
        bIG9x = ntes_get_flashver(); var b = (new Date).getTime(); if (bqo4s == null) { document.cookie = "__ntes__test__cookies=" + b;
            bqo4s = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString() } if (e == "undefined" || !e) { return } if (bpz4D.indexOf("http") != 0) { return } var h = ntes_get_cookie("_ntes_nnid"); if (h == -1) { if (bqo4s) { sG9x = fetch_visitor_hash();
                bIO9F = 1;
                ntes_set_cookie_long("_ntes_nnid", sG9x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", sG9x) } } else { var o = h.indexOf(","); var p = h.indexOf("|"); var f = false; if (p == -1) { p = h.length } sG9x = h.substr(0, o);
            AT2x = h.substr(o + 1, p - o - 1); if (AT2x == 0) { AT2x = (new Date).getTime();
                f = true } if (!sG9x) { sG9x = fetch_visitor_hash();
                f = true } if (f) { ntes_set_cookie_long("_ntes_nnid", sG9x + "," + AT2x);
                ntes_set_cookie_long("_ntes_nuid", sG9x) } if (AT2x != 0 && b - AT2x > 365 * 86400 * 1e3) { AT2x = 0;
                ntes_set_cookie_long("_ntes_nnid", sG9x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", sG9x) } }

        function c(q, i) { var s = ntes_get_cookie(q),
                r = ntes_get_cookie(i); return s == -1 ? r == -1 ? "" : r : s } IC4G = c("P_INFO", "P_OINFO");
        IC4G = IC4G ? IC4G.substr(0, IC4G.indexOf("|")) : "";
        bIL9C = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info(); var n = ["_nacc=", e, "&_nvid=", sG9x, "&_nvtm=", cfR6L, "&_nvsf=", bIN9E, "&_nvfi=", bIO9F, "&_nlag=", Sq7j, "&_nlmf=", bIH9y, "&_nres=", Sp7i, "&_nscd=", bpN4R, "&_nstm=", bIL9C, "&_nurl=", bpz4D, "&_ntit=", bIK9B, "&_nref=", bII9z, "&_nfla=", bIG9x, "&_nssn=", IC4G, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bIN9E = 0;
        neteaseTracker.callback = null } bIP9G = "iad";
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
                this.bIE9v = 0 }, Sw7p: function(a) { "string" == typeof a && (a = x.parse(a));
                this.j2x.concat(a);
                this.bIE9v += a.sigBytes }, Az2x: function(a) { var c = this.j2x,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this.bIF9w, 0);
                a = b * k;
                j = u.min(4 * a, j); if (a) { for (var q = 0; q < a; q += k) this.bID9u(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j } return new r.init(q, j) }, clone: function() { var a = t.clone.call(this);
                a.j2x = this.j2x.clone(); return a }, bIF9w: 0 });
    l.Hasher = q.extend({ cfg: t.extend(), init: function(a) { this.cfg = this.cfg.extend(a);
            this.reset() }, reset: function() { q.reset.call(this);
            this.baq0x() }, update: function(a) { this.Sw7p(a);
            this.Az2x(); return this }, finalize: function(a) { a && this.Sw7p(a); return this.SB7u() }, blockSize: 16, ban0x: function(a) { return function(b, e) { return (new a.init(e)).finalize(b) } }, cft6n: function(a) { return function(b, e) { return (new n.HMAC.init(a, e)).finalize(b) } } }); var n = d.algo = {}; return d }(Math);
(function() { var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = { stringify: function(d) { var l = d.words,
                p = d.sigBytes,
                t = this.bv2x;
            d.clamp();
            d = []; for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63)); if (l = t.charAt(64))
                for (; d.length % 4;) d.push(l); return d.join("") }, parse: function(d) { var l = d.length,
                s = this.bv2x,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t)); for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) { var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                        b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++ }
            return p.create(t, r) }, bv2x: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" } })();
(function(u) {
    function p(b, n, a, c, e, j, k) { b = b + (n & a | ~n & c) + e + k; return (b << j | b >>> 32 - j) + n }

    function d(b, n, a, c, e, j, k) { b = b + (n & c | a & ~c) + e + k; return (b << j | b >>> 32 - j) + n }

    function l(b, n, a, c, e, j, k) { b = b + (n ^ a ^ c) + e + k; return (b << j | b >>> 32 - j) + n }

    function s(b, n, a, c, e, j, k) { b = b + (a ^ (n | ~c)) + e + k; return (b << j | b >>> 32 - j) + n } for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({ baq0x: function() { this.dI3x = new w.init([1732584193, 4023233417, 2562383102, 271733878]) }, bID9u: function(q, n) { for (var a = 0; 16 > a; a++) { var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360 } var a = this.dI3x.words,
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
            a[3] = a[3] + h | 0 }, SB7u: function() { var b = this.j2x,
                n = b.words,
                a = 8 * this.bIE9v,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32; var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.Az2x();
            b = this.dI3x;
            n = b.words; for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360; return b }, clone: function() { var b = v.clone.call(this);
            b.dI3x = this.dI3x.clone(); return b } });
    t.MD5 = v.ban0x(r);
    t.HmacMD5 = v.cft6n(r) })(Math);
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
        v = d.Cipher = t.extend({ cfg: l.extend(), createEncryptor: function(e, a) { return this.create(this.bau0x, e, a) }, createDecryptor: function(e, a) { return this.create(this.cfs6m, e, a) }, init: function(e, a, b) { this.cfg = this.cfg.extend(b);
                this.bIB9s = e;
                this.J2x = a;
                this.reset() }, reset: function() { t.reset.call(this);
                this.baq0x() }, process: function(e) { this.Sw7p(e); return this.Az2x() }, finalize: function(e) { e && this.Sw7p(e); return this.SB7u() }, keySize: 4, ivSize: 4, bau0x: 1, cfs6m: 2, ban0x: function(e) { return { encrypt: function(b, k, d) { return ("string" == typeof k ? c : a).encrypt(e, b, k, d) }, decrypt: function(b, k, d) { return ("string" == typeof k ? c : a).decrypt(e, b, k, d) } } } });
    d.StreamCipher = v.extend({ SB7u: function() { return this.Az2x(!0) }, blockSize: 1 }); var b = p.mode = {},
        x = function(e, a, b) { var c = this.bIA9r;
            c ? this.bIA9r = u : c = this.bIw9n; for (var d = 0; d < b; d++) e[a + d] ^= c[d] },
        q = (d.BlockCipherMode = l.extend({ createEncryptor: function(e, a) { return this.Encryptor.create(e, a) }, createDecryptor: function(e, a) { return this.Decryptor.create(e, a) }, init: function(e, a) { this.bIv9m = e;
                this.bIA9r = a } })).extend();
    q.Encryptor = q.extend({ processBlock: function(e, a) { var b = this.bIv9m,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bIw9n = e.slice(a, a + c) } });
    q.Decryptor = q.extend({ processBlock: function(e, a) { var b = this.bIv9m,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bIw9n = d } });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = { pad: function(a, b) { for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c) }, unpad: function(a) { a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255 } };
    d.BlockCipher = v.extend({ cfg: v.cfg.extend({ mode: b, padding: q }), reset: function() { v.reset.call(this); var a = this.cfg,
                b = a.iv,
                a = a.mode; if (this.bIB9s == this.bau0x) var c = a.createEncryptor;
            else c = a.createDecryptor, this.bIF9w = 1;
            this.eD4H = c.call(a, this, b && b.words) }, bID9u: function(a, b) { this.eD4H.processBlock(a, b) }, SB7u: function() { var a = this.cfg.padding; if (this.bIB9s == this.bau0x) { a.pad(this.j2x, this.blockSize); var b = this.Az2x(!0) } else b = this.Az2x(!0), a.unpad(b); return b }, blockSize: 4 }); var n = d.CipherParams = l.extend({ init: function(a) { this.mixIn(a) }, toString: function(a) { return (a || this.formatter).stringify(this) } }),
        b = (p.format = {}).OpenSSL = { stringify: function(a) { var b = a.ciphertext;
                a = a.salt; return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r) }, parse: function(a) { a = r.parse(a); var b = a.words; if (1398893684 == b[0] && 1701076831 == b[1]) { var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16 } return n.create({ ciphertext: a, salt: c }) } },
        a = d.SerializableCipher = l.extend({ cfg: l.extend({ format: b }), encrypt: function(a, b, c, d) { d = this.cfg.extend(d); var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg; return n.create({ ciphertext: b, key: c, iv: l.iv, algorithm: a, mode: l.mode, padding: l.padding, blockSize: a.blockSize, formatter: d.format }) }, decrypt: function(a, b, c, d) { d = this.cfg.extend(d);
                b = this.Ze0x(b, d.format); return a.createDecryptor(c, d).finalize(b.ciphertext) }, Ze0x: function(a, b) { return "string" == typeof a ? b.parse(a, this) : a } }),
        p = (p.kdf = {}).OpenSSL = { execute: function(a, b, c, d) { d || (d = s.random(8));
                a = w.create({ keySize: b + c }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b; return n.create({ key: a, iv: c, salt: d }) } },
        c = d.PasswordBasedCipher = a.extend({ cfg: a.cfg.extend({ kdf: p }), encrypt: function(b, c, d, l) { l = this.cfg.extend(l);
                d = l.kdf.execute(d, b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d); return b }, decrypt: function(b, c, d, l) { l = this.cfg.extend(l);
                c = this.Ze0x(c, l.format);
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
        d = d.AES = p.extend({ baq0x: function() { for (var a = this.J2x, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.ceV6P = d + 6) + 1), e = this.ceQ6K = [], j = 0; j < a; j++)
                    if (j < d) e[j] = c[j];
                    else { var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k }
                c = this.ceP6J = []; for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]] }, encryptBlock: function(a, b) { this.bIs9j(a, b, this.ceQ6K, t, r, w, v, l) }, decryptBlock: function(a, c) { var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.bIs9j(a, c, this.ceP6J, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d }, bIs9j: function(a, b, c, d, e, j, l, f) { for (var m = this.ceV6P, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
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
    u.AES = p.ban0x(d) })();

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
        dP3x = c2x("nej.g"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        OR6L = c2x("nm.x.ek");
    OR6L.emj = { "è‰²": "00e0b", "æµæ„Ÿ": "509f6", "è¿™è¾¹": "259df", "å¼±": "8642d", "å˜´å”‡": "bc356", "äº²": "62901", "å¼€å¿ƒ": "477df", "å‘²ç‰™": "22677", "æ†¨ç¬‘": "ec152", "çŒ«": "b5ff6", "çš±çœ‰": "8ace6", "å¹½çµ": "15bb7", "è›‹ç³•": "b7251", "å‘æ€’": "52b3a", "å¤§å“­": "b17a8", "å…”å­": "76aea", "æ˜Ÿæ˜Ÿ": "8a5aa", "é’Ÿæƒ…": "76d2e", "ç‰µæ‰‹": "41762", "å…¬é¸¡": "9ec4e", "çˆ±æ„": "e341f", "ç¦æ­¢": "56135", "ç‹—": "fccf6", "äº²äº²": "95280", "å‰": "104e0", "ç¤¼ç‰©": "312ec", "æ™•": "bda92", "å‘†": "557c9", "ç”Ÿç—…": "38701", "é’»çŸ³": "14af6", "æ‹œ": "c9d05", "æ€’": "c4f7f", "ç¤ºçˆ±": "0c368", "æ±—": "5b7a4", "å°é¸¡": "6bee2", "ç—›è‹¦": "55932", "æ’‡å˜´": "575cc", "æƒ¶æ": "e10b4", "å£ç½©": "24d81", "åèˆŒ": "3cfe4", "å¿ƒç¢Ž": "875d3", "ç”Ÿæ°”": "e8204", "å¯çˆ±": "7b97d", "é¬¼è„¸": "def52", "è·³èˆž": "741d5", "ç”·å­©": "46b8e", "å¥¸ç¬‘": "289dc", "çŒª": "6935b", "åœˆ": "3ece0", "ä¾¿ä¾¿": "462db", "å¤–æ˜Ÿ": "0a22b", "åœ£è¯ž": "8e7", "æµæ³ª": "01000", "å¼º": "1", "çˆ±å¿ƒ": "0CoJU", "å¥³å­©": "m6Qyw", "æƒŠæ": "8W8ju", "å¤§ç¬‘": "d" };
    OR6L.md = ["è‰²", "æµæ„Ÿ", "è¿™è¾¹", "å¼±", "å˜´å”‡", "äº²", "å¼€å¿ƒ", "å‘²ç‰™", "æ†¨ç¬‘", "çŒ«", "çš±çœ‰", "å¹½çµ", "è›‹ç³•", "å‘æ€’", "å¤§å“­", "å…”å­", "æ˜Ÿæ˜Ÿ", "é’Ÿæƒ…", "ç‰µæ‰‹", "å…¬é¸¡", "çˆ±æ„", "ç¦æ­¢", "ç‹—", "äº²äº²", "å‰", "ç¤¼ç‰©", "æ™•", "å‘†", "ç”Ÿç—…", "é’»çŸ³", "æ‹œ", "æ€’", "ç¤ºçˆ±", "æ±—", "å°é¸¡", "ç—›è‹¦", "æ’‡å˜´", "æƒ¶æ", "å£ç½©", "åèˆŒ", "å¿ƒç¢Ž", "ç”Ÿæ°”", "å¯çˆ±", "é¬¼è„¸", "è·³èˆž", "ç”·å­©", "å¥¸ç¬‘", "çŒª", "åœˆ", "ä¾¿ä¾¿", "å¤–æ˜Ÿ", "åœ£è¯ž"] })();
(function() { var c2x = NEJ.P,
        dP3x = c2x("nej.g"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        OR6L = c2x("nm.x.ek"),
        l2x = c2x("nm.x"); if (v2x.bq2x.redefine) return;
    window.GEnc = true; var baU0x = function(ceO6I) { var m2x = [];
        k2x.be2x(ceO6I, function(ceL6F) { m2x.push(OR6L.emj[ceL6F]) }); return m2x.join("") }; var ceJ5O = v2x.bq2x;
    v2x.bq2x = function(V2x, e2x) { var j2x = {},
            e2x = NEJ.X({}, e2x),
            lK7D = V2x.indexOf("?"); if (window.GEnc && /(^|\.com)\/api/.test(V2x) && !(e2x.headers && e2x.headers[dP3x.ws1x] == dP3x.Eu3x) && !e2x.noEnc) { if (lK7D != -1) { j2x = k2x.ho5t(V2x.substring(lK7D + 1));
                V2x = V2x.substring(0, lK7D) } if (e2x.query) { j2x = NEJ.X(j2x, k2x.fi4m(e2x.query) ? k2x.ho5t(e2x.query) : e2x.query) } if (e2x.data) { j2x = NEJ.X(j2x, k2x.fi4m(e2x.data) ? k2x.ho5t(e2x.data) : e2x.data) } j2x["csrf_token"] = v2x.gJ5O("__csrf");
            V2x = V2x.replace("api", "weapi");
            e2x.method = "post";
            delete e2x.query; var bIm9d = window.asrsea(JSON.stringify(j2x), baU0x(["æµæ³ª", "å¼º"]), baU0x(OR6L.md), baU0x(["çˆ±å¿ƒ", "å¥³å­©", "æƒŠæ", "å¤§ç¬‘"]));
            e2x.data = k2x.df3x({ params: bIm9d.encText, encSecKey: bIm9d.encSecKey }) } ceJ5O(V2x, e2x) };
    v2x.bq2x.redefine = true })();
(function() { window.setTimeout(function() { var bp = document.createElement("script"); var curProtocol = window.location.protocol.split(":")[0]; if (curProtocol === "https") { bp.src = "https://zz.bdstatic.com/linksubmit/push.js" } else { bp.src = "http://push.zhanzhang.baidu.com/push.js" } var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s) }, 3e3) })();
(function() {})();
(function() {})();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        cP3x = c2x("nej.p"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        di3x = c2x("nm.u"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        bbf0x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
        j2x = { "å¤§ç¬‘": "86", "å¯çˆ±": "85", "æ†¨ç¬‘": "359", "è‰²": "95", "äº²äº²": "363", "æƒŠæ": "96", "æµæ³ª": "356", "äº²": "362", "å‘†": "352", "å“€ä¼¤": "342", "å‘²ç‰™": "343", "åèˆŒ": "348", "æ’‡å˜´": "353", "æ€’": "361", "å¥¸ç¬‘": "341", "æ±—": "97", "ç—›è‹¦": "346", "æƒ¶æ": "354", "ç”Ÿç—…": "350", "å£ç½©": "351", "å¤§å“­": "357", "æ™•": "355", "å‘æ€’": "115", "å¼€å¿ƒ": "360", "é¬¼è„¸": "94", "çš±çœ‰": "87", "æµæ„Ÿ": "358", "çˆ±å¿ƒ": "33", "å¿ƒç¢Ž": "34", "é’Ÿæƒ…": "303", "æ˜Ÿæ˜Ÿ": "309", "ç”Ÿæ°”": "314", "ä¾¿ä¾¿": "89", "å¼º": "13", "å¼±": "372", "æ‹œ": "14", "ç‰µæ‰‹": "379", "è·³èˆž": "380", "ç¦æ­¢": "374", "è¿™è¾¹": "262", "çˆ±æ„": "106", "ç¤ºçˆ±": "376", "å˜´å”‡": "367", "ç‹—": "81", "çŒ«": "78", "çŒª": "100", "å…”å­": "459", "å°é¸¡": "450", "å…¬é¸¡": "461", "å¹½çµ": "116", "åœ£è¯ž": "411", "å¤–æ˜Ÿ": "101", "é’»çŸ³": "52", "ç¤¼ç‰©": "107", "ç”·å­©": "0", "å¥³å­©": "1", "è›‹ç³•": "337", 18: "186", "åœˆ": "312", "å‰": "313" },
        ceF5K = function() { if (h2x && h2x.z2x) { h2x.dispatchEventalias = h2x.z2x } };
    ceF5K();
    l2x.bbh1x = function(bK3x) { if (!bK3x || bK3x.copyrightId === undefined || !!bK3x.program) return false; if (window.GAbroad) { bK3x.fee = 0; return true } if (bK3x.status < 0) return true; var OM6G; if (typeof GCopyrights !== "undefined") OM6G = GCopyrights; try { if (!OM6G && !!top.GCopyrights) OM6G = top.GCopyrights } catch (e) {} if (OM6G) { var s2x = k2x.cV3x(OM6G, bK3x.copyrightId); if (s2x >= 0) return true } return false };
    l2x.bbm1x = function() { var Ar2x = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
            uO0x = { 2: "artist", 13: "playlist", 17: "dj", 19: "album", 18: "song", 31: "toplist", 32: "searchsong", 33: "searchlyric", 34: "event", 70: "djradio", 24: "day", 50: "record" },
            ceD5I = { song: "å•æ›²", album: "ä¸“è¾‘", artist: "æ­Œæ‰‹", playlist: "æ­Œå•", dj: "ç”µå°èŠ‚ç›®", searchsong: "å•æ›²æœç´¢", searchlyric: "æ­Œè¯æœç´¢", toplist: "æ¦œå•", event: "åŠ¨æ€", djradio: "ç”µå°", day: "æ¯æ—¥æ­Œæ›²æŽ¨è", record: "å¬æ­ŒæŽ’è¡Œæ¦œ" }; var ces5x = function(J2x, j2x, OL6F) { switch (J2x) {
                case "event":
                    j2x = j2x.split("|"); return "/event?id=" + j2x[0] + "&uid=" + j2x[1];
                case "searchsong":
                case "searchlyric":
                    var t2x = J2x == "searchsong" ? 1 : 1006; return "/search/m/?s=" + encodeURIComponent(j2x) + "&type=" + t2x;
                case "toplist":
                    return "/discover/toplist?id=" + j2x + "&_hash=songlist-" + OL6F;
                case "day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + OL6F;;
                case "record":
                    j2x = j2x.split("|"); return "/user/songs/rank?id=" + j2x[0] + "&cat=" + j2x[1]; break;
                default:
                    return "/" + J2x + "?id=" + j2x + "&_hash=songlist-" + OL6F } }; return function(dK3x, OL6F) { if (!dK3x) return null; var Je5j = dK3x.fid || (dK3x.type != 18 ? dK3x.type : null),
                bbt1x = dK3x.fdata || dK3x.rid,
                bId9U = dK3x.page || dK3x.fhref; var J2x = uO0x[Je5j]; if (!J2x) { var wx1x = (bId9U || "").match(Ar2x); if (wx1x) J2x = wx1x[1] } if (!J2x) return null; return { title: ceD5I[J2x], link: !uO0x[Je5j] ? bId9U : ces5x(J2x, bbt1x, OL6F), fid: Je5j, fdata: bbt1x } } }();
    l2x.SP7I = function(ky6s) { var dt3x = ky6s; if (typeof GUser !== "undefined" && GUser.userId > 0) dt3x = GUser; return dt3x };
    l2x.hb5g = function() { if (typeof GUser !== "undefined" && GUser.userId > 0) { return true } else { top.login(); return false } };
    l2x.Io4s = function() { var Ar2x = /#(.*?)$/; return function(gk5p) { var iK5P = gk5p === false ? location : top.location; return Ar2x.test(iK5P.href) ? RegExp.$1 : "" } }();
    l2x.Ak2x = function() { var Aj2x = a1x.cT3x("audio"),
            cec5h = Aj2x.canPlayType && Aj2x.canPlayType("audio/mpeg"); if (cec5h) return 2; var ceb5g = l2x.bbT1x().supported; if (ceb5g) return 1; return 0 };
    l2x.bbT1x = function() { var gc5h, bbX1x = !1,
            bbY1x = ""; if (cP3x.cS3x.browser == "ie") { try { gc5h = new ActiveXObject("ShockwaveFlash.ShockwaveFlash") } catch (e) { gc5h = null } if (gc5h) { bbX1x = !0;
                bbY1x = gc5h.GetVariable("$version") } } else { if (navigator.plugins && navigator.plugins.length > 0) { gc5h = navigator.plugins["Shockwave Flash"]; if (gc5h) { bbX1x = !0;
                    bbY1x = gc5h.description } } } return { supported: bbX1x, version: bbY1x } };
    l2x.qe8W = function() { return "ç½‘æ˜“äº‘éŸ³ä¹" };
    l2x.cea5f = function() { return j2x };
    l2x.bIb9S = function(cZ3x) { var C2x = j2x[cZ3x]; return C2x == null ? "" : bbf0x.replace("{ID}", C2x) };
    l2x.tm9d = function(bi2x, dE3x, In4r) { if (!bi2x) return ""; if (!!In4r) { bi2x = l2x.cdW5b(bi2x) } return l2x.bcp1x(l2x.cdR5W(bi2x, dE3x)) };
    l2x.bcu1x = function() { var OF6z = { AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@ï¼š])|$))/g, LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@ï¼š])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g, ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@ï¼š])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g, ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@ï¼š])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g, LING: /\n/g, BLANK: /\s/g, MLINE: /([ \f\r\t\v]*\n){2,}/g },
            bcw1x = { LINK: '<a href="${url}" class="${klass}">${value}</a>', AT: '<a href="${url}" class="${klass}">@${value}</a>', ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>' },
            cdO5T = { r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g, "<": "&lt;", ">": "&gt;", "&": "&amp;", " ": "&nbsp;", '"': "&quot;", "'": "&#39;", "&lt;": "&lt;", "&gt;": "&gt;" },
            cdM5R = ["AT", "LINK", "ACT_NOLINK", "ACT"]; var cdL5Q = function(dl3x, bcE1x) { dl3x = Im4q(dl3x); if (!!bcE1x) { dl3x = dl3x.replace(OF6z.MLINE, "\n\n").replace(OF6z.LING, "</br>") } dl3x = l2x.bcp1x(dl3x); return dl3x }; var Im4q = function(bi2x) { return k2x.Bo2x(cdO5T, bi2x) }; return function(dl3x, e2x, ea4e) { e2x = e2x || {};
            ea4e = ea4e || {};
            ea4e.actHash = {}; var cdI5N = !!e2x.parseLink,
                cdH5M = !!e2x.parseAct,
                cdF5K = e2x.linkTpl || bcw1x.LINK,
                cdE5J = e2x.atTpl || bcw1x.AT,
                cdC5H = e2x.actTpl || bcw1x.ACT,
                bcE1x = !!e2x.keepSpace,
                bcT1x = e2x.linkKlass || "s-fc7";
            cup0x = e2x.actBiJson || ""; if (!dl3x) return "";
            dl3x = dl3x.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " "); var kK6E = cdM5R[cdI5N + 2 * cdH5M],
                cO3x = OF6z[kK6E],
                bs2x = null,
                kX6R = null,
                gv5A = 0,
                cuq0x = "",
                cur0x = ""; var Ab2x = [];
            cO3x.lastIndex = 0; while (bs2x = cO3x.exec(dl3x)) { var fH4L = { html: "", before: bs2x.index - 1, after: bs2x.index + bs2x[0].length }; if (bs2x[1]) { var kX6R = bs2x[2].replace(/[^\x00-\xff]/g, "**"); if (kX6R.length < 4 || kX6R.length > 32) {} else { var Oy6s = a1x.en4r(cdE5J);
                        fH4L.html = a1x.bP3x(Oy6s, { value: Im4q(bs2x[2]), url: encodeURI("/user/home?nickname=" + bs2x[2]), klass: bcT1x });
                        Ab2x.push(fH4L) } } else if (bs2x.length > 8 && bs2x[4]) { var Oy6s = a1x.en4r(cdF5K);
                    fH4L.html = a1x.bP3x(Oy6s, { value: Im4q(bs2x[4]), url: encodeURI(bs2x[4]), klass: bcT1x });
                    Ab2x.push(fH4L) } else { var bHT9K = kK6E == "ACT_NOLINK" ? 4 : 9; var Oy6s = a1x.en4r(cdC5H);
                    fH4L.html = a1x.bP3x(Oy6s, { value: Im4q(bs2x[bHT9K]), klass: bcT1x });
                    Ab2x.push(fH4L);
                    ea4e.actHash[bs2x[bHT9K].slice(1, -1)] = true } } var cdr5w = Ab2x.length,
                ky6s = { before: dl3x.length - 1, after: 0 },
                bdq1x = ""; for (var i = 0; i <= cdr5w; i++) { var iq5v, gC5H;
                iq5v = (Ab2x[i - 1] || ky6s).after;
                gC5H = (Ab2x[i] || ky6s).before; if (gC5H >= iq5v && iq5v >= 0 && gC5H <= dl3x.length - 1) { bdq1x += cdL5Q(dl3x.substring(iq5v, gC5H + 1), bcE1x) } if (Ab2x[i]) { bdq1x += Ab2x[i].html } } return bdq1x } }();
    l2x.cdW5b = function() { var cO3x = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g"); return function(bi2x) { return (bi2x || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cO3x, function($0, $1) { return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>ç½‘é¡µé“¾æŽ¥</a>' }) } }();
    l2x.cdR5W = function() { var cO3x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g; var eH4L = function(kX6R, dE3x) { return '<a href="/user/home?nickname=' + encodeURIComponent(kX6R) + '" class="' + (dE3x || "") + '">@' + kX6R + "</a>" }; return function(bi2x, dE3x) { return (bi2x || "").replace(cO3x, function($0, $1) { return eH4L($1, dE3x) }) } }();
    l2x.bcp1x = function() { var cO3x = /\[(.*?)\]/g; return function(bi2x) { return (bi2x || "").replace(cO3x, function($1, $2) { var V2x = l2x.bIb9S($2); return !V2x ? $1 : '<img src="' + V2x + '"/>' }) } }();
    l2x.xZ1x = function(E2x, dE3x) { a1x.by2x(E2x, dE3x) ? a1x.w2x(E2x, dE3x) : a1x.y2x(E2x, dE3x) };
    l2x.Ou6o = function(cI3x, hA5F) { cI3x = a1x.x2x(cI3x);
        hA5F = a1x.x2x(hA5F); if (!cI3x || !hA5F) return !1; for (hA5F = hA5F.parentNode; !!hA5F && hA5F != cI3x; hA5F = hA5F.parentNode); return hA5F == cI3x };
    l2x.lV7O = function() { var bHS9J = function(ft4x) { return (ft4x < 10 ? "0" : "") + ft4x }; return function(jO6I) { jO6I = parseInt(jO6I) || 0; if (!jO6I) return "00:00"; var Op6j = Math.floor(jO6I % 60),
                cdk5p = Math.floor(jO6I / 60); return bHS9J(cdk5p) + ":" + bHS9J(Op6j) } }();
    l2x.wW1x = function(fn4r, ub0x) { if (!fn4r || fn4r.length == 0) return "";
        ub0x = ub0x || "/"; var bs2x = []; for (var i = fn4r.length - 1; i >= 0; i--) { bs2x.unshift(fn4r[i].name) } return bs2x.join(ub0x) };
    l2x.pE8w = function() { var Om6g = function(hk5p, dE3x, cI3x) { if (!hk5p || !hk5p.name) return ""; if (!hk5p.id) return '<span class="' + dE3x + '">' + k2x.dM3x(hk5p.name) + "</span>"; return "<a" + (cI3x ? ' target="_blank"' : "") + ' class="' + dE3x + '" href="/artist?id=' + hk5p.id + '" hidefocus="true">' + k2x.dM3x(hk5p.name) + "</a>" }; return function(fn4r, T2x, ub0x, cI3x, bHO9F) { if (!fn4r || !fn4r.length) return "";
            ub0x = ub0x || "/";
            T2x = T2x || "";
            Ij4n = ""; var eI4M = []; for (var i = 0, i2x = [], rT9K = [], ff4j; i < fn4r.length; ++i) { eI4M.push(fn4r[i].name); if (!fn4r[i] || fn4r[i].id <= 0) { rT9K.push(fn4r[i]); continue } if (k2x.ge5j(T2x)) { ff4j = T2x(fn4r[i]) } else { ff4j = Om6g(fn4r[i], T2x, cI3x) } if (ff4j && bHO9F && fn4r[i].tns && fn4r[i].tns.length > 0) { Ij4n = k2x.dM3x(fn4r[i].tns[0]);
                    ff4j += '<span class="s-fc8" title="' + Ij4n + '"> - (' + Ij4n + ")</span>" }!!ff4j && i2x.push(ff4j) } for (var i = 0, ff4j; i < rT9K.length; ++i) { if (k2x.ge5j(T2x)) { ff4j = T2x(rT9K[i]) } else { ff4j = Om6g(rT9K[i], T2x, cI3x) } if (ff4j && bHO9F && rT9K[i].tns && rT9K[i].tns.length > 0) { Ij4n = k2x.dM3x(rT9K[i].tns[0]);
                    ff4j += '<span class="s-fc8" title="' + Ij4n + '"> - (' + Ij4n + ")</span>" }!!ff4j && i2x.push(ff4j) } return '<span title="' + eI4M.join(ub0x) + '">' + i2x.join(ub0x) + "</span>" } }();
    l2x.vC0x = function(eU4Y) { return !!eU4Y && /^[0-9]{11}$/.test(eU4Y) };
    l2x.cus0x = function(eU4Y) { if (!l2x.vC0x(eU4Y)) return eU4Y; return eU4Y.substring(0, 3) + "****" + eU4Y.substr(7) };
    l2x.iW5b = function() { var cO3x = /^\s+$/g; return function(hC5H) { return !hC5H || cO3x.test(hC5H) } }();
    l2x.Ii4m = function() { var beB1x = /[^\x00-\xfff]/g; return function(hC5H) { var cdh5m = hC5H.match(beB1x) || [],
                dF3x = cdh5m.length; return hC5H.length + dF3x } }();
    l2x.zR2x = function() { var beB1x = /[^\x00-\xfff]/; return function(hC5H, gl5q) { for (var i = 0, len = hC5H.length; i < len && gl5q > 0; i++) { if (beB1x.test(hC5H.charAt(i))) { gl5q -= 2; if (gl5q < 0) { break } } else { gl5q -= 1 } } return hC5H.substring(0, i) } }();
    l2x.Dy3x = function(hC5H, gl5q, OO6I) { gl5q = gl5q || 10;
        OO6I = OO6I || nej.p.cS3x.engine == "trident" && parseInt(nej.p.cS3x.release) < 5; if (OO6I && l2x.Ii4m(hC5H) > gl5q) { return l2x.zR2x(hC5H, gl5q) + "..." } else { return hC5H } };
    l2x.bHN9E = function(f2x) { return f2x === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f2x.type || f2x.href || ~f2x.tabIndex) };
    l2x.cde5j = function(d2x, cI3x) { if (!d2x || !cI3x) return !0; var f2x, t2x = d2x.type.toLowerCase(); if (t2x == "mouseout") { f2x = d2x.relatedTarget || d2x.toElement } else if (t2x == "mouseover") { f2x = d2x.relatedTarget || d2x.fromElement } return !f2x || f2x !== cI3x && !l2x.Ou6o(cI3x, f2x) };
    l2x.rc8U = function() { R2x = {}; return function(f2x, dJ3x) { var C2x = a1x.kL6F(f2x),
                J2x = "hover-" + C2x; if (!dJ3x || !C2x || !!R2x[J2x]) return;
            R2x[J2x] = !0;
            h2x.q2x(C2x, "mouseover", function() { var beY1x = a1x.I2x(f2x, "hshow") || []; var bfe2x = a1x.I2x(f2x, "icn-dislike") || [];
                a1x.y2x(C2x, "z-hover");
                a1x.X2x(beY1x[0], "display", "block");
                a1x.X2x(bfe2x[0], "display", "block") });
            h2x.q2x(C2x, "mouseout", function() { var beY1x = a1x.I2x(f2x, "hshow") || []; var bfe2x = a1x.I2x(f2x, "icn-dislike") || [];
                a1x.w2x(C2x, "z-hover");
                a1x.X2x(beY1x[0], "display", "none");
                a1x.X2x(bfe2x[0], "display", "none") }) } }();
    l2x.bHL9C = function() { var bv2x = { r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi, "(": "\\(", ")": "\\)", "[": "\\[", "]": "\\]", "{": "\\{", "}": "\\}", "*": "\\*", "+": "\\+", "^": "\\^", $: "\\$", "?": "\\?", "!": "\\!", "\\": "\\\\", "|": "\\|", ".": "\\." }; return function(hC5H) { return k2x.Bo2x(bv2x, hC5H) } }();
    l2x.tT0x = function(bA2x) { if (k2x.FY4c(bA2x)) bA2x = bA2x.getTime(); var fI4M = new Date,
            nh7a = fI4M.getTime() - bA2x; if (nh7a <= 6e4) return "åˆšåˆš"; var qp8h = fI4M.getHours() * 36e5 + fI4M.getMinutes() * 6e4 + fI4M.getSeconds() * 1e3; if (nh7a <= qp8h) { if (nh7a < 36e5) { var Oe6Y = Math.floor(nh7a / 6e4); return Oe6Y + "åˆ†é’Ÿå‰" } return k2x.iY5d(bA2x, "HH:mm") } else { if (nh7a < qp8h + 864e5) { return "æ˜¨å¤©" + k2x.iY5d(bA2x, "HH:mm") } else { var gm5r = fI4M.getFullYear(),
                    bfD2x = new Date(gm5r, 0, 1); var qp8h = fI4M.getTime() - bfD2x.getTime(); if (nh7a < qp8h) { return k2x.iY5d(bA2x, "Mæœˆdæ—¥ HH:mm") } return k2x.iY5d(bA2x, "yyyyå¹´Mæœˆdæ—¥") } } };
    l2x.cda5f = function(bA2x) { if (k2x.FY4c(bA2x)) bA2x = bA2x.getTime(); var fI4M = new Date,
            nh7a = fI4M.getTime() - bA2x; var qp8h = fI4M.getHours() * 36e5 + fI4M.getMinutes() * 6e4 + fI4M.getSeconds() * 1e3; if (nh7a <= qp8h) { return "ä»Šå¤©" + k2x.iY5d(bA2x, "HH:mm") } else { if (nh7a < qp8h + 864e5) { return "æ˜¨å¤©" + k2x.iY5d(bA2x, "HH:mm") } else { return k2x.iY5d(bA2x, "yy-MM-dd HH:mm") } } };
    l2x.ccY5d = function(bA2x) { if (k2x.FY4c(bA2x)) bA2x = bA2x.getTime(); var fI4M = new Date,
            nh7a = fI4M.getTime() - bA2x; if (nh7a <= 6e4) return "åˆšåˆš"; var qp8h = fI4M.getHours() * 36e5 + fI4M.getMinutes() * 6e4 + fI4M.getSeconds() * 1e3; if (nh7a <= qp8h) { if (nh7a < 36e5) { var Oe6Y = Math.floor(nh7a / 6e4); return Oe6Y + "åˆ†é’Ÿå‰" } return k2x.iY5d(bA2x, "HH:mm") } else { if (nh7a < qp8h + 864e5) { return "æ˜¨å¤©" + k2x.iY5d(bA2x, "HH:mm") } else if (nh7a < qp8h + 864e5 * 6) { var gm5r = fI4M.getFullYear(),
                    bfD2x = new Date(gm5r, 0, 1); var qp8h = fI4M.getTime() - bfD2x.getTime(); if (nh7a < qp8h) { return k2x.iY5d(bA2x, "Mæœˆdæ—¥ HH:mm") } return k2x.iY5d(bA2x, "yyyyå¹´Mæœˆdæ—¥") } else { return "æœ€è¿‘" } } };
    l2x.NV6P = function() { var cO3x = /\{(.*?)\}/gi; return function(pG8y, j2x) { return (pG8y || "").replace(cO3x, function($1, $2) { var A2x = j2x[$2]; return A2x == null ? $1 : A2x }) } }();
    l2x.eO4S = function() { var bg2x = Array.prototype.slice.call(arguments, 0),
            pG8y = bg2x.shift(); if (pG8y) { return pG8y.replace(/{(\d+)}/g, function($1, $2) { return $2 < bg2x.length ? bg2x[$2] : $1 }) } return "" };
    l2x.Ib4f = function(i2x, dE3x, kR6L) { return "";
        kR6L = kR6L || " - "; if (i2x && i2x.length) { return kR6L + (!!dE3x ? '<span class="' + dE3x + '">' + i2x[0] + "</span>" : i2x[0]) } return "" };
    l2x.bHI9z = function() { if (window.getSelection) { var qr8j = window.getSelection(); if (qr8j && qr8j.focusNode && qr8j.focusNode.tagName) { var zM2x = a1x.cQ3x(qr8j.focusNode); for (var i = 0, wZ1x; i < zM2x.length; ++i) { wZ1x = zM2x[i].tagName; if (!wZ1x) continue;
                    wZ1x = wZ1x.toLowerCase(); if (wZ1x == "textarea" || wZ1x == "input") return !0 } } } else if (document.selection) { var cG3x = document.selection.createRange(); if (cG3x) { var f2x = cG3x.parentElement(); if (f2x && f2x.tagName) { var wZ1x = f2x.tagName.toLowerCase(); if (wZ1x == "textarea" || wZ1x == "input") return !0 } } } return !1 };
    l2x.zL2x = function(fp4t) { if (/^[A-Z]\:\\/i.test(fp4t)) { fp4t = fp4t.split("\\") } else { fp4t = fp4t.split("/") } fp4t = fp4t[fp4t.length - 1]; return fp4t };
    l2x.ccW5b = function() { var CM3x = [13, 17, 34, 19, 18, 21]; return function(C2x) { var bs2x = (C2x || "").split("_"); return { type: CM3x[bs2x[2]] || -1, id: bs2x[3] || "" } } }();
    l2x.bgj2x = function(dt3x) { if (4 == dt3x.userType) { return '<sup class="icn u-icn2 u-icn2-music2"></sup>' } else if (dt3x.authStatus == 1) { return '<sup class="u-icn u-icn-1"></sup>' } else if (dt3x.expertTags && dt3x.expertTags.length) { return '<sup class="u-icn u-icn-84"></sup>' } };
    l2x.NQ6K = function(ft4x) { ft4x += ""; if (ft4x) { return ft4x.substr(0, 3) + "****" + ft4x.substr(ft4x.length - 4) } };
    l2x.cut0x = function(s2x, co3x) { return (s2x % co3x + co3x) % co3x };
    l2x.bHH9y = function() { var CM3x = ["playlist", "program", "event", "album", "song", "mv", "topic"]; return function(C2x) { var bs2x = (C2x || "").split("_"),
                m2x = { type: CM3x[bs2x[2]] || -1, id: bs2x[3] || "" }; if (m2x.type == "event") { m2x.uid = bs2x[4] || ""; return "/" + m2x.type + "?id=" + m2x.id + "&uid=" + m2x.uid } return "/" + m2x.type + "?id=" + m2x.id } }();
    l2x.bHG9x = function() { var CM3x = ["æ­Œå•", "ç”µå°èŠ‚ç›®", "åŠ¨æ€", "ä¸“è¾‘", "å•æ›²", "MV", "ä¸“æ æ–‡ç« "]; return function(C2x) { var bs2x = (C2x || "").split("_"); return CM3x[bs2x[2]] || "èµ„æº" } }();
    l2x.ccS5X = function(bD2x) { var qs = bD2x.length > 0 ? bD2x.substring(1) : "",
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length; for (i = 0; i < len; i++) { item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]); if (name.length) { args[name] = value } } return args };
    l2x.bHF9w = function(xH1x, NL6F) { var Tv8n = 0,
            dY4c = new Array;
        k2x.be2x(xH1x, function(V2x, s2x) { var db3x = a1x.cT3x("img");
            db3x.src = V2x;
            h2x.q2x(db3x, "load", function(s2x, d2x) { dY4c[s2x] = 1;
                Tv8n++; if (Tv8n == xH1x.length) NL6F(xH1x, dY4c) }.g2x(this, s2x));
            h2x.q2x(db3x, "error", function(d2x, s2x) { dY4c[s2x] = 0;
                Tv8n++; if (Tv8n == xH1x.length) NL6F(xH1x, dY4c) }.g2x(this, s2x)) }) };
    l2x.Tw8o = function(i2x, dD3x) { var m2x = [];
        k2x.be2x(i2x, function(r2x, s2x, ib5g) { m2x.push(dD3x(r2x, s2x, ib5g)) }); return m2x };
    l2x.UG8y = function(i2x, dD3x, ib5g) { var m2x = [];
        k2x.be2x(i2x, function(r2x, s2x) { if (dD3x.call(ib5g, r2x, s2x, i2x)) { m2x.push(r2x) } }); return m2x };
    l2x.ccP5U = function(bi2x) { return k2x.dM3x((bi2x || "").replace(/\s{2,}/g, " ").trim()) };
    l2x.bgP2x = function(bf2x) { if (bf2x.transNames && bf2x.transNames.length) { return bf2x.transNames[0] } else if (bf2x.alias && bf2x.alias.length) { return bf2x.alias[0] } };
    l2x.bHE9v = function(Qa7T) { if (Qa7T) { return Qa7T.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>") } };
    l2x.bgR2x = function(f2x) { var f2x = a1x.x2x(f2x),
            cZ3x = f2x && f2x.getElementsByTagName("textarea")[0],
            J2x = a1x.u2x(f2x, "key"),
            bgT2x = a1x.u2x(f2x, "simple") == "1",
            bHD9u = p2x.vs0x.fX5c(); if (!(f2x && cZ3x && J2x)) return; if (bgT2x) { bHD9u.rn8f(J2x, l2x.Eo3x(JSON.parse(cZ3x.value))) } else { bHD9u.rn8f(J2x, JSON.parse(cZ3x.value || cZ3x.defaultValue)) } f2x.innerHTML = ""; return J2x };
    l2x.ccM5R = function(oD8v) { if (!oD8v.onbeforelistload) { oD8v.onbeforelistload = function(d2x) { d2x.value = '<div class="u-load s-fc4"><i class="icn"></i> åŠ è½½ä¸­...</div>' } } if (!oD8v.onemptylist) { oD8v.onemptylist = function(d2x) { d2x.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (oD8v.emptyMsg || "æš‚æ—¶è¿˜æ²¡æœ‰æ•°æ®") + "</h3></div>" } } return oD8v };
    l2x.Eo3x = function(hr5w) { if (k2x.ep4t(hr5w)) { var ea4e = [];
            k2x.be2x(hr5w, function(bgT2x) { ea4e.push(bHC9t(bgT2x)) }); return ea4e } else { return bHC9t(hr5w) }

        function bHC9t(hr5w) { if (!hr5w) return null; var ea4e = { album: hr5w.al, alias: hr5w.alia || hr5w.ala || [], artists: hr5w.ar || [], commentThreadId: "R_SO_4_" + hr5w.id, copyrightId: hr5w.cp || 0, duration: hr5w.dt || 0, id: hr5w.id, mvid: hr5w.mv || 0, name: hr5w.name || "", cd: hr5w.cd, position: hr5w.no || 0, ringtone: hr5w.rt, rtUrl: hr5w.rtUrl, status: hr5w.st || 0, pstatus: hr5w.pst || 0, fee: hr5w.fee || 0, version: hr5w.v || 0, eq: hr5w.eq, songType: hr5w.t || 0, mst: hr5w.mst, score: hr5w.pop || 0, ftype: hr5w.ftype, rtUrls: hr5w.rtUrls, transNames: hr5w.tns, privilege: hr5w.privilege, lyrics: hr5w.lyrics }; return ea4e } };
    l2x.cuu0x = function() { var f2x = a1x.ne7X('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>åˆ†äº«æ‰“ä¸å¼€ï¼Ÿ</h3>" + '<p>è¯·ç‚¹å‡»å³ä¸Šè§’<br>é€‰æ‹©<span class="s-fc5">â€œåˆ†äº«åˆ°...â€</span></p>' + "</div></div></div>");
        document.body.appendChild(f2x);
        h2x.q2x(f2x, "click", function(d2x) { h2x.bh2x(d2x);
            a1x.cH3x(f2x) }) };
    l2x.lP7I = function(cu3x) { if (cu3x < 1e5) { return cu3x } else { return Math.floor(cu3x / 1e4) + "ä¸‡" } };
    l2x.um0x = function(cu3x, cZ3x) { return "<i>" + (cu3x ? "(" + cu3x + ")" : cZ3x) + "</i>" };
    l2x.bHA9r = function(t2x, hm5r) { var e2x = {}; if (!k2x.jZ6T(hm5r)) { return e2x } switch (parseInt(t2x)) {
            case 17:
                e2x.title = hm5r.name;
                e2x.author = (hm5r.radio || []).name;
                e2x.picUrl = hm5r.coverUrl;
                e2x.category = hm5r.radio.category; break;
            case 19:
                e2x.title = hm5r.name;
                e2x.author = l2x.wW1x(hm5r.artists);
                e2x.authors = l2x.wW1x(hm5r.artists, " / ");
                e2x.picUrl = hm5r.picUrl; break;
            case 13:
                e2x.title = hm5r.name;
                e2x.author = (hm5r.creator || []).nickname;
                e2x.picUrl = hm5r.coverImgUrl; break;
            case 18:
                e2x.title = hm5r.name;
                e2x.author = l2x.wW1x(hm5r.artists);
                e2x.picUrl = (hm5r.album || []).picUrl; break;
            case 20:
                e2x.title = hm5r.name;
                e2x.author = "";
                e2x.picUrl = hm5r.img1v1Url; break;
            case 21:
                e2x.title = hm5r.name;
                e2x.author = hm5r.artistName;
                e2x.authors = l2x.wW1x(hm5r.artists, " / ");
                e2x.picUrl = hm5r.newCover || hm5r.cover; break;
            case 70:
                e2x.title = hm5r.name;
                e2x.author = (hm5r.dj || []).nickname;
                e2x.picUrl = hm5r.picUrl;
                e2x.category = hm5r.category; break;
            default:
                break } return e2x };
    l2x.bHz9q = function() { return location.hostname.indexOf("igame.163.com") >= 0 };
    l2x.ccH5M = function(eH4L, uq0x, e2x) { var bL3x, bg2x, m2x; var jq6k = null; var Nz6t = 0; if (!e2x) e2x = {}; var Tz8r = function() { Nz6t = e2x.leading === false ? 0 : +(new Date);
            jq6k = null;
            m2x = eH4L.apply(bL3x, bg2x); if (!jq6k) bL3x = bg2x = null }; return function() { var fI4M = +(new Date); if (!Nz6t && e2x.leading === false) Nz6t = fI4M; var bhA2x = uq0x - (fI4M - Nz6t);
            bL3x = this;
            bg2x = arguments; if (bhA2x <= 0 || bhA2x > uq0x) { if (jq6k) { clearTimeout(jq6k);
                    jq6k = null } Nz6t = fI4M;
                m2x = eH4L.apply(bL3x, bg2x); if (!jq6k) bL3x = bg2x = null } else if (!jq6k && e2x.trailing !== false) { jq6k = setTimeout(Tz8r, bhA2x) } return m2x } };
    l2x.bHy9p = function(eH4L, uq0x, qz8r) { var jq6k, bg2x, bL3x, Nx6r, m2x; var Tz8r = function() { var gv5A = new Date - Nx6r; if (gv5A < uq0x && gv5A >= 0) { jq6k = setTimeout(Tz8r, uq0x - gv5A) } else { jq6k = null; if (!qz8r) { m2x = eH4L.apply(bL3x, bg2x); if (!jq6k) bL3x = bg2x = null } } }; return function() { bL3x = this;
            bg2x = arguments;
            Nx6r = new Date; var bhR2x = qz8r && !jq6k; if (!jq6k) jq6k = setTimeout(Tz8r, uq0x); if (bhR2x) { m2x = eH4L.apply(bL3x, bg2x);
                bL3x = bg2x = null } return m2x } };
    l2x.Nw6q = function(f2x, iw5B) { if (f2x) { var f2x = f2x.firstElementChild; if (f2x) { f2x.firstElementChild && (f2x = f2x.firstElementChild);
                f2x.setAttribute("xlink:href", "/style/pc/svg/" + iw5B) } } };
    l2x.bHx9o = function(eI4M) { if (!eI4M || !eI4M.length) { return } eI4M = /^#(.+?)#$/.exec(eI4M)[1];
        eI4M = eI4M.replace(/\s/g, " ");
        v2x.bq2x("/api/act/detail", { type: "json", method: "post", data: k2x.df3x({ actname: eI4M }), onload: function(Q2x) { if (!Q2x || Q2x.code != 200 || !Q2x.act) { n2x.Z2x.N2x({ type: 2, tip: "è¯¥è¯é¢˜æš‚æœªåˆ›å»º" }) } else { location.dispatch2("/activity?id=" + Q2x.act.actId) } }, onerror: function(bQ3x) { n2x.Z2x.N2x({ type: 2, tip: "æ“ä½œå¤±è´¥ï¼Œè¯·ç¨åŽå†è¯•" }) } }) };
    l2x.bhZ2x = function(Nt6n, wz1x) { if (!Nt6n || !wz1x) return false; if (Nt6n == wz1x) return true; return l2x.bhZ2x(Nt6n, wz1x.parentNode) };
    a1x.fD4H = function(bB2x, le6Y) { if (!bB2x) return null; if (!le6Y) return bB2x.firstChild; return a1x.I2x(bB2x, le6Y)[0] };
    l2x.ccE5J = function(hC5H) { return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hC5H) };
    l2x.cux0x = function(tt9k) { if (!tt9k) { return "0b" } var ccx5C = ["Bytes", "KB", "MB", "GB"]; var bd2x = Math.floor(Math.log(tt9k) / Math.log(1024)); return (tt9k / Math.pow(1024, Math.floor(bd2x))).toFixed(bd2x == 1 ? 0 : 1) + ccx5C[bd2x] };
    l2x.bHo8g = function(dl3x, fa4e, ccm5r) { if (!dl3x) return dl3x; var dF3x = k2x.fh4l(dl3x); if (dF3x <= fa4e) return dl3x; var bis2x = dF3x - dl3x.length,
            bit2x = dl3x.length - bis2x; var fG4K = Math.ceil(fa4e / 2),
            cce5j = fa4e,
            bHh8Z = 0; if (bis2x < fG4K) fG4K = fa4e - bis2x; if (bit2x < fa4e) fa4e = bit2x + Math.ceil((fa4e - bit2x) / 2); while (fG4K <= fa4e) { bHh8Z = k2x.fh4l(dl3x.substr(0, fG4K)); var biD2x = cce5j - bHh8Z; if (biD2x == 0) break; if (biD2x == 1) { var cbY5d = k2x.fh4l(dl3x.charAt(fG4K)); if (cbY5d == 1) { fG4K++; break } else { break } } fG4K += Math.floor(biD2x / 2) } return dl3x.substr(0, fG4K) + (!!ccm5r ? "" : "...") } })();
(function() {
    function cbV5a() { var zA2x = function(jo6i) { if (jo6i < -128) { return zA2x(128 - (-128 - jo6i)) } else if (jo6i >= -128 && jo6i <= 127) { return jo6i } else if (jo6i > 127) { return zA2x(-129 + jo6i - 127) } else { throw new Error("1001") } }; var cbU5Z = function(jo6i, bj2x) { return zA2x(jo6i + bj2x) }; var cbT5Y = function(TD8v, biX2x) { if (TD8v == null) { return null } if (biX2x == null) { return TD8v } var pp8h = []; var cbP5U = biX2x.length; for (var i = 0, bp2x = TD8v.length; i < bp2x; i++) { pp8h[i] = cbU5Z(TD8v[i], biX2x[i % cbP5U]) } return pp8h }; var cbO5T = function(TI8A) { if (TI8A == null) { return TI8A } var pp8h = []; var cbN5S = TI8A.length; for (var i = 0, bp2x = cbN5S; i < bp2x; i++) { pp8h[i] = zA2x(0 - TI8A[i]) } return pp8h }; var cbM5R = function(bjp3x, Nj6d) { bjp3x = zA2x(bjp3x);
            Nj6d = zA2x(Nj6d); return zA2x(bjp3x ^ Nj6d) }; var bHb8T = function(Nh6b, bjz3x) { if (Nh6b == null || bjz3x == null || Nh6b.length != bjz3x.length) { return Nh6b } var pp8h = []; var cbJ5O = Nh6b.length; for (var i = 0, bp2x = cbJ5O; i < bp2x; i++) { pp8h[i] = cbM5R(Nh6b[i], bjz3x[i]) } return pp8h }; var bGZ8R = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]; var cbF5K = function(cP3x) { var HO4S = [];
            HO4S.push(bGZ8R[cP3x >>> 4 & 15]);
            HO4S.push(bGZ8R[cP3x & 15]); return HO4S.join("") }; var cbE5J = function(tt9k) { var bp2x = tt9k.length; if (tt9k == null || bp2x < 0) { return new String("") } var HO4S = []; for (var i = 0; i < bp2x; i++) { HO4S.push(cbF5K(tt9k[i])) } return HO4S.join("") }; var bGX8P = function(TN8F) { if (TN8F == null || TN8F.length == 0) { return TN8F } var bjR3x = new String(TN8F); var pp8h = []; var bp2x = bjR3x.length / 2; var bj2x = 0; for (var i = 0; i < bp2x; i++) { var ni7b = parseInt(bjR3x.charAt(bj2x++), 16) << 4; var nE7x = parseInt(bjR3x.charAt(bj2x++), 16);
                pp8h[i] = zA2x(ni7b + nE7x) } return pp8h }; var cbB5G = function(cL3x) { if (cL3x == null || cL3x == undefined) { return cL3x } var Nc6W = encodeURIComponent(cL3x); var tt9k = []; var bGW8O = Nc6W.length; for (var i = 0; i < bGW8O; i++) { if (Nc6W.charAt(i) == "%") { if (i + 2 < bGW8O) { tt9k.push(bGX8P(Nc6W.charAt(++i) + "" + Nc6W.charAt(++i))[0]) } else { throw new Error("1009") } } else { tt9k.push(Nc6W.charCodeAt(i)) } } return tt9k }; var cby5D = function(uW0x) { var bd2x = 0;
            bd2x += (uW0x[0] & 255) << 24;
            bd2x += (uW0x[1] & 255) << 16;
            bd2x += (uW0x[2] & 255) << 8;
            bd2x += uW0x[3] & 255; return bd2x }; var cuy0x = function(bd2x) { var uW0x = [];
            uW0x[0] = bd2x >>> 24 & 255;
            uW0x[1] = bd2x >>> 16 & 255;
            uW0x[2] = bd2x >>> 8 & 255;
            uW0x[3] = bd2x & 255; return uW0x }; var cbr5w = function(dw3x, bkc3x, bp2x) { var ea4e = []; if (dw3x == null || dw3x.length == 0) { return ea4e } if (dw3x.length < bp2x) { throw new Error("1003") } for (var i = 0; i < bp2x; i++) { ea4e[i] = dw3x[bkc3x + i] } return ea4e }; var bkd3x = function(dw3x, bkc3x, qN8F, cbk5p, bp2x) { if (dw3x == null || dw3x.length == 0) { return qN8F } if (qN8F == null) { throw new Error("1004") } if (dw3x.length < bp2x) { throw new Error("1003") } for (var i = 0; i < bp2x; i++) { qN8F[cbk5p + i] = dw3x[bkc3x + i] } return qN8F }; var cbe5j = function(bp2x) { var bs2x = []; for (var i = 0; i < bp2x; i++) { bs2x[i] = 0 } return bs2x }; var caZ5e = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125]; var HM4Q = 64; var TQ8I = 64; var bGP8H = 4; var caV5a = function(pi8a) { var bGM8E = []; if (pi8a == null || pi8a == undefined || pi8a.length == 0) { return cbe5j(TQ8I) } if (pi8a.length >= TQ8I) { return cbr5w(pi8a, 0, TQ8I) } else { for (var i = 0; i < TQ8I; i++) { bGM8E[i] = pi8a[i % pi8a.length] } } return bGM8E }; var caS5X = function(TZ8R) { if (TZ8R == null || TZ8R.length % HM4Q != 0) { throw new Error("1005") } var bkF3x = []; var bj2x = 0; var caQ5V = TZ8R.length / HM4Q; for (var i = 0; i < caQ5V; i++) { bkF3x[i] = []; for (var j = 0; j < HM4Q; j++) { bkF3x[i][j] = TZ8R[bj2x++] } } return bkF3x }; var caM5R = function(bGJ8B) { var ni7b = bGJ8B >>> 4 & 15; var nE7x = bGJ8B & 15; var bj2x = ni7b * 16 + nE7x; return caZ5e[bj2x] }; var bGI8A = function(bkS3x) { if (bkS3x == null) { return null } var bGF8x = []; for (var i = 0, bp2x = bkS3x.length; i < bp2x; i++) { bGF8x[i] = caM5R(bkS3x[i]) } return bGF8x }; var cat4x = function(Hq4u, pi8a) { if (Hq4u == null) { return null } if (Hq4u.length == 0) { return [] } if (Hq4u.length % HM4Q != 0) { throw new Error("1005") } pi8a = caV5a(pi8a); var blb3x = pi8a; var blc3x = caS5X(Hq4u); var Ml5q = []; var cas4w = blc3x.length; for (var i = 0; i < cas4w; i++) { var blj3x = bGI8A(blc3x[i]);
                blj3x = bGI8A(blj3x); var blk3x = bHb8T(blj3x, blb3x); var car4v = cbT5Y(blk3x, cbO5T(blb3x));
                blk3x = bHb8T(car4v, pi8a);
                bkd3x(blk3x, 0, Ml5q, i * HM4Q, HM4Q);
                blb3x = blc3x[i] } var bGC8u = [];
            bkd3x(Ml5q, Ml5q.length - bGP8H, bGC8u, 0, bGP8H); var bp2x = cby5D(bGC8u); if (bp2x > Ml5q.length) { throw new Error("1006") } var pp8h = [];
            bkd3x(Ml5q, 0, pp8h, 0, bp2x); return pp8h }; var cai4m = function(UA8s, J2x) { if (UA8s == null) { return null } var bGy8q = new String(UA8s); if (bGy8q.length == 0) { return [] } var Hq4u = bGX8P(bGy8q); if (J2x == null || J2x == undefined) { throw new Error("1007") } var pi8a = cbB5G(J2x); return cat4x(Hq4u, pi8a) };
        this.cab4f = function(UA8s, J2x) { var bZZ4d = cai4m(UA8s, J2x); var blH3x = new String(cbE5J(bZZ4d)); var UB8t = []; var bZW4a = blH3x.length / 2; var bj2x = 0; for (var i = 0; i < bZW4a; i++) { UB8t.push("%");
                UB8t.push(blH3x.charAt(bj2x++));
                UB8t.push(blH3x.charAt(bj2x++)) } return UB8t.join("") } } window.settmusic = (new cbV5a).cab4f })();
(function() { var c2x = NEJ.P,
        bm2x = NEJ.F,
        H2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        J2x = "Search-tracks_",
        b2x;
    p2x.eO4S({ "search-suggest": { url: "/api/search/suggest/web", type: "POST", format: function(Q2x) { return Q2x }, onerror: function(Q2x, e2x) { if (Q2x.code == 407) { e2x.onForbidden() } } }, "search-multimatch": { url: "/api/search/suggest/multimatch", type: "GET" }, "search-list": { url: "/api/cloudsearch/get/web", type: "post", noescape: true, filter: function(e2x, bc2x) { window.log && window.log("searchkeywordclient", { type: this.bZS4W(parseInt(e2x.data.type)) || "suggest", keyword: e2x.data.s, offset: e2x.offset }) }, format: function(Q2x, e2x) { if (Q2x.abroad) { try { Q2x.result = JSON.parse(decodeURIComponent(settmusic(Q2x.result, p2x.sk))) } catch (e) {} } Q2x.result = Q2x.result || {}; var i2x, co3x, jv6p = [],
                    sz9q = e2x.data.s || "",
                    fV5a = e2x.data.limit,
                    t2x = parseInt(e2x.data.type) || 1,
                    m2x = Q2x.result; switch (t2x) {
                    case 1:
                        i2x = this.bGu8m(m2x.songs, e2x.data.hlpretag, e2x.data.hlposttag);
                        co3x = m2x.songCount; break;
                    case 10:
                        i2x = m2x.albums;
                        co3x = m2x.albumCount; break;
                    case 100:
                        i2x = m2x.artists;
                        co3x = m2x.artistCount; break;
                    case 1e3:
                        i2x = m2x.playlists;
                        co3x = m2x.playlistCount; break;
                    case 1002:
                        i2x = m2x.userprofiles;
                        co3x = m2x.userprofileCount; break;
                    case 1004:
                        i2x = m2x.mvs;
                        co3x = m2x.mvCount; break;
                    case 1006:
                        i2x = this.bGu8m(m2x.songs, e2x.data.hlpretag, e2x.data.hlposttag);
                        co3x = m2x.songCount; break;
                    case 1009:
                        var pe8W = m2x.djRadios; if (!!pe8W) { k2x.be2x(pe8W, function(A2x, s2x, bZN4R) { A2x.xid = A2x.id;
                                A2x.id = A2x.id + "_rad" }); if (pe8W.length) { this.rn8f("radio_search-" + e2x.data.s, pe8W) } } co3x = Math.min(m2x.djprogramCount, 500);
                        i2x = m2x.djprograms || []; if (e2x.data.isPub) { k2x.mz7s(pe8W, function(A2x, s2x, bZN4R) { A2x.stype = 1;
                                i2x.unshift(A2x) });
                            co3x = Math.min(i2x.length, 500) } break } this.z2x("onsearchload", Q2x); if (i2x && i2x.length) { for (var i = 0; i < fV5a; i++) { if (i < i2x.length) { jv6p.push(i2x[i]) } else { jv6p.push(null) } } } return { more: !0, total: Math.min(co3x || 0, sz9q.length < 3 ? 500 : 5e3), list: jv6p } }, onerror: function(Q2x, e2x) { e2x.onload(e2x, []); if (k2x.ge5j(e2x.onerror)) { e2x.onerror(Q2x) } } } });
    p2x.Cx3x = NEJ.C();
    b2x = p2x.Cx3x.O2x(p2x.hc5h);
    b2x.cl3x = function() { this.cs3x() };
    b2x.bZM4Q = function(J2x, e2x) { if (!J2x) return; if (!!this.bGt8l) v2x.jk6e(this.bGt8l);
        this.bGt8l = this.ck3x("search-suggest", NEJ.X({ data: { s: J2x, limit: 8 } }, e2x)) };
    b2x.bZK4O = function(J2x, e2x) { if (!J2x) return;
        this.ck3x("search-multimatch", NEJ.X({ data: { s: J2x } }, e2x)) };
    b2x.bGu8m = function() { var bZI4M = function(gY5d, bGr8j, bGo8g) { var bZw4A = gY5d.match(new RegExp(bGr8j + "(.+?)" + bGo8g, "gi")),
                cu3x = 0;
            k2x.be2x(bZw4A, function(r2x) { cu3x += r2x.replace(new RegExp(bGr8j, "g"), "").replace(new RegExp(bGo8g, "g"), "").length }); return cu3x }; return function(im5r, bZs4w, bZr4v) { var bGn8f = [];
            k2x.be2x(im5r, function(bf2x, bd2x) { bf2x = l2x.Eo3x(bf2x); var Ve8W = bf2x.lyrics || [],
                    dF3x = Ve8W.length,
                    iT5Y = 0,
                    co3x = 4,
                    Vn8f = { l: 0, v: 0 },
                    bne4i; if (dF3x > 4) { k2x.be2x(Ve8W, function(gY5d, s2x) { var bGk8c = bZI4M(gY5d, bZs4w, bZr4v); if (bGk8c > Vn8f.v) { Vn8f.v = bGk8c;
                            Vn8f.l = s2x } });
                    iT5Y = Vn8f.l;
                    iT5Y = Math.max(iT5Y, 0);
                    bne4i = dF3x - iT5Y - 4; if (bne4i < 0) iT5Y += bne4i;
                    bf2x.lrcAbstractEnd = iT5Y + co3x - 1 } else { bf2x.lrcAbstractEnd = dF3x - 1 } bf2x.lrcAbstractStart = iT5Y;
                bf2x.indexId = (Ve8W && Ve8W.length ? "L" : "NL") + bf2x.id;
                bGn8f.push(bf2x) }); return bGn8f } }();
    b2x.bZS4W = function(t2x) { switch (t2x) {
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
        cY3x = c2x("nm.i"),
        L2x = c2x("nm.m.sch"),
        b2x, K2x; var Vo8g = { songs: 1, artists: 100, albums: 10, playlists: 1e3, mvs: 1004 };
    L2x.LE5J = NEJ.C();
    b2x = L2x.LE5J.O2x(H2x.cz3x);
    b2x.cl3x = function(f2x) { this.cs3x();
        this.bR3x(f2x);
        this.P2x = p2x.Cx3x.fX5c() };
    b2x.bR3x = function(f2x) { this.o2x = f2x; var i2x = a1x.I2x(f2x, "j-flag");
        this.ex4B = i2x[0];
        this.bnA4E = i2x[1];
        this.cf3x = i2x[2];
        this.mu7n = i2x[3];
        h2x.q2x(this.ex4B, "input", this.fz4D.g2x(this));
        h2x.q2x(this.ex4B, "keyup", this.fz4D.g2x(this));
        h2x.q2x(this.ex4B, "focus", this.fW5b.g2x(this));
        h2x.q2x(this.bnA4E, "click", this.fW5b.g2x(this));
        h2x.q2x(this.ex4B, "blur", this.bnL4P.g2x(this));
        h2x.q2x(this.cf3x, "click", this.Vs8k.g2x(this));
        h2x.q2x(this.o2x, "keydown", this.bnO4S.g2x(this));
        h2x.q2x(this.o2x, "keypress", this.Vu8m.g2x(this));
        h2x.q2x(this.mu7n, "mouseover", this.Lw5B.g2x(this));
        h2x.q2x(this.mu7n, "mouseout", this.Lw5B.g2x(this)); if (this.ex4B.value) { this.ex4B.value = "" } if (this.ex4B.style.opacity != null) { this.ex4B.style.opacity = 1 } };
    b2x.fz4D = function(d2x) { if (d2x.type == "keyup" && d2x.keyCode == 8 || d2x.keyCode == 46) { this.De3x() } else if (d2x.type == "input" || d2x.type == "propertychange") { setTimeout(this.De3x.g2x(this), 0) } };
    b2x.fW5b = function() { this.xb1x(this.bnA4E, !1);
        a1x.y2x(this.o2x, "m-srch-fcs");
        this.ex4B.focus();
        this.De3x();
        a1x.y2x(a1x.I2x("g-topbar", "j-showoff")[0], "f-hide") };
    b2x.bnL4P = function() { if (!this.ex4B.value) { this.xb1x(this.bnA4E, !0) } var Dg3x = a1x.I2x(this.mu7n, "slt"); if (this.Vw8o(this.mu7n) && Dg3x.length > 0 && a1x.u2x(Dg3x[0], "type")) { var iw5B = Dg3x[0].href; if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(iw5B)) { window.log("search", { rid: RegExp.$2, type: RegExp.$1, keyword: this.ex4B.value }) } this.boe4i(Dg3x[0].href) } this.xb1x(this.mu7n, !1);
        a1x.w2x(this.o2x, "m-srch-fcs") };
    b2x.xb1x = function(f2x, kO6I) { a1x.X2x(f2x, "display", !kO6I ? "none" : "") };
    b2x.Vw8o = function(f2x) { return a1x.da3x(f2x, "display") != "none" };
    b2x.De3x = function() { var Dl3x = function(sv9m, cZ3x) { if (!cZ3x) return; return cZ3x.replace(new RegExp(l2x.bHL9C(sv9m), "gi"), function($1) { return '<span class="s-fc7 f-tdn">' + $1 + "</span>" }) }; var bZm4q = function(hC5H) { var gl5q = this.o2x.clientWidth > 250 ? 41 : 17; if (l2x.Ii4m(hC5H) > gl5q) { return l2x.zR2x(hC5H, gl5q) + "..." } else { return hC5H } }; var Vy8q = function(m2x) { return m2x.songs && m2x.songs.length || m2x.albums && m2x.albums.length || m2x.artists && m2x.artists.length || m2x.playlists && m2x.playlists.length }; var sX9O = function(sv9m, d2x) { if (!l2x.bHN9E(this.ex4B) || l2x.iW5b(this.ex4B.value)) { this.xb1x(this.mu7n, !1); return } d2x.keyword = k2x.dM3x(sv9m); var ds3x = a1x.bP3x("m-search-suggest", d2x, { mark: Dl3x.g2x(this, sv9m), cutStr: bZm4q.g2x(this) }),
                se9V = d2x.result.order;
            this.mu7n.innerHTML = ds3x;
            this.xb1x(this.mu7n, Vy8q(d2x.result) ? !0 : !1); if (!!se9V && !!se9V.length && Vo8g[se9V[0]]) { this.boo4s = { keyword: sv9m, type: Vo8g[se9V[0]] } } }; var bZl4p = function() { this.xb1x(this.mu7n, !1); return }; return function() { var A2x = this.ex4B.value; if (l2x.iW5b(A2x)) { this.xb1x(this.mu7n, !1); return } this.P2x.bZM4Q(A2x, { onload: sX9O.g2x(this, A2x), onForbidden: bZl4p.g2x(this) }) } }();
    b2x.Vu8m = function(d2x) { if (d2x.keyCode != 13) return; var Dg3x = a1x.I2x(this.mu7n, "slt"); if (this.Vw8o(this.mu7n) && Dg3x.length > 0) { this.boe4i(Dg3x[0].href);
            this.xb1x(this.mu7n, !1); return } this.Vs8k();
        this.xb1x(this.mu7n, !1) };
    b2x.bnO4S = function(d2x) { if (!this.Vw8o(this.mu7n)) return; var i2x = a1x.I2x(this.mu7n, "xtag"),
            dF3x = i2x.length,
            s2x = k2x.cV3x(i2x, function(r2x) { return a1x.by2x(r2x, "slt") }); switch (d2x.keyCode) {
            case 38:
                if (s2x >= 0) a1x.w2x(i2x[s2x], "slt");
                a1x.y2x(i2x[s2x <= 0 ? dF3x - 1 : s2x - 1], "slt"); break;
            case 40:
                if (s2x >= 0) a1x.w2x(i2x[s2x], "slt");
                a1x.y2x(i2x[(s2x + 1) % dF3x], "slt"); break } };
    b2x.Lw5B = function(d2x) { if (!this.Vw8o(this.mu7n)) return; var Lq5v, E2x = h2x.U2x(d2x),
            i2x = a1x.I2x(this.mu7n, "xtag"); if (E2x.tagName.toLowerCase() == "a") Lq5v = E2x;
        else if (E2x.parentNode.tagName.toLowerCase() == "a") Lq5v = E2x.parentNode; if (!Lq5v) return;
        k2x.be2x(i2x, function(r2x) { a1x.w2x(r2x, "slt");
            a1x.u2x(r2x, "type", "") }); if (d2x.type == "mouseout") return;
        a1x.y2x(Lq5v, "slt");
        a1x.u2x(Lq5v, "type", "mouse") };
    b2x.Vs8k = function() { var dI3x = location.hash,
            s2x = dI3x.indexOf("?"),
            bD2x = k2x.ho5t(dI3x.substring(s2x + 1));
        bD2x.s = this.ex4B.value; if (l2x.iW5b(bD2x.s)) return; if (!bD2x.type && this.boo4s && this.boo4s.keyword == bD2x.s) { bD2x.type = this.boo4s.type } this.boe4i("/search/#/?" + k2x.df3x(bD2x));
        this.ex4B.blur() };
    b2x.boe4i = function(V2x) { if (location.dispatch2) { location.dispatch2(V2x) } else { location.href = V2x } };
    L2x.LE5J.bZk4o = function() { var i2x = a1x.I2x(document.body, "j-suggest");
        k2x.be2x(i2x, function(r2x) { new L2x.LE5J(r2x) }) };
    L2x.LE5J.bZk4o() })();
(function() { var c2x = NEJ.P,
        bm2x = NEJ.F,
        H2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        p2x = c2x("nm.d"),
        b2x;
    p2x.eO4S({ "mv_artist-list": { url: "/api/artist/mvs", type: "get", format: function(Q2x) { return { total: Q2x.size || 0, list: Q2x.mvs || [] } } }, "album_artist-list": { url: "/api/artist/albums/{id}", type: "get", format: function(Q2x) { return { total: Q2x.size || 0, list: Q2x.hotAlbums || [] } } }, "ydcailing_post-list": { url: "/api/cailing/all", type: "POST", format: function(Q2x) { return Q2x.result.songs } }, "wo-list": { url: "/api/unicom/wo/content", format: function(Q2x, e2x) { if (e2x.offset == 0) { var oq7j = Q2x.data[0];
                    this.z2x("onfirstload", oq7j);
                    Q2x.data.splice(0, 1); return Q2x.data } else { return Q2x.data } } } });
    p2x.Dz3x = NEJ.C();
    b2x = p2x.Dz3x.O2x(p2x.hc5h);
    b2x.cl3x = function() { this.cs3x() };
    b2x.Lo5t = function() { var rY9P = "LOCAL_FLAG"; return function(t2x, bZf4j) { var j2x = this.BV2x(rY9P, {}); if (j2x[t2x]) { return true } else { if (!bZf4j) { j2x[t2x] = true;
                    this.vd0x(rY9P, j2x) } return false } } }() })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        M2x = c2x("nej.ut"),
        boH4L; if (!!M2x.nP7I) return;
    M2x.nP7I = NEJ.C();
    boH4L = M2x.nP7I.O2x(M2x.cz3x);
    boH4L.bk2x = function() { var bZe4i = function(d2x) { d2x.matched = d2x.source == d2x.target }; return function(e2x) { e2x.oncheck = e2x.oncheck || bZe4i;
            this.bl2x(e2x);
            this.bV3x = e2x.list;
            this.ig5l = e2x.dataset || "id";
            this.jy6s = e2x.selected || "js-selected" } }();
    boH4L.nO7H = function(A2x) { var E2x, d2x = { target: A2x };
        k2x.be2x(this.bV3x, function(f2x) { delete d2x.matched;
            d2x.source = a1x.u2x(f2x, this.ig5l);
            this.z2x("oncheck", d2x); if (!d2x.matched) { a1x.w2x(f2x, this.jy6s) } else { E2x = f2x;
                a1x.y2x(f2x, this.jy6s) } }, this); return E2x } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        a1x = c2x("nej.e"),
        M2x = c2x("nej.ut"),
        on7g; if (!!M2x.cK3x) return;
    M2x.cK3x = NEJ.C();
    on7g = M2x.cK3x.O2x(M2x.cz3x);
    on7g.cl3x = function() { this.iC5H = {};
        this.cs3x();
        this.bJ3x() };
    on7g.bk2x = function(e2x) { this.bl2x(e2x);
        this.bpe4i = e2x.umi || "";
        this.ze2x = e2x.dispatcher;
        this.GT4X = e2x.composite || Y2x;
        this.blq3x({ onshow: this.eZ4d.g2x(this), onhide: this.kn6h.g2x(this), onrefresh: this.ej4n.g2x(this), onmessage: this.qR8J.g2x(this), onbeforehide: this.bZd4h.g2x(this) }) };
    on7g.bC2x = function() { delete this.bpe4i;
        this.iC5H = {};
        this.bH3x() };
    on7g.sn9e = function(d2x) { if (!!d2x) d2x.stopped = !0 };
    on7g.bJ3x = bm2x;
    on7g.eZ4d = bm2x;
    on7g.kn6h = bm2x;
    on7g.ej4n = bm2x;
    on7g.qR8J = bm2x;
    on7g.bZd4h = bm2x;
    on7g.oO8G = function(ny7r, bE2x, eD4H) { this.ze2x.bpx4B({ to: ny7r, mode: eD4H || 0, data: bE2x, from: this.bpe4i }) };
    on7g.cuD0x = function(t2x, j2x) { this.ze2x.zb2x(t2x, { from: this.bpe4i, data: j2x }) };
    on7g.cuF0x = function() { this.ze2x.lE7x.apply(this.ze2x, arguments) };
    on7g.bYX4b = function() { return this.iC5H };
    a1x.VC8u = function() { if (!!window.dispatcher) { dispatcher.bGh8Z.apply(dispatcher, arguments) } } })();
(function() { var c2x = NEJ.P,
        bm2x = NEJ.F,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        M2x = c2x("nej.ut"),
        vS0x; if (!!M2x.dn3x) return;
    M2x.dn3x = NEJ.C();
    vS0x = M2x.dn3x.O2x(M2x.cK3x);
    vS0x.bYV4Z = function(e2x) { var bB2x; if (!bB2x) { var j2x = e2x.input || Y2x;
            bB2x = a1x.x2x(j2x.parent) } if (!bB2x) { var j2x = e2x.data || Y2x;
            bB2x = a1x.x2x(j2x.parent) } if (!bB2x) { bB2x = a1x.x2x(e2x.parent) } return bB2x };
    vS0x.eZ4d = function(e2x) { var bB2x = this.bYV4Z(e2x); if (!!bB2x && !!this.o2x) bB2x.appendChild(this.o2x);
        this.gB5G(e2x);
        this.bGg8Y("onshow", e2x);
        this.ej4n(e2x) };
    vS0x.ej4n = function(e2x) { this.fO5T(e2x);
        this.bGg8Y("onrefresh", e2x) };
    vS0x.kn6h = function() { this.kY6S();
        this.bYT4X();
        a1x.mA7t(this.o2x) };
    vS0x.bGf8X = function() { var fZ5e = /^onshow|onrefresh|delay$/; return function(bX3x) { return fZ5e.test(bX3x) } }();
    vS0x.bGb8T = bm2x;
    vS0x.bGg8Y = function() { var bGa8S = function(bD2x, e2x, bX3x, oG8y) { if (this.bGf8X(oG8y)) return; if (!!bD2x) bX3x += (bX3x.indexOf("?") > 1 ? "&" : "?") + bD2x; var cM3x = this.bGb8T(oG8y, e2x) || {};
            cM3x.location = e2x;
            cM3x.parent = this.iC5H[oG8y];
            this.ze2x.ie5j(bX3x, { input: cM3x }) }; return function(t2x, e2x) { if (!e2x.nodelay) { if (!!this.GT4X.delay) return; var bFY8Q = this.GT4X[t2x] || Y2x; if (bFY8Q.delay) return } var bD2x = k2x.df3x(e2x.param) || ""; if (t2x == "onrefresh") { k2x.dZ4d(this.GT4X, bGa8S.g2x(this, bD2x, e2x)) } k2x.dZ4d(bFY8Q, bGa8S.g2x(this, bD2x, e2x)) } }();
    vS0x.bYT4X = function() { var zt2x = function(bX3x, oG8y) { if (!this.bGf8X(oG8y)) this.ze2x.bo2x(bX3x) }; return function() { k2x.dZ4d(this.GT4X, zt2x, this);
            k2x.dZ4d(this.GT4X.onshow, zt2x, this);
            k2x.dZ4d(this.GT4X.onrefresh, zt2x, this) } }() })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        F2x = c2x("nm.m"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"),
        b2x, K2x;
    F2x.KY5d = NEJ.C();
    b2x = F2x.KY5d.O2x(H2x.cz3x);
    b2x.cl3x = function() { this.cs3x();
        this.o2x = a1x.x2x("g-topbar"); var i2x = a1x.I2x(this.o2x, "j-tflag");
        this.bqL4P = i2x[0];
        this.GM4Q = i2x[1];
        this.sY9P = i2x[2];
        this.bFX8P = i2x[3];
        this.bqX4b = i2x[4];
        this.bYD4H = H2x.nP7I.B2x({ list: this.bqL4P.getElementsByTagName("a"), selected: "z-slt", dataset: "module" });
        this.brc4g = H2x.nP7I.B2x({ list: this.bqX4b.getElementsByTagName("a"), selected: "z-slt", dataset: "module" });
        this.bU3x([
            [this.o2x, "click", this.KU5Z.g2x(this)],
            [this.GM4Q, "click", this.cv3x.g2x(this)],
            [this.GM4Q, "mouseout", this.bFW8O.g2x(this, 0)],
            [this.GM4Q, "mouseover", this.bFW8O.g2x(this, 1)]
        ]);
        window.scrollTopbar = this.bYB4F.g2x(this);
        window.matchNav = this.bFU8M.g2x(this);
        window.polling = this.qM8E.g2x(this);
        this.KM5R = p2x.Dz3x.B2x();
        this.bYy4C();
        this.GH4L(); var bD2x = k2x.ho5t(location.href.split("?")[1]) || {}; if (bD2x.market) { a1x.x2x("topbar-download-link").href = "/download?market=" + bD2x.market } var bav0x = a1x.I2x(this.o2x, "j-showoff"); if (bav0x && !this.KM5R.Lo5t("newMvSearch")) { a1x.w2x(bav0x[0], "f-hide");
            window.setTimeout(function() { a1x.y2x(bav0x[0], "f-hide") }, 5e3) } };
    b2x.qM8E = function(d2x) { var dI3x = l2x.Io4s(); if (!/^\/msg/.test(dI3x)) { var GF4J = 0;
            GF4J += d2x.comment;
            GF4J += d2x.forward;
            GF4J += d2x.msg;
            GF4J += d2x.notice; if (GF4J > 0) { this.sY9P.innerHTML = a1x.bP3x("m-topbar-mesg-count", { count: GF4J }) } else { this.sY9P.innerHTML = "" } var ew4A = "/at"; if (d2x.notice) ew4A = "/notify"; if (d2x.comment) ew4A = "/comment"; if (d2x.msg > 0) ew4A = "/private"; if (d2x.forward > 0) ew4A = "/at";
            this.sY9P.href = "/msg/#" + ew4A } else { this.sY9P.innerHTML = "" } var i2x = a1x.I2x(this.bqL4P, "j-t"); if (!/^\/friend/.test(dI3x)) { if (i2x && i2x.length) { a1x.X2x(i2x[0], "display", d2x.event > 0 ? "" : "none") } } else { a1x.X2x(i2x[0], "display", "none") } };
    b2x.cv3x = function(d2x) { var f2x = h2x.U2x(d2x, "d:action"); if (f2x) { switch (a1x.u2x(f2x, "action")) {
                case "login":
                    h2x.ce3x(d2x); var t2x = a1x.u2x(f2x, "type"); if (t2x) { if (t2x == "sina" || t2x == "tencent") top.open(f2x.href);
                        else top.login(t2x == "mobile" ? 0 : 3) } else { top.login() } break;
                case "logout":
                    h2x.ce3x(d2x);
                    top.logout(); break;
                case "viewStore":
                    if (!this.KM5R.Lo5t("storeNew")) { a1x.y2x(this.bay0x, "f-vhide") } break;
                case "viewLevel":
                    if (!this.KM5R.Lo5t("levelNew")) { a1x.y2x(this.baB0x, "f-vhide") } break } } };
    b2x.KU5Z = function(d2x) { var f2x = h2x.U2x(d2x, "d:action"); if (!f2x) return; var W2x = a1x.u2x(f2x, "action"); switch (W2x) {
            case "bilog":
                var baC0x = a1x.u2x(f2x, "logAction"),
                    baE0x = a1x.u2x(f2x, "logJson");
                window.log(baC0x, baE0x); break } };
    b2x.bFW8O = function(yT2x, d2x) { if (this.bFT8L) { this.bFT8L.style.display = !yT2x ? "none" : "" } };
    b2x.bYB4F = function(fT5Y) { a1x.X2x(this.o2x, "top", -fT5Y + "px") };
    b2x.bFU8M = function(ew4A, bYo4s) { this.bYD4H.nO7H(ew4A); if (ew4A == "discover") { a1x.y2x(this.bFX8P, "f-hide");
            a1x.w2x(this.bqX4b, "f-hide");
            window.g_topBarHeight = 105;
            this.brc4g.nO7H(bYo4s) } else { a1x.w2x(this.bFX8P, "f-hide");
            a1x.y2x(this.bqX4b, "f-hide");
            window.g_topBarHeight = 75 } };
    b2x.bYy4C = function() { var uS0x = a1x.x2x("g_iframe"); if (!uS0x) return; var gk5p = uS0x.contentWindow.document.getElementById("g_top");
        this.bFU8M(a1x.u2x(gk5p, "module"), a1x.u2x(gk5p, "sub")) };
    b2x.GH4L = function() { var dt3x = GUser || {},
            bYk4o = GUserAcc || {}; if (dt3x && dt3x.userId) { a1x.dT3x(this.GM4Q, "m-topbar-user-login", NEJ.X(dt3x, bYk4o));
            a1x.X2x(this.sY9P, "display", "") } else { this.GM4Q.innerHTML = a1x.hX5c("m-topbar-user-unlogin");
            this.sY9P.innerHTML = ""; var i2x = a1x.I2x(this.bqL4P, "j-t");
            a1x.X2x(i2x[0], "display", "none");
            a1x.X2x(this.sY9P, "display", "none") } var i2x = a1x.I2x(this.GM4Q, "j-uflag");
        this.bFT8L = i2x[0];
        this.cuL0x = i2x[1];
        this.baB0x = i2x[2];
        this.bay0x = i2x[3]; if (!this.KM5R.Lo5t("storeNew", true)) { a1x.w2x(this.bay0x, "f-vhide") } else { a1x.y2x(this.bay0x, "f-vhide") } if (!this.KM5R.Lo5t("levelNew", true)) { a1x.w2x(this.baB0x, "f-vhide") } else { a1x.y2x(this.baB0x, "f-vhide") } } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"),
        p2x = c2x("nm.d"),
        b2x, K2x;
    p2x.eO4S({ "polling-get": { type: "GET", url: "/api/pl/count", format: function(Q2x) { h2x.z2x(p2x.rH9y, "message", Q2x) } } });
    p2x.rH9y = NEJ.C();
    b2x = p2x.rH9y.O2x(p2x.hc5h);
    b2x.VY8Q = function() { this.ck3x("polling-get", {}) };
    b2x.uJ0x = function() { var eR4V; return function() { if (!!eR4V) return;
            eR4V = window.setInterval(this.VY8Q.g2x(this), 1e5);
            this.VY8Q() } }();
    H2x.fv4z.B2x({ event: "message", element: p2x.rH9y }) })();
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
                decoded += "ï¿½" + packet.length + "ï¿½" + packets[i] } return decoded }; var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
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
        parser.decodePayload = function(data) { if (data.charAt(0) == "ï¿½") { var ret = []; for (var i = 1, length = ""; i < data.length; i++) { if (data.charAt(i) == "ï¿½") { ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
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
            WebSocket.Wb8T(function() { io.Transport.websocket.prototype.open.apply(self, args) }); return this };
        Flashsocket.prototype.send = function() { var self = this,
                args = arguments;
            WebSocket.Wb8T(function() { io.Transport.websocket.prototype.send.apply(self, args) }); return this };
        Flashsocket.prototype.close = function() { WebSocket.Kv5A.length = 0;
            io.Transport.websocket.prototype.close.call(this); return this };
        Flashsocket.prototype.ready = function(socket, fn) {
            function init() { var options = socket.options,
                    port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"]; if (!Flashsocket.loaded) { if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") { WEB_SOCKET_SWF_LOCATION = path.join("/") } if (port !== 843) { WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port) } WebSocket.baZ0x();
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
            self.gw5B = WebSocket.bYi4m++;
            WebSocket.bFO8G[self.gw5B] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.kQ6K = {}; if (!protocols) { protocols = [] } else if (typeof protocols == "string") { protocols = [protocols] } setTimeout(function() { WebSocket.Wb8T(function() { WebSocket.oe7X.create(self.gw5B, url, protocols, proxyHost || null, proxyPort || 0, headers || null) }) }, 0) };
        WebSocket.prototype.send = function(data) { if (this.readyState == WebSocket.CONNECTING) { throw "INVALID_STATE_ERR: Web Socket connection has not been established" } var result = WebSocket.oe7X.send(this.gw5B, encodeURIComponent(data)); if (result < 0) { return true } else { this.bufferedAmount += result; return false } };
        WebSocket.prototype.close = function() { if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) { return } this.readyState = WebSocket.CLOSING;
            WebSocket.oe7X.close(this.gw5B) };
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) { if (!(type in this.kQ6K)) { this.kQ6K[type] = [] } this.kQ6K[type].push(listener) };
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) { if (!(type in this.kQ6K)) return; var events = this.kQ6K[type]; for (var i = events.length - 1; i >= 0; --i) { if (events[i] === listener) { events.splice(i, 1); break } } };
        WebSocket.prototype.dispatchEvent = function(event) { var events = this.kQ6K[event.type] || []; for (var i = 0; i < events.length; ++i) { events[i](event) } var handler = this["on" + event.type]; if (handler) handler(event) };
        WebSocket.prototype.bYg4k = function(flashEvent) { if ("readyState" in flashEvent) { this.readyState = flashEvent.readyState } if ("protocol" in flashEvent) { this.protocol = flashEvent.protocol } var jsEvent; if (flashEvent.type == "open" || flashEvent.type == "error") { jsEvent = this.bFN8F(flashEvent.type) } else if (flashEvent.type == "close") { jsEvent = this.bFN8F("close") } else if (flashEvent.type == "message") { var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.bYc4g("message", data) } else { throw "unknown event type: " + flashEvent.type } this.dispatchEvent(jsEvent) };
        WebSocket.prototype.bFN8F = function(type) { if (document.createEvent && window.Event) { var event = document.createEvent("Event");
                event.initEvent(type, false, false); return event } else { return { type: type, bubbles: false, cancelable: false } } };
        WebSocket.prototype.bYc4g = function(type, data) { if (document.createEvent && window.MessageEvent && !window.opera) { var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null); return event } else { return { type: type, data: data, bubbles: false, cancelable: false } } };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.oe7X = null;
        WebSocket.bFO8G = {};
        WebSocket.Kv5A = [];
        WebSocket.bYi4m = 0;
        WebSocket.loadFlashPolicyFile = function(url) { WebSocket.Wb8T(function() { WebSocket.oe7X.loadManualPolicyFile(url) }) };
        WebSocket.baZ0x = function() { if (WebSocket.oe7X) return; if (WebSocket.bYb4f) { window.WEB_SOCKET_SWF_LOCATION = WebSocket.bYb4f } if (!window.WEB_SOCKET_SWF_LOCATION) { console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf"); return } var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute"; if (WebSocket.bYa4e()) { container.style.left = "0px";
                container.style.top = "0px" } else { container.style.left = "-100px";
                container.style.top = "-100px" } var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, { hasPriority: true, swliveconnect: true, allowScriptAccess: "always" }, null, function(e) { if (!e.success) { console.error("[WebSocket] swfobject.embedSWF failed") } }) };
        WebSocket.cuN0x = function() { setTimeout(function() { WebSocket.oe7X = document.getElementById("webSocketFlash");
                WebSocket.oe7X.setCallerUrl(location.href);
                WebSocket.oe7X.setDebug(!!window.WEB_SOCKET_DEBUG); for (var i = 0; i < WebSocket.Kv5A.length; ++i) { WebSocket.Kv5A[i]() } WebSocket.Kv5A = [] }, 0) };
        WebSocket.cuP0x = function() { setTimeout(function() { try { var events = WebSocket.oe7X.receiveEvents(); for (var i = 0; i < events.length; ++i) { WebSocket.bFO8G[events[i].webSocketId].bYg4k(events[i]) } } catch (e) { console.error(e) } }, 0); return true };
        WebSocket.cuR0x = function(message) { console.log(decodeURIComponent(message)) };
        WebSocket.dz3x = function(message) { console.error(decodeURIComponent(message)) };
        WebSocket.Wb8T = function(task) { if (WebSocket.oe7X) { task() } else { WebSocket.Kv5A.push(task) } };
        WebSocket.bYa4e = function() { if (!window.navigator || !window.navigator.mimeTypes) { return false } var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"]; if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) { return false } return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false }; if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) { if (window.addEventListener) { window.addEventListener("load", function() { WebSocket.baZ0x() }, false) } else { window.attachEvent("onload", function() { WebSocket.baZ0x() }) } } })();
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
    EventEmitter.prototype.setMaxListeners = function(n) { if (!this.dH3x) this.dH3x = {};
        this.bFJ8B = n };
    EventEmitter.prototype.emit = function() { var type = arguments[0]; if (type === "error") { if (!this.dH3x || !this.dH3x.error || isArray(this.dH3x.error) && !this.dH3x.error.length) { if (this.domain) { var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er); return false } if (arguments[1] instanceof Error) { throw arguments[1] } else { throw new Error("Uncaught, unspecified 'error' event.") } return false } } if (!this.dH3x) return false; var handler = this.dH3x[type]; if (!handler) return false; if (typeof handler == "function") { if (this.domain) { this.domain.enter() } switch (arguments.length) {
                case 1:
                    handler.call(this); break;
                case 2:
                    handler.call(this, arguments[1]); break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]); break;
                default:
                    var l = arguments.length; var args = new Array(l - 1); for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                    handler.apply(this, args) } if (this.domain) { this.domain.exit() } return true } else if (isArray(handler)) { if (this.domain) { this.domain.enter() } var l = arguments.length; var args = new Array(l - 1); for (var i = 1; i < l; i++) args[i - 1] = arguments[i]; var listeners = handler.slice(); for (var i = 0, l = listeners.length; i < l; i++) { listeners[i].apply(this, args) } if (this.domain) { this.domain.exit() } return true } else { return false } };
    EventEmitter.prototype.addListener = function(type, listener) { if ("function" !== typeof listener) { throw new Error("addListener only takes instances of Function") } if (!this.dH3x) this.dH3x = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener); if (!this.dH3x[type]) { this.dH3x[type] = listener } else if (isArray(this.dH3x[type])) { this.dH3x[type].push(listener) } else { this.dH3x[type] = [this.dH3x[type], listener] } if (isArray(this.dH3x[type]) && !this.dH3x[type].warned) { var m; if (this.bFJ8B !== undefined) { m = this.bFJ8B } else { m = defaultMaxListeners } if (m && m > 0 && this.dH3x[type].length > m) { this.dH3x[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dH3x[type].length);
                console.trace() } } return this };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) { if ("function" !== typeof listener) { throw new Error(".once only takes instances of Function") } var self = this;

        function g() { self.removeListener(type, g);
            listener.apply(this, arguments) } g.listener = listener;
        self.on(type, g); return this };
    EventEmitter.prototype.removeListener = function(type, listener) { if ("function" !== typeof listener) { throw new Error("removeListener only takes instances of Function") } if (!this.dH3x || !this.dH3x[type]) return this; var list = this.dH3x[type]; if (isArray(list)) { var position = -1; for (var i = 0, length = list.length; i < length; i++) { if (list[i] === listener || list[i].listener && list[i].listener === listener) { position = i; break } } if (position < 0) return this;
            list.splice(position, 1) } else if (list === listener || list.listener && list.listener === listener) { delete this.dH3x[type] } return this };
    EventEmitter.prototype.removeAllListeners = function(type) { if (arguments.length === 0) { this.dH3x = {}; return this } var events = this.dH3x && this.dH3x[type]; if (!events) return this; if (isArray(events)) { events.splice(0) } else { this.dH3x[type] = null } return this };
    EventEmitter.prototype.listeners = function(type) { if (!this.dH3x) this.dH3x = {}; if (!this.dH3x[type]) this.dH3x[type] = []; if (!isArray(this.dH3x[type])) { this.dH3x[type] = [this.dH3x[type]] } return this.dH3x[type] } })();
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
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        l2x = c2x("nm.x"),
        di3x = c2x("nm.u"),
        p2x = c2x("nm.d"),
        Ko5t = c2x("pomelo"),
        dp3x = 0,
        b2x, K2x;
    p2x.eO4S({ "polling-init": { url: "/api/push/init", format: function(Q2x) { dp3x = 2; var rv8n = { domain: "music.163.com", host: MUSIC_CONFIG.pushHost, port: MUSIC_CONFIG.pushPort, key: MUSIC_CONFIG.pushKey, secret: "bec0b878892740c498505a85eb3dcec9" },
                    j2x = Q2x.account || Y2x,
                    cU3x = GUser.userId;
                Ko5t.init(rv8n.host, rv8n.port, true, this.bXU4Y.g2x(this, { user: cU3x, nonce: j2x.nonce, domain: rv8n.domain, productKey: rv8n.key, signature: j2x.signature, expire_time: j2x.expireTime })) }, onerror: function() { return this.bbu1x() } } });
    p2x.yN2x = NEJ.C();
    b2x = p2x.yN2x.O2x(p2x.hc5h);
    b2x.cl3x = function() { var oS8K = !1; return function(e2x) { if (!oS8K) { oS8K = !0 } this.cs3x(e2x);
            Ko5t.on("specify", this.qR8J.g2x(this));
            Ko5t.on("broadcast", this.qR8J.g2x(this)) } }();
    b2x.qR8J = function(d2x) { k2x.be2x(d2x, function(bE2x) { h2x.z2x(p2x.yN2x, "message", bE2x) }, this) };
    b2x.bbu1x = function() { var bA2x = 500; return function() { dp3x = 0;
            Ko5t.disconnect(); if (bA2x > 6e4) bA2x = 500;
            bA2x *= 2 } }();
    b2x.bXU4Y = function(e2x, bQ3x) { if (!!bQ3x) { return this.bbu1x() } dp3x = 3;
        Ko5t.registerAndBind(e2x, function(m2x) { if (m2x.code != 200) { return this.bbu1x() } dp3x = 4 }.g2x(this)) };
    b2x.cuT0x = function() { di3x.bXR4V.fX5c().cuU0x() };
    b2x.cuV0x = function() { di3x.bXR4V.fX5c().cuW0x() };
    b2x.bbE1x = function() { var oS8K = !1; return function() { if (oS8K) return;
            oS8K = !0;
            this.ck3x("polling-init", {}) } }();
    H2x.fv4z.B2x({ event: "message", element: p2x.yN2x }) })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        cP3x = c2x("nej.p"),
        k2x = c2x("nej.u"),
        n2x = c2x("nm.l"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        dj3x = c2x("api"),
        b2x, K2x; var gd5i = a1x.hW5b('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">ä»»ä½•äº§å“ä¸­çš„é—®é¢˜ï¼Œæ¬¢è¿Žåé¦ˆç»™æˆ‘ä»¬</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="è¯·è¾“å…¥åé¦ˆå†…å®¹"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="è¯·ç•™ä¸‹è”ç³»æ–¹å¼ï¼ˆç”µè¯ã€QQã€é‚®ç®±ï¼‰" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>å†…å®¹ä¸èƒ½ä¸ºç©ºï¼</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>å‘é€æ„è§</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>å– æ¶ˆ</i></a></div></div>');
    n2x.bbL1x = NEJ.C();
    b2x = n2x.bbL1x.O2x(n2x.dV3x);
    K2x = n2x.bbL1x.cg3x;
    b2x.bk2x = function(e2x) { e2x.title = "æ„è§åé¦ˆ";
        this.bl2x(e2x) };
    b2x.bZ3x = function() { this.ca3x = gd5i };
    b2x.bR3x = function() { this.cb3x();
        this.gH5M = {}; var Gv4z = a1x.I2x; var By2x = h2x.q2x;
        this.gH5M.submit_btn = Gv4z(this.o2x, "u-btn2")[0];
        this.gH5M.cancle_btn = Gv4z(this.o2x, "u-btn2")[1];
        this.gH5M.prompt_msg = Gv4z(this.o2x, "u-err")[0];
        this.gH5M.zs = Gv4z(this.o2x, "zs")[0];
        a1x.X2x(this.gH5M.zs, "display", "none");
        this.gH5M.fb_txt = Gv4z(this.o2x, "u-txt")[0];
        this.gH5M.contact = Gv4z(this.o2x, "u-txt")[1];
        a1x.fx4B(this.gH5M.fb_txt, "holder");
        a1x.fx4B(this.gH5M.contact, "holder"); if (a1x.by2x(this.gH5M.fb_txt.parentNode, "holder-parent")) { a1x.X2x(this.gH5M.fb_txt.parentNode, "display", "block") } if (a1x.by2x(this.gH5M.contact.parentNode, "holder-parent")) { a1x.X2x(this.gH5M.contact.parentNode, "display", "block") } By2x(this.gH5M.submit_btn, "click", this.bXO4S.g2x(this));
        By2x(this.gH5M.cancle_btn, "click", this.bXN4R.g2x(this));
        By2x(this.gH5M.prompt_msg, "msgShow", this.bXM4Q.g2x(this));
        By2x(this.gH5M.fb_txt, "keyup", this.tC9t.g2x(this));
        By2x(this.gH5M.fb_txt, "input", this.fl4p.g2x(this));
        By2x(this.gH5M.contact, "keyup", this.bXJ4N.g2x(this));
        By2x(this.gH5M.contact, "input", this.bFH8z.g2x(this));
        this.ks6m = p2x.hI5N.B2x() };
    b2x.bXO4S = function(d2x) { h2x.bh2x(d2x); if (this.ct3x()) return; var bi2x = this.gH5M.fb_txt.value.trim(); var bp2x = bi2x.length; var e2x = { type: "json", method: "post", noEnc: true }; var bFF8x = this.gH5M.contact.value.trim(); var Wn8f = { ua: navigator.userAgent, hash: top.location.hash, href: location.href, flash: l2x.bbT1x(), contact: bFF8x }; var j2x = { content: bi2x, client: "web", xInfo: JSON.stringify(Wn8f) },
            mF7y = this.ks6m.ciG7z(); if (mF7y && mF7y.length) { j2x.log = mF7y.join("\n") } if (bp2x == 0) { this.gH5M.prompt_msg.innerHTML = "åé¦ˆå†…å®¹ä¸èƒ½ä¸ºç©º";
            a1x.X2x(this.gH5M.prompt_msg, "display", "block"); return } if (bFF8x.length > 100) { this.gH5M.prompt_msg.innerHTML = "è”ç³»æ–¹å¼æœ€å¤šåªèƒ½è¾“å…¥100ä¸ªå­—ç¬¦";
            a1x.X2x(this.gH5M.prompt_msg, "display", "block"); return } this.ct3x(true);
        e2x.data = k2x.df3x(j2x);
        e2x.onload = this.bXF4J.g2x(this);
        e2x.onerror = this.hS5X.g2x(this);
        v2x.bq2x("/api/feedback/web", e2x) };
    b2x.fl4p = function(d2x) { var bp2x = this.gH5M.fb_txt.value.trim().length; if (bp2x > 0) a1x.X2x(this.gH5M.prompt_msg, "display", "none");
        cP3x.cS3x.browser == "ie" && cP3x.cS3x.version < "7.0" ? setTimeout(this.fz4D.g2x(this), 0) : this.fz4D() };
    b2x.tC9t = function(d2x) { if (d2x.keyCode === 8) this.fz4D() };
    b2x.fz4D = function() { var bp2x = this.gH5M.fb_txt.value.trim().length;
        this.gH5M.zs.innerHTML = !bp2x ? "0/140" : bp2x + "/140" };
    b2x.bFH8z = function(d2x) { var bp2x = this.gH5M.contact.value.trim().length; if (bp2x > 0) a1x.X2x(this.gH5M.prompt_msg, "display", "none") };
    b2x.bXJ4N = function(d2x) { if (d2x.keyCode === 8) this.bFH8z() };
    b2x.bXN4R = function(d2x) { h2x.ce3x(d2x);
        this.bo2x() };
    b2x.bXM4Q = function(d2x) { var f2x = h2x.U2x(d2x);
        f2x.innerHTML = "è¯·è¾“å…¥åé¦ˆå†…å®¹" };
    b2x.cuX0x = function(cuY0x) { var f2x = h2x.U2x(d2x);
        f2x.innerHTML = "" };
    b2x.bXF4J = function(m2x) { this.ct3x(false);
        this.bo2x();
        n2x.Z2x.N2x({ tip: "æ„è§å‘é€æˆåŠŸ", autoclose: true }) };
    b2x.hS5X = function(m2x) { this.ct3x(false);
        n2x.Z2x.N2x({ tip: "æ„è§å‘é€å¤±è´¥", autoclose: true }) };
    b2x.ct3x = function(cC3x) { return this.dL3x(this.gH5M.submit_btn, cC3x, "å‘é€æ„è§", "å‘é€ä¸­...") };
    b2x.N2x = function() { K2x.N2x.call(this);
        this.ct3x(false);
        this.gH5M.fb_txt.value = "";
        this.gH5M.contact.value = "";
        a1x.X2x(this.gH5M.prompt_msg, "display", "none");
        this.fz4D() };
    l2x.bXA4E = function(e2x) { e2x = e2x || {}; if (e2x.title === undefined) e2x.title = "æ„è§åé¦ˆ";
        n2x.bbL1x.N2x(e2x) };
    dj3x.feedback = l2x.feedback = l2x.bXA4E })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        M2x = c2x("nej.ui"),
        b2x; if (!!M2x.xA1x) return;
    M2x.xA1x = NEJ.C();
    b2x = M2x.xA1x.O2x(M2x.es4w);
    b2x.cl3x = function() { this.gw5B = this.bFA8s();
        this.cs3x() };
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.cn3x = e2x.index;
        this.fS5X = e2x.total;
        this.gL5Q = e2x.range;
        this.fQ5V(e2x.data) };
    b2x.bC2x = function() { this.bH3x();
        delete this.bb2x;
        delete this.cn3x;
        delete this.fS5X;
        delete this.gL5Q };
    b2x.hh5m = bm2x;
    b2x.bFA8s = function() { var fY5d = +(new Date); return function() { return "itm-" + ++fY5d } }();
    b2x.Cy3x = function() { return this.gw5B };
    b2x.hq5v = function() { return this.bb2x };
    b2x.fQ5V = function(j2x) { this.bb2x = j2x || {};
        this.hh5m(this.bb2x) } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        M2x = c2x("nej.ui"),
        b2x, K2x; if (!!M2x.rl8d) return;
    M2x.rl8d = NEJ.C();
    b2x = M2x.rl8d.O2x(M2x.xA1x);
    K2x = M2x.rl8d.cg3x;
    b2x.bk2x = function(e2x) { this.bXy4C = e2x.pkey || "id";
        this.bl2x(e2x) };
    b2x.BU2x = function(j2x) { this.z2x("ondelete", { ext: j2x, id: this.Cy3x(), data: this.hq5v(), body: this.kq6k() }) };
    b2x.JU5Z = function(j2x) { this.z2x("onupdate", { ext: j2x, id: this.Cy3x(), data: this.hq5v(), body: this.kq6k() }) };
    b2x.fQ5V = function(j2x) { K2x.fQ5V.apply(this, arguments);
        this.gw5B = this.bb2x[this.bXy4C] || this.bFA8s() } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        eT4X = NEJ.R,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        M2x = c2x("nej.ui"),
        b2x, hV5a, bcG1x; if (!!M2x.bcH1x) return;
    M2x.bcH1x = NEJ.C();
    b2x = M2x.bcH1x.O2x(M2x.es4w);
    b2x.bk2x = function(e2x) { this.Wq8i = NEJ.X({}, e2x);
        this.fB4F = NEJ.X({}, e2x);
        delete this.Wq8i.onchange;
        this.fB4F.onchange = this.gr5w.g2x(this);
        this.bl2x(e2x);
        this.bXx4B({ number: e2x.number, label: e2x.label || Y2x }) };
    b2x.bC2x = function() { this.bH3x(); if (!!this.ke6Y) { this.ke6Y.S2x();
            delete this.ke6Y } delete this.Wq8i;
        delete this.fB4F;
        this.bXw4A();
        this.o2x.innerHTML = "&nbsp;" };
    b2x.bZ3x = function() { this.li6c = hV5a };
    b2x.bXx4B = function(j2x) { a1x.dT3x(this.o2x, bcG1x, j2x); var fY5d = a1x.Ha4e();
        this.fB4F.list = a1x.I2x(this.o2x, "js-i-" + fY5d);
        this.fB4F.pbtn = (a1x.I2x(this.o2x, "js-p-" + fY5d) || eT4X)[0];
        this.fB4F.nbtn = (a1x.I2x(this.o2x, "js-n-" + fY5d) || eT4X)[0] };
    b2x.bR3x = function() { this.cb3x() };
    b2x.cuZ0x = function(j2x) { return a1x.bP3x(bcG1x, j2x) };
    b2x.gr5w = function(d2x) { if (this.JO5T) return; var s2x = d2x.index,
            co3x = d2x.total;
        this.JO5T = !0;
        this.JN5S(s2x, co3x);
        k2x.be2x(this.Ww8o, function(sk9b) { sk9b.JN5S(s2x, co3x) });
        this.JO5T = !1;
        this.z2x("onchange", d2x) };
    b2x.g2x = function(bB2x) { bB2x = a1x.x2x(bB2x); if (!bB2x) return this; var cm3x = NEJ.X({}, this.Wq8i);
        cm3x.parent = bB2x;
        cm3x.index = this.sj9a();
        cm3x.total = this.jI6C(); var sk9b = this.constructor.B2x(cm3x);
        sk9b.uC0x("onchange", this.fB4F.onchange); if (!this.Ww8o) this.Ww8o = [];
        this.Ww8o.push(sk9b); return this };
    b2x.bXw4A = function() { var bpm4q = function(sk9b, s2x, i2x) { sk9b.S2x();
            i2x.splice(s2x, 1) }; return function() { k2x.mz7s(this.Ww8o, bpm4q) } }();
    b2x.jN6H = function(s2x) { if (!this.ke6Y) return;
        this.ke6Y.jN6H(s2x) };
    b2x.sj9a = function() { if (!this.ke6Y) return 1; return this.ke6Y.sj9a() };
    b2x.jI6C = function() { if (!this.ke6Y) return 1; return this.ke6Y.jI6C() };
    b2x.JN5S = function(s2x, co3x) { if (!this.ke6Y) return;
        this.ke6Y.JN5S(s2x, co3x) };
    b2x.bdg1x = function(co3x) { if (!this.ke6Y) return;
        this.ke6Y.bdg1x(co3x) };
    hV5a = a1x.sg9X(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bcG1x = a1x.en4r('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"ä¸Šä¸€é¡µ"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"ä¸‹ä¸€é¡µ"}</a>{/if}{/trim}') })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        M2x = c2x("nej.ut"),
        b2x; if (!!M2x.Wx8p) return;
    M2x.Wx8p = NEJ.C();
    b2x = M2x.Wx8p.O2x(M2x.cz3x);
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.Wz8r = e2x.pbtn;
        this.cf3x = e2x.nbtn;
        this.WF9w = e2x.sbtn;
        this.WG9x = e2x.ebtn;
        this.ig5l = e2x.event || "click";
        this.jy6s = e2x.selected || "js-selected";
        this.nf7Y = e2x.disabled || "js-disabled";
        this.bXr4v(e2x.list);
        this.JN5S(e2x.index || 1, e2x.total || 1) };
    b2x.bC2x = function() { this.bH3x();
        delete this.bV3x;
        delete this.ig5l;
        delete this.Wz8r;
        delete this.cf3x;
        delete this.WF9w;
        delete this.WG9x;
        delete this.bFx8p;
        delete this.fS5X;
        delete this.cn3x;
        delete this.jy6s;
        delete this.nf7Y };
    b2x.bXr4v = function() { var bdt1x = function(f2x) { this.bV3x.push(f2x);
            this.bU3x([
                [f2x, this.ig5l, this.cJ3x.dW3x(this, 0)]
            ]) }; return function(i2x) { this.bV3x = [];
            this.bU3x([
                [this.Wz8r, "click", this.cJ3x.dW3x(this, -1)],
                [this.cf3x, "click", this.cJ3x.dW3x(this, 1)],
                [this.WF9w, "click", this.cJ3x.dW3x(this, -2)],
                [this.WG9x, "click", this.cJ3x.dW3x(this, 2)]
            ]);
            k2x.be2x(i2x, bdt1x, this) } }();
    b2x.Cw3x = function(f2x, s2x) { if (s2x == null) { f2x.innerText = "";
            a1x.X2x(f2x, "display", "none");
            a1x.w2x(f2x, this.jy6s) } else { f2x.innerText = s2x;
            a1x.X2x(f2x, "display", "");
            s2x == this.cn3x ? a1x.y2x(f2x, this.jy6s) : a1x.w2x(f2x, this.jy6s) } };
    b2x.bdA1x = function() { if (this.cn3x <= 1) { a1x.y2x(this.Wz8r, this.nf7Y);
            a1x.y2x(this.WF9w, this.nf7Y) } else { a1x.w2x(this.Wz8r, this.nf7Y);
            a1x.w2x(this.WF9w, this.nf7Y) } if (this.cn3x >= this.fS5X) { a1x.y2x(this.cf3x, this.nf7Y);
            a1x.y2x(this.WG9x, this.nf7Y) } else { a1x.w2x(this.cf3x, this.nf7Y);
            a1x.w2x(this.WG9x, this.nf7Y) } };
    b2x.WK9B = bm2x;
    b2x.bdD1x = function() { this.WK9B();
        this.bdA1x();
        this.z2x("onchange", { last: this.bFx8p, total: this.fS5X, index: this.cn3x, ext: this.bdH1x }) };
    b2x.bFw8o = function(s2x) { s2x = parseInt(s2x); if (isNaN(s2x) || this.fS5X == null) return !1;
        s2x = Math.max(1, Math.min(s2x, this.fS5X));
        this.bFx8p = this.cn3x;
        this.cn3x = s2x; return !0 };
    b2x.bdK1x = function(co3x) { co3x = parseInt(co3x); if (isNaN(co3x) || co3x < 1) return !1;
        this.fS5X = co3x; return !0 };
    b2x.cJ3x = function(d2x, eA4E) { h2x.ce3x(d2x); var E2x = h2x.U2x(d2x); if (!E2x || a1x.by2x(E2x, this.jy6s) || a1x.by2x(E2x, this.nf7Y)) return; var s2x = E2x.innerText; switch (eA4E) {
            case 1:
            case -1:
                s2x = this.cn3x + eA4E; break;
            case 2:
                s2x = this.fS5X; break;
            case -2:
                s2x = 1; break } this.jN6H(s2x) };
    b2x.sj9a = function() { return this.cn3x };
    b2x.jN6H = function(s2x) { var bXo4s = this.cn3x;
        this.bFw8o(s2x); if (bXo4s != this.cn3x) this.bdD1x(); return this };
    b2x.jI6C = function() { return this.fS5X };
    b2x.QY7R = function(co3x) { if (this.bdK1x(co3x) && this.cn3x != null) { this.cn3x = 1;
            this.bdD1x() } return this };
    b2x.bdg1x = function(co3x) { if (this.bdK1x(co3x)) { this.WK9B();
            this.bdA1x() } return this };
    b2x.JN5S = function(s2x, co3x) { if (!this.bdK1x(co3x) || !this.bFw8o(s2x)) return this;
        this.bdD1x(); return this } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        cN3x = c2x("nej.x"),
        M2x = c2x("nej.ut"),
        b2x; if (!!M2x.JC5H) return;
    M2x.JC5H = NEJ.C();
    b2x = M2x.JC5H.O2x(M2x.Wx8p);
    b2x.cl3x = function() { this.cs3x(); var f2x = a1x.cT3x("span", "zdot");
        f2x.innerText = "...";
        this.WP9G = [f2x.cloneNode(true), f2x] };
    b2x.bC2x = function() { this.bH3x();
        this.bFv8n() };
    b2x.bFv8n = function() { a1x.mA7t(this.WP9G[0]);
        a1x.mA7t(this.WP9G[1]) };
    b2x.WK9B = function() { this.bdH1x = { last: !1, first: !1, list: this.bV3x };
        this.bFv8n();
        this.Cw3x(this.bV3x[0], 1); var bF3x = 1,
            bp2x = this.bV3x.length; if (this.fS5X < bp2x) { for (var pd8V; bF3x < bp2x; bF3x++) { pd8V = bF3x + 1;
                this.Cw3x(this.bV3x[bF3x], pd8V > this.fS5X ? null : pd8V) } return } if (this.cn3x > 1) { var cu3x = Math.floor((bp2x - 2) / 2),
                bXl4p = this.fS5X - bp2x + 2,
                iq5v = Math.max(2, this.cn3x - cu3x); if (this.fS5X >= bp2x) { iq5v = Math.min(iq5v, bXl4p) } if (iq5v > 2) { this.bV3x[0].insertAdjacentElement("afterEnd", this.WP9G[0]);
                this.bdH1x.first = !0 } for (var s2x;; bF3x++) { s2x = iq5v + bF3x - 1; if (s2x > this.cn3x) break;
                this.Cw3x(this.bV3x[bF3x], s2x) } } if (this.cn3x < this.fS5X) { var s2x, iq5v = this.cn3x + 1; for (var i = 0, l = bp2x - 2;; i++, bF3x++) { s2x = iq5v + i; if (bF3x > l || s2x > this.fS5X) break;
                this.Cw3x(this.bV3x[bF3x], s2x) } if (s2x < this.fS5X) { this.bV3x[bF3x].insertAdjacentElement("beforeBegin", this.WP9G[1]);
                this.bdH1x.last = !0 } if (s2x <= this.fS5X) { this.Cw3x(this.bV3x[bF3x++], this.fS5X) } } for (; bF3x < bp2x; bF3x++) { this.Cw3x(this.bV3x[bF3x]) } };
    a1x.bXi4m = cN3x.bXi4m = function(bB2x, e2x) { var C2x = a1x.kL6F(bB2x); if (!C2x) return null; if (!M2x.Wu8m(C2x, M2x.JC5H)) { e2x = e2x || {}; var i2x = !e2x.clazz ? a1x.cQ3x(C2x) : a1x.I2x(C2x, e2x.clazz);
            e2x.pbtn = i2x.shift();
            e2x.nbtn = i2x.pop();
            e2x.list = i2x;
            delete e2x.clazz } return M2x.Wu8m(C2x, M2x.JC5H, e2x || Y2x) };
    cN3x.isChange = !0 })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        eT4X = NEJ.R,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        M2x = c2x("nej.ui"),
        b2x, K2x, gd5i; if (!!M2x.Jz5E) return;
    M2x.Jz5E = NEJ.C();
    b2x = M2x.Jz5E.O2x(M2x.bcH1x);
    K2x = M2x.Jz5E.cg3x;
    b2x.bk2x = function(e2x) { e2x.number = parseInt(e2x.number) || 9;
        this.bl2x(e2x);
        this.ke6Y = H2x.JC5H.B2x(this.fB4F) };
    b2x.gr5w = function(d2x) { if (!!this.Wq8i.noend) { var bFu8m = d2x.ext || Y2x,
                i2x = bFu8m.list || eT4X; if (bFu8m.last) { a1x.X2x(i2x[i2x.length - 1], "display", "none") } } K2x.gr5w.apply(this, arguments) } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        bd2x = c2x("nej.ui"),
        M2x = c2x("nej.ut"),
        b2x; if (!!M2x.WR9I) return;
    M2x.WR9I = NEJ.C();
    b2x = M2x.WR9I.O2x(M2x.cz3x);
    b2x.bk2x = function(e2x) { this.ix5C = {};
        this.bl2x(e2x);
        this.ih5m = a1x.x2x(e2x.parent);
        this.eL4P = { parent: this.ih5m };
        this.qj8b = parseInt(e2x.limit) || 10;
        this.vY0x = parseInt(e2x.first) || this.qj8b;
        this.bXg4k(e2x.item);
        this.bXb4f(e2x.cache || Y2x);
        this.bXa4e(e2x.pager || Y2x);
        this.fQ5V() };
    b2x.bC2x = function() { this.z2x("onbeforerecycle");
        this.Js5x();
        this.bH3x(); if (this.ix5C.clear) { this.P2x.tn9e(this.ix5C.key) } this.P2x.S2x(); if (!!this.iu5z) { this.iu5z.S2x();
            delete this.iu5z } delete this.bFn8f;
        delete this.fB4F;
        delete this.WT9K;
        delete this.P2x;
        delete this.ih5m;
        delete this.Jq5v;
        delete this.eL4P;
        delete this.ix5C };
    b2x.bFm8e = function() { var cO3x = /\{(.*?)\}/gi,
            bWV4Z = function(pG8y, j2x) { return (pG8y || "{id}{seed}").replace(cO3x, function($1, $2) { var A2x = j2x[$2]; return A2x == null ? $1 : A2x }) }; return function(C2x) { var J2x = bWV4Z(this.eL4P.jstIdTempalte, { id: C2x, seed: a1x.Ha4e() }); if (!this.eL4P.jstIdType) { return a1x.x2x(J2x) } else if (this.eL4P.jstIdType == 1) { return (a1x.I2x(this.ih5m, J2x) || [])[0] } } }();
    b2x.yA1x = function(bF3x, bj2x, fV5a, bp2x) { var m2x = { index: 1, total: 1 }; if (bj2x >= bF3x) { m2x.index = Math.floor((bj2x - bF3x) / fV5a) + 2 } if (bp2x > bF3x) { m2x.total = Math.ceil((bp2x - bF3x) / fV5a) + 1 } return m2x };
    b2x.bFl8d = function(J2x) { delete this.Jq5v;
        this.Gm4q = J2x;
        this.bU3x([
            [this.ih5m, "click", this.bWT4X.g2x(this)]
        ]) };
    b2x.bXg4k = function(r2x) { if (k2x.fi4m(r2x)) { this.bFl8d(r2x); return } NEJ.X(this.eL4P, r2x); var dE3x = this.eL4P.klass;
        delete this.eL4P.klass; if (k2x.fi4m(dE3x)) { this.bFl8d(dE3x); return } delete this.Gm4q;
        this.Jq5v = dE3x;
        this.eL4P.ondelete = this.z2x.g2x(this, "ondelete");
        this.eL4P.onupdate = this.z2x.g2x(this, "onupdate") };
    b2x.bXb4f = function(R2x) { var dE3x = R2x.klass,
            jm6g = NEJ.X({}, R2x);
        this.ix5C.key = jm6g.lkey;
        this.ix5C.data = jm6g.data || {};
        this.ix5C.clear = !!jm6g.clear;
        this.eL4P.pkey = jm6g.key || "id";
        jm6g.onlistload = this.bfb2x.g2x(this);
        jm6g.onpullrefresh = this.bWS4W.g2x(this); if (!!dE3x && "onlistchange" in dE3x) { this.bU3x([
                [dE3x, "listchange", this.bfd2x.g2x(this)]
            ]) } else { jm6g.onitemadd = this.WU9L.g2x(this);
            jm6g.onitemdelete = this.WX9O.g2x(this);
            jm6g.onitemupdate = this.bFk8c.g2x(this) } this.P2x = (dE3x || M2x.QB7u).B2x(jm6g); if (R2x.total != null) { this.P2x.QY7R(this.ix5C.key, R2x.total) } if (!!R2x.list) { this.P2x.rn8f(this.ix5C.key, R2x.list) } };
    b2x.bXa4e = function(sk9b) { this.bFn8f = sk9b.klass || bd2x.Jz5E;
        this.fB4F = NEJ.X({}, sk9b); if (k2x.ep4t(sk9b.parent)) { this.fB4F.parent = sk9b.parent[0];
            this.Ro7h = sk9b.parent.slice(1); if (!this.Ro7h || !this.Ro7h.length) { delete this.Ro7h } } delete this.fB4F.klass };
    b2x.Js5x = function() { var fZ5e = /^(?:table|tr|tbody|ul|ol|select)$/i; return function() { this.z2x("onbeforelistclear", { parent: this.ih5m }); if (!!this.fd4h && this.fd4h.length > 0) { this.fd4h = this.Jq5v.S2x(this.fd4h);
                delete this.fd4h } if (fZ5e.test(this.ih5m.tagName)) { a1x.bHU9L(this.ih5m) } else { this.ih5m.innerHTML = "" } } }();
    b2x.bfn2x = function(WY9P) { if (!!this.fB4F.fixed) return;
        a1x.X2x(this.fB4F.parent, "display", WY9P);
        k2x.be2x(this.Ro7h, function(bB2x) { a1x.X2x(bB2x, "display", WY9P) }, this) };
    b2x.bft2x = function() { var s2x = this.fB4F.index || 1;
        delete this.fB4F.index; if (!!this.iu5z) { s2x = this.iu5z.sj9a() } this.yy1x({ last: s2x, index: s2x }) };
    b2x.yy1x = function(d2x) { this.z2x("onpagechange", d2x) };
    b2x.bFj8b = function(bj2x) { this.ix5C.offset = bj2x;
        this.RD7w() };
    b2x.bFi8a = function(e2x) { return e2x };
    b2x.RD7w = function() { this.Ri7b(); var j2x = this.ix5C.data;
        j2x.offset = this.ix5C.offset; var oq7j = j2x.offset == 0;
        j2x.total = oq7j;
        this.ix5C.limit = oq7j ? this.vY0x : this.qj8b;
        j2x.limit = this.ix5C.limit;
        this.P2x.no7h(this.bFi8a(NEJ.X({}, this.ix5C))) };
    b2x.bfb2x = function(e2x) { if (e2x.key != this.ix5C.key || e2x.offset != this.ix5C.offset) return;
        this.Xb9S(); var i2x = this.P2x.gN5S(e2x.key); if (!i2x || !i2x.length) { this.bfG2x(); return } var fV5a = e2x.limit,
            bj2x = e2x.offset; if (this.bfH2x(i2x, bj2x, fV5a)) return;
        this.z2x("onbeforelistrender", { list: i2x, offset: bj2x, parent: this.ih5m }); if (!!this.Gm4q) { this.eL4P.xlist = i2x;
            this.eL4P.beg = bj2x;
            this.eL4P.end = Math.min(i2x.length, bj2x + fV5a) - 1;
            this.eL4P.act = "list"; var ds3x = a1x.bP3x(this.Gm4q, this.eL4P);
            this.Rd7W(ds3x) } else { this.eL4P.limit = fV5a;
            this.eL4P.offset = bj2x; var gz5E = a1x.zY2x(i2x, this.Jq5v, this.eL4P);
            this.QZ7S(gz5E) } this.z2x("onafterlistrender", { list: i2x, offset: bj2x, parent: this.ih5m }) };
    b2x.bWS4W = function(e2x) { if (!this.WT9K) return;
        delete this.WT9K;
        this.Xb9S("onafterpullrefresh");
        this.fQ5V() };
    b2x.bFh8Z = function(s2x, co3x) { if (!!this.iu5z) { var yU2x = this.iu5z.sj9a(),
                bWI4M = this.iu5z.jI6C(); if (yU2x > co3x || co3x != bWI4M) { this.iu5z.S2x();
                delete this.iu5z;
                this.yy1x({ last: yU2x, index: Math.min(s2x, co3x) }); return !0 } } else { this.fB4F.index = s2x;
            this.fB4F.total = co3x;
            this.iu5z = this.bFn8f.B2x(this.fB4F);
            this.iu5z.uC0x("onchange", this.yy1x.g2x(this));
            k2x.be2x(this.Ro7h, function(bB2x) { this.iu5z.g2x(bB2x) }, this) } };
    b2x.Xc9T = function() { var fY5d = +(new Date); return function(j2x) { var C2x = j2x[this.eL4P.pkey]; if (!C2x) { j2x["dirty-data"] = !0;
                j2x[this.eL4P.pkey] = "dirty-" + fY5d++ } return j2x } }();
    b2x.Xd9U = function(j2x) { var C2x = j2x[this.eL4P.pkey]; if (!!j2x["dirty-data"]) { delete j2x["dirty-data"];
            delete j2x[this.eL4P.pkey] } return C2x };
    b2x.Xf9W = function() { var bWy3x = function(jU6O, lI7B) { this.ih5m.insertAdjacentElement(jU6O, lI7B) }; return function(jU6O, j2x) { var Hh4l = [j2x]; if (!!this.Gm4q) { this.eL4P.xlist = Hh4l;
                this.eL4P.beg = 0;
                this.eL4P.end = 0;
                this.eL4P.act = "add";
                this.Rd7W(a1x.bP3x(this.Gm4q, this.eL4P), jU6O) } else { this.eL4P.limit = 1;
                this.eL4P.offset = 0;
                this.eL4P.parent = bWy3x.g2x(this, jU6O); var gz5E = a1x.zY2x(Hh4l, this.Jq5v, this.eL4P);
                this.eL4P.parent = this.ih5m;
                this.QZ7S(gz5E) } } }();
    b2x.Ri7b = bm2x;
    b2x.Xb9S = function(T2x) { var d2x = { parent: this.ih5m };
        this.z2x(T2x || "onafterlistload", d2x); if (!d2x.stopped) { a1x.mA7t(this.ci3x) } };
    b2x.bfH2x = bm2x;
    b2x.Xh9Y = function(bE2x, jU6O) { if (k2x.fi4m(bE2x)) { if (!this.ci3x) this.ci3x = a1x.cT3x("div");
            this.ci3x.innerHTML = bE2x } else { this.ci3x = bE2x } this.ih5m.insertAdjacentElement(jU6O || "beforeEnd", this.ci3x) };
    b2x.wy1x = function(T2x, ky6s, jU6O) { var d2x = { parent: this.ih5m };
        this.z2x(T2x, d2x); if (!d2x.stopped) { this.Xh9Y(d2x.value || ky6s, jU6O) } };
    b2x.bfG2x = bm2x;
    b2x.Rd7W = bm2x;
    b2x.QZ7S = bm2x;
    b2x.bWT4X = function() { var fZ5e = /^(?:delete|update)$/; return function(d2x) { var f2x = h2x.U2x(d2x, "d:action"); if (!f2x) return; var W2x = a1x.u2x(f2x, "action"); if (!fZ5e.test(W2x)) return; var C2x = a1x.u2x(f2x, "id"); if (!C2x) return; var r2x = this.P2x.eh4l(C2x); if (!r2x) return;
            h2x.bh2x(d2x);
            this.z2x("on" + W2x, { data: r2x, id: r2x[this.eL4P.pkey], body: a1x.x2x(this.bFm8e(C2x)) }) } }();
    b2x.WU9L = bm2x;
    b2x.RC7v = function(d2x) { var j2x = d2x.data || {},
            e2x = { data: j2x, key: this.ix5C.key, id: j2x[this.eL4P.pkey] };
        this.z2x("onbeforedelete", e2x);
        this.P2x.Jf5k(e2x) };
    b2x.WX9O = bm2x;
    b2x.RB7u = function(d2x) { var j2x = d2x.data || {},
            e2x = { data: j2x, key: this.ix5C.key };
        this.z2x("onbeforeupdate", e2x);
        this.P2x.RE7x(e2x) };
    b2x.bFk8c = function(d2x) { this.Qx7q(d2x, "onafterupdate"); if (d2x.stopped) return; var C2x = d2x.data[this.eL4P.pkey]; if (!!this.fd4h) { var r2x = a1x.bLI0x(C2x); if (!!r2x) r2x.fQ5V(d2x.data) } else { var f2x = a1x.x2x(C2x + "" + a1x.Ha4e()); if (!f2x) return; var i2x = this.P2x.gN5S(d2x.key),
                s2x = k2x.cV3x(i2x, d2x.data); if (s2x < 0) return;
            this.eL4P.list = i2x;
            this.eL4P.beg = s2x;
            this.eL4P.end = s2x;
            this.eL4P.act = "update"; var ds3x = a1x.bP3x(this.Gm4q, this.eL4P);
            f2x.insertAdjacentHTML("afterEnd", ds3x);
            a1x.cH3x(f2x) } };
    b2x.Qx7q = function(d2x, T2x) { var r2x = d2x.data; if (!r2x || r2x[this.eL4P.pkey] == null) { this.z2x("onerror", d2x);
            d2x.stopped = !0 } if (!d2x.stopped) { this.z2x(T2x, d2x) } };
    b2x.bge2x = bm2x;
    b2x.bgi2x = bm2x;
    b2x.bfd2x = function(d2x) { if (d2x.key != this.ix5C.key) return; switch (d2x.action) {
            case "add":
                this.WU9L(d2x); break;
            case "delete":
                this.WX9O(d2x); break;
            case "update":
                this.bFk8c(d2x); break;
            case "refresh":
                this.fQ5V(); break;
            case "unshift":
                this.bgi2x(d2x.offset, d2x.limit); break;
            case "append":
                this.bge2x(d2x.offset, d2x.limit); break } };
    b2x.ov8n = function(r2x) { this.RB7u({ data: r2x }) };
    b2x.lJ7C = function(r2x) { this.RC7v({ data: r2x }) };
    b2x.rA8s = function(r2x) { this.P2x.iD5I({ data: r2x, key: this.ix5C.key }) };
    b2x.rt8l = function() { return this.P2x };
    b2x.bgn2x = function(j2x) { this.Xf9W("afterBegin", this.Xc9T(j2x)); return this.Xd9U(j2x) };
    b2x.bFf8X = function(j2x) { this.Xf9W("beforeEnd", this.Xc9T(j2x)); return this.Xd9U(j2x) };
    b2x.fQ5V = function() { this.Js5x();
        this.bft2x() };
    b2x.cva0x = function() { this.P2x.tn9e(this.ix5C.key);
        this.fQ5V() };
    b2x.bcK1x = function() { if (!!this.WT9K) return;
        this.WT9K = !0;
        this.wy1x("onbeforepullrefresh", "åˆ—è¡¨åˆ·æ–°ä¸­...", "afterBegin");
        this.P2x.bcK1x({ key: this.ix5C.key, data: this.ix5C.data }) };
    b2x.jI6C = function() { return this.P2x.jI6C(this.ix5C.key) };
    b2x.bFd8V = function() { return this.iu5z };
    b2x.RK7D = function() { return this.P2x.RK7D(this.ix5C.key) };
    b2x.bWq3x = function() { return this.fd4h } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        eT4X = NEJ.R,
        k2x = c2x("nej.u"),
        a1x = c2x("nej.e"),
        M2x = c2x("nej.ut"),
        b2x, K2x; if (!!M2x.iA5F) return;
    M2x.iA5F = NEJ.C();
    b2x = M2x.iA5F.O2x(M2x.WR9I);
    K2x = M2x.iA5F.cg3x;
    b2x.yA1x = function(bj2x, bp2x) { return K2x.yA1x.call(this, this.vY0x, bj2x, this.qj8b, bp2x) };
    b2x.bgx2x = function(s2x) { var bj2x = 0; if (s2x > 1) bj2x = this.vY0x + (s2x - 2) * this.qj8b; return bj2x };
    b2x.yy1x = function(d2x) { K2x.yy1x.apply(this, arguments); if (!d2x.stopped) { this.bFj8b(this.bgx2x(d2x.index)) } };
    b2x.Ri7b = function() { this.Js5x();
        this.wy1x("onbeforelistload", "åˆ—è¡¨åŠ è½½ä¸­...") };
    b2x.Xb9S = function() { K2x.Xb9S.apply(this, arguments);
        this.Js5x() };
    b2x.bfH2x = function(i2x, bj2x, fV5a) { var bt2x = this.yA1x(bj2x, i2x.length); if (this.bFh8Z(bt2x.index, bt2x.total)) return !0;
        this.bfn2x(bt2x.total > 1 ? "" : "none") };
    b2x.bfG2x = function() { this.wy1x("onemptylist", "æ²¡æœ‰åˆ—è¡¨æ•°æ®ï¼") };
    b2x.Xh9Y = function(bE2x, jU6O) { if (!jU6O && k2x.fi4m(bE2x)) { this.ih5m.innerHTML = bE2x; return } K2x.Xh9Y.apply(this, arguments) };
    b2x.Rd7W = function(ds3x) { this.ih5m.innerHTML = ds3x };
    b2x.QZ7S = function(gz5E) { this.fd4h = gz5E };
    b2x.WU9L = function(d2x) { this.Qx7q(d2x, "onafteradd"); if (!d2x.stopped) this.fQ5V() };
    b2x.WX9O = function(d2x) { this.Qx7q(d2x, "onafterdelete"); if (!d2x.stopped) this.fQ5V() };
    b2x.bge2x = function(bj2x, fV5a) { var s2x = 1; if (!!this.iu5z) { s2x = this.iu5z.sj9a() } var iT5Y = this.bgx2x(s2x),
            gC5H = iT5Y + (s2x > 1 ? this.qj8b : this.vY0x); if (bj2x >= gC5H && !!this.iu5z) { var bt2x = this.yA1x(0, this.jI6C());
            this.iu5z.bdg1x(bt2x.total);
            this.bfn2x(bt2x.total > 1 ? "" : "none") } else { this.fQ5V() } };
    b2x.bgi2x = function(bj2x, fV5a) { var s2x = 1; if (!!this.iu5z) { s2x = this.iu5z.sj9a() } var iT5Y = this.bgx2x(s2x),
            bt2x = this.yA1x(iT5Y, this.jI6C());
        this.yy1x({ last: s2x, index: bt2x.index }) } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"),
        D2x = c2x("nm.w"),
        fa4e = 40,
        b2x, K2x;
    D2x.Xm9d = NEJ.C();
    b2x = D2x.Xm9d.O2x(H2x.cz3x);
    K2x = D2x.Xm9d.cg3x;
    b2x.cl3x = function() { this.cs3x() };
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.Qg7Z = e2x.inputer;
        this.bgD2x = e2x.tipper;
        this.bU3x([
            [this.Qg7Z, "input", this.fl4p.g2x(this)]
        ]) };
    b2x.bC2x = function() { this.bH3x();
        this.Gd4h(null, null) };
    b2x.fl4p = function(d2x) { if (d2x && d2x.type == "keyup" && (d2x.keyCode != 8 || d2x.keyCode != 68)) return; var T2x = this.Qg7Z.value,
            cvb0x; if (l2x.Ii4m(T2x) > fa4e) { this.Qg7Z.value = l2x.zR2x(T2x, fa4e);
            this.Gd4h("æ­Œå•åä¸èƒ½è¶…è¿‡20ä¸ªæ±‰å­—æˆ–40ä¸ªè‹±æ–‡å­—ç¬¦ï¼", arguments.callee.g2x(this)) } else if (T2x.indexOf("#") >= 0 || T2x.indexOf("@") >= 0) { this.Gd4h("æ­Œå•åä¸èƒ½åŒ…å«å­—ç¬¦â€œ@â€å’Œâ€œ#â€ï¼") } else { this.Gd4h(null, null);
            this.z2x("onchange", { value: T2x }) } };
    b2x.bWm3x = function() { this.fl4p() };
    b2x.Gd4h = function() { var C2x = 0; return function(dl3x, bEV8N) { if (!!C2x) window.clearTimeout(C2x); if (!dl3x) { a1x.y2x(this.bgD2x, "f-vhide");
                this.bET8L = !1; return } this.bgD2x.innerHTML = '<i class="u-icn u-icn-25"></i>' + dl3x;
            a1x.w2x(this.bgD2x, "f-vhide");
            this.bET8L = !0; if (k2x.ge5j(bEV8N)) C2x = window.setTimeout(function() { this.Gd4h(null, null);
                bEV8N() }.g2x(this), 1e3) } }();
    b2x.bEQ8I = function() { if (this.bET8L) return !1; if (l2x.iW5b(this.Qg7Z.value)) { this.Gd4h("æ­Œå•åä¸èƒ½ä¸ºç©º"); return !1 } return !0 };
    b2x.fu4y = function() { return this.Qg7Z.value } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        n2x = c2x("nm.l"),
        D2x = c2x("nm.w"),
        bI3x = c2x("nej.ui"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K2x;
    n2x.Xs9j = NEJ.C();
    b2x = n2x.Xs9j.O2x(n2x.dV3x);
    K2x = n2x.Xs9j.cg3x;
    b2x.cl3x = function() { this.cs3x() };
    b2x.bR3x = function() { this.cb3x(); var i2x = a1x.I2x(this.o2x, "j-flag");
        this.Xt9k = { inputer: i2x[0], tipper: i2x[1] };
        this.gT5Y = { onerror: this.bEP8H.g2x(this), onitemadd: this.bEP8H.g2x(this) };
        this.pu8m = i2x[2];
        h2x.q2x(i2x[2], "click", this.DX3x.g2x(this));
        h2x.q2x(i2x[3], "click", this.yV2x.g2x(this));
        h2x.q2x(this.o2x, "keypress", this.bEO8G.g2x(this)) };
    b2x.bZ3x = function() { this.ca3x = "m-wgt-create" };
    b2x.bk2x = function(e2x) { e2x.clazz = " m-layer-w2";
        e2x.parent = e2x.parent || document.body;
        e2x.title = "æ–°å»ºæ­Œå•";
        e2x.draggable = !0;
        e2x.destroyalbe = !0;
        e2x.mask = true;
        this.bl2x(e2x);
        this.Xt9k.inputer.value = e2x.name || "";
        this.tl9c = D2x.Xm9d.B2x(this.Xt9k);
        this.tl9c.bWm3x();
        this.P2x = p2x.hj5o.B2x(this.gT5Y);
        setTimeout(function() { this.Xt9k.inputer.focus() }.g2x(this), 0) };
    b2x.bC2x = function() { this.bH3x(); if (this.tl9c) { this.tl9c.S2x();
            delete this.tl9c } this.qZ8R(!1);
        this.Xt9k.inputer.value = "" };
    b2x.qZ8R = function(PE6y) { this.nw7p = PE6y; if (PE6y) { this.pu8m.innerHTML = "<i>æ–°å»ºä¸­...</i>";
            a1x.y2x(this.pu8m, "u-btn2-dis") } else { this.pu8m.innerHTML = "<i>æ–° å»º</i>";
            a1x.w2x(this.pu8m, "u-btn2-dis") } };
    b2x.DX3x = function() { if (this.nw7p || !this.tl9c.bEQ8I()) return; var cm3x = { key: "playlist_new-" + GUser.userId, data: { name: this.tl9c.fu4y() }, offset: 1 };
        this.P2x.iD5I(cm3x);
        this.qZ8R(!0) };
    b2x.bEP8H = function(d2x) { var cc3x = (d2x.result || Y2x).code; if (!cc3x) { this.z2x("onsuccess", d2x.data) } else { this.z2x("onerror", d2x) } this.bo2x() };
    b2x.yV2x = function() { this.bo2x() };
    b2x.bEO8G = function(d2x) { if (d2x.keyCode == 13) this.DX3x() } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        b2x, K2x;
    n2x.bhl2x = NEJ.C();
    b2x = n2x.bhl2x.O2x(n2x.dV3x);
    K2x = n2x.bhl2x.cg3x;
    b2x.cl3x = function() { this.cs3x() };
    b2x.bR3x = function() { this.cb3x(); var i2x = a1x.I2x(this.o2x, "j-flag");
        this.hK5P = { limit: 301, parent: i2x[1], cache: { klass: p2x.hj5o, lkey: "playlist_new-" + GUser.userId, onlisterror: this.bho2x.g2x(this) }, item: { klass: "m-wgt-subscribe-item", cutStr: l2x.Dy3x, escape: k2x.dM3x } };
        this.gT5Y = { onsuccess: this.Xv9m.g2x(this), onerror: this.em4q.g2x(this) };
        h2x.q2x(i2x[0], "click", this.DX3x.g2x(this));
        h2x.q2x(i2x[1], "click", this.lB6v.g2x(this)) };
    b2x.bZ3x = function() { this.ca3x = "m-wgt-subscribe" };
    b2x.bk2x = function(e2x) { e2x.parent = e2x.parent || document.body;
        e2x.clazz = " m-layer-w2";
        e2x.title = "æ·»åŠ åˆ°æ­Œå•";
        e2x.draggable = !0;
        e2x.mask = !0;
        this.bl2x(e2x);
        this.Xy9p = (e2x.tracks || []).reverse();
        this.hK5P.item.size = this.Xy9p.length;
        this.gT5Y.name = e2x.name || "";
        this.bEN8F = p2x.vs0x.B2x({ onaddsuccess: this.yf1x.g2x(this) });
        this.rF9w = p2x.hj5o.B2x({ onlistload: this.bVW3x.g2x(this) });
        this.rF9w.bJi9Z();
        k2x.be2x(this.Xy9p, function(r2x, s2x, i2x) { if (!k2x.jZ6T(r2x)) { i2x[s2x] = this.bEN8F.eh4l(r2x) || r2x } }, this) };
    b2x.bVW3x = function() { if (this.dr3x) this.dr3x.S2x();
        this.dr3x = H2x.iA5F.B2x(this.hK5P) };
    b2x.DX3x = function() { this.bo2x(); if (this.En3x) this.En3x.S2x();
        this.En3x = n2x.Xs9j.B2x(this.gT5Y);
        this.En3x.N2x() };
    b2x.lB6v = function() { var bVV3x = function(f2x) { while (f2x && f2x != document) { if (f2x.tagName.toLowerCase() == "li") { return f2x } f2x = f2x.parentNode } }; return function(d2x) { h2x.ce3x(d2x); var E2x = h2x.U2x(d2x),
                bhL2x = bVV3x(E2x); if (!!bhL2x && !a1x.by2x(bhL2x, "dis")) { this.Xv9m({ id: a1x.u2x(bhL2x, "id") }) } } }();
    b2x.Xv9m = function(d2x) { var C2x = d2x.id; if (!C2x || !this.Xy9p.length) return;
        this.bEN8F.iD5I({ key: "track_playlist-" + C2x, data: { tracks: this.Xy9p, pid: C2x } });
        this.bo2x() };
    b2x.yf1x = function() { this.z2x("onsuccess");
        n2x.Z2x.N2x({ tip: "æ”¶è—æˆåŠŸ" }) };
    b2x.em4q = function(d2x) { this.bo2x();
        this.z2x("onerror", d2x); var cA3x = "æ”¶è—å¤±è´¥"; switch (d2x.code) {
            case 405:
                cA3x = "æ“ä½œè¿‡äºŽé¢‘ç¹ï¼Œå…ˆä¼‘æ¯ä¸€ä¸‹å†è¯•å§"; break;
            case 507:
                cA3x = "æ­Œå•æ•°é‡è¶…è¿‡é™åˆ¶"; break;
            case 502:
                cA3x = "æ­Œæ›²å·²ç»å­˜åœ¨" } n2x.Z2x.N2x({ tip: cA3x, type: 2 }) };
    b2x.bho2x = function() { this.bo2x();
        n2x.Z2x.N2x({ tip: "åˆ—è¡¨ä¸‹è½½å¤±è´¥ï¼Œè¯·ç¨åŽå†è¯•", type: 2 }) };
    l2x.lE7x = function(e2x) { if (!GUser || !GUser.userId || GUser.userId <= 0) { top.login(); return } n2x.bhl2x.N2x(e2x) } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        cP3x = c2x("nej.p"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"); var bhM2x, nl7e, V2x = decodeURIComponent(location.href),
        iZ5e = /.+(http:\/\/.+\/proxy.html)/.test(V2x) ? RegExp.$1 : ""; if (!!iZ5e) { v2x.vo0x("mail_proxy_url", iZ5e) } else { iZ5e = v2x.sm9d("mail_proxy_url") || "about:blank" } bhM2x = a1x.YL9C({ src: iZ5e, onload: function() { nl7e = true } }); var bEM8E = function() { v2x.gJ5O("USER_TRIGGER", { value: true, expire: 1 / (24 * 60), path: "/" }) }; var bVT3x = function() { if (cP3x.cS3x.browser == "ie" && parseInt(cP3x.cS3x.version) < 9) { l2x.fb4f({ clazz: "m-layer-w2", message: "å½“å‰æµè§ˆå™¨ç‰ˆæœ¬è¿‡ä½Žï¼Œæš‚æ—¶æ— æ³•ä½¿ç”¨ï¼Œè¯·å‡çº§åŽå†è¯•ã€‚" }); return false } return true };
    l2x.XB9s = function(t2x, C2x, W2x) { if (!bVT3x()) return;
        bEM8E(); if (W2x == "stop") { if (!nl7e) throw "proxy not loaded";
            bEM8E();
            bhM2x.contentWindow.location.replace(iZ5e + "#" + k2x.df3x({ to: "ifrmMusic", message: JSON.stringify({ s: +(new Date), action: "stop" }) })) } else { bhM2x.contentWindow.location.replace(iZ5e + "#" + k2x.df3x({ to: "ifrmMusic", message: JSON.stringify({ type: t2x, id: C2x, s: +(new Date), action: W2x }) })) } } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        p2x = c2x("nm.d"); var ks6m = p2x.hI5N.B2x(); var nv7o = p2x.vs0x.B2x({ onlistload: bVP3x, onitemload: bVK3x, onerror: em4q }); var Ev3x = p2x.pD8v.B2x({ onlistload: bVJ3x, onitemload: bVH3x, onerror: em4q }); var bEH8z = {};

    function uY0x(d2x) { var f2x = h2x.U2x(d2x, "d:resAction"),
            W2x = a1x.u2x(f2x, "resAction"); if (f2x && (W2x == "play" || W2x == "addto")) { bEG8y({ action: W2x, type: parseInt(a1x.u2x(f2x, "resType")), id: a1x.u2x(f2x, "resId"), from: a1x.u2x(f2x, "resFrom"), data: a1x.u2x(f2x, "resData"), order: a1x.u2x(f2x, "resOrder") });
            bVB3x(f2x) } }

    function bEG8y(bN3x) { var W2x = bN3x.action,
            t2x = bN3x.type,
            C2x = bN3x.id,
            dK3x = bN3x.from,
            j2x = bN3x.data,
            se9V = bN3x.order,
            e2x = { limit: 1e3, offset: 0, data: { id: C2x }, ext: { id: C2x, action: W2x, type: t2x, from: dK3x, data: j2x } }; if (W2x != "play" && W2x != "addto" || !t2x) return; if (window.GRef && GRef == "mail") { l2x.XB9s(t2x, C2x, W2x); return } switch (t2x) {
            case 13:
                e2x.key = "track_playlist-" + C2x;
                nv7o.no7h(e2x); if (W2x == "play") { v2x.bq2x("/api/playlist/update/playcount", { query: { id: C2x } }) } break;
            case 17:
                e2x.key = "program";
                e2x.id = C2x;
                Ev3x.RI7B(e2x); if (W2x == "play") { v2x.bq2x("/api/dj/program/listen", { query: { id: C2x } }) } break;
            case 18:
                e2x.key = "track";
                e2x.id = C2x;
                nv7o.RI7B(e2x); break;
            case 19:
                e2x.key = "track_album-" + C2x;
                nv7o.no7h(e2x); break;
            case 24:
                e2x.key = "track_day";
                nv7o.no7h(e2x); break;
            case 2:
                e2x.key = "track_artist_top-" + C2x;
                nv7o.no7h(e2x); break;
            case 70:
                e2x.key = "program_djradio-" + C2x + "-" + se9V;
                e2x.data.radioId = C2x;
                e2x.data.asc = se9V == 2;
                Ev3x.no7h(e2x); break } }

    function bEF8x(i2x) { var m2x = [];
        k2x.be2x(i2x, function(r2x) { if (r2x.mainSong) { r2x.mainSong.program = r2x;
                m2x.push(r2x.mainSong);
                r2x.localupdatetime = +(new Date);
                nv7o.cjl7e(r2x.mainSong);
                r2x.mainTrackId = r2x.mainSong.id;
                delete r2x.mainSong } else { var bEE8w = nv7o.eh4l(r2x.mainTrackId);
                bEE8w && m2x.push(bEE8w) } }); return m2x }

    function XD9u(i2x, e2x) { var qD8v = e2x.action == "play" && e2x.type != 17 && e2x.type != 18,
            eS4W = e2x.action == "play"; if (!i2x.length) return; if (e2x.type == 19) { i2x = l2x.Jd5i(i2x, true, { play: true }, { source: "album", sourceid: e2x.id }) } else { i2x = l2x.Jd5i(i2x, true, { play: true }) } k2x.be2x(i2x, function(r2x) { r2x.source = l2x.bbm1x({ fid: e2x.from, fdata: e2x.data, type: e2x.type, rid: e2x.id }, r2x.id) });
        top.player.addTo(i2x, qD8v, eS4W);
        ks6m.Ra7T({ rid: e2x.id, type: e2x.type, hash: l2x.Io4s(), play: eS4W, source: e2x.from, sourceid: e2x.data }) }

    function bVP3x(d2x) { var i2x = nv7o.gN5S(d2x.key);
        XD9u(i2x, d2x.ext) }

    function bVK3x(d2x) { var i2x = [nv7o.eh4l(d2x.id)],
            bf2x = i2x[0],
            pf8X = l2x.ol7e(bf2x),
            sl9c = bf2x.privilege || {}; if (pf8X == 10) { l2x.tA9r(sl9c.fee || bf2x.fee, bf2x.id, "song", null, sl9c) } else if (pf8X == 100) { l2x.hP5U(null, null, null, true, bf2x) } else if (pf8X == 11) { l2x.bJN9E(bf2x.id, 18) } else { XD9u(i2x, d2x.ext) } }

    function bVJ3x(d2x) { var i2x = bEF8x(Ev3x.gN5S(d2x.key));
        XD9u(i2x, d2x.ext) }

    function bVH3x(d2x) { var i2x = bEF8x([Ev3x.eh4l(d2x.id)]);
        XD9u(i2x, d2x.ext) }

    function em4q() { top.player.tipPlay("æ— æ³•æ’­æ”¾ï¼ŒéŸ³ä¹å·²ä¸‹çº¿") }

    function bVB3x(f2x) { var t2x = a1x.u2x(f2x, "resType"),
            C2x = a1x.u2x(f2x, "resId"),
            J2x = t2x + "-" + C2x; if (bEH8z[J2x]) return; var bED8v = a1x.x2x("play-count"),
            bir2x = a1x.I2x(f2x.parentNode, "nb"),
            Ok6e = null; if (bED8v) { Ok6e = bED8v } else { Ok6e = !!bir2x && !!bir2x[0] ? bir2x[0] : null } if (Ok6e) { var cu3x = Ok6e.innerHTML; if (/^\d+$/.test(cu3x)) { Ok6e.innerText = +cu3x + 1 } bEH8z[J2x] = true } } l2x.bVx3x = function(f2x) { h2x.q2x(f2x || document.body, "click", uY0x.g2x(this)) };
    l2x.bVs3x = function(W2x, t2x, C2x) { bEG8y({ action: W2x, type: t2x, id: C2x }) } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        p2x = c2x("nm.d"),
        b2x, K2x;
    p2x.eO4S({ "share-all": { url: "/api/share/friends/resource", format: function(m2x, e2x) { this.bVr3x(m2x, e2x) }, onerror: "onshareerror" }, "share-sns": { url: "/api/share/resource/sns", format: function(m2x, e2x) { this.z2x("onshareall", e2x.result) }, onerror: function(m2x, e2x) { this.z2x("onshareall", e2x.result) } }, "share-private": { url: "/api/msg/private/send", onload: "onshareprivate", onerror: "onshareerror" }, share_img_compound: { url: "/upload/event/img/compound", type: "POST", format: function(m2x, e2x) { e2x.options.picUrl = m2x.picUrl;
                this.bEy8q(e2x.options, e2x.result) }, onerror: function(m2x, e2x) { this.z2x("onshareall", e2x.result) } }, "vid-get": { url: "/api/video/coversvid/get", format: function(Q2x, e2x) { this.om7f("vid_info-" + e2x.data.nosKey, Q2x); return Q2x } } });
    p2x.biB2x = NEJ.C();
    b2x = p2x.biB2x.O2x(p2x.hc5h);
    b2x.bVl3x = function() { var sM9D = function(Q2x, e2x) { e2x.times++; if (e2x.times > 10) { this.z2x("onvinfoerror", e2x.key, Q2x) } else { setTimeout(eH4L.g2x(this, e2x), e2x.times * 1e3) } }; var xs1x = function(Q2x, e2x) { this.z2x("onvinfo", e2x.key, Q2x) }; var eH4L = function(e2x) { var V2x = e2x.url;
            v2x.bq2x(V2x + "?vinfo", { method: "GET", type: "json", mode: 1, onload: xs1x.dW3x(this, e2x), onerror: sM9D.dW3x(this, e2x) }) }; return function(e2x) { e2x.times = 0;
            eH4L.call(this, e2x) } }();
    b2x.cvh0x = function() { var NU6O; var sM9D = function(Q2x, e2x) { if (Q2x.code > 0) { clearInterval(this.AO2x);
                this.z2x("onviderror", e2x.data.nosKey) } }; var xs1x = function(J2x, Q2x) { if (Q2x.vid && Q2x.covers) { clearInterval(this.AO2x);
                this.z2x("onvid", J2x, Q2x) } }; var eH4L = function(e2x) { if (+(new Date) - NU6O > 60 * 60 * 1e3) { clearInterval(this.AO2x);
                this.z2x("onviderror", e2x.data.nosKey); return } e2x.onload = xs1x.g2x(this, e2x.data.nosKey);
            e2x.onerror = sM9D.g2x(this);
            this.ck3x("vid-get", e2x) }; return function(e2x) { if (!e2x || !e2x.data) return;
            NU6O = +(new Date);
            this.AO2x = clearInterval(this.AO2x);
            this.AO2x = setInterval(eH4L.g2x(this, e2x), 1e4);
            eH4L.apply(this, arguments) } }();
    b2x.bVi3x = function() { this.AO2x = clearInterval(this.AO2x) };
    b2x.bVr3x = function(m2x, nb7U) { if (m2x.event && nb7U.snsTypes) { if (nb7U.pics) { var bEx8p = []; for (var i = 0, len = nb7U.pics.length; i < len; i++) { bEx8p[i] = nb7U.pics[i].originId } this.ck3x("share_img_compound", { data: { picIds: bEx8p.join(",") }, options: nb7U, result: m2x }) } else { nb7U.picUrl = nb7U.picUrl;
                this.bEy8q(nb7U, m2x) } } else { this.z2x("onshareall", m2x) } var vR0x = p2x.hI5N.B2x();
        vR0x.gf5k(nb7U.isPub ? "pubevent" : "shareevent", { id: m2x.id }) };
    b2x.bEy8q = function(nb7U, m2x) { var cm3x = {};
        cm3x.eventid = m2x.event.id;
        cm3x.eventtype = m2x.event.type;
        nb7U.picUrl && (cm3x.picUrl = nb7U.picUrl);
        cm3x.snsTypes = nb7U.snsTypes;
        cm3x.msg = nb7U.data.msg || "";
        cm3x.type = nb7U.data.type;
        nb7U.data.id && (cm3x.id = nb7U.data.id);
        this.ck3x("share-sns", { data: cm3x, result: m2x }) };
    b2x.bVe3x = function(e2x) { var j2x = { type: "", id: 0, threadId: "", msg: "", actId: 0, pics: "", uuid: "publish-" + +(new Date) + k2x.mJ7C(5) };
        j2x = NEJ.EX(j2x, e2x); if (!(j2x.id > 0)) { delete j2x.id;
            j2x.type = "noresource" } if (!j2x.threadId) { delete j2x.threadId } if (!j2x.actId) { delete j2x.actId } if (!j2x.pics) { delete j2x.pics } else { j2x.pics = JSON.stringify(j2x.pics) } this.ck3x("share-all", { data: j2x, snsTypes: e2x.snsTypes, picUrl: e2x.picUrl, pics: e2x.pics, isPub: e2x.isPub }) };
    b2x.bVc3x = function(e2x) { this.ck3x("share-private", e2x) };
    b2x.bUZ3x = function(e2x) { this.ck3x("share-all", e2x) } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K2x; var bUV3x = { 40: !0 };
    p2x.eO4S({ "event-list": { url: "/api/v1/event/get", filter: function(e2x) { e2x.data.getcounts = true;
                e2x.data.pagesize = e2x.data.limit; if (e2x.data.offset == 0) { e2x.data.lasttime = -1 } delete e2x.data.offset }, format: function(Q2x, e2x) { Q2x.event = l2x.UG8y(Q2x.event, function(r2x, s2x) { return !bUV3x[r2x.type] });
                this.bUU3x(Q2x.event);
                e2x.data.lasttime = Q2x.lasttime; if (Q2x.event.length) { Q2x.event.length = e2x.limit } return { list: Q2x.event, total: Q2x.size } } }, "event_latest-list": { url: "/api/act/event/getnews", format: function(Q2x, e2x) { return { list: Q2x.events, total: Q2x.count } } }, "event-pull": { url: "/api/event/getnews", filter: function(e2x) { e2x.data.pagesize = 20 }, format: function(Q2x, e2x) { return Q2x.event } }, "ievent-get": { type: "GET", url: "/api/event/get", onload: "oneventload", onerror: "oneventloaderror" }, "ievent-new-get": { type: "GET", url: "/api/event/getnews", onload: "oneventnewload" }, "ievent_user-list": { type: "GET", url: "/api/event/get/{userId}", filter: function(e2x) { e2x.data.time = -1;
                e2x.data.getcounts = true }, format: function(Q2x, e2x) { Q2x.events.length = e2x.limit; return { list: Q2x.events, total: Q2x.size } } }, "ievent-res-get": { url: "/api/res/status", format: function(m2x, e2x) { m2x.conf = e2x.conf; return m2x } }, "ievent-like": { url: "/api/resource/like", onload: "oneventlike", filter: function(e2x, bc2x) { if (e2x.like) { if (e2x.comment) { bc2x.url = "/api/v1/comment/like" } else { bc2x.url = "/api/resource/like" } bc2x.onload = "oneventlike";
                    bc2x.onerror = "oneventlikeerr" } else { if (e2x.comment) { bc2x.url = "/api/v1/comment/unlike" } else { bc2x.url = "/api/resource/unlike" } bc2x.onload = "oneventunlike";
                    bc2x.onerror = "oneventunlikeerr" } }, format: function(m2x, e2x) { m2x.eid = e2x.eid;
                m2x.origin = e2x.origin;
                m2x.ext = e2x.ext; return m2x } }, "ievent_user-del": { url: "/api/event/delete", format: function(m2x, e2x) { m2x.id = e2x.data.id; return m2x } }, "event-del": { url: "/api/event/delete", filter: function(e2x, bc2x) { if (e2x.data.type == "nointer") { bc2x.url = "/api/event/rcmd/reject" } else if (e2x.data.transcoding) { bc2x.url = "/api/event/video/transcoding/delete" } else { bc2x.url = "/api/event/delete" } }, format: function(m2x, e2x) { m2x.id = e2x.data.id; return m2x } }, "event_activity-del": { url: "/api/event/delete", format: function(m2x, e2x) { m2x.id = e2x.data.id; return m2x } }, "event_activity-list": { url: "/api/act/event", filter: function(e2x) { e2x.data.lasttime = e2x.data.lasttime || -1;
                e2x.data.pagesize = e2x.data.limit;
                e2x.data.getcounts = true;
                delete e2x.data.offset }, format: function(Q2x, e2x) { e2x.data.lasttime = Q2x.lasttime; var i2x = Q2x.events; if (Q2x.more) i2x = this.bUT3x(i2x, e2x.data.pagesize); return { list: i2x, total: Q2x.size } }, onerror: "onlisterror" } });
    p2x.xX1x = NEJ.C();
    b2x = p2x.xX1x.O2x(p2x.hc5h);
    b2x.cl3x = function() { this.cs3x() };
    b2x.bjc3x = function(t2x, cE3x) { return t2x + "-" + cE3x };
    b2x.cvl0x = function(e2x) { this.ck3x("ievent-get", e2x) };
    b2x.cvm0x = function(e2x) { this.ck3x("ievent-new-get", e2x) };
    b2x.cvn0x = function(e2x) { this.ck3x("ievent-user-get", e2x) };
    b2x.cvo0x = function(t2x, cE3x) { return this.qc8U(this.bjc3x(t2x, cE3x)) };
    b2x.cvp0x = function(FN4R, e2x) { if (!FN4R || !FN4R.length) return;
        e2x = e2x || {}; var bv2x = { song: 2, album: 4, playlist: 1, mv: 3, program: 5 }; for (var i = 0, EB3x = [], bEl8d = [], j2x; i < FN4R.length; ++i) { j2x = FN4R[i];
            j2x = this.qc8U(this.bjc3x(j2x.type, j2x.id)); if (!j2x) { EB3x.push(FN4R[i].id);
                bEl8d.push(bv2x[FN4R[i].type] || 0) } } if (!EB3x.length) { this.z2x("oneventresload", e2x.conf); return } e2x.data = { ids: JSON.stringify(EB3x), types: JSON.stringify(bEl8d) };
        e2x.onload = this.bUE3x.g2x(this);
        this.ck3x("ievent-res-get", e2x) };
    b2x.bUE3x = function(m2x) { if (m2x.code != 200) { this.z2x("oneventreserror", m2x.code); return } var bv2x = { 1: "playlist", 2: "song", 3: "mv", 4: "album", 5: "program" }; for (var i = 0, i2x = m2x.results; i < i2x.length; ++i) { this.om7f(this.bjc3x(bv2x[i2x[i].type], i2x[i].id), i2x[i]) } this.z2x("oneventresload", m2x.conf) };
    b2x.bEk8c = function(j2x) { var J2x = "event-list";
        this.bcd1x(J2x, j2x);
        this.z2x("onitemadd", { key: J2x, action: "add", data: j2x, flag: -1 }) };
    b2x.vc0x = function(e2x) { this.ck3x("ievent-like", e2x) };
    b2x.lJ7C = function(e2x) { this.ck3x("ievent-delete", e2x) };
    b2x.bUT3x = function(i2x, fV5a) { for (var i = i2x.length; i < fV5a; i++) i2x.push(null); return i2x };
    b2x.bUU3x = function(i2x) { var m2x = []; if (!i2x || !i2x.length) return;
        k2x.be2x(i2x, function(d2x) { d2x.biData = this.bEj8b(d2x) }, this) };
    b2x.bEj8b = function() { var Vo8g = { 32: "comment", 33: "activity", 34: "recomment_artist" },
            bUz3x = [13, 17, 18, 19, 20, 21, 22, 28, 31]; return function(d2x) { var Q2x = { id: d2x.id, sourceid: d2x.user.userId, alg: d2x.rcmdInfo ? d2x.rcmdInfo.alg : null, contentType: Vo8g[d2x.type] || (k2x.cV3x(bUz3x, d2x.type) != -1 ? "user_event" : "other") }; return Q2x } }();
    b2x.Bd2x = function(bUx3x, d2x) { var Q2x = this.bEj8b(d2x);
        Q2x.actionType = bUx3x; if (window.log) log("eventclick", Q2x) };
    b2x.cvs0x = function(e2x) { this.ck3x("event_latest-list", e2x) } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        bI3x = c2x("nej.ui"),
        l2x = c2x("nm.x"),
        L2x = c2x("nm.w"),
        b2x, K2x;
    L2x.XZ9Q = NEJ.C();
    b2x = L2x.XZ9Q.O2x(bI3x.es4w);
    K2x = L2x.XZ9Q.cg3x;
    b2x.bk2x = function(e2x) { this.bl2x(e2x); var gG5L = e2x.box || Y2x;
        a1x.fy4C(this.o2x, { position: "absolute", width: gG5L.width + "px", height: gG5L.height + "px", top: gG5L.top + "px", left: gG5L.left + "px" });
        window.uploader = this };
    b2x.bC2x = function() { this.bH3x() };
    b2x.lB6v = function(d2x) { this.z2x("onselect", d2x);
        console.log("select", d2x) };
    b2x.rm8e = function(d2x) { this.z2x("onprogress", d2x);
        console.log("progress", d2x) };
    b2x.sr9i = function(d2x) { if (d2x.code == 200) { this.z2x("oncomplete", d2x) } else { this.em4q(d2x) } console.log("complete", d2x) };
    b2x.em4q = function(d2x) { this.z2x("onerror", d2x);
        console.log("error", d2x) };
    b2x.gg5l = bm2x;
    b2x.bUn3x = bm2x })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        bI3x = c2x("nej.ui"),
        l2x = c2x("nm.x"),
        L2x = c2x("nm.w"),
        gb5g = c2x("cb"),
        b2x, K2x;
    L2x.bjH3x = NEJ.C();
    b2x = L2x.bjH3x.O2x(L2x.XZ9Q);
    K2x = L2x.bjH3x.cg3x;
    b2x.cl3x = function() { this.cs3x() };
    b2x.bk2x = function(e2x) { this.bl2x(e2x); var J2x = k2x.mJ7C(8),
            jl6f = "onselect" + J2x,
            jg6a = "onprogress" + J2x,
            bEf8X = "oncomplete" + J2x,
            bQ3x = "onerror" + J2x;
        gb5g[jl6f] = this.lB6v.g2x(this);
        gb5g[jg6a] = this.rm8e.g2x(this);
        gb5g[bEf8X] = this.sr9i.g2x(this);
        gb5g[bQ3x] = this.em4q.g2x(this); var bUd3x = "/style/swf/MusicUpload.swf?v=20150202",
            bv2x = { music: "éŸ³é¢‘(*.mp3,*.m4a,*.x-m4a)", image: "*.jpg;*.jpeg;*.png;*.gif;" },
            ll6f = { url: e2x.api, token: e2x.token, filter: bv2x[e2x.accept] || e2x.accept || e2x.flashAccept || "", multiple: e2x.multiple, error: "cb." + bQ3x, select: "cb." + jl6f, progress: "cb." + jg6a, complete: "cb." + bEf8X };
        this.oe7X = a1x.qY8Q({ src: bUd3x, hidden: false, parent: this.o2x, onready: this.MQ6K.g2x(this), width: e2x.box.width, height: e2x.box.height, params: { flashvars: k2x.uk0x(ll6f, "&", false), allowscriptaccess: "always", wmode: "transparent" } }) };
    b2x.bC2x = function() { this.bH3x();
        this.o2x.innerHTML = "" };
    b2x.MQ6K = function(ha5f) { this.oe7X = ha5f };
    b2x.gg5l = function(iB5G) { this.oe7X.upload(iB5G) };
    b2x.bUn3x = function() { this.oe7X.cancle() };
    b2x.qu8m = function(Bq2x) { this.oe7X.disable(Bq2x) } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        dP3x = c2x("nej.g"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        bI3x = c2x("nej.ui"),
        l2x = c2x("nm.x"),
        L2x = c2x("nm.w"),
        b2x, K2x; var hV5a = a1x.sg9X(".#<uispace>{position:absolute;z-index:100;overflow:hidden;cursor:pointer;}.#<uispace> .hfile{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;opacity:0;filter:Alpha(opacity=0);font-size:12px;font-size:16px;*font-size:15px;}"); var gd5i = a1x.hW5b('<div class="' + hV5a + '"><form><input multiple="multiple" type="file" name="uploadfile" class="hfile" size="70"></form></div>');
    L2x.bjW3x = NEJ.C();
    b2x = L2x.bjW3x.O2x(L2x.XZ9Q);
    K2x = L2x.bjW3x.cg3x;
    b2x.bZ3x = function() { this.li6c = hV5a;
        this.ca3x = gd5i };
    b2x.bR3x = function() { this.cb3x(); var bn2x = a1x.cQ3x(this.o2x);
        this.bw2x = bn2x[0];
        h2x.q2x(this.bw2x.uploadfile, "change", this.pS8K.g2x(this)) };
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.bTY3x = e2x.api || "";
        this.Yd9U = e2x.multiple;
        this.bw2x.multiple = this.Yd9U ? "coverImgUrl" : "";
        this.bw2x.reset();
        this.Yf9W = [];
        this.Yi9Z = {}; var bv2x = { music: "audio/mp3,audio/x-m4a,audio/m4a", image: "image/*" }; if (e2x.accept || e2x.htmlAccept) { this.bw2x.uploadfile.accept = bv2x[e2x.accept] || e2x.accept || e2x.htmlAccept } if (e2x.tipTitle) { this.bw2x.uploadfile.title = e2x.tipTitle } };
    b2x.bC2x = function() { this.bH3x();
        this.bki3x();
        this.bw2x.reset();
        delete this.Yf9W;
        delete this.Yi9Z;
        this.bw2x.uploadfile.accept = "*" };
    b2x.pS8K = function(d2x) { var bDR8J = this.bw2x.uploadfile.files,
            bDP8H = []; if (!this.Yd9U) { this.Yf9W = [];
            this.Yi9Z = {} } for (var i = 0, ii = bDR8J.length; i < ii; i++) { var Yj9a = this.bTM3x(bDR8J[i]);
            this.Yf9W.push(Yj9a);
            this.Yi9Z[Yj9a.uuid] = Yj9a;
            bDP8H.push(Yj9a); if (!this.Yd9U) break } this.lB6v(bDP8H);
        this.bw2x.reset() };
    b2x.bki3x = function() { if (this.bDM8E) { this.bDL8D = true;
            v2x.jk6e(this.FC3x);
            this.bDL8D = false;
            delete this.bDM8E;
            delete this.FC3x } };
    b2x.bTM3x = function(dx3x) { return { uuid: "file-" + +(new Date) + k2x.mJ7C(5), name: dx3x.name, size: dx3x.size, refernce: dx3x } };
    b2x.gg5l = function(iB5G) { this.bki3x(); var dx3x = this.Yd9U ? this.Yi9Z[iB5G] : this.Yf9W[0],
            j2x = new FormData,
            nM7F = {}; if (dx3x) { nM7F[dP3x.ws1x] = dP3x.Eu3x;
            j2x.append("fileupload", dx3x.refernce);
            this.bDM8E = dx3x;
            this.FC3x = v2x.bq2x(this.bTY3x, { type: "json", method: "post", headers: nM7F, data: j2x, timeout: 0, onload: this.yc1x.g2x(this, iB5G), onerror: this.yc1x.g2x(this, iB5G), onuploading: this.bTI3x.g2x(this, iB5G) }) } };
    b2x.yc1x = function(iB5G, d2x) { d2x.uuid = iB5G; if (d2x.code == 200) { this.sr9i(d2x) } else { if (!this.bDL8D) { this.em4q(d2x) } } };
    b2x.bTI3x = function(iB5G, d2x) { d2x.uuid = iB5G;
        this.rm8e(d2x) };
    b2x.bTE3x = function() { this.bki3x() };
    b2x.qu8m = function(Bq2x) { if (Bq2x) { this.bo2x() } else { this.N2x() } } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        L2x = c2x("nm.w"),
        bTD3x = typeof FormData != "undefined";
    L2x.BG2x = NEJ.C();
    L2x.BG2x.O2x(bTD3x ? L2x.bjW3x : L2x.bjH3x) })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        dP3x = c2x("nej.g"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        ff4j = c2x("nej.n"),
        H2x = c2x("nej.ut"),
        bd2x = c2x("nej.ui"),
        D2x = c2x("nm.w"),
        n2x = c2x("nm.l"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        L2x = c2x("nm.x.f"),
        b2x, K2x, bkB3x = { 0: "", "-1": "ä¸èƒ½æ·»åŠ é‡å¤å›¾ç‰‡", "-10": "æœ€å¤šåªèƒ½æ·»åŠ 9å¼ ", "-3": "è¯·é€‰æ‹©ä¸è¶…è¿‡5Mçš„å›¾ç‰‡" },
        bkC3x = 5 * 1024 * 1024,
        cvt0x = 80,
        bTA3x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    D2x.bDI8A = NEJ.C();
    b2x = D2x.bDI8A.O2x(H2x.xa1x);
    b2x.bqI4M = function() { return { x: this.AA2x.clientWidth - this.o2x.offsetWidth, y: this.AA2x.clientHeight - this.o2x.offsetHeight } };
    D2x.bkJ3x = NEJ.C();
    b2x = D2x.bkJ3x.O2x(bd2x.es4w);
    b2x.bZ3x = function() { this.ca3x = "m-xwgt-share-upload" };
    b2x.bR3x = function() { this.cb3x(); var i2x = a1x.I2x(this.o2x, "j-flag");
        this.Ys9j = i2x.shift();
        this.BL2x = i2x.shift();
        this.LW5b = i2x.shift();
        this.bTs3x = { onselect: this.bDF8x.dW3x(this, 0), onerror: this.em4q.g2x(this), oncomplete: this.sr9i.g2x(this), multiple: true, parent: this.BL2x, api: "/upload/event/img", htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif", flashAccept: "å›¾ç‰‡(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)", box: { width: 60, height: 60, top: 0, left: 0 }, tipTitle: "ä¸Šä¼ å›¾ç‰‡" };
        this.bDE8w = { onselect: this.bDF8x.dW3x(this, 1), onerror: this.em4q.g2x(this), oncomplete: this.sr9i.g2x(this), multiple: true, parent: this.BL2x, api: "/upload/event/img", htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif", flashAccept: "å›¾ç‰‡(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)", box: { width: 20, height: 20, top: 0, left: 0 }, tipTitle: "ä¸Šä¼ å›¾ç‰‡" };
        this.bTm3x = D2x.BG2x.B2x(this.bTs3x) };
    b2x.bC2x = function() { h2x.it5y(this.rp8h, "click"); if (!!this.fm4q) { for (var i = this.fm4q.length - 1; i >= 0; i--) { a1x.cH3x(this.fm4q[i].element, false); if (this.fm4q[i].dragger) this.fm4q[i].dragger.S2x() } } this.fm4q = [];
        this.Yv9m = {}; if (this.yp1x) { clearTimeout(this.yp1x) } this.yp1x = 0;
        this.Fu3x && this.Fu3x.S2x();
        delete this.Fu3x;
        this.bH3x() };
    b2x.bDF8x = function(i2x, s2x) { if (!i2x) return; for (var i = 0, len = i2x.length; i < len; i++) { if (!bTA3x.test(i2x[i].name)) { this.blg3x({ path: i2x[i].name, index: s2x, uuid: i2x[i].uuid, status: -4, fail: "è¿™ä¸æ˜¯<br>å›¾ç‰‡" }) } else if (i2x[i].size > bkC3x) { this.blh3x(-3);
                this.blg3x({ path: i2x[i].name, index: s2x, uuid: i2x[i].uuid, status: -3, fail: "ä¸Šä¼ <br>å¤±è´¥" }) } else { this.blg3x({ path: i2x[i].name, index: s2x, uuid: i2x[i].uuid, status: 0 }) } } };
    b2x.em4q = function(d2x) { var dx3x = this.Yv9m[d2x.uuid];
        dx3x.status = -4;
        dx3x.fail = "ä¸Šä¼ <br>å¤±è´¥";
        this.bDC8u(dx3x);
        this.ys1x() };
    b2x.sr9i = function(d2x) { var dx3x = this.Yv9m[d2x.uuid];
        dx3x.status = 2; var bt2x = NEJ.X({}, d2x.picInfo);
        bt2x.originId = bt2x.originIdStr;
        bt2x.squareId = bt2x.squareIdStr;
        bt2x.rectangleId = bt2x.rectangleIdStr;
        bt2x.pcSquareId = bt2x.pcSquareIdStr;
        bt2x.pcRectangleId = bt2x.pcRectangleIdStr;
        bt2x.originJpgId = bt2x.originJpgIdStr || bt2x.originJpgId;
        dx3x.picInfo = bt2x;
        dx3x.picUrl = d2x.picInfo.pcSquareUrl;
        this.bDC8u(dx3x);
        this.ys1x() };
    b2x.blg3x = function(dx3x) { if (this.fm4q.length >= 9) { this.blh3x(-10, 3e3, this.bDz8r.g2x(this)); return } this.bTe3x(dx3x);
        this.fm4q.push(dx3x);
        this.Yv9m[dx3x.uuid] = dx3x; if (!!this.fm4q.length) { this.o2x.style.display = "" } if (this.fm4q.length >= 9) { this.BL2x.style.display = "none" } else { this.BL2x.style.display = "" } this.ys1x() };
    b2x.ys1x = function() { var blo3x = -1,
            bDy8q = 0; for (var i = 0, l = this.fm4q.length; i < l; i++) { if (this.fm4q[i].status == 1) { return } if (this.fm4q[i].status == 0 && blo3x < 0) { blo3x = i } if (this.fm4q[i].status == 2 || this.fm4q[i].status < 0) { bDy8q++ } } var r2x = this.fm4q[blo3x]; if (r2x) {
            (r2x.index == 0 ? this.bTm3x : this.Fu3x).gg5l(r2x.uuid);
            r2x.status = 1;
            this.z2x("onstartupload", {}) } else if (bDy8q == this.fm4q.length) { this.z2x("onfinishupload", {}) } };
    b2x.blh3x = function(s2x, jO6I, gb5g) { if (this.Ln5s < s2x) { return } if (this.yp1x) { clearTimeout(this.yp1x);
            this.yp1x = 0 } if (jO6I) { this.LW5b.innerText = bkB3x[s2x * 1];
            this.Ln5s = s2x;
            this.yp1x = setTimeout(this.YD9u.g2x(this, s2x, gb5g), jO6I) } else { this.LW5b.innerText = bkB3x[s2x];
            this.Ln5s = s2x } this.LW5b.style.display = "" };
    b2x.YD9u = function(s2x, gb5g) { if (s2x && this.Ln5s !== s2x) { return } this.Ln5s = 0;
        this.LW5b.innerText = bkB3x[0];
        this.LW5b.style.display = "none";
        gb5g && gb5g() };
    b2x.bTe3x = function(dx3x) { var j2x = {}; if (dx3x.fail) { j2x.fail = dx3x.fail } var ds3x = a1x.bP3x("m-xwgt-share-upload-preview", j2x);
        dx3x.element = a1x.ne7X(ds3x);
        h2x.q2x(a1x.I2x(dx3x.element, "del")[0], "mousedown", this.bSZ3x.g2x(this, dx3x), false);
        this.Ys9j.insertBefore(dx3x.element, this.Ys9j.lastElementChild);
        dx3x.dragger = D2x.bDI8A.B2x({ view: this.Ys9j.parentNode, body: dx3x.element, overflow: false, direction: 0, isRelative: 1, ondragstart: this.NX6R.g2x(this, dx3x), onchange: this.bSV3x.g2x(this, dx3x), ondragend: this.bpV4Z.g2x(this, dx3x) }) };
    b2x.bDC8u = function(dx3x) { if (!dx3x || !dx3x.element) { return false } var j2x = {}; if (dx3x.fail) { j2x.fail = dx3x.fail } else { j2x.url = dx3x.picUrl } a1x.y2x(dx3x.element, "z-fail");
        dx3x.element.firstChild.outerHTML = a1x.bP3x("m-xwgt-share-upload-preview-img", j2x) };
    b2x.NX6R = function(r2x, jU6O) { a1x.y2x(r2x.element, "z-sel") };
    b2x.bSV3x = function(r2x, jU6O) { var cvv0x, gv5A = this.fm4q.length - 1,
            or7k; for (var i = gv5A; i >= 0; i--) { a1x.w2x(this.fm4q[i].element, "z-jump"); if (this.fm4q[i] == r2x) { or7k = i } else { a1x.fy4C(this.fm4q[i].element, { left: "", top: "" }) } } var Ll5q = { x: 46 + 92 * (or7k % 5) + jU6O.left, y: 46 + 92 * (or7k / 5 >> 0) + jU6O.top }; var blE3x = Ll5q.x / 92 >> 0,
            blG3x = Ll5q.y / 92 >> 0,
            wn1x = Math.max(0, Math.min(gv5A, blG3x * 5 + blE3x)); if (wn1x == or7k) { return } var bSK3x = wn1x < or7k; for (var i = Math.min(wn1x, or7k); i <= Math.max(wn1x, or7k); i++) { if (i !== or7k) { var bDp8h = i % 5; if (bSK3x) { if (bDp8h == 4) { a1x.fy4C(this.fm4q[i].element, { left: "-368px", top: "92px" }) } else { a1x.fy4C(this.fm4q[i].element, { left: "92px", top: "" }) } } else { if (bDp8h == 0) { a1x.fy4C(this.fm4q[i].element, { left: "368px", top: "-92px" }) } else { a1x.fy4C(this.fm4q[i].element, { left: "-92px", top: "" }) } } } } };
    b2x.bpV4Z = function(r2x, jU6O) { var cvw0x, gv5A = this.fm4q.length - 1,
            or7k; for (var i = gv5A; i >= 0; i--) { a1x.fy4C(this.fm4q[i].element, { left: "", top: "" }); if (this.fm4q[i] == r2x) { or7k = i } } a1x.w2x(r2x.element, "z-sel"); var Ll5q = { x: 46 + 92 * (or7k % 5) + jU6O.left, y: 46 + 92 * (or7k / 5 >> 0) + jU6O.top }; var blE3x = Ll5q.x / 92 >> 0,
            blG3x = Ll5q.y / 92 >> 0,
            wn1x = Math.max(0, Math.min(gv5A, blG3x * 5 + blE3x)); if (wn1x == or7k) { return } this.Ys9j.insertBefore(r2x.element, (this.fm4q[wn1x + (wn1x > or7k ? 1 : 0)] || {}).element || this.BL2x);
        this.fm4q.splice(or7k, 1);
        this.fm4q.splice(wn1x, 0, r2x) };
    b2x.bSZ3x = function(r2x, d2x) { a1x.cH3x(r2x.element, false); if (r2x.dragger) r2x.dragger.S2x();
        delete r2x.dragger; var s2x = -1; for (var i = this.fm4q.length - 1; i >= 0; i--) { if (this.fm4q[i] == r2x) { s2x = i; break } } this.fm4q.splice(s2x, s2x >= 0 ? 1 : 0);
        delete r2x; if (this.fm4q.length >= 9) { this.BL2x.style.display = "none" } else { this.BL2x.style.display = "" } if (!this.fm4q.length) { this.o2x.style.display = "none";
            this.YD9u(0) } else { this.bDz8r() } this.ys1x() };
    b2x.bDz8r = function() { var bDo8g = false; for (var i = 0, len = this.fm4q.length; i < len; i++) { if (this.fm4q[i].status == -3) { bDo8g = true } } if (bDo8g) { this.blh3x(-3) } else { this.YD9u(-3) } };
    b2x.Lg5l = function() { var ea4e = []; for (var i = this.fm4q.length - 1; i >= 0; i--) { if (this.fm4q[i].status == 2) { ea4e.unshift(this.fm4q[i].picInfo) } } return ea4e };
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.bDE8w.parent = e2x.button;
        this.Fu3x && this.Fu3x.S2x();
        this.Fu3x = D2x.BG2x.B2x(this.bDE8w);
        this.o2x.style.display = "none"; if (!!this.fm4q) { for (var i = this.fm4q.length - 1; i >= 0; i--) { a1x.cH3x(this.fm4q[i].element, false); if (this.fm4q[i].dragger) this.fm4q[i].dragger.S2x() } } this.fm4q = [];
        this.Yv9m = {}; if (this.yp1x) { clearTimeout(this.yp1x) } this.YD9u(0);
        this.Ln5s = 0 };
    H2x.fv4z.B2x({ element: D2x.bkJ3x, event: ["onstartupload", "onfinishupload"] }) })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        eT4X = NEJ.R,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        bd2x = c2x("nej.ui"),
        M2x = c2x("nej.ut"),
        b2x, K2x; if (!!M2x.mO7H) return;
    M2x.mO7H = NEJ.C();
    b2x = M2x.mO7H.O2x(M2x.WR9I);
    K2x = M2x.mO7H.cg3x;
    b2x.bk2x = function(e2x) { this.bSE2x(e2x.more);
        this.YE9v = a1x.x2x(e2x.sbody);
        this.bU3x([
            [this.YE9v, "scroll", this.bSC2x.g2x(this)]
        ]); var dh3x = e2x.delta; if (dh3x == null) dh3x = 30;
        this.KN5S = Math.max(0, dh3x); var cu3x = parseInt(e2x.count) || 0;
        this.iE5J = Math.max(0, cu3x); var ft4x = parseInt(e2x.number) || 0; if (ft4x > 1 && ft4x <= cu3x) { this.yW2x = ft4x } this.bl2x(e2x) };
    b2x.bC2x = function() { this.bH3x();
        delete this.yH2x;
        delete this.YE9v;
        delete this.sc9T;
        delete this.YG9x };
    b2x.yA1x = function(bj2x, bp2x) { var bF3x = this.vY0x + (this.iE5J - 1) * this.qj8b,
            fV5a = this.iE5J * this.qj8b; return K2x.yA1x.call(this, bF3x, bj2x, fV5a, bp2x) };
    b2x.bSE2x = function(YM9D) { this.yH2x = a1x.x2x(YM9D);
        this.bU3x([
            [this.yH2x, "click", this.nq7j.g2x(this)]
        ]) };
    b2x.bms3x = function(E2x) { E2x = E2x || {}; if (this.sc9T || !E2x) return; if (!E2x.scrollHeight) E2x = a1x.oc7V(); var bj2x = a1x.hJ5O(this.ih5m),
            dh3x = bj2x.y + this.ih5m.offsetHeight - E2x.scrollTop - E2x.clientHeight,
            bmt3x = E2x.scrollHeight <= E2x.clientHeight; if (dh3x <= this.KN5S || bmt3x && !this.sc9T) { this.nq7j() } };
    b2x.bSC2x = function(d2x) { if (this.sc9T) return;
        this.bms3x(h2x.U2x(d2x)) };
    b2x.yy1x = function(d2x) { K2x.yy1x.apply(this, arguments); if (!d2x.stopped) { this.Js5x(); var bj2x = 0; if (d2x.index > 1) { bj2x = this.vY0x + ((d2x.index - 1) * this.iE5J - 1) * this.qj8b } this.hM5R = bj2x;
            this.nq7j() } };
    b2x.bFi8a = function(e2x) { if (!!this.yW2x) { var dh3x = e2x.offset > 0 ? this.qj8b : this.vY0x,
                fV5a = dh3x + this.qj8b * (this.yW2x - 1);
            this.hM5R = e2x.offset + fV5a;
            e2x.data.limit = fV5a;
            e2x.limit = fV5a;
            delete this.yW2x } return e2x };
    b2x.bfb2x = function(e2x) { delete this.YG9x;
        K2x.bfb2x.apply(this, arguments);
        this.bDm7f() };
    b2x.bfd2x = function(d2x) { if (d2x.key != this.ix5C.key) return; switch (d2x.action) {
            case "refresh":
            case "append":
                delete this.YG9x; break } K2x.bfd2x.apply(this, arguments) };
    b2x.Ri7b = function() { this.wy1x("onbeforelistload", "åˆ—è¡¨åŠ è½½ä¸­...");
        a1x.X2x(this.yH2x, "display", "none") };
    b2x.bfH2x = function(i2x, bj2x, fV5a) { var bp2x = i2x.length,
            bmx3x = i2x.loaded ? bj2x + fV5a >= bp2x : bj2x + fV5a > bp2x;
        this.hM5R = Math.min(this.hM5R, bp2x);
        a1x.X2x(this.yH2x, "display", bmx3x ? "none" : ""); if (bmx3x) this.sc9T = !0; if (this.iE5J > 0) { var bt2x = this.yA1x(bj2x, i2x.length); if (this.bFh8Z(bt2x.index, bt2x.total)) return !0; var dh3x = this.vY0x - this.qj8b,
                ft4x = this.iE5J * this.qj8b;
            this.sc9T = (bj2x + fV5a - dh3x) % ft4x == 0 || bmx3x;
            a1x.X2x(this.yH2x, "display", this.sc9T ? "none" : "");
            this.bfn2x(this.sc9T && bt2x.total > 1 ? "" : "none") } };
    b2x.bfG2x = function() { this.hM5R = 0;
        this.sc9T = !0;
        this.wy1x("onemptylist", "æ²¡æœ‰åˆ—è¡¨æ•°æ®ï¼") };
    b2x.Rd7W = function(ds3x, jU6O) { this.ih5m.insertAdjacentHTML(jU6O || "beforeEnd", ds3x) };
    b2x.QZ7S = function(gz5E) { this.fd4h = this.fd4h || []; if (k2x.ep4t(gz5E)) { eT4X.push.apply(this.fd4h, gz5E) } else { this.fd4h.push(gz5E) } };
    b2x.WU9L = function(d2x) { a1x.mA7t(this.ci3x);
        this.Qx7q(d2x, "onafteradd"); var eA4E = d2x.flag; if (d2x.stopped || !eA4E) return; if (this.iE5J > 0) { this.bft2x(); return } this.hM5R += 1;
        eA4E == -1 ? this.bgn2x(d2x.data) : this.bFf8X(d2x.data) };
    b2x.WX9O = function(d2x) { this.Qx7q(d2x, "onafterdelete"); if (d2x.stopped) return; if (this.iE5J > 0) { this.bft2x(); return } var C2x = d2x.data[this.eL4P.pkey]; if (!!this.fd4h) { var r2x = a1x.bLI0x(C2x),
                s2x = k2x.cV3x(this.fd4h, r2x); if (s2x >= 0) { this.fd4h.splice(s2x, 1);
                this.hM5R -= 1 } if (!!r2x) r2x.S2x() } else { var f2x = a1x.x2x(this.bFm8e(C2x)); if (!!f2x) this.hM5R -= 1;
            a1x.cH3x(f2x) } if (this.hM5R <= 0) this.nq7j() };
    b2x.bge2x = function(bj2x, fV5a) { if (bj2x != this.hM5R) return; if (this.RK7D()) { this.sc9T = !1;
            this.bDm7f() } };
    b2x.bgi2x = function(bj2x, fV5a) { if (bj2x != 0) return; var Hh4l = this.P2x.gN5S(this.ix5C.key); for (var i = fV5a - 1; i >= 0; i--) { this.bgn2x(Hh4l[i]) } };
    b2x.bDm7f = function() { var E2x = this.YE9v; if (!E2x || this.sc9T) return;
        this.bms3x(this.YE9v) };
    b2x.fQ5V = function() { delete this.sc9T;
        K2x.fQ5V.apply(this, arguments) };
    b2x.nq7j = function() { if (!!this.YG9x) return;
        this.YG9x = !0; var bj2x = this.hM5R;
        this.hM5R += bj2x == 0 ? this.vY0x : this.qj8b;
        this.bFj8b(bj2x) } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        cN3x = c2x("nej.x"),
        M2x = c2x("nej.ut"),
        b2x; if (!!M2x.Ct3x) return;
    M2x.Ct3x = NEJ.C();
    b2x = M2x.Ct3x.O2x(M2x.cz3x);
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.ig5l = e2x.event || "click";
        this.jy6s = e2x.selected || "js-selected";
        this.nf7Y = e2x.disabled || "js-disabled";
        this.bDk7d = !!e2x.inverse;
        this.bSs2x(e2x.list);
        this.Fl3x(e2x.index || 0) };
    b2x.bC2x = function() { var bSp2x = function(f2x) { this.bmP3x(f2x, !1) }; return function() { this.bH3x();
            k2x.be2x(this.bV3x, bSp2x, this);
            delete this.bV3x;
            delete this.ig5l;
            delete this.cn3x;
            delete this.nf7Y;
            delete this.jy6s;
            delete this.bDk7d } }();
    b2x.bSs2x = function() { var bdt1x = function(r2x) { if (!r2x) return;
            this.bV3x.push(r2x); var s2x = this.bV3x.length - 1,
                dc3x = this.bmQ3x[s2x]; if (!dc3x) { dc3x = this.Fl3x.g2x(this, s2x);
                this.bmQ3x[s2x] = dc3x } this.bU3x([
                [r2x, this.ig5l, dc3x]
            ]) }; return function(i2x) { this.bV3x = []; if (!this.bmQ3x) this.bmQ3x = [];
            k2x.be2x(i2x, bdt1x, this) } }();
    b2x.bmP3x = function(E2x, bSo2x) {!!bSo2x && !this.bDk7d ? a1x.y2x(E2x, this.jy6s) : a1x.w2x(E2x, this.jy6s) };
    b2x.Fl3x = function(s2x, Kg5l, j2x) { var E2x = this.bV3x[s2x]; if (Kg5l != !0 && (s2x == this.cn3x || !E2x || a1x.by2x(E2x, this.nf7Y))) { h2x.ce3x(arguments[1]); return this } var d2x = { index: s2x, last: this.cn3x, list: this.no7h(), data: j2x || a1x.u2x(E2x, "value") };
        this.cn3x = s2x;
        E2x = this.bV3x[d2x.last]; if (!!E2x) this.bmP3x(E2x, !1);
        E2x = this.bV3x[this.cn3x];
        this.bmP3x(E2x, !0);
        this.z2x("onchange", d2x); if (!d2x.nostop) h2x.ce3x(arguments[1]); return this };
    b2x.sj9a = function() { return this.cn3x };
    b2x.no7h = function() { return this.bV3x };
    a1x.bSn2x = cN3x.bSn2x = function(bB2x, e2x) { var C2x = a1x.kL6F(bB2x); if (!C2x) return null; if (!M2x.Wu8m(C2x, M2x.Ct3x)) { e2x = e2x || {};
            e2x.list = !e2x.clazz ? a1x.cQ3x(C2x) : a1x.I2x(C2x, e2x.clazz);
            delete e2x.clazz } return M2x.Wu8m(C2x, M2x.Ct3x, e2x || Y2x) };
    cN3x.isChange = !0 })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        l2x = c2x("nm.x"); var SETTING_KEY = "player-setting"; var lY7R = { mode: 4, volume: .8, autoPlay: false, index: 0, lock: false };
    lY7R = v2x.sm9d(SETTING_KEY) || lY7R;
    l2x.bnc3x = function() { return lY7R };
    l2x.CB3x = function(CC3x) { if (CC3x) { lY7R = CC3x;
            v2x.vo0x(SETTING_KEY, CC3x) } } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        l2x = c2x("nm.x"),
        p2x = c2x("nm.d"),
        gR5W = c2x("nm.w.player.log"); var ks6m = p2x.hI5N.B2x(); var LogLevel = { ERROR: 10, INFO: 6, DEBUG: 2 }; var ma7T = function(t2x, bE2x, pf8X) { var cZ3x = l2x.eO4S("{0} {1} {2}", k2x.iY5d(new Date, "yyyy-MM-dd HH:mm:ss"), t2x, bE2x); if (pf8X == LogLevel.ERROR) { ks6m.gf5k("playerror", { message: bE2x }) } if (pf8X >= LogLevel.INFO) { ks6m.ciI7B(cZ3x) } if (location.hostname.indexOf("igame.163.com") != -1) { console.log(cZ3x) } };
    gR5W.bT3x = function() { ma7T("PLAY_ERROR", l2x.eO4S.apply(null, arguments), LogLevel.ERROR) };
    gR5W.oi7b = function() { ma7T("PLAY_INFO", l2x.eO4S.apply(null, arguments), LogLevel.INFO) };
    gR5W.cvx0x = function() { ma7T("PLAY_DEBUG", l2x.eO4S.apply(null, arguments), LogLevel.DEBUG) } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        D2x = c2x("nm.w"),
        gb5g = c2x("flash.cb"); var dH3x = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"]; var CH3x, Zd0x, sW9N;
    D2x.bSl2x = function(t2x, du3x) { if (t2x != "flash") { if (!CH3x) { CH3x = a1x.cT3x("audio");
                k2x.be2x(dH3x, function(t2x) { h2x.q2x(CH3x, t2x, onMediaCallBack) }) } if (CH3x && CH3x.canPlayType && CH3x.canPlayType("audio/mpeg")) { du3x(new MediaWrap("audio")); return } } if (!Zd0x) { a1x.qY8Q({ src: "/style/swf/music/music.swf?v=20151204", hidden: true, params: { allowscriptaccess: "always" }, onready: function(ha5f) { Zd0x = ha5f;
                    k2x.be2x(dH3x, function(t2x) { gb5g[t2x] = onMediaCallBack;
                        Zd0x.addCallback(t2x, "flash.cb." + t2x) });
                    du3x(new MediaWrap("flash")) }.g2x(this) }) } else { du3x(new MediaWrap("flash")) } };

    function MediaWrap(CK3x) { var lX7Q;
        H2x.fv4z.B2x({ element: this, event: dH3x.concat(["interrupt", "recover"]) });
        lX7Q = CK3x == "audio" ? CH3x : Zd0x;
        this.type = CK3x;
        this.destroy = function() {};
        this.setSrc = function(V2x) { if (sW9N != this) { var gv5A = sW9N; if (gv5A) { gv5A.interrupt() } sW9N = this } if (CK3x == "flash") { lX7Q.setSrc(V2x) } else { lX7Q.src = V2x } };
        this.play = function() { if (sW9N != this) { var gv5A = sW9N; if (gv5A) { gv5A.interrupt();
                    sW9N = this;
                    this.recover() } else { sW9N = this } } if (CK3x == "flash") { lX7Q.as_play() } else { lX7Q.play() } };
        this.pause = function() { if (sW9N != this) return; if (CK3x == "flash") { lX7Q.as_pause() } else { lX7Q.pause() } };
        this.load = function() { if (sW9N != this) return; if (CK3x == "flash") { lX7Q.as_load() } else { lX7Q.load() } };
        this.interrupt = function() { onMediaCallBack({ type: "interrupt" }) };
        this.recover = function() { onMediaCallBack({ type: "recover" }) };
        this.getMedia = function() { return lX7Q }; var np7i = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k2x.be2x(np7i, function(T2x) { var Jw5B = "get" + T2x,
                Jp5u = "set" + T2x; if (CK3x == "flash") { if (!this[Jw5B]) { this[Jw5B] = function() { return lX7Q[Jw5B]() } } if (!this[Jp5u]) { this[Jp5u] = function(value) { lX7Q[Jp5u](value) } } } else { var bDc7V = T2x.slice(0, 1).toLowerCase() + T2x.slice(1); if (!this[Jw5B]) { this[Jw5B] = function() { return lX7Q[bDc7V] } } if (!this[Jp5u]) { this[Jp5u] = function(value) { lX7Q[bDc7V] = value } } } }, this) }

    function onMediaCallBack(d2x) { if (sW9N) { h2x.z2x(sW9N, d2x.type, d2x) } } })();
(function() { var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        cP3x = c2x("nej.p"),
        D2x = c2x("nm.w"),
        l2x = c2x("nm.x"),
        gR5W = c2x("nm.w.player.log"),
        b2x; var DEFAULT_BR = 128e3; var CDN_HOST_REG = /(m\d+\.music\.126\.net)/; var MAX_STALLED_RETRY = 2; var MediaError = { MEDIA_ERR_ABORTED: 1, MEDIA_ERR_NETWORK: 2, MEDIA_ERR_DECODE: 3, MEDIA_ERR_SRC_NOT_SUPPORTED: 4 }; var ErrorType = { INFO_GET_ERR: 1, NET_ERR: 2, UNKNOWN_ERR: 10 }; var LoadState = { LOAD_START: 1, LOADED_META: 2, IN_RELOAD: 3, IN_RE_GET_URL: 4, IN_SWITCH_CDN: 5, IN_SWITCH_MEDIA: 6 }; var RetryLevel = { NONE: 0, GET_URL: 1, RELOAD: 2, SWITCH_CDN: 3 }; var bDb7U = false;
    D2x.fo4s = NEJ.C();
    b2x = D2x.fo4s.O2x(H2x.cz3x);
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.cr3x = {};
        this.Zn0x(e2x.media);
        v2x.bq2x("/api/cdns", { type: "json", onload: function(d2x) { if (d2x.code) { this.pL8D = d2x.data } }.g2x(this) }) };
    b2x.bC2x = function() { this.bH3x();
        delete this.cr3x };
    b2x.Zq0x = function(bf2x) { if (!bf2x) return; var zj2x = this.cr3x.volume; if (this.dC3x) { this.dC3x.pause() } this.cr3x = { time: 0, id: bf2x.id, duration: bf2x.duration / 1e3, play: this.cr3x.play, stalledRetryCount: 0 }; if (zj2x != null) { this.cr3x.volume = zj2x } this.cr3x.loadState = LoadState.LOAD_START;
        this.bDa7T(bf2x.id);
        gR5W.oi7b("play song id: {0}", bf2x.id) };
    b2x.eN4R = function() { if (this.cr3x.error) { this.cr3x.error = null; if (this.cr3x.error == ErrorType.INFO_GET_ERR || this.bCZ7S()) { this.bCX7Q() } else { this.NW6Q() } } else { if (this.dC3x) { this.dC3x.play() } } this.cr3x.play = true;
        this.op7i("play") };
    b2x.fq4u = function() { if (this.dC3x) { this.dC3x.pause() } this.cr3x.play = false;
        this.op7i("pause") };
    b2x.nn7g = function(bA2x) { if (this.dC3x) { this.dC3x.setCurrentTime(bA2x) } this.cr3x.time = bA2x;
        gR5W.oi7b("seek to: {0}", bA2x) };
    b2x.bos4w = function() { return this.cr3x.duration || 0 };
    b2x.uQ0x = function() { return !!this.cr3x.play };
    b2x.lG7z = function(NA6u) { this.cr3x.volume = NA6u; if (this.dC3x) { this.dC3x.setVolume(NA6u) } };
    b2x.boB4F = function() { return this.cr3x.time };
    b2x.Zn0x = function(t2x) { D2x.bSl2x(t2x, function(lX7Q) { this.dC3x = lX7Q;
            gR5W.oi7b("media loaded: {0}", lX7Q.type);
            this.bU3x([
                [this.dC3x, "loadedmetadata", this.bSd2x.g2x(this)],
                [this.dC3x, "ended", this.bSb2x.g2x(this)],
                [this.dC3x, "waiting", this.xi1x.g2x(this)],
                [this.dC3x, "play", this.tj9a.g2x(this)],
                [this.dC3x, "pause", this.boJ4N.g2x(this)],
                [this.dC3x, "playing", this.Mz6t.g2x(this)],
                [this.dC3x, "timeupdate", this.bRZ2x.g2x(this)],
                [this.dC3x, "progress", this.rm8e.g2x(this)],
                [this.dC3x, "stalled", this.boO4S.g2x(this)],
                [this.dC3x, "interrupt", this.fq4u.g2x(this)],
                [this.dC3x, "recover", this.bRY2x.g2x(this)],
                [this.dC3x, "error", this.em4q.g2x(this)]
            ]); if (this.cr3x) { if (this.cr3x.loadState == LoadState.LOAD_START || this.cr3x.loadState == LoadState.IN_SWITCH_MEDIA) { this.boR4V(); if (this.cr3x.volume != null) { this.dC3x.setVolume(this.cr3x.volume) } } } }.g2x(this)) };
    b2x.bRX2x = function(t2x) { this.Gq4u();
        this.dC3x.destroy();
        this.cr3x.loadState = LoadState.IN_SWITCH_MEDIA;
        this.xi1x();
        this.Zn0x(t2x);
        gR5W.oi7b("switch media") };
    b2x.cvy0x = function() { return this.dC3x };
    b2x.bDa7T = function() { this.xi1x();
        v2x.bq2x("/api/song/enhance/player/url", { type: "json", query: { ids: JSON.stringify([this.cr3x.id]), br: DEFAULT_BR }, onload: this.bCP7I.g2x(this), onerror: this.bCP7I.g2x(this) }) };
    b2x.bCP7I = function(d2x) { if (d2x.code == 200 && d2x.data && d2x.data.length) { var bt2x = d2x.data[0]; if (!bt2x.url) { this.cr3x.error = ErrorType.INFO_GET_ERR;
                this.op7i("error", { code: this.cr3x.error }); return } this.cr3x.playUrl = bt2x.url;
            this.cr3x.expireTime = (new Date).getTime() + bt2x.expi * 1e3;
            this.boR4V() } else { this.cr3x.error = ErrorType.INFO_GET_ERR;
            this.op7i("error", { code: this.cr3x.error });
            gR5W.bT3x("info load error") } };
    b2x.boR4V = function() { if (this.dC3x) { var V2x = this.cr3x.playUrl; if (this.cr3x.time > 0 && (this.cr3x.loadState == LoadState.IN_RE_GET_URL || this.cr3x.loadState == LoadState.IN_RE_GET_URL)) { V2x += "#t=" + this.cr3x.time } this.dC3x.setSrc(V2x);
            gR5W.oi7b("load mp3: {0},loadState: {1}.", V2x, this.cr3x.loadState) } };
    b2x.bCN7G = function() { if (/#t=(\d+)$/.test(this.dC3x.getSrc())) { return parseInt(RegExp.$1) || 0 } else { return 0 } };
    b2x.NW6Q = function() { var bA2x = parseInt(this.cr3x.time) || 0,
            bRP2x = this.bCN7G(); if (bA2x === bRP2x) { this.dC3x.load() } else { this.dC3x.setSrc(this.cr3x.playUrl + "#t=" + bA2x) } this.cr3x.loadState = LoadState.IN_RELOAD;
        this.xi1x();
        gR5W.oi7b("reload from: {0}", bA2x) };
    b2x.bCX7Q = function() { this.cr3x.loadState = LoadState.IN_RE_GET_URL;
        this.bDa7T() };
    b2x.bCJ7C = function() { var uB0x = getHost(this.cr3x.playUrl); if (uB0x) { for (var i = 0; i < this.pL8D.length; i++) { var jV6P = this.pL8D[i] || [],
                    s2x = jV6P.indexOf(uB0x); if (s2x >= 0 && jV6P.length > 1) { return jV6P[(s2x + 1) % jV6P.length] } } }

        function getHost(V2x) { if (CDN_HOST_REG.test(V2x)) return RegExp.$1 } };
    b2x.bRK2x = function() { this.cr3x.playUrl = this.cr3x.playUrl.replace(CDN_HOST_REG, this.bCJ7C());
        this.cr3x.loadState = LoadState.IN_SWITCH_CDN;
        this.boR4V();
        this.xi1x() };
    b2x.bSd2x = function() { if (this.cr3x.loadState == LoadState.LOAD_START) { this.cr3x.loadState = LoadState.LOADED_META; if (this.dC3x.type == "audio") { this.cr3x.duration = this.dC3x.getDuration() } this.op7i("loadedmeta", { duration: this.cr3x.duration }) } else { this.cr3x.loadState = LoadState.LOADED_META } if (this.cr3x.play) { this.dC3x.play() } else { this.dC3x.pause() } if (this.cr3x.time && parseInt(this.cr3x.time) != this.bCN7G()) { this.dC3x.setCurrentTime(this.cr3x.time) } this.ET3x();
        this.Mz6t();
        bDb7U = true;
        gR5W.oi7b("loaded meta") };
    b2x.bSb2x = function() { this.cr3x.ended = true;
        this.op7i("ended") };
    b2x.xi1x = function() { if (!this.cr3x.waiting) { this.cr3x.waiting = true;
            this.cr3x.waitTimestamp = +(new Date);
            this.op7i("waiting") } };
    b2x.Mz6t = function() { this.cr3x.waiting = false;
        this.cr3x.waitTimestamp = 0;
        this.op7i("playing") };
    b2x.tj9a = function() { this.op7i("play") };
    b2x.boJ4N = function() { this.op7i("pause") };
    b2x.bRZ2x = function() { if (this.cr3x.loadState != LoadState.LOADED_META) return; var bA2x = this.dC3x.getCurrentTime(); if (this.cr3x.waiting && bA2x > this.cr3x.time) { this.Mz6t() } this.cr3x.time = bA2x;
        this.op7i("timeupdate", { time: this.cr3x.time, duration: this.cr3x.duration }) };
    b2x.rm8e = function(d2x) { if (this.cr3x.loadState != LoadState.LOADED_META) return; var m2x = {}; if (d2x.data) { m2x.total = d2x.data.total;
            m2x.loaded = d2x.data.loaded } else { var vy0x = this.dC3x.getBuffered(),
                bA2x = this.dC3x.getCurrentTime(),
                nl7e = 0; for (var i = 0; i < vy0x.length; i++) { if (bA2x > vy0x.start(i) && bA2x < vy0x.end(i)) { nl7e = vy0x.end(i); break } } m2x.total = this.cr3x.duration;
            m2x.loaded = Math.min(nl7e, m2x.total) } this.op7i("progress", m2x) };
    b2x.ET3x = function() { if (this.cr3x.retry) { clearTimeout(this.cr3x.retry.tid);
            this.cr3x.retry = null } };
    b2x.em4q = function() { var bQ3x = this.dC3x.getError();
        gR5W.bT3x("media error code: {0}, netState: {1}", bQ3x.code, this.dC3x.getNetworkState()); if (bQ3x.code == MediaError.MEDIA_ERR_NETWORK || bQ3x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) { var CC3x = l2x.bnc3x(); if (!this.cr3x.retry) { this.cr3x.retry = { level: RetryLevel.NONE } } else { window.clearTimeout(this.cr3x.retry.tid) } if (this.cr3x.retry.level == RetryLevel.NONE) { if (this.bCZ7S()) { this.cr3x.retry.level = RetryLevel.GET_URL;
                    this.bCX7Q();
                    gR5W.oi7b("Url expired, get url.") } else { this.cr3x.retry.level = RetryLevel.RELOAD;
                    this.cr3x.retry.tid = setTimeout(this.NW6Q.g2x(this), 3e3);
                    gR5W.oi7b("Reload mp3 3s later.") } } else if (this.cr3x.retry.level == RetryLevel.GET_URL) { this.cr3x.retry.level = RetryLevel.RELOAD;
                this.cr3x.retry.tid = setTimeout(this.NW6Q.g2x(this), 3e3);
                gR5W.oi7b("Reload mp3 3s later.") } else if (this.cr3x.retry.level == RetryLevel.RELOAD) { this.cr3x.retry.level = RetryLevel.SWITCH_CDN; if (this.bCJ7C()) { this.cr3x.retry.tid = setTimeout(this.bRK2x.g2x(this), 5e3);
                    gR5W.oi7b("Switch CDN 5s later.") } else { this.cr3x.retry.tid = setTimeout(this.NW6Q.g2x(this), 5e3);
                    gR5W.oi7b("Reload mp3 5s later.") } } else if (!bDb7U && this.dC3x.type == "audio" && !CC3x.useFlash && !cP3x.ZQ0x.mac && l2x.bbT1x().supported) { CC3x.useFlash = true;
                l2x.CB3x(CC3x);
                this.bRX2x("flash") } else { this.ET3x();
                this.fq4u();
                this.cr3x.error = ErrorType.NET_ERR;
                this.op7i("error", { code: this.cr3x.error });
                gR5W.bT3x("error can not retry.") } } else { this.ET3x();
            this.fq4u();
            this.cr3x.error = ErrorType.UNKNOWN_ERR;
            this.op7i("error", { code: this.cr3x.error });
            gR5W.bT3x("error can not retry.") } };
    b2x.boO4S = function() { var he5j = 0,
            bCI7B = 5e3; return function() { this.xi1x();
            clearTimeout(he5j);
            setTimeout(function() { var fI4M = +(new Date); if (this.cr3x.waiting && fI4M - this.cr3x.waitTimestamp >= bCI7B && this.cr3x.stalledRetryCount < MAX_STALLED_RETRY) { gR5W.oi7b("stalled too long retry.");
                    this.cr3x.stalledRetryCount++;
                    this.NW6Q() } }.g2x(this), bCI7B);
            gR5W.oi7b("stalled") } }();
    b2x.bCZ7S = function() { var fI4M = +(new Date); return fI4M > this.cr3x.expireTime };
    b2x.bRY2x = function() { var bA2x = parseInt(this.cr3x.time) || 0;
        this.dC3x.setSrc(this.cr3x.playUrl + "#t=" + bA2x);
        this.cr3x.loadState = LoadState.IN_RELOAD;
        this.xi1x();
        gR5W.oi7b("recover from: {0}", bA2x) };
    b2x.op7i = function(W2x, j2x) { h2x.z2x(D2x.fo4s, "playaction", { action: W2x, data: j2x || {} }) };
    H2x.fv4z.B2x({ element: D2x.fo4s, event: ["playaction"] }) })();
(function() { if (!(window == top)) { return } var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        H2x = c2x("nej.ut"),
        D2x = c2x("nm.w"),
        b2x;
    D2x.DB3x = NEJ.C();
    b2x = D2x.DB3x.O2x(D2x.fo4s);
    K2x = D2x.DB3x.cg3x;
    b2x.cl3x = function() { this.cs3x() };
    b2x.bRG2x = function(bK3x) { this.Zq0x(bK3x);
        this.eN4R() };
    b2x.bpr4v = function() { this.fq4u() };
    b2x.uY0x = function(d2x) { if (d2x.action == "play") { this.fq4u() } };
    b2x.op7i = function(W2x, j2x) { h2x.z2x(D2x.DB3x, "tmpplayaction", { action: W2x, data: j2x || {}, tmp: true }) };
    b2x.re8W = function() { return this.cr3x };
    H2x.fv4z.B2x({ element: D2x.DB3x, event: ["tmpplayaction"] }) })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        ff4j = c2x("nej.n"),
        v2x = c2x("nej.j"),
        H2x = c2x("nej.ut"),
        bd2x = c2x("nej.ui"),
        D2x = c2x("nm.w"),
        n2x = c2x("nm.l"),
        jR6L = c2x("nm.c"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K2x, ZC0x = [{ item: "m-publish-search-single", type: 1 }, { item: "m-publish-search-artist", type: 100 }, { item: "m-publish-search-album", type: 10 }, { item: "m-publish-search-mv", type: 1004 }, { item: "m-publish-search-playlist", type: 1e3 }, { item: "m-publish-search-djRadio", type: 1009 }]; var bpA4E = { song: 0, artist: 1, album: 2, mv: 3, playlist: 4, djradio: 5 };
    D2x.bpB4F = NEJ.C();
    b2x = D2x.bpB4F.O2x(bd2x.es4w);
    b2x.cl3x = function(e2x) { this.cs3x(e2x); var i2x = a1x.I2x(this.o2x, "j-flag");
        this.cvA0x = i2x.shift();
        this.bRC2x = i2x.shift();
        this.ER3x = i2x.shift();
        this.bpK4O = i2x.shift();
        this.bpL4P = [i2x.shift(), i2x.shift(), i2x.shift(), i2x.shift(), i2x.shift(), i2x.shift()];
        this.ZE0x = i2x.shift();
        this.bCD7w = i2x.shift();
        this.qn8f = { list: this.bpL4P, selected: "z-curr", onchange: this.bCB7u.g2x(this) };
        h2x.q2x(this.ER3x, "input", this.ZH0x.g2x(this));
        h2x.q2x(this.ER3x, "propertychange", this.ZH0x.g2x(this));
        h2x.q2x(this.ER3x, "keyup", this.ZH0x.g2x(this));
        h2x.q2x(this.bRC2x, "click", this.ZH0x.g2x(this));
        h2x.q2x(this.ZE0x, "click", this.cv3x.g2x(this));
        h2x.q2x(this.bCD7w, "click", function() { this.z2x("oncancel", {}) }.g2x(this));
        this.P2x = p2x.Cx3x.fX5c();
        this.Ky5D = top.nm.w.DB3x.fX5c();
        H2x.fv4z.B2x({ element: top.nm.w.DB3x, event: ["tmpplayaction"] });
        this.pV8N = { limit: 100, offset: 0, parent: this.ZE0x, onbeforelistload: this.pk8c.g2x(this) };
        p2x.sk = "fuck" + a1x.u2x(this.bpK4O, "xname") + "458";
        h2x.q2x(top.nm.w.DB3x, "tmpplayaction", this.uY0x.g2x(this)) };
    b2x.bZ3x = function() { this.ca3x = "m-xwgt-publish-search" };
    b2x.bk2x = function(e2x) { this.bl2x(e2x); if (!!this.zV2x) { this.zV2x.S2x();
            delete this.zV2x } this.qn8f.index = bpA4E[e2x.type || "song"];
        this.zV2x = H2x.Ct3x.B2x(this.qn8f);
        this.ER3x.value = "";
        this.ER3x.focus();
        this.tL0x = "";
        this.cxV0x = 0; if (e2x.showMV == true) { this.bpL4P[bpA4E["mv"]].parentNode.style.display = "";
            a1x.y2x(this.bpK4O, "srchtab-1") } else { this.bpL4P[bpA4E["mv"]].parentNode.style.display = "none";
            a1x.w2x(this.bpK4O, "srchtab-1") } if (!!this.dr3x) { this.dr3x = this.dr3x.S2x() } if (e2x.hideBack) { a1x.y2x(this.bCD7w.parentNode, "f-hide") } };
    b2x.bC2x = function() { this.Ky5D.bpr4v();
        this.bH3x() };
    b2x.ZH0x = function() { var value = this.ER3x.value.trim(); if (value && value.length) { if (value != this.tL0x) { this.tL0x = value;
                this.bCB7u({ index: this.zV2x.sj9a() }) } } else { if (this.dr3x) { this.dr3x = this.dr3x.S2x() } } this.tL0x = value };
    b2x.cv3x = function() { var bRs2x = function(E2x) { return a1x.by2x(E2x, "sitm") || a1x.by2x(E2x, "itm") || a1x.by2x(E2x, "mv-item") },
            bRr2x = function(E2x) { return a1x.by2x(E2x, "ply") },
            bCy7r = function() { n2x.Z2x.N2x({ type: 2, tip: "å› åˆä½œæ–¹è¦æ±‚ï¼Œè¯¥èµ„æºéœ€ä»˜è´¹ä½¿ç”¨" }) },
            bRo2x = function() { n2x.Z2x.N2x({ type: 2, tip: "å› åˆä½œæ–¹è¦æ±‚ï¼Œè¯¥èµ„æºéœ€ä¸‹è½½åŽæ’­æ”¾" }) },
            bqD4H = function(bf2x) { if (bf2x && bf2x.privilege && bf2x.privilege.toast) { v2x.bq2x("/api/song/toast", { query: { id: bf2x.id }, type: "json", onload: QG7z.g2x(this), onerror: QG7z.g2x(this) }) } else { QL7E() } },
            QG7z = function(Q2x) { QL7E((Q2x || Y2x).toast) },
            QL7E = function(bE2x) { n2x.Z2x.N2x({ type: 2, tip: bE2x || "å› åˆä½œæ–¹è¦æ±‚ï¼Œè¯¥èµ„æºæš‚æ—¶ä¸‹æž¶>_<" }) }; return function(d2x) { var DU3x = h2x.U2x(d2x, bRr2x),
                i2x = h2x.U2x(d2x, bRs2x),
                dY4c = this.Ky5D.re8W(); if (!!i2x) { h2x.bh2x(d2x);
                this.JK5P = a1x.u2x(i2x, "id");
                this.JF5K = a1x.u2x(i2x, "type"); if (this.JF5K == 18) { var bK3x = this.P2x.eh4l(this.JK5P),
                        pf8X = l2x.ol7e(bK3x); if (!DU3x) { if (pf8X == 10) { bCy7r(); return } else if (pf8X == 100) { bqD4H(bK3x); return } } else { if (pf8X == 10) { bCy7r(); return } else if (pf8X == 100) { bqD4H(bK3x); return } else if (pf8X == 11) { bRo2x(); return } else { a1x.w2x(this.Ac2x, "z-pause z-loading"); if (DU3x == this.Ac2x && dY4c.play && !dY4c.ended) { this.Ky5D.bpr4v() } else { this.Ac2x = DU3x;
                                this.Ky5D.bRG2x(bK3x) } return } } } else if (this.JF5K == 70) { if (a1x.by2x(i2x, "z-noprogram")) { n2x.Z2x.N2x({ type: 2, tip: "ä¸èƒ½åˆ†äº«æ²¡æœ‰èŠ‚ç›®çš„ç”µå°" }); return } } this.bRm2x() } } }();
    b2x.bRm2x = function() { var hm5r = this.P2x.eh4l(this.JK5P),
            rB8t = l2x.bHA9r(this.JF5K, hm5r);
        rB8t.title = rB8t.title || "";
        rB8t.author = rB8t.author || "";
        rB8t.picUrl = rB8t.picUrl || "";
        rB8t.authors = rB8t.authors || ""; if (this.JF5K == 70) { this.JK5P = this.JK5P.slice(0, -4) } this.z2x("onfinish", { id: this.JK5P, type: this.JF5K, data: rB8t }) };
    b2x.uY0x = function(d2x) { var j2x = d2x.data; if (!this.Ac2x) { return } switch (d2x.action) {
            case "play":
                a1x.ev4z(this.Ac2x, "z-pause z-play", "z-loading"); break;
            case "pause":
            case "ended":
                a1x.w2x(this.Ac2x, "z-pause z-loading"); break;
            case "error":
                n2x.Z2x.N2x({ type: 2, tip: "è¯•å¬é‡åˆ°é—®é¢˜ï¼Œæ’­æ”¾å¤±è´¥" });
                a1x.w2x(this.Ac2x, "z-pause z-loading"); break;
            case "playing":
                a1x.ev4z(this.Ac2x, "z-loading", "z-pause"); break;
            case "waiting":
                a1x.ev4z(this.Ac2x, "z-pause", "z-loading"); break } };
    b2x.bRl2x = function(d2x) { if (d2x.result.code == 407) { this.ZE0x.innerHTML = '<div class="n-norlt s-fc1">æ ¹æ®ç›¸å…³æ³•å¾‹æ³•è§„å’Œæ”¿ç­–ï¼Œæœç´¢ç»“æžœæœªäºˆæ˜¾ç¤º</div>'; return } this.ZE0x.innerHTML = '<div class="n-norlt s-fc1">é¡µé¢å‡ºé”™ï¼Œè¯·ç¨åŽå†è¯•ï¼</div>' };
    b2x.bCB7u = function(d2x) { if (!this.tL0x || d2x.index < 0 || d2x.index > 5) { return } this.Ky5D.bpr4v(); var bc2x = ZC0x[d2x.index],
            e2x = NEJ.X({}, this.pV8N);
        e2x.cache = { klass: p2x.Cx3x, clear: true, onerror: this.bRl2x.g2x(this) };
        e2x.cache.lkey = "search-publish-" + bc2x.type + "-" + this.tL0x;
        e2x.item = { klass: bc2x.item, getRestrictLevel: l2x.ol7e, dur2time: l2x.lV7O }; if (!e2x.cache.data) { e2x.cache.data = {} } e2x.cache.data.s = this.tL0x;
        e2x.cache.data.type = bc2x.type;
        e2x.cache.data.isPub = true; if (bc2x.type == 1) { e2x.cache.data.hlpretag = '<span class="s-fc7">';
            e2x.cache.data.hlposttag = "</span>" } e2x.onemptylist = this.bRk2x.g2x(this, this.tL0x); if (!!this.Eb3x) this.P2x.tn9e(this.Eb3x); if (!!this.dr3x) { this.dr3x = this.dr3x.S2x() } this.dr3x = H2x.mO7H.B2x(e2x);
        this.Eb3x = e2x.cache.lkey };
    b2x.pk8c = function(d2x) { d2x.value = a1x.hX5c("m-publish-search-loading") };
    b2x.bRk2x = function(J2x, d2x) { a1x.dT3x(d2x.parent, "m-publish-emtpy-message", { key: J2x });
        d2x.stopped = true } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        cP3x = c2x("nej.p"),
        v2x = c2x("nej.j"),
        ch3x = c2x("nej.ut"),
        bI3x = c2x("nej.ui"),
        D2x = c2x("nm.w"),
        b2x, K2x; var bRi2x = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    D2x.Ed3x = NEJ.C();
    b2x = D2x.Ed3x.O2x(bI3x.es4w); var gd5i = a1x.en4r("m-wgt-receiverInput"); var bRh2x = a1x.en4r("m-wgt-receiverList"); var hV5a = a1x.sg9X(bRi2x); var bRg2x = a1x.en4r('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="åˆ é™¤">&times;</a></div>');
    b2x.cl3x = function(e2x) { this.bb2x = [];
        this.uy0x = e2x.receiver || null;
        this.bRf2x = e2x.unique || false;
        this.lZ7S = e2x.err;
        this.bCu7n(this.bCt7m, e2x.uid);
        this.cs3x(e2x) };
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.Od6X();
        this.NE6y();
        this.baa0x(); if (e2x.receiver) this.bas0x(e2x.receiver.nickname, e2x.receiver.userId);
        a1x.X2x(this.zk2x, "display", "block");
        a1x.X2x(this.bat0x, "cursor", "text");
        a1x.X2x(this.zk2x, "cursor", "text") };
    b2x.bZ3x = function() { var j2x = this.bCs7l();
        this.ca3x = a1x.hW5b(a1x.bP3x(gd5i, { receiver: this.uy0x, users: j2x }));
        this.li6c = hV5a };
    b2x.bR3x = function() { this.cb3x(); var bx2x = a1x.I2x(this.o2x, "j-flag"); var gz5E = a1x.I2x(this.o2x, "j-item");
        this.bat0x = bx2x[0];
        this.bCr7k = bx2x[1];
        this.dG3x = bx2x[2];
        this.zk2x = bx2x[3];
        this.bab0x = bx2x[4];
        this.baz0x = bx2x[5];
        this.fd4h = gz5E;
        a1x.y2x(this.fd4h[0], "j-selected");
        h2x.q2x(this.dG3x, "keyup", this.baA0x.g2x(this));
        h2x.q2x(this.dG3x, "keydown", this.LK5P.g2x(this));
        h2x.q2x(this.dG3x, "focus", this.ki6c.g2x(this));
        h2x.q2x(this.bab0x, "click", this.bQY2x.g2x(this));
        h2x.q2x(this.bat0x, "click", this.bQX2x.g2x(this));
        h2x.q2x(document.body, "click", this.nF7y.g2x(this));
        h2x.q2x(this.dG3x, "input", this.fl4p.g2x(this));
        h2x.q2x(this.dG3x, "blur", this.ok7d.g2x(this)) };
    b2x.bC2x = function(e2x) { h2x.mg7Z(document.body, "click", this.nF7y.g2x(this));
        this.bH3x();
        this.baa0x();
        this.bQV2x();
        this.nF7y() };
    b2x.baA0x = function(d2x) { h2x.bh2x(d2x); var iO5T = d2x.keyCode || d2x.which; var bi2x = this.dG3x.value; var bp2x = this.fd4h.length; var pW8O = a1x.I2x(this.o2x, "j-selected")[0]; switch (iO5T) {
            case 13:
                var kk6e = a1x.gi5n(pW8O, "data-username"); var hu5z = a1x.gi5n(pW8O, "data-userId");
                this.bas0x(kk6e, hu5z);
                this.nF7y();
                this.dG3x.value = ""; break;
            case 38:
                var s2x = a1x.gi5n(pW8O, "data-index") - 1 < 0 ? bp2x - 1 : a1x.gi5n(pW8O, "data-index") - 1;
                a1x.w2x(pW8O, "j-selected");
                a1x.y2x(this.fd4h[s2x], "j-selected"); break;
            case 40:
                var s2x = parseInt(a1x.gi5n(pW8O, "data-index")) + 1 >= bp2x ? 0 : parseInt(a1x.gi5n(pW8O, "data-index")) + 1;
                a1x.w2x(pW8O, "j-selected");
                a1x.y2x(this.fd4h[s2x], "j-selected"); break;
            default:
                this.vj0x() } };
    b2x.LK5P = function(d2x) { var iO5T = d2x.keyCode || d2x.which; var bi2x = this.dG3x.value; var s2x = a1x.I2x(this.o2x, "j-receiver").length - 1; if (iO5T === 8 && bi2x === "") this.bQT2x(s2x) };
    b2x.fl4p = function(d2x) { var bi2x = this.dG3x.value; if (bi2x.length > 10) { this.dG3x.value = bi2x.substring(0, 10); return } cP3x.cS3x.browser == "ie" && cP3x.cS3x.version < "7.0" ? setTimeout(this.baQ0x.g2x(this), 0) : this.baQ0x();
        this.NE6y() };
    b2x.ki6c = function() { if (this.bb2x[0]) this.vj0x();
        else this.bCu7n(this.bQS2x);
        a1x.X2x(this.zk2x, "display", "none") };
    b2x.ok7d = function() { var bp2x = a1x.I2x(this.o2x, "j-receiver").length; if (this.dG3x.value.trim() == "" && bp2x <= 0) a1x.X2x(this.zk2x, "display", "block") };
    b2x.bas0x = function(kk6e, hu5z) { var GW4a = this.Rq7j(); if (GW4a.length >= 10) { this.dz3x(); return } var bd2x; for (bd2x = 0; bd2x < GW4a.length; bd2x++) { if (GW4a[bd2x] == hu5z) { this.nF7y(); return } } if (!kk6e || !hu5z) return; var f2x = a1x.dq3x(a1x.hW5b(a1x.bP3x(bRg2x, { username: kk6e, userId: hu5z }))); var bB2x = this.bCr7k.parentNode; if (this.bRf2x) { this.baa0x() } bB2x.insertBefore(f2x, this.bCr7k);
        this.dG3x.value = ""; var bp2x = a1x.I2x(this.o2x, "j-receiver").length; if (bp2x > 1) a1x.X2x(this.zk2x, "display", "none");
        this.baQ0x();
        this.NE6y() };
    b2x.baa0x = function() { var Lt5y = a1x.I2x(this.o2x, "j-receiver"); var bd2x; if (Lt5y.length > 0) { for (bd2x = 0; bd2x < Lt5y.length; bd2x++) { a1x.cH3x(Lt5y[bd2x], false) } } };
    b2x.bQV2x = function() { this.dG3x.value = "" };
    b2x.bQT2x = function(s2x) { this.dz3x(!0); var Lt5y = a1x.I2x(this.o2x, "j-receiver");
        a1x.cH3x(Lt5y[s2x], false);
        this.NE6y() };
    b2x.vj0x = function() { var bi2x = this.dG3x.value; var bD2x = bi2x.trim().toLowerCase(); var j2x;
        bD2x = bD2x.replace(/\[/g, "\\[");
        bD2x = bD2x.replace(/\]/g, "\\]");
        j2x = this.bCs7l(bD2x);
        this.bQR2x(j2x) };
    b2x.nF7y = function(d2x) { a1x.X2x(this.bab0x, "display", "none") };
    b2x.dz3x = function(gx5C) { if (gx5C && this.lZ7S) { a1x.X2x(this.lZ7S, "display", "none"); return } if (this.lZ7S) a1x.X2x(this.lZ7S, "display", "block") };
    b2x.bQY2x = function(d2x) { h2x.ce3x(d2x); var dd3x = d2x.target || d2x.srcElement; if (a1x.by2x(dd3x, "j-flag")) return; var bB2x = dd3x.nodeName.toLowerCase() == "a" ? dd3x.parentNode : dd3x.parentNode.parentNode; var kk6e = a1x.gi5n(bB2x, "data-username"); var hu5z = a1x.gi5n(bB2x, "data-userId");
        this.bas0x(kk6e, hu5z);
        this.nF7y();
        a1x.X2x(this.zk2x, "display", "none") };
    b2x.bQX2x = function(d2x) { h2x.bh2x(d2x); var dd3x = d2x.target || d2x.srcElement; if (a1x.by2x(dd3x.parentNode, "j-receiver")) { a1x.cH3x(dd3x.parentNode, false);
            this.dz3x(!0);
            this.NE6y() } else this.dG3x.focus() };
    b2x.baQ0x = function() { this.baz0x.innerHTML = this.dG3x.value; var dm3x = this.baz0x.offsetWidth + 2;
        a1x.X2x(this.dG3x, "width", dm3x + "px") };
    b2x.NE6y = function() { var TR8J = a1x.hJ5O(this.dG3x, this.o2x).y; var bCp7i = Math.floor((TR8J - 8) / 27); if (bCp7i < 0) return;
        a1x.X2x(this.bat0x, "height", 19 + bCp7i * 29 + "px") };
    b2x.Od6X = function() { var pz8r = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"]; for (var i = 0; i < pz8r.length; i++) { a1x.X2x(this.baz0x, pz8r[i], a1x.da3x(this.dG3x, pz8r[i])) } };
    b2x.bCu7n = function(du3x, C2x) { var cU3x = C2x ? C2x : window.GUser.userId; var V2x = "/api/user/getfollows/" + cU3x; var fF4J = v2x.bq2x(V2x, { sync: false, method: "get", query: "offset = 0&limit=1000&order=true", onload: du3x.g2x(this), onerror: function(j2x) { this.bb2x = [] }, onbeforerequest: function(j2x) {} }) };
    b2x.bCt7m = function(j2x) { this.bb2x = JSON.parse(j2x).follow || []; var C2x = GUser.userId; for (var i = 0; i < this.bb2x.length; i++) { if (this.bb2x[i].userId == C2x) { this.bb2x.splice(i, 1); continue } this.bb2x[i].avatarUrl = this.bb2x[i].avatarUrl + "?param=30y30" } };
    b2x.bQS2x = function(j2x) { if (this.bb2x[0]) return;
        this.bCt7m(j2x);
        this.vj0x() };
    b2x.bCs7l = function(bD2x) { var bD2x = bD2x ? bD2x : "";
        this.bb2x = this.bb2x[0] ? this.bb2x : []; var bp2x = this.bb2x.length; var Lp5u = this.Rq7j(); var rL9C = []; var PF6z, PR7K, bbi1x; if (!this.bb2x[0]) return rL9C; for (var bd2x = 0; bd2x < bp2x; bd2x++) { bbi1x = false; for (var v2x = 0; v2x < Lp5u.length; v2x++) { if (this.bb2x[bd2x].userId == Lp5u[v2x]) { bbi1x = true; break } } if (bbi1x) continue;
            PF6z = this.bb2x[bd2x].nickname.toLowerCase().search(bD2x);
            PR7K = this.bb2x[bd2x].py ? this.bb2x[bd2x].py.toLowerCase().search(bD2x) : -1; if (PF6z !== -1 || PR7K != -1) rL9C.push(this.bb2x[bd2x]) } return rL9C };
    b2x.bQR2x = function(j2x) { a1x.dT3x(this.bab0x, bRh2x, { users: j2x });
        a1x.y2x(a1x.I2x(this.o2x, "j-item")[0], "j-selected");
        this.fd4h = a1x.I2x(this.o2x, "j-item");
        a1x.X2x(this.bab0x, "display", "block") };
    b2x.Rq7j = function() { var rL9C = a1x.I2x(this.o2x, "j-receiver") || []; var hu5z = []; for (var i = 0; i < rL9C.length; i++) { hu5z.push(a1x.gi5n(rL9C[i], "data-id")) } return hu5z };
    b2x.cvE0x = function() { var hu5z = this.Rq7j(); var rL9C = []; for (var i = 0; i < hu5z.length; i++) { for (var j = 0; j < this.bb2x.length; j++) { if (hu5z[i] == this.bb2x[j].userId) rL9C.push(this.bb2x[j]) } } return rL9C };
    b2x.bQK2x = function() { this.baa0x() };
    D2x.Ed3x.N2x = function(e2x) { if (!GUser || !GUser.userId || GUser.userId <= 0) { n2x.nG7z.N2x({ title: "ç™»å½•" }); return } e2x = e2x || {}; if (e2x.parent === undefined) e2x.parent = document.body;!!this.eJ4N && this.eJ4N.S2x();
        this.eJ4N = this.B2x(e2x) };
    D2x.Ed3x.bo2x = function() {!!this.eJ4N && this.eJ4N.S2x() };
    D2x.Ed3x.EA3x = function() { return this.nF7y() };
    D2x.Ed3x.cvF0x = function() { return this.vj0x() } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        b2x, K2x;
    n2x.EJ3x = NEJ.C();
    b2x = n2x.EJ3x.O2x(n2x.blY3x);
    K2x = n2x.EJ3x.cg3x;
    b2x.bk2x = function() { var Es3x; var bQG2x = function(A2x, J2x) { Es3x = Es3x || []; if (J2x != "18") Es3x.push({ key: J2x, value: A2x }) }; return function(e2x) { this.bl2x(e2x); if (e2x.upwards) { a1x.y2x(this.o2x, "m-emts-up") } else { a1x.w2x(this.o2x, "m-emts-up") } if (!Es3x) { var bv2x = l2x.cea5f();
                k2x.dZ4d(bv2x, bQG2x) } var bp2x = Es3x.length;
            Es3x.splice(bp2x - 2, 0, { key: "18", value: "186" });
            this.bad0x = Es3x;
            this.bQF2x = !!e2x.autoHide } }();
    b2x.bZ3x = function() { this.ca3x = "ntp-portrait" };
    b2x.bR3x = function() { this.cb3x(); var i2x = a1x.I2x(this.o2x, "j-flag");
        this.bG3x = i2x[0];
        this.bQE2x = i2x[1];
        this.bQD2x = i2x[2];
        this.bQw1x = i2x[3];
        h2x.q2x(this.bG3x, "click", this.xu1x.g2x(this));
        h2x.q2x(this.bQE2x, "click", this.Eh3x.g2x(this, 1));
        h2x.q2x(this.bQw1x, "click", this.Eh3x.g2x(this, 2)) };
    b2x.bbA1x = function(s2x) { this.ZW0x = s2x; var bj2x = (s2x - 1) * 50; var i2x = this.bad0x.slice(bj2x, Math.min(bj2x + 50, this.bad0x.length));
        this.bG3x.innerHTML = a1x.bP3x("jst-portrait", { plist: i2x }, { purl: l2x.bIb9S });
        this.bQD2x.innerText = s2x + "/" + Math.ceil(this.bad0x.length / 50) };
    b2x.Eh3x = function(s2x) { var bQu1x = Math.ceil(this.bad0x.length / 50); if (s2x == 1 && this.ZW0x == 1 || s2x == 2 && this.ZW0x == bQu1x) return;
        s2x == 1 ? this.bbA1x(this.ZW0x - 1) : this.bbA1x(this.ZW0x + 1) };
    b2x.xu1x = function(d2x) { var E2x = h2x.U2x(d2x, "d:text"); if (!E2x) return; var d2x = { url: a1x.u2x(E2x, "url"), text: a1x.u2x(E2x, "text") };
        this.z2x("onselect", d2x); if (this.bQF2x && !d2x.stopped) { this.bo2x() } };
    b2x.N2x = function() { K2x.N2x.call(this);
        this.bbA1x(1) } })();
(function() { var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        cP3x = c2x("nej.p"),
        ba2x = c2x("nej.h"),
        H2x = c2x("nej.ut"),
        jj6d = /^[#?]+/,
        DI3x = /#(.*?)$/,
        xL1x = window,
        bbF1x = !history.pushState || cP3x.ZQ0x.android || !history.auto; var ZR0x = function(V2x, bbJ1x) { xL1x.history[!bbJ1x ? "pushState" : "replaceState"](null, document.title, V2x) }; var ZN0x = function() { return location.parse(xL1x.location.href) };
    ZR0x = ZR0x.ef4j(function(d2x) { if (!bbF1x) return; var bg2x = d2x.args;
        d2x.stopped = !0;
        V2x = bg2x[0].replace(jj6d, "");!bg2x[1] ? xL1x.location.hash = V2x : xL1x.location.replace("#" + V2x) });
    ZN0x = ZN0x.ef4j(function(d2x) { if (!bbF1x) return;
        d2x.stopped = !0; var dI3x = DI3x.test(xL1x.location.href) ? RegExp.$1 : "";
        d2x.value = location.parse(dI3x.replace(jj6d, "")) });
    location.redirect = function(V2x, bbJ1x) { ZR0x(V2x, bbJ1x); return this };
    location.active = function() { var eR4V, V2x, iK5P, cC3x, NL6F; var bbM1x = function(iw5B) { if (!!cC3x) { cC3x = !1; return } var d2x = { oldValue: iK5P, newValue: ZN0x() }; if (!!location.ignored) { location.ignored = !1 } else { h2x.z2x(location, "beforeurlchange", d2x); if (d2x.stopped) { if (!!iK5P) { cC3x = !0;
                        ZR0x(iK5P.href, !0) } return } } V2x = xL1x.location.href;
            iK5P = d2x.newValue;
            h2x.z2x(location, "urlchange", iK5P);
            ba2x.bkw3x(iK5P.href) }; var bCl7e = function() { if (V2x != xL1x.location.href) bbM1x();
            eR4V = requestAnimationFrame(bCl7e) }; return function(bL3x) { if (!!NL6F) return this;
            NL6F = !0;
            xL1x = bL3x || window; if (bbF1x && "onhashchange" in window && cP3x.mr7k.trident2) { h2x.q2x(xL1x, "hashchange", bbM1x);
                bbM1x() } else if (!eR4V) { eR4V = requestAnimationFrame(bCl7e) } return this } }();
    location.parse = function() { var fZ5e = /^https?:\/\/.*?\//i,
            jj6d = /[?#]/; return function(V2x) { var m2x = { href: V2x };
            V2x = (V2x || "").replace(fZ5e, "/").split(jj6d); var cu3x = 1; if (V2x[0] == "/" && (V2x[1] || "").indexOf("/") == 0) cu3x = 2;
            m2x.path = V2x.splice(0, cu3x).join("?");
            m2x.query = k2x.ho5t(V2x.join("&")); return m2x } }();
    location.same = function(V2x) { return ZN0x().href == V2x };
    H2x.fv4z.B2x({ element: location, event: ["beforeurlchange", "urlchange"] }) })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        fJ4N = c2x("nm.ut");
    fJ4N.tx9o = function(ey4C) { var go5t = { text: "", start: 0, end: 0 }; if (ey4C.setSelectionRange) { go5t.start = ey4C.selectionStart;
            go5t.end = ey4C.selectionEnd;
            go5t.text = go5t.start != go5t.end ? ey4C.value.substring(go5t.start, go5t.end) : "" } else if (document.selection) { var i, ZK0x = document.selection.createRange(),
                xt1x = document.body.createTextRange();
            xt1x.moveToElementText(ey4C);
            go5t.text = ZK0x.text;
            go5t.bookmark = ZK0x.getBookmark(); for (i = 0; xt1x.compareEndPoints("StartToStart", ZK0x) < 0 && ZK0x.moveStart("character", -1) !== 0; i++) { if (ey4C.value.charAt(i) == "\n") { i++ } } go5t.start = i;
            go5t.end = go5t.text.length + go5t.start } return go5t };
    fJ4N.ZI0x = function(ey4C, go5t) { var xt1x; if (!go5t) { go5t = { text: "", start: 0, end: 0 } } ey4C.focus(); if (ey4C.setSelectionRange) { ey4C.setSelectionRange(go5t.start, go5t.end) } else if (ey4C.createTextRange) { xt1x = ey4C.createTextRange(); if (ey4C.value.length === go5t.start) { xt1x.collapse(false);
                xt1x.select() } else { xt1x.moveToBookmark(go5t.bookmark);
                xt1x.select() } } };
    fJ4N.EO3x = function(ey4C, go5t, cZ3x) { var go5t = go5t || { text: "", start: 0, end: 0 }; var bca1x, bCj7c, xt1x, KV5a, bCi7b, bCh7a, DJ3x;
        this.ZI0x(ey4C, go5t); if (ey4C.setSelectionRange) { bca1x = ey4C.value;
            bCj7c = bca1x.substring(0, go5t.start) + cZ3x + bca1x.substring(go5t.end);
            bCi7b = bCh7a = go5t.start + cZ3x.length;
            DJ3x = ey4C.scrollTop;
            ey4C.value = bCj7c; if (ey4C.scrollTop != DJ3x) { ey4C.scrollTop = DJ3x } ey4C.setSelectionRange(bCi7b, bCh7a) } else if (ey4C.createTextRange) { KV5a = document.selection.createRange();
            KV5a.text = cZ3x;
            KV5a.setEndPoint("StartToEnd", KV5a);
            KV5a.select() } h2x.z2x(ey4C, "keyup") } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        cP3x = c2x("nej.p"),
        k2x = c2x("nej.u"),
        ch3x = c2x("nej.ut"),
        D2x = c2x("nm.w"),
        fJ4N = c2x("nm.ut"),
        b2x;
    D2x.bCf7Y = NEJ.C();
    b2x = D2x.bCf7Y.O2x(ch3x.cz3x);
    b2x.cl3x = function(e2x) { this.cs3x(e2x) };
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.fN4R = e2x.txt;
        this.DF3x = e2x.sgtsContainer;
        this.bCd7W = e2x.sgtsList[0];
        this.ZA0x = e2x.sgtsItem;
        this.nm7f = e2x.rangeData;
        this.EU3x = e2x.atIndex;
        a1x.y2x(this.ZA0x[0], "selected-item");
        this.Mi5n() };
    b2x.bC2x = function() { this.bH3x();
        h2x.mg7Z(document.body, "keyup", this.bBZ7S.g2x(this));
        h2x.mg7Z(document.body, "click", this.bBX7Q.g2x(this)) };
    b2x.Mi5n = function() { this.bU3x([
            [document.body, "keyup", this.bBZ7S.g2x(this)],
            [document.body, "click", this.bBX7Q.g2x(this)],
            [this.fN4R, "keydown", this.bBW7P.g2x(this)],
            [this.fN4R, "keypress", this.bBW7P.g2x(this)],
            [this.bCd7W, "click", this.bBU7N.g2x(this)],
            [this.bCd7W, "mouseover", this.Dn3x.g2x(this)]
        ]) };
    b2x.Dn3x = function(d2x) { var dd3x = h2x.U2x(d2x); var r2x = a1x.I2x(this.DF3x, "selected-item"); if (a1x.by2x(dd3x, "j-sgt")) { a1x.w2x(r2x[0], "selected-item");
            a1x.y2x(dd3x, "selected-item") } };
    b2x.bBZ7S = function(d2x) { var r2x = a1x.I2x(this.DF3x, "selected-item"); var bp2x = this.ZA0x.length; var iO5T = d2x.keyCode || d2x.which; var s2x, j2x; switch (iO5T) {
            case 38:
                s2x = a1x.gi5n(r2x[0], "data-index") - 1 < 0 ? bp2x - 1 : a1x.gi5n(r2x[0], "data-index") - 1;
                a1x.w2x(r2x[0], "selected-item");
                a1x.y2x(this.ZA0x[s2x], "selected-item"); break;
            case 40:
                s2x = parseInt(a1x.gi5n(r2x[0], "data-index")) + 1 >= bp2x ? 0 : parseInt(a1x.gi5n(r2x[0], "data-index")) + 1;
                a1x.w2x(r2x[0], "selected-item");
                a1x.y2x(this.ZA0x[s2x], "selected-item"); break;
            case 13:
                this.bBU7N(d2x); break;
            case 27:
                this.nF7y(); break;
            case 32:
                var bi2x = this.fN4R.value; var s2x = fJ4N.tx9o(this.fN4R); if (bi2x.charAt(s2x.start - 1) !== " ") return;
                this.nF7y(); break } };
    b2x.bBW7P = function(d2x) { var iO5T = d2x.keyCode || d2x.which; if (iO5T === 13 || iO5T === 38 || iO5T === 40) { h2x.ce3x(d2x);
            d2x.keyCode = 0;
            d2x.which = 0;
            d2x.returnvalue = false } };
    b2x.bBX7Q = function(d2x) { var dd3x = d2x.target || d2x.srcElement; if (dd3x === this.fN4R) return;
        this.nF7y() };
    b2x.bBU7N = function(d2x) { h2x.bh2x(d2x); var r2x = a1x.I2x(this.DF3x, "selected-item")[0]; var pW8O = d2x.target || d2x.srcElement; var t2x = d2x.type; if (a1x.by2x(pW8O, "lst")) return; if (t2x == "click") { a1x.w2x(r2x, "selected-item");
            a1x.y2x(pW8O, "selected-item") } else pW8O = r2x; var j2x = pW8O.innerHTML + " ";
        this.nF7y(); var go5t = this.nm7f;
        go5t.start = this.EU3x + 1; if (cP3x.cS3x.browser == "ie" && cP3x.cS3x.version < "9.0") { this.fN4R.value = this.fN4R.value.substring(0, go5t.start) + this.fN4R.value.substring(go5t.end, this.fN4R.value.length);
            go5t.end = go5t.start } fJ4N.EO3x(this.fN4R, go5t, j2x);
        h2x.z2x(this.fN4R, "keyup") };
    b2x.nF7y = function(d2x) { if (!!this.DF3x) a1x.X2x(this.DF3x, "display", "none");
        this.S2x() };
    b2x.vj0x = function(d2x) { if (!!this.DF3x) a1x.X2x(this.DF3x, "display", "block") } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        D2x = c2x("nm.w"),
        ch3x = c2x("nej.ut"),
        bI3x = c2x("nej.ui"),
        b2x; var bPO1x = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}"; var bPL1x = a1x.en4r("m-wgt-atlist"); var hV5a = a1x.sg9X(bPO1x);
    D2x.bBS7L = NEJ.C();
    b2x = D2x.bBS7L.O2x(bI3x.es4w);
    b2x.cl3x = function(e2x) { this.fB4F = {};
        this.cs3x() };
    b2x.bk2x = function(e2x) { this.fB4F.txt = a1x.x2x(e2x.target);
        this.fB4F.data = e2x.data;
        this.fB4F.offset = e2x.offset;
        this.fB4F.rangeData = e2x.rangeData;
        this.fB4F.atIndex = e2x.atIndex;
        this.bPJ1x(e2x);
        this.bl2x(e2x);
        this.fB4F.sgtsContainer = this.o2x;
        this.fB4F.sgtsList = a1x.I2x(this.o2x, "lst");
        this.fB4F.sgtsItem = a1x.I2x(this.o2x, "f-thide");
        this.Sy7r(e2x);
        this.bPI1x = D2x.bCf7Y.B2x(this.fB4F) };
    b2x.bC2x = function(e2x) { this.bH3x();
        this.bPI1x.S2x() };
    b2x.bZ3x = function() { this.li6c = hV5a };
    b2x.bR3x = function() { this.cb3x() };
    b2x.bPJ1x = function(e2x) { this.o2x = a1x.dq3x(a1x.hW5b(a1x.bP3x(bPL1x, e2x.data))) };
    b2x.Sy7r = function(e2x) { var bBR7K = a1x.I2x(this.o2x, "selected-item")[0]; if (bBR7K) a1x.w2x(bBR7K, "selected-item"); var cN3x = e2x.offset.x + "px"; var gM5R = e2x.offset.y + "px";
        a1x.X2x(this.o2x, "left", cN3x);
        a1x.X2x(this.o2x, "top", gM5R) } })();
(function() { var c2x = NEJ.P,
        v2x = c2x("nej.j"),
        fJ4N = c2x("nm.ut");
    fJ4N.bBP7I = function(bi2x) { if (!GUser || !GUser.userId || GUser.userId <= 0) return; var cO3x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g; var EH3x = bi2x.match(cO3x) || []; for (var bd2x = 0; bd2x < EH3x.length; bd2x++) { EH3x[bd2x] = EH3x[bd2x].split("@")[1] } EH3x = EH3x.reverse(); var hu5z = GUser.userId; var bPE1x = v2x.sm9d("mentioners" + hu5z) || []; var iR5W = EH3x.concat(bPE1x); if (iR5W.length > 10) iR5W = iR5W.slice(0, 10);
        v2x.vo0x("mentioners" + hu5z, iR5W) };
    fJ4N.bPC1x = function() { if (!GUser || !GUser.userId || GUser.userId <= 0) return; var hu5z = GUser.userId; return v2x.sm9d("mentioners" + hu5z) || [] } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        cP3x = c2x("nej.p"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        ch3x = c2x("nej.ut"),
        D2x = c2x("nm.w"),
        fJ4N = c2x("nm.ut"),
        b2x;
    D2x.bBO7H = NEJ.C();
    b2x = D2x.bBO7H.O2x(ch3x.cz3x);
    b2x.cl3x = function(e2x) { this.cs3x(e2x);
        this.bBL7E() };
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.fN4R = e2x.txt;
        this.o2x = e2x.body;
        this.bBJ7C = e2x.before;
        this.JO5T = e2x.flag;
        this.bPm0x = e2x.after;
        this.pl8d = []; if (cP3x.cS3x.browser != "ie") { setTimeout(function() { this.kV6P() }.g2x(this), 0) } this.Mi5n() };
    b2x.bC2x = function() { this.bH3x(); if (this.sq9h) this.sq9h.S2x();
        delete this.sq9h };
    b2x.Mi5n = function() { this.bU3x([
            [this.fN4R, "keyup", this.bBI7B.g2x(this, this.fN4R)],
            [this.fN4R, "click", this.bBI7B.g2x(this, this.fN4R)],
            [this.fN4R, "focus", this.kV6P.g2x(this)]
        ]) };
    b2x.kV6P = function(d2x) { this.nm7f = fJ4N.tx9o(this.fN4R) };
    b2x.bBL7E = function() { if (!GUser || !GUser.userId || GUser.userId <= 0) { window.GFollowers = []; return } var cU3x = window.GUser.userId; var V2x = "/api/user/getfollows/" + cU3x; var fF4J = v2x.bq2x(V2x, { sync: false, method: "get", query: "offset = 0&limit=1000&order=true", onload: function(j2x) { window.GFollowers = JSON.parse(j2x).follow }.g2x(this), onerror: function(j2x) {}, onbeforerequest: function(j2x) {} }) };
    b2x.bBG7z = function(index) { var A2x = this.fN4R.value,
            bj2x, bde1x, bdf1x, Px6r;
        this.bBJ7C.innerHTML = k2x.dM3x(A2x.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>'); var nk7d = a1x.I2x(this.bBJ7C, "j-test"); for (var bd2x = 0; bd2x < nk7d.length; bd2x++) { nk7d[bd2x].innerText = " " } this.JO5T.innerHTML = A2x.charAt(index);
        this.bPm0x.innerHTML = k2x.dM3x(A2x.substr(index + 1, A2x.length));
        Px6r = parseInt(a1x.da3x(this.fN4R, "lineHeight"));
        a1x.X2x(this.o2x, "display", "block");
        bde1x = a1x.hJ5O(this.JO5T, this.o2x);
        bdf1x = a1x.hJ5O(this.fN4R);
        a1x.X2x(this.o2x, "display", "none"); var cN3x = bde1x.x + bdf1x.x; var gM5R = bde1x.y + bdf1x.y + Px6r;
        bj2x = { x: cN3x, y: gM5R };
        this.bPg0x(bj2x) };
    b2x.bBI7B = function(ey4C, d2x) { h2x.ce3x(d2x); var ey4C = ey4C; var A2x = ey4C.value; var bp2x = A2x.length; var s2x = fJ4N.tx9o(ey4C).start; var bBC7v = 0; var iO5T = d2x.keyCode || d2x.which; var iR5W;
        this.nm7f = fJ4N.tx9o(ey4C); var bBz7s = false; for (var i = 1; i < 20; i++) { iR5W = s2x - i; if (A2x.charAt(iR5W) === " ") break; if (A2x.charAt(iR5W) === "@") { bBz7s = true;
                this.EU3x = bBC7v = iR5W; break } } if (bBz7s && d2x.shiftKey === false && iO5T !== 38 && iO5T !== 40) { if (iO5T !== 27 && iO5T !== 13) { this.sq9h ? this.sq9h.S2x() : null;
                this.bBG7z(bBC7v) } } else if (iO5T !== 38 && iO5T !== 40 && d2x.keyCode !== 32) { this.sq9h ? this.sq9h.S2x() : null } };
    b2x.bPg0x = function(bj2x) { var bj2x = bj2x; var j2x = this.Fb3x(); var e2x = { parent: document.body, offset: bj2x, data: j2x, target: this.fN4R, rangeData: this.nm7f, atIndex: this.EU3x };
        this.sq9h ? this.sq9h.S2x() : null;
        this.sq9h = D2x.bBS7L.B2x(e2x) };
    b2x.Fb3x = function() { var bOU0x = fJ4N.tx9o(this.fN4R).start; var bOR0x = this.EU3x + 1; var bBx7q = fJ4N.bPC1x() || []; var bBq7j = []; var bD2x = this.fN4R.value.substring(bOR0x, bOU0x).toLowerCase();
        bD2x = bD2x.replace(/\[/g, "\\[");
        bD2x = bD2x.replace(/\]/g, "\\]"); if (window.GFollowers) { this.pl8d = window.GFollowers[0] ? window.GFollowers : [] } else this.pl8d = []; if (!this.pl8d[0]) this.bBL7E(); for (var bd2x = 0; bd2x < bBx7q.length; bd2x++) { for (var v2x = 0; v2x < this.pl8d.length; v2x++) { if (this.pl8d[v2x].nickname == bBx7q[bd2x]) bBq7j.push(this.pl8d[v2x]) } } this.pl8d = k2x.ckt7m(this.pl8d, bBq7j, { union: true, begin: true }); var bOE0x = this.pl8d.length; var Zm0x = []; var PF6z, PR7K; if (!this.pl8d[0]) return { suggests: Zm0x }; for (var i = 0; i < bOE0x; i++) { PF6z = this.pl8d[i].nickname.toLowerCase().search(bD2x);
            PR7K = this.pl8d[i].py ? this.pl8d[i].py.toLowerCase().search(bD2x) : -1; if (PF6z !== -1 || PR7K != -1) Zm0x.push(this.pl8d[i]); if (Zm0x.length === 10) break } return { suggests: Zm0x } };
    b2x.QO7H = function() { var go5t = this.nm7f || { text: "", start: 0, end: 0 };
        h2x.z2x(this.fN4R, "focus");
        fJ4N.EO3x(this.fN4R, go5t, "@");
        this.nm7f = fJ4N.tx9o(this.fN4R);
        this.EU3x = go5t.start;
        this.bBG7z(this.EU3x) };
    b2x.EA3x = function() { if (this.sq9h) this.sq9h.S2x() } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        D2x = c2x("nm.w"),
        ch3x = c2x("nej.ut"),
        bI3x = c2x("nej.ui"),
        b2x; var bOu0x = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}"; var bOt0x = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>'; var gd5i = a1x.hW5b(bOt0x); var hV5a = a1x.sg9X(bOu0x);
    D2x.Rh7a = NEJ.C();
    b2x = D2x.Rh7a.O2x(bI3x.es4w);
    b2x.cl3x = function(e2x) { this.fB4F = {};
        this.cs3x() };
    b2x.bk2x = function(e2x) { this.bl2x(e2x);
        this.fB4F.txt = a1x.x2x(e2x.target);
        this.Od6X();
        this.Rl7e = D2x.bBO7H.B2x(this.fB4F) };
    b2x.bC2x = function(e2x) { this.bH3x();
        this.Rl7e.S2x() };
    b2x.bZ3x = function() { this.ca3x = gd5i;
        this.li6c = hV5a };
    b2x.bR3x = function() { this.cb3x(); var i2x = a1x.cQ3x(a1x.x2x(this.o2x));
        this.fB4F.body = this.o2x;
        this.fB4F.before = i2x[0];
        this.fB4F.flag = i2x[1];
        this.fB4F.after = i2x[2] };
    b2x.Od6X = function() { var pz8r = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"]; for (var i = 0; i < pz8r.length; i++) { if (pz8r[i] === "width" && a1x.da3x(this.fB4F.txt, pz8r[i]) == "100%") { a1x.X2x(this.o2x, pz8r[i], this.fB4F.txt.offsetWidth + "px"); continue } a1x.X2x(this.o2x, pz8r[i], a1x.da3x(this.fB4F.txt, pz8r[i])) } };
    b2x.QO7H = function() { this.Rl7e.QO7H() };
    b2x.EA3x = function() { this.Rl7e.EA3x() } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        eT4X = NEJ.R,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        jR6L = c2x("nm.c"),
        R2x = {},
        b2x; if (!!jR6L.bdB1x) return;
    jR6L.bdB1x = NEJ.C();
    b2x = jR6L.bdB1x.O2x(H2x.cz3x);
    b2x.cl3x = function() { this.cs3x() };
    b2x.bk2x = function(e2x) { this.bl2x(e2x) };
    b2x.bC2x = function() { this.bH3x() };
    b2x.Ff3x = function(eC4G, du3x) { if (R2x[eC4G]) { this.ht5y("register commonJST[" + eC4G + "] duplicate"); return } if (!k2x.ge5j(du3x)) { du3x = ctl.comJST.bOs0x(eC4G, du3x) } R2x[eC4G] = du3x };
    b2x.bOr0x = function(Zl0x) { if (k2x.ep4t(Zl0x)) { k2x.be2x(Zl0x, function(r2x) { ctl.comJST.Ff3x.apply(this, r2x) }, this) } else if (k2x.jZ6T(Zl0x)) { k2x.dZ4d(Zl0x, function(eM4Q, J2x) { ctl.comJST.Ff3x(J2x, eM4Q) }) } };
    b2x.bOs0x = function(eC4G, sO9F, bBh7a) { sO9F = sO9F || {};
        NEJ.X(sO9F, { comJST: this.oU8M }); if (sO9F.resetDataName && !k2x.ep4t(sO9F.resetDataName)) { sO9F.resetDataName = [sO9F.resetDataName] } return function() { var j2x = arguments[0],
                iS5X = arguments[1]; if (sO9F.resetDataName) { var iR5W = {}; for (var i = 0, ii = sO9F.resetDataName.length; i < ii; i++) { iR5W[sO9F.resetDataName[i]] = arguments[i] } j2x = iR5W;
                iS5X = arguments[ii] } NEJ.X(j2x, sO9F, dD3x); if (bBh7a) { iS5X = iS5X || {};
                NEJ.X(iS5X, bBh7a) } return a1x.bP3x(eC4G, j2x, iS5X) } };
    b2x.oU8M = function(eC4G) { if (!R2x[eC4G]) { this.ht5y("commonJST[" + eC4G + "] is unregister"); return "" } else { return R2x[eC4G].apply(null, eT4X.slice.call(arguments, 1)) } };
    b2x.dump = function() { return R2x };
    b2x.ht5y = function(bOk0x) { if (console && console.log) { console.log(bOk0x) } }; var dD3x = function(eM4Q, J2x) { return J2x == "resetDataName" };
    c2x("ctl").comJST = jR6L.bdB1x.fX5c() })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        bm2x = NEJ.F,
        eT4X = NEJ.R,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        jR6L = c2x("nm.c"),
        R2x = {},
        b2x; if (!!jR6L.bdM1x) return;
    jR6L.bdM1x = NEJ.C();
    b2x = jR6L.bdM1x.O2x(H2x.cz3x);
    b2x.cl3x = function() { this.cs3x(); var e2x = { "com-mv-artists": function(fn4r, dJ3x, Dl3x, bdN1x) { return a1x.bP3x("com-mv-artists", { artists: fn4r, clazz: dJ3x, boxClazz: bdN1x, mark: Dl3x || function(cL3x) { return cL3x }, escape: k2x.dM3x, comJST: ctl.comJST.oU8M }) }, "com-album-artists": function(fn4r, dJ3x, Dl3x, bdN1x) { return a1x.bP3x("com-album-artists", { artists: fn4r, clazz: dJ3x, boxClazz: bdN1x, mark: Dl3x || function(cL3x) { return cL3x }, escape: k2x.dM3x, comJST: ctl.comJST.oU8M }) }, "com-artists-title": { resetDataName: ["artists"], escape: k2x.dM3x } }; for (var C2x in e2x) { ctl.comJST.Ff3x(C2x, e2x[C2x]) } };
    b2x.bk2x = function(e2x) { this.bl2x(e2x) };
    b2x.bC2x = function() { this.bH3x() };
    c2x("ctl").comJSTUtil = jR6L.bdM1x.fX5c() })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        cP3x = c2x("nej.p"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        D2x = c2x("nm.w"),
        fJ4N = c2x("nm.ut"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        Zk0x = [2, 3],
        dE3x = ["sn", "db"],
        b2x, K2x, bOj0x = { 13: "playlist", 17: "djprogram", 18: "song", 19: "album", 20: "artist", 21: "mv", 24: "topic", 25: "activity", 70: "djradio", 38: "concert", 39: "video" },
        Zi0x = { djprogram: "èŠ‚ç›®", album: "ä¸“è¾‘", playlist: "æ­Œå•", song: "å•æ›²", yunsong: "å•æ›²", artist: "æ­Œæ‰‹", mv: "MV", topic: "éŸ³ä¹ä¸“æ ", djradio: "ç”µå°", concert: "æ¼”å‡º", video: "è§†é¢‘" },
        bBg7Z = { djprogram: " - ", album: " - ", playlist: " by ", song: " - ", yunsong: " - ", artist: "", mv: " - ", djradio: " by " },
        bOd0x = { 0: 13, 1: 17, 3: 19, 4: 18, 5: 21, 6: 24, 14: 70, 17: 20 },
        CI3x = { pubEventWithPics: false, pubEventWithoutResource: false, pubEventWithPictureForbiddenNotice: "ç­‰çº§è¾¾åˆ°Lv.4ï¼Œå³å¯æ·»åŠ å›¾ç‰‡" };
    n2x.wm1x = NEJ.C();
    b2x = n2x.wm1x.O2x(n2x.dV3x);
    K2x = n2x.wm1x.cg3x;
    b2x.bk2x = function(e2x) { if (e2x.onclose === undefined) { e2x.onclose = this.bBa7T.g2x(this) } this.bl2x(e2x);
        this.yR2x = e2x.isPub;
        this.jG6A = e2x.rid || -1;
        this.et4x = e2x.type || -1;
        this.beb1x = e2x.purl;
        this.YV0x = e2x.name || "";
        this.Ki5n = e2x.author || "";
        this.bee1x = e2x.authors || "";
        this.YU0x = e2x.actId;
        this.YT0x = e2x.actName;
        this.bAZ7S = e2x.title;
        this.YS0x = {};
        this.bNW0x = e2x.mesg || "";
        this.bNV0x = e2x.placeholder || "è¯´ç‚¹ä»€ä¹ˆå§";
        this.beq1x = e2x.hideTip; var i2x, fI4M = +(new Date); try { i2x = top.localCache.x2x("user") || {} } catch (e) { i2x = {} } for (var i = 0, i2x = i2x.bindings || [], er4v; i < i2x.length; ++i) { er4v = !i2x[i].tokenJsonStr ? null : JSON.parse(i2x[i].tokenJsonStr); if (!er4v || er4v.expires_in === undefined) continue; var YQ0x = parseInt(er4v.expires_in),
                YP9G = parseInt(i2x[i].refreshTime),
                bNT0x = (YQ0x + YP9G) * 1e3 - 5 * 60 * 1e3; if (bNT0x > fI4M) this.YS0x[i2x[i].type] = !0 } this.uy0x = D2x.Ed3x.B2x({ parent: this.YO9F, err: this.bAY7R }); if (this.gK5P) { this.gK5P.S2x() } this.gK5P = D2x.Rh7a.B2x({ parent: document.body, target: this.eQ4U }); if (this.et4x == 24 || this.et4x == 21 || this.tD9u()) { this.vP0x.style.display = "none" } else { this.vP0x.style.display = "";
            this.nr7k = D2x.bkJ3x.B2x({ parent: this.beJ1x, button: this.vP0x, onstartupload: this.bAX7Q.g2x(this, true), onfinishupload: this.bAX7Q.g2x(this, false) }) } if (this.tD9u()) { this.oo7h.innerText = "";
            a1x.y2x(this.oo7h, "info-video");
            this.Fq3x = D2x.bAW7P.B2x({ parent: this.oo7h, windowBody: this.o2x, onstepping: this.bNK0x.g2x(this), oncancel: function() { this.bo2x() }.g2x(this) }); if (e2x.extError) { this.Fq3x.beT1x({ agent: e2x.videoUploadAgent, errorCode: -600 }) } else { this.Fq3x.Fl3x({ agent: e2x.videoUploadAgent, fileName: e2x.videoFileName }) } a1x.y2x(this.beU1x, "f-hide") } else { a1x.w2x(this.beU1x, "f-hide") } };
    b2x.bC2x = function() { this.bH3x(); if (this.uy0x) { this.uy0x.S2x();
            delete this.uy0x } if (this.gK5P) { this.gK5P.S2x();
            delete this.gK5P } if (this.nr7k) { this.nr7k.S2x();
            delete this.nr7k } if (this.lT7M) { this.lT7M.S2x();
            delete this.lT7M } };
    b2x.bZ3x = function() { this.ca3x = "m-wgt-sharewin" };
    b2x.bR3x = function() { this.cb3x();
        this.bAS7L = a1x.cQ3x(this.o2x)[0]; var bn2x = a1x.I2x(this.o2x, "j-flag");
        this.pH8z = bn2x.shift();
        this.bAY7R = bn2x.shift();
        this.YO9F = bn2x.shift();
        this.eQ4U = bn2x.shift();
        this.oo7h = bn2x.shift();
        this.beZ1x = bn2x.shift();
        this.bNE0x = bn2x.shift();
        this.vP0x = bn2x.shift();
        this.ci3x = bn2x.shift();
        this.beJ1x = bn2x.shift();
        this.yx1x = bn2x.shift();
        this.cwe0x = bn2x.shift();
        this.beU1x = bn2x.shift();
        this.eb4f = bn2x.shift();
        this.Fr3x = a1x.I2x(this.beU1x, "j-t");
        this.zV2x = H2x.Ct3x.B2x({ list: a1x.cQ3x(this.pH8z), selected: "z-slt", onchange: this.bff2x.g2x(this) }); if (cP3x.cS3x.browser == "ie" && cP3x.cS3x.version < "8.0") { a1x.X2x(this.YO9F, "position", "relative");
            a1x.X2x(this.YO9F, "zIndex", "10") } h2x.q2x(window, "snsbind", this.Ls5x.g2x(this));
        h2x.q2x(this.eQ4U, "input", this.fl4p.g2x(this));
        h2x.q2x(this.eQ4U, "keyup", this.tC9t.g2x(this));
        h2x.q2x(this.o2x, "click", this.cv3x.g2x(this));
        this.P2x = p2x.biB2x.B2x();
        this.P2x.q2x("onshareall", this.YB9s.g2x(this, 0));
        this.P2x.q2x("onshareerror", this.hS5X.g2x(this));
        this.P2x.q2x("onshareprivate", this.YB9s.g2x(this, 1));
        this.Yz9q = p2x.xX1x.B2x();
        this.ht5y = p2x.hI5N.B2x(); try { this.Lx5C = top.api.sharePermission } catch (e) {} if (!this.Lx5C) { this.Lx5C = CI3x;
            v2x.bq2x("/api/event/user/permission", { type: "json", onload: function(d2x) { if (d2x.code == 200) { this.Lx5C = NEJ.EX(CI3x, d2x) } }.g2x(this) }) } };
    b2x.bff2x = function(d2x) { d2x.index == 0 ? a1x.w2x(this.bAS7L, "m-plshare") : a1x.y2x(this.bAS7L, "m-plshare");
        this.YO9F.style.display = d2x.index == 0 ? "none" : "";
        this.bNE0x.style.display = d2x.index == 0 ? "" : "none";
        this.vP0x.style.display = d2x.index == 0 ? "" : "none"; if (this.et4x == 24 || this.et4x == 21) { this.vP0x.style.display = "none" } this.bAY7R.style.display = "none";
        this.eQ4U.value = "";
        this.bT3x();
        this.BY2x(); if (d2x.index == 0) { var dm3x = a1x.da3x(this.eQ4U, "width"); if (dm3x == "auto" || !dm3x) { return } else { if (this.gK5P) { this.gK5P.S2x() } this.gK5P = D2x.Rh7a.B2x({ parent: document.body, target: this.eQ4U }) } this.beJ1x.style.display = "" } else { if (this.gK5P) { this.gK5P.S2x();
                delete this.gK5P } this.beJ1x.style.display = "none" } };
    b2x.cv3x = function(d2x) { var f2x = h2x.U2x(d2x, "d:action"); if (!f2x) return; if (a1x.u2x(f2x, "action") == "search") { if (!this.tD9u()) { h2x.ce3x(d2x) } } else if (a1x.u2x(f2x, "default") === undefined) { h2x.ce3x(d2x) } switch (a1x.u2x(f2x, "action")) {
            case "txt":
                this.kV6P(); break;
            case "search":
                if (this.tD9u()) {} else if (this.yR2x && this.et4x != 24) { if (this.lT7M) { this.lT7M.S2x() } this.lT7M = D2x.bpB4F.B2x({ parent: this.o2x.parentNode, onfinish: this.bfo2x.g2x(this), oncancel: this.csY9P.g2x(this) });
                    this.bfq2x = true;
                    this.o2x.style.display = "none";
                    this.yt1x(this.jG6A > 0 ? "æ›´æ¢éŸ³ä¹" : "æ·»åŠ éŸ³ä¹") } break;
            case "at":
                h2x.rQ9H(d2x);!!this.gu5z && this.gu5z.bo2x();
                this.gK5P.QO7H();
                this.fz4D(); break;
            case "emot":
                h2x.rQ9H(d2x);!!this.gK5P && this.gK5P.EA3x(); if (!this.gu5z) { this.gu5z = n2x.EJ3x.B2x({ parent: this.beZ1x });
                    this.gu5z.q2x("onselect", this.xu1x.g2x(this)) } this.gu5z.N2x(); break;
            case "upload":
                break;
            case "sns":
                h2x.bh2x(d2x); var bfu2x, bD2x, t2x = a1x.u2x(f2x, "type"); if (!this.YS0x[t2x]) { bfu2x = f2x.href.split("?");
                    bD2x = k2x.ho5t(bfu2x[1]);
                    bD2x["csrf_token"] = v2x.gJ5O("__csrf");
                    top.open(bfu2x[0] + "?" + k2x.df3x(bD2x)); return } var bv2x = { 2: "sn", 3: "db", 4: "rr" };
                l2x.xZ1x(f2x, "u-slg-" + bv2x[t2x] + "-gray"); break;
            case "close":
                !!this.gu5z && this.gu5z.bo2x();
                this.bBa7T(); break;
            case "share":
                h2x.bh2x(d2x); if (this.tD9u()) { if (!a1x.by2x(f2x, "u-btn2-2-dis")) { this.csX9O() } } else if (a1x.by2x(f2x, "u-btn2-2-dis")) { if (!this.Lx5C.pubEventWithoutResource && !(this.jG6A > 0)) { this.csR9I() } else {} } else if (!(this.jG6A > 0) && !this.eQ4U.value && this.nr7k && this.nr7k.Lg5l().length == 0) { n2x.Z2x.N2x({ type: 2, tip: "è¯·è¾“å…¥å†…å®¹" }) } else { this.csN9E() } break } };
    b2x.csR9I = function() { var rC8u = 0,
            bfC2x = function() { if (rC8u % 2) { a1x.w2x(this.oo7h, "z-show") } else { a1x.y2x(this.oo7h, "z-show") } rC8u++; if (rC8u > 5) { clearInterval(eR4V) } },
            eR4V; return function() { rC8u = 0;
            clearInterval(eR4V);
            eR4V = setInterval(bfC2x.g2x(this), 200) } }();
    b2x.Ls5x = function(m2x) { m2x = m2x.result;
        this.YS0x[m2x.type] = !0; var s2x = k2x.cV3x(Zk0x, m2x.type),
            cd3x = "u-slg-" + dE3x[s2x] + "-gray";
        a1x.w2x(this.Fr3x[s2x], cd3x) };
    b2x.bfo2x = function(bt2x) { var j2x = bt2x.data;
        this.jG6A = bt2x.id;
        this.et4x = bt2x.type;
        this.o2x.style.display = "";
        this.yt1x(this.bAZ7S);
        this.lT7M && this.lT7M.S2x();
        this.bfq2x = false;
        this.beb1x = j2x.picUrl;
        this.YV0x = j2x.title || "";
        this.Ki5n = j2x.author || "";
        this.bee1x = j2x.authors || "";
        this.csy9p();
        this.LR5W() };
    b2x.bNK0x = function(e2x) { this.beb1x = e2x.coverUrl;
        this.LS5X = e2x;
        this.LR5W() };
    b2x.csY9P = function() { this.lT7M && this.lT7M.S2x();
        this.o2x.style.display = "";
        this.yt1x(this.bAZ7S);
        this.bfq2x = false;
        this.LR5W() };
    b2x.xu1x = function(d2x) { var bi2x = "[" + d2x.text + "]";
        fJ4N.EO3x(this.eQ4U, this.nm7f, bi2x);
        this.fz4D() };
    b2x.fl4p = function(d2x) { cP3x.cS3x.browser == "ie" && cP3x.cS3x.version < "7.0" ? setTimeout(this.fz4D.g2x(this), 0) : this.fz4D() };
    b2x.tC9t = function(d2x) { this.kV6P(); if (d2x.keyCode == 8) this.fz4D() };
    b2x.fz4D = function() { this.kV6P();
        this.BY2x() };
    b2x.BY2x = function() { var bp2x = Math.ceil(k2x.fh4l(this.eQ4U.value.trim()) / 2);
        this.ci3x.innerText = 140 - bp2x;
        bp2x > 140 ? a1x.ev4z(this.ci3x, "s-fc4", "s-fc6") : a1x.ev4z(this.ci3x, "s-fc6", "s-fc4") };
    b2x.csN9E = function() { if (this.ct3x()) return; if (k2x.fh4l(this.eQ4U.value.trim()) > 280) { this.bT3x("å­—æ•°è¶…è¿‡140ä¸ªå­—ç¬¦"); return } var t2x = this.zV2x.sj9a(),
            j2x; if (t2x == 0) { for (var i = 0, yk1x = []; i < this.Fr3x.length; ++i) { if (!a1x.by2x(this.Fr3x[i], "u-slg-" + dE3x[i] + "-gray")) yk1x.push(Zk0x[i]) } this.ct3x(!0);
            j2x = { id: this.jG6A, msg: this.eQ4U.value.trim(), type: this.Yt9k(this.et4x), picUrl: this.beb1x, snsTypes: yk1x.join(","), isPub: this.yR2x }; if (this.YU0x > 0) { j2x.actId = this.YU0x; if (this.YT0x) { j2x.msg = "#" + this.YT0x + "#" + j2x.msg } } var nd7W = this.nr7k && this.nr7k.Lg5l(); if (nd7W && nd7W.length) { j2x.pics = nd7W } this.P2x.bVe3x(j2x) } else { var rL9C = this.uy0x.Rq7j(); if (rL9C.length <= 0) { this.bT3x("è¯·è‡³å°‘é€‰æ‹©ä¸€ä½å¥½å‹"); return } this.P2x.bVc3x({ data: { id: this.jG6A, msg: this.eQ4U.value.trim(), type: this.Yt9k(this.et4x), userIds: "[" + rL9C.join(",") + "]" } }) } };
    b2x.csX9O = function() { if (this.ct3x()) { return } this.ht5y.gf5k("click", { target: "share", targetid: "button", page: "sharevideo" }); if (k2x.fh4l(this.eQ4U.value.trim()) > 280) { this.bT3x("å­—æ•°è¶…è¿‡140ä¸ªå­—ç¬¦"); return } for (var i = 0, yk1x = []; i < this.Fr3x.length; ++i) { if (!a1x.by2x(this.Fr3x[i], "u-slg-" + dE3x[i] + "-gray")) yk1x.push(Zk0x[i]) } this.ct3x(!0); var uF0x = this.LS5X.fileInfo,
            j2x = { msg: this.eQ4U.value.trim(), type: "video" },
            csh9Y = { vid: uF0x.vid, coverId: this.LS5X.coverId, nosKey: uF0x.objectKey, size: uF0x.size, duration: Math.floor(uF0x.duration / 1e3), width: uF0x.width, height: uF0x.height }; if (this.YU0x > 0) { j2x.actId = this.YU0x; if (this.YT0x) { j2x.msg = "#" + this.YT0x + "#" + j2x.msg } } j2x.videoinfo = JSON.stringify(csh9Y);
        this.P2x.bUZ3x({ data: j2x, snsTypes: "" }) };
    b2x.YB9s = function(t2x, m2x) { this.ct3x(!1);
        this.bo2x(); if (!this.beq1x) { if (this.tD9u()) { n2x.Z2x.N2x({ tip: "è§†é¢‘å°†åœ¨è½¬ç å®ŒæˆåŽè‡ªåŠ¨å‘å‡º", autoclose: true }) } else { n2x.Z2x.N2x({ tip: "åˆ†äº«æˆåŠŸ" + (m2x.point > 0 ? ' èŽ·å¾—<em class="s-fc6">' + m2x.point + "ç§¯åˆ†</em>" : ""), autoclose: true }) } } h2x.z2x(n2x.wm1x, "sharesuccess", { isPrivate: t2x, rid: this.jG6A, rtype: this.et4x, data: m2x.event });
        this.z2x("onshare") };
    b2x.hS5X = function(m2x) { this.ct3x(!1); var bE2x = "åˆ†äº«å¤±è´¥"; if (m2x.code) { switch (m2x.code) {
                case 404:
                    bE2x = "åˆ†äº«çš„èµ„æºä¸å­˜åœ¨"; break;
                case 407:
                    bE2x = "è¾“å…¥å†…å®¹åŒ…å«æœ‰å…³é”®å­—"; break;
                case 408:
                    bE2x = "åˆ†äº«å¤ªå¿«äº†ï¼Œè¿‡ä¼šå†åˆ†äº«å§"; break;
                case 315:
                    bE2x = m2x.message || "æ ¹æ®å¯¹æ–¹è®¾ç½®ï¼Œä½ æ²¡æœ‰è¯¥æ“ä½œæƒé™"; break;
                case 329:
                    return l2x.fb4f({ clazz: "m-layer-w2", btntxt: "çŸ¥é“äº†", message: "å½“å‰è´¦å·å­˜åœ¨è¾ƒå¤šæœªå®Œæˆå‘å¸ƒçš„è§†é¢‘<br>è¯·ç¨åŽå†è¯•" }) } } this.bT3x(bE2x) };
    b2x.kV6P = function() { this.nm7f = fJ4N.tx9o(this.eQ4U) };
    b2x.bT3x = function(bE2x) { this.dz3x(this.eb4f, bE2x) };
    b2x.ct3x = function(cC3x) { return this.dL3x(this.yx1x, cC3x, "åˆ†äº«", "åˆ†äº«ä¸­...") };
    b2x.Yt9k = function(jo6i) { return bOj0x[jo6i] || "" };
    b2x.cse9V = function() { var ey4C, te9V = this.Yt9k(this.et4x);
        this.oo7h.style.display = ""; if (this.jG6A <= 0) { this.oo7h.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">ç»™åŠ¨æ€é…ä¸ŠéŸ³ä¹</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>' } else { if (!this.YV0x) { this.oo7h.style.display = "none"; return } var Yq9h = this.yR2x && this.et4x != 24;
            ey4C = (Zi0x[te9V] ? Zi0x[te9V] + "ï¼š" : "") + this.YV0x + (bBg7Z[te9V] || " ") + (te9V == "mv" || te9V == "album" ? this.bee1x || this.Ki5n : this.Ki5n);
            a1x.dT3x(this.oo7h, "m-xwgt-share-infobar", { canChange: Yq9h, info: ey4C }); if (Yq9h) { a1x.w2x(this.oo7h, "z-dis") } else { a1x.y2x(this.oo7h, "z-dis") } } a1x.w2x(this.oo7h, "info-video") };
    b2x.csy9p = function() { var te9V = this.Yt9k(this.et4x),
            ey4C = (Zi0x[te9V] ? Zi0x[te9V] + "ï¼š" : "") + this.YV0x + (bBg7Z[te9V] || " ") + (te9V == "mv" || te9V == "album" ? this.bee1x || this.Ki5n : this.Ki5n);
        Yq9h = this.yR2x && this.et4x != 24; if (this.tD9u()) { a1x.y2x(this.oo7h, "info-video") } else { a1x.w2x(this.oo7h, "info-video");
            a1x.dT3x(this.oo7h, "m-xwgt-share-infobar", { canChange: Yq9h, isPub: this.yR2x, info: ey4C }) } };
    b2x.bAJ7C = function() { var FA3x = this.eQ4U.value; if (this.yR2x) { if (!!this.bfq2x) { return !!FA3x && !!FA3x.length || !!this.nr7k && this.nr7k.Lg5l().length > 0 } else { return this.jG6A > 0 || !!FA3x && !!FA3x.length || !!this.nr7k && this.nr7k.Lg5l().length > 0 } } else { return !!FA3x && !!FA3x.length || !!this.nr7k && this.nr7k.Lg5l().length > 0 } };
    b2x.LR5W = function() { var bfT2x = false; if (this.tD9u()) { if (this.LS5X && this.LS5X.fileInfo && this.LS5X.coverId) { bfT2x = true } } else if (!this.yR2x || this.Lx5C.pubEventWithoutResource || this.jG6A > 0) { bfT2x = true } if (bfT2x) { a1x.w2x(this.yx1x, "u-btn2-2-dis") } else { a1x.y2x(this.yx1x, "u-btn2-2-dis") } };
    b2x.bAX7Q = function(bfU2x) { if (bfU2x) { a1x.y2x(this.yx1x, "u-btn2-2-dis") } else { this.LR5W() } };
    b2x.bBa7T = function(d2x) { if (d2x) { d2x.stopped = true } if (this.tD9u()) { this.ht5y.gf5k("click", { target: d2x ? "cross" : "cancel", targetid: "button", page: "sharevideo" });
            this.Fq3x.crW9N(this.bAJ7C()) } else if (this.bAJ7C()) { l2x.gQ5V({ title: "æç¤º", message: "æ˜¯å¦é€€å‡ºæœ¬æ¬¡ç¼–è¾‘ï¼Ÿ", btnok: "é€€å‡º", action: function(W2x) { if (W2x == "ok") { this.bo2x() } }.g2x(this) }) } else { this.bo2x() } };
    b2x.yt1x = function(eI4M, ds3x) { this.nZ7S.zU2x(eI4M, ds3x) };
    b2x.Yo9f = function(t2x) { this.ht5y.gf5k("page", { type: t2x }) };
    b2x.tD9u = function() { return this.et4x == 39 };
    b2x.N2x = function() { var crV9M = function(r2x, s2x) { var cd3x = "u-slg-" + dE3x[s2x] + "-gray";!this.YS0x[Zk0x[s2x]] ? a1x.y2x(r2x, cd3x) : a1x.w2x(r2x, cd3x) }; return function() { if (this.tD9u()) { this.yt1x("æ·»åŠ è§†é¢‘") } K2x.N2x.call(this);
            this.o2x.style.display = "";
            this.bT3x();
            this.ct3x(!1);
            this.zV2x.Fl3x(0);
            this.eQ4U.focus();
            this.eQ4U.value = this.bNW0x || "";
            this.eQ4U.placeholder = this.bNV0x || ""; if (!this.tD9u()) { this.cse9V() } this.fz4D();
            this.uy0x.bQK2x();
            k2x.be2x(this.Fr3x, crV9M, this);
            this.kV6P(); if (this.yR2x) { this.pH8z.style.display = "none" } else { this.pH8z.style.display = "" } this.LR5W() } }();
    b2x.bo2x = function(d2x) { K2x.bo2x.call(this);!!this.gu5z && this.gu5z.bo2x(); if (this.uy0x) { this.uy0x.S2x();
            delete this.uy0x } if (this.gK5P) { this.gK5P.S2x();
            delete this.gK5P } if (this.nr7k) { this.nr7k.S2x();
            delete this.nr7k } if (this.Fq3x) { this.Fq3x = this.Fq3x.S2x() } if (this.lT7M) { this.lT7M.S2x();
            delete this.lT7M } };
    l2x.lL7E = function(e2x) { if (!GUser || !GUser.userId || GUser.userId <= 0) { top.login(); return } if (e2x.title === undefined) { e2x.title = "åˆ†äº«" } if (e2x.actId && e2x.type != 39) { var t2x = bOd0x[e2x.resourceType],
                do3x = e2x.resourceJson,
                hm5r; if (k2x.fi4m(do3x)) { try { do3x = JSON.parse(do3x) } catch (e) {} } if (t2x) { hm5r = l2x.bHA9r(t2x, do3x);
                e2x.name = hm5r.title;
                e2x.author = hm5r.author;
                e2x.picUrl = hm5r.picUrl;
                e2x.type = t2x;
                e2x.rid = (do3x || []).id } } n2x.wm1x.N2x(e2x) };
    H2x.fv4z.B2x({ element: n2x.wm1x, event: ["sharesuccess"] }) })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        n2x = c2x("nm.l"),
        D2x = c2x("nm.w"),
        bI3x = c2x("nej.ui"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K2x;
    n2x.Ym9d = NEJ.C();
    b2x = n2x.Ym9d.O2x(n2x.dV3x);
    K2x = n2x.Ym9d.cg3x;
    b2x.cl3x = function() { this.cs3x() };
    b2x.bR3x = function() { this.cb3x(); var i2x = a1x.I2x(this.o2x, "j-flag");
        h2x.q2x(i2x[0], "click", this.AQ2x.g2x(this)) };
    b2x.bZ3x = function() { this.ca3x = "m-import-ok" };
    b2x.bk2x = function(e2x) { e2x.parent = e2x.parent || document.body;
        e2x.title = "æ­Œæ›²åŒæ­¥å®Œæˆ";
        this.bl2x(e2x) };
    b2x.bC2x = function() { this.bH3x() };
    b2x.AQ2x = function(d2x) { this.bo2x(); if (location.pathname.indexOf("my") >= 0) { location.reload() } else { location.dispatch2("/my/") } };
    b2x.yV2x = function() { this.bo2x() };
    b2x.bEO8G = function(d2x) { if (d2x.keyCode == 13) this.DX3x() } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        M2x = c2x("nej.p"),
        k2x = c2x("nej.u"),
        n2x = c2x("nm.l"),
        D2x = c2x("nm.w"),
        bI3x = c2x("nej.ui"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, K2x;
    n2x.bAI7B = NEJ.C();
    b2x = n2x.bAI7B.O2x(n2x.dV3x);
    b2x.bZ3x = function() { this.ca3x = "m-programtips-layer" };
    b2x.bR3x = function() { this.cb3x();
        this.bV3x = a1x.I2x(this.o2x, "j-flag") };
    b2x.bk2x = function(e2x) { e2x.clazz = " m-layer-programtips";
        e2x.parent = e2x.parent || document.body;
        e2x.title = "ä»˜è´¹å†…å®¹æç¤º";
        e2x.draggable = !0;
        e2x.destroyalbe = !0;
        e2x.mask = true;
        this.bl2x(e2x);
        this.gw5B = e2x.id;
        this.crJ9A = e2x.radiotype;
        this.kA6u = location.protocol + "//" + (this.crH9y() || "music.163.com") + "/m/" + this.crJ9A + "?id=" + this.gw5B;
        this.crE9v() };
    b2x.bC2x = function() { this.bH3x() };
    b2x.yV2x = function() { this.bo2x() };
    b2x.AQ2x = function(d2x) { this.z2x("onok", A2x);
        this.bo2x() };
    l2x.bAH7A = function(e2x) { n2x.bAI7B.B2x(e2x).N2x() };
    b2x.crE9v = function() { v2x.bq2x("/api/web/qrcode/get", { method: "POST", type: "json", data: k2x.df3x({ url: this.kA6u, size: 180 }), onload: function(j2x) { if (j2x.code == 200) { this.crx9o(j2x.qrcodeImageUrl) } else { alert("äºŒç»´ç èŽ·å–å¤±è´¥") } }.g2x(this) }) };
    b2x.crH9y = function() { var crv9m = location.host; if (crv9m.indexOf("music") >= 0) { return "music.163.com" } else { return "igame.163.com" } };
    b2x.crx9o = function(jQ6K) { this.bV3x[0].style.backgroundImage = "url(" + jQ6K + ")" } })();
(function() { var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        cP3x = c2x("nej.p"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        p2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        F2x = c2x("nm.m"),
        n2x = c2x("nm.l"),
        L2x = c2x("nm.m.f"),
        b2x, K2x;
    F2x.cK3x = NEJ.C();
    b2x = F2x.cK3x.O2x(H2x.dn3x);
    b2x.bJ3x = function() { var oS8K = !1; return function() { if (oS8K) return;
            oS8K = !0;
            this.bM3x(); if (top == self) { return } this.rb8T = a1x.x2x("g_backtop"); if (window.GRef != "mail") {} else { this.bAG7z() } H2x.fv4z.B2x({ element: window, event: ["share", "playchange", "snsbind", "playstatechange"] });
            this.bU3x([
                [window, "scroll", this.xW1x.g2x(this)],
                [document, "keyup", this.cqP9G.g2x(this)],
                [document.body, "click", this.sb9S.g2x(this)],
                [document, "mouseup", this.cqN9E.g2x(this)],
                [this.rb8T, "click", this.MK6E.g2x(this)],
                [p2x.rH9y, "message", this.qM8E.g2x(this)]
            ]);
            l2x.bVx3x(document.body);
            this.xW1x(); if (this.xV1x !== false && typeof GUser !== "undefined" && GUser.userId > 0) p2x.rH9y.fX5c().uJ0x(); try { top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo(); if (cP3x.cS3x.browser == "ie" && parseInt(cP3x.cS3x.version) < 9 && /#(.*?)$/.test(top.document.title)) { top.document.title = "ç½‘æ˜“äº‘éŸ³ä¹" } else { var gn5s = top.player.getPlaying(); if (gn5s && gn5s.track && gn5s.playing) { top.document.title = decodeURIComponent("%E2%96%B6%20") + gn5s.track.name } else { top.document.title = document.title } } } catch (e) {} window.share = this.xJ1x.g2x(this);
            this.kf6Z = p2x.hI5N.B2x();
            window.log = this.ma7T.g2x(this); var rN9E = location.search; if (rN9E) { var bD2x = rN9E.substr(rN9E.indexOf("?") + 1),
                    gc5h = k2x.ho5t(bD2x); if (gc5h && gc5h["_hash"]) location.hash = gc5h["_hash"] } } }();
    b2x.cqP9G = function(d2x) { var f2x = h2x.U2x(d2x); try { if (d2x.keyCode == 80 && l2x.bHI9z() || ["textarea", "input"].indexOf(f2x.tagName.toLowerCase()) >= 0) return;
            h2x.z2x(top.document, "keyup", { ctrlKey: d2x.ctrlKey, keyCode: d2x.keyCode }) } catch (e) {} };
    b2x.sb9S = function(d2x) { var f2x = h2x.U2x(d2x); if (f2x && f2x.tagName == "INPUT") return; var f2x = h2x.U2x(d2x, "d:pid"); if (f2x) { h2x.ce3x(d2x); var oG8y = a1x.u2x(f2x, "pid"),
                zl2x = a1x.u2x(f2x, "ptype"),
                W2x = a1x.u2x(f2x, "action") || "play"; switch (W2x) {
                case "subscribe":
                    l2x.lE7x({ tracks: [oG8y] }); break } } f2x = h2x.U2x(d2x, "d:resAction"); if (f2x && f2x.className.indexOf("-dis") == -1) { var cE3x = a1x.u2x(f2x, "resId"),
                t2x = a1x.u2x(f2x, "resType"),
                bgv2x = a1x.u2x(f2x, "resRadiotype"),
                bgw2x = a1x.u2x(f2x, "resRadioid"),
                dK3x = a1x.u2x(f2x, "resFrom"),
                j2x = a1x.u2x(f2x, "resData"),
                W2x = a1x.u2x(f2x, "resAction"),
                bqD4H = a1x.u2x(f2x, "resCopyright"),
                Yc9T = a1x.u2x(f2x, "resAuditstatus"); if (W2x != "log" && W2x != "bilog") h2x.ce3x(d2x); switch (W2x) {
                case "log":
                    j2x = (j2x || "").split("|"); if (!!j2x[0]) { var bc2x = { id: cE3x, alg: j2x[2] || "itembased", scene: j2x[3], position: j2x[1] || 0 }; if (!!j2x[4]) bc2x.srcid = j2x[4];
                        window.log(j2x[0], bc2x) } break;
                case "bilog":
                    var baC0x = a1x.u2x(f2x, "logAction"),
                        baE0x = a1x.u2x(f2x, "logJson");
                    window.log(baC0x, baE0x); break;
                case "share":
                    if (Yc9T && Yc9T == 1) { l2x.hP5U("ç”±äºŽç‰ˆæƒé—®é¢˜ï¼Œè¯¥èŠ‚ç›®æš‚æ—¶æ— æ³•åˆ†äº«ã€‚") } else { share(cE3x, t2x, a1x.u2x(f2x, "resPic"), a1x.u2x(f2x, "resName"), a1x.u2x(f2x, "resAuthor"), a1x.u2x(f2x, "resAuthors")) } break;
                case "fav":
                case "subscribe":
                    if (t2x == 18) { var pf8X = a1x.u2x(f2x, "resLevel"),
                            qo8g = a1x.u2x(f2x, "resFee"); if (pf8X == 10) { l2x.tA9r(qo8g, cE3x, "song"); break } l2x.lE7x({ tracks: [cE3x] }) } break;
                case "download":
                    l2x.Sd7W({ id: cE3x, type: t2x }); break;
                case "programtips":
                    if (Yc9T && Yc9T == 1) { l2x.hP5U("ç”±äºŽç‰ˆæƒé—®é¢˜ï¼Œè¯¥èŠ‚ç›®æš‚æ—¶æ— æ³•åˆ†äº«ã€‚") } else { l2x.bAH7A({ id: bgw2x, radiotype: bgv2x }) } break } } if (top == self) return; try { top.onIframeClick(d2x) } catch (e) {} };
    b2x.cqN9E = function(d2x) { try { h2x.z2x(top.document, "mouseup") } catch (e) {} };
    b2x.xW1x = function() { var cqm9d = function() { var cq3x = window.innerHeight; if (!k2x.vt0x(cq3x)) cq3x = (document.documentElement || document.body).clientHeight; return cq3x }; return function(d2x) { if (!this.rb8T) return; var Yb9S = cqm9d(),
                fT5Y = document.documentElement.scrollTop || document.body.scrollTop;
            a1x.X2x(this.rb8T, "display", fT5Y > 0 ? "" : "none"); if (cP3x.cS3x.browser == "ie" && cP3x.cS3x.version < "7.0") { var gk5p = Math.min(document.body.clientHeight, Yb9S + fT5Y) - 204;
                a1x.X2x(this.rb8T, "top", gk5p + "px") } } }();
    b2x.MK6E = function(d2x) { h2x.ce3x(d2x);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0 };
    b2x.xJ1x = function() { var bgA2x = function(d2x) { h2x.z2x(window, "share", d2x) }; return function(cE3x, t2x, Bg2x, T2x, MX6R, MZ6T) { l2x.lL7E({ rid: cE3x, type: t2x, purl: Bg2x, name: T2x, author: MX6R, authors: MZ6T, onshare: bgA2x.g2x(this) }) } }();
    b2x.ma7T = function(W2x, bc2x) { try { top.log(W2x, bc2x) } catch (e) { switch (W2x) {
                case "play":
                    this.kf6Z.eN4R(bc2x); break;
                case "search":
                    this.kf6Z.bJV9M(bc2x); break;
                default:
                    this.kf6Z.gf5k(W2x, bc2x) } } };
    b2x.bAG7z = function() { var XY9P, bgJ2x = false,
            bs2x = [45, 60]; var cql9c = function(bE2x) { if (bE2x.title != "MailBoxImport") return; var Q2x = JSON.parse(bE2x.content || "null") || Y2x; if (Q2x.status == 10) { n2x.Ym9d.B2x().N2x();
                window.clearTimeout(XY9P) } }; var sX9O = function(d2x) { if (d2x.code == 200) { if (d2x.status == 1) { h2x.q2x(p2x.yN2x, "message", cql9c.g2x(this));
                    p2x.yN2x.B2x().bbE1x();
                    bgJ2x = true } else { if (bgJ2x) { if (d2x.status == 10) { n2x.Ym9d.B2x().N2x();
                            h2x.it5y(p2x.yN2x, "message");
                            window.clearTimeout(XY9P);
                            bgJ2x = false } } else { window.clearTimeout(XY9P) } } } }; return function() { var rr8j = bs2x.shift() * 1e3;
            v2x.bq2x("/api/musicbox/mail/status", { type: "json", method: "get", onload: sX9O.g2x(this) }); if (rr8j) { XY9P = window.setTimeout(arguments.callee, rr8j) } } }();
    b2x.qM8E = function(d2x) { try { top.polling(d2x) } catch (e) {} } })()