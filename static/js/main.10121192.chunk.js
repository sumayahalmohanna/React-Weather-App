(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),i=a.n(s),r=(a(4),a(2)),d=a(0);var j=function(e){return Object(d.jsx)("div",{className:e.className,children:Object(d.jsxs)("div",{className:"greeting-box",children:[Object(d.jsx)("h1",{className:"greeting",children:"Howdy!"}),Object(d.jsx)("h2",{className:"medium-heading",children:"Welcome to the ad free weather app!"}),Object(d.jsx)("h4",{className:"medium-heading",children:"May good weather always find you."})]})})},o="89d162a00d18dbfdc8e4e806bd7453c5",h="https://api.openweathermap.org/data/2.5/";var l=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)({}),i=Object(r.a)(s,2),l=i[0],b=i[1],m=Object(c.useState)(""),u=Object(r.a)(m,2),O=u[0],x=u[1],p=Object(c.useState)(""),f=Object(r.a)(p,2),v=f[0],N=f[1],g=Object(c.useState)(1),w=Object(r.a)(g,2),y=w[0],C=w[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{className:0!==y?"":"hide"}),Object(d.jsx)("div",{className:"undefined"!=typeof l.main&&l.main.temp>16?"app warm":"app",children:Object(d.jsxs)("main",{children:[Object(d.jsx)("div",{className:0!==y?"hide":"",children:"undefined"!=typeof l.main?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"location-box",children:[Object(d.jsxs)("div",{className:"location",children:[l.name,", ",l.sys.country]}),Object(d.jsx)("div",{className:"date",children:(new Date).toDateString()})]}),Object(d.jsxs)("div",{className:"weather-box",children:[Object(d.jsxs)("div",{className:"temp",children:[O,"\xb0",v]}),Object(d.jsx)("div",{className:"weather",children:l.weather[0].main})]})]}):Object(d.jsx)("h4",{className:"not-found",children:l.message})}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"search-box",children:Object(d.jsx)("input",{type:"text",className:"search-bar",placeholder:"Enter city name..",onChange:function(e){return n(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&""!==a&&(fetch("".concat(h,"weather?q=").concat(a,"&units=imperial&APPID=").concat(o)).then((function(e){return e.json()})).then((function(e){b(e),n(""),"404"!==e.cod&&(C(0),x(Math.round(e.main.temp)),N("F"))})),C(0))}})}),Object(d.jsxs)("div",{className:0!==y?"hide":"",children:[Object(d.jsx)("button",{className:"btn",onClick:function(e){""!==l&&"404"!==l.cod&&(N("F"),x(Math.round(l.main.temp)))},children:"F"}),Object(d.jsx)("button",{className:"btn",onClick:function(e){if(""!==l&&"404"!==l.cod){N("C");var t=Math.round((l.main.temp-32)/1.8);x(t)}},children:"C"})]})]})})]})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root")),b()},4:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.10121192.chunk.js.map