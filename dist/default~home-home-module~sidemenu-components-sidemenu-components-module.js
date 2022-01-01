(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~sidemenu-components-sidemenu-components-module"],{

/***/ "./node_modules/ngx-stripe/__ivy_ngcc__/fesm2015/ngx-stripe.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-stripe/__ivy_ngcc__/fesm2015/ngx-stripe.js ***!
  \*********************************************************************/
/*! exports provided: DocumentRef, LazyStripeAPILoader, NgxStripeModule, STRIPE_OPTIONS, STRIPE_PUBLISHABLE_KEY, StripeAuBankAccountComponent, StripeCardComponent, StripeCardCvcComponent, StripeCardExpiryComponent, StripeCardGroupDirective, StripeCardNumberComponent, StripeElementsService, StripeFactoryService, StripeFpxBankComponent, StripeIbanComponent, StripeIdealBankComponent, StripeInstance, StripePaymentRequestButtonComponent, StripeService, WindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRef", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyStripeAPILoader", function() { return LazyStripeAPILoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStripeModule", function() { return NgxStripeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRIPE_OPTIONS", function() { return STRIPE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRIPE_PUBLISHABLE_KEY", function() { return STRIPE_PUBLISHABLE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeAuBankAccountComponent", function() { return StripeAuBankAccountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeCardComponent", function() { return StripeCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeCardCvcComponent", function() { return StripeCardCvcComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeCardExpiryComponent", function() { return StripeCardExpiryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeCardGroupDirective", function() { return StripeCardGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeCardNumberComponent", function() { return StripeCardNumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeElementsService", function() { return StripeElementsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeFactoryService", function() { return StripeFactoryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeFpxBankComponent", function() { return StripeFpxBankComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeIbanComponent", function() { return StripeIbanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeIdealBankComponent", function() { return StripeIdealBankComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeInstance", function() { return StripeInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentRequestButtonComponent", function() { return StripePaymentRequestButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeService", function() { return StripeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








const _c0 = ["stripeElementRef"];
const STRIPE_PUBLISHABLE_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Stripe Publishable Key');
const STRIPE_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Stripe Options');

class WindowRef {
    constructor(platformId) {
        this.platformId = platformId;
    }
    getNativeWindow() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            return window;
        }
        return {};
    }
}
WindowRef.ɵfac = function WindowRef_Factory(t) { return new (t || WindowRef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
WindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowRef, factory: WindowRef.ɵfac });
WindowRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();

class DocumentRef {
    constructor(platformId) {
        this.platformId = platformId;
    }
    getNativeDocument() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            return document;
        }
        return {};
    }
}
DocumentRef.ɵfac = function DocumentRef_Factory(t) { return new (t || DocumentRef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
DocumentRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DocumentRef, factory: DocumentRef.ɵfac });
DocumentRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();

class LazyStripeAPILoader {
    constructor(platformId, window, document) {
        this.platformId = platformId;
        this.window = window;
        this.document = document;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            error: false,
            loaded: false,
            loading: false
        });
    }
    asStream() {
        this.load();
        return this.status.asObservable();
    }
    isReady() {
        return this.status.getValue().loaded;
    }
    load() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformServer"])(this.platformId)) {
            return;
        }
        const status = this.status.getValue();
        if (this.window.getNativeWindow().hasOwnProperty('Stripe')) {
            this.status.next({
                error: false,
                loaded: true,
                loading: false
            });
        }
        else if (!status.loaded && !status.loading) {
            this.status.next(Object.assign(Object.assign({}, status), { loading: true }));
            const script = this.document.getNativeDocument().createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = 'https://js.stripe.com/v3/';
            script.onload = () => {
                this.status.next({
                    error: false,
                    loaded: true,
                    loading: false
                });
            };
            script.onerror = () => {
                this.status.next({
                    error: true,
                    loaded: false,
                    loading: false
                });
            };
            this.document.getNativeDocument().body.appendChild(script);
        }
    }
}
LazyStripeAPILoader.ɵfac = function LazyStripeAPILoader_Factory(t) { return new (t || LazyStripeAPILoader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DocumentRef)); };
LazyStripeAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LazyStripeAPILoader, factory: LazyStripeAPILoader.ɵfac });
LazyStripeAPILoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: WindowRef },
    { type: DocumentRef }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyStripeAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: WindowRef }, { type: DocumentRef }]; }, null); })();

class StripeInstance {
    constructor(loader, window, key, options) {
        this.loader = loader;
        this.window = window;
        this.key = key;
        this.options = options;
        this.stripe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](undefined);
        this.stripe = this.stripe$
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((stripe) => Boolean(stripe)));
        this.loader
            .asStream()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((status) => status.loaded === true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.window.getNativeWindow().Stripe))
            .subscribe((stripeInstance) => {
            const stripe = this.options
                ? stripeInstance(this.key, this.options)
                : stripeInstance(this.key);
            this.stripe$.next(stripe);
        });
    }
    getInstance() {
        return this.stripe$.getValue();
    }
    elements(options) {
        return this.stripe$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((stripe) => Boolean(stripe)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((stripe) => stripe.elements(options)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    redirectToCheckout(options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.redirectToCheckout(options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    confirmAuBecsDebitPayment(clientSecret, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmAuBecsDebitPayment(clientSecret, data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    confirmBancontactPayment(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmBancontactPayment(clientSecret, data, options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    confirmCardPayment(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmCardPayment(clientSecret, data, options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    confirmEpsPayment(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmEpsPayment(clientSecret, data, options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    confirmFpxPayment(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmFpxPayment(clientSecret, data, options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    confirmGiropayPayment(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmGiropayPayment(clientSecret, data, options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    confirmIdealPayment(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmIdealPayment(clientSecret, data, options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    confirmP24Payment(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmP24Payment(clientSecret, data, options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    confirmSepaDebitPayment(clientSecret, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmSepaDebitPayment(clientSecret, data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    handleCardAction(clientSecret) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.handleCardAction(clientSecret))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    createPaymentMethod(paymentMethodData) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.createPaymentMethod(paymentMethodData))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    retrievePaymentIntent(clientSecret) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.retrievePaymentIntent(clientSecret))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    confirmAuBecsDebitSetup(clientSecret, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmAuBecsDebitSetup(clientSecret, data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    confirmCardSetup(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmCardSetup(clientSecret, data, options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    confirmSepaDebitSetup(clientSecret, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmSepaDebitSetup(clientSecret, data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    retrieveSetupIntent(clientSecret) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmSepaDebitSetup(clientSecret))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    paymentRequest(options) {
        const stripe = this.getInstance();
        return stripe ? stripe.paymentRequest(options) : undefined;
    }
    createToken(tokenType, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.createToken(tokenType, data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    createSource(a, b) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.createSource(a, b))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    retrieveSource(source) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.retrieveSource(source))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    /**
     * @deprecated
     */
    handleCardPayment(clientSecret, element, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.handleCardPayment(clientSecret, element, data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    /**
     * @deprecated
     */
    confirmPaymentIntent(clientSecret, element, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmPaymentIntent(clientSecret, element, data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    /**
     * @deprecated
     */
    handleCardSetup(clientSecret, element, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.handleCardSetup(clientSecret, element, data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    /**
     * @deprecated
     */
    confirmSetupIntent(clientSecret, element, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.confirmSetupIntent(clientSecret, element, data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
    /**
     * @deprecated
     */
    handleFpxPayment(clientSecret, element, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(stripe.handleFpxPayment(clientSecret, element, data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
}

class StripeService {
    constructor(key, options, loader, window) {
        this.key = key;
        this.options = options;
        this.loader = loader;
        this.window = window;
        if (key) {
            this.stripe = new StripeInstance(this.loader, this.window, key, options);
        }
    }
    getStripeReference() {
        return this.loader.asStream().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((status) => status.loaded === true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.window.getNativeWindow().Stripe));
    }
    getInstance() {
        return this.stripe.getInstance();
    }
    setKey(key, options) {
        return this.changeKey(key, options);
    }
    changeKey(key, options) {
        this.stripe = new StripeInstance(this.loader, this.window, key, options);
        return this.stripe;
    }
    elements(options) {
        return this.stripe.elements(options);
    }
    redirectToCheckout(options) {
        return this.stripe.redirectToCheckout(options);
    }
    confirmAuBecsDebitPayment(clientSecret, data) {
        return this.stripe.confirmAuBecsDebitPayment(clientSecret, data);
    }
    confirmBancontactPayment(clientSecret, data, options) {
        return this.stripe.confirmBancontactPayment(clientSecret, data, options);
    }
    confirmCardPayment(clientSecret, data, options) {
        return this.stripe.confirmCardPayment(clientSecret, data, options);
    }
    confirmEpsPayment(clientSecret, data, options) {
        return this.stripe.confirmEpsPayment(clientSecret, data, options);
    }
    confirmFpxPayment(clientSecret, data, options) {
        return this.stripe.confirmFpxPayment(clientSecret, data, options);
    }
    confirmGiropayPayment(clientSecret, data, options) {
        return this.stripe.confirmGiropayPayment(clientSecret, data, options);
    }
    confirmIdealPayment(clientSecret, data, options) {
        return this.stripe.confirmIdealPayment(clientSecret, data, options);
    }
    confirmP24Payment(clientSecret, data, options) {
        return this.stripe.confirmP24Payment(clientSecret, data, options);
    }
    confirmSepaDebitPayment(clientSecret, data) {
        return this.stripe.confirmSepaDebitPayment(clientSecret, data);
    }
    handleCardAction(clientSecret) {
        return this.stripe.handleCardAction(clientSecret);
    }
    createPaymentMethod(paymentMethodData) {
        return this.stripe.createPaymentMethod(paymentMethodData);
    }
    retrievePaymentIntent(clientSecret) {
        return this.stripe.retrievePaymentIntent(clientSecret);
    }
    confirmAuBecsDebitSetup(clientSecret, data) {
        return this.stripe.confirmAuBecsDebitSetup(clientSecret, data);
    }
    confirmCardSetup(clientSecret, data, options) {
        return this.stripe.confirmCardSetup(clientSecret, data, options);
    }
    confirmSepaDebitSetup(clientSecret, data) {
        return this.stripe.confirmSepaDebitSetup(clientSecret, data);
    }
    retrieveSetupIntent(clientSecret) {
        return this.stripe.retrieveSetupIntent(clientSecret);
    }
    paymentRequest(options) {
        return this.stripe.paymentRequest(options);
    }
    createToken(tokenType, data) {
        return this.stripe.createToken(tokenType, data);
    }
    createSource(a, b) {
        return this.stripe.createSource(a, b);
    }
    retrieveSource(source) {
        return this.stripe.retrieveSource(source);
    }
    /**
     * @deprecated
     */
    handleCardPayment(clientSecret, element, data) {
        return this.stripe.handleCardPayment(clientSecret, element, data);
    }
    /**
     * @deprecated
     */
    confirmPaymentIntent(clientSecret, element, data) {
        return this.stripe.confirmPaymentIntent(clientSecret, element, data);
    }
    /**
     * @deprecated
     */
    handleCardSetup(clientSecret, element, data) {
        return this.stripe.handleCardSetup(clientSecret, element, data);
    }
    /**
     * @deprecated
     */
    confirmSetupIntent(clientSecret, element, data) {
        return this.stripe.confirmSetupIntent(clientSecret, element, data);
    }
    /**
     * @deprecated
     */
    handleFpxPayment(clientSecret, element, data) {
        return this.stripe.handleFpxPayment(clientSecret, element, data);
    }
}
StripeService.ɵfac = function StripeService_Factory(t) { return new (t || StripeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](STRIPE_PUBLISHABLE_KEY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](STRIPE_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LazyStripeAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](WindowRef)); };
StripeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StripeService, factory: StripeService.ɵfac });
StripeService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [STRIPE_PUBLISHABLE_KEY,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [STRIPE_OPTIONS,] }] },
    { type: LazyStripeAPILoader },
    { type: WindowRef }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [STRIPE_PUBLISHABLE_KEY]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [STRIPE_OPTIONS]
            }] }, { type: LazyStripeAPILoader }, { type: WindowRef }]; }, null); })();

class StripeElementsService {
    constructor(stripeService) {
        this.stripeService = stripeService;
    }
    elements(stripe, options = {}) {
        if (stripe) {
            if (Object.keys(options).length > 0) {
                return stripe.elements(options);
            }
            return stripe.elements();
        }
        else {
            if (Object.keys(options).length > 0) {
                return this.stripeService.elements(options);
            }
            return this.stripeService.elements();
        }
    }
    paymentRequest(stripe, options) {
        return stripe
            ? stripe.paymentRequest(options)
            : this.stripeService.paymentRequest(options);
    }
    mergeOptions(options, containerClass) {
        if (!containerClass || (options && options.classes)) {
            return options || {};
        }
        if (!options || !options.classes) {
            return Object.assign(Object.assign({}, (options || {})), { classes: {
                    base: containerClass,
                    complete: `${containerClass}--complete`,
                    empty: `${containerClass}--empty`,
                    focus: `${containerClass}--focus`,
                    invalid: `${containerClass}--invalid`,
                    webkitAutoFill: `${containerClass}--webkit-autoFill`
                } });
        }
        return options || {};
    }
}
StripeElementsService.ɵfac = function StripeElementsService_Factory(t) { return new (t || StripeElementsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StripeService)); };
StripeElementsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StripeElementsService, factory: StripeElementsService.ɵfac });
StripeElementsService.ctorParameters = () => [
    { type: StripeService }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeElementsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: StripeService }]; }, null); })();

class StripeCardComponent {
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.state = 'notready';
    }
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            this.state = 'starting';
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getCard() {
        return this.element;
    }
    createElement(options = {}) {
        this.element = this.elements.create('card', options);
        this.element.on('change', (ev) => this.change.emit(ev));
        this.element.on('blur', () => this.blur.emit());
        this.element.on('focus', () => this.focus.emit());
        this.element.on('ready', () => this.ready.emit());
        this.element.on('escape', () => this.escape.emit());
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeCardComponent.ɵfac = function StripeCardComponent_Factory(t) { return new (t || StripeCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeCardComponent, selectors: [["ngx-stripe-card"]], viewQuery: function StripeCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeCardComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeCardComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-stripe-card',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StripeCardGroupDirective {
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.elements = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.state = 'notready';
    }
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            this.state = 'starting';
            const elementsOptions = this.elementsOptions;
            const stripe = this.stripe;
            if (changes.elementsOptions || changes.stripe || !this._elements) {
                this._elements = yield this.stripeElementsService
                    .elements(stripe, elementsOptions)
                    .toPromise();
                this.elements.emit(this._elements);
            }
            this.state = 'ready';
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this._elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.elements.emit(this._elements);
                this.state = 'ready';
            }
        });
    }
}
StripeCardGroupDirective.ɵfac = function StripeCardGroupDirective_Factory(t) { return new (t || StripeCardGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeCardGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: StripeCardGroupDirective, selectors: [["ngx-stripe-card-group"], ["", "ngxStripeCardGroup", ""]], inputs: { elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { elements: "elements" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
StripeCardGroupDirective.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeCardGroupDirective.propDecorators = {
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    elements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeCardGroupDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ngx-stripe-card-group,[ngxStripeCardGroup]'
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { elements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StripeCardNumberComponent {
    constructor(stripeElementsService, cardGroup) {
        this.stripeElementsService = stripeElementsService;
        this.cardGroup = cardGroup;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            if (changes.options || changes.containerClass) {
                this.setupElement('options');
            }
        });
    }
    ngOnInit() {
        if (this.cardGroup) {
            this.cardGroupSubscription = this.cardGroup.elements.subscribe((elements) => {
                this.elements = elements;
                this.setupElement('elements');
            });
        }
        else {
            throw new Error('StripeCardNumberComponent must have StripeCardGroupDirective parent');
        }
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
        if (this.cardGroupSubscription) {
            this.cardGroupSubscription.unsubscribe();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getCardNumber() {
        return this.element;
    }
    setupElement(source) {
        const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
        if (this.element && source === 'options') {
            this.update(options);
        }
        else if (this.elements && source === 'elements') {
            this.element = this.elements.create('cardNumber', options);
            this.element.on('change', (ev) => this.change.emit(ev));
            this.element.on('blur', () => this.blur.emit());
            this.element.on('focus', () => this.focus.emit());
            this.element.on('ready', () => this.ready.emit());
            this.element.on('escape', () => this.escape.emit());
            this.element.mount(this.stripeElementRef.nativeElement);
            this.load.emit(this.element);
        }
    }
}
StripeCardNumberComponent.ɵfac = function StripeCardNumberComponent_Factory(t) { return new (t || StripeCardNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeCardGroupDirective, 8)); };
StripeCardNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeCardNumberComponent, selectors: [["ngx-stripe-card-number"]], viewQuery: function StripeCardNumberComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeCardNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeCardNumberComponent.ctorParameters = () => [
    { type: StripeElementsService },
    { type: StripeCardGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
StripeCardNumberComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeCardNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-stripe-card-number',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }, { type: StripeCardGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StripeCardExpiryComponent {
    constructor(stripeElementsService, cardGroup) {
        this.stripeElementsService = stripeElementsService;
        this.cardGroup = cardGroup;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            if (changes.options || changes.containerClass) {
                this.setupElement('options');
            }
        });
    }
    ngOnInit() {
        if (this.cardGroup) {
            this.cardGroupSubscription = this.cardGroup.elements.subscribe((elements) => {
                this.elements = elements;
                this.setupElement('elements');
            });
        }
        else {
            throw new Error('StripeCardExpiryComponent must have StripeCardGroupDirective parent');
        }
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
        if (this.cardGroupSubscription) {
            this.cardGroupSubscription.unsubscribe();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getCardExpiry() {
        return this.element;
    }
    setupElement(source) {
        const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
        if (this.element && source === 'options') {
            this.update(options);
        }
        else if (this.elements && source === 'elements') {
            this.element = this.elements.create('cardExpiry', options);
            this.element.on('change', (ev) => this.change.emit(ev));
            this.element.on('blur', () => this.blur.emit());
            this.element.on('focus', () => this.focus.emit());
            this.element.on('ready', () => this.ready.emit());
            this.element.on('escape', () => this.escape.emit());
            this.element.mount(this.stripeElementRef.nativeElement);
            this.load.emit(this.element);
        }
    }
}
StripeCardExpiryComponent.ɵfac = function StripeCardExpiryComponent_Factory(t) { return new (t || StripeCardExpiryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeCardGroupDirective, 8)); };
StripeCardExpiryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeCardExpiryComponent, selectors: [["ngx-stripe-card-expiry"]], viewQuery: function StripeCardExpiryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeCardExpiryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeCardExpiryComponent.ctorParameters = () => [
    { type: StripeElementsService },
    { type: StripeCardGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
StripeCardExpiryComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeCardExpiryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-stripe-card-expiry',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }, { type: StripeCardGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StripeCardCvcComponent {
    constructor(stripeElementsService, cardGroup) {
        this.stripeElementsService = stripeElementsService;
        this.cardGroup = cardGroup;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            if (changes.options || changes.containerClass) {
                this.setupElement('options');
            }
        });
    }
    ngOnInit() {
        if (this.cardGroup) {
            this.cardGroupSubscription = this.cardGroup.elements.subscribe((elements) => {
                this.elements = elements;
                this.setupElement('elements');
            });
        }
        else {
            throw new Error('StripeCardCvcComponent must have StripeCardGroupDirective parent');
        }
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
        if (this.cardGroupSubscription) {
            this.cardGroupSubscription.unsubscribe();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getCardCvc() {
        return this.element;
    }
    setupElement(source) {
        const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
        if (this.element && source === 'options') {
            this.update(options);
        }
        else if (this.elements && source === 'elements') {
            this.element = this.elements.create('cardCvc', options);
            this.element.on('change', (ev) => this.change.emit(ev));
            this.element.on('blur', () => this.blur.emit());
            this.element.on('focus', () => this.focus.emit());
            this.element.on('ready', () => this.ready.emit());
            this.element.on('escape', () => this.escape.emit());
            this.element.mount(this.stripeElementRef.nativeElement);
            this.load.emit(this.element);
        }
    }
}
StripeCardCvcComponent.ɵfac = function StripeCardCvcComponent_Factory(t) { return new (t || StripeCardCvcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeCardGroupDirective, 8)); };
StripeCardCvcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeCardCvcComponent, selectors: [["ngx-stripe-card-cvc"]], viewQuery: function StripeCardCvcComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeCardCvcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeCardCvcComponent.ctorParameters = () => [
    { type: StripeElementsService },
    { type: StripeCardGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
StripeCardCvcComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeCardCvcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-stripe-card-cvc',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }, { type: StripeCardGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StripeFpxBankComponent {
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.state = 'notready';
    }
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            this.state = 'starting';
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getFpxBank() {
        return this.element;
    }
    createElement(options = { accountHolderType: 'individual' }) {
        this.element = this.elements.create('fpxBank', options);
        this.element.on('change', (ev) => this.change.emit(ev));
        this.element.on('blur', () => this.blur.emit());
        this.element.on('focus', () => this.focus.emit());
        this.element.on('ready', () => this.ready.emit());
        this.element.on('escape', () => this.escape.emit());
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeFpxBankComponent.ɵfac = function StripeFpxBankComponent_Factory(t) { return new (t || StripeFpxBankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeFpxBankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeFpxBankComponent, selectors: [["ngx-stripe-fpx-bank"]], viewQuery: function StripeFpxBankComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeFpxBankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeFpxBankComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeFpxBankComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeFpxBankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-stripe-fpx-bank',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StripeIdealBankComponent {
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.state = 'notready';
    }
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            this.state = 'starting';
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getIdealBank() {
        return this.element;
    }
    createElement(options = {}) {
        this.element = this.elements.create('idealBank', options);
        this.element.on('change', (ev) => this.change.emit(ev));
        this.element.on('blur', () => this.blur.emit());
        this.element.on('focus', () => this.focus.emit());
        this.element.on('ready', () => this.ready.emit());
        this.element.on('escape', () => this.escape.emit());
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeIdealBankComponent.ɵfac = function StripeIdealBankComponent_Factory(t) { return new (t || StripeIdealBankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeIdealBankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeIdealBankComponent, selectors: [["ngx-stripe-ideal-bank"]], viewQuery: function StripeIdealBankComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeIdealBankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeIdealBankComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeIdealBankComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeIdealBankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-stripe-ideal-bank',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StripeIbanComponent {
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.state = 'notready';
    }
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            this.state = 'starting';
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getIban() {
        return this.element;
    }
    createElement(options = {}) {
        this.element = this.elements.create('iban', options);
        this.element.on('change', (ev) => this.change.emit(ev));
        this.element.on('blur', () => this.blur.emit());
        this.element.on('focus', () => this.focus.emit());
        this.element.on('ready', () => this.ready.emit());
        this.element.on('escape', () => this.escape.emit());
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeIbanComponent.ɵfac = function StripeIbanComponent_Factory(t) { return new (t || StripeIbanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeIbanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeIbanComponent, selectors: [["ngx-stripe-iban"]], viewQuery: function StripeIbanComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeIbanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeIbanComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeIbanComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeIbanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-stripe-iban',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StripeAuBankAccountComponent {
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.state = 'notready';
    }
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            this.state = 'starting';
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getAuBankAccount() {
        return this.element;
    }
    createElement(options = {}) {
        this.element = this.elements.create('auBankAccount', options);
        this.element.on('change', (ev) => this.change.emit(ev));
        this.element.on('blur', () => this.blur.emit());
        this.element.on('focus', () => this.focus.emit());
        this.element.on('ready', () => this.ready.emit());
        this.element.on('escape', () => this.escape.emit());
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeAuBankAccountComponent.ɵfac = function StripeAuBankAccountComponent_Factory(t) { return new (t || StripeAuBankAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeAuBankAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeAuBankAccountComponent, selectors: [["ngx-stripe-au-bank-account"]], viewQuery: function StripeAuBankAccountComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeAuBankAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeAuBankAccountComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeAuBankAccountComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeAuBankAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-stripe-au-bank-account',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StripePaymentRequestButtonComponent {
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.token = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.paymentMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.source = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shippingaddresschange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shippingoptionchange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notavailable = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            const elementsOptions = this.elementsOptions;
            const stripe = this.stripe;
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                const elements = yield this.stripeElementsService
                    .elements(stripe, elementsOptions)
                    .toPromise();
                this.elements = elements;
                updateElements = true;
            }
            if (changes.paymentOptions && this.paymentRequest) {
                this.updateRequest(this.paymentOptions);
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.paymentRequest = this.stripeElementsService.paymentRequest(stripe, this.paymentOptions);
                    this.paymentRequest.on('token', (ev) => this.token.emit(ev));
                    this.paymentRequest.on('paymentmethod', (ev) => this.paymentMethod.emit(ev));
                    this.paymentRequest.on('source', (ev) => this.source.emit(ev));
                    this.paymentRequest.on('cancel', () => this.cancel.emit());
                    this.paymentRequest.on('shippingaddresschange', (ev) => this.shippingaddresschange.emit(ev));
                    this.paymentRequest.on('shippingoptionchange', (ev) => this.shippingoptionchange.emit(ev));
                    this.element = this.elements.create('paymentRequestButton', Object.assign({ paymentRequest: this.paymentRequest }, options));
                    this.canMakePayment().subscribe((result) => {
                        if (result) {
                            this.element.on('click', (ev) => this.change.emit(ev));
                            this.element.on('blur', () => this.blur.emit());
                            this.element.on('focus', () => this.focus.emit());
                            this.element.on('ready', () => this.ready.emit());
                            this.element.mount(this.stripeElementRef.nativeElement);
                            this.load.emit({
                                paymentRequestButton: this.element,
                                paymentRequest: this.paymentRequest
                            });
                        }
                        else {
                            this.notavailable.emit();
                        }
                    });
                }
            }
        });
    }
    canMakePayment() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.paymentRequest.canMakePayment());
    }
    update(options) {
        this.element.update(options);
    }
    updateRequest(options) {
        this.paymentRequest.update(options);
    }
    show() {
        this.paymentRequest.show();
    }
    /**
     * @deprecated
     */
    getButton() {
        return this.element;
    }
}
StripePaymentRequestButtonComponent.ɵfac = function StripePaymentRequestButtonComponent_Factory(t) { return new (t || StripePaymentRequestButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService)); };
StripePaymentRequestButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripePaymentRequestButtonComponent, selectors: [["ngx-stripe-payment-request-button"]], viewQuery: function StripePaymentRequestButtonComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", paymentOptions: "paymentOptions", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", change: "change", blur: "blur", focus: "focus", ready: "ready", token: "token", paymentMethod: "paymentMethod", source: "source", cancel: "cancel", shippingaddresschange: "shippingaddresschange", shippingoptionchange: "shippingoptionchange", notavailable: "notavailable" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripePaymentRequestButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripePaymentRequestButtonComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripePaymentRequestButtonComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    paymentOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    token: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    paymentMethod: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    source: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    shippingaddresschange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    shippingoptionchange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    notavailable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripePaymentRequestButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-stripe-payment-request-button',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], token: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], paymentMethod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], shippingaddresschange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], shippingoptionchange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], notavailable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paymentOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StripeFactoryService {
    constructor(baseKey, baseOptions, loader, window) {
        this.baseKey = baseKey;
        this.baseOptions = baseOptions;
        this.loader = loader;
        this.window = window;
    }
    create(key, options) {
        if (!key && !this.baseKey) {
            return null;
        }
        return new StripeInstance(this.loader, this.window, key || this.baseKey, options || this.baseOptions);
    }
}
StripeFactoryService.ɵfac = function StripeFactoryService_Factory(t) { return new (t || StripeFactoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](STRIPE_PUBLISHABLE_KEY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](STRIPE_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LazyStripeAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](WindowRef)); };
StripeFactoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StripeFactoryService, factory: StripeFactoryService.ɵfac });
StripeFactoryService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [STRIPE_PUBLISHABLE_KEY,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [STRIPE_OPTIONS,] }] },
    { type: LazyStripeAPILoader },
    { type: WindowRef }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeFactoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [STRIPE_PUBLISHABLE_KEY]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [STRIPE_OPTIONS]
            }] }, { type: LazyStripeAPILoader }, { type: WindowRef }]; }, null); })();

const components = [
    StripeCardComponent,
    StripeCardNumberComponent,
    StripeCardExpiryComponent,
    StripeCardCvcComponent,
    StripeFpxBankComponent,
    StripeIdealBankComponent,
    StripeIbanComponent,
    StripeAuBankAccountComponent,
    StripePaymentRequestButtonComponent
];
const directives = [StripeCardGroupDirective];
class NgxStripeModule {
    static forRoot(publishableKey, options) {
        return {
            ngModule: NgxStripeModule,
            providers: [
                LazyStripeAPILoader,
                StripeService,
                StripeFactoryService,
                StripeElementsService,
                WindowRef,
                DocumentRef,
                {
                    provide: STRIPE_PUBLISHABLE_KEY,
                    useValue: publishableKey
                },
                {
                    provide: STRIPE_OPTIONS,
                    useValue: options
                }
            ]
        };
    }
    static forChild(publishableKey, options) {
        return {
            ngModule: NgxStripeModule,
            providers: [
                LazyStripeAPILoader,
                StripeService,
                StripeFactoryService,
                StripeElementsService,
                WindowRef,
                DocumentRef,
                {
                    provide: STRIPE_PUBLISHABLE_KEY,
                    useValue: publishableKey
                },
                {
                    provide: STRIPE_OPTIONS,
                    useValue: options
                }
            ]
        };
    }
}
NgxStripeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxStripeModule });
NgxStripeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxStripeModule_Factory(t) { return new (t || NgxStripeModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxStripeModule, { declarations: [StripeCardComponent, StripeCardNumberComponent, StripeCardExpiryComponent, StripeCardCvcComponent, StripeFpxBankComponent, StripeIdealBankComponent, StripeIbanComponent, StripeAuBankAccountComponent, StripePaymentRequestButtonComponent, StripeCardGroupDirective], exports: [StripeCardComponent, StripeCardNumberComponent, StripeCardExpiryComponent, StripeCardCvcComponent, StripeFpxBankComponent, StripeIdealBankComponent, StripeIbanComponent, StripeAuBankAccountComponent, StripePaymentRequestButtonComponent, StripeCardGroupDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxStripeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [...components, ...directives],
                exports: [...components, ...directives]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-stripe
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-stripe.js.map

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

}]);
//# sourceMappingURL=default~home-home-module~sidemenu-components-sidemenu-components-module.js.map