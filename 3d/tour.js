(function(){"use strict";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var oc,lc;const Ps="170",Ln="",Ke="srgb",xi="srgb-linear",Rr="linear",Me="srgb",Ya="300 es";class vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,Us=180/Math.PI;function Un(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function uc(i,t){return(i%t+t)%t}function Ds(i,t,e){return(1-e)*i+e*t}function En(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,r,s,a,l,o,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,l,o,c)}set(t,e,n,r,s,a,l,o,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=l,h[3]=e,h[4]=s,h[5]=o,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],l=n[3],o=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],g=n[8],x=r[0],m=r[3],d=r[6],M=r[1],b=r[4],v=r[7],O=r[2],w=r[5],C=r[8];return s[0]=a*x+l*M+o*O,s[3]=a*m+l*b+o*w,s[6]=a*d+l*v+o*C,s[1]=c*x+h*M+f*O,s[4]=c*m+h*b+f*w,s[7]=c*d+h*v+f*C,s[2]=u*x+p*M+g*O,s[5]=u*m+p*b+g*w,s[8]=u*d+p*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],o=t[6],c=t[7],h=t[8];return e*a*h-e*l*c-n*s*h+n*l*o+r*s*c-r*a*o}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],o=t[6],c=t[7],h=t[8],f=h*a-l*c,u=l*o-h*s,p=c*s-a*o,g=e*f+n*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(r*c-h*n)*x,t[2]=(l*n-r*a)*x,t[3]=u*x,t[4]=(h*e-r*o)*x,t[5]=(r*s-l*e)*x,t[6]=p*x,t[7]=(n*o-c*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,l){const o=Math.cos(s),c=Math.sin(s);return this.set(n*o,n*c,-n*(o*a+c*l)+a+t,-r*c,r*o,-r*(-c*a+o*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(Is.makeScale(t,e)),this}rotate(t){return this.premultiply(Is.makeRotation(-t)),this}translate(t,e){return this.premultiply(Is.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Is=new Yt;function Ka(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fc(){const i=Cr("canvas");return i.style.display="block",i}const Qa={};function Ji(i){i in Qa||(Qa[i]=!0,console.warn(i))}function hc(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function dc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const he={enabled:!0,workingColorSpace:xi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Me&&(i.r=Dn(i.r),i.g=Dn(i.g),i.b=Dn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Me&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ln?Rr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const $a=[.64,.33,.3,.6,.15,.06],to=[.2126,.7152,.0722],eo=[.3127,.329],no=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),io=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[xi]:{primaries:$a,whitePoint:eo,transfer:Rr,toXYZ:no,fromXYZ:io,luminanceCoefficients:to,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:$a,whitePoint:eo,transfer:Me,toXYZ:no,fromXYZ:io,luminanceCoefficients:to,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}});let _i;class mc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Cr("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Dn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gc=0;class ro{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(Ns(r[a].image)):s.push(Ns(r[a]))}else s=Ns(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xc=0;class We extends vi{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,l=1023,o=1009,c=We.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=Un(),this.name="",this.source=new ro(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null,We.DEFAULT_MAPPING=300,We.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,n=0,r=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const o=t.elements,c=o[0],h=o[4],f=o[8],u=o[1],p=o[5],g=o[9],x=o[2],m=o[6],d=o[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,v=(p+1)/2,O=(d+1)/2,w=(h+u)/4,C=(f+x)/4,U=(g+m)/4;return b>v&&b>O?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=w/n,s=C/n):v>O?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=U/r):O<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),n=C/s,r=U/s),this.set(n,r,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vc extends vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new We(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ro(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends vc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class so extends We{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sc extends We{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,l){let o=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3];const u=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(l===0){t[e+0]=o,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(l===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(f!==x||o!==u||c!==p||h!==g){let m=1-l;const d=o*u+c*p+h*g+f*x,M=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const O=Math.sqrt(b),w=Math.atan2(O,d*M);m=Math.sin(m*w)/O,l=Math.sin(l*w)/O}const v=l*M;if(o=o*m+u*v,c=c*m+p*v,h=h*m+g*v,f=f*m+x*v,m===1-l){const O=1/Math.sqrt(o*o+c*c+h*h+f*f);o*=O,c*=O,h*=O,f*=O}}t[e]=o,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const l=n[r],o=n[r+1],c=n[r+2],h=n[r+3],f=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return t[e]=l*g+h*f+o*p-c*u,t[e+1]=o*g+h*u+c*f-l*p,t[e+2]=c*g+h*p+l*u-o*f,t[e+3]=h*g-l*f-o*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,l=Math.cos,o=Math.sin,c=l(n/2),h=l(r/2),f=l(s/2),u=o(n/2),p=o(r/2),g=o(s/2);switch(a){case"XYZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"YZX":this._x=u*h*f+c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f-u*p*g;break;case"XZY":this._x=u*h*f-c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],l=e[5],o=e[9],c=e[2],h=e[6],f=e[10],u=n+l+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-o)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>l&&n>f){const p=2*Math.sqrt(1+n-l-f);this._w=(h-o)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(l>f){const p=2*Math.sqrt(1+l-n-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(o+h)/p}else{const p=2*Math.sqrt(1+f-n-l);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(o+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,l=e._x,o=e._y,c=e._z,h=e._w;return this._x=n*h+a*l+r*c-s*o,this._y=r*h+a*o+s*l-n*c,this._z=s*h+a*c+n*o-r*l,this._w=a*h-n*l-r*o-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let l=a*t._w+n*t._x+r*t._y+s*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const o=1-l*l;if(o<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(o),h=Math.atan2(c,l),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ao.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ao.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,l=t.z,o=t.w,c=2*(a*r-l*n),h=2*(l*e-s*r),f=2*(s*n-a*e);return this.x=e+o*c+a*f-l*h,this.y=n+o*h+l*c-s*f,this.z=r+o*f+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,l=e.y,o=e.z;return this.x=r*o-s*l,this.y=s*a-n*o,this.z=n*l-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fs.copy(this).projectOnVector(t),this.sub(Fs)}reflect(t){return this.sub(Fs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fs=new R,ao=new Yi;class ii{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(s,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ki),Lr.subVectors(this.max,Ki),yi.subVectors(t.a,Ki),Mi.subVectors(t.b,Ki),bi.subVectors(t.c,Ki),Wn.subVectors(Mi,yi),Gn.subVectors(bi,Mi),ri.subVectors(yi,bi);let e=[0,-Wn.z,Wn.y,0,-Gn.z,Gn.y,0,-ri.z,ri.y,Wn.z,0,-Wn.x,Gn.z,0,-Gn.x,ri.z,0,-ri.x,-Wn.y,Wn.x,0,-Gn.y,Gn.x,0,-ri.y,ri.x,0];return!Os(e,yi,Mi,bi,Lr)||(e=[1,0,0,0,1,0,0,0,1],!Os(e,yi,Mi,bi,Lr))?!1:(Ur.crossVectors(Wn,Gn),e=[Ur.x,Ur.y,Ur.z],Os(e,yi,Mi,bi,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new R,new R,new R,new R,new R,new R,new R,new R],vn=new R,Pr=new ii,yi=new R,Mi=new R,bi=new R,Wn=new R,Gn=new R,ri=new R,Ki=new R,Lr=new R,Ur=new R,si=new R;function Os(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){si.fromArray(i,s);const l=r.x*Math.abs(si.x)+r.y*Math.abs(si.y)+r.z*Math.abs(si.z),o=t.dot(si),c=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(o,c,h),Math.min(o,c,h))>l)return!1}return!0}const _c=new ii,Qi=new R,zs=new R;class Ti{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_c.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);const e=Qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Qi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(zs)),this.expandByPoint(Qi.copy(t.center).sub(zs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new R,ks=new R,Dr=new R,Xn=new R,Bs=new R,Ir=new R,Vs=new R;class Hs{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ks.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(ks);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Dr),l=Xn.dot(this.direction),o=-Xn.dot(Dr),c=Xn.lengthSq(),h=Math.abs(1-a*a);let f,u,p,g;if(h>0)if(f=a*o-l,u=a*l-o,g=s*h,f>=0)if(u>=-g)if(u<=g){const x=1/h;f*=x,u*=x,p=f*(f+a*u+2*l)+u*(a*f+u+2*o)+c}else u=s,f=Math.max(0,-(a*u+l)),p=-f*f+u*(u+2*o)+c;else u=-s,f=Math.max(0,-(a*u+l)),p=-f*f+u*(u+2*o)+c;else u<=-g?(f=Math.max(0,-(-a*s+l)),u=f>0?-s:Math.min(Math.max(-s,-o),s),p=-f*f+u*(u+2*o)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-o),s),p=u*(u+2*o)+c):(f=Math.max(0,-(a*s+l)),u=f>0?s:Math.min(Math.max(-s,-o),s),p=-f*f+u*(u+2*o)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+l)),p=-f*f+u*(u+2*o)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ks).addScaledVector(Dr,u),p}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,l,o;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,r=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,r=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(l=(t.min.z-u.z)*f,o=(t.max.z-u.z)*f):(l=(t.max.z-u.z)*f,o=(t.min.z-u.z)*f),n>o||l>r)||((l>n||n!==n)&&(n=l),(o<r||r!==r)&&(r=o),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,r,s){Bs.subVectors(e,t),Ir.subVectors(n,t),Vs.crossVectors(Bs,Ir);let a=this.direction.dot(Vs),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Xn.subVectors(this.origin,t);const o=l*this.direction.dot(Ir.crossVectors(Xn,Ir));if(o<0)return null;const c=l*this.direction.dot(Bs.cross(Xn));if(c<0||o+c>a)return null;const h=-l*Xn.dot(Vs);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,e,n,r,s,a,l,o,c,h,f,u,p,g,x,m){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,l,o,c,h,f,u,p,g,x,m)}set(t,e,n,r,s,a,l,o,c,h,f,u,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=l,d[13]=o,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ai.setFromMatrixColumn(t,0).length(),s=1/Ai.setFromMatrixColumn(t,1).length(),a=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=a*h,p=a*f,g=l*h,x=l*f;e[0]=o*h,e[4]=-o*f,e[8]=c,e[1]=p+g*c,e[5]=u-x*c,e[9]=-l*o,e[2]=x-u*c,e[6]=g+p*c,e[10]=a*o}else if(t.order==="YXZ"){const u=o*h,p=o*f,g=c*h,x=c*f;e[0]=u+x*l,e[4]=g*l-p,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-l,e[2]=p*l-g,e[6]=x+u*l,e[10]=a*o}else if(t.order==="ZXY"){const u=o*h,p=o*f,g=c*h,x=c*f;e[0]=u-x*l,e[4]=-a*f,e[8]=g+p*l,e[1]=p+g*l,e[5]=a*h,e[9]=x-u*l,e[2]=-a*c,e[6]=l,e[10]=a*o}else if(t.order==="ZYX"){const u=a*h,p=a*f,g=l*h,x=l*f;e[0]=o*h,e[4]=g*c-p,e[8]=u*c+x,e[1]=o*f,e[5]=x*c+u,e[9]=p*c-g,e[2]=-c,e[6]=l*o,e[10]=a*o}else if(t.order==="YZX"){const u=a*o,p=a*c,g=l*o,x=l*c;e[0]=o*h,e[4]=x-u*f,e[8]=g*f+p,e[1]=f,e[5]=a*h,e[9]=-l*h,e[2]=-c*h,e[6]=p*f+g,e[10]=u-x*f}else if(t.order==="XZY"){const u=a*o,p=a*c,g=l*o,x=l*c;e[0]=o*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=a*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=l*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yc,t,Mc)}lookAt(t,e,n){const r=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),qn.crossVectors(n,sn),qn.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),qn.crossVectors(n,sn)),qn.normalize(),Nr.crossVectors(sn,qn),r[0]=qn.x,r[4]=Nr.x,r[8]=sn.x,r[1]=qn.y,r[5]=Nr.y,r[9]=sn.y,r[2]=qn.z,r[6]=Nr.z,r[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],l=n[4],o=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],M=n[3],b=n[7],v=n[11],O=n[15],w=r[0],C=r[4],U=r[8],T=r[12],_=r[1],L=r[5],X=r[9],B=r[13],Y=r[2],nt=r[6],K=r[10],D=r[14],j=r[3],xt=r[7],Et=r[11],Nt=r[15];return s[0]=a*w+l*_+o*Y+c*j,s[4]=a*C+l*L+o*nt+c*xt,s[8]=a*U+l*X+o*K+c*Et,s[12]=a*T+l*B+o*D+c*Nt,s[1]=h*w+f*_+u*Y+p*j,s[5]=h*C+f*L+u*nt+p*xt,s[9]=h*U+f*X+u*K+p*Et,s[13]=h*T+f*B+u*D+p*Nt,s[2]=g*w+x*_+m*Y+d*j,s[6]=g*C+x*L+m*nt+d*xt,s[10]=g*U+x*X+m*K+d*Et,s[14]=g*T+x*B+m*D+d*Nt,s[3]=M*w+b*_+v*Y+O*j,s[7]=M*C+b*L+v*nt+O*xt,s[11]=M*U+b*X+v*K+O*Et,s[15]=M*T+b*B+v*D+O*Nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],l=t[5],o=t[9],c=t[13],h=t[2],f=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+s*o*f-r*c*f-s*l*u+n*c*u+r*l*p-n*o*p)+x*(+e*o*p-e*c*u+s*a*u-r*a*p+r*c*h-s*o*h)+m*(+e*c*f-e*l*p-s*a*f+n*a*p+s*l*h-n*c*h)+d*(-r*l*h-e*o*f+e*l*u+r*a*f-n*a*u+n*o*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],o=t[6],c=t[7],h=t[8],f=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],M=f*m*c-x*u*c+x*o*p-l*m*p-f*o*d+l*u*d,b=g*u*c-h*m*c-g*o*p+a*m*p+h*o*d-a*u*d,v=h*x*c-g*f*c+g*l*p-a*x*p-h*l*d+a*f*d,O=g*f*o-h*x*o-g*l*u+a*x*u+h*l*m-a*f*m,w=e*M+n*b+r*v+s*O;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=M*C,t[1]=(x*u*s-f*m*s-x*r*p+n*m*p+f*r*d-n*u*d)*C,t[2]=(l*m*s-x*o*s+x*r*c-n*m*c-l*r*d+n*o*d)*C,t[3]=(f*o*s-l*u*s-f*r*c+n*u*c+l*r*p-n*o*p)*C,t[4]=b*C,t[5]=(h*m*s-g*u*s+g*r*p-e*m*p-h*r*d+e*u*d)*C,t[6]=(g*o*s-a*m*s-g*r*c+e*m*c+a*r*d-e*o*d)*C,t[7]=(a*u*s-h*o*s+h*r*c-e*u*c-a*r*p+e*o*p)*C,t[8]=v*C,t[9]=(g*f*s-h*x*s-g*n*p+e*x*p+h*n*d-e*f*d)*C,t[10]=(a*x*s-g*l*s+g*n*c-e*x*c-a*n*d+e*l*d)*C,t[11]=(h*l*s-a*f*s-h*n*c+e*f*c+a*n*p-e*l*p)*C,t[12]=O*C,t[13]=(h*x*r-g*f*r+g*n*u-e*x*u-h*n*m+e*f*m)*C,t[14]=(g*l*r-a*x*r-g*n*o+e*x*o+a*n*m-e*l*m)*C,t[15]=(a*f*r-h*l*r+h*n*o-e*f*o-a*n*u+e*l*u)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,l=t.y,o=t.z,c=s*a,h=s*l;return this.set(c*a+n,c*l-r*o,c*o+r*l,0,c*l+r*o,h*l+n,h*o-r*a,0,c*o-r*l,h*o+r*a,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,l=e._z,o=e._w,c=s+s,h=a+a,f=l+l,u=s*c,p=s*h,g=s*f,x=a*h,m=a*f,d=l*f,M=o*c,b=o*h,v=o*f,O=n.x,w=n.y,C=n.z;return r[0]=(1-(x+d))*O,r[1]=(p+v)*O,r[2]=(g-b)*O,r[3]=0,r[4]=(p-v)*w,r[5]=(1-(u+d))*w,r[6]=(m+M)*w,r[7]=0,r[8]=(g+b)*C,r[9]=(m-M)*C,r[10]=(1-(u+x))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ai.set(r[0],r[1],r[2]).length();const a=Ai.set(r[4],r[5],r[6]).length(),l=Ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Sn.copy(this);const c=1/s,h=1/a,f=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,e.setFromRotationMatrix(Sn),n.x=s,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,a,l=2e3){const o=this.elements,c=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),u=(n+r)/(n-r);let p,g;if(l===2e3)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(l===2001)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=c,o[4]=0,o[8]=f,o[12]=0,o[1]=0,o[5]=h,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,r,s,a,l=2e3){const o=this.elements,c=1/(e-t),h=1/(n-r),f=1/(a-s),u=(e+t)*c,p=(n+r)*h;let g,x;if(l===2e3)g=(a+s)*f,x=-2*f;else if(l===2001)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-p,o[2]=0,o[6]=0,o[10]=x,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ai=new R,Sn=new Se,yc=new R(0,0,0),Mc=new R(1,1,1),qn=new R,Nr=new R,sn=new R,oo=new Se,lo=new Yi;class _n{constructor(t=0,e=0,n=0,r=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],l=r[8],o=r[1],c=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lo.setFromEuler(this),this.setFromQuaternion(lo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Ws{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bc=0;const co=new R,Ei=new Yi,Fn=new Se,Fr=new R,$i=new R,Tc=new R,Ac=new Yi,uo=new R(1,0,0),fo=new R(0,1,0),ho=new R(0,0,1),po={type:"added"},Ec={type:"removed"},wi={type:"childadded",child:null},Gs={type:"childremoved",child:null};class Ne extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new R,e=new _n,n=new Yi,r=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Se},normalMatrix:{value:new Yt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(uo,t)}rotateY(t){return this.rotateOnAxis(fo,t)}rotateZ(t){return this.rotateOnAxis(ho,t)}translateOnAxis(t,e){return co.copy(t).applyQuaternion(this.quaternion),this.position.add(co.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uo,t)}translateY(t){return this.translateOnAxis(fo,t)}translateZ(t){return this.translateOnAxis(ho,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt($i,Fr,this.up):Fn.lookAt(Fr,$i,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),Ei.setFromRotationMatrix(Fn),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(po),wi.child=t,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ec),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(po),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,t,Tc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Ac,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let c=0,h=o.length;c<h;c++){const f=o[c];s(t.shapes,f)}else s(t.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(s(t.materials,this.material[o]));r.material=l}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];r.animations.push(s(t.animations,o))}}if(e){const l=a(t.geometries),o=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(l){const o=[];for(const c in l){const h=l[c];delete h.metadata,o.push(h)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ne.DEFAULT_UP=new R(0,1,0),Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new R,On=new R,Xs=new R,zn=new R,Ri=new R,Ci=new R,mo=new R,qs=new R,js=new R,Zs=new R,Js=new Te,Ys=new Te,Ks=new Te;class mn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),yn.subVectors(t,e),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){yn.subVectors(r,e),On.subVectors(n,e),Xs.subVectors(t,e);const a=yn.dot(yn),l=yn.dot(On),o=yn.dot(Xs),c=On.dot(On),h=On.dot(Xs),f=a*c-l*l;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*o-l*h)*u,g=(a*h-l*o)*u;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,r,s,a,l,o){return this.getBarycoord(t,e,n,r,zn)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,zn.x),o.addScaledVector(a,zn.y),o.addScaledVector(l,zn.z),o)}static getInterpolatedAttribute(t,e,n,r,s,a){return Js.setScalar(0),Ys.setScalar(0),Ks.setScalar(0),Js.fromBufferAttribute(t,e),Ys.fromBufferAttribute(t,n),Ks.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Js,s.x),a.addScaledVector(Ys,s.y),a.addScaledVector(Ks,s.z),a}static isFrontFacing(t,e,n,r){return yn.subVectors(n,e),On.subVectors(t,e),yn.cross(On).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),yn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,l;Ri.subVectors(r,n),Ci.subVectors(s,n),qs.subVectors(t,n);const o=Ri.dot(qs),c=Ci.dot(qs);if(o<=0&&c<=0)return e.copy(n);js.subVectors(t,r);const h=Ri.dot(js),f=Ci.dot(js);if(h>=0&&f<=h)return e.copy(r);const u=o*f-h*c;if(u<=0&&o>=0&&h<=0)return a=o/(o-h),e.copy(n).addScaledVector(Ri,a);Zs.subVectors(t,s);const p=Ri.dot(Zs),g=Ci.dot(Zs);if(g>=0&&p<=g)return e.copy(s);const x=p*c-o*g;if(x<=0&&c>=0&&g<=0)return l=c/(c-g),e.copy(n).addScaledVector(Ci,l);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return mo.subVectors(s,r),l=(f-h)/(f-h+(p-g)),e.copy(r).addScaledVector(mo,l);const d=1/(m+x+u);return a=x*d,l=u*d,e.copy(n).addScaledVector(Ri,a).addScaledVector(Ci,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Or={h:0,s:0,l:0};function Qs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=he.workingColorSpace){if(t=uc(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Qs(a,s,t+1/3),this.g=Qs(a,s,t),this.b=Qs(a,s,t-1/3)}return he.toWorkingColorSpace(this,r),this}setStyle(t,e=Ke){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=go[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return he.fromWorkingColorSpace(qe.copy(this),t),Math.round(Xe(qe.r*255,0,255))*65536+Math.round(Xe(qe.g*255,0,255))*256+Math.round(Xe(qe.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,r=qe.g,s=qe.b,a=Math.max(n,r,s),l=Math.min(n,r,s);let o,c;const h=(l+a)/2;if(l===a)o=0,c=0;else{const f=a-l;switch(c=h<=.5?f/(a+l):f/(2-a-l),a){case n:o=(r-s)/f+(r<s?6:0);break;case r:o=(s-n)/f+2;break;case s:o=(n-r)/f+4;break}o/=6}return t.h=o,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ke){he.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,r=qe.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Or);const n=Ds(jn.h,Or.h,e),r=Ds(jn.s,Or.s,e),s=Ds(jn.l,Or.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Kt;Kt.NAMES=go;let wc=0;class Zn extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=Un(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const l in s){const o=s[l];delete o.metadata,a.push(o)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wn extends Zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new R,zr=new Tt;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=En(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=En(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=En(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=En(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),r=be(r,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class xo extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vo extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rc=0;const gn=new Se,$s=new Ne,Pi=new R,an=new ii,tr=new ii,He=new R;class je extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ka(t)?vo:xo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return $s.lookAt(t),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ce(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const l=e[s];tr.setFromBufferAttribute(l),this.morphTargetsRelative?(He.addVectors(an.min,tr.min),an.expandByPoint(He),He.addVectors(an.max,tr.max),an.expandByPoint(He)):(an.expandByPoint(tr.min),an.expandByPoint(tr.max))}an.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)He.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(He));if(e)for(let s=0,a=e.length;s<a;s++){const l=e[s],o=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)He.fromBufferAttribute(l,c),o&&(Pi.fromBufferAttribute(t,c),He.add(Pi)),r=Math.max(r,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],o=[];for(let U=0;U<n.count;U++)l[U]=new R,o[U]=new R;const c=new R,h=new R,f=new R,u=new Tt,p=new Tt,g=new Tt,x=new R,m=new R;function d(U,T,_){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,_),u.fromBufferAttribute(s,U),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,_),h.sub(c),f.sub(c),p.sub(u),g.sub(u);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),l[U].add(x),l[T].add(x),l[_].add(x),o[U].add(m),o[T].add(m),o[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let U=0,T=M.length;U<T;++U){const _=M[U],L=_.start,X=_.count;for(let B=L,Y=L+X;B<Y;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const b=new R,v=new R,O=new R,w=new R;function C(U){O.fromBufferAttribute(r,U),w.copy(O);const T=l[U];b.copy(T),b.sub(O.multiplyScalar(O.dot(T))).normalize(),v.crossVectors(w,T);const L=v.dot(o[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,L)}for(let U=0,T=M.length;U<T;++U){const _=M[U],L=_.start,X=_.count;for(let B=L,Y=L+X;B<Y;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new R,s=new R,a=new R,l=new R,o=new R,c=new R,h=new R,f=new R;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),l.fromBufferAttribute(n,g),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),l.add(h),o.add(h),c.add(h),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(l,o){const c=l.array,h=l.itemSize,f=l.normalized,u=new c.constructor(o.length*h);let p=0,g=0;for(let x=0,m=o.length;x<m;x++){l.isInterleavedBufferAttribute?p=o[x]*l.data.stride+l.offset:p=o[x]*h;for(let d=0;d<h;d++)u[g++]=c[p++]}return new en(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,n=this.index.array,r=this.attributes;for(const l in r){const o=r[l],c=t(o,n);e.setAttribute(l,c)}const s=this.morphAttributes;for(const l in s){const o=[],c=s[l];for(let h=0,f=c.length;h<f;h++){const u=c[h],p=t(u,n);o.push(p)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,o=a.length;l<o;l++){const c=a[l];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(t[c]=o[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const o in n){const c=n[o];t.data.attributes[o]=c.toJSON(t.data)}const r={};let s=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],h=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(r[o]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const So=new Se,ai=new Hs,kr=new Ti,_o=new R,Br=new R,Vr=new R,Hr=new R,ta=new R,Wr=new R,yo=new R,Gr=new R;class te extends Ne{constructor(t=new je,e=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(s&&l){Wr.set(0,0,0);for(let o=0,c=s.length;o<c;o++){const h=l[o],f=s[o];h!==0&&(ta.fromBufferAttribute(f,t),a?Wr.addScaledVector(ta,h):Wr.addScaledVector(ta.sub(e),h))}e.add(Wr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),ai.copy(t.ray).recast(t.near),!(kr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(kr,_o)===null||ai.origin.distanceToSquared(_o)>(t.far-t.near)**2))&&(So.copy(s).invert(),ai.copy(t.ray).applyMatrix4(So),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,l=s.index,o=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,O=b;v<O;v+=3){const w=l.getX(v),C=l.getX(v+1),U=l.getX(v+2);r=Xr(this,d,t,n,c,h,f,w,C,U),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const M=l.getX(m),b=l.getX(m+1),v=l.getX(m+2);r=Xr(this,a,t,n,c,h,f,M,b,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,O=b;v<O;v+=3){const w=v,C=v+1,U=v+2;r=Xr(this,d,t,n,c,h,f,w,C,U),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const M=m,b=m+1,v=m+2;r=Xr(this,a,t,n,c,h,f,M,b,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Cc(i,t,e,n,r,s,a,l){let o;if(t.side===1?o=n.intersectTriangle(a,s,r,!0,l):o=n.intersectTriangle(r,s,a,t.side===0,l),o===null)return null;Gr.copy(l),Gr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Gr);return c<e.near||c>e.far?null:{distance:c,point:Gr.clone(),object:i}}function Xr(i,t,e,n,r,s,a,l,o,c){i.getVertexPosition(l,Br),i.getVertexPosition(o,Vr),i.getVertexPosition(c,Hr);const h=Cc(i,t,e,n,Br,Vr,Hr,yo);if(h){const f=new R;mn.getBarycoord(yo,Br,Vr,Hr,f),r&&(h.uv=mn.getInterpolatedAttribute(r,l,o,c,f,new Tt)),s&&(h.uv1=mn.getInterpolatedAttribute(s,l,o,c,f,new Tt)),a&&(h.normal=mn.getInterpolatedAttribute(a,l,o,c,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:l,b:o,c,normal:new R,materialIndex:0};mn.getNormal(Br,Vr,Hr,u.normal),h.face=u,h.barycoord=f}return h}class kn extends je{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const o=[],c=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(o),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(f,2));function g(x,m,d,M,b,v,O,w,C,U,T){const _=v/C,L=O/U,X=v/2,B=O/2,Y=w/2,nt=C+1,K=U+1;let D=0,j=0;const xt=new R;for(let Et=0;Et<K;Et++){const Nt=Et*L-B;for(let zt=0;zt<nt;zt++){const ce=zt*_-X;xt[x]=ce*M,xt[m]=Nt*b,xt[d]=Y,c.push(xt.x,xt.y,xt.z),xt[x]=0,xt[m]=0,xt[d]=w>0?1:-1,h.push(xt.x,xt.y,xt.z),f.push(zt/C),f.push(1-Et/U),D+=1}}for(let Et=0;Et<U;Et++)for(let Nt=0;Nt<C;Nt++){const zt=u+Nt+nt*Et,ce=u+Nt+nt*(Et+1),$=u+(Nt+1)+nt*(Et+1),ct=u+(Nt+1)+nt*Et;o.push(zt,ce,ct),o.push(ce,$,ct),j+=6}l.addGroup(p,j,T),p+=j,u+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Li(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=Li(i[e]);for(const r in n)t[r]=n[r]}return t}function Pc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mo(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const Lc={clone:Li,merge:Qe};var Uc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uc,this.fragmentShader=Dc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=Pc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bo extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new R,To=new Tt,Ao=new Tt;class nn extends bo{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,To,Ao),e.subVectors(Ao,To)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/o,e-=a.offsetY*n/c,r*=a.width/o,n*=a.height/c}const l=this.filmOffset;l!==0&&(s+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Di=1;class Ic extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(Ui,Di,t,e);r.layers=this.layers,this.add(r);const s=new nn(Ui,Di,t,e);s.layers=this.layers,this.add(s);const a=new nn(Ui,Di,t,e);a.layers=this.layers,this.add(a);const l=new nn(Ui,Di,t,e);l.layers=this.layers,this.add(l);const o=new nn(Ui,Di,t,e);o.layers=this.layers,this.add(o);const c=new nn(Ui,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,l,o]=e;for(const c of e)this.remove(c);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,o,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,o),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eo extends We{constructor(t,e,n,r,s,a,l,o,c,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,r,s,a,l,o,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nc extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Eo(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new kn(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;const a=new te(r,s),l=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Ic(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const ea=new R,Fc=new R,Oc=new Yt;class oi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ea.subVectors(n,e).cross(Fc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ea),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Oc.getNormalMatrix(t),r=this.coplanarPoint(ea).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Ti,qr=new R;class na{constructor(t=new oi,e=new oi,n=new oi,r=new oi,s=new oi,a=new oi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,r=t.elements,s=r[0],a=r[1],l=r[2],o=r[3],c=r[4],h=r[5],f=r[6],u=r[7],p=r[8],g=r[9],x=r[10],m=r[11],d=r[12],M=r[13],b=r[14],v=r[15];if(n[0].setComponents(o-s,u-c,m-p,v-d).normalize(),n[1].setComponents(o+s,u+c,m+p,v+d).normalize(),n[2].setComponents(o+a,u+h,m+g,v+M).normalize(),n[3].setComponents(o-a,u-h,m-g,v-M).normalize(),n[4].setComponents(o-l,u-f,m-x,v-b).normalize(),e===2e3)n[5].setComponents(o+l,u+f,m+x,v+b).normalize();else if(e===2001)n[5].setComponents(l,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(qr.x=r.normal.x>0?t.max.x:t.min.x,qr.y=r.normal.y>0?t.max.y:t.min.y,qr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wo(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function zc(i){const t=new WeakMap;function e(l,o){const c=l.array,h=l.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(o,u),i.bufferData(o,c,h),l.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:f}}function n(l,o,c){const h=o.array,f=o.updateRanges;if(i.bindBuffer(c,l),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}o.clearUpdateRanges()}o.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=t.get(l);o&&(i.deleteBuffer(o.buffer),t.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=t.get(l);if(c===void 0)t.set(l,e(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,o),c.version=l.version}}return{get:r,remove:s,update:a}}class Rn extends je{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,l=Math.floor(n),o=Math.floor(r),c=l+1,h=o+1,f=t/l,u=e/o,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){const M=d*u-a;for(let b=0;b<c;b++){const v=b*f-s;g.push(v,-M,0),x.push(0,0,1),m.push(b/l),m.push(1-d/o)}}for(let d=0;d<o;d++)for(let M=0;M<l;M++){const b=M+c*d,v=M+c*(d+1),O=M+1+c*(d+1),w=M+1+c*d;p.push(b,v,w),p.push(v,O,w)}this.setIndex(p),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(x,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.width,t.height,t.widthSegments,t.heightSegments)}}var kc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bc=`#ifdef USE_ALPHAHASH
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
#endif`,Vc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xc=`#ifdef USE_AOMAP
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
#endif`,qc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jc=`#ifdef USE_BATCHING
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
#endif`,Zc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qc=`#ifdef USE_IRIDESCENCE
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
#endif`,$c=`#ifdef USE_BUMPMAP
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lu=`#define PI 3.141592653589793
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
} // validated`,cu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uu=`vec3 transformedNormal = objectNormal;
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
#endif`,fu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",gu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xu=`#ifdef USE_ENVMAP
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
#endif`,vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Su=`#ifdef USE_ENVMAP
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
#endif`,_u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Au=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eu=`#ifdef USE_GRADIENTMAP
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
}`,wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pu=`uniform bool receiveShadow;
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
#endif`,Lu=`#ifdef USE_ENVMAP
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
#endif`,Uu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fu=`PhysicalMaterial material;
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
#endif`,Ou=`struct PhysicalMaterial {
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
}`,zu=`
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
#endif`,ku=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zu=`#if defined( USE_POINTS_UV )
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
#endif`,Ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ku=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`#ifdef USE_MORPHTARGETS
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
#endif`,ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lf=`#ifdef USE_NORMALMAP
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
#endif`,cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tf=`float getShadowMask() {
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
}`,Af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ef=`#ifdef USE_SKINNING
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
#endif`,wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rf=`#ifdef USE_SKINNING
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
#endif`,Cf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Df=`#ifdef USE_TRANSMISSION
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
#endif`,If=`#ifdef USE_TRANSMISSION
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qt={alphahash_fragment:kc,alphahash_pars_fragment:Bc,alphamap_fragment:Vc,alphamap_pars_fragment:Hc,alphatest_fragment:Wc,alphatest_pars_fragment:Gc,aomap_fragment:Xc,aomap_pars_fragment:qc,batching_pars_vertex:jc,batching_vertex:Zc,begin_vertex:Jc,beginnormal_vertex:Yc,bsdfs:Kc,iridescence_fragment:Qc,bumpmap_pars_fragment:$c,clipping_planes_fragment:tu,clipping_planes_pars_fragment:eu,clipping_planes_pars_vertex:nu,clipping_planes_vertex:iu,color_fragment:ru,color_pars_fragment:su,color_pars_vertex:au,color_vertex:ou,common:lu,cube_uv_reflection_fragment:cu,defaultnormal_vertex:uu,displacementmap_pars_vertex:fu,displacementmap_vertex:hu,emissivemap_fragment:du,emissivemap_pars_fragment:pu,colorspace_fragment:mu,colorspace_pars_fragment:gu,envmap_fragment:xu,envmap_common_pars_fragment:vu,envmap_pars_fragment:Su,envmap_pars_vertex:_u,envmap_physical_pars_fragment:Lu,envmap_vertex:yu,fog_vertex:Mu,fog_pars_vertex:bu,fog_fragment:Tu,fog_pars_fragment:Au,gradientmap_pars_fragment:Eu,lightmap_pars_fragment:wu,lights_lambert_fragment:Ru,lights_lambert_pars_fragment:Cu,lights_pars_begin:Pu,lights_toon_fragment:Uu,lights_toon_pars_fragment:Du,lights_phong_fragment:Iu,lights_phong_pars_fragment:Nu,lights_physical_fragment:Fu,lights_physical_pars_fragment:Ou,lights_fragment_begin:zu,lights_fragment_maps:ku,lights_fragment_end:Bu,logdepthbuf_fragment:Vu,logdepthbuf_pars_fragment:Hu,logdepthbuf_pars_vertex:Wu,logdepthbuf_vertex:Gu,map_fragment:Xu,map_pars_fragment:qu,map_particle_fragment:ju,map_particle_pars_fragment:Zu,metalnessmap_fragment:Ju,metalnessmap_pars_fragment:Yu,morphinstance_vertex:Ku,morphcolor_vertex:Qu,morphnormal_vertex:$u,morphtarget_pars_vertex:tf,morphtarget_vertex:ef,normal_fragment_begin:nf,normal_fragment_maps:rf,normal_pars_fragment:sf,normal_pars_vertex:af,normal_vertex:of,normalmap_pars_fragment:lf,clearcoat_normal_fragment_begin:cf,clearcoat_normal_fragment_maps:uf,clearcoat_pars_fragment:ff,iridescence_pars_fragment:hf,opaque_fragment:df,packing:pf,premultiplied_alpha_fragment:mf,project_vertex:gf,dithering_fragment:xf,dithering_pars_fragment:vf,roughnessmap_fragment:Sf,roughnessmap_pars_fragment:_f,shadowmap_pars_fragment:yf,shadowmap_pars_vertex:Mf,shadowmap_vertex:bf,shadowmask_pars_fragment:Tf,skinbase_vertex:Af,skinning_pars_vertex:Ef,skinning_vertex:wf,skinnormal_vertex:Rf,specularmap_fragment:Cf,specularmap_pars_fragment:Pf,tonemapping_fragment:Lf,tonemapping_pars_fragment:Uf,transmission_fragment:Df,transmission_pars_fragment:If,uv_pars_fragment:Nf,uv_pars_vertex:Ff,uv_vertex:Of,worldpos_vertex:zf,background_vert:`varying vec2 vUv;
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
}`},vt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Cn={basic:{uniforms:Qe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Qe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Qe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Qe([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Qe([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Qe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Qe([vt.points,vt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Qe([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Qe([vt.common,vt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Qe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Qe([vt.sprite,vt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Qe([vt.common,vt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Qe([vt.lights,vt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Cn.physical={uniforms:Qe([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const jr={r:0,b:0,g:0},ci=new _n,kf=new Se;function Bf(i,t,e,n,r,s,a){const l=new Kt(0);let o=s===!0?0:1,c,h,f=null,u=0,p=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?e:t).get(b)),b}function x(M){let b=!1;const v=g(M);v===null?d(l,o):v&&v.isColor&&(d(v,1),b=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,b){const v=g(b);v&&(v.isCubeTexture||v.mapping===306)?(h===void 0&&(h=new te(new kn(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Li(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ci.copy(b.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kf.makeRotationFromEuler(ci)),h.material.toneMapped=he.getTransfer(v.colorSpace)!==Me,(f!==v||u!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new te(new Rn(2,2),new Jn({name:"BackgroundMaterial",uniforms:Li(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=he.getTransfer(v.colorSpace)!==Me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,b){M.getRGB(jr,Mo(i)),n.buffers.color.setClear(jr.r,jr.g,jr.b,b,a)}return{getClearColor:function(){return l},setClearColor:function(M,b=1){l.set(M),o=b,d(l,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,d(l,o)},render:x,addToRenderList:m}}function Vf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function l(_,L,X,B,Y){let nt=!1;const K=f(B,X,L);s!==K&&(s=K,c(s.object)),nt=p(_,B,X,Y),nt&&g(_,B,X,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(nt||a)&&(a=!1,v(_,L,X,B),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function o(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function f(_,L,X){const B=X.wireframe===!0;let Y=n[_.id];Y===void 0&&(Y={},n[_.id]=Y);let nt=Y[L.id];nt===void 0&&(nt={},Y[L.id]=nt);let K=nt[B];return K===void 0&&(K=u(o()),nt[B]=K),K}function u(_){const L=[],X=[],B=[];for(let Y=0;Y<e;Y++)L[Y]=0,X[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:B,object:_,attributes:{},index:null}}function p(_,L,X,B){const Y=s.attributes,nt=L.attributes;let K=0;const D=X.getAttributes();for(const j in D)if(D[j].location>=0){const Et=Y[j];let Nt=nt[j];if(Nt===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(Nt=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(Nt=_.instanceColor)),Et===void 0||Et.attribute!==Nt||Nt&&Et.data!==Nt.data)return!0;K++}return s.attributesNum!==K||s.index!==B}function g(_,L,X,B){const Y={},nt=L.attributes;let K=0;const D=X.getAttributes();for(const j in D)if(D[j].location>=0){let Et=nt[j];Et===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(Et=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(Et=_.instanceColor));const Nt={};Nt.attribute=Et,Et&&Et.data&&(Nt.data=Et.data),Y[j]=Nt,K++}s.attributes=Y,s.attributesNum=K,s.index=B}function x(){const _=s.newAttributes;for(let L=0,X=_.length;L<X;L++)_[L]=0}function m(_){d(_,0)}function d(_,L){const X=s.newAttributes,B=s.enabledAttributes,Y=s.attributeDivisors;X[_]=1,B[_]===0&&(i.enableVertexAttribArray(_),B[_]=1),Y[_]!==L&&(i.vertexAttribDivisor(_,L),Y[_]=L)}function M(){const _=s.newAttributes,L=s.enabledAttributes;for(let X=0,B=L.length;X<B;X++)L[X]!==_[X]&&(i.disableVertexAttribArray(X),L[X]=0)}function b(_,L,X,B,Y,nt,K){K===!0?i.vertexAttribIPointer(_,L,X,Y,nt):i.vertexAttribPointer(_,L,X,B,Y,nt)}function v(_,L,X,B){x();const Y=B.attributes,nt=X.getAttributes(),K=L.defaultAttributeValues;for(const D in nt){const j=nt[D];if(j.location>=0){let xt=Y[D];if(xt===void 0&&(D==="instanceMatrix"&&_.instanceMatrix&&(xt=_.instanceMatrix),D==="instanceColor"&&_.instanceColor&&(xt=_.instanceColor)),xt!==void 0){const Et=xt.normalized,Nt=xt.itemSize,zt=t.get(xt);if(zt===void 0)continue;const ce=zt.buffer,$=zt.type,ct=zt.bytesPerElement,Rt=$===i.INT||$===i.UNSIGNED_INT||xt.gpuType===1013;if(xt.isInterleavedBufferAttribute){const gt=xt.data,Bt=gt.stride,Wt=xt.offset;if(gt.isInstancedInterleavedBuffer){for(let wt=0;wt<j.locationSize;wt++)d(j.location+wt,gt.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let wt=0;wt<j.locationSize;wt++)m(j.location+wt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let wt=0;wt<j.locationSize;wt++)b(j.location+wt,Nt/j.locationSize,$,Et,Bt*ct,(Wt+Nt/j.locationSize*wt)*ct,Rt)}else{if(xt.isInstancedBufferAttribute){for(let gt=0;gt<j.locationSize;gt++)d(j.location+gt,xt.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let gt=0;gt<j.locationSize;gt++)m(j.location+gt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let gt=0;gt<j.locationSize;gt++)b(j.location+gt,Nt/j.locationSize,$,Et,Nt*ct,Nt/j.locationSize*gt*ct,Rt)}}else if(K!==void 0){const Et=K[D];if(Et!==void 0)switch(Et.length){case 2:i.vertexAttrib2fv(j.location,Et);break;case 3:i.vertexAttrib3fv(j.location,Et);break;case 4:i.vertexAttrib4fv(j.location,Et);break;default:i.vertexAttrib1fv(j.location,Et)}}}}M()}function O(){U();for(const _ in n){const L=n[_];for(const X in L){const B=L[X];for(const Y in B)h(B[Y].object),delete B[Y];delete L[X]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;const L=n[_.id];for(const X in L){const B=L[X];for(const Y in B)h(B[Y].object),delete B[Y];delete L[X]}delete n[_.id]}function C(_){for(const L in n){const X=n[L];if(X[_.id]===void 0)continue;const B=X[_.id];for(const Y in B)h(B[Y].object),delete B[Y];delete X[_.id]}}function U(){T(),a=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:U,resetDefaultState:T,dispose:O,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Hf(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function l(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,n,1)}function o(c,h,f,u){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*u[x];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=o}function Wf(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==1023&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){const U=C===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==1009&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==1015&&!U)}function o(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=o(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:O,maxSamples:w}}function Gf(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new oi,l=new Yt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||r;return r=u,n=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const M=s?0:n,b=M*4;let v=d.clippingState||null;o.value=v,v=h(g,u,b,p);for(let O=0;O!==b;++O)v[O]=e[O];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=o.value,g!==!0||m===null){const d=p+x*4,M=u.matrixWorldInverse;l.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,v=p;b!==x;++b,v+=4)a.copy(f[b]).applyMatrix4(M,l),a.normal.toArray(m,v),m[v+3]=a.constant}o.value=m,o.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Xf(i){let t=new WeakMap;function e(a,l){return l===303?a.mapping=301:l===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===303||l===304)if(t.has(a)){const o=t.get(a).texture;return e(o,a.mapping)}else{const o=a.image;if(o&&o.height>0){const c=new Nc(o.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const o=t.get(l);o!==void 0&&(t.delete(l),o.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ro extends bo{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,l=r+e,o=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,l-=h*this.view.offsetY,o=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ii=4,Co=[.125,.215,.35,.446,.526,.582],ui=20,ia=new Ro,Po=new Kt;let ra=null,sa=0,aa=0,oa=!1;const fi=(1+Math.sqrt(5))/2,Ni=1/fi,Lo=[new R(-fi,Ni,0),new R(fi,Ni,0),new R(-Ni,0,fi),new R(Ni,0,fi),new R(0,fi,-Ni),new R(0,fi,Ni),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Uo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ra=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=No(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,sa,aa),this._renderer.xr.enabled=oa,t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:xi,depthBuffer:!1},r=Do(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Do(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qf(s)),this._blurMaterial=jf(s,t,e)}return r}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,r){const l=new nn(90,1,e,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Po),h.toneMapping=0,h.autoClear=!1;const p=new wn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new te(new kn,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Po),x=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(l.up.set(0,o[d],0),l.lookAt(c[d],0,0)):M===1?(l.up.set(0,0,o[d]),l.lookAt(0,c[d],0)):(l.up.set(0,o[d],0),l.lookAt(0,0,c[d]));const b=this._cubeSize;Zr(r,M*b,d>2?b:0,b,b),h.setRenderTarget(r),x&&h.render(g,l),h.render(t,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===301||t.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=No()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Io());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=t;const o=this._cubeSize;Zr(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(a,ia)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Lo[(r-s-1)%Lo.length];this._blur(t,s-1,s,a,l)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,l){const o=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new te(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ui-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):ui;m>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const d=[];let M=0;for(let C=0;C<ui;++C){const U=C/x,T=Math.exp(-U*U/2);d.push(T),C===0?M+=T:C<m&&(M+=2*T)}for(let C=0;C<d.length;C++)d[C]=d[C]/M;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=a==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const v=this._sizeLods[r],O=3*v*(r>b-Ii?r-b+Ii:0),w=4*(this._cubeSize-v);Zr(e,O,w,3*v,2*v),o.setRenderTarget(e),o.render(f,ia)}}function qf(i){const t=[],e=[],n=[];let r=i;const s=i-Ii+1+Co.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);e.push(l);let o=1/l;a>i-Ii?o=Co[a-i+Ii-1]:a===0&&(o=0),n.push(o);const c=1/(l-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,x=3,m=2,d=1,M=new Float32Array(x*g*p),b=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,U=w>2?0:-1,T=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];M.set(T,x*g*w),b.set(u,m*g*w);const _=[w,w,w,w,w,w];v.set(_,d*g*w)}const O=new je;O.setAttribute("position",new en(M,x)),O.setAttribute("uv",new en(b,m)),O.setAttribute("faceIndex",new en(v,d)),t.push(O),r>Ii&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Do(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function jf(i,t,e){const n=new Float32Array(ui),r=new R(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:la(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Io(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function No(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function la(){return`

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
	`}function Zf(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const o=l.mapping,c=o===303||o===304,h=o===301||o===302;if(c||h){let f=t.get(l);const u=f!==void 0?f.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==u)return e===null&&(e=new Uo(i)),f=c?e.fromEquirectangular(l,f):e.fromCubemap(l,f),f.texture.pmremVersion=l.pmremVersion,t.set(l,f),f.texture;if(f!==void 0)return f.texture;{const p=l.image;return c&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new Uo(i)),f=c?e.fromEquirectangular(l):e.fromCubemap(l),f.texture.pmremVersion=l.pmremVersion,t.set(l,f),l.addEventListener("dispose",s),f.texture):null}}}return l}function r(l){let o=0;const c=6;for(let h=0;h<c;h++)l[h]!==void 0&&o++;return o===c}function s(l){const o=l.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Jf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Yf(i,t,e,n){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function l(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function o(f){const u=f.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(f){const u=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const M=p.array;x=p.version;for(let b=0,v=M.length;b<v;b+=3){const O=M[b+0],w=M[b+1],C=M[b+2];u.push(O,w,w,C,C,O)}}else if(g!==void 0){const M=g.array;x=g.version;for(let b=0,v=M.length/3-1;b<v;b+=3){const O=b+0,w=b+1,C=b+2;u.push(O,w,w,C,C,O)}}else return;const m=new(Ka(u)?vo:xo)(u,1);m.version=x;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function h(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:l,update:o,getWireframeAttribute:h}}function Kf(i,t,e){let n;function r(u){n=u}let s,a;function l(u){s=u.type,a=u.bytesPerElement}function o(u,p){i.drawElements(n,p,s,u*a),e.update(p,n,1)}function c(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,u*a,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function f(u,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)c(u[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,x,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M]*x[M];e.update(d,n,1)}}this.setMode=r,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Qf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(s/3);break;case i.LINES:e.lines+=l*(s/2);break;case i.LINE_STRIP:e.lines+=l*(s-1);break;case i.LINE_LOOP:e.lines+=l*s;break;case i.POINTS:e.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function $f(i,t,e){const n=new WeakMap,r=new Te;function s(a,l,o){const c=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(l);if(u===void 0||u.count!==f){let T=function(){C.dispose(),n.delete(l),l.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const p=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],M=l.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let v=l.attributes.position.count*b,O=1;v>t.maxTextureSize&&(O=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*O*4*f),C=new so(w,v,O,f);C.type=1015,C.needsUpdate=!0;const U=b*4;for(let _=0;_<f;_++){const L=m[_],X=d[_],B=M[_],Y=v*O*4*_;for(let nt=0;nt<L.count;nt++){const K=nt*U;p===!0&&(r.fromBufferAttribute(L,nt),w[Y+K+0]=r.x,w[Y+K+1]=r.y,w[Y+K+2]=r.z,w[Y+K+3]=0),g===!0&&(r.fromBufferAttribute(X,nt),w[Y+K+4]=r.x,w[Y+K+5]=r.y,w[Y+K+6]=r.z,w[Y+K+7]=0),x===!0&&(r.fromBufferAttribute(B,nt),w[Y+K+8]=r.x,w[Y+K+9]=r.y,w[Y+K+10]=r.z,w[Y+K+11]=B.itemSize===4?r.w:1)}}u={count:f,texture:C,size:new Tt(v,O)},n.set(l,u),l.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=l.morphTargetsRelative?1:1-p;o.getUniforms().setValue(i,"morphTargetBaseInfluence",g),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function th(i,t,e,n){let r=new WeakMap;function s(o){const c=n.render.frame,h=o.geometry,f=t.get(o,h);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",l)===!1&&o.addEventListener("dispose",l),r.get(o)!==c&&(e.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,i.ARRAY_BUFFER),r.set(o,c))),o.isSkinnedMesh){const u=o.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return f}function a(){r=new WeakMap}function l(o){const c=o.target;c.removeEventListener("dispose",l),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Fo extends We{constructor(t,e,n,r,s,a,l,o,c,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,r,s,a,l,o,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:1003,this.minFilter=o!==void 0?o:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Oo=new We,zo=new Fo(1,1),ko=new so,Bo=new Sc,Vo=new Eo,Ho=[],Wo=[],Go=new Float32Array(16),Xo=new Float32Array(9),qo=new Float32Array(4);function Fi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ho[r];if(s===void 0&&(s=new Float32Array(r),Ho[r]=s),t!==0){n.toArray(s,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(s,l)}return s}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jr(i,t){let e=Wo[t];e===void 0&&(e=new Int32Array(t),Wo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function eh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function nh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function ih(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function rh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function sh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;qo.set(n),i.uniformMatrix2fv(this.addr,!1,qo),Be(e,n)}}function ah(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Xo.set(n),i.uniformMatrix3fv(this.addr,!1,Xo),Be(e,n)}}function oh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Go.set(n),i.uniformMatrix4fv(this.addr,!1,Go),Be(e,n)}}function lh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ch(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function uh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function fh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function hh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function ph(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function mh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function gh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(zo.compareFunction=515,s=zo):s=Oo,e.setTexture2D(t||s,r)}function xh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Bo,r)}function vh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Vo,r)}function Sh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ko,r)}function _h(i){switch(i){case 5126:return eh;case 35664:return nh;case 35665:return ih;case 35666:return rh;case 35674:return sh;case 35675:return ah;case 35676:return oh;case 5124:case 35670:return lh;case 35667:case 35671:return ch;case 35668:case 35672:return uh;case 35669:case 35673:return fh;case 5125:return hh;case 36294:return dh;case 36295:return ph;case 36296:return mh;case 35678:case 36198:case 36298:case 36306:case 35682:return gh;case 35679:case 36299:case 36307:return xh;case 35680:case 36300:case 36308:case 36293:return vh;case 36289:case 36303:case 36311:case 36292:return Sh}}function yh(i,t){i.uniform1fv(this.addr,t)}function Mh(i,t){const e=Fi(t,this.size,2);i.uniform2fv(this.addr,e)}function bh(i,t){const e=Fi(t,this.size,3);i.uniform3fv(this.addr,e)}function Th(i,t){const e=Fi(t,this.size,4);i.uniform4fv(this.addr,e)}function Ah(i,t){const e=Fi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Eh(i,t){const e=Fi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wh(i,t){const e=Fi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rh(i,t){i.uniform1iv(this.addr,t)}function Ch(i,t){i.uniform2iv(this.addr,t)}function Ph(i,t){i.uniform3iv(this.addr,t)}function Lh(i,t){i.uniform4iv(this.addr,t)}function Uh(i,t){i.uniform1uiv(this.addr,t)}function Dh(i,t){i.uniform2uiv(this.addr,t)}function Ih(i,t){i.uniform3uiv(this.addr,t)}function Nh(i,t){i.uniform4uiv(this.addr,t)}function Fh(i,t,e){const n=this.cache,r=t.length,s=Jr(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Oo,s[a])}function Oh(i,t,e){const n=this.cache,r=t.length,s=Jr(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Bo,s[a])}function zh(i,t,e){const n=this.cache,r=t.length,s=Jr(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Vo,s[a])}function kh(i,t,e){const n=this.cache,r=t.length,s=Jr(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ko,s[a])}function Bh(i){switch(i){case 5126:return yh;case 35664:return Mh;case 35665:return bh;case 35666:return Th;case 35674:return Ah;case 35675:return Eh;case 35676:return wh;case 5124:case 35670:return Rh;case 35667:case 35671:return Ch;case 35668:case 35672:return Ph;case 35669:case 35673:return Lh;case 5125:return Uh;case 36294:return Dh;case 36295:return Ih;case 36296:return Nh;case 35678:case 36198:case 36298:case 36306:case 35682:return Fh;case 35679:case 36299:case 36307:return Oh;case 35680:case 36300:case 36308:case 36293:return zh;case 36289:case 36303:case 36311:case 36292:return kh}}class Vh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_h(e.type)}}class Hh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bh(e.type)}}class Wh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(t,e[l.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function jo(i,t){i.seq.push(t),i.map[t.id]=t}function Gh(i,t,e){const n=i.name,r=n.length;for(ca.lastIndex=0;;){const s=ca.exec(n),a=ca.lastIndex;let l=s[1];const o=s[2]==="]",c=s[3];if(o&&(l=l|0),c===void 0||c==="["&&a+2===r){jo(e,c===void 0?new Vh(l,i,t):new Hh(l,i,t));break}else{let f=e.map[l];f===void 0&&(f=new Wh(l),jo(e,f)),e=f}}}class Yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Gh(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const l=e[s],o=n[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Zo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Xh=37297;let qh=0;function jh(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}const Jo=new Yt;function Zh(i){he._getMatrix(Jo,he.workingColorSpace,i);const t=`mat3( ${Jo.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Rr:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+jh(i.getShaderSource(t),a)}else return r}function Jh(i,t){const e=Zh(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yh(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new R;function Kh(){he.getLuminanceCoefficients(Kr);const i=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qh(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function $h(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function td(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function er(i){return i!==""}function Ko(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ed=/^[ \t]*#include +<([\w\d./]+)>/gm;function ua(i){return i.replace(ed,id)}const nd=new Map;function id(i,t){let e=Qt[t];if(e===void 0){const n=nd.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ua(e)}const rd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $o(i){return i.replace(rd,sd)}function sd(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ad(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function od(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ld(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function cd(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function ud(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fd(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,l=e.fragmentShader;const o=ad(e),c=od(e),h=ld(e),f=cd(e),u=ud(e),p=Qh(e),g=$h(s),x=r.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),d.length>0&&(d+=`
`)):(m=[tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),d=[tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Qt.tonemapping_pars_fragment:"",e.toneMapping!==0?Yh("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Jh("linearToOutputTexel",e.outputColorSpace),Kh(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),a=ua(a),a=Ko(a,e),a=Qo(a,e),l=ua(l),l=Ko(l,e),l=Qo(l,e),a=$o(a),l=$o(l),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=M+m+a,v=M+d+l,O=Zo(r,r.VERTEX_SHADER,b),w=Zo(r,r.FRAGMENT_SHADER,v);r.attachShader(x,O),r.attachShader(x,w),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(L){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(O).trim(),Y=r.getShaderInfoLog(w).trim();let nt=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,O,w);else{const D=Yo(r,O,"vertex"),j=Yo(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+D+`
`+j)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(B===""||Y==="")&&(K=!1);K&&(L.diagnostics={runnable:nt,programLog:X,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:d}})}r.deleteShader(O),r.deleteShader(w),U=new Yr(r,x),T=td(r,x)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,Xh)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qh++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=w,this}let hd=0;class dd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pd(t),e.set(t,n)),n}}class pd{constructor(t){this.id=hd++,this.code=t,this.usedTimes=0}}function md(i,t,e,n,r,s,a){const l=new Ws,o=new dd,c=new Set,h=[],f=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,_,L,X,B){const Y=X.fog,nt=B.geometry,K=T.isMeshStandardMaterial?X.environment:null,D=(T.isMeshStandardMaterial?e:t).get(T.envMap||K),j=D&&D.mapping===306?D.image.height:null,xt=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Et=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Nt=Et!==void 0?Et.length:0;let zt=0;nt.morphAttributes.position!==void 0&&(zt=1),nt.morphAttributes.normal!==void 0&&(zt=2),nt.morphAttributes.color!==void 0&&(zt=3);let ce,$,ct,Rt;if(xt){const fe=Cn[xt];ce=fe.vertexShader,$=fe.fragmentShader}else ce=T.vertexShader,$=T.fragmentShader,o.update(T),ct=o.getVertexShaderID(T),Rt=o.getFragmentShaderID(T);const gt=i.getRenderTarget(),Bt=i.state.buffers.depth.getReversed(),Wt=B.isInstancedMesh===!0,wt=B.isBatchedMesh===!0,yt=!!T.map,Jt=!!T.matcap,se=!!D,N=!!T.aoMap,Ee=!!T.lightMap,pt=!!T.bumpMap,Xt=!!T.normalMap,Ft=!!T.displacementMap,ue=!!T.emissiveMap,Ot=!!T.metalnessMap,A=!!T.roughnessMap,S=T.anisotropy>0,z=T.clearcoat>0,et=T.dispersion>0,st=T.iridescence>0,tt=T.sheen>0,Ut=T.transmission>0,St=S&&!!T.anisotropyMap,At=z&&!!T.clearcoatMap,ee=z&&!!T.clearcoatNormalMap,Q=z&&!!T.clearcoatRoughnessMap,Mt=st&&!!T.iridescenceMap,kt=st&&!!T.iridescenceThicknessMap,k=tt&&!!T.sheenColorMap,J=tt&&!!T.sheenRoughnessMap,it=!!T.specularMap,ht=!!T.specularColorMap,ot=!!T.specularIntensityMap,P=Ut&&!!T.transmissionMap,dt=Ut&&!!T.thicknessMap,G=!!T.gradientMap,Z=!!T.alphaMap,ut=T.alphaTest>0,mt=!!T.alphaHash,Ct=!!T.extensions;let ae=0;T.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ae=i.toneMapping);const ze={shaderID:xt,shaderType:T.type,shaderName:T.name,vertexShader:ce,fragmentShader:$,defines:T.defines,customVertexShaderID:ct,customFragmentShaderID:Rt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:wt,batchingColor:wt&&B._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&B.instanceColor!==null,instancingMorph:Wt&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:xi,alphaToCoverage:!!T.alphaToCoverage,map:yt,matcap:Jt,envMap:se,envMapMode:se&&D.mapping,envMapCubeUVHeight:j,aoMap:N,lightMap:Ee,bumpMap:pt,normalMap:Xt,displacementMap:u&&Ft,emissiveMap:ue,normalMapObjectSpace:Xt&&T.normalMapType===1,normalMapTangentSpace:Xt&&T.normalMapType===0,metalnessMap:Ot,roughnessMap:A,anisotropy:S,anisotropyMap:St,clearcoat:z,clearcoatMap:At,clearcoatNormalMap:ee,clearcoatRoughnessMap:Q,dispersion:et,iridescence:st,iridescenceMap:Mt,iridescenceThicknessMap:kt,sheen:tt,sheenColorMap:k,sheenRoughnessMap:J,specularMap:it,specularColorMap:ht,specularIntensityMap:ot,transmission:Ut,transmissionMap:P,thicknessMap:dt,gradientMap:G,opaque:T.transparent===!1&&T.blending===1&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:ut,alphaHash:mt,combine:T.combine,mapUv:yt&&x(T.map.channel),aoMapUv:N&&x(T.aoMap.channel),lightMapUv:Ee&&x(T.lightMap.channel),bumpMapUv:pt&&x(T.bumpMap.channel),normalMapUv:Xt&&x(T.normalMap.channel),displacementMapUv:Ft&&x(T.displacementMap.channel),emissiveMapUv:ue&&x(T.emissiveMap.channel),metalnessMapUv:Ot&&x(T.metalnessMap.channel),roughnessMapUv:A&&x(T.roughnessMap.channel),anisotropyMapUv:St&&x(T.anisotropyMap.channel),clearcoatMapUv:At&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:k&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:J&&x(T.sheenRoughnessMap.channel),specularMapUv:it&&x(T.specularMap.channel),specularColorMapUv:ht&&x(T.specularColorMap.channel),specularIntensityMapUv:ot&&x(T.specularIntensityMap.channel),transmissionMapUv:P&&x(T.transmissionMap.channel),thicknessMapUv:dt&&x(T.thicknessMap.channel),alphaMapUv:Z&&x(T.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(Xt||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!nt.attributes.uv&&(yt||Z),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Bt,skinning:B.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:zt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:yt&&T.map.isVideoTexture===!0&&he.getTransfer(T.map.colorSpace)===Me,decodeVideoTextureEmissive:ue&&T.emissiveMap.isVideoTexture===!0&&he.getTransfer(T.emissiveMap.colorSpace)===Me,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===2,flipSided:T.side===1,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ct&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&T.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function d(T){const _=[];if(T.shaderID?_.push(T.shaderID):(_.push(T.customVertexShaderID),_.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)_.push(L),_.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(M(_,T),b(_,T),_.push(i.outputColorSpace)),_.push(T.customProgramCacheKey),_.join()}function M(T,_){T.push(_.precision),T.push(_.outputColorSpace),T.push(_.envMapMode),T.push(_.envMapCubeUVHeight),T.push(_.mapUv),T.push(_.alphaMapUv),T.push(_.lightMapUv),T.push(_.aoMapUv),T.push(_.bumpMapUv),T.push(_.normalMapUv),T.push(_.displacementMapUv),T.push(_.emissiveMapUv),T.push(_.metalnessMapUv),T.push(_.roughnessMapUv),T.push(_.anisotropyMapUv),T.push(_.clearcoatMapUv),T.push(_.clearcoatNormalMapUv),T.push(_.clearcoatRoughnessMapUv),T.push(_.iridescenceMapUv),T.push(_.iridescenceThicknessMapUv),T.push(_.sheenColorMapUv),T.push(_.sheenRoughnessMapUv),T.push(_.specularMapUv),T.push(_.specularColorMapUv),T.push(_.specularIntensityMapUv),T.push(_.transmissionMapUv),T.push(_.thicknessMapUv),T.push(_.combine),T.push(_.fogExp2),T.push(_.sizeAttenuation),T.push(_.morphTargetsCount),T.push(_.morphAttributeCount),T.push(_.numDirLights),T.push(_.numPointLights),T.push(_.numSpotLights),T.push(_.numSpotLightMaps),T.push(_.numHemiLights),T.push(_.numRectAreaLights),T.push(_.numDirLightShadows),T.push(_.numPointLightShadows),T.push(_.numSpotLightShadows),T.push(_.numSpotLightShadowsWithMaps),T.push(_.numLightProbes),T.push(_.shadowMapType),T.push(_.toneMapping),T.push(_.numClippingPlanes),T.push(_.numClipIntersection),T.push(_.depthPacking)}function b(T,_){l.disableAll(),_.supportsVertexTextures&&l.enable(0),_.instancing&&l.enable(1),_.instancingColor&&l.enable(2),_.instancingMorph&&l.enable(3),_.matcap&&l.enable(4),_.envMap&&l.enable(5),_.normalMapObjectSpace&&l.enable(6),_.normalMapTangentSpace&&l.enable(7),_.clearcoat&&l.enable(8),_.iridescence&&l.enable(9),_.alphaTest&&l.enable(10),_.vertexColors&&l.enable(11),_.vertexAlphas&&l.enable(12),_.vertexUv1s&&l.enable(13),_.vertexUv2s&&l.enable(14),_.vertexUv3s&&l.enable(15),_.vertexTangents&&l.enable(16),_.anisotropy&&l.enable(17),_.alphaHash&&l.enable(18),_.batching&&l.enable(19),_.dispersion&&l.enable(20),_.batchingColor&&l.enable(21),T.push(l.mask),l.disableAll(),_.fog&&l.enable(0),_.useFog&&l.enable(1),_.flatShading&&l.enable(2),_.logarithmicDepthBuffer&&l.enable(3),_.reverseDepthBuffer&&l.enable(4),_.skinning&&l.enable(5),_.morphTargets&&l.enable(6),_.morphNormals&&l.enable(7),_.morphColors&&l.enable(8),_.premultipliedAlpha&&l.enable(9),_.shadowMapEnabled&&l.enable(10),_.doubleSided&&l.enable(11),_.flipSided&&l.enable(12),_.useDepthPacking&&l.enable(13),_.dithering&&l.enable(14),_.transmission&&l.enable(15),_.sheen&&l.enable(16),_.opaque&&l.enable(17),_.pointsUvs&&l.enable(18),_.decodeVideoTexture&&l.enable(19),_.decodeVideoTextureEmissive&&l.enable(20),_.alphaToCoverage&&l.enable(21),T.push(l.mask)}function v(T){const _=g[T.type];let L;if(_){const X=Cn[_];L=Lc.clone(X.uniforms)}else L=T.uniforms;return L}function O(T,_){let L;for(let X=0,B=h.length;X<B;X++){const Y=h[X];if(Y.cacheKey===_){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new fd(i,_,T,s),h.push(L)),L}function w(T){if(--T.usedTimes===0){const _=h.indexOf(T);h[_]=h[h.length-1],h.pop(),T.destroy()}}function C(T){o.remove(T)}function U(){o.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:O,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:U}}function gd(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function r(a,l,o){i.get(a)[l]=o}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function xd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function el(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,u,p,g,x,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:u,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),t++,d}function l(f,u,p,g,x,m){const d=a(f,u,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):e.push(d)}function o(f,u,p,g,x,m){const d=a(f,u,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function c(f,u){e.length>1&&e.sort(f||xd),n.length>1&&n.sort(u||el),r.length>1&&r.sort(u||el)}function h(){for(let f=t,u=i.length;f<u;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:o,finish:h,sort:c}}function vd(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new nl,i.set(n,[a])):r>=s.length?(a=new nl,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Sd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Kt};break;case"SpotLight":e={position:new R,direction:new R,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function _d(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let yd=0;function Md(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bd(i){const t=new Sd,e=_d(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const r=new R,s=new Se,a=new Se;function l(c){let h=0,f=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,M=0,b=0,v=0,O=0,w=0,C=0;c.sort(Md);for(let T=0,_=c.length;T<_;T++){const L=c[T],X=L.color,B=L.intensity,Y=L.distance,nt=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=X.r*B,f+=X.g*B,u+=X.b*B;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],B);C++}else if(L.isDirectionalLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const D=L.shadow,j=e.get(L);j.shadowIntensity=D.intensity,j.shadowBias=D.bias,j.shadowNormalBias=D.normalBias,j.shadowRadius=D.radius,j.shadowMapSize=D.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=L.shadow.matrix,M++}n.directional[p]=K,p++}else if(L.isSpotLight){const K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(X).multiplyScalar(B),K.distance=Y,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[x]=K;const D=L.shadow;if(L.map&&(n.spotLightMap[O]=L.map,O++,D.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[x]=D.matrix,L.castShadow){const j=e.get(L);j.shadowIntensity=D.intensity,j.shadowBias=D.bias,j.shadowNormalBias=D.normalBias,j.shadowRadius=D.radius,j.shadowMapSize=D.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=nt,v++}x++}else if(L.isRectAreaLight){const K=t.get(L);K.color.copy(X).multiplyScalar(B),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=K,m++}else if(L.isPointLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const D=L.shadow,j=e.get(L);j.shadowIntensity=D.intensity,j.shadowBias=D.bias,j.shadowNormalBias=D.normalBias,j.shadowRadius=D.radius,j.shadowMapSize=D.mapSize,j.shadowCameraNear=D.camera.near,j.shadowCameraFar=D.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=nt,n.pointShadowMatrix[g]=L.shadow.matrix,b++}n.point[g]=K,g++}else if(L.isHemisphereLight){const K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(B),K.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[d]=K,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==M||U.numPointShadows!==b||U.numSpotShadows!==v||U.numSpotMaps!==O||U.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+O-w,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=M,U.numPointShadows=b,U.numSpotShadows=v,U.numSpotMaps=O,U.numLightProbes=C,n.version=yd++)}function o(c,h){let f=0,u=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const b=c[d];if(b.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(b.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:l,setupView:o,state:n}}function il(i){const t=new bd(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function l(){t.setup(e)}function o(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:l,setupLightsView:o,pushLight:s,pushShadow:a}}function Td(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let l;return a===void 0?(l=new il(i),t.set(r,[l])):s>=a.length?(l=new il(i),a.push(l)):l=a[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ad extends Zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ed extends Zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rd=`uniform sampler2D shadow_pass;
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
}`;function Cd(i,t,e){let n=new na;const r=new Tt,s=new Tt,a=new Te,l=new Ad({depthPacking:3201}),o=new Ed,c={},h=e.maxTextureSize,f={0:1,1:0,2:2},u=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:wd,fragmentShader:Rd}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new je;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new te(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let d=this.type;this.render=function(w,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=i.getRenderTarget(),_=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),X=i.state;X.setBlending(0),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const B=d!==3&&this.type===3,Y=d===3&&this.type!==3;for(let nt=0,K=w.length;nt<K;nt++){const D=w[nt],j=D.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const xt=j.getFrameExtents();if(r.multiply(xt),s.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/xt.x),r.x=s.x*xt.x,j.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/xt.y),r.y=s.y*xt.y,j.mapSize.y=s.y)),j.map===null||B===!0||Y===!0){const Nt=this.type!==3?{minFilter:1003,magFilter:1003}:{};j.map!==null&&j.map.dispose(),j.map=new ni(r.x,r.y,Nt),j.map.texture.name=D.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const Et=j.getViewportCount();for(let Nt=0;Nt<Et;Nt++){const zt=j.getViewport(Nt);a.set(s.x*zt.x,s.y*zt.y,s.x*zt.z,s.y*zt.w),X.viewport(a),j.updateMatrices(D,Nt),n=j.getFrustum(),v(C,U,j.camera,D,this.type)}j.isPointLightShadow!==!0&&this.type===3&&M(j,U),j.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(T,_,L)};function M(w,C){const U=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ni(r.x,r.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,U,u,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,U,p,x,null)}function b(w,C,U,T){let _=null;const L=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)_=L;else if(_=U.isPointLight===!0?o:l,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=_.uuid,B=C.uuid;let Y=c[X];Y===void 0&&(Y={},c[X]=Y);let nt=Y[B];nt===void 0&&(nt=_.clone(),Y[B]=nt,C.addEventListener("dispose",O)),_=nt}if(_.visible=C.visible,_.wireframe=C.wireframe,T===3?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:f[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const X=i.properties.get(_);X.light=U}return _}function v(w,C,U,T,_){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===3)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const B=t.update(w),Y=w.material;if(Array.isArray(Y)){const nt=B.groups;for(let K=0,D=nt.length;K<D;K++){const j=nt[K],xt=Y[j.materialIndex];if(xt&&xt.visible){const Et=b(w,xt,T,_);w.onBeforeShadow(i,w,C,U,B,Et,j),i.renderBufferDirect(U,null,B,Et,w,j),w.onAfterShadow(i,w,C,U,B,Et,j)}}}else if(Y.visible){const nt=b(w,Y,T,_);w.onBeforeShadow(i,w,C,U,B,nt,null),i.renderBufferDirect(U,null,B,nt,w,null),w.onAfterShadow(i,w,C,U,B,nt,null)}}const X=w.children;for(let B=0,Y=X.length;B<Y;B++)v(X[B],C,U,T,_)}function O(w){w.target.removeEventListener("dispose",O);for(const U in c){const T=c[U],_=w.target.uuid;_ in T&&(T[_].dispose(),delete T[_])}}}const Pd={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Ld(i,t){function e(){let P=!1;const dt=new Te;let G=null;const Z=new Te(0,0,0,0);return{setMask:function(ut){G!==ut&&!P&&(i.colorMask(ut,ut,ut,ut),G=ut)},setLocked:function(ut){P=ut},setClear:function(ut,mt,Ct,ae,ze){ze===!0&&(ut*=ae,mt*=ae,Ct*=ae),dt.set(ut,mt,Ct,ae),Z.equals(dt)===!1&&(i.clearColor(ut,mt,Ct,ae),Z.copy(dt))},reset:function(){P=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let P=!1,dt=!1,G=null,Z=null,ut=null;return{setReversed:function(mt){if(dt!==mt){const Ct=t.get("EXT_clip_control");dt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT);const ae=ut;ut=null,this.setClear(ae)}dt=mt},getReversed:function(){return dt},setTest:function(mt){mt?gt(i.DEPTH_TEST):Bt(i.DEPTH_TEST)},setMask:function(mt){G!==mt&&!P&&(i.depthMask(mt),G=mt)},setFunc:function(mt){if(dt&&(mt=Pd[mt]),Z!==mt){switch(mt){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=mt}},setLocked:function(mt){P=mt},setClear:function(mt){ut!==mt&&(dt&&(mt=1-mt),i.clearDepth(mt),ut=mt)},reset:function(){P=!1,G=null,Z=null,ut=null,dt=!1}}}function r(){let P=!1,dt=null,G=null,Z=null,ut=null,mt=null,Ct=null,ae=null,ze=null;return{setTest:function(fe){P||(fe?gt(i.STENCIL_TEST):Bt(i.STENCIL_TEST))},setMask:function(fe){dt!==fe&&!P&&(i.stencilMask(fe),dt=fe)},setFunc:function(fe,Ze,Mn){(G!==fe||Z!==Ze||ut!==Mn)&&(i.stencilFunc(fe,Ze,Mn),G=fe,Z=Ze,ut=Mn)},setOp:function(fe,Ze,Mn){(mt!==fe||Ct!==Ze||ae!==Mn)&&(i.stencilOp(fe,Ze,Mn),mt=fe,Ct=Ze,ae=Mn)},setLocked:function(fe){P=fe},setClear:function(fe){ze!==fe&&(i.clearStencil(fe),ze=fe)},reset:function(){P=!1,dt=null,G=null,Z=null,ut=null,mt=null,Ct=null,ae=null,ze=null}}}const s=new e,a=new n,l=new r,o=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,p=[],g=null,x=!1,m=null,d=null,M=null,b=null,v=null,O=null,w=null,C=new Kt(0,0,0),U=0,T=!1,_=null,L=null,X=null,B=null,Y=null;const nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,D=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=D>=1):j.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=D>=2);let xt=null,Et={};const Nt=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),ce=new Te().fromArray(Nt),$=new Te().fromArray(zt);function ct(P,dt,G,Z){const ut=new Uint8Array(4),mt=i.createTexture();i.bindTexture(P,mt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<G;Ct++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(dt+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return mt}const Rt={};Rt[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),gt(i.DEPTH_TEST),a.setFunc(3),pt(!1),Xt(1),gt(i.CULL_FACE),N(0);function gt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Bt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Wt(P,dt){return f[P]!==dt?(i.bindFramebuffer(P,dt),f[P]=dt,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=dt),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function wt(P,dt){let G=p,Z=!1;if(P){G=u.get(dt),G===void 0&&(G=[],u.set(dt,G));const ut=P.textures;if(G.length!==ut.length||G[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Ct=ut.length;mt<Ct;mt++)G[mt]=i.COLOR_ATTACHMENT0+mt;G.length=ut.length,Z=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Z=!0);Z&&i.drawBuffers(G)}function yt(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const Jt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Jt[103]=i.MIN,Jt[104]=i.MAX;const se={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function N(P,dt,G,Z,ut,mt,Ct,ae,ze,fe){if(P===0){x===!0&&(Bt(i.BLEND),x=!1);return}if(x===!1&&(gt(i.BLEND),x=!0),P!==5){if(P!==m||fe!==T){if((d!==100||v!==100)&&(i.blendEquation(i.FUNC_ADD),d=100,v=100),fe)switch(P){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,b=null,O=null,w=null,C.set(0,0,0),U=0,m=P,T=fe}return}ut=ut||dt,mt=mt||G,Ct=Ct||Z,(dt!==d||ut!==v)&&(i.blendEquationSeparate(Jt[dt],Jt[ut]),d=dt,v=ut),(G!==M||Z!==b||mt!==O||Ct!==w)&&(i.blendFuncSeparate(se[G],se[Z],se[mt],se[Ct]),M=G,b=Z,O=mt,w=Ct),(ae.equals(C)===!1||ze!==U)&&(i.blendColor(ae.r,ae.g,ae.b,ze),C.copy(ae),U=ze),m=P,T=!1}function Ee(P,dt){P.side===2?Bt(i.CULL_FACE):gt(i.CULL_FACE);let G=P.side===1;dt&&(G=!G),pt(G),P.blending===1&&P.transparent===!1?N(0):N(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const Z=P.stencilWrite;l.setTest(Z),Z&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ue(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(P){_!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),_=P)}function Xt(P){P!==0?(gt(i.CULL_FACE),P!==L&&(P===1?i.cullFace(i.BACK):P===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Bt(i.CULL_FACE),L=P}function Ft(P){P!==X&&(K&&i.lineWidth(P),X=P)}function ue(P,dt,G){P?(gt(i.POLYGON_OFFSET_FILL),(B!==dt||Y!==G)&&(i.polygonOffset(dt,G),B=dt,Y=G)):Bt(i.POLYGON_OFFSET_FILL)}function Ot(P){P?gt(i.SCISSOR_TEST):Bt(i.SCISSOR_TEST)}function A(P){P===void 0&&(P=i.TEXTURE0+nt-1),xt!==P&&(i.activeTexture(P),xt=P)}function S(P,dt,G){G===void 0&&(xt===null?G=i.TEXTURE0+nt-1:G=xt);let Z=Et[G];Z===void 0&&(Z={type:void 0,texture:void 0},Et[G]=Z),(Z.type!==P||Z.texture!==dt)&&(xt!==G&&(i.activeTexture(G),xt=G),i.bindTexture(P,dt||Rt[P]),Z.type=P,Z.texture=dt)}function z(){const P=Et[xt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function k(P){ce.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ce.copy(P))}function J(P){$.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),$.copy(P))}function it(P,dt){let G=c.get(dt);G===void 0&&(G=new WeakMap,c.set(dt,G));let Z=G.get(P);Z===void 0&&(Z=i.getUniformBlockIndex(dt,P.name),G.set(P,Z))}function ht(P,dt){const Z=c.get(dt).get(P);o.get(dt)!==Z&&(i.uniformBlockBinding(dt,Z,P.__bindingPointIndex),o.set(dt,Z))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},xt=null,Et={},f={},u=new WeakMap,p=[],g=null,x=!1,m=null,d=null,M=null,b=null,v=null,O=null,w=null,C=new Kt(0,0,0),U=0,T=!1,_=null,L=null,X=null,B=null,Y=null,ce.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:gt,disable:Bt,bindFramebuffer:Wt,drawBuffers:wt,useProgram:yt,setBlending:N,setMaterial:Ee,setFlipSided:pt,setCullFace:Xt,setLineWidth:Ft,setPolygonOffset:ue,setScissorTest:Ot,activeTexture:A,bindTexture:S,unbindTexture:z,compressedTexImage2D:et,compressedTexImage3D:st,texImage2D:Mt,texImage3D:kt,updateUBOMapping:it,uniformBlockBinding:ht,texStorage2D:ee,texStorage3D:Q,texSubImage2D:tt,texSubImage3D:Ut,compressedTexSubImage2D:St,compressedTexSubImage3D:At,scissor:k,viewport:J,reset:ot}}function rl(i,t,e,n){const r=Ud(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/r.components*r.byteLength;case 1029:return i*t/r.components*r.byteLength;case 1030:return i*t*2/r.components*r.byteLength;case 1031:return i*t*2/r.components*r.byteLength;case 1022:return i*t*3/r.components*r.byteLength;case 1023:return i*t*4/r.components*r.byteLength;case 1033:return i*t*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ud(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Dd(i,t,e,n,r,s,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):Cr("canvas")}function x(A,S,z){let et=1;const st=Ot(A);if((st.width>z||st.height>z)&&(et=z/Math.max(st.width,st.height)),et<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const tt=Math.floor(et*st.width),Ut=Math.floor(et*st.height);f===void 0&&(f=g(tt,Ut));const St=S?g(tt,Ut):f;return St.width=tt,St.height=Ut,St.getContext("2d").drawImage(A,0,0,tt,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+tt+"x"+Ut+")."),St}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,S,z,et,st=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let tt=S;if(S===i.RED&&(z===i.FLOAT&&(tt=i.R32F),z===i.HALF_FLOAT&&(tt=i.R16F),z===i.UNSIGNED_BYTE&&(tt=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.R8UI),z===i.UNSIGNED_SHORT&&(tt=i.R16UI),z===i.UNSIGNED_INT&&(tt=i.R32UI),z===i.BYTE&&(tt=i.R8I),z===i.SHORT&&(tt=i.R16I),z===i.INT&&(tt=i.R32I)),S===i.RG&&(z===i.FLOAT&&(tt=i.RG32F),z===i.HALF_FLOAT&&(tt=i.RG16F),z===i.UNSIGNED_BYTE&&(tt=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.RG8UI),z===i.UNSIGNED_SHORT&&(tt=i.RG16UI),z===i.UNSIGNED_INT&&(tt=i.RG32UI),z===i.BYTE&&(tt=i.RG8I),z===i.SHORT&&(tt=i.RG16I),z===i.INT&&(tt=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),z===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),z===i.UNSIGNED_INT&&(tt=i.RGB32UI),z===i.BYTE&&(tt=i.RGB8I),z===i.SHORT&&(tt=i.RGB16I),z===i.INT&&(tt=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),z===i.UNSIGNED_INT&&(tt=i.RGBA32UI),z===i.BYTE&&(tt=i.RGBA8I),z===i.SHORT&&(tt=i.RGBA16I),z===i.INT&&(tt=i.RGBA32I)),S===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),S===i.RGBA){const Ut=st?Rr:he.getTransfer(et);z===i.FLOAT&&(tt=i.RGBA32F),z===i.HALF_FLOAT&&(tt=i.RGBA16F),z===i.UNSIGNED_BYTE&&(tt=Ut===Me?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(A,S){let z;return A?S===null||S===1014||S===1020?z=i.DEPTH24_STENCIL8:S===1015?z=i.DEPTH32F_STENCIL8:S===1012&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===1014||S===1020?z=i.DEPTH_COMPONENT24:S===1015?z=i.DEPTH_COMPONENT32F:S===1012&&(z=i.DEPTH_COMPONENT16),z}function O(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==1003&&A.minFilter!==1006?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){const S=A.target;S.removeEventListener("dispose",w),U(S),S.isVideoTexture&&h.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),_(S)}function U(A){const S=n.get(A);if(S.__webglInit===void 0)return;const z=A.source,et=u.get(z);if(et){const st=et[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&T(A),Object.keys(et).length===0&&u.delete(z)}n.remove(A)}function T(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const z=A.source,et=u.get(z);delete et[S.__cacheKey],a.memory.textures--}function _(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(S.__webglFramebuffer[et]))for(let st=0;st<S.__webglFramebuffer[et].length;st++)i.deleteFramebuffer(S.__webglFramebuffer[et][st]);else i.deleteFramebuffer(S.__webglFramebuffer[et]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[et])}else{if(Array.isArray(S.__webglFramebuffer))for(let et=0;et<S.__webglFramebuffer.length;et++)i.deleteFramebuffer(S.__webglFramebuffer[et]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let et=0;et<S.__webglColorRenderbuffer.length;et++)S.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[et]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=A.textures;for(let et=0,st=z.length;et<st;et++){const tt=n.get(z[et]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(z[et])}n.remove(A)}let L=0;function X(){L=0}function B(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function Y(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function nt(A,S){const z=n.get(A);if(A.isVideoTexture&&Ft(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const et=A.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,A,S);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function K(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){$(z,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function D(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){$(z,A,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function j(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){ct(z,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const xt={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Et={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},Nt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function zt(A,S){if(S.type===1015&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===1006||S.magFilter===1007||S.magFilter===1005||S.magFilter===1008||S.minFilter===1006||S.minFilter===1007||S.minFilter===1005||S.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,xt[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,xt[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,xt[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Et[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Et[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Nt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===1003||S.minFilter!==1005&&S.minFilter!==1008||S.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ce(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const et=S.source;let st=u.get(et);st===void 0&&(st={},u.set(et,st));const tt=Y(S);if(tt!==A.__cacheKey){st[tt]===void 0&&(st[tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),st[tt].usedTimes++;const Ut=st[A.__cacheKey];Ut!==void 0&&(st[A.__cacheKey].usedTimes--,Ut.usedTimes===0&&T(S)),A.__cacheKey=tt,A.__webglTexture=st[tt].texture}return z}function $(A,S,z){let et=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(et=i.TEXTURE_3D);const st=ce(A,S),tt=S.source;e.bindTexture(et,A.__webglTexture,i.TEXTURE0+z);const Ut=n.get(tt);if(tt.version!==Ut.__version||st===!0){e.activeTexture(i.TEXTURE0+z);const St=he.getPrimaries(he.workingColorSpace),At=S.colorSpace===Ln?null:he.getPrimaries(S.colorSpace),ee=S.colorSpace===Ln||St===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Q=x(S.image,!1,r.maxTextureSize);Q=ue(S,Q);const Mt=s.convert(S.format,S.colorSpace),kt=s.convert(S.type);let k=b(S.internalFormat,Mt,kt,S.colorSpace,S.isVideoTexture);zt(et,S);let J;const it=S.mipmaps,ht=S.isVideoTexture!==!0,ot=Ut.__version===void 0||st===!0,P=tt.dataReady,dt=O(S,Q);if(S.isDepthTexture)k=v(S.format===1027,S.type),ot&&(ht?e.texStorage2D(i.TEXTURE_2D,1,k,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,k,Q.width,Q.height,0,Mt,kt,null));else if(S.isDataTexture)if(it.length>0){ht&&ot&&e.texStorage2D(i.TEXTURE_2D,dt,k,it[0].width,it[0].height);for(let G=0,Z=it.length;G<Z;G++)J=it[G],ht?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,J.width,J.height,Mt,kt,J.data):e.texImage2D(i.TEXTURE_2D,G,k,J.width,J.height,0,Mt,kt,J.data);S.generateMipmaps=!1}else ht?(ot&&e.texStorage2D(i.TEXTURE_2D,dt,k,Q.width,Q.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,Mt,kt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,k,Q.width,Q.height,0,Mt,kt,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ht&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,k,it[0].width,it[0].height,Q.depth);for(let G=0,Z=it.length;G<Z;G++)if(J=it[G],S.format!==1023)if(Mt!==null)if(ht){if(P)if(S.layerUpdates.size>0){const ut=rl(J.width,J.height,S.format,S.type);for(const mt of S.layerUpdates){const Ct=J.data.subarray(mt*ut/J.data.BYTES_PER_ELEMENT,(mt+1)*ut/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,mt,J.width,J.height,1,Mt,Ct)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,J.width,J.height,Q.depth,Mt,J.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,k,J.width,J.height,Q.depth,0,J.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,J.width,J.height,Q.depth,Mt,kt,J.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,k,J.width,J.height,Q.depth,0,Mt,kt,J.data)}else{ht&&ot&&e.texStorage2D(i.TEXTURE_2D,dt,k,it[0].width,it[0].height);for(let G=0,Z=it.length;G<Z;G++)J=it[G],S.format!==1023?Mt!==null?ht?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,J.width,J.height,Mt,J.data):e.compressedTexImage2D(i.TEXTURE_2D,G,k,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,J.width,J.height,Mt,kt,J.data):e.texImage2D(i.TEXTURE_2D,G,k,J.width,J.height,0,Mt,kt,J.data)}else if(S.isDataArrayTexture)if(ht){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,k,Q.width,Q.height,Q.depth),P)if(S.layerUpdates.size>0){const G=rl(Q.width,Q.height,S.format,S.type);for(const Z of S.layerUpdates){const ut=Q.data.subarray(Z*G/Q.data.BYTES_PER_ELEMENT,(Z+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,Mt,kt,ut)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Mt,kt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,k,Q.width,Q.height,Q.depth,0,Mt,kt,Q.data);else if(S.isData3DTexture)ht?(ot&&e.texStorage3D(i.TEXTURE_3D,dt,k,Q.width,Q.height,Q.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Mt,kt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,k,Q.width,Q.height,Q.depth,0,Mt,kt,Q.data);else if(S.isFramebufferTexture){if(ot)if(ht)e.texStorage2D(i.TEXTURE_2D,dt,k,Q.width,Q.height);else{let G=Q.width,Z=Q.height;for(let ut=0;ut<dt;ut++)e.texImage2D(i.TEXTURE_2D,ut,k,G,Z,0,Mt,kt,null),G>>=1,Z>>=1}}else if(it.length>0){if(ht&&ot){const G=Ot(it[0]);e.texStorage2D(i.TEXTURE_2D,dt,k,G.width,G.height)}for(let G=0,Z=it.length;G<Z;G++)J=it[G],ht?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,Mt,kt,J):e.texImage2D(i.TEXTURE_2D,G,k,Mt,kt,J);S.generateMipmaps=!1}else if(ht){if(ot){const G=Ot(Q);e.texStorage2D(i.TEXTURE_2D,dt,k,G.width,G.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,kt,Q)}else e.texImage2D(i.TEXTURE_2D,0,k,Mt,kt,Q);m(S)&&d(et),Ut.__version=tt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ct(A,S,z){if(S.image.length!==6)return;const et=ce(A,S),st=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const tt=n.get(st);if(st.version!==tt.__version||et===!0){e.activeTexture(i.TEXTURE0+z);const Ut=he.getPrimaries(he.workingColorSpace),St=S.colorSpace===Ln?null:he.getPrimaries(S.colorSpace),At=S.colorSpace===Ln||Ut===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const ee=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,Mt=[];for(let Z=0;Z<6;Z++)!ee&&!Q?Mt[Z]=x(S.image[Z],!0,r.maxCubemapSize):Mt[Z]=Q?S.image[Z].image:S.image[Z],Mt[Z]=ue(S,Mt[Z]);const kt=Mt[0],k=s.convert(S.format,S.colorSpace),J=s.convert(S.type),it=b(S.internalFormat,k,J,S.colorSpace),ht=S.isVideoTexture!==!0,ot=tt.__version===void 0||et===!0,P=st.dataReady;let dt=O(S,kt);zt(i.TEXTURE_CUBE_MAP,S);let G;if(ee){ht&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,it,kt.width,kt.height);for(let Z=0;Z<6;Z++){G=Mt[Z].mipmaps;for(let ut=0;ut<G.length;ut++){const mt=G[ut];S.format!==1023?k!==null?ht?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,mt.width,mt.height,k,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,it,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,mt.width,mt.height,k,J,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,it,mt.width,mt.height,0,k,J,mt.data)}}}else{if(G=S.mipmaps,ht&&ot){G.length>0&&dt++;const Z=Ot(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,it,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){ht?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Mt[Z].width,Mt[Z].height,k,J,Mt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,it,Mt[Z].width,Mt[Z].height,0,k,J,Mt[Z].data);for(let ut=0;ut<G.length;ut++){const Ct=G[ut].image[Z].image;ht?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Ct.width,Ct.height,k,J,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,it,Ct.width,Ct.height,0,k,J,Ct.data)}}else{ht?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,k,J,Mt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,it,k,J,Mt[Z]);for(let ut=0;ut<G.length;ut++){const mt=G[ut];ht?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,k,J,mt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,it,k,J,mt.image[Z])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),tt.__version=st.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Rt(A,S,z,et,st,tt){const Ut=s.convert(z.format,z.colorSpace),St=s.convert(z.type),At=b(z.internalFormat,Ut,St,z.colorSpace),ee=n.get(S),Q=n.get(z);if(Q.__renderTarget=S,!ee.__hasExternalTextures){const Mt=Math.max(1,S.width>>tt),kt=Math.max(1,S.height>>tt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,tt,At,Mt,kt,S.depth,0,Ut,St,null):e.texImage2D(st,tt,At,Mt,kt,0,Ut,St,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Xt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,st,Q.__webglTexture,0,pt(S)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,st,Q.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(A,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const et=S.depthTexture,st=et&&et.isDepthTexture?et.type:null,tt=v(S.stencilBuffer,st),Ut=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=pt(S);Xt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,tt,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,tt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,A)}else{const et=S.textures;for(let st=0;st<et.length;st++){const tt=et[st],Ut=s.convert(tt.format,tt.colorSpace),St=s.convert(tt.type),At=b(tt.internalFormat,Ut,St,tt.colorSpace),ee=pt(S);z&&Xt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,At,S.width,S.height):Xt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,At,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,At,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(S.depthTexture);et.__renderTarget=S,(!et.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),nt(S.depthTexture,0);const st=et.__webglTexture,tt=pt(S);if(S.depthTexture.format===1026)Xt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(S.depthTexture.format===1027)Xt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Wt(A){const S=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const et=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),et){const st=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,et.removeEventListener("dispose",st)};et.addEventListener("dispose",st),S.__depthDisposeCallback=st}S.__boundDepthTexture=et}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Bt(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]===void 0)S.__webglDepthbuffer[et]=i.createRenderbuffer(),gt(S.__webglDepthbuffer[et],A,!1);else{const st=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),gt(S.__webglDepthbuffer,A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(A,S,z){const et=n.get(A);S!==void 0&&Rt(et.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Wt(A)}function yt(A){const S=A.texture,z=n.get(A),et=n.get(S);A.addEventListener("dispose",C);const st=A.textures,tt=A.isWebGLCubeRenderTarget===!0,Ut=st.length>1;if(Ut||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=S.version,a.memory.textures++),tt){z.__webglFramebuffer=[];for(let St=0;St<6;St++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[St]=[];for(let At=0;At<S.mipmaps.length;At++)z.__webglFramebuffer[St][At]=i.createFramebuffer()}else z.__webglFramebuffer[St]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let St=0;St<S.mipmaps.length;St++)z.__webglFramebuffer[St]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let St=0,At=st.length;St<At;St++){const ee=n.get(st[St]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Xt(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let St=0;St<st.length;St++){const At=st[St];z.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[St]);const ee=s.convert(At.format,At.colorSpace),Q=s.convert(At.type),Mt=b(At.internalFormat,ee,Q,At.colorSpace,A.isXRRenderTarget===!0),kt=pt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,z.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),zt(i.TEXTURE_CUBE_MAP,S);for(let St=0;St<6;St++)if(S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)Rt(z.__webglFramebuffer[St][At],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,At);else Rt(z.__webglFramebuffer[St],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);m(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let St=0,At=st.length;St<At;St++){const ee=st[St],Q=n.get(ee);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),zt(i.TEXTURE_2D,ee),Rt(z.__webglFramebuffer,A,ee,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),m(ee)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let St=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(St=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,et.__webglTexture),zt(St,S),S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)Rt(z.__webglFramebuffer[At],A,S,i.COLOR_ATTACHMENT0,St,At);else Rt(z.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,St,0);m(S)&&d(St),e.unbindTexture()}A.depthBuffer&&Wt(A)}function Jt(A){const S=A.textures;for(let z=0,et=S.length;z<et;z++){const st=S[z];if(m(st)){const tt=M(A),Ut=n.get(st).__webglTexture;e.bindTexture(tt,Ut),d(tt),e.unbindTexture()}}}const se=[],N=[];function Ee(A){if(A.samples>0){if(Xt(A)===!1){const S=A.textures,z=A.width,et=A.height;let st=i.COLOR_BUFFER_BIT;const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(A),St=S.length>1;if(St)for(let At=0;At<S.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let At=0;At<S.length;At++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),St){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[At]);const ee=n.get(S[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,z,et,0,0,z,et,st,i.NEAREST),o===!0&&(se.length=0,N.length=0,se.push(i.COLOR_ATTACHMENT0+At),A.depthBuffer&&A.resolveDepthBuffer===!1&&(se.push(tt),N.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let At=0;At<S.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[At]);const ee=n.get(S[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&o){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function pt(A){return Math.min(r.maxSamples,A.samples)}function Xt(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ft(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function ue(A,S){const z=A.colorSpace,et=A.format,st=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==xi&&z!==Ln&&(he.getTransfer(z)===Me?(et!==1023||st!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Ot(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=X,this.setTexture2D=nt,this.setTexture2DArray=K,this.setTexture3D=D,this.setTextureCube=j,this.rebindTextures=wt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Xt}function Id(i,t){function e(n,r=Ln){let s;const a=he.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===36492)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Nd extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class de extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fd={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const l=this._targetRay,o=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Fd)))}return l!==null&&(l.visible=r!==null),o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Od=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zd=`
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

}`;class kd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new We,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Jn({vertexShader:Od,fragmentShader:zd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bd extends vi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,l="local-floor",o=1,c=null,h=null,f=null,u=null,p=null,g=null;const x=new kd,m=e.getContextAttributes();let d=null,M=null;const b=[],v=[],O=new Tt;let w=null;const C=new nn;C.viewport=new Te;const U=new nn;U.viewport=new Te;const T=[C,U],_=new Nd;let L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ct=b[$];return ct===void 0&&(ct=new fa,b[$]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function($){let ct=b[$];return ct===void 0&&(ct=new fa,b[$]=ct),ct.getGripSpace()},this.getHand=function($){let ct=b[$];return ct===void 0&&(ct=new fa,b[$]=ct),ct.getHandSpace()};function B($){const ct=v.indexOf($.inputSource);if(ct===-1)return;const Rt=b[ct];Rt!==void 0&&(Rt.update($.inputSource,$.frame,c||a),Rt.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",nt);for(let $=0;$<b.length;$++){const ct=v[$];ct!==null&&(v[$]=null,b[$].disconnect(ct))}L=null,X=null,x.reset(),t.setRenderTarget(d),p=null,u=null,f=null,r=null,M=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",nt),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(O),r.renderState.layers===void 0){const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ni(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,Rt=null,gt=null;m.depth&&(gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?1027:1026,Rt=m.stencil?1020:1014);const Bt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};f=new XRWebGLBinding(r,e),u=f.createProjectionLayer(Bt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new ni(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new Fo(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),c=null,a=await r.requestReferenceSpace(l),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function nt($){for(let ct=0;ct<$.removed.length;ct++){const Rt=$.removed[ct],gt=v.indexOf(Rt);gt>=0&&(v[gt]=null,b[gt].disconnect(Rt))}for(let ct=0;ct<$.added.length;ct++){const Rt=$.added[ct];let gt=v.indexOf(Rt);if(gt===-1){for(let Wt=0;Wt<b.length;Wt++)if(Wt>=v.length){v.push(Rt),gt=Wt;break}else if(v[Wt]===null){v[Wt]=Rt,gt=Wt;break}if(gt===-1)break}const Bt=b[gt];Bt&&Bt.connect(Rt)}}const K=new R,D=new R;function j($,ct,Rt){K.setFromMatrixPosition(ct.matrixWorld),D.setFromMatrixPosition(Rt.matrixWorld);const gt=K.distanceTo(D),Bt=ct.projectionMatrix.elements,Wt=Rt.projectionMatrix.elements,wt=Bt[14]/(Bt[10]-1),yt=Bt[14]/(Bt[10]+1),Jt=(Bt[9]+1)/Bt[5],se=(Bt[9]-1)/Bt[5],N=(Bt[8]-1)/Bt[0],Ee=(Wt[8]+1)/Wt[0],pt=wt*N,Xt=wt*Ee,Ft=gt/(-N+Ee),ue=Ft*-N;if(ct.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ue),$.translateZ(Ft),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Bt[10]===-1)$.projectionMatrix.copy(ct.projectionMatrix),$.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Ot=wt+Ft,A=yt+Ft,S=pt-ue,z=Xt+(gt-ue),et=Jt*yt/A*Ot,st=se*yt/A*Ot;$.projectionMatrix.makePerspective(S,z,et,st,Ot,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function xt($,ct){ct===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ct.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ct=$.near,Rt=$.far;x.texture!==null&&(x.depthNear>0&&(ct=x.depthNear),x.depthFar>0&&(Rt=x.depthFar)),_.near=U.near=C.near=ct,_.far=U.far=C.far=Rt,(L!==_.near||X!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),L=_.near,X=_.far),C.layers.mask=$.layers.mask|2,U.layers.mask=$.layers.mask|4,_.layers.mask=C.layers.mask|U.layers.mask;const gt=$.parent,Bt=_.cameras;xt(_,gt);for(let Wt=0;Wt<Bt.length;Wt++)xt(Bt[Wt],gt);Bt.length===2?j(_,C,U):_.projectionMatrix.copy(C.projectionMatrix),Et($,_,gt)};function Et($,ct,Rt){Rt===null?$.matrix.copy(ct.matrixWorld):($.matrix.copy(Rt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ct.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ct.projectionMatrix),$.projectionMatrixInverse.copy(ct.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Us*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&p===null))return o},this.setFoveation=function($){o=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let Nt=null;function zt($,ct){if(h=ct.getViewerPose(c||a),g=ct,h!==null){const Rt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let gt=!1;Rt.length!==_.cameras.length&&(_.cameras.length=0,gt=!0);for(let Wt=0;Wt<Rt.length;Wt++){const wt=Rt[Wt];let yt=null;if(p!==null)yt=p.getViewport(wt);else{const se=f.getViewSubImage(u,wt);yt=se.viewport,Wt===0&&(t.setRenderTargetTextures(M,se.colorTexture,u.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(M))}let Jt=T[Wt];Jt===void 0&&(Jt=new nn,Jt.layers.enable(Wt),Jt.viewport=new Te,T[Wt]=Jt),Jt.matrix.fromArray(wt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(wt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(yt.x,yt.y,yt.width,yt.height),Wt===0&&(_.matrix.copy(Jt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),gt===!0&&_.cameras.push(Jt)}const Bt=r.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){const Wt=f.getDepthInformation(Rt[0]);Wt&&Wt.isValid&&Wt.texture&&x.init(t,Wt,r.renderState)}}for(let Rt=0;Rt<b.length;Rt++){const gt=v[Rt],Bt=b[Rt];gt!==null&&Bt!==void 0&&Bt.update(gt,ct,c||a)}Nt&&Nt($,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}const ce=new wo;ce.setAnimationLoop(zt),this.setAnimationLoop=function($){Nt=$},this.dispose=function(){}}}const hi=new _n,Vd=new Se;function Hd(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Mo(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,b,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?o(m,d,M,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===1&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===1&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),b=M.envMap,v=M.envMapRotation;b&&(m.envMap.value=b,hi.copy(v),hi.x*=-1,hi.y*=-1,hi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Vd.makeRotationFromEuler(hi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function o(m,d,M,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===1&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Wd(i,t,e,n){let r={},s={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(M,b){const v=b.program;n.uniformBlockBinding(M,v)}function c(M,b){let v=r[M.id];v===void 0&&(g(M),v=h(M),r[M.id]=v,M.addEventListener("dispose",m));const O=b.program;n.updateUBOMapping(M,O);const w=t.render.frame;s[M.id]!==w&&(u(M),s[M.id]=w)}function h(M){const b=f();M.__bindingPointIndex=b;const v=i.createBuffer(),O=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,O,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function f(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const b=r[M.id],v=M.uniforms,O=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,C=v.length;w<C;w++){const U=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,_=U.length;T<_;T++){const L=U[T];if(p(L,w,T,O)===!0){const X=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let nt=0;nt<B.length;nt++){const K=B[nt],D=x(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,X+Y,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,Y),Y+=D.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,b,v,O){const w=M.value,C=b+"_"+v;if(O[C]===void 0)return typeof w=="number"||typeof w=="boolean"?O[C]=w:O[C]=w.clone(),!0;{const U=O[C];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return O[C]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(M){const b=M.uniforms;let v=0;const O=16;for(let C=0,U=b.length;C<U;C++){const T=Array.isArray(b[C])?b[C]:[b[C]];for(let _=0,L=T.length;_<L;_++){const X=T[_],B=Array.isArray(X.value)?X.value:[X.value];for(let Y=0,nt=B.length;Y<nt;Y++){const K=B[Y],D=x(K),j=v%O,xt=j%D.boundary,Et=j+xt;v+=xt,Et!==0&&O-Et<D.storage&&(v+=O-Et),X.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=v,v+=D.storage}}}const w=v%O;return w>0&&(v+=O-w),M.__size=v,M.__cache={},this}function x(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:o,update:c,dispose:d}}class Gd{constructor(t={}){const{canvas:e=fc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=0,this.toneMappingExposure=1;const v=this;let O=!1,w=0,C=0,U=null,T=-1,_=null;const L=new Te,X=new Te;let B=null;const Y=new Kt(0);let nt=0,K=e.width,D=e.height,j=1,xt=null,Et=null;const Nt=new Te(0,0,K,D),zt=new Te(0,0,K,D);let ce=!1;const $=new na;let ct=!1,Rt=!1;const gt=new Se,Bt=new Se,Wt=new R,wt=new Te,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function se(){return U===null?j:1}let N=n;function Ee(y,F){return e.getContext(y,F)}try{const y={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ps}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",mt,!1),N===null){const F="webgl2";if(N=Ee(F,y),N===null)throw Ee(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let pt,Xt,Ft,ue,Ot,A,S,z,et,st,tt,Ut,St,At,ee,Q,Mt,kt,k,J,it,ht,ot,P;function dt(){pt=new Jf(N),pt.init(),ht=new Id(N,pt),Xt=new Wf(N,pt,t,ht),Ft=new Ld(N,pt),Xt.reverseDepthBuffer&&u&&Ft.buffers.depth.setReversed(!0),ue=new Qf(N),Ot=new gd,A=new Dd(N,pt,Ft,Ot,Xt,ht,ue),S=new Xf(v),z=new Zf(v),et=new zc(N),ot=new Vf(N,et),st=new Yf(N,et,ue,ot),tt=new th(N,st,et,ue),k=new $f(N,Xt,A),Q=new Gf(Ot),Ut=new md(v,S,z,pt,Xt,ot,Q),St=new Hd(v,Ot),At=new vd,ee=new Td(pt),kt=new Bf(v,S,z,Ft,tt,p,o),Mt=new Cd(v,tt,Xt),P=new Wd(N,ue,Xt,Ft),J=new Hf(N,pt,ue),it=new Kf(N,pt,ue),ue.programs=Ut.programs,v.capabilities=Xt,v.extensions=pt,v.properties=Ot,v.renderLists=At,v.shadowMap=Mt,v.state=Ft,v.info=ue}dt();const G=new Bd(v,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=pt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=pt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(y){y!==void 0&&(j=y,this.setSize(K,D,!1))},this.getSize=function(y){return y.set(K,D)},this.setSize=function(y,F,H=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,D=F,e.width=Math.floor(y*j),e.height=Math.floor(F*j),H===!0&&(e.style.width=y+"px",e.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(K*j,D*j).floor()},this.setDrawingBufferSize=function(y,F,H){K=y,D=F,j=H,e.width=Math.floor(y*H),e.height=Math.floor(F*H),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(Nt)},this.setViewport=function(y,F,H,W){y.isVector4?Nt.set(y.x,y.y,y.z,y.w):Nt.set(y,F,H,W),Ft.viewport(L.copy(Nt).multiplyScalar(j).round())},this.getScissor=function(y){return y.copy(zt)},this.setScissor=function(y,F,H,W){y.isVector4?zt.set(y.x,y.y,y.z,y.w):zt.set(y,F,H,W),Ft.scissor(X.copy(zt).multiplyScalar(j).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(y){Ft.setScissorTest(ce=y)},this.setOpaqueSort=function(y){xt=y},this.setTransparentSort=function(y){Et=y},this.getClearColor=function(y){return y.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(y=!0,F=!0,H=!0){let W=0;if(y){let I=!1;if(U!==null){const lt=U.texture.format;I=lt===1033||lt===1031||lt===1029}if(I){const lt=U.texture.type,bt=lt===1009||lt===1014||lt===1012||lt===1020||lt===1017||lt===1018,Lt=kt.getClearColor(),Dt=kt.getClearAlpha(),Ht=Lt.r,Zt=Lt.g,Pt=Lt.b;bt?(g[0]=Ht,g[1]=Zt,g[2]=Pt,g[3]=Dt,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=Ht,x[1]=Zt,x[2]=Pt,x[3]=Dt,N.clearBufferiv(N.COLOR,0,x))}else W|=N.COLOR_BUFFER_BIT}F&&(W|=N.DEPTH_BUFFER_BIT),H&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),At.dispose(),ee.dispose(),Ot.dispose(),S.dispose(),z.dispose(),tt.dispose(),ot.dispose(),P.dispose(),Ut.dispose(),G.dispose(),G.removeEventListener("sessionstart",ws),G.removeEventListener("sessionend",mi),Bn.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const y=ue.autoReset,F=Mt.enabled,H=Mt.autoUpdate,W=Mt.needsUpdate,I=Mt.type;dt(),ue.autoReset=y,Mt.enabled=F,Mt.autoUpdate=H,Mt.needsUpdate=W,Mt.type=I}function mt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ct(y){const F=y.target;F.removeEventListener("dispose",Ct),ae(F)}function ae(y){ze(y),Ot.remove(y)}function ze(y){const F=Ot.get(y).programs;F!==void 0&&(F.forEach(function(H){Ut.releaseProgram(H)}),y.isShaderMaterial&&Ut.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,H,W,I,lt){F===null&&(F=yt);const bt=I.isMesh&&I.matrixWorld.determinant()<0,Lt=Rs(y,F,H,W,I);Ft.setMaterial(W,bt);let Dt=H.index,Ht=1;if(W.wireframe===!0){if(Dt=st.getWireframeAttribute(H),Dt===void 0)return;Ht=2}const Zt=H.drawRange,Pt=H.attributes.position;let ie=Zt.start*Ht,_e=(Zt.start+Zt.count)*Ht;lt!==null&&(ie=Math.max(ie,lt.start*Ht),_e=Math.min(_e,(lt.start+lt.count)*Ht)),Dt!==null?(ie=Math.max(ie,0),_e=Math.min(_e,Dt.count)):Pt!=null&&(ie=Math.max(ie,0),_e=Math.min(_e,Pt.count));const pe=_e-ie;if(pe<0||pe===1/0)return;ot.setup(I,W,Lt,H,Dt);let Je,oe=J;if(Dt!==null&&(Je=et.get(Dt),oe=it,oe.setIndex(Je)),I.isMesh)W.wireframe===!0?(Ft.setLineWidth(W.wireframeLinewidth*se()),oe.setMode(N.LINES)):oe.setMode(N.TRIANGLES);else if(I.isLine){let It=W.linewidth;It===void 0&&(It=1),Ft.setLineWidth(It*se()),I.isLineSegments?oe.setMode(N.LINES):I.isLineLoop?oe.setMode(N.LINE_LOOP):oe.setMode(N.LINE_STRIP)}else I.isPoints?oe.setMode(N.POINTS):I.isSprite&&oe.setMode(N.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)oe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))oe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const It=I._multiDrawStarts,Tn=I._multiDrawCounts,me=I._multiDrawCount,hn=Dt?et.get(Dt).bytesPerElement:1,ei=Ot.get(W).currentProgram.getUniforms();for(let Ye=0;Ye<me;Ye++)ei.setValue(N,"_gl_DrawID",Ye),oe.render(It[Ye]/hn,Tn[Ye])}else if(I.isInstancedMesh)oe.renderInstances(ie,pe,I.count);else if(H.isInstancedBufferGeometry){const It=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Tn=Math.min(H.instanceCount,It);oe.renderInstances(ie,pe,Tn)}else oe.render(ie,pe)};function fe(y,F,H){y.transparent===!0&&y.side===2&&y.forceSinglePass===!1?(y.side=1,y.needsUpdate=!0,fn(y,F,H),y.side=0,y.needsUpdate=!0,fn(y,F,H),y.side=2):fn(y,F,H)}this.compile=function(y,F,H=null){H===null&&(H=y),d=ee.get(H),d.init(F),b.push(d),H.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),y!==H&&y.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();const W=new Set;return y.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const lt=I.material;if(lt)if(Array.isArray(lt))for(let bt=0;bt<lt.length;bt++){const Lt=lt[bt];fe(Lt,H,I),W.add(Lt)}else fe(lt,H,I),W.add(lt)}),b.pop(),d=null,W},this.compileAsync=function(y,F,H=null){const W=this.compile(y,F,H);return new Promise(I=>{function lt(){if(W.forEach(function(bt){Ot.get(bt).currentProgram.isReady()&&W.delete(bt)}),W.size===0){I(y);return}setTimeout(lt,10)}pt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Ze=null;function Mn(y){Ze&&Ze(y)}function ws(){Bn.stop()}function mi(){Bn.start()}const Bn=new wo;Bn.setAnimationLoop(Mn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(y){Ze=y,G.setAnimationLoop(y),y===null?Bn.stop():Bn.start()},G.addEventListener("sessionstart",ws),G.addEventListener("sessionend",mi),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(F),F=G.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,F,U),d=ee.get(y,b.length),d.init(F),b.push(d),Bt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(Bt),Rt=this.localClippingEnabled,ct=Q.init(this.clippingPlanes,Rt),m=At.get(y,M.length),m.init(),M.push(m),G.enabled===!0&&G.isPresenting===!0){const lt=v.xr.getDepthSensingMesh();lt!==null&&Zi(lt,F,-1/0,v.sortObjects)}Zi(y,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(xt,Et),Jt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Jt&&kt.addToRenderList(m,y),this.info.render.frame++,ct===!0&&Q.beginShadows();const H=d.state.shadowsArray;Mt.render(H,y,F),ct===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,I=m.transmissive;if(d.setupLights(),F.isArrayCamera){const lt=F.cameras;if(I.length>0)for(let bt=0,Lt=lt.length;bt<Lt;bt++){const Dt=lt[bt];Tr(W,I,y,Dt)}Jt&&kt.render(y);for(let bt=0,Lt=lt.length;bt<Lt;bt++){const Dt=lt[bt];Vn(m,y,Dt,Dt.viewport)}}else I.length>0&&Tr(W,I,y,F),Jt&&kt.render(y),Vn(m,y,F);U!==null&&(A.updateMultisampleRenderTarget(U),A.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(v,y,F),ot.resetDefaultState(),T=-1,_=null,b.pop(),b.length>0?(d=b[b.length-1],ct===!0&&Q.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Zi(y,F,H,W){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||$.intersectsSprite(y)){W&&wt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Bt);const bt=tt.update(y),Lt=y.material;Lt.visible&&m.push(y,bt,Lt,H,wt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||$.intersectsObject(y))){const bt=tt.update(y),Lt=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),wt.copy(y.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),wt.copy(bt.boundingSphere.center)),wt.applyMatrix4(y.matrixWorld).applyMatrix4(Bt)),Array.isArray(Lt)){const Dt=bt.groups;for(let Ht=0,Zt=Dt.length;Ht<Zt;Ht++){const Pt=Dt[Ht],ie=Lt[Pt.materialIndex];ie&&ie.visible&&m.push(y,bt,ie,H,wt.z,Pt)}}else Lt.visible&&m.push(y,bt,Lt,H,wt.z,null)}}const lt=y.children;for(let bt=0,Lt=lt.length;bt<Lt;bt++)Zi(lt[bt],F,H,W)}function Vn(y,F,H,W){const I=y.opaque,lt=y.transmissive,bt=y.transparent;d.setupLightsView(H),ct===!0&&Q.setGlobalState(v.clippingPlanes,H),W&&Ft.viewport(L.copy(W)),I.length>0&&xe(I,F,H),lt.length>0&&xe(lt,F,H),bt.length>0&&xe(bt,F,H),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Tr(y,F,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new ni(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const lt=d.state.transmissionRenderTarget[W.id],bt=W.viewport||L;lt.setSize(bt.z,bt.w);const Lt=v.getRenderTarget();v.setRenderTarget(lt),v.getClearColor(Y),nt=v.getClearAlpha(),nt<1&&v.setClearColor(16777215,.5),v.clear(),Jt&&kt.render(H);const Dt=v.toneMapping;v.toneMapping=0;const Ht=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),ct===!0&&Q.setGlobalState(v.clippingPlanes,W),xe(y,H,W),A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Pt=0,ie=F.length;Pt<ie;Pt++){const _e=F[Pt],pe=_e.object,Je=_e.geometry,oe=_e.material,It=_e.group;if(oe.side===2&&pe.layers.test(W.layers)){const Tn=oe.side;oe.side=1,oe.needsUpdate=!0,Ar(pe,H,W,Je,oe,It),oe.side=Tn,oe.needsUpdate=!0,Zt=!0}}Zt===!0&&(A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt))}v.setRenderTarget(Lt),v.setClearColor(Y,nt),Ht!==void 0&&(W.viewport=Ht),v.toneMapping=Dt}function xe(y,F,H){const W=F.isScene===!0?F.overrideMaterial:null;for(let I=0,lt=y.length;I<lt;I++){const bt=y[I],Lt=bt.object,Dt=bt.geometry,Ht=W===null?bt.material:W,Zt=bt.group;Lt.layers.test(H.layers)&&Ar(Lt,F,H,Dt,Ht,Zt)}}function Ar(y,F,H,W,I,lt){y.onBeforeRender(v,F,H,W,I,lt),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),I.onBeforeRender(v,F,H,W,y,lt),I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=1,I.needsUpdate=!0,v.renderBufferDirect(H,F,W,I,y,lt),I.side=0,I.needsUpdate=!0,v.renderBufferDirect(H,F,W,I,y,lt),I.side=2):v.renderBufferDirect(H,F,W,I,y,lt),y.onAfterRender(v,F,H,W,I,lt)}function fn(y,F,H){F.isScene!==!0&&(F=yt);const W=Ot.get(y),I=d.state.lights,lt=d.state.shadowsArray,bt=I.state.version,Lt=Ut.getParameters(y,I.state,lt,F,H),Dt=Ut.getProgramCacheKey(Lt);let Ht=W.programs;W.environment=y.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(y.isMeshStandardMaterial?z:S).get(y.envMap||W.environment),W.envMapRotation=W.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Ht===void 0&&(y.addEventListener("dispose",Ct),Ht=new Map,W.programs=Ht);let Zt=Ht.get(Dt);if(Zt!==void 0){if(W.currentProgram===Zt&&W.lightsStateVersion===bt)return ti(y,Lt),Zt}else Lt.uniforms=Ut.getUniforms(y),y.onBeforeCompile(Lt,v),Zt=Ut.acquireProgram(Lt,Dt),Ht.set(Dt,Zt),W.uniforms=Lt.uniforms;const Pt=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pt.clippingPlanes=Q.uniform),ti(y,Lt),W.needsLights=Er(y),W.lightsStateVersion=bt,W.needsLights&&(Pt.ambientLightColor.value=I.state.ambient,Pt.lightProbe.value=I.state.probe,Pt.directionalLights.value=I.state.directional,Pt.directionalLightShadows.value=I.state.directionalShadow,Pt.spotLights.value=I.state.spot,Pt.spotLightShadows.value=I.state.spotShadow,Pt.rectAreaLights.value=I.state.rectArea,Pt.ltc_1.value=I.state.rectAreaLTC1,Pt.ltc_2.value=I.state.rectAreaLTC2,Pt.pointLights.value=I.state.point,Pt.pointLightShadows.value=I.state.pointShadow,Pt.hemisphereLights.value=I.state.hemi,Pt.directionalShadowMap.value=I.state.directionalShadowMap,Pt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Pt.spotShadowMap.value=I.state.spotShadowMap,Pt.spotLightMatrix.value=I.state.spotLightMatrix,Pt.spotLightMap.value=I.state.spotLightMap,Pt.pointShadowMap.value=I.state.pointShadowMap,Pt.pointShadowMatrix.value=I.state.pointShadowMatrix),W.currentProgram=Zt,W.uniformsList=null,Zt}function bn(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Yr.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function ti(y,F){const H=Ot.get(y);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Rs(y,F,H,W,I){F.isScene!==!0&&(F=yt),A.resetTextureUnits();const lt=F.fog,bt=W.isMeshStandardMaterial?F.environment:null,Lt=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:xi,Dt=(W.isMeshStandardMaterial?z:S).get(W.envMap||bt),Ht=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Zt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pt=!!H.morphAttributes.position,ie=!!H.morphAttributes.normal,_e=!!H.morphAttributes.color;let pe=0;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(pe=v.toneMapping);const Je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,oe=Je!==void 0?Je.length:0,It=Ot.get(W),Tn=d.state.lights;if(ct===!0&&(Rt===!0||y!==_)){const E=y===_&&W.id===T;Q.setState(W,y,E)}let me=!1;W.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Tn.state.version||It.outputColorSpace!==Lt||I.isBatchedMesh&&It.batching===!1||!I.isBatchedMesh&&It.batching===!0||I.isBatchedMesh&&It.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&It.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&It.instancing===!1||!I.isInstancedMesh&&It.instancing===!0||I.isSkinnedMesh&&It.skinning===!1||!I.isSkinnedMesh&&It.skinning===!0||I.isInstancedMesh&&It.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&It.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&It.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&It.instancingMorph===!1&&I.morphTexture!==null||It.envMap!==Dt||W.fog===!0&&It.fog!==lt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Q.numPlanes||It.numIntersection!==Q.numIntersection)||It.vertexAlphas!==Ht||It.vertexTangents!==Zt||It.morphTargets!==Pt||It.morphNormals!==ie||It.morphColors!==_e||It.toneMapping!==pe||It.morphTargetsCount!==oe)&&(me=!0):(me=!0,It.__version=W.version);let hn=It.currentProgram;me===!0&&(hn=fn(W,F,I));let ei=!1,Ye=!1,xn=!1;const ve=hn.getUniforms(),dn=It.uniforms;if(Ft.useProgram(hn.program)&&(ei=!0,Ye=!0,xn=!0),W.id!==T&&(T=W.id,Ye=!0),ei||_!==y){Ft.buffers.depth.getReversed()?(gt.copy(y.projectionMatrix),dc(gt),pc(gt),ve.setValue(N,"projectionMatrix",gt)):ve.setValue(N,"projectionMatrix",y.projectionMatrix),ve.setValue(N,"viewMatrix",y.matrixWorldInverse);const q=ve.map.cameraPosition;q!==void 0&&q.setValue(N,Wt.setFromMatrixPosition(y.matrixWorld)),Xt.logarithmicDepthBuffer&&ve.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ve.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),_!==y&&(_=y,Ye=!0,xn=!0)}if(I.isSkinnedMesh){ve.setOptional(N,I,"bindMatrix"),ve.setOptional(N,I,"bindMatrixInverse");const E=I.skeleton;E&&(E.boneTexture===null&&E.computeBoneTexture(),ve.setValue(N,"boneTexture",E.boneTexture,A))}I.isBatchedMesh&&(ve.setOptional(N,I,"batchingTexture"),ve.setValue(N,"batchingTexture",I._matricesTexture,A),ve.setOptional(N,I,"batchingIdTexture"),ve.setValue(N,"batchingIdTexture",I._indirectTexture,A),ve.setOptional(N,I,"batchingColorTexture"),I._colorsTexture!==null&&ve.setValue(N,"batchingColorTexture",I._colorsTexture,A));const gi=H.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&k.update(I,H,hn),(Ye||It.receiveShadow!==I.receiveShadow)&&(It.receiveShadow=I.receiveShadow,ve.setValue(N,"receiveShadow",I.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(dn.envMap.value=Dt,dn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(dn.envMapIntensity.value=F.environmentIntensity),Ye&&(ve.setValue(N,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&Re(dn,xn),lt&&W.fog===!0&&St.refreshFogUniforms(dn,lt),St.refreshMaterialUniforms(dn,W,j,D,d.state.transmissionRenderTarget[y.id]),Yr.upload(N,bn(It),dn,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Yr.upload(N,bn(It),dn,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ve.setValue(N,"center",I.center),ve.setValue(N,"modelViewMatrix",I.modelViewMatrix),ve.setValue(N,"normalMatrix",I.normalMatrix),ve.setValue(N,"modelMatrix",I.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const E=W.uniformsGroups;for(let q=0,rt=E.length;q<rt;q++){const at=E[q];P.update(at,hn),P.bind(at,hn)}}return hn}function Re(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Er(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,F,H){Ot.get(y.texture).__webglTexture=F,Ot.get(y.depthTexture).__webglTexture=H;const W=Ot.get(y);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){const H=Ot.get(y);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,H=0){U=y,w=F,C=H;let W=!0,I=null,lt=!1,bt=!1;if(y){const Dt=Ot.get(y);if(Dt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(Dt.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(Dt.__hasExternalTextures)A.rebindTextures(y,Ot.get(y.texture).__webglTexture,Ot.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Pt=y.depthTexture;if(Dt.__boundDepthTexture!==Pt){if(Pt!==null&&Ot.has(Pt)&&(y.width!==Pt.image.width||y.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const Ht=y.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(bt=!0);const Zt=Ot.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Zt[F])?I=Zt[F][H]:I=Zt[F],lt=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?I=Ot.get(y).__webglMultisampledFramebuffer:Array.isArray(Zt)?I=Zt[H]:I=Zt,L.copy(y.viewport),X.copy(y.scissor),B=y.scissorTest}else L.copy(Nt).multiplyScalar(j).floor(),X.copy(zt).multiplyScalar(j).floor(),B=ce;if(Ft.bindFramebuffer(N.FRAMEBUFFER,I)&&W&&Ft.drawBuffers(y,I),Ft.viewport(L),Ft.scissor(X),Ft.setScissorTest(B),lt){const Dt=Ot.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Dt.__webglTexture,H)}else if(bt){const Dt=Ot.get(y.texture),Ht=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dt.__webglTexture,H||0,Ht)}T=-1},this.readRenderTargetPixels=function(y,F,H,W,I,lt,bt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&bt!==void 0&&(Lt=Lt[bt]),Lt){Ft.bindFramebuffer(N.FRAMEBUFFER,Lt);try{const Dt=y.texture,Ht=Dt.format,Zt=Dt.type;if(!Xt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-W&&H>=0&&H<=y.height-I&&N.readPixels(F,H,W,I,ht.convert(Ht),ht.convert(Zt),lt)}finally{const Dt=U!==null?Ot.get(U).__webglFramebuffer:null;Ft.bindFramebuffer(N.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(y,F,H,W,I,lt,bt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&bt!==void 0&&(Lt=Lt[bt]),Lt){const Dt=y.texture,Ht=Dt.format,Zt=Dt.type;if(!Xt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=y.width-W&&H>=0&&H<=y.height-I){Ft.bindFramebuffer(N.FRAMEBUFFER,Lt);const Pt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.bufferData(N.PIXEL_PACK_BUFFER,lt.byteLength,N.STREAM_READ),N.readPixels(F,H,W,I,ht.convert(Ht),ht.convert(Zt),0);const ie=U!==null?Ot.get(U).__webglFramebuffer:null;Ft.bindFramebuffer(N.FRAMEBUFFER,ie);const _e=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await hc(N,_e,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,lt),N.deleteBuffer(Pt),N.deleteSync(_e),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,F=null,H=0){y.isTexture!==!0&&(Ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1]);const W=Math.pow(2,-H),I=Math.floor(y.image.width*W),lt=Math.floor(y.image.height*W),bt=F!==null?F.x:0,Lt=F!==null?F.y:0;A.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,bt,Lt,I,lt),Ft.unbindTexture()},this.copyTextureToTexture=function(y,F,H=null,W=null,I=0){y.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,y=arguments[1],F=arguments[2],I=arguments[3]||0,H=null);let lt,bt,Lt,Dt,Ht,Zt,Pt,ie,_e;const pe=y.isCompressedTexture?y.mipmaps[I]:y.image;H!==null?(lt=H.max.x-H.min.x,bt=H.max.y-H.min.y,Lt=H.isBox3?H.max.z-H.min.z:1,Dt=H.min.x,Ht=H.min.y,Zt=H.isBox3?H.min.z:0):(lt=pe.width,bt=pe.height,Lt=pe.depth||1,Dt=0,Ht=0,Zt=0),W!==null?(Pt=W.x,ie=W.y,_e=W.z):(Pt=0,ie=0,_e=0);const Je=ht.convert(F.format),oe=ht.convert(F.type);let It;F.isData3DTexture?(A.setTexture3D(F,0),It=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),It=N.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),It=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Tn=N.getParameter(N.UNPACK_ROW_LENGTH),me=N.getParameter(N.UNPACK_IMAGE_HEIGHT),hn=N.getParameter(N.UNPACK_SKIP_PIXELS),ei=N.getParameter(N.UNPACK_SKIP_ROWS),Ye=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,pe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Dt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ht),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Zt);const xn=y.isDataArrayTexture||y.isData3DTexture,ve=F.isDataArrayTexture||F.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const dn=Ot.get(y),gi=Ot.get(F),E=Ot.get(dn.__renderTarget),q=Ot.get(gi.__renderTarget);Ft.bindFramebuffer(N.READ_FRAMEBUFFER,E.__webglFramebuffer),Ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let rt=0;rt<Lt;rt++)xn&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.get(y).__webglTexture,I,Zt+rt),y.isDepthTexture?(ve&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.get(F).__webglTexture,I,_e+rt),N.blitFramebuffer(Dt,Ht,lt,bt,Pt,ie,lt,bt,N.DEPTH_BUFFER_BIT,N.NEAREST)):ve?N.copyTexSubImage3D(It,I,Pt,ie,_e+rt,Dt,Ht,lt,bt):N.copyTexSubImage2D(It,I,Pt,ie,_e+rt,Dt,Ht,lt,bt);Ft.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ve?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(It,I,Pt,ie,_e,lt,bt,Lt,Je,oe,pe.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(It,I,Pt,ie,_e,lt,bt,Lt,Je,pe.data):N.texSubImage3D(It,I,Pt,ie,_e,lt,bt,Lt,Je,oe,pe):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,I,Pt,ie,lt,bt,Je,oe,pe.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,I,Pt,ie,pe.width,pe.height,Je,pe.data):N.texSubImage2D(N.TEXTURE_2D,I,Pt,ie,lt,bt,Je,oe,pe);N.pixelStorei(N.UNPACK_ROW_LENGTH,Tn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,me),N.pixelStorei(N.UNPACK_SKIP_PIXELS,hn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ei),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ye),I===0&&F.generateMipmaps&&N.generateMipmap(It),Ft.unbindTexture()},this.copyTextureToTexture3D=function(y,F,H=null,W=null,I=0){return y.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,y=arguments[2],F=arguments[3],I=arguments[4]||0),Ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,H,W,I)},this.initRenderTarget=function(y){Ot.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),Ft.unbindTexture()},this.resetState=function(){w=0,C=0,U=null,Ft.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}class ha{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Kt(t),this.density=e}clone(){return new ha(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sl extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new R;class Qr{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=En(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=En(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=En(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=En(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),r=be(r,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class al extends Zn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Oi;const nr=new R,zi=new R,ki=new R,Bi=new Tt,ir=new Tt,ol=new Se,$r=new R,rr=new R,ts=new R,ll=new Tt,da=new Tt,cl=new Tt;class qd extends Ne{constructor(t=new al){if(super(),this.isSprite=!0,this.type="Sprite",Oi===void 0){Oi=new je;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xd(e,5);Oi.setIndex([0,1,2,0,2,3]),Oi.setAttribute("position",new Qr(n,3,0,!1)),Oi.setAttribute("uv",new Qr(n,2,3,!1))}this.geometry=Oi,this.material=t,this.center=new Tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),ol.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-ki.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;es($r.set(-.5,-.5,0),ki,a,zi,r,s),es(rr.set(.5,-.5,0),ki,a,zi,r,s),es(ts.set(.5,.5,0),ki,a,zi,r,s),ll.set(0,0),da.set(1,0),cl.set(1,1);let l=t.ray.intersectTriangle($r,rr,ts,!1,nr);if(l===null&&(es(rr.set(-.5,.5,0),ki,a,zi,r,s),da.set(0,1),l=t.ray.intersectTriangle($r,ts,rr,!1,nr),l===null))return;const o=t.ray.origin.distanceTo(nr);o<t.near||o>t.far||e.push({distance:o,point:nr.clone(),uv:mn.getInterpolation(nr,$r,rr,ts,ll,da,cl,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function es(i,t,e,n,r,s){Bi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(ir.x=s*Bi.x-r*Bi.y,ir.y=r*Bi.x+s*Bi.y):ir.copy(Bi),i.copy(t),i.x+=ir.x,i.y+=ir.y,i.applyMatrix4(ol)}class jd extends We{constructor(t=null,e=1,n=1,r,s,a,l,o,c=1003,h=1003,f,u){super(null,a,l,o,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul extends en{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Vi=new Se,fl=new Se,ns=[],hl=new ii,Zd=new Se,sr=new te,ar=new Ti;class Jd extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ul(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Zd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),hl.copy(t.boundingBox).applyMatrix4(Vi),this.boundingBox.union(hl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),ar.copy(t.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let l=0;l<n.length;l++)n[l]=r[a+l]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),t.ray.intersectsSphere(ar)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Vi),fl.multiplyMatrices(n,Vi),sr.matrixWorld=fl,sr.raycast(t,ns);for(let a=0,l=ns.length;a<l;a++){const o=ns[a];o.instanceId=s,o.object=this,e.push(o)}ns.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new jd(new Float32Array(r*this.count),r,this.count,1028,1015));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const l=this.geometry.morphTargetsRelative?1:1-a,o=r*t;s[o]=l,s.set(n,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class dl extends Zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const pl=new Se,pa=new Hs,is=new Ti,rs=new R;class Yd extends Ne{constructor(t=new je,e=new dl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(r),is.radius+=s,t.ray.intersectsSphere(is)===!1)return;pl.copy(r).invert(),pa.copy(t.ray).applyMatrix4(pl);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,x=p;g<x;g++){const m=c.getX(g);rs.fromBufferAttribute(f,m),ml(rs,m,o,r,t,e,this)}}else{const u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=u,x=p;g<x;g++)rs.fromBufferAttribute(f,g),ml(rs,g,o,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function ml(i,t,e,n,r,s,a){const l=pa.distanceSqToPoint(i);if(l<e){const o=new R;pa.closestPointToPoint(i,o),o.applyMatrix4(n);const c=r.ray.origin.distanceTo(o);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(l),point:o,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Kd extends We{constructor(t,e,n,r,s,a,l,o,c){super(t,e,n,r,s,a,l,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let l=0,o=s-1,c;for(;l<=o;)if(r=Math.floor(l+(o-l)/2),c=n[r]-a,c<0)l=r+1;else if(c>0)o=r-1;else{o=r;break}if(r=o,n[r]===a)return r/(s-1);const h=n[r],u=n[r+1]-h,p=(a-h)/u;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),l=this.getPoint(s),o=e||(a.isVector2?new Tt:new R);return o.copy(l).sub(a).normalize(),o}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,r=[],s=[],a=[],l=new R,o=new Se;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],l),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),l.crossVectors(r[p-1],r[p]),l.length()>Number.EPSILON){l.normalize();const g=Math.acos(Xe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(o.makeRotationAxis(l,g))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(Xe(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(l.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(o.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ma extends Pn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,l=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=l,this.aRotation=o}getPoint(t,e=new Tt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const l=this.aStartAngle+t*s;let o=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=o-this.aX,p=c-this.aY;o=u*h-p*f+this.aX,c=u*f+p*h+this.aY}return n.set(o,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qd extends ma{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ga(){let i=0,t=0,e=0,n=0;function r(s,a,l,o){i=s,t=l,e=-3*s+3*a-2*l-o,n=2*s-2*a+l+o}return{initCatmullRom:function(s,a,l,o,c){r(a,l,c*(l-s),c*(o-a))},initNonuniformCatmullRom:function(s,a,l,o,c,h,f){let u=(a-s)/c-(l-s)/(c+h)+(l-a)/h,p=(l-a)/h-(o-a)/(h+f)+(o-l)/f;u*=h,p*=h,r(a,l,u,p)},calc:function(s){const a=s*s,l=a*s;return i+t*s+e*a+n*l}}}const ss=new R,xa=new ga,va=new ga,Sa=new ga;class $d extends Pn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new R){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let l=Math.floor(a),o=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:o===0&&l===s-1&&(l=s-2,o=1);let c,h;this.closed||l>0?c=r[(l-1)%s]:(ss.subVectors(r[0],r[1]).add(r[0]),c=ss);const f=r[l%s],u=r[(l+1)%s];if(this.closed||l+2<s?h=r[(l+2)%s]:(ss.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ss),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),xa.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,x,m),va.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,x,m),Sa.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(xa.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),va.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Sa.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(xa.calc(o),va.calc(o),Sa.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new R().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gl(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,l=i*i,o=i*l;return(2*e-2*n+s+a)*o+(-3*e+3*n-2*s-a)*l+s*i+e}function tp(i,t){const e=1-i;return e*e*t}function ep(i,t){return 2*(1-i)*i*t}function np(i,t){return i*i*t}function or(i,t,e,n){return tp(i,t)+ep(i,e)+np(i,n)}function ip(i,t){const e=1-i;return e*e*e*t}function rp(i,t){const e=1-i;return 3*e*e*i*t}function sp(i,t){return 3*(1-i)*i*i*t}function ap(i,t){return i*i*i*t}function lr(i,t,e,n,r){return ip(i,t)+rp(i,e)+sp(i,n)+ap(i,r)}class xl extends Pn{constructor(t=new Tt,e=new Tt,n=new Tt,r=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Tt){const n=e,r=this.v0,s=this.v1,a=this.v2,l=this.v3;return n.set(lr(t,r.x,s.x,a.x,l.x),lr(t,r.y,s.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class op extends Pn{constructor(t=new R,e=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new R){const n=e,r=this.v0,s=this.v1,a=this.v2,l=this.v3;return n.set(lr(t,r.x,s.x,a.x,l.x),lr(t,r.y,s.y,a.y,l.y),lr(t,r.z,s.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vl extends Pn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lp extends Pn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sl extends Pn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(or(t,r.x,s.x,a.x),or(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cp extends Pn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(or(t,r.x,s.x,a.x),or(t,r.y,s.y,a.y),or(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _l extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),l=s-a,o=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(gl(l,o.x,c.x,h.x,f.x),gl(l,o.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Tt().fromArray(r))}return this}}var yl=Object.freeze({__proto__:null,ArcCurve:Qd,CatmullRomCurve3:$d,CubicBezierCurve:xl,CubicBezierCurve3:op,EllipseCurve:ma,LineCurve:vl,LineCurve3:lp,QuadraticBezierCurve:Sl,QuadraticBezierCurve3:cp,SplineCurve:_l});class up extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,l=this.curves[s],o=l.getLength(),c=o===0?0:1-a/o;return l.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,o=a.getPoints(l);for(let c=0;c<o.length;c++){const h=o[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new yl[r.type]().fromJSON(r))}return this}}class Ml extends up{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new vl(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Sl(this.currentPoint.clone(),new Tt(t,e),new Tt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const l=new xl(this.currentPoint.clone(),new Tt(t,e),new Tt(n,r),new Tt(s,a));return this.curves.push(l),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _l(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const l=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+l,e+o,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,l,o){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,a,l,o),this}absellipse(t,e,n,r,s,a,l,o){const c=new ma(t,e,n,r,s,a,l,o);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _a extends je{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],l=[],o=[],c=new R,h=new Tt;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const p=n+f/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),l.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,o.push(h.x,h.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Kn extends je{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:o};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],p=[];let g=0;const x=[],m=n/2;let d=0;M(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ce(f,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(p,2));function M(){const v=new R,O=new R;let w=0;const C=(e-t)/n;for(let U=0;U<=s;U++){const T=[],_=U/s,L=_*(e-t)+t;for(let X=0;X<=r;X++){const B=X/r,Y=B*o+l,nt=Math.sin(Y),K=Math.cos(Y);O.x=L*nt,O.y=-_*n+m,O.z=L*K,f.push(O.x,O.y,O.z),v.set(nt,C,K).normalize(),u.push(v.x,v.y,v.z),p.push(B,1-_),T.push(g++)}x.push(T)}for(let U=0;U<r;U++)for(let T=0;T<s;T++){const _=x[T][U],L=x[T+1][U],X=x[T+1][U+1],B=x[T][U+1];(t>0||T!==0)&&(h.push(_,L,B),w+=3),(e>0||T!==s-1)&&(h.push(L,X,B),w+=3)}c.addGroup(d,w,0),d+=w}function b(v){const O=g,w=new Tt,C=new R;let U=0;const T=v===!0?t:e,_=v===!0?1:-1;for(let X=1;X<=r;X++)f.push(0,m*_,0),u.push(0,_,0),p.push(.5,.5),g++;const L=g;for(let X=0;X<=r;X++){const Y=X/r*o+l,nt=Math.cos(Y),K=Math.sin(Y);C.x=T*K,C.y=m*_,C.z=T*nt,f.push(C.x,C.y,C.z),u.push(0,_,0),w.x=nt*.5+.5,w.y=K*.5*_+.5,p.push(w.x,w.y),g++}for(let X=0;X<r;X++){const B=O+X,Y=L+X;v===!0?h.push(Y,Y+1,B):h.push(Y+1,Y,B),U+=3}c.addGroup(d,U,v===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ya extends Kn{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,l=Math.PI*2){super(0,t,e,n,r,s,a,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:l}}static fromJSON(t){return new ya(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ma extends je{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];l(r),c(n),h(),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(s.slice(),3)),this.setAttribute("uv",new Ce(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(M){const b=new R,v=new R,O=new R;for(let w=0;w<e.length;w+=3)p(e[w+0],b),p(e[w+1],v),p(e[w+2],O),o(b,v,O,M)}function o(M,b,v,O){const w=O+1,C=[];for(let U=0;U<=w;U++){C[U]=[];const T=M.clone().lerp(v,U/w),_=b.clone().lerp(v,U/w),L=w-U;for(let X=0;X<=L;X++)X===0&&U===w?C[U][X]=T:C[U][X]=T.clone().lerp(_,X/L)}for(let U=0;U<w;U++)for(let T=0;T<2*(w-U)-1;T++){const _=Math.floor(T/2);T%2===0?(u(C[U][_+1]),u(C[U+1][_]),u(C[U][_])):(u(C[U][_+1]),u(C[U+1][_+1]),u(C[U+1][_]))}}function c(M){const b=new R;for(let v=0;v<s.length;v+=3)b.x=s[v+0],b.y=s[v+1],b.z=s[v+2],b.normalize().multiplyScalar(M),s[v+0]=b.x,s[v+1]=b.y,s[v+2]=b.z}function h(){const M=new R;for(let b=0;b<s.length;b+=3){M.x=s[b+0],M.y=s[b+1],M.z=s[b+2];const v=m(M)/2/Math.PI+.5,O=d(M)/Math.PI+.5;a.push(v,1-O)}g(),f()}function f(){for(let M=0;M<a.length;M+=6){const b=a[M+0],v=a[M+2],O=a[M+4],w=Math.max(b,v,O),C=Math.min(b,v,O);w>.9&&C<.1&&(b<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),O<.2&&(a[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function p(M,b){const v=M*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function g(){const M=new R,b=new R,v=new R,O=new R,w=new Tt,C=new Tt,U=new Tt;for(let T=0,_=0;T<s.length;T+=9,_+=6){M.set(s[T+0],s[T+1],s[T+2]),b.set(s[T+3],s[T+4],s[T+5]),v.set(s[T+6],s[T+7],s[T+8]),w.set(a[_+0],a[_+1]),C.set(a[_+2],a[_+3]),U.set(a[_+4],a[_+5]),O.copy(M).add(b).add(v).divideScalar(3);const L=m(O);x(w,_+0,M,L),x(C,_+2,b,L),x(U,_+4,v,L)}}function x(M,b,v,O){O<0&&M.x===1&&(a[b]=M.x-1),v.x===0&&v.z===0&&(a[b]=O/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.vertices,t.indices,t.radius,t.details)}}class ba extends Ml{constructor(t){super(t),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Ml().fromJSON(r))}return this}}const fp={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=bl(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let l,o,c,h,f,u,p;if(n&&(s=gp(i,t,s,e)),i.length>80*e){l=c=i[0],o=h=i[1];for(let g=e;g<r;g+=e)f=i[g],u=i[g+1],f<l&&(l=f),u<o&&(o=u),f>c&&(c=f),u>h&&(h=u);p=Math.max(c-l,h-o),p=p!==0?32767/p:0}return cr(s,a,e,l,o,p,0),a}};function bl(i,t,e,n,r){let s,a;if(r===wp(i,t,e,n)>0)for(s=t;s<e;s+=n)a=El(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=El(s,i[s],i[s+1],a);return a&&as(a,a.next)&&(fr(a),a=a.next),a}function di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(as(e,e.next)||De(e.prev,e,e.next)===0)){if(fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cr(i,t,e,n,r,s,a){if(!i)return;!a&&s&&yp(i,n,r,s);let l=i,o,c;for(;i.prev!==i.next;){if(o=i.prev,c=i.next,s?dp(i,n,r,s):hp(i)){t.push(o.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),fr(i),i=c.next,l=c.next;continue}if(i=c,i===l){a?a===1?(i=pp(di(i),t,e),cr(i,t,e,n,r,s,2)):a===2&&mp(i,t,e,n,r,s):cr(di(i),t,e,n,r,s,1);break}}}function hp(i){const t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,l=t.y,o=e.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,f=l<o?l<c?l:c:o<c?o:c,u=r>s?r>a?r:a:s>a?s:a,p=l>o?l>c?l:c:o>c?o:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=p&&Hi(r,l,s,o,a,c,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dp(i,t,e,n){const r=i.prev,s=i,a=i.next;if(De(r,s,a)>=0)return!1;const l=r.x,o=s.x,c=a.x,h=r.y,f=s.y,u=a.y,p=l<o?l<c?l:c:o<c?o:c,g=h<f?h<u?h:u:f<u?f:u,x=l>o?l>c?l:c:o>c?o:c,m=h>f?h>u?h:u:f>u?f:u,d=Ta(p,g,t,e,n),M=Ta(x,m,t,e,n);let b=i.prevZ,v=i.nextZ;for(;b&&b.z>=d&&v&&v.z<=M;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=m&&b!==r&&b!==a&&Hi(l,h,o,f,c,u,b.x,b.y)&&De(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Hi(l,h,o,f,c,u,v.x,v.y)&&De(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=d;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=m&&b!==r&&b!==a&&Hi(l,h,o,f,c,u,b.x,b.y)&&De(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=M;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Hi(l,h,o,f,c,u,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function pp(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!as(r,s)&&Tl(r,n,n.next,s)&&ur(r,s)&&ur(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),fr(n),fr(n.next),n=i=s),n=n.next}while(n!==i);return di(n)}function mp(i,t,e,n,r,s){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&Tp(a,l)){let o=Al(a,l);a=di(a,a.next),o=di(o,o.next),cr(a,t,e,n,r,s,0),cr(o,t,e,n,r,s,0);return}l=l.next}a=a.next}while(a!==i)}function gp(i,t,e,n){const r=[];let s,a,l,o,c;for(s=0,a=t.length;s<a;s++)l=t[s]*n,o=s<a-1?t[s+1]*n:i.length,c=bl(i,l,o,n,!1),c===c.next&&(c.steiner=!0),r.push(bp(c));for(r.sort(xp),s=0;s<r.length;s++)e=vp(r[s],e);return e}function xp(i,t){return i.x-t.x}function vp(i,t){const e=Sp(i,t);if(!e)return t;const n=Al(e,i);return di(n,n.next),di(e,e.next)}function Sp(i,t){let e=t,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,r=e.x<e.next.x?e:e.next,u===s))return r}e=e.next}while(e!==t);if(!r)return null;const l=r,o=r.x,c=r.y;let h=1/0,f;e=r;do s>=e.x&&e.x>=o&&s!==e.x&&Hi(a<c?s:n,a,o,c,a<c?n:s,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(s-e.x),ur(e,i)&&(f<h||f===h&&(e.x>r.x||e.x===r.x&&_p(r,e)))&&(r=e,h=f)),e=e.next;while(e!==l);return r}function _p(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function yp(i,t,e,n){let r=i;do r.z===0&&(r.z=Ta(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Mp(r)}function Mp(i){let t,e,n,r,s,a,l,o,c=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,l=0,t=0;t<c&&(l++,n=n.nextZ,!!n);t++);for(o=c;l>0||o>0&&n;)l!==0&&(o===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,l--):(r=n,n=n.nextZ,o--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(a>1);return i}function Ta(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function bp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Hi(i,t,e,n,r,s,a,l){return(r-a)*(t-l)>=(i-a)*(s-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(s-l)>=(r-a)*(n-l)}function Tp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ap(i,t)&&(ur(i,t)&&ur(t,i)&&Ep(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||as(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function as(i,t){return i.x===t.x&&i.y===t.y}function Tl(i,t,e,n){const r=ls(De(i,t,e)),s=ls(De(i,t,n)),a=ls(De(e,n,i)),l=ls(De(e,n,t));return!!(r!==s&&a!==l||r===0&&os(i,e,t)||s===0&&os(i,n,t)||a===0&&os(e,i,n)||l===0&&os(e,t,n))}function os(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ls(i){return i>0?1:i<0?-1:0}function Ap(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Tl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ur(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function Ep(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Al(i,t){const e=new Aa(i.i,i.x,i.y),n=new Aa(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function El(i,t,e,n){const r=new Aa(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Aa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wp(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class hr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return hr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];wl(t),Rl(n,t);let a=t.length;e.forEach(wl);for(let o=0;o<e.length;o++)r.push(a),a+=e[o].length,Rl(n,e[o]);const l=fp.triangulate(n,r);for(let o=0;o<l.length;o+=3)s.push(l.slice(o,o+3));return s}}function wl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Rl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ea extends Ma{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ea(t.radius,t.detail)}}class cs extends je{constructor(t=new ba([new Tt(0,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],a=[];let l=0,o=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(l,o,h),l+=o,o=0;this.setIndex(n),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(s,3)),this.setAttribute("uv",new Ce(a,2));function c(h){const f=r.length/3,u=h.extractPoints(e);let p=u.shape;const g=u.holes;hr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const M=g[m];hr.isClockWise(M)===!0&&(g[m]=M.reverse())}const x=hr.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const M=g[m];p=p.concat(M)}for(let m=0,d=p.length;m<d;m++){const M=p[m];r.push(M.x,M.y,0),s.push(0,0,1),a.push(M.x,M.y)}for(let m=0,d=x.length;m<d;m++){const M=x[m],b=M[0]+f,v=M[1]+f,O=M[2]+f;n.push(b,v,O),o+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Rp(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=e[t.shapes[r]];n.push(a)}return new cs(n,t.curveSegments)}}function Rp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class wa extends je{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const o=Math.min(a+l,Math.PI);let c=0;const h=[],f=new R,u=new R,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){const M=[],b=d/n;let v=0;d===0&&a===0?v=.5/e:d===n&&o===Math.PI&&(v=-.5/e);for(let O=0;O<=e;O++){const w=O/e;f.x=-t*Math.cos(r+w*s)*Math.sin(a+b*l),f.y=t*Math.cos(a+b*l),f.z=t*Math.sin(r+w*s)*Math.sin(a+b*l),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(w+v,1-b),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const b=h[d][M+1],v=h[d][M],O=h[d+1][M],w=h[d+1][M+1];(d!==0||a>0)&&p.push(b,v,w),(d!==n-1||o<Math.PI)&&p.push(v,O,w)}this.setIndex(p),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(x,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wi extends je{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],l=[],o=[],c=[],h=new R,f=new R,u=new R;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(f,h).normalize(),o.push(u.x,u.y,u.z),c.push(g/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,M=(r+1)*p+g;a.push(x,m,M),a.push(m,d,M)}this.setIndex(a),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class on extends Zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cl extends Zn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ra extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Pl extends Ra{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ca=new Se,Ll=new R,Ul=new R;class Dl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new na,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ll),Ul.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ul),e.updateMatrixWorld(),Ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Il=new Se,dr=new R,Pa=new R;class Cp extends Dl{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new Te(2,1,1,1),new Te(0,1,1,1),new Te(3,1,1,1),new Te(1,1,1,1),new Te(3,0,1,1),new Te(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),dr.setFromMatrixPosition(t.matrixWorld),n.position.copy(dr),Pa.copy(n.position),Pa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pa),n.updateMatrixWorld(),r.makeTranslation(-dr.x,-dr.y,-dr.z),Il.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il)}}class Nl extends Ra{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Cp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Pp extends Dl{constructor(){super(new Ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lp extends Ra{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Pp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Fl=new Se;class Up{constructor(t,e,n=0,r=1/0){this.ray=new Hs(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fl),this}intersectObject(t,e=!0,n=[]){return La(t,this,n,e),n.sort(Ol),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)La(t[r],this,n,e);return n.sort(Ol),n}}function Ol(i,t){return i.distance-t.distance}function La(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,l=s.length;a<l;a++)La(s[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ps}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ps);const Dp="data:image/jpeg;base64,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",Ip="data:image/jpeg;base64,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";function Le(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ne(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}let Ua=4;function Np(i){Ua=i}function jt(i,t={}){const e=new Kd(i);return e.colorSpace=t.linear?Ln:Ke,e.anisotropy=Ua,t.repeat&&(e.wrapS=e.wrapT=t.mirror?1002:1e3,e.repeat.set(t.repeat[0],t.repeat[1])),e}function zl(i,t={}){const e=new We,n=new Image;return n.onload=()=>{e.image=n,e.needsUpdate=!0},n.src=i,e.colorSpace=Ke,e.anisotropy=Ua,t.repeat&&(e.wrapS=e.wrapT=t.mirror?1002:1e3,e.repeat.set(t.repeat[0],t.repeat[1])),e}function tn(i,t,e,n,r,s=1){const a=i.getImageData(0,0,t,e),l=a.data;for(let o=0;o<l.length;o+=4){const c=(r()-.5)*n;l[o]+=c,l[o+1]+=c,l[o+2]+=c}i.putImageData(a,0,0)}function kl(i=1,t=[62,58,56],e=!1){const n=ne(512,512),r=n.getContext("2d"),s=Le(i);r.fillStyle="#1b1a19",r.fillRect(0,0,512,512);const a=64,l=32;for(let o=0;o<16;o++){const c=o%2*(a/2);for(let h=-1;h<9;h++){const f=(s()-.5)*26,u=e?1.5:1;r.fillStyle=`rgb(${(t[0]+f)*u},${(t[1]+f)*u},${(t[2]+f*.9)*u})`,r.fillRect(h*a+c+2,o*l+2,a-4,l-4),r.fillStyle="rgba(255,255,255,.07)",r.fillRect(h*a+c+2,o*l+2,a-4,3),r.fillStyle="rgba(0,0,0,.22)",r.fillRect(h*a+c+2,o*l+l-6,a-4,4)}}return tn(r,512,512,22,s),n}function Fp(i=2){const t=ne(512,512),e=t.getContext("2d"),n=Le(i);e.fillStyle="#2a241f",e.fillRect(0,0,512,512);const r=8,s=512/r;for(let a=0;a<r;a++)for(let l=0;l<r;l++){const o=(n()-.5)*30;e.fillStyle=`rgb(${96+o},${84+o},${72+o})`,e.beginPath(),e.roundRect(l*s+3,a*s+3,s-6,s-6,8),e.fill(),e.fillStyle="rgba(255,255,255,.07)",e.fillRect(l*s+8,a*s+6,s-18,3)}return tn(e,512,512,18,n),t}function Op(i=3){const t=ne(512,512),e=t.getContext("2d"),n=Le(i);e.fillStyle="#1a1c22",e.fillRect(0,0,512,512),tn(e,512,512,30,n);for(let r=0;r<60;r++)e.strokeStyle="rgba(0,0,0,.25)",e.lineWidth=1,e.beginPath(),e.moveTo(n()*512,n()*512),e.lineTo(n()*512,n()*512),e.stroke();return t}function Bl(i=4,t=70){const e=ne(256,256),n=e.getContext("2d"),r=Le(i);n.fillStyle=`rgb(${t},${t},${t+4})`,n.fillRect(0,0,256,256),tn(n,256,256,26,r);for(let s=0;s<12;s++)n.fillStyle=`rgba(0,0,0,${.05+r()*.08})`,n.beginPath(),n.ellipse(r()*256,r()*256,10+r()*40,8+r()*24,r()*3,0,7),n.fill();return e}function zp(){const i=ne(256,256),t=i.getContext("2d"),e=Le(9);for(let n=0;n<32;n++){const r=t.createLinearGradient(n*8,0,n*8+8,0);r.addColorStop(0,"#050506"),r.addColorStop(.5,"#1c1c20"),r.addColorStop(1,"#050506"),t.fillStyle=r,t.fillRect(n*8,0,8,256)}return tn(t,256,256,8,e),i}function kp(i=5){const t=ne(256,256),e=t.getContext("2d"),n=Le(i);e.fillStyle="#0d1f45",e.fillRect(0,0,256,256),tn(e,256,256,48,n);for(let r=0;r<1800;r++)e.fillStyle=n()<.5?"rgba(40,80,160,.25)":"rgba(0,0,10,.3)",e.fillRect(n()*256,n()*256,2,2);return t}function Bp(){const i=ne(256,256),t=i.getContext("2d"),e=Le(12);for(let n=0;n<8;n++){const r=(e()-.5)*18;t.fillStyle=`rgb(${72+r},${58+r},${56+r})`,t.fillRect(0,n*32,256,31),t.fillStyle="rgba(0,0,0,.35)",t.fillRect(0,n*32+31,256,1)}return tn(t,256,256,14,e),i}function Vp(){const i=ne(256,256),t=i.getContext("2d");t.fillStyle="#14141a",t.fillRect(0,0,256,256);const e=8,n=256/e;for(let r=0;r<e;r++)for(let s=0;s<e;s++){const a=t.createLinearGradient(s*n,r*n,s*n+n,r*n+n);a.addColorStop(0,"#3a3a44"),a.addColorStop(.5,"#15151a"),a.addColorStop(1,"#050507"),t.fillStyle=a,t.beginPath(),t.moveTo(s*n,r*n+n),t.lineTo(s*n+n/2,r*n),t.lineTo(s*n+n,r*n+n),t.fill(),t.fillStyle="rgba(255,255,255,.07)",t.beginPath(),t.moveTo(s*n+n/2,r*n),t.lineTo(s*n+n,r*n+n),t.lineTo(s*n+n/2,r*n+n),t.fill()}return i}function Hp(i=21){const t=ne(512,512),e=t.getContext("2d"),n=Le(i);e.fillStyle="#d8d3c6",e.fillRect(0,0,512,512);const r=["СВОДКА ДНЯ","ВЕЧЕРНИЙ ВЫПУСК","КРОССВОРД","СЛУШАЛИ — ПОСТАНОВИЛИ","ГОРОДСКИЕ НОВОСТИ","ПОГОДА НА НЕДЕЛЮ","КУЛЬТУРА","СПОРТ","ОБЪЯВЛЕНИЯ"];return[[0,0],[256,0],[0,256],[256,256]].forEach(([a,l],o)=>{e.save(),e.beginPath(),e.rect(a,l,256,256),e.clip(),e.translate(a+128,l+128),e.rotate((n()-.5)*.12),e.translate(-128,-128),e.fillStyle=`rgb(${205+n()*30},${200+n()*28},${186+n()*28})`,e.fillRect(-20,-20,296,296),e.fillStyle="#1b1b1b",e.font="900 24px Georgia, serif",e.fillText(r[(o*2+(n()*5|0))%r.length],8,28),e.fillRect(8,36,240,2);for(let c=0;c<3;c++)for(let h=0;h<20;h++){const f=60+n()*18;e.fillStyle=`rgba(30,30,30,${.45+n()*.25})`,e.fillRect(10+c*80,130+h*6,f,2)}if(e.fillStyle="#6a6760",e.fillRect(10+n()*100,46,90,70),e.fillStyle="#35332f",e.fillRect(110+n()*40,50,70,60),e.fillStyle="#111",e.font="800 14px Georgia, serif",e.fillText("ГРАНД. ВЫХОДНЫЕ.",10,124),n()<.6)for(let c=0;c<7;c++)for(let h=0;h<7;h++)e.strokeStyle="#222",e.lineWidth=.7,e.strokeRect(180+c*10,150+h*10,10,10),n()<.25&&(e.fillStyle="#111",e.fillRect(180+c*10,150+h*10,10,10));e.restore()}),tn(e,512,512,18,n),t}function Vl(i=30,t=10,e=14){const n=ne(256,512),r=n.getContext("2d"),s=Le(i);r.fillStyle="#0c0e14",r.fillRect(0,0,256,512);const a=256/t,l=512/e;for(let o=0;o<e;o++)for(let c=0;c<t;c++){if(s()<.42){const f=s()<.65;r.fillStyle=f?`rgba(255,${190+s()*40|0},${110+s()*40|0},${.55+s()*.4})`:`rgba(180,215,255,${.5+s()*.4})`}else r.fillStyle="rgba(30,36,52,.9)";r.fillRect(c*a+3,o*l+4,a-6,l-8)}return n}function Wp(){const i=ne(128,128),t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),i}function Gp(){const i=ne(256,256),t=i.getContext("2d");t.fillStyle="#e9edf5",t.fillRect(0,0,256,256),t.strokeStyle="rgba(70,75,90,.75)",t.lineWidth=3;const e=14,n=256/e;for(let s=0;s<=e;s++)t.beginPath(),t.moveTo(s*n,0),t.lineTo(s*n,256),t.stroke(),t.beginPath(),t.moveTo(0,s*n),t.lineTo(256,s*n),t.stroke();const r=t.createRadialGradient(128,128,30,128,128,180);return r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(60,70,100,.5)"),t.fillStyle=r,t.fillRect(0,0,256,256),i}function Xp(){const i=ne(128,128),t=i.getContext("2d");t.fillStyle="#7a2a22",t.fillRect(0,0,128,128),t.fillStyle="rgba(230,200,150,.55)";for(let e=0;e<128;e+=16)t.fillRect(e,0,5,128),t.fillRect(0,e,128,5);t.fillStyle="rgba(0,0,0,.25)";for(let e=8;e<128;e+=32)t.fillRect(e,0,8,128);return i}function qp(){const i=ne(256,128),t=i.getContext("2d");t.fillStyle="#c9561d",t.fillRect(0,0,256,128),t.strokeStyle="#1b0f08",t.lineWidth=4;for(let e=0;e<=4;e++)t.beginPath(),t.moveTo(e*64,0),t.lineTo(e*64,128),t.stroke();return t.beginPath(),t.moveTo(0,64),t.lineTo(256,64),t.stroke(),t.beginPath(),t.moveTo(0,32),t.quadraticCurveTo(128,8,256,32),t.stroke(),t.beginPath(),t.moveTo(0,96),t.quadraticCurveTo(128,120,256,96),t.stroke(),i}function jp(){const i=ne(128,128),t=i.getContext("2d"),e=Le(3);t.fillStyle="#6f8f5c",t.fillRect(0,0,128,128);for(let n=0;n<8;n++)for(let r=0;r<4;r++)t.fillStyle=`rgb(${90+e()*40},${130+e()*40},${90+e()*30})`,t.fillRect(r*32+2,n*16+2,28,12),t.fillStyle="rgba(0,0,0,.25)",t.fillRect(r*32+8,n*16+5,16,6);return i}function Zp(){const i=ne(512,256),t=i.getContext("2d"),e=Le(8);t.fillStyle="#10131a",t.fillRect(0,0,512,256),t.fillStyle="#1b2230",t.fillRect(0,0,512,20),t.fillStyle="#6a3fd0",t.fillRect(60,28,380,16);for(let n=0;n<6;n++){t.fillStyle="#181d28",t.fillRect(0,50+n*30,512,28);for(let r=0;r<4;r++){t.fillStyle=e()<.5?"#9be23a":"#4dc3ff";const s=30+e()*90;t.fillRect(70+e()*340,54+n*30,s,20)}}t.fillStyle="#242c3d",t.fillRect(0,236,512,20);for(let n=0;n<40;n++)t.fillStyle="#6cf",t.fillRect(10+n*12,240,6,10);return i}function Jp(){const i=ne(256,256),t=i.getContext("2d"),e=Le(15);t.fillStyle="#6a4a30",t.fillRect(0,0,256,256);for(let n=0;n<90;n++)t.strokeStyle=`rgba(${30+e()*40},${20+e()*20},10,${.15+e()*.25})`,t.lineWidth=1+e()*2,t.beginPath(),t.moveTo(0,e()*256),t.bezierCurveTo(80,e()*256,170,e()*256,256,e()*256),t.stroke();return i}function Yp(){const i=ne(128,128),t=i.getContext("2d"),e=Le(31);return t.fillStyle="#e4dcc4",t.fillRect(0,0,128,128),tn(t,128,128,14,e),i}const Hl='"Rubik Spray Paint", Impact, "Arial Black", sans-serif',pi='Unbounded, Impact, "Arial Black", sans-serif',Kp='"Marck Script", "Segoe Script", cursive';async function Qp(){const t=[["Rubik Spray Paint","../assets/fonts/spray-latin.woff2","U+0000-00FF"],["Rubik Spray Paint","../assets/fonts/spray-cyrillic.woff2","U+0400-04FF"],["Marck Script","../assets/fonts/marck-script.ttf",null]].map(async([n,r,s])=>{try{const a=new FontFace(n,`url(${r})`,s?{unicodeRange:s}:{});await a.load(),document.fonts.add(a)}catch{}}),e=Promise.race([Promise.all(t),new Promise(n=>setTimeout(n,2500))]);try{await e}catch{}try{await Promise.race([document.fonts.load("700 40px Unbounded","REVOLVER Фрунзе"),new Promise(n=>setTimeout(n,1500))])}catch{}}function Ie(i,t=10){i.lineWidth=t,i.lineJoin="round",i.lineCap="round",i.strokeStyle="#0a0a0a",i.stroke()}function us(i,t,e,n,r,s,a,l=.35,o=3){i.save(),i.clip(),i.strokeStyle=`rgba(0,0,0,${l})`,i.lineWidth=o,i.translate(t+n/2,e+r/2),i.rotate(a);const c=Math.max(n,r)*1.2;for(let h=-c;h<c;h+=s)i.beginPath(),i.moveTo(h,-c),i.lineTo(h,c),i.stroke();i.restore()}function Wl(i,t,e,n,r="#d32a22"){i.beginPath(),i.arc(t,e,n,0,7),i.fillStyle="#151515",i.fill(),Ie(i,8),i.strokeStyle="rgba(255,255,255,.18)",i.lineWidth=2;for(let s=.45;s<.97;s+=.07)i.beginPath(),i.arc(t,e,n*s,0,7),i.stroke();i.beginPath(),i.moveTo(t-n*.8,e-n*.2),i.quadraticCurveTo(t,e-n,t+n*.3,e-n*.85),i.strokeStyle="rgba(255,255,255,.25)",i.lineWidth=4,i.stroke(),i.beginPath(),i.arc(t,e,n*.28,0,7),i.fillStyle=r,i.fill(),i.lineWidth=4,i.strokeStyle="#0a0a0a",i.stroke(),i.beginPath(),i.arc(t,e,n*.05,0,7),i.fillStyle="#0a0a0a",i.fill()}function $p(i,t,e,n,r){i.beginPath(),i.roundRect(t,e,n,r,10);const s=i.createLinearGradient(t,e,t+n,e+r);s.addColorStop(0,"#d9d9d9"),s.addColorStop(1,"#6e6e6e"),i.fillStyle=s,i.fill(),Ie(i,8),[[.5,.3,.2],[.5,.7,.28]].forEach(([a,l,o])=>{const c=t+n*a,h=e+r*l,f=Math.min(n,r)*o;i.beginPath(),i.arc(c,h,f,0,7),i.fillStyle="#1d1d1d",i.fill(),Ie(i,6),i.beginPath(),i.arc(c,h,f*.45,0,7),i.fillStyle="#8c8c8c",i.fill(),Ie(i,4)})}function t0(i,t,e,n,r){i.beginPath(),i.roundRect(t,e,n,r,8),i.fillStyle="#efefef",i.fill(),Ie(i,7),i.beginPath(),i.roundRect(t+n*.1,e+r*.2,n*.8,r*.45,6),i.fillStyle="#2a2a2a",i.fill(),Ie(i,4),[.3,.7].forEach(s=>{i.beginPath(),i.arc(t+n*s,e+r*.42,r*.16,0,7),i.fillStyle="#fff",i.fill(),Ie(i,4)})}function fs(i,t,e,n,r=0){i.save(),i.translate(t,e),i.rotate(r),i.fillStyle="#111",i.strokeStyle="#111",i.lineWidth=n*.1,i.beginPath(),i.ellipse(0,n,n*.34,n*.25,-.4,0,7),i.fill(),i.beginPath(),i.ellipse(n*.9,n*.78,n*.34,n*.25,-.4,0,7),i.fill(),i.beginPath(),i.moveTo(n*.3,n*.95),i.lineTo(n*.3,0),i.lineTo(n*1.2,-n*.2),i.lineTo(n*1.2,n*.75),i.stroke(),i.lineWidth=n*.22,i.beginPath(),i.moveTo(n*.3,n*.05),i.lineTo(n*1.2,-n*.15),i.stroke(),i.restore()}function Gi(i,t,e,n){i.beginPath(),i.arc(t,e,n,0,7);const r=i.createRadialGradient(t-n*.3,e-n*.3,n*.1,t,e,n);r.addColorStop(0,"#f4f4f4"),r.addColorStop(.6,"#a9a9a9"),r.addColorStop(1,"#505050"),i.fillStyle=r,i.fill(),Ie(i,7),i.strokeStyle="rgba(0,0,0,.35)",i.lineWidth=3,i.beginPath(),i.arc(t+n*.1,e+n*.1,n*.6,.5,2.6),i.stroke()}function e0(i,t){const e=i.width,n=i.height,r=i.getContext("2d"),s=Le(77);r.clearRect(0,0,e,n);const a=r.createLinearGradient(0,0,0,n);a.addColorStop(0,"#16a047"),a.addColorStop(1,"#0b7d35"),r.fillStyle=a,r.fillRect(0,0,e,n);for(let x=0;x<700;x++)r.fillStyle=`rgba(${s()<.5?"120,255,160":"0,60,20"},${.03+s()*.05})`,r.beginPath(),r.arc(s()*e,s()*n,20+s()*90,0,7),r.fill();tn(r,e,n,14,s),r.save();const l=1.18;r.translate(40,200),r.scale(l,l),Gi(r,260,120,62),Gi(r,330,80,78),Gi(r,430,30,66),Gi(r,160,170,50),Gi(r,520,60,58),Gi(r,590,120,46),Wl(r,380,120,82),$p(r,560,70,130,120),r.beginPath(),r.roundRect(60,245,430,86,30);let o=r.createLinearGradient(0,245,0,331);o.addColorStop(0,"#f4f4f4"),o.addColorStop(.45,"#bdbdbd"),o.addColorStop(1,"#2b2b2b"),r.fillStyle=o,r.fill(),Ie(r,12),us(r,60,245,430,86,12,.7,.18,3),r.beginPath(),r.roundRect(70,222,410,24,10),r.fillStyle="#1b1b1b",r.fill(),Ie(r,8),r.beginPath(),r.moveTo(70,222),r.lineTo(96,190),r.lineTo(116,222),r.closePath(),r.fillStyle="#e8e8e8",r.fill(),Ie(r,8),[0,1,2].forEach(x=>{r.beginPath(),r.ellipse(60+x*3,288,26-x*3,44-x*4,0,0,7),r.fillStyle=x===0?"#050505":"#dcdcdc",r.fill(),Ie(r,7)}),r.beginPath(),r.roundRect(110,332,330,44,20),o=r.createLinearGradient(0,332,0,376),o.addColorStop(0,"#d8d8d8"),o.addColorStop(1,"#303030"),r.fillStyle=o,r.fill(),Ie(r,10),t0(r,190,255,150,62),r.beginPath(),r.moveTo(470,205),r.lineTo(690,205),r.bezierCurveTo(770,205,820,250,830,320),r.lineTo(815,430),r.lineTo(700,484),r.lineTo(565,470),r.lineTo(470,396),r.closePath(),o=r.createLinearGradient(470,205,830,484),o.addColorStop(0,"#fafafa"),o.addColorStop(.55,"#d4d4d4"),o.addColorStop(1,"#6c6c6c"),r.fillStyle=o,r.fill(),Ie(r,14),us(r,470,205,360,280,14,-.6,.12,3),r.beginPath(),r.roundRect(440,180,210,240,52),o=r.createLinearGradient(440,180,650,420),o.addColorStop(0,"#ffffff"),o.addColorStop(.5,"#bdbdbd"),o.addColorStop(1,"#3e3e3e"),r.fillStyle=o,r.fill(),Ie(r,14),us(r,440,180,210,240,12,.5,.2,3),[250,300,350].forEach((x,m)=>{r.beginPath(),r.ellipse(512,x,30,25,0,0,7),r.fillStyle="#d6d6d6",r.fill(),Ie(r,8),r.beginPath(),r.ellipse(512,x,17,14,0,0,7),r.fillStyle="#060606",r.fill()}),r.beginPath(),r.moveTo(770,210),r.lineTo(836,150),r.lineTo(880,190),r.lineTo(840,262),r.closePath(),r.fillStyle="#1e1e1e",r.fill(),Ie(r,12),r.strokeStyle="rgba(255,255,255,.4)",r.lineWidth=3;for(let x=0;x<4;x++)r.beginPath(),r.moveTo(800+x*12,200-x*10),r.lineTo(830+x*12,232-x*10),r.stroke();r.beginPath(),r.moveTo(780,424),r.lineTo(900,430),r.bezierCurveTo(960,520,950,640,880,720),r.lineTo(770,690),r.bezierCurveTo(780,600,760,520,720,480),r.closePath(),o=r.createLinearGradient(760,430,940,720),o.addColorStop(0,"#f2f2f2"),o.addColorStop(.5,"#a8a8a8"),o.addColorStop(1,"#222"),r.fillStyle=o,r.fill(),Ie(r,14),us(r,760,430,190,290,10,.9,.3,3),r.save(),r.beginPath(),r.moveTo(790,450),r.lineTo(890,456),r.bezierCurveTo(930,530,925,620,868,690),r.lineTo(790,668),r.closePath(),r.clip(),r.strokeStyle="rgba(0,0,0,.5)",r.lineWidth=3;for(let x=-200;x<400;x+=22)r.beginPath(),r.moveTo(760+x,430),r.lineTo(960+x,730),r.stroke(),r.beginPath(),r.moveTo(960+x,430),r.lineTo(760+x,730),r.stroke();r.restore(),r.beginPath(),r.moveTo(588,468),r.bezierCurveTo(580,560,660,590,730,560),r.bezierCurveTo(760,540,765,500,756,476),r.lineWidth=22,r.strokeStyle="#0a0a0a",r.stroke(),r.lineWidth=11,r.strokeStyle="#e6e6e6",r.stroke(),r.beginPath(),r.moveTo(660,484),r.quadraticCurveTo(650,530,688,540),r.lineWidth=12,r.strokeStyle="#0a0a0a",r.stroke(),r.save(),r.translate(735,380),r.rotate(-.3),r.beginPath(),r.ellipse(0,0,54,32,0,0,7),r.fillStyle="#111",r.fill(),Ie(r,5),r.fillStyle="#fff",r.font=`900 30px ${Hl}`,r.textAlign="center",r.fillText("REV",0,11),r.restore(),fs(r,40,460,54,-.2),fs(r,110,570,40,.3),r.strokeStyle="#0a0a0a",r.lineWidth=8;for(let x=0;x<5;x++)r.beginPath(),r.ellipse(850+x%2*8,740+x*28,20,28,0,0,7),r.fillStyle=x%2?"#d5d5d5":"#8d8d8d",r.fill(),r.stroke();r.restore(),r.save();const c=250,h=905,f=128;r.beginPath(),r.arc(c,h,f,0,7),o=r.createRadialGradient(c-40,h-40,20,c,h,f),o.addColorStop(0,"#fff"),o.addColorStop(.7,"#b8b8b8"),o.addColorStop(1,"#3a3a3a"),r.fillStyle=o,r.fill(),Ie(r,12);for(let x=0;x<6;x++){const m=x*Math.PI/3-Math.PI/2;r.beginPath(),r.arc(c+Math.cos(m)*80,h+Math.sin(m)*80,30,0,7),r.fillStyle="#050505",r.fill(),r.lineWidth=8,r.strokeStyle="#e8e8e8",r.stroke(),r.lineWidth=5,r.strokeStyle="#0a0a0a",r.stroke(),r.beginPath(),r.arc(c+Math.cos(m)*80-6,h+Math.sin(m)*80-6,8,0,7),r.fillStyle="#c0902b",r.fill()}r.beginPath(),r.arc(c,h,28,0,7),r.fillStyle="#222",r.fill(),Ie(r,8),r.restore(),r.fillStyle="#0c0c0c";const u=1105;[90,150,210,120,260,180,90,140,60].forEach((x,m)=>{r.beginPath(),r.roundRect(u+m*24,760-x/2,12,x,6),r.fill()}),r.strokeStyle="#0a0a0a",r.lineWidth=8,r.save(),r.translate(1e3,300),r.rotate(.2),r.strokeRect(-60,-70,150,150),fs(r,-30,-30,56,0),r.restore(),r.save(),r.translate(1180,160),r.rotate(-.12),r.strokeRect(-60,-60,130,130),fs(r,-32,-26,48,0),r.restore(),Wl(r,1385,190,78,"#d32a22"),r.font=`900 120px ${pi}`,r.fillStyle="#d32a22",r.textAlign="left",r.fillText("REC",1480,234),r.fillStyle="#0a0a0a",r.beginPath(),r.roundRect(1800,560,120,150,10),r.fill(),r.strokeStyle="rgba(0,0,0,.65)",r.lineWidth=5;for(let x=0;x<6;x++)r.beginPath(),r.moveTo(1760+x*12,220),r.bezierCurveTo(1740+x*20,420,1830+x*10,500,1780+x*14,720),r.stroke();r.save(),r.translate(1700,1040),r.rotate(-.06),r.font=`700 80px ${Kp}`,r.fillStyle="rgba(255,255,255,.85)",r.fillText("revolver",0,0),r.restore();const g=r.createLinearGradient(0,n-130,0,n);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(0,0,0,.55)"),r.fillStyle=g,r.fillRect(0,n-130,e,130),r.fillStyle="#0c0f10",r.fillRect(0,n-30,e,30),r.clearRect(t.x,t.y,t.w,t.h)}function Gl(i){const t=i.width,e=i.height,n=i.getContext("2d"),r=Le(5);n.fillStyle="#f2f2ee",n.fillRect(0,0,t,e),tn(n,t,e,8,r),n.fillStyle="#111",n.textAlign="center",n.font=`900 ${t*.075}px ${Hl}`,n.fillText("STROFF THA STREET",t/2,e*.12);const s=t/2,a=e*.57,l=t*.48;n.strokeStyle="#111",n.lineWidth=7,n.beginPath(),n.arc(s,a,l,0,7),n.stroke(),n.lineWidth=4,n.beginPath(),n.arc(s,a,l*.88,0,7),n.stroke(),n.lineWidth=6,n.beginPath(),n.moveTo(s-l*1.04,a),n.lineTo(s+l*1.04,a),n.moveTo(s,a-l*1.05),n.lineTo(s,a+l*1.05),n.stroke(),n.fillStyle="#0c0c10",n.beginPath(),n.ellipse(s,a-l*.62,t*.075,t*.095,0,0,7),n.fill(),n.beginPath(),n.ellipse(s,a-l*.7,t*.17,t*.03,0,0,7),n.fill(),n.beginPath(),n.roundRect(s-t*.1,a-l*.74,t*.2,t*.07,8),n.fill(),n.beginPath(),n.moveTo(s-t*.1,a-l*.5),n.bezierCurveTo(s-t*.33,a-l*.42,s-t*.33,a+l*.12,s-t*.28,a+l*.55),n.lineTo(s+t*.34,a+l*.55),n.bezierCurveTo(s+t*.34,a+l*.12,s+t*.32,a-l*.42,s+t*.1,a-l*.5),n.closePath(),n.fill(),n.fillStyle="#111",[t*.16,t*.84].forEach(o=>{n.beginPath(),n.arc(o,e*.26,t*.04,0,7),n.fill(),n.beginPath(),n.roundRect(o-t*.06,e*.285,t*.12,e*.07,6),n.fill()}),n.fillStyle="#fff",n.fillRect(t*.28,e*.22,t*.44,e*.07),n.strokeStyle="#c62a2a",n.lineWidth=3,n.strokeRect(t*.28,e*.22,t*.44,e*.07),n.fillStyle="#c62a2a",n.font=`700 ${t*.05}px Arial, sans-serif`,n.fillText("ЗАПИСЬ ИДЁТ",t/2,e*.265)}function Xl(i){const t=i.width,e=i.height,n=i.getContext("2d");n.fillStyle="#05060a",n.fillRect(0,0,t,e),n.strokeStyle="rgba(255,255,255,.2)",n.lineWidth=6,n.strokeRect(10,10,t-20,e-20),n.textAlign="center",n.shadowColor="#ff2a1f",n.shadowBlur=40,n.fillStyle="#ff5a4d",n.font=`800 ${e*.46}px ${pi}`,n.fillText("REVOLVER",t*.5,e*.52),n.shadowBlur=24,n.shadowColor="#35e06b",n.fillStyle="#9dffbd",n.font=`700 ${e*.15}px ${pi}`,n.fillText("PODCAST  ·  SOUND",t*.5,e*.74),n.shadowColor="#fff",n.shadowBlur=14,n.fillStyle="#ffffff",n.font=`600 ${e*.115}px ${pi}`,n.fillText("Фрунзе 49  ↓  подвал",t*.5,e*.91),n.shadowBlur=0}function n0(i){const t=i.width,e=i.height,n=i.getContext("2d");n.clearRect(0,0,t,e),n.shadowColor="#ff2a1f",n.shadowBlur=24,n.fillStyle="#ff6a5c",n.beginPath(),n.moveTo(t*.38,e*.08),n.lineTo(t*.62,e*.08),n.lineTo(t*.62,e*.5),n.lineTo(t*.85,e*.5),n.lineTo(t*.5,e*.94),n.lineTo(t*.15,e*.5),n.lineTo(t*.38,e*.5),n.closePath(),n.fill()}function i0(i,t=11,e=!0){const n=i.width,r=i.height,s=i.getContext("2d"),a=Le(t);s.fillStyle="#c9cbc6",s.fillRect(0,0,n,r),tn(s,n,r,14,a),s.strokeStyle="#0b0b0b",s.lineCap="round",s.lineJoin="round";for(let l=0;l<7;l++){s.lineWidth=8+a()*14,s.beginPath();let o=n*(.2+a()*.2),c=r*(.1+a()*.8);s.moveTo(o,c);for(let h=0;h<6;h++)o+=(a()-.3)*n*.22,c+=(a()-.5)*r*.3,s.quadraticCurveTo(o+(a()-.5)*60,c+(a()-.5)*60,o,c);s.stroke()}}function r0(i,t,e,n){const r=i.width,s=i.height,a=i.getContext("2d");a.clearRect(0,0,r,s),a.textAlign="center",a.textBaseline="middle",a.shadowColor=e,a.shadowBlur=28,a.fillStyle=e,a.font=n,a.fillText(t,r/2,s/2),a.shadowBlur=8,a.fillStyle="#fff",a.fillText(t,r/2,s/2)}function ql(i,t){const e=i.width,n=i.height,r=i.getContext("2d"),s=Le(t*7+1),a=[{bg:"#e9dfc8",a:"#d02419",b:"#111"},{bg:"#d02419",a:"#f1e9d3",b:"#111"},{bg:"#111",a:"#37ff7a",b:"#f1e9d3"},{bg:"#f1e9d3",a:"#111",b:"#37ff7a"}][t%4];r.fillStyle=a.bg,r.fillRect(0,0,e,n),tn(r,e,n,12,s);const l=[["JAM","SESSION"],["ЖИВОЙ","ЗВУК"],["REC","NIGHT"],["СТРИМ","СТУДИЯ"]][t%4];r.textAlign="left",r.fillStyle=a.a,r.font=`900 ${e*.3}px ${pi}`,r.save(),r.translate(e*.06,n*.2),r.rotate(-.06),r.fillText(l[0],0,0),r.fillStyle=a.b,r.font=`900 ${e*.2}px ${pi}`,r.fillText(l[1],0,e*.25),r.restore(),r.fillStyle=a.b,r.beginPath(),r.arc(e*.68,n*.62,e*.24,0,7),r.fill(),r.fillStyle=a.a,r.beginPath(),r.arc(e*.68,n*.62,e*.08,0,7),r.fill(),r.strokeStyle=a.a,r.lineWidth=3;for(let o=0;o<8;o++)r.beginPath(),r.arc(e*.68,n*.62,e*(.1+o*.017),0,7),r.stroke();r.fillStyle=a.b,r.fillRect(e*.06,n*.86,e*.88,4),r.fillStyle=a.b,r.font=`700 ${e*.06}px Arial, sans-serif`,r.fillText("Фрунзе 49 · подвал · 21:00",e*.06,n*.93)}function jl(i,t,e,n){const r=i.width,s=i.height,a=i.getContext("2d"),l=a.createImageData(r,s),o=l.data,c=Le(n);for(let p=0;p<s;p++){const g=Math.sin(p*.4+t*6)*.5+.5;for(let x=0;x<r;x++){const m=(p*r+x)*4,d=c()*95,M=p%2?.55:1,b=(d+25+g*25)*M;o[m]=b*.3,o[m+1]=b,o[m+2]=b*.35,o[m+3]=255}}a.putImageData(l,0,0),a.fillStyle="rgba(120,255,150,.35)";const h=(Math.sin(t*.6+e)*.5+.5)*(r-30);a.beginPath(),a.arc(h+15,s*.4,7,0,7),a.fill(),a.fillRect(h+4,s*.48,22,s*.4),a.fillStyle="rgba(120,255,150,.22)",a.fillRect(0,s*.82,r,3);const f=Math.floor(t+e*77),u=[Math.floor(f/3600)%24,Math.floor(f/60)%60,f%60].map(p=>String(p).padStart(2,"0")).join(":");a.font="bold 12px monospace",a.fillStyle="#b6ffc3",a.textAlign="left",a.fillText(u,6,s-7),a.textAlign="right",a.fillText("CAM "+e,r-6,14),Math.floor(t*1.6)%2===0&&(a.fillStyle="#ff3b30",a.beginPath(),a.arc(12,12,4,0,7),a.fill(),a.fillStyle="#ffc9c5",a.textAlign="left",a.fillText("REC",20,16))}function s0(i){const t=i.getContext("2d"),e=i.width;t.fillStyle="#1f6fd0",t.fillRect(0,0,e,e),t.fillStyle="#fff",t.fillRect(e*.08,e*.08,e*.84,e*.84),t.fillStyle="#1f6fd0",t.fillRect(e*.12,e*.12,e*.76,e*.76),t.fillStyle="#fff",t.beginPath(),t.moveTo(e*.2,e*.78),t.lineTo(e*.5,e*.2),t.lineTo(e*.8,e*.78),t.closePath(),t.fill(),t.fillStyle="#111",t.beginPath(),t.arc(e*.5,e*.4,e*.05,0,7),t.fill(),t.fillRect(e*.46,e*.45,e*.08,e*.22)}const pr=1.62,hs=.3,ye={x0:3.75,x1:5.25,z0:14.4,z1:19.2,n:16,rise:3};function ds(i,t){return t>=ye.z1?3:t<=ye.z0?0:(Math.floor((t-ye.z0)/((ye.z1-ye.z0)/ye.n))+1)*(ye.rise/ye.n)}const a0=[[-3.7,13.7,19.5,24.2],[4.05,4.95,4.6,19.8],[.3,5.7,.3,4.7],[5.5,6.5,3.25,3.65],[6.4,8.6,.3,4.7],[8.5,9.6,3.25,3.65],[9.4,11.7,-.7,4.7]],o0=[[1.9,5.1,0,.7],[1.05,1.8,.1,.95],[2.42,3.58,1.3,4],[1.72,2.28,1.72,2.28],[3.72,4.15,1.72,2.28],[5.05,5.9,1,1.8],[5.5,5.95,1.95,2.7],[5,5.6,2.45,3],[5.1,5.9,4,4.9],[.1,.8,.85,1.45],[.1,.8,4.1,4.9],[6.8,8.7,.1,1.1],[7.05,8.15,1.7,2.5],[8.3,8.9,3.9,4.9],[9.1,10.05,.1,2.4],[10.1,10.9,.5,1.5],[10.85,11.35,2.45,2.95]],l0={street:["Улица · Фрунзе 49","Ночь. Вход в подвал — вниз по лестнице"],entry:["Вход · тамбур и коридор","Металлическая дверь, газеты и фиолетовый свет"],hall:["REVOLVER PODCAST · 30 м²","Видеопавильон для подкастов"],lounge:["Лаундж","Диван, постеры и звукоизоляция"],studio:["REVOLVER SOUND · студия звукозаписи · 18 м²","Акустически обработанная комната"]};function Da(i,t){return t>14.4?"street":i>3.6&&i<5.4&&t>5.2?"entry":i<6?"hall":i<9?"lounge":"studio"}const Zl={1:{x:2.6,z:22.2,yaw:-.5,pitch:-.18},2:{x:3.6,z:4.62,yaw:.12,pitch:-.02},3:{x:7.5,z:4.5,yaw:.08,pitch:-.1},4:{x:10.7,z:4.5,yaw:.28,pitch:-.1}},c0={street:[{p:[9.5,5.6,21.2],c:16738896,i:22,d:14},{p:[5.8,5,18.6],c:16773584,i:22,d:12},{p:[-1.2,7.6,22],c:16754e3,i:110,d:26},{p:[4.5,2.4,15.5],c:12571391,i:16,d:8},{p:[4.5,4.2,26],c:7113983,i:50,d:20},{p:[4.5,1.7,12.2],c:13990911,i:4,d:6}],entry:[{p:[4.5,2.4,12],c:16769976,i:7,d:6},{p:[4.5,2.3,9],c:16722902,i:3,d:6},{p:[4.5,2.3,6.6],c:11545599,i:3,d:6},{p:[4.5,2.2,14],c:12571391,i:9,d:6},{p:[4.5,2,4],c:16777215,i:2,d:5},{p:[4.5,1.8,8],c:16728319,i:1.5,d:4}],hall:[{p:[3,2.5,2.8],c:14674175,i:9,d:9},{p:[3.4,1.4,1],c:3826431,i:5,d:4.5},{p:[5,2.3,2.4],c:15138792,i:6,d:6},{p:[.9,1.6,2.4],c:16738874,i:4,d:4.5},{p:[1.5,2.4,4],c:16777215,i:4,d:6},{p:[4.5,2.2,4.8],c:13660415,i:2,d:4}],lounge:[{p:[7.5,2.3,1.8],c:16767400,i:14,d:8},{p:[7.6,2.2,3.8],c:16773344,i:10,d:6},{p:[6.4,1.5,3.4],c:3530859,i:5,d:4},{p:[8.6,1.6,2.2],c:4889599,i:4,d:5},{p:[7.5,.5,1],c:16747088,i:2,d:3},{p:[4.8,1.8,3.4],c:14674175,i:2,d:5}],studio:[{p:[10,1.7,1.3],c:5939455,i:16,d:6},{p:[10.9,2.4,2.8],c:13623551,i:18,d:7},{p:[11.3,1.4,.4],c:3823871,i:9,d:5},{p:[10.4,2.5,4.2],c:10139903,i:12,d:7},{p:[9.6,1.4,3.8],c:16751200,i:2.5,d:3},{p:[11.5,1,2],c:16722731,i:3,d:3}]},u0={street:[725024,.022,.8],entry:[1182234,.045,.55],hall:[329226,.05,.5],lounge:[395018,.055,.5],studio:[197642,.055,.45]};function f0(i={}){const t=!!i.low,e=new sl;e.background=new Kt(461332),e.fog=new ha(725024,.022);const n={};["street","stairs","entry","hall","lounge","studio"].forEach(E=>{n[E]=new de,n[E].name=E,e.add(n[E])});const r=(E,q={})=>new on(Object.assign({color:E,roughness:.85,metalness:0},q)),s={repeat:[1,1]},a={brick:jt(kl(1),s),brickLight:jt(kl(2,[92,84,76]),s),pave:jt(Fp(),s),asphalt:jt(Op(),s),concrete:jt(Bl(4,74),s),concreteDark:jt(Bl(7,34),s),curtain:jt(zp(),s),blueCarpet:jt(kp(),s),woodFloor:jt(Bp(),s),foam:jt(Vp(),s),news:jt(Hp(),s),softbox:jt(Gp()),plaid:jt(Xp()),ball:jt(qp()),dollar:jt(jp()),daw:jt(Zp()),grain:jt(Jp(),s),leather:jt(Yp(),s),glow:jt(Wp()),carpetRed:zl(Dp,{repeat:[1,1],mirror:!0}),tableWood:zl(Ip)};a.tableWood.wrapS=a.tableWood.wrapT=1001;const l=ne(512,512);{const E=l.getContext("2d"),q=Le(51);E.fillStyle="#1d1511",E.fillRect(0,0,512,512);for(let rt=0;rt<2;rt++)for(let at=0;at<4;at++){const ft=E.createLinearGradient(at*128,rt*256,at*128+128,rt*256+256);ft.addColorStop(0,"#2a3338"),ft.addColorStop(.5,"#4a2a22"),ft.addColorStop(1,"#171a20"),E.fillStyle=ft,E.fillRect(at*128+8,rt*256+8,112,240),E.fillStyle=`rgba(255,160,100,${.1+q()*.12})`,E.fillRect(at*128+14,rt*256+120,100,100),E.fillStyle="rgba(255,255,255,.07)",E.beginPath(),E.moveTo(at*128+8,rt*256+8),E.lineTo(at*128+70,rt*256+8),E.lineTo(at*128+8,rt*256+120),E.fill()}}a.facade=jt(l,s);const o={brick:r(16777215,{map:a.brick,roughness:.95}),brickLight:r(16777215,{map:a.brickLight,roughness:.95}),pave:r(12103848,{map:a.pave,roughness:.9}),asphalt:r(16777215,{map:a.asphalt,roughness:.55,metalness:.1}),concrete:r(16777215,{map:a.concrete}),concreteDark:r(16777215,{map:a.concreteDark,color:9079434}),curtain:r(16777215,{map:a.curtain,roughness:1}),blueCarpet:r(16777215,{map:a.blueCarpet,roughness:1}),woodFloor:r(16777215,{map:a.woodFloor,roughness:.6}),foam:r(16777215,{map:a.foam,roughness:1}),news:r(16777215,{map:a.news,roughness:.9}),carpetRed:r(16777215,{map:a.carpetRed,roughness:1,emissive:3344390,emissiveMap:a.carpetRed,emissiveIntensity:.12}),facade:r(16777215,{map:a.facade,roughness:.4,metalness:.2,emissive:16777215,emissiveMap:a.facade,emissiveIntensity:.12}),black:r(657932,{roughness:.9}),ceil:r(723725,{roughness:1}),steel:r(9080726,{roughness:.4,metalness:.85}),darkSteel:r(2764081,{roughness:.5,metalness:.8}),white:r(15131868,{roughness:.6}),cream:r(15327430,{map:a.leather,roughness:.45}),green:r(1744970,{roughness:.9}),plastic:r(1710877,{roughness:.5}),grayVel:r(5857643,{roughness:1}),wood:r(16777215,{map:a.grain,roughness:.7}),leaf:r(3115578,{roughness:.8,side:2,emissive:666128,emissiveIntensity:.6}),leaf2:r(1927980,{roughness:.8,side:2,emissive:532492,emissiveIntensity:.6}),ivy:r(3046706,{roughness:.9,emissive:666128,emissiveIntensity:.6}),gold:r(13214266,{roughness:.35,metalness:.9}),glass:new on({color:9087176,roughness:.05,metalness:.1,transparent:!0,opacity:.18,depthWrite:!1})},c=(E,q=1)=>new wn({color:new Kt(E).multiplyScalar(q),toneMapped:!1}),h=new kn(1,1,1);function f(E,q,rt,at,ft,_t,qt,Gt,ge=1){const Pe=ft-q,we=_t-rt,Ue=qt-at,Hn=new kn(Pe,we,Ue),pn=Hn.attributes.uv,Cs=Array.isArray(ge)?ge[0]:ge,An=Array.isArray(ge)?ge[1]:ge,cc=[[Ue,we],[Ue,we],[Pe,Ue],[Pe,Ue],[Pe,we],[Pe,we]];for(let wr=0;wr<6;wr++)for(let Za=0;Za<4;Za++){const Ja=wr*4+Za;pn.setXY(Ja,pn.getX(Ja)*cc[wr][0]/Cs,pn.getY(Ja)*cc[wr][1]/An)}const ja=new te(Hn,Gt);return ja.position.set((q+ft)/2,(rt+_t)/2,(at+qt)/2),E.add(ja),ja}const u=(E,q,rt,at,ft,_t,qt,Gt,ge=0,Pe=0,we=0)=>{const Ue=new te(h,ft);return Ue.scale.set(q,rt,at),Ue.position.set(_t,qt,Gt),Ue.rotation.set(Pe,ge,we),E.add(Ue),Ue},p=(E,q,rt,at,ft,_t,qt,Gt,ge=16,Pe=0,we=0)=>{const Ue=new te(new Kn(q,rt,at,ge),ft);return Ue.position.set(_t,qt,Gt),Ue.rotation.set(Pe,0,we),E.add(Ue),Ue},g=(E,q,rt,at,ft,_t,qt=1,Gt=1,ge=1)=>{const Pe=new te(new wa(q,16,12),rt);return Pe.position.set(at,ft,_t),Pe.scale.set(qt,Gt,ge),E.add(Pe),Pe},x={"+x":[0,Math.PI/2,0],"-x":[0,-Math.PI/2,0],"+z":[0,0,0],"-z":[0,Math.PI,0],"+y":[-Math.PI/2,0,0],"-y":[Math.PI/2,0,0]};function m(E,q,rt,at,ft,_t,qt,Gt="+z",ge=null){const Pe=new Rn(q,rt);if(ge){const Ue=Pe.attributes.uv;for(let Hn=0;Hn<Ue.count;Hn++)Ue.setXY(Hn,Ue.getX(Hn)*ge[0],Ue.getY(Hn)*ge[1])}const we=new te(Pe,at);return we.position.set(ft,_t,qt),we.rotation.set(...x[Gt]),E.add(we),we}function d(E,q,rt,at,ft,_t,qt=.8){const Gt=new qd(new al({map:a.glow,color:q,transparent:!0,opacity:qt,blending:2,depthWrite:!1,fog:!1}));return Gt.scale.set(rt,rt,1),Gt.position.set(at,ft,_t),E.add(Gt),Gt}const M=n.street;f(M,-9,2.4,8,3.75,3,25,o.pave,2),f(M,3.75,2.4,19.2,5.25,3,25,o.pave,2),f(M,5.25,2.4,19.2,24,3,25,o.pave,2),f(M,-60,1.6,25,80,2.9,80,o.asphalt,6),f(M,-9,2.4,24.8,24,2.95,25.2,o.concrete,1);const b=r(10132122,{roughness:.6});for(let E=-8;E<24;E+=3)m(M,1.4,.16,b,E,2.915,31,"+y");for(let E=0;E<9;E++)m(M,.5,5.2,b,1+E*.9,2.915,28,"+y");f(n.stairs,5.25,0,13.2,6.2,3,19.2,o.brick,2),f(M,5.25,3,10,24,3.45,19.2,o.darkSteel,1),f(M,5.25,3.45,10,24,10.5,19.2,[o.concreteDark,o.concreteDark,o.concreteDark,o.concreteDark,o.facade,o.concreteDark],[2.4,2.4]),m(M,18.7,1.9,o.facade,14.6,4.45,19.21,"+z",[4,1]),m(M,3.5,1.9,o.facade,7,4.45,19.21,"+z",[1,1]);const v=ne(1024,256);Xl(v);const O=jt(v),w=new wn({map:O,toneMapped:!1});f(M,6.3,5.3,19.1,13.7,6.9,19.25,o.black,1),m(M,7.2,1.5,w,10,6.1,19.27,"+z"),d(M,16724e3,11,10,6.1,19.7,.28);const C=ne(128,160);n0(C);const U=new wn({map:jt(C),transparent:!0,toneMapped:!1,depthWrite:!1}),T=m(M,.9,1.1,U,4.5,4.35,19,"+z"),_=m(M,.9,1.1,U,4.5,4.35,19,"-z");d(M,16726570,2.5,4.5,4.35,19,.35),u(M,.05,1.2,.05,o.darkSteel,4.5,5,18.8),g(M,.32,c(16774104,1.1),5.75,5,18.9),d(M,16773324,3.4,5.75,5,18.9,.6),f(n.stairs,3.45,0,13.2,3.75,4,19.2,[o.brick,o.brick,o.pave,o.brick,o.brick,o.brick],2);const L=ne(256,256);i0(L);const X=r(16777215,{map:jt(L),roughness:.7}),B=r(10132632,{roughness:.7});f(M,2.5,3,17.4,3.4,4.05,18.4,[B,B,B,B,X,B],1);const nt=o.steel;for(let E=-3.9;E<=3.5;E+=1.4)u(M,.05,1,.05,nt,E,3.5,19.25);u(M,7.6,.05,.05,nt,-.2,3.95,19.25),u(M,7.6,.05,.05,nt,-.2,3.55,19.25);for(let E=-8;E<=23;E+=1.5)u(M,.05,.95,.05,nt,E,3.47,24.6);u(M,32,.05,.05,nt,7.5,3.9,24.6),u(M,32,.05,.05,nt,7.5,3.45,24.6);const K=r(16777215,{map:jt(Vl(31,8,12),s),emissive:16777215,roughness:.8});K.emissiveMap=K.map,K.emissiveIntensity=.65,f(M,-30,0,-2,-9,18,30,[K,K,o.concreteDark,o.concreteDark,K,K],[6,6]),[[-30,12,46,20],[-14,10,52,28],[-2,14,47,18],[14,10,50,32],[26,12,46,22],[40,14,52,26]].forEach(([E,q,rt,at],ft)=>{const _t=r(16777215,{map:jt(Vl(40+ft,9,14),s),emissive:16777215,roughness:.9});_t.emissiveMap=_t.map,_t.emissiveIntensity=.55,f(M,E,0,rt,E+q,at,rt+10,[_t,_t,o.concreteDark,o.concreteDark,_t,_t],[5,5])});const j=new de;j.position.set(7.3,3,25.5),M.add(j),u(j,.12,3.6,.12,o.darkSteel,0,1.8,0),u(j,.36,1,.3,o.black,0,3.55,0),g(j,.1,c(16722474,1.4),0,3.85,.17),g(j,.1,r(2236962),0,3.55,.17),g(j,.1,r(2236962),0,3.25,.17),d(j,16722474,1.3,0,3.85,.3,.8);const xt=ne(128,128);s0(xt),m(j,.7,.7,new wn({map:jt(xt),toneMapped:!1}),0,2.4,.08,"+z");const Et=j.clone();Et.position.set(-1.2,3,25.5),M.add(Et),[[-1.2,22],[15,22.5]].forEach(([E,q])=>{u(M,.12,7.6,.12,o.darkSteel,E,3+3.8,q),u(M,1.2,.1,.1,o.darkSteel,E+.5,10.6,q),u(M,.5,.12,.3,c(16761978,1.4),E+1,10.5,q),d(M,16756832,5,E+1,10.4,q,.55)});const Nt=[];for(let E=0;E<5;E++){const q=new de;u(q,1.9,.5,4.2,r(E%2?1778992:3811882,{roughness:.4,metalness:.4}),0,.5,0),u(q,1.6,.45,2.2,r(659480,{roughness:.2,metalness:.5}),0,.95,-.2),u(q,.35,.14,.05,c(16772792,1.5),-.6,.55,2.12),u(q,.35,.14,.05,c(16772792,1.5),.6,.55,2.12),u(q,.35,.12,.05,c(16719904,1.3),-.6,.55,-2.12),u(q,.35,.12,.05,c(16719904,1.3),.6,.55,-2.12),d(q,16773312,2.2,0,.55,2.8,.35),q.rotation.y=Math.PI/2;const rt=E%2?1:-1;q.userData={dir:rt,speed:5+E*1.3,x:-30+E*15,z:rt>0?33.5:29.5},rt<0&&(q.rotation.y=-Math.PI/2),q.position.set(q.userData.x,2.9,q.userData.z),M.add(q),Nt.push(q)}const zt=n.stairs,ce=[o.concrete,o.concrete,r(16777215,{map:a.concreteDark,roughness:.6,metalness:.2}),o.concrete,o.concrete,o.concrete],$=(ye.z1-ye.z0)/ye.n,ct=ye.rise/ye.n;for(let E=0;E<ye.n;E++)f(zt,ye.x0,0,ye.z0+E*$,ye.x1,(E+1)*ct,ye.z0+(E+1)*$,ce,1),u(zt,1.5,.012,.05,r(8945776,{roughness:.4,metalness:.6}),4.5,(E+1)*ct+.006,ye.z0+(E+1)*$-.06);f(zt,3.75,-.2,13.2,5.25,0,14.4,o.concreteDark,1),f(zt,3.45,0,13,4,3.5,13.2,o.brick,2),f(zt,5,0,13,5.6,3.5,13.2,o.brick,2),f(zt,4,2.1,13,5,3.5,13.2,o.brick,2),f(zt,3.45,3,13,5.6,3.5,15.2,o.concreteDark,1),p(zt,.16,.16,.1,r(14540253),4.5,2.95,14.2,12),p(zt,.12,.12,.02,c(14411519,1.4),4.5,2.89,14.2,12),d(zt,13163775,1.4,4.5,2.7,14.2,.45);{const E=Math.hypot(ye.z1-ye.z0,ye.rise),q=Math.atan2(ye.rise,ye.z1-ye.z0);u(zt,.05,.05,E,o.steel,3.9,.95+ye.rise/2,(ye.z0+ye.z1)/2,0,-q);for(let rt=0;rt<5;rt++){const at=ye.z0+.4+rt*1.15,ft=ds(3.9,at);u(zt,.04,.95,.04,o.steel,3.88,ft+.47,at)}}const Rt=ne(256,512);{const E=Rt.getContext("2d"),q=Le(9);E.fillStyle="#4b2d20",E.fillRect(0,0,256,512),tn(E,256,512,22,q),E.strokeStyle="rgba(0,0,0,.4)",E.lineWidth=3,E.strokeRect(14,14,228,484),E.fillStyle="rgba(255,200,150,.1)",E.fillRect(14,14,228,40);for(let rt=0;rt<24;rt++)E.fillStyle="rgba(0,0,0,.4)",E.beginPath(),E.arc(24+(rt%2?208:0),30+Math.floor(rt/2)*40,3,0,7),E.fill()}const gt=r(16777215,{map:jt(Rt),roughness:.55,metalness:.5}),Bt=[];function Wt(E,{axis:q,hx:rt,hz:at,w:ft,h:_t=2.1,t:qt=.07,open:Gt,mats:ge,cx:Pe,cz:we,knob:Ue=!0,knobSide:Hn=1}){const pn=new de;if(pn.position.set(rt,0,at),E.add(pn),q==="z"){const An=new te(h,ge);An.userData.noPaint=!0,An.scale.set(ft,_t,qt),An.position.set(ft/2,_t/2,0),pn.add(An),Ue&&(g(pn,.035,o.steel,ft-.1,1,qt/2+.04),g(pn,.035,o.steel,ft-.1,1,-qt/2-.04))}else{const An=new te(h,ge);An.userData.noPaint=!0,An.scale.set(qt,_t,ft),An.position.set(0,_t/2,-ft/2),pn.add(An),Ue&&(g(pn,.035,o.steel,qt/2+.04,1,-ft+.1),g(pn,.035,o.steel,-qt/2-.04,1,-ft+.1))}const Cs={pivot:pn,cur:0,target:0,open:Gt,cx:Pe,cz:we};return Bt.push(Cs),Cs}Wt(zt,{axis:"z",hx:4,hz:13.1,w:1,h:2.1,t:.08,open:Math.PI/2*.92,mats:[o.darkSteel,o.darkSteel,o.darkSteel,o.darkSteel,gt,gt],cx:4.5,cz:13.1}),u(zt,.03,.35,.03,o.steel,4.93,1.05,13.18);const wt=n.entry,yt=2.8;f(wt,3.75,-.1,5.2,5.25,0,13,o.woodFloor,1.2),f(wt,3.75,yt,5.2,5.25,yt+.1,13,o.ceil,1);const Jt=o.news;f(wt,3.55,0,5.2,3.75,yt,10.8,[Jt,o.concreteDark,o.concreteDark,o.concreteDark,o.concreteDark,o.concreteDark],1),f(wt,5.25,0,5.2,5.45,yt,10.8,[o.concreteDark,Jt,o.concreteDark,o.concreteDark,o.concreteDark,o.concreteDark],1),f(wt,3.55,0,10.8,3.75,yt,13,[o.concrete,o.concreteDark,o.concreteDark,o.concreteDark,o.concreteDark,o.concreteDark],1.5),f(wt,5.25,0,10.8,5.45,yt,13,[o.concreteDark,o.concrete,o.concreteDark,o.concreteDark,o.concreteDark,o.concreteDark],1.5),f(wt,3.75,0,10.8,4,yt,11,[o.concrete,o.concrete,o.concrete,o.concrete,o.concrete,o.concrete],1),f(wt,5,0,10.8,5.25,yt,11,o.concrete,1),f(wt,4,2.1,10.8,5,yt,11,o.concrete,1),f(wt,3.75,0,5,4.05,yt,5.2,Jt,1),f(wt,4.95,0,5,5.25,yt,5.2,Jt,1),f(wt,4.05,2.1,5,4.95,yt,5.2,Jt,1),p(wt,.12,.12,.05,r(16771520),4.5,2.76,12,12),g(wt,.09,c(16769976,1.4),4.5,2.66,12),d(wt,16767392,1.2,4.5,2.6,12,.45),[3.8,5.2].forEach(E=>{u(wt,.04,.04,5.55,c(13773823,1.5),E,2.62,8)}),[3.8,5.2].forEach(E=>{u(wt,.04,.04,5.55,c(16722902,1.2),E,.12,8)}),d(wt,13642751,4.5,4.5,2.4,6.4,.22),d(wt,16722902,4.5,4.5,2.4,9.2,.22),u(wt,.06,.55,.42,r(8028294,{roughness:.5,metalness:.6}),3.8,1.5,12),u(wt,.02,.2,.3,r(14725152),3.77,1.6,12),u(wt,.03,1.2,.03,r(273),3.8,1.9,11.4),[[0,3.77,7,"+x"],[1,3.77,8.1,"+x"],[2,5.23,6.2,"-x"],[3,5.23,9.1,"-x"]].forEach(([E,q,rt,at])=>{const ft=ne(256,384);ql(ft,E),m(wt,.5,.75,r(16777215,{map:jt(ft),roughness:.8}),q,1.4+E%2*.15,rt,at)});const se=ne(256,512);{const E=se.getContext("2d"),q=Le(14);for(let rt=0;rt<6;rt++){const at=q()*20;E.fillStyle=`rgb(${120+at},${78+at*.6},${46+at*.4})`,E.fillRect(rt*43,0,42,512),E.fillStyle="rgba(0,0,0,.45)",E.fillRect(rt*43+42,0,1,512)}tn(E,256,512,20,q),E.fillStyle="rgba(0,0,0,.25)",E.fillRect(0,100,256,8),E.fillRect(0,400,256,8)}const N=r(16777215,{map:jt(se),roughness:.7});Wt(wt,{axis:"z",hx:4,hz:10.9,w:1,h:2.1,t:.06,open:Math.PI/2*.95,mats:[r(4861984),r(4861984),r(4861984),r(4861984),N,N],cx:4.5,cz:10.9});const Ee=r(15724018,{roughness:.5});Wt(wt,{axis:"z",hx:4.05,hz:5.1,w:.9,h:2.1,t:.05,open:Math.PI/2*.95,mats:Ee,cx:4.5,cz:5.1}),u(wt,.07,2.1,.22,Ee,4.01,1.05,5.1),u(wt,.07,2.1,.22,Ee,4.99,1.05,5.1),u(wt,1,.07,.22,Ee,4.5,2.13,5.1);const pt=n.hall;f(pt,0,-.1,0,6,0,5,o.blueCarpet,1),f(pt,0,yt,0,6,yt+.1,5,o.ceil,1),f(pt,-.2,0,-.2,6.1,yt+.1,0,[o.concreteDark,o.concreteDark,o.concreteDark,o.concreteDark,o.concreteDark,r(987155)],2),f(pt,-.2,0,0,0,yt+.1,5,o.concreteDark,2),m(pt,5,2.8,o.carpetRed,.012,1.4,2.5,"+x",[1.6,1]),f(pt,-.2,0,5,4.05,yt+.1,5.2,o.concreteDark,2),f(pt,4.95,0,5,6.1,yt+.1,5.2,o.concreteDark,2),f(pt,4.05,2.1,5,4.95,yt+.1,5.2,o.concreteDark,2),m(pt,4.05,2.8,o.curtain,2,1.4,4.97,"-z",[4,1]),m(pt,1.05,2.8,o.curtain,5.5,1.4,4.97,"-z",[1.5,1]),m(pt,.9,.7,o.curtain,4.5,2.45,4.97,"-z",[1,1]);const Xt=3,Ft=3.9;f(pt,5.9,0,0,6.1,yt+.1,Xt,o.black,1),f(pt,5.9,0,Ft,6.1,yt+.1,5,o.black,1),f(pt,5.9,2.1,Xt,6.1,yt+.1,Ft,o.black,1);const ue=ne(2048,1152),Ot={x:Xt/5*2048,y:1152-2.1/2.8*1152,w:(Ft-Xt)/5*2048,h:2.1/2.8*1152},A=jt(ue),S=()=>{e0(ue,Ot),A.needsUpdate=!0};S();const z=r(16777215,{map:A,roughness:.9,alphaTest:.5,emissive:16777215,emissiveMap:A,emissiveIntensity:.18});m(pt,5,2.8,z,5.888,1.4,2.5,"-x");const et=ne(384,896);Gl(et);const st=jt(et),tt=r(16777215,{map:st,roughness:.6}),Ut=()=>{Gl(et),st.needsUpdate=!0};Wt(pt,{axis:"x",hx:5.97,hz:Ft,w:.9,h:2.1,t:.05,open:-Math.PI/2*.95,mats:[Ee,tt,Ee,Ee,Ee,Ee],cx:5.97,cz:3.45}),u(pt,.22,2.12,.06,r(1018426),6,1.06,Xt-.03),u(pt,.22,2.12,.06,r(1018426),6,1.06,Ft+.03),u(pt,.22,.06,1,r(1018426),6,2.13,3.45);const St=new ya(.13,.5,14);[[5.55,4.45],[5.75,4.1]].forEach(([E,q],rt)=>{const at=new te(St,r(16738842,{roughness:.6}));at.position.set(E,.25,q),pt.add(at),p(pt,.115,.125,.07,r(15987696),E,.26,q,14),p(pt,.09,.1,.07,r(15987696),E,.37,q,14),u(pt,.34,.03,.34,r(546),E,.015,q)});function At(E,q,rt,at,ft,_t="ac",qt=.12){const Gt=new de;Gt.position.set(q,0,rt),Gt.rotation.y=at,Gt.rotation.z=qt,E.add(Gt);const ge=r(ft,{roughness:.35,metalness:.1});return g(Gt,.19,ge,0,.22,0,1,1.05,.28),g(Gt,.15,ge,0,.53,0,1,1,.28),p(Gt,.06,.06,.02,r(328965),0,.38,.065,14,Math.PI/2),u(Gt,.05,.62,.025,r(2759184),0,.98,0),u(Gt,.07,.14,.02,r(1381653),0,1.35,0),Gt}At(pt,5.78,2.15,0,15986662,"ac",.22);const ee=At(pt,5.72,2.5,0,941893,"el",.16);ee.rotation.y=-.2;const Q=new de;pt.add(Q);const Mt=r(6712435,{roughness:.35,metalness:.9});[[1.9,.12],[5.1,.12],[1.9,.62],[5.1,.62]].forEach(([E,q])=>u(Q,.05,2.15,.05,Mt,E,1.075,q));const kt=[.15,.78,1.38,1.98];kt.forEach(E=>u(Q,3.2,.04,.5,Mt,3.5,E,.37)),f(Q,1.9,.05,.05,5.1,2.2,.1,r(659512,{roughness:1,emissive:662640,emissiveIntensity:.3}),1),kt.forEach((E,q)=>{q>0&&u(Q,3.15,.025,.025,c(2774783,1.6),3.5,E-.04,.6)}),d(Q,3826431,3.2,3.5,1.1,.7,.18);const k=new Ea(.06,0);for(let E=0;E<(t?26:60);E++){const q=[1.9,5.1,3.5][E%3],rt=new te(k,o.ivy);rt.position.set(q+(Math.random()-.5)*.12,.4+Math.random()*1.9,.14+Math.random()*.1),rt.scale.set(1.2,.8+Math.random(),.5),Q.add(rt)}const J=[ne(128,96),ne(128,96)],it=J.map(E=>jt(E));it.forEach(E=>{E.generateMipmaps=!1,E.minFilter=1006});function ht(E,q,rt,at,ft,_t,qt=0){const Gt=new de;Gt.position.set(q,rt,at),Gt.rotation.y=qt,E.add(Gt);const ge=r(3158839,{roughness:.55});u(Gt,ft,ft*.84,ft*.78,ge,0,ft*.42,0),u(Gt,ft*.7,ft*.6,ft*.4,ge,0,ft*.42,-ft*.5),u(Gt,ft*.86,ft*.68,.02,r(1382170,{roughness:.3}),-.02*ft,ft*.45,ft*.39+.012);const Pe=new te(new Rn(ft*.72,ft*.56),new on({color:0,emissive:16777215,emissiveMap:_t,emissiveIntensity:1.35,roughness:.2}));return Pe.position.set(-.02*ft,ft*.45,ft*.39+.025),Pe.userData.crt=!0,Gt.add(Pe),d(Gt,7405456,ft*1.6,-.02*ft,ft*.45,ft*.5,.18),Gt}ht(pt,1.4,0,.55,.56,it[0]),ht(pt,1.4,.48,.55,.5,it[1]),ht(pt,4.55,1.4,.42,.34,it[0]),u(pt,.6,.02,.6,r(546),1.4,.01,.55),u(Q,.5,.1,.38,r(13223092,{roughness:.5}),3.4,.85,.37),p(Q,.15,.15,.015,r(1052688),3.34,.915,.37,24),u(Q,.45,.012,.02,r(546),3.4,.92,.2),u(Q,.3,.2,.28,r(14144196),2.7,.9,.37),u(Q,.18,.04,.2,r(7311196),2.7,1.02,.37);const ot=[6954526,1981034,3824170,8018458,4860506,1365];for(let E=0;E<9;E++)u(Q,.05,.22+E%3*.03,.18,r(ot[E%ot.length],{roughness:.8}),4.2+E*.055,.92,.38);const P=new de;P.position.set(4.9,1.38,.38),Q.add(P),g(P,.15,r(15330546,{roughness:.45}),0,.12,0,1.2,1.2,.8),g(P,.07,r(15330546,{roughness:.45}),0,.33,0,1,1.1,1),u(P,.5,.01,.01,c(3832575,1.8),0,-.05,.2),p(Q,.06,.04,.2,o.gold,4,.9,.37,14),g(Q,.06,o.gold,4,1.06,.37,1.1,.9,1.1);const dt=r(16777215,{map:a.ball,roughness:.7});g(Q,.12,dt,2.4,1.5,.4),g(Q,.12,dt,4.4,.27,.4),u(Q,.4,.28,.3,r(8423568,{roughness:.35,metalness:.6}),2.3,2.17,.37),u(Q,.46,.04,.17,r(13649451),3.2,2.02,.37,.1),u(Q,.3,.3,.28,r(5132888,{roughness:.5}),4.3,2.18,.37);const G=new de;G.position.set(4.7,2.1,.37),Q.add(G),u(G,.46,.2,.15,r(11843772,{roughness:.35,metalness:.5}),0,0,0),[-.15,.15].forEach(E=>{p(G,.06,.06,.01,r(1381653),E,0,.08,16,Math.PI/2)}),u(G,.1,.06,.012,r(546),0,.03,.078),u(Q,.62,.02,.18,r(12590622,{roughness:.5}),3.4,2.04,.35,.1),g(Q,.08,r(1381653,{roughness:.6}),2.8,1.46,.37),g(Q,.04,o.black,2.74,1.5,.45),g(Q,.04,o.black,2.86,1.5,.45),u(Q,.3,.1,.22,r(546),3.8,1.45,.37),u(Q,.2,.08,.2,r(11549226),4.2,1.44,.37),u(Q,.3,.14,.2,r(819),2.2,.22,.37),u(Q,.25,.1,.25,r(7096878),3,.2,.37),u(Q,.36,.15,.22,r(12170144),3.7,.24,.37),[1.3,3.2].forEach(E=>u(pt,6,.04,.04,o.darkSteel,3,2.72,E)),[.7,5.3].forEach(E=>u(pt,.04,.04,5,o.darkSteel,E,2.72,2.5)),g(pt,.07,c(16777215,1.6),3.4,2.72,1.25),d(pt,16777215,1,3.4,2.68,1.25,.6);const Z=new de;pt.add(Z);const ut=r(1839627,{roughness:.6}),mt=new on({map:a.tableWood,roughness:.55,color:9403756,emissive:2758152,emissiveMap:a.tableWood,emissiveIntensity:.1});{const E=new kn(1,.07,2.6),q=new te(E,[ut,ut,mt,ut,ut,ut]);q.position.set(3,.76,2.65),Z.add(q)}[[2.6,1.55],[3.4,1.55],[2.6,3.75],[3.4,3.75]].forEach(([E,q])=>u(Z,.05,.72,.05,o.black,E,.36,q)),[[2.65,1.55,.35],[3.35,1.55,-.35]].forEach(([E,q,rt])=>{u(Z,.07,.07,.06,o.black,E,.8,q),u(Z,.025,.55,.025,o.black,E,1.1,q),u(Z,.025,.025,.4,o.black,E,1.36,q+.18,0,0,0),p(Z,.035,.035,.16,r(2763824,{roughness:.4,metalness:.6}),E,1.34,q+.34,12,Math.PI/2),p(Z,.045,.045,.07,r(14271050,{roughness:.4,metalness:.8}),E,1.34,q+.4,12,Math.PI/2)});function Ct(E,q,rt){const at=new de;at.position.set(E,0,q),at.rotation.y=rt,pt.add(at);const ft=new on({color:5857643,roughness:1,side:2});p(at,.27,.25,.1,ft,0,.46,0,20);const _t=new te(new Kn(.27,.27,.42,20,1,!0,Math.PI*.38,Math.PI*1.24),ft);_t.position.set(0,.76,0),at.add(_t),u(at,.05,.4,.05,o.black,0,.23,0),u(at,.4,.03,.04,o.black,0,.03,0),u(at,.04,.03,.4,o.black,0,.03,0),[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]].forEach(([qt,Gt])=>u(at,.02,.43,.02,o.black,qt*.8,.21,Gt*.8))}Ct(2,2,Math.PI/2-.35),Ct(4,2,-Math.PI/2+.35);const ae=new de;ae.position.set(5.45,0,1.4),pt.add(ae),[[-.25,-.2],[.25,-.2],[-.25,.2],[.25,.2]].forEach(([E,q])=>u(ae,.025,.55,.025,o.black,E,.275,q)),u(ae,.62,.03,.46,r(8018488,{roughness:.6}),0,.56,0);const ze=r(16777215,{map:a.plaid,roughness:.8});u(ae,.56,.16,.4,ze,0,.66,0),u(ae,.5,.05,.34,r(2890772),0,.745,0),u(ae,.46,.06,.3,r(16777215,{map:a.dollar}),0,.78,0,.1),u(ae,.5,.025,.4,ze,0,.88,-.28,0,-.35);const fe=new te(h,ze);fe.scale.set(.56,.03,.4),fe.position.set(0,.95,-.35),fe.rotation.x=-1.35,ae.add(fe);const Ze=new ba;Ze.moveTo(0,0),Ze.quadraticCurveTo(.07,.35,0,.9),Ze.quadraticCurveTo(-.07,.35,0,0);const Mn=new cs(Ze),ws=(()=>{const E=new ba;return E.moveTo(0,0),E.quadraticCurveTo(.14,.5,0,1.2),E.quadraticCurveTo(-.14,.5,0,0),new cs(E)})();function mi(E,q,rt,at,ft=0){const _t=new de;_t.position.set(q,0,rt),E.add(_t),p(_t,.17,.14,.36,r(1052690,{roughness:.7}),0,.18,0,14),p(_t,.15,.15,.02,r(1708556),0,.37,0,14);const qt=t?9:16;for(let Gt=0;Gt<qt;Gt++){const ge=Gt/qt*Math.PI*2+Math.random()*.3,Pe=Math.random()*.25;if(ft===0){p(_t,.012,.012,at*.6,r(4876842),Math.cos(ge)*.04,.36+at*.3,Math.sin(ge)*.04,5,0,0);const we=new te(ws,Gt%2?o.leaf:o.leaf2);we.position.set(Math.cos(ge)*.04,.36+at*.55,Math.sin(ge)*.04),we.rotation.set(0,-ge+Math.PI/2,0),we.rotateX(-(.9+Pe)),we.scale.set(1.2,at*.8,1),_t.add(we)}else{const we=new te(Mn,Gt%2?o.leaf:o.leaf2);we.position.set(0,.35+Math.random()*.3,0),we.rotation.set(0,-ge+Math.PI/2,0),we.rotateX(-(.2+Math.random()*.5)),we.scale.set(1.3,at*.9,1),_t.add(we)}}return _t}mi(pt,5.35,2.7,1.5,0),mi(pt,5.4,4.5,1.4,1),mi(pt,.45,1.15,1.2,1),mi(pt,.45,4.5,1.3,0);const Bn=[r(789518,{roughness:.9}),r(789518),new on({color:0,emissive:16777215,emissiveMap:a.softbox,emissiveIntensity:.95,map:a.softbox})];function Zi(E,q,rt,at,ft=.5){const _t=new de;_t.position.set(E,q,rt),pt.add(_t);const qt=new te(new Kn(ft*.55,ft,.32,8,1),Bn);qt.position.y=0,_t.add(qt),_t.lookAt(at.x,at.y,at.z),qt.rotation.x=-Math.PI/2;const Gt=new te(new Wi(ft*.95,.01,6,8),c(14676223,1.5));return Gt.rotation.x=0,Gt.position.z=.16,Gt.rotation.z=Math.PI/8,_t.add(Gt),u(_t,.03,.6,.03,o.black,0,.3,-.2),d(_t,13623551,ft*3,0,0,.3,.2),_t}Zi(.95,2.4,3.3,new R(3,.9,2.8)),Zi(5.05,2.4,1.7,new R(3,.9,2.8));const Vn=new de;Vn.position.set(3.4,2.4,1.05),Vn.rotation.x=.35,pt.add(Vn),u(Vn,1.3,.2,.05,r(1381914),0,0,0),m(Vn,1.22,.14,new on({color:0,emissive:16777215,emissiveMap:a.softbox,emissiveIntensity:1.5}),0,0,.03,"+z",[3,1]),d(Vn,15266047,2.2,0,0,.4,.3);const Tr=(()=>{const E=ne(512,128),q=E.getContext("2d"),rt=Le(61);for(let at=0;at<360;at++){q.fillStyle=`rgba(${30+rt()*40},${100+rt()*70},${40+rt()*30},${.75+rt()*.25})`;const ft=rt()*512,_t=rt()*rt()*128;q.beginPath(),q.ellipse(ft,_t,9+rt()*6,6+rt()*3,rt()*3,0,7),q.fill()}for(let at=0;at<40;at++){q.strokeStyle="rgba(30,90,30,.9)",q.lineWidth=1.5,q.beginPath();const ft=rt()*512;q.moveTo(ft,0),q.lineTo(ft+(rt()-.5)*20,30+rt()*90),q.stroke()}return jt(E)})();m(pt,5,.9,new on({map:Tr,transparent:!0,alphaTest:.35,roughness:.9,side:2,emissive:997908,emissiveIntensity:.6,emissiveMap:Tr}),.05,2.3,2.5,"+x"),g(pt,.05,c(16722474,1.8),5.8,2.35,3.45),d(pt,16719904,.7,5.8,2.35,3.45,.6);const xe=n.lounge;f(xe,6.1,-.1,0,8.9,0,5,o.blueCarpet,1),f(xe,6.1,yt,0,8.9,yt+.1,5,o.ceil,1);const Ar=r(1710882,{roughness:1});f(xe,6.1,0,-.2,8.9,yt+.1,0,Ar,1),f(xe,6.1,0,5,8.9,yt+.1,5.2,Ar,1),f(xe,8.9,0,0,9.1,yt+.1,.5,o.black,1),f(xe,8.9,0,.5,9.1,1,1.9,o.black,1),f(xe,8.9,1.9,.5,9.1,yt+.1,1.9,o.black,1),f(xe,8.9,0,1.9,9.1,yt+.1,3,o.black,1),f(xe,8.9,0,3.9,9.1,yt+.1,5,o.black,1),f(xe,8.9,2.1,3,9.1,yt+.1,3.9,o.black,1),m(xe,1.4,.9,o.glass,9,1.45,1.2,"-x"),u(xe,.14,.05,1.5,o.black,9,.98,1.2),u(xe,.14,.05,1.5,o.black,9,1.92,1.2),m(xe,2,2.4,o.foam,8.88,1.3,4.45,"-x",[3,3.6]),m(xe,1,2,o.foam,6.12,1.2,4.5,"+x",[1.5,3]),m(xe,1,2,o.foam,6.12,1.2,2.2,"+x",[1.5,3]);const fn=new de;fn.position.set(7.7,0,.55),xe.add(fn),u(fn,1.8,.4,.8,o.cream,0,.3,0),u(fn,1.8,.5,.2,o.cream,0,.7,-.3),u(fn,.2,.3,.82,o.cream,-.9,.55,0),u(fn,.2,.3,.82,o.cream,.9,.55,0),u(fn,.8,.14,.7,o.cream,-.4,.55,.05),u(fn,.8,.14,.7,o.cream,.4,.55,.05);const bn=new de;bn.position.set(7.6,0,2.1),xe.add(bn),u(bn,1,.04,.7,o.white,0,.43,0),[[-.45,-.3],[.45,-.3],[-.45,.3],[.45,.3]].forEach(([E,q])=>u(bn,.05,.42,.05,o.white,E,.21,q)),u(bn,.9,.03,.6,o.white,0,.12,0);for(let E=0;E<6;E++)u(bn,.2+E%3*.05,.01,.15,r([12728874,15262152,819,2783818][E%4]),-.3+E*.12,.455+E*.001,-.1+E%2*.2,E*.5);u(bn,.25,.02,.15,o.black,.3,.47,.1,.3),p(bn,.03,.03,.1,r(14540253),-.35,.5,.2,10);const ti=new de;ti.position.set(8.6,0,4.4),xe.add(ti),u(ti,.5,.55,.4,r(12084511,{roughness:.6}),0,.28,0),u(ti,.14,.12,.05,o.steel,0,.36,.2),g(ti,.1,r(6982312,{roughness:.1,transparent:!0,opacity:.7}),0,.68,0),[[0,7,.05,"+z"],[1,8.1,.05,"+z"],[2,8.87,2,"-x"],[3,6.9,4.95,"-z"]].forEach(([E,q,rt,at])=>{const ft=ne(256,384);ql(ft,E);const _t=jt(ft),qt=new de;qt.position.set(q,1.6,rt),qt.rotation.set(...x[at]),xe.add(qt),u(qt,.66,.96,.03,r(1118483),0,0,0),m(qt,.58,.88,new on({map:_t,emissive:16777215,emissiveMap:_t,emissiveIntensity:.35,roughness:.8}),0,0,.02,"+z")});const Rs=ne(512,128);r0(Rs,"ON AIR","#ff2a2a",`700 80px ${pi}`),m(xe,1.1,.28,new wn({map:jt(Rs),transparent:!0,toneMapped:!1,depthWrite:!1}),7.7,2.35,.05,"+z"),d(xe,16722474,2,7.7,2.35,.2,.35),p(xe,.02,.02,1.4,o.black,6.5,.7,.5,8),g(xe,.18,c(16767400,1),6.5,1.5,.5,1,.8,1),d(xe,16763024,1.5,6.5,1.5,.5,.5),m(xe,2.2,1.6,r(1842216,{roughness:1}),7.6,.012,2.1,"+y");const Re=n.studio,Er=r(526347,{roughness:1});f(Re,9.1,-.1,-1,12,0,5,o.blueCarpet,1),f(Re,9.1,yt,-1,12,yt+.1,5,o.ceil,1),f(Re,9.1,0,-1.2,12.2,yt+.1,-1,Er,1),f(Re,12,0,-1.2,12.2,yt+.1,5.2,Er,1),f(Re,9.1,0,5,12.2,yt+.1,5.2,Er,1),m(Re,2,2.4,o.foam,9.12,1.3,4.45,"+x",[3,3.6]),m(Re,1,2.4,o.foam,9.12,1.3,2.4,"+x",[1.5,3.6]),m(Re,2.4,1.6,o.foam,11.98,1.3,1.2,"-x",[3.5,2.5]),m(Re,2.4,1.6,o.foam,11.98,1.3,3.8,"-x",[3.5,2.5]),m(Re,1.6,1.6,o.foam,10.5,1.3,-.98,"+z",[2.4,2.4]),m(Re,2.6,1.8,o.foam,10.5,2.79,3.5,"-y",[4,3]);const y=new de;Re.add(y);const F=r(16777215,{map:a.concreteDark,roughness:.55,color:8949141});u(y,.8,.05,2.1,F,9.55,.75,1.25),[[9.2,.3],[9.2,2.2],[9.9,.3],[9.9,2.2]].forEach(([E,q])=>u(y,.05,.72,.05,o.black,E,.36,q)),new on({color:0,emissive:16777215,emissiveMap:a.daw,emissiveIntensity:1.1,map:a.daw});const H=3,W=1;for(let E=0;E<H;E++){const q=(E-1)*.28,rt=new de;rt.position.set(9.4+Math.abs(E-1)*0+Math.cos(q)*0,1.12,1.2+(E-1)*.34),rt.rotation.y=Math.PI/2+(E-1)*.28,y.add(rt),rt.position.x=9.38+(E===1?0:.04);const at=new te(new Rn(W/H,.34),new on({color:0,emissive:16777215,emissiveMap:a.daw,emissiveIntensity:1.2,map:a.daw}));at.material.map=a.daw.clone(),at.material.emissiveMap=at.material.map,at.material.map.needsUpdate=!0,at.material.map.repeat.set(1/H,1),at.material.map.offset.set(E/H,0),at.position.z=0,rt.add(at),u(rt,W/H,.36,.02,o.black,0,0,-.012)}u(y,.05,.28,.08,o.black,9.3,.9,1.2),d(y,5939455,2.2,9.6,1.1,1.2,.22),u(y,.18,.015,.5,o.black,9.65,.785,1.15),u(y,.14,.04,.2,r(1710626),9.8,.795,1.8),[[9.4,.3],[9.4,2.1]].forEach(([E,q])=>{u(y,.24,.36,.28,o.black,E,1,q),p(y,.085,.085,.02,r(14131994,{roughness:.5}),E+.12,1,q,16,0,Math.PI/2)});const I=new de;I.position.set(10.45,0,1),I.rotation.y=Math.PI/2-.4,Re.add(I),u(I,.5,.1,.5,r(1381914,{roughness:.5}),0,.5,0),u(I,.5,.65,.1,r(9078394,{roughness:.6}),0,.9,-.24),u(I,.5,.2,.12,r(1381914),0,1.3,-.24),p(I,.03,.03,.4,o.darkSteel,0,.25,0,8),u(I,.5,.04,.04,o.darkSteel,0,.04,0),u(I,.04,.04,.5,o.darkSteel,0,.04,0);const lt=new de;lt.position.set(11.1,0,2.7),Re.add(lt);for(let E=0;E<3;E++){const q=E*2.094;u(lt,.03,.03,.4,o.black,Math.cos(q)*.17,.04,Math.sin(q)*.17,-q+Math.PI/2)}p(lt,.018,.018,1.45,o.black,0,.75,0,8),u(lt,.02,.02,.35,o.black,0,1.5,-.14);const bt=r(12962255,{roughness:.25,metalness:.95});p(lt,.032,.032,.18,bt,0,1.52,-.3,16),p(lt,.045,.045,.02,o.black,0,1.42,-.3,16),p(lt,.045,.045,.02,o.black,0,1.62,-.3,16);const Lt=new te(new _a(.1,24),new on({color:273,transparent:!0,opacity:.55,side:2}));Lt.position.set(0,1.5,-.17),lt.add(Lt);const Dt=new te(new Wi(.1,.006,6,24),o.black);Dt.position.copy(Lt.position),lt.add(Dt),p(lt,.01,.01,.3,o.black,0,1.35,-.17,6);const Ht=new de;Ht.position.set(11.6,1.1,1),Re.add(Ht),p(Ht,.01,.01,1,o.black,0,-.55,0,6);const Zt=new te(new Wi(.09,.012,8,20,Math.PI),o.black);Zt.rotation.z=0,Ht.add(Zt),p(Ht,.05,.05,.03,o.black,-.09,-.02,0,12,0,Math.PI/2),p(Ht,.05,.05,.03,o.black,.09,-.02,0,12,0,Math.PI/2),At(Re,11.6,2.2,-1.2,2303275,"el",0),g(Re,.14,r(328965,{roughness:.4}),11.95,1.9,2.6,.3,1.2,.8),d(Re,6728447,.8,11.9,1.9,2.6,.12),[-.95,4.95].forEach(E=>u(Re,2.8,.04,.04,c(3827455,1.6),10.6,2.72,E)),u(Re,.04,.04,5.8,c(3827455,1.4),11.9,2.72,2),d(Re,3827455,5,10.8,2.5,2,.12),g(Re,.05,c(16722474,1.8),11.95,2.3,3.6),d(Re,16719904,.8,11.9,2.3,3.6,.6);const Pt=r(1381658,{roughness:.8});Wt(Re,{axis:"x",hx:9,hz:3.9,w:.9,h:2.1,t:.07,open:-Math.PI/2*.95,mats:[o.foam,Pt,Pt,Pt,Pt,Pt],cx:9,cz:3.45});const ie=new Pl(2898534,1182218,.55);e.add(ie);const _e=[];for(let E=0;E<6;E++){const q=new Nl(16777215,0,10,2);e.add(q),_e.push(q)}const pe={zone:null};function Je(E,q){pe.zone=E,pe.target=c0[E],pe.fog=u0[E],pe.amb={street:.8,entry:.3,hall:.3,lounge:.6,studio:.85}[E],q&&It(1)}const oe=new Kt;function It(E){const q=pe.target;_e.forEach((at,ft)=>{const _t=q[ft];at.position.x+=(_t.p[0]-at.position.x)*E,at.position.y+=(_t.p[1]-at.position.y)*E,at.position.z+=(_t.p[2]-at.position.z)*E,oe.setHex(_t.c),at.color.lerp(oe,E),at.intensity+=(_t.i-at.intensity)*E,at.distance+=(_t.d-at.distance)*E});const rt=pe.fog;e.fog.color.lerp(oe.setHex(rt[0]),E),e.fog.density+=(rt[1]-e.fog.density)*E,e.background.lerp(oe.setHex(rt[0]),E),ie.intensity+=(pe.amb-ie.intensity)*E}const Tn={street:["street","stairs","entry"],entry:["street","stairs","entry","hall"],hall:["entry","hall","lounge"],lounge:["hall","lounge","studio"],studio:["lounge","studio","hall"]};function me(E){const q=Tn[E];for(const rt in n)n[rt].visible=q.includes(rt)}const hn=E=>`../index.html?service=${E}#book`,ei=[{id:"crt",zone:"hall",pos:[1.4,.75,.9],title:"ЭЛТ-телевизоры: «живой фид»",text:"Ретро-телевизоры в кадре показывают сигнал с камер студии — зелёный фосфор, шум и таймкод REC. Деталь, которая оживляет задний план подкаста.",img:"hall-wide-1",service:"podcast-express"},{id:"suitcase",zone:"hall",pos:[5.45,.85,1.4],title:"Чемодан с «деньгами»",text:"Реквизит для кадра: старый чемодан с пачками купюр. В студии много такой фактуры — её можно переставлять под тему выпуска или взять в аренду.",img:"detail-suitcase",service:"rent"},{id:"retro",zone:"hall",pos:[3.4,1,.45],title:"Ретро-техника на стеллаже",text:"Проигрыватель, бумбокс, магнитофоны, книги, мячи и бюст с синей подсветкой — стальной стеллаж с LED-лентами задаёт характер кадра.",img:"detail-turntable",service:"rent"},{id:"mural",zone:"hall",pos:[5.9,1.5,1.4],title:"Граффити-револьвер",text:"Монохромный револьвер с дымом, винилом и нотами на зелёной стене — фирменный фон студии. Рядом — дверь с трафаретом в лаундж.",img:"graffiti-wide",service:"rent"},{id:"light",zone:"hall",pos:[1.1,2.3,3.1],title:"Свет: софтбоксы и LED-панель",text:"Два больших восьмиугольных софтбокса и LED-панель под потолком дают мягкий кинематографичный свет. Схему настраиваем под выпуск.",img:"hall-wide-2",service:"podcast-express"},{id:"table",zone:"hall",pos:[3,.9,2.6],title:"Стол с микрофонами",text:"Массивный стол из слэба, два кресла и микрофоны на журавлях. Три камеры 4K, мультикам-запись, звук без шумов.",img:"hall-table",service:"podcast-express"},{id:"lounge",zone:"lounge",pos:[7.7,.9,.7],title:"Лаундж",text:"Белый кожаный диван, постеры и акустический поролон. Здесь ждут гости, обсуждают сценарий и отдыхают между дублями.",img:"lounge",service:"combo"},{id:"console",zone:"studio",pos:[9.55,1.1,1.2],title:"Пульт со стеклянным окном",text:"Рабочее место звукорежиссёра: изогнутый монитор, студийные мониторы и окно в стене — вы видите вокалиста, а он вас.",img:"control-1",service:"sound-vocal"},{id:"vocal",zone:"studio",pos:[11.1,1.45,2.4],title:"Вокальный микрофон",text:"Конденсаторный микрофон с поп-фильтром, наушники и тёмная акустически обработанная комната — чистая запись вокала и озвучки.",img:"mic-neumann",service:"sound-vocal"},{id:"wall",zone:"studio",pos:[9.2,1.4,2.6],title:"Звукоизолированная стена",text:"Между подкаст-залом и студией — звукоизолирующая стена с поролоном. Можно записывать подкаст и вокал одновременно, не мешая друг другу.",img:"vocal-1",service:"combo"},{id:"sign",zone:"street",pos:[10,6,19.3],title:"REVOLVER PODCAST · REVOLVER SOUND",text:"Вход в подвал по лестнице у дома на Фрунзе, 49. Металлическая дверь, тамбур, фиолетовый коридор — и вы в студии.",img:"enter-stairs",service:"combo"}].map(E=>Object.assign(E,{pos:new R(...E.pos),href:hn(E.service)})),Ye={t:0},xn=[{i:0,t:0},{i:1,t:0}];let ve=0;function dn(E){const q=E.getContext("2d");for(let rt=0;rt<5;rt++){const at=Math.random()*E.height,ft=3+Math.random()*10;q.drawImage(E,0,at,E.width,ft,(Math.random()-.5)*40,at,E.width,ft)}q.fillStyle="rgba(255,255,255,.55)",q.fillRect(0,Math.random()*E.height,E.width,2),q.fillStyle="rgba(255,0,60,.25)",q.fillRect(0,Math.random()*E.height,E.width,6)}function gi(E,q,rt,at){Ye.t+=E;const ft=Ye.t;for(const _t of Bt){const qt=Math.hypot(q-_t.cx,rt-_t.cz);_t.target=qt<2?_t.open:0,_t.cur+=(_t.target-_t.cur)*Math.min(1,E*4.5),_t.pivot.rotation.y=_t.cur}if(It(Math.min(1,E*3.2)),(at==="hall"||at==="entry")&&(xn[0].t+=E,xn[1].t+=E,ve>0&&(ve-=E),xn[0].t>.085&&(xn[0].t=0,jl(J[0],ft,1,ft*100|0),ve>0&&dn(J[0]),it[0].needsUpdate=!0),xn[1].t>.12&&(xn[1].t=0,jl(J[1],ft+5,2,ft*77|0),ve>0&&dn(J[1]),it[1].needsUpdate=!0)),at==="street"||at==="entry"){for(const _t of Nt){const qt=_t.userData;qt.x+=qt.dir*qt.speed*E,qt.x>60&&(qt.x=-60),qt.x<-60&&(qt.x=60),_t.position.x=qt.x}T.position.y=4.35+Math.sin(ft*3)*.08,_.position.y=T.position.y}}return{scene:e,groups:n,hotspots:ei,update:gi,setZoneLights:Je,setVisibility:me,redrawMural:S,redrawDoor:Ut,redrawSign:()=>{Xl(v),O.needsUpdate=!0},doors:Bt,lights:_e,amb:ie,glitch:E=>{ve=E}}}const mr=["#c9f23b","#ff4b2e","#c23cff","#ffffff","#111111"],h0=150,Ia=4e3;function ps(i,t){const e=ne(128,128),n=e.getContext("2d"),r=Le(i);if(n.translate(64,64),t){n.strokeStyle="rgba(235,245,240,.9)",n.lineWidth=1.4;for(let s=0;s<14;s++){let a=s/14*6.28+r()*.3,l=0,o=0;n.beginPath(),n.moveTo(0,0);for(let c=0;c<5;c++)a+=(r()-.5)*.6,l+=Math.cos(a)*(6+r()*9),o+=Math.sin(a)*(6+r()*9),n.lineTo(l,o);n.stroke()}n.strokeStyle="rgba(0,0,0,.6)",n.lineWidth=3,n.beginPath(),n.arc(0,0,4,0,7),n.stroke(),n.strokeStyle="rgba(200,230,255,.5)",n.lineWidth=1;for(let s=1;s<4;s++)n.beginPath(),n.arc(0,0,s*14,r()*6,r()*6+3.5),n.stroke()}else{const s=n.createRadialGradient(0,0,2,0,0,40);s.addColorStop(0,"rgba(0,0,0,.95)"),s.addColorStop(.35,"rgba(10,10,10,.8)"),s.addColorStop(.7,"rgba(120,115,105,.35)"),s.addColorStop(1,"rgba(120,115,105,0)"),n.fillStyle=s,n.beginPath(),n.arc(0,0,40,0,7),n.fill(),n.fillStyle="#000",n.beginPath(),n.arc(0,0,5.5,0,7),n.fill();for(let a=0;a<12;a++){const l=r()*6.28,o=8+r()*22;n.fillStyle=`rgba(${r()<.5?"30,28,26":"170,165,150"},${.5+r()*.4})`,n.beginPath(),n.arc(Math.cos(l)*o,Math.sin(l)*o,1+r()*3,0,7),n.fill()}n.strokeStyle="rgba(0,0,0,.7)",n.lineWidth=1;for(let a=0;a<7;a++){let l=r()*6.28,o=0,c=0;n.beginPath(),n.moveTo(0,0);for(let h=0;h<4;h++)l+=(r()-.5)*.8,o+=Math.cos(l)*(6+r()*8),c+=Math.sin(l)*(6+r()*8),n.lineTo(o,c);n.stroke()}}return e}function d0(){const i=ne(128,128),t=i.getContext("2d"),e=Le(5),n=t.createRadialGradient(64,64,2,64,64,50);n.addColorStop(0,"rgba(255,255,255,.95)"),n.addColorStop(.45,"rgba(255,255,255,.7)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);for(let a=0;a<70;a++){const l=e()*6.28,o=20+e()*42;t.fillStyle=`rgba(255,255,255,${.35+e()*.6})`,t.beginPath(),t.arc(64+Math.cos(l)*o,64+Math.sin(l)*o,.6+e()*2.2,0,7),t.fill()}const r=t.getImageData(0,0,128,128),s=r.data;for(let a=3;a<s.length;a+=4)s[a]=Math.max(0,s[a]*(.85+e()*.3));return t.putImageData(r,0,0),i}function p0(){const i=ne(256,128),t=i.getContext("2d");return t.fillStyle="#c9ccd0",t.fillRect(0,0,256,128),t.fillStyle="#111",t.fillRect(0,22,256,84),t.fillStyle="#ff3b30",t.font="900 40px Unbounded, Impact, sans-serif",t.textAlign="center",t.fillText("REVOLVER",128,74),t.fillStyle="#c9f23b",t.font="700 14px Arial",t.fillText("SPRAY · 400 ML",128,98),i}function Na(){const i=ne(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,240,200,1)"),e.addColorStop(.3,"rgba(255,170,60,.7)"),e.addColorStop(1,"rgba(255,100,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),i}function m0(i){const{renderer:t,camera:e,scene:n,getWorld:r,audio:s,state:a}=i,l={},o=new sl,c=new nn(54,1,.01,5);o.add(new Pl(14542079,5259328,1.5));const h=new Lp(16773344,1.6);h.position.set(.5,1,.8),o.add(h);const f=new Nl(16752704,0,2);f.position.set(.15,0,-.5),o.add(f);const u=(k,J={})=>new on(Object.assign({color:k,roughness:.5,metalness:.4},J)),p=u(10134446,{metalness:.5,roughness:.4}),g=u(2764083,{metalness:.4,roughness:.5}),x=u(7028002,{metalness:0,roughness:.6}),m=u(13212282,{metalness:0,roughness:.8}),d=u(2831696,{metalness:0,roughness:.95}),M=(k,J,it,ht,ot,P,dt,G,Z=0,ut=0,mt=16)=>{const Ct=new te(new Kn(J,it,ht,mt),ot);return Ct.position.set(P,dt,G),Ct.rotation.set(Z,0,ut),k.add(Ct),Ct},b=(k,J,it,ht,ot,P,dt,G,Z=0,ut=0,mt=0)=>{const Ct=new te(new kn(J,it,ht),ot);return Ct.position.set(P,dt,G),Ct.rotation.set(Z,ut,mt),k.add(Ct),Ct},v=new de,O=new de;v.add(O),b(O,.04,.075,.13,p,0,0,.03),M(O,.0125,.0125,.24,p,0,.022,-.17,Math.PI/2,0),b(O,.012,.012,.22,g,0,.045,-.16),b(O,.008,.016,.01,g,0,.055,-.27),M(O,.009,.009,.19,p,0,-.003,-.16,Math.PI/2,0);const w=new de;w.position.set(0,.018,-.045),O.add(w),M(w,.034,.034,.065,p,0,0,0,Math.PI/2,0,20);for(let k=0;k<6;k++){const J=k*Math.PI/3;M(w,.0085,.0085,.01,u(328965,{metalness:0}),Math.cos(J)*.021,Math.sin(J)*.021,.033,Math.PI/2,0,10),M(w,.0065,.0065,.01,u(13146682,{metalness:.8,roughness:.3}),Math.cos(J)*.021,Math.sin(J)*.021,.035,Math.PI/2,0,10)}const C=b(O,.01,.04,.02,g,0,.055,.1,.5);b(v,.036,.1,.05,x,0,-.07,.1,.35);const U=new te(new Wi(.022,.004,6,14,Math.PI*1.3),p);U.position.set(0,-.04,.04),U.rotation.set(0,Math.PI/2,Math.PI*1.1),v.add(U),b(v,.008,.022,.008,g,0,-.02,.05),b(v,.052,.05,.065,m,.002,-.07,.115,.35),M(v,.032,.036,.3,d,0,-.13,.27,1.25,0,14);const T=new te(new Rn(.2,.2),new wn({map:jt(Na()),transparent:!0,blending:2,depthWrite:!1}));T.position.set(0,.022,-.3),T.visible=!1,v.add(T);const _=new de,L=jt(p0()),X=new te(new Kn(.03,.03,.17,20),[u(16777215,{map:L,metalness:.5,roughness:.35}),u(12106946,{metalness:.8,roughness:.3}),u(12106946,{metalness:.8})]);X.position.set(0,0,0),_.add(X),M(_,.026,.03,.02,u(12106946,{metalness:.8,roughness:.3}),0,.095,0);const B=u(13234747,{metalness:.1,roughness:.5});M(_,.026,.026,.035,B,0,.12,0),b(_,.012,.012,.025,g,0,.126,-.02),b(_,.05,.05,.06,m,0,-.01,.04),M(_,.032,.036,.3,d,0,-.12,.2,1.2,0,14);const Y=new te(new Rn(.16,.16),new wn({map:jt(Na()),transparent:!0,opacity:.6,depthWrite:!1,color:13234747}));Y.position.set(0,.126,-.1),Y.visible=!1,_.add(Y);const nt=new de;o.add(nt),nt.add(v),nt.add(_),_.visible=!1;const K={rev:new R(.1,-.095,-.3),can:new R(.1,-.1,-.3)};v.scale.setScalar(.85),_.scale.setScalar(.8),_.rotation.set(-.35,.1,0),v.rotation.set(0,.06,0);const D={weapon:0,ammo:6,reload:-1,rec:0,flash:0,cd:0,swap:1,swapTo:0,trigger:!1,color:0,sprayT:0,hold:0,bobT:0,sx:0,sy:0,lastYaw:0,lastPitch:0,lastP:null,dripLen:0,dripT:0,spraying:!1};l.S=D;const j=[jt(ps(1)),jt(ps(2)),jt(ps(3))],xt=jt(ps(9,!0)),Et=j.map(k=>new Cl({map:k,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),Nt=new wn({map:xt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6}),zt=new Rn(1,1),ce=[];let $=0;const ct=new R,Rt=new R;function gt(k,J,it,ht){let ot=ce[$];ot||(ot=new te(zt,Et[0]),ce[$]=ot,n.add(ot)),$=($+1)%h0,ot.material=ht?Nt:Et[Math.random()*3|0],ot.scale.set(it,it,1),ot.position.copy(k).addScaledVector(J,.004),Bt(ot,J),ot.rotateZ(Math.random()*6.28),ot.visible=!0}function Bt(k,J){Math.abs(J.y)>.95?k.up.set(0,0,1):k.up.set(0,1,0),k.lookAt(k.position.x+J.x,k.position.y+J.y,k.position.z+J.z)}const Wt=jt(d0()),wt=new Cl({map:Wt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),yt=new Jd(zt,wt,Ia);yt.frustumCulled=!1,yt.count=0,n.add(yt),yt.instanceMatrix.setUsage(35048);const Jt=new Kt,se=new Ne;let N=0,Ee=0;function pt(k,J,it,ht=1,ot=1,P=!1,dt=0){se.position.copy(k).addScaledVector(J,.003+N%9*4e-4),se.scale.set(it*ht,it*ot,1),se.up.set(0,1,0),Math.abs(J.y)>.95&&se.up.set(0,0,1),se.lookAt(se.position.x+J.x,se.position.y+J.y,se.position.z+J.z),P||se.rotateZ(Math.random()*6.28),se.updateMatrix(),yt.setMatrixAt(N,se.matrix),Jt.set(mr[D.color]),yt.setColorAt(N,Jt),N=(N+1)%Ia,Ee=Math.min(Ia,Ee+1),yt.count=Ee,yt.instanceMatrix.needsUpdate=!0,yt.instanceColor&&(yt.instanceColor.needsUpdate=!0)}const Xt=80;function Ft(k,J){const it=new je;it.setAttribute("position",new en(new Float32Array(Xt*3),3)),it.setAttribute("color",new en(new Float32Array(Xt*3),3));const ht=new dl({size:k,vertexColors:!0,transparent:!0,blending:2,depthWrite:!1,sizeAttenuation:!0,map:jt(Na())}),ot=new Yd(it,ht);return ot.frustumCulled=!1,n.add(ot),{pt:ot,g:it,v:new Float32Array(Xt*3),life:new Float32Array(Xt),max:new Float32Array(Xt),i:0,base:new Float32Array(Xt*3),grav:0}}const ue=Ft(.05),Ot=Ft(.22);ue.grav=6,Ot.grav=-.15;function A(k,J,it,ht,ot,P,dt){for(let G=0;G<ht;G++){const Z=k.i;k.i=(k.i+1)%Xt;const ut=k.g.attributes.position.array;ut[Z*3]=J.x,ut[Z*3+1]=J.y,ut[Z*3+2]=J.z,k.v[Z*3]=it.x*ot*Math.random()+(Math.random()-.5)*ot,k.v[Z*3+1]=it.y*ot*Math.random()+(Math.random()-.3)*ot,k.v[Z*3+2]=it.z*ot*Math.random()+(Math.random()-.5)*ot,k.life[Z]=k.max[Z]=P*(.6+Math.random()*.6),k.base[Z*3]=dt[0],k.base[Z*3+1]=dt[1],k.base[Z*3+2]=dt[2]}}function S(k,J){const it=k.g.attributes.position.array,ht=k.g.attributes.color.array;for(let ot=0;ot<Xt;ot++)if(k.life[ot]>0){k.life[ot]-=J;const P=Math.max(0,k.life[ot]/k.max[ot]);k.v[ot*3+1]-=k.grav*J,it[ot*3]+=k.v[ot*3]*J,it[ot*3+1]+=k.v[ot*3+1]*J,it[ot*3+2]+=k.v[ot*3+2]*J,ht[ot*3]=k.base[ot*3]*P,ht[ot*3+1]=k.base[ot*3+1]*P,ht[ot*3+2]=k.base[ot*3+2]*P}else ht[ot*3]=ht[ot*3+1]=ht[ot*3+2]=0;k.g.attributes.position.needsUpdate=!0,k.g.attributes.color.needsUpdate=!0}const z=new Up;z.far=40;let et=null,st="";l.invalidate=()=>{et=null};function tt(){const k=r();if(!k)return[];if(et&&st===a.zone)return et;const J=[];for(const it in k.groups){const ht=k.groups[it];ht.visible&&ht.traverse(ot=>{ot.isMesh&&ot.visible&&!(ot.material.transparent&&ot.material.opacity<.5&&!ot.material.alphaTest)&&ot.material.side!==2&&J.push(ot)})}return et=J,st=a.zone,J}function Ut(k,J){e.updateMatrixWorld(),k?z.set(k,J):z.setFromCamera({x:0,y:0},e);const it=z.intersectObjects(tt(),!1);for(const ht of it)if(ht.face)return ct.copy(ht.face.normal).transformDirection(ht.object.matrixWorld),ct.dot(z.ray.direction)>0&&ct.negate(),{point:ht.point.clone(),normal:ct.clone(),object:ht.object};return null}function St(k,J){const it=Ut(k,J);if(!it)return null;const ht=it.object.userData.noPaint;if(it.object.userData.crt){gt(it.point,it.normal,.3,!0);const ot=r();ot&&ot.glitch&&ot.glitch(1.1),A(ue,it.point,it.normal,14,2.5,.5,[.6,1,.8])}else ht?A(ue,it.point,it.normal,6,1.8,.35,[1,.7,.25]):(gt(it.point,it.normal,.17+Math.random()*.06,!1),A(ue,it.point,it.normal,10,2.2,.45,[1,.7,.25]));return A(Ot,it.point,it.normal,3,.5,1.1,[.3,.3,.3]),it}l.fire=(k,J,it)=>D.weapon!==0||D.swap<1||D.reload>=0||D.cd>0?!1:D.ammo<=0?(s.click(),l.reload(),!1):(D.ammo--,D.rec=1,D.flash=.06,D.cd=.3,w.rotation.z-=Math.PI/3,s.shot(),St(k,J),Mt(),D.ammo===0&&setTimeout(()=>l.reload(),450),!0),l.reload=()=>{D.weapon!==0||D.reload>=0||D.ammo>=6||(D.reload=0,s.click())},l.switchWeapon=k=>{const J=k===void 0?1-D.weapon:k;J===D.weapon&&D.swap>=1||(D.swapTo=J,D.swap=0,D.reload=-1,D.trigger=!1,s.spray(!1))},l.cycleColor=k=>{D.color=k===void 0?(D.color+1)%mr.length:k,B.color.set(mr[D.color]),Y.material.color.set(mr[D.color]),Mt()},l.setTrigger=k=>{D.trigger=k,D.weapon===0&&k&&l.fire(),k||s.spray(!1)},l.sprayAt=(k,J,it=1)=>{let ht=null;for(let ot=0;ot<it;ot++)ht=At(k,J);return!!ht};function At(k,J){const it=Ut(k,J);if(!it||it.object.userData.noPaint)return null;const ht=new R,ot=.16+Math.random()*.06;pt(it.point,it.normal,ot);for(let P=0;P<2;P++)ht.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.16).projectOnPlane(it.normal),pt(Rt.copy(it.point).add(ht),it.normal,.02+Math.random()*.04);return it}l.clear=()=>{Ee=0,N=0,yt.count=0,ce.forEach(k=>k.visible=!1),$=0},l.counts=()=>({decals:ce.filter(k=>k.visible).length,paint:Ee});const ee=document.getElementById("ammo"),Q=document.getElementById("palette");function Mt(){ee&&(ee.firstElementChild.textContent=D.weapon===0?(D.reload>=0?"…":D.ammo)+"/∞":"ББ",ee.lastElementChild.textContent=D.weapon===0?"Револьвер .357":"Баллончик",Q.style.display=D.weapon===1?"flex":"none",[...Q.children].forEach((k,J)=>k.classList.toggle("on",J===D.color)))}Q&&mr.forEach((k,J)=>{const it=document.createElement("button");it.style.background=k,it.setAttribute("aria-label","Цвет "+(J+1)),it.addEventListener("click",ht=>{ht.stopPropagation(),l.cycleColor(J)}),Q.appendChild(it)}),l.updateHud=Mt,Mt();const kt=k=>k*k*(3-2*k);return l.update=(k,J)=>{D.cd=Math.max(0,D.cd-k);let it=0;D.swap<1&&(D.swap=Math.min(1,D.swap+k/.28),D.swap<.5?it=kt(D.swap*2):(D.weapon!==D.swapTo&&(D.weapon=D.swapTo,v.visible=D.weapon===0,_.visible=D.weapon===1,Mt()),it=1-kt((D.swap-.5)*2)),D.swap>=1&&(it=0));const ht=D.weapon===0?K.rev:K.can;D.bobT+=k*(4+J.speed*5);const ot=Math.min(1,J.speed)*(J.airborne?0:1),P=Math.sin(D.bobT)*.006*ot,dt=Math.abs(Math.cos(D.bobT))*.007*ot-.003*ot;let G=a.yaw-D.lastYaw,Z=a.pitch-D.lastPitch;D.lastYaw=a.yaw,D.lastPitch=a.pitch,G=Math.max(-.2,Math.min(.2,G)),Z=Math.max(-.2,Math.min(.2,Z)),D.sx+=(-G*.35-D.sx)*Math.min(1,k*10),D.sy+=(Z*.35-D.sy)*Math.min(1,k*10),D.rec=Math.max(0,D.rec-k*7);let ut=0;if(D.reload>=0){D.reload+=k;const Ct=1.4,ae=Math.min(1,D.reload/Ct);ut=Math.sin(Math.PI*Math.min(1,ae*1.15)),w.rotation.z+=k*18*Math.sin(Math.PI*ae),D.reload>=Ct&&(D.reload=-1,D.ammo=6,s.click(),Mt())}const mt=D.weapon===0?v:_;if(nt.position.set(ht.x+P+D.sx,ht.y+dt+D.sy-it*.25-ut*.07+Math.min(0,J.vy)*.004,ht.z+D.rec*.05),mt.rotation.x=(D.weapon===1?-.35:0)+D.rec*.28-ut*.55+it*.5,mt.rotation.z=ut*.7+(J.airborne?.04:0),D.flash=Math.max(0,D.flash-k),T.visible=D.flash>0,T.rotation.z=Math.random()*6,f.intensity=D.flash>0?3:0,C.rotation.x=.5-(D.cd>.12?.5:0),Y.visible=!1,D.weapon===1&&D.trigger&&D.swap>=1){if(Y.visible=!0,Y.rotation.z=Math.random()*6,nt.position.x+=(Math.random()-.5)*.002,s.spray(!0),D.sprayT-=k,D.sprayT<=0){D.sprayT=.035;const Ct=At();Ct?(D.lastP&&D.lastP.distanceTo(Ct.point)<.1?D.hold+=.035:(D.hold=0,D.dripLen=0),D.lastP=Ct.point.clone(),D.hold>.6&&Math.abs(Ct.normal.y)<.6&&(D.dripT-=.035,D.dripT<=0&&D.dripLen<.45&&(D.dripT=.12,D.dripLen+=.035,Rt.copy(Ct.point),Rt.y-=D.dripLen,pt(Rt,Ct.normal,.1,.12,.55,!0)))):(D.lastP=null,D.hold=0)}}else D.weapon===1&&s.spray(!1);S(ue,k),S(Ot,k)},l.render=()=>{c.aspect=e.aspect,c.updateProjectionMatrix(),t.clearDepth(),t.render(o,c)},l.paint=yt,l.vm=nt,l.vmScene=o,l.vmCam=c,l}const $t=i=>document.querySelector(i),ms=new URLSearchParams(location.search),ln=ms.get("touch")==="1"||"ontouchstart"in window||navigator.maxTouchPoints>0&&matchMedia("(pointer: coarse)").matches;ln&&document.body.classList.add("touch"),ln?(oc=document.querySelector(".keys .t"))==null||oc.classList.remove("hidden"):(lc=document.querySelector(".keys .t"))==null||lc.classList.add("hidden");const V={started:!1,paused:!1,cardOpen:!1,x:3.4,z:21.6,yaw:-.62,pitch:-.04,eyeY:3+pr,y:3,vy:0,grounded:!0,zone:"street",locked:!1,bob:0,sound:!1,zoneBtn:1},le={keys:{},mx:0,mz:0,lx:0,ly:0,run:!1};let re=null,Fa=0,Jl=0,Ae,rn,Ve,Oa=$t("#stage"),Yl=ms.get("fixed")==="1",cn=1,gr=1,xr="auto";async function Kl(){xr=$t("#q").value;const i=xr==="low"||ms.get("q")==="low";gr=Math.min(window.devicePixelRatio||1,ln?1.5:2),cn=i?1:gr;try{Ae=new Gd({antialias:!i&&!ln,powerPreference:"high-performance"})}catch{$t("#go").textContent="WebGL недоступен";return}Ae.setPixelRatio(cn),Ae.outputColorSpace=Ke,Ae.toneMapping=4,Ae.toneMappingExposure=1,Ae.shadowMap.enabled=!1,Ae.autoClear=!1,Ae.info.autoReset=!1,Oa.appendChild(Ae.domElement),Np(Math.min(Ae.capabilities.getMaxAnisotropy(),i?2:8)),rn=new nn(72,1,.05,160),rn.rotation.order="YXZ",za(),gs(15),await Qp(),gs(40),await new Promise(e=>setTimeout(e,30)),Ve=f0({low:i}),gs(90),Ve.redrawMural(),Ve.redrawDoor(),Ve.redrawSign(),re=m0({renderer:Ae,camera:rn,scene:Ve.scene,getWorld:()=>Ve,audio:$n,state:V}),v0(),M0(),Ha(1),Ae.render(Ve.scene,rn),gs(100);const t=$t("#go");t.disabled=!1,t.textContent="Спуститься",$t("#loadbar").classList.add("hidden"),requestAnimationFrame(ac),window.__tour=T0}function gs(i){const t=$t("#loadbar i");t&&(t.style.width=i+"%")}function za(){const i=window.innerWidth,t=window.innerHeight;Ae.setSize(i,t,!0),rn.aspect=i/t,rn.fov=i/t<.9?82:72,rn.updateProjectionMatrix()}addEventListener("resize",()=>{Ae&&za()}),addEventListener("orientationchange",()=>setTimeout(()=>Ae&&za(),250));function g0(i,t){for(const e of a0)if(i>=e[0]&&i<=e[1]&&t>=e[2]&&t<=e[3])return!0;return!1}function ka(i,t){if(!g0(i,t))return!0;for(const e of o0)if(i>e[0]-hs&&i<e[1]+hs&&t>e[2]-hs&&t<e[3]+hs)return!0;return!1}function x0(i,t){return ka(i,t)?ka(i,V.z)?ka(V.x,t)?!1:(V.z=t,!0):(V.x=i,!0):(V.x=i,V.z=t,!0)}const xs={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};addEventListener("keydown",i=>{V.started&&(xs[i.code]&&(le.keys[xs[i.code]]=!0,i.preventDefault()),(i.code==="ShiftLeft"||i.code==="ShiftRight")&&(le.run=!0),i.code==="KeyE"&&!i.repeat&&(V.cardOpen?_r():ys()),i.code==="Escape"&&V.cardOpen&&_r(),i.code==="Space"&&(i.preventDefault(),i.repeat||Ba()),!V.cardOpen&&!V.paused&&!i.repeat&&re&&(i.code==="KeyQ"&&re.switchWeapon(),i.code==="KeyR"&&re.reload(),i.code==="KeyC"&&re.cycleColor(),i.code==="KeyX"&&re.clear()),/^Digit[1-4]$/.test(i.code)&&!i.repeat&&Wa(+i.code.slice(5)))}),addEventListener("keyup",i=>{xs[i.code]&&(le.keys[xs[i.code]]=!1),(i.code==="ShiftLeft"||i.code==="ShiftRight")&&(le.run=!1)}),addEventListener("blur",()=>{le.keys={},le.run=!1});function Ql(i,t){V.yaw-=i*.0022,V.pitch=Math.max(-1.35,Math.min(1.35,V.pitch-t*.0022))}document.addEventListener("mousemove",i=>{V.locked&&Ql(i.movementX,i.movementY)});let Xi=!1;function vs(){if(!(ln||V.locked||Xi)){Xi=!0,setTimeout(()=>{Xi=!1},800);try{const i=Ae.domElement.requestPointerLock();i&&i.catch&&i.catch(()=>{Xi=!1})}catch{Xi=!1}}}function vr(){try{document.pointerLockElement&&document.exitPointerLock()}catch{}}document.addEventListener("pointerlockerror",()=>{Xi=!1}),addEventListener("blur",vr),addEventListener("pagehide",vr),addEventListener("beforeunload",vr),document.addEventListener("visibilitychange",()=>{document.hidden&&vr()}),document.addEventListener("click",i=>{i.target.closest&&i.target.closest("a[href]")&&vr()},!0);let un=null;Oa.addEventListener("pointerdown",i=>{!V.started||V.cardOpen||i.pointerType!=="mouse"||(V.locked?re&&(i.button===0?Sr(!0):i.button===2&&re.cycleColor()):(vs(),un={x:i.clientX,y:i.clientY,t:performance.now(),moved:0}))}),addEventListener("contextmenu",i=>{V.started&&i.preventDefault()}),addEventListener("wheel",i=>{if(!V.started||V.cardOpen||V.paused||!re)return;const t=performance.now();t-Jl<260||(Jl=t,re.switchWeapon())},{passive:!0});function Sr(i){re&&(i&&(!V.started||V.paused||V.cardOpen)||re.setTrigger(i))}function Ba(){!V.started||V.paused||V.cardOpen||!V.grounded||(V.vy=4.3,V.grounded=!1)}const Ss=(i,t,e)=>{const n=$t(i);n.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation();try{n.setPointerCapture(r.pointerId)}catch{}t()}),e&&["pointerup","pointercancel"].forEach(r=>n.addEventListener(r,e))};Ss("#btnJump",Ba),Ss("#btnFire",()=>Sr(!0),()=>Sr(!1)),Ss("#btnSwap",()=>re&&re.switchWeapon()),Ss("#btnRel",()=>re&&re.reload()),addEventListener("pointermove",i=>{un&&i.pointerType==="mouse"&&!V.locked&&(Ql(i.clientX-un.x,i.clientY-un.y),un.moved+=Math.abs(i.clientX-un.x)+Math.abs(i.clientY-un.y),un.x=i.clientX,un.y=i.clientY)}),addEventListener("pointerup",i=>{i.pointerType==="mouse"&&i.button===0&&Sr(!1),un&&un.moved<6&&performance.now()-un.t<300&&!V.locked&&ys(),un=null}),document.addEventListener("pointerlockchange",()=>{const i=V.locked;V.locked=document.pointerLockElement===Ae.domElement,V.locked||Sr(!1),i&&!V.locked&&V.started&&!V.cardOpen&&!ln&&ic(!0)});function $l(i,t){const e=i.firstElementChild,n=44;let r=null,s=0,a=0;function l(c){let h=(c.clientX-s)/n,f=(c.clientY-a)/n;const u=Math.hypot(h,f);u>1&&(h/=u,f/=u),e.style.transform=`translate(${h*n}px,${f*n}px)`,t(h,f)}i.addEventListener("pointerdown",c=>{if(r!==null)return;r=c.pointerId;try{i.setPointerCapture(r)}catch{}const h=i.getBoundingClientRect();s=h.left+h.width/2,a=h.top+h.height/2,l(c),c.preventDefault()}),i.addEventListener("pointermove",c=>{c.pointerId===r&&l(c)});const o=c=>{c.pointerId===r&&(r=null,e.style.transform="",t(0,0))};i.addEventListener("pointerup",o),i.addEventListener("pointercancel",o)}$l($t("#stickL"),(i,t)=>{le.mx=i,le.mz=t}),$l($t("#stickR"),(i,t)=>{le.lx=i,le.ly=t}),$t("#actBtn").addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),ys()});let qi=null;const _s=new Map;function v0(){const i=$t("#markers");Ve.hotspots.forEach((t,e)=>{const n=document.createElement("div");n.className="mk",n.textContent="+",n.style.display="none",n.addEventListener("pointerdown",r=>{r.stopPropagation()}),n.addEventListener("click",r=>{r.stopPropagation(),Ms(t)}),i.appendChild(n),_s.set(t,n)})}const Qn=new R,tc=new R;function S0(){rn.getWorldDirection(tc);let i=null,t=0;const e=rn.position;for(const a of Ve.hotspots){const l=_s.get(a);if(a.zone!==V.zone||V.cardOpen||!V.started){l.style.display="none";continue}Qn.copy(a.pos).sub(e);const o=Qn.length();Qn.divideScalar(o);const c=Qn.dot(tc),h=a.zone==="street"?14:6.5;Qn.copy(a.pos).project(rn);const f=Qn.z<1&&o<h&&c>.2;if(f){l.style.display="flex";const p=(Qn.x*.5+.5)*innerWidth,g=(-Qn.y*.5+.5)*innerHeight;l.style.left=p+"px",l.style.top=g+"px",l.style.opacity=String(Math.max(.35,Math.min(1,1.5-o/h)))}else l.style.display="none";const u=a.zone==="street"?16:5.2;if(c>.93&&o<u&&f){const p=c-o*.01;p>t&&(t=p,i=a)}}qi=i,_s.forEach((a,l)=>a.classList.toggle("focus",l===qi));const n=$t("#prompt"),r=$t("#cross"),s=$t("#actBtn");qi?(n.classList.add("on"),r.classList.add("on"),n.lastElementChild.textContent=" Осмотреть: "+qi.title,n.firstElementChild.textContent=ln?"●":"E",s.classList.add("on")):(n.classList.remove("on"),r.classList.remove("on"),s.classList.remove("on"))}function ys(){V.cardOpen||qi&&Ms(qi)}let ec=0;function Ms(i){re&&re.setTrigger(!1),V.cardOpen=!0,ec=performance.now(),document.pointerLockElement&&document.exitPointerLock(),$t("#cardImg").src=`../assets/img/${i.img}.webp`,$t("#cardImg").alt=i.title,$t("#cardTitle").textContent=i.title,$t("#cardText").textContent=i.text,$t("#cardBook").href=i.href,$t("#card").classList.remove("hidden"),$t("#shade").classList.remove("hidden"),le.keys={},le.mx=le.mz=le.lx=le.ly=0}function _r(){V.cardOpen&&(V.cardOpen=!1,$t("#card").classList.add("hidden"),$t("#shade").classList.add("hidden"),ln||vs())}$t("#cardClose").addEventListener("click",_r),$t("#shade").addEventListener("click",()=>{performance.now()-ec>450&&_r()}),Oa.addEventListener("click",i=>{if(!ln||!V.started||V.cardOpen)return;let t=null,e=80;_s.forEach((n,r)=>{if(n.style.display==="none")return;const s=parseFloat(n.style.left)-i.clientX,a=parseFloat(n.style.top)-i.clientY,l=Math.hypot(s,a);l<e&&(e=l,t=r)}),t&&Ms(t)});let Va=!1;function Ha(i,t){const e=Zl[i];V.x=e.x,V.z=e.z,V.yaw=e.yaw,V.pitch=e.pitch,V.y=ds(e.x,e.z),V.vy=0,V.grounded=!0,V.eyeY=V.y+pr,Ga(Da(e.x,e.z),!0),V.zoneBtn=i,nc()}function Wa(i){if(!Zl[i]||Va)return;Va=!0;const t=$t("#fade");t.classList.add("on"),setTimeout(()=>{Ha(i),setTimeout(()=>{t.classList.remove("on"),Va=!1},120)},300)}document.querySelectorAll("#zones button").forEach(i=>i.addEventListener("click",()=>{Wa(+i.dataset.z),i.blur()}));function nc(){const i={street:1,entry:1,hall:2,lounge:3,studio:4};document.querySelectorAll("#zones button").forEach(t=>t.classList.toggle("on",+t.dataset.z===i[V.zone]))}function Ga(i,t){V.zone=i,Ve.setVisibility(i),re&&re.invalidate(),Ve.setZoneLights(i,t);const[e,n]=l0[i];$t("#zoneName").textContent=e,$t("#zoneSub").textContent=n,nc()}function ic(i){$t("#pause").classList.toggle("hidden",!i),V.paused=i}$t("#resume").addEventListener("click",()=>{ic(!1),ln||vs()}),$t("#go").addEventListener("click",()=>{if(!Ve)return;$t("#splash").classList.add("hidden"),$t("#hud").classList.remove("hidden"),ln&&$t("#touch").classList.remove("hidden"),V.started=!0,document.body.classList.add("started"),ln||vs(),ms.get("fs")==="1"&&document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(()=>{})});let Vt=null,yr=null,ji=null,rc=0;function _0(){if(!Vt)try{Vt=new(window.AudioContext||window.webkitAudioContext);const i=Vt.sampleRate*2,t=Vt.createBuffer(1,i,Vt.sampleRate),e=t.getChannelData(0);let n=0;for(let l=0;l<i;l++){const o=Math.random()*2-1;n=(n+.02*o)/1.02,e[l]=n*3.5}const r=Vt.createBufferSource();r.buffer=t,r.loop=!0,ji=Vt.createBiquadFilter(),ji.type="lowpass",ji.frequency.value=220,yr=Vt.createGain(),yr.gain.value=0,r.connect(ji).connect(yr).connect(Vt.destination),r.start();const s=Vt.createOscillator();s.frequency.value=50;const a=Vt.createGain();a.gain.value=.015,s.connect(a).connect(Vt.destination),s.start()}catch{Vt=null}}function y0(){if(!Vt||!V.sound)return;const i=Vt.currentTime,t=Vt.createOscillator(),e=Vt.createGain();t.type="triangle",t.frequency.setValueAtTime(110+Math.random()*30,i),t.frequency.exponentialRampToValueAtTime(40,i+.08),e.gain.setValueAtTime(.12,i),e.gain.exponentialRampToValueAtTime(.001,i+.1),t.connect(e).connect(Vt.destination),t.start(i),t.stop(i+.12)}const $n={shot(){if(!V.sound||!Vt)return;const i=Vt.currentTime,t=Math.floor(Vt.sampleRate*.25),e=Vt.createBuffer(1,t,Vt.sampleRate),n=e.getChannelData(0);for(let p=0;p<t;p++)n[p]=(Math.random()*2-1)*Math.pow(1-p/t,3);const r=Vt.createBufferSource();r.buffer=e;const s=Vt.createBiquadFilter();s.type="bandpass",s.frequency.value=1800,s.Q.value=.6;const a=Vt.createGain();a.gain.value=.7;const l=Vt.createOscillator();l.type="sine",l.frequency.setValueAtTime(150,i),l.frequency.exponentialRampToValueAtTime(40,i+.25);const o=Vt.createGain();o.gain.setValueAtTime(.9,i),o.gain.exponentialRampToValueAtTime(.001,i+.3);const c=Vt.createDelay();c.delayTime.value=.13;const h=Vt.createGain();h.gain.value=.35;const f=Vt.createBiquadFilter();f.type="lowpass",f.frequency.value=1500;const u=Vt.createGain();u.gain.value=.6,u.connect(Vt.destination),r.connect(s).connect(a).connect(u),l.connect(o).connect(u),a.connect(c),o.connect(c),c.connect(f).connect(h).connect(c),f.connect(Vt.destination),r.start(i),l.start(i),l.stop(i+.35)},click(){if(!V.sound||!Vt)return;const i=Vt.currentTime,t=Vt.createOscillator(),e=Vt.createGain();t.type="square",t.frequency.value=1400,e.gain.setValueAtTime(.08,i),e.gain.exponentialRampToValueAtTime(.001,i+.04),t.connect(e).connect(Vt.destination),t.start(i),t.stop(i+.05)},spray(i){if((!Vt||!V.sound)&&(i=!1),i){if(!$n._g){const t=Vt.sampleRate,e=Vt.createBuffer(1,t,Vt.sampleRate),n=e.getChannelData(0);for(let a=0;a<t;a++)n[a]=Math.random()*2-1;const r=Vt.createBufferSource();r.buffer=e,r.loop=!0;const s=Vt.createBiquadFilter();s.type="highpass",s.frequency.value=3500,$n._g=Vt.createGain(),$n._g.gain.value=0,r.connect(s).connect($n._g).connect(Vt.destination),r.start()}$n._g.gain.setTargetAtTime(.12,Vt.currentTime,.02)}else $n._g&&$n._g.gain.setTargetAtTime(0,Vt.currentTime,.03)}};$t("#snd").addEventListener("click",()=>{V.sound=!V.sound,$t("#snd").textContent=V.sound?"🔊":"🔇",V.sound&&(_0(),Vt&&Vt.state==="suspended"&&Vt.resume()),yr&&(yr.gain.value=V.sound?.06:0)});const Mr=$t("#minimap"),Oe=Mr.getContext("2d"),bs={x0:-4,z0:-1.6,s:11.4};let br=null;function Ts(i,t){return[(i-bs.x0)*bs.s,(t-bs.z0)*bs.s]}function M0(){br=document.createElement("canvas"),br.width=Mr.width,br.height=Mr.height;const i=br.getContext("2d");i.fillStyle="rgba(8,10,16,.9)",i.fillRect(0,0,Mr.width,Mr.height);const t=(e,n,r,s,a,l)=>{const[o,c]=Ts(e,n),[h,f]=Ts(r,s);i.fillStyle=a,i.fillRect(o,c,h-o,f-c),l&&(i.strokeStyle=l,i.lineWidth=2,i.strokeRect(o,c,h-o,f-c))};t(-4,19.2,14,25,"rgba(70,74,92,.5)",null),t(5.25,14,14,19.2,"rgba(110,60,50,.5)",null),t(3.75,14.4,5.25,19.2,"rgba(120,120,130,.6)","#8a8f9a"),t(3.75,5.2,5.25,14.4,"rgba(150,60,200,.55)","#c070ff"),t(0,0,6,5,"rgba(40,150,70,.55)","#35e06b"),t(6,0,9,5,"rgba(200,190,160,.4)","#d7ceb0"),t(9,-1,12,5,"rgba(60,100,220,.55)","#6a95ff"),i.fillStyle="#fff",i.font="600 15px Manrope, Arial, sans-serif",i.textAlign="center",[["ул.",5,22.4],["зал",3,2.7],["лаундж",7.5,2.7],["звук",10.5,2],["вход",4.5,9.5]].forEach(([e,n,r])=>{const[s,a]=Ts(n,r);i.fillText(e,s,a)})}function b0(){Oe.drawImage(br,0,0);const[i,t]=Ts(V.x,V.z);Oe.save(),Oe.translate(i,t),Oe.rotate(-V.yaw),Oe.fillStyle="rgba(255,59,48,.25)",Oe.beginPath(),Oe.moveTo(0,0),Oe.arc(0,0,40,-Math.PI/2-.6,-Math.PI/2+.6),Oe.fill(),Oe.fillStyle="#ff3b30",Oe.strokeStyle="#fff",Oe.lineWidth=2,Oe.beginPath(),Oe.moveTo(0,-9),Oe.lineTo(7,8),Oe.lineTo(-7,8),Oe.closePath(),Oe.fill(),Oe.stroke(),Oe.restore()}let sc=performance.now(),Xa=0,qa=0,As=0,Es=0;function ac(i){requestAnimationFrame(ac);let t=(i-sc)/1e3;if(sc=i,t>.1&&(t=.1),V.started&&!V.paused&&!V.cardOpen){ln&&(le.lx||le.ly)&&(V.yaw-=le.lx*t*2.4,V.pitch=Math.max(-1.3,Math.min(1.3,V.pitch-le.ly*t*1.7)));let s=0,a=0;le.keys.f&&(a-=1),le.keys.b&&(a+=1),le.keys.l&&(s-=1),le.keys.r&&(s+=1),s+=le.mx,a+=le.mz;const l=Math.min(1,Math.hypot(s,a));if(Fa=l*(le.run?1.5:1),l>.05){const o=(le.run?4.4:2.5)*l*t,c=Math.hypot(s,a);s/=c,a/=c;const h=Math.sin(V.yaw),f=Math.cos(V.yaw),u=(s*f+a*h)*o,p=(-s*h+a*f)*o,g=V.x,x=V.z;x0(V.x+u,V.z+p);const m=Math.hypot(V.x-g,V.z-x);V.bob+=m*5.2,m>0&&V.bob-rc>2.6&&(rc=V.bob,y0())}}V.started&&!V.paused&&!V.cardOpen&&(le.keys.f||le.keys.b||le.keys.l||le.keys.r||le.mx||le.mz)||(Fa=0);const e=ds(V.x,V.z);if(V.grounded&&(e<V.y-.3?(V.grounded=!1,V.vy=0):V.y=e),!V.grounded){V.vy-=13*t,V.y+=V.vy*t;const a=(V.z>=15.2?99:2.8)-.12-pr;V.y>a&&(V.y=a,V.vy>0&&(V.vy=0)),V.y<=e&&(V.y=e,V.vy=0,V.grounded=!0)}const n=V.y+pr;V.eyeY=V.grounded?V.eyeY+(n-V.eyeY)*Math.min(1,t*14):n;const r=Da(V.x,V.z);if(r!==V.zone&&Ga(r,!1),Ve&&Ve.update(t,V.x,V.z,V.zone),rn.position.set(V.x,V.eyeY+Math.sin(V.bob)*.018,V.z),rn.rotation.set(V.pitch,V.yaw,0),rn.updateMatrixWorld(),Ve&&(S0(),re&&re.update(t,{speed:Fa,airborne:!V.grounded,vy:V.vy}),Ae.clear(),Ae.info.reset(),Ae.render(Ve.scene,rn),re&&V.started&&re.render()),Xa+=t,Xa>.066&&(Xa=0,b0()),ji&&(ji.frequency.value=V.zone==="street"?700:260),xr==="auto"&&!Yl&&V.started&&(qa+=t,As++,Es-=t,As>=45)){const s=qa/As;qa=0,As=0,Es<=0&&(s>.026&&cn>.6?(cn=Math.max(.6,cn-.15),Ae.setPixelRatio(cn),Es=1.5):s<.0155&&cn<gr&&(cn=Math.min(gr,cn+.1),Ae.setPixelRatio(cn),Es=3))}}$t("#q").addEventListener("change",()=>{xr=$t("#q").value,Ae&&(cn=xr==="low"?1:gr,Ae.setPixelRatio(cn))});const T0={teleport:i=>{Ha(i)},teleportFade:Wa,setView:(i,t,e,n)=>{V.x=i,V.z=t,V.yaw=e,V.pitch=n,V.y=ds(i,t),V.vy=0,V.grounded=!0,V.eyeY=V.y+pr,Ga(Da(i,t),!0)},start:()=>$t("#go").click(),state:V,input:le,get world(){return Ve},info:()=>({calls:Ae.info.render.calls,tris:Ae.info.render.triangles,tex:Ae.info.memory.textures,geo:Ae.info.memory.geometries,pr:cn}),fire:()=>re.fire(),switchWeapon:i=>re.switchWeapon(i),setColor:i=>re.cycleColor(i),clearAll:()=>re.clear(),counts:()=>re.counts(),sprayAt:(i,t,e,n,r,s,a)=>{const l=R;return i===void 0?re.sprayAt(void 0,void 0,1):re.sprayAt(new l(i,t,e),new l(n,r,s).normalize(),a||1)},fireAt:(i,t,e,n,r,s)=>{const a=R;return re.S.cd=0,re.S.weapon!==0&&re.switchWeapon(0),re.fire(new a(i,t,e),new a(n,r,s).normalize())},get weapons(){return re},jump:Ba,interact:ys,closeCard:_r,hotspots:()=>Ve.hotspots.map(i=>i.id),open:i=>Ms(Ve.hotspots.find(t=>t.id===i)),fixed:()=>{Yl=!0}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Kl):Kl()})();
