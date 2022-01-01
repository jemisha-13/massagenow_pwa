(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidemenu-components-sidemenu-components-module"],{

/***/ "./src/app/sidemenu-components/buy-tip/buy-tip.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sidemenu-components/buy-tip/buy-tip.component.ts ***!
  \******************************************************************/
/*! exports provided: BuyTipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyTipComponent", function() { return BuyTipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _design_component_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../design-component/skeleton/skeleton.component */ "./src/app/design-component/skeleton/skeleton.component.ts");






function BuyTipComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyTipComponent_div_4_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const tipItem_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.buyTip(tipItem_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipItem_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tipItem_r2 == null ? null : tipItem_r2.tipCardId.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("amount: $", tipItem_r2 == null ? null : tipItem_r2.tipCardId.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You have:", ctx_r0.tipList[0] == null ? null : ctx_r0.tipList[0].purhchasedCount, "");
} }
function BuyTipComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-skeleton", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BuyTipComponent {
    constructor(service, router, active) {
        this.service = service;
        this.router = router;
        this.active = active;
        this.clientId = JSON.parse(localStorage.getItem('customerLogin'));
        this.tipList = [];
        this.active.queryParams.subscribe((params) => {
            this.tipImage = params.tipImage,
                this.amount = params.amount,
                this.title = params.title;
        });
    }
    ngOnInit() {
        this.tipData();
    }
    // api for tipList
    tipData() {
        this.service.get(`customers/findmytipcard?clientId=${this.clientId.client}`).subscribe((res) => {
            console.log(res);
            if (res.status == 200) {
                this.tipList = res.result;
            }
            console.log(this.tipList);
        });
    }
    buyTip(tipItem) {
        this.router.navigate(['/nav/tip-payment'], { queryParams: {
                amount: tipItem === null || tipItem === void 0 ? void 0 : tipItem.tipCardId.amount
            } });
    }
}
BuyTipComponent.ɵfac = function BuyTipComponent_Factory(t) { return new (t || BuyTipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__["ApiServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
BuyTipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuyTipComponent, selectors: [["app-buy-tip"]], decls: 6, vars: 2, consts: [[1, "myTipCard", "main"], [1, "container"], [1, "giftCard-outerWrapper"], [1, "row"], ["class", "col-md-6 col-sm-6 col-xs-12", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "col-md-6", "col-sm-6", "col-xs-12"], [1, "card"], ["src", "../../../assets/images/gift_card (1).svg", "alt", "", 1, "card-img-top", "img-fluid"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-footer", 3, "click"], [1, "col-12"], ["skeletonData", "No Tip Cards Available"]], template: function BuyTipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BuyTipComponent_div_4_Template, 12, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BuyTipComponent_div_5_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tipList[0] == null ? null : ctx.tipList[0].purchased);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.tipList == null ? null : ctx.tipList.length) == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _design_component_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_4__["SkeletonComponent"]], styles: [".myTipCard[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n  margin-top: 20px;\n}\n.myTipCard[_ngcontent-%COMP%]   .tipbtn-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 46px;\n  left: 0;\n  margin-top: 30px;\n  width: 100%;\n}\n.myTipCard[_ngcontent-%COMP%]   .tipbtn-wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #000;\n  border-color: #000;\n  border-radius: 0;\n  color: #fff;\n}\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 17px;\n}\n.card-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n.main[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUtY29tcG9uZW50cy9idXktdGlwL2J1eS10aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFNSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUpSO0FBS1E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUhaO0FBUUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFMSjtBQVFBO0VBQ0ksa0JBQUE7QUFMSjtBQVFBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFMSjtBQU9FO0VBQ0ksZ0JBQUE7QUFKTiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51LWNvbXBvbmVudHMvYnV5LXRpcC9idXktdGlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15VGlwQ2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyAuY2FyZC1jb2x1bW5zIHtcbiAgICAvLyAgICAgJi5sYXN0Q2FyZHtcbiAgICAvLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4MHB4O1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC50aXBidG4td3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiA0NnB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXJkLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5jYXJkLXRleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAubWFpbntcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyTipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buy-tip',
                templateUrl: './buy-tip.component.html',
                styleUrls: ['./buy-tip.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__["ApiServicesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/faq-comp/faq-comp.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/sidemenu-components/faq-comp/faq-comp.component.ts ***!
  \********************************************************************/
/*! exports provided: FaqCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqCompComponent", function() { return FaqCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FaqCompComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqCompComponent.ɵfac = function FaqCompComponent_Factory(t) { return new (t || FaqCompComponent)(); };
FaqCompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqCompComponent, selectors: [["app-faq-comp"]], decls: 2, vars: 0, template: function FaqCompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "faq-comp works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51LWNvbXBvbmVudHMvZmFxLWNvbXAvZmFxLWNvbXAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqCompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq-comp',
                templateUrl: './faq-comp.component.html',
                styleUrls: ['./faq-comp.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/my-backpack/my-backpack.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/sidemenu-components/my-backpack/my-backpack.component.ts ***!
  \**************************************************************************/
/*! exports provided: MyBackpackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBackpackComponent", function() { return MyBackpackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_components_loyalitypointlist_loyalitypointlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared-components/loyalitypointlist/loyalitypointlist.component */ "./src/app/shared-components/loyalitypointlist/loyalitypointlist.component.ts");
/* harmony import */ var _mybackpack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mybackpack.service */ "./src/app/sidemenu-components/my-backpack/mybackpack.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _design_component_custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../design-component/custom-spinner/custom-spinner.component */ "./src/app/design-component/custom-spinner/custom-spinner.component.ts");
/* harmony import */ var _design_component_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../design-component/skeleton/skeleton.component */ "./src/app/design-component/skeleton/skeleton.component.ts");









function MyBackpackComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-custom-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyBackpackComponent_div_15_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const giftCardItem_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](giftCardItem_r7 == null ? null : giftCardItem_r7.message.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](giftCardItem_r7 == null ? null : giftCardItem_r7.message.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 4, giftCardItem_r7 == null ? null : giftCardItem_r7.date, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", giftCardItem_r7 == null ? null : giftCardItem_r7.amount, "");
} }
function MyBackpackComponent_div_15_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-skeleton", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyBackpackComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyBackpackComponent_div_15_div_1_div_2_Template, 21, 7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyBackpackComponent_div_15_div_1_div_3_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.myBackPackList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.myBackPackList == null ? null : ctx_r4.myBackPackList.length) == 0);
} }
function MyBackpackComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyBackpackComponent_div_15_div_1_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
} }
function MyBackpackComponent_div_16_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBackpackComponent_div_16_div_1_div_2_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const tipItem_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.sendTip(tipItem_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBackpackComponent_div_16_div_1_div_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const tipItem_r11 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.goToBuy(tipItem_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Purchase Tip Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipItem_r11 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tipItem_r11 == null ? null : tipItem_r11.tipCardId.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("amount: $", tipItem_r11 == null ? null : tipItem_r11.tipCardId.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You have:", ctx_r9.tipList[0] == null ? null : ctx_r9.tipList[0].purhchasedCount, "");
} }
function MyBackpackComponent_div_16_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-skeleton", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyBackpackComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyBackpackComponent_div_16_div_1_div_2_Template, 15, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyBackpackComponent_div_16_div_1_div_3_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.tipList[0] == null ? null : ctx_r8.tipList[0].purchased);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r8.tipList == null ? null : ctx_r8.tipList.length) == 0);
} }
function MyBackpackComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyBackpackComponent_div_16_div_1_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isLoading);
} }
function MyBackpackComponent_div_17_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBackpackComponent_div_17_div_1_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const pointItem_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.goToLoyalityPoint(pointItem_r18 == null ? null : pointItem_r18.locationId == null ? null : pointItem_r18.locationId._id, pointItem_r18 == null ? null : pointItem_r18.have); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pointItem_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", pointItem_r18.locationId && pointItem_r18.locationId.company && pointItem_r18.locationId.company.logo ? pointItem_r18.locationId.company.logo : "../../../assets/images/no_image.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pointItem_r18 == null ? null : pointItem_r18.locationId.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", pointItem_r18 == null ? null : pointItem_r18.locationId.city, " ", pointItem_r18 == null ? null : pointItem_r18.locationId.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pointItem_r18 == null ? null : pointItem_r18.have);
} }
function MyBackpackComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyBackpackComponent_div_17_div_1_div_4_Template, 15, 5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.pointList);
} }
function MyBackpackComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-skeleton", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyBackpackComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyBackpackComponent_div_17_div_1_Template, 5, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyBackpackComponent_div_17_div_2_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.pointList == null ? null : ctx_r3.pointList.length) == 0);
} }
const _c0 = function (a0) { return { "active": a0 }; };
class MyBackpackComponent {
    constructor(mybackpackservice, route, ngbDialogueService) {
        this.mybackpackservice = mybackpackservice;
        this.route = route;
        this.ngbDialogueService = ngbDialogueService;
        this.isContentType = 'giftcard';
        this.myBackPackList = [];
        this.pointList = [];
        this.tipList = [];
        this.currTab = 'giftcard';
    }
    ngOnInit() {
        this.getMyBackPack();
    }
    getMyBackPack() {
        this.isLoading = true;
        this.mybackpackservice.myBackPack().subscribe((response) => {
            this.myBackPackList = response.result;
            this.isLoading = false;
        }, err => { console.log(err); });
    }
    getPoint() {
        this.isLoading = true;
        this.mybackpackservice.point().subscribe((response) => {
            this.pointList = response.result;
            console.log(this.pointList);
            this.isLoading = false;
        }, err => { console.log(err); });
    }
    getTip() {
        this.isLoading = true;
        this.mybackpackservice.tip().subscribe((response) => {
            this.tipList = response.result;
            this.isLoading = false;
        }, err => { console.log(err); });
    }
    // for tab link
    showContent(type) {
        this.currTab = type;
        if (this.currTab == 'giftcard') {
        }
        if (this.currTab == 'tipcard') {
            this.getTip();
        }
        if (this.currTab == 'point') {
            this.getPoint();
        }
    }
    // routing
    sendTip(tipItem) {
        this.route.navigate(['/nav/send-tip'], { queryParams: {
                tipCardId: tipItem === null || tipItem === void 0 ? void 0 : tipItem.tipCardId._id,
                tipImage: tipItem === null || tipItem === void 0 ? void 0 : tipItem.tipCardId.tipImage,
                amount: tipItem === null || tipItem === void 0 ? void 0 : tipItem.amount,
                day: tipItem === null || tipItem === void 0 ? void 0 : tipItem.date,
                _id: tipItem === null || tipItem === void 0 ? void 0 : tipItem._id
            } });
    }
    goToBuy(tipItem) {
        console.log(tipItem);
        this.route.navigate(['/nav/tip-payment'], { queryParams: {
                amount: tipItem === null || tipItem === void 0 ? void 0 : tipItem.tipCardId.amount
            } });
    }
    goToLoyalityPoint(_id, have) {
        console.log(_id);
        let details = {
            id: _id,
            have: have
        };
        const openLoyalityRef = this.ngbDialogueService.open(src_app_shared_components_loyalitypointlist_loyalitypointlist_component__WEBPACK_IMPORTED_MODULE_1__["LoyalitypointlistComponent"]);
        openLoyalityRef.componentInstance.data = details;
    }
}
MyBackpackComponent.ɵfac = function MyBackpackComponent_Factory(t) { return new (t || MyBackpackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mybackpack_service__WEBPACK_IMPORTED_MODULE_2__["MybackpackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
MyBackpackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyBackpackComponent, selectors: [["app-my-backpack"]], decls: 18, vars: 13, consts: [["class", "parentLoader", 4, "ngIf"], [1, "mybackpack"], [1, "row", "bg-dark", "fixed-top", "mt-my-5"], [1, "col-4", "text-center", "text-white", 3, "click"], [3, "ngClass"], ["class", "giftCard", 4, "ngIf"], ["class", "myTipCard", 4, "ngIf"], [1, "parentLoader"], [1, "giftCard"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "row"], ["class", "col-md-6 col-sm-6 col-xs-12", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "col-md-6", "col-sm-6", "col-xs-12"], [1, "backpackcard"], [1, "useraddres"], [1, "userto"], [1, "userfrom"], [1, "userdate"], [1, "date"], [1, "money"], [1, "col-12", "mt-2"], ["skeletonData", "No Gift Cards Available"], [1, "myTipCard"], [1, "card"], ["src", "../../../assets/images/gift_card (1).svg", "alt", "", 1, "card-img-top", "img-fluid"], [1, "card-body"], [1, "card-title", "font-weight-bold"], [1, "card-text"], [1, "card-text", "text-muted"], [1, "card-footer", 3, "click"], [1, "tipbtn-wrapper"], [1, "btn", "btn-primary", 3, "click"], ["skeletonData", "No Tip Cards Available"], [1, "loyalityMain-page"], [1, "container", "mt-5"], ["class", "col-md-6 col-sm-6 col-xs-12 carddetailposition", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-sm-6", "col-xs-12", "carddetailposition"], [1, "card", "therapist-card", 3, "click"], [1, "card-body", "shadow"], [1, "therapist-details"], [1, "therapist-img"], ["alt", "rere", 3, "src"], [1, "therapist-text"], [1, "font-weight-bold"], [1, "star-wrapper"], [1, "point"], [1, "col-12"], ["skeletonData", "No Points Available"]], template: function MyBackpackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyBackpackComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBackpackComponent_Template_div_click_3_listener() { return ctx.showContent("giftcard"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Gift Card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBackpackComponent_Template_div_click_7_listener() { return ctx.showContent("tipcard"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Tip Card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBackpackComponent_Template_div_click_11_listener() { return ctx.showContent("point"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Point ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MyBackpackComponent_div_15_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MyBackpackComponent_div_16_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MyBackpackComponent_div_17_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.currTab == "giftcard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.currTab == "tipcard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.currTab == "point"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currTab == "giftcard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currTab == "tipcard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currTab == "point");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _design_component_custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_6__["CustomSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _design_component_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_7__["SkeletonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".mt-my-5[_ngcontent-%COMP%] {\n  margin-top: 2.5rem !important;\n}\n\n.mybackpack[_ngcontent-%COMP%] {\n  margin: 82px 0 0;\n  height: calc(100vh - 128px);\n  position: relative;\n  margin-bottom: 100px;\n}\n\n.mybackpack[_ngcontent-%COMP%]   .backpackcard[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  padding: 10px;\n  border-radius: 4px;\n  margin-bottom: 30px;\n}\n\n.mybackpack[_ngcontent-%COMP%]   .backpackcard[_ngcontent-%COMP%]   .useraddres[_ngcontent-%COMP%] {\n  padding-top: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.mybackpack[_ngcontent-%COMP%]   .backpackcard[_ngcontent-%COMP%]   .useraddres[_ngcontent-%COMP%]   .userto[_ngcontent-%COMP%], .mybackpack[_ngcontent-%COMP%]   .backpackcard[_ngcontent-%COMP%]   .useraddres[_ngcontent-%COMP%]   .userfrom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n\n.mybackpack[_ngcontent-%COMP%]   .backpackcard[_ngcontent-%COMP%]   .useraddres[_ngcontent-%COMP%]   .userto[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mybackpack[_ngcontent-%COMP%]   .backpackcard[_ngcontent-%COMP%]   .useraddres[_ngcontent-%COMP%]   .userfrom[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 130px;\n}\n\n.mybackpack[_ngcontent-%COMP%]   .backpackcard[_ngcontent-%COMP%]   .useraddres[_ngcontent-%COMP%]   .userto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .mybackpack[_ngcontent-%COMP%]   .backpackcard[_ngcontent-%COMP%]   .useraddres[_ngcontent-%COMP%]   .userfrom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.mybackpack[_ngcontent-%COMP%]   .backpackcard[_ngcontent-%COMP%]   .userdate[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.therapist-details[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n}\n\n@media all and (max-width: 1024px) {\n  .therapist-details[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n}\n\n.therapist-img[_ngcontent-%COMP%] {\n  width: 70px;\n}\n\n.therapist-text[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 500;\n  width: calc(100% - 150px);\n}\n\n.therapist-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50%;\n}\n\n.star-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 2px;\n  width: 15px;\n}\n\n.carddetailposition[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  padding-left: 0px;\n  margin-top: 12px !important;\n}\n\n.point[_ngcontent-%COMP%] {\n  width: 70px;\n  background: #000;\n  height: 66px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n}\n\n.star-wrapper[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 17px;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.myTipCard[_ngcontent-%COMP%]   .card-columns.lastCard[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.myTipCard[_ngcontent-%COMP%]   .tipbtn-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 46px;\n  left: 0;\n  margin-top: 30px;\n  width: 100%;\n}\n\n.myTipCard[_ngcontent-%COMP%]   .tipbtn-wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #000;\n  border-color: #000;\n  border-radius: 0;\n  color: #fff;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid white;\n}\n\n.giftcard[_ngcontent-%COMP%], .tipcard[_ngcontent-%COMP%], .point[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n@media all and (min-width: 1024px) {\n  .mybackpack[_ngcontent-%COMP%] {\n    overflow: auto;\n    height: auto;\n    margin: 82px 0 0;\n  }\n\n  .mt-my-5[_ngcontent-%COMP%] {\n    margin-top: 70px !important;\n  }\n\n  .giftCard[_ngcontent-%COMP%], .myTipCard[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n\n  .carddetailposition[_ngcontent-%COMP%] {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-top: 12px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUtY29tcG9uZW50cy9teS1iYWNrcGFjay9teS1iYWNrcGFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUVKOztBQURJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFHUjs7QUFGUTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFJWjs7QUFIWTs7RUFFSSxhQUFBO0VBQ0EscUJBQUE7QUFLaEI7O0FBSmdCOztFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFPcEI7O0FBTGdCOztFQUNJLGVBQUE7QUFRcEI7O0FBSlE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTVo7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBREk7RUFKRjtJQUtNLDhCQUFBO0VBSU47QUFDRjs7QUFGRTtFQUNFLFdBQUE7QUFLSjs7QUFIRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQU1KOztBQUpFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQVFKOztBQU5FO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBU0o7O0FBUEE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFVSjs7QUFQQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVVGOztBQVBBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUkE7RUFDSSxrQkFBQTtBQVdKOztBQVRBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFZRjs7QUFOUTtFQUNJLG1CQUFBO0FBU1o7O0FBTkk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFRUjs7QUFQUTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBU1o7O0FBTEE7RUFDSSxtQkFBQTtBQVFKOztBQU5BO0VBQ0ksOEJBQUE7QUFTSjs7QUFQRTtFQUNFLDBCQUFBO0FBVUo7O0FBUEE7RUFDSTtJQUNJLGNBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUFVTjs7RUFQRTtJQUNJLDJCQUFBO0VBVU47O0VBUEU7SUFDSSxpQkFBQTtFQVVOOztFQVBFO0lBQ0ksbUJBQUE7SUFDQSxrQkFBQTtJQUNBLDJCQUFBO0VBVU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51LWNvbXBvbmVudHMvbXktYmFja3BhY2svbXktYmFja3BhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXQtbXktNSB7XG4gICAgbWFyZ2luLXRvcCA6IDIuNXJlbSAhaW1wb3J0YW50O1xufVxuLm15YmFja3BhY2sge1xuICAgIG1hcmdpbjogODJweCAwIDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTI4cHgpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAuYmFja3BhY2tjYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgLnVzZXJhZGRyZXMge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIC51c2VydG8sXG4gICAgICAgICAgICAudXNlcmZyb20ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXJkYXRlIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICB9XG59XG4udGhlcmFwaXN0LWNhcmR7XG4gICAgLy8gbWF4LXdpZHRoOiA1MDBweDtcbiAgfVxuICAudGhlcmFwaXN0LWRldGFpbHN7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gIH1cbiAgLnRoZXJhcGlzdC1pbWcge1xuICAgIHdpZHRoOiA3MHB4O1xuICB9XG4gIC50aGVyYXBpc3QtdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gIH1cbiAgLnRoZXJhcGlzdC1pbWcgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLnN0YXItd3JhcHBlciBpbWd7XG4gICAgbWFyZ2luOiAwIDJweDtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxuICAuY2FyZGRldGFpbHBvc2l0aW9ue1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDsgXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7IFxuICAgIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcbn1cbi5wb2ludHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIGhlaWdodDogNjZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc3Rhci13cmFwcGVyIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4vLyAgIHdpZHRoOiAxMzVweDtcbn1cbi5jYXJkLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG4uY2FyZC10ZXh0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkLWZvb3RlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubXlUaXBDYXJkIHtcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmNhcmQtY29sdW1ucyB7XG4gICAgICAgICYubGFzdENhcmR7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC50aXBidG4td3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiA0NnB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG59XG4uY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hY3RpdmV7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlO1xuICB9XG4gIC5naWZ0Y2FyZCwudGlwY2FyZCwucG9pbnR7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLm15YmFja3BhY2sge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW46IDgycHggMCAwO1xuICAgIH1cblxuICAgIC5tdC1teS01IHtcbiAgICAgICAgbWFyZ2luLXRvcCA6IDcwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZ2lmdENhcmQsIC5teVRpcENhcmQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAuY2FyZGRldGFpbHBvc2l0aW9ue1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4OyBcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4OyBcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyBackpackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-backpack',
                templateUrl: './my-backpack.component.html',
                styleUrls: ['./my-backpack.component.scss']
            }]
    }], function () { return [{ type: _mybackpack_service__WEBPACK_IMPORTED_MODULE_2__["MybackpackService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/my-backpack/mybackpack.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sidemenu-components/my-backpack/mybackpack.service.ts ***!
  \***********************************************************************/
/*! exports provided: MybackpackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MybackpackService", function() { return MybackpackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");



class MybackpackService {
    constructor(apiService) {
        this.apiService = apiService;
        this.clientId = JSON.parse(localStorage.getItem('customerLogin'));
        this.myBackPack = () => this.apiService.get(`customers/findmygiftcard?clientId=${this.clientId.client}&sent=false&received=true`);
        this.point = () => this.apiService.get(`customers/loyalty_points?id=${this.clientId.client}`);
        this.tip = () => this.apiService.get(`customers/findmytipcard?clientId=${this.clientId.client}`);
    }
}
MybackpackService.ɵfac = function MybackpackService_Factory(t) { return new (t || MybackpackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__["ApiServicesService"])); };
MybackpackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MybackpackService, factory: MybackpackService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MybackpackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__["ApiServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/my-loyality-points/my-loyality-points.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/sidemenu-components/my-loyality-points/my-loyality-points.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MyLoyalityPointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyLoyalityPointsComponent", function() { return MyLoyalityPointsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_components_loyalitypointlist_loyalitypointlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared-components/loyalitypointlist/loyalitypointlist.component */ "./src/app/shared-components/loyalitypointlist/loyalitypointlist.component.ts");
/* harmony import */ var _myloyalitypoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myloyalitypoint.service */ "./src/app/sidemenu-components/my-loyality-points/myloyalitypoint.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _design_component_custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../design-component/custom-spinner/custom-spinner.component */ "./src/app/design-component/custom-spinner/custom-spinner.component.ts");







function MyLoyalityPointsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-custom-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyLoyalityPointsComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyLoyalityPointsComponent_div_1_div_4_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const loyalityItem_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.openLoyality(loyalityItem_r3 == null ? null : loyalityItem_r3.locationId._id, loyalityItem_r3 == null ? null : loyalityItem_r3.have); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loyalityItem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", loyalityItem_r3 && loyalityItem_r3.company && loyalityItem_r3.company.profileImg ? loyalityItem_r3.company.profileImg : "../../../assets/images/no_image.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loyalityItem_r3 == null ? null : loyalityItem_r3.locationId.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", loyalityItem_r3 == null ? null : loyalityItem_r3.locationId.city, " ", loyalityItem_r3 == null ? null : loyalityItem_r3.locationId.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loyalityItem_r3 == null ? null : loyalityItem_r3.have);
} }
function MyLoyalityPointsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyLoyalityPointsComponent_div_1_div_4_Template, 15, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.myLoyalityPointList);
} }
class MyLoyalityPointsComponent {
    constructor(loyalitypointservice, ngbDialogueService) {
        this.loyalitypointservice = loyalitypointservice;
        this.ngbDialogueService = ngbDialogueService;
        this.myLoyalityPointList = [];
    }
    ngOnInit() {
        this.getLoyalityPoint();
    }
    getLoyalityPoint() {
        this.isLoading = true;
        this.loyalitypointservice.loyalityPoint().subscribe((response) => {
            console.log(response);
            this.myLoyalityPointList = response.result;
            this.loyalityPoint = response.result[0].have;
            console.log(this.loyalityPoint);
            localStorage.setItem('loyalityPoint', JSON.stringify(this.loyalityPoint));
            this.isLoading = false;
        }, err => { console.log(err); });
    }
    // dialogue open
    openLoyality(_id, have) {
        let details = {
            id: _id,
            have: have
        };
        const openLoyalityRef = this.ngbDialogueService.open(src_app_shared_components_loyalitypointlist_loyalitypointlist_component__WEBPACK_IMPORTED_MODULE_1__["LoyalitypointlistComponent"]);
        openLoyalityRef.componentInstance.data = details;
    }
}
MyLoyalityPointsComponent.ɵfac = function MyLoyalityPointsComponent_Factory(t) { return new (t || MyLoyalityPointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_myloyalitypoint_service__WEBPACK_IMPORTED_MODULE_2__["MyloyalitypointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
MyLoyalityPointsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyLoyalityPointsComponent, selectors: [["app-my-loyality-points"]], decls: 2, vars: 2, consts: [["class", "parentLoader", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "parentLoader"], [1, "container"], [1, "loyalityMain-page"], [1, "container", "mt-5"], [1, "row"], ["class", "col-md-6 col-sm-6 col-xs-12 carddetailposition", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-sm-6", "col-xs-12", "carddetailposition"], [1, "card", "therapist-card"], [1, "card-body", "shadow", 3, "click"], [1, "therapist-details"], [1, "therapist-img"], ["alt", "rere", 3, "src"], [1, "therapist-text"], [1, "star-wrapper"], [1, "point"]], template: function MyLoyalityPointsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyLoyalityPointsComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyLoyalityPointsComponent_div_1_Template, 5, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _design_component_custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_5__["CustomSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".therapist-card[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n\n.therapist-details[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n}\n\n@media all and (max-width: 1024px) {\n  .therapist-details[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n}\n\n.therapist-img[_ngcontent-%COMP%] {\n  width: 70px;\n}\n\n.therapist-text[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.therapist-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50%;\n}\n\n.star-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 2px;\n  width: 15px;\n}\n\n.carddetailposition[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  padding-left: 0px;\n  margin-top: 12px !important;\n}\n\n.point[_ngcontent-%COMP%] {\n  width: 70px;\n  background: #000;\n  height: 66px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n}\n\n.star-wrapper[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 135px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUtY29tcG9uZW50cy9teS1sb3lhbGl0eS1wb2ludHMvbXktbG95YWxpdHktcG9pbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFESTtFQUpGO0lBS00sOEJBQUE7RUFJTjtBQUNGOztBQUZFO0VBQ0UsV0FBQTtBQUtKOztBQUhFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQVFKOztBQU5FO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBU0o7O0FBUEE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFVSjs7QUFQQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFVRiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51LWNvbXBvbmVudHMvbXktbG95YWxpdHktcG9pbnRzL215LWxveWFsaXR5LXBvaW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGVyYXBpc3QtY2FyZHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICB9XG4gIC50aGVyYXBpc3QtZGV0YWlsc3tcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgfVxuICAudGhlcmFwaXN0LWltZyB7XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cbiAgLnRoZXJhcGlzdC10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLnRoZXJhcGlzdC1pbWcgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLnN0YXItd3JhcHBlciBpbWd7XG4gICAgbWFyZ2luOiAwIDJweDtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxuICAuY2FyZGRldGFpbHBvc2l0aW9ue1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDsgXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7IFxuICAgIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcbn1cbi5wb2ludHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIGhlaWdodDogNjZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc3Rhci13cmFwcGVyIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMzVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyLoyalityPointsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-loyality-points',
                templateUrl: './my-loyality-points.component.html',
                styleUrls: ['./my-loyality-points.component.scss']
            }]
    }], function () { return [{ type: _myloyalitypoint_service__WEBPACK_IMPORTED_MODULE_2__["MyloyalitypointService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/my-loyality-points/myloyalitypoint.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/sidemenu-components/my-loyality-points/myloyalitypoint.service.ts ***!
  \***********************************************************************************/
/*! exports provided: MyloyalitypointService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyloyalitypointService", function() { return MyloyalitypointService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");



class MyloyalitypointService {
    constructor(apiService) {
        this.apiService = apiService;
        this.clientId = JSON.parse(localStorage.getItem('customerLogin'));
        this.loyalityPoint = () => this.apiService.get(`customers/loyalty_points?id=${this.clientId.client}`);
    }
}
MyloyalitypointService.ɵfac = function MyloyalitypointService_Factory(t) { return new (t || MyloyalitypointService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__["ApiServicesService"])); };
MyloyalitypointService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MyloyalitypointService, factory: MyloyalitypointService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyloyalitypointService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__["ApiServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/my-profile/my-profile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/sidemenu-components/my-profile/my-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared-components/edit-profile/edit-profile.component */ "./src/app/shared-components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _design_component_custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../design-component/custom-spinner/custom-spinner.component */ "./src/app/design-component/custom-spinner/custom-spinner.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function MyProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-custom-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyProfileComponent_div_1_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.navigateBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyProfileComponent_div_1_Template_ng_container_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.navigateBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Date Of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyProfileComponent_div_1_Template_button_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.editProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyProfileComponent_div_1_Template_button_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.editProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (ctx_r1.myProfiledata == null ? null : ctx_r1.myProfiledata.image) || "../../../assets/images/default_circle.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.myProfiledata == null ? null : ctx_r1.myProfiledata.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (ctx_r1.myProfiledata == null ? null : ctx_r1.myProfiledata.image) || "../../../assets/images/default_circle.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r1.myProfiledata == null ? null : ctx_r1.myProfiledata.firstName) || "Demo Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](47, 14, ctx_r1.myProfiledata == null ? null : ctx_r1.myProfiledata.dob, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.myProfiledata == null ? null : ctx_r1.myProfiledata.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.myProfiledata == null ? null : ctx_r1.myProfiledata.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.myProfiledata == null ? null : ctx_r1.myProfiledata.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"]("", ctx_r1.myProfiledata == null ? null : ctx_r1.myProfiledata.address == null ? null : ctx_r1.myProfiledata.address.area, ", ", ctx_r1.myProfiledata == null ? null : ctx_r1.myProfiledata.address == null ? null : ctx_r1.myProfiledata.address.street, ", ", ctx_r1.myProfiledata == null ? null : ctx_r1.myProfiledata.address == null ? null : ctx_r1.myProfiledata.address.city, ", ", ctx_r1.myProfiledata == null ? null : ctx_r1.myProfiledata.address == null ? null : ctx_r1.myProfiledata.address.state, ", ", ctx_r1.myProfiledata == null ? null : ctx_r1.myProfiledata.address == null ? null : ctx_r1.myProfiledata.address.zip, ", ", ctx_r1.myProfiledata == null ? null : ctx_r1.myProfiledata.address == null ? null : ctx_r1.myProfiledata.address.country, "");
} }
class MyProfileComponent {
    // loginData: any;
    constructor(router, route, NgbDialogService, service) {
        this.router = router;
        this.route = route;
        this.NgbDialogService = NgbDialogService;
        this.service = service;
        this.isLoading = false;
        // this.service.getLoginDataa().subscribe((res:any)=>{
        //   console.log('here',res);
        //   this.id=res.result._id;
        //   this.myProfile();
        // })
        this.loginData = JSON.parse(localStorage.getItem('customerLogin'));
        console.log(this.loginData);
        this.clientId = this.loginData.client;
        this.id = this.loginData.result._id;
        console.log(this.clientId, this.id);
        this.myProfile();
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
    }
    navigateBack() {
        this.router.navigate(['main/home'], { queryParams: { title: 'profile' } });
    }
    // dialogue route
    editProfile() {
        const editProfileref = this.NgbDialogService.open(src_app_shared_components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_1__["EditProfileComponent"], {});
    }
    // to get api for my profile
    myProfile() {
        this.isLoading = true;
        this.service.get(`customers/${this.id}`).subscribe((res) => {
            if (res.status == 200) {
                this.myProfiledata = res.result;
                this.isLoading = false;
            }
        });
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"])); };
MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 2, vars: 2, consts: [["class", "parentLoader", 4, "ngIf"], ["class", "myProfile", 4, "ngIf"], [1, "parentLoader"], [1, "myProfile"], [1, "container"], [1, "row"], [1, "col-md-6", "col-sm-12", "col-xs-12"], [1, "profile-Img", 3, "click"], [3, "click"], [1, "bi", "bi-arrow-left-short", "bi-icon-class", "mobileView"], ["src", "../../../assets/images/national-cancer-institute-Ccf83bIVY3Q-unsplash.jpg", 1, "w-100", "mobileView"], [1, "w-100", "desktopView", 2, "max-height", "360px", 3, "src"], [1, "greenIcon"], ["src", "../../../assets/images/verified.svg", "alt", "verified"], [1, "profileName", "d-flex", "align-items-ceter"], [1, "mb-0"], ["src", "../../../assets/images/bronze_badge.svg", "alt", "badge", 1, "ml-3"], [1, "col-md-6", "col-sm-12", "col-xs-12", "padd-0"], [1, "profileForm"], [1, "mobileView"], [1, "userImg"], [3, "src"], [1, "userMobileName", "d-flex", "justify-content-center", "mb-2"], [1, "form-group"], [1, "form-Inner", "d-flex", "align-items-center"], [1, "formIcon"], [1, "fa", "fa-key"], [1, "passwordEdit"], [1, "form-field"], ["for", "exampleInputPassword1"], ["type", "password", "id", "password", "value", "fdhjasifdja", "placeholder", "Password", 1, "form-control"], [1, "passwordPencil"], ["src", "../../../assets/images/edit_schedule.svg", "alt", ""], [1, "fa", "fa-calendar"], [1, "fa", "fa-user"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope"], [1, "fa", "fa-map-marker"], [1, "editProfileForm"], [1, "btn", "btn-primary", 3, "click"], [1, "mobileEditbtn"]], template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyProfileComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyProfileComponent_div_1_Template, 91, 17, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myProfiledata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _design_component_custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_6__["CustomSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".myProfile[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  position: relative;\n}\n@media all and (max-width: 767px) {\n  .myProfile[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n}\n.myProfile[_ngcontent-%COMP%]   .profile-Img[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media all and (max-width: 767px) {\n  .myProfile[_ngcontent-%COMP%]   .profile-Img[_ngcontent-%COMP%] {\n    margin: 0 -15px;\n  }\n}\n.myProfile[_ngcontent-%COMP%]   .profile-Img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: solid 2px #000;\n}\n@media all and (max-width: 767px) {\n  .myProfile[_ngcontent-%COMP%]   .profile-Img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 0;\n    border: none;\n    opacity: 0.5;\n  }\n}\n.myProfile[_ngcontent-%COMP%]   .profile-Img[_ngcontent-%COMP%]   .greenIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n}\n.myProfile[_ngcontent-%COMP%]   .profile-Img[_ngcontent-%COMP%]   .bi-icon-class[_ngcontent-%COMP%] {\n  position: absolute !important;\n  font-size: 30px !important;\n  font-weight: 600 !important;\n  margin-left: 9px !important;\n}\n.myProfile[_ngcontent-%COMP%]   .profileName[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n@media all and (max-width: 767px) {\n  .myProfile[_ngcontent-%COMP%]   .profileName[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.myProfile[_ngcontent-%COMP%]   .profileForm[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px;\n  border-radius: 20px;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\n}\n@media all and (max-width: 767px) {\n  .myProfile[_ngcontent-%COMP%]   .profileForm[_ngcontent-%COMP%] {\n    margin-top: -85px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n}\n@media all and (max-width: 767px) {\n  .myProfile[_ngcontent-%COMP%]   .profileForm[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    margin-bottom: 85px;\n  }\n}\n.myProfile[_ngcontent-%COMP%]   .profileForm[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.myProfile[_ngcontent-%COMP%]   .profileForm[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none !important;\n  border-radius: 0;\n  border-bottom: 1px solid #ced4da !important;\n  padding-left: 0;\n  padding-top: 0;\n}\n.myProfile[_ngcontent-%COMP%]   .profileForm[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.myProfile[_ngcontent-%COMP%]   .profileForm[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formIcon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.myProfile[_ngcontent-%COMP%]   .profileForm[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.myProfile[_ngcontent-%COMP%]   .profileForm[_ngcontent-%COMP%]   .editProfileForm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #000;\n  border-color: #000;\n  border-radius: 0;\n}\n@media all and (max-width: 767px) {\n  .myProfile[_ngcontent-%COMP%]   .profileForm[_ngcontent-%COMP%]   .editProfileForm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.passwordEdit[_ngcontent-%COMP%] {\n  position: relative;\n}\n.passwordEdit[_ngcontent-%COMP%]   .passwordPencil[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 0;\n}\n@media all and (max-width: 767px) {\n  .padd-0[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.mobileView[_ngcontent-%COMP%] {\n  display: none;\n}\n@media all and (max-width: 767px) {\n  .mobileView[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media all and (max-width: 767px) {\n  .mobileView[_ngcontent-%COMP%]   .userImg[_ngcontent-%COMP%] {\n    width: 85px;\n    margin: -45px auto 20px;\n    height: 85px;\n    position: relative;\n  }\n}\n@media all and (max-width: 767px) {\n  .mobileView[_ngcontent-%COMP%]   .userImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    border-radius: 50%;\n    object-fit: cover;\n  }\n}\n.mobileView[_ngcontent-%COMP%]   .greenIcon[_ngcontent-%COMP%] {\n  width: 20px;\n  position: absolute;\n  right: 5px;\n  bottom: 0;\n}\n.mobileEditbtn[_ngcontent-%COMP%] {\n  display: none;\n}\n@media all and (max-width: 767px) {\n  .mobileEditbtn[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    bottom: 46px;\n    width: 100%;\n  }\n}\n.mobileEditbtn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #000;\n  border-color: #000;\n  border-radius: 0;\n}\nform[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\nform[_ngcontent-%COMP%]   .form-Inner[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: baseline !important;\n}\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n@media all and (max-width: 767px) {\n  .desktopView[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media all and (min-width: 767px) {\n  .myProfile[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n  .myProfile[_ngcontent-%COMP%]   .profileForm[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUtY29tcG9uZW50cy9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUhKO0lBSVEsZUFBQTtFQUdOO0FBQ0Y7QUFGSTtFQUNJLGtCQUFBO0FBSVI7QUFIUTtFQUZKO0lBR1EsZUFBQTtFQU1WO0FBQ0Y7QUFMUTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUFPWjtBQU5ZO0VBSEo7SUFJUSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBU2Q7QUFDRjtBQVBRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQVNaO0FBUFE7RUFDSSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQVNaO0FBTkk7RUFDSSxnQkFBQTtBQVFSO0FBUFE7RUFGSjtJQUdRLHdCQUFBO0VBVVY7QUFDRjtBQVJJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFHQSwrQ0FBQTtBQVVSO0FBVFE7RUFQSjtJQVFRLGlCQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtFQVlWO0FBQ0Y7QUFWWTtFQURKO0lBRVEsbUJBQUE7RUFhZDtBQUNGO0FBWlk7RUFDSSxXQUFBO0FBY2hCO0FBWlk7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWNoQjtBQWJnQjtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQWVwQjtBQVpZO0VBQ0ksa0JBQUE7QUFjaEI7QUFaWTtFQUNJLGdCQUFBO0FBY2hCO0FBVlk7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWWhCO0FBWGdCO0VBTEo7SUFNUSxhQUFBO0VBY2xCO0FBQ0Y7QUFUQTtFQUNJLGtCQUFBO0FBWUo7QUFYSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFhUjtBQVRJO0VBREo7SUFFUSxVQUFBO0VBYU47QUFDRjtBQVhBO0VBQ0ksYUFBQTtBQWNKO0FBYkk7RUFGSjtJQUdRLGNBQUE7RUFnQk47QUFDRjtBQWRRO0VBREo7SUFFUSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFpQlY7QUFDRjtBQWZZO0VBREo7SUFFUSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUFrQmQ7QUFDRjtBQWZJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFpQlI7QUFkQTtFQUNJLGFBQUE7QUFpQko7QUFoQkk7RUFGSjtJQUdRLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBbUJOO0FBQ0Y7QUFsQkk7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBb0JSO0FBaEJBO0VBQ0UsZUFBQTtBQW1CRjtBQWxCRTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7QUFvQko7QUFsQkU7RUFDRSxrQkFBQTtBQW9CSjtBQWxCRTtFQUNFLGdCQUFBO0FBb0JKO0FBakJBO0VBQ0E7SUFDUSxhQUFBO0VBb0JOO0FBQ0Y7QUFsQkE7RUFDSTtJQUNJLGlCQUFBO0VBb0JOO0VBbEJNO0lBQ0ksZ0JBQUE7RUFvQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51LWNvbXBvbmVudHMvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15UHJvZmlsZSB7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbiAgICAucHJvZmlsZS1JbWcge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgLTE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjMDAwO1xuICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmdyZWVuSWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJpLWljb24tY2xhc3Mge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJvZmlsZU5hbWUge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wcm9maWxlRm9ybSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTg1cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDg1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VkNGRhICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtSWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmVkaXRQcm9maWxlRm9ybSB7XG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLnBhc3N3b3JkRWRpdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5wYXNzd29yZFBlbmNpbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG4ucGFkZC0wIHtcbiAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cbi5tb2JpbGVWaWV3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAudXNlckltZyB7XG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICB3aWR0aDogODVweDtcbiAgICAgICAgICAgIG1hcmdpbjogLTQ1cHggYXV0byAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4NXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmdyZWVuSWNvbiB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICB9XG59XG4ubW9iaWxlRWRpdGJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDQ2cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG59XG5cbmZvcm17XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLmZvcm0tSW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICBwe1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbi5kZXNrdG9wVmlldyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgICAubXlQcm9maWxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG5cbiAgICAgICAgLnByb2ZpbGVGb3JtIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICBcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-profile',
                templateUrl: './my-profile.component.html',
                styleUrls: ['./my-profile.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/my-relationships/my-relationships.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/sidemenu-components/my-relationships/my-relationships.component.ts ***!
  \************************************************************************************/
/*! exports provided: MyRelationshipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRelationshipsComponent", function() { return MyRelationshipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _myrelationships_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myrelationships.service */ "./src/app/sidemenu-components/my-relationships/myrelationships.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _design_component_custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../design-component/custom-spinner/custom-spinner.component */ "./src/app/design-component/custom-spinner/custom-spinner.component.ts");





function MyRelationshipsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-custom-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyRelationshipsComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Send Gift Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const relationshipitem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", relationshipitem_r3 == null ? null : relationshipitem_r3.firstName, " ", relationshipitem_r3 == null ? null : relationshipitem_r3.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](relationshipitem_r3 == null ? null : relationshipitem_r3.relationship);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](relationshipitem_r3 == null ? null : relationshipitem_r3.phone1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](relationshipitem_r3 == null ? null : relationshipitem_r3.email);
} }
function MyRelationshipsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyRelationshipsComponent_div_1_div_5_Template, 22, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.myRelationShipList);
} }
class MyRelationshipsComponent {
    constructor(myrelationshipsservice) {
        this.myrelationshipsservice = myrelationshipsservice;
        this.myRelationShipList = [];
    }
    ngOnInit() {
        this.myRelationship();
    }
    myRelationship() {
        this.isLoading = true;
        this.myrelationshipsservice.getMyRelationships().subscribe((response) => {
            this.myRelationShipList = response.ClientRelations;
            this.isLoading = false;
        }, err => { console.log(err); });
    }
}
MyRelationshipsComponent.ɵfac = function MyRelationshipsComponent_Factory(t) { return new (t || MyRelationshipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_myrelationships_service__WEBPACK_IMPORTED_MODULE_1__["MyrelationshipsService"])); };
MyRelationshipsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyRelationshipsComponent, selectors: [["app-my-relationships"]], decls: 2, vars: 2, consts: [["class", "parentLoader", 4, "ngIf"], ["class", "relationpage-outerWrapper", 4, "ngIf"], [1, "parentLoader"], [1, "relationpage-outerWrapper"], [1, "container"], [1, "relationshipMain-page"], [1, "row"], ["class", "col-md-6 col-sm-6 col-xs-12 carddetailposition", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-sm-6", "col-xs-12", "carddetailposition"], [1, "card", "upcoming-card"], [1, "card-body", "shadow"], [1, "therapist-details"], [1, "therapist-img"], ["src", "../../../assets/images/default_circle.svg"], [1, "upcoming-right-block"], [1, "upcoming-text", "p-1", "font-20"], [1, "upcoming-text", "p-1"], [1, "textposition"], [1, "buttons-area"], ["type", "button", 1, "btn", "delete-right"], ["type", "button", 1, "btn"]], template: function MyRelationshipsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyRelationshipsComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyRelationshipsComponent_div_1_Template, 6, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _design_component_custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_3__["CustomSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".font-20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.upcoming-card[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n\n.therapist-details[_ngcontent-%COMP%] {\n  padding: 10px 0 0;\n  display: flex;\n}\n\n.therapist-img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.upcoming-right-block[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n}\n\n.upcoming-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  display: flex;\n  justify-content: space-between;\n}\n\n.upcoming-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  margin: 0 5px;\n}\n\n.therapist-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50%;\n}\n\n.buttons-area[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.buttons-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0;\n  color: #fff;\n  background-color: #000000;\n  padding: 12px;\n}\n\n.buttons-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  outline: none;\n  box-shadow: none;\n}\n\n.cardposition[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.carddetailposition[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  padding-left: 0px;\n  margin-top: 12px !important;\n}\n\n.relationshipMain-page[_ngcontent-%COMP%] {\n  margin-bottom: 70px;\n}\n\n.upcoming-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n\n.upcoming-card[_ngcontent-%COMP%]   .buttons-area[_ngcontent-%COMP%] {\n  margin: 0 -20px;\n}\n\n.delete-right[_ngcontent-%COMP%] {\n  border-right: 1px solid #fff;\n}\n\n.relationpage-outerWrapper[_ngcontent-%COMP%] {\n  margin-top: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUtY29tcG9uZW50cy9teS1yZWxhdGlvbnNoaXBzL215LXJlbGF0aW9uc2hpcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0U7RUFDRSxnQkFBQTtBQUVKOztBQUFFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FBR0o7O0FBREU7RUFDRSxZQUFBO0FBSUo7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUtKOztBQUhFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFNSjs7QUFKRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBT0o7O0FBTEU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFRSjs7QUFORTtFQUNFLGFBQUE7QUFTSjs7QUFQRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFVSjs7QUFSRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFXSjs7QUFURTtFQUNJLG1CQUFBO0FBWU47O0FBVkU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFhSjs7QUFWQTtFQUNJLG1CQUFBO0FBYUo7O0FBVkU7RUFDRSxpQkFBQTtBQWFKOztBQVhFO0VBQ0UsZUFBQTtBQWFKOztBQVZBO0VBQ0UsNEJBQUE7QUFhRjs7QUFYQTtFQUNFLGdCQUFBO0FBY0YiLCJmaWxlIjoic3JjL2FwcC9zaWRlbWVudS1jb21wb25lbnRzL215LXJlbGF0aW9uc2hpcHMvbXktcmVsYXRpb25zaGlwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LTIwe1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAudXBjb21pbmctY2FyZHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICB9XG4gIC50aGVyYXBpc3QtZGV0YWlsc3tcbiAgICBwYWRkaW5nOiAxMHB4IDAgMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC50aGVyYXBpc3QtaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLnVwY29taW5nLXJpZ2h0LWJsb2NrIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLnVwY29taW5nLXRleHR7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAudXBjb21pbmctdGV4dCBpbWcge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG4gIH1cbiAgLnRoZXJhcGlzdC1pbWcgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLmJ1dHRvbnMtYXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuYnV0dG9ucy1hcmVhIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cbiAgLmJ1dHRvbnMtYXJlYSBidXR0b246Zm9jdXN7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3V0bGluZTpub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgLmNhcmRwb3NpdGlvbntcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbiAgLmNhcmRkZXRhaWxwb3NpdGlvbntcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7IFxuICAgIHBhZGRpbmctbGVmdDogMHB4OyBcbiAgICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWxhdGlvbnNoaXBNYWluLXBhZ2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG4udXBjb21pbmctY2FyZCB7XG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG4gIC5idXR0b25zLWFyZWEge1xuICAgIG1hcmdpbjogMCAtMjBweDtcbiAgfVxufVxuLmRlbGV0ZS1yaWdodCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG59XG4ucmVsYXRpb25wYWdlLW91dGVyV3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyRelationshipsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-relationships',
                templateUrl: './my-relationships.component.html',
                styleUrls: ['./my-relationships.component.scss']
            }]
    }], function () { return [{ type: _myrelationships_service__WEBPACK_IMPORTED_MODULE_1__["MyrelationshipsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/my-relationships/myrelationships.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/sidemenu-components/my-relationships/myrelationships.service.ts ***!
  \*********************************************************************************/
/*! exports provided: MyrelationshipsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyrelationshipsService", function() { return MyrelationshipsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");



class MyrelationshipsService {
    constructor(apiService) {
        this.apiService = apiService;
        this.clientId = JSON.parse(localStorage.getItem('customerLogin'));
        this.getMyRelationships = () => this.apiService.get(`customers/findrelations/${this.clientId.client}`);
    }
}
MyrelationshipsService.ɵfac = function MyrelationshipsService_Factory(t) { return new (t || MyrelationshipsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__["ApiServicesService"])); };
MyrelationshipsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MyrelationshipsService, factory: MyrelationshipsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyrelationshipsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__["ApiServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/my-score/my-score.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/sidemenu-components/my-score/my-score.component.ts ***!
  \********************************************************************/
/*! exports provided: MyScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyScoreComponent", function() { return MyScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/design-component/custom-toaster/toaster.service */ "./src/app/design-component/custom-toaster/toaster.service.ts");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






function MyScoreComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngb-progressbar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r2 == null ? null : badge_r2.badgeScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Current Score:", badge_r2 == null ? null : badge_r2.badgeScore, "/", ctx_r0.maxBadgeScore, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", badge_r2 == null ? null : badge_r2.badgeScore);
} }
function MyScoreComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", score_r3 == null ? null : score_r3.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](score_r3 == null ? null : score_r3.points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 3, score_r3 == null ? null : score_r3.createdAt, "dd/MM/yyyy"));
} }
class MyScoreComponent {
    constructor(newToast, service) {
        this.newToast = newToast;
        this.service = service;
    }
    ngOnInit() {
        let result = JSON.parse(localStorage.getItem('customerLogin'));
        this.customerId = result.result._id;
        console.log(this.customerId);
        this.sheildData = result.result.shield;
        this.getMyScore();
    }
    // api for my score
    getMyScore() {
        this.service.get(`badgeScore?customerId=${this.customerId}`).subscribe((res) => {
            console.log(res);
            if (res.status == 200) {
                this.maxBadgeScore = res.maxBadgeScore;
                this.scoreData = res.result;
                this.scoreBadge = res.score;
            }
        }, (err) => {
            this.newToast.error("something went wrong");
        });
    }
}
MyScoreComponent.ɵfac = function MyScoreComponent_Factory(t) { return new (t || MyScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_2__["ApiServicesService"])); };
MyScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyScoreComponent, selectors: [["app-my-score"]], decls: 7, vars: 2, consts: [[1, "container", "card-slot"], [1, "row"], [1, "col-md-6", "col-sm-6", "col-xs-12"], [1, "card"], [1, "card-body"], ["class", "row", 4, "ngFor", "ngForOf"], ["class", "myScore", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "imageIcon"], ["src", "../../../assets/images/bronze_badge.svg", 1, "shield"], [1, "centered"], [1, "col-8"], [1, "current-score"], ["type", "success", 3, "value"], [1, "myScore"], [1, "scoreBlock"], [1, "border_type", "scoreList"], [1, "line-text"], [1, "scoreDetaiil"], [1, "score"], [1, "date"]], template: function MyScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyScoreComponent_div_5_Template, 11, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyScoreComponent_div_6_Template, 11, 6, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scoreBadge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scoreData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbProgressbar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  margin-top: 65px;\n}\n\n.card-slot[_ngcontent-%COMP%] {\n  margin-top: 71px;\n}\n\n.shield[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.imageIcon[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.centered[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 36px;\n  font-size: 22px;\n  transform: translate(-50%, -50%);\n  top: 25px;\n}\n\n.myScore[_ngcontent-%COMP%] {\n  margin-bottom: 19px;\n}\n\n.scoreBlock[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\n.border_type[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;\n}\n\n.line-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\ndiv.scoreDetaiil[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  width: 82%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.score[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 88%;\n}\n\n.date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: serif;\n  margin-top: 15px;\n}\n\n.scoreList[_ngcontent-%COMP%] {\n  height: 70px;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transition: 0.3s;\n  margin-bottom: 20px;\n}\n\n.current-score[_ngcontent-%COMP%] {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUtY29tcG9uZW50cy9teS1zY29yZS9teS1zY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLGdCQUFBO0FBRUo7O0FBQUU7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7QUFFSjs7QUFBRTtFQUVFLG1CQUFBO0FBRUo7O0FBQUU7RUFDRSxnQkFBQTtBQUdKOztBQURFO0VBQ0Usc0RBQUE7QUFJSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUdKOztBQUFBO0VBRUksa0JBQUE7RUFDQSxTQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFFO0VBQ0UsWUFBQTtBQUdKOztBQUFFO0VBQ0UsNEVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQUU7RUFDRSxZQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9zaWRlbWVudS1jb21wb25lbnRzL215LXNjb3JlL215LXNjb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogNjVweDtcbiAgfVxuICAuY2FyZC1zbG90e1xuICAgIG1hcmdpbi10b3A6IDcxcHg7XG4gIH1cbiAgLnNoaWVsZHtcbiAgICAvLyB3aWR0aDogMzglO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICAvLyBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIFxuICB9XG4gIC5pbWFnZUljb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5jZW50ZXJlZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzZweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdG9wOiAyNXB4O1xuICB9XG4gIC5teVNjb3Jle1xuICAgIC8vIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTlweDtcbiAgfVxuICAuc2NvcmVCbG9ja3tcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xuICB9XG4gIC5ib3JkZXJfdHlwZSB7XG4gICAgYm9yZGVyLWJvdHRvbSA6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKSAhaW1wb3J0YW50O1xuICAgIFxuICBcbiAgfVxuICBcbiAgLmxpbmUtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuICBkaXYuc2NvcmVEZXRhaWlse1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICAgIHdpZHRoOiA4MiU7IFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IFxuICAgXG4gIH1cbi5zY29yZVxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA4OCU7XG59XG4uZGF0ZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cblxuICAuc2NvcmVMaXN0e1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5jdXJyZW50LXNjb3Jle1xuICAgIGNvbG9yOiBncmVlbjtcbiAgfVxuXG4gIFxuXG4gIFxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyScoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-score',
                templateUrl: './my-score.component.html',
                styleUrls: ['./my-score.component.scss']
            }]
    }], function () { return [{ type: src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"] }, { type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_2__["ApiServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/my-wallet/my-wallet.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sidemenu-components/my-wallet/my-wallet.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWalletComponent", function() { return MyWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mywallet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mywallet.service */ "./src/app/sidemenu-components/my-wallet/mywallet.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _design_component_custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../design-component/custom-spinner/custom-spinner.component */ "./src/app/design-component/custom-spinner/custom-spinner.component.ts");





function MyWalletComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-custom-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyWalletComponent_div_1_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const walletItem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](walletItem_r3 == null ? null : walletItem_r3.wallet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, walletItem_r3 == null ? null : walletItem_r3.createdAt, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + $", walletItem_r3 == null ? null : walletItem_r3.amount, "");
} }
function MyWalletComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "$ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MyWalletComponent_div_1_tr_25_Template, 12, 6, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.walletList.walletBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.walletList.result);
} }
class MyWalletComponent {
    constructor(walletservice) {
        this.walletservice = walletservice;
        this.walletList = {};
    }
    ngOnInit() {
        this.getWalletData();
    }
    getWalletData() {
        this.isLoading = true;
        this.walletservice.getWallet().subscribe((response) => {
            this.walletList = response;
            this.isLoading = false;
        }, err => { console.log(err); });
    }
}
MyWalletComponent.ɵfac = function MyWalletComponent_Factory(t) { return new (t || MyWalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mywallet_service__WEBPACK_IMPORTED_MODULE_1__["MywalletService"])); };
MyWalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyWalletComponent, selectors: [["app-my-wallet"]], decls: 2, vars: 2, consts: [["class", "parentLoader", 4, "ngIf"], ["class", "walletMainpage", 4, "ngIf"], [1, "parentLoader"], [1, "walletMainpage"], [1, "container"], [1, "wallet"], [1, "row"], [1, "ballanceinnerwrapper"], [1, "walletballance", "text-center"], ["src", "../../../assets/images/credit_card.svg"], [1, "wallet-heading"], [1, "balance-amt"], [1, "mb-0"], [1, "bottomLine"], [1, "walletMoney"], [1, "transactionsheader"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "tableLeft"], [1, "transactions"], [1, "text-right"], [1, "transactionsmoney"]], template: function MyWalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyWalletComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyWalletComponent_div_1_Template, 26, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _design_component_custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_3__["CustomSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".wallet[_ngcontent-%COMP%] {\n  margin: 60px 0 30px;\n  background-color: #000;\n  border-radius: 10px;\n  padding: 50px 10px 20px;\n}\n.wallet[_ngcontent-%COMP%]   .ballanceinnerwrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n}\n@media all and (min-width: 1024px) {\n  .wallet[_ngcontent-%COMP%]   .ballanceinnerwrapper[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    padding: 0 26px;\n  }\n}\n@media all and (min-width: 768px) {\n  .wallet[_ngcontent-%COMP%]   .ballanceinnerwrapper[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    padding: 0 26px;\n  }\n}\n.wallet[_ngcontent-%COMP%]   .wallet-heading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: 10px;\n}\n.wallet[_ngcontent-%COMP%]   .balance-amt[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #fff;\n}\n.wallet[_ngcontent-%COMP%]   .bottomLine[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  height: 2px;\n  margin: 20px 20px 10px;\n}\n.wallet[_ngcontent-%COMP%]   .walletMoney[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n.wallet[_ngcontent-%COMP%]   .walletMoney[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n}\n.transactions[_ngcontent-%COMP%] {\n  display: block;\n}\n.transactionsmoney[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.tableLeft[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1) {\n  margin-bottom: 10px;\n  font-weight: 500;\n  font-size: 20px;\n}\n.transactionsheader[_ngcontent-%COMP%] {\n  background-color: #d0cdcd;\n  margin: 0 -14px;\n  padding: 10px;\n}\n.transactionsheader[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #000;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 6rem;\n  color: #212529;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUtY29tcG9uZW50cy9teS13YWxsZXQvbXktd2FsbGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBRVI7QUFEUTtFQUxKO0lBTVEsOEJBQUE7SUFDQSxlQUFBO0VBSVY7QUFDRjtBQUhRO0VBVEo7SUFVUSw4QkFBQTtJQUNBLGVBQUE7RUFNVjtBQUNGO0FBSFE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFLWjtBQURRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFHWjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUVSO0FBRFE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUdaO0FBQ0E7RUFDSSxjQUFBO0FBRUo7QUFBQTtFQUNJLGVBQUE7QUFHSjtBQUNRO0VBQ0ksbUJBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7QUFDWjtBQUdBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ1I7QUFFQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51LWNvbXBvbmVudHMvbXktd2FsbGV0L215LXdhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YWxsZXQge1xuICAgIG1hcmdpbjogNjBweCAwIDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDUwcHggMTBweCAyMHB4O1xuICAgIC5iYWxsYW5jZWlubmVyd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDI2cHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjZweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAud2FsbGV0LWhlYWRpbmcge1xuICAgICAgICBoNiB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJhbGFuY2UtYW10IHtcbiAgICAgICAgaDUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJvdHRvbUxpbmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIG1hcmdpbjogMjBweCAyMHB4IDEwcHg7XG4gICAgfVxuICAgIC53YWxsZXRNb25leSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4udHJhbnNhY3Rpb25ze1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRyYW5zYWN0aW9uc21vbmV5e1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbi50YWJsZUxlZnQge1xuICAgIHNwYW4ge1xuICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAvLyBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4udHJhbnNhY3Rpb25zaGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGNkY2Q7XG4gICAgbWFyZ2luOiAwIC0xNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaDUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbn1cbi50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgICBjb2xvcjogIzIxMjUyOTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyWalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-wallet',
                templateUrl: './my-wallet.component.html',
                styleUrls: ['./my-wallet.component.scss']
            }]
    }], function () { return [{ type: _mywallet_service__WEBPACK_IMPORTED_MODULE_1__["MywalletService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/my-wallet/mywallet.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sidemenu-components/my-wallet/mywallet.service.ts ***!
  \*******************************************************************/
/*! exports provided: MywalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MywalletService", function() { return MywalletService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");



class MywalletService {
    constructor(apiService) {
        this.apiService = apiService;
        this.clientId = JSON.parse(localStorage.getItem('customerLogin'));
        this.getWallet = () => this.apiService.get(`transaction/findtransactions?customerId=${this.clientId.result._id}`);
    }
}
MywalletService.ɵfac = function MywalletService_Factory(t) { return new (t || MywalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__["ApiServicesService"])); };
MywalletService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MywalletService, factory: MywalletService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MywalletService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__["ApiServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/online-support/online-support.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/sidemenu-components/online-support/online-support.component.ts ***!
  \********************************************************************************/
/*! exports provided: OnlineSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineSupportComponent", function() { return OnlineSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class OnlineSupportComponent {
    constructor(formBuilder, route) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.submitted = false;
        this.onlineSupportForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            query: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    ngOnInit() {
    }
    // convenience getter for easy access to form fields
    get f() { return this.onlineSupportForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.onlineSupportForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.onlineSupportForm.value));
    }
}
OnlineSupportComponent.ɵfac = function OnlineSupportComponent_Factory(t) { return new (t || OnlineSupportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
OnlineSupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnlineSupportComponent, selectors: [["app-online-support"]], decls: 16, vars: 1, consts: [[1, "online_support"], [1, "container", "auto-h"], [1, "row"], [1, "col-md-12"], [1, "onlinesupportform"], [3, "formGroup", "ngSubmit"], [1, "row", "mt-4"], [1, "col-md-12", "pb-3"], ["for", "uname1"], ["formControlName", "title", "placeholder", "Enter Title", "type", "text", 1, "form-control"], ["formControlName", "query", "placeholder", "Enter Your query here", "id", "complexExampleMessage", "cols", "10", "rows", "10", 1, "form-control"], ["type", "button", 1, "btn", "btn-dark", "supportbtn"]], template: function OnlineSupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OnlineSupportComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Send");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.onlineSupportForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".pt-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-top: 2rem !important;\n}\n\n.auto-h[_ngcontent-%COMP%] {\n  margin-top: 46px;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0px;\n}\n\n.supportbtn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  right: 0;\n  clear: both;\n  border-radius: 0px;\n  background-color: black;\n}\n\n.onlinesupportform[_ngcontent-%COMP%] {\n  height: calc(100vh - 70px);\n  clear: both;\n}\n\n@media all and (min-width: 1024px) {\n  .auto-h[_ngcontent-%COMP%] {\n    margin-top: 70px;\n  }\n\n  .onlinesupportform[_ngcontent-%COMP%] {\n    height: unset;\n    clear: both;\n  }\n\n  .supportbtn[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: -40px;\n    width: 33%;\n    left: 33%;\n    right: 0;\n    clear: both;\n    border-radius: 0px;\n    background-color: black;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUtY29tcG9uZW50cy9vbmxpbmUtc3VwcG9ydC9vbmxpbmUtc3VwcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFHQTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBO0VBQ0k7SUFDSSxnQkFBQTtFQUFOOztFQUVFO0lBQ0ksYUFBQTtJQUNBLFdBQUE7RUFDTjs7RUFDRTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLHVCQUFBO0VBRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51LWNvbXBvbmVudHMvb25saW5lLXN1cHBvcnQvb25saW5lLXN1cHBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHQtMywgLnB5LTMge1xuICAgIHBhZGRpbmctdG9wOiAycmVtIWltcG9ydGFudDtcbn1cblxuLmF1dG8taCB7XG4gICAgbWFyZ2luLXRvcDogNDZweDtcbn1cblxuLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIG1hcmdpbi1ib3R0b206IDBweDsgXG59XG4uc3VwcG9ydGJ0bntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLm9ubGluZV9zdXBwb3J0e1xuICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDQ2cHgpO1xufVxuLm9ubGluZXN1cHBvcnRmb3Jte1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xuICAgIC5hdXRvLWgge1xuICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIH1cbiAgICAub25saW5lc3VwcG9ydGZvcm17XG4gICAgICAgIGhlaWdodDogdW5zZXQ7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbiAgICAuc3VwcG9ydGJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtNDBweDtcbiAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgbGVmdDogMzMlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlineSupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-online-support',
                templateUrl: './online-support.component.html',
                styleUrls: ['./online-support.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/report-bug/report-bug.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/sidemenu-components/report-bug/report-bug.component.ts ***!
  \************************************************************************/
/*! exports provided: ReportBugComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportBugComponent", function() { return ReportBugComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function ReportBugComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Book Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pick Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Camera");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ReportBugComponent {
    constructor(ngbModel) {
        this.ngbModel = ngbModel;
    }
    ngOnInit() {
    }
    // to open attach modal
    attchModal(content) {
        this.ngbModel.open(content, { size: 'sm', centered: true, });
    }
}
ReportBugComponent.ɵfac = function ReportBugComponent_Factory(t) { return new (t || ReportBugComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
ReportBugComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportBugComponent, selectors: [["app-report-bug"]], decls: 25, vars: 0, consts: [[1, "online_support"], [1, "container", "auto-h"], [1, "row"], [1, "col-md-12"], [1, "onlinesupportform"], [1, "row", "mt-4"], [1, "col-md-12", "pb-3"], ["for", "uname1"], ["placeholder", "Enter Title", "type", "text", 1, "form-control"], ["placeholder", "Enter Your query here", "id", "complexExampleMessage", "cols", "10", "rows", "10", 1, "form-control"], [1, "customAttach"], [1, "pb-3", 3, "click"], [1, "fileposition"], ["aria-hidden", "true", 1, "fa", "fa-paperclip"], [1, "attachImg"], ["src", "../../../assets/images/no_image.png"], ["type", "button", 1, "btn", "btn-dark", "supportbtn"], ["content", ""], [1, "text-center", "mt-3"], [1, "text-center"], [1, "modal-body"], [1, "camera"], [1, "cameraButton"]], template: function ReportBugComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportBugComponent_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.attchModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Attach File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReportBugComponent_ng_template_23_Template, 12, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".pt-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-top: 2rem !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0px;\n}\n\n.auto-h[_ngcontent-%COMP%] {\n  margin-top: 46px;\n}\n\n.supportbtn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  right: 0;\n  clear: both;\n  border-radius: 0px;\n  background-color: black;\n}\n\n.onlinesupportform[_ngcontent-%COMP%] {\n  height: calc(100vh - 70px);\n  clear: both;\n}\n\n.fa-paperclip[_ngcontent-%COMP%]:before {\n  margin-left: 10px;\n  margin-top: 55px;\n  font-size: 22px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 100%;\n}\n\n.attachImg[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n}\n\n.customAttach[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 20px;\n}\n\n.customAttach[_ngcontent-%COMP%]   .pb-3[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-bottom: 0 !important;\n}\n\n.cameraButton[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 52px;\n  color: white;\n  background-color: black;\n  border: 0;\n  border-radius: 0;\n  border-bottom: 1px solid #000 !important;\n}\n\n.camera[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 52px;\n  color: black;\n  background-color: white;\n  border-bottom: 1px solid #000 !important;\n}\n\n@media all and (min-width: 1024px) {\n  .auto-h[_ngcontent-%COMP%] {\n    margin-top: 70px;\n  }\n\n  .onlinesupportform[_ngcontent-%COMP%] {\n    height: unset;\n    clear: both;\n  }\n\n  .supportbtn[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: -40px;\n    width: 33%;\n    left: 33%;\n    right: 0;\n    clear: both;\n    border-radius: 0px;\n    background-color: black;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUtY29tcG9uZW50cy9yZXBvcnQtYnVnL3JlcG9ydC1idWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBR0E7RUFDSSwwQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUhJO0VBQ0ksaUJBQUE7RUFDQSw0QkFBQTtBQUtSOztBQURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFFQSx3Q0FBQTtBQUlKOztBQURBO0VBQ0k7SUFDSSxnQkFBQTtFQUlOOztFQUZFO0lBQ0ksYUFBQTtJQUNBLFdBQUE7RUFLTjs7RUFIRTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLHVCQUFBO0VBTU47O0VBSkU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQU9OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaWRlbWVudS1jb21wb25lbnRzL3JlcG9ydC1idWcvcmVwb3J0LWJ1Zy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdC0zLCAucHktMyB7XG4gICAgcGFkZGluZy10b3A6IDJyZW0haW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OyBcbn1cblxuLmF1dG8taCB7XG4gICAgbWFyZ2luLXRvcDogNDZweDtcbn1cbi5zdXBwb3J0YnRue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBjbGVhcjogYm90aDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4ub25saW5lX3N1cHBvcnR7XG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDZweCk7XG59XG4ub25saW5lc3VwcG9ydGZvcm17XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gICAgY2xlYXI6IGJvdGg7XG59XG4uZmEtcGFwZXJjbGlwOmJlZm9yZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNTVweDtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5pbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5hdHRhY2hJbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmN1c3RvbUF0dGFjaCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIC5wYi0zIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uY2FtZXJhQnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOjA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xufVxuLmNhbWVyYXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XG4gICAgLmF1dG8taCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgfVxuICAgIC5vbmxpbmVzdXBwb3J0Zm9ybXtcbiAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuICAgIC5zdXBwb3J0YnRuIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC00MHB4O1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICBsZWZ0OiAzMyU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportBugComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-bug',
                templateUrl: './report-bug.component.html',
                styleUrls: ['./report-bug.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/send-tip/send-tip.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/sidemenu-components/send-tip/send-tip.component.ts ***!
  \********************************************************************/
/*! exports provided: SendTipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendTipComponent", function() { return SendTipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/design-component/custom-toaster/toaster.service */ "./src/app/design-component/custom-toaster/toaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _design_component_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../design-component/skeleton/skeleton.component */ "./src/app/design-component/skeleton/skeleton.component.ts");







function SendTipComponent_div_1_i_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 18);
} }
function SendTipComponent_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendTipComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendTipComponent_div_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.select(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SendTipComponent_div_1_i_12_Template, 1, 0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SendTipComponent_div_1_div_22_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendTipComponent_div_1_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.sendTip(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r1 == null ? null : item_r1.staff == null ? null : item_r1.staff.firstName, " ", item_r1 == null ? null : item_r1.staff == null ? null : item_r1.staff.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selected === item_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.service == null ? null : item_r1.service.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 8, item_r1 == null ? null : item_r1.day, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 11, item_r1 == null ? null : item_r1.startTime, "hh:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.historyList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.isDisabled);
} }
class SendTipComponent {
    constructor(service, newToast, active, router) {
        this.service = service;
        this.newToast = newToast;
        this.active = active;
        this.router = router;
        this.clientId = JSON.parse(localStorage.getItem('customerLogin'));
        this.historyList = [];
        this.isDisabled = true;
        this.selected = '';
        this.active.queryParams.subscribe((params) => {
            this.tipCardId = params.tipCardId,
                this.tipImage = params.tipImage,
                this.amount = params.amount;
            this.day = params.day;
            this._id = params._id;
            console.log(this.tipCardId);
        });
    }
    ngOnInit() {
        this.getHistoryList();
    }
    // api for schedule history list
    getHistoryList() {
        this.service.get(`customers/appointments/group/${this.clientId.result._id}`).subscribe((res) => {
            console.log(res);
            if (res.status == 200) {
                this.historyList = res.result.past;
            }
            console.log(this.historyList);
        }, (err) => {
            this.newToast.error("something went wrong");
        });
    }
    select(item) {
        if (item._id) {
            this.isDisabled = false;
            this.selected = item._id;
            this.therapistId = item.staff.id;
            // this.amount=item.price,
            // this.day=item.day
        }
        // else if(this.selected=false){
        //   this.selected=true
        // }
        console.log("dfd", this.selected);
    }
    // api for send tip card
    sendTip() {
        // if(this.selected=''){
        //   return;
        //   this.newToast.warning("Select therapist to send")
        // }
        // let day = moment(this.day).format("YYYY-MM-DD ");
        let data = {
            "tipCard": this.tipCardId,
            "sent": true,
            "tipImage": this.tipImage,
            "therapistId": this.therapistId,
            "date": this.day,
            "amount": this.amount,
            "clientId": this.clientId.client,
            "_id": this._id
        };
        console.log(data);
        this.service.post(`customers/tipCard`, data).subscribe((res) => {
            if (res.status == 200) {
                this.router.navigate(['/nav/my-backpack']);
                this.newToast.success("Tip Sent");
            }
        }, (err) => {
            this.newToast.error("something went wrong");
        });
    }
}
SendTipComponent.ɵfac = function SendTipComponent_Factory(t) { return new (t || SendTipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__["ApiServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SendTipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendTipComponent, selectors: [["app-send-tip"]], decls: 2, vars: 1, consts: [[1, "main"], ["class", "container content", 4, "ngFor", "ngForOf"], [1, "container", "content"], [1, "row"], [1, "col-md-6", "col-sm-6", "col-xs-12"], [1, "card", 3, "click"], [1, "card-body"], [1, "col-4"], ["src", "../../../../assets/images/default_circle.svg", 1, "imgstyle"], [1, "col-8"], [1, "selectIcon"], [1, "card-title", "text", "name"], ["class", "fa fa-check-circle checkIcon", "aria-hidden", "true", 4, "ngIf"], [1, "card-text"], [1, "outerdiv-text"], ["class", "row", 4, "ngIf"], [1, "tipbtn-wrapper"], [1, "btn", "btn-primary", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "checkIcon"], [1, "col-12"], ["skeletonData", "Not Available"]], template: function SendTipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SendTipComponent_div_1_Template, 26, 14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historyList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _design_component_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_5__["SkeletonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transition: 0.3s;\n  margin-bottom: 20px;\n}\n\n.imgstyle[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.outerdiv-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.tipbtn-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 46px;\n  left: 0;\n  margin-top: 30px;\n  width: 100%;\n}\n\n.tipbtn-wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #000;\n  border-color: #000;\n  border-radius: 0;\n  color: #fff;\n}\n\n.selectIcon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.checkIcon[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUtY29tcG9uZW50cy9zZW5kLXRpcC9zZW5kLXRpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDQTtFQUNJLDRFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtBQUdKOztBQURFO0VBQ0UsYUFBQTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7QUFJTjs7QUFERTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUhJO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFLUjs7QUFEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtBQUtGOztBQUhBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvc2lkZW1lbnUtY29tcG9uZW50cy9zZW5kLXRpcC9zZW5kLXRpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmltZ3N0eWxle1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jYXJkLXRleHR7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5vdXRlcmRpdi10ZXh0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnRpcGJ0bi13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA0NnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxufVxuXG4uc2VsZWN0SWNvbntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNoZWNrSWNvbntcbiAgY29sb3I6IGdyZWVuO1xufVxuLm5hbWV7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendTipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-send-tip',
                templateUrl: './send-tip.component.html',
                styleUrls: ['./send-tip.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_1__["ApiServicesService"] }, { type: src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/sidemenu-components.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sidemenu-components/sidemenu-components.module.ts ***!
  \*******************************************************************/
/*! exports provided: SidemenuComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponentsModule", function() { return SidemenuComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/sidemenu-components/my-profile/my-profile.component.ts");
/* harmony import */ var _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-wallet/my-wallet.component */ "./src/app/sidemenu-components/my-wallet/my-wallet.component.ts");
/* harmony import */ var _my_backpack_my_backpack_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-backpack/my-backpack.component */ "./src/app/sidemenu-components/my-backpack/my-backpack.component.ts");
/* harmony import */ var _my_relationships_my_relationships_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-relationships/my-relationships.component */ "./src/app/sidemenu-components/my-relationships/my-relationships.component.ts");
/* harmony import */ var _my_loyality_points_my_loyality_points_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-loyality-points/my-loyality-points.component */ "./src/app/sidemenu-components/my-loyality-points/my-loyality-points.component.ts");
/* harmony import */ var _report_bug_report_bug_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./report-bug/report-bug.component */ "./src/app/sidemenu-components/report-bug/report-bug.component.ts");
/* harmony import */ var _online_support_online_support_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./online-support/online-support.component */ "./src/app/sidemenu-components/online-support/online-support.component.ts");
/* harmony import */ var _faq_comp_faq_comp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./faq-comp/faq-comp.component */ "./src/app/sidemenu-components/faq-comp/faq-comp.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _my_score_my_score_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-score/my-score.component */ "./src/app/sidemenu-components/my-score/my-score.component.ts");
/* harmony import */ var _design_component_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../design-component/skeleton/skeleton.module */ "./src/app/design-component/skeleton/skeleton.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _send_tip_send_tip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./send-tip/send-tip.component */ "./src/app/sidemenu-components/send-tip/send-tip.component.ts");
/* harmony import */ var _buy_tip_buy_tip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./buy-tip/buy-tip.component */ "./src/app/sidemenu-components/buy-tip/buy-tip.component.ts");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/__ivy_ngcc__/fesm2015/ngx-stripe.js");
/* harmony import */ var _tip_payment_tip_payment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tip-payment/tip-payment.component */ "./src/app/sidemenu-components/tip-payment/tip-payment.component.ts");






















