webpackJsonp([17],{156:function(t,a,e){var s=e(157);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(48)("0227918b",s,!0)},157:function(t,a,e){a=t.exports=e(47)(void 0),a.push([t.i,"@media (max-width:1024px){.img-carousel[data-v-61730366]{margin:10px 0}}.bg-carousel-gradient[data-v-61730366]{background:linear-gradient(90deg,#faf9f8,#fff)}.bg-carousel-transparent[data-v-61730366]{background:transparent}.q-card[data-v-61730366]{border-radius:15px}.q-card-title[data-v-61730366]{color:#737373}.carousel-card[data-v-61730366]{min-height:100px}.content[data-v-61730366]{color:#e2007a;font-weight:100;padding:0 15px}@media (max-width:768px){.content[data-v-61730366]{padding:0 0 10px 15px}}",""])},158:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(10);a.default={components:{QCarousel:s.g,QCard:s.b,QCardTitle:s.f,QCardMain:s.d},data:function(){return{slides:[[{title:"Le Parisien",img:"statics/leparisien.png",imgAlt:"leparisien logo",description:"« A la rencontre des auxiliaires d’envie »",link:"http://www.leparisien.fr/economie/business/a-la-rencontre-des-auxilliaires-d-envie-20-09-2016-6135411.php"},{title:"CNEWS",img:"statics/cnews.png",imgAlt:"CNEWS logo",description:"« Interview en plateau de Dorothée, auxiliaire d’envie chez Alenvi »",link:"https://www.youtube.com/watch?v=M30Ia_oV6AI"}]],carouselCardClasses:{"carousel-card":!0,row:!0,"items-center":!0,"content-between":!0}}},computed:{carouselCardClassesObj:function(){return this.$q.platform.is.mozilla?{"content-between":!1}:this.carouselCardClasses}}}},159:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg-carousel-gradient"},[e("q-carousel",{staticClass:"text-tertiary",attrs:{infinite:"",autoplay:""}},t._l(t.slides,function(a){return e("div",{staticClass:"bg-carousel-transparent",slot:"slide"},[e("div",{staticClass:"row"},t._l(a,function(a){return e("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6"},[e("a",{attrs:{href:a.link}},[e("q-card",{staticClass:"shadow-1",attrs:{color:"white"}},[e("div",{class:t.carouselCardClassesObj},[e("div",{staticClass:"col-xs-12 col-sm-12 col-md-4 img-carousel"},[e("div",{staticClass:"row justify-center"},[e("img",{attrs:{src:a.img,alt:a.imgAlt}})])]),t._v(" "),e("div",{staticClass:"col-xs-12 col-sm-12 col-md-8 content"},[e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"text-italic"},[t._v("\n                      "+t._s(a.description)+"\n                    ")])])])])])],1)])}))])}))],1)},staticRenderFns:[]}},52:function(t,a,e){function s(t){e(156)}var i=e(9)(e(158),e(159),s,"data-v-61730366",null);t.exports=i.exports}});