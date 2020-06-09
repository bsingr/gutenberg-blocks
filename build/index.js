!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"),require("wp"));else if("function"==typeof define&&define.amd)define(["React","wp"],t);else{var n="object"==typeof exports?t(require("React"),require("wp")):t(e.React,e.wp);for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,(function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"registerBlocks",(function(){return G}));var o=n(1),a=n(0),r=n.n(a);n(3);const{Fragment:l}=o.element,{__:c}=o.i18n,{Toolbar:i,IconButton:s}=o.components,{BlockControls:u,RichText:m,MediaUpload:p}=o.editor,d={title:c("Image"),description:c("A custom block for Gutenberg Cloud"),icon:"cover-image",attributes:{src:{type:"string"},alt:{type:"string"},caption:{type:"string"}},edit:({attributes:e,className:t,setAttributes:n})=>r.a.createElement(l,null,r.a.createElement("figure",{className:t},e.src&&r.a.createElement("img",{src:e.src,alt:e.alt}),r.a.createElement(m,{tagName:"figcaption",value:e.caption,placeholder:c("Image caption"),onChange:e=>n({caption:e}),formattingControls:[]})),r.a.createElement(u,null,r.a.createElement(i,null,r.a.createElement(p,{allowedTypes:["image"],onSelect:(...e)=>(e=>{n({src:e.url,alt:e&&e.alt})})(...e),render:({open:e})=>r.a.createElement(s,{className:"components-toolbar__control",label:c("Edit image"),icon:"edit",onClick:e})})))),save:({attributes:e,className:t})=>r.a.createElement("figure",{className:t},r.a.createElement("img",{src:e.src,alt:e.alt}),r.a.createElement(m.Content,{tagName:"figcaption",value:e.caption}))};n(5);const{Fragment:g}=o.element,{__:f}=o.i18n,{PanelBody:b,TextControl:y,ToggleControl:E,RadioControl:C}=o.components,{RichText:v,InspectorControls:x}=o.editor;function h(e,t){let n=e;return"button"!=t.style&&(n=`${n} ${n}--${t.style}`),n}const N={title:f("Call To Action Button"),description:f("A CTA button that links to some content"),icon:"button",attributes:{text:{type:"string"},url:{type:"string"},targetNewWindow:{type:"boolean"},style:{type:"string"}},edit:({attributes:e,className:t,setAttributes:n})=>r.a.createElement(g,null,r.a.createElement(x,null,r.a.createElement(b,{title:f("CTA settings")},r.a.createElement(y,{label:f("Link to Content"),value:e.url||"/my-path",onChange:e=>n({url:e})}),r.a.createElement(C,{label:"Display Style",selected:e.style||"button",options:[{label:"Button",value:"button"},{label:"Link",value:"link"}],onChange:e=>n({style:e})}),r.a.createElement(E,{label:f("Open hyperlink in new tab?"),onChange:()=>n({targetNewWindow:!e.targetNewWindow}),checked:e.targetNewWindow}))),r.a.createElement(v,{className:h(t,e),tagName:"a",value:e.text,placeholder:f("Button Text"),target:e.targetNewWindow?"_blank":"_self",onChange:e=>n({text:e}),formattingControls:[]})),save:({attributes:e,className:t})=>r.a.createElement(v.Content,{tagName:"a",className:h(t,e),href:e.url,value:e.text,target:e.targetNewWindow?"_blank":"_self",rel:"noreferrer noopener"})},{Component:T}=wp.element;class k extends T{constructor(e){super(...arguments)}render(){return React.createElement("div",{className:this.props.className},this.props.children)}}n(6);const{Fragment:w}=o.element,{__:_}=o.i18n,{PanelBody:A,RangeControl:O,ToggleControl:B}=o.components,{BlockControls:j,RichText:R,AlignmentToolbar:S,InnerBlocks:P,InspectorControls:q}=o.editor,F={title:_("Accordion"),description:_("A custom Accordion block for Gutenberg Cloud"),icon:"cover-image",attributes:{src:{type:"string"},alt:{type:"string"},caption:{type:"string"},accordionTitle:{type:"string"},accordionText:{type:"string"},accordionOpen:{type:"boolean",default:!1}},edit:({attributes:e,className:t,setAttributes:n})=>r.a.createElement(w,null,r.a.createElement(j,{key:"controls"},r.a.createElement(S,{value:e.accordionAlignment,onChange:e=>n({accordionAlignment:e})})),r.a.createElement(q,{key:"inspector"},r.a.createElement(A,null,r.a.createElement(O,{label:_("Title Font Size","atomic-blocks"),value:e.accordionFontSize,onChange:e=>n({accordionFontSize:e}),min:14,max:24,step:1}),r.a.createElement(B,{label:_("Open by default","atomic-blocks"),checked:e.accordionOpen,onChange:()=>n({accordionOpen:!e.accordionOpen})}))),r.a.createElement(k,null,r.a.createElement(R,{tagName:"p",placeholder:_("Accordion Title"),value:e.accordionTitle,className:"",onChange:e=>n({accordionTitle:e})}),r.a.createElement("div",{className:"ab-accordion-text"},r.a.createElement(R,{tagName:"p",placeholder:_("Accordion Text"),value:e.accordionText,className:"",onChange:e=>n({accordionText:e})})))),save:({attributes:e,className:t})=>r.a.createElement("details",{open:e.accordionOpen},r.a.createElement("summary",{class:"123"},r.a.createElement(R.Content,{value:e.accordionTitle})),r.a.createElement("div",{class:"456"},r.a.createElement(R.Content,{value:e.accordionText})))},{registerBlockType:I}=o.blocks,{dispatch:W,select:M}=o.data,{__:z}=o.i18n,$={slug:"coliquio",title:z("coliquio Blocks")};function G(){const e=M("core/blocks").getCategories().filter(e=>e.slug!==$.slug);W("core/blocks").setCategories([$,...e]),I($.slug+"/image",{category:$.slug,...d}),I($.slug+"/cta",{category:$.slug,...N}),I($.slug+"/accordion",{category:$.slug,...F})}G()},function(e,t){},,function(e,t){},function(e,t){}])}));