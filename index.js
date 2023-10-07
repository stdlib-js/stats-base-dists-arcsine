// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,b,"e"),t=p.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,h,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function N(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function A(r,n,e){var t=n-r.length;return t<0?r:r=e?r+N(t):N(t)+r}var E=String.fromCharCode,_=isNaN,k=Array.isArray;function U(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function x(r){var n,e,t,a,o,c,s,l,p;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(n=void 0!==t.precision,!(t=U(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),e=t.flags,p=0;p<e.length;p++)switch(a=e.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,_(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function j(r){var n,e,t,i;for(e=[],i=0,t=S.exec(r);t;)(n=r.slice(i,S.lastIndex-t[0].length)).length&&e.push(n),e.push(I(t)),i=S.lastIndex,t=S.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function T(r){return"string"==typeof r}function V(r){var n,e,t;if(!T(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=j(r),(e=new Array(arguments.length))[0]=n,t=1;t<e.length;t++)e[t]=arguments[t];return x.apply(null,e)}var F=Object.prototype,O=F.toString,M=F.__defineGetter__,$=F.__defineSetter__,G=F.__lookupGetter__,R=F.__lookupSetter__,H=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(G.call(r,n)||R.call(r,n)?(t=r.__proto__,r.__proto__=F,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&M&&M.call(r,n,e.get),o&&$&&$.call(r,n,e.set),r};function P(r,n,e){H(r,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function W(r,n,e){H(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function C(r){return r!=r}var L=Math.sqrt,Z=.7853981633974483;function q(r){var n,e,t,i,a;if(C(r))return NaN;if(r>0?t=r:(n=!0,t=-r),t>1)return NaN;if(t>.625)i=(e=1-t)*function(r){var n,e;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(n=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),e=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(n=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),e=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),n/e)}(e),e=L(e+e),a=Z-e,a-=e=e*i-6123233995736766e-32,a+=Z;else{if(t<1e-8)return r;a=(e=t*t)*function(r){var n,e;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(n=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,e=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(n=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),e=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),n/e)}(e),a=t*a+t}return n?-a:a}var X=3.141592653589793;function Y(r,n,e){return C(r)||C(n)||C(e)||n>=e?NaN:r<n?0:r>=e?1:.6366197723675814*q(L((r-n)/(e-n)))}function z(r){return function(){return r}}function B(r,n,e){H(r,n,{configurable:!1,enumerable:!1,get:e})}function D(r){return"number"==typeof r}W(Y,"factory",(function(r,n){return C(r)||C(n)||r>=n?z(NaN):function(e){return C(e)?NaN:e<r?0:e>=n?1:.6366197723675814*q(L((e-r)/(n-r)))}}));var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return J&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,nr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof nr?nr.toStringTag:"",tr=K()?function(r){var n,e,t,i,a;if(null==r)return Q.call(r);e=r[er],a=er,n=null!=(i=r)&&rr.call(i,a);try{r[er]=void 0}catch(n){return Q.call(r)}return t=Q.call(r),n?r[er]=e:delete r[er],t}:function(r){return Q.call(r)},ir=Number,ar=ir.prototype.toString,or=K();function ur(r){return"object"==typeof r&&(r instanceof ir||(or?function(r){try{return ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===tr(r)))}function fr(r){return D(r)||ur(r)}W(fr,"isPrimitive",D),W(fr,"isObject",ur);var cr,sr="function"==typeof Uint32Array,lr="function"==typeof Uint32Array?Uint32Array:null,pr="function"==typeof Uint32Array?Uint32Array:void 0;cr=function(){var r,n,e;if("function"!=typeof lr)return!1;try{n=new lr(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(sr&&e instanceof Uint32Array||"[object Uint32Array]"===tr(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,hr=cr,gr="function"==typeof Float64Array,dr="function"==typeof Float64Array?Float64Array:null,vr="function"==typeof Float64Array?Float64Array:void 0;yr=function(){var r,n,e;if("function"!=typeof dr)return!1;try{n=new dr([1,3.14,-3.14,NaN]),e=n,r=(gr&&e instanceof Float64Array||"[object Float64Array]"===tr(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var br,wr=yr,mr="function"==typeof Uint8Array,Nr="function"==typeof Uint8Array?Uint8Array:null,Ar="function"==typeof Uint8Array?Uint8Array:void 0;br=function(){var r,n,e;if("function"!=typeof Nr)return!1;try{n=new Nr(n=[1,3.14,-3.14,256,257]),e=n,r=(mr&&e instanceof Uint8Array||"[object Uint8Array]"===tr(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var Er,_r=br,kr="function"==typeof Uint16Array,Ur="function"==typeof Uint16Array?Uint16Array:null,xr="function"==typeof Uint16Array?Uint16Array:void 0;Er=function(){var r,n,e;if("function"!=typeof Ur)return!1;try{n=new Ur(n=[1,3.14,-3.14,65536,65537]),e=n,r=(kr&&e instanceof Uint16Array||"[object Uint16Array]"===tr(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?xr:function(){throw new Error("not implemented")};var Sr,Ir={uint16:Er,uint8:_r};(Sr=new Ir.uint16(1))[0]=4660;var jr=52===new Ir.uint8(Sr.buffer)[0],Tr=!0===jr?1:0,Vr=new wr(1),Fr=new hr(Vr.buffer);function Or(r){return Vr[0]=r,Fr[Tr]}var Mr=!0===jr?1:0,$r=new wr(1),Gr=new hr($r.buffer);function Rr(r,n){return $r[0]=r,Gr[Mr]=n>>>0,$r[0]}var Hr=1023,Pr=ir.NEGATIVE_INFINITY,Wr=.6931471803691238,Cr=1.9082149292705877e-10,Lr=1048575;function Zr(r){var n,e,t,i,a,o,u,f,c,s,l,p;return 0===r?Pr:C(r)||r<0?NaN:(a=0,(e=Or(r))<1048576&&(a-=54,e=Or(r*=0x40000000000000)),e>=2146435072?r+r:(a+=(e>>20)-Hr|0,a+=(f=614244+(e&=Lr)&1048576|0)>>20|0,u=(r=Rr(r,e|1072693248^f))-1,(Lr&2+e)<3?0===u?0===a?0:a*Wr+a*Cr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Wr-(o-a*Cr-u)):(f=e-398458|0,c=440401-e|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*Wr-(n-(s*(n+o)+a*Cr)-u)):0===a?u-s*(u-o):a*Wr-(s*(u-o)-a*Cr-u))))}var qr=Zr(Z);function Xr(r,n){return C(r)||C(n)||r>=n?NaN:qr+Zr(n-r)}function Yr(r,n){return C(r)||C(n)||r>=n?NaN:-1.5}function zr(r,n){return r>=n?NaN:.5*(r+n)}function Br(r,n){return r>=n?NaN:.5*(r+n)}function Dr(r,n){return C(r)||C(n)||r>=n?NaN:r}function Jr(r,n){return C(r)||C(n)||r>=n?NaN:0}function Kr(r,n){return r>=n?NaN:.35355339059327373*(n-r)}var Qr=Math.floor;function rn(r){return Qr(r)===r}function nn(r){return rn(r/2)}function en(r){return nn(r>0?r-1:r+1)}var tn,an,on=Number.POSITIVE_INFINITY;function un(r){return r===on||r===Pr}function fn(r){return Math.abs(r)}!0===jr?(tn=1,an=0):(tn=0,an=1);var cn={HIGH:tn,LOW:an},sn=new wr(1),ln=new hr(sn.buffer),pn=cn.HIGH,yn=cn.LOW;function hn(r,n,e,t){return sn[0]=r,n[t]=ln[pn],n[t+e]=ln[yn],n}function gn(r){return hn(r,[0,0],1,0)}W(gn,"assign",hn);var dn=!0===jr?0:1,vn=new wr(1),bn=new hr(vn.buffer);function wn(r,n){return vn[0]=r,bn[dn]=n>>>0,vn[0]}function mn(r){return 0|r}var Nn,An,En=2147483647;!0===jr?(Nn=1,An=0):(Nn=0,An=1);var _n={HIGH:Nn,LOW:An},kn=new wr(1),Un=new hr(kn.buffer),xn=_n.HIGH,Sn=_n.LOW;function In(r,n){return Un[xn]=r,Un[Sn]=n,kn[0]}var jn=[0,0];function Tn(r,n){var e,t;return gn.assign(r,jn,1,0),e=jn[0],e&=En,t=Or(n),In(e|=t&=2147483648,jn[1])}var Vn=1048576,Fn=[1,1.5],On=[0,.5849624872207642],Mn=[0,1.350039202129749e-8];function $n(r,n,e,t){return C(r)||un(r)?(n[t]=r,n[t+e]=0,n):0!==r&&fn(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}W((function(r){return $n(r,[0,0],1,0)}),"assign",$n);var Gn=2146435072,Rn=[0,0],Hn=[0,0];function Pn(r,n){var e,t;return 0===n||0===r||C(r)||un(r)?r:($n(r,Rn,1,0),n+=Rn[1],n+=function(r){var n=Or(r);return(n=(n&Gn)>>>20)-Hr|0}(r=Rn[0]),n<-1074?Tn(0,r):n>1023?r<0?Pr:on:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,gn.assign(r,Hn,1,0),e=Hn[0],e&=2148532223,t*In(e|=n+Hr<<20,Hn[1])))}var Wn=.6931471805599453,Cn=1048575,Ln=1048576,Zn=1083179008,qn=1e300,Xn=1e-300,Yn=[0,0],zn=[0,0];function Bn(r,n){var e,t,i,a,o,u,f,c,s,l,p,y,h,g;if(C(r)||C(n))return NaN;if(gn.assign(n,Yn,1,0),o=Yn[0],0===Yn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return L(r);if(-.5===n)return 1/L(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(un(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:fn(r)<1==(n===on)?0:on}(r,n)}if(gn.assign(r,Yn,1,0),a=Yn[0],0===Yn[1]){if(0===a)return function(r,n){return n===Pr?on:n===on?0:n>0?en(n)?r:0:en(n)?Tn(on,r):on}(r,n);if(1===r)return 1;if(-1===r&&en(n))return-1;if(un(r))return r===Pr?Bn(-0,-n):n<0?0:on}if(r<0&&!1===rn(n))return(r-r)/(r-r);if(i=fn(r),e=a&En|0,t=o&En|0,f=o>>>31|0,u=(u=a>>>31|0)&&en(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(Or(r)&En)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===f?u*qn*qn:u*Xn*Xn;if(e>1072693248)return 0===f?u*qn*qn:u*Xn*Xn;p=function(r,n){var e,t,i,a,o,u;return e=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=wn(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=e,r}(zn,i)}else p=function(r,n,e){var t,i,a,o,u,f,c,s,l,p,y,h,g,d,v,b,w,m,N,A,E;return m=0,e<Vn&&(m-=53,e=Or(n*=9007199254740992)),m+=(e>>20)-Hr|0,e=1072693248|(N=1048575&e|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,e-=Vn),o=wn(i=(b=(n=Rr(n,e))-(c=Fn[A]))*(w=1/(n+c)),0),t=524288+(e>>1|536870912),f=Rr(0,t+=A<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=wn(f=3+(a=o*o)+(v+=(u=w*(b-o*f-o*(n-(f-c))))*(o+i)),0),g=(y=-7.028461650952758e-9*(l=wn(l=(b=o*f)+(w=u*f+(v-(f-3-a))*i),0))+.9617966939259756*(w-(l-b))+Mn[A])-((h=wn(h=(p=.9617967009544373*l)+y+(s=On[A])+(d=m),0))-d-s-p),r[0]=h,r[1]=g,r}(zn,i,e);if(y=(l=(n-(c=wn(n,0)))*p[0]+n*p[1])+(s=c*p[0]),gn.assign(y,Yn,1,0),h=mn(Yn[0]),g=mn(Yn[1]),h>=Zn){if(0!=(h-Zn|g))return u*qn*qn;if(l+8008566259537294e-32>y-s)return u*qn*qn}else if((h&En)>=1083231232){if(0!=(h-3230714880|g))return u*Xn*Xn;if(l<=y-s)return u*Xn*Xn}return y=function(r,n,e){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&En|0)>>20)-Hr|0,c=0,s>1071644672&&(i=Rr(0,((c=r+(Ln>>l+1)>>>0)&~(Cn>>(l=((c&En)>>20)-Hr|0)))>>>0),c=(c&Cn|Ln)>>20-l>>>0,r<0&&(c=-c),n-=i),r=mn(r=Or(f=1-((f=(a=.6931471824645996*(i=wn(i=e+n,0)))+(o=(e-(i-n))*Wn+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Pn(f,c):Rr(f,r)}(h,s,l),u*y}function Dn(r,n){return r>=n?NaN:.125*Bn(n-r,2)}var Jn=1.1447298858494002;function Kn(r,n,e){return C(r)||C(n)||C(e)||n>=e?NaN:r<n?Pr:r>=e?0:Wn-Jn+Zr(q(L((r-n)/(e-n))))}function Qn(r,n,e){return C(r)||C(n)||C(e)||n>=e?NaN:r<n||r>e?Pr:-(Jn+Zr((r-n)*(e-r))/2)}function re(r,n,e){return C(r)||C(n)||C(e)||n>=e?NaN:r<n||r>e?0:1/(X*L((r-n)*(e-r)))}function ne(r,n){var e,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(e=.5*a))+(1-i-e+(a*t-r*n))}W(Kn,"factory",(function(r,n){return C(r)||C(n)||r>=n?z(NaN):function(e){return C(e)?NaN:e<r?Pr:e>=n?0:Wn-Jn+Zr(q(L((e-r)/(n-r))))}})),W(Qn,"factory",(function(r,n){return C(r)||C(n)||r>=n?z(NaN):function(e){return C(e)?NaN:e<r||e>n?Pr:-(Jn+Zr((e-r)*(n-e))/2)}})),W(re,"factory",(function(r,n){return C(r)||C(n)||r>=n?z(NaN):function(e){return C(e)?NaN:e<r||e>n?0:1/(X*L((e-r)*(n-e)))}}));var ee=-.16666666666666632;function te(r,n){var e,t,i;return e=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===n?r+t*(ee+i*e):r-(i*(.5*n-t*e)-n-t*ee)}var ie=!0===jr?0:1,ae=new wr(1),oe=new hr(ae.buffer);function ue(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var fe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ce=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],se=16777216,le=5.960464477539063e-8,pe=ue(20),ye=ue(20),he=ue(20),ge=ue(20);function de(r,n,e,t,i,a,o,u,f){var c,s,l,p,y,h,g,d,v;for(p=a,v=t[e],d=e,y=0;d>0;y++)s=le*v|0,ge[y]=v-se*s|0,v=t[d-1]+s,d-=1;if(v=Pn(v,i),v-=8*Qr(.125*v),v-=g=0|v,l=0,i>0?(g+=y=ge[e-1]>>24-i,ge[e-1]-=y<<24-i,l=ge[e-1]>>23-i):0===i?l=ge[e-1]>>23:v>=.5&&(l=2),l>0){for(g+=1,c=0,y=0;y<e;y++)d=ge[y],0===c?0!==d&&(c=1,ge[y]=16777216-d):ge[y]=16777215-d;if(i>0)switch(i){case 1:ge[e-1]&=8388607;break;case 2:ge[e-1]&=4194303}2===l&&(v=1-v,0!==c&&(v-=Pn(1,i)))}if(0===v){for(d=0,y=e-1;y>=a;y--)d|=ge[y];if(0===d){for(h=1;0===ge[a-h];h++);for(y=e+1;y<=e+h;y++){for(f[u+y]=fe[o+y],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(y-d)];t[y]=s}return de(r,n,e+=h,t,i,a,o,u,f)}}if(0===v)for(e-=1,i-=24;0===ge[e];)e-=1,i-=24;else(v=Pn(v,-i))>=se?(s=le*v|0,ge[e]=v-se*s|0,i+=24,ge[e+=1]=s):ge[e]=0|v;for(s=Pn(1,i),y=e;y>=0;y--)t[y]=s*ge[y],s*=le;for(y=e;y>=0;y--){for(s=0,h=0;h<=p&&h<=e-y;h++)s+=ce[h]*t[y+h];he[e-y]=s}for(s=0,y=e;y>=0;y--)s+=he[y];for(n[0]=0===l?s:-s,s=he[0]-s,y=1;y<=e;y++)s+=he[y];return n[1]=0===l?s:-s,7&g}function ve(r,n,e,t){var i,a,o,u,f,c,s;for((a=(e-3)/24|0)<0&&(a=0),u=e-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)pe[f]=c<0?0:fe[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*pe[o+(f-c)];ye[f]=i}return de(r,n,4,ye,u,4,a,o,pe)}var be=Math.round;function we(r,n,e){var t,i,a,o,u;return a=r-1.5707963267341256*(t=be(.6366197723675814*r)),o=6077100506506192e-26*t,u=n>>20|0,e[0]=a-o,u-(Or(e[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),e[0]=a-o,u-(Or(e[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),e[0]=a-o)),e[1]=a-e[0]-o,t}var me=1.5707963267341256,Ne=6077100506506192e-26,Ae=2*Ne,Ee=3*Ne,_e=4*Ne,ke=[0,0,0],Ue=[0,0];function xe(r,n){var e,t,i,a,o,u,f;if((i=Or(r)&En|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(i&Cn)?we(r,i,n):i<=1073928572?r>0?(f=r-me,n[0]=f-Ne,n[1]=f-n[0]-Ne,1):(f=r+me,n[0]=f+Ne,n[1]=f-n[0]+Ne,-1):r>0?(f=r-2*me,n[0]=f-Ae,n[1]=f-n[0]-Ae,2):(f=r+2*me,n[0]=f+Ae,n[1]=f-n[0]+Ae,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?we(r,i,n):r>0?(f=r-3*me,n[0]=f-Ee,n[1]=f-n[0]-Ee,3):(f=r+3*me,n[0]=f+Ee,n[1]=f-n[0]+Ee,-3):1075388923===i?we(r,i,n):r>0?(f=r-4*me,n[0]=f-_e,n[1]=f-n[0]-_e,4):(f=r+4*me,n[0]=f+_e,n[1]=f-n[0]+_e,-4);if(i<1094263291)return we(r,i,n);if(i>=Gn)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return ae[0]=r,oe[ie]}(r),f=In(i-((t=(i>>20)-1046)<<20|0),e),o=0;o<2;o++)ke[o]=0|f,f=16777216*(f-ke[o]);for(ke[2]=f,a=3;0===ke[a-1];)a-=1;return u=ve(ke,Ue,t,a),r<0?(n[0]=-Ue[0],n[1]=-Ue[1],-u):(n[0]=Ue[0],n[1]=Ue[1],u)}var Se=[0,0];function Ie(r){var n;if(n=Or(r),(n&=En)<=1072243195)return n<1045430272?r:te(r,0);if(n>=Gn)return NaN;switch(3&xe(r,Se)){case 0:return te(Se[0],Se[1]);case 1:return ne(Se[0],Se[1]);case 2:return-te(Se[0],Se[1]);default:return-ne(Se[0],Se[1])}}var je=1.5707963267948966;function Te(r,n,e){return C(n)||C(e)||n>=e||C(r)||r<0||r>1?NaN:n+Bn(Ie(je*r),2)*(e-n)}function Ve(){var r,n;if(!(this instanceof Ve))return 0===arguments.length?new Ve:new Ve(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!D(r=arguments[0])||C(r))throw new TypeError(V("invalid argument. Minimum support must be a number. Value: `%s`.",r));if(!D(n)||C(n))throw new TypeError(V("invalid argument. Maximum support must be a number. Value: `%s`.",n));if(r>=n)throw new RangeError(V("invalid arguments. Minimum support must be less than maximum support. Value: `(%f, %f)`.",r,n))}else r=0,n=1;return H(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!D(e)||C(e))throw new TypeError(V("invalid assignment. Must be a number. Value: `%s`.",e));if(e>=n)throw new RangeError(V("invalid assignment. Must be less than %f. Value: `%f`.",n,e));r=e}}),H(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(e){if(!D(e)||C(e))throw new TypeError(V("invalid assignment. Must be a number. Value: `%s`.",e));if(e<=r)throw new RangeError(V("invalid assignment. Must be greater than %f. Value: `%f`.",r,e));n=e}}),this}W(Te,"factory",(function(r,n){return C(r)||C(n)||r>=n?z(NaN):function(e){return C(e)||e<0||e>1?NaN:r+Bn(Ie(je*e),2)*(n-r)}})),B(Ve.prototype,"entropy",(function(){return Xr(this.a,this.b)})),B(Ve.prototype,"kurtosis",(function(){return Yr(this.a,this.b)})),B(Ve.prototype,"mean",(function(){return zr(this.a,this.b)})),B(Ve.prototype,"median",(function(){return Br(this.a,this.b)})),B(Ve.prototype,"mode",(function(){return Dr(this.a,this.b)})),B(Ve.prototype,"skewness",(function(){return Jr(this.a,this.b)})),B(Ve.prototype,"stdev",(function(){return Kr(this.a,this.b)})),B(Ve.prototype,"variance",(function(){return Dn(this.a,this.b)})),W(Ve.prototype,"cdf",(function(r){return Y(r,this.a,this.b)})),W(Ve.prototype,"logcdf",(function(r){return Kn(r,this.a,this.b)})),W(Ve.prototype,"logpdf",(function(r){return Qn(r,this.a,this.b)})),W(Ve.prototype,"pdf",(function(r){return re(r,this.a,this.b)})),W(Ve.prototype,"quantile",(function(r){return Te(r,this.a,this.b)}));var Fe={};return P(Fe,"cdf",Y),P(Fe,"Arcsine",Ve),P(Fe,"entropy",Xr),P(Fe,"kurtosis",Yr),P(Fe,"logcdf",Kn),P(Fe,"logpdf",Qn),P(Fe,"mean",zr),P(Fe,"median",Br),P(Fe,"mode",Dr),P(Fe,"pdf",re),P(Fe,"quantile",Te),P(Fe,"skewness",Jr),P(Fe,"stdev",Kr),P(Fe,"variance",Dn),Fe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).arcsine=n();
//# sourceMappingURL=index.js.map