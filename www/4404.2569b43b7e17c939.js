"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4404],{4404:(_,l,a)=>{a.r(l),a.d(l,{HomePageModule:()=>P});var g=a(1368),p=a(4716),c=a(2112),s=a(7632),t=a(4496),u=a(7084),m=a(3496),C=a(9263);function v(i,O){if(1&i){const e=t.KQA();t.I0R(0,"div",14)(1,"div",15),t.wR5(2,"img",16),t.I0R(3,"span"),t.OEk(4,"10% Off"),t.C$Y()(),t.I0R(5,"div")(6,"div",17),t.OEk(7),t.C$Y(),t.I0R(8,"div",18),t.OEk(9),t.C$Y()(),t.I0R(10,"div")(11,"div",19)(12,"div",20),t.OEk(13),t.I0R(14,"div",21),t.OEk(15),t.C$Y()(),t.I0R(16,"ion-button",8),t.qCj("click",function(){const o=t.usT(e).$implicit,d=t.GaO();return t.CGJ(d.addToCart(o))}),t.OEk(17,"+ "),t.C$Y(),t.OEk(18),t.wR5(19,"i",22),t.I0R(20,"ion-button",8),t.qCj("click",function(){const o=t.usT(e).$implicit,d=t.GaO();return t.CGJ(d.removeFromCart(o))}),t.OEk(21," - "),t.C$Y()()()()}if(2&i){const e=O.$implicit;t.yG2(2),t.CI5("src","../../assets/img/",e.name.toLowerCase(),".png",t.K6U),t._6D("alt",e.name),t.yG2(5),t.cNF(e.name),t.yG2(2),t.cNF(e.variant),t.yG2(4),t.oRS(" \u20b9",e.price.toFixed(2)," "),t.yG2(2),t.oRS("\u20b9",e.oldPrice,""),t.yG2(3),t.oRS(" ",e.quantity," ")}}const y=[{path:"",component:(()=>{class i{constructor(e,r,n,o){this.route=e,this.dataSharingService=r,this.cartService=n,this.categoryServices=o,this.segment="vegetables",this.products=[{productId:1,name:"Broccoli",variant:"750gm",price:90,oldPrice:100,quantity:0},{productId:2,name:"Orange",variant:"1kg",price:54,oldPrice:60,quantity:0},{productId:3,name:"Milk",variant:"1 Litre",price:72,oldPrice:80,quantity:0},{productId:4,name:"Tomato",variant:"1kg",price:30,oldPrice:34,quantity:0}]}ngOnInit(){}addToCart(e){this.cartService.addToCart(e)}removeFromCart(e){this.cartService.removeFromCart(e.productId)}listGreenVegies(){this.route.navigate(["/tabs/category"]),this.categoryServices.segmentChanged("vegetables")}listFruits(){this.route.navigate(["/tabs/category"]),this.categoryServices.segmentChanged("fruits")}listDairyProducts(){this.route.navigate(["/tabs/category"]),this.categoryServices.segmentChanged("dairy")}listFruitsVegies(){this.route.navigate(["/tabs/category"]),this.categoryServices.segmentChanged("vegetables")}listBakeryItems(){this.route.navigate(["/tabs/category"]),this.categoryServices.segmentChanged("bakery")}listFineDairyProducts(){this.route.navigate(["/tabs/category"]),this.categoryServices.segmentChanged("dairy")}static#t=this.\u0275fac=function(r){return new(r||i)(t.GI1(s.E5),t.GI1(u.A),t.GI1(m.c),t.GI1(C.M))};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-home"]],decls:42,vars:3,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],[1,"ion-padding"],[1,"dailyDeals"],[1,"dailyDealList"],["class","productWrapper",4,"ngFor","ngForOf"],[1,"productCategory"],[3,"click"],["src","../../assets/img/broccoli.png","alt","image"],["src","../../assets/img/orange.png","alt","image"],["src","../../assets/img/milk.png","alt","image"],["src","../../assets/img/tomato.png","alt","image"],["src","../../assets/img/image-5.png","alt","image"],[1,"productWrapper"],[1,"ion-text-center"],[3,"src","alt"],[1,"productName"],[1,"productVariant"],[1,"productActionRow"],[1,"productPrice"],[1,"oldPrice"],[1,""]],template:function(r,n){1&r&&(t.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t.wR5(3,"ion-menu-button"),t.C$Y(),t.I0R(4,"ion-title"),t.OEk(5,"Home"),t.C$Y()()(),t.I0R(6,"ion-content",2)(7,"div",3)(8,"div",4)(9,"h1"),t.OEk(10,"Today's Best Deal"),t.C$Y()(),t.I0R(11,"div",5),t.yuY(12,v,22,7,"div",6),t.C$Y()(),t.I0R(13,"div",3)(14,"div",4)(15,"h1"),t.OEk(16,"Shop by Category"),t.C$Y()(),t.I0R(17,"div",7)(18,"div",8),t.qCj("click",function(){return n.listGreenVegies()}),t.wR5(19,"img",9),t.I0R(20,"h2"),t.OEk(21,"Green Vegies"),t.C$Y()(),t.I0R(22,"div",8),t.qCj("click",function(){return n.listFruits()}),t.wR5(23,"img",10),t.I0R(24,"h2"),t.OEk(25,"Fruits"),t.C$Y()(),t.I0R(26,"div",8),t.qCj("click",function(){return n.listDairyProducts()}),t.wR5(27,"img",11),t.I0R(28,"h2"),t.OEk(29,"Dairy"),t.C$Y()(),t.I0R(30,"div",8),t.qCj("click",function(){return n.listFruitsVegies()}),t.wR5(31,"img",12),t.I0R(32,"h2"),t.OEk(33,"Vegetables"),t.C$Y()(),t.I0R(34,"div",8),t.qCj("click",function(){return n.listBakeryItems()}),t.wR5(35,"img",13),t.I0R(36,"h2"),t.OEk(37,"Bakery"),t.C$Y()(),t.I0R(38,"div",8),t.qCj("click",function(){return n.listFineDairyProducts()}),t.wR5(39,"img",11),t.I0R(40,"h2"),t.OEk(41,"Fine Dairy Products"),t.C$Y()()()()()),2&r&&(t.E7m("translucent",!0),t.yG2(6),t.E7m("fullscreen",!0),t.yG2(6),t.E7m("ngForOf",n.products))},dependencies:[g.ay,c.sn,c.GS,c._i,c.wB,c.QT,c.tM,c.Md],styles:[".dailyDeals[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;font-weight:700;margin:0 0 10px}.dailyDealList[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px}.dailyDealList[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]{border-color:var(--border-color);border-width:1px;border-style:solid;--border-radius: 10px;border-radius:10px;padding:10px 15px;display:flex;flex-direction:column;justify-content:space-around;position:relative}.dailyDealList[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px;height:auto}.dailyDealList[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productPrice[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:var(--ion-color-dark)}.dailyDealList[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productPrice[_ngcontent-%COMP%]   .oldPrice[_ngcontent-%COMP%]{color:var(--product-variant-color);font-size:11px;text-decoration:line-through}.dailyDealList[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productName[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:var(--ion-color-dark);margin:0 0 5px}.dailyDealList[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productVariant[_ngcontent-%COMP%]{font-size:13px;color:var(--product-variant-color);margin:5px 0 0}.dailyDealList[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productActionRow[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin:5px 0 0}.dailyDealList[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productActionRow[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background: var(--default-primary-button);--color: var(--ion-color-primary);min-height:inherit;--border-radius: 10px;--border-color: var(--ion-color-primary);--border-style: solid;--border-width: 1px;--padding-top: 10px;--padding-bottom: 10px}.dailyDealList[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:var(--ion-color-secondary);color:var(--ion-color-primary-contrast);font-size:10px;line-height:10px;text-align:center;padding:5px 8px;border-radius:8px;position:absolute;top:0;left:0}.productCategory[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}.productCategory[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-radius:10px;background:#f3f6f4;padding:15px;text-align:center}.productCategory[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:13px;font-weight:700;margin:0}"]})}return i})()}];let h=(()=>{class i{static#t=this.\u0275fac=function(r){return new(r||i)};static#e=this.\u0275mod=t.a4G({type:i});static#i=this.\u0275inj=t.s3X({imports:[s.qQ.forChild(y),s.qQ]})}return i})(),P=(()=>{class i{static#t=this.\u0275fac=function(r){return new(r||i)};static#e=this.\u0275mod=t.a4G({type:i});static#i=this.\u0275inj=t.s3X({imports:[g.MD,p.y,c.wZ,h]})}return i})()}}]);