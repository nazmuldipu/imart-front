(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{F5Ek:function(e,s,t){"use strict";t.r(s),t.d(s,"ROUTES",(function(){return N})),t.d(s,"UsersModule",(function(){return G}));var r=t("mrSG"),o=t("fXoL"),n=t("ITiG"),i=t("ofXK"),c=t("HF3I"),a=t("1kSV"),b=t("3Pt+");function l(e,s){if(1&e){const e=o.Sb();o.Rb(0,"tr"),o.Rb(1,"td"),o.Fc(2),o.Qb(),o.Rb(3,"td",4),o.Fc(4),o.Qb(),o.Rb(5,"td",4),o.Fc(6),o.Qb(),o.Rb(7,"td",5),o.Rb(8,"button",8),o.dc("click",(function(){o.vc(e);const t=s.$implicit;return o.fc(2).onEdit(t._id)})),o.Nb(9,"i",9),o.Qb(),o.Qb(),o.Qb()}if(2&e){const e=s.$implicit;o.zb(2),o.Gc(e.name),o.zb(2),o.Gc(e.phone),o.zb(2),o.Gc(e.email)}}function d(e,s){if(1&e&&(o.Rb(0,"tbody"),o.Dc(1,l,10,3,"tr",7),o.Qb()),2&e){const e=o.fc();o.zb(1),o.ic("ngForOf",e.users)}}let u=(()=>{class e{constructor(){this.edit=new o.n}onEdit(e){this.edit.emit(e)}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["user-list"]],inputs:{users:"users"},outputs:{edit:"edit"},decls:15,vars:1,consts:[[1,"p-3","border","border-top-0"],[1,"my-2","my-lg-0"],["type","search","placeholder","Search User","aria-label","Search",1,"form-control","mr-sm-2"],[1,"table","table-striped","table-bordered","table-responsive","mt-2"],[1,"text-center"],[1,"text-right"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"btn","btn-sm","btn-warning","mx-1",3,"click"],[1,"fa","fa-pencil"]],template:function(e,s){1&e&&(o.Rb(0,"div",0),o.Rb(1,"form",1),o.Nb(2,"input",2),o.Qb(),o.Rb(3,"table",3),o.Rb(4,"thead"),o.Rb(5,"tr"),o.Rb(6,"th"),o.Fc(7,"Name"),o.Qb(),o.Rb(8,"th",4),o.Fc(9,"Phone"),o.Qb(),o.Rb(10,"th",4),o.Fc(11,"Email"),o.Qb(),o.Rb(12,"th",5),o.Fc(13,"Actions"),o.Qb(),o.Qb(),o.Qb(),o.Dc(14,d,2,1,"tbody",6),o.Qb(),o.Qb()),2&e&&(o.zb(14),o.ic("ngIf",s.users.length>0))},directives:[b.s,b.k,b.l,i.k,i.j],styles:[""],changeDetection:0}),e})();function m(e,s){1&e&&(o.Rb(0,"small",21),o.Fc(1," Name required "),o.Qb())}function h(e,s){if(1&e&&(o.Rb(0,"small",21),o.Rb(1,"div",22),o.Fc(2," Email required "),o.Qb(),o.Rb(3,"div",22),o.Fc(4,"Invalid email"),o.Qb(),o.Qb()),2&e){const e=o.fc();o.zb(1),o.ic("hidden",!e.form.controls.email.errors.required),o.zb(2),o.ic("hidden",!e.form.controls.email.errors.email)}}function f(e,s){if(1&e&&(o.Rb(0,"small",21),o.Rb(1,"div",22),o.Fc(2," Phone number required "),o.Qb(),o.Rb(3,"div",22),o.Fc(4," Phone number format 01934953023 "),o.Qb(),o.Qb()),2&e){const e=o.fc();o.zb(1),o.ic("hidden",!e.form.controls.phone.errors.required),o.zb(2),o.ic("hidden",!e.form.controls.phone.errors.pattern)}}function g(e,s){if(1&e&&(o.Rb(0,"small",21),o.Rb(1,"div",22),o.Fc(2," Password required "),o.Qb(),o.Rb(3,"div",22),o.Fc(4," Minimum passwor length required 6 "),o.Qb(),o.Qb()),2&e){const e=o.fc();o.zb(1),o.ic("hidden",!e.form.controls.password.errors.required),o.zb(2),o.ic("hidden",!e.form.controls.password.errors.minlength)}}const p=function(e,s,t){return{disabled:e,"btn-warning":s,"btn-success":t}};let v=(()=>{class e{constructor(e){this.fb=e,this.create=new o.n,this.update=new o.n,this.cancel=new o.n,this.exists=!1,this.showPassword=!1,this.createForm()}ngOnChanges(e){if(this.user&&this.user._id){this.exists=!0;const e=Object.assign({},this.user);this.form.patchValue(e)}}createForm(){this.form=this.fb.group({name:["",[b.q.required,b.q.minLength(5)]],email:["",[b.q.required,b.q.email]],phone:["",[b.q.required,b.q.pattern("^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$")]],password:["",[b.q.required,b.q.minLength(6)]]})}submit(){this.form.valid&&(this.exists?this.update.emit(this.form.value):this.create.emit(this.form.value),this.exists=!1,this.form.reset())}onCancel(){this.cancel.emit(!0)}}return e.\u0275fac=function(s){return new(s||e)(o.Mb(b.c))},e.\u0275cmp=o.Gb({type:e,selectors:[["user-form"]],inputs:{user:"user"},outputs:{create:"create",update:"update",cancel:"cancel"},features:[o.xb],decls:37,vars:14,consts:[[1,"navbar","navbar-light","bg-light","border","border-bottom-0"],[1,"navbar-brand"],[1,"p-3","border",3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","name",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["type","text","id","name","formControlName","name","autocomplete","no","placeholder","Name",1,"form-control"],["class","text-danger",4,"ngIf"],["for","email",1,"col-sm-2","col-form-label"],["type","email","id","email","formControlName","email","autocomplete","no","placeholder","Email",1,"form-control"],["for","phone",1,"col-sm-2","col-form-label"],["type","text","id","phone","formControlName","phone","autocomplete","no","placeholder","Phone number","maxlength","11",1,"form-control"],["for","password",1,"col-sm-2","col-form-label"],[1,"input-group","mb-1","mb-sm-0"],["id","password","placeholder","Password","formControlName","password",1,"form-control",3,"type"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"fa","fa-eye",3,"ngClass"],[1,"d-flex","justify-content-end"],["type","submit",1,"btn","btn-primary","mx-1",3,"ngClass"],[1,"btn","btn-danger","mx-1",3,"click"],[1,"text-danger"],[3,"hidden"]],template:function(e,s){1&e&&(o.Rb(0,"nav",0),o.Rb(1,"a",1),o.Fc(2),o.Qb(),o.Qb(),o.Rb(3,"form",2),o.dc("ngSubmit",(function(){return s.submit()})),o.Rb(4,"div",3),o.Rb(5,"label",4),o.Fc(6,"Name"),o.Qb(),o.Rb(7,"div",5),o.Nb(8,"input",6),o.Dc(9,m,2,0,"small",7),o.Qb(),o.Qb(),o.Rb(10,"div",3),o.Rb(11,"label",8),o.Fc(12,"Email"),o.Qb(),o.Rb(13,"div",5),o.Nb(14,"input",9),o.Dc(15,h,5,2,"small",7),o.Qb(),o.Qb(),o.Rb(16,"div",3),o.Rb(17,"label",10),o.Fc(18,"Phone"),o.Qb(),o.Rb(19,"div",5),o.Nb(20,"input",11),o.Dc(21,f,5,2,"small",7),o.Qb(),o.Qb(),o.Rb(22,"div",3),o.Rb(23,"label",12),o.Fc(24,"Password"),o.Qb(),o.Rb(25,"div",5),o.Rb(26,"div",13),o.Nb(27,"input",14),o.Rb(28,"div",15),o.Rb(29,"button",16),o.dc("click",(function(){return s.showPassword=!s.showPassword})),o.Nb(30,"i",17),o.Qb(),o.Qb(),o.Qb(),o.Dc(31,g,5,2,"small",7),o.Qb(),o.Qb(),o.Rb(32,"div",18),o.Rb(33,"button",19),o.Fc(34),o.Qb(),o.Rb(35,"button",20),o.dc("click",(function(){return s.onCancel()})),o.Fc(36,"Cancel"),o.Qb(),o.Qb(),o.Qb()),2&e&&(o.zb(2),o.Hc("",s.exists?"Update":"Add"," User"),o.zb(1),o.ic("formGroup",s.form),o.zb(6),o.ic("ngIf",s.form.controls.name.errors&&s.form.controls.name.touched),o.zb(6),o.ic("ngIf",s.form.controls.email.errors&&s.form.controls.email.touched),o.zb(6),o.ic("ngIf",s.form.controls.phone.errors&&s.form.controls.phone.touched),o.zb(6),o.ic("type",s.showPassword?"text":"password"),o.zb(3),o.ic("ngClass",s.showPassword?"fa-eye-slash":"fa-eye"),o.zb(1),o.ic("ngIf",s.form.controls.password.errors&&s.form.controls.password.touched),o.zb(2),o.ic("ngClass",o.oc(10,p,s.form.invalid,s.exists,!s.exists)),o.zb(1),o.Hc(" ",s.exists?"Update":"Create"," "))},directives:[a.b,b.s,b.k,b.e,b.b,b.j,b.d,i.k,b.g,i.i],styles:[""]}),e})();function R(e,s){1&e&&o.Nb(0,"loading")}function Q(e,s){if(1&e){const e=o.Sb();o.Rb(0,"div",6),o.Rb(1,"strong"),o.Fc(2,"Success! "),o.Qb(),o.Fc(3),o.Rb(4,"button",7),o.dc("click",(function(){return o.vc(e),o.fc().onClose()})),o.Rb(5,"span",8),o.Fc(6,"\xd7"),o.Qb(),o.Qb(),o.Qb()}if(2&e){const e=o.fc();o.zb(3),o.Hc(" ",e.message," ")}}function w(e,s){if(1&e){const e=o.Sb();o.Rb(0,"div",9),o.Rb(1,"strong"),o.Fc(2,"Failed! "),o.Qb(),o.Fc(3),o.Rb(4,"button",7),o.dc("click",(function(){return o.vc(e),o.fc().onClose()})),o.Rb(5,"span",8),o.Fc(6,"\xd7"),o.Qb(),o.Qb(),o.Qb()}if(2&e){const e=o.fc();o.zb(3),o.Hc(" ",e.errorMessage," ")}}function F(e,s){if(1&e){const e=o.Sb();o.Rb(0,"div",11),o.Rb(1,"user-form",17),o.dc("create",(function(s){return o.vc(e),o.fc(2).onCreate(s)}))("update",(function(s){return o.vc(e),o.fc(2).onUpdate(s)}))("cancel",(function(){return o.vc(e),o.fc(2).onUserFormCancel()})),o.Qb(),o.Qb()}if(2&e){const e=o.fc(2);o.zb(1),o.ic("user",e.user)}}function y(e,s){if(1&e){const e=o.Sb();o.Rb(0,"div",10),o.Rb(1,"div",11),o.Rb(2,"nav",12),o.Rb(3,"a",13),o.Fc(4,"User List"),o.Qb(),o.Rb(5,"button",14),o.dc("click",(function(){return o.vc(e),o.fc().onShowUserForm()})),o.Fc(6," + ADD USER "),o.Qb(),o.Qb(),o.Rb(7,"user-list",15),o.dc("edit",(function(s){return o.vc(e),o.fc().onEdit(s)})),o.Qb(),o.Qb(),o.Dc(8,F,2,1,"div",16),o.Qb()}if(2&e){const e=o.fc();o.zb(7),o.ic("users",e.users),o.zb(1),o.ic("ngIf",e.showUserForm)}}let z=(()=>{class e{constructor(e){this.userService=e,this.users=[],this.message="",this.errorMessage="",this.loading=!1,this.showUserForm=!1}ngOnInit(){this.getAllUser()}getAllUser(){return Object(r.a)(this,void 0,void 0,(function*(){this.loading=!0;try{this.users=yield this.userService.getAll().toPromise()}catch(e){this.errorMessage=e}this.loading=!1}))}onShowUserForm(){this.showUserForm=!0}onUserFormCancel(){this.onClose()}onEdit(e){const s=this.users.find(s=>s._id==e);this.user=Object.assign({},s),this.showUserForm=!0}onCreate(e){return Object(r.a)(this,void 0,void 0,(function*(){this.loading=!0,this.errorMessage="",this.message="";try{const s=yield this.userService.userRegistration(e).toPromise();this.message="Category created",this.users.push(s),this.showUserForm=!1}catch(s){this.errorMessage=s}this.loading=!1}))}onUpdate(e){return Object(r.a)(this,void 0,void 0,(function*(){this.loading=!0,this.errorMessage="",this.message="";const s=this.user._id;try{yield this.userService.update(s,e).toPromise(),this.message="User updated",this.user=null,this.showUserForm=!1,this.user=null,this.getAllUser()}catch(t){this.errorMessage=t}this.loading=!1}))}onClose(){this.user=null,this.showUserForm=!1,this.loading=!1,this.message="",this.errorMessage=""}}return e.\u0275fac=function(s){return new(s||e)(o.Mb(n.a))},e.\u0275cmp=o.Gb({type:e,selectors:[["app-list"]],decls:8,vars:4,consts:[[1,"container-fluid","component-head"],[1,"container"],[4,"ngIf"],["class","alert alert-success alert-dismissible show","role","alert",4,"ngIf"],["class","alert alert-danger alert-dismissible show","role","alert",4,"ngIf"],["class","row",4,"ngIf"],["role","alert",1,"alert","alert-success","alert-dismissible","show"],["type","button",1,"close",3,"click"],["aria-hidden","true"],["role","alert",1,"alert","alert-danger","alert-dismissible","show"],[1,"row"],[1,"col-md-6","col-12"],[1,"navbar","navbar-light","bg-light","border"],[1,"navbar-brand"],["type","button",1,"btn","btn-success","btn-sm",3,"click"],[3,"users","edit"],["class","col-md-6 col-12",4,"ngIf"],[3,"user","create","update","cancel"]],template:function(e,s){1&e&&(o.Rb(0,"div",0),o.Rb(1,"h3"),o.Fc(2,"Users"),o.Qb(),o.Qb(),o.Rb(3,"div",1),o.Dc(4,R,1,0,"loading",2),o.Dc(5,Q,7,1,"div",3),o.Dc(6,w,7,1,"div",4),o.Dc(7,y,9,2,"div",5),o.Qb()),2&e&&(o.zb(4),o.ic("ngIf",s.loading),o.zb(1),o.ic("ngIf",s.message.length>0),o.zb(1),o.ic("ngIf",s.errorMessage.length>0),o.zb(1),o.ic("ngIf",!s.loading))},directives:[i.k,c.a,a.b,u,v],styles:[""]}),e})();var P=t("KZX/"),C=t("tyNb");function I(e,s){if(1&e&&(o.Rb(0,"small",16),o.Rb(1,"div",17),o.Fc(2," Password required "),o.Qb(),o.Rb(3,"div",17),o.Fc(4," Minimum passwor length required 6 "),o.Qb(),o.Qb()),2&e){const e=o.fc();o.zb(1),o.ic("hidden",!e.form.controls.password.errors.required),o.zb(2),o.ic("hidden",!e.form.controls.password.errors.minlength)}}const S=function(e){return{disabled:e}};let U=(()=>{class e{constructor(e){this.fb=e,this.changePass=new o.n,this.cancel=new o.n,this.createForm()}createForm(){this.form=this.fb.group({password:["",[b.q.required,b.q.minLength(6)]]})}submit(){console.log("YES"),this.form.valid&&(this.changePass.emit(this.form.value.password),this.form.reset())}onCancel(){this.cancel.emit(!0)}}return e.\u0275fac=function(s){return new(s||e)(o.Mb(b.c))},e.\u0275cmp=o.Gb({type:e,selectors:[["reset-password-form"]],inputs:{user:"user"},outputs:{changePass:"changePass",cancel:"cancel"},decls:28,vars:8,consts:[[1,"navbar","navbar-light","bg-light","border","border-bottom-0"],[1,"navbar-brand"],[1,"p-3","border",3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","name",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["id","name",1,"form-control"],["for","phone",1,"col-sm-2","col-form-label"],["id","phone",1,"form-control"],["for","password",1,"col-sm-2","col-form-label"],[1,"input-group","mb-1","mb-sm-0"],["type","text","id","password","placeholder","Password","formControlName","password",1,"form-control"],["class","text-danger",4,"ngIf"],[1,"d-flex","justify-content-end"],["type","submit",1,"btn","btn-primary","mx-1",3,"ngClass"],["type","button",1,"btn","btn-danger","mx-1",3,"click"],[1,"text-danger"],[3,"hidden"]],template:function(e,s){1&e&&(o.Rb(0,"nav",0),o.Rb(1,"a",1),o.Fc(2),o.Qb(),o.Qb(),o.Rb(3,"form",2),o.dc("ngSubmit",(function(){return s.submit()})),o.Rb(4,"div",3),o.Rb(5,"label",4),o.Fc(6,"Name"),o.Qb(),o.Rb(7,"div",5),o.Rb(8,"label",6),o.Fc(9),o.Qb(),o.Qb(),o.Qb(),o.Rb(10,"div",3),o.Rb(11,"label",7),o.Fc(12,"Phone"),o.Qb(),o.Rb(13,"div",5),o.Rb(14,"label",8),o.Fc(15),o.Qb(),o.Qb(),o.Qb(),o.Rb(16,"div",3),o.Rb(17,"label",9),o.Fc(18,"Password"),o.Qb(),o.Rb(19,"div",5),o.Rb(20,"div",10),o.Nb(21,"input",11),o.Qb(),o.Dc(22,I,5,2,"small",12),o.Qb(),o.Qb(),o.Rb(23,"div",13),o.Rb(24,"button",14),o.Fc(25," Change "),o.Qb(),o.Rb(26,"button",15),o.dc("click",(function(){return s.onCancel()})),o.Fc(27," Cancel "),o.Qb(),o.Qb(),o.Qb()),2&e&&(o.zb(2),o.Hc("Change password of ",null==s.user?null:s.user.name,""),o.zb(1),o.ic("formGroup",s.form),o.zb(6),o.Gc(null==s.user?null:s.user.name),o.zb(6),o.Gc(null==s.user?null:s.user.phone),o.zb(7),o.ic("ngIf",s.form.controls.password.errors&&s.form.controls.password.touched),o.zb(2),o.ic("ngClass",o.mc(6,S,s.form.invalid)))},directives:[a.b,b.s,b.k,b.e,b.b,b.j,b.d,i.k,i.i],styles:[""],changeDetection:0}),e})();function k(e,s){1&e&&o.Nb(0,"loading")}function x(e,s){if(1&e){const e=o.Sb();o.Rb(0,"div",6),o.Rb(1,"strong"),o.Fc(2,"Success! "),o.Qb(),o.Fc(3),o.Rb(4,"button",7),o.dc("click",(function(){return o.vc(e),o.fc().onClose()})),o.Rb(5,"span",8),o.Fc(6,"\xd7"),o.Qb(),o.Qb(),o.Qb()}if(2&e){const e=o.fc();o.zb(3),o.Hc(" ",e.message," ")}}function q(e,s){if(1&e){const e=o.Sb();o.Rb(0,"div",9),o.Rb(1,"strong"),o.Fc(2,"Failed! "),o.Qb(),o.Fc(3),o.Rb(4,"button",7),o.dc("click",(function(){return o.vc(e),o.fc().onClose()})),o.Rb(5,"span",8),o.Fc(6,"\xd7"),o.Qb(),o.Qb(),o.Qb()}if(2&e){const e=o.fc();o.zb(3),o.Hc(" ",e.errorMessage," ")}}function M(e,s){if(1&e){const e=o.Sb();o.Rb(0,"div",11),o.Rb(1,"reset-password-form",16),o.dc("cancel",(function(){return o.vc(e),o.fc(2).onClose()}))("changePass",(function(s){return o.vc(e),o.fc(2).onPasswordChange(s)})),o.Qb(),o.Qb()}if(2&e){const e=o.fc(2);o.zb(1),o.ic("user",e.user)}}function D(e,s){if(1&e){const e=o.Sb();o.Rb(0,"div",10),o.Rb(1,"div",11),o.Rb(2,"nav",12),o.Rb(3,"a",13),o.Fc(4,"User List"),o.Qb(),o.Qb(),o.Rb(5,"user-list",14),o.dc("edit",(function(s){return o.vc(e),o.fc().onEdit(s)})),o.Qb(),o.Qb(),o.Dc(6,M,2,1,"div",15),o.Qb()}if(2&e){const e=o.fc();o.zb(5),o.ic("users",e.users),o.zb(1),o.ic("ngIf",e.user&&e.showPasswordForm)}}const N=[{path:"reset-password",component:(()=>{class e{constructor(e){this.userService=e,this.users=[],this.imageUrl="",this.message="",this.errorMessage="",this.loading=!1,this.showPasswordForm=!1}ngOnInit(){this.getAllUser()}getAllUser(){return Object(r.a)(this,void 0,void 0,(function*(){this.loading=!0;try{this.users=yield this.userService.getAll().toPromise()}catch(e){this.errorMessage=e}this.loading=!1}))}onEdit(e){const s=this.users.find(s=>s._id==e);this.user=Object.assign({},s),this.showPasswordForm=!0}onPasswordChange(e){return Object(r.a)(this,void 0,void 0,(function*(){this.loading=!0;try{const s=yield this.userService.resetPassword(this.user._id,e).toPromise();console.log(s),this.message="Password changed",this.showPasswordForm=!1}catch(s){this.errorMessage=s}this.loading=!1}))}onClose(){this.user=null,this.showPasswordForm=!1,this.loading=!1,this.message="",this.errorMessage=""}}return e.\u0275fac=function(s){return new(s||e)(o.Mb(n.a))},e.\u0275cmp=o.Gb({type:e,selectors:[["app-reset-password"]],decls:8,vars:4,consts:[[1,"container-fluid","component-head"],[1,"container"],[4,"ngIf"],["class","alert alert-success alert-dismissible show","role","alert",4,"ngIf"],["class","alert alert-danger alert-dismissible show","role","alert",4,"ngIf"],["class","row",4,"ngIf"],["role","alert",1,"alert","alert-success","alert-dismissible","show"],["type","button",1,"close",3,"click"],["aria-hidden","true"],["role","alert",1,"alert","alert-danger","alert-dismissible","show"],[1,"row"],[1,"col-md-6","col-12"],[1,"navbar","navbar-light","bg-light","border"],[1,"navbar-brand"],[3,"users","edit"],["class","col-md-6 col-12",4,"ngIf"],[3,"user","cancel","changePass"]],template:function(e,s){1&e&&(o.Rb(0,"div",0),o.Rb(1,"h3"),o.Fc(2,"Change Password"),o.Qb(),o.Qb(),o.Rb(3,"div",1),o.Dc(4,k,1,0,"loading",2),o.Dc(5,x,7,1,"div",3),o.Dc(6,q,7,1,"div",4),o.Dc(7,D,7,2,"div",5),o.Qb()),2&e&&(o.zb(4),o.ic("ngIf",s.loading),o.zb(1),o.ic("ngIf",s.message.length>0),o.zb(1),o.ic("ngIf",s.errorMessage.length>0),o.zb(1),o.ic("ngIf",!s.loading))},directives:[i.k,c.a,a.b,u,U],styles:[""]}),e})()},{path:"",component:z}];let G=(()=>{class e{}return e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({factory:function(s){return new(s||e)},imports:[[P.a,C.e.forChild(N)]]}),e})()}}]);