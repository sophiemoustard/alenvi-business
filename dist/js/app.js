webpackJsonp([20],{11:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),i=a(10),o=a(14),r=a(18),u=a.n(r),c=a(38),m=a.n(c),s=a(41),p=(a.n(s),a(43));a.n(p);a(12),n.a.prototype.$http=u.a,n.a.config.productionTip=!1,n.a.use(i.y),n.a.use(m.a),a(39),i.y.start(function(){new n.a({el:"#alenvi-app",router:o.a,render:function(e){return e(a(45))}})})},12:function(e,t){},14:function(e,t,a){"use strict";function n(e){return function(){return a(17)("./"+e+".vue")}}var i=a(3),o=a(15),r=a(16),u=a.n(r);i.a.use(o.a),i.a.use(u.a),t.a=new o.a({mode:"history",routes:[{path:"/",component:n("Layout/Navigation"),meta:{breadcrumb:"Accueil",name:"/"},children:[{path:"",component:n("Home/Home"),meta:{breadcrumb:"Accueil"}},{path:"home",component:n("Home/Home"),meta:{breadcrumb:"Accueil"}},{path:"test",component:n("Home/CarouselMedia"),meta:{breadcrumb:"test",name:"test"}},{path:"aide-a-domicile",component:n("StaticPages/HomeCare"),meta:{breadcrumb:"Aide à domicile",name:"aide-a-domicile"}},{path:"compagnie",component:n("StaticPages/Company"),meta:{breadcrumb:"Compagnie et stimulation",name:"compagnie"}},{path:"sortie-hopital",component:n("StaticPages/HospitalExit"),meta:{breadcrumb:"Sortie d'hôpital",name:"sortie-hopital"}},{path:"vision",component:n("StaticPages/Vision"),meta:{breadcrumb:"Vision",name:"vision"}},{path:"equipe",component:n("StaticPages/Team"),meta:{breadcrumb:"Equipe",name:"team"}},{path:"recrutement",component:n("StaticPages/Recruitment"),meta:{breadcrumb:"Recrutement",name:"recrutement"}},{path:"mentions",component:n("StaticPages/LegalNotices"),meta:{breadcrumb:"Mentions Légales",name:"mentions"}}]},{path:"*",component:n("Error404")}]})},17:function(e,t,a){function n(e){var t=i[e];return t?a.e(t[1]).then(function(){return a(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var i={"./AuxiliariesGallery.vue":[53,5],"./Breadcrumbs.vue":[51,18],"./CarouselMedia.vue":[54,17],"./Error404.vue":[59,16],"./Features.vue":[55,15],"./Hello.vue":[60,11],"./Home/Home.vue":[61,0],"./Home/LatestArticles.vue":[58,14],"./Home/MainPresentation.vue":[57,8],"./Layout/Navigation.vue":[62,13],"./Modal.vue":[52,12],"./StaticPages/Company.vue":[63,3],"./StaticPages/HomeCare.vue":[64,2],"./StaticPages/HospitalExit.vue":[65,1],"./StaticPages/LegalNotices.vue":[66,10],"./StaticPages/Presentation.vue":[56,7],"./StaticPages/Recruitment.vue":[67,6],"./StaticPages/Team.vue":[68,4],"./StaticPages/Vision.vue":[69,9]};n.keys=function(){return Object.keys(i)},n.id=17,e.exports=n},40:function(e,t){},42:function(e,t){},44:function(e,t){},45:function(e,t,a){function n(e){a(46)}var i=a(9)(a(47),a(48),n,null,null);e.exports=i.exports},46:function(e,t){},47:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={metaInfo:{title:"Alenvi",titleTemplate:"%s | Alenvi",htmlAttrs:{lang:"fr"}}}},48:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"alenvi-app"}},[a("router-view")],1)},staticRenderFns:[]}}},[11]);