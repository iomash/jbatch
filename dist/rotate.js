define(["jquery","//cdn.jsdelivr.net/web-animations/1.0.6/web-animations.min.js"],function(a){"use strict";return function(b,c){var d,e,f=a.inArray("--waitForEnd",b),g=!1,h=900;-1!==f&&f+1<b.length&&(g=!0),f=a.inArray("--direction",b),-1!==f&&f+1<b.length&&(d=b[f+1]),f=a.inArray("--duration",b),-1!==f&&f+1<b.length&&(h=b[f+1]);var i=b[1],j=document.querySelector(b[b.length-1]);if("in"===i){j.style.opacity=0,j.style.display="block",j.style.visibility="visible",e="down-left"===d?[{transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0",transformOrigin:"left bottom",offset:0},{transform:"none",opacity:"1",transformOrigin:"left bottom",offset:1}]:"down-right"===d?[{transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0",transformOrigin:"right bottom",offset:0},{transform:"none",opacity:"1",transformOrigin:"right bottom",offset:1}]:"up-left"===d?[{transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0",transformOrigin:"left bottom",offset:0},{transform:"none",opacity:"1",transformOrigin:"left bottom",offset:1}]:"up-right"===d?[{transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0",transformOrigin:"right bottom",offset:0},{transform:"none",opacity:"1",transformOrigin:"right bottom",offset:1}]:[{transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0",transformOrigin:"center",offset:0},{transform:"none",opacity:"1",transformOrigin:"center",offset:1}];var k=j.animate(e,{duration:h,iterations:1});k.onfinish=function(){j.style.opacity=1,g&&c.done()}}else{if("out"!==i)return c.done;e="down-left"===d?[{transform:"none",opacity:"1",transformOrigin:"left bottom",offset:0},{transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0",transformOrigin:"left bottom",offset:1}]:"down-right"===d?[{transform:"none",opacity:"1",transformOrigin:"right bottom",offset:0},{transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0",transformOrigin:"right bottom",offset:1}]:"up-left"===d?[{transform:"none",opacity:"1",transformOrigin:"left bottom",offset:0},{transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0",transformOrigin:"left bottom",offset:1}]:"up-right"===d?[{transform:"none",opacity:"1",transformOrigin:"right bottom",offset:0},{transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0",transformOrigin:"right bottom",offset:1}]:[{transform:"none",opacity:"1",transformOrigin:"center",offset:0},{transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0",transformOrigin:"center",offset:1}];var k=j.animate(e,{duration:h,iterations:1});k.onfinish=function(){j.style.display="none",g&&c.done()}}return g?void 0:c.done}});