webpackJsonp([8,12],{107:function(e,t,a){var i=a(108);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(48)("1f49331f",i,!0)},108:function(e,t,a){t=e.exports=a(47)(void 0),t.push([e.i,"#apply_typeform[data-v-17f61316]{width:100%;height:100%}",""])},109:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(10);t.default={components:{QModal:i.q,QBtn:i.a,QWindowResizeObservable:i.A,QIcon:i.j},data:function(){return{windowSize:{},typeform_link:""}},methods:{setVideoContainerSize:function(){var e="75%",t="75%";return this.windowSize.width<800&&(e="100%",t="100%"),{width:e,height:t}},onResize:function(e){this.windowSize=e},openModal:function(e){this.typeform_link=e,this.$refs.basicModal.open()}}}},110:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-window-resize-observable",{on:{resize:e.onResize}}),e._v(" "),a("q-modal",{ref:"basicModal",attrs:{"content-css":e.setVideoContainerSize()}},[a("div",{staticClass:"absolute-right"},[a("q-btn",{attrs:{color:"primary"},on:{click:function(t){e.$refs.basicModal.close()}}},[a("q-icon",{attrs:{name:"close"}})],1)],1),e._v(" "),a("iframe",{attrs:{id:"apply_typeform",src:e.typeform_link,frameborder:"0"}})],1)],1)},staticRenderFns:[]}},168:function(e,t,a){var i=a(169);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(48)("7b654d60",i,!0)},169:function(e,t,a){t=e.exports=a(47)(void 0),t.push([e.i,"#main-text-and-call[data-v-1078722c]{padding-left:5%;padding-right:5%}@media (max-width:991px){#main-text-and-call[data-v-1078722c]{padding-bottom:5%}}#online-asking[data-v-1078722c]{padding-top:1%;padding-left:65px;cursor:pointer;color:#e2007a}.main-pres-background[data-v-1078722c]{background:#faf9f8}.gallery-cropper[data-v-1078722c]{width:100%;height:auto;max-height:500px}.img-overlay[data-v-1078722c]{position:relative}.img-overlay svg[data-v-1078722c]{position:absolute;top:0;left:0;height:100%}@media (max-width:991px){.img-overlay svg[data-v-1078722c]{display:none}}.img-overlay q-gallery-carousel[data-v-1078722c]{width:100%;display:block;height:auto}.q-btn[data-v-1078722c]{font-weight:700}",""])},170:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(10),o=a(50),n=a.n(o);t.default={components:{QGalleryCarousel:i.i,QBtn:i.a,Modal:n.a},data:function(){return{gallery:["statics/home_care_1.jpg","statics/home_care_2.jpg","statics/home_care_3.jpg","statics/home_care_4.jpg"]}}}},171:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 self-center",attrs:{id:"main-text-and-call"}},[a("h1",[e._v("Accompagner le quotidien, stimuler les envies.")]),e._v(" "),a("h2",[e._v("Nous sommes des professionnels passionnés par notre métier. Nous créons des liens sur le long terme avec les personnes âgées.")]),e._v(" "),a("q-btn",{attrs:{color:"primary",big:""}},[a("a",{staticClass:"btn-call",attrs:{href:"tel:+33179755475"}},[e._v("Appeler le 01 79 75 54 75")])]),e._v(" "),a("p",{attrs:{id:"online-asking"},on:{click:function(t){e.$refs.infoModal.openModal("https://alenvi.typeform.com/to/Hq6cm5")}}},[e._v("Demande en ligne")]),e._v(" "),a("modal",{ref:"infoModal"})],1),e._v(" "),a("div",{staticClass:"col-lg-6 img-overlay self-center"},[a("q-gallery-carousel",{staticClass:"gallery-cropper",attrs:{infinite:"",autoplay:"",arrows:!1,src:e.gallery}}),e._v(" "),a("svg",{attrs:{viewBox:"25 0 592 398"}},[a("path",{attrs:{d:"M27,71.5a71.43,71.43,0,0,0,2.48,18.73L105,399H-71V0H98.5A71.5,71.5,0,0,0,27,71.5Z",fill:"#FFFFFF"}})])],1)])},staticRenderFns:[]}},50:function(e,t,a){function i(e){a(107)}var o=a(9)(a(109),a(110),i,"data-v-17f61316",null);e.exports=o.exports},55:function(e,t,a){function i(e){a(168)}var o=a(9)(a(170),a(171),i,"data-v-1078722c",null);e.exports=o.exports}});