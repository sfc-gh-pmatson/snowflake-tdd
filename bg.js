(function () {
  var wrap = document.createElement('div');
  wrap.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:hidden;';
  wrap.innerHTML = '<svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:min(100vw,100vh);height:min(100vw,100vh);top:50%;left:50%;transform:translate(-50%,-50%);">' +
    '<defs>' +
      '<radialGradient id="bgCloudG" cx="50%" cy="50%" r="50%">' +
        '<stop offset="0%"   stop-color="#29B5E8" stop-opacity=".18"/>' +
        '<stop offset="45%"  stop-color="#29B5E8" stop-opacity=".06"/>' +
        '<stop offset="100%" stop-color="#29B5E8" stop-opacity="0"/>' +
      '</radialGradient>' +
      '<clipPath id="bgClip"><circle cx="400" cy="400" r="372"/></clipPath>' +
      '<filter id="bgPGlow"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
      '<filter id="bgSGlow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
    '</defs>' +
    '<circle cx="400" cy="400" r="372" fill="url(#bgCloudG)"/>' +
    '<circle cx="400" cy="400" r="372" fill="none" stroke="#29B5E8" stroke-opacity=".14" stroke-width="1.5"/>' +
    '<circle cx="400" cy="400" r="240" fill="none" stroke="#29B5E8" stroke-opacity=".04" stroke-width="1" stroke-dasharray="3 9"/>' +
    '<g clip-path="url(#bgClip)" filter="url(#bgSGlow)">' +
      '<path d="M 68 68 C 180 180 290 300 400 400"   fill="none" stroke="#29B5E8" stroke-width="1"  stroke-opacity=".3"  stroke-dasharray="8 10"><animate attributeName="stroke-dashoffset" values="0;-360;0" dur="5s"   repeatCount="indefinite"/></path>' +
      '<path d="M 732 68 C 600 180 510 290 400 400"  fill="none" stroke="#29B5E8" stroke-width="1"  stroke-opacity=".3"  stroke-dasharray="8 10"><animate attributeName="stroke-dashoffset" values="0;-360;0" dur="6s"   repeatCount="indefinite" begin="-2s"/></path>' +
      '<path d="M 770 400 C 640 360 520 380 400 400" fill="none" stroke="#70D9F5" stroke-width=".8" stroke-opacity=".22" stroke-dasharray="6 12"><animate attributeName="stroke-dashoffset" values="0;-300;0" dur="7s"   repeatCount="indefinite" begin="-1s"/></path>' +
      '<path d="M 720 720 C 580 580 490 490 400 400" fill="none" stroke="#29B5E8" stroke-width="1"  stroke-opacity=".22" stroke-dasharray="8 10"><animate attributeName="stroke-dashoffset" values="0;-360;0" dur="5.5s" repeatCount="indefinite" begin="-3s"/></path>' +
      '<path d="M 400 770 C 410 640 405 520 400 400" fill="none" stroke="#29B5E8" stroke-width=".8" stroke-opacity=".18" stroke-dasharray="5 11"><animate attributeName="stroke-dashoffset" values="0;-260;0" dur="6.5s" repeatCount="indefinite" begin="-4s"/></path>' +
      '<path d="M 32 400 C 160 430 280 410 400 400"  fill="none" stroke="#70D9F5" stroke-width=".8" stroke-opacity=".22" stroke-dasharray="6 12"><animate attributeName="stroke-dashoffset" values="0;-280;0" dur="7.5s" repeatCount="indefinite" begin="-1.5s"/></path>' +
      '<path d="M 400 32 C 420 160 410 280 400 400"  fill="none" stroke="#29B5E8" stroke-width=".8" stroke-opacity=".18" stroke-dasharray="5 13"><animate attributeName="stroke-dashoffset" values="0;-240;0" dur="8s"   repeatCount="indefinite" begin="-5s"/></path>' +
      '<path d="M 80 720 C 200 600 300 500 400 400"  fill="none" stroke="#29B5E8" stroke-width=".8" stroke-opacity=".18" stroke-dasharray="6 10"><animate attributeName="stroke-dashoffset" values="0;-320;0" dur="6s"   repeatCount="indefinite" begin="-2.5s"/></path>' +
    '</g>' +
    '<circle cx="400" cy="400" r="28" fill="#29B5E8" fill-opacity=".1"/>' +
    '<circle cx="400" cy="400" r="18" fill="#29B5E8" fill-opacity=".15"/>' +
    '<circle cx="400" cy="400" r="36" fill="none" stroke="#29B5E8" stroke-width="1.5" stroke-opacity=".45">' +
      '<animate attributeName="r" values="28;55;28" dur="3.2s" repeatCount="indefinite"/>' +
      '<animate attributeName="opacity" values=".45;0;.45" dur="3.2s" repeatCount="indefinite"/>' +
    '</circle>' +
    '<path id="bgOrbitO" d="M772,400 A372,372 0 1 1 771.99,399.01" fill="none"/>' +
    '<path id="bgOrbitM" d="M640,400 A240,240 0 1 1 639.99,399.01" fill="none"/>' +
    '<path id="bgOrbitI" d="M520,400 A120,120 0 1 1 519.99,399.01" fill="none"/>' +
    '<g filter="url(#bgPGlow)">' +
      '<circle r="5"   fill="#29B5E8" fill-opacity=".9"><animateMotion dur="22s" repeatCount="indefinite"><mpath href="#bgOrbitO"/></animateMotion></circle>' +
      '<circle r="4"   fill="#70D9F5" fill-opacity=".75"><animateMotion dur="22s" repeatCount="indefinite" begin="-8s"><mpath href="#bgOrbitO"/></animateMotion></circle>' +
      '<circle r="3.5" fill="#fff"    fill-opacity=".45"><animateMotion dur="22s" repeatCount="indefinite" begin="-15s"><mpath href="#bgOrbitO"/></animateMotion></circle>' +
      '<circle r="4"   fill="#29B5E8" fill-opacity=".85"><animateMotion dur="15s" repeatCount="indefinite" begin="-2s"><mpath href="#bgOrbitM"/></animateMotion></circle>' +
      '<circle r="3.5" fill="#70D9F5" fill-opacity=".7"><animateMotion dur="15s" repeatCount="indefinite" begin="-7s"><mpath href="#bgOrbitM"/></animateMotion></circle>' +
      '<circle r="3"   fill="#fff"    fill-opacity=".4"><animateMotion dur="15s" repeatCount="indefinite" begin="-12s"><mpath href="#bgOrbitM"/></animateMotion></circle>' +
      '<circle r="3"   fill="#29B5E8" fill-opacity=".85"><animateMotion dur="8s" repeatCount="indefinite"><mpath href="#bgOrbitI"/></animateMotion></circle>' +
      '<circle r="2.5" fill="#70D9F5" fill-opacity=".65"><animateMotion dur="8s" repeatCount="indefinite" begin="-4s"><mpath href="#bgOrbitI"/></animateMotion></circle>' +
    '</g>' +
    '<g fill="#29B5E8">' +
      '<circle cx="155" cy="210" r="2.5"><animate attributeName="opacity" values="0;.55;0" dur="3.1s" begin="0s"    repeatCount="indefinite"/></circle>' +
      '<circle cx="620" cy="160" r="2"  ><animate attributeName="opacity" values="0;.42;0" dur="4.0s" begin="-1.5s" repeatCount="indefinite"/></circle>' +
      '<circle cx="680" cy="480" r="3"  ><animate attributeName="opacity" values="0;.5;0"  dur="2.8s" begin="-0.7s" repeatCount="indefinite"/></circle>' +
      '<circle cx="150" cy="580" r="2"  ><animate attributeName="opacity" values="0;.46;0" dur="3.6s" begin="-2.3s" repeatCount="indefinite"/></circle>' +
      '<circle cx="330" cy="700" r="2.5"><animate attributeName="opacity" values="0;.42;0" dur="4.4s" begin="-1.1s" repeatCount="indefinite"/></circle>' +
      '<circle cx="560" cy="680" r="2"  ><animate attributeName="opacity" values="0;.5;0"  dur="3.0s" begin="-3.5s" repeatCount="indefinite"/></circle>' +
      '<circle cx="710" cy="300" r="1.8"><animate attributeName="opacity" values="0;.38;0" dur="2.5s" begin="-0.4s" repeatCount="indefinite"/></circle>' +
      '<circle cx="100" cy="380" r="2.5"><animate attributeName="opacity" values="0;.5;0"  dur="3.8s" begin="-2.0s" repeatCount="indefinite"/></circle>' +
      '<circle cx="460" cy="120" r="2"  ><animate attributeName="opacity" values="0;.42;0" dur="4.2s" begin="-1.8s" repeatCount="indefinite"/></circle>' +
      '<circle cx="260" cy="128" r="1.8"><animate attributeName="opacity" values="0;.46;0" dur="3.3s" begin="-0.9s" repeatCount="indefinite"/></circle>' +
    '</g>' +
  '</svg>';
  document.body.insertBefore(wrap, document.body.firstChild);
})();
