// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,v,"e"),t=p.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,l,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,h,"$1."),t=p.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}var N=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function _(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function k(r){var n,e,t,a,o,f,c,s,p,l,y,h,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))f+=t;else{if(n=void 0!==t.precision,!(t=_(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),e=t.flags,p=0;p<e.length;p++)switch(a=e.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,E(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=w(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(l=t.arg,y=t.width,h=t.padRight,g=void 0,(g=y-l.length)<0?l:l=h?l+m(g):m(g)+l)),f+=t.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function x(r){var n,e,t,i;for(e=[],i=0,t=S.exec(r);t;)(n=r.slice(i,S.lastIndex-t[0].length)).length&&e.push(n),e.push(U(t)),i=S.lastIndex,t=S.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function I(r){var n,e;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[x(r)],e=1;e<arguments.length;e++)n.push(arguments[e]);return k.apply(null,n)}var j=Object.prototype,T=j.toString,V=j.__defineGetter__,F=j.__defineSetter__,O=j.__lookupGetter__,M=j.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===T.call(e))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(O.call(r,n)||M.call(r,n)?(t=r.__proto__,r.__proto__=j,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&V&&V.call(r,n,e.get),o&&F&&F.call(r,n,e.set),r};function G(r,n,e){$(r,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function R(r,n,e){$(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function H(r){return r!=r}var P=Math.sqrt,W=.7853981633974483,C=6123233995736766e-32;function L(r){var n,e,t,i,a;if(H(r))return NaN;if(r>0?t=r:(n=!0,t=-r),t>1)return NaN;if(t>.625)i=(e=1-t)*function(r){var n,e;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(n=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),e=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(n=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),e=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),n/e)}(e),e=P(e+e),a=W-e,a-=e=e*i-C,a+=W;else{if(t<1e-8)return r;a=(e=t*t)*function(r){var n,e;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(n=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,e=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(n=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),e=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),n/e)}(e),a=t*a+t}return n?-a:a}var Z=3.141592653589793,q=2/Z;function X(r,n,e){return H(r)||H(n)||H(e)||n>=e?NaN:r<n?0:r>=e?1:q*L(P((r-n)/(e-n)))}function Y(r){return function(){return r}}var z=2/Z;function B(r,n,e){$(r,n,{configurable:!1,enumerable:!1,get:e})}function D(r){return"number"==typeof r}R(X,"factory",(function(r,n){return H(r)||H(n)||r>=n?Y(NaN):function(e){return H(e)?NaN:e<r?0:e>=n?1:z*L(P((e-r)/(n-r)))}}));var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return J&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,nr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof nr?nr.toStringTag:"",tr=K()?function(r){var n,e,t,i,a;if(null==r)return Q.call(r);e=r[er],a=er,n=null!=(i=r)&&rr.call(i,a);try{r[er]=void 0}catch(n){return Q.call(r)}return t=Q.call(r),n?r[er]=e:delete r[er],t}:function(r){return Q.call(r)},ir=Number,ar=ir.prototype.toString,or=K();function ur(r){return"object"==typeof r&&(r instanceof ir||(or?function(r){try{return ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===tr(r)))}function fr(r){return D(r)||ur(r)}R(fr,"isPrimitive",D),R(fr,"isObject",ur);var cr,sr="function"==typeof Uint32Array,pr="function"==typeof Uint32Array?Uint32Array:null,lr="function"==typeof Uint32Array?Uint32Array:void 0;cr=function(){var r,n,e;if("function"!=typeof pr)return!1;try{n=new pr(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(sr&&e instanceof Uint32Array||"[object Uint32Array]"===tr(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var yr,hr=cr,gr="function"==typeof Float64Array,dr="function"==typeof Float64Array?Float64Array:null,vr="function"==typeof Float64Array?Float64Array:void 0;yr=function(){var r,n,e;if("function"!=typeof dr)return!1;try{n=new dr([1,3.14,-3.14,NaN]),e=n,r=(gr&&e instanceof Float64Array||"[object Float64Array]"===tr(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var br,wr=yr,mr="function"==typeof Uint8Array,Nr="function"==typeof Uint8Array?Uint8Array:null,Ar="function"==typeof Uint8Array?Uint8Array:void 0;br=function(){var r,n,e;if("function"!=typeof Nr)return!1;try{n=new Nr(n=[1,3.14,-3.14,256,257]),e=n,r=(mr&&e instanceof Uint8Array||"[object Uint8Array]"===tr(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var Er,_r=br,kr="function"==typeof Uint16Array,Sr="function"==typeof Uint16Array?Uint16Array:null,Ur="function"==typeof Uint16Array?Uint16Array:void 0;Er=function(){var r,n,e;if("function"!=typeof Sr)return!1;try{n=new Sr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(kr&&e instanceof Uint16Array||"[object Uint16Array]"===tr(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var xr,Ir={uint16:Er,uint8:_r};(xr=new Ir.uint16(1))[0]=4660;var jr=52===new Ir.uint8(xr.buffer)[0],Tr=!0===jr?1:0,Vr=new wr(1),Fr=new hr(Vr.buffer);function Or(r){return Vr[0]=r,Fr[Tr]}var Mr=!0===jr?1:0,$r=new wr(1),Gr=new hr($r.buffer);function Rr(r,n){return $r[0]=r,Gr[Mr]=n>>>0,$r[0]}var Hr=1023,Pr=ir.NEGATIVE_INFINITY,Wr=.6931471803691238,Cr=1.9082149292705877e-10,Lr=0x40000000000000,Zr=.3333333333333333,qr=1048575,Xr=2146435072,Yr=1048576,zr=1072693248;function Br(r){var n,e,t,i,a,o,u,f,c,s,p,l;return 0===r?Pr:H(r)||r<0?NaN:(a=0,(e=Or(r))<Yr&&(a-=54,e=Or(r*=Lr)),e>=Xr?r+r:(a+=(e>>20)-Hr|0,a+=(f=614244+(e&=qr)&1048576|0)>>20|0,u=(r=Rr(r,e|f^zr))-1,(qr&2+e)<3?0===u?0===a?0:a*Wr+a*Cr:(o=u*u*(.5-Zr*u),0===a?u-o:a*Wr-(o-a*Cr-u)):(f=e-398458|0,c=440401-e|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),t=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=t+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*Wr-(n-(s*(n+o)+a*Cr)-u)):0===a?u-s*(u-o):a*Wr-(s*(u-o)-a*Cr-u))))}var Dr=Br(W);function Jr(r,n){return H(r)||H(n)||r>=n?NaN:Dr+Br(n-r)}function Kr(r,n){return H(r)||H(n)||r>=n?NaN:-1.5}function Qr(r,n){return r>=n?NaN:.5*(r+n)}function rn(r,n){return r>=n?NaN:.5*(r+n)}function nn(r,n){return H(r)||H(n)||r>=n?NaN:r}function en(r,n){return H(r)||H(n)||r>=n?NaN:0}function tn(r,n){return r>=n?NaN:.35355339059327373*(n-r)}var an=Math.floor;function on(r){return an(r)===r}function un(r){return on(r/2)}function fn(r){return un(r>0?r-1:r+1)}var cn,sn,pn=Number.POSITIVE_INFINITY;function ln(r){return r===pn||r===Pr}function yn(r){return Math.abs(r)}!0===jr?(cn=1,sn=0):(cn=0,sn=1);var hn={HIGH:cn,LOW:sn},gn=new wr(1),dn=new hr(gn.buffer),vn=hn.HIGH,bn=hn.LOW;function wn(r,n,e,t){return gn[0]=r,n[t]=dn[vn],n[t+e]=dn[bn],n}function mn(r){return wn(r,[0,0],1,0)}R(mn,"assign",wn);var Nn=!0===jr?0:1,An=new wr(1),En=new hr(An.buffer);function _n(r,n){return An[0]=r,En[Nn]=n>>>0,An[0]}function kn(r){return 0|r}var Sn,Un,xn=2147483647,In=2147483648;!0===jr?(Sn=1,Un=0):(Sn=0,Un=1);var jn={HIGH:Sn,LOW:Un},Tn=new wr(1),Vn=new hr(Tn.buffer),Fn=jn.HIGH,On=jn.LOW;function Mn(r,n){return Vn[Fn]=r,Vn[On]=n,Tn[0]}var $n=[0,0];function Gn(r,n){var e,t;return mn.assign(r,$n,1,0),e=$n[0],e&=xn,t=Or(n),Mn(e|=t&=In,$n[1])}var Rn=1072693247,Hn=1e300,Pn=1e-300,Wn=1048575,Cn=1048576,Ln=1072693248,Zn=536870912,qn=524288,Xn=20,Yn=9007199254740992,zn=.9617966939259756,Bn=.9617967009544373,Dn=-7.028461650952758e-9,Jn=[1,1.5],Kn=[0,.5849624872207642],Qn=[0,1.350039202129749e-8],re=1.4426950408889634,ne=1.4426950216293335,ee=1.9259629911266175e-8,te=1023,ie=-1023,ae=-1074,oe=22250738585072014e-324,ue=4503599627370496;function fe(r,n,e,t){return H(r)||ln(r)?(n[t]=r,n[t+e]=0,n):0!==r&&yn(r)<oe?(n[t]=r*ue,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}R((function(r){return fe(r,[0,0],1,0)}),"assign",fe);var ce=2146435072,se=2220446049250313e-31,pe=2148532223,le=[0,0],ye=[0,0];function he(r,n){var e,t;return 0===n||0===r||H(r)||ln(r)?r:(fe(r,le,1,0),r=le[0],n+=le[1],n+=function(r){var n=Or(r);return(n=(n&ce)>>>20)-Hr|0}(r),n<ae?Gn(0,r):n>te?r<0?Pr:pn:(n<=ie?(n+=52,t=se):t=1,mn.assign(r,ye,1,0),e=ye[0],e&=pe,t*Mn(e|=n+Hr<<20,ye[1])))}var ge=.6931471805599453,de=1048575,ve=1048576,be=1071644672,we=20,me=.6931471824645996,Ne=-1.904654299957768e-9,Ae=1072693247,Ee=1105199104,_e=1139802112,ke=1083179008,Se=1072693248,Ue=1083231232,xe=3230714880,Ie=31,je=1e300,Te=1e-300,Ve=8008566259537294e-32,Fe=[0,0],Oe=[0,0];function Me(r,n){var e,t,i,a,o,u,f,c,s,p,l,y,h,g;if(H(r)||H(n))return NaN;if(mn.assign(n,Fe,1,0),o=Fe[0],0===Fe[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return P(r);if(-.5===n)return 1/P(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(ln(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:yn(r)<1==(n===pn)?0:pn}(r,n)}if(mn.assign(r,Fe,1,0),a=Fe[0],0===Fe[1]){if(0===a)return function(r,n){return n===Pr?pn:n===pn?0:n>0?fn(n)?r:0:fn(n)?Gn(pn,r):pn}(r,n);if(1===r)return 1;if(-1===r&&fn(n))return-1;if(ln(r))return r===Pr?Me(-0,-n):n<0?0:pn}if(r<0&&!1===on(n))return(r-r)/(r-r);if(i=yn(r),e=a&xn|0,t=o&xn|0,f=o>>>Ie|0,u=(u=a>>>Ie|0)&&fn(n)?-1:1,t>Ee){if(t>_e)return function(r,n){return(Or(r)&xn)<=Rn?n<0?Hn*Hn:Pn*Pn:n>0?Hn*Hn:Pn*Pn}(r,n);if(e<Ae)return 1===f?u*je*je:u*Te*Te;if(e>Se)return 0===f?u*je*je:u*Te*Te;l=function(r,n){var e,t,i,a,o,u,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),e=(u=i*ee-a*re)-((t=_n(t=(o=ne*i)+u,0))-o),r[0]=t,r[1]=e,r}(Oe,i)}else l=function(r,n,e){var t,i,a,o,u,f,c,s,p,l,y,h,g,d,v,b,w,m,N,A,E;return m=0,e<Cn&&(m-=53,e=Or(n*=Yn)),m+=(e>>Xn)-Hr|0,e=(N=e&Wn|0)|Ln|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,e-=Cn),o=_n(i=(b=(n=Rr(n,e))-(c=Jn[A]))*(w=1/(n+c)),0),t=(e>>1|Zn)+qn,f=Rr(0,t+=A<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=_n(f=3+(a=o*o)+(v+=(u=w*(b-o*f-o*(n-(f-c))))*(o+i)),0),p=_n(p=(b=o*f)+(w=u*f+(v-(f-3-a))*i),0),l=Bn*p,g=(y=Dn*p+(w-(p-b))*zn+Qn[A])-((h=_n(h=l+y+(s=Kn[A])+(d=m),0))-d-s-l),r[0]=h,r[1]=g,r}(Oe,i,e);if(y=(p=(n-(c=_n(n,0)))*l[0]+n*l[1])+(s=c*l[0]),mn.assign(y,Fe,1,0),h=kn(Fe[0]),g=kn(Fe[1]),h>=ke){if(0!=(h-ke|g))return u*je*je;if(p+Ve>y-s)return u*je*je}else if((h&xn)>=Ue){if(0!=(h-xe|g))return u*Te*Te;if(p<=y-s)return u*Te*Te}return y=function(r,n,e){var t,i,a,o,u,f,c,s,p,l;return p=((s=r&xn|0)>>we)-Hr|0,c=0,s>be&&(i=Rr(0,((c=r+(ve>>p+1)>>>0)&~(de>>(p=((c&xn)>>we)-Hr|0)))>>>0),c=(c&de|ve)>>we-p>>>0,r<0&&(c=-c),n-=i),r=kn(r=Or(f=1-((f=(a=(i=_n(i=e+n,0))*me)+(o=(e-(i-n))*ge+i*Ne))*(t=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<we>>>0)>>we<=0?he(f,c):Rr(f,r)}(h,s,p),u*y}function $e(r,n){return r>=n?NaN:.125*Me(n-r,2)}var Ge=1.1447298858494002;function Re(r,n,e){return H(r)||H(n)||H(e)||n>=e?NaN:r<n?Pr:r>=e?0:ge-Ge+Br(L(P((r-n)/(e-n))))}function He(r,n,e){return H(r)||H(n)||H(e)||n>=e?NaN:r<n||r>e?Pr:-(Ge+Br((r-n)*(e-r))/2)}function Pe(r,n,e){return H(r)||H(n)||H(e)||n>=e?NaN:r<n||r>e?0:1/(Z*P((r-n)*(e-r)))}function We(r,n){var e,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(e=.5*a))+(1-i-e+(a*t-r*n))}R(Re,"factory",(function(r,n){return H(r)||H(n)||r>=n?Y(NaN):function(e){return H(e)?NaN:e<r?Pr:e>=n?0:ge-Ge+Br(L(P((e-r)/(n-r))))}})),R(He,"factory",(function(r,n){return H(r)||H(n)||r>=n?Y(NaN):function(e){return H(e)?NaN:e<r||e>n?Pr:-(Ge+Br((e-r)*(n-e))/2)}})),R(Pe,"factory",(function(r,n){return H(r)||H(n)||r>=n?Y(NaN):function(e){return H(e)?NaN:e<r||e>n?0:1/(Z*P((e-r)*(n-e)))}}));var Ce=-.16666666666666632,Le=.00833333333332249,Ze=-.0001984126982985795,qe=27557313707070068e-22,Xe=-2.5050760253406863e-8,Ye=1.58969099521155e-10;function ze(r,n){var e,t,i;return e=Le+(i=r*r)*(Ze+i*qe)+i*(i*i)*(Xe+i*Ye),t=i*r,0===n?r+t*(Ce+i*e):r-(i*(.5*n-t*e)-n-t*Ce)}var Be=!0===jr?0:1,De=new wr(1),Je=new hr(De.buffer);function Ke(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var Qe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],rt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],nt=16777216,et=5.960464477539063e-8,tt=Ke(20),it=Ke(20),at=Ke(20),ot=Ke(20);function ut(r,n,e,t,i,a,o,u,f){var c,s,p,l,y,h,g,d,v;for(l=a,v=t[e],d=e,y=0;d>0;y++)s=et*v|0,ot[y]=v-nt*s|0,v=t[d-1]+s,d-=1;if(v=he(v,i),v-=8*an(.125*v),v-=g=0|v,p=0,i>0?(g+=y=ot[e-1]>>24-i,ot[e-1]-=y<<24-i,p=ot[e-1]>>23-i):0===i?p=ot[e-1]>>23:v>=.5&&(p=2),p>0){for(g+=1,c=0,y=0;y<e;y++)d=ot[y],0===c?0!==d&&(c=1,ot[y]=16777216-d):ot[y]=16777215-d;if(i>0)switch(i){case 1:ot[e-1]&=8388607;break;case 2:ot[e-1]&=4194303}2===p&&(v=1-v,0!==c&&(v-=he(1,i)))}if(0===v){for(d=0,y=e-1;y>=a;y--)d|=ot[y];if(0===d){for(h=1;0===ot[a-h];h++);for(y=e+1;y<=e+h;y++){for(f[u+y]=Qe[o+y],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(y-d)];t[y]=s}return ut(r,n,e+=h,t,i,a,o,u,f)}}if(0===v)for(e-=1,i-=24;0===ot[e];)e-=1,i-=24;else(v=he(v,-i))>=nt?(s=et*v|0,ot[e]=v-nt*s|0,i+=24,ot[e+=1]=s):ot[e]=0|v;for(s=he(1,i),y=e;y>=0;y--)t[y]=s*ot[y],s*=et;for(y=e;y>=0;y--){for(s=0,h=0;h<=l&&h<=e-y;h++)s+=rt[h]*t[y+h];at[e-y]=s}for(s=0,y=e;y>=0;y--)s+=at[y];for(n[0]=0===p?s:-s,s=at[0]-s,y=1;y<=e;y++)s+=at[y];return n[1]=0===p?s:-s,7&g}function ft(r,n,e,t){var i,a,o,u,f,c,s;for((a=(e-3)/24|0)<0&&(a=0),u=e-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)tt[f]=c<0?0:Qe[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*tt[o+(f-c)];it[f]=i}return ut(r,n,4,it,u,4,a,o,tt)}var ct=Math.round,st=.6366197723675814,pt=1.5707963267341256,lt=6077100506506192e-26,yt=6077100506303966e-26,ht=20222662487959506e-37,gt=20222662487111665e-37,dt=84784276603689e-45,vt=2047;function bt(r,n,e){var t,i,a,o,u;return a=r-(t=ct(r*st))*pt,o=t*lt,u=n>>20|0,e[0]=a-o,u-(Or(e[0])>>20&vt)>16&&(o=t*ht-((i=a)-(a=i-(o=t*yt))-o),e[0]=a-o,u-(Or(e[0])>>20&vt)>49&&(o=t*dt-((i=a)-(a=i-(o=t*gt))-o),e[0]=a-o)),e[1]=a-e[0]-o,t}var wt=0,mt=16777216,Nt=1.5707963267341256,At=6077100506506192e-26,Et=2*At,_t=3*At,kt=4*At,St=598523,Ut=1072243195,xt=1073928572,It=1074752122,jt=1074977148,Tt=1075183036,Vt=1075388923,Ft=1075594811,Ot=1094263291,Mt=[0,0,0],$t=[0,0];function Gt(r,n){var e,t,i,a,o,u,f;if((i=Or(r)&xn|0)<=Ut)return n[0]=r,n[1]=0,0;if(i<=It)return(i&de)===St?bt(r,i,n):i<=xt?r>0?(f=r-Nt,n[0]=f-At,n[1]=f-n[0]-At,1):(f=r+Nt,n[0]=f+At,n[1]=f-n[0]+At,-1):r>0?(f=r-2*Nt,n[0]=f-Et,n[1]=f-n[0]-Et,2):(f=r+2*Nt,n[0]=f+Et,n[1]=f-n[0]+Et,-2);if(i<=Ft)return i<=Tt?i===jt?bt(r,i,n):r>0?(f=r-3*Nt,n[0]=f-_t,n[1]=f-n[0]-_t,3):(f=r+3*Nt,n[0]=f+_t,n[1]=f-n[0]+_t,-3):i===Vt?bt(r,i,n):r>0?(f=r-4*Nt,n[0]=f-kt,n[1]=f-n[0]-kt,4):(f=r+4*Nt,n[0]=f+kt,n[1]=f-n[0]+kt,-4);if(i<Ot)return bt(r,i,n);if(i>=ce)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return De[0]=r,Je[Be]}(r),f=Mn(i-((t=(i>>20)-1046)<<20|0),e),o=0;o<2;o++)Mt[o]=0|f,f=(f-Mt[o])*mt;for(Mt[2]=f,a=3;Mt[a-1]===wt;)a-=1;return u=ft(Mt,$t,t,a),r<0?(n[0]=-$t[0],n[1]=-$t[1],-u):(n[0]=$t[0],n[1]=$t[1],u)}var Rt=1072243195,Ht=1045430272,Pt=[0,0];function Wt(r){var n;if(n=Or(r),(n&=xn)<=Rt)return n<Ht?r:ze(r,0);if(n>=ce)return NaN;switch(3&Gt(r,Pt)){case 0:return ze(Pt[0],Pt[1]);case 1:return We(Pt[0],Pt[1]);case 2:return-ze(Pt[0],Pt[1]);default:return-We(Pt[0],Pt[1])}}var Ct=1.5707963267948966;function Lt(r,n,e){return H(n)||H(e)||n>=e||H(r)||r<0||r>1?NaN:n+Me(Wt(Ct*r),2)*(e-n)}function Zt(){var r,n;if(!(this instanceof Zt))return 0===arguments.length?new Zt:new Zt(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!D(r=arguments[0])||H(r))throw new TypeError(I("invalid argument. Minimum support must be a number. Value: `%s`.",r));if(!D(n)||H(n))throw new TypeError(I("invalid argument. Maximum support must be a number. Value: `%s`.",n));if(r>=n)throw new RangeError(I("invalid arguments. Minimum support must be less than maximum support. Value: `(%f, %f)`.",r,n))}else r=0,n=1;return $(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!D(e)||H(e))throw new TypeError(I("invalid assignment. Must be a number. Value: `%s`.",e));if(e>=n)throw new RangeError(I("invalid assignment. Must be less than %f. Value: `%f`.",n,e));r=e}}),$(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(e){if(!D(e)||H(e))throw new TypeError(I("invalid assignment. Must be a number. Value: `%s`.",e));if(e<=r)throw new RangeError(I("invalid assignment. Must be greater than %f. Value: `%f`.",r,e));n=e}}),this}R(Lt,"factory",(function(r,n){return H(r)||H(n)||r>=n?Y(NaN):function(e){return H(e)||e<0||e>1?NaN:r+Me(Wt(Ct*e),2)*(n-r)}})),B(Zt.prototype,"entropy",(function(){return Jr(this.a,this.b)})),B(Zt.prototype,"kurtosis",(function(){return Kr(this.a,this.b)})),B(Zt.prototype,"mean",(function(){return Qr(this.a,this.b)})),B(Zt.prototype,"median",(function(){return rn(this.a,this.b)})),B(Zt.prototype,"mode",(function(){return nn(this.a,this.b)})),B(Zt.prototype,"skewness",(function(){return en(this.a,this.b)})),B(Zt.prototype,"stdev",(function(){return tn(this.a,this.b)})),B(Zt.prototype,"variance",(function(){return $e(this.a,this.b)})),R(Zt.prototype,"cdf",(function(r){return X(r,this.a,this.b)})),R(Zt.prototype,"logcdf",(function(r){return Re(r,this.a,this.b)})),R(Zt.prototype,"logpdf",(function(r){return He(r,this.a,this.b)})),R(Zt.prototype,"pdf",(function(r){return Pe(r,this.a,this.b)})),R(Zt.prototype,"quantile",(function(r){return Lt(r,this.a,this.b)}));var qt={};return G(qt,"cdf",X),G(qt,"Arcsine",Zt),G(qt,"entropy",Jr),G(qt,"kurtosis",Kr),G(qt,"logcdf",Re),G(qt,"logpdf",He),G(qt,"mean",Qr),G(qt,"median",rn),G(qt,"mode",nn),G(qt,"pdf",Pe),G(qt,"quantile",Lt),G(qt,"skewness",en),G(qt,"stdev",tn),G(qt,"variance",$e),qt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).arcsine=n();
//# sourceMappingURL=browser.js.map
