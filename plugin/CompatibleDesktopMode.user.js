// ==UserScript==
// @name         Compatible Desktop Mode(兼容桌面版)
// @version      1.0
// @description  Compatible Desktop Mode
// @author       Foxok
// @include      www.aliyundrive.com
// @include      pan.baidu.com
// @updateURL     https://raw.githubusercontent.com/foxokbrowser/scripts/main/CompatibleDesktopMode.user.js
// @downloadURL   https://raw.githubusercontent.com/foxokbrowser/scripts/main/CompatibleDesktopMode.user.js
// @supportURL    https://github.com/foxokbrowser/scripts
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    let meta = document.createElement('meta');
    let DEFAULT_WIDTH = 640,
        ua = navigator.userAgent.toLowerCase(),
        deviceWidth = window.screen.width,
        devicePixelRatio = window.devicePixelRatio || 1,
        targetDensitydpi = DEFAULT_WIDTH / deviceWidth * devicePixelRatio * 160;
    meta.content = 'target-densitydpi=' + targetDensitydpi;
    meta.name = 'viewport';
    document.getElementsByTagName('head')[0].appendChild(meta);
})();
