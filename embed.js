"use strict";
let destination = "";

try {
  destination = new URL(location.hash.slice(1)).toString();
} catch (err) {
  alert(`Your boat crashed!\nBad string or URL:\n${err}`);
  throw err;
}

registerSW()
  .then(() => {

                const win = window.open();
                if (!win) {
                    alert("Pop-up blocked. Please allow pop-ups for this site.");
                }
        
                win.document.body.style.margin = "0";
                win.document.body.style.height = "100vh";
                const frm = win.document.createElement("iframe");
                frm.style.border = "none";
                frm.style.width = "100%";
                frm.style.height = "100%";
                frm.style.margin = "0";
                frm.referrerpolicy = "no-referrer";
                frm.allow = "fullscreen";
                frm.src = __uv$config.prefix + __uv$config.encodeUrl(destination);
                win.document.body.appendChild(frm);

  })
  .catch((err) => {
    alert(`Your boat crashed!\nAn error occured (you probably need to stop using http you moron)\n${err}`);
  });
