(function(){"use strict";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var mc,gc;const Ns="170",Cn="",Qe="srgb",vi="srgb-linear",Lr="linear",Se="srgb",no="300 es";class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fs=Math.PI/180,Os=180/Math.PI;function Pn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function xc(i,t){return(i%t+t)%t}function Bs(i,t,e){return(1-e)*i+e*t}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,r,s,a,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=r[0],m=r[3],d=r[6],M=r[1],E=r[4],x=r[7],O=r[2],w=r[5],C=r[8];return s[0]=a*_+o*M+l*O,s[3]=a*m+o*E+l*w,s[6]=a*d+o*x+l*C,s[1]=c*_+u*M+h*O,s[4]=c*m+u*E+h*w,s[7]=c*d+u*x+h*C,s[2]=f*_+p*M+g*O,s[5]=f*m+p*E+g*w,s[8]=f*d+p*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=e*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*c-u*n)*_,t[2]=(o*n-r*a)*_,t[3]=f*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(zs.makeScale(t,e)),this}rotate(t){return this.premultiply(zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(zs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new $t;function io(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vc(){const i=Dr("canvas");return i.style.display="block",i}const ro={};function Ji(i){i in ro||(ro[i]=!0,console.warn(i))}function Sc(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Mc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fe={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Se&&(i.r=Ln(i.r),i.g=Ln(i.g),i.b=Ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Se&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cn?Lr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const so=[.64,.33,.3,.6,.15,.06],ao=[.2126,.7152,.0722],oo=[.3127,.329],lo=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),co=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);fe.define({[vi]:{primaries:so,whitePoint:oo,transfer:Lr,toXYZ:lo,fromXYZ:co,luminanceCoefficients:ao,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:so,whitePoint:oo,transfer:Se,toXYZ:lo,fromXYZ:co,luminanceCoefficients:ao,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});let yi;class Ec{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yi===void 0&&(yi=Dr("canvas")),yi.width=t.width,yi.height=t.height;const n=yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ln(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ac=0;class fo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ks(r[a].image)):s.push(ks(r[a]))}else s=ks(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ks(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tc=0;class We extends Si{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=We.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Pn(),this.name="",this.source=new fo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null,We.DEFAULT_MAPPING=300,We.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,r=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,x=(p+1)/2,O=(d+1)/2,w=(u+f)/4,C=(h+_)/4,I=(g+m)/4;return E>x&&E>O?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=w/n,s=C/n):x>O?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=w/r,s=I/r):O<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),n=C/s,r=I/s),this.set(n,r,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bc extends Si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new We(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends bc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class uo extends We{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wc extends We{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*_,M=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const O=Math.sqrt(E),w=Math.atan2(O,d*M);m=Math.sin(m*w)/O,o=Math.sin(o*w)/O}const x=o*M;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const O=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=O,c*=O,u*=O,h*=O}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-o*p,t[e+2]=c*g+u*p+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ho.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ho.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vs.copy(this).projectOnVector(t),this.sub(Vs)}reflect(t){return this.sub(Vs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new R,ho=new Qi;class ii{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(s,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),Ur.subVectors(this.max,$i),Ei.subVectors(t.a,$i),Ai.subVectors(t.b,$i),Ti.subVectors(t.c,$i),Vn.subVectors(Ai,Ei),Hn.subVectors(Ti,Ai),ri.subVectors(Ei,Ti);let e=[0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,0,-ri.z,ri.y,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,ri.z,0,-ri.x,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0,-ri.y,ri.x,0];return!Hs(e,Ei,Ai,Ti,Ur)||(e=[1,0,0,0,1,0,0,0,1],!Hs(e,Ei,Ai,Ti,Ur))?!1:(Nr.crossVectors(Vn,Hn),e=[Nr.x,Nr.y,Nr.z],Hs(e,Ei,Ai,Ti,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new R,new R,new R,new R,new R,new R,new R,new R],xn=new R,Ir=new ii,Ei=new R,Ai=new R,Ti=new R,Vn=new R,Hn=new R,ri=new R,$i=new R,Ur=new R,Nr=new R,si=new R;function Hs(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){si.fromArray(i,s);const o=r.x*Math.abs(si.x)+r.y*Math.abs(si.y)+r.z*Math.abs(si.z),l=t.dot(si),c=e.dot(si),u=n.dot(si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Rc=new ii,tr=new R,Gs=new R;class bi{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rc.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);const e=tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(tr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(Gs)),this.expandByPoint(tr.copy(t.center).sub(Gs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new R,Ws=new R,Fr=new R,Gn=new R,qs=new R,Or=new R,Xs=new R;class Ys{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ws.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(Ws);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Fr),o=Gn.dot(this.direction),l=-Gn.dot(Fr),c=Gn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ws).addScaledVector(Fr,f),p}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),r=In.dot(In)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,r,s){qs.subVectors(e,t),Or.subVectors(n,t),Xs.crossVectors(qs,Or);let a=this.direction.dot(Xs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,t);const l=o*this.direction.dot(Or.crossVectors(Gn,Or));if(l<0)return null;const c=o*this.direction.dot(qs.cross(Gn));if(c<0||l+c>a)return null;const u=-o*Gn.dot(Xs);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,n,r,s,a,o,l,c,u,h,f,p,g,_,m){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,h,f,p,g,_,m)}set(t,e,n,r,s,a,o,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/wi.setFromMatrixColumn(t,0).length(),s=1/wi.setFromMatrixColumn(t,1).length(),a=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cc,t,Pc)}lookAt(t,e,n){const r=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Wn.crossVectors(n,ln),Wn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Wn.crossVectors(n,ln)),Wn.normalize(),Br.crossVectors(ln,Wn),r[0]=Wn.x,r[4]=Br.x,r[8]=ln.x,r[1]=Wn.y,r[5]=Br.y,r[9]=ln.y,r[2]=Wn.z,r[6]=Br.z,r[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],M=n[3],E=n[7],x=n[11],O=n[15],w=r[0],C=r[4],I=r[8],A=r[12],S=r[1],P=r[5],W=r[9],V=r[13],K=r[2],nt=r[6],J=r[10],U=r[14],X=r[3],xt=r[7],At=r[11],Ut=r[15];return s[0]=a*w+o*S+l*K+c*X,s[4]=a*C+o*P+l*nt+c*xt,s[8]=a*I+o*W+l*J+c*At,s[12]=a*A+o*V+l*U+c*Ut,s[1]=u*w+h*S+f*K+p*X,s[5]=u*C+h*P+f*nt+p*xt,s[9]=u*I+h*W+f*J+p*At,s[13]=u*A+h*V+f*U+p*Ut,s[2]=g*w+_*S+m*K+d*X,s[6]=g*C+_*P+m*nt+d*xt,s[10]=g*I+_*W+m*J+d*At,s[14]=g*A+_*V+m*U+d*Ut,s[3]=M*w+E*S+x*K+O*X,s[7]=M*C+E*P+x*nt+O*xt,s[11]=M*I+E*W+x*J+O*At,s[15]=M*A+E*V+x*U+O*Ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*h-r*c*h-s*o*f+n*c*f+r*o*p-n*l*p)+_*(+e*l*p-e*c*f+s*a*f-r*a*p+r*c*u-s*l*u)+m*(+e*c*h-e*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+d*(-r*o*u-e*l*h+e*o*f+r*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],M=h*m*c-_*f*c+_*l*p-o*m*p-h*l*d+o*f*d,E=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,x=u*_*c-g*h*c+g*o*p-a*_*p-u*o*d+a*h*d,O=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,w=e*M+n*E+r*x+s*O;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=M*C,t[1]=(_*f*s-h*m*s-_*r*p+n*m*p+h*r*d-n*f*d)*C,t[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*d+n*l*d)*C,t[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*p-n*l*p)*C,t[4]=E*C,t[5]=(u*m*s-g*f*s+g*r*p-e*m*p-u*r*d+e*f*d)*C,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*d-e*l*d)*C,t[7]=(a*f*s-u*l*s+u*r*c-e*f*c-a*r*p+e*l*p)*C,t[8]=x*C,t[9]=(g*h*s-u*_*s-g*n*p+e*_*p+u*n*d-e*h*d)*C,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*d+e*o*d)*C,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*p-e*o*p)*C,t[12]=O*C,t[13]=(u*_*r-g*h*r+g*n*f-e*_*f-u*n*m+e*h*m)*C,t[14]=(g*o*r-a*_*r-g*n*l+e*_*l+a*n*m-e*o*m)*C,t[15]=(a*h*r-u*o*r+u*n*l-e*h*l-a*n*f+e*o*f)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,g=s*h,_=a*u,m=a*h,d=o*h,M=l*c,E=l*u,x=l*h,O=n.x,w=n.y,C=n.z;return r[0]=(1-(_+d))*O,r[1]=(p+x)*O,r[2]=(g-E)*O,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(f+d))*w,r[6]=(m+M)*w,r[7]=0,r[8]=(g+E)*C,r[9]=(m-M)*C,r[10]=(1-(f+_))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=wi.set(r[0],r[1],r[2]).length();const a=wi.set(r[4],r[5],r[6]).length(),o=wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],vn.copy(this);const c=1/s,u=1/a,h=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,e.setFromRotationMatrix(vn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=2e3){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r);let p,g;if(o===2e3)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===2001)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=2e3){const l=this.elements,c=1/(e-t),u=1/(n-r),h=1/(a-s),f=(e+t)*c,p=(n+r)*u;let g,_;if(o===2e3)g=(a+s)*h,_=-2*h;else if(o===2001)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new R,vn=new xe,Cc=new R(0,0,0),Pc=new R(1,1,1),Wn=new R,Br=new R,ln=new R,po=new xe,mo=new Qi;class Sn{constructor(t=0,e=0,n=0,r=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return po.makeRotationFromQuaternion(t),this.setFromRotationMatrix(po,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mo.setFromEuler(this),this.setFromQuaternion(mo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class js{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lc=0;const go=new R,Ri=new Qi,Un=new xe,zr=new R,er=new R,Dc=new R,Ic=new Qi,_o=new R(1,0,0),xo=new R(0,1,0),vo=new R(0,0,1),So={type:"added"},Uc={type:"removed"},Ci={type:"childadded",child:null},Zs={type:"childremoved",child:null};class Fe extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new R,e=new Sn,n=new Qi,r=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xe},normalMatrix:{value:new $t}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(_o,t)}rotateY(t){return this.rotateOnAxis(xo,t)}rotateZ(t){return this.rotateOnAxis(vo,t)}translateOnAxis(t,e){return go.copy(t).applyQuaternion(this.quaternion),this.position.add(go.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_o,t)}translateY(t){return this.translateOnAxis(xo,t)}translateZ(t){return this.translateOnAxis(vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zr.copy(t):zr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(er,zr,this.up):Un.lookAt(zr,er,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(Un),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(So),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uc),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(So),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,Dc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Ic,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Fe.DEFAULT_UP=new R(0,1,0),Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0,Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new R,Nn=new R,Ks=new R,Fn=new R,Pi=new R,Li=new R,Mo=new R,Js=new R,Qs=new R,$s=new R,ta=new ye,ea=new ye,na=new ye;class mn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Mn.subVectors(t,e),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Mn.subVectors(r,e),Nn.subVectors(n,e),Ks.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(Nn),l=Mn.dot(Ks),c=Nn.dot(Nn),u=Nn.dot(Ks),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return ta.setScalar(0),ea.setScalar(0),na.setScalar(0),ta.fromBufferAttribute(t,e),ea.fromBufferAttribute(t,n),na.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ta,s.x),a.addScaledVector(ea,s.y),a.addScaledVector(na,s.z),a}static isFrontFacing(t,e,n,r){return Mn.subVectors(n,e),Nn.subVectors(t,e),Mn.cross(Nn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),Mn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Pi.subVectors(r,n),Li.subVectors(s,n),Js.subVectors(t,n);const l=Pi.dot(Js),c=Li.dot(Js);if(l<=0&&c<=0)return e.copy(n);Qs.subVectors(t,r);const u=Pi.dot(Qs),h=Li.dot(Qs);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Pi,a);$s.subVectors(t,s);const p=Pi.dot($s),g=Li.dot($s);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Li,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Mo.subVectors(s,r),o=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(Mo,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},kr={h:0,s:0,l:0};function ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=fe.workingColorSpace){if(t=xc(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ia(a,s,t+1/3),this.g=ia(a,s,t),this.b=ia(a,s,t-1/3)}return fe.toWorkingColorSpace(this,r),this}setStyle(t,e=Qe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=yo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return fe.fromWorkingColorSpace(je.copy(this),t),Math.round(Ye(je.r*255,0,255))*65536+Math.round(Ye(je.g*255,0,255))*256+Math.round(Ye(je.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(je.copy(this),e);const n=je.r,r=je.g,s=je.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Qe){fe.fromWorkingColorSpace(je.copy(this),t);const e=je.r,n=je.g,r=je.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(kr);const n=Bs(qn.h,kr.h,e),r=Bs(qn.s,kr.s,e),s=Bs(qn.l,kr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Jt;Jt.NAMES=yo;let Nc=0;class Xn extends Si{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Pn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class En extends Xn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new R,Vr=new Et;class sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vr.fromBufferAttribute(this,e),Vr.applyMatrix3(t),this.setXY(e,Vr.x,Vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),r=Me(r,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class Eo extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ao extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Fc=0;const gn=new xe,ra=new Fe,Di=new R,cn=new ii,nr=new ii,Ge=new R;class Ze extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(io(t)?Ao:Eo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return ra.lookAt(t),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(cn.min,nr.min),cn.expandByPoint(Ge),Ge.addVectors(cn.max,nr.max),cn.expandByPoint(Ge)):(cn.expandByPoint(nr.min),cn.expandByPoint(nr.max))}cn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ge.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ge));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ge.fromBufferAttribute(o,c),l&&(Di.fromBufferAttribute(t,c),Ge.add(Di)),r=Math.max(r,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new R,l[I]=new R;const c=new R,u=new R,h=new R,f=new Et,p=new Et,g=new Et,_=new R,m=new R;function d(I,A,S){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,I),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[I].add(_),o[A].add(_),o[S].add(_),l[I].add(m),l[A].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,A=M.length;I<A;++I){const S=M[I],P=S.start,W=S.count;for(let V=P,K=P+W;V<K;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const E=new R,x=new R,O=new R,w=new R;function C(I){O.fromBufferAttribute(r,I),w.copy(O);const A=o[I];E.copy(A),E.sub(O.multiplyScalar(O.dot(A))).normalize(),x.crossVectors(w,A);const P=x.dot(l[I])<0?-1:1;a.setXYZW(I,E.x,E.y,E.z,P)}for(let I=0,A=M.length;I<A;++I){const S=M[I],P=S.start,W=S.count;for(let V=P,K=P+W;V<K;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new R,s=new R,a=new R,o=new R,l=new R,c=new R,u=new R,h=new R;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new sn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const To=new xe,ai=new Ys,Hr=new bi,bo=new R,Gr=new R,Wr=new R,qr=new R,sa=new R,Xr=new R,wo=new R,Yr=new R;class re extends Fe{constructor(t=new Ze,e=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(sa.fromBufferAttribute(h,t),a?Xr.addScaledVector(sa,u):Xr.addScaledVector(sa.sub(e),u))}e.add(Xr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),ai.copy(t.ray).recast(t.near),!(Hr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Hr,bo)===null||ai.origin.distanceToSquared(bo)>(t.far-t.near)**2))&&(To.copy(s).invert(),ai.copy(t.ray).applyMatrix4(To),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,O=E;x<O;x+=3){const w=o.getX(x),C=o.getX(x+1),I=o.getX(x+2);r=jr(this,d,t,n,c,u,h,w,C,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);r=jr(this,a,t,n,c,u,h,M,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,O=E;x<O;x+=3){const w=x,C=x+1,I=x+2;r=jr(this,d,t,n,c,u,h,w,C,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=m,E=m+1,x=m+2;r=jr(this,a,t,n,c,u,h,M,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Oc(i,t,e,n,r,s,a,o){let l;if(t.side===1?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===0,o),l===null)return null;Yr.copy(o),Yr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Yr);return c<e.near||c>e.far?null:{distance:c,point:Yr.clone(),object:i}}function jr(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Gr),i.getVertexPosition(l,Wr),i.getVertexPosition(c,qr);const u=Oc(i,t,e,n,Gr,Wr,qr,wo);if(u){const h=new R;mn.getBarycoord(wo,Gr,Wr,qr,h),r&&(u.uv=mn.getInterpolatedAttribute(r,o,l,c,h,new Et)),s&&(u.uv1=mn.getInterpolatedAttribute(s,o,l,c,h,new Et)),a&&(u.normal=mn.getInterpolatedAttribute(a,o,l,c,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new R,materialIndex:0};mn.getNormal(Gr,Wr,qr,f.normal),u.face=f,u.barycoord=h}return u}class On extends Ze{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(h,2));function g(_,m,d,M,E,x,O,w,C,I,A){const S=x/C,P=O/I,W=x/2,V=O/2,K=w/2,nt=C+1,J=I+1;let U=0,X=0;const xt=new R;for(let At=0;At<J;At++){const Ut=At*P-V;for(let Bt=0;Bt<nt;Bt++){const ce=Bt*S-W;xt[_]=ce*M,xt[m]=Ut*E,xt[d]=K,c.push(xt.x,xt.y,xt.z),xt[_]=0,xt[m]=0,xt[d]=w>0?1:-1,u.push(xt.x,xt.y,xt.z),h.push(Bt/C),h.push(1-At/I),U+=1}}for(let At=0;At<I;At++)for(let Ut=0;Ut<C;Ut++){const Bt=f+Ut+nt*At,ce=f+Ut+nt*(At+1),Q=f+(Ut+1)+nt*(At+1),ft=f+(Ut+1)+nt*At;l.push(Bt,ce,ft),l.push(ce,Q,ft),X+=6}o.addGroup(p,X,A),p+=X,f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ii(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=Ii(i[e]);for(const r in n)t[r]=n[r]}return t}function Bc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ro(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const zc={clone:Ii,merge:$e};var kc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Xn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kc,this.fragmentShader=Vc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=Bc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Co extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new R,Po=new Et,Lo=new Et;class an extends Co{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Po,Lo),e.subVectors(Lo,Po)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Ni=1;class Hc extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(Ui,Ni,t,e);r.layers=this.layers,this.add(r);const s=new an(Ui,Ni,t,e);s.layers=this.layers,this.add(s);const a=new an(Ui,Ni,t,e);a.layers=this.layers,this.add(a);const o=new an(Ui,Ni,t,e);o.layers=this.layers,this.add(o);const l=new an(Ui,Ni,t,e);l.layers=this.layers,this.add(l);const c=new an(Ui,Ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Do extends We{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gc extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Do(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new On(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;const a=new re(r,s),o=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Hc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const aa=new R,Wc=new R,qc=new $t;class oi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=aa.subVectors(n,e).cross(Wc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(aa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qc.getNormalMatrix(t),r=this.coplanarPoint(aa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new bi,Zr=new R;class oa{constructor(t=new oi,e=new oi,n=new oi,r=new oi,s=new oi,a=new oi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],M=r[13],E=r[14],x=r[15];if(n[0].setComponents(l-s,f-c,m-p,x-d).normalize(),n[1].setComponents(l+s,f+c,m+p,x+d).normalize(),n[2].setComponents(l+a,f+u,m+g,x+M).normalize(),n[3].setComponents(l-a,f-u,m-g,x-M).normalize(),n[4].setComponents(l-o,f-h,m-_,x-E).normalize(),e===2e3)n[5].setComponents(l+o,f+h,m+_,x+E).normalize();else if(e===2001)n[5].setComponents(o,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Zr.x=r.normal.x>0?t.max.x:t.min.x,Zr.y=r.normal.y>0?t.max.y:t.min.y,Zr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Io(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Xc(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class An extends Ze{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const M=d*f-a;for(let E=0;E<c;E++){const x=E*h-s;g.push(x,-M,0),_.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const E=M+c*d,x=M+c*(d+1),O=M+1+c*(d+1),w=M+1+c*d;p.push(E,x,w),p.push(x,O,w)}this.setIndex(p),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.width,t.height,t.widthSegments,t.heightSegments)}}var Yc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jc=`#ifdef USE_ALPHAHASH
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
#endif`,Zc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$c=`#ifdef USE_AOMAP
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
#endif`,tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ef=`#ifdef USE_BATCHING
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
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,of=`#ifdef USE_IRIDESCENCE
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
#endif`,lf=`#ifdef USE_BUMPMAP
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_f=`#define PI 3.141592653589793
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
} // validated`,xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vf=`vec3 transformedNormal = objectNormal;
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
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Af="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,If=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,Ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
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
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
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
#endif`,Xf=`struct PhysicalMaterial {
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
}`,Yf=`
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
#endif`,jf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iu=`#if defined( USE_POINTS_UV )
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
#endif`,ru=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,su=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,au=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ou=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cu=`#ifdef USE_MORPHTARGETS
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
#endif`,fu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gu=`#ifdef USE_NORMALMAP
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
#endif`,_u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Su=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Eu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Au=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ru=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Du=`float getShadowMask() {
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
}`,Iu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uu=`#ifdef USE_SKINNING
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
#endif`,Nu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fu=`#ifdef USE_SKINNING
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
#endif`,Ou=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ku=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vu=`#ifdef USE_TRANSMISSION
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
#endif`,Hu=`#ifdef USE_TRANSMISSION
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
#endif`,Gu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ee={alphahash_fragment:Yc,alphahash_pars_fragment:jc,alphamap_fragment:Zc,alphamap_pars_fragment:Kc,alphatest_fragment:Jc,alphatest_pars_fragment:Qc,aomap_fragment:$c,aomap_pars_fragment:tf,batching_pars_vertex:ef,batching_vertex:nf,begin_vertex:rf,beginnormal_vertex:sf,bsdfs:af,iridescence_fragment:of,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:ff,clipping_planes_pars_vertex:uf,clipping_planes_vertex:hf,color_fragment:df,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:_f,cube_uv_reflection_fragment:xf,defaultnormal_vertex:vf,displacementmap_pars_vertex:Sf,displacementmap_vertex:Mf,emissivemap_fragment:yf,emissivemap_pars_fragment:Ef,colorspace_fragment:Af,colorspace_pars_fragment:Tf,envmap_fragment:bf,envmap_common_pars_fragment:wf,envmap_pars_fragment:Rf,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:kf,envmap_vertex:Pf,fog_vertex:Lf,fog_pars_vertex:Df,fog_fragment:If,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Ff,lights_lambert_fragment:Of,lights_lambert_pars_fragment:Bf,lights_pars_begin:zf,lights_toon_fragment:Vf,lights_toon_pars_fragment:Hf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Wf,lights_physical_fragment:qf,lights_physical_pars_fragment:Xf,lights_fragment_begin:Yf,lights_fragment_maps:jf,lights_fragment_end:Zf,logdepthbuf_fragment:Kf,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:Qf,logdepthbuf_vertex:$f,map_fragment:tu,map_pars_fragment:eu,map_particle_fragment:nu,map_particle_pars_fragment:iu,metalnessmap_fragment:ru,metalnessmap_pars_fragment:su,morphinstance_vertex:au,morphcolor_vertex:ou,morphnormal_vertex:lu,morphtarget_pars_vertex:cu,morphtarget_vertex:fu,normal_fragment_begin:uu,normal_fragment_maps:hu,normal_pars_fragment:du,normal_pars_vertex:pu,normal_vertex:mu,normalmap_pars_fragment:gu,clearcoat_normal_fragment_begin:_u,clearcoat_normal_fragment_maps:xu,clearcoat_pars_fragment:vu,iridescence_pars_fragment:Su,opaque_fragment:Mu,packing:yu,premultiplied_alpha_fragment:Eu,project_vertex:Au,dithering_fragment:Tu,dithering_pars_fragment:bu,roughnessmap_fragment:wu,roughnessmap_pars_fragment:Ru,shadowmap_pars_fragment:Cu,shadowmap_pars_vertex:Pu,shadowmap_vertex:Lu,shadowmask_pars_fragment:Du,skinbase_vertex:Iu,skinning_pars_vertex:Uu,skinning_vertex:Nu,skinnormal_vertex:Fu,specularmap_fragment:Ou,specularmap_pars_fragment:Bu,tonemapping_fragment:zu,tonemapping_pars_fragment:ku,transmission_fragment:Vu,transmission_pars_fragment:Hu,uv_pars_fragment:Gu,uv_pars_vertex:Wu,uv_vertex:qu,worldpos_vertex:Xu,background_vert:`varying vec2 vUv;
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
}`},St={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Tn={basic:{uniforms:$e([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:$e([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:$e([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:$e([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:$e([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:$e([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:$e([St.points,St.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:$e([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:$e([St.common,St.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:$e([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:$e([St.sprite,St.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:$e([St.common,St.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:$e([St.lights,St.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Tn.physical={uniforms:$e([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Kr={r:0,b:0,g:0},ci=new Sn,Yu=new xe;function ju(i,t,e,n,r,s,a){const o=new Jt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?e:t).get(E)),E}function _(M){let E=!1;const x=g(M);x===null?d(o,l):x&&x.isColor&&(d(x,1),E=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,E){const x=g(E);x&&(x.isCubeTexture||x.mapping===306)?(u===void 0&&(u=new re(new On(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Ii(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ci.copy(E.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yu.makeRotationFromEuler(ci)),u.material.toneMapped=fe.getTransfer(x.colorSpace)!==Se,(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new re(new An(2,2),new Yn({name:"BackgroundMaterial",uniforms:Ii(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=fe.getTransfer(x.colorSpace)!==Se,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,E){M.getRGB(Kr,Ro(i)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(o,l)},render:_,addToRenderList:m}}function Zu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(S,P,W,V,K){let nt=!1;const J=h(V,W,P);s!==J&&(s=J,c(s.object)),nt=p(S,V,W,K),nt&&g(S,V,W,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(nt||a)&&(a=!1,x(S,P,W,V),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,P,W){const V=W.wireframe===!0;let K=n[S.id];K===void 0&&(K={},n[S.id]=K);let nt=K[P.id];nt===void 0&&(nt={},K[P.id]=nt);let J=nt[V];return J===void 0&&(J=f(l()),nt[V]=J),J}function f(S){const P=[],W=[],V=[];for(let K=0;K<e;K++)P[K]=0,W[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,P,W,V){const K=s.attributes,nt=P.attributes;let J=0;const U=W.getAttributes();for(const X in U)if(U[X].location>=0){const At=K[X];let Ut=nt[X];if(Ut===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Ut=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Ut=S.instanceColor)),At===void 0||At.attribute!==Ut||Ut&&At.data!==Ut.data)return!0;J++}return s.attributesNum!==J||s.index!==V}function g(S,P,W,V){const K={},nt=P.attributes;let J=0;const U=W.getAttributes();for(const X in U)if(U[X].location>=0){let At=nt[X];At===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(At=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(At=S.instanceColor));const Ut={};Ut.attribute=At,At&&At.data&&(Ut.data=At.data),K[X]=Ut,J++}s.attributes=K,s.attributesNum=J,s.index=V}function _(){const S=s.newAttributes;for(let P=0,W=S.length;P<W;P++)S[P]=0}function m(S){d(S,0)}function d(S,P){const W=s.newAttributes,V=s.enabledAttributes,K=s.attributeDivisors;W[S]=1,V[S]===0&&(i.enableVertexAttribArray(S),V[S]=1),K[S]!==P&&(i.vertexAttribDivisor(S,P),K[S]=P)}function M(){const S=s.newAttributes,P=s.enabledAttributes;for(let W=0,V=P.length;W<V;W++)P[W]!==S[W]&&(i.disableVertexAttribArray(W),P[W]=0)}function E(S,P,W,V,K,nt,J){J===!0?i.vertexAttribIPointer(S,P,W,K,nt):i.vertexAttribPointer(S,P,W,V,K,nt)}function x(S,P,W,V){_();const K=V.attributes,nt=W.getAttributes(),J=P.defaultAttributeValues;for(const U in nt){const X=nt[U];if(X.location>=0){let xt=K[U];if(xt===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(xt=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(xt=S.instanceColor)),xt!==void 0){const At=xt.normalized,Ut=xt.itemSize,Bt=t.get(xt);if(Bt===void 0)continue;const ce=Bt.buffer,Q=Bt.type,ft=Bt.bytesPerElement,Rt=Q===i.INT||Q===i.UNSIGNED_INT||xt.gpuType===1013;if(xt.isInterleavedBufferAttribute){const _t=xt.data,zt=_t.stride,Wt=xt.offset;if(_t.isInstancedInterleavedBuffer){for(let wt=0;wt<X.locationSize;wt++)d(X.location+wt,_t.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let wt=0;wt<X.locationSize;wt++)m(X.location+wt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let wt=0;wt<X.locationSize;wt++)E(X.location+wt,Ut/X.locationSize,Q,At,zt*ft,(Wt+Ut/X.locationSize*wt)*ft,Rt)}else{if(xt.isInstancedBufferAttribute){for(let _t=0;_t<X.locationSize;_t++)d(X.location+_t,xt.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let _t=0;_t<X.locationSize;_t++)m(X.location+_t);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let _t=0;_t<X.locationSize;_t++)E(X.location+_t,Ut/X.locationSize,Q,At,Ut*ft,Ut/X.locationSize*_t*ft,Rt)}}else if(J!==void 0){const At=J[U];if(At!==void 0)switch(At.length){case 2:i.vertexAttrib2fv(X.location,At);break;case 3:i.vertexAttrib3fv(X.location,At);break;case 4:i.vertexAttrib4fv(X.location,At);break;default:i.vertexAttrib1fv(X.location,At)}}}}M()}function O(){I();for(const S in n){const P=n[S];for(const W in P){const V=P[W];for(const K in V)u(V[K].object),delete V[K];delete P[W]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const W in P){const V=P[W];for(const K in V)u(V[K].object),delete V[K];delete P[W]}delete n[S.id]}function C(S){for(const P in n){const W=n[P];if(W[S.id]===void 0)continue;const V=W[S.id];for(const K in V)u(V[K].object),delete V[K];delete W[S.id]}}function I(){A(),a=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Ku(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ju(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==1023&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==1009&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==1015&&!I)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:O,maxSamples:w}}function Qu(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new oi,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,E=M*4;let x=d.clippingState||null;l.value=x,x=u(g,f,E,p);for(let O=0;O!==E;++O)x[O]=e[O];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,x=p;E!==_;++E,x+=4)a.copy(h[E]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function $u(i){let t=new WeakMap;function e(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Uo extends Co{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fi=4,No=[.125,.215,.35,.446,.526,.582],fi=20,la=new Uo,Fo=new Jt;let ca=null,fa=0,ua=0,ha=!1;const ui=(1+Math.sqrt(5))/2,Oi=1/ui,Oo=[new R(-ui,Oi,0),new R(ui,Oi,0),new R(-Oi,0,ui),new R(Oi,0,ui),new R(0,ui,-Oi),new R(0,ui,Oi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Bo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ca=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,fa,ua),this._renderer.xr.enabled=ha,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:vi,depthBuffer:!1},r=zo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=th(s)),this._blurMaterial=eh(s,t,e)}return r}_compileMaterial(t){const e=new re(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,r){const o=new an(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Fo),u.toneMapping=0,u.autoClear=!1;const p=new En({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new re(new On,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Fo),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):M===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const E=this._cubeSize;Jr(r,M*E,d>2?E:0,E,E),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===301||t.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ko());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new re(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,la)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Oo[(r-s-1)%Oo.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new re(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):fi;m>fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const d=[];let M=0;for(let C=0;C<fi;++C){const I=C/_,A=Math.exp(-I*I/2);d.push(A),C===0?M+=A:C<m&&(M+=2*A)}for(let C=0;C<d.length;C++)d[C]=d[C]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const x=this._sizeLods[r],O=3*x*(r>E-Fi?r-E+Fi:0),w=4*(this._cubeSize-x);Jr(e,O,w,3*x,2*x),l.setRenderTarget(e),l.render(h,la)}}function th(i){const t=[],e=[],n=[];let r=i;const s=i-Fi+1+No.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Fi?l=No[a-i+Fi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),E=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,I=w>2?0:-1,A=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];M.set(A,_*g*w),E.set(f,m*g*w);const S=[w,w,w,w,w,w];x.set(S,d*g*w)}const O=new Ze;O.setAttribute("position",new sn(M,_)),O.setAttribute("uv",new sn(E,m)),O.setAttribute("faceIndex",new sn(x,d)),t.push(O),r>Fi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zo(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function eh(i,t,e){const n=new Float32Array(fi),r=new R(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:da(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ko(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vo(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function da(){return`

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
	`}function nh(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,u=l===301||l===302;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Bo(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new Bo(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ih(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function rh(i,t,e,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let E=0,x=M.length;E<x;E+=3){const O=M[E+0],w=M[E+1],C=M[E+2];f.push(O,w,w,C,C,O)}}else if(g!==void 0){const M=g.array;_=g.version;for(let E=0,x=M.length/3-1;E<x;E+=3){const O=E+0,w=E+1,C=E+2;f.push(O,w,w,C,C,O)}}else return;const m=new(io(f)?Ao:Eo)(f,1);m.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function sh(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*a,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function h(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M]*_[M];e.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ah(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function oh(i,t,e){const n=new WeakMap,r=new ye;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let A=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let x=o.attributes.position.count*E,O=1;x>t.maxTextureSize&&(O=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const w=new Float32Array(x*O*4*h),C=new uo(w,x,O,h);C.type=1015,C.needsUpdate=!0;const I=E*4;for(let S=0;S<h;S++){const P=m[S],W=d[S],V=M[S],K=x*O*4*S;for(let nt=0;nt<P.count;nt++){const J=nt*I;p===!0&&(r.fromBufferAttribute(P,nt),w[K+J+0]=r.x,w[K+J+1]=r.y,w[K+J+2]=r.z,w[K+J+3]=0),g===!0&&(r.fromBufferAttribute(W,nt),w[K+J+4]=r.x,w[K+J+5]=r.y,w[K+J+6]=r.z,w[K+J+7]=0),_===!0&&(r.fromBufferAttribute(V,nt),w[K+J+8]=r.x,w[K+J+9]=r.y,w[K+J+10]=r.z,w[K+J+11]=V.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new Et(x,O)},n.set(o,f),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function lh(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Ho extends We{constructor(t,e,n,r,s,a,o,l,c,u=1026){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===1026&&(n=1014),n===void 0&&u===1027&&(n=1020),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Go=new We,Wo=new Ho(1,1),qo=new uo,Xo=new wc,Yo=new Do,jo=[],Zo=[],Ko=new Float32Array(16),Jo=new Float32Array(9),Qo=new Float32Array(4);function Bi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=jo[r];if(s===void 0&&(s=new Float32Array(r),jo[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qr(i,t){let e=Zo[t];e===void 0&&(e=new Int32Array(t),Zo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ch(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function uh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function hh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function dh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;Qo.set(n),i.uniformMatrix2fv(this.addr,!1,Qo),Ve(e,n)}}function ph(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;Jo.set(n),i.uniformMatrix3fv(this.addr,!1,Jo),Ve(e,n)}}function mh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;Ko.set(n),i.uniformMatrix4fv(this.addr,!1,Ko),Ve(e,n)}}function gh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _h(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function xh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function vh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function Sh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function yh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function Eh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function Ah(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Wo.compareFunction=515,s=Wo):s=Go,e.setTexture2D(t||s,r)}function Th(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Xo,r)}function bh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Yo,r)}function wh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||qo,r)}function Rh(i){switch(i){case 5126:return ch;case 35664:return fh;case 35665:return uh;case 35666:return hh;case 35674:return dh;case 35675:return ph;case 35676:return mh;case 5124:case 35670:return gh;case 35667:case 35671:return _h;case 35668:case 35672:return xh;case 35669:case 35673:return vh;case 5125:return Sh;case 36294:return Mh;case 36295:return yh;case 36296:return Eh;case 35678:case 36198:case 36298:case 36306:case 35682:return Ah;case 35679:case 36299:case 36307:return Th;case 35680:case 36300:case 36308:case 36293:return bh;case 36289:case 36303:case 36311:case 36292:return wh}}function Ch(i,t){i.uniform1fv(this.addr,t)}function Ph(i,t){const e=Bi(t,this.size,2);i.uniform2fv(this.addr,e)}function Lh(i,t){const e=Bi(t,this.size,3);i.uniform3fv(this.addr,e)}function Dh(i,t){const e=Bi(t,this.size,4);i.uniform4fv(this.addr,e)}function Ih(i,t){const e=Bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Uh(i,t){const e=Bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nh(i,t){const e=Bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fh(i,t){i.uniform1iv(this.addr,t)}function Oh(i,t){i.uniform2iv(this.addr,t)}function Bh(i,t){i.uniform3iv(this.addr,t)}function zh(i,t){i.uniform4iv(this.addr,t)}function kh(i,t){i.uniform1uiv(this.addr,t)}function Vh(i,t){i.uniform2uiv(this.addr,t)}function Hh(i,t){i.uniform3uiv(this.addr,t)}function Gh(i,t){i.uniform4uiv(this.addr,t)}function Wh(i,t,e){const n=this.cache,r=t.length,s=Qr(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Go,s[a])}function qh(i,t,e){const n=this.cache,r=t.length,s=Qr(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Xo,s[a])}function Xh(i,t,e){const n=this.cache,r=t.length,s=Qr(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Yo,s[a])}function Yh(i,t,e){const n=this.cache,r=t.length,s=Qr(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||qo,s[a])}function jh(i){switch(i){case 5126:return Ch;case 35664:return Ph;case 35665:return Lh;case 35666:return Dh;case 35674:return Ih;case 35675:return Uh;case 35676:return Nh;case 5124:case 35670:return Fh;case 35667:case 35671:return Oh;case 35668:case 35672:return Bh;case 35669:case 35673:return zh;case 5125:return kh;case 36294:return Vh;case 36295:return Hh;case 36296:return Gh;case 35678:case 36198:case 36298:case 36306:case 35682:return Wh;case 35679:case 36299:case 36307:return qh;case 35680:case 36300:case 36308:case 36293:return Xh;case 36289:case 36303:case 36311:case 36292:return Yh}}class Zh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rh(e.type)}}class Kh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jh(e.type)}}class Jh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function $o(i,t){i.seq.push(t),i.map[t.id]=t}function Qh(i,t,e){const n=i.name,r=n.length;for(pa.lastIndex=0;;){const s=pa.exec(n),a=pa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){$o(e,c===void 0?new Zh(o,i,t):new Kh(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Jh(o),$o(e,h)),e=h}}}class $r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Qh(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function tl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $h=37297;let td=0;function ed(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const el=new $t;function nd(i){fe._getMatrix(el,fe.workingColorSpace,i);const t=`mat3( ${el.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case Lr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+ed(i.getShaderSource(t),a)}else return r}function id(i,t){const e=nd(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rd(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ts=new R;function sd(){fe.getLuminanceCoefficients(ts);const i=ts.x.toFixed(4),t=ts.y.toFixed(4),e=ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ad(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function od(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ld(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ir(i){return i!==""}function il(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(i){return i.replace(cd,ud)}const fd=new Map;function ud(i,t){let e=ee[t];if(e===void 0){const n=fd.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ma(e)}const hd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sl(i){return i.replace(hd,dd)}function dd(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function al(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function pd(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function md(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gd(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function _d(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function xd(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vd(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=pd(e),c=md(e),u=gd(e),h=_d(e),f=xd(e),p=ad(e),g=od(s),_=r.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),d.length>0&&(d+=`
`)):(m=[al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),d=[al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?ee.tonemapping_pars_fragment:"",e.toneMapping!==0?rd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,id("linearToOutputTexel",e.outputColorSpace),sd(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),a=ma(a),a=il(a,e),a=rl(a,e),o=ma(o),o=il(o,e),o=rl(o,e),a=sl(a),o=sl(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=M+m+a,x=M+d+o,O=tl(r,r.VERTEX_SHADER,E),w=tl(r,r.FRAGMENT_SHADER,x);r.attachShader(_,O),r.attachShader(_,w),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(P){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(_).trim(),V=r.getShaderInfoLog(O).trim(),K=r.getShaderInfoLog(w).trim();let nt=!0,J=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,O,w);else{const U=nl(r,O,"vertex"),X=nl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+U+`
`+X)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||K==="")&&(J=!1);J&&(P.diagnostics={runnable:nt,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:K,prefix:d}})}r.deleteShader(O),r.deleteShader(w),I=new $r(r,_),A=ld(r,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,$h)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=td++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=w,this}let Sd=0;class Md{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yd(t),e.set(t,n)),n}}class yd{constructor(t){this.id=Sd++,this.code=t,this.usedTimes=0}}function Ed(i,t,e,n,r,s,a){const o=new js,l=new Md,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,S,P,W,V){const K=W.fog,nt=V.geometry,J=A.isMeshStandardMaterial?W.environment:null,U=(A.isMeshStandardMaterial?e:t).get(A.envMap||J),X=U&&U.mapping===306?U.image.height:null,xt=g[A.type];A.precision!==null&&(p=r.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const At=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Ut=At!==void 0?At.length:0;let Bt=0;nt.morphAttributes.position!==void 0&&(Bt=1),nt.morphAttributes.normal!==void 0&&(Bt=2),nt.morphAttributes.color!==void 0&&(Bt=3);let ce,Q,ft,Rt;if(xt){const ae=Tn[xt];ce=ae.vertexShader,Q=ae.fragmentShader}else ce=A.vertexShader,Q=A.fragmentShader,l.update(A),ft=l.getVertexShaderID(A),Rt=l.getFragmentShaderID(A);const _t=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Wt=V.isInstancedMesh===!0,wt=V.isBatchedMesh===!0,Nt=!!A.map,Kt=!!A.matcap,jt=!!U,D=!!A.aoMap,Re=!!A.lightMap,Qt=!!A.bumpMap,Xt=!!A.normalMap,Ot=!!A.displacementMap,dt=!!A.emissiveMap,Ft=!!A.metalnessMap,T=!!A.roughnessMap,v=A.anisotropy>0,B=A.clearcoat>0,tt=A.dispersion>0,it=A.iridescence>0,et=A.sheen>0,Lt=A.transmission>0,vt=v&&!!A.anisotropyMap,bt=B&&!!A.clearcoatMap,te=B&&!!A.clearcoatNormalMap,ct=B&&!!A.clearcoatRoughnessMap,yt=it&&!!A.iridescenceMap,kt=it&&!!A.iridescenceThicknessMap,k=et&&!!A.sheenColorMap,j=et&&!!A.sheenRoughnessMap,rt=!!A.specularMap,$=!!A.specularColorMap,st=!!A.specularIntensityMap,L=Lt&&!!A.transmissionMap,ht=Lt&&!!A.thicknessMap,q=!!A.gradientMap,Z=!!A.alphaMap,ut=A.alphaTest>0,mt=!!A.alphaHash,Pt=!!A.extensions;let me=0;A.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(me=i.toneMapping);const He={shaderID:xt,shaderType:A.type,shaderName:A.name,vertexShader:ce,fragmentShader:Q,defines:A.defines,customVertexShaderID:ft,customFragmentShaderID:Rt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:wt,batchingColor:wt&&V._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&V.instanceColor!==null,instancingMorph:Wt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:vi,alphaToCoverage:!!A.alphaToCoverage,map:Nt,matcap:Kt,envMap:jt,envMapMode:jt&&U.mapping,envMapCubeUVHeight:X,aoMap:D,lightMap:Re,bumpMap:Qt,normalMap:Xt,displacementMap:f&&Ot,emissiveMap:dt,normalMapObjectSpace:Xt&&A.normalMapType===1,normalMapTangentSpace:Xt&&A.normalMapType===0,metalnessMap:Ft,roughnessMap:T,anisotropy:v,anisotropyMap:vt,clearcoat:B,clearcoatMap:bt,clearcoatNormalMap:te,clearcoatRoughnessMap:ct,dispersion:tt,iridescence:it,iridescenceMap:yt,iridescenceThicknessMap:kt,sheen:et,sheenColorMap:k,sheenRoughnessMap:j,specularMap:rt,specularColorMap:$,specularIntensityMap:st,transmission:Lt,transmissionMap:L,thicknessMap:ht,gradientMap:q,opaque:A.transparent===!1&&A.blending===1&&A.alphaToCoverage===!1,alphaMap:Z,alphaTest:ut,alphaHash:mt,combine:A.combine,mapUv:Nt&&_(A.map.channel),aoMapUv:D&&_(A.aoMap.channel),lightMapUv:Re&&_(A.lightMap.channel),bumpMapUv:Qt&&_(A.bumpMap.channel),normalMapUv:Xt&&_(A.normalMap.channel),displacementMapUv:Ot&&_(A.displacementMap.channel),emissiveMapUv:dt&&_(A.emissiveMap.channel),metalnessMapUv:Ft&&_(A.metalnessMap.channel),roughnessMapUv:T&&_(A.roughnessMap.channel),anisotropyMapUv:vt&&_(A.anisotropyMap.channel),clearcoatMapUv:bt&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:k&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:j&&_(A.sheenRoughnessMap.channel),specularMapUv:rt&&_(A.specularMap.channel),specularColorMapUv:$&&_(A.specularColorMap.channel),specularIntensityMapUv:st&&_(A.specularIntensityMap.channel),transmissionMapUv:L&&_(A.transmissionMap.channel),thicknessMapUv:ht&&_(A.thicknessMap.channel),alphaMapUv:Z&&_(A.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(Xt||v),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!nt.attributes.uv&&(Nt||Z),fog:!!K,useFog:A.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:zt,skinning:V.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:Nt&&A.map.isVideoTexture===!0&&fe.getTransfer(A.map.colorSpace)===Se,decodeVideoTextureEmissive:dt&&A.emissiveMap.isVideoTexture===!0&&fe.getTransfer(A.emissiveMap.colorSpace)===Se,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===2,flipSided:A.side===1,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Pt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&A.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function d(A){const S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(const P in A.defines)S.push(P),S.push(A.defines[P]);return A.isRawShaderMaterial===!1&&(M(S,A),E(S,A),S.push(i.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function M(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function E(A,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),A.push(o.mask)}function x(A){const S=g[A.type];let P;if(S){const W=Tn[S];P=zc.clone(W.uniforms)}else P=A.uniforms;return P}function O(A,S){let P;for(let W=0,V=u.length;W<V;W++){const K=u[W];if(K.cacheKey===S){P=K,++P.usedTimes;break}}return P===void 0&&(P=new vd(i,S,A,s),u.push(P)),P}function w(A){if(--A.usedTimes===0){const S=u.indexOf(A);u[S]=u[u.length-1],u.pop(),A.destroy()}}function C(A){l.remove(A)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:O,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:I}}function Ad(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Td(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ol(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ll(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function o(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||Td),n.length>1&&n.sort(f||ol),r.length>1&&r.sort(f||ol)}function u(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function bd(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new ll,i.set(n,[a])):r>=s.length?(a=new ll,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function wd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Jt};break;case"SpotLight":e={position:new R,direction:new R,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Rd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cd=0;function Pd(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ld(i){const t=new wd,e=Rd(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const r=new R,s=new xe,a=new xe;function o(c){let u=0,h=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,M=0,E=0,x=0,O=0,w=0,C=0;c.sort(Pd);for(let A=0,S=c.length;A<S;A++){const P=c[A],W=P.color,V=P.intensity,K=P.distance,nt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=W.r*V,h+=W.g*V,f+=W.b*V;else if(P.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(P.sh.coefficients[J],V);C++}else if(P.isDirectionalLight){const J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const U=P.shadow,X=e.get(P);X.shadowIntensity=U.intensity,X.shadowBias=U.bias,X.shadowNormalBias=U.normalBias,X.shadowRadius=U.radius,X.shadowMapSize=U.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=P.shadow.matrix,M++}n.directional[p]=J,p++}else if(P.isSpotLight){const J=t.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(W).multiplyScalar(V),J.distance=K,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,n.spot[_]=J;const U=P.shadow;if(P.map&&(n.spotLightMap[O]=P.map,O++,U.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=U.matrix,P.castShadow){const X=e.get(P);X.shadowIntensity=U.intensity,X.shadowBias=U.bias,X.shadowNormalBias=U.normalBias,X.shadowRadius=U.radius,X.shadowMapSize=U.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=nt,x++}_++}else if(P.isRectAreaLight){const J=t.get(P);J.color.copy(W).multiplyScalar(V),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=J,m++}else if(P.isPointLight){const J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){const U=P.shadow,X=e.get(P);X.shadowIntensity=U.intensity,X.shadowBias=U.bias,X.shadowNormalBias=U.normalBias,X.shadowRadius=U.radius,X.shadowMapSize=U.mapSize,X.shadowCameraNear=U.camera.near,X.shadowCameraFar=U.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=nt,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=J,g++}else if(P.isHemisphereLight){const J=t.get(P);J.skyColor.copy(P.color).multiplyScalar(V),J.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[d]=J,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==M||I.numPointShadows!==E||I.numSpotShadows!==x||I.numSpotMaps!==O||I.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+O-w,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=M,I.numPointShadows=E,I.numSpotShadows=x,I.numSpotMaps=O,I.numLightProbes=C,n.version=Cd++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const E=c[d];if(E.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(E.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function cl(i){const t=new Ld(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Dd(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new cl(i),t.set(r,[o])):s>=a.length?(o=new cl(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Id extends Xn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ud extends Xn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Nd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fd=`uniform sampler2D shadow_pass;
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
}`;function Od(i,t,e){let n=new oa;const r=new Et,s=new Et,a=new ye,o=new Id({depthPacking:3201}),l=new Ud,c={},u=e.maxTextureSize,h={0:1,1:0,2:2},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Nd,fragmentShader:Fd}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ze;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new re(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let d=this.type;this.render=function(w,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const A=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),W=i.state;W.setBlending(0),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=d!==3&&this.type===3,K=d===3&&this.type!==3;for(let nt=0,J=w.length;nt<J;nt++){const U=w[nt],X=U.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const xt=X.getFrameExtents();if(r.multiply(xt),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/xt.x),r.x=s.x*xt.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/xt.y),r.y=s.y*xt.y,X.mapSize.y=s.y)),X.map===null||V===!0||K===!0){const Ut=this.type!==3?{minFilter:1003,magFilter:1003}:{};X.map!==null&&X.map.dispose(),X.map=new ni(r.x,r.y,Ut),X.map.texture.name=U.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const At=X.getViewportCount();for(let Ut=0;Ut<At;Ut++){const Bt=X.getViewport(Ut);a.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),W.viewport(a),X.updateMatrices(U,Ut),n=X.getFrustum(),x(C,I,X.camera,U,this.type)}X.isPointLightShadow!==!0&&this.type===3&&M(X,I),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(A,S,P)};function M(w,C){const I=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ni(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,I,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,I,p,_,null)}function E(w,C,I,A){let S=null;const P=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=I.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=S.uuid,V=C.uuid;let K=c[W];K===void 0&&(K={},c[W]=K);let nt=K[V];nt===void 0&&(nt=S.clone(),K[V]=nt,C.addEventListener("dispose",O)),S=nt}if(S.visible=C.visible,S.wireframe=C.wireframe,A===3?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:h[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=i.properties.get(S);W.light=I}return S}function x(w,C,I,A,S){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===3)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const V=t.update(w),K=w.material;if(Array.isArray(K)){const nt=V.groups;for(let J=0,U=nt.length;J<U;J++){const X=nt[J],xt=K[X.materialIndex];if(xt&&xt.visible){const At=E(w,xt,A,S);w.onBeforeShadow(i,w,C,I,V,At,X),i.renderBufferDirect(I,null,V,At,w,X),w.onAfterShadow(i,w,C,I,V,At,X)}}}else if(K.visible){const nt=E(w,K,A,S);w.onBeforeShadow(i,w,C,I,V,nt,null),i.renderBufferDirect(I,null,V,nt,w,null),w.onAfterShadow(i,w,C,I,V,nt,null)}}const W=w.children;for(let V=0,K=W.length;V<K;V++)x(W[V],C,I,A,S)}function O(w){w.target.removeEventListener("dispose",O);for(const I in c){const A=c[I],S=w.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}const Bd={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function zd(i,t){function e(){let L=!1;const ht=new ye;let q=null;const Z=new ye(0,0,0,0);return{setMask:function(ut){q!==ut&&!L&&(i.colorMask(ut,ut,ut,ut),q=ut)},setLocked:function(ut){L=ut},setClear:function(ut,mt,Pt,me,He){He===!0&&(ut*=me,mt*=me,Pt*=me),ht.set(ut,mt,Pt,me),Z.equals(ht)===!1&&(i.clearColor(ut,mt,Pt,me),Z.copy(ht))},reset:function(){L=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,ht=!1,q=null,Z=null,ut=null;return{setReversed:function(mt){if(ht!==mt){const Pt=t.get("EXT_clip_control");ht?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);const me=ut;ut=null,this.setClear(me)}ht=mt},getReversed:function(){return ht},setTest:function(mt){mt?_t(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(mt){q!==mt&&!L&&(i.depthMask(mt),q=mt)},setFunc:function(mt){if(ht&&(mt=Bd[mt]),Z!==mt){switch(mt){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=mt}},setLocked:function(mt){L=mt},setClear:function(mt){ut!==mt&&(ht&&(mt=1-mt),i.clearDepth(mt),ut=mt)},reset:function(){L=!1,q=null,Z=null,ut=null,ht=!1}}}function r(){let L=!1,ht=null,q=null,Z=null,ut=null,mt=null,Pt=null,me=null,He=null;return{setTest:function(ae){L||(ae?_t(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(ae){ht!==ae&&!L&&(i.stencilMask(ae),ht=ae)},setFunc:function(ae,ze,nn){(q!==ae||Z!==ze||ut!==nn)&&(i.stencilFunc(ae,ze,nn),q=ae,Z=ze,ut=nn)},setOp:function(ae,ze,nn){(mt!==ae||Pt!==ze||me!==nn)&&(i.stencilOp(ae,ze,nn),mt=ae,Pt=ze,me=nn)},setLocked:function(ae){L=ae},setClear:function(ae){He!==ae&&(i.clearStencil(ae),He=ae)},reset:function(){L=!1,ht=null,q=null,Z=null,ut=null,mt=null,Pt=null,me=null,He=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,M=null,E=null,x=null,O=null,w=null,C=new Jt(0,0,0),I=0,A=!1,S=null,P=null,W=null,V=null,K=null;const nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,U=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=U>=1):X.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=U>=2);let xt=null,At={};const Ut=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),ce=new ye().fromArray(Ut),Q=new ye().fromArray(Bt);function ft(L,ht,q,Z){const ut=new Uint8Array(4),mt=i.createTexture();i.bindTexture(L,mt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<q;Pt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(ht+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return mt}const Rt={};Rt[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(3),Qt(!1),Xt(1),_t(i.CULL_FACE),D(0);function _t(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function zt(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Wt(L,ht){return h[L]!==ht?(i.bindFramebuffer(L,ht),h[L]=ht,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ht),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function wt(L,ht){let q=p,Z=!1;if(L){q=f.get(ht),q===void 0&&(q=[],f.set(ht,q));const ut=L.textures;if(q.length!==ut.length||q[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Pt=ut.length;mt<Pt;mt++)q[mt]=i.COLOR_ATTACHMENT0+mt;q.length=ut.length,Z=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Z=!0);Z&&i.drawBuffers(q)}function Nt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const Kt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Kt[103]=i.MIN,Kt[104]=i.MAX;const jt={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function D(L,ht,q,Z,ut,mt,Pt,me,He,ae){if(L===0){_===!0&&(zt(i.BLEND),_=!1);return}if(_===!1&&(_t(i.BLEND),_=!0),L!==5){if(L!==m||ae!==A){if((d!==100||x!==100)&&(i.blendEquation(i.FUNC_ADD),d=100,x=100),ae)switch(L){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,E=null,O=null,w=null,C.set(0,0,0),I=0,m=L,A=ae}return}ut=ut||ht,mt=mt||q,Pt=Pt||Z,(ht!==d||ut!==x)&&(i.blendEquationSeparate(Kt[ht],Kt[ut]),d=ht,x=ut),(q!==M||Z!==E||mt!==O||Pt!==w)&&(i.blendFuncSeparate(jt[q],jt[Z],jt[mt],jt[Pt]),M=q,E=Z,O=mt,w=Pt),(me.equals(C)===!1||He!==I)&&(i.blendColor(me.r,me.g,me.b,He),C.copy(me),I=He),m=L,A=!1}function Re(L,ht){L.side===2?zt(i.CULL_FACE):_t(i.CULL_FACE);let q=L.side===1;ht&&(q=!q),Qt(q),L.blending===1&&L.transparent===!1?D(0):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),dt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(L){S!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),S=L)}function Xt(L){L!==0?(_t(i.CULL_FACE),L!==P&&(L===1?i.cullFace(i.BACK):L===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),P=L}function Ot(L){L!==W&&(J&&i.lineWidth(L),W=L)}function dt(L,ht,q){L?(_t(i.POLYGON_OFFSET_FILL),(V!==ht||K!==q)&&(i.polygonOffset(ht,q),V=ht,K=q)):zt(i.POLYGON_OFFSET_FILL)}function Ft(L){L?_t(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+nt-1),xt!==L&&(i.activeTexture(L),xt=L)}function v(L,ht,q){q===void 0&&(xt===null?q=i.TEXTURE0+nt-1:q=xt);let Z=At[q];Z===void 0&&(Z={type:void 0,texture:void 0},At[q]=Z),(Z.type!==L||Z.texture!==ht)&&(xt!==q&&(i.activeTexture(q),xt=q),i.bindTexture(L,ht||Rt[L]),Z.type=L,Z.texture=ht)}function B(){const L=At[xt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(L){ce.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function j(L){Q.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function rt(L,ht){let q=c.get(ht);q===void 0&&(q=new WeakMap,c.set(ht,q));let Z=q.get(L);Z===void 0&&(Z=i.getUniformBlockIndex(ht,L.name),q.set(L,Z))}function $(L,ht){const Z=c.get(ht).get(L);l.get(ht)!==Z&&(i.uniformBlockBinding(ht,Z,L.__bindingPointIndex),l.set(ht,Z))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},xt=null,At={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,M=null,E=null,x=null,O=null,w=null,C=new Jt(0,0,0),I=0,A=!1,S=null,P=null,W=null,V=null,K=null,ce.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:_t,disable:zt,bindFramebuffer:Wt,drawBuffers:wt,useProgram:Nt,setBlending:D,setMaterial:Re,setFlipSided:Qt,setCullFace:Xt,setLineWidth:Ot,setPolygonOffset:dt,setScissorTest:Ft,activeTexture:T,bindTexture:v,unbindTexture:B,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:yt,texImage3D:kt,updateUBOMapping:rt,uniformBlockBinding:$,texStorage2D:te,texStorage3D:ct,texSubImage2D:et,texSubImage3D:Lt,compressedTexSubImage2D:vt,compressedTexSubImage3D:bt,scissor:k,viewport:j,reset:st}}function fl(i,t,e,n){const r=kd(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/r.components*r.byteLength;case 1029:return i*t/r.components*r.byteLength;case 1030:return i*t*2/r.components*r.byteLength;case 1031:return i*t*2/r.components*r.byteLength;case 1022:return i*t*3/r.components*r.byteLength;case 1023:return i*t*4/r.components*r.byteLength;case 1033:return i*t*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kd(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Vd(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):Dr("canvas")}function _(T,v,B){let tt=1;const it=Ft(T);if((it.width>B||it.height>B)&&(tt=B/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const et=Math.floor(tt*it.width),Lt=Math.floor(tt*it.height);h===void 0&&(h=g(et,Lt));const vt=v?g(et,Lt):h;return vt.width=et,vt.height=Lt,vt.getContext("2d").drawImage(T,0,0,et,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+et+"x"+Lt+")."),vt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,v,B,tt,it=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let et=v;if(v===i.RED&&(B===i.FLOAT&&(et=i.R32F),B===i.HALF_FLOAT&&(et=i.R16F),B===i.UNSIGNED_BYTE&&(et=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(et=i.R8UI),B===i.UNSIGNED_SHORT&&(et=i.R16UI),B===i.UNSIGNED_INT&&(et=i.R32UI),B===i.BYTE&&(et=i.R8I),B===i.SHORT&&(et=i.R16I),B===i.INT&&(et=i.R32I)),v===i.RG&&(B===i.FLOAT&&(et=i.RG32F),B===i.HALF_FLOAT&&(et=i.RG16F),B===i.UNSIGNED_BYTE&&(et=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(et=i.RG8UI),B===i.UNSIGNED_SHORT&&(et=i.RG16UI),B===i.UNSIGNED_INT&&(et=i.RG32UI),B===i.BYTE&&(et=i.RG8I),B===i.SHORT&&(et=i.RG16I),B===i.INT&&(et=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(et=i.RGB8UI),B===i.UNSIGNED_SHORT&&(et=i.RGB16UI),B===i.UNSIGNED_INT&&(et=i.RGB32UI),B===i.BYTE&&(et=i.RGB8I),B===i.SHORT&&(et=i.RGB16I),B===i.INT&&(et=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),B===i.UNSIGNED_INT&&(et=i.RGBA32UI),B===i.BYTE&&(et=i.RGBA8I),B===i.SHORT&&(et=i.RGBA16I),B===i.INT&&(et=i.RGBA32I)),v===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),v===i.RGBA){const Lt=it?Lr:fe.getTransfer(tt);B===i.FLOAT&&(et=i.RGBA32F),B===i.HALF_FLOAT&&(et=i.RGBA16F),B===i.UNSIGNED_BYTE&&(et=Lt===Se?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(T,v){let B;return T?v===null||v===1014||v===1020?B=i.DEPTH24_STENCIL8:v===1015?B=i.DEPTH32F_STENCIL8:v===1012&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===1014||v===1020?B=i.DEPTH_COMPONENT24:v===1015?B=i.DEPTH_COMPONENT32F:v===1012&&(B=i.DEPTH_COMPONENT16),B}function O(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==1003&&T.minFilter!==1006?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){const v=T.target;v.removeEventListener("dispose",w),I(v),v.isVideoTexture&&u.delete(v)}function C(T){const v=T.target;v.removeEventListener("dispose",C),S(v)}function I(T){const v=n.get(T);if(v.__webglInit===void 0)return;const B=T.source,tt=f.get(B);if(tt){const it=tt[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&A(T),Object.keys(tt).length===0&&f.delete(B)}n.remove(T)}function A(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const B=T.source,tt=f.get(B);delete tt[v.__cacheKey],a.memory.textures--}function S(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(v.__webglFramebuffer[tt]))for(let it=0;it<v.__webglFramebuffer[tt].length;it++)i.deleteFramebuffer(v.__webglFramebuffer[tt][it]);else i.deleteFramebuffer(v.__webglFramebuffer[tt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[tt])}else{if(Array.isArray(v.__webglFramebuffer))for(let tt=0;tt<v.__webglFramebuffer.length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[tt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let tt=0;tt<v.__webglColorRenderbuffer.length;tt++)v.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[tt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=T.textures;for(let tt=0,it=B.length;tt<it;tt++){const et=n.get(B[tt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(B[tt])}n.remove(T)}let P=0;function W(){P=0}function V(){const T=P;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),P+=1,T}function K(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function nt(T,v){const B=n.get(T);if(T.isVideoTexture&&Ot(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const tt=T.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(B,T,v);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function J(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Q(B,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function U(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Q(B,T,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function X(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){ft(B,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const xt={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},At={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},Ut={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Bt(T,v){if(v.type===1015&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===1006||v.magFilter===1007||v.magFilter===1005||v.magFilter===1008||v.minFilter===1006||v.minFilter===1007||v.minFilter===1005||v.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,xt[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,xt[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,xt[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,At[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,At[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ut[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===1003||v.minFilter!==1005&&v.minFilter!==1008||v.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ce(T,v){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));const tt=v.source;let it=f.get(tt);it===void 0&&(it={},f.set(tt,it));const et=K(v);if(et!==T.__cacheKey){it[et]===void 0&&(it[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),it[et].usedTimes++;const Lt=it[T.__cacheKey];Lt!==void 0&&(it[T.__cacheKey].usedTimes--,Lt.usedTimes===0&&A(v)),T.__cacheKey=et,T.__webglTexture=it[et].texture}return B}function Q(T,v,B){let tt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(tt=i.TEXTURE_3D);const it=ce(T,v),et=v.source;e.bindTexture(tt,T.__webglTexture,i.TEXTURE0+B);const Lt=n.get(et);if(et.version!==Lt.__version||it===!0){e.activeTexture(i.TEXTURE0+B);const vt=fe.getPrimaries(fe.workingColorSpace),bt=v.colorSpace===Cn?null:fe.getPrimaries(v.colorSpace),te=v.colorSpace===Cn||vt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ct=_(v.image,!1,r.maxTextureSize);ct=dt(v,ct);const yt=s.convert(v.format,v.colorSpace),kt=s.convert(v.type);let k=E(v.internalFormat,yt,kt,v.colorSpace,v.isVideoTexture);Bt(tt,v);let j;const rt=v.mipmaps,$=v.isVideoTexture!==!0,st=Lt.__version===void 0||it===!0,L=et.dataReady,ht=O(v,ct);if(v.isDepthTexture)k=x(v.format===1027,v.type),st&&($?e.texStorage2D(i.TEXTURE_2D,1,k,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,k,ct.width,ct.height,0,yt,kt,null));else if(v.isDataTexture)if(rt.length>0){$&&st&&e.texStorage2D(i.TEXTURE_2D,ht,k,rt[0].width,rt[0].height);for(let q=0,Z=rt.length;q<Z;q++)j=rt[q],$?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,j.width,j.height,yt,kt,j.data):e.texImage2D(i.TEXTURE_2D,q,k,j.width,j.height,0,yt,kt,j.data);v.generateMipmaps=!1}else $?(st&&e.texStorage2D(i.TEXTURE_2D,ht,k,ct.width,ct.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,yt,kt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,k,ct.width,ct.height,0,yt,kt,ct.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){$&&st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,k,rt[0].width,rt[0].height,ct.depth);for(let q=0,Z=rt.length;q<Z;q++)if(j=rt[q],v.format!==1023)if(yt!==null)if($){if(L)if(v.layerUpdates.size>0){const ut=fl(j.width,j.height,v.format,v.type);for(const mt of v.layerUpdates){const Pt=j.data.subarray(mt*ut/j.data.BYTES_PER_ELEMENT,(mt+1)*ut/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,mt,j.width,j.height,1,yt,Pt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,j.width,j.height,ct.depth,yt,j.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,k,j.width,j.height,ct.depth,0,j.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,j.width,j.height,ct.depth,yt,kt,j.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,k,j.width,j.height,ct.depth,0,yt,kt,j.data)}else{$&&st&&e.texStorage2D(i.TEXTURE_2D,ht,k,rt[0].width,rt[0].height);for(let q=0,Z=rt.length;q<Z;q++)j=rt[q],v.format!==1023?yt!==null?$?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,j.width,j.height,yt,j.data):e.compressedTexImage2D(i.TEXTURE_2D,q,k,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,j.width,j.height,yt,kt,j.data):e.texImage2D(i.TEXTURE_2D,q,k,j.width,j.height,0,yt,kt,j.data)}else if(v.isDataArrayTexture)if($){if(st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,k,ct.width,ct.height,ct.depth),L)if(v.layerUpdates.size>0){const q=fl(ct.width,ct.height,v.format,v.type);for(const Z of v.layerUpdates){const ut=ct.data.subarray(Z*q/ct.data.BYTES_PER_ELEMENT,(Z+1)*q/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ct.width,ct.height,1,yt,kt,ut)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,yt,kt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,k,ct.width,ct.height,ct.depth,0,yt,kt,ct.data);else if(v.isData3DTexture)$?(st&&e.texStorage3D(i.TEXTURE_3D,ht,k,ct.width,ct.height,ct.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,yt,kt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,k,ct.width,ct.height,ct.depth,0,yt,kt,ct.data);else if(v.isFramebufferTexture){if(st)if($)e.texStorage2D(i.TEXTURE_2D,ht,k,ct.width,ct.height);else{let q=ct.width,Z=ct.height;for(let ut=0;ut<ht;ut++)e.texImage2D(i.TEXTURE_2D,ut,k,q,Z,0,yt,kt,null),q>>=1,Z>>=1}}else if(rt.length>0){if($&&st){const q=Ft(rt[0]);e.texStorage2D(i.TEXTURE_2D,ht,k,q.width,q.height)}for(let q=0,Z=rt.length;q<Z;q++)j=rt[q],$?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,yt,kt,j):e.texImage2D(i.TEXTURE_2D,q,k,yt,kt,j);v.generateMipmaps=!1}else if($){if(st){const q=Ft(ct);e.texStorage2D(i.TEXTURE_2D,ht,k,q.width,q.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,kt,ct)}else e.texImage2D(i.TEXTURE_2D,0,k,yt,kt,ct);m(v)&&d(tt),Lt.__version=et.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ft(T,v,B){if(v.image.length!==6)return;const tt=ce(T,v),it=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const et=n.get(it);if(it.version!==et.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const Lt=fe.getPrimaries(fe.workingColorSpace),vt=v.colorSpace===Cn?null:fe.getPrimaries(v.colorSpace),bt=v.colorSpace===Cn||Lt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const te=v.isCompressedTexture||v.image[0].isCompressedTexture,ct=v.image[0]&&v.image[0].isDataTexture,yt=[];for(let Z=0;Z<6;Z++)!te&&!ct?yt[Z]=_(v.image[Z],!0,r.maxCubemapSize):yt[Z]=ct?v.image[Z].image:v.image[Z],yt[Z]=dt(v,yt[Z]);const kt=yt[0],k=s.convert(v.format,v.colorSpace),j=s.convert(v.type),rt=E(v.internalFormat,k,j,v.colorSpace),$=v.isVideoTexture!==!0,st=et.__version===void 0||tt===!0,L=it.dataReady;let ht=O(v,kt);Bt(i.TEXTURE_CUBE_MAP,v);let q;if(te){$&&st&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,rt,kt.width,kt.height);for(let Z=0;Z<6;Z++){q=yt[Z].mipmaps;for(let ut=0;ut<q.length;ut++){const mt=q[ut];v.format!==1023?k!==null?$?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,mt.width,mt.height,k,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,mt.width,mt.height,k,j,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,rt,mt.width,mt.height,0,k,j,mt.data)}}}else{if(q=v.mipmaps,$&&st){q.length>0&&ht++;const Z=Ft(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,rt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ct){$?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,yt[Z].width,yt[Z].height,k,j,yt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,rt,yt[Z].width,yt[Z].height,0,k,j,yt[Z].data);for(let ut=0;ut<q.length;ut++){const Pt=q[ut].image[Z].image;$?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Pt.width,Pt.height,k,j,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,rt,Pt.width,Pt.height,0,k,j,Pt.data)}}else{$?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,k,j,yt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,rt,k,j,yt[Z]);for(let ut=0;ut<q.length;ut++){const mt=q[ut];$?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,k,j,mt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,rt,k,j,mt.image[Z])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),et.__version=it.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Rt(T,v,B,tt,it,et){const Lt=s.convert(B.format,B.colorSpace),vt=s.convert(B.type),bt=E(B.internalFormat,Lt,vt,B.colorSpace),te=n.get(v),ct=n.get(B);if(ct.__renderTarget=v,!te.__hasExternalTextures){const yt=Math.max(1,v.width>>et),kt=Math.max(1,v.height>>et);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,et,bt,yt,kt,v.depth,0,Lt,vt,null):e.texImage2D(it,et,bt,yt,kt,0,Lt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,it,ct.__webglTexture,0,Qt(v)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,it,ct.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(T,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const tt=v.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,et=x(v.stencilBuffer,it),Lt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=Qt(v);Xt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,et,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,et,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,et,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,T)}else{const tt=v.textures;for(let it=0;it<tt.length;it++){const et=tt[it],Lt=s.convert(et.format,et.colorSpace),vt=s.convert(et.type),bt=E(et.internalFormat,Lt,vt,et.colorSpace),te=Qt(v);B&&Xt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,bt,v.width,v.height):Xt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,bt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,bt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(v.depthTexture);tt.__renderTarget=v,(!tt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),nt(v.depthTexture,0);const it=tt.__webglTexture,et=Qt(v);if(v.depthTexture.format===1026)Xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(v.depthTexture.format===1027)Xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Wt(T){const v=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const tt=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),tt){const it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=tt}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");zt(v.__webglFramebuffer,T)}else if(B){v.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[tt]),v.__webglDepthbuffer[tt]===void 0)v.__webglDepthbuffer[tt]=i.createRenderbuffer(),_t(v.__webglDepthbuffer[tt],T,!1);else{const it=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=v.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),_t(v.__webglDepthbuffer,T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(T,v,B){const tt=n.get(T);v!==void 0&&Rt(tt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Wt(T)}function Nt(T){const v=T.texture,B=n.get(T),tt=n.get(v);T.addEventListener("dispose",C);const it=T.textures,et=T.isWebGLCubeRenderTarget===!0,Lt=it.length>1;if(Lt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=v.version,a.memory.textures++),et){B.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[vt]=[];for(let bt=0;bt<v.mipmaps.length;bt++)B.__webglFramebuffer[vt][bt]=i.createFramebuffer()}else B.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let vt=0;vt<v.mipmaps.length;vt++)B.__webglFramebuffer[vt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let vt=0,bt=it.length;vt<bt;vt++){const te=n.get(it[vt]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Xt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let vt=0;vt<it.length;vt++){const bt=it[vt];B.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[vt]);const te=s.convert(bt.format,bt.colorSpace),ct=s.convert(bt.type),yt=E(bt.internalFormat,te,ct,bt.colorSpace,T.isXRRenderTarget===!0),kt=Qt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,yt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,B.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,v);for(let vt=0;vt<6;vt++)if(v.mipmaps&&v.mipmaps.length>0)for(let bt=0;bt<v.mipmaps.length;bt++)Rt(B.__webglFramebuffer[vt][bt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt);else Rt(B.__webglFramebuffer[vt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let vt=0,bt=it.length;vt<bt;vt++){const te=it[vt],ct=n.get(te);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),Bt(i.TEXTURE_2D,te),Rt(B.__webglFramebuffer,T,te,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),m(te)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(vt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,tt.__webglTexture),Bt(vt,v),v.mipmaps&&v.mipmaps.length>0)for(let bt=0;bt<v.mipmaps.length;bt++)Rt(B.__webglFramebuffer[bt],T,v,i.COLOR_ATTACHMENT0,vt,bt);else Rt(B.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,vt,0);m(v)&&d(vt),e.unbindTexture()}T.depthBuffer&&Wt(T)}function Kt(T){const v=T.textures;for(let B=0,tt=v.length;B<tt;B++){const it=v[B];if(m(it)){const et=M(T),Lt=n.get(it).__webglTexture;e.bindTexture(et,Lt),d(et),e.unbindTexture()}}}const jt=[],D=[];function Re(T){if(T.samples>0){if(Xt(T)===!1){const v=T.textures,B=T.width,tt=T.height;let it=i.COLOR_BUFFER_BIT;const et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(T),vt=v.length>1;if(vt)for(let bt=0;bt<v.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let bt=0;bt<v.length;bt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[bt]);const te=n.get(v[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,B,tt,0,0,B,tt,it,i.NEAREST),l===!0&&(jt.length=0,D.length=0,jt.push(i.COLOR_ATTACHMENT0+bt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(jt.push(et),D.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let bt=0;bt<v.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[bt]);const te=n.get(v[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Qt(T){return Math.min(r.maxSamples,T.samples)}function Xt(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ot(T){const v=a.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function dt(T,v){const B=T.colorSpace,tt=T.format,it=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==vi&&B!==Cn&&(fe.getTransfer(B)===Se?(tt!==1023||it!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function Ft(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=nt,this.setTexture2DArray=J,this.setTexture3D=U,this.setTextureCube=X,this.rebindTextures=wt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Xt}function Hd(i,t){function e(n,r=Cn){let s;const a=fe.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===Se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===Se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===Se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===36492)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Gd extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pe extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wd={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const qd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xd=`
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

}`;class Yd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new We,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Yn({vertexShader:qd,fragmentShader:Xd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jd extends Si{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new Yd,m=e.getContextAttributes();let d=null,M=null;const E=[],x=[],O=new Et;let w=null;const C=new an;C.viewport=new ye;const I=new an;I.viewport=new ye;const A=[C,I],S=new Gd;let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ft=E[Q];return ft===void 0&&(ft=new ga,E[Q]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Q){let ft=E[Q];return ft===void 0&&(ft=new ga,E[Q]=ft),ft.getGripSpace()},this.getHand=function(Q){let ft=E[Q];return ft===void 0&&(ft=new ga,E[Q]=ft),ft.getHandSpace()};function V(Q){const ft=x.indexOf(Q.inputSource);if(ft===-1)return;const Rt=E[ft];Rt!==void 0&&(Rt.update(Q.inputSource,Q.frame,c||a),Rt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",nt);for(let Q=0;Q<E.length;Q++){const ft=x[Q];ft!==null&&(x[Q]=null,E[Q].disconnect(ft))}P=null,W=null,_.reset(),t.setRenderTarget(d),p=null,f=null,h=null,r=null,M=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",K),r.addEventListener("inputsourceschange",nt),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(O),r.renderState.layers===void 0){const ft={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,ft),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ni(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ft=null,Rt=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=m.stencil?1027:1026,Rt=m.stencil?1020:1014);const zt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(zt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new ni(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new Ho(f.textureWidth,f.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function nt(Q){for(let ft=0;ft<Q.removed.length;ft++){const Rt=Q.removed[ft],_t=x.indexOf(Rt);_t>=0&&(x[_t]=null,E[_t].disconnect(Rt))}for(let ft=0;ft<Q.added.length;ft++){const Rt=Q.added[ft];let _t=x.indexOf(Rt);if(_t===-1){for(let Wt=0;Wt<E.length;Wt++)if(Wt>=x.length){x.push(Rt),_t=Wt;break}else if(x[Wt]===null){x[Wt]=Rt,_t=Wt;break}if(_t===-1)break}const zt=E[_t];zt&&zt.connect(Rt)}}const J=new R,U=new R;function X(Q,ft,Rt){J.setFromMatrixPosition(ft.matrixWorld),U.setFromMatrixPosition(Rt.matrixWorld);const _t=J.distanceTo(U),zt=ft.projectionMatrix.elements,Wt=Rt.projectionMatrix.elements,wt=zt[14]/(zt[10]-1),Nt=zt[14]/(zt[10]+1),Kt=(zt[9]+1)/zt[5],jt=(zt[9]-1)/zt[5],D=(zt[8]-1)/zt[0],Re=(Wt[8]+1)/Wt[0],Qt=wt*D,Xt=wt*Re,Ot=_t/(-D+Re),dt=Ot*-D;if(ft.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(dt),Q.translateZ(Ot),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),zt[10]===-1)Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Ft=wt+Ot,T=Nt+Ot,v=Qt-dt,B=Xt+(_t-dt),tt=Kt*Nt/T*Ft,it=jt*Nt/T*Ft;Q.projectionMatrix.makePerspective(v,B,tt,it,Ft,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function xt(Q,ft){ft===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ft.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ft=Q.near,Rt=Q.far;_.texture!==null&&(_.depthNear>0&&(ft=_.depthNear),_.depthFar>0&&(Rt=_.depthFar)),S.near=I.near=C.near=ft,S.far=I.far=C.far=Rt,(P!==S.near||W!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,W=S.far),C.layers.mask=Q.layers.mask|2,I.layers.mask=Q.layers.mask|4,S.layers.mask=C.layers.mask|I.layers.mask;const _t=Q.parent,zt=S.cameras;xt(S,_t);for(let Wt=0;Wt<zt.length;Wt++)xt(zt[Wt],_t);zt.length===2?X(S,C,I):S.projectionMatrix.copy(C.projectionMatrix),At(Q,S,_t)};function At(Q,ft,Rt){Rt===null?Q.matrix.copy(ft.matrixWorld):(Q.matrix.copy(Rt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ft.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Os*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Ut=null;function Bt(Q,ft){if(u=ft.getViewerPose(c||a),g=ft,u!==null){const Rt=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let _t=!1;Rt.length!==S.cameras.length&&(S.cameras.length=0,_t=!0);for(let Wt=0;Wt<Rt.length;Wt++){const wt=Rt[Wt];let Nt=null;if(p!==null)Nt=p.getViewport(wt);else{const jt=h.getViewSubImage(f,wt);Nt=jt.viewport,Wt===0&&(t.setRenderTargetTextures(M,jt.colorTexture,f.ignoreDepthValues?void 0:jt.depthStencilTexture),t.setRenderTarget(M))}let Kt=A[Wt];Kt===void 0&&(Kt=new an,Kt.layers.enable(Wt),Kt.viewport=new ye,A[Wt]=Kt),Kt.matrix.fromArray(wt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(wt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Wt===0&&(S.matrix.copy(Kt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_t===!0&&S.cameras.push(Kt)}const zt=r.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Wt=h.getDepthInformation(Rt[0]);Wt&&Wt.isValid&&Wt.texture&&_.init(t,Wt,r.renderState)}}for(let Rt=0;Rt<E.length;Rt++){const _t=x[Rt],zt=E[Rt];_t!==null&&zt!==void 0&&zt.update(_t,ft,c||a)}Ut&&Ut(Q,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),g=null}const ce=new Io;ce.setAnimationLoop(Bt),this.setAnimationLoop=function(Q){Ut=Q},this.dispose=function(){}}}const hi=new Sn,Zd=new xe;function Kd(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ro(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,E,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,M,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===1&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===1&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),E=M.envMap,x=M.envMapRotation;E&&(m.envMap.value=E,hi.copy(x),hi.x*=-1,hi.y*=-1,hi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(hi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===1&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Jd(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const x=E.program;n.uniformBlockBinding(M,x)}function c(M,E){let x=r[M.id];x===void 0&&(g(M),x=u(M),r[M.id]=x,M.addEventListener("dispose",m));const O=E.program;n.updateUBOMapping(M,O);const w=t.render.frame;s[M.id]!==w&&(f(M),s[M.id]=w)}function u(M){const E=h();M.__bindingPointIndex=E;const x=i.createBuffer(),O=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,O,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const E=r[M.id],x=M.uniforms,O=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,C=x.length;w<C;w++){const I=Array.isArray(x[w])?x[w]:[x[w]];for(let A=0,S=I.length;A<S;A++){const P=I[A];if(p(P,w,A,O)===!0){const W=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let nt=0;nt<V.length;nt++){const J=V[nt],U=_(J);typeof J=="number"||typeof J=="boolean"?(P.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,W+K,P.__data)):J.isMatrix3?(P.__data[0]=J.elements[0],P.__data[1]=J.elements[1],P.__data[2]=J.elements[2],P.__data[3]=0,P.__data[4]=J.elements[3],P.__data[5]=J.elements[4],P.__data[6]=J.elements[5],P.__data[7]=0,P.__data[8]=J.elements[6],P.__data[9]=J.elements[7],P.__data[10]=J.elements[8],P.__data[11]=0):(J.toArray(P.__data,K),K+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,E,x,O){const w=M.value,C=E+"_"+x;if(O[C]===void 0)return typeof w=="number"||typeof w=="boolean"?O[C]=w:O[C]=w.clone(),!0;{const I=O[C];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return O[C]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(M){const E=M.uniforms;let x=0;const O=16;for(let C=0,I=E.length;C<I;C++){const A=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,P=A.length;S<P;S++){const W=A[S],V=Array.isArray(W.value)?W.value:[W.value];for(let K=0,nt=V.length;K<nt;K++){const J=V[K],U=_(J),X=x%O,xt=X%U.boundary,At=X+xt;x+=xt,At!==0&&O-At<U.storage&&(x+=O-At),W.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=U.storage}}}const w=x%O;return w>0&&(x+=O-w),M.__size=x,M.__cache={},this}function _(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){const E=M.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Qd{constructor(t={}){const{canvas:e=vc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const M=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let O=!1,w=0,C=0,I=null,A=-1,S=null;const P=new ye,W=new ye;let V=null;const K=new Jt(0);let nt=0,J=e.width,U=e.height,X=1,xt=null,At=null;const Ut=new ye(0,0,J,U),Bt=new ye(0,0,J,U);let ce=!1;const Q=new oa;let ft=!1,Rt=!1;const _t=new xe,zt=new xe,Wt=new R,wt=new ye,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function jt(){return I===null?X:1}let D=n;function Re(y,N){return e.getContext(y,N)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ns}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",mt,!1),D===null){const N="webgl2";if(D=Re(N,y),D===null)throw Re(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Qt,Xt,Ot,dt,Ft,T,v,B,tt,it,et,Lt,vt,bt,te,ct,yt,kt,k,j,rt,$,st,L;function ht(){Qt=new ih(D),Qt.init(),$=new Hd(D,Qt),Xt=new Ju(D,Qt,t,$),Ot=new zd(D,Qt),Xt.reverseDepthBuffer&&f&&Ot.buffers.depth.setReversed(!0),dt=new ah(D),Ft=new Ad,T=new Vd(D,Qt,Ot,Ft,Xt,$,dt),v=new $u(x),B=new nh(x),tt=new Xc(D),st=new Zu(D,tt),it=new rh(D,tt,dt,st),et=new lh(D,it,tt,dt),k=new oh(D,Xt,T),ct=new Qu(Ft),Lt=new Ed(x,v,B,Qt,Xt,st,ct),vt=new Kd(x,Ft),bt=new bd,te=new Dd(Qt),kt=new ju(x,v,B,Ot,et,p,l),yt=new Od(x,et,Xt),L=new Jd(D,dt,Xt,Ot),j=new Ku(D,Qt,dt),rt=new sh(D,Qt,dt),dt.programs=Lt.programs,x.capabilities=Xt,x.extensions=Qt,x.properties=Ft,x.renderLists=bt,x.shadowMap=yt,x.state=Ot,x.info=dt}ht();const q=new jd(x,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=Qt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Qt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(J,U,!1))},this.getSize=function(y){return y.set(J,U)},this.setSize=function(y,N,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,U=N,e.width=Math.floor(y*X),e.height=Math.floor(N*X),G===!0&&(e.style.width=y+"px",e.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(J*X,U*X).floor()},this.setDrawingBufferSize=function(y,N,G){J=y,U=N,X=G,e.width=Math.floor(y*G),e.height=Math.floor(N*G),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Ut)},this.setViewport=function(y,N,G,H){y.isVector4?Ut.set(y.x,y.y,y.z,y.w):Ut.set(y,N,G,H),Ot.viewport(P.copy(Ut).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(Bt)},this.setScissor=function(y,N,G,H){y.isVector4?Bt.set(y.x,y.y,y.z,y.w):Bt.set(y,N,G,H),Ot.scissor(W.copy(Bt).multiplyScalar(X).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(y){Ot.setScissorTest(ce=y)},this.setOpaqueSort=function(y){xt=y},this.setTransparentSort=function(y){At=y},this.getClearColor=function(y){return y.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(y=!0,N=!0,G=!0){let H=0;if(y){let F=!1;if(I!==null){const lt=I.texture.format;F=lt===1033||lt===1031||lt===1029}if(F){const lt=I.texture.type,gt=lt===1009||lt===1014||lt===1012||lt===1020||lt===1017||lt===1018,Tt=kt.getClearColor(),It=kt.getClearAlpha(),qt=Tt.r,Zt=Tt.g,Ct=Tt.b;gt?(g[0]=qt,g[1]=Zt,g[2]=Ct,g[3]=It,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=qt,_[1]=Zt,_[2]=Ct,_[3]=It,D.clearBufferiv(D.COLOR,0,_))}else H|=D.COLOR_BUFFER_BIT}N&&(H|=D.DEPTH_BUFFER_BIT),G&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),bt.dispose(),te.dispose(),Ft.dispose(),v.dispose(),B.dispose(),et.dispose(),st.dispose(),L.dispose(),Lt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ps),q.removeEventListener("sessionend",Rr),qe.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const y=dt.autoReset,N=yt.enabled,G=yt.autoUpdate,H=yt.needsUpdate,F=yt.type;ht(),dt.autoReset=y,yt.enabled=N,yt.autoUpdate=G,yt.needsUpdate=H,yt.type=F}function mt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Pt(y){const N=y.target;N.removeEventListener("dispose",Pt),me(N)}function me(y){He(y),Ft.remove(y)}function He(y){const N=Ft.get(y).programs;N!==void 0&&(N.forEach(function(G){Lt.releaseProgram(G)}),y.isShaderMaterial&&Lt.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,G,H,F,lt){N===null&&(N=Nt);const gt=F.isMesh&&F.matrixWorld.determinant()<0,Tt=Qn(y,N,G,H,F);Ot.setMaterial(H,gt);let It=G.index,qt=1;if(H.wireframe===!0){if(It=it.getWireframeAttribute(G),It===void 0)return;qt=2}const Zt=G.drawRange,Ct=G.attributes.position;let oe=Zt.start*qt,ge=(Zt.start+Zt.count)*qt;lt!==null&&(oe=Math.max(oe,lt.start*qt),ge=Math.min(ge,(lt.start+lt.count)*qt)),It!==null?(oe=Math.max(oe,0),ge=Math.min(ge,It.count)):Ct!=null&&(oe=Math.max(oe,0),ge=Math.min(ge,Ct.count));const ve=ge-oe;if(ve<0||ve===1/0)return;st.setup(F,H,Tt,G,It);let Ue,ue=j;if(It!==null&&(Ue=tt.get(It),ue=rt,ue.setIndex(Ue)),F.isMesh)H.wireframe===!0?(Ot.setLineWidth(H.wireframeLinewidth*jt()),ue.setMode(D.LINES)):ue.setMode(D.TRIANGLES);else if(F.isLine){let Dt=H.linewidth;Dt===void 0&&(Dt=1),Ot.setLineWidth(Dt*jt()),F.isLineSegments?ue.setMode(D.LINES):F.isLineLoop?ue.setMode(D.LINE_LOOP):ue.setMode(D.LINE_STRIP)}else F.isPoints?ue.setMode(D.POINTS):F.isSprite&&ue.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ue.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))ue.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Dt=F._multiDrawStarts,_n=F._multiDrawCounts,he=F._multiDrawCount,pn=It?tt.get(It).bytesPerElement:1,$n=Ft.get(H).currentProgram.getUniforms();for(let rn=0;rn<he;rn++)$n.setValue(D,"_gl_DrawID",rn),ue.render(Dt[rn]/pn,_n[rn])}else if(F.isInstancedMesh)ue.renderInstances(oe,ve,F.count);else if(G.isInstancedBufferGeometry){const Dt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_n=Math.min(G.instanceCount,Dt);ue.renderInstances(oe,ve,_n)}else ue.render(oe,ve)};function ae(y,N,G){y.transparent===!0&&y.side===2&&y.forceSinglePass===!1?(y.side=1,y.needsUpdate=!0,zn(y,N,G),y.side=0,y.needsUpdate=!0,zn(y,N,G),y.side=2):zn(y,N,G)}this.compile=function(y,N,G=null){G===null&&(G=y),d=te.get(G),d.init(N),E.push(d),G.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),y!==G&&y.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const H=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const lt=F.material;if(lt)if(Array.isArray(lt))for(let gt=0;gt<lt.length;gt++){const Tt=lt[gt];ae(Tt,G,F),H.add(Tt)}else ae(lt,G,F),H.add(lt)}),E.pop(),d=null,H},this.compileAsync=function(y,N,G=null){const H=this.compile(y,N,G);return new Promise(F=>{function lt(){if(H.forEach(function(gt){Ft.get(gt).currentProgram.isReady()&&H.delete(gt)}),H.size===0){F(y);return}setTimeout(lt,10)}Qt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ze=null;function nn(y){ze&&ze(y)}function Ps(){qe.stop()}function Rr(){qe.start()}const qe=new Io;qe.setAnimationLoop(nn),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(y){ze=y,q.setAnimationLoop(y),y===null?qe.stop():qe.start()},q.addEventListener("sessionstart",Ps),q.addEventListener("sessionend",Rr),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,N,I),d=te.get(y,E.length),d.init(N),E.push(d),zt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(zt),Rt=this.localClippingEnabled,ft=ct.init(this.clippingPlanes,Rt),m=bt.get(y,M.length),m.init(),M.push(m),q.enabled===!0&&q.isPresenting===!0){const lt=x.xr.getDepthSensingMesh();lt!==null&&gi(lt,N,-1/0,x.sortObjects)}gi(y,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(xt,At),Kt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Kt&&kt.addToRenderList(m,y),this.info.render.frame++,ft===!0&&ct.beginShadows();const G=d.state.shadowsArray;yt.render(G,y,N),ft===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(d.setupLights(),N.isArrayCamera){const lt=N.cameras;if(F.length>0)for(let gt=0,Tt=lt.length;gt<Tt;gt++){const It=lt[gt];xi(H,F,y,It)}Kt&&kt.render(y);for(let gt=0,Tt=lt.length;gt<Tt;gt++){const It=lt[gt];_i(m,y,It,It.viewport)}}else F.length>0&&xi(H,F,y,N),Kt&&kt.render(y),_i(m,y,N);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(x,y,N),st.resetDefaultState(),A=-1,S=null,E.pop(),E.length>0?(d=E[E.length-1],ft===!0&&ct.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function gi(y,N,G,H){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Q.intersectsSprite(y)){H&&wt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(zt);const gt=et.update(y),Tt=y.material;Tt.visible&&m.push(y,gt,Tt,G,wt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Q.intersectsObject(y))){const gt=et.update(y),Tt=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),wt.copy(y.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),wt.copy(gt.boundingSphere.center)),wt.applyMatrix4(y.matrixWorld).applyMatrix4(zt)),Array.isArray(Tt)){const It=gt.groups;for(let qt=0,Zt=It.length;qt<Zt;qt++){const Ct=It[qt],oe=Tt[Ct.materialIndex];oe&&oe.visible&&m.push(y,gt,oe,G,wt.z,Ct)}}else Tt.visible&&m.push(y,gt,Tt,G,wt.z,null)}}const lt=y.children;for(let gt=0,Tt=lt.length;gt<Tt;gt++)gi(lt[gt],N,G,H)}function _i(y,N,G,H){const F=y.opaque,lt=y.transmissive,gt=y.transparent;d.setupLightsView(G),ft===!0&&ct.setGlobalState(x.clippingPlanes,G),H&&Ot.viewport(P.copy(H)),F.length>0&&Zi(F,N,G),lt.length>0&&Zi(lt,N,G),gt.length>0&&Zi(gt,N,G),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function xi(y,N,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new ni(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const lt=d.state.transmissionRenderTarget[H.id],gt=H.viewport||P;lt.setSize(gt.z,gt.w);const Tt=x.getRenderTarget();x.setRenderTarget(lt),x.getClearColor(K),nt=x.getClearAlpha(),nt<1&&x.setClearColor(16777215,.5),x.clear(),Kt&&kt.render(G);const It=x.toneMapping;x.toneMapping=0;const qt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),ft===!0&&ct.setGlobalState(x.clippingPlanes,H),Zi(y,G,H),T.updateMultisampleRenderTarget(lt),T.updateRenderTargetMipmap(lt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ct=0,oe=N.length;Ct<oe;Ct++){const ge=N[Ct],ve=ge.object,Ue=ge.geometry,ue=ge.material,Dt=ge.group;if(ue.side===2&&ve.layers.test(H.layers)){const _n=ue.side;ue.side=1,ue.needsUpdate=!0,Ls(ve,G,H,Ue,ue,Dt),ue.side=_n,ue.needsUpdate=!0,Zt=!0}}Zt===!0&&(T.updateMultisampleRenderTarget(lt),T.updateRenderTargetMipmap(lt))}x.setRenderTarget(Tt),x.setClearColor(K,nt),qt!==void 0&&(H.viewport=qt),x.toneMapping=It}function Zi(y,N,G){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,lt=y.length;F<lt;F++){const gt=y[F],Tt=gt.object,It=gt.geometry,qt=H===null?gt.material:H,Zt=gt.group;Tt.layers.test(G.layers)&&Ls(Tt,N,G,It,qt,Zt)}}function Ls(y,N,G,H,F,lt){y.onBeforeRender(x,N,G,H,F,lt),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(x,N,G,H,y,lt),F.transparent===!0&&F.side===2&&F.forceSinglePass===!1?(F.side=1,F.needsUpdate=!0,x.renderBufferDirect(G,N,H,F,y,lt),F.side=0,F.needsUpdate=!0,x.renderBufferDirect(G,N,H,F,y,lt),F.side=2):x.renderBufferDirect(G,N,H,F,y,lt),y.onAfterRender(x,N,G,H,F,lt)}function zn(y,N,G){N.isScene!==!0&&(N=Nt);const H=Ft.get(y),F=d.state.lights,lt=d.state.shadowsArray,gt=F.state.version,Tt=Lt.getParameters(y,F.state,lt,N,G),It=Lt.getProgramCacheKey(Tt);let qt=H.programs;H.environment=y.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(y.isMeshStandardMaterial?B:v).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,qt===void 0&&(y.addEventListener("dispose",Pt),qt=new Map,H.programs=qt);let Zt=qt.get(It);if(Zt!==void 0){if(H.currentProgram===Zt&&H.lightsStateVersion===gt)return Cr(y,Tt),Zt}else Tt.uniforms=Lt.getUniforms(y),y.onBeforeCompile(Tt,x),Zt=Lt.acquireProgram(Tt,It),qt.set(It,Zt),H.uniforms=Tt.uniforms;const Ct=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ct.clippingPlanes=ct.uniform),Cr(y,Tt),H.needsLights=Ae(y),H.lightsStateVersion=gt,H.needsLights&&(Ct.ambientLightColor.value=F.state.ambient,Ct.lightProbe.value=F.state.probe,Ct.directionalLights.value=F.state.directional,Ct.directionalLightShadows.value=F.state.directionalShadow,Ct.spotLights.value=F.state.spot,Ct.spotLightShadows.value=F.state.spotShadow,Ct.rectAreaLights.value=F.state.rectArea,Ct.ltc_1.value=F.state.rectAreaLTC1,Ct.ltc_2.value=F.state.rectAreaLTC2,Ct.pointLights.value=F.state.point,Ct.pointLightShadows.value=F.state.pointShadow,Ct.hemisphereLights.value=F.state.hemi,Ct.directionalShadowMap.value=F.state.directionalShadowMap,Ct.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ct.spotShadowMap.value=F.state.spotShadowMap,Ct.spotLightMatrix.value=F.state.spotLightMatrix,Ct.spotLightMap.value=F.state.spotLightMap,Ct.pointShadowMap.value=F.state.pointShadowMap,Ct.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Zt,H.uniformsList=null,Zt}function Ds(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=$r.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Cr(y,N){const G=Ft.get(y);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Qn(y,N,G,H,F){N.isScene!==!0&&(N=Nt),T.resetTextureUnits();const lt=N.fog,gt=H.isMeshStandardMaterial?N.environment:null,Tt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:vi,It=(H.isMeshStandardMaterial?B:v).get(H.envMap||gt),qt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Zt=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ct=!!G.morphAttributes.position,oe=!!G.morphAttributes.normal,ge=!!G.morphAttributes.color;let ve=0;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ve=x.toneMapping);const Ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=Ue!==void 0?Ue.length:0,Dt=Ft.get(H),_n=d.state.lights;if(ft===!0&&(Rt===!0||y!==S)){const Je=y===S&&H.id===A;ct.setState(H,y,Je)}let he=!1;H.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==_n.state.version||Dt.outputColorSpace!==Tt||F.isBatchedMesh&&Dt.batching===!1||!F.isBatchedMesh&&Dt.batching===!0||F.isBatchedMesh&&Dt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Dt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Dt.instancing===!1||!F.isInstancedMesh&&Dt.instancing===!0||F.isSkinnedMesh&&Dt.skinning===!1||!F.isSkinnedMesh&&Dt.skinning===!0||F.isInstancedMesh&&Dt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Dt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Dt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Dt.instancingMorph===!1&&F.morphTexture!==null||Dt.envMap!==It||H.fog===!0&&Dt.fog!==lt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ct.numPlanes||Dt.numIntersection!==ct.numIntersection)||Dt.vertexAlphas!==qt||Dt.vertexTangents!==Zt||Dt.morphTargets!==Ct||Dt.morphNormals!==oe||Dt.morphColors!==ge||Dt.toneMapping!==ve||Dt.morphTargetsCount!==ue)&&(he=!0):(he=!0,Dt.__version=H.version);let pn=Dt.currentProgram;he===!0&&(pn=zn(H,N,F));let $n=!1,rn=!1,ti=!1;const de=pn.getUniforms(),Ke=Dt.uniforms;if(Ot.useProgram(pn.program)&&($n=!0,rn=!0,ti=!0),H.id!==A&&(A=H.id,rn=!0),$n||S!==y){Ot.buffers.depth.getReversed()?(_t.copy(y.projectionMatrix),Mc(_t),yc(_t),de.setValue(D,"projectionMatrix",_t)):de.setValue(D,"projectionMatrix",y.projectionMatrix),de.setValue(D,"viewMatrix",y.matrixWorldInverse);const wn=de.map.cameraPosition;wn!==void 0&&wn.setValue(D,Wt.setFromMatrixPosition(y.matrixWorld)),Xt.logarithmicDepthBuffer&&de.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&de.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,rn=!0,ti=!0)}if(F.isSkinnedMesh){de.setOptional(D,F,"bindMatrix"),de.setOptional(D,F,"bindMatrixInverse");const Je=F.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),de.setValue(D,"boneTexture",Je.boneTexture,T))}F.isBatchedMesh&&(de.setOptional(D,F,"batchingTexture"),de.setValue(D,"batchingTexture",F._matricesTexture,T),de.setOptional(D,F,"batchingIdTexture"),de.setValue(D,"batchingIdTexture",F._indirectTexture,T),de.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&de.setValue(D,"batchingColorTexture",F._colorsTexture,T));const ei=G.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&k.update(F,G,pn),(rn||Dt.receiveShadow!==F.receiveShadow)&&(Dt.receiveShadow=F.receiveShadow,de.setValue(D,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ke.envMap.value=It,Ke.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Ke.envMapIntensity.value=N.environmentIntensity),rn&&(de.setValue(D,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&Is(Ke,ti),lt&&H.fog===!0&&vt.refreshFogUniforms(Ke,lt),vt.refreshMaterialUniforms(Ke,H,X,U,d.state.transmissionRenderTarget[y.id]),$r.upload(D,Ds(Dt),Ke,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&($r.upload(D,Ds(Dt),Ke,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&de.setValue(D,"center",F.center),de.setValue(D,"modelViewMatrix",F.modelViewMatrix),de.setValue(D,"normalMatrix",F.normalMatrix),de.setValue(D,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Je=H.uniformsGroups;for(let wn=0,b=Je.length;wn<b;wn++){const Y=Je[wn];L.update(Y,pn),L.bind(Y,pn)}}return pn}function Is(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Ae(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,N,G){Ft.get(y.texture).__webglTexture=N,Ft.get(y.depthTexture).__webglTexture=G;const H=Ft.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,N){const G=Ft.get(y);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,G=0){I=y,w=N,C=G;let H=!0,F=null,lt=!1,gt=!1;if(y){const It=Ft.get(y);if(It.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(It.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(It.__hasExternalTextures)T.rebindTextures(y,Ft.get(y.texture).__webglTexture,Ft.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ct=y.depthTexture;if(It.__boundDepthTexture!==Ct){if(Ct!==null&&Ft.has(Ct)&&(y.width!==Ct.image.width||y.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const qt=y.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(gt=!0);const Zt=Ft.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Zt[N])?F=Zt[N][G]:F=Zt[N],lt=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?F=Ft.get(y).__webglMultisampledFramebuffer:Array.isArray(Zt)?F=Zt[G]:F=Zt,P.copy(y.viewport),W.copy(y.scissor),V=y.scissorTest}else P.copy(Ut).multiplyScalar(X).floor(),W.copy(Bt).multiplyScalar(X).floor(),V=ce;if(Ot.bindFramebuffer(D.FRAMEBUFFER,F)&&H&&Ot.drawBuffers(y,F),Ot.viewport(P),Ot.scissor(W),Ot.setScissorTest(V),lt){const It=Ft.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,It.__webglTexture,G)}else if(gt){const It=Ft.get(y.texture),qt=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,G||0,qt)}A=-1},this.readRenderTargetPixels=function(y,N,G,H,F,lt,gt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Ft.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){Ot.bindFramebuffer(D.FRAMEBUFFER,Tt);try{const It=y.texture,qt=It.format,Zt=It.type;if(!Xt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-H&&G>=0&&G<=y.height-F&&D.readPixels(N,G,H,F,$.convert(qt),$.convert(Zt),lt)}finally{const It=I!==null?Ft.get(I).__webglFramebuffer:null;Ot.bindFramebuffer(D.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(y,N,G,H,F,lt,gt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Ft.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){const It=y.texture,qt=It.format,Zt=It.type;if(!Xt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=y.width-H&&G>=0&&G<=y.height-F){Ot.bindFramebuffer(D.FRAMEBUFFER,Tt);const Ct=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ct),D.bufferData(D.PIXEL_PACK_BUFFER,lt.byteLength,D.STREAM_READ),D.readPixels(N,G,H,F,$.convert(qt),$.convert(Zt),0);const oe=I!==null?Ft.get(I).__webglFramebuffer:null;Ot.bindFramebuffer(D.FRAMEBUFFER,oe);const ge=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Sc(D,ge,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ct),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,lt),D.deleteBuffer(Ct),D.deleteSync(ge),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,N=null,G=0){y.isTexture!==!0&&(Ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,y=arguments[1]);const H=Math.pow(2,-G),F=Math.floor(y.image.width*H),lt=Math.floor(y.image.height*H),gt=N!==null?N.x:0,Tt=N!==null?N.y:0;T.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,gt,Tt,F,lt),Ot.unbindTexture()},this.copyTextureToTexture=function(y,N,G=null,H=null,F=0){y.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],N=arguments[2],F=arguments[3]||0,G=null);let lt,gt,Tt,It,qt,Zt,Ct,oe,ge;const ve=y.isCompressedTexture?y.mipmaps[F]:y.image;G!==null?(lt=G.max.x-G.min.x,gt=G.max.y-G.min.y,Tt=G.isBox3?G.max.z-G.min.z:1,It=G.min.x,qt=G.min.y,Zt=G.isBox3?G.min.z:0):(lt=ve.width,gt=ve.height,Tt=ve.depth||1,It=0,qt=0,Zt=0),H!==null?(Ct=H.x,oe=H.y,ge=H.z):(Ct=0,oe=0,ge=0);const Ue=$.convert(N.format),ue=$.convert(N.type);let Dt;N.isData3DTexture?(T.setTexture3D(N,0),Dt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Dt=D.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Dt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const _n=D.getParameter(D.UNPACK_ROW_LENGTH),he=D.getParameter(D.UNPACK_IMAGE_HEIGHT),pn=D.getParameter(D.UNPACK_SKIP_PIXELS),$n=D.getParameter(D.UNPACK_SKIP_ROWS),rn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,It),D.pixelStorei(D.UNPACK_SKIP_ROWS,qt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zt);const ti=y.isDataArrayTexture||y.isData3DTexture,de=N.isDataArrayTexture||N.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Ke=Ft.get(y),ei=Ft.get(N),Je=Ft.get(Ke.__renderTarget),wn=Ft.get(ei.__renderTarget);Ot.bindFramebuffer(D.READ_FRAMEBUFFER,Je.__webglFramebuffer),Ot.bindFramebuffer(D.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let b=0;b<Tt;b++)ti&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ft.get(y).__webglTexture,F,Zt+b),y.isDepthTexture?(de&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ft.get(N).__webglTexture,F,ge+b),D.blitFramebuffer(It,qt,lt,gt,Ct,oe,lt,gt,D.DEPTH_BUFFER_BIT,D.NEAREST)):de?D.copyTexSubImage3D(Dt,F,Ct,oe,ge+b,It,qt,lt,gt):D.copyTexSubImage2D(Dt,F,Ct,oe,ge+b,It,qt,lt,gt);Ot.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else de?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(Dt,F,Ct,oe,ge,lt,gt,Tt,Ue,ue,ve.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Dt,F,Ct,oe,ge,lt,gt,Tt,Ue,ve.data):D.texSubImage3D(Dt,F,Ct,oe,ge,lt,gt,Tt,Ue,ue,ve):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,Ct,oe,lt,gt,Ue,ue,ve.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,Ct,oe,ve.width,ve.height,Ue,ve.data):D.texSubImage2D(D.TEXTURE_2D,F,Ct,oe,lt,gt,Ue,ue,ve);D.pixelStorei(D.UNPACK_ROW_LENGTH,_n),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pn),D.pixelStorei(D.UNPACK_SKIP_ROWS,$n),D.pixelStorei(D.UNPACK_SKIP_IMAGES,rn),F===0&&N.generateMipmaps&&D.generateMipmap(Dt),Ot.unbindTexture()},this.copyTextureToTexture3D=function(y,N,G=null,H=null,F=0){return y.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,y=arguments[2],N=arguments[3],F=arguments[4]||0),Ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,G,H,F)},this.initRenderTarget=function(y){Ft.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),Ot.unbindTexture()},this.resetState=function(){w=0,C=0,I=null,Ot.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}}class _a{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Jt(t),this.density=e}clone(){return new _a(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ul extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $d{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new R;class es{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),r=Me(r,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new es(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hl extends Xn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zi;const rr=new R,ki=new R,Vi=new R,Hi=new Et,sr=new Et,dl=new xe,ns=new R,ar=new R,is=new R,pl=new Et,xa=new Et,ml=new Et;class tp extends Fe{constructor(t=new hl){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new Ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $d(e,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new es(n,3,0,!1)),zi.setAttribute("uv",new es(n,2,3,!1))}this.geometry=zi,this.material=t,this.center=new Et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),dl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Vi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;rs(ns.set(-.5,-.5,0),Vi,a,ki,r,s),rs(ar.set(.5,-.5,0),Vi,a,ki,r,s),rs(is.set(.5,.5,0),Vi,a,ki,r,s),pl.set(0,0),xa.set(1,0),ml.set(1,1);let o=t.ray.intersectTriangle(ns,ar,is,!1,rr);if(o===null&&(rs(ar.set(-.5,.5,0),Vi,a,ki,r,s),xa.set(0,1),o=t.ray.intersectTriangle(ns,is,ar,!1,rr),o===null))return;const l=t.ray.origin.distanceTo(rr);l<t.near||l>t.far||e.push({distance:l,point:rr.clone(),uv:mn.getInterpolation(rr,ns,ar,is,pl,xa,ml,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function rs(i,t,e,n,r,s){Hi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(sr.x=s*Hi.x-r*Hi.y,sr.y=r*Hi.x+s*Hi.y):sr.copy(Hi),i.copy(t),i.x+=sr.x,i.y+=sr.y,i.applyMatrix4(dl)}class ep extends We{constructor(t=null,e=1,n=1,r,s,a,o,l,c=1003,u=1003,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gl extends sn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Gi=new xe,_l=new xe,ss=[],xl=new ii,np=new xe,or=new re,lr=new bi;class ip extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,np)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),xl.copy(t.boundingBox).applyMatrix4(Gi),this.boundingBox.union(xl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),lr.copy(t.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),t.ray.intersectsSphere(lr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Gi),_l.multiplyMatrices(n,Gi),or.matrixWorld=_l,or.raycast(t,ss);for(let a=0,o=ss.length;a<o;a++){const l=ss[a];l.instanceId=s,l.object=this,e.push(l)}ss.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ep(new Float32Array(r*this.count),r,this.count,1028,1015));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class vl extends Xn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sl=new xe,va=new Ys,as=new bi,os=new R;class rp extends Fe{constructor(t=new Ze,e=new vl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(r),as.radius+=s,t.ray.intersectsSphere(as)===!1)return;Sl.copy(r).invert(),va.copy(t.ray).applyMatrix4(Sl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);os.fromBufferAttribute(h,m),Ml(os,m,l,r,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,_=p;g<_;g++)os.fromBufferAttribute(h,g),Ml(os,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ml(i,t,e,n,r,s,a){const o=va.distanceSqToPoint(i);if(o<e){const l=new R;va.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class sp extends We{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,p=(a-u)/f;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new Et:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,r=[],s=[],a=[],o=new R,l=new xe;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ye(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(Ye(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Sa extends bn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Et){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ap extends Sa{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ma(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,p*=u,r(a,o,f,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const ls=new R,ya=new Ma,Ea=new Ma,Aa=new Ma;class op extends bn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new R){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(ls.subVectors(r[0],r[1]).add(r[0]),c=ls);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(ls.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ls),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ya.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),Ea.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),Aa.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ea.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Aa.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(ya.calc(l),Ea.calc(l),Aa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new R().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yl(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function lp(i,t){const e=1-i;return e*e*t}function cp(i,t){return 2*(1-i)*i*t}function fp(i,t){return i*i*t}function cr(i,t,e,n){return lp(i,t)+cp(i,e)+fp(i,n)}function up(i,t){const e=1-i;return e*e*e*t}function hp(i,t){const e=1-i;return 3*e*e*i*t}function dp(i,t){return 3*(1-i)*i*i*t}function pp(i,t){return i*i*i*t}function fr(i,t,e,n,r){return up(i,t)+hp(i,e)+dp(i,n)+pp(i,r)}class El extends bn{constructor(t=new Et,e=new Et,n=new Et,r=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Et){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(fr(t,r.x,s.x,a.x,o.x),fr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mp extends bn{constructor(t=new R,e=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new R){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(fr(t,r.x,s.x,a.x,o.x),fr(t,r.y,s.y,a.y,o.y),fr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Al extends bn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gp extends bn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tl extends bn{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(cr(t,r.x,s.x,a.x),cr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _p extends bn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(cr(t,r.x,s.x,a.x),cr(t,r.y,s.y,a.y),cr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bl extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(yl(o,l.x,c.x,u.x,h.x),yl(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Et().fromArray(r))}return this}}var wl=Object.freeze({__proto__:null,ArcCurve:ap,CatmullRomCurve3:op,CubicBezierCurve:El,CubicBezierCurve3:mp,EllipseCurve:Sa,LineCurve:Al,LineCurve3:gp,QuadraticBezierCurve:Tl,QuadraticBezierCurve3:_p,SplineCurve:bl});class xp extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new wl[r.type]().fromJSON(r))}return this}}class Rl extends xp{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Al(this.currentPoint.clone(),new Et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Tl(this.currentPoint.clone(),new Et(t,e),new Et(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new El(this.currentPoint.clone(),new Et(t,e),new Et(n,r),new Et(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new bl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,r,s,a,o,l),this}absellipse(t,e,n,r,s,a,o,l){const c=new Sa(t,e,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ta extends Ze{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new R,u=new Et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=n+h/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Zn extends Ze{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;M(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(f,3)),this.setAttribute("uv",new we(p,2));function M(){const x=new R,O=new R;let w=0;const C=(e-t)/n;for(let I=0;I<=s;I++){const A=[],S=I/s,P=S*(e-t)+t;for(let W=0;W<=r;W++){const V=W/r,K=V*l+o,nt=Math.sin(K),J=Math.cos(K);O.x=P*nt,O.y=-S*n+m,O.z=P*J,h.push(O.x,O.y,O.z),x.set(nt,C,J).normalize(),f.push(x.x,x.y,x.z),p.push(V,1-S),A.push(g++)}_.push(A)}for(let I=0;I<r;I++)for(let A=0;A<s;A++){const S=_[A][I],P=_[A+1][I],W=_[A+1][I+1],V=_[A][I+1];(t>0||A!==0)&&(u.push(S,P,V),w+=3),(e>0||A!==s-1)&&(u.push(P,W,V),w+=3)}c.addGroup(d,w,0),d+=w}function E(x){const O=g,w=new Et,C=new R;let I=0;const A=x===!0?t:e,S=x===!0?1:-1;for(let W=1;W<=r;W++)h.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;const P=g;for(let W=0;W<=r;W++){const K=W/r*l+o,nt=Math.cos(K),J=Math.sin(K);C.x=A*J,C.y=m*S,C.z=A*nt,h.push(C.x,C.y,C.z),f.push(0,S,0),w.x=nt*.5+.5,w.y=J*.5*S+.5,p.push(w.x,w.y),g++}for(let W=0;W<r;W++){const V=O+W,K=P+W;x===!0?u.push(K,K+1,V):u.push(K+1,K,V),I+=3}c.addGroup(d,I,x===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ba extends Zn{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ba(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wa extends Ze{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(s.slice(),3)),this.setAttribute("uv",new we(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const E=new R,x=new R,O=new R;for(let w=0;w<e.length;w+=3)p(e[w+0],E),p(e[w+1],x),p(e[w+2],O),l(E,x,O,M)}function l(M,E,x,O){const w=O+1,C=[];for(let I=0;I<=w;I++){C[I]=[];const A=M.clone().lerp(x,I/w),S=E.clone().lerp(x,I/w),P=w-I;for(let W=0;W<=P;W++)W===0&&I===w?C[I][W]=A:C[I][W]=A.clone().lerp(S,W/P)}for(let I=0;I<w;I++)for(let A=0;A<2*(w-I)-1;A++){const S=Math.floor(A/2);A%2===0?(f(C[I][S+1]),f(C[I+1][S]),f(C[I][S])):(f(C[I][S+1]),f(C[I+1][S+1]),f(C[I+1][S]))}}function c(M){const E=new R;for(let x=0;x<s.length;x+=3)E.x=s[x+0],E.y=s[x+1],E.z=s[x+2],E.normalize().multiplyScalar(M),s[x+0]=E.x,s[x+1]=E.y,s[x+2]=E.z}function u(){const M=new R;for(let E=0;E<s.length;E+=3){M.x=s[E+0],M.y=s[E+1],M.z=s[E+2];const x=m(M)/2/Math.PI+.5,O=d(M)/Math.PI+.5;a.push(x,1-O)}g(),h()}function h(){for(let M=0;M<a.length;M+=6){const E=a[M+0],x=a[M+2],O=a[M+4],w=Math.max(E,x,O),C=Math.min(E,x,O);w>.9&&C<.1&&(E<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),O<.2&&(a[M+4]+=1))}}function f(M){s.push(M.x,M.y,M.z)}function p(M,E){const x=M*3;E.x=t[x+0],E.y=t[x+1],E.z=t[x+2]}function g(){const M=new R,E=new R,x=new R,O=new R,w=new Et,C=new Et,I=new Et;for(let A=0,S=0;A<s.length;A+=9,S+=6){M.set(s[A+0],s[A+1],s[A+2]),E.set(s[A+3],s[A+4],s[A+5]),x.set(s[A+6],s[A+7],s[A+8]),w.set(a[S+0],a[S+1]),C.set(a[S+2],a[S+3]),I.set(a[S+4],a[S+5]),O.copy(M).add(E).add(x).divideScalar(3);const P=m(O);_(w,S+0,M,P),_(C,S+2,E,P),_(I,S+4,x,P)}}function _(M,E,x,O){O<0&&M.x===1&&(a[E]=M.x-1),x.x===0&&x.z===0&&(a[E]=O/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.vertices,t.indices,t.radius,t.details)}}class Ra extends Rl{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Rl().fromJSON(r))}return this}}const vp={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Cl(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,p;if(n&&(s=Ap(i,t,s,e)),i.length>80*e){o=c=i[0],l=u=i[1];for(let g=e;g<r;g+=e)h=i[g],f=i[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return ur(s,a,e,o,l,p,0),a}};function Cl(i,t,e,n,r){let s,a;if(r===Np(i,t,e,n)>0)for(s=t;s<e;s+=n)a=Dl(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=Dl(s,i[s],i[s+1],a);return a&&cs(a,a.next)&&(dr(a),a=a.next),a}function di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(cs(e,e.next)||Le(e.prev,e,e.next)===0)){if(dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ur(i,t,e,n,r,s,a){if(!i)return;!a&&s&&Cp(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?Mp(i,n,r,s):Sp(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),dr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=yp(di(i),t,e),ur(i,t,e,n,r,s,2)):a===2&&Ep(i,t,e,n,r,s):ur(di(i),t,e,n,r,s,1);break}}}function Sp(i){const t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Wi(r,o,s,l,a,c,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Mp(i,t,e,n){const r=i.prev,s=i,a=i.next;if(Le(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=Ca(p,g,t,e,n),M=Ca(_,m,t,e,n);let E=i.prevZ,x=i.nextZ;for(;E&&E.z>=d&&x&&x.z<=M;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==r&&E!==a&&Wi(o,u,l,h,c,f,E.x,E.y)&&Le(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Wi(o,u,l,h,c,f,x.x,x.y)&&Le(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=d;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==r&&E!==a&&Wi(o,u,l,h,c,f,E.x,E.y)&&Le(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=M;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Wi(o,u,l,h,c,f,x.x,x.y)&&Le(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function yp(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!cs(r,s)&&Pl(r,n,n.next,s)&&hr(r,s)&&hr(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),dr(n),dr(n.next),n=i=s),n=n.next}while(n!==i);return di(n)}function Ep(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dp(a,o)){let l=Ll(a,o);a=di(a,a.next),l=di(l,l.next),ur(a,t,e,n,r,s,0),ur(l,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Ap(i,t,e,n){const r=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:i.length,c=Cl(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Lp(c));for(r.sort(Tp),s=0;s<r.length;s++)e=bp(r[s],e);return e}function Tp(i,t){return i.x-t.x}function bp(i,t){const e=wp(i,t);if(!e)return t;const n=Ll(e,i);return di(n,n.next),di(e,e.next)}function wp(i,t){let e=t,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&Wi(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),hr(e,i)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&Rp(r,e)))&&(r=e,u=h)),e=e.next;while(e!==o);return r}function Rp(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function Cp(i,t,e,n){let r=i;do r.z===0&&(r.z=Ca(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Pp(r)}function Pp(i){let t,e,n,r,s,a,o,l,c=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(a>1);return i}function Ca(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Lp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wi(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function Dp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ip(i,t)&&(hr(i,t)&&hr(t,i)&&Up(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||cs(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function cs(i,t){return i.x===t.x&&i.y===t.y}function Pl(i,t,e,n){const r=us(Le(i,t,e)),s=us(Le(i,t,n)),a=us(Le(e,n,i)),o=us(Le(e,n,t));return!!(r!==s&&a!==o||r===0&&fs(i,e,t)||s===0&&fs(i,n,t)||a===0&&fs(e,i,n)||o===0&&fs(e,t,n))}function fs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function us(i){return i>0?1:i<0?-1:0}function Ip(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function hr(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function Up(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ll(i,t){const e=new Pa(i.i,i.x,i.y),n=new Pa(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Dl(i,t,e,n){const r=new Pa(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Np(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class pr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return pr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Il(t),Ul(n,t);let a=t.length;e.forEach(Il);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,Ul(n,e[l]);const o=vp.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Il(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ul(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class La extends wa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new La(t.radius,t.detail)}}class hs extends Ze{constructor(t=new Ra([new Et(0,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(s,3)),this.setAttribute("uv",new we(a,2));function c(u){const h=r.length/3,f=u.extractPoints(e);let p=f.shape;const g=f.holes;pr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const M=g[m];pr.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=pr.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const M=g[m];p=p.concat(M)}for(let m=0,d=p.length;m<d;m++){const M=p[m];r.push(M.x,M.y,0),s.push(0,0,1),a.push(M.x,M.y)}for(let m=0,d=_.length;m<d;m++){const M=_[m],E=M[0]+h,x=M[1]+h,O=M[2]+h;n.push(E,x,O),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Fp(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=e[t.shapes[r]];n.push(a)}return new hs(n,t.curveSegments)}}function Fp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class Da extends Ze{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new R,f=new R,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const M=[],E=d/n;let x=0;d===0&&a===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let O=0;O<=e;O++){const w=O/e;h.x=-t*Math.cos(r+w*s)*Math.sin(a+E*o),h.y=t*Math.cos(a+E*o),h.z=t*Math.sin(r+w*s)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+x,1-E),M.push(c++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const E=u[d][M+1],x=u[d][M],O=u[d+1][M],w=u[d+1][M+1];(d!==0||a>0)&&p.push(E,x,w),(d!==n-1||l<Math.PI)&&p.push(x,O,w)}this.setIndex(p),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qi extends Ze{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new R,h=new R,f=new R;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,M=(r+1)*p+g;a.push(_,m,M),a.push(m,d,M)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class fn extends Xn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nl extends Xn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ia extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Fl extends Ia{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ua=new xe,Ol=new R,Bl=new R;class zl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ol),Bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bl),e.updateMatrixWorld(),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const kl=new xe,mr=new R,Na=new R;class Op extends zl{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),mr.setFromMatrixPosition(t.matrixWorld),n.position.copy(mr),Na.copy(n.position),Na.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Na),n.updateMatrixWorld(),r.makeTranslation(-mr.x,-mr.y,-mr.z),kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl)}}class Vl extends Ia{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Op}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Bp extends zl{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zp extends Ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Bp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Hl=new xe;class kp{constructor(t,e,n=0,r=1/0){this.ray=new Ys(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hl),this}intersectObject(t,e=!0,n=[]){return Fa(t,this,n,e),n.sort(Gl),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Fa(t[r],this,n,e);return n.sort(Gl),n}}function Gl(i,t){return i.distance-t.distance}function Fa(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Fa(s[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ns}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ns);const Vp="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUEBAQEAwUEBAQGBQUGCA0ICAcHCBALDAkNExAUExIQEhIUFx0ZFBYcFhISGiMaHB4fISEhFBkkJyQgJh0gISD/2wBDAQUGBggHCA8ICA8gFRIVICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCAKAAKoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1lQEtY17nrUnCwEn0pijO0EU+4BEK+9fIN3PqrFeOPEi+mamuB5l1Gq84Iz+dEALbf94CrMkWyRmUZY4P05oTIY6+QgmLuIzxUUgEljAV52gZ/CtG4VWv1c/dkjGKo2Ue6K7g6spwBWiYiHYJLF4jySd9KLiSNI0AO2o1cwv5b9PumrccYZlhPQ8A+9WST7z5fytkGoI7WaSRmDHFFrEyXBt5OrH5Qa0Y43tpmV6gZAthLnBJx9a0reyVHDg8jvSQsSql+MmtCNAOKTegyKGIW7M46seake4LfKKeQnVjVeee3SMlSN1CCxXuGxGeeaooMZNSyyGQ9etNC4jye9DAiijJZnPSklY1NuIjKgdaryA7BWdwuVW55701Vy3AqUjgmmZx0plD2xgZp4C471XlJLoBVoRuRmmBmgfMBU1zjyUqNBmU1NcAeUlSURW/BHHRxWpcxhbkj1i4+tZ1spKzY6rg1q3cgW3tpz34zQQyspEmkRXBP7yM7fpiqdzL9iaG8jP+tb5hVyBRHqD2rn91Lyv41TmtmZJLNuWX7ue1aITJbm3jmQXC9WG78aZbH7VZyxsdskA3qR1JqHTpysjWsx+7wKsqPI1KOQjETkqaskmkfzrSDUlGJLY8/wBa0b2QGKG6H8WN1ZtuDGNRtW6PIWUexq9HEZ9CaM/fVc59AKhsB982IFZTjGDUovMxxsDziqkoaWwBzglM1JbwbrCM/wAR4pMZdDi4UktjisxoyspBORUhjlV12n5QOaU5ZwSKVxoRFzIBUpAMmOwpYFJ3NikjB800mwFdFHQVBMoCgVacE1EU3DmkBnsOTkcVAT+956CtGWPAB7VR2ZlORxQURRDzLwe1WmuVVivocU63hWOGW4fgCsoiRzvx97mgCRD++cVNc82qGoEx9oarNxzYr7GgLjLNttw69nWtIIJ9FIPWPOKyIsrcwn1ODWpZSZlubdj6HFAjOnleSzjuoz+8j/pVu4dc218vIkABPrWdA21bq2J5idhj2PSp7XM/hlI+rW8hU+1aIi5VuV8nUlkX+LnNa11Hu0+OVRyGU1RvgB5TY5ArSGTYQp6jNU3oBGF/1s56s4H4VtSRmOxKIPvIRWaiZtB3BkP863WX93g+mKxbGY0IL2mW6Y20zRpHijntLpsSK5wx6Yq4ICLTywMEOahu7EykSL8tFwZdeEbf3bbh3Ipj2/HAq3pNrssiHOWPXNXGhUHpVPYjnSdilb223J7AVElvgO5FaQUcgd6idMEKOlLoCkUBCSCe1NS2O3ditIx7U2gUyQqq4FSUncxrhQDtqrsHAH3mOBV64G+TAqvGhExY9I6LmhBqH+pW0i6seaetqiqF2dBio4AZrx5Tztq4WOeKYHNwuXujmrkn/Hiw9DVGA/6bjpV58G3k+tNokqqcmI575q1BIRrJUf8ALSI4+oFVE+4vFWojjVLOT/eH6UgK8sZTWrl+iyDJ/CpdMVha3yjhfNzj3qW5QtrXlD+JCadaYEd9tHBkpoTRBfj93F9K00HywrjogNUNQ6RL7CtRcCYf7MQq3sRcIc/YEPrL/Wt72xWFF/yD7X3kB/Wt8jv7VkMpW7eYjN23mrCBW+U4NVtJZGs2XILq5yPSr6wclyMU0DkLp/zNP/dBwKsOMmoLLi5kUfdqyx5quhzy+Iaqcmo8Zl+lTcgVFHyxNIF3Ek9KoTHk+3Wr7nJPtWdN3HrUs3plbHDPUFwfLtWA+85q2y4IT0qlJmS62kZC9qRqNtYvLgJI5brT9tSt8qhag8w9hQ2Wkc9Ambhmxkipo33W0gPXNNikVC4/ibpSmRPL2J97vWpmMHarSLjULIY4yf5VWAyp9q04YQ+o2f4n9KhsLk0kQ/4SNeP+WJqO2hxbXRxjEuDWh5W7xET6REVGif6LP233hoTJkzK1FQLmJf8AZFae0CWb2i/pVLUIydRQdflAq83El0fSOrkyQRf+JZb+zL+preOd2RWKgH9m25zxuT+dbJJ25qAZzjQXmm6k9zC26KRssta2mX93eSzNNEY414UHvVsRBt2RnPWn4CofbrTQSaY6w5aZ/wDawKmkPOBUdguLXJ/iOac/3qfQ595Cu3yYpE4Umo2OSBSucAKDzUmlhHfCE+tUmw0oX05qaZuQtVgf9Y/4Cg1irIQYO6RulRW8YLPIR1qSUHy44geTyaeF2RYzikWivKmWOD1OKkFvGABjpTRzKPrTyxz0pM0OTltsrIy/62PPHrVC280Tu0wxnpXSzRq+ZowOTzjvVWW3WWJmUcrzTTMmU1HytxWvac6nZ49D/KsnODnsV4/OtW0P/EzsMf3W/lQxGrCN+tzMP4FwfxqGFc2Meerzs4/Op7U41G/f3A/SorNgdO08nqy5/OpTJKN6oOqpj1qfq99n+5UFwd2o5HZ8VYiG9r73UfqK0WoIXax0S1x1BQn862ZFOcgcHFZcp8vw/lRkoo/Q1rRTJcQxyxkFNopik7DZLhLWAbz8zHaKdMNkDe61muTf6lE45ghyR7mr1yxKBc53NxSItrctwjbax/So2bBNSthYgB2qqzcGqJgrgp3yn0FBO5simQ5EbN60E4zUs1tqRSHLMfTiogpJC4461I3IHuaVRtJY9MUjQjHzXTHsvFPcEvii2Q7Sx6mpoI905Y9BSFexX8grk4qwtsdo47VM4BCgeuKsgriqSM5VGeeiaW2kZOdhPftWjARv4+6Qaxbe4ldDb3PMyjluxrTsXzDgnkNioNWUnG1Np6qzAfnWpZ/8hKw/65t/n9ayrtv3j8dCa1LE51LTR3MTn+VNgaVufkv37l2/lVe1J+z6QnrEKltmBsb5h3Zx+XFV4W2rpXPSMCoiS0QM3+nEf9Nttadr/wAhC4THBRT/AErHjP76V3P3bkD863goj1eI9BIGT6kcgflWqRNx1moktWgPIjlZHFUmtruzD20LfuMlRV3eLPVcN8scqjJ96tTbc78ggc5q7Am7lWzURssI6RD8zU7nddwL7k1WsMyK8/YsQtWE51AD+6n86mwMtyt8hNVJGwh9asTkBAKrEbnRQOtMUdI3JWG1QKZICE+tWJI8sBRJGN6j0FFg5kUyPnHtRIcRlcdTVkRjzTxxUUiqz+ozSaLUrsmiQLBvNIPli46tRMxVFjFKeoHZRzQZgSPNiiFTl8HG2qNu3mXsjZ+6Noq1uFMUo62PPr6PyJoJwP8AWHa1W7IYQ8/xVHqXzQQxkdJKlslJQ+xzWRuU7v8A1k31rT07/kJWB/u27H+VZNw2ZZz23YrY0wf8TKIH+CE/rj/CmyrFyy40y69C0h/U/wCFVQ2BpvpjAq1acaLKx7+Yf1NVY4z5mnRnnYtREiRWnO3+0DjhJ43/AFra1SQx2LXi/fgkWUY7cY/lms+WEOdVjxlmVPz21sQlLmwgkZAySRgEHvit+hkOvIk1GwSSM53ruH41jLa35lUGY+XnBHtRY6tJorSadeRloAxKSdx7VbbW9LmRiJWBY7VHqT0q1sOLZqQIIraNF4AFNtvmurh/QgCpCdgA9BUVmcW5Y/xuTWdxskuHzIopYBmYHsBmqjPmZ+elWbVsxlx3OKAt7tkXOrCo2fMzeg4p69Sfaq4xtz3PNUQkOLHLEHpUcKlime/NRvIywMcck1Pb5LknjaAKRT0QrjdcY9KACwIHVjQvSSSlLCPYT2oF0K5gmFxsjG1DyzVZ8tBxnOPepBKpXNY73r+Y2I1IycHdjNNLsLmb3Oe1LhIRjndmrFmu0E1X1D5riFOuCKuQDCyY7CsDoMVxuafH/PSt6xQLqkjdhbr+FYMfLSZ/im4robZD9qvz6QqP0qnsFxRlPDMjdyjfzP8AjUsMYOrRp/cgB/U/4Uyfjwupxjci/qRVqIf8VHIvpbjH/fRqIESZAR5eqXyfwtEkn55H9Kfo0n+gPBMfnt5Cn4HkU+62x6vCzD/XK0R/LI/r+dUYP9F8RC3kP7u+gAY9t4P+HFdMbNGTNK6soZ4/NCBgemRmsltIgN9CFUfK27AHp0rYikkhmkgk/wBWOhqCQMlyJE6DNPoUkTSTMI5Cx55FSRny7dAeMDOKozMSqKerMKs3jbWYDoFrMogDfumfPLGr1sxFsgPesxcmBR71oocbFPYVVhloyYjc+1MzhBTZCRCB6nFDclQKQrDmAIRSPepY/lhkfvzUTH98fRVqZhttQO54pohsiLbYY1/vNVXVpmWzWOM/MxyfpU052zLn7sa1m3TyyykgcdAfSmkWo7MdFeFgsW7BxyT2rnJ9VskuJUabLKxBIPvWhbQmZLm7lJEMaHnPXFebzyRtcytsblif1ropxRlVbvoegXfzaugHTA4q6ikQzsPSqTKW1Zgf4TitKb93YTP68CuFI6TFtowViJGSWH863oThNVk/ukL+QrKsVzLYj+F5CP0rYjQDStSZuN8zDP4Af1py2JkxdTXyvD6R4+6qA/mKkUEeLEBPD2rH8m/+vS65n+w3JHPy/wAxUl6PJ1jTbj+9IYj9GGf51MEZt6EGtnyYkuScCOVcn0FUdY8yOxN5EpM1vIJEx6d619bt/tGm3UIGSyHaPes6CRbvT4nbJEkQDflg/rW1PYV9C/BcR6nYC4j6FMkjsaZBlo2D84rmtLa70rWE03rFM+CD0ArsBGqq7dj0q5aIIvUobQ17Ap6ct+tLeNl35z2pYxnUWP8Aci4/E1FMN0mPxqIorqCD5VA9atqw3nP0qsgxJEvtmpohmTnu1UyixKfnjTvT15nWoSd123sMVLF/rWJ7VKExwO5pG9Wx+VWZv+WY/Gqkf/HsjZ+82fzq5ODvUDstMze6KLhp2l2jrxUctm90YI1bbFglyO+K0raJFDDvg1BbuGtg3YcCmiufojL1YR2ugXYQBEChB7kmvORbblDDGDz92u88WTFPDZRT80kqqAe/NcrC9r9njzJg7RkY9q6Ke1zOT11OghUSavK2OC1X7mMHTJAezEVTshnUXI6FjV64z9ilOf4ia4UjdsoabGPtVghH3SzD8BWlKM6FdFehmz/4+Kgso/8AS7RgOVhcn8//AK9W5hs8Ozn/AKaE/wDkShoiT0JdaTOiXA9EB/IinawDHp0NzjiOSGQn0G4Z/SrN9CJ9NniPRom/lTJgdS8GqV5kmtMD/exj+dVTWhlKWxLdqGicd+cVz2kjbaTJjmO4eMewxkfrXQwstxpkU458yNWH49awLX93q9/AehCSAe+a0ih30GzKH16xAXnc/PttrcwduDzisZ5IoNfsXlcIpDqCf723itqQhQfmFOp0KitShb83N0/YALTChabj6U+3wLW4f+/Lx+Aoh+eZs0kaCBSLpx/dTFS2/wDrU+maggbfJPIf7xA/OrEfAkP91MfnQMbGeWY9TU6HBf2Sq6/fRfUCpycRzt2C4/SpBj4QWSBPcVoPgySeq4FVLVf38Oewq2cbpmz1ahmE/iEHEMjDrsNVIf8Aj0ULwMcVLcSFdOnYddpApqLtt0QelCCJzPiSM3V/oulg4EszO3rgVwt3AReziI5jEjbee2eK7rWZQPGNogOWitWVMdixOf5VwQtbplDDdg8jiu6MbQRhOTbO7005bd38xv5VpXC/8S9h7N/KszSDlDuH8TfyNa0vOnEnujn9DXDY7BlnxqEHo1v/AFFWJEL+Hrpe43H8nJqtacXVkT/zwNX4AWsLqMdzIPzz/jSaJlsaG3dsxyCo/lVXQ1z4agiz9wug9huNT2L+Zp1q/cxjJ9eKZoI/4kuPSaQf+PGtIrQ5pMh0gA6LCg6I0kY+isQP5VjuoXxLL/twqPy//XWzo3GjR/8AXWU/m7ViXW4eJ4PQq/8AKqitbFp6Ed7bxXWv6VbyruUuzf8AfI61fljlZZDu6E0yZRFrdpcsvyxwyYPuaWe+QW0gHDHjp61MjaO4luGXSrdTwxyx/OnwcFmFPlGxAp/hXiq6vttJWz0pmjG2uRGR65NWycW8xHdtoqtbDCIO+KsqN0duv9+Qt+FFhXAf8fbD04/SntzakZ/1kmP1qKJg0kr+/WpGyFtE9ZM/kKgHsX7cH7SPanMx2v7tT7YDzWbvio85ZB6nNSzF6yGXRzAIh3Kj9amPBHoo5qKQB7qNffNSzAeVKzdACSfYCtIxC9jh9WWVfE09+V2xwQh4z/e+Uj+ZrSsvD27T7YvNhjEpI298D3rO1bUJNTure1jiK+ascJGP4Q2WrsQxCgDAA6cV21HyxSM4JSuzA0iAbV/3zV1h/okUf/TJz+lQaQPkibsXIq6qhooc9TCw/SuJHRcqWfMunt6wH+VaVofnnT0IP5isux/5hfOf3GP0q9C3lzX7n+FFP/jp/wAKGD2LmkkHSLT024qTw+P+JAjf3pXP/j5pNOXy9KtU/wCmYP5807QMf8I1bt67m/U1S2OKZBpA/wCJFA3+25/8eNZV2mPFFiPVX/z+ta+kf8i7bexb/wBCNY95ID4ptOfuxSH+VWty1sX1VHyjrnbwKo3dtEQm3jc4FXoyDG8g9TVRyGurSL1bd+QrJnStB98RvK+1Un4sWB6s1TXLbpj7nFQTA7LdB3wTTG2WYhg59B/SrCDa8P8AsRFqhx8sx/Afyqdxtac9liC0DILUYt3J5GDVgj99ae2T+lRW64s/Yip3/wCPyJO4iJ/UVIbl+A4Ej9sU1Bl0OOgzQnFpI3Y06P8A1pHotJox7iRIGvGPoMVW1+b7NozBfv3LiJfxPNaFmu7zH7muQudRM+vTXmoyKLDS3faoPBxx/MfpXRSWtzGctR3h5IoPE97DeKizJCPJU9QM9fxrYa4RXYY6HHWuZsNOurzXrTWrtnWWVBeOOwUkiJP03YrrxaxYG4At3+tVVlzM0orljdmVpSkWUB/22NWC22KM/wByOQn8qi0sFbNM+hanXR22dwf+nd/1FYGxWtQUOljp+6x+lWXfbaatID0UL/47/wDXqFF/0rT4+myHcadIvmaXqIHDS3SRr/46v+NDFJ6G4gEFsueiRAfkKZo+YvC1mCP+WQP58/1pdQbZYXZ/uwSH/wAdpYQY/DlupGCsI/8AQarocr1sVNIY/wDCM2zeskn/AKGwrAEoufGkUfUR20mfzrc0hseFrT/ek/8AQ2rBsgP+E2vXHRbXP5k1cd2XFafM2IM/ZGz3c/zqJQDqsGP4Edj+n+NWEVhZRAf3cn8eagiUrqV0T/BAMfj/APqrI6GVn/1xYipGjBniGPuqKawzJj1qx1uZG7KP5CgECDdCP9tx/OpJz/o8zf3zj9KbGNot19Bk/gKfcL+4VP7z/wBaChFXbbhR6gVIedSnb+4iKP1NKgz5fu1Nh+ea5b+9MVH4cUrAXW4tVX1YD9aaj481+w/wpXb5YgB1Zj+lQO22wlcHknH5nFBl0uadkRHbK/8Asljn868nWKXUFt7U8te3BZwO4LH+nP416rdgR6XdEHaFgbn04rz/AMMQiTXYSR8tnblx9SCortoq0W2cM3zSt3OuLQjZ5CBEj2qMegAUfoKm3ORkmq6jgLjgmsuXUXWeQBuAxH61yXvqeoo2SSLtp8ljH/1y/rUF8W/s6cDqY1X8zU8H/Hoqn+4P1NQXWTIIezXKJ+GM1JCJ1TOrsAPuxBR+lRhGMdqucmfUCy+4BY/yAohn26rfSkZWL+QUf4UtqHWXRIn5IWWY/wDfOP8A2amTPY0tXY/2ReY6tHtH48f1q/dgJp7RjgKuKz9VH+hKn9+aJP8Ax8Ve1IE6bMo64qjme6MfTc/8I7Co6CWQf+RDWVaJt1fWp8cpFEn6k1e05mOhhF/guHX/AMeqpZqWj1Rz9+S6VD9AAP61a0uarZIH1kKBCqNuTCEY74qxZzG5kvpj/EY4x+FXbiytWd2Eagr8xOO4qKyiVLLgfflJ/KszV6kcaZnj/wB405RmO5f6gfnUsCjcrexamRj/AEYj++yj9aQx+P8AStvZVP8AKluCA8YP8PP5LRH81zIcdSQKbON07+2QPzpoE9SaAZaLPpmo7Pm2jf8AvEufxJqST90srD/lnE3506GMRxxJ6AD8hQwvqPkOJYl9FJ/OqsjFdPt0PJedPy3Z/lU0zZu3x/AnNKI8yWgxxuBA/D/D+dLqS7co/wARzfZ/D043YLrtP41z3hqNVtry7GP3hWIf8BG5v1bH4Vf8Vs9xFa2MX37idY1H1NVnEGjWkWmWnzAu3J6k5yT+dda/h2OWEfeTNGRjBGzvxiPeP6Vmx2iPGrtjLAE0Xt8bi3YHhn2px6VYGxVC+gx1rGyPRQ9cqqDPSFfzqCUmS9tNvUzs/wCS/wD16nPy4z/CFU/hUKYXU7Hn+GSQ/nWSMuhWaRo4L2UD5pJdmPXJwK14Fz4iCHn7PaKP++mP/wASKz7dRL9ijIyXmMze4Uf4kVsWQWTVtTmXt5cefopP9aZlJ6DNTyWsEz9+7jH5ZP8AStHUTiwmbPQZrP1DnUtHj/vXJP5I1aN7G0sDxqPvLzTMW9Uc3pMoaxEf965lP5E/4U3SAZbZX/57XRf8N3/1qi03bDpMs7HHl+c4P4n/AOvWlpEXlWllHt5SJXP1I/8Ar1SNXsWZxtE30qGEFLOBT1O5qmuSfIlPrxSyIRHGB1WIfqRWZd9iA/IZAP4IP1NNAxHaj/bDH8FP+FPucBLt/XYtNk+VYh/dhkf9P/r0yrj7ZfniJ7ruP40yMb/LP98qfzyatqFjzn+CIf1qKMKJolHRc/oKYrjZRuiuPRmVM/Vqnx/pCDrwT+ZqA58uJP78pb8BUqsRNI39xaTDoVgTLNdEdThfzNaLoPttuv8AcVm/kKo2MbbSzDBaQfoK0c/6VK5/gQD+tNIib7HO3rfaPGlnECStnA1y/wBei/rUj2sc0xkc5MUapn3PWqsLg+IvEE5HMKRQA/hkj86swNu0sSFvmklya6F2Cn3I5rKOOSNlwQpzUJjnJJ2nmrm4sxYLlelO+0gHG2s2rG6YSHL3Bx0YY/KqLnOqXEmcGCwOB7mrkzBftDE8biPzqjMpMuouv3ysNufxxmsUD2L+nxH+0CMf6i3RPxbk/oK0dH+db+XGA922PfCqP55qKxAQ3s7D70pGfZVAH9ataGAdDicdJZJJAfYyEj9MU2ctR6Fa9c/21pkYHIZ2H4Lj+tbRO3c7fdVCSaxZ2H/CXaZEecJMT+Qq3q07RaVdbTy0ewfUjA/U1Rm1dpI54xGPw0V/jkAQD13tnH6mtiIrBO/oBgfQAVBLGHuNOtx90uZMeyqf6kVbDRyBiBnkg0zoXYqT31u8JjDfMW2/jkCr8v32Hsq/r/8AWrONpFmBwBlpkP8A49/9atGQE3Pt5h/IKahA97FK5wbWQ/3pj+hpJ+sqjtbhP++jgUkp/wBGtV7vl/zNKx3Xc47edCn5fNTSDoTTdbo+wQfiBTI/9ZKx/hQ/qadLykn+3MB+Tf8A1qh3Dybhx3KqKAWxMB++gB/hjJ/Mj/CnqMxTH+8cf0oXH2qUH+BUT8eSf50+EZtIz/eJb9aQ76EkCAeSvTln/Dp/UUsbA+axPDSEfgOKVSFmcnpHGF+mef5YrM1K7Wy8NXFyeG8ptv8AvEVaVzJ9zG0pjJpFzfMcm+vZJc+qg4FJpt0P3kEjclvlFW4bT7NoOnWyjHkwbnH1GaxLi2ZY1u9xXAB44zW6auy4q0UbKW16LgKoJTrj2qx/Z1wfWotN1WQIwnA3AACt1bxSoJx0qXbqW21sYjkvCQBnfMF+vNV4H8y7ll6rLfBT7hFOanhba9mOzbpD+AqlYsfItWx8rLPdk+hyR/WuZl3ua8EjR+HTMxwWV5D+ZNa2nKbfQ7GEjlYEBH4CsXUg0XhvygMSNCEI/wBpiB/M10kyhFRF+6BgflVpXOapukYUMhl8ZlSOYbU/huk/wX9Kta1k20UI6ySr+S/P/Sq+moX8T61cMOE8iEH/AIBvP/oYov5Gm1uwRfuwh5W+uQv8s0LUS1ZAsrHWZHAO23txGPqxz/ICpLOTdHdt2WQqPw4P65H4VBBdxxx3l7IQFluWwf8AZRdv9DUelM//AAjUUr/flBkP1Zt3/s1DNluaEZ/0yxjPTdu/IVZkbCO3tI361Vtzu1i3HZEY/oP8akuCRZyHuUx+ZpCa94hkGZbSPP3Y1ptsd1whPV7t2/AIR/Slc41JwekY/kBUdqcPC/8Acilm/wC+m4podtCbeWW3H96R2/Q0yJd0MQ6+ZMPyoAKCDJxsgeQ/oKfB8i2pJ4jiaQ0B0JeguJc/eZj+gA/lVsKI0ij9Aoql1to1PVwv6nNWbq5jWUhTkqKQmruxXeZvst1J/fkYD6D5ay/EO6ZNP0leftEihh7ZH/160vLIt7SPqXO4/jz/ADqjIhufF6MeUtU3fTj/AOvWlPdtkT+FIuag4FtOBwXAiX86x9QjXfBbr/E36Cta8AaW0QjjcZD+HNZM5zqwJ6QxFjThc0sV1GJCQOWYVqK7BQCe1Z8Iy6Z+tX1hZlB9RmlN6lor3DbLUODgx2x/MkVEkbRxG36FLSOHHu7c067w0E8QP3zFGPqcVYRRLqsoH3Wuok/75QnFZMC9qR3XFnEB9+5iBHsDuP8A6Ca2ppApRe+PzrCuSW1yxQDO6VmP4I3P61sTBElNzKcLEhb8AMmmjCVrq5T0Ubob67zn7RezEH1C/ux/6LFVTIp1e9lY/LbxKp/LJ/nVjR1aDw3ZF/vGIO31bJJ/MmsXzt1jq04PE8jqD7/dA/SmnqKC6lW9Rz4atbRB++uxhB7u2T+hNbzIiWaQRj5dwCj2HA/kKy5zv1y2twMC0jZ8eh+4P5t+Vaz/AHo+MYyaGbR3G2eRqUr9khb+Y/wqeUZjCHnLqv61Datk3hHXYF/Op2P72EeshJ/AGkLq2UpDl7yU/wB1z+uP6UsalWmGPuWqR/iR/wDXqGQk2s+OrIij6sx/xqyG3S3eP47pYh9Aoq1sEhbtfmuQP4IUj/PJpWU7bhQOkKRD6sf/AK9JcEtNc/7cyr+QFSOfv9t06D/vkA/0qRdB7Y+1Rr/CpJ/BVrPZWIkYcsVIH1Y4FW5mw0zjtGQPqzYqBQGlgQfxTfoATSZotC8pDaiF/hiSs/TFD32rXPU+b5QP0FXbQhnmlJ68ZqtooB0kzYx9ouHk+vzf/WrRfCzCXxJEsylr/pkIgX9awpm/fX8oPDSCIfQVu7h588vUA5/Ic1z/APy6wAjmR2kNVFmz2JYVO8gdu9WzclSVB4HFQ2o4kc9M09YWZQ23qM1lLVgMRd91ErHrdM34KOKk0xTLcWkyn5XmnuWHtnaP51AuVHm55jtGlP8AvFj/AIVb0oBTjobezVWH+05yf/Qf1pCZZtV87xFE3aO3cn2LMAP/AEFqt65Jt0S+wDkwsgx6t8o/U1S0Q79XvWJ+7HEhHpwW/r+tXdSbc1ha8Zub2PI9VTMh/wDQKDGpoya+xa6dtBAWJcfgB/gK5eCFl8PabbP/AKyV4nb68uf51t+KXZdGnC8GUeSD/tOQo/8AQqpuENzYQHhFEpOewVQM/hnFNbji/dKdq3manqd244LiJT7Ly36v+lbFwcM2OwrJ0kNJocM7oVeZjKwP+22f8B+Falyfncj0okaxE08E20jn+O4C/lUrsTBvHUQyN+PQU6xTFpbjt5jyH8KjlOLaUD/nnGn/AH01Im5AEyYE/vzxqf8AgK5p9ty8H/TW5lk/U4pVIW7t2J+UNNKf+Arj+tFn8v2Et/BbGU/jzWnQTYsJErxt/fnd/wANxolf5YCP4mZ/1ptsDHEDj/Vw/qRRMpF4sQ/hUKPy/wD1VBSHspNq5J+86r+QzVaB/wB6r/3IWb6EkY/rU9wxSwQ/3llk/oP51XUBVuz2WOJPocEn+YpMa2LKP5Oi3E56hGOf+A1NYxG30uwgIwUj3MPcjP8A7MarXKg6LDbA4M7pH/302D/X8quNITKx/h2HAq7+7YzSvIozSFdLuJOmQcH6tWZcAxzRoT/qoR+eK0b/AB/Z0MI6yyKuP51mSsJrm4b+++wfyqlsbMm5i0xR/E+APqTU5nZCUA+7x1qO5IFxbR/whi59goqNQXQORywzUiGS7lS429cR26/UnOK17VFEWozKPmMgiJ9Qqj+pNZBfdPAuM+Zelsf7i/41fWUw+H4Z8/eZ52PqCxP8sVmhSLGgR/u727YYae4f8l+Qf+g1NP8AvvEmmRf88Umm/QJ/7Mafo8Zi0K1XqzRqx9yw3H+dNtyJ/Fdwy/8ALrZoh+rvn+S0zGfcp+IZ/MuLGwH8dwszfRAz/wAwKztQlaOW+ZesWnJGn+9K7frwtWr8+b4mtx1228h+hLKP5MahuwJbyeMAHzb+GEfSNFYj8w1VEbVrF3i2s44x/A8aH6Lgn+RqWaeE+dt5PAoV0kdEYA+Y5k/Dp/jUN75Y891G0AtnH+7QzWJfs8rp8OephY/nUUoyrennID9FXP8AOrEQ2QxKf4Y41P4ms+6Zw+FPDLO/45ABqVuQJISLV3xyliT+Ln/61WJE8uS6Qf8ALK2VB+NRzAYuI+2YIR9Ac/1NTzHP25/78qR/lV3Ie4ij5inYlEP86qWzPNezTn7uZGX6Bjj+Qq6cK5J7Oxz9Fqpp8gCqQM/JGv5jJqTVEt8vy+Tn7kccQ/Fs/wAhVZwDb3B/56XLD8AAP6VY837VdFiuAbsj8FT/ABqOFd9rZ5/jO8/8CbNSxx2LstqZZ7Rw5CWuXK+pxgZ+lNPzu6jsmB+NTvuxMV65Cj8arjIurlV+6JQg/BBn+tUKLSZVufmktyRxGHf/AArKtQXlhyPvMXP860rxtsVywOAkIH4mqdkgE477IR+ZPFaFMbcnN5MQfuRhPzNWltiUUiTAI6Y6VRJL3Eh/vzfooqQyy5OJMDsKRLIPOKi3uMcx29xcZ/2mOBV/VV+z+Gobboy2oiH1Kgfzqm0amSS1B5W3gtv++pBWlrgE2oW1t2e4iBHsHBP6A1kinubccYiiWJeFTCj6DgfpVLSRvvNWuehacRg+yLgfzq+uSBnqaoaUSNJlmUZ82aWT/wAfIH6CmYMzEIm167k/55+TF+OWY/oV/Kq9qy3FzYzp0aS7um/76Kr+hp9p8n2q5LZAuZp3/wB2Mbf/AGSjS4litLOHHzpp67v+BMM/qDVIp7l1IyupQKP4UUfqagvFJsz6yO388VowlWvbmQHOwgfkP/r1RnBMljF/eZc/nSNFsaczEXCqO8yr+AXNUSS5jBH/ACwUfi8n/wBapppMShu4eVvyXAqNVxcoh7GFf++QTTSJSHBC8q56vfAfgq//AFqmdcpGv/PS6ZvyNNtTuuLM9jczSfgCw/wpYyWewB7+a/5kf40Mz1uRXbMLWRh3D/qQP61PpEKfICvWUn8AtQXP/Hg6nriPP4sDV+zXyBuY8RxO5pIqfwlByit5q8YiuJ/xLDFSxx7bi0h/uIP5VFInyzp/dt4Yv++m5/mKslsajI39xCaTHF9iWNWkWMf89Jj+mT/Sqtq3mWcU3eZnn/Njj9D+lWGcwWayDrFA8v4gf/XqOGLyLeCLtHAifjiq6XJXxGXqOfscwHWSZY6Zb/It1IeAGC5+gqzOCwtFI+9Izn8KpOxXRx6zsx/M8U0blaEcoT1Cbj9WOaeLaVgGGcHnpSAczEdAwH4AYrpoYo0t40bGVUA8e1EtNiTnbSIS6wcHIkvlT8I4ix/8exVu8O/xRZKe0jHH/bNyKr6GPMv4JPR7qY/iyoD+PzflU0UnmeKWd+RDFIc+5ZFH6ZrPZCvqbzSbYy3cAmotLxFodjv6+Qpb6lcmor6XytJvZ8/6uB2+hC5pt+XtfC84T/WR2+0Y9duKEzOSMGAGLwvNOPvNYtJ/wKUlv5t+taEACX92F5ULDCB6cO+PyYH8aL6GOLTFtIxgSXUFuB/soV/+JpLLbJNeSDobw4/4Aqx/+ymruG5JphYi/mJyGmkx7Acf0pVXfrNlGf4QCaZY5TQmcH7+4/m7GpUIGuySD/lnG/8A46KS3LeiFmO4MR3U/wDjz4H8qeo/4mG4/wDPZz+AAFIFJmSP/ahT8lL0xHzD5/8A0ykk/NjSbsNO5PYD/SNPB6eQ8n5lf8TT0wskR7R2e4fif/rVDZuRLA2P9XYN+HT/AAqVhzMncQwQ/mf/AK9V0MXuMuR8pTGS00afkpNXmGLK6PdkCD8c1VIEt1GexuJX/wC+Rsq4wLQxoP45FH8qnYd9CiAGu51PRrtI/wDviMN/MGgfO1247qF/OmW5LCOQ/wAbXFx/49tH6NT4uIJR6ybc/SguHmS33GnXo7i2Cj6tx/hUlwwWSTb0xUd8QbaZQOTPAn1+deKbdMN03PTir+yKnrIz7s7Hzn/VWxb6Emqt0oRrOAdEUE/gtWbj97NcADO/yov15qrqDf6bcMP4E2j6npTRqR2ymXy0PJkYf+PN/hWjNNKZ5Cv3dxx+dVbBcXcR7IWf8FX/ABrXitwYUJQn5Rziom+wK3Uy/DsZVYSeq2Ue7/gbO1Q6YTNq13Me0a/+PO5H8hVzT/8AR4b0/wDPMRRD6LGvH/jx/OqmjKftOoOBwJEi/JAQP/Hqh7CW5oanl9Hnh/57skP/AH04X+RqzqyiazSEHBlmRfqN4z+gNRXAJ+xIBkyXaA/RVZ/5qKkvBuvbSPsheT64QgfqwoRDtcz9RYSXemwtwWmknHvtVs/+hCq2mzf8U0l4eC0Ulwfq7Mw/mKi1m4ZdTL9BZabNKvs7NtH/AKDS3kQtPCktrHwVhitox/tbAB+uKoDSsozH4dsYX++yRK35An+dRpueTUZl67XjH1ZgP6VoTqiC2iH3V3H8AKpWKk2iSN1kuEDfhlv500D2LG8fbPNxhRPI34Km2qv3NJZccrahfzXP9akJ/wBBkl7mCWQf8CNOuU/cTqBwAifoKTHEsBAk10o7WyoPxZqepDXtzxkG6RB/wFVNC5e7uj23Qp+oJ/nUMTYdpiePPnkP/AeP6VSM3qx9tnzIPaB5D9XfP9KvswjMWf4Az/lVK0BErqeqQQp+OCTVi/B8q4APzC0Kj6scCp6ktlS3TbawK3BS0Ufixz/7LUkKbraI/wB6Qn+lPkwBcnHCsiD6BAf6mn24HkWg9Ru/M5pmielxlyrPE+0ctdxgH0+YVVuORP33PirhlUQWyHrcXYI+i5Y/+g1WnXOADyz/AMzireiQqe7KKktckf3ro/8Ajq/41nTNvldj/wAtJ8fUKK0rTabpW6gebIfxasuTdm39fKaT8WPFCNi9Z5/eMB0hI/77Yf8A166NWKIqgjAGBWFZJ970aVE/BV3f1qhdeIYob2eH5vkkZevocVnJ2ehMkaSkfYJz/wA9riRifYHA/QCqehj/AEeeQn/XXUjn8DtH6IKsRkLo9q7dHBfP1Of5GodFUrpFkG+/Ivmt9WJb+tSyjQd9utWEfULDNMfY/Ko/m1SuQ+oYA5jg5/4EwA/VaqW+X12/lblUjihT24Zm/wDQlqW3Z31G8J6iSOMfQLu/9moRDRz96pn1TVIiMiZ7SyX2Utub+Zq/qP7670y3xxPfCQj2T5//AGWobbbJqvmH+PULiX8Il2D9RUjvnXLL/p3t3k/FiB/ImtGkJGndzgAE/wAMB/M4H9ajifZptucdRLN9MKR/Wq99Kii4DNyFRB9c8/8AoNSSnFokY422ij/vtxn+VJDZKykWZT/plBH+b81JIdyEf89LgD8N3/1qH+Y7Qf8Al6jT8uadCAxsAf4mZ/0NAIs2vMkjH+O8P5Kg/wAKz4WL6bnvJDI3/fbf/Xq1DLt0vzv9mebP5/4iobePFrAn91YI/wAyuaZC6l23U+dcP/enIH0CqP6Gpp8STSD1mij/ACw39aZZ/OqnqGmkb8DIf6CnfeuAR3uHf/vldv8AOkZt6orzuP7Onk/6aSN+AYj+QqdAUEKn+CL+Qqo/z6NCn/PSJCfqx/8Ar1ZuX2i4f+7GcflQaLYzlWSXX9NLH91bWjzAe7ZAP5Cp5HBnjOeAw/kTULy+Xq9yo6w2iRH8SCP51FI7BGPp5jf98pitJdB0+rK1s5j066mA5W3P5kmqs4Uai6DkRCOP8AKvpH/xJlQ9ZnhQ+/IzVEtm6lmA4Mkj/gOKhtGqNKxYKkL9F3Sykn0zgfoKoQ6DFdW8d1IhLzKJGPqSMmp3/cWEnU+VZqp+pBJ/mK6aDdDbRQqRhECj5fQYpKz3Im7HNam4sPD0gfrBbbR/vBcf0qW1i8mOCDvEiofw4/nVTXiDaLAeTNMkQHqSyj+RNXHuY43uLl/uxLv+uOf51lc1eg6x+dbic9Zp5D+AbYP0UVNaHiSf+9PIc+ynYD+S1BZhobCBX++sas316n9SajSQ2fhQzH70do8oPrkZ/mapGcjP00ESRSk5MdoZG/35pSx/SmacWn13UZHPyLJHap7YUlv5ip7GNYpLxCeEkigH/AIlz+prO0pz9lSU9blpro/ixK/oK0QkXboi4miC8ma4P49f8TVxmaVpOCMtDGPpyay2V7M2phO50LOM/wCfarkd24uyZx1u2Jx6KgApF2NFZAIYpfWe4m/ABsfzqxEwjuoN3SG3dvy2f/XrJguI5LS2RP8An0mbn/abFWruXH2/1jtCv4t/+oUGdieUmPw7Ih4K2aL+LnH6nFWhtWc88Cb9Fjz/ADFQagAYJYAOtxbwj8Nrf40sr4tZZe/lXMn5HA/nTM7l/S1H2eyXvsBP/fJP9ahlkMVm04P3IZ3/ADfI/rVizPlOmf4IifyUCqc6EWTQ/wB6OCIj/ebn9Gqbkte8SzxhEghHaSJP++ef6VDeP/oty5/iZVH6f41auDm5iPozP+QIFZ94rSWkEan5pZ1/LP8A9ambRWmpAqn+0rxm5aWdAfoBx/IUXAP2UkfxW7t+LsKFcSXE8w6FpGX8MAVJdDbHMv8AzzihT8dxzWlTexNL4UwIC29mo/57l8eyqf8A61Y6gtCM/e8kfm7n+la918scAHBS2mk/VR/U1StosXgjxkLLGh/4CozWBrHYnuVDpLEows1wsX4DCkfoatTW9y1xIy3zIpYkKB056daqQBpZdNU8+ZIZj+OW/wAa0zCzEsH689Km4nqY2oJHLqGmK3X7V5g/4Cv+OKgvgTptwqdZmWMe+WFLdyE6zZD/AJ4wSyH2JZQP609yAljARktPu/75Qk/rikjRlq+l8uznwcM6FFPu3A/UiptSjB01rRRw8kNuB/smQAj/AL5BqleMJ5LGAj/WzISPod39Kk1SYpDbsG5SZpmPoqRMSfzZa1SM5bGVJOf7Fu72M4aT7TOD/vMwX+S06CAQSRRL9yODywPZQqn9W/WoJQU8OafZkYeU2sBH0YNJ+itSRXBbW2izlYtPaRx7vKMf+ijV2FEdI5M8KE8gfzNTRnAU54Mtwx+gZQKrFlXUEZ+gEP6mkin/ANCdmPS3nb8S4/wpFFy3PEa9NlnEh/4FJn+QrSnXzJb7HIea3i/Vc/zqkoRrlynQCCM/985/rWhCNxHfzNRB/wC+VH/xFIHsWpTvvIVPV9QZvwVCP6VHIC1iw9bZU/77k/rikkYJd2cmfui6m/XH9ae6FI/KPXfbR/l8xoZjY0gT5d43pCwH4k/4VFIc3SA/dN2F/wC+Uz/NakTJilPXc8Sfm3P6Gq4bfPEOxaeUf99YH6PSJteTFnLdf7kK5+pOf6GoGbbNZKf+WatKfYAH/Gpbl8+ePdEz/n61UuWxcXJHWO2VD7F2x/Q1UNZJGr0jcjt4yIEUD7yrj6lzmpLv7tyR/HcgD6BB/Wp7ZMm1x0I3fhjP9arv+8FqvXfK7fX5jj9KVR+8x01aKQ+6H+kSx9dsEUY/4Exz/SqSs22W4Xg7ZpPxOQP6VduG/wBIun9LhQPcLHn+dVo4sQbTyfkj+vIJ/RazLjsTWyhdYhUD5YIGP44AH/oVaqgKgU44GKz7Eb7+5fsEVPzY/wBAKttbyl2IbjNTddSXuc4219WuST92CJPxLMT/AEpZCft1uBy0cTPj03MoH/s1MQA3WoOOT9oRR+Ea5H4EmnxfPqs5xzHFFEfqNz/yZaEaNjt4fW4VH/LGN3+nyhR/6GKr+IGb7EbaM4kngMQ+ssip/Q06yJfUrucHOGSH89zH+Sn8qravJ5urWqDqJYUx/uB5T/7LW0dzKTE1GUHV9OKfcUXNzj22iMH85c1FpMayTatfnnzJfsyf7kaqp/8AH2koZ401S+uJseVa2UIGeg3M7yfoqVLpUbR+HbUyqVkmtvtDg9jIzSN+rVb3CJKtur6zbxsuVYwgj6KTVMRbtJAHU2Sk/wDApD/hWnFj+3AT0jlx+Cw//XqpAoNiVP8Az6Wi/m2f60iupeS3MOoXMZP3rlNv0CDFaFj809kvY3c7n8N4rPzNNesW++15IPwUACr2mthbSQ9reef8SR/iakUvhEbLvHkfd079ZHx/SrjNvvOen2tv/HYsfzqFVxqE8WOEhtI//HyakHM0RHf7VJ+PmAD9KTM0XoyEhOf+e4J/4Cmf6VWVvLePd/yytEJ+rE5/9BFSXJ2aVKwPzHziP1X+orJ1CeeO7lkiGYopQj/7qxqf6mlfQIK7uSPciVJdp+VDkn36fzBqKaTcly6nJmlIyPRF4/Vs1Yjs18hLIZy4Bc+vfP55qOxtVSzsbfJJZnlJ9Q0n+ArSkryuVWa5bGlxA5PRYIyPwH/6qggjIu7KNhzHEufrjn+VSz5e3n9ZSsf5nH/s1KjKdRmlbhYwf0B/xFYyd22PZFRR5sQb+/JM/wBcvgfpTgOI293k/L5R/M0QKY7O3DdVgXP1OT/hUkkYEbAcYRYwffqf1qWzSIumjAuX7+cFP/AY1z+uake/AdhzwaZY/wDHojDrLJK59wXOD+Qqcpg4EanHvWTdyFZ7nO25UxlxyHuJnHv+8IH8gKitZvm1G7A+YTygf8BAjH/oFM0os2laeD97yFb8WOf51DZtv0JpA2PO+ct/vEsT+tbWLLOjKEsribvJO7D3woX/ANlqlIVm8VTFfuRPKyfUIkR/VjV7RVZtD08OMM8YdgfViW/rVDSStxd3MuMlIwVPqZJnb/2QVrHczkUdTVLjTNeRT/x83CWUR9fkjhI/76LV0l26utxs4G0AAdhnpXM2Gy6l0KDOY5757z/eH724z+eyuglz9kJ/iZUP5yf/AFqqW4RGscajeOP4RO3/AHzGBSRpiRYsdTZx/lsNRSscak46+Vdkfi4Aq4q51goP+f2NR+A/+tQPqTwH/S9/92a6b8mxU0A22qAD7unKv/fX/wCqqMbk2Msw6/ZrmX8Wfj+VarJ5c8yfwqtrF/5EIP8AOpYS2Fjw+u3fobqKP/vmIPSWh3fZ/XyYW/77dif5VArlJbqbPP2q4lz/ALqbKnhHlXMi/wDPJYk/BY939anoRFFi4ZfsMCt0Yrn/AIFKD/IVnxuJ7W7lPIuJmX6gymMfoKuXsRIt4gwG0Ln/AICjn+ZFUbNCmmabGerbGf8ACMv/AOhEUFQRallMbXlwOfJiYj8AaljQR34gBBFtEsef91cH9Sarkb1eMj/XTRxkeoLAt+mafayGe5vZQOdxI/4ER/XNbQfLBsiorzSLbLhrRT/HNuP4AkfqBVck/wBn38nQsrgfjwP1WrTn/SYvSKN3+men9ar7c6eid5ZYl/8AHtx/QmuWxT7skZCZSmON6p/6D/gajupAsYlbp5hf8ACf5Cp0IDiVvuhnkP0AJ/qKoagrfY0t8fO0Wz8W2oP/AEI1Mik9S5Zq0dpbxNwywxKfY9SKSR/3r/KT8x71OdpnOOhl/kMVASuTnOfpUWFFHM3Tiz0uVo+PItjjHban+NVNTAtPDSQQ8GWLaMdvlAFLrD5sJ06RyyrCcejSKp/nTtQ2ve6dbN0EiEgegbcf/HQa3NDXnkW1ty4G1YYzj2CqSP5VzdlI9hpF9MvJsoRz/eMcCvn/AL6Zq2tVdTpt1C33pU8pfqxCj/0KsmUhfC1/uAzdyyRcf9NJhEMfmK0REiLTLd7fWdMsyuF07T5EJ9G/dxj9Aw/CuglQsUQcDfbp+pNUrENNqmrzMPv+Qi+x3PIw/wDH0qWa3uH1kSK5EbzRbR7qhP8AWm9wiRoN8F0O5iIP/Arg/wBKv2y/8TdHPa9dz/wFGrIszcfYTIBlmFqT7jzNxq5Z3Imt47xT1S5m/LI/rTB7li3TOkqP71lEv/fbf/Xrax5lzc/7V3Go+iqG/nWXDERahMH5TZR/kVP9a1LHm5VjzvvJW/BQy/0pMiWxnj95Zy4/5aJdEf8AApcCrZ/eXV6V/iaRQfcKifzzUFgpNtaL3MMH/j8mT/Kp7P8Aerv/AOeku4f8CmZv5CoGn1I9VkZHvHX+GKYj6hEA/UmnPGFvI4RwIoXH4kqq/wAjUdyfNDq3O+dE+qtckH9FFSyMDqU0mfk/dofbG9z+jKaBx2sQmUiWJumzzZT+A2A/+PZq/BEqCOMLjlAT6nHmfpmstlaS8mVR8y28UKj1Z2JP8hW42DcLju0j/wDso/Q1pLSlbuRJ3mV5ziS8YdlSP8cZ/wDZqVgEeyT0leU/RU20wHfFnvLcE/UBj/7KtLId8kJ7paMT9XI/wrm6jeyTH4zaup4zEE/77IH9DVa7O/U4I88GaIf98lpD+iCr3y/KpH3pFH/fILf4VnOd+qqc5CiaQfVVSP8A9nNDBbsuQvkIx6Hcx/nTo1kES/ugeBznrULNtt3x2iOPxFU31+ygkaBpgDGShHpjiktTR6HOXiiS409AMrJdgsPoGf8AotKp8/xZaL1IjeX6bRs/lIaB/wAhmxB6COaXHoRsUH8mpdLAk8S3si/dgtlQH0LOxI/JFrQoXVrjYYGP3TcqzE/3UBkJ/wDHKqGIjQdEtmByZrdWz3KjzW/VDTPELmW1NsnLvBN09ZCkS/8AobCtC7YLqmmwsMRpPLOPZUjKA/8Aj5rSJEh+iAm1vJTz515K6/7q7Yh+qGrhl23Fo+cgySSD8I6o6ITH4ctJ+00In/FyZB+r0ty4iiXnmGG4P02qV/mKb3KiSWDgWlsT0LQqR7CJnqkEaLS2mtuCNNfIP+0ef6VYtvlsoieMSufwW1I/rSxpnS3j9YLeI/8AApQMUxdTXikle8dJBwb6NB9FQn/2SrUEoS384fwxXUo/77/+vUduVkvLY93v5G/BUkH9aghydCj55fT85/66EUmZvsX4EEN1bo3CoIoz/wAAidv8KZo42xWSt/DsJ/CHP82qO8kJ+3FeCq3DL9RGiD/0Kp9wiWd0GBHDcEfgQg/Ragz6WIIwGexJ6tMmR/uxNJn8yKbGVeCaXPMhkOPcFYh/6CaeCq6koH3Y0nYe23yov/iqitkJs7Wdjw8SOV7gn95+pzT6Gse4WeZNRklHK+e0mfZMY/UGtSNgm6R+kcQ5/Mn9MVmaXDJa200UzZcIVz/tN82P/Igq9cENZ3QH/LV/KH4kR/41pWVlFGcdW2RHMVvbA/eWMsfqEwf/AEKppOL+7RekawxfiPm/kRSMwk1BoiOiqB/wN2B/RBTEYyXU7g/626f8lXZ/QVzGm7RdQZaLjrvb8sL/AI1kQsGuZpB08hCPq7uxH5KtaTTFLKWYdUt9w+p3N/hWZEFWS4I+59oCj/dSFB/6ExqGKG5bOGgf3O39cf414lr+tXaeJtVRLB3VbuUBg3Ubzz0r2yIf6Pbq3DEqW+v/AOvNeYrpkd4ou/tWfPHmZx1zz/WtKaLm+50dsqvrzuTnybQcemWbI/HyxTvDuRY6lMw+aSfG71xGn9S351Xtz+81SRehcRBvYInH/fTNWhpBC+GonAx5zySg+oaRiv8A46BQWZN6yXHiGO2UY3S2sf5O0+PyQVLrVyIrl5D1ttIuH49XK4/9AaoYDHceI3aPqk88oP8A1zjWEf8Aow1FfFbrWb2Nj8hbT7Ue6tMS4/75krREM6NIlt7KO0QfJCqwqB2CgKP/AEGsy4fzbSSQ8eZaTv8A99Mf6tVq7lf7HNIvDFeMevI/map3fEEiD7v2XYPYGcCmUtieQ7NMbHUJdv8AkoT+tWY1xuj65ubSP8nyf5VVuMnTVwOXiuR/31coB+gNW4yfNjf11BR/3zEzVQjRtmCTWjjoiXM36L/8VU3l+XZQw4wVis4sf9tOf0FUclLTcOq6Xct+ZjxWrdcXZzwPtUaf98xl6kye5UJ83k/xyIv18y5Gf0SrKjfA5zw8cCn/AIHIS36MKoh9kEEmOV2H8Vhkk/mRVq9cwWUhTtJgf8AhJ/8AQgBUia1KfmsYr6ZeC1nG6H0eRpHI/VKiN8730NqItiTMyJx2XgfzNTTDIuI04STUYYV91RVBH4bWp+0S3+m3joFigSS6fHbAyf1qrX0NYtJXZqKySuSMbZJJGBHosm0H/vlB+VQhwbazB6vIHcfRTIf1IqtEHjtUi3ZdLOJD/vuGJ/8AQ1qeUeZqCRjgCN8/8CdUX9FNXiHep6GFFe4rk1mC1+WbqJAM+yxD+RJqpbO32SCXv5ck35tu/oafBLssrm6z0SeQH2Zzt/QCiGMoIocfdjhiI/Qj/wAerlZqt2W7gbbaaPGQZo4gPUAKD+mazIcGzRkORN5sqn2kkJQ/kBV68ult7P7S3RHnnPuF3f8A1qpwQNbCGy6/Z0hg/wC+EDf1NSgh0JDcBU+1g/JGzt9NoYn+VcdpKBNDsEaGIlbeME7sZ+UVu65L9l8LanKoJ8u0u5OP90ivP7y4ube/uLeOIlIpGRSHxwDgV1UUuUVTc6Bbj7J4bv75h8qTTS/gJWx+iiugjtmsdN02xkwGghjjf6qoBP55rmpo3m8LWFo64N55EbA+r4z/AOhGt7xHf+RaX9wT8y28gH1IOP1xWSNOhg6CWeQyY5Fsrk+pmlL/AMoRUSMtxqbGLOW1RsfSK2/+KQVoaEiL9rQY2wmKHPrtiQn/AMedqzNGdZJ7E/3zf3JPs0qqp/J6sR012wSK2hxzJIv6YP8ASqcy7ogP+mVsv5z5/pUtyS13Bu/5Zxq/4kVHM211H+1aj/0I/wBKZXQkkP8AodqOxihP/fUzN/7LUkLk21ux6me4l/KAr/WoCCYrFP8ApjaKfrtkY1PGALe3B4zFdsPxZVH86bEaYTLPGf8An0ji/B5Sv/stWNRkP7yQf89LmX/viMJTGX/iZOo9LJR/3+cn9KHYS7U6gicfhJcYH6CoZk/iElXN9HAPukzY/Dyoh/6MouN1xLaRIcl5nkOe6GcH/wBARqkRg95bseoJfP8AstOX/lD+lZ19ctDEsw+V7Wx80n0PlMCPzlBoQbsejl9P05gfmP2i++uQwH6yirE5K6bNAPvfZkgx7yOq/wDspqMwiOeOxHP2W0jg/wC+ic/+ihVqd0ivELj5UuULfSOPzP8A0Jq3oq84hWfLTZYMiTahNIqgLNcHBHTCZUfpCPzqGKUx3N5Mxz5CpGw91jMh/WQUzTUkGn2IkXaz2wds9QzBM/q7in7RLb3UgHzTzujD28wRf+gpWFR3k2OGkUkJKnl6FLD32RQfyJ/nVqE/8TIk8gy/yXP84zUVzhxAB/y1vAceoXP/AMSKZG5CTv8AxCOV1+vOP/RlZIroxl7tlsLe2ccyQpG3/bZ1Q/zNO3M140mePOkf8NxT+RFPudjaxAgGFilRX9lSNpAfwbbVMB1gDZ/ebFQj3fAP/jyk07BEy/EBkbwhfRK2GltDD9TI4UfnXG6jbSvqt25gJ3TOciTA+8e2K7DxTiPw7Ipycm0UgehuUzXO3Co11KxlIJck8e9bQdoqw5JNm3dpt1bSbJOV+1Aj28tN3/stVvETedBLF/z2ljhx6kun9M06CRpPGdvGxytva3NwfZiUQfozUzVZlhmtJGAIS6a4bP8AdjjYn+VSkUJY3McXh+6v+is9xPn/AGTI20/98haraFANunw4w8Wlxq31kbI/9F1HqKm0+HS2pG2V7SC399xAB/XNamlR+X4gveyxSW0BHoERnx+T/rVMksXp/wBOlHTaQv4KNp/Worj7/wBJIf0ic0ku5xdTt3Tb9GYhyf0NNvWxJMRwBJJj/gNv/wDZUkU9izJhTBnjaYh+Vtn/ANmqSMFjZL0It2yP9+5j/oDRdoPt08efuTOPyt4V/wDZqdCd00LH/n0tT9N0rN/SrZKNiI51hAf+fqOM/wDAbdn/AK1FbEYgLfwwW276/NIafIQl1cyg8rPLMD6bLcIf50y4UJNeKnAVyo+i2wXH4MazexK3GqGMCseHjtI0P+95Lf1nFVNTKXFzdW4HySzR2x/3WdYz+kZrSC7tRnK/da6CY9h5K4/8htWajLPq1pgf6y8aQ/QI8g/V6EEO5egPm6leynnNwiZ9ljQ/zZ6g1Eu9uTHy7RXRA/2mkWND+QaptNniS1+0XDAJLLNOH/2TISv/AI6VpinzJrOJeQq2i59WXfLJ+hFdeHXvX7GWJ+FRRr/KbyQgjYrKv0A3P/IrVK28xrCwkP35ERpB/tFGY/8Ajziln3DTL9oz+8kSYIf9rAjH61POBDcKykBI1Zj9N0eP0Vq4ma2syIkCfTznKjzZvwx/9lTbcnycN1PlIfo0iKf/AEA0yTKzmIn5obHZ+JxU1uR58efuyXCp+SySD/0IVHUb2IpwZprmZOC0VxGfqWWNf/QTUMm2RXcHrcxg/TO8f+h09GzC9wD8sggz/vAtK36Go/J32+yI8mQg/VZBGP0jNPoOJh+KSsukBm3Ddc2BGOwN1Gf5HpXO3Sub2fAP+sb+dbvittyW0KkgPqVgvHoJ1/oKaNPa4UT+Yv7z5+vrzWqdoIHdyY3Ssy65qc7jmOGKAfizMf8A0EVna2Hu5DbA4JspUTH96ZhGP5mr+kyBV1O6/ha4OffCAfzJqhIZJtc8mMZKyWkOfQKfOb9FP5UIbLniSRZX0u3GAk1+rEf7Khn/APZBVvTD5jalOOTJcyjP+7HHH/NTWZqym48R6Tag/LFA8x/76VM/k5/KruhyqPDX2qM5E4edT675ncfmMD8apiRakRhZRq/D3TyzAf7Co2P0K1Ffr/pTxjvNdD8o0X+tLqErDxpDYBgVtNOI2g9CTGp/Q0so3anET3muj+csa0hrWJeveNQuH9ZJz+sK/wBKW2T/AEmOPv5dpH+SMf61HcPueVj6zfrc4/8AZatW4xrbLjhLqKM/hAP8adxIs/fmI7SC9jP/AAO4RB/WhvmuXQ877iXP0adY/wCQNQ2GZ/JcHG4Wkoz/ALdwzn/0Cn2GZbm1ZjzKIpP++pJJf5D9KlkbMsW7fP5rHgXE0p+gecj+lYomWyAvn6W1rcTD2YeWg/k35Vet3Z9FDD7xsxj/AHmjj/q5rPuNhimV1LxzJbQ/hNO5P/jrKaEXFFmNLW70c6PFIS1vAkLt/u/IPzKGp4I401GNYXJRZbqQfRdsH8yali06KL91BwZrmIlu5K4DD/x1vzqppwZ7f7XnO6x8z8Z5DN/St6TtGUvIyq6yhFdzUnJNrbovBlmgf/yJ5rD8lNOnDSPcYOd0McWPchz/AOzrRcgNfWsa9Fd5R9FjCfzelTMt25U8PdLx/uvGn/tNq5jR9yvLIH1fUpewkjQfQHJ/lSxTeTEGPVYpp1/3kjjT+rVVRzJHeSDrJcPj/vnj9WFWiUeOSM9QoUf7s1ww/korMbVkh6RqsfkfwSzyY/BVhP6moIrxFtorhQMSCOQ/Vh5n85BUM9y0NgZxk+XbSXK/8DMkv/sgomSMCe3XiO2JUD/d/dr/AOgr+VUtgjvY57W2eSbSRnBbVbYAHvgM2fp8pro9MsY5dIspWXl4EY491FczroJ1XQUXkf2gHH/ALadvyyM12Olx7dGsgGIAgQYx0+UUT+FDS1bOS03/AJFgyFcNLJKT75kIH6DNZ+lzGTVpJV5H225lJ/2UjMQ/9Gr+dalri20OxSbgLFGz+3y5P61keG42aO1JGDHYMZfd5HQH9YT+VaRFMXUZ1TXNRuGfb9gtVBPoNsjsP0U10Oj6fHBp2naYvCJ5EWPZEBP/AKDXJ3UQvpdWd/uXl19nY+qny4P5sa7e2mSGOXUH+VbeGac+23/6wIqmC2ucpot5/avxN1W5J3KY2VfoJ4k/9lNbURD6tYqf4i5x9boD/wBlrlfh7keJNQLfehtoFf8A3jMCf1BrqrFd+tWB9oj+c8p/pRJWBfCW5QD5uOjKrfncSt/SrkbKmtzyN937XLIT7JHGM/zqpH+8toCP44Lb9RI//sw/Oms5ZL6Uc4jvn/8AHyo/9BrNgizZSNbw2buMGOOKJ/8AZ2W0r/1H505XNramU8Nb24P02QOf/Zx+dGoFY4dUA6ATOPwgji/m9Ou1DyXsZ+7I0sP/AH0YI/6kU2K+pPchbXTZgBgQtEg9wrf4R1TjjVbgQn5k+2bR/wBsrdcf+PKatai5a0iQcma5x+GCP/Z6rWSs9xA56M15L+LTBVP/AHzupFpF6eR7fRZrpeXt4JbhT6kRMf5uKS2gWKWe2UcRzQWY9MRxqf8A2c1HLkaa1uTw7pa49nmjix/461WbOTNobr+9cXMp99rMgP5KK6Yr9y/M5pX9qvIWEi41RMH7kAYfSWUn+UdMsHybecH5XLz/AIESv/7OtMSVbS5v7gfdtFSL8I4d4/8ARhp0UQt4pIs/LDbPEPwWNP5g1ytm1tLFOzOLeHdxulJb/v6B/JDUrSJHYpMfvpHAjj3jiM39aqxuDpcdwv3jaqx/3vKkk/8AZxVzUbdWa6iT7s87hf8Av2kH8zU9Bt6pDHQJ5VpIM7PItG+hMMZ/SR6oLNuSWYn/AFiCbPrmaVh+jD8q0Z5ohfieXhTcOWPoEEzg/wDkFfyrHlQ2tlFbSnBjt4Uf/gKkH9VamloKO5leIj5Wo6Lh8OguZ/8Avm0cf+zj9a7NZEhRYd7DYNuAOmOK4/xCjzeKLeFYwwFjqL/Q/ukH/oZ/Ou1ZHdi6uoDHI+WqktEadWcd4kcrpl6kI2nyGjjA9SAq/qai0cbTeXA4Xy4oFX0w0kn/ALVFR+I5JFg+Q/fmjH/fLCQ/ojVFHcPZ6Tq982NiF5VHukKKf1Q1UdyJblHT3EtjpUrH/j7nM5+h33I/9AFdLrMwtvCN9CWw8sSW2e5Lu24f98k1gQWot7rR7Bf+WEMiEe6COH+TvT/H1yYvDYjtz++mvGKe5CCFf1era95Bsir4ARvtmr30gw19DDcL7L5s2P8A0XXVaUP+J3ZD0hiP5ea39apWNnFpmoy20HCR2NrCv+6PtBP6k1c05tupCY9IrVCPwt2b/wBmpS3BbFywj3x2cOfmVrZPwFuhqO3O63Zv+eyRj8Jbls/nuq9aR+XrESdlmH/jsCj+lVNMG+xsQRy62Sfiqeaf5VAEsiCazZM5YzyRk+oe9VF/RD+VEkgmBZTy1wjj3zeOx/SKobZpcacR9y4Nq7fUmeZ/5qaW2U/ZNNJ7lA31+zTP/N6BJF26b/TdKX+BpJHY+mCp/khqPTIpGuEdui2Frx6OfMZv5rRqYJgdU+9HYSSofcrIP6io7edrTXtVRj+5aQNCeyhIlVh/31UmiLlwR/xLYz/y0nQt/wAAjkl/nipdMUvpNkrDBNlGWHvIRn9Q351n62xt1HlNloLO7mH1WNIh+rGtxAkE5TokRjhPsFQt/wCzCul6U0jmTvUdjNkCy6deqet1NJGT6kyCEfoBSXUxTTtSnz92IMv4ySP/ACAplnKJNJ0xpflMvkSN/vBfOb9VNMlRv7J8iQcyTwQH6GONT+rmuVs2JFgSO5FqP9WX8oD8YYv5E1MIybq3VjnN1I4/3WujIP0jpLNRPqiKW4MgcfjK8g/SMVXgkkjgsJX/ANZDZq7j3W3kJ/WQUdCZbkNzi5sXi6PPaSsv++yRKP8A0e351X1WMzXkzL0B/MESf1q/JGjTCFDiSGSAJ7j7Q27/AMdtx+VQwhprCSS4XaQ0SnH97Hzfq2PwoeiKjqzD1AJL8RIULsAllMpx28y8hUf+gGu6t4S1tExxygP6Vwsglm+IV2yqpEdpYAn/AHr6Vv5Rj8q7WO9ihiSHcB5YC9PTir0H5nnWuZmv7C33YL3Dvj1AQof1kFQSRmXww1nu3fbJyoPqk1zj9FepL6WJvEEDyHAtIXd29A7bs/8AkA/rTZIza6VoMJ6x+WrfVLd3/wDQkFWl1JZfsmWfxAZCOVgiVT6FpJS38kqj4jaO98X+FdO25ilZbqQeigvK3/or9RWlpSbJdRkUZMT/ACH1VbeP/wBm3VQkjEvxIupCfl07TUgH+yzhf8WoT94UtjYm/d6pk9TawA/XNz/hUttGyy38H8UdkRn3FrGP61HqBU6k8kRyn2ONlPrlLsg1et1/4m+qKR1Ro/8AxyFf60n3NLaWLkpZTeXK/wDLFbxx/wABGB/KjalpEZBwlrcFvoEsiv8AUU7G6xvweskd6o9yZcD+Ypt1mWxv416Sw6gB/vBkjH6E0jKRDJi1jFuR81qWIPslmin9XpVUwzW9ueCoZx/wGGCM/wDoZp+rbDNO6HO6K6DfUvFGP/RbflUkgLX6HHKfaUP4zgD9I/0pMqPQbeDF4FzwEhgYf78kS/1NQfuWTUFm4JErg+zzykH8QoqSdzNrxjH3XuLf/wAckkb/ANpiuU1C8lbSLZhxJNaW6H1LeQr/APs5NSaRWupo6bNPqEs32qQPlre3J9pbhd4/NTXR6tcNHpGqXcfDbLiQe5VAn9K5zw3bNbakLV2LD+0QjH/cgeQH/vquh1Fg2kxAcrO0II9VlmG79Ca3qP3YpdjCHxtsbcw4tre2QYKLMV+gjMY/VxTpZozcWaseJLyVj/wGRmU/lDT3w09rg/cVC3+7JcRn+SNWbcIZrK0KcSrZy3I+vkvn9ZxXKzV6slj8yCyknQnzLW1Dfilu/wD8cFXplA1a6hIwhieIe277Og/Xd+VQYxNcKP8AVyl4D/wJoI/8ae04M+oSOPmjZHB+lxMx/SMUyJbkZAuLu2uYjh1mBkHqotnf+c4/OruoQrDaxRRD/l5i3D/toM/yqGztwNehaIhojFcK49GV4IP/AGk1Ou5DKI2VgfNuyV9wFZx/IUpDg9TkrKQP41vOTuaKzTP+0sFxN/Ngadfa5bw6ldQs4ykrKefQmptHhaTxFq0wQAR36ofX5dOVf5t+teJ+J/ELx+MdaRX+Vb6cDn/po1bpIaPSdQzNdasAOPsptP8Age3j9Z/1rSvGS41y1iH3HSeVR7l4kX9JGH51mxFrie5RCC1xqUbA/wDXN1z+luauxyqurzSsMLb28IB9Dukkb9Nn5Cr6EmnpLr9jeRek00g/4CZ3A/8AHNtZVlFJc+I/Ed4DkXOoLaKfUR4z/OtfQ0K6fYROMZ2F89tqHP64rO8OnOiW96etxJcXZP8AvSEA/pULcdr2NCYbWdf7lgg+mI5f/ijWpaZbV79h/wA/ar+Hmwr/AErOkIF/PEeptAPyCg/+h1r6OPMvL89/tgP5Tn/4mhlyfYliO6HJ6bowfrJcgf0pwO6FcdPNjb6ia75/MLTrQK9rGuPvCyb6kSF/6U20jzPYc5EkNmhHunmSH9MVLM22QTR77yVO0gQj38y4lP8AUVYQ7tUZuziFx/wKSc1FaqZYbLPLILRD/wCQ5P8AGpLFg8q/3kECflEjfzkNSyl0MySZo5Hux1hmmY/hDOw/9CFc/PpN+fF0cBBNrFBG+D2xEE/9kA/E1vTgf2dqbf8ATpczj8LZB/7PW5dwqmoXdwfu7fLH025oRonqY2jnyLxLpxnet9dsfQrKiKf++Wb8q0NUKwXemWfVfPEX4JA7D9QtVtLVZY8Px5mmwKPrM8ufzJWrOqfP4htlIyPJnlz/ALQMcf8AJjVz7GcdyvcyuhldM70iSE+xWCVx+rLUt6gTWj5X3YYliIH915YE/wDaTU50338pAzHcXLY/BoYj/JqEO7XbnPKyPFH+INxJ/VaxK3Y62JkcxkZJuYWB/wC3t2P6Rioowt3A8gPzSzrE3vugLfzmp1jcCP7FP2Dru/8AAeaX+biksoUie2Bb5GlMh9jE8CH9ENMz6sFLxHUTG5CXFujQuOoNxcTkH/x5asaiiwvFGikeXcZHsfIdR/SsSe7fRvCVxcTcyWMun27bv9iO3f8Am7Gtm9uPOuYSpzFKGl+mViAP/j9KSCmc/wCHH3aneyFj5lzd6hJ7HZLHAP5V4N4itxJ4r1eQRJhryZvzc17r4OYvBpcwAxNFeXBHcmS7Rh/M15BdWkdzeT3BjyZXZzx6nNdUFdsG7I7nRx59tYTrlRKJb8A9SGRif1nq9ccW18p+9PKY1P8A2zii/wDQg3502xgEV/b2yrlbW22fQOyAD8oW/WolJltrQnn7Rdeep9VMzTY/IUdAOhvLqKz0y9v2O1Le1lkz0xnOP5GorG1+xaVY2BXaYLK3hYeh25b/AMezVbxNE83g/ULCMZkvvI09fcyOv/xVbF/KJNTuHHRpcD6ZqSiruWTWrsj+AiP8CLf+ua1dBk2tcyk8NcE/k05/pWDpshk1rVB1xcQY/GRM/wDoFaOmSn+xJZRx88h/8hXB/qKTQM1NzW9nFIv8BQf982rt/OrFyUs2dk/5c5mI/wB1bP8A+yFQ3Kb9Ou0B5VpSB7fZdv8ANhU18gurm5i6faFuwMeo8qL+tSZvexFOfsc8xTgJMePZLdwP/RY/Kp7aJU1W7C9FuNn5RRr/AO0zVSbdcTTIerSXX4/NIo/9GipY5CpvZ/8AptcN+TXH9AKlmi0MifJ0C8I5J0a6H4lYl/8AZa3damEWh38548uGZ8+4VgP6VkQoHsr2EjhbYxD/AIHM6/8Asoq/4gP/ABJJITyJ3hhx6+ZMi/1NEfiRq1a7HWMY+03EAGBFcW0Kf7qRRvj8y1DP5/icqORHDHj6O7sf/RQpNJPnJFNn5pry7mH+6jvGP020lqUGr3sp/wCXeRYifQLCG/8AappzfvGcEh2lOrzwq/KtKZwfZ5Jpf/ZFqrCWgku5JDzHIZc/7tvCp/VmqWyjaPTVjI/eQ2WPxWFR/wC1DVSeczaddsPvMb1frmVlX/0AVA4r3izGFhhurXHzLDIyfVLeCP8A9mNRXSvHpV0sZPnKl66ewdrllP8A44KtsqSOJ1Pzb54m+j3SIP0jNVbYNJY6dJIfmuLGzRh7l1Vv0nP50zN7GT41cjwnqEuQUu9RlU/WIGP/ANpVrXRW2trSZh8sVk24fQQf4Vzni5X/AOERhidvlnupLtfdZJLiT+RFbHimV4/DWpTrwYdLkYAcYzG+D+cY/Km0uVMcCp4LTy7LQI3GGTSY8nvkyRn/AD9TXmFn89hbuZjlo1P6V63oURi1OCEMAY9OiA9AN4P+NeU6eSdLtCDEMwp2/wBkV0wuTJaI/9k=";function Pe(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function se(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}let Oa=4;function Hp(i){Oa=i}function Yt(i,t={}){const e=new sp(i);return e.colorSpace=t.linear?Cn:Qe,e.anisotropy=Oa,t.repeat&&(e.wrapS=e.wrapT=t.mirror?1002:1e3,e.repeat.set(t.repeat[0],t.repeat[1])),e}function Gp(i,t={}){const e=new We,n=new Image;return n.onload=()=>{e.image=n,e.needsUpdate=!0},n.src=i,e.colorSpace=Qe,e.anisotropy=Oa,t.repeat&&(e.wrapS=e.wrapT=t.mirror?1002:1e3,e.repeat.set(t.repeat[0],t.repeat[1])),e}function en(i,t,e,n,r,s=1){const a=i.getImageData(0,0,t,e),o=a.data;for(let l=0;l<o.length;l+=4){const c=(r()-.5)*n;o[l]+=c,o[l+1]+=c,o[l+2]+=c}i.putImageData(a,0,0)}function Wl(i=1,t=[62,58,56],e=!1){const n=se(512,512),r=n.getContext("2d"),s=Pe(i);r.fillStyle="#1b1a19",r.fillRect(0,0,512,512);const a=64,o=32;for(let l=0;l<16;l++){const c=l%2*(a/2);for(let u=-1;u<9;u++){const h=(s()-.5)*26,f=e?1.5:1;r.fillStyle=`rgb(${(t[0]+h)*f},${(t[1]+h)*f},${(t[2]+h*.9)*f})`,r.fillRect(u*a+c+2,l*o+2,a-4,o-4),r.fillStyle="rgba(255,255,255,.07)",r.fillRect(u*a+c+2,l*o+2,a-4,3),r.fillStyle="rgba(0,0,0,.22)",r.fillRect(u*a+c+2,l*o+o-6,a-4,4)}}return en(r,512,512,22,s),n}function Wp(i=2){const t=se(512,512),e=t.getContext("2d"),n=Pe(i);e.fillStyle="#2a241f",e.fillRect(0,0,512,512);const r=8,s=512/r;for(let a=0;a<r;a++)for(let o=0;o<r;o++){const l=(n()-.5)*30;e.fillStyle=`rgb(${96+l},${84+l},${72+l})`,e.beginPath(),e.roundRect(o*s+3,a*s+3,s-6,s-6,8),e.fill(),e.fillStyle="rgba(255,255,255,.07)",e.fillRect(o*s+8,a*s+6,s-18,3)}return en(e,512,512,18,n),t}function qp(i=3){const t=se(512,512),e=t.getContext("2d"),n=Pe(i);e.fillStyle="#1a1c22",e.fillRect(0,0,512,512),en(e,512,512,30,n);for(let r=0;r<60;r++)e.strokeStyle="rgba(0,0,0,.25)",e.lineWidth=1,e.beginPath(),e.moveTo(n()*512,n()*512),e.lineTo(n()*512,n()*512),e.stroke();return t}function ql(i=4,t=70){const e=se(256,256),n=e.getContext("2d"),r=Pe(i);n.fillStyle=`rgb(${t},${t},${t+4})`,n.fillRect(0,0,256,256),en(n,256,256,26,r);for(let s=0;s<12;s++)n.fillStyle=`rgba(0,0,0,${.05+r()*.08})`,n.beginPath(),n.ellipse(r()*256,r()*256,10+r()*40,8+r()*24,r()*3,0,7),n.fill();return e}function Xp(){const i=se(256,256),t=i.getContext("2d"),e=Pe(9);for(let n=0;n<32;n++){const r=t.createLinearGradient(n*8,0,n*8+8,0);r.addColorStop(0,"#050506"),r.addColorStop(.5,"#1c1c20"),r.addColorStop(1,"#050506"),t.fillStyle=r,t.fillRect(n*8,0,8,256)}return en(t,256,256,8,e),i}function Yp(i=5){const t=se(256,256),e=t.getContext("2d"),n=Pe(i);e.fillStyle="#0d1f45",e.fillRect(0,0,256,256),en(e,256,256,48,n);for(let r=0;r<1800;r++)e.fillStyle=n()<.5?"rgba(40,80,160,.25)":"rgba(0,0,10,.3)",e.fillRect(n()*256,n()*256,2,2);return t}function jp(){const i=se(256,256),t=i.getContext("2d"),e=Pe(12);for(let n=0;n<8;n++){const r=(e()-.5)*18;t.fillStyle=`rgb(${72+r},${58+r},${56+r})`,t.fillRect(0,n*32,256,31),t.fillStyle="rgba(0,0,0,.35)",t.fillRect(0,n*32+31,256,1)}return en(t,256,256,14,e),i}function Zp(){const i=se(256,256),t=i.getContext("2d");t.fillStyle="#14141a",t.fillRect(0,0,256,256);const e=8,n=256/e;for(let r=0;r<e;r++)for(let s=0;s<e;s++){const a=t.createLinearGradient(s*n,r*n,s*n+n,r*n+n);a.addColorStop(0,"#3a3a44"),a.addColorStop(.5,"#15151a"),a.addColorStop(1,"#050507"),t.fillStyle=a,t.beginPath(),t.moveTo(s*n,r*n+n),t.lineTo(s*n+n/2,r*n),t.lineTo(s*n+n,r*n+n),t.fill(),t.fillStyle="rgba(255,255,255,.07)",t.beginPath(),t.moveTo(s*n+n/2,r*n),t.lineTo(s*n+n,r*n+n),t.lineTo(s*n+n/2,r*n+n),t.fill()}return i}function Kp(i=21){const t=se(512,512),e=t.getContext("2d"),n=Pe(i);e.fillStyle="#d8d3c6",e.fillRect(0,0,512,512);const r=["СВОДКА ДНЯ","ВЕЧЕРНИЙ ВЫПУСК","КРОССВОРД","СЛУШАЛИ — ПОСТАНОВИЛИ","ГОРОДСКИЕ НОВОСТИ","ПОГОДА НА НЕДЕЛЮ","КУЛЬТУРА","СПОРТ","ОБЪЯВЛЕНИЯ"];return[[0,0],[256,0],[0,256],[256,256]].forEach(([a,o],l)=>{e.save(),e.beginPath(),e.rect(a,o,256,256),e.clip(),e.translate(a+128,o+128),e.rotate((n()-.5)*.12),e.translate(-128,-128),e.fillStyle=`rgb(${205+n()*30},${200+n()*28},${186+n()*28})`,e.fillRect(-20,-20,296,296),e.fillStyle="#1b1b1b",e.font="900 24px Georgia, serif",e.fillText(r[(l*2+(n()*5|0))%r.length],8,28),e.fillRect(8,36,240,2);for(let c=0;c<3;c++)for(let u=0;u<20;u++){const h=60+n()*18;e.fillStyle=`rgba(30,30,30,${.45+n()*.25})`,e.fillRect(10+c*80,130+u*6,h,2)}if(e.fillStyle="#6a6760",e.fillRect(10+n()*100,46,90,70),e.fillStyle="#35332f",e.fillRect(110+n()*40,50,70,60),e.fillStyle="#111",e.font="800 14px Georgia, serif",e.fillText("ГРАНД. ВЫХОДНЫЕ.",10,124),n()<.6)for(let c=0;c<7;c++)for(let u=0;u<7;u++)e.strokeStyle="#222",e.lineWidth=.7,e.strokeRect(180+c*10,150+u*10,10,10),n()<.25&&(e.fillStyle="#111",e.fillRect(180+c*10,150+u*10,10,10));e.restore()}),en(e,512,512,18,n),t}function Xl(i=30,t=10,e=14){const n=se(256,512),r=n.getContext("2d"),s=Pe(i);r.fillStyle="#0c0e14",r.fillRect(0,0,256,512);const a=256/t,o=512/e;for(let l=0;l<e;l++)for(let c=0;c<t;c++){if(s()<.42){const h=s()<.65;r.fillStyle=h?`rgba(255,${190+s()*40|0},${110+s()*40|0},${.55+s()*.4})`:`rgba(180,215,255,${.5+s()*.4})`}else r.fillStyle="rgba(30,36,52,.9)";r.fillRect(c*a+3,l*o+4,a-6,o-8)}return n}function Jp(){const i=se(128,128),t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),i}function Qp(){const i=se(256,256),t=i.getContext("2d");t.fillStyle="#e9edf5",t.fillRect(0,0,256,256),t.strokeStyle="rgba(70,75,90,.75)",t.lineWidth=3;const e=14,n=256/e;for(let s=0;s<=e;s++)t.beginPath(),t.moveTo(s*n,0),t.lineTo(s*n,256),t.stroke(),t.beginPath(),t.moveTo(0,s*n),t.lineTo(256,s*n),t.stroke();const r=t.createRadialGradient(128,128,30,128,128,180);return r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(60,70,100,.5)"),t.fillStyle=r,t.fillRect(0,0,256,256),i}function $p(){const i=se(128,128),t=i.getContext("2d");t.fillStyle="#7a2a22",t.fillRect(0,0,128,128),t.fillStyle="rgba(230,200,150,.55)";for(let e=0;e<128;e+=16)t.fillRect(e,0,5,128),t.fillRect(0,e,128,5);t.fillStyle="rgba(0,0,0,.25)";for(let e=8;e<128;e+=32)t.fillRect(e,0,8,128);return i}function t0(){const i=se(256,128),t=i.getContext("2d");t.fillStyle="#c9561d",t.fillRect(0,0,256,128),t.strokeStyle="#1b0f08",t.lineWidth=4;for(let e=0;e<=4;e++)t.beginPath(),t.moveTo(e*64,0),t.lineTo(e*64,128),t.stroke();return t.beginPath(),t.moveTo(0,64),t.lineTo(256,64),t.stroke(),t.beginPath(),t.moveTo(0,32),t.quadraticCurveTo(128,8,256,32),t.stroke(),t.beginPath(),t.moveTo(0,96),t.quadraticCurveTo(128,120,256,96),t.stroke(),i}function e0(){const i=se(128,128),t=i.getContext("2d"),e=Pe(3);t.fillStyle="#6f8f5c",t.fillRect(0,0,128,128);for(let n=0;n<8;n++)for(let r=0;r<4;r++)t.fillStyle=`rgb(${90+e()*40},${130+e()*40},${90+e()*30})`,t.fillRect(r*32+2,n*16+2,28,12),t.fillStyle="rgba(0,0,0,.25)",t.fillRect(r*32+8,n*16+5,16,6);return i}function n0(){const i=se(512,256),t=i.getContext("2d"),e=Pe(8);t.fillStyle="#10131a",t.fillRect(0,0,512,256),t.fillStyle="#1b2230",t.fillRect(0,0,512,20),t.fillStyle="#6a3fd0",t.fillRect(60,28,380,16);for(let n=0;n<6;n++){t.fillStyle="#181d28",t.fillRect(0,50+n*30,512,28);for(let r=0;r<4;r++){t.fillStyle=e()<.5?"#9be23a":"#4dc3ff";const s=30+e()*90;t.fillRect(70+e()*340,54+n*30,s,20)}}t.fillStyle="#242c3d",t.fillRect(0,236,512,20);for(let n=0;n<40;n++)t.fillStyle="#6cf",t.fillRect(10+n*12,240,6,10);return i}function i0(){const i=se(256,256),t=i.getContext("2d"),e=Pe(15);t.fillStyle="#6a4a30",t.fillRect(0,0,256,256);for(let n=0;n<90;n++)t.strokeStyle=`rgba(${30+e()*40},${20+e()*20},10,${.15+e()*.25})`,t.lineWidth=1+e()*2,t.beginPath(),t.moveTo(0,e()*256),t.bezierCurveTo(80,e()*256,170,e()*256,256,e()*256),t.stroke();return i}function r0(){const i=se(128,128),t=i.getContext("2d"),e=Pe(31);return t.fillStyle="#e4dcc4",t.fillRect(0,0,128,128),en(t,128,128,14,e),i}function s0(){const i=se(512,512),t=i.getContext("2d"),e=Pe(44);t.fillStyle="#8c0f17",t.fillRect(0,0,512,512);const n=128,r=(s,a,o)=>{t.beginPath(),t.moveTo(s,a-o),t.lineTo(s+o,a),t.lineTo(s,a+o),t.lineTo(s-o,a),t.closePath()};t.strokeStyle="rgba(40,0,6,.55)",t.lineWidth=2;for(let s=-4;s<=8;s++)t.beginPath(),t.moveTo(s*n,0),t.lineTo(s*n+512,512),t.stroke(),t.beginPath(),t.moveTo(s*n+512,0),t.lineTo(s*n,512),t.stroke();for(let s=0;s<=4;s++)for(let a=0;a<=4;a++){const o=a*n+64-64,l=s*n+64-64;r(o,l,58),t.fillStyle="#b3141f",t.fill(),t.lineWidth=4,t.strokeStyle="#ecdcb2",t.stroke(),r(o,l,40),t.fillStyle="#5c060e",t.fill(),t.lineWidth=2,t.strokeStyle="#d9c28c",t.stroke();for(let h=0;h<8;h++){const f=h*Math.PI/4;t.beginPath(),t.ellipse(o+Math.cos(f)*17,l+Math.sin(f)*17,9,5,f,0,7),t.fillStyle=h%2?"#ecdcb2":"#d9a85a",t.fill()}t.beginPath(),t.arc(o,l,7,0,7),t.fillStyle="#8c0f17",t.fill(),t.lineWidth=2,t.strokeStyle="#ecdcb2",t.stroke();const c=o+64,u=l+64;r(c,u,20),t.fillStyle="#ecdcb2",t.fill(),r(c,u,11),t.fillStyle="#8c0f17",t.fill(),t.beginPath(),t.arc(c,u,4,0,7),t.fillStyle="#d9a85a",t.fill(),[[o+64,l],[o,l+64]].forEach(([h,f])=>{t.beginPath(),t.arc(h,f,5,0,7),t.fillStyle="#ecdcb2",t.fill()})}return en(t,512,512,10,e),i}const Yl='"Rubik Spray Paint", Impact, "Arial Black", sans-serif',pi='Unbounded, Impact, "Arial Black", sans-serif',a0='"Marck Script", "Segoe Script", cursive';async function o0(){const t=[["Rubik Spray Paint","../assets/fonts/spray-latin.woff2","U+0000-00FF"],["Rubik Spray Paint","../assets/fonts/spray-cyrillic.woff2","U+0400-04FF"],["Marck Script","../assets/fonts/marck-script.ttf",null]].map(async([n,r,s])=>{try{const a=new FontFace(n,`url(${r})`,s?{unicodeRange:s}:{});await a.load(),document.fonts.add(a)}catch{}}),e=Promise.race([Promise.all(t),new Promise(n=>setTimeout(n,2500))]);try{await e}catch{}try{await Promise.race([document.fonts.load("700 40px Unbounded","REVOLVER Фрунзе"),new Promise(n=>setTimeout(n,1500))])}catch{}}function Ne(i,t=10){i.lineWidth=t,i.lineJoin="round",i.lineCap="round",i.strokeStyle="#0a0a0a",i.stroke()}function ds(i,t,e,n,r,s,a,o=.35,l=3){i.save(),i.clip(),i.strokeStyle=`rgba(0,0,0,${o})`,i.lineWidth=l,i.translate(t+n/2,e+r/2),i.rotate(a);const c=Math.max(n,r)*1.2;for(let u=-c;u<c;u+=s)i.beginPath(),i.moveTo(u,-c),i.lineTo(u,c),i.stroke();i.restore()}function jl(i,t,e,n,r="#d32a22"){i.beginPath(),i.arc(t,e,n,0,7),i.fillStyle="#151515",i.fill(),Ne(i,8),i.strokeStyle="rgba(255,255,255,.18)",i.lineWidth=2;for(let s=.45;s<.97;s+=.07)i.beginPath(),i.arc(t,e,n*s,0,7),i.stroke();i.beginPath(),i.moveTo(t-n*.8,e-n*.2),i.quadraticCurveTo(t,e-n,t+n*.3,e-n*.85),i.strokeStyle="rgba(255,255,255,.25)",i.lineWidth=4,i.stroke(),i.beginPath(),i.arc(t,e,n*.28,0,7),i.fillStyle=r,i.fill(),i.lineWidth=4,i.strokeStyle="#0a0a0a",i.stroke(),i.beginPath(),i.arc(t,e,n*.05,0,7),i.fillStyle="#0a0a0a",i.fill()}function l0(i,t,e,n,r){i.beginPath(),i.roundRect(t,e,n,r,10);const s=i.createLinearGradient(t,e,t+n,e+r);s.addColorStop(0,"#d9d9d9"),s.addColorStop(1,"#6e6e6e"),i.fillStyle=s,i.fill(),Ne(i,8),[[.5,.3,.2],[.5,.7,.28]].forEach(([a,o,l])=>{const c=t+n*a,u=e+r*o,h=Math.min(n,r)*l;i.beginPath(),i.arc(c,u,h,0,7),i.fillStyle="#1d1d1d",i.fill(),Ne(i,6),i.beginPath(),i.arc(c,u,h*.45,0,7),i.fillStyle="#8c8c8c",i.fill(),Ne(i,4)})}function c0(i,t,e,n,r){i.beginPath(),i.roundRect(t,e,n,r,8),i.fillStyle="#efefef",i.fill(),Ne(i,7),i.beginPath(),i.roundRect(t+n*.1,e+r*.2,n*.8,r*.45,6),i.fillStyle="#2a2a2a",i.fill(),Ne(i,4),[.3,.7].forEach(s=>{i.beginPath(),i.arc(t+n*s,e+r*.42,r*.16,0,7),i.fillStyle="#fff",i.fill(),Ne(i,4)})}function ps(i,t,e,n,r=0){i.save(),i.translate(t,e),i.rotate(r),i.fillStyle="#111",i.strokeStyle="#111",i.lineWidth=n*.1,i.beginPath(),i.ellipse(0,n,n*.34,n*.25,-.4,0,7),i.fill(),i.beginPath(),i.ellipse(n*.9,n*.78,n*.34,n*.25,-.4,0,7),i.fill(),i.beginPath(),i.moveTo(n*.3,n*.95),i.lineTo(n*.3,0),i.lineTo(n*1.2,-n*.2),i.lineTo(n*1.2,n*.75),i.stroke(),i.lineWidth=n*.22,i.beginPath(),i.moveTo(n*.3,n*.05),i.lineTo(n*1.2,-n*.15),i.stroke(),i.restore()}function Xi(i,t,e,n){i.beginPath(),i.arc(t,e,n,0,7);const r=i.createRadialGradient(t-n*.3,e-n*.3,n*.1,t,e,n);r.addColorStop(0,"#f4f4f4"),r.addColorStop(.6,"#a9a9a9"),r.addColorStop(1,"#505050"),i.fillStyle=r,i.fill(),Ne(i,7),i.strokeStyle="rgba(0,0,0,.35)",i.lineWidth=3,i.beginPath(),i.arc(t+n*.1,e+n*.1,n*.6,.5,2.6),i.stroke()}function f0(i,t){const e=i.width,n=i.height,r=i.getContext("2d"),s=Pe(77);r.clearRect(0,0,e,n);const a=r.createLinearGradient(0,0,0,n);a.addColorStop(0,"#16a047"),a.addColorStop(1,"#0b7d35"),r.fillStyle=a,r.fillRect(0,0,e,n);for(let _=0;_<700;_++)r.fillStyle=`rgba(${s()<.5?"120,255,160":"0,60,20"},${.03+s()*.05})`,r.beginPath(),r.arc(s()*e,s()*n,20+s()*90,0,7),r.fill();en(r,e,n,14,s),r.save();const o=1.18;r.translate(40,200),r.scale(o,o),Xi(r,260,120,62),Xi(r,330,80,78),Xi(r,430,30,66),Xi(r,160,170,50),Xi(r,520,60,58),Xi(r,590,120,46),jl(r,380,120,82),l0(r,560,70,130,120),r.beginPath(),r.roundRect(60,245,430,86,30);let l=r.createLinearGradient(0,245,0,331);l.addColorStop(0,"#f4f4f4"),l.addColorStop(.45,"#bdbdbd"),l.addColorStop(1,"#2b2b2b"),r.fillStyle=l,r.fill(),Ne(r,12),ds(r,60,245,430,86,12,.7,.18,3),r.beginPath(),r.roundRect(70,222,410,24,10),r.fillStyle="#1b1b1b",r.fill(),Ne(r,8),r.beginPath(),r.moveTo(70,222),r.lineTo(96,190),r.lineTo(116,222),r.closePath(),r.fillStyle="#e8e8e8",r.fill(),Ne(r,8),[0,1,2].forEach(_=>{r.beginPath(),r.ellipse(60+_*3,288,26-_*3,44-_*4,0,0,7),r.fillStyle=_===0?"#050505":"#dcdcdc",r.fill(),Ne(r,7)}),r.beginPath(),r.roundRect(110,332,330,44,20),l=r.createLinearGradient(0,332,0,376),l.addColorStop(0,"#d8d8d8"),l.addColorStop(1,"#303030"),r.fillStyle=l,r.fill(),Ne(r,10),c0(r,190,255,150,62),r.beginPath(),r.moveTo(470,205),r.lineTo(690,205),r.bezierCurveTo(770,205,820,250,830,320),r.lineTo(815,430),r.lineTo(700,484),r.lineTo(565,470),r.lineTo(470,396),r.closePath(),l=r.createLinearGradient(470,205,830,484),l.addColorStop(0,"#fafafa"),l.addColorStop(.55,"#d4d4d4"),l.addColorStop(1,"#6c6c6c"),r.fillStyle=l,r.fill(),Ne(r,14),ds(r,470,205,360,280,14,-.6,.12,3),r.beginPath(),r.roundRect(440,180,210,240,52),l=r.createLinearGradient(440,180,650,420),l.addColorStop(0,"#ffffff"),l.addColorStop(.5,"#bdbdbd"),l.addColorStop(1,"#3e3e3e"),r.fillStyle=l,r.fill(),Ne(r,14),ds(r,440,180,210,240,12,.5,.2,3),[250,300,350].forEach((_,m)=>{r.beginPath(),r.ellipse(512,_,30,25,0,0,7),r.fillStyle="#d6d6d6",r.fill(),Ne(r,8),r.beginPath(),r.ellipse(512,_,17,14,0,0,7),r.fillStyle="#060606",r.fill()}),r.beginPath(),r.moveTo(770,210),r.lineTo(836,150),r.lineTo(880,190),r.lineTo(840,262),r.closePath(),r.fillStyle="#1e1e1e",r.fill(),Ne(r,12),r.strokeStyle="rgba(255,255,255,.4)",r.lineWidth=3;for(let _=0;_<4;_++)r.beginPath(),r.moveTo(800+_*12,200-_*10),r.lineTo(830+_*12,232-_*10),r.stroke();r.beginPath(),r.moveTo(780,424),r.lineTo(900,430),r.bezierCurveTo(960,520,950,640,880,720),r.lineTo(770,690),r.bezierCurveTo(780,600,760,520,720,480),r.closePath(),l=r.createLinearGradient(760,430,940,720),l.addColorStop(0,"#f2f2f2"),l.addColorStop(.5,"#a8a8a8"),l.addColorStop(1,"#222"),r.fillStyle=l,r.fill(),Ne(r,14),ds(r,760,430,190,290,10,.9,.3,3),r.save(),r.beginPath(),r.moveTo(790,450),r.lineTo(890,456),r.bezierCurveTo(930,530,925,620,868,690),r.lineTo(790,668),r.closePath(),r.clip(),r.strokeStyle="rgba(0,0,0,.5)",r.lineWidth=3;for(let _=-200;_<400;_+=22)r.beginPath(),r.moveTo(760+_,430),r.lineTo(960+_,730),r.stroke(),r.beginPath(),r.moveTo(960+_,430),r.lineTo(760+_,730),r.stroke();r.restore(),r.beginPath(),r.moveTo(588,468),r.bezierCurveTo(580,560,660,590,730,560),r.bezierCurveTo(760,540,765,500,756,476),r.lineWidth=22,r.strokeStyle="#0a0a0a",r.stroke(),r.lineWidth=11,r.strokeStyle="#e6e6e6",r.stroke(),r.beginPath(),r.moveTo(660,484),r.quadraticCurveTo(650,530,688,540),r.lineWidth=12,r.strokeStyle="#0a0a0a",r.stroke(),r.save(),r.translate(735,380),r.rotate(-.3),r.beginPath(),r.ellipse(0,0,54,32,0,0,7),r.fillStyle="#111",r.fill(),Ne(r,5),r.fillStyle="#fff",r.font=`900 30px ${Yl}`,r.textAlign="center",r.fillText("REV",0,11),r.restore(),ps(r,40,460,54,-.2),ps(r,110,570,40,.3),r.strokeStyle="#0a0a0a",r.lineWidth=8;for(let _=0;_<5;_++)r.beginPath(),r.ellipse(850+_%2*8,740+_*28,20,28,0,0,7),r.fillStyle=_%2?"#d5d5d5":"#8d8d8d",r.fill(),r.stroke();r.restore(),r.save();const c=250,u=905,h=128;r.beginPath(),r.arc(c,u,h,0,7),l=r.createRadialGradient(c-40,u-40,20,c,u,h),l.addColorStop(0,"#fff"),l.addColorStop(.7,"#b8b8b8"),l.addColorStop(1,"#3a3a3a"),r.fillStyle=l,r.fill(),Ne(r,12);for(let _=0;_<6;_++){const m=_*Math.PI/3-Math.PI/2;r.beginPath(),r.arc(c+Math.cos(m)*80,u+Math.sin(m)*80,30,0,7),r.fillStyle="#050505",r.fill(),r.lineWidth=8,r.strokeStyle="#e8e8e8",r.stroke(),r.lineWidth=5,r.strokeStyle="#0a0a0a",r.stroke(),r.beginPath(),r.arc(c+Math.cos(m)*80-6,u+Math.sin(m)*80-6,8,0,7),r.fillStyle="#c0902b",r.fill()}r.beginPath(),r.arc(c,u,28,0,7),r.fillStyle="#222",r.fill(),Ne(r,8),r.restore(),r.fillStyle="#0c0c0c";const f=1105;[90,150,210,120,260,180,90,140,60].forEach((_,m)=>{r.beginPath(),r.roundRect(f+m*24,760-_/2,12,_,6),r.fill()}),r.strokeStyle="#0a0a0a",r.lineWidth=8,r.save(),r.translate(1e3,300),r.rotate(.2),r.strokeRect(-60,-70,150,150),ps(r,-30,-30,56,0),r.restore(),r.save(),r.translate(1180,160),r.rotate(-.12),r.strokeRect(-60,-60,130,130),ps(r,-32,-26,48,0),r.restore(),jl(r,1385,190,78,"#d32a22"),r.font=`900 120px ${pi}`,r.fillStyle="#d32a22",r.textAlign="left",r.fillText("REC",1480,234),r.fillStyle="#0a0a0a",r.beginPath(),r.roundRect(1800,560,120,150,10),r.fill(),r.strokeStyle="rgba(0,0,0,.65)",r.lineWidth=5;for(let _=0;_<6;_++)r.beginPath(),r.moveTo(1760+_*12,220),r.bezierCurveTo(1740+_*20,420,1830+_*10,500,1780+_*14,720),r.stroke();r.save(),r.translate(1700,1040),r.rotate(-.06),r.font=`700 80px ${a0}`,r.fillStyle="rgba(255,255,255,.85)",r.fillText("revolver",0,0),r.restore();const g=r.createLinearGradient(0,n-130,0,n);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(0,0,0,.55)"),r.fillStyle=g,r.fillRect(0,n-130,e,130),r.fillStyle="#0c0f10",r.fillRect(0,n-30,e,30),r.clearRect(t.x,t.y,t.w,t.h)}function Zl(i){const t=i.width,e=i.height,n=i.getContext("2d"),r=Pe(5);n.fillStyle="#f2f2ee",n.fillRect(0,0,t,e),en(n,t,e,8,r),n.fillStyle="#111",n.textAlign="center",n.font=`900 ${t*.075}px ${Yl}`,n.fillText("STROFF THA STREET",t/2,e*.12);const s=t/2,a=e*.57,o=t*.48;n.strokeStyle="#111",n.lineWidth=7,n.beginPath(),n.arc(s,a,o,0,7),n.stroke(),n.lineWidth=4,n.beginPath(),n.arc(s,a,o*.88,0,7),n.stroke(),n.lineWidth=6,n.beginPath(),n.moveTo(s-o*1.04,a),n.lineTo(s+o*1.04,a),n.moveTo(s,a-o*1.05),n.lineTo(s,a+o*1.05),n.stroke(),n.fillStyle="#0c0c10",n.beginPath(),n.ellipse(s,a-o*.62,t*.075,t*.095,0,0,7),n.fill(),n.beginPath(),n.ellipse(s,a-o*.7,t*.17,t*.03,0,0,7),n.fill(),n.beginPath(),n.roundRect(s-t*.1,a-o*.74,t*.2,t*.07,8),n.fill(),n.beginPath(),n.moveTo(s-t*.1,a-o*.5),n.bezierCurveTo(s-t*.33,a-o*.42,s-t*.33,a+o*.12,s-t*.28,a+o*.55),n.lineTo(s+t*.34,a+o*.55),n.bezierCurveTo(s+t*.34,a+o*.12,s+t*.32,a-o*.42,s+t*.1,a-o*.5),n.closePath(),n.fill(),n.fillStyle="#111",[t*.16,t*.84].forEach(l=>{n.beginPath(),n.arc(l,e*.26,t*.04,0,7),n.fill(),n.beginPath(),n.roundRect(l-t*.06,e*.285,t*.12,e*.07,6),n.fill()}),n.fillStyle="#fff",n.fillRect(t*.28,e*.22,t*.44,e*.07),n.strokeStyle="#c62a2a",n.lineWidth=3,n.strokeRect(t*.28,e*.22,t*.44,e*.07),n.fillStyle="#c62a2a",n.font=`700 ${t*.05}px Arial, sans-serif`,n.fillText("ЗАПИСЬ ИДЁТ",t/2,e*.265)}function Kl(i){const t=i.width,e=i.height,n=i.getContext("2d");n.fillStyle="#05060a",n.fillRect(0,0,t,e),n.strokeStyle="rgba(255,255,255,.2)",n.lineWidth=6,n.strokeRect(10,10,t-20,e-20),n.textAlign="center",n.shadowColor="#ff2a1f",n.shadowBlur=40,n.fillStyle="#ff5a4d",n.font=`800 ${e*.46}px ${pi}`,n.fillText("REVOLVER",t*.5,e*.52),n.shadowBlur=24,n.shadowColor="#35e06b",n.fillStyle="#9dffbd",n.font=`700 ${e*.15}px ${pi}`,n.fillText("PODCAST  ·  SOUND",t*.5,e*.74),n.shadowColor="#fff",n.shadowBlur=14,n.fillStyle="#ffffff",n.font=`600 ${e*.115}px ${pi}`,n.fillText("Фрунзе 49  ↓  вход",t*.5,e*.91),n.shadowBlur=0}function u0(i){const t=i.width,e=i.height,n=i.getContext("2d");n.clearRect(0,0,t,e),n.shadowColor="#ff2a1f",n.shadowBlur=24,n.fillStyle="#ff6a5c",n.beginPath(),n.moveTo(t*.38,e*.08),n.lineTo(t*.62,e*.08),n.lineTo(t*.62,e*.5),n.lineTo(t*.85,e*.5),n.lineTo(t*.5,e*.94),n.lineTo(t*.15,e*.5),n.lineTo(t*.38,e*.5),n.closePath(),n.fill()}function h0(i,t=11,e=!0){const n=i.width,r=i.height,s=i.getContext("2d"),a=Pe(t);s.fillStyle="#c9cbc6",s.fillRect(0,0,n,r),en(s,n,r,14,a),s.strokeStyle="#0b0b0b",s.lineCap="round",s.lineJoin="round";for(let o=0;o<7;o++){s.lineWidth=8+a()*14,s.beginPath();let l=n*(.2+a()*.2),c=r*(.1+a()*.8);s.moveTo(l,c);for(let u=0;u<6;u++)l+=(a()-.3)*n*.22,c+=(a()-.5)*r*.3,s.quadraticCurveTo(l+(a()-.5)*60,c+(a()-.5)*60,l,c);s.stroke()}}function d0(i,t,e,n){const r=i.width,s=i.height,a=i.getContext("2d");a.clearRect(0,0,r,s),a.textAlign="center",a.textBaseline="middle",a.shadowColor=e,a.shadowBlur=28,a.fillStyle=e,a.font=n,a.fillText(t,r/2,s/2),a.shadowBlur=8,a.fillStyle="#fff",a.fillText(t,r/2,s/2)}function p0(i,t){const e=i.width,n=i.height,r=i.getContext("2d"),s=Pe(t*7+1),a=[{bg:"#e9dfc8",a:"#d02419",b:"#111"},{bg:"#d02419",a:"#f1e9d3",b:"#111"},{bg:"#111",a:"#37ff7a",b:"#f1e9d3"},{bg:"#f1e9d3",a:"#111",b:"#37ff7a"}][t%4];r.fillStyle=a.bg,r.fillRect(0,0,e,n),en(r,e,n,12,s);const o=[["JAM","SESSION"],["ЖИВОЙ","ЗВУК"],["REC","NIGHT"],["СТРИМ","СТУДИЯ"]][t%4];r.textAlign="left",r.fillStyle=a.a,r.font=`900 ${e*.3}px ${pi}`,r.save(),r.translate(e*.06,n*.2),r.rotate(-.06),r.fillText(o[0],0,0),r.fillStyle=a.b,r.font=`900 ${e*.2}px ${pi}`,r.fillText(o[1],0,e*.25),r.restore(),r.fillStyle=a.b,r.beginPath(),r.arc(e*.68,n*.62,e*.24,0,7),r.fill(),r.fillStyle=a.a,r.beginPath(),r.arc(e*.68,n*.62,e*.08,0,7),r.fill(),r.strokeStyle=a.a,r.lineWidth=3;for(let l=0;l<8;l++)r.beginPath(),r.arc(e*.68,n*.62,e*(.1+l*.017),0,7),r.stroke();r.fillStyle=a.b,r.fillRect(e*.06,n*.86,e*.88,4),r.fillStyle=a.b,r.font=`700 ${e*.06}px Arial, sans-serif`,r.fillText("Фрунзе 49 · 21:00",e*.06,n*.93)}function Jl(i,t,e,n){const r=i.width,s=i.height,a=i.getContext("2d"),o=a.createImageData(r,s),l=o.data,c=Pe(n);for(let p=0;p<s;p++){const g=Math.sin(p*.4+t*6)*.5+.5;for(let _=0;_<r;_++){const m=(p*r+_)*4,d=c()*95,M=p%2?.55:1,E=(d+25+g*25)*M;l[m]=E*.3,l[m+1]=E,l[m+2]=E*.35,l[m+3]=255}}a.putImageData(o,0,0),a.fillStyle="rgba(120,255,150,.35)";const u=(Math.sin(t*.6+e)*.5+.5)*(r-30);a.beginPath(),a.arc(u+15,s*.4,7,0,7),a.fill(),a.fillRect(u+4,s*.48,22,s*.4),a.fillStyle="rgba(120,255,150,.22)",a.fillRect(0,s*.82,r,3);const h=Math.floor(t+e*77),f=[Math.floor(h/3600)%24,Math.floor(h/60)%60,h%60].map(p=>String(p).padStart(2,"0")).join(":");a.font="bold 12px monospace",a.fillStyle="#b6ffc3",a.textAlign="left",a.fillText(f,6,s-7),a.textAlign="right",a.fillText("CAM "+e,r-6,14),Math.floor(t*1.6)%2===0&&(a.fillStyle="#ff3b30",a.beginPath(),a.arc(12,12,4,0,7),a.fill(),a.fillStyle="#ffc9c5",a.textAlign="left",a.fillText("REC",20,16))}function m0(i){const t=i.getContext("2d"),e=i.width;t.fillStyle="#1f6fd0",t.fillRect(0,0,e,e),t.fillStyle="#fff",t.fillRect(e*.08,e*.08,e*.84,e*.84),t.fillStyle="#1f6fd0",t.fillRect(e*.12,e*.12,e*.76,e*.76),t.fillStyle="#fff",t.beginPath(),t.moveTo(e*.2,e*.78),t.lineTo(e*.5,e*.2),t.lineTo(e*.8,e*.78),t.closePath(),t.fill(),t.fillStyle="#111",t.beginPath(),t.arc(e*.5,e*.4,e*.05,0,7),t.fill(),t.fillRect(e*.46,e*.45,e*.08,e*.22)}function g0(i){const t=i.width,e=i.height,n=i.getContext("2d");n.fillStyle="#f4f1e6",n.fillRect(0,0,t,e),n.strokeStyle="#222",n.lineWidth=4,n.strokeRect(6,6,t-12,e-12),n.fillStyle="#111",n.textAlign="center",n.font="700 "+e*.2+"px Arial, sans-serif",n.fillText("Школа диджеев",t/2,e*.34),n.fillStyle="#c62a2a",n.font="800 "+e*.17+"px Arial, sans-serif",n.fillText("идёт ремонт",t/2,e*.62),n.fillStyle="#333",n.font="500 "+e*.1+"px Arial, sans-serif",n.fillText("Дверь закрыта. Вход в студию — рядом.",t/2,e*.86)}const gr=1.62,ms=.3,be={x0:-2,x1:2.8,z0:5.6,z1:7.1,n:16,rise:3};function gs(i,t){return i>=2.8&&t>=5.5?3:t>=5.5&&t<=7.2&&i>-2&&i<2.8?(Math.floor((i-be.x0)/((be.x1-be.x0)/be.n))+1)*(be.rise/be.n):0}const _0=[[3.1,7.8,5.65,14.55],[-2.9,3.4,5.9,6.8],[-2.95,-2.25,4.9,6.2],[-3.1,-.5,2.5,5.1],[-.6,.6,3.25,3.65],[.3,5.7,.3,4.7],[5.5,6.5,3.25,3.65],[6.4,8.7,-.7,4.7]],x0=[[1.9,5.1,0,.7],[1.05,1.8,.1,.95],[2.42,3.58,.95,3.15],[1.72,2.28,1.45,2],[3.72,4.15,1.45,2],[5.05,5.9,1,1.8],[5.5,5.95,1.95,2.7],[5.2,5.9,.1,.9],[5.1,5.9,4,4.9],[.1,.8,.1,.9],[.1,.8,4.1,4.9],[1,2.9,4.2,5],[6.1,7.05,.1,2.4],[7.1,7.9,.5,1.5],[8.05,8.55,3.85,4.35]],v0={street:["Улица · Фрунзе 49","Ночь. Вход — вниз по лестнице"],entry:["Тамбур","Направо дверь в студию, прямо — школа диджеев (ремонт)"],hall:["REVOLVER PODCAST · 30 м²","Зал для видеоподкастов"],studio:["REVOLVER SOUND · 18 м²","Комната звукозаписи"]};function Ba(i,t){return t>5.3&&i>-1.9?"street":i<-.1?"entry":i<6?"hall":"studio"}const Ql={1:{x:5.8,z:8.25,yaw:1.07,pitch:-.18},2:{x:3.6,z:4.62,yaw:.12,pitch:-.02},3:{x:7.4,z:4.7,yaw:.2,pitch:-.1}},$l={street:[{p:[6.6,5.4,7],c:16738896,i:22,d:14},{p:[3.2,5,5.95],c:16773584,i:22,d:12},{p:[5.6,7.6,12.05],c:16754e3,i:110,d:28},{p:[-.9,2.4,6.35],c:12571391,i:16,d:8},{p:[9.6,4.2,6.35],c:7113983,i:50,d:20},{p:[-2.6,1.7,5],c:13990911,i:5,d:6}],entry:[{p:[-1.8,2.4,3.8],c:16769976,i:8,d:6},{p:[-2.6,2.3,6.4],c:12571391,i:8,d:6},{p:[-.9,1.8,3.4],c:13660415,i:4,d:5},{p:[-3.1,1.6,3],c:16722902,i:3.5,d:4},{p:[-1.2,2.4,6.4],c:12571391,i:4,d:5},{p:[.6,2,3.45],c:16777215,i:2,d:4}],hall:[{p:[3,2.5,2.8],c:14674175,i:9,d:9},{p:[3.4,1.4,1],c:3826431,i:5,d:4.5},{p:[5,2.3,2.4],c:15138792,i:6,d:6},{p:[.9,1.6,2.4],c:16738874,i:4,d:4.5},{p:[1.5,2.4,4],c:16777215,i:4,d:6},{p:[.4,2,3.45],c:13660415,i:2,d:4}],studio:[{p:[7,1.7,1.3],c:5939455,i:16,d:6},{p:[7.9,2.4,2.8],c:13623551,i:18,d:7},{p:[8.3,1.4,.4],c:3823871,i:9,d:5},{p:[7.4,2.5,4.2],c:10139903,i:12,d:7},{p:[6.6,1.4,3.8],c:16751200,i:2.5,d:3},{p:[8.5,1,2],c:16722731,i:3,d:3}]},S0={street:[725024,.022,.8],entry:[1182234,.05,.55],hall:[329226,.05,.5],studio:[197642,.055,.45]};function M0(i={}){const t=!!i.low,e=new ul;e.background=new Jt(461332),e.fog=new _a(725024,.022);const n={};["street","stairs","entry","hall","studio"].forEach(b=>{n[b]=new pe,n[b].name=b,e.add(n[b])});const r=(b,Y={})=>new fn(Object.assign({color:b,roughness:.85,metalness:0},Y)),s={repeat:[1,1]},a={brick:Yt(Wl(1),s),brickLight:Yt(Wl(2,[92,84,76]),s),pave:Yt(Wp(),s),asphalt:Yt(qp(),s),concrete:Yt(ql(4,74),s),concreteDark:Yt(ql(7,34),s),curtain:Yt(Xp(),s),blueCarpet:Yt(Yp(),s),woodFloor:Yt(jp(),s),foam:Yt(Zp(),s),news:Yt(Kp(),s),softbox:Yt(Qp()),plaid:Yt($p()),ball:Yt(t0()),dollar:Yt(e0()),daw:Yt(n0()),grain:Yt(i0(),s),leather:Yt(r0(),s),glow:Yt(Jp()),carpetRed:Yt(s0(),s),tableWood:Gp(Vp)};a.tableWood.wrapS=a.tableWood.wrapT=1001;const o=se(512,512);{const b=o.getContext("2d"),Y=Pe(51);b.fillStyle="#1d1511",b.fillRect(0,0,512,512);for(let at=0;at<2;at++)for(let ot=0;ot<4;ot++){const pt=b.createLinearGradient(ot*128,at*256,ot*128+128,at*256+256);pt.addColorStop(0,"#2a3338"),pt.addColorStop(.5,"#4a2a22"),pt.addColorStop(1,"#171a20"),b.fillStyle=pt,b.fillRect(ot*128+8,at*256+8,112,240),b.fillStyle=`rgba(255,160,100,${.1+Y()*.12})`,b.fillRect(ot*128+14,at*256+120,100,100),b.fillStyle="rgba(255,255,255,.07)",b.beginPath(),b.moveTo(ot*128+8,at*256+8),b.lineTo(ot*128+70,at*256+8),b.lineTo(ot*128+8,at*256+120),b.fill()}}a.facade=Yt(o,s);const l={brick:r(16777215,{map:a.brick,roughness:.95}),brickLight:r(16777215,{map:a.brickLight,roughness:.95}),pave:r(12103848,{map:a.pave,roughness:.9}),asphalt:r(16777215,{map:a.asphalt,roughness:.55,metalness:.1}),concrete:r(16777215,{map:a.concrete}),concreteDark:r(16777215,{map:a.concreteDark,color:9079434}),curtain:r(16777215,{map:a.curtain,roughness:1}),blueCarpet:r(16777215,{map:a.blueCarpet,roughness:1}),woodFloor:r(16777215,{map:a.woodFloor,roughness:.6}),foam:r(16777215,{map:a.foam,roughness:1}),news:r(16777215,{map:a.news,roughness:.9}),carpetRed:r(16777215,{map:a.carpetRed,roughness:1,emissive:3344390,emissiveMap:a.carpetRed,emissiveIntensity:.12}),facade:r(16777215,{map:a.facade,roughness:.4,metalness:.2,emissive:16777215,emissiveMap:a.facade,emissiveIntensity:.12}),black:r(657932,{roughness:.9}),ceil:r(723725,{roughness:1}),steel:r(9080726,{roughness:.4,metalness:.85}),darkSteel:r(2764081,{roughness:.5,metalness:.8}),white:r(15131868,{roughness:.6}),cream:r(15327430,{map:a.leather,roughness:.45}),green:r(1744970,{roughness:.9}),plastic:r(1710877,{roughness:.5}),grayVel:r(5857643,{roughness:1}),wood:r(16777215,{map:a.grain,roughness:.7}),leaf:r(3115578,{roughness:.8,side:2,emissive:666128,emissiveIntensity:.6}),leaf2:r(1927980,{roughness:.8,side:2,emissive:532492,emissiveIntensity:.6}),ivy:r(3046706,{roughness:.9,emissive:666128,emissiveIntensity:.6}),gold:r(13214266,{roughness:.35,metalness:.9}),glass:new fn({color:9087176,roughness:.05,metalness:.1,transparent:!0,opacity:.18,depthWrite:!1})},c=(b,Y=1)=>new En({color:new Jt(b).multiplyScalar(Y),toneMapped:!1}),u=new On(1,1,1);function h(b,Y,at,ot,pt,Mt,ne,Ht,_e=1){const Ce=pt-Y,Te=Mt-at,De=ne-ot,kn=new On(Ce,Te,De),Rn=kn.attributes.uv,Us=Array.isArray(_e)?_e[0]:_e,Ki=Array.isArray(_e)?_e[1]:_e,_c=[[De,Te],[De,Te],[Ce,De],[Ce,De],[Ce,Te],[Ce,Te]];for(let Pr=0;Pr<6;Pr++)for(let to=0;to<4;to++){const eo=Pr*4+to;Rn.setXY(eo,Rn.getX(eo)*_c[Pr][0]/Us,Rn.getY(eo)*_c[Pr][1]/Ki)}const $a=new re(kn,Ht);return $a.position.set((Y+pt)/2,(at+Mt)/2,(ot+ne)/2),b.add($a),$a}const f=(b,Y,at,ot,pt,Mt,ne,Ht,_e=0,Ce=0,Te=0)=>{const De=new re(u,pt);return De.scale.set(Y,at,ot),De.position.set(Mt,ne,Ht),De.rotation.set(Ce,_e,Te),b.add(De),De},p=(b,Y,at,ot,pt,Mt,ne,Ht,_e=16,Ce=0,Te=0)=>{const De=new re(new Zn(Y,at,ot,_e),pt);return De.position.set(Mt,ne,Ht),De.rotation.set(Ce,0,Te),b.add(De),De},g=(b,Y,at,ot,pt,Mt,ne=1,Ht=1,_e=1)=>{const Ce=new re(new Da(Y,16,12),at);return Ce.position.set(ot,pt,Mt),Ce.scale.set(ne,Ht,_e),b.add(Ce),Ce},_={"+x":[0,Math.PI/2,0],"-x":[0,-Math.PI/2,0],"+z":[0,0,0],"-z":[0,Math.PI,0],"+y":[-Math.PI/2,0,0],"-y":[Math.PI/2,0,0]};function m(b,Y,at,ot,pt,Mt,ne,Ht="+z",_e=null){const Ce=new An(Y,at);if(_e){const De=Ce.attributes.uv;for(let kn=0;kn<De.count;kn++)De.setXY(kn,De.getX(kn)*_e[0],De.getY(kn)*_e[1])}const Te=new re(Ce,ot);return Te.position.set(pt,Mt,ne),Te.rotation.set(..._[Ht]),b.add(Te),Te}function d(b,Y,at,ot,pt,Mt,ne=.8){const Ht=new tp(new hl({map:a.glow,color:Y,transparent:!0,opacity:ne,blending:2,depthWrite:!1,fog:!1}));return Ht.scale.set(at,at,1),Ht.position.set(ot,pt,Mt),b.add(Ht),Ht}const M=n.street;[n.street,n.stairs].forEach(b=>{b.rotation.y=Math.PI/2,b.position.set(-16.4,0,10.85)}),h(M,-9,2.4,8,3.75,3,25,l.pave,2),h(M,3.75,2.4,19.2,5.25,3,25,l.pave,2),h(M,-60,2.8,25,80,2.9,80,l.asphalt,6),h(M,-9,2.75,24.8,5.4,2.95,25.2,l.concrete,1);const E=r(10132122,{roughness:.6});for(let b=-8;b<5;b+=3)m(M,1.4,.16,E,b,2.915,31,"+y");for(let b=0;b<9;b++)m(M,.5,5.2,E,-3.5+b*.9,2.915,28,"+y");h(n.stairs,5.25,0,13.2,5.45,3,13.35,l.brick,2),h(n.stairs,5.25,2.1,13.35,5.45,3,14.25,l.brick,2),h(n.stairs,5.25,0,14.25,5.45,3,19.2,l.brick,2),h(M,5.25,3,10,24,3.45,28,l.darkSteel,1),h(M,5.25,3.45,10,24,10.5,28,[l.concreteDark,l.facade,l.concreteDark,l.concreteDark,l.facade,l.concreteDark],[2.4,2.4]);const x=se(1024,256);Kl(x);const O=Yt(x),w=new En({map:O,toneMapped:!1});h(M,5.05,5.3,19.4,5.25,6.9,26.6,l.black,1),m(M,7.2,1.5,w,5.04,6.1,23,"-x"),d(M,16724e3,11,4.4,6.1,23,.28);const C=se(128,160);u0(C);const I=new En({map:Yt(C),transparent:!0,toneMapped:!1,depthWrite:!1}),A=m(M,.9,1.1,I,4.5,4.35,19,"+z"),S=m(M,.9,1.1,I,4.5,4.35,19,"-z");d(M,16726570,2.5,4.5,4.35,19,.35),f(M,.05,1.2,.05,l.darkSteel,4.5,5,18.8),g(M,.32,c(16774104,1.1),4.9,5,19.6),d(M,16773324,3.4,4.9,5,19.6,.6),h(n.stairs,3.45,0,13.2,3.75,4,19.2,[l.brick,l.brick,l.pave,l.brick,l.brick,l.brick],2);const P=se(256,256);h0(P);const W=r(16777215,{map:Yt(P),roughness:.7}),V=r(10132632,{roughness:.7});h(M,2.5,3,17.4,3.4,4.05,18.4,[V,V,V,V,W,V],1);const nt=l.steel;for(let b=-3.9;b<=3.5;b+=1.4)f(M,.05,1,.05,nt,b,3.5,19.25);f(M,7.6,.05,.05,nt,-.2,3.95,19.25),f(M,7.6,.05,.05,nt,-.2,3.55,19.25);for(let b=-8;b<=5.2;b+=1.5)f(M,.05,.95,.05,nt,b,3.47,24.6);f(M,13.2,.05,.05,nt,-1.4,3.9,24.6),f(M,13.2,.05,.05,nt,-1.4,3.45,24.6);const J=r(16777215,{map:Yt(Xl(31,8,12),s),emissive:16777215,roughness:.8});J.emissiveMap=J.map,J.emissiveIntensity=.65,h(M,-30,0,-2,-9,18,30,[J,J,l.concreteDark,l.concreteDark,J,J],[6,6]),[[-30,12,46,20],[-14,10,52,28],[-2,14,47,18],[14,10,50,32],[26,12,46,22],[40,14,52,26]].forEach(([b,Y,at,ot],pt)=>{const Mt=r(16777215,{map:Yt(Xl(40+pt,9,14),s),emissive:16777215,roughness:.9});Mt.emissiveMap=Mt.map,Mt.emissiveIntensity=.55,h(M,b,0,at,b+Y,ot,at+10,[Mt,Mt,l.concreteDark,l.concreteDark,Mt,Mt],[5,5])});const X=new pe;X.position.set(3.5,3,25.5),M.add(X),f(X,.12,3.6,.12,l.darkSteel,0,1.8,0),f(X,.36,1,.3,l.black,0,3.55,0),g(X,.1,c(16722474,1.4),0,3.85,.17),g(X,.1,r(2236962),0,3.55,.17),g(X,.1,r(2236962),0,3.25,.17),d(X,16722474,1.3,0,3.85,.3,.8);const xt=se(128,128);m0(xt),m(X,.7,.7,new En({map:Yt(xt),toneMapped:!1}),0,2.4,.08,"+z");const At=X.clone();At.position.set(-3,3,25.5),M.add(At),[[-1.2,22],[-4.5,22.5]].forEach(([b,Y])=>{f(M,.12,7.6,.12,l.darkSteel,b,3+3.8,Y),f(M,1.2,.1,.1,l.darkSteel,b+.5,10.6,Y),f(M,.5,.12,.3,c(16761978,1.4),b+1,10.5,Y),d(M,16756832,5,b+1,10.4,Y,.55)});const Ut=[];for(let b=0;b<5;b++){const Y=new pe;f(Y,1.9,.5,4.2,r(b%2?1778992:3811882,{roughness:.4,metalness:.4}),0,.5,0),f(Y,1.6,.45,2.2,r(659480,{roughness:.2,metalness:.5}),0,.95,-.2),f(Y,.35,.14,.05,c(16772792,1.5),-.6,.55,2.12),f(Y,.35,.14,.05,c(16772792,1.5),.6,.55,2.12),f(Y,.35,.12,.05,c(16719904,1.3),-.6,.55,-2.12),f(Y,.35,.12,.05,c(16719904,1.3),.6,.55,-2.12),d(Y,16773312,2.2,0,.55,2.8,.35),Y.rotation.y=Math.PI/2;const at=b%2?1:-1;Y.userData={dir:at,speed:5+b*1.3,x:-30+b*15,z:at>0?33.5:29.5},at<0&&(Y.rotation.y=-Math.PI/2),Y.position.set(Y.userData.x,2.9,Y.userData.z),M.add(Y),Ut.push(Y)}const Bt=n.stairs,ce=[l.concrete,l.concrete,r(16777215,{map:a.concreteDark,roughness:.6,metalness:.2}),l.concrete,l.concrete,l.concrete],Q=(be.z1-be.z0)/be.n,ft=be.rise/be.n;for(let b=0;b<be.n;b++)h(Bt,be.x0,0,be.z0+b*Q,be.x1,(b+1)*ft,be.z0+(b+1)*Q,ce,1),f(Bt,1.5,.012,.05,r(8945776,{roughness:.4,metalness:.6}),4.5,(b+1)*ft+.006,be.z0+(b+1)*Q-.06);h(Bt,3.75,-.2,13.2,5.25,0,14.4,l.concreteDark,1),h(Bt,3.45,0,13,5.45,3.5,13.2,l.brick,2),h(Bt,3.45,3,13,5.6,3.5,15.2,l.concreteDark,1),p(Bt,.16,.16,.1,r(14540253),4.5,2.95,14.2,12),p(Bt,.12,.12,.02,c(14411519,1.4),4.5,2.89,14.2,12),d(Bt,13163775,1.4,4.5,2.7,14.2,.45);{const b=Math.hypot(be.z1-be.z0,be.rise),Y=Math.atan2(be.rise,be.z1-be.z0);f(Bt,.05,.05,b,l.steel,3.9,.95+be.rise/2,(be.z0+be.z1)/2,0,-Y);for(let at=0;at<5;at++){const ot=be.z0+.4+at*1.15,pt=gs(3.9,ot);f(Bt,.04,.95,.04,l.steel,3.88,pt+.47,ot)}}const Rt=se(256,512);{const b=Rt.getContext("2d"),Y=Pe(9);b.fillStyle="#4b2d20",b.fillRect(0,0,256,512),en(b,256,512,22,Y),b.strokeStyle="rgba(0,0,0,.4)",b.lineWidth=3,b.strokeRect(14,14,228,484),b.fillStyle="rgba(255,200,150,.1)",b.fillRect(14,14,228,40);for(let at=0;at<24;at++)b.fillStyle="rgba(0,0,0,.4)",b.beginPath(),b.arc(24+(at%2?208:0),30+Math.floor(at/2)*40,3,0,7),b.fill()}const _t=r(16777215,{map:Yt(Rt),roughness:.55,metalness:.5}),zt=[];function Wt(b,{axis:Y,hx:at,hz:ot,w:pt,h:Mt=2.1,t:ne=.07,open:Ht,mats:_e,cx:Ce,cz:Te,knob:De=!0,knobSide:kn=1}){const Rn=new pe;Rn.position.set(at,0,ot),b.add(Rn);{const Ki=new re(u,_e);Ki.userData.noPaint=!0,Ki.scale.set(ne,Mt,pt),Ki.position.set(0,Mt/2,-pt/2),Rn.add(Ki),De&&(g(Rn,.035,l.steel,ne/2+.04,1,-pt+.1),g(Rn,.035,l.steel,-ne/2-.04,1,-pt+.1))}const Us={pivot:Rn,cur:0,target:0,open:Ht,cx:Ce,cz:Te,grp:b};return zt.push(Us),Us}Wt(Bt,{axis:"x",hx:5.35,hz:14.25,w:.9,h:2.1,t:.08,open:-Math.PI/2*.92,mats:[_t,_t,l.darkSteel,l.darkSteel,l.darkSteel,l.darkSteel],cx:5.35,cz:13.8}),f(Bt,.03,.03,.3,l.steel,5.3,1.05,13.5);const wt=n.entry,Nt=2.8,Kt=l.news,jt=r(15724018,{roughness:.5}),D=l.concreteDark;h(wt,-3.6,-.1,2,-.2,0,5.6,l.woodFloor,1.2),h(wt,-3.6,Nt,2,-.2,Nt+.1,5.6,l.ceil,1),h(wt,-3.6,0,2,-3.4,Nt,5.6,[Kt,D,D,D,D,D],1),h(wt,-3.6,0,2,-.2,Nt,2.2,[D,D,D,D,Kt,D],1),h(wt,-3.6,0,5.4,-3.2,Nt,5.6,[D,D,D,D,D,D],1),m(wt,.35,2.8,Kt,-3.225,1.4,5.392,"-z",[.35,2.8]),m(wt,1.95,2.8,Kt,-1.175,1.4,5.392,"-z",[1.95,2.8]),m(wt,.9,.7,Kt,-2.6,2.45,5.392,"-z",[.9,.7]);const Re=-2.3;f(wt,1.1,2.2,.06,jt,Re,1.1,2.23),f(wt,.9,2.1,.07,r(2503226,{roughness:.7}),Re,1.05,2.275),g(wt,.035,l.steel,Re+.32,1,2.33);const Qt=se(512,256);g0(Qt),m(wt,.5,.25,new fn({map:Yt(Qt),roughness:.8,emissive:16777215,emissiveMap:Yt(Qt),emissiveIntensity:.25}),Re,1.55,2.315,"+z");const Xt=r(15254042,{roughness:.6});f(wt,1.15,.05,.01,Xt,Re,1.1,2.322,0,0,.7),f(wt,1.15,.05,.01,Xt,Re,1.1,2.324,0,0,-.7),p(wt,.14,.11,.3,r(14277076,{roughness:.6}),-1.3,.15,2.5,14),f(wt,.5,.01,.8,r(13620952,{roughness:.3}),-1,.012,2.9,0,.3);const Ot=se(512,128);d0(Ot,"REVOLVER PODCAST →","#ff4b3a",`700 44px ${pi}`),m(wt,1.4,.35,new En({map:Yt(Ot),transparent:!0,toneMapped:!1,depthWrite:!1}),-.23,2.45,3.45,"-x"),d(wt,16730938,1.6,-.3,2.45,3.45,.3),f(wt,.06,.55,.42,r(8028294,{roughness:.5,metalness:.6}),-3.37,1.5,3.6),f(wt,.02,.2,.3,r(14725152),-3.34,1.6,3.6),[[0,-3.39,4.5,"+x"],[1,-3.39,2.8,"+x"],[2,-1.5,5.37,"-z"]].forEach(([b,Y,at,ot])=>{const pt=se(256,384);p0(pt,b);const Mt=at;m(wt,.5,.75,r(16777215,{map:Yt(pt),roughness:.8}),Y,1.4,Mt,ot)}),p(wt,.12,.12,.05,r(16771520),-1.8,2.76,3.8,12),g(wt,.09,c(16769976,1.4),-1.8,2.66,3.8),d(wt,16767392,1.4,-1.8,2.6,3.8,.45),[-3.38,-.24].forEach(b=>f(wt,.04,.04,3.2,c(13773823,1.5),b,2.65,3.8)),d(wt,13642751,3.5,-1.8,2.4,3.8,.18);const dt=n.hall;h(dt,0,-.1,0,6,0,5,l.blueCarpet,1),h(dt,0,Nt,0,6,Nt+.1,5,l.ceil,1),h(dt,-.2,0,-.2,6.1,Nt+.1,0,[l.concreteDark,l.concreteDark,l.concreteDark,l.concreteDark,l.concreteDark,r(987155)],2);const Ft=3,T=3.9,v=[l.concreteDark,Kt,l.concreteDark,l.concreteDark,l.concreteDark,l.concreteDark];h(dt,-.2,0,0,0,Nt+.1,Ft,v,1),h(dt,-.2,0,T,0,Nt+.1,5,v,1),h(dt,-.2,2.1,Ft,0,Nt+.1,T,v,1),m(dt,3,2.8,l.carpetRed,.012,1.4,1.5,"+x",[3.33,3.11]),m(dt,1.1,2.8,l.carpetRed,.012,1.4,4.45,"+x",[1.22,3.11]),m(dt,.9,.7,l.carpetRed,.012,2.45,3.45,"+x",[1,.78]),Wt(dt,{axis:"x",hx:-.1,hz:T,w:.9,h:2.1,t:.05,open:-Math.PI/2*.95,mats:jt,cx:-.1,cz:3.45}),f(dt,.1,2.1,.06,jt,-.1,1.05,Ft-.03),f(dt,.1,2.1,.06,jt,-.1,1.05,T+.03),f(dt,.1,.06,1,jt,-.1,2.13,3.45),h(dt,-.2,0,5,6.1,Nt+.1,5.2,l.concreteDark,2),m(dt,6,2.8,l.curtain,3,1.4,4.97,"-z",[6,1]);const B=3,tt=3.9;h(dt,5.9,0,0,6.1,Nt+.1,B,l.black,1),h(dt,5.9,0,tt,6.1,Nt+.1,5,l.black,1),h(dt,5.9,2.1,B,6.1,Nt+.1,tt,l.black,1);const it=se(2048,1152),et={x:B/5*2048,y:1152-2.1/2.8*1152,w:(tt-B)/5*2048,h:2.1/2.8*1152},Lt=Yt(it),vt=()=>{f0(it,et),Lt.needsUpdate=!0};vt();const bt=r(16777215,{map:Lt,roughness:.9,alphaTest:.5,emissive:16777215,emissiveMap:Lt,emissiveIntensity:.18});m(dt,5,2.8,bt,5.888,1.4,2.5,"-x");const te=se(384,896);Zl(te);const ct=Yt(te),yt=r(16777215,{map:ct,roughness:.6}),kt=()=>{Zl(te),ct.needsUpdate=!0};Wt(dt,{axis:"x",hx:5.97,hz:tt,w:.9,h:2.1,t:.05,open:-Math.PI/2*.95,mats:[jt,yt,jt,jt,jt,jt],cx:5.97,cz:3.45}),f(dt,.22,2.12,.06,r(1018426),6,1.06,B-.03),f(dt,.22,2.12,.06,r(1018426),6,1.06,tt+.03),f(dt,.22,.06,1,r(1018426),6,2.13,3.45);const k=new ba(.13,.5,14);[[5.55,4.45],[5.75,4.1]].forEach(([b,Y],at)=>{const ot=new re(k,r(16738842,{roughness:.6}));ot.position.set(b,.25,Y),dt.add(ot),p(dt,.115,.125,.07,r(15987696),b,.26,Y,14),p(dt,.09,.1,.07,r(15987696),b,.37,Y,14),f(dt,.34,.03,.34,r(546),b,.015,Y)});function j(b,Y,at,ot,pt,Mt="ac",ne=.12){const Ht=new pe;Ht.position.set(Y,0,at),Ht.rotation.y=ot,Ht.rotation.z=ne,b.add(Ht);const _e=r(pt,{roughness:.35,metalness:.1});return g(Ht,.19,_e,0,.22,0,1,1.05,.28),g(Ht,.15,_e,0,.53,0,1,1,.28),p(Ht,.06,.06,.02,r(328965),0,.38,.065,14,Math.PI/2),f(Ht,.05,.62,.025,r(2759184),0,.98,0),f(Ht,.07,.14,.02,r(1381653),0,1.35,0),Ht}j(dt,5.78,2.15,0,15986662,"ac",.22);const rt=j(dt,5.72,2.5,0,941893,"el",.16);rt.rotation.y=-.2;const $=new pe;dt.add($);const st=r(6712435,{roughness:.35,metalness:.9});[[1.9,.12],[5.1,.12],[1.9,.62],[5.1,.62]].forEach(([b,Y])=>f($,.05,2.15,.05,st,b,1.075,Y));const L=[.15,.78,1.38,1.98];L.forEach(b=>f($,3.2,.04,.5,st,3.5,b,.37)),h($,1.9,.05,.05,5.1,2.2,.1,r(659512,{roughness:1,emissive:662640,emissiveIntensity:.3}),1);const ht=[];L.forEach((b,Y)=>{if(Y>0)for(let at=0;at<8;at++){const ot=c(16711680,1.7);ht.push({m:ot,k:at+Y*2}),f($,.4,.025,.025,ot,2.1+at*.4,b-.04,.6)}}),d($,10124031,3.2,3.5,1.1,.7,.16);const q=new La(.06,0);for(let b=0;b<(t?26:60);b++){const Y=[1.9,5.1,3.5][b%3],at=new re(q,l.ivy);at.position.set(Y+(Math.random()-.5)*.12,.4+Math.random()*1.9,.14+Math.random()*.1),at.scale.set(1.2,.8+Math.random(),.5),$.add(at)}const Z=[se(128,96),se(128,96)],ut=Z.map(b=>Yt(b));ut.forEach(b=>{b.generateMipmaps=!1,b.minFilter=1006});function mt(b,Y,at,ot,pt,Mt,ne=0){const Ht=new pe;Ht.position.set(Y,at,ot),Ht.rotation.y=ne,b.add(Ht);const _e=r(3158839,{roughness:.55});f(Ht,pt,pt*.84,pt*.78,_e,0,pt*.42,0),f(Ht,pt*.7,pt*.6,pt*.4,_e,0,pt*.42,-pt*.5),f(Ht,pt*.86,pt*.68,.02,r(1382170,{roughness:.3}),-.02*pt,pt*.45,pt*.39+.012);const Ce=new re(new An(pt*.72,pt*.56),new fn({color:0,emissive:16777215,emissiveMap:Mt,emissiveIntensity:1.35,roughness:.2}));return Ce.position.set(-.02*pt,pt*.45,pt*.39+.025),Ce.userData.crt=!0,Ht.add(Ce),d(Ht,7405456,pt*1.6,-.02*pt,pt*.45,pt*.5,.18),Ht}mt(dt,1.4,0,.55,.56,ut[0]),mt(dt,1.4,.48,.55,.5,ut[1]),mt(dt,4.55,1.4,.42,.34,ut[0]),f(dt,.6,.02,.6,r(546),1.4,.01,.55),f($,.5,.1,.38,r(13223092,{roughness:.5}),3.4,.85,.37),p($,.15,.15,.015,r(1052688),3.34,.915,.37,24),f($,.45,.012,.02,r(546),3.4,.92,.2),f($,.3,.2,.28,r(14144196),2.7,.9,.37),f($,.18,.04,.2,r(7311196),2.7,1.02,.37);const Pt=[6954526,1981034,3824170,8018458,4860506,1365];for(let b=0;b<9;b++)f($,.05,.22+b%3*.03,.18,r(Pt[b%Pt.length],{roughness:.8}),4.2+b*.055,.92,.38);const me=new pe;me.position.set(4.9,1.38,.38),$.add(me),g(me,.15,r(15330546,{roughness:.45}),0,.12,0,1.2,1.2,.8),g(me,.07,r(15330546,{roughness:.45}),0,.33,0,1,1.1,1),f(me,.5,.01,.01,c(3832575,1.8),0,-.05,.2),p($,.06,.04,.2,l.gold,4,.9,.37,14),g($,.06,l.gold,4,1.06,.37,1.1,.9,1.1);const He=r(16777215,{map:a.ball,roughness:.7});g($,.12,He,2.4,1.5,.4),g($,.12,He,4.4,.27,.4),f($,.4,.28,.3,r(8423568,{roughness:.35,metalness:.6}),2.3,2.17,.37),f($,.46,.04,.17,r(13649451),3.2,2.02,.37,.1),f($,.3,.3,.28,r(5132888,{roughness:.5}),4.3,2.18,.37);const ae=new pe;ae.position.set(4.7,2.1,.37),$.add(ae),f(ae,.46,.2,.15,r(11843772,{roughness:.35,metalness:.5}),0,0,0),[-.15,.15].forEach(b=>{p(ae,.06,.06,.01,r(1381653),b,0,.08,16,Math.PI/2)}),f(ae,.1,.06,.012,r(546),0,.03,.078);{const b=j($,3.9,.37,0,10692639,"el",0);b.position.y=2.1,b.rotation.set(0,0,Math.PI/2),b.rotation.y=.05}j(dt,1.78,.62,.2,1718886,"ac",.08),j(dt,5.28,.62,-.1,14262858,"ac",-.08),f($,.72,.05,.26,r(1382170,{roughness:.5}),4.55,.2,.37),f($,.66,.012,.1,r(15921126,{roughness:.5}),4.55,.23,.42);for(let b=0;b<12;b++)f($,.025,.014,.06,l.black,4.3+b*.045,.235,.44);f($,.66,.02,.07,l.darkSteel,4.55,.23,.3),g($,.08,r(1381653,{roughness:.6}),2.8,1.46,.37),g($,.04,l.black,2.74,1.5,.45),g($,.04,l.black,2.86,1.5,.45),f($,.3,.1,.22,r(546),3.8,1.45,.37),f($,.2,.08,.2,r(11549226),4.2,1.44,.37),f($,.3,.14,.2,r(819),2.2,.22,.37),f($,.25,.1,.25,r(7096878),3,.2,.37),f($,.36,.15,.22,r(12170144),3.7,.24,.37),[1.3,3.2].forEach(b=>f(dt,6,.04,.04,l.darkSteel,3,2.72,b)),[.7,5.3].forEach(b=>f(dt,.04,.04,5,l.darkSteel,b,2.72,2.5)),g(dt,.07,c(16777215,1.6),3.4,2.72,1.25),d(dt,16777215,1,3.4,2.68,1.25,.6);const ze=new pe;dt.add(ze);const nn=r(1839627,{roughness:.6}),Ps=new fn({map:a.tableWood,roughness:.55,color:9403756,emissive:2758152,emissiveMap:a.tableWood,emissiveIntensity:.1});{const b=new On(1,.07,2.2),Y=new re(b,[nn,nn,Ps,nn,nn,nn]);Y.position.set(3,.76,2.05),ze.add(Y)}[[2.6,1.05],[3.4,1.05],[2.6,3.05],[3.4,3.05]].forEach(([b,Y])=>f(ze,.05,.72,.05,l.black,b,.36,Y)),[[2.6,1,0],[3,1,0],[3.4,1,0]].forEach(([b,Y,at])=>{f(ze,.07,.07,.06,l.black,b,.8,Y),f(ze,.025,.55,.025,l.black,b,1.1,Y),f(ze,.025,.025,.4,l.black,b,1.36,Y+.18,0,0,0),p(ze,.035,.035,.16,r(2763824,{roughness:.4,metalness:.6}),b,1.34,Y+.34,12,Math.PI/2),p(ze,.045,.045,.07,r(14271050,{roughness:.4,metalness:.8}),b,1.34,Y+.4,12,Math.PI/2)});function Rr(b,Y,at){const ot=new pe;ot.position.set(b,0,Y),ot.rotation.y=at,dt.add(ot);const pt=new fn({color:5857643,roughness:1,side:2});p(ot,.27,.25,.1,pt,0,.46,0,20);const Mt=new re(new Zn(.27,.27,.42,20,1,!0,Math.PI*.38,Math.PI*1.24),pt);Mt.position.set(0,.76,0),ot.add(Mt),f(ot,.05,.4,.05,l.black,0,.23,0),f(ot,.4,.03,.04,l.black,0,.03,0),f(ot,.04,.03,.4,l.black,0,.03,0),[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]].forEach(([ne,Ht])=>f(ot,.02,.43,.02,l.black,ne*.8,.21,Ht*.8))}Rr(2,1.75,Math.PI/2-.35),Rr(4,1.75,-Math.PI/2+.35);{const b=r(986898,{roughness:.32,metalness:.15}),Y=new pe;Y.position.set(1.95,0,4.6),dt.add(Y),f(Y,1.9,.38,.8,b,0,.3,0),f(Y,1.9,.5,.18,b,0,.72,.33),f(Y,.18,.3,.82,b,-.95,.55,0),f(Y,.18,.3,.82,b,.95,.55,0),f(Y,.84,.14,.64,b,-.42,.55,-.03),f(Y,.84,.14,.64,b,.42,.55,-.03),[[-.85,-.3],[.85,-.3],[-.85,.3],[.85,.3]].forEach(([at,ot])=>f(Y,.04,.1,.04,l.steel,at,.05,ot))}const qe=new pe;qe.position.set(5.45,0,1.4),dt.add(qe),[[-.25,-.2],[.25,-.2],[-.25,.2],[.25,.2]].forEach(([b,Y])=>f(qe,.025,.55,.025,l.black,b,.275,Y)),f(qe,.62,.03,.46,r(8018488,{roughness:.6}),0,.56,0);const gi=r(16777215,{map:a.plaid,roughness:.8});f(qe,.56,.16,.4,gi,0,.66,0),f(qe,.5,.05,.34,r(2890772),0,.745,0),f(qe,.46,.06,.3,r(16777215,{map:a.dollar}),0,.78,0,.1),f(qe,.5,.025,.4,gi,0,.88,-.28,0,-.35);const _i=new re(u,gi);_i.scale.set(.56,.03,.4),_i.position.set(0,.95,-.35),_i.rotation.x=-1.35,qe.add(_i);const xi=new Ra;xi.moveTo(0,0),xi.quadraticCurveTo(.07,.35,0,.9),xi.quadraticCurveTo(-.07,.35,0,0);const Zi=new hs(xi),Ls=(()=>{const b=new Ra;return b.moveTo(0,0),b.quadraticCurveTo(.14,.5,0,1.2),b.quadraticCurveTo(-.14,.5,0,0),new hs(b)})();function zn(b,Y,at,ot,pt=0){const Mt=new pe;Mt.position.set(Y,0,at),b.add(Mt),p(Mt,.17,.14,.36,r(1052690,{roughness:.7}),0,.18,0,14),p(Mt,.15,.15,.02,r(1708556),0,.37,0,14);const ne=t?9:16;for(let Ht=0;Ht<ne;Ht++){const _e=Ht/ne*Math.PI*2+Math.random()*.3,Ce=Math.random()*.25;if(pt===0){p(Mt,.012,.012,ot*.6,r(4876842),Math.cos(_e)*.04,.36+ot*.3,Math.sin(_e)*.04,5,0,0);const Te=new re(Ls,Ht%2?l.leaf:l.leaf2);Te.position.set(Math.cos(_e)*.04,.36+ot*.55,Math.sin(_e)*.04),Te.rotation.set(0,-_e+Math.PI/2,0),Te.rotateX(-(.9+Ce)),Te.scale.set(1.2,ot*.8,1),Mt.add(Te)}else{const Te=new re(Zi,Ht%2?l.leaf:l.leaf2);Te.position.set(0,.35+Math.random()*.3,0),Te.rotation.set(0,-_e+Math.PI/2,0),Te.rotateX(-(.2+Math.random()*.5)),Te.scale.set(1.3,ot*.9,1),Mt.add(Te)}}return Mt}zn(dt,5.55,.5,1.5,0),zn(dt,5.4,4.5,1.4,1),zn(dt,.5,.5,1.2,1),zn(dt,.45,4.5,1.3,0);const Ds=[r(789518,{roughness:.9}),r(789518),new fn({color:0,emissive:16777215,emissiveMap:a.softbox,emissiveIntensity:.95,map:a.softbox})];function Cr(b,Y,at,ot,pt=.5){const Mt=new pe;Mt.position.set(b,Y,at),dt.add(Mt);const ne=new re(new Zn(pt*.55,pt,.32,8,1),Ds);ne.position.y=0,Mt.add(ne),Mt.lookAt(ot.x,ot.y,ot.z),ne.rotation.x=-Math.PI/2;const Ht=new re(new qi(pt*.95,.01,6,8),c(14676223,1.5));return Ht.rotation.x=0,Ht.position.z=.16,Ht.rotation.z=Math.PI/8,Mt.add(Ht),f(Mt,.03,.6,.03,l.black,0,.3,-.2),d(Mt,13623551,pt*3,0,0,.3,.2),Mt}Cr(.95,2.4,3.3,new R(3,.9,2.8)),Cr(5.05,2.4,1.7,new R(3,.9,2.8));const Qn=new pe;Qn.position.set(3.4,2.4,1.05),Qn.rotation.x=.35,dt.add(Qn),f(Qn,1.3,.2,.05,r(1381914),0,0,0),m(Qn,1.22,.14,new fn({color:0,emissive:16777215,emissiveMap:a.softbox,emissiveIntensity:1.5}),0,0,.03,"+z",[3,1]),d(Qn,15266047,2.2,0,0,.4,.3);const Is=(()=>{const b=se(512,128),Y=b.getContext("2d"),at=Pe(61);for(let ot=0;ot<360;ot++){Y.fillStyle=`rgba(${30+at()*40},${100+at()*70},${40+at()*30},${.75+at()*.25})`;const pt=at()*512,Mt=at()*at()*128;Y.beginPath(),Y.ellipse(pt,Mt,9+at()*6,6+at()*3,at()*3,0,7),Y.fill()}for(let ot=0;ot<40;ot++){Y.strokeStyle="rgba(30,90,30,.9)",Y.lineWidth=1.5,Y.beginPath();const pt=at()*512;Y.moveTo(pt,0),Y.lineTo(pt+(at()-.5)*20,30+at()*90),Y.stroke()}return Yt(b)})();m(dt,5,.9,new fn({map:Is,transparent:!0,alphaTest:.35,roughness:.9,side:2,emissive:997908,emissiveIntensity:.6,emissiveMap:Is}),.05,2.3,2.5,"+x"),g(dt,.05,c(16722474,1.8),5.8,2.35,3.45),d(dt,16719904,.7,5.8,2.35,3.45,.6);const Ae=n.studio;Ae.position.x=-3;const y=r(526347,{roughness:1});h(Ae,9.1,-.1,-1,12,0,5,l.blueCarpet,1),h(Ae,9.1,Nt,-1,12,Nt+.1,5,l.ceil,1),h(Ae,9.1,0,-1.2,12.2,Nt+.1,-1,y,1),h(Ae,12,0,-1.2,12.2,Nt+.1,5.2,y,1),h(Ae,9.1,0,5,12.2,Nt+.1,5.2,y,1),m(Ae,1,2.4,l.foam,9.12,1.3,4.45,"+x",[1.5,3.6]),h(Ae,8.9,0,-1.2,9.1,Nt+.1,0,y,1),m(Ae,1,2.4,l.foam,9.12,1.3,2.4,"+x",[1.5,3.6]),m(Ae,2.4,1.6,l.foam,11.98,1.3,1.2,"-x",[3.5,2.5]),m(Ae,2.4,1.6,l.foam,11.98,1.3,3.8,"-x",[3.5,2.5]),m(Ae,1.6,1.6,l.foam,10.5,1.3,-.98,"+z",[2.4,2.4]),m(Ae,2.6,1.8,l.foam,10.5,2.79,3.5,"-y",[4,3]);const N=new pe;Ae.add(N);const G=r(16777215,{map:a.concreteDark,roughness:.55,color:8949141});f(N,.8,.05,2.1,G,9.55,.75,1.25),[[9.2,.3],[9.2,2.2],[9.9,.3],[9.9,2.2]].forEach(([b,Y])=>f(N,.05,.72,.05,l.black,b,.36,Y)),new fn({color:0,emissive:16777215,emissiveMap:a.daw,emissiveIntensity:1.1,map:a.daw});const H=3,F=1;for(let b=0;b<H;b++){const Y=(b-1)*.28,at=new pe;at.position.set(9.4+Math.abs(b-1)*0+Math.cos(Y)*0,1.12,1.2+(b-1)*.34),at.rotation.y=Math.PI/2+(b-1)*.28,N.add(at),at.position.x=9.38+(b===1?0:.04);const ot=new re(new An(F/H,.34),new fn({color:0,emissive:16777215,emissiveMap:a.daw,emissiveIntensity:1.2,map:a.daw}));ot.material.map=a.daw.clone(),ot.material.emissiveMap=ot.material.map,ot.material.map.needsUpdate=!0,ot.material.map.repeat.set(1/H,1),ot.material.map.offset.set(b/H,0),ot.position.z=0,at.add(ot),f(at,F/H,.36,.02,l.black,0,0,-.012)}f(N,.05,.28,.08,l.black,9.3,.9,1.2),d(N,5939455,2.2,9.6,1.1,1.2,.22),f(N,.18,.015,.5,l.black,9.65,.785,1.15),f(N,.14,.04,.2,r(1710626),9.8,.795,1.8),[[9.4,.3],[9.4,2.1]].forEach(([b,Y])=>{f(N,.24,.36,.28,l.black,b,1,Y),p(N,.085,.085,.02,r(14131994,{roughness:.5}),b+.12,1,Y,16,0,Math.PI/2)});const lt=new pe;lt.position.set(9.72,.79,.62),lt.rotation.y=.5,Ae.add(lt);{const b=r(10134446,{roughness:.4,metalness:.5});f(lt,.28,.045,.05,b,0,.03,0),f(lt,.09,.07,.045,b,-.14,.04,0),p(lt,.032,.032,.05,b,-.1,.045,0,14,Math.PI/2),f(lt,.05,.09,.04,r(7028002,{roughness:.6}),-.19,-.01,0,0,0,.35),d(lt,16765040,.7,0,.05,0,.5)}const gt=new pe;gt.position.set(10.45,0,1),gt.rotation.y=Math.PI/2-.4,Ae.add(gt),f(gt,.5,.1,.5,r(1381914,{roughness:.5}),0,.5,0),f(gt,.5,.65,.1,r(9078394,{roughness:.6}),0,.9,-.24),f(gt,.5,.2,.12,r(1381914),0,1.3,-.24),p(gt,.03,.03,.4,l.darkSteel,0,.25,0,8),f(gt,.5,.04,.04,l.darkSteel,0,.04,0),f(gt,.04,.04,.5,l.darkSteel,0,.04,0);const Tt=new pe;Tt.position.set(11.3,0,4.1),Ae.add(Tt);for(let b=0;b<3;b++){const Y=b*2.094;f(Tt,.03,.03,.4,l.black,Math.cos(Y)*.17,.04,Math.sin(Y)*.17,-Y+Math.PI/2)}p(Tt,.018,.018,1.45,l.black,0,.75,0,8),f(Tt,.02,.02,.35,l.black,0,1.5,-.14);const It=r(12962255,{roughness:.25,metalness:.95});p(Tt,.032,.032,.18,It,0,1.52,-.3,16),p(Tt,.045,.045,.02,l.black,0,1.42,-.3,16),p(Tt,.045,.045,.02,l.black,0,1.62,-.3,16);const qt=new re(new Ta(.1,24),new fn({color:273,transparent:!0,opacity:.55,side:2}));qt.position.set(0,1.5,-.17),Tt.add(qt);const Zt=new re(new qi(.1,.006,6,24),l.black);Zt.position.copy(qt.position),Tt.add(Zt),p(Tt,.01,.01,.3,l.black,0,1.35,-.17,6);const Ct=new pe;Ct.position.set(11.6,1.1,1),Ae.add(Ct),p(Ct,.01,.01,1,l.black,0,-.55,0,6);const oe=new re(new qi(.09,.012,8,20,Math.PI),l.black);oe.rotation.z=0,Ct.add(oe),p(Ct,.05,.05,.03,l.black,-.09,-.02,0,12,0,Math.PI/2),p(Ct,.05,.05,.03,l.black,.09,-.02,0,12,0,Math.PI/2),j(Ae,11.6,2.2,-1.2,2303275,"el",0),g(Ae,.14,r(328965,{roughness:.4}),11.95,1.9,2.6,.3,1.2,.8),d(Ae,6728447,.8,11.9,1.9,2.6,.12),[-.95,4.95].forEach(b=>f(Ae,2.8,.04,.04,c(3827455,1.6),10.6,2.72,b)),f(Ae,.04,.04,5.8,c(3827455,1.4),11.9,2.72,2),d(Ae,3827455,5,10.8,2.5,2,.12),g(Ae,.05,c(16722474,1.8),11.95,2.3,3.6),d(Ae,16719904,.8,11.9,2.3,3.6,.6);const ge=new Fl(2898534,1182218,.55);e.add(ge);const ve=[];for(let b=0;b<6;b++){const Y=new Vl(16777215,0,10,2);e.add(Y),ve.push(Y)}const Ue={zone:null};function ue(b,Y){Ue.zone=b,Ue.target=$l[b],Ue.fog=S0[b],Ue.amb={street:.8,entry:.3,hall:.3,studio:.85}[b],Y&&_n(1)}const Dt=new Jt;function _n(b){const Y=Ue.target;ve.forEach((ot,pt)=>{const Mt=Y[pt];ot.position.x+=(Mt.p[0]-ot.position.x)*b,ot.position.y+=(Mt.p[1]-ot.position.y)*b,ot.position.z+=(Mt.p[2]-ot.position.z)*b,Dt.setHex(Mt.c),ot.color.lerp(Dt,b),ot.intensity+=(Mt.i-ot.intensity)*b,ot.distance+=(Mt.d-ot.distance)*b});const at=Ue.fog;e.fog.color.lerp(Dt.setHex(at[0]),b),e.fog.density+=(at[1]-e.fog.density)*b,e.background.lerp(Dt.setHex(at[0]),b),ge.intensity+=(Ue.amb-ge.intensity)*b}const he={street:["street","stairs","entry"],entry:["street","stairs","entry","hall"],hall:["entry","hall","studio"],studio:["hall","studio"]};function pn(b){const Y=he[b];for(const at in n)n[at].visible=Y.includes(at)}const $n=b=>`../index.html?service=${b}#book`,rn=[{id:"crt",zone:"hall",pos:[1.4,.75,.9],title:"Старые телевизоры в кадре",text:"На экранах идёт картинка с камер студии: зелёный фосфор, шум, таймкод REC. Такой фон оживляет кадр.",img:"hall-wide-1",service:"podcast-express"},{id:"suitcase",zone:"hall",pos:[5.45,.85,1.4],title:"Чемодан",text:"Чемодан «заряжен на деньги». Реквизит можно переставить под тему выпуска.",img:"detail-suitcase",service:"rent"},{id:"retro",zone:"hall",pos:[3.4,1,.45],title:"Стеллаж с инструментами и техникой",text:"Три гитары, синтезатор, проигрыватель, магнитофоны и книги. Всё настоящее, без бутафории — это ретро-эстетика в кадре.",img:"detail-turntable",service:"rent"},{id:"mural",zone:"hall",pos:[5.9,1.5,1.4],title:"Граффити-стена",text:"Большой чёрно-белый рисунок на зелёной стене — фирменный фон студии. Рядом дверь в комнату звукозаписи.",img:"hall-wide-2",service:"rent"},{id:"light",zone:"hall",pos:[1.1,2.3,3.1],title:"Свет RGB",text:"Цвет света подбираем под настроение выпуска. Два больших софтбокса и панель сверху дают мягкую картинку.",img:"hall-wide-3",service:"podcast-express"},{id:"table",zone:"hall",pos:[3,.9,2],title:"Стол и три микрофона",text:"Три микрофона на журавлях, три камеры 4K, запись в мультикам. Садись за стол — проверим звук.",img:"hall-table",service:"podcast-express"},{id:"sofa",zone:"hall",pos:[1.95,.8,4.4],title:"Чёрный кожаный диван",text:"Диван между входом и дверью в звукозапись. Можно посидеть, пока мы готовим свет и звук.",img:"hall-both",service:"rent"},{id:"console",zone:"studio",pos:[6.55,1.1,1.2],title:"Тот же фрагмент после сведения",text:"Звукорежиссёр сидит в той же комнате, что и исполнитель, — без стеклянной стены между вами. Сравни с записью до обработки.",img:"engineer-1",service:"sound-vocal",audio:"demo-after.mp3"},{id:"vocal",zone:"studio",pos:[8.3,1.45,4.1],title:"Голос до обработки",text:"Комната небольшая — поэтому голос в ней плотный, а не гулкий. Послушай запись до обработки.",img:"mic-neumann",service:"sound-vocal",audio:"demo-before.mp3"},{id:"wall",zone:"studio",pos:[6.2,1.4,4.45],title:"Звукоизолированная стена",text:"Между залом и комнатой звукозаписи — звукоизоляция. Можно писать подкаст и голос одновременно, не мешая друг другу. Пакет «Трек + обложка + сниппет + Reels — 13 900 ₽».",img:"vocal-2",service:"pack"},{id:"revolver",zone:"studio",pos:[6.72,.9,.62],title:"Револьвер на столе",text:"",img:null,service:null,pickup:!0},{id:"dj",zone:"entry",pos:[-2.3,1.5,2.3],title:"Школа диджеев — идёт ремонт",text:"Здесь только начали ремонт, дверь закрыта. Тебе — направо, в студию.",img:null,service:null},{id:"sign",zone:"street",pos:[6.6,6.1,5.8],title:"REVOLVER PODCAST · REVOLVER SOUND",text:"Студии на Фрунзе, 49: видеоподкасты и запись голоса. Вход по лестнице вниз, потом направо.",img:"hall-both",service:"pack"}].map(b=>Object.assign(b,{pos:new R(...b.pos),href:b.service?$n(b.service):null})),ti={t:0},de=[{i:0,t:0},{i:1,t:0}];let Ke=0;function ei(b){const Y=b.getContext("2d");for(let at=0;at<5;at++){const ot=Math.random()*b.height,pt=3+Math.random()*10;Y.drawImage(b,0,ot,b.width,pt,(Math.random()-.5)*40,ot,b.width,pt)}Y.fillStyle="rgba(255,255,255,.55)",Y.fillRect(0,Math.random()*b.height,b.width,2),Y.fillStyle="rgba(255,0,60,.25)",Y.fillRect(0,Math.random()*b.height,b.width,6)}const Je=new R;function wn(b,Y,at,ot){ti.t+=b;const pt=ti.t;for(const Mt of zt){Mt.grp.localToWorld(Je.set(Mt.cx,0,Mt.cz));const ne=Math.hypot(Y-Je.x,at-Je.z);Mt.target=ne<2?Mt.open:0,Mt.cur+=(Mt.target-Mt.cur)*Math.min(1,b*4.5),Mt.pivot.rotation.y=Mt.cur}for(const Mt of ht)Mt.m.color.setHSL((pt*.07+Mt.k/16)%1,1,.5).multiplyScalar(1.7);if($l.hall[1].c=new Jt().setHSL(pt*.07%1,1,.5).getHex(),_n(Math.min(1,b*3.2)),(ot==="hall"||ot==="entry")&&(de[0].t+=b,de[1].t+=b,Ke>0&&(Ke-=b),de[0].t>.085&&(de[0].t=0,Jl(Z[0],pt,1,pt*100|0),Ke>0&&ei(Z[0]),ut[0].needsUpdate=!0),de[1].t>.12&&(de[1].t=0,Jl(Z[1],pt+5,2,pt*77|0),Ke>0&&ei(Z[1]),ut[1].needsUpdate=!0)),ot==="street"||ot==="entry"){for(const Mt of Ut){const ne=Mt.userData;ne.x+=ne.dir*ne.speed*b,ne.x>60&&(ne.x=-60),ne.x<-60&&(ne.x=60),Mt.position.x=ne.x}A.position.y=4.35+Math.sin(pt*3)*.08,S.position.y=A.position.y}}return e.updateMatrixWorld(!0),{scene:e,groups:n,hotspots:rn,update:wn,setZoneLights:ue,setVisibility:pn,redrawMural:vt,redrawDoor:kt,redrawSign:()=>{Kl(x),O.needsUpdate=!0},doors:zt,lights:ve,amb:ge,glitch:b=>{Ke=b},hideRevolverProp:()=>{lt.visible=!1}}}const _r=["#c9f23b","#ff4b2e","#c23cff","#ffffff","#111111"],y0=150,za=4e3;function _s(i,t){const e=se(128,128),n=e.getContext("2d"),r=Pe(i);if(n.translate(64,64),t){n.strokeStyle="rgba(235,245,240,.9)",n.lineWidth=1.4;for(let s=0;s<14;s++){let a=s/14*6.28+r()*.3,o=0,l=0;n.beginPath(),n.moveTo(0,0);for(let c=0;c<5;c++)a+=(r()-.5)*.6,o+=Math.cos(a)*(6+r()*9),l+=Math.sin(a)*(6+r()*9),n.lineTo(o,l);n.stroke()}n.strokeStyle="rgba(0,0,0,.6)",n.lineWidth=3,n.beginPath(),n.arc(0,0,4,0,7),n.stroke(),n.strokeStyle="rgba(200,230,255,.5)",n.lineWidth=1;for(let s=1;s<4;s++)n.beginPath(),n.arc(0,0,s*14,r()*6,r()*6+3.5),n.stroke()}else{const s=n.createRadialGradient(0,0,2,0,0,40);s.addColorStop(0,"rgba(0,0,0,.95)"),s.addColorStop(.35,"rgba(10,10,10,.8)"),s.addColorStop(.7,"rgba(120,115,105,.35)"),s.addColorStop(1,"rgba(120,115,105,0)"),n.fillStyle=s,n.beginPath(),n.arc(0,0,40,0,7),n.fill(),n.fillStyle="#000",n.beginPath(),n.arc(0,0,5.5,0,7),n.fill();for(let a=0;a<12;a++){const o=r()*6.28,l=8+r()*22;n.fillStyle=`rgba(${r()<.5?"30,28,26":"170,165,150"},${.5+r()*.4})`,n.beginPath(),n.arc(Math.cos(o)*l,Math.sin(o)*l,1+r()*3,0,7),n.fill()}n.strokeStyle="rgba(0,0,0,.7)",n.lineWidth=1;for(let a=0;a<7;a++){let o=r()*6.28,l=0,c=0;n.beginPath(),n.moveTo(0,0);for(let u=0;u<4;u++)o+=(r()-.5)*.8,l+=Math.cos(o)*(6+r()*8),c+=Math.sin(o)*(6+r()*8),n.lineTo(l,c);n.stroke()}}return e}function E0(){const i=se(128,128),t=i.getContext("2d"),e=Pe(5),n=t.createRadialGradient(64,64,2,64,64,50);n.addColorStop(0,"rgba(255,255,255,.95)"),n.addColorStop(.45,"rgba(255,255,255,.7)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);for(let a=0;a<70;a++){const o=e()*6.28,l=20+e()*42;t.fillStyle=`rgba(255,255,255,${.35+e()*.6})`,t.beginPath(),t.arc(64+Math.cos(o)*l,64+Math.sin(o)*l,.6+e()*2.2,0,7),t.fill()}const r=t.getImageData(0,0,128,128),s=r.data;for(let a=3;a<s.length;a+=4)s[a]=Math.max(0,s[a]*(.85+e()*.3));return t.putImageData(r,0,0),i}function A0(){const i=se(256,128),t=i.getContext("2d");return t.fillStyle="#c9ccd0",t.fillRect(0,0,256,128),t.fillStyle="#111",t.fillRect(0,22,256,84),t.fillStyle="#ff3b30",t.font="900 40px Unbounded, Impact, sans-serif",t.textAlign="center",t.fillText("REVOLVER",128,74),t.fillStyle="#c9f23b",t.font="700 14px Arial",t.fillText("SPRAY · 400 ML",128,98),i}function ka(){const i=se(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,240,200,1)"),e.addColorStop(.3,"rgba(255,170,60,.7)"),e.addColorStop(1,"rgba(255,100,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),i}function T0(i){const{renderer:t,camera:e,scene:n,getWorld:r,audio:s,state:a}=i,o={},l=new ul,c=new an(54,1,.01,5);l.add(new Fl(14542079,5259328,1.5));const u=new zp(16773344,1.6);u.position.set(.5,1,.8),l.add(u);const h=new Vl(16752704,0,2);h.position.set(.15,0,-.5),l.add(h);const f=(k,j={})=>new fn(Object.assign({color:k,roughness:.5,metalness:.4},j)),p=f(10134446,{metalness:.5,roughness:.4}),g=f(2764083,{metalness:.4,roughness:.5}),_=f(7028002,{metalness:0,roughness:.6}),m=f(13212282,{metalness:0,roughness:.8}),d=f(2831696,{metalness:0,roughness:.95}),M=(k,j,rt,$,st,L,ht,q,Z=0,ut=0,mt=16)=>{const Pt=new re(new Zn(j,rt,$,mt),st);return Pt.position.set(L,ht,q),Pt.rotation.set(Z,0,ut),k.add(Pt),Pt},E=(k,j,rt,$,st,L,ht,q,Z=0,ut=0,mt=0)=>{const Pt=new re(new On(j,rt,$),st);return Pt.position.set(L,ht,q),Pt.rotation.set(Z,ut,mt),k.add(Pt),Pt},x=new pe,O=new pe;x.add(O),E(O,.04,.075,.13,p,0,0,.03),M(O,.0125,.0125,.24,p,0,.022,-.17,Math.PI/2,0),E(O,.012,.012,.22,g,0,.045,-.16),E(O,.008,.016,.01,g,0,.055,-.27),M(O,.009,.009,.19,p,0,-.003,-.16,Math.PI/2,0);const w=new pe;w.position.set(0,.018,-.045),O.add(w),M(w,.034,.034,.065,p,0,0,0,Math.PI/2,0,20);for(let k=0;k<6;k++){const j=k*Math.PI/3;M(w,.0085,.0085,.01,f(328965,{metalness:0}),Math.cos(j)*.021,Math.sin(j)*.021,.033,Math.PI/2,0,10),M(w,.0065,.0065,.01,f(13146682,{metalness:.8,roughness:.3}),Math.cos(j)*.021,Math.sin(j)*.021,.035,Math.PI/2,0,10)}const C=E(O,.01,.04,.02,g,0,.055,.1,.5);E(x,.036,.1,.05,_,0,-.07,.1,.35);const I=new re(new qi(.022,.004,6,14,Math.PI*1.3),p);I.position.set(0,-.04,.04),I.rotation.set(0,Math.PI/2,Math.PI*1.1),x.add(I),E(x,.008,.022,.008,g,0,-.02,.05),E(x,.052,.05,.065,m,.002,-.07,.115,.35),M(x,.032,.036,.3,d,0,-.13,.27,1.25,0,14);const A=new re(new An(.2,.2),new En({map:Yt(ka()),transparent:!0,blending:2,depthWrite:!1}));A.position.set(0,.022,-.3),A.visible=!1,x.add(A);const S=new pe,P=Yt(A0()),W=new re(new Zn(.03,.03,.17,20),[f(16777215,{map:P,metalness:.5,roughness:.35}),f(12106946,{metalness:.8,roughness:.3}),f(12106946,{metalness:.8})]);W.position.set(0,0,0),S.add(W),M(S,.026,.03,.02,f(12106946,{metalness:.8,roughness:.3}),0,.095,0);const V=f(13234747,{metalness:.1,roughness:.5});M(S,.026,.026,.035,V,0,.12,0),E(S,.012,.012,.025,g,0,.126,-.02),E(S,.05,.05,.06,m,0,-.01,.04),M(S,.032,.036,.3,d,0,-.12,.2,1.2,0,14);const K=new re(new An(.16,.16),new En({map:Yt(ka()),transparent:!0,opacity:.6,depthWrite:!1,color:13234747}));K.position.set(0,.126,-.1),K.visible=!1,S.add(K);const nt=new pe;l.add(nt),nt.add(x),nt.add(S),x.visible=!1;const J={rev:new R(.1,-.095,-.3),can:new R(.1,-.1,-.3)};x.scale.setScalar(.85),S.scale.setScalar(.8),S.rotation.set(-.35,.1,0),x.rotation.set(0,.06,0);const U={weapon:1,hasRev:!1,ammo:6,reload:-1,rec:0,flash:0,cd:0,swap:1,swapTo:0,trigger:!1,color:0,sprayT:0,hold:0,bobT:0,sx:0,sy:0,lastYaw:0,lastPitch:0,lastP:null,dripLen:0,dripT:0,spraying:!1};o.S=U;const X=[Yt(_s(1)),Yt(_s(2)),Yt(_s(3))],xt=Yt(_s(9,!0)),At=X.map(k=>new Nl({map:k,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),Ut=new En({map:xt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6}),Bt=new An(1,1),ce=[];let Q=0;const ft=new R,Rt=new R;function _t(k,j,rt,$){let st=ce[Q];st||(st=new re(Bt,At[0]),ce[Q]=st,n.add(st)),Q=(Q+1)%y0,st.material=$?Ut:At[Math.random()*3|0],st.scale.set(rt,rt,1),st.position.copy(k).addScaledVector(j,.004),zt(st,j),st.rotateZ(Math.random()*6.28),st.visible=!0}function zt(k,j){Math.abs(j.y)>.95?k.up.set(0,0,1):k.up.set(0,1,0),k.lookAt(k.position.x+j.x,k.position.y+j.y,k.position.z+j.z)}const Wt=Yt(E0()),wt=new Nl({map:Wt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Nt=new ip(Bt,wt,za);Nt.frustumCulled=!1,Nt.count=0,n.add(Nt),Nt.instanceMatrix.setUsage(35048);const Kt=new Jt,jt=new Fe;let D=0,Re=0;function Qt(k,j,rt,$=1,st=1,L=!1,ht=0){jt.position.copy(k).addScaledVector(j,.003+D%9*4e-4),jt.scale.set(rt*$,rt*st,1),jt.up.set(0,1,0),Math.abs(j.y)>.95&&jt.up.set(0,0,1),jt.lookAt(jt.position.x+j.x,jt.position.y+j.y,jt.position.z+j.z),L||jt.rotateZ(Math.random()*6.28),jt.updateMatrix(),Nt.setMatrixAt(D,jt.matrix),Kt.set(_r[U.color]),Nt.setColorAt(D,Kt),D=(D+1)%za,Re=Math.min(za,Re+1),Nt.count=Re,Nt.instanceMatrix.needsUpdate=!0,Nt.instanceColor&&(Nt.instanceColor.needsUpdate=!0)}const Xt=80;function Ot(k,j){const rt=new Ze;rt.setAttribute("position",new sn(new Float32Array(Xt*3),3)),rt.setAttribute("color",new sn(new Float32Array(Xt*3),3));const $=new vl({size:k,vertexColors:!0,transparent:!0,blending:2,depthWrite:!1,sizeAttenuation:!0,map:Yt(ka())}),st=new rp(rt,$);return st.frustumCulled=!1,n.add(st),{pt:st,g:rt,v:new Float32Array(Xt*3),life:new Float32Array(Xt),max:new Float32Array(Xt),i:0,base:new Float32Array(Xt*3),grav:0}}const dt=Ot(.05),Ft=Ot(.22);dt.grav=6,Ft.grav=-.15;function T(k,j,rt,$,st,L,ht){for(let q=0;q<$;q++){const Z=k.i;k.i=(k.i+1)%Xt;const ut=k.g.attributes.position.array;ut[Z*3]=j.x,ut[Z*3+1]=j.y,ut[Z*3+2]=j.z,k.v[Z*3]=rt.x*st*Math.random()+(Math.random()-.5)*st,k.v[Z*3+1]=rt.y*st*Math.random()+(Math.random()-.3)*st,k.v[Z*3+2]=rt.z*st*Math.random()+(Math.random()-.5)*st,k.life[Z]=k.max[Z]=L*(.6+Math.random()*.6),k.base[Z*3]=ht[0],k.base[Z*3+1]=ht[1],k.base[Z*3+2]=ht[2]}}function v(k,j){const rt=k.g.attributes.position.array,$=k.g.attributes.color.array;for(let st=0;st<Xt;st++)if(k.life[st]>0){k.life[st]-=j;const L=Math.max(0,k.life[st]/k.max[st]);k.v[st*3+1]-=k.grav*j,rt[st*3]+=k.v[st*3]*j,rt[st*3+1]+=k.v[st*3+1]*j,rt[st*3+2]+=k.v[st*3+2]*j,$[st*3]=k.base[st*3]*L,$[st*3+1]=k.base[st*3+1]*L,$[st*3+2]=k.base[st*3+2]*L}else $[st*3]=$[st*3+1]=$[st*3+2]=0;k.g.attributes.position.needsUpdate=!0,k.g.attributes.color.needsUpdate=!0}const B=new kp;B.far=40;let tt=null,it="";o.invalidate=()=>{tt=null};function et(){const k=r();if(!k)return[];if(tt&&it===a.zone)return tt;const j=[];for(const rt in k.groups){const $=k.groups[rt];$.visible&&$.traverse(st=>{st.isMesh&&st.visible&&!(st.material.transparent&&st.material.opacity<.5&&!st.material.alphaTest)&&st.material.side!==2&&j.push(st)})}return tt=j,it=a.zone,j}function Lt(k,j){e.updateMatrixWorld(),k?B.set(k,j):B.setFromCamera({x:0,y:0},e);const rt=B.intersectObjects(et(),!1);for(const $ of rt)if($.face)return ft.copy($.face.normal).transformDirection($.object.matrixWorld),ft.dot(B.ray.direction)>0&&ft.negate(),{point:$.point.clone(),normal:ft.clone(),object:$.object};return null}function vt(k,j){const rt=Lt(k,j);if(!rt)return null;const $=rt.object.userData.noPaint;if(rt.object.userData.crt){_t(rt.point,rt.normal,.3,!0);const st=r();st&&st.glitch&&st.glitch(1.1),T(dt,rt.point,rt.normal,14,2.5,.5,[.6,1,.8])}else $?T(dt,rt.point,rt.normal,6,1.8,.35,[1,.7,.25]):(_t(rt.point,rt.normal,.17+Math.random()*.06,!1),T(dt,rt.point,rt.normal,10,2.2,.45,[1,.7,.25]));return T(Ft,rt.point,rt.normal,3,.5,1.1,[.3,.3,.3]),rt}o.fire=(k,j,rt)=>!U.hasRev||U.weapon!==0||U.swap<1||U.reload>=0||U.cd>0?!1:U.ammo<=0?(s.click(),o.reload(),!1):(U.ammo--,U.rec=1,U.flash=.06,U.cd=.3,w.rotation.z-=Math.PI/3,s.shot(),vt(k,j),yt(),U.ammo===0&&setTimeout(()=>o.reload(),450),!0),o.reload=()=>{!U.hasRev||U.weapon!==0||U.reload>=0||U.ammo>=6||(U.reload=0,s.click())},o.giveRevolver=()=>{U.hasRev=!0,U.ammo=6,o.switchWeapon(0)},o.switchWeapon=k=>{if(!U.hasRev)return;const j=k===void 0?1-U.weapon:k;j===U.weapon&&U.swap>=1||(U.swapTo=j,U.swap=0,U.reload=-1,U.trigger=!1,s.spray(!1))},o.cycleColor=k=>{U.color=k===void 0?(U.color+1)%_r.length:k,V.color.set(_r[U.color]),K.material.color.set(_r[U.color]),yt()},o.setTrigger=k=>{U.trigger=k,U.weapon===0&&k&&o.fire(),k||s.spray(!1)},o.sprayAt=(k,j,rt=1)=>{let $=null;for(let st=0;st<rt;st++)$=bt(k,j);return!!$};function bt(k,j){const rt=Lt(k,j);if(!rt||rt.object.userData.noPaint)return null;const $=new R,st=.16+Math.random()*.06;Qt(rt.point,rt.normal,st);for(let L=0;L<2;L++)$.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.16).projectOnPlane(rt.normal),Qt(Rt.copy(rt.point).add($),rt.normal,.02+Math.random()*.04);return rt}o.clear=()=>{Re=0,D=0,Nt.count=0,ce.forEach(k=>k.visible=!1),Q=0},o.counts=()=>({decals:ce.filter(k=>k.visible).length,paint:Re});const te=document.getElementById("ammo"),ct=document.getElementById("palette");function yt(){te&&(te.firstElementChild.textContent=U.weapon===0?(U.reload>=0?"…":U.ammo)+"/∞":"Спрей",te.lastElementChild.textContent=U.weapon===0?"Револьвер .357":"Баллончик",ct.style.display=U.weapon===1?"flex":"none",[...ct.children].forEach((k,j)=>k.classList.toggle("on",j===U.color)))}ct&&_r.forEach((k,j)=>{const rt=document.createElement("button");rt.style.background=k,rt.setAttribute("aria-label","Цвет "+(j+1)),rt.addEventListener("click",$=>{$.stopPropagation(),o.cycleColor(j)}),ct.appendChild(rt)}),o.updateHud=yt,yt();const kt=k=>k*k*(3-2*k);return o.update=(k,j)=>{U.cd=Math.max(0,U.cd-k);let rt=0;U.swap<1&&(U.swap=Math.min(1,U.swap+k/.28),U.swap<.5?rt=kt(U.swap*2):(U.weapon!==U.swapTo&&(U.weapon=U.swapTo,x.visible=U.weapon===0,S.visible=U.weapon===1,yt()),rt=1-kt((U.swap-.5)*2)),U.swap>=1&&(rt=0));const $=U.weapon===0?J.rev:J.can;U.bobT+=k*(4+j.speed*5);const st=Math.min(1,j.speed)*(j.airborne?0:1),L=Math.sin(U.bobT)*.006*st,ht=Math.abs(Math.cos(U.bobT))*.007*st-.003*st;let q=a.yaw-U.lastYaw,Z=a.pitch-U.lastPitch;U.lastYaw=a.yaw,U.lastPitch=a.pitch,q=Math.max(-.2,Math.min(.2,q)),Z=Math.max(-.2,Math.min(.2,Z)),U.sx+=(-q*.35-U.sx)*Math.min(1,k*10),U.sy+=(Z*.35-U.sy)*Math.min(1,k*10),U.rec=Math.max(0,U.rec-k*7);let ut=0;if(U.reload>=0){U.reload+=k;const Pt=1.4,me=Math.min(1,U.reload/Pt);ut=Math.sin(Math.PI*Math.min(1,me*1.15)),w.rotation.z+=k*18*Math.sin(Math.PI*me),U.reload>=Pt&&(U.reload=-1,U.ammo=6,s.click(),yt())}const mt=U.weapon===0?x:S;if(nt.position.set($.x+L+U.sx,$.y+ht+U.sy-rt*.25-ut*.07+Math.min(0,j.vy)*.004,$.z+U.rec*.05),mt.rotation.x=(U.weapon===1?-.35:0)+U.rec*.28-ut*.55+rt*.5,mt.rotation.z=ut*.7+(j.airborne?.04:0),U.flash=Math.max(0,U.flash-k),A.visible=U.flash>0,A.rotation.z=Math.random()*6,h.intensity=U.flash>0?3:0,C.rotation.x=.5-(U.cd>.12?.5:0),K.visible=!1,U.weapon===1&&U.trigger&&U.swap>=1){if(K.visible=!0,K.rotation.z=Math.random()*6,nt.position.x+=(Math.random()-.5)*.002,s.spray(!0),U.sprayT-=k,U.sprayT<=0){U.sprayT=.035;const Pt=bt();Pt?(U.lastP&&U.lastP.distanceTo(Pt.point)<.1?U.hold+=.035:(U.hold=0,U.dripLen=0),U.lastP=Pt.point.clone(),U.hold>.6&&Math.abs(Pt.normal.y)<.6&&(U.dripT-=.035,U.dripT<=0&&U.dripLen<.45&&(U.dripT=.12,U.dripLen+=.035,Rt.copy(Pt.point),Rt.y-=U.dripLen,Qt(Rt,Pt.normal,.1,.12,.55,!0)))):(U.lastP=null,U.hold=0)}}else U.weapon===1&&s.spray(!1);v(dt,k),v(Ft,k)},o.render=()=>{c.aspect=e.aspect,c.updateProjectionMatrix(),t.clearDepth(),t.render(l,c)},o.paint=Nt,o.vm=nt,o.vmScene=l,o.vmCam=c,o}const Gt=i=>document.querySelector(i),xs=new URLSearchParams(location.search),un=xs.get("touch")==="1"||"ontouchstart"in window||navigator.maxTouchPoints>0&&matchMedia("(pointer: coarse)").matches;un&&document.body.classList.add("touch"),un?(mc=document.querySelector(".keys .t"))==null||mc.classList.remove("hidden"):(gc=document.querySelector(".keys .t"))==null||gc.classList.add("hidden");const z={started:!1,paused:!1,cardOpen:!1,x:3.4,z:21.6,yaw:-.62,pitch:-.04,eyeY:3+gr,y:3,vy:0,grounded:!0,zone:"street",locked:!1,bob:0,sound:!1,zoneBtn:1},le={keys:{},mx:0,mz:0,lx:0,ly:0,run:!1};let ie=null,Va=0,tc=0,Ee,on,Ie,Ha=Gt("#stage"),ec=xs.get("fixed")==="1",hn=1,xr=1,vr="auto";async function nc(){vr=Gt("#q").value;const i=vr==="low"||xs.get("q")==="low";xr=Math.min(window.devicePixelRatio||1,un?1.5:2),hn=i?1:xr;try{Ee=new Qd({antialias:!i&&!un,powerPreference:"high-performance"})}catch{Gt("#go").textContent="WebGL недоступен";return}Ee.setPixelRatio(hn),Ee.outputColorSpace=Qe,Ee.toneMapping=4,Ee.toneMappingExposure=1,Ee.shadowMap.enabled=!1,Ee.autoClear=!1,Ee.info.autoReset=!1,Ha.appendChild(Ee.domElement),Hp(Math.min(Ee.capabilities.getMaxAnisotropy(),i?2:8)),on=new an(72,1,.05,160),on.rotation.order="YXZ",Ga(),vs(15),await o0(),vs(40),await new Promise(e=>setTimeout(e,30)),Ie=M0({low:i}),vs(90),Ie.redrawMural(),Ie.redrawDoor(),Ie.redrawSign(),ie=T0({renderer:Ee,camera:on,scene:Ie.scene,getWorld:()=>Ie,audio:Jn,state:z}),R0(),U0(),ja(1),Ee.render(Ie.scene,on),vs(100);const t=Gt("#go");t.disabled=!1,t.textContent="Зайти",Gt("#loadbar").classList.add("hidden"),requestAnimationFrame(pc),window.__tour=F0}function vs(i){const t=Gt("#loadbar i");t&&(t.style.width=i+"%")}function Ga(){const i=window.innerWidth,t=window.innerHeight;Ee.setSize(i,t,!0),on.aspect=i/t,on.fov=i/t<.9?82:72,on.updateProjectionMatrix()}addEventListener("resize",()=>{Ee&&Ga()}),addEventListener("orientationchange",()=>setTimeout(()=>Ee&&Ga(),250));function b0(i,t){for(const e of _0)if(i>=e[0]&&i<=e[1]&&t>=e[2]&&t<=e[3])return!0;return!1}function Wa(i,t){if(!b0(i,t))return!0;for(const e of x0)if(i>e[0]-ms&&i<e[1]+ms&&t>e[2]-ms&&t<e[3]+ms)return!0;return!1}function w0(i,t){return Wa(i,t)?Wa(i,z.z)?Wa(z.x,t)?!1:(z.z=t,!0):(z.x=i,!0):(z.x=i,z.z=t,!0)}const Ss={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};addEventListener("keydown",i=>{z.started&&(Ss[i.code]&&(le.keys[Ss[i.code]]=!0,i.preventDefault()),(i.code==="ShiftLeft"||i.code==="ShiftRight")&&(le.run=!0),i.code==="KeyE"&&!i.repeat&&(z.cardOpen?Ar():As()),i.code==="Escape"&&z.cardOpen&&Ar(),i.code==="Space"&&(i.preventDefault(),i.repeat||qa()),!z.cardOpen&&!z.paused&&!i.repeat&&ie&&(i.code==="KeyQ"&&ie.switchWeapon(),i.code==="KeyR"&&ie.reload(),i.code==="KeyC"&&ie.cycleColor(),i.code==="KeyX"&&ie.clear()),/^Digit[1-3]$/.test(i.code)&&!i.repeat&&Za(+i.code.slice(5)))}),addEventListener("keyup",i=>{Ss[i.code]&&(le.keys[Ss[i.code]]=!1),(i.code==="ShiftLeft"||i.code==="ShiftRight")&&(le.run=!1)}),addEventListener("blur",()=>{le.keys={},le.run=!1});function ic(i,t){z.yaw-=i*.0022,z.pitch=Math.max(-1.35,Math.min(1.35,z.pitch-t*.0022))}document.addEventListener("mousemove",i=>{z.locked&&ic(i.movementX,i.movementY)});let Yi=!1;function Ms(){if(!(un||z.locked||Yi)){Yi=!0,setTimeout(()=>{Yi=!1},800);try{const i=Ee.domElement.requestPointerLock();i&&i.catch&&i.catch(()=>{Yi=!1})}catch{Yi=!1}}}function Sr(){try{document.pointerLockElement&&document.exitPointerLock()}catch{}}document.addEventListener("pointerlockerror",()=>{Yi=!1}),addEventListener("blur",Sr),addEventListener("pagehide",Sr),addEventListener("beforeunload",Sr),document.addEventListener("visibilitychange",()=>{document.hidden&&Sr()}),document.addEventListener("click",i=>{i.target.closest&&i.target.closest("a[href]")&&Sr()},!0);let dn=null;Ha.addEventListener("pointerdown",i=>{!z.started||z.cardOpen||i.pointerType!=="mouse"||(z.locked?ie&&(i.button===0?Mr(!0):i.button===2&&ie.cycleColor()):(Ms(),dn={x:i.clientX,y:i.clientY,t:performance.now(),moved:0}))}),addEventListener("contextmenu",i=>{z.started&&i.preventDefault()}),addEventListener("wheel",i=>{if(!z.started||z.cardOpen||z.paused||!ie)return;const t=performance.now();t-tc<260||(tc=t,ie.switchWeapon())},{passive:!0});function Mr(i){ie&&(i&&(!z.started||z.paused||z.cardOpen)||ie.setTrigger(i))}function qa(){!z.started||z.paused||z.cardOpen||!z.grounded||(z.vy=4.3,z.grounded=!1)}const ys=(i,t,e)=>{const n=Gt(i);n.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation();try{n.setPointerCapture(r.pointerId)}catch{}t()}),e&&["pointerup","pointercancel"].forEach(r=>n.addEventListener(r,e))};ys("#btnJump",qa),ys("#btnFire",()=>Mr(!0),()=>Mr(!1)),ys("#btnSwap",()=>ie&&ie.switchWeapon()),ys("#btnRel",()=>ie&&ie.reload()),addEventListener("pointermove",i=>{dn&&i.pointerType==="mouse"&&!z.locked&&(ic(i.clientX-dn.x,i.clientY-dn.y),dn.moved+=Math.abs(i.clientX-dn.x)+Math.abs(i.clientY-dn.y),dn.x=i.clientX,dn.y=i.clientY)}),addEventListener("pointerup",i=>{i.pointerType==="mouse"&&i.button===0&&Mr(!1),dn&&dn.moved<6&&performance.now()-dn.t<300&&!z.locked&&As(),dn=null}),document.addEventListener("pointerlockchange",()=>{const i=z.locked;z.locked=document.pointerLockElement===Ee.domElement,z.locked||Mr(!1),i&&!z.locked&&z.started&&!z.cardOpen&&!un&&uc(!0)});function rc(i,t){const e=i.firstElementChild,n=44;let r=null,s=0,a=0;function o(c){let u=(c.clientX-s)/n,h=(c.clientY-a)/n;const f=Math.hypot(u,h);f>1&&(u/=f,h/=f),e.style.transform=`translate(${u*n}px,${h*n}px)`,t(u,h)}i.addEventListener("pointerdown",c=>{if(r!==null)return;r=c.pointerId;try{i.setPointerCapture(r)}catch{}const u=i.getBoundingClientRect();s=u.left+u.width/2,a=u.top+u.height/2,o(c),c.preventDefault()}),i.addEventListener("pointermove",c=>{c.pointerId===r&&o(c)});const l=c=>{c.pointerId===r&&(r=null,e.style.transform="",t(0,0))};i.addEventListener("pointerup",l),i.addEventListener("pointercancel",l)}rc(Gt("#stickL"),(i,t)=>{le.mx=i,le.mz=t}),rc(Gt("#stickR"),(i,t)=>{le.lx=i,le.ly=t}),Gt("#actBtn").addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),As()});let mi=null;const yr=new Map;function R0(){const i=Gt("#markers");Ie.hotspots.forEach((t,e)=>{const n=document.createElement("div");n.className="mk",n.textContent="+",n.style.display="none",n.addEventListener("pointerdown",r=>{r.stopPropagation()}),n.addEventListener("click",r=>{r.stopPropagation(),Ts(t)}),i.appendChild(n),yr.set(t,n)})}const Kn=new R,sc=new R;function C0(){on.getWorldDirection(sc);let i=null,t=0;const e=on.position;for(const a of Ie.hotspots){const o=yr.get(a);if(a.zone!==z.zone||a.disabled||z.cardOpen||!z.started){o.style.display="none";continue}Kn.copy(a.pos).sub(e);const l=Kn.length();Kn.divideScalar(l);const c=Kn.dot(sc),u=a.zone==="street"?14:6.5;Kn.copy(a.pos).project(on);const h=Kn.z<1&&l<u&&c>.2;if(h){o.style.display="flex";const p=(Kn.x*.5+.5)*innerWidth,g=(-Kn.y*.5+.5)*innerHeight;o.style.left=p+"px",o.style.top=g+"px",o.style.opacity=String(Math.max(.35,Math.min(1,1.5-l/u)))}else o.style.display="none";const f=a.zone==="street"?16:5.2;if(c>.93&&l<f&&h){const p=c-l*.01;p>t&&(t=p,i=a)}}mi=i,yr.forEach((a,o)=>a.classList.toggle("focus",o===mi));const n=Gt("#prompt"),r=Gt("#cross"),s=Gt("#actBtn");mi?(n.classList.add("on"),r.classList.add("on"),n.lastElementChild.textContent=(mi.pickup?" Взять: ":" Осмотреть: ")+mi.title,n.firstElementChild.textContent=un?"●":"E",s.classList.add("on")):(n.classList.remove("on"),r.classList.remove("on"),s.classList.remove("on"))}const ac="Здесь будет реальная запись: тот же фрагмент до и после сведения",Es={};let Bn=null;function P0(i){return Es[i]!==void 0?Promise.resolve(Es[i]):fetch("../assets/audio/"+i,{method:"HEAD"}).then(t=>Es[i]=t.ok).catch(()=>Es[i]=!1)}function Er(){if(Bn){try{Bn.pause()}catch{}Bn=null}const i=Gt("#playBtn");i&&(i.textContent="▶")}function L0(i){const t=Gt("#cardAudio");if(Er(),!i.audio){t.classList.add("hidden");return}const e=Gt("#playBtn"),n=Gt("#audioMsg");t.classList.remove("hidden"),e.classList.add("hidden"),n.textContent="Проверяю запись…",P0(i.audio).then(r=>{if(z.cardOpen){if(!r){n.textContent=ac;return}e.classList.remove("hidden"),n.textContent=i.audio.indexOf("before")>0?"Голос до обработки":"После сведения",e.onclick=()=>{if(Bn&&!Bn.paused){Er();return}Bn=new Audio("../assets/audio/"+i.audio),Bn.onended=Er,Bn.onerror=()=>{Er(),e.classList.add("hidden"),n.textContent=ac},Bn.play().then(()=>{e.textContent="⏸"}).catch(()=>{})}}})}function Xa(i,t){const e=Gt("#toast");e.innerHTML="<b></b><span></span>",e.firstChild.textContent=i,e.lastChild.textContent=t,e.classList.add("on"),clearTimeout(Xa._t),Xa._t=setTimeout(()=>e.classList.remove("on"),5500)}function oc(){if(!Ie||!ie||ie.S.hasRev)return!1;Ie.hideRevolverProp();const i=Ie.hotspots.find(t=>t.id==="revolver");if(i){i.disabled=!0;const t=yr.get(i);t&&(t.style.display="none")}return ie.giveRevolver(),Gt("#btnSwap").classList.remove("hidden"),Gt("#btnRel").classList.remove("hidden"),Xa("Револьвер подобран","ЛКМ — огонь · R — перезарядка · Q или колесо — сменить оружие"),!0}function As(){z.cardOpen||mi&&Ts(mi)}let lc=0;function Ts(i){if(i.pickup){oc();return}ie&&ie.setTrigger(!1),z.cardOpen=!0,lc=performance.now(),document.pointerLockElement&&document.exitPointerLock();const t=Gt("#cardImg");i.img?(t.classList.remove("hidden"),t.onerror=()=>{t.onerror=null,t.src="../assets/img/control-1.webp"},t.src=`../assets/img/${i.img}.webp`,t.alt=i.title):t.classList.add("hidden"),L0(i),Gt("#cardTitle").textContent=i.title,Gt("#cardText").textContent=i.text;const e=Gt("#cardBook");i.href?(e.classList.remove("hidden"),e.href=i.href):e.classList.add("hidden"),Gt("#card").classList.remove("hidden"),Gt("#shade").classList.remove("hidden"),le.keys={},le.mx=le.mz=le.lx=le.ly=0}function Ar(){z.cardOpen&&(Er(),z.cardOpen=!1,Gt("#card").classList.add("hidden"),Gt("#shade").classList.add("hidden"),un||Ms())}Gt("#cardClose").addEventListener("click",Ar),Gt("#shade").addEventListener("click",()=>{performance.now()-lc>450&&Ar()}),Ha.addEventListener("click",i=>{if(!un||!z.started||z.cardOpen)return;let t=null,e=80;yr.forEach((n,r)=>{if(n.style.display==="none")return;const s=parseFloat(n.style.left)-i.clientX,a=parseFloat(n.style.top)-i.clientY,o=Math.hypot(s,a);o<e&&(e=o,t=r)}),t&&Ts(t)});let Ya=!1;function ja(i,t){const e=Ql[i];z.x=e.x,z.z=e.z,z.yaw=e.yaw,z.pitch=e.pitch,z.y=gs(e.x,e.z),z.vy=0,z.grounded=!0,z.eyeY=z.y+gr,Ka(Ba(e.x,e.z),!0),z.zoneBtn=i,cc()}function Za(i){if(!Ql[i]||Ya)return;Ya=!0;const t=Gt("#fade");t.classList.add("on"),setTimeout(()=>{ja(i),setTimeout(()=>{t.classList.remove("on"),Ya=!1},120)},300)}document.querySelectorAll("#zones button").forEach(i=>i.addEventListener("click",()=>{Za(+i.dataset.z),i.blur()}));function cc(){const i={street:1,entry:1,hall:2,studio:3};document.querySelectorAll("#zones button").forEach(t=>t.classList.toggle("on",+t.dataset.z===i[z.zone]))}function Ka(i,t){const e=z.zone;z.zone=i,i==="studio"&&e!=="studio"&&z.started&&!z.endShown&&(z.endShown=!0,setTimeout(fc,1500)),Ie.setVisibility(i),ie&&ie.invalidate(),Ie.setZoneLights(i,t);const[n,r]=v0[i];Gt("#zoneName").textContent=n,Gt("#zoneSub").textContent=r,cc()}function fc(){!z.cardOpen&&!z.paused&&Gt("#endcard").classList.add("on")}Gt("#endClose").addEventListener("click",()=>Gt("#endcard").classList.remove("on"));function uc(i){Gt("#pause").classList.toggle("hidden",!i),z.paused=i}Gt("#resume").addEventListener("click",()=>{uc(!1),un||Ms()}),Gt("#go").addEventListener("click",()=>{if(!Ie)return;Gt("#splash").classList.add("hidden"),Gt("#hud").classList.remove("hidden"),un&&Gt("#touch").classList.remove("hidden"),z.started=!0,document.body.classList.add("started"),setTimeout(()=>document.body.classList.remove("started"),6e3),un||Ms(),xs.get("fs")==="1"&&document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(()=>{})});let Vt=null,Tr=null,ji=null,hc=0;function D0(){if(!Vt)try{Vt=new(window.AudioContext||window.webkitAudioContext);const i=Vt.sampleRate*2,t=Vt.createBuffer(1,i,Vt.sampleRate),e=t.getChannelData(0);let n=0;for(let o=0;o<i;o++){const l=Math.random()*2-1;n=(n+.02*l)/1.02,e[o]=n*3.5}const r=Vt.createBufferSource();r.buffer=t,r.loop=!0,ji=Vt.createBiquadFilter(),ji.type="lowpass",ji.frequency.value=220,Tr=Vt.createGain(),Tr.gain.value=0,r.connect(ji).connect(Tr).connect(Vt.destination),r.start();const s=Vt.createOscillator();s.frequency.value=50;const a=Vt.createGain();a.gain.value=.015,s.connect(a).connect(Vt.destination),s.start()}catch{Vt=null}}function I0(){if(!Vt||!z.sound)return;const i=Vt.currentTime,t=Vt.createOscillator(),e=Vt.createGain();t.type="triangle",t.frequency.setValueAtTime(110+Math.random()*30,i),t.frequency.exponentialRampToValueAtTime(40,i+.08),e.gain.setValueAtTime(.12,i),e.gain.exponentialRampToValueAtTime(.001,i+.1),t.connect(e).connect(Vt.destination),t.start(i),t.stop(i+.12)}const Jn={shot(){if(!z.sound||!Vt)return;const i=Vt.currentTime,t=Math.floor(Vt.sampleRate*.25),e=Vt.createBuffer(1,t,Vt.sampleRate),n=e.getChannelData(0);for(let p=0;p<t;p++)n[p]=(Math.random()*2-1)*Math.pow(1-p/t,3);const r=Vt.createBufferSource();r.buffer=e;const s=Vt.createBiquadFilter();s.type="bandpass",s.frequency.value=1800,s.Q.value=.6;const a=Vt.createGain();a.gain.value=.7;const o=Vt.createOscillator();o.type="sine",o.frequency.setValueAtTime(150,i),o.frequency.exponentialRampToValueAtTime(40,i+.25);const l=Vt.createGain();l.gain.setValueAtTime(.9,i),l.gain.exponentialRampToValueAtTime(.001,i+.3);const c=Vt.createDelay();c.delayTime.value=.13;const u=Vt.createGain();u.gain.value=.35;const h=Vt.createBiquadFilter();h.type="lowpass",h.frequency.value=1500;const f=Vt.createGain();f.gain.value=.6,f.connect(Vt.destination),r.connect(s).connect(a).connect(f),o.connect(l).connect(f),a.connect(c),l.connect(c),c.connect(h).connect(u).connect(c),h.connect(Vt.destination),r.start(i),o.start(i),o.stop(i+.35)},click(){if(!z.sound||!Vt)return;const i=Vt.currentTime,t=Vt.createOscillator(),e=Vt.createGain();t.type="square",t.frequency.value=1400,e.gain.setValueAtTime(.08,i),e.gain.exponentialRampToValueAtTime(.001,i+.04),t.connect(e).connect(Vt.destination),t.start(i),t.stop(i+.05)},spray(i){if((!Vt||!z.sound)&&(i=!1),i){if(!Jn._g){const t=Vt.sampleRate,e=Vt.createBuffer(1,t,Vt.sampleRate),n=e.getChannelData(0);for(let a=0;a<t;a++)n[a]=Math.random()*2-1;const r=Vt.createBufferSource();r.buffer=e,r.loop=!0;const s=Vt.createBiquadFilter();s.type="highpass",s.frequency.value=3500,Jn._g=Vt.createGain(),Jn._g.gain.value=0,r.connect(s).connect(Jn._g).connect(Vt.destination),r.start()}Jn._g.gain.setTargetAtTime(.12,Vt.currentTime,.02)}else Jn._g&&Jn._g.gain.setTargetAtTime(0,Vt.currentTime,.03)}};Gt("#snd").addEventListener("click",()=>{z.sound=!z.sound,Gt("#snd").textContent=z.sound?"🔊":"🔇",z.sound&&(D0(),Vt&&Vt.state==="suspended"&&Vt.resume()),Tr&&(Tr.gain.value=z.sound?.06:0)});const br=Gt("#minimap"),Be=br.getContext("2d"),bs={x0:-4.2,z0:-1.6,s:11.4};let wr=null;function ws(i,t){return[(i-bs.x0)*bs.s,(t-bs.z0)*bs.s]}function U0(){wr=document.createElement("canvas"),wr.width=br.width,wr.height=br.height;const i=wr.getContext("2d");i.fillStyle="rgba(8,10,16,.9)",i.fillRect(0,0,br.width,br.height);const t=(e,n,r,s,a,o)=>{const[l,c]=ws(e,n),[u,h]=ws(r,s);i.fillStyle=a,i.fillRect(l,c,u-l,h-c),o&&(i.strokeStyle=o,i.lineWidth=2,i.strokeRect(l,c,u-l,h-c))};t(2.8,5.6,8.6,16,"rgba(70,74,92,.5)",null),t(-2,5.6,2.8,7.1,"rgba(120,120,130,.6)","#8a8f9a"),t(-3.4,5.6,-2,7.1,"rgba(120,120,130,.45)","#8a8f9a"),t(-3.4,2.2,-.2,5.4,"rgba(150,60,200,.55)","#c070ff"),t(0,0,6,5,"rgba(40,150,70,.55)","#35e06b"),t(6,-1,9,5,"rgba(60,100,220,.55)","#6a95ff"),i.fillStyle="#fff",i.font="600 15px Manrope, Arial, sans-serif",i.textAlign="center",[["ул.",5.8,11],["зал",3,2.7],["звук",7.5,2],["тамб.",-1.8,3.8]].forEach(([e,n,r])=>{const[s,a]=ws(n,r);i.fillText(e,s,a)})}function N0(){Be.drawImage(wr,0,0);const[i,t]=ws(z.x,z.z);Be.save(),Be.translate(i,t),Be.rotate(-z.yaw),Be.fillStyle="rgba(255,59,48,.25)",Be.beginPath(),Be.moveTo(0,0),Be.arc(0,0,40,-Math.PI/2-.6,-Math.PI/2+.6),Be.fill(),Be.fillStyle="#ff3b30",Be.strokeStyle="#fff",Be.lineWidth=2,Be.beginPath(),Be.moveTo(0,-9),Be.lineTo(7,8),Be.lineTo(-7,8),Be.closePath(),Be.fill(),Be.stroke(),Be.restore()}let dc=performance.now(),Ja=0,Qa=0,Rs=0,Cs=0;function pc(i){requestAnimationFrame(pc);let t=(i-dc)/1e3;if(dc=i,t>.1&&(t=.1),z.started&&!z.paused&&!z.cardOpen){un&&(le.lx||le.ly)&&(z.yaw-=le.lx*t*2.4,z.pitch=Math.max(-1.3,Math.min(1.3,z.pitch-le.ly*t*1.7)));let s=0,a=0;le.keys.f&&(a-=1),le.keys.b&&(a+=1),le.keys.l&&(s-=1),le.keys.r&&(s+=1),s+=le.mx,a+=le.mz;const o=Math.min(1,Math.hypot(s,a));if(Va=o*(le.run?1.5:1),o>.05){const l=(le.run?4.4:2.5)*o*t,c=Math.hypot(s,a);s/=c,a/=c;const u=Math.sin(z.yaw),h=Math.cos(z.yaw),f=(s*h+a*u)*l,p=(-s*u+a*h)*l,g=z.x,_=z.z;w0(z.x+f,z.z+p);const m=Math.hypot(z.x-g,z.z-_);z.bob+=m*5.2,m>0&&z.bob-hc>2.6&&(hc=z.bob,I0())}}z.started&&!z.paused&&!z.cardOpen&&(le.keys.f||le.keys.b||le.keys.l||le.keys.r||le.mx||le.mz)||(Va=0);const e=gs(z.x,z.z);if(z.grounded&&(e<z.y-.3?(z.grounded=!1,z.vy=0):z.y=e),!z.grounded){z.vy-=13*t,z.y+=z.vy*t;const a=(z.z>=5.5&&z.x>-.8?99:2.8)-.12-gr;z.y>a&&(z.y=a,z.vy>0&&(z.vy=0)),z.y<=e&&(z.y=e,z.vy=0,z.grounded=!0)}const n=z.y+gr;z.eyeY=z.grounded?z.eyeY+(n-z.eyeY)*Math.min(1,t*14):n;const r=Ba(z.x,z.z);if(r!==z.zone&&Ka(r,!1),Ie&&Ie.update(t,z.x,z.z,z.zone),on.position.set(z.x,z.eyeY+Math.sin(z.bob)*.018,z.z),on.rotation.set(z.pitch,z.yaw,0),on.updateMatrixWorld(),Ie&&(C0(),ie&&ie.update(t,{speed:Va,airborne:!z.grounded,vy:z.vy}),Ee.clear(),Ee.info.reset(),Ee.render(Ie.scene,on),ie&&z.started&&ie.render()),Ja+=t,Ja>.066&&(Ja=0,N0()),ji&&(ji.frequency.value=z.zone==="street"?700:260),vr==="auto"&&!ec&&z.started&&(Qa+=t,Rs++,Cs-=t,Rs>=45)){const s=Qa/Rs;Qa=0,Rs=0,Cs<=0&&(s>.026&&hn>.6?(hn=Math.max(.6,hn-.15),Ee.setPixelRatio(hn),Cs=1.5):s<.0155&&hn<xr&&(hn=Math.min(xr,hn+.1),Ee.setPixelRatio(hn),Cs=3))}}Gt("#q").addEventListener("change",()=>{vr=Gt("#q").value,Ee&&(hn=vr==="low"?1:xr,Ee.setPixelRatio(hn))});const F0={teleport:i=>{ja(i)},teleportFade:Za,setView:(i,t,e,n)=>{z.x=i,z.z=t,z.yaw=e,z.pitch=n,z.y=gs(i,t),z.vy=0,z.grounded=!0,z.eyeY=z.y+gr,Ka(Ba(i,t),!0)},start:()=>Gt("#go").click(),state:z,input:le,get world(){return Ie},info:()=>({calls:Ee.info.render.calls,tris:Ee.info.render.triangles,tex:Ee.info.memory.textures,geo:Ee.info.memory.geometries,pr:hn}),fire:()=>ie.fire(),switchWeapon:i=>ie.switchWeapon(i),setColor:i=>ie.cycleColor(i),clearAll:()=>ie.clear(),counts:()=>ie.counts(),sprayAt:(i,t,e,n,r,s,a)=>{const o=R;return i===void 0?ie.sprayAt(void 0,void 0,1):ie.sprayAt(new o(i,t,e),new o(n,r,s).normalize(),a||1)},fireAt:(i,t,e,n,r,s)=>{const a=R;return ie.S.cd=0,ie.S.weapon!==0&&ie.switchWeapon(0),ie.fire(new a(i,t,e),new a(n,r,s).normalize())},get weapons(){return ie},jump:qa,showEnd:fc,pickRevolver:oc,interact:As,closeCard:Ar,hotspots:()=>Ie.hotspots.map(i=>i.id),open:i=>Ts(Ie.hotspots.find(t=>t.id===i)),fixed:()=>{ec=!0}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",nc):nc()})();
