// ==UserScript==
// @name         GitHub Custom Tools
// @namespace    https://github.com/PeterChen-eaton/kb/blob/main/docs/tampermonkey/github-custom-tools
// @version      2025-12-16
// @description  GitHub Custom Tools
// @author       Peter
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const sidebar = document.querySelector('.feed-left-sidebar');
    if (sidebar) {
        sidebar.style.minWidth = "350px";
    }
    
    // auto follow sso
    setInterval(() => {
        const sso = document.querySelector('.org-sso button.btn')    
        if (sso) {
            sso.click();
        }
    }, 1000);

    setTimeout(() => {
        // show more repos
        document.querySelector('.js-more-repos-form button').click();

        // sort all repos
        const ul = document.querySelector('.js-dashboard-repos-list');
        const items = Array.from(ul.querySelectorAll('li'));
        
        items.sort((a, b) => {
            var aHref = a.querySelector('a').href;
            var bHref = b.querySelector('a').href;
            return bHref.localeCompare(aHref);
        });

        items.forEach(li => ul.appendChild(li));
    }, 500);
})();
