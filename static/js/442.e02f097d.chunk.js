"use strict";(self.webpackChunktest_task_abz=self.webpackChunktest_task_abz||[]).push([[442],{7442:function(e,t,n){n.d(t,{Z:function(){return Ot}});var o=n(885),r=n(4942),i=n(3366),a=n(7462),s=n(2791),c=n(8182);var u=function(e){return"string"===typeof e};function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return u(e)?t:(0,a.Z)({},t,{ownerState:(0,a.Z)({},t.ownerState,n)})}var l=n(4419),f=n(2065),d=n(7630),m=n(418),h=n(6482);function v(){return(0,m.Z)(h.Z)}var g=n(551),y=n(4036),b=n(1721),x=n(4164),w=!1,E=n(5545),O="unmounted",Z="exited",T="entering",R="entered",k="exiting",P=function(e){function t(t,n){var o;o=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?i?(r=Z,o.appearStatus=T):r=R:r=t.unmountOnExit||t.mountOnEnter?O:Z,o.state={status:r},o.nextCallback=null,o}(0,b.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===O?{status:Z}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==T&&n!==R&&(t=T):n!==T&&n!==R||(t=k)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!==typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===T?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===Z&&this.setState({status:O})},n.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,r=this.props.nodeRef?[o]:[x.findDOMNode(this),o],i=r[0],a=r[1],s=this.getTimeouts(),c=o?s.appear:s.enter;!e&&!n||w?this.safeSetState({status:R},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:T},(function(){t.props.onEntering(i,a),t.onTransitionEnd(c,(function(){t.safeSetState({status:R},(function(){t.props.onEntered(i,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:x.findDOMNode(this);t&&!w?(this.props.onExit(o),this.safeSetState({status:k},(function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:Z},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:Z},(function(){e.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:x.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],a=r[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===O)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,i.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(E.Z.Provider,{value:null},"function"===typeof n?n(e,o):s.cloneElement(s.Children.only(n),o))},t}(s.Component);function S(){}P.contextType=E.Z,P.propTypes={},P.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:S,onEntering:S,onEntered:S,onExit:S,onExiting:S,onExited:S},P.UNMOUNTED=O,P.EXITED=Z,P.ENTERING=T,P.ENTERED=R,P.EXITING=k;var C=P;function D(e,t){var n,o,r=e.timeout,i=e.easing,a=e.style,s=void 0===a?{}:a;return{duration:null!=(n=s.transitionDuration)?n:"number"===typeof r?r:r[t.mode]||0,easing:null!=(o=s.transitionTimingFunction)?o:"object"===typeof i?i[t.mode]:i,delay:s.transitionDelay}}var M=n(2071),j=n(184),L=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function A(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var N={entering:{opacity:1,transform:A(1)},entered:{opacity:1,transform:"none"}},W="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)[4-9]/i.test(navigator.userAgent),B=s.forwardRef((function(e,t){var n=e.addEndListener,o=e.appear,r=void 0===o||o,c=e.children,u=e.easing,p=e.in,l=e.onEnter,f=e.onEntered,d=e.onEntering,m=e.onExit,h=e.onExited,g=e.onExiting,y=e.style,b=e.timeout,x=void 0===b?"auto":b,w=e.TransitionComponent,E=void 0===w?C:w,O=(0,i.Z)(e,L),Z=s.useRef(),T=s.useRef(),R=v(),k=s.useRef(null),P=(0,M.Z)(c.ref,t),S=(0,M.Z)(k,P),B=function(e){return function(t){if(e){var n=k.current;void 0===t?e(n):e(n,t)}}},H=B(d),I=B((function(e,t){!function(e){e.scrollTop}(e);var n,o=D({style:y,timeout:x,easing:u},{mode:"enter"}),r=o.duration,i=o.delay,a=o.easing;"auto"===x?(n=R.transitions.getAutoHeightDuration(e.clientHeight),T.current=n):n=r,e.style.transition=[R.transitions.create("opacity",{duration:n,delay:i}),R.transitions.create("transform",{duration:W?n:.666*n,delay:i,easing:a})].join(","),l&&l(e,t)})),F=B(f),U=B(g),V=B((function(e){var t,n=D({style:y,timeout:x,easing:u},{mode:"exit"}),o=n.duration,r=n.delay,i=n.easing;"auto"===x?(t=R.transitions.getAutoHeightDuration(e.clientHeight),T.current=t):t=o,e.style.transition=[R.transitions.create("opacity",{duration:t,delay:r}),R.transitions.create("transform",{duration:W?t:.666*t,delay:W?r:r||.333*t,easing:i})].join(","),e.style.opacity=0,e.style.transform=A(.75),m&&m(e)})),q=B(h);return s.useEffect((function(){return function(){clearTimeout(Z.current)}}),[]),(0,j.jsx)(E,(0,a.Z)({appear:r,in:p,nodeRef:k,onEnter:I,onEntered:F,onEntering:H,onExit:V,onExited:q,onExiting:U,addEndListener:function(e){"auto"===x&&(Z.current=setTimeout(e,T.current||0)),n&&n(k.current,e)},timeout:"auto"===x?null:x},O,{children:function(e,t){return s.cloneElement(c,(0,a.Z)({style:(0,a.Z)({opacity:0,transform:A(.75),visibility:"exited"!==e||p?void 0:"hidden"},N[e],y,c.props.style),ref:S},t))}}))}));B.muiSupportAuto=!0;var H=B,I=n(7563),F=n(5721);function U(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function V(e){return e instanceof U(e).Element||e instanceof Element}function q(e){return e instanceof U(e).HTMLElement||e instanceof HTMLElement}function z(e){return"undefined"!==typeof ShadowRoot&&(e instanceof U(e).ShadowRoot||e instanceof ShadowRoot)}var _=Math.max,X=Math.min,Y=Math.round;function G(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(q(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(o=Y(n.width)/a||1),i>0&&(r=Y(n.height)/i||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function Q(e){var t=U(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function J(e){return e?(e.nodeName||"").toLowerCase():null}function K(e){return((V(e)?e.ownerDocument:e.document)||window.document).documentElement}function $(e){return G(K(e)).left+Q(e).scrollLeft}function ee(e){return U(e).getComputedStyle(e)}function te(e){var t=ee(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function ne(e,t,n){void 0===n&&(n=!1);var o=q(t),r=q(t)&&function(e){var t=e.getBoundingClientRect(),n=Y(t.width)/e.offsetWidth||1,o=Y(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),i=K(t),a=G(e,r),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(o||!o&&!n)&&(("body"!==J(t)||te(i))&&(s=function(e){return e!==U(e)&&q(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:Q(e);var t}(t)),q(t)?((c=G(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=$(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function oe(e){var t=G(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function re(e){return"html"===J(e)?e:e.assignedSlot||e.parentNode||(z(e)?e.host:null)||K(e)}function ie(e){return["html","body","#document"].indexOf(J(e))>=0?e.ownerDocument.body:q(e)&&te(e)?e:ie(re(e))}function ae(e,t){var n;void 0===t&&(t=[]);var o=ie(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=U(o),a=r?[i].concat(i.visualViewport||[],te(o)?o:[]):o,s=t.concat(a);return r?s:s.concat(ae(re(a)))}function se(e){return["table","td","th"].indexOf(J(e))>=0}function ce(e){return q(e)&&"fixed"!==ee(e).position?e.offsetParent:null}function ue(e){for(var t=U(e),n=ce(e);n&&se(n)&&"static"===ee(n).position;)n=ce(n);return n&&("html"===J(n)||"body"===J(n)&&"static"===ee(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&q(e)&&"fixed"===ee(e).position)return null;var n=re(e);for(z(n)&&(n=n.host);q(n)&&["html","body"].indexOf(J(n))<0;){var o=ee(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var pe="top",le="bottom",fe="right",de="left",me="auto",he=[pe,le,fe,de],ve="start",ge="end",ye="viewport",be="popper",xe=he.reduce((function(e,t){return e.concat([t+"-"+ve,t+"-"+ge])}),[]),we=[].concat(he,[me]).reduce((function(e,t){return e.concat([t,t+"-"+ve,t+"-"+ge])}),[]),Ee=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Oe(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}function Ze(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Te={placement:"bottom",modifiers:[],strategy:"absolute"};function Re(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function ke(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?Te:r;return function(e,t,n){void 0===n&&(n=i);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},Te,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:r,setOptions:function(n){var s="function"===typeof n?n(r.options):n;u(),r.options=Object.assign({},i,r.options,s),r.scrollParents={reference:V(e)?ae(e):e.contextElement?ae(e.contextElement):[],popper:ae(t)};var p=function(e){var t=Oe(e);return Ee.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,r.options.modifiers)));return r.orderedModifiers=p.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:r,name:t,instance:c,options:o}),u=function(){};a.push(s||u)}})),c.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,n=e.popper;if(Re(t,n)){r.rects={reference:ne(t,ue(n),"fixed"===r.options.strategy),popper:oe(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<r.orderedModifiers.length;o++)if(!0!==r.reset){var i=r.orderedModifiers[o],a=i.fn,u=i.options,p=void 0===u?{}:u,l=i.name;"function"===typeof a&&(r=a({state:r,options:p,name:l,instance:c})||r)}else r.reset=!1,o=-1}}},update:Ze((function(){return new Promise((function(e){c.forceUpdate(),e(r)}))})),destroy:function(){u(),s=!0}};if(!Re(e,t))return c;function u(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var Pe={passive:!0};function Se(e){return e.split("-")[0]}function Ce(e){return e.split("-")[1]}function De(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Me(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?Se(r):null,a=r?Ce(r):null,s=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2;switch(i){case pe:t={x:s,y:n.y-o.height};break;case le:t={x:s,y:n.y+n.height};break;case fe:t={x:n.x+n.width,y:c};break;case de:t={x:n.x-o.width,y:c};break;default:t={x:n.x,y:n.y}}var u=i?De(i):null;if(null!=u){var p="y"===u?"height":"width";switch(a){case ve:t[u]=t[u]-(n[p]/2-o[p]/2);break;case ge:t[u]=t[u]+(n[p]/2-o[p]/2)}}return t}var je={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Le(e){var t,n=e.popper,o=e.popperRect,r=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,l=e.isFixed,f=a.x,d=void 0===f?0:f,m=a.y,h=void 0===m?0:m,v="function"===typeof p?p({x:d,y:h}):{x:d,y:h};d=v.x,h=v.y;var g=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),b=de,x=pe,w=window;if(u){var E=ue(n),O="clientHeight",Z="clientWidth";if(E===U(n)&&"static"!==ee(E=K(n)).position&&"absolute"===s&&(O="scrollHeight",Z="scrollWidth"),r===pe||(r===de||r===fe)&&i===ge)x=le,h-=(l&&E===w&&w.visualViewport?w.visualViewport.height:E[O])-o.height,h*=c?1:-1;if(r===de||(r===pe||r===le)&&i===ge)b=fe,d-=(l&&E===w&&w.visualViewport?w.visualViewport.width:E[Z])-o.width,d*=c?1:-1}var T,R=Object.assign({position:s},u&&je),k=!0===p?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:Y(t*o)/o||0,y:Y(n*o)/o||0}}({x:d,y:h}):{x:d,y:h};return d=k.x,h=k.y,c?Object.assign({},R,((T={})[x]=y?"0":"",T[b]=g?"0":"",T.transform=(w.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",T)):Object.assign({},R,((t={})[x]=y?h+"px":"",t[b]=g?d+"px":"",t.transform="",t))}var Ae={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=we.reduce((function(e,n){return e[n]=function(e,t,n){var o=Se(e),r=[de,pe].indexOf(o)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[de,fe].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=a}},Ne={left:"right",right:"left",bottom:"top",top:"bottom"};function We(e){return e.replace(/left|right|bottom|top/g,(function(e){return Ne[e]}))}var Be={start:"end",end:"start"};function He(e){return e.replace(/start|end/g,(function(e){return Be[e]}))}function Ie(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&z(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ue(e,t){return t===ye?Fe(function(e){var t=U(e),n=K(e),o=t.visualViewport,r=n.clientWidth,i=n.clientHeight,a=0,s=0;return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,s=o.offsetTop)),{width:r,height:i,x:a+$(e),y:s}}(e)):V(t)?function(e){var t=G(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):Fe(function(e){var t,n=K(e),o=Q(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=_(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=_(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+$(e),c=-o.scrollTop;return"rtl"===ee(r||n).direction&&(s+=_(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(K(e)))}function Ve(e,t,n){var o="clippingParents"===t?function(e){var t=ae(re(e)),n=["absolute","fixed"].indexOf(ee(e).position)>=0&&q(e)?ue(e):e;return V(n)?t.filter((function(e){return V(e)&&Ie(e,n)&&"body"!==J(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),i=r[0],a=r.reduce((function(t,n){var o=Ue(e,n);return t.top=_(o.top,t.top),t.right=X(o.right,t.right),t.bottom=X(o.bottom,t.bottom),t.left=_(o.left,t.left),t}),Ue(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function qe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ze(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function _e(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?ye:s,u=n.elementContext,p=void 0===u?be:u,l=n.altBoundary,f=void 0!==l&&l,d=n.padding,m=void 0===d?0:d,h=qe("number"!==typeof m?m:ze(m,he)),v=p===be?"reference":be,g=e.rects.popper,y=e.elements[f?v:p],b=Ve(V(y)?y:y.contextElement||K(e.elements.popper),a,c),x=G(e.elements.reference),w=Me({reference:x,element:g,strategy:"absolute",placement:r}),E=Fe(Object.assign({},g,w)),O=p===be?E:x,Z={top:b.top-O.top+h.top,bottom:O.bottom-b.bottom+h.bottom,left:b.left-O.left+h.left,right:O.right-b.right+h.right},T=e.modifiersData.offset;if(p===be&&T){var R=T[r];Object.keys(Z).forEach((function(e){var t=[fe,le].indexOf(e)>=0?1:-1,n=[pe,le].indexOf(e)>=0?"y":"x";Z[e]+=R[n]*t}))}return Z}function Xe(e,t,n){return _(e,X(t,n))}var Ye={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,p=n.altBoundary,l=n.padding,f=n.tether,d=void 0===f||f,m=n.tetherOffset,h=void 0===m?0:m,v=_e(t,{boundary:c,rootBoundary:u,padding:l,altBoundary:p}),g=Se(t.placement),y=Ce(t.placement),b=!y,x=De(g),w="x"===x?"y":"x",E=t.modifiersData.popperOffsets,O=t.rects.reference,Z=t.rects.popper,T="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,R="number"===typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),k=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(E){if(i){var S,C="y"===x?pe:de,D="y"===x?le:fe,M="y"===x?"height":"width",j=E[x],L=j+v[C],A=j-v[D],N=d?-Z[M]/2:0,W=y===ve?O[M]:Z[M],B=y===ve?-Z[M]:-O[M],H=t.elements.arrow,I=d&&H?oe(H):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},U=F[C],V=F[D],q=Xe(0,O[M],I[M]),z=b?O[M]/2-N-q-U-R.mainAxis:W-q-U-R.mainAxis,Y=b?-O[M]/2+N+q+V+R.mainAxis:B+q+V+R.mainAxis,G=t.elements.arrow&&ue(t.elements.arrow),Q=G?"y"===x?G.clientTop||0:G.clientLeft||0:0,J=null!=(S=null==k?void 0:k[x])?S:0,K=j+Y-J,$=Xe(d?X(L,j+z-J-Q):L,j,d?_(A,K):A);E[x]=$,P[x]=$-j}if(s){var ee,te="x"===x?pe:de,ne="x"===x?le:fe,re=E[w],ie="y"===w?"height":"width",ae=re+v[te],se=re-v[ne],ce=-1!==[pe,de].indexOf(g),me=null!=(ee=null==k?void 0:k[w])?ee:0,he=ce?ae:re-O[ie]-Z[ie]-me+R.altAxis,ge=ce?re+O[ie]+Z[ie]-me-R.altAxis:se,ye=d&&ce?function(e,t,n){var o=Xe(e,t,n);return o>n?n:o}(he,re,ge):Xe(d?he:ae,re,d?ge:se);E[w]=ye,P[w]=ye-re}t.modifiersData[o]=P}},requiresIfExists:["offset"]};var Ge={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Se(n.placement),c=De(s),u=[de,fe].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return qe("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ze(e,he))}(r.padding,n),l=oe(i),f="y"===c?pe:de,d="y"===c?le:fe,m=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],h=a[c]-n.rects.reference[c],v=ue(i),g=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=p[f],x=g-l[u]-p[d],w=g/2-l[u]/2+y,E=Xe(b,w,x),O=c;n.modifiersData[o]=((t={})[O]=E,t.centerOffset=E-w,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!==typeof o||(o=t.elements.popper.querySelector(o)))&&Ie(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Qe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Je(e){return[pe,fe,le,de].some((function(t){return e[t]>=0}))}var Ke=ke({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,a=o.resize,s=void 0===a||a,c=U(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,Pe)})),s&&c.addEventListener("resize",n.update,Pe),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,Pe)})),s&&c.removeEventListener("resize",n.update,Pe)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Me({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:Se(t.placement),variation:Ce(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Le(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Le(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];q(r)&&J(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});q(o)&&J(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},Ae,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,p=n.boundary,l=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=Se(v),y=c||(g===v||!m?[We(v)]:function(e){if(Se(e)===me)return[];var t=We(e);return[He(e),t,He(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(Se(n)===me?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?we:c,p=Ce(o),l=p?s?xe:xe.filter((function(e){return Ce(e)===p})):he,f=l.filter((function(e){return u.indexOf(e)>=0}));0===f.length&&(f=l);var d=f.reduce((function(t,n){return t[n]=_e(e,{placement:n,boundary:r,rootBoundary:i,padding:a})[Se(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:l,padding:u,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,w=t.rects.popper,E=new Map,O=!0,Z=b[0],T=0;T<b.length;T++){var R=b[T],k=Se(R),P=Ce(R)===ve,S=[pe,le].indexOf(k)>=0,C=S?"width":"height",D=_e(t,{placement:R,boundary:p,rootBoundary:l,altBoundary:f,padding:u}),M=S?P?fe:de:P?le:pe;x[C]>w[C]&&(M=We(M));var j=We(M),L=[];if(i&&L.push(D[k]<=0),s&&L.push(D[M]<=0,D[j]<=0),L.every((function(e){return e}))){Z=R,O=!1;break}E.set(R,L)}if(O)for(var A=function(e){var t=b.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return Z=t,"break"},N=m?3:1;N>0;N--){if("break"===A(N))break}t.placement!==Z&&(t.modifiersData[o]._skip=!0,t.placement=Z,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},Ye,Ge,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=_e(t,{elementContext:"reference"}),s=_e(t,{altBoundary:!0}),c=Qe(a,o),u=Qe(s,r,i),p=Je(c),l=Je(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":l})}}]}),$e=n(2971);var et=s.forwardRef((function(e,t){var n=e.children,r=e.container,i=e.disablePortal,a=void 0!==i&&i,c=s.useState(null),u=(0,o.Z)(c,2),p=u[0],l=u[1],f=(0,I.Z)(s.isValidElement(n)?n.ref:null,t);return(0,F.Z)((function(){a||l(function(e){return"function"===typeof e?e():e}(r)||document.body)}),[r,a]),(0,F.Z)((function(){if(p&&!a)return(0,$e.Z)(t,p),function(){(0,$e.Z)(t,null)}}),[t,p,a]),a?s.isValidElement(n)?s.cloneElement(n,{ref:f}):n:p?x.createPortal(n,p):p})),tt=["anchorEl","children","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],nt=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function ot(e){return"function"===typeof e?e():e}var rt={},it=s.forwardRef((function(e,t){var n=e.anchorEl,r=e.children,c=e.direction,u=e.disablePortal,p=e.modifiers,l=e.open,f=e.placement,d=e.popperOptions,m=e.popperRef,h=e.TransitionProps,v=(0,i.Z)(e,tt),g=s.useRef(null),y=(0,I.Z)(g,t),b=s.useRef(null),x=(0,I.Z)(b,m),w=s.useRef(x);(0,F.Z)((function(){w.current=x}),[x]),s.useImperativeHandle(m,(function(){return b.current}),[]);var E=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(f,c),O=s.useState(E),Z=(0,o.Z)(O,2),T=Z[0],R=Z[1];s.useEffect((function(){b.current&&b.current.forceUpdate()})),(0,F.Z)((function(){if(n&&l){ot(n);var e=[{name:"preventOverflow",options:{altBoundary:u}},{name:"flip",options:{altBoundary:u}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;R(t.placement)}}];null!=p&&(e=e.concat(p)),d&&null!=d.modifiers&&(e=e.concat(d.modifiers));var t=Ke(ot(n),g.current,(0,a.Z)({placement:E},d,{modifiers:e}));return w.current(t),function(){t.destroy(),w.current(null)}}}),[n,u,p,l,d,E]);var k={placement:T};return null!==h&&(k.TransitionProps=h),(0,j.jsx)("div",(0,a.Z)({ref:y,role:"tooltip"},v,{children:"function"===typeof r?r(k):r}))})),at=s.forwardRef((function(e,t){var n=e.anchorEl,r=e.children,c=e.container,u=e.direction,p=void 0===u?"ltr":u,l=e.disablePortal,f=void 0!==l&&l,d=e.keepMounted,m=void 0!==d&&d,h=e.modifiers,v=e.open,g=e.placement,y=void 0===g?"bottom":g,b=e.popperOptions,x=void 0===b?rt:b,w=e.popperRef,E=e.style,O=e.transition,Z=void 0!==O&&O,T=(0,i.Z)(e,nt),R=s.useState(!0),k=(0,o.Z)(R,2),P=k[0],S=k[1];if(!m&&!v&&(!Z||P))return null;var C,D=c||(n?(C=ot(n),C&&C.ownerDocument||document).body:void 0);return(0,j.jsx)(et,{disablePortal:f,container:D,children:(0,j.jsx)(it,(0,a.Z)({anchorEl:n,direction:p,disablePortal:f,modifiers:h,ref:t,open:Z?!P:v,placement:y,popperOptions:x,popperRef:w},T,{style:(0,a.Z)({position:"fixed",top:0,left:0,display:v||!m||Z&&!P?null:"none"},E),TransitionProps:Z?{in:v,onEnter:function(){S(!1)},onExited:function(){S(!0)}}:null,children:r}))})})),st=n(9120),ct=(0,d.ZP)(at,{name:"MuiPopper",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),ut=s.forwardRef((function(e,t){var n=(0,st.Z)(),o=(0,g.Z)({props:e,name:"MuiPopper"});return(0,j.jsx)(ct,(0,a.Z)({direction:null==n?void 0:n.direction},o,{ref:t}))})),pt=n(6868),lt=n(5836),ft=n(3031),dt=n(8744),mt=n(9293),ht=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];var vt=(0,d.ZP)(ut,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(e,t){var n=e.ownerState;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})((function(e){var t,n=e.theme,o=e.ownerState,i=e.open;return(0,a.Z)({zIndex:(n.vars||n).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!i&&{pointerEvents:"none"},o.arrow&&(t={},(0,r.Z)(t,'&[data-popper-placement*="bottom"] .'.concat(mt.Z.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),(0,r.Z)(t,'&[data-popper-placement*="top"] .'.concat(mt.Z.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),(0,r.Z)(t,'&[data-popper-placement*="right"] .'.concat(mt.Z.arrow),(0,a.Z)({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),(0,r.Z)(t,'&[data-popper-placement*="left"] .'.concat(mt.Z.arrow),(0,a.Z)({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),t))})),gt=(0,d.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(e,t){var n=e.ownerState;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t["tooltipPlacement".concat((0,y.Z)(n.placement.split("-")[0]))]]}})((function(e){var t,n,o=e.theme,i=e.ownerState;return(0,a.Z)({backgroundColor:o.vars?"rgba(".concat(o.vars.palette.grey.darkChannel," / 0.92)"):(0,f.Fq)(o.palette.grey[700],.92),borderRadius:(o.vars||o).shape.borderRadius,color:(o.vars||o).palette.common.white,fontFamily:o.typography.fontFamily,padding:"4px 8px",fontSize:o.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:o.typography.fontWeightMedium},i.arrow&&{position:"relative",margin:0},i.touch&&{padding:"8px 16px",fontSize:o.typography.pxToRem(14),lineHeight:"".concat((n=16/14,Math.round(1e5*n)/1e5),"em"),fontWeight:o.typography.fontWeightRegular},(t={},(0,r.Z)(t,".".concat(mt.Z.popper,'[data-popper-placement*="left"] &'),(0,a.Z)({transformOrigin:"right center"},i.isRtl?(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}):(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}))),(0,r.Z)(t,".".concat(mt.Z.popper,'[data-popper-placement*="right"] &'),(0,a.Z)({transformOrigin:"left center"},i.isRtl?(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}):(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}))),(0,r.Z)(t,".".concat(mt.Z.popper,'[data-popper-placement*="top"] &'),(0,a.Z)({transformOrigin:"center bottom",marginBottom:"14px"},i.touch&&{marginBottom:"24px"})),(0,r.Z)(t,".".concat(mt.Z.popper,'[data-popper-placement*="bottom"] &'),(0,a.Z)({transformOrigin:"center top",marginTop:"14px"},i.touch&&{marginTop:"24px"})),t))})),yt=(0,d.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(e,t){return t.arrow}})((function(e){var t=e.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?"rgba(".concat(t.vars.palette.grey.darkChannel," / 0.9)"):(0,f.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}})),bt=!1,xt=null;function wt(e,t){return function(n){t&&t(n),e(n)}}var Et=s.forwardRef((function(e,t){var n,r,u,f,d,m,h=(0,g.Z)({props:e,name:"MuiTooltip"}),b=h.arrow,x=void 0!==b&&b,w=h.children,E=h.components,O=void 0===E?{}:E,Z=h.componentsProps,T=void 0===Z?{}:Z,R=h.describeChild,k=void 0!==R&&R,P=h.disableFocusListener,S=void 0!==P&&P,C=h.disableHoverListener,D=void 0!==C&&C,L=h.disableInteractive,A=void 0!==L&&L,N=h.disableTouchListener,W=void 0!==N&&N,B=h.enterDelay,I=void 0===B?100:B,F=h.enterNextDelay,U=void 0===F?0:F,V=h.enterTouchDelay,q=void 0===V?700:V,z=h.followCursor,_=void 0!==z&&z,X=h.id,Y=h.leaveDelay,G=void 0===Y?0:Y,Q=h.leaveTouchDelay,J=void 0===Q?1500:Q,K=h.onClose,$=h.onOpen,ee=h.open,te=h.placement,ne=void 0===te?"bottom":te,oe=h.PopperComponent,re=h.PopperProps,ie=void 0===re?{}:re,ae=h.title,se=h.TransitionComponent,ce=void 0===se?H:se,ue=h.TransitionProps,pe=(0,i.Z)(h,ht),le=v(),fe="rtl"===le.direction,de=s.useState(),me=(0,o.Z)(de,2),he=me[0],ve=me[1],ge=s.useState(null),ye=(0,o.Z)(ge,2),be=ye[0],xe=ye[1],we=s.useRef(!1),Ee=A||_,Oe=s.useRef(),Ze=s.useRef(),Te=s.useRef(),Re=s.useRef(),ke=(0,dt.Z)({controlled:ee,default:!1,name:"Tooltip",state:"open"}),Pe=(0,o.Z)(ke,2),Se=Pe[0],Ce=Pe[1],De=Se,Me=(0,lt.Z)(X),je=s.useRef(),Le=s.useCallback((function(){void 0!==je.current&&(document.body.style.WebkitUserSelect=je.current,je.current=void 0),clearTimeout(Re.current)}),[]);s.useEffect((function(){return function(){clearTimeout(Oe.current),clearTimeout(Ze.current),clearTimeout(Te.current),Le()}}),[Le]);var Ae=function(e){clearTimeout(xt),bt=!0,Ce(!0),$&&!De&&$(e)},Ne=(0,pt.Z)((function(e){clearTimeout(xt),xt=setTimeout((function(){bt=!1}),800+G),Ce(!1),K&&De&&K(e),clearTimeout(Oe.current),Oe.current=setTimeout((function(){we.current=!1}),le.transitions.duration.shortest)})),We=function(e){we.current&&"touchstart"!==e.type||(he&&he.removeAttribute("title"),clearTimeout(Ze.current),clearTimeout(Te.current),I||bt&&U?Ze.current=setTimeout((function(){Ae(e)}),bt?U:I):Ae(e))},Be=function(e){clearTimeout(Ze.current),clearTimeout(Te.current),Te.current=setTimeout((function(){Ne(e)}),G)},He=(0,ft.Z)(),Ie=He.isFocusVisibleRef,Fe=He.onBlur,Ue=He.onFocus,Ve=He.ref,qe=s.useState(!1),ze=(0,o.Z)(qe,2)[1],_e=function(e){Fe(e),!1===Ie.current&&(ze(!1),Be(e))},Xe=function(e){he||ve(e.currentTarget),Ue(e),!0===Ie.current&&(ze(!0),We(e))},Ye=function(e){we.current=!0;var t=w.props;t.onTouchStart&&t.onTouchStart(e)},Ge=We,Qe=Be;s.useEffect((function(){if(De)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||Ne(e)}}),[Ne,De]);var Je=(0,M.Z)(ve,t),Ke=(0,M.Z)(Ve,Je),$e=(0,M.Z)(w.ref,Ke);""===ae&&(De=!1);var et=s.useRef({x:0,y:0}),tt=s.useRef(),nt={},ot="string"===typeof ae;k?(nt.title=De||!ot||D?null:ae,nt["aria-describedby"]=De?Me:null):(nt["aria-label"]=ot?ae:null,nt["aria-labelledby"]=De&&!ot?Me:null);var rt=(0,a.Z)({},nt,pe,w.props,{className:(0,c.Z)(pe.className,w.props.className),onTouchStart:Ye,ref:$e},_?{onMouseMove:function(e){var t=w.props;t.onMouseMove&&t.onMouseMove(e),et.current={x:e.clientX,y:e.clientY},tt.current&&tt.current.update()}}:{});var it={};W||(rt.onTouchStart=function(e){Ye(e),clearTimeout(Te.current),clearTimeout(Oe.current),Le(),je.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Re.current=setTimeout((function(){document.body.style.WebkitUserSelect=je.current,We(e)}),q)},rt.onTouchEnd=function(e){w.props.onTouchEnd&&w.props.onTouchEnd(e),Le(),clearTimeout(Te.current),Te.current=setTimeout((function(){Ne(e)}),J)}),D||(rt.onMouseOver=wt(Ge,rt.onMouseOver),rt.onMouseLeave=wt(Qe,rt.onMouseLeave),Ee||(it.onMouseOver=Ge,it.onMouseLeave=Qe)),S||(rt.onFocus=wt(Xe,rt.onFocus),rt.onBlur=wt(_e,rt.onBlur),Ee||(it.onFocus=Xe,it.onBlur=_e));var at=s.useMemo((function(){var e,t=[{name:"arrow",enabled:Boolean(be),options:{element:be,padding:4}}];return null!=(e=ie.popperOptions)&&e.modifiers&&(t=t.concat(ie.popperOptions.modifiers)),(0,a.Z)({},ie.popperOptions,{modifiers:t})}),[be,ie]),st=(0,a.Z)({},h,{isRtl:fe,arrow:x,disableInteractive:Ee,placement:ne,PopperComponentProp:oe,touch:we.current}),ct=function(e){var t=e.classes,n=e.disableInteractive,o=e.arrow,r=e.touch,i=e.placement,a={popper:["popper",!n&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",r&&"touch","tooltipPlacement".concat((0,y.Z)(i.split("-")[0]))],arrow:["arrow"]};return(0,l.Z)(a,mt.Q,t)}(st),Et=null!=(n=O.Popper)?n:vt,Ot=null!=(r=null!=(u=O.Transition)?u:ce)?r:H,Zt=null!=(f=O.Tooltip)?f:gt,Tt=null!=(d=O.Arrow)?d:yt,Rt=p(Et,(0,a.Z)({},ie,T.popper),st),kt=p(Ot,(0,a.Z)({},ue,T.transition),st),Pt=p(Zt,(0,a.Z)({},T.tooltip),st),St=p(Tt,(0,a.Z)({},T.arrow),st);return(0,j.jsxs)(s.Fragment,{children:[s.cloneElement(w,rt),(0,j.jsx)(Et,(0,a.Z)({as:null!=oe?oe:ut,placement:ne,anchorEl:_?{getBoundingClientRect:function(){return{top:et.current.y,left:et.current.x,right:et.current.x,bottom:et.current.y,width:0,height:0}}}:he,popperRef:tt,open:!!he&&De,id:Me,transition:!0},it,Rt,{className:(0,c.Z)(ct.popper,null==ie?void 0:ie.className,null==(m=T.popper)?void 0:m.className),popperOptions:at,children:function(e){var t,n,o=e.TransitionProps;return(0,j.jsx)(Ot,(0,a.Z)({timeout:le.transitions.duration.shorter},o,kt,{children:(0,j.jsxs)(Zt,(0,a.Z)({},Pt,{className:(0,c.Z)(ct.tooltip,null==(t=T.tooltip)?void 0:t.className),children:[ae,x?(0,j.jsx)(Tt,(0,a.Z)({},St,{className:(0,c.Z)(ct.arrow,null==(n=T.arrow)?void 0:n.className),ref:xe})):null]}))}))}}))]})})),Ot=Et},9293:function(e,t,n){n.d(t,{Q:function(){return r}});var o=n(1217);function r(e){return(0,o.Z)("MuiTooltip",e)}var i=(0,n(5878).Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);t.Z=i}}]);
//# sourceMappingURL=442.e02f097d.chunk.js.map