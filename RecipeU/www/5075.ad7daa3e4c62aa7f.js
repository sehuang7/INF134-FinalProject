"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5075],{5075:(F,l,r)=>{r.r(l),r.d(l,{HomePageModule:()=>h});var g=r(177),d=r(1075),m=r(4341),s=r(9858),p=r(467),P=r(7167),n=r(4438),M=r(9321);function _(e,c){if(1&e){const t=n.RV6();n.j41(0,"ion-card",6),n.bIt("click",function(){n.eBV(t);const i=n.XpG().$implicit,a=n.XpG();return n.Njj(a.openUpdateModal(i))}),n.nrm(1,"img",7),n.j41(2,"ion-card-header")(3,"ion-card-title"),n.EFF(4),n.k0s()(),n.j41(5,"ion-card-content"),n.EFF(6),n.k0s()()}if(2&e){const t=n.XpG().$implicit;n.R7$(),n.Mz_("alt","Image of ",t.name,""),n.FS9("src",t.image,n.B4B),n.R7$(3),n.JRh(t.name),n.R7$(2),n.Lme(" ",t.quantity," ",t.unit," ")}}function C(e,c){if(1&e&&(n.qex(0),n.DNE(1,_,7,6,"ion-card",5),n.bVm()),2&e){const t=c.$implicit;n.R7$(),n.Y8G("ngIf",1>=t.quantity)}}function f(e,c){if(1&e){const t=n.RV6();n.j41(0,"ion-card",6),n.bIt("click",function(){const i=n.eBV(t).$implicit,a=n.XpG();return n.Njj(a.openRecipeDetails(i.id))}),n.nrm(1,"img",7),n.j41(2,"ion-card-header")(3,"ion-card-title"),n.EFF(4),n.k0s()()()}if(2&e){const t=c.$implicit;n.R7$(),n.Mz_("alt","Image of ",t.title,""),n.FS9("src",t.image,n.B4B),n.R7$(3),n.JRh(t.title)}}const O=[{path:"",component:(()=>{var e;class c{constructor(o,i,a){this.recipeService=o,this.router=i,this.modalController=a,this.lowInStock=[],this.recipes=[],this.message="This modal example uses the modalController to present and dismiss modals."}ngOnInit(){this.lowInStock=this.recipeService.getAllItems(),this.recipes=this.recipeService.getAllRecipes()}openRecipeDetails(o){this.router.navigate(["/recipe-details",o])}openUpdateModal(o){var i=this;return(0,p.A)(function*(){const a=yield i.modalController.create({component:P.c,cssClass:"grocery-modal",componentProps:{item:o}});a.present();const{data:x,role:k}=yield a.onWillDismiss();"confirm"===k&&(i.message=`Hello, ${x}!`)})()}}return(e=c).\u0275fac=function(o){return new(o||e)(n.rXU(M.S),n.rXU(s.Ix),n.rXU(d.W3))},e.\u0275cmp=n.VBU({type:e,selectors:[["app-home"]],decls:17,vars:3,consts:[[1,"ion-padding",3,"fullscreen"],["id","low-in-stock"],[4,"ngFor","ngForOf"],["id","recommended-recipes"],[3,"click",4,"ngFor","ngForOf"],[3,"click",4,"ngIf"],[3,"click"],[3,"alt","src"]],template:function(o,i){1&o&&(n.j41(0,"ion-content",0)(1,"h1"),n.EFF(2,"Welcome Back, User"),n.k0s(),n.j41(3,"div",1)(4,"ion-card")(5,"ion-card-header")(6,"ion-card-title"),n.EFF(7,"Low in Stock"),n.k0s()(),n.j41(8,"ion-card-content"),n.DNE(9,C,2,1,"ng-container",2),n.k0s()()(),n.j41(10,"div",3)(11,"ion-card")(12,"ion-card-header")(13,"ion-card-title"),n.EFF(14,"Recommended Recipes"),n.k0s()(),n.j41(15,"ion-card-content"),n.DNE(16,f,5,4,"ion-card",4),n.k0s()()()()),2&o&&(n.Y8G("fullscreen",!0),n.R7$(9),n.Y8G("ngForOf",i.lowInStock),n.R7$(7),n.Y8G("ngForOf",i.recipes))},dependencies:[g.Sq,g.bT,d.b_,d.I9,d.ME,d.tN,d.W9],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#low-in-stock[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:20px;color:#000}#low-in-stock[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{border-radius:10px;color:#000;background-color:#a4c2a8}#low-in-stock[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;overflow-x:scroll;white-space:nowrap}#low-in-stock[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{min-width:120px;min-height:150px;max-width:150px;max-height:150px;display:fit;background-color:#fff;margin-left:4px}#low-in-stock[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:70%;object-fit:cover;border-radius:8px}#low-in-stock[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding-top:0;padding-left:4px;padding-bottom:0;color:#000}#low-in-stock[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:16px;color:#000}#low-in-stock[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding-left:6px}h1[_ngcontent-%COMP%]{padding-top:56px;margin-left:16px;font-weight:400;font-size:24px}#recommended-recipes[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:20px;color:#000}#recommended-recipes[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{background-color:#a4c2a8;border-radius:10px}#recommended-recipes[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr)}#recommended-recipes[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{color:#000;background-color:#fff;width:140px;height:140px;align-items:center;justify-content:center;margin-left:4px}#recommended-recipes[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:70%;object-fit:cover;border-radius:8px}#recommended-recipes[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding-top:0;padding-left:4px;padding-bottom:0}#recommended-recipes[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:16px;color:#000}ion-content[_ngcontent-%COMP%]{--background: #FFF9ED}"]}),c})()}];let u=(()=>{var e;class c{}return(e=c).\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[s.iI.forChild(O),s.iI]}),c})(),h=(()=>{var e;class c{}return(e=c).\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[g.MD,m.YN,d.bv,u]}),c})()}}]);