import{b as ve,g as Ce,h as le,j as c,l as Te,r as ae}from"./chunk-2KJBEPJ7.js";import{A as Se,Ca as q,Da as we,Ea as _e,T as Ie,X as Oe,Z as ye,Za as Ne,ba as I,bb as ke,db as $e,eb as de,fb as ce}from"./chunk-37GZ2BXW.js";import{Ca as N,D as E,Da as k,E as L,Ea as $,F as me,Hc as W,La as A,M as U,Mb as H,N as Z,Nb as h,O as he,Pb as z,Qa as F,Qb as ee,Qc as be,Rb as g,Tb as De,Uc as B,X as J,Xc as f,Yb as y,bc as b,cc as v,dc as P,ec as ne,fa as K,fc as te,ga as ze,ha as u,hc as Q,jc as ie,kc as w,mc as m,na as X,nc as j,oa as fe,oc as _,pb as p,q as d,qa as Y,qb as a,qc as R,r as M,rc as oe,sc as C,ta as r,tc as S,ud as ue,vb as x,xb as O,xc as V,yb as Me,yc as se,zb as ge,zc as re}from"./chunk-45KRFIOS.js";var je=["nz-menu-item",""],Pe=["*"],Be=["nz-submenu-inline-child",""];function He(i,l){}var Qe=["nz-submenu-none-inline-child",""];function Ve(i,l){}var We=["nz-submenu-title",""];function qe(i,l){if(i&1&&P(0,"nz-icon",0),i&2){let e=m();z("nzType",e.nzIcon)}}function Ge(i,l){if(i&1&&(ne(0),b(1,"span",4),se(2),v(),te()),i&2){let e=m();p(2),re(e.nzTitle)}}function Ue(i,l){i&1&&P(0,"nz-icon",5)}function Ze(i,l){i&1&&P(0,"nz-icon",6)}function Je(i,l){if(i&1&&(b(0,"span",2),h(1,Ue,1,0,"nz-icon",5)(2,Ze,1,0,"nz-icon",6),v()),i&2){let e,t=m();p(),y((e=t.dir)==="rtl"?1:2)}}function Ke(i,l){i&1&&P(0,"span",3)}var Xe=["nz-submenu",""],Ye=[[["","title",""]],"*"],xe=["[title]","*"];function en(i,l){i&1&&_(0)}function nn(i,l){if(i&1&&P(0,"div",3),i&2){let e=m(),t=V(6);z("mode",e.mode)("nzOpen",e.nzOpen)("@.disabled",!!(e.noAnimation!=null&&e.noAnimation.nzNoAnimation))("nzNoAnimation",e.noAnimation==null?null:e.noAnimation.nzNoAnimation)("menuClass",e.nzMenuClassName)("templateOutlet",t)}}function tn(i,l){if(i&1){let e=Q();b(0,"div",6),w("subMenuMouseState",function(n){k(e);let o=m(2);return $(o.setMouseEnterState(n))}),v()}if(i&2){let e=m(2),t=V(6);z("theme",e.theme)("mode",e.mode)("nzOpen",e.nzOpen)("position",e.position)("nzDisabled",e.nzDisabled)("isMenuInsideDropDown",e.isMenuInsideDropDown)("nzTriggerSubMenuAction",e.nzTriggerSubMenuAction)("templateOutlet",t)("menuClass",e.nzMenuClassName)("@.disabled",!!(e.noAnimation!=null&&e.noAnimation.nzNoAnimation))("nzNoAnimation",e.noAnimation==null?null:e.noAnimation.nzNoAnimation)}}function on(i,l){if(i&1){let e=Q();h(0,tn,1,11,"ng-template",5),w("positionChange",function(n){k(e);let o=m();return $(o.onPositionChange(n))})("overlayOutsideClick",function(){k(e);let n=m();return $(n.setMouseEnterState(!1))})}if(i&2){let e=m(),t=V(1);z("cdkConnectedOverlayPositions",e.overlayPositions)("cdkConnectedOverlayOrigin",t)("cdkConnectedOverlayWidth",e.triggerWidth)("cdkConnectedOverlayOpen",e.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function sn(i,l){i&1&&_(0,1)}var rn=["titleElement"],un=["nz-menu-group",""],ln=["*",[["","title",""]]],an=["*","[title]"];function dn(i,l){if(i&1&&(ne(0),se(1),te()),i&2){let e=m();p(),re(e.nzTitle)}}function cn(i,l){i&1&&_(0,1)}var D=new Y("NzIsInDropDownMenuToken"),Re=new Y("NzMenuServiceLocalToken"),T=(()=>{class i{descendantMenuItemClick$=new d;childMenuItemClick$=new d;theme$=new M("light");mode$=new M("vertical");inlineIndent$=new M(24);isChildSubMenuOpen$=new M(!1);onDescendantMenuItemClick(e){this.descendantMenuItemClick$.next(e)}onChildMenuItemClick(e){this.childMenuItemClick$.next(e)}setMode(e){this.mode$.next(e)}setTheme(e){this.theme$.next(e)}setInlineIndent(e){this.inlineIndent$.next(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=X({token:i,factory:i.\u0275fac})}return i})(),pe=(()=>{class i{nzMenuService=r(T);mode$=this.nzMenuService.mode$.pipe(E(e=>e==="inline"?"inline":e==="vertical"||this.nzHostSubmenuService?"vertical":"horizontal"));level=1;isMenuInsideDropDown=r(D);isCurrentSubMenuOpen$=new M(!1);isChildSubMenuOpen$=new M(!1);isMouseEnterTitleOrOverlay$=new d;childMenuItemClick$=new d;destroy$=new d;nzHostSubmenuService=r(i,{optional:!0,skipSelf:!0});onChildMenuItemClick(e){this.childMenuItemClick$.next(e)}setOpenStateWithoutDebounce(e){this.isCurrentSubMenuOpen$.next(e)}setMouseEnterTitleOrOverlayState(e){this.isMouseEnterTitleOrOverlay$.next(e)}constructor(){this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);let e=this.childMenuItemClick$.pipe(me(()=>this.mode$),Z(o=>o!=="inline"||this.isMenuInsideDropDown),E(()=>!1)),t=U(this.isMouseEnterTitleOrOverlay$,e);L([this.isChildSubMenuOpen$,t]).pipe(E(([o,s])=>o||s),he(150),J(),u(this.destroy$)).pipe(J()).subscribe(o=>{this.setOpenStateWithoutDebounce(o),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(o):this.nzMenuService.isChildSubMenuOpen$.next(o)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=X({token:i,factory:i.\u0275fac})}return i})(),Ee=(()=>{class i{nzMenuService;cdr;destroy$=new d;nzSubmenuService=r(pe,{optional:!0});directionality=r(I);routerLink=r(le,{optional:!0});router=r(Ce,{optional:!0});isMenuInsideDropDown=r(D);level=this.nzSubmenuService?this.nzSubmenuService.level+1:1;selected$=new d;inlinePaddingLeft=null;dir="ltr";nzPaddingLeft;nzDisabled=!1;nzSelected=!1;nzDanger=!1;nzMatchRouterExact=!1;nzMatchRouter=!1;listOfRouterLink;clickMenuItem(e){this.nzDisabled?(e.preventDefault(),e.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(e){this.nzSelected=e,this.selected$.next(e)}updateRouterActive(){!this.listOfRouterLink||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{let e=this.hasActiveLinks();this.nzSelected!==e&&(this.nzSelected=e,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.routerLink&&e(this.routerLink)||this.listOfRouterLink.some(e)}isLinkActive(e){return t=>e.isActive(t.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}constructor(e,t){this.nzMenuService=e,this.cdr=t,this.router&&this.router.events.pipe(u(this.destroy$),Z(n=>n instanceof ve)).subscribe(()=>{this.updateRouterActive()})}ngOnInit(){L([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe(u(this.destroy$)).subscribe(([e,t])=>{this.inlinePaddingLeft=e==="inline"?this.level*t:null}),this.dir=this.directionality.value,this.directionality.change?.pipe(u(this.destroy$)).subscribe(e=>{this.dir=e})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe(u(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(e){e.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static \u0275fac=function(t){return new(t||i)(a(T),a(B))};static \u0275cmp=O({type:i,selectors:[["","nz-menu-item",""]],contentQueries:function(t,n,o){if(t&1&&R(o,le,5),t&2){let s;C(s=S())&&(n.listOfRouterLink=s)}},hostVars:20,hostBindings:function(t,n){t&1&&w("click",function(s){return n.clickMenuItem(s)}),t&2&&(ee("padding-left",n.dir==="rtl"?null:n.nzPaddingLeft||n.inlinePaddingLeft,"px")("padding-right",n.dir==="rtl"?n.nzPaddingLeft||n.inlinePaddingLeft:null,"px"),g("ant-dropdown-menu-item",n.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",n.isMenuInsideDropDown&&n.nzSelected)("ant-dropdown-menu-item-danger",n.isMenuInsideDropDown&&n.nzDanger)("ant-dropdown-menu-item-disabled",n.isMenuInsideDropDown&&n.nzDisabled)("ant-menu-item",!n.isMenuInsideDropDown)("ant-menu-item-selected",!n.isMenuInsideDropDown&&n.nzSelected)("ant-menu-item-danger",!n.isMenuInsideDropDown&&n.nzDanger)("ant-menu-item-disabled",!n.isMenuInsideDropDown&&n.nzDisabled))},inputs:{nzPaddingLeft:[2,"nzPaddingLeft","nzPaddingLeft",Se],nzDisabled:[2,"nzDisabled","nzDisabled",f],nzSelected:[2,"nzSelected","nzSelected",f],nzDanger:[2,"nzDanger","nzDanger",f],nzMatchRouterExact:[2,"nzMatchRouterExact","nzMatchRouterExact",f],nzMatchRouter:[2,"nzMatchRouter","nzMatchRouter",f]},exportAs:["nzMenuItem"],features:[H,N],attrs:je,ngContentSelectors:Pe,decls:2,vars:0,consts:[[1,"ant-menu-title-content"]],template:function(t,n){t&1&&(j(),b(0,"span",0),_(1),v())},encapsulation:2,changeDetection:0})}return i})(),pn=(()=>{class i{elementRef;renderer;directionality;templateOutlet=null;menuClass="";mode="vertical";nzOpen=!1;listOfCacheClassName=[];expandState="collapsed";dir="ltr";destroy$=new d;constructor(e,t,n){this.elementRef=e,this.renderer=t,this.directionality=n}calcMotionState(){this.nzOpen?this.expandState="expanded":this.expandState="collapsed"}ngOnInit(){this.calcMotionState(),this.dir=this.directionality.value,this.directionality.change?.pipe(u(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnChanges(e){let{mode:t,nzOpen:n,menuClass:o}=e;(t||n)&&this.calcMotionState(),o&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(s=>!!s).forEach(s=>{this.renderer.removeClass(this.elementRef.nativeElement,s)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(s=>!!s).forEach(s=>{this.renderer.addClass(this.elementRef.nativeElement,s)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(t){return new(t||i)(a(F),a(x),a(I))};static \u0275cmp=O({type:i,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(t,n){t&2&&(ie("@collapseMotion",n.expandState),g("ant-menu-rtl",n.dir==="rtl"))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[N],attrs:Be,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(t,n){t&1&&h(0,He,0,0,"ng-template",0),t&2&&z("ngTemplateOutlet",n.templateOutlet)},dependencies:[ue],encapsulation:2,data:{animation:[Ne]},changeDetection:0})}return i})(),mn=(()=>{class i{directionality;menuClass="";theme="light";templateOutlet=null;isMenuInsideDropDown=!1;mode="vertical";nzTriggerSubMenuAction="hover";position="right";nzDisabled=!1;nzOpen=!1;subMenuMouseState=new A;constructor(e){this.directionality=e}setMouseState(e){!this.nzDisabled&&this.nzTriggerSubMenuAction==="hover"&&this.subMenuMouseState.next(e)}expandState="collapsed";dir="ltr";destroy$=new d;ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?this.mode==="horizontal"?this.expandState="bottom":this.mode==="vertical"&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){this.calcMotionState(),this.dir=this.directionality.value,this.directionality.change?.pipe(u(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnChanges(e){let{mode:t,nzOpen:n}=e;(t||n)&&this.calcMotionState()}static \u0275fac=function(t){return new(t||i)(a(I))};static \u0275cmp=O({type:i,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(t,n){t&1&&w("mouseenter",function(){return n.setMouseState(!0)})("mouseleave",function(){return n.setMouseState(!1)}),t&2&&(ie("@slideMotion",n.expandState)("@zoomBigMotion",n.expandState),g("ant-menu-light",n.theme==="light")("ant-menu-dark",n.theme==="dark")("ant-menu-submenu-placement-bottom",n.mode==="horizontal")("ant-menu-submenu-placement-right",n.mode==="vertical"&&n.position==="right")("ant-menu-submenu-placement-left",n.mode==="vertical"&&n.position==="left")("ant-menu-submenu-rtl",n.dir==="rtl"))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",nzTriggerSubMenuAction:"nzTriggerSubMenuAction",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[N],attrs:Qe,decls:2,vars:17,consts:[[3,"ngTemplateOutlet"]],template:function(t,n){t&1&&(b(0,"div"),h(1,Ve,0,0,"ng-template",0),v()),t&2&&(De(n.menuClass),g("ant-dropdown-menu",n.isMenuInsideDropDown)("ant-menu",!n.isMenuInsideDropDown)("ant-dropdown-menu-vertical",n.isMenuInsideDropDown)("ant-menu-vertical",!n.isMenuInsideDropDown)("ant-dropdown-menu-sub",n.isMenuInsideDropDown)("ant-menu-sub",!n.isMenuInsideDropDown)("ant-menu-rtl",n.dir==="rtl"),p(),z("ngTemplateOutlet",n.templateOutlet))},dependencies:[ue],encapsulation:2,data:{animation:[$e,ke]},changeDetection:0})}return i})(),Le=(()=>{class i{cdr;directionality;nzIcon=null;nzTitle=null;isMenuInsideDropDown=!1;nzDisabled=!1;paddingLeft=null;mode="vertical";nzTriggerSubMenuAction="hover";toggleSubMenu=new A;subMenuMouseState=new A;dir="ltr";destroy$=new d;constructor(e,t){this.cdr=e,this.directionality=t}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(u(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(e){!this.nzDisabled&&this.nzTriggerSubMenuAction==="hover"&&this.subMenuMouseState.next(e)}clickTitle(){(this.mode==="inline"||this.nzTriggerSubMenuAction==="click")&&!this.nzDisabled&&(this.subMenuMouseState.next(!0),this.toggleSubMenu.emit())}static \u0275fac=function(t){return new(t||i)(a(B),a(I))};static \u0275cmp=O({type:i,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(t,n){t&1&&w("click",function(){return n.clickTitle()})("mouseenter",function(){return n.setMouseState(!0)})("mouseleave",function(){return n.setMouseState(!1)}),t&2&&(ee("padding-left",n.dir==="rtl"?null:n.paddingLeft,"px")("padding-right",n.dir==="rtl"?n.paddingLeft:null,"px"),g("ant-dropdown-menu-submenu-title",n.isMenuInsideDropDown)("ant-menu-submenu-title",!n.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode",nzTriggerSubMenuAction:"nzTriggerSubMenuAction"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:We,ngContentSelectors:Pe,decls:5,vars:3,consts:[[3,"nzType"],[4,"nzStringTemplateOutlet"],[1,"ant-dropdown-menu-submenu-expand-icon"],[1,"ant-menu-submenu-arrow"],[1,"ant-menu-title-content"],["nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"]],template:function(t,n){t&1&&(j(),h(0,qe,1,1,"nz-icon",0)(1,Ge,3,1,"ng-container",1),_(2),h(3,Je,3,1,"span",2)(4,Ke,1,0,"span",3)),t&2&&(y(n.nzIcon?0:-1),p(),z("nzStringTemplateOutlet",n.nzTitle),p(2),y(n.isMenuInsideDropDown?3:4))},dependencies:[ye,Oe,ce,de],encapsulation:2,changeDetection:0})}return i})(),Ae=[c.rightTop,c.right,c.rightBottom,c.leftTop,c.left,c.leftBottom],hn=[c.bottomLeft,c.bottomRight,c.topRight,c.topLeft],Fe=(()=>{class i{nzMenuService;cdr;platform;nzMenuClassName="";nzPaddingLeft=null;nzTitle=null;nzIcon=null;nzTriggerSubMenuAction="hover";nzOpen=!1;nzDisabled=!1;nzPlacement="bottomLeft";nzOpenChange=new A;cdkOverlayOrigin=null;listOfNzSubMenuComponent=null;listOfNzMenuItemDirective=null;nzSubmenuService=r(pe);level=this.nzSubmenuService.level;destroy$=new d;position="right";triggerWidth=null;theme="light";mode="vertical";inlinePaddingLeft=null;overlayPositions=Ae;isSelected=!1;isActive=!1;dir="ltr";isMenuInsideDropDown=r(D);noAnimation=r(ae,{optional:!0,host:!0});directionality=r(I);setOpenStateWithoutDebounce(e){this.nzSubmenuService.setOpenStateWithoutDebounce(e)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(e){this.isActive=e,this.mode!=="inline"&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(e)}setTriggerWidth(){this.mode==="horizontal"&&this.platform.isBrowser&&this.cdkOverlayOrigin&&this.nzPlacement==="bottomLeft"&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(e){let t=Te(e);t==="rightTop"||t==="rightBottom"||t==="right"?this.position="right":(t==="leftTop"||t==="leftBottom"||t==="left")&&(this.position="left")}constructor(e,t,n){this.nzMenuService=e,this.cdr=t,this.platform=n}ngOnInit(){this.nzMenuService.theme$.pipe(u(this.destroy$)).subscribe(e=>{this.theme=e,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe(u(this.destroy$)).subscribe(e=>{this.mode=e,e==="horizontal"?this.overlayPositions=[c[this.nzPlacement],...hn]:e==="vertical"&&(this.overlayPositions=Ae),this.cdr.markForCheck()}),L([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe(u(this.destroy$)).subscribe(([e,t])=>{this.inlinePaddingLeft=e==="inline"?this.level*t:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(u(this.destroy$)).subscribe(e=>{this.isActive=e,e!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=e,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,this.directionality.change?.pipe(u(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();let e=this.listOfNzMenuItemDirective,t=e.changes,n=U(t,...e.map(o=>o.selected$));t.pipe(K(e),ze(()=>n),K(!0),E(()=>e.some(o=>o.nzSelected)),u(this.destroy$)).subscribe(o=>{this.isSelected=o,this.cdr.markForCheck()})}ngOnChanges(e){let{nzOpen:t}=e;t&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(t){return new(t||i)(a(T),a(B),a(Ie))};static \u0275cmp=O({type:i,selectors:[["","nz-submenu",""]],contentQueries:function(t,n,o){if(t&1&&(R(o,i,5),R(o,Ee,5)),t&2){let s;C(s=S())&&(n.listOfNzSubMenuComponent=s),C(s=S())&&(n.listOfNzMenuItemDirective=s)}},viewQuery:function(t,n){if(t&1&&oe(q,7,F),t&2){let o;C(o=S())&&(n.cdkOverlayOrigin=o.first)}},hostVars:34,hostBindings:function(t,n){t&2&&g("ant-dropdown-menu-submenu",n.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",n.isMenuInsideDropDown&&n.nzDisabled)("ant-dropdown-menu-submenu-open",n.isMenuInsideDropDown&&n.nzOpen)("ant-dropdown-menu-submenu-selected",n.isMenuInsideDropDown&&n.isSelected)("ant-dropdown-menu-submenu-vertical",n.isMenuInsideDropDown&&n.mode==="vertical")("ant-dropdown-menu-submenu-horizontal",n.isMenuInsideDropDown&&n.mode==="horizontal")("ant-dropdown-menu-submenu-inline",n.isMenuInsideDropDown&&n.mode==="inline")("ant-dropdown-menu-submenu-active",n.isMenuInsideDropDown&&n.isActive)("ant-menu-submenu",!n.isMenuInsideDropDown)("ant-menu-submenu-disabled",!n.isMenuInsideDropDown&&n.nzDisabled)("ant-menu-submenu-open",!n.isMenuInsideDropDown&&n.nzOpen)("ant-menu-submenu-selected",!n.isMenuInsideDropDown&&n.isSelected)("ant-menu-submenu-vertical",!n.isMenuInsideDropDown&&n.mode==="vertical")("ant-menu-submenu-horizontal",!n.isMenuInsideDropDown&&n.mode==="horizontal")("ant-menu-submenu-inline",!n.isMenuInsideDropDown&&n.mode==="inline")("ant-menu-submenu-active",!n.isMenuInsideDropDown&&n.isActive)("ant-menu-submenu-rtl",n.dir==="rtl")},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzTriggerSubMenuAction:"nzTriggerSubMenuAction",nzOpen:[2,"nzOpen","nzOpen",f],nzDisabled:[2,"nzDisabled","nzDisabled",f],nzPlacement:"nzPlacement"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[W([pe]),H,N],attrs:Xe,ngContentSelectors:xe,decls:7,vars:9,consts:[["origin","cdkOverlayOrigin"],["subMenuTemplate",""],["nz-submenu-title","","cdkOverlayOrigin","",3,"subMenuMouseState","toggleSubMenu","nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","nzTriggerSubMenuAction"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn"],["cdkConnectedOverlay","",3,"positionChange","overlayOutsideClick","cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn"],["nz-submenu-none-inline-child","",3,"subMenuMouseState","theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","nzTriggerSubMenuAction","templateOutlet","menuClass","nzNoAnimation"]],template:function(t,n){if(t&1){let o=Q();j(Ye),b(0,"div",2,0),w("subMenuMouseState",function(G){return k(o),$(n.setMouseEnterState(G))})("toggleSubMenu",function(){return k(o),$(n.toggleSubMenu())}),h(2,en,1,0),v(),h(3,nn,1,6,"div",3)(4,on,1,5,null,4)(5,sn,1,0,"ng-template",null,1,be)}t&2&&(z("nzIcon",n.nzIcon)("nzTitle",n.nzTitle)("mode",n.mode)("nzDisabled",n.nzDisabled)("isMenuInsideDropDown",n.isMenuInsideDropDown)("paddingLeft",n.nzPaddingLeft||n.inlinePaddingLeft)("nzTriggerSubMenuAction",n.nzTriggerSubMenuAction),p(2),y(n.nzTitle?-1:2),p(),y(n.mode==="inline"?3:4))},dependencies:[Le,pn,ae,mn,_e,we,q],encapsulation:2,changeDetection:0})}return i})();function zn(){let i=r(T,{skipSelf:!0,optional:!0}),l=r(Re);return i??l}function fn(){return r(D,{skipSelf:!0,optional:!0})??!1}var Jn=(()=>{class i{nzMenuService;cdr;listOfNzMenuItemDirective;isMenuInsideDropDown=r(D);listOfNzSubMenuComponent;nzInlineIndent=24;nzTheme="light";nzMode="vertical";nzInlineCollapsed=!1;nzSelectable=!this.isMenuInsideDropDown;nzClick=new A;actualMode="vertical";dir="ltr";inlineCollapsed$=new M(this.nzInlineCollapsed);mode$=new M(this.nzMode);destroy$=new d;listOfOpenedNzSubMenuComponent=[];directionality=r(I);setInlineCollapsed(e){this.nzInlineCollapsed=e,this.inlineCollapsed$.next(e)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(e=>e.nzOpen),this.listOfNzSubMenuComponent.forEach(e=>e.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(e=>e.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}constructor(e,t){this.nzMenuService=e,this.cdr=t}ngOnInit(){L([this.inlineCollapsed$,this.mode$]).pipe(u(this.destroy$)).subscribe(([e,t])=>{this.actualMode=e?"vertical":t,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe(u(this.destroy$)).subscribe(e=>{this.nzClick.emit(e),this.nzSelectable&&!e.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(t=>t.setSelectedState(t===e))}),this.dir=this.directionality.value,this.directionality.change?.pipe(u(this.destroy$)).subscribe(e=>{this.dir=e,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe(u(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(e){let{nzInlineCollapsed:t,nzInlineIndent:n,nzTheme:o,nzMode:s}=e;t&&this.inlineCollapsed$.next(this.nzInlineCollapsed),n&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),o&&this.nzMenuService.setTheme(this.nzTheme),s&&(this.mode$.next(this.nzMode),!e.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(G=>G.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static \u0275fac=function(t){return new(t||i)(a(T),a(B))};static \u0275dir=ge({type:i,selectors:[["","nz-menu",""]],contentQueries:function(t,n,o){if(t&1&&(R(o,Ee,5),R(o,Fe,5)),t&2){let s;C(s=S())&&(n.listOfNzMenuItemDirective=s),C(s=S())&&(n.listOfNzSubMenuComponent=s)}},hostVars:34,hostBindings:function(t,n){t&2&&g("ant-dropdown-menu",n.isMenuInsideDropDown)("ant-dropdown-menu-root",n.isMenuInsideDropDown)("ant-dropdown-menu-light",n.isMenuInsideDropDown&&n.nzTheme==="light")("ant-dropdown-menu-dark",n.isMenuInsideDropDown&&n.nzTheme==="dark")("ant-dropdown-menu-vertical",n.isMenuInsideDropDown&&n.actualMode==="vertical")("ant-dropdown-menu-horizontal",n.isMenuInsideDropDown&&n.actualMode==="horizontal")("ant-dropdown-menu-inline",n.isMenuInsideDropDown&&n.actualMode==="inline")("ant-dropdown-menu-inline-collapsed",n.isMenuInsideDropDown&&n.nzInlineCollapsed)("ant-menu",!n.isMenuInsideDropDown)("ant-menu-root",!n.isMenuInsideDropDown)("ant-menu-light",!n.isMenuInsideDropDown&&n.nzTheme==="light")("ant-menu-dark",!n.isMenuInsideDropDown&&n.nzTheme==="dark")("ant-menu-vertical",!n.isMenuInsideDropDown&&n.actualMode==="vertical")("ant-menu-horizontal",!n.isMenuInsideDropDown&&n.actualMode==="horizontal")("ant-menu-inline",!n.isMenuInsideDropDown&&n.actualMode==="inline")("ant-menu-inline-collapsed",!n.isMenuInsideDropDown&&n.nzInlineCollapsed)("ant-menu-rtl",n.dir==="rtl")},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:[2,"nzInlineCollapsed","nzInlineCollapsed",f],nzSelectable:[2,"nzSelectable","nzSelectable",f]},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[W([{provide:Re,useClass:T},{provide:T,useFactory:zn},{provide:D,useFactory:fn}]),H,N]})}return i})();function Mn(){return r(D,{optional:!0,skipSelf:!0})??!1}var gn=(()=>{class i{elementRef;renderer;nzTitle;titleElement;isMenuInsideDropDown=r(D);constructor(e,t){this.elementRef=e,this.renderer=t;let n=this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group";this.renderer.addClass(e.nativeElement,n)}ngAfterViewInit(){let e=this.titleElement.nativeElement.nextElementSibling;if(e){let t=this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list";this.renderer.addClass(e,t)}}static \u0275fac=function(t){return new(t||i)(a(F),a(x))};static \u0275cmp=O({type:i,selectors:[["","nz-menu-group",""]],viewQuery:function(t,n){if(t&1&&oe(rn,5),t&2){let o;C(o=S())&&(n.titleElement=o.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[W([{provide:D,useFactory:Mn}])],attrs:un,ngContentSelectors:an,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"]],template:function(t,n){t&1&&(j(ln),b(0,"div",null,0),h(2,dn,2,1,"ng-container",1)(3,cn,1,0),v(),_(4)),t&2&&(g("ant-menu-item-group-title",!n.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",n.isMenuInsideDropDown),p(2),z("nzStringTemplateOutlet",n.nzTitle),p(),y(n.nzTitle?-1:3))},dependencies:[ce,de],encapsulation:2,changeDetection:0})}return i})();var Kn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Me({type:i});static \u0275inj=fe({imports:[Fe,gn,Le]})}return i})();export{D as a,T as b,Ee as c,Fe as d,Jn as e,Kn as f};
