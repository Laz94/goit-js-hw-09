const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};t.startBtn.addEventListener("click",(function(){e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.disabled=!1,t.stopBtn.disabled=!0}));let e=null;
//# sourceMappingURL=01-color-switcher.e9118314.js.map