const route = [
    {
        path: 'my-profile',
        component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"],
    },
    {
        path: 'Wallet',
        component: _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_3__["MyWalletComponent"],
    },
    {
        path: 'my-backpack',
        component: _my_backpack_my_backpack_component__WEBPACK_IMPORTED_MODULE_4__["MyBackpackComponent"],
    },
    {
        path: 'my-relationship',
        component: _my_relationships_my_relationships_component__WEBPACK_IMPORTED_MODULE_5__["MyRelationshipsComponent"],
    },
    {
        path: 'my-points',
        component: _my_loyality_points_my_loyality_points_component__WEBPACK_IMPORTED_MODULE_6__["MyLoyalityPointsComponent"],
    },
    {
        path: 'report-bug',
        component: _report_bug_report_bug_component__WEBPACK_IMPORTED_MODULE_7__["ReportBugComponent"],
    },
    {
        path: 'online-support',
        component: _online_support_online_support_component__WEBPACK_IMPORTED_MODULE_8__["OnlineSupportComponent"],
    },
    {
        path: 'faq',
        component: _faq_comp_faq_comp_component__WEBPACK_IMPORTED_MODULE_9__["FaqCompComponent"],
    },
    {
        path: 'my-score',
        component: _my_score_my_score_component__WEBPACK_IMPORTED_MODULE_12__["MyScoreComponent"],
    },
    {
        path: 'send-tip',
        component: _send_tip_send_tip_component__WEBPACK_IMPORTED_MODULE_15__["SendTipComponent"]
    },
    {
        path: 'buy-tip',
        component: _buy_tip_buy_tip_component__WEBPACK_IMPORTED_MODULE_16__["BuyTipComponent"]
    },
    {
        path: 'buy-tip-pay',
        component: _buy_tip_buy_tip_component__WEBPACK_IMPORTED_MODULE_16__["BuyTipComponent"]
    },
    {
        path: 'tip-payment',
        component: _tip_payment_tip_payment_component__WEBPACK_IMPORTED_MODULE_18__["TipPaymentComponent"]
    },
];
class SidemenuComponentsModule {
}
SidemenuComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SidemenuComponentsModule });
SidemenuComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SidemenuComponentsModule_Factory(t) { return new (t || SidemenuComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _design_component_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_13__["SkeletonModule"],
            // CustomSpinnerModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(route),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
            ngx_stripe__WEBPACK_IMPORTED_MODULE_17__["NgxStripeModule"].forRoot('pk_test_VK47XeSEIbfr4iKhfmVHAtsr00cnZhNzel'),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidemenuComponentsModule, { declarations: [_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"],
        _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_3__["MyWalletComponent"],
        _my_backpack_my_backpack_component__WEBPACK_IMPORTED_MODULE_4__["MyBackpackComponent"],
        _my_relationships_my_relationships_component__WEBPACK_IMPORTED_MODULE_5__["MyRelationshipsComponent"],
        _my_loyality_points_my_loyality_points_component__WEBPACK_IMPORTED_MODULE_6__["MyLoyalityPointsComponent"],
        _report_bug_report_bug_component__WEBPACK_IMPORTED_MODULE_7__["ReportBugComponent"],
        _online_support_online_support_component__WEBPACK_IMPORTED_MODULE_8__["OnlineSupportComponent"],
        _faq_comp_faq_comp_component__WEBPACK_IMPORTED_MODULE_9__["FaqCompComponent"],
        _my_score_my_score_component__WEBPACK_IMPORTED_MODULE_12__["MyScoreComponent"],
        _send_tip_send_tip_component__WEBPACK_IMPORTED_MODULE_15__["SendTipComponent"],
        _buy_tip_buy_tip_component__WEBPACK_IMPORTED_MODULE_16__["BuyTipComponent"],
        _tip_payment_tip_payment_component__WEBPACK_IMPORTED_MODULE_18__["TipPaymentComponent"],
        _tip_payment_tip_payment_component__WEBPACK_IMPORTED_MODULE_18__["TipPaymentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _design_component_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_13__["SkeletonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], ngx_stripe__WEBPACK_IMPORTED_MODULE_17__["NgxStripeModule"]], exports: [_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"],
        _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_3__["MyWalletComponent"],
        _my_backpack_my_backpack_component__WEBPACK_IMPORTED_MODULE_4__["MyBackpackComponent"],
        _my_relationships_my_relationships_component__WEBPACK_IMPORTED_MODULE_5__["MyRelationshipsComponent"],
        _my_loyality_points_my_loyality_points_component__WEBPACK_IMPORTED_MODULE_6__["MyLoyalityPointsComponent"],
        _report_bug_report_bug_component__WEBPACK_IMPORTED_MODULE_7__["ReportBugComponent"],
        _online_support_online_support_component__WEBPACK_IMPORTED_MODULE_8__["OnlineSupportComponent"],
        _faq_comp_faq_comp_component__WEBPACK_IMPORTED_MODULE_9__["FaqCompComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidemenuComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"],
                    _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_3__["MyWalletComponent"],
                    _my_backpack_my_backpack_component__WEBPACK_IMPORTED_MODULE_4__["MyBackpackComponent"],
                    _my_relationships_my_relationships_component__WEBPACK_IMPORTED_MODULE_5__["MyRelationshipsComponent"],
                    _my_loyality_points_my_loyality_points_component__WEBPACK_IMPORTED_MODULE_6__["MyLoyalityPointsComponent"],
                    _report_bug_report_bug_component__WEBPACK_IMPORTED_MODULE_7__["ReportBugComponent"],
                    _online_support_online_support_component__WEBPACK_IMPORTED_MODULE_8__["OnlineSupportComponent"],
                    _faq_comp_faq_comp_component__WEBPACK_IMPORTED_MODULE_9__["FaqCompComponent"],
                    _my_score_my_score_component__WEBPACK_IMPORTED_MODULE_12__["MyScoreComponent"],
                    _send_tip_send_tip_component__WEBPACK_IMPORTED_MODULE_15__["SendTipComponent"],
                    _buy_tip_buy_tip_component__WEBPACK_IMPORTED_MODULE_16__["BuyTipComponent"],
                    _tip_payment_tip_payment_component__WEBPACK_IMPORTED_MODULE_18__["TipPaymentComponent"],
                    _tip_payment_tip_payment_component__WEBPACK_IMPORTED_MODULE_18__["TipPaymentComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _design_component_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_13__["SkeletonModule"],
                    // CustomSpinnerModule,
                    _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(route),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                    ngx_stripe__WEBPACK_IMPORTED_MODULE_17__["NgxStripeModule"].forRoot('pk_test_VK47XeSEIbfr4iKhfmVHAtsr00cnZhNzel'),
                ],
                exports: [
                    _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"],
                    _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_3__["MyWalletComponent"],
                    _my_backpack_my_backpack_component__WEBPACK_IMPORTED_MODULE_4__["MyBackpackComponent"],
                    _my_relationships_my_relationships_component__WEBPACK_IMPORTED_MODULE_5__["MyRelationshipsComponent"],
                    _my_loyality_points_my_loyality_points_component__WEBPACK_IMPORTED_MODULE_6__["MyLoyalityPointsComponent"],
                    _report_bug_report_bug_component__WEBPACK_IMPORTED_MODULE_7__["ReportBugComponent"],
                    _online_support_online_support_component__WEBPACK_IMPORTED_MODULE_8__["OnlineSupportComponent"],
                    _faq_comp_faq_comp_component__WEBPACK_IMPORTED_MODULE_9__["FaqCompComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/sidemenu-components/tip-payment/tip-payment.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/sidemenu-components/tip-payment/tip-payment.component.ts ***!
  \**************************************************************************/
/*! exports provided: TipPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipPaymentComponent", function() { return TipPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/__ivy_ngcc__/fesm2015/ngx-stripe.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/design-component/custom-toaster/toaster.service */ "./src/app/design-component/custom-toaster/toaster.service.ts");







class TipPaymentComponent {
    constructor(stripeService, active, service, route, newToast) {
        this.stripeService = stripeService;
        this.active = active;
        this.service = service;
        this.route = route;
        this.newToast = newToast;
        this.isDisabledCard = true;
        this.showDetail = 'card';
        this.cardOptions = {
            hidePostalCode: true,
            style: {
                base: {
                    color: '#303238',
                    fontSize: '16px',
                    fontFamily: '"Open Sans", sans-serif',
                    // border: '1px solid #303238',
                    padding: '20px 0px',
                    fontSmoothing: 'antialiased',
                    '::placeholder': {
                        color: '#CFD7DF',
                    },
                },
                invalid: {
                    color: '#e5424d',
                    ':focus': {
                        color: '#303238',
                    },
                },
            },
        };
        this.elementsOptions = {
            locale: 'en',
        };
        this.active.queryParams.subscribe((params) => {
            this.amount = params.amount;
        });
    }
    ngOnInit() {
        this.stripeClient();
    }
    stripeClient() {
        this.service.get(`customers/stripe_client`).subscribe((res) => {
            console.log(res);
            this.stripeId = res.result.id;
        });
    }
    //  for stripe token create
    createToken() {
        this.stripeService
            .createToken(this.card.element)
            .subscribe((result) => {
            if (result.token) {
                this.tokenId = result.token.id;
                // Use the token
                this.checkOut();
                console.log(this.tokenId);
            }
            else if (result.error) {
                // Error creating the token
                console.log(result.error.message);
            }
        });
    }
    // 
    checkOut() {
        let data = {
            "amount": Number(this.amount),
            "currency": "usd",
            "stripeId": this.stripeId,
            "token": this.tokenId
        };
        console.log(data);
        this.service.post('customers/stripe_checkout', data).subscribe((res) => {
            console.log(res);
            if (res.status == 200) {
                // this.newToast.success("")
            }
        }, (err) => {
            this.newToast.error("something went wrong");
        });
    }
    paymentFortip() {
    }
}
TipPaymentComponent.ɵfac = function TipPaymentComponent_Factory(t) { return new (t || TipPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_stripe__WEBPACK_IMPORTED_MODULE_1__["StripeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])); };
TipPaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TipPaymentComponent, selectors: [["app-tip-payment"]], viewQuery: function TipPaymentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_stripe__WEBPACK_IMPORTED_MODULE_1__["StripeCardComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.card = _t.first);
    } }, decls: 20, vars: 3, consts: [[1, "head-amount"], [1, "top-hr"], [1, "total-ammount-wrapper"], [1, "container"], [1, "row"], [1, "container", "d-flex", "justify-content-between"], [1, "total-heading"], [1, "total-ammount", "d-flex"], [1, "fa", "fa-dollar"], [1, "bottom-hr"], [1, "form-check"], [1, "payment-card-block"], [3, "options", "elementsOptions"], [1, "tipbtn-wrapper"], [1, "btn", "btn-primary", 3, "click"]], template: function TipPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ngx-stripe-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TipPaymentComponent_Template_button_click_18_listener() { return ctx.createToken(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.cardOptions)("elementsOptions", ctx.elementsOptions);
    } }, directives: [ngx_stripe__WEBPACK_IMPORTED_MODULE_1__["StripeCardComponent"]], styles: [".payment-card-block[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  top: 10px;\n  left: 10px;\n}\n.payment-card-block[_ngcontent-%COMP%]   .credit-card[_ngcontent-%COMP%] {\n  padding-left: 33px;\n}\n.form-check[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n}\n.top-hr[_ngcontent-%COMP%] {\n  border: 1;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.bottom-hr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 0.5px solid rgba(0, 0, 0, 0.49);\n}\n.total-ammount-wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n.head-amount[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.tipbtn-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 15px;\n  right: 15px;\n  margin-top: 73px;\n}\n.tipbtn-wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #000;\n  border-color: #000;\n  border-radius: 0;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUtY29tcG9uZW50cy90aXAtcGF5bWVudC90aXAtcGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVFLFNBQUE7RUFDQSxVQUFBO0FBRE47QUFHSTtFQUNFLGtCQUFBO0FBRE47QUFJRTtFQUNFLGdCQUFBO0FBREo7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQURKO0FBTUE7RUFDSSxTQUFBO0VBQ0Esd0NBQUE7QUFISjtBQU1FO0VBQ0UsU0FBQTtFQUNBLDJDQUFBO0FBSEo7QUFTUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQU5WO0FBYUU7RUFDSSxnQkFBQTtBQVZOO0FBYUU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVZKO0FBV0k7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVRSIiwiZmlsZSI6InNyYy9hcHAvc2lkZW1lbnUtY29tcG9uZW50cy90aXAtcGF5bWVudC90aXAtcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50LWNhcmQtYmxvY2t7XG4gICAgaXtcbiAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIC5jcmVkaXQtY2FyZHtcbiAgICAgIHBhZGRpbmctbGVmdDogMzNweDtcbiAgICB9XG4gIH1cbiAgLmZvcm0tY2hlY2sge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgLmZvcm0tY2hlY2stbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuXG4gIH1cbn1cblxuLnRvcC1ociB7XG4gICAgYm9yZGVyOiAxO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgfVxuICBcbiAgLmJvdHRvbS1ociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHJnYigwIDAgMCAvIDQ5JSk7XG4gIH1cblxuICAudG90YWwtYW1tb3VudC13cmFwcGVyIHtcbiAgICAucm93IHtcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICB9XG5cbiAgLmhlYWQtYW1vdW50e1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG4gIC50aXBidG4td3JhcHBlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogNzNweDtcbiAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TipPaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tip-payment',
                templateUrl: './tip-payment.component.html',
                styleUrls: ['./tip-payment.component.scss']
            }]
    }], function () { return [{ type: ngx_stripe__WEBPACK_IMPORTED_MODULE_1__["StripeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }]; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_stripe__WEBPACK_IMPORTED_MODULE_1__["StripeCardComponent"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=sidemenu-components-sidemenu-components-module.js.map