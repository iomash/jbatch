define(["jquery","//cdn.jsdelivr.net/web-animations/1.0.6/web-animations.min.js"],function(a){"use strict";return function(b,c){var d,e=a.inArray("--waitForEnd",b),f=!1,g=900;-1!==e&&e+1<b.length&&(f=!0),e=a.inArray("--duration",b),-1!==e&&e+1<b.length&&(g=b[e+1]);var h=b[1],i=document.querySelector(b[b.length-1]);if("in-x"===h||"in-y"===h){i.style.opacity=0,i.style.display="block",i.style.visibility="visible","in-x"===h?d=[{transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0",offset:0},{transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",offset:.4},{transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1",offset:.6},{transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)",opacity:"1",offset:.8},{transform:"perspective(400px)",opacity:"1",offset:1}]:"in-y"===h&&(d=[{transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0",offset:0},{transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",offset:.4},{transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1",offset:.6},{transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)",opacity:"1",offset:.8},{transform:"perspective(400px)",opacity:"1",offset:1}]);var j=i.animate(d,{duration:g,iterations:1,easing:"ease-in"});j.onfinish=function(){i.style.opacity=1,f&&c.done()}}else if("out-x"===h||"out-y"===h){"out-x"===h?d=[{transform:"perspective(400px)",opacity:"1",offset:0},{transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1",offset:.3},{transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0",offset:1}]:"out-y"===h&&(d=[{transform:"perspective(400px)",opacity:"1",offset:0},{transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",opacity:"1",offset:.3},{transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0",offset:1}]);var j=i.animate(d,{duration:g,iterations:1});j.onfinish=function(){i.style.display="none",f&&c.done()}}else{d=[{transform:"perspective(400px) rotate3d(0, 1, 0, -360deg)",offset:0},{transform:"perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",offset:.4},{transform:"perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",offset:.5},{transform:"perspective(400px) scale3d(.95, .95, .95)",offset:.8},{transform:"perspective(400px)",offset:1}];var j=i.animate(d,{duration:g,iterations:1,easing:"ease-in"});j.onfinish=function(){f&&c.done()}}return f?void 0:c.done}});