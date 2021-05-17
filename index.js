/*!
 * @ibnlanre/objectify-0.0.2
 * Copyright (c) 2021 Ridwan Olanrewaju.
 * Licensed under the MIT license.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).objectify=n()}(this,(function(){"use strict";return function(e,n,t){for(var r={},o=0,f=Object.keys(e),i=[];o<f.length;o++)i[o]=[f[o],e[o]];for(var u=i.length?i:Array.from(e,(function(e){return Array.isArray(e)?e:[e]})),l=0;l<u.length;l++){var a=n?n.call(t,u[l],l,e):u[l],c=a[0],d=a[1];r[c]=d}return r}}));
