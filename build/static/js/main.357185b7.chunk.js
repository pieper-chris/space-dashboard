(this.webpackJsonpflight_count=this.webpackJsonpflight_count||[]).push([[0],{10:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){e.exports=a(51)},36:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),l=a(25),c=a.n(l),i=(a(36),a(1)),o=a(5),u=a(3),m=a(4),s=a(28);a(10);var p=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){var e=t.current.controls();e.autoRotate=!0,e.autoRotateSpeed="1.0",e.maxDistance="280.0",e.enabled=!1,t.current.enablePointerInteraction=!1,t.current.width=600,t.current.height=500}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"GlobeMap"},r.a.createElement(s.a,{ref:t,globeImageUrl:"//unpkg.com/three-globe/example/img/earth-night.jpg",width:600,height:500})))};var d=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null," Space Dashboard "))};var g=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null," Data provided by ",r.a.createElement("a",{href:"https://api.nasa.gov/",target:"_blank",rel:"noopener noreferrer"},"NASA API")),r.a.createElement("p",null," ",r.a.createElement("a",{href:"https://github.com/pieper-chris",target:"_blank",rel:"noopener noreferrer"},"Github")))};var h=function(e){return r.a.createElement("div",{className:"toggle_msg"},r.a.createElement("u",null," Click any element to toggle "))},f=a(8),E=a.n(f),v=a(15),_=a(12);a(24);var b=function(e){var t=e.name,a=e.danger,n=e.h_abs_mag,l=e.km_diameter,c=e.miles_diameter,i=(e.close_app_date,e.link);return r.a.createElement("div",{className:"Neo"},r.a.createElement("h1",null," Name:  ",r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"}," ",t," ")),r.a.createElement("p",null," H (absolute magnitude): ",String(n)," "),r.a.createElement("p",null," Diameter (km): ",String(l.estimated_diameter_min),"- ",String(l.estimated_diameter_max)," "),r.a.createElement("p",null,"  Diameter (miles): ",String(c.estimated_diameter_min),"- ",String(c.estimated_diameter_max)," "),r.a.createElement("p",null," Potentially Dangerous?: ",String(a)," "))};var j=function(){var e=Object(n.useState)([]),t=Object(_.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(_.a)(c,2),o=i[0],u=i[1];Object(n.useEffect)((function(){m()}),[]);var m=function(){var e=Object(v.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=WMtTrqwesceUk1odHg4uWnSjNH2FMdWVQdw0h6zG");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,l(a.near_earth_objects),console.log(a.near_earth_objects);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("p",{onClick:function(e){u(!o)},className:"toggle_list"},"Current Near-Earth Object (Asteroids) list"),o?r.a.createElement("div",null,a.map((function(e){return r.a.createElement(b,{key:e.id,name:e.name,h_abs_mag:e.absolute_magnitude_h,km_diameter:e.estimated_diameter.kilometers,miles_diameter:e.estimated_diameter.miles,danger:e.is_potentially_hazardous_asteroid,link:e.nasa_jpl_url})}))):null)};var k=function(e){var t=e.name,a=e.date,n=e.copyright,l=e.explanation,c=e.img_url;return r.a.createElement("div",{className:"apod"},r.a.createElement("h1",null," Title:  ",t," "),r.a.createElement("p",null," Date: ",a," "),r.a.createElement("p",null," Copyright:  ",n," "),r.a.createElement("u",null," Description "),r.a.createElement("p",null," ",l," "),r.a.createElement("img",{id:"apod_image",src:c,alt:"APOD"}))};var y=function(){var e=Object(n.useState)([]),t=Object(_.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(_.a)(c,2),o=i[0],u=i[1];Object(n.useEffect)((function(){m()}),[]);var m=function(){var e=Object(v.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=WMtTrqwesceUk1odHg4uWnSjNH2FMdWVQdw0h6zG");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,l(a),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("p",{onClick:function(e){u(!o)},className:"toggle_list"},"NASA Astronomy Picture of the Day"),o?r.a.createElement("div",null,r.a.createElement(k,{name:a.title,date:a.date,copyright:a.copyright,explanation:a.explanation,img_url:a.hdurl})):null)},O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(p,null),r.a.createElement(h,null),r.a.createElement(y,null),r.a.createElement(j,null),r.a.createElement(g,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.357185b7.chunk.js.map