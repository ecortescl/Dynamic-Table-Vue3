import { openBlock as ye, createElementBlock as Ce, createElementVNode as fe, withDirectives as g0, vModelText as rs, Fragment as Nr, renderList as Pr, toDisplayString as nt, createTextVNode as ts, normalizeClass as Kt, createCommentVNode as Et, vModelSelect as ns, withModifiers as wt } from "vue";
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var en = {};
en.version = "0.18.5";
var ia = 1252, as = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], sa = function(e) {
  as.indexOf(e) != -1 && (ia = e);
};
function is() {
  sa(1252);
}
var Rt = function(e) {
  sa(e);
};
function ss() {
  Rt(1200), is();
}
function fs(e) {
  for (var t = [], r = 0; r < e.length >> 1; ++r)
    t[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
  return t.join("");
}
var zt = function(t) {
  return String.fromCharCode(t);
}, _0 = function(t) {
  return String.fromCharCode(t);
}, Kr, Mr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function It(e) {
  for (var t = "", r = 0, n = 0, a = 0, i = 0, s = 0, f = 0, o = 0, l = 0; l < e.length; )
    r = e.charCodeAt(l++), i = r >> 2, n = e.charCodeAt(l++), s = (r & 3) << 4 | n >> 4, a = e.charCodeAt(l++), f = (n & 15) << 2 | a >> 6, o = a & 63, isNaN(n) ? f = o = 64 : isNaN(a) && (o = 64), t += Mr.charAt(i) + Mr.charAt(s) + Mr.charAt(f) + Mr.charAt(o);
  return t;
}
function kr(e) {
  var t = "", r = 0, n = 0, a = 0, i = 0, s = 0, f = 0, o = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var l = 0; l < e.length; )
    i = Mr.indexOf(e.charAt(l++)), s = Mr.indexOf(e.charAt(l++)), r = i << 2 | s >> 4, t += String.fromCharCode(r), f = Mr.indexOf(e.charAt(l++)), n = (s & 15) << 4 | f >> 2, f !== 64 && (t += String.fromCharCode(n)), o = Mr.indexOf(e.charAt(l++)), a = (f & 3) << 6 | o, o !== 64 && (t += String.fromCharCode(a));
  return t;
}
var xe = /* @__PURE__ */ function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
}(), Ir = /* @__PURE__ */ function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e)
      try {
        Buffer.from("foo", "utf8");
      } catch {
        e = !0;
      }
    return e ? function(t, r) {
      return r ? new Buffer(t, r) : new Buffer(t);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
}();
function Yr(e) {
  return xe ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function T0(e) {
  return xe ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var pr = function(t) {
  return xe ? Ir(t, "binary") : t.split("").map(function(r) {
    return r.charCodeAt(0) & 255;
  });
};
function vn(e) {
  if (typeof ArrayBuffer > "u")
    return pr(e);
  for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n != e.length; ++n)
    r[n] = e.charCodeAt(n) & 255;
  return t;
}
function Bt(e) {
  if (Array.isArray(e))
    return e.map(function(n) {
      return String.fromCharCode(n);
    }).join("");
  for (var t = [], r = 0; r < e.length; ++r)
    t[r] = String.fromCharCode(e[r]);
  return t.join("");
}
function ls(e) {
  if (typeof Uint8Array > "u")
    throw new Error("Unsupported");
  return new Uint8Array(e);
}
var Ve = xe ? function(e) {
  return Buffer.concat(e.map(function(t) {
    return Buffer.isBuffer(t) ? t : Ir(t);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var t = 0, r = 0;
    for (t = 0; t < e.length; ++t)
      r += e[t].length;
    var n = new Uint8Array(r), a = 0;
    for (t = 0, r = 0; t < e.length; r += a, ++t)
      if (a = e[t].length, e[t] instanceof Uint8Array)
        n.set(e[t], r);
      else {
        if (typeof e[t] == "string")
          throw "wtf";
        n.set(new Uint8Array(e[t]), r);
      }
    return n;
  }
  return [].concat.apply([], e.map(function(i) {
    return Array.isArray(i) ? i : [].slice.call(i);
  }));
};
function os(e) {
  for (var t = [], r = 0, n = e.length + 250, a = Yr(e.length + 255), i = 0; i < e.length; ++i) {
    var s = e.charCodeAt(i);
    if (s < 128)
      a[r++] = s;
    else if (s < 2048)
      a[r++] = 192 | s >> 6 & 31, a[r++] = 128 | s & 63;
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var f = e.charCodeAt(++i) & 1023;
      a[r++] = 240 | s >> 8 & 7, a[r++] = 128 | s >> 2 & 63, a[r++] = 128 | f >> 6 & 15 | (s & 3) << 4, a[r++] = 128 | f & 63;
    } else
      a[r++] = 224 | s >> 12 & 15, a[r++] = 128 | s >> 6 & 63, a[r++] = 128 | s & 63;
    r > n && (t.push(a.slice(0, r)), r = 0, a = Yr(65535), n = 65530);
  }
  return t.push(a.slice(0, r)), Ve(t);
}
var Ft = /\u0000/g, jt = /[\u0001-\u0006]/g;
function ot(e) {
  for (var t = "", r = e.length - 1; r >= 0; )
    t += e.charAt(r--);
  return t;
}
function mr(e, t) {
  var r = "" + e;
  return r.length >= t ? r : Oe("0", t - r.length) + r;
}
function Hn(e, t) {
  var r = "" + e;
  return r.length >= t ? r : Oe(" ", t - r.length) + r;
}
function rn(e, t) {
  var r = "" + e;
  return r.length >= t ? r : r + Oe(" ", t - r.length);
}
function cs(e, t) {
  var r = "" + Math.round(e);
  return r.length >= t ? r : Oe("0", t - r.length) + r;
}
function hs(e, t) {
  var r = "" + e;
  return r.length >= t ? r : Oe("0", t - r.length) + r;
}
var E0 = /* @__PURE__ */ Math.pow(2, 32);
function at(e, t) {
  if (e > E0 || e < -E0)
    return cs(e, t);
  var r = Math.round(e);
  return hs(r, t);
}
function tn(e, t) {
  return t = t || 0, e.length >= 7 + t && (e.charCodeAt(t) | 32) === 103 && (e.charCodeAt(t + 1) | 32) === 101 && (e.charCodeAt(t + 2) | 32) === 110 && (e.charCodeAt(t + 3) | 32) === 101 && (e.charCodeAt(t + 4) | 32) === 114 && (e.charCodeAt(t + 5) | 32) === 97 && (e.charCodeAt(t + 6) | 32) === 108;
}
var w0 = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
], On = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function us(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "', e;
}
var De = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
}, S0 = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  //  5 -> 37 ...  8 -> 40
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  // 23 ->  0 ... 26 ->  0
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  // 27 -> 14 ... 31 -> 14
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  // 50 -> 14 ... 58 -> 14
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  // 59 ->  1 ... 62 ->  4
  67: 9,
  68: 10,
  // 67 ->  9 ... 68 -> 10
  69: 12,
  70: 13,
  71: 14,
  // 69 -> 12 ... 71 -> 14
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  // 72 -> 14 ... 75 -> 17
  76: 20,
  77: 21,
  78: 22,
  // 76 -> 20 ... 78 -> 22
  79: 45,
  80: 46,
  81: 47,
  // 79 -> 45 ... 81 -> 47
  82: 0
  // 82 ->  0 ... 65536 -> 0 (omitted)
}, xs = {
  //  5 -- Currency,   0 decimal, black negative
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  //  6 -- Currency,   0 decimal, red   negative
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  //  7 -- Currency,   2 decimal, black negative
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  //  8 -- Currency,   2 decimal, red   negative
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  // 41 -- Accounting, 0 decimal, No Symbol
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  // 42 -- Accounting, 0 decimal, $  Symbol
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  // 43 -- Accounting, 2 decimal, No Symbol
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  // 44 -- Accounting, 2 decimal, $  Symbol
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function nn(e, t, r) {
  for (var n = e < 0 ? -1 : 1, a = e * n, i = 0, s = 1, f = 0, o = 1, l = 0, c = 0, v = Math.floor(a); l < t && (v = Math.floor(a), f = v * s + i, c = v * l + o, !(a - v < 5e-8)); )
    a = 1 / (a - v), i = s, s = f, o = l, l = c;
  if (c > t && (l > t ? (c = o, f = i) : (c = l, f = s)), !r)
    return [0, n * f, c];
  var x = Math.floor(n * f / c);
  return [x, n * f - x * c, c];
}
function Yt(e, t, r) {
  if (e > 2958465 || e < 0)
    return null;
  var n = e | 0, a = Math.floor(86400 * (e - n)), i = 0, s = [], f = { D: n, T: a, u: 86400 * (e - n) - a, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(f.u) < 1e-6 && (f.u = 0), t && t.date1904 && (n += 1462), f.u > 0.9999 && (f.u = 0, ++a == 86400 && (f.T = a = 0, ++n, ++f.D)), n === 60)
    s = r ? [1317, 10, 29] : [1900, 2, 29], i = 3;
  else if (n === 0)
    s = r ? [1317, 8, 29] : [1900, 1, 0], i = 6;
  else {
    n > 60 && --n;
    var o = new Date(1900, 0, 1);
    o.setDate(o.getDate() + n - 1), s = [o.getFullYear(), o.getMonth() + 1, o.getDate()], i = o.getDay(), n < 60 && (i = (i + 6) % 7), r && (i = Ts(o, s));
  }
  return f.y = s[0], f.m = s[1], f.d = s[2], f.S = a % 60, a = Math.floor(a / 60), f.M = a % 60, a = Math.floor(a / 60), f.H = a, f.q = i, f;
}
var fa = /* @__PURE__ */ new Date(1899, 11, 31, 0, 0, 0), ds = /* @__PURE__ */ fa.getTime(), vs = /* @__PURE__ */ new Date(1900, 2, 1, 0, 0, 0);
function la(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  return t ? r -= 1461 * 24 * 60 * 60 * 1e3 : e >= vs && (r += 24 * 60 * 60 * 1e3), (r - (ds + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ fa.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
}
function Vn(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function ps(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function ms(e) {
  var t = e < 0 ? 12 : 11, r = Vn(e.toFixed(12));
  return r.length <= t || (r = e.toPrecision(10), r.length <= t) ? r : e.toExponential(5);
}
function gs(e) {
  var t = Vn(e.toFixed(11));
  return t.length > (e < 0 ? 12 : 11) || t === "0" || t === "-0" ? e.toPrecision(6) : t;
}
function _s(e) {
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), r;
  return t >= -4 && t <= -1 ? r = e.toPrecision(10 + t) : Math.abs(t) <= 9 ? r = ms(e) : t === 10 ? r = e.toFixed(10).substr(0, 12) : r = gs(e), Vn(ps(r.toUpperCase()));
}
function Bn(e, t) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : _s(e);
    case "undefined":
      return "";
    case "object":
      if (e == null)
        return "";
      if (e instanceof Date)
        return br(14, la(e, t && t.date1904), t);
  }
  throw new Error("unsupported value in General format: " + e);
}
function Ts(e, t) {
  t[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function Es(e, t, r, n) {
  var a = "", i = 0, s = 0, f = r.y, o, l = 0;
  switch (e) {
    case 98:
      f = r.y + 543;
    case 121:
      switch (t.length) {
        case 1:
        case 2:
          o = f % 100, l = 2;
          break;
        default:
          o = f % 1e4, l = 4;
          break;
      }
      break;
    case 109:
      switch (t.length) {
        case 1:
        case 2:
          o = r.m, l = t.length;
          break;
        case 3:
          return On[r.m - 1][1];
        case 5:
          return On[r.m - 1][0];
        default:
          return On[r.m - 1][2];
      }
      break;
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          o = r.d, l = t.length;
          break;
        case 3:
          return w0[r.q][0];
        default:
          return w0[r.q][1];
      }
      break;
    case 104:
      switch (t.length) {
        case 1:
        case 2:
          o = 1 + (r.H + 11) % 12, l = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 72:
      switch (t.length) {
        case 1:
        case 2:
          o = r.H, l = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 77:
      switch (t.length) {
        case 1:
        case 2:
          o = r.M, l = t.length;
          break;
        default:
          throw "bad minute format: " + t;
      }
      break;
    case 115:
      if (t != "s" && t != "ss" && t != ".0" && t != ".00" && t != ".000")
        throw "bad second format: " + t;
      return r.u === 0 && (t == "s" || t == "ss") ? mr(r.S, t.length) : (n >= 2 ? s = n === 3 ? 1e3 : 100 : s = n === 1 ? 10 : 1, i = Math.round(s * (r.S + r.u)), i >= 60 * s && (i = 0), t === "s" ? i === 0 ? "0" : "" + i / s : (a = mr(i, 2 + n), t === "ss" ? a.substr(0, 2) : "." + a.substr(2, t.length - 1)));
    case 90:
      switch (t) {
        case "[h]":
        case "[hh]":
          o = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          o = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          o = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw "bad abstime format: " + t;
      }
      l = t.length === 3 ? 1 : 2;
      break;
    case 101:
      o = f, l = 1;
      break;
  }
  var c = l > 0 ? mr(o, l) : "";
  return c;
}
function Br(e) {
  var t = 3;
  if (e.length <= t)
    return e;
  for (var r = e.length % t, n = e.substr(0, r); r != e.length; r += t)
    n += (n.length > 0 ? "," : "") + e.substr(r, t);
  return n;
}
var oa = /%/g;
function ws(e, t, r) {
  var n = t.replace(oa, ""), a = t.length - n.length;
  return Cr(e, n, r * Math.pow(10, 2 * a)) + Oe("%", a);
}
function Ss(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; )
    --n;
  return Cr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function ca(e, t) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0)
      return "0.0E+0";
    if (t < 0)
      return "-" + ca(e, -t);
    var a = e.indexOf(".");
    a === -1 && (a = e.indexOf("E"));
    var i = Math.floor(Math.log(t) * Math.LOG10E) % a;
    if (i < 0 && (i += a), r = (t / Math.pow(10, i)).toPrecision(n + 1 + (a + i) % a), r.indexOf("e") === -1) {
      var s = Math.floor(Math.log(t) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i) : r += "E+" + (s - i); r.substr(0, 2) === "0."; )
        r = r.charAt(0) + r.substr(2, a) + "." + r.substr(2 + a), r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, o, l, c) {
      return o + l + c.substr(0, (a + i) % a) + "." + c.substr(i) + "E";
    });
  } else
    r = t.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var ha = /# (\?+)( ?)\/( ?)(\d+)/;
function As(e, t, r) {
  var n = parseInt(e[4], 10), a = Math.round(t * n), i = Math.floor(a / n), s = a - i * n, f = n;
  return r + (i === 0 ? "" : "" + i) + " " + (s === 0 ? Oe(" ", e[1].length + 1 + e[4].length) : Hn(s, e[1].length) + e[2] + "/" + e[3] + mr(f, e[4].length));
}
function Fs(e, t, r) {
  return r + (t === 0 ? "" : "" + t) + Oe(" ", e[1].length + 2 + e[4].length);
}
var ua = /^#*0*\.([0#]+)/, xa = /\).*[0#]/, da = /\(###\) ###\\?-####/;
function Je(e) {
  for (var t = "", r, n = 0; n != e.length; ++n)
    switch (r = e.charCodeAt(n)) {
      case 35:
        break;
      case 63:
        t += " ";
        break;
      case 48:
        t += "0";
        break;
      default:
        t += String.fromCharCode(r);
    }
  return t;
}
function A0(e, t) {
  var r = Math.pow(10, t);
  return "" + Math.round(e * r) / r;
}
function F0(e, t) {
  var r = e - Math.floor(e), n = Math.pow(10, t);
  return t < ("" + Math.round(r * n)).length ? 0 : Math.round(r * n);
}
function ys(e, t) {
  return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0;
}
function Cs(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function cr(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(xa)) {
    var n = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? cr("n", n, r) : "(" + cr("n", n, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44)
    return Ss(e, t, r);
  if (t.indexOf("%") !== -1)
    return ws(e, t, r);
  if (t.indexOf("E") !== -1)
    return ca(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + cr(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var a, i, s, f, o = Math.abs(r), l = r < 0 ? "-" : "";
  if (t.match(/^00+$/))
    return l + at(o, t.length);
  if (t.match(/^[#?]+$/))
    return a = at(r, 0), a === "0" && (a = ""), a.length > t.length ? a : Je(t.substr(0, t.length - a.length)) + a;
  if (i = t.match(ha))
    return As(i, o, l);
  if (t.match(/^#+0+$/))
    return l + at(o, t.length - t.indexOf("0"));
  if (i = t.match(ua))
    return a = A0(r, i[1].length).replace(/^([^\.]+)$/, "$1." + Je(i[1])).replace(/\.$/, "." + Je(i[1])).replace(/\.(\d*)$/, function(E, u) {
      return "." + u + Oe("0", Je(
        /*::(*/
        i[1]
      ).length - u.length);
    }), t.indexOf("0.") !== -1 ? a : a.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), i = t.match(/^(0*)\.(#*)$/))
    return l + A0(o, i[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = t.match(/^#{1,3},##0(\.?)$/))
    return l + Br(at(o, 0));
  if (i = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + cr(e, t, -r) : Br("" + (Math.floor(r) + ys(r, i[1].length))) + "." + mr(F0(r, i[1].length), i[1].length);
  if (i = t.match(/^#,#*,#0/))
    return cr(e, t.replace(/^#,#*,/, ""), r);
  if (i = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return a = ot(cr(e, t.replace(/[\\-]/g, ""), r)), s = 0, ot(ot(t.replace(/\\/g, "")).replace(/[0#]/g, function(E) {
      return s < a.length ? a.charAt(s++) : E === "0" ? "0" : "";
    }));
  if (t.match(da))
    return a = cr(e, "##########", r), "(" + a.substr(0, 3) + ") " + a.substr(3, 3) + "-" + a.substr(6);
  var c = "";
  if (i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(
      /*::String(*/
      i[4].length,
      7
    ), f = nn(o, Math.pow(10, s) - 1, !1), a = "" + l, c = Cr(
      "n",
      /*::String(*/
      i[1],
      f[1]
    ), c.charAt(c.length - 1) == " " && (c = c.substr(0, c.length - 1) + "0"), a += c + /*::String(*/
    i[2] + "/" + /*::String(*/
    i[3], c = rn(f[2], s), c.length < i[4].length && (c = Je(i[4].substr(i[4].length - c.length)) + c), a += c, a;
  if (i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = nn(o, Math.pow(10, s) - 1, !0), l + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? Hn(f[1], s) + i[2] + "/" + i[3] + rn(f[2], s) : Oe(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = t.match(/^[#0?]+$/))
    return a = at(r, 0), t.length <= a.length ? a : Je(t.substr(0, t.length - a.length)) + a;
  if (i = t.match(/^([#0?]+)\.([#0]+)$/)) {
    a = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = a.indexOf(".");
    var v = t.indexOf(".") - s, x = t.length - a.length - v;
    return Je(t.substr(0, v) + a + t.substr(t.length - x));
  }
  if (i = t.match(/^00,000\.([#0]*0)$/))
    return s = F0(r, i[1].length), r < 0 ? "-" + cr(e, t, -r) : Br(Cs(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(E) {
      return "00," + (E.length < 3 ? mr(0, 3 - E.length) : "") + E;
    }) + "." + mr(s, i[1].length);
  switch (t) {
    case "###,##0.00":
      return cr(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var d = Br(at(o, 0));
      return d !== "0" ? l + d : "";
    case "###,###.00":
      return cr(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return cr(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + t + "|");
}
function Os(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; )
    --n;
  return Cr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function Ds(e, t, r) {
  var n = t.replace(oa, ""), a = t.length - n.length;
  return Cr(e, n, r * Math.pow(10, 2 * a)) + Oe("%", a);
}
function va(e, t) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0)
      return "0.0E+0";
    if (t < 0)
      return "-" + va(e, -t);
    var a = e.indexOf(".");
    a === -1 && (a = e.indexOf("E"));
    var i = Math.floor(Math.log(t) * Math.LOG10E) % a;
    if (i < 0 && (i += a), r = (t / Math.pow(10, i)).toPrecision(n + 1 + (a + i) % a), !r.match(/[Ee]/)) {
      var s = Math.floor(Math.log(t) * Math.LOG10E);
      r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i) : r += "E+" + (s - i), r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, o, l, c) {
      return o + l + c.substr(0, (a + i) % a) + "." + c.substr(i) + "E";
    });
  } else
    r = t.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function Tr(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(xa)) {
    var n = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Tr("n", n, r) : "(" + Tr("n", n, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44)
    return Os(e, t, r);
  if (t.indexOf("%") !== -1)
    return Ds(e, t, r);
  if (t.indexOf("E") !== -1)
    return va(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + Tr(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var a, i, s, f, o = Math.abs(r), l = r < 0 ? "-" : "";
  if (t.match(/^00+$/))
    return l + mr(o, t.length);
  if (t.match(/^[#?]+$/))
    return a = "" + r, r === 0 && (a = ""), a.length > t.length ? a : Je(t.substr(0, t.length - a.length)) + a;
  if (i = t.match(ha))
    return Fs(i, o, l);
  if (t.match(/^#+0+$/))
    return l + mr(o, t.length - t.indexOf("0"));
  if (i = t.match(ua))
    return a = ("" + r).replace(/^([^\.]+)$/, "$1." + Je(i[1])).replace(/\.$/, "." + Je(i[1])), a = a.replace(/\.(\d*)$/, function(E, u) {
      return "." + u + Oe("0", Je(i[1]).length - u.length);
    }), t.indexOf("0.") !== -1 ? a : a.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), i = t.match(/^(0*)\.(#*)$/))
    return l + ("" + o).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = t.match(/^#{1,3},##0(\.?)$/))
    return l + Br("" + o);
  if (i = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + Tr(e, t, -r) : Br("" + r) + "." + Oe("0", i[1].length);
  if (i = t.match(/^#,#*,#0/))
    return Tr(e, t.replace(/^#,#*,/, ""), r);
  if (i = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return a = ot(Tr(e, t.replace(/[\\-]/g, ""), r)), s = 0, ot(ot(t.replace(/\\/g, "")).replace(/[0#]/g, function(E) {
      return s < a.length ? a.charAt(s++) : E === "0" ? "0" : "";
    }));
  if (t.match(da))
    return a = Tr(e, "##########", r), "(" + a.substr(0, 3) + ") " + a.substr(3, 3) + "-" + a.substr(6);
  var c = "";
  if (i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(
      /*::String(*/
      i[4].length,
      7
    ), f = nn(o, Math.pow(10, s) - 1, !1), a = "" + l, c = Cr(
      "n",
      /*::String(*/
      i[1],
      f[1]
    ), c.charAt(c.length - 1) == " " && (c = c.substr(0, c.length - 1) + "0"), a += c + /*::String(*/
    i[2] + "/" + /*::String(*/
    i[3], c = rn(f[2], s), c.length < i[4].length && (c = Je(i[4].substr(i[4].length - c.length)) + c), a += c, a;
  if (i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = nn(o, Math.pow(10, s) - 1, !0), l + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? Hn(f[1], s) + i[2] + "/" + i[3] + rn(f[2], s) : Oe(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = t.match(/^[#0?]+$/))
    return a = "" + r, t.length <= a.length ? a : Je(t.substr(0, t.length - a.length)) + a;
  if (i = t.match(/^([#0]+)\.([#0]+)$/)) {
    a = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = a.indexOf(".");
    var v = t.indexOf(".") - s, x = t.length - a.length - v;
    return Je(t.substr(0, v) + a + t.substr(t.length - x));
  }
  if (i = t.match(/^00,000\.([#0]*0)$/))
    return r < 0 ? "-" + Tr(e, t, -r) : Br("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(E) {
      return "00," + (E.length < 3 ? mr(0, 3 - E.length) : "") + E;
    }) + "." + mr(0, i[1].length);
  switch (t) {
    case "###,###":
    case "##,###":
    case "#,###":
      var d = Br("" + o);
      return d !== "0" ? l + d : "";
    default:
      if (t.match(/\.[0#?]*$/))
        return Tr(e, t.slice(0, t.lastIndexOf(".")), r) + Je(t.slice(t.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + t + "|");
}
function Cr(e, t, r) {
  return (r | 0) === r ? Tr(e, t, r) : cr(e, t, r);
}
function ks(e) {
  for (var t = [], r = !1, n = 0, a = 0; n < e.length; ++n)
    switch (
      /*cc=*/
      e.charCodeAt(n)
    ) {
      case 34:
        r = !r;
        break;
      case 95:
      case 42:
      case 92:
        ++n;
        break;
      case 59:
        t[t.length] = e.substr(a, n - a), a = n + 1;
    }
  if (t[t.length] = e.substr(a), r === !0)
    throw new Error("Format |" + e + "| unterminated string ");
  return t;
}
var pa = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function ma(e) {
  for (var t = 0, r = "", n = ""; t < e.length; )
    switch (r = e.charAt(t)) {
      case "G":
        tn(e, t) && (t += 6), t++;
        break;
      case '"':
        for (
          ;
          /*cc=*/
          e.charCodeAt(++t) !== 34 && t < e.length;
        )
          ;
        ++t;
        break;
      case "\\":
        t += 2;
        break;
      case "_":
        t += 2;
        break;
      case "@":
        ++t;
        break;
      case "B":
      case "b":
        if (e.charAt(t + 1) === "1" || e.charAt(t + 1) === "2")
          return !0;
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "上":
        if (e.substr(t, 3).toUpperCase() === "A/P" || e.substr(t, 5).toUpperCase() === "AM/PM" || e.substr(t, 5).toUpperCase() === "上午/下午")
          return !0;
        ++t;
        break;
      case "[":
        for (n = r; e.charAt(t++) !== "]" && t < e.length; )
          n += e.charAt(t);
        if (n.match(pa))
          return !0;
        break;
      case ".":
      case "0":
      case "#":
        for (; t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || r == "\\" && e.charAt(t + 1) == "-" && "0#".indexOf(e.charAt(t + 2)) > -1); )
          ;
        break;
      case "?":
        for (; e.charAt(++t) === r; )
          ;
        break;
      case "*":
        ++t, (e.charAt(t) == " " || e.charAt(t) == "*") && ++t;
        break;
      case "(":
      case ")":
        ++t;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1; )
          ;
        break;
      case " ":
        ++t;
        break;
      default:
        ++t;
        break;
    }
  return !1;
}
function Rs(e, t, r, n) {
  for (var a = [], i = "", s = 0, f = "", o = "t", l, c, v, x = "H"; s < e.length; )
    switch (f = e.charAt(s)) {
      case "G":
        if (!tn(e, s))
          throw new Error("unrecognized character " + f + " in " + e);
        a[a.length] = { t: "G", v: "General" }, s += 7;
        break;
      case '"':
        for (i = ""; (v = e.charCodeAt(++s)) !== 34 && s < e.length; )
          i += String.fromCharCode(v);
        a[a.length] = { t: "t", v: i }, ++s;
        break;
      case "\\":
        var d = e.charAt(++s), E = d === "(" || d === ")" ? d : "t";
        a[a.length] = { t: E, v: d }, ++s;
        break;
      case "_":
        a[a.length] = { t: "t", v: " " }, s += 2;
        break;
      case "@":
        a[a.length] = { t: "T", v: t }, ++s;
        break;
      case "B":
      case "b":
        if (e.charAt(s + 1) === "1" || e.charAt(s + 1) === "2") {
          if (l == null && (l = Yt(t, r, e.charAt(s + 1) === "2"), l == null))
            return "";
          a[a.length] = { t: "X", v: e.substr(s, 2) }, o = f, s += 2;
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        f = f.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (t < 0 || l == null && (l = Yt(t, r), l == null))
          return "";
        for (i = f; ++s < e.length && e.charAt(s).toLowerCase() === f; )
          i += f;
        f === "m" && o.toLowerCase() === "h" && (f = "M"), f === "h" && (f = x), a[a.length] = { t: f, v: i }, o = f;
        break;
      case "A":
      case "a":
      case "上":
        var u = { t: f, v: f };
        if (l == null && (l = Yt(t, r)), e.substr(s, 3).toUpperCase() === "A/P" ? (l != null && (u.v = l.H >= 12 ? "P" : "A"), u.t = "T", x = "h", s += 3) : e.substr(s, 5).toUpperCase() === "AM/PM" ? (l != null && (u.v = l.H >= 12 ? "PM" : "AM"), u.t = "T", s += 5, x = "h") : e.substr(s, 5).toUpperCase() === "上午/下午" ? (l != null && (u.v = l.H >= 12 ? "下午" : "上午"), u.t = "T", s += 5, x = "h") : (u.t = "t", ++s), l == null && u.t === "T")
          return "";
        a[a.length] = u, o = f;
        break;
      case "[":
        for (i = f; e.charAt(s++) !== "]" && s < e.length; )
          i += e.charAt(s);
        if (i.slice(-1) !== "]")
          throw 'unterminated "[" block: |' + i + "|";
        if (i.match(pa)) {
          if (l == null && (l = Yt(t, r), l == null))
            return "";
          a[a.length] = { t: "Z", v: i.toLowerCase() }, o = i.charAt(1);
        } else
          i.indexOf("$") > -1 && (i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$", ma(e) || (a[a.length] = { t: "t", v: i }));
        break;
      case ".":
        if (l != null) {
          for (i = f; ++s < e.length && (f = e.charAt(s)) === "0"; )
            i += f;
          a[a.length] = { t: "s", v: i };
          break;
        }
      case "0":
      case "#":
        for (i = f; ++s < e.length && "0#?.,E+-%".indexOf(f = e.charAt(s)) > -1; )
          i += f;
        a[a.length] = { t: "n", v: i };
        break;
      case "?":
        for (i = f; e.charAt(++s) === f; )
          i += f;
        a[a.length] = { t: f, v: i }, o = f;
        break;
      case "*":
        ++s, (e.charAt(s) == " " || e.charAt(s) == "*") && ++s;
        break;
      case "(":
      case ")":
        a[a.length] = { t: n === 1 ? "t" : f, v: f }, ++s;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (i = f; s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1; )
          i += e.charAt(s);
        a[a.length] = { t: "D", v: i };
        break;
      case " ":
        a[a.length] = { t: f, v: f }, ++s;
        break;
      case "$":
        a[a.length] = { t: "t", v: "$" }, ++s;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(f) === -1)
          throw new Error("unrecognized character " + f + " in " + e);
        a[a.length] = { t: "t", v: f }, ++s;
        break;
    }
  var _ = 0, O = 0, k;
  for (s = a.length - 1, o = "t"; s >= 0; --s)
    switch (a[s].t) {
      case "h":
      case "H":
        a[s].t = x, o = "h", _ < 1 && (_ = 1);
        break;
      case "s":
        (k = a[s].v.match(/\.0+$/)) && (O = Math.max(O, k[0].length - 1)), _ < 3 && (_ = 3);
      case "d":
      case "y":
      case "M":
      case "e":
        o = a[s].t;
        break;
      case "m":
        o === "s" && (a[s].t = "M", _ < 2 && (_ = 2));
        break;
      case "X":
        break;
      case "Z":
        _ < 1 && a[s].v.match(/[Hh]/) && (_ = 1), _ < 2 && a[s].v.match(/[Mm]/) && (_ = 2), _ < 3 && a[s].v.match(/[Ss]/) && (_ = 3);
    }
  switch (_) {
    case 0:
      break;
    case 1:
      l.u >= 0.5 && (l.u = 0, ++l.S), l.S >= 60 && (l.S = 0, ++l.M), l.M >= 60 && (l.M = 0, ++l.H);
      break;
    case 2:
      l.u >= 0.5 && (l.u = 0, ++l.S), l.S >= 60 && (l.S = 0, ++l.M);
      break;
  }
  var y = "", M;
  for (s = 0; s < a.length; ++s)
    switch (a[s].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        a[s].v = "", a[s].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        a[s].v = Es(a[s].t.charCodeAt(0), a[s].v, l, O), a[s].t = "t";
        break;
      case "n":
      case "?":
        for (M = s + 1; a[M] != null && ((f = a[M].t) === "?" || f === "D" || (f === " " || f === "t") && a[M + 1] != null && (a[M + 1].t === "?" || a[M + 1].t === "t" && a[M + 1].v === "/") || a[s].t === "(" && (f === " " || f === "n" || f === ")") || f === "t" && (a[M].v === "/" || a[M].v === " " && a[M + 1] != null && a[M + 1].t == "?")); )
          a[s].v += a[M].v, a[M] = { v: "", t: ";" }, ++M;
        y += a[s].v, s = M - 1;
        break;
      case "G":
        a[s].t = "t", a[s].v = Bn(t, r);
        break;
    }
  var Y = "", ee, C;
  if (y.length > 0) {
    y.charCodeAt(0) == 40 ? (ee = t < 0 && y.charCodeAt(0) === 45 ? -t : t, C = Cr("n", y, ee)) : (ee = t < 0 && n > 1 ? -t : t, C = Cr("n", y, ee), ee < 0 && a[0] && a[0].t == "t" && (C = C.substr(1), a[0].v = "-" + a[0].v)), M = C.length - 1;
    var U = a.length;
    for (s = 0; s < a.length; ++s)
      if (a[s] != null && a[s].t != "t" && a[s].v.indexOf(".") > -1) {
        U = s;
        break;
      }
    var L = a.length;
    if (U === a.length && C.indexOf("E") === -1) {
      for (s = a.length - 1; s >= 0; --s)
        a[s] == null || "n?".indexOf(a[s].t) === -1 || (M >= a[s].v.length - 1 ? (M -= a[s].v.length, a[s].v = C.substr(M + 1, a[s].v.length)) : M < 0 ? a[s].v = "" : (a[s].v = C.substr(0, M + 1), M = -1), a[s].t = "t", L = s);
      M >= 0 && L < a.length && (a[L].v = C.substr(0, M + 1) + a[L].v);
    } else if (U !== a.length && C.indexOf("E") === -1) {
      for (M = C.indexOf(".") - 1, s = U; s >= 0; --s)
        if (!(a[s] == null || "n?".indexOf(a[s].t) === -1)) {
          for (c = a[s].v.indexOf(".") > -1 && s === U ? a[s].v.indexOf(".") - 1 : a[s].v.length - 1, Y = a[s].v.substr(c + 1); c >= 0; --c)
            M >= 0 && (a[s].v.charAt(c) === "0" || a[s].v.charAt(c) === "#") && (Y = C.charAt(M--) + Y);
          a[s].v = Y, a[s].t = "t", L = s;
        }
      for (M >= 0 && L < a.length && (a[L].v = C.substr(0, M + 1) + a[L].v), M = C.indexOf(".") + 1, s = U; s < a.length; ++s)
        if (!(a[s] == null || "n?(".indexOf(a[s].t) === -1 && s !== U)) {
          for (c = a[s].v.indexOf(".") > -1 && s === U ? a[s].v.indexOf(".") + 1 : 0, Y = a[s].v.substr(0, c); c < a[s].v.length; ++c)
            M < C.length && (Y += C.charAt(M++));
          a[s].v = Y, a[s].t = "t", L = s;
        }
    }
  }
  for (s = 0; s < a.length; ++s)
    a[s] != null && "n?".indexOf(a[s].t) > -1 && (ee = n > 1 && t < 0 && s > 0 && a[s - 1].v === "-" ? -t : t, a[s].v = Cr(a[s].t, a[s].v, ee), a[s].t = "t");
  var V = "";
  for (s = 0; s !== a.length; ++s)
    a[s] != null && (V += a[s].v);
  return V;
}
var y0 = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function C0(e, t) {
  if (t == null)
    return !1;
  var r = parseFloat(t[2]);
  switch (t[1]) {
    case "=":
      if (e == r)
        return !0;
      break;
    case ">":
      if (e > r)
        return !0;
      break;
    case "<":
      if (e < r)
        return !0;
      break;
    case "<>":
      if (e != r)
        return !0;
      break;
    case ">=":
      if (e >= r)
        return !0;
      break;
    case "<=":
      if (e <= r)
        return !0;
      break;
  }
  return !1;
}
function Is(e, t) {
  var r = ks(e), n = r.length, a = r[n - 1].indexOf("@");
  if (n < 4 && a > -1 && --n, r.length > 4)
    throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof t != "number")
    return [4, r.length === 4 || a > -1 ? r[r.length - 1] : "@"];
  switch (r.length) {
    case 1:
      r = a > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = a > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = a > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var i = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1)
    return [n, i];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var s = r[0].match(y0), f = r[1].match(y0);
    return C0(t, s) ? [n, r[0]] : C0(t, f) ? [n, r[1]] : [n, r[s != null && f != null ? 2 : 1]];
  }
  return [n, i];
}
function br(e, t, r) {
  r == null && (r = {});
  var n = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? n = r.dateNF : n = e;
      break;
    case "number":
      e == 14 && r.dateNF ? n = r.dateNF : n = (r.table != null ? r.table : De)[e], n == null && (n = r.table && r.table[S0[e]] || De[S0[e]]), n == null && (n = xs[e] || "General");
      break;
  }
  if (tn(n, 0))
    return Bn(t, r);
  t instanceof Date && (t = la(t, r.date1904));
  var a = Is(n, t);
  if (tn(a[1]))
    return Bn(t, r);
  if (t === !0)
    t = "TRUE";
  else if (t === !1)
    t = "FALSE";
  else if (t === "" || t == null)
    return "";
  return Rs(a[1], t, r, a[0]);
}
function ga(e, t) {
  if (typeof t != "number") {
    t = +t || -1;
    for (var r = 0; r < 392; ++r) {
      if (De[r] == null) {
        t < 0 && (t = r);
        continue;
      }
      if (De[r] == e) {
        t = r;
        break;
      }
    }
    t < 0 && (t = 391);
  }
  return De[t] = e, t;
}
function pn(e) {
  for (var t = 0; t != 392; ++t)
    e[t] !== void 0 && ga(e[t], t);
}
function mn() {
  De = us();
}
var _a = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function Ns(e) {
  var t = typeof e == "number" ? De[e] : e;
  return t = t.replace(_a, "(\\d+)"), new RegExp("^" + t + "$");
}
function Ps(e, t, r) {
  var n = -1, a = -1, i = -1, s = -1, f = -1, o = -1;
  (t.match(_a) || []).forEach(function(v, x) {
    var d = parseInt(r[x + 1], 10);
    switch (v.toLowerCase().charAt(0)) {
      case "y":
        n = d;
        break;
      case "d":
        i = d;
        break;
      case "h":
        s = d;
        break;
      case "s":
        o = d;
        break;
      case "m":
        s >= 0 ? f = d : a = d;
        break;
    }
  }), o >= 0 && f == -1 && a >= 0 && (f = a, a = -1);
  var l = ("" + (n >= 0 ? n : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (a >= 1 ? a : 1)).slice(-2) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2);
  l.length == 7 && (l = "0" + l), l.length == 8 && (l = "20" + l);
  var c = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2) + ":" + ("00" + (o >= 0 ? o : 0)).slice(-2);
  return s == -1 && f == -1 && o == -1 ? l : n == -1 && a == -1 && i == -1 ? c : l + "T" + c;
}
var Ls = /* @__PURE__ */ function() {
  var e = {};
  e.version = "1.2.0";
  function t() {
    for (var C = 0, U = new Array(256), L = 0; L != 256; ++L)
      C = L, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, U[L] = C;
    return typeof Int32Array < "u" ? new Int32Array(U) : U;
  }
  var r = t();
  function n(C) {
    var U = 0, L = 0, V = 0, G = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (V = 0; V != 256; ++V)
      G[V] = C[V];
    for (V = 0; V != 256; ++V)
      for (L = C[V], U = 256 + V; U < 4096; U += 256)
        L = G[U] = L >>> 8 ^ C[L & 255];
    var K = [];
    for (V = 1; V != 16; ++V)
      K[V - 1] = typeof Int32Array < "u" ? G.subarray(V * 256, V * 256 + 256) : G.slice(V * 256, V * 256 + 256);
    return K;
  }
  var a = n(r), i = a[0], s = a[1], f = a[2], o = a[3], l = a[4], c = a[5], v = a[6], x = a[7], d = a[8], E = a[9], u = a[10], _ = a[11], O = a[12], k = a[13], y = a[14];
  function M(C, U) {
    for (var L = U ^ -1, V = 0, G = C.length; V < G; )
      L = L >>> 8 ^ r[(L ^ C.charCodeAt(V++)) & 255];
    return ~L;
  }
  function Y(C, U) {
    for (var L = U ^ -1, V = C.length - 15, G = 0; G < V; )
      L = y[C[G++] ^ L & 255] ^ k[C[G++] ^ L >> 8 & 255] ^ O[C[G++] ^ L >> 16 & 255] ^ _[C[G++] ^ L >>> 24] ^ u[C[G++]] ^ E[C[G++]] ^ d[C[G++]] ^ x[C[G++]] ^ v[C[G++]] ^ c[C[G++]] ^ l[C[G++]] ^ o[C[G++]] ^ f[C[G++]] ^ s[C[G++]] ^ i[C[G++]] ^ r[C[G++]];
    for (V += 15; G < V; )
      L = L >>> 8 ^ r[(L ^ C[G++]) & 255];
    return ~L;
  }
  function ee(C, U) {
    for (var L = U ^ -1, V = 0, G = C.length, K = 0, re = 0; V < G; )
      K = C.charCodeAt(V++), K < 128 ? L = L >>> 8 ^ r[(L ^ K) & 255] : K < 2048 ? (L = L >>> 8 ^ r[(L ^ (192 | K >> 6 & 31)) & 255], L = L >>> 8 ^ r[(L ^ (128 | K & 63)) & 255]) : K >= 55296 && K < 57344 ? (K = (K & 1023) + 64, re = C.charCodeAt(V++) & 1023, L = L >>> 8 ^ r[(L ^ (240 | K >> 8 & 7)) & 255], L = L >>> 8 ^ r[(L ^ (128 | K >> 2 & 63)) & 255], L = L >>> 8 ^ r[(L ^ (128 | re >> 6 & 15 | (K & 3) << 4)) & 255], L = L >>> 8 ^ r[(L ^ (128 | re & 63)) & 255]) : (L = L >>> 8 ^ r[(L ^ (224 | K >> 12 & 15)) & 255], L = L >>> 8 ^ r[(L ^ (128 | K >> 6 & 63)) & 255], L = L >>> 8 ^ r[(L ^ (128 | K & 63)) & 255]);
    return ~L;
  }
  return e.table = r, e.bstr = M, e.buf = Y, e.str = ee, e;
}(), Te = /* @__PURE__ */ function() {
  var t = {};
  t.version = "1.2.1";
  function r(h, g) {
    for (var p = h.split("/"), m = g.split("/"), T = 0, w = 0, R = Math.min(p.length, m.length); T < R; ++T) {
      if (w = p[T].length - m[T].length)
        return w;
      if (p[T] != m[T])
        return p[T] < m[T] ? -1 : 1;
    }
    return p.length - m.length;
  }
  function n(h) {
    if (h.charAt(h.length - 1) == "/")
      return h.slice(0, -1).indexOf("/") === -1 ? h : n(h.slice(0, -1));
    var g = h.lastIndexOf("/");
    return g === -1 ? h : h.slice(0, g + 1);
  }
  function a(h) {
    if (h.charAt(h.length - 1) == "/")
      return a(h.slice(0, -1));
    var g = h.lastIndexOf("/");
    return g === -1 ? h : h.slice(g + 1);
  }
  function i(h, g) {
    typeof g == "string" && (g = new Date(g));
    var p = g.getHours();
    p = p << 6 | g.getMinutes(), p = p << 5 | g.getSeconds() >>> 1, h.write_shift(2, p);
    var m = g.getFullYear() - 1980;
    m = m << 4 | g.getMonth() + 1, m = m << 5 | g.getDate(), h.write_shift(2, m);
  }
  function s(h) {
    var g = h.read_shift(2) & 65535, p = h.read_shift(2) & 65535, m = /* @__PURE__ */ new Date(), T = p & 31;
    p >>>= 5;
    var w = p & 15;
    p >>>= 4, m.setMilliseconds(0), m.setFullYear(p + 1980), m.setMonth(w - 1), m.setDate(T);
    var R = g & 31;
    g >>>= 5;
    var b = g & 63;
    return g >>>= 6, m.setHours(g), m.setMinutes(b), m.setSeconds(R << 1), m;
  }
  function f(h) {
    ar(h, 0);
    for (var g = (
      /*::(*/
      {}
    ), p = 0; h.l <= h.length - 4; ) {
      var m = h.read_shift(2), T = h.read_shift(2), w = h.l + T, R = {};
      switch (m) {
        case 21589:
          p = h.read_shift(1), p & 1 && (R.mtime = h.read_shift(4)), T > 5 && (p & 2 && (R.atime = h.read_shift(4)), p & 4 && (R.ctime = h.read_shift(4))), R.mtime && (R.mt = new Date(R.mtime * 1e3));
          break;
      }
      h.l = w, g[m] = R;
    }
    return g;
  }
  var o;
  function l() {
    return o || (o = {});
  }
  function c(h, g) {
    if (h[0] == 80 && h[1] == 75)
      return m0(h, g);
    if ((h[0] | 32) == 109 && (h[1] | 32) == 105)
      return $i(h, g);
    if (h.length < 512)
      throw new Error("CFB file size " + h.length + " < 512");
    var p = 3, m = 512, T = 0, w = 0, R = 0, b = 0, D = 0, I = [], N = (
      /*::(*/
      h.slice(0, 512)
    );
    ar(N, 0);
    var X = v(N);
    switch (p = X[0], p) {
      case 3:
        m = 512;
        break;
      case 4:
        m = 4096;
        break;
      case 0:
        if (X[1] == 0)
          return m0(h, g);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + p);
    }
    m !== 512 && (N = /*::(*/
    h.slice(0, m), ar(
      N,
      28
      /* blob.l */
    ));
    var Z = h.slice(0, m);
    x(N, p);
    var te = N.read_shift(4, "i");
    if (p === 3 && te !== 0)
      throw new Error("# Directory Sectors: Expected 0 saw " + te);
    N.l += 4, R = N.read_shift(4, "i"), N.l += 4, N.chk("00100000", "Mini Stream Cutoff Size: "), b = N.read_shift(4, "i"), T = N.read_shift(4, "i"), D = N.read_shift(4, "i"), w = N.read_shift(4, "i");
    for (var z = -1, Q = 0; Q < 109 && (z = N.read_shift(4, "i"), !(z < 0)); ++Q)
      I[Q] = z;
    var le = d(h, m);
    _(D, w, le, m, I);
    var Se = k(le, R, I, m);
    Se[R].name = "!Directory", T > 0 && b !== re && (Se[b].name = "!MiniFAT"), Se[I[0]].name = "!FAT", Se.fat_addrs = I, Se.ssz = m;
    var Ae = {}, ze = [], gt = [], _t = [];
    y(R, Se, le, ze, T, Ae, gt, b), E(gt, _t, ze), ze.shift();
    var Tt = {
      FileIndex: gt,
      FullPaths: _t
    };
    return g && g.raw && (Tt.raw = { header: Z, sectors: le }), Tt;
  }
  function v(h) {
    if (h[h.l] == 80 && h[h.l + 1] == 75)
      return [0, 0];
    h.chk(_e, "Header Signature: "), h.l += 16;
    var g = h.read_shift(2, "u");
    return [h.read_shift(2, "u"), g];
  }
  function x(h, g) {
    var p = 9;
    switch (h.l += 2, p = h.read_shift(2)) {
      case 9:
        if (g != 3)
          throw new Error("Sector Shift: Expected 9 saw " + p);
        break;
      case 12:
        if (g != 4)
          throw new Error("Sector Shift: Expected 12 saw " + p);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + p);
    }
    h.chk("0600", "Mini Sector Shift: "), h.chk("000000000000", "Reserved: ");
  }
  function d(h, g) {
    for (var p = Math.ceil(h.length / g) - 1, m = [], T = 1; T < p; ++T)
      m[T - 1] = h.slice(T * g, (T + 1) * g);
    return m[p - 1] = h.slice(p * g), m;
  }
  function E(h, g, p) {
    for (var m = 0, T = 0, w = 0, R = 0, b = 0, D = p.length, I = [], N = []; m < D; ++m)
      I[m] = N[m] = m, g[m] = p[m];
    for (; b < N.length; ++b)
      m = N[b], T = h[m].L, w = h[m].R, R = h[m].C, I[m] === m && (T !== -1 && I[T] !== T && (I[m] = I[T]), w !== -1 && I[w] !== w && (I[m] = I[w])), R !== -1 && (I[R] = m), T !== -1 && m != I[m] && (I[T] = I[m], N.lastIndexOf(T) < b && N.push(T)), w !== -1 && m != I[m] && (I[w] = I[m], N.lastIndexOf(w) < b && N.push(w));
    for (m = 1; m < D; ++m)
      I[m] === m && (w !== -1 && I[w] !== w ? I[m] = I[w] : T !== -1 && I[T] !== T && (I[m] = I[T]));
    for (m = 1; m < D; ++m)
      if (h[m].type !== 0) {
        if (b = m, b != I[b])
          do
            b = I[b], g[m] = g[b] + "/" + g[m];
          while (b !== 0 && I[b] !== -1 && b != I[b]);
        I[m] = -1;
      }
    for (g[0] += "/", m = 1; m < D; ++m)
      h[m].type !== 2 && (g[m] += "/");
  }
  function u(h, g, p) {
    for (var m = h.start, T = h.size, w = [], R = m; p && T > 0 && R >= 0; )
      w.push(g.slice(R * K, R * K + K)), T -= K, R = zr(p, R * 4);
    return w.length === 0 ? B(0) : Ve(w).slice(0, h.size);
  }
  function _(h, g, p, m, T) {
    var w = re;
    if (h === re) {
      if (g !== 0)
        throw new Error("DIFAT chain shorter than expected");
    } else if (h !== -1) {
      var R = p[h], b = (m >>> 2) - 1;
      if (!R)
        return;
      for (var D = 0; D < b && (w = zr(R, D * 4)) !== re; ++D)
        T.push(w);
      _(zr(R, m - 4), g - 1, p, m, T);
    }
  }
  function O(h, g, p, m, T) {
    var w = [], R = [];
    T || (T = []);
    var b = m - 1, D = 0, I = 0;
    for (D = g; D >= 0; ) {
      T[D] = !0, w[w.length] = D, R.push(h[D]);
      var N = p[Math.floor(D * 4 / m)];
      if (I = D * 4 & b, m < 4 + I)
        throw new Error("FAT boundary crossed: " + D + " 4 " + m);
      if (!h[N])
        break;
      D = zr(h[N], I);
    }
    return { nodes: w, data: L0([R]) };
  }
  function k(h, g, p, m) {
    var T = h.length, w = [], R = [], b = [], D = [], I = m - 1, N = 0, X = 0, Z = 0, te = 0;
    for (N = 0; N < T; ++N)
      if (b = [], Z = N + g, Z >= T && (Z -= T), !R[Z]) {
        D = [];
        var z = [];
        for (X = Z; X >= 0; ) {
          z[X] = !0, R[X] = !0, b[b.length] = X, D.push(h[X]);
          var Q = p[Math.floor(X * 4 / m)];
          if (te = X * 4 & I, m < 4 + te)
            throw new Error("FAT boundary crossed: " + X + " 4 " + m);
          if (!h[Q] || (X = zr(h[Q], te), z[X]))
            break;
        }
        w[Z] = { nodes: b, data: L0([D]) };
      }
    return w;
  }
  function y(h, g, p, m, T, w, R, b) {
    for (var D = 0, I = m.length ? 2 : 0, N = g[h].data, X = 0, Z = 0, te; X < N.length; X += 128) {
      var z = (
        /*::(*/
        N.slice(X, X + 128)
      );
      ar(z, 64), Z = z.read_shift(2), te = jn(z, 0, Z - I), m.push(te);
      var Q = {
        name: te,
        type: z.read_shift(1),
        color: z.read_shift(1),
        L: z.read_shift(4, "i"),
        R: z.read_shift(4, "i"),
        C: z.read_shift(4, "i"),
        clsid: z.read_shift(16),
        state: z.read_shift(4, "i"),
        start: 0,
        size: 0
      }, le = z.read_shift(2) + z.read_shift(2) + z.read_shift(2) + z.read_shift(2);
      le !== 0 && (Q.ct = M(z, z.l - 8));
      var Se = z.read_shift(2) + z.read_shift(2) + z.read_shift(2) + z.read_shift(2);
      Se !== 0 && (Q.mt = M(z, z.l - 8)), Q.start = z.read_shift(4, "i"), Q.size = z.read_shift(4, "i"), Q.size < 0 && Q.start < 0 && (Q.size = Q.type = 0, Q.start = re, Q.name = ""), Q.type === 5 ? (D = Q.start, T > 0 && D !== re && (g[D].name = "!StreamData")) : Q.size >= 4096 ? (Q.storage = "fat", g[Q.start] === void 0 && (g[Q.start] = O(p, Q.start, g.fat_addrs, g.ssz)), g[Q.start].name = Q.name, Q.content = g[Q.start].data.slice(0, Q.size)) : (Q.storage = "minifat", Q.size < 0 ? Q.size = 0 : D !== re && Q.start !== re && g[D] && (Q.content = u(Q, g[D].data, (g[b] || {}).data))), Q.content && ar(Q.content, 0), w[te] = Q, R.push(Q);
    }
  }
  function M(h, g) {
    return new Date((sr(h, g + 4) / 1e7 * Math.pow(2, 32) + sr(h, g) / 1e7 - 11644473600) * 1e3);
  }
  function Y(h, g) {
    return l(), c(o.readFileSync(h), g);
  }
  function ee(h, g) {
    var p = g && g.type;
    switch (p || xe && Buffer.isBuffer(h) && (p = "buffer"), p || "base64") {
      case "file":
        return Y(h, g);
      case "base64":
        return c(pr(kr(h)), g);
      case "binary":
        return c(pr(h), g);
    }
    return c(
      /*::typeof blob == 'string' ? new Buffer(blob, 'utf-8') : */
      h,
      g
    );
  }
  function C(h, g) {
    var p = g || {}, m = p.root || "Root Entry";
    if (h.FullPaths || (h.FullPaths = []), h.FileIndex || (h.FileIndex = []), h.FullPaths.length !== h.FileIndex.length)
      throw new Error("inconsistent CFB structure");
    h.FullPaths.length === 0 && (h.FullPaths[0] = m + "/", h.FileIndex[0] = { name: m, type: 5 }), p.CLSID && (h.FileIndex[0].clsid = p.CLSID), U(h);
  }
  function U(h) {
    var g = "Sh33tJ5";
    if (!Te.find(h, "/" + g)) {
      var p = B(4);
      p[0] = 55, p[1] = p[3] = 50, p[2] = 54, h.FileIndex.push({ name: g, type: 2, content: p, size: 4, L: 69, R: 69, C: 69 }), h.FullPaths.push(h.FullPaths[0] + g), L(h);
    }
  }
  function L(h, g) {
    C(h);
    for (var p = !1, m = !1, T = h.FullPaths.length - 1; T >= 0; --T) {
      var w = h.FileIndex[T];
      switch (w.type) {
        case 0:
          m ? p = !0 : (h.FileIndex.pop(), h.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          m = !0, isNaN(w.R * w.L * w.C) && (p = !0), w.R > -1 && w.L > -1 && w.R == w.L && (p = !0);
          break;
        default:
          p = !0;
          break;
      }
    }
    if (!(!p && !g)) {
      var R = new Date(1987, 1, 19), b = 0, D = Object.create ? /* @__PURE__ */ Object.create(null) : {}, I = [];
      for (T = 0; T < h.FullPaths.length; ++T)
        D[h.FullPaths[T]] = !0, h.FileIndex[T].type !== 0 && I.push([h.FullPaths[T], h.FileIndex[T]]);
      for (T = 0; T < I.length; ++T) {
        var N = n(I[T][0]);
        m = D[N], m || (I.push([N, {
          name: a(N).replace("/", ""),
          type: 1,
          clsid: Ue,
          ct: R,
          mt: R,
          content: null
        }]), D[N] = !0);
      }
      for (I.sort(function(te, z) {
        return r(te[0], z[0]);
      }), h.FullPaths = [], h.FileIndex = [], T = 0; T < I.length; ++T)
        h.FullPaths[T] = I[T][0], h.FileIndex[T] = I[T][1];
      for (T = 0; T < I.length; ++T) {
        var X = h.FileIndex[T], Z = h.FullPaths[T];
        if (X.name = a(Z).replace("/", ""), X.L = X.R = X.C = -(X.color = 1), X.size = X.content ? X.content.length : 0, X.start = 0, X.clsid = X.clsid || Ue, T === 0)
          X.C = I.length > 1 ? 1 : -1, X.size = 0, X.type = 5;
        else if (Z.slice(-1) == "/") {
          for (b = T + 1; b < I.length && n(h.FullPaths[b]) != Z; ++b)
            ;
          for (X.C = b >= I.length ? -1 : b, b = T + 1; b < I.length && n(h.FullPaths[b]) != n(Z); ++b)
            ;
          X.R = b >= I.length ? -1 : b, X.type = 1;
        } else
          n(h.FullPaths[T + 1] || "") == n(Z) && (X.R = T + 1), X.type = 2;
      }
    }
  }
  function V(h, g) {
    var p = g || {};
    if (p.fileType == "mad")
      return Ji(h, p);
    switch (L(h), p.fileType) {
      case "zip":
        return Gi(h, p);
    }
    var m = function(te) {
      for (var z = 0, Q = 0, le = 0; le < te.FileIndex.length; ++le) {
        var Se = te.FileIndex[le];
        if (Se.content) {
          var Ae = Se.content.length;
          Ae > 0 && (Ae < 4096 ? z += Ae + 63 >> 6 : Q += Ae + 511 >> 9);
        }
      }
      for (var ze = te.FullPaths.length + 3 >> 2, gt = z + 7 >> 3, _t = z + 127 >> 7, Tt = gt + Q + ze + _t, Xr = Tt + 127 >> 7, Cn = Xr <= 109 ? 0 : Math.ceil((Xr - 109) / 127); Tt + Xr + Cn + 127 >> 7 > Xr; )
        Cn = ++Xr <= 109 ? 0 : Math.ceil((Xr - 109) / 127);
      var Fr = [1, Cn, Xr, _t, ze, Q, z, 0];
      return te.FileIndex[0].size = z << 6, Fr[7] = (te.FileIndex[0].start = Fr[0] + Fr[1] + Fr[2] + Fr[3] + Fr[4] + Fr[5]) + (Fr[6] + 7 >> 3), Fr;
    }(h), T = B(m[7] << 9), w = 0, R = 0;
    {
      for (w = 0; w < 8; ++w)
        T.write_shift(1, oe[w]);
      for (w = 0; w < 8; ++w)
        T.write_shift(2, 0);
      for (T.write_shift(2, 62), T.write_shift(2, 3), T.write_shift(2, 65534), T.write_shift(2, 9), T.write_shift(2, 6), w = 0; w < 3; ++w)
        T.write_shift(2, 0);
      for (T.write_shift(4, 0), T.write_shift(4, m[2]), T.write_shift(4, m[0] + m[1] + m[2] + m[3] - 1), T.write_shift(4, 0), T.write_shift(4, 4096), T.write_shift(4, m[3] ? m[0] + m[1] + m[2] - 1 : re), T.write_shift(4, m[3]), T.write_shift(-4, m[1] ? m[0] - 1 : re), T.write_shift(4, m[1]), w = 0; w < 109; ++w)
        T.write_shift(-4, w < m[2] ? m[1] + w : -1);
    }
    if (m[1])
      for (R = 0; R < m[1]; ++R) {
        for (; w < 236 + R * 127; ++w)
          T.write_shift(-4, w < m[2] ? m[1] + w : -1);
        T.write_shift(-4, R === m[1] - 1 ? re : R + 1);
      }
    var b = function(te) {
      for (R += te; w < R - 1; ++w)
        T.write_shift(-4, w + 1);
      te && (++w, T.write_shift(-4, re));
    };
    for (R = w = 0, R += m[1]; w < R; ++w)
      T.write_shift(-4, ke.DIFSECT);
    for (R += m[2]; w < R; ++w)
      T.write_shift(-4, ke.FATSECT);
    b(m[3]), b(m[4]);
    for (var D = 0, I = 0, N = h.FileIndex[0]; D < h.FileIndex.length; ++D)
      N = h.FileIndex[D], N.content && (I = N.content.length, !(I < 4096) && (N.start = R, b(I + 511 >> 9)));
    for (b(m[6] + 7 >> 3); T.l & 511; )
      T.write_shift(-4, ke.ENDOFCHAIN);
    for (R = w = 0, D = 0; D < h.FileIndex.length; ++D)
      N = h.FileIndex[D], N.content && (I = N.content.length, !(!I || I >= 4096) && (N.start = R, b(I + 63 >> 6)));
    for (; T.l & 511; )
      T.write_shift(-4, ke.ENDOFCHAIN);
    for (w = 0; w < m[4] << 2; ++w) {
      var X = h.FullPaths[w];
      if (!X || X.length === 0) {
        for (D = 0; D < 17; ++D)
          T.write_shift(4, 0);
        for (D = 0; D < 3; ++D)
          T.write_shift(4, -1);
        for (D = 0; D < 12; ++D)
          T.write_shift(4, 0);
        continue;
      }
      N = h.FileIndex[w], w === 0 && (N.start = N.size ? N.start - 1 : re);
      var Z = w === 0 && p.root || N.name;
      if (I = 2 * (Z.length + 1), T.write_shift(64, Z, "utf16le"), T.write_shift(2, I), T.write_shift(1, N.type), T.write_shift(1, N.color), T.write_shift(-4, N.L), T.write_shift(-4, N.R), T.write_shift(-4, N.C), N.clsid)
        T.write_shift(16, N.clsid, "hex");
      else
        for (D = 0; D < 4; ++D)
          T.write_shift(4, 0);
      T.write_shift(4, N.state || 0), T.write_shift(4, 0), T.write_shift(4, 0), T.write_shift(4, 0), T.write_shift(4, 0), T.write_shift(4, N.start), T.write_shift(4, N.size), T.write_shift(4, 0);
    }
    for (w = 1; w < h.FileIndex.length; ++w)
      if (N = h.FileIndex[w], N.size >= 4096)
        if (T.l = N.start + 1 << 9, xe && Buffer.isBuffer(N.content))
          N.content.copy(T, T.l, 0, N.size), T.l += N.size + 511 & -512;
        else {
          for (D = 0; D < N.size; ++D)
            T.write_shift(1, N.content[D]);
          for (; D & 511; ++D)
            T.write_shift(1, 0);
        }
    for (w = 1; w < h.FileIndex.length; ++w)
      if (N = h.FileIndex[w], N.size > 0 && N.size < 4096)
        if (xe && Buffer.isBuffer(N.content))
          N.content.copy(T, T.l, 0, N.size), T.l += N.size + 63 & -64;
        else {
          for (D = 0; D < N.size; ++D)
            T.write_shift(1, N.content[D]);
          for (; D & 63; ++D)
            T.write_shift(1, 0);
        }
    if (xe)
      T.l = T.length;
    else
      for (; T.l < T.length; )
        T.write_shift(1, 0);
    return T;
  }
  function G(h, g) {
    var p = h.FullPaths.map(function(D) {
      return D.toUpperCase();
    }), m = p.map(function(D) {
      var I = D.split("/");
      return I[I.length - (D.slice(-1) == "/" ? 2 : 1)];
    }), T = !1;
    g.charCodeAt(0) === 47 ? (T = !0, g = p[0].slice(0, -1) + g) : T = g.indexOf("/") !== -1;
    var w = g.toUpperCase(), R = T === !0 ? p.indexOf(w) : m.indexOf(w);
    if (R !== -1)
      return h.FileIndex[R];
    var b = !w.match(jt);
    for (w = w.replace(Ft, ""), b && (w = w.replace(jt, "!")), R = 0; R < p.length; ++R)
      if ((b ? p[R].replace(jt, "!") : p[R]).replace(Ft, "") == w || (b ? m[R].replace(jt, "!") : m[R]).replace(Ft, "") == w)
        return h.FileIndex[R];
    return null;
  }
  var K = 64, re = -2, _e = "d0cf11e0a1b11ae1", oe = [208, 207, 17, 224, 161, 177, 26, 225], Ue = "00000000000000000000000000000000", ke = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: re,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE: _e,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: Ue,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function xr(h, g, p) {
    l();
    var m = V(h, p);
    o.writeFileSync(g, m);
  }
  function Le(h) {
    for (var g = new Array(h.length), p = 0; p < h.length; ++p)
      g[p] = String.fromCharCode(h[p]);
    return g.join("");
  }
  function lr(h, g) {
    var p = V(h, g);
    switch (g && g.type || "buffer") {
      case "file":
        return l(), o.writeFileSync(g.filename, p), p;
      case "binary":
        return typeof p == "string" ? p : Le(p);
      case "base64":
        return It(typeof p == "string" ? p : Le(p));
      case "buffer":
        if (xe)
          return Buffer.isBuffer(p) ? p : Ir(p);
      case "array":
        return typeof p == "string" ? pr(p) : p;
    }
    return p;
  }
  var tr;
  function S(h) {
    try {
      var g = h.InflateRaw, p = new g();
      if (p._processChunk(new Uint8Array([3, 0]), p._finishFlushFlag), p.bytesRead)
        tr = h;
      else
        throw new Error("zlib does not expose bytesRead");
    } catch (m) {
      console.error("cannot use native zlib: " + (m.message || m));
    }
  }
  function P(h, g) {
    if (!tr)
      return v0(h, g);
    var p = tr.InflateRaw, m = new p(), T = m._processChunk(h.slice(h.l), m._finishFlushFlag);
    return h.l += m.bytesRead, T;
  }
  function F(h) {
    return tr ? tr.deflateRawSync(h) : o0(h);
  }
  var A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], H = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], ie = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function se(h) {
    var g = (h << 1 | h << 11) & 139536 | (h << 5 | h << 15) & 558144;
    return (g >> 16 | g >> 8 | g) & 255;
  }
  for (var ae = typeof Uint8Array < "u", q = ae ? new Uint8Array(256) : [], Ee = 0; Ee < 256; ++Ee)
    q[Ee] = se(Ee);
  function he(h, g) {
    var p = q[h & 255];
    return g <= 8 ? p >>> 8 - g : (p = p << 8 | q[h >> 8 & 255], g <= 16 ? p >>> 16 - g : (p = p << 8 | q[h >> 16 & 255], p >>> 24 - g));
  }
  function $e(h, g) {
    var p = g & 7, m = g >>> 3;
    return (h[m] | (p <= 6 ? 0 : h[m + 1] << 8)) >>> p & 3;
  }
  function de(h, g) {
    var p = g & 7, m = g >>> 3;
    return (h[m] | (p <= 5 ? 0 : h[m + 1] << 8)) >>> p & 7;
  }
  function Sr(h, g) {
    var p = g & 7, m = g >>> 3;
    return (h[m] | (p <= 4 ? 0 : h[m + 1] << 8)) >>> p & 15;
  }
  function Fe(h, g) {
    var p = g & 7, m = g >>> 3;
    return (h[m] | (p <= 3 ? 0 : h[m + 1] << 8)) >>> p & 31;
  }
  function ne(h, g) {
    var p = g & 7, m = g >>> 3;
    return (h[m] | (p <= 1 ? 0 : h[m + 1] << 8)) >>> p & 127;
  }
  function or(h, g, p) {
    var m = g & 7, T = g >>> 3, w = (1 << p) - 1, R = h[T] >>> m;
    return p < 8 - m || (R |= h[T + 1] << 8 - m, p < 16 - m) || (R |= h[T + 2] << 16 - m, p < 24 - m) || (R |= h[T + 3] << 24 - m), R & w;
  }
  function Ar(h, g, p) {
    var m = g & 7, T = g >>> 3;
    return m <= 5 ? h[T] |= (p & 7) << m : (h[T] |= p << m & 255, h[T + 1] = (p & 7) >> 8 - m), g + 3;
  }
  function Vr(h, g, p) {
    var m = g & 7, T = g >>> 3;
    return p = (p & 1) << m, h[T] |= p, g + 1;
  }
  function tt(h, g, p) {
    var m = g & 7, T = g >>> 3;
    return p <<= m, h[T] |= p & 255, p >>>= 8, h[T + 1] = p, g + 8;
  }
  function l0(h, g, p) {
    var m = g & 7, T = g >>> 3;
    return p <<= m, h[T] |= p & 255, p >>>= 8, h[T + 1] = p & 255, h[T + 2] = p >>> 8, g + 16;
  }
  function Sn(h, g) {
    var p = h.length, m = 2 * p > g ? 2 * p : g + 5, T = 0;
    if (p >= g)
      return h;
    if (xe) {
      var w = T0(m);
      if (h.copy)
        h.copy(w);
      else
        for (; T < h.length; ++T)
          w[T] = h[T];
      return w;
    } else if (ae) {
      var R = new Uint8Array(m);
      if (R.set)
        R.set(h);
      else
        for (; T < p; ++T)
          R[T] = h[T];
      return R;
    }
    return h.length = m, h;
  }
  function _r(h) {
    for (var g = new Array(h), p = 0; p < h; ++p)
      g[p] = 0;
    return g;
  }
  function Gt(h, g, p) {
    var m = 1, T = 0, w = 0, R = 0, b = 0, D = h.length, I = ae ? new Uint16Array(32) : _r(32);
    for (w = 0; w < 32; ++w)
      I[w] = 0;
    for (w = D; w < p; ++w)
      h[w] = 0;
    D = h.length;
    var N = ae ? new Uint16Array(D) : _r(D);
    for (w = 0; w < D; ++w)
      I[T = h[w]]++, m < T && (m = T), N[w] = 0;
    for (I[0] = 0, w = 1; w <= m; ++w)
      I[w + 16] = b = b + I[w - 1] << 1;
    for (w = 0; w < D; ++w)
      b = h[w], b != 0 && (N[w] = I[b + 16]++);
    var X = 0;
    for (w = 0; w < D; ++w)
      if (X = h[w], X != 0)
        for (b = he(N[w], m) >> m - X, R = (1 << m + 4 - X) - 1; R >= 0; --R)
          g[b | R << X] = X & 15 | w << 4;
    return m;
  }
  var An = ae ? new Uint16Array(512) : _r(512), Fn = ae ? new Uint16Array(32) : _r(32);
  if (!ae) {
    for (var Gr = 0; Gr < 512; ++Gr)
      An[Gr] = 0;
    for (Gr = 0; Gr < 32; ++Gr)
      Fn[Gr] = 0;
  }
  (function() {
    for (var h = [], g = 0; g < 32; g++)
      h.push(5);
    Gt(h, Fn, 32);
    var p = [];
    for (g = 0; g <= 143; g++)
      p.push(8);
    for (; g <= 255; g++)
      p.push(9);
    for (; g <= 279; g++)
      p.push(7);
    for (; g <= 287; g++)
      p.push(8);
    Gt(p, An, 288);
  })();
  var Ui = /* @__PURE__ */ function() {
    for (var g = ae ? new Uint8Array(32768) : [], p = 0, m = 0; p < ie.length - 1; ++p)
      for (; m < ie[p + 1]; ++m)
        g[m] = p;
    for (; m < 32768; ++m)
      g[m] = 29;
    var T = ae ? new Uint8Array(259) : [];
    for (p = 0, m = 0; p < H.length - 1; ++p)
      for (; m < H[p + 1]; ++m)
        T[m] = p;
    function w(b, D) {
      for (var I = 0; I < b.length; ) {
        var N = Math.min(65535, b.length - I), X = I + N == b.length;
        for (D.write_shift(1, +X), D.write_shift(2, N), D.write_shift(2, ~N & 65535); N-- > 0; )
          D[D.l++] = b[I++];
      }
      return D.l;
    }
    function R(b, D) {
      for (var I = 0, N = 0, X = ae ? new Uint16Array(32768) : []; N < b.length; ) {
        var Z = (
          /* data.length - boff; */
          Math.min(65535, b.length - N)
        );
        if (Z < 10) {
          for (I = Ar(D, I, +(N + Z == b.length)), I & 7 && (I += 8 - (I & 7)), D.l = I / 8 | 0, D.write_shift(2, Z), D.write_shift(2, ~Z & 65535); Z-- > 0; )
            D[D.l++] = b[N++];
          I = D.l * 8;
          continue;
        }
        I = Ar(D, I, +(N + Z == b.length) + 2);
        for (var te = 0; Z-- > 0; ) {
          var z = b[N];
          te = (te << 5 ^ z) & 32767;
          var Q = -1, le = 0;
          if ((Q = X[te]) && (Q |= N & -32768, Q > N && (Q -= 32768), Q < N))
            for (; b[Q + le] == b[N + le] && le < 250; )
              ++le;
          if (le > 2) {
            z = T[le], z <= 22 ? I = tt(D, I, q[z + 1] >> 1) - 1 : (tt(D, I, 3), I += 5, tt(D, I, q[z - 23] >> 5), I += 3);
            var Se = z < 8 ? 0 : z - 4 >> 2;
            Se > 0 && (l0(D, I, le - H[z]), I += Se), z = g[N - Q], I = tt(D, I, q[z] >> 3), I -= 3;
            var Ae = z < 4 ? 0 : z - 2 >> 1;
            Ae > 0 && (l0(D, I, N - Q - ie[z]), I += Ae);
            for (var ze = 0; ze < le; ++ze)
              X[te] = N & 32767, te = (te << 5 ^ b[N]) & 32767, ++N;
            Z -= le - 1;
          } else
            z <= 143 ? z = z + 48 : I = Vr(D, I, 1), I = tt(D, I, q[z]), X[te] = N & 32767, ++N;
        }
        I = tt(D, I, 0) - 1;
      }
      return D.l = (I + 7) / 8 | 0, D.l;
    }
    return function(D, I) {
      return D.length < 8 ? w(D, I) : R(D, I);
    };
  }();
  function o0(h) {
    var g = B(50 + Math.floor(h.length * 1.1)), p = Ui(h, g);
    return g.slice(0, p);
  }
  var c0 = ae ? new Uint16Array(32768) : _r(32768), h0 = ae ? new Uint16Array(32768) : _r(32768), u0 = ae ? new Uint16Array(128) : _r(128), x0 = 1, d0 = 1;
  function Wi(h, g) {
    var p = Fe(h, g) + 257;
    g += 5;
    var m = Fe(h, g) + 1;
    g += 5;
    var T = Sr(h, g) + 4;
    g += 4;
    for (var w = 0, R = ae ? new Uint8Array(19) : _r(19), b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], D = 1, I = ae ? new Uint8Array(8) : _r(8), N = ae ? new Uint8Array(8) : _r(8), X = R.length, Z = 0; Z < T; ++Z)
      R[A[Z]] = w = de(h, g), D < w && (D = w), I[w]++, g += 3;
    var te = 0;
    for (I[0] = 0, Z = 1; Z <= D; ++Z)
      N[Z] = te = te + I[Z - 1] << 1;
    for (Z = 0; Z < X; ++Z)
      (te = R[Z]) != 0 && (b[Z] = N[te]++);
    var z = 0;
    for (Z = 0; Z < X; ++Z)
      if (z = R[Z], z != 0) {
        te = q[b[Z]] >> 8 - z;
        for (var Q = (1 << 7 - z) - 1; Q >= 0; --Q)
          u0[te | Q << z] = z & 7 | Z << 3;
      }
    var le = [];
    for (D = 1; le.length < p + m; )
      switch (te = u0[ne(h, g)], g += te & 7, te >>>= 3) {
        case 16:
          for (w = 3 + $e(h, g), g += 2, te = le[le.length - 1]; w-- > 0; )
            le.push(te);
          break;
        case 17:
          for (w = 3 + de(h, g), g += 3; w-- > 0; )
            le.push(0);
          break;
        case 18:
          for (w = 11 + ne(h, g), g += 7; w-- > 0; )
            le.push(0);
          break;
        default:
          le.push(te), D < te && (D = te);
          break;
      }
    var Se = le.slice(0, p), Ae = le.slice(p);
    for (Z = p; Z < 286; ++Z)
      Se[Z] = 0;
    for (Z = m; Z < 30; ++Z)
      Ae[Z] = 0;
    return x0 = Gt(Se, c0, 286), d0 = Gt(Ae, h0, 30), g;
  }
  function Hi(h, g) {
    if (h[0] == 3 && !(h[1] & 3))
      return [Yr(g), 2];
    for (var p = 0, m = 0, T = T0(g || 1 << 18), w = 0, R = T.length >>> 0, b = 0, D = 0; !(m & 1); ) {
      if (m = de(h, p), p += 3, m >>> 1)
        m >> 1 == 1 ? (b = 9, D = 5) : (p = Wi(h, p), b = x0, D = d0);
      else {
        p & 7 && (p += 8 - (p & 7));
        var I = h[p >>> 3] | h[(p >>> 3) + 1] << 8;
        if (p += 32, I > 0)
          for (!g && R < w + I && (T = Sn(T, w + I), R = T.length); I-- > 0; )
            T[w++] = h[p >>> 3], p += 8;
        continue;
      }
      for (; ; ) {
        !g && R < w + 32767 && (T = Sn(T, w + 32767), R = T.length);
        var N = or(h, p, b), X = m >>> 1 == 1 ? An[N] : c0[N];
        if (p += X & 15, X >>>= 4, !(X >>> 8 & 255))
          T[w++] = X;
        else {
          if (X == 256)
            break;
          X -= 257;
          var Z = X < 8 ? 0 : X - 4 >> 2;
          Z > 5 && (Z = 0);
          var te = w + H[X];
          Z > 0 && (te += or(h, p, Z), p += Z), N = or(h, p, D), X = m >>> 1 == 1 ? Fn[N] : h0[N], p += X & 15, X >>>= 4;
          var z = X < 4 ? 0 : X - 2 >> 1, Q = ie[X];
          for (z > 0 && (Q += or(h, p, z), p += z), !g && R < te && (T = Sn(T, te + 100), R = T.length); w < te; )
            T[w] = T[w - Q], ++w;
        }
      }
    }
    return g ? [T, p + 7 >>> 3] : [T.slice(0, w), p + 7 >>> 3];
  }
  function v0(h, g) {
    var p = h.slice(h.l || 0), m = Hi(p, g);
    return h.l += m[1], m[0];
  }
  function p0(h, g) {
    if (h)
      typeof console < "u" && console.error(g);
    else
      throw new Error(g);
  }
  function m0(h, g) {
    var p = (
      /*::(*/
      h
    );
    ar(p, 0);
    var m = [], T = [], w = {
      FileIndex: m,
      FullPaths: T
    };
    C(w, { root: g.root });
    for (var R = p.length - 4; (p[R] != 80 || p[R + 1] != 75 || p[R + 2] != 5 || p[R + 3] != 6) && R >= 0; )
      --R;
    p.l = R + 4, p.l += 4;
    var b = p.read_shift(2);
    p.l += 6;
    var D = p.read_shift(4);
    for (p.l = D, R = 0; R < b; ++R) {
      p.l += 20;
      var I = p.read_shift(4), N = p.read_shift(4), X = p.read_shift(2), Z = p.read_shift(2), te = p.read_shift(2);
      p.l += 8;
      var z = p.read_shift(4), Q = f(
        /*::(*/
        p.slice(p.l + X, p.l + X + Z)
        /*:: :any)*/
      );
      p.l += X + Z + te;
      var le = p.l;
      p.l = z + 4, Vi(p, I, N, w, Q), p.l = le;
    }
    return w;
  }
  function Vi(h, g, p, m, T) {
    h.l += 2;
    var w = h.read_shift(2), R = h.read_shift(2), b = s(h);
    if (w & 8257)
      throw new Error("Unsupported ZIP encryption");
    for (var D = h.read_shift(4), I = h.read_shift(4), N = h.read_shift(4), X = h.read_shift(2), Z = h.read_shift(2), te = "", z = 0; z < X; ++z)
      te += String.fromCharCode(h[h.l++]);
    if (Z) {
      var Q = f(
        /*::(*/
        h.slice(h.l, h.l + Z)
        /*:: :any)*/
      );
      (Q[21589] || {}).mt && (b = Q[21589].mt), ((T || {})[21589] || {}).mt && (b = T[21589].mt);
    }
    h.l += Z;
    var le = h.slice(h.l, h.l + I);
    switch (R) {
      case 8:
        le = P(h, N);
        break;
      case 0:
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + R);
    }
    var Se = !1;
    w & 8 && (D = h.read_shift(4), D == 134695760 && (D = h.read_shift(4), Se = !0), I = h.read_shift(4), N = h.read_shift(4)), I != g && p0(Se, "Bad compressed size: " + g + " != " + I), N != p && p0(Se, "Bad uncompressed size: " + p + " != " + N), yn(m, te, le, { unsafe: !0, mt: b });
  }
  function Gi(h, g) {
    var p = g || {}, m = [], T = [], w = B(1), R = p.compression ? 8 : 0, b = 0, D = 0, I = 0, N = 0, X = 0, Z = h.FullPaths[0], te = Z, z = h.FileIndex[0], Q = [], le = 0;
    for (D = 1; D < h.FullPaths.length; ++D)
      if (te = h.FullPaths[D].slice(Z.length), z = h.FileIndex[D], !(!z.size || !z.content || te == "Sh33tJ5")) {
        var Se = N, Ae = B(te.length);
        for (I = 0; I < te.length; ++I)
          Ae.write_shift(1, te.charCodeAt(I) & 127);
        Ae = Ae.slice(0, Ae.l), Q[X] = Ls.buf(
          /*::((*/
          z.content,
          0
        );
        var ze = z.content;
        R == 8 && (ze = F(ze)), w = B(30), w.write_shift(4, 67324752), w.write_shift(2, 20), w.write_shift(2, b), w.write_shift(2, R), z.mt ? i(w, z.mt) : w.write_shift(4, 0), w.write_shift(-4, Q[X]), w.write_shift(4, ze.length), w.write_shift(
          4,
          /*::(*/
          z.content.length
        ), w.write_shift(2, Ae.length), w.write_shift(2, 0), N += w.length, m.push(w), N += Ae.length, m.push(Ae), N += ze.length, m.push(ze), w = B(46), w.write_shift(4, 33639248), w.write_shift(2, 0), w.write_shift(2, 20), w.write_shift(2, b), w.write_shift(2, R), w.write_shift(4, 0), w.write_shift(-4, Q[X]), w.write_shift(4, ze.length), w.write_shift(
          4,
          /*::(*/
          z.content.length
        ), w.write_shift(2, Ae.length), w.write_shift(2, 0), w.write_shift(2, 0), w.write_shift(2, 0), w.write_shift(2, 0), w.write_shift(4, 0), w.write_shift(4, Se), le += w.l, T.push(w), le += Ae.length, T.push(Ae), ++X;
      }
    return w = B(22), w.write_shift(4, 101010256), w.write_shift(2, 0), w.write_shift(2, 0), w.write_shift(2, X), w.write_shift(2, X), w.write_shift(4, le), w.write_shift(4, N), w.write_shift(2, 0), Ve([Ve(m), Ve(T), w]);
  }
  var Xt = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function Xi(h, g) {
    if (h.ctype)
      return h.ctype;
    var p = h.name || "", m = p.match(/\.([^\.]+)$/);
    return m && Xt[m[1]] || g && (m = (p = g).match(/[\.\\]([^\.\\])+$/), m && Xt[m[1]]) ? Xt[m[1]] : "application/octet-stream";
  }
  function Ki(h) {
    for (var g = It(h), p = [], m = 0; m < g.length; m += 76)
      p.push(g.slice(m, m + 76));
    return p.join(`\r
`) + `\r
`;
  }
  function zi(h) {
    var g = h.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(I) {
      var N = I.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (N.length == 1 ? "0" + N : N);
    });
    g = g.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), g.charAt(0) == `
` && (g = "=0D" + g.slice(1)), g = g.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var p = [], m = g.split(`\r
`), T = 0; T < m.length; ++T) {
      var w = m[T];
      if (w.length == 0) {
        p.push("");
        continue;
      }
      for (var R = 0; R < w.length; ) {
        var b = 76, D = w.slice(R, R + b);
        D.charAt(b - 1) == "=" ? b-- : D.charAt(b - 2) == "=" ? b -= 2 : D.charAt(b - 3) == "=" && (b -= 3), D = w.slice(R, R + b), R += b, R < w.length && (D += "="), p.push(D);
      }
    }
    return p.join(`\r
`);
  }
  function ji(h) {
    for (var g = [], p = 0; p < h.length; ++p) {
      for (var m = h[p]; p <= h.length && m.charAt(m.length - 1) == "="; )
        m = m.slice(0, m.length - 1) + h[++p];
      g.push(m);
    }
    for (var T = 0; T < g.length; ++T)
      g[T] = g[T].replace(/[=][0-9A-Fa-f]{2}/g, function(w) {
        return String.fromCharCode(parseInt(w.slice(1), 16));
      });
    return pr(g.join(`\r
`));
  }
  function Yi(h, g, p) {
    for (var m = "", T = "", w = "", R, b = 0; b < 10; ++b) {
      var D = g[b];
      if (!D || D.match(/^\s*$/))
        break;
      var I = D.match(/^(.*?):\s*([^\s].*)$/);
      if (I)
        switch (I[1].toLowerCase()) {
          case "content-location":
            m = I[2].trim();
            break;
          case "content-type":
            w = I[2].trim();
            break;
          case "content-transfer-encoding":
            T = I[2].trim();
            break;
        }
    }
    switch (++b, T.toLowerCase()) {
      case "base64":
        R = pr(kr(g.slice(b).join("")));
        break;
      case "quoted-printable":
        R = ji(g.slice(b));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + T);
    }
    var N = yn(h, m.slice(p.length), R, { unsafe: !0 });
    w && (N.ctype = w);
  }
  function $i(h, g) {
    if (Le(h.slice(0, 13)).toLowerCase() != "mime-version:")
      throw new Error("Unsupported MAD header");
    var p = g && g.root || "", m = (xe && Buffer.isBuffer(h) ? h.toString("binary") : Le(h)).split(`\r
`), T = 0, w = "";
    for (T = 0; T < m.length; ++T)
      if (w = m[T], !!/^Content-Location:/i.test(w) && (w = w.slice(w.indexOf("file")), p || (p = w.slice(0, w.lastIndexOf("/") + 1)), w.slice(0, p.length) != p))
        for (; p.length > 0 && (p = p.slice(0, p.length - 1), p = p.slice(0, p.lastIndexOf("/") + 1), w.slice(0, p.length) != p); )
          ;
    var R = (m[1] || "").match(/boundary="(.*?)"/);
    if (!R)
      throw new Error("MAD cannot find boundary");
    var b = "--" + (R[1] || ""), D = [], I = [], N = {
      FileIndex: D,
      FullPaths: I
    };
    C(N);
    var X, Z = 0;
    for (T = 0; T < m.length; ++T) {
      var te = m[T];
      te !== b && te !== b + "--" || (Z++ && Yi(N, m.slice(X, T), p), X = T);
    }
    return N;
  }
  function Ji(h, g) {
    var p = g || {}, m = p.boundary || "SheetJS";
    m = "------=" + m;
    for (var T = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + m.slice(2) + '"',
      "",
      "",
      ""
    ], w = h.FullPaths[0], R = w, b = h.FileIndex[0], D = 1; D < h.FullPaths.length; ++D)
      if (R = h.FullPaths[D].slice(w.length), b = h.FileIndex[D], !(!b.size || !b.content || R == "Sh33tJ5")) {
        R = R.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(le) {
          return "_x" + le.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function(le) {
          return "_u" + le.charCodeAt(0).toString(16) + "_";
        });
        for (var I = b.content, N = xe && Buffer.isBuffer(I) ? I.toString("binary") : Le(I), X = 0, Z = Math.min(1024, N.length), te = 0, z = 0; z <= Z; ++z)
          (te = N.charCodeAt(z)) >= 32 && te < 128 && ++X;
        var Q = X >= Z * 4 / 5;
        T.push(m), T.push("Content-Location: " + (p.root || "file:///C:/SheetJS/") + R), T.push("Content-Transfer-Encoding: " + (Q ? "quoted-printable" : "base64")), T.push("Content-Type: " + Xi(b, R)), T.push(""), T.push(Q ? zi(N) : Ki(N));
      }
    return T.push(m + `--\r
`), T.join(`\r
`);
  }
  function Zi(h) {
    var g = {};
    return C(g, h), g;
  }
  function yn(h, g, p, m) {
    var T = m && m.unsafe;
    T || C(h);
    var w = !T && Te.find(h, g);
    if (!w) {
      var R = h.FullPaths[0];
      g.slice(0, R.length) == R ? R = g : (R.slice(-1) != "/" && (R += "/"), R = (R + g).replace("//", "/")), w = { name: a(g), type: 2 }, h.FileIndex.push(w), h.FullPaths.push(R), T || Te.utils.cfb_gc(h);
    }
    return w.content = p, w.size = p ? p.length : 0, m && (m.CLSID && (w.clsid = m.CLSID), m.mt && (w.mt = m.mt), m.ct && (w.ct = m.ct)), w;
  }
  function qi(h, g) {
    C(h);
    var p = Te.find(h, g);
    if (p) {
      for (var m = 0; m < h.FileIndex.length; ++m)
        if (h.FileIndex[m] == p)
          return h.FileIndex.splice(m, 1), h.FullPaths.splice(m, 1), !0;
    }
    return !1;
  }
  function Qi(h, g, p) {
    C(h);
    var m = Te.find(h, g);
    if (m) {
      for (var T = 0; T < h.FileIndex.length; ++T)
        if (h.FileIndex[T] == m)
          return h.FileIndex[T].name = a(p), h.FullPaths[T] = p, !0;
    }
    return !1;
  }
  function es(h) {
    L(h, !0);
  }
  return t.find = G, t.read = ee, t.parse = c, t.write = lr, t.writeFile = xr, t.utils = {
    cfb_new: Zi,
    cfb_add: yn,
    cfb_del: qi,
    cfb_mov: Qi,
    cfb_gc: es,
    ReadShift: Ct,
    CheckField: Ba,
    prep_blob: ar,
    bconcat: Ve,
    use_zlib: S,
    _deflateRaw: o0,
    _inflateRaw: v0,
    consts: ke
  }, t;
}();
function Ms(e) {
  return typeof e == "string" ? vn(e) : Array.isArray(e) ? ls(e) : e;
}
function bt(e, t, r) {
  if (typeof Deno < "u") {
    if (r && typeof t == "string")
      switch (r) {
        case "utf8":
          t = new TextEncoder(r).encode(t);
          break;
        case "binary":
          t = vn(t);
          break;
        default:
          throw new Error("Unsupported encoding " + r);
      }
    return Deno.writeFileSync(e, t);
  }
  var n = r == "utf8" ? yr(t) : t;
  if (typeof IE_SaveFile < "u")
    return IE_SaveFile(n, e);
  if (typeof Blob < "u") {
    var a = new Blob([Ms(n)], { type: "application/octet-stream" });
    if (typeof navigator < "u" && navigator.msSaveBlob)
      return navigator.msSaveBlob(a, e);
    if (typeof saveAs < "u")
      return saveAs(a, e);
    if (typeof URL < "u" && typeof document < "u" && document.createElement && URL.createObjectURL) {
      var i = URL.createObjectURL(a);
      if (typeof chrome == "object" && typeof (chrome.downloads || {}).download == "function")
        return URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(i);
        }, 6e4), chrome.downloads.download({ url: i, filename: e, saveAs: !0 });
      var s = document.createElement("a");
      if (s.download != null)
        return s.download = e, s.href = i, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(i);
        }, 6e4), i;
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
    try {
      var f = File(e);
      return f.open("w"), f.encoding = "binary", Array.isArray(t) && (t = Bt(t)), f.write(t), f.close(), t;
    } catch (o) {
      if (!o.message || !o.message.match(/onstruct/))
        throw o;
    }
  throw new Error("cannot save file " + e);
}
function Ke(e) {
  for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n)
    Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n]);
  return r;
}
function O0(e, t) {
  for (var r = [], n = Ke(e), a = 0; a !== n.length; ++a)
    r[e[n[a]][t]] == null && (r[e[n[a]][t]] = n[a]);
  return r;
}
function Gn(e) {
  for (var t = [], r = Ke(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] = r[n];
  return t;
}
function gn(e) {
  for (var t = [], r = Ke(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] = parseInt(r[n], 10);
  return t;
}
function Bs(e) {
  for (var t = [], r = Ke(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] == null && (t[e[r[n]]] = []), t[e[r[n]]].push(r[n]);
  return t;
}
var an = /* @__PURE__ */ new Date(1899, 11, 30, 0, 0, 0);
function er(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  t && (r -= 1462 * 24 * 60 * 60 * 1e3);
  var n = /* @__PURE__ */ an.getTime() + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ an.getTimezoneOffset()) * 6e4;
  return (r - n) / (24 * 60 * 60 * 1e3);
}
var Ta = /* @__PURE__ */ new Date(), bs = /* @__PURE__ */ an.getTime() + (/* @__PURE__ */ Ta.getTimezoneOffset() - /* @__PURE__ */ an.getTimezoneOffset()) * 6e4, D0 = /* @__PURE__ */ Ta.getTimezoneOffset();
function Ea(e) {
  var t = /* @__PURE__ */ new Date();
  return t.setTime(e * 24 * 60 * 60 * 1e3 + bs), t.getTimezoneOffset() !== D0 && t.setTime(t.getTime() + (t.getTimezoneOffset() - D0) * 6e4), t;
}
var k0 = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z"), wa = /* @__PURE__ */ isNaN(/* @__PURE__ */ k0.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : k0, Us = /* @__PURE__ */ wa.getFullYear() == 2017;
function qe(e, t) {
  var r = new Date(e);
  if (Us)
    return t > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r;
  if (e instanceof Date)
    return e;
  if (wa.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var n = r.getFullYear();
    return e.indexOf("" + n) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var a = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"], i = new Date(+a[0], +a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0);
  return e.indexOf("Z") > -1 && (i = new Date(i.getTime() - i.getTimezoneOffset() * 60 * 1e3)), i;
}
function _n(e, t) {
  if (xe && Buffer.isBuffer(e)) {
    if (t) {
      if (e[0] == 255 && e[1] == 254)
        return yr(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255)
        return yr(fs(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u")
    try {
      if (t) {
        if (e[0] == 255 && e[1] == 254)
          return yr(new TextDecoder("utf-16le").decode(e.slice(2)));
        if (e[0] == 254 && e[1] == 255)
          return yr(new TextDecoder("utf-16be").decode(e.slice(2)));
      }
      var r = {
        "€": "",
        "‚": "",
        ƒ: "",
        "„": "",
        "…": "",
        "†": "",
        "‡": "",
        "ˆ": "",
        "‰": "",
        Š: "",
        "‹": "",
        Œ: "",
        Ž: "",
        "‘": "",
        "’": "",
        "“": "",
        "”": "",
        "•": "",
        "–": "",
        "—": "",
        "˜": "",
        "™": "",
        š: "",
        "›": "",
        œ: "",
        ž: "",
        Ÿ: ""
      };
      return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(i) {
        return r[i] || i;
      });
    } catch {
    }
  for (var n = [], a = 0; a != e.length; ++a)
    n.push(String.fromCharCode(e[a]));
  return n.join("");
}
function rr(e) {
  if (typeof JSON < "u" && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null)
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = rr(e[r]));
  return t;
}
function Oe(e, t) {
  for (var r = ""; r.length < t; )
    r += e;
  return r;
}
function Or(e) {
  var t = Number(e);
  if (!isNaN(t))
    return isFinite(t) ? t : NaN;
  if (!/\d/.test(e))
    return t;
  var r = 1, n = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return r *= 100, "";
  });
  return !isNaN(t = Number(n)) || (n = n.replace(/[(](.*)[)]/, function(a, i) {
    return r = -r, i;
  }), !isNaN(t = Number(n))) ? t / r : t;
}
var Ws = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function Nt(e) {
  var t = new Date(e), r = /* @__PURE__ */ new Date(NaN), n = t.getYear(), a = t.getMonth(), i = t.getDate();
  if (isNaN(i))
    return r;
  var s = e.toLowerCase();
  if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (s = s.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), s.length > 3 && Ws.indexOf(s) == -1)
      return r;
  } else if (s.match(/[a-z]/))
    return r;
  return n < 0 || n > 8099 ? r : (a > 0 || i > 1) && n != 101 ? t : e.match(/[^-0-9:,\/\\]/) ? r : t;
}
function ce(e, t, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var n;
      return xe ? n = Ir(r) : n = os(r), Te.utils.cfb_add(e, t, n);
    }
    Te.utils.cfb_add(e, t, r);
  } else
    e.file(t, r);
}
function Xn() {
  return Te.utils.cfb_new();
}
var Ne = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, Hs = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
}, Kn = /* @__PURE__ */ Gn(Hs), zn = /[&<>'"]/g, Vs = /[\u0000-\u0008\u000b-\u001f]/g;
function me(e) {
  var t = e + "";
  return t.replace(zn, function(r) {
    return Kn[r];
  }).replace(Vs, function(r) {
    return "_x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function R0(e) {
  return me(e).replace(/ /g, "_x0020_");
}
var Sa = /[\u0000-\u001f]/g;
function Gs(e) {
  var t = e + "";
  return t.replace(zn, function(r) {
    return Kn[r];
  }).replace(/\n/g, "<br/>").replace(Sa, function(r) {
    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function Xs(e) {
  var t = e + "";
  return t.replace(zn, function(r) {
    return Kn[r];
  }).replace(Sa, function(r) {
    return "&#x" + r.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
function Ks(e) {
  return e.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function zs(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    default:
      return !1;
  }
}
function Dn(e) {
  for (var t = "", r = 0, n = 0, a = 0, i = 0, s = 0, f = 0; r < e.length; ) {
    if (n = e.charCodeAt(r++), n < 128) {
      t += String.fromCharCode(n);
      continue;
    }
    if (a = e.charCodeAt(r++), n > 191 && n < 224) {
      s = (n & 31) << 6, s |= a & 63, t += String.fromCharCode(s);
      continue;
    }
    if (i = e.charCodeAt(r++), n < 240) {
      t += String.fromCharCode((n & 15) << 12 | (a & 63) << 6 | i & 63);
      continue;
    }
    s = e.charCodeAt(r++), f = ((n & 7) << 18 | (a & 63) << 12 | (i & 63) << 6 | s & 63) - 65536, t += String.fromCharCode(55296 + (f >>> 10 & 1023)), t += String.fromCharCode(56320 + (f & 1023));
  }
  return t;
}
function I0(e) {
  var t = Yr(2 * e.length), r, n, a = 1, i = 0, s = 0, f;
  for (n = 0; n < e.length; n += a)
    a = 1, (f = e.charCodeAt(n)) < 128 ? r = f : f < 224 ? (r = (f & 31) * 64 + (e.charCodeAt(n + 1) & 63), a = 2) : f < 240 ? (r = (f & 15) * 4096 + (e.charCodeAt(n + 1) & 63) * 64 + (e.charCodeAt(n + 2) & 63), a = 3) : (a = 4, r = (f & 7) * 262144 + (e.charCodeAt(n + 1) & 63) * 4096 + (e.charCodeAt(n + 2) & 63) * 64 + (e.charCodeAt(n + 3) & 63), r -= 65536, s = 55296 + (r >>> 10 & 1023), r = 56320 + (r & 1023)), s !== 0 && (t[i++] = s & 255, t[i++] = s >>> 8, s = 0), t[i++] = r % 256, t[i++] = r >>> 8;
  return t.slice(0, i).toString("ucs2");
}
function N0(e) {
  return Ir(e, "binary").toString("utf8");
}
var $t = "foo bar bazâð£", yt = xe && (/* @__PURE__ */ N0($t) == /* @__PURE__ */ Dn($t) && N0 || /* @__PURE__ */ I0($t) == /* @__PURE__ */ Dn($t) && I0) || Dn, yr = xe ? function(e) {
  return Ir(e, "utf8").toString("binary");
} : function(e) {
  for (var t = [], r = 0, n = 0, a = 0; r < e.length; )
    switch (n = e.charCodeAt(r++), !0) {
      case n < 128:
        t.push(String.fromCharCode(n));
        break;
      case n < 2048:
        t.push(String.fromCharCode(192 + (n >> 6))), t.push(String.fromCharCode(128 + (n & 63)));
        break;
      case (n >= 55296 && n < 57344):
        n -= 55296, a = e.charCodeAt(r++) - 56320 + (n << 10), t.push(String.fromCharCode(240 + (a >> 18 & 7))), t.push(String.fromCharCode(144 + (a >> 12 & 63))), t.push(String.fromCharCode(128 + (a >> 6 & 63))), t.push(String.fromCharCode(128 + (a & 63)));
        break;
      default:
        t.push(String.fromCharCode(224 + (n >> 12))), t.push(String.fromCharCode(128 + (n >> 6 & 63))), t.push(String.fromCharCode(128 + (n & 63)));
    }
  return t.join("");
}, js = /* @__PURE__ */ function() {
  var e = [
    ["nbsp", " "],
    ["middot", "·"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(t) {
    return [new RegExp("&" + t[0] + ";", "ig"), t[1]];
  });
  return function(r) {
    for (var n = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, ""), a = 0; a < e.length; ++a)
      n = n.replace(e[a][0], e[a][1]);
    return n;
  };
}(), Aa = /(^\s|\s$|\n)/;
function Ge(e, t) {
  return "<" + e + (t.match(Aa) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e + ">";
}
function Pt(e) {
  return Ke(e).map(function(t) {
    return " " + t + '="' + e[t] + '"';
  }).join("");
}
function j(e, t, r) {
  return "<" + e + (r != null ? Pt(r) : "") + (t != null ? (t.match(Aa) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e : "/") + ">";
}
function bn(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (r) {
    if (t)
      throw r;
  }
  return "";
}
function Ys(e, t) {
  switch (typeof e) {
    case "string":
      var r = j("vt:lpwstr", me(e));
      return t && (r = r.replace(/&quot;/g, "_x0022_")), r;
    case "number":
      return j((e | 0) == e ? "vt:i4" : "vt:r8", me(String(e)));
    case "boolean":
      return j("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date)
    return j("vt:filetime", bn(e));
  throw new Error("Unable to serialize " + e);
}
var Me = {
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
  CT: "http://schemas.openxmlformats.org/package/2006/content-types",
  RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
  TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
  dc: "http://purl.org/dc/elements/1.1/",
  dcterms: "http://purl.org/dc/terms/",
  dcmitype: "http://purl.org/dc/dcmitype/",
  mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
  sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
  vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  xsi: "http://www.w3.org/2001/XMLSchema-instance",
  xsd: "http://www.w3.org/2001/XMLSchema"
}, dt = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
], ir = {
  o: "urn:schemas-microsoft-com:office:office",
  x: "urn:schemas-microsoft-com:office:excel",
  ss: "urn:schemas-microsoft-com:office:spreadsheet",
  dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
  mv: "http://macVmlSchemaUri",
  v: "urn:schemas-microsoft-com:vml",
  html: "http://www.w3.org/TR/REC-html40"
};
function $s(e, t) {
  for (var r = 1 - 2 * (e[t + 7] >>> 7), n = ((e[t + 7] & 127) << 4) + (e[t + 6] >>> 4 & 15), a = e[t + 6] & 15, i = 5; i >= 0; --i)
    a = a * 256 + e[t + i];
  return n == 2047 ? a == 0 ? r * (1 / 0) : NaN : (n == 0 ? n = -1022 : (n -= 1023, a += Math.pow(2, 52)), r * Math.pow(2, n - 52) * a);
}
function Js(e, t, r) {
  var n = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7, a = 0, i = 0, s = n ? -t : t;
  isFinite(s) ? s == 0 ? a = i = 0 : (a = Math.floor(Math.log(s) / Math.LN2), i = s * Math.pow(2, 52 - a), a <= -1023 && (!isFinite(i) || i < Math.pow(2, 52)) ? a = -1022 : (i -= Math.pow(2, 52), a += 1023)) : (a = 2047, i = isNaN(t) ? 26985 : 0);
  for (var f = 0; f <= 5; ++f, i /= 256)
    e[r + f] = i & 255;
  e[r + 6] = (a & 15) << 4 | i & 15, e[r + 7] = a >> 4 | n;
}
var P0 = function(e) {
  for (var t = [], r = 10240, n = 0; n < e[0].length; ++n)
    if (e[0][n])
      for (var a = 0, i = e[0][n].length; a < i; a += r)
        t.push.apply(t, e[0][n].slice(a, a + r));
  return t;
}, L0 = xe ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(t) {
    return Buffer.isBuffer(t) ? t : Ir(t);
  })) : P0(e);
} : P0, M0 = function(e, t, r) {
  for (var n = [], a = t; a < r; a += 2)
    n.push(String.fromCharCode(At(e, a)));
  return n.join("").replace(Ft, "");
}, jn = xe ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("utf16le", t, r).replace(Ft, "") : M0(e, t, r);
} : M0, B0 = function(e, t, r) {
  for (var n = [], a = t; a < t + r; ++a)
    n.push(("0" + e[a].toString(16)).slice(-2));
  return n.join("");
}, Fa = xe ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("hex", t, t + r) : B0(e, t, r);
} : B0, b0 = function(e, t, r) {
  for (var n = [], a = t; a < r; a++)
    n.push(String.fromCharCode(ft(e, a)));
  return n.join("");
}, Ut = xe ? function(t, r, n) {
  return Buffer.isBuffer(t) ? t.toString("utf8", r, n) : b0(t, r, n);
} : b0, ya = function(e, t) {
  var r = sr(e, t);
  return r > 0 ? Ut(e, t + 4, t + 4 + r - 1) : "";
}, Ca = ya, Oa = function(e, t) {
  var r = sr(e, t);
  return r > 0 ? Ut(e, t + 4, t + 4 + r - 1) : "";
}, Da = Oa, ka = function(e, t) {
  var r = 2 * sr(e, t);
  return r > 0 ? Ut(e, t + 4, t + 4 + r - 1) : "";
}, Ra = ka, Ia = function(t, r) {
  var n = sr(t, r);
  return n > 0 ? jn(t, r + 4, r + 4 + n) : "";
}, Na = Ia, Pa = function(e, t) {
  var r = sr(e, t);
  return r > 0 ? Ut(e, t + 4, t + 4 + r) : "";
}, La = Pa, Ma = function(e, t) {
  return $s(e, t);
}, sn = Ma, Yn = function(t) {
  return Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
};
xe && (Ca = function(t, r) {
  if (!Buffer.isBuffer(t))
    return ya(t, r);
  var n = t.readUInt32LE(r);
  return n > 0 ? t.toString("utf8", r + 4, r + 4 + n - 1) : "";
}, Da = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Oa(t, r);
  var n = t.readUInt32LE(r);
  return n > 0 ? t.toString("utf8", r + 4, r + 4 + n - 1) : "";
}, Ra = function(t, r) {
  if (!Buffer.isBuffer(t))
    return ka(t, r);
  var n = 2 * t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + n - 1);
}, Na = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Ia(t, r);
  var n = t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + n);
}, La = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Pa(t, r);
  var n = t.readUInt32LE(r);
  return t.toString("utf8", r + 4, r + 4 + n);
}, sn = function(t, r) {
  return Buffer.isBuffer(t) ? t.readDoubleLE(r) : Ma(t, r);
}, Yn = function(t) {
  return Buffer.isBuffer(t) || Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
});
var ft = function(e, t) {
  return e[t];
}, At = function(e, t) {
  return e[t + 1] * 256 + e[t];
}, Zs = function(e, t) {
  var r = e[t + 1] * 256 + e[t];
  return r < 32768 ? r : (65535 - r + 1) * -1;
}, sr = function(e, t) {
  return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
}, zr = function(e, t) {
  return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}, qs = function(e, t) {
  return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
};
function Ct(e, t) {
  var r = "", n, a, i = [], s, f, o, l;
  switch (t) {
    case "dbcs":
      if (l = this.l, xe && Buffer.isBuffer(this))
        r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else
        for (o = 0; o < e; ++o)
          r += String.fromCharCode(At(this, l)), l += 2;
      e *= 2;
      break;
    case "utf8":
      r = Ut(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, r = jn(this, this.l, this.l + e);
      break;
    case "wstr":
      return Ct.call(this, e, "dbcs");
    case "lpstr-ansi":
      r = Ca(this, this.l), e = 4 + sr(this, this.l);
      break;
    case "lpstr-cp":
      r = Da(this, this.l), e = 4 + sr(this, this.l);
      break;
    case "lpwstr":
      r = Ra(this, this.l), e = 4 + 2 * sr(this, this.l);
      break;
    case "lpp4":
      e = 4 + sr(this, this.l), r = Na(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + sr(this, this.l), r = La(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (s = ft(this, this.l + e++)) !== 0; )
        i.push(zt(s));
      r = i.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (s = At(this, this.l + e)) !== 0; )
        i.push(zt(s)), e += 2;
      e += 2, r = i.join("");
      break;
    case "dbcs-cont":
      for (r = "", l = this.l, o = 0; o < e; ++o) {
        if (this.lens && this.lens.indexOf(l) !== -1)
          return s = ft(this, l), this.l = l + 1, f = Ct.call(this, e - o, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(zt(At(this, l))), l += 2;
      }
      r = i.join(""), e *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      for (r = "", l = this.l, o = 0; o != e; ++o) {
        if (this.lens && this.lens.indexOf(l) !== -1)
          return s = ft(this, l), this.l = l + 1, f = Ct.call(this, e - o, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(zt(ft(this, l))), l += 1;
      }
      r = i.join("");
      break;
    default:
      switch (e) {
        case 1:
          return n = ft(this, this.l), this.l++, n;
        case 2:
          return n = (t === "i" ? Zs : At)(this, this.l), this.l += 2, n;
        case 4:
        case -4:
          return t === "i" || !(this[this.l + 3] & 128) ? (n = (e > 0 ? zr : qs)(this, this.l), this.l += 4, n) : (a = sr(this, this.l), this.l += 4, a);
        case 8:
        case -8:
          if (t === "f")
            return e == 8 ? a = sn(this, this.l) : a = sn([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, a;
          e = 8;
        case 16:
          r = Fa(this, this.l, e);
          break;
      }
  }
  return this.l += e, r;
}
var Qs = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24 & 255;
}, ef = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >> 8 & 255, e[r + 2] = t >> 16 & 255, e[r + 3] = t >> 24 & 255;
}, rf = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255;
};
function tf(e, t, r) {
  var n = 0, a = 0;
  if (r === "dbcs") {
    for (a = 0; a != t.length; ++a)
      rf(this, t.charCodeAt(a), this.l + 2 * a);
    n = 2 * t.length;
  } else if (r === "sbcs") {
    for (t = t.replace(/[^\x00-\x7F]/g, "_"), a = 0; a != t.length; ++a)
      this[this.l + a] = t.charCodeAt(a) & 255;
    n = t.length;
  } else if (r === "hex") {
    for (; a < e; ++a)
      this[this.l++] = parseInt(t.slice(2 * a, 2 * a + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var i = Math.min(this.l + e, this.length);
    for (a = 0; a < Math.min(t.length, e); ++a) {
      var s = t.charCodeAt(a);
      this[this.l++] = s & 255, this[this.l++] = s >> 8;
    }
    for (; this.l < i; )
      this[this.l++] = 0;
    return this;
  } else
    switch (e) {
      case 1:
        n = 1, this[this.l] = t & 255;
        break;
      case 2:
        n = 2, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255;
        break;
      case 3:
        n = 3, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255, t >>>= 8, this[this.l + 2] = t & 255;
        break;
      case 4:
        n = 4, Qs(this, t, this.l);
        break;
      case 8:
        if (n = 8, r === "f") {
          Js(this, t, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        n = 4, ef(this, t, this.l);
        break;
    }
  return this.l += n, this;
}
function Ba(e, t) {
  var r = Fa(this, this.l, e.length >> 1);
  if (r !== e)
    throw new Error(t + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function ar(e, t) {
  e.l = t, e.read_shift = /*::(*/
  Ct, e.chk = Ba, e.write_shift = tf;
}
function wr(e, t) {
  e.l += t;
}
function B(e) {
  var t = Yr(e);
  return ar(t, 0), t;
}
function Qe() {
  var e = [], t = xe ? 256 : 2048, r = function(l) {
    var c = B(l);
    return ar(c, 0), c;
  }, n = r(t), a = function() {
    n && (n.length > n.l && (n = n.slice(0, n.l), n.l = n.length), n.length > 0 && e.push(n), n = null);
  }, i = function(l) {
    return n && l < n.length - n.l ? n : (a(), n = r(Math.max(l + 1, t)));
  }, s = function() {
    return a(), Ve(e);
  }, f = function(l) {
    a(), n = l, n.l == null && (n.l = n.length), i(t);
  };
  return { next: i, push: f, end: s, _bufs: e };
}
function W(e, t, r, n) {
  var a = +t, i;
  if (!isNaN(a)) {
    n || (n = Z1[a].p || (r || []).length || 0), i = 1 + (a >= 128 ? 1 : 0) + 1, n >= 128 && ++i, n >= 16384 && ++i, n >= 2097152 && ++i;
    var s = e.next(i);
    a <= 127 ? s.write_shift(1, a) : (s.write_shift(1, (a & 127) + 128), s.write_shift(1, a >> 7));
    for (var f = 0; f != 4; ++f)
      if (n >= 128)
        s.write_shift(1, (n & 127) + 128), n >>= 7;
      else {
        s.write_shift(1, n);
        break;
      }
    /*:: length != null &&*/
    n > 0 && Yn(r) && e.push(r);
  }
}
function Ot(e, t, r) {
  var n = rr(e);
  if (t.s ? (n.cRel && (n.c += t.s.c), n.rRel && (n.r += t.s.r)) : (n.cRel && (n.c += t.c), n.rRel && (n.r += t.r)), !r || r.biff < 12) {
    for (; n.c >= 256; )
      n.c -= 256;
    for (; n.r >= 65536; )
      n.r -= 65536;
  }
  return n;
}
function U0(e, t, r) {
  var n = rr(e);
  return n.s = Ot(n.s, t.s, r), n.e = Ot(n.e, t.s, r), n;
}
function Dt(e, t) {
  if (e.cRel && e.c < 0)
    for (e = rr(e); e.c < 0; )
      e.c += t > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = rr(e); e.r < 0; )
      e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
  var r = ge(e);
  return !e.cRel && e.cRel != null && (r = sf(r)), !e.rRel && e.rRel != null && (r = nf(r)), r;
}
function kn(e, t) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + je(e.s.c) + ":" + (e.e.cRel ? "" : "$") + je(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + Xe(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Xe(e.e.r) : Dt(e.s, t.biff) + ":" + Dt(e.e, t.biff);
}
function $n(e) {
  return parseInt(af(e), 10) - 1;
}
function Xe(e) {
  return "" + (e + 1);
}
function nf(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function af(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function Jn(e) {
  for (var t = ff(e), r = 0, n = 0; n !== t.length; ++n)
    r = 26 * r + t.charCodeAt(n) - 64;
  return r - 1;
}
function je(e) {
  if (e < 0)
    throw new Error("invalid column " + e);
  var t = "";
  for (++e; e; e = Math.floor((e - 1) / 26))
    t = String.fromCharCode((e - 1) % 26 + 65) + t;
  return t;
}
function sf(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function ff(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function lf(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function Be(e) {
  for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
    var a = e.charCodeAt(n);
    a >= 48 && a <= 57 ? t = 10 * t + (a - 48) : a >= 65 && a <= 90 && (r = 26 * r + (a - 64));
  }
  return { c: r - 1, r: t - 1 };
}
function ge(e) {
  for (var t = e.c + 1, r = ""; t; t = (t - 1) / 26 | 0)
    r = String.fromCharCode((t - 1) % 26 + 65) + r;
  return r + (e.r + 1);
}
function fr(e) {
  var t = e.indexOf(":");
  return t == -1 ? { s: Be(e), e: Be(e) } : { s: Be(e.slice(0, t)), e: Be(e.slice(t + 1)) };
}
function Ie(e, t) {
  return typeof t > "u" || typeof t == "number" ? Ie(e.s, e.e) : (typeof e != "string" && (e = ge(e)), typeof t != "string" && (t = ge(t)), e == t ? e : e + ":" + t);
}
function we(e) {
  var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, r = 0, n = 0, a = 0, i = e.length;
  for (r = 0; n < i && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n)
    r = 26 * r + a;
  for (t.s.c = --r, r = 0; n < i && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n)
    r = 10 * r + a;
  if (t.s.r = --r, n === i || a != 10)
    return t.e.c = t.s.c, t.e.r = t.s.r, t;
  for (++n, r = 0; n != i && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n)
    r = 26 * r + a;
  for (t.e.c = --r, r = 0; n != i && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n)
    r = 10 * r + a;
  return t.e.r = --r, t;
}
function W0(e, t) {
  var r = e.t == "d" && t instanceof Date;
  if (e.z != null)
    try {
      return e.w = br(e.z, r ? er(t) : t);
    } catch {
    }
  try {
    return e.w = br((e.XF || {}).numFmtId || (r ? 14 : 0), r ? er(t) : t);
  } catch {
    return "" + t;
  }
}
function Rr(e, t, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? Wt[e.v] || e.v : t == null ? W0(e, e.v) : W0(e, t));
}
function Zr(e, t) {
  var r = t && t.sheet ? t.sheet : "Sheet1", n = {};
  return n[r] = e, { SheetNames: [r], Sheets: n };
}
function ba(e, t, r) {
  var n = r || {}, a = e ? Array.isArray(e) : n.dense, i = e || (a ? [] : {}), s = 0, f = 0;
  if (i && n.origin != null) {
    if (typeof n.origin == "number")
      s = n.origin;
    else {
      var o = typeof n.origin == "string" ? Be(n.origin) : n.origin;
      s = o.r, f = o.c;
    }
    i["!ref"] || (i["!ref"] = "A1:A1");
  }
  var l = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (i["!ref"]) {
    var c = we(i["!ref"]);
    l.s.c = c.s.c, l.s.r = c.s.r, l.e.c = Math.max(l.e.c, c.e.c), l.e.r = Math.max(l.e.r, c.e.r), s == -1 && (l.e.r = s = c.e.r + 1);
  }
  for (var v = 0; v != t.length; ++v)
    if (t[v]) {
      if (!Array.isArray(t[v]))
        throw new Error("aoa_to_sheet expects an array of arrays");
      for (var x = 0; x != t[v].length; ++x)
        if (!(typeof t[v][x] > "u")) {
          var d = { v: t[v][x] }, E = s + v, u = f + x;
          if (l.s.r > E && (l.s.r = E), l.s.c > u && (l.s.c = u), l.e.r < E && (l.e.r = E), l.e.c < u && (l.e.c = u), t[v][x] && typeof t[v][x] == "object" && !Array.isArray(t[v][x]) && !(t[v][x] instanceof Date))
            d = t[v][x];
          else if (Array.isArray(d.v) && (d.f = t[v][x][1], d.v = d.v[0]), d.v === null)
            if (d.f)
              d.t = "n";
            else if (n.nullError)
              d.t = "e", d.v = 0;
            else if (n.sheetStubs)
              d.t = "z";
            else
              continue;
          else
            typeof d.v == "number" ? d.t = "n" : typeof d.v == "boolean" ? d.t = "b" : d.v instanceof Date ? (d.z = n.dateNF || De[14], n.cellDates ? (d.t = "d", d.w = br(d.z, er(d.v))) : (d.t = "n", d.v = er(d.v), d.w = br(d.z, d.v))) : d.t = "s";
          if (a)
            i[E] || (i[E] = []), i[E][u] && i[E][u].z && (d.z = i[E][u].z), i[E][u] = d;
          else {
            var _ = ge({ c: u, r: E });
            i[_] && i[_].z && (d.z = i[_].z), i[_] = d;
          }
        }
    }
  return l.s.c < 1e7 && (i["!ref"] = Ie(l)), i;
}
function vt(e, t) {
  return ba(null, e, t);
}
function of(e) {
  return e.read_shift(4, "i");
}
function gr(e, t) {
  return t || (t = B(4)), t.write_shift(4, e), t;
}
function Ye(e) {
  var t = e.read_shift(4);
  return t === 0 ? "" : e.read_shift(t, "dbcs");
}
function be(e, t) {
  var r = !1;
  return t == null && (r = !0, t = B(4 + 2 * e.length)), t.write_shift(4, e.length), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
function cf(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function hf(e, t) {
  return t || (t = B(4)), t.write_shift(2, e.ich || 0), t.write_shift(2, e.ifnt || 0), t;
}
function Zn(e, t) {
  var r = e.l, n = e.read_shift(1), a = Ye(e), i = [], s = { t: a, h: a };
  if (n & 1) {
    for (var f = e.read_shift(4), o = 0; o != f; ++o)
      i.push(cf(e));
    s.r = i;
  } else
    s.r = [{ ich: 0, ifnt: 0 }];
  return e.l = r + t, s;
}
function uf(e, t) {
  var r = !1;
  return t == null && (r = !0, t = B(15 + 4 * e.t.length)), t.write_shift(1, 0), be(e.t, t), r ? t.slice(0, t.l) : t;
}
var xf = Zn;
function df(e, t) {
  var r = !1;
  return t == null && (r = !0, t = B(23 + 4 * e.t.length)), t.write_shift(1, 1), be(e.t, t), t.write_shift(4, 1), hf({ ich: 0, ifnt: 0 }, t), r ? t.slice(0, t.l) : t;
}
function ur(e) {
  var t = e.read_shift(4), r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: t, iStyleRef: r };
}
function qr(e, t) {
  return t == null && (t = B(8)), t.write_shift(-4, e.c), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
function Qr(e) {
  var t = e.read_shift(2);
  return t += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: t };
}
function et(e, t) {
  return t == null && (t = B(4)), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
var vf = Ye, Ua = be;
function qn(e) {
  var t = e.read_shift(4);
  return t === 0 || t === 4294967295 ? "" : e.read_shift(t, "dbcs");
}
function fn(e, t) {
  var r = !1;
  return t == null && (r = !0, t = B(127)), t.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
var pf = Ye, Un = qn, Qn = fn;
function Wa(e) {
  var t = e.slice(e.l, e.l + 4), r = t[0] & 1, n = t[0] & 2;
  e.l += 4;
  var a = n === 0 ? sn([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : zr(t, 0) >> 2;
  return r ? a / 100 : a;
}
function Ha(e, t) {
  t == null && (t = B(4));
  var r = 0, n = 0, a = e * 100;
  if (e == (e | 0) && e >= -(1 << 29) && e < 1 << 29 ? n = 1 : a == (a | 0) && a >= -(1 << 29) && a < 1 << 29 && (n = 1, r = 1), n)
    t.write_shift(-4, ((r ? a : e) << 2) + (r + 2));
  else
    throw new Error("unsupported RkNumber " + e);
}
function Va(e) {
  var t = { s: {}, e: {} };
  return t.s.r = e.read_shift(4), t.e.r = e.read_shift(4), t.s.c = e.read_shift(4), t.e.c = e.read_shift(4), t;
}
function mf(e, t) {
  return t || (t = B(16)), t.write_shift(4, e.s.r), t.write_shift(4, e.e.r), t.write_shift(4, e.s.c), t.write_shift(4, e.e.c), t;
}
var rt = Va, pt = mf;
function mt(e) {
  if (e.length - e.l < 8)
    throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function $r(e, t) {
  return (t || B(8)).write_shift(8, e, "f");
}
function gf(e) {
  var t = {}, r = e.read_shift(1), n = r >>> 1, a = e.read_shift(1), i = e.read_shift(2, "i"), s = e.read_shift(1), f = e.read_shift(1), o = e.read_shift(1);
  switch (e.l++, n) {
    case 0:
      t.auto = 1;
      break;
    case 1:
      t.index = a;
      var l = Cf[a];
      l && (t.rgb = Z0(l));
      break;
    case 2:
      t.rgb = Z0([s, f, o]);
      break;
    case 3:
      t.theme = a;
      break;
  }
  return i != 0 && (t.tint = i > 0 ? i / 32767 : i / 32768), t;
}
function ln(e, t) {
  if (t || (t = B(8)), !e || e.auto)
    return t.write_shift(4, 0), t.write_shift(4, 0), t;
  e.index != null ? (t.write_shift(1, 2), t.write_shift(1, e.index)) : e.theme != null ? (t.write_shift(1, 6), t.write_shift(1, e.theme)) : (t.write_shift(1, 5), t.write_shift(1, 0));
  var r = e.tint || 0;
  if (r > 0 ? r *= 32767 : r < 0 && (r *= 32768), t.write_shift(2, r), !e.rgb || e.theme != null)
    t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  else {
    var n = e.rgb || "FFFFFF";
    typeof n == "number" && (n = ("000000" + n.toString(16)).slice(-6)), t.write_shift(1, parseInt(n.slice(0, 2), 16)), t.write_shift(1, parseInt(n.slice(2, 4), 16)), t.write_shift(1, parseInt(n.slice(4, 6), 16)), t.write_shift(1, 255);
  }
  return t;
}
function _f(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = {
    fBold: t & 1,
    fItalic: t & 2,
    fUnderline: t & 4,
    fStrikeout: t & 8,
    fOutline: t & 16,
    fShadow: t & 32,
    fCondense: t & 64,
    fExtend: t & 128
  };
  return r;
}
function Tf(e, t) {
  t || (t = B(2));
  var r = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
  return t.write_shift(1, r), t.write_shift(1, 0), t;
}
var Ga = 2, nr = 3, Jt = 11, on = 19, Zt = 64, Ef = 65, wf = 71, Sf = 4108, Af = 4126, He = 80, H0 = {
  /*::[*/
  1: { n: "CodePage", t: Ga },
  /*::[*/
  2: { n: "Category", t: He },
  /*::[*/
  3: { n: "PresentationFormat", t: He },
  /*::[*/
  4: { n: "ByteCount", t: nr },
  /*::[*/
  5: { n: "LineCount", t: nr },
  /*::[*/
  6: { n: "ParagraphCount", t: nr },
  /*::[*/
  7: { n: "SlideCount", t: nr },
  /*::[*/
  8: { n: "NoteCount", t: nr },
  /*::[*/
  9: { n: "HiddenCount", t: nr },
  /*::[*/
  10: { n: "MultimediaClipCount", t: nr },
  /*::[*/
  11: { n: "ScaleCrop", t: Jt },
  /*::[*/
  12: {
    n: "HeadingPairs",
    t: Sf
    /* VT_VECTOR | VT_VARIANT */
  },
  /*::[*/
  13: {
    n: "TitlesOfParts",
    t: Af
    /* VT_VECTOR | VT_LPSTR */
  },
  /*::[*/
  14: { n: "Manager", t: He },
  /*::[*/
  15: { n: "Company", t: He },
  /*::[*/
  16: { n: "LinksUpToDate", t: Jt },
  /*::[*/
  17: { n: "CharacterCount", t: nr },
  /*::[*/
  19: { n: "SharedDoc", t: Jt },
  /*::[*/
  22: { n: "HyperlinksChanged", t: Jt },
  /*::[*/
  23: { n: "AppVersion", t: nr, p: "version" },
  /*::[*/
  24: { n: "DigSig", t: Ef },
  /*::[*/
  26: { n: "ContentType", t: He },
  /*::[*/
  27: { n: "ContentStatus", t: He },
  /*::[*/
  28: { n: "Language", t: He },
  /*::[*/
  29: { n: "Version", t: He },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: on },
  /*::[*/
  2147483651: { n: "Behavior", t: on },
  /*::[*/
  1919054434: {}
}, V0 = {
  /*::[*/
  1: { n: "CodePage", t: Ga },
  /*::[*/
  2: { n: "Title", t: He },
  /*::[*/
  3: { n: "Subject", t: He },
  /*::[*/
  4: { n: "Author", t: He },
  /*::[*/
  5: { n: "Keywords", t: He },
  /*::[*/
  6: { n: "Comments", t: He },
  /*::[*/
  7: { n: "Template", t: He },
  /*::[*/
  8: { n: "LastAuthor", t: He },
  /*::[*/
  9: { n: "RevNumber", t: He },
  /*::[*/
  10: { n: "EditTime", t: Zt },
  /*::[*/
  11: { n: "LastPrinted", t: Zt },
  /*::[*/
  12: { n: "CreatedDate", t: Zt },
  /*::[*/
  13: { n: "ModifiedDate", t: Zt },
  /*::[*/
  14: { n: "PageCount", t: nr },
  /*::[*/
  15: { n: "WordCount", t: nr },
  /*::[*/
  16: { n: "CharCount", t: nr },
  /*::[*/
  17: { n: "Thumbnail", t: wf },
  /*::[*/
  18: { n: "Application", t: He },
  /*::[*/
  19: { n: "DocSecurity", t: nr },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: on },
  /*::[*/
  2147483651: { n: "Behavior", t: on },
  /*::[*/
  1919054434: {}
};
function Ff(e) {
  return e.map(function(t) {
    return [t >> 16 & 255, t >> 8 & 255, t & 255];
  });
}
var yf = /* @__PURE__ */ Ff([
  /* Color Constants */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  /* Overridable Defaults */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  /* Other entries to appease BIFF8/12 */
  16777215,
  /* 0x40 icvForeground ?? */
  0,
  /* 0x41 icvBackground ?? */
  0,
  /* 0x42 icvFrame ?? */
  0,
  /* 0x43 icv3D ?? */
  0,
  /* 0x44 icv3DText ?? */
  0,
  /* 0x45 icv3DHilite ?? */
  0,
  /* 0x46 icv3DShadow ?? */
  0,
  /* 0x47 icvHilite ?? */
  0,
  /* 0x48 icvCtlText ?? */
  0,
  /* 0x49 icvCtlScrl ?? */
  0,
  /* 0x4A icvCtlInv ?? */
  0,
  /* 0x4B icvCtlBody ?? */
  0,
  /* 0x4C icvCtlFrame ?? */
  0,
  /* 0x4D icvCtlFore ?? */
  0,
  /* 0x4E icvCtlBack ?? */
  0,
  /* 0x4F icvCtlNeutral */
  0,
  /* 0x50 icvInfoBk ?? */
  0
  /* 0x51 icvInfoText ?? */
]), Cf = /* @__PURE__ */ rr(yf), Wt = {
  /*::[*/
  0: "#NULL!",
  /*::[*/
  7: "#DIV/0!",
  /*::[*/
  15: "#VALUE!",
  /*::[*/
  23: "#REF!",
  /*::[*/
  29: "#NAME?",
  /*::[*/
  36: "#NUM!",
  /*::[*/
  42: "#N/A",
  /*::[*/
  43: "#GETTING_DATA",
  /*::[*/
  255: "#WTF?"
}, Of = {
  /* Workbook */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  /* Worksheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  /* Binary Index */
  /* Chartsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  /* Macrosheet */
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  /* Binary Index */
  /* Dialogsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  /* Shared Strings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  /* Styles */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  /* File Properties */
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  /* Custom Data Properties */
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  /* Comments */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  /* Metadata (Stock/Geography and Dynamic Array) */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  /* PivotTable */
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  /* Chart Objects */
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  /* Chart Colors */
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  /* Chart Style */
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  /* Chart Advanced */
  "application/vnd.ms-office.chartex+xml": "TODO",
  /* Calculation Chain */
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  /* Printer Settings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  /* ActiveX */
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  /* Custom Toolbars */
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  /* External Data Connections */
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  /* External Links */
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  /* PivotCache */
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  /* Query Table */
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  /* Shared Workbook */
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  /* Single Cell Table */
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  /* Slicer */
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  /* Sort Map */
  "application/vnd.ms-excel.wsSortMap": "TODO",
  /* Table */
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  /* Themes */
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  /* Theme Override */
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  /* Timeline */
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  /* verify */
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  /* verify */
  /* VBA */
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  /* Volatile Dependencies */
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  /* Control Properties */
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  /* Data Model */
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  /* Survey */
  "application/vnd.ms-excel.Survey+xml": "TODO",
  /* Drawing */
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  /* VML */
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  /* Image */
  "image/png": "TODO",
  sheet: "js"
}, qt = {
  workbooks: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
    xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
  },
  strs: {
    /* Shared Strings */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
    xlsb: "application/vnd.ms-excel.sharedStrings"
  },
  comments: {
    /* Comments */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
    xlsb: "application/vnd.ms-excel.comments"
  },
  sheets: {
    /* Worksheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
    xlsb: "application/vnd.ms-excel.worksheet"
  },
  charts: {
    /* Chartsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
    xlsb: "application/vnd.ms-excel.chartsheet"
  },
  dialogs: {
    /* Dialogsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
    xlsb: "application/vnd.ms-excel.dialogsheet"
  },
  macros: {
    /* Macrosheet (Excel 4.0 Macros) */
    xlsx: "application/vnd.ms-excel.macrosheet+xml",
    xlsb: "application/vnd.ms-excel.macrosheet"
  },
  metadata: {
    /* Metadata (Stock/Geography and Dynamic Array) */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
    xlsb: "application/vnd.ms-excel.sheetMetadata"
  },
  styles: {
    /* Styles */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
    xlsb: "application/vnd.ms-excel.styles"
  }
};
function Xa() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function Ka(e, t) {
  var r = Bs(Of), n = [], a;
  n[n.length] = Ne, n[n.length] = j("Types", null, {
    xmlns: Me.CT,
    "xmlns:xsd": Me.xsd,
    "xmlns:xsi": Me.xsi
  }), n = n.concat([
    ["xml", "application/xml"],
    ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
    ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
    ["data", "application/vnd.openxmlformats-officedocument.model+data"],
    /* from test files */
    ["bmp", "image/bmp"],
    ["png", "image/png"],
    ["gif", "image/gif"],
    ["emf", "image/x-emf"],
    ["wmf", "image/x-wmf"],
    ["jpg", "image/jpeg"],
    ["jpeg", "image/jpeg"],
    ["tif", "image/tiff"],
    ["tiff", "image/tiff"],
    ["pdf", "application/pdf"],
    ["rels", "application/vnd.openxmlformats-package.relationships+xml"]
  ].map(function(o) {
    return j("Default", null, { Extension: o[0], ContentType: o[1] });
  }));
  var i = function(o) {
    e[o] && e[o].length > 0 && (a = e[o][0], n[n.length] = j("Override", null, {
      PartName: (a[0] == "/" ? "" : "/") + a,
      ContentType: qt[o][t.bookType] || qt[o].xlsx
    }));
  }, s = function(o) {
    (e[o] || []).forEach(function(l) {
      n[n.length] = j("Override", null, {
        PartName: (l[0] == "/" ? "" : "/") + l,
        ContentType: qt[o][t.bookType] || qt[o].xlsx
      });
    });
  }, f = function(o) {
    (e[o] || []).forEach(function(l) {
      n[n.length] = j("Override", null, {
        PartName: (l[0] == "/" ? "" : "/") + l,
        ContentType: r[o][0]
      });
    });
  };
  return i("workbooks"), s("sheets"), s("charts"), f("themes"), ["strs", "styles"].forEach(i), ["coreprops", "extprops", "custprops"].forEach(f), f("vba"), f("comments"), f("threadedcomments"), f("drawings"), s("metadata"), f("people"), n.length > 2 && (n[n.length] = "</Types>", n[1] = n[1].replace("/>", ">")), n.join("");
}
var ue = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function za(e) {
  var t = e.lastIndexOf("/");
  return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels";
}
function ct(e) {
  var t = [Ne, j("Relationships", null, {
    //'xmlns:ns0': XMLNS.RELS,
    xmlns: Me.RELS
  })];
  return Ke(e["!id"]).forEach(function(r) {
    t[t.length] = j("Relationship", null, e["!id"][r]);
  }), t.length > 2 && (t[t.length] = "</Relationships>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function pe(e, t, r, n, a, i) {
  if (a || (a = {}), e["!id"] || (e["!id"] = {}), e["!idx"] || (e["!idx"] = 1), t < 0)
    for (t = e["!idx"]; e["!id"]["rId" + t]; ++t)
      ;
  if (e["!idx"] = t + 1, a.Id = "rId" + t, a.Type = n, a.Target = r, i ? a.TargetMode = i : [ue.HLINK, ue.XPATH, ue.XMISS].indexOf(a.Type) > -1 && (a.TargetMode = "External"), e["!id"][a.Id])
    throw new Error("Cannot rewrite rId " + t);
  return e["!id"][a.Id] = a, e[("/" + a.Target).replace("//", "/")] = a, t;
}
function Df(e) {
  var t = [Ne];
  t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var r = 0; r < e.length; ++r)
    t.push('  <manifest:file-entry manifest:full-path="' + e[r][0] + '" manifest:media-type="' + e[r][1] + `"/>
`);
  return t.push("</manifest:manifest>"), t.join("");
}
function G0(e, t, r) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (r || "odf") + "#" + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function kf(e, t) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function Rf(e) {
  var t = [Ne];
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var r = 0; r != e.length; ++r)
    t.push(G0(e[r][0], e[r][1])), t.push(kf("", e[r][0]));
  return t.push(G0("", "Document", "pkg")), t.push("</rdf:RDF>"), t.join("");
}
function ja() {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + en.version + "</meta:generator></office:meta></office:document-meta>";
}
var jr = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
];
function Rn(e, t, r, n, a) {
  a[e] != null || t == null || t === "" || (a[e] = t, t = me(t), n[n.length] = r ? j(e, t, r) : Ge(e, t));
}
function Ya(e, t) {
  var r = t || {}, n = [Ne, j("cp:coreProperties", null, {
    //'xmlns': XMLNS.CORE_PROPS,
    "xmlns:cp": Me.CORE_PROPS,
    "xmlns:dc": Me.dc,
    "xmlns:dcterms": Me.dcterms,
    "xmlns:dcmitype": Me.dcmitype,
    "xmlns:xsi": Me.xsi
  })], a = {};
  if (!e && !r.Props)
    return n.join("");
  e && (e.CreatedDate != null && Rn("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : bn(e.CreatedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, n, a), e.ModifiedDate != null && Rn("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : bn(e.ModifiedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, n, a));
  for (var i = 0; i != jr.length; ++i) {
    var s = jr[i], f = r.Props && r.Props[s[1]] != null ? r.Props[s[1]] : e ? e[s[1]] : null;
    f === !0 ? f = "1" : f === !1 ? f = "0" : typeof f == "number" && (f = String(f)), f != null && Rn(s[0], f, null, n, a);
  }
  return n.length > 2 && (n[n.length] = "</cp:coreProperties>", n[1] = n[1].replace("/>", ">")), n.join("");
}
var ht = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
], $a = [
  "Worksheets",
  "SheetNames",
  "NamedRanges",
  "DefinedNames",
  "Chartsheets",
  "ChartNames"
];
function Ja(e) {
  var t = [], r = j;
  return e || (e = {}), e.Application = "SheetJS", t[t.length] = Ne, t[t.length] = j("Properties", null, {
    xmlns: Me.EXT_PROPS,
    "xmlns:vt": Me.vt
  }), ht.forEach(function(n) {
    if (e[n[1]] !== void 0) {
      var a;
      switch (n[2]) {
        case "string":
          a = me(String(e[n[1]]));
          break;
        case "bool":
          a = e[n[1]] ? "true" : "false";
          break;
      }
      a !== void 0 && (t[t.length] = r(n[0], a));
    }
  }), t[t.length] = r("HeadingPairs", r("vt:vector", r("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + r("vt:variant", r("vt:i4", String(e.Worksheets))), { size: 2, baseType: "variant" })), t[t.length] = r("TitlesOfParts", r("vt:vector", e.SheetNames.map(function(n) {
    return "<vt:lpstr>" + me(n) + "</vt:lpstr>";
  }).join(""), { size: e.Worksheets, baseType: "lpstr" })), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Za(e) {
  var t = [Ne, j("Properties", null, {
    xmlns: Me.CUST_PROPS,
    "xmlns:vt": Me.vt
  })];
  if (!e)
    return t.join("");
  var r = 1;
  return Ke(e).forEach(function(a) {
    ++r, t[t.length] = j("property", Ys(e[a], !0), {
      fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
      pid: r,
      name: me(a)
    });
  }), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
var X0 = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  /* TotalTime: 'TotalTime', */
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  /* Pages */
  /* Words */
  /* Characters */
  Category: "Category",
  /* PresentationFormat */
  Manager: "Manager",
  Company: "Company",
  /* Guid */
  /* HyperlinkBase */
  /* Bytes */
  /* Lines */
  /* Paragraphs */
  /* CharactersWithSpaces */
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  /* NOTE: missing from schema */
  Identifier: "Identifier",
  /* NOTE: missing from schema */
  Language: "Language"
  /* NOTE: missing from schema */
};
function If(e, t) {
  var r = [];
  return Ke(X0).map(function(n) {
    for (var a = 0; a < jr.length; ++a)
      if (jr[a][1] == n)
        return jr[a];
    for (a = 0; a < ht.length; ++a)
      if (ht[a][1] == n)
        return ht[a];
    throw n;
  }).forEach(function(n) {
    if (e[n[1]] != null) {
      var a = t && t.Props && t.Props[n[1]] != null ? t.Props[n[1]] : e[n[1]];
      switch (n[2]) {
        case "date":
          a = new Date(a).toISOString().replace(/\.\d*Z/, "Z");
          break;
      }
      typeof a == "number" ? a = String(a) : a === !0 || a === !1 ? a = a ? "1" : "0" : a instanceof Date && (a = new Date(a).toISOString().replace(/\.\d*Z/, "")), r.push(Ge(X0[n[1]] || n[1], a));
    }
  }), j("DocumentProperties", r.join(""), { xmlns: ir.o });
}
function Nf(e, t) {
  var r = ["Worksheets", "SheetNames"], n = "CustomDocumentProperties", a = [];
  return e && Ke(e).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      for (var s = 0; s < jr.length; ++s)
        if (i == jr[s][1])
          return;
      for (s = 0; s < ht.length; ++s)
        if (i == ht[s][1])
          return;
      for (s = 0; s < r.length; ++s)
        if (i == r[s])
          return;
      var f = e[i], o = "string";
      typeof f == "number" ? (o = "float", f = String(f)) : f === !0 || f === !1 ? (o = "boolean", f = f ? "1" : "0") : f = String(f), a.push(j(R0(i), f, { "dt:dt": o }));
    }
  }), t && Ke(t).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(t, i) && !(e && Object.prototype.hasOwnProperty.call(e, i))) {
      var s = t[i], f = "string";
      typeof s == "number" ? (f = "float", s = String(s)) : s === !0 || s === !1 ? (f = "boolean", s = s ? "1" : "0") : s instanceof Date ? (f = "dateTime.tz", s = s.toISOString()) : s = String(s), a.push(j(R0(i), s, { "dt:dt": f }));
    }
  }), "<" + n + ' xmlns="' + ir.o + '">' + a.join("") + "</" + n + ">";
}
function Pf(e) {
  var t = typeof e == "string" ? new Date(Date.parse(e)) : e, r = t.getTime() / 1e3 + 11644473600, n = r % Math.pow(2, 32), a = (r - n) / Math.pow(2, 32);
  n *= 1e7, a *= 1e7;
  var i = n / Math.pow(2, 32) | 0;
  i > 0 && (n = n % Math.pow(2, 32), a += i);
  var s = B(8);
  return s.write_shift(4, n), s.write_shift(4, a), s;
}
function K0(e, t) {
  var r = B(4), n = B(4);
  switch (r.write_shift(4, e == 80 ? 31 : e), e) {
    case 3:
      n.write_shift(-4, t);
      break;
    case 5:
      n = B(8), n.write_shift(8, t, "f");
      break;
    case 11:
      n.write_shift(4, t ? 1 : 0);
      break;
    case 64:
      n = Pf(t);
      break;
    case 31:
    case 80:
      for (n = B(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)), n.write_shift(4, t.length + 1), n.write_shift(0, t, "dbcs"); n.l != n.length; )
        n.write_shift(1, 0);
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + e + " " + t);
  }
  return Ve([r, n]);
}
var qa = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function Lf(e) {
  switch (typeof e) {
    case "boolean":
      return 11;
    case "number":
      return (e | 0) == e ? 3 : 5;
    case "string":
      return 31;
    case "object":
      if (e instanceof Date)
        return 64;
      break;
  }
  return -1;
}
function z0(e, t, r) {
  var n = B(8), a = [], i = [], s = 8, f = 0, o = B(8), l = B(8);
  if (o.write_shift(4, 2), o.write_shift(4, 1200), l.write_shift(4, 1), i.push(o), a.push(l), s += 8 + o.length, !t) {
    l = B(8), l.write_shift(4, 0), a.unshift(l);
    var c = [B(4)];
    for (c[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var v = e[f][0];
      for (o = B(8 + 2 * (v.length + 1) + (v.length % 2 ? 0 : 2)), o.write_shift(4, f + 2), o.write_shift(4, v.length + 1), o.write_shift(0, v, "dbcs"); o.l != o.length; )
        o.write_shift(1, 0);
      c.push(o);
    }
    o = Ve(c), i.unshift(o), s += 8 + o.length;
  }
  for (f = 0; f < e.length; ++f)
    if (!(t && !t[e[f][0]]) && !(qa.indexOf(e[f][0]) > -1 || $a.indexOf(e[f][0]) > -1) && e[f][1] != null) {
      var x = e[f][1], d = 0;
      if (t) {
        d = +t[e[f][0]];
        var E = r[d];
        if (E.p == "version" && typeof x == "string") {
          var u = x.split(".");
          x = (+u[0] << 16) + (+u[1] || 0);
        }
        o = K0(E.t, x);
      } else {
        var _ = Lf(x);
        _ == -1 && (_ = 31, x = String(x)), o = K0(_, x);
      }
      i.push(o), l = B(8), l.write_shift(4, t ? d : 2 + f), a.push(l), s += 8 + o.length;
    }
  var O = 8 * (i.length + 1);
  for (f = 0; f < i.length; ++f)
    a[f].write_shift(4, O), O += i[f].length;
  return n.write_shift(4, s), n.write_shift(4, i.length), Ve([n].concat(a).concat(i));
}
function j0(e, t, r, n, a, i) {
  var s = B(a ? 68 : 48), f = [s];
  s.write_shift(2, 65534), s.write_shift(2, 0), s.write_shift(4, 842412599), s.write_shift(16, Te.utils.consts.HEADER_CLSID, "hex"), s.write_shift(4, a ? 2 : 1), s.write_shift(16, t, "hex"), s.write_shift(4, a ? 68 : 48);
  var o = z0(e, r, n);
  if (f.push(o), a) {
    var l = z0(a, null, null);
    s.write_shift(16, i, "hex"), s.write_shift(4, 68 + o.length), f.push(l);
  }
  return Ve(f);
}
function Mf(e, t) {
  t || (t = B(e));
  for (var r = 0; r < e; ++r)
    t.write_shift(1, 0);
  return t;
}
function Bf(e, t) {
  return e.read_shift(t) === 1;
}
function Ze(e, t) {
  return t || (t = B(2)), t.write_shift(2, +!!e), t;
}
function Qa(e) {
  return e.read_shift(2, "u");
}
function hr(e, t) {
  return t || (t = B(2)), t.write_shift(2, e), t;
}
function ei(e, t, r) {
  return r || (r = B(2)), r.write_shift(1, t == "e" ? +e : +!!e), r.write_shift(1, t == "e" ? 1 : 0), r;
}
function ri(e, t, r) {
  var n = e.read_shift(r && r.biff >= 12 ? 2 : 1), a = "sbcs-cont";
  if (r && r.biff >= 8, !r || r.biff == 8) {
    var i = e.read_shift(1);
    i && (a = "dbcs-cont");
  } else
    r.biff == 12 && (a = "wstr");
  r.biff >= 2 && r.biff <= 5 && (a = "cpstr");
  var s = n ? e.read_shift(n, a) : "";
  return s;
}
function bf(e) {
  var t = e.t || "", r = B(3);
  r.write_shift(2, t.length), r.write_shift(1, 1);
  var n = B(2 * t.length);
  n.write_shift(2 * t.length, t, "utf16le");
  var a = [r, n];
  return Ve(a);
}
function Uf(e, t, r) {
  var n;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return e.read_shift(t, "cpstr");
    if (r.biff >= 12)
      return e.read_shift(t, "dbcs-cont");
  }
  var a = e.read_shift(1);
  return a === 0 ? n = e.read_shift(t, "sbcs-cont") : n = e.read_shift(t, "dbcs-cont"), n;
}
function Wf(e, t, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, "") : Uf(e, n, r);
}
function Hf(e, t, r) {
  if (r.biff > 5)
    return Wf(e, t, r);
  var n = e.read_shift(1);
  return n === 0 ? (e.l++, "") : e.read_shift(n, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function ti(e, t, r) {
  return r || (r = B(3 + 2 * e.length)), r.write_shift(2, e.length), r.write_shift(1, 1), r.write_shift(31, e, "utf16le"), r;
}
function Y0(e, t) {
  t || (t = B(6 + e.length * 2)), t.write_shift(4, 1 + e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(2, e.charCodeAt(r));
  return t.write_shift(2, 0), t;
}
function Vf(e) {
  var t = B(512), r = 0, n = e.Target;
  n.slice(0, 7) == "file://" && (n = n.slice(7));
  var a = n.indexOf("#"), i = a > -1 ? 31 : 23;
  switch (n.charAt(0)) {
    case "#":
      i = 28;
      break;
    case ".":
      i &= -3;
      break;
  }
  t.write_shift(4, 2), t.write_shift(4, i);
  var s = [8, 6815827, 6619237, 4849780, 83];
  for (r = 0; r < s.length; ++r)
    t.write_shift(4, s[r]);
  if (i == 28)
    n = n.slice(1), Y0(n, t);
  else if (i & 2) {
    for (s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), r = 0; r < s.length; ++r)
      t.write_shift(1, parseInt(s[r], 16));
    var f = a > -1 ? n.slice(0, a) : n;
    for (t.write_shift(4, 2 * (f.length + 1)), r = 0; r < f.length; ++r)
      t.write_shift(2, f.charCodeAt(r));
    t.write_shift(2, 0), i & 8 && Y0(a > -1 ? n.slice(a + 1) : "", t);
  } else {
    for (s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), r = 0; r < s.length; ++r)
      t.write_shift(1, parseInt(s[r], 16));
    for (var o = 0; n.slice(o * 3, o * 3 + 3) == "../" || n.slice(o * 3, o * 3 + 3) == "..\\"; )
      ++o;
    for (t.write_shift(2, o), t.write_shift(4, n.length - 3 * o + 1), r = 0; r < n.length - 3 * o; ++r)
      t.write_shift(1, n.charCodeAt(r + 3 * o) & 255);
    for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), r = 0; r < 6; ++r)
      t.write_shift(4, 0);
  }
  return t.slice(0, t.l);
}
function Jr(e, t, r, n) {
  return n || (n = B(6)), n.write_shift(2, e), n.write_shift(2, t), n.write_shift(2, r || 0), n;
}
function Gf(e, t, r) {
  var n = r.biff > 8 ? 4 : 2, a = e.read_shift(n), i = e.read_shift(n, "i"), s = e.read_shift(n, "i");
  return [a, i, s];
}
function Xf(e) {
  var t = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2), a = e.read_shift(2);
  return { s: { c: n, r: t }, e: { c: a, r } };
}
function ni(e, t) {
  return t || (t = B(8)), t.write_shift(2, e.s.r), t.write_shift(2, e.e.r), t.write_shift(2, e.s.c), t.write_shift(2, e.e.c), t;
}
function e0(e, t, r) {
  var n = 1536, a = 16;
  switch (r.bookType) {
    case "biff8":
      break;
    case "biff5":
      n = 1280, a = 8;
      break;
    case "biff4":
      n = 4, a = 6;
      break;
    case "biff3":
      n = 3, a = 6;
      break;
    case "biff2":
      n = 2, a = 4;
      break;
    case "xla":
      break;
    default:
      throw new Error("unsupported BIFF version");
  }
  var i = B(a);
  return i.write_shift(2, n), i.write_shift(2, t), a > 4 && i.write_shift(2, 29282), a > 6 && i.write_shift(2, 1997), a > 8 && (i.write_shift(2, 49161), i.write_shift(2, 1), i.write_shift(2, 1798), i.write_shift(2, 0)), i;
}
function Kf(e, t) {
  var r = !t || t.biff == 8, n = B(r ? 112 : 54);
  for (n.write_shift(t.biff == 8 ? 2 : 1, 7), r && n.write_shift(1, 0), n.write_shift(4, 859007059), n.write_shift(4, 5458548 | (r ? 0 : 536870912)); n.l < n.length; )
    n.write_shift(1, r ? 0 : 32);
  return n;
}
function zf(e, t) {
  var r = !t || t.biff >= 8 ? 2 : 1, n = B(8 + r * e.name.length);
  n.write_shift(4, e.pos), n.write_shift(1, e.hs || 0), n.write_shift(1, e.dt), n.write_shift(1, e.name.length), t.biff >= 8 && n.write_shift(1, 1), n.write_shift(r * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
  var a = n.slice(0, n.l);
  return a.l = n.l, a;
}
function jf(e, t) {
  var r = B(8);
  r.write_shift(4, e.Count), r.write_shift(4, e.Unique);
  for (var n = [], a = 0; a < e.length; ++a)
    n[a] = bf(e[a]);
  var i = Ve([r].concat(n));
  return i.parts = [r.length].concat(n.map(function(s) {
    return s.length;
  })), i;
}
function Yf() {
  var e = B(18);
  return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e;
}
function $f(e) {
  var t = B(18), r = 1718;
  return e && e.RTL && (r |= 64), t.write_shift(2, r), t.write_shift(4, 0), t.write_shift(4, 64), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
function Jf(e, t) {
  var r = e.name || "Arial", n = t && t.biff == 5, a = n ? 15 + r.length : 16 + 2 * r.length, i = B(a);
  return i.write_shift(2, (e.sz || 12) * 20), i.write_shift(4, 0), i.write_shift(2, 400), i.write_shift(4, 0), i.write_shift(2, 0), i.write_shift(1, r.length), n || i.write_shift(1, 1), i.write_shift((n ? 1 : 2) * r.length, r, n ? "sbcs" : "utf16le"), i;
}
function Zf(e, t, r, n) {
  var a = B(10);
  return Jr(e, t, n, a), a.write_shift(4, r), a;
}
function qf(e, t, r, n, a) {
  var i = !a || a.biff == 8, s = B(8 + +i + (1 + i) * r.length);
  return Jr(e, t, n, s), s.write_shift(2, r.length), i && s.write_shift(1, 1), s.write_shift((1 + i) * r.length, r, i ? "utf16le" : "sbcs"), s;
}
function Qf(e, t, r, n) {
  var a = r && r.biff == 5;
  n || (n = B(a ? 3 + t.length : 5 + 2 * t.length)), n.write_shift(2, e), n.write_shift(a ? 1 : 2, t.length), a || n.write_shift(1, 1), n.write_shift((a ? 1 : 2) * t.length, t, a ? "sbcs" : "utf16le");
  var i = n.length > n.l ? n.slice(0, n.l) : n;
  return i.l == null && (i.l = i.length), i;
}
function el(e, t) {
  var r = t.biff == 8 || !t.biff ? 4 : 2, n = B(2 * r + 6);
  return n.write_shift(r, e.s.r), n.write_shift(r, e.e.r + 1), n.write_shift(2, e.s.c), n.write_shift(2, e.e.c + 1), n.write_shift(2, 0), n;
}
function $0(e, t, r, n) {
  var a = r && r.biff == 5;
  n || (n = B(a ? 16 : 20)), n.write_shift(2, 0), e.style ? (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, 65524)) : (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, t << 4));
  var i = 0;
  return e.numFmtId > 0 && a && (i |= 1024), n.write_shift(4, i), n.write_shift(4, 0), a || n.write_shift(4, 0), n.write_shift(2, 0), n;
}
function rl(e) {
  var t = B(8);
  return t.write_shift(4, 0), t.write_shift(2, e[0] ? e[0] + 1 : 0), t.write_shift(2, e[1] ? e[1] + 1 : 0), t;
}
function tl(e, t, r, n, a, i) {
  var s = B(8);
  return Jr(e, t, n, s), ei(r, i, s), s;
}
function nl(e, t, r, n) {
  var a = B(14);
  return Jr(e, t, n, a), $r(r, a), a;
}
function al(e, t, r) {
  if (r.biff < 8)
    return il(e, t, r);
  for (var n = [], a = e.l + t, i = e.read_shift(r.biff > 8 ? 4 : 2); i-- !== 0; )
    n.push(Gf(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != a)
    throw new Error("Bad ExternSheet: " + e.l + " != " + a);
  return n;
}
function il(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = ri(e, t, r);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function sl(e) {
  var t = B(2 + e.length * 8);
  t.write_shift(2, e.length);
  for (var r = 0; r < e.length; ++r)
    ni(e[r], t);
  return t;
}
function fl(e) {
  var t = B(24), r = Be(e[0]);
  t.write_shift(2, r.r), t.write_shift(2, r.r), t.write_shift(2, r.c), t.write_shift(2, r.c);
  for (var n = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), a = 0; a < 16; ++a)
    t.write_shift(1, parseInt(n[a], 16));
  return Ve([t, Vf(e[1])]);
}
function ll(e) {
  var t = e[1].Tooltip, r = B(10 + 2 * (t.length + 1));
  r.write_shift(2, 2048);
  var n = Be(e[0]);
  r.write_shift(2, n.r), r.write_shift(2, n.r), r.write_shift(2, n.c), r.write_shift(2, n.c);
  for (var a = 0; a < t.length; ++a)
    r.write_shift(2, t.charCodeAt(a));
  return r.write_shift(2, 0), r;
}
function ol(e) {
  return e || (e = B(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function cl(e, t, r) {
  if (!r.cellStyles)
    return wr(e, t);
  var n = r && r.biff >= 12 ? 4 : 2, a = e.read_shift(n), i = e.read_shift(n), s = e.read_shift(n), f = e.read_shift(n), o = e.read_shift(2);
  n == 2 && (e.l += 2);
  var l = { s: a, e: i, w: s, ixfe: f, flags: o };
  return (r.biff >= 5 || !r.biff) && (l.level = o >> 8 & 7), l;
}
function hl(e, t) {
  var r = B(12);
  r.write_shift(2, t), r.write_shift(2, t), r.write_shift(2, e.width * 256), r.write_shift(2, 0);
  var n = 0;
  return e.hidden && (n |= 1), r.write_shift(1, n), n = e.level || 0, r.write_shift(1, n), r.write_shift(2, 0), r;
}
function ul(e) {
  for (var t = B(2 * e), r = 0; r < e; ++r)
    t.write_shift(2, r + 1);
  return t;
}
function xl(e, t, r) {
  var n = B(15);
  return Vt(n, e, t), n.write_shift(8, r, "f"), n;
}
function dl(e, t, r) {
  var n = B(9);
  return Vt(n, e, t), n.write_shift(2, r), n;
}
var vl = /* @__PURE__ */ function() {
  var e = {
    /* Code Pages Supported by Visual FoxPro */
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /* shapefile DBF extension */
    /*::[*/
    0: 20127,
    /*::[*/
    8: 865,
    /*::[*/
    9: 437,
    /*::[*/
    10: 850,
    /*::[*/
    11: 437,
    /*::[*/
    13: 437,
    /*::[*/
    14: 850,
    /*::[*/
    15: 437,
    /*::[*/
    16: 850,
    /*::[*/
    17: 437,
    /*::[*/
    18: 850,
    /*::[*/
    19: 932,
    /*::[*/
    20: 850,
    /*::[*/
    21: 437,
    /*::[*/
    22: 850,
    /*::[*/
    23: 865,
    /*::[*/
    24: 437,
    /*::[*/
    25: 437,
    /*::[*/
    26: 850,
    /*::[*/
    27: 437,
    /*::[*/
    28: 863,
    /*::[*/
    29: 850,
    /*::[*/
    31: 852,
    /*::[*/
    34: 852,
    /*::[*/
    35: 852,
    /*::[*/
    36: 860,
    /*::[*/
    37: 850,
    /*::[*/
    38: 866,
    /*::[*/
    55: 850,
    /*::[*/
    64: 852,
    /*::[*/
    77: 936,
    /*::[*/
    78: 949,
    /*::[*/
    79: 950,
    /*::[*/
    80: 874,
    /*::[*/
    87: 1252,
    /*::[*/
    88: 1252,
    /*::[*/
    89: 1252,
    /*::[*/
    108: 863,
    /*::[*/
    134: 737,
    /*::[*/
    135: 852,
    /*::[*/
    136: 857,
    /*::[*/
    204: 1257,
    /*::[*/
    255: 16969
  }, t = Gn({
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /*::[*/
    0: 20127
  });
  function r(f, o) {
    var l = [], c = Yr(1);
    switch (o.type) {
      case "base64":
        c = pr(kr(f));
        break;
      case "binary":
        c = pr(f);
        break;
      case "buffer":
      case "array":
        c = f;
        break;
    }
    ar(c, 0);
    var v = c.read_shift(1), x = !!(v & 136), d = !1, E = !1;
    switch (v) {
      case 2:
        break;
      case 3:
        break;
      case 48:
        d = !0, x = !0;
        break;
      case 49:
        d = !0, x = !0;
        break;
      case 131:
        break;
      case 139:
        break;
      case 140:
        E = !0;
        break;
      case 245:
        break;
      default:
        throw new Error("DBF Unsupported Version: " + v.toString(16));
    }
    var u = 0, _ = 521;
    v == 2 && (u = c.read_shift(2)), c.l += 3, v != 2 && (u = c.read_shift(4)), u > 1048576 && (u = 1e6), v != 2 && (_ = c.read_shift(2));
    var O = c.read_shift(2), k = o.codepage || 1252;
    v != 2 && (c.l += 16, c.read_shift(1), c[c.l] !== 0 && (k = e[c[c.l]]), c.l += 1, c.l += 2), E && (c.l += 36);
    for (var y = [], M = {}, Y = Math.min(c.length, v == 2 ? 521 : _ - 10 - (d ? 264 : 0)), ee = E ? 32 : 11; c.l < Y && c[c.l] != 13; )
      switch (M = {}, M.name = Kr.utils.decode(k, c.slice(c.l, c.l + ee)).replace(/[\u0000\r\n].*$/g, ""), c.l += ee, M.type = String.fromCharCode(c.read_shift(1)), v != 2 && !E && (M.offset = c.read_shift(4)), M.len = c.read_shift(1), v == 2 && (M.offset = c.read_shift(2)), M.dec = c.read_shift(1), M.name.length && y.push(M), v != 2 && (c.l += E ? 13 : 14), M.type) {
        case "B":
          (!d || M.len != 8) && o.WTF && console.log("Skipping " + M.name + ":" + M.type);
          break;
        case "G":
        case "P":
          o.WTF && console.log("Skipping " + M.name + ":" + M.type);
          break;
        case "+":
        case "0":
        case "@":
        case "C":
        case "D":
        case "F":
        case "I":
        case "L":
        case "M":
        case "N":
        case "O":
        case "T":
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + M.type);
      }
    if (c[c.l] !== 13 && (c.l = _ - 1), c.read_shift(1) !== 13)
      throw new Error("DBF Terminator not found " + c.l + " " + c[c.l]);
    c.l = _;
    var C = 0, U = 0;
    for (l[0] = [], U = 0; U != y.length; ++U)
      l[0][U] = y[U].name;
    for (; u-- > 0; ) {
      if (c[c.l] === 42) {
        c.l += O;
        continue;
      }
      for (++c.l, l[++C] = [], U = 0, U = 0; U != y.length; ++U) {
        var L = c.slice(c.l, c.l + y[U].len);
        c.l += y[U].len, ar(L, 0);
        var V = Kr.utils.decode(k, L);
        switch (y[U].type) {
          case "C":
            V.trim().length && (l[C][U] = V.replace(/\s+$/, ""));
            break;
          case "D":
            V.length === 8 ? l[C][U] = new Date(+V.slice(0, 4), +V.slice(4, 6) - 1, +V.slice(6, 8)) : l[C][U] = V;
            break;
          case "F":
            l[C][U] = parseFloat(V.trim());
            break;
          case "+":
          case "I":
            l[C][U] = E ? L.read_shift(-4, "i") ^ 2147483648 : L.read_shift(4, "i");
            break;
          case "L":
            switch (V.trim().toUpperCase()) {
              case "Y":
              case "T":
                l[C][U] = !0;
                break;
              case "N":
              case "F":
                l[C][U] = !1;
                break;
              case "":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + V + "|");
            }
            break;
          case "M":
            if (!x)
              throw new Error("DBF Unexpected MEMO for type " + v.toString(16));
            l[C][U] = "##MEMO##" + (E ? parseInt(V.trim(), 10) : L.read_shift(4));
            break;
          case "N":
            V = V.replace(/\u0000/g, "").trim(), V && V != "." && (l[C][U] = +V || 0);
            break;
          case "@":
            l[C][U] = new Date(L.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            l[C][U] = new Date((L.read_shift(4) - 2440588) * 864e5 + L.read_shift(4));
            break;
          case "Y":
            l[C][U] = L.read_shift(4, "i") / 1e4 + L.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            l[C][U] = -L.read_shift(-8, "f");
            break;
          case "B":
            if (d && y[U].len == 8) {
              l[C][U] = L.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            L.l += y[U].len;
            break;
          case "0":
            if (y[U].name === "_NullFlags")
              break;
          default:
            throw new Error("DBF Unsupported data type " + y[U].type);
        }
      }
    }
    if (v != 2 && c.l < c.length && c[c.l++] != 26)
      throw new Error("DBF EOF Marker missing " + (c.l - 1) + " of " + c.length + " " + c[c.l - 1].toString(16));
    return o && o.sheetRows && (l = l.slice(0, o.sheetRows)), o.DBF = y, l;
  }
  function n(f, o) {
    var l = o || {};
    l.dateNF || (l.dateNF = "yyyymmdd");
    var c = vt(r(f, l), l);
    return c["!cols"] = l.DBF.map(function(v) {
      return {
        wch: v.len,
        DBF: v
      };
    }), delete l.DBF, c;
  }
  function a(f, o) {
    try {
      return Zr(n(f, o), o);
    } catch (l) {
      if (o && o.WTF)
        throw l;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var i = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function s(f, o) {
    var l = o || {};
    if (+l.codepage >= 0 && Rt(+l.codepage), l.type == "string")
      throw new Error("Cannot write DBF to JS string");
    var c = Qe(), v = dn(f, { header: 1, raw: !0, cellDates: !0 }), x = v[0], d = v.slice(1), E = f["!cols"] || [], u = 0, _ = 0, O = 0, k = 1;
    for (u = 0; u < x.length; ++u) {
      if (((E[u] || {}).DBF || {}).name) {
        x[u] = E[u].DBF.name, ++O;
        continue;
      }
      if (x[u] != null) {
        if (++O, typeof x[u] == "number" && (x[u] = x[u].toString(10)), typeof x[u] != "string")
          throw new Error("DBF Invalid column name " + x[u] + " |" + typeof x[u] + "|");
        if (x.indexOf(x[u]) !== u) {
          for (_ = 0; _ < 1024; ++_)
            if (x.indexOf(x[u] + "_" + _) == -1) {
              x[u] += "_" + _;
              break;
            }
        }
      }
    }
    var y = we(f["!ref"]), M = [], Y = [], ee = [];
    for (u = 0; u <= y.e.c - y.s.c; ++u) {
      var C = "", U = "", L = 0, V = [];
      for (_ = 0; _ < d.length; ++_)
        d[_][u] != null && V.push(d[_][u]);
      if (V.length == 0 || x[u] == null) {
        M[u] = "?";
        continue;
      }
      for (_ = 0; _ < V.length; ++_) {
        switch (typeof V[_]) {
          case "number":
            U = "B";
            break;
          case "string":
            U = "C";
            break;
          case "boolean":
            U = "L";
            break;
          case "object":
            U = V[_] instanceof Date ? "D" : "C";
            break;
          default:
            U = "C";
        }
        L = Math.max(L, String(V[_]).length), C = C && C != U ? "C" : U;
      }
      L > 250 && (L = 250), U = ((E[u] || {}).DBF || {}).type, U == "C" && E[u].DBF.len > L && (L = E[u].DBF.len), C == "B" && U == "N" && (C = "N", ee[u] = E[u].DBF.dec, L = E[u].DBF.len), Y[u] = C == "C" || U == "N" ? L : i[C] || 0, k += Y[u], M[u] = C;
    }
    var G = c.next(32);
    for (G.write_shift(4, 318902576), G.write_shift(4, d.length), G.write_shift(2, 296 + 32 * O), G.write_shift(2, k), u = 0; u < 4; ++u)
      G.write_shift(4, 0);
    for (G.write_shift(4, 0 | (+t[
      /*::String(*/
      ia
      /*::)*/
    ] || 3) << 8), u = 0, _ = 0; u < x.length; ++u)
      if (x[u] != null) {
        var K = c.next(32), re = (x[u].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
        K.write_shift(1, re, "sbcs"), K.write_shift(1, M[u] == "?" ? "C" : M[u], "sbcs"), K.write_shift(4, _), K.write_shift(1, Y[u] || i[M[u]] || 0), K.write_shift(1, ee[u] || 0), K.write_shift(1, 2), K.write_shift(4, 0), K.write_shift(1, 0), K.write_shift(4, 0), K.write_shift(4, 0), _ += Y[u] || i[M[u]] || 0;
      }
    var _e = c.next(264);
    for (_e.write_shift(4, 13), u = 0; u < 65; ++u)
      _e.write_shift(4, 0);
    for (u = 0; u < d.length; ++u) {
      var oe = c.next(k);
      for (oe.write_shift(1, 0), _ = 0; _ < x.length; ++_)
        if (x[_] != null)
          switch (M[_]) {
            case "L":
              oe.write_shift(1, d[u][_] == null ? 63 : d[u][_] ? 84 : 70);
              break;
            case "B":
              oe.write_shift(8, d[u][_] || 0, "f");
              break;
            case "N":
              var Ue = "0";
              for (typeof d[u][_] == "number" && (Ue = d[u][_].toFixed(ee[_] || 0)), O = 0; O < Y[_] - Ue.length; ++O)
                oe.write_shift(1, 32);
              oe.write_shift(1, Ue, "sbcs");
              break;
            case "D":
              d[u][_] ? (oe.write_shift(4, ("0000" + d[u][_].getFullYear()).slice(-4), "sbcs"), oe.write_shift(2, ("00" + (d[u][_].getMonth() + 1)).slice(-2), "sbcs"), oe.write_shift(2, ("00" + d[u][_].getDate()).slice(-2), "sbcs")) : oe.write_shift(8, "00000000", "sbcs");
              break;
            case "C":
              var ke = String(d[u][_] != null ? d[u][_] : "").slice(0, Y[_]);
              for (oe.write_shift(1, ke, "sbcs"), O = 0; O < Y[_] - ke.length; ++O)
                oe.write_shift(1, 32);
              break;
          }
    }
    return c.next(1).write_shift(1, 26), c.end();
  }
  return {
    to_workbook: a,
    to_sheet: n,
    from_sheet: s
  };
}(), pl = /* @__PURE__ */ function() {
  var e = {
    AA: "À",
    BA: "Á",
    CA: "Â",
    DA: 195,
    HA: "Ä",
    JA: 197,
    AE: "È",
    BE: "É",
    CE: "Ê",
    HE: "Ë",
    AI: "Ì",
    BI: "Í",
    CI: "Î",
    HI: "Ï",
    AO: "Ò",
    BO: "Ó",
    CO: "Ô",
    DO: 213,
    HO: "Ö",
    AU: "Ù",
    BU: "Ú",
    CU: "Û",
    HU: "Ü",
    Aa: "à",
    Ba: "á",
    Ca: "â",
    Da: 227,
    Ha: "ä",
    Ja: 229,
    Ae: "è",
    Be: "é",
    Ce: "ê",
    He: "ë",
    Ai: "ì",
    Bi: "í",
    Ci: "î",
    Hi: "ï",
    Ao: "ò",
    Bo: "ó",
    Co: "ô",
    Do: 245,
    Ho: "ö",
    Au: "ù",
    Bu: "ú",
    Cu: "û",
    Hu: "ü",
    KC: "Ç",
    Kc: "ç",
    q: "æ",
    z: "œ",
    a: "Æ",
    j: "Œ",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    /*::[*/
    0: 176,
    /*::[*/
    1: 177,
    /*::[*/
    2: 178,
    /*::[*/
    3: 179,
    /*::[*/
    5: 181,
    /*::[*/
    6: 182,
    /*::[*/
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  }, t = new RegExp("\x1BN(" + Ke(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"), r = function(x, d) {
    var E = e[d];
    return typeof E == "number" ? _0(E) : E;
  }, n = function(x, d, E) {
    var u = d.charCodeAt(0) - 32 << 4 | E.charCodeAt(0) - 48;
    return u == 59 ? x : _0(u);
  };
  e["|"] = 254;
  function a(x, d) {
    switch (d.type) {
      case "base64":
        return i(kr(x), d);
      case "binary":
        return i(x, d);
      case "buffer":
        return i(xe && Buffer.isBuffer(x) ? x.toString("binary") : Bt(x), d);
      case "array":
        return i(_n(x), d);
    }
    throw new Error("Unrecognized type " + d.type);
  }
  function i(x, d) {
    var E = x.split(/[\n\r]+/), u = -1, _ = -1, O = 0, k = 0, y = [], M = [], Y = null, ee = {}, C = [], U = [], L = [], V = 0, G;
    for (+d.codepage >= 0 && Rt(+d.codepage); O !== E.length; ++O) {
      V = 0;
      var K = E[O].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n).replace(t, r), re = K.replace(/;;/g, "\0").split(";").map(function(A) {
        return A.replace(/\u0000/g, ";");
      }), _e = re[0], oe;
      if (K.length > 0)
        switch (_e) {
          case "ID":
            break;
          case "E":
            break;
          case "B":
            break;
          case "O":
            break;
          case "W":
            break;
          case "P":
            re[1].charAt(0) == "P" && M.push(K.slice(3).replace(/;;/g, ";"));
            break;
          case "C":
            var Ue = !1, ke = !1, xr = !1, Le = !1, lr = -1, tr = -1;
            for (k = 1; k < re.length; ++k)
              switch (re[k].charAt(0)) {
                case "A":
                  break;
                case "X":
                  _ = parseInt(re[k].slice(1)) - 1, ke = !0;
                  break;
                case "Y":
                  for (u = parseInt(re[k].slice(1)) - 1, ke || (_ = 0), G = y.length; G <= u; ++G)
                    y[G] = [];
                  break;
                case "K":
                  oe = re[k].slice(1), oe.charAt(0) === '"' ? oe = oe.slice(1, oe.length - 1) : oe === "TRUE" ? oe = !0 : oe === "FALSE" ? oe = !1 : isNaN(Or(oe)) ? isNaN(Nt(oe).getDate()) || (oe = qe(oe)) : (oe = Or(oe), Y !== null && ma(Y) && (oe = Ea(oe))), Ue = !0;
                  break;
                case "E":
                  Le = !0;
                  var S = vo(re[k].slice(1), { r: u, c: _ });
                  y[u][_] = [y[u][_], S];
                  break;
                case "S":
                  xr = !0, y[u][_] = [y[u][_], "S5S"];
                  break;
                case "G":
                  break;
                case "R":
                  lr = parseInt(re[k].slice(1)) - 1;
                  break;
                case "C":
                  tr = parseInt(re[k].slice(1)) - 1;
                  break;
                default:
                  if (d && d.WTF)
                    throw new Error("SYLK bad record " + K);
              }
            if (Ue && (y[u][_] && y[u][_].length == 2 ? y[u][_][0] = oe : y[u][_] = oe, Y = null), xr) {
              if (Le)
                throw new Error("SYLK shared formula cannot have own formula");
              var P = lr > -1 && y[lr][tr];
              if (!P || !P[1])
                throw new Error("SYLK shared formula cannot find base");
              y[u][_][1] = po(P[1], { r: u - lr, c: _ - tr });
            }
            break;
          case "F":
            var F = 0;
            for (k = 1; k < re.length; ++k)
              switch (re[k].charAt(0)) {
                case "X":
                  _ = parseInt(re[k].slice(1)) - 1, ++F;
                  break;
                case "Y":
                  for (u = parseInt(re[k].slice(1)) - 1, G = y.length; G <= u; ++G)
                    y[G] = [];
                  break;
                case "M":
                  V = parseInt(re[k].slice(1)) / 20;
                  break;
                case "F":
                  break;
                case "G":
                  break;
                case "P":
                  Y = M[parseInt(re[k].slice(1))];
                  break;
                case "S":
                  break;
                case "D":
                  break;
                case "N":
                  break;
                case "W":
                  for (L = re[k].slice(1).split(" "), G = parseInt(L[0], 10); G <= parseInt(L[1], 10); ++G)
                    V = parseInt(L[2], 10), U[G - 1] = V === 0 ? { hidden: !0 } : { wch: V }, r0(U[G - 1]);
                  break;
                case "C":
                  _ = parseInt(re[k].slice(1)) - 1, U[_] || (U[_] = {});
                  break;
                case "R":
                  u = parseInt(re[k].slice(1)) - 1, C[u] || (C[u] = {}), V > 0 ? (C[u].hpt = V, C[u].hpx = li(V)) : V === 0 && (C[u].hidden = !0);
                  break;
                default:
                  if (d && d.WTF)
                    throw new Error("SYLK bad record " + K);
              }
            F < 1 && (Y = null);
            break;
          default:
            if (d && d.WTF)
              throw new Error("SYLK bad record " + K);
        }
    }
    return C.length > 0 && (ee["!rows"] = C), U.length > 0 && (ee["!cols"] = U), d && d.sheetRows && (y = y.slice(0, d.sheetRows)), [y, ee];
  }
  function s(x, d) {
    var E = a(x, d), u = E[0], _ = E[1], O = vt(u, d);
    return Ke(_).forEach(function(k) {
      O[k] = _[k];
    }), O;
  }
  function f(x, d) {
    return Zr(s(x, d), d);
  }
  function o(x, d, E, u) {
    var _ = "C;Y" + (E + 1) + ";X" + (u + 1) + ";K";
    switch (x.t) {
      case "n":
        _ += x.v || 0, x.f && !x.F && (_ += ";E" + n0(x.f, { r: E, c: u }));
        break;
      case "b":
        _ += x.v ? "TRUE" : "FALSE";
        break;
      case "e":
        _ += x.w || x.v;
        break;
      case "d":
        _ += '"' + (x.w || x.v) + '"';
        break;
      case "s":
        _ += '"' + x.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return _;
  }
  function l(x, d) {
    d.forEach(function(E, u) {
      var _ = "F;W" + (u + 1) + " " + (u + 1) + " ";
      E.hidden ? _ += "0" : (typeof E.width == "number" && !E.wpx && (E.wpx = cn(E.width)), typeof E.wpx == "number" && !E.wch && (E.wch = hn(E.wpx)), typeof E.wch == "number" && (_ += Math.round(E.wch))), _.charAt(_.length - 1) != " " && x.push(_);
    });
  }
  function c(x, d) {
    d.forEach(function(E, u) {
      var _ = "F;";
      E.hidden ? _ += "M0;" : E.hpt ? _ += "M" + 20 * E.hpt + ";" : E.hpx && (_ += "M" + 20 * un(E.hpx) + ";"), _.length > 2 && x.push(_ + "R" + (u + 1));
    });
  }
  function v(x, d) {
    var E = ["ID;PWXL;N;E"], u = [], _ = we(x["!ref"]), O, k = Array.isArray(x), y = `\r
`;
    E.push("P;PGeneral"), E.push("F;P0;DG0G8;M255"), x["!cols"] && l(E, x["!cols"]), x["!rows"] && c(E, x["!rows"]), E.push("B;Y" + (_.e.r - _.s.r + 1) + ";X" + (_.e.c - _.s.c + 1) + ";D" + [_.s.c, _.s.r, _.e.c, _.e.r].join(" "));
    for (var M = _.s.r; M <= _.e.r; ++M)
      for (var Y = _.s.c; Y <= _.e.c; ++Y) {
        var ee = ge({ r: M, c: Y });
        O = k ? (x[M] || [])[Y] : x[ee], !(!O || O.v == null && (!O.f || O.F)) && u.push(o(O, x, M, Y));
      }
    return E.join(y) + y + u.join(y) + y + "E" + y;
  }
  return {
    to_workbook: f,
    to_sheet: s,
    from_sheet: v
  };
}(), ml = /* @__PURE__ */ function() {
  function e(i, s) {
    switch (s.type) {
      case "base64":
        return t(kr(i), s);
      case "binary":
        return t(i, s);
      case "buffer":
        return t(xe && Buffer.isBuffer(i) ? i.toString("binary") : Bt(i), s);
      case "array":
        return t(_n(i), s);
    }
    throw new Error("Unrecognized type " + s.type);
  }
  function t(i, s) {
    for (var f = i.split(`
`), o = -1, l = -1, c = 0, v = []; c !== f.length; ++c) {
      if (f[c].trim() === "BOT") {
        v[++o] = [], l = 0;
        continue;
      }
      if (!(o < 0)) {
        var x = f[c].trim().split(","), d = x[0], E = x[1];
        ++c;
        for (var u = f[c] || ""; (u.match(/["]/g) || []).length & 1 && c < f.length - 1; )
          u += `
` + f[++c];
        switch (u = u.trim(), +d) {
          case -1:
            if (u === "BOT") {
              v[++o] = [], l = 0;
              continue;
            } else if (u !== "EOD")
              throw new Error("Unrecognized DIF special command " + u);
            break;
          case 0:
            u === "TRUE" ? v[o][l] = !0 : u === "FALSE" ? v[o][l] = !1 : isNaN(Or(E)) ? isNaN(Nt(E).getDate()) ? v[o][l] = E : v[o][l] = qe(E) : v[o][l] = Or(E), ++l;
            break;
          case 1:
            u = u.slice(1, u.length - 1), u = u.replace(/""/g, '"'), u && u.match(/^=".*"$/) && (u = u.slice(2, -1)), v[o][l++] = u !== "" ? u : null;
            break;
        }
        if (u === "EOD")
          break;
      }
    }
    return s && s.sheetRows && (v = v.slice(0, s.sheetRows)), v;
  }
  function r(i, s) {
    return vt(e(i, s), s);
  }
  function n(i, s) {
    return Zr(r(i, s), s);
  }
  var a = /* @__PURE__ */ function() {
    var i = function(o, l, c, v, x) {
      o.push(l), o.push(c + "," + v), o.push('"' + x.replace(/"/g, '""') + '"');
    }, s = function(o, l, c, v) {
      o.push(l + "," + c), o.push(l == 1 ? '"' + v.replace(/"/g, '""') + '"' : v);
    };
    return function(o) {
      var l = [], c = we(o["!ref"]), v, x = Array.isArray(o);
      i(l, "TABLE", 0, 1, "sheetjs"), i(l, "VECTORS", 0, c.e.r - c.s.r + 1, ""), i(l, "TUPLES", 0, c.e.c - c.s.c + 1, ""), i(l, "DATA", 0, 0, "");
      for (var d = c.s.r; d <= c.e.r; ++d) {
        s(l, -1, 0, "BOT");
        for (var E = c.s.c; E <= c.e.c; ++E) {
          var u = ge({ r: d, c: E });
          if (v = x ? (o[d] || [])[E] : o[u], !v) {
            s(l, 1, 0, "");
            continue;
          }
          switch (v.t) {
            case "n":
              var _ = v.w;
              !_ && v.v != null && (_ = v.v), _ == null ? v.f && !v.F ? s(l, 1, 0, "=" + v.f) : s(l, 1, 0, "") : s(l, 0, _, "V");
              break;
            case "b":
              s(l, 0, v.v ? 1 : 0, v.v ? "TRUE" : "FALSE");
              break;
            case "s":
              s(l, 1, 0, isNaN(v.v) ? v.v : '="' + v.v + '"');
              break;
            case "d":
              v.w || (v.w = br(v.z || De[14], er(qe(v.v)))), s(l, 0, v.w, "V");
              break;
            default:
              s(l, 1, 0, "");
          }
        }
      }
      s(l, -1, 0, "EOD");
      var O = `\r
`, k = l.join(O);
      return k;
    };
  }();
  return {
    to_workbook: n,
    to_sheet: r,
    from_sheet: a
  };
}(), ai = /* @__PURE__ */ function() {
  function e(v) {
    return v.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function t(v) {
    return v.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(v, x) {
    for (var d = v.split(`
`), E = -1, u = -1, _ = 0, O = []; _ !== d.length; ++_) {
      var k = d[_].trim().split(":");
      if (k[0] === "cell") {
        var y = Be(k[1]);
        if (O.length <= y.r)
          for (E = O.length; E <= y.r; ++E)
            O[E] || (O[E] = []);
        switch (E = y.r, u = y.c, k[2]) {
          case "t":
            O[E][u] = e(k[3]);
            break;
          case "v":
            O[E][u] = +k[3];
            break;
          case "vtf":
            var M = k[k.length - 1];
          case "vtc":
            switch (k[3]) {
              case "nl":
                O[E][u] = !!+k[4];
                break;
              default:
                O[E][u] = +k[4];
                break;
            }
            k[2] == "vtf" && (O[E][u] = [O[E][u], M]);
        }
      }
    }
    return x && x.sheetRows && (O = O.slice(0, x.sheetRows)), O;
  }
  function n(v, x) {
    return vt(r(v, x), x);
  }
  function a(v, x) {
    return Zr(n(v, x), x);
  }
  var i = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join(`
`), s = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join(`
`) + `
`, f = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join(`
`), o = "--SocialCalcSpreadsheetControlSave--";
  function l(v) {
    if (!v || !v["!ref"])
      return "";
    for (var x = [], d = [], E, u = "", _ = fr(v["!ref"]), O = Array.isArray(v), k = _.s.r; k <= _.e.r; ++k)
      for (var y = _.s.c; y <= _.e.c; ++y)
        if (u = ge({ r: k, c: y }), E = O ? (v[k] || [])[y] : v[u], !(!E || E.v == null || E.t === "z")) {
          switch (d = ["cell", u, "t"], E.t) {
            case "s":
            case "str":
              d.push(t(E.v));
              break;
            case "n":
              E.f ? (d[2] = "vtf", d[3] = "n", d[4] = E.v, d[5] = t(E.f)) : (d[2] = "v", d[3] = E.v);
              break;
            case "b":
              d[2] = "vt" + (E.f ? "f" : "c"), d[3] = "nl", d[4] = E.v ? "1" : "0", d[5] = t(E.f || (E.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var M = er(qe(E.v));
              d[2] = "vtc", d[3] = "nd", d[4] = "" + M, d[5] = E.w || br(E.z || De[14], M);
              break;
            case "e":
              continue;
          }
          x.push(d.join(":"));
        }
    return x.push("sheet:c:" + (_.e.c - _.s.c + 1) + ":r:" + (_.e.r - _.s.r + 1) + ":tvf:1"), x.push("valueformat:1:text-wiki"), x.join(`
`);
  }
  function c(v) {
    return [i, s, f, s, l(v), o].join(`
`);
  }
  return {
    to_workbook: a,
    to_sheet: n,
    from_sheet: c
  };
}(), gl = /* @__PURE__ */ function() {
  function e(c, v, x, d, E) {
    E.raw ? v[x][d] = c : c === "" || (c === "TRUE" ? v[x][d] = !0 : c === "FALSE" ? v[x][d] = !1 : isNaN(Or(c)) ? isNaN(Nt(c).getDate()) ? v[x][d] = c : v[x][d] = qe(c) : v[x][d] = Or(c));
  }
  function t(c, v) {
    var x = v || {}, d = [];
    if (!c || c.length === 0)
      return d;
    for (var E = c.split(/[\r\n]/), u = E.length - 1; u >= 0 && E[u].length === 0; )
      --u;
    for (var _ = 10, O = 0, k = 0; k <= u; ++k)
      O = E[k].indexOf(" "), O == -1 ? O = E[k].length : O++, _ = Math.max(_, O);
    for (k = 0; k <= u; ++k) {
      d[k] = [];
      var y = 0;
      for (e(E[k].slice(0, _).trim(), d, k, y, x), y = 1; y <= (E[k].length - _) / 10 + 1; ++y)
        e(E[k].slice(_ + (y - 1) * 10, _ + y * 10).trim(), d, k, y, x);
    }
    return x.sheetRows && (d = d.slice(0, x.sheetRows)), d;
  }
  var r = {
    /*::[*/
    44: ",",
    /*::[*/
    9: "	",
    /*::[*/
    59: ";",
    /*::[*/
    124: "|"
  }, n = {
    /*::[*/
    44: 3,
    /*::[*/
    9: 2,
    /*::[*/
    59: 1,
    /*::[*/
    124: 0
  };
  function a(c) {
    for (var v = {}, x = !1, d = 0, E = 0; d < c.length; ++d)
      (E = c.charCodeAt(d)) == 34 ? x = !x : !x && E in r && (v[E] = (v[E] || 0) + 1);
    E = [];
    for (d in v)
      Object.prototype.hasOwnProperty.call(v, d) && E.push([v[d], d]);
    if (!E.length) {
      v = n;
      for (d in v)
        Object.prototype.hasOwnProperty.call(v, d) && E.push([v[d], d]);
    }
    return E.sort(function(u, _) {
      return u[0] - _[0] || n[u[1]] - n[_[1]];
    }), r[E.pop()[1]] || 44;
  }
  function i(c, v) {
    var x = v || {}, d = "", E = x.dense ? [] : {}, u = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    c.slice(0, 4) == "sep=" ? c.charCodeAt(5) == 13 && c.charCodeAt(6) == 10 ? (d = c.charAt(4), c = c.slice(7)) : c.charCodeAt(5) == 13 || c.charCodeAt(5) == 10 ? (d = c.charAt(4), c = c.slice(6)) : d = a(c.slice(0, 1024)) : x && x.FS ? d = x.FS : d = a(c.slice(0, 1024));
    var _ = 0, O = 0, k = 0, y = 0, M = 0, Y = d.charCodeAt(0), ee = !1, C = 0, U = c.charCodeAt(0);
    c = c.replace(/\r\n/mg, `
`);
    var L = x.dateNF != null ? Ns(x.dateNF) : null;
    function V() {
      var G = c.slice(y, M), K = {};
      if (G.charAt(0) == '"' && G.charAt(G.length - 1) == '"' && (G = G.slice(1, -1).replace(/""/g, '"')), G.length === 0)
        K.t = "z";
      else if (x.raw)
        K.t = "s", K.v = G;
      else if (G.trim().length === 0)
        K.t = "s", K.v = G;
      else if (G.charCodeAt(0) == 61)
        G.charCodeAt(1) == 34 && G.charCodeAt(G.length - 1) == 34 ? (K.t = "s", K.v = G.slice(2, -1).replace(/""/g, '"')) : mo(G) ? (K.t = "n", K.f = G.slice(1)) : (K.t = "s", K.v = G);
      else if (G == "TRUE")
        K.t = "b", K.v = !0;
      else if (G == "FALSE")
        K.t = "b", K.v = !1;
      else if (!isNaN(k = Or(G)))
        K.t = "n", x.cellText !== !1 && (K.w = G), K.v = k;
      else if (!isNaN(Nt(G).getDate()) || L && G.match(L)) {
        K.z = x.dateNF || De[14];
        var re = 0;
        L && G.match(L) && (G = Ps(G, x.dateNF, G.match(L) || []), re = 1), x.cellDates ? (K.t = "d", K.v = qe(G, re)) : (K.t = "n", K.v = er(qe(G, re))), x.cellText !== !1 && (K.w = br(K.z, K.v instanceof Date ? er(K.v) : K.v)), x.cellNF || delete K.z;
      } else
        K.t = "s", K.v = G;
      if (K.t == "z" || (x.dense ? (E[_] || (E[_] = []), E[_][O] = K) : E[ge({ c: O, r: _ })] = K), y = M + 1, U = c.charCodeAt(y), u.e.c < O && (u.e.c = O), u.e.r < _ && (u.e.r = _), C == Y)
        ++O;
      else if (O = 0, ++_, x.sheetRows && x.sheetRows <= _)
        return !0;
    }
    e:
      for (; M < c.length; ++M)
        switch (C = c.charCodeAt(M)) {
          case 34:
            U === 34 && (ee = !ee);
            break;
          case Y:
          case 10:
          case 13:
            if (!ee && V())
              break e;
            break;
        }
    return M - y > 0 && V(), E["!ref"] = Ie(u), E;
  }
  function s(c, v) {
    return !(v && v.PRN) || v.FS || c.slice(0, 4) == "sep=" || c.indexOf("	") >= 0 || c.indexOf(",") >= 0 || c.indexOf(";") >= 0 ? i(c, v) : vt(t(c, v), v);
  }
  function f(c, v) {
    var x = "", d = v.type == "string" ? [0, 0, 0, 0] : Ru(c, v);
    switch (v.type) {
      case "base64":
        x = kr(c);
        break;
      case "binary":
        x = c;
        break;
      case "buffer":
        v.codepage == 65001 ? x = c.toString("utf8") : v.codepage && typeof Kr < "u" ? x = Kr.utils.decode(v.codepage, c) : x = xe && Buffer.isBuffer(c) ? c.toString("binary") : Bt(c);
        break;
      case "array":
        x = _n(c);
        break;
      case "string":
        x = c;
        break;
      default:
        throw new Error("Unrecognized type " + v.type);
    }
    return d[0] == 239 && d[1] == 187 && d[2] == 191 ? x = yt(x.slice(3)) : v.type != "string" && v.type != "buffer" && v.codepage == 65001 ? x = yt(x) : v.type == "binary" && typeof Kr < "u" && v.codepage && (x = Kr.utils.decode(v.codepage, Kr.utils.encode(28591, x))), x.slice(0, 19) == "socialcalc:version:" ? ai.to_sheet(v.type == "string" ? x : yt(x), v) : s(x, v);
  }
  function o(c, v) {
    return Zr(f(c, v), v);
  }
  function l(c) {
    for (var v = [], x = we(c["!ref"]), d, E = Array.isArray(c), u = x.s.r; u <= x.e.r; ++u) {
      for (var _ = [], O = x.s.c; O <= x.e.c; ++O) {
        var k = ge({ r: u, c: O });
        if (d = E ? (c[u] || [])[O] : c[k], !d || d.v == null) {
          _.push("          ");
          continue;
        }
        for (var y = (d.w || (Rr(d), d.w) || "").slice(0, 10); y.length < 10; )
          y += " ";
        _.push(y + (O === 0 ? " " : ""));
      }
      v.push(_.join(""));
    }
    return v.join(`
`);
  }
  return {
    to_workbook: o,
    to_sheet: f,
    from_sheet: l
  };
}(), J0 = /* @__PURE__ */ function() {
  function e(S, P, F) {
    if (S) {
      ar(S, S.l || 0);
      for (var A = F.Enum || lr; S.l < S.length; ) {
        var H = S.read_shift(2), ie = A[H] || A[65535], se = S.read_shift(2), ae = S.l + se, q = ie.f && ie.f(S, se, F);
        if (S.l = ae, P(q, ie, H))
          return;
      }
    }
  }
  function t(S, P) {
    switch (P.type) {
      case "base64":
        return r(pr(kr(S)), P);
      case "binary":
        return r(pr(S), P);
      case "buffer":
      case "array":
        return r(S, P);
    }
    throw "Unsupported type " + P.type;
  }
  function r(S, P) {
    if (!S)
      return S;
    var F = P || {}, A = F.dense ? [] : {}, H = "Sheet1", ie = "", se = 0, ae = {}, q = [], Ee = [], he = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, $e = F.sheetRows || 0;
    if (S[2] == 0 && (S[3] == 8 || S[3] == 9) && S.length >= 16 && S[14] == 5 && S[15] === 108)
      throw new Error("Unsupported Works 3 for Mac file");
    if (S[2] == 2)
      F.Enum = lr, e(S, function(ne, or, Ar) {
        switch (Ar) {
          case 0:
            F.vers = ne, ne >= 4096 && (F.qpro = !0);
            break;
          case 6:
            he = ne;
            break;
          case 204:
            ne && (ie = ne);
            break;
          case 222:
            ie = ne;
            break;
          case 15:
          case 51:
            F.qpro || (ne[1].v = ne[1].v.slice(1));
          case 13:
          case 14:
          case 16:
            Ar == 14 && (ne[2] & 112) == 112 && (ne[2] & 15) > 1 && (ne[2] & 15) < 15 && (ne[1].z = F.dateNF || De[14], F.cellDates && (ne[1].t = "d", ne[1].v = Ea(ne[1].v))), F.qpro && ne[3] > se && (A["!ref"] = Ie(he), ae[H] = A, q.push(H), A = F.dense ? [] : {}, he = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, se = ne[3], H = ie || "Sheet" + (se + 1), ie = "");
            var Vr = F.dense ? (A[ne[0].r] || [])[ne[0].c] : A[ge(ne[0])];
            if (Vr) {
              Vr.t = ne[1].t, Vr.v = ne[1].v, ne[1].z != null && (Vr.z = ne[1].z), ne[1].f != null && (Vr.f = ne[1].f);
              break;
            }
            F.dense ? (A[ne[0].r] || (A[ne[0].r] = []), A[ne[0].r][ne[0].c] = ne[1]) : A[ge(ne[0])] = ne[1];
            break;
        }
      }, F);
    else if (S[2] == 26 || S[2] == 14)
      F.Enum = tr, S[2] == 14 && (F.qpro = !0, S.l = 0), e(S, function(ne, or, Ar) {
        switch (Ar) {
          case 204:
            H = ne;
            break;
          case 22:
            ne[1].v = ne[1].v.slice(1);
          case 23:
          case 24:
          case 25:
          case 37:
          case 39:
          case 40:
            if (ne[3] > se && (A["!ref"] = Ie(he), ae[H] = A, q.push(H), A = F.dense ? [] : {}, he = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, se = ne[3], H = "Sheet" + (se + 1)), $e > 0 && ne[0].r >= $e)
              break;
            F.dense ? (A[ne[0].r] || (A[ne[0].r] = []), A[ne[0].r][ne[0].c] = ne[1]) : A[ge(ne[0])] = ne[1], he.e.c < ne[0].c && (he.e.c = ne[0].c), he.e.r < ne[0].r && (he.e.r = ne[0].r);
            break;
          case 27:
            ne[14e3] && (Ee[ne[14e3][0]] = ne[14e3][1]);
            break;
          case 1537:
            Ee[ne[0]] = ne[1], ne[0] == se && (H = ne[1]);
            break;
        }
      }, F);
    else
      throw new Error("Unrecognized LOTUS BOF " + S[2]);
    if (A["!ref"] = Ie(he), ae[ie || H] = A, q.push(ie || H), !Ee.length)
      return { SheetNames: q, Sheets: ae };
    for (var de = {}, Sr = [], Fe = 0; Fe < Ee.length; ++Fe)
      ae[q[Fe]] ? (Sr.push(Ee[Fe] || q[Fe]), de[Ee[Fe]] = ae[Ee[Fe]] || ae[q[Fe]]) : (Sr.push(Ee[Fe]), de[Ee[Fe]] = { "!ref": "A1" });
    return { SheetNames: Sr, Sheets: de };
  }
  function n(S, P) {
    var F = P || {};
    if (+F.codepage >= 0 && Rt(+F.codepage), F.type == "string")
      throw new Error("Cannot write WK1 to JS string");
    var A = Qe(), H = we(S["!ref"]), ie = Array.isArray(S), se = [];
    J(A, 0, i(1030)), J(A, 6, o(H));
    for (var ae = Math.min(H.e.r, 8191), q = H.s.r; q <= ae; ++q)
      for (var Ee = Xe(q), he = H.s.c; he <= H.e.c; ++he) {
        q === H.s.r && (se[he] = je(he));
        var $e = se[he] + Ee, de = ie ? (S[q] || [])[he] : S[$e];
        if (!(!de || de.t == "z"))
          if (de.t == "n")
            (de.v | 0) == de.v && de.v >= -32768 && de.v <= 32767 ? J(A, 13, d(q, he, de.v)) : J(A, 14, u(q, he, de.v));
          else {
            var Sr = Rr(de);
            J(A, 15, v(q, he, Sr.slice(0, 239)));
          }
      }
    return J(A, 1), A.end();
  }
  function a(S, P) {
    var F = P || {};
    if (+F.codepage >= 0 && Rt(+F.codepage), F.type == "string")
      throw new Error("Cannot write WK3 to JS string");
    var A = Qe();
    J(A, 0, s(S));
    for (var H = 0, ie = 0; H < S.SheetNames.length; ++H)
      (S.Sheets[S.SheetNames[H]] || {})["!ref"] && J(A, 27, Le(S.SheetNames[H], ie++));
    var se = 0;
    for (H = 0; H < S.SheetNames.length; ++H) {
      var ae = S.Sheets[S.SheetNames[H]];
      if (!(!ae || !ae["!ref"])) {
        for (var q = we(ae["!ref"]), Ee = Array.isArray(ae), he = [], $e = Math.min(q.e.r, 8191), de = q.s.r; de <= $e; ++de)
          for (var Sr = Xe(de), Fe = q.s.c; Fe <= q.e.c; ++Fe) {
            de === q.s.r && (he[Fe] = je(Fe));
            var ne = he[Fe] + Sr, or = Ee ? (ae[de] || [])[Fe] : ae[ne];
            if (!(!or || or.t == "z"))
              if (or.t == "n")
                J(A, 23, V(de, Fe, se, or.v));
              else {
                var Ar = Rr(or);
                J(A, 22, C(de, Fe, se, Ar.slice(0, 239)));
              }
          }
        ++se;
      }
    }
    return J(A, 1), A.end();
  }
  function i(S) {
    var P = B(2);
    return P.write_shift(2, S), P;
  }
  function s(S) {
    var P = B(26);
    P.write_shift(2, 4096), P.write_shift(2, 4), P.write_shift(4, 0);
    for (var F = 0, A = 0, H = 0, ie = 0; ie < S.SheetNames.length; ++ie) {
      var se = S.SheetNames[ie], ae = S.Sheets[se];
      if (!(!ae || !ae["!ref"])) {
        ++H;
        var q = fr(ae["!ref"]);
        F < q.e.r && (F = q.e.r), A < q.e.c && (A = q.e.c);
      }
    }
    return F > 8191 && (F = 8191), P.write_shift(2, F), P.write_shift(1, H), P.write_shift(1, A), P.write_shift(2, 0), P.write_shift(2, 0), P.write_shift(1, 1), P.write_shift(1, 2), P.write_shift(4, 0), P.write_shift(4, 0), P;
  }
  function f(S, P, F) {
    var A = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return P == 8 && F.qpro ? (A.s.c = S.read_shift(1), S.l++, A.s.r = S.read_shift(2), A.e.c = S.read_shift(1), S.l++, A.e.r = S.read_shift(2), A) : (A.s.c = S.read_shift(2), A.s.r = S.read_shift(2), P == 12 && F.qpro && (S.l += 2), A.e.c = S.read_shift(2), A.e.r = S.read_shift(2), P == 12 && F.qpro && (S.l += 2), A.s.c == 65535 && (A.s.c = A.e.c = A.s.r = A.e.r = 0), A);
  }
  function o(S) {
    var P = B(8);
    return P.write_shift(2, S.s.c), P.write_shift(2, S.s.r), P.write_shift(2, S.e.c), P.write_shift(2, S.e.r), P;
  }
  function l(S, P, F) {
    var A = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return F.qpro && F.vers != 20768 ? (A[0].c = S.read_shift(1), A[3] = S.read_shift(1), A[0].r = S.read_shift(2), S.l += 2) : (A[2] = S.read_shift(1), A[0].c = S.read_shift(2), A[0].r = S.read_shift(2)), A;
  }
  function c(S, P, F) {
    var A = S.l + P, H = l(S, P, F);
    if (H[1].t = "s", F.vers == 20768) {
      S.l++;
      var ie = S.read_shift(1);
      return H[1].v = S.read_shift(ie, "utf8"), H;
    }
    return F.qpro && S.l++, H[1].v = S.read_shift(A - S.l, "cstr"), H;
  }
  function v(S, P, F) {
    var A = B(7 + F.length);
    A.write_shift(1, 255), A.write_shift(2, P), A.write_shift(2, S), A.write_shift(1, 39);
    for (var H = 0; H < A.length; ++H) {
      var ie = F.charCodeAt(H);
      A.write_shift(1, ie >= 128 ? 95 : ie);
    }
    return A.write_shift(1, 0), A;
  }
  function x(S, P, F) {
    var A = l(S, P, F);
    return A[1].v = S.read_shift(2, "i"), A;
  }
  function d(S, P, F) {
    var A = B(7);
    return A.write_shift(1, 255), A.write_shift(2, P), A.write_shift(2, S), A.write_shift(2, F, "i"), A;
  }
  function E(S, P, F) {
    var A = l(S, P, F);
    return A[1].v = S.read_shift(8, "f"), A;
  }
  function u(S, P, F) {
    var A = B(13);
    return A.write_shift(1, 255), A.write_shift(2, P), A.write_shift(2, S), A.write_shift(8, F, "f"), A;
  }
  function _(S, P, F) {
    var A = S.l + P, H = l(S, P, F);
    if (H[1].v = S.read_shift(8, "f"), F.qpro)
      S.l = A;
    else {
      var ie = S.read_shift(2);
      M(S.slice(S.l, S.l + ie), H), S.l += ie;
    }
    return H;
  }
  function O(S, P, F) {
    var A = P & 32768;
    return P &= -32769, P = (A ? S : 0) + (P >= 8192 ? P - 16384 : P), (A ? "" : "$") + (F ? je(P) : Xe(P));
  }
  var k = {
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    70: ["LEN", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    111: ["T", 1]
  }, y = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    // eslint-disable-line no-mixed-spaces-and-tabs
  ];
  function M(S, P) {
    ar(S, 0);
    for (var F = [], A = 0, H = "", ie = "", se = "", ae = ""; S.l < S.length; ) {
      var q = S[S.l++];
      switch (q) {
        case 0:
          F.push(S.read_shift(8, "f"));
          break;
        case 1:
          ie = O(P[0].c, S.read_shift(2), !0), H = O(P[0].r, S.read_shift(2), !1), F.push(ie + H);
          break;
        case 2:
          {
            var Ee = O(P[0].c, S.read_shift(2), !0), he = O(P[0].r, S.read_shift(2), !1);
            ie = O(P[0].c, S.read_shift(2), !0), H = O(P[0].r, S.read_shift(2), !1), F.push(Ee + he + ":" + ie + H);
          }
          break;
        case 3:
          if (S.l < S.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          F.push("(" + F.pop() + ")");
          break;
        case 5:
          F.push(S.read_shift(2));
          break;
        case 6:
          {
            for (var $e = ""; q = S[S.l++]; )
              $e += String.fromCharCode(q);
            F.push('"' + $e.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          F.push("-" + F.pop());
          break;
        case 23:
          F.push("+" + F.pop());
          break;
        case 22:
          F.push("NOT(" + F.pop() + ")");
          break;
        case 20:
        case 21:
          ae = F.pop(), se = F.pop(), F.push(["AND", "OR"][q - 20] + "(" + se + "," + ae + ")");
          break;
        default:
          if (q < 32 && y[q])
            ae = F.pop(), se = F.pop(), F.push(se + y[q] + ae);
          else if (k[q]) {
            if (A = k[q][1], A == 69 && (A = S[S.l++]), A > F.length) {
              console.error("WK1 bad formula parse 0x" + q.toString(16) + ":|" + F.join("|") + "|");
              return;
            }
            var de = F.slice(-A);
            F.length -= A, F.push(k[q][0] + "(" + de.join(",") + ")");
          } else
            return q <= 7 ? console.error("WK1 invalid opcode " + q.toString(16)) : q <= 24 ? console.error("WK1 unsupported op " + q.toString(16)) : q <= 30 ? console.error("WK1 invalid opcode " + q.toString(16)) : q <= 115 ? console.error("WK1 unsupported function opcode " + q.toString(16)) : console.error("WK1 unrecognized opcode " + q.toString(16));
      }
    }
    F.length == 1 ? P[1].f = "" + F[0] : console.error("WK1 bad formula parse |" + F.join("|") + "|");
  }
  function Y(S) {
    var P = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return P[0].r = S.read_shift(2), P[3] = S[S.l++], P[0].c = S[S.l++], P;
  }
  function ee(S, P) {
    var F = Y(S);
    return F[1].t = "s", F[1].v = S.read_shift(P - 4, "cstr"), F;
  }
  function C(S, P, F, A) {
    var H = B(6 + A.length);
    H.write_shift(2, S), H.write_shift(1, F), H.write_shift(1, P), H.write_shift(1, 39);
    for (var ie = 0; ie < A.length; ++ie) {
      var se = A.charCodeAt(ie);
      H.write_shift(1, se >= 128 ? 95 : se);
    }
    return H.write_shift(1, 0), H;
  }
  function U(S, P) {
    var F = Y(S);
    F[1].v = S.read_shift(2);
    var A = F[1].v >> 1;
    if (F[1].v & 1)
      switch (A & 7) {
        case 0:
          A = (A >> 3) * 5e3;
          break;
        case 1:
          A = (A >> 3) * 500;
          break;
        case 2:
          A = (A >> 3) / 20;
          break;
        case 3:
          A = (A >> 3) / 200;
          break;
        case 4:
          A = (A >> 3) / 2e3;
          break;
        case 5:
          A = (A >> 3) / 2e4;
          break;
        case 6:
          A = (A >> 3) / 16;
          break;
        case 7:
          A = (A >> 3) / 64;
          break;
      }
    return F[1].v = A, F;
  }
  function L(S, P) {
    var F = Y(S), A = S.read_shift(4), H = S.read_shift(4), ie = S.read_shift(2);
    if (ie == 65535)
      return A === 0 && H === 3221225472 ? (F[1].t = "e", F[1].v = 15) : A === 0 && H === 3489660928 ? (F[1].t = "e", F[1].v = 42) : F[1].v = 0, F;
    var se = ie & 32768;
    return ie = (ie & 32767) - 16446, F[1].v = (1 - se * 2) * (H * Math.pow(2, ie + 32) + A * Math.pow(2, ie)), F;
  }
  function V(S, P, F, A) {
    var H = B(14);
    if (H.write_shift(2, S), H.write_shift(1, F), H.write_shift(1, P), A == 0)
      return H.write_shift(4, 0), H.write_shift(4, 0), H.write_shift(2, 65535), H;
    var ie = 0, se = 0, ae = 0, q = 0;
    return A < 0 && (ie = 1, A = -A), se = Math.log2(A) | 0, A /= Math.pow(2, se - 31), q = A >>> 0, q & 2147483648 || (A /= 2, ++se, q = A >>> 0), A -= q, q |= 2147483648, q >>>= 0, A *= Math.pow(2, 32), ae = A >>> 0, H.write_shift(4, ae), H.write_shift(4, q), se += 16383 + (ie ? 32768 : 0), H.write_shift(2, se), H;
  }
  function G(S, P) {
    var F = L(S);
    return S.l += P - 14, F;
  }
  function K(S, P) {
    var F = Y(S), A = S.read_shift(4);
    return F[1].v = A >> 6, F;
  }
  function re(S, P) {
    var F = Y(S), A = S.read_shift(8, "f");
    return F[1].v = A, F;
  }
  function _e(S, P) {
    var F = re(S);
    return S.l += P - 10, F;
  }
  function oe(S, P) {
    return S[S.l + P - 1] == 0 ? S.read_shift(P, "cstr") : "";
  }
  function Ue(S, P) {
    var F = S[S.l++];
    F > P - 1 && (F = P - 1);
    for (var A = ""; A.length < F; )
      A += String.fromCharCode(S[S.l++]);
    return A;
  }
  function ke(S, P, F) {
    if (!(!F.qpro || P < 21)) {
      var A = S.read_shift(1);
      S.l += 17, S.l += 1, S.l += 2;
      var H = S.read_shift(P - 21, "cstr");
      return [A, H];
    }
  }
  function xr(S, P) {
    for (var F = {}, A = S.l + P; S.l < A; ) {
      var H = S.read_shift(2);
      if (H == 14e3) {
        for (F[H] = [0, ""], F[H][0] = S.read_shift(2); S[S.l]; )
          F[H][1] += String.fromCharCode(S[S.l]), S.l++;
        S.l++;
      }
    }
    return F;
  }
  function Le(S, P) {
    var F = B(5 + S.length);
    F.write_shift(2, 14e3), F.write_shift(2, P);
    for (var A = 0; A < S.length; ++A) {
      var H = S.charCodeAt(A);
      F[F.l++] = H > 127 ? 95 : H;
    }
    return F[F.l++] = 0, F;
  }
  var lr = {
    /*::[*/
    0: { n: "BOF", f: Qa },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "CALCMODE" },
    /*::[*/
    3: { n: "CALCORDER" },
    /*::[*/
    4: { n: "SPLIT" },
    /*::[*/
    5: { n: "SYNC" },
    /*::[*/
    6: { n: "RANGE", f },
    /*::[*/
    7: { n: "WINDOW1" },
    /*::[*/
    8: { n: "COLW1" },
    /*::[*/
    9: { n: "WINTWO" },
    /*::[*/
    10: { n: "COLW2" },
    /*::[*/
    11: { n: "NAME" },
    /*::[*/
    12: { n: "BLANK" },
    /*::[*/
    13: { n: "INTEGER", f: x },
    /*::[*/
    14: { n: "NUMBER", f: E },
    /*::[*/
    15: { n: "LABEL", f: c },
    /*::[*/
    16: { n: "FORMULA", f: _ },
    /*::[*/
    24: { n: "TABLE" },
    /*::[*/
    25: { n: "ORANGE" },
    /*::[*/
    26: { n: "PRANGE" },
    /*::[*/
    27: { n: "SRANGE" },
    /*::[*/
    28: { n: "FRANGE" },
    /*::[*/
    29: { n: "KRANGE1" },
    /*::[*/
    32: { n: "HRANGE" },
    /*::[*/
    35: { n: "KRANGE2" },
    /*::[*/
    36: { n: "PROTEC" },
    /*::[*/
    37: { n: "FOOTER" },
    /*::[*/
    38: { n: "HEADER" },
    /*::[*/
    39: { n: "SETUP" },
    /*::[*/
    40: { n: "MARGINS" },
    /*::[*/
    41: { n: "LABELFMT" },
    /*::[*/
    42: { n: "TITLES" },
    /*::[*/
    43: { n: "SHEETJS" },
    /*::[*/
    45: { n: "GRAPH" },
    /*::[*/
    46: { n: "NGRAPH" },
    /*::[*/
    47: { n: "CALCCOUNT" },
    /*::[*/
    48: { n: "UNFORMATTED" },
    /*::[*/
    49: { n: "CURSORW12" },
    /*::[*/
    50: { n: "WINDOW" },
    /*::[*/
    51: { n: "STRING", f: c },
    /*::[*/
    55: { n: "PASSWORD" },
    /*::[*/
    56: { n: "LOCKED" },
    /*::[*/
    60: { n: "QUERY" },
    /*::[*/
    61: { n: "QUERYNAME" },
    /*::[*/
    62: { n: "PRINT" },
    /*::[*/
    63: { n: "PRINTNAME" },
    /*::[*/
    64: { n: "GRAPH2" },
    /*::[*/
    65: { n: "GRAPHNAME" },
    /*::[*/
    66: { n: "ZOOM" },
    /*::[*/
    67: { n: "SYMSPLIT" },
    /*::[*/
    68: { n: "NSROWS" },
    /*::[*/
    69: { n: "NSCOLS" },
    /*::[*/
    70: { n: "RULER" },
    /*::[*/
    71: { n: "NNAME" },
    /*::[*/
    72: { n: "ACOMM" },
    /*::[*/
    73: { n: "AMACRO" },
    /*::[*/
    74: { n: "PARSE" },
    /*::[*/
    102: { n: "PRANGES??" },
    /*::[*/
    103: { n: "RRANGES??" },
    /*::[*/
    104: { n: "FNAME??" },
    /*::[*/
    105: { n: "MRANGES??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: oe },
    /*::[*/
    222: { n: "SHEETNAMELP", f: Ue },
    /*::[*/
    65535: { n: "" }
  }, tr = {
    /*::[*/
    0: { n: "BOF" },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "PASSWORD" },
    /*::[*/
    3: { n: "CALCSET" },
    /*::[*/
    4: { n: "WINDOWSET" },
    /*::[*/
    5: { n: "SHEETCELLPTR" },
    /*::[*/
    6: { n: "SHEETLAYOUT" },
    /*::[*/
    7: { n: "COLUMNWIDTH" },
    /*::[*/
    8: { n: "HIDDENCOLUMN" },
    /*::[*/
    9: { n: "USERRANGE" },
    /*::[*/
    10: { n: "SYSTEMRANGE" },
    /*::[*/
    11: { n: "ZEROFORCE" },
    /*::[*/
    12: { n: "SORTKEYDIR" },
    /*::[*/
    13: { n: "FILESEAL" },
    /*::[*/
    14: { n: "DATAFILLNUMS" },
    /*::[*/
    15: { n: "PRINTMAIN" },
    /*::[*/
    16: { n: "PRINTSTRING" },
    /*::[*/
    17: { n: "GRAPHMAIN" },
    /*::[*/
    18: { n: "GRAPHSTRING" },
    /*::[*/
    19: { n: "??" },
    /*::[*/
    20: { n: "ERRCELL" },
    /*::[*/
    21: { n: "NACELL" },
    /*::[*/
    22: { n: "LABEL16", f: ee },
    /*::[*/
    23: { n: "NUMBER17", f: L },
    /*::[*/
    24: { n: "NUMBER18", f: U },
    /*::[*/
    25: { n: "FORMULA19", f: G },
    /*::[*/
    26: { n: "FORMULA1A" },
    /*::[*/
    27: { n: "XFORMAT", f: xr },
    /*::[*/
    28: { n: "DTLABELMISC" },
    /*::[*/
    29: { n: "DTLABELCELL" },
    /*::[*/
    30: { n: "GRAPHWINDOW" },
    /*::[*/
    31: { n: "CPA" },
    /*::[*/
    32: { n: "LPLAUTO" },
    /*::[*/
    33: { n: "QUERY" },
    /*::[*/
    34: { n: "HIDDENSHEET" },
    /*::[*/
    35: { n: "??" },
    /*::[*/
    37: { n: "NUMBER25", f: K },
    /*::[*/
    38: { n: "??" },
    /*::[*/
    39: { n: "NUMBER27", f: re },
    /*::[*/
    40: { n: "FORMULA28", f: _e },
    /*::[*/
    142: { n: "??" },
    /*::[*/
    147: { n: "??" },
    /*::[*/
    150: { n: "??" },
    /*::[*/
    151: { n: "??" },
    /*::[*/
    152: { n: "??" },
    /*::[*/
    153: { n: "??" },
    /*::[*/
    154: { n: "??" },
    /*::[*/
    155: { n: "??" },
    /*::[*/
    156: { n: "??" },
    /*::[*/
    163: { n: "??" },
    /*::[*/
    174: { n: "??" },
    /*::[*/
    175: { n: "??" },
    /*::[*/
    176: { n: "??" },
    /*::[*/
    177: { n: "??" },
    /*::[*/
    184: { n: "??" },
    /*::[*/
    185: { n: "??" },
    /*::[*/
    186: { n: "??" },
    /*::[*/
    187: { n: "??" },
    /*::[*/
    188: { n: "??" },
    /*::[*/
    195: { n: "??" },
    /*::[*/
    201: { n: "??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: oe },
    /*::[*/
    205: { n: "??" },
    /*::[*/
    206: { n: "??" },
    /*::[*/
    207: { n: "??" },
    /*::[*/
    208: { n: "??" },
    /*::[*/
    256: { n: "??" },
    /*::[*/
    259: { n: "??" },
    /*::[*/
    260: { n: "??" },
    /*::[*/
    261: { n: "??" },
    /*::[*/
    262: { n: "??" },
    /*::[*/
    263: { n: "??" },
    /*::[*/
    265: { n: "??" },
    /*::[*/
    266: { n: "??" },
    /*::[*/
    267: { n: "??" },
    /*::[*/
    268: { n: "??" },
    /*::[*/
    270: { n: "??" },
    /*::[*/
    271: { n: "??" },
    /*::[*/
    384: { n: "??" },
    /*::[*/
    389: { n: "??" },
    /*::[*/
    390: { n: "??" },
    /*::[*/
    393: { n: "??" },
    /*::[*/
    396: { n: "??" },
    /*::[*/
    512: { n: "??" },
    /*::[*/
    514: { n: "??" },
    /*::[*/
    513: { n: "??" },
    /*::[*/
    516: { n: "??" },
    /*::[*/
    517: { n: "??" },
    /*::[*/
    640: { n: "??" },
    /*::[*/
    641: { n: "??" },
    /*::[*/
    642: { n: "??" },
    /*::[*/
    643: { n: "??" },
    /*::[*/
    644: { n: "??" },
    /*::[*/
    645: { n: "??" },
    /*::[*/
    646: { n: "??" },
    /*::[*/
    647: { n: "??" },
    /*::[*/
    648: { n: "??" },
    /*::[*/
    658: { n: "??" },
    /*::[*/
    659: { n: "??" },
    /*::[*/
    660: { n: "??" },
    /*::[*/
    661: { n: "??" },
    /*::[*/
    662: { n: "??" },
    /*::[*/
    665: { n: "??" },
    /*::[*/
    666: { n: "??" },
    /*::[*/
    768: { n: "??" },
    /*::[*/
    772: { n: "??" },
    /*::[*/
    1537: { n: "SHEETINFOQP", f: ke },
    /*::[*/
    1600: { n: "??" },
    /*::[*/
    1602: { n: "??" },
    /*::[*/
    1793: { n: "??" },
    /*::[*/
    1794: { n: "??" },
    /*::[*/
    1795: { n: "??" },
    /*::[*/
    1796: { n: "??" },
    /*::[*/
    1920: { n: "??" },
    /*::[*/
    2048: { n: "??" },
    /*::[*/
    2049: { n: "??" },
    /*::[*/
    2052: { n: "??" },
    /*::[*/
    2688: { n: "??" },
    /*::[*/
    10998: { n: "??" },
    /*::[*/
    12849: { n: "??" },
    /*::[*/
    28233: { n: "??" },
    /*::[*/
    28484: { n: "??" },
    /*::[*/
    65535: { n: "" }
  };
  return {
    sheet_to_wk1: n,
    book_to_wk3: a,
    to_workbook: t
  };
}(), _l = /^\s|\s$|[\t\n\r]/;
function ii(e, t) {
  if (!t.bookSST)
    return "";
  var r = [Ne];
  r[r.length] = j("sst", null, {
    xmlns: dt[0],
    count: e.Count,
    uniqueCount: e.Unique
  });
  for (var n = 0; n != e.length; ++n)
    if (e[n] != null) {
      var a = e[n], i = "<si>";
      a.r ? i += a.r : (i += "<t", a.t || (a.t = ""), a.t.match(_l) && (i += ' xml:space="preserve"'), i += ">" + me(a.t) + "</t>"), i += "</si>", r[r.length] = i;
    }
  return r.length > 2 && (r[r.length] = "</sst>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function Tl(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function El(e, t) {
  return t || (t = B(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t;
}
var wl = uf;
function Sl(e) {
  var t = Qe();
  W(t, 159, El(e));
  for (var r = 0; r < e.length; ++r)
    W(t, 19, wl(e[r]));
  return W(
    t,
    160
    /* BrtEndSst */
  ), t.end();
}
function Al(e) {
  for (var t = [], r = e.split(""), n = 0; n < r.length; ++n)
    t[n] = r[n].charCodeAt(0);
  return t;
}
function si(e) {
  var t = 0, r, n = Al(e), a = n.length + 1, i, s, f, o, l;
  for (r = Yr(a), r[0] = n.length, i = 1; i != a; ++i)
    r[i] = n[i - 1];
  for (i = a - 1; i >= 0; --i)
    s = r[i], f = t & 16384 ? 1 : 0, o = t << 1 & 32767, l = f | o, t = l ^ s;
  return t ^ 52811;
}
var Fl = /* @__PURE__ */ function() {
  function e(a, i) {
    switch (i.type) {
      case "base64":
        return t(kr(a), i);
      case "binary":
        return t(a, i);
      case "buffer":
        return t(xe && Buffer.isBuffer(a) ? a.toString("binary") : Bt(a), i);
      case "array":
        return t(_n(a), i);
    }
    throw new Error("Unrecognized type " + i.type);
  }
  function t(a, i) {
    var s = i || {}, f = s.dense ? [] : {}, o = a.match(/\\trowd.*?\\row\b/g);
    if (!o.length)
      throw new Error("RTF missing table");
    var l = { s: { c: 0, r: 0 }, e: { c: 0, r: o.length - 1 } };
    return o.forEach(function(c, v) {
      Array.isArray(f) && (f[v] = []);
      for (var x = /\\\w+\b/g, d = 0, E, u = -1; E = x.exec(c); ) {
        switch (E[0]) {
          case "\\cell":
            var _ = c.slice(d, x.lastIndex - E[0].length);
            if (_[0] == " " && (_ = _.slice(1)), ++u, _.length) {
              var O = { v: _, t: "s" };
              Array.isArray(f) ? f[v][u] = O : f[ge({ r: v, c: u })] = O;
            }
            break;
        }
        d = x.lastIndex;
      }
      u > l.e.c && (l.e.c = u);
    }), f["!ref"] = Ie(l), f;
  }
  function r(a, i) {
    return Zr(e(a, i), i);
  }
  function n(a) {
    for (var i = ["{\\rtf1\\ansi"], s = we(a["!ref"]), f, o = Array.isArray(a), l = s.s.r; l <= s.e.r; ++l) {
      i.push("\\trowd\\trautofit1");
      for (var c = s.s.c; c <= s.e.c; ++c)
        i.push("\\cellx" + (c + 1));
      for (i.push("\\pard\\intbl"), c = s.s.c; c <= s.e.c; ++c) {
        var v = ge({ r: l, c });
        f = o ? (a[l] || [])[c] : a[v], !(!f || f.v == null && (!f.f || f.F)) && (i.push(" " + (f.w || (Rr(f), f.w))), i.push("\\cell"));
      }
      i.push("\\pard\\intbl\\row");
    }
    return i.join("") + "}";
  }
  return {
    to_workbook: r,
    to_sheet: e,
    from_sheet: n
  };
}();
function Z0(e) {
  for (var t = 0, r = 1; t != 3; ++t)
    r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
  return r.toString(16).toUpperCase().slice(1);
}
var yl = 6, Dr = yl;
function cn(e) {
  return Math.floor((e + Math.round(128 / Dr) / 256) * Dr);
}
function hn(e) {
  return Math.floor((e - 5) / Dr * 100 + 0.5) / 100;
}
function Wn(e) {
  return Math.round((e * Dr + 5) / Dr * 256) / 256;
}
function r0(e) {
  e.width ? (e.wpx = cn(e.width), e.wch = hn(e.wpx), e.MDW = Dr) : e.wpx ? (e.wch = hn(e.wpx), e.width = Wn(e.wch), e.MDW = Dr) : typeof e.wch == "number" && (e.width = Wn(e.wch), e.wpx = cn(e.width), e.MDW = Dr), e.customWidth && delete e.customWidth;
}
var Cl = 96, fi = Cl;
function un(e) {
  return e * 96 / fi;
}
function li(e) {
  return e * fi / 96;
}
function Ol(e) {
  var t = ["<numFmts>"];
  return [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(r) {
    for (var n = r[0]; n <= r[1]; ++n)
      e[n] != null && (t[t.length] = j("numFmt", null, { numFmtId: n, formatCode: me(e[n]) }));
  }), t.length === 1 ? "" : (t[t.length] = "</numFmts>", t[0] = j("numFmts", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
function Dl(e) {
  var t = [];
  return t[t.length] = j("cellXfs", null), e.forEach(function(r) {
    t[t.length] = j("xf", null, r);
  }), t[t.length] = "</cellXfs>", t.length === 2 ? "" : (t[0] = j("cellXfs", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
function oi(e, t) {
  var r = [Ne, j("styleSheet", null, {
    xmlns: dt[0],
    "xmlns:vt": Me.vt
  })], n;
  return e.SSF && (n = Ol(e.SSF)) != null && (r[r.length] = n), r[r.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', r[r.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', r[r.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', r[r.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (n = Dl(t.cellXfs)) && (r[r.length] = n), r[r.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', r[r.length] = '<dxfs count="0"/>', r[r.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', r.length > 2 && (r[r.length] = "</styleSheet>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function kl(e, t) {
  var r = e.read_shift(2), n = Ye(e);
  return [r, n];
}
function Rl(e, t, r) {
  r || (r = B(6 + 4 * t.length)), r.write_shift(2, e), be(t, r);
  var n = r.length > r.l ? r.slice(0, r.l) : r;
  return r.l == null && (r.l = r.length), n;
}
function Il(e, t, r) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var a = _f(e);
  a.fItalic && (n.italic = 1), a.fCondense && (n.condense = 1), a.fExtend && (n.extend = 1), a.fShadow && (n.shadow = 1), a.fOutline && (n.outline = 1), a.fStrikeout && (n.strike = 1);
  var i = e.read_shift(2);
  switch (i === 700 && (n.bold = 1), e.read_shift(2)) {
    case 1:
      n.vertAlign = "superscript";
      break;
    case 2:
      n.vertAlign = "subscript";
      break;
  }
  var s = e.read_shift(1);
  s != 0 && (n.underline = s);
  var f = e.read_shift(1);
  f > 0 && (n.family = f);
  var o = e.read_shift(1);
  switch (o > 0 && (n.charset = o), e.l++, n.color = gf(e), e.read_shift(1)) {
    case 1:
      n.scheme = "major";
      break;
    case 2:
      n.scheme = "minor";
      break;
  }
  return n.name = Ye(e), n;
}
function Nl(e, t) {
  t || (t = B(25 + 4 * 32)), t.write_shift(2, e.sz * 20), Tf(e, t), t.write_shift(2, e.bold ? 700 : 400);
  var r = 0;
  e.vertAlign == "superscript" ? r = 1 : e.vertAlign == "subscript" && (r = 2), t.write_shift(2, r), t.write_shift(1, e.underline || 0), t.write_shift(1, e.family || 0), t.write_shift(1, e.charset || 0), t.write_shift(1, 0), ln(e.color, t);
  var n = 0;
  return e.scheme == "major" && (n = 1), e.scheme == "minor" && (n = 2), t.write_shift(1, n), be(e.name, t), t.length > t.l ? t.slice(0, t.l) : t;
}
var Pl = [
  "none",
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
], In, Ll = wr;
function q0(e, t) {
  t || (t = B(4 * 3 + 8 * 7 + 16 * 1)), In || (In = Gn(Pl));
  var r = In[e.patternType];
  r == null && (r = 40), t.write_shift(4, r);
  var n = 0;
  if (r != 40)
    for (ln({ auto: 1 }, t), ln({ auto: 1 }, t); n < 12; ++n)
      t.write_shift(4, 0);
  else {
    for (; n < 4; ++n)
      t.write_shift(4, 0);
    for (; n < 12; ++n)
      t.write_shift(4, 0);
  }
  return t.length > t.l ? t.slice(0, t.l) : t;
}
function Ml(e, t) {
  var r = e.l + t, n = e.read_shift(2), a = e.read_shift(2);
  return e.l = r, { ixfe: n, numFmtId: a };
}
function ci(e, t, r) {
  r || (r = B(16)), r.write_shift(2, t || 0), r.write_shift(2, e.numFmtId || 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
  var n = 0;
  return r.write_shift(1, n), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r;
}
function St(e, t) {
  return t || (t = B(10)), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var Bl = wr;
function bl(e, t) {
  return t || (t = B(51)), t.write_shift(1, 0), St(null, t), St(null, t), St(null, t), St(null, t), St(null, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function Ul(e, t) {
  return t || (t = B(12 + 4 * 10)), t.write_shift(4, e.xfId), t.write_shift(2, 1), t.write_shift(1, +e.builtinId), t.write_shift(1, 0), fn(e.name || "", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function Wl(e, t, r) {
  var n = B(2052);
  return n.write_shift(4, e), fn(t, n), fn(r, n), n.length > n.l ? n.slice(0, n.l) : n;
}
function Hl(e, t) {
  if (t) {
    var r = 0;
    [[5, 8], [23, 26], [41, 44], [
      /*63*/
      50,
      /*66],[164,*/
      392
    ]].forEach(function(n) {
      for (var a = n[0]; a <= n[1]; ++a)
        t[a] != null && ++r;
    }), r != 0 && (W(e, 615, gr(r)), [[5, 8], [23, 26], [41, 44], [
      /*63*/
      50,
      /*66],[164,*/
      392
    ]].forEach(function(n) {
      for (var a = n[0]; a <= n[1]; ++a)
        t[a] != null && W(e, 44, Rl(a, t[a]));
    }), W(
      e,
      616
      /* BrtEndFmts */
    ));
  }
}
function Vl(e) {
  var t = 1;
  W(e, 611, gr(t)), W(e, 43, Nl({
    sz: 12,
    color: { theme: 1 },
    name: "Calibri",
    family: 2,
    scheme: "minor"
  })), W(
    e,
    612
    /* BrtEndFonts */
  );
}
function Gl(e) {
  var t = 2;
  W(e, 603, gr(t)), W(e, 45, q0({ patternType: "none" })), W(e, 45, q0({ patternType: "gray125" })), W(
    e,
    604
    /* BrtEndFills */
  );
}
function Xl(e) {
  var t = 1;
  W(e, 613, gr(t)), W(e, 46, bl()), W(
    e,
    614
    /* BrtEndBorders */
  );
}
function Kl(e) {
  var t = 1;
  W(e, 626, gr(t)), W(e, 47, ci({
    numFmtId: 0,
    fontId: 0,
    fillId: 0,
    borderId: 0
  }, 65535)), W(
    e,
    627
    /* BrtEndCellStyleXFs */
  );
}
function zl(e, t) {
  W(e, 617, gr(t.length)), t.forEach(function(r) {
    W(e, 47, ci(r, 0));
  }), W(
    e,
    618
    /* BrtEndCellXFs */
  );
}
function jl(e) {
  var t = 1;
  W(e, 619, gr(t)), W(e, 48, Ul({
    xfId: 0,
    builtinId: 0,
    name: "Normal"
  })), W(
    e,
    620
    /* BrtEndStyles */
  );
}
function Yl(e) {
  var t = 0;
  W(e, 505, gr(t)), W(
    e,
    506
    /* BrtEndDXFs */
  );
}
function $l(e) {
  var t = 0;
  W(e, 508, Wl(t, "TableStyleMedium9", "PivotStyleMedium4")), W(
    e,
    509
    /* BrtEndTableStyles */
  );
}
function Jl(e, t) {
  var r = Qe();
  return W(
    r,
    278
    /* BrtBeginStyleSheet */
  ), Hl(r, e.SSF), Vl(r), Gl(r), Xl(r), Kl(r), zl(r, t.cellXfs), jl(r), Yl(r), $l(r), W(
    r,
    279
    /* BrtEndStyleSheet */
  ), r.end();
}
function hi(e, t) {
  if (t && t.themeXLSX)
    return t.themeXLSX;
  if (e && typeof e.raw == "string")
    return e.raw;
  var r = [Ne];
  return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("");
}
function Zl(e, t) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: Ye(e)
  };
}
function ql(e) {
  var t = B(12 + 2 * e.name.length);
  return t.write_shift(4, e.flags), t.write_shift(4, e.version), be(e.name, t), t.slice(0, t.l);
}
function Ql(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; )
    t.push([e.read_shift(4), e.read_shift(4)]);
  return t;
}
function eo(e) {
  var t = B(4 + 8 * e.length);
  t.write_shift(4, e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1]);
  return t;
}
function ro(e, t) {
  var r = B(8 + 2 * t.length);
  return r.write_shift(4, e), be(t, r), r.slice(0, r.l);
}
function to(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function no(e, t) {
  var r = B(8);
  return r.write_shift(4, e), r.write_shift(4, t ? 1 : 0), r;
}
function ao() {
  var e = Qe();
  return W(e, 332), W(e, 334, gr(1)), W(e, 335, ql({
    name: "XLDAPR",
    version: 12e4,
    flags: 3496657072
  })), W(e, 336), W(e, 339, ro(1, "XLDAPR")), W(e, 52), W(e, 35, gr(514)), W(e, 4096, gr(0)), W(e, 4097, hr(1)), W(e, 36), W(e, 53), W(e, 340), W(e, 337, no(1, !0)), W(e, 51, eo([[1, 0]])), W(e, 338), W(e, 333), e.end();
}
function ui() {
  var e = [Ne];
  return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`), e.join("");
}
function io(e) {
  var t = {};
  t.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4), r.c = e.read_shift(4), t.r = ge(r);
  var n = e.read_shift(1);
  return n & 2 && (t.l = "1"), n & 8 && (t.a = "1"), t;
}
var lt = 1024;
function xi(e, t) {
  for (var r = [21600, 21600], n = ["m0,0l0", r[1], r[0], r[1], r[0], "0xe"].join(","), a = [
    j("xml", null, { "xmlns:v": ir.v, "xmlns:o": ir.o, "xmlns:x": ir.x, "xmlns:mv": ir.mv }).replace(/\/>/, ">"),
    j("o:shapelayout", j("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" }),
    j("v:shapetype", [
      j("v:stroke", null, { joinstyle: "miter" }),
      j("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })
    ].join(""), { id: "_x0000_t202", "o:spt": 202, coordsize: r.join(","), path: n })
  ]; lt < e * 1e3; )
    lt += 1e3;
  return t.forEach(function(i) {
    var s = Be(i[0]), f = (
      /*::(*/
      { color2: "#BEFF82", type: "gradient" }
    );
    f.type == "gradient" && (f.angle = "-180");
    var o = f.type == "gradient" ? j("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null, l = j("v:fill", o, f), c = { on: "t", obscured: "t" };
    ++lt, a = a.concat([
      "<v:shape" + Pt({
        id: "_x0000_s" + lt,
        type: "#_x0000_t202",
        style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (i[1].hidden ? ";visibility:hidden" : ""),
        fillcolor: "#ECFAD4",
        strokecolor: "#edeaa1"
      }) + ">",
      l,
      j("v:shadow", null, c),
      j("v:path", null, { "o:connecttype": "none" }),
      '<v:textbox><div style="text-align:left"></div></v:textbox>',
      '<x:ClientData ObjectType="Note">',
      "<x:MoveWithCells/>",
      "<x:SizeWithCells/>",
      /* Part 4 19.4.2.3 Anchor (Anchor) */
      Ge("x:Anchor", [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(",")),
      Ge("x:AutoFill", "False"),
      Ge("x:Row", String(s.r)),
      Ge("x:Column", String(s.c)),
      i[1].hidden ? "" : "<x:Visible/>",
      "</x:ClientData>",
      "</v:shape>"
    ]);
  }), a.push("</xml>"), a.join("");
}
function di(e) {
  var t = [Ne, j("comments", null, { xmlns: dt[0] })], r = [];
  return t.push("<authors>"), e.forEach(function(n) {
    n[1].forEach(function(a) {
      var i = me(a.a);
      r.indexOf(i) == -1 && (r.push(i), t.push("<author>" + i + "</author>")), a.T && a.ID && r.indexOf("tc=" + a.ID) == -1 && (r.push("tc=" + a.ID), t.push("<author>tc=" + a.ID + "</author>"));
    });
  }), r.length == 0 && (r.push("SheetJ5"), t.push("<author>SheetJ5</author>")), t.push("</authors>"), t.push("<commentList>"), e.forEach(function(n) {
    var a = 0, i = [];
    if (n[1][0] && n[1][0].T && n[1][0].ID ? a = r.indexOf("tc=" + n[1][0].ID) : n[1].forEach(function(o) {
      o.a && (a = r.indexOf(me(o.a))), i.push(o.t || "");
    }), t.push('<comment ref="' + n[0] + '" authorId="' + a + '"><text>'), i.length <= 1)
      t.push(Ge("t", me(i[0] || "")));
    else {
      for (var s = `Comment:
    ` + i[0] + `
`, f = 1; f < i.length; ++f)
        s += `Reply:
    ` + i[f] + `
`;
      t.push(Ge("t", me(s)));
    }
    t.push("</text></comment>");
  }), t.push("</commentList>"), t.length > 2 && (t[t.length] = "</comments>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function so(e, t, r) {
  var n = [Ne, j("ThreadedComments", null, { xmlns: Me.TCMNT }).replace(/[\/]>/, ">")];
  return e.forEach(function(a) {
    var i = "";
    (a[1] || []).forEach(function(s, f) {
      if (!s.T) {
        delete s.ID;
        return;
      }
      s.a && t.indexOf(s.a) == -1 && t.push(s.a);
      var o = {
        ref: a[0],
        id: "{54EE7951-7262-4200-6969-" + ("000000000000" + r.tcid++).slice(-12) + "}"
      };
      f == 0 ? i = o.id : o.parentId = i, s.ID = o.id, s.a && (o.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + t.indexOf(s.a)).slice(-12) + "}"), n.push(j("threadedComment", Ge("text", s.t || ""), o));
    });
  }), n.push("</ThreadedComments>"), n.join("");
}
function fo(e) {
  var t = [Ne, j("personList", null, {
    xmlns: Me.TCMNT,
    "xmlns:x": dt[0]
  }).replace(/[\/]>/, ">")];
  return e.forEach(function(r, n) {
    t.push(j("person", null, {
      displayName: r,
      id: "{54EE7950-7262-4200-6969-" + ("000000000000" + n).slice(-12) + "}",
      userId: r,
      providerId: "None"
    }));
  }), t.push("</personList>"), t.join("");
}
function lo(e) {
  var t = {};
  t.iauthor = e.read_shift(4);
  var r = rt(e);
  return t.rfx = r.s, t.ref = ge(r.s), e.l += 16, t;
}
function oo(e, t) {
  return t == null && (t = B(36)), t.write_shift(4, e[1].iauthor), pt(e[0], t), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var co = Ye;
function ho(e) {
  return be(e.slice(0, 54));
}
function uo(e) {
  var t = Qe(), r = [];
  return W(
    t,
    628
    /* BrtBeginComments */
  ), W(
    t,
    630
    /* BrtBeginCommentAuthors */
  ), e.forEach(function(n) {
    n[1].forEach(function(a) {
      r.indexOf(a.a) > -1 || (r.push(a.a.slice(0, 54)), W(t, 632, ho(a.a)));
    });
  }), W(
    t,
    631
    /* BrtEndCommentAuthors */
  ), W(
    t,
    633
    /* BrtBeginCommentList */
  ), e.forEach(function(n) {
    n[1].forEach(function(a) {
      a.iauthor = r.indexOf(a.a);
      var i = { s: Be(n[0]), e: Be(n[0]) };
      W(t, 635, oo([i, a])), a.t && a.t.length > 0 && W(t, 637, df(a)), W(
        t,
        636
        /* BrtEndComment */
      ), delete a.iauthor;
    });
  }), W(
    t,
    634
    /* BrtEndCommentList */
  ), W(
    t,
    629
    /* BrtEndComments */
  ), t.end();
}
function xo(e, t) {
  t.FullPaths.forEach(function(r, n) {
    if (n != 0) {
      var a = r.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      a.slice(-1) !== "/" && Te.utils.cfb_add(e, a, t.FileIndex[n].content);
    }
  });
}
var vi = ["xlsb", "xlsm", "xlam", "biff8", "xla"], vo = /* @__PURE__ */ function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, t = { r: 0, c: 0 };
  function r(n, a, i, s) {
    var f = !1, o = !1;
    i.length == 0 ? o = !0 : i.charAt(0) == "[" && (o = !0, i = i.slice(1, -1)), s.length == 0 ? f = !0 : s.charAt(0) == "[" && (f = !0, s = s.slice(1, -1));
    var l = i.length > 0 ? parseInt(i, 10) | 0 : 0, c = s.length > 0 ? parseInt(s, 10) | 0 : 0;
    return f ? c += t.c : --c, o ? l += t.r : --l, a + (f ? "" : "$") + je(c) + (o ? "" : "$") + Xe(l);
  }
  return function(a, i) {
    return t = i, a.replace(e, r);
  };
}(), t0 = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g, n0 = /* @__PURE__ */ function() {
  return function(t, r) {
    return t.replace(t0, function(n, a, i, s, f, o) {
      var l = Jn(s) - (i ? 0 : r.c), c = $n(o) - (f ? 0 : r.r), v = c == 0 ? "" : f ? c + 1 : "[" + c + "]", x = l == 0 ? "" : i ? l + 1 : "[" + l + "]";
      return a + "R" + v + "C" + x;
    });
  };
}();
function po(e, t) {
  return e.replace(t0, function(r, n, a, i, s, f) {
    return n + (a == "$" ? a + i : je(Jn(i) + t.c)) + (s == "$" ? s + f : Xe($n(f) + t.r));
  });
}
function mo(e) {
  return e.length != 1;
}
function Re(e) {
  e.l += 1;
}
function Ur(e, t) {
  var r = e.read_shift(t == 1 ? 1 : 2);
  return [r & 16383, r >> 14 & 1, r >> 15 & 1];
}
function pi(e, t, r) {
  var n = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return mi(e);
    r.biff == 12 && (n = 4);
  }
  var a = e.read_shift(n), i = e.read_shift(n), s = Ur(e, 2), f = Ur(e, 2);
  return { s: { r: a, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: i, c: f[0], cRel: f[1], rRel: f[2] } };
}
function mi(e) {
  var t = Ur(e, 2), r = Ur(e, 2), n = e.read_shift(1), a = e.read_shift(1);
  return { s: { r: t[0], c: n, cRel: t[1], rRel: t[2] }, e: { r: r[0], c: a, cRel: r[1], rRel: r[2] } };
}
function go(e, t, r) {
  if (r.biff < 8)
    return mi(e);
  var n = e.read_shift(r.biff == 12 ? 4 : 2), a = e.read_shift(r.biff == 12 ? 4 : 2), i = Ur(e, 2), s = Ur(e, 2);
  return { s: { r: n, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: a, c: s[0], cRel: s[1], rRel: s[2] } };
}
function gi(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5)
    return _o(e);
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2), a = Ur(e, 2);
  return { r: n, c: a[0], cRel: a[1], rRel: a[2] };
}
function _o(e) {
  var t = Ur(e, 2), r = e.read_shift(1);
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] };
}
function To(e) {
  var t = e.read_shift(2), r = e.read_shift(2);
  return { r: t, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function Eo(e, t, r) {
  var n = r && r.biff ? r.biff : 8;
  if (n >= 2 && n <= 5)
    return wo(e);
  var a = e.read_shift(n >= 12 ? 4 : 2), i = e.read_shift(2), s = (i & 16384) >> 14, f = (i & 32768) >> 15;
  if (i &= 16383, f == 1)
    for (; a > 524287; )
      a -= 1048576;
  if (s == 1)
    for (; i > 8191; )
      i = i - 16384;
  return { r: a, c: i, cRel: s, rRel: f };
}
function wo(e) {
  var t = e.read_shift(2), r = e.read_shift(1), n = (t & 32768) >> 15, a = (t & 16384) >> 14;
  return t &= 16383, n == 1 && t >= 8192 && (t = t - 16384), a == 1 && r >= 128 && (r = r - 256), { r: t, c: r, cRel: a, rRel: n };
}
function So(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = pi(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [n, a];
}
function Ao(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = e.read_shift(2, "i"), i = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, i = 6;
        break;
      case 12:
        i = 12;
        break;
    }
  var s = pi(e, i, r);
  return [n, a, s];
}
function Fo(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [n];
}
function yo(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = e.read_shift(2), i = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, i = 6;
        break;
      case 12:
        i = 12;
        break;
    }
  return e.l += i, [n, a];
}
function Co(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = go(e, t - 1, r);
  return [n, a];
}
function Oo(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [n];
}
function Q0(e) {
  var t = e[e.l + 1] & 1, r = 1;
  return e.l += 4, [t, r];
}
function Do(e, t, r) {
  e.l += 2;
  for (var n = e.read_shift(r && r.biff == 2 ? 1 : 2), a = [], i = 0; i <= n; ++i)
    a.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return a;
}
function ko(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function Ro(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function Io(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [t, e.read_shift(2)];
}
function No(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += r && r.biff == 2 ? 3 : 4, [n];
}
function _i(e) {
  var t = e.read_shift(1), r = e.read_shift(1);
  return [t, r];
}
function Po(e) {
  return e.read_shift(2), _i(e);
}
function Lo(e) {
  return e.read_shift(2), _i(e);
}
function Mo(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = gi(e, 0, r);
  return [n, a];
}
function Bo(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = Eo(e, 0, r);
  return [n, a];
}
function bo(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var i = gi(e, 0, r);
  return [n, a, i];
}
function Uo(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [Uc[a], wi[a], n];
}
function Wo(e, t, r) {
  var n = e[e.l++], a = e.read_shift(1), i = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : Ho(e);
  return [a, (i[0] === 0 ? wi : bc)[i[1]]];
}
function Ho(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function Vo(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function Go(e, t, r) {
  if (e.l++, r && r.biff == 12)
    return [e.read_shift(4, "i"), 0];
  var n = e.read_shift(2), a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, a];
}
function Xo(e) {
  return e.l++, Wt[e.read_shift(1)];
}
function Ko(e) {
  return e.l++, e.read_shift(2);
}
function zo(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function jo(e) {
  return e.l++, mt(e);
}
function Yo(e, t, r) {
  return e.l++, ri(e, t - 1, r);
}
function $o(e, t) {
  var r = [e.read_shift(1)];
  if (t == 12)
    switch (r[0]) {
      case 2:
        r[0] = 4;
        break;
      case 4:
        r[0] = 16;
        break;
      case 0:
        r[0] = 1;
        break;
      case 1:
        r[0] = 2;
        break;
    }
  switch (r[0]) {
    case 4:
      r[1] = Bf(e, 1) ? "TRUE" : "FALSE", t != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      r[1] = Wt[e[e.l]], e.l += t == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = mt(e);
      break;
    case 2:
      r[1] = Hf(e, 0, { biff: t > 0 && t < 8 ? 2 : t });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function Jo(e, t, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), a = [], i = 0; i != n; ++i)
    a.push((r.biff == 12 ? rt : Xf)(e));
  return a;
}
function Zo(e, t, r) {
  var n = 0, a = 0;
  r.biff == 12 ? (n = e.read_shift(4), a = e.read_shift(4)) : (a = 1 + e.read_shift(1), n = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--n, --a == 0 && (a = 256));
  for (var i = 0, s = []; i != n && (s[i] = []); ++i)
    for (var f = 0; f != a; ++f)
      s[i][f] = $o(e, r.biff);
  return s;
}
function qo(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3, a = !r || r.biff >= 8 ? 4 : 2, i = e.read_shift(a);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [n, 0, i];
}
function Qo(e, t, r) {
  if (r.biff == 5)
    return ec(e);
  var n = e.read_shift(1) >>> 5 & 3, a = e.read_shift(2), i = e.read_shift(4);
  return [n, a, i];
}
function ec(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2, "i");
  e.l += 8;
  var n = e.read_shift(2);
  return e.l += 12, [t, r, n];
}
function rc(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, a];
}
function tc(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3, a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, a];
}
function nc(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n];
}
function ac(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = e.read_shift(2), i = 4;
  if (r)
    switch (r.biff) {
      case 5:
        i = 15;
        break;
      case 12:
        i = 6;
        break;
    }
  return e.l += i, [n, a];
}
var ic = wr, sc = wr, fc = wr;
function Ht(e, t, r) {
  return e.l += 2, [To(e)];
}
function a0(e) {
  return e.l += 6, [];
}
var lc = Ht, oc = a0, cc = a0, hc = Ht;
function Ti(e) {
  return e.l += 2, [Qa(e), e.read_shift(2) & 1];
}
var uc = Ht, xc = Ti, dc = a0, vc = Ht, pc = Ht, mc = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function gc(e) {
  e.l += 2;
  var t = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(4), a = e.read_shift(2), i = e.read_shift(2), s = mc[r >> 2 & 31];
  return { ixti: t, coltype: r & 3, rt: s, idx: n, c: a, C: i };
}
function _c(e) {
  return e.l += 2, [e.read_shift(4)];
}
function Tc(e, t, r) {
  return e.l += 5, e.l += 2, e.l += r.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function Ec(e, t, r) {
  return e.l += r.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function wc(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function Sc(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function Ac(e) {
  return e.l += 4, [0, 0];
}
var ea = {
  /*::[*/
  1: { n: "PtgExp", f: Go },
  /*::[*/
  2: { n: "PtgTbl", f: fc },
  /*::[*/
  3: { n: "PtgAdd", f: Re },
  /*::[*/
  4: { n: "PtgSub", f: Re },
  /*::[*/
  5: { n: "PtgMul", f: Re },
  /*::[*/
  6: { n: "PtgDiv", f: Re },
  /*::[*/
  7: { n: "PtgPower", f: Re },
  /*::[*/
  8: { n: "PtgConcat", f: Re },
  /*::[*/
  9: { n: "PtgLt", f: Re },
  /*::[*/
  10: { n: "PtgLe", f: Re },
  /*::[*/
  11: { n: "PtgEq", f: Re },
  /*::[*/
  12: { n: "PtgGe", f: Re },
  /*::[*/
  13: { n: "PtgGt", f: Re },
  /*::[*/
  14: { n: "PtgNe", f: Re },
  /*::[*/
  15: { n: "PtgIsect", f: Re },
  /*::[*/
  16: { n: "PtgUnion", f: Re },
  /*::[*/
  17: { n: "PtgRange", f: Re },
  /*::[*/
  18: { n: "PtgUplus", f: Re },
  /*::[*/
  19: { n: "PtgUminus", f: Re },
  /*::[*/
  20: { n: "PtgPercent", f: Re },
  /*::[*/
  21: { n: "PtgParen", f: Re },
  /*::[*/
  22: { n: "PtgMissArg", f: Re },
  /*::[*/
  23: { n: "PtgStr", f: Yo },
  /*::[*/
  26: { n: "PtgSheet", f: Tc },
  /*::[*/
  27: { n: "PtgEndSheet", f: Ec },
  /*::[*/
  28: { n: "PtgErr", f: Xo },
  /*::[*/
  29: { n: "PtgBool", f: zo },
  /*::[*/
  30: { n: "PtgInt", f: Ko },
  /*::[*/
  31: { n: "PtgNum", f: jo },
  /*::[*/
  32: { n: "PtgArray", f: Oo },
  /*::[*/
  33: { n: "PtgFunc", f: Uo },
  /*::[*/
  34: { n: "PtgFuncVar", f: Wo },
  /*::[*/
  35: { n: "PtgName", f: qo },
  /*::[*/
  36: { n: "PtgRef", f: Mo },
  /*::[*/
  37: { n: "PtgArea", f: So },
  /*::[*/
  38: { n: "PtgMemArea", f: rc },
  /*::[*/
  39: { n: "PtgMemErr", f: ic },
  /*::[*/
  40: { n: "PtgMemNoMem", f: sc },
  /*::[*/
  41: { n: "PtgMemFunc", f: tc },
  /*::[*/
  42: { n: "PtgRefErr", f: nc },
  /*::[*/
  43: { n: "PtgAreaErr", f: Fo },
  /*::[*/
  44: { n: "PtgRefN", f: Bo },
  /*::[*/
  45: { n: "PtgAreaN", f: Co },
  /*::[*/
  46: { n: "PtgMemAreaN", f: wc },
  /*::[*/
  47: { n: "PtgMemNoMemN", f: Sc },
  /*::[*/
  57: { n: "PtgNameX", f: Qo },
  /*::[*/
  58: { n: "PtgRef3d", f: bo },
  /*::[*/
  59: { n: "PtgArea3d", f: Ao },
  /*::[*/
  60: { n: "PtgRefErr3d", f: ac },
  /*::[*/
  61: { n: "PtgAreaErr3d", f: yo },
  /*::[*/
  255: {}
}, Fc = {
  /*::[*/
  64: 32,
  /*::[*/
  96: 32,
  /*::[*/
  65: 33,
  /*::[*/
  97: 33,
  /*::[*/
  66: 34,
  /*::[*/
  98: 34,
  /*::[*/
  67: 35,
  /*::[*/
  99: 35,
  /*::[*/
  68: 36,
  /*::[*/
  100: 36,
  /*::[*/
  69: 37,
  /*::[*/
  101: 37,
  /*::[*/
  70: 38,
  /*::[*/
  102: 38,
  /*::[*/
  71: 39,
  /*::[*/
  103: 39,
  /*::[*/
  72: 40,
  /*::[*/
  104: 40,
  /*::[*/
  73: 41,
  /*::[*/
  105: 41,
  /*::[*/
  74: 42,
  /*::[*/
  106: 42,
  /*::[*/
  75: 43,
  /*::[*/
  107: 43,
  /*::[*/
  76: 44,
  /*::[*/
  108: 44,
  /*::[*/
  77: 45,
  /*::[*/
  109: 45,
  /*::[*/
  78: 46,
  /*::[*/
  110: 46,
  /*::[*/
  79: 47,
  /*::[*/
  111: 47,
  /*::[*/
  88: 34,
  /*::[*/
  120: 34,
  /*::[*/
  89: 57,
  /*::[*/
  121: 57,
  /*::[*/
  90: 58,
  /*::[*/
  122: 58,
  /*::[*/
  91: 59,
  /*::[*/
  123: 59,
  /*::[*/
  92: 60,
  /*::[*/
  124: 60,
  /*::[*/
  93: 61,
  /*::[*/
  125: 61
}, yc = {
  /*::[*/
  1: { n: "PtgElfLel", f: Ti },
  /*::[*/
  2: { n: "PtgElfRw", f: vc },
  /*::[*/
  3: { n: "PtgElfCol", f: lc },
  /*::[*/
  6: { n: "PtgElfRwV", f: pc },
  /*::[*/
  7: { n: "PtgElfColV", f: hc },
  /*::[*/
  10: { n: "PtgElfRadical", f: uc },
  /*::[*/
  11: { n: "PtgElfRadicalS", f: dc },
  /*::[*/
  13: { n: "PtgElfColS", f: oc },
  /*::[*/
  15: { n: "PtgElfColSV", f: cc },
  /*::[*/
  16: { n: "PtgElfRadicalLel", f: xc },
  /*::[*/
  25: { n: "PtgList", f: gc },
  /*::[*/
  29: { n: "PtgSxName", f: _c },
  /*::[*/
  255: {}
}, Cc = {
  /*::[*/
  0: { n: "PtgAttrNoop", f: Ac },
  /*::[*/
  1: { n: "PtgAttrSemi", f: No },
  /*::[*/
  2: { n: "PtgAttrIf", f: Ro },
  /*::[*/
  4: { n: "PtgAttrChoose", f: Do },
  /*::[*/
  8: { n: "PtgAttrGoto", f: ko },
  /*::[*/
  16: { n: "PtgAttrSum", f: Vo },
  /*::[*/
  32: { n: "PtgAttrBaxcel", f: Q0 },
  /*::[*/
  33: { n: "PtgAttrBaxcel", f: Q0 },
  /*::[*/
  64: { n: "PtgAttrSpace", f: Po },
  /*::[*/
  65: { n: "PtgAttrSpaceSemi", f: Lo },
  /*::[*/
  128: { n: "PtgAttrIfError", f: Io },
  /*::[*/
  255: {}
};
function Oc(e, t, r, n) {
  if (n.biff < 8)
    return wr(e, t);
  for (var a = e.l + t, i = [], s = 0; s !== r.length; ++s)
    switch (r[s][0]) {
      case "PtgArray":
        r[s][1] = Zo(e, 0, n), i.push(r[s][1]);
        break;
      case "PtgMemArea":
        r[s][2] = Jo(e, r[s][1], n), i.push(r[s][2]);
        break;
      case "PtgExp":
        n && n.biff == 12 && (r[s][1][1] = e.read_shift(4), i.push(r[s][1]));
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + r[s][0];
    }
  return t = a - e.l, t !== 0 && i.push(wr(e, t)), i;
}
function Dc(e, t, r) {
  for (var n = e.l + t, a, i, s = []; n != e.l; )
    t = n - e.l, i = e[e.l], a = ea[i] || ea[Fc[i]], (i === 24 || i === 25) && (a = (i === 24 ? yc : Cc)[e[e.l + 1]]), !a || !a.f ? wr(e, t) : s.push([a.n, a.f(e, t, r)]);
  return s;
}
function kc(e) {
  for (var t = [], r = 0; r < e.length; ++r) {
    for (var n = e[r], a = [], i = 0; i < n.length; ++i) {
      var s = n[i];
      if (s)
        switch (s[0]) {
          case 2:
            a.push('"' + s[1].replace(/"/g, '""') + '"');
            break;
          default:
            a.push(s[1]);
        }
      else
        a.push("");
    }
    t.push(a.join(","));
  }
  return t.join(";");
}
var Rc = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function Ic(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2))
    throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function Ei(e, t, r) {
  if (!e)
    return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[t]))
    return e.SheetNames[t];
  if (!e.XTI)
    return "SH33TJSERR6";
  var n = e.XTI[t];
  if (r.biff < 8)
    return t > 1e4 && (t -= 65536), t < 0 && (t = -t), t == 0 ? "" : e.XTI[t - 1];
  if (!n)
    return "SH33TJSERR1";
  var a = "";
  if (r.biff > 8)
    switch (e[n[0]][0]) {
      case 357:
        return a = n[1] == -1 ? "#REF" : e.SheetNames[n[1]], n[1] == n[2] ? a : a + ":" + e.SheetNames[n[2]];
      case 358:
        return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[n[0]][0];
      case 355:
      default:
        return "SH33TJSSRC" + e[n[0]][0];
    }
  switch (e[n[0]][0][0]) {
    case 1025:
      return a = n[1] == -1 ? "#REF" : e.SheetNames[n[1]] || "SH33TJSERR3", n[1] == n[2] ? a : a + ":" + e.SheetNames[n[2]];
    case 14849:
      return e[n[0]].slice(1).map(function(i) {
        return i.Name;
      }).join(";;");
    default:
      return e[n[0]][0][3] ? (a = n[1] == -1 ? "#REF" : e[n[0]][0][3][n[1]] || "SH33TJSERR4", n[1] == n[2] ? a : a + ":" + e[n[0]][0][3][n[2]]) : "SH33TJSERR2";
  }
}
function ra(e, t, r) {
  var n = Ei(e, t, r);
  return n == "#REF" ? n : Ic(n, r);
}
function xt(e, t, r, n, a) {
  var i = a && a.biff || 8, s = (
    /*range != null ? range :*/
    { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }
  ), f = [], o, l, c, v = 0, x = 0, d, E = "";
  if (!e[0] || !e[0][0])
    return "";
  for (var u = -1, _ = "", O = 0, k = e[0].length; O < k; ++O) {
    var y = e[0][O];
    switch (y[0]) {
      case "PtgUminus":
        f.push("-" + f.pop());
        break;
      case "PtgUplus":
        f.push("+" + f.pop());
        break;
      case "PtgPercent":
        f.push(f.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (o = f.pop(), l = f.pop(), u >= 0) {
          switch (e[0][u][1][0]) {
            case 0:
              _ = Oe(" ", e[0][u][1][1]);
              break;
            case 1:
              _ = Oe("\r", e[0][u][1][1]);
              break;
            default:
              if (_ = "", a.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][u][1][0]);
          }
          l = l + _, u = -1;
        }
        f.push(l + Rc[y[0]] + o);
        break;
      case "PtgIsect":
        o = f.pop(), l = f.pop(), f.push(l + " " + o);
        break;
      case "PtgUnion":
        o = f.pop(), l = f.pop(), f.push(l + "," + o);
        break;
      case "PtgRange":
        o = f.pop(), l = f.pop(), f.push(l + ":" + o);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        c = Ot(y[1][1], s, a), f.push(Dt(c, i));
        break;
      case "PtgRefN":
        c = r ? Ot(y[1][1], r, a) : y[1][1], f.push(Dt(c, i));
        break;
      case "PtgRef3d":
        v = /*::Number(*/
        y[1][1], c = Ot(y[1][2], s, a), E = ra(n, v, a), f.push(E + "!" + Dt(c, i));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var M = y[1][0], Y = y[1][1];
        M || (M = 0), M &= 127;
        var ee = M == 0 ? [] : f.slice(-M);
        f.length -= M, Y === "User" && (Y = ee.shift()), f.push(Y + "(" + ee.join(",") + ")");
        break;
      case "PtgBool":
        f.push(y[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        f.push(
          /*::String(*/
          y[1]
          /*::)*/
        );
        break;
      case "PtgNum":
        f.push(String(y[1]));
        break;
      case "PtgStr":
        f.push('"' + y[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        f.push(
          /*::String(*/
          y[1]
          /*::)*/
        );
        break;
      case "PtgAreaN":
        d = U0(y[1][1], r ? { s: r } : s, a), f.push(kn(d, a));
        break;
      case "PtgArea":
        d = U0(y[1][1], s, a), f.push(kn(d, a));
        break;
      case "PtgArea3d":
        v = /*::Number(*/
        y[1][1], d = y[1][2], E = ra(n, v, a), f.push(E + "!" + kn(d, a));
        break;
      case "PtgAttrSum":
        f.push("SUM(" + f.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        x = y[1][2];
        var C = (n.names || [])[x - 1] || (n[0] || [])[x], U = C ? C.Name : "SH33TJSNAME" + String(x);
        U && U.slice(0, 6) == "_xlfn." && !a.xlfn && (U = U.slice(6)), f.push(U);
        break;
      case "PtgNameX":
        var L = y[1][1];
        x = y[1][2];
        var V;
        if (a.biff <= 5)
          L < 0 && (L = -L), n[L] && (V = n[L][x]);
        else {
          var G = "";
          if (((n[L] || [])[0] || [])[0] == 14849 || (((n[L] || [])[0] || [])[0] == 1025 ? n[L][x] && n[L][x].itab > 0 && (G = n.SheetNames[n[L][x].itab - 1] + "!") : G = n.SheetNames[x - 1] + "!"), n[L] && n[L][x])
            G += n[L][x].Name;
          else if (n[0] && n[0][x])
            G += n[0][x].Name;
          else {
            var K = (Ei(n, L, a) || "").split(";;");
            K[x - 1] ? G = K[x - 1] : G += "SH33TJSERRX";
          }
          f.push(G);
          break;
        }
        V || (V = { Name: "SH33TJSERRY" }), f.push(V.Name);
        break;
      case "PtgParen":
        var re = "(", _e = ")";
        if (u >= 0) {
          switch (_ = "", e[0][u][1][0]) {
            case 2:
              re = Oe(" ", e[0][u][1][1]) + re;
              break;
            case 3:
              re = Oe("\r", e[0][u][1][1]) + re;
              break;
            case 4:
              _e = Oe(" ", e[0][u][1][1]) + _e;
              break;
            case 5:
              _e = Oe("\r", e[0][u][1][1]) + _e;
              break;
            default:
              if (a.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][u][1][0]);
          }
          u = -1;
        }
        f.push(re + f.pop() + _e);
        break;
      case "PtgRefErr":
        f.push("#REF!");
        break;
      case "PtgRefErr3d":
        f.push("#REF!");
        break;
      case "PtgExp":
        c = { c: y[1][1], r: y[1][0] };
        var oe = { c: r.c, r: r.r };
        if (n.sharedf[ge(c)]) {
          var Ue = n.sharedf[ge(c)];
          f.push(xt(Ue, s, oe, n, a));
        } else {
          var ke = !1;
          for (o = 0; o != n.arrayf.length; ++o)
            if (l = n.arrayf[o], !(c.c < l[0].s.c || c.c > l[0].e.c) && !(c.r < l[0].s.r || c.r > l[0].e.r)) {
              f.push(xt(l[1], s, oe, n, a)), ke = !0;
              break;
            }
          ke || f.push(
            /*::String(*/
            y[1]
            /*::)*/
          );
        }
        break;
      case "PtgArray":
        f.push("{" + kc(
          /*::(*/
          y[1]
          /*:: :any)*/
        ) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        u = O;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        f.push("");
        break;
      case "PtgAreaErr":
        f.push("#REF!");
        break;
      case "PtgAreaErr3d":
        f.push("#REF!");
        break;
      case "PtgList":
        f.push("Table" + y[1].idx + "[#" + y[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(y));
      default:
        throw new Error("Unrecognized Formula Token: " + String(y));
    }
    var xr = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (a.biff != 3 && u >= 0 && xr.indexOf(e[0][O][0]) == -1) {
      y = e[0][u];
      var Le = !0;
      switch (y[1][0]) {
        case 4:
          Le = !1;
        case 0:
          _ = Oe(" ", y[1][1]);
          break;
        case 5:
          Le = !1;
        case 1:
          _ = Oe("\r", y[1][1]);
          break;
        default:
          if (_ = "", a.WTF)
            throw new Error("Unexpected PtgAttrSpaceType " + y[1][0]);
      }
      f.push((Le ? _ : "") + f.pop() + (Le ? "" : _)), u = -1;
    }
  }
  if (f.length > 1 && a.WTF)
    throw new Error("bad formula stack");
  return f[0];
}
function Nc(e) {
  if (e == null) {
    var t = B(8);
    return t.write_shift(1, 3), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 65535), t;
  } else if (typeof e == "number")
    return $r(e);
  return $r(0);
}
function Pc(e, t, r, n, a) {
  var i = Jr(t, r, a), s = Nc(e.v), f = B(6), o = 33;
  f.write_shift(2, o), f.write_shift(4, 0);
  for (var l = B(e.bf.length), c = 0; c < e.bf.length; ++c)
    l[c] = e.bf[c];
  var v = Ve([i, s, f, l]);
  return v;
}
function Tn(e, t, r) {
  var n = e.read_shift(4), a = Dc(e, n, r), i = e.read_shift(4), s = i > 0 ? Oc(e, i, a, r) : null;
  return [a, s];
}
var Lc = Tn, En = Tn, Mc = Tn, Bc = Tn, bc = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
}, wi = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
}, Uc = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function Wc(e) {
  var t = "of:=" + e.replace(t0, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return t.replace(/;/g, "|").replace(/,/g, ";");
}
function Hc(e) {
  return e.replace(/\./, "!");
}
var kt = typeof Map < "u";
function i0(e, t, r) {
  var n = 0, a = e.length;
  if (r) {
    if (kt ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var i = kt ? r.get(t) : r[t]; n < i.length; ++n)
        if (e[i[n]].t === t)
          return e.Count++, i[n];
    }
  } else
    for (; n < a; ++n)
      if (e[n].t === t)
        return e.Count++, n;
  return e[a] = { t }, e.Count++, e.Unique++, r && (kt ? (r.has(t) || r.set(t, []), r.get(t).push(a)) : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []), r[t].push(a))), a;
}
function wn(e, t) {
  var r = { min: e + 1, max: e + 1 }, n = -1;
  return t.MDW && (Dr = t.MDW), t.width != null ? r.customWidth = 1 : t.wpx != null ? n = hn(t.wpx) : t.wch != null && (n = t.wch), n > -1 ? (r.width = Wn(n), r.customWidth = 1) : t.width != null && (r.width = t.width), t.hidden && (r.hidden = !0), t.level != null && (r.outlineLevel = r.level = t.level), r;
}
function Si(e, t) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    t == "xlml" && (r = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function Hr(e, t, r) {
  var n = r.revssf[t.z != null ? t.z : "General"], a = 60, i = e.length;
  if (n == null && r.ssf) {
    for (; a < 392; ++a)
      if (r.ssf[a] == null) {
        ga(t.z, a), r.ssf[a] = t.z, r.revssf[t.z] = n = a;
        break;
      }
  }
  for (a = 0; a != i; ++a)
    if (e[a].numFmtId === n)
      return a;
  return e[i] = {
    numFmtId: n,
    fontId: 0,
    fillId: 0,
    borderId: 0,
    xfId: 0,
    applyNumberFormat: 1
  }, i;
}
function Vc(e, t, r) {
  if (e && e["!ref"]) {
    var n = we(e["!ref"]);
    if (n.e.c < n.s.c || n.e.r < n.s.r)
      throw new Error("Bad range (" + r + "): " + e["!ref"]);
  }
}
function Gc(e) {
  if (e.length === 0)
    return "";
  for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r)
    t += '<mergeCell ref="' + Ie(e[r]) + '"/>';
  return t + "</mergeCells>";
}
function Xc(e, t, r, n, a) {
  var i = !1, s = {}, f = null;
  if (n.bookType !== "xlsx" && t.vbaraw) {
    var o = t.SheetNames[r];
    try {
      t.Workbook && (o = t.Workbook.Sheets[r].CodeName || o);
    } catch {
    }
    i = !0, s.codeName = yr(me(o));
  }
  if (e && e["!outline"]) {
    var l = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (l.summaryBelow = 0), e["!outline"].left && (l.summaryRight = 0), f = (f || "") + j("outlinePr", null, l);
  }
  !i && !f || (a[a.length] = j("sheetPr", f, s));
}
var Kc = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"], zc = [
  "formatColumns",
  "formatRows",
  "formatCells",
  "insertColumns",
  "insertRows",
  "insertHyperlinks",
  "deleteColumns",
  "deleteRows",
  "sort",
  "autoFilter",
  "pivotTables"
];
function jc(e) {
  var t = { sheet: 1 };
  return Kc.forEach(function(r) {
    e[r] != null && e[r] && (t[r] = "1");
  }), zc.forEach(function(r) {
    e[r] != null && !e[r] && (t[r] = "0");
  }), e.password && (t.password = si(e.password).toString(16).toUpperCase()), j("sheetProtection", null, t);
}
function Yc(e) {
  return Si(e), j("pageMargins", null, e);
}
function $c(e, t) {
  for (var r = ["<cols>"], n, a = 0; a != t.length; ++a)
    (n = t[a]) && (r[r.length] = j("col", null, wn(a, n)));
  return r[r.length] = "</cols>", r.join("");
}
function Jc(e, t, r, n) {
  var a = typeof e.ref == "string" ? e.ref : Ie(e.ref);
  r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
  var i = r.Workbook.Names, s = fr(a);
  s.s.r == s.e.r && (s.e.r = fr(t["!ref"]).e.r, a = Ie(s));
  for (var f = 0; f < i.length; ++f) {
    var o = i[f];
    if (o.Name == "_xlnm._FilterDatabase" && o.Sheet == n) {
      o.Ref = "'" + r.SheetNames[n] + "'!" + a;
      break;
    }
  }
  return f == i.length && i.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: "'" + r.SheetNames[n] + "'!" + a }), j("autoFilter", null, { ref: a });
}
function Zc(e, t, r, n) {
  var a = { workbookViewId: "0" };
  return (((n || {}).Workbook || {}).Views || [])[0] && (a.rightToLeft = n.Workbook.Views[0].RTL ? "1" : "0"), j("sheetViews", j("sheetView", null, a), {});
}
function qc(e, t, r, n) {
  if (e.c && r["!comments"].push([t, e.c]), e.v === void 0 && typeof e.f != "string" || e.t === "z" && !e.f)
    return "";
  var a = "", i = e.t, s = e.v;
  if (e.t !== "z")
    switch (e.t) {
      case "b":
        a = e.v ? "1" : "0";
        break;
      case "n":
        a = "" + e.v;
        break;
      case "e":
        a = Wt[e.v];
        break;
      case "d":
        n && n.cellDates ? a = qe(e.v, -1).toISOString() : (e = rr(e), e.t = "n", a = "" + (e.v = er(qe(e.v)))), typeof e.z > "u" && (e.z = De[14]);
        break;
      default:
        a = e.v;
        break;
    }
  var f = Ge("v", me(a)), o = { r: t }, l = Hr(n.cellXfs, e, n);
  switch (l !== 0 && (o.s = l), e.t) {
    case "n":
      break;
    case "d":
      o.t = "d";
      break;
    case "b":
      o.t = "b";
      break;
    case "e":
      o.t = "e";
      break;
    case "z":
      break;
    default:
      if (e.v == null) {
        delete e.t;
        break;
      }
      if (e.v.length > 32767)
        throw new Error("Text length must not exceed 32767 characters");
      if (n && n.bookSST) {
        f = Ge("v", "" + i0(n.Strings, e.v, n.revStrings)), o.t = "s";
        break;
      }
      o.t = "str";
      break;
  }
  if (e.t != i && (e.t = i, e.v = s), typeof e.f == "string" && e.f) {
    var c = e.F && e.F.slice(0, t.length) == t ? { t: "array", ref: e.F } : null;
    f = j("f", me(e.f), c) + (e.v != null ? f : "");
  }
  return e.l && r["!links"].push([t, e.l]), e.D && (o.cm = 1), j("c", f, o);
}
function Qc(e, t, r, n) {
  var a = [], i = [], s = we(e["!ref"]), f = "", o, l = "", c = [], v = 0, x = 0, d = e["!rows"], E = Array.isArray(e), u = { r: l }, _, O = -1;
  for (x = s.s.c; x <= s.e.c; ++x)
    c[x] = je(x);
  for (v = s.s.r; v <= s.e.r; ++v) {
    for (i = [], l = Xe(v), x = s.s.c; x <= s.e.c; ++x) {
      o = c[x] + l;
      var k = E ? (e[v] || [])[x] : e[o];
      k !== void 0 && (f = qc(k, o, e, t)) != null && i.push(f);
    }
    (i.length > 0 || d && d[v]) && (u = { r: l }, d && d[v] && (_ = d[v], _.hidden && (u.hidden = 1), O = -1, _.hpx ? O = un(_.hpx) : _.hpt && (O = _.hpt), O > -1 && (u.ht = O, u.customHeight = 1), _.level && (u.outlineLevel = _.level)), a[a.length] = j("row", i.join(""), u));
  }
  if (d)
    for (; v < d.length; ++v)
      d && d[v] && (u = { r: v + 1 }, _ = d[v], _.hidden && (u.hidden = 1), O = -1, _.hpx ? O = un(_.hpx) : _.hpt && (O = _.hpt), O > -1 && (u.ht = O, u.customHeight = 1), _.level && (u.outlineLevel = _.level), a[a.length] = j("row", "", u));
  return a.join("");
}
function Ai(e, t, r, n) {
  var a = [Ne, j("worksheet", null, {
    xmlns: dt[0],
    "xmlns:r": Me.r
  })], i = r.SheetNames[e], s = 0, f = "", o = r.Sheets[i];
  o == null && (o = {});
  var l = o["!ref"] || "A1", c = we(l);
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (t.WTF)
      throw new Error("Range " + l + " exceeds format limit A1:XFD1048576");
    c.e.c = Math.min(c.e.c, 16383), c.e.r = Math.min(c.e.c, 1048575), l = Ie(c);
  }
  n || (n = {}), o["!comments"] = [];
  var v = [];
  Xc(o, r, e, t, a), a[a.length] = j("dimension", null, { ref: l }), a[a.length] = Zc(o, t, e, r), t.sheetFormat && (a[a.length] = j("sheetFormatPr", null, {
    defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
    baseColWidth: t.sheetFormat.baseColWidth || "10",
    outlineLevelRow: t.sheetFormat.outlineLevelRow || "7"
  })), o["!cols"] != null && o["!cols"].length > 0 && (a[a.length] = $c(o, o["!cols"])), a[s = a.length] = "<sheetData/>", o["!links"] = [], o["!ref"] != null && (f = Qc(o, t), f.length > 0 && (a[a.length] = f)), a.length > s + 1 && (a[a.length] = "</sheetData>", a[s] = a[s].replace("/>", ">")), o["!protect"] && (a[a.length] = jc(o["!protect"])), o["!autofilter"] != null && (a[a.length] = Jc(o["!autofilter"], o, r, e)), o["!merges"] != null && o["!merges"].length > 0 && (a[a.length] = Gc(o["!merges"]));
  var x = -1, d, E = -1;
  return (
    /*::(*/
    o["!links"].length > 0 && (a[a.length] = "<hyperlinks>", o["!links"].forEach(function(u) {
      u[1].Target && (d = { ref: u[0] }, u[1].Target.charAt(0) != "#" && (E = pe(n, -1, me(u[1].Target).replace(/#.*$/, ""), ue.HLINK), d["r:id"] = "rId" + E), (x = u[1].Target.indexOf("#")) > -1 && (d.location = me(u[1].Target.slice(x + 1))), u[1].Tooltip && (d.tooltip = me(u[1].Tooltip)), a[a.length] = j("hyperlink", null, d));
    }), a[a.length] = "</hyperlinks>"), delete o["!links"], o["!margins"] != null && (a[a.length] = Yc(o["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && (a[a.length] = Ge("ignoredErrors", j("ignoredError", null, { numberStoredAsText: 1, sqref: l }))), v.length > 0 && (E = pe(n, -1, "../drawings/drawing" + (e + 1) + ".xml", ue.DRAW), a[a.length] = j("drawing", null, { "r:id": "rId" + E }), o["!drawing"] = v), o["!comments"].length > 0 && (E = pe(n, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", ue.VML), a[a.length] = j("legacyDrawing", null, { "r:id": "rId" + E }), o["!legacy"] = E), a.length > 1 && (a[a.length] = "</worksheet>", a[1] = a[1].replace("/>", ">")), a.join("")
  );
}
function eh(e, t) {
  var r = {}, n = e.l + t;
  r.r = e.read_shift(4), e.l += 4;
  var a = e.read_shift(2);
  e.l += 1;
  var i = e.read_shift(1);
  return e.l = n, i & 7 && (r.level = i & 7), i & 16 && (r.hidden = !0), i & 32 && (r.hpt = a / 20), r;
}
function rh(e, t, r) {
  var n = B(145), a = (r["!rows"] || [])[e] || {};
  n.write_shift(4, e), n.write_shift(4, 0);
  var i = 320;
  a.hpx ? i = un(a.hpx) * 20 : a.hpt && (i = a.hpt * 20), n.write_shift(2, i), n.write_shift(1, 0);
  var s = 0;
  a.level && (s |= a.level), a.hidden && (s |= 16), (a.hpx || a.hpt) && (s |= 32), n.write_shift(1, s), n.write_shift(1, 0);
  var f = 0, o = n.l;
  n.l += 4;
  for (var l = { r: e, c: 0 }, c = 0; c < 16; ++c)
    if (!(t.s.c > c + 1 << 10 || t.e.c < c << 10)) {
      for (var v = -1, x = -1, d = c << 10; d < c + 1 << 10; ++d) {
        l.c = d;
        var E = Array.isArray(r) ? (r[l.r] || [])[l.c] : r[ge(l)];
        E && (v < 0 && (v = d), x = d);
      }
      v < 0 || (++f, n.write_shift(4, v), n.write_shift(4, x));
    }
  var u = n.l;
  return n.l = o, n.write_shift(4, f), n.l = u, n.length > n.l ? n.slice(0, n.l) : n;
}
function th(e, t, r, n) {
  var a = rh(n, r, t);
  (a.length > 17 || (t["!rows"] || [])[n]) && W(e, 0, a);
}
var nh = rt, ah = pt;
function ih() {
}
function sh(e, t) {
  var r = {}, n = e[e.l];
  return ++e.l, r.above = !(n & 64), r.left = !(n & 128), e.l += 18, r.name = vf(e), r;
}
function fh(e, t, r) {
  r == null && (r = B(84 + 4 * e.length));
  var n = 192;
  t && (t.above && (n &= -65), t.left && (n &= -129)), r.write_shift(1, n);
  for (var a = 1; a < 3; ++a)
    r.write_shift(1, 0);
  return ln({ auto: 1 }, r), r.write_shift(-4, -1), r.write_shift(-4, -1), Ua(e, r), r.slice(0, r.l);
}
function lh(e) {
  var t = ur(e);
  return [t];
}
function oh(e, t, r) {
  return r == null && (r = B(8)), qr(t, r);
}
function ch(e) {
  var t = Qr(e);
  return [t];
}
function hh(e, t, r) {
  return r == null && (r = B(4)), et(t, r);
}
function uh(e) {
  var t = ur(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function xh(e, t, r) {
  return r == null && (r = B(9)), qr(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function dh(e) {
  var t = Qr(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function vh(e, t, r) {
  return r == null && (r = B(5)), et(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function ph(e) {
  var t = ur(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function mh(e, t, r) {
  return r == null && (r = B(9)), qr(t, r), r.write_shift(1, e.v), r;
}
function gh(e) {
  var t = Qr(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function _h(e, t, r) {
  return r == null && (r = B(8)), et(t, r), r.write_shift(1, e.v), r.write_shift(2, 0), r.write_shift(1, 0), r;
}
function Th(e) {
  var t = ur(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function Eh(e, t, r) {
  return r == null && (r = B(12)), qr(t, r), r.write_shift(4, t.v), r;
}
function wh(e) {
  var t = Qr(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function Sh(e, t, r) {
  return r == null && (r = B(8)), et(t, r), r.write_shift(4, t.v), r;
}
function Ah(e) {
  var t = ur(e), r = mt(e);
  return [t, r, "n"];
}
function Fh(e, t, r) {
  return r == null && (r = B(16)), qr(t, r), $r(e.v, r), r;
}
function yh(e) {
  var t = Qr(e), r = mt(e);
  return [t, r, "n"];
}
function Ch(e, t, r) {
  return r == null && (r = B(12)), et(t, r), $r(e.v, r), r;
}
function Oh(e) {
  var t = ur(e), r = Wa(e);
  return [t, r, "n"];
}
function Dh(e, t, r) {
  return r == null && (r = B(12)), qr(t, r), Ha(e.v, r), r;
}
function kh(e) {
  var t = Qr(e), r = Wa(e);
  return [t, r, "n"];
}
function Rh(e, t, r) {
  return r == null && (r = B(8)), et(t, r), Ha(e.v, r), r;
}
function Ih(e) {
  var t = ur(e), r = Zn(e);
  return [t, r, "is"];
}
function Nh(e) {
  var t = ur(e), r = Ye(e);
  return [t, r, "str"];
}
function Ph(e, t, r) {
  return r == null && (r = B(12 + 4 * e.v.length)), qr(t, r), be(e.v, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Lh(e) {
  var t = Qr(e), r = Ye(e);
  return [t, r, "str"];
}
function Mh(e, t, r) {
  return r == null && (r = B(8 + 4 * e.v.length)), et(t, r), be(e.v, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Bh(e, t, r) {
  var n = e.l + t, a = ur(e);
  a.r = r["!row"];
  var i = e.read_shift(1), s = [a, i, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var f = En(e, n - e.l, r);
    s[3] = xt(f, null, a, r.supbooks, r);
  } else
    e.l = n;
  return s;
}
function bh(e, t, r) {
  var n = e.l + t, a = ur(e);
  a.r = r["!row"];
  var i = e.read_shift(1), s = [a, i, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var f = En(e, n - e.l, r);
    s[3] = xt(f, null, a, r.supbooks, r);
  } else
    e.l = n;
  return s;
}
function Uh(e, t, r) {
  var n = e.l + t, a = ur(e);
  a.r = r["!row"];
  var i = mt(e), s = [a, i, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var f = En(e, n - e.l, r);
    s[3] = xt(f, null, a, r.supbooks, r);
  } else
    e.l = n;
  return s;
}
function Wh(e, t, r) {
  var n = e.l + t, a = ur(e);
  a.r = r["!row"];
  var i = Ye(e), s = [a, i, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var f = En(e, n - e.l, r);
    s[3] = xt(f, null, a, r.supbooks, r);
  } else
    e.l = n;
  return s;
}
var Hh = rt, Vh = pt;
function Gh(e, t) {
  return t == null && (t = B(4)), t.write_shift(4, e), t;
}
function Xh(e, t) {
  var r = e.l + t, n = rt(e), a = qn(e), i = Ye(e), s = Ye(e), f = Ye(e);
  e.l = r;
  var o = { rfx: n, relId: a, loc: i, display: f };
  return s && (o.Tooltip = s), o;
}
function Kh(e, t) {
  var r = B(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  pt({ s: Be(e[0]), e: Be(e[0]) }, r), Qn("rId" + t, r);
  var n = e[1].Target.indexOf("#"), a = n == -1 ? "" : e[1].Target.slice(n + 1);
  return be(a || "", r), be(e[1].Tooltip || "", r), be("", r), r.slice(0, r.l);
}
function zh() {
}
function jh(e, t, r) {
  var n = e.l + t, a = Va(e), i = e.read_shift(1), s = [a];
  if (s[2] = i, r.cellFormula) {
    var f = Lc(e, n - e.l, r);
    s[1] = f;
  } else
    e.l = n;
  return s;
}
function Yh(e, t, r) {
  var n = e.l + t, a = rt(e), i = [a];
  if (r.cellFormula) {
    var s = Bc(e, n - e.l, r);
    i[1] = s, e.l = n;
  } else
    e.l = n;
  return i;
}
function $h(e, t, r) {
  r == null && (r = B(18));
  var n = wn(e, t);
  r.write_shift(-4, e), r.write_shift(-4, e), r.write_shift(4, (n.width || 10) * 256), r.write_shift(
    4,
    0
    /*ixfe*/
  );
  var a = 0;
  return t.hidden && (a |= 1), typeof n.width == "number" && (a |= 2), t.level && (a |= t.level << 8), r.write_shift(2, a), r;
}
var Fi = ["left", "right", "top", "bottom", "header", "footer"];
function Jh(e) {
  var t = {};
  return Fi.forEach(function(r) {
    t[r] = mt(e);
  }), t;
}
function Zh(e, t) {
  return t == null && (t = B(6 * 8)), Si(e), Fi.forEach(function(r) {
    $r(e[r], t);
  }), t;
}
function qh(e) {
  var t = e.read_shift(2);
  return e.l += 28, { RTL: t & 32 };
}
function Qh(e, t, r) {
  r == null && (r = B(30));
  var n = 924;
  return (((t || {}).Views || [])[0] || {}).RTL && (n |= 32), r.write_shift(2, n), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 100), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(4, 0), r;
}
function e1(e) {
  var t = B(24);
  return t.write_shift(4, 4), t.write_shift(4, 1), pt(e, t), t;
}
function r1(e, t) {
  return t == null && (t = B(16 * 4 + 2)), t.write_shift(2, e.password ? si(e.password) : 0), t.write_shift(4, 1), [
    ["objects", !1],
    // fObjects
    ["scenarios", !1],
    // fScenarios
    ["formatCells", !0],
    // fFormatCells
    ["formatColumns", !0],
    // fFormatColumns
    ["formatRows", !0],
    // fFormatRows
    ["insertColumns", !0],
    // fInsertColumns
    ["insertRows", !0],
    // fInsertRows
    ["insertHyperlinks", !0],
    // fInsertHyperlinks
    ["deleteColumns", !0],
    // fDeleteColumns
    ["deleteRows", !0],
    // fDeleteRows
    ["selectLockedCells", !1],
    // fSelLockedCells
    ["sort", !0],
    // fSort
    ["autoFilter", !0],
    // fAutoFilter
    ["pivotTables", !0],
    // fPivotTables
    ["selectUnlockedCells", !1]
    // fSelUnlockedCells
  ].forEach(function(r) {
    r[1] ? t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0) : t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1);
  }), t;
}
function t1() {
}
function n1() {
}
function a1(e, t, r, n, a, i, s) {
  if (t.v === void 0)
    return !1;
  var f = "";
  switch (t.t) {
    case "b":
      f = t.v ? "1" : "0";
      break;
    case "d":
      t = rr(t), t.z = t.z || De[14], t.v = er(qe(t.v)), t.t = "n";
      break;
    case "n":
    case "e":
      f = "" + t.v;
      break;
    default:
      f = t.v;
      break;
  }
  var o = { r, c: n };
  switch (o.s = Hr(a.cellXfs, t, a), t.l && i["!links"].push([ge(o), t.l]), t.c && i["!comments"].push([ge(o), t.c]), t.t) {
    case "s":
    case "str":
      return a.bookSST ? (f = i0(a.Strings, t.v, a.revStrings), o.t = "s", o.v = f, s ? W(e, 18, Sh(t, o)) : W(e, 7, Eh(t, o))) : (o.t = "str", s ? W(e, 17, Mh(t, o)) : W(e, 6, Ph(t, o))), !0;
    case "n":
      return t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3 ? s ? W(e, 13, Rh(t, o)) : W(e, 2, Dh(t, o)) : s ? W(e, 16, Ch(t, o)) : W(e, 5, Fh(t, o)), !0;
    case "b":
      return o.t = "b", s ? W(e, 15, vh(t, o)) : W(e, 4, xh(t, o)), !0;
    case "e":
      return o.t = "e", s ? W(e, 14, _h(t, o)) : W(e, 3, mh(t, o)), !0;
  }
  return s ? W(e, 12, hh(t, o)) : W(e, 1, oh(t, o)), !0;
}
function i1(e, t, r, n) {
  var a = we(t["!ref"] || "A1"), i, s = "", f = [];
  W(
    e,
    145
    /* BrtBeginSheetData */
  );
  var o = Array.isArray(t), l = a.e.r;
  t["!rows"] && (l = Math.max(a.e.r, t["!rows"].length - 1));
  for (var c = a.s.r; c <= l; ++c) {
    s = Xe(c), th(e, t, a, c);
    var v = !1;
    if (c <= a.e.r)
      for (var x = a.s.c; x <= a.e.c; ++x) {
        c === a.s.r && (f[x] = je(x)), i = f[x] + s;
        var d = o ? (t[c] || [])[x] : t[i];
        if (!d) {
          v = !1;
          continue;
        }
        v = a1(e, d, c, x, n, t, v);
      }
  }
  W(
    e,
    146
    /* BrtEndSheetData */
  );
}
function s1(e, t) {
  !t || !t["!merges"] || (W(e, 177, Gh(t["!merges"].length)), t["!merges"].forEach(function(r) {
    W(e, 176, Vh(r));
  }), W(
    e,
    178
    /* BrtEndMergeCells */
  ));
}
function f1(e, t) {
  !t || !t["!cols"] || (W(
    e,
    390
    /* BrtBeginColInfos */
  ), t["!cols"].forEach(function(r, n) {
    r && W(e, 60, $h(n, r));
  }), W(
    e,
    391
    /* BrtEndColInfos */
  ));
}
function l1(e, t) {
  !t || !t["!ref"] || (W(
    e,
    648
    /* BrtBeginCellIgnoreECs */
  ), W(e, 649, e1(we(t["!ref"]))), W(
    e,
    650
    /* BrtEndCellIgnoreECs */
  ));
}
function o1(e, t, r) {
  t["!links"].forEach(function(n) {
    if (n[1].Target) {
      var a = pe(r, -1, n[1].Target.replace(/#.*$/, ""), ue.HLINK);
      W(e, 494, Kh(n, a));
    }
  }), delete t["!links"];
}
function c1(e, t, r, n) {
  if (t["!comments"].length > 0) {
    var a = pe(n, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", ue.VML);
    W(e, 551, Qn("rId" + a)), t["!legacy"] = a;
  }
}
function h1(e, t, r, n) {
  if (t["!autofilter"]) {
    var a = t["!autofilter"], i = typeof a.ref == "string" ? a.ref : Ie(a.ref);
    r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
    var s = r.Workbook.Names, f = fr(i);
    f.s.r == f.e.r && (f.e.r = fr(t["!ref"]).e.r, i = Ie(f));
    for (var o = 0; o < s.length; ++o) {
      var l = s[o];
      if (l.Name == "_xlnm._FilterDatabase" && l.Sheet == n) {
        l.Ref = "'" + r.SheetNames[n] + "'!" + i;
        break;
      }
    }
    o == s.length && s.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: "'" + r.SheetNames[n] + "'!" + i }), W(e, 161, pt(we(i))), W(
      e,
      162
      /* BrtEndAFilter */
    );
  }
}
function u1(e, t, r) {
  W(
    e,
    133
    /* BrtBeginWsViews */
  ), W(e, 137, Qh(t, r)), W(
    e,
    138
    /* BrtEndWsView */
  ), W(
    e,
    134
    /* BrtEndWsViews */
  );
}
function x1(e, t) {
  t["!protect"] && W(e, 535, r1(t["!protect"]));
}
function d1(e, t, r, n) {
  var a = Qe(), i = r.SheetNames[e], s = r.Sheets[i] || {}, f = i;
  try {
    r && r.Workbook && (f = r.Workbook.Sheets[e].CodeName || f);
  } catch {
  }
  var o = we(s["!ref"] || "A1");
  if (o.e.c > 16383 || o.e.r > 1048575) {
    if (t.WTF)
      throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    o.e.c = Math.min(o.e.c, 16383), o.e.r = Math.min(o.e.c, 1048575);
  }
  return s["!links"] = [], s["!comments"] = [], W(
    a,
    129
    /* BrtBeginSheet */
  ), (r.vbaraw || s["!outline"]) && W(a, 147, fh(f, s["!outline"])), W(a, 148, ah(o)), u1(a, s, r.Workbook), f1(a, s), i1(a, s, e, t), x1(a, s), h1(a, s, r, e), s1(a, s), o1(a, s, n), s["!margins"] && W(a, 476, Zh(s["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && l1(a, s), c1(a, s, e, n), W(
    a,
    130
    /* BrtEndSheet */
  ), a.end();
}
function v1(e, t) {
  e.l += 10;
  var r = Ye(e);
  return { name: r };
}
var p1 = [
  ["allowRefreshQuery", !1, "bool"],
  ["autoCompressPictures", !0, "bool"],
  ["backupFile", !1, "bool"],
  ["checkCompatibility", !1, "bool"],
  ["CodeName", ""],
  ["date1904", !1, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", !1, "bool"],
  ["hidePivotFieldList", !1, "bool"],
  ["promptedSolutions", !1, "bool"],
  ["publishItems", !1, "bool"],
  ["refreshAllConnections", !1, "bool"],
  ["saveExternalLinkValues", !0, "bool"],
  ["showBorderUnselectedTables", !0, "bool"],
  ["showInkAnnotation", !0, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", !1, "bool"],
  ["updateLinks", "userSet"]
];
function m1(e) {
  return !e.Workbook || !e.Workbook.WBProps ? "false" : zs(e.Workbook.WBProps.date1904) ? "true" : "false";
}
var g1 = /* @__PURE__ */ "][*?/\\".split("");
function yi(e, t) {
  if (e.length > 31) {
    if (t)
      return !1;
    throw new Error("Sheet names cannot exceed 31 chars");
  }
  var r = !0;
  return g1.forEach(function(n) {
    if (e.indexOf(n) != -1) {
      if (!t)
        throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
      r = !1;
    }
  }), r;
}
function _1(e, t, r) {
  e.forEach(function(n, a) {
    yi(n);
    for (var i = 0; i < a; ++i)
      if (n == e[i])
        throw new Error("Duplicate Sheet Name: " + n);
    if (r) {
      var s = t && t[a] && t[a].CodeName || n;
      if (s.charCodeAt(0) == 95 && s.length > 22)
        throw new Error("Bad Code Name: Worksheet" + s);
    }
  });
}
function T1(e) {
  if (!e || !e.SheetNames || !e.Sheets)
    throw new Error("Invalid Workbook");
  if (!e.SheetNames.length)
    throw new Error("Workbook is empty");
  var t = e.Workbook && e.Workbook.Sheets || [];
  _1(e.SheetNames, t, !!e.vbaraw);
  for (var r = 0; r < e.SheetNames.length; ++r)
    Vc(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
}
function Ci(e) {
  var t = [Ne];
  t[t.length] = j("workbook", null, {
    xmlns: dt[0],
    //'xmlns:mx': XMLNS.mx,
    //'xmlns:s': XMLNS_main[0],
    "xmlns:r": Me.r
  });
  var r = e.Workbook && (e.Workbook.Names || []).length > 0, n = { codeName: "ThisWorkbook" };
  e.Workbook && e.Workbook.WBProps && (p1.forEach(function(f) {
    e.Workbook.WBProps[f[0]] != null && e.Workbook.WBProps[f[0]] != f[1] && (n[f[0]] = e.Workbook.WBProps[f[0]]);
  }), e.Workbook.WBProps.CodeName && (n.codeName = e.Workbook.WBProps.CodeName, delete n.CodeName)), t[t.length] = j("workbookPr", null, n);
  var a = e.Workbook && e.Workbook.Sheets || [], i = 0;
  if (a && a[0] && a[0].Hidden) {
    for (t[t.length] = "<bookViews>", i = 0; i != e.SheetNames.length && !(!a[i] || !a[i].Hidden); ++i)
      ;
    i == e.SheetNames.length && (i = 0), t[t.length] = '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>', t[t.length] = "</bookViews>";
  }
  for (t[t.length] = "<sheets>", i = 0; i != e.SheetNames.length; ++i) {
    var s = { name: me(e.SheetNames[i].slice(0, 31)) };
    if (s.sheetId = "" + (i + 1), s["r:id"] = "rId" + (i + 1), a[i])
      switch (a[i].Hidden) {
        case 1:
          s.state = "hidden";
          break;
        case 2:
          s.state = "veryHidden";
          break;
      }
    t[t.length] = j("sheet", null, s);
  }
  return t[t.length] = "</sheets>", r && (t[t.length] = "<definedNames>", e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach(function(f) {
    var o = { name: f.Name };
    f.Comment && (o.comment = f.Comment), f.Sheet != null && (o.localSheetId = "" + f.Sheet), f.Hidden && (o.hidden = "1"), f.Ref && (t[t.length] = j("definedName", me(f.Ref), o));
  }), t[t.length] = "</definedNames>"), t.length > 2 && (t[t.length] = "</workbook>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function E1(e, t) {
  var r = {};
  return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = Un(e), r.name = Ye(e), r;
}
function w1(e, t) {
  return t || (t = B(127)), t.write_shift(4, e.Hidden), t.write_shift(4, e.iTabID), Qn(e.strRelID, t), be(e.name.slice(0, 31), t), t.length > t.l ? t.slice(0, t.l) : t;
}
function S1(e, t) {
  var r = {}, n = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var a = t > 8 ? Ye(e) : "";
  return a.length > 0 && (r.CodeName = a), r.autoCompressPictures = !!(n & 65536), r.backupFile = !!(n & 64), r.checkCompatibility = !!(n & 4096), r.date1904 = !!(n & 1), r.filterPrivacy = !!(n & 8), r.hidePivotFieldList = !!(n & 1024), r.promptedSolutions = !!(n & 16), r.publishItems = !!(n & 2048), r.refreshAllConnections = !!(n & 262144), r.saveExternalLinkValues = !!(n & 128), r.showBorderUnselectedTables = !!(n & 4), r.showInkAnnotation = !!(n & 32), r.showObjects = ["all", "placeholders", "none"][n >> 13 & 3], r.showPivotChartFilter = !!(n & 32768), r.updateLinks = ["userSet", "never", "always"][n >> 8 & 3], r;
}
function A1(e, t) {
  t || (t = B(72));
  var r = 0;
  return e && e.filterPrivacy && (r |= 8), t.write_shift(4, r), t.write_shift(4, 0), Ua(e && e.CodeName || "ThisWorkbook", t), t.slice(0, t.l);
}
function F1(e, t, r) {
  var n = e.l + t;
  e.l += 4, e.l += 1;
  var a = e.read_shift(4), i = pf(e), s = Mc(e, 0, r), f = qn(e);
  e.l = n;
  var o = { Name: i, Ptg: s };
  return a < 268435455 && (o.Sheet = a), f && (o.Comment = f), o;
}
function y1(e, t) {
  W(
    e,
    143
    /* BrtBeginBundleShs */
  );
  for (var r = 0; r != t.SheetNames.length; ++r) {
    var n = t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden || 0, a = { Hidden: n, iTabID: r + 1, strRelID: "rId" + (r + 1), name: t.SheetNames[r] };
    W(e, 156, w1(a));
  }
  W(
    e,
    144
    /* BrtEndBundleShs */
  );
}
function C1(e, t) {
  t || (t = B(127));
  for (var r = 0; r != 4; ++r)
    t.write_shift(4, 0);
  return be("SheetJS", t), be(en.version, t), be(en.version, t), be("7262", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function O1(e, t) {
  t || (t = B(29)), t.write_shift(-4, 0), t.write_shift(-4, 460), t.write_shift(4, 28800), t.write_shift(4, 17600), t.write_shift(4, 500), t.write_shift(4, e), t.write_shift(4, e);
  var r = 120;
  return t.write_shift(1, r), t.length > t.l ? t.slice(0, t.l) : t;
}
function D1(e, t) {
  if (!(!t.Workbook || !t.Workbook.Sheets)) {
    for (var r = t.Workbook.Sheets, n = 0, a = -1, i = -1; n < r.length; ++n)
      !r[n] || !r[n].Hidden && a == -1 ? a = n : r[n].Hidden == 1 && i == -1 && (i = n);
    i > a || (W(
      e,
      135
      /* BrtBeginBookViews */
    ), W(e, 158, O1(a)), W(
      e,
      136
      /* BrtEndBookViews */
    ));
  }
}
function k1(e, t) {
  var r = Qe();
  return W(
    r,
    131
    /* BrtBeginBook */
  ), W(r, 128, C1()), W(r, 153, A1(e.Workbook && e.Workbook.WBProps || null)), D1(r, e), y1(r, e), W(
    r,
    132
    /* BrtEndBook */
  ), r.end();
}
function R1(e, t, r) {
  return (t.slice(-4) === ".bin" ? k1 : Ci)(e);
}
function I1(e, t, r, n, a) {
  return (t.slice(-4) === ".bin" ? d1 : Ai)(e, r, n, a);
}
function N1(e, t, r) {
  return (t.slice(-4) === ".bin" ? Jl : oi)(e, r);
}
function P1(e, t, r) {
  return (t.slice(-4) === ".bin" ? Sl : ii)(e, r);
}
function L1(e, t, r) {
  return (t.slice(-4) === ".bin" ? uo : di)(e);
}
function M1(e) {
  return (e.slice(-4) === ".bin" ? ao : ui)();
}
function B1(e, t) {
  var r = [];
  return e.Props && r.push(If(e.Props, t)), e.Custprops && r.push(Nf(e.Props, e.Custprops)), r.join("");
}
function b1() {
  return "";
}
function U1(e, t) {
  var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return t.cellXfs.forEach(function(n, a) {
    var i = [];
    i.push(j("NumberFormat", null, { "ss:Format": me(De[n.numFmtId]) }));
    var s = (
      /*::(*/
      { "ss:ID": "s" + (21 + a) }
    );
    r.push(j("Style", i.join(""), s));
  }), j("Styles", r.join(""));
}
function Oi(e) {
  return j("NamedRange", null, { "ss:Name": e.Name, "ss:RefersTo": "=" + n0(e.Ref, { r: 0, c: 0 }) });
}
function W1(e) {
  if (!((e || {}).Workbook || {}).Names)
    return "";
  for (var t = e.Workbook.Names, r = [], n = 0; n < t.length; ++n) {
    var a = t[n];
    a.Sheet == null && (a.Name.match(/^_xlfn\./) || r.push(Oi(a)));
  }
  return j("Names", r.join(""));
}
function H1(e, t, r, n) {
  if (!e || !((n || {}).Workbook || {}).Names)
    return "";
  for (var a = n.Workbook.Names, i = [], s = 0; s < a.length; ++s) {
    var f = a[s];
    f.Sheet == r && (f.Name.match(/^_xlfn\./) || i.push(Oi(f)));
  }
  return i.join("");
}
function V1(e, t, r, n) {
  if (!e)
    return "";
  var a = [];
  if (e["!margins"] && (a.push("<PageSetup>"), e["!margins"].header && a.push(j("Header", null, { "x:Margin": e["!margins"].header })), e["!margins"].footer && a.push(j("Footer", null, { "x:Margin": e["!margins"].footer })), a.push(j("PageMargins", null, {
    "x:Bottom": e["!margins"].bottom || "0.75",
    "x:Left": e["!margins"].left || "0.7",
    "x:Right": e["!margins"].right || "0.7",
    "x:Top": e["!margins"].top || "0.75"
  })), a.push("</PageSetup>")), n && n.Workbook && n.Workbook.Sheets && n.Workbook.Sheets[r])
    if (n.Workbook.Sheets[r].Hidden)
      a.push(j("Visible", n.Workbook.Sheets[r].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
    else {
      for (var i = 0; i < r && !(n.Workbook.Sheets[i] && !n.Workbook.Sheets[i].Hidden); ++i)
        ;
      i == r && a.push("<Selected/>");
    }
  return ((((n || {}).Workbook || {}).Views || [])[0] || {}).RTL && a.push("<DisplayRightToLeft/>"), e["!protect"] && (a.push(Ge("ProtectContents", "True")), e["!protect"].objects && a.push(Ge("ProtectObjects", "True")), e["!protect"].scenarios && a.push(Ge("ProtectScenarios", "True")), e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells ? a.push(Ge("EnableSelection", "NoSelection")) : e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells && a.push(Ge("EnableSelection", "UnlockedCells")), [
    ["formatCells", "AllowFormatCells"],
    ["formatColumns", "AllowSizeCols"],
    ["formatRows", "AllowSizeRows"],
    ["insertColumns", "AllowInsertCols"],
    ["insertRows", "AllowInsertRows"],
    ["insertHyperlinks", "AllowInsertHyperlinks"],
    ["deleteColumns", "AllowDeleteCols"],
    ["deleteRows", "AllowDeleteRows"],
    ["sort", "AllowSort"],
    ["autoFilter", "AllowFilter"],
    ["pivotTables", "AllowUsePivotTables"]
  ].forEach(function(s) {
    e["!protect"][s[0]] && a.push("<" + s[1] + "/>");
  })), a.length == 0 ? "" : j("WorksheetOptions", a.join(""), { xmlns: ir.x });
}
function G1(e) {
  return e.map(function(t) {
    var r = Ks(t.t || ""), n = j("ss:Data", r, { xmlns: "http://www.w3.org/TR/REC-html40" });
    return j("Comment", n, { "ss:Author": t.a });
  }).join("");
}
function X1(e, t, r, n, a, i, s) {
  if (!e || e.v == null && e.f == null)
    return "";
  var f = {};
  if (e.f && (f["ss:Formula"] = "=" + me(n0(e.f, s))), e.F && e.F.slice(0, t.length) == t) {
    var o = Be(e.F.slice(t.length + 1));
    f["ss:ArrayRange"] = "RC:R" + (o.r == s.r ? "" : "[" + (o.r - s.r) + "]") + "C" + (o.c == s.c ? "" : "[" + (o.c - s.c) + "]");
  }
  if (e.l && e.l.Target && (f["ss:HRef"] = me(e.l.Target), e.l.Tooltip && (f["x:HRefScreenTip"] = me(e.l.Tooltip))), r["!merges"])
    for (var l = r["!merges"], c = 0; c != l.length; ++c)
      l[c].s.c != s.c || l[c].s.r != s.r || (l[c].e.c > l[c].s.c && (f["ss:MergeAcross"] = l[c].e.c - l[c].s.c), l[c].e.r > l[c].s.r && (f["ss:MergeDown"] = l[c].e.r - l[c].s.r));
  var v = "", x = "";
  switch (e.t) {
    case "z":
      if (!n.sheetStubs)
        return "";
      break;
    case "n":
      v = "Number", x = String(e.v);
      break;
    case "b":
      v = "Boolean", x = e.v ? "1" : "0";
      break;
    case "e":
      v = "Error", x = Wt[e.v];
      break;
    case "d":
      v = "DateTime", x = new Date(e.v).toISOString(), e.z == null && (e.z = e.z || De[14]);
      break;
    case "s":
      v = "String", x = Xs(e.v || "");
      break;
  }
  var d = Hr(n.cellXfs, e, n);
  f["ss:StyleID"] = "s" + (21 + d), f["ss:Index"] = s.c + 1;
  var E = e.v != null ? x : "", u = e.t == "z" ? "" : '<Data ss:Type="' + v + '">' + E + "</Data>";
  return (e.c || []).length > 0 && (u += G1(e.c)), j("Cell", u, f);
}
function K1(e, t) {
  var r = '<Row ss:Index="' + (e + 1) + '"';
  return t && (t.hpt && !t.hpx && (t.hpx = li(t.hpt)), t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'), t.hidden && (r += ' ss:Hidden="1"')), r + ">";
}
function z1(e, t, r, n) {
  if (!e["!ref"])
    return "";
  var a = we(e["!ref"]), i = e["!merges"] || [], s = 0, f = [];
  e["!cols"] && e["!cols"].forEach(function(_, O) {
    r0(_);
    var k = !!_.width, y = wn(O, _), M = { "ss:Index": O + 1 };
    k && (M["ss:Width"] = cn(y.width)), _.hidden && (M["ss:Hidden"] = "1"), f.push(j("Column", null, M));
  });
  for (var o = Array.isArray(e), l = a.s.r; l <= a.e.r; ++l) {
    for (var c = [K1(l, (e["!rows"] || [])[l])], v = a.s.c; v <= a.e.c; ++v) {
      var x = !1;
      for (s = 0; s != i.length; ++s)
        if (!(i[s].s.c > v) && !(i[s].s.r > l) && !(i[s].e.c < v) && !(i[s].e.r < l)) {
          (i[s].s.c != v || i[s].s.r != l) && (x = !0);
          break;
        }
      if (!x) {
        var d = { r: l, c: v }, E = ge(d), u = o ? (e[l] || [])[v] : e[E];
        c.push(X1(u, E, e, t, r, n, d));
      }
    }
    c.push("</Row>"), c.length > 2 && f.push(c.join(""));
  }
  return f.join("");
}
function j1(e, t, r) {
  var n = [], a = r.SheetNames[e], i = r.Sheets[a], s = i ? H1(i, t, e, r) : "";
  return s.length > 0 && n.push("<Names>" + s + "</Names>"), s = i ? z1(i, t, e, r) : "", s.length > 0 && n.push("<Table>" + s + "</Table>"), n.push(V1(i, t, e, r)), n.join("");
}
function Y1(e, t) {
  t || (t = {}), e.SSF || (e.SSF = rr(De)), e.SSF && (mn(), pn(e.SSF), t.revssf = gn(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF, t.cellXfs = [], Hr(t.cellXfs, {}, { revssf: { General: 0 } }));
  var r = [];
  r.push(B1(e, t)), r.push(b1()), r.push(""), r.push("");
  for (var n = 0; n < e.SheetNames.length; ++n)
    r.push(j("Worksheet", j1(n, t, e), { "ss:Name": me(e.SheetNames[n]) }));
  return r[2] = U1(e, t), r[3] = W1(e), Ne + j("Workbook", r.join(""), {
    xmlns: ir.ss,
    "xmlns:o": ir.o,
    "xmlns:x": ir.x,
    "xmlns:ss": ir.ss,
    "xmlns:dt": ir.dt,
    "xmlns:html": ir.html
  });
}
var Nn = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function $1(e, t) {
  var r = [], n = [], a = [], i = 0, s, f = O0(H0, "n"), o = O0(V0, "n");
  if (e.Props)
    for (s = Ke(e.Props), i = 0; i < s.length; ++i)
      (Object.prototype.hasOwnProperty.call(f, s[i]) ? r : Object.prototype.hasOwnProperty.call(o, s[i]) ? n : a).push([s[i], e.Props[s[i]]]);
  if (e.Custprops)
    for (s = Ke(e.Custprops), i = 0; i < s.length; ++i)
      Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) || (Object.prototype.hasOwnProperty.call(f, s[i]) ? r : Object.prototype.hasOwnProperty.call(o, s[i]) ? n : a).push([s[i], e.Custprops[s[i]]]);
  var l = [];
  for (i = 0; i < a.length; ++i)
    qa.indexOf(a[i][0]) > -1 || $a.indexOf(a[i][0]) > -1 || a[i][1] != null && l.push(a[i]);
  n.length && Te.utils.cfb_add(t, "/SummaryInformation", j0(n, Nn.SI, o, V0)), (r.length || l.length) && Te.utils.cfb_add(t, "/DocumentSummaryInformation", j0(r, Nn.DSI, f, H0, l.length ? l : null, Nn.UDI));
}
function J1(e, t) {
  var r = t || {}, n = Te.utils.cfb_new({ root: "R" }), a = "/Workbook";
  switch (r.bookType || "xls") {
    case "xls":
      r.bookType = "biff8";
    case "xla":
      r.bookType || (r.bookType = "xla");
    case "biff8":
      a = "/Workbook", r.biff = 8;
      break;
    case "biff5":
      a = "/Book", r.biff = 5;
      break;
    default:
      throw new Error("invalid type " + r.bookType + " for XLS CFB");
  }
  return Te.utils.cfb_add(n, a, Di(e, r)), r.biff == 8 && (e.Props || e.Custprops) && $1(e, n), r.biff == 8 && e.vbaraw && xo(n, Te.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), n;
}
var Z1 = {
  /*::[*/
  0: {
    /* n:"BrtRowHdr", */
    f: eh
  },
  /*::[*/
  1: {
    /* n:"BrtCellBlank", */
    f: lh
  },
  /*::[*/
  2: {
    /* n:"BrtCellRk", */
    f: Oh
  },
  /*::[*/
  3: {
    /* n:"BrtCellError", */
    f: ph
  },
  /*::[*/
  4: {
    /* n:"BrtCellBool", */
    f: uh
  },
  /*::[*/
  5: {
    /* n:"BrtCellReal", */
    f: Ah
  },
  /*::[*/
  6: {
    /* n:"BrtCellSt", */
    f: Nh
  },
  /*::[*/
  7: {
    /* n:"BrtCellIsst", */
    f: Th
  },
  /*::[*/
  8: {
    /* n:"BrtFmlaString", */
    f: Wh
  },
  /*::[*/
  9: {
    /* n:"BrtFmlaNum", */
    f: Uh
  },
  /*::[*/
  10: {
    /* n:"BrtFmlaBool", */
    f: Bh
  },
  /*::[*/
  11: {
    /* n:"BrtFmlaError", */
    f: bh
  },
  /*::[*/
  12: {
    /* n:"BrtShortBlank", */
    f: ch
  },
  /*::[*/
  13: {
    /* n:"BrtShortRk", */
    f: kh
  },
  /*::[*/
  14: {
    /* n:"BrtShortError", */
    f: gh
  },
  /*::[*/
  15: {
    /* n:"BrtShortBool", */
    f: dh
  },
  /*::[*/
  16: {
    /* n:"BrtShortReal", */
    f: yh
  },
  /*::[*/
  17: {
    /* n:"BrtShortSt", */
    f: Lh
  },
  /*::[*/
  18: {
    /* n:"BrtShortIsst", */
    f: wh
  },
  /*::[*/
  19: {
    /* n:"BrtSSTItem", */
    f: Zn
  },
  /*::[*/
  20: {
    /* n:"BrtPCDIMissing" */
  },
  /*::[*/
  21: {
    /* n:"BrtPCDINumber" */
  },
  /*::[*/
  22: {
    /* n:"BrtPCDIBoolean" */
  },
  /*::[*/
  23: {
    /* n:"BrtPCDIError" */
  },
  /*::[*/
  24: {
    /* n:"BrtPCDIString" */
  },
  /*::[*/
  25: {
    /* n:"BrtPCDIDatetime" */
  },
  /*::[*/
  26: {
    /* n:"BrtPCDIIndex" */
  },
  /*::[*/
  27: {
    /* n:"BrtPCDIAMissing" */
  },
  /*::[*/
  28: {
    /* n:"BrtPCDIANumber" */
  },
  /*::[*/
  29: {
    /* n:"BrtPCDIABoolean" */
  },
  /*::[*/
  30: {
    /* n:"BrtPCDIAError" */
  },
  /*::[*/
  31: {
    /* n:"BrtPCDIAString" */
  },
  /*::[*/
  32: {
    /* n:"BrtPCDIADatetime" */
  },
  /*::[*/
  33: {
    /* n:"BrtPCRRecord" */
  },
  /*::[*/
  34: {
    /* n:"BrtPCRRecordDt" */
  },
  /*::[*/
  35: {
    /* n:"BrtFRTBegin", */
    T: 1
  },
  /*::[*/
  36: {
    /* n:"BrtFRTEnd", */
    T: -1
  },
  /*::[*/
  37: {
    /* n:"BrtACBegin", */
    T: 1
  },
  /*::[*/
  38: {
    /* n:"BrtACEnd", */
    T: -1
  },
  /*::[*/
  39: {
    /* n:"BrtName", */
    f: F1
  },
  /*::[*/
  40: {
    /* n:"BrtIndexRowBlock" */
  },
  /*::[*/
  42: {
    /* n:"BrtIndexBlock" */
  },
  /*::[*/
  43: {
    /* n:"BrtFont", */
    f: Il
  },
  /*::[*/
  44: {
    /* n:"BrtFmt", */
    f: kl
  },
  /*::[*/
  45: {
    /* n:"BrtFill", */
    f: Ll
  },
  /*::[*/
  46: {
    /* n:"BrtBorder", */
    f: Bl
  },
  /*::[*/
  47: {
    /* n:"BrtXF", */
    f: Ml
  },
  /*::[*/
  48: {
    /* n:"BrtStyle" */
  },
  /*::[*/
  49: {
    /* n:"BrtCellMeta", */
    f: of
  },
  /*::[*/
  50: {
    /* n:"BrtValueMeta" */
  },
  /*::[*/
  51: {
    /* n:"BrtMdb" */
    f: Ql
  },
  /*::[*/
  52: {
    /* n:"BrtBeginFmd", */
    T: 1
  },
  /*::[*/
  53: {
    /* n:"BrtEndFmd", */
    T: -1
  },
  /*::[*/
  54: {
    /* n:"BrtBeginMdx", */
    T: 1
  },
  /*::[*/
  55: {
    /* n:"BrtEndMdx", */
    T: -1
  },
  /*::[*/
  56: {
    /* n:"BrtBeginMdxTuple", */
    T: 1
  },
  /*::[*/
  57: {
    /* n:"BrtEndMdxTuple", */
    T: -1
  },
  /*::[*/
  58: {
    /* n:"BrtMdxMbrIstr" */
  },
  /*::[*/
  59: {
    /* n:"BrtStr" */
  },
  /*::[*/
  60: {
    /* n:"BrtColInfo", */
    f: cl
  },
  /*::[*/
  62: {
    /* n:"BrtCellRString", */
    f: Ih
  },
  /*::[*/
  63: {
    /* n:"BrtCalcChainItem$", */
    f: io
  },
  /*::[*/
  64: {
    /* n:"BrtDVal", */
    f: t1
  },
  /*::[*/
  65: {
    /* n:"BrtSxvcellNum" */
  },
  /*::[*/
  66: {
    /* n:"BrtSxvcellStr" */
  },
  /*::[*/
  67: {
    /* n:"BrtSxvcellBool" */
  },
  /*::[*/
  68: {
    /* n:"BrtSxvcellErr" */
  },
  /*::[*/
  69: {
    /* n:"BrtSxvcellDate" */
  },
  /*::[*/
  70: {
    /* n:"BrtSxvcellNil" */
  },
  /*::[*/
  128: {
    /* n:"BrtFileVersion" */
  },
  /*::[*/
  129: {
    /* n:"BrtBeginSheet", */
    T: 1
  },
  /*::[*/
  130: {
    /* n:"BrtEndSheet", */
    T: -1
  },
  /*::[*/
  131: {
    /* n:"BrtBeginBook", */
    T: 1,
    f: wr,
    p: 0
  },
  /*::[*/
  132: {
    /* n:"BrtEndBook", */
    T: -1
  },
  /*::[*/
  133: {
    /* n:"BrtBeginWsViews", */
    T: 1
  },
  /*::[*/
  134: {
    /* n:"BrtEndWsViews", */
    T: -1
  },
  /*::[*/
  135: {
    /* n:"BrtBeginBookViews", */
    T: 1
  },
  /*::[*/
  136: {
    /* n:"BrtEndBookViews", */
    T: -1
  },
  /*::[*/
  137: {
    /* n:"BrtBeginWsView", */
    T: 1,
    f: qh
  },
  /*::[*/
  138: {
    /* n:"BrtEndWsView", */
    T: -1
  },
  /*::[*/
  139: {
    /* n:"BrtBeginCsViews", */
    T: 1
  },
  /*::[*/
  140: {
    /* n:"BrtEndCsViews", */
    T: -1
  },
  /*::[*/
  141: {
    /* n:"BrtBeginCsView", */
    T: 1
  },
  /*::[*/
  142: {
    /* n:"BrtEndCsView", */
    T: -1
  },
  /*::[*/
  143: {
    /* n:"BrtBeginBundleShs", */
    T: 1
  },
  /*::[*/
  144: {
    /* n:"BrtEndBundleShs", */
    T: -1
  },
  /*::[*/
  145: {
    /* n:"BrtBeginSheetData", */
    T: 1
  },
  /*::[*/
  146: {
    /* n:"BrtEndSheetData", */
    T: -1
  },
  /*::[*/
  147: {
    /* n:"BrtWsProp", */
    f: sh
  },
  /*::[*/
  148: {
    /* n:"BrtWsDim", */
    f: nh,
    p: 16
  },
  /*::[*/
  151: {
    /* n:"BrtPane", */
    f: zh
  },
  /*::[*/
  152: {
    /* n:"BrtSel" */
  },
  /*::[*/
  153: {
    /* n:"BrtWbProp", */
    f: S1
  },
  /*::[*/
  154: {
    /* n:"BrtWbFactoid" */
  },
  /*::[*/
  155: {
    /* n:"BrtFileRecover" */
  },
  /*::[*/
  156: {
    /* n:"BrtBundleSh", */
    f: E1
  },
  /*::[*/
  157: {
    /* n:"BrtCalcProp" */
  },
  /*::[*/
  158: {
    /* n:"BrtBookView" */
  },
  /*::[*/
  159: {
    /* n:"BrtBeginSst", */
    T: 1,
    f: Tl
  },
  /*::[*/
  160: {
    /* n:"BrtEndSst", */
    T: -1
  },
  /*::[*/
  161: {
    /* n:"BrtBeginAFilter", */
    T: 1,
    f: rt
  },
  /*::[*/
  162: {
    /* n:"BrtEndAFilter", */
    T: -1
  },
  /*::[*/
  163: {
    /* n:"BrtBeginFilterColumn", */
    T: 1
  },
  /*::[*/
  164: {
    /* n:"BrtEndFilterColumn", */
    T: -1
  },
  /*::[*/
  165: {
    /* n:"BrtBeginFilters", */
    T: 1
  },
  /*::[*/
  166: {
    /* n:"BrtEndFilters", */
    T: -1
  },
  /*::[*/
  167: {
    /* n:"BrtFilter" */
  },
  /*::[*/
  168: {
    /* n:"BrtColorFilter" */
  },
  /*::[*/
  169: {
    /* n:"BrtIconFilter" */
  },
  /*::[*/
  170: {
    /* n:"BrtTop10Filter" */
  },
  /*::[*/
  171: {
    /* n:"BrtDynamicFilter" */
  },
  /*::[*/
  172: {
    /* n:"BrtBeginCustomFilters", */
    T: 1
  },
  /*::[*/
  173: {
    /* n:"BrtEndCustomFilters", */
    T: -1
  },
  /*::[*/
  174: {
    /* n:"BrtCustomFilter" */
  },
  /*::[*/
  175: {
    /* n:"BrtAFilterDateGroupItem" */
  },
  /*::[*/
  176: {
    /* n:"BrtMergeCell", */
    f: Hh
  },
  /*::[*/
  177: {
    /* n:"BrtBeginMergeCells", */
    T: 1
  },
  /*::[*/
  178: {
    /* n:"BrtEndMergeCells", */
    T: -1
  },
  /*::[*/
  179: {
    /* n:"BrtBeginPivotCacheDef", */
    T: 1
  },
  /*::[*/
  180: {
    /* n:"BrtEndPivotCacheDef", */
    T: -1
  },
  /*::[*/
  181: {
    /* n:"BrtBeginPCDFields", */
    T: 1
  },
  /*::[*/
  182: {
    /* n:"BrtEndPCDFields", */
    T: -1
  },
  /*::[*/
  183: {
    /* n:"BrtBeginPCDField", */
    T: 1
  },
  /*::[*/
  184: {
    /* n:"BrtEndPCDField", */
    T: -1
  },
  /*::[*/
  185: {
    /* n:"BrtBeginPCDSource", */
    T: 1
  },
  /*::[*/
  186: {
    /* n:"BrtEndPCDSource", */
    T: -1
  },
  /*::[*/
  187: {
    /* n:"BrtBeginPCDSRange", */
    T: 1
  },
  /*::[*/
  188: {
    /* n:"BrtEndPCDSRange", */
    T: -1
  },
  /*::[*/
  189: {
    /* n:"BrtBeginPCDFAtbl", */
    T: 1
  },
  /*::[*/
  190: {
    /* n:"BrtEndPCDFAtbl", */
    T: -1
  },
  /*::[*/
  191: {
    /* n:"BrtBeginPCDIRun", */
    T: 1
  },
  /*::[*/
  192: {
    /* n:"BrtEndPCDIRun", */
    T: -1
  },
  /*::[*/
  193: {
    /* n:"BrtBeginPivotCacheRecords", */
    T: 1
  },
  /*::[*/
  194: {
    /* n:"BrtEndPivotCacheRecords", */
    T: -1
  },
  /*::[*/
  195: {
    /* n:"BrtBeginPCDHierarchies", */
    T: 1
  },
  /*::[*/
  196: {
    /* n:"BrtEndPCDHierarchies", */
    T: -1
  },
  /*::[*/
  197: {
    /* n:"BrtBeginPCDHierarchy", */
    T: 1
  },
  /*::[*/
  198: {
    /* n:"BrtEndPCDHierarchy", */
    T: -1
  },
  /*::[*/
  199: {
    /* n:"BrtBeginPCDHFieldsUsage", */
    T: 1
  },
  /*::[*/
  200: {
    /* n:"BrtEndPCDHFieldsUsage", */
    T: -1
  },
  /*::[*/
  201: {
    /* n:"BrtBeginExtConnection", */
    T: 1
  },
  /*::[*/
  202: {
    /* n:"BrtEndExtConnection", */
    T: -1
  },
  /*::[*/
  203: {
    /* n:"BrtBeginECDbProps", */
    T: 1
  },
  /*::[*/
  204: {
    /* n:"BrtEndECDbProps", */
    T: -1
  },
  /*::[*/
  205: {
    /* n:"BrtBeginECOlapProps", */
    T: 1
  },
  /*::[*/
  206: {
    /* n:"BrtEndECOlapProps", */
    T: -1
  },
  /*::[*/
  207: {
    /* n:"BrtBeginPCDSConsol", */
    T: 1
  },
  /*::[*/
  208: {
    /* n:"BrtEndPCDSConsol", */
    T: -1
  },
  /*::[*/
  209: {
    /* n:"BrtBeginPCDSCPages", */
    T: 1
  },
  /*::[*/
  210: {
    /* n:"BrtEndPCDSCPages", */
    T: -1
  },
  /*::[*/
  211: {
    /* n:"BrtBeginPCDSCPage", */
    T: 1
  },
  /*::[*/
  212: {
    /* n:"BrtEndPCDSCPage", */
    T: -1
  },
  /*::[*/
  213: {
    /* n:"BrtBeginPCDSCPItem", */
    T: 1
  },
  /*::[*/
  214: {
    /* n:"BrtEndPCDSCPItem", */
    T: -1
  },
  /*::[*/
  215: {
    /* n:"BrtBeginPCDSCSets", */
    T: 1
  },
  /*::[*/
  216: {
    /* n:"BrtEndPCDSCSets", */
    T: -1
  },
  /*::[*/
  217: {
    /* n:"BrtBeginPCDSCSet", */
    T: 1
  },
  /*::[*/
  218: {
    /* n:"BrtEndPCDSCSet", */
    T: -1
  },
  /*::[*/
  219: {
    /* n:"BrtBeginPCDFGroup", */
    T: 1
  },
  /*::[*/
  220: {
    /* n:"BrtEndPCDFGroup", */
    T: -1
  },
  /*::[*/
  221: {
    /* n:"BrtBeginPCDFGItems", */
    T: 1
  },
  /*::[*/
  222: {
    /* n:"BrtEndPCDFGItems", */
    T: -1
  },
  /*::[*/
  223: {
    /* n:"BrtBeginPCDFGRange", */
    T: 1
  },
  /*::[*/
  224: {
    /* n:"BrtEndPCDFGRange", */
    T: -1
  },
  /*::[*/
  225: {
    /* n:"BrtBeginPCDFGDiscrete", */
    T: 1
  },
  /*::[*/
  226: {
    /* n:"BrtEndPCDFGDiscrete", */
    T: -1
  },
  /*::[*/
  227: {
    /* n:"BrtBeginPCDSDTupleCache", */
    T: 1
  },
  /*::[*/
  228: {
    /* n:"BrtEndPCDSDTupleCache", */
    T: -1
  },
  /*::[*/
  229: {
    /* n:"BrtBeginPCDSDTCEntries", */
    T: 1
  },
  /*::[*/
  230: {
    /* n:"BrtEndPCDSDTCEntries", */
    T: -1
  },
  /*::[*/
  231: {
    /* n:"BrtBeginPCDSDTCEMembers", */
    T: 1
  },
  /*::[*/
  232: {
    /* n:"BrtEndPCDSDTCEMembers", */
    T: -1
  },
  /*::[*/
  233: {
    /* n:"BrtBeginPCDSDTCEMember", */
    T: 1
  },
  /*::[*/
  234: {
    /* n:"BrtEndPCDSDTCEMember", */
    T: -1
  },
  /*::[*/
  235: {
    /* n:"BrtBeginPCDSDTCQueries", */
    T: 1
  },
  /*::[*/
  236: {
    /* n:"BrtEndPCDSDTCQueries", */
    T: -1
  },
  /*::[*/
  237: {
    /* n:"BrtBeginPCDSDTCQuery", */
    T: 1
  },
  /*::[*/
  238: {
    /* n:"BrtEndPCDSDTCQuery", */
    T: -1
  },
  /*::[*/
  239: {
    /* n:"BrtBeginPCDSDTCSets", */
    T: 1
  },
  /*::[*/
  240: {
    /* n:"BrtEndPCDSDTCSets", */
    T: -1
  },
  /*::[*/
  241: {
    /* n:"BrtBeginPCDSDTCSet", */
    T: 1
  },
  /*::[*/
  242: {
    /* n:"BrtEndPCDSDTCSet", */
    T: -1
  },
  /*::[*/
  243: {
    /* n:"BrtBeginPCDCalcItems", */
    T: 1
  },
  /*::[*/
  244: {
    /* n:"BrtEndPCDCalcItems", */
    T: -1
  },
  /*::[*/
  245: {
    /* n:"BrtBeginPCDCalcItem", */
    T: 1
  },
  /*::[*/
  246: {
    /* n:"BrtEndPCDCalcItem", */
    T: -1
  },
  /*::[*/
  247: {
    /* n:"BrtBeginPRule", */
    T: 1
  },
  /*::[*/
  248: {
    /* n:"BrtEndPRule", */
    T: -1
  },
  /*::[*/
  249: {
    /* n:"BrtBeginPRFilters", */
    T: 1
  },
  /*::[*/
  250: {
    /* n:"BrtEndPRFilters", */
    T: -1
  },
  /*::[*/
  251: {
    /* n:"BrtBeginPRFilter", */
    T: 1
  },
  /*::[*/
  252: {
    /* n:"BrtEndPRFilter", */
    T: -1
  },
  /*::[*/
  253: {
    /* n:"BrtBeginPNames", */
    T: 1
  },
  /*::[*/
  254: {
    /* n:"BrtEndPNames", */
    T: -1
  },
  /*::[*/
  255: {
    /* n:"BrtBeginPName", */
    T: 1
  },
  /*::[*/
  256: {
    /* n:"BrtEndPName", */
    T: -1
  },
  /*::[*/
  257: {
    /* n:"BrtBeginPNPairs", */
    T: 1
  },
  /*::[*/
  258: {
    /* n:"BrtEndPNPairs", */
    T: -1
  },
  /*::[*/
  259: {
    /* n:"BrtBeginPNPair", */
    T: 1
  },
  /*::[*/
  260: {
    /* n:"BrtEndPNPair", */
    T: -1
  },
  /*::[*/
  261: {
    /* n:"BrtBeginECWebProps", */
    T: 1
  },
  /*::[*/
  262: {
    /* n:"BrtEndECWebProps", */
    T: -1
  },
  /*::[*/
  263: {
    /* n:"BrtBeginEcWpTables", */
    T: 1
  },
  /*::[*/
  264: {
    /* n:"BrtEndECWPTables", */
    T: -1
  },
  /*::[*/
  265: {
    /* n:"BrtBeginECParams", */
    T: 1
  },
  /*::[*/
  266: {
    /* n:"BrtEndECParams", */
    T: -1
  },
  /*::[*/
  267: {
    /* n:"BrtBeginECParam", */
    T: 1
  },
  /*::[*/
  268: {
    /* n:"BrtEndECParam", */
    T: -1
  },
  /*::[*/
  269: {
    /* n:"BrtBeginPCDKPIs", */
    T: 1
  },
  /*::[*/
  270: {
    /* n:"BrtEndPCDKPIs", */
    T: -1
  },
  /*::[*/
  271: {
    /* n:"BrtBeginPCDKPI", */
    T: 1
  },
  /*::[*/
  272: {
    /* n:"BrtEndPCDKPI", */
    T: -1
  },
  /*::[*/
  273: {
    /* n:"BrtBeginDims", */
    T: 1
  },
  /*::[*/
  274: {
    /* n:"BrtEndDims", */
    T: -1
  },
  /*::[*/
  275: {
    /* n:"BrtBeginDim", */
    T: 1
  },
  /*::[*/
  276: {
    /* n:"BrtEndDim", */
    T: -1
  },
  /*::[*/
  277: {
    /* n:"BrtIndexPartEnd" */
  },
  /*::[*/
  278: {
    /* n:"BrtBeginStyleSheet", */
    T: 1
  },
  /*::[*/
  279: {
    /* n:"BrtEndStyleSheet", */
    T: -1
  },
  /*::[*/
  280: {
    /* n:"BrtBeginSXView", */
    T: 1
  },
  /*::[*/
  281: {
    /* n:"BrtEndSXVI", */
    T: -1
  },
  /*::[*/
  282: {
    /* n:"BrtBeginSXVI", */
    T: 1
  },
  /*::[*/
  283: {
    /* n:"BrtBeginSXVIs", */
    T: 1
  },
  /*::[*/
  284: {
    /* n:"BrtEndSXVIs", */
    T: -1
  },
  /*::[*/
  285: {
    /* n:"BrtBeginSXVD", */
    T: 1
  },
  /*::[*/
  286: {
    /* n:"BrtEndSXVD", */
    T: -1
  },
  /*::[*/
  287: {
    /* n:"BrtBeginSXVDs", */
    T: 1
  },
  /*::[*/
  288: {
    /* n:"BrtEndSXVDs", */
    T: -1
  },
  /*::[*/
  289: {
    /* n:"BrtBeginSXPI", */
    T: 1
  },
  /*::[*/
  290: {
    /* n:"BrtEndSXPI", */
    T: -1
  },
  /*::[*/
  291: {
    /* n:"BrtBeginSXPIs", */
    T: 1
  },
  /*::[*/
  292: {
    /* n:"BrtEndSXPIs", */
    T: -1
  },
  /*::[*/
  293: {
    /* n:"BrtBeginSXDI", */
    T: 1
  },
  /*::[*/
  294: {
    /* n:"BrtEndSXDI", */
    T: -1
  },
  /*::[*/
  295: {
    /* n:"BrtBeginSXDIs", */
    T: 1
  },
  /*::[*/
  296: {
    /* n:"BrtEndSXDIs", */
    T: -1
  },
  /*::[*/
  297: {
    /* n:"BrtBeginSXLI", */
    T: 1
  },
  /*::[*/
  298: {
    /* n:"BrtEndSXLI", */
    T: -1
  },
  /*::[*/
  299: {
    /* n:"BrtBeginSXLIRws", */
    T: 1
  },
  /*::[*/
  300: {
    /* n:"BrtEndSXLIRws", */
    T: -1
  },
  /*::[*/
  301: {
    /* n:"BrtBeginSXLICols", */
    T: 1
  },
  /*::[*/
  302: {
    /* n:"BrtEndSXLICols", */
    T: -1
  },
  /*::[*/
  303: {
    /* n:"BrtBeginSXFormat", */
    T: 1
  },
  /*::[*/
  304: {
    /* n:"BrtEndSXFormat", */
    T: -1
  },
  /*::[*/
  305: {
    /* n:"BrtBeginSXFormats", */
    T: 1
  },
  /*::[*/
  306: {
    /* n:"BrtEndSxFormats", */
    T: -1
  },
  /*::[*/
  307: {
    /* n:"BrtBeginSxSelect", */
    T: 1
  },
  /*::[*/
  308: {
    /* n:"BrtEndSxSelect", */
    T: -1
  },
  /*::[*/
  309: {
    /* n:"BrtBeginISXVDRws", */
    T: 1
  },
  /*::[*/
  310: {
    /* n:"BrtEndISXVDRws", */
    T: -1
  },
  /*::[*/
  311: {
    /* n:"BrtBeginISXVDCols", */
    T: 1
  },
  /*::[*/
  312: {
    /* n:"BrtEndISXVDCols", */
    T: -1
  },
  /*::[*/
  313: {
    /* n:"BrtEndSXLocation", */
    T: -1
  },
  /*::[*/
  314: {
    /* n:"BrtBeginSXLocation", */
    T: 1
  },
  /*::[*/
  315: {
    /* n:"BrtEndSXView", */
    T: -1
  },
  /*::[*/
  316: {
    /* n:"BrtBeginSXTHs", */
    T: 1
  },
  /*::[*/
  317: {
    /* n:"BrtEndSXTHs", */
    T: -1
  },
  /*::[*/
  318: {
    /* n:"BrtBeginSXTH", */
    T: 1
  },
  /*::[*/
  319: {
    /* n:"BrtEndSXTH", */
    T: -1
  },
  /*::[*/
  320: {
    /* n:"BrtBeginISXTHRws", */
    T: 1
  },
  /*::[*/
  321: {
    /* n:"BrtEndISXTHRws", */
    T: -1
  },
  /*::[*/
  322: {
    /* n:"BrtBeginISXTHCols", */
    T: 1
  },
  /*::[*/
  323: {
    /* n:"BrtEndISXTHCols", */
    T: -1
  },
  /*::[*/
  324: {
    /* n:"BrtBeginSXTDMPS", */
    T: 1
  },
  /*::[*/
  325: {
    /* n:"BrtEndSXTDMPs", */
    T: -1
  },
  /*::[*/
  326: {
    /* n:"BrtBeginSXTDMP", */
    T: 1
  },
  /*::[*/
  327: {
    /* n:"BrtEndSXTDMP", */
    T: -1
  },
  /*::[*/
  328: {
    /* n:"BrtBeginSXTHItems", */
    T: 1
  },
  /*::[*/
  329: {
    /* n:"BrtEndSXTHItems", */
    T: -1
  },
  /*::[*/
  330: {
    /* n:"BrtBeginSXTHItem", */
    T: 1
  },
  /*::[*/
  331: {
    /* n:"BrtEndSXTHItem", */
    T: -1
  },
  /*::[*/
  332: {
    /* n:"BrtBeginMetadata", */
    T: 1
  },
  /*::[*/
  333: {
    /* n:"BrtEndMetadata", */
    T: -1
  },
  /*::[*/
  334: {
    /* n:"BrtBeginEsmdtinfo", */
    T: 1
  },
  /*::[*/
  335: {
    /* n:"BrtMdtinfo", */
    f: Zl
  },
  /*::[*/
  336: {
    /* n:"BrtEndEsmdtinfo", */
    T: -1
  },
  /*::[*/
  337: {
    /* n:"BrtBeginEsmdb", */
    f: to,
    T: 1
  },
  /*::[*/
  338: {
    /* n:"BrtEndEsmdb", */
    T: -1
  },
  /*::[*/
  339: {
    /* n:"BrtBeginEsfmd", */
    T: 1
  },
  /*::[*/
  340: {
    /* n:"BrtEndEsfmd", */
    T: -1
  },
  /*::[*/
  341: {
    /* n:"BrtBeginSingleCells", */
    T: 1
  },
  /*::[*/
  342: {
    /* n:"BrtEndSingleCells", */
    T: -1
  },
  /*::[*/
  343: {
    /* n:"BrtBeginList", */
    T: 1
  },
  /*::[*/
  344: {
    /* n:"BrtEndList", */
    T: -1
  },
  /*::[*/
  345: {
    /* n:"BrtBeginListCols", */
    T: 1
  },
  /*::[*/
  346: {
    /* n:"BrtEndListCols", */
    T: -1
  },
  /*::[*/
  347: {
    /* n:"BrtBeginListCol", */
    T: 1
  },
  /*::[*/
  348: {
    /* n:"BrtEndListCol", */
    T: -1
  },
  /*::[*/
  349: {
    /* n:"BrtBeginListXmlCPr", */
    T: 1
  },
  /*::[*/
  350: {
    /* n:"BrtEndListXmlCPr", */
    T: -1
  },
  /*::[*/
  351: {
    /* n:"BrtListCCFmla" */
  },
  /*::[*/
  352: {
    /* n:"BrtListTrFmla" */
  },
  /*::[*/
  353: {
    /* n:"BrtBeginExternals", */
    T: 1
  },
  /*::[*/
  354: {
    /* n:"BrtEndExternals", */
    T: -1
  },
  /*::[*/
  355: {
    /* n:"BrtSupBookSrc", */
    f: Un
  },
  /*::[*/
  357: {
    /* n:"BrtSupSelf" */
  },
  /*::[*/
  358: {
    /* n:"BrtSupSame" */
  },
  /*::[*/
  359: {
    /* n:"BrtSupTabs" */
  },
  /*::[*/
  360: {
    /* n:"BrtBeginSupBook", */
    T: 1
  },
  /*::[*/
  361: {
    /* n:"BrtPlaceholderName" */
  },
  /*::[*/
  362: {
    /* n:"BrtExternSheet", */
    f: al
  },
  /*::[*/
  363: {
    /* n:"BrtExternTableStart" */
  },
  /*::[*/
  364: {
    /* n:"BrtExternTableEnd" */
  },
  /*::[*/
  366: {
    /* n:"BrtExternRowHdr" */
  },
  /*::[*/
  367: {
    /* n:"BrtExternCellBlank" */
  },
  /*::[*/
  368: {
    /* n:"BrtExternCellReal" */
  },
  /*::[*/
  369: {
    /* n:"BrtExternCellBool" */
  },
  /*::[*/
  370: {
    /* n:"BrtExternCellError" */
  },
  /*::[*/
  371: {
    /* n:"BrtExternCellString" */
  },
  /*::[*/
  372: {
    /* n:"BrtBeginEsmdx", */
    T: 1
  },
  /*::[*/
  373: {
    /* n:"BrtEndEsmdx", */
    T: -1
  },
  /*::[*/
  374: {
    /* n:"BrtBeginMdxSet", */
    T: 1
  },
  /*::[*/
  375: {
    /* n:"BrtEndMdxSet", */
    T: -1
  },
  /*::[*/
  376: {
    /* n:"BrtBeginMdxMbrProp", */
    T: 1
  },
  /*::[*/
  377: {
    /* n:"BrtEndMdxMbrProp", */
    T: -1
  },
  /*::[*/
  378: {
    /* n:"BrtBeginMdxKPI", */
    T: 1
  },
  /*::[*/
  379: {
    /* n:"BrtEndMdxKPI", */
    T: -1
  },
  /*::[*/
  380: {
    /* n:"BrtBeginEsstr", */
    T: 1
  },
  /*::[*/
  381: {
    /* n:"BrtEndEsstr", */
    T: -1
  },
  /*::[*/
  382: {
    /* n:"BrtBeginPRFItem", */
    T: 1
  },
  /*::[*/
  383: {
    /* n:"BrtEndPRFItem", */
    T: -1
  },
  /*::[*/
  384: {
    /* n:"BrtBeginPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  385: {
    /* n:"BrtEndPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  386: {
    /* n:"BrtBeginPivotCacheID", */
    T: 1
  },
  /*::[*/
  387: {
    /* n:"BrtEndPivotCacheID", */
    T: -1
  },
  /*::[*/
  388: {
    /* n:"BrtBeginISXVIs", */
    T: 1
  },
  /*::[*/
  389: {
    /* n:"BrtEndISXVIs", */
    T: -1
  },
  /*::[*/
  390: {
    /* n:"BrtBeginColInfos", */
    T: 1
  },
  /*::[*/
  391: {
    /* n:"BrtEndColInfos", */
    T: -1
  },
  /*::[*/
  392: {
    /* n:"BrtBeginRwBrk", */
    T: 1
  },
  /*::[*/
  393: {
    /* n:"BrtEndRwBrk", */
    T: -1
  },
  /*::[*/
  394: {
    /* n:"BrtBeginColBrk", */
    T: 1
  },
  /*::[*/
  395: {
    /* n:"BrtEndColBrk", */
    T: -1
  },
  /*::[*/
  396: {
    /* n:"BrtBrk" */
  },
  /*::[*/
  397: {
    /* n:"BrtUserBookView" */
  },
  /*::[*/
  398: {
    /* n:"BrtInfo" */
  },
  /*::[*/
  399: {
    /* n:"BrtCUsr" */
  },
  /*::[*/
  400: {
    /* n:"BrtUsr" */
  },
  /*::[*/
  401: {
    /* n:"BrtBeginUsers", */
    T: 1
  },
  /*::[*/
  403: {
    /* n:"BrtEOF" */
  },
  /*::[*/
  404: {
    /* n:"BrtUCR" */
  },
  /*::[*/
  405: {
    /* n:"BrtRRInsDel" */
  },
  /*::[*/
  406: {
    /* n:"BrtRREndInsDel" */
  },
  /*::[*/
  407: {
    /* n:"BrtRRMove" */
  },
  /*::[*/
  408: {
    /* n:"BrtRREndMove" */
  },
  /*::[*/
  409: {
    /* n:"BrtRRChgCell" */
  },
  /*::[*/
  410: {
    /* n:"BrtRREndChgCell" */
  },
  /*::[*/
  411: {
    /* n:"BrtRRHeader" */
  },
  /*::[*/
  412: {
    /* n:"BrtRRUserView" */
  },
  /*::[*/
  413: {
    /* n:"BrtRRRenSheet" */
  },
  /*::[*/
  414: {
    /* n:"BrtRRInsertSh" */
  },
  /*::[*/
  415: {
    /* n:"BrtRRDefName" */
  },
  /*::[*/
  416: {
    /* n:"BrtRRNote" */
  },
  /*::[*/
  417: {
    /* n:"BrtRRConflict" */
  },
  /*::[*/
  418: {
    /* n:"BrtRRTQSIF" */
  },
  /*::[*/
  419: {
    /* n:"BrtRRFormat" */
  },
  /*::[*/
  420: {
    /* n:"BrtRREndFormat" */
  },
  /*::[*/
  421: {
    /* n:"BrtRRAutoFmt" */
  },
  /*::[*/
  422: {
    /* n:"BrtBeginUserShViews", */
    T: 1
  },
  /*::[*/
  423: {
    /* n:"BrtBeginUserShView", */
    T: 1
  },
  /*::[*/
  424: {
    /* n:"BrtEndUserShView", */
    T: -1
  },
  /*::[*/
  425: {
    /* n:"BrtEndUserShViews", */
    T: -1
  },
  /*::[*/
  426: {
    /* n:"BrtArrFmla", */
    f: jh
  },
  /*::[*/
  427: {
    /* n:"BrtShrFmla", */
    f: Yh
  },
  /*::[*/
  428: {
    /* n:"BrtTable" */
  },
  /*::[*/
  429: {
    /* n:"BrtBeginExtConnections", */
    T: 1
  },
  /*::[*/
  430: {
    /* n:"BrtEndExtConnections", */
    T: -1
  },
  /*::[*/
  431: {
    /* n:"BrtBeginPCDCalcMems", */
    T: 1
  },
  /*::[*/
  432: {
    /* n:"BrtEndPCDCalcMems", */
    T: -1
  },
  /*::[*/
  433: {
    /* n:"BrtBeginPCDCalcMem", */
    T: 1
  },
  /*::[*/
  434: {
    /* n:"BrtEndPCDCalcMem", */
    T: -1
  },
  /*::[*/
  435: {
    /* n:"BrtBeginPCDHGLevels", */
    T: 1
  },
  /*::[*/
  436: {
    /* n:"BrtEndPCDHGLevels", */
    T: -1
  },
  /*::[*/
  437: {
    /* n:"BrtBeginPCDHGLevel", */
    T: 1
  },
  /*::[*/
  438: {
    /* n:"BrtEndPCDHGLevel", */
    T: -1
  },
  /*::[*/
  439: {
    /* n:"BrtBeginPCDHGLGroups", */
    T: 1
  },
  /*::[*/
  440: {
    /* n:"BrtEndPCDHGLGroups", */
    T: -1
  },
  /*::[*/
  441: {
    /* n:"BrtBeginPCDHGLGroup", */
    T: 1
  },
  /*::[*/
  442: {
    /* n:"BrtEndPCDHGLGroup", */
    T: -1
  },
  /*::[*/
  443: {
    /* n:"BrtBeginPCDHGLGMembers", */
    T: 1
  },
  /*::[*/
  444: {
    /* n:"BrtEndPCDHGLGMembers", */
    T: -1
  },
  /*::[*/
  445: {
    /* n:"BrtBeginPCDHGLGMember", */
    T: 1
  },
  /*::[*/
  446: {
    /* n:"BrtEndPCDHGLGMember", */
    T: -1
  },
  /*::[*/
  447: {
    /* n:"BrtBeginQSI", */
    T: 1
  },
  /*::[*/
  448: {
    /* n:"BrtEndQSI", */
    T: -1
  },
  /*::[*/
  449: {
    /* n:"BrtBeginQSIR", */
    T: 1
  },
  /*::[*/
  450: {
    /* n:"BrtEndQSIR", */
    T: -1
  },
  /*::[*/
  451: {
    /* n:"BrtBeginDeletedNames", */
    T: 1
  },
  /*::[*/
  452: {
    /* n:"BrtEndDeletedNames", */
    T: -1
  },
  /*::[*/
  453: {
    /* n:"BrtBeginDeletedName", */
    T: 1
  },
  /*::[*/
  454: {
    /* n:"BrtEndDeletedName", */
    T: -1
  },
  /*::[*/
  455: {
    /* n:"BrtBeginQSIFs", */
    T: 1
  },
  /*::[*/
  456: {
    /* n:"BrtEndQSIFs", */
    T: -1
  },
  /*::[*/
  457: {
    /* n:"BrtBeginQSIF", */
    T: 1
  },
  /*::[*/
  458: {
    /* n:"BrtEndQSIF", */
    T: -1
  },
  /*::[*/
  459: {
    /* n:"BrtBeginAutoSortScope", */
    T: 1
  },
  /*::[*/
  460: {
    /* n:"BrtEndAutoSortScope", */
    T: -1
  },
  /*::[*/
  461: {
    /* n:"BrtBeginConditionalFormatting", */
    T: 1
  },
  /*::[*/
  462: {
    /* n:"BrtEndConditionalFormatting", */
    T: -1
  },
  /*::[*/
  463: {
    /* n:"BrtBeginCFRule", */
    T: 1
  },
  /*::[*/
  464: {
    /* n:"BrtEndCFRule", */
    T: -1
  },
  /*::[*/
  465: {
    /* n:"BrtBeginIconSet", */
    T: 1
  },
  /*::[*/
  466: {
    /* n:"BrtEndIconSet", */
    T: -1
  },
  /*::[*/
  467: {
    /* n:"BrtBeginDatabar", */
    T: 1
  },
  /*::[*/
  468: {
    /* n:"BrtEndDatabar", */
    T: -1
  },
  /*::[*/
  469: {
    /* n:"BrtBeginColorScale", */
    T: 1
  },
  /*::[*/
  470: {
    /* n:"BrtEndColorScale", */
    T: -1
  },
  /*::[*/
  471: {
    /* n:"BrtCFVO" */
  },
  /*::[*/
  472: {
    /* n:"BrtExternValueMeta" */
  },
  /*::[*/
  473: {
    /* n:"BrtBeginColorPalette", */
    T: 1
  },
  /*::[*/
  474: {
    /* n:"BrtEndColorPalette", */
    T: -1
  },
  /*::[*/
  475: {
    /* n:"BrtIndexedColor" */
  },
  /*::[*/
  476: {
    /* n:"BrtMargins", */
    f: Jh
  },
  /*::[*/
  477: {
    /* n:"BrtPrintOptions" */
  },
  /*::[*/
  478: {
    /* n:"BrtPageSetup" */
  },
  /*::[*/
  479: {
    /* n:"BrtBeginHeaderFooter", */
    T: 1
  },
  /*::[*/
  480: {
    /* n:"BrtEndHeaderFooter", */
    T: -1
  },
  /*::[*/
  481: {
    /* n:"BrtBeginSXCrtFormat", */
    T: 1
  },
  /*::[*/
  482: {
    /* n:"BrtEndSXCrtFormat", */
    T: -1
  },
  /*::[*/
  483: {
    /* n:"BrtBeginSXCrtFormats", */
    T: 1
  },
  /*::[*/
  484: {
    /* n:"BrtEndSXCrtFormats", */
    T: -1
  },
  /*::[*/
  485: {
    /* n:"BrtWsFmtInfo", */
    f: ih
  },
  /*::[*/
  486: {
    /* n:"BrtBeginMgs", */
    T: 1
  },
  /*::[*/
  487: {
    /* n:"BrtEndMGs", */
    T: -1
  },
  /*::[*/
  488: {
    /* n:"BrtBeginMGMaps", */
    T: 1
  },
  /*::[*/
  489: {
    /* n:"BrtEndMGMaps", */
    T: -1
  },
  /*::[*/
  490: {
    /* n:"BrtBeginMG", */
    T: 1
  },
  /*::[*/
  491: {
    /* n:"BrtEndMG", */
    T: -1
  },
  /*::[*/
  492: {
    /* n:"BrtBeginMap", */
    T: 1
  },
  /*::[*/
  493: {
    /* n:"BrtEndMap", */
    T: -1
  },
  /*::[*/
  494: {
    /* n:"BrtHLink", */
    f: Xh
  },
  /*::[*/
  495: {
    /* n:"BrtBeginDCon", */
    T: 1
  },
  /*::[*/
  496: {
    /* n:"BrtEndDCon", */
    T: -1
  },
  /*::[*/
  497: {
    /* n:"BrtBeginDRefs", */
    T: 1
  },
  /*::[*/
  498: {
    /* n:"BrtEndDRefs", */
    T: -1
  },
  /*::[*/
  499: {
    /* n:"BrtDRef" */
  },
  /*::[*/
  500: {
    /* n:"BrtBeginScenMan", */
    T: 1
  },
  /*::[*/
  501: {
    /* n:"BrtEndScenMan", */
    T: -1
  },
  /*::[*/
  502: {
    /* n:"BrtBeginSct", */
    T: 1
  },
  /*::[*/
  503: {
    /* n:"BrtEndSct", */
    T: -1
  },
  /*::[*/
  504: {
    /* n:"BrtSlc" */
  },
  /*::[*/
  505: {
    /* n:"BrtBeginDXFs", */
    T: 1
  },
  /*::[*/
  506: {
    /* n:"BrtEndDXFs", */
    T: -1
  },
  /*::[*/
  507: {
    /* n:"BrtDXF" */
  },
  /*::[*/
  508: {
    /* n:"BrtBeginTableStyles", */
    T: 1
  },
  /*::[*/
  509: {
    /* n:"BrtEndTableStyles", */
    T: -1
  },
  /*::[*/
  510: {
    /* n:"BrtBeginTableStyle", */
    T: 1
  },
  /*::[*/
  511: {
    /* n:"BrtEndTableStyle", */
    T: -1
  },
  /*::[*/
  512: {
    /* n:"BrtTableStyleElement" */
  },
  /*::[*/
  513: {
    /* n:"BrtTableStyleClient" */
  },
  /*::[*/
  514: {
    /* n:"BrtBeginVolDeps", */
    T: 1
  },
  /*::[*/
  515: {
    /* n:"BrtEndVolDeps", */
    T: -1
  },
  /*::[*/
  516: {
    /* n:"BrtBeginVolType", */
    T: 1
  },
  /*::[*/
  517: {
    /* n:"BrtEndVolType", */
    T: -1
  },
  /*::[*/
  518: {
    /* n:"BrtBeginVolMain", */
    T: 1
  },
  /*::[*/
  519: {
    /* n:"BrtEndVolMain", */
    T: -1
  },
  /*::[*/
  520: {
    /* n:"BrtBeginVolTopic", */
    T: 1
  },
  /*::[*/
  521: {
    /* n:"BrtEndVolTopic", */
    T: -1
  },
  /*::[*/
  522: {
    /* n:"BrtVolSubtopic" */
  },
  /*::[*/
  523: {
    /* n:"BrtVolRef" */
  },
  /*::[*/
  524: {
    /* n:"BrtVolNum" */
  },
  /*::[*/
  525: {
    /* n:"BrtVolErr" */
  },
  /*::[*/
  526: {
    /* n:"BrtVolStr" */
  },
  /*::[*/
  527: {
    /* n:"BrtVolBool" */
  },
  /*::[*/
  528: {
    /* n:"BrtBeginCalcChain$", */
    T: 1
  },
  /*::[*/
  529: {
    /* n:"BrtEndCalcChain$", */
    T: -1
  },
  /*::[*/
  530: {
    /* n:"BrtBeginSortState", */
    T: 1
  },
  /*::[*/
  531: {
    /* n:"BrtEndSortState", */
    T: -1
  },
  /*::[*/
  532: {
    /* n:"BrtBeginSortCond", */
    T: 1
  },
  /*::[*/
  533: {
    /* n:"BrtEndSortCond", */
    T: -1
  },
  /*::[*/
  534: {
    /* n:"BrtBookProtection" */
  },
  /*::[*/
  535: {
    /* n:"BrtSheetProtection" */
  },
  /*::[*/
  536: {
    /* n:"BrtRangeProtection" */
  },
  /*::[*/
  537: {
    /* n:"BrtPhoneticInfo" */
  },
  /*::[*/
  538: {
    /* n:"BrtBeginECTxtWiz", */
    T: 1
  },
  /*::[*/
  539: {
    /* n:"BrtEndECTxtWiz", */
    T: -1
  },
  /*::[*/
  540: {
    /* n:"BrtBeginECTWFldInfoLst", */
    T: 1
  },
  /*::[*/
  541: {
    /* n:"BrtEndECTWFldInfoLst", */
    T: -1
  },
  /*::[*/
  542: {
    /* n:"BrtBeginECTwFldInfo", */
    T: 1
  },
  /*::[*/
  548: {
    /* n:"BrtFileSharing" */
  },
  /*::[*/
  549: {
    /* n:"BrtOleSize" */
  },
  /*::[*/
  550: {
    /* n:"BrtDrawing", */
    f: Un
  },
  /*::[*/
  551: {
    /* n:"BrtLegacyDrawing" */
  },
  /*::[*/
  552: {
    /* n:"BrtLegacyDrawingHF" */
  },
  /*::[*/
  553: {
    /* n:"BrtWebOpt" */
  },
  /*::[*/
  554: {
    /* n:"BrtBeginWebPubItems", */
    T: 1
  },
  /*::[*/
  555: {
    /* n:"BrtEndWebPubItems", */
    T: -1
  },
  /*::[*/
  556: {
    /* n:"BrtBeginWebPubItem", */
    T: 1
  },
  /*::[*/
  557: {
    /* n:"BrtEndWebPubItem", */
    T: -1
  },
  /*::[*/
  558: {
    /* n:"BrtBeginSXCondFmt", */
    T: 1
  },
  /*::[*/
  559: {
    /* n:"BrtEndSXCondFmt", */
    T: -1
  },
  /*::[*/
  560: {
    /* n:"BrtBeginSXCondFmts", */
    T: 1
  },
  /*::[*/
  561: {
    /* n:"BrtEndSXCondFmts", */
    T: -1
  },
  /*::[*/
  562: {
    /* n:"BrtBkHim" */
  },
  /*::[*/
  564: {
    /* n:"BrtColor" */
  },
  /*::[*/
  565: {
    /* n:"BrtBeginIndexedColors", */
    T: 1
  },
  /*::[*/
  566: {
    /* n:"BrtEndIndexedColors", */
    T: -1
  },
  /*::[*/
  569: {
    /* n:"BrtBeginMRUColors", */
    T: 1
  },
  /*::[*/
  570: {
    /* n:"BrtEndMRUColors", */
    T: -1
  },
  /*::[*/
  572: {
    /* n:"BrtMRUColor" */
  },
  /*::[*/
  573: {
    /* n:"BrtBeginDVals", */
    T: 1
  },
  /*::[*/
  574: {
    /* n:"BrtEndDVals", */
    T: -1
  },
  /*::[*/
  577: {
    /* n:"BrtSupNameStart" */
  },
  /*::[*/
  578: {
    /* n:"BrtSupNameValueStart" */
  },
  /*::[*/
  579: {
    /* n:"BrtSupNameValueEnd" */
  },
  /*::[*/
  580: {
    /* n:"BrtSupNameNum" */
  },
  /*::[*/
  581: {
    /* n:"BrtSupNameErr" */
  },
  /*::[*/
  582: {
    /* n:"BrtSupNameSt" */
  },
  /*::[*/
  583: {
    /* n:"BrtSupNameNil" */
  },
  /*::[*/
  584: {
    /* n:"BrtSupNameBool" */
  },
  /*::[*/
  585: {
    /* n:"BrtSupNameFmla" */
  },
  /*::[*/
  586: {
    /* n:"BrtSupNameBits" */
  },
  /*::[*/
  587: {
    /* n:"BrtSupNameEnd" */
  },
  /*::[*/
  588: {
    /* n:"BrtEndSupBook", */
    T: -1
  },
  /*::[*/
  589: {
    /* n:"BrtCellSmartTagProperty" */
  },
  /*::[*/
  590: {
    /* n:"BrtBeginCellSmartTag", */
    T: 1
  },
  /*::[*/
  591: {
    /* n:"BrtEndCellSmartTag", */
    T: -1
  },
  /*::[*/
  592: {
    /* n:"BrtBeginCellSmartTags", */
    T: 1
  },
  /*::[*/
  593: {
    /* n:"BrtEndCellSmartTags", */
    T: -1
  },
  /*::[*/
  594: {
    /* n:"BrtBeginSmartTags", */
    T: 1
  },
  /*::[*/
  595: {
    /* n:"BrtEndSmartTags", */
    T: -1
  },
  /*::[*/
  596: {
    /* n:"BrtSmartTagType" */
  },
  /*::[*/
  597: {
    /* n:"BrtBeginSmartTagTypes", */
    T: 1
  },
  /*::[*/
  598: {
    /* n:"BrtEndSmartTagTypes", */
    T: -1
  },
  /*::[*/
  599: {
    /* n:"BrtBeginSXFilters", */
    T: 1
  },
  /*::[*/
  600: {
    /* n:"BrtEndSXFilters", */
    T: -1
  },
  /*::[*/
  601: {
    /* n:"BrtBeginSXFILTER", */
    T: 1
  },
  /*::[*/
  602: {
    /* n:"BrtEndSXFilter", */
    T: -1
  },
  /*::[*/
  603: {
    /* n:"BrtBeginFills", */
    T: 1
  },
  /*::[*/
  604: {
    /* n:"BrtEndFills", */
    T: -1
  },
  /*::[*/
  605: {
    /* n:"BrtBeginCellWatches", */
    T: 1
  },
  /*::[*/
  606: {
    /* n:"BrtEndCellWatches", */
    T: -1
  },
  /*::[*/
  607: {
    /* n:"BrtCellWatch" */
  },
  /*::[*/
  608: {
    /* n:"BrtBeginCRErrs", */
    T: 1
  },
  /*::[*/
  609: {
    /* n:"BrtEndCRErrs", */
    T: -1
  },
  /*::[*/
  610: {
    /* n:"BrtCrashRecErr" */
  },
  /*::[*/
  611: {
    /* n:"BrtBeginFonts", */
    T: 1
  },
  /*::[*/
  612: {
    /* n:"BrtEndFonts", */
    T: -1
  },
  /*::[*/
  613: {
    /* n:"BrtBeginBorders", */
    T: 1
  },
  /*::[*/
  614: {
    /* n:"BrtEndBorders", */
    T: -1
  },
  /*::[*/
  615: {
    /* n:"BrtBeginFmts", */
    T: 1
  },
  /*::[*/
  616: {
    /* n:"BrtEndFmts", */
    T: -1
  },
  /*::[*/
  617: {
    /* n:"BrtBeginCellXFs", */
    T: 1
  },
  /*::[*/
  618: {
    /* n:"BrtEndCellXFs", */
    T: -1
  },
  /*::[*/
  619: {
    /* n:"BrtBeginStyles", */
    T: 1
  },
  /*::[*/
  620: {
    /* n:"BrtEndStyles", */
    T: -1
  },
  /*::[*/
  625: {
    /* n:"BrtBigName" */
  },
  /*::[*/
  626: {
    /* n:"BrtBeginCellStyleXFs", */
    T: 1
  },
  /*::[*/
  627: {
    /* n:"BrtEndCellStyleXFs", */
    T: -1
  },
  /*::[*/
  628: {
    /* n:"BrtBeginComments", */
    T: 1
  },
  /*::[*/
  629: {
    /* n:"BrtEndComments", */
    T: -1
  },
  /*::[*/
  630: {
    /* n:"BrtBeginCommentAuthors", */
    T: 1
  },
  /*::[*/
  631: {
    /* n:"BrtEndCommentAuthors", */
    T: -1
  },
  /*::[*/
  632: {
    /* n:"BrtCommentAuthor", */
    f: co
  },
  /*::[*/
  633: {
    /* n:"BrtBeginCommentList", */
    T: 1
  },
  /*::[*/
  634: {
    /* n:"BrtEndCommentList", */
    T: -1
  },
  /*::[*/
  635: {
    /* n:"BrtBeginComment", */
    T: 1,
    f: lo
  },
  /*::[*/
  636: {
    /* n:"BrtEndComment", */
    T: -1
  },
  /*::[*/
  637: {
    /* n:"BrtCommentText", */
    f: xf
  },
  /*::[*/
  638: {
    /* n:"BrtBeginOleObjects", */
    T: 1
  },
  /*::[*/
  639: {
    /* n:"BrtOleObject" */
  },
  /*::[*/
  640: {
    /* n:"BrtEndOleObjects", */
    T: -1
  },
  /*::[*/
  641: {
    /* n:"BrtBeginSxrules", */
    T: 1
  },
  /*::[*/
  642: {
    /* n:"BrtEndSxRules", */
    T: -1
  },
  /*::[*/
  643: {
    /* n:"BrtBeginActiveXControls", */
    T: 1
  },
  /*::[*/
  644: {
    /* n:"BrtActiveX" */
  },
  /*::[*/
  645: {
    /* n:"BrtEndActiveXControls", */
    T: -1
  },
  /*::[*/
  646: {
    /* n:"BrtBeginPCDSDTCEMembersSortBy", */
    T: 1
  },
  /*::[*/
  648: {
    /* n:"BrtBeginCellIgnoreECs", */
    T: 1
  },
  /*::[*/
  649: {
    /* n:"BrtCellIgnoreEC" */
  },
  /*::[*/
  650: {
    /* n:"BrtEndCellIgnoreECs", */
    T: -1
  },
  /*::[*/
  651: {
    /* n:"BrtCsProp", */
    f: v1
  },
  /*::[*/
  652: {
    /* n:"BrtCsPageSetup" */
  },
  /*::[*/
  653: {
    /* n:"BrtBeginUserCsViews", */
    T: 1
  },
  /*::[*/
  654: {
    /* n:"BrtEndUserCsViews", */
    T: -1
  },
  /*::[*/
  655: {
    /* n:"BrtBeginUserCsView", */
    T: 1
  },
  /*::[*/
  656: {
    /* n:"BrtEndUserCsView", */
    T: -1
  },
  /*::[*/
  657: {
    /* n:"BrtBeginPcdSFCIEntries", */
    T: 1
  },
  /*::[*/
  658: {
    /* n:"BrtEndPCDSFCIEntries", */
    T: -1
  },
  /*::[*/
  659: {
    /* n:"BrtPCDSFCIEntry" */
  },
  /*::[*/
  660: {
    /* n:"BrtBeginListParts", */
    T: 1
  },
  /*::[*/
  661: {
    /* n:"BrtListPart" */
  },
  /*::[*/
  662: {
    /* n:"BrtEndListParts", */
    T: -1
  },
  /*::[*/
  663: {
    /* n:"BrtSheetCalcProp" */
  },
  /*::[*/
  664: {
    /* n:"BrtBeginFnGroup", */
    T: 1
  },
  /*::[*/
  665: {
    /* n:"BrtFnGroup" */
  },
  /*::[*/
  666: {
    /* n:"BrtEndFnGroup", */
    T: -1
  },
  /*::[*/
  667: {
    /* n:"BrtSupAddin" */
  },
  /*::[*/
  668: {
    /* n:"BrtSXTDMPOrder" */
  },
  /*::[*/
  669: {
    /* n:"BrtCsProtection" */
  },
  /*::[*/
  671: {
    /* n:"BrtBeginWsSortMap", */
    T: 1
  },
  /*::[*/
  672: {
    /* n:"BrtEndWsSortMap", */
    T: -1
  },
  /*::[*/
  673: {
    /* n:"BrtBeginRRSort", */
    T: 1
  },
  /*::[*/
  674: {
    /* n:"BrtEndRRSort", */
    T: -1
  },
  /*::[*/
  675: {
    /* n:"BrtRRSortItem" */
  },
  /*::[*/
  676: {
    /* n:"BrtFileSharingIso" */
  },
  /*::[*/
  677: {
    /* n:"BrtBookProtectionIso" */
  },
  /*::[*/
  678: {
    /* n:"BrtSheetProtectionIso" */
  },
  /*::[*/
  679: {
    /* n:"BrtCsProtectionIso" */
  },
  /*::[*/
  680: {
    /* n:"BrtRangeProtectionIso" */
  },
  /*::[*/
  681: {
    /* n:"BrtDValList" */
  },
  /*::[*/
  1024: {
    /* n:"BrtRwDescent" */
  },
  /*::[*/
  1025: {
    /* n:"BrtKnownFonts" */
  },
  /*::[*/
  1026: {
    /* n:"BrtBeginSXTupleSet", */
    T: 1
  },
  /*::[*/
  1027: {
    /* n:"BrtEndSXTupleSet", */
    T: -1
  },
  /*::[*/
  1028: {
    /* n:"BrtBeginSXTupleSetHeader", */
    T: 1
  },
  /*::[*/
  1029: {
    /* n:"BrtEndSXTupleSetHeader", */
    T: -1
  },
  /*::[*/
  1030: {
    /* n:"BrtSXTupleSetHeaderItem" */
  },
  /*::[*/
  1031: {
    /* n:"BrtBeginSXTupleSetData", */
    T: 1
  },
  /*::[*/
  1032: {
    /* n:"BrtEndSXTupleSetData", */
    T: -1
  },
  /*::[*/
  1033: {
    /* n:"BrtBeginSXTupleSetRow", */
    T: 1
  },
  /*::[*/
  1034: {
    /* n:"BrtEndSXTupleSetRow", */
    T: -1
  },
  /*::[*/
  1035: {
    /* n:"BrtSXTupleSetRowItem" */
  },
  /*::[*/
  1036: {
    /* n:"BrtNameExt" */
  },
  /*::[*/
  1037: {
    /* n:"BrtPCDH14" */
  },
  /*::[*/
  1038: {
    /* n:"BrtBeginPCDCalcMem14", */
    T: 1
  },
  /*::[*/
  1039: {
    /* n:"BrtEndPCDCalcMem14", */
    T: -1
  },
  /*::[*/
  1040: {
    /* n:"BrtSXTH14" */
  },
  /*::[*/
  1041: {
    /* n:"BrtBeginSparklineGroup", */
    T: 1
  },
  /*::[*/
  1042: {
    /* n:"BrtEndSparklineGroup", */
    T: -1
  },
  /*::[*/
  1043: {
    /* n:"BrtSparkline" */
  },
  /*::[*/
  1044: {
    /* n:"BrtSXDI14" */
  },
  /*::[*/
  1045: {
    /* n:"BrtWsFmtInfoEx14" */
  },
  /*::[*/
  1046: {
    /* n:"BrtBeginConditionalFormatting14", */
    T: 1
  },
  /*::[*/
  1047: {
    /* n:"BrtEndConditionalFormatting14", */
    T: -1
  },
  /*::[*/
  1048: {
    /* n:"BrtBeginCFRule14", */
    T: 1
  },
  /*::[*/
  1049: {
    /* n:"BrtEndCFRule14", */
    T: -1
  },
  /*::[*/
  1050: {
    /* n:"BrtCFVO14" */
  },
  /*::[*/
  1051: {
    /* n:"BrtBeginDatabar14", */
    T: 1
  },
  /*::[*/
  1052: {
    /* n:"BrtBeginIconSet14", */
    T: 1
  },
  /*::[*/
  1053: {
    /* n:"BrtDVal14", */
    f: n1
  },
  /*::[*/
  1054: {
    /* n:"BrtBeginDVals14", */
    T: 1
  },
  /*::[*/
  1055: {
    /* n:"BrtColor14" */
  },
  /*::[*/
  1056: {
    /* n:"BrtBeginSparklines", */
    T: 1
  },
  /*::[*/
  1057: {
    /* n:"BrtEndSparklines", */
    T: -1
  },
  /*::[*/
  1058: {
    /* n:"BrtBeginSparklineGroups", */
    T: 1
  },
  /*::[*/
  1059: {
    /* n:"BrtEndSparklineGroups", */
    T: -1
  },
  /*::[*/
  1061: {
    /* n:"BrtSXVD14" */
  },
  /*::[*/
  1062: {
    /* n:"BrtBeginSXView14", */
    T: 1
  },
  /*::[*/
  1063: {
    /* n:"BrtEndSXView14", */
    T: -1
  },
  /*::[*/
  1064: {
    /* n:"BrtBeginSXView16", */
    T: 1
  },
  /*::[*/
  1065: {
    /* n:"BrtEndSXView16", */
    T: -1
  },
  /*::[*/
  1066: {
    /* n:"BrtBeginPCD14", */
    T: 1
  },
  /*::[*/
  1067: {
    /* n:"BrtEndPCD14", */
    T: -1
  },
  /*::[*/
  1068: {
    /* n:"BrtBeginExtConn14", */
    T: 1
  },
  /*::[*/
  1069: {
    /* n:"BrtEndExtConn14", */
    T: -1
  },
  /*::[*/
  1070: {
    /* n:"BrtBeginSlicerCacheIDs", */
    T: 1
  },
  /*::[*/
  1071: {
    /* n:"BrtEndSlicerCacheIDs", */
    T: -1
  },
  /*::[*/
  1072: {
    /* n:"BrtBeginSlicerCacheID", */
    T: 1
  },
  /*::[*/
  1073: {
    /* n:"BrtEndSlicerCacheID", */
    T: -1
  },
  /*::[*/
  1075: {
    /* n:"BrtBeginSlicerCache", */
    T: 1
  },
  /*::[*/
  1076: {
    /* n:"BrtEndSlicerCache", */
    T: -1
  },
  /*::[*/
  1077: {
    /* n:"BrtBeginSlicerCacheDef", */
    T: 1
  },
  /*::[*/
  1078: {
    /* n:"BrtEndSlicerCacheDef", */
    T: -1
  },
  /*::[*/
  1079: {
    /* n:"BrtBeginSlicersEx", */
    T: 1
  },
  /*::[*/
  1080: {
    /* n:"BrtEndSlicersEx", */
    T: -1
  },
  /*::[*/
  1081: {
    /* n:"BrtBeginSlicerEx", */
    T: 1
  },
  /*::[*/
  1082: {
    /* n:"BrtEndSlicerEx", */
    T: -1
  },
  /*::[*/
  1083: {
    /* n:"BrtBeginSlicer", */
    T: 1
  },
  /*::[*/
  1084: {
    /* n:"BrtEndSlicer", */
    T: -1
  },
  /*::[*/
  1085: {
    /* n:"BrtSlicerCachePivotTables" */
  },
  /*::[*/
  1086: {
    /* n:"BrtBeginSlicerCacheOlapImpl", */
    T: 1
  },
  /*::[*/
  1087: {
    /* n:"BrtEndSlicerCacheOlapImpl", */
    T: -1
  },
  /*::[*/
  1088: {
    /* n:"BrtBeginSlicerCacheLevelsData", */
    T: 1
  },
  /*::[*/
  1089: {
    /* n:"BrtEndSlicerCacheLevelsData", */
    T: -1
  },
  /*::[*/
  1090: {
    /* n:"BrtBeginSlicerCacheLevelData", */
    T: 1
  },
  /*::[*/
  1091: {
    /* n:"BrtEndSlicerCacheLevelData", */
    T: -1
  },
  /*::[*/
  1092: {
    /* n:"BrtBeginSlicerCacheSiRanges", */
    T: 1
  },
  /*::[*/
  1093: {
    /* n:"BrtEndSlicerCacheSiRanges", */
    T: -1
  },
  /*::[*/
  1094: {
    /* n:"BrtBeginSlicerCacheSiRange", */
    T: 1
  },
  /*::[*/
  1095: {
    /* n:"BrtEndSlicerCacheSiRange", */
    T: -1
  },
  /*::[*/
  1096: {
    /* n:"BrtSlicerCacheOlapItem" */
  },
  /*::[*/
  1097: {
    /* n:"BrtBeginSlicerCacheSelections", */
    T: 1
  },
  /*::[*/
  1098: {
    /* n:"BrtSlicerCacheSelection" */
  },
  /*::[*/
  1099: {
    /* n:"BrtEndSlicerCacheSelections", */
    T: -1
  },
  /*::[*/
  1100: {
    /* n:"BrtBeginSlicerCacheNative", */
    T: 1
  },
  /*::[*/
  1101: {
    /* n:"BrtEndSlicerCacheNative", */
    T: -1
  },
  /*::[*/
  1102: {
    /* n:"BrtSlicerCacheNativeItem" */
  },
  /*::[*/
  1103: {
    /* n:"BrtRangeProtection14" */
  },
  /*::[*/
  1104: {
    /* n:"BrtRangeProtectionIso14" */
  },
  /*::[*/
  1105: {
    /* n:"BrtCellIgnoreEC14" */
  },
  /*::[*/
  1111: {
    /* n:"BrtList14" */
  },
  /*::[*/
  1112: {
    /* n:"BrtCFIcon" */
  },
  /*::[*/
  1113: {
    /* n:"BrtBeginSlicerCachesPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  1114: {
    /* n:"BrtEndSlicerCachesPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  1115: {
    /* n:"BrtBeginSlicers", */
    T: 1
  },
  /*::[*/
  1116: {
    /* n:"BrtEndSlicers", */
    T: -1
  },
  /*::[*/
  1117: {
    /* n:"BrtWbProp14" */
  },
  /*::[*/
  1118: {
    /* n:"BrtBeginSXEdit", */
    T: 1
  },
  /*::[*/
  1119: {
    /* n:"BrtEndSXEdit", */
    T: -1
  },
  /*::[*/
  1120: {
    /* n:"BrtBeginSXEdits", */
    T: 1
  },
  /*::[*/
  1121: {
    /* n:"BrtEndSXEdits", */
    T: -1
  },
  /*::[*/
  1122: {
    /* n:"BrtBeginSXChange", */
    T: 1
  },
  /*::[*/
  1123: {
    /* n:"BrtEndSXChange", */
    T: -1
  },
  /*::[*/
  1124: {
    /* n:"BrtBeginSXChanges", */
    T: 1
  },
  /*::[*/
  1125: {
    /* n:"BrtEndSXChanges", */
    T: -1
  },
  /*::[*/
  1126: {
    /* n:"BrtSXTupleItems" */
  },
  /*::[*/
  1128: {
    /* n:"BrtBeginSlicerStyle", */
    T: 1
  },
  /*::[*/
  1129: {
    /* n:"BrtEndSlicerStyle", */
    T: -1
  },
  /*::[*/
  1130: {
    /* n:"BrtSlicerStyleElement" */
  },
  /*::[*/
  1131: {
    /* n:"BrtBeginStyleSheetExt14", */
    T: 1
  },
  /*::[*/
  1132: {
    /* n:"BrtEndStyleSheetExt14", */
    T: -1
  },
  /*::[*/
  1133: {
    /* n:"BrtBeginSlicerCachesPivotCacheID", */
    T: 1
  },
  /*::[*/
  1134: {
    /* n:"BrtEndSlicerCachesPivotCacheID", */
    T: -1
  },
  /*::[*/
  1135: {
    /* n:"BrtBeginConditionalFormattings", */
    T: 1
  },
  /*::[*/
  1136: {
    /* n:"BrtEndConditionalFormattings", */
    T: -1
  },
  /*::[*/
  1137: {
    /* n:"BrtBeginPCDCalcMemExt", */
    T: 1
  },
  /*::[*/
  1138: {
    /* n:"BrtEndPCDCalcMemExt", */
    T: -1
  },
  /*::[*/
  1139: {
    /* n:"BrtBeginPCDCalcMemsExt", */
    T: 1
  },
  /*::[*/
  1140: {
    /* n:"BrtEndPCDCalcMemsExt", */
    T: -1
  },
  /*::[*/
  1141: {
    /* n:"BrtPCDField14" */
  },
  /*::[*/
  1142: {
    /* n:"BrtBeginSlicerStyles", */
    T: 1
  },
  /*::[*/
  1143: {
    /* n:"BrtEndSlicerStyles", */
    T: -1
  },
  /*::[*/
  1144: {
    /* n:"BrtBeginSlicerStyleElements", */
    T: 1
  },
  /*::[*/
  1145: {
    /* n:"BrtEndSlicerStyleElements", */
    T: -1
  },
  /*::[*/
  1146: {
    /* n:"BrtCFRuleExt" */
  },
  /*::[*/
  1147: {
    /* n:"BrtBeginSXCondFmt14", */
    T: 1
  },
  /*::[*/
  1148: {
    /* n:"BrtEndSXCondFmt14", */
    T: -1
  },
  /*::[*/
  1149: {
    /* n:"BrtBeginSXCondFmts14", */
    T: 1
  },
  /*::[*/
  1150: {
    /* n:"BrtEndSXCondFmts14", */
    T: -1
  },
  /*::[*/
  1152: {
    /* n:"BrtBeginSortCond14", */
    T: 1
  },
  /*::[*/
  1153: {
    /* n:"BrtEndSortCond14", */
    T: -1
  },
  /*::[*/
  1154: {
    /* n:"BrtEndDVals14", */
    T: -1
  },
  /*::[*/
  1155: {
    /* n:"BrtEndIconSet14", */
    T: -1
  },
  /*::[*/
  1156: {
    /* n:"BrtEndDatabar14", */
    T: -1
  },
  /*::[*/
  1157: {
    /* n:"BrtBeginColorScale14", */
    T: 1
  },
  /*::[*/
  1158: {
    /* n:"BrtEndColorScale14", */
    T: -1
  },
  /*::[*/
  1159: {
    /* n:"BrtBeginSxrules14", */
    T: 1
  },
  /*::[*/
  1160: {
    /* n:"BrtEndSxrules14", */
    T: -1
  },
  /*::[*/
  1161: {
    /* n:"BrtBeginPRule14", */
    T: 1
  },
  /*::[*/
  1162: {
    /* n:"BrtEndPRule14", */
    T: -1
  },
  /*::[*/
  1163: {
    /* n:"BrtBeginPRFilters14", */
    T: 1
  },
  /*::[*/
  1164: {
    /* n:"BrtEndPRFilters14", */
    T: -1
  },
  /*::[*/
  1165: {
    /* n:"BrtBeginPRFilter14", */
    T: 1
  },
  /*::[*/
  1166: {
    /* n:"BrtEndPRFilter14", */
    T: -1
  },
  /*::[*/
  1167: {
    /* n:"BrtBeginPRFItem14", */
    T: 1
  },
  /*::[*/
  1168: {
    /* n:"BrtEndPRFItem14", */
    T: -1
  },
  /*::[*/
  1169: {
    /* n:"BrtBeginCellIgnoreECs14", */
    T: 1
  },
  /*::[*/
  1170: {
    /* n:"BrtEndCellIgnoreECs14", */
    T: -1
  },
  /*::[*/
  1171: {
    /* n:"BrtDxf14" */
  },
  /*::[*/
  1172: {
    /* n:"BrtBeginDxF14s", */
    T: 1
  },
  /*::[*/
  1173: {
    /* n:"BrtEndDxf14s", */
    T: -1
  },
  /*::[*/
  1177: {
    /* n:"BrtFilter14" */
  },
  /*::[*/
  1178: {
    /* n:"BrtBeginCustomFilters14", */
    T: 1
  },
  /*::[*/
  1180: {
    /* n:"BrtCustomFilter14" */
  },
  /*::[*/
  1181: {
    /* n:"BrtIconFilter14" */
  },
  /*::[*/
  1182: {
    /* n:"BrtPivotCacheConnectionName" */
  },
  /*::[*/
  2048: {
    /* n:"BrtBeginDecoupledPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2049: {
    /* n:"BrtEndDecoupledPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2050: {
    /* n:"BrtDecoupledPivotCacheID" */
  },
  /*::[*/
  2051: {
    /* n:"BrtBeginPivotTableRefs", */
    T: 1
  },
  /*::[*/
  2052: {
    /* n:"BrtEndPivotTableRefs", */
    T: -1
  },
  /*::[*/
  2053: {
    /* n:"BrtPivotTableRef" */
  },
  /*::[*/
  2054: {
    /* n:"BrtSlicerCacheBookPivotTables" */
  },
  /*::[*/
  2055: {
    /* n:"BrtBeginSxvcells", */
    T: 1
  },
  /*::[*/
  2056: {
    /* n:"BrtEndSxvcells", */
    T: -1
  },
  /*::[*/
  2057: {
    /* n:"BrtBeginSxRow", */
    T: 1
  },
  /*::[*/
  2058: {
    /* n:"BrtEndSxRow", */
    T: -1
  },
  /*::[*/
  2060: {
    /* n:"BrtPcdCalcMem15" */
  },
  /*::[*/
  2067: {
    /* n:"BrtQsi15" */
  },
  /*::[*/
  2068: {
    /* n:"BrtBeginWebExtensions", */
    T: 1
  },
  /*::[*/
  2069: {
    /* n:"BrtEndWebExtensions", */
    T: -1
  },
  /*::[*/
  2070: {
    /* n:"BrtWebExtension" */
  },
  /*::[*/
  2071: {
    /* n:"BrtAbsPath15" */
  },
  /*::[*/
  2072: {
    /* n:"BrtBeginPivotTableUISettings", */
    T: 1
  },
  /*::[*/
  2073: {
    /* n:"BrtEndPivotTableUISettings", */
    T: -1
  },
  /*::[*/
  2075: {
    /* n:"BrtTableSlicerCacheIDs" */
  },
  /*::[*/
  2076: {
    /* n:"BrtTableSlicerCacheID" */
  },
  /*::[*/
  2077: {
    /* n:"BrtBeginTableSlicerCache", */
    T: 1
  },
  /*::[*/
  2078: {
    /* n:"BrtEndTableSlicerCache", */
    T: -1
  },
  /*::[*/
  2079: {
    /* n:"BrtSxFilter15" */
  },
  /*::[*/
  2080: {
    /* n:"BrtBeginTimelineCachePivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2081: {
    /* n:"BrtEndTimelineCachePivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2082: {
    /* n:"BrtTimelineCachePivotCacheID" */
  },
  /*::[*/
  2083: {
    /* n:"BrtBeginTimelineCacheIDs", */
    T: 1
  },
  /*::[*/
  2084: {
    /* n:"BrtEndTimelineCacheIDs", */
    T: -1
  },
  /*::[*/
  2085: {
    /* n:"BrtBeginTimelineCacheID", */
    T: 1
  },
  /*::[*/
  2086: {
    /* n:"BrtEndTimelineCacheID", */
    T: -1
  },
  /*::[*/
  2087: {
    /* n:"BrtBeginTimelinesEx", */
    T: 1
  },
  /*::[*/
  2088: {
    /* n:"BrtEndTimelinesEx", */
    T: -1
  },
  /*::[*/
  2089: {
    /* n:"BrtBeginTimelineEx", */
    T: 1
  },
  /*::[*/
  2090: {
    /* n:"BrtEndTimelineEx", */
    T: -1
  },
  /*::[*/
  2091: {
    /* n:"BrtWorkBookPr15" */
  },
  /*::[*/
  2092: {
    /* n:"BrtPCDH15" */
  },
  /*::[*/
  2093: {
    /* n:"BrtBeginTimelineStyle", */
    T: 1
  },
  /*::[*/
  2094: {
    /* n:"BrtEndTimelineStyle", */
    T: -1
  },
  /*::[*/
  2095: {
    /* n:"BrtTimelineStyleElement" */
  },
  /*::[*/
  2096: {
    /* n:"BrtBeginTimelineStylesheetExt15", */
    T: 1
  },
  /*::[*/
  2097: {
    /* n:"BrtEndTimelineStylesheetExt15", */
    T: -1
  },
  /*::[*/
  2098: {
    /* n:"BrtBeginTimelineStyles", */
    T: 1
  },
  /*::[*/
  2099: {
    /* n:"BrtEndTimelineStyles", */
    T: -1
  },
  /*::[*/
  2100: {
    /* n:"BrtBeginTimelineStyleElements", */
    T: 1
  },
  /*::[*/
  2101: {
    /* n:"BrtEndTimelineStyleElements", */
    T: -1
  },
  /*::[*/
  2102: {
    /* n:"BrtDxf15" */
  },
  /*::[*/
  2103: {
    /* n:"BrtBeginDxfs15", */
    T: 1
  },
  /*::[*/
  2104: {
    /* n:"BrtEndDxfs15", */
    T: -1
  },
  /*::[*/
  2105: {
    /* n:"BrtSlicerCacheHideItemsWithNoData" */
  },
  /*::[*/
  2106: {
    /* n:"BrtBeginItemUniqueNames", */
    T: 1
  },
  /*::[*/
  2107: {
    /* n:"BrtEndItemUniqueNames", */
    T: -1
  },
  /*::[*/
  2108: {
    /* n:"BrtItemUniqueName" */
  },
  /*::[*/
  2109: {
    /* n:"BrtBeginExtConn15", */
    T: 1
  },
  /*::[*/
  2110: {
    /* n:"BrtEndExtConn15", */
    T: -1
  },
  /*::[*/
  2111: {
    /* n:"BrtBeginOledbPr15", */
    T: 1
  },
  /*::[*/
  2112: {
    /* n:"BrtEndOledbPr15", */
    T: -1
  },
  /*::[*/
  2113: {
    /* n:"BrtBeginDataFeedPr15", */
    T: 1
  },
  /*::[*/
  2114: {
    /* n:"BrtEndDataFeedPr15", */
    T: -1
  },
  /*::[*/
  2115: {
    /* n:"BrtTextPr15" */
  },
  /*::[*/
  2116: {
    /* n:"BrtRangePr15" */
  },
  /*::[*/
  2117: {
    /* n:"BrtDbCommand15" */
  },
  /*::[*/
  2118: {
    /* n:"BrtBeginDbTables15", */
    T: 1
  },
  /*::[*/
  2119: {
    /* n:"BrtEndDbTables15", */
    T: -1
  },
  /*::[*/
  2120: {
    /* n:"BrtDbTable15" */
  },
  /*::[*/
  2121: {
    /* n:"BrtBeginDataModel", */
    T: 1
  },
  /*::[*/
  2122: {
    /* n:"BrtEndDataModel", */
    T: -1
  },
  /*::[*/
  2123: {
    /* n:"BrtBeginModelTables", */
    T: 1
  },
  /*::[*/
  2124: {
    /* n:"BrtEndModelTables", */
    T: -1
  },
  /*::[*/
  2125: {
    /* n:"BrtModelTable" */
  },
  /*::[*/
  2126: {
    /* n:"BrtBeginModelRelationships", */
    T: 1
  },
  /*::[*/
  2127: {
    /* n:"BrtEndModelRelationships", */
    T: -1
  },
  /*::[*/
  2128: {
    /* n:"BrtModelRelationship" */
  },
  /*::[*/
  2129: {
    /* n:"BrtBeginECTxtWiz15", */
    T: 1
  },
  /*::[*/
  2130: {
    /* n:"BrtEndECTxtWiz15", */
    T: -1
  },
  /*::[*/
  2131: {
    /* n:"BrtBeginECTWFldInfoLst15", */
    T: 1
  },
  /*::[*/
  2132: {
    /* n:"BrtEndECTWFldInfoLst15", */
    T: -1
  },
  /*::[*/
  2133: {
    /* n:"BrtBeginECTWFldInfo15", */
    T: 1
  },
  /*::[*/
  2134: {
    /* n:"BrtFieldListActiveItem" */
  },
  /*::[*/
  2135: {
    /* n:"BrtPivotCacheIdVersion" */
  },
  /*::[*/
  2136: {
    /* n:"BrtSXDI15" */
  },
  /*::[*/
  2137: {
    /* n:"BrtBeginModelTimeGroupings", */
    T: 1
  },
  /*::[*/
  2138: {
    /* n:"BrtEndModelTimeGroupings", */
    T: -1
  },
  /*::[*/
  2139: {
    /* n:"BrtBeginModelTimeGrouping", */
    T: 1
  },
  /*::[*/
  2140: {
    /* n:"BrtEndModelTimeGrouping", */
    T: -1
  },
  /*::[*/
  2141: {
    /* n:"BrtModelTimeGroupingCalcCol" */
  },
  /*::[*/
  3072: {
    /* n:"BrtUid" */
  },
  /*::[*/
  3073: {
    /* n:"BrtRevisionPtr" */
  },
  /*::[*/
  4096: {
    /* n:"BrtBeginDynamicArrayPr", */
    T: 1
  },
  /*::[*/
  4097: {
    /* n:"BrtEndDynamicArrayPr", */
    T: -1
  },
  /*::[*/
  5002: {
    /* n:"BrtBeginRichValueBlock", */
    T: 1
  },
  /*::[*/
  5003: {
    /* n:"BrtEndRichValueBlock", */
    T: -1
  },
  /*::[*/
  5081: {
    /* n:"BrtBeginRichFilters", */
    T: 1
  },
  /*::[*/
  5082: {
    /* n:"BrtEndRichFilters", */
    T: -1
  },
  /*::[*/
  5083: {
    /* n:"BrtRichFilter" */
  },
  /*::[*/
  5084: {
    /* n:"BrtBeginRichFilterColumn", */
    T: 1
  },
  /*::[*/
  5085: {
    /* n:"BrtEndRichFilterColumn", */
    T: -1
  },
  /*::[*/
  5086: {
    /* n:"BrtBeginCustomRichFilters", */
    T: 1
  },
  /*::[*/
  5087: {
    /* n:"BrtEndCustomRichFilters", */
    T: -1
  },
  /*::[*/
  5088: {
    /* n:"BrtCustomRichFilter" */
  },
  /*::[*/
  5089: {
    /* n:"BrtTop10RichFilter" */
  },
  /*::[*/
  5090: {
    /* n:"BrtDynamicRichFilter" */
  },
  /*::[*/
  5092: {
    /* n:"BrtBeginRichSortCondition", */
    T: 1
  },
  /*::[*/
  5093: {
    /* n:"BrtEndRichSortCondition", */
    T: -1
  },
  /*::[*/
  5094: {
    /* n:"BrtRichFilterDateGroupItem" */
  },
  /*::[*/
  5095: {
    /* n:"BrtBeginCalcFeatures", */
    T: 1
  },
  /*::[*/
  5096: {
    /* n:"BrtEndCalcFeatures", */
    T: -1
  },
  /*::[*/
  5097: {
    /* n:"BrtCalcFeature" */
  },
  /*::[*/
  5099: {
    /* n:"BrtExternalLinksPr" */
  },
  /*::[*/
  65535: { n: "" }
};
function J(e, t, r, n) {
  var a = t;
  if (!isNaN(a)) {
    var i = n || (r || []).length || 0, s = e.next(4);
    s.write_shift(2, a), s.write_shift(2, i), /*:: len != null &&*/
    i > 0 && Yn(r) && e.push(r);
  }
}
function q1(e, t, r, n) {
  var a = n || (r || []).length || 0;
  if (a <= 8224)
    return J(e, t, r, a);
  var i = t;
  if (!isNaN(i)) {
    for (var s = r.parts || [], f = 0, o = 0, l = 0; l + (s[f] || 8224) <= 8224; )
      l += s[f] || 8224, f++;
    var c = e.next(4);
    for (c.write_shift(2, i), c.write_shift(2, l), e.push(r.slice(o, o + l)), o += l; o < a; ) {
      for (c = e.next(4), c.write_shift(2, 60), l = 0; l + (s[f] || 8224) <= 8224; )
        l += s[f] || 8224, f++;
      c.write_shift(2, l), e.push(r.slice(o, o + l)), o += l;
    }
  }
}
function Vt(e, t, r) {
  return e || (e = B(7)), e.write_shift(2, t), e.write_shift(2, r), e.write_shift(2, 0), e.write_shift(1, 0), e;
}
function Q1(e, t, r, n) {
  var a = B(9);
  return Vt(a, e, t), ei(r, n || "b", a), a;
}
function eu(e, t, r) {
  var n = B(8 + 2 * r.length);
  return Vt(n, e, t), n.write_shift(1, r.length), n.write_shift(r.length, r, "sbcs"), n.l < n.length ? n.slice(0, n.l) : n;
}
function ru(e, t, r, n) {
  if (t.v != null)
    switch (t.t) {
      case "d":
      case "n":
        var a = t.t == "d" ? er(qe(t.v)) : t.v;
        a == (a | 0) && a >= 0 && a < 65536 ? J(e, 2, dl(r, n, a)) : J(e, 3, xl(r, n, a));
        return;
      case "b":
      case "e":
        J(e, 5, Q1(r, n, t.v, t.t));
        return;
      case "s":
      case "str":
        J(e, 4, eu(r, n, (t.v || "").slice(0, 255)));
        return;
    }
  J(e, 1, Vt(null, r, n));
}
function tu(e, t, r, n) {
  var a = Array.isArray(t), i = we(t["!ref"] || "A1"), s, f = "", o = [];
  if (i.e.c > 255 || i.e.r > 16383) {
    if (n.WTF)
      throw new Error("Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    i.e.c = Math.min(i.e.c, 255), i.e.r = Math.min(i.e.c, 16383), s = Ie(i);
  }
  for (var l = i.s.r; l <= i.e.r; ++l) {
    f = Xe(l);
    for (var c = i.s.c; c <= i.e.c; ++c) {
      l === i.s.r && (o[c] = je(c)), s = o[c] + f;
      var v = a ? (t[l] || [])[c] : t[s];
      v && ru(e, v, l, c);
    }
  }
}
function nu(e, t) {
  for (var r = t || {}, n = Qe(), a = 0, i = 0; i < e.SheetNames.length; ++i)
    e.SheetNames[i] == r.sheet && (a = i);
  if (a == 0 && r.sheet && e.SheetNames[0] != r.sheet)
    throw new Error("Sheet not found: " + r.sheet);
  return J(n, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, e0(e, 16, r)), tu(n, e.Sheets[e.SheetNames[a]], a, r), J(n, 10), n.end();
}
function au(e, t, r) {
  J(e, 49, Jf({
    sz: 12,
    color: { theme: 1 },
    name: "Arial",
    family: 2,
    scheme: "minor"
  }, r));
}
function iu(e, t, r) {
  t && [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(n) {
    for (var a = n[0]; a <= n[1]; ++a)
      t[a] != null && J(e, 1054, Qf(a, t[a], r));
  });
}
function su(e, t) {
  var r = B(19);
  r.write_shift(4, 2151), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 1), r.write_shift(4, 0), J(e, 2151, r), r = B(39), r.write_shift(4, 2152), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(2, 1), r.write_shift(4, 4), r.write_shift(2, 0), ni(we(t["!ref"] || "A1"), r), r.write_shift(4, 4), J(e, 2152, r);
}
function fu(e, t) {
  for (var r = 0; r < 16; ++r)
    J(e, 224, $0({ numFmtId: 0, style: !0 }, 0, t));
  t.cellXfs.forEach(function(n) {
    J(e, 224, $0(n, 0, t));
  });
}
function lu(e, t) {
  for (var r = 0; r < t["!links"].length; ++r) {
    var n = t["!links"][r];
    J(e, 440, fl(n)), n[1].Tooltip && J(e, 2048, ll(n));
  }
  delete t["!links"];
}
function ou(e, t) {
  if (t) {
    var r = 0;
    t.forEach(function(n, a) {
      ++r <= 256 && n && J(e, 125, hl(wn(a, n), a));
    });
  }
}
function cu(e, t, r, n, a) {
  var i = 16 + Hr(a.cellXfs, t, a);
  if (t.v == null && !t.bf) {
    J(e, 513, Jr(r, n, i));
    return;
  }
  if (t.bf)
    J(e, 6, Pc(t, r, n, a, i));
  else
    switch (t.t) {
      case "d":
      case "n":
        var s = t.t == "d" ? er(qe(t.v)) : t.v;
        J(e, 515, nl(r, n, s, i));
        break;
      case "b":
      case "e":
        J(e, 517, tl(r, n, t.v, i, a, t.t));
        break;
      case "s":
      case "str":
        if (a.bookSST) {
          var f = i0(a.Strings, t.v, a.revStrings);
          J(e, 253, Zf(r, n, f, i));
        } else
          J(e, 516, qf(r, n, (t.v || "").slice(0, 255), i, a));
        break;
      default:
        J(e, 513, Jr(r, n, i));
    }
}
function hu(e, t, r) {
  var n = Qe(), a = r.SheetNames[e], i = r.Sheets[a] || {}, s = (r || {}).Workbook || {}, f = (s.Sheets || [])[e] || {}, o = Array.isArray(i), l = t.biff == 8, c, v = "", x = [], d = we(i["!ref"] || "A1"), E = l ? 65536 : 16384;
  if (d.e.c > 255 || d.e.r >= E) {
    if (t.WTF)
      throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    d.e.c = Math.min(d.e.c, 255), d.e.r = Math.min(d.e.c, E - 1);
  }
  J(n, 2057, e0(r, 16, t)), J(n, 13, hr(1)), J(n, 12, hr(100)), J(n, 15, Ze(!0)), J(n, 17, Ze(!1)), J(n, 16, $r(1e-3)), J(n, 95, Ze(!0)), J(n, 42, Ze(!1)), J(n, 43, Ze(!1)), J(n, 130, hr(1)), J(n, 128, rl([0, 0])), J(n, 131, Ze(!1)), J(n, 132, Ze(!1)), l && ou(n, i["!cols"]), J(n, 512, el(d, t)), l && (i["!links"] = []);
  for (var u = d.s.r; u <= d.e.r; ++u) {
    v = Xe(u);
    for (var _ = d.s.c; _ <= d.e.c; ++_) {
      u === d.s.r && (x[_] = je(_)), c = x[_] + v;
      var O = o ? (i[u] || [])[_] : i[c];
      O && (cu(n, O, u, _, t), l && O.l && i["!links"].push([c, O.l]));
    }
  }
  var k = f.CodeName || f.name || a;
  return l && J(n, 574, $f((s.Views || [])[0])), l && (i["!merges"] || []).length && J(n, 229, sl(i["!merges"])), l && lu(n, i), J(n, 442, ti(k)), l && su(n, i), J(
    n,
    10
    /* EOF */
  ), n.end();
}
function uu(e, t, r) {
  var n = Qe(), a = (e || {}).Workbook || {}, i = a.Sheets || [], s = (
    /*::((*/
    a.WBProps || {
      /*::CodeName:"ThisWorkbook"*/
    }
  ), f = r.biff == 8, o = r.biff == 5;
  if (J(n, 2057, e0(e, 5, r)), r.bookType == "xla" && J(
    n,
    135
    /* Addin */
  ), J(n, 225, f ? hr(1200) : null), J(n, 193, Mf(2)), o && J(
    n,
    191
    /* ToolbarHdr */
  ), o && J(
    n,
    192
    /* ToolbarEnd */
  ), J(
    n,
    226
    /* InterfaceEnd */
  ), J(n, 92, Kf("SheetJS", r)), J(n, 66, hr(f ? 1200 : 1252)), f && J(n, 353, hr(0)), f && J(
    n,
    448
    /* Excel9File */
  ), J(n, 317, ul(e.SheetNames.length)), f && e.vbaraw && J(
    n,
    211
    /* ObProj */
  ), f && e.vbaraw) {
    var l = s.CodeName || "ThisWorkbook";
    J(n, 442, ti(l));
  }
  J(n, 156, hr(17)), J(n, 25, Ze(!1)), J(n, 18, Ze(!1)), J(n, 19, hr(0)), f && J(n, 431, Ze(!1)), f && J(n, 444, hr(0)), J(n, 61, Yf()), J(n, 64, Ze(!1)), J(n, 141, hr(0)), J(n, 34, Ze(m1(e) == "true")), J(n, 14, Ze(!0)), f && J(n, 439, Ze(!1)), J(n, 218, hr(0)), au(n, e, r), iu(n, e.SSF, r), fu(n, r), f && J(n, 352, Ze(!1));
  var c = n.end(), v = Qe();
  f && J(v, 140, ol()), f && r.Strings && q1(v, 252, jf(r.Strings)), J(
    v,
    10
    /* EOF */
  );
  var x = v.end(), d = Qe(), E = 0, u = 0;
  for (u = 0; u < e.SheetNames.length; ++u)
    E += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[u].length;
  var _ = c.length + E + x.length;
  for (u = 0; u < e.SheetNames.length; ++u) {
    var O = i[u] || {};
    J(d, 133, zf({ pos: _, hs: O.Hidden || 0, dt: 0, name: e.SheetNames[u] }, r)), _ += t[u].length;
  }
  var k = d.end();
  if (E != k.length)
    throw new Error("BS8 " + E + " != " + k.length);
  var y = [];
  return c.length && y.push(c), k.length && y.push(k), x.length && y.push(x), Ve(y);
}
function xu(e, t) {
  var r = t || {}, n = [];
  e && !e.SSF && (e.SSF = rr(De)), e && e.SSF && (mn(), pn(e.SSF), r.revssf = gn(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.Strings = /*::((*/
  [], r.Strings.Count = 0, r.Strings.Unique = 0, s0(r), r.cellXfs = [], Hr(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {});
  for (var a = 0; a < e.SheetNames.length; ++a)
    n[n.length] = hu(a, r, e);
  return n.unshift(uu(e, n, r)), Ve(n);
}
function Di(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var n = e.Sheets[e.SheetNames[r]];
    if (!(!n || !n["!ref"])) {
      var a = fr(n["!ref"]);
      a.e.c > 255 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[r] + "' extends beyond column IV (255).  Data may be lost.");
    }
  }
  var i = t || {};
  switch (i.biff || 2) {
    case 8:
    case 5:
      return xu(e, t);
    case 4:
    case 3:
    case 2:
      return nu(e, t);
  }
  throw new Error("invalid type " + i.bookType + " for BIFF");
}
function du(e, t, r, n) {
  for (var a = e["!merges"] || [], i = [], s = t.s.c; s <= t.e.c; ++s) {
    for (var f = 0, o = 0, l = 0; l < a.length; ++l)
      if (!(a[l].s.r > r || a[l].s.c > s) && !(a[l].e.r < r || a[l].e.c < s)) {
        if (a[l].s.r < r || a[l].s.c < s) {
          f = -1;
          break;
        }
        f = a[l].e.r - a[l].s.r + 1, o = a[l].e.c - a[l].s.c + 1;
        break;
      }
    if (!(f < 0)) {
      var c = ge({ r, c: s }), v = n.dense ? (e[r] || [])[s] : e[c], x = v && v.v != null && (v.h || Gs(v.w || (Rr(v), v.w) || "")) || "", d = {};
      f > 1 && (d.rowspan = f), o > 1 && (d.colspan = o), n.editable ? x = '<span contenteditable="true">' + x + "</span>" : v && (d["data-t"] = v && v.t || "z", v.v != null && (d["data-v"] = v.v), v.z != null && (d["data-z"] = v.z), v.l && (v.l.Target || "#").charAt(0) != "#" && (x = '<a href="' + v.l.Target + '">' + x + "</a>")), d.id = (n.id || "sjs") + "-" + c, i.push(j("td", x, d));
    }
  }
  var E = "<tr>";
  return E + i.join("") + "</tr>";
}
var vu = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', pu = "</body></html>";
function mu(e, t, r) {
  var n = [];
  return n.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function ki(e, t) {
  var r = t || {}, n = r.header != null ? r.header : vu, a = r.footer != null ? r.footer : pu, i = [n], s = fr(e["!ref"]);
  r.dense = Array.isArray(e), i.push(mu(e, s, r));
  for (var f = s.s.r; f <= s.e.r; ++f)
    i.push(du(e, s, f, r));
  return i.push("</table>" + a), i.join("");
}
function Ri(e, t, r) {
  var n = r || {}, a = 0, i = 0;
  if (n.origin != null)
    if (typeof n.origin == "number")
      a = n.origin;
    else {
      var s = typeof n.origin == "string" ? Be(n.origin) : n.origin;
      a = s.r, i = s.c;
    }
  var f = t.getElementsByTagName("tr"), o = Math.min(n.sheetRows || 1e7, f.length), l = { s: { r: 0, c: 0 }, e: { r: a, c: i } };
  if (e["!ref"]) {
    var c = fr(e["!ref"]);
    l.s.r = Math.min(l.s.r, c.s.r), l.s.c = Math.min(l.s.c, c.s.c), l.e.r = Math.max(l.e.r, c.e.r), l.e.c = Math.max(l.e.c, c.e.c), a == -1 && (l.e.r = a = c.e.r + 1);
  }
  var v = [], x = 0, d = e["!rows"] || (e["!rows"] = []), E = 0, u = 0, _ = 0, O = 0, k = 0, y = 0;
  for (e["!cols"] || (e["!cols"] = []); E < f.length && u < o; ++E) {
    var M = f[E];
    if (ta(M)) {
      if (n.display)
        continue;
      d[u] = { hidden: !0 };
    }
    var Y = M.children;
    for (_ = O = 0; _ < Y.length; ++_) {
      var ee = Y[_];
      if (!(n.display && ta(ee))) {
        var C = ee.hasAttribute("data-v") ? ee.getAttribute("data-v") : ee.hasAttribute("v") ? ee.getAttribute("v") : js(ee.innerHTML), U = ee.getAttribute("data-z") || ee.getAttribute("z");
        for (x = 0; x < v.length; ++x) {
          var L = v[x];
          L.s.c == O + i && L.s.r < u + a && u + a <= L.e.r && (O = L.e.c + 1 - i, x = -1);
        }
        y = +ee.getAttribute("colspan") || 1, ((k = +ee.getAttribute("rowspan") || 1) > 1 || y > 1) && v.push({ s: { r: u + a, c: O + i }, e: { r: u + a + (k || 1) - 1, c: O + i + (y || 1) - 1 } });
        var V = { t: "s", v: C }, G = ee.getAttribute("data-t") || ee.getAttribute("t") || "";
        C != null && (C.length == 0 ? V.t = G || "z" : n.raw || C.trim().length == 0 || G == "s" || (C === "TRUE" ? V = { t: "b", v: !0 } : C === "FALSE" ? V = { t: "b", v: !1 } : isNaN(Or(C)) ? isNaN(Nt(C).getDate()) || (V = { t: "d", v: qe(C) }, n.cellDates || (V = { t: "n", v: er(V.v) }), V.z = n.dateNF || De[14]) : V = { t: "n", v: Or(C) })), V.z === void 0 && U != null && (V.z = U);
        var K = "", re = ee.getElementsByTagName("A");
        if (re && re.length)
          for (var _e = 0; _e < re.length && !(re[_e].hasAttribute("href") && (K = re[_e].getAttribute("href"), K.charAt(0) != "#")); ++_e)
            ;
        K && K.charAt(0) != "#" && (V.l = { Target: K }), n.dense ? (e[u + a] || (e[u + a] = []), e[u + a][O + i] = V) : e[ge({ c: O + i, r: u + a })] = V, l.e.c < O + i && (l.e.c = O + i), O += y;
      }
    }
    ++u;
  }
  return v.length && (e["!merges"] = (e["!merges"] || []).concat(v)), l.e.r = Math.max(l.e.r, u - 1 + a), e["!ref"] = Ie(l), u >= o && (e["!fullref"] = Ie((l.e.r = f.length - E + u - 1 + a, l))), e;
}
function Ii(e, t) {
  var r = t || {}, n = r.dense ? [] : {};
  return Ri(n, e, t);
}
function gu(e, t) {
  return Zr(Ii(e, t), t);
}
function ta(e) {
  var t = "", r = _u(e);
  return r && (t = r(e).getPropertyValue("display")), t || (t = e.style && e.style.display), t === "none";
}
function _u(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
var Tu = /* @__PURE__ */ function() {
  var e = [
    "<office:master-styles>",
    '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
    "<style:header/>",
    '<style:header-left style:display="false"/>',
    "<style:footer/>",
    '<style:footer-left style:display="false"/>',
    "</style:master-page>",
    "</office:master-styles>"
  ].join(""), t = "<office:document-styles " + Pt({
    "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
    "office:version": "1.2"
  }) + ">" + e + "</office:document-styles>";
  return function() {
    return Ne + t;
  };
}(), na = /* @__PURE__ */ function() {
  var e = function(i) {
    return me(i).replace(/  +/g, function(s) {
      return '<text:s text:c="' + s.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }, t = `          <table:table-cell />
`, r = `          <table:covered-table-cell/>
`, n = function(i, s, f) {
    var o = [];
    o.push('      <table:table table:name="' + me(s.SheetNames[f]) + `" table:style-name="ta1">
`);
    var l = 0, c = 0, v = fr(i["!ref"] || "A1"), x = i["!merges"] || [], d = 0, E = Array.isArray(i);
    if (i["!cols"])
      for (c = 0; c <= v.e.c; ++c)
        o.push("        <table:table-column" + (i["!cols"][c] ? ' table:style-name="co' + i["!cols"][c].ods + '"' : "") + `></table:table-column>
`);
    var u = "", _ = i["!rows"] || [];
    for (l = 0; l < v.s.r; ++l)
      u = _[l] ? ' table:style-name="ro' + _[l].ods + '"' : "", o.push("        <table:table-row" + u + `></table:table-row>
`);
    for (; l <= v.e.r; ++l) {
      for (u = _[l] ? ' table:style-name="ro' + _[l].ods + '"' : "", o.push("        <table:table-row" + u + `>
`), c = 0; c < v.s.c; ++c)
        o.push(t);
      for (; c <= v.e.c; ++c) {
        var O = !1, k = {}, y = "";
        for (d = 0; d != x.length; ++d)
          if (!(x[d].s.c > c) && !(x[d].s.r > l) && !(x[d].e.c < c) && !(x[d].e.r < l)) {
            (x[d].s.c != c || x[d].s.r != l) && (O = !0), k["table:number-columns-spanned"] = x[d].e.c - x[d].s.c + 1, k["table:number-rows-spanned"] = x[d].e.r - x[d].s.r + 1;
            break;
          }
        if (O) {
          o.push(r);
          continue;
        }
        var M = ge({ r: l, c }), Y = E ? (i[l] || [])[c] : i[M];
        if (Y && Y.f && (k["table:formula"] = me(Wc(Y.f)), Y.F && Y.F.slice(0, M.length) == M)) {
          var ee = fr(Y.F);
          k["table:number-matrix-columns-spanned"] = ee.e.c - ee.s.c + 1, k["table:number-matrix-rows-spanned"] = ee.e.r - ee.s.r + 1;
        }
        if (!Y) {
          o.push(t);
          continue;
        }
        switch (Y.t) {
          case "b":
            y = Y.v ? "TRUE" : "FALSE", k["office:value-type"] = "boolean", k["office:boolean-value"] = Y.v ? "true" : "false";
            break;
          case "n":
            y = Y.w || String(Y.v || 0), k["office:value-type"] = "float", k["office:value"] = Y.v || 0;
            break;
          case "s":
          case "str":
            y = Y.v == null ? "" : Y.v, k["office:value-type"] = "string";
            break;
          case "d":
            y = Y.w || qe(Y.v).toISOString(), k["office:value-type"] = "date", k["office:date-value"] = qe(Y.v).toISOString(), k["table:style-name"] = "ce1";
            break;
          default:
            o.push(t);
            continue;
        }
        var C = e(y);
        if (Y.l && Y.l.Target) {
          var U = Y.l.Target;
          U = U.charAt(0) == "#" ? "#" + Hc(U.slice(1)) : U, U.charAt(0) != "#" && !U.match(/^\w+:/) && (U = "../" + U), C = j("text:a", C, { "xlink:href": U.replace(/&/g, "&amp;") });
        }
        o.push("          " + j("table:table-cell", j("text:p", C, {}), k) + `
`);
      }
      o.push(`        </table:table-row>
`);
    }
    return o.push(`      </table:table>
`), o.join("");
  }, a = function(i, s) {
    i.push(` <office:automatic-styles>
`), i.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`), i.push(`   <number:month number:style="long"/>
`), i.push(`   <number:text>/</number:text>
`), i.push(`   <number:day number:style="long"/>
`), i.push(`   <number:text>/</number:text>
`), i.push(`   <number:year/>
`), i.push(`  </number:date-style>
`);
    var f = 0;
    s.SheetNames.map(function(l) {
      return s.Sheets[l];
    }).forEach(function(l) {
      if (l && l["!cols"]) {
        for (var c = 0; c < l["!cols"].length; ++c)
          if (l["!cols"][c]) {
            var v = l["!cols"][c];
            if (v.width == null && v.wpx == null && v.wch == null)
              continue;
            r0(v), v.ods = f;
            var x = l["!cols"][c].wpx + "px";
            i.push('  <style:style style:name="co' + f + `" style:family="table-column">
`), i.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + x + `"/>
`), i.push(`  </style:style>
`), ++f;
          }
      }
    });
    var o = 0;
    s.SheetNames.map(function(l) {
      return s.Sheets[l];
    }).forEach(function(l) {
      if (l && l["!rows"]) {
        for (var c = 0; c < l["!rows"].length; ++c)
          if (l["!rows"][c]) {
            l["!rows"][c].ods = o;
            var v = l["!rows"][c].hpx + "px";
            i.push('  <style:style style:name="ro' + o + `" style:family="table-row">
`), i.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + v + `"/>
`), i.push(`  </style:style>
`), ++o;
          }
      }
    }), i.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`), i.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`), i.push(`  </style:style>
`), i.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`), i.push(` </office:automatic-styles>
`);
  };
  return function(s, f) {
    var o = [Ne], l = Pt({
      "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
      "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
      "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
      "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
      "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
      "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
      "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
      "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
      "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
      "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
      "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
      "xmlns:math": "http://www.w3.org/1998/Math/MathML",
      "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
      "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
      "xmlns:ooo": "http://openoffice.org/2004/office",
      "xmlns:ooow": "http://openoffice.org/2004/writer",
      "xmlns:oooc": "http://openoffice.org/2004/calc",
      "xmlns:dom": "http://www.w3.org/2001/xml-events",
      "xmlns:xforms": "http://www.w3.org/2002/xforms",
      "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
      "xmlns:rpt": "http://openoffice.org/2005/report",
      "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
      "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
      "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
      "xmlns:tableooo": "http://openoffice.org/2009/table",
      "xmlns:drawooo": "http://openoffice.org/2010/draw",
      "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
      "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
      "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
      "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
      "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
      "office:version": "1.2"
    }), c = Pt({
      "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
      "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
    });
    f.bookType == "fods" ? (o.push("<office:document" + l + c + `>
`), o.push(ja().replace(/office:document-meta/g, "office:meta"))) : o.push("<office:document-content" + l + `>
`), a(o, s), o.push(`  <office:body>
`), o.push(`    <office:spreadsheet>
`);
    for (var v = 0; v != s.SheetNames.length; ++v)
      o.push(n(s.Sheets[s.SheetNames[v]], s, v));
    return o.push(`    </office:spreadsheet>
`), o.push(`  </office:body>
`), f.bookType == "fods" ? o.push("</office:document>") : o.push("</office:document-content>"), o.join("");
  };
}();
function Ni(e, t) {
  if (t.bookType == "fods")
    return na(e, t);
  var r = Xn(), n = "", a = [], i = [];
  return n = "mimetype", ce(r, n, "application/vnd.oasis.opendocument.spreadsheet"), n = "content.xml", ce(r, n, na(e, t)), a.push([n, "text/xml"]), i.push([n, "ContentFile"]), n = "styles.xml", ce(r, n, Tu(e, t)), a.push([n, "text/xml"]), i.push([n, "StylesFile"]), n = "meta.xml", ce(r, n, Ne + ja(
    /*::wb, opts*/
  )), a.push([n, "text/xml"]), i.push([n, "MetadataFile"]), n = "manifest.rdf", ce(r, n, Rf(
    i
    /*, opts*/
  )), a.push([n, "application/rdf+xml"]), n = "META-INF/manifest.xml", ce(r, n, Df(
    a
    /*, opts*/
  )), r;
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
function xn(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Eu(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : pr(yr(e));
}
function wu(e, t) {
  e:
    for (var r = 0; r <= e.length - t.length; ++r) {
      for (var n = 0; n < t.length; ++n)
        if (e[r + n] != t[n])
          continue e;
      return !0;
    }
  return !1;
}
function Wr(e) {
  var t = e.reduce(function(a, i) {
    return a + i.length;
  }, 0), r = new Uint8Array(t), n = 0;
  return e.forEach(function(a) {
    r.set(a, n), n += a.length;
  }), r;
}
function Su(e, t, r) {
  var n = Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20, a = r / Math.pow(10, n - 6176);
  e[t + 15] |= n >> 7, e[t + 14] |= (n & 127) << 1;
  for (var i = 0; a >= 1; ++i, a /= 256)
    e[t + i] = a & 255;
  e[t + 15] |= r >= 0 ? 0 : 128;
}
function Lt(e, t) {
  var r = t ? t[0] : 0, n = e[r] & 127;
  e:
    if (e[r++] >= 128 && (n |= (e[r] & 127) << 7, e[r++] < 128 || (n |= (e[r] & 127) << 14, e[r++] < 128) || (n |= (e[r] & 127) << 21, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128)))
      break e;
  return t && (t[0] = r), n;
}
function ve(e) {
  var t = new Uint8Array(7);
  t[0] = e & 127;
  var r = 1;
  e:
    if (e > 127) {
      if (t[r - 1] |= 128, t[r] = e >> 7 & 127, ++r, e <= 16383 || (t[r - 1] |= 128, t[r] = e >> 14 & 127, ++r, e <= 2097151) || (t[r - 1] |= 128, t[r] = e >> 21 & 127, ++r, e <= 268435455) || (t[r - 1] |= 128, t[r] = e / 256 >>> 21 & 127, ++r, e <= 34359738367) || (t[r - 1] |= 128, t[r] = e / 65536 >>> 21 & 127, ++r, e <= 4398046511103))
        break e;
      t[r - 1] |= 128, t[r] = e / 16777216 >>> 21 & 127, ++r;
    }
  return t.slice(0, r);
}
function ut(e) {
  var t = 0, r = e[t] & 127;
  e:
    if (e[t++] >= 128) {
      if (r |= (e[t] & 127) << 7, e[t++] < 128 || (r |= (e[t] & 127) << 14, e[t++] < 128) || (r |= (e[t] & 127) << 21, e[t++] < 128))
        break e;
      r |= (e[t] & 127) << 28;
    }
  return r;
}
function Pe(e) {
  for (var t = [], r = [0]; r[0] < e.length; ) {
    var n = r[0], a = Lt(e, r), i = a & 7;
    a = Math.floor(a / 8);
    var s = 0, f;
    if (a == 0)
      break;
    switch (i) {
      case 0:
        {
          for (var o = r[0]; e[r[0]++] >= 128; )
            ;
          f = e.slice(o, r[0]);
        }
        break;
      case 5:
        s = 4, f = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 1:
        s = 8, f = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 2:
        s = Lt(e, r), f = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 3:
      case 4:
      default:
        throw new Error("PB Type ".concat(i, " for Field ").concat(a, " at offset ").concat(n));
    }
    var l = { data: f, type: i };
    t[a] == null ? t[a] = [l] : t[a].push(l);
  }
  return t;
}
function We(e) {
  var t = [];
  return e.forEach(function(r, n) {
    r.forEach(function(a) {
      a.data && (t.push(ve(n * 8 + a.type)), a.type == 2 && t.push(ve(a.data.length)), t.push(a.data));
    });
  }), Wr(t);
}
function dr(e) {
  for (var t, r = [], n = [0]; n[0] < e.length; ) {
    var a = Lt(e, n), i = Pe(e.slice(n[0], n[0] + a));
    n[0] += a;
    var s = {
      id: ut(i[1][0].data),
      messages: []
    };
    i[2].forEach(function(f) {
      var o = Pe(f.data), l = ut(o[3][0].data);
      s.messages.push({
        meta: o,
        data: e.slice(n[0], n[0] + l)
      }), n[0] += l;
    }), (t = i[3]) != null && t[0] && (s.merge = ut(i[3][0].data) >>> 0 > 0), r.push(s);
  }
  return r;
}
function it(e) {
  var t = [];
  return e.forEach(function(r) {
    var n = [];
    n[1] = [{ data: ve(r.id), type: 0 }], n[2] = [], r.merge != null && (n[3] = [{ data: ve(+!!r.merge), type: 0 }]);
    var a = [];
    r.messages.forEach(function(s) {
      a.push(s.data), s.meta[3] = [{ type: 0, data: ve(s.data.length) }], n[2].push({ data: We(s.meta), type: 2 });
    });
    var i = We(n);
    t.push(ve(i.length)), t.push(i), a.forEach(function(s) {
      return t.push(s);
    });
  }), Wr(t);
}
function Au(e, t) {
  if (e != 0)
    throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], n = Lt(t, r), a = []; r[0] < t.length; ) {
    var i = t[r[0]] & 3;
    if (i == 0) {
      var s = t[r[0]++] >> 2;
      if (s < 60)
        ++s;
      else {
        var f = s - 59;
        s = t[r[0]], f > 1 && (s |= t[r[0] + 1] << 8), f > 2 && (s |= t[r[0] + 2] << 16), f > 3 && (s |= t[r[0] + 3] << 24), s >>>= 0, s++, r[0] += f;
      }
      a.push(t.slice(r[0], r[0] + s)), r[0] += s;
      continue;
    } else {
      var o = 0, l = 0;
      if (i == 1 ? (l = (t[r[0]] >> 2 & 7) + 4, o = (t[r[0]++] & 224) << 3, o |= t[r[0]++]) : (l = (t[r[0]++] >> 2) + 1, i == 2 ? (o = t[r[0]] | t[r[0] + 1] << 8, r[0] += 2) : (o = (t[r[0]] | t[r[0] + 1] << 8 | t[r[0] + 2] << 16 | t[r[0] + 3] << 24) >>> 0, r[0] += 4)), a = [Wr(a)], o == 0)
        throw new Error("Invalid offset 0");
      if (o > a[0].length)
        throw new Error("Invalid offset beyond length");
      if (l >= o)
        for (a.push(a[0].slice(-o)), l -= o; l >= a[a.length - 1].length; )
          a.push(a[a.length - 1]), l -= a[a.length - 1].length;
      a.push(a[0].slice(-o, -o + l));
    }
  }
  var c = Wr(a);
  if (c.length != n)
    throw new Error("Unexpected length: ".concat(c.length, " != ").concat(n));
  return c;
}
function vr(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = e[r++], a = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3, t.push(Au(n, e.slice(r, r + a))), r += a;
  }
  if (r !== e.length)
    throw new Error("data is not a valid framed stream!");
  return Wr(t);
}
function st(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = Math.min(e.length - r, 268435455), a = new Uint8Array(4);
    t.push(a);
    var i = ve(n), s = i.length;
    t.push(i), n <= 60 ? (s++, t.push(new Uint8Array([n - 1 << 2]))) : n <= 256 ? (s += 2, t.push(new Uint8Array([240, n - 1 & 255]))) : n <= 65536 ? (s += 3, t.push(new Uint8Array([244, n - 1 & 255, n - 1 >> 8 & 255]))) : n <= 16777216 ? (s += 4, t.push(new Uint8Array([248, n - 1 & 255, n - 1 >> 8 & 255, n - 1 >> 16 & 255]))) : n <= 4294967296 && (s += 5, t.push(new Uint8Array([252, n - 1 & 255, n - 1 >> 8 & 255, n - 1 >> 16 & 255, n - 1 >>> 24 & 255]))), t.push(e.slice(r, r + n)), s += n, a[0] = 0, a[1] = s & 255, a[2] = s >> 8 & 255, a[3] = s >> 16 & 255, r += n;
  }
  return Wr(t);
}
function Pn(e, t) {
  var r = new Uint8Array(32), n = xn(r), a = 12, i = 0;
  switch (r[0] = 5, e.t) {
    case "n":
      r[1] = 2, Su(r, a, e.v), i |= 1, a += 16;
      break;
    case "b":
      r[1] = 6, n.setFloat64(a, e.v ? 1 : 0, !0), i |= 2, a += 8;
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      r[1] = 3, n.setUint32(a, t.indexOf(e.v), !0), i |= 8, a += 4;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return n.setUint32(8, i, !0), r.slice(0, a);
}
function Ln(e, t) {
  var r = new Uint8Array(32), n = xn(r), a = 12, i = 0;
  switch (r[0] = 3, e.t) {
    case "n":
      r[2] = 2, n.setFloat64(a, e.v, !0), i |= 32, a += 8;
      break;
    case "b":
      r[2] = 6, n.setFloat64(a, e.v ? 1 : 0, !0), i |= 32, a += 8;
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      r[2] = 3, n.setUint32(a, t.indexOf(e.v), !0), i |= 16, a += 4;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return n.setUint32(4, i, !0), r.slice(0, a);
}
function Lr(e) {
  var t = Pe(e);
  return Lt(t[1][0].data);
}
function Fu(e, t, r) {
  var n, a, i, s;
  if (!((n = e[6]) != null && n[0]) || !((a = e[7]) != null && a[0]))
    throw "Mutation only works on post-BNC storages!";
  var f = ((s = (i = e[8]) == null ? void 0 : i[0]) == null ? void 0 : s.data) && ut(e[8][0].data) > 0 || !1;
  if (f)
    throw "Math only works with normal offsets";
  for (var o = 0, l = xn(e[7][0].data), c = 0, v = [], x = xn(e[4][0].data), d = 0, E = [], u = 0; u < t.length; ++u) {
    if (t[u] == null) {
      l.setUint16(u * 2, 65535, !0), x.setUint16(u * 2, 65535);
      continue;
    }
    l.setUint16(u * 2, c, !0), x.setUint16(u * 2, d, !0);
    var _, O;
    switch (typeof t[u]) {
      case "string":
        _ = Pn({ t: "s", v: t[u] }, r), O = Ln({ t: "s", v: t[u] }, r);
        break;
      case "number":
        _ = Pn({ t: "n", v: t[u] }, r), O = Ln({ t: "n", v: t[u] }, r);
        break;
      case "boolean":
        _ = Pn({ t: "b", v: t[u] }, r), O = Ln({ t: "b", v: t[u] }, r);
        break;
      default:
        throw new Error("Unsupported value " + t[u]);
    }
    v.push(_), c += _.length, E.push(O), d += O.length, ++o;
  }
  for (e[2][0].data = ve(o); u < e[7][0].data.length / 2; ++u)
    l.setUint16(u * 2, 65535, !0), x.setUint16(u * 2, 65535, !0);
  return e[6][0].data = Wr(v), e[3][0].data = Wr(E), o;
}
function yu(e, t) {
  if (!t || !t.numbers)
    throw new Error("Must pass a `numbers` option -- check the README");
  var r = e.Sheets[e.SheetNames[0]];
  e.SheetNames.length > 1 && console.error("The Numbers writer currently writes only the first table");
  var n = fr(r["!ref"]);
  n.s.r = n.s.c = 0;
  var a = !1;
  n.e.c > 9 && (a = !0, n.e.c = 9), n.e.r > 49 && (a = !0, n.e.r = 49), a && console.error("The Numbers writer is currently limited to ".concat(Ie(n)));
  var i = dn(r, { range: n, header: 1 }), s = ["~Sh33tJ5~"];
  i.forEach(function(P) {
    return P.forEach(function(F) {
      typeof F == "string" && s.push(F);
    });
  });
  var f = {}, o = [], l = Te.read(t.numbers, { type: "base64" });
  l.FileIndex.map(function(P, F) {
    return [P, l.FullPaths[F]];
  }).forEach(function(P) {
    var F = P[0], A = P[1];
    if (F.type == 2 && F.name.match(/\.iwa/)) {
      var H = F.content, ie = vr(H), se = dr(ie);
      se.forEach(function(ae) {
        o.push(ae.id), f[ae.id] = { deps: [], location: A, type: ut(ae.messages[0].meta[1][0].data) };
      });
    }
  }), o.sort(function(P, F) {
    return P - F;
  });
  var c = o.filter(function(P) {
    return P > 1;
  }).map(function(P) {
    return [P, ve(P)];
  });
  l.FileIndex.map(function(P, F) {
    return [P, l.FullPaths[F]];
  }).forEach(function(P) {
    var F = P[0];
    if (P[1], !!F.name.match(/\.iwa/)) {
      var A = dr(vr(F.content));
      A.forEach(function(H) {
        H.messages.forEach(function(ie) {
          c.forEach(function(se) {
            H.messages.some(function(ae) {
              return ut(ae.meta[1][0].data) != 11006 && wu(ae.data, se[1]);
            }) && f[se[0]].deps.push(H.id);
          });
        });
      });
    }
  });
  for (var v = Te.find(l, f[1].location), x = dr(vr(v.content)), d, E = 0; E < x.length; ++E) {
    var u = x[E];
    u.id == 1 && (d = u);
  }
  var _ = Lr(Pe(d.messages[0].data)[1][0].data);
  for (v = Te.find(l, f[_].location), x = dr(vr(v.content)), E = 0; E < x.length; ++E)
    u = x[E], u.id == _ && (d = u);
  for (_ = Lr(Pe(d.messages[0].data)[2][0].data), v = Te.find(l, f[_].location), x = dr(vr(v.content)), E = 0; E < x.length; ++E)
    u = x[E], u.id == _ && (d = u);
  for (_ = Lr(Pe(d.messages[0].data)[2][0].data), v = Te.find(l, f[_].location), x = dr(vr(v.content)), E = 0; E < x.length; ++E)
    u = x[E], u.id == _ && (d = u);
  var O = Pe(d.messages[0].data);
  {
    O[6][0].data = ve(n.e.r + 1), O[7][0].data = ve(n.e.c + 1);
    var k = Lr(O[46][0].data), y = Te.find(l, f[k].location), M = dr(vr(y.content));
    {
      for (var Y = 0; Y < M.length && M[Y].id != k; ++Y)
        ;
      if (M[Y].id != k)
        throw "Bad ColumnRowUIDMapArchive";
      var ee = Pe(M[Y].messages[0].data);
      ee[1] = [], ee[2] = [], ee[3] = [];
      for (var C = 0; C <= n.e.c; ++C) {
        var U = [];
        U[1] = U[2] = [{ type: 0, data: ve(C + 420690) }], ee[1].push({ type: 2, data: We(U) }), ee[2].push({ type: 0, data: ve(C) }), ee[3].push({ type: 0, data: ve(C) });
      }
      ee[4] = [], ee[5] = [], ee[6] = [];
      for (var L = 0; L <= n.e.r; ++L)
        U = [], U[1] = U[2] = [{ type: 0, data: ve(L + 726270) }], ee[4].push({ type: 2, data: We(U) }), ee[5].push({ type: 0, data: ve(L) }), ee[6].push({ type: 0, data: ve(L) });
      M[Y].messages[0].data = We(ee);
    }
    y.content = st(it(M)), y.size = y.content.length, delete O[46];
    var V = Pe(O[4][0].data);
    {
      V[7][0].data = ve(n.e.r + 1);
      var G = Pe(V[1][0].data), K = Lr(G[2][0].data);
      y = Te.find(l, f[K].location), M = dr(vr(y.content));
      {
        if (M[0].id != K)
          throw "Bad HeaderStorageBucket";
        var re = Pe(M[0].messages[0].data);
        for (L = 0; L < i.length; ++L) {
          var _e = Pe(re[2][0].data);
          _e[1][0].data = ve(L), _e[4][0].data = ve(i[L].length), re[2][L] = { type: re[2][0].type, data: We(_e) };
        }
        M[0].messages[0].data = We(re);
      }
      y.content = st(it(M)), y.size = y.content.length;
      var oe = Lr(V[2][0].data);
      y = Te.find(l, f[oe].location), M = dr(vr(y.content));
      {
        if (M[0].id != oe)
          throw "Bad HeaderStorageBucket";
        for (re = Pe(M[0].messages[0].data), C = 0; C <= n.e.c; ++C)
          _e = Pe(re[2][0].data), _e[1][0].data = ve(C), _e[4][0].data = ve(n.e.r + 1), re[2][C] = { type: re[2][0].type, data: We(_e) };
        M[0].messages[0].data = We(re);
      }
      y.content = st(it(M)), y.size = y.content.length;
      var Ue = Lr(V[4][0].data);
      (function() {
        for (var P = Te.find(l, f[Ue].location), F = dr(vr(P.content)), A, H = 0; H < F.length; ++H) {
          var ie = F[H];
          ie.id == Ue && (A = ie);
        }
        var se = Pe(A.messages[0].data);
        {
          se[3] = [];
          var ae = [];
          s.forEach(function(he, $e) {
            ae[1] = [{ type: 0, data: ve($e) }], ae[2] = [{ type: 0, data: ve(1) }], ae[3] = [{ type: 2, data: Eu(he) }], se[3].push({ type: 2, data: We(ae) });
          });
        }
        A.messages[0].data = We(se);
        var q = it(F), Ee = st(q);
        P.content = Ee, P.size = P.content.length;
      })();
      var ke = Pe(V[3][0].data);
      {
        var xr = ke[1][0];
        delete ke[2];
        var Le = Pe(xr.data);
        {
          var lr = Lr(Le[2][0].data);
          (function() {
            for (var P = Te.find(l, f[lr].location), F = dr(vr(P.content)), A, H = 0; H < F.length; ++H) {
              var ie = F[H];
              ie.id == lr && (A = ie);
            }
            var se = Pe(A.messages[0].data);
            {
              delete se[6], delete ke[7];
              var ae = new Uint8Array(se[5][0].data);
              se[5] = [];
              for (var q = 0, Ee = 0; Ee <= n.e.r; ++Ee) {
                var he = Pe(ae);
                q += Fu(he, i[Ee], s), he[1][0].data = ve(Ee), se[5].push({ data: We(he), type: 2 });
              }
              se[1] = [{ type: 0, data: ve(n.e.c + 1) }], se[2] = [{ type: 0, data: ve(n.e.r + 1) }], se[3] = [{ type: 0, data: ve(q) }], se[4] = [{ type: 0, data: ve(n.e.r + 1) }];
            }
            A.messages[0].data = We(se);
            var $e = it(F), de = st($e);
            P.content = de, P.size = P.content.length;
          })();
        }
        xr.data = We(Le);
      }
      V[3][0].data = We(ke);
    }
    O[4][0].data = We(V);
  }
  d.messages[0].data = We(O);
  var tr = it(x), S = st(tr);
  return v.content = S, v.size = v.content.length, l;
}
function Cu(e) {
  return function(r) {
    for (var n = 0; n != e.length; ++n) {
      var a = e[n];
      r[a[0]] === void 0 && (r[a[0]] = a[1]), a[2] === "n" && (r[a[0]] = Number(r[a[0]]));
    }
  };
}
function s0(e) {
  Cu([
    ["cellDates", !1],
    /* write date cells with type `d` */
    ["bookSST", !1],
    /* Generate Shared String Table */
    ["bookType", "xlsx"],
    /* Type of workbook (xlsx/m/b) */
    ["compression", !1],
    /* Use file compression */
    ["WTF", !1]
    /* WTF mode (throws errors) */
  ])(e);
}
function Ou(e, t) {
  return t.bookType == "ods" ? Ni(e, t) : t.bookType == "numbers" ? yu(e, t) : t.bookType == "xlsb" ? Du(e, t) : ku(e, t);
}
function Du(e, t) {
  lt = 1024, e && !e.SSF && (e.SSF = rr(De)), e && e.SSF && (mn(), pn(e.SSF), t.revssf = gn(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = /*::((*/
  [], t.Strings.Count = 0, t.Strings.Unique = 0, kt ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = t.bookType == "xlsb" ? "bin" : "xml", n = vi.indexOf(t.bookType) > -1, a = Xa();
  s0(t = t || {});
  var i = Xn(), s = "", f = 0;
  if (t.cellXfs = [], Hr(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", ce(i, s, Ya(e.Props, t)), a.coreprops.push(s), pe(t.rels, 2, s, ue.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames))
    if (!e.Workbook || !e.Workbook.Sheets)
      e.Props.SheetNames = e.SheetNames;
    else {
      for (var o = [], l = 0; l < e.SheetNames.length; ++l)
        (e.Workbook.Sheets[l] || {}).Hidden != 2 && o.push(e.SheetNames[l]);
      e.Props.SheetNames = o;
    }
  for (e.Props.Worksheets = e.Props.SheetNames.length, ce(i, s, Ja(e.Props)), a.extprops.push(s), pe(t.rels, 3, s, ue.EXT_PROPS), e.Custprops !== e.Props && Ke(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", ce(i, s, Za(e.Custprops)), a.custprops.push(s), pe(t.rels, 4, s, ue.CUST_PROPS)), f = 1; f <= e.SheetNames.length; ++f) {
    var c = { "!id": {} }, v = e.Sheets[e.SheetNames[f - 1]], x = (v || {})["!type"] || "sheet";
    switch (x) {
      case "chart":
      default:
        s = "xl/worksheets/sheet" + f + "." + r, ce(i, s, I1(f - 1, s, t, e, c)), a.sheets.push(s), pe(t.wbrels, -1, "worksheets/sheet" + f + "." + r, ue.WS[0]);
    }
    if (v) {
      var d = v["!comments"], E = !1, u = "";
      d && d.length > 0 && (u = "xl/comments" + f + "." + r, ce(i, u, L1(d, u)), a.comments.push(u), pe(c, -1, "../comments" + f + "." + r, ue.CMNT), E = !0), v["!legacy"] && E && ce(i, "xl/drawings/vmlDrawing" + f + ".vml", xi(f, v["!comments"])), delete v["!comments"], delete v["!legacy"];
    }
    c["!id"].rId1 && ce(i, za(s), ct(c));
  }
  return t.Strings != null && t.Strings.length > 0 && (s = "xl/sharedStrings." + r, ce(i, s, P1(t.Strings, s, t)), a.strs.push(s), pe(t.wbrels, -1, "sharedStrings." + r, ue.SST)), s = "xl/workbook." + r, ce(i, s, R1(e, s)), a.workbooks.push(s), pe(t.rels, 1, s, ue.WB), s = "xl/theme/theme1.xml", ce(i, s, hi(e.Themes, t)), a.themes.push(s), pe(t.wbrels, -1, "theme/theme1.xml", ue.THEME), s = "xl/styles." + r, ce(i, s, N1(e, s, t)), a.styles.push(s), pe(t.wbrels, -1, "styles." + r, ue.STY), e.vbaraw && n && (s = "xl/vbaProject.bin", ce(i, s, e.vbaraw), a.vba.push(s), pe(t.wbrels, -1, "vbaProject.bin", ue.VBA)), s = "xl/metadata." + r, ce(i, s, M1(s)), a.metadata.push(s), pe(t.wbrels, -1, "metadata." + r, ue.XLMETA), ce(i, "[Content_Types].xml", Ka(a, t)), ce(i, "_rels/.rels", ct(t.rels)), ce(i, "xl/_rels/workbook." + r + ".rels", ct(t.wbrels)), delete t.revssf, delete t.ssf, i;
}
function ku(e, t) {
  lt = 1024, e && !e.SSF && (e.SSF = rr(De)), e && e.SSF && (mn(), pn(e.SSF), t.revssf = gn(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = /*::((*/
  [], t.Strings.Count = 0, t.Strings.Unique = 0, kt ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = "xml", n = vi.indexOf(t.bookType) > -1, a = Xa();
  s0(t = t || {});
  var i = Xn(), s = "", f = 0;
  if (t.cellXfs = [], Hr(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", ce(i, s, Ya(e.Props, t)), a.coreprops.push(s), pe(t.rels, 2, s, ue.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames))
    if (!e.Workbook || !e.Workbook.Sheets)
      e.Props.SheetNames = e.SheetNames;
    else {
      for (var o = [], l = 0; l < e.SheetNames.length; ++l)
        (e.Workbook.Sheets[l] || {}).Hidden != 2 && o.push(e.SheetNames[l]);
      e.Props.SheetNames = o;
    }
  e.Props.Worksheets = e.Props.SheetNames.length, ce(i, s, Ja(e.Props)), a.extprops.push(s), pe(t.rels, 3, s, ue.EXT_PROPS), e.Custprops !== e.Props && Ke(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", ce(i, s, Za(e.Custprops)), a.custprops.push(s), pe(t.rels, 4, s, ue.CUST_PROPS));
  var c = ["SheetJ5"];
  for (t.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var v = { "!id": {} }, x = e.Sheets[e.SheetNames[f - 1]], d = (x || {})["!type"] || "sheet";
    switch (d) {
      case "chart":
      default:
        s = "xl/worksheets/sheet" + f + "." + r, ce(i, s, Ai(f - 1, t, e, v)), a.sheets.push(s), pe(t.wbrels, -1, "worksheets/sheet" + f + "." + r, ue.WS[0]);
    }
    if (x) {
      var E = x["!comments"], u = !1, _ = "";
      if (E && E.length > 0) {
        var O = !1;
        E.forEach(function(k) {
          k[1].forEach(function(y) {
            y.T == !0 && (O = !0);
          });
        }), O && (_ = "xl/threadedComments/threadedComment" + f + "." + r, ce(i, _, so(E, c, t)), a.threadedcomments.push(_), pe(v, -1, "../threadedComments/threadedComment" + f + "." + r, ue.TCMNT)), _ = "xl/comments" + f + "." + r, ce(i, _, di(E)), a.comments.push(_), pe(v, -1, "../comments" + f + "." + r, ue.CMNT), u = !0;
      }
      x["!legacy"] && u && ce(i, "xl/drawings/vmlDrawing" + f + ".vml", xi(f, x["!comments"])), delete x["!comments"], delete x["!legacy"];
    }
    v["!id"].rId1 && ce(i, za(s), ct(v));
  }
  return t.Strings != null && t.Strings.length > 0 && (s = "xl/sharedStrings." + r, ce(i, s, ii(t.Strings, t)), a.strs.push(s), pe(t.wbrels, -1, "sharedStrings." + r, ue.SST)), s = "xl/workbook." + r, ce(i, s, Ci(e)), a.workbooks.push(s), pe(t.rels, 1, s, ue.WB), s = "xl/theme/theme1.xml", ce(i, s, hi(e.Themes, t)), a.themes.push(s), pe(t.wbrels, -1, "theme/theme1.xml", ue.THEME), s = "xl/styles." + r, ce(i, s, oi(e, t)), a.styles.push(s), pe(t.wbrels, -1, "styles." + r, ue.STY), e.vbaraw && n && (s = "xl/vbaProject.bin", ce(i, s, e.vbaraw), a.vba.push(s), pe(t.wbrels, -1, "vbaProject.bin", ue.VBA)), s = "xl/metadata." + r, ce(i, s, ui()), a.metadata.push(s), pe(t.wbrels, -1, "metadata." + r, ue.XLMETA), c.length > 1 && (s = "xl/persons/person.xml", ce(i, s, fo(c)), a.people.push(s), pe(t.wbrels, -1, "persons/person.xml", ue.PEOPLE)), ce(i, "[Content_Types].xml", Ka(a, t)), ce(i, "_rels/.rels", ct(t.rels)), ce(i, "xl/_rels/workbook." + r + ".rels", ct(t.wbrels)), delete t.revssf, delete t.ssf, i;
}
function Ru(e, t) {
  var r = "";
  switch ((t || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = kr(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (t && t.type || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function Pi(e, t) {
  switch (t.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      t.type = "";
      break;
    case "file":
      return bt(t.file, Te.write(e, { type: xe ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + t.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  return Te.write(e, t);
}
function Iu(e, t) {
  var r = rr(t || {}), n = Ou(e, r);
  return Nu(n, r);
}
function Nu(e, t) {
  var r = {}, n = xe ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
  if (t.compression && (r.compression = "DEFLATE"), t.password)
    r.type = n;
  else
    switch (t.type) {
      case "base64":
        r.type = "base64";
        break;
      case "binary":
        r.type = "string";
        break;
      case "string":
        throw new Error("'string' output type invalid for '" + t.bookType + "' files");
      case "buffer":
      case "file":
        r.type = n;
        break;
      default:
        throw new Error("Unrecognized type " + t.type);
    }
  var a = e.FullPaths ? Te.write(e, { fileType: "zip", type: (
    /*::(*/
    { nodebuffer: "buffer", string: "binary" }[r.type] || r.type
  ), compression: !!t.compression }) : e.generate(r);
  if (typeof Deno < "u" && typeof a == "string") {
    if (t.type == "binary" || t.type == "base64")
      return a;
    a = new Uint8Array(vn(a));
  }
  return t.password && typeof encrypt_agile < "u" ? Pi(encrypt_agile(a, t.password), t) : t.type === "file" ? bt(t.file, a) : t.type == "string" ? yt(
    /*::(*/
    a
    /*:: :any)*/
  ) : a;
}
function Pu(e, t) {
  var r = t || {}, n = J1(e, r);
  return Pi(n, r);
}
function Er(e, t, r) {
  r || (r = "");
  var n = r + e;
  switch (t.type) {
    case "base64":
      return It(yr(n));
    case "binary":
      return yr(n);
    case "string":
      return e;
    case "file":
      return bt(t.file, n, "utf8");
    case "buffer":
      return xe ? Ir(n, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(n) : Er(n, { type: "binary" }).split("").map(function(a) {
        return a.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function Lu(e, t) {
  switch (t.type) {
    case "base64":
      return It(e);
    case "binary":
      return e;
    case "string":
      return e;
    case "file":
      return bt(t.file, e, "binary");
    case "buffer":
      return xe ? Ir(e, "binary") : e.split("").map(function(r) {
        return r.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function Qt(e, t) {
  switch (t.type) {
    case "string":
    case "base64":
    case "binary":
      for (var r = "", n = 0; n < e.length; ++n)
        r += String.fromCharCode(e[n]);
      return t.type == "base64" ? It(r) : t.type == "string" ? yt(r) : r;
    case "file":
      return bt(t.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
}
function Li(e, t) {
  ss(), T1(e);
  var r = rr(t || {});
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), r.type == "array") {
    r.type = "binary";
    var n = Li(e, r);
    return r.type = "array", vn(n);
  }
  var a = 0;
  if (r.sheet && (typeof r.sheet == "number" ? a = r.sheet : a = e.SheetNames.indexOf(r.sheet), !e.SheetNames[a]))
    throw new Error("Sheet not found: " + r.sheet + " : " + typeof r.sheet);
  switch (r.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return Er(Y1(e, r), r);
    case "slk":
    case "sylk":
      return Er(pl.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "htm":
    case "html":
      return Er(ki(e.Sheets[e.SheetNames[a]], r), r);
    case "txt":
      return Lu(Mi(e.Sheets[e.SheetNames[a]], r), r);
    case "csv":
      return Er(f0(e.Sheets[e.SheetNames[a]], r), r, "\uFEFF");
    case "dif":
      return Er(ml.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "dbf":
      return Qt(vl.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "prn":
      return Er(gl.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "rtf":
      return Er(Fl.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "eth":
      return Er(ai.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "fods":
      return Er(Ni(e, r), r);
    case "wk1":
      return Qt(J0.sheet_to_wk1(e.Sheets[e.SheetNames[a]], r), r);
    case "wk3":
      return Qt(J0.book_to_wk3(e, r), r);
    case "biff2":
      r.biff || (r.biff = 2);
    case "biff3":
      r.biff || (r.biff = 3);
    case "biff4":
      return r.biff || (r.biff = 4), Qt(Di(e, r), r);
    case "biff5":
      r.biff || (r.biff = 5);
    case "biff8":
    case "xla":
    case "xls":
      return r.biff || (r.biff = 8), Pu(e, r);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return Iu(e, r);
    default:
      throw new Error("Unrecognized bookType |" + r.bookType + "|");
  }
}
function Mu(e) {
  if (!e.bookType) {
    var t = {
      xls: "biff8",
      htm: "html",
      slk: "sylk",
      socialcalc: "eth",
      Sh33tJS: "WTF"
    }, r = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
    r.match(/^\.[a-z]+$/) && (e.bookType = r.slice(1)), e.bookType = t[e.bookType] || e.bookType;
  }
}
function Bu(e, t, r) {
  var n = r || {};
  return n.type = "file", n.file = t, Mu(n), Li(e, n);
}
function bu(e, t, r, n, a, i, s, f) {
  var o = Xe(r), l = f.defval, c = f.raw || !Object.prototype.hasOwnProperty.call(f, "raw"), v = !0, x = a === 1 ? [] : {};
  if (a !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(x, "__rowNum__", { value: r, enumerable: !1 });
      } catch {
        x.__rowNum__ = r;
      }
    else
      x.__rowNum__ = r;
  if (!s || e[r])
    for (var d = t.s.c; d <= t.e.c; ++d) {
      var E = s ? e[r][d] : e[n[d] + o];
      if (E === void 0 || E.t === void 0) {
        if (l === void 0)
          continue;
        i[d] != null && (x[i[d]] = l);
        continue;
      }
      var u = E.v;
      switch (E.t) {
        case "z":
          if (u == null)
            break;
          continue;
        case "e":
          u = u == 0 ? null : void 0;
          break;
        case "s":
        case "d":
        case "b":
        case "n":
          break;
        default:
          throw new Error("unrecognized type " + E.t);
      }
      if (i[d] != null) {
        if (u == null)
          if (E.t == "e" && u === null)
            x[i[d]] = null;
          else if (l !== void 0)
            x[i[d]] = l;
          else if (c && u === null)
            x[i[d]] = null;
          else
            continue;
        else
          x[i[d]] = c && (E.t !== "n" || E.t === "n" && f.rawNumbers !== !1) ? u : Rr(E, u, f);
        u != null && (v = !1);
      }
    }
  return { row: x, isempty: v };
}
function dn(e, t) {
  if (e == null || e["!ref"] == null)
    return [];
  var r = { t: "n", v: 0 }, n = 0, a = 1, i = [], s = 0, f = "", o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, l = t || {}, c = l.range != null ? l.range : e["!ref"];
  switch (l.header === 1 ? n = 1 : l.header === "A" ? n = 2 : Array.isArray(l.header) ? n = 3 : l.header == null && (n = 0), typeof c) {
    case "string":
      o = we(c);
      break;
    case "number":
      o = we(e["!ref"]), o.s.r = c;
      break;
    default:
      o = c;
  }
  n > 0 && (a = 0);
  var v = Xe(o.s.r), x = [], d = [], E = 0, u = 0, _ = Array.isArray(e), O = o.s.r, k = 0, y = {};
  _ && !e[O] && (e[O] = []);
  var M = l.skipHidden && e["!cols"] || [], Y = l.skipHidden && e["!rows"] || [];
  for (k = o.s.c; k <= o.e.c; ++k)
    if (!(M[k] || {}).hidden)
      switch (x[k] = je(k), r = _ ? e[O][k] : e[x[k] + v], n) {
        case 1:
          i[k] = k - o.s.c;
          break;
        case 2:
          i[k] = x[k];
          break;
        case 3:
          i[k] = l.header[k - o.s.c];
          break;
        default:
          if (r == null && (r = { w: "__EMPTY", t: "s" }), f = s = Rr(r, null, l), u = y[s] || 0, !u)
            y[s] = 1;
          else {
            do
              f = s + "_" + u++;
            while (y[f]);
            y[s] = u, y[f] = 1;
          }
          i[k] = f;
      }
  for (O = o.s.r + a; O <= o.e.r; ++O)
    if (!(Y[O] || {}).hidden) {
      var ee = bu(e, o, O, x, n, i, _, l);
      (ee.isempty === !1 || (n === 1 ? l.blankrows !== !1 : l.blankrows)) && (d[E++] = ee.row);
    }
  return d.length = E, d;
}
var aa = /"/g;
function Uu(e, t, r, n, a, i, s, f) {
  for (var o = !0, l = [], c = "", v = Xe(r), x = t.s.c; x <= t.e.c; ++x)
    if (n[x]) {
      var d = f.dense ? (e[r] || [])[x] : e[n[x] + v];
      if (d == null)
        c = "";
      else if (d.v != null) {
        o = !1, c = "" + (f.rawNumbers && d.t == "n" ? d.v : Rr(d, null, f));
        for (var E = 0, u = 0; E !== c.length; ++E)
          if ((u = c.charCodeAt(E)) === a || u === i || u === 34 || f.forceQuotes) {
            c = '"' + c.replace(aa, '""') + '"';
            break;
          }
        c == "ID" && (c = '"ID"');
      } else
        d.f != null && !d.F ? (o = !1, c = "=" + d.f, c.indexOf(",") >= 0 && (c = '"' + c.replace(aa, '""') + '"')) : c = "";
      l.push(c);
    }
  return f.blankrows === !1 && o ? null : l.join(s);
}
function f0(e, t) {
  var r = [], n = t ?? {};
  if (e == null || e["!ref"] == null)
    return "";
  var a = we(e["!ref"]), i = n.FS !== void 0 ? n.FS : ",", s = i.charCodeAt(0), f = n.RS !== void 0 ? n.RS : `
`, o = f.charCodeAt(0), l = new RegExp((i == "|" ? "\\|" : i) + "+$"), c = "", v = [];
  n.dense = Array.isArray(e);
  for (var x = n.skipHidden && e["!cols"] || [], d = n.skipHidden && e["!rows"] || [], E = a.s.c; E <= a.e.c; ++E)
    (x[E] || {}).hidden || (v[E] = je(E));
  for (var u = 0, _ = a.s.r; _ <= a.e.r; ++_)
    (d[_] || {}).hidden || (c = Uu(e, a, _, v, s, o, i, n), c != null && (n.strip && (c = c.replace(l, "")), (c || n.blankrows !== !1) && r.push((u++ ? f : "") + c)));
  return delete n.dense, r.join("");
}
function Mi(e, t) {
  t || (t = {}), t.FS = "	", t.RS = `
`;
  var r = f0(e, t);
  return r;
}
function Wu(e) {
  var t = "", r, n = "";
  if (e == null || e["!ref"] == null)
    return [];
  var a = we(e["!ref"]), i = "", s = [], f, o = [], l = Array.isArray(e);
  for (f = a.s.c; f <= a.e.c; ++f)
    s[f] = je(f);
  for (var c = a.s.r; c <= a.e.r; ++c)
    for (i = Xe(c), f = a.s.c; f <= a.e.c; ++f)
      if (t = s[f] + i, r = l ? (e[c] || [])[f] : e[t], n = "", r !== void 0) {
        if (r.F != null) {
          if (t = r.F, !r.f)
            continue;
          n = r.f, t.indexOf(":") == -1 && (t = t + ":" + t);
        }
        if (r.f != null)
          n = r.f;
        else {
          if (r.t == "z")
            continue;
          if (r.t == "n" && r.v != null)
            n = "" + r.v;
          else if (r.t == "b")
            n = r.v ? "TRUE" : "FALSE";
          else if (r.w !== void 0)
            n = "'" + r.w;
          else {
            if (r.v === void 0)
              continue;
            r.t == "s" ? n = "'" + r.v : n = "" + r.v;
          }
        }
        o[o.length] = t + "=" + n;
      }
  return o;
}
function Bi(e, t, r) {
  var n = r || {}, a = +!n.skipHeader, i = e || {}, s = 0, f = 0;
  if (i && n.origin != null)
    if (typeof n.origin == "number")
      s = n.origin;
    else {
      var o = typeof n.origin == "string" ? Be(n.origin) : n.origin;
      s = o.r, f = o.c;
    }
  var l, c = { s: { c: 0, r: 0 }, e: { c: f, r: s + t.length - 1 + a } };
  if (i["!ref"]) {
    var v = we(i["!ref"]);
    c.e.c = Math.max(c.e.c, v.e.c), c.e.r = Math.max(c.e.r, v.e.r), s == -1 && (s = v.e.r + 1, c.e.r = s + t.length - 1 + a);
  } else
    s == -1 && (s = 0, c.e.r = t.length - 1 + a);
  var x = n.header || [], d = 0;
  t.forEach(function(u, _) {
    Ke(u).forEach(function(O) {
      (d = x.indexOf(O)) == -1 && (x[d = x.length] = O);
      var k = u[O], y = "z", M = "", Y = ge({ c: f + d, r: s + _ + a });
      l = Mt(i, Y), k && typeof k == "object" && !(k instanceof Date) ? i[Y] = k : (typeof k == "number" ? y = "n" : typeof k == "boolean" ? y = "b" : typeof k == "string" ? y = "s" : k instanceof Date ? (y = "d", n.cellDates || (y = "n", k = er(k)), M = n.dateNF || De[14]) : k === null && n.nullError && (y = "e", k = 0), l ? (l.t = y, l.v = k, delete l.w, delete l.R, M && (l.z = M)) : i[Y] = l = { t: y, v: k }, M && (l.z = M));
    });
  }), c.e.c = Math.max(c.e.c, f + x.length - 1);
  var E = Xe(s);
  if (a)
    for (d = 0; d < x.length; ++d)
      i[je(d + f) + E] = { t: "s", v: x[d] };
  return i["!ref"] = Ie(c), i;
}
function Hu(e, t) {
  return Bi(null, e, t);
}
function Mt(e, t, r) {
  if (typeof t == "string") {
    if (Array.isArray(e)) {
      var n = Be(t);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: "z" });
    }
    return e[t] || (e[t] = { t: "z" });
  }
  return typeof t != "number" ? Mt(e, ge(t)) : Mt(e, ge({ r: t, c: r || 0 }));
}
function Vu(e, t) {
  if (typeof t == "number") {
    if (t >= 0 && e.SheetNames.length > t)
      return t;
    throw new Error("Cannot find sheet # " + t);
  } else if (typeof t == "string") {
    var r = e.SheetNames.indexOf(t);
    if (r > -1)
      return r;
    throw new Error("Cannot find sheet name |" + t + "|");
  } else
    throw new Error("Cannot find sheet |" + t + "|");
}
function Gu() {
  return { SheetNames: [], Sheets: {} };
}
function Xu(e, t, r, n) {
  var a = 1;
  if (!r)
    for (; a <= 65535 && e.SheetNames.indexOf(r = "Sheet" + a) != -1; ++a, r = void 0)
      ;
  if (!r || e.SheetNames.length >= 65535)
    throw new Error("Too many worksheets");
  if (n && e.SheetNames.indexOf(r) >= 0) {
    var i = r.match(/(^.*?)(\d+)$/);
    a = i && +i[2] || 0;
    var s = i && i[1] || r;
    for (++a; a <= 65535 && e.SheetNames.indexOf(r = s + a) != -1; ++a)
      ;
  }
  if (yi(r), e.SheetNames.indexOf(r) >= 0)
    throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), e.Sheets[r] = t, r;
}
function Ku(e, t, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = Vu(e, t);
  switch (e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), r) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[n].Hidden = r;
}
function zu(e, t) {
  return e.z = t, e;
}
function bi(e, t, r) {
  return t ? (e.l = { Target: t }, r && (e.l.Tooltip = r)) : delete e.l, e;
}
function ju(e, t, r) {
  return bi(e, "#" + t, r);
}
function Yu(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || "SheetJS" });
}
function $u(e, t, r, n) {
  for (var a = typeof t != "string" ? t : we(t), i = typeof t == "string" ? t : Ie(t), s = a.s.r; s <= a.e.r; ++s)
    for (var f = a.s.c; f <= a.e.c; ++f) {
      var o = Mt(e, s, f);
      o.t = "n", o.F = i, delete o.v, s == a.s.r && f == a.s.c && (o.f = r, n && (o.D = !0));
    }
  return e;
}
var Mn = {
  encode_col: je,
  encode_row: Xe,
  encode_cell: ge,
  encode_range: Ie,
  decode_col: Jn,
  decode_row: $n,
  split_cell: lf,
  decode_cell: Be,
  decode_range: fr,
  format_cell: Rr,
  sheet_add_aoa: ba,
  sheet_add_json: Bi,
  sheet_add_dom: Ri,
  aoa_to_sheet: vt,
  json_to_sheet: Hu,
  table_to_sheet: Ii,
  table_to_book: gu,
  sheet_to_csv: f0,
  sheet_to_txt: Mi,
  sheet_to_json: dn,
  sheet_to_html: ki,
  sheet_to_formulae: Wu,
  sheet_to_row_object_array: dn,
  sheet_get_cell: Mt,
  book_new: Gu,
  book_append_sheet: Xu,
  book_set_sheet_visibility: Ku,
  cell_set_number_format: zu,
  cell_set_hyperlink: bi,
  cell_set_internal_link: ju,
  cell_add_comment: Yu,
  sheet_set_array_formula: $u,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
};
const Ju = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, Zu = {
  props: {
    data: {
      type: Array,
      required: !0
    },
    translations: {
      type: Object,
      default: () => ({})
    },
    visibleColumns: {
      type: Array,
      default: () => []
    },
    edit: {
      type: String
    },
    show: {
      type: String
    }
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
      perPageOptions: [10, 20, 50, 100],
      searchQuery: "",
      loading: !0,
      // Activar carga inicial
      dataRows: [],
      dataCols: [],
      originalColumns: [],
      tableKey: 0,
      sortDirection: "asc",
      sortKey: "created_at",
      sortOrders: {}
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredData.length / this.itemsPerPage);
    },
    filteredData() {
      let e = this.dataRows;
      return this.searchQuery.trim() !== "" && (e = this.dataRows.filter(
        (t) => Object.values(t).some(
          (r) => String(r).toLowerCase().includes(this.searchQuery.trim().toLowerCase())
        )
      )), this.sortData(e);
    },
    paginatedData() {
      const e = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredData.slice(e, e + this.itemsPerPage);
    },
    visiblePages() {
      let e = [], t = this.currentPage - 4, r = this.currentPage + 5;
      t < 1 && (t = 1, r = Math.min(10, this.totalPages)), r > this.totalPages && (r = this.totalPages, t = Math.max(1, this.totalPages - 9));
      for (let n = t; n <= r; n++)
        e.push(n);
      return e;
    }
  },
  methods: {
    organizeData() {
      this.data && this.data.length > 0 && (this.dataCols = Object.keys(this.data[0]), this.originalColumns = [...this.dataCols], this.dataRows = this.data, this.dataCols.forEach((e) => {
        this.sortOrders[e] = 1;
      }), setTimeout(() => {
        this.loading = !1;
      }, 1e3));
    },
    changePage(e) {
      this.currentPage = e;
    },
    nextPage() {
      this.currentPage < this.totalPages && this.currentPage++;
    },
    prevPage() {
      this.currentPage > 1 && this.currentPage--;
    },
    downloadCSV() {
      const t = "data:text/csv;charset=utf-8," + Object.values(this.translations).join(",") + `
` + this.dataRows.map(
        (a) => this.visibleColumns.map((i) => a[i]).join(",")
      ).join(`
`), r = encodeURI(t), n = document.createElement("a");
      n.setAttribute("href", r), n.setAttribute("download", "data.csv"), document.body.appendChild(n), n.click();
    },
    downloadExcel() {
      const e = Mn.json_to_sheet(
        this.dataRows.map(
          (r) => this.visibleColumns.reduce((n, a) => (n[this.translations[a] || a] = r[a], n), {})
        )
      ), t = Mn.book_new();
      Mn.book_append_sheet(t, e, "Sheet1"), Bu(t, "data.xlsx");
    },
    toggleColumn(e) {
      const t = this.visibleColumns.indexOf(e);
      t !== -1 ? this.visibleColumns.splice(t, 1) : this.visibleColumns.push(e), this.tableKey++;
    },
    sortIconClass(e) {
      return {
        "bi bi-arrow-up": this.sortOrders[e] > 0,
        "bi bi-arrow-down": this.sortOrders[e] < 0
      };
    },
    sortBy(e) {
      this.sortKey === e ? this.sortOrders[e] = this.sortOrders[e] > 0 ? -1 : 1 : (this.sortKey = e, this.sortOrders[e] = 1), this.sortDirection = this.sortOrders[e] > 0 ? "asc" : "desc";
    },
    sortData(e) {
      const t = [...e];
      return t.sort((r, n) => {
        let a = this.sortDirection === "asc" ? 1 : -1;
        return r[this.sortKey] < n[this.sortKey] ? -1 * a : r[this.sortKey] > n[this.sortKey] ? 1 * a : 0;
      }), t;
    }
  },
  watch: {
    data: {
      immediate: !0,
      handler() {
        this.organizeData();
      }
    },
    itemsPerPage() {
      this.currentPage = 1;
    }
  },
  created() {
    this.organizeData();
  }
}, qu = { class: "p-4 mt-4 border" }, Qu = { class: "d-flex" }, ex = { class: "col-lg-4" }, rx = { class: "ml-auto text-right" }, tx = /* @__PURE__ */ fe("i", { class: "bi bi-filetype-csv" }, null, -1), nx = [
  tx
], ax = /* @__PURE__ */ fe("i", { class: "bi bi-filetype-xlsx" }, null, -1), ix = [
  ax
], sx = /* @__PURE__ */ fe("button", {
  type: "button",
  class: "btn btn-primary",
  "data-toggle": "modal",
  "data-target": "#columnVisibilityModal"
}, " Columnas Visibles ", -1), fx = {
  class: "modal fade",
  id: "columnVisibilityModal",
  tabindex: "-1",
  "aria-labelledby": "columnVisibilityModalLabel",
  "aria-hidden": "true"
}, lx = { class: "modal-dialog modal-dialog-scrollable" }, ox = { class: "modal-content" }, cx = /* @__PURE__ */ fe("div", { class: "modal-header" }, [
  /* @__PURE__ */ fe("h5", {
    class: "modal-title",
    id: "columnVisibilityModalLabel"
  }, " Columnas Visibles "),
  /* @__PURE__ */ fe("button", {
    type: "button",
    class: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, [
    /* @__PURE__ */ fe("span", { "aria-hidden": "true" }, "×")
  ])
], -1), hx = { class: "modal-body" }, ux = { class: "row text-center" }, xx = ["checked", "onChange", "value", "id"], dx = ["for"], vx = /* @__PURE__ */ fe("div", { class: "modal-footer" }, [
  /* @__PURE__ */ fe("button", {
    type: "button",
    class: "btn btn-secondary",
    "data-dismiss": "modal"
  }, " Cerrar ")
], -1), px = { class: "table-responsive" }, mx = { style: { "font-size": "10px" } }, gx = ["onClick"], _x = /* @__PURE__ */ fe("th", null, "Acciones", -1), Tx = /* @__PURE__ */ fe("td", { class: "skeleton-cell" }, null, -1), Ex = ["href"], wx = /* @__PURE__ */ fe("i", { class: "bi bi-eye" }, null, -1), Sx = [
  wx
], Ax = { class: "d-flex" }, Fx = { class: "" }, yx = { class: "input-group" }, Cx = /* @__PURE__ */ fe("div", { class: "input-group-prepend" }, [
  /* @__PURE__ */ fe("div", { class: "input-group-text" }, [
    /* @__PURE__ */ fe("i", { class: "bi bi-eye" })
  ])
], -1), Ox = ["value"], Dx = { class: "ml-auto" }, kx = { "aria-label": "Page navigation example" }, Rx = { class: "pagination" }, Ix = {
  key: 0,
  class: "page-item"
}, Nx = {
  key: 1,
  class: "page-item"
}, Px = /* @__PURE__ */ fe("a", {
  class: "page-link",
  href: "#"
}, [
  /* @__PURE__ */ fe("i", { class: "bi bi-skip-backward-fill" })
], -1), Lx = [
  Px
], Mx = ["onClick"], Bx = {
  key: 2,
  class: "page-item"
}, bx = /* @__PURE__ */ fe("a", {
  class: "page-link",
  href: "#"
}, [
  /* @__PURE__ */ fe("i", { class: "bi bi-skip-forward-fill" })
], -1), Ux = [
  bx
], Wx = {
  key: 3,
  class: "page-item"
};
function Hx(e, t, r, n, a, i) {
  return ye(), Ce("div", qu, [
    fe("div", Qu, [
      fe("div", ex, [
        g0(fe("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (s) => a.searchQuery = s),
          type: "text",
          class: "form-control",
          placeholder: "Buscar..."
        }, null, 512), [
          [rs, a.searchQuery]
        ])
      ]),
      fe("div", rx, [
        fe("button", {
          onClick: t[1] || (t[1] = (...s) => i.downloadCSV && i.downloadCSV(...s)),
          class: "btn btn-dark mr-1"
        }, nx),
        fe("button", {
          onClick: t[2] || (t[2] = (...s) => i.downloadExcel && i.downloadExcel(...s)),
          class: "btn btn-success mr-1"
        }, ix),
        sx,
        fe("div", fx, [
          fe("div", lx, [
            fe("div", ox, [
              cx,
              fe("div", hx, [
                fe("div", ux, [
                  (ye(!0), Ce(Nr, null, Pr(a.dataCols, (s, f) => (ye(), Ce("div", {
                    class: "col form-check form-check-inline",
                    key: f
                  }, [
                    fe("input", {
                      class: "form-check-input",
                      type: "checkbox",
                      checked: r.visibleColumns.includes(s),
                      onChange: (o) => i.toggleColumn(s),
                      value: s,
                      id: "col-" + f
                    }, null, 40, xx),
                    fe("label", {
                      for: "col-" + f
                    }, nt(r.translations[s] || s), 9, dx)
                  ]))), 128))
                ])
              ]),
              vx
            ])
          ])
        ])
      ])
    ]),
    fe("div", px, [
      (ye(), Ce("table", {
        class: "table mt-3",
        key: a.tableKey
      }, [
        fe("thead", null, [
          fe("tr", mx, [
            (ye(!0), Ce(Nr, null, Pr(r.visibleColumns, (s, f) => (ye(), Ce("th", { key: f }, [
              ts(nt(r.translations[s] || s) + " ", 1),
              a.sortOrders[s] != null ? (ye(), Ce("span", {
                key: 0,
                onClick: (o) => i.sortBy(s),
                style: { cursor: "pointer" }
              }, [
                fe("i", {
                  class: Kt(i.sortIconClass(s))
                }, null, 2)
              ], 8, gx)) : Et("", !0)
            ]))), 128)),
            _x
          ])
        ]),
        fe("tbody", null, [
          a.loading ? (ye(), Ce(Nr, { key: 0 }, Pr(10, (s) => fe("tr", {
            key: "skeleton-" + s,
            class: "skeleton-row"
          }, [
            (ye(!0), Ce(Nr, null, Pr(r.visibleColumns, (f, o) => (ye(), Ce("td", {
              key: "skeleton-col-" + o,
              class: "skeleton-cell"
            }))), 128)),
            Tx
          ])), 64)) : (ye(!0), Ce(Nr, { key: 1 }, Pr(i.paginatedData, (s, f) => (ye(), Ce("tr", { key: f }, [
            (ye(!0), Ce(Nr, null, Pr(r.visibleColumns, (o, l) => (ye(), Ce("td", { key: l }, nt(s[o]), 1))), 128)),
            fe("td", null, [
              fe("a", {
                href: r.edit + s.id,
                class: "btn btn-info btn-xs mr-1"
              }, Sx, 8, Ex)
            ])
          ]))), 128))
        ])
      ]))
    ]),
    fe("div", Ax, [
      fe("div", Fx, [
        fe("div", yx, [
          Cx,
          g0(fe("select", {
            "onUpdate:modelValue": t[3] || (t[3] = (s) => a.itemsPerPage = s),
            class: "form-control",
            id: "perPage"
          }, [
            (ye(!0), Ce(Nr, null, Pr(a.perPageOptions, (s) => (ye(), Ce("option", {
              key: s,
              value: s
            }, nt(s), 9, Ox))), 128))
          ], 512), [
            [ns, a.itemsPerPage]
          ])
        ])
      ]),
      fe("div", Dx, [
        fe("nav", kx, [
          fe("ul", Rx, [
            fe("li", {
              class: Kt(["page-item", { disabled: a.currentPage === 1 }])
            }, [
              fe("a", {
                class: "page-link",
                href: "#",
                onClick: t[4] || (t[4] = wt((...s) => i.prevPage && i.prevPage(...s), ["prevent"]))
              }, "Anterior")
            ], 2),
            a.currentPage > 1 ? (ye(), Ce("li", Ix, [
              fe("a", {
                class: "page-link",
                href: "#",
                onClick: t[5] || (t[5] = wt((s) => i.changePage(1), ["prevent"]))
              }, "Primero")
            ])) : Et("", !0),
            a.currentPage > 3 ? (ye(), Ce("li", Nx, Lx)) : Et("", !0),
            (ye(!0), Ce(Nr, null, Pr(i.visiblePages, (s) => (ye(), Ce("li", {
              class: Kt(["page-item", { active: s === a.currentPage }]),
              key: s
            }, [
              fe("a", {
                class: "page-link",
                href: "#",
                onClick: wt((f) => i.changePage(s), ["prevent"])
              }, nt(s), 9, Mx)
            ], 2))), 128)),
            a.currentPage < i.totalPages - 2 ? (ye(), Ce("li", Bx, Ux)) : Et("", !0),
            a.currentPage < i.totalPages ? (ye(), Ce("li", Wx, [
              fe("a", {
                class: "page-link",
                href: "#",
                onClick: t[6] || (t[6] = wt((s) => i.changePage(i.totalPages), ["prevent"]))
              }, nt(i.totalPages), 1)
            ])) : Et("", !0),
            fe("li", {
              class: Kt(["page-item", { disabled: a.currentPage === i.totalPages }])
            }, [
              fe("a", {
                class: "page-link",
                href: "#",
                onClick: t[7] || (t[7] = wt((...s) => i.nextPage && i.nextPage(...s), ["prevent"]))
              }, "Siguiente")
            ], 2)
          ])
        ])
      ])
    ])
  ]);
}
const Gx = /* @__PURE__ */ Ju(Zu, [["render", Hx]]);
export {
  Gx as default
};
