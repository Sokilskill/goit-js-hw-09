const t=document.body,e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");function n(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}let r=0,a=null;e.addEventListener("click",(function(){r||(t.style.backgroundColor=n(),r+=1,a=setInterval((()=>{t.style.backgroundColor=n()}),1e3))})),o.addEventListener("click",(function(){r&&(clearTimeout(a),r=0)}));
//# sourceMappingURL=01-color-switcher.36c9b604.js.map
