webpackJsonp([6,12,18],{104:function(e,t,a){var i=a(105);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(49)("30a688ff",i,!0)},105:function(e,t,a){t=e.exports=a(48)(void 0),t.push([e.i,'.breadcrumbs[data-v-1128def9]:after{clear:both;content:""}.breadcrumbs[data-v-1128def9]{list-style:none}.breadcrumbs li[data-v-1128def9]{float:left;display:inline-block}.breadcrumbs li[data-v-1128def9]:after{display:inline-block;content:"\\BB";margin:0 .6em;color:#737373}.breadcrumbs li[data-v-1128def9]:last-of-type:after{display:none}.breadcrumbs li a[data-v-1128def9]{color:#737373}.breadcrumbs li a[data-v-1128def9]:hover,li.current>a[data-v-1128def9]{color:#e2007a}',""])},106:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},107:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("ul",{staticClass:"breadcrumbs"},e._l(e.$breadcrumbs,function(t,i){return a("li",{class:{current:i===e.$breadcrumbs.length-1}},[a("router-link",{attrs:{to:{path:t.meta.name}}},[e._v("\n        "+e._s(t.meta.breadcrumb)+"\n      ")])],1)}))])},staticRenderFns:[]}},108:function(e,t,a){var i=a(109);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(49)("1f49331f",i,!0)},109:function(e,t,a){t=e.exports=a(48)(void 0),t.push([e.i,"#apply_typeform[data-v-17f61316]{width:100%;height:100%}",""])},110:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(9);t.default={components:{QModal:i.q,QBtn:i.a,QWindowResizeObservable:i.y,QIcon:i.j},data:function(){return{windowSize:{},typeform_link:""}},methods:{setVideoContainerSize:function(){var e="75%",t="75%";return this.windowSize.width<800&&(e="100%",t="100%"),{width:e,height:t}},onResize:function(e){this.windowSize=e},openModal:function(e){this.typeform_link=e,this.$refs.basicModal.open()}}}},111:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-window-resize-observable",{on:{resize:e.onResize}}),e._v(" "),a("q-modal",{ref:"basicModal",attrs:{"content-css":e.setVideoContainerSize()}},[a("div",{staticClass:"absolute-right"},[a("q-btn",{attrs:{color:"primary"},on:{click:function(t){e.$refs.basicModal.close()}}},[a("q-icon",{attrs:{name:"close"}})],1)],1),e._v(" "),a("iframe",{attrs:{id:"apply_typeform",src:e.typeform_link,frameborder:"0"}})],1)],1)},staticRenderFns:[]}},210:function(e,t,a){var i=a(211);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(49)("e107b1ae",i,!0)},211:function(e,t,a){t=e.exports=a(48)(void 0),t.push([e.i,".breadcrumb[data-v-6838dbe8]{padding-left:1%}@media (max-width:1024px) and (min-width:320px){.breadcrumb[data-v-6838dbe8]{padding-left:0}}@media (min-width:1199px){.breadcrumb[data-v-6838dbe8]{padding-left:2.3%}}.pres-background[data-v-6838dbe8]{background:linear-gradient(90deg,#faf9f8,#fff)}#pres-text[data-v-6838dbe8]{padding-left:5%;padding-right:5%}@media (max-width:991px){#pres-text[data-v-6838dbe8]{padding-bottom:5%}}.title-margin-bottom[data-v-6838dbe8]{margin-bottom:3%}.alenvi-video[data-v-6838dbe8]{width:100%;height:auto;min-height:325px;max-width:500px}@media (max-width:1200px){.alenvi-video[data-v-6838dbe8]{max-width:100%}}@media (max-width:1200px){.section-margin[data-v-6838dbe8]{margin-bottom:3%}}",""])},212:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(9),n=a(50),r=a.n(n),o=a(51),s=a.n(o);t.default={components:{Breadcrumb:r.a,Modal:s.a,QBtn:i.a}}},213:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("breadcrumb",{staticClass:"col-12 breadcrumb"}),e._v(" "),a("section",{staticClass:"section-margin",attrs:{id:"presentation"}},[a("div",{staticClass:"row"},[a("h1",{staticClass:"col-12 text-center title-margin-bottom"},[e._v("Rejoignez une équipe engagée pour la valorisation du métier d’auxiliaire de vie")]),e._v(" "),a("div",{staticClass:"col-lg-7",attrs:{id:"pres-text"}},[a("p",[e._v("Chez Alenvi, nous pensons qu’il n’est possible de bien accompagner les personnes âgées à domicile qu’en valorisant le métier d’auxiliaire de vie.")]),e._v(" "),a("p",[e._v("Les auxiliaires d’envie travaillent ainsi au sein de communautés autonomes dans un cadre de travail unique :")]),e._v(" "),e._m(0),e._v(" "),a("p",[e._v("Nous recrutons actuellement pour des interventions à Paris et dans les Hauts de Seine.")]),e._v(" "),a("q-btn",{attrs:{color:"primary",big:""}},[a("a",{staticClass:"btn-call",on:{click:function(t){e.$refs.infoModal.openModal("https://alenvi.typeform.com/to/MwEMWk")}}},[e._v("Postuler")])]),e._v(" "),a("modal",{ref:"infoModal"})],1),e._v(" "),a("div",{staticClass:"col-lg-5 alenvi-video"},[a("iframe",{attrs:{id:"auxiliary-iframe",src:"https://www.youtube.com/embed/yGWVPxglesc",width:"100%",height:"100%",frameborder:"0",allowfullscreen:""}})],1)])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("CDI 35H, SMIC + 20%")]),e._v(" "),a("li",[e._v("Interventions de 2H minimum")]),e._v(" "),a("li",[e._v("Autonomie dans la gestion du planning et la relation avec les bénéficiaires")]),e._v(" "),a("li",[e._v("Formation continue")]),e._v(" "),a("li",[e._v("Coopération entre collègues (réunions d’équipe toutes les 2 semaines) & formation continue")])])}]}},50:function(e,t,a){function i(e){a(104)}var n=a(8)(a(106),a(107),i,"data-v-1128def9",null);e.exports=n.exports},51:function(e,t,a){function i(e){a(108)}var n=a(8)(a(110),a(111),i,"data-v-17f61316",null);e.exports=n.exports},66:function(e,t,a){function i(e){a(210)}var n=a(8)(a(212),a(213),i,"data-v-6838dbe8",null);e.exports=n.exports}});