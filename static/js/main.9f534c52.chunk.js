(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(t,e,n){t.exports=n.p+"static/media/sound_school_bell_start.94b2e286.mp3"},function(t,e,n){t.exports=n.p+"static/media/sound_school_bell_end.8240d3cb.mp3"},function(t,e,n){t.exports=n(19)},,,,,,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),u=(n(15),n(1)),l=(n(17),n(4)),s=n.n(l),i=n(5),d=n.n(i);var p=function(){var t=Object(a.useState)(new Date),e=Object(u.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)({start:[[8,40,0]],end:[[16,37,0]]}),o=Object(u.a)(c,2),l=o[0],i=o[1],p=/\d\d\:\d\d\:\d\d/g;Object(a.useEffect)(function(){setTimeout(function(){r(new Date)},1e3),l.start.forEach(function(t){n.getHours()==t[0]&&n.getMinutes()==t[1]&&n.getSeconds()==t[2]&&new Audio(s.a).play().catch(function(t){return console.error(t)})}),l.end.forEach(function(t){n.getHours()==t[0]&&n.getMinutes()==t[1]&&n.getSeconds()==t[2]&&new Audio(d.a).play().catch(function(t){return console.error(t)})})},[n]);var m=function(t){var e=t.soundType;return a.createElement("button",{onClick:function(){var t=prompt("HH:MM:SS \ud615\uc2dd\uc73c\ub85c \uc2dc\uac01\uc744 \uc801\uc5b4\uc8fc\uc138\uc694.");null!=t&&p.test(t)?(l[e].push(t.split(":").map(function(t){return Number(t)})),i(l)):alert("\uc815\ud655\ud55c \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694!")}}," ","start"==e?"\uc2dc\uc791":"\uc885\ub8cc"," \uc2dc\uac04 \ucd94\uac00\ud558\uae30 ")},f=function(t){var e=t.soundType,n=l[e].map(function(t){return"".concat(t[0].toString().padStart(2,"0"),"\uc2dc ").concat(t[1].toString().padStart(2,"0"),"\ubd84 ").concat(t[2].toString().padStart(2,"0"),"\ucd08")}).join("\n");return a.createElement("p",null,"start"==e?"\uc2dc\uc791":"\uc885\ub8cc"," \uc885\uc774 \uc6b8\ub9ac\ub294 \uc2dc\uac04",a.createElement("br",null),a.createElement("br",null),n)};return a.createElement("center",null,a.createElement("h1",null,"\ud559\uad50\uc885\uc774 \ub561\ub561\ub561 \uc5b4\uc11c \ubaa8\uc774\uc790"),a.createElement("h1",null,n.getHours().toString().padStart(2,"0"),":",n.getMinutes().toString().padStart(2,"0"),":",n.getSeconds().toString().padStart(2,"0")),a.createElement("div",{className:"time-table"},a.createElement("div",{className:"start-table"},a.createElement(m,{soundType:"start"}),a.createElement(f,{soundType:"start"})),a.createElement("div",{className:"end-table"},a.createElement(m,{soundType:"end"}),a.createElement(f,{soundType:"end"}))))},m=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,20)).then(function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null))),m()}],[[6,3,2]]]);
//# sourceMappingURL=main.9f534c52.chunk.js.map