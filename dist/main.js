(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resolver_auth_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolver/auth.resolver */ "./src/app/resolver/auth.resolver.ts");





const routes = [
    {
        path: '',
        children: [
            {
                path: 'main',
                loadChildren: () => Promise.all(/*! import() | main-main-module */[__webpack_require__.e("default~main-main-module~sidemenu-components-sidemenu-components-module"), __webpack_require__.e("main-main-module")]).then(__webpack_require__.bind(null, /*! ./main/main.module */ "./src/app/main/main.module.ts")).then(m => m.MainModule),
                canActivate: [_resolver_auth_resolver__WEBPACK_IMPORTED_MODULE_2__["Auth"]]
            },
            {
                path: 'nav',
                loadChildren: () => Promise.all(/*! import() | sidemenu-components-sidemenu-components-module */[__webpack_require__.e("default~home-home-module~sidemenu-components-sidemenu-components-module"), __webpack_require__.e("default~main-main-module~sidemenu-components-sidemenu-components-module"), __webpack_require__.e("sidemenu-components-sidemenu-components-module")]).then(__webpack_require__.bind(null, /*! ./sidemenu-components/sidemenu-components.module */ "./src/app/sidemenu-components/sidemenu-components.module.ts")).then(m => m.SidemenuComponentsModule),
                canActivate: [_resolver_auth_resolver__WEBPACK_IMPORTED_MODULE_2__["Auth"]]
            },
            {
                path: 'auth',
                loadChildren: () => __webpack_require__.e(/*! import() | authentication-authentication-module */ "authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts")).then(m => m.AuthenticatonModule),
            },
            {
                path: '**',
                redirectTo: 'auth',
                pathMatch: 'full'
            }
        ]
    }
    // {
    //   path : 'main',
    //   loadChildren : ()=> import('./main/main.module').then(m=> m.MainModule)
    // },
    // {
    //   path : '',
    //   redirectTo : 'main'
    // }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _design_component_custom_toaster_custom_toaster_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./design-component/custom-toaster/custom-toaster.component */ "./src/app/design-component/custom-toaster/custom-toaster.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");






class AppComponent {
    constructor() {
        this.title = 'customer-pwa';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-custom-toaster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _design_component_custom_toaster_custom_toaster_component__WEBPACK_IMPORTED_MODULE_2__["CustomToasterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/interceptor.service */ "./src/app/services/interceptor.service.ts");
/* harmony import */ var _services_api_services_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _main_home_global_validation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/home/global-validation.service */ "./src/app/main/home/global-validation.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _design_component_custom_toaster_custom_toaster_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./design-component/custom-toaster/custom-toaster.component */ "./src/app/design-component/custom-toaster/custom-toaster.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_api_services_service__WEBPACK_IMPORTED_MODULE_10__["ApiServicesService"],
        _main_home_global_validation_service__WEBPACK_IMPORTED_MODULE_12__["GlobalValidationService"],
        _services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["InterceptorService"],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _design_component_custom_toaster_custom_toaster_component__WEBPACK_IMPORTED_MODULE_14__["CustomToasterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _design_component_custom_toaster_custom_toaster_component__WEBPACK_IMPORTED_MODULE_14__["CustomToasterComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                ],
                providers: [
                    _services_api_services_service__WEBPACK_IMPORTED_MODULE_10__["ApiServicesService"],
                    _main_home_global_validation_service__WEBPACK_IMPORTED_MODULE_12__["GlobalValidationService"],
                    _services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                        useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["InterceptorService"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/design-component/custom-toaster/custom-toaster.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/design-component/custom-toaster/custom-toaster.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomToasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomToasterComponent", function() { return CustomToasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toaster.service */ "./src/app/design-component/custom-toaster/toaster.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CustomToasterComponent_span_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", d_r1.text, " ");
} }
function CustomToasterComponent_span_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", d_r1.text, " ");
} }
function CustomToasterComponent_span_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " error_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", d_r1.text, " ");
} }
function CustomToasterComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomToasterComponent_span_2_div_1_Template, 5, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomToasterComponent_span_2_div_2_Template, 5, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomToasterComponent_span_2_div_3_Template, 6, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r1 && d_r1.type === "success" && i_r2 < 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r1 && d_r1.type === "error" && i_r2 < 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r1 && d_r1.type === "info" && i_r2 < 2);
} }
class CustomToasterComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.toastMsg = [];
    }
    // method to initialize first
    ngOnInit() {
        // call the alert service to display a message on success and on error
        this.toastService.getMessage().subscribe(d => {
            if (!d) {
                return;
            }
            this.toastMsg.unshift(d);
            this.setHide(d.type, d.msgId, d.timer);
        });
    }
    setHide(type, msgId, timer) {
        setTimeout(() => {
            const index = this.toastMsg.findIndex(x => x.msgId === msgId);
            this.toastMsg.splice(index, 1);
        }, timer);
    }
    closeToast(type, msgId, index) {
        this.toastMsg.splice(index, 1);
    }
}
CustomToasterComponent.ɵfac = function CustomToasterComponent_Factory(t) { return new (t || CustomToasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"])); };
CustomToasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomToasterComponent, selectors: [["app-custom-toaster"]], decls: 3, vars: 1, consts: [["href", "https://fonts.googleapis.com/css?family=Poppins", "rel", "stylesheet"], [1, "container-toast"], [4, "ngFor", "ngForOf"], ["class", "toast-spacing alert-msg list-inline", 4, "ngIf"], ["class", "toast-spacing alert-msg-error list-inline", 4, "ngIf"], ["class", "toast-spacing alert-msg-info list-inline", 4, "ngIf"], [1, "toast-spacing", "alert-msg", "list-inline"], [1, "success-create"], ["src", "assets/icons/toast-success.png", 2, "width", "40px"], [1, "toast-spacing", "alert-msg-error", "list-inline"], [1, "error-create"], ["src", "assets/icons/toast-failure.png", 2, "width", "40px"], [1, "toast-spacing", "alert-msg-info", "list-inline"], [1, "info-create"], [1, "material-icons"]], template: function CustomToasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomToasterComponent_span_2_Template, 4, 3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toastMsg);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".alert-msg[_ngcontent-%COMP%] {\n  background: #91C73E;\n  color: #fff;\n  padding: 14px 56px 15px 15px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 9px 3px #a7a7a7;\n  animation: fadein 0.5s, fadeout 0.5s 1s;\n}\n\n.closeButton[_ngcontent-%COMP%] {\n  float: right !important;\n  top: 5px;\n  cursor: pointer;\n  right: 5px;\n}\n\n.alert-msg[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .alert-msg-error[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.alert-msg[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.alert-heading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 58px;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.alert-msg-error[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img.img-of-error[_ngcontent-%COMP%] {\n  max-width: 16px;\n}\n\n.alert-msg-error[_ngcontent-%COMP%] {\n  background: #D05461;\n  color: #fff;\n  padding: 14px 56px 15px 15px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 9px 3px #a7a7a7;\n  animation: fadein 0.5s, fadeout 0.5s 1s;\n}\n\n.alert-msg-info[_ngcontent-%COMP%] {\n  background: #A5DFF8;\n  color: #fff;\n  padding: 14px 56px 15px 15px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 9px 3px #a7a7a7;\n  animation: fadein 0.5s, fadeout 0.5s 1s;\n}\n\n.success-create[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  float: left;\n  margin-right: 18px;\n  margin-top: -10px;\n}\n\n.success-create[_ngcontent-%COMP%] {\n  font-family: \"Poppins\";\n  font-size: 16px;\n  font-weight: 600;\n  \n  margin: 0px 0px 0px 4px;\n  color: #050607;\n}\n\n.error-create[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  float: left;\n  margin-right: 18px;\n  margin-top: -10px;\n}\n\n.error-create[_ngcontent-%COMP%] {\n  font-family: \"Poppins\";\n  font-size: 16px;\n  font-weight: 600;\n  \n  margin: 0px 0px 0px 4px;\n  color: #050607;\n}\n\n.info-create[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  float: left;\n  margin-right: 18px;\n  margin-top: -10px;\n}\n\n.info-create[_ngcontent-%COMP%] {\n  font-family: \"Poppins\";\n  font-size: 16px;\n  font-weight: 600;\n  \n  margin: 0px 0px 0px 4px;\n  color: #050607;\n}\n\n.container-toast[_ngcontent-%COMP%] {\n  font-family: \"Poppins\" !important;\n  position: fixed;\n  top: 5px;\n  left: 40%;\n  z-index: 9999999;\n}\n\n@media (max-width: 575px) {\n  .alert-msg[_ngcontent-%COMP%], .alert-msg-error[_ngcontent-%COMP%] {\n    width: auto;\n    right: 8px;\n  }\n\n  .container-toast[_ngcontent-%COMP%] {\n    font-family: \"Poppins\" !important;\n    position: fixed;\n    top: 14px;\n    left: 5%;\n    right: 5%;\n    z-index: 9999999;\n  }\n\n  .alert-msg[_ngcontent-%COMP%] {\n    background: #91C73E;\n    color: #fff;\n    padding: 14px 20px 15px 15px;\n    border-radius: 5px;\n    box-shadow: 0px 0px 9px 3px #a7a7a7;\n    animation: fadein 0.5s, fadeout 0.5s 1s;\n  }\n}\n\n@media (min-width: 400px) {\n  .alert-msg[_ngcontent-%COMP%], .alert-msg-error[_ngcontent-%COMP%] {\n    width: auto;\n    right: 8px;\n  }\n}\n\n@media (max-width: 400px) {\n  .alert-msg[_ngcontent-%COMP%], .alert-msg-error[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n\n.toast-spacing[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduLWNvbXBvbmVudC9jdXN0b20tdG9hc3Rlci9jdXN0b20tdG9hc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUdBLHVDQUFBO0FBQUo7O0FBR0U7RUFDRSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdFOztFQUVFLGdCQUFBO0FBQUo7O0FBSUU7RUFDRSxlQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0FBREo7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFHQSx1Q0FBQTtBQUZKOztBQUtFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBR0EsdUNBQUE7QUFISjs7QUFNRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUU7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBSEo7O0FBTUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1FO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNRTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFISjs7QUFNRTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNRTtFQUVFOztJQUVFLFdBQUE7SUFDQSxVQUFBO0VBSko7O0VBT0U7SUFDRSxpQ0FBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtFQUpKOztFQVFFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsNEJBQUE7SUFDQSxrQkFBQTtJQUNBLG1DQUFBO0lBR0EsdUNBQUE7RUFOSjtBQUNGOztBQVdFO0VBRUU7O0lBRUUsV0FBQTtJQUNBLFVBQUE7RUFWSjtBQUNGOztBQWFFO0VBRUU7O0lBRUUsV0FBQTtFQVpKO0FBQ0Y7O0FBZUU7RUFDRSxtQkFBQTtBQWJKOztBQXdCRTtFQUNFO0lBQU0sU0FBQTtJQUFXLFVBQUE7RUFUbkI7RUFVRTtJQUFJLFlBQUE7SUFBYyxVQUFBO0VBTnBCO0FBQ0Y7O0FBYUU7RUFDRTtJQUFNLFlBQUE7SUFBYyxVQUFBO0VBQ3RCO0VBQUU7SUFBSSxTQUFBO0lBQVcsVUFBQTtFQUlqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGVzaWduLWNvbXBvbmVudC9jdXN0b20tdG9hc3Rlci9jdXN0b20tdG9hc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydC1tc2cge1xuICAgIGJhY2tncm91bmQ6ICM5MUM3M0U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTRweCA1NnB4IDE1cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggM3B4ICNhN2E3YTc7XG4gIFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDEuMHM7XG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDEuMHM7XG4gIH1cbiAgXG4gIC5jbG9zZUJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgdG9wOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHJpZ2h0OiA1cHg7XG4gIH1cbiAgXG4gIC5hbGVydC1tc2cgbGkgcCxcbiAgLmFsZXJ0LW1zZy1lcnJvciBsaSBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIFxuICBcbiAgLmFsZXJ0LW1zZyBsaSAuZmEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICBcbiAgLmFsZXJ0LWhlYWRpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEycHg7XG4gICAgbGVmdDogNThweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgLmFsZXJ0LW1zZy1lcnJvciBsaSBpbWcuaW1nLW9mLWVycm9yIHtcbiAgICBtYXgtd2lkdGg6IDE2cHg7XG4gIH1cbiAgXG4gIC5hbGVydC1tc2ctZXJyb3Ige1xuICAgIGJhY2tncm91bmQ6ICNEMDU0NjE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTRweCA1NnB4IDE1cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggM3B4ICNhN2E3YTc7XG4gIFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDEuMHM7XG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDEuMHM7XG4gIH1cbiAgXG4gIC5hbGVydC1tc2ctaW5mbyB7XG4gICAgYmFja2dyb3VuZDogI0E1REZGODtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxNHB4IDU2cHggMTVweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDlweCAzcHggI2E3YTdhNztcbiAgXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMS4wcztcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMS4wcztcbiAgfVxuICBcbiAgLnN1Y2Nlc3MtY3JlYXRlIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMThweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgfVxuICBcbiAgLnN1Y2Nlc3MtY3JlYXRlIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC8qIHBhZGRpbmc6IDFweCAycHggMXB4IDJweDsgKi9cbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDRweDtcbiAgICBjb2xvcjogIzA1MDYwNztcbiAgfVxuICBcbiAgLmVycm9yLWNyZWF0ZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIH1cbiAgXG4gIC5lcnJvci1jcmVhdGUge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLyogcGFkZGluZzogMXB4IDJweCAxcHggMnB4OyAqL1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggNHB4O1xuICAgIGNvbG9yOiAjMDUwNjA3O1xuICB9XG4gIFxuICAuaW5mby1jcmVhdGUgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICB9XG4gIFxuICAuaW5mby1jcmVhdGUge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLyogcGFkZGluZzogMXB4IDJweCAxcHggMnB4OyAqL1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggNHB4O1xuICAgIGNvbG9yOiAjMDUwNjA3O1xuICB9XG4gIFxuICAuY29udGFpbmVyLXRvYXN0IHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDQwJTtcbiAgICB6LWluZGV4OiA5OTk5OTk5O1xuICB9XG4gIFxuICBAbWVkaWEobWF4LXdpZHRoOjU3NXB4KSB7XG4gIFxuICAgIC5hbGVydC1tc2csXG4gICAgLmFsZXJ0LW1zZy1lcnJvciB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIHJpZ2h0OiA4cHg7XG4gICAgfVxuICBcbiAgICAuY29udGFpbmVyLXRvYXN0IHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycgIWltcG9ydGFudDtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMTRweDtcbiAgICAgIGxlZnQ6IDUlO1xuICAgICAgcmlnaHQ6IDUlO1xuICAgICAgei1pbmRleDogOTk5OTk5OTtcbiAgfVxuICBcbiAgXG4gICAgLmFsZXJ0LW1zZyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjOTFDNzNFO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nOiAxNHB4IDIwcHggMTVweCAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggM3B4ICNhN2E3YTc7XG4gICAgXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAxLjBzO1xuICAgICAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDEuMHM7XG4gICAgfVxuICBcbiAgICBcbiAgfVxuICBcbiAgQG1lZGlhKG1pbi13aWR0aDo0MDBweCkge1xuICBcbiAgICAuYWxlcnQtbXNnLFxuICAgIC5hbGVydC1tc2ctZXJyb3Ige1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICByaWdodDogOHB4O1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhKG1heC13aWR0aDo0MDBweCkge1xuICBcbiAgICAuYWxlcnQtbXNnLFxuICAgIC5hbGVydC1tc2ctZXJyb3Ige1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICB9XG4gIFxuICAudG9hc3Qtc3BhY2luZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgXG4gIFxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO30gXG4gICAgdG8ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxuICAgIHRvIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XG4gICAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO30gXG4gICAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZW91dCB7XG4gICAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cbiAgICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cbiAgfVxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomToasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-toaster',
                templateUrl: './custom-toaster.component.html',
                styleUrls: ['./custom-toaster.component.scss']
            }]
    }], function () { return [{ type: _toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/design-component/custom-toaster/toaster.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/design-component/custom-toaster/toaster.service.ts ***!
  \********************************************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class ToasterService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }
    // OnSuccess Show message
    success(message, keepAfterNavigationChange = false, timer = 2000) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message, timer, msgId: this.genrateId() });
    }
    // Onerror show message
    error(message, keepAfterNavigationChange = false, timer = 2000) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message, timer, msgId: this.genrateId() });
    }
    info(message, keepAfterNavigationChange = false, timer = 2000) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'info', text: message, timer, msgId: this.genrateId() });
    }
    warning(message, keepAfterNavigationChange = false, timer = 2000) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'info', text: message, timer, msgId: this.genrateId() });
    }
    // getMessage is method to take message from component
    getMessage() {
        return this.subject.asObservable();
    }
    genrateId() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
ToasterService.ɵfac = function ToasterService_Factory(t) { return new (t || ToasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ToasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToasterService, factory: ToasterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directives/google-places.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/google-places.directive.ts ***!
  \*******************************************************/
/*! exports provided: GooglePlacesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePlacesDirective", function() { return GooglePlacesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GooglePlacesDirective {
    constructor(elRef) {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //elRef will get a reference to the element where
        //the directive is placed
        this.element = elRef.nativeElement;
    }
    getFormattedAddress(place) {
        //@params: place - Google Autocomplete place object
        //@returns: location_obj - An address object in human readable format
        let location_obj = {};
        let lat = place.geometry.location.lat();
        let long = place.geometry.location.lng();
        let offset = place.utc_offset;
        location_obj['geo_location'] = {
            type: "Point",
            coordinates: [long, lat]
        };
        location_obj['utc_offset'] = offset;
        for (let i in place.address_components) {
            let item = place.address_components[i];
            location_obj['formatted_address'] = place.formatted_address;
            if (item['types'].indexOf("locality") > -1) {
                location_obj['locality'] = item['long_name'];
            }
            else if (item['types'].indexOf("administrative_area_level_1") > -1) {
                location_obj['admin_area_l1'] = item['long_name'];
            }
            else if (item['types'].indexOf("street_number") > -1) {
                location_obj['street_number'] = item['short_name'];
            }
            else if (item['types'].indexOf("route") > -1) {
                location_obj['route'] = item['short_name'];
            }
            else if (item['types'].indexOf("sublocality_level_3") > -1) {
                location_obj['sublocality_level_3'] = item['short_name'];
            }
            else if (item['types'].indexOf("sublocality_level_2") > -1) {
                location_obj['sublocality_level_2'] = item['short_name'];
            }
            else if (item['types'].indexOf("sublocality_level_1") > -1) {
                location_obj['sublocality_level_1'] = item['short_name'];
            }
            else if (item['types'].indexOf("country") > -1) {
                location_obj['country'] = item['long_name'];
            }
            else if (item['types'].indexOf("postal_code") > -1) {
                location_obj['postal_code'] = item['short_name'];
            }
        }
        return location_obj;
    }
    ngOnInit() {
        const autocomplete = new google.maps.places.Autocomplete(this.element);
        //Event listener to monitor place changes in the input
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            //Emit the new address object for the updated place
            this.onSelect.emit(this.getFormattedAddress(autocomplete.getPlace()));
        });
    }
}
GooglePlacesDirective.ɵfac = function GooglePlacesDirective_Factory(t) { return new (t || GooglePlacesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
GooglePlacesDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: GooglePlacesDirective, selectors: [["", "google-place", ""]], outputs: { onSelect: "onSelect" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GooglePlacesDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[google-place]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/main/home/global-validation.service.ts":
/*!********************************************************!*\
  !*** ./src/app/main/home/global-validation.service.ts ***!
  \********************************************************/
/*! exports provided: GlobalValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalValidationService", function() { return GlobalValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class GlobalValidationService {
    constructor() {
        this.regex = {
            email: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
            number: '^[0-9]*$',
            name: '^[a-zA-Z ]{2,30}$',
            letter: '^[a-zA-Z ]+$',
            date: '^\d{4}-\d{2}-\d{2}$',
        };
    }
    getValidationErrors(group, validationMessages) {
        var formErrors = {};
        Object.keys(group.controls).forEach((key) => {
            const abstractControl = group.get(key);
            formErrors[key] = '';
            if (abstractControl &&
                !abstractControl.valid &&
                (abstractControl.touched || abstractControl.dirty)) {
                const messages = validationMessages[key];
                for (const errorKey in abstractControl.errors) {
                    if (errorKey) {
                        formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                let groupError = this.getValidationErrors(abstractControl, validationMessages);
                formErrors = Object.assign(Object.assign({}, formErrors), groupError);
            }
        });
        return formErrors;
    }
    matchConfirmItems(controlName, confirmControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const confirmControl = formGroup.controls[confirmControlName];
            if (!control || !confirmControl) {
                return null;
            }
            if (confirmControl.errors && !confirmControl.errors.mismatch) {
                return null;
            }
            if (control.value !== confirmControl.value) {
                confirmControl.setErrors({ mismatch: true });
            }
            else {
                confirmControl.setErrors(null);
            }
        };
    }
}
GlobalValidationService.ɵfac = function GlobalValidationService_Factory(t) { return new (t || GlobalValidationService)(); };
GlobalValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalValidationService, factory: GlobalValidationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalValidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/resolver/auth.resolver.ts":
/*!*******************************************!*\
  !*** ./src/app/resolver/auth.resolver.ts ***!
  \*******************************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class Auth {
    constructor(_router) {
        this._router = _router;
    }
    canActivate() {
        if (localStorage.getItem('customerToken')) {
            return true;
        }
        else {
            this._router.navigateByUrl('auth/login');
        }
    }
}
Auth.ɵfac = function Auth_Factory(t) { return new (t || Auth)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Auth.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Auth, factory: Auth.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Auth, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/api-services.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/api-services.service.ts ***!
  \**************************************************/
/*! exports provided: ApiServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServicesService", function() { return ApiServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







class ApiServicesService {
    constructor(http) {
        this.http = http;
        this.profileData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.sendProfileData = this.profileData.asObservable();
        this.filterUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.filterUpdateSubscribe = this.filterUpdate.asObservable();
        this.loginData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.getLoginData = this.loginData.asObservable();
        this.customerLocation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.getCustomerLocationData = this.customerLocation.asObservable();
        // public customerLogin= new BehaviorSubject()
        this.selectedIndex = 0;
        this.url = 'rating/staff_review/';
        this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].image_url; //image url
    }
    setLoginData(data) {
        this.loginData.next(data);
    }
    getLoginDataa() {
        return this.getLoginData;
    }
    setCustomerLocation(data) {
        this.customerLocation.next(data);
    }
    getLocationData() {
        return this.getCustomerLocationData;
    }
    get(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}${path}`, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    }
    put(path, body = {}) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}${path}`, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    }
    patch(path, body = {}) {
        return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}${path}`, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    }
    post(path, body = {}) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}${path}`, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    }
    postNew(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](), body = {}) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}${path}`, JSON.stringify(body), { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    }
    putNew(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](), body = {}) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}${path}`, JSON.stringify(body), { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    }
    patchNew(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](), body = {}) {
        return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}${path}`, JSON.stringify(body), { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    }
    delete(path) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}${path}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    }
    deleteNew(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}${path}`, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    }
    formatErrors(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error);
    }
    getdata(_id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}${this.url}${_id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    }
    postImage(path, body) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}${path}`, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    }
    setProfile(data) {
        this.profileData.next(data);
    }
    applyFilterChange(data) {
        this.filterUpdate.next(data);
    }
}
ApiServicesService.ɵfac = function ApiServicesService_Factory(t) { return new (t || ApiServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiServicesService, factory: ApiServicesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AuthServiceService {
    constructor(http) {
        this.http = http;
        this.cachedRequests = [];
        this.token = localStorage.getItem('customerToken');
    }
    getToken() {
        //if(this.token)
        //return this.token;
        //else
        let token;
        token = localStorage.getItem('customerToken');
        return token;
    }
    getUserData() {
        return JSON.parse(localStorage.getItem('customerLogin'));
    }
}
AuthServiceService.ɵfac = function AuthServiceService_Factory(t) { return new (t || AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthServiceService, factory: AuthServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/booking.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/booking.service.ts ***!
  \*********************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class BookingService {
    constructor() {
        this.slotBookingTime = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    startSlotBookingTime(obj) {
        this.slotBookingTime.next(obj);
    }
    getSlotBookingTime() {
        return this.slotBookingTime.asObservable();
    }
    isMobileView() {
        // if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        //   return true;
        // }else{
        //   return false;
        // }
        if (window.innerWidth >= 768) {
            return false;
        }
        else {
            return true;
        }
    }
}
BookingService.ɵfac = function BookingService_Factory(t) { return new (t || BookingService)(); };
BookingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookingService, factory: BookingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/interceptor.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/interceptor.service.ts ***!
  \*************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class InterceptorService {
    constructor(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    intercept(request, next) {
        if (this.auth.getToken()) {
            request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${this.auth.getToken()}`) });
        }
        if (!request.headers.has('Content-Type')) {
            if (request.url.indexOf('assets/uploadImages') > 0) {
                // request = request.clone({headers: request.headers.set('Content-Type','multipart/form-data; boundary=------WebKitFormBoundaryWaYVzReVi65jkvJF')})
            }
            else {
                request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
            }
        }
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                // 
                return event;
            }
        }, error => {
            // http response status code
            return this.handleAuthError(error);
        }));
    }
    handleAuthError(err) {
        console.log(err);
        //handle your auth error or rethrow
        if (err.status === 401) {
            //navigate /delete cookies or whatever
            // this.route.navigate(['auth/login'])
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err.message);
        }
        throw err;
    }
}
InterceptorService.ɵfac = function InterceptorService_Factory(t) { return new (t || InterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
InterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InterceptorService, factory: InterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class LocationService {
    constructor() {
        this.lat = 0;
        this.lng = 0;
        this.currentLocation = {};
        this.userLocation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                console.log(resp);
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
                this.getGeoLocation(resp.coords.longitude, resp.coords.latitude);
                // if(this.currentLocation != ''){
                //     return this.currentLocation;
                // }
            }, err => {
                reject(err);
            });
        });
    }
    getLocationPromise(lat, lng) {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    if (position) {
                        this.lat = position.coords.latitude;
                        this.lng = position.coords.longitude;
                        this.getAddress = (this.lat, this.lng);
                        console.log(position);
                        // this.apiloader.load().then(() => {
                        let geocoder = new google.maps.Geocoder;
                        let latlng = {
                            lat: this.lat,
                            lng: this.lng
                        };
                        geocoder.geocode({
                            'location': latlng
                        }, (results) => {
                            console.log(results);
                            if (results[0]) {
                                this.currentLocation = results[0];
                                console.log('current location ==>>', this.currentLocation);
                                if (this.currentLocation != '') {
                                    localStorage.setItem('customerLocation', JSON.stringify(this.currentLocation));
                                    resolve({ data: this.currentLocation });
                                }
                                console.log(this.assgin);
                            }
                            else {
                                console.log('Not found');
                            }
                        });
                        // });
                    }
                }, err => {
                    reject(err);
                });
            }
        });
    }
    getGeoLocation(lat, lng) {
        console.log(lat, lng);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (position) {
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;
                    this.getAddress = (this.lat, this.lng);
                    console.log(position);
                    // this.apiloader.load().then(() => {
                    let geocoder = new google.maps.Geocoder;
                    let latlng = {
                        lat: this.lat,
                        lng: this.lng
                    };
                    geocoder.geocode({
                        'location': latlng
                    }, (results) => {
                        console.log(results);
                        if (results[0]) {
                            this.currentLocation = results[0];
                            localStorage.setItem('customerLocation', JSON.stringify(this.currentLocation));
                            console.log('current location ==>>', this.currentLocation);
                            if (this.currentLocation != '') {
                                return this.currentLocation;
                            }
                            console.log(this.assgin);
                        }
                        else {
                            console.log('Not found');
                        }
                    });
                    // });
                }
            });
        }
        // if (navigator.geolocation) {
        //     let geocoder = new google.maps.Geocoder();
        //     let latlng = new google.maps.LatLng(lat, lng);
        //     let request = {
        //         latLng: latlng
        //     };
        //     geocoder.geocode(request, (results:any, status:any) => {
        //         console.log(results, status);
        //         if (status == google.maps.GeocoderStatus.OK) {
        //             let result = results[0];
        //             let rsltAdrComponent = result.address_components;
        //             let resultLength = rsltAdrComponent.length;
        //             if (result != null) {
        //                 console.log('google geo location ===>>>',result);
        //                 // this.marker.buildingNum = rsltAdrComponent.find(x = > x.types == 'street_number').long_name;
        //                 // this.marker.streetName = rsltAdrComponent.find(x = > x.types == 'route').long_name;
        //             } else {
        //                 alert("No address available!");
        //             }
        //         }
        //     });
        // }
    }
    setUserSelectionLocation(obj) {
        this.userLocation.next(obj);
    }
    getUserSelectionLocation() {
        return this.userLocation.asObservable();
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(); };
LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared-components/serach-location/serach-location.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared-components/serach-location/serach-location.component.ts ***!
  \********************************************************************************/
/*! exports provided: SerachLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerachLocationComponent", function() { return SerachLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");





class SerachLocationComponent {
    constructor(zone, ngbModalService, formbuilder, service) {
        this.zone = zone;
        this.ngbModalService = ngbModalService;
        this.formbuilder = formbuilder;
        this.service = service;
        this.addrSel = true;
    }
    ngOnInit() {
        // this.form()
    }
    closeModal(e) {
        this.ngbModalService.close();
    }
    setAddress(addrObj) {
        console.log(addrObj);
        //We are wrapping this in a NgZone to reflect the changes
        //to the object in the DOM.
        if (addrObj)
            localStorage.setItem('customerLocation', JSON.stringify(addrObj));
        this.service.setCustomerLocation(addrObj);
        this.ngbModalService.dismiss();
        console.log('4564=>>>>>>', addrObj);
        if (addrObj.postal_code)
            // this.addLocationForm.get('zip').setValue(addrObj.postal_code);
            if (addrObj.admin_area_l1)
                // this.addLocationForm.get('state').setValue(addrObj.admin_area_l1);
                if (addrObj.utc_offset)
                    // this.addLocationForm.get('timeOffset').setValue(addrObj.utc_offset);
                    // this.addLocationForm.get('street').setValue("");
                    if (addrObj.route) {
                        // this.addLocationForm.get('street').setValue(addrObj.route);
                    }
        if (addrObj.sublocality_level_3) {
            // const street = this.addLocationForm.get('street').value;
            // this.addLocationForm.get('street').setValue(street + (street ? ', ' : '') + addrObj.sublocality_level_3);
        }
        if (addrObj.sublocality_level_2) {
            // const street = this.addLocationForm.get('street').value;
            // this.addLocationForm.get('street').setValue(street + (street ? ', ' : '') + addrObj.sublocality_level_2);
        }
        if (addrObj.sublocality_level_1) {
            // const street = this.addLocationForm.get('street').value;
            // this.addLocationForm.get('street').setValue(street + (street ? ', ' : '') + addrObj.sublocality_level_1);
        }
        if (addrObj.street_number)
            // this.addLocationForm.get('building').setValue(addrObj.street_number);
            if (addrObj.geo_location) {
                this.addrSel = false;
                // this.addLocationForm.get('geo_location').setValue(addrObj.geo_location);
            }
            else {
                // this.addrSel = true;
            }
        this.zone.run(() => {
            this.addr = addrObj;
            this.addrKeys = Object.keys(addrObj);
        });
    }
    OnAddrChg(e) {
        if (e == "") {
            this.addrSel = true;
        }
    }
}
SerachLocationComponent.ɵfac = function SerachLocationComponent_Factory(t) { return new (t || SerachLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"])); };
SerachLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SerachLocationComponent, selectors: [["app-serach-location"]], decls: 13, vars: 0, consts: [[1, "container"], [1, "container", "my-style"], [1, "row", 3, "click"], [1, "col-10", "float-center", "text-style"], [1, ""], [1, "col-2", "float-right"], [1, "bi", "bi-x-circle"], [1, "row"], [1, "col-12", "searchbox"], ["google-place", "", "placeholder", "e.g. 120 Queen Street", 1, "form-control", 3, "onSelect", "input"]], template: function SerachLocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SerachLocationComponent_Template_div_click_2_listener() { return ctx.closeModal("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Select Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function SerachLocationComponent_Template_input_onSelect_12_listener($event) { return ctx.setAddress($event); })("input", function SerachLocationComponent_Template_input_input_12_listener($event) { return ctx.OnAddrChg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".locationBox[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 396px;\n}\n\n.my-style[_ngcontent-%COMP%] {\n  height: 96vh !important;\n}\n\n.searchbox[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.text-style[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VyYWNoLWxvY2F0aW9uL3NlcmFjaC1sb2NhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDSSx1QkFBQTtBQUVOOztBQUFFO0VBQ0ksVUFBQTtBQUdOOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZXJhY2gtbG9jYXRpb24vc2VyYWNoLWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uQm94e1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMzk2cHg7XG59XG4gIC5teS1zdHlsZSB7XG4gICAgICBoZWlnaHQ6IDk2dmggIWltcG9ydGFudDtcbiAgfVxuICAuc2VhcmNoYm94e1xuICAgICAgcGFkZGluZzogMDtcbiAgfVxuICBcblxuICAudGV4dC1zdHlsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SerachLocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-serach-location',
                templateUrl: './serach-location.component.html',
                styleUrls: ['./serach-location.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0, a1) { return { "btn-circle btn-border": a0, "btn-position": a1 }; };
function FooterComponent_div_0_footer_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_0_footer_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.navigate("home"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_0_footer_1_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.navigate("schedule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_0_footer_1_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.navigate("like"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_0_footer_1_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.navigate("notifications"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r3.presentUrl == "home", ctx_r3.presentUrl != "home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r3.presentUrl == "schedule", ctx_r3.presentUrl != "schedule"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx_r3.presentUrl == "like", ctx_r3.presentUrl != "like"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, ctx_r3.presentUrl == "notifications", ctx_r3.presentUrl != "notifications"));
} }
function FooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_0_footer_1_Template, 15, 16, "footer", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isHomeFooter);
} }
function FooterComponent_div_1_footer_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Massages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Deep Tissue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Swedish Massage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sport Massage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Trigger Point Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Therapies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Salt Therapy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Hydro Therapy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Aroma Therapy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Turkish Sauna");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Mobile App");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Download App");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_1_footer_1_Template, 41, 0, "footer", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isHomeFooter);
} }
function FooterComponent_div_2_footer_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "51 Queen Street,Busselton,Zen Body Massage Mandurah Australia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1300 633 393");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "51 Queen Street,Busselton,Zen Body Massage Mandurah Australia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "1300 633 393");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "51 Queen Street,Busselton,Zen Body Massage Mandurah Australia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "1300 633 393");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_2_footer_1_Template, 42, 0, "footer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isHomeFooter);
} }
class FooterComponent {
    constructor(route) {
        this.route = route;
        this.isHomeFooter = false;
        setInterval(() => {
            this.getScreenSize();
        }, 100);
    }
    getScreenSize() {
        this.ScreenWidth = window.innerWidth;
        this.ScreenHeight = window.innerHeight;
        if (this.ScreenWidth > 1024) {
            this.ShowMobile = false;
        }
        else if (this.ScreenWidth < 1024) {
            this.ShowMobile = true;
        }
    }
    ngOnInit() {
        this.route.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe(() => {
            this.route.url.split('/').length >= 3 ? this.presentUrl = this.route.url.split('/')[2] : this.presentUrl = 'home';
            // console.log(this.presentUrl);
            if (this.route.url.includes('auth')) {
                this.isHomeFooter = false;
            }
            else if (this.route.url.includes('online-support')) {
                this.isHomeFooter = false;
            }
            else if (this.route.url.includes('report-bug')) {
                this.isHomeFooter = false;
            }
            else if (this.route.url.includes('my-backpack')) {
                this.isHomeFooter = false;
            }
            else {
                if (this.route.url.includes('home')) {
                    if (this.route.url == "/main/home") {
                        this.isHomeFooter = true;
                    }
                    if (this.route.url.includes('category')) {
                        this.isHomeFooter = false;
                    }
                    if (this.route.url.includes('therapist')) {
                        this.isHomeFooter = false;
                        if (!this.ShowMobile) {
                            this.isHomeFooter = true;
                        }
                    }
                    if (this.route.url.includes('shop-details')) {
                        this.isHomeFooter = false;
                    }
                    if (this.route.url.includes('select-service')) {
                        this.isHomeFooter = false;
                    }
                    if (this.route.url.includes('pick-therapist')) {
                        this.isHomeFooter = false;
                    }
                    if (this.route.url.includes('select-time')) {
                        this.isHomeFooter = false;
                    }
                    if (this.route.url.includes('send-request')) {
                        this.isHomeFooter = false;
                    }
                    if (this.route.url.includes('book-for')) {
                        this.isHomeFooter = false;
                    }
                    if (this.route.url.includes('book-for')) {
                        this.isHomeFooter = false;
                    }
                    if (this.route.url.includes('book-appointment')) {
                        this.isHomeFooter = false;
                    }
                    if (this.route.url.includes('intake-form')) {
                        this.isHomeFooter = false;
                    }
                    if (this.route.url.includes('recent')) {
                        if (!this.ShowMobile) {
                            this.isHomeFooter = true;
                        }
                        else {
                            this.isHomeFooter = false;
                        }
                    }
                }
                else {
                    this.isHomeFooter = true;
                }
            }
        });
    }
    navigate(url) {
        // console.log(url);//
        this.presentUrl = url;
        this.route.navigateByUrl(`main/${url}`);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 3, consts: [["class", "parentFooter", 4, "ngIf"], ["class", "secondFooter", 4, "ngIf"], ["class", "largeDeviceFooter", 4, "ngIf"], [1, "parentFooter"], ["class", "fixed-bottom bg-white footer-design", 4, "ngIf"], [1, "fixed-bottom", "bg-white", "footer-design"], [1, "container-fluid"], [1, "row", "p-2"], [1, "col-3", "text-center", 3, "click"], ["type", "button", 1, "btn", "btn-default", 3, "ngClass"], ["aria-hidden", "true", 1, "bi", "bi-house", "icon-color"], ["type", "button", 1, "btn", "btn-default", "btn-position", 3, "ngClass"], ["aria-hidden", "true", 1, "bi", "bi-calendar", "icon-color"], ["aria-hidden", "true", 1, "bi", "bi-heart", "icon-color"], ["aria-hidden", "true", 1, "bi", "bi-bell", "icon-color"], [1, "secondFooter"], ["class", "page-footer font-small footercolor", 4, "ngIf"], [1, "page-footer", "font-small", "footercolor"], [1, "container", "text-center", "text-md-left", "mt-5"], [1, "row", "mt-3"], [1, "col-md-2", "col-lg-4", "col-xl-3", "mx-auto", "mb-4"], ["src", "../../../assets/images/BookUs_logo.png", 1, "bookusLogo"], [1, "col-md-4", "col-lg-2", "col-xl-2", "mx-auto", "mb-4"], [1, "text-uppercase", "font-weight-bold"], ["href", "#!", 1, "textcolor"], [1, "col-md-2", "col-lg-3", "col-xl-3", "mx-auto", "mb-md-0", "mb-4"], ["type", "button", 1, "btn", "btn-primary", "downloadapp"], [1, "fa", "fa-download"], [1, "largeDeviceFooter"], ["class", "desktop-footer", 4, "ngIf"], [1, "desktop-footer"], [1, "container"], [1, "row"], [1, "col-md-4"], [1, "footer-text"], [1, "locationIcon", "icon-wrapper"], [1, "fa", "fa-map-marker"], [1, "locationAddres"], [1, "phoneIcon", "icon-wrapper"], [1, "fa", "fa-phone"], [1, "phonenumber"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterComponent_div_2_Template, 2, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ShowMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ShowMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".fa-home[_ngcontent-%COMP%]:before {\n  font-size: 24px;\n}\n\n.fa-calendar-o[_ngcontent-%COMP%]:before {\n  font-size: 24px;\n}\n\n.fa-heart-o[_ngcontent-%COMP%]:before {\n  font-size: 24px;\n}\n\n.fa-bell-o[_ngcontent-%COMP%]:before {\n  font-size: 24px;\n}\n\n.container-fluid[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%] {\n  height: 44px;\n}\n\n.footer-design[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-bottom: 0px;\n  border-left: 1px;\n  border-right: 1px;\n  border-width: 1px;\n  border-color: #dfe3e7;\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.12), 0px 0px 20px 0px rgba(0, 0, 0, 0.24) !important;\n}\n\n.icon-color[_ngcontent-%COMP%] {\n  color: #787b7d;\n}\n\n.btn-circle[_ngcontent-%COMP%] {\n  width: 50px;\n  background-color: white;\n  height: 50px;\n  margin-top: -22px;\n  \n  border-radius: 25px;\n  text-align: center;\n  font-size: 22px;\n  line-height: 0.42857;\n  box-shadow: 0px 4px 9px 4px rgba(0, 0, 0, 0.12), 0px 0px 20px 0px rgba(0, 0, 0, 0.24);\n}\n\n.btn-position[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n\n.bn-border[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-style: solid;\n}\n\n.largeDeviceFooter[_ngcontent-%COMP%] {\n  background-color: #2D323E;\n  color: white;\n}\n\n.desktop-footer[_ngcontent-%COMP%] {\n  padding: 30px 0;\n  height: 200px;\n}\n\n.desktop-footer[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 26px;\n}\n\n.desktop-footer[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.footercolor[_ngcontent-%COMP%] {\n  background-color: #EDF0F2;\n  height: 300px;\n}\n\n.bookusLogo[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 115px;\n}\n\n.text-uppercase[_ngcontent-%COMP%] {\n  margin-top: 83px;\n  color: #90C63E;\n  font-size: 24px;\n}\n\n.textcolor[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none !important;\n  font-size: 14px;\n}\n\n.downloadapp[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: #90C63E !important;\n  border-radius: 1px !important;\n  width: 100%;\n  height: 60px;\n  background-color: #90C63E;\n}\n\n.fa-download[_ngcontent-%COMP%]:before {\n  margin-right: 11px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0FBS0o7O0FBRkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnR0FBQTtBQUtKOztBQUZBO0VBQ0ksY0FBQTtBQUtKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUZBQUE7QUFLSjs7QUFGQTtFQUNJLGlCQUFBO0FBS0o7O0FBREE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFLSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSkk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFNUjs7QUFMUTtFQUNJLGtCQUFBO0FBT1o7O0FBSEE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7QUFNSjs7QUFKQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUxBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBVUo7O0FBUEE7RUFDSSw2QkFBQTtBQVVKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtaG9tZTpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5mYS1jYWxlbmRhci1vOmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuLmZhLWhlYXJ0LW86YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG4uZmEtYmVsbC1vOmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuLmNvbnRhaW5lci1mbHVpZCwgLmNvbnRhaW5lci1sZywgLmNvbnRhaW5lci1tZCwgLmNvbnRhaW5lci1zbSwgLmNvbnRhaW5lci14bCB7XG4gICAgaGVpZ2h0OiA0NHB4O1xufVxuXG4uZm9vdGVyLWRlc2lnbiB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItY29sb3I6ICNkZmUzZTc7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYigwIDAgMCAvIDEyJSksIDBweCAwcHggMjBweCAwcHggcmdiKDAgMCAwIC8gMjQlKSAhaW1wb3J0YW50O1xufVxuXG4uaWNvbi1jb2xvciB7XG4gICAgY29sb3I6ICM3ODdiN2Q7XG59XG5cbi5idG4tY2lyY2xlIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogLTIycHg7XG4gICAgLyogcGFkZGluZzogMHB4IDBweCAwcHggMHB4OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogMC40Mjg1NztcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDlweCA0cHggcmdiKDAgMCAwIC8gMTIlKSwgMHB4IDBweCAyMHB4IDBweCByZ2IoMCAwIDAgLyAyNCUpO1xufVxuXG4uYnRuLXBvc2l0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuXG4uYm4tYm9yZGVyIHtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuLmxhcmdlRGV2aWNlRm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDMyM0U7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGVza3RvcC1mb290ZXIge1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIC5mb290ZXItdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi10b3A6IDI2cHg7XG4gICAgICAgIC5pY29uLXdyYXBwZXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLmZvb3RlcmNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREYwRjI7XG4gICAgaGVpZ2h0OjMwMHB4Oztcbn1cbi5ib29rdXNMb2dve1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDExNXB4O1xufVxuLnRleHQtdXBwZXJjYXNle1xuICAgIG1hcmdpbi10b3A6IDgzcHg7XG4gICAgY29sb3I6ICM5MEM2M0U7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuLnRleHRjb2xvcntcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4uZG93bmxvYWRhcHAge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogIzkwQzYzRSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDFweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBDNjNFO1xufVxuXG4uZmEtZG93bmxvYWQ6YmVmb3JlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHggIWltcG9ydGFudDsgXG59XG4vLyAuYmFja2dyb3VuZEltZ3tcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dyb3VwXFwgOC5wbmdcIik7XG4vLyAgICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgICAvLyAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDEwMHZoO1xuLy8gfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");




class FooterModule {
}
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_serach_location_serach_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-components/serach-location/serach-location.component */ "./src/app/shared-components/serach-location/serach-location.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/booking.service */ "./src/app/services/booking.service.ts");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _directives_google_places_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../directives/google-places.directive */ "./src/app/directives/google-places.directive.ts");














const _c0 = ["sidenav"];
function HeaderComponent_div_65_header_1_div_18_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.locationList);
} }
function HeaderComponent_div_65_header_1_div_18_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.locationData);
} }
function HeaderComponent_div_65_header_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_65_header_1_div_18_p_1_Template, 2, 1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_65_header_1_div_18_p_2_Template, 2, 1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.locationList != undefined && ctx_r9.locationList != null && ctx_r9.locationList != "" && !ctx_r9.locationData.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.locationData != null && ctx_r9.locationData != undefined && ctx_r9.locationData != "");
} }
function HeaderComponent_div_65_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_65_header_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.showSidemenu("hello"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_65_header_1_Template_p_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.openLocationComponent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_65_header_1_Template_img_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.goToScore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_65_header_1_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.openLocationComponent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_div_65_header_1_div_18_Template, 3, 2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "$79.1 \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.customerDetails && ctx_r5.customerDetails.result && ctx_r5.customerDetails.result.image ? ctx_r5.customerDetails.result.image : "../../../assets/images/cust_icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r5.customerDetails && ctx_r5.customerDetails.result && ctx_r5.customerDetails.result.firstName ? ctx_r5.customerDetails.result.firstName : "", " ", " ", " ", ctx_r5.customerDetails && ctx_r5.customerDetails.result && ctx_r5.customerDetails.result.lastName ? ctx_r5.customerDetails.result.lastName : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isLocation);
} }
function HeaderComponent_div_65_header_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_65_header_2_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.navigateToHome(ctx_r19.presentUrl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_65_header_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "countdown", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("event", function HeaderComponent_div_65_header_2_ng_container_8_Template_countdown_event_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68); return ctx_r21.handleEvent($event, _r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r18.bookingTimeConfig);
} }
function HeaderComponent_div_65_header_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_65_header_2_div_3_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_div_65_header_2_ng_container_8_Template, 2, 1, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.presentUrl != "schedule" && ctx_r6.presentUrl != "like" && ctx_r6.presentUrl != "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx_r6.presentUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.startBookingTime);
} }
function HeaderComponent_div_65_header_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "countdown", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("event", function HeaderComponent_div_65_header_3_ng_container_9_Template_countdown_event_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68); return ctx_r24.handleEvent($event, _r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r23.bookingTimeConfig);
} }
function HeaderComponent_div_65_header_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_65_header_3_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.navigateToHome(ctx_r26.presentUrl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_div_65_header_3_ng_container_9_Template, 2, 1, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx_r7.categoryRoute));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.startBookingTime);
} }
function HeaderComponent_div_65_header_4_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "countdown", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("event", function HeaderComponent_div_65_header_4_ng_container_9_Template_countdown_event_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68); return ctx_r29.handleEvent($event, _r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r28.bookingTimeConfig);
} }
function HeaderComponent_div_65_header_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_65_header_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.navigateToHome(ctx_r31.presentUrl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_div_65_header_4_ng_container_9_Template, 2, 1, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx_r8.categoryRoute));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.startBookingTime);
} }
function HeaderComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_65_header_1_Template, 24, 5, "header", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_65_header_2_Template, 9, 5, "header", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_65_header_3_Template, 10, 4, "header", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_65_header_4_Template, 10, 4, "header", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isHomeHeader && !ctx_r1.categoryRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isHomeHeader && !ctx_r1.authHeader && ctx_r1.presentUrl != "my-profile" && !ctx_r1.categoryRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isHomeHeader && ctx_r1.categoryRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isHomeHeader && ctx_r1.authHeader && ctx_r1.categoryRoute);
} }
function HeaderComponent_div_66_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.isShowSearchBar = !ctx_r36.isShowSearchBar; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r33.userLocation, "");
} }
function HeaderComponent_div_66_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Choose Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_div_66_div_17_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.userLocation = $event; })("onSelect", function HeaderComponent_div_66_div_17_Template_input_onSelect_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.setAddress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r34.userLocation);
} }
function HeaderComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.navigateToHomePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_div_66_div_16_Template, 5, 1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_div_66_div_17_Template, 5, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_Template_li_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.goToSchedule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_Template_li_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.goToFavourite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Favourites");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_Template_li_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.goToNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Gift Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Cendra");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function HeaderComponent_div_66_Template_button_focus_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return _r35.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.navigateTo("my-profile"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.navigateTo("Wallet"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "My Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.navigateTo("my-backpack"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "My Backpack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.navigateTo("my-relationship"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "My Relationships");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.navigateTo(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "List My Shop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.navigateTo(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Invite A Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_Template_button_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.navigateTo("report-bug"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Report a Bug");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.navigateTo("faq"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "FAQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_Template_button_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.navigateTo("online-support"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Online Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_66_Template_button_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.logoutUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isShowSearchBar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isShowSearchBar);
} }
function HeaderComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bookus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Given booking time is finished, You need to select another time slot.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_67_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.selectAnotherTimeSlot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Select Another Time Slot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router, service, route, NgbDialogService, location, bookingService, locationService) {
        this.router = router;
        this.service = service;
        this.route = route;
        this.NgbDialogService = NgbDialogService;
        this.location = location;
        this.bookingService = bookingService;
        this.locationService = locationService;
        this.isHomeHeader = false;
        this.authHeader = true;
        this.route_title = '';
        this.categoryRoute = '';
        this.locationList = '';
        this.locationData = '';
        this.startBookingTime = false;
        this.bookingTimeConfig = { leftTime: 300, format: 'm:s' };
        this.userLocation = '';
        setInterval(() => {
            this.getScreenSize();
        }, 100);
    }
    getScreenSize() {
        this.ScreenWidth = window.innerWidth;
        this.ScreenHeight = window.innerHeight;
        if (this.ScreenWidth > 1024) {
            this.ShowMobile = false;
        }
        else if (this.ScreenWidth < 1024) {
            this.ShowMobile = true;
        }
    }
    ngOnInit() {
        this.setUserLocation();
        // this.router.events.subscribe((res) => {
        //   this.categoryRoute = '';
        //   if (this.router.url.includes('home')) {
        //     this.isHomeHeader = true; //home page
        //     if(this.router.url.includes('therapist')){
        //       this.isHomeHeader = false;
        //       this.categoryRoute = 'therapist'
        //     }
        //     if(this.router.url.includes('shop-details')){
        //       this.isHomeHeader = false;
        //       this.categoryRoute = 'Shop Details'
        //     }
        //     if(this.router.url.includes('select-service')){
        //       this.isHomeHeader = false;
        //       this.categoryRoute = 'Select Service'
        //     }
        //     if(this.router.url.includes('pick-therapist')){
        //       this.isHomeHeader = false;
        //       this.categoryRoute = 'Pick Therapist'
        //     }
        //     if(this.router.url.includes('select-time')){
        //       this.isHomeHeader = false;
        //       this.categoryRoute = 'Select Time'
        //     }
        //     if(this.router.url.includes('send-request')){
        //       this.isHomeHeader = false;
        //       this.categoryRoute = 'Send Request'
        //     }
        //     if(this.router.url.includes('pay')){
        //       this.isHomeHeader = false;
        //       this.categoryRoute = 'Payment'
        //     }
        //     if(this.router.url.includes('book-for')){
        //       this.isHomeHeader = false;
        //       this.categoryRoute = 'Book For'
        //     }
        //     if(this.router.url.includes('book-appointment')) {
        //       this.isHomeHeader = false;
        //       this.categoryRoute = 'Book Appointment'
        //     }
        //     if(this.router.url.includes('intake-form')) {
        //       this.isHomeHeader = false;
        //       this.categoryRoute = 'Intake Form'
        //     }
        //   } else {
        //     this.isHomeHeader = false;
        //     (!this.router.url.includes('auth')) ?
        //       (this.presentUrl = this.router.url.split('/')[2], this.authHeader = false)
        //       : (this.presentUrl = '',
        //         this.authHeader = true)
        //   }
        //   let newData : any = [];
        if (this.route && this.route.queryParams) {
            this.route.queryParams.subscribe(resp => {
                if (resp && resp.title) {
                    this.route_title = resp.title;
                    this.sidenav.nativeElement.style.width = '100%';
                }
                else {
                    this.route_title = '';
                    if (resp && resp.category) {
                        this.categoryRoute = resp.category;
                    }
                    if (resp && resp.therapistName) {
                        // console.log(resp.therapistName);
                        this.categoryRoute = resp.therapistName;
                        // newData = resp.therapistName.split('%');
                        // this.categoryRoute = newData[0] + newData[1];
                        // console.log(this.categoryRoute);
                    }
                    this.sidenav.nativeElement.style.width = '0%';
                }
            });
        }
        // })
        this.customerDetails = JSON.parse(localStorage.getItem('customerLogin'));
        this.service.getLoginData.subscribe(res => {
            (res) ? (this.customerDetails = res) : '';
        }, err => {
            console.log(err);
        });
        let result = JSON.parse(localStorage.getItem('customerLogin'));
        this.sheildData = result.result.shield;
        this.bookingService.getSlotBookingTime().subscribe((obj) => {
            if (obj.data == null) {
                this.startBookingTime = false;
            }
            else {
                this.bookingDetails = obj;
                this.startBookingTime = false;
                setTimeout(() => {
                    this.startBookingTime = true;
                }, 1000);
            }
        });
    }
    ngAfterViewInit() {
        console.log('afterview');
        this.isLocation = false;
        this.service.getCustomerLocationData.subscribe(res => {
            console.log('LOCATIONN=================>>', res);
        });
        // setTimeout(() => {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe(() => {
            this.categoryRoute = '';
            this.locationList = '';
            let data;
            data = JSON.parse(localStorage.getItem('customerLocation'));
            this.locationList = data && data.formatted_address;
            console.log(this.locationList);
            this.service.getLocationData().subscribe((res) => {
                this.locationData = res && res.formatted_address ? res.formatted_address : '';
                console.log(this.locationData);
            });
            this.isLocation = true;
            if (this.router.url.includes('home')) {
                this.isHomeHeader = true; //home page
                this.authHeader = false;
                if (this.router.url.includes('therapist')) {
                    this.isHomeHeader = false;
                    if (!this.ShowMobile) {
                        this.isHomeHeader = true;
                    }
                    this.categoryRoute = 'therapist';
                }
                if (this.router.url.includes('shop-details')) {
                    this.isHomeHeader = false;
                    this.categoryRoute = 'Shop Details';
                }
                if (this.router.url.includes('select-service')) {
                    this.isHomeHeader = false;
                    this.categoryRoute = 'Select Service';
                }
                if (this.router.url.includes('pick-therapist')) {
                    this.isHomeHeader = false;
                    this.categoryRoute = 'Pick Therapist';
                }
                if (this.router.url.includes('select-time')) {
                    this.isHomeHeader = false;
                    this.categoryRoute = 'Select Time';
                }
                if (this.router.url.includes('send-request')) {
                    this.isHomeHeader = false;
                    this.categoryRoute = 'Send Request';
                }
                if (this.router.url.includes('pay')) {
                    this.isHomeHeader = false;
                    this.categoryRoute = 'Payment';
                }
                if (this.router.url.includes('book-for')) {
                    this.isHomeHeader = false;
                    this.categoryRoute = 'Book For';
                }
                if (this.router.url.includes('book-appointment')) {
                    this.isHomeHeader = false;
                    this.categoryRoute = 'Book Appointment';
                }
                if (this.router.url.includes('intake-form')) {
                    this.isHomeHeader = false;
                    this.categoryRoute = 'Intake Form';
                }
                if (this.router.url.includes('all-reviews')) {
                    this.isHomeHeader = false;
                    this.categoryRoute = 'All Reviews';
                    this.presentUrl = 'All Reviews';
                }
                if (this.router.url.includes('recent')) {
                    this.isHomeHeader = false;
                    this.categoryRoute = 'Recent View';
                    this.presentUrl = 'Recent View';
                }
                if (this.router.url.includes('search-shop')) {
                    this.isHomeHeader = false;
                    this.categoryRoute = 'Search Shop';
                    this.presentUrl = 'Search Shop';
                }
            }
            else {
                console.log('router-->>', this.router.url.includes('auth'));
                this.isHomeHeader = false;
                if (this.router.url.includes('auth')) {
                    this.presentUrl = '';
                    this.authHeader = true;
                }
                else if (!this.router.url.includes('auth')) {
                    this.presentUrl = this.router.url.split('/')[2];
                    this.authHeader = false;
                }
            }
            if (this.route && this.route.queryParams) {
                this.route.queryParams.subscribe(resp => {
                    // console.log(response);
                    // if(response && response.therapistName){
                    //   this.categoryRoute = response.therapistName;
                    //   this.presentUrl = response.therapistName;
                    // }
                    if (resp && resp.title) {
                        this.route_title = resp.title;
                        this.sidenav.nativeElement.style.width = '100%';
                    }
                    else {
                        this.route_title = '';
                        // if (resp && resp.category) {//
                        //   this.categoryRoute = resp.category;
                        // }
                        if (resp && resp.therapistName) {
                            // console.log(resp.therapistName);
                            this.categoryRoute = resp.therapistName;
                            // newData = resp.therapistName.split('%');
                            // this.categoryRoute = newData[0] + newData[1];
                            // console.log(this.categoryRoute);
                        }
                        if (resp && resp.locationId) {
                            if (this.router.url.includes('all-reviews')) {
                                this.presentUrl = 'All Reviews';
                                this.isHomeHeader = false;
                                if (!this.ShowMobile) {
                                    this.isHomeHeader = true;
                                    this.authHeader = false;
                                }
                            }
                        }
                        if (resp && resp.category && resp.id && resp.categoryId) {
                            if (this.router.url.includes('category')) {
                                this.isHomeHeader = false;
                                this.authHeader = false;
                                this.categoryRoute = resp.category;
                                this.presentUrl = resp.category;
                            }
                        }
                        this.sidenav.nativeElement.style.width = '0%';
                    }
                });
            }
            if (this.router.url.includes('login')) {
                this.isHomeHeader = false;
                this.categoryRoute = null;
                this.authHeader = true;
            }
        });
    }
    openLocationComponent() {
        const openLocationRef = this.NgbDialogService.open(src_app_shared_components_serach_location_serach_location_component__WEBPACK_IMPORTED_MODULE_2__["SerachLocationComponent"], {});
        openLocationRef.componentInstance.name = 'Location';
    }
    showSidemenu(type) {
        this.sidenav.nativeElement.style.width = '100%';
        let result = JSON.parse(localStorage.getItem('customerLogin'));
        this.sheildData = result.result.shield;
    }
    closeNav() {
        this.hideNavbar();
    }
    navigateTo(path) {
        this.hideNavbar();
        path ?
            this.router.navigateByUrl(`nav/${path}`) : '';
    }
    logoutUser() {
        this.hideNavbar();
        localStorage.clear();
        setTimeout(() => {
            this.router.navigateByUrl('auth/login');
        }, 1000);
    }
    navigateToHome(url) {
        this.goBack();
        // this.router.navigate(['main/home'], { queryParams: { title: url } });//
    }
    hideNavbar() {
        this.sidenav.nativeElement.style.width = '0%';
    }
    goBack() {
        this.location.back();
    }
    handleEvent(event, content) {
        // console.log(event);
        if (event.action == 'done') {
            this.startBookingTime = false;
            this.NgbDialogService.open(content, { centered: true });
        }
    }
    selectAnotherTimeSlot() {
        this.router.navigate(['main/home/select-time'], { queryParams: this.bookingDetails.data });
        this.NgbDialogService.dismissAll();
    }
    // routing
    goToScore() {
        this.router.navigate(['/nav/my-score']);
    }
    navigateToHomePage() {
        this.router.navigate(['/main/home']);
    }
    setUserLocation() {
        this.customerLocation = JSON.parse(localStorage.getItem('customerLocation'));
        this.userLocation = this.getGeoCity(this.customerLocation);
    }
    setAddress(obj) {
        let latPosition = obj && obj.geo_location ? obj.geo_location.coordinates[1] : obj.geometry.location.lat;
        let logPosition = obj && obj.geo_location ? obj.geo_location.coordinates[0] : obj.geometry.location.lng;
        this.userLocation = this.getGeoCity(obj);
        this.isShowSearchBar = false;
        this.locationService.setUserSelectionLocation({
            'latPosition': latPosition,
            'logPosition': logPosition,
        });
        localStorage.setItem('customerLocation', JSON.stringify(obj));
    }
    getGeoCity(results) {
        if (!results.address_components) {
            return results.locality;
        }
        let matches = results.address_components.filter((address_component) => ["locality", "colloquial_area"].some(word => ~address_component.types.indexOf(word)));
        if (!matches || !matches.length) {
        }
        else {
            return matches[0].short_name;
        }
        return '';
    }
    goToSchedule() {
        this.router.navigate(['/main/schedule']);
    }
    goToFavourite() {
        this.router.navigate(['/main/like']);
    }
    goToNotification() {
        this.router.navigate(['/main/notifications']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_7__["BookingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 69, vars: 15, consts: [["id", "mySidenav", 1, "sidenav"], ["sidenav", ""], [1, "container-fluid", "material-header", 2, "background-color", "black", "color", "white"], [1, "row", "p-1"], [1, "col-2", "text-center", "app-logo-container"], [1, "bi", "bi-patch-check-fill", "bi-icon-color"], [1, "profile-image", 3, "src"], [1, "col-10"], [1, "headerRight-top", "d-flex", "align-items-center", "justify-content-between1"], [1, "center-text-style"], [1, "user-detail-block", "d-flex", "align-items-start"], [1, "headerMain-details", 2, "margin-top", "0px"], [1, "userbadge-name", "d-flex"], [1, "mb-0"], ["src", "../../../assets/images/bronze_badge.svg", 1, "ml-2"], [1, "locationStats", "d-flex", "align-items-center", 2, "margin-top", "0px"], [1, "bi", "bi-star-fill", "mb-1"], [1, "mb-0", "ml-1", "location-wrapper"], [2, "position", "relative", 3, "click"], ["src", "../../../assets/images/sheild.svg", 1, "sheild-img"], [1, "centered"], ["href", "javascript:void(0)", 1, "closebtn", 3, "click"], [1, "border_type", 3, "click"], [1, "bi", "bi-chevron-right", "bi-sidemenu-icon"], [1, "border_type", 3, "ngClass", "click"], [1, "show_version"], [1, "btn", "btn-dark", "logout_button", 3, "click"], ["class", "parentHeader", 4, "ngIf"], ["class", "largeHeader", 4, "ngIf"], ["content", ""], [1, "parentHeader"], ["class", "fixed-top bg-white", 4, "ngIf"], ["class", "fixed-top", 4, "ngIf"], [1, "fixed-top", "bg-white"], [1, "container-fluid", "material-header"], [1, "col-2", "text-center", "app-logo-container", 3, "click"], [1, "headerRight-top", "d-flex", "align-items-center", "justify-content-between"], [1, "col-12", "d-flex", "align-items-start"], [1, "headerMain-details"], [1, "mb-0", 3, "click"], ["src", "../../../assets/images/bronze_badge.svg", 1, "ml-2", 3, "click"], [1, "locationStats", "d-flex", "align-items-center", 3, "click"], [1, "locationIcon"], [1, "bi", "bi-geo-alt-fill"], ["class", "location-wrapper", 4, "ngIf"], [1, "center-text-style", "user-waller"], ["src", "../../../assets/images/wallet.svg", "alt", "my_wallet", "width", "20", "height", "20"], [1, "location-wrapper"], ["class", "mb-0 ml-1 locationHeader", 4, "ngIf"], [1, "mb-0", "ml-1", "locationHeader"], [1, "fixed-top"], [1, "container-fluid", "bg-dark"], [1, "row", "bg-dark", "text-white", "header-container"], ["class", "", 3, "click", 4, "ngIf"], [1, "mt-1", "header-title"], [1, "bold-header", "authHeader", "presentUrl_my_profile"], [4, "ngIf"], [1, "", 3, "click"], [1, "bi", "bi-arrow-left-circle-fill"], [3, "config", "event"], [3, "click"], [1, "bold-header", "authheader", "catefroyRoute"], [1, "largeHeader"], [1, "shadow-sm", "navbar", "navbar-expand-lg", "navbar-light"], [1, "row", "w-100"], [1, "logo"], [1, "navbar-brand", 3, "click"], ["src", "../../../assets/images/BookUs_logo.png", "alt", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "search-bar"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "search-wrapper"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2"], [1, "Icon-img"], [1, "fa", "fa-search"], [1, "user-locations"], ["class", "current-location", 3, "click", 4, "ngIf"], ["class", "search-location", 4, "ngIf"], [1, "menuItems"], [1, "head-text"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", 3, "click"], [1, "textcolor"], [1, "nav-item"], [1, "nav-link"], ["src", "../../../assets/images/wallet.svg"], [1, "nav-item", "m-0"], [1, "outer-dropWrapper"], [1, "name-user"], ["src", "../../../assets/images/bronze_badge.svg"], ["ngbDropdown", "", 1, "d-inline-block", "customDropdown"], ["myDrop", "ngbDropdown"], ["id", "dropdownManual", "ngbDropdownAnchor", "", 1, "btn", "btn-outline-primary", "btn-sm", "mr-2", 3, "focus"], ["src", "../../../assets/images/default_circle.svg", "alt", "", 1, "imgCircle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownManual"], ["ngbDropdownItem", "", 3, "click"], ["ngbDropdownItem", "", 1, "logout", 3, "click"], ["src", "../../../assets/images/verified.svg", 1, "verifiedimg"], [1, "current-location", 3, "click"], [1, "search-location"], ["google-place", "", "placeholder", "e.g. 120 Queen Street", 1, "form-control", 3, "ngModel", "ngModelChange", "onSelect"], [1, "modal-header"], [1, "book-another-therapist-title"], [1, "modal-body"], [1, "success-wrapper"], [1, "signature-info", "mb-4"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-dark", "book-another-therapist", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_22_listener() { return ctx.navigateTo("my-score"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_26_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_28_listener() { return ctx.navigateTo(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_31_listener() { return ctx.navigateTo("my-profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_34_listener() { return ctx.navigateTo("Wallet"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "My Wallet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_37_listener() { return ctx.navigateTo("my-backpack"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "My Backpack ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_40_listener() { return ctx.navigateTo("my-relationship"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "My Relationships ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_43_listener() { return ctx.navigateTo("my-points"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "My Loyality Points ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_46_listener() { return ctx.navigateTo(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "List My Shop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_49_listener() { return ctx.navigateTo(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Invite a Friend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_52_listener() { return ctx.navigateTo("report-bug"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Report a Bug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_55_listener() { return ctx.navigateTo("faq"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "FAQ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_58_listener() { return ctx.navigateTo("online-support"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Online Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Version 2.6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_63_listener() { return ctx.logoutUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, HeaderComponent_div_65_Template, 5, 4, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, HeaderComponent_div_66_Template, 69, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, HeaderComponent_ng_template_67_Template, 11, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.customerDetails && ctx.customerDetails.result && ctx.customerDetails.result.image ? ctx.customerDetails.result.image : "../../../assets/images/cust_icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.customerDetails && ctx.customerDetails.result && ctx.customerDetails.result.firstName ? ctx.customerDetails.result.firstName : "", " ", " ", " ", ctx.customerDetails && ctx.customerDetails.result && ctx.customerDetails.result.lastName ? ctx.customerDetails.result.lastName : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sheildData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.route_title == "profile" ? "my-profile" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.route_title == "Wallet" ? "my-profile" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.route_title == "my-backpack" ? "my-profile" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.route_title == "my-relationship" ? "my-profile" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.route_title == "my-points" ? "my-profile" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.route_title == "report-bug" ? "my-profile" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.route_title == "faq" ? "my-profile" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.route_title == "online-support" ? "my-profile" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ShowMobile && !ctx.authHeader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownAnchor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _directives_google_places_directive__WEBPACK_IMPORTED_MODULE_11__["GooglePlacesDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: [".profile-image[_ngcontent-%COMP%] {\n  width: 40px;\n  background-color: white;\n  height: 40px;\n  border-radius: 25px;\n  border-style: solid;\n  border-width: 1px;\n  text-align: center;\n  font-size: 22px;\n  line-height: 0.42857;\n}\n\n.center-text-style[_ngcontent-%COMP%] {\n  margin-left: -12px !important;\n  padding-left: 0px !important;\n  height: 20px !important;\n}\n\n.material-header[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.12), 0px 0px 20px 0px rgba(0, 0, 0, 0.24) !important;\n  height: 66px;\n}\n\n.bi-icon-color[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 27px;\n  margin-top: 24px;\n  width: 15px;\n  background-color: white;\n  height: 15px;\n  border-radius: 25px;\n  text-align: center;\n  line-height: 0.42857;\n  color: green;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  background-color: #ffffff;\n  overflow-x: hidden;\n  transition: 0.5s;\n  text-align: left;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 16px;\n  color: #818181;\n  display: block;\n  transition: 200ms;\n}\n\n.sidenav[_ngcontent-%COMP%]   .border_type[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;\n}\n\n.my-profile[_ngcontent-%COMP%] {\n  color: black !important;\n  background-color: whitesmoke !important;\n}\n\n.centered[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 59%;\n  font-size: 12px;\n  transform: translate(-50%, -50%);\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f1f1f1;\n}\n\n.sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  right: 0px;\n  font-size: 32px;\n  margin-left: 0px;\n  padding: 8px 0px 8px 0px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n.show_version[_ngcontent-%COMP%] {\n  text-align: right !important;\n  font-size: 10px !important;\n}\n\n.sidenav[_ngcontent-%COMP%]   .logout_button[_ngcontent-%COMP%] {\n  width: 100% !important;\n  border-radius: 0rem !important;\n}\n\n.sidenav[_ngcontent-%COMP%]   .bi-sidemenu-icon[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 18px;\n  font-weight: 900;\n}\n\n.bi-geo-alt-fill[_ngcontent-%COMP%]::before {\n  margin-bottom: 3px;\n}\n\n.bold-header[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n  padding-top: 2px !important;\n  margin-bottom: 0px;\n}\n\n.locationHeader[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  width: 150px !important;\n  font-size: 13px;\n}\n\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n.search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #E9E9E9;\n  border-radius: 6px;\n  padding-right: 40px;\n}\n\n.search-wrapper[_ngcontent-%COMP%]   .Icon-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 15px;\n  padding: 0px 10px;\n  border-left: 1px solid #CDCDCD;\n}\n\n.head-text[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n\n.head-text[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #90C63E;\n  border-color: #90C63E;\n  color: #000;\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 14px;\n}\n\n.largeHeader[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.largeHeader[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.imgCircle[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  content: none;\n}\n\n.outer-dropWrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.outer-dropWrapper[_ngcontent-%COMP%]   .name-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.customDropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border-color: none !important;\n  border: none !important;\n  position: relative;\n  padding: 0 !important;\n}\n\n.customDropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  border: none;\n}\n\n.customDropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.customDropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  right: 0;\n  left: inherit;\n  padding: 0 10px;\n  max-width: 250px;\n}\n\n.customDropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 14px;\n  border-bottom: solid 1px #ece7e7;\n  padding: 4px 10px;\n  width: 200px;\n}\n\n.verifiedimg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 14px;\n  right: 8px;\n  bottom: 0;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 5px !important;\n}\n\n.nav-link[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 24px !important;\n}\n\n.logout[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 45px !important;\n  color: #90C63E;\n}\n\n.textcolor[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 8px 10px;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  width: 85%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.book-another-therapist[_ngcontent-%COMP%] {\n  margin-inline: auto;\n}\n\n.book-another-therapist-title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 0;\n}\n\n.userbadge-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.app-logo-container[_ngcontent-%COMP%] {\n  padding: 3px 0px;\n  margin-top: 1px !important;\n}\n\n@media screen and (max-width: 348px) {\n  .headerMain-details[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .headerMain-details[_ngcontent-%COMP%]   .userbadge-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .user-waller[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .profile-image[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n  }\n\n  .bi-icon-color[_ngcontent-%COMP%] {\n    margin-left: 24px !important;\n    margin-top: 21px !important;\n    font-size: 13px !important;\n  }\n\n  .material-header[_ngcontent-%COMP%] {\n    height: 52px !important;\n  }\n\n  #mySidenav[_ngcontent-%COMP%]   .userbadge-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n    font-weight: 600;\n  }\n  #mySidenav[_ngcontent-%COMP%]   .sheild-img[_ngcontent-%COMP%] {\n    width: 21px !important;\n  }\n  #mySidenav[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%] {\n    font-size: 11px !important;\n  }\n  #mySidenav[_ngcontent-%COMP%]   .headerRight-top[_ngcontent-%COMP%] {\n    gap: 5px;\n  }\n  #mySidenav[_ngcontent-%COMP%]   .user-detail-block[_ngcontent-%COMP%] {\n    margin-inline: 5px;\n  }\n}\n\n#mySidenav[_ngcontent-%COMP%]   .sheild-img[_ngcontent-%COMP%] {\n  width: 22px !important;\n  margin-left: 8px;\n}\n\n#mySidenav[_ngcontent-%COMP%]   .locationStats[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.largeHeader[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  top: 0;\n  background: #fff;\n}\n\n.largeHeader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0 45px;\n}\n\n.largeHeader[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  margin: 8px 10px;\n  width: 20%;\n}\n\n.largeHeader[_ngcontent-%COMP%]   .menuItems[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n}\n\n.search-location[_ngcontent-%COMP%] {\n  float: right;\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.search-location[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.search-location[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 290px;\n}\n\n.current-location[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 15px;\n}\n\n.current-location[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0000ab;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0dBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFFQSxpQkFBQTtBQURKOztBQUlFO0VBQ0Usc0RBQUE7QUFESjs7QUFLRTtFQUNFLHVCQUFBO0VBQ0EsdUNBQUE7QUFGSjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFGSjs7QUFLRTtFQUNFLGNBQUE7QUFGSjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUZKOztBQUtFO0VBQ0U7SUFBVSxpQkFBQTtFQURaOztFQUVFO0lBQVksZUFBQTtFQUVkO0FBQ0Y7O0FBQUU7RUFDSSw0QkFBQTtFQUNBLDBCQUFBO0FBRU47O0FBQ0U7RUFDSSxzQkFBQTtFQUNBLDhCQUFBO0FBRU47O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUhFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFLSjs7QUFERTtFQUNFLGNBQUE7QUFJSjs7QUFGSTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFJTjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUVKOztBQURJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBR047O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBSUY7O0FBSEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFERTtFQUNFLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFISTtFQUNFLFlBQUE7QUFLTjs7QUFISTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUtOOztBQUZFO0VBQ0UsUUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFISTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUtOOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFJRjs7QUFGQTtFQUNFLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUFNRjs7QUFMRTtFQUNFLHNCQUFBO0FBT0o7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBT0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQU1GOztBQUpBO0VBQ0UsbUJBQUE7QUFPRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFRRjs7QUFOQTtFQUdFLGdCQUFBO0VBQ0EsMEJBQUE7QUFPRjs7QUFKQTtFQUNFO0lBQ0UsZUFBQTtFQU9GO0VBTEk7SUFDRSxlQUFBO0VBT047O0VBRkU7SUFDRSxlQUFBO0VBS0o7O0VBRkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQUtGOztFQUhBO0lBQ0UsNEJBQUE7SUFDQSwyQkFBQTtJQUNBLDBCQUFBO0VBTUY7O0VBSkE7SUFDRSx1QkFBQTtFQU9GOztFQUZJO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VBS047RUFGRTtJQUNFLHNCQUFBO0VBSUo7RUFGRTtJQUNFLDBCQUFBO0VBSUo7RUFGRTtJQUNFLFFBQUE7RUFJSjtFQUZFO0lBQ0Usa0JBQUE7RUFJSjtBQUNGOztBQUNFO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtBQUNKOztBQUdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBQ0U7RUFDRSxlQUFBO0FBQ0o7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFDRTtFQUNFLDRCQUFBO0FBQ0o7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWltYWdlIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbGluZS1oZWlnaHQ6IDAuNDI4NTc7XG59XG5cbi5jZW50ZXItdGV4dC1zdHlsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdGVyaWFsLWhlYWRlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggMHB4IHJnYigwIDAgMCAvIDEyJSksIDBweCAwcHggMjBweCAwcHggcmdiKDAgMCAwIC8gMjQlKSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjZweDtcbn1cblxuLmJpLWljb24tY29sb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAyN3B4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMC40Mjg1NztcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgLy8gcGFkZGluZy10b3A6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICB9XG5cbiAgLnNpZGVuYXYgYSB7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjODE4MTgxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIHRyYW5zaXRpb246IDAuM3M7XG4gICAgdHJhbnNpdGlvbjoyMDBtcztcbiAgfVxuXG4gIC5zaWRlbmF2IC5ib3JkZXJfdHlwZSB7XG4gICAgYm9yZGVyLWJvdHRvbSA6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKSAhaW1wb3J0YW50O1xuXG4gIH1cblxuICAubXktcHJvZmlsZSB7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNlbnRlcmVkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTklO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuXG4gIC5zaWRlbmF2IGE6aG92ZXJ7XG4gICAgY29sb3I6ICNmMWYxZjE7XG4gIH1cblxuICAuc2lkZW5hdiAuY2xvc2VidG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZzogOHB4IDBweCA4cHggMHB4O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gICAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cbiAgICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE4cHg7fVxuICB9XG5cbiAgLnNob3dfdmVyc2lvbiB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2lkZW5hdiAubG9nb3V0X2J1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogMHJlbSAhaW1wb3J0YW50O1xufVxuXG4uc2lkZW5hdiAuYmktc2lkZW1lbnUtaWNvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuLmJpLWdlby1hbHQtZmlsbDo6YmVmb3JlIHtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4uYm9sZC1oZWFkZXIge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmxvY2F0aW9uSGVhZGVye1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNlYXJjaC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RTk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIH1cbiAgLkljb24taW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQ0RDRENEO1xuICB9XG59XG4uaGVhZC10ZXh0IHtcbiAgLm5hdi1pdGVtIHtcbiAgICBtYXJnaW46IDAgMjBweDtcblxuICAgIC5idG4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkwQzYzRTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzkwQzYzRTtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59XG4ubGFyZ2VIZWFkZXIge1xuICAubmF2YmFyLWJyYW5kIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgfVxufVxuLmltZ0NpcmNsZXtcbiAgd2lkdGg6NDVweDtcbiAgaGVpZ2h0OjQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cbi5vdXRlci1kcm9wV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgLm5hbWUtdXNlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4uY3VzdG9tRHJvcGRvd257XG4gIC5idG4ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnUge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWNlN2U3O1xuICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgfVxuICB9XG59XG4udmVyaWZpZWRpbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE0cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIGJvdHRvbTogMDtcbn1cbi5uYXZiYXItbmF2IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uYXYtbGluayB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gIC5pbWcge1xuICAgIHdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmxvZ291dHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM5MEM2M0U7XG59XG4udGV4dGNvbG9ye1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cblxuLmhlYWRlci1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG59XG5cbi5oZWFkZXItdGl0bGV7XG4gIHdpZHRoOiA4NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ib29rLWFub3RoZXItdGhlcmFwaXN0e1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xufVxuXG4uYm9vay1hbm90aGVyLXRoZXJhcGlzdC10aXRsZXtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi51c2VyYmFkZ2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5hcHAtbG9nby1jb250YWluZXJ7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkO1xuICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDNweCAwcHg7XG4gIG1hcmdpbi10b3A6IDFweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDhweCkge1xuICAuaGVhZGVyTWFpbi1kZXRhaWxze1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAudXNlcmJhZGdlLW5hbWV7XG4gICAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC51c2VyLXdhbGxlcntcbiAgICBzcGFue1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxuICAucHJvZmlsZS1pbWFnZXtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbiAgLmJpLWljb24tY29sb3Ige1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMjFweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYXRlcmlhbC1oZWFkZXJ7XG4gICAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjbXlTaWRlbmF2e1xuICAgIC51c2VyYmFkZ2UtbmFtZXtcbiAgICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnNoZWlsZC1pbWd7XG4gICAgICB3aWR0aDogMjFweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY2VudGVyZWR7XG4gICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmhlYWRlclJpZ2h0LXRvcHtcbiAgICAgIGdhcDogNXB4O1xuICAgIH1cbiAgICAudXNlci1kZXRhaWwtYmxvY2t7XG4gICAgICBtYXJnaW4taW5saW5lOiA1cHg7XG4gICAgfVxuICB9XG59XG5cbiNteVNpZGVuYXZ7XG4gIC5zaGVpbGQtaW1ne1xuICAgIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuICAubG9jYXRpb25TdGF0cyB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5cbi5sYXJnZUhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAubG9nb3tcbiAgICBwYWRkaW5nOiAwIDQ1cHg7XG4gIH1cbiAgLnNlYXJjaC1iYXJ7XG4gICAgbWFyZ2luOiA4cHggMTBweDtcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5tZW51SXRlbXN7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG4uc2VhcmNoLWxvY2F0aW9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBzcGFue1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuICBpbnB1dHtcbiAgICB3aWR0aDogMjkwcHg7XG4gIH1cbn1cbi5jdXJyZW50LWxvY2F0aW9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBzcGFue1xuICAgIGNvbG9yOiAjMDAwMGFiO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }, { type: src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_7__["BookingService"] }, { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/header/header.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/header/header.module.ts ***!
  \************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _directives_google_places_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/google-places.directive */ "./src/app/directives/google-places.directive.ts");








class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            ngx_countdown__WEBPACK_IMPORTED_MODULE_4__["CountdownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _directives_google_places_directive__WEBPACK_IMPORTED_MODULE_6__["GooglePlacesDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        ngx_countdown__WEBPACK_IMPORTED_MODULE_4__["CountdownModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _directives_google_places_directive__WEBPACK_IMPORTED_MODULE_6__["GooglePlacesDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    ngx_countdown__WEBPACK_IMPORTED_MODULE_4__["CountdownModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ],
                exports: [
                    _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenav/sidenav.module */ "./src/app/shared/sidenav/sidenav.module.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.module */ "./src/app/shared/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.module */ "./src/app/shared/footer/footer.module.ts");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
            _sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__["SidenavModule"],
        ], _header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
        _sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__["SidenavModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
        _header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
        _sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__["SidenavModule"]], exports: [_header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
        _sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__["SidenavModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
                    _header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
                    _sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__["SidenavModule"],
                ],
                exports: [
                    _header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
                    _sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__["SidenavModule"],
                    _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/sidenav/sidenav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidenav/sidenav.component.ts ***!
  \*****************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SidenavComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sidenav works!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SidenavComponent {
    constructor(route) {
        this.route = route;
        this.isSidenav = true;
    }
    ngOnInit() {
        this.route.events.subscribe(res => {
            if (this.route.url.includes('home')) {
                this.isSidenav = true;
            }
            else {
                this.isSidenav = false;
            }
        });
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidenavComponent_p_0_Template, 2, 0, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSidenav);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/sidenav/sidenav.module.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/sidenav/sidenav.module.ts ***!
  \**************************************************/
/*! exports provided: SidenavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavModule", function() { return SidenavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenav.component */ "./src/app/shared/sidenav/sidenav.component.ts");




class SidenavModule {
}
SidenavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SidenavModule });
SidenavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SidenavModule_Factory(t) { return new (t || SidenavModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidenavModule, { declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api_url: "http://3.139.122.234:8090/api/",
    image_url: "http://3.139.122.234:8090"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pt-03/Desktop/PWA-customer/custoemr-pwa/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map