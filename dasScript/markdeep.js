/**See http://casual-effects.com/markdeep for @license and documentation.
markdeep.min.js 1.03 (C) 2018 Morgan McGuire
highlight.min.js 9.12.0 (C) 2017 Ivan Sagalaev https://highlightjs.org/*/
! function() {
    "use strict";

    function e(e, t, r) {
        return "<" + e + (r ? " " + r : "") + ">" + t + "</" + e + ">"
    }

    function t(e) {
        try {
            var t = document.createElement("canvas"),
                r = t.getContext("2d");
            return r.font = "10pt " + e, r.measureText("M").width
        } catch (e) {
            return 10
        }
    }

    function r(e, t) {
        if (window.markdeepOptions && void 0 !== window.markdeepOptions[e]) {
            var r = window.markdeepOptions[e];
            return t ? (r = r[t], void 0 !== r ? r : ne[e][t]) : window.markdeepOptions[e]
        }
        return void 0 !== ne[e] ? t ? ne[e][t] : ne[e] : void console.warn('Illegal option: "' + e + '"')
    }

    function n(t, n) {
        if (r("showLabels")) {
            var a = " {\xa0" + t + "\xa0}";
            return n ? e(n, a) : a
        }
        return ""
    }

    function a(e) {
        return r("lang").keyword[e.toLowerCase()] || e
    }

    function i(e) {
        return (e + "").rp(/&/g, "&amp;").rp(/</g, "&lt;").rp(/>/g, "&gt;").rp(/"/g, "&quot;")
    }

    function s(e) {
        return e.rp(/&lt;/g, "<").rp(/&gt;/g, ">").rp(/&quot;/g, '"').rp(/&#39;/g, "'").rp(/&ndash;/g, "\u2013").rp(/&mdash;/g, "---").rp(/&amp;/g, "&")
    }

    function o(e) {
        return e.rp(/<.*?>/g, "")
    }

    function c(e) {
        return encodeURI(e.rp(/\s/g, "").toLowerCase())
    }

    function l() {
        for (var t = "", r = 1; r <= 6; ++r) {
            t += ".md h" + r + "::before {\ncontent:";
            for (var n = 1; n <= r; ++n) t += "counter(h" + n + ') "' + (n < r ? "." : " ") + '"';
            t += ";\ncounter-increment: h" + r + ";margin-right:10px}"
        }
        return e("style", t)
    }

    function u(e, t) {
        var r = e.innerHTML;
        return r = r.rp(/<\/https?:.*>|<\/ftp:.*>|<\/[^ "\t\n>]+@[^ "\t\n>]+>/gi, ""), r = r.rp(/<(https?|ftp): (.*?)>/gi, function(e, t, r) {
            var n = "<" + t + "://" + r.rp(/=""\s/g, "/");
            return '=""' === n.ss(n.length - 3) && (n = n.ss(0, n.length - 3)), n = n.rp(/"/g, ""), n + ">"
        }), r = r.rp(/<style class=["']fallback["']>.*?<\/style>/gim, ""), r = s(r)
    }

    function d(e) {
        function t(e, t, r) {
            for (var n = t, a = t; a < r; ++a, ++n) {
                var i = e.charCodeAt(n);
                n += i >= 55296 && i <= 56319
            }
            return n - r
        }

        function r() {
            u = e.indexOf("\n", s) + 1, d = t(e, s + o, s + c), p = p || /\S/.test(e.ss(s, s + o)), g = g || "*" !== e[s + c + d], m = !g && (m || /[^ *\t\n\r]/.test(e.ss(s + c + d + 1, u)))
        }
        for (var n = {
                p: e,
                q: "",
                s: "",
                u: ""
            }, a = e.indexOf(q); a >= 0; a = e.indexOf(q, a + q.length)) {
            var i, s = ie(0, e.lastIndexOf("\n", a)) + 1,
                o = a - s;
            for (i = a + q.length; e[i] === R; ++i);
            var c = i - s - 1,
                l = {
                    p: e.ss(0, s),
                    q: "",
                    s: "center",
                    u: e.ss(s, a).rp(/[ \t]+$/, " ")
                },
                u = 0,
                d = 0,
                p = !1,
                m = !1,
                g = !1;
            r();
            for (var b = !0, f = i; b;) {
                if (s = u, r(), 0 === s) return n;
                if (p ? l.s = "floatright" : m && (l.s = "floatleft"), e[s + o] !== R || p && e[s + c + d] !== R) b = !1;
                else {
                    var h;
                    for (h = o; h < c && e[s + h] === R; ++h);
                    var y = s + o,
                        x = s + c + d;
                    if (!p) {
                        var v = e.indexOf("\n", y);
                        v !== -1 && (x = Math.min(x, v))
                    }
                    if (l.u += e.ss(f, y).rp(/^[ \t]*[ \t]/, " ").rp(/[ \t][ \t]*$/, " "), h === c) return l.u += e.ss(s + c + 1), l;
                    l.q += e.ss(y + 1, x) + "\n", f = x + 1
                }
            }
        }
        return n
    }

    function p(e, t, r, n) {
        var a = t.source,
            i = "[^ \\t\\n" + a + "]",
            s = "([^A-Za-z0-9])(" + a + ")(" + i + ".*?(\\n.+?)*?)" + a + "(?![A-Za-z0-9])";
        return e.rp(RegExp(s, "g"), "$1<" + r + (n ? " " + n : "") + ">$3</" + r + ">")
    }

    function m(t, n) {
        function a(e) {
            return e.trim().rp(/^\||\|$/g, "")
        }
        var i = /(?:\n[ \t]*(?:(?:\|?[ \t\S]+?(?:\|[ \t\S]+?)+\|?)|\|[ \t\S]+\|)(?=\n))/.source,
            s = /\n[ \t]*(?:(?:\|? *\:?-+\:?(?: *\| *\:?-+\:?)+ *\|?|)|\|[\:-]+\|)(?=\n)/.source,
            o = /\n[ \t]*\[[^\n\|]+\][ \t]*(?=\n)/.source,
            c = RegExp(i + s + i + "+(" + o + ")?", "g");
        return t = t.rp(c, function(t) {
            var i = t.split("\n"),
                s = "",
                o = "" === i[0] ? 1 : 0,
                c = i[i.length - 1].trim();
            c.length > 3 && "[" === c[0] && "]" === c[c.length - 1] ? (i.pop(), c = c.ss(1, c.length - 1)) : c = void 0;
            var l = [];
            a(i[o + 1]).rp(/:?-+:?/g, function(e) {
                var t = ":" === e[0],
                    r = ":" === e[e.length - 1];
                l.push(n(' style="text-align:' + (t && r ? "center" : r ? "right" : "left") + '"'))
            });
            for (var u = i[o + 1].trim(), d = "|" === u[0], p = "|" === u[u.length - 1], m = "th", g = o; g < i.length; ++g) {
                u = i[g].trim(), d || "|" !== u[0] || (u = "&nbsp;" + u), p || "|" !== u[u.length - 1] || (u += "&nbsp;"), u = a(u);
                var b = 0;
                s += e("tr", "<" + m + l[0] + "> " + u.rp(/ *\| */g, function() {
                    return ++b, " </" + m + "><" + m + l[b] + "> "
                }) + " </" + m + ">") + "\n", g == o && (++g, m = "td")
            }
            return s = e("table", s, n('class="table"')), c && (c = e("div", c, n('class="tablecaption"')), s = r("captionAbove", "table") ? c + s : "\n" + s + c), e("div", s, "class='table'")
        })
    }

    function g(e, t) {
        e = e.rp(/^(\s*)(?:-\s*)?(?:\[ \]|\u2610)(\s+)/gm, "$1\u2610$2"), e = e.rp(/^(\s*)(?:-\s*)?(?:\[x\]|\u2611)(\s+)/gm, "$1\u2611$2");
        for (var r = /\n\s*\n/.source, n = /[:,]\s*\n/.source, a = RegExp("(" + n + "|" + r + "|<p>s*\n|<br/>s*\n?)" + /((?:[ \t]*(?:\d+\.|-|\+|\*|\u2611|\u2610)(?:[ \t]+.+\n(?:[ \t]*\n)?)+)+)/.source, "gm"), i = !0, s = {
                "+": t('class="plus"'),
                "-": t('class="minus"'),
                "*": t('class="asterisk"'),
                // "@": t('class="at-sign"'),
                "\u2611": t('class="checked"'),
                "\u2610": t('class="unchecked"')
            }, o = t('class="number"'); i;) i = !1, e = e.rp(a, function(e, r, n) {
            var a = r,
                c = [],
                l = {
                    F: -1
                };
            for (n.split("\n").forEach(function(e) {
                    var r = e.rp(/^\s*/, ""),
                        n = e.length - r.length,
                        u = s[r[0]],
                        d = !!u;
                    u = u || o;
                    var p = /^\d+\.[ \t]/.test(r),
                        m = "" === r,
                        g = p ? " " + t("start=" + r.match(/^\d+/)[0]) : "";
                    if ((p || d) && (n += 2), l)
                        if (p || d || !(m || n >= l.F)) {
                            if (n !== l.F)
                                if (l.F !== -1 && n < l.F)
                                    for (; l && n < l.F;) c.pop(), a += "\n</li></" + l.tag + ">", l = c[c.length - 1];
                                else l = {
                                    F: n,
                                    tag: p ? "ol" : "ul",
                                    G: e.ss(0, n - 2)
                                }, c.push(l), a += "\n<" + l.tag + g + ">";
                            else l.F !== -1 && (a += "\n</li>");
                            l ? a += "\n" + l.G + "<li " + u + ">" + r.rp(/^(\d+\.|-|\+|\*|\u2611|\u2610) /, "") : (a += "\n" + e, i = !0)
                        } else a += "\n" + l.G + e;
                    else a += "\n" + e
                }), a = a.replace(/\s+$/, ""), l = c.pop(); l; l = c.pop()) a += "</li></" + l.tag + ">";
            return a + "\n\n"
        });
        return e
    }

    function b(t, n) {
        var i = /^(?:[^\|<>\s-\+\*\d].*[12]\d{3}(?!\d).*?|(?:[12]\d{3}(?!\.).*\d.*?)|(?:\d{1,3}(?!\.).*[12]\d{3}(?!\d).*?))/.source,
            s = "(" + i + "):" + /[ \t]+([^ \t\n].*)\n/.source,
            o = /(?:[ \t]*\n)?((?:[ \t]+.+\n(?:[ \t]*\n){0,3})*)/.source,
            c = s + o,
            l = "\n[ \t]*\n",
            u = RegExp(c, "gm"),
            d = n('valign="top"'),
            p = n('style="width:100px;padding-right:15px" rowspan="2"'),
            m = n('style="padding-bottom:25px"'),
            g = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(a),
            b = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"].map(a),
            f = b.join("|"),
            h = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(a),
            y = 9;
        try {
            var x = 0;
            t = t.rp(RegExp(l + "(" + c + "){2,}", "gm"), function(t) {
                ++x;
                var a = [],
                    i = !1;
                t.rp(u, function(t, r, s, o) {
                    var c = "",
                        l = "",
                        u = "",
                        h = !1;
                    r = r.trim(), "(" === r[0] && ")" === r.slice(-1) && (r = r.slice(1, -1), h = !0);
                    var v = r.match(RegExp("([0123]?\\d)\\D+([01]?\\d|" + f + ")\\D+([12]\\d{3})", "i"));
                    if (v) u = v[1], l = v[2], c = v[3];
                    else if (v = r.match(RegExp("([12]\\d{3})\\D+([01]?\\d|" + f + ")\\D+([0123]?\\d)", "i"))) u = v[3], l = v[2], c = v[1];
                    else {
                        if (v = r.match(RegExp("(" + f + ")\\D+([0123]?\\d)\\D+([12]\\d{3})", "i")), !v) throw "Could not parse date";
                        u = v[2], l = v[1], c = v[3]
                    }
                    r = u + " " + l + " " + c;
                    var _ = parseInt(l) - 1;
                    isNaN(_) && (_ = b.indexOf(l.toLowerCase()));
                    var w = new Date(Date.UTC(parseInt(c), _, parseInt(u), y)),
                        C = w.getUTCDay();
                    return r = g[C] + "<br/>" + r, i = i || 0 === C || 6 === C, a.push({
                        date: w,
                        title: s,
                        sourceOrder: a.length,
                        parenthesized: h,
                        text: h ? "" : e("tr", e("td", "<a " + n('class="target" name="schedule' + x + "_" + w.getUTCFullYear() + "-" + (w.getUTCMonth() + 1) + "-" + w.getUTCDate() + '"') + ">&nbsp;</a>" + r, p) + e("td", e("b", s)), d) + e("tr", e("td", "\n\n" + o, m), d)
                    }), ""
                });
                var s = r("sortScheduleLists") ? a : a.slice(0);
                a.sort(function(e, t) {
                    var r = e.date.getTime(),
                        n = t.date.getTime();
                    return r === n ? e.sourceOrder - t.sourceOrder : r - n
                });
                var o = 864e5,
                    c = (a[a.length - 1].date.getTime() - a[0].date.getTime()) / o,
                    l = new Date;
                l = new Date(Date.UTC(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate(), y));
                var v = "";
                if (c > 14 && c / a.length < 16) {
                    var _ = n('colspan="2" width="14%" style="padding-top:5px;text-align:center;font-style:italic"'),
                        w = n('width="1%" height="30px" style="text-align:right;border:1px solid #EEE;border-right:none;"'),
                        C = n('width="1%" height="30px" style="color:#BBB;text-align:right;"'),
                        N = n('width="14%" style="border:1px solid #EEE;border-left:none;"'),
                        M = n('class="parenthesized"'),
                        k = a[0].date,
                        A = 0,
                        E = !i && r("hideEmptyWeekends"),
                        S = E ? function(e) {
                            return e.getUTCDay() > 0 && e.getUTCDay() < 6
                        } : function() {
                            return !0
                        },
                        T = function(e, t) {
                            return oe(e.getTime() - t.getTime()) < o / 2
                        };
                    for (k = new Date(k.getUTCFullYear(), k.getUTCMonth(), 1, y); k.getTime() < a[a.length - 1].date.getTime();) {
                        for (v += "<table " + n('class="calendar"') + ">\n" + e("tr", e("th", h[k.getUTCMonth()] + " " + k.getUTCFullYear(), n('colspan="14"'))) + "<tr>", (E ? g.slice(1, 6) : g).forEach(function(t) {
                                v += e("td", t, _)
                            }), v += "</tr>"; 0 !== k.getUTCDay();) k = new Date(k.getTime() - o);
                        if (1 !== k.getDate())
                            for (v += "<tr " + d + ">"; 1 !== k.getDate();) S(k) && (v += "<td " + C + ">" + k.getUTCDate() + "</td><td>&nbsp;</td>"), k = new Date(k.getTime() + o);
                        do {
                            if (0 === k.getUTCDay() && (v += "<tr " + d + ">"), S(k)) {
                                var j = "";
                                T(k, l) && (j = n('class="today"'));
                                for (var B = "", I = a[A]; I && T(I.date, k); ++A, I = a[A]) B && (B += "<br/>"), B += I.parenthesized ? e("span", I.title, M) : e("a", I.title, n('href="#schedule' + x + "_" + k.getUTCFullYear() + "-" + (k.getUTCMonth() + 1) + "-" + k.getUTCDate() + '"'));
                                v += B ? e("td", e("b", k.getUTCDate()), w + j) + e("td", B, N + j) : "<td " + w + j + "></a>" + k.getUTCDate() + "</td><td " + N + j + "> &nbsp; </td>"
                            }
                            6 === k.getUTCDay() && (v += "</tr>"), k = new Date(k.getTime() + o)
                        } while (k.getUTCDate() > 1);
                        if (0 !== k.getUTCDay()) {
                            for (; 0 !== k.getUTCDay();) S(k) && (v += "<td " + C + ">" + k.getUTCDate() + "</td><td>&nbsp</td>"), k = new Date(k.getTime() + o);
                            v += "</tr>"
                        }
                        v += "</table><br/>\n", k = new Date(Date.UTC(k.getUTCFullYear(), k.getUTCMonth(), 1, y))
                    }
                }
                return t = "", s.forEach(function(e) {
                    t += e.text
                }), "\n\n" + v + e("table", t, n('class="schedule"')) + "\n\n"
            })
        } catch (e) {}
        return t
    }

    function f(t, r) {
        var n = /^.+\n:(?=[ \t])/.source,
            a = "(s*\n|[: \t].+\n)+";
        return t = t.rp(RegExp("(" + n + a + ")+", "gm"), function(t) {
            var n = [],
                a = null;
            t.split("\n").forEach(function(e, t) {
                0 === e.trim().length ? a && (a.definition += "\n") : /\s/.test(e[0]) || ":" === e[0] ? (":" === e[0] && (e = " " + e.ss(1)), a.definition += e + "\n") : (a = {
                    term: e,
                    definition: ""
                }, n.push(a))
            });
            var i = 0;
            n.forEach(function(e) {
                i = /\n\s*\n/.test(e.definition.trim()) ? 1 / 0 : ie(i, s(o(e.definition)).length)
            });
            var c = "";
            if (i < 160) {
                var l = r("valign=top");
                n.forEach(function(t) {
                    c += e("tr", e("td", e("dt", t.term)) + e("td", e("dd", e("p", t.definition))), l)
                }), c = e("table", c)
            } else n.forEach(function(t) {
                c += e("dt", t.term) + e("dd", e("p", t.definition))
            });
            return e("dl", c)
        })
    }

    function h(t, n) {
        var i = "",
            s = "",
            l = [],
            u = [0],
            d = 0,
            p = 0,
            m = {};
        t = t.rp(/<h([1-6])>(.*?)<\/h\1>/gi, function(t, r, a) {
            r = parseInt(r), a = a.trim();
            for (var g = d; g < r; ++g) l[g] = "", u[g] = 0;
            u.splice(r, d - r), l.splice(r, d - r), d = r, ++u[d - 1];
            var b = u.join("."),
                f = "toc" + b;
            m[o(a).trim().toLowerCase()] = b, a = a.rp(/<a\s.*>(.*?)<\/a>/g, "$1"), l[d - 1] = c(o(a));
            var h = l.join("/");
            return r <= 3 && (i += Array(r).join("&nbsp;&nbsp;") + '<a href="#' + h + '" class="level' + r + '"><span class="tocNumber">' + b + "&nbsp; </span>" + a + "</a><br/>\n", 1 === r ? s += ' &middot; <a href="#' + h + '">' + a + "</a>" : ++p), e("a", "&nbsp;", n('class="target" name="' + h + '"')) + e("a", "&nbsp;", n('class="target" name="' + f + '"')) + t
        }), s.length > 0 && (s = s.ss(10));
        var g = u[0],
            b = g + p,
            f = t.regexIndexOf(/((<a\s+\S+>&nbsp;<\/a>)\s*)*?<h\d>/i);
        f === -1 && (f = 0);
        var h = '<div class="afterTitles"></div>',
            y = t.indexOf(h);
        y === -1 ? y = 0 : y += h.length;
        var x = r("tocStyle"),
            v = "";
        switch ("auto" !== x && "" !== x || (x = b < 4 && g <= 1 || t.length < 2048 ? "none" : g < 7 && b / g < 2.5 ? "short" : f === -1 || f / 55 > b ? "medium" : "long"), x) {
            case "none":
            case "":
                break;
            case "short":
                v = '<div class="shortTOC">' + s + "</div>";
                break;
            case "medium":
                v = '<div class="mediumTOC"><center><b>' + a("Contents") + "</b></center><p>" + i + "</p></div>";
                break;
            case "long":
                y = f, v = '<div class="longTOC"><div class="tocHeader">' + a("Contents") + "</div><p>" + i + "</p></div>";
                break;
            default:
                console.log('markdeepOptions.tocStyle = "' + x + '" specified in your document is not a legal value')
        }
        return t = t.ss(0, y) + v + t.ss(y), [t, m]
    }

    function y(e) {
        return e.rp(/([\.\[\]\(\)\*\+\?\^\$\\\{\}\|])/g, "\\$1")
    }

    function x(e, t) {
        return !(!e || !t) && (e = e.match(/\n/g), t = t.match(/\n/g), e && e.length > 1 && t && t.length > 1)
    }

    function v(t, s) {
        function l(e) {
            var t = (T.push(e) - 1).toString(S);
            for (t = t.rp(/x/gi, "z"); t.length < j;) t = "0" + t;
            return E + t + E
        }

        function u(e) {
            var t = parseInt(e.ss(1, e.length - 1).rp(/z/g, "x"), S);
            return T[t]
        }

        function v(e, t) {
            return l(t)
        }

        function _(e, t, r) {
            return t + l(r)
        }

        function w(t) {
            return function(r, n) {
                return "\n\n</p>\n<a " + l('class="target" name="' + c(o(n)) + '"') + ">&nbsp;</a>" + e("h" + t, n) + "\n<p>\n\n"
            }
        }

        function C(t) {
            var n = d(t);
            if (n.q) {
                var a = /^\n*[ \t]*\[[^\n]+\][ \t]*(?=\n)/;
                n.u = n.u.rp(a, function(t) {
                    return t = t.trim(), t = t.ss(1, t.length - 1), n.caption = e("center", e("div", t, l('class="imagecaption"'))), ""
                });
                var i = M(n.q, n.s),
                    s = r("captionAbove", "diagram");
                return n.p + (n.caption && s ? n.caption : "") + i + (n.caption && !s ? n.caption : "") + "\n" + C(n.u)
            }
            return t
        }
        var N = {},
            k = 0,
            A = {},
            E = "\ue010",
            S = 35,
            T = [],
            j = 4,
            B = RegExp(E + "[0-9a-wyz]{" + j + "," + j + "}" + E, "g");
        void 0 === s && (s = !0), void 0 !== t.innerHTML && (t = t.innerHTML), t = "\n\n" + t, t = t.rp(/<script\s+type\s*=\s*['"]preformatted['"]\s*>([\s\S]*?)<\/script>/gi, "$1");
        var I = function(n, a) {
            var i = RegExp("\n([ \\t]*)" + a + "{3,}([ \\t]*\\S*)([ \\t]+.+)?\n([\\s\\S]+?)\n\\1" + a + "{3,}[ \t]*\n([ \\t]*\\[.+(?:\n.+){0,3}\\])?", "g");
            t = t.rp(i, function(t, i, s, o, c, u) {
                u && (u = u.trim(), u = "<div " + l('class="listingcaption ' + n + '"') + ">" + u.ss(1, u.length - 1) + "</div>\n"), s = s ? s.trim() : s, s = s ? [s] : void 0, c = c.rp(RegExp("(^|\n)" + i, "g"), "$1");
                var d, p, m, g = r("captionAbove", "listing"),
                    b = "";
                do {
                    d = p = m = void 0, c = c.rp(RegExp("\\n([ \\t]*)" + a + "{3,}([ \\t]*\\S+)([ \\t]+.+)?\n([\\s\\S]*)"), function(e, t, r, n, a) {
                        return p = [r], m = n, d = a, ""
                    });
                    var f = hljs.highlightAuto(c, s).value;
                    f = f.rp(/^(.*)$/gm, e("span", "$1", 'class="line"')), o && (f = e("div", f, 'class="' + o + '"')), b += f, c = d, s = p, o = m
                } while (c);
                return "\n" + i + "</p>" + (u && g ? u : "") + l(e("pre", e("code", b), 'class="listing ' + n + '"')) + (u && !g ? u : "") + "<p>\n"
            })
        };
        I("tilde", "~"), I("backtick", "`"), t = t.rp(/(<code\b.*?<\/code>)/gi, v), t = t.rp(/<!--\s[\s\S]+?\s-->/g, ""), t = C(t), t = t.rp(/<svg( .*?)?>([\s\S]*?)<\/svg>/gi, function(e, t, r) {
            return "<svg" + l(t) + ">" + l(r) + "</svg>"
        }), t = t.rp(/<style>([\s\S]*?)<\/style>/gi, function(t, r) {
            return e("style", l(r))
        }), t = t.rp(/<img\s+src=(["'])[\s\S]*?\1\s*>/gi, function(e, t) {
            return "<img " + l(e.ss(5, e.length - 1)) + ">"
        }), t = t.rp(/(`)(.+?(?:\n.+?)?)`(?!\d)/g, e("code", "$2")), t = t.rp(/(<code(?: .*?)?>)([\s\S]*?)<\/code>/gi, function(e, t, r) {
            return l(t + i(r) + "</code>")
        }), t = t.rp(/(<pre\b[\s\S]*?<\/pre>)/gi, v), t = t.rp(/(<\w[^ \n<>]*?[ \t]+)(.*?)(?=\/?>)/g, _), t = t.rp(/(\$\$[\s\S]+?\$\$)/g, v), t = t.rp(/((?:[^\w\d]))\$(\S(?:[^\$]*?\S(?!US|Can))??)\$(?![\w\d])/g, "$1\\($2\\)"), t = t.rp(/((?:[^\w\d]))\$([ \t][^\$]+?[ \t])\$(?![\w\d])/g, "$1\\($2\\)"), t = t.rp(/(\\\([\s\S]+?\\\))/g, v), t = t.rp(/(\\begin\{equation\}[\s\S]*?\\end\{equation\})/g, v), t = t.rp(/(\\begin\{eqnarray\}[\s\S]*?\\end\{eqnarray\})/g, v), t = t.rp(/(\\begin\{equation\*\}[\s\S]*?\\end\{equation\*\})/g, v), t = t.rp(/(?:^|\s*\n)(.+?)\n[ \t]*={3,}[ \t]*\n/g, w(1)), t = t.rp(/(?:^|\s*\n)(.+?)\n[ \t]*-{3,}[ \t]*\n/g, w(2));
        for (var L = 6; L > 0; --L) t = t.rp(RegExp(/^\s*/.source + "#{" + L + "," + L + "}(?:[ \t])([^\n]+?)#*[ \t]*\n", "gm"), w(L)), t = t.rp(RegExp(/^\s*/.source + "\\(#{" + L + "," + L + "}\\)(?:[ \t])([^\n]+?)\\(?#*\\)?\\n[ \t]*\n", "gm"), "\n</p>\n" + e("div", "$1", l('class="nonumberh' + L + '"')) + "\n<p>\n\n");
        t = t.rp(/\n[ \t]*((\*|-|_)[ \t]*){3,}[ \t]*\n/g, "\n<hr/>\n"), t = t.rp(/\n[ \t]*\+{5,}[ \t]*\n/g, "\n<hr " + l('class="pagebreak"') + "/>\n"), t = t.rp(/^!!![ \t]*([^\s"'><&\:]*)\:?(.*)\n([ \t]{3,}.*\s*\n)*/gm, function(t, r, n) {
            return t = t.trim(), "\n\n" + e("div", ((n ? e("div", n, l('class="admonition-title"')) + "\n" : "") + t.ss(t.indexOf("\n"))).trim(), l('class="admonition ' + r.toLowerCase().trim() + '"')) + "\n\n"
        });
        var D = l('class="fancyquote"');
        t = t.rp(/\n>[ \t]*"(.*(?:\n>.*)*)"[ \t]*(?:\n>[ \t]*)?(\n>[ \t]{2,}\S.*)?\n/g, function(t, r, n) {
            return e("blockquote", e("span", r.rp(/\n>/g, "\n"), D) + (n ? e("span", n.rp(/\n>/g, "\n"), l('class="author"')) : ""), D)
        });
        var $ = !1;
        do $ = !1, t = t.rp(/(?:\n>.*){2,}/g, function(t) {
            return $ = !0, e("blockquote", t.rp(/\n>/g, "\n"))
        }); while ($);
        t = t.rp(/\s*\[\^(\S+)\](?!:)/g, function(e, t) {
            return t = t.toLowerCase().trim(), t in N || (++k, N[t] = k), "<sup><a " + l('href="#endnote-' + t + '"') + ">" + N[t] + "</a></sup>"
        }), t = t.rp(/\[#([^\)\(\[\]\.#\s]+)\](?!:)/g, function(e, t) {
            return t = t.trim(), "[<a " + l('href="#citation-' + t.toLowerCase() + '"') + ">" + t + "</a>]"
        }), t = t.rp(/\n\[#(\S+)\]:[ \t]+((?:[ \t]*\S[^\n]*\n?)*)/g, function(e, t, r) {
            return t = t.trim(), "<div " + l('class="bib"') + ">[<a " + l('class="target" name="citation-' + t.toLowerCase() + '"') + ">&nbsp;</a><b>" + t + "</b>] " + r + "</div>"
        }), t = m(t, l), t = t.rp(/^\[([^\^#].*?)\]:(.*?)$/gm, function(e, t, r) {
            return A[t.toLowerCase().trim()] = {
                link: r.trim(),
                used: !1
            }, ""
        }), t = t.rp(/(?:<|(?!<)\b)(\S+@(\S+\.)+?\S{2,}?)(?:$|>|(?=<)|(?=\s)(?!>))/g, function(e, t) {
            return "<a " + l('href="mailto:' + t + '"') + ">" + t + "</a>"
        });
        var z = function(t, r, n) {
            n = n || "";
            var a, i;
            return /\.(mp4|m4v|avi|mpg|mov|webm)$/i.test(r) ? a = "<video " + l('class="markdeep" src="' + r + '"' + n + ' width="480px" controls="true"') + "/>" : /\.(mp3|mp2|ogg|wav|m4a|aac|flac)$/i.test(r) ? a = "<audio " + l('class="markdeep" controls ' + n + '><source src="' + r + '">') + "</audio>" : (i = r.match(/^https:\/\/(?:www\.)?(?:youtube\.com\/\S*?v=|youtu\.be\/)([\w\d-]+)(&.*)?$/i)) ? a = "<iframe " + l('class="markdeep" src="https://www.youtube.com/embed/' + i[1] + '"' + n + ' width="480px" height="300px" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen') + "></iframe>" : (i = r.match(/^https:\/\/(?:www\.)?vimeo.com\/\S*?\/([\w\d-]+)$/i)) ? a = "<iframe " + l('class="markdeep" src="https://player.vimeo.com/video/' + i[1] + '"' + n + ' width="480px" height="300px" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen') + "></iframe>" : (a = "<img " + l('class="markdeep" src="' + r + '"' + n) + " />", a = e("a ", a, l('href="' + r + '" target="_blank"'))), a
        };
        t = t.rp(/\b(equation|eqn\.|eq\.)\s*\[([^\s\]]+)\]/gi, function(e, t, r) {
            return t + " \\ref{" + r + "}"
        }), t = t.rp(/\b(figure|fig\.|table|tbl\.|listing|lst\.)\s*\[([^\s\]]+)\](?=\()/gi, function(e) {
            return e + "<span/>"
        }), t = t.rp(/\(http:\/\/g.gravizo.com\/(.*g)\?((?:[^\(\)]|\([^\(\)]*\))*)\)/gi, function(e, t, r) {
            return "(http://g.gravizo.com/" + t + "?" + encodeURIComponent(r) + ")"
        }), t = t.rp(/(^|[^!])\[([^\[\]]+?)\]\(("?)([^<>\s"]+?)\3(\s+[^\)]*?)?\)/g, function(e, t, r, a, i, s) {
            return s = s || "", t + "<a " + l('href="' + i + '"' + s) + ">" + r + "</a>" + n(i)
        }), t = t.rp(/(^|[^!])\[[ \t]*?\]\(("?)([^<>\s"]+?)\2\)/g, function(e, t, r, n) {
            return t + "<a " + l('href="' + n + '"') + ">" + n + "</a>"
        }), t = t.rp(/(!\[[^\[\]]*?\])\[("?)([^"<>\s]+?)\2(\s[^\]]*?)?\]/, function(e, t, r, n, a) {
            n = n.toLowerCase().trim();
            var i = A[n];
            if (i) {
                i.used = !0;
                var s = t + "(" + i.link + (i.attribs || "") + ")";
                return s
            }
            return console.log("Reference image '" + n + "' never defined"), "?"
        });
        var R = l('width="100%"'),
            q = l('valign="top"');
        t = t.rp(/(?:\n(?:[ \t]*!\[[^\n]*?\]\(("?)[^<>\s]+?(?:[^\n\)]*?)?\)){2,}[ \t]*)+\n/g, function(t) {
            var r = "";
            return t = t.split("\n"), t.forEach(function(t) {
                t = t.trim(), t && (r += e("tr", t.rp(/[ \t]*!\[[^\n]*?\]\([^\)\s]+([^\)]*?)?\)/g, function(t, r) {
                    return e("td", "\n\n" + t + "\n\n")
                }), q))
            }), "\n" + e("table", r, R) + "\n"
        }), t = t.rp(/(\s*)!\[\]\(("?)([^"<>\s]+?)\2(\s[^\)]*?)?\)(\s*)/g, function(t, r, n, a, i, s) {
            var o = z(t, a, i);
            return x(r, s) && (o = e("center", o)), r + o + s
        });
        for (var U = !0, O = r("captionAbove", "image"); U;) U = !1, t = t.rp(/(\s*)!\[([\s\S]+?)?\]\(("?)([^"<>\s]+?)\3(\s[^\)]*?)?\)(\s*)/, function(t, r, a, i, s, o, c) {
            U = !0;
            var u = "",
                d = x(r, c);
            o && !d && (o = o.rp(/((?:max-)?width)\s*:\s*[^;'"]*/g, function(e, t) {
                return u = e + ";", t + ":100%"
            }), o = o.rp(/((?:max-)?width)\s*=\s*('\S+?'|"\S+?")/g, function(e, t, r) {
                return u = t + ":" + r.ss(1, r.length - 1) + ";", 'style="' + t + ':100%" '
            }));
            var p = z(t, s, o);
            return d ? (r += "<center>", c = "</center>" + c) : u += "float:right;margin:4px 0px 0px 25px;", a = e("div", a + n(s), l('class="imagecaption"')), r + e("div", (O ? a : "") + p + (O ? "" : a), l('class="image" style="' + u + '"')) + c
        });
        t = p(t, /\*\*/, "strong", l('class="asterisk"')), t = p(t, /__/, "strong", l('class="underscore"')), t = p(t, /\*/, "em", l('class="asterisk"')), t = p(t, /_/, "em", l('class="underscore"')), t = t.rp(/\~\~([^~].*?)\~\~/g, e("del", "$1")), t = t.rp(/(^|[ \t->])(")(?=\w)/gm, "$1" + a("&ldquo;")), t = t.rp(/([A-Za-z\.,:;\?!=<])(")(?=$|\W)/gm, "$1" + a("&rdquo;")), t = t.rp(/(\s|^)<==(\s)/g, "$1\u21d0$2"), t = t.rp(/(\s|^)->(\s)/g, "$1&rarr;$2"), t = t.rp(/(\s|^)-->(\s)/g, "$1&xrarr;$2"), t = t.rp(/(\s|^)==>(\s)/g, "$1\u21d2$2"), t = t.rp(/(\s|^)<-(\s)/g, "$1&larr;$2"), t = t.rp(/(\s|^)<--(\s)/g, "$1&xlarr;$2"), t = t.rp(/(\s|^)<==>(\s)/g, "$1\u21d4$2"), t = t.rp(/(\s|^)<->(\s)/g, "$1\u2194$2"), t = t.rp(/([^-!\:\|])---([^->\:\|])/g, "$1&mdash;$2"), t = t.rp(/([^-!\:\|])--([^->\:\|])/g, "$1&mdash;$2"), t = t.rp(/(\d+\s?)x(\s?\d+)/g, "$1&times;$2"), t = t.rp(/([\s\(\[<\|])-(\d)/g, "$1&minus;$2"), t = t.rp(/(\d) - (\d)/g, "$1 &minus; $2"), t = t.rp(/\^([-+]?\d+)\b/g, "<sup>$1</sup>"), t = t.rp(/(^|\s|\b)\\(pagebreak|newpage)(\b|\s|$)/gi, l('<div style="page-break-after:always"> </div>\n')), t = b(t, l), t = f(t, l), t = g(t, l), t = t.rp(/(\d+?)[ \t-]degree(?:s?)/g, "$1&deg;"), t = t.rp(/(?:<p>)?\n\s*\n+(?!<\/p>)/gi, function(e) {
            return /^<p>/i.test(e) ? e : "\n\n</p><p>\n\n"
        }), t = t.rp(/<p>[\s\n]*<\/p>/gi, ""), t = t.rp(/(^|[^!])\[([^\[\]]+?)\]\[(.*?)\]/g, function(e, t, r, n) {
            n.trim() || (n = r), n = n.toLowerCase().trim();
            var a = A[n];
            return a ? (a.used = !0, t + "<a " + l('href="' + a.link + '"') + ">" + r + "</a>") : (console.log("Reference link '" + n + "' never defined"), "?")
        }), t = t.rp(/\n\[\^(\S+)\]: ((?:.+?\n?)*)/g, function(e, t, r) {
            return t = t.toLowerCase().trim(), t in N ? "\n<div " + l('class="endnote"') + "><a " + l('class="target" name="endnote-' + t + '"') + ">&nbsp;</a><sup>" + N[t] + "</sup> " + r + "</div>" : "\n"
        });
        var F = t.match(/<h([1-6])>(.*?)<\/h\1>/gi);
        F && F.forEach(function(e) {
            e = o(e.ss(4, e.length - 5)).trim();
            var r = "<a " + l('href="#' + c(e) + '"') + ">",
                n = "(" + a("section") + "|" + a("subsection") + ")",
                i = "(\\b" + y(e) + ")";
            t = t.rp(RegExp(i + "\\s+" + n, "gi"), r + "$1</a> $2"), t = t.rp(RegExp(n + "\\s+" + i, "gi"), "$1 " + r + "$2</a>")
        });
        var P = {},
            H = {};
        if (t = t.rp(RegExp(/($|>)\s*/.source + "(" + a("figure") + "|" + a("table") + "|" + a("listing") + "|" + a("diagram") + ")" + /\s+\[(.+?)\]:/.source, "gim"), function(t, r, a, i) {
                var s = a.toLowerCase(),
                    o = P[s] = (0 | P[s]) + 1,
                    u = s + "_" + c(i.toLowerCase().trim());
                return H[u] = {
                    number: o,
                    used: !1,
                    source: s + " [" + i + "]"
                }, r + e("a", "&nbsp;", l('class="target" name="' + u + '"')) + e("b", s[0].toUpperCase() + s.ss(1) + "&nbsp;" + o + ":", l('style="font-style:normal;"')) + n(i)
            }), t = t.rp(RegExp("\\b(fig\\.|tbl\\.|lst\\.|" + a("figure") + "|" + a("table") + "|" + a("listing") + "|" + a("diagram") + ")\\s+\\[([^\\s\\]]+)\\]", "gi"), function(e, t, r) {
                var i = t.toLowerCase();
                switch (i) {
                    case "fig.":
                        i = a("figure").toLowerCase();
                        break;
                    case "tbl.":
                        i = a("table").toLowerCase();
                        break;
                    case "lst.":
                        i = a("listing").toLowerCase()
                }
                var s = i + "_" + c(r.toLowerCase().trim()),
                    o = H[s];
                return o ? (o.used = !0, "<a " + l('href="#' + s + '"') + ">" + t + "&nbsp;" + o.number + n(r) + "</a>") : (console.log("Reference to undefined '" + i + " [" + r + "]'"), t + " ?")
            }), t = t.rp(/(?:<|(?!<)\b)(\w{3,6}:\/\/.+?)(?:$|>|(?=<)|(?=\s|\u00A0)(?!<))/g, function(e, t) {
                var r = "";
                return "." == t[t.length - 1] && (t = t.ss(0, t.length - 1), r = "."), "<a " + ("s" !== t[0] && "p" !== t[0] ? l('href="' + t + '" class="url"') : "") + ">" + t + "</a>" + r
            }), !s) {
            var W = /^\s*(?:<\/p><p>)?\s*<strong.*?>([^ \t\*].*?[^ \t\*])<\/strong>(?:<\/p>)?[ \t]*\n/.source,
                V = /([ {4,}\t][ \t]*\S.*\n)*/.source;
            t = t.rp(RegExp(W + V, "g"), function(t, r) {
                r = r.trim();
                var a = t.ss(t.indexOf("\n", t.indexOf("</strong>")));
                return a = a ? a.rp(/[ \t]*(\S.*?)\n/g, '<div class="subtitle"> $1 </div>\n') : "", e("title", o(r)) + n(window.location.href, "center") + '<div class="title"> ' + r + " </div>\n" + a + '<div class="afterTitles"></div>\n'
            })
        }
        if (t = t.rp(/^\s*<\/p>/, ""), !s) {
            var Z = h(t, l);
            t = Z[0];
            var G = Z[1];
            t = t.rp(RegExp("\\b(" + a("sec") + "\\.|" + a("section") + "|" + a("subsection") + ")\\s\\[(.+?)\\]", "gi"), function(e, t, r) {
                var n = G[r.toLowerCase().trim()];
                return n ? t + "  <a " + l('href="#toc' + n + '"') + ">" + n + "</a>" : t + " ?"
            })
        }
        for (; t.indexOf(E) + 1;) t = t.rp(B, u);
        return Object.keys(A).forEach(function(e) {
            A[e].used || console.log("Reference link '[" + e + "]' is defined but never used")
        }), Object.keys(H).forEach(function(e) {
            H[e].used || console.log("'" + H[e].source + "' is never referenced")
        }), '<span class="md">' + e("p", t) + "</span>"
    }

    function _(e) {
        if (Array.from) return Array.from(e);
        for (var t = [], r = 0; r < e.length; ++r) t[r] = e[r];
        return t
    }

    function w(e) {
        var t = e.split("\n");
        t.length > 0 && "" === t[t.length - 1] && t.pop();
        var r = 0;
        t.forEach(function(e) {
            r = ie(r, _(e).length)
        });
        var n = Array(r + 1).join(" "),
            a = "";
        return t.forEach(function(e) {
            a += e + n.ss(_(e).length) + "\n"
        }), a
    }

    function C(e) {
        var t = e.split("\n"),
            r = 1 / 0;
        if (t.forEach(function(e) {
                if ("" !== e.trim()) {
                    var t = e.match(/^([ \t]*)/);
                    t && (r = se(r, t[0].length))
                }
            }), 0 === r) return e;
        var n = "";
        return t.forEach(function(e) {
            n += e.ss(r) + "\n"
        }), n
    }

    function N(e) {
        var t = e.charCodeAt(0);
        return t >= 65 && t <= 90 || t >= 97 && t <= 122
    }

    function M(e, t) {
        function r(e) {
            return F.indexOf(e) + 1
        }

        function n(e) {
            return P.indexOf(e) !== -1
        }

        function a(e) {
            return r(e) || "." === e
        }

        function s(e) {
            return r(e) || "'" === e
        }

        function o(e) {
            return n(e) || "<" === e || h(e)
        }

        function c(e) {
            return n(e) || ">" === e || h(e)
        }

        function l(e) {
            return H.indexOf(e) + 1
        }

        function u(e) {
            return W.indexOf(e) + 1
        }

        function d(e) {
            return "-" === e || r(e) || f(e)
        }

        function p(e) {
            return m(e) || f(e) || h(e)
        }

        function m(e) {
            return "|" === e || r(e)
        }

        function g(e) {
            return "/" === e || r(e)
        }

        function b(e) {
            return "\\" === e || r(e)
        }

        function f(e) {
            return O.indexOf(e) + 1
        }

        function h(e) {
            return U.indexOf(e) + 1
        }

        function y(e) {
            return V.indexOf(e) + 1
        }

        function x(e, t) {
            return this instanceof x ? (void 0 === t && (void 0 === e ? e = t = 0 : e instanceof x ? (t = e.y, e = e.x) : console.error("Vec2 requires one Vec2 or (x, y) as an argument")), this.x = e, this.y = t, void Object.seal(this)) : new x(e, t)
        }

        function v(e) {
            var t = function(r, n) {
                return void 0 === n && (r instanceof x ? (n = r.y, r = r.x) : console.error("grid requires either a Vec2 or (x, y)")), r >= 0 && r < t.width && n >= 0 && n < t.height ? e[n * (t.width + 1) + r] : " "
            };
            return t._used = [], t.height = e.split("\n").length, "\n" === e[e.length - 1] && --t.height, e = _(e), t.width = e.indexOf("\n"), t.H = function(e, r) {
                void 0 === r && (e instanceof x ? (r = e.y, e = e.x) : console.error("grid requires either a Vec2 or (x, y)")), e >= 0 && e < t.width && r >= 0 && r < t.height && (t._used[r * (t.width + 1) + e] = !0)
            }, t.I = function(e, t) {
                return void 0 === t && (e instanceof x ? (t = e.y, e = e.x) : console.error("grid requires either a Vec2 or (x, y)")), this._used[t * (this.width + 1) + e] === !0
            }, t.J = function(e, r) {
                void 0 === r && (r = e.x, e = e.x);
                var n = t(e, r - 1),
                    i = t(e, r),
                    o = t(e, r + 1),
                    c = t(e + 1, r - 1),
                    l = t(e - 1, r - 1);
                return m(i) ? a(n) || "^" === n || m(n) || f(n) || s(o) || "v" === o || m(o) || f(o) || h(n) || h(o) || "_" === t(e, r - 1) || "_" === l || "_" === c || (a(l) || a(c)) && (s(t(e - 1, r + 1)) || s(t(e + 1, r + 1))) : a(i) || "^" === i ? m(o) || f(o) && "." !== i : s(i) || "v" === i ? m(n) || f(n) && "'" !== i : !!h(i) && (m(n) || m(o))
            }, t.K = function(e, r) {
                void 0 === r && (r = e.x, e = e.x);
                var a = t(e - 2, r),
                    i = t(e - 1, r),
                    s = t(e + 0, r),
                    l = t(e + 1, r),
                    u = t(e + 2, r);
                return d(s) || d(i) && f(s) ? d(i) ? d(l) || c(l) || d(a) || o(a) : o(i) ? d(l) : d(l) && (d(u) || c(u)) : "<" === s ? d(l) && d(u) : ">" === s ? d(i) && d(a) : !!n(s) && (d(i) && d(a) || d(l) && d(u))
            }, t.L = function(e, r) {
                void 0 === r && (r = e.x, e = e.x);
                var i = t(e, r),
                    o = t(e - 1, r - 1),
                    c = t(e + 1, r + 1);
                return "\\" === i ? b(c) || s(c) || h(c) || "v" === c || b(o) || a(o) || h(o) || "^" === o || "/" === t(e, r - 1) || "/" === t(e, r + 1) || "_" === c || "_" === o : "." === i ? "\\" === c : "'" === i ? "\\" === o : "^" === i ? "\\" === c : "v" === i ? "\\" === o : n(i) || h(i) || "|" === i ? b(o) || b(c) : void 0
            }, t.M = function(e, r) {
                void 0 === r && (r = e.x, e = e.x);
                var i = t(e, r),
                    o = t(e - 1, r + 1),
                    c = t(e + 1, r - 1);
                return "/" === i && ("\\" === t(e, r - 1) || "\\" === t(e, r + 1)) || (g(i) ? g(c) || a(c) || h(c) || "^" === c || "_" === c || g(o) || s(o) || h(o) || "v" === o || "_" === o : "." === i ? "/" === o : "'" === i ? "/" === c : "^" === i ? "/" === o : "v" === i ? "/" === c : !(!n(i) && !h(i) && "|" !== i) && (g(o) || g(c)))
            }, t.toString = function() {
                return e
            }, Object.freeze(t)
        }

        function C(e, t, r, n, a) {
            e instanceof x && t instanceof x || console.error("Path constructor requires at least two Vec2s"), this.A = e, this.B = t, r && (this.C = r, this.D = n ? n : r), this.dashed = a || !1, Object.freeze(this)
        }

        function M() {
            this.da = []
        }

        function k(e) {
            return function(t, r) {
                for (var n = 0; n < this.da.length; ++n)
                    if (e.call(this.da[n], t, r)) return !0
            }
        }

        function A() {
            this.fa = []
        }

        function E(e, t) {
            function r(t, r, n) {
                var a, i, s = ce(r.x - t.x),
                    o = ce(r.y - t.y);
                for (a = t.x, i = t.y; a !== r.x || i !== r.y; a += s, i += o)
                    if (e(a, i) === n) return !0;
                return e(a, i) === n
            }
            for (var i = 0; i < e.width; ++i)
                for (var o = 0; o < e.height; ++o)
                    if (e.J(i, o)) {
                        var c = x(i, o);
                        do e.H(i, o), ++o; while (e.J(i, o));
                        var l = x(i, o - 1),
                            u = e(c),
                            g = e(c.x, c.y - 1);
                        (!n(u) && ("-" === g || "_" === g || "_" === e(c.x - 1, c.y - 1) || "_" === e(c.x + 1, c.y - 1) || s(g)) || f(g)) && (c.y -= .5);
                        var b = e(l),
                            y = e(l.x, l.y + 1);
                        (!n(b) && ("-" === y || a(y)) || f(y) || "_" === e(l.x - 1, l.y) || "_" === e(l.x + 1, l.y)) && (l.y += .5), c.x === l.x && c.y === l.y || t.ea(new C(c, l))
                    } else "'" === e(i, o) && ("-" === e(i - 1, o) && "_" === e(i + 1, o - 1) && !p(e(i - 1, o - 1)) || "_" === e(i - 1, o - 1) && "-" === e(i + 1, o) && !p(e(i + 1, o - 1))) ? t.ea(new C(x(i, o - .5), x(i, o))) : "." === e(i, o) && ("_" === e(i - 1, o) && "-" === e(i + 1, o) && !p(e(i + 1, o + 1)) || "-" === e(i - 1, o) && "_" === e(i + 1, o) && !p(e(i - 1, o + 1))) && t.ea(new C(x(i, o), x(i, o + .5)));
            for (var o = 0; o < e.height; ++o)
                for (var i = 0; i < e.width; ++i)
                    if (e.K(i, o)) {
                        var c = x(i, o);
                        do e.H(i, o), ++i; while (e.K(i, o));
                        var l = x(i - 1, o);
                        !n(e(c.x - 1, c.y)) && (a(e(c)) && p(e(c.x - 1, c.y + 1)) || s(e(c)) && p(e(c.x - 1, c.y - 1))) && ++c.x, !n(e(l.x + 1, l.y)) && (a(e(l)) && p(e(l.x + 1, l.y + 1)) || s(e(l)) && p(e(l.x + 1, l.y - 1))) && --l.x, c.x === l.x && c.y === l.y || t.ea(new C(c, l))
                    } for (var v = -e.height; v < e.width; ++v)
                for (var i = v, o = 0; o < e.height; ++o, ++i)
                    if (e.L(i, o)) {
                        var c = x(i, o);
                        do ++i, ++o; while (e.L(i, o));
                        var l = x(i - 1, o - 1);
                        if (r(c, l, "\\")) {
                            for (var _ = c.x; _ <= l.x; ++_) e.H(_, c.y + (_ - c.x));
                            var w = e(c),
                                u = e(c.x, c.y - 1),
                                M = e(c.x - 1, c.y - 1);
                            "/" === u || "_" === M || "_" === u || !n(w) && (d(M) || m(M)) ? (c.x -= .5, c.y -= .5) : h(M) && (c.x -= .25, c.y -= .25);
                            var k = (e(l), e(l.x + 1, l.y + 1));
                            "/" === e(l.x, l.y + 1) || "_" === e(l.x + 1, l.y) || "_" === e(l.x - 1, l.y) || !n(e(l)) && (d(k) || m(k)) ? (l.x += .5, l.y += .5) : h(k) && (l.x += .25, l.y += .25), t.ea(new C(c, l))
                        }
                    } for (var v = -e.height; v < e.width; ++v)
                for (var i = v, o = e.height - 1; o >= 0; --o, ++i)
                    if (e.M(i, o)) {
                        var c = x(i, o);
                        do ++i, --o; while (e.M(i, o));
                        var l = x(i - 1, o + 1);
                        if (r(c, l, "/")) {
                            for (var _ = c.x; _ <= l.x; ++_) e.H(_, c.y - (_ - c.x));
                            var u = e(l.x, l.y - 1),
                                A = e(l.x + 1, l.y - 1);
                            e(l);
                            "\\" === u || "_" === u || "_" === A || !n(e(l)) && (d(A) || m(A)) ? (l.x += .5, l.y -= .5) : h(A) && (l.x += .25, l.y -= .25);
                            var E = e(c.x - 1, c.y + 1),
                                w = e(c);
                            "\\" === e(c.x, c.y + 1) || "_" === e(c.x - 1, c.y) || "_" === e(c.x + 1, c.y) || !n(e(c)) && (d(E) || m(E)) ? (c.x -= .5, c.y += .5) : h(E) && (c.x -= .25, c.y += .25), t.ea(new C(c, l))
                        }
                    } for (var o = 0; o < e.height; ++o)
                for (var i = 0; i < e.width; ++i) {
                    var S = e(i, o);
                    a(S) && (d(e(i - 1, o)) && m(e(i + 1, o + 1)) && (e.H(i - 1, o), e.H(i, o), e.H(i + 1, o + 1), t.ea(new C(x(i - 1, o), x(i + 1, o + 1), x(i + 1.1, o), x(i + 1, o + 1)))), d(e(i + 1, o)) && m(e(i - 1, o + 1)) && (e.H(i - 1, o + 1), e.H(i, o), e.H(i + 1, o), t.ea(new C(x(i + 1, o), x(i - 1, o + 1), x(i - 1.1, o), x(i - 1, o + 1))))), ")" !== S && !h(S) || "." !== e(i - 1, o - 1) || "'" !== e(i - 1, o + 1) || (e.H(i, o), e.H(i - 1, o - 1), e.H(i - 1, o + 1), t.ea(new C(x(i - 2, o - 1), x(i - 2, o + 1), x(i + .6, o - 1), x(i + .6, o + 1)))), "(" !== S && !h(S) || "." !== e(i + 1, o - 1) || "'" !== e(i + 1, o + 1) || (e.H(i, o), e.H(i + 1, o - 1), e.H(i + 1, o + 1), t.ea(new C(x(i + 2, o - 1), x(i + 2, o + 1), x(i - .6, o - 1), x(i - .6, o + 1)))), s(S) && (d(e(i - 1, o)) && m(e(i + 1, o - 1)) && (e.H(i - 1, o), e.H(i, o), e.H(i + 1, o - 1), t.ea(new C(x(i - 1, o), x(i + 1, o - 1), x(i + 1.1, o), x(i + 1, o - 1)))), d(e(i + 1, o)) && m(e(i - 1, o - 1)) && (e.H(i - 1, o - 1), e.H(i, o), e.H(i + 1, o), t.ea(new C(x(i + 1, o), x(i - 1, o - 1), x(i - 1.1, o), x(i - 1, o - 1)))))
                }
            for (var o = 0; o < e.height; ++o)
                for (var i = 0; i < e.width - 2; ++i) {
                    var T = e(i - 1, o);
                    if (!("_" !== e(i, o) || "_" !== e(i + 1, o) || N(e(i + 2, o)) && "_" !== T || N(T) && "_" !== e(i + 2, o))) {
                        var j = e(i - 2, o),
                            c = x(i - .5, o + .5);
                        "|" === T || "|" === e(i - 1, o + 1) || "." === T || "'" === e(i - 1, o + 1) ? (c.x -= .5, "." !== T || "-" !== j && "." !== j || "(" !== e(i - 2, o + 1) || (c.x -= .5)) : "/" === T && (c.x -= 1), "(" === T && "(" === j && "'" === e(i, o + 1) && "." === e(i, o - 1) && (c.x += .5), T = j = void 0;
                        do e.H(i, o), ++i; while ("_" === e(i, o));
                        var l = x(i - .5, o + .5),
                            S = e(i, o),
                            B = e(i + 1, o),
                            b = e(i, o + 1);
                        "|" === S || "|" === b || "." === S || "'" === b ? (l.x += .5, "." !== S || "-" !== B && "." !== B || ")" !== e(i + 1, o + 1) || (l.x += .5)) : "\\" === S && (l.x += 1), ")" === S && ")" === B && "'" === e(i - 1, o + 1) && "." === e(i - 1, o - 1) && (l.x += -.5), t.ea(new C(c, l))
                    }
                }
        }

        function S(e, t, r) {
            function n(e) {
                return " " === e || /[^a-zA-Z0-9]|[ov]/.test(e)
            }

            function a(e, t, r, a) {
                return (n(t) || h(t)) && (n(e) || h(e)) && n(a) && n(r)
            }
            for (var i = 0; i < e.width; ++i)
                for (var s = 0; s < e.height; ++s) {
                    var o = e(i, s),
                        c = s;
                    if (f(o)) t.Z(i, c - .5) && t.U(i, c + .5) && (r.ea(i, c, o), e.H(i, c));
                    else if (h(o)) {
                        var d = e(i, c - 1),
                            p = e(i, c + 1),
                            m = e(i - 1, c),
                            g = e(i + 1, c);
                        e(i - 2, c), e(i + 2, c);
                        (t.aa(i - 1, c) || t.$(i + 1, c) || t.Z(i, c - 1) || t.U(i, c + 1) || t.U(i, c) || t.Z(i, c) || a(d, p, m, g)) && (r.ea(i, c, o), e.H(i, c))
                    } else if (l(o)) r.ea(i, c, o), e.H(i, c);
                    else if (u(o)) r.ea(i, c, o), e.H(i, c);
                    else {
                        var b = 0;
                        ">" === o && (t.aa(i, c) || t.ca(i, c)) ? (h(e(i + 1, c)) && (b = -.5), r.ea(i + b, c, ">", 0), e.H(i, c)) : "<" === o && (t.$(i, c) || t.ca(i, c)) ? (h(e(i - 1, c)) && (b = .5), r.ea(i + b, c, ">", 180), e.H(i, c)) : "^" === o ? t.U(i, c - .5) ? (r.ea(i, c - .5, ">", 270), e.H(i, c)) : t.U(i, c) ? (r.ea(i, c, ">", 270), e.H(i, c)) : t.V(i + .5, c - .5) ? (r.ea(i + .5, c - .5, ">", 270 + I), e.H(i, c)) : t.V(i + .25, c - .25) ? (r.ea(i + .25, c - .25, ">", 270 + I), e.H(i, c)) : t.V(i, c) ? (r.ea(i, c, ">", 270 + I), e.H(i, c)) : t.X(i, c) ? (r.ea(i, c, o, 270 - I), e.H(i, c)) : t.X(i - .5, c - .5) ? (r.ea(i - .5, c - .5, o, 270 - I), e.H(i, c)) : t.X(i - .25, c - .25) ? (r.ea(i - .25, c - .25, o, 270 - I), e.H(i, c)) : t.ba(i, c) && (r.ea(i, c - .5, ">", 270), e.H(i, c)) : "v" === o && (t.Z(i, c + .5) ? (r.ea(i, c + .5, ">", 90), e.H(i, c)) : t.Z(i, c) ? (r.ea(i, c, ">", 90), e.H(i, c)) : t.W(i, c) ? (r.ea(i, c, ">", 90 + I), e.H(i, c)) : t.W(i - .5, c + .5) ? (r.ea(i - .5, c + .5, ">", 90 + I), e.H(i, c)) : t.W(i - .25, c + .25) ? (r.ea(i - .25, c + .25, ">", 90 + I), e.H(i, c)) : t.Y(i, c) ? (r.ea(i, c, ">", 90 - I), e.H(i, c)) : t.Y(i + .5, c + .5) ? (r.ea(i + .5, c + .5, ">", 90 - I), e.H(i, c)) : t.Y(i + .25, c + .25) ? (r.ea(i + .25, c + .25, ">", 90 - I), e.H(i, c)) : t.ba(i, c) && (r.ea(i, c + .5, ">", 90), e.H(i, c)))
                    }
                }
        }
        e = w(e);
        var T = "\ue004";
        e = e.rp(/([a-zA-Z]{2})o/g, "$1" + T), e = e.rp(/o([a-zA-Z]{2})/g, T + "$1"), e = e.rp(/([a-zA-Z\ue004])o([a-zA-Z\ue004])/g, "$1" + T + "$2");
        var j = 8,
            B = 2,
            I = 180 * Math.atan(1 / B) / Math.PI,
            R = 1e-6,
            q = ">v<^",
            U = "o*",
            O = "()",
            F = "+",
            P = F + ".'",
            H = "\u2591\u2592\u2593\u2594\u2589",
            W = "\u25e2\u25e3\u25e4\u25e5",
            V = q + U + O + H + W;
        x.prototype.toString = x.prototype.toSVG = function() {
            return "" + this.x * j + "," + this.y * j * B + " "
        };
        var Z = C.prototype;
        Z.N = function() {
            return this.B.x === this.A.x
        }, Z.O = function() {
            return this.B.y === this.A.y
        }, Z.P = function() {
            var e = this.B.x - this.A.x,
                t = this.B.y - this.A.y;
            return oe(t + e) < R
        }, Z.R = function() {
            var e = this.B.x - this.A.x,
                t = this.B.y - this.A.y;
            return oe(t - e) < R
        }, Z.S = function() {
            return void 0 !== this.C
        }, Z.T = function(e, t) {
            return void 0 === t && (t = e.y, e = e.x), this.A.x === e && this.A.y === t || this.B.x === e && this.B.y === t
        }, Z.U = function(e, t) {
            return void 0 === t && (t = e.y, e = e.x), this.N() && this.A.x === e && se(this.A.y, this.B.y) === t
        }, Z.V = function(e, t) {
            return !!this.P() && (void 0 === t && (t = e.y, e = e.x), this.A.y < this.B.y ? this.A.x === e && this.A.y === t : this.B.x === e && this.B.y === t)
        }, Z.W = function(e, t) {
            return !!this.P() && (void 0 === t && (t = e.y, e = e.x), this.B.y < this.A.y ? this.A.x === e && this.A.y === t : this.B.x === e && this.B.y === t)
        }, Z.X = function(e, t) {
            return !!this.R() && (void 0 === t && (t = e.y, e = e.x), this.A.y < this.B.y ? this.A.x === e && this.A.y === t : this.B.x === e && this.B.y === t)
        }, Z.Y = function(e, t) {
            return !!this.R() && (void 0 === t && (t = e.y, e = e.x), this.B.y < this.A.y ? this.A.x === e && this.A.y === t : this.B.x === e && this.B.y === t)
        }, Z.Z = function(e, t) {
            return void 0 === t && (t = e.y, e = e.x), this.N() && this.A.x === e && ie(this.A.y, this.B.y) === t
        }, Z.$ = function(e, t) {
            return void 0 === t && (t = e.y, e = e.x), this.O() && this.A.y === t && se(this.A.x, this.B.x) === e
        }, Z.aa = function(e, t) {
            return void 0 === t && (t = e.y, e = e.x), this.O() && this.A.y === t && ie(this.A.x, this.B.x) === e
        }, Z.ba = function(e, t) {
            return void 0 === t && (t = e.y, e = e.x), this.N() && this.A.x === e && se(this.A.y, this.B.y) <= t && ie(this.A.y, this.B.y) >= t
        }, Z.ca = function(e, t) {
            return void 0 === t && (t = e.y, e = e.x), this.O() && this.A.y === t && se(this.A.x, this.B.x) <= e && ie(this.A.x, this.B.x) >= e
        }, Z.toSVG = function() {
            var e = '<path d="M ' + this.A;
            return e += this.S() ? "C " + this.C + this.D + this.B : "L " + this.B, e += '" style="fill:none;"', this.dashed && (e += ' stroke-dasharray="3,6"'), e += "/>"
        };
        var G = M.prototype;
        G.ea = function(e) {
            this.da.push(e)
        }, G.U = k(Z.U), G.V = k(Z.V), G.X = k(Z.X), G.W = k(Z.W), G.Y = k(Z.Y), G.Z = k(Z.Z), G.$ = k(Z.$), G.aa = k(Z.aa), G.T = k(Z.T), G.ba = k(Z.ba), G.ca = k(Z.ca), G.toSVG = function() {
            for (var e = "", t = 0; t < this.da.length; ++t) e += this.da[t].toSVG() + "\n";
            return e
        };
        var J = A.prototype;
        J.ea = function(e, t, r, n) {
            void 0 === r && (r = t, t = e.y, e = e.x), y(r) || console.error("Illegal decoration character: " + r);
            var a = {
                C: x(e, t),
                type: r,
                angle: n || 0
            };
            h(r) ? this.fa.push(a) : this.fa.unshift(a)
        }, J.toSVG = function() {
            for (var e = "", t = 0; t < this.fa.length; ++t) {
                var r = this.fa[t],
                    n = r.C;
                if (f(r.type)) {
                    var a = ")" === r.type ? .75 : -.75,
                        i = x(n.x, n.y - .5),
                        s = x(n.x, n.y + .5),
                        o = x(n.x + a, n.y - .5),
                        c = x(n.x + a, n.y + .5);
                    e += '<path d="M ' + s + " C " + c + o + i + '" style="fill:none;"/>'
                } else if (h(r.type)) e += '<circle cx="' + n.x * j + '" cy="' + n.y * j * B + '" r="' + (j - z) + '" class="' + ("*" === r.type ? "closed" : "open") + 'dot"/>';
                else if (l(r.type)) {
                    var d = Math.round(63.75 * (3 - H.indexOf(r.type)));
                    e += '<rect x="' + (n.x - .5) * j + '" y="' + (n.y - .5) * j * B + '" width="' + j + '" height="' + j * B + '" stroke=none fill="rgb(' + d + "," + d + "," + d + ')"/>'
                } else if (u(r.type)) {
                    var p = W.indexOf(r.type),
                        m = .5 - (1 & p),
                        g = .5 - (p >> 1);
                    m *= ce(g);
                    var b = x(n.x + m, n.y - g),
                        i = x(n.x + m, n.y + g),
                        s = x(n.x - m, n.y + g);
                    e += '<polygon points="' + b + i + s + '" style="stroke:none"/>\n'
                } else {
                    var b = x(n.x + 1, n.y),
                        i = x(n.x - .5, n.y - .35),
                        s = x(n.x - .5, n.y + .35);
                    e += '<polygon points="' + b + i + s + '"  style="stroke:none" transform="rotate(' + r.angle + "," + n + ')"/>\n'
                }
            }
            return e
        };
        var K = v(e),
            Q = new M,
            X = new A;
        E(K, Q), S(K, Q, X);
        var Y = '<svg class="diagram" xmlns="http://www.w3.org/2000/svg" version="1.1" height="' + (K.height + 1) * j * B + '" width="' + (K.width + 1) * j + '"';
        if ("floatleft" === t ? Y += ' style="float:left;margin:15px 30px 15px 0;"' : "floatright" === t ? Y += ' style="float:right;margin:15px 0 15px 30px;"' : "center" === t && (Y += ' style="margin:0 auto 0 auto;"'), Y += '><g transform="translate(' + x(1, 1) + ')">\n', L) {
            Y += '<g style="opacity:0.1">\n';
            for (var ee = 0; ee < K.width; ++ee)
                for (var te = 0; te < K.height; ++te) Y += '<rect x="' + ((ee - .5) * j + 1) + '" + y="' + ((te - .5) * j * B + 2) + '" width="' + (j - 2) + '" height="' + (j * B - 2) + '" style="fill:', Y += K.I(ee, te) ? "red;" : " " === K(ee, te) ? "gray;opacity:0.05" : "blue;", Y += '"/>\n';
            Y += "</g>\n"
        }
        if (Y += Q.toSVG(), Y += X.toSVG(), !$) {
            Y += '<g transform="translate(0,0)">';
            for (var te = 0; te < K.height; ++te)
                for (var ee = 0; ee < K.width; ++ee) {
                    var re = K(ee, te);
                    /[\u2B22\u2B21]/.test(re) ? Y += '<text text-anchor="middle" x="' + ee * j + '" y="' + (4 + te * j * B) + '" style="font-size:20.5px">' + i(re) + "</text>" : " " === re || K.I(ee, te) || (Y += '<text text-anchor="middle" x="' + ee * j + '" y="' + (4 + te * j * B) + '">' + i(re) + "</text>")
                }
            Y += "</g>"
        }
        if (D) {
            Y += '<g transform="translate(2,2)">\n';
            for (var ee = 0; ee < K.width; ++ee)
                for (var te = 0; te < K.height; ++te) {
                    var re = K(ee, te);
                    " " !== re && (Y += '<text text-anchor="middle" x="' + ee * j + '" y="' + (4 + te * j * B) + '" style="fill:#F00;font-family:Menlo,monospace;font-size:12px;text-align:center">' + i(re) + "</text>")
                }
            Y += "</g>"
        }
        return Y += "</g></svg>", Y = Y.rp(RegExp(T, "g"), "o")
    }

    function k(e) {
        return e.search(/markdeep\S*?\.js$/i) !== -1
    }

    function A(e) {
        return Array.prototype.slice.call(e)
    }

    function E() {
        var e = document.createElement("script");
        e.type = "text/javascript", e.src = pe, document.getElementsByTagName("head")[0].appendChild(e)
    }

    function S(e) {
        return r("detectMath") && (e.search(/(?:\$\$[\s\S]+\$\$)|(?:\\begin{)/m) !== -1 || e.search(/\\\(.*\\\)/) !== -1)
    }

    function T() {
        parent.postMessage(_e + "=" + document.body.innerHTML, "*")
    }

    function j(e) {
        return e && e.ss(0, e.lastIndexOf("/") + 1)
    }
    var B = '<div class="markdeepFooter"><i>dasScript is powered by <a href="http://casual-effects.com/markdeep" style="color:#999">Markdeep</a> </i><div style="display:inline-block;font-size:13px;font-family:\'Helvetica\',serif;vertical-align:middle;transform:translate(-3px,-1px)rotate(135deg);">&#x2712;</div></div>',
        I = String.prototype;
    I.rp = I.replace, I.ss = I.substring, I.regexIndexOf = function(e, t) {
        var r = this.ss(t || 0).search(e);
        return r >= 0 ? r + (t || 0) : r
    };
    var L = !1,
        D = L,
        $ = D,
        z = 2,
        R = "*",
        q = Array(6).join(R);
    ! function(e) {
        var t = "object" == typeof window && window || "object" == typeof self && self;
        "undefined" != typeof exports ? e(exports) : t && (t.hljs = e({}), "function" == typeof define && define.amd && define([], function() {
            return t.hljs
        }))
    }(function(e) {
        function t(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function r(e) {
            return e.nodeName.toLowerCase()
        }

        function n(e, t) {
            var r = e && e.exec(t);
            return r && 0 === r.index
        }

        function a(e) {
            return k.test(e)
        }

        function i(e) {
            var t, r, n, i, s = e.className + " ";
            if (s += e.parentNode ? e.parentNode.className : "", r = A.exec(s)) return _(r[1]) ? r[1] : "no-highlight";
            for (s = s.split(/\s+/), t = 0, n = s.length; n > t; t++)
                if (i = s[t], a(i) || _(i)) return i
        }

        function s(e) {
            var t, r = {},
                n = Array.prototype.slice.call(arguments, 1);
            for (t in e) r[t] = e[t];
            return n.forEach(function(e) {
                for (t in e) r[t] = e[t]
            }), r
        }

        function o(e) {
            var t = [];
            return function e(n, a) {
                for (var i = n.firstChild; i; i = i.nextSibling) 3 === i.nodeType ? a += i.nodeValue.length : 1 === i.nodeType && (t.push({
                    event: "start",
                    offset: a,
                    node: i
                }), a = e(i, a), r(i).match(/br|hr|img|input/) || t.push({
                    event: "stop",
                    offset: a,
                    node: i
                }));
                return a
            }(e, 0), t
        }

        function c(e, n, a) {
            function i() {
                return e.length && n.length ? e[0].offset !== n[0].offset ? e[0].offset < n[0].offset ? e : n : "start" === n[0].event ? e : n : e.length ? e : n
            }

            function s(e) {
                function n(e) {
                    return " " + e.nodeName + '="' + t(e.value).replace('"', "&quot;") + '"'
                }
                u += "<" + r(e) + w.map.call(e.attributes, n).join("") + ">"
            }

            function o(e) {
                u += "</" + r(e) + ">"
            }

            function c(e) {
                ("start" === e.event ? s : o)(e.node)
            }
            for (var l = 0, u = "", d = []; e.length || n.length;) {
                var p = i();
                if (u += t(a.substring(l, p[0].offset)), l = p[0].offset, p === e) {
                    d.reverse().forEach(o);
                    do c(p.splice(0, 1)[0]), p = i(); while (p === e && p.length && p[0].offset === l);
                    d.reverse().forEach(s)
                } else "start" === p[0].event ? d.push(p[0].node) : d.pop(), c(p.splice(0, 1)[0])
            }
            return u + t(a.substr(l))
        }

        function l(e) {
            return e.v && !e.cached_variants && (e.cached_variants = e.v.map(function(t) {
                return s(e, {
                    v: null
                }, t)
            })), e.cached_variants || e.eW && [s(e)] || [e]
        }

        function u(e) {
            function t(e) {
                return e && e.source || e
            }

            function r(r, n) {
                return RegExp(t(r), "m" + (e.cI ? "i" : "") + (n ? "g" : ""))
            }

            function n(a, i) {
                if (!a.compiled) {
                    if (a.compiled = !0, a.k = a.k || a.bK) {
                        var s = {},
                            o = function(t, r) {
                                e.cI && (r = r.toLowerCase()), r.split(" ").forEach(function(e) {
                                    var r = e.split("|");
                                    s[r[0]] = [t, r[1] ? +r[1] : 1]
                                })
                            };
                        "string" == typeof a.k ? o("keyword", a.k) : C(a.k).forEach(function(e) {
                            o(e, a.k[e])
                        }), a.k = s
                    }
                    a.lR = r(a.l || /\w+/, !0), i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = r(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = r(a.e)), a.tE = t(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)), a.i && (a.iR = r(a.i)), null == a.r && (a.r = 1), a.c || (a.c = []), a.c = Array.prototype.concat.apply([], a.c.map(function(e) {
                        return l("self" === e ? a : e)
                    })), a.c.forEach(function(e) {
                        n(e, a)
                    }), a.starts && n(a.starts, i);
                    var c = a.c.map(function(e) {
                        return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                    }).concat([a.tE, a.i]).map(t).filter(Boolean);
                    a.t = c.length ? r(c.join("|"), !0) : {
                        exec: function() {
                            return null
                        }
                    }
                }
            }
            n(e)
        }

        function d(e, r, a, i) {
            function s(e, t) {
                var r, a;
                for (r = 0, a = t.c.length; a > r; r++)
                    if (n(t.c[r].bR, e)) return t.c[r]
            }

            function o(e, t) {
                if (n(e.eR, t)) {
                    for (; e.endsParent && e.parent;) e = e.parent;
                    return e
                }
                return e.eW ? o(e.parent, t) : void 0
            }

            function c(e, t) {
                return !a && n(t.iR, e)
            }

            function l(e, t) {
                var r = x.cI ? t[0].toLowerCase() : t[0];
                return e.k.hasOwnProperty(r) && e.k[r]
            }

            function m(e, t, r, n) {
                var a = n ? "" : T.classPrefix,
                    i = '<span class="' + a,
                    s = r ? "" : S;
                return i += e + '">', i + t + s
            }

            function g() {
                var e, r, n, a;
                if (!w.k) return t(k);
                for (a = "", r = 0, w.lR.lastIndex = 0, n = w.lR.exec(k); n;) a += t(k.substring(r, n.index)), e = l(w, n), e ? (A += e[1], a += m(e[0], t(n[0]))) : a += t(n[0]), r = w.lR.lastIndex, n = w.lR.exec(k);
                return a + t(k.substr(r))
            }

            function b() {
                var e = "string" == typeof w.sL;
                if (e && !N[w.sL]) return t(k);
                var r = e ? d(w.sL, k, !0, C[w.sL]) : p(k, w.sL.length ? w.sL : void 0);
                return w.r > 0 && (A += r.r), e && (C[w.sL] = r.top), m(r.language, r.value, !1, !0)
            }

            function f() {
                M += null != w.sL ? b() : g(), k = ""
            }

            function h(e) {
                M += e.cN ? m(e.cN, "", !0) : "", w = Object.create(e, {
                    parent: {
                        value: w
                    }
                })
            }

            function y(e, t) {
                if (k += e, null == t) return f(), 0;
                var r = s(t, w);
                if (r) return r.skip ? k += t : (r.eB && (k += t), f(), r.rB || r.eB || (k = t)), h(r, t), r.rB ? 0 : t.length;
                var n = o(w, t);
                if (n) {
                    var a = w;
                    a.skip ? k += t : (a.rE || a.eE || (k += t), f(), a.eE && (k = t));
                    do w.cN && (M += S), w.skip || (A += w.r), w = w.parent; while (w !== n.parent);
                    return n.starts && h(n.starts, ""), a.rE ? 0 : t.length
                }
                if (c(t, w)) throw Error('Illegal lexeme "' + t + '" for mode "' + (w.cN || "<unnamed>") + '"');
                return k += t, t.length || 1
            }
            var x = _(e);
            if (!x) throw Error('Unknown language: "' + e + '"');
            u(x);
            var v, w = i || x,
                C = {},
                M = "";
            for (v = w; v !== x; v = v.parent) v.cN && (M = m(v.cN, "", !0) + M);
            var k = "",
                A = 0;
            try {
                for (var E, j, B = 0; w.t.lastIndex = B, E = w.t.exec(r), E;) j = y(r.substring(B, E.index), E[0]), B = E.index + j;
                for (y(r.substr(B)), v = w; v.parent; v = v.parent) v.cN && (M += S);
                return {
                    r: A,
                    value: M,
                    language: e,
                    top: w
                }
            } catch (e) {
                if (e.message && -1 !== e.message.indexOf("Illegal")) return {
                    r: 0,
                    value: t(r)
                };
                throw e
            }
        }

        function p(e, r) {
            r = r || T.languages || C(N);
            var n = {
                    r: 0,
                    value: t(e)
                },
                a = n;
            return r.filter(_).forEach(function(t) {
                var r = d(t, e, !1);
                r.language = t, r.r > a.r && (a = r), r.r > n.r && (a = n, n = r)
            }), a.language && (n.second_best = a), n
        }

        function m(e) {
            return T.tabReplace || T.useBR ? e.replace(E, function(e, t) {
                return T.useBR && "\n" === e ? "<br>" : T.tabReplace ? t.replace(/\t/g, T.tabReplace) : ""
            }) : e
        }

        function g(e, t, r) {
            var n = t ? M[t] : r,
                a = [e.trim()];
            return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(n) && a.push(n), a.join(" ").trim()
        }

        function b(e) {
            var t, r, n, s, l, u = i(e);
            a(u) || (T.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e, l = t.textContent, n = u ? d(u, l, !0) : p(l), r = o(t), r.length && (s = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), s.innerHTML = n.value, n.value = c(r, o(s), l)), n.value = m(n.value), e.innerHTML = n.value, e.className = g(e.className, u, n.language), e.result = {
                language: n.language,
                re: n.r
            }, n.second_best && (e.second_best = {
                language: n.second_best.language,
                re: n.second_best.r
            }))
        }

        function f(e) {
            T = s(T, e)
        }

        function h() {
            if (!h.called) {
                h.called = !0;
                var e = document.querySelectorAll("pre code");
                w.forEach.call(e, b)
            }
        }

        function y() {
            addEventListener("DOMContentLoaded", h, !1), addEventListener("load", h, !1)
        }

        function x(t, r) {
            var n = N[t] = r(e);
            n.aliases && n.aliases.forEach(function(e) {
                M[e] = t
            })
        }

        function v() {
            return C(N)
        }

        function _(e) {
            return e = (e || "").toLowerCase(), N[e] || N[M[e]]
        }
        var w = [],
            C = Object.keys,
            N = {},
            M = {},
            k = /^(no-?highlight|plain|text)$/i,
            A = /\blang(?:uage)?-([\w-]+)\b/i,
            E = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
            S = "</span>",
            T = {
                classPrefix: "hljs-",
                tabReplace: null,
                useBR: !1,
                languages: void 0
            };
        return e.highlight = d, e.highlightAuto = p, e.fixMarkup = m, e.highlightBlock = b, e.configure = f, e.initHighlighting = h, e.initHighlightingOnLoad = y, e.g = x, e.h = v, e.j = _, e.inherit = s, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
            b: "\\\\[\\s\\S]",
            r: 0
        }, e.ASM = {
            cN: "string",
            b: "'",
            e: "'",
            i: "\\n",
            c: [e.BE]
        }, e.QSM = {
            cN: "string",
            b: '"',
            e: '"',
            i: "\\n",
            c: [e.BE]
        }, e.PWM = {
            b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        }, e.C = function(t, r, n) {
            var a = e.inherit({
                cN: "comment",
                b: t,
                e: r,
                c: []
            }, n || {});
            return a.c.push(e.PWM), a.c.push({
                cN: "doctag",
                b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                r: 0
            }), a
        }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
            cN: "number",
            b: e.NR,
            r: 0
        }, e.CNM = {
            cN: "number",
            b: e.CNR,
            r: 0
        }, e.BNM = {
            cN: "number",
            b: e.BNR,
            r: 0
        }, e.CSSNM = {
            cN: "number",
            b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            r: 0
        }, e.RM = {
            cN: "regexp",
            b: /\//,
            e: /\/[gimuy]*/,
            i: /\n/,
            c: [e.BE, {
                b: /\[/,
                e: /\]/,
                r: 0,
                c: [e.BE]
            }]
        }, e.TM = {
            cN: "title",
            b: e.IR,
            r: 0
        }, e.UTM = {
            cN: "title",
            b: e.UIR,
            r: 0
        }, e.METHOD_GUARD = {
            b: "\\.\\s*" + e.UIR,
            r: 0
        }, e
    }), hljs.g("xml", function(e) {
        var t = "[A-Za-z0-9\\._:-]+",
            r = {
                eW: !0,
                i: /</,
                r: 0,
                c: [{
                    cN: "attr",
                    b: t,
                    r: 0
                }, {
                    b: /=\s*/,
                    r: 0,
                    c: [{
                        cN: "string",
                        endsParent: !0,
                        v: [{
                            b: /"/,
                            e: /"/
                        }, {
                            b: /'/,
                            e: /'/
                        }, {
                            b: /[^\s"'=<>`]+/
                        }]
                    }]
                }]
            };
        return {
            aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
            cI: !0,
            c: [{
                cN: "meta",
                b: "<!DOCTYPE",
                e: ">",
                r: 10,
                c: [{
                    b: "\\[",
                    e: "\\]"
                }]
            }, e.C("<!--", "-->", {
                r: 10
            }), {
                b: "<\\!\\[CDATA\\[",
                e: "\\]\\]>",
                r: 10
            }, {
                b: /<\?(php)?/,
                e: /\?>/,
                sL: "php",
                c: [{
                    b: "/\\*",
                    e: "\\*/",
                    skip: !0
                }]
            }, {
                cN: "tag",
                b: "<style(?=\\s|>|$)",
                e: ">",
                k: {
                    name: "style"
                },
                c: [r],
                starts: {
                    e: "</style>",
                    rE: !0,
                    sL: ["css", "xml"]
                }
            }, {
                cN: "tag",
                b: "<script(?=\\s|>|$)",
                e: ">",
                k: {
                    name: "script"
                },
                c: [r],
                starts: {
                    e: "</script>",
                    rE: !0,
                    sL: ["actionscript", "javascript", "handlebars", "xml"]
                }
            }, {
                cN: "meta",
                v: [{
                    b: /<\?xml/,
                    e: /\?>/,
                    r: 10
                }, {
                    b: /<\?\w+/,
                    e: /\?>/
                }]
            }, {
                cN: "tag",
                b: "</?",
                e: "/?>",
                c: [{
                    cN: "name",
                    b: /[^\/><\s]+/,
                    r: 0
                }, r]
            }]
        }
    }), hljs.g("markdown", function(e) {
        return {
            aliases: ["md", "mkdown", "mkd"],
            c: [{
                cN: "section",
                v: [{
                    b: "^#{1,6}",
                    e: "$"
                }, {
                    b: "^.+?\\n[=-]{2,}$"
                }]
            }, {
                b: "<",
                e: ">",
                sL: "xml",
                r: 0
            }, {
                cN: "bullet",
                b: "^([*+-]|(\\d+\\.))\\s+"
            }, {
                cN: "strong",
                b: "[*_]{2}.+?[*_]{2}"
            }, {
                cN: "emphasis",
                v: [{
                    b: "\\*.+?\\*"
                }, {
                    b: "_.+?_",
                    r: 0
                }]
            }, {
                cN: "quote",
                b: "^>\\s+",
                e: "$"
            }, {
                cN: "code",
                v: [{
                    b: "^```w*s*$",
                    e: "^```s*$"
                }, {
                    b: "`.+?`"
                }, {
                    b: "^( {4}|\t)",
                    e: "$",
                    r: 0
                }]
            }, {
                b: "^[-\\*]{3,}",
                e: "$"
            }, {
                b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
                rB: !0,
                c: [{
                    cN: "string",
                    b: "\\[",
                    e: "\\]",
                    eB: !0,
                    rE: !0,
                    r: 0
                }, {
                    cN: "link",
                    b: "\\]\\(",
                    e: "\\)",
                    eB: !0,
                    eE: !0
                }, {
                    cN: "symbol",
                    b: "\\]\\[",
                    e: "\\]",
                    eB: !0,
                    eE: !0
                }],
                r: 10
            }, {
                b: /^\[[^\n]+\]:/,
                rB: !0,
                c: [{
                    cN: "symbol",
                    b: /\[/,
                    e: /\]/,
                    eB: !0,
                    eE: !0
                }, {
                    cN: "link",
                    b: /:\s*/,
                    e: /$/,
                    eB: !0
                }]
            }]
        }
    }), hljs.g("javascript", function(e) {
        var t = "[A-Za-z$_][0-9A-Za-z$_]*",
            r = {
                keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
                literal: "true false null undefined NaN Infinity",
                built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
            },
            n = {
                cN: "number",
                v: [{
                    b: "\\b(0[bB][01]+)"
                }, {
                    b: "\\b(0[oO][0-7]+)"
                }, {
                    b: e.CNR
                }],
                r: 0
            },
            a = {
                cN: "subst",
                b: "\\$\\{",
                e: "\\}",
                k: r,
                c: []
            },
            i = {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE, a]
            };
        a.c = [e.ASM, e.QSM, i, n, e.RM];
        var s = a.c.concat([e.CBCM, e.CLCM]);
        return {
            aliases: ["js", "jsx"],
            k: r,
            c: [{
                cN: "meta",
                r: 10,
                b: /^\s*['"]use (strict|asm)['"]/
            }, {
                cN: "meta",
                b: /^#!/,
                e: /$/
            }, e.ASM, e.QSM, i, e.CLCM, e.CBCM, n, {
                b: /[{,]\s*/,
                r: 0,
                c: [{
                    b: t + "\\s*:",
                    rB: !0,
                    r: 0,
                    c: [{
                        cN: "attr",
                        b: t,
                        r: 0
                    }]
                }]
            }, {
                b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
                k: "return throw case",
                c: [e.CLCM, e.CBCM, e.RM, {
                    cN: "function",
                    b: "(\\(.*?\\)|" + t + ")\\s*=>",
                    rB: !0,
                    e: "\\s*=>",
                    c: [{
                        cN: "params",
                        v: [{
                            b: t
                        }, {
                            b: /\(\s*\)/
                        }, {
                            b: /\(/,
                            e: /\)/,
                            eB: !0,
                            eE: !0,
                            k: r,
                            c: s
                        }]
                    }]
                }, {
                    b: /</,
                    e: /(\/\w+|\w+\/)>/,
                    sL: "xml",
                    c: [{
                        b: /<\w+\s*\/>/,
                        skip: !0
                    }, {
                        b: /<\w+/,
                        e: /(\/\w+|\w+\/)>/,
                        skip: !0,
                        c: [{
                            b: /<\w+\s*\/>/,
                            skip: !0
                        }, "self"]
                    }]
                }],
                r: 0
            }, {
                cN: "function",
                bK: "function",
                e: /\{/,
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: t
                }), {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    c: s
                }],
                i: /\[|%/
            }, {
                b: /\$[(.]/
            }, e.METHOD_GUARD, {
                cN: "class",
                bK: "class",
                e: /[{;=]/,
                eE: !0,
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends"
                }, e.UTM]
            }, {
                bK: "constructor",
                e: /\{/,
                eE: !0
            }],
            i: /#(?!!)/
        }
    }), hljs.g("lisp", function(e) {
        var t = "[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*",
            r = "\\|[^]*?\\|",
            n = "(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?",
            a = {
                cN: "meta",
                b: "^#!",
                e: "$"
            },
            i = {
                cN: "literal",
                b: "\\b(t{1}|nil)\\b"
            },
            s = {
                cN: "number",
                v: [{
                    b: n,
                    r: 0
                }, {
                    b: "#(b|B)[0-1]+(/[0-1]+)?"
                }, {
                    b: "#(o|O)[0-7]+(/[0-7]+)?"
                }, {
                    b: "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"
                }, {
                    b: "#(c|C)\\(" + n + " +" + n,
                    e: "\\)"
                }]
            },
            o = e.inherit(e.QSM, {
                i: null
            }),
            c = e.C(";", "$", {
                r: 0
            }),
            l = {
                b: "\\*",
                e: "\\*"
            },
            u = {
                cN: "symbol",
                b: "[:&]" + t
            },
            d = {
                b: t,
                r: 0
            },
            p = {
                b: r
            },
            m = {
                b: "\\(",
                e: "\\)",
                c: ["self", i, o, s, d]
            },
            g = {
                c: [s, o, l, u, m, d],
                v: [{
                    b: "['`]\\(",
                    e: "\\)"
                }, {
                    b: "\\(quote ",
                    e: "\\)",
                    k: {
                        name: "quote"
                    }
                }, {
                    b: "'" + r
                }]
            },
            b = {
                v: [{
                    b: "'" + t
                }, {
                    b: "#'" + t + "(::" + t + ")*"
                }]
            },
            f = {
                b: "\\(\\s*",
                e: "\\)"
            },
            h = {
                eW: !0,
                r: 0
            };
        return f.c = [{
            cN: "name",
            v: [{
                b: t
            }, {
                b: r
            }]
        }, h], h.c = [g, b, f, i, s, o, c, l, u, p, d], {
            i: /\S/,
            c: [s, a, i, o, c, g, b, f, d]
        }
    }), hljs.g("r", function(e) {
        var t = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
        return {
            c: [e.HCM, {
                b: t,
                l: t,
                k: {
                    keyword: "function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",
                    literal: "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"
                },
                r: 0
            }, {
                cN: "number",
                b: "0[xX][0-9a-fA-F]+[Li]?\\b",
                r: 0
            }, {
                cN: "number",
                b: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
                r: 0
            }, {
                cN: "number",
                b: "\\d+\\.(?!\\d)(?:i\\b)?",
                r: 0
            }, {
                cN: "number",
                b: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
                r: 0
            }, {
                cN: "number",
                b: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
                r: 0
            }, {
                b: "`",
                e: "`",
                r: 0
            }, {
                cN: "string",
                c: [e.BE],
                v: [{
                    b: '"',
                    e: '"'
                }, {
                    b: "'",
                    e: "'"
                }]
            }]
        }
    }), hljs.g("go", function(e) {
        var t = {
            keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
            literal: "true false iota nil",
            built_in: "append cap close complex copy imag len make new panic print println real recover delete"
        };
        return {
            aliases: ["golang"],
            k: t,
            i: "</",
            c: [e.CLCM, e.CBCM, {
                cN: "string",
                v: [e.QSM, {
                    b: "'",
                    e: "[^\\\\]'"
                }, {
                    b: "`",
                    e: "`"
                }]
            }, {
                cN: "number",
                v: [{
                    b: e.CNR + "[dflsi]",
                    r: 1
                }, e.CNM]
            }, {
                b: /:=/
            }, {
                cN: "function",
                bK: "func",
                e: /\s*\{/,
                eE: !0,
                c: [e.TM, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: t,
                    i: /["']/
                }]
            }]
        }
    }), hljs.g("lua", function(e) {
        var t = "\\[=*\\[",
            r = "\\]=*\\]",
            n = {
                b: t,
                e: r,
                c: ["self"]
            },
            a = [e.C("--(?!" + t + ")", "$"), e.C("--" + t, r, {
                c: [n],
                r: 10
            })];
        return {
            l: e.UIR,
            k: {
                literal: "true false nil",
                keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
                built_in: "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstringmodule next pairs pcall print rawequal rawget rawset require select setfenvsetmetatable tonumber tostring type unpack xpcall arg selfcoroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
            },
            c: a.concat([{
                cN: "function",
                bK: "function",
                e: "\\)",
                c: [e.inherit(e.TM, {
                    b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
                }), {
                    cN: "params",
                    b: "\\(",
                    eW: !0,
                    c: a
                }].concat(a)
            }, e.CNM, e.ASM, e.QSM, {
                cN: "string",
                b: t,
                e: r,
                c: [n],
                r: 5
            }])
        }
    }), hljs.g("haskell", function(e) {
        var t = {
                v: [e.C("--", "$"), e.C("{-", "-}", {
                    c: ["self"]
                })]
            },
            r = {
                cN: "meta",
                b: "{-#",
                e: "#-}"
            },
            n = {
                cN: "meta",
                b: "^#",
                e: "$"
            },
            a = {
                cN: "type",
                b: "\\b[A-Z][\\w']*",
                r: 0
            },
            i = {
                b: "\\(",
                e: "\\)",
                i: '"',
                c: [r, n, {
                    cN: "type",
                    b: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
                }, e.inherit(e.TM, {
                    b: "[_a-z][\\w']*"
                }), t]
            },
            s = {
                b: "{",
                e: "}",
                c: i.c
            };
        return {
            aliases: ["hs"],
            k: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
            c: [{
                bK: "module",
                e: "where",
                k: "module where",
                c: [i, t],
                i: "\\W\\.|;"
            }, {
                b: "\\bimport\\b",
                e: "$",
                k: "import qualified as hiding",
                c: [i, t],
                i: "\\W\\.|;"
            }, {
                cN: "class",
                b: "^(\\s*)?(class|instance)\\b",
                e: "where",
                k: "class family instance where",
                c: [a, i, t]
            }, {
                cN: "class",
                b: "\\b(data|(new)?type)\\b",
                e: "$",
                k: "data family type newtype deriving",
                c: [r, a, i, s, t]
            }, {
                bK: "default",
                e: "$",
                c: [a, i, t]
            }, {
                bK: "infix infixl infixr",
                e: "$",
                c: [e.CNM, t]
            }, {
                b: "\\bforeign\\b",
                e: "$",
                k: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
                c: [a, e.QSM, t]
            }, {
                cN: "meta",
                b: "#!\\/usr\\/bin\\/env runhaskell",
                e: "$"
            }, r, n, e.QSM, e.CNM, a, e.inherit(e.TM, {
                b: "^[_a-z][\\w']*"
            }), t, {
                b: "->|<-"
            }]
        }
    }), hljs.g("bash", function(e) {
        var t = {
                cN: "variable",
                v: [{
                    b: /\$[\w\d#@][\w\d_]*/
                }, {
                    b: /\$\{(.*?)}/
                }]
            },
            r = {
                cN: "string",
                b: /"/,
                e: /"/,
                c: [e.BE, t, {
                    cN: "variable",
                    b: /\$\(/,
                    e: /\)/,
                    c: [e.BE]
                }]
            },
            n = {
                cN: "string",
                b: /'/,
                e: /'/
            };
        return {
            aliases: ["sh", "zsh"],
            l: /\b-?[a-z\._]+\b/,
            k: {
                keyword: "if then else elif fi for while in do done case esac function",
                literal: "true false",
                built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
                _: "-ne -eq -lt -gt -f -d -e -s -l -a"
            },
            c: [{
                cN: "meta",
                b: /^#![^\n]+sh\s*$/,
                r: 10
            }, {
                cN: "function",
                b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                rB: !0,
                c: [e.inherit(e.TM, {
                    b: /\w[\w\d_]*/
                })],
                r: 0
            }, e.HCM, r, n, t]
        }
    }), hljs.g("java", function(e) {
        var t = "[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",
            r = t + "(<" + t + "(\\s*,\\s*" + t + ")*>)?",
            n = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
            a = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
            i = {
                cN: "number",
                b: a,
                r: 0
            };
        return {
            aliases: ["jsp"],
            k: n,
            i: /<\/|#/,
            c: [e.C("/\\*\\*", "\\*/", {
                r: 0,
                c: [{
                    b: /\w+@/,
                    r: 0
                }, {
                    cN: "doctag",
                    b: "@[A-Za-z]+"
                }]
            }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
                cN: "class",
                bK: "class interface",
                e: /[{;=]/,
                eE: !0,
                k: "class interface",
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends implements"
                }, e.UTM]
            }, {
                bK: "new throw return else",
                r: 0
            }, {
                cN: "function",
                b: "(" + r + "\\s+)+" + e.UIR + "\\s*\\(",
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: n,
                c: [{
                    b: e.UIR + "\\s*\\(",
                    rB: !0,
                    r: 0,
                    c: [e.UTM]
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: n,
                    r: 0,
                    c: [e.ASM, e.QSM, e.CNM, e.CBCM]
                }, e.CLCM, e.CBCM]
            }, i, {
                cN: "meta",
                b: "@[A-Za-z]+"
            }]
        }
    }), hljs.g("perl", function(e) {
        var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
            r = {
                cN: "subst",
                b: "[$@]\\{",
                e: "\\}",
                k: t
            },
            n = {
                b: "->{",
                e: "}"
            },
            a = {
                v: [{
                    b: /\$\d/
                }, {
                    b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
                }, {
                    b: /[\$%@][^\s\w{]/,
                    r: 0
                }]
            },
            i = [e.BE, r, a],
            s = [a, e.HCM, e.C("^\\=\\w", "\\=cut", {
                eW: !0
            }), n, {
                cN: "string",
                c: i,
                v: [{
                    b: "q[qwxr]?\\s*\\(",
                    e: "\\)",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\[",
                    e: "\\]",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\{",
                    e: "\\}",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\|",
                    e: "\\|",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\<",
                    e: "\\>",
                    r: 5
                }, {
                    b: "qw\\s+q",
                    e: "q",
                    r: 5
                }, {
                    b: "'",
                    e: "'",
                    c: [e.BE]
                }, {
                    b: '"',
                    e: '"'
                }, {
                    b: "`",
                    e: "`",
                    c: [e.BE]
                }, {
                    b: "{\\w+}",
                    c: [],
                    r: 0
                }, {
                    b: "-?\\w+\\s*\\=\\>",
                    c: [],
                    r: 0
                }]
            }, {
                cN: "number",
                b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                r: 0
            }, {
                b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
                k: "split return print reverse grep",
                r: 0,
                c: [e.HCM, {
                    cN: "regexp",
                    b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
                    r: 10
                }, {
                    cN: "regexp",
                    b: "(m|qr)?/",
                    e: "/[a-z]*",
                    c: [e.BE],
                    r: 0
                }]
            }, {
                cN: "function",
                bK: "sub",
                e: "(\\s*\\(.*?\\))?[;{]",
                eE: !0,
                r: 5,
                c: [e.TM]
            }, {
                b: "-\\w\\b",
                r: 0
            }, {
                b: "^__DATA__$",
                e: "^__END__$",
                sL: "mojolicious",
                c: [{
                    b: "^@@.*",
                    e: "$",
                    cN: "comment"
                }]
            }];
        return r.c = s, n.c = s, {
            aliases: ["pl", "pm"],
            l: /[\w\.]+/,
            k: t,
            c: s
        }
    }), hljs.g("coffeescript", function(e) {
        var t = {
                keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",
                literal: "true false null undefined yes no on off",
                built_in: "npm require console print module global window document"
            },
            r = "[A-Za-z$_][0-9A-Za-z$_]*",
            n = {
                cN: "subst",
                b: /#\{/,
                e: /}/,
                k: t
            },
            a = [e.BNM, e.inherit(e.CNM, {
                starts: {
                    e: "(\\s*/)?",
                    r: 0
                }
            }), {
                cN: "string",
                v: [{
                    b: /'''/,
                    e: /'''/,
                    c: [e.BE]
                }, {
                    b: /'/,
                    e: /'/,
                    c: [e.BE]
                }, {
                    b: /"""/,
                    e: /"""/,
                    c: [e.BE, n]
                }, {
                    b: /"/,
                    e: /"/,
                    c: [e.BE, n]
                }]
            }, {
                cN: "regexp",
                v: [{
                    b: "///",
                    e: "///",
                    c: [n, e.HCM]
                }, {
                    b: "//[gim]*",
                    r: 0
                }, {
                    b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
                }]
            }, {
                b: "@" + r
            }, {
                sL: "javascript",
                eB: !0,
                eE: !0,
                v: [{
                    b: "```",
                    e: "```"
                }, {
                    b: "`",
                    e: "`"
                }]
            }];
        n.c = a;
        var i = e.inherit(e.TM, {
                b: r
            }),
            s = "(\\(.*\\))?\\s*\\B[-=]>",
            o = {
                cN: "params",
                b: "\\([^\\(]",
                rB: !0,
                c: [{
                    b: /\(/,
                    e: /\)/,
                    k: t,
                    c: ["self"].concat(a)
                }]
            };
        return {
            aliases: ["coffee", "cson", "iced"],
            k: t,
            i: /\/\*/,
            c: a.concat([e.C("###", "###"), e.HCM, {
                cN: "function",
                b: "^\\s*" + r + "\\s*=\\s*" + s,
                e: "[-=]>",
                rB: !0,
                c: [i, o]
            }, {
                b: /[:\(,=]\s*/,
                r: 0,
                c: [{
                    cN: "function",
                    b: s,
                    e: "[-=]>",
                    rB: !0,
                    c: [o]
                }]
            }, {
                cN: "class",
                bK: "class",
                e: "$",
                i: /[:="\[\]]/,
                c: [{
                    bK: "extends",
                    eW: !0,
                    i: /[:="\[\]]/,
                    c: [i]
                }, i]
            }, {
                b: r + ":",
                e: ":",
                rB: !0,
                rE: !0,
                r: 0
            }])
        }
    }), hljs.g("kotlin", function(e) {
        var t = {
                keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit initinterface annotation data sealed internal infix operator out by constructor super trait volatile transient native default",
                built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
                literal: "true false null"
            },
            r = {
                cN: "keyword",
                b: /\b(break|continue|return|this)\b/,
                starts: {
                    c: [{
                        cN: "symbol",
                        b: /@\w+/
                    }]
                }
            },
            n = {
                cN: "symbol",
                b: e.UIR + "@"
            },
            a = {
                cN: "subst",
                b: "\\${",
                e: "}",
                c: [e.ASM, e.CNM]
            },
            i = {
                cN: "variable",
                b: "\\$" + e.UIR
            },
            s = {
                cN: "string",
                v: [{
                    b: '"""',
                    e: '"""',
                    c: [i, a]
                }, {
                    b: "'",
                    e: "'",
                    i: /\n/,
                    c: [e.BE]
                }, {
                    b: '"',
                    e: '"',
                    i: /\n/,
                    c: [e.BE, i, a]
                }]
            },
            o = {
                cN: "meta",
                b: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UIR + ")?"
            },
            c = {
                cN: "meta",
                b: "@" + e.UIR,
                c: [{
                    b: /\(/,
                    e: /\)/,
                    c: [e.inherit(s, {
                        cN: "meta-string"
                    })]
                }]
            };
        return {
            k: t,
            c: [e.C("/\\*\\*", "\\*/", {
                r: 0,
                c: [{
                    cN: "doctag",
                    b: "@[A-Za-z]+"
                }]
            }), e.CLCM, e.CBCM, r, n, o, c, {
                cN: "function",
                bK: "fun",
                e: "[(]|$",
                rB: !0,
                eE: !0,
                k: t,
                i: /fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,
                r: 5,
                c: [{
                    b: e.UIR + "\\s*\\(",
                    rB: !0,
                    r: 0,
                    c: [e.UTM]
                }, {
                    cN: "type",
                    b: /</,
                    e: />/,
                    k: "reified",
                    r: 0
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    endsParent: !0,
                    k: t,
                    r: 0,
                    c: [{
                        b: /:/,
                        e: /[=,\/]/,
                        eW: !0,
                        c: [{
                            cN: "type",
                            b: e.UIR
                        }, e.CLCM, e.CBCM],
                        r: 0
                    }, e.CLCM, e.CBCM, o, c, s, e.CNM]
                }, e.CBCM]
            }, {
                cN: "class",
                bK: "class interface trait",
                e: /[:\{(]|$/,
                eE: !0,
                i: "extends implements",
                c: [{
                    bK: "public protected internal private constructor"
                }, e.UTM, {
                    cN: "type",
                    b: /</,
                    e: />/,
                    eB: !0,
                    eE: !0,
                    r: 0
                }, {
                    cN: "type",
                    b: /[,:]\s*/,
                    e: /[<\(,]|$/,
                    eB: !0,
                    rE: !0
                }, o, c]
            }, s, {
                cN: "meta",
                b: "^#!/usr/bin/env",
                e: "$",
                i: "\n"
            }, e.CNM]
        }
    }), hljs.g("ruby", function(e) {
        var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
            r = {
                keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
                literal: "true false nil"
            },
            n = {
                cN: "doctag",
                b: "@[A-Za-z]+"
            },
            a = {
                b: "#<",
                e: ">"
            },
            i = [e.C("#", "$", {
                c: [n]
            }), e.C("^\\=begin", "^\\=end", {
                c: [n],
                r: 10
            }), e.C("^__END__", "\\n$")],
            s = {
                cN: "subst",
                b: "#\\{",
                e: "}",
                k: r
            },
            o = {
                cN: "string",
                c: [e.BE, s],
                v: [{
                    b: /'/,
                    e: /'/
                }, {
                    b: /"/,
                    e: /"/
                }, {
                    b: /`/,
                    e: /`/
                }, {
                    b: "%[qQwWx]?\\(",
                    e: "\\)"
                }, {
                    b: "%[qQwWx]?\\[",
                    e: "\\]"
                }, {
                    b: "%[qQwWx]?{",
                    e: "}"
                }, {
                    b: "%[qQwWx]?<",
                    e: ">"
                }, {
                    b: "%[qQwWx]?/",
                    e: "/"
                }, {
                    b: "%[qQwWx]?%",
                    e: "%"
                }, {
                    b: "%[qQwWx]?-",
                    e: "-"
                }, {
                    b: "%[qQwWx]?\\|",
                    e: "\\|"
                }, {
                    b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
                }, {
                    b: /<<(-?)\w+$/,
                    e: /^\s*\w+$/
                }]
            },
            c = {
                cN: "params",
                b: "\\(",
                e: "\\)",
                endsParent: !0,
                k: r
            },
            l = [o, a, {
                cN: "class",
                bK: "class module",
                e: "$|;",
                i: /=/,
                c: [e.inherit(e.TM, {
                    b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
                }), {
                    b: "<\\s*",
                    c: [{
                        b: "(" + e.IR + "::)?" + e.IR
                    }]
                }].concat(i)
            }, {
                cN: "function",
                bK: "def",
                e: "$|;",
                c: [e.inherit(e.TM, {
                    b: t
                }), c].concat(i)
            }, {
                b: e.IR + "::"
            }, {
                cN: "symbol",
                b: e.UIR + "(\\!|\\?)?:",
                r: 0
            }, {
                cN: "symbol",
                b: ":(?!\\s)",
                c: [o, {
                    b: t
                }],
                r: 0
            }, {
                cN: "number",
                b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                r: 0
            }, {
                b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
            }, {
                cN: "params",
                b: /\|/,
                e: /\|/,
                k: r
            }, {
                b: "(" + e.RSR + "|unless)\\s*",
                k: "unless",
                c: [a, {
                    cN: "regexp",
                    c: [e.BE, s],
                    i: /\n/,
                    v: [{
                        b: "/",
                        e: "/[a-z]*"
                    }, {
                        b: "%r{",
                        e: "}[a-z]*"
                    }, {
                        b: "%r\\(",
                        e: "\\)[a-z]*"
                    }, {
                        b: "%r!",
                        e: "![a-z]*"
                    }, {
                        b: "%r\\[",
                        e: "\\][a-z]*"
                    }]
                }].concat(i),
                r: 0
            }].concat(i);
        s.c = l, c.c = l;
        var u = "[>?]>",
            d = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
            p = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
            m = [{
                b: /^\s*=>/,
                starts: {
                    e: "$",
                    c: l
                }
            }, {
                cN: "meta",
                b: "^(" + u + "|" + d + "|" + p + ")",
                starts: {
                    e: "$",
                    c: l
                }
            }];
        return {
            aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
            k: r,
            i: /\/\*/,
            c: i.concat(m).concat(l)
        }
    }), hljs.g("css", function(e) {
        var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
            r = {
                b: /[A-Z\_\.\-]+\s*:/,
                rB: !0,
                e: ";",
                eW: !0,
                c: [{
                    cN: "attribute",
                    b: /\S/,
                    e: ":",
                    eE: !0,
                    starts: {
                        eW: !0,
                        eE: !0,
                        c: [{
                            b: /[\w-]+\(/,
                            rB: !0,
                            c: [{
                                cN: "built_in",
                                b: /[\w-]+/
                            }, {
                                b: /\(/,
                                e: /\)/,
                                c: [e.ASM, e.QSM]
                            }]
                        }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                            cN: "number",
                            b: "#[0-9A-Fa-f]+"
                        }, {
                            cN: "meta",
                            b: "!important"
                        }]
                    }
                }]
            };
        return {
            cI: !0,
            i: /[=\/|'\$]/,
            c: [e.CBCM, {
                cN: "selector-id",
                b: /#[A-Za-z0-9_-]+/
            }, {
                cN: "selector-class",
                b: /\.[A-Za-z0-9_-]+/
            }, {
                cN: "selector-attr",
                b: /\[/,
                e: /\]/,
                i: "$"
            }, {
                cN: "selector-pseudo",
                b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
            }, {
                b: "@(font-face|page)",
                l: "[a-z-]+",
                k: "font-face page"
            }, {
                b: "@",
                e: "[{;]",
                i: /:/,
                c: [{
                    cN: "keyword",
                    b: /\w+/
                }, {
                    b: /\s/,
                    eW: !0,
                    eE: !0,
                    r: 0,
                    c: [e.ASM, e.QSM, e.CSSNM]
                }]
            }, {
                cN: "selector-tag",
                b: t,
                r: 0
            }, {
                b: "{",
                e: "}",
                i: /\S/,
                c: [e.CBCM, r]
            }]
        }
    }), hljs.g("cpp", function(e) {
        var t = {
                cN: "keyword",
                b: "\\b[a-z\\d_]*_t\\b"
            },
            r = {
                cN: "string",
                v: [{
                    b: '(u8?|U)?L?"',
                    e: '"',
                    i: "\\n",
                    c: [e.BE]
                }, {
                    b: '(u8?|U)?R"',
                    e: '"',
                    c: [e.BE]
                }, {
                    b: "'\\\\?.",
                    e: "'",
                    i: "."
                }]
            },
            n = {
                cN: "number",
                v: [{
                    b: "\\b(0b[01']+)"
                }, {
                    b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
                }, {
                    b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }],
                r: 0
            },
            a = {
                cN: "meta",
                b: /#\s*[a-z]+\b/,
                e: /$/,
                k: {
                    "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include"
                },
                c: [{
                    b: /\\\n/,
                    r: 0
                }, e.inherit(r, {
                    cN: "meta-string"
                }), {
                    cN: "meta-string",
                    b: /<[^\n>]*>/,
                    e: /$/,
                    i: "\\n"
                }, e.CLCM, e.CBCM]
            },
            i = e.IR + "\\s*\\(",
            s = {
                keyword: "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not",
                built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
                literal: "true false nullptr NULL"
            },
            o = [t, e.CLCM, e.CBCM, n, r];
        return {
            aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
            k: s,
            i: "</",
            c: o.concat([a, {
                b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
                e: ">",
                k: s,
                c: ["self", t]
            }, {
                b: e.IR + "::",
                k: s
            }, {
                v: [{
                    b: /=/,
                    e: /;/
                }, {
                    b: /\(/,
                    e: /\)/
                }, {
                    bK: "new throw return else",
                    e: /;/
                }],
                k: s,
                c: o.concat([{
                    b: /\(/,
                    e: /\)/,
                    k: s,
                    c: o.concat(["self"]),
                    r: 0
                }]),
                r: 0
            }, {
                cN: "function",
                b: "(" + e.IR + "[\\*&\\s]+)+" + i,
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: s,
                i: /[^\w\s\*&]/,
                c: [{
                    b: i,
                    rB: !0,
                    c: [e.TM],
                    r: 0
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: s,
                    r: 0,
                    c: [e.CLCM, e.CBCM, r, n, t]
                }, e.CLCM, e.CBCM, a]
            }, {
                cN: "class",
                bK: "class struct",
                e: /[{;:]/,
                c: [{
                    b: /</,
                    e: />/,
                    c: ["self"]
                }, e.TM]
            }]),
            exports: {
                preprocessor: a,
                strings: r,
                k: s
            }
        }
    }), hljs.g("typescript", function(e) {
        var t = {
            keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise"
        };
        return {
            aliases: ["ts"],
            k: t,
            c: [{
                cN: "meta",
                b: /^\s*['"]use strict['"]/
            }, e.ASM, e.QSM, {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE, {
                    cN: "subst",
                    b: "\\$\\{",
                    e: "\\}"
                }]
            }, e.CLCM, e.CBCM, {
                cN: "number",
                v: [{
                    b: "\\b(0[bB][01]+)"
                }, {
                    b: "\\b(0[oO][0-7]+)"
                }, {
                    b: e.CNR
                }],
                r: 0
            }, {
                b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
                k: "return throw case",
                c: [e.CLCM, e.CBCM, e.RM, {
                    cN: "function",
                    b: "(\\(.*?\\)|" + e.IR + ")\\s*=>",
                    rB: !0,
                    e: "\\s*=>",
                    c: [{
                        cN: "params",
                        v: [{
                            b: e.IR
                        }, {
                            b: /\(\s*\)/
                        }, {
                            b: /\(/,
                            e: /\)/,
                            eB: !0,
                            eE: !0,
                            k: t,
                            c: ["self", e.CLCM, e.CBCM]
                        }]
                    }]
                }],
                r: 0
            }, {
                cN: "function",
                b: "function",
                e: /[\{;]/,
                eE: !0,
                k: t,
                c: ["self", e.inherit(e.TM, {
                    b: /[A-Za-z$_][0-9A-Za-z$_]*/
                }), {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    k: t,
                    c: [e.CLCM, e.CBCM],
                    i: /["'\(]/
                }],
                i: /%/,
                r: 0
            }, {
                bK: "constructor",
                e: /\{/,
                eE: !0,
                c: ["self", {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    k: t,
                    c: [e.CLCM, e.CBCM],
                    i: /["'\(]/
                }]
            }, {
                b: /module\./,
                k: {
                    built_in: "module"
                },
                r: 0
            }, {
                bK: "module",
                e: /\{/,
                eE: !0
            }, {
                bK: "interface",
                e: /\{/,
                eE: !0,
                k: "interface extends"
            }, {
                b: /\$[(.]/
            }, {
                b: "\\." + e.IR,
                r: 0
            }, {
                cN: "meta",
                b: "@[A-Za-z]+"
            }]
        }
    }), hljs.g("shell", function(e) {
        return {
            aliases: ["console"],
            c: [{
                cN: "meta",
                b: "^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",
                starts: {
                    e: "$",
                    sL: "bash"
                }
            }]
        }
    }), hljs.g("rust", function(e) {
        var t = "([ui](8|16|32|64|128|size)|f(32|64))?",
            r = "alignof as be box break const continue crate do else enum extern false fn for if impl in let loop match mod mut offsetof once priv proc pub pure ref return self Self sizeof static struct super trait true type typeof unsafe unsized use virtual while where yield move default",
            n = "drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!";
        return {
            aliases: ["rs"],
            k: {
                keyword: r,
                literal: "true false Some None Ok Err",
                built_in: n
            },
            l: e.IR + "!?",
            i: "</",
            c: [e.CLCM, e.C("/\\*", "\\*/", {
                c: ["self"]
            }), e.inherit(e.QSM, {
                b: /b?"/,
                i: null
            }), {
                cN: "string",
                v: [{
                    b: /r(#*)"(.|\n)*?"\1(?!#)/
                }, {
                    b: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
                }]
            }, {
                cN: "symbol",
                b: /'[a-zA-Z_][a-zA-Z0-9_]*/
            }, {
                cN: "number",
                v: [{
                    b: "\\b0b([01_]+)" + t
                }, {
                    b: "\\b0o([0-7_]+)" + t
                }, {
                    b: "\\b0x([A-Fa-f0-9_]+)" + t
                }, {
                    b: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + t
                }],
                r: 0
            }, {
                cN: "function",
                bK: "fn",
                e: "(\\(|<)",
                eE: !0,
                c: [e.UTM]
            }, {
                cN: "meta",
                b: "#\\!?\\[",
                e: "\\]",
                c: [{
                    cN: "meta-string",
                    b: /"/,
                    e: /"/
                }]
            }, {
                cN: "class",
                bK: "type",
                e: ";",
                c: [e.inherit(e.UTM, {
                    endsParent: !0
                })],
                i: "\\S"
            }, {
                cN: "class",
                bK: "trait enum struct union",
                e: "{",
                c: [e.inherit(e.UTM, {
                    endsParent: !0
                })],
                i: "[\\w\\d]"
            }, {
                b: e.IR + "::",
                k: {
                    built_in: n
                }
            }, {
                b: "->"
            }]
        }
    }), hljs.g("objectivec", function(e) {
        var t = {
                cN: "built_in",
                b: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
            },
            r = {
                keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
                literal: "false true FALSE TRUE nil YES NO NULL",
                built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
            },
            n = /[a-zA-Z@][a-zA-Z0-9_]*/,
            a = "@interface @class @protocol @implementation";
        return {
            aliases: ["mm", "objc", "obj-c"],
            k: r,
            l: n,
            i: "</",
            c: [t, e.CLCM, e.CBCM, e.CNM, e.QSM, {
                cN: "string",
                v: [{
                    b: '@"',
                    e: '"',
                    i: "\\n",
                    c: [e.BE]
                }, {
                    b: "'",
                    e: "[^\\\\]'",
                    i: "[^\\\\][^']"
                }]
            }, {
                cN: "meta",
                b: "#",
                e: "$",
                c: [{
                    cN: "meta-string",
                    v: [{
                        b: '"',
                        e: '"'
                    }, {
                        b: "<",
                        e: ">"
                    }]
                }]
            }, {
                cN: "class",
                b: "(" + a.split(" ").join("|") + ")\\b",
                e: "({|$)",
                eE: !0,
                k: a,
                l: n,
                c: [e.UTM]
            }, {
                b: "\\." + e.UIR,
                r: 0
            }]
        }
    }), hljs.g("tex", function(e) {
        var t = {
            cN: "tag",
            b: /\\/,
            r: 0,
            c: [{
                cN: "name",
                v: [{
                    b: /[a-zA-Z\u0430-\u044f\u0410-\u044f]+[*]?/
                }, {
                    b: /[^a-zA-Z\u0430-\u044f\u0410-\u044f0-9]/
                }],
                starts: {
                    eW: !0,
                    r: 0,
                    c: [{
                        cN: "string",
                        v: [{
                            b: /\[/,
                            e: /\]/
                        }, {
                            b: /\{/,
                            e: /\}/
                        }]
                    }, {
                        b: /\s*=\s*/,
                        eW: !0,
                        r: 0,
                        c: [{
                            cN: "number",
                            b: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/
                        }]
                    }]
                }
            }]
        };
        return {
            c: [t, {
                cN: "formula",
                c: [t],
                r: 0,
                v: [{
                    b: /\$\$/,
                    e: /\$\$/
                }, {
                    b: /\$/,
                    e: /\$/
                }]
            }, e.C("%", "$", {
                r: 0
            })]
        }
    }), hljs.g("makefile", function(e) {
        var t = {
                cN: "variable",
                v: [{
                    b: "\\$\\(" + e.UIR + "\\)",
                    c: [e.BE]
                }, {
                    b: /\$[@%<?\^\+\*]/
                }]
            },
            r = {
                cN: "string",
                b: /"/,
                e: /"/,
                c: [e.BE, t]
            },
            n = {
                cN: "variable",
                b: /\$\([\w-]+\s/,
                e: /\)/,
                k: {
                    built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
                },
                c: [t]
            },
            a = {
                b: "^" + e.UIR + "\\s*[:+?]?=",
                i: "\\n",
                rB: !0,
                c: [{
                    b: "^" + e.UIR,
                    e: "[:+?]?=",
                    eE: !0
                }]
            },
            i = {
                cN: "meta",
                b: /^\.PHONY:/,
                e: /$/,
                k: {
                    "meta-keyword": ".PHONY"
                },
                l: /[\.\w]+/
            },
            s = {
                cN: "section",
                b: /^[^\s]+:/,
                e: /$/,
                c: [t]
            };
        return {
            aliases: ["mk", "mak"],
            k: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
            l: /[\w-]+/,
            c: [e.HCM, t, r, n, a, i, s]
        }
    }), hljs.g("glsl", function(e) {
        return {
            k: {
                keyword: "break continue discard do else for if return while switch case default attribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly",
                type: "atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBufferiimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void",
                built_in: "gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow",
                literal: "true false"
            },
            i: '"',
            c: [e.CLCM, e.CBCM, e.CNM, {
                cN: "meta",
                b: "#",
                e: "$"
            }]
        }
    }), hljs.g("python", function(e) {
        var t = {
                keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
                built_in: "Ellipsis NotImplemented"
            },
            r = {
                cN: "meta",
                b: /^(>>>|\.\.\.) /
            },
            n = {
                cN: "subst",
                b: /\{/,
                e: /\}/,
                k: t,
                i: /#/
            },
            a = {
                cN: "string",
                c: [e.BE],
                v: [{
                    b: /(u|b)?r?'''/,
                    e: /'''/,
                    c: [r],
                    r: 10
                }, {
                    b: /(u|b)?r?"""/,
                    e: /"""/,
                    c: [r],
                    r: 10
                }, {
                    b: /(fr|rf|f)'''/,
                    e: /'''/,
                    c: [r, n]
                }, {
                    b: /(fr|rf|f)"""/,
                    e: /"""/,
                    c: [r, n]
                }, {
                    b: /(u|r|ur)'/,
                    e: /'/,
                    r: 10
                }, {
                    b: /(u|r|ur)"/,
                    e: /"/,
                    r: 10
                }, {
                    b: /(b|br)'/,
                    e: /'/
                }, {
                    b: /(b|br)"/,
                    e: /"/
                }, {
                    b: /(fr|rf|f)'/,
                    e: /'/,
                    c: [n]
                }, {
                    b: /(fr|rf|f)"/,
                    e: /"/,
                    c: [n]
                }, e.ASM, e.QSM]
            },
            i = {
                cN: "number",
                r: 0,
                v: [{
                    b: e.BNR + "[lLjJ]?"
                }, {
                    b: "\\b(0o[0-7]+)[lLjJ]?"
                }, {
                    b: e.CNR + "[lLjJ]?"
                }]
            },
            s = {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: ["self", r, i, a]
            };
        return n.c = [a, i, r], {
            aliases: ["py", "gyp"],
            k: t,
            i: /(<\/|->|\?)|=>/,
            c: [r, i, a, e.HCM, {
                v: [{
                    cN: "function",
                    bK: "def"
                }, {
                    cN: "class",
                    bK: "class"
                }],
                e: /:/,
                i: /[${=;\n,]/,
                c: [e.UTM, s, {
                    b: /->/,
                    eW: !0,
                    k: "None"
                }]
            }, {
                cN: "meta",
                b: /^[\t ]*@/,
                e: /$/
            }, {
                b: /\b(print|exec)\(/
            }]
        }
    }), hljs.g("json", function(e) {
        var t = {
                literal: "true false null"
            },
            r = [e.QSM, e.CNM],
            n = {
                e: ",",
                eW: !0,
                eE: !0,
                c: r,
                k: t
            },
            a = {
                b: "{",
                e: "}",
                c: [{
                    cN: "attr",
                    b: /"/,
                    e: /"/,
                    c: [e.BE],
                    i: "\\n"
                }, e.inherit(n, {
                    b: /:/
                })],
                i: "\\S"
            },
            i = {
                b: "\\[",
                e: "\\]",
                c: [e.inherit(n)],
                i: "\\S"
            };
        return r.splice(r.length, 0, a, i), {
            c: r,
            k: t,
            i: "\\S"
        }
    }), hljs.g("armasm", function(e) {
        return {
            cI: !0,
            aliases: ["arm"],
            l: "\\.?" + e.IR,
            k: {
                meta: ".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ",
                built_in: "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 pc lr sp ip sl sb fp a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf s0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 s16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 d16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 {PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @"
            },
            c: [{
                cN: "keyword",
                b: "\\b(adc|(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|wfe|wfi|yield)(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?[sptrx]?",
                e: "\\s"
            }, e.C("[;@]", "$", {
                r: 0
            }), e.CBCM, e.QSM, {
                cN: "string",
                b: "'",
                e: "[^\\\\]'",
                r: 0
            }, {
                cN: "title",
                b: "\\|",
                e: "\\|",
                i: "\\n",
                r: 0
            }, {
                cN: "number",
                v: [{
                    b: "[#$=]?0x[0-9a-f]+"
                }, {
                    b: "[#$=]?0b[01]+"
                }, {
                    b: "[#$=]\\d+"
                }, {
                    b: "\\b\\d+"
                }],
                r: 0
            }, {
                cN: "symbol",
                v: [{
                    b: "^[a-z_\\.\\$][a-z0-9_\\.\\$]+"
                }, {
                    b: "^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:"
                }, {
                    b: "[=#]\\w+"
                }],
                r: 0
            }]
        }
    }), hljs.g("cs", function(e) {
        var t = {
                keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",
                literal: "null false true"
            },
            r = {
                cN: "string",
                b: '@"',
                e: '"',
                c: [{
                    b: '""'
                }]
            },
            n = e.inherit(r, {
                i: /\n/
            }),
            a = {
                cN: "subst",
                b: "{",
                e: "}",
                k: t
            },
            i = e.inherit(a, {
                i: /\n/
            }),
            s = {
                cN: "string",
                b: /\$"/,
                e: '"',
                i: /\n/,
                c: [{
                    b: "{{"
                }, {
                    b: "}}"
                }, e.BE, i]
            },
            o = {
                cN: "string",
                b: /\$@"/,
                e: '"',
                c: [{
                    b: "{{"
                }, {
                    b: "}}"
                }, {
                    b: '""'
                }, a]
            },
            c = e.inherit(o, {
                i: /\n/,
                c: [{
                    b: "{{"
                }, {
                    b: "}}"
                }, {
                    b: '""'
                }, i]
            });
        a.c = [o, s, r, e.ASM, e.QSM, e.CNM, e.CBCM], i.c = [c, s, n, e.ASM, e.QSM, e.CNM, e.inherit(e.CBCM, {
            i: /\n/
        })];
        var l = {
                v: [o, s, r, e.ASM, e.QSM]
            },
            u = e.IR + "(<" + e.IR + "(\\s*,\\s*" + e.IR + ")*>)?(\\[\\])?";
        return {
            aliases: ["csharp"],
            k: t,
            i: /::/,
            c: [e.C("///", "$", {
                rB: !0,
                c: [{
                    cN: "doctag",
                    v: [{
                        b: "///",
                        r: 0
                    }, {
                        b: "<!--|-->"
                    }, {
                        b: "</?",
                        e: ">"
                    }]
                }]
            }), e.CLCM, e.CBCM, {
                cN: "meta",
                b: "#",
                e: "$",
                k: {
                    "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
                }
            }, l, e.CNM, {
                bK: "class interface",
                e: /[{;=]/,
                i: /[^\s:]/,
                c: [e.TM, e.CLCM, e.CBCM]
            }, {
                bK: "namespace",
                e: /[{;=]/,
                i: /[^\s:]/,
                c: [e.inherit(e.TM, {
                    b: "[a-zA-Z](\\.?\\w)*"
                }), e.CLCM, e.CBCM]
            }, {
                cN: "meta",
                b: "^\\s*\\[",
                eB: !0,
                e: "\\]",
                eE: !0,
                c: [{
                    cN: "meta-string",
                    b: /"/,
                    e: /"/
                }]
            }, {
                bK: "new return throw await else",
                r: 0
            }, {
                cN: "function",
                b: "(" + u + "\\s+)+" + e.IR + "\\s*\\(",
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: t,
                c: [{
                    b: e.IR + "\\s*\\(",
                    rB: !0,
                    c: [e.TM],
                    r: 0
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    k: t,
                    r: 0,
                    c: [l, e.CNM, e.CBCM]
                }, e.CLCM, e.CBCM]
            }]
        }
    }), hljs.g("matlab", function(e) {
        var t = [e.CNM, {
                cN: "string",
                b: "'",
                e: "'",
                c: [e.BE, {
                    b: "''"
                }]
            }],
            r = {
                r: 0,
                c: [{
                    b: /'['\.]*/
                }]
            };
        return {
            k: {
                keyword: "break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",
                built_in: "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson"
            },
            i: '(//|"|#|/\\*|\\s+/\\w+)',
            c: [{
                cN: "function",
                bK: "function",
                e: "$",
                c: [e.UTM, {
                    cN: "params",
                    v: [{
                        b: "\\(",
                        e: "\\)"
                    }, {
                        b: "\\[",
                        e: "\\]"
                    }]
                }]
            }, {
                b: /[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,
                rB: !0,
                r: 0,
                c: [{
                    b: /[a-zA-Z_][a-zA-Z_0-9]*/,
                    r: 0
                }, r.c[0]]
            }, {
                b: "\\[",
                e: "\\]",
                c: t,
                r: 0,
                starts: r
            }, {
                b: "\\{",
                e: /}/,
                c: t,
                r: 0,
                starts: r
            }, {
                b: /\)/,
                r: 0,
                starts: r
            }, e.C("^\\s*\\%\\{\\s*$", "^\\s*\\%\\}\\s*$"), e.C("\\%", "$")].concat(t)
        }
    }), hljs.g("swift", function(e) {
        var t = {
                keyword: "__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false fileprivate final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating open operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
                literal: "true false nil",
                built_in: "abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"
            },
            r = {
                cN: "type",
                b: "\\b[A-Z][\\w\xc0-\u02b8']*",
                r: 0
            },
            n = e.C("/\\*", "\\*/", {
                c: ["self"]
            }),
            a = {
                cN: "subst",
                b: /\\\(/,
                e: "\\)",
                k: t,
                c: []
            },
            i = {
                cN: "number",
                b: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
                r: 0
            },
            s = e.inherit(e.QSM, {
                c: [a, e.BE]
            });
        return a.c = [i], {
            k: t,
            c: [s, e.CLCM, n, r, i, {
                cN: "function",
                bK: "func",
                e: "{",
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: /[A-Za-z$_][0-9A-Za-z$_]*/
                }), {
                    b: /</,
                    e: />/
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    endsParent: !0,
                    k: t,
                    c: ["self", i, s, e.CBCM, {
                        b: ":"
                    }],
                    i: /["']/
                }],
                i: /\[|%/
            }, {
                cN: "class",
                bK: "struct protocol class extension enum",
                k: t,
                e: "\\{",
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                })]
            }, {
                cN: "meta",
                b: "(@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)"
            }, {
                bK: "import",
                e: /$/,
                c: [e.CLCM, n]
            }]
        }
    }), hljs.g("scheme", function(e) {
        var t = "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",
            r = "(\\-|\\+)?\\d+([./]\\d+)?",
            n = r + "[+\\-]" + r + "i",
            a = {
                "builtin-name": "case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"
            },
            i = {
                cN: "meta",
                b: "^#!",
                e: "$"
            },
            s = {
                cN: "literal",
                b: "(#t|#f|#\\\\" + t + "|#\\\\.)"
            },
            o = {
                cN: "number",
                v: [{
                    b: r,
                    r: 0
                }, {
                    b: n,
                    r: 0
                }, {
                    b: "#b[0-1]+(/[0-1]+)?"
                }, {
                    b: "#o[0-7]+(/[0-7]+)?"
                }, {
                    b: "#x[0-9a-f]+(/[0-9a-f]+)?"
                }]
            },
            c = e.QSM,
            l = [e.C(";", "$", {
                r: 0
            }), e.C("#\\|", "\\|#")],
            u = {
                b: t,
                r: 0
            },
            d = {
                cN: "symbol",
                b: "'" + t
            },
            p = {
                eW: !0,
                r: 0
            },
            m = {
                v: [{
                    b: /'/
                }, {
                    b: "`"
                }],
                c: [{
                    b: "\\(",
                    e: "\\)",
                    c: ["self", s, c, o, u, d]
                }]
            },
            g = {
                cN: "name",
                b: t,
                l: t,
                k: a
            },
            b = {
                b: /lambda/,
                eW: !0,
                rB: !0,
                c: [g, {
                    b: /\(/,
                    e: /\)/,
                    endsParent: !0,
                    c: [u]
                }]
            },
            f = {
                v: [{
                    b: "\\(",
                    e: "\\)"
                }, {
                    b: "\\[",
                    e: "\\]"
                }],
                c: [b, g, p]
            };
        return p.c = [s, o, c, u, d, m, f].concat(l), {
            i: /\S/,
            c: [i, o, c, d, m, f].concat(l)
        }
    }), hljs.g("php", function(e) {
        var t = {
                b: "\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"
            },
            r = {
                cN: "meta",
                b: /<\?(php)?|\?>/
            },
            n = {
                cN: "string",
                c: [e.BE, r],
                v: [{
                    b: 'b"',
                    e: '"'
                }, {
                    b: "b'",
                    e: "'"
                }, e.inherit(e.ASM, {
                    i: null
                }), e.inherit(e.QSM, {
                    i: null
                })]
            },
            a = {
                v: [e.BNM, e.CNM]
            };
        return {
            aliases: ["php3", "php4", "php5", "php6"],
            cI: !0,
            k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
            c: [e.HCM, e.C("//", "$", {
                c: [r]
            }), e.C("/\\*", "\\*/", {
                c: [{
                    cN: "doctag",
                    b: "@[A-Za-z]+"
                }]
            }), e.C("__halt_compiler.+?;", !1, {
                eW: !0,
                k: "__halt_compiler",
                l: e.UIR
            }), {
                cN: "string",
                b: /<<<['"]?\w+['"]?$/,
                e: /^\w+;?$/,
                c: [e.BE, {
                    cN: "subst",
                    v: [{
                        b: /\$\w+/
                    }, {
                        b: /\{\$/,
                        e: /\}/
                    }]
                }]
            }, r, {
                cN: "keyword",
                b: /\$this\b/
            }, t, {
                b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
            }, {
                cN: "function",
                bK: "function",
                e: /[;{]/,
                eE: !0,
                i: "\\$|\\[|%",
                c: [e.UTM, {
                    cN: "params",
                    b: "\\(",
                    e: "\\)",
                    c: ["self", t, e.CBCM, n, a]
                }]
            }, {
                cN: "class",
                bK: "class interface",
                e: "{",
                eE: !0,
                i: /[:\(\$"]/,
                c: [{
                    bK: "extends implements"
                }, e.UTM]
            }, {
                bK: "namespace",
                e: ";",
                i: /[\.']/,
                c: [e.UTM]
            }, {
                bK: "use",
                e: ";",
                c: [e.UTM]
            }, {
                b: "=>"
            }, n, a]
        }
    }), hljs.g("http", function(e) {
        var t = "HTTP/[0-9\\.]+";
        return {
            aliases: ["https"],
            i: "\\S",
            c: [{
                b: "^" + t,
                e: "$",
                c: [{
                    cN: "number",
                    b: "\\b\\d{3}\\b"
                }]
            }, {
                b: "^[A-Z]+ (.*?) " + t + "$",
                rB: !0,
                e: "$",
                c: [{
                    cN: "string",
                    b: " ",
                    e: " ",
                    eB: !0,
                    eE: !0
                }, {
                    b: t
                }, {
                    cN: "keyword",
                    b: "[A-Z]+"
                }]
            }, {
                cN: "attribute",
                b: "^\\w",
                e: ": ",
                eE: !0,
                i: "\\n|\\s|=",
                starts: {
                    e: "$",
                    r: 0
                }
            }, {
                b: "\\n\\n",
                starts: {
                    sL: [],
                    eW: !0
                }
            }]
        }
    });
    var U = "Menlo,Consolas,monospace",
        O = 105.1316178 / t(U) + "px",
        F = e("style", 'body{max-width:680px;margin:auto;padding:20px;text-align:justify;line-height:140%; -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:antialiased;color:#222;font-family:Palatino,Georgia,"Times New Roman",serif}'),
        P = e("style", "body{counter-reset: h1 h2 h3 h4 h5 h6 paragraph}@page{margin:0;size:auto}.md code,pre{font-family:" + U + ";font-size:" + O + ';line-height:140%}.md div.title{font-size:26px;font-weight:800;line-height:120%;text-align:center}.md div.afterTitles{height:10px}.md div.subtitle{text-align:center}.md .image{display:inline-block}.md img{max-width:100%;page-break-inside:avoid}.md li{text-align:left;text-indent:0}.md pre.listing {tab-size:4;-moz-tab-size:4;-o-tab-size:4;counter-reset:line}.md pre.listing .linenumbers span.line:before{width:30px;margin-left:-52px;font-size:80%;text-align:right;counter-increment:line;content:counter(line);display:inline-block;padding-right:13px;margin-right:8px;color:#ccc}.md div.tilde{margin:20px 0 -10px;text-align:center}.md div.imagecaption,.md div.tablecaption,.md div.listingcaption{margin:7px 5px 12px;text-align: justify;font-style:italic}.md div.imagecaption{margin-bottom:0}.md blockquote.fancyquote{margin:25px 0 25px;text-align:left;line-height:160%}.md blockquote.fancyquote::before{content:"\u201c";color:#DDD;font-family:Times New Roman;font-size:45px;line-height:0;margin-right:6px;vertical-align:-0.3em}.md span.fancyquote{font-size:118%;color:#777;font-style:italic}.md span.fancyquote::after{content:"\u201d";font-style:normal;color:#DDD;font-family:Times New Roman;font-size:45px;line-height:0;margin-left:6px;vertical-align:-0.3em}.md blockquote.fancyquote .author{width:100%;margin-top:10px;display:inline-block;text-align:right}.md small{font-size:60%}.md div.title,contents,.md .tocHeader,h1,h2,h3,h4,h5,h6,.md .shortTOC,.md .mediumTOC,.nonumberh1,.nonumberh2,.nonumberh3,.nonumberh4,.nonumberh5,.nonumberh6{font-family:Verdana,Helvetica,Arial,sans-serif;margin:13.4px 0 13.4px;padding:15px 0 3px;border-top:none;clear:both}.md h1,.md h2,.md h3,.md h4,.md h5,.md h6,.md .nonumberh1,.md .nonumberh2,.md .nonumberh3,.md .nonumberh4,.md .nonumberh5,.md .nonumberh6{page-break-after:avoid;break-after:avoid}.md svg.diagram{display:block;font-family:' + U + ";font-size:" + O + ";text-align:center;stroke-linecap:round;stroke-width:" + z + 'px;page-break-inside:avoid;stroke:#000;fill:#000}.md svg.diagram .opendot{fill:#FFF}.md svg.diagram text{stroke:none}@media print{@page{margin:1in 5mm;transform: scale(150%)}}@media print{.md .pagebreak{page-break-after:always;visibility:hidden}}.md a{font-family:Georgia,Palatino,\'Times New Roman\'}.md h1,.md .tocHeader,.md .nonumberh1{border-bottom:3px solid;font-size:20px;font-weight:bold;}.md h1,.md .nonumberh1{counter-reset: h2 h3 h4 h5 h6}.md h2,.md .nonumberh2{counter-reset: h3 h4 h5 h6;color:#555;font-weight:bold;font-size:18px;}.md h3,.md h4,.md h5,.md h6,.md .nonumberh3,.md .nonumberh4,.md .nonumberh5,.md .nonumberh6{font-family:Helvetica,Arial,sans-serif;color:#555;font-size:16px;}.md h3{counter-reset:h4 h5 h6}.md h4{counter-reset:h5 h6}.md h5{counter-reset:h6}.md div.table{margin:16px 0 16px 0}.md table{border-collapse:collapse;line-height:140%;page-break-inside:avoid}.md table.table{margin:auto}.md table.calendar{width:100%;margin:auto;font-size:11px;font-family:Helvetica,Arial,sans-serif}.md table.calendar th{font-size:16px}.md .today{background:#ECF8FA}.md .calendar .parenthesized{color:#999;font-style:italic}.md div.tablecaption{text-align:center}.md table.table th{color:#FFF;background-color:#AAA;border:1px solid #888;padding:8px 15px 8px 15px}.md table.table td{padding:5px 15px 5px 15px;border:1px solid #888}.md table.table tr:nth-child(even){background:#EEE}.md pre.tilde{border-top: 1px solid #CCC;border-bottom: 1px solid #CCC;padding: 5px 0 5px 20px;margin:0 0 0 0;background:#FCFCFC;page-break-inside:avoid}.md a.target{width:0px;height:0px;visibility:hidden;font-size:0px;display:inline-block}.md a:link, .md a:visited{color:#38A;text-decoration:none}.md a:link:hover{text-decoration:underline}.md dt{font-weight:700}.md dl>dd{margin-top:-8px; margin-bottom:8px}.md dl>table{margin:35px 0 30px}.md code{white-space:pre-wrap;overflow-wrap:break-word;text-align:left;page-break-inside:avoid}.md .endnote{font-size:13px;line-height:15px;padding-left:10px;text-indent:-10px}.md .bib{padding-left:80px;text-indent:-80px;text-align:left}.markdeepFooter{font-size:9px;text-align:right;padding-top:80px;color:#999}.md .mediumTOC{float:right;font-size:12px;line-height:15px;border-left:1px solid #CCC;padding-left:15px;margin:15px 0px 15px 25px}.md .mediumTOC .level1{font-weight:600}.md .longTOC .level1{font-weight:600;display:block;padding-top:12px;margin:0 0 -20px}.md .shortTOC{text-align:center;font-weight:bold;margin-top:15px;font-size:14px}.md .admonition{position:relative;margin:1em 0;padding:.4rem 1rem;border-radius:.2rem;border-left:2.5rem solid rgba(68,138,255,.4);background-color:rgba(68,138,255,.15);}.md .admonition-title{font-weight:bold;border-bottom:solid 1px rgba(68,138,255,.4);padding-bottom:4px;margin-bottom:4px;margin-left: -1rem;padding-left:1rem;margin-right:-1rem;border-color:rgba(68,138,255,.4)}.md .admonition.tip{border-left:2.5rem solid rgba(50,255,90,.4);background-color:rgba(50,255,90,.15)}.md .admonition.tip::before{content:"\\24d8";font-weight:bold;font-size:150%;position:relative;top:3px;color:rgba(26,128,46,.8);left:-2.95rem;display:block;width:0;height:0}.md .admonition.tip>.admonition-title{border-color:rgba(50,255,90,.4)}.md .admonition.warn,.md .admonition.warning{border-left:2.5rem solid rgba(255,145,0,.4);background-color:rgba(255,145,0,.15)}.md .admonition.warn::before,.md .admonition.warning::before{content:"\\26A0";font-weight:bold;font-size:150%;position:relative;top:2px;color:rgba(128,73,0,.8);left:-2.95rem;display:block;width:0;height:0}.md .admonition.warn>.admonition-title,.md .admonition.warning>.admonition-title{border-color:rgba(255,145,0,.4)}.md .admonition.error{border-left: 2.5rem solid rgba(255,23,68,.4);background-color:rgba(255,23,68,.15)}.md .admonition.error>.admonition-title{border-color:rgba(255,23,68,.4)}.md .admonition.error::before{content: "\\2612";font-family:"Arial";font-size:200%;position:relative;color:rgba(128,12,34,.8);top:-2px;left:-3rem;display:block;width:0;height:0}.md .admonition p:last-child{margin-bottom:0}.md li.checked,.md li.unchecked{list-style:none;overflow:visible;text-indent:-1.2em}.md li.checked:before,.md li.unchecked:before{content:"\\2611";display:block;float:left;width:1em;font-size:120%}.md li.unchecked:before{content:"\\2610"}'),
        H = '<!-- Markdeep: --><style class="fallback">body{visibility:hidden;white-space:pre;font-family:monospace}</style><script src="markdeep.min.js"></script><script src="https://casual-effects.com/markdeep/latest/markdeep.min.js?"></script><script>window.alreadyProcessedMarkdeep||(document.body.style.visibility="visible")</script>',
        W = {
            keyword: {
                table: "tableau",
                figure: "figure",
                m: "liste",
                diagram: "diagramme",
                contents: "Table des mati\xe8res",
                sec: "sec",
                section: "section",
                subsection: "paragraphe",
                Monday: "lundi",
                Tuesday: "mardi",
                Wednesday: "mercredi",
                Thursday: "jeudi",
                Friday: "vendredi",
                Saturday: "samedi",
                Sunday: "dimanche",
                January: "Janvier",
                February: "F\xe9vrier",
                March: "Mars",
                April: "Avril",
                May: "Mai",
                June: "Juin",
                July: "Julliet",
                August: "Ao\xfbt",
                September: "Septembre",
                October: "Octobre",
                November: "Novembre",
                December: "D\xe9cembre",
                jan: "janv",
                feb: "f\xe9vr",
                mar: "mars",
                apr: "avril",
                may: "mai",
                jun: "juin",
                jul: "juil",
                aug: "ao\xfbt",
                sep: "sept",
                oct: "oct",
                nov: "nov",
                dec: "d\xe9c",
                "&ldquo;": "&laquo;&nbsp;",
                "&rtquo;": "&nbsp;&raquo;"
            }
        },
        V = {
            keyword: {
                table: "lentel\u0117",
                figure: "paveiksl\u0117lis",
                m: "s\u0105ra\u0161as",
                diagram: "diagrama",
                contents: "Turinys",
                sec: "sk",
                section: "skyrius",
                subsection: "poskyris",
                Monday: "pirmadienis",
                Tuesday: "antradienis",
                Wednesday: "tre\u010diadienis",
                Thursday: "ketvirtadienis",
                Friday: "penktadienis",
                Saturday: "\u0161e\u0161tadienis",
                Sunday: "sekmadienis",
                January: "Sausis",
                February: "Vasaris",
                March: "Kovas",
                April: "Balandis",
                May: "Gegu\u017e\u0117",
                June: "Bir\u017eelis",
                July: "Liepa",
                August: "Rugpj\u016btis",
                September: "Rugs\u0117jis",
                October: "Spalis",
                November: "Lapkritis",
                December: "Gruodis",
                jan: "saus",
                feb: "vas",
                mar: "kov",
                apr: "bal",
                may: "geg",
                jun: "bir\u017e",
                jul: "liep",
                aug: "rugpj",
                sep: "rugs",
                oct: "spal",
                nov: "lapkr",
                dec: "gruod",
                "&ldquo;": "&bdquo;",
                "&rtquo;": "&ldquo;"
            }
        },
        Z = {
            keyword: {
                table: "\u0442\u0430\u0431\u043b\u0438\u0446\u0430",
                figure: "\u0444\u0438\u0433\u0443\u0440\u0430",
                m: "\u0441\u043f\u0438\u0441\u044a\u043a",
                diagram: "\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u0430",
                contents: "c\u044a\u0434\u044a\u0440\u0436\u0430\u043d\u0438\u0435",
                sec: "\u0441\u0435\u043a",
                section: "\u0440\u0430\u0437\u0434\u0435\u043b",
                subsection: "\u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b",
                Monday: "\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a",
                Tuesday: "\u0432\u0442\u043e\u0440\u043d\u0438\u043a",
                Wednesday: "\u0441\u0440\u044f\u0434\u0430",
                Thursday: "\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a",
                Friday: "\u043f\u0435\u0442\u044a\u043a",
                Saturday: "\u0441\u044a\u0431\u043e\u0442\u0430",
                Sunday: "\u043d\u0435\u0434\u0435\u043b\u044f",
                January: "\u044f\u043d\u0443\u0430\u0440\u0438",
                February: "\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438",
                March: "\u043c\u0430\u0440\u0442",
                April: "\u0430\u043f\u0440\u0438\u043b",
                May: "\u043c\u0430\u0439",
                June: "\u044e\u043d\u0438",
                July: "\u044e\u043b\u0438",
                August: "\u0430\u0432\u0433\u0443\u0441\u0442",
                September: "\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438",
                October: "\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438",
                November: "\u043d\u043e\u0435\u043c\u0432\u0440\u0438",
                December: "\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438",
                jan: "\u044f\u043d",
                feb: "\u0444\u0435\u0432\u0440",
                mar: "\u043c\u0430\u0440\u0442",
                apr: "\u0430\u043f\u0440",
                may: "\u043c\u0430\u0439",
                jun: "\u044e\u043d\u0438",
                jul: "\u044e\u043b\u0438",
                aug: "\u0430\u0432\u0433",
                sep: "\u0441\u0435\u043f\u0442",
                oct: "\u043e\u043a\u0442",
                nov: "\u043d\u043e\u0435\u043c",
                dec: "\u0434\u0435\u043a",
                "&ldquo;": "&bdquo;",
                "&rdquo;": "&rdquo;"
            }
        },
        G = {
            keyword: {
                table: "tabela",
                figure: "figura",
                m: "lista",
                diagram: "diagrama",
                contents: "conte\xfado",
                sec: "sec",
                section: "sec\xe7\xe3o",
                subsection: "subsec\xe7\xe3o",
                Monday: "Segunda-feira",
                Tuesday: "Ter\xe7a-feira",
                Wednesday: "Quarta-feira",
                Thursday: "Quinta-feira",
                Friday: "Sexta-feira",
                Saturday: "S\xe1bado",
                Sunday: "Domingo",
                January: "Janeiro",
                February: "Fevereiro",
                March: "Mar\xe7o",
                April: "Abril",
                May: "Maio",
                June: "Junho",
                July: "Julho",
                August: "Agosto",
                September: "Setembro",
                October: "Outubro",
                November: "Novembro",
                December: "Dezembro",
                jan: "jan",
                feb: "fev",
                mar: "mar",
                apr: "abr",
                may: "mai",
                jun: "jun",
                jul: "jul",
                aug: "ago",
                sep: "set",
                oct: "oct",
                nov: "nov",
                dec: "dez",
                "&ldquo;": "&laquo;",
                "&rtquo;": "&raquo;"
            }
        },
        J = {
            keyword: {
                table: "Tabulka",
                figure: "Obr\xe1zek",
                m: "Seznam",
                diagram: "Diagram",
                contents: "Obsah",
                sec: "kap.",
                section: "kapitola",
                subsection: "podkapitola",
                Monday: "pond\u011bl\xed",
                Tuesday: "\xfater\xfd",
                Wednesday: "st\u0159eda",
                Thursday: "\u010dtvrtek",
                Friday: "p\xe1tek",
                Saturday: "sobota",
                Sunday: "ned\u011ble",
                January: "leden",
                February: "\xfanor",
                March: "b\u0159ezen",
                April: "duben",
                May: "kv\u011bten",
                June: "\u010derven",
                July: "\u010dervenec",
                August: "srpen",
                September: "z\xe1\u0159\xed",
                October: "\u0159\xedjen",
                November: "listopad",
                December: "prosinec",
                jan: "led",
                feb: "\xfano",
                mar: "b\u0159e",
                apr: "dub",
                may: "kv\u011b",
                jun: "\u010dvn",
                jul: "\u010dvc",
                aug: "srp",
                sep: "z\xe1\u0159",
                oct: "\u0159\xedj",
                nov: "lis",
                dec: "pro",
                "&ldquo;": "&bdquo;",
                "&rdquo;": "&ldquo;"
            }
        },
        K = {
            keyword: {
                table: "tabella",
                figure: "figura",
                m: "lista",
                diagram: "diagramma",
                contents: "indice",
                sec: "sez",
                section: "sezione",
                subsection: "paragrafo",
                Monday: "luned\xec",
                Tuesday: "marted\xec",
                Wednesday: "mercoled\xec",
                Thursday: "gioved\xec",
                Friday: "venerd\xec",
                Saturday: "sabato",
                Sunday: "domenica",
                January: "Gennaio",
                February: "Febbraio",
                March: "Marzo",
                April: "Aprile",
                May: "Maggio",
                June: "Giugno",
                July: "Luglio",
                August: "Agosto",
                September: "Settembre",
                October: "Ottobre",
                November: "Novembre",
                December: "Dicembre",
                jan: "gen",
                feb: "feb",
                mar: "mar",
                apr: "apr",
                may: "mag",
                jun: "giu",
                jul: "lug",
                aug: "ago",
                sep: "set",
                oct: "ott",
                nov: "nov",
                dec: "dic",
                "&ldquo;": "&ldquo;",
                "&rtquo;": "&rdquo;"
            }
        },
        Q = {
            keyword: {
                table: "\u0442\u0430\u0431\u043b\u0438\u0446\u0430",
                figure: "\u0440\u0438\u0441\u0443\u043d\u043e\u043a",
                m: "\u043b\u0438\u0441\u0442\u0438\u043d\u0433",
                diagram: "\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430",
                contents: "\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435",
                sec: "\u0441\u0435\u043a",
                section: "\u0440\u0430\u0437\u0434\u0435\u043b",
                subsection: "\u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b",
                Monday: "\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",
                Tuesday: "\u0432\u0442\u043e\u0440\u043d\u0438\u043a",
                Wednesday: "\u0441\u0440\u0435\u0434\u0430",
                Thursday: "\u0447\u0435\u0442\u0432\u0435\u0440\u0433",
                Friday: "\u043f\u044f\u0442\u043d\u0438\u0446\u0430",
                Saturday: "\u0441\u0443\u0431\u0431\u043e\u0442\u0430",
                Sunday: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",
                January: "\u044f\u043d\u0432\u0430\u0440\u044cr",
                February: "\u0444\u0435\u0432\u0440\u0430\u043b\u044c",
                March: "\u043c\u0430\u0440\u0442",
                April: "\u0430\u043f\u0440\u0435\u043b\u044c",
                May: "\u043c\u0430\u0439",
                June: "\u0438\u044e\u043d\u044c",
                July: "\u0438\u044e\u043b\u044c",
                August: "\u0430\u0432\u0433\u0443\u0441\u0442",
                September: "\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c",
                October: "\u043e\u043a\u0442\u044f\u0431\u0440\u044c",
                November: "\u043d\u043e\u044f\u0431\u0440\u044c",
                December: "\u0434\u0435\u043a\u0430\u0431\u0440\u044c",
                jan: "\u044f\u043d\u0432",
                feb: "\u0444\u0435\u0432\u0440",
                mar: "\u043c\u0430\u0440\u0442",
                apr: "\u0430\u043f\u0440",
                may: "\u043c\u0430\u0439",
                jun: "\u0438\u044e\u043d\u044c",
                jul: "\u0438\u044e\u043b\u044c",
                aug: "\u0430\u0432\u0433",
                sep: "\u0441\u0435\u043d\u0442",
                oct: "\u043e\u043a\u0442",
                nov: "\u043d\u043e\u044f\u0431\u0440\u044c",
                dec: "\u0434\u0435\u043a",
                "&ldquo;": "\xab",
                "&rdquo;": "\xbb"
            }
        },
        X = {
            keyword: {
                table: "tabela",
                figure: "ilustracja",
                m: "wykaz",
                diagram: "diagram",
                contents: "Spis tre\u015bci",
                sec: "rozdz.",
                section: "rozdzia\u0142",
                subsection: "podrozdzia\u0142",
                Monday: "Poniedzia\u0142ek",
                Tuesday: "Wtorek",
                Wednesday: "\u015aroda",
                Thursday: "Czwartek",
                Friday: "Pi\u0105tek",
                Saturday: "Sobota",
                Sunday: "Niedziela",
                January: "Stycze\u0144",
                February: "Luty",
                March: "Marzec",
                April: "Kwiecie\u0144",
                May: "Maj",
                June: "Czerwiec",
                July: "Lipiec",
                August: "Sierpie\u0144",
                September: "Wrzesie\u0144",
                October: "Pa\u017adziernik",
                November: "Listopad",
                December: "Grudzie\u0144",
                jan: "sty",
                feb: "lut",
                mar: "mar",
                apr: "kwi",
                may: "maj",
                jun: "cze",
                jul: "lip",
                aug: "sie",
                sep: "wrz",
                oct: "pa\u017a",
                nov: "lis",
                dec: "gru",
                "&ldquo;": "&bdquo;",
                "&rdquo;": "&rdquo;"
            }
        },
        Y = {
            keyword: {
                table: "t\xe1bl\xe1zat",
                figure: "\xe1bra",
                m: "lista",
                diagram: "diagramm",
                contents: "Tartalomjegyz\xe9k",
                sec: "fej",
                section: "fejezet",
                subsection: "alfejezet",
                Monday: "h\xe9tf\u0151",
                Tuesday: "kedd",
                Wednesday: "szerda",
                Thursday: "cs\xfct\xf6rt\xf6k",
                Friday: "p\xe9ntek",
                Saturday: "szombat",
                Sunday: "vas\xe1rnap",
                January: "janu\xe1r",
                February: "febru\xe1r",
                March: "m\xe1rcius",
                April: "\xe1prilis",
                May: "m\xe1jus",
                June: "j\xfanius",
                July: "j\xfalius",
                August: "augusztus",
                September: "szeptember",
                October: "okt\xf3ber",
                November: "november",
                December: "december",
                jan: "jan",
                feb: "febr",
                mar: "m\xe1rc",
                apr: "\xe1pr",
                may: "m\xe1j",
                jun: "j\xfan",
                jul: "j\xfal",
                aug: "aug",
                sep: "szept",
                oct: "okt",
                nov: "nov",
                dec: "dec",
                "&ldquo;": "&bdquo;",
                "&rdquo;": "&rdquo;"
            }
        },
        ee = {
            keyword: {
                table: "\u8868",
                figure: "\u56f3",
                m: "\u4e00\u89a7",
                diagram: "\u56f3",
                contents: "\u76ee\u6b21",
                sec: "\u7ae0",
                section: "\u7bc0",
                subsection: "\u9805",
                Monday: "\u6708",
                Tuesday: "\u706b",
                Wednesday: "\u6c34",
                Thursday: "\u6728",
                Friday: "\u91d1",
                Saturday: "\u571f",
                Sunday: "\u65e5",
                January: "1\u6708",
                February: "2\u6708",
                March: "3\u6708",
                April: "4\u6708",
                May: "5\u6708",
                June: "6\u6708",
                July: "7\u6708",
                August: "8\u6708",
                September: "9\u6708",
                October: "10\u6708",
                November: "11\u6708",
                December: "12\u6708",
                jan: "1\u6708",
                feb: "2\u6708",
                mar: "3\u6708",
                apr: "4\u6708",
                may: "5\u6708",
                jun: "6\u6708",
                jul: "7\u6708",
                aug: "8\u6708",
                sep: "9\u6708",
                oct: "10\u6708",
                nov: "11\u6708",
                dec: "12\u6708",
                "&ldquo;": "\u300c",
                "&rdquo;": "\u300d"
            }
        },
        te = {
            keyword: {
                table: "Tabelle",
                figure: "Abbildung",
                m: "Auflistung",
                diagram: "Diagramm",
                contents: "Inhaltsverzeichnis",
                sec: "Kap",
                section: "Kapitel",
                subsection: "Unterabschnitt",
                Monday: "Montag",
                Tuesday: "Dienstag",
                Wednesday: "Mittwoch",
                Thursday: "Donnerstag",
                Friday: "Freitag",
                Saturday: "Samstag",
                Sunday: "Sonntag",
                January: "Januar",
                February: "Februar",
                March: "M\xe4rz",
                April: "April",
                May: "Mai",
                June: "Juni",
                July: "Juli",
                August: "August",
                September: "September",
                October: "Oktober",
                November: "November",
                December: "Dezember",
                jan: "Jan",
                feb: "Feb",
                mar: "M\xe4r",
                apr: "Apr",
                may: "Mai",
                jun: "Jun",
                jul: "Jul",
                aug: "Aug",
                sep: "Sep",
                oct: "Okt",
                nov: "Nov",
                dec: "Dez",
                "&ldquo;": "&bdquo;",
                "&rdquo;": "&ldquo;"
            }
        },
        re = {
            keyword: {
                table: "tabell",
                figure: "illustration",
                m: "lista",
                diagram: "diagram",
                contents: "inneh\xe5llsf\xf6rteckning",
                sec: "kap",
                section: "kapitel",
                subsection: "avsnitt",
                Monday: "m\xe5ndag",
                Tuesday: "tisdag",
                Wednesday: "onsdag",
                Thursday: "torsdag",
                Friday: "fredag",
                Saturday: "l\xf6rdag",
                Sunday: "s\xf6ndag",
                January: "januari",
                February: "februari",
                March: "mars",
                April: "april",
                May: "maj",
                June: "juni",
                July: "juli",
                August: "augusti",
                September: "september",
                October: "oktober",
                November: "november",
                December: "december",
                jan: "jan",
                feb: "feb",
                mar: "mar",
                apr: "apr",
                may: "maj",
                jun: "jun",
                jul: "jul",
                aug: "aug",
                sep: "sep",
                oct: "okt",
                nov: "nov",
                dec: "dec",
                "&ldquo;": "&rdquo;",
                "&rdquo;": "&rdquo;"
            }
        },
        ne = {
            mode: "markdeep",
            detectMath: !0,
            lang: {
                keyword: {}
            },
            tocStyle: "auto",
            hideEmptyWeekends: !0,
            showLabels: !1,
            o: !0,
            captionAbove: {
                diagram: !1,
                image: !1,
                table: !1,
                m: !1
            }
        },
        ae = {
            en: {
                keyword: {}
            },
            ru: Q,
            fr: W,
            pl: X,
            bg: Z,
            de: te,
            hu: Y,
            sv: re,
            pt: G,
            ja: ee,
            it: K,
            lt: V,
            cz: J
        };
    [].slice.call(document.getElementsByTagName("meta")).forEach(function(e) {
        var t = e.getAttribute("lang");
        if (t) {
            var r = ae[t];
            r && (ne.lang = r)
        }
    });
    var ie = Math.max,
        se = Math.min,
        oe = Math.abs,
        ce = Math.sign || function(e) {
            return +e === e ? 0 === e ? e : e > 0 ? 1 : -1 : NaN
        },
        le = "<style>.hljs{display:block;overflow-x:auto;padding:0.5em;background:#fff;color:#000;-webkit-text-size-adjust:none}.hljs-comment{color:#006a00}.hljs-keyword{color:#02E}.hljs-literal,.nginx .hljs-title{color:#aa0d91}.method,.hljs-list .hljs-title,.hljs-tag .hljs-title,.setting .hljs-value,.hljs-winutils,.tex .hljs-command,.http .hljs-title,.hljs-request,.hljs-status,.hljs-name{color:#008}.hljs-envvar,.tex .hljs-special{color:#660}.hljs-string{color:#c41a16}.hljs-tag .hljs-value,.hljs-cdata,.hljs-filter .hljs-argument,.hljs-attr_selector,.apache .hljs-cbracket,.hljs-date,.hljs-regexp{color:#080}.hljs-sub .hljs-identifier,.hljs-pi,.hljs-tag,.hljs-tag .hljs-keyword,.hljs-decorator,.ini .hljs-title,.hljs-shebang,.hljs-prompt,.hljs-hexcolor,.hljs-rule .hljs-value,.hljs-symbol,.hljs-symbol .hljs-string,.hljs-number,.css .hljs-function,.hljs-function .hljs-title,.coffeescript .hljs-attribute{color:#A0C}.hljs-function .hljs-title{font-weight:bold;color:#000}.hljs-class .hljs-title,.smalltalk .hljs-class,.hljs-type,.hljs-typename,.hljs-tag .hljs-attribute,.hljs-doctype,.hljs-class .hljs-id,.hljs-built_in,.setting,.hljs-params,.clojure .hljs-attribute{color:#5c2699}.hljs-variable{color:#3f6e74}.css .hljs-tag,.hljs-rule .hljs-property,.hljs-pseudo,.hljs-subst{color:#000}.css .hljs-class,.css .hljs-id{color:#9b703f}.hljs-value .hljs-important{color:#ff7700;font-weight:bold}.hljs-rule .hljs-keyword{color:#c5af75}.hljs-annotation,.apache .hljs-sqbracket,.nginx .hljs-built_in{color:#9b859d}.hljs-preprocessor,.hljs-preprocessor *,.hljs-pragma{color:#643820}.tex .hljs-formula{background-color:#eee;font-style:italic}.diff .hljs-header,.hljs-chunk{color:#808080;font-weight:bold}.diff .hljs-change{background-color:#bccff9}.hljs-addition{background-color:#baeeba}.hljs-deletion{background-color:#ffc8bd}.hljs-comment .hljs-doctag{font-weight:bold}.method .hljs-id{color:#000}</style>";
    if (!window.alreadyProcessedMarkdeep) {
        window.alreadyProcessedMarkdeep = !0;
        var ue = window.location.href.search(/\?.*noformat.*/i) !== -1;
        window.markdeep = Object.freeze({
            format: v,
            formatDiagram: M,
            stylesheet: function() {
                return P + l() + le
            }
        });
        var de = '<script type="text/x-mathjax-config">MathJax.Hub.Config({ TeX: { equationNumbers: {autoNumber: "AMS"} } });</script><span style="display:none">' + "$$NC{\\n}{\\hat{n}}NC{\\thetai}{\\theta_\\mathrm{i}}NC{\\thetao}{\\theta_\\mathrm{o}}NC{\\d}[1]{\\mathrm{d}#1}NC{\\w}{\\hat{\\omega}}NC{\\wi}{\\w_\\mathrm{i}}NC{\\wo}{\\w_\\mathrm{o}}NC{\\wh}{\\w_\\mathrm{h}}NC{\\Li}{L_\\mathrm{i}}NC{\\Lo}{L_\\mathrm{o}}NC{\\Le}{L_\\mathrm{e}}NC{\\Lr}{L_\\mathrm{r}}NC{\\Lt}{L_\\mathrm{t}}NC{\\O}{\\mathrm{O}}NC{\\degrees}{{^{\\large\\circ}}}NC{\\T}{\\mathsf{T}}NC{\\mathset}[1]{\\mathbb{#1}}NC{\\Real}{\\mathset{R}}NC{\\Integer}{\\mathset{Z}}NC{\\Boolean}{\\mathset{B}}NC{\\Complex}{\\mathset{C}}NC{\\un}[1]{\\,\\mathrm{#1}}$$\n".rp(/NC/g, "\\newcommand") + "</span>\n",
            pe = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML",
            me = r("mode");
        switch (me) {
            case "script":
                return;
            case "html":
            case "doxygen":
                A(document.getElementsByClassName("diagram")).concat(A(document.getElementsByTagName("diagram"))).forEach(function(e) {
                    var t = s(e.innerHTML);
                    t = t.rp(/(:?^[ \t]*\n)|(:?\n[ \t]*)$/g, ""), "doxygen" === me && (t = t.rp(RegExp("\u2013", "g"), "--"), t = t.rp(RegExp("\u2014", "g"), "---"), t = t.rp(/<a class="el" .*>(.*)<\/a>/g, "$1")), e.outerHTML = '<center class="md">' + M(C(t), "") + "</center>"
                });
                var ge = !1;
                return A(document.getElementsByClassName("markdeep")).concat(A(document.getElementsByTagName("markdeep"))).forEach(function(e) {
                    var t = document.createElement("div"),
                        r = v(C(s(e.innerHTML)), !0);
                    ge = ge || S(r), t.innerHTML = r, e.parentNode.replaceChild(t, e)
                }), document.head.innerHTML = window.markdeep.stylesheet() + document.head.innerHTML + (ge ? de : ""), void E()
        }
        ue || (A(document.getElementsByTagName("script")).forEach(function(e) {
            k(e.src) && e.parentNode.removeChild(e)
        }), document.body.style.visibility = "hidden");
        var be = u(document.body);
        if (ue) {
            be = be.rp(/<!-- Markdeep:.+$/gm, "") + H, be = be.rp(/</g, "&lt;").rp(/>/g, "&gt;"), document.body.innerHTML = e("pre", be);
            for (var fe = document.getElementsByClassName("fallback"), he = 0; he < fe.length; ++he) fe[he].remove();
            return
        }
        var ye = function() {
                var t = u(document.body),
                    r = v(t, !1),
                    n = S(r);
                n && (r = de + r), r += B;
                var a = t.length > 1e3,
                    s = F + P + l() + le;
                if (a && (s += e("style", "div.title { padding-top: 40px; } div.afterTitles { height: 15px; }")), window.location.href.search(/\?.*export.*/i) !== -1) {
                    var o = '<meta charset="UTF-8"><meta http-equiv="content-type" content="text/html;charset=UTF-8">' + s + document.head.innerHTML + r;
                    n && (o += '<script src="' + pe + '"></script>'), document.body.innerHTML = e("pre", i(o))
                } else document.head.innerHTML = '<meta charset="UTF-8"><meta http-equiv="content-type" content="text/html;charset=UTF-8">' + s + document.head.innerHTML, document.body.innerHTML = r, n && E();
                document.body.style.visibility = "visible"
            },
            xe = /([^?]+)(?:\?id=(inc\d+)&p=([^&]+))?/.exec(location.href),
            ve = j(xe[1]),
            _e = xe[2],
            we = (j(xe[3] && decodeURIComponent(xe[3])), "display:none"),
            Ce = 0,
            Ne = _e,
            Me = !1,
            ke = 0,
            Ae = function(e) {
                var t = !1,
                    r = e.data.substring && e.data.replace(/^(inc\d+)=/, function(e, r) {
                        return t = r, ""
                    });
                if (t) {
                    var n = document.getElementById(t);
                    n.outerHTML = "\n" + r + "\n", --ke, ke <= 0 && (Ne ? T() : setTimeout(ye, 1))
                }
            };
        be = be.rp(/(?:^|\s)\(insert[ \t]+(\S+\.\S*)[ \t]+here\)\s/g, function(e, t) {
            0 === ke && (Me = !0, addEventListener("message", Ae)), ++ke;
            var r = "inc" + ++Ce;
            return '<iframe src="' + t + "?id=" + r + "&p=" + encodeURIComponent(ve) + '" id="' + r + '" style="' + we + '" content="text/html;charset=UTF-8"></iframe>'
        }), Me ? document.body.innerHTML = be : Ne ? T() : setTimeout(ye, 1)
    }
}();
