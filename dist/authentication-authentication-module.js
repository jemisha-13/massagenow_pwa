(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js ***!
  \*************************************************************************/
/*! exports provided: NgOtpInputModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgOtpInputModule", function() { return NgOtpInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgOtpInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NumberOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onKeyDown($event); })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onKeyUp($event, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("disabledNumberOnly", !ctx_r1.config.allowNumbersOnly)("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
} }
function NgOtpInputComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 1, 11, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wrapper ", ctx_r0.config.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
} }
class KeysPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return Object.keys(value);
    }
}
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keys", type: KeysPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'keys'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Config {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgOtpInputComponent {
    /**
     * @param {?} keysPipe
     */
    constructor(keysPipe) {
        this.keysPipe = keysPipe;
        this.config = { length: 4 };
        // tslint:disable-next-line: no-output-on-prefix
        this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputControls = new Array(this.config.length);
        this.componentKey = Math.random()
            .toString(36)
            .substring(2) + new Date().getTime().toString(36);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        for (let index = 0; index < this.config.length; index++) {
            this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
        }
        this.inputType = this.getInputType();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.config.disableAutoFocus) {
            /** @type {?} */
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            if (containerItem) {
                containerItem.addEventListener('paste', (/**
                 * @param {?} evt
                 * @return {?}
                 */
                (evt) => this.handlePaste(evt)));
                /** @type {?} */
                const ele = containerItem.getElementsByClassName('otp-input')[0];
                if (ele && ele.focus) {
                    ele.focus();
                }
            }
        }
    }
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    getControlName(idx) {
        return `ctrl_${idx}`;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifLeftArrow(event) {
        return this.ifKeyCode(event, 37);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifRightArrow(event) {
        return this.ifKeyCode(event, 39);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifBackspaceOrDelete(event) {
        return (event.key === 'Backspace' ||
            event.key === 'Delete' ||
            this.ifKeyCode(event, 8) ||
            this.ifKeyCode(event, 46));
    }
    /**
     * @param {?} event
     * @param {?} targetCode
     * @return {?}
     */
    ifKeyCode(event, targetCode) {
        /** @type {?} */
        const key = event.keyCode || event.charCode;
        // tslint:disable-next-line: triple-equals
        return key == targetCode ? true : false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onKeyDown($event) {
        /** @type {?} */
        var isSpace = this.ifKeyCode($event, 32);
        if (isSpace) { // prevent space
            return false;
        }
    }
    /**
     * @param {?} $event
     * @param {?} inputIdx
     * @return {?}
     */
    onKeyUp($event, inputIdx) {
        /** @type {?} */
        const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
        /** @type {?} */
        const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
        if (this.ifRightArrow($event)) {
            this.setSelected(nextInputId);
            return;
        }
        if (this.ifLeftArrow($event)) {
            this.setSelected(prevInputId);
            return;
        }
        /** @type {?} */
        const isBackspace = this.ifBackspaceOrDelete($event);
        if (isBackspace && !$event.target.value) {
            this.setSelected(prevInputId);
            this.rebuildValue();
            return;
        }
        if (!$event.target.value) {
            return;
        }
        if (this.ifValidEntry($event)) {
            this.setSelected(nextInputId);
        }
        this.rebuildValue();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    appendKey(id) {
        return `${id}_${this.componentKey}`;
    }
    /**
     * @param {?} eleId
     * @return {?}
     */
    setSelected(eleId) {
        this.focusTo(eleId);
        /** @type {?} */
        const ele = document.getElementById(eleId);
        if (ele && ele.setSelectionRange) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                ele.setSelectionRange(0, 1);
            }), 0);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifValidEntry(event) {
        /** @type {?} */
        const inp = String.fromCharCode(event.keyCode);
        /** @type {?} */
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        return (isMobile ||
            /[a-zA-Z0-9-_]/.test(inp) ||
            (this.config.allowKeyCodes &&
                this.config.allowKeyCodes.includes(event.keyCode)) ||
            (event.keyCode >= 96 && event.keyCode <= 105));
    }
    /**
     * @param {?} eleId
     * @return {?}
     */
    focusTo(eleId) {
        /** @type {?} */
        const ele = document.getElementById(eleId);
        if (ele) {
            ele.focus();
        }
    }
    // method to set component value
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        if (this.config.allowNumbersOnly && isNaN(value)) {
            return;
        }
        this.otpForm.reset();
        if (!value) {
            this.rebuildValue();
            return;
        }
        value = value.toString().replace(/\s/g, ''); // remove whitespace
        Array.from(value).forEach((/**
         * @param {?} c
         * @param {?} idx
         * @return {?}
         */
        (c, idx) => {
            if (this.otpForm.get(this.getControlName(idx))) {
                this.otpForm.get(this.getControlName(idx)).setValue(c);
            }
        }));
        if (!this.config.disableAutoFocus) {
            /** @type {?} */
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            /** @type {?} */
            var indexOfElementToFocus = value.length < this.config.length ? value.length : (this.config.length - 1);
            /** @type {?} */
            let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];
            if (ele && ele.focus) {
                ele.focus();
            }
        }
        this.rebuildValue();
    }
    /**
     * @return {?}
     */
    rebuildValue() {
        /** @type {?} */
        let val = '';
        this.keysPipe.transform(this.otpForm.controls).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            if (this.otpForm.controls[k].value) {
                val += this.otpForm.controls[k].value;
            }
        }));
        this.onInputChange.emit(val);
    }
    /**
     * @return {?}
     */
    getInputType() {
        return this.config.isPasswordInput
            ? 'password'
            : this.config.allowNumbersOnly
                ? 'tel'
                : 'text';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handlePaste(e) {
        // Get pasted data via clipboard API
        /** @type {?} */
        let clipboardData = e.clipboardData || window['clipboardData'];
        if (clipboardData) {
            /** @type {?} */
            var pastedData = clipboardData.getData('Text');
        }
        // Stop data actually being pasted into div
        e.stopPropagation();
        e.preventDefault();
        if (!pastedData) {
            return;
        }
        this.setValue(pastedData);
    }
}
NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) { return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe)); };
NgOtpInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgOtpInputComponent, selectors: [["ng-otp-input"]], inputs: { config: "config" }, outputs: { onInputChange: "onInputChange" }, decls: 1, vars: 1, consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["numberOnly", "", "maxlength", "1", "autocomplete", "off", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "class", "formControl", "id", "keydown", "keyup", 4, "ngFor", "ngForOf"], ["numberOnly", "", "maxlength", "1", "autocomplete", "off", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "formControl", "id", "keydown", "keyup"]], template: function NgOtpInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], NumberOnlyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]]; }, pipes: function () { return [KeysPipe]; }, styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"] });
/** @nocollapse */
NgOtpInputComponent.ctorParameters = () => [
    { type: KeysPipe }
];
NgOtpInputComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ng-otp-input',
                template: "<div class=\"wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\" numberOnly [placeholder]=\"config?.placeholder || ''\"\r\n    [disabledNumberOnly]=\"!config.allowNumbersOnly\" [ngStyle]=\"config.inputStyles\" maxlength=\"1\"\r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"off\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" id=\"otp_{{i}}_{{componentKey}}\" (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event,i)\">\r\n</div>",
                styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input{width:30px;font-size:18px;height:30px}}"]
            }]
    }], function () { return [{ type: KeysPipe }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberOnlyDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.disabledNumberOnly) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0');
        }
    }
}
NumberOnlyDirective.ɵfac = function NumberOnlyDirective_Factory(t) { return new (t || NumberOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NumberOnlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NumberOnlyDirective, selectors: [["", "numberOnly", ""]], inputs: { disabledNumberOnly: "disabledNumberOnly" } });
/** @nocollapse */
NumberOnlyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
NumberOnlyDirective.propDecorators = {
    disabledNumberOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[numberOnly]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { disabledNumberOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgOtpInputModule {
}
NgOtpInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgOtpInputModule });
NgOtpInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgOtpInputModule_Factory(t) { return new (t || NgOtpInputModule)(); }, providers: [KeysPipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgOtpInputModule, { declarations: function () { return [NgOtpInputComponent, KeysPipe, NumberOnlyDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]; }, exports: function () { return [NgOtpInputComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
                ],
                declarations: [NgOtpInputComponent, KeysPipe, NumberOnlyDirective],
                exports: [NgOtpInputComponent],
                providers: [KeysPipe]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-otp-input.js.map

/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticatonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatonModule", function() { return AuthenticatonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/register/register.component */ "./src/app/authentication/register/register.component.ts");
/* harmony import */ var _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication/forgot-password/forgot-password.component */ "./src/app/authentication/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
/* harmony import */ var _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verify-otp/verify-otp.component */ "./src/app/authentication/verify-otp/verify-otp.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/authentication/reset-password/reset-password.component.ts");
/* harmony import */ var _design_component_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../design-component/skeleton/skeleton.module */ "./src/app/design-component/skeleton/skeleton.module.ts");













const routes = [
    { path: 'login', component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'forgot-password', component: _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"] },
    { path: 'register', component: _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: '', redirectTo: 'login' },
    { path: 'verify-otp', component: _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_8__["VerifyOtpComponent"] },
    { path: 'reset-password', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"] }
];
class AuthenticatonModule {
}
AuthenticatonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticatonModule });
AuthenticatonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticatonModule_Factory(t) { return new (t || AuthenticatonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"],
            _design_component_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_10__["SkeletonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticatonModule, { declarations: [_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
        _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"],
        _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_8__["VerifyOtpComponent"],
        _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"],
        _design_component_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_10__["SkeletonModule"]], exports: [_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
        _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticatonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                    _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
                    _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"],
                    _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_8__["VerifyOtpComponent"],
                    _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                    ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"],
                    _design_component_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_10__["SkeletonModule"]
                ],
                exports: [
                    _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                    _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
                    _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authentication/confirm-password.validator.ts":
/*!**************************************************************!*\
  !*** ./src/app/authentication/confirm-password.validator.ts ***!
  \**************************************************************/
/*! exports provided: ConfirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function() { return ConfirmPasswordValidator; });
function ConfirmPasswordValidator(controlName, matchingControlName) {
    return (formGroup) => {
        let control = formGroup.controls[controlName];
        let matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors &&
            !matchingControl.errors.confirmPasswordValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmPasswordValidator: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/authentication/forgot-password/forgot-password.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/forgot-password/forgot-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/design-component/custom-toaster/toaster.service */ "./src/app/design-component/custom-toaster/toaster.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ForgotPasswordComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter valid one.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_div_11_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotPasswordComponent_div_11_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.pattern);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ForgotPasswordComponent {
    constructor(router, service, newToast) {
        this.router = router;
        this.service = service;
        this.newToast = newToast;
        this.submitted = false;
        this.forgetPasswordFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]))
        });
    }
    ngOnInit() {
    }
    // for forget password api
    onSubmit() {
        this.submitted = true;
        var data = {
            "email": this.forgetPasswordFrom.value.email
        };
        if (this.forgetPasswordFrom.valid) {
            this.service.post(`customers/forgetpass`, data).subscribe((res) => {
                if (res.status == 200) {
                    this.newToast.success(res.message);
                    this.apiOtp = res.otp;
                    console.log(this.apiOtp);
                    this.router.navigate(['auth/verify-otp'], { queryParams: { apiOtp: this.apiOtp, email: data.email } });
                }
                else if (res.status == 400) {
                    this.newToast.warning("email Id not registered.");
                }
            }, (err) => {
                this.newToast.error("something went wrong");
            });
        }
    }
    // convenience getter for easy access to form fields
    get f() { return this.forgetPasswordFrom.controls; }
    // routing
    navigateToLogin() {
        this.router.navigateByUrl('auth/login');
    }
    navigateBack() {
        this.router.navigateByUrl('auth/login');
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 16, vars: 5, consts: [[1, "bi", "bi-arrow-left-short", "bi-icon-class", "backIcon", 3, "click"], [1, "header"], [1, "container", "mt-4"], [1, "row"], [1, "col-md-12"], [1, "mb-5", "p-5", "card-body"], [3, "formGroup"], [1, "form-group"], ["type", "email", "formControlName", "email", "placeholder", "Enter your registered email address", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "button", "name", "login", 1, "btn", "btn-primary", "btn-block", "loginbtn", 3, "click"], [1, "text-center", "mt-4", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_i_click_1_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Forget password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ForgotPasswordComponent_div_11_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CONTINUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_p_click_14_listener() { return ctx.navigateToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgetPasswordFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n  max-width: 500px;\n  height: 650px;\n  margin: 0 auto;\n  margin-top: 2px;\n}\n\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: bold;\n}\n\n.loginbtn[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: black;\n  border-radius: 0px;\n  background-color: black;\n  box-shadow: none !important;\n}\n\n.loginbtn[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.loginbtn[_ngcontent-%COMP%]:active {\n  color: #fff;\n  border-color: black !important;\n  background-color: black !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  line-height: 1.5;\n  text-align: center;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  height: 36px;\n  padding-left: 41px;\n  padding-top: 5px;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.bi-icon-class[_ngcontent-%COMP%] {\n  position: absolute !important;\n  font-size: 30px !important;\n  font-weight: 600 !important;\n  margin-left: 9px !important;\n  color: white;\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLGNBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSw0Q0FBQTtFQUVBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFDSTtFQUNJLHdCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxXQUFBO0VBQ0osOEJBQUE7RUFFQSxrQ0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib2R5IHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgIC8vIGJveC1zaGFkb3c6IDAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwgMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgwLDAsMCwuMTIpO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA2NTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiAycHg7XG59XG4uY29udGFpbmVyIGgye1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJyxcbiAgICAgIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxufVxuLmxvZ2luYnRue1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLmZvcm0tY29udHJvbHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMzZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQxcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5iYWNrSWNvbntcbiAgICBmb250LXNpemU6IDI1cHhcbn1cblxuLmJpLWljb24tY2xhc3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogOXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-password',
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"] }, { type: src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/url */ "./src/app/shared/url.ts");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/design-component/custom-toaster/toaster.service */ "./src/app/design-component/custom-toaster/toaster.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _design_component_custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../design-component/custom-spinner/custom-spinner.component */ "./src/app/design-component/custom-spinner/custom-spinner.component.ts");












function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-custom-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_1_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_div_14_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.required);
} }
function LoginComponent_div_1_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_div_17_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "BookUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LOGIN TO YOUR ACCOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_1_Template_form_ngSubmit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSubmit(ctx_r6.loginForm); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_1_div_14_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_1_div_17_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.navigateToForgetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Forgot password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Don't Have an account ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.navigateToSignup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Login in with Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.submitted && ctx_r1.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.f.email.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r1.submitted && ctx_r1.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.f.password.errors);
} }
class LoginComponent {
    constructor(formBuilder, apiService, route, activatedRoute, locationService, authService, toastService) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.locationService = locationService;
        this.authService = authService;
        this.toastService = toastService;
        this.submitted = false;
        this.isLoading = true;
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        // this.instanceLoader(true);
    }
    ngOnInit() {
        this.instanceLoader(false);
        this.activatedRoute.queryParams.subscribe(params => {
            if (params) {
                this.bookingData = params;
                window.history.pushState(null, '', 'auth/login');
            }
        });
    }
    ngAfterViewInit() {
        this.instanceLoader(false);
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit(form) {
        this.instanceLoader(true);
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            this.instanceLoader(false);
            return;
        }
        this.submitLogin(form);
    }
    submitLogin(form) {
        console.log(form);
        this.apiService.post(_shared_url__WEBPACK_IMPORTED_MODULE_2__["LOGIN"], form.value).subscribe(res => {
            console.log(res);
            this.instanceLoader(false);
            localStorage.setItem('customerLogin', JSON.stringify(res));
            localStorage.setItem('customerToken', res.token);
            if (this.bookingData && this.bookingData.pathUrl) {
                this.route.navigate([this.bookingData.pathUrl], { queryParams: this.bookingData });
            }
            else {
                this.route.navigateByUrl('main/home');
            }
            this.apiService.setLoginData(res);
            this.getPosition();
            // this.locationService.getPosition().then(res=>{
            //   console.log(res);
            //   this.locationService.getLocationPromise(res.lat,res.lng).then(res=>{
            //    console.log(res);
            //  },err=>{
            //   console.log(err);
            // });
            // //  console.log(this.locationService.getGeoLocation(res.lat, res.lng));
            // //  console.log(data);
            // })
            // console.log( this.apiService.setLoginData(res));
        }, err => {
            this.route.navigateByUrl('auth/login');
            this.toastService.error(err.body, false, 1000);
            setTimeout(() => {
                this.instanceLoader(false);
            }, 1000);
            // window.location.reload();
            console.log(err);
        });
    }
    getPosition() {
        this.getGeoLocation();
        // return new Promise((resolve, reject) => {
        //   navigator.geolocation.getCurrentPosition(resp => {
        //       console.log('something',resp);
        //       resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        //       this.getGeoLocation( );
        //       // if(this.currentLocation != ''){
        //       //     return this.currentLocation;
        //       // }
        //     },
        //     err => {
        //       reject(err);
        //     });
        // });
    }
    getGeoLocation() {
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
                            localStorage.setItem('customerLocation', JSON.stringify(results[0]));
                            console.log('current location ==>>', results[0]);
                            this.apiService.setCustomerLocation(results[0]);
                            if (this.currentLocation != '') {
                                return this.currentLocation;
                            }
                            console.log(this.assgin);
                        }
                        else {
                            console.log('Not found');
                        }
                    });
                }
            }, (error) => {
                return console.log(error);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition((position) => {
        //         if (position) {
        //             this.lat = position.coords.latitude;
        //             this.lng = position.coords.longitude;
        //             this.getAddress = (this.lat, this.lng)
        //             console.log('position yaha ayega',position)
        //             // this.apiloader.load().then(() => {
        //                 let geocoder = new google.maps.Geocoder;
        //                 let latlng = {
        //                     lat: this.lat,
        //                     lng: this.lng
        //                 };
        //                 geocoder.geocode({
        //                     'location': latlng
        //                 },(results:any)=> {
        //                     console.log(results);
        //                     if (results[0]) {
        //                         this.currentLocation = results[0];
        //                         localStorage.setItem('customerLocation',JSON.stringify(results[0]));
        //                         console.log('current location ==>>',results[0]);
        //                         if(this.currentLocation != ''){
        //                             return this.currentLocation;
        //                         }
        //                         console.log(this.assgin);
        //                     } else {
        //                         console.log('Not found');
        //                     }
        //                 });
        //             // });
        //         }
        //     })
        // }
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
    assgin(assgin) {
        throw new Error('Method not implemented.');
    }
    // routing
    navigateToSignup() {
        console.log(this.route.navigateByUrl('auth/register'));
    }
    navigateToForgetPassword() {
        this.route.navigateByUrl('auth/forgot-password');
    }
    instanceLoader(type) {
        type ? setTimeout(() => {
            this.isLoading = type;
        }, 1000) : setTimeout(() => {
            this.isLoading = type;
        }, 1000);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 2, consts: [["class", "parentLoader", 4, "ngIf"], ["class", "container mt-4", 4, "ngIf"], [1, "parentLoader"], [1, "container", "mt-4"], [1, "row"], [1, "col-md-12"], [1, "mb-5", "p-5", "card-body"], [1, "text-center"], [1, "text-warning"], ["src", "../../../assets/images/bookus-new.png"], [1, "text-align-center"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "formControlName", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "name", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass"], [1, "form-group", "mt-2", "text-right"], ["name", "forget_password", 1, "text", "font-weight-bold", 3, "click"], ["type", "submit", "name", "login", 1, "btn", "btn-primary", "btn-block", "rounded-pill", "loginbtn"], [1, "mt-3", "account1", "text-center"], [1, "mt-2", "account"], [1, "account", 3, "click"], [1, "row", "py-2"], [1, "col-5"], [1, "col-2", "text-center"], [1, "btn-fb"], [1, "fb-content"], [1, "logo"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "facebookbtn"], [1, "invalid-feedback"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 41, 9, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _design_component_custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_9__["CustomSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: [".card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: bold;\n}\n\n.account[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n}\n\n.account[_ngcontent-%COMP%] {\n  color: #91C73E;\n  text-align: center;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: #91C73E;\n  margin-left: 111px;\n  font-size: 14px;\n}\n\n.mt-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\n  margin-top: 1rem !important;\n  margin-left: 40px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 17px;\n  text-align: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-style: none;\n  width: 50%;\n  padding: 24px;\n}\n\n.facebookbtn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #3b5998;\n  border-color: #3b5998;\n  border-radius: 23px;\n}\n\n.facebookbtn[_ngcontent-%COMP%]:active {\n  color: #fff;\n  border-color: #3b5998 !important;\n  background-color: #3b5998 !important;\n}\n\n.loginbtn[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: black;\n  background-color: black;\n  box-shadow: none !important;\n}\n\n.loginbtn[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.loginbtn[_ngcontent-%COMP%]:active {\n  color: #fff;\n  border-color: black !important;\n  background-color: black !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  line-height: 1.5;\n  background-color: #9B948B;\n  text-align: center;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: white;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1SEFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksNENBQUE7RUFFQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQztFQUNHLGVBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTkk7RUFDSSxXQUFBO0VBQ0osZ0NBQUE7RUFDQSxvQ0FBQTtBQVFKOztBQUxBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQVFKOztBQVBJO0VBQ0ksd0JBQUE7QUFTUjs7QUFQSTtFQUNJLFdBQUE7RUFDSiw4QkFBQTtFQUNBLGtDQUFBO0FBU0o7O0FBTkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVNKOztBQVBBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFVSiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9keSB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAtbXMtZmxleDogMSAxIGF1dG87XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgcGFkZGluZzogMS4yNXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksIDAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksIDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lciBoMntcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsXG4gICAgICBUaW1lcywgc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cbi5hY2NvdW50e1xuICBjb2xvcjpibGFjazsgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hY2NvdW50e1xuICAgIGNvbG9yOiM5MUM3M0U7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuLnRleHR7XG4gICAgY29sb3I6IzkxQzczRTsgXG4gICAgbWFyZ2luLWxlZnQ6IDExMXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDsgXG59XG4ubXQtMywgLm15LTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0haW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuIHAge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMjRweDtcbn1cbi5mYWNlYm9va2J0bntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICAgIGJvcmRlci1jb2xvcjojM2I1OTk4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gICAgJjphY3RpdmUge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICAjM2I1OTk4IWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4IWltcG9ydGFudDtcbiAgICB9XG59XG4ubG9naW5idG57XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudFxuICAgIH1cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5mb3JtLWNvbnRyb2x7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlCOTQ4QjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogd2hpdGU7IFxuICAgIGZvbnQtc2l6ZTogMTJweFxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"] }, { type: src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"] }, { type: src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm-password.validator */ "./src/app/authentication/confirm-password.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/design-component/custom-toaster/toaster.service */ "./src/app/design-component/custom-toaster/toaster.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function RegisterComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "please enter valid one.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_10_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_10_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.firstname.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.firstname.errors.pattern);
} }
function RegisterComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "please enter valid one.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_13_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_13_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.lastname.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.lastname.errors.pattern);
} }
function RegisterComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "please enter valid one.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_16_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_16_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.pattern);
} }
function RegisterComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "please enter valid one.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_19_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_19_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.mobile.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.mobile.errors.pattern);
} }
function RegisterComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Minimum eight characters, At least one uppercase letter, At least one lowercase letter, At least one number, At least one special character, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_22_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_22_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.password.errors.pattern);
} }
function RegisterComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password Mismatch.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_25_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_25_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.confirmpassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.registerForm.value.password !== ctx_r5.registerForm.value.confirmpassword);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class RegisterComponent {
    constructor(formBuilder, route, service, newToast) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
        this.newToast = newToast;
        this.submitted = false;
        this.loginData = {};
        this.GetCurrentLocation();
        this.registerForm = this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z][a-zA-Z\\s]+$')])],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z][a-zA-Z\\s]+$')])],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: Object(_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__["ConfirmPasswordValidator"])("password", "confirmpassword")
        });
        // this.loginData=JSON.parse(localStorage.getItem('customerLogin')!)
    }
    passwordMatchValidator(frm) {
        return frm.controls['password'].value ===
            frm.controls['confirmpassword'].value ? null : { 'mismatch': true };
    }
    ngOnInit() {
    }
    // code to allow location permission
    GetCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.ShowLocation(position, this.map);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    ShowLocation(position, map) {
        this.lng = +position.coords.longitude;
        this.lat = +position.coords.latitude;
        console.log(position.coords.latitude);
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        // for sign up api
        else {
            let data = {
                "email": this.registerForm.value.email,
                "firstName": this.registerForm.value.firstname,
                "geo_location": {
                    "coordinates": [this.lat, this.lng],
                    "type": "Point"
                },
                "lastName": this.registerForm.value.lastname,
                "mobile": this.registerForm.value.mobile,
                "password": this.registerForm.value.password,
                "notifyBy": "Email",
            };
            if (this.registerForm.valid) {
                this.service.post(`customers`, data).subscribe((res) => {
                    if (res.status == 200) {
                        this.newToast.success(res.message);
                        // this.redirectLogin();
                        this.route.navigateByUrl('/auth/login');
                    }
                    if (res.status == 409) {
                        this.newToast.info("customer already register.");
                        // customer already register
                    }
                }, (err) => {
                    this.newToast.error("something went wrong");
                });
            }
        }
    }
    redirectLogin() {
        this.route.navigateByUrl('auth/login');
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 45, vars: 25, consts: [[1, "container", "mt-4"], [1, "row"], [1, "col-md-12"], [1, "mb-5", "p-5", "card-body"], [1, "text-center"], [1, "text-warning"], ["src", "../../../assets/images/BookUs_logo.png"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "firstname", "placeholder", "First Name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "lastname", "placeholder", "Last Name", 1, "form-control", 3, "ngClass"], ["type", "email", "formControlName", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "mobile", "placeholder", "Mobile", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "confirmpassword", "placeholder", "Confirm Password", 1, "form-control", 3, "ngClass"], ["type", "submit", "name", "login", 1, "btn", "btn-primary", "btn-block", "rounded-pill", "loginbtn"], [1, "row", "py-2"], [1, "col-5"], [1, "col-2", "text-center"], [1, "btn-fb"], [1, "fb-content"], [1, "logo"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "facebookbtn"], [1, "mt-5", "account1", "text-center"], [3, "click"], [1, "invalid-feedback"], [4, "ngIf"], ["class", "error-msg", 4, "ngIf"], [1, "error-msg"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegisterComponent_div_10_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterComponent_div_16_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_div_22_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_div_25_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Login in with Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Don't Have an account ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_43_listener() { return ctx.redirectLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.firstname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstname.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.lastname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.lastname.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.f.mobile.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.mobile.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.submitted && ctx.f.confirmpassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.confirmpassword.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: bold;\n}\n\n.account[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n}\n\n.account[_ngcontent-%COMP%] {\n  color: #91C73E;\n  text-align: center;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: #91C73E;\n  margin-left: 111px;\n  font-size: 14px;\n}\n\n.mt-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\n  margin-top: 1rem !important;\n  margin-left: 40px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 17px;\n  text-align: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-style: none;\n  width: 50%;\n  padding: 24px !important;\n}\n\n.facebookbtn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #3b5998;\n  border-color: #3b5998;\n  border-radius: 23px;\n}\n\n.facebookbtn[_ngcontent-%COMP%]:active {\n  color: #fff;\n  border-color: #3b5998 !important;\n  background-color: #3b5998 !important;\n}\n\n.loginbtn[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: black;\n  border-radius: 0px;\n  background-color: black;\n  box-shadow: none !important;\n}\n\n.loginbtn[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.loginbtn[_ngcontent-%COMP%]:active {\n  color: #fff;\n  border-color: black !important;\n  background-color: black !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  line-height: 1.5;\n  background-color: #9B948B;\n  text-align: center;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: white;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1SEFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksNENBQUE7RUFFQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQztFQUNHLGVBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQU9KOztBQU5JO0VBQ0ksV0FBQTtFQUNKLGdDQUFBO0VBQ0Esb0NBQUE7QUFRSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQVFKOztBQVBJO0VBQ0ksd0JBQUE7QUFTUjs7QUFQSTtFQUNJLFdBQUE7RUFDSiw4QkFBQTtFQUVBLGtDQUFBO0FBUUo7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVFKOztBQU5BO0VBQWdCLHlDQUFBO0VBQ1osWUFBQTtFQUNBLGVBQUE7QUFVSiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9keSB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAtbXMtZmxleDogMSAxIGF1dG87XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgcGFkZGluZzogMS4yNXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksIDAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksIDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lciBoMntcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsXG4gICAgICBUaW1lcywgc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cbi5hY2NvdW50e1xuICBjb2xvcjpibGFjazsgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hY2NvdW50e1xuICAgIGNvbG9yOiM5MUM3M0U7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuLnRleHR7XG4gICAgY29sb3I6IzkxQzczRTsgXG4gICAgbWFyZ2luLWxlZnQ6IDExMXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDsgXG59XG4ubXQtMywgLm15LTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0haW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuIHAge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMjRweCAhaW1wb3J0YW50O1xufVxuLmZhY2Vib29rYnRue1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gICAgYm9yZGVyLWNvbG9yOiMzYjU5OTg7XG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogICMzYjU5OTghaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTghaW1wb3J0YW50O1xuICAgIH1cbn1cbi5sb2dpbmJ0bntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudFxuICAgIH1cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5mb3JtLWNvbnRyb2x7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlCOTQ4QjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gICAgY29sb3I6IHdoaXRlOyBcbiAgICBmb250LXNpemU6IDEycHhcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"] }, { type: src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/reset-password/reset-password.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/authentication/reset-password/reset-password.component.ts ***!
  \***************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm-password.validator */ "./src/app/authentication/confirm-password.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/design-component/custom-toaster/toaster.service */ "./src/app/design-component/custom-toaster/toaster.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function ResetPasswordComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter valid one.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_div_11_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_div_11_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors.pattern);
} }
function ResetPasswordComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "confirmpassword is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter valid one.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password Mismatch.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_div_14_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_div_14_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResetPasswordComponent_div_14_div_3_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.confirmpassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.confirmpassword.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.resetPasswordFrom.value.password !== ctx_r1.resetPasswordFrom.value.confirmpassword);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ResetPasswordComponent {
    constructor(active, service, router, formBuilder, newToast) {
        this.active = active;
        this.service = service;
        this.router = router;
        this.formBuilder = formBuilder;
        this.newToast = newToast;
        this.submitted = false;
        this.resetPasswordFrom = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, {
            validator: Object(_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__["ConfirmPasswordValidator"])("password", "confirmpassword")
        });
        this.active.queryParams.subscribe((params) => {
            this.email = params.email;
            this.apiOtp = params.apiOtp;
            console.log(this.email, this.apiOtp);
        });
    }
    passwordMatchValidator(frm) {
        return frm.controls['password'].value ===
            frm.controls['confirmpassword'].value ? null : { 'mismatch': true };
    }
    ngOnInit() {
    }
    // api to reset password
    confirm() {
        this.submitted = true;
        let data = {
            'email': this.email,
            'otp': this.apiOtp,
            'password': this.resetPasswordFrom.value.password
        };
        if (this.resetPasswordFrom.valid) {
            this.service.post(`customers/resetpass`, data).subscribe((res) => {
                if (res.status == 200) {
                    this.newToast.success(res.message);
                    this.router.navigate(['auth/login']);
                }
            }, (err) => {
                this.newToast.error("something went wrong");
            });
        }
    }
    // convenience getter for easy access to form fields
    get f() { return this.resetPasswordFrom.controls; }
    navigateBack() {
        this.router.navigateByUrl('auth/forgot-password');
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 17, vars: 9, consts: [[1, "bi", "bi-arrow-left-short", "bi-icon-class", "backIcon", 3, "click"], [1, "header"], [1, "container", "mt-4"], [1, "row"], [1, "col-md-12"], [1, "mb-5", "p-5", "card-body"], [3, "formGroup"], [1, "form-group"], ["type", "password", "value", "12345678", "formControlName", "password", "placeholder", "New Password", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "email", "formControlName", "confirmpassword", "placeholder", "Confirm Password", 1, "form-control", 3, "ngClass"], ["type", "button", "name", "login", 1, "btn", "btn-primary", "btn-block", "loginbtn", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], ["class", "error-msg", 4, "ngIf"], [1, "error-msg"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_i_click_1_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResetPasswordComponent_div_11_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResetPasswordComponent_div_14_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_15_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CONFIRM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resetPasswordFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.confirmpassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.confirmpassword.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n  max-width: 500px;\n  height: 650px;\n  margin: 0 auto;\n  margin-top: 2px;\n}\n\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: bold;\n}\n\n.loginbtn[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: black;\n  border-radius: 0px;\n  background-color: black;\n  box-shadow: none !important;\n}\n\n.loginbtn[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.loginbtn[_ngcontent-%COMP%]:active {\n  color: #fff;\n  border-color: black !important;\n  background-color: black !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  line-height: 1.5;\n  text-align: center;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  height: 36px;\n  padding-left: 41px;\n  padding-top: 5px;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.bi-icon-class[_ngcontent-%COMP%] {\n  position: absolute !important;\n  font-size: 30px !important;\n  font-weight: 600 !important;\n  margin-left: 9px !important;\n  color: white;\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxjQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksNENBQUE7RUFFQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBQ0k7RUFDSSx3QkFBQTtBQUNSOztBQUNJO0VBQ0ksV0FBQTtFQUNKLDhCQUFBO0VBRUEsa0NBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHkge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgLy8gYm94LXNoYWRvdzogMCA4cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsLjIpLCAwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLCAwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMik7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDY1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cbi5jb250YWluZXIgaDJ7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLFxuICAgICAgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG4ubG9naW5idG57XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnRcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICB9XG59XG4uZm9ybS1jb250cm9se1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIHBhZGRpbmctbGVmdDogNDFweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmJhY2tJY29ue1xuICAgIGZvbnQtc2l6ZTogMjVweFxufVxuXG4uYmktaWNvbi1jbGFzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA5cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password',
                templateUrl: './reset-password.component.html',
                styleUrls: ['./reset-password.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/verify-otp/verify-otp.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/authentication/verify-otp/verify-otp.component.ts ***!
  \*******************************************************************/
/*! exports provided: VerifyOtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyOtpComponent", function() { return VerifyOtpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/design-component/custom-toaster/toaster.service */ "./src/app/design-component/custom-toaster/toaster.service.ts");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-otp-input */ "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");






class VerifyOtpComponent {
    constructor(active, router, service, newToast) {
        this.active = active;
        this.router = router;
        this.service = service;
        this.newToast = newToast;
        this.config = {
            allowNumbersOnly: true,
            length: 4,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
                'width': '50px',
                'height': '50px'
            }
        };
        this.active.queryParams.subscribe((params) => {
            this.apiOtp = params.apiOtp;
            this.email = params.email;
            console.log('dfs', this.email);
        });
    }
    ngOnInit() {
    }
    onOtpChange(otp) {
        this.otp = otp;
        console.log(this.otp);
    }
    // otp verify check and route to reset password
    verify() {
        if (this.apiOtp = this.otp) {
            // this.newToast.success("Otp verified successfully.")
            this.router.navigate(['auth/reset-password'], { queryParams: { email: this.email, apiOtp: this.apiOtp } });
        }
        // else if(this.apiOtp!=this.otp){
        //   this.newToast.warning(" Enter valid otp ")
        // }
    }
    // api for resend otp 
    resend() {
        let data = {
            "email": this.email
        };
        this.service.post(`customers/forgetpass`, data).subscribe((res) => {
            if (res.status == 200) {
                this.newToast.success(res.message);
            }
            else if (res.status == 400) {
                // this.newToast.info('')
            }
        }, (err) => {
            this.newToast.error("something went wrong.");
        });
    }
    navigateBack() {
        this.router.navigateByUrl('auth/forgot-password');
    }
}
VerifyOtpComponent.ɵfac = function VerifyOtpComponent_Factory(t) { return new (t || VerifyOtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_2__["ApiServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])); };
VerifyOtpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerifyOtpComponent, selectors: [["app-verify-otp"]], decls: 17, vars: 1, consts: [[1, "bi", "bi-arrow-left-short", "bi-icon-class", "backIcon", 3, "click"], [1, "header"], [1, "otp-wrapper"], [1, "container"], [1, "card"], [1, "a-o-i"], ["placeholder", "0", 3, "config", "onInputChange"], ["ngOtpInput", ""], [1, "mt-4", "resend", 3, "click"], [1, "verify", 3, "click"]], template: function VerifyOtpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyOtpComponent_Template_i_click_1_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter Otp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter Otp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Verification code has been sent to your registered email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ng-otp-input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputChange", function VerifyOtpComponent_Template_ng_otp_input_onInputChange_11_listener($event) { return ctx.onOtpChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyOtpComponent_Template_p_click_13_listener() { return ctx.resend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Resend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyOtpComponent_Template_button_click_15_listener() { return ctx.verify(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
    } }, directives: [ng_otp_input__WEBPACK_IMPORTED_MODULE_4__["ɵa"]], styles: [".a-o-i[_ngcontent-%COMP%], .a-o-i-t[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin-top: 0;\n}\n\n.a-o-i-t[_ngcontent-%COMP%] {\n  font-size: 25px;\n  padding: 15px;\n  border-bottom: 1px solid lightgray;\n}\n\n.o-t-p[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n  font-size: 19px;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n  border-radius: 4px;\n  background: white;\n  text-align: center;\n  width: 550px;\n  margin: 0 auto;\n}\n\n@media all and (max-width: 767px) {\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.otp-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.resend[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  text-align: end;\n  margin-right: 2px;\n}\n\n.verify[_ngcontent-%COMP%] {\n  background-color: black;\n  \n  border: black;\n  \n  height: 41px;\n  color: white;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  height: 36px;\n  padding-left: 41px;\n  padding-top: 5px;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.bi-icon-class[_ngcontent-%COMP%] {\n  position: absolute !important;\n  font-size: 30px !important;\n  font-weight: 600 !important;\n  margin-left: 9px !important;\n  color: white;\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vdmVyaWZ5LW90cC92ZXJpZnktb3RwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBRUUsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFBRTtFQVJGO0lBU00sV0FBQTtFQUdKO0FBQ0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFHRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdGOztBQUFBO0VBQ0UsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdBOztBQURBO0VBQ0EsZUFBQTtBQUlBOztBQURBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFJQSIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3ZlcmlmeS1vdHAvdmVyaWZ5LW90cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hLW8taSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5hLW8taS10IHtcbiAgQGV4dGVuZCAuYS1vLWk7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLm8tdC1wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmNhcmQge1xuICBwYWRkaW5nOiAycmVtO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjZDRkNGQ1LCAwIDAgMCAxcHggI2Q0ZDRkNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNTUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG59XG4ub3RwLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJlc2VuZHtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIG1hcmdpbi1yaWdodDogMnB4XG5cbn1cbi52ZXJpZnl7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAvKiBib3JkZXItYmxvY2stY29sb3I6IGJsYWNrOyAqL1xuICBib3JkZXI6IGJsYWNrO1xuICAvKiB3aWR0aDogNTBweDsgKi9cbiAgaGVpZ2h0OiA0MXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbmNvbG9yOiB3aGl0ZTtcbmhlaWdodDogMzZweDtcbnBhZGRpbmctbGVmdDogNDFweDtcbnBhZGRpbmctdG9wOiA1cHg7XG59XG4uYmFja0ljb257XG5mb250LXNpemU6IDI1cHhcbn1cblxuLmJpLWljb24tY2xhc3Mge1xucG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5mb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbmZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbm1hcmdpbi1sZWZ0OiA5cHggIWltcG9ydGFudDtcbmNvbG9yOiB3aGl0ZTtcbm1hcmdpbi10b3A6IC0xMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerifyOtpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-verify-otp',
                templateUrl: './verify-otp.component.html',
                styleUrls: ['./verify-otp.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_2__["ApiServicesService"] }, { type: src_app_design_component_custom_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/design-component/custom-spinner/custom-spinner.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/design-component/custom-spinner/custom-spinner.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSpinnerComponent", function() { return CustomSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CustomSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomSpinnerComponent.ɵfac = function CustomSpinnerComponent_Factory(t) { return new (t || CustomSpinnerComponent)(); };
CustomSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomSpinnerComponent, selectors: [["app-custom-spinner"]], decls: 3, vars: 0, consts: [[1, "spinner-wrapper"], [1, "inner-spinner"], ["src", "../../../assets/images/35.gif"]], template: function CustomSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".spinner-wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n}\n.spinner-wrapper[_ngcontent-%COMP%]   .inner-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduLWNvbXBvbmVudC9jdXN0b20tc3Bpbm5lci9jdXN0b20tc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvZGVzaWduLWNvbXBvbmVudC9jdXN0b20tc3Bpbm5lci9jdXN0b20tc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyLXdyYXBwZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xuICAgIC5pbm5lci1zcGlubmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-spinner',
                templateUrl: './custom-spinner.component.html',
                styleUrls: ['./custom-spinner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/design-component/custom-spinner/customer-spinner.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/design-component/custom-spinner/customer-spinner.module.ts ***!
  \****************************************************************************/
/*! exports provided: CustomSpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSpinnerModule", function() { return CustomSpinnerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




class CustomSpinnerModule {
}
CustomSpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomSpinnerModule });
CustomSpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomSpinnerModule_Factory(t) { return new (t || CustomSpinnerModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomSpinnerModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomSpinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
                ],
                exports: [],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/design-component/skeleton/skeleton.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/design-component/skeleton/skeleton.component.ts ***!
  \*****************************************************************/
/*! exports provided: SkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonComponent", function() { return SkeletonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SkeletonComponent {
    constructor() {
        this.skeletonData = '';
    }
    ngOnInit() {
        // console.log('hello world',this.skeletonData);
    }
    ngOnChanges() {
        // console.log('no data string value==>>>', this.skeletonData);
    }
}
SkeletonComponent.ɵfac = function SkeletonComponent_Factory(t) { return new (t || SkeletonComponent)(); };
SkeletonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkeletonComponent, selectors: [["app-skeleton"]], inputs: { skeletonData: "skeletonData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 1, consts: [[1, "col-12", "text-center"], [1, "notAvailable-img"], ["src", "../../../assets/images/no_image.png", 1, "img-class"]], template: function SkeletonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.skeletonData);
    } }, styles: [".notAvailable-img[_ngcontent-%COMP%] {\n  width: 200px;\n  margin: 0 auto;\n}\n.notAvailable-img[_ngcontent-%COMP%]   .img-class[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduLWNvbXBvbmVudC9za2VsZXRvbi9za2VsZXRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBQUo7QUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9kZXNpZ24tY29tcG9uZW50L3NrZWxldG9uL3NrZWxldG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubm90QXZhaWxhYmxlLWltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC5pbWctY2xhc3Mge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkeletonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skeleton',
                templateUrl: './skeleton.component.html',
                styleUrls: ['./skeleton.component.scss']
            }]
    }], function () { return []; }, { skeletonData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/design-component/skeleton/skeleton.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/design-component/skeleton/skeleton.module.ts ***!
  \**************************************************************/
/*! exports provided: SkeletonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonModule", function() { return SkeletonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _skeleton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skeleton.component */ "./src/app/design-component/skeleton/skeleton.component.ts");
/* harmony import */ var _custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-spinner/custom-spinner.component */ "./src/app/design-component/custom-spinner/custom-spinner.component.ts");
/* harmony import */ var _custom_spinner_customer_spinner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-spinner/customer-spinner.module */ "./src/app/design-component/custom-spinner/customer-spinner.module.ts");






class SkeletonModule {
}
SkeletonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SkeletonModule });
SkeletonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SkeletonModule_Factory(t) { return new (t || SkeletonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _custom_spinner_customer_spinner_module__WEBPACK_IMPORTED_MODULE_4__["CustomSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SkeletonModule, { declarations: [_skeleton_component__WEBPACK_IMPORTED_MODULE_2__["SkeletonComponent"], _custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_3__["CustomSpinnerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _custom_spinner_customer_spinner_module__WEBPACK_IMPORTED_MODULE_4__["CustomSpinnerModule"]], exports: [_skeleton_component__WEBPACK_IMPORTED_MODULE_2__["SkeletonComponent"], _custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_3__["CustomSpinnerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkeletonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_skeleton_component__WEBPACK_IMPORTED_MODULE_2__["SkeletonComponent"], _custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_3__["CustomSpinnerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _custom_spinner_customer_spinner_module__WEBPACK_IMPORTED_MODULE_4__["CustomSpinnerModule"]
                ],
                exports: [
                    _skeleton_component__WEBPACK_IMPORTED_MODULE_2__["SkeletonComponent"], _custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_3__["CustomSpinnerComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/url.ts":
/*!*******************************!*\
  !*** ./src/app/shared/url.ts ***!
  \*******************************/
/*! exports provided: LOGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
const LOGIN = 'customers/login';


/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map