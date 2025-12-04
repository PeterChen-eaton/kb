// ==UserScript==
// @name         GitHub Custom Tools
// @namespace    http://tampermonkey.net/
// @version      2025-12-04
// @description  GitHub Custom Tools
// @author       Peter
// @match        https://github.com
// @match        https://github.com/
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
    const sso = document.querySelector('.org-sso button')
    if (sso) {
        sso.click();
    }

    // show more repos
    document.querySelector('.js-more-repos-form button').click();

    // sort all repos
    setTimeout(() => {
        const ul = document.querySelector('.js-dashboard-repos-list');
        const items = Array.from(ul.querySelectorAll('li'));

        items.sort((a, b) => {
            return a.classList.contains('private') ? (a.classList.contains("no-description") ? -1 : 1) : -1;
        });

        ul.innerHTML = '';
        items.forEach(li => ul.appendChild(li));
    }, 500);
})();
