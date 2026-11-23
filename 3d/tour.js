(function(){"use strict";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var ff,uf;const ua="170",kn="",Je="srgb",Ii="srgb-linear",rs="linear",Te="srgb",Zo="300 es";class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ha=Math.PI/180,da=180/Math.PI;function Vn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function $e(i,t,e){return Math.max(t,Math.min(e,i))}function Ef(i,t){return(i%t+t)%t}function pa(i,t,e){return(1-e)*i+e*t}function Un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,e,n,r,s,a,o,l,f){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,f)}set(t,e,n,r,s,a,o,l,f){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],f=n[1],u=n[4],h=n[7],c=n[2],d=n[5],g=n[8],v=r[0],m=r[3],p=r[6],S=r[1],y=r[4],_=r[7],O=r[2],R=r[5],L=r[8];return s[0]=a*v+o*S+l*O,s[3]=a*m+o*y+l*R,s[6]=a*p+o*_+l*L,s[1]=f*v+u*S+h*O,s[4]=f*m+u*y+h*R,s[7]=f*p+u*_+h*L,s[2]=c*v+d*S+g*O,s[5]=c*m+d*y+g*R,s[8]=c*p+d*_+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],f=t[7],u=t[8];return e*a*u-e*o*f-n*s*u+n*o*l+r*s*f-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],f=t[7],u=t[8],h=u*a-o*f,c=o*l-u*s,d=f*s-a*l,g=e*h+n*c+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(r*f-u*n)*v,t[2]=(o*n-r*a)*v,t[3]=c*v,t[4]=(u*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=d*v,t[7]=(n*l-f*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),f=Math.sin(s);return this.set(n*l,n*f,-n*(l*a+f*o)+a+t,-r*f,r*l,-r*(-f*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new fe;function Ko(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bf(){const i=Sr("canvas");return i.style.display="block",i}const Jo={};function Mr(i){i in Jo||(Jo[i]=!0,console.warn(i))}function Tf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Af(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ve={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Te&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Te&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?rs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Qo=[.64,.33,.3,.6,.15,.06],$o=[.2126,.7152,.0722],tl=[.3127,.329],el=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ve.define({[Ii]:{primaries:Qo,whitePoint:tl,transfer:rs,toXYZ:el,fromXYZ:nl,luminanceCoefficients:$o,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:Qo,whitePoint:tl,transfer:Te,toXYZ:el,fromXYZ:nl,luminanceCoefficients:$o,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});let Ni;class Rf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=Sr("canvas")),Ni.width=t.width,Ni.height=t.height;const n=Ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cf=0;class il{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ga(r[a].image)):s.push(ga(r[a]))}else s=ga(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pf=0;class We extends Di{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,l=1009,f=We.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Vn(),this.name="",this.source=new il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null,We.DEFAULT_MAPPING=300,We.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,r=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,f=l[0],u=l[4],h=l[8],c=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-c)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+c)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(f+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(f+1)/2,_=(d+1)/2,O=(p+1)/2,R=(u+c)/4,L=(h+v)/4,U=(g+m)/4;return y>_&&y>O?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=R/n,s=L/n):_>O?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=R/r,s=U/r):O<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),n=L/s,r=U/s),this.set(n,r,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(c-u)*(c-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-v)/S,this.z=(c-u)/S,this.w=Math.acos((f+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lf extends Di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new We(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new il(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Lf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rl extends We{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class If extends We{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],f=n[r+1],u=n[r+2],h=n[r+3];const c=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=f,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=c,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==c||f!==d||u!==g){let m=1-o;const p=l*c+f*d+u*g+h*v,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const O=Math.sqrt(y),R=Math.atan2(O,p*S);m=Math.sin(m*R)/O,o=Math.sin(o*R)/O}const _=o*S;if(l=l*m+c*_,f=f*m+d*_,u=u*m+g*_,h=h*m+v*_,m===1-o){const O=1/Math.sqrt(l*l+f*f+u*u+h*h);l*=O,f*=O,u*=O,h*=O}}t[e]=l,t[e+1]=f,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],f=n[r+2],u=n[r+3],h=s[a],c=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*d-f*c,t[e+1]=l*g+u*c+f*h-o*d,t[e+2]=f*g+u*d+o*c-l*h,t[e+3]=u*g-o*h-l*c-f*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,f=o(n/2),u=o(r/2),h=o(s/2),c=l(n/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=c*u*h+f*d*g,this._y=f*d*h-c*u*g,this._z=f*u*g+c*d*h,this._w=f*u*h-c*d*g;break;case"YXZ":this._x=c*u*h+f*d*g,this._y=f*d*h-c*u*g,this._z=f*u*g-c*d*h,this._w=f*u*h+c*d*g;break;case"ZXY":this._x=c*u*h-f*d*g,this._y=f*d*h+c*u*g,this._z=f*u*g+c*d*h,this._w=f*u*h-c*d*g;break;case"ZYX":this._x=c*u*h-f*d*g,this._y=f*d*h+c*u*g,this._z=f*u*g-c*d*h,this._w=f*u*h+c*d*g;break;case"YZX":this._x=c*u*h+f*d*g,this._y=f*d*h+c*u*g,this._z=f*u*g-c*d*h,this._w=f*u*h-c*d*g;break;case"XZY":this._x=c*u*h-f*d*g,this._y=f*d*h-c*u*g,this._z=f*u*g+c*d*h,this._w=f*u*h+c*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],f=e[2],u=e[6],h=e[10],c=n+o+h;if(c>0){const d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-f)*d,this._z=(a-r)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+f)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-f)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+f)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,f=e._z,u=e._w;return this._x=n*u+a*o+r*f-s*l,this._y=r*u+a*l+s*o-n*f,this._z=s*u+a*f+n*l-r*o,this._w=a*u-n*o-r*l-s*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const f=Math.sqrt(l),u=Math.atan2(f,o),h=Math.sin((1-e)*u)/f,c=Math.sin(e*u)/f;return this._w=a*h+this._w*c,this._x=n*h+this._x*c,this._y=r*h+this._y*c,this._z=s*h+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,f=2*(a*r-o*n),u=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+l*f+a*h-o*u,this.y=n+l*u+o*f-s*h,this.z=r+l*h+s*u-a*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xa.copy(this).projectOnVector(t),this.sub(xa)}reflect(t){return this.sub(xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new D,sl=new yr;class mi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(t.matrixWorld),this.union(ss)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),as.subVectors(this.max,Er),Fi.subVectors(t.a,Er),Oi.subVectors(t.b,Er),Bi.subVectors(t.c,Er),ti.subVectors(Oi,Fi),ei.subVectors(Bi,Oi),gi.subVectors(Fi,Bi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-gi.z,gi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,gi.z,0,-gi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-gi.y,gi.x,0];return!_a(e,Fi,Oi,Bi,as)||(e=[1,0,0,0,1,0,0,0,1],!_a(e,Fi,Oi,Bi,as))?!1:(os.crossVectors(ti,ei),e=[os.x,os.y,os.z],_a(e,Fi,Oi,Bi,as))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gn=[new D,new D,new D,new D,new D,new D,new D,new D],bn=new D,ss=new mi,Fi=new D,Oi=new D,Bi=new D,ti=new D,ei=new D,gi=new D,Er=new D,as=new D,os=new D,xi=new D;function _a(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){xi.fromArray(i,s);const o=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=t.dot(xi),f=e.dot(xi),u=n.dot(xi);if(Math.max(-Math.max(l,f,u),Math.min(l,f,u))>o)return!1}return!0}const Df=new mi,br=new D,va=new D;class zi{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Df.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);const e=br.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(br,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(va)),this.expandByPoint(br.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new D,Sa=new D,ls=new D,ni=new D,Ma=new D,cs=new D,ya=new D;class Ea{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Sa.copy(t).add(e).multiplyScalar(.5),ls.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(Sa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ls),o=ni.dot(this.direction),l=-ni.dot(ls),f=ni.lengthSq(),u=Math.abs(1-a*a);let h,c,d,g;if(u>0)if(h=a*l-o,c=a*o-l,g=s*u,h>=0)if(c>=-g)if(c<=g){const v=1/u;h*=v,c*=v,d=h*(h+a*c+2*o)+c*(a*h+c+2*l)+f}else c=s,h=Math.max(0,-(a*c+o)),d=-h*h+c*(c+2*l)+f;else c=-s,h=Math.max(0,-(a*c+o)),d=-h*h+c*(c+2*l)+f;else c<=-g?(h=Math.max(0,-(-a*s+o)),c=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+c*(c+2*l)+f):c<=g?(h=0,c=Math.min(Math.max(-s,-l),s),d=c*(c+2*l)+f):(h=Math.max(0,-(a*s+o)),c=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+c*(c+2*l)+f);else c=a>0?-s:s,h=Math.max(0,-(a*c+o)),d=-h*h+c*(c+2*l)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Sa).addScaledVector(ls,c),d}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),r=Wn.dot(Wn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const f=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,c=this.origin;return f>=0?(n=(t.min.x-c.x)*f,r=(t.max.x-c.x)*f):(n=(t.max.x-c.x)*f,r=(t.min.x-c.x)*f),u>=0?(s=(t.min.y-c.y)*u,a=(t.max.y-c.y)*u):(s=(t.max.y-c.y)*u,a=(t.min.y-c.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-c.z)*h,l=(t.max.z-c.z)*h):(o=(t.max.z-c.z)*h,l=(t.min.z-c.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,r,s){Ma.subVectors(e,t),cs.subVectors(n,t),ya.crossVectors(Ma,cs);let a=this.direction.dot(ya),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);const l=o*this.direction.dot(cs.crossVectors(ni,cs));if(l<0)return null;const f=o*this.direction.dot(Ma.cross(ni));if(f<0||l+f>a)return null;const u=-o*ni.dot(ya);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,r,s,a,o,l,f,u,h,c,d,g,v,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,f,u,h,c,d,g,v,m)}set(t,e,n,r,s,a,o,l,f,u,h,c,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=f,p[6]=u,p[10]=h,p[14]=c,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/ki.setFromMatrixColumn(t,0).length(),s=1/ki.setFromMatrixColumn(t,1).length(),a=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),f=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const c=a*u,d=a*h,g=o*u,v=o*h;e[0]=l*u,e[4]=-l*h,e[8]=f,e[1]=d+g*f,e[5]=c-v*f,e[9]=-o*l,e[2]=v-c*f,e[6]=g+d*f,e[10]=a*l}else if(t.order==="YXZ"){const c=l*u,d=l*h,g=f*u,v=f*h;e[0]=c+v*o,e[4]=g*o-d,e[8]=a*f,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=v+c*o,e[10]=a*l}else if(t.order==="ZXY"){const c=l*u,d=l*h,g=f*u,v=f*h;e[0]=c-v*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=v-c*o,e[2]=-a*f,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const c=a*u,d=a*h,g=o*u,v=o*h;e[0]=l*u,e[4]=g*f-d,e[8]=c*f+v,e[1]=l*h,e[5]=v*f+c,e[9]=d*f-g,e[2]=-f,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const c=a*l,d=a*f,g=o*l,v=o*f;e[0]=l*u,e[4]=v-c*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-f*u,e[6]=d*h+g,e[10]=c-v*h}else if(t.order==="XZY"){const c=a*l,d=a*f,g=o*l,v=o*f;e[0]=l*u,e[4]=-h,e[8]=f*u,e[1]=c*h+v,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=v*h+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uf,t,Nf)}lookAt(t,e,n){const r=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ii.crossVectors(n,pn),ii.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ii.crossVectors(n,pn)),ii.normalize(),fs.crossVectors(pn,ii),r[0]=ii.x,r[4]=fs.x,r[8]=pn.x,r[1]=ii.y,r[5]=fs.y,r[9]=pn.y,r[2]=ii.z,r[6]=fs.z,r[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],f=n[12],u=n[1],h=n[5],c=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],S=n[3],y=n[7],_=n[11],O=n[15],R=r[0],L=r[4],U=r[8],T=r[12],M=r[1],I=r[5],W=r[9],X=r[13],Y=r[2],at=r[6],J=r[10],N=r[14],$=r[3],At=r[7],It=r[11],Bt=r[15];return s[0]=a*R+o*M+l*Y+f*$,s[4]=a*L+o*I+l*at+f*At,s[8]=a*U+o*W+l*J+f*It,s[12]=a*T+o*X+l*N+f*Bt,s[1]=u*R+h*M+c*Y+d*$,s[5]=u*L+h*I+c*at+d*At,s[9]=u*U+h*W+c*J+d*It,s[13]=u*T+h*X+c*N+d*Bt,s[2]=g*R+v*M+m*Y+p*$,s[6]=g*L+v*I+m*at+p*At,s[10]=g*U+v*W+m*J+p*It,s[14]=g*T+v*X+m*N+p*Bt,s[3]=S*R+y*M+_*Y+O*$,s[7]=S*L+y*I+_*at+O*At,s[11]=S*U+y*W+_*J+O*It,s[15]=S*T+y*X+_*N+O*Bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],f=t[13],u=t[2],h=t[6],c=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*l*h-r*f*h-s*o*c+n*f*c+r*o*d-n*l*d)+v*(+e*l*d-e*f*c+s*a*c-r*a*d+r*f*u-s*l*u)+m*(+e*f*h-e*o*d-s*a*h+n*a*d+s*o*u-n*f*u)+p*(-r*o*u-e*l*h+e*o*c+r*a*h-n*a*c+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],f=t[7],u=t[8],h=t[9],c=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],S=h*m*f-v*c*f+v*l*d-o*m*d-h*l*p+o*c*p,y=g*c*f-u*m*f-g*l*d+a*m*d+u*l*p-a*c*p,_=u*v*f-g*h*f+g*o*d-a*v*d-u*o*p+a*h*p,O=g*h*l-u*v*l-g*o*c+a*v*c+u*o*m-a*h*m,R=e*S+n*y+r*_+s*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return t[0]=S*L,t[1]=(v*c*s-h*m*s-v*r*d+n*m*d+h*r*p-n*c*p)*L,t[2]=(o*m*s-v*l*s+v*r*f-n*m*f-o*r*p+n*l*p)*L,t[3]=(h*l*s-o*c*s-h*r*f+n*c*f+o*r*d-n*l*d)*L,t[4]=y*L,t[5]=(u*m*s-g*c*s+g*r*d-e*m*d-u*r*p+e*c*p)*L,t[6]=(g*l*s-a*m*s-g*r*f+e*m*f+a*r*p-e*l*p)*L,t[7]=(a*c*s-u*l*s+u*r*f-e*c*f-a*r*d+e*l*d)*L,t[8]=_*L,t[9]=(g*h*s-u*v*s-g*n*d+e*v*d+u*n*p-e*h*p)*L,t[10]=(a*v*s-g*o*s+g*n*f-e*v*f-a*n*p+e*o*p)*L,t[11]=(u*o*s-a*h*s-u*n*f+e*h*f+a*n*d-e*o*d)*L,t[12]=O*L,t[13]=(u*v*r-g*h*r+g*n*c-e*v*c-u*n*m+e*h*m)*L,t[14]=(g*o*r-a*v*r-g*n*l+e*v*l+a*n*m-e*o*m)*L,t[15]=(a*h*r-u*o*r+u*n*l-e*h*l-a*n*c+e*o*c)*L,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,f=s*a,u=s*o;return this.set(f*a+n,f*o-r*l,f*l+r*o,0,f*o+r*l,u*o+n,u*l-r*a,0,f*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,f=s+s,u=a+a,h=o+o,c=s*f,d=s*u,g=s*h,v=a*u,m=a*h,p=o*h,S=l*f,y=l*u,_=l*h,O=n.x,R=n.y,L=n.z;return r[0]=(1-(v+p))*O,r[1]=(d+_)*O,r[2]=(g-y)*O,r[3]=0,r[4]=(d-_)*R,r[5]=(1-(c+p))*R,r[6]=(m+S)*R,r[7]=0,r[8]=(g+y)*L,r[9]=(m-S)*L,r[10]=(1-(c+v))*L,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=ki.set(r[0],r[1],r[2]).length();const a=ki.set(r[4],r[5],r[6]).length(),o=ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Tn.copy(this);const f=1/s,u=1/a,h=1/o;return Tn.elements[0]*=f,Tn.elements[1]*=f,Tn.elements[2]*=f,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,e.setFromRotationMatrix(Tn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=2e3){const l=this.elements,f=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),c=(n+r)/(n-r);let d,g;if(o===2e3)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===2001)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=2e3){const l=this.elements,f=1/(e-t),u=1/(n-r),h=1/(a-s),c=(e+t)*f,d=(n+r)*u;let g,v;if(o===2e3)g=(a+s)*h,v=-2*h;else if(o===2001)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*f,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ki=new D,Tn=new Me,Uf=new D(0,0,0),Nf=new D(1,1,1),ii=new D,fs=new D,pn=new D,al=new Me,ol=new yr;class An{constructor(t=0,e=0,n=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],f=r[5],u=r[9],h=r[2],c=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,f),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,f),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,f),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ol.setFromEuler(this),this.setFromQuaternion(ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class ba{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ff=0;const ll=new D,Vi=new yr,qn=new Me,us=new D,Tr=new D,Of=new D,Bf=new yr,cl=new D(1,0,0),fl=new D(0,1,0),ul=new D(0,0,1),hl={type:"added"},zf={type:"removed"},Hi={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Be extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new D,e=new An,n=new yr,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Me},normalMatrix:{value:new fe}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(cl,t)}rotateY(t){return this.rotateOnAxis(fl,t)}rotateZ(t){return this.rotateOnAxis(ul,t)}translateOnAxis(t,e){return ll.copy(t).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cl,t)}translateY(t){return this.translateOnAxis(fl,t)}translateZ(t){return this.translateOnAxis(ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?us.copy(t):us.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Tr,us,this.up):qn.lookAt(us,Tr,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),Vi.setFromRotationMatrix(qn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hl),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zf),Ta.child=t,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hl),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,Of),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let f=0,u=l.length;f<u;f++){const h=l[f];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,f=this.material.length;l<f;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),f=a(t.textures),u=a(t.images),h=a(t.shapes),c=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),f.length>0&&(n.textures=f),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),c.length>0&&(n.skeletons=c),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const f in o){const u=o[f];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Be.DEFAULT_UP=new D(0,1,0),Be.DEFAULT_MATRIX_AUTO_UPDATE=!0,Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new D,Xn=new D,Aa=new D,Yn=new D,Gi=new D,Wi=new D,dl=new D,wa=new D,Ra=new D,Ca=new D,Pa=new we,La=new we,Ia=new we;class Sn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),wn.subVectors(t,e),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){wn.subVectors(r,e),Xn.subVectors(n,e),Aa.subVectors(t,e);const a=wn.dot(wn),o=wn.dot(Xn),l=wn.dot(Aa),f=Xn.dot(Xn),u=Xn.dot(Aa),h=a*f-o*o;if(h===0)return s.set(0,0,0),null;const c=1/h,d=(f*l-o*u)*c,g=(a*u-o*l)*c;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Pa.setScalar(0),La.setScalar(0),Ia.setScalar(0),Pa.fromBufferAttribute(t,e),La.fromBufferAttribute(t,n),Ia.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Pa,s.x),a.addScaledVector(La,s.y),a.addScaledVector(Ia,s.z),a}static isFrontFacing(t,e,n,r){return wn.subVectors(n,e),Xn.subVectors(t,e),wn.cross(Xn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),wn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Gi.subVectors(r,n),Wi.subVectors(s,n),wa.subVectors(t,n);const l=Gi.dot(wa),f=Wi.dot(wa);if(l<=0&&f<=0)return e.copy(n);Ra.subVectors(t,r);const u=Gi.dot(Ra),h=Wi.dot(Ra);if(u>=0&&h<=u)return e.copy(r);const c=l*h-u*f;if(c<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Gi,a);Ca.subVectors(t,s);const d=Gi.dot(Ca),g=Wi.dot(Ca);if(g>=0&&d<=g)return e.copy(s);const v=d*f-l*g;if(v<=0&&f>=0&&g<=0)return o=f/(f-g),e.copy(n).addScaledVector(Wi,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return dl.subVectors(s,r),o=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(dl,o);const p=1/(m+v+c);return a=v*p,o=c*p,e.copy(n).addScaledVector(Gi,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ve.workingColorSpace){if(t=Ef(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Da(a,s,t+1/3),this.g=Da(a,s,t),this.b=Da(a,s,t-1/3)}return ve.toWorkingColorSpace(this,r),this}setStyle(t,e=Je){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=pl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ve.fromWorkingColorSpace(tn.copy(this),t),Math.round($e(tn.r*255,0,255))*65536+Math.round($e(tn.g*255,0,255))*256+Math.round($e(tn.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,r=tn.g,s=tn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,f;const u=(o+a)/2;if(o===a)l=0,f=0;else{const h=a-o;switch(f=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=f,t.l=u,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Je){ve.fromWorkingColorSpace(tn.copy(this),t);const e=tn.r,n=tn.g,r=tn.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(hs);const n=pa(ri.h,hs.h,e),r=pa(ri.s,hs.s,e),s=pa(ri.l,hs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new ce;ce.NAMES=pl;let kf=0;class si extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Vn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class en extends si{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new D,ds=new vt;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXY(e,ds.x,ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class ml extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gl extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Le extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vf=0;const Mn=new Me,Ua=new Be,qi=new D,mn=new mi,Ar=new mi,qe=new D;class Ye extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ko(t)?gl:ml)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new fe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Le(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(mn.min,Ar.min),mn.expandByPoint(qe),qe.addVectors(mn.max,Ar.max),mn.expandByPoint(qe)):(mn.expandByPoint(Ar.min),mn.expandByPoint(Ar.max))}mn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)qe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(qe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let f=0,u=o.count;f<u;f++)qe.fromBufferAttribute(o,f),l&&(qi.fromBufferAttribute(t,f),qe.add(qi)),r=Math.max(r,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new D,l[U]=new D;const f=new D,u=new D,h=new D,c=new vt,d=new vt,g=new vt,v=new D,m=new D;function p(U,T,M){f.fromBufferAttribute(n,U),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),c.fromBufferAttribute(s,U),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,M),u.sub(f),h.sub(f),d.sub(c),g.sub(c);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),o[U].add(v),o[T].add(v),o[M].add(v),l[U].add(m),l[T].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let U=0,T=S.length;U<T;++U){const M=S[U],I=M.start,W=M.count;for(let X=I,Y=I+W;X<Y;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const y=new D,_=new D,O=new D,R=new D;function L(U){O.fromBufferAttribute(r,U),R.copy(O);const T=o[U];y.copy(T),y.sub(O.multiplyScalar(O.dot(T))).normalize(),_.crossVectors(R,T);const I=_.dot(l[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,I)}for(let U=0,T=S.length;U<T;++U){const M=S[U],I=M.start,W=M.count;for(let X=I,Y=I+W;X<Y;X+=3)L(t.getX(X+0)),L(t.getX(X+1)),L(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,d=n.count;c<d;c++)n.setXYZ(c,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,f=new D,u=new D,h=new D;if(t)for(let c=0,d=t.count;c<d;c+=3){const g=t.getX(c+0),v=t.getX(c+1),m=t.getX(c+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),f.fromBufferAttribute(n,m),o.add(u),l.add(u),f.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,f.x,f.y,f.z)}else for(let c=0,d=e.count;c<d;c+=3)r.fromBufferAttribute(e,c+0),s.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(c+0,u.x,u.y,u.z),n.setXYZ(c+1,u.x,u.y,u.z),n.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,l){const f=o.array,u=o.itemSize,h=o.normalized,c=new f.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)c[g++]=f[d++]}return new cn(c,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],f=t(l,n);e.setAttribute(o,f)}const s=this.morphAttributes;for(const o in s){const l=[],f=s[o];for(let u=0,h=f.length;u<h;u++){const c=f[u],d=t(c,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const f=a[o];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const f in l)l[f]!==void 0&&(t[f]=l[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const f=n[l];t.data.attributes[l]=f.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const f=this.morphAttributes[l],u=[];for(let h=0,c=f.length;h<c;h++){const d=f[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const f in r){const u=r[f];this.setAttribute(f,u.clone(e))}const s=t.morphAttributes;for(const f in s){const u=[],h=s[f];for(let c=0,d=h.length;c<d;c++)u.push(h[c].clone(e));this.morphAttributes[f]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let f=0,u=a.length;f<u;f++){const h=a[f];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new Me,_i=new Ea,ps=new zi,_l=new D,ms=new D,gs=new D,xs=new D,Na=new D,_s=new D,vl=new D,vs=new D;class $t extends Be{constructor(t=new Ye,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){_s.set(0,0,0);for(let l=0,f=s.length;l<f;l++){const u=o[l],h=s[l];u!==0&&(Na.fromBufferAttribute(h,t),a?_s.addScaledVector(Na,u):_s.addScaledVector(Na.sub(e),u))}e.add(_s)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),_i.copy(t.ray).recast(t.near),!(ps.containsPoint(_i.origin)===!1&&(_i.intersectSphere(ps,_l)===null||_i.origin.distanceToSquared(_l)>(t.far-t.near)**2))&&(xl.copy(s).invert(),_i.copy(t.ray).applyMatrix4(xl),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,f=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,c=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=c.length;g<v;g++){const m=c[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=S,O=y;_<O;_+=3){const R=o.getX(_),L=o.getX(_+1),U=o.getX(_+2);r=Ss(this,p,t,n,f,u,h,R,L,U),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);r=Ss(this,a,t,n,f,u,h,S,y,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=c.length;g<v;g++){const m=c[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=S,O=y;_<O;_+=3){const R=_,L=_+1,U=_+2;r=Ss(this,p,t,n,f,u,h,R,L,U),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=m,y=m+1,_=m+2;r=Ss(this,a,t,n,f,u,h,S,y,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Hf(i,t,e,n,r,s,a,o){let l;if(t.side===1?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===0,o),l===null)return null;vs.copy(o),vs.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(vs);return f<e.near||f>e.far?null:{distance:f,point:vs.clone(),object:i}}function Ss(i,t,e,n,r,s,a,o,l,f){i.getVertexPosition(o,ms),i.getVertexPosition(l,gs),i.getVertexPosition(f,xs);const u=Hf(i,t,e,n,ms,gs,xs,vl);if(u){const h=new D;Sn.getBarycoord(vl,ms,gs,xs,h),r&&(u.uv=Sn.getInterpolatedAttribute(r,o,l,f,h,new vt)),s&&(u.uv1=Sn.getInterpolatedAttribute(s,o,l,f,h,new vt)),a&&(u.normal=Sn.getInterpolatedAttribute(a,o,l,f,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a:o,b:l,c:f,normal:new D,materialIndex:0};Sn.getNormal(ms,gs,xs,c.normal),u.face=c,u.barycoord=h}return u}class jn extends Ye{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],f=[],u=[],h=[];let c=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Le(f,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(h,2));function g(v,m,p,S,y,_,O,R,L,U,T){const M=_/L,I=O/U,W=_/2,X=O/2,Y=R/2,at=L+1,J=U+1;let N=0,$=0;const At=new D;for(let It=0;It<J;It++){const Bt=It*I-X;for(let te=0;te<at;te++){const pe=te*M-W;At[v]=pe*S,At[m]=Bt*y,At[p]=Y,f.push(At.x,At.y,At.z),At[v]=0,At[m]=0,At[p]=R>0?1:-1,u.push(At.x,At.y,At.z),h.push(te/L),h.push(1-It/U),N+=1}}for(let It=0;It<U;It++)for(let Bt=0;Bt<L;Bt++){const te=c+Bt+at*It,pe=c+Bt+at*(It+1),it=c+(Bt+1)+at*(It+1),gt=c+(Bt+1)+at*It;l.push(te,pe,gt),l.push(pe,it,gt),$+=6}o.addGroup(d,$,T),d+=$,c+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function an(i){const t={};for(let e=0;e<i.length;e++){const n=Xi(i[e]);for(const r in n)t[r]=n[r]}return t}function Gf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Sl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const Wf={clone:Xi,merge:an};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends si{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=Gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ml extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new D,yl=new vt,El=new vt;class fn extends Ml{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return da*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,yl,El),e.subVectors(El,yl)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ha*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,f=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/f,r*=a.width/l,n*=a.height/f}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,ji=1;class Yf extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(Yi,ji,t,e);r.layers=this.layers,this.add(r);const s=new fn(Yi,ji,t,e);s.layers=this.layers,this.add(s);const a=new fn(Yi,ji,t,e);a.layers=this.layers,this.add(a);const o=new fn(Yi,ji,t,e);o.layers=this.layers,this.add(o);const l=new fn(Yi,ji,t,e);l.layers=this.layers,this.add(l);const f=new fn(Yi,ji,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const f of e)this.remove(f);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,f,u]=this.children,h=t.getRenderTarget(),c=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,f),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,c,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bl extends We{constructor(t,e,n,r,s,a,o,l,f,u){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,r,s,a,o,l,f,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jf extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new bl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new jn(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;const a=new $t(r,s),o=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Yf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Fa=new D,Zf=new D,Kf=new fe;class vi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Fa.subVectors(n,e).cross(Zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kf.getNormalMatrix(t),r=this.coplanarPoint(Fa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new zi,Ms=new D;class Oa{constructor(t=new vi,e=new vi,n=new vi,r=new vi,s=new vi,a=new vi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],f=r[4],u=r[5],h=r[6],c=r[7],d=r[8],g=r[9],v=r[10],m=r[11],p=r[12],S=r[13],y=r[14],_=r[15];if(n[0].setComponents(l-s,c-f,m-d,_-p).normalize(),n[1].setComponents(l+s,c+f,m+d,_+p).normalize(),n[2].setComponents(l+a,c+u,m+g,_+S).normalize(),n[3].setComponents(l-a,c-u,m-g,_-S).normalize(),n[4].setComponents(l-o,c-h,m-v,_-y).normalize(),e===2e3)n[5].setComponents(l+o,c+h,m+v,_+y).normalize();else if(e===2001)n[5].setComponents(o,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ms.x=r.normal.x>0?t.max.x:t.min.x,Ms.y=r.normal.y>0?t.max.y:t.min.y,Ms.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tl(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Jf(i){const t=new WeakMap;function e(o,l){const f=o.array,u=o.usage,h=f.byteLength,c=i.createBuffer();i.bindBuffer(l,c),i.bufferData(l,f,u),o.onUploadCallback();let d;if(f instanceof Float32Array)d=i.FLOAT;else if(f instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)d=i.SHORT;else if(f instanceof Uint32Array)d=i.UNSIGNED_INT;else if(f instanceof Int32Array)d=i.INT;else if(f instanceof Int8Array)d=i.BYTE;else if(f instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:c,type:d,bytesPerElement:f.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,f){const u=l.array,h=l.updateRanges;if(i.bindBuffer(f,o),h.length===0)i.bufferSubData(f,0,u);else{h.sort((d,g)=>d.start-g.start);let c=0;for(let d=1;d<h.length;d++){const g=h[c],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++c,h[c]=v)}h.length=c+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];i.bufferSubData(f,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const f=t.get(o);if(f===void 0)t.set(o,e(o,l));else if(f.version<o.version){if(f.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,o,l),f.version=o.version}}return{get:r,remove:s,update:a}}class gn extends Ye{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),f=o+1,u=l+1,h=t/o,c=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const S=p*c-a;for(let y=0;y<f;y++){const _=y*h-s;g.push(_,-S,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const y=S+f*p,_=S+f*(p+1),O=S+1+f*(p+1),R=S+1+f*p;d.push(y,_,R),d.push(_,O,R)}this.setIndex(d),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$f=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,au=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Iu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ku=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ju=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,th=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ih=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ah=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ch=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ph=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Th=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ah=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ch=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ph=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ih=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Uh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const he={alphahash_fragment:Qf,alphahash_pars_fragment:$f,alphamap_fragment:tu,alphamap_pars_fragment:eu,alphatest_fragment:nu,alphatest_pars_fragment:iu,aomap_fragment:ru,aomap_pars_fragment:su,batching_pars_vertex:au,batching_vertex:ou,begin_vertex:lu,beginnormal_vertex:cu,bsdfs:fu,iridescence_fragment:uu,bumpmap_pars_fragment:hu,clipping_planes_fragment:du,clipping_planes_pars_fragment:pu,clipping_planes_pars_vertex:mu,clipping_planes_vertex:gu,color_fragment:xu,color_pars_fragment:_u,color_pars_vertex:vu,color_vertex:Su,common:Mu,cube_uv_reflection_fragment:yu,defaultnormal_vertex:Eu,displacementmap_pars_vertex:bu,displacementmap_vertex:Tu,emissivemap_fragment:Au,emissivemap_pars_fragment:wu,colorspace_fragment:Ru,colorspace_pars_fragment:Cu,envmap_fragment:Pu,envmap_common_pars_fragment:Lu,envmap_pars_fragment:Iu,envmap_pars_vertex:Du,envmap_physical_pars_fragment:Wu,envmap_vertex:Uu,fog_vertex:Nu,fog_pars_vertex:Fu,fog_fragment:Ou,fog_pars_fragment:Bu,gradientmap_pars_fragment:zu,lightmap_pars_fragment:ku,lights_lambert_fragment:Vu,lights_lambert_pars_fragment:Hu,lights_pars_begin:Gu,lights_toon_fragment:qu,lights_toon_pars_fragment:Xu,lights_phong_fragment:Yu,lights_phong_pars_fragment:ju,lights_physical_fragment:Zu,lights_physical_pars_fragment:Ku,lights_fragment_begin:Ju,lights_fragment_maps:Qu,lights_fragment_end:$u,logdepthbuf_fragment:th,logdepthbuf_pars_fragment:eh,logdepthbuf_pars_vertex:nh,logdepthbuf_vertex:ih,map_fragment:rh,map_pars_fragment:sh,map_particle_fragment:ah,map_particle_pars_fragment:oh,metalnessmap_fragment:lh,metalnessmap_pars_fragment:ch,morphinstance_vertex:fh,morphcolor_vertex:uh,morphnormal_vertex:hh,morphtarget_pars_vertex:dh,morphtarget_vertex:ph,normal_fragment_begin:mh,normal_fragment_maps:gh,normal_pars_fragment:xh,normal_pars_vertex:_h,normal_vertex:vh,normalmap_pars_fragment:Sh,clearcoat_normal_fragment_begin:Mh,clearcoat_normal_fragment_maps:yh,clearcoat_pars_fragment:Eh,iridescence_pars_fragment:bh,opaque_fragment:Th,packing:Ah,premultiplied_alpha_fragment:wh,project_vertex:Rh,dithering_fragment:Ch,dithering_pars_fragment:Ph,roughnessmap_fragment:Lh,roughnessmap_pars_fragment:Ih,shadowmap_pars_fragment:Dh,shadowmap_pars_vertex:Uh,shadowmap_vertex:Nh,shadowmask_pars_fragment:Fh,skinbase_vertex:Oh,skinning_pars_vertex:Bh,skinning_vertex:zh,skinnormal_vertex:kh,specularmap_fragment:Vh,specularmap_pars_fragment:Hh,tonemapping_fragment:Gh,tonemapping_pars_fragment:Wh,transmission_fragment:qh,transmission_pars_fragment:Xh,uv_pars_fragment:Yh,uv_pars_vertex:jh,uv_vertex:Zh,worldpos_vertex:Kh,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Lt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Nn={basic:{uniforms:an([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:an([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ce(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:an([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:an([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:an([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ce(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:an([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:an([Lt.points,Lt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:an([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:an([Lt.common,Lt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:an([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:an([Lt.sprite,Lt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:an([Lt.common,Lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:an([Lt.lights,Lt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Nn.physical={uniforms:an([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const ys={r:0,b:0,g:0},Mi=new An,Jh=new Me;function Qh(i,t,e,n,r,s,a){const o=new ce(0);let l=s===!0?0:1,f,u,h=null,c=0,d=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function v(S){let y=!1;const _=g(S);_===null?p(o,l):_&&_.isColor&&(p(_,1),y=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===306)?(u===void 0&&(u=new $t(new jn(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Xi(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Mi.copy(y.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jh.makeRotationFromEuler(Mi)),u.material.toneMapped=ve.getTransfer(_.colorSpace)!==Te,(h!==_||c!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,c=_.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(f===void 0&&(f=new $t(new gn(2,2),new ai({name:"BackgroundMaterial",uniforms:Xi(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=_,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.toneMapped=ve.getTransfer(_.colorSpace)!==Te,_.matrixAutoUpdate===!0&&_.updateMatrix(),f.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||c!==_.version||d!==i.toneMapping)&&(f.material.needsUpdate=!0,h=_,c=_.version,d=i.toneMapping),f.layers.enableAll(),S.unshift(f,f.geometry,f.material,0,0,null))}function p(S,y){S.getRGB(ys,Sl(i)),n.buffers.color.setClear(ys.r,ys.g,ys.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:v,addToRenderList:m}}function $h(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null);let s=r,a=!1;function o(M,I,W,X,Y){let at=!1;const J=h(X,W,I);s!==J&&(s=J,f(s.object)),at=d(M,X,W,Y),at&&g(M,X,W,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(at||a)&&(a=!1,_(M,I,W,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function f(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,I,W){const X=W.wireframe===!0;let Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let at=Y[I.id];at===void 0&&(at={},Y[I.id]=at);let J=at[X];return J===void 0&&(J=c(l()),at[X]=J),J}function c(M){const I=[],W=[],X=[];for(let Y=0;Y<e;Y++)I[Y]=0,W[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:X,object:M,attributes:{},index:null}}function d(M,I,W,X){const Y=s.attributes,at=I.attributes;let J=0;const N=W.getAttributes();for(const $ in N)if(N[$].location>=0){const It=Y[$];let Bt=at[$];if(Bt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Bt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Bt=M.instanceColor)),It===void 0||It.attribute!==Bt||Bt&&It.data!==Bt.data)return!0;J++}return s.attributesNum!==J||s.index!==X}function g(M,I,W,X){const Y={},at=I.attributes;let J=0;const N=W.getAttributes();for(const $ in N)if(N[$].location>=0){let It=at[$];It===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(It=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(It=M.instanceColor));const Bt={};Bt.attribute=It,It&&It.data&&(Bt.data=It.data),Y[$]=Bt,J++}s.attributes=Y,s.attributesNum=J,s.index=X}function v(){const M=s.newAttributes;for(let I=0,W=M.length;I<W;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){const W=s.newAttributes,X=s.enabledAttributes,Y=s.attributeDivisors;W[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),Y[M]!==I&&(i.vertexAttribDivisor(M,I),Y[M]=I)}function S(){const M=s.newAttributes,I=s.enabledAttributes;for(let W=0,X=I.length;W<X;W++)I[W]!==M[W]&&(i.disableVertexAttribArray(W),I[W]=0)}function y(M,I,W,X,Y,at,J){J===!0?i.vertexAttribIPointer(M,I,W,Y,at):i.vertexAttribPointer(M,I,W,X,Y,at)}function _(M,I,W,X){v();const Y=X.attributes,at=W.getAttributes(),J=I.defaultAttributeValues;for(const N in at){const $=at[N];if($.location>=0){let At=Y[N];if(At===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(At=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(At=M.instanceColor)),At!==void 0){const It=At.normalized,Bt=At.itemSize,te=t.get(At);if(te===void 0)continue;const pe=te.buffer,it=te.type,gt=te.bytesPerElement,Ot=it===i.INT||it===i.UNSIGNED_INT||At.gpuType===1013;if(At.isInterleavedBufferAttribute){const St=At.data,Xt=St.stride,Kt=At.offset;if(St.isInstancedInterleavedBuffer){for(let jt=0;jt<$.locationSize;jt++)p($.location+jt,St.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let jt=0;jt<$.locationSize;jt++)m($.location+jt);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let jt=0;jt<$.locationSize;jt++)y($.location+jt,Bt/$.locationSize,it,It,Xt*gt,(Kt+Bt/$.locationSize*jt)*gt,Ot)}else{if(At.isInstancedBufferAttribute){for(let St=0;St<$.locationSize;St++)p($.location+St,At.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let St=0;St<$.locationSize;St++)m($.location+St);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let St=0;St<$.locationSize;St++)y($.location+St,Bt/$.locationSize,it,It,Bt*gt,Bt/$.locationSize*St*gt,Ot)}}else if(J!==void 0){const It=J[N];if(It!==void 0)switch(It.length){case 2:i.vertexAttrib2fv($.location,It);break;case 3:i.vertexAttrib3fv($.location,It);break;case 4:i.vertexAttrib4fv($.location,It);break;default:i.vertexAttrib1fv($.location,It)}}}}S()}function O(){U();for(const M in n){const I=n[M];for(const W in I){const X=I[W];for(const Y in X)u(X[Y].object),delete X[Y];delete I[W]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const W in I){const X=I[W];for(const Y in X)u(X[Y].object),delete X[Y];delete I[W]}delete n[M.id]}function L(M){for(const I in n){const W=n[I];if(W[M.id]===void 0)continue;const X=W[M.id];for(const Y in X)u(X[Y].object),delete X[Y];delete W[M.id]}}function U(){T(),a=!0,s!==r&&(s=r,f(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:T,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function td(i,t,e){let n;function r(f){n=f}function s(f,u){i.drawArrays(n,f,u),e.update(u,n,1)}function a(f,u,h){h!==0&&(i.drawArraysInstanced(n,f,u,h),e.update(u,n,h))}function o(f,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(f,u,h,c){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f.length;g++)a(f[g],u[g],c[g]);else{d.multiDrawArraysInstancedWEBGL(n,f,0,u,0,c,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*c[v];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ed(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==1023&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const U=L===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==1009&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==1015&&!U)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const u=l(f);u!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",u,"instead."),f=u);const h=e.logarithmicDepthBuffer===!0,c=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:f,logarithmicDepthBuffer:h,reverseDepthBuffer:c,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:O,maxSamples:R}}function nd(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new vi,o=new fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,c){const d=h.length!==0||c||n!==0||r;return r=c,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,c){e=u(h,c,0)},this.setState=function(h,c,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):f();else{const S=s?0:n,y=S*4;let _=p.clippingState||null;l.value=_,_=u(g,c,y,d);for(let O=0;O!==y;++O)_[O]=e[O];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function f(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,c,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,S=c.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==v;++y,_+=4)a.copy(h[y]).applyMatrix4(S,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function id(i){let t=new WeakMap;function e(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const f=new jf(l.height);return f.fromEquirectangularTexture(i,a),t.set(a,f),a.addEventListener("dispose",r),e(f.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ba extends Ml{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,a=s+f*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zi=4,Al=[.125,.215,.35,.446,.526,.582],yi=20,za=new Ba,wl=new ce;let ka=null,Va=0,Ha=0,Ga=!1;const Ei=(1+Math.sqrt(5))/2,Ki=1/Ei,Rl=[new D(-Ei,Ki,0),new D(Ei,Ki,0),new D(-Ki,0,Ei),new D(Ki,0,Ei),new D(0,Ei,-Ki),new D(0,Ei,Ki),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ka=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ka,Va,Ha),this._renderer.xr.enabled=Ga,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ka=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Ii,depthBuffer:!1},r=Pl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rd(s)),this._blurMaterial=sd(s,t,e)}return r}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,r){const o=new fn(90,1,e,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,c=u.toneMapping;u.getClearColor(wl),u.toneMapping=0,u.autoClear=!1;const d=new en({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new $t(new jn,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(wl),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(f[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,f[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,f[p]));const y=this._cubeSize;Es(r,S*y,p>2?y:0,y,y),u.setRenderTarget(r),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=c,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===301||t.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Es(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,za)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Rl[(r-s-1)%Rl.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,f=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $t(this._lodPlanes[r],f),c=f.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*yi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):yi;m>yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const p=[];let S=0;for(let L=0;L<yi;++L){const U=L/v,T=Math.exp(-U*U/2);p.push(T),L===0?S+=T:L<m&&(S+=2*T)}for(let L=0;L<p.length;L++)p[L]=p[L]/S;c.envMap.value=t.texture,c.samples.value=m,c.weights.value=p,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:y}=this;c.dTheta.value=g,c.mipInt.value=y-n;const _=this._sizeLods[r],O=3*_*(r>y-Zi?r-y+Zi:0),R=4*(this._cubeSize-_);Es(e,O,R,3*_,2*_),l.setRenderTarget(e),l.render(h,za)}}function rd(i){const t=[],e=[],n=[];let r=i;const s=i-Zi+1+Al.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Zi?l=Al[a-i+Zi-1]:a===0&&(l=0),n.push(l);const f=1/(o-2),u=-f,h=1+f,c=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let R=0;R<d;R++){const L=R%3*2/3-1,U=R>2?0:-1,T=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];S.set(T,v*g*R),y.set(c,m*g*R);const M=[R,R,R,R,R,R];_.set(M,p*g*R)}const O=new Ye;O.setAttribute("position",new cn(S,v)),O.setAttribute("uv",new cn(y,m)),O.setAttribute("faceIndex",new cn(_,p)),t.push(O),r>Zi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pl(i,t,e){const n=new pi(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function sd(i,t,e){const n=new Float32Array(yi),r=new D(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ll(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Il(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ad(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,f=l===303||l===304,u=l===301||l===302;if(f||u){let h=t.get(o);const c=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return e===null&&(e=new Cl(i)),h=f?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return f&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Cl(i)),h=f?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const f=6;for(let u=0;u<f;u++)o[u]!==void 0&&l++;return l===f}function s(o){const l=o.target;l.removeEventListener("dispose",s);const f=t.get(l);f!==void 0&&(t.delete(l),f.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function od(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ld(i,t,e,n){const r={},s=new WeakMap;function a(h){const c=h.target;c.index!==null&&t.remove(c.index);for(const g in c.attributes)t.remove(c.attributes[g]);for(const g in c.morphAttributes){const v=c.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}c.removeEventListener("dispose",a),delete r[c.id];const d=s.get(c);d&&(t.remove(d),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(h,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,e.memory.geometries++),c}function l(h){const c=h.attributes;for(const g in c)t.update(c[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function f(h){const c=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const S=d.array;v=d.version;for(let y=0,_=S.length;y<_;y+=3){const O=S[y+0],R=S[y+1],L=S[y+2];c.push(O,R,R,L,L,O)}}else if(g!==void 0){const S=g.array;v=g.version;for(let y=0,_=S.length/3-1;y<_;y+=3){const O=y+0,R=y+1,L=y+2;c.push(O,R,R,L,L,O)}}else return;const m=new(Ko(c)?gl:ml)(c,1);m.version=v;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const c=s.get(h);if(c){const d=h.index;d!==null&&c.version<d.version&&f(h)}else f(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function cd(i,t,e){let n;function r(c){n=c}let s,a;function o(c){s=c.type,a=c.bytesPerElement}function l(c,d){i.drawElements(n,d,s,c*a),e.update(d,n,1)}function f(c,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,c*a,g),e.update(d,n,g))}function u(c,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,c,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(c,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<c.length;p++)f(c[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,c,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*v[S];e.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=f,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function fd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ud(i,t,e){const n=new WeakMap,r=new we;function s(a,o,l){const f=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let c=n.get(o);if(c===void 0||c.count!==h){let T=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",T)};c!==void 0&&c.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let _=o.attributes.position.count*y,O=1;_>t.maxTextureSize&&(O=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const R=new Float32Array(_*O*4*h),L=new rl(R,_,O,h);L.type=1015,L.needsUpdate=!0;const U=y*4;for(let M=0;M<h;M++){const I=m[M],W=p[M],X=S[M],Y=_*O*4*M;for(let at=0;at<I.count;at++){const J=at*U;d===!0&&(r.fromBufferAttribute(I,at),R[Y+J+0]=r.x,R[Y+J+1]=r.y,R[Y+J+2]=r.z,R[Y+J+3]=0),g===!0&&(r.fromBufferAttribute(W,at),R[Y+J+4]=r.x,R[Y+J+5]=r.y,R[Y+J+6]=r.z,R[Y+J+7]=0),v===!0&&(r.fromBufferAttribute(X,at),R[Y+J+8]=r.x,R[Y+J+9]=r.y,R[Y+J+10]=r.z,R[Y+J+11]=X.itemSize===4?r.w:1)}}c={count:h,texture:L,size:new vt(_,O)},n.set(o,c),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<f.length;v++)d+=f[v];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",f)}l.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:s}}function hd(i,t,e,n){let r=new WeakMap;function s(l){const f=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==f&&(t.update(h),r.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==f&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){const c=l.skeleton;r.get(c)!==f&&(c.update(),r.set(c,f))}return h}function a(){r=new WeakMap}function o(l){const f=l.target;f.removeEventListener("dispose",o),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:s,dispose:a}}class Dl extends We{constructor(t,e,n,r,s,a,o,l,f,u=1026){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===1026&&(n=1014),n===void 0&&u===1027&&(n=1020),super(null,r,s,a,o,l,u,n,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ul=new We,Nl=new Dl(1,1),Fl=new rl,Ol=new If,Bl=new bl,zl=[],kl=[],Vl=new Float32Array(16),Hl=new Float32Array(9),Gl=new Float32Array(4);function Ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=zl[r];if(s===void 0&&(s=new Float32Array(r),zl[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function bs(i,t){let e=kl[t];e===void 0&&(e=new Int32Array(t),kl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function xd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;Gl.set(n),i.uniformMatrix2fv(this.addr,!1,Gl),He(e,n)}}function _d(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;Hl.set(n),i.uniformMatrix3fv(this.addr,!1,Hl),He(e,n)}}function vd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;Vl.set(n),i.uniformMatrix4fv(this.addr,!1,Vl),He(e,n)}}function Sd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function Ed(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function bd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Td(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function Ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function Rd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Nl.compareFunction=515,s=Nl):s=Ul,e.setTexture2D(t||s,r)}function Cd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ol,r)}function Pd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Bl,r)}function Ld(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Fl,r)}function Id(i){switch(i){case 5126:return dd;case 35664:return pd;case 35665:return md;case 35666:return gd;case 35674:return xd;case 35675:return _d;case 35676:return vd;case 5124:case 35670:return Sd;case 35667:case 35671:return Md;case 35668:case 35672:return yd;case 35669:case 35673:return Ed;case 5125:return bd;case 36294:return Td;case 36295:return Ad;case 36296:return wd;case 35678:case 36198:case 36298:case 36306:case 35682:return Rd;case 35679:case 36299:case 36307:return Cd;case 35680:case 36300:case 36308:case 36293:return Pd;case 36289:case 36303:case 36311:case 36292:return Ld}}function Dd(i,t){i.uniform1fv(this.addr,t)}function Ud(i,t){const e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Nd(i,t){const e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Fd(i,t){const e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Od(i,t){const e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bd(i,t){const e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zd(i,t){const e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kd(i,t){i.uniform1iv(this.addr,t)}function Vd(i,t){i.uniform2iv(this.addr,t)}function Hd(i,t){i.uniform3iv(this.addr,t)}function Gd(i,t){i.uniform4iv(this.addr,t)}function Wd(i,t){i.uniform1uiv(this.addr,t)}function qd(i,t){i.uniform2uiv(this.addr,t)}function Xd(i,t){i.uniform3uiv(this.addr,t)}function Yd(i,t){i.uniform4uiv(this.addr,t)}function jd(i,t,e){const n=this.cache,r=t.length,s=bs(e,r);Ve(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Ul,s[a])}function Zd(i,t,e){const n=this.cache,r=t.length,s=bs(e,r);Ve(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Ol,s[a])}function Kd(i,t,e){const n=this.cache,r=t.length,s=bs(e,r);Ve(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Bl,s[a])}function Jd(i,t,e){const n=this.cache,r=t.length,s=bs(e,r);Ve(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Fl,s[a])}function Qd(i){switch(i){case 5126:return Dd;case 35664:return Ud;case 35665:return Nd;case 35666:return Fd;case 35674:return Od;case 35675:return Bd;case 35676:return zd;case 5124:case 35670:return kd;case 35667:case 35671:return Vd;case 35668:case 35672:return Hd;case 35669:case 35673:return Gd;case 5125:return Wd;case 36294:return qd;case 36295:return Xd;case 36296:return Yd;case 35678:case 36198:case 36298:case 36306:case 35682:return jd;case 35679:case 36299:case 36307:return Zd;case 35680:case 36300:case 36308:case 36293:return Kd;case 36289:case 36303:case 36311:case 36292:return Jd}}class $d{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Id(e.type)}}class t0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qd(e.type)}}class e0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function Wl(i,t){i.seq.push(t),i.map[t.id]=t}function n0(i,t,e){const n=i.name,r=n.length;for(qa.lastIndex=0;;){const s=qa.exec(n),a=qa.lastIndex;let o=s[1];const l=s[2]==="]",f=s[3];if(l&&(o=o|0),f===void 0||f==="["&&a+2===r){Wl(e,f===void 0?new $d(o,i,t):new t0(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new e0(o),Wl(e,h)),e=h}}}class Ts{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);n0(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function ql(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i0=37297;let r0=0;function s0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Xl=new fe;function a0(i){ve._getMatrix(Xl,ve.workingColorSpace,i);const t=`mat3( ${Xl.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case rs:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+s0(i.getShaderSource(t),a)}else return r}function o0(i,t){const e=a0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function l0(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const As=new D;function c0(){ve.getLuminanceCoefficients(As);const i=As.x.toFixed(4),t=As.y.toFixed(4),e=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function u0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function h0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function wr(i){return i!==""}function jl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(i){return i.replace(d0,m0)}const p0=new Map;function m0(i,t){let e=he[t];if(e===void 0){const n=p0.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xa(e)}const g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(i){return i.replace(g0,x0)}function x0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function v0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function S0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function M0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function y0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function E0(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=_0(e),f=v0(e),u=S0(e),h=M0(e),c=y0(e),d=f0(e),g=u0(s),v=r.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?he.tonemapping_pars_fragment:"",e.toneMapping!==0?l0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,o0("linearToOutputTexel",e.outputColorSpace),c0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),a=Xa(a),a=jl(a,e),a=Zl(a,e),o=Xa(o),o=jl(o,e),o=Zl(o,e),a=Kl(a),o=Kl(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+a,_=S+p+o,O=ql(r,r.VERTEX_SHADER,y),R=ql(r,r.FRAGMENT_SHADER,_);r.attachShader(v,O),r.attachShader(v,R),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function L(I){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(v).trim(),X=r.getShaderInfoLog(O).trim(),Y=r.getShaderInfoLog(R).trim();let at=!0,J=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,O,R);else{const N=Yl(r,O,"vertex"),$=Yl(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+N+`
`+$)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||Y==="")&&(J=!1);J&&(I.diagnostics={runnable:at,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(O),r.deleteShader(R),U=new Ts(r,v),T=h0(r,v)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,i0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=r0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=R,this}let b0=0;class T0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new A0(t),e.set(t,n)),n}}class A0{constructor(t){this.id=b0++,this.code=t,this.usedTimes=0}}function w0(i,t,e,n,r,s,a){const o=new ba,l=new T0,f=new Set,u=[],h=r.logarithmicDepthBuffer,c=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return f.add(T),T===0?"uv":`uv${T}`}function m(T,M,I,W,X){const Y=W.fog,at=X.geometry,J=T.isMeshStandardMaterial?W.environment:null,N=(T.isMeshStandardMaterial?e:t).get(T.envMap||J),$=N&&N.mapping===306?N.image.height:null,At=g[T.type];T.precision!==null&&(d=r.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const It=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Bt=It!==void 0?It.length:0;let te=0;at.morphAttributes.position!==void 0&&(te=1),at.morphAttributes.normal!==void 0&&(te=2),at.morphAttributes.color!==void 0&&(te=3);let pe,it,gt,Ot;if(At){const Rt=Nn[At];pe=Rt.vertexShader,it=Rt.fragmentShader}else pe=T.vertexShader,it=T.fragmentShader,l.update(T),gt=l.getVertexShaderID(T),Ot=l.getFragmentShaderID(T);const St=i.getRenderTarget(),Xt=i.state.buffers.depth.getReversed(),Kt=X.isInstancedMesh===!0,jt=X.isBatchedMesh===!0,Qt=!!T.map,ft=!!T.matcap,xt=!!N,w=!!T.aoMap,ot=!!T.lightMap,ct=!!T.bumpMap,Mt=!!T.normalMap,pt=!!T.displacementMap,Ct=!!T.emissiveMap,wt=!!T.metalnessMap,A=!!T.roughnessMap,E=T.anisotropy>0,G=T.clearcoat>0,et=T.dispersion>0,ht=T.iridescence>0,rt=T.sheen>0,zt=T.transmission>0,Pt=E&&!!T.anisotropyMap,Nt=G&&!!T.clearcoatMap,oe=G&&!!T.clearcoatNormalMap,dt=G&&!!T.clearcoatRoughnessMap,Dt=ht&&!!T.iridescenceMap,Yt=ht&&!!T.iridescenceThicknessMap,q=rt&&!!T.sheenColorMap,tt=rt&&!!T.sheenRoughnessMap,ut=!!T.specularMap,yt=!!T.specularColorMap,mt=!!T.specularIntensityMap,P=zt&&!!T.transmissionMap,st=zt&&!!T.thicknessMap,j=!!T.gradientMap,Q=!!T.alphaMap,_t=T.alphaTest>0,Tt=!!T.alphaHash,kt=!!T.extensions;let Ce=0;T.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(Ce=i.toneMapping);const Ge={shaderID:At,shaderType:T.type,shaderName:T.name,vertexShader:pe,fragmentShader:it,defines:T.defines,customVertexShaderID:gt,customFragmentShaderID:Ot,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:jt,batchingColor:jt&&X._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&X.instanceColor!==null,instancingMorph:Kt&&X.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Ii,alphaToCoverage:!!T.alphaToCoverage,map:Qt,matcap:ft,envMap:xt,envMapMode:xt&&N.mapping,envMapCubeUVHeight:$,aoMap:w,lightMap:ot,bumpMap:ct,normalMap:Mt,displacementMap:c&&pt,emissiveMap:Ct,normalMapObjectSpace:Mt&&T.normalMapType===1,normalMapTangentSpace:Mt&&T.normalMapType===0,metalnessMap:wt,roughnessMap:A,anisotropy:E,anisotropyMap:Pt,clearcoat:G,clearcoatMap:Nt,clearcoatNormalMap:oe,clearcoatRoughnessMap:dt,dispersion:et,iridescence:ht,iridescenceMap:Dt,iridescenceThicknessMap:Yt,sheen:rt,sheenColorMap:q,sheenRoughnessMap:tt,specularMap:ut,specularColorMap:yt,specularIntensityMap:mt,transmission:zt,transmissionMap:P,thicknessMap:st,gradientMap:j,opaque:T.transparent===!1&&T.blending===1&&T.alphaToCoverage===!1,alphaMap:Q,alphaTest:_t,alphaHash:Tt,combine:T.combine,mapUv:Qt&&v(T.map.channel),aoMapUv:w&&v(T.aoMap.channel),lightMapUv:ot&&v(T.lightMap.channel),bumpMapUv:ct&&v(T.bumpMap.channel),normalMapUv:Mt&&v(T.normalMap.channel),displacementMapUv:pt&&v(T.displacementMap.channel),emissiveMapUv:Ct&&v(T.emissiveMap.channel),metalnessMapUv:wt&&v(T.metalnessMap.channel),roughnessMapUv:A&&v(T.roughnessMap.channel),anisotropyMapUv:Pt&&v(T.anisotropyMap.channel),clearcoatMapUv:Nt&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:q&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:tt&&v(T.sheenRoughnessMap.channel),specularMapUv:ut&&v(T.specularMap.channel),specularColorMapUv:yt&&v(T.specularColorMap.channel),specularIntensityMapUv:mt&&v(T.specularIntensityMap.channel),transmissionMapUv:P&&v(T.transmissionMap.channel),thicknessMapUv:st&&v(T.thicknessMap.channel),alphaMapUv:Q&&v(T.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(Mt||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!at.attributes.uv&&(Qt||Q),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Xt,skinning:X.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:te,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Qt&&T.map.isVideoTexture===!0&&ve.getTransfer(T.map.colorSpace)===Te,decodeVideoTextureEmissive:Ct&&T.emissiveMap.isVideoTexture===!0&&ve.getTransfer(T.emissiveMap.colorSpace)===Te,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===2,flipSided:T.side===1,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:kt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&T.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ge.vertexUv1s=f.has(1),Ge.vertexUv2s=f.has(2),Ge.vertexUv3s=f.has(3),f.clear(),Ge}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)M.push(I),M.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(S(M,T),y(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function S(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function _(T){const M=g[T.type];let I;if(M){const W=Nn[M];I=Wf.clone(W.uniforms)}else I=T.uniforms;return I}function O(T,M){let I;for(let W=0,X=u.length;W<X;W++){const Y=u[W];if(Y.cacheKey===M){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new E0(i,M,T,s),u.push(I)),I}function R(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function L(T){l.remove(T)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:O,releaseProgram:R,releaseShaderCache:L,programs:u,dispose:U}}function R0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function C0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ql(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $l(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,c,d,g,v,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:c,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=c,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function o(h,c,d,g,v,m){const p=a(h,c,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(h,c,d,g,v,m){const p=a(h,c,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function f(h,c){e.length>1&&e.sort(h||C0),n.length>1&&n.sort(c||Ql),r.length>1&&r.sort(c||Ql)}function u(){for(let h=t,c=i.length;h<c;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:f}}function P0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new $l,i.set(n,[a])):r>=s.length?(a=new $l,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function L0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ce};break;case"SpotLight":e={position:new D,direction:new D,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function I0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let D0=0;function U0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N0(i){const t=new L0,e=I0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new D);const r=new D,s=new Me,a=new Me;function o(f){let u=0,h=0,c=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,S=0,y=0,_=0,O=0,R=0,L=0;f.sort(U0);for(let T=0,M=f.length;T<M;T++){const I=f[T],W=I.color,X=I.intensity,Y=I.distance,at=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=W.r*X,h+=W.g*X,c+=W.b*X;else if(I.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(I.sh.coefficients[J],X);L++}else if(I.isDirectionalLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const N=I.shadow,$=e.get(I);$.shadowIntensity=N.intensity,$.shadowBias=N.bias,$.shadowNormalBias=N.normalBias,$.shadowRadius=N.radius,$.shadowMapSize=N.mapSize,n.directionalShadow[d]=$,n.directionalShadowMap[d]=at,n.directionalShadowMatrix[d]=I.shadow.matrix,S++}n.directional[d]=J,d++}else if(I.isSpotLight){const J=t.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(W).multiplyScalar(X),J.distance=Y,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,n.spot[v]=J;const N=I.shadow;if(I.map&&(n.spotLightMap[O]=I.map,O++,N.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[v]=N.matrix,I.castShadow){const $=e.get(I);$.shadowIntensity=N.intensity,$.shadowBias=N.bias,$.shadowNormalBias=N.normalBias,$.shadowRadius=N.radius,$.shadowMapSize=N.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=at,_++}v++}else if(I.isRectAreaLight){const J=t.get(I);J.color.copy(W).multiplyScalar(X),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=J,m++}else if(I.isPointLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){const N=I.shadow,$=e.get(I);$.shadowIntensity=N.intensity,$.shadowBias=N.bias,$.shadowNormalBias=N.normalBias,$.shadowRadius=N.radius,$.shadowMapSize=N.mapSize,$.shadowCameraNear=N.camera.near,$.shadowCameraFar=N.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=at,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=J,g++}else if(I.isHemisphereLight){const J=t.get(I);J.skyColor.copy(I.color).multiplyScalar(X),J.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[p]=J,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=c;const U=n.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==S||U.numPointShadows!==y||U.numSpotShadows!==_||U.numSpotMaps!==O||U.numLightProbes!==L)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+O-R,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=L,U.directionalLength=d,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=S,U.numPointShadows=y,U.numSpotShadows=_,U.numSpotMaps=O,U.numLightProbes=L,n.version=D0++)}function l(f,u){let h=0,c=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,S=f.length;p<S;p++){const y=f[p];if(y.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(y.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const _=n.point[c];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),c++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function tc(i){const t=new N0(i),e=[],n=[];function r(u){f.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function F0(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new tc(i),t.set(r,[o])):s>=a.length?(o=new tc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class O0 extends si{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class B0 extends si{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function V0(i,t,e){let n=new Oa;const r=new vt,s=new vt,a=new we,o=new O0({depthPacking:3201}),l=new B0,f={},u=e.maxTextureSize,h={0:1,1:0,2:2},c=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:z0,fragmentShader:k0}),d=c.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ye;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $t(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(R,L,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),W=i.state;W.setBlending(0),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const X=p!==3&&this.type===3,Y=p===3&&this.type!==3;for(let at=0,J=R.length;at<J;at++){const N=R[at],$=N.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const At=$.getFrameExtents();if(r.multiply(At),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/At.x),r.x=s.x*At.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/At.y),r.y=s.y*At.y,$.mapSize.y=s.y)),$.map===null||X===!0||Y===!0){const Bt=this.type!==3?{minFilter:1003,magFilter:1003}:{};$.map!==null&&$.map.dispose(),$.map=new pi(r.x,r.y,Bt),$.map.texture.name=N.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const It=$.getViewportCount();for(let Bt=0;Bt<It;Bt++){const te=$.getViewport(Bt);a.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),W.viewport(a),$.updateMatrices(N,Bt),n=$.getFrustum(),_(L,U,$.camera,N,this.type)}$.isPointLightShadow!==!0&&this.type===3&&S($,U),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,M,I)};function S(R,L){const U=t.update(v);c.defines.VSM_SAMPLES!==R.blurSamples&&(c.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new pi(r.x,r.y)),c.uniforms.shadow_pass.value=R.map.texture,c.uniforms.resolution.value=R.mapSize,c.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(L,null,U,c,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(L,null,U,d,v,null)}function y(R,L,U,T){let M=null;const I=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)M=I;else if(M=U.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const W=M.uuid,X=L.uuid;let Y=f[W];Y===void 0&&(Y={},f[W]=Y);let at=Y[X];at===void 0&&(at=M.clone(),Y[X]=at,L.addEventListener("dispose",O)),M=at}if(M.visible=L.visible,M.wireframe=L.wireframe,T===3?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:h[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=U}return M}function _(R,L,U,T,M){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===3)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const X=t.update(R),Y=R.material;if(Array.isArray(Y)){const at=X.groups;for(let J=0,N=at.length;J<N;J++){const $=at[J],At=Y[$.materialIndex];if(At&&At.visible){const It=y(R,At,T,M);R.onBeforeShadow(i,R,L,U,X,It,$),i.renderBufferDirect(U,null,X,It,R,$),R.onAfterShadow(i,R,L,U,X,It,$)}}}else if(Y.visible){const at=y(R,Y,T,M);R.onBeforeShadow(i,R,L,U,X,at,null),i.renderBufferDirect(U,null,X,at,R,null),R.onAfterShadow(i,R,L,U,X,at,null)}}const W=R.children;for(let X=0,Y=W.length;X<Y;X++)_(W[X],L,U,T,M)}function O(R){R.target.removeEventListener("dispose",O);for(const U in f){const T=f[U],M=R.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const H0={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function G0(i,t){function e(){let P=!1;const st=new we;let j=null;const Q=new we(0,0,0,0);return{setMask:function(_t){j!==_t&&!P&&(i.colorMask(_t,_t,_t,_t),j=_t)},setLocked:function(_t){P=_t},setClear:function(_t,Tt,kt,Ce,Ge){Ge===!0&&(_t*=Ce,Tt*=Ce,kt*=Ce),st.set(_t,Tt,kt,Ce),Q.equals(st)===!1&&(i.clearColor(_t,Tt,kt,Ce),Q.copy(st))},reset:function(){P=!1,j=null,Q.set(-1,0,0,0)}}}function n(){let P=!1,st=!1,j=null,Q=null,_t=null;return{setReversed:function(Tt){if(st!==Tt){const kt=t.get("EXT_clip_control");st?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const Ce=_t;_t=null,this.setClear(Ce)}st=Tt},getReversed:function(){return st},setTest:function(Tt){Tt?St(i.DEPTH_TEST):Xt(i.DEPTH_TEST)},setMask:function(Tt){j!==Tt&&!P&&(i.depthMask(Tt),j=Tt)},setFunc:function(Tt){if(st&&(Tt=H0[Tt]),Q!==Tt){switch(Tt){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=Tt}},setLocked:function(Tt){P=Tt},setClear:function(Tt){_t!==Tt&&(st&&(Tt=1-Tt),i.clearDepth(Tt),_t=Tt)},reset:function(){P=!1,j=null,Q=null,_t=null,st=!1}}}function r(){let P=!1,st=null,j=null,Q=null,_t=null,Tt=null,kt=null,Ce=null,Ge=null;return{setTest:function(Rt){P||(Rt?St(i.STENCIL_TEST):Xt(i.STENCIL_TEST))},setMask:function(Rt){st!==Rt&&!P&&(i.stencilMask(Rt),st=Rt)},setFunc:function(Rt,me,ye){(j!==Rt||Q!==me||_t!==ye)&&(i.stencilFunc(Rt,me,ye),j=Rt,Q=me,_t=ye)},setOp:function(Rt,me,ye){(Tt!==Rt||kt!==me||Ce!==ye)&&(i.stencilOp(Rt,me,ye),Tt=Rt,kt=me,Ce=ye)},setLocked:function(Rt){P=Rt},setClear:function(Rt){Ge!==Rt&&(i.clearStencil(Rt),Ge=Rt)},reset:function(){P=!1,st=null,j=null,Q=null,_t=null,Tt=null,kt=null,Ce=null,Ge=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,f=new WeakMap;let u={},h={},c=new WeakMap,d=[],g=null,v=!1,m=null,p=null,S=null,y=null,_=null,O=null,R=null,L=new ce(0,0,0),U=0,T=!1,M=null,I=null,W=null,X=null,Y=null;const at=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,N=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec($)[1]),J=N>=1):$.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=N>=2);let At=null,It={};const Bt=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),pe=new we().fromArray(Bt),it=new we().fromArray(te);function gt(P,st,j,Q){const _t=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(P,Tt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<j;kt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(st+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return Tt}const Ot={};Ot[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ot[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ot[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),St(i.DEPTH_TEST),a.setFunc(3),ct(!1),Mt(1),St(i.CULL_FACE),w(0);function St(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Xt(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function Kt(P,st){return h[P]!==st?(i.bindFramebuffer(P,st),h[P]=st,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=st),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=st),!0):!1}function jt(P,st){let j=d,Q=!1;if(P){j=c.get(st),j===void 0&&(j=[],c.set(st,j));const _t=P.textures;if(j.length!==_t.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,kt=_t.length;Tt<kt;Tt++)j[Tt]=i.COLOR_ATTACHMENT0+Tt;j.length=_t.length,Q=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,Q=!0);Q&&i.drawBuffers(j)}function Qt(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const ft={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};ft[103]=i.MIN,ft[104]=i.MAX;const xt={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function w(P,st,j,Q,_t,Tt,kt,Ce,Ge,Rt){if(P===0){v===!0&&(Xt(i.BLEND),v=!1);return}if(v===!1&&(St(i.BLEND),v=!0),P!==5){if(P!==m||Rt!==T){if((p!==100||_!==100)&&(i.blendEquation(i.FUNC_ADD),p=100,_=100),Rt)switch(P){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,y=null,O=null,R=null,L.set(0,0,0),U=0,m=P,T=Rt}return}_t=_t||st,Tt=Tt||j,kt=kt||Q,(st!==p||_t!==_)&&(i.blendEquationSeparate(ft[st],ft[_t]),p=st,_=_t),(j!==S||Q!==y||Tt!==O||kt!==R)&&(i.blendFuncSeparate(xt[j],xt[Q],xt[Tt],xt[kt]),S=j,y=Q,O=Tt,R=kt),(Ce.equals(L)===!1||Ge!==U)&&(i.blendColor(Ce.r,Ce.g,Ce.b,Ge),L.copy(Ce),U=Ge),m=P,T=!1}function ot(P,st){P.side===2?Xt(i.CULL_FACE):St(i.CULL_FACE);let j=P.side===1;st&&(j=!j),ct(j),P.blending===1&&P.transparent===!1?w(0):w(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const Q=P.stencilWrite;o.setTest(Q),Q&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ct(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):Xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function Mt(P){P!==0?(St(i.CULL_FACE),P!==I&&(P===1?i.cullFace(i.BACK):P===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xt(i.CULL_FACE),I=P}function pt(P){P!==W&&(J&&i.lineWidth(P),W=P)}function Ct(P,st,j){P?(St(i.POLYGON_OFFSET_FILL),(X!==st||Y!==j)&&(i.polygonOffset(st,j),X=st,Y=j)):Xt(i.POLYGON_OFFSET_FILL)}function wt(P){P?St(i.SCISSOR_TEST):Xt(i.SCISSOR_TEST)}function A(P){P===void 0&&(P=i.TEXTURE0+at-1),At!==P&&(i.activeTexture(P),At=P)}function E(P,st,j){j===void 0&&(At===null?j=i.TEXTURE0+at-1:j=At);let Q=It[j];Q===void 0&&(Q={type:void 0,texture:void 0},It[j]=Q),(Q.type!==P||Q.texture!==st)&&(At!==j&&(i.activeTexture(j),At=j),i.bindTexture(P,st||Ot[P]),Q.type=P,Q.texture=st)}function G(){const P=It[At];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function zt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Dt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Yt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(P){pe.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),pe.copy(P))}function tt(P){it.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),it.copy(P))}function ut(P,st){let j=f.get(st);j===void 0&&(j=new WeakMap,f.set(st,j));let Q=j.get(P);Q===void 0&&(Q=i.getUniformBlockIndex(st,P.name),j.set(P,Q))}function yt(P,st){const Q=f.get(st).get(P);l.get(st)!==Q&&(i.uniformBlockBinding(st,Q,P.__bindingPointIndex),l.set(st,Q))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},At=null,It={},h={},c=new WeakMap,d=[],g=null,v=!1,m=null,p=null,S=null,y=null,_=null,O=null,R=null,L=new ce(0,0,0),U=0,T=!1,M=null,I=null,W=null,X=null,Y=null,pe.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:St,disable:Xt,bindFramebuffer:Kt,drawBuffers:jt,useProgram:Qt,setBlending:w,setMaterial:ot,setFlipSided:ct,setCullFace:Mt,setLineWidth:pt,setPolygonOffset:Ct,setScissorTest:wt,activeTexture:A,bindTexture:E,unbindTexture:G,compressedTexImage2D:et,compressedTexImage3D:ht,texImage2D:Dt,texImage3D:Yt,updateUBOMapping:ut,uniformBlockBinding:yt,texStorage2D:oe,texStorage3D:dt,texSubImage2D:rt,texSubImage3D:zt,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Nt,scissor:q,viewport:tt,reset:mt}}function ec(i,t,e,n){const r=W0(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/r.components*r.byteLength;case 1029:return i*t/r.components*r.byteLength;case 1030:return i*t*2/r.components*r.byteLength;case 1031:return i*t*2/r.components*r.byteLength;case 1022:return i*t*3/r.components*r.byteLength;case 1023:return i*t*4/r.components*r.byteLength;case 1033:return i*t*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W0(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function q0(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new vt,u=new WeakMap;let h;const c=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return d?new OffscreenCanvas(A,E):Sr("canvas")}function v(A,E,G){let et=1;const ht=wt(A);if((ht.width>G||ht.height>G)&&(et=G/Math.max(ht.width,ht.height)),et<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const rt=Math.floor(et*ht.width),zt=Math.floor(et*ht.height);h===void 0&&(h=g(rt,zt));const Pt=E?g(rt,zt):h;return Pt.width=rt,Pt.height=zt,Pt.getContext("2d").drawImage(A,0,0,rt,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+rt+"x"+zt+")."),Pt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,E,G,et,ht=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=E;if(E===i.RED&&(G===i.FLOAT&&(rt=i.R32F),G===i.HALF_FLOAT&&(rt=i.R16F),G===i.UNSIGNED_BYTE&&(rt=i.R8)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(rt=i.R8UI),G===i.UNSIGNED_SHORT&&(rt=i.R16UI),G===i.UNSIGNED_INT&&(rt=i.R32UI),G===i.BYTE&&(rt=i.R8I),G===i.SHORT&&(rt=i.R16I),G===i.INT&&(rt=i.R32I)),E===i.RG&&(G===i.FLOAT&&(rt=i.RG32F),G===i.HALF_FLOAT&&(rt=i.RG16F),G===i.UNSIGNED_BYTE&&(rt=i.RG8)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(rt=i.RG8UI),G===i.UNSIGNED_SHORT&&(rt=i.RG16UI),G===i.UNSIGNED_INT&&(rt=i.RG32UI),G===i.BYTE&&(rt=i.RG8I),G===i.SHORT&&(rt=i.RG16I),G===i.INT&&(rt=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),G===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),G===i.UNSIGNED_INT&&(rt=i.RGB32UI),G===i.BYTE&&(rt=i.RGB8I),G===i.SHORT&&(rt=i.RGB16I),G===i.INT&&(rt=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),G===i.UNSIGNED_INT&&(rt=i.RGBA32UI),G===i.BYTE&&(rt=i.RGBA8I),G===i.SHORT&&(rt=i.RGBA16I),G===i.INT&&(rt=i.RGBA32I)),E===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),E===i.RGBA){const zt=ht?rs:ve.getTransfer(et);G===i.FLOAT&&(rt=i.RGBA32F),G===i.HALF_FLOAT&&(rt=i.RGBA16F),G===i.UNSIGNED_BYTE&&(rt=zt===Te?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function _(A,E){let G;return A?E===null||E===1014||E===1020?G=i.DEPTH24_STENCIL8:E===1015?G=i.DEPTH32F_STENCIL8:E===1012&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===1014||E===1020?G=i.DEPTH_COMPONENT24:E===1015?G=i.DEPTH_COMPONENT32F:E===1012&&(G=i.DEPTH_COMPONENT16),G}function O(A,E){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==1003&&A.minFilter!==1006?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function R(A){const E=A.target;E.removeEventListener("dispose",R),U(E),E.isVideoTexture&&u.delete(E)}function L(A){const E=A.target;E.removeEventListener("dispose",L),M(E)}function U(A){const E=n.get(A);if(E.__webglInit===void 0)return;const G=A.source,et=c.get(G);if(et){const ht=et[E.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&T(A),Object.keys(et).length===0&&c.delete(G)}n.remove(A)}function T(A){const E=n.get(A);i.deleteTexture(E.__webglTexture);const G=A.source,et=c.get(G);delete et[E.__cacheKey],a.memory.textures--}function M(A){const E=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(E.__webglFramebuffer[et]))for(let ht=0;ht<E.__webglFramebuffer[et].length;ht++)i.deleteFramebuffer(E.__webglFramebuffer[et][ht]);else i.deleteFramebuffer(E.__webglFramebuffer[et]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[et])}else{if(Array.isArray(E.__webglFramebuffer))for(let et=0;et<E.__webglFramebuffer.length;et++)i.deleteFramebuffer(E.__webglFramebuffer[et]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let et=0;et<E.__webglColorRenderbuffer.length;et++)E.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[et]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=A.textures;for(let et=0,ht=G.length;et<ht;et++){const rt=n.get(G[et]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(G[et])}n.remove(A)}let I=0;function W(){I=0}function X(){const A=I;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function Y(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function at(A,E){const G=n.get(A);if(A.isVideoTexture&&pt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const et=A.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(G,A,E);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function J(A,E){const G=n.get(A);if(A.version>0&&G.__version!==A.version){it(G,A,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function N(A,E){const G=n.get(A);if(A.version>0&&G.__version!==A.version){it(G,A,E);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function $(A,E){const G=n.get(A);if(A.version>0&&G.__version!==A.version){gt(G,A,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}const At={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},It={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},Bt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function te(A,E){if(E.type===1015&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===1006||E.magFilter===1007||E.magFilter===1005||E.magFilter===1008||E.minFilter===1006||E.minFilter===1007||E.minFilter===1005||E.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,At[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,At[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,At[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,It[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,It[E.minFilter]),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Bt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===1003||E.minFilter!==1005&&E.minFilter!==1008||E.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function pe(A,E){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",R));const et=E.source;let ht=c.get(et);ht===void 0&&(ht={},c.set(et,ht));const rt=Y(E);if(rt!==A.__cacheKey){ht[rt]===void 0&&(ht[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ht[rt].usedTimes++;const zt=ht[A.__cacheKey];zt!==void 0&&(ht[A.__cacheKey].usedTimes--,zt.usedTimes===0&&T(E)),A.__cacheKey=rt,A.__webglTexture=ht[rt].texture}return G}function it(A,E,G){let et=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=i.TEXTURE_3D);const ht=pe(A,E),rt=E.source;e.bindTexture(et,A.__webglTexture,i.TEXTURE0+G);const zt=n.get(rt);if(rt.version!==zt.__version||ht===!0){e.activeTexture(i.TEXTURE0+G);const Pt=ve.getPrimaries(ve.workingColorSpace),Nt=E.colorSpace===kn?null:ve.getPrimaries(E.colorSpace),oe=E.colorSpace===kn||Pt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let dt=v(E.image,!1,r.maxTextureSize);dt=Ct(E,dt);const Dt=s.convert(E.format,E.colorSpace),Yt=s.convert(E.type);let q=y(E.internalFormat,Dt,Yt,E.colorSpace,E.isVideoTexture);te(et,E);let tt;const ut=E.mipmaps,yt=E.isVideoTexture!==!0,mt=zt.__version===void 0||ht===!0,P=rt.dataReady,st=O(E,dt);if(E.isDepthTexture)q=_(E.format===1027,E.type),mt&&(yt?e.texStorage2D(i.TEXTURE_2D,1,q,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,q,dt.width,dt.height,0,Dt,Yt,null));else if(E.isDataTexture)if(ut.length>0){yt&&mt&&e.texStorage2D(i.TEXTURE_2D,st,q,ut[0].width,ut[0].height);for(let j=0,Q=ut.length;j<Q;j++)tt=ut[j],yt?P&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,tt.width,tt.height,Dt,Yt,tt.data):e.texImage2D(i.TEXTURE_2D,j,q,tt.width,tt.height,0,Dt,Yt,tt.data);E.generateMipmaps=!1}else yt?(mt&&e.texStorage2D(i.TEXTURE_2D,st,q,dt.width,dt.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Dt,Yt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,q,dt.width,dt.height,0,Dt,Yt,dt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){yt&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,q,ut[0].width,ut[0].height,dt.depth);for(let j=0,Q=ut.length;j<Q;j++)if(tt=ut[j],E.format!==1023)if(Dt!==null)if(yt){if(P)if(E.layerUpdates.size>0){const _t=ec(tt.width,tt.height,E.format,E.type);for(const Tt of E.layerUpdates){const kt=tt.data.subarray(Tt*_t/tt.data.BYTES_PER_ELEMENT,(Tt+1)*_t/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Tt,tt.width,tt.height,1,Dt,kt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,tt.width,tt.height,dt.depth,Dt,tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,q,tt.width,tt.height,dt.depth,0,tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,tt.width,tt.height,dt.depth,Dt,Yt,tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,q,tt.width,tt.height,dt.depth,0,Dt,Yt,tt.data)}else{yt&&mt&&e.texStorage2D(i.TEXTURE_2D,st,q,ut[0].width,ut[0].height);for(let j=0,Q=ut.length;j<Q;j++)tt=ut[j],E.format!==1023?Dt!==null?yt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,tt.width,tt.height,Dt,tt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,q,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?P&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,tt.width,tt.height,Dt,Yt,tt.data):e.texImage2D(i.TEXTURE_2D,j,q,tt.width,tt.height,0,Dt,Yt,tt.data)}else if(E.isDataArrayTexture)if(yt){if(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,q,dt.width,dt.height,dt.depth),P)if(E.layerUpdates.size>0){const j=ec(dt.width,dt.height,E.format,E.type);for(const Q of E.layerUpdates){const _t=dt.data.subarray(Q*j/dt.data.BYTES_PER_ELEMENT,(Q+1)*j/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,dt.width,dt.height,1,Dt,Yt,_t)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Dt,Yt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,q,dt.width,dt.height,dt.depth,0,Dt,Yt,dt.data);else if(E.isData3DTexture)yt?(mt&&e.texStorage3D(i.TEXTURE_3D,st,q,dt.width,dt.height,dt.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Dt,Yt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,q,dt.width,dt.height,dt.depth,0,Dt,Yt,dt.data);else if(E.isFramebufferTexture){if(mt)if(yt)e.texStorage2D(i.TEXTURE_2D,st,q,dt.width,dt.height);else{let j=dt.width,Q=dt.height;for(let _t=0;_t<st;_t++)e.texImage2D(i.TEXTURE_2D,_t,q,j,Q,0,Dt,Yt,null),j>>=1,Q>>=1}}else if(ut.length>0){if(yt&&mt){const j=wt(ut[0]);e.texStorage2D(i.TEXTURE_2D,st,q,j.width,j.height)}for(let j=0,Q=ut.length;j<Q;j++)tt=ut[j],yt?P&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Dt,Yt,tt):e.texImage2D(i.TEXTURE_2D,j,q,Dt,Yt,tt);E.generateMipmaps=!1}else if(yt){if(mt){const j=wt(dt);e.texStorage2D(i.TEXTURE_2D,st,q,j.width,j.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,Yt,dt)}else e.texImage2D(i.TEXTURE_2D,0,q,Dt,Yt,dt);m(E)&&p(et),zt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function gt(A,E,G){if(E.image.length!==6)return;const et=pe(A,E),ht=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);const rt=n.get(ht);if(ht.version!==rt.__version||et===!0){e.activeTexture(i.TEXTURE0+G);const zt=ve.getPrimaries(ve.workingColorSpace),Pt=E.colorSpace===kn?null:ve.getPrimaries(E.colorSpace),Nt=E.colorSpace===kn||zt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const oe=E.isCompressedTexture||E.image[0].isCompressedTexture,dt=E.image[0]&&E.image[0].isDataTexture,Dt=[];for(let Q=0;Q<6;Q++)!oe&&!dt?Dt[Q]=v(E.image[Q],!0,r.maxCubemapSize):Dt[Q]=dt?E.image[Q].image:E.image[Q],Dt[Q]=Ct(E,Dt[Q]);const Yt=Dt[0],q=s.convert(E.format,E.colorSpace),tt=s.convert(E.type),ut=y(E.internalFormat,q,tt,E.colorSpace),yt=E.isVideoTexture!==!0,mt=rt.__version===void 0||et===!0,P=ht.dataReady;let st=O(E,Yt);te(i.TEXTURE_CUBE_MAP,E);let j;if(oe){yt&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,ut,Yt.width,Yt.height);for(let Q=0;Q<6;Q++){j=Dt[Q].mipmaps;for(let _t=0;_t<j.length;_t++){const Tt=j[_t];E.format!==1023?q!==null?yt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,Tt.width,Tt.height,q,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,ut,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,Tt.width,Tt.height,q,tt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,ut,Tt.width,Tt.height,0,q,tt,Tt.data)}}}else{if(j=E.mipmaps,yt&&mt){j.length>0&&st++;const Q=wt(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,ut,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(dt){yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Dt[Q].width,Dt[Q].height,q,tt,Dt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ut,Dt[Q].width,Dt[Q].height,0,q,tt,Dt[Q].data);for(let _t=0;_t<j.length;_t++){const kt=j[_t].image[Q].image;yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,kt.width,kt.height,q,tt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,ut,kt.width,kt.height,0,q,tt,kt.data)}}else{yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,q,tt,Dt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ut,q,tt,Dt[Q]);for(let _t=0;_t<j.length;_t++){const Tt=j[_t];yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,q,tt,Tt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,ut,q,tt,Tt.image[Q])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),rt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ot(A,E,G,et,ht,rt){const zt=s.convert(G.format,G.colorSpace),Pt=s.convert(G.type),Nt=y(G.internalFormat,zt,Pt,G.colorSpace),oe=n.get(E),dt=n.get(G);if(dt.__renderTarget=E,!oe.__hasExternalTextures){const Dt=Math.max(1,E.width>>rt),Yt=Math.max(1,E.height>>rt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,rt,Nt,Dt,Yt,E.depth,0,zt,Pt,null):e.texImage2D(ht,rt,Nt,Dt,Yt,0,zt,Pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Mt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,ht,dt.__webglTexture,0,ct(E)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,ht,dt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(A,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer){const et=E.depthTexture,ht=et&&et.isDepthTexture?et.type:null,rt=_(E.stencilBuffer,ht),zt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=ct(E);Mt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,rt,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,rt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,rt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,zt,i.RENDERBUFFER,A)}else{const et=E.textures;for(let ht=0;ht<et.length;ht++){const rt=et[ht],zt=s.convert(rt.format,rt.colorSpace),Pt=s.convert(rt.type),Nt=y(rt.internalFormat,zt,Pt,rt.colorSpace),oe=ct(E);G&&Mt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Nt,E.width,E.height):Mt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Nt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(E.depthTexture);et.__renderTarget=E,(!et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),at(E.depthTexture,0);const ht=et.__webglTexture,rt=ct(E);if(E.depthTexture.format===1026)Mt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(E.depthTexture.format===1027)Mt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Kt(A){const E=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const et=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),et){const ht=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,et.removeEventListener("dispose",ht)};et.addEventListener("dispose",ht),E.__depthDisposeCallback=ht}E.__boundDepthTexture=et}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Xt(E.__webglFramebuffer,A)}else if(G){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]===void 0)E.__webglDepthbuffer[et]=i.createRenderbuffer(),St(E.__webglDepthbuffer[et],A,!1);else{const ht=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),St(E.__webglDepthbuffer,A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(A,E,G){const et=n.get(A);E!==void 0&&Ot(et.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Kt(A)}function Qt(A){const E=A.texture,G=n.get(A),et=n.get(E);A.addEventListener("dispose",L);const ht=A.textures,rt=A.isWebGLCubeRenderTarget===!0,zt=ht.length>1;if(zt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=E.version,a.memory.textures++),rt){G.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Pt]=[];for(let Nt=0;Nt<E.mipmaps.length;Nt++)G.__webglFramebuffer[Pt][Nt]=i.createFramebuffer()}else G.__webglFramebuffer[Pt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Pt=0;Pt<E.mipmaps.length;Pt++)G.__webglFramebuffer[Pt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(zt)for(let Pt=0,Nt=ht.length;Pt<Nt;Pt++){const oe=n.get(ht[Pt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Mt(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Pt=0;Pt<ht.length;Pt++){const Nt=ht[Pt];G.__webglColorRenderbuffer[Pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Pt]);const oe=s.convert(Nt.format,Nt.colorSpace),dt=s.convert(Nt.type),Dt=y(Nt.internalFormat,oe,dt,Nt.colorSpace,A.isXRRenderTarget===!0),Yt=ct(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Dt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,G.__webglColorRenderbuffer[Pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),St(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),te(i.TEXTURE_CUBE_MAP,E);for(let Pt=0;Pt<6;Pt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Nt=0;Nt<E.mipmaps.length;Nt++)Ot(G.__webglFramebuffer[Pt][Nt],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Nt);else Ot(G.__webglFramebuffer[Pt],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);m(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let Pt=0,Nt=ht.length;Pt<Nt;Pt++){const oe=ht[Pt],dt=n.get(oe);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),te(i.TEXTURE_2D,oe),Ot(G.__webglFramebuffer,A,oe,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,0),m(oe)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Pt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Pt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Pt,et.__webglTexture),te(Pt,E),E.mipmaps&&E.mipmaps.length>0)for(let Nt=0;Nt<E.mipmaps.length;Nt++)Ot(G.__webglFramebuffer[Nt],A,E,i.COLOR_ATTACHMENT0,Pt,Nt);else Ot(G.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,Pt,0);m(E)&&p(Pt),e.unbindTexture()}A.depthBuffer&&Kt(A)}function ft(A){const E=A.textures;for(let G=0,et=E.length;G<et;G++){const ht=E[G];if(m(ht)){const rt=S(A),zt=n.get(ht).__webglTexture;e.bindTexture(rt,zt),p(rt),e.unbindTexture()}}}const xt=[],w=[];function ot(A){if(A.samples>0){if(Mt(A)===!1){const E=A.textures,G=A.width,et=A.height;let ht=i.COLOR_BUFFER_BIT;const rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=n.get(A),Pt=E.length>1;if(Pt)for(let Nt=0;Nt<E.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Nt=0;Nt<E.length;Nt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),Pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Nt]);const oe=n.get(E[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,G,et,0,0,G,et,ht,i.NEAREST),l===!0&&(xt.length=0,w.length=0,xt.push(i.COLOR_ATTACHMENT0+Nt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(xt.push(rt),w.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pt)for(let Nt=0;Nt<E.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Nt]);const oe=n.get(E[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const E=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ct(A){return Math.min(r.maxSamples,A.samples)}function Mt(A){const E=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pt(A){const E=a.render.frame;u.get(A)!==E&&(u.set(A,E),A.update())}function Ct(A,E){const G=A.colorSpace,et=A.format,ht=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Ii&&G!==kn&&(ve.getTransfer(G)===Te?(et!==1023||ht!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function wt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(f.width=A.naturalWidth||A.width,f.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(f.width=A.displayWidth,f.height=A.displayHeight):(f.width=A.width,f.height=A.height),f}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.setTexture2D=at,this.setTexture2DArray=J,this.setTexture3D=N,this.setTextureCube=$,this.rebindTextures=jt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Mt}function X0(i,t){function e(n,r=kn){let s;const a=ve.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===Te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===Te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===Te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===36492)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Y0 extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class se extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j0={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(f,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=f.joints["index-finger-tip"],h=f.joints["thumb-tip"],c=u.position.distanceTo(h.position),d=.02,g=.005;f.inputState.pinching&&c>d+g?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&c<=d-g&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),f!==null&&(f.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class J0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new We,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ai({vertexShader:Z0,fragmentShader:K0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q0 extends Di{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,f=null,u=null,h=null,c=null,d=null,g=null;const v=new J0,m=e.getContextAttributes();let p=null,S=null;const y=[],_=[],O=new vt;let R=null;const L=new fn;L.viewport=new we;const U=new fn;U.viewport=new we;const T=[L,U],M=new Y0;let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let gt=y[it];return gt===void 0&&(gt=new Ya,y[it]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(it){let gt=y[it];return gt===void 0&&(gt=new Ya,y[it]=gt),gt.getGripSpace()},this.getHand=function(it){let gt=y[it];return gt===void 0&&(gt=new Ya,y[it]=gt),gt.getHandSpace()};function X(it){const gt=_.indexOf(it.inputSource);if(gt===-1)return;const Ot=y[gt];Ot!==void 0&&(Ot.update(it.inputSource,it.frame,f||a),Ot.dispatchEvent({type:it.type,data:it.inputSource}))}function Y(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",at);for(let it=0;it<y.length;it++){const gt=_[it];gt!==null&&(_[it]=null,y[it].disconnect(gt))}I=null,W=null,v.reset(),t.setRenderTarget(p),d=null,c=null,h=null,r=null,S=null,pe.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){s=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(it){f=it},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",at),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(O),r.renderState.layers===void 0){const gt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,gt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new pi(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let gt=null,Ot=null,St=null;m.depth&&(St=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=m.stencil?1027:1026,Ot=m.stencil?1020:1014);const Xt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};h=new XRWebGLBinding(r,e),c=h.createProjectionLayer(Xt),r.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),S=new pi(c.textureWidth,c.textureHeight,{format:1023,type:1009,depthTexture:new Dl(c.textureWidth,c.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),f=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function at(it){for(let gt=0;gt<it.removed.length;gt++){const Ot=it.removed[gt],St=_.indexOf(Ot);St>=0&&(_[St]=null,y[St].disconnect(Ot))}for(let gt=0;gt<it.added.length;gt++){const Ot=it.added[gt];let St=_.indexOf(Ot);if(St===-1){for(let Kt=0;Kt<y.length;Kt++)if(Kt>=_.length){_.push(Ot),St=Kt;break}else if(_[Kt]===null){_[Kt]=Ot,St=Kt;break}if(St===-1)break}const Xt=y[St];Xt&&Xt.connect(Ot)}}const J=new D,N=new D;function $(it,gt,Ot){J.setFromMatrixPosition(gt.matrixWorld),N.setFromMatrixPosition(Ot.matrixWorld);const St=J.distanceTo(N),Xt=gt.projectionMatrix.elements,Kt=Ot.projectionMatrix.elements,jt=Xt[14]/(Xt[10]-1),Qt=Xt[14]/(Xt[10]+1),ft=(Xt[9]+1)/Xt[5],xt=(Xt[9]-1)/Xt[5],w=(Xt[8]-1)/Xt[0],ot=(Kt[8]+1)/Kt[0],ct=jt*w,Mt=jt*ot,pt=St/(-w+ot),Ct=pt*-w;if(gt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ct),it.translateZ(pt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Xt[10]===-1)it.projectionMatrix.copy(gt.projectionMatrix),it.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const wt=jt+pt,A=Qt+pt,E=ct-Ct,G=Mt+(St-Ct),et=ft*Qt/A*wt,ht=xt*Qt/A*wt;it.projectionMatrix.makePerspective(E,G,et,ht,wt,A),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function At(it,gt){gt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(gt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let gt=it.near,Ot=it.far;v.texture!==null&&(v.depthNear>0&&(gt=v.depthNear),v.depthFar>0&&(Ot=v.depthFar)),M.near=U.near=L.near=gt,M.far=U.far=L.far=Ot,(I!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,W=M.far),L.layers.mask=it.layers.mask|2,U.layers.mask=it.layers.mask|4,M.layers.mask=L.layers.mask|U.layers.mask;const St=it.parent,Xt=M.cameras;At(M,St);for(let Kt=0;Kt<Xt.length;Kt++)At(Xt[Kt],St);Xt.length===2?$(M,L,U):M.projectionMatrix.copy(L.projectionMatrix),It(it,M,St)};function It(it,gt,Ot){Ot===null?it.matrix.copy(gt.matrixWorld):(it.matrix.copy(Ot.matrixWorld),it.matrix.invert(),it.matrix.multiply(gt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(gt.projectionMatrix),it.projectionMatrixInverse.copy(gt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=da*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(c===null&&d===null))return l},this.setFoveation=function(it){l=it,c!==null&&(c.fixedFoveation=it),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=it)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Bt=null;function te(it,gt){if(u=gt.getViewerPose(f||a),g=gt,u!==null){const Ot=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let St=!1;Ot.length!==M.cameras.length&&(M.cameras.length=0,St=!0);for(let Kt=0;Kt<Ot.length;Kt++){const jt=Ot[Kt];let Qt=null;if(d!==null)Qt=d.getViewport(jt);else{const xt=h.getViewSubImage(c,jt);Qt=xt.viewport,Kt===0&&(t.setRenderTargetTextures(S,xt.colorTexture,c.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(S))}let ft=T[Kt];ft===void 0&&(ft=new fn,ft.layers.enable(Kt),ft.viewport=new we,T[Kt]=ft),ft.matrix.fromArray(jt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(jt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Kt===0&&(M.matrix.copy(ft.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),St===!0&&M.cameras.push(ft)}const Xt=r.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")){const Kt=h.getDepthInformation(Ot[0]);Kt&&Kt.isValid&&Kt.texture&&v.init(t,Kt,r.renderState)}}for(let Ot=0;Ot<y.length;Ot++){const St=_[Ot],Xt=y[Ot];St!==null&&Xt!==void 0&&Xt.update(St,gt,f||a)}Bt&&Bt(it,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),g=null}const pe=new Tl;pe.setAnimationLoop(te),this.setAnimationLoop=function(it){Bt=it},this.dispose=function(){}}}const bi=new An,$0=new Me;function tp(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),c(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?f(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,_=S.envMapRotation;y&&(m.envMap.value=y,bi.copy(_),bi.x*=-1,bi.y*=-1,bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4($0.makeRotationFromEuler(bi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function c(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ep(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const _=y.program;n.uniformBlockBinding(S,_)}function f(S,y){let _=r[S.id];_===void 0&&(g(S),_=u(S),r[S.id]=_,S.addEventListener("dispose",m));const O=y.program;n.updateUBOMapping(S,O);const R=t.render.frame;s[S.id]!==R&&(c(S),s[S.id]=R)}function u(S){const y=h();S.__bindingPointIndex=y;const _=i.createBuffer(),O=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,O,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(S){const y=r[S.id],_=S.uniforms,O=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,L=_.length;R<L;R++){const U=Array.isArray(_[R])?_[R]:[_[R]];for(let T=0,M=U.length;T<M;T++){const I=U[T];if(d(I,R,T,O)===!0){const W=I.__offset,X=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let at=0;at<X.length;at++){const J=X[at],N=v(J);typeof J=="number"||typeof J=="boolean"?(I.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,W+Y,I.__data)):J.isMatrix3?(I.__data[0]=J.elements[0],I.__data[1]=J.elements[1],I.__data[2]=J.elements[2],I.__data[3]=0,I.__data[4]=J.elements[3],I.__data[5]=J.elements[4],I.__data[6]=J.elements[5],I.__data[7]=0,I.__data[8]=J.elements[6],I.__data[9]=J.elements[7],I.__data[10]=J.elements[8],I.__data[11]=0):(J.toArray(I.__data,Y),Y+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,y,_,O){const R=S.value,L=y+"_"+_;if(O[L]===void 0)return typeof R=="number"||typeof R=="boolean"?O[L]=R:O[L]=R.clone(),!0;{const U=O[L];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return O[L]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(S){const y=S.uniforms;let _=0;const O=16;for(let L=0,U=y.length;L<U;L++){const T=Array.isArray(y[L])?y[L]:[y[L]];for(let M=0,I=T.length;M<I;M++){const W=T[M],X=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,at=X.length;Y<at;Y++){const J=X[Y],N=v(J),$=_%O,At=$%N.boundary,It=$+At;_+=At,It!==0&&O-It<N.storage&&(_+=O-It),W.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=N.storage}}}const R=_%O;return R>0&&(_+=O-R),S.__size=_,S.__cache={},this}function v(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:f,dispose:p}}class np{constructor(t={}){const{canvas:e=bf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:c=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=0,this.toneMappingExposure=1;const _=this;let O=!1,R=0,L=0,U=null,T=-1,M=null;const I=new we,W=new we;let X=null;const Y=new ce(0);let at=0,J=e.width,N=e.height,$=1,At=null,It=null;const Bt=new we(0,0,J,N),te=new we(0,0,J,N);let pe=!1;const it=new Oa;let gt=!1,Ot=!1;const St=new Me,Xt=new Me,Kt=new D,jt=new we,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function xt(){return U===null?$:1}let w=n;function ot(b,z){return e.getContext(b,z)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ua}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),w===null){const z="webgl2";if(w=ot(z,b),w===null)throw ot(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ct,Mt,pt,Ct,wt,A,E,G,et,ht,rt,zt,Pt,Nt,oe,dt,Dt,Yt,q,tt,ut,yt,mt,P;function st(){ct=new od(w),ct.init(),yt=new X0(w,ct),Mt=new ed(w,ct,t,yt),pt=new G0(w,ct),Mt.reverseDepthBuffer&&c&&pt.buffers.depth.setReversed(!0),Ct=new fd(w),wt=new R0,A=new q0(w,ct,pt,wt,Mt,yt,Ct),E=new id(_),G=new ad(_),et=new Jf(w),mt=new $h(w,et),ht=new ld(w,et,Ct,mt),rt=new hd(w,ht,et,Ct),q=new ud(w,Mt,A),dt=new nd(wt),zt=new w0(_,E,G,ct,Mt,mt,dt),Pt=new tp(_,wt),Nt=new P0,oe=new F0(ct),Yt=new Qh(_,E,G,pt,rt,d,l),Dt=new V0(_,rt,Mt),P=new ep(w,Ct,Mt,pt),tt=new td(w,ct,Ct),ut=new cd(w,ct,Ct),Ct.programs=zt.programs,_.capabilities=Mt,_.extensions=ct,_.properties=wt,_.renderLists=Nt,_.shadowMap=Dt,_.state=pt,_.info=Ct}st();const j=new Q0(_,w);this.xr=j,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const b=ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(J,N,!1))},this.getSize=function(b){return b.set(J,N)},this.setSize=function(b,z,Z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,N=z,e.width=Math.floor(b*$),e.height=Math.floor(z*$),Z===!0&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(J*$,N*$).floor()},this.setDrawingBufferSize=function(b,z,Z){J=b,N=z,$=Z,e.width=Math.floor(b*Z),e.height=Math.floor(z*Z),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(Bt)},this.setViewport=function(b,z,Z,K){b.isVector4?Bt.set(b.x,b.y,b.z,b.w):Bt.set(b,z,Z,K),pt.viewport(I.copy(Bt).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(te)},this.setScissor=function(b,z,Z,K){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,z,Z,K),pt.scissor(W.copy(te).multiplyScalar($).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(b){pt.setScissorTest(pe=b)},this.setOpaqueSort=function(b){At=b},this.setTransparentSort=function(b){It=b},this.getClearColor=function(b){return b.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(b=!0,z=!0,Z=!0){let K=0;if(b){let k=!1;if(U!==null){const Et=U.texture.format;k=Et===1033||Et===1031||Et===1029}if(k){const Et=U.texture.type,bt=Et===1009||Et===1014||Et===1012||Et===1020||Et===1017||Et===1018,qt=Yt.getClearColor(),Gt=Yt.getClearAlpha(),ee=qt.r,le=qt.g,Wt=qt.b;bt?(g[0]=ee,g[1]=le,g[2]=Wt,g[3]=Gt,w.clearBufferuiv(w.COLOR,0,g)):(v[0]=ee,v[1]=le,v[2]=Wt,v[3]=Gt,w.clearBufferiv(w.COLOR,0,v))}else K|=w.COLOR_BUFFER_BIT}z&&(K|=w.DEPTH_BUFFER_BIT),Z&&(K|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Nt.dispose(),oe.dispose(),wt.dispose(),E.dispose(),G.dispose(),rt.dispose(),mt.dispose(),P.dispose(),zt.dispose(),j.dispose(),j.removeEventListener("sessionstart",fr),j.removeEventListener("sessionend",wi),Cn.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const b=Ct.autoReset,z=Dt.enabled,Z=Dt.autoUpdate,K=Dt.needsUpdate,k=Dt.type;st(),Ct.autoReset=b,Dt.enabled=z,Dt.autoUpdate=Z,Dt.needsUpdate=K,Dt.type=k}function Tt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function kt(b){const z=b.target;z.removeEventListener("dispose",kt),Ce(z)}function Ce(b){Ge(b),wt.remove(b)}function Ge(b){const z=wt.get(b).programs;z!==void 0&&(z.forEach(function(Z){zt.releaseProgram(Z)}),b.isShaderMaterial&&zt.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,Z,K,k,Et){z===null&&(z=Qt);const bt=k.isMesh&&k.matrixWorld.determinant()<0,qt=aa(b,z,Z,K,k);pt.setMaterial(K,bt);let Gt=Z.index,ee=1;if(K.wireframe===!0){if(Gt=ht.getWireframeAttribute(Z),Gt===void 0)return;ee=2}const le=Z.drawRange,Wt=Z.attributes.position;let Ft=le.start*ee,be=(le.start+le.count)*ee;Et!==null&&(Ft=Math.max(Ft,Et.start*ee),be=Math.min(be,(Et.start+Et.count)*ee)),Gt!==null?(Ft=Math.max(Ft,0),be=Math.min(be,Gt.count)):Wt!=null&&(Ft=Math.max(Ft,0),be=Math.min(be,Wt.count));const Pe=be-Ft;if(Pe<0||Pe===1/0)return;mt.setup(k,K,qt,Z,Gt);let je,Se=tt;if(Gt!==null&&(je=et.get(Gt),Se=ut,Se.setIndex(je)),k.isMesh)K.wireframe===!0?(pt.setLineWidth(K.wireframeLinewidth*xt()),Se.setMode(w.LINES)):Se.setMode(w.TRIANGLES);else if(k.isLine){let Vt=K.linewidth;Vt===void 0&&(Vt=1),pt.setLineWidth(Vt*xt()),k.isLineSegments?Se.setMode(w.LINES):k.isLineLoop?Se.setMode(w.LINE_LOOP):Se.setMode(w.LINE_STRIP)}else k.isPoints?Se.setMode(w.POINTS):k.isSprite&&Se.setMode(w.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Se.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Se.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Vt=k._multiDrawStarts,rn=k._multiDrawCounts,xe=k._multiDrawCount,hn=Gt?et.get(Gt).bytesPerElement:1,yn=wt.get(K).currentProgram.getUniforms();for(let sn=0;sn<xe;sn++)yn.setValue(w,"_gl_DrawID",sn),Se.render(Vt[sn]/hn,rn[sn])}else if(k.isInstancedMesh)Se.renderInstances(Ft,Pe,k.count);else if(Z.isInstancedBufferGeometry){const Vt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,rn=Math.min(Z.instanceCount,Vt);Se.renderInstances(Ft,Pe,rn)}else Se.render(Ft,Pe)};function Rt(b,z,Z){b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=1,b.needsUpdate=!0,Ri(b,z,Z),b.side=0,b.needsUpdate=!0,Ri(b,z,Z),b.side=2):Ri(b,z,Z)}this.compile=function(b,z,Z=null){Z===null&&(Z=b),p=oe.get(Z),p.init(z),y.push(p),Z.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),b!==Z&&b.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const K=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Et=k.material;if(Et)if(Array.isArray(Et))for(let bt=0;bt<Et.length;bt++){const qt=Et[bt];Rt(qt,Z,k),K.add(qt)}else Rt(Et,Z,k),K.add(Et)}),y.pop(),p=null,K},this.compileAsync=function(b,z,Z=null){const K=this.compile(b,z,Z);return new Promise(k=>{function Et(){if(K.forEach(function(bt){wt.get(bt).currentProgram.isReady()&&K.delete(bt)}),K.size===0){k(b);return}setTimeout(Et,10)}ct.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let me=null;function ye(b){me&&me(b)}function fr(){Cn.stop()}function wi(){Cn.start()}const Cn=new Tl;Cn.setAnimationLoop(ye),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(b){me=b,j.setAnimationLoop(b),b===null?Cn.stop():Cn.start()},j.addEventListener("sessionstart",fr),j.addEventListener("sessionend",wi),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(z),z=j.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,z,U),p=oe.get(b,y.length),p.init(z),y.push(p),Xt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),it.setFromProjectionMatrix(Xt),Ot=this.localClippingEnabled,gt=dt.init(this.clippingPlanes,Ot),m=Nt.get(b,S.length),m.init(),S.push(m),j.enabled===!0&&j.isPresenting===!0){const Et=_.xr.getDepthSensingMesh();Et!==null&&Kn(Et,z,-1/0,_.sortObjects)}Kn(b,z,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(At,It),ft=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ft&&Yt.addToRenderList(m,b),this.info.render.frame++,gt===!0&&dt.beginShadows();const Z=p.state.shadowsArray;Dt.render(Z,b,z),gt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,k=m.transmissive;if(p.setupLights(),z.isArrayCamera){const Et=z.cameras;if(k.length>0)for(let bt=0,qt=Et.length;bt<qt;bt++){const Gt=Et[bt];$r(K,k,b,Gt)}ft&&Yt.render(b);for(let bt=0,qt=Et.length;bt<qt;bt++){const Gt=Et[bt];di(m,b,Gt,Gt.viewport)}}else k.length>0&&$r(K,k,b,z),ft&&Yt.render(b),di(m,b,z);U!==null&&(A.updateMultisampleRenderTarget(U),A.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(_,b,z),mt.resetDefaultState(),T=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],gt===!0&&dt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Kn(b,z,Z,K){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||it.intersectsSprite(b)){K&&jt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Xt);const bt=rt.update(b),qt=b.material;qt.visible&&m.push(b,bt,qt,Z,jt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||it.intersectsObject(b))){const bt=rt.update(b),qt=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),jt.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),jt.copy(bt.boundingSphere.center)),jt.applyMatrix4(b.matrixWorld).applyMatrix4(Xt)),Array.isArray(qt)){const Gt=bt.groups;for(let ee=0,le=Gt.length;ee<le;ee++){const Wt=Gt[ee],Ft=qt[Wt.materialIndex];Ft&&Ft.visible&&m.push(b,bt,Ft,Z,jt.z,Wt)}}else qt.visible&&m.push(b,bt,qt,Z,jt.z,null)}}const Et=b.children;for(let bt=0,qt=Et.length;bt<qt;bt++)Kn(Et[bt],z,Z,K)}function di(b,z,Z,K){const k=b.opaque,Et=b.transmissive,bt=b.transparent;p.setupLightsView(Z),gt===!0&&dt.setGlobalState(_.clippingPlanes,Z),K&&pt.viewport(I.copy(K)),k.length>0&&ur(k,z,Z),Et.length>0&&ur(Et,z,Z),bt.length>0&&ur(bt,z,Z),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function $r(b,z,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new pi(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));const Et=p.state.transmissionRenderTarget[K.id],bt=K.viewport||I;Et.setSize(bt.z,bt.w);const qt=_.getRenderTarget();_.setRenderTarget(Et),_.getClearColor(Y),at=_.getClearAlpha(),at<1&&_.setClearColor(16777215,.5),_.clear(),ft&&Yt.render(Z);const Gt=_.toneMapping;_.toneMapping=0;const ee=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),gt===!0&&dt.setGlobalState(_.clippingPlanes,K),ur(b,Z,K),A.updateMultisampleRenderTarget(Et),A.updateRenderTargetMipmap(Et),ct.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Wt=0,Ft=z.length;Wt<Ft;Wt++){const be=z[Wt],Pe=be.object,je=be.geometry,Se=be.material,Vt=be.group;if(Se.side===2&&Pe.layers.test(K.layers)){const rn=Se.side;Se.side=1,Se.needsUpdate=!0,hr(Pe,Z,K,je,Se,Vt),Se.side=rn,Se.needsUpdate=!0,le=!0}}le===!0&&(A.updateMultisampleRenderTarget(Et),A.updateRenderTargetMipmap(Et))}_.setRenderTarget(qt),_.setClearColor(Y,at),ee!==void 0&&(K.viewport=ee),_.toneMapping=Gt}function ur(b,z,Z){const K=z.isScene===!0?z.overrideMaterial:null;for(let k=0,Et=b.length;k<Et;k++){const bt=b[k],qt=bt.object,Gt=bt.geometry,ee=K===null?bt.material:K,le=bt.group;qt.layers.test(Z.layers)&&hr(qt,z,Z,Gt,ee,le)}}function hr(b,z,Z,K,k,Et){b.onBeforeRender(_,z,Z,K,k,Et),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(_,z,Z,K,b,Et),k.transparent===!0&&k.side===2&&k.forceSinglePass===!1?(k.side=1,k.needsUpdate=!0,_.renderBufferDirect(Z,z,K,k,b,Et),k.side=0,k.needsUpdate=!0,_.renderBufferDirect(Z,z,K,k,b,Et),k.side=2):_.renderBufferDirect(Z,z,K,k,b,Et),b.onAfterRender(_,z,Z,K,k,Et)}function Ri(b,z,Z){z.isScene!==!0&&(z=Qt);const K=wt.get(b),k=p.state.lights,Et=p.state.shadowsArray,bt=k.state.version,qt=zt.getParameters(b,k.state,Et,z,Z),Gt=zt.getProgramCacheKey(qt);let ee=K.programs;K.environment=b.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(b.isMeshStandardMaterial?G:E).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,ee===void 0&&(b.addEventListener("dispose",kt),ee=new Map,K.programs=ee);let le=ee.get(Gt);if(le!==void 0){if(K.currentProgram===le&&K.lightsStateVersion===bt)return dr(b,qt),le}else qt.uniforms=zt.getUniforms(b),b.onBeforeCompile(qt,_),le=zt.acquireProgram(qt,Gt),ee.set(Gt,le),K.uniforms=qt.uniforms;const Wt=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Wt.clippingPlanes=dt.uniform),dr(b,qt),K.needsLights=Bo(b),K.lightsStateVersion=bt,K.needsLights&&(Wt.ambientLightColor.value=k.state.ambient,Wt.lightProbe.value=k.state.probe,Wt.directionalLights.value=k.state.directional,Wt.directionalLightShadows.value=k.state.directionalShadow,Wt.spotLights.value=k.state.spot,Wt.spotLightShadows.value=k.state.spotShadow,Wt.rectAreaLights.value=k.state.rectArea,Wt.ltc_1.value=k.state.rectAreaLTC1,Wt.ltc_2.value=k.state.rectAreaLTC2,Wt.pointLights.value=k.state.point,Wt.pointLightShadows.value=k.state.pointShadow,Wt.hemisphereLights.value=k.state.hemi,Wt.directionalShadowMap.value=k.state.directionalShadowMap,Wt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Wt.spotShadowMap.value=k.state.spotShadowMap,Wt.spotLightMatrix.value=k.state.spotLightMatrix,Wt.spotLightMap.value=k.state.spotLightMap,Wt.pointShadowMap.value=k.state.pointShadowMap,Wt.pointShadowMatrix.value=k.state.pointShadowMatrix),K.currentProgram=le,K.uniformsList=null,le}function sa(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Ts.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function dr(b,z){const Z=wt.get(b);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function aa(b,z,Z,K,k){z.isScene!==!0&&(z=Qt),A.resetTextureUnits();const Et=z.fog,bt=K.isMeshStandardMaterial?z.environment:null,qt=U===null?_.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ii,Gt=(K.isMeshStandardMaterial?G:E).get(K.envMap||bt),ee=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,le=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Wt=!!Z.morphAttributes.position,Ft=!!Z.morphAttributes.normal,be=!!Z.morphAttributes.color;let Pe=0;K.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Pe=_.toneMapping);const je=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Se=je!==void 0?je.length:0,Vt=wt.get(K),rn=p.state.lights;if(gt===!0&&(Ot===!0||b!==M)){const ln=b===M&&K.id===T;dt.setState(K,b,ln)}let xe=!1;K.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==rn.state.version||Vt.outputColorSpace!==qt||k.isBatchedMesh&&Vt.batching===!1||!k.isBatchedMesh&&Vt.batching===!0||k.isBatchedMesh&&Vt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Vt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Vt.instancing===!1||!k.isInstancedMesh&&Vt.instancing===!0||k.isSkinnedMesh&&Vt.skinning===!1||!k.isSkinnedMesh&&Vt.skinning===!0||k.isInstancedMesh&&Vt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Vt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Vt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Vt.instancingMorph===!1&&k.morphTexture!==null||Vt.envMap!==Gt||K.fog===!0&&Vt.fog!==Et||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==dt.numPlanes||Vt.numIntersection!==dt.numIntersection)||Vt.vertexAlphas!==ee||Vt.vertexTangents!==le||Vt.morphTargets!==Wt||Vt.morphNormals!==Ft||Vt.morphColors!==be||Vt.toneMapping!==Pe||Vt.morphTargetsCount!==Se)&&(xe=!0):(xe=!0,Vt.__version=K.version);let hn=Vt.currentProgram;xe===!0&&(hn=Ri(K,z,k));let yn=!1,sn=!1,Pn=!1;const _e=hn.getUniforms(),Xe=Vt.uniforms;if(pt.useProgram(hn.program)&&(yn=!0,sn=!0,Pn=!0),K.id!==T&&(T=K.id,sn=!0),yn||M!==b){pt.buffers.depth.getReversed()?(St.copy(b.projectionMatrix),Af(St),wf(St),_e.setValue(w,"projectionMatrix",St)):_e.setValue(w,"projectionMatrix",b.projectionMatrix),_e.setValue(w,"viewMatrix",b.matrixWorldInverse);const Ln=_e.map.cameraPosition;Ln!==void 0&&Ln.setValue(w,Kt.setFromMatrixPosition(b.matrixWorld)),Mt.logarithmicDepthBuffer&&_e.setValue(w,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&_e.setValue(w,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,sn=!0,Pn=!0)}if(k.isSkinnedMesh){_e.setOptional(w,k,"bindMatrix"),_e.setOptional(w,k,"bindMatrixInverse");const ln=k.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),_e.setValue(w,"boneTexture",ln.boneTexture,A))}k.isBatchedMesh&&(_e.setOptional(w,k,"batchingTexture"),_e.setValue(w,"batchingTexture",k._matricesTexture,A),_e.setOptional(w,k,"batchingIdTexture"),_e.setValue(w,"batchingIdTexture",k._indirectTexture,A),_e.setOptional(w,k,"batchingColorTexture"),k._colorsTexture!==null&&_e.setValue(w,"batchingColorTexture",k._colorsTexture,A));const Ci=Z.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&q.update(k,Z,hn),(sn||Vt.receiveShadow!==k.receiveShadow)&&(Vt.receiveShadow=k.receiveShadow,_e.setValue(w,"receiveShadow",k.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Xe.envMap.value=Gt,Xe.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(Xe.envMapIntensity.value=z.environmentIntensity),sn&&(_e.setValue(w,"toneMappingExposure",_.toneMappingExposure),Vt.needsLights&&Oo(Xe,Pn),Et&&K.fog===!0&&Pt.refreshFogUniforms(Xe,Et),Pt.refreshMaterialUniforms(Xe,K,$,N,p.state.transmissionRenderTarget[b.id]),Ts.upload(w,sa(Vt),Xe,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ts.upload(w,sa(Vt),Xe,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&_e.setValue(w,"center",k.center),_e.setValue(w,"modelViewMatrix",k.modelViewMatrix),_e.setValue(w,"normalMatrix",k.normalMatrix),_e.setValue(w,"modelMatrix",k.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ln=K.uniformsGroups;for(let Ln=0,zn=ln.length;Ln<zn;Ln++){const pr=ln[Ln];P.update(pr,hn),P.bind(pr,hn)}}return hn}function Oo(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Bo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,z,Z){wt.get(b.texture).__webglTexture=z,wt.get(b.depthTexture).__webglTexture=Z;const K=wt.get(b);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){const Z=wt.get(b);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,Z=0){U=b,R=z,L=Z;let K=!0,k=null,Et=!1,bt=!1;if(b){const Gt=wt.get(b);if(Gt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(w.FRAMEBUFFER,null),K=!1;else if(Gt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Gt.__hasExternalTextures)A.rebindTextures(b,wt.get(b.texture).__webglTexture,wt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Wt=b.depthTexture;if(Gt.__boundDepthTexture!==Wt){if(Wt!==null&&wt.has(Wt)&&(b.width!==Wt.image.width||b.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const ee=b.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(bt=!0);const le=wt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(le[z])?k=le[z][Z]:k=le[z],Et=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?k=wt.get(b).__webglMultisampledFramebuffer:Array.isArray(le)?k=le[Z]:k=le,I.copy(b.viewport),W.copy(b.scissor),X=b.scissorTest}else I.copy(Bt).multiplyScalar($).floor(),W.copy(te).multiplyScalar($).floor(),X=pe;if(pt.bindFramebuffer(w.FRAMEBUFFER,k)&&K&&pt.drawBuffers(b,k),pt.viewport(I),pt.scissor(W),pt.setScissorTest(X),Et){const Gt=wt.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+z,Gt.__webglTexture,Z)}else if(bt){const Gt=wt.get(b.texture),ee=z||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Gt.__webglTexture,Z||0,ee)}T=-1},this.readRenderTargetPixels=function(b,z,Z,K,k,Et,bt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(qt=qt[bt]),qt){pt.bindFramebuffer(w.FRAMEBUFFER,qt);try{const Gt=b.texture,ee=Gt.format,le=Gt.type;if(!Mt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-K&&Z>=0&&Z<=b.height-k&&w.readPixels(z,Z,K,k,yt.convert(ee),yt.convert(le),Et)}finally{const Gt=U!==null?wt.get(U).__webglFramebuffer:null;pt.bindFramebuffer(w.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(b,z,Z,K,k,Et,bt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(qt=qt[bt]),qt){const Gt=b.texture,ee=Gt.format,le=Gt.type;if(!Mt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=b.width-K&&Z>=0&&Z<=b.height-k){pt.bindFramebuffer(w.FRAMEBUFFER,qt);const Wt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Wt),w.bufferData(w.PIXEL_PACK_BUFFER,Et.byteLength,w.STREAM_READ),w.readPixels(z,Z,K,k,yt.convert(ee),yt.convert(le),0);const Ft=U!==null?wt.get(U).__webglFramebuffer:null;pt.bindFramebuffer(w.FRAMEBUFFER,Ft);const be=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Tf(w,be,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Wt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Et),w.deleteBuffer(Wt),w.deleteSync(be),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,z=null,Z=0){b.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1]);const K=Math.pow(2,-Z),k=Math.floor(b.image.width*K),Et=Math.floor(b.image.height*K),bt=z!==null?z.x:0,qt=z!==null?z.y:0;A.setTexture2D(b,0),w.copyTexSubImage2D(w.TEXTURE_2D,Z,0,0,bt,qt,k,Et),pt.unbindTexture()},this.copyTextureToTexture=function(b,z,Z=null,K=null,k=0){b.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,b=arguments[1],z=arguments[2],k=arguments[3]||0,Z=null);let Et,bt,qt,Gt,ee,le,Wt,Ft,be;const Pe=b.isCompressedTexture?b.mipmaps[k]:b.image;Z!==null?(Et=Z.max.x-Z.min.x,bt=Z.max.y-Z.min.y,qt=Z.isBox3?Z.max.z-Z.min.z:1,Gt=Z.min.x,ee=Z.min.y,le=Z.isBox3?Z.min.z:0):(Et=Pe.width,bt=Pe.height,qt=Pe.depth||1,Gt=0,ee=0,le=0),K!==null?(Wt=K.x,Ft=K.y,be=K.z):(Wt=0,Ft=0,be=0);const je=yt.convert(z.format),Se=yt.convert(z.type);let Vt;z.isData3DTexture?(A.setTexture3D(z,0),Vt=w.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(A.setTexture2DArray(z,0),Vt=w.TEXTURE_2D_ARRAY):(A.setTexture2D(z,0),Vt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,z.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,z.unpackAlignment);const rn=w.getParameter(w.UNPACK_ROW_LENGTH),xe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),hn=w.getParameter(w.UNPACK_SKIP_PIXELS),yn=w.getParameter(w.UNPACK_SKIP_ROWS),sn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Pe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Pe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Gt),w.pixelStorei(w.UNPACK_SKIP_ROWS,ee),w.pixelStorei(w.UNPACK_SKIP_IMAGES,le);const Pn=b.isDataArrayTexture||b.isData3DTexture,_e=z.isDataArrayTexture||z.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Xe=wt.get(b),Ci=wt.get(z),ln=wt.get(Xe.__renderTarget),Ln=wt.get(Ci.__renderTarget);pt.bindFramebuffer(w.READ_FRAMEBUFFER,ln.__webglFramebuffer),pt.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let zn=0;zn<qt;zn++)Pn&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,wt.get(b).__webglTexture,k,le+zn),b.isDepthTexture?(_e&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,wt.get(z).__webglTexture,k,be+zn),w.blitFramebuffer(Gt,ee,Et,bt,Wt,Ft,Et,bt,w.DEPTH_BUFFER_BIT,w.NEAREST)):_e?w.copyTexSubImage3D(Vt,k,Wt,Ft,be+zn,Gt,ee,Et,bt):w.copyTexSubImage2D(Vt,k,Wt,Ft,be+zn,Gt,ee,Et,bt);pt.bindFramebuffer(w.READ_FRAMEBUFFER,null),pt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else _e?b.isDataTexture||b.isData3DTexture?w.texSubImage3D(Vt,k,Wt,Ft,be,Et,bt,qt,je,Se,Pe.data):z.isCompressedArrayTexture?w.compressedTexSubImage3D(Vt,k,Wt,Ft,be,Et,bt,qt,je,Pe.data):w.texSubImage3D(Vt,k,Wt,Ft,be,Et,bt,qt,je,Se,Pe):b.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,k,Wt,Ft,Et,bt,je,Se,Pe.data):b.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,k,Wt,Ft,Pe.width,Pe.height,je,Pe.data):w.texSubImage2D(w.TEXTURE_2D,k,Wt,Ft,Et,bt,je,Se,Pe);w.pixelStorei(w.UNPACK_ROW_LENGTH,rn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,xe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,hn),w.pixelStorei(w.UNPACK_SKIP_ROWS,yn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,sn),k===0&&z.generateMipmaps&&w.generateMipmap(Vt),pt.unbindTexture()},this.copyTextureToTexture3D=function(b,z,Z=null,K=null,k=0){return b.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,b=arguments[2],z=arguments[3],k=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,z,Z,K,k)},this.initRenderTarget=function(b){wt.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),pt.unbindTexture()},this.resetState=function(){R=0,L=0,U=null,pt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}}class ja{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(t),this.density=e}clone(){return new ja(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nc extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ip{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new D;class ws{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ws(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Za extends si{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Qi;const Rr=new D,$i=new D,tr=new D,er=new vt,Cr=new vt,ic=new Me,Rs=new D,Pr=new D,Cs=new D,rc=new vt,Ka=new vt,sc=new vt;class ac extends Be{constructor(t=new Za){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new Ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ip(e,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new ws(n,3,0,!1)),Qi.setAttribute("uv",new ws(n,2,3,!1))}this.geometry=Qi,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),ic.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-tr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Ps(Rs.set(-.5,-.5,0),tr,a,$i,r,s),Ps(Pr.set(.5,-.5,0),tr,a,$i,r,s),Ps(Cs.set(.5,.5,0),tr,a,$i,r,s),rc.set(0,0),Ka.set(1,0),sc.set(1,1);let o=t.ray.intersectTriangle(Rs,Pr,Cs,!1,Rr);if(o===null&&(Ps(Pr.set(-.5,.5,0),tr,a,$i,r,s),Ka.set(0,1),o=t.ray.intersectTriangle(Rs,Cs,Pr,!1,Rr),o===null))return;const l=t.ray.origin.distanceTo(Rr);l<t.near||l>t.far||e.push({distance:l,point:Rr.clone(),uv:Sn.getInterpolation(Rr,Rs,Pr,Cs,rc,Ka,sc,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ps(i,t,e,n,r,s){er.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Cr.x=s*er.x-r*er.y,Cr.y=r*er.x+s*er.y):Cr.copy(er),i.copy(t),i.x+=Cr.x,i.y+=Cr.y,i.applyMatrix4(ic)}class rp extends We{constructor(t=null,e=1,n=1,r,s,a,o,l,f=1003,u=1003,h,c){super(null,a,o,l,f,u,r,s,h,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oc extends cn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const nr=new Me,lc=new Me,Ls=[],cc=new mi,sp=new Me,Lr=new $t,Ir=new zi;class ap extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new oc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,sp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,nr),cc.copy(t.boundingBox).applyMatrix4(nr),this.boundingBox.union(cc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,nr),Ir.copy(t.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),t.ray.intersectsSphere(Ir)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,nr),lc.multiplyMatrices(n,nr),Lr.matrixWorld=lc,Lr.raycast(t,Ls);for(let a=0,o=Ls.length;a<o;a++){const l=Ls[a];l.instanceId=s,l.object=this,e.push(l)}Ls.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new oc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new rp(new Float32Array(r*this.count),r,this.count,1028,1015));const s=this.morphTexture.source.data.data;let a=0;for(let f=0;f<n.length;f++)a+=n[f];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class fc extends si{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uc=new Me,Ja=new Ea,Is=new zi,Ds=new D;class op extends Be{constructor(t=new Ye,e=new fc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(r),Is.radius+=s,t.ray.intersectsSphere(Is)===!1)return;uc.copy(r).invert(),Ja.copy(t.ray).applyMatrix4(uc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,f=n.index,h=n.attributes.position;if(f!==null){const c=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=c,v=d;g<v;g++){const m=f.getX(g);Ds.fromBufferAttribute(h,m),hc(Ds,m,l,r,t,e,this)}}else{const c=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=c,v=d;g<v;g++)Ds.fromBufferAttribute(h,g),hc(Ds,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hc(i,t,e,n,r,s,a){const o=Ja.distanceSqToPoint(i);if(o<e){const l=new D;Ja.closestPointToPoint(i,l),l.applyMatrix4(n);const f=r.ray.origin.distanceTo(l);if(f<r.near||f>r.far)return;s.push({distance:f,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class lp extends We{constructor(t,e,n,r,s,a,o,l,f){super(t,e,n,r,s,a,o,l,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,f;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),f=n[r]-a,f<0)o=r+1;else if(f>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],c=n[r+1]-u,d=(a-u)/c;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new vt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,r=[],s=[],a=[],o=new D,l=new Me;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let f=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),c=Math.abs(r[0].z);u<=f&&(f=u,n.set(1,0,0)),h<=f&&(f=h,n.set(0,1,0)),c<=f&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos($e(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos($e(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qa extends Fn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new vt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),f=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),c=l-this.aX,d=f-this.aY;l=c*u-d*h+this.aX,f=c*h+d*u+this.aY}return n.set(l,f)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class cp extends Qa{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function $a(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,f){r(a,o,f*(o-s),f*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,f,u,h){let c=(a-s)/f-(o-s)/(f+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;c*=u,d*=u,r(a,o,c,d)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Us=new D,to=new $a,eo=new $a,no=new $a;class fp extends Fn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let f,u;this.closed||o>0?f=r[(o-1)%s]:(Us.subVectors(r[0],r[1]).add(r[0]),f=Us);const h=r[o%s],c=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Us.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Us),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(f.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(c),d),m=Math.pow(c.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),to.initNonuniformCatmullRom(f.x,h.x,c.x,u.x,g,v,m),eo.initNonuniformCatmullRom(f.y,h.y,c.y,u.y,g,v,m),no.initNonuniformCatmullRom(f.z,h.z,c.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(to.initCatmullRom(f.x,h.x,c.x,u.x,this.tension),eo.initCatmullRom(f.y,h.y,c.y,u.y,this.tension),no.initCatmullRom(f.z,h.z,c.z,u.z,this.tension));return n.set(to.calc(l),eo.calc(l),no.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function dc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function up(i,t){const e=1-i;return e*e*t}function hp(i,t){return 2*(1-i)*i*t}function dp(i,t){return i*i*t}function Dr(i,t,e,n){return up(i,t)+hp(i,e)+dp(i,n)}function pp(i,t){const e=1-i;return e*e*e*t}function mp(i,t){const e=1-i;return 3*e*e*i*t}function gp(i,t){return 3*(1-i)*i*i*t}function xp(i,t){return i*i*i*t}function Ur(i,t,e,n,r){return pp(i,t)+mp(i,e)+gp(i,n)+xp(i,r)}class pc extends Fn{constructor(t=new vt,e=new vt,n=new vt,r=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new vt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ur(t,r.x,s.x,a.x,o.x),Ur(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _p extends Fn{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ur(t,r.x,s.x,a.x,o.x),Ur(t,r.y,s.y,a.y,o.y),Ur(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mc extends Fn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vp extends Fn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gc extends Fn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Dr(t,r.x,s.x,a.x),Dr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sp extends Fn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Dr(t,r.x,s.x,a.x),Dr(t,r.y,s.y,a.y),Dr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xc extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],f=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(dc(o,l.x,f.x,u.x,h.x),dc(o,l.y,f.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new vt().fromArray(r))}return this}}var io=Object.freeze({__proto__:null,ArcCurve:cp,CatmullRomCurve3:fp,CubicBezierCurve:pc,CubicBezierCurve3:_p,EllipseCurve:Qa,LineCurve:mc,LineCurve3:vp,QuadraticBezierCurve:gc,QuadraticBezierCurve3:Sp,SplineCurve:xc});class Mp extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new io[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),f=l===0?0:1-a/l;return o.getPointAt(f,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let f=0;f<l.length;f++){const u=l[f];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new io[r.type]().fromJSON(r))}return this}}class _c extends Mp{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mc(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new gc(this.currentPoint.clone(),new vt(t,e),new vt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new pc(this.currentPoint.clone(),new vt(t,e),new vt(n,r),new vt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,l){const f=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+f,e+u,n,r,s,a,o,l),this}absellipse(t,e,n,r,s,a,o,l){const f=new Qa(t,e,n,r,s,a,o,l);if(this.curves.length>0){const h=f.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(f);const u=f.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ro extends Ye{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],f=new D,u=new vt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,c=3;h<=e;h++,c+=3){const d=n+h/e*r;f.x=t*Math.cos(d),f.y=t*Math.sin(d),a.push(f.x,f.y,f.z),o.push(0,0,1),u.x=(a[c]/t+1)/2,u.y=(a[c+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(o,3)),this.setAttribute("uv",new Le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class On extends Ye{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const f=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],c=[],d=[];let g=0;const v=[],m=n/2;let p=0;S(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Le(h,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(d,2));function S(){const _=new D,O=new D;let R=0;const L=(e-t)/n;for(let U=0;U<=s;U++){const T=[],M=U/s,I=M*(e-t)+t;for(let W=0;W<=r;W++){const X=W/r,Y=X*l+o,at=Math.sin(Y),J=Math.cos(Y);O.x=I*at,O.y=-M*n+m,O.z=I*J,h.push(O.x,O.y,O.z),_.set(at,L,J).normalize(),c.push(_.x,_.y,_.z),d.push(X,1-M),T.push(g++)}v.push(T)}for(let U=0;U<r;U++)for(let T=0;T<s;T++){const M=v[T][U],I=v[T+1][U],W=v[T+1][U+1],X=v[T][U+1];(t>0||T!==0)&&(u.push(M,I,X),R+=3),(e>0||T!==s-1)&&(u.push(I,W,X),R+=3)}f.addGroup(p,R,0),p+=R}function y(_){const O=g,R=new vt,L=new D;let U=0;const T=_===!0?t:e,M=_===!0?1:-1;for(let W=1;W<=r;W++)h.push(0,m*M,0),c.push(0,M,0),d.push(.5,.5),g++;const I=g;for(let W=0;W<=r;W++){const Y=W/r*l+o,at=Math.cos(Y),J=Math.sin(Y);L.x=T*J,L.y=m*M,L.z=T*at,h.push(L.x,L.y,L.z),c.push(0,M,0),R.x=at*.5+.5,R.y=J*.5*M+.5,d.push(R.x,R.y),g++}for(let W=0;W<r;W++){const X=O+W,Y=I+W;_===!0?u.push(Y,Y+1,X):u.push(Y+1,Y,X),U+=3}f.addGroup(p,U,_===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class so extends On{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new so(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ao extends Ye{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),f(n),u(),this.setAttribute("position",new Le(s,3)),this.setAttribute("normal",new Le(s.slice(),3)),this.setAttribute("uv",new Le(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const y=new D,_=new D,O=new D;for(let R=0;R<e.length;R+=3)d(e[R+0],y),d(e[R+1],_),d(e[R+2],O),l(y,_,O,S)}function l(S,y,_,O){const R=O+1,L=[];for(let U=0;U<=R;U++){L[U]=[];const T=S.clone().lerp(_,U/R),M=y.clone().lerp(_,U/R),I=R-U;for(let W=0;W<=I;W++)W===0&&U===R?L[U][W]=T:L[U][W]=T.clone().lerp(M,W/I)}for(let U=0;U<R;U++)for(let T=0;T<2*(R-U)-1;T++){const M=Math.floor(T/2);T%2===0?(c(L[U][M+1]),c(L[U+1][M]),c(L[U][M])):(c(L[U][M+1]),c(L[U+1][M+1]),c(L[U+1][M]))}}function f(S){const y=new D;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(S),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function u(){const S=new D;for(let y=0;y<s.length;y+=3){S.x=s[y+0],S.y=s[y+1],S.z=s[y+2];const _=m(S)/2/Math.PI+.5,O=p(S)/Math.PI+.5;a.push(_,1-O)}g(),h()}function h(){for(let S=0;S<a.length;S+=6){const y=a[S+0],_=a[S+2],O=a[S+4],R=Math.max(y,_,O),L=Math.min(y,_,O);R>.9&&L<.1&&(y<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),O<.2&&(a[S+4]+=1))}}function c(S){s.push(S.x,S.y,S.z)}function d(S,y){const _=S*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){const S=new D,y=new D,_=new D,O=new D,R=new vt,L=new vt,U=new vt;for(let T=0,M=0;T<s.length;T+=9,M+=6){S.set(s[T+0],s[T+1],s[T+2]),y.set(s[T+3],s[T+4],s[T+5]),_.set(s[T+6],s[T+7],s[T+8]),R.set(a[M+0],a[M+1]),L.set(a[M+2],a[M+3]),U.set(a[M+4],a[M+5]),O.copy(S).add(y).add(_).divideScalar(3);const I=m(O);v(R,M+0,S,I),v(L,M+2,y,I),v(U,M+4,_,I)}}function v(S,y,_,O){O<0&&S.x===1&&(a[y]=S.x-1),_.x===0&&_.z===0&&(a[y]=O/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.vertices,t.indices,t.radius,t.details)}}class Nr extends _c{constructor(t){super(t),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new _c().fromJSON(r))}return this}}const yp={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=vc(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,f,u,h,c,d;if(n&&(s=wp(i,t,s,e)),i.length>80*e){o=f=i[0],l=u=i[1];for(let g=e;g<r;g+=e)h=i[g],c=i[g+1],h<o&&(o=h),c<l&&(l=c),h>f&&(f=h),c>u&&(u=c);d=Math.max(f-o,u-l),d=d!==0?32767/d:0}return Fr(s,a,e,o,l,d,0),a}};function vc(i,t,e,n,r){let s,a;if(r===Bp(i,t,e,n)>0)for(s=t;s<e;s+=n)a=yc(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=yc(s,i[s],i[s+1],a);return a&&Ns(a,a.next)&&(Br(a),a=a.next),a}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ns(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fr(i,t,e,n,r,s,a){if(!i)return;!a&&s&&Ip(i,n,r,s);let o=i,l,f;for(;i.prev!==i.next;){if(l=i.prev,f=i.next,s?bp(i,n,r,s):Ep(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(f.i/e|0),Br(i),i=f.next,o=f.next;continue}if(i=f,i===o){a?a===1?(i=Tp(Ti(i),t,e),Fr(i,t,e,n,r,s,2)):a===2&&Ap(i,t,e,n,r,s):Fr(Ti(i),t,e,n,r,s,1);break}}}function Ep(i){const t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,l=e.y,f=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<f?o:f:l<f?l:f,c=r>s?r>a?r:a:s>a?s:a,d=o>l?o>f?o:f:l>f?l:f;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=c&&g.y>=h&&g.y<=d&&ir(r,o,s,l,a,f,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bp(i,t,e,n){const r=i.prev,s=i,a=i.next;if(Ue(r,s,a)>=0)return!1;const o=r.x,l=s.x,f=a.x,u=r.y,h=s.y,c=a.y,d=o<l?o<f?o:f:l<f?l:f,g=u<h?u<c?u:c:h<c?h:c,v=o>l?o>f?o:f:l>f?l:f,m=u>h?u>c?u:c:h>c?h:c,p=oo(d,g,t,e,n),S=oo(v,m,t,e,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=S;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&ir(o,u,l,h,f,c,y.x,y.y)&&Ue(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==a&&ir(o,u,l,h,f,c,_.x,_.y)&&Ue(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&ir(o,u,l,h,f,c,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=S;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==a&&ir(o,u,l,h,f,c,_.x,_.y)&&Ue(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Tp(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!Ns(r,s)&&Sc(r,n,n.next,s)&&Or(r,s)&&Or(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Br(n),Br(n.next),n=i=s),n=n.next}while(n!==i);return Ti(n)}function Ap(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Np(a,o)){let l=Mc(a,o);a=Ti(a,a.next),l=Ti(l,l.next),Fr(a,t,e,n,r,s,0),Fr(l,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function wp(i,t,e,n){const r=[];let s,a,o,l,f;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:i.length,f=vc(i,o,l,n,!1),f===f.next&&(f.steiner=!0),r.push(Up(f));for(r.sort(Rp),s=0;s<r.length;s++)e=Cp(r[s],e);return e}function Rp(i,t){return i.x-t.x}function Cp(i,t){const e=Pp(i,t);if(!e)return t;const n=Mc(e,i);return Ti(n,n.next),Ti(e,e.next)}function Pp(i,t){let e=t,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const c=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(c<=s&&c>n&&(n=c,r=e.x<e.next.x?e:e.next,c===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,f=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&ir(a<f?s:n,a,l,f,a<f?n:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),Or(e,i)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&Lp(r,e)))&&(r=e,u=h)),e=e.next;while(e!==o);return r}function Lp(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function Ip(i,t,e,n){let r=i;do r.z===0&&(r.z=oo(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Dp(r)}function Dp(i){let t,e,n,r,s,a,o,l,f=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<f&&(o++,n=n.nextZ,!!n);t++);for(l=f;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,f*=2}while(a>1);return i}function oo(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Up(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ir(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function Np(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Fp(i,t)&&(Or(i,t)&&Or(t,i)&&Op(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||Ns(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ns(i,t){return i.x===t.x&&i.y===t.y}function Sc(i,t,e,n){const r=Os(Ue(i,t,e)),s=Os(Ue(i,t,n)),a=Os(Ue(e,n,i)),o=Os(Ue(e,n,t));return!!(r!==s&&a!==o||r===0&&Fs(i,e,t)||s===0&&Fs(i,n,t)||a===0&&Fs(e,i,n)||o===0&&Fs(e,t,n))}function Fs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Os(i){return i>0?1:i<0?-1:0}function Fp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Or(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function Op(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Mc(i,t){const e=new lo(i.i,i.x,i.y),n=new lo(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function yc(i,t,e,n){const r=new lo(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bp(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class li{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return li.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Ec(t),bc(n,t);let a=t.length;e.forEach(Ec);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,bc(n,e[l]);const o=yp.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Ec(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class co extends Ye{constructor(t=new Nr([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const f=t[o];a(f)}this.setAttribute("position",new Le(r,3)),this.setAttribute("uv",new Le(s,2)),this.computeVertexNormals();function a(o){const l=[],f=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let c=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:zp;let y,_=!1,O,R,L,U;p&&(y=p.getSpacedPoints(u),_=!0,c=!1,O=p.computeFrenetFrames(u,!1),R=new D,L=new D,U=new D),c||(m=0,d=0,g=0,v=0);const T=o.extractPoints(f);let M=T.shape;const I=T.holes;if(!li.isClockWise(M)){M=M.reverse();for(let ft=0,xt=I.length;ft<xt;ft++){const w=I[ft];li.isClockWise(w)&&(I[ft]=w.reverse())}}const X=li.triangulateShape(M,I),Y=M;for(let ft=0,xt=I.length;ft<xt;ft++){const w=I[ft];M=M.concat(w)}function at(ft,xt,w){return xt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ft.clone().addScaledVector(xt,w)}const J=M.length,N=X.length;function $(ft,xt,w){let ot,ct,Mt;const pt=ft.x-xt.x,Ct=ft.y-xt.y,wt=w.x-ft.x,A=w.y-ft.y,E=pt*pt+Ct*Ct,G=pt*A-Ct*wt;if(Math.abs(G)>Number.EPSILON){const et=Math.sqrt(E),ht=Math.sqrt(wt*wt+A*A),rt=xt.x-Ct/et,zt=xt.y+pt/et,Pt=w.x-A/ht,Nt=w.y+wt/ht,oe=((Pt-rt)*A-(Nt-zt)*wt)/(pt*A-Ct*wt);ot=rt+pt*oe-ft.x,ct=zt+Ct*oe-ft.y;const dt=ot*ot+ct*ct;if(dt<=2)return new vt(ot,ct);Mt=Math.sqrt(dt/2)}else{let et=!1;pt>Number.EPSILON?wt>Number.EPSILON&&(et=!0):pt<-Number.EPSILON?wt<-Number.EPSILON&&(et=!0):Math.sign(Ct)===Math.sign(A)&&(et=!0),et?(ot=-Ct,ct=pt,Mt=Math.sqrt(E)):(ot=pt,ct=Ct,Mt=Math.sqrt(E/2))}return new vt(ot/Mt,ct/Mt)}const At=[];for(let ft=0,xt=Y.length,w=xt-1,ot=ft+1;ft<xt;ft++,w++,ot++)w===xt&&(w=0),ot===xt&&(ot=0),At[ft]=$(Y[ft],Y[w],Y[ot]);const It=[];let Bt,te=At.concat();for(let ft=0,xt=I.length;ft<xt;ft++){const w=I[ft];Bt=[];for(let ot=0,ct=w.length,Mt=ct-1,pt=ot+1;ot<ct;ot++,Mt++,pt++)Mt===ct&&(Mt=0),pt===ct&&(pt=0),Bt[ot]=$(w[ot],w[Mt],w[pt]);It.push(Bt),te=te.concat(Bt)}for(let ft=0;ft<m;ft++){const xt=ft/m,w=d*Math.cos(xt*Math.PI/2),ot=g*Math.sin(xt*Math.PI/2)+v;for(let ct=0,Mt=Y.length;ct<Mt;ct++){const pt=at(Y[ct],At[ct],ot);St(pt.x,pt.y,-w)}for(let ct=0,Mt=I.length;ct<Mt;ct++){const pt=I[ct];Bt=It[ct];for(let Ct=0,wt=pt.length;Ct<wt;Ct++){const A=at(pt[Ct],Bt[Ct],ot);St(A.x,A.y,-w)}}}const pe=g+v;for(let ft=0;ft<J;ft++){const xt=c?at(M[ft],te[ft],pe):M[ft];_?(L.copy(O.normals[0]).multiplyScalar(xt.x),R.copy(O.binormals[0]).multiplyScalar(xt.y),U.copy(y[0]).add(L).add(R),St(U.x,U.y,U.z)):St(xt.x,xt.y,0)}for(let ft=1;ft<=u;ft++)for(let xt=0;xt<J;xt++){const w=c?at(M[xt],te[xt],pe):M[xt];_?(L.copy(O.normals[ft]).multiplyScalar(w.x),R.copy(O.binormals[ft]).multiplyScalar(w.y),U.copy(y[ft]).add(L).add(R),St(U.x,U.y,U.z)):St(w.x,w.y,h/u*ft)}for(let ft=m-1;ft>=0;ft--){const xt=ft/m,w=d*Math.cos(xt*Math.PI/2),ot=g*Math.sin(xt*Math.PI/2)+v;for(let ct=0,Mt=Y.length;ct<Mt;ct++){const pt=at(Y[ct],At[ct],ot);St(pt.x,pt.y,h+w)}for(let ct=0,Mt=I.length;ct<Mt;ct++){const pt=I[ct];Bt=It[ct];for(let Ct=0,wt=pt.length;Ct<wt;Ct++){const A=at(pt[Ct],Bt[Ct],ot);_?St(A.x,A.y+y[u-1].y,y[u-1].x+w):St(A.x,A.y,h+w)}}}it(),gt();function it(){const ft=r.length/3;if(c){let xt=0,w=J*xt;for(let ot=0;ot<N;ot++){const ct=X[ot];Xt(ct[2]+w,ct[1]+w,ct[0]+w)}xt=u+m*2,w=J*xt;for(let ot=0;ot<N;ot++){const ct=X[ot];Xt(ct[0]+w,ct[1]+w,ct[2]+w)}}else{for(let xt=0;xt<N;xt++){const w=X[xt];Xt(w[2],w[1],w[0])}for(let xt=0;xt<N;xt++){const w=X[xt];Xt(w[0]+J*u,w[1]+J*u,w[2]+J*u)}}n.addGroup(ft,r.length/3-ft,0)}function gt(){const ft=r.length/3;let xt=0;Ot(Y,xt),xt+=Y.length;for(let w=0,ot=I.length;w<ot;w++){const ct=I[w];Ot(ct,xt),xt+=ct.length}n.addGroup(ft,r.length/3-ft,1)}function Ot(ft,xt){let w=ft.length;for(;--w>=0;){const ot=w;let ct=w-1;ct<0&&(ct=ft.length-1);for(let Mt=0,pt=u+m*2;Mt<pt;Mt++){const Ct=J*Mt,wt=J*(Mt+1),A=xt+ot+Ct,E=xt+ct+Ct,G=xt+ct+wt,et=xt+ot+wt;Kt(A,E,G,et)}}}function St(ft,xt,w){l.push(ft),l.push(xt),l.push(w)}function Xt(ft,xt,w){jt(ft),jt(xt),jt(w);const ot=r.length/3,ct=S.generateTopUV(n,r,ot-3,ot-2,ot-1);Qt(ct[0]),Qt(ct[1]),Qt(ct[2])}function Kt(ft,xt,w,ot){jt(ft),jt(xt),jt(ot),jt(xt),jt(w),jt(ot);const ct=r.length/3,Mt=S.generateSideWallUV(n,r,ct-6,ct-3,ct-2,ct-1);Qt(Mt[0]),Qt(Mt[1]),Qt(Mt[3]),Qt(Mt[1]),Qt(Mt[2]),Qt(Mt[3])}function jt(ft){r.push(l[ft*3+0]),r.push(l[ft*3+1]),r.push(l[ft*3+2])}function Qt(ft){s.push(ft.x),s.push(ft.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return kp(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new io[r.type]().fromJSON(r)),new co(n,t.options)}}const zp={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],f=t[r*3],u=t[r*3+1];return[new vt(s,a),new vt(o,l),new vt(f,u)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],f=t[n*3],u=t[n*3+1],h=t[n*3+2],c=t[r*3],d=t[r*3+1],g=t[r*3+2],v=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(o-u)<Math.abs(a-f)?[new vt(a,1-l),new vt(f,1-h),new vt(c,1-g),new vt(v,1-p)]:[new vt(o,1-l),new vt(u,1-h),new vt(d,1-g),new vt(m,1-p)]}};function kp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class fo extends ao{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fo(t.radius,t.detail)}}class zr extends Ye{constructor(t=new Nr([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)f(t);else for(let u=0;u<t.length;u++)f(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(s,3)),this.setAttribute("uv",new Le(a,2));function f(u){const h=r.length/3,c=u.extractPoints(e);let d=c.shape;const g=c.holes;li.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];li.isClockWise(S)===!0&&(g[m]=S.reverse())}const v=li.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){const S=d[m];r.push(S.x,S.y,0),s.push(0,0,1),a.push(S.x,S.y)}for(let m=0,p=v.length;m<p;m++){const S=v[m],y=S[0]+h,_=S[1]+h,O=S[2]+h;n.push(y,_,O),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Vp(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=e[t.shapes[r]];n.push(a)}return new zr(n,t.curveSegments)}}function Vp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class Bs extends Ye{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let f=0;const u=[],h=new D,c=new D,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const S=[],y=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let O=0;O<=e;O++){const R=O/e;h.x=-t*Math.cos(r+R*s)*Math.sin(a+y*o),h.y=t*Math.cos(a+y*o),h.z=t*Math.sin(r+R*s)*Math.sin(a+y*o),g.push(h.x,h.y,h.z),c.copy(h).normalize(),v.push(c.x,c.y,c.z),m.push(R+_,1-y),S.push(f++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const y=u[p][S+1],_=u[p][S],O=u[p+1][S],R=u[p+1][S+1];(p!==0||a>0)&&d.push(y,_,R),(p!==n-1||l<Math.PI)&&d.push(_,O,R)}this.setIndex(d),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ci extends Ye{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],f=[],u=new D,h=new D,c=new D;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){const v=g/r*s,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),c.subVectors(h,u).normalize(),l.push(c.x,c.y,c.z),f.push(g/r),f.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){const v=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,S=(r+1)*d+g;a.push(v,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Fe extends si{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tc extends si{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ac={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Hp{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return f.push(u,h),this},this.removeHandler=function(u){const h=f.indexOf(u);return h!==-1&&f.splice(h,2),this},this.getHandler=function(u){for(let h=0,c=f.length;h<c;h+=2){const d=f[h],g=f[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Gp=new Hp;class uo{constructor(t){this.manager=t!==void 0?t:Gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}uo.DEFAULT_MATERIAL_NAME="__DEFAULT";class Wp extends uo{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Ac.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Sr("img");function l(){u(),Ac.add(t,this),e&&e(this),s.manager.itemEnd(t)}function f(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",f,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class qp extends uo{constructor(t){super(t)}load(t,e,n,r){const s=new We,a=new Wp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class ho extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wc extends ho{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const po=new Me,Rc=new D,Cc=new D;class Pc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rc),Cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cc),e.updateMatrixWorld(),po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lc=new Me,kr=new D,mo=new D;class Xp extends Pc{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),kr.setFromMatrixPosition(t.matrixWorld),n.position.copy(kr),mo.copy(n.position),mo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(mo),n.updateMatrixWorld(),r.makeTranslation(-kr.x,-kr.y,-kr.z),Lc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc)}}class Ic extends ho{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Xp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Yp extends Pc{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jp extends ho{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Yp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Dc=new Me;class Zp{constructor(t,e,n=0,r=1/0){this.ray=new Ea(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Dc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dc),this}intersectObject(t,e=!0,n=[]){return go(t,this,n,e),n.sort(Uc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)go(t[r],this,n,e);return n.sort(Uc),n}}function Uc(i,t){return i.distance-t.distance}function go(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)go(s[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ua);const Kp="data:image/jpeg;base64,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";function Ne(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ae(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}let xo=4;function Jp(i){xo=i}function Zt(i,t={}){const e=new lp(i);return e.colorSpace=t.linear?kn:Je,e.anisotropy=xo,t.repeat&&(e.wrapS=e.wrapT=t.mirror?1002:1e3,e.repeat.set(t.repeat[0],t.repeat[1])),e}function Qp(i,t={}){const e=new We,n=new Image;return n.onload=()=>{e.image=n,e.needsUpdate=!0},n.src=i,e.colorSpace=Je,e.anisotropy=xo,t.repeat&&(e.wrapS=e.wrapT=t.mirror?1002:1e3,e.repeat.set(t.repeat[0],t.repeat[1])),e}function un(i,t,e,n,r,s=1){const a=i.getImageData(0,0,t,e),o=a.data;for(let l=0;l<o.length;l+=4){const f=(r()-.5)*n;o[l]+=f,o[l+1]+=f,o[l+2]+=f}i.putImageData(a,0,0)}function Nc(i=1,t=[62,58,56],e=!1){const n=ae(512,512),r=n.getContext("2d"),s=Ne(i);r.fillStyle="#1b1a19",r.fillRect(0,0,512,512);const a=64,o=32;for(let l=0;l<16;l++){const f=l%2*(a/2);for(let u=-1;u<9;u++){const h=(s()-.5)*26,c=e?1.5:1;r.fillStyle=`rgb(${(t[0]+h)*c},${(t[1]+h)*c},${(t[2]+h*.9)*c})`,r.fillRect(u*a+f+2,l*o+2,a-4,o-4),r.fillStyle="rgba(255,255,255,.07)",r.fillRect(u*a+f+2,l*o+2,a-4,3),r.fillStyle="rgba(0,0,0,.22)",r.fillRect(u*a+f+2,l*o+o-6,a-4,4)}}return un(r,512,512,22,s),n}function $p(i=2){const t=ae(512,512),e=t.getContext("2d"),n=Ne(i);e.fillStyle="#2a241f",e.fillRect(0,0,512,512);const r=8,s=512/r;for(let a=0;a<r;a++)for(let o=0;o<r;o++){const l=(n()-.5)*30;e.fillStyle=`rgb(${96+l},${84+l},${72+l})`,e.beginPath(),e.roundRect(o*s+3,a*s+3,s-6,s-6,8),e.fill(),e.fillStyle="rgba(255,255,255,.07)",e.fillRect(o*s+8,a*s+6,s-18,3)}return un(e,512,512,18,n),t}function tm(i=3){const t=ae(512,512),e=t.getContext("2d"),n=Ne(i);e.fillStyle="#1a1c22",e.fillRect(0,0,512,512),un(e,512,512,30,n);for(let r=0;r<60;r++)e.strokeStyle="rgba(0,0,0,.25)",e.lineWidth=1,e.beginPath(),e.moveTo(n()*512,n()*512),e.lineTo(n()*512,n()*512),e.stroke();return t}function Fc(i=4,t=70){const e=ae(256,256),n=e.getContext("2d"),r=Ne(i);n.fillStyle=`rgb(${t},${t},${t+4})`,n.fillRect(0,0,256,256),un(n,256,256,26,r);for(let s=0;s<12;s++)n.fillStyle=`rgba(0,0,0,${.05+r()*.08})`,n.beginPath(),n.ellipse(r()*256,r()*256,10+r()*40,8+r()*24,r()*3,0,7),n.fill();return e}function em(){const i=ae(256,256),t=i.getContext("2d"),e=Ne(9);for(let n=0;n<32;n++){const r=t.createLinearGradient(n*8,0,n*8+8,0);r.addColorStop(0,"#050506"),r.addColorStop(.5,"#1c1c20"),r.addColorStop(1,"#050506"),t.fillStyle=r,t.fillRect(n*8,0,8,256)}return un(t,256,256,8,e),i}function nm(i=5){const t=ae(256,256),e=t.getContext("2d"),n=Ne(i);e.fillStyle="#0d1f45",e.fillRect(0,0,256,256),un(e,256,256,48,n);for(let r=0;r<1800;r++)e.fillStyle=n()<.5?"rgba(40,80,160,.25)":"rgba(0,0,10,.3)",e.fillRect(n()*256,n()*256,2,2);return t}function im(){const i=ae(256,256),t=i.getContext("2d"),e=Ne(12);for(let n=0;n<8;n++){const r=(e()-.5)*18;t.fillStyle=`rgb(${72+r},${58+r},${56+r})`,t.fillRect(0,n*32,256,31),t.fillStyle="rgba(0,0,0,.35)",t.fillRect(0,n*32+31,256,1)}return un(t,256,256,14,e),i}function rm(){const i=ae(256,256),t=i.getContext("2d");t.fillStyle="#14141a",t.fillRect(0,0,256,256);const e=8,n=256/e;for(let r=0;r<e;r++)for(let s=0;s<e;s++){const a=t.createLinearGradient(s*n,r*n,s*n+n,r*n+n);a.addColorStop(0,"#3a3a44"),a.addColorStop(.5,"#15151a"),a.addColorStop(1,"#050507"),t.fillStyle=a,t.beginPath(),t.moveTo(s*n,r*n+n),t.lineTo(s*n+n/2,r*n),t.lineTo(s*n+n,r*n+n),t.fill(),t.fillStyle="rgba(255,255,255,.07)",t.beginPath(),t.moveTo(s*n+n/2,r*n),t.lineTo(s*n+n,r*n+n),t.lineTo(s*n+n/2,r*n+n),t.fill()}return i}function sm(i=21){const t=ae(512,512),e=t.getContext("2d"),n=Ne(i);e.fillStyle="#d8d3c6",e.fillRect(0,0,512,512);const r=["СВОДКА ДНЯ","ВЕЧЕРНИЙ ВЫПУСК","КРОССВОРД","СЛУШАЛИ — ПОСТАНОВИЛИ","ГОРОДСКИЕ НОВОСТИ","ПОГОДА НА НЕДЕЛЮ","КУЛЬТУРА","СПОРТ","ОБЪЯВЛЕНИЯ"];return[[0,0],[256,0],[0,256],[256,256]].forEach(([a,o],l)=>{e.save(),e.beginPath(),e.rect(a,o,256,256),e.clip(),e.translate(a+128,o+128),e.rotate((n()-.5)*.12),e.translate(-128,-128),e.fillStyle=`rgb(${205+n()*30},${200+n()*28},${186+n()*28})`,e.fillRect(-20,-20,296,296),e.fillStyle="#1b1b1b",e.font="900 24px Georgia, serif",e.fillText(r[(l*2+(n()*5|0))%r.length],8,28),e.fillRect(8,36,240,2);for(let f=0;f<3;f++)for(let u=0;u<20;u++){const h=60+n()*18;e.fillStyle=`rgba(30,30,30,${.45+n()*.25})`,e.fillRect(10+f*80,130+u*6,h,2)}if(e.fillStyle="#6a6760",e.fillRect(10+n()*100,46,90,70),e.fillStyle="#35332f",e.fillRect(110+n()*40,50,70,60),e.fillStyle="#111",e.font="800 14px Georgia, serif",e.fillText("ГРАНД. ВЫХОДНЫЕ.",10,124),n()<.6)for(let f=0;f<7;f++)for(let u=0;u<7;u++)e.strokeStyle="#222",e.lineWidth=.7,e.strokeRect(180+f*10,150+u*10,10,10),n()<.25&&(e.fillStyle="#111",e.fillRect(180+f*10,150+u*10,10,10));e.restore()}),un(e,512,512,18,n),t}function am(){const i=ae(128,128),t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),i}function om(){const i=ae(256,256),t=i.getContext("2d");t.fillStyle="#e9edf5",t.fillRect(0,0,256,256),t.strokeStyle="rgba(70,75,90,.75)",t.lineWidth=3;const e=14,n=256/e;for(let s=0;s<=e;s++)t.beginPath(),t.moveTo(s*n,0),t.lineTo(s*n,256),t.stroke(),t.beginPath(),t.moveTo(0,s*n),t.lineTo(256,s*n),t.stroke();const r=t.createRadialGradient(128,128,30,128,128,180);return r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(60,70,100,.5)"),t.fillStyle=r,t.fillRect(0,0,256,256),i}function lm(){const i=ae(128,128),t=i.getContext("2d");t.fillStyle="#7a2a22",t.fillRect(0,0,128,128),t.fillStyle="rgba(230,200,150,.55)";for(let e=0;e<128;e+=16)t.fillRect(e,0,5,128),t.fillRect(0,e,128,5);t.fillStyle="rgba(0,0,0,.25)";for(let e=8;e<128;e+=32)t.fillRect(e,0,8,128);return i}function cm(){const i=ae(256,128),t=i.getContext("2d");t.fillStyle="#c9561d",t.fillRect(0,0,256,128),t.strokeStyle="#1b0f08",t.lineWidth=4;for(let e=0;e<=4;e++)t.beginPath(),t.moveTo(e*64,0),t.lineTo(e*64,128),t.stroke();return t.beginPath(),t.moveTo(0,64),t.lineTo(256,64),t.stroke(),t.beginPath(),t.moveTo(0,32),t.quadraticCurveTo(128,8,256,32),t.stroke(),t.beginPath(),t.moveTo(0,96),t.quadraticCurveTo(128,120,256,96),t.stroke(),i}function fm(){const i=ae(128,128),t=i.getContext("2d"),e=Ne(3);t.fillStyle="#6f8f5c",t.fillRect(0,0,128,128);for(let n=0;n<8;n++)for(let r=0;r<4;r++)t.fillStyle=`rgb(${90+e()*40},${130+e()*40},${90+e()*30})`,t.fillRect(r*32+2,n*16+2,28,12),t.fillStyle="rgba(0,0,0,.25)",t.fillRect(r*32+8,n*16+5,16,6);return i}function um(){const i=ae(512,256),t=i.getContext("2d"),e=Ne(8);t.fillStyle="#10131a",t.fillRect(0,0,512,256),t.fillStyle="#1b2230",t.fillRect(0,0,512,20),t.fillStyle="#6a3fd0",t.fillRect(60,28,380,16);for(let n=0;n<6;n++){t.fillStyle="#181d28",t.fillRect(0,50+n*30,512,28);for(let r=0;r<4;r++){t.fillStyle=e()<.5?"#9be23a":"#4dc3ff";const s=30+e()*90;t.fillRect(70+e()*340,54+n*30,s,20)}}t.fillStyle="#242c3d",t.fillRect(0,236,512,20);for(let n=0;n<40;n++)t.fillStyle="#6cf",t.fillRect(10+n*12,240,6,10);return i}function hm(){const i=ae(256,256),t=i.getContext("2d"),e=Ne(15);t.fillStyle="#6a4a30",t.fillRect(0,0,256,256);for(let n=0;n<90;n++)t.strokeStyle=`rgba(${30+e()*40},${20+e()*20},10,${.15+e()*.25})`,t.lineWidth=1+e()*2,t.beginPath(),t.moveTo(0,e()*256),t.bezierCurveTo(80,e()*256,170,e()*256,256,e()*256),t.stroke();return i}function dm(){const i=ae(128,128),t=i.getContext("2d"),e=Ne(31);return t.fillStyle="#e4dcc4",t.fillRect(0,0,128,128),un(t,128,128,14,e),i}function pm(){const i=ae(512,512),t=i.getContext("2d"),e=Ne(44);t.fillStyle="#8c0f17",t.fillRect(0,0,512,512);const n=128,r=(s,a,o)=>{t.beginPath(),t.moveTo(s,a-o),t.lineTo(s+o,a),t.lineTo(s,a+o),t.lineTo(s-o,a),t.closePath()};t.strokeStyle="rgba(40,0,6,.55)",t.lineWidth=2;for(let s=-4;s<=8;s++)t.beginPath(),t.moveTo(s*n,0),t.lineTo(s*n+512,512),t.stroke(),t.beginPath(),t.moveTo(s*n+512,0),t.lineTo(s*n,512),t.stroke();for(let s=0;s<=4;s++)for(let a=0;a<=4;a++){const o=a*n+64-64,l=s*n+64-64;r(o,l,58),t.fillStyle="#b3141f",t.fill(),t.lineWidth=4,t.strokeStyle="#ecdcb2",t.stroke(),r(o,l,40),t.fillStyle="#5c060e",t.fill(),t.lineWidth=2,t.strokeStyle="#d9c28c",t.stroke();for(let h=0;h<8;h++){const c=h*Math.PI/4;t.beginPath(),t.ellipse(o+Math.cos(c)*17,l+Math.sin(c)*17,9,5,c,0,7),t.fillStyle=h%2?"#ecdcb2":"#d9a85a",t.fill()}t.beginPath(),t.arc(o,l,7,0,7),t.fillStyle="#8c0f17",t.fill(),t.lineWidth=2,t.strokeStyle="#ecdcb2",t.stroke();const f=o+64,u=l+64;r(f,u,20),t.fillStyle="#ecdcb2",t.fill(),r(f,u,11),t.fillStyle="#8c0f17",t.fill(),t.beginPath(),t.arc(f,u,4,0,7),t.fillStyle="#d9a85a",t.fill(),[[o+64,l],[o,l+64]].forEach(([h,c])=>{t.beginPath(),t.arc(h,c,5,0,7),t.fillStyle="#ecdcb2",t.fill()})}return un(t,512,512,10,e),i}const Oc='"Rubik Spray Paint", Impact, "Arial Black", sans-serif',Rn='Unbounded, Impact, "Arial Black", sans-serif',mm='"Marck Script", "Segoe Script", cursive';async function gm(){const t=[["Rubik Spray Paint","../assets/fonts/spray-latin.woff2","U+0000-00FF"],["Rubik Spray Paint","../assets/fonts/spray-cyrillic.woff2","U+0400-04FF"],["Marck Script","../assets/fonts/marck-script.ttf",null]].map(async([n,r,s])=>{try{const a=new FontFace(n,`url(${r})`,s?{unicodeRange:s}:{});await a.load(),document.fonts.add(a)}catch{}}),e=Promise.race([Promise.all(t),new Promise(n=>setTimeout(n,2500))]);try{await e}catch{}try{await Promise.race([document.fonts.load("700 40px Unbounded","REVOLVER Фрунзе"),new Promise(n=>setTimeout(n,1500))])}catch{}}function Oe(i,t=10){i.lineWidth=t,i.lineJoin="round",i.lineCap="round",i.strokeStyle="#0a0a0a",i.stroke()}function zs(i,t,e,n,r,s,a,o=.35,l=3){i.save(),i.clip(),i.strokeStyle=`rgba(0,0,0,${o})`,i.lineWidth=l,i.translate(t+n/2,e+r/2),i.rotate(a);const f=Math.max(n,r)*1.2;for(let u=-f;u<f;u+=s)i.beginPath(),i.moveTo(u,-f),i.lineTo(u,f),i.stroke();i.restore()}function Bc(i,t,e,n,r="#d32a22"){i.beginPath(),i.arc(t,e,n,0,7),i.fillStyle="#151515",i.fill(),Oe(i,8),i.strokeStyle="rgba(255,255,255,.18)",i.lineWidth=2;for(let s=.45;s<.97;s+=.07)i.beginPath(),i.arc(t,e,n*s,0,7),i.stroke();i.beginPath(),i.moveTo(t-n*.8,e-n*.2),i.quadraticCurveTo(t,e-n,t+n*.3,e-n*.85),i.strokeStyle="rgba(255,255,255,.25)",i.lineWidth=4,i.stroke(),i.beginPath(),i.arc(t,e,n*.28,0,7),i.fillStyle=r,i.fill(),i.lineWidth=4,i.strokeStyle="#0a0a0a",i.stroke(),i.beginPath(),i.arc(t,e,n*.05,0,7),i.fillStyle="#0a0a0a",i.fill()}function xm(i,t,e,n,r){i.beginPath(),i.roundRect(t,e,n,r,10);const s=i.createLinearGradient(t,e,t+n,e+r);s.addColorStop(0,"#d9d9d9"),s.addColorStop(1,"#6e6e6e"),i.fillStyle=s,i.fill(),Oe(i,8),[[.5,.3,.2],[.5,.7,.28]].forEach(([a,o,l])=>{const f=t+n*a,u=e+r*o,h=Math.min(n,r)*l;i.beginPath(),i.arc(f,u,h,0,7),i.fillStyle="#1d1d1d",i.fill(),Oe(i,6),i.beginPath(),i.arc(f,u,h*.45,0,7),i.fillStyle="#8c8c8c",i.fill(),Oe(i,4)})}function _m(i,t,e,n,r){i.beginPath(),i.roundRect(t,e,n,r,8),i.fillStyle="#efefef",i.fill(),Oe(i,7),i.beginPath(),i.roundRect(t+n*.1,e+r*.2,n*.8,r*.45,6),i.fillStyle="#2a2a2a",i.fill(),Oe(i,4),[.3,.7].forEach(s=>{i.beginPath(),i.arc(t+n*s,e+r*.42,r*.16,0,7),i.fillStyle="#fff",i.fill(),Oe(i,4)})}function ks(i,t,e,n,r=0){i.save(),i.translate(t,e),i.rotate(r),i.fillStyle="#111",i.strokeStyle="#111",i.lineWidth=n*.1,i.beginPath(),i.ellipse(0,n,n*.34,n*.25,-.4,0,7),i.fill(),i.beginPath(),i.ellipse(n*.9,n*.78,n*.34,n*.25,-.4,0,7),i.fill(),i.beginPath(),i.moveTo(n*.3,n*.95),i.lineTo(n*.3,0),i.lineTo(n*1.2,-n*.2),i.lineTo(n*1.2,n*.75),i.stroke(),i.lineWidth=n*.22,i.beginPath(),i.moveTo(n*.3,n*.05),i.lineTo(n*1.2,-n*.15),i.stroke(),i.restore()}function rr(i,t,e,n){i.beginPath(),i.arc(t,e,n,0,7);const r=i.createRadialGradient(t-n*.3,e-n*.3,n*.1,t,e,n);r.addColorStop(0,"#f4f4f4"),r.addColorStop(.6,"#a9a9a9"),r.addColorStop(1,"#505050"),i.fillStyle=r,i.fill(),Oe(i,7),i.strokeStyle="rgba(0,0,0,.35)",i.lineWidth=3,i.beginPath(),i.arc(t+n*.1,e+n*.1,n*.6,.5,2.6),i.stroke()}function vm(i,t){const e=i.width,n=i.height,r=i.getContext("2d"),s=Ne(77);r.clearRect(0,0,e,n);const a=r.createLinearGradient(0,0,0,n);a.addColorStop(0,"#16a047"),a.addColorStop(1,"#0b7d35"),r.fillStyle=a,r.fillRect(0,0,e,n);for(let v=0;v<700;v++)r.fillStyle=`rgba(${s()<.5?"120,255,160":"0,60,20"},${.03+s()*.05})`,r.beginPath(),r.arc(s()*e,s()*n,20+s()*90,0,7),r.fill();un(r,e,n,14,s),r.save();const o=1.18;r.translate(40,200),r.scale(o,o),rr(r,260,120,62),rr(r,330,80,78),rr(r,430,30,66),rr(r,160,170,50),rr(r,520,60,58),rr(r,590,120,46),Bc(r,380,120,82),xm(r,560,70,130,120),r.beginPath(),r.roundRect(60,245,430,86,30);let l=r.createLinearGradient(0,245,0,331);l.addColorStop(0,"#f4f4f4"),l.addColorStop(.45,"#bdbdbd"),l.addColorStop(1,"#2b2b2b"),r.fillStyle=l,r.fill(),Oe(r,12),zs(r,60,245,430,86,12,.7,.18,3),r.beginPath(),r.roundRect(70,222,410,24,10),r.fillStyle="#1b1b1b",r.fill(),Oe(r,8),r.beginPath(),r.moveTo(70,222),r.lineTo(96,190),r.lineTo(116,222),r.closePath(),r.fillStyle="#e8e8e8",r.fill(),Oe(r,8),[0,1,2].forEach(v=>{r.beginPath(),r.ellipse(60+v*3,288,26-v*3,44-v*4,0,0,7),r.fillStyle=v===0?"#050505":"#dcdcdc",r.fill(),Oe(r,7)}),r.beginPath(),r.roundRect(110,332,330,44,20),l=r.createLinearGradient(0,332,0,376),l.addColorStop(0,"#d8d8d8"),l.addColorStop(1,"#303030"),r.fillStyle=l,r.fill(),Oe(r,10),_m(r,190,255,150,62),r.beginPath(),r.moveTo(470,205),r.lineTo(690,205),r.bezierCurveTo(770,205,820,250,830,320),r.lineTo(815,430),r.lineTo(700,484),r.lineTo(565,470),r.lineTo(470,396),r.closePath(),l=r.createLinearGradient(470,205,830,484),l.addColorStop(0,"#fafafa"),l.addColorStop(.55,"#d4d4d4"),l.addColorStop(1,"#6c6c6c"),r.fillStyle=l,r.fill(),Oe(r,14),zs(r,470,205,360,280,14,-.6,.12,3),r.beginPath(),r.roundRect(440,180,210,240,52),l=r.createLinearGradient(440,180,650,420),l.addColorStop(0,"#ffffff"),l.addColorStop(.5,"#bdbdbd"),l.addColorStop(1,"#3e3e3e"),r.fillStyle=l,r.fill(),Oe(r,14),zs(r,440,180,210,240,12,.5,.2,3),[250,300,350].forEach((v,m)=>{r.beginPath(),r.ellipse(512,v,30,25,0,0,7),r.fillStyle="#d6d6d6",r.fill(),Oe(r,8),r.beginPath(),r.ellipse(512,v,17,14,0,0,7),r.fillStyle="#060606",r.fill()}),r.beginPath(),r.moveTo(770,210),r.lineTo(836,150),r.lineTo(880,190),r.lineTo(840,262),r.closePath(),r.fillStyle="#1e1e1e",r.fill(),Oe(r,12),r.strokeStyle="rgba(255,255,255,.4)",r.lineWidth=3;for(let v=0;v<4;v++)r.beginPath(),r.moveTo(800+v*12,200-v*10),r.lineTo(830+v*12,232-v*10),r.stroke();r.beginPath(),r.moveTo(780,424),r.lineTo(900,430),r.bezierCurveTo(960,520,950,640,880,720),r.lineTo(770,690),r.bezierCurveTo(780,600,760,520,720,480),r.closePath(),l=r.createLinearGradient(760,430,940,720),l.addColorStop(0,"#f2f2f2"),l.addColorStop(.5,"#a8a8a8"),l.addColorStop(1,"#222"),r.fillStyle=l,r.fill(),Oe(r,14),zs(r,760,430,190,290,10,.9,.3,3),r.save(),r.beginPath(),r.moveTo(790,450),r.lineTo(890,456),r.bezierCurveTo(930,530,925,620,868,690),r.lineTo(790,668),r.closePath(),r.clip(),r.strokeStyle="rgba(0,0,0,.5)",r.lineWidth=3;for(let v=-200;v<400;v+=22)r.beginPath(),r.moveTo(760+v,430),r.lineTo(960+v,730),r.stroke(),r.beginPath(),r.moveTo(960+v,430),r.lineTo(760+v,730),r.stroke();r.restore(),r.beginPath(),r.moveTo(588,468),r.bezierCurveTo(580,560,660,590,730,560),r.bezierCurveTo(760,540,765,500,756,476),r.lineWidth=22,r.strokeStyle="#0a0a0a",r.stroke(),r.lineWidth=11,r.strokeStyle="#e6e6e6",r.stroke(),r.beginPath(),r.moveTo(660,484),r.quadraticCurveTo(650,530,688,540),r.lineWidth=12,r.strokeStyle="#0a0a0a",r.stroke(),r.save(),r.translate(735,380),r.rotate(-.3),r.beginPath(),r.ellipse(0,0,54,32,0,0,7),r.fillStyle="#111",r.fill(),Oe(r,5),r.fillStyle="#fff",r.font=`900 30px ${Oc}`,r.textAlign="center",r.fillText("REV",0,11),r.restore(),ks(r,40,460,54,-.2),ks(r,110,570,40,.3),r.strokeStyle="#0a0a0a",r.lineWidth=8;for(let v=0;v<5;v++)r.beginPath(),r.ellipse(850+v%2*8,740+v*28,20,28,0,0,7),r.fillStyle=v%2?"#d5d5d5":"#8d8d8d",r.fill(),r.stroke();r.restore(),r.save();const f=250,u=905,h=128;r.beginPath(),r.arc(f,u,h,0,7),l=r.createRadialGradient(f-40,u-40,20,f,u,h),l.addColorStop(0,"#fff"),l.addColorStop(.7,"#b8b8b8"),l.addColorStop(1,"#3a3a3a"),r.fillStyle=l,r.fill(),Oe(r,12);for(let v=0;v<6;v++){const m=v*Math.PI/3-Math.PI/2;r.beginPath(),r.arc(f+Math.cos(m)*80,u+Math.sin(m)*80,30,0,7),r.fillStyle="#050505",r.fill(),r.lineWidth=8,r.strokeStyle="#e8e8e8",r.stroke(),r.lineWidth=5,r.strokeStyle="#0a0a0a",r.stroke(),r.beginPath(),r.arc(f+Math.cos(m)*80-6,u+Math.sin(m)*80-6,8,0,7),r.fillStyle="#c0902b",r.fill()}r.beginPath(),r.arc(f,u,28,0,7),r.fillStyle="#222",r.fill(),Oe(r,8),r.restore(),r.fillStyle="#0c0c0c";const c=1105;[90,150,210,120,260,180,90,140,60].forEach((v,m)=>{r.beginPath(),r.roundRect(c+m*24,760-v/2,12,v,6),r.fill()}),r.strokeStyle="#0a0a0a",r.lineWidth=8,r.save(),r.translate(1e3,300),r.rotate(.2),r.strokeRect(-60,-70,150,150),ks(r,-30,-30,56,0),r.restore(),r.save(),r.translate(1180,160),r.rotate(-.12),r.strokeRect(-60,-60,130,130),ks(r,-32,-26,48,0),r.restore(),Bc(r,1385,190,78,"#d32a22"),r.font=`900 120px ${Rn}`,r.fillStyle="#d32a22",r.textAlign="left",r.fillText("REC",1480,234),r.fillStyle="#0a0a0a",r.beginPath(),r.roundRect(1800,560,120,150,10),r.fill(),r.strokeStyle="rgba(0,0,0,.65)",r.lineWidth=5;for(let v=0;v<6;v++)r.beginPath(),r.moveTo(1760+v*12,220),r.bezierCurveTo(1740+v*20,420,1830+v*10,500,1780+v*14,720),r.stroke();r.save(),r.translate(1700,1040),r.rotate(-.06),r.font=`700 80px ${mm}`,r.fillStyle="rgba(255,255,255,.85)",r.fillText("revolver",0,0),r.restore();const g=r.createLinearGradient(0,n-130,0,n);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(0,0,0,.55)"),r.fillStyle=g,r.fillRect(0,n-130,e,130),r.fillStyle="#0c0f10",r.fillRect(0,n-30,e,30),r.clearRect(t.x,t.y,t.w,t.h)}function zc(i){const t=i.width,e=i.height,n=i.getContext("2d"),r=Ne(5);n.fillStyle="#f2f2ee",n.fillRect(0,0,t,e),un(n,t,e,8,r),n.fillStyle="#111",n.textAlign="center",n.font=`900 ${t*.075}px ${Oc}`,n.fillText("STROFF THA STREET",t/2,e*.12);const s=t/2,a=e*.57,o=t*.48;n.strokeStyle="#111",n.lineWidth=7,n.beginPath(),n.arc(s,a,o,0,7),n.stroke(),n.lineWidth=4,n.beginPath(),n.arc(s,a,o*.88,0,7),n.stroke(),n.lineWidth=6,n.beginPath(),n.moveTo(s-o*1.04,a),n.lineTo(s+o*1.04,a),n.moveTo(s,a-o*1.05),n.lineTo(s,a+o*1.05),n.stroke(),n.fillStyle="#0c0c10",n.beginPath(),n.ellipse(s,a-o*.62,t*.075,t*.095,0,0,7),n.fill(),n.beginPath(),n.ellipse(s,a-o*.7,t*.17,t*.03,0,0,7),n.fill(),n.beginPath(),n.roundRect(s-t*.1,a-o*.74,t*.2,t*.07,8),n.fill(),n.beginPath(),n.moveTo(s-t*.1,a-o*.5),n.bezierCurveTo(s-t*.33,a-o*.42,s-t*.33,a+o*.12,s-t*.28,a+o*.55),n.lineTo(s+t*.34,a+o*.55),n.bezierCurveTo(s+t*.34,a+o*.12,s+t*.32,a-o*.42,s+t*.1,a-o*.5),n.closePath(),n.fill(),n.fillStyle="#111",[t*.16,t*.84].forEach(l=>{n.beginPath(),n.arc(l,e*.26,t*.04,0,7),n.fill(),n.beginPath(),n.roundRect(l-t*.06,e*.285,t*.12,e*.07,6),n.fill()}),n.fillStyle="#fff",n.fillRect(t*.28,e*.22,t*.44,e*.07),n.strokeStyle="#c62a2a",n.lineWidth=3,n.strokeRect(t*.28,e*.22,t*.44,e*.07),n.fillStyle="#c62a2a",n.font=`700 ${t*.05}px Arial, sans-serif`,n.fillText("ЗАПИСЬ ИДЁТ",t/2,e*.265)}function kc(i){const t=i.width,e=i.height,n=i.getContext("2d");n.fillStyle="#05060a",n.fillRect(0,0,t,e),n.strokeStyle="rgba(255,255,255,.2)",n.lineWidth=6,n.strokeRect(10,10,t-20,e-20),n.textAlign="center",n.shadowColor="#ff2a1f",n.shadowBlur=40,n.fillStyle="#ff5a4d",n.font=`800 ${e*.46}px ${Rn}`,n.fillText("REVOLVER",t*.5,e*.52),n.shadowBlur=24,n.shadowColor="#35e06b",n.fillStyle="#9dffbd",n.font=`700 ${e*.15}px ${Rn}`,n.fillText("PODCAST  ·  SOUND",t*.5,e*.74),n.shadowColor="#fff",n.shadowBlur=14,n.fillStyle="#ffffff",n.font=`600 ${e*.115}px ${Rn}`,n.fillText("Фрунзе 49  ↓  вход",t*.5,e*.91),n.shadowBlur=0}function Sm(i){const t=i.width,e=i.height,n=i.getContext("2d");n.clearRect(0,0,t,e),n.shadowColor="#ff2a1f",n.shadowBlur=24,n.fillStyle="#ff6a5c",n.beginPath(),n.moveTo(t*.38,e*.08),n.lineTo(t*.62,e*.08),n.lineTo(t*.62,e*.5),n.lineTo(t*.85,e*.5),n.lineTo(t*.5,e*.94),n.lineTo(t*.15,e*.5),n.lineTo(t*.38,e*.5),n.closePath(),n.fill()}function _o(i,t,e,n){const r=i.width,s=i.height,a=i.getContext("2d");a.clearRect(0,0,r,s),a.textAlign="center",a.textBaseline="middle",a.shadowColor=e,a.shadowBlur=28,a.fillStyle=e,a.font=n,a.fillText(t,r/2,s/2),a.shadowBlur=8,a.fillStyle="#fff",a.fillText(t,r/2,s/2)}function Mm(i,t){const e=i.width,n=i.height,r=i.getContext("2d"),s=Ne(t*7+1),a=[{bg:"#e9dfc8",a:"#d02419",b:"#111"},{bg:"#d02419",a:"#f1e9d3",b:"#111"},{bg:"#111",a:"#37ff7a",b:"#f1e9d3"},{bg:"#f1e9d3",a:"#111",b:"#37ff7a"}][t%4];r.fillStyle=a.bg,r.fillRect(0,0,e,n),un(r,e,n,12,s);const o=[["JAM","SESSION"],["ЖИВОЙ","ЗВУК"],["REC","NIGHT"],["СТРИМ","СТУДИЯ"]][t%4];r.textAlign="left",r.fillStyle=a.a,r.font=`900 ${e*.3}px ${Rn}`,r.save(),r.translate(e*.06,n*.2),r.rotate(-.06),r.fillText(o[0],0,0),r.fillStyle=a.b,r.font=`900 ${e*.2}px ${Rn}`,r.fillText(o[1],0,e*.25),r.restore(),r.fillStyle=a.b,r.beginPath(),r.arc(e*.68,n*.62,e*.24,0,7),r.fill(),r.fillStyle=a.a,r.beginPath(),r.arc(e*.68,n*.62,e*.08,0,7),r.fill(),r.strokeStyle=a.a,r.lineWidth=3;for(let l=0;l<8;l++)r.beginPath(),r.arc(e*.68,n*.62,e*(.1+l*.017),0,7),r.stroke();r.fillStyle=a.b,r.fillRect(e*.06,n*.86,e*.88,4),r.fillStyle=a.b,r.font=`700 ${e*.06}px Arial, sans-serif`,r.fillText("Фрунзе 49 · 21:00",e*.06,n*.93)}function Vc(i,t,e,n){const r=i.width,s=i.height,a=i.getContext("2d"),o=a.createImageData(r,s),l=o.data,f=Ne(n);for(let d=0;d<s;d++){const g=Math.sin(d*.4+t*6)*.5+.5;for(let v=0;v<r;v++){const m=(d*r+v)*4,p=f()*95,S=d%2?.55:1,y=(p+25+g*25)*S;l[m]=y*.3,l[m+1]=y,l[m+2]=y*.35,l[m+3]=255}}a.putImageData(o,0,0),a.fillStyle="rgba(120,255,150,.35)";const u=(Math.sin(t*.6+e)*.5+.5)*(r-30);a.beginPath(),a.arc(u+15,s*.4,7,0,7),a.fill(),a.fillRect(u+4,s*.48,22,s*.4),a.fillStyle="rgba(120,255,150,.22)",a.fillRect(0,s*.82,r,3);const h=Math.floor(t+e*77),c=[Math.floor(h/3600)%24,Math.floor(h/60)%60,h%60].map(d=>String(d).padStart(2,"0")).join(":");a.font="bold 12px monospace",a.fillStyle="#b6ffc3",a.textAlign="left",a.fillText(c,6,s-7),a.textAlign="right",a.fillText("CAM "+e,r-6,14),Math.floor(t*1.6)%2===0&&(a.fillStyle="#ff3b30",a.beginPath(),a.arc(12,12,4,0,7),a.fill(),a.fillStyle="#ffc9c5",a.textAlign="left",a.fillText("REC",20,16))}function ym(i){const t=i.width,e=i.height,n=i.getContext("2d");n.fillStyle="#f4f1e6",n.fillRect(0,0,t,e),n.strokeStyle="#222",n.lineWidth=4,n.strokeRect(6,6,t-12,e-12),n.fillStyle="#111",n.textAlign="center",n.font="700 "+e*.2+"px Arial, sans-serif",n.fillText("Школа диджеев",t/2,e*.34),n.fillStyle="#c62a2a",n.font="800 "+e*.17+"px Arial, sans-serif",n.fillText("идёт ремонт",t/2,e*.62),n.fillStyle="#333",n.font="500 "+e*.1+"px Arial, sans-serif",n.fillText("Дверь закрыта. Вход в студию — рядом.",t/2,e*.86)}const sr=1.62,Vs=.3,Ie={x0:-2,x1:2.8,z0:5.6,z1:7.1,n:16,rise:3};let Hc=0;function Hs(i){Hc=i}const Gs=[-11,3,.3,5.6],vo=(i,t)=>i>=Gs[0]&&i<=Gs[1]&&t>=Gs[2]&&t<=Gs[3];function Vr(i,t){return Hc>1.5&&vo(i,t)?3.07:t>=5.5&&t<=7.2&&i>-2&&i<2.8?(Math.floor((i-Ie.x0)/((Ie.x1-Ie.x0)/Ie.n))+1)*(Ie.rise/Ie.n):t>=5.5&&t<7.4&&i>=-3.4&&i<=-2?0:t>=5.5?3:0}const Em=[[3.1,40,5.65,10.6,"U"],[-40,3.4,7.8,10.6,"U"],[-40,-3.5,5.65,7.8,"U"],[-2.9,3.4,5.9,6.8],[-2.95,-2.25,4.9,6.2],[-3.1,-.5,2.5,5.1,"D"],[-.6,.6,3.25,3.65,"D"],[.3,3.46,.3,4.84,"D"],[3.4,4.4,3.25,3.65,"D"],[4.31,6.61,.3,4.84,"D"],[-10.7,2.7,.7,5.1,"U"],[-6.6,-5.4,5,6,"U"]],bm=[[.21,3.41,0,.7],[.2,.85,.75,1.35],[1.43,2.33,1.14,2.84],[.85,1.35,1.74,2.24],[2.41,2.91,1.74,2.24],[3.04,3.66,1.32,1.78],[3.45,3.76,2.2,2.7],[3.1,3.7,.65,1.25],[.3,.8,1.55,2.05],[.2,.7,4.45,4.95],[3.22,3.72,4.45,4.95],[.93,2.83,4.18,5],[4.01,4.96,.24,2.54],[5.01,5.81,.64,1.64],[5.96,6.46,3.99,4.49],[4.06,5.96,4.3,5],[4.46,5.36,3.78,4.24],[5.1,6.7,0,.6],[6.6,6.9,2.15,2.6],[-9.05,-7.75,.8,3.6,"U"],[-9,-7.8,1.7,2.7,"U"],[-8.95,-7.85,3.8,4.8,"U"],[-5.65,-4.55,1.6,2.4,"U"],[-5.65,-4.55,3.8,4.6,"U"],[-2.25,-1.15,3.8,4.6,"U"],[-2.15,-1.05,1.9,2.7,"U"],[-10.85,-7.75,.35,2.45,"U"],[-.7,2.7,.3,1,"U"],[-10.6,-10.2,4.8,5.2,"U"],[2.2,2.6,4.8,5.2,"U"],[-3.8,-3.4,.6,1,"U"]].map(i=>i[4]?i:[i[0],i[1],i[2],i[3],"D"]),Tm={street:["Улица · Фрунзе 49","Вечер. Вход — вниз по лестнице. Чайхана — слева от спуска"],chai:["Чайхана","Первый этаж дома 49/3 · заходи и садись"],entry:["Тамбур","Направо дверь в студию, прямо — школа диджеев (ремонт)"],hall:["REVOLVER PODCAST · 19 м²","Зал для видеоподкастов · 3,76 × 5,14 м"],studio:["REVOLVER SOUND · 15 м²","Комната звукозаписи · 2,90 × 5,14 м"]};function Ws(i,t,e=0){return e>1.5&&vo(i,t)?"chai":t>5.3&&(i>-1.9||i<-3.5||t>7.4)?"street":i<-.1?"entry":i<3.9?"hall":"studio"}const Gc={1:{x:5.8,z:8.25,yaw:1.07,pitch:-.18,lv:3},4:{x:-5.6,z:4.7,yaw:3.14,pitch:-.05,lv:3},2:{x:1.3,z:4.1,yaw:-.3,pitch:-.05},3:{x:6.2,z:4.55,yaw:.35,pitch:-.1}},Wc={chai:[{p:[-8,5.6,2.6],c:16752704,i:16,d:9},{p:[-3,5.6,3.2],c:16756832,i:16,d:9},{p:[1.2,5.4,2.2],c:16754768,i:12,d:8},{p:[-9.6,4.4,1.4],c:16740416,i:6,d:5},{p:[-5.6,5,5],c:16767392,i:8,d:6},{p:[.8,4.2,1],c:16769976,i:7,d:5}],street:[{p:[-60,40,30],c:16752736,i:5200,d:200},{p:[3.4,8,12],c:16743104,i:160,d:38},{p:[-22,9,8],c:8055039,i:120,d:34},{p:[22,9,8],c:16761978,i:120,d:34},{p:[-.9,5.4,6.35],c:12571391,i:18,d:8},{p:[5.8,4.8,6.4],c:16734794,i:40,d:12}],entry:[{p:[-1.8,2.4,3.8],c:16769976,i:8,d:6},{p:[-2.6,2.3,6.4],c:12571391,i:8,d:6},{p:[-.9,1.8,3.4],c:13660415,i:4,d:5},{p:[-3.1,1.6,3],c:16722902,i:3.5,d:4},{p:[-1.2,2.4,6.4],c:12571391,i:4,d:5},{p:[.6,2,3.45],c:16777215,i:2,d:4}],hall:[{p:[1.9,2.55,2],c:14674175,i:9,d:9},{p:[1.9,1.4,.9],c:3826431,i:5,d:4.5},{p:[2.8,2.3,2.4],c:15138792,i:6,d:6},{p:[.8,1.6,2],c:16738874,i:4,d:4.5},{p:[1.5,2.4,4],c:16777215,i:4,d:6},{p:[.4,2,3.45],c:13660415,i:2,d:4}],studio:[{p:[4.91,1.7,1.44],c:5939455,i:16,d:6},{p:[5.81,2.5,2.94],c:13623551,i:18,d:7},{p:[6.21,1.4,.54],c:3823871,i:9,d:5},{p:[5.31,2.6,4.34],c:10139903,i:12,d:7},{p:[4.51,1.4,3.94],c:16751200,i:2.5,d:3},{p:[6.41,1,2.14],c:16722731,i:3,d:3}]},Am={chai:[2758672,.035,.6],street:[14708892,.0085,.8],entry:[1182234,.05,.55],hall:[329226,.05,.5],studio:[197642,.055,.45]};function wm(i={}){const t=!!i.low,e=new nc;e.background=new ce(461332),e.fog=new ja(725024,.022);const n={};["street","stairs","entry","hall","studio","chai"].forEach(x=>{n[x]=new se,n[x].name=x,e.add(n[x])});const r=(x,C={})=>new Fe(Object.assign({color:x,roughness:.85,metalness:0},C)),s={repeat:[1,1]},a={brick:Zt(Nc(1),s),brickLight:Zt(Nc(2,[92,84,76]),s),pave:Zt($p(),s),asphalt:Zt(tm(),s),concrete:Zt(Fc(4,74),s),concreteDark:Zt(Fc(7,34),s),curtain:Zt(em(),s),blueCarpet:Zt(nm(),s),woodFloor:Zt(im(),s),foam:Zt(rm(),s),news:Zt(sm(),s),softbox:Zt(om()),plaid:Zt(lm()),ball:Zt(cm()),dollar:Zt(fm()),daw:Zt(um()),grain:Zt(hm(),s),leather:Zt(dm(),s),glow:Zt(am()),carpetRed:Zt(pm(),s),tableWood:Qp(Kp)};a.tableWood.wrapS=a.tableWood.wrapT=1001;const o=ae(512,512);{const x=o.getContext("2d"),C=Ne(51);x.fillStyle="#1d1511",x.fillRect(0,0,512,512);for(let F=0;F<2;F++)for(let V=0;V<4;V++){const H=x.createLinearGradient(V*128,F*256,V*128+128,F*256+256);H.addColorStop(0,"#2a3338"),H.addColorStop(.5,"#4a2a22"),H.addColorStop(1,"#171a20"),x.fillStyle=H,x.fillRect(V*128+8,F*256+8,112,240),x.fillStyle=`rgba(255,160,100,${.1+C()*.12})`,x.fillRect(V*128+14,F*256+120,100,100),x.fillStyle="rgba(255,255,255,.07)",x.beginPath(),x.moveTo(V*128+8,F*256+8),x.lineTo(V*128+70,F*256+8),x.lineTo(V*128+8,F*256+120),x.fill()}}a.facade=Zt(o,s);const l={brick:r(16777215,{map:a.brick,roughness:.95}),brickLight:r(16777215,{map:a.brickLight,roughness:.95}),pave:r(12103848,{map:a.pave,roughness:.9}),asphalt:r(16777215,{map:a.asphalt,roughness:.55,metalness:.1}),concrete:r(16777215,{map:a.concrete}),concreteDark:r(16777215,{map:a.concreteDark,color:9079434}),curtain:r(16777215,{map:a.curtain,roughness:1}),blueCarpet:r(16777215,{map:a.blueCarpet,roughness:1}),woodFloor:r(16777215,{map:a.woodFloor,roughness:.6}),foam:r(16777215,{map:a.foam,roughness:1}),news:r(16777215,{map:a.news,roughness:.9}),carpetRed:r(16777215,{map:a.carpetRed,roughness:1,emissive:3344390,emissiveMap:a.carpetRed,emissiveIntensity:.12}),facade:r(16777215,{map:a.facade,roughness:.4,metalness:.2,emissive:16777215,emissiveMap:a.facade,emissiveIntensity:.12}),black:r(657932,{roughness:.9}),ceil:r(723725,{roughness:1}),steel:r(9080726,{roughness:.4,metalness:.85}),darkSteel:r(2764081,{roughness:.5,metalness:.8}),white:r(15131868,{roughness:.6}),cream:r(15327430,{map:a.leather,roughness:.45}),green:r(1744970,{roughness:.9}),plastic:r(1710877,{roughness:.5}),grayVel:r(5857643,{roughness:1}),wood:r(16777215,{map:a.grain,roughness:.7}),leaf:r(3115578,{roughness:.8,side:2,emissive:666128,emissiveIntensity:.6}),leaf2:r(1927980,{roughness:.8,side:2,emissive:532492,emissiveIntensity:.6}),ivy:r(3046706,{roughness:.9,emissive:666128,emissiveIntensity:.6}),gold:r(13214266,{roughness:.35,metalness:.9}),glass:new Fe({color:9087176,roughness:.05,metalness:.1,transparent:!0,opacity:.18,depthWrite:!1})},f=(x,C=1)=>new en({color:new ce(x).multiplyScalar(C),toneMapped:!1}),u=new jn(1,1,1);function h(x,C,F,V,H,nt,lt,Ut,ne=1){const ue=H-C,ie=nt-F,re=lt-V,Ze=new jn(ue,ie,re),En=Ze.attributes.uv,vr=Array.isArray(ne)?ne[0]:ne,Ke=Array.isArray(ne)?ne[1]:ne,is=[[re,ie],[re,ie],[ue,re],[ue,re],[ue,ie],[ue,ie]];for(let Dn=0;Dn<6;Dn++)for(let Yo=0;Yo<4;Yo++){const jo=Dn*4+Yo;En.setXY(jo,En.getX(jo)*is[Dn][0]/vr,En.getY(jo)*is[Dn][1]/Ke)}const Li=new $t(Ze,Ut);return Li.position.set((C+H)/2,(F+nt)/2,(V+lt)/2),x.add(Li),Li}const c=(x,C,F,V,H,nt,lt,Ut,ne=0,ue=0,ie=0)=>{const re=new $t(u,H);return re.scale.set(C,F,V),re.position.set(nt,lt,Ut),re.rotation.set(ue,ne,ie),x.add(re),re},d=(x,C,F,V,H,nt,lt,Ut,ne=16,ue=0,ie=0)=>{const re=new $t(new On(C,F,V,ne),H);return re.position.set(nt,lt,Ut),re.rotation.set(ue,0,ie),x.add(re),re},g=(x,C,F,V,H,nt,lt=1,Ut=1,ne=1)=>{const ue=new $t(new Bs(C,16,12),F);return ue.position.set(V,H,nt),ue.scale.set(lt,Ut,ne),x.add(ue),ue},v={"+x":[0,Math.PI/2,0],"-x":[0,-Math.PI/2,0],"+z":[0,0,0],"-z":[0,Math.PI,0],"+y":[-Math.PI/2,0,0],"-y":[Math.PI/2,0,0]};function m(x,C,F,V,H,nt,lt,Ut="+z",ne=null){const ue=new gn(C,F);if(ne){const re=ue.attributes.uv;for(let Ze=0;Ze<re.count;Ze++)re.setXY(Ze,re.getX(Ze)*ne[0],re.getY(Ze)*ne[1])}const ie=new $t(ue,V);return ie.position.set(H,nt,lt),ie.rotation.set(...v[Ut]),x.add(ie),ie}function p(x,C,F,V,H,nt,lt=.8){const Ut=new ac(new Za({map:a.glow,color:C,transparent:!0,opacity:lt,blending:2,depthWrite:!1,fog:!1}));return Ut.scale.set(F,F,1),Ut.position.set(V,H,nt),x.add(Ut),Ut}n.stairs.rotation.y=Math.PI/2,n.stairs.position.set(-16.4,0,10.85);const S=n.street,y=3,_=3.07,O=new qp,R=(x,C=1,F=1,V=!1)=>{const H=O.load("img/"+x);return H.colorSpace=Je,H.anisotropy=4,V&&(H.wrapS=H.wrapT=1e3,H.repeat.set(C,F)),H},L=(x,C=.5,F=16777215)=>new Fe({map:x,color:F,emissive:16777215,emissiveMap:x,emissiveIntensity:C,roughness:.9}),U=L(R("facade_deco.jpg",1,1,!0),.5),T=L(R("facade_panel.jpg",1,1,!0),.7),M=r(16777215,{map:a.facade,roughness:.4,metalness:.2,emissive:16777215,emissiveMap:a.facade,emissiveIntensity:.35}),I=r(15323078,{roughness:.9}),W=r(6969976,{roughness:.95}),X=r(3814470,{roughness:.9});h(S,-320,2.2,5.6,320,2.9,11.5,l.concreteDark,4),h(S,-45,2.4,5.6,-3.4,y,11.2,l.pave,2),h(S,-3.4,2.4,7.4,2.8,y,11.2,l.pave,2),h(S,2.8,2.4,5.6,45,y,11.2,l.pave,2),h(S,-320,2.4,5.6,-45,y,11.2,l.concrete,2),h(S,45,2.4,5.6,320,y,11.2,l.concrete,2),h(S,-320,2.4,11.2,320,3.05,11.5,l.concrete,1),h(S,-320,2.2,11.5,320,2.9,23.2,X,8),h(S,-320,2.4,23.2,320,3.05,23.5,l.concrete,1),h(S,-320,2.4,23.5,320,y,29.5,l.pave,2),h(S,-320,2,29.5,320,2.9,80,l.concreteDark,6);const Y=r(15261936,{roughness:.6});r(15909198,{roughness:.6});for(let x=-110;x<110;x+=6)c(S,2.6,.012,.14,Y,x,2.905,15.35),c(S,2.6,.012,.14,Y,x,2.905,19.2);c(S,640,.012,.12,Y,0,2.905,11.8),c(S,640,.012,.12,Y,0,2.905,22.9);function at(x,C,F){for(let V=x;V<=C;V+=1.6)c(S,.06,1.05,.06,r(7101096,{roughness:.5,metalness:.6}),V,y+.52,F);c(S,C-x,.05,.05,r(7101096,{metalness:.6}),(x+C)/2,y+1,F),c(S,C-x,.04,.04,r(7101096,{metalness:.6}),(x+C)/2,y+.55,F),c(S,C-x,.04,.04,r(7101096,{metalness:.6}),(x+C)/2,y+.2,F)}at(-110,110,11.65),at(-110,110,23.35),[-42,42].forEach(x=>{c(S,.3,1.2,5.6,r(14237738,{roughness:.6}),x,y+.6,8.4),c(S,.32,.25,5.6,r(15987696),x,y+.9,8.4)});const J=10.5;h(S,-110,y,-14,-11.2,7,5.6,[W,W,W,W,M,W],[8,8]),h(S,3.2,y,-14,110,7,5.6,[W,W,W,W,M,W],[8,8]),h(S,-110,7,-14,110,J,5.6,[W,W,l.concreteDark,W,U,W],[7,3.5]),h(S,-110,J,-14,110,J+.4,5.8,l.concreteDark,1),c(S,220,.12,.3,f(16723607,1.6),0,7,5.72),c(S,220,.1,.12,f(1700095,1.5),0,J-.1,5.7),[-34,-26,-19,7.5,13,20,27,34].forEach((x,C)=>{const F=[16740264,4052676,16761178,10185983][C%4];c(S,5.6,.12,1.5,r(F,{roughness:.7}),x,5.9,6.35,0,.18),c(S,5.6,.5,.04,r(F,{roughness:.7}),x,5.62,7.05)});const N=(x,C,F,V,H)=>{const nt=ae(512,128);_o(nt,x,C,`700 64px ${Rn}`),m(S,H,H/4,new en({map:Zt(nt),transparent:!0,toneMapped:!1,depthWrite:!1}),F,V,5.7,"+z"),p(S,C,H*.9,F,V,5.9,.16)};N("КОФЕ","#19f0ff",-26,6.4,2.6),N("OPEN","#ff2e97",20.5,6.3,2.4),N("24","#ffe36a",34,6.3,1.6),N("PIZZA","#ff9a3c",-33.5,6.4,2.6),N("AUTO","#7cff6b",13.6,6.3,2.2);const $=ae(1024,256);kc($);const At=Zt($),It=new en({map:At,toneMapped:!1});c(S,7.4,1.7,.1,l.black,7.8,5.95,5.66),m(S,7.2,1.5,It,7.8,5.95,5.72,"+z"),p(S,16724e3,11,7.8,5.95,6.3,.26);const Bt=ae(128,160);Sm(Bt);const te=new en({map:Zt(Bt),transparent:!0,toneMapped:!1,depthWrite:!1}),pe=m(S,.9,1.1,te,2.6,4.35,6.35,"+z"),it=m(S,.9,1.1,te,2.6,4.35,6.35,"-z");p(S,16726570,2.5,2.6,4.35,6.35,.35),c(S,.05,1.2,.05,l.darkSteel,2.6,5,6.2),g(S,.32,f(16774104,1.1),3.4,5,6),p(S,16773324,3.4,3.4,5,6,.6);const gt=(x,C,F,V,H,nt=0)=>{const lt=nt?U:T;h(S,x,y-.5,F,C,H,V,[lt,lt,l.concreteDark,l.concreteDark,lt,lt],[12,9])};gt(-14,14,-48,-16,78),gt(-80,-46,-80,-48,76),gt(-132,-98,-92,-60,72),gt(-62,-22,34,52,40),gt(-14,34,34,52,43),gt(42,96,34,52,17),gt(-110,-70,34,50,28),gt(100,150,34,56,36),gt(-30,30,70,96,60);const Ot=R("sky.jpg");Ot.wrapS=1e3;const St=new $t(new Bs(420,32,14,0,Math.PI*2,0,Math.PI/2),new en({map:Ot,side:1,fog:!1,depthWrite:!1}));St.position.y=2.5,St.rotation.y=.9,St.renderOrder=-2,S.add(St);const Xt=R("skyline.png",3,1,!0),Kt=new $t(new On(300,300,52,48,1,!0),new en({map:Xt,transparent:!0,side:1,fog:!1,depthWrite:!1}));Kt.position.y=26,Kt.renderOrder=-1,S.add(Kt);const jt=[R("palm1.png"),R("palm2.png")],Qt=(x,C,F,V)=>{const H=new ac(new Za({map:jt[V],transparent:!0,alphaTest:.35,fog:!0}));H.center.set(.5,0),H.scale.set(F/2,F,1),H.position.set(x,y,C),S.add(H)};for(let x=-40;x<=40;x+=6.5)Qt(x+(x%13?.6:0),10.4,6.4+Math.abs(x)%3,Math.abs(x|0)%2);for(let x=-100;x<=100;x+=7.5)Qt(x,26.5,8.4+Math.abs(x)%4,Math.abs(x|0)%2);[-36,-18,0,18,36].forEach((x,C)=>{c(S,.12,5.2,.12,l.darkSteel,x,y+2.6,10.9),c(S,1.4,.1,.1,l.darkSteel,x,y+5.15,10.55),c(S,.6,.12,.3,f(C%2?16743104:16761978,1.5),x,y+5.05,10),p(S,C%2?16743104:16756832,5,x,y+4.95,10,.45)}),[-24,25].forEach(x=>{c(S,1.6,.06,.5,r(8014376),x,y+.45,9.4),c(S,1.6,.4,.05,r(8014376),x,y+.75,9.18),c(S,.06,.45,.4,l.black,x-.7,y+.22,9.4),c(S,.06,.45,.4,l.black,x+.7,y+.22,9.4)}),d(S,.22,.2,.7,r(3836506,{roughness:.6}),11.2,y+.35,9,12);const ft=[],xt=[["car_diablo.png",4.5,21.3],["car_testarossa.png",4.6,17.5],["car_muscle.png",4.8,13.7],["car_muscle2.png",4.6,21.3],["car_jeep.png",4.4,17.5],["car_cabrio.png",5,13.7],["car_diablo.png",4.5,17.5],["car_muscle.png",4.8,21.3]],w={};xt.forEach(([x,C,F],V)=>{const H=w[x]||(w[x]=R(x)),nt={"car_jeep.png":234/512,"car_diablo.png":140/512}[x]||.26,lt=C*nt,Ut=new $t(new gn(C,lt),new en({map:H,transparent:!0,alphaTest:.4,side:2,color:15128816}));Ut.rotation.y=Math.PI,Ut.userData={dir:-1,speed:6+V*1.7%7,x:-80+V*22,z:F,h:lt},Ut.position.set(Ut.userData.x,2.9+lt/2,F);const ne=new $t(new gn(C*.92,.5),new en({color:0,transparent:!0,opacity:.4,depthWrite:!1}));ne.rotation.x=-Math.PI/2,ne.position.set(0,-lt/2+.02,0),ne.rotation.y=0,Ut.add(ne),S.add(Ut),ft.push(Ut)});const ot=n.chai,ct=-11,Mt=3,pt=.3,Ct=5.4,wt=6.7,A=r(13933144,{roughness:.9}),E=ae(256,128);{const x=E.getContext("2d");x.fillStyle="#c4703a",x.fillRect(0,0,256,128),x.fillStyle="#f3e6c8",x.fillRect(0,22,256,6),x.fillRect(0,100,256,6);for(let C=0;C<8;C++)x.fillStyle=C%2?"#1f5f8b":"#f3e6c8",x.beginPath(),x.moveTo(C*32+16,34),x.lineTo(C*32+30,64),x.lineTo(C*32+16,94),x.lineTo(C*32+2,64),x.closePath(),x.fill()}const G=Zt(E);G.repeat.set(5,1);const et=r(16777215,{map:G,roughness:.9});h(ot,ct,2.96,pt,Mt,_,Ct,l.woodFloor,1.2),h(ot,ct-.2,_,pt-.2,Mt+.2,wt+.2,pt,[A,A,A,A,A,A],1),h(ot,ct-.2,_,pt,ct,wt+.2,Ct+.2,A,1),h(ot,Mt,_,pt,Mt+.2,wt+.2,Ct+.2,A,1),h(ot,ct,wt,pt,Mt,wt+.2,Ct+.2,r(5913122,{roughness:.8}),1);for(let x=ct+.8;x<Mt;x+=1.4)c(ot,.14,.16,Ct-pt,r(4138518),x,wt-.08,(pt+Ct)/2);m(ot,Mt-ct,1.1,et,(ct+Mt)/2,4,pt+.01,"+z",[5,1]),m(ot,Ct-pt,1.1,et,ct+.01,4,(pt+Ct)/2,"+x",[1.5,1]);const ht=new Fe({color:16767392,transparent:!0,opacity:.28,roughness:.05,emissive:16751168,emissiveIntensity:.25,depthWrite:!1});h(ot,ct,y,Ct,-6.7,4.2,Ct+.2,I,1),h(ot,-5.3,y,Ct,Mt,4.2,Ct+.2,I,1),h(ot,ct,6.4,Ct,Mt,7,Ct+.2,I,1),h(ot,-6.7,5.4,Ct,-5.3,6.4,Ct+.2,I,1),c(ot,-6.7-ct,2.2,.03,ht,(ct-6.7)/2,5.3,Ct+.1),c(ot,Mt+5.3,2.2,.03,ht,(Mt-5.3)/2,5.3,Ct+.1);for(let x=ct+1.2;x<Mt;x+=1.6)(x<-7||x>-5)&&c(ot,.06,2.2,.05,r(6961692),x,5.3,Ct+.12);c(ot,.12,2.4,.12,r(6961692),-6.7,4.4,Ct+.1),c(ot,.12,2.4,.12,r(6961692),-5.3,4.4,Ct+.1);for(let x=0;x<7;x++)c(ot,.62,.1,1.6,r(x%2?15984328:12861482,{roughness:.8}),-9.2+x*.62+2.2,6.55,Ct+.85,0,.16);const rt=ae(512,128);_o(rt,"ЧАЙХАНА","#ffb347",`700 66px ${Rn}`),m(ot,3.4,.85,new en({map:Zt(rt),transparent:!0,toneMapped:!1,depthWrite:!1}),-6,7.55,Ct+.3,"+z"),p(ot,16752704,5,-6,7.55,Ct+.7,.22);const zt=ae(384,256);{const x=zt.getContext("2d");x.fillStyle="#26211c",x.fillRect(0,0,384,256),x.strokeStyle="#8a6a3a",x.lineWidth=10,x.strokeRect(5,5,374,246),x.fillStyle="#f3ead2",x.textAlign="center",x.font=`700 54px ${Rn}`,x.fillText("МАНТЫ",192,100),x.font=`600 34px ${Rn}`,x.fillText("ПЛОВ · ЧАЙ",192,168),x.fillStyle="#e8a43a",x.fillRect(80,190,224,4)}m(ot,.8,.53,r(16777215,{map:Zt(zt),roughness:.9}),-4.55,4.9,Ct-.02,"-z"),[[-9.4,1.4,-7.4,3,11545162],[-9.4,3.6,-7.4,5,2056075],[-6.2,1.2,-4,2.9,2056075],[-6.2,3.6,-4,4.8,11545162],[-2.8,3.4,-.6,5,11545162],[-2.6,1.6,-.6,3,3111498]].forEach(([x,C,F,V,H])=>{c(ot,F-x,.012,V-C,r(H,{roughness:1}),(x+F)/2,_+.006,(C+V)/2),c(ot,F-x-.3,.014,V-C-.3,r(15984328,{roughness:1}),(x+F)/2,_+.008,(C+V)/2),c(ot,F-x-.5,.016,V-C-.5,r(H,{roughness:1}),(x+F)/2,_+.01,(C+V)/2)});const Nt=[11545162,2056075,15246394,3111498,9058976],oe=[[-8.4,2.2],[-8.4,4.3],[-5.1,2],[-5.1,4.2],[-1.7,4.2],[-1.6,2.3]];oe.forEach(([x,C],F)=>{c(ot,1.1,.07,.8,r(6961692,{roughness:.6}),x,_+.38,C),[[-.45,-.3],[.45,-.3],[-.45,.3],[.45,.3]].forEach(([V,H])=>c(ot,.07,.36,.07,r(4860436),x+V,_+.18,C+H)),d(ot,.2,.2,.025,r(15987178,{roughness:.3}),x,_+.42,C,18),d(ot,.07,.07,.1,r(2056075),x+.3,_+.46,C+.15,10),[[-.95,0],[.95,0],[0,-.7],[0,.7]].forEach(([V,H],nt)=>c(ot,.56,.16,.56,r(Nt[(F+nt)%5],{roughness:.9}),x+V,_+.1,C+H,.2*nt))}),c(ot,3,.5,2,r(8014376,{roughness:.7}),-9.3,_+.25,1.4+0),c(ot,3.1,.06,2.1,r(4860436),-9.3,_+.52,1.4),c(ot,1.5,.3,.9,r(6961692),-9.3,_+.7,1.4),c(ot,2.7,.14,1.8,r(11545162,{roughness:1}),-9.3,_+.6,1.4),c(ot,3.4,1,.7,r(8014376,{roughness:.7}),1,_+.5,pt+.55),c(ot,3.5,.06,.8,r(15320202),1,_+1.03,pt+.55),[-.2,.9].forEach((x,C)=>{for(let F=0;F<3;F++)d(ot,.3,.3,.16,r(F%2?15253616:14264410,{roughness:.8}),.4+x+C*.9,_+1.12+F*.17,pt+.55,16);d(ot,.32,.32,.04,r(9067050),.4+x+C*.9,_+1.66,pt+.55,16)}),d(ot,.18,.2,.5,l.gold,2.2,_+1.3,pt+.55,14),g(ot,.2,l.gold,2.2,_+1.62,pt+.55,1,.7,1),[0,1,2].map(x=>p(ot,16777215,.8,.4+x*.7,_+2,pt+.55,.3)),c(ot,6,.05,.3,r(6961692),-2.8,_+2,pt+.2),c(ot,4.5,.05,.3,r(6961692),.6,_+2.35,pt+.2);for(let x=0;x<9;x++){const C=-5.4+x*.65;c(ot,.22,.24,.22,r(x%2?2056075:15987178,{roughness:.3}),C,_+2.15,pt+.2),g(ot,.07,r(15253616,{roughness:.4,metalness:.7}),C,_+2.33,pt+.2)}oe.forEach(([x,C],F)=>{d(ot,.05,.04,.14,new Fe({color:13626111,transparent:!0,opacity:.4}),x-.3,_+.5,C-.1,10),[16732058,16765498,16053492].forEach((V,H)=>g(ot,.035,r(V),x-.3+(H-1)*.04,_+.62+H*.01,C-.1,1,.8,1))}),[[-10.4,5],[2.4,5],[-3.6,.8]].forEach(([x,C])=>{d(ot,.2,.15,.4,r(11561530),x,_+.2,C,12);for(let F=0;F<6;F++){const V=F*1.05;g(ot,.2,l.leaf,x+Math.cos(V)*.15,_+.8+F%3*.2,C+Math.sin(V)*.15,.5,1.6,.5)}}),[[-9.5,2.2],[-7,4],[-4.5,2.2],[-2,4],[0,2.4],[-6.2,.9],[1.8,4.6],[-10.2,4.6]].forEach(([x,C])=>{c(ot,.012,.012,.012,l.black,x,wt-.1,C),d(ot,.012,.012,.8,l.black,x,wt-.4,C,6),d(ot,.16,.12,.3,f(16752704,1.3),x,wt-.95,C,10),p(ot,16752704,2,x,wt-.95,C,.38)});for(let x=0;x<14;x++)c(S,.1,.1,.1,f(x%2?16757575:16740264,1.6),-9.4+x*.5,6.1+Math.sin(x*.9)*.08,7);h(n.stairs,5.25,0,13.2,5.45,3,13.35,l.brick,2),h(n.stairs,5.25,2.1,13.35,5.45,3,14.25,l.brick,2),h(n.stairs,5.25,0,14.25,5.45,3,19.2,l.brick,2),h(n.stairs,3.45,0,13.2,3.75,4,19.2,[l.brick,l.brick,l.pave,l.brick,l.brick,l.brick],2);const dt=n.stairs,Dt=[l.concrete,l.concrete,r(16777215,{map:a.concreteDark,roughness:.6,metalness:.2}),l.concrete,l.concrete,l.concrete],Yt=(Ie.z1-Ie.z0)/Ie.n,q=Ie.rise/Ie.n;for(let x=0;x<Ie.n;x++)h(dt,Ie.x0,0,Ie.z0+x*Yt,Ie.x1,(x+1)*q,Ie.z0+(x+1)*Yt,Dt,1),c(dt,1.5,.012,.05,r(8945776,{roughness:.4,metalness:.6}),4.5,(x+1)*q+.006,Ie.z0+(x+1)*Yt-.06);h(dt,3.75,-.2,13.2,5.25,0,14.4,l.concreteDark,1),h(dt,3.45,0,13,5.45,3.5,13.2,l.brick,2),h(dt,3.45,3,13,5.6,3.5,15.2,l.concreteDark,1),d(dt,.16,.16,.1,r(14540253),4.5,2.95,14.2,12),d(dt,.12,.12,.02,f(14411519,1.4),4.5,2.89,14.2,12),p(dt,13163775,1.4,4.5,2.7,14.2,.45);{const x=Math.hypot(Ie.z1-Ie.z0,Ie.rise),C=Math.atan2(Ie.rise,Ie.z1-Ie.z0);c(dt,.05,.05,x,l.steel,3.9,.95+Ie.rise/2,(Ie.z0+Ie.z1)/2,0,-C);for(let F=0;F<5;F++){const V=Ie.z0+.4+F*1.15,H=Vr(3.9,V);c(dt,.04,.95,.04,l.steel,3.88,H+.47,V)}}const tt=ae(256,512);{const x=tt.getContext("2d"),C=Ne(9);x.fillStyle="#4b2d20",x.fillRect(0,0,256,512),un(x,256,512,22,C),x.strokeStyle="rgba(0,0,0,.4)",x.lineWidth=3,x.strokeRect(14,14,228,484),x.fillStyle="rgba(255,200,150,.1)",x.fillRect(14,14,228,40);for(let F=0;F<24;F++)x.fillStyle="rgba(0,0,0,.4)",x.beginPath(),x.arc(24+(F%2?208:0),30+Math.floor(F/2)*40,3,0,7),x.fill()}const ut=r(16777215,{map:Zt(tt),roughness:.55,metalness:.5}),yt=[];function mt(x,{axis:C,hx:F,hz:V,w:H,h:nt=2.1,t:lt=.07,open:Ut,mats:ne,cx:ue,cz:ie,knob:re=!0,knobSide:Ze=1}){const En=new se;En.position.set(F,0,V),x.add(En);{const Ke=new $t(u,ne);Ke.userData.noPaint=!0,Ke.scale.set(lt,nt,H),Ke.position.set(0,nt/2,-H/2),En.add(Ke),re&&(g(En,.035,l.steel,lt/2+.04,1,-H+.1),g(En,.035,l.steel,-lt/2-.04,1,-H+.1))}const vr={pivot:En,cur:0,target:0,open:Ut,cx:ue,cz:ie,grp:x};return yt.push(vr),vr}mt(dt,{axis:"x",hx:5.35,hz:14.25,w:.9,h:2.1,t:.08,open:-Math.PI/2*.92,mats:[ut,ut,l.darkSteel,l.darkSteel,l.darkSteel,l.darkSteel],cx:5.35,cz:13.8}),c(dt,.03,.03,.3,l.steel,5.3,1.05,13.5);const P=n.entry,st=2.96,j=l.news,Q=r(15724018,{roughness:.5}),_t=l.concreteDark;h(P,-3.6,-.1,2,-.2,0,5.6,l.woodFloor,1.2),h(P,-3.6,st,2,-.2,st+.1,5.6,l.ceil,1),h(P,-3.6,0,2,-3.4,st,5.6,[j,_t,_t,_t,_t,_t],1),h(P,-3.6,0,2,-.2,st,2.2,[_t,_t,_t,_t,j,_t],1),h(P,-3.6,0,5.4,-3.2,st,5.6,[_t,_t,_t,_t,_t,_t],1),m(P,.35,2.8,j,-3.225,1.4,5.392,"-z",[.35,2.8]),m(P,1.95,2.8,j,-1.175,1.4,5.392,"-z",[1.95,2.8]),m(P,.9,.7,j,-2.6,2.45,5.392,"-z",[.9,.7]);const Tt=-2.3;c(P,1.1,2.2,.06,Q,Tt,1.1,2.23),c(P,.9,2.1,.07,r(2503226,{roughness:.7}),Tt,1.05,2.275),g(P,.035,l.steel,Tt+.32,1,2.33);const kt=ae(512,256);ym(kt),m(P,.5,.25,new Fe({map:Zt(kt),roughness:.8,emissive:16777215,emissiveMap:Zt(kt),emissiveIntensity:.25}),Tt,1.55,2.315,"+z");const Ce=r(15254042,{roughness:.6});c(P,1.15,.05,.01,Ce,Tt,1.1,2.322,0,0,.7),c(P,1.15,.05,.01,Ce,Tt,1.1,2.324,0,0,-.7),d(P,.14,.11,.3,r(14277076,{roughness:.6}),-1.3,.15,2.5,14),c(P,.5,.01,.8,r(13620952,{roughness:.3}),-1,.012,2.9,0,.3);const Ge=ae(512,128);_o(Ge,"REVOLVER PODCAST →","#ff4b3a",`700 44px ${Rn}`),m(P,1.4,.35,new en({map:Zt(Ge),transparent:!0,toneMapped:!1,depthWrite:!1}),-.23,2.45,3.45,"-x"),p(P,16730938,1.6,-.3,2.45,3.45,.3),c(P,.06,.55,.42,r(8028294,{roughness:.5,metalness:.6}),-3.37,1.5,3.6),c(P,.02,.2,.3,r(14725152),-3.34,1.6,3.6),[[0,-3.39,4.5,"+x"],[1,-3.39,2.8,"+x"],[2,-1.5,5.37,"-z"]].forEach(([x,C,F,V])=>{const H=ae(256,384);Mm(H,x);const nt=F;m(P,.5,.75,r(16777215,{map:Zt(H),roughness:.8}),C,1.4,nt,V)}),d(P,.12,.12,.05,r(16771520),-1.8,2.76,3.8,12),g(P,.09,f(16769976,1.4),-1.8,2.66,3.8),p(P,16767392,1.4,-1.8,2.6,3.8,.45),[-3.38,-.24].forEach(x=>c(P,.04,.04,3.2,f(13773823,1.5),x,2.65,3.8)),p(P,13642751,3.5,-1.8,2.4,3.8,.18);const Rt=n.hall,me=3.76,ye=5.14;h(Rt,0,-.1,0,me,0,ye,l.blueCarpet,1),h(Rt,0,st,0,me,st+.1,ye,l.ceil,1),h(Rt,-.2,0,-.2,me+.25,st+.1,0,[l.concreteDark,l.concreteDark,l.concreteDark,l.concreteDark,l.concreteDark,r(987155)],2);const fr=3,wi=3.9,Cn=[l.concreteDark,j,l.concreteDark,l.concreteDark,l.concreteDark,l.concreteDark];h(Rt,-.2,0,0,0,st+.1,fr,Cn,1),h(Rt,-.2,0,wi,0,st+.1,ye,Cn,1),h(Rt,-.2,2.1,fr,0,st+.1,wi,Cn,1),m(Rt,3,st,l.carpetRed,.012,st/2,1.5,"+x",[3.33,3.11]),m(Rt,ye-3.9,st,l.carpetRed,.012,st/2,(3.9+ye)/2,"+x",[ye-3.9+.12,3.11]),m(Rt,.9,.7,l.carpetRed,.012,2.45,3.45,"+x",[1,.78]),mt(Rt,{axis:"x",hx:-.1,hz:wi,w:.9,h:2.1,t:.05,open:-Math.PI/2*.95,mats:Q,cx:-.1,cz:3.45}),c(Rt,.1,2.1,.06,Q,-.1,1.05,fr-.03),c(Rt,.1,2.1,.06,Q,-.1,1.05,wi+.03),c(Rt,.1,.06,1,Q,-.1,2.13,3.45),h(Rt,-.2,0,ye,me+.25,st+.1,ye+.2,l.concreteDark,2),m(Rt,me,st,l.curtain,me/2,st/2,ye-.03,"-z",[me,1]);const Kn=3,di=3.9;h(Rt,me,0,0,me+.25,st+.1,Kn,l.black,1),h(Rt,me,0,di,me+.25,st+.1,ye,l.black,1),h(Rt,me,2.1,Kn,me+.25,st+.1,di,l.black,1);const $r=ae(2048,1180),ur={x:Kn/ye*2048,y:1180-2.1/st*1180,w:(di-Kn)/ye*2048,h:2.1/st*1180},hr=Zt($r),Ri=()=>{vm($r,ur),hr.needsUpdate=!0};Ri();const sa=r(16777215,{map:hr,roughness:.9,alphaTest:.5,emissive:16777215,emissiveMap:hr,emissiveIntensity:.18});m(Rt,ye,st,sa,me-.012,st/2,ye/2,"-x");const dr=ae(384,896);zc(dr);const aa=Zt(dr),Oo=r(16777215,{map:aa,roughness:.6}),Bo=()=>{zc(dr),aa.needsUpdate=!0};mt(Rt,{axis:"x",hx:me+.07,hz:di,w:.9,h:2.1,t:.05,open:-Math.PI/2*.95,mats:[Q,Oo,Q,Q,Q,Q],cx:me+.07,cz:3.45}),c(Rt,.3,2.12,.06,r(1018426),me+.12,1.06,Kn-.03),c(Rt,.3,2.12,.06,r(1018426),me+.12,1.06,di+.03),c(Rt,.3,.06,1,r(1018426),me+.12,2.13,3.45);const b=new so(.13,.5,14);[[3.4,4.45],[3.58,4.1]].forEach(([x,C],F)=>{const V=new $t(b,r(16738842,{roughness:.6}));V.position.set(x,.25,C),Rt.add(V),d(Rt,.115,.125,.07,r(15987696),x,.26,C,14),d(Rt,.09,.1,.07,r(15987696),x,.37,C,14),c(Rt,.34,.03,.34,r(546),x,.015,C)});const z=x=>{const C=new Nr;return C.moveTo(x[0][0],x[0][1]),C.splineThru(x.slice(1).concat([x[0]]).map(F=>new vt(F[0],F[1]))),C},Z=[[-.07,.47],[-.115,.44],[-.135,.38],[-.12,.31],[-.105,.26],[-.14,.2],[-.165,.1],[-.16,.01],[-.1,-.045],[0,-.055],[.1,-.045],[.16,.01],[.165,.1],[.145,.2],[.125,.27],[.1,.31],[.095,.36],[.075,.44],[.04,.47]],K=[[-.05,.47],[-.085,.5],[-.12,.47],[-.115,.4],[-.1,.33],[-.105,.27],[-.14,.22],[-.165,.12],[-.16,.02],[-.1,-.045],[0,-.055],[.1,-.045],[.16,.02],[.165,.12],[.14,.2],[.1,.26],[.115,.34],[.13,.42],[.115,.48],[.07,.49],[.04,.47]];function k(x,C,F){const V=ae(128,256),H=V.getContext("2d"),nt=Ne(F),lt=H.createLinearGradient(0,0,128,256);lt.addColorStop(0,x),lt.addColorStop(1,C),H.fillStyle=lt,H.fillRect(0,0,128,256);for(let ne=0;ne<46;ne++){H.strokeStyle=`rgba(${nt()<.5?"200,255,230":"10,60,50"},${.06+nt()*.14})`,H.lineWidth=2+nt()*5,H.beginPath();const ue=nt()*256;H.moveTo(0,ue),H.bezierCurveTo(40,ue+(nt()-.5)*60,90,ue+(nt()-.5)*60,128,ue+(nt()-.5)*50),H.stroke()}const Ut=Zt(V);return Ut.wrapS=Ut.wrapT=1001,Ut.repeat.set(1/.36,1/.56),Ut.offset.set(.5,.1),Ut}const Et=(x,C,F,V)=>{const H=new co(z(x),{depth:V,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:1,curveSegments:t?6:10}),nt=new $t(H,[C,F]);return nt.position.z=-V/2,nt},bt=r(13620184,{roughness:.25,metalness:.95}),qt=r(14266954,{roughness:.3,metalness:.9});function Gt(x,C,F,V,H){c(x,.046,.55,.026,r(C,{roughness:.5}),0,.47+.275,-.002),c(x,.042,.52,.006,r(F,{roughness:.55}),0,.47+.27,.014);for(const lt of[.1,.16,.21,.255,.295,.33,.36,.385])c(x,.043,.0016,.008,bt,0,.47+lt*1.3-.02,.016);[.15,.27,.36,.45].forEach(lt=>g(x,.005,r(15722960),0,.47+lt,.019));const nt=.47+.55+.08;c(x,H?.062:.06,.17,.02,r(V,{roughness:.4}),0,nt,-.002);for(let lt=0;lt<6;lt++){const Ut=H?1:lt<3?-1:1,ne=H?lt:lt%3;d(x,.007,.007,.02,bt,Ut*.036,nt-.06+ne*(H?.026:.045),0,8,0,Math.PI/2)}c(x,.046,.008,.014,r(15722960),0,.47+.55+.002,.012)}function ee(x,C,F,V,H=-.14){const nt=new se;nt.position.set(C,.06,F),nt.rotation.y=V,x.add(nt);const lt=new se;lt.rotation.x=H,nt.add(lt);const Ut=new Fe({map:k("#0e8f7a","#05402f",71),roughness:.22,metalness:.15});lt.add(Et(Z,Ut,r(657932,{roughness:.3}),.05)),Gt(lt,6961692,2758156,1380365,!1);const ne=r(15327170,{roughness:.5});[.4,.22].forEach(ie=>{c(lt,.082,.04,.016,ne,0,ie,.03);for(let re=0;re<6;re++)g(lt,.004,bt,-.032+re*.0128,ie-.009,.039),g(lt,.004,bt,-.032+re*.0128,ie+.009,.039)}),c(lt,.1,.012,.012,bt,0,.115,.032),c(lt,.1,.014,.014,bt,0,.05,.032);const ue=r(15243802,{roughness:.3});return[[.075,.03],[.1,.085],[.07,.15],[.11,.2]].forEach(([ie,re])=>{d(lt,.014,.012,.022,ue,ie,re,.04,12,Math.PI/2)}),c(lt,.03,.01,.01,qt,-.095,.3,.03),nt}function le(x,C,F,V,H=-.14){const nt=new se;nt.position.set(C,.06,F),nt.rotation.y=V,x.add(nt);const lt=new se;lt.rotation.x=H,nt.add(lt);const Ut=r(1685933,{roughness:.2,metalness:.2});lt.add(Et(K,Ut,Ut,.045));const ne=z(K.map(re=>[re[0]*.8,(re[1]-.2)*.78+.2])),ue=new $t(new zr(ne),r(15986918,{roughness:.4}));ue.position.z=.0275,lt.add(ue),Gt(lt,14267242,13081170,14267242,!0);const ie=r(16118504,{roughness:.4});return[.4,.3,.2].forEach(re=>{c(lt,.085,.022,.014,ie,0,re,.036);for(let Ze=0;Ze<6;Ze++)g(lt,.0035,bt,-.032+Ze*.0128,re,.044)}),c(lt,.11,.07,.014,bt,0,.1,.034),c(lt,.1,.012,.016,bt,0,.14,.04),[[.04,.17],[.075,.115],[.095,.065]].forEach(([re,Ze])=>d(lt,.012,.011,.02,ie,re+.01,Ze-.02,.04,10,Math.PI/2)),d(lt,.012,.012,.012,bt,-.06,.02,.03,10,Math.PI/2),nt}function Wt(x,C,F,V){const H=new se;H.position.set(C,0,F),H.rotation.y=V,x.add(H);const nt=l.black;for(let lt=0;lt<3;lt++){const Ut=lt*2.094+.5;c(H,.02,.02,.3,nt,Math.cos(Ut)*.1,.012,Math.sin(Ut)*.1,-Ut+Math.PI/2)}return d(H,.012,.012,.5,nt,0,.26,0,8),c(H,.22,.02,.02,nt,0,.5,0),c(H,.02,.18,.02,nt,0,.58,-.07),H}Wt(Rt,3.5,2.45,-Math.PI/2),ee(Rt,3.52,2.45,-Math.PI/2,-.1);const Ft=new se;Ft.position.x=-1.69,Rt.add(Ft);const be=r(6712435,{roughness:.35,metalness:.9});[[1.9,.12],[5.1,.12],[1.9,.62],[5.1,.62]].forEach(([x,C])=>c(Ft,.05,2.15,.05,be,x,1.075,C));const Pe=[.15,.78,1.38,1.98];Pe.forEach(x=>c(Ft,3.2,.04,.5,be,3.5,x,.37)),h(Ft,1.9,.05,.05,5.1,2.2,.1,r(659512,{roughness:1,emissive:662640,emissiveIntensity:.3}),1);const je=[];Pe.forEach((x,C)=>{if(C>0)for(let F=0;F<8;F++){const V=f(16711680,1.7);je.push({m:V,k:F+C*2}),c(Ft,.4,.025,.025,V,2.1+F*.4,x-.04,.6)}}),p(Ft,10124031,3.2,3.5,1.1,.7,.16);const Se=new fo(.06,0);for(let x=0;x<(t?26:60);x++){const C=[1.9,5.1,3.5][x%3],F=new $t(Se,l.ivy);F.position.set(C+(Math.random()-.5)*.12,.4+Math.random()*1.9,.14+Math.random()*.1),F.scale.set(1.2,.8+Math.random(),.5),Ft.add(F)}const Vt=[ae(128,96),ae(128,96)],rn=Vt.map(x=>Zt(x));rn.forEach(x=>{x.generateMipmaps=!1,x.minFilter=1006});function xe(x,C,F,V,H,nt,lt=0){const Ut=new se;Ut.position.set(C,F,V),Ut.rotation.y=lt,x.add(Ut);const ne=r(3158839,{roughness:.55});c(Ut,H,H*.84,H*.78,ne,0,H*.42,0),c(Ut,H*.7,H*.6,H*.4,ne,0,H*.42,-H*.5),c(Ut,H*.86,H*.68,.02,r(1382170,{roughness:.3}),-.02*H,H*.45,H*.39+.012);const ue=new $t(new gn(H*.72,H*.56),new Fe({color:0,emissive:16777215,emissiveMap:nt,emissiveIntensity:1.35,roughness:.2}));return ue.position.set(-.02*H,H*.45,H*.39+.025),ue.userData.crt=!0,Ut.add(ue),p(Ut,7405456,H*1.6,-.02*H,H*.45,H*.5,.18),Ut}xe(Rt,.5,0,1.05,.56,rn[0],.5),xe(Rt,.5,.48,1.05,.5,rn[1],.4),xe(Ft,4.55,1.4,.42,.34,rn[0]),c(Rt,.6,.02,.6,r(546),.5,.01,1.05,.5),c(Ft,.5,.1,.38,r(13223092,{roughness:.5}),3.4,.85,.37),d(Ft,.15,.15,.015,r(1052688),3.34,.915,.37,24),c(Ft,.45,.012,.02,r(546),3.4,.92,.2),c(Ft,.3,.2,.28,r(14144196),2.7,.9,.37),c(Ft,.18,.04,.2,r(7311196),2.7,1.02,.37);const hn=[6954526,1981034,3824170,8018458,4860506,1365];for(let x=0;x<9;x++)c(Ft,.05,.22+x%3*.03,.18,r(hn[x%hn.length],{roughness:.8}),4.2+x*.055,.92,.38);const yn=new se;yn.position.set(4.9,1.38,.38),Ft.add(yn),g(yn,.15,r(15330546,{roughness:.45}),0,.12,0,1.2,1.2,.8),g(yn,.07,r(15330546,{roughness:.45}),0,.33,0,1,1.1,1),c(yn,.5,.01,.01,f(3832575,1.8),0,-.05,.2),d(Ft,.06,.04,.2,l.gold,4,.9,.37,14),g(Ft,.06,l.gold,4,1.06,.37,1.1,.9,1.1);const sn=r(16777215,{map:a.ball,roughness:.7});g(Ft,.12,sn,2.4,1.5,.4),g(Ft,.12,sn,4.4,.27,.4),c(Ft,.4,.28,.3,r(8423568,{roughness:.35,metalness:.6}),2.3,2.17,.37),c(Ft,.46,.04,.17,r(13649451),3.2,2.02,.37,.1),c(Ft,.3,.3,.28,r(5132888,{roughness:.5}),4.3,2.18,.37);const Pn=new se;Pn.position.set(4.7,2.1,.37),Ft.add(Pn),c(Pn,.46,.2,.15,r(11843772,{roughness:.35,metalness:.5}),0,0,0),[-.15,.15].forEach(x=>{d(Pn,.06,.06,.01,r(1381653),x,0,.08,16,Math.PI/2)}),c(Pn,.1,.06,.012,r(546),0,.03,.078);{const x=new se;x.position.set(3.9,2.32,.4),x.rotation.set(0,.04,Math.PI/2-.15),Ft.add(x);const C=r(13187103,{roughness:.4});c(x,.2,.012,.8,C,0,0,0),c(x,.2,.012,.1,C,0,.012,.42,0,-.35),c(x,.2,.012,.1,C,0,.012,-.42,0,.35),c(x,.14,.013,.5,r(15844367,{roughness:.5}),0,5e-4,0),[[.09,.26],[-.09,.26],[.09,-.26],[-.09,-.26]].forEach(([F,V])=>d(x,.03,.03,.04,r(15987695),F,-.03,V,10,0,Math.PI/2))}c(Ft,.72,.05,.26,r(1382170,{roughness:.5}),4.55,.2,.37),c(Ft,.66,.012,.1,r(15921126,{roughness:.5}),4.55,.23,.42);for(let x=0;x<12;x++)c(Ft,.025,.014,.06,l.black,4.3+x*.045,.235,.44);c(Ft,.66,.02,.07,l.darkSteel,4.55,.23,.3),g(Ft,.08,r(1381653,{roughness:.6}),2.8,1.46,.37),g(Ft,.04,l.black,2.74,1.5,.45),g(Ft,.04,l.black,2.86,1.5,.45),c(Ft,.3,.1,.22,r(546),3.8,1.45,.37),c(Ft,.2,.08,.2,r(11549226),4.2,1.44,.37),c(Ft,.3,.14,.2,r(819),2.2,.22,.37),c(Ft,.25,.1,.25,r(7096878),3,.2,.37),c(Ft,.36,.15,.22,r(12170144),3.7,.24,.37),[1.3,3.2].forEach(x=>c(Rt,me,.04,.04,l.darkSteel,me/2,2.88,x)),[.7,3.06].forEach(x=>c(Rt,.04,.04,ye,l.darkSteel,x,2.88,ye/2)),g(Rt,.07,f(16777215,1.6),1.9,2.84,1.3),p(Rt,16777215,1,1.9,2.8,1.3,.6);const _e=new se;Rt.add(_e);const Xe=r(1839627,{roughness:.6}),Ci=new Fe({map:a.tableWood,roughness:.5,color:9403756,emissive:2758152,emissiveMap:a.tableWood,emissiveIntensity:.12});{const F=me/2,V=1.99,H=new jn(.9,.06,1.7),nt=new $t(H,[Xe,Xe,Ci,Xe,Xe,Xe]);nt.position.set(F,.76,V),_e.add(nt),c(_e,.04,.05,.5,Xe,F-.9/2-.012,.76,V-.3),c(_e,.04,.05,.4,Xe,F+.9/2+.012,.76,V+.35),[[-.34,-.7],[.34,-.7],[-.34,.7],[.34,.7]].forEach(([lt,Ut])=>{c(_e,.05,.73,.05,l.black,F+lt,.365,V+Ut)}),c(_e,.7,.04,.05,l.black,F,.7,V-.7),c(_e,.7,.04,.05,l.black,F,.7,V+.7)}const ln=ae(32,32);{const x=ln.getContext("2d");x.fillStyle="#0d0d0f",x.fillRect(0,0,32,32),x.strokeStyle="#3a3a3f",x.lineWidth=1;for(let C=0;C<32;C+=4)x.beginPath(),x.moveTo(C,0),x.lineTo(C,32),x.moveTo(0,C),x.lineTo(32,C),x.stroke()}const Ln=Zt(ln);Ln.repeat.set(3,2);const zn=new Fe({map:Ln,roughness:.8,side:2,transparent:!0,opacity:.85});function pr(x,C,F,V,H){const nt=new se;nt.position.set(x,.79,C),_e.add(nt);const lt=r(855312,{roughness:.5,metalness:.3});c(nt,.07,.085,.06,lt,0,-.02,0),d(nt,.014,.014,.22,lt,0,.14,0,8),g(nt,.028,lt,0,.26,0);const Ut=F-x,ne=H-C,ue=Math.hypot(Ut,ne),ie=new se;ie.position.set(0,.26,0),ie.rotation.y=Math.atan2(Ut,ne),nt.add(ie);const re=V-.79-.26,Ze=Math.atan2(re,ue-.04),En=Math.hypot(re,ue-.04),vr=c(ie,.022,.022,En,lt,0,re/2,(ue-.04)/2);vr.rotation.x=-Ze,g(ie,.022,lt,0,re,ue-.04);const Ke=new se;Ke.position.set(0,re,ue),Ke.rotation.set(Math.PI/2-.35,0,0),ie.add(Ke),d(Ke,.0245,.0245,.15,lt,0,0,0,14),d(Ke,.0262,.0262,.04,r(2829104,{roughness:.35,metalness:.8}),0,.095,0,14),d(Ke,.0268,.0268,.006,bt,0,.06,0,14);for(const Li of[-.03,.05]){const Dn=new $t(new ci(.043,.0035,6,18),lt);Dn.rotation.x=Math.PI/2,Dn.position.y=Li,Ke.add(Dn)}[[.04,0],[-.04,0],[0,.04],[0,-.04]].forEach(([Li,Dn])=>{c(Ke,.003,.09,.003,lt,Li,.01,Dn)}),d(Ke,.012,.012,.05,bt,0,-.1,0,8);const is=new $t(new On(.075,.075,.13,18,1,!0,-Math.PI/2,Math.PI),zn);return is.position.set(0,.07,.03),Ke.add(is),nt}pr(1.46,2.45,1.12,1.18,1.8),pr(2.3,2.45,2.64,1.18,1.8),pr(1.88,1.18,1.88,1.16,1.5);function hf(x,C,F){const V=new se;V.position.set(x,0,C),V.rotation.y=F,Rt.add(V);const H=new Fe({color:1776673,roughness:.85,side:2});d(V,.27,.25,.1,H,0,.46,0,20);const nt=new $t(new On(.27,.27,.42,20,1,!0,Math.PI*.38,Math.PI*1.24),H);nt.position.set(0,.76,0),V.add(nt),c(V,.05,.4,.05,l.black,0,.23,0),c(V,.4,.03,.04,l.black,0,.03,0),c(V,.04,.03,.4,l.black,0,.03,0),[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]].forEach(([lt,Ut])=>c(V,.02,.43,.02,l.black,lt*.8,.21,Ut*.8))}hf(1.1,1.99,Math.PI/2-.25),hf(2.66,1.99,-Math.PI/2+.25);{const x=r(986898,{roughness:.32,metalness:.15}),C=new se;C.position.set(me/2,0,ye-.55),Rt.add(C),c(C,1.9,.38,.8,x,0,.3,0),c(C,1.9,.5,.18,x,0,.72,.33),c(C,.18,.3,.82,x,-.95,.55,0),c(C,.18,.3,.82,x,.95,.55,0),c(C,.84,.14,.64,x,-.42,.55,-.03),c(C,.84,.14,.64,x,.42,.55,-.03),[[-.85,-.3],[.85,-.3],[-.85,.3],[.85,.3]].forEach(([F,V])=>c(C,.04,.1,.04,l.steel,F,.05,V))}const mr=new se;mr.position.set(me/2,1.75,ye-.07),Rt.add(mr),c(mr,2,1.2,.03,r(12172740,{roughness:.35,metalness:.8}),0,0,0);const zo=ae(1024,576);{const x=zo.getContext("2d");x.fillStyle="#f4f5f7",x.fillRect(0,0,1024,576)}const ts=Zt(zo);ts.wrapS=ts.wrapT=1001;const df=m(mr,1.92,1.12,new Fe({map:ts,roughness:.25,emissive:16777215,emissiveMap:ts,emissiveIntensity:.14}),0,0,-.018,"-z");df.userData.board=!0,df.userData.noPaint=!0,c(mr,1,.025,.07,r(12172740,{roughness:.4,metalness:.7}),0,-.62,-.03),[[-.2,15022389],[0,2001125],[.2,1118481]].forEach(([x,C])=>c(mr,.12,.02,.02,r(C),x,-.595,-.045));{const x=new se;x.position.set(3.45,0,4.7),x.rotation.y=-Math.PI/2-.1,Rt.add(x),c(x,.42,.78,.34,r(789518,{roughness:.7}),0,.39,0),c(x,.44,.03,.36,r(8014376,{roughness:.5}),0,.795,0),[[.52,.12],[.2,.15]].forEach(([C,F])=>{d(x,F,F,.02,r(1710621,{roughness:.5}),0,C,.175,22,Math.PI/2),d(x,F*.35,F*.35,.03,r(2763310),0,C,.18,12,Math.PI/2)})}const Jn=new se;Jn.position.set(3.32,0,1.6),Rt.add(Jn),[[-.25,-.2],[.25,-.2],[-.25,.2],[.25,.2]].forEach(([x,C])=>c(Jn,.025,.55,.025,l.black,x,.275,C)),c(Jn,.62,.03,.46,r(8018488,{roughness:.6}),0,.56,0);const ko=r(16777215,{map:a.plaid,roughness:.8});c(Jn,.56,.16,.4,ko,0,.66,0),c(Jn,.5,.05,.34,r(2890772),0,.745,0),c(Jn,.46,.06,.3,r(16777215,{map:a.dollar}),0,.78,0,.1),c(Jn,.5,.025,.4,ko,0,.88,-.28,0,-.35);const oa=new $t(u,ko);oa.scale.set(.56,.03,.4),oa.position.set(0,.95,-.35),oa.rotation.x=-1.35,Jn.add(oa);const la=new Nr;la.moveTo(0,0),la.quadraticCurveTo(.07,.35,0,.9),la.quadraticCurveTo(-.07,.35,0,0);const Xm=new zr(la),Ym=(()=>{const x=new Nr;return x.moveTo(0,0),x.quadraticCurveTo(.14,.5,0,1.2),x.quadraticCurveTo(-.14,.5,0,0),new zr(x)})();function Vo(x,C,F,V,H=0){const nt=new se;nt.position.set(C,0,F),x.add(nt),d(nt,.17,.14,.36,r(1052690,{roughness:.7}),0,.18,0,14),d(nt,.15,.15,.02,r(1708556),0,.37,0,14);const lt=t?9:16;for(let Ut=0;Ut<lt;Ut++){const ne=Ut/lt*Math.PI*2+Math.random()*.3,ue=Math.random()*.25;if(H===0){d(nt,.012,.012,V*.6,r(4876842),Math.cos(ne)*.04,.36+V*.3,Math.sin(ne)*.04,5,0,0);const ie=new $t(Ym,Ut%2?l.leaf:l.leaf2);ie.position.set(Math.cos(ne)*.04,.36+V*.55,Math.sin(ne)*.04),ie.rotation.set(0,-ne+Math.PI/2,0),ie.rotateX(-(.9+ue)),ie.scale.set(1.2,V*.8,1),nt.add(ie)}else{const ie=new $t(Xm,Ut%2?l.leaf:l.leaf2);ie.position.set(0,.35+Math.random()*.3,0),ie.rotation.set(0,-ne+Math.PI/2,0),ie.rotateX(-(.2+Math.random()*.5)),ie.scale.set(1.3,V*.9,1),nt.add(ie)}}return nt}Vo(Rt,3.4,.98,1.9,0),Vo(Rt,.55,1.8,1.3,1),Vo(Rt,.42,4.72,1.3,0);const jm=[r(789518,{roughness:.9}),r(789518),new Fe({color:0,emissive:16777215,emissiveMap:a.softbox,emissiveIntensity:.95,map:a.softbox})];function pf(x,C,F,V,H=.5){const nt=new se;nt.position.set(x,C,F),Rt.add(nt);const lt=new $t(new On(H*.55,H,.32,8,1),jm);lt.position.y=0,nt.add(lt),nt.lookAt(V.x,V.y,V.z),lt.rotation.x=-Math.PI/2;const Ut=new $t(new ci(H*.95,.01,6,8),f(14676223,1.5));return Ut.rotation.x=0,Ut.position.z=.16,Ut.rotation.z=Math.PI/8,nt.add(Ut),c(nt,.03,.6,.03,l.black,0,.3,-.2),p(nt,13623551,H*3,0,0,.3,.2),nt}pf(.97,2.47,1.96,new D(1.88,.9,1.99),.58),pf(2.79,2.47,1.96,new D(1.88,.9,1.99),.58);const gr=new se;gr.position.set(1.9,2.5,.85),gr.rotation.x=.35,Rt.add(gr),c(gr,1.3,.2,.05,r(1381914),0,0,0),m(gr,1.22,.14,new Fe({color:0,emissive:16777215,emissiveMap:a.softbox,emissiveIntensity:1.5}),0,0,.03,"+z",[3,1]),p(gr,15266047,2.2,0,0,.4,.3);const mf=(()=>{const x=ae(512,128),C=x.getContext("2d"),F=Ne(61);for(let V=0;V<360;V++){C.fillStyle=`rgba(${30+F()*40},${100+F()*70},${40+F()*30},${.75+F()*.25})`;const H=F()*512,nt=F()*F()*128;C.beginPath(),C.ellipse(H,nt,9+F()*6,6+F()*3,F()*3,0,7),C.fill()}for(let V=0;V<40;V++){C.strokeStyle="rgba(30,90,30,.9)",C.lineWidth=1.5,C.beginPath();const H=F()*512;C.moveTo(H,0),C.lineTo(H+(F()-.5)*20,30+F()*90),C.stroke()}return Zt(x)})();m(Rt,ye,.9,new Fe({map:mf,transparent:!0,alphaTest:.35,roughness:.9,side:2,emissive:997908,emissiveIntensity:.6,emissiveMap:mf}),.05,2.3,ye/2,"+x"),g(Rt,.05,f(16722474,1.8),me-.2,2.35,3.45),p(Rt,16719904,.7,me-.2,2.35,3.45,.6);const Ee=n.studio;Ee.position.x=-5.09,Ee.position.z=.14;const Ho=r(526347,{roughness:1});h(Ee,9.1,-.1,-.14,12,0,5,l.blueCarpet,1),h(Ee,9.1,st,-.14,12,st+.1,5,l.ceil,1),h(Ee,9.1,0,-.34,12.2,st+.1,-.14,Ho,1),h(Ee,12,0,-.34,12.2,st+.1,5.2,Ho,1),h(Ee,9.1,0,5,12.2,st+.1,5.2,Ho,1),m(Ee,1,2.4,l.foam,9.12,1.3,4.45,"+x",[1.5,3.6]),m(Ee,1,2.4,l.foam,9.12,1.3,2.4,"+x",[1.5,3.6]),m(Ee,2.4,1.6,l.foam,11.98,1.3,1.2,"-x",[3.5,2.5]),m(Ee,2.4,1.6,l.foam,11.98,1.3,3.8,"-x",[3.5,2.5]),m(Ee,1.6,1.6,l.foam,10.5,1.3,-.16,"+z",[2.4,2.4]),m(Ee,2.6,1.8,l.foam,10.5,st-.01,3.5,"-y",[4,3]);const In=new se;Ee.add(In);const Zm=r(16777215,{map:a.concreteDark,roughness:.55,color:8949141});c(In,.8,.05,2.1,Zm,9.55,.75,1.25),[[9.2,.3],[9.2,2.2],[9.9,.3],[9.9,2.2]].forEach(([x,C])=>c(In,.05,.72,.05,l.black,x,.36,C)),new Fe({color:0,emissive:16777215,emissiveMap:a.daw,emissiveIntensity:1.1,map:a.daw});const es=3,gf=1;for(let x=0;x<es;x++){const C=(x-1)*.28,F=new se;F.position.set(9.4+Math.abs(x-1)*0+Math.cos(C)*0,1.12,1.2+(x-1)*.34),F.rotation.y=Math.PI/2+(x-1)*.28,In.add(F),F.position.x=9.38+(x===1?0:.04);const V=new $t(new gn(gf/es,.34),new Fe({color:0,emissive:16777215,emissiveMap:a.daw,emissiveIntensity:1.2,map:a.daw}));V.material.map=a.daw.clone(),V.material.emissiveMap=V.material.map,V.material.map.needsUpdate=!0,V.material.map.repeat.set(1/es,1),V.material.map.offset.set(x/es,0),V.position.z=0,F.add(V),c(F,gf/es,.36,.02,l.black,0,0,-.012)}c(In,.05,.28,.08,l.black,9.3,.9,1.2),p(In,5939455,2.2,9.6,1.1,1.2,.22),c(In,.18,.015,.5,l.black,9.65,.785,1.15),c(In,.14,.04,.2,r(1710626),9.8,.795,.6),[[9.4,.3],[9.4,2.1]].forEach(([x,C])=>{c(In,.24,.36,.28,l.black,x,1,C),d(In,.085,.085,.02,r(14131994,{roughness:.5}),x+.12,1,C,16,0,Math.PI/2)});const Qn=new se;Qn.position.set(9.72,.79,.62),Qn.rotation.y=.5,Ee.add(Qn);{const x=r(10134446,{roughness:.4,metalness:.5});c(Qn,.28,.045,.05,x,0,.03,0),c(Qn,.09,.07,.045,x,-.14,.04,0),d(Qn,.032,.032,.05,x,-.1,.045,0,14,Math.PI/2),c(Qn,.05,.09,.04,r(7028002,{roughness:.6}),-.19,-.01,0,0,0,.35),p(Qn,16765040,.7,0,.05,0,.5)}const $n=new se;$n.position.set(10.45,0,1),$n.rotation.y=Math.PI/2-.4,Ee.add($n),c($n,.5,.1,.5,r(1381914,{roughness:.5}),0,.5,0),c($n,.5,.65,.1,r(9078394,{roughness:.6}),0,.9,-.24),c($n,.5,.2,.12,r(1381914),0,1.3,-.24),d($n,.03,.03,.4,l.darkSteel,0,.25,0,8),c($n,.5,.04,.04,l.darkSteel,0,.04,0),c($n,.04,.04,.5,l.darkSteel,0,.04,0);const dn=new se;dn.position.set(11.3,0,4.1),Ee.add(dn);for(let x=0;x<3;x++){const C=x*2.094;c(dn,.03,.03,.4,l.black,Math.cos(C)*.17,.04,Math.sin(C)*.17,-C+Math.PI/2)}d(dn,.018,.018,1.45,l.black,0,.75,0,8),c(dn,.02,.02,.35,l.black,0,1.5,-.14);const Km=r(12172998,{roughness:.3,metalness:.9}),xf=ae(32,32);{const x=xf.getContext("2d");x.fillStyle="#9ea4ad",x.fillRect(0,0,32,32),x.strokeStyle="#d8dce2",x.lineWidth=1;for(let C=0;C<32;C+=3)x.beginPath(),x.moveTo(C,0),x.lineTo(C,32),x.moveTo(0,C),x.lineTo(32,C),x.stroke()}const Go=Zt(xf);Go.repeat.set(4,2),d(dn,.031,.031,.19,Km,0,1.47,-.3,18),d(dn,.034,.034,.1,r(16777215,{map:Go,metalness:.8,roughness:.4}),0,1.6,-.3,18),g(dn,.034,r(16777215,{map:Go,metalness:.8,roughness:.4}),0,1.65,-.3),d(dn,.034,.034,.008,r(2774472,{roughness:.3,metalness:.5}),0,1.53,-.3,18);for(const x of[1.42,1.56]){const C=new $t(new ci(.052,.004,6,20),l.black);C.rotation.x=Math.PI/2,C.position.set(0,x,-.3),dn.add(C)}[[.05,0],[-.05,0],[0,.05],[0,-.05]].forEach(([x,C])=>c(dn,.004,.16,.004,l.black,x,1.49,-.3+C));const Wo=new $t(new ro(.1,24),new Fe({color:273,transparent:!0,opacity:.55,side:2}));Wo.position.set(0,1.5,-.17),dn.add(Wo);const _f=new $t(new ci(.1,.006,6,24),l.black);_f.position.copy(Wo.position),dn.add(_f),d(dn,.01,.01,.3,l.black,0,1.35,-.17,6);const xr=new se;xr.position.set(11.6,1.1,1),Ee.add(xr),d(xr,.01,.01,1,l.black,0,-.55,0,6);const vf=new $t(new ci(.09,.012,8,20,Math.PI),l.black);vf.rotation.z=0,xr.add(vf),d(xr,.05,.05,.03,l.black,-.09,-.02,0,12,0,Math.PI/2),d(xr,.05,.05,.03,l.black,.09,-.02,0,12,0,Math.PI/2),Wt(Ee,11.68,2.35,-Math.PI/2),le(Ee,11.7,2.35,-Math.PI/2,-.1),g(Ee,.14,r(328965,{roughness:.4}),11.95,1.9,2.6,.3,1.2,.8),p(Ee,6728447,.8,11.9,1.9,2.6,.12);{const x=r(15921396,{roughness:.32}),C=new se;C.position.set(10.1,0,4.58),Ee.add(C),c(C,1.9,.38,.8,x,0,.3,0),c(C,1.9,.5,.18,x,0,.72,.33),c(C,.18,.3,.82,x,-.95,.55,0),c(C,.18,.3,.82,x,.95,.55,0),c(C,.84,.14,.64,x,-.42,.55,-.03),c(C,.84,.14,.64,x,.42,.55,-.03),[[-.85,-.3],[.85,-.3],[-.85,.3],[.85,.3]].forEach(([V,H])=>c(C,.04,.1,.04,l.steel,V,.05,H)),c(C,.38,.38,.1,r(13650074,{roughness:.6}),-.6,.72,.12,.2),c(C,.36,.36,.1,r(2829619,{roughness:.6}),.62,.7,.12,-.15);const F=new se;F.position.set(10,0,3.85),Ee.add(F),c(F,.9,.012,.45,new Fe({color:13495039,transparent:!0,opacity:.32,roughness:.04,metalness:.2,depthWrite:!1}),0,.42,0),c(F,.92,.02,.47,l.steel,0,.405,0),[[-.42,-.2],[.42,-.2],[-.42,.2],[.42,.2]].forEach(([V,H])=>c(F,.025,.4,.025,l.steel,V,.2,H)),d(F,.05,.04,.2,new Fe({color:13626111,transparent:!0,opacity:.35,roughness:.05}),-.2,.53,0,14),[[16732058,0,0],[16765498,.05,.03],[16742970,-.04,.04],[16053492,.03,-.05],[12729599,-.05,-.03]].forEach(([V,H,nt],lt)=>{c(F,.008,.2+lt*.02,.008,r(3115578),-.2+H,.7+lt*.01,nt),g(F,.04,r(V,{roughness:.6}),-.2+H,.84+lt*.02,nt,1,.7,1)}),c(F,.26,.012,.18,r(1710626),.2,.436,.02,.3),c(F,.26,.006,.18,r(15288874),.2,.446,.02,.3)}{const x=new se;x.position.set(11,0,.14),Ee.add(x);const C=r(2759957,{roughness:.55});c(x,1.6,.05,.55,C,0,.8,0),[[-.74,-.22],[.74,-.22],[-.74,.22],[.74,.22]].forEach(([F,V])=>c(x,.05,.78,.05,l.black,F,.39,V)),c(x,1.5,.03,.5,C,0,.3,0);for(let F=0;F<18;F++)c(x,.012,.28,.3,r([14275264,1710621,12072234,2968202][F%4]),-.7+F*.04,.45,.02);[[-.45,1],[.45,-1]].forEach(([F,V])=>{c(x,.44,.06,.4,r(2237482,{roughness:.4,metalness:.4}),F,.855,0),d(x,.15,.15,.015,r(789518),F-.03,.89,0,28),d(x,.155,.155,.008,bt,F-.03,.88,0,28),d(x,.045,.045,.018,r(14237738),F-.03,.896,0,16),c(x,.012,.012,.26,bt,F+.17*V,.9,.04,.3*V),d(x,.02,.02,.03,bt,F+.17*V,.9,-.12,10),c(x,.02,.008,.2,r(8948368),F+.19*V,.89,0)}),c(x,.34,.07,.36,l.black,0,.855,0);for(let F=0;F<3;F++)for(let V=0;V<4;V++)d(x,.012,.012,.014,r(13225427,{metalness:.8,roughness:.3}),-.1+V*.065,.895,-.12+F*.06,8);c(x,.08,.006,.02,bt,0,.893,.14),c(x,.26,.004,.012,f(1700095,1.5),0,.892,.165)}{const x=ae(64,512);{const H=x.getContext("2d");H.fillStyle="#f2f2f4",H.fillRect(0,0,64,512),H.strokeStyle="#555",H.lineWidth=1;for(let lt=0;lt<=29;lt++){const Ut=lt*512/29;H.beginPath(),H.moveTo(0,Ut),H.lineTo(64,Ut),H.stroke()}H.fillStyle="#0b0b0d";const nt=[1,1,0,1,1,1,0];for(let lt=0;lt<28;lt++)nt[lt%7]&&H.fillRect(0,(lt+1)*512/29-7,38,14)}const C=Zt(x),F=new se;F.position.set(9.78,.775,1.62),In.add(F),c(F,.3,.035,.84,r(1381914,{roughness:.4}),0,.0175,0);const V=new $t(new gn(.2,.76),new en({map:C}));V.rotation.set(-Math.PI/2,0,-Math.PI/2),V.position.set(.045,.037,0),F.add(V);for(let H=0;H<4;H++)d(F,.012,.012,.012,r(14277086),-.1,.04,-.3+H*.1,8);for(let H=0;H<4;H++)c(F,.04,.012,.04,f([16723607,1700095,16769898,8191851][H],1.2),-.1,.041,.1+H*.06-0)}[-.1,4.95].forEach(x=>c(Ee,2.8,.04,.04,f(3827455,1.6),10.6,st-.08,x)),c(Ee,.04,.04,5,f(3827455,1.4),11.9,st-.08,2.4),p(Ee,3827455,5,10.8,2.5,2,.12),g(Ee,.05,f(16722474,1.8),11.95,2.3,3.6),p(Ee,16719904,.8,11.9,2.3,3.6,.6);const ca=new wc(10127048,3809328,.55);e.add(ca);const qo=[];for(let x=0;x<6;x++){const C=new Ic(16777215,0,10,2);e.add(C),qo.push(C)}const Pi={zone:null};function Jm(x,C){Pi.zone=x,Pi.target=Wc[x],Pi.fog=Am[x],Pi.amb={street:1.5,chai:.8,entry:.3,hall:.3,studio:.85}[x],C&&Sf(1)}const fa=new ce;function Sf(x){const C=Pi.target;qo.forEach((V,H)=>{const nt=C[H];V.position.x+=(nt.p[0]-V.position.x)*x,V.position.y+=(nt.p[1]-V.position.y)*x,V.position.z+=(nt.p[2]-V.position.z)*x,fa.setHex(nt.c),V.color.lerp(fa,x),V.intensity+=(nt.i-V.intensity)*x,V.distance+=(nt.d-V.distance)*x});const F=Pi.fog;e.fog.color.lerp(fa.setHex(F[0]),x),e.fog.density+=(F[1]-e.fog.density)*x,e.background.lerp(fa.setHex(F[0]),x),ca.intensity+=(Pi.amb-ca.intensity)*x}const Qm={chai:["street","stairs","chai"],street:["street","stairs","entry","chai"],entry:["street","stairs","entry","hall"],hall:["entry","hall","studio"],studio:["hall","studio"]};function $m(x){const C=Qm[x];for(const F in n)n[F].visible=C.includes(F)}const tg=x=>`../index.html?service=${x}#book`,eg=[{id:"crt",zone:"hall",pos:[.5,.75,1.05],title:"Старые телевизоры в кадре",text:"На экранах идёт картинка с камер студии: зелёный фосфор, шум, таймкод REC. Такой фон оживляет кадр.",img:"hall-wide-1",service:"podcast-express"},{id:"suitcase",zone:"hall",pos:[3.32,.85,1.6],title:"Чемодан",text:"Чемодан «заряжен на деньги». Реквизит можно переставить под тему выпуска.",img:"detail-suitcase",service:"rent"},{id:"retro",zone:"hall",pos:[1.7,1,.45],title:"Стеллаж с инструментами и техникой",text:"Три гитары, синтезатор, проигрыватель, магнитофоны и книги. Всё настоящее, без бутафории — это ретро-эстетика в кадре.",img:"detail-turntable",service:"rent"},{id:"mural",zone:"hall",pos:[3.7,1.5,1.4],title:"Граффити-стена",text:"Большой чёрно-белый рисунок на зелёной стене — фирменный фон студии. Рядом дверь в комнату звукозаписи.",img:"hall-wide-2",service:"rent"},{id:"light",zone:"hall",pos:[.97,2.3,1.96],title:"Свет RGB",text:"Цвет света подбираем под настроение выпуска. Два больших софтбокса и панель сверху дают мягкую картинку.",img:"hall-wide-3",service:"podcast-express"},{id:"table",zone:"hall",pos:[1.88,.9,1.99],title:"Стол и три микрофона",text:"Три микрофона на журавлях, три камеры 4K, запись в мультикам. Садись за стол — проверим звук.",img:"hall-table",service:"podcast-express"},{id:"sofa",zone:"hall",pos:[1.88,.8,4.4],title:"Чёрный кожаный диван",text:"Диван между входом и дверью в звукозапись. Можно посидеть, пока мы готовим свет и звук.",img:"hall-both",service:"rent"},{id:"console",zone:"studio",pos:[4.46,1.1,1.34],title:"Тот же фрагмент после сведения",text:"Звукорежиссёр сидит в той же комнате, что и исполнитель, — без стеклянной стены между вами. Сравни с записью до обработки.",img:"engineer-1",service:"sound-vocal",audio:"demo-after.mp3"},{id:"vocal",zone:"studio",pos:[6.21,1.45,4.24],title:"Голос до обработки",text:"Комната небольшая — поэтому голос в ней плотный, а не гулкий. Послушай запись до обработки.",img:"mic-neumann",service:"sound-vocal",audio:"demo-before.mp3"},{id:"wall",zone:"studio",pos:[4.15,1.4,4],title:"Звукоизолированная стена",text:"Между залом и комнатой звукозаписи — звукоизоляция. Можно писать подкаст и голос одновременно, не мешая друг другу. Пакет «Трек + обложка + сниппет + Reels — 13 900 ₽».",img:"vocal-2",service:"pack"},{id:"revolver",zone:"studio",pos:[4.63,.9,.76],title:"Револьвер на столе",text:"",img:null,service:null,pickup:!0},{id:"board",zone:"hall",pos:[1.88,1.75,4.9],title:"Доска для рисунков",text:"Нарисуй баллончиком на белой доске над диваном. Рисунок остаётся здесь, и его увидят другие гости.",img:null,service:null},{id:"turn",zone:"studio",pos:[6.1,1,.45],title:"Вертушки и микшер",text:"Отдельный стол с двумя проигрывателями и микшером. Можно записать сэмплы с винила.",img:"detail-turntable",service:"sound-vocal"},{id:"dj",zone:"entry",pos:[-2.3,1.5,2.3],title:"Школа диджеев — идёт ремонт",text:"Здесь только начали ремонт, дверь закрыта. Тебе — направо, в студию.",img:null,service:null},{id:"sign",zone:"street",pos:[6.6,6.1,5.8],title:"REVOLVER PODCAST · REVOLVER SOUND",text:"Студии на Фрунзе, 49: видеоподкасты и запись голоса. Вход по лестнице вниз, потом направо.",img:"hall-both",service:"pack"}].map(x=>Object.assign(x,{pos:new D(...x.pos),href:x.service?tg(x.service):null})),Mf={t:0},_r=[{i:0,t:0},{i:1,t:0}];let ns=0;function yf(x){const C=x.getContext("2d");for(let F=0;F<5;F++){const V=Math.random()*x.height,H=3+Math.random()*10;C.drawImage(x,0,V,x.width,H,(Math.random()-.5)*40,V,x.width,H)}C.fillStyle="rgba(255,255,255,.55)",C.fillRect(0,Math.random()*x.height,x.width,2),C.fillStyle="rgba(255,0,60,.25)",C.fillRect(0,Math.random()*x.height,x.width,6)}const Xo=new D;function ng(x,C,F,V){Mf.t+=x;const H=Mf.t;for(const nt of yt){nt.grp.localToWorld(Xo.set(nt.cx,0,nt.cz));const lt=Math.hypot(C-Xo.x,F-Xo.z);nt.target=lt<2?nt.open:0,nt.cur+=(nt.target-nt.cur)*Math.min(1,x*4.5),nt.pivot.rotation.y=nt.cur}for(const nt of je)nt.m.color.setHSL((H*.07+nt.k/16)%1,1,.5).multiplyScalar(1.7);if(Wc.hall[1].c=new ce().setHSL(H*.07%1,1,.5).getHex(),Sf(Math.min(1,x*3.2)),(V==="hall"||V==="entry")&&(_r[0].t+=x,_r[1].t+=x,ns>0&&(ns-=x),_r[0].t>.085&&(_r[0].t=0,Vc(Vt[0],H,1,H*100|0),ns>0&&yf(Vt[0]),rn[0].needsUpdate=!0),_r[1].t>.12&&(_r[1].t=0,Vc(Vt[1],H+5,2,H*77|0),ns>0&&yf(Vt[1]),rn[1].needsUpdate=!0)),V==="street"||V==="entry"||V==="chai"){for(const nt of ft){const lt=nt.userData;lt.x+=lt.dir*lt.speed*x,lt.x>100&&(lt.x=-100),lt.x<-100&&(lt.x=100),nt.position.x=lt.x}pe.position.y=4.35+Math.sin(H*3)*.08,it.position.y=pe.position.y}}return e.updateMatrixWorld(!0),{scene:e,groups:n,hotspots:eg,update:ng,setZoneLights:Jm,setVisibility:$m,redrawMural:Ri,redrawDoor:Bo,redrawSign:()=>{kc($),At.needsUpdate=!0},doors:yt,lights:qo,amb:ca,glitch:x=>{ns=x},hideRevolverProp:()=>{Qn.visible=!1},board:{canvas:zo,texture:ts}}}const So="revolver_board_v1",Mo=["#c9f23b","#ff4b2e","#c23cff","#ffffff","#111111"],yo=3e4;function Rm(i,t){if(!i||!t)return;const{canvas:e,texture:n}=i,r=e.getContext("2d"),s=e.width,a=e.height;let o=[],l=[],f=!1,u=0,h="";function c(m,p,S,y){const _=r.createRadialGradient(m,p,0,m,p,S),O=Mo[y]||Mo[4];_.addColorStop(0,O),_.addColorStop(.55,O+"cc"),_.addColorStop(1,O+"00"),r.fillStyle=_,r.beginPath(),r.arc(m,p,S,0,Math.PI*2),r.fill()}function d(m){for(const p of m)c(p[0],p[1],p[2],p[3]);n.needsUpdate=!0}function g(){try{const m=JSON.parse(localStorage.getItem(So)||"[]");Array.isArray(m)&&(o=m.slice(-yo),d(o))}catch{}}function v(m){if(!f&&!m)return;const p=performance.now();if(!(!m&&p-u<15e3)){u=p,f=!1;try{localStorage.setItem(So,JSON.stringify(o.slice(-yo)))}catch{}}}t.boardPaint=(m,p)=>{const S=Math.max(0,Mo.indexOf(String(p).toLowerCase())),y=Math.round(m.x*s),_=Math.round((1-m.y)*a),O=9+Math.round(Math.random()*6),R=y+","+_;if(R===h)return;h=R,c(y,_,O,S),n.needsUpdate=!0;const L=[y,_,O,S];o.push(L),l.push(L),o.length>yo&&o.shift(),f=!0},t.boardClear=()=>{r.fillStyle="#f4f5f7",r.fillRect(0,0,s,a),n.needsUpdate=!0,o=[],l=[];try{localStorage.removeItem(So)}catch{}},g(),setInterval(()=>v(!1),5e3),addEventListener("pagehide",()=>v(!0)),document.addEventListener("visibilitychange",()=>{document.hidden&&v(!0)})}const ar=["#c9f23b","#ff4b2e","#c23cff","#ffffff","#111111"],Cm=150,Eo=4e3;function qs(i,t){const e=ae(128,128),n=e.getContext("2d"),r=Ne(i);if(n.translate(64,64),t){n.strokeStyle="rgba(235,245,240,.9)",n.lineWidth=1.4;for(let s=0;s<14;s++){let a=s/14*6.28+r()*.3,o=0,l=0;n.beginPath(),n.moveTo(0,0);for(let f=0;f<5;f++)a+=(r()-.5)*.6,o+=Math.cos(a)*(6+r()*9),l+=Math.sin(a)*(6+r()*9),n.lineTo(o,l);n.stroke()}n.strokeStyle="rgba(0,0,0,.6)",n.lineWidth=3,n.beginPath(),n.arc(0,0,4,0,7),n.stroke(),n.strokeStyle="rgba(200,230,255,.5)",n.lineWidth=1;for(let s=1;s<4;s++)n.beginPath(),n.arc(0,0,s*14,r()*6,r()*6+3.5),n.stroke()}else{const s=n.createRadialGradient(0,0,2,0,0,40);s.addColorStop(0,"rgba(0,0,0,.95)"),s.addColorStop(.35,"rgba(10,10,10,.8)"),s.addColorStop(.7,"rgba(120,115,105,.35)"),s.addColorStop(1,"rgba(120,115,105,0)"),n.fillStyle=s,n.beginPath(),n.arc(0,0,40,0,7),n.fill(),n.fillStyle="#000",n.beginPath(),n.arc(0,0,5.5,0,7),n.fill();for(let a=0;a<12;a++){const o=r()*6.28,l=8+r()*22;n.fillStyle=`rgba(${r()<.5?"30,28,26":"170,165,150"},${.5+r()*.4})`,n.beginPath(),n.arc(Math.cos(o)*l,Math.sin(o)*l,1+r()*3,0,7),n.fill()}n.strokeStyle="rgba(0,0,0,.7)",n.lineWidth=1;for(let a=0;a<7;a++){let o=r()*6.28,l=0,f=0;n.beginPath(),n.moveTo(0,0);for(let u=0;u<4;u++)o+=(r()-.5)*.8,l+=Math.cos(o)*(6+r()*8),f+=Math.sin(o)*(6+r()*8),n.lineTo(l,f);n.stroke()}}return e}function Pm(){const i=ae(128,128),t=i.getContext("2d"),e=Ne(5),n=t.createRadialGradient(64,64,2,64,64,50);n.addColorStop(0,"rgba(255,255,255,.95)"),n.addColorStop(.45,"rgba(255,255,255,.7)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);for(let a=0;a<70;a++){const o=e()*6.28,l=20+e()*42;t.fillStyle=`rgba(255,255,255,${.35+e()*.6})`,t.beginPath(),t.arc(64+Math.cos(o)*l,64+Math.sin(o)*l,.6+e()*2.2,0,7),t.fill()}const r=t.getImageData(0,0,128,128),s=r.data;for(let a=3;a<s.length;a+=4)s[a]=Math.max(0,s[a]*(.85+e()*.3));return t.putImageData(r,0,0),i}function Lm(){const i=ae(256,128),t=i.getContext("2d");return t.fillStyle="#c9ccd0",t.fillRect(0,0,256,128),t.fillStyle="#111",t.fillRect(0,22,256,84),t.fillStyle="#ff3b30",t.font="900 40px Unbounded, Impact, sans-serif",t.textAlign="center",t.fillText("REVOLVER",128,74),t.fillStyle="#c9f23b",t.font="700 14px Arial",t.fillText("SPRAY · 400 ML",128,98),i}function bo(){const i=ae(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,240,200,1)"),e.addColorStop(.3,"rgba(255,170,60,.7)"),e.addColorStop(1,"rgba(255,100,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),i}function Im(i){const{renderer:t,camera:e,scene:n,getWorld:r,audio:s,state:a}=i,o={},l=new nc,f=new fn(54,1,.01,5);l.add(new wc(14542079,5259328,1.5));const u=new jp(16773344,1.6);u.position.set(.5,1,.8),l.add(u);const h=new Ic(16752704,0,2);h.position.set(.15,0,-.5),l.add(h);const c=(q,tt={})=>new Fe(Object.assign({color:q,roughness:.5,metalness:.4},tt)),d=c(10134446,{metalness:.5,roughness:.4}),g=c(2764083,{metalness:.4,roughness:.5}),v=c(7028002,{metalness:0,roughness:.6}),m=c(13212282,{metalness:0,roughness:.8}),p=c(2831696,{metalness:0,roughness:.95}),S=(q,tt,ut,yt,mt,P,st,j,Q=0,_t=0,Tt=16)=>{const kt=new $t(new On(tt,ut,yt,Tt),mt);return kt.position.set(P,st,j),kt.rotation.set(Q,0,_t),q.add(kt),kt},y=(q,tt,ut,yt,mt,P,st,j,Q=0,_t=0,Tt=0)=>{const kt=new $t(new jn(tt,ut,yt),mt);return kt.position.set(P,st,j),kt.rotation.set(Q,_t,Tt),q.add(kt),kt},_=new se,O=new se;_.add(O),y(O,.04,.075,.13,d,0,0,.03),S(O,.0125,.0125,.24,d,0,.022,-.17,Math.PI/2,0),y(O,.012,.012,.22,g,0,.045,-.16),y(O,.008,.016,.01,g,0,.055,-.27),S(O,.009,.009,.19,d,0,-.003,-.16,Math.PI/2,0);const R=new se;R.position.set(0,.018,-.045),O.add(R),S(R,.034,.034,.065,d,0,0,0,Math.PI/2,0,20);for(let q=0;q<6;q++){const tt=q*Math.PI/3;S(R,.0085,.0085,.01,c(328965,{metalness:0}),Math.cos(tt)*.021,Math.sin(tt)*.021,.033,Math.PI/2,0,10),S(R,.0065,.0065,.01,c(13146682,{metalness:.8,roughness:.3}),Math.cos(tt)*.021,Math.sin(tt)*.021,.035,Math.PI/2,0,10)}const L=y(O,.01,.04,.02,g,0,.055,.1,.5);y(_,.036,.1,.05,v,0,-.07,.1,.35);const U=new $t(new ci(.022,.004,6,14,Math.PI*1.3),d);U.position.set(0,-.04,.04),U.rotation.set(0,Math.PI/2,Math.PI*1.1),_.add(U),y(_,.008,.022,.008,g,0,-.02,.05),y(_,.052,.05,.065,m,.002,-.07,.115,.35),S(_,.032,.036,.3,p,0,-.13,.27,1.25,0,14);const T=new $t(new gn(.2,.2),new en({map:Zt(bo()),transparent:!0,blending:2,depthWrite:!1}));T.position.set(0,.022,-.3),T.visible=!1,_.add(T);const M=new se,I=Zt(Lm()),W=new $t(new On(.03,.03,.17,20),[c(16777215,{map:I,metalness:.5,roughness:.35}),c(12106946,{metalness:.8,roughness:.3}),c(12106946,{metalness:.8})]);W.position.set(0,0,0),M.add(W),S(M,.026,.03,.02,c(12106946,{metalness:.8,roughness:.3}),0,.095,0);const X=c(13234747,{metalness:.1,roughness:.5});S(M,.026,.026,.035,X,0,.12,0),y(M,.012,.012,.025,g,0,.126,-.02),y(M,.05,.05,.06,m,0,-.01,.04),S(M,.032,.036,.3,p,0,-.12,.2,1.2,0,14);const Y=new $t(new gn(.16,.16),new en({map:Zt(bo()),transparent:!0,opacity:.6,depthWrite:!1,color:13234747}));Y.position.set(0,.126,-.1),Y.visible=!1,M.add(Y);const at=new se;l.add(at),at.add(_),at.add(M),_.visible=!1;const J={rev:new D(.1,-.095,-.3),can:new D(.1,-.1,-.3)};_.scale.setScalar(.85),M.scale.setScalar(.8),M.rotation.set(-.35,.1,0),_.rotation.set(0,.06,0);const N={weapon:1,hasRev:!1,ammo:6,reload:-1,rec:0,flash:0,cd:0,swap:1,swapTo:0,trigger:!1,color:0,sprayT:0,hold:0,bobT:0,sx:0,sy:0,lastYaw:0,lastPitch:0,lastP:null,dripLen:0,dripT:0,spraying:!1};o.S=N;const $=[Zt(qs(1)),Zt(qs(2)),Zt(qs(3))],At=Zt(qs(9,!0)),It=$.map(q=>new Tc({map:q,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),Bt=new en({map:At,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6}),te=new gn(1,1),pe=[];let it=0;const gt=new D,Ot=new D;function St(q,tt,ut,yt){let mt=pe[it];mt||(mt=new $t(te,It[0]),pe[it]=mt,n.add(mt)),it=(it+1)%Cm,mt.material=yt?Bt:It[Math.random()*3|0],mt.scale.set(ut,ut,1),mt.position.copy(q).addScaledVector(tt,.004),Xt(mt,tt),mt.rotateZ(Math.random()*6.28),mt.visible=!0}function Xt(q,tt){Math.abs(tt.y)>.95?q.up.set(0,0,1):q.up.set(0,1,0),q.lookAt(q.position.x+tt.x,q.position.y+tt.y,q.position.z+tt.z)}const Kt=Zt(Pm()),jt=new Tc({map:Kt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Qt=new ap(te,jt,Eo);Qt.frustumCulled=!1,Qt.count=0,n.add(Qt),Qt.instanceMatrix.setUsage(35048);const ft=new ce,xt=new Be;let w=0,ot=0;function ct(q,tt,ut,yt=1,mt=1,P=!1,st=0){xt.position.copy(q).addScaledVector(tt,.003+w%9*4e-4),xt.scale.set(ut*yt,ut*mt,1),xt.up.set(0,1,0),Math.abs(tt.y)>.95&&xt.up.set(0,0,1),xt.lookAt(xt.position.x+tt.x,xt.position.y+tt.y,xt.position.z+tt.z),P||xt.rotateZ(Math.random()*6.28),xt.updateMatrix(),Qt.setMatrixAt(w,xt.matrix),ft.set(ar[N.color]),Qt.setColorAt(w,ft),w=(w+1)%Eo,ot=Math.min(Eo,ot+1),Qt.count=ot,Qt.instanceMatrix.needsUpdate=!0,Qt.instanceColor&&(Qt.instanceColor.needsUpdate=!0)}const Mt=80;function pt(q,tt){const ut=new Ye;ut.setAttribute("position",new cn(new Float32Array(Mt*3),3)),ut.setAttribute("color",new cn(new Float32Array(Mt*3),3));const yt=new fc({size:q,vertexColors:!0,transparent:!0,blending:2,depthWrite:!1,sizeAttenuation:!0,map:Zt(bo())}),mt=new op(ut,yt);return mt.frustumCulled=!1,n.add(mt),{pt:mt,g:ut,v:new Float32Array(Mt*3),life:new Float32Array(Mt),max:new Float32Array(Mt),i:0,base:new Float32Array(Mt*3),grav:0}}const Ct=pt(.05),wt=pt(.22);Ct.grav=6,wt.grav=-.15;function A(q,tt,ut,yt,mt,P,st){for(let j=0;j<yt;j++){const Q=q.i;q.i=(q.i+1)%Mt;const _t=q.g.attributes.position.array;_t[Q*3]=tt.x,_t[Q*3+1]=tt.y,_t[Q*3+2]=tt.z,q.v[Q*3]=ut.x*mt*Math.random()+(Math.random()-.5)*mt,q.v[Q*3+1]=ut.y*mt*Math.random()+(Math.random()-.3)*mt,q.v[Q*3+2]=ut.z*mt*Math.random()+(Math.random()-.5)*mt,q.life[Q]=q.max[Q]=P*(.6+Math.random()*.6),q.base[Q*3]=st[0],q.base[Q*3+1]=st[1],q.base[Q*3+2]=st[2]}}function E(q,tt){const ut=q.g.attributes.position.array,yt=q.g.attributes.color.array;for(let mt=0;mt<Mt;mt++)if(q.life[mt]>0){q.life[mt]-=tt;const P=Math.max(0,q.life[mt]/q.max[mt]);q.v[mt*3+1]-=q.grav*tt,ut[mt*3]+=q.v[mt*3]*tt,ut[mt*3+1]+=q.v[mt*3+1]*tt,ut[mt*3+2]+=q.v[mt*3+2]*tt,yt[mt*3]=q.base[mt*3]*P,yt[mt*3+1]=q.base[mt*3+1]*P,yt[mt*3+2]=q.base[mt*3+2]*P}else yt[mt*3]=yt[mt*3+1]=yt[mt*3+2]=0;q.g.attributes.position.needsUpdate=!0,q.g.attributes.color.needsUpdate=!0}const G=new Zp;G.far=40;let et=null,ht="";o.invalidate=()=>{et=null};function rt(){const q=r();if(!q)return[];if(et&&ht===a.zone)return et;const tt=[];for(const ut in q.groups){const yt=q.groups[ut];yt.visible&&yt.traverse(mt=>{mt.isMesh&&mt.visible&&!(mt.material.transparent&&mt.material.opacity<.5&&!mt.material.alphaTest)&&mt.material.side!==2&&tt.push(mt)})}return et=tt,ht=a.zone,tt}function zt(q,tt){e.updateMatrixWorld(),q?G.set(q,tt):G.setFromCamera({x:0,y:0},e);const ut=G.intersectObjects(rt(),!1);for(const yt of ut)if(yt.face)return gt.copy(yt.face.normal).transformDirection(yt.object.matrixWorld),gt.dot(G.ray.direction)>0&&gt.negate(),{point:yt.point.clone(),normal:gt.clone(),object:yt.object,uv:yt.uv?yt.uv.clone():null};return null}function Pt(q,tt){const ut=zt(q,tt);if(!ut)return null;const yt=ut.object.userData.noPaint;if(ut.object.userData.crt){St(ut.point,ut.normal,.3,!0);const mt=r();mt&&mt.glitch&&mt.glitch(1.1),A(Ct,ut.point,ut.normal,14,2.5,.5,[.6,1,.8])}else yt?A(Ct,ut.point,ut.normal,6,1.8,.35,[1,.7,.25]):(St(ut.point,ut.normal,.17+Math.random()*.06,!1),A(Ct,ut.point,ut.normal,10,2.2,.45,[1,.7,.25]));return A(wt,ut.point,ut.normal,3,.5,1.1,[.3,.3,.3]),ut}o.fire=(q,tt,ut)=>!N.hasRev||N.weapon!==0||N.swap<1||N.reload>=0||N.cd>0?!1:N.ammo<=0?(s.click(),o.reload(),!1):(N.ammo--,N.rec=1,N.flash=.06,N.cd=.3,R.rotation.z-=Math.PI/3,s.shot(),Pt(q,tt),Dt(),N.ammo===0&&setTimeout(()=>o.reload(),450),!0),o.reload=()=>{!N.hasRev||N.weapon!==0||N.reload>=0||N.ammo>=6||(N.reload=0,s.click())},o.giveRevolver=()=>{N.hasRev=!0,N.ammo=6,o.switchWeapon(0)},o.switchWeapon=q=>{if(!N.hasRev)return;const tt=q===void 0?1-N.weapon:q;tt===N.weapon&&N.swap>=1||(N.swapTo=tt,N.swap=0,N.reload=-1,N.trigger=!1,s.spray(!1))},o.cycleColor=q=>{N.color=q===void 0?(N.color+1)%ar.length:q,X.color.set(ar[N.color]),Y.material.color.set(ar[N.color]),Dt()},o.setTrigger=q=>{N.trigger=q,N.weapon===0&&q&&o.fire(),q||s.spray(!1)},o.sprayAt=(q,tt,ut=1)=>{let yt=null;for(let mt=0;mt<ut;mt++)yt=Nt(q,tt);return!!yt};function Nt(q,tt){const ut=zt(q,tt);if(ut&&ut.object.userData.board&&ut.uv)return o.boardPaint&&o.boardPaint(ut.uv,ar[N.color]),ut;if(!ut||ut.object.userData.noPaint)return null;const yt=new D,mt=.16+Math.random()*.06;ct(ut.point,ut.normal,mt);for(let P=0;P<2;P++)yt.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.16).projectOnPlane(ut.normal),ct(Ot.copy(ut.point).add(yt),ut.normal,.02+Math.random()*.04);return ut}o.clear=()=>{ot=0,w=0,Qt.count=0,pe.forEach(q=>q.visible=!1),it=0},o.counts=()=>({decals:pe.filter(q=>q.visible).length,paint:ot});const oe=document.getElementById("ammo"),dt=document.getElementById("palette");function Dt(){oe&&(oe.firstElementChild.textContent=N.weapon===0?(N.reload>=0?"…":N.ammo)+"/∞":"Спрей",oe.lastElementChild.textContent=N.weapon===0?"Револьвер .357":"Баллончик",dt.style.display=N.weapon===1?"flex":"none",[...dt.children].forEach((q,tt)=>q.classList.toggle("on",tt===N.color)))}dt&&ar.forEach((q,tt)=>{const ut=document.createElement("button");ut.style.background=q,ut.setAttribute("aria-label","Цвет "+(tt+1)),ut.addEventListener("click",yt=>{yt.stopPropagation(),o.cycleColor(tt)}),dt.appendChild(ut)}),o.updateHud=Dt,Dt();const Yt=q=>q*q*(3-2*q);return o.update=(q,tt)=>{N.cd=Math.max(0,N.cd-q);let ut=0;N.swap<1&&(N.swap=Math.min(1,N.swap+q/.28),N.swap<.5?ut=Yt(N.swap*2):(N.weapon!==N.swapTo&&(N.weapon=N.swapTo,_.visible=N.weapon===0,M.visible=N.weapon===1,Dt()),ut=1-Yt((N.swap-.5)*2)),N.swap>=1&&(ut=0));const yt=N.weapon===0?J.rev:J.can;N.bobT+=q*(4+tt.speed*5);const mt=Math.min(1,tt.speed)*(tt.airborne?0:1),P=Math.sin(N.bobT)*.006*mt,st=Math.abs(Math.cos(N.bobT))*.007*mt-.003*mt;let j=a.yaw-N.lastYaw,Q=a.pitch-N.lastPitch;N.lastYaw=a.yaw,N.lastPitch=a.pitch,j=Math.max(-.2,Math.min(.2,j)),Q=Math.max(-.2,Math.min(.2,Q)),N.sx+=(-j*.35-N.sx)*Math.min(1,q*10),N.sy+=(Q*.35-N.sy)*Math.min(1,q*10),N.rec=Math.max(0,N.rec-q*7);let _t=0;if(N.reload>=0){N.reload+=q;const kt=1.4,Ce=Math.min(1,N.reload/kt);_t=Math.sin(Math.PI*Math.min(1,Ce*1.15)),R.rotation.z+=q*18*Math.sin(Math.PI*Ce),N.reload>=kt&&(N.reload=-1,N.ammo=6,s.click(),Dt())}const Tt=N.weapon===0?_:M;if(at.position.set(yt.x+P+N.sx,yt.y+st+N.sy-ut*.25-_t*.07+Math.min(0,tt.vy)*.004,yt.z+N.rec*.05),Tt.rotation.x=(N.weapon===1?-.35:0)+N.rec*.28-_t*.55+ut*.5,Tt.rotation.z=_t*.7+(tt.airborne?.04:0),N.flash=Math.max(0,N.flash-q),T.visible=N.flash>0,T.rotation.z=Math.random()*6,h.intensity=N.flash>0?3:0,L.rotation.x=.5-(N.cd>.12?.5:0),Y.visible=!1,N.weapon===1&&N.trigger&&N.swap>=1){if(Y.visible=!0,Y.rotation.z=Math.random()*6,at.position.x+=(Math.random()-.5)*.002,s.spray(!0),N.sprayT-=q,N.sprayT<=0){N.sprayT=.035;const kt=Nt();kt?(N.lastP&&N.lastP.distanceTo(kt.point)<.1?N.hold+=.035:(N.hold=0,N.dripLen=0),N.lastP=kt.point.clone(),N.hold>.6&&Math.abs(kt.normal.y)<.6&&(N.dripT-=.035,N.dripT<=0&&N.dripLen<.45&&(N.dripT=.12,N.dripLen+=.035,Ot.copy(kt.point),Ot.y-=N.dripLen,ct(Ot,kt.normal,.1,.12,.55,!0)))):(N.lastP=null,N.hold=0)}}else N.weapon===1&&s.spray(!1);E(Ct,q),E(wt,q)},o.render=()=>{f.aspect=e.aspect,f.updateProjectionMatrix(),t.clearDepth(),t.render(l,f)},o.paint=Qt,o.vm=at,o.vmScene=l,o.vmCam=f,o}const Jt=i=>document.querySelector(i),Xs=new URLSearchParams(location.search),xn=Xs.get("touch")==="1"||"ontouchstart"in window||navigator.maxTouchPoints>0&&matchMedia("(pointer: coarse)").matches;xn&&document.body.classList.add("touch"),xn?(ff=document.querySelector(".keys .t"))==null||ff.classList.remove("hidden"):(uf=document.querySelector(".keys .t"))==null||uf.classList.add("hidden");const B={started:!1,paused:!1,cardOpen:!1,x:3.4,z:21.6,yaw:-.62,pitch:-.04,eyeY:3+sr,y:3,vy:0,grounded:!0,zone:"street",locked:!1,bob:0,sound:!1,zoneBtn:1},ge={keys:{},mx:0,mz:0,lx:0,ly:0,run:!1};let de=null,To=0,qc=0,Re,nn,De,Ao=Jt("#stage"),Xc=Xs.get("fixed")==="1",_n=1,Hr=1,Gr="auto";async function Yc(){Gr=Jt("#q").value;const i=Gr==="low"||Xs.get("q")==="low";Hr=Math.min(window.devicePixelRatio||1,xn?1.5:2),_n=i?1:Hr;try{Re=new np({antialias:!i&&!xn,powerPreference:"high-performance"})}catch{Jt("#go").textContent="WebGL недоступен";return}Re.setPixelRatio(_n),Re.outputColorSpace=Je,Re.toneMapping=4,Re.toneMappingExposure=1,Re.shadowMap.enabled=!1,Re.autoClear=!1,Re.info.autoReset=!1,Ao.appendChild(Re.domElement),Jp(Math.min(Re.capabilities.getMaxAnisotropy(),i?2:8)),nn=new fn(72,1,.05,160),nn.rotation.order="YXZ",wo(),Ys(15),await gm(),Ys(40),await new Promise(e=>setTimeout(e,30)),De=wm({low:i}),Ys(90),De.redrawMural(),De.redrawDoor(),De.redrawSign(),de=Im({renderer:Re,camera:nn,scene:De.scene,getWorld:()=>De,audio:ui,state:B}),Rm(De.board,de),Um(),Gm(),Io(1),Re.render(De.scene,nn),Ys(100);const t=Jt("#go");t.disabled=!1,t.textContent="Зайти",Jt("#loadbar").classList.add("hidden"),requestAnimationFrame(cf),window.__tour=qm}function Ys(i){const t=Jt("#loadbar i");t&&(t.style.width=i+"%")}function wo(){const i=window.innerWidth,t=window.innerHeight;Re.setSize(i,t,!0),nn.aspect=i/t,nn.fov=i/t<.9?82:72,nn.updateProjectionMatrix()}addEventListener("resize",()=>{Re&&wo()}),addEventListener("orientationchange",()=>setTimeout(()=>Re&&wo(),250));const jc=i=>!i||i==="U"==B.y>1.5;function Dm(i,t){for(const e of Em)if(jc(e[4])&&i>=e[0]&&i<=e[1]&&t>=e[2]&&t<=e[3])return!0;return!1}function Ro(i,t){if(!Dm(i,t))return!0;for(const e of bm)if(jc(e[4])&&i>e[0]-Vs&&i<e[1]+Vs&&t>e[2]-Vs&&t<e[3]+Vs)return!0;return!1}function Zc(i,t){return Ro(i,t)?Ro(i,B.z)?Ro(B.x,t)?!1:(B.z=t,!0):(B.x=i,!0):(B.x=i,B.z=t,!0)}const js={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};addEventListener("keydown",i=>{B.started&&(js[i.code]&&(ge.keys[js[i.code]]=!0,i.preventDefault()),(i.code==="ShiftLeft"||i.code==="ShiftRight")&&(ge.run=!0),i.code==="KeyE"&&!i.repeat&&(B.cardOpen?jr():Qs()),i.code==="Escape"&&B.cardOpen&&jr(),i.code==="Space"&&(i.preventDefault(),i.repeat||Co()),!B.cardOpen&&!B.paused&&!i.repeat&&de&&(i.code==="KeyQ"&&de.switchWeapon(),i.code==="KeyR"&&de.reload(),i.code==="KeyC"&&de.cycleColor(),i.code==="KeyX"&&de.clear()),/^Digit[1-3]$/.test(i.code)&&!i.repeat&&Do(+i.code.slice(5)))}),addEventListener("keyup",i=>{js[i.code]&&(ge.keys[js[i.code]]=!1),(i.code==="ShiftLeft"||i.code==="ShiftRight")&&(ge.run=!1)}),addEventListener("blur",()=>{ge.keys={},ge.run=!1});function Kc(i,t){B.yaw-=i*.0022,B.pitch=Math.max(-1.35,Math.min(1.35,B.pitch-t*.0022))}document.addEventListener("mousemove",i=>{B.locked&&Kc(i.movementX,i.movementY)});let or=!1;function Zs(){if(!(xn||B.locked||or)){or=!0,setTimeout(()=>{or=!1},800);try{const i=Re.domElement.requestPointerLock();i&&i.catch&&i.catch(()=>{or=!1})}catch{or=!1}}}function Wr(){try{document.pointerLockElement&&document.exitPointerLock()}catch{}}document.addEventListener("pointerlockerror",()=>{or=!1}),addEventListener("blur",Wr),addEventListener("pagehide",Wr),addEventListener("beforeunload",Wr),document.addEventListener("visibilitychange",()=>{document.hidden&&Wr()}),document.addEventListener("click",i=>{i.target.closest&&i.target.closest("a[href]")&&Wr()},!0);let vn=null;Ao.addEventListener("pointerdown",i=>{!B.started||B.cardOpen||i.pointerType!=="mouse"||(B.locked?de&&(i.button===0?qr(!0):i.button===2&&de.cycleColor()):(Zs(),vn={x:i.clientX,y:i.clientY,t:performance.now(),moved:0}))}),addEventListener("contextmenu",i=>{B.started&&i.preventDefault()}),addEventListener("wheel",i=>{if(!B.started||B.cardOpen||B.paused||!de)return;const t=performance.now();t-qc<260||(qc=t,de.switchWeapon())},{passive:!0});function qr(i){de&&(i&&(!B.started||B.paused||B.cardOpen)||de.setTrigger(i))}function Co(){!B.started||B.paused||B.cardOpen||!B.grounded||(B.vy=4.3,B.grounded=!1)}const Ks=(i,t,e)=>{const n=Jt(i);n.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation();try{n.setPointerCapture(r.pointerId)}catch{}t()}),e&&["pointerup","pointercancel"].forEach(r=>n.addEventListener(r,e))};Ks("#btnJump",Co),Ks("#btnFire",()=>qr(!0),()=>qr(!1)),Ks("#btnSwap",()=>de&&de.switchWeapon()),Ks("#btnRel",()=>de&&de.reload()),addEventListener("pointermove",i=>{vn&&i.pointerType==="mouse"&&!B.locked&&(Kc(i.clientX-vn.x,i.clientY-vn.y),vn.moved+=Math.abs(i.clientX-vn.x)+Math.abs(i.clientY-vn.y),vn.x=i.clientX,vn.y=i.clientY)}),addEventListener("pointerup",i=>{i.pointerType==="mouse"&&i.button===0&&qr(!1),vn&&vn.moved<6&&performance.now()-vn.t<300&&!B.locked&&Qs(),vn=null}),document.addEventListener("pointerlockchange",()=>{const i=B.locked;B.locked=document.pointerLockElement===Re.domElement,B.locked||qr(!1),i&&!B.locked&&B.started&&!B.cardOpen&&!xn&&sf(!0)});function Jc(i,t){const e=i.firstElementChild,n=44;let r=null,s=0,a=0;function o(f){let u=(f.clientX-s)/n,h=(f.clientY-a)/n;const c=Math.hypot(u,h);c>1&&(u/=c,h/=c),e.style.transform=`translate(${u*n}px,${h*n}px)`,t(u,h)}i.addEventListener("pointerdown",f=>{if(r!==null)return;r=f.pointerId;try{i.setPointerCapture(r)}catch{}const u=i.getBoundingClientRect();s=u.left+u.width/2,a=u.top+u.height/2,o(f),f.preventDefault()}),i.addEventListener("pointermove",f=>{f.pointerId===r&&o(f)});const l=f=>{f.pointerId===r&&(r=null,e.style.transform="",t(0,0))};i.addEventListener("pointerup",l),i.addEventListener("pointercancel",l)}Jc(Jt("#stickL"),(i,t)=>{ge.mx=i,ge.mz=t}),Jc(Jt("#stickR"),(i,t)=>{ge.lx=i,ge.ly=t}),Jt("#actBtn").addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),Qs()});let Ai=null;const Xr=new Map;function Um(){const i=Jt("#markers");De.hotspots.forEach((t,e)=>{const n=document.createElement("div");n.className="mk",n.textContent="+",n.style.display="none",n.addEventListener("pointerdown",r=>{r.stopPropagation()}),n.addEventListener("click",r=>{r.stopPropagation(),$s(t)}),i.appendChild(n),Xr.set(t,n)})}const fi=new D,Qc=new D;function Nm(){nn.getWorldDirection(Qc);let i=null,t=0;const e=nn.position;for(const a of De.hotspots){const o=Xr.get(a);if(a.zone!==B.zone||a.disabled||B.cardOpen||!B.started){o.style.display="none";continue}fi.copy(a.pos).sub(e);const l=fi.length();fi.divideScalar(l);const f=fi.dot(Qc),u=a.zone==="street"?14:6.5;fi.copy(a.pos).project(nn);const h=fi.z<1&&l<u&&f>.2;if(h){o.style.display="flex";const d=(fi.x*.5+.5)*innerWidth,g=(-fi.y*.5+.5)*innerHeight;o.style.left=d+"px",o.style.top=g+"px",o.style.opacity=String(Math.max(.35,Math.min(1,1.5-l/u)))}else o.style.display="none";const c=a.zone==="street"?16:5.2;if(f>.93&&l<c&&h){const d=f-l*.01;d>t&&(t=d,i=a)}}Ai=i,Xr.forEach((a,o)=>a.classList.toggle("focus",o===Ai));const n=Jt("#prompt"),r=Jt("#cross"),s=Jt("#actBtn");Ai?(n.classList.add("on"),r.classList.add("on"),n.lastElementChild.textContent=(Ai.pickup?" Взять: ":" Осмотреть: ")+Ai.title,n.firstElementChild.textContent=xn?"●":"E",s.classList.add("on")):(n.classList.remove("on"),r.classList.remove("on"),s.classList.remove("on"))}const $c="Здесь будет реальная запись: тот же фрагмент до и после сведения",Js={};let Zn=null;function Fm(i){return Js[i]!==void 0?Promise.resolve(Js[i]):fetch("../assets/audio/"+i,{method:"HEAD"}).then(t=>Js[i]=t.ok).catch(()=>Js[i]=!1)}function Yr(){if(Zn){try{Zn.pause()}catch{}Zn=null}const i=Jt("#playBtn");i&&(i.textContent="▶")}function Om(i){const t=Jt("#cardAudio");if(Yr(),!i.audio){t.classList.add("hidden");return}const e=Jt("#playBtn"),n=Jt("#audioMsg");t.classList.remove("hidden"),e.classList.add("hidden"),n.textContent="Проверяю запись…",Fm(i.audio).then(r=>{if(B.cardOpen){if(!r){n.textContent=$c;return}e.classList.remove("hidden"),n.textContent=i.audio.indexOf("before")>0?"Голос до обработки":"После сведения",e.onclick=()=>{if(Zn&&!Zn.paused){Yr();return}Zn=new Audio("../assets/audio/"+i.audio),Zn.onended=Yr,Zn.onerror=()=>{Yr(),e.classList.add("hidden"),n.textContent=$c},Zn.play().then(()=>{e.textContent="⏸"}).catch(()=>{})}}})}function Po(i,t){const e=Jt("#toast");e.innerHTML="<b></b><span></span>",e.firstChild.textContent=i,e.lastChild.textContent=t,e.classList.add("on"),clearTimeout(Po._t),Po._t=setTimeout(()=>e.classList.remove("on"),5500)}function tf(){if(!De||!de||de.S.hasRev)return!1;De.hideRevolverProp();const i=De.hotspots.find(t=>t.id==="revolver");if(i){i.disabled=!0;const t=Xr.get(i);t&&(t.style.display="none")}return de.giveRevolver(),Jt("#btnSwap").classList.remove("hidden"),Jt("#btnRel").classList.remove("hidden"),Po("Револьвер подобран","ЛКМ — огонь · R — перезарядка · Q или колесо — сменить оружие"),!0}function Qs(){B.cardOpen||Ai&&$s(Ai)}let ef=0;function $s(i){if(i.pickup){tf();return}de&&de.setTrigger(!1),B.cardOpen=!0,ef=performance.now(),document.pointerLockElement&&document.exitPointerLock();const t=Jt("#cardImg");i.img?(t.classList.remove("hidden"),t.onerror=()=>{t.onerror=null,t.src="../assets/img/control-1.webp"},t.src=`../assets/img/${i.img}.webp`,t.alt=i.title):t.classList.add("hidden"),Om(i),Jt("#cardTitle").textContent=i.title,Jt("#cardText").textContent=i.text;const e=Jt("#cardBook");i.href?(e.classList.remove("hidden"),e.href=i.href):e.classList.add("hidden"),Jt("#card").classList.remove("hidden"),Jt("#shade").classList.remove("hidden"),ge.keys={},ge.mx=ge.mz=ge.lx=ge.ly=0}function jr(){B.cardOpen&&(Yr(),B.cardOpen=!1,Jt("#card").classList.add("hidden"),Jt("#shade").classList.add("hidden"),xn||Zs())}Jt("#cardClose").addEventListener("click",jr),Jt("#shade").addEventListener("click",()=>{performance.now()-ef>450&&jr()}),Ao.addEventListener("click",i=>{if(!xn||!B.started||B.cardOpen)return;let t=null,e=80;Xr.forEach((n,r)=>{if(n.style.display==="none")return;const s=parseFloat(n.style.left)-i.clientX,a=parseFloat(n.style.top)-i.clientY,o=Math.hypot(s,a);o<e&&(e=o,t=r)}),t&&$s(t)});let Lo=!1;function Io(i,t){const e=Gc[i];B.x=e.x,B.z=e.z,B.yaw=e.yaw,B.pitch=e.pitch,Hs(e.lv||0),B.y=Vr(e.x,e.z),B.vy=0,B.grounded=!0,B.eyeY=B.y+sr,ta(Ws(e.x,e.z,B.y),!0),B.zoneBtn=i,nf()}function Do(i){if(!Gc[i]||Lo)return;Lo=!0;const t=Jt("#fade");t.classList.add("on"),setTimeout(()=>{Io(i),setTimeout(()=>{t.classList.remove("on"),Lo=!1},120)},300)}document.querySelectorAll("#zones button").forEach(i=>i.addEventListener("click",()=>{Do(+i.dataset.z),i.blur()}));function nf(){const i={street:1,entry:1,hall:2,studio:3,chai:4};document.querySelectorAll("#zones button").forEach(t=>t.classList.toggle("on",+t.dataset.z===i[B.zone]))}function ta(i,t){const e=B.zone;B.zone=i,i==="studio"&&e!=="studio"&&B.started&&!B.endShown&&(B.endShown=!0,setTimeout(rf,1500)),De.setVisibility(i),de&&de.invalidate(),De.setZoneLights(i,t);const[n,r]=Tm[i];Jt("#zoneName").textContent=n,Jt("#zoneSub").textContent=r,nf()}function rf(){!B.cardOpen&&!B.paused&&Jt("#endcard").classList.add("on")}Jt("#endClose").addEventListener("click",()=>Jt("#endcard").classList.remove("on"));function sf(i){Jt("#pause").classList.toggle("hidden",!i),B.paused=i}Jt("#resume").addEventListener("click",()=>{sf(!1),xn||Zs()}),Jt("#go").addEventListener("click",()=>{if(!De)return;Jt("#splash").classList.add("hidden"),Jt("#hud").classList.remove("hidden"),xn&&Jt("#touch").classList.remove("hidden"),B.started=!0,document.body.classList.add("started"),setTimeout(()=>document.body.classList.remove("started"),6e3),xn||Zs(),Xs.get("fs")==="1"&&document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(()=>{}),of(!0)});let Ht=null,Zr=null,lr=null,af=0;function Bm(){if(!Ht)try{Ht=new(window.AudioContext||window.webkitAudioContext);const i=Ht.sampleRate*2,t=Ht.createBuffer(1,i,Ht.sampleRate),e=t.getChannelData(0);let n=0;for(let o=0;o<i;o++){const l=Math.random()*2-1;n=(n+.02*l)/1.02,e[o]=n*3.5}const r=Ht.createBufferSource();r.buffer=t,r.loop=!0,lr=Ht.createBiquadFilter(),lr.type="lowpass",lr.frequency.value=220,Zr=Ht.createGain(),Zr.gain.value=0,r.connect(lr).connect(Zr).connect(Ht.destination),r.start();const s=Ht.createOscillator();s.frequency.value=50;const a=Ht.createGain();a.gain.value=.015,s.connect(a).connect(Ht.destination),s.start()}catch{Ht=null}}function zm(){if(!Ht||!B.sound)return;const i=Ht.currentTime,t=Ht.createOscillator(),e=Ht.createGain();t.type="triangle",t.frequency.setValueAtTime(110+Math.random()*30,i),t.frequency.exponentialRampToValueAtTime(40,i+.08),e.gain.setValueAtTime(.12,i),e.gain.exponentialRampToValueAtTime(.001,i+.1),t.connect(e).connect(Ht.destination),t.start(i),t.stop(i+.12)}const ui={shot(){if(!B.sound||!Ht)return;const i=Ht.currentTime,t=Math.floor(Ht.sampleRate*.25),e=Ht.createBuffer(1,t,Ht.sampleRate),n=e.getChannelData(0);for(let d=0;d<t;d++)n[d]=(Math.random()*2-1)*Math.pow(1-d/t,3);const r=Ht.createBufferSource();r.buffer=e;const s=Ht.createBiquadFilter();s.type="bandpass",s.frequency.value=1800,s.Q.value=.6;const a=Ht.createGain();a.gain.value=.7;const o=Ht.createOscillator();o.type="sine",o.frequency.setValueAtTime(150,i),o.frequency.exponentialRampToValueAtTime(40,i+.25);const l=Ht.createGain();l.gain.setValueAtTime(.9,i),l.gain.exponentialRampToValueAtTime(.001,i+.3);const f=Ht.createDelay();f.delayTime.value=.13;const u=Ht.createGain();u.gain.value=.35;const h=Ht.createBiquadFilter();h.type="lowpass",h.frequency.value=1500;const c=Ht.createGain();c.gain.value=.6,c.connect(Ht.destination),r.connect(s).connect(a).connect(c),o.connect(l).connect(c),a.connect(f),l.connect(f),f.connect(h).connect(u).connect(f),h.connect(Ht.destination),r.start(i),o.start(i),o.stop(i+.35)},click(){if(!B.sound||!Ht)return;const i=Ht.currentTime,t=Ht.createOscillator(),e=Ht.createGain();t.type="square",t.frequency.value=1400,e.gain.setValueAtTime(.08,i),e.gain.exponentialRampToValueAtTime(.001,i+.04),t.connect(e).connect(Ht.destination),t.start(i),t.stop(i+.05)},spray(i){if((!Ht||!B.sound)&&(i=!1),i){if(!ui._g){const t=Ht.sampleRate,e=Ht.createBuffer(1,t,Ht.sampleRate),n=e.getChannelData(0);for(let a=0;a<t;a++)n[a]=Math.random()*2-1;const r=Ht.createBufferSource();r.buffer=e,r.loop=!0;const s=Ht.createBiquadFilter();s.type="highpass",s.frequency.value=3500,ui._g=Ht.createGain(),ui._g.gain.value=0,r.connect(s).connect(ui._g).connect(Ht.destination),r.start()}ui._g.gain.setTargetAtTime(.12,Ht.currentTime,.02)}else ui._g&&ui._g.gain.setTargetAtTime(0,Ht.currentTime,.03)}},Uo={x:4.4,y:1,z:1.34},km={studio:0,hall:.55,entry:.78,street:.94,chai:1};let Bn=null,cr=null,hi=null,Kr=null;function Vm(){if(!(Bn||!Ht))try{Bn=new Audio("audio/lofi.mp3"),Bn.loop=!0;const i=Ht.createMediaElementSource(Bn);hi=Ht.createBiquadFilter(),hi.type="lowpass",hi.frequency.value=400,hi.Q.value=.5,cr=Ht.createGain(),cr.gain.value=0,i.connect(hi),Ht.createStereoPanner?(Kr=Ht.createStereoPanner(),hi.connect(Kr),Kr.connect(cr)):hi.connect(cr),cr.connect(Ht.destination),Bn.play().catch(()=>{})}catch{Bn=null}}function Hm(){if(!Bn||!Ht)return;const i=B.x-Uo.x,t=B.z-Uo.z,e=B.y+sr-Uo.y,n=Math.hypot(i,e,t),r=km[B.zone]??.9,s=1/(1+Math.pow(n/2.2,2)),a=B.sound?(.05+.95*s)*(1-.82*r):0,o=Math.max(260,17e3*Math.exp(-.16*n)*(1-.88*r)),l=Ht.currentTime;if(cr.gain.setTargetAtTime(a*.9,l,.12),hi.frequency.setTargetAtTime(o,l,.12),Kr){const f=Math.cos(B.yaw),u=-Math.sin(B.yaw),h=(-i*f-t*u)/Math.max(n,.5);Kr.pan.setTargetAtTime(Math.max(-.7,Math.min(.7,h*.7))*(1-r),l,.1)}window.__lofi={d:+n.toFixed(2),g:+a.toFixed(3),f:Math.round(o),zone:B.zone}}function of(i){B.sound=i,Jt("#snd").textContent=i?"🔊":"🔇",i&&(Bm(),Ht&&Ht.state==="suspended"&&Ht.resume(),Vm(),Bn&&Bn.paused&&Bn.play().catch(()=>{})),Zr&&(Zr.gain.value=i?.03:0)}Jt("#snd").addEventListener("click",()=>of(!B.sound));const Jr=Jt("#minimap"),ke=Jr.getContext("2d"),ea={x0:-4.2,z0:-1.6,s:11.4};let Qr=null;function na(i,t){return[(i-ea.x0)*ea.s,(t-ea.z0)*ea.s]}function Gm(){Qr=document.createElement("canvas"),Qr.width=Jr.width,Qr.height=Jr.height;const i=Qr.getContext("2d");i.fillStyle="rgba(8,10,16,.9)",i.fillRect(0,0,Jr.width,Jr.height);const t=(e,n,r,s,a,o)=>{const[l,f]=na(e,n),[u,h]=na(r,s);i.fillStyle=a,i.fillRect(l,f,u-l,h-f),o&&(i.strokeStyle=o,i.lineWidth=2,i.strokeRect(l,f,u-l,h-f))};t(2.8,5.6,8.6,16,"rgba(70,74,92,.5)",null),t(-2,5.6,2.8,7.1,"rgba(120,120,130,.6)","#8a8f9a"),t(-3.4,5.6,-2,7.1,"rgba(120,120,130,.45)","#8a8f9a"),t(-3.4,2.2,-.2,5.4,"rgba(150,60,200,.55)","#c070ff"),t(0,0,3.76,5.14,"rgba(40,150,70,.55)","#35e06b"),t(4.01,0,6.91,5.14,"rgba(60,100,220,.55)","#6a95ff"),i.fillStyle="#fff",i.font="600 15px Manrope, Arial, sans-serif",i.textAlign="center",[["ул.",5.8,11],["зал",1.9,2.7],["звук",5.45,2],["тамб.",-1.8,3.8]].forEach(([e,n,r])=>{const[s,a]=na(n,r);i.fillText(e,s,a)})}function Wm(){ke.drawImage(Qr,0,0);const[i,t]=na(B.x,B.z);ke.save(),ke.translate(i,t),ke.rotate(-B.yaw),ke.fillStyle="rgba(255,59,48,.25)",ke.beginPath(),ke.moveTo(0,0),ke.arc(0,0,40,-Math.PI/2-.6,-Math.PI/2+.6),ke.fill(),ke.fillStyle="#ff3b30",ke.strokeStyle="#fff",ke.lineWidth=2,ke.beginPath(),ke.moveTo(0,-9),ke.lineTo(7,8),ke.lineTo(-7,8),ke.closePath(),ke.fill(),ke.stroke(),ke.restore()}let lf=performance.now(),No=0,Fo=0,ia=0,ra=0;function cf(i){requestAnimationFrame(cf);let t=(i-lf)/1e3;if(lf=i,t>.1&&(t=.1),B.started&&!B.paused&&!B.cardOpen){if(xn&&(ge.lx||ge.ly)){const l=f=>Math.sign(f)*Math.pow(Math.abs(f),1.7);B.yaw-=l(ge.lx)*t*1.5,B.pitch=Math.max(-1.3,Math.min(1.3,B.pitch-l(ge.ly)*t*1))}let s=0,a=0;ge.keys.f&&(a-=1),ge.keys.b&&(a+=1),ge.keys.l&&(s-=1),ge.keys.r&&(s+=1),s+=ge.mx,a+=ge.mz;const o=Math.min(1,Math.hypot(s,a));if(To=o*(ge.run?1.5:1),o>.05){const l=(ge.run?4.4:2.5)*o*t,f=Math.hypot(s,a);s/=f,a/=f;const u=Math.sin(B.yaw),h=Math.cos(B.yaw),c=(s*h+a*u)*l,d=(-s*u+a*h)*l,g=B.x,v=B.z;Zc(B.x+c,B.z+d);const m=Math.hypot(B.x-g,B.z-v);B.bob+=m*5.2,m>0&&B.bob-af>2.6&&(af=B.bob,zm())}}B.started&&!B.paused&&!B.cardOpen&&(ge.keys.f||ge.keys.b||ge.keys.l||ge.keys.r||ge.mx||ge.mz)||(To=0),Hs(B.y);const e=Vr(B.x,B.z);if(B.grounded&&(e<B.y-.3?(B.grounded=!1,B.vy=0):B.y=e),!B.grounded){B.vy-=13*t,B.y+=B.vy*t;const a=(B.y>1.5&&vo(B.x,B.z)?6.6:B.z>=5.5&&B.x>-.8?99:2.96)-.12-sr;B.y>a&&(B.y=a,B.vy>0&&(B.vy=0)),B.y<=e&&(B.y=e,B.vy=0,B.grounded=!0)}const n=B.y+sr;B.eyeY=B.grounded?B.eyeY+(n-B.eyeY)*Math.min(1,t*14):n;const r=Ws(B.x,B.z,B.y);if(r!==B.zone&&ta(r,!1),De&&De.update(t,B.x,B.z,B.zone),Hm(),nn.position.set(B.x,B.eyeY+Math.sin(B.bob)*.018,B.z),nn.rotation.set(B.pitch,B.yaw,0),nn.updateMatrixWorld(),De&&(Nm(),de&&de.update(t,{speed:To,airborne:!B.grounded,vy:B.vy}),Re.clear(),Re.info.reset(),Re.render(De.scene,window.__topCam||nn),de&&B.started&&de.render()),No+=t,No>.066&&(No=0,Wm()),lr&&(lr.frequency.value=B.zone==="street"?700:260),Gr==="auto"&&!Xc&&B.started&&(Fo+=t,ia++,ra-=t,ia>=45)){const s=Fo/ia;Fo=0,ia=0,ra<=0&&(s>.026&&_n>.6?(_n=Math.max(.6,_n-.15),Re.setPixelRatio(_n),ra=1.5):s<.0155&&_n<Hr&&(_n=Math.min(Hr,_n+.1),Re.setPixelRatio(_n),ra=3))}}Jt("#q").addEventListener("change",()=>{Gr=Jt("#q").value,Re&&(_n=Gr==="low"?1:Hr,Re.setPixelRatio(_n))});const qm={sim:i=>{const t=[];for(const[e,n]of i){let r=0;for(;r++<2500;){const s=e-B.x,a=n-B.z,o=Math.hypot(s,a);if(o<.12)break;const l=Math.min(.06,o);Zc(B.x+s/o*l,B.z+a/o*l),Hs(B.y),B.y=Vr(B.x,B.z)}t.push([e,n,+B.x.toFixed(2),+B.z.toFixed(2),+B.y.toFixed(2),r<2500])}return ta(Ws(B.x,B.z,B.y),!0),t},top:(i,t,e,n)=>{for(const s in De.groups)De.groups[s].visible=!0;const r=new Ba(-e*nn.aspect,e*nn.aspect,e,-e,.1,200);r.position.set(i,n||60,t),r.up.set(0,0,-1),r.lookAt(i,0,t),r.updateMatrixWorld(),window.__topCam=r},teleport:i=>{Io(i)},teleportFade:Do,setView:(i,t,e,n,r)=>{B.x=i,B.z=t,B.yaw=e,B.pitch=n,Hs(r||0),B.y=Vr(i,t),B.vy=0,B.grounded=!0,B.eyeY=B.y+sr,ta(Ws(i,t,B.y),!0)},start:()=>Jt("#go").click(),state:B,input:ge,get world(){return De},info:()=>({calls:Re.info.render.calls,tris:Re.info.render.triangles,tex:Re.info.memory.textures,geo:Re.info.memory.geometries,pr:_n}),fire:()=>de.fire(),switchWeapon:i=>de.switchWeapon(i),setColor:i=>de.cycleColor(i),clearAll:()=>de.clear(),counts:()=>de.counts(),sprayAt:(i,t,e,n,r,s,a)=>{const o=D;return i===void 0?de.sprayAt(void 0,void 0,1):de.sprayAt(new o(i,t,e),new o(n,r,s).normalize(),a||1)},fireAt:(i,t,e,n,r,s)=>{const a=D;return de.S.cd=0,de.S.weapon!==0&&de.switchWeapon(0),de.fire(new a(i,t,e),new a(n,r,s).normalize())},get weapons(){return de},jump:Co,showEnd:rf,pickRevolver:tf,interact:Qs,closeCard:jr,hotspots:()=>De.hotspots.map(i=>i.id),open:i=>$s(De.hotspots.find(t=>t.id===i)),fixed:()=>{Xc=!0}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Yc):Yc()})();
