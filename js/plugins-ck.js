// Avoid `console` errors in browsers that lack a console.
(function() {
    var e, t = function() {}, n = [ "assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn" ], r = n.length, i = window.console = window.console || {};
    while (r--) {
        e = n[r];
        i[e] || (i[e] = t);
    }
})();