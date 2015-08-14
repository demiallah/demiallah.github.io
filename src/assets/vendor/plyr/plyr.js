! function(e) {
    "use strict";

    function t() {
        var e = ["<div class='player-controls'>",
            "<div class='player-progress'>",
            "<label for='seek{id}' class='sr-only'>Seek</label>",
            "<input id='seek{id}' class='player-progress-seek' type='range' min='0' max='100' step='0.5' value='0' data-player='seek'>",
            "<progress class='player-progress-played' max='100' value='0'>",
            "<span>0</span>% played", "</progress>",
            "<progress class='player-progress-buffer' max='100' value='0'>",
            "<span>0</span>% buffered", "</progress>", "</div>",
            "<span class='player-controls-left'>"
        ];
        return o(S.controls, "play") && e.push(
                "<button type='button' data-player='play'>",
                "<svg><use xlink:href='#" + S.iconPrefix +
                "-play'></use></svg>", "<span class='sr-only'>Play</span>",
                "</button>", "<button type='button' data-player='pause'>",
                "<svg><use xlink:href='#" + S.iconPrefix +
                "-pause'></use></svg>",
                "<span class='sr-only'>Pause</span>", "</button>"), o(S.controls, "current-time") && e.push(
                "<span class='player-time'>",
                "<span class='sr-only'>Current time</span>",
                "<span class='player-current-time'>00:00</span>", "</span>"
            ), o(S.controls, "duration") && e.push(
                "<span class='player-time'>",
                "<span class='sr-only'>Duration</span>",
                "<span class='player-duration'>00:00</span>", "</span>"), e
            .push("</span>", "<span class='player-controls-right'>"), o(S.controls,
                "mute") && e.push(
                "<input class='inverted sr-only' id='mute{id}' type='checkbox' data-player='mute'>",
                "<label id='mute{id}' for='mute{id}'>",
                "<svg class='icon-muted'><use xlink:href='#" + S.iconPrefix +
                "-muted'></use></svg>", "<svg><use xlink:href='#" + S.iconPrefix +
                "-volume'></use></svg>",
                "<span class='sr-only'>Toggle Mute</span>", "</label>"), o(
                S.controls, "volume") && e.push(
                "<label for='volume{id}' class='sr-only'>Volume</label>",
                "<input id='volume{id}' class='player-volume' type='range' min='0' max='10' value='5' data-player='volume'>", "</div>"), e.join("")
    }

    function n(e, t) {
        S.debug && window.console && console[t ? "error" : "log"](e)
    }

    function r() {
        var e, t, n, r = navigator.userAgent,
            a = navigator.appName,
            s = "" + parseFloat(navigator.appVersion),
            o = parseInt(navigator.appVersion, 10);
        return -1 !== navigator.appVersion.indexOf("Windows NT") && -1 !==
            navigator.appVersion.indexOf("rv:11") ? (a = "IE", s = "11;") :
            -1 !== (t = r.indexOf("MSIE")) ? (a = "IE", s = r.substring(t +
                5)) : -1 !== (t = r.indexOf("Chrome")) ? (a = "Chrome", s =
                r.substring(t + 7)) : -1 !== (t = r.indexOf("Safari")) ? (a =
                "Safari", s = r.substring(t + 7), -1 !== (t = r.indexOf(
                    "Version")) && (s = r.substring(t + 8))) : -1 !== (t =
                r.indexOf("Firefox")) ? (a = "Firefox", s = r.substring(t +
                8)) : (e = r.lastIndexOf(" ") + 1) < (t = r.lastIndexOf("/")) &&
            (a = r.substring(e, t), s = r.substring(t + 1), a.toLowerCase() ==
                a.toUpperCase() && (a = navigator.appName)), -1 !== (n = s.indexOf(
                ";")) && (s = s.substring(0, n)), -1 !== (n = s.indexOf(" ")) &&
            (s = s.substring(0, n)), o = parseInt("" + s, 10), isNaN(o) &&
            (s = "" + parseFloat(navigator.appVersion), o = parseInt(
                navigator.appVersion, 10)), {
                name: a,
                version: o,
                ios: /(iPad|iPhone|iPod)/g.test(navigator.platform)
            }
    }

    function a(e, t) {
        var n = e.media;
        if ("video" == e.type) switch (t) {
                case "video/webm":
                    return !(!n.canPlayType || !n.canPlayType(
                        'video/webm; codecs="vp8, vorbis"').replace(
                        /no/, ""));
                case "video/mp4":
                    return !(!n.canPlayType || !n.canPlayType(
                        'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                    ).replace(/no/, ""));
                case "video/ogg":
                    return !(!n.canPlayType || !n.canPlayType(
                        'video/ogg; codecs="theora"').replace(/no/,
                        ""))
            } else if ("audio" == e.type) switch (t) {
                case "audio/mpeg":
                    return !(!n.canPlayType || !n.canPlayType(
                        "audio/mpeg;").replace(/no/, ""));
                case "audio/ogg":
                    return !(!n.canPlayType || !n.canPlayType(
                        'audio/ogg; codecs="vorbis"').replace(
                        /no/, ""));
                case "audio/wav":
                    return !(!n.canPlayType || !n.canPlayType(
                        'audio/wav; codecs="1"').replace(/no/,
                        ""))
            }
            return !1
    }

    function s(e) {
        if (!document.querySelectorAll("script[src='" + e + "']").length) {
            var t = document.createElement("script");
            t.src = e;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(t, n)
        }
    }

    function o(e, t) {
        return Array.prototype.indexOf && -1 != e.indexOf(t)
    }

    function i(e, t, n) {
        return e.replace(new RegExp(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,
            "\\$1"), "g"), n)
    }

    function l(e, t) {
        e.length || (e = [e]);
        for (var n = e.length - 1; n >= 0; n--) {
            var r = n > 0 ? t.cloneNode(!0) : t,
                a = e[n],
                s = a.parentNode,
                o = a.nextSibling;
            r.appendChild(a), o ? s.insertBefore(r, o) : s.appendChild(r)
        }
    }

    function u(e) {
        for (var t = e.parentNode; e.firstChild;) t.insertBefore(e.firstChild,
            e);
        t.removeChild(e)
    }

    function c(e) {
        e.parentNode.removeChild(e)
    }

    function p(e, t) {
        e.insertBefore(t, e.firstChild)
    }

    function d(e, t) {
        for (var n in t) e.setAttribute(n, t[n])
    }

    function f(e, t, n) {
        if (e)
            if (e.classList) e.classList[n ? "add" : "remove"](t);
            else {
                var r = (" " + e.className + " ").replace(/\s+/g, " ").replace(
                    " " + t + " ", "");
                e.className = r + (n ? " " + t : "")
            }
    }

    function m(e, t, n, r) {
        var a = t.split(" ");
        if (e instanceof NodeList)
            for (var s = 0; s < e.length; s++) e[s] instanceof Node && m(e[
                s], arguments[1], arguments[2], arguments[3]);
        else
            for (var o = 0; o < a.length; o++) e[r ? "addEventListener" :
                "removeEventListener"](a[o], n, !1)
    }

    function y(e, t, n) {
        e && m(e, t, n, !0)
    }

    function b(e, t, n) {
        e && m(e, t, n, !1)
    }

    function v(e, t) {
        var n = document.createEvent("MouseEvents");
        n.initEvent(t, !0, !0), e.dispatchEvent(n)
    }

    function g(e) {
        return e.keyCode && 13 != e.keyCode ? !0 : (e.target.checked = !e.target
            .checked, v(e.target, "change"), void 0)
    }

    function h(e, t) {
        return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t *
            100).toFixed(2)
    }

    function k(e, t) {
        for (var n in t) t[n] && t[n].constructor && t[n].constructor ===
            Object ? (e[n] = e[n] || {}, k(e[n], t[n])) : e[n] = t[n];
        return e
    }

    function w() {
        var e = {
                supportsFullScreen: !1,
                isFullScreen: function() {
                    return !1
                },
                requestFullScreen: function() {},
                cancelFullScreen: function() {},
                fullScreenEventName: "",
                element: null,
                prefix: ""
            },
            t = "webkit moz o ms khtml".split(" ");
        if ("undefined" != typeof document.cancelFullScreen) e.supportsFullScreen = !
            0;
        else
            for (var n = 0, r = t.length; r > n; n++) {
                if (e.prefix = t[n], "undefined" != typeof document[e.prefix +
                    "CancelFullScreen"]) {
                    e.supportsFullScreen = !0;
                    break
                }
                if ("undefined" != typeof document.msExitFullscreen &&
                    document.msFullscreenEnabled) {
                    e.prefix = "ms", e.supportsFullScreen = !0;
                    break
                }
            }
        return "webkit" === e.prefix && navigator.userAgent.match(
                /Version\/[\d\.]+.*Safari/) && (e.supportsFullScreen = !1),
            e.supportsFullScreen && (e.fullScreenEventName = "ms" == e.prefix ?
                "MSFullscreenChange" : e.prefix + "fullscreenchange", e.isFullScreen =
                function(e) {
                    switch ("undefined" == typeof e && (e = document), this
                        .prefix) {
                        case "":
                            return document.fullscreenElement == e;
                        case "moz":
                            return document.mozFullScreenElement == e;
                        default:
                            return document[this.prefix +
                                "FullscreenElement"] == e
                    }
                }, e.requestFullScreen = function(e) {
                    return "" === this.prefix ? e.requestFullScreen() : e[
                            this.prefix + ("ms" == this.prefix ?
                                "RequestFullscreen" : "RequestFullScreen")]
                        ("webkit" === this.prefix ? e.ALLOW_KEYBOARD_INPUT :
                            null)
                }, e.cancelFullScreen = function() {
                    return "" === this.prefix ? document.cancelFullScreen() :
                        document[this.prefix + ("ms" == this.prefix ?
                            "ExitFullscreen" : "CancelFullScreen")]()
                }, e.element = function() {
                    return "" === this.prefix ? document.fullscreenElement :
                        document[this.prefix + "FullscreenElement"]
                }), e
    }

    function x() {
        var e = {
            supported: function() {
                try {
                    return "localStorage" in window && null !==
                        window.localStorage
                } catch (e) {
                    return !1
                }
            }()
        };
        return e
    }

    function T(o) {
        function k(e) {
            if (!dt.usingTextTracks && "video" === dt.type && dt.supported
                .full) {
                for (dt.subcount = 0, e = "number" == typeof e ? e : dt
                    .media.currentTime; A(dt.captions[dt.subcount][0]) <
                    e.toFixed(1);)
                    if (dt.subcount++, dt.subcount > dt.captions.length -
                        1) {
                        dt.subcount = dt.captions.length - 1;
                        break
                    }
                dt.media.currentTime.toFixed(1) >= C(dt.captions[dt.subcount]
                        [0]) && dt.media.currentTime.toFixed(1) <= A(dt
                        .captions[dt.subcount][0]) ? (dt.currentCaption =
                        dt.captions[dt.subcount][1], dt.captionsContainer
                        .innerHTML = dt.currentCaption) : dt.captionsContainer
                    .innerHTML = ""
            }
        }

        function T() {
            dt.buttons.captions && (f(dt.container, S.classes.captions.enabled, !
                0), S.captions.defaultActive && (f(dt.container,
                    S.classes.captions.active, !0), dt.buttons.captions
                .checked = !0))
        }

        function C(e) {
            var t = [];
            return t = e.split(" --> "), E(t[0])
        }

        function A(e) {
            var t = [];
            return t = e.split(" --> "), E(t[1])
        }

        function E(e) {
            if (null === e || void 0 === e) return 0;
            var t, n = [],
                r = [];
            return n = e.split(","), r = n[0].split(":"), t = Math.floor(
                60 * r[0] * 60) + Math.floor(60 * r[1]) + Math.floor(
                r[2])
        }

        function P(e) {
            return dt.container.querySelectorAll(e)
        }

        function N(e) {
            return P(e)[0]
        }

        function I() {
            try {
                return window.self !== window.top
            } catch (e) {
                return !0
            }
        }

        function M() {
            var e = S.html;
            if (n("Injecting custom controls."), e || (e = t()), e = i(
                e, "{seektime}", S.seekTime), e = i(e, "{id}", Math
                .floor(1e4 * Math.random())), dt.container.insertAdjacentHTML(
                "beforeend", e), S.tooltips)
                for (var r = P(S.selectors.labels), a = r.length - 1; a >=
                    0; a--) {
                    var s = r[a];
                    f(s, S.classes.hidden, !1), f(s, S.classes.tooltip, !
                        0)
                }
        }

        function L() {
            try {
                return dt.controls = N(S.selectors.controls), dt.buttons = {},
                    dt.buttons.seek = N(S.selectors.buttons.seek), dt.buttons
                    .play = N(S.selectors.buttons.play), dt.buttons.pause =
                    N(S.selectors.buttons.pause), dt.buttons.restart =
                    N(S.selectors.buttons.restart), dt.buttons.rewind =
                    N(S.selectors.buttons.rewind), dt.buttons.forward =
                    N(S.selectors.buttons.forward), dt.buttons.fullscreen =
                    N(S.selectors.buttons.fullscreen), dt.buttons.mute =
                    N(S.selectors.buttons.mute), dt.buttons.captions =
                    N(S.selectors.buttons.captions), dt.checkboxes = P(
                        "[type='checkbox']"), dt.progress = {}, dt.progress
                    .container = N(S.selectors.progress.container), dt.progress
                    .buffer = {}, dt.progress.buffer.bar = N(S.selectors
                        .progress.buffer), dt.progress.buffer.text = dt
                    .progress.buffer.bar && dt.progress.buffer.bar.getElementsByTagName(
                        "span")[0], dt.progress.played = {}, dt.progress
                    .played.bar = N(S.selectors.progress.played), dt.progress
                    .played.text = dt.progress.played.bar && dt.progress
                    .played.bar.getElementsByTagName("span")[0], dt.volume =
                    N(S.selectors.buttons.volume), dt.duration = N(S.selectors
                        .duration), dt.currentTime = N(S.selectors.currentTime),
                    dt.seekTime = P(S.selectors.seekTime), !0
            } catch (e) {
                return n(
                    "It looks like there's a problem with your controls html. Bailing.", !
                    0), dt.media.setAttribute("controls", ""), !1
            }
        }

        function O() {
            if (dt.buttons.play) {
                var e = dt.buttons.play.innerText || "Play";
                "undefined" != typeof S.title && S.title.length && (e +=
                    ", " + S.title), dt.buttons.play.setAttribute(
                    "aria-label", e)
            }
        }

        function V() {
            if (!dt.media) return n("No audio or video element found!", !
                0), !1;
            if (dt.supported.full) {
                if (dt.media.removeAttribute("controls"), f(dt.container,
                    S.classes.type.replace("{0}", dt.type), !0), f(
                    dt.container, S.classes.stopped, null === dt.media
                    .getAttribute("autoplay")), dt.browser.ios && f(
                    dt.container, "ios", !0), "video" === dt.type) {
                    var e = document.createElement("div");
                    e.setAttribute("class", S.classes.videoWrapper), l(
                        dt.media, e), dt.videoContainer = e
                }
                "youtube" == dt.type && q(dt.media.getAttribute(
                    "data-video-id"))
            }
            null !== dt.media.getAttribute("autoplay") && D()
        }

        function q(e) {
            for (var t = P("[id^='youtube']"), n = t.length - 1; n >= 0; n--)
                c(t[n]);
            var r = document.createElement("div");
            r.setAttribute("id", "youtube-" + Math.floor(1e4 * Math.random())),
                dt.media.appendChild(r), f(dt.media, S.classes.videoWrapper, !
                    0), f(dt.media, S.classes.embedWrapper, !0),
                "object" == typeof YT ? H(e, r) : (s(
                        "https://www.youtube.com/iframe_api"), window.onYouTubeIframeAPIReady =
                    function() {
                        H(e, r)
                    })
        }

        function H(e, t) {
            n("YouTube API Ready"), "timer" in dt || (dt.timer = {}),
                dt.embed = new YT.Player(t.id, {
                    videoId: e,
                    playerVars: {
                        autoplay: 0,
                        controls: 0,
                        vq: "hd720",
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        cc_lang_pref: "en",
                        wmode: "transparent",
                        modestbranding: 1
                    },
                    events: {
                        onReady: function(e) {
                            var t = e.target;
                            dt.media.play = function() {
                                    t.playVideo()
                                }, dt.media.pause = function() {
                                    t.pauseVideo()
                                }, dt.media.stop = function() {
                                    t.stopVideo()
                                }, dt.media.duration = t.getDuration(),
                                dt.media.paused = 2 == t.getPlayerState(),
                                dt.media.currentTime = t.getCurrentTime(),
                                dt.media.muted = t.isMuted(), v(
                                    dt.media, "timeupdate"),
                                window.clearInterval(dt.timer.buffering),
                                dt.timer.buffering = window.setInterval(
                                    function() {
                                        dt.media.buffered = t.getVideoLoadedFraction(),
                                            v(dt.media,
                                                "progress"), 1 ===
                                            dt.media.buffered &&
                                            window.clearInterval(
                                                dt.timer.buffering
                                            )
                                    }, 200), dt.container.querySelectorAll(
                                    S.selectors.controls).length ||
                                pt(), S.displayDuration && nt()
                        },
                        onStateChange: function(e) {
                            var t = e.target;
                            switch (window.clearInterval(dt.timer
                                .playing), e.data) {
                                case 0:
                                    dt.media.paused = !0, v(dt.media,
                                        "ended");
                                    break;
                                case 1:
                                    dt.media.paused = !1, v(dt.media,
                                            "play"), dt.timer.playing =
                                        window.setInterval(
                                            function() {
                                                dt.media.currentTime =
                                                    t.getCurrentTime(),
                                                    v(dt.media,
                                                        "timeupdate"
                                                    )
                                            }, 200);
                                    break;
                                case 2:
                                    dt.media.paused = !0, v(dt.media,
                                        "pause")
                            }
                        }
                    }
                })
        }

        function R() {
            if ("video" === dt.type) {
                dt.videoContainer.insertAdjacentHTML("afterbegin",
                        "<div class='" + S.selectors.captions.replace(
                            ".", "") + "'></div>"), dt.captionsContainer =
                    N(S.selectors.captions), dt.usingTextTracks = !1,
                    dt.media.textTracks && (dt.usingTextTracks = !0);
                for (var e, t = "", r = dt.media.childNodes, a = 0; a <
                    r.length; a++) "track" === r[a].nodeName.toLowerCase() &&
                    (e = r[a].getAttribute("kind"), "captions" === e &&
                        (t = r[a].getAttribute("src")));
                if (dt.captionExists = !0, "" === t ? (dt.captionExists = !
                    1, n("No caption track found.")) : n(
                    "Caption track found; URI: " + t), dt.captionExists) {
                    for (var s = dt.media.textTracks, o = 0; o < s.length; o++)
                        s[o].mode = "hidden";
                    if (T(dt), ("IE" === dt.browser.name && dt.browser.version >=
                            10 || "Firefox" === dt.browser.name && dt.browser
                            .version >= 31 || "Chrome" === dt.browser.name &&
                            dt.browser.version >= 43 || "Safari" === dt
                            .browser.name && dt.browser.version >= 7) &&
                        (n(
                            "Detected unsupported browser for HTML5 captions. Using fallback."
                        ), dt.usingTextTracks = !1), dt.usingTextTracks
                    ) {
                        n("TextTracks supported.");
                        for (var i = 0; i < s.length; i++) {
                            var l = s[i];
                            "captions" === l.kind && y(l, "cuechange",
                                function() {
                                    dt.captionsContainer.innerHTML =
                                        "", this.activeCues[0] &&
                                        this.activeCues[0].hasOwnProperty(
                                            "text") && dt.captionsContainer
                                        .appendChild(this.activeCues[
                                            0].getCueAsHTML())
                                })
                        }
                    } else if (n(
                            "TextTracks not supported so rendering captions manually."
                        ), dt.currentCaption = "", dt.captions = [], "" !==
                        t) {
                        var u = new XMLHttpRequest;
                        u.onreadystatechange = function() {
                            if (4 === u.readyState)
                                if (200 === u.status) {
                                    var e, t = [],
                                        r = u.responseText;
                                    t = r.split("\n\n");
                                    for (var a = 0; a < t.length; a++)
                                        e = t[a], dt.captions[a] = [],
                                        dt.captions[a] = e.split(
                                            "\n");
                                    dt.captions.shift(), n(
                                        "Successfully loaded the caption file via AJAX."
                                    )
                                } else n(
                                    "There was a problem loading the caption file via AJAX.", !
                                    0)
                        }, u.open("get", t, !0), u.send()
                    }
                    if ("Safari" === dt.browser.name && dt.browser.version >=
                        7) {
                        n(
                            "Safari 7+ detected; removing track from DOM."
                        ), s = dt.media.getElementsByTagName(
                            "track");
                        for (var c = 0; c < s.length; c++) dt.media.removeChild(
                            s[c])
                    }
                } else f(dt.container, S.classes.captions.enabled)
            }
        }

        function B() {
            if ("audio" != dt.type && S.fullscreen.enabled) {
                var e = F.supportsFullScreen;
                e || S.fullscreen.fallback && !I() ? (n((e ? "Native" :
                    "Fallback") + " fullscreen enabled."), f(dt
                    .container, S.classes.fullscreen.enabled, !
                    0)) : n(
                    "Fullscreen not supported and fallback disabled."
                ), S.fullscreen.hideControls && f(dt.container, S.classes
                    .fullscreen.hideControls, !0)
            }
        }

        function D() {
            dt.media.play()
        }

        function j() {
            dt.media.pause()
        }

        function _(e) {
            e === !0 ? D() : e === !1 ? j() : dt.media[dt.media.paused ?
                "play" : "pause"]()
        }

        function W(e) {
            "number" != typeof e && (e = S.seekTime), U(dt.media.currentTime -
                e)
        }

        function Y(e) {
            "number" != typeof e && (e = S.seekTime), U(dt.media.currentTime +
                e)
        }

        function U(e) {
            var t = 0;
            "number" == typeof e ? t = e : "object" != typeof e ||
                "input" !== e.type && "change" !== e.type || (t = e.target
                    .value / e.target.max * dt.media.duration), 0 > t ?
                t = 0 : t > dt.media.duration && (t = dt.media.duration);
            try {
                dt.media.currentTime = t.toFixed(1)
            } catch (r) {}
            "youtube" == dt.type && (dt.embed.seekTo(dt.media.currentTime),
                v(dt.media, "timeupdate")), n("Seeking to " + dt.media
                .currentTime + " seconds"), k(t)
        }

        function z() {
            f(dt.container, S.classes.playing, !dt.media.paused), f(dt.container,
                S.classes.stopped, dt.media.paused)
        }

        function X(e) {
            function t() {
                f(dt.controls, S.classes.hover, !0), window.clearTimeout(
                    a), s || (a = window.setTimeout(function() {
                    f(dt.controls, S.classes.hover, !1)
                }, 2e3))
            }

            function n(e) {
                s = "mouseenter" === e.type
            }
            var r = F.supportsFullScreen;
            e && e.type === F.fullScreenEventName ? dt.isFullscreen = F
                .isFullScreen(dt.container) : r ? (F.isFullScreen(dt.container) ?
                    F.cancelFullScreen() : F.requestFullScreen(dt.container),
                    dt.isFullscreen = F.isFullScreen(dt.container)) : (
                    dt.isFullscreen = !dt.isFullscreen, dt.isFullscreen ?
                    (y(document, "keyup", J), document.body.style.overflow =
                        "hidden") : (b(document, "keyup", J), document.body
                        .style.overflow = "")), f(dt.container, S.classes
                    .fullscreen.active, dt.isFullscreen);
            var a, s = !1;
            S.fullscreen.hideControls && (f(dt.controls, S.classes.hover, !
                1), m(dt.controls, "mouseenter mouseleave", n,
                dt.isFullscreen), m(dt.container, "mousemove",
                t, dt.isFullscreen))
        }

        function J(e) {
            27 === (e.which || e.charCode || e.keyCode) && dt.isFullscreen &&
                X()
        }

        function $(e) {
            "undefined" == typeof e && (e = S.storage.enabled && x().supported ?
                    window.localStorage[S.storage.key] || S.volume : S.volume
                ), e > 10 && (e = 10), 0 > e && (e = 0), dt.media.volume =
                parseFloat(e / 10), "youtube" == dt.type && (dt.embed.setVolume(
                    100 * dt.media.volume), v(dt.media,
                    "volumechange")), dt.media.muted && e > 0 && K()
        }

        function K(e) {
            "undefined" == typeof e && (e = !dt.media.muted), dt.media.muted =
                e, "youtube" === dt.type && (dt.embed[dt.media.muted ?
                    "mute" : "unMute"](), v(dt.media,
                    "volumechange"))
        }

        function G() {
            var e = dt.media.muted ? 0 : 10 * dt.media.volume;
            dt.supported.full && dt.volume && (dt.volume.value = e), S.storage
                .enabled && x().supported && window.localStorage.setItem(
                    S.storage.key, e), f(dt.container, S.classes.muted,
                    0 === e), dt.supported.full && dt.buttons.mute && (
                    dt.buttons.mute.checked = 0 === e)
        }

        function Q(e) {
            dt.supported.full && dt.buttons.captions && ("undefined" ==
                typeof e && (e = -1 === dt.container.className.indexOf(
                        S.classes.captions.active), dt.buttons.captions
                    .checked = e), f(dt.container, S.classes.captions
                    .active, e))
        }

        function Z(e) {
            var t = "waiting" === e.type;
            clearTimeout(dt.loadingTimer), dt.loadingTimer = setTimeout(
                function() {
                    f(dt.container, S.classes.loading, t)
                }, t ? 250 : 0)
        }

        function et(e) {
            var t = dt.progress.played.bar,
                n = dt.progress.played.text,
                r = 0;
            if (e) switch (e.type) {
                case "timeupdate":
                case "seeking":
                    r = h(dt.media.currentTime, dt.media.duration),
                        "timeupdate" == e.type && dt.buttons.seek &&
                        (dt.buttons.seek.value = r);
                    break;
                case "change":
                case "input":
                    r = e.target.value;
                    break;
                case "playing":
                case "progress":
                    t = dt.progress.buffer.bar, n = dt.progress.buffer
                        .text, r = function() {
                            var e = dt.media.buffered;
                            return e && e.length ? h(e.end(0), dt.media
                                    .duration) : "number" == typeof e ?
                                100 * e : 0
                        }()
            }
            t && (t.value = r), n && (n.innerHTML = r)
        }

        function tt(e, t) {
            if (t) {
                dt.secs = parseInt(e % 60), dt.mins = parseInt(e / 60 %
                    60), dt.hours = parseInt(e / 60 / 60 % 60);
                var n = parseInt(dt.media.duration / 60 / 60 % 60) > 0;
                dt.secs = ("0" + dt.secs).slice(-2), dt.mins = ("0" +
                    dt.mins).slice(-2), t.innerHTML = (n ? dt.hours +
                    ":" : "") + dt.mins + ":" + dt.secs
            }
        }

        function nt() {
            var e = dt.media.duration || 0;
            !dt.duration && S.displayDuration && dt.media.paused && tt(
                e, dt.currentTime), dt.duration && tt(e, dt.duration)
        }

        function rt(e) {
            tt(dt.media.currentTime, dt.currentTime), et(e)
        }

        function at() {
            for (var e = dt.media.querySelectorAll("source"), t = e.length -
                1; t >= 0; t--) c(e[t]);
            dt.media.removeAttribute("src")
        }

        function st(e) {
            if (e.src) {
                var t = document.createElement("source");
                d(t, e), p(dt.media, t)
            }
        }

        function ot(e) {
            if ("youtube" === dt.type && "string" == typeof e) return dt
                .embed.destroy(), q(e), rt(), void 0;
            if (j(), U(), at(), "string" == typeof e) dt.media.setAttribute(
                "src", e);
            else if (e.constructor === Array)
                for (var t in e) st(e[t]);
            dt.supported.full && (rt(), z()), dt.media.load(), null !==
                dt.media.getAttribute("autoplay") && D()
        }

        function it(e) {
            "video" === dt.type && dt.media.setAttribute("poster", e)
        }

        function lt() {
            var e = "IE" == dt.browser.name ? "change" : "input";
            y(dt.buttons.play, "click", function() {
                    D(), setTimeout(function() {
                        dt.buttons.pause.focus()
                    }, 100)
                }), y(dt.buttons.pause, "click", function() {
                    j(), setTimeout(function() {
                        dt.buttons.play.focus()
                    }, 100)
                }), y(dt.buttons.restart, "click", U), y(dt.buttons.rewind,
                    "click", W), y(dt.buttons.forward, "click", Y), y(
                    dt.buttons.seek, e, U), y(dt.volume, e, function() {
                    $(this.value)
                }), y(dt.buttons.mute, "change", function() {
                    K(this.checked)
                }), y(dt.buttons.fullscreen, "click", X), F.supportsFullScreen &&
                y(document, F.fullScreenEventName, X), y(dt.media,
                    "timeupdate seeking", rt), y(dt.media, "timeupdate",
                    k), y(dt.media, "loadedmetadata", nt), y(dt.buttons
                    .captions, "change", function() {
                        Q(this.checked)
                    }), y(dt.media, "ended", function() {
                    "video" === dt.type && (dt.captionsContainer.innerHTML =
                        ""), z()
                }), y(dt.media, "progress playing", et), y(dt.media,
                    "volumechange", G), y(dt.media, "play pause", z), y(
                    dt.media, "waiting canplay seeked", Z), y(dt.checkboxes,
                    "keyup", g), "video" === dt.type && S.click && y(dt
                    .videoContainer, "click", function() {
                        dt.media.paused ? v(dt.buttons.play, "click") :
                            dt.media.ended ? (U(), v(dt.buttons.play,
                                "click")) : v(dt.buttons.pause, "click")
                    })
        }

        function ut() {
            if (!dt.init) return null;
            if (dt.container.setAttribute("class", S.selectors.container
                    .replace(".", "")), dt.init = !1, c(N(S.selectors.controls)),
                "youtube" === dt.type) return dt.embed.destroy(), void 0;
            "video" === dt.type && (c(N(S.selectors.captions)), u(dt.videoContainer)),
                dt.media.setAttribute("controls", "");
            var e = dt.media.cloneNode(!0);
            dt.media.parentNode.replaceChild(e, dt.media)
        }

        function ct() {
            if (dt.init) return null;
            F = w(), dt.browser = r(), dt.media = dt.container.querySelectorAll(
                "audio, video, div")[0];
            var t = dt.media.tagName.toLowerCase();
            switch (t) {
                case "div":
                    dt.type = dt.media.getAttribute("data-type");
                    break;
                default:
                    dt.type = t
            }
            if (dt.supported = e.supported(dt.type), !dt.supported.basic)
                return !1;
            if (n(dt.browser.name + " " + dt.browser.version), V(),
                "video" == dt.type || "audio" == dt.type) {
                if (!dt.supported.full) return;
                pt(), S.displayDuration && nt(), O()
            }
            dt.init = !0
        }

        function pt() {
            return M(), L() ? (R(), $(), G(), B(), lt(), void 0) : !1
        }
        var dt = this;
        return dt.container = o, ct(), dt.init ? {
            media: dt.media,
            play: D,
            pause: j,
            restart: U,
            rewind: W,
            forward: Y,
            seek: U,
            source: ot,
            poster: it,
            setVolume: $,
            togglePlay: _,
            toggleMute: K,
            toggleCaptions: Q,
            toggleFullscreen: X,
            isFullscreen: function() {
                return dt.isFullscreen || !1
            },
            support: function(e) {
                return a(dt, e)
            },
            destroy: ut,
            restore: ct
        } : {}
    }
    var F, S, C = {
        enabled: !0,
        debug: !1,
        seekTime: 10,
        volume: 5,
        click: !0,
        tooltips: !1,
        displayDuration: !0,
        iconPrefix: "icon",
        selectors: {
            container: ".player",
            controls: ".player-controls",
            labels: "[data-player] .sr-only, label .sr-only",
            buttons: {
                seek: "[data-player='seek']",
                play: "[data-player='play']",
                pause: "[data-player='pause']",
                restart: "[data-player='restart']",
                rewind: "[data-player='rewind']",
                forward: "[data-player='fast-forward']",
                mute: "[data-player='mute']",
                volume: "[data-player='volume']",
                captions: "[data-player='captions']",
                fullscreen: "[data-player='fullscreen']"
            },
            progress: {
                container: ".player-progress",
                buffer: ".player-progress-buffer",
                played: ".player-progress-played"
            },
            captions: ".player-captions",
            currentTime: ".player-current-time",
            duration: ".player-duration"
        },
        classes: {
            videoWrapper: "player-video-wrapper",
            embedWrapper: "player-video-embed",
            type: "player-{0}",
            stopped: "stopped",
            playing: "playing",
            muted: "muted",
            loading: "loading",
            tooltip: "player-tooltip",
            hidden: "sr-only",
            hover: "hover",
            captions: {
                enabled: "captions-enabled",
                active: "captions-active"
            },
            fullscreen: {
                enabled: "fullscreen-enabled",
                active: "fullscreen-active",
                hideControls: "fullscreen-hide-controls"
            }
        },
        captions: {
            defaultActive: !1
        },
        fullscreen: {
            enabled: !0,
            fallback: !0,
            hideControls: !0
        },
        storage: {
            enabled: !0,
            key: "plyr_volume"
        },
        controls: ["restart", "rewind", "play", "fast-forward",
            "current-time", "duration", "mute", "volume", "captions",
            "fullscreen"
        ],
        onSetup: function() {}
    };
    e.supported = function(e) {
        var t, n, a = r(),
            s = "IE" === a.name && a.version <= 9,
            o = /iPhone|iPod/i.test(navigator.userAgent),
            i = !!document.createElement("audio").canPlayType,
            l = !!document.createElement("video").canPlayType;
        switch (e) {
            case "video":
                t = l, n = t && !s && !o;
                break;
            case "audio":
                t = i, n = t && !s;
                break;
            case "youtube":
                t = !0, n = !s;
                break;
            default:
                t = i && l, n = t && !s
        }
        return {
            basic: t,
            full: n
        }
    }, e.setup = function(t) {
        if (S = k(C, t), !S.enabled || !e.supported().basic) return !1;
        for (var n = document.querySelectorAll(S.selectors.container), r = [],
            a = n.length - 1; a >= 0; a--) {
            var s = n[a];
            if ("undefined" == typeof s.plyr) {
                var o = new T(s);
                s.plyr = Object.keys(o).length ? o : !1, S.onSetup.apply(s.plyr)
            }
            r.push(s.plyr)
        }
        return r
    }
}(this.plyr = this.plyr || {});