"use strict";(self.webpackChunkformulario_sena=self.webpackChunkformulario_sena||[]).push([[314],{56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},72:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],A=0;A<n.length;A++){var c=n[A],s=t.base?c[0]+t.base:c[0],d=a[s]||0,l="".concat(s," ").concat(d);a[s]=d+1;var u=e(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(p);else{var g=o(p,t);t.byIndex=A,r.splice(A,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=e(a[i]);r[A].references--}for(var c=t(n,o),s=0;s<a.length;s++){var d=e(a[s]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=c}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},379:(n,r,e)=>{e.d(r,{A:()=>A});var t=e(354),o=e.n(t),a=e(314),i=e.n(a)()(o());i.push([n.id,"body {\n  color: rgb(255, 255, 255);\n  margin: 0;\n}\n\nbody::before {\n  content: \" \";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  z-index: -1;\n   /* background-image:\n    linear-gradient(115deg, rgba(54, 178, 235, 0.5), rgba(9, 86, 228, 0.5)),\n    url(./geometry-1023846_1920.jpg);\n  background-repeat: no-repeat;\n  background-position: center; */\n}\n\nh1 {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  text-align: center;\n  margin: 1em auto;\n  padding: 0;\n  font-size: 3em;\n}\n\np {\n  font-family: 'Italianno', cursive;\n  font-weight: 300;\n  text-align: center;\n  margin: 5px auto 50px auto;\n  padding: 0;\n  font-size: 1.5em;\n}\n\n#survey-form {\n  width: 60%;\n  margin: 0 auto;\n  background-color: rgba(3, 3, 17, 0.5);\n  padding: 2em;\n  border-radius: 0.5em;\n  max-width: 800px;\n  min-width: 200px;\n}\n\nfieldset {\n  border: none;\n  margin: 0;\n  padding: auto;\n}\n\ninput,\nselect,\ntextarea {\n  display: block;\n  width: 100%;\n  padding: 0.2em;\n  margin: 10px 0 0 0;\n  border: none;\n  min-height: 1em;\n  border-radius: 0.5em;\n  font-size: 1.2em;\n  font-family: 'Italianno', cursive;\n  color: rgb(244, 244, 244);\n  background-color: rgba(40, 45, 133, 0.5);\n}\n\nlabel {\n  display: block;\n  margin: 0.5em 0;\n  font-size: 1.2em;\n  font-family: 'Italianno', cursive;\n  color: rgb(244, 244, 244);\n  font-weight: bolder;\n}\n\n.inline {\n  display: inline-block;\n  width: unset;\n  margin: 0 0.3em;\n  padding: auto;\n  vertical-align: middle;\n}\n\ninput[type=\"submit\"] {\n  display: block;\n  width: 25vw;\n  margin: auto;\n  padding: auto;\n  color: rgb(0, 0, 0);\n  background-color: rgb(195, 185, 174);\n  border-color: rgb(0, 0, 0);\n  font-weight: bolder;\n}\n","",{version:3,sources:["webpack://./src/assets/styles.css"],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,WAAW;GACV;;;;gCAI6B;AAChC;;AAEA;EACE,yCAAyC;EACzC,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,iCAAiC;EACjC,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;EAC1B,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,qCAAqC;EACrC,YAAY;EACZ,oBAAoB;EACpB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,aAAa;AACf;;AAEA;;;EAGE,cAAc;EACd,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,gBAAgB;EAChB,iCAAiC;EACjC,yBAAyB;EACzB,wCAAwC;AAC1C;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,iCAAiC;EACjC,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oCAAoC;EACpC,0BAA0B;EAC1B,mBAAmB;AACrB",sourcesContent:["body {\r\n  color: rgb(255, 255, 255);\r\n  margin: 0;\r\n}\r\n\r\nbody::before {\r\n  content: \" \";\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: cover;\r\n  z-index: -1;\r\n   /* background-image:\r\n    linear-gradient(115deg, rgba(54, 178, 235, 0.5), rgba(9, 86, 228, 0.5)),\r\n    url(./geometry-1023846_1920.jpg);\r\n  background-repeat: no-repeat;\r\n  background-position: center; */\r\n}\r\n\r\nh1 {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 1em auto;\r\n  padding: 0;\r\n  font-size: 3em;\r\n}\r\n\r\np {\r\n  font-family: 'Italianno', cursive;\r\n  font-weight: 300;\r\n  text-align: center;\r\n  margin: 5px auto 50px auto;\r\n  padding: 0;\r\n  font-size: 1.5em;\r\n}\r\n\r\n#survey-form {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n  background-color: rgba(3, 3, 17, 0.5);\r\n  padding: 2em;\r\n  border-radius: 0.5em;\r\n  max-width: 800px;\r\n  min-width: 200px;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n  margin: 0;\r\n  padding: auto;\r\n}\r\n\r\ninput,\r\nselect,\r\ntextarea {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.2em;\r\n  margin: 10px 0 0 0;\r\n  border: none;\r\n  min-height: 1em;\r\n  border-radius: 0.5em;\r\n  font-size: 1.2em;\r\n  font-family: 'Italianno', cursive;\r\n  color: rgb(244, 244, 244);\r\n  background-color: rgba(40, 45, 133, 0.5);\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n  margin: 0.5em 0;\r\n  font-size: 1.2em;\r\n  font-family: 'Italianno', cursive;\r\n  color: rgb(244, 244, 244);\r\n  font-weight: bolder;\r\n}\r\n\r\n.inline {\r\n  display: inline-block;\r\n  width: unset;\r\n  margin: 0 0.3em;\r\n  padding: auto;\r\n  vertical-align: middle;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  display: block;\r\n  width: 25vw;\r\n  margin: auto;\r\n  padding: auto;\r\n  color: rgb(0, 0, 0);\r\n  background-color: rgb(195, 185, 174);\r\n  border-color: rgb(0, 0, 0);\r\n  font-weight: bolder;\r\n}\r\n"],sourceRoot:""}]);const A=i},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},648:(n,r,e)=>{var t=e(72),o=e.n(t),a=e(825),i=e.n(a),A=e(659),c=e.n(A),s=e(56),d=e.n(s),l=e(540),u=e.n(l),p=e(113),g=e.n(p),f=e(379),m={};m.styleTagTransform=g(),m.setAttributes=d(),m.insert=c().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),o()(f.A,m),f.A&&f.A.locals&&f.A.locals},659:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}}},n=>{n(n.s=648)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjSCxPQUFPRSxFQUFJSSxTQUFVLFFBRXhDSixFQUFJRSxRQUNORCxHQUFPLFVBQVVILE9BQU9FLEVBQUlFLE1BQU8sT0FFckMsSUFBSWlDLE9BQWlDLElBQWRuQyxFQUFJSyxNQUN2QjhCLElBQ0ZsQyxHQUFPLFNBQVNILE9BQU9FLEVBQUlLLE1BQU1qQixPQUFTLEVBQUksSUFBSVUsT0FBT0UsRUFBSUssT0FBUyxHQUFJLE9BRTVFSixHQUFPRCxFQUFJQyxJQUNQa0MsSUFDRmxDLEdBQU8sS0FFTEQsRUFBSUUsUUFDTkQsR0FBTyxLQUVMRCxFQUFJSSxXQUNOSCxHQUFPLEtBRVQsSUFBSUUsRUFBWUgsRUFBSUcsVUFDaEJBLEdBQTZCLG9CQUFUeUMsT0FDdEIzQyxHQUFPLHVEQUF1REgsT0FBTzhDLEtBQUtFLFNBQVNDLG1CQUFtQkMsS0FBS0MsVUFBVTlDLE1BQWUsUUFLdElaLEVBQVFtRSxrQkFBa0J6RCxFQUFLckIsRUFBY1csRUFBUUEsUUFDdkQsQ0FvQk1rRixDQUFNN0YsRUFBY1csRUFBU1MsRUFDL0IsRUFDQWdCLE9BQVEsWUFyQlosU0FBNEJwQyxHQUUxQixHQUFnQyxPQUE1QkEsRUFBYThGLFdBQ2YsT0FBTyxFQUVUOUYsRUFBYThGLFdBQVdoRCxZQUFZOUMsRUFDdEMsQ0FnQk0rRixDQUFtQi9GLEVBQ3JCLEVBRUosQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm11bGFyaW8tc2VuYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLXNlbmEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZm9ybXVsYXJpby1zZW5hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZm9ybXVsYXJpby1zZW5hLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLXNlbmEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLXNlbmEvLi9zcmMvYXNzZXRzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZm9ybXVsYXJpby1zZW5hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Zvcm11bGFyaW8tc2VuYS8uL3NyYy9hc3NldHMvc3R5bGVzLmNzcz85NTFmIiwid2VicGFjazovL2Zvcm11bGFyaW8tc2VuYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZm9ybXVsYXJpby1zZW5hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHk6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gICAvKiBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgbGluZWFyLWdyYWRpZW50KDExNWRlZywgcmdiYSg1NCwgMTc4LCAyMzUsIDAuNSksIHJnYmEoOSwgODYsIDIyOCwgMC41KSksXHJcbiAgICB1cmwoLi9nZW9tZXRyeS0xMDIzODQ2XzE5MjAuanBnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgKi9cclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJywgY3Vyc2l2ZTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDVweCBhdXRvIDUwcHggYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbiNzdXJ2ZXktZm9ybSB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDMsIDE3LCAwLjUpO1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IGF1dG87XHJcbn1cclxuXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjJlbTtcclxuICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1pbi1oZWlnaHQ6IDFlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJywgY3Vyc2l2ZTtcclxuICBjb2xvcjogcmdiKDI0NCwgMjQ0LCAyNDQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDQ1LCAxMzMsIDAuNSk7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAuNWVtIDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LWZhbWlseTogJ0l0YWxpYW5ubycsIGN1cnNpdmU7XHJcbiAgY29sb3I6IHJnYigyNDQsIDI0NCwgMjQ0KTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uaW5saW5lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IHVuc2V0O1xyXG4gIG1hcmdpbjogMCAwLjNlbTtcclxuICBwYWRkaW5nOiBhdXRvO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyNXZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiBhdXRvO1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTg1LCAxNzQpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFdBQVc7R0FDVjs7OztnQ0FJNkI7QUFDaEM7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICAgLyogYmFja2dyb3VuZC1pbWFnZTpcXHJcXG4gICAgbGluZWFyLWdyYWRpZW50KDExNWRlZywgcmdiYSg1NCwgMTc4LCAyMzUsIDAuNSksIHJnYmEoOSwgODYsIDIyOCwgMC41KSksXFxyXFxuICAgIHVybCguL2dlb21ldHJ5LTEwMjM4NDZfMTkyMC5qcGcpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC1mYW1pbHk6ICdJdGFsaWFubm8nLCBjdXJzaXZlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogNXB4IGF1dG8gNTBweCBhdXRvO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcblxcclxcbiNzdXJ2ZXktZm9ybSB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDMsIDE3LCAwLjUpO1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwLjJlbTtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDFlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJywgY3Vyc2l2ZTtcXHJcXG4gIGNvbG9yOiByZ2IoMjQ0LCAyNDQsIDI0NCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCA0NSwgMTMzLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMC41ZW0gMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBmb250LWZhbWlseTogJ0l0YWxpYW5ubycsIGN1cnNpdmU7XFxyXFxuICBjb2xvcjogcmdiKDI0NCwgMjQ0LCAyNDQpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmlubGluZSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogdW5zZXQ7XFxyXFxuICBtYXJnaW46IDAgMC4zZW07XFxyXFxuICBwYWRkaW5nOiBhdXRvO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMjV2dztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IGF1dG87XFxyXFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTg1LCAxNzQpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic3R5bGVFbGVtZW50Iiwibm9uY2UiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJtb2R1bGVzVG9Eb20iLCJsaXN0Iiwib3B0aW9ucyIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsIml0ZW0iLCJpZCIsImJhc2UiLCJjb3VudCIsImNvbmNhdCIsImluZGV4QnlJZGVudGlmaWVyIiwib2JqIiwiY3NzIiwibWVkaWEiLCJzb3VyY2VNYXAiLCJzdXBwb3J0cyIsImxheWVyIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRFbGVtZW50U3R5bGUiLCJieUluZGV4Iiwic3BsaWNlIiwicHVzaCIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJpbmRleCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwidG9TdHJpbmciLCJ0aGlzIiwibWFwIiwiY29udGVudCIsIm5lZWRMYXllciIsImpvaW4iLCJtb2R1bGVzIiwiZGVkdXBlIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJpbnNlcnQiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsImluc2VydFN0eWxlRWxlbWVudCIsImxvY2FscyIsIm1lbW8iLCJzdHlsZSIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJnZXRUYXJnZXQiLCJFcnJvciIsImFwcGx5IiwicGFyZW50Tm9kZSIsInJlbW92ZVN0eWxlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=