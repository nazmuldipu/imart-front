function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"O+Ta":function(n,e,t){"use strict";t.r(e),t.d(e,"ROUTES",(function(){return E})),t.d(e,"DashboardModule",(function(){return A}));var o,a=t("ofXK"),r=t("tyNb"),i=t("KZX/"),s=t("fXoL"),c=((o=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=s.Gb({type:o,selectors:[["app-index"]],decls:5,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-12"]],template:function(n,e){1&n&&(s.Rb(0,"div",0),s.Rb(1,"div",1),s.Rb(2,"div",2),s.Rb(3,"h3"),s.Fc(4,"Welcome to imart "),s.Qb(),s.Qb(),s.Qb(),s.Qb())},styles:[""]}),o),l=t("ITiG");function d(n,e){if(1&n&&s.Nb(0,"i",19),2&n){var t=s.fc(2).$implicit;s.ic("ngClass",t.icon)}}function b(n,e){if(1&n&&(s.Rb(0,"a",16),s.Dc(1,d,1,1,"i",17),s.Rb(2,"span",18),s.Fc(3),s.Qb(),s.Qb()),2&n){var t=s.fc().$implicit,o=s.fc(4);s.Cc("font-weight",o.subNav==t.name?"700":"100"),s.ic("routerLink",t.link),s.zb(1),s.ic("ngIf",!!t.icon),s.zb(2),s.Hc(" \xa0 ",t.name,"")}}function u(n,e){if(1&n){var t=s.Sb();s.Rb(0,"li",14),s.dc("click",(function(){s.vc(t);var n=e.$implicit;return s.fc(4).onSubNav(n.name)})),s.Dc(1,b,4,5,"a",15),s.Qb()}if(2&n){var o=e.$implicit,a=s.fc(4);s.zb(1),s.ic("ngIf",a.validateRole(o.roles))}}function g(n,e){if(1&n&&(s.Rb(0,"div",12),s.Rb(1,"ul"),s.Dc(2,u,2,1,"li",13),s.Qb(),s.Qb()),2&n){var t=s.fc(2).$implicit,o=s.fc();s.Eb("opened",o.navlink===t.name),s.zb(2),s.ic("ngForOf",t.subnav)}}function f(n,e){if(1&n){var t=s.Sb();s.Pb(0),s.Rb(1,"a",8),s.dc("click",(function(){s.vc(t);var n=s.fc().$implicit;return s.fc().onNavLink(n.name)})),s.Nb(2,"i",9),s.Rb(3,"span",10),s.Fc(4),s.Qb(),s.Qb(),s.Dc(5,g,3,3,"div",11),s.Ob()}if(2&n){var o=s.fc().$implicit,a=s.fc();s.zb(1),s.Eb("has-sub-cat",o.subnav&&o.subnav.length>0)("opened",a.navlink===o.name),s.ic("routerLink",o.link?o.link:null),s.zb(1),s.ic("ngClass",o.icon),s.zb(2),s.Hc(" ",o.name,""),s.zb(1),s.ic("ngIf",o.subnav&&o.subnav.length>0)}}function h(n,e){if(1&n&&(s.Rb(0,"li"),s.Dc(1,f,6,8,"ng-container",7),s.Qb()),2&n){var t=e.$implicit,o=s.fc();s.zb(1),s.ic("ngIf",o.validateRole(t.roles))}}var p,v,m,w=((p=function(){function n(){_classCallCheck(this,n),this.navlink="dashboard",this.subNav="",this.sidenav=[{name:"Dashboard",icon:"fa-tachometer",roles:["ADMIN","SHOP","USER"],subnav:[{name:"Analytics",icon:"fa-pie-chart",roles:["USER"],link:"/dashboard"},{name:"Visits",icon:"fa-line-chart",roles:["SHOP"],link:"/dashboard"},{name:"Widgets",icon:"fa-windows",roles:["ADMIN"],link:"/dashboard"}]},{name:"Category",icon:"fa-cubes",roles:["ADMIN"],subnav:[{name:"Categories",icon:"fa-cube",roles:["ADMIN"],link:"/dashboard/categories"},{name:"Sub Categories",icon:"fa-flask",roles:["ADMIN"],link:"/dashboard/categories/sub-category"}]},{name:"Product",icon:"fa-tag",roles:["ADMIN","SHOP"],subnav:[{name:"Brands",icon:"fa-tags",roles:["ADMIN"],link:"/dashboard/products/brands"},{name:"Shops",icon:"fa-shopping-bag",roles:["ADMIN"],link:"/dashboard/products/shops"},{name:"Products",icon:"fa-shopping-bag",roles:["SHOP","ADMIN"],link:"/dashboard/products/"}]},{name:"Users",icon:"fa-users",roles:["ADMIN"],subnav:[{name:"List",icon:"fa-list",link:"/dashboard/users"},{name:"Reset password",icon:"fa-key",link:"/dashboard/users/reset-password"}]},{name:"Accessories",link:"/dashboard/categories/add",icon:"fa-sign-language ",roles:["USER"],subCagegories:[]}]}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"onNavLink",value:function(n){this.navlink=this.navlink===n?"":n}},{key:"onSubNav",value:function(n){this.subNav=n}},{key:"validateRole",value:function(n){if(!this.roles||0==this.roles.length)return!1;if(!n||0==n.length)return!0;var e;for(e=0;e<this.roles.length;e++)if(n.includes(this.roles[0]))return!0;return!1}}]),n}()).\u0275fac=function(n){return new(n||p)},p.\u0275cmp=s.Gb({type:p,selectors:[["dash-side-navbar"]],inputs:{expand:"expand",roles:"roles"},decls:10,vars:2,consts:[[1,"sidebar",3,"ngClass"],[1,"brand"],["routerLink","/"],[1,"brand-name"],[1,"brand-text"],[1,"widget-content"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"widget-content-category",3,"routerLink","click"],[1,"fa",3,"ngClass"],[1,"category-text"],["class","widget-content-sub-category",3,"opened",4,"ngIf"],[1,"widget-content-sub-category"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["class","widget-content-sub-category-list",3,"routerLink","font-weight",4,"ngIf"],[1,"widget-content-sub-category-list",3,"routerLink"],["class","fa","style","font-weight: inherit;",3,"ngClass",4,"ngIf"],[1,"sub-category-text"],[1,"fa",2,"font-weight","inherit",3,"ngClass"]],template:function(n,e){1&n&&(s.Rb(0,"div",0),s.Rb(1,"div",1),s.Rb(2,"a",2),s.Rb(3,"span",3),s.Fc(4,"I-Mart"),s.Qb(),s.Rb(5,"span",4),s.Fc(6," Superstore "),s.Qb(),s.Qb(),s.Qb(),s.Rb(7,"div",5),s.Rb(8,"ul"),s.Dc(9,h,2,1,"li",6),s.Qb(),s.Qb(),s.Qb()),2&n&&(s.ic("ngClass",e.expand?"wide":"narrow"),s.zb(9),s.ic("ngForOf",e.sidenav))},directives:[a.i,r.d,a.j,a.k],styles:['@charset "UTF-8";.sidebar[_ngcontent-%COMP%]{font-family:Montserrat;padding:0;margin:0;color:#a4b0bf;background-color:#313947;height:100vh;overflow-y:auto;transition:width .7s}.sidebar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:18px;padding:15px 0 35px}.sidebar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.sidebar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%]{color:#ffc247!important}.widget-content[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{list-style:outside none none;margin:0;padding:0}.widget-content[_ngcontent-%COMP%] > ulli[_ngcontent-%COMP%]{padding:5px}.widget-content[_ngcontent-%COMP%] > ulli[_ngcontent-%COMP%]:hover{color:#f40;background-color:#2e3542}.widget-content-category[_ngcontent-%COMP%]{cursor:pointer;color:inherit;display:block;width:100%;position:relative;padding-right:20px;padding-left:40px;line-height:39px}.widget-content-category[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#a4b0bf;display:block;position:absolute;top:3px;left:8px;width:28px;height:28px;line-height:28px;text-align:center;border-radius:50%}.widget-content-category.opened[_ngcontent-%COMP%]{color:#f40;background-color:#2e3542}.widget-content-category.opened[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#f40}.widget-content-category.has-sub-cat.opened[_ngcontent-%COMP%]:after{content:"\uf078"}.widget-content-category.has-sub-cat[_ngcontent-%COMP%]:after{position:absolute;font-size:10px;font-family:fontawesome;content:"\uf053";right:5px;top:2px;width:16px;height:16px;text-align:center;line-height:16px;color:#fff}.widget-content-sub-category[_ngcontent-%COMP%]{max-height:0;overflow-y:hidden;margin:0;transition:max-height .5s ease-in-out}.widget-content-sub-category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:10px 10px 10px 20px;background-color:#2e3542;list-style:outside none none}.widget-content-sub-category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0}.widget-content-sub-category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;font-size:12px}.widget-content-sub-category.opened[_ngcontent-%COMP%]{max-height:100vh;transition:max-height 1s ease-in-out}.widget-content-sub-category-list[_ngcontent-%COMP%]{cursor:pointer;display:block;width:100%;line-height:35px}.widget-content-sub-category-list[_ngcontent-%COMP%]:hover{font-weight:700!important}.wide[_ngcontent-%COMP%]{width:227px}.narrow[_ngcontent-%COMP%]{width:50px}.narrow[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{height:57px;font-size:15px;overflow:hidden}.narrow[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]{display:none}.narrow[_ngcontent-%COMP%]   .has-sub-cat[_ngcontent-%COMP%]:after{content:"";width:0;height:0}.narrow[_ngcontent-%COMP%]   .category-text[_ngcontent-%COMP%]{font-size:0}.narrow[_ngcontent-%COMP%]   .widget-content-sub-category.opened[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:10px;float:right}.narrow[_ngcontent-%COMP%]   .widget-content-sub-category.opened[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .sub-category-text[_ngcontent-%COMP%]{font-size:0}.narrow[_ngcontent-%COMP%]   .widget-content-category[_ngcontent-%COMP%]{padding-right:0}']}),p),C=t("LLt/"),P=t("1kSV"),k=t("3Pt+"),y=((m=function(){function n(e){_classCallCheck(this,n),this.auth=e,this.expand=new s.n,this.mode=!0}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"onSlide",value:function(){this.mode=!this.mode,this.expand.emit(this.mode)}},{key:"onLogout",value:function(){this.auth.logout()}}]),n}()).\u0275fac=function(n){return new(n||m)(s.Mb(C.a))},m.\u0275cmp=s.Gb({type:m,selectors:[["dash-navbar"]],inputs:{user:"user"},outputs:{expand:"expand"},decls:29,vars:1,consts:[[1,"navbar","navbar-expand-md","navbar-light","bg-light"],[1,"navbar-brand",3,"click"],[1,"fa","fa-bars"],["type","button","data-toggle","collapse","data-target","#dashboardNav","aria-controls","dashboardNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler",3,"click"],[1,"navbar-toggler-icon"],["id","dashboardNav",1,"collapse","navbar-collapse"],[1,"form-inline","my-2","my-lg-0","mr-auto"],["type","text","placeholder","Search dashboard","aria-label","Search",1,"form-control","rounded-0"],["type","submit",1,"btn","btn-secondary","my-2","my-sm-0","rounded-0"],[1,"navbar-nav"],[1,"nav-item"],["routerLink","/dashboard",1,"nav-link","px-4","py-1"],[1,"fa","fa-home","fa-2x"],[1,"nav-item","active"],["href","#",1,"nav-link","p-1"],["src","assets/images/profile.png","alt","",2,"height","32px"],[1,"nav-item","active","px-4","py-1"],[1,"dropdown"],[1,"dropbtn",2,"color","rgba(0, 0, 0, 0.5)","padding","0"],[1,"fa","fa-cog","fa-2x"],[1,"dropdown-content","right-s",2,"width","170px"],[3,"click"],[1,"fa","fa-sign-out"],["routerLink","/dashboard/change-password"],[1,"fa","fa-unlock-alt"]],template:function(n,e){1&n&&(s.Rb(0,"nav",0),s.Rb(1,"a",1),s.dc("click",(function(){return e.onSlide()})),s.Nb(2,"i",2),s.Qb(),s.Rb(3,"button",3),s.dc("click",(function(){return e.onSlide()})),s.Nb(4,"span",4),s.Qb(),s.Rb(5,"div",5),s.Rb(6,"form",6),s.Nb(7,"input",7),s.Rb(8,"button",8),s.Fc(9,"Search"),s.Qb(),s.Qb(),s.Rb(10,"ul",9),s.Rb(11,"li",10),s.Rb(12,"a",11),s.Nb(13,"i",12),s.Qb(),s.Qb(),s.Rb(14,"li",13),s.Rb(15,"a",14),s.Nb(16,"img",15),s.Fc(17),s.Qb(),s.Qb(),s.Rb(18,"li",16),s.Rb(19,"div",17),s.Rb(20,"button",18),s.Nb(21,"i",19),s.Qb(),s.Rb(22,"div",20),s.Rb(23,"a",21),s.dc("click",(function(){return e.onLogout()})),s.Nb(24,"i",22),s.Fc(25," Logout"),s.Qb(),s.Rb(26,"a",23),s.Nb(27,"i",24),s.Fc(28," Change Password"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&n&&(s.zb(17),s.Hc("Hello, ",null==e.user?null:e.user.name,""))},directives:[P.b,k.t,k.k,k.l,r.d],styles:[""]}),m),M=((v=function(){function n(e){_classCallCheck(this,n),this.userService=e,this.sideNavExpand=!0}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.userService.getUserProfile(),this.userService.user$.subscribe((function(e){n.user=e}))}},{key:"onSidenavExpand",value:function(n){this.sideNavExpand=n}}]),n}()).\u0275fac=function(n){return new(n||v)(s.Mb(l.a))},v.\u0275cmp=s.Gb({type:v,selectors:[["app-dashboard"]],decls:7,vars:3,consts:[[1,"container-fluid"],[1,"row"],[1,"col-auto","p-0"],[3,"expand","roles"],[1,"col","p-0"],[3,"user","expand"]],template:function(n,e){1&n&&(s.Rb(0,"div",0),s.Rb(1,"div",1),s.Rb(2,"div",2),s.Nb(3,"dash-side-navbar",3),s.Qb(),s.Rb(4,"div",4),s.Rb(5,"dash-navbar",5),s.dc("expand",(function(n){return e.onSidenavExpand(n)})),s.Qb(),s.Nb(6,"router-outlet"),s.Qb(),s.Qb(),s.Qb()),2&n&&(s.zb(3),s.ic("expand",e.sideNavExpand)("roles",null==e.user?null:e.user.roles),s.zb(2),s.ic("user",e.user))},directives:[w,y,r.f],styles:[""]}),v),R=t("mrSG"),x=t("HF3I");function O(n,e){if(1&n){var t=s.Sb();s.Rb(0,"div",9),s.Rb(1,"strong"),s.Fc(2,"Success! "),s.Qb(),s.Fc(3),s.Rb(4,"button",10),s.dc("click",(function(){return s.vc(t),s.fc().onClose()})),s.Rb(5,"span",11),s.Fc(6,"\xd7"),s.Qb(),s.Qb(),s.Qb()}if(2&n){var o=s.fc();s.zb(3),s.Hc(" ",o.message," ")}}function Q(n,e){if(1&n){var t=s.Sb();s.Rb(0,"div",12),s.Rb(1,"strong"),s.Fc(2,"Failed! "),s.Qb(),s.Fc(3),s.Rb(4,"button",10),s.dc("click",(function(){return s.vc(t),s.fc().onClose()})),s.Rb(5,"span",11),s.Fc(6,"\xd7"),s.Qb(),s.Qb(),s.Qb()}if(2&n){var o=s.fc();s.zb(3),s.Hc(" ",o.errorMessage," ")}}function _(n,e){1&n&&s.Nb(0,"loading")}function N(n,e){1&n&&(s.Rb(0,"nav",13),s.Rb(1,"a",14),s.Fc(2,"Change password form"),s.Qb(),s.Qb())}function I(n,e){if(1&n&&(s.Rb(0,"small",26),s.Rb(1,"div",27),s.Fc(2," Old password required "),s.Qb(),s.Rb(3,"div",27),s.Fc(4," Minimum passwor length required 6 "),s.Qb(),s.Qb()),2&n){var t=s.fc(2);s.zb(1),s.ic("hidden",!t.form.controls.oldPassword.errors.required),s.zb(2),s.ic("hidden",!t.form.controls.oldPassword.errors.minlength)}}function S(n,e){if(1&n&&(s.Rb(0,"small",26),s.Rb(1,"div",27),s.Fc(2," New password required "),s.Qb(),s.Rb(3,"div",27),s.Fc(4," Minimum passwor length required 6 "),s.Qb(),s.Qb()),2&n){var t=s.fc(2);s.zb(1),s.ic("hidden",!t.form.controls.newPassword.errors.required),s.zb(2),s.ic("hidden",!t.form.controls.newPassword.errors.minlength)}}var F=function(n){return{disabled:n}};function z(n,e){if(1&n){var t=s.Sb();s.Rb(0,"form",15),s.dc("ngSubmit",(function(){return s.vc(t),s.fc().submit()})),s.Rb(1,"div",16),s.Rb(2,"label",17),s.Fc(3,"Old password"),s.Qb(),s.Rb(4,"div",18),s.Rb(5,"div",19),s.Nb(6,"input",20),s.Qb(),s.Dc(7,I,5,2,"small",21),s.Qb(),s.Qb(),s.Rb(8,"div",16),s.Rb(9,"label",22),s.Fc(10,"New password"),s.Qb(),s.Rb(11,"div",18),s.Rb(12,"div",19),s.Nb(13,"input",23),s.Qb(),s.Dc(14,S,5,2,"small",21),s.Qb(),s.Qb(),s.Rb(15,"div",24),s.Rb(16,"button",25),s.Fc(17," Change "),s.Qb(),s.Qb(),s.Qb()}if(2&n){var o=s.fc();s.ic("formGroup",o.form),s.zb(7),s.ic("ngIf",o.form.controls.oldPassword.errors&&o.form.controls.oldPassword.touched),s.zb(7),s.ic("ngIf",o.form.controls.newPassword.errors&&o.form.controls.newPassword.touched),s.zb(2),s.ic("ngClass",s.mc(4,F,o.form.invalid))}}var D,L,E=[{path:"",component:M,children:[{path:"",component:c},{path:"change-password",component:(D=function(){function n(e,t){_classCallCheck(this,n),this.fb=e,this.userService=t,this.message="",this.errorMessage="",this.loading=!1}return _createClass(n,[{key:"ngOnInit",value:function(){this.createForm()}},{key:"createForm",value:function(){this.form=this.fb.group({oldPassword:["",[k.r.required,k.r.minLength(6)]],newPassword:["",[k.r.required,k.r.minLength(6)]]})}},{key:"submit",value:function(){return Object(R.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!this.form.valid){n.next=13;break}return this.onClose(),this.loading=!0,n.prev=2,n.next=5,this.userService.changePassword(this.form.value).toPromise();case 5:e=n.sent,this.message="Password changed",this.form.reset(),console.log(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),this.errorMessage=n.t0;case 12:this.loading=!1;case 13:case"end":return n.stop()}}),n,this,[[2,9]])})))}},{key:"onClose",value:function(){this.loading=!1,this.message="",this.errorMessage=""}}]),n}(),D.\u0275fac=function(n){return new(n||D)(s.Mb(k.c),s.Mb(l.a))},D.\u0275cmp=s.Gb({type:D,selectors:[["app-change-password"]],decls:11,vars:5,consts:[[1,"container-fluid","component-head"],[1,"container"],[1,"row"],[1,"offset-md-2","col-md-8","col-12","bg-white"],["class","alert alert-success alert-dismissible show","role","alert",4,"ngIf"],["class","alert alert-danger alert-dismissible show","role","alert",4,"ngIf"],[4,"ngIf"],["class","navbar navbar-light bg-light border border-bottom-0",4,"ngIf"],["class","p-3 border",3,"formGroup","ngSubmit",4,"ngIf"],["role","alert",1,"alert","alert-success","alert-dismissible","show"],["type","button",1,"close",3,"click"],["aria-hidden","true"],["role","alert",1,"alert","alert-danger","alert-dismissible","show"],[1,"navbar","navbar-light","bg-light","border","border-bottom-0"],[1,"navbar-brand"],[1,"p-3","border",3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","password",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],[1,"input-group","mb-1","mb-sm-0"],["type","text","id","oldPassword","placeholder","Old Password","formControlName","oldPassword",1,"form-control"],["class","text-danger",4,"ngIf"],["for","newPassword",1,"col-sm-3","col-form-label"],["type","text","id","newPassword","placeholder","New Password","formControlName","newPassword",1,"form-control"],[1,"d-flex","justify-content-end"],["type","submit",1,"btn","btn-primary","mx-1",3,"ngClass"],[1,"text-danger"],[3,"hidden"]],template:function(n,e){1&n&&(s.Rb(0,"div",0),s.Rb(1,"h3"),s.Fc(2,"Change password"),s.Qb(),s.Qb(),s.Rb(3,"div",1),s.Rb(4,"div",2),s.Rb(5,"div",3),s.Dc(6,O,7,1,"div",4),s.Dc(7,Q,7,1,"div",5),s.Dc(8,_,1,0,"loading",6),s.Dc(9,N,3,0,"nav",7),s.Dc(10,z,18,6,"form",8),s.Qb(),s.Qb(),s.Qb()),2&n&&(s.zb(6),s.ic("ngIf",e.message.length>0),s.zb(1),s.ic("ngIf",e.errorMessage.length>0),s.zb(1),s.ic("ngIf",e.loading),s.zb(1),s.ic("ngIf",!e.loading),s.zb(1),s.ic("ngIf",!e.loading))},directives:[a.k,x.a,P.b,k.t,k.k,k.e,k.b,k.j,k.d,a.i],styles:[""]}),D)},{path:"categories",loadChildren:function(){return t.e(6).then(t.bind(null,"Sah3")).then((function(n){return n.CategoryModule}))}},{path:"products",loadChildren:function(){return t.e(8).then(t.bind(null,"4rUa")).then((function(n){return n.ProductsModule}))}},{path:"users",loadChildren:function(){return t.e(9).then(t.bind(null,"F5Ek")).then((function(n){return n.UsersModule}))}}]}],A=((L=function n(){_classCallCheck(this,n)}).\u0275mod=s.Kb({type:L}),L.\u0275inj=s.Jb({factory:function(n){return new(n||L)},imports:[[a.b,i.a,r.e.forChild(E)]]}),L)}}]);