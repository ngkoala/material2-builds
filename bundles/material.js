/**
  * @license Angular Material v2.0.0-beta.2
  * Copyright (c) 2017 Google, Inc. https://material.angular.io/
  * License: MIT
  */
import { ApplicationRef, Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ContentChild, ContentChildren, Directive, ElementRef, EventEmitter, Host, HostBinding, Inject, Injectable, Injector, Input, NgModule, NgZone, OpaqueToken, Optional, Output, QueryList, Renderer, SecurityContext, Self, SkipSelf, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation, animate, forwardRef, isDevMode, state, style, transition, trigger } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/auditTime';
import { DomSanitizer, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { FormsModule, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/first';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/switchMap';

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const MATERIAL_COMPATIBILITY_MODE = new OpaqueToken('md-compatibility-mode');
/** Selector that matches all elements that may have style collisions with AngularJS Material. */
const MAT_ELEMENTS_SELECTOR = `
  [mat-button],
  [mat-dialog-actions],
  [mat-dialog-close],
  [mat-dialog-content],
  [mat-dialog-title],
  [mat-fab],
  [mat-icon-button],
  [mat-menu-trigger-for],
  [mat-mini-fab],
  [mat-raised-button],
  [mat-tab-label],
  [mat-tab-link],
  [mat-tab-nav-bar],
  [matTooltip],
  mat-autocomplete,
  mat-button-toggle,
  mat-button-toggle-group,
  mat-button-toggle,
  mat-card,
  mat-card-actions,
  mat-card-content,
  mat-card-footer,
  mat-card-header,
  mat-card-subtitle,
  mat-card-title,
  mat-card-title-group,
  mat-checkbox,
  mat-chip,
  mat-dialog-actions,
  mat-dialog-container,
  mat-dialog-content,
  mat-divider,
  mat-grid-list,
  mat-grid-tile,
  mat-grid-tile-footer,
  mat-grid-tile-header,
  mat-hint,
  mat-icon,
  mat-list,
  mat-list-item,
  mat-menu,
  mat-nav-list,
  mat-option,
  mat-placeholder,
  mat-progress-bar,
  mat-progress-circle,
  mat-pseudo-checkbox,
  mat-radio-button,
  mat-radio-group,
  mat-select,
  mat-sidenav,
  mat-sidenav-container,
  mat-slider,
  mat-spinner,
  mat-tab,
  mat-tab-group,
  mat-toolbar`;
/** Selector that matches all elements that may have style collisions with AngularJS Material. */
const MD_ELEMENTS_SELECTOR = `  
  [md-button],
  [md-dialog-actions],
  [md-dialog-close],
  [md-dialog-content],
  [md-dialog-title],
  [md-fab],
  [md-icon-button],
  [md-menu-trigger-for],
  [md-mini-fab],
  [md-raised-button],
  [md-tab-label],
  [md-tab-link],
  [md-tab-nav-bar],
  [mdTooltip],
  md-autocomplete,
  md-button-toggle,
  md-button-toggle-group,
  md-button-toggle,
  md-card,
  md-card-actions,
  md-card-content,
  md-card-footer,
  md-card-header,
  md-card-subtitle,
  md-card-title,
  md-card-title-group,
  md-checkbox,
  md-chip,
  md-dialog-actions,
  md-dialog-container,
  md-dialog-content,
  md-divider,
  md-grid-list,
  md-grid-tile,
  md-grid-tile-footer,
  md-grid-tile-header,
  md-hint,
  md-icon,
  md-list,
  md-list-item,
  md-menu,
  md-nav-list,
  md-option,
  md-placeholder,
  md-progress-bar,
  md-progress-circle,
  md-pseudo-checkbox,
  md-radio-button,
  md-radio-group,
  md-select,
  md-sidenav,
  md-sidenav-container,
  md-slider,
  md-spinner,
  md-tab,
  md-tab-group,
  md-toolbar`;
/** Directive that enforces that the `mat-` prefix cannot be used. */
let MatPrefixRejector = class MatPrefixRejector {
    constructor(isCompatibilityMode) {
        if (!isCompatibilityMode) {
            throw Error('The "mat-" prefix cannot be used out of ng-material v1 compatibility mode.');
        }
    }
};
MatPrefixRejector = __decorate$2([
    Directive({ selector: MAT_ELEMENTS_SELECTOR }),
    __param(0, Optional()),
    __param(0, Inject(MATERIAL_COMPATIBILITY_MODE)), 
    __metadata$2('design:paramtypes', [Boolean])
], MatPrefixRejector);
/** Directive that enforces that the `md-` prefix cannot be used. */
let MdPrefixRejector = class MdPrefixRejector {
    constructor(isCompatibilityMode) {
        if (isCompatibilityMode) {
            throw Error('The "md-" prefix cannot be used in ng-material v1 compatibility mode.');
        }
    }
};
MdPrefixRejector = __decorate$2([
    Directive({ selector: MD_ELEMENTS_SELECTOR }),
    __param(0, Optional()),
    __param(0, Inject(MATERIAL_COMPATIBILITY_MODE)), 
    __metadata$2('design:paramtypes', [Boolean])
], MdPrefixRejector);
/**
 * Module that enforces the default compatibility mode settings. When this module is loaded
 * without NoConflictStyleCompatibilityMode also being imported, it will throw an error if
 * there are any uses of the `mat-` prefix.
 */
let CompatibilityModule_1 = class CompatibilityModule {
    static forRoot() {
        return {
            ngModule: CompatibilityModule_1,
            providers: [],
        };
    }
};
let CompatibilityModule = CompatibilityModule_1;
CompatibilityModule = CompatibilityModule_1 = __decorate$2([
    NgModule({
        declarations: [MatPrefixRejector, MdPrefixRejector],
        exports: [MatPrefixRejector, MdPrefixRejector],
    }), 
    __metadata$2('design:paramtypes', [])
], CompatibilityModule);
/**
 * Module that enforces "no-conflict" compatibility mode settings. When this module is loaded,
 * it will throw an error if there are any uses of the `md-` prefix.
 */
let NoConflictStyleCompatibilityMode = class NoConflictStyleCompatibilityMode {
};
NoConflictStyleCompatibilityMode = __decorate$2([
    NgModule({
        providers: [{
                provide: MATERIAL_COMPATIBILITY_MODE, useValue: true,
            }],
    }), 
    __metadata$2('design:paramtypes', [])
], NoConflictStyleCompatibilityMode);

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(MdLine) query, then
 * counted by checking the query list's length.
 */
let MdLine = class MdLine {
};
MdLine = __decorate$1([
    Directive({
        selector: '[md-line], [mat-line]',
        host: {
            '[class.mat-line]': 'true'
        }
    }), 
    __metadata$1('design:paramtypes', [])
], MdLine);
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */
class MdLineSetter {
    constructor(_lines, _renderer, _element) {
        this._lines = _lines;
        this._renderer = _renderer;
        this._element = _element;
        this._setLineClass(this._lines.length);
        this._lines.changes.subscribe(() => {
            this._setLineClass(this._lines.length);
        });
    }
    _setLineClass(count) {
        this._resetClasses();
        if (count === 2 || count === 3) {
            this._setClass(`mat-${count}-line`, true);
        }
        else if (count > 3) {
            this._setClass(`mat-multi-line`, true);
        }
    }
    _resetClasses() {
        this._setClass('mat-2-line', false);
        this._setClass('mat-3-line', false);
        this._setClass('mat-multi-line', false);
    }
    _setClass(className, bool) {
        this._renderer.setElementClass(this._element.nativeElement, className, bool);
    }
}
let MdLineModule = class MdLineModule {
};
MdLineModule = __decorate$1([
    NgModule({
        imports: [CompatibilityModule],
        exports: [MdLine, CompatibilityModule],
        declarations: [MdLine],
    }), 
    __metadata$1('design:paramtypes', [])
], MdLineModule);

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Applications should use this directive instead of the native attribute so that Material
 * components can listen on changes of direction.
 */
let Dir = class Dir {
    constructor() {
        /** Layout direction of the element. */
        this._dir = 'ltr';
        /** Event emitted when the direction changes. */
        this.dirChange = new EventEmitter();
    }
    /** @docs-private */
    get dir() {
        return this._dir;
    }
    set dir(v) {
        let old = this._dir;
        this._dir = v;
        if (old != this._dir) {
            this.dirChange.emit();
        }
    }
    /** Current layout direction of the element. */
    get value() { return this.dir; }
    set value(v) { this.dir = v; }
};
__decorate$3([
    Input('dir'), 
    __metadata$3('design:type', String)
], Dir.prototype, "_dir", void 0);
__decorate$3([
    Output(), 
    __metadata$3('design:type', Object)
], Dir.prototype, "dirChange", void 0);
__decorate$3([
    HostBinding('attr.dir'), 
    __metadata$3('design:type', String)
], Dir.prototype, "dir", null);
Dir = __decorate$3([
    Directive({
        selector: '[dir]',
        // TODO(hansl): maybe `$implicit` isn't the best option here, but for now that's the best we got.
        exportAs: '$implicit'
    }), 
    __metadata$3('design:paramtypes', [])
], Dir);
let RtlModule_1 = class RtlModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: RtlModule_1,
            providers: []
        };
    }
};
let RtlModule = RtlModule_1;
RtlModule = RtlModule_1 = __decorate$3([
    NgModule({
        exports: [Dir],
        declarations: [Dir]
    }), 
    __metadata$3('design:paramtypes', [])
], RtlModule);

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
let ObserveContent = class ObserveContent {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        /** Event emitted for each change in the element's content. */
        this.event = new EventEmitter();
    }
    ngAfterContentInit() {
        this._observer = new MutationObserver(mutations => mutations.forEach(() => this.event.emit()));
        this._observer.observe(this._elementRef.nativeElement, {
            characterData: true,
            childList: true,
            subtree: true
        });
    }
    ngOnDestroy() {
        if (this._observer) {
            this._observer.disconnect();
        }
    }
};
__decorate$4([
    Output('cdkObserveContent'), 
    __metadata$4('design:type', Object)
], ObserveContent.prototype, "event", void 0);
ObserveContent = __decorate$4([
    Directive({
        selector: '[cdkObserveContent]'
    }), 
    __metadata$4('design:paramtypes', [ElementRef])
], ObserveContent);
let ObserveContentModule_1 = class ObserveContentModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: ObserveContentModule_1,
            providers: []
        };
    }
};
let ObserveContentModule = ObserveContentModule_1;
ObserveContentModule = ObserveContentModule_1 = __decorate$4([
    NgModule({
        exports: [ObserveContent],
        declarations: [ObserveContent]
    }), 
    __metadata$4('design:paramtypes', [])
], ObserveContentModule);

// Due to a bug in the ChromeDriver, Angular keyboard events are not triggered by `sendKeys`
// during E2E tests when using dot notation such as `(keydown.rightArrow)`. To get around this,
// we are temporarily using a single (keydown) handler.
// See: https://github.com/angular/angular/issues/9419
const UP_ARROW = 38;
const DOWN_ARROW = 40;
const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const HOME = 36;
const END = 35;
const ENTER = 13;
const SPACE = 32;
const TAB = 9;
const ESCAPE = 27;
const BACKSPACE = 8;
const DELETE = 46;

/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}

/** Possible states for a ripple element. */
var RippleState;
(function (RippleState) {
    RippleState[RippleState["FADING_IN"] = 0] = "FADING_IN";
    RippleState[RippleState["VISIBLE"] = 1] = "VISIBLE";
    RippleState[RippleState["FADING_OUT"] = 2] = "FADING_OUT";
    RippleState[RippleState["HIDDEN"] = 3] = "HIDDEN";
})(RippleState || (RippleState = {}));
/**
 * Reference to a previously launched ripple element.
 */
class RippleRef {
    constructor(_renderer, element, config) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /** Current state of the ripple reference. */
        this.state = RippleState.HIDDEN;
    }
    /** Fades out the ripple element. */
    fadeOut() {
        this._renderer.fadeOutRipple(this);
    }
}

/** Fade-in duration for the ripples. Can be modified with the speedFactor option. */
const RIPPLE_FADE_IN_DURATION = 450;
/** Fade-out duration for the ripples in milliseconds. This can't be modified by the speedFactor. */
const RIPPLE_FADE_OUT_DURATION = 400;
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * @docs-private
 */
class RippleRenderer {
    constructor(_elementRef, _ngZone, _ruler) {
        this._ngZone = _ngZone;
        this._ruler = _ruler;
        /** Whether the mouse is currently down or not. */
        this._isMousedown = false;
        /** Events to be registered on the trigger element. */
        this._triggerEvents = new Map();
        /** Set of currently active ripple references. */
        this._activeRipples = new Set();
        /** Ripple config for all ripples created by events. */
        this.rippleConfig = {};
        /** Whether mouse ripples should be created or not. */
        this.rippleDisabled = false;
        this._containerElement = _elementRef.nativeElement;
        // Specify events which need to be registered on the trigger.
        this._triggerEvents.set('mousedown', this.onMousedown.bind(this));
        this._triggerEvents.set('mouseup', this.onMouseup.bind(this));
        this._triggerEvents.set('mouseleave', this.onMouseLeave.bind(this));
        // By default use the host element as trigger element.
        this.setTriggerElement(this._containerElement);
    }
    /** Fades in a ripple at the given coordinates. */
    fadeInRipple(pageX, pageY, config = {}) {
        let containerRect = this._containerElement.getBoundingClientRect();
        if (config.centered) {
            pageX = containerRect.left + containerRect.width / 2;
            pageY = containerRect.top + containerRect.height / 2;
        }
        else {
            // Subtract scroll values from the coordinates because calculations below
            // are always relative to the viewport rectangle.
            let scrollPosition = this._ruler.getViewportScrollPosition();
            pageX -= scrollPosition.left;
            pageY -= scrollPosition.top;
        }
        let radius = config.radius || distanceToFurthestCorner(pageX, pageY, containerRect);
        let duration = RIPPLE_FADE_IN_DURATION * (1 / (config.speedFactor || 1));
        let offsetX = pageX - containerRect.left;
        let offsetY = pageY - containerRect.top;
        let ripple = document.createElement('div');
        ripple.classList.add('mat-ripple-element');
        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.style.height = `${radius * 2}px`;
        ripple.style.width = `${radius * 2}px`;
        // If the color is not set, the default CSS color will be used.
        ripple.style.backgroundColor = config.color;
        ripple.style.transitionDuration = `${duration}ms`;
        this._containerElement.appendChild(ripple);
        // By default the browser does not recalculate the styles of dynamically created
        // ripple elements. This is critical because then the `scale` would not animate properly.
        enforceStyleRecalculation(ripple);
        ripple.style.transform = 'scale(1)';
        // Exposed reference to the ripple that will be returned.
        let rippleRef = new RippleRef(this, ripple, config);
        rippleRef.state = RippleState.FADING_IN;
        // Add the ripple reference to the list of all active ripples.
        this._activeRipples.add(rippleRef);
        // Wait for the ripple element to be completely faded in.
        // Once it's faded in, the ripple can be hidden immediately if the mouse is released.
        this.runTimeoutOutsideZone(() => {
            rippleRef.state = RippleState.VISIBLE;
            if (!config.persistent && !this._isMousedown) {
                rippleRef.fadeOut();
            }
        }, duration);
        return rippleRef;
    }
    /** Fades out a ripple reference. */
    fadeOutRipple(rippleRef) {
        // For ripples that are not active anymore, don't re-un the fade-out animation.
        if (!this._activeRipples.delete(rippleRef)) {
            return;
        }
        let rippleEl = rippleRef.element;
        rippleEl.style.transitionDuration = `${RIPPLE_FADE_OUT_DURATION}ms`;
        rippleEl.style.opacity = '0';
        rippleRef.state = RippleState.FADING_OUT;
        // Once the ripple faded out, the ripple can be safely removed from the DOM.
        this.runTimeoutOutsideZone(() => {
            rippleRef.state = RippleState.HIDDEN;
            rippleEl.parentNode.removeChild(rippleEl);
        }, RIPPLE_FADE_OUT_DURATION);
    }
    /** Fades out all currently active ripples. */
    fadeOutAll() {
        this._activeRipples.forEach(ripple => ripple.fadeOut());
    }
    /** Sets the trigger element and registers the mouse events. */
    setTriggerElement(element) {
        // Remove all previously register event listeners from the trigger element.
        if (this._triggerElement) {
            this._triggerEvents.forEach((fn, type) => this._triggerElement.removeEventListener(type, fn));
        }
        if (element) {
            // If the element is not null, register all event listeners on the trigger element.
            this._ngZone.runOutsideAngular(() => {
                this._triggerEvents.forEach((fn, type) => element.addEventListener(type, fn));
            });
        }
        this._triggerElement = element;
    }
    /** Listener being called on mousedown event. */
    onMousedown(event) {
        if (!this.rippleDisabled) {
            this._isMousedown = true;
            this.fadeInRipple(event.pageX, event.pageY, this.rippleConfig);
        }
    }
    /** Listener being called on mouseup event. */
    onMouseup() {
        this._isMousedown = false;
        // Fade-out all ripples that are completely visible and not persistent.
        this._activeRipples.forEach(ripple => {
            if (!ripple.config.persistent && ripple.state === RippleState.VISIBLE) {
                ripple.fadeOut();
            }
        });
    }
    /** Listener being called on mouseleave event. */
    onMouseLeave() {
        if (this._isMousedown) {
            this.onMouseup();
        }
    }
    /** Runs a timeout outside of the Angular zone to avoid triggering the change detection. */
    runTimeoutOutsideZone(fn, delay = 0) {
        this._ngZone.runOutsideAngular(() => setTimeout(fn, delay));
    }
}
/** Enforces a style recalculation of a DOM element by computing its styles. */
// TODO(devversion): Move into global utility function.
function enforceStyleRecalculation(element) {
    // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
    // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    window.getComputedStyle(element).getPropertyValue('opacity');
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 */
function distanceToFurthestCorner(x, y, rect) {
    const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}

var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Time in ms to throttle the scrolling events by default. */
const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
let ScrollDispatcher = class ScrollDispatcher {
    constructor() {
        /** Subject for notifying that a registered scrollable reference element has been scrolled. */
        this._scrolled = new Subject();
        /** Keeps track of the global `scroll` and `resize` subscriptions. */
        this._globalSubscription = null;
        /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollableReferences = new Map();
    }
    /**
     * Registers a Scrollable with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event in its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    register(scrollable) {
        const scrollSubscription = scrollable.elementScrolled().subscribe(() => this._notify());
        this.scrollableReferences.set(scrollable, scrollSubscription);
    }
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    deregister(scrollable) {
        if (this.scrollableReferences.has(scrollable)) {
            this.scrollableReferences.get(scrollable).unsubscribe();
            this.scrollableReferences.delete(scrollable);
        }
    }
    /**
     * Subscribes to an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     */
    scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME, callback) {
        // In the case of a 0ms delay, use an observable without auditTime
        // since it does add a perceptible delay in processing overhead.
        let observable = auditTimeInMs > 0 ?
            this._scrolled.asObservable().auditTime(auditTimeInMs) :
            this._scrolled.asObservable();
        this._scrolledCount++;
        if (!this._globalSubscription) {
            this._globalSubscription = Observable.merge(Observable.fromEvent(window.document, 'scroll'), Observable.fromEvent(window, 'resize')).subscribe(() => this._notify());
        }
        // Note that we need to do the subscribing from here, in order to be able to remove
        // the global event listeners once there are no more subscriptions.
        return observable.subscribe(callback).add(() => {
            this._scrolledCount--;
            if (this._globalSubscription && !this.scrollableReferences.size && !this._scrolledCount) {
                this._globalSubscription.unsubscribe();
                this._globalSubscription = null;
            }
        });
    }
    /** Returns all registered Scrollables that contain the provided element. */
    getScrollContainers(elementRef) {
        const scrollingContainers = [];
        this.scrollableReferences.forEach((subscription, scrollable) => {
            if (this.scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        });
        return scrollingContainers;
    }
    /** Returns true if the element is contained within the provided Scrollable. */
    scrollableContainsElement(scrollable, elementRef) {
        let element = elementRef.nativeElement;
        let scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = element.parentElement);
    }
    /** Sends a notification that a scroll event has been fired. */
    _notify() {
        this._scrolled.next();
    }
};
ScrollDispatcher = __decorate$9([
    Injectable(), 
    __metadata$9('design:paramtypes', [])
], ScrollDispatcher);
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher) {
    return parentDispatcher || new ScrollDispatcher();
}
const SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[new Optional(), new SkipSelf(), ScrollDispatcher]],
    useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};

var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Simple utility for getting the bounds of the browser viewport.
 * @docs-private
 */
let ViewportRuler = class ViewportRuler {
    constructor(scrollDispatcher) {
        // Initially cache the document rectangle.
        this._cacheViewportGeometry();
        // Subscribe to scroll and resize events and update the document rectangle on changes.
        scrollDispatcher.scrolled(null, () => this._cacheViewportGeometry());
    }
    /** Gets a ClientRect for the viewport's bounds. */
    getViewportRect(documentRect = this._documentRect) {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        const scrollPosition = this.getViewportScrollPosition(documentRect);
        const height = window.innerHeight;
        const width = window.innerWidth;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height,
            width,
        };
    }
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @param documentRect
     */
    getViewportScrollPosition(documentRect = this._documentRect) {
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        const top = -documentRect.top || document.body.scrollTop || window.scrollY || 0;
        const left = -documentRect.left || document.body.scrollLeft || window.scrollX || 0;
        return { top, left };
    }
    /** Caches the latest client rectangle of the document element. */
    _cacheViewportGeometry() {
        this._documentRect = document.documentElement.getBoundingClientRect();
    }
};
ViewportRuler = __decorate$8([
    Injectable(), 
    __metadata$8('design:paramtypes', [ScrollDispatcher])
], ViewportRuler);
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, scrollDispatcher) {
    return parentRuler || new ViewportRuler(scrollDispatcher);
}
const VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[new Optional(), new SkipSelf(), ViewportRuler], ScrollDispatcher],
    useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$2 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** OpaqueToken that can be used to specify the global ripple options. */
const MD_RIPPLE_GLOBAL_OPTIONS = new OpaqueToken('md-ripple-global-options');
let MdRipple = class MdRipple {
    constructor(elementRef, ngZone, ruler, 
        // Type needs to be `any` because of https://github.com/angular/angular/issues/12631
        globalOptions) {
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */
        this.radius = 0;
        /**
         * If set, the normal duration of ripple animations is divided by this value. For example,
         * setting it to 0.5 will cause the animations to take twice as long.
         * A changed speedFactor will not modify the fade-out duration of the ripples.
         */
        this.speedFactor = 1;
        this._rippleRenderer = new RippleRenderer(elementRef, ngZone, ruler);
        this._globalOptions = globalOptions ? globalOptions : {};
    }
    ngOnChanges(changes) {
        if (changes['trigger'] && this.trigger) {
            this._rippleRenderer.setTriggerElement(this.trigger);
        }
        this._rippleRenderer.rippleDisabled = this._globalOptions.disabled || this.disabled;
        this._rippleRenderer.rippleConfig = this.rippleConfig;
    }
    ngOnDestroy() {
        // Set the trigger element to null to cleanup all listeners.
        this._rippleRenderer.setTriggerElement(null);
    }
    /** Launches a manual ripple at the specified position. */
    launch(pageX, pageY, config = this.rippleConfig) {
        return this._rippleRenderer.fadeInRipple(pageX, pageY, config);
    }
    /** Fades out all currently showing ripple elements. */
    fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
    }
    /** Ripple configuration from the directive's input values. */
    get rippleConfig() {
        return {
            centered: this.centered,
            speedFactor: this.speedFactor * (this._globalOptions.baseSpeedFactor || 1),
            radius: this.radius,
            color: this.color
        };
    }
};
__decorate$7([
    Input('mdRippleTrigger'), 
    __metadata$7('design:type', Object)
], MdRipple.prototype, "trigger", void 0);
__decorate$7([
    Input('mdRippleCentered'), 
    __metadata$7('design:type', Boolean)
], MdRipple.prototype, "centered", void 0);
__decorate$7([
    Input('mdRippleDisabled'), 
    __metadata$7('design:type', Boolean)
], MdRipple.prototype, "disabled", void 0);
__decorate$7([
    Input('mdRippleRadius'), 
    __metadata$7('design:type', Number)
], MdRipple.prototype, "radius", void 0);
__decorate$7([
    Input('mdRippleSpeedFactor'), 
    __metadata$7('design:type', Number)
], MdRipple.prototype, "speedFactor", void 0);
__decorate$7([
    Input('mdRippleColor'), 
    __metadata$7('design:type', String)
], MdRipple.prototype, "color", void 0);
__decorate$7([
    Input('mdRippleUnbounded'), 
    __metadata$7('design:type', Boolean)
], MdRipple.prototype, "unbounded", void 0);
MdRipple = __decorate$7([
    Directive({
        selector: '[md-ripple], [mat-ripple], [mdRipple], [matRipple]',
        exportAs: 'mdRipple',
        host: {
            '[class.mat-ripple]': 'true',
            '[class.mat-ripple-unbounded]': 'unbounded'
        }
    }),
    __param$2(3, Optional()),
    __param$2(3, Inject(MD_RIPPLE_GLOBAL_OPTIONS)), 
    __metadata$7('design:paramtypes', [ElementRef, NgZone, ViewportRuler, Object])
], MdRipple);

var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdRippleModule_1 = class MdRippleModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdRippleModule_1,
            providers: []
        };
    }
};
let MdRippleModule = MdRippleModule_1;
MdRippleModule = MdRippleModule_1 = __decorate$6([
    NgModule({
        imports: [CompatibilityModule],
        exports: [MdRipple, CompatibilityModule],
        declarations: [MdRipple],
        providers: [VIEWPORT_RULER_PROVIDER, SCROLL_DISPATCHER_PROVIDER],
    }), 
    __metadata$6('design:paramtypes', [])
], MdRippleModule);

var __decorate$11 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with <md-checkbox> and should *not* be used if the user would directly interact
 * with the checkbox. The pseudo-checkbox should only be used as an implementation detail of
 * more complex components that appropriately handle selected / checked state.
 * @docs-private
 */
let MdPseudoCheckbox = class MdPseudoCheckbox {
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /** Display state of the checkbox. */
        this.state = 'unchecked';
        /** Whether the checkbox is disabled. */
        this.disabled = false;
        this.color = 'accent';
    }
    /** Color of the checkbox. */
    get color() { return this._color; }
    ;
    set color(value) {
        if (value) {
            let nativeElement = this._elementRef.nativeElement;
            this._renderer.setElementClass(nativeElement, `mat-${this.color}`, false);
            this._renderer.setElementClass(nativeElement, `mat-${value}`, true);
            this._color = value;
        }
    }
};
__decorate$11([
    Input(), 
    __metadata$11('design:type', String)
], MdPseudoCheckbox.prototype, "state", void 0);
__decorate$11([
    Input(), 
    __metadata$11('design:type', Boolean)
], MdPseudoCheckbox.prototype, "disabled", void 0);
__decorate$11([
    Input(), 
    __metadata$11('design:type', String)
], MdPseudoCheckbox.prototype, "color", null);
MdPseudoCheckbox = __decorate$11([
    Component({encapsulation: ViewEncapsulation.None,
        selector: 'md-pseudo-checkbox, mat-pseudo-checkbox',
        styles: [".mat-pseudo-checkbox{width:20px;height:20px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:9px;left:2px;width:16px;opacity:1}.mat-pseudo-checkbox-checked::after{top:5px;left:3px;width:12px;height:5px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1} /*# sourceMappingURL=pseudo-checkbox.css.map */ "],
        template: '',
        host: {
            '[class.mat-pseudo-checkbox]': 'true',
            '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
            '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
            '[class.mat-pseudo-checkbox-disabled]': 'disabled',
        },
    }), 
    __metadata$11('design:paramtypes', [ElementRef, Renderer])
], MdPseudoCheckbox);

var __decorate$10 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdSelectionModule = class MdSelectionModule {
};
MdSelectionModule = __decorate$10([
    NgModule({
        exports: [MdPseudoCheckbox],
        declarations: [MdPseudoCheckbox]
    }), 
    __metadata$10('design:paramtypes', [])
], MdSelectionModule);

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
let _uniqueIdCounter = 0;
/** Event object emitted by MdOption when selected or deselected. */
class MdOptionSelectionChange {
    constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
    }
}
/**
 * Single option inside of a `<md-select>` element.
 */
let MdOption = class MdOption {
    constructor(_element, _renderer, _isCompatibilityMode) {
        this._element = _element;
        this._renderer = _renderer;
        this._isCompatibilityMode = _isCompatibilityMode;
        this._selected = false;
        this._active = false;
        /** Whether the option is disabled.  */
        this._disabled = false;
        this._id = `md-option-${_uniqueIdCounter++}`;
        /** Whether the wrapping component is in multiple selection mode. */
        this.multiple = false;
        /** Event emitted when the option is selected or deselected. */
        this.onSelectionChange = new EventEmitter();
    }
    /** The unique ID of the option. */
    get id() { return this._id; }
    /** Whether or not the option is currently selected. */
    get selected() { return this._selected; }
    /** Whether the option is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) { this._disabled = coerceBooleanProperty(value); }
    /**
     * Whether or not the option is currently active and ready to be selected.
     * An active option displays styles as if it is focused, but the
     * focus is actually retained somewhere else. This comes in handy
     * for components like autocomplete where focus must remain on the input.
     */
    get active() {
        return this._active;
    }
    /**
     * The displayed value of the option. It is necessary to show the selected option in the
     * select's trigger.
     */
    get viewValue() {
        // TODO(kara): Add input property alternative for node envs.
        return this._getHostElement().textContent.trim();
    }
    /** Selects the option. */
    select() {
        this._selected = true;
        this._emitSelectionChangeEvent();
    }
    /** Deselects the option. */
    deselect() {
        this._selected = false;
        this._emitSelectionChangeEvent();
    }
    /** Sets focus onto this option. */
    focus() {
        this._renderer.invokeElementMethod(this._getHostElement(), 'focus');
    }
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setActiveStyles() {
        this._active = true;
    }
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setInactiveStyles() {
        this._active = false;
    }
    /** Ensures the option is selected when activated from the keyboard. */
    _handleKeydown(event) {
        if (event.keyCode === ENTER || event.keyCode === SPACE) {
            this._selectViaInteraction();
        }
    }
    /**
     * Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.
     */
    _selectViaInteraction() {
        if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;
            this._emitSelectionChangeEvent(true);
        }
    }
    /** Returns the correct tabindex for the option depending on disabled state. */
    _getTabIndex() {
        return this.disabled ? '-1' : '0';
    }
    /** Fetches the host DOM element. */
    _getHostElement() {
        return this._element.nativeElement;
    }
    /** Emits the selection change event. */
    _emitSelectionChangeEvent(isUserInput = false) {
        this.onSelectionChange.emit(new MdOptionSelectionChange(this, isUserInput));
    }
    ;
};
__decorate$5([
    Input(), 
    __metadata$5('design:type', Object)
], MdOption.prototype, "value", void 0);
__decorate$5([
    Input(), 
    __metadata$5('design:type', Object)
], MdOption.prototype, "disabled", null);
__decorate$5([
    Output(), 
    __metadata$5('design:type', Object)
], MdOption.prototype, "onSelectionChange", void 0);
MdOption = __decorate$5([
    Component({selector: 'md-option, mat-option',
        host: {
            'role': 'option',
            '[attr.tabindex]': '_getTabIndex()',
            '[class.mat-selected]': 'selected',
            '[class.mat-option-multiple]': 'multiple',
            '[class.mat-active]': 'active',
            '[id]': 'id',
            '[attr.aria-selected]': 'selected.toString()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[class.mat-option-disabled]': 'disabled',
            '(click)': '_selectViaInteraction()',
            '(keydown)': '_handleKeydown($event)',
            '[class.mat-option]': 'true',
        },
        template: "<span [ngSwitch]=\"_isCompatibilityMode\" *ngIf=\"multiple\"><mat-pseudo-checkbox class=\"mat-option-pseudo-checkbox\" *ngSwitchCase=\"true\" [state]=\"selected ? 'checked' : ''\" color=\"primary\"></mat-pseudo-checkbox><md-pseudo-checkbox class=\"mat-option-pseudo-checkbox\" *ngSwitchDefault [state]=\"selected ? 'checked' : ''\" color=\"primary\"></md-pseudo-checkbox></span><ng-content></ng-content><div class=\"mat-option-ripple\" *ngIf=\"!disabled\" md-ripple [mdRippleTrigger]=\"_getHostElement()\"></div>",
        encapsulation: ViewEncapsulation.None
    }),
    __param$1(2, Optional()),
    __param$1(2, Inject(MATERIAL_COMPATIBILITY_MODE)), 
    __metadata$5('design:paramtypes', [ElementRef, Renderer, Boolean])
], MdOption);
let MdOptionModule_1 = class MdOptionModule {
    static forRoot() {
        return {
            ngModule: MdOptionModule_1,
            providers: []
        };
    }
};
let MdOptionModule = MdOptionModule_1;
MdOptionModule = MdOptionModule_1 = __decorate$5([
    NgModule({
        imports: [MdRippleModule, CommonModule, MdSelectionModule],
        exports: [MdOption],
        declarations: [MdOption]
    }), 
    __metadata$5('design:paramtypes', [])
], MdOptionModule);

// TODO(kara): Revisit why error messages are not being properly set.
/**
 * Wrapper around Error that sets the error message.
 * @docs-private
 */
class MdError extends Error {
    constructor(value) {
        super();
        this.message = value;
    }
}

/**
 * Exception thrown when attempting to attach a null portal to a host.
 * @docs-private
 */
class NullPortalError extends MdError {
    constructor() {
        super('Must provide a portal to attach');
    }
}
/**
 * Exception thrown when attempting to attach a portal to a host that is already attached.
 * @docs-private
 */
class PortalAlreadyAttachedError extends MdError {
    constructor() {
        super('Host already has a portal attached');
    }
}
/**
 * Exception thrown when attempting to attach a portal to an already-disposed host.
 * @docs-private
 */
class PortalHostAlreadyDisposedError extends MdError {
    constructor() {
        super('This PortalHost has already been disposed');
    }
}
/**
 * Exception thrown when attempting to attach an unknown portal type.
 * @docs-private
 */
class UnknownPortalTypeError extends MdError {
    constructor() {
        super('Attempting to attach an unknown Portal type. ' +
            'BasePortalHost accepts either a ComponentPortal or a TemplatePortal.');
    }
}
/**
 * Exception thrown when attempting to attach a portal to a null host.
 * @docs-private
 */
class NullPortalHostError extends MdError {
    constructor() {
        super('Attempting to attach a portal to a null PortalHost');
    }
}
/**
 * Exception thrown when attempting to detach a portal that is not attached.
 * @docs-private
 */
class NoPortalAttachedError extends MdError {
    constructor() {
        super('Attempting to detach a portal that is not attached to a host');
    }
}

/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalHost`.
 */
class Portal {
    /** Attach this portal to a host. */
    attach(host) {
        if (host == null) {
            throw new NullPortalHostError();
        }
        if (host.hasAttached()) {
            throw new PortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return host.attach(this);
    }
    /** Detach this portal from its host */
    detach() {
        let host = this._attachedHost;
        if (host == null) {
            throw new NoPortalAttachedError();
        }
        this._attachedHost = null;
        return host.detach();
    }
    /** Whether this portal is attached to a host. */
    get isAttached() {
        return this._attachedHost != null;
    }
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     */
    setAttachedHost(host) {
        this._attachedHost = host;
    }
}
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
class ComponentPortal extends Portal {
    constructor(component, viewContainerRef = null, injector = null) {
        super();
        this.component = component;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
    }
}
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 */
class TemplatePortal extends Portal {
    constructor(template, viewContainerRef) {
        super();
        /**
         * Additional locals for the instantiated embedded view.
         * These locals can be seen as "exports" for the template, such as how ngFor has
         * index / event / odd.
         * See https://angular.io/docs/ts/latest/api/core/EmbeddedViewRef-class.html
         */
        this.locals = new Map();
        this.templateRef = template;
        this.viewContainerRef = viewContainerRef;
    }
    get origin() {
        return this.templateRef.elementRef;
    }
    attach(host, locals) {
        this.locals = locals == null ? new Map() : locals;
        return super.attach(host);
    }
    detach() {
        this.locals = new Map();
        return super.detach();
    }
}
/**
 * Partial implementation of PortalHost that only deals with attaching either a
 * ComponentPortal or a TemplatePortal.
 */
class BasePortalHost {
    constructor() {
        /** Whether this host has already been permanently disposed. */
        this._isDisposed = false;
    }
    /** Whether this host has an attached portal. */
    hasAttached() {
        return !!this._attachedPortal;
    }
    attach(portal) {
        if (!portal) {
            throw new NullPortalError();
        }
        if (this.hasAttached()) {
            throw new PortalAlreadyAttachedError();
        }
        if (this._isDisposed) {
            throw new PortalHostAlreadyDisposedError();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
        }
        throw new UnknownPortalTypeError();
    }
    detach() {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    }
    dispose() {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    }
    setDisposeFn(fn) {
        this._disposeFn = fn;
    }
    _invokeDisposeFn() {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    }
}

var __decorate$12 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$12 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 *
 * Usage:
 * <template portal #greeting>
 *   <p> Hello {{name}} </p>
 * </template>
 */
let TemplatePortalDirective = class TemplatePortalDirective extends TemplatePortal {
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
};
TemplatePortalDirective = __decorate$12([
    Directive({
        selector: '[cdk-portal], [portal]',
        exportAs: 'cdkPortal',
    }), 
    __metadata$12('design:paramtypes', [TemplateRef, ViewContainerRef])
], TemplatePortalDirective);
/**
 * Directive version of a PortalHost. Because the directive *is* a PortalHost, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * <template [cdkPortalHost]="greeting"></template>
 */
let PortalHostDirective = class PortalHostDirective extends BasePortalHost {
    constructor(_componentFactoryResolver, _viewContainerRef) {
        super();
        this._componentFactoryResolver = _componentFactoryResolver;
        this._viewContainerRef = _viewContainerRef;
    }
    /** @deprecated */
    get _deprecatedPortal() { return this.portal; }
    set _deprecatedPortal(v) { this.portal = v; }
    /** Portal associated with the Portal host. */
    get portal() {
        return this._portal;
    }
    set portal(p) {
        if (p) {
            this._replaceAttachedPortal(p);
        }
    }
    ngOnDestroy() {
        super.dispose();
    }
    /**
     * Attach the given ComponentPortal to this PortalHost using the ComponentFactoryResolver.
     *
     * @param portal Portal to be attached to the portal host.
     */
    attachComponentPortal(portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalHost.
        let viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        let ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.parentInjector);
        super.setDisposeFn(() => ref.destroy());
        return ref;
    }
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @param portal Portal to be attached.
     */
    attachTemplatePortal(portal) {
        portal.setAttachedHost(this);
        this._viewContainerRef.createEmbeddedView(portal.templateRef);
        super.setDisposeFn(() => this._viewContainerRef.clear());
        // TODO(jelbourn): return locals from view
        return new Map();
    }
    /** Detaches the currently attached Portal (if there is one) and attaches the given Portal. */
    _replaceAttachedPortal(p) {
        if (this.hasAttached()) {
            super.detach();
        }
        if (p) {
            super.attach(p);
            this._portal = p;
        }
    }
};
__decorate$12([
    Input('portalHost'), 
    __metadata$12('design:type', Object)
], PortalHostDirective.prototype, "_deprecatedPortal", null);
PortalHostDirective = __decorate$12([
    Directive({
        selector: '[cdkPortalHost], [portalHost]',
        inputs: ['portal: cdkPortalHost']
    }), 
    __metadata$12('design:paramtypes', [ComponentFactoryResolver, ViewContainerRef])
], PortalHostDirective);
let PortalModule_1 = class PortalModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: PortalModule_1,
            providers: []
        };
    }
};
let PortalModule = PortalModule_1;
PortalModule = PortalModule_1 = __decorate$12([
    NgModule({
        exports: [TemplatePortalDirective, PortalHostDirective],
        declarations: [TemplatePortalDirective, PortalHostDirective],
    }), 
    __metadata$12('design:paramtypes', [])
], PortalModule);

/**
 * OverlayState is a bag of values for either the initial configuration or current state of an
 * overlay.
 */
class OverlayState {
    constructor() {
        /** Whether the overlay has a backdrop. */
        this.hasBackdrop = false;
        /** Custom class to add to the backdrop **/
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /** The direction of the text in the overlay panel. */
        this.direction = 'ltr';
    }
}

/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
class DomPortalHost extends BasePortalHost {
    constructor(_hostDomElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        super();
        this._hostDomElement = _hostDomElement;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._defaultInjector = _defaultInjector;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     */
    attachComponentPortal(portal) {
        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        let componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.parentInjector);
            this.setDisposeFn(() => componentRef.destroy());
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            this._appRef.attachView(componentRef.hostView);
            this.setDisposeFn(() => {
                this._appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
    }
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @param portal Portal to be attached.
     */
    attachTemplatePortal(portal) {
        let viewContainer = portal.viewContainerRef;
        let viewRef = viewContainer.createEmbeddedView(portal.templateRef);
        // The method `createEmbeddedView` will add the view as a child of the viewContainer.
        // But for the DomPortalHost the view can be added everywhere in the DOM (e.g Overlay Container)
        // To move the view to the specified host element. We just re-append the existing root nodes.
        viewRef.rootNodes.forEach(rootNode => this._hostDomElement.appendChild(rootNode));
        this.setDisposeFn((() => {
            let index = viewContainer.indexOf(viewRef);
            if (index !== -1) {
                viewContainer.remove(index);
            }
        }));
        // TODO(jelbourn): Return locals from view.
        return new Map();
    }
    /**
     * Clears out a portal from the DOM.
     */
    dispose() {
        super.dispose();
        if (this._hostDomElement.parentNode != null) {
            this._hostDomElement.parentNode.removeChild(this._hostDomElement);
        }
    }
    /** Gets the root HTMLElement for an instantiated component. */
    _getComponentRootNode(componentRef) {
        return componentRef.hostView.rootNodes[0];
    }
}

/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
class OverlayRef {
    constructor(_portalHost, _pane, _state, _ngZone) {
        this._portalHost = _portalHost;
        this._pane = _pane;
        this._state = _state;
        this._ngZone = _ngZone;
        this._backdropElement = null;
        this._backdropClick = new Subject();
    }
    /** The overlay's HTML element */
    get overlayElement() {
        return this._pane;
    }
    /**
     * Attaches the overlay to a portal instance and adds the backdrop.
     * @param portal Portal instance to which to attach the overlay.
     * @returns The portal attachment result.
     */
    attach(portal) {
        if (this._state.hasBackdrop) {
            this._attachBackdrop();
        }
        let attachResult = this._portalHost.attach(portal);
        // Update the pane element with the given state configuration.
        this.updateSize();
        this.updateDirection();
        this.updatePosition();
        // Enable pointer events for the overlay pane element.
        this._togglePointerEvents(true);
        return attachResult;
    }
    /**
     * Detaches an overlay from a portal.
     * @returns Resolves when the overlay has been detached.
     */
    detach() {
        this.detachBackdrop();
        // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
        this._togglePointerEvents(false);
        return this._portalHost.detach();
    }
    /**
     * Cleans up the overlay from the DOM.
     */
    dispose() {
        if (this._state.positionStrategy) {
            this._state.positionStrategy.dispose();
        }
        this.detachBackdrop();
        this._portalHost.dispose();
    }
    /**
     * Checks whether the overlay has been attached.
     */
    hasAttached() {
        return this._portalHost.hasAttached();
    }
    /**
     * Returns an observable that emits when the backdrop has been clicked.
     */
    backdropClick() {
        return this._backdropClick.asObservable();
    }
    /**
     * Gets the current state config of the overlay.
     */
    getState() {
        return this._state;
    }
    /** Updates the position of the overlay based on the position strategy. */
    updatePosition() {
        if (this._state.positionStrategy) {
            this._state.positionStrategy.apply(this._pane);
        }
    }
    /** Updates the text direction of the overlay panel. **/
    updateDirection() {
        this._pane.setAttribute('dir', this._state.direction);
    }
    /** Updates the size of the overlay based on the overlay config. */
    updateSize() {
        if (this._state.width || this._state.width === 0) {
            this._pane.style.width = formatCssUnit(this._state.width);
        }
        if (this._state.height || this._state.height === 0) {
            this._pane.style.height = formatCssUnit(this._state.height);
        }
        if (this._state.minWidth || this._state.minWidth === 0) {
            this._pane.style.minWidth = formatCssUnit(this._state.minWidth);
        }
        if (this._state.minHeight || this._state.minHeight === 0) {
            this._pane.style.minHeight = formatCssUnit(this._state.minHeight);
        }
    }
    /** Toggles the pointer events for the overlay pane element. */
    _togglePointerEvents(enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
    }
    /** Attaches a backdrop for this overlay. */
    _attachBackdrop() {
        this._backdropElement = document.createElement('div');
        this._backdropElement.classList.add('cdk-overlay-backdrop');
        this._backdropElement.classList.add(this._state.backdropClass);
        // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.
        this._pane.parentElement.insertBefore(this._backdropElement, this._pane);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', () => this._backdropClick.next(null));
        // Add class to fade-in the backdrop after one frame.
        requestAnimationFrame(() => {
            if (this._backdropElement) {
                this._backdropElement.classList.add('cdk-overlay-backdrop-showing');
            }
        });
    }
    /** Detaches the backdrop (if any) associated with the overlay. */
    detachBackdrop() {
        let backdropToDetach = this._backdropElement;
        if (backdropToDetach) {
            let finishDetach = () => {
                // It may not be attached to anything in certain cases (e.g. unit tests).
                if (backdropToDetach && backdropToDetach.parentNode) {
                    backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
                // It is possible that a new portal has been attached to this overlay since we started
                // removing the backdrop. If that is the case, only clear the backdrop reference if it
                // is still the same instance that we started to remove.
                if (this._backdropElement == backdropToDetach) {
                    this._backdropElement = null;
                }
            };
            backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');
            backdropToDetach.classList.remove(this._state.backdropClass);
            backdropToDetach.addEventListener('transitionend', finishDetach);
            // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
            // In this case we make it unclickable and we try to remove it after a delay.
            backdropToDetach.style.pointerEvents = 'none';
            // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.
            this._ngZone.runOutsideAngular(() => {
                setTimeout(finishDetach, 500);
            });
        }
    }
}
function formatCssUnit(value) {
    return typeof value === 'string' ? value : `${value}px`;
}

var __decorate$16 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$16 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$4 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** The points of the origin element and the overlay element to connect. */
class ConnectionPositionPair {
    constructor(origin, overlay) {
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
}
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 */
class ScrollableViewProperties {
}
/** The change event emitted by the strategy when a fallback position is used. */
class ConnectedOverlayPositionChange {
    constructor(connectionPair, scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
}
ConnectedOverlayPositionChange = __decorate$16([
    __param$4(1, Optional()), 
    __metadata$16('design:paramtypes', [ConnectionPositionPair, ScrollableViewProperties])
], ConnectedOverlayPositionChange);

/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
class ConnectedPositionStrategy {
    constructor(_connectedTo, _originPos, _overlayPos, _viewportRuler) {
        this._connectedTo = _connectedTo;
        this._originPos = _originPos;
        this._overlayPos = _overlayPos;
        this._viewportRuler = _viewportRuler;
        this._dir = 'ltr';
        /** The offset in pixels for the overlay connection point on the x-axis */
        this._offsetX = 0;
        /** The offset in pixels for the overlay connection point on the y-axis */
        this._offsetY = 0;
        /** The Scrollable containers used to check scrollable view properties on position change. */
        this.scrollables = [];
        /** Ordered list of preferred positions, from most to least desirable. */
        this._preferredPositions = [];
        this._onPositionChange = new Subject();
        this._origin = this._connectedTo.nativeElement;
        this.withFallbackPosition(_originPos, _overlayPos);
    }
    /** Whether the we're dealing with an RTL context */
    get _isRtl() {
        return this._dir === 'rtl';
    }
    /** Emits an event when the connection point changes. */
    get onPositionChange() {
        return this._onPositionChange.asObservable();
    }
    /** Ordered list of preferred positions, from most to least desirable. */
    get positions() {
        return this._preferredPositions;
    }
    /**
     * To be used to for any cleanup after the element gets destroyed.
     */
    dispose() { }
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * @docs-private
     *
     * @param element Element to which to apply the CSS styles.
     * @returns Resolves when the styles have been applied.
     */
    apply(element) {
        // Cache the overlay pane element in case re-calculating position is necessary
        this._pane = element;
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        const originRect = this._origin.getBoundingClientRect();
        const overlayRect = element.getBoundingClientRect();
        // We use the viewport rect to determine whether a position would go off-screen.
        const viewportRect = this._viewportRuler.getViewportRect();
        // Fallback point if none of the fallbacks fit into the viewport.
        let fallbackPoint = null;
        // We want to place the overlay in the first of the preferred positions such that the
        // overlay fits on-screen.
        for (let pos of this._preferredPositions) {
            // Get the (x, y) point of connection on the origin, and then use that to get the
            // (top, left) coordinate for the overlay at `pos`.
            let originPoint = this._getOriginConnectionPoint(originRect, pos);
            let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, viewportRect, pos);
            // If the overlay in the calculated position fits on-screen, put it there and we're done.
            if (overlayPoint.fitsInViewport) {
                this._setElementPosition(element, overlayPoint);
                // Save the last connected position in case the position needs to be re-calculated.
                this._lastConnectedPosition = pos;
                // Notify that the position has been changed along with its change properties.
                const scrollableViewProperties = this.getScrollableViewProperties(element);
                const positionChange = new ConnectedOverlayPositionChange(pos, scrollableViewProperties);
                this._onPositionChange.next(positionChange);
                return Promise.resolve(null);
            }
            else if (!fallbackPoint || fallbackPoint.visibleArea < overlayPoint.visibleArea) {
                fallbackPoint = overlayPoint;
            }
        }
        // If none of the preferred positions were in the viewport, take the one
        // with the largest visible area.
        this._setElementPosition(element, fallbackPoint);
        return Promise.resolve(null);
    }
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    recalculateLastPosition() {
        const originRect = this._origin.getBoundingClientRect();
        const overlayRect = this._pane.getBoundingClientRect();
        const viewportRect = this._viewportRuler.getViewportRect();
        const lastPosition = this._lastConnectedPosition || this._preferredPositions[0];
        let originPoint = this._getOriginConnectionPoint(originRect, lastPosition);
        let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, viewportRect, lastPosition);
        this._setElementPosition(this._pane, overlayPoint);
    }
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    withScrollableContainers(scrollables) {
        this.scrollables = scrollables;
    }
    /**
     * Adds a new preferred fallback position.
     * @param originPos
     * @param overlayPos
     */
    withFallbackPosition(originPos, overlayPos) {
        this._preferredPositions.push(new ConnectionPositionPair(originPos, overlayPos));
        return this;
    }
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param dir New layout direction.
     */
    withDirection(dir) {
        this._dir = dir;
        return this;
    }
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param offset New offset in the X axis.
     */
    withOffsetX(offset) {
        this._offsetX = offset;
        return this;
    }
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param  offset New offset in the Y axis.
     */
    withOffsetY(offset) {
        this._offsetY = offset;
        return this;
    }
    /**
     * Gets the horizontal (x) "start" dimension based on whether the overlay is in an RTL context.
     * @param rect
     */
    _getStartX(rect) {
        return this._isRtl ? rect.right : rect.left;
    }
    /**
     * Gets the horizontal (x) "end" dimension based on whether the overlay is in an RTL context.
     * @param rect
     */
    _getEndX(rect) {
        return this._isRtl ? rect.left : rect.right;
    }
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param originRect
     * @param pos
     */
    _getOriginConnectionPoint(originRect, pos) {
        const originStartX = this._getStartX(originRect);
        const originEndX = this._getEndX(originRect);
        let x;
        if (pos.originX == 'center') {
            x = originStartX + (originRect.width / 2);
        }
        else {
            x = pos.originX == 'start' ? originStartX : originEndX;
        }
        let y;
        if (pos.originY == 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }
        return { x, y };
    }
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected, as well as how much of the element
     * would be inside the viewport at that position.
     */
    _getOverlayPoint(originPoint, overlayRect, viewportRect, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the potential overlay position
        // relative to the origin point.
        let overlayStartX;
        if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl ? 0 : -overlayRect.width;
        }
        let overlayStartY;
        if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        }
        // The (x, y) coordinates of the overlay.
        let x = originPoint.x + overlayStartX + this._offsetX;
        let y = originPoint.y + overlayStartY + this._offsetY;
        // How much the overlay would overflow at this position, on each side.
        let leftOverflow = 0 - x;
        let rightOverflow = (x + overlayRect.width) - viewportRect.width;
        let topOverflow = 0 - y;
        let bottomOverflow = (y + overlayRect.height) - viewportRect.height;
        // Visible parts of the element on each axis.
        let visibleWidth = this._subtractOverflows(overlayRect.width, leftOverflow, rightOverflow);
        let visibleHeight = this._subtractOverflows(overlayRect.height, topOverflow, bottomOverflow);
        // The area of the element that's within the viewport.
        let visibleArea = visibleWidth * visibleHeight;
        let fitsInViewport = (overlayRect.width * overlayRect.height) === visibleArea;
        return { x, y, fitsInViewport, visibleArea };
    }
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     */
    getScrollableViewProperties(overlay) {
        const originBounds = this._getElementBounds(this._origin);
        const overlayBounds = this._getElementBounds(overlay);
        const scrollContainerBounds = this.scrollables.map((scrollable) => {
            return this._getElementBounds(scrollable.getElementRef().nativeElement);
        });
        return {
            isOriginClipped: this.isElementClipped(originBounds, scrollContainerBounds),
            isOriginOutsideView: this.isElementOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: this.isElementClipped(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: this.isElementOutsideView(overlayBounds, scrollContainerBounds),
        };
    }
    /** Whether the element is completely out of the view of any of the containers. */
    isElementOutsideView(elementBounds, containersBounds) {
        return containersBounds.some((containerBounds) => {
            const outsideAbove = elementBounds.bottom < containerBounds.top;
            const outsideBelow = elementBounds.top > containerBounds.bottom;
            const outsideLeft = elementBounds.right < containerBounds.left;
            const outsideRight = elementBounds.left > containerBounds.right;
            return outsideAbove || outsideBelow || outsideLeft || outsideRight;
        });
    }
    /** Whether the element is clipped by any of the containers. */
    isElementClipped(elementBounds, containersBounds) {
        return containersBounds.some((containerBounds) => {
            const clippedAbove = elementBounds.top < containerBounds.top;
            const clippedBelow = elementBounds.bottom > containerBounds.bottom;
            const clippedLeft = elementBounds.left < containerBounds.left;
            const clippedRight = elementBounds.right > containerBounds.right;
            return clippedAbove || clippedBelow || clippedLeft || clippedRight;
        });
    }
    /**
     * Physically positions the overlay element to the given coordinate.
     * @param element
     * @param overlayPoint
     */
    _setElementPosition(element, overlayPoint) {
        element.style.left = overlayPoint.x + 'px';
        element.style.top = overlayPoint.y + 'px';
    }
    /** Returns the bounding positions of the provided element with respect to the viewport. */
    _getElementBounds(element) {
        const boundingClientRect = element.getBoundingClientRect();
        return {
            top: boundingClientRect.top,
            right: boundingClientRect.left + boundingClientRect.width,
            bottom: boundingClientRect.top + boundingClientRect.height,
            left: boundingClientRect.left
        };
    }
    /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     */
    _subtractOverflows(length, ...overflows) {
        return overflows.reduce((currentValue, currentOverflow) => {
            return currentValue - Math.max(currentOverflow, 0);
        }, length);
    }
}

/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
class GlobalPositionStrategy {
    constructor() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
    }
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param value New top offset.
     */
    top(value) {
        this._bottomOffset = '';
        this._topOffset = value;
        this._alignItems = 'flex-start';
        return this;
    }
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param value New left offset.
     */
    left(value) {
        this._rightOffset = '';
        this._leftOffset = value;
        this._justifyContent = 'flex-start';
        return this;
    }
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param value New bottom offset.
     */
    bottom(value) {
        this._topOffset = '';
        this._bottomOffset = value;
        this._alignItems = 'flex-end';
        return this;
    }
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param value New right offset.
     */
    right(value) {
        this._leftOffset = '';
        this._rightOffset = value;
        this._justifyContent = 'flex-end';
        return this;
    }
    /**
     * Sets the overlay width and clears any previously set width.
     * @param value New width for the overlay
     */
    width(value) {
        this._width = value;
        // When the width is 100%, we should reset the `left` and the offset,
        // in order to ensure that the element is flush against the viewport edge.
        if (value === '100%') {
            this.left('0px');
        }
        return this;
    }
    /**
     * Sets the overlay height and clears any previously set height.
     * @param value New height for the overlay
     */
    height(value) {
        this._height = value;
        // When the height is 100%, we should reset the `top` and the offset,
        // in order to ensure that the element is flush against the viewport edge.
        if (value === '100%') {
            this.top('0px');
        }
        return this;
    }
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param offset Overlay offset from the horizontal center.
     */
    centerHorizontally(offset = '') {
        this.left(offset);
        this._justifyContent = 'center';
        return this;
    }
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param offset Overlay offset from the vertical center.
     */
    centerVertically(offset = '') {
        this.top(offset);
        this._alignItems = 'center';
        return this;
    }
    /**
     * Apply the position to the element.
     * @docs-private
     *
     * @param element Element to which to apply the CSS.
     * @returns Resolved when the styles have been applied.
     */
    apply(element) {
        if (!this._wrapper) {
            this._wrapper = document.createElement('div');
            this._wrapper.classList.add('cdk-global-overlay-wrapper');
            element.parentNode.insertBefore(this._wrapper, element);
            this._wrapper.appendChild(element);
        }
        let styles = element.style;
        let parentStyles = element.parentNode.style;
        styles.position = this._cssPosition;
        styles.marginTop = this._topOffset;
        styles.marginLeft = this._leftOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        styles.width = this._width;
        styles.height = this._height;
        parentStyles.justifyContent = this._justifyContent;
        parentStyles.alignItems = this._alignItems;
        return Promise.resolve(null);
    }
    /**
     * Removes the wrapper element from the DOM.
     */
    dispose() {
        if (this._wrapper && this._wrapper.parentNode) {
            this._wrapper.parentNode.removeChild(this._wrapper);
            this._wrapper = null;
        }
    }
}

var __decorate$15 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$15 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Builder for overlay position strategy. */
let OverlayPositionBuilder = class OverlayPositionBuilder {
    constructor(_viewportRuler) {
        this._viewportRuler = _viewportRuler;
    }
    /**
     * Creates a global position strategy.
     */
    global() {
        return new GlobalPositionStrategy();
    }
    /**
     * Creates a relative position strategy.
     * @param elementRef
     * @param originPos
     * @param overlayPos
     */
    connectedTo(elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(elementRef, originPos, overlayPos, this._viewportRuler);
    }
};
OverlayPositionBuilder = __decorate$15([
    Injectable(), 
    __metadata$15('design:paramtypes', [ViewportRuler])
], OverlayPositionBuilder);

var __decorate$17 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$17 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
let OverlayContainer = class OverlayContainer {
    /**
     * Base theme to be applied to all overlay-based components.
     */
    get themeClass() { return this._themeClass; }
    set themeClass(value) {
        if (this._containerElement) {
            this._containerElement.classList.remove(this._themeClass);
            if (value) {
                this._containerElement.classList.add(value);
            }
        }
        this._themeClass = value;
    }
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    getContainerElement() {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    }
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    _createContainer() {
        let container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        if (this._themeClass) {
            container.classList.add(this._themeClass);
        }
        document.body.appendChild(container);
        this._containerElement = container;
    }
};
OverlayContainer = __decorate$17([
    Injectable(), 
    __metadata$17('design:paramtypes', [])
], OverlayContainer);
function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer) {
    return parentContainer || new OverlayContainer();
}

const OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [[new Optional(), new SkipSelf(), OverlayContainer]],
    useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
};

var __decorate$14 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$14 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Next overlay unique ID. */
let nextUniqueId = 0;
/** The default state for newly created overlays. */
let defaultState = new OverlayState();
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
let Overlay = class Overlay {
    constructor(_overlayContainer, _componentFactoryResolver, _positionBuilder, _appRef, _injector, _ngZone) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._appRef = _appRef;
        this._injector = _injector;
        this._ngZone = _ngZone;
    }
    /**
     * Creates an overlay.
     * @param state State to apply to the overlay.
     * @returns Reference to the created overlay.
     */
    create(state$$1 = defaultState) {
        return this._createOverlayRef(this._createPaneElement(), state$$1);
    }
    /**
     * Returns a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     */
    position() {
        return this._positionBuilder;
    }
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    _createPaneElement() {
        let pane = document.createElement('div');
        pane.id = `cdk-overlay-${nextUniqueId++}`;
        pane.classList.add('cdk-overlay-pane');
        this._overlayContainer.getContainerElement().appendChild(pane);
        return pane;
    }
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    _createPortalHost(pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef, this._injector);
    }
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     * @param state
     */
    _createOverlayRef(pane, state$$1) {
        return new OverlayRef(this._createPortalHost(pane), pane, state$$1, this._ngZone);
    }
};
Overlay = __decorate$14([
    Injectable(), 
    __metadata$14('design:paramtypes', [OverlayContainer, ComponentFactoryResolver, OverlayPositionBuilder, ApplicationRef, Injector, NgZone])
], Overlay);
/** Providers for Overlay and its related injectables. */
const OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    VIEWPORT_RULER_PROVIDER,
    SCROLL_DISPATCHER_PROVIDER,
    OVERLAY_CONTAINER_PROVIDER,
];

var __decorate$18 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$18 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
let Scrollable = class Scrollable {
    constructor(_elementRef, _scroll) {
        this._elementRef = _elementRef;
        this._scroll = _scroll;
    }
    ngOnInit() {
        this._scroll.register(this);
    }
    ngOnDestroy() {
        this._scroll.deregister(this);
    }
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     */
    elementScrolled() {
        return Observable.fromEvent(this._elementRef.nativeElement, 'scroll');
    }
    getElementRef() {
        return this._elementRef;
    }
};
Scrollable = __decorate$18([
    Directive({
        selector: '[cdk-scrollable]'
    }), 
    __metadata$18('design:paramtypes', [ElementRef, ScrollDispatcher])
], Scrollable);

var __decorate$13 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$13 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$3 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** Default set of positions for the overlay. Follows the behavior of a dropdown. */
let defaultPositionList = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
];
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
let OverlayOrigin = class OverlayOrigin {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
};
OverlayOrigin = __decorate$13([
    Directive({
        selector: '[cdk-overlay-origin], [overlay-origin]',
        exportAs: 'cdkOverlayOrigin',
    }), 
    __metadata$13('design:paramtypes', [ElementRef])
], OverlayOrigin);
/**
 * Directive to facilitate declarative creation of an Overlay using a ConnectedPositionStrategy.
 */
let ConnectedOverlayDirective = class ConnectedOverlayDirective {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    constructor(_overlay, templateRef, viewContainerRef, _dir) {
        this._overlay = _overlay;
        this._dir = _dir;
        this._open = false;
        this._hasBackdrop = false;
        this._offsetX = 0;
        this._offsetY = 0;
        /** Event emitted when the backdrop is clicked. */
        this.backdropClick = new EventEmitter();
        /** Event emitted when the position has changed. */
        this.positionChange = new EventEmitter();
        /** Event emitted when the overlay has been attached. */
        this.attach = new EventEmitter();
        /** Event emitted when the overlay has been detached. */
        this.detach = new EventEmitter();
        this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
    }
    /** The offset in pixels for the overlay connection point on the x-axis */
    get offsetX() {
        return this._offsetX;
    }
    set offsetX(offsetX) {
        this._offsetX = offsetX;
        if (this._position) {
            this._position.withOffsetX(offsetX);
        }
    }
    /** The offset in pixels for the overlay connection point on the y-axis */
    get offsetY() {
        return this._offsetY;
    }
    set offsetY(offsetY) {
        this._offsetY = offsetY;
        if (this._position) {
            this._position.withOffsetY(offsetY);
        }
    }
    /** Whether or not the overlay should attach a backdrop. */
    get hasBackdrop() {
        return this._hasBackdrop;
    }
    set hasBackdrop(value) {
        this._hasBackdrop = coerceBooleanProperty(value);
    }
    get open() {
        return this._open;
    }
    set open(value) {
        value ? this._attachOverlay() : this._detachOverlay();
        this._open = value;
    }
    /** The associated overlay reference. */
    get overlayRef() {
        return this._overlayRef;
    }
    /** The element's layout direction. */
    get dir() {
        return this._dir ? this._dir.value : 'ltr';
    }
    ngOnDestroy() {
        this._destroyOverlay();
    }
    /** Creates an overlay */
    _createOverlay() {
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig());
    }
    /** Builds the overlay config based on the directive's inputs */
    _buildConfig() {
        let overlayConfig = new OverlayState();
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }
        overlayConfig.hasBackdrop = this.hasBackdrop;
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        this._position = this._createPositionStrategy();
        overlayConfig.positionStrategy = this._position;
        return overlayConfig;
    }
    /** Returns the position strategy of the overlay to be set on the overlay config */
    _createPositionStrategy() {
        const pos = this.positions[0];
        const originPoint = { originX: pos.originX, originY: pos.originY };
        const overlayPoint = { overlayX: pos.overlayX, overlayY: pos.overlayY };
        const strategy = this._overlay.position()
            .connectedTo(this.origin.elementRef, originPoint, overlayPoint)
            .withOffsetX(this.offsetX)
            .withOffsetY(this.offsetY);
        this._handlePositionChanges(strategy);
        return strategy;
    }
    _handlePositionChanges(strategy) {
        for (let i = 1; i < this.positions.length; i++) {
            strategy.withFallbackPosition({ originX: this.positions[i].originX, originY: this.positions[i].originY }, { overlayX: this.positions[i].overlayX, overlayY: this.positions[i].overlayY });
        }
        this._positionSubscription =
            strategy.onPositionChange.subscribe(pos => this.positionChange.emit(pos));
    }
    /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */
    _attachOverlay() {
        if (!this._overlayRef) {
            this._createOverlay();
        }
        this._position.withDirection(this.dir);
        this._overlayRef.getState().direction = this.dir;
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
            this.attach.emit();
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(() => {
                this.backdropClick.emit();
            });
        }
    }
    /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */
    _detachOverlay() {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
            this._backdropSubscription = null;
        }
    }
    /** Destroys the overlay created by this directive. */
    _destroyOverlay() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
        }
        if (this._positionSubscription) {
            this._positionSubscription.unsubscribe();
        }
    }
};
__decorate$13([
    Input(), 
    __metadata$13('design:type', OverlayOrigin)
], ConnectedOverlayDirective.prototype, "origin", void 0);
__decorate$13([
    Input(), 
    __metadata$13('design:type', Array)
], ConnectedOverlayDirective.prototype, "positions", void 0);
__decorate$13([
    Input(), 
    __metadata$13('design:type', Number)
], ConnectedOverlayDirective.prototype, "offsetX", null);
__decorate$13([
    Input(), 
    __metadata$13('design:type', Object)
], ConnectedOverlayDirective.prototype, "offsetY", null);
__decorate$13([
    Input(), 
    __metadata$13('design:type', Object)
], ConnectedOverlayDirective.prototype, "width", void 0);
__decorate$13([
    Input(), 
    __metadata$13('design:type', Object)
], ConnectedOverlayDirective.prototype, "height", void 0);
__decorate$13([
    Input(), 
    __metadata$13('design:type', Object)
], ConnectedOverlayDirective.prototype, "minWidth", void 0);
__decorate$13([
    Input(), 
    __metadata$13('design:type', Object)
], ConnectedOverlayDirective.prototype, "minHeight", void 0);
__decorate$13([
    Input(), 
    __metadata$13('design:type', String)
], ConnectedOverlayDirective.prototype, "backdropClass", void 0);
__decorate$13([
    Input(), 
    __metadata$13('design:type', Object)
], ConnectedOverlayDirective.prototype, "hasBackdrop", null);
__decorate$13([
    Input(), 
    __metadata$13('design:type', Object)
], ConnectedOverlayDirective.prototype, "open", null);
__decorate$13([
    Output(), 
    __metadata$13('design:type', Object)
], ConnectedOverlayDirective.prototype, "backdropClick", void 0);
__decorate$13([
    Output(), 
    __metadata$13('design:type', Object)
], ConnectedOverlayDirective.prototype, "positionChange", void 0);
__decorate$13([
    Output(), 
    __metadata$13('design:type', Object)
], ConnectedOverlayDirective.prototype, "attach", void 0);
__decorate$13([
    Output(), 
    __metadata$13('design:type', Object)
], ConnectedOverlayDirective.prototype, "detach", void 0);
ConnectedOverlayDirective = __decorate$13([
    Directive({
        selector: '[cdk-connected-overlay], [connected-overlay]',
        exportAs: 'cdkConnectedOverlay'
    }),
    __param$3(3, Optional()), 
    __metadata$13('design:paramtypes', [Overlay, TemplateRef, ViewContainerRef, Dir])
], ConnectedOverlayDirective);
let OverlayModule_1 = class OverlayModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: OverlayModule_1,
            providers: [],
        };
    }
};
let OverlayModule = OverlayModule_1;
OverlayModule = OverlayModule_1 = __decorate$13([
    NgModule({
        imports: [PortalModule],
        exports: [ConnectedOverlayDirective, OverlayOrigin, Scrollable],
        declarations: [ConnectedOverlayDirective, OverlayOrigin, Scrollable],
        providers: [OVERLAY_PROVIDERS],
    }), 
    __metadata$13('design:paramtypes', [])
], OverlayModule);

var __decorate$22 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$22 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
const hasV8BreakIterator = typeof (window) !== 'undefined' ?
    (window.Intl && window.Intl.v8BreakIterator) :
    (typeof (Intl) !== 'undefined' && Intl.v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 * @docs-private
 */
let Platform = class Platform {
    constructor() {
        /** Layout Engines */
        this.EDGE = /(edge)/i.test(navigator.userAgent);
        this.TRIDENT = /(msie|trident)/i.test(navigator.userAgent);
        // EdgeHTML and Trident mock Blink specific things and need to excluded from this check.
        this.BLINK = !!(window.chrome || hasV8BreakIterator) && !!CSS && !this.EDGE && !this.TRIDENT;
        // Webkit is part of the userAgent in EdgeHTML Blink and Trident, so we need to
        // ensure that Webkit runs standalone and is not use as another engines base.
        this.WEBKIT = /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /** Browsers and Platform Types */
        this.IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        this.FIREFOX = /(firefox|minefield)/i.test(navigator.userAgent);
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = /android/i.test(navigator.userAgent) && !this.TRIDENT;
    }
};
Platform = __decorate$22([
    Injectable(), 
    __metadata$22('design:paramtypes', [])
], Platform);

var __decorate$21 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$21 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * The InteractivityChecker leans heavily on the ally.js accessibility utilities.
 * Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
 * supported.
 */
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
let InteractivityChecker = class InteractivityChecker {
    constructor(_platform) {
        this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */
    isDisabled(element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
    }
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */
    isVisible(element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    }
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */
    isTabbable(element) {
        let frameElement = getWindow(element).frameElement;
        if (frameElement) {
            let frameType = frameElement && frameElement.nodeName.toLowerCase();
            // Frame elements inherit their tabindex onto all child elements.
            if (getTabIndexValue(frameElement) === -1) {
                return false;
            }
            // Webkit and Blink consider anything inside of an <object> element as non-tabbable.
            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
                return false;
            }
            // Webkit and Blink disable tabbing to an element inside of an invisible frame.
            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
                return false;
            }
        }
        let nodeName = element.nodeName.toLowerCase();
        let tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
        }
        if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
        }
        if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
                // By default an <audio> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK) {
                // In Blink <audio controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
                // In Trident a <video> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK || this._platform.FIREFOX) {
                // In Chrome and Firefox <video controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
        }
        // In iOS the browser only considers some specific elements as tabbable.
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
        }
        return element.tabIndex >= 0;
    }
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @returns Whether the element is focusable.
     */
    isFocusable(element) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
    }
};
InteractivityChecker = __decorate$21([
    Injectable(), 
    __metadata$21('design:paramtypes', [Platform])
], InteractivityChecker);
/** Checks whether the specified element has any geometry / rectangles. */
function hasGeometry(element) {
    // Use logic from jQuery to check for an invisible element.
    // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}
/** Gets whether an element's  */
function isNativeFormElement(element) {
    let nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/** Gets whether an element is an <input type="hidden">. */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */
function isInputElement(element) {
    return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    let tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    const tabIndex = parseInt(element.getAttribute('tabindex'), 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */
function isPotentiallyTabbableIOS(element) {
    let nodeName = element.nodeName.toLowerCase();
    let inputType = nodeName === 'input' && element.type;
    return inputType === 'text'
        || inputType === 'password'
        || nodeName === 'select'
        || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */
function getWindow(node) {
    return node.ownerDocument.defaultView || window;
}

var __decorate$20 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$20 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * NOTE: This class currently uses a very simple (naive) approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like tabIndex > 0, flex `order`, and shadow roots can cause to two to misalign.
 * This will be replaced with a more intelligent solution before the library is considered stable.
 */
class FocusTrap {
    constructor(_element, _checker, _ngZone, deferAnchors = false) {
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._enabled = true;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    /** Whether the focus trap is active. */
    get enabled() { return this._enabled; }
    set enabled(val) {
        this._enabled = val;
        if (this._startAnchor && this._endAnchor) {
            this._startAnchor.tabIndex = this._endAnchor.tabIndex = this._enabled ? 0 : -1;
        }
    }
    /** Destroys the focus trap by cleaning up the anchors. */
    destroy() {
        if (this._startAnchor && this._startAnchor.parentNode) {
            this._startAnchor.parentNode.removeChild(this._startAnchor);
        }
        if (this._endAnchor && this._endAnchor.parentNode) {
            this._endAnchor.parentNode.removeChild(this._endAnchor);
        }
        this._startAnchor = this._endAnchor = null;
    }
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     */
    attachAnchors() {
        if (!this._startAnchor) {
            this._startAnchor = this._createAnchor();
        }
        if (!this._endAnchor) {
            this._endAnchor = this._createAnchor();
        }
        this._ngZone.runOutsideAngular(() => {
            this._startAnchor.addEventListener('focus', () => this.focusLastTabbableElement());
            this._endAnchor.addEventListener('focus', () => this.focusFirstTabbableElement());
            this._element.parentNode.insertBefore(this._startAnchor, this._element);
            this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
        });
    }
    /**
     * Waits for microtask queue to empty, then focuses
     * the first tabbable element within the focus trap region.
     */
    focusFirstTabbableElementWhenReady() {
        this._ngZone.onMicrotaskEmpty.first().subscribe(() => this.focusFirstTabbableElement());
    }
    /**
     * Waits for microtask queue to empty, then focuses
     * the last tabbable element within the focus trap region.
     */
    focusLastTabbableElementWhenReady() {
        this._ngZone.onMicrotaskEmpty.first().subscribe(() => this.focusLastTabbableElement());
    }
    /** Focuses the first tabbable element within the focus trap region. */
    focusFirstTabbableElement() {
        let redirectToElement = this._element.querySelector('[cdk-focus-start]') ||
            this._getFirstTabbableElement(this._element);
        if (redirectToElement) {
            redirectToElement.focus();
        }
    }
    /** Focuses the last tabbable element within the focus trap region. */
    focusLastTabbableElement() {
        let focusTargets = this._element.querySelectorAll('[cdk-focus-end]');
        let redirectToElement = null;
        if (focusTargets.length) {
            redirectToElement = focusTargets[focusTargets.length - 1];
        }
        else {
            redirectToElement = this._getLastTabbableElement(this._element);
        }
        if (redirectToElement) {
            redirectToElement.focus();
        }
    }
    /** Get the first tabbable element from a DOM subtree (inclusive). */
    _getFirstTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.
        let children = root.children || root.childNodes;
        for (let i = 0; i < children.length; i++) {
            let tabbableChild = children[i].nodeType === Node.ELEMENT_NODE ?
                this._getFirstTabbableElement(children[i]) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    }
    /** Get the last tabbable element from a DOM subtree (inclusive). */
    _getLastTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        let children = root.children || root.childNodes;
        for (let i = children.length - 1; i >= 0; i--) {
            let tabbableChild = children[i].nodeType === Node.ELEMENT_NODE ?
                this._getLastTabbableElement(children[i]) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    }
    /** Creates an anchor element. */
    _createAnchor() {
        let anchor = document.createElement('div');
        anchor.tabIndex = this._enabled ? 0 : -1;
        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        return anchor;
    }
}
/** Factory that allows easy instantiation of focus traps. */
let FocusTrapFactory = class FocusTrapFactory {
    constructor(_checker, _ngZone) {
        this._checker = _checker;
        this._ngZone = _ngZone;
    }
    create(element, deferAnchors = false) {
        return new FocusTrap(element, this._checker, this._ngZone, deferAnchors);
    }
};
FocusTrapFactory = __decorate$20([
    Injectable(), 
    __metadata$20('design:paramtypes', [InteractivityChecker, NgZone])
], FocusTrapFactory);
/**
 * Directive for trapping focus within a region.
 * @deprecated
 */
let FocusTrapDeprecatedDirective = class FocusTrapDeprecatedDirective {
    constructor(_elementRef, _focusTrapFactory) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    /** Whether the focus trap is active. */
    get disabled() { return !this.focusTrap.enabled; }
    set disabled(val) {
        this.focusTrap.enabled = !coerceBooleanProperty(val);
    }
    ngOnDestroy() {
        this.focusTrap.destroy();
    }
    ngAfterContentInit() {
        this.focusTrap.attachAnchors();
    }
};
__decorate$20([
    Input(), 
    __metadata$20('design:type', Boolean)
], FocusTrapDeprecatedDirective.prototype, "disabled", null);
FocusTrapDeprecatedDirective = __decorate$20([
    Directive({
        selector: 'cdk-focus-trap',
    }), 
    __metadata$20('design:paramtypes', [ElementRef, FocusTrapFactory])
], FocusTrapDeprecatedDirective);
/** Directive for trapping focus within a region. */
let FocusTrapDirective = class FocusTrapDirective {
    constructor(_elementRef, _focusTrapFactory) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    /** Whether the focus trap is active. */
    get enabled() { return this.focusTrap.enabled; }
    set enabled(value) { this.focusTrap.enabled = coerceBooleanProperty(value); }
    ngOnDestroy() {
        this.focusTrap.destroy();
    }
    ngAfterContentInit() {
        this.focusTrap.attachAnchors();
    }
};
__decorate$20([
    Input('cdkTrapFocus'), 
    __metadata$20('design:type', Boolean)
], FocusTrapDirective.prototype, "enabled", null);
FocusTrapDirective = __decorate$20([
    Directive({
        selector: '[cdkTrapFocus]'
    }), 
    __metadata$20('design:paramtypes', [ElementRef, FocusTrapFactory])
], FocusTrapDirective);

var __decorate$23 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$23 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$5 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const LIVE_ANNOUNCER_ELEMENT_TOKEN = new OpaqueToken('liveAnnouncerElement');
let LiveAnnouncer = class LiveAnnouncer {
    constructor(elementToken) {
        // We inject the live element as `any` because the constructor signature cannot reference
        // browser globals (HTMLElement) on non-browser environments, since having a class decorator
        // causes TypeScript to preserve the constructor signature types.
        this._liveElement = elementToken || this._createLiveElement();
    }
    /**
     * Announces a message to screenreaders.
     * @param message Message to be announced to the screenreader
     * @param politeness The politeness of the announcer element
     */
    announce(message, politeness = 'polite') {
        this._liveElement.textContent = '';
        // TODO: ensure changing the politeness works on all environments we support.
        this._liveElement.setAttribute('aria-live', politeness);
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        setTimeout(() => this._liveElement.textContent = message, 100);
    }
    /** Removes the aria-live element from the DOM. */
    _removeLiveElement() {
        if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);
        }
    }
    _createLiveElement() {
        let liveEl = document.createElement('div');
        liveEl.classList.add('cdk-visually-hidden');
        liveEl.setAttribute('aria-atomic', 'true');
        liveEl.setAttribute('aria-live', 'polite');
        document.body.appendChild(liveEl);
        return liveEl;
    }
};
LiveAnnouncer = __decorate$23([
    Injectable(),
    __param$5(0, Optional()),
    __param$5(0, Inject(LIVE_ANNOUNCER_ELEMENT_TOKEN)), 
    __metadata$23('design:paramtypes', [Object])
], LiveAnnouncer);
function LIVE_ANNOUNCER_PROVIDER_FACTORY(parentDispatcher, liveElement) {
    return parentDispatcher || new LiveAnnouncer(liveElement);
}

const LIVE_ANNOUNCER_PROVIDER = {
    // If there is already a LiveAnnouncer available, use that. Otherwise, provide a new one.
    provide: LiveAnnouncer,
    deps: [
        [new Optional(), new SkipSelf(), LiveAnnouncer],
        [new Optional(), new Inject(LIVE_ANNOUNCER_ELEMENT_TOKEN)]
    ],
    useFactory: LIVE_ANNOUNCER_PROVIDER_FACTORY
};

let supportedInputTypes;
/** @returns The input types supported by this browser. */
function getSupportedInputTypes() {
    if (!supportedInputTypes) {
        let featureTestInput = document.createElement('input');
        supportedInputTypes = new Set([
            // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
            // first changing it to something else:
            // The specified value "" does not conform to the required format.
            // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
            'color',
            'button',
            'checkbox',
            'date',
            'datetime-local',
            'email',
            'file',
            'hidden',
            'image',
            'month',
            'number',
            'password',
            'radio',
            'range',
            'reset',
            'search',
            'submit',
            'tel',
            'text',
            'time',
            'url',
            'week',
        ].filter(value => {
            featureTestInput.setAttribute('type', value);
            return featureTestInput.type === value;
        }));
    }
    return supportedInputTypes;
}

var __decorate$24 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$24 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let PlatformModule_1 = class PlatformModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: PlatformModule_1,
            providers: [],
        };
    }
};
let PlatformModule = PlatformModule_1;
PlatformModule = PlatformModule_1 = __decorate$24([
    NgModule({
        providers: [Platform]
    }), 
    __metadata$24('design:paramtypes', [])
], PlatformModule);

var __decorate$19 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$19 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let A11yModule_1 = class A11yModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: A11yModule_1,
            providers: [],
        };
    }
};
let A11yModule = A11yModule_1;
A11yModule = A11yModule_1 = __decorate$19([
    NgModule({
        imports: [CommonModule, PlatformModule],
        declarations: [FocusTrapDirective, FocusTrapDeprecatedDirective],
        exports: [FocusTrapDirective, FocusTrapDeprecatedDirective],
        providers: [InteractivityChecker, FocusTrapFactory, LIVE_ANNOUNCER_PROVIDER]
    }), 
    __metadata$19('design:paramtypes', [])
], A11yModule);

var __decorate$25 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$25 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// "Polyfill" for `Node.replaceWith()`.
// cf. https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith
function _replaceWith(toReplaceEl, otherEl) {
    toReplaceEl.parentElement.replaceChild(otherEl, toReplaceEl);
}
/** @docs-private */
let DomProjectionHost = class DomProjectionHost {
    constructor(ref) {
        this.ref = ref;
    }
};
DomProjectionHost = __decorate$25([
    Directive({
        selector: 'cdk-dom-projection-host'
    }), 
    __metadata$25('design:paramtypes', [ElementRef])
], DomProjectionHost);
/** @docs-private */
let DomProjection = class DomProjection {
    /**
     * Project an element into a host element.
     * Replace a host element by another element. This also replaces the children of the element
     * by the children of the host.
     *
     * It should be used like this:
     *
     * ```
     *   @Component({
     *     template: `<div>
     *       <cdk-dom-projection-host>
     *         <div>other</div>
     *         <ng-content></ng-content>
     *       </cdk-dom-projection-host>
     *     </div>`
     *   })
     *   class Cmpt {
     *     constructor(private _projector: DomProjection, private _el: ElementRef) {}
     *     ngOnInit() { this._projector.project(this._el, this._projector); }
     *   }
     * ```
     *
     * This component will move the content of the element it's applied to in the outer div. Because
     * `project()` also move the children of the host inside the projected element, the element will
     * contain the `<div>other</div>` HTML as well as its own children.
     *
     * Note: without `<ng-content></ng-content>` the projection will project an empty element.
     *
     * @param ref ElementRef to be projected.
     * @param host Projection host into which to project the `ElementRef`.
     */
    project(ref, host) {
        const projectedEl = ref.nativeElement;
        const hostEl = host.ref.nativeElement;
        const childNodes = projectedEl.childNodes;
        let child = childNodes[0];
        // We hoist all of the projected element's children out into the projected elements position
        // because we *only* want to move the projected element and not its children.
        _replaceWith(projectedEl, child);
        let l = childNodes.length;
        while (l--) {
            child.parentNode.insertBefore(childNodes[0], child.nextSibling);
            child = child.nextSibling; // nextSibling is now the childNodes[0].
        }
        // Insert all host children under the projectedEl, then replace host by component.
        l = hostEl.childNodes.length;
        while (l--) {
            projectedEl.appendChild(hostEl.childNodes[0]);
        }
        _replaceWith(hostEl, projectedEl);
        // At this point the host is replaced by the component. Nothing else to be done.
    }
};
DomProjection = __decorate$25([
    Injectable(), 
    __metadata$25('design:paramtypes', [])
], DomProjection);
/** @docs-private */
let ProjectionModule_1 = class ProjectionModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: ProjectionModule_1,
        };
    }
};
let ProjectionModule = ProjectionModule_1;
ProjectionModule = ProjectionModule_1 = __decorate$25([
    NgModule({
        exports: [DomProjectionHost],
        declarations: [DomProjectionHost],
        providers: [DomProjection],
    }), 
    __metadata$25('design:paramtypes', [])
], ProjectionModule);

var __decorate$26 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$26 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * The FullscreenOverlayContainer is the alternative to OverlayContainer
 * that supports correct displaying of overlay elements in Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 * It should be provided in the root component that way:
 * providers: [
 *   {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
 * ],
 */
let FullscreenOverlayContainer = class FullscreenOverlayContainer extends OverlayContainer {
    _createContainer() {
        super._createContainer();
        this._adjustParentForFullscreenChange();
        this._addFullscreenChangeListener(() => this._adjustParentForFullscreenChange());
    }
    _adjustParentForFullscreenChange() {
        if (!this._containerElement) {
            return;
        }
        let fullscreenElement = this.getFullscreenElement();
        let parent = fullscreenElement || document.body;
        parent.appendChild(this._containerElement);
    }
    _addFullscreenChangeListener(fn) {
        if (document.fullscreenEnabled) {
            document.addEventListener('fullscreenchange', fn);
        }
        else if (document.webkitFullscreenEnabled) {
            document.addEventListener('webkitfullscreenchange', fn);
        }
        else if (document.mozFullScreenEnabled) {
            document.addEventListener('mozfullscreenchange', fn);
        }
        else if (document.msFullscreenEnabled) {
            document.addEventListener('MSFullscreenChange', fn);
        }
    }
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
    */
    getFullscreenElement() {
        return document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement ||
            null;
    }
};
FullscreenOverlayContainer = __decorate$26([
    Injectable(), 
    __metadata$26('design:paramtypes', [])
], FullscreenOverlayContainer);

var __decorate$27 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$27 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Adjusts configuration of our gesture library, Hammer. */
let GestureConfig = class GestureConfig extends HammerGestureConfig {
    constructor() {
        super();
        this._hammer = typeof window !== 'undefined' ? window.Hammer : null;
        /* List of new event names to add to the gesture support list */
        this.events = this._hammer ? [
            'longpress',
            'slide',
            'slidestart',
            'slideend',
            'slideright',
            'slideleft'
        ] : [];
        if (!this._hammer && isDevMode()) {
            console.warn('Could not find HammerJS. Certain Angular Material ' +
                'components may not work correctly.');
        }
    }
    /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://www.google.com/design/spec/patterns/gestures.html#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param element Element to which to assign the new HammerJS gestures.
     * @returns Newly-created HammerJS instance.
     */
    buildHammer(element) {
        const mc = new this._hammer(element);
        // Default Hammer Recognizers.
        let pan = new this._hammer.Pan();
        let swipe = new this._hammer.Swipe();
        let press = new this._hammer.Press();
        // Notice that a HammerJS recognizer can only depend on one other recognizer once.
        // Otherwise the previous `recognizeWith` will be dropped.
        // TODO: Confirm threshold numbers with Material Design UX Team
        let slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        let longpress = this._createRecognizer(press, { event: 'longpress', time: 500 });
        // Overwrite the default `pan` event to use the swipe event.
        pan.recognizeWith(swipe);
        // Add customized gestures to Hammer manager
        mc.add([swipe, press, pan, slide, longpress]);
        return mc;
    }
    /** Creates a new recognizer, without affecting the default recognizers of HammerJS */
    _createRecognizer(base, options, ...inheritances) {
        let recognizer = new base.constructor(options);
        inheritances.push(base);
        inheritances.forEach(item => recognizer.recognizeWith(item));
        return recognizer;
    }
};
GestureConfig = __decorate$27([
    Injectable(), 
    __metadata$27('design:paramtypes', [])
], GestureConfig);

/**
 * Class to be used to power selecting one or more options from a list.
 * @docs-private
 */
class SelectionModel {
    constructor(_isMulti = false, initiallySelectedValues, _emitChanges = true) {
        this._isMulti = _isMulti;
        this._emitChanges = _emitChanges;
        /** Currently-selected values. */
        this._selection = new Set();
        /** Keeps track of the deselected options that haven't been emitted by the change event. */
        this._deselectedToEmit = [];
        /** Keeps track of the selected option that haven't been emitted by the change event. */
        this._selectedToEmit = [];
        /** Event emitted when the value has changed. */
        this.onChange = this._emitChanges ? new Subject() : null;
        if (initiallySelectedValues) {
            if (_isMulti) {
                initiallySelectedValues.forEach(value => this._markSelected(value));
            }
            else {
                this._markSelected(initiallySelectedValues[0]);
            }
            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0;
        }
    }
    /** Selected value(s). */
    get selected() {
        if (!this._selected) {
            this._selected = Array.from(this._selection.values());
        }
        return this._selected;
    }
    /**
     * Selects a value or an array of values.
     */
    select(value) {
        this._markSelected(value);
        this._emitChangeEvent();
    }
    /**
     * Deselects a value or an array of values.
     */
    deselect(value) {
        this._unmarkSelected(value);
        this._emitChangeEvent();
    }
    /**
     * Toggles a value between selected and deselected.
     */
    toggle(value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    }
    /**
     * Clears all of the selected values.
     */
    clear() {
        this._unmarkAll();
        this._emitChangeEvent();
    }
    /**
     * Determines whether a value is selected.
     */
    isSelected(value) {
        return this._selection.has(value);
    }
    /**
     * Determines whether the model does not have a value.
     */
    isEmpty() {
        return this._selection.size === 0;
    }
    /**
     * Determines whether the model has a value.
     */
    hasValue() {
        return !this.isEmpty();
    }
    /**
     * Sorts the selected values based on a predicate function.
     */
    sort(predicate) {
        if (this._isMulti && this.selected) {
            this._selected.sort(predicate);
        }
    }
    /** Emits a change event and clears the records of selected and deselected values. */
    _emitChangeEvent() {
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            let eventData = new SelectionChange(this._selectedToEmit, this._deselectedToEmit);
            this.onChange.next(eventData);
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
        }
        this._selected = null;
    }
    /** Selects a value. */
    _markSelected(value) {
        if (!this.isSelected(value)) {
            if (!this._isMulti) {
                this._unmarkAll();
            }
            this._selection.add(value);
            if (this._emitChanges) {
                this._selectedToEmit.push(value);
            }
        }
    }
    /** Deselects a value. */
    _unmarkSelected(value) {
        if (this.isSelected(value)) {
            this._selection.delete(value);
            if (this._emitChanges) {
                this._deselectedToEmit.push(value);
            }
        }
    }
    /** Clears out the selected values. */
    _unmarkAll() {
        if (!this.isEmpty()) {
            this._selection.forEach(value => this._unmarkSelected(value));
        }
    }
}
/**
 * Describes an event emitted when the value of a MdSelectionModel has changed.
 * @docs-private
 */
class SelectionChange {
    constructor(added, removed) {
        this.added = added;
        this.removed = removed;
    }
}

/**
 * Screenreaders will often fire fake mousedown events when a focusable element
 * is activated using the keyboard. We can typically distinguish between these faked
 * mousedown events and real mousedown events using the "buttons" property. While
 * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
 * the left mouse button), faked mousedowns will usually set the property value to 0.
 */
function isFakeMousedownFromScreenReader(event) {
    return event.buttons === 0;
}

var __decorate$28 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$28 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
let UniqueSelectionDispatcher = class UniqueSelectionDispatcher {
    constructor() {
        this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
     * @param id ID of the item.
     * @param name Name of the item.
     */
    notify(id, name) {
        for (let listener of this._listeners) {
            listener(id, name);
        }
    }
    /** Listen for future changes to item selection. */
    listen(listener) {
        this._listeners.push(listener);
    }
};
UniqueSelectionDispatcher = __decorate$28([
    Injectable(), 
    __metadata$28('design:paramtypes', [])
], UniqueSelectionDispatcher);
function UNIQUE_SELECTION_DISPATCHER_PROVIDER_FACTORY(parentDispatcher) {
    return parentDispatcher || new UniqueSelectionDispatcher();
}
const UNIQUE_SELECTION_DISPATCHER_PROVIDER = {
    // If there is already a dispatcher available, use that. Otherwise, provide a new one.
    provide: UniqueSelectionDispatcher,
    deps: [[new Optional(), new SkipSelf(), UniqueSelectionDispatcher]],
    useFactory: UNIQUE_SELECTION_DISPATCHER_PROVIDER_FACTORY
};

var __decorate$30 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$30 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
// that a value of around 650ms seems appropriate.
const TOUCH_BUFFER_MS = 650;
/** Monitors mouse and keyboard events to determine the cause of focus events. */
let FocusOriginMonitor = class FocusOriginMonitor {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        /** The focus origin that the next focus event is a result of. */
        this._origin = null;
        /** Whether the window has just been focused. */
        this._windowFocused = false;
        /** Weak map of elements being monitored to their info. */
        this._elementInfo = new WeakMap();
        this._ngZone.runOutsideAngular(() => this._registerDocumentEvents());
    }
    /**
     * Monitors focus on an element and applies appropriate CSS classes.
     * @param element The element to monitor
     * @param renderer The renderer to use to apply CSS classes to the element.
     * @param checkChildren Whether to count the element as focused when its children are focused.
     * @returns An observable that emits when the focus state of the element changes.
     *     When the element is blurred, null will be emitted.
     */
    monitor(element, renderer, checkChildren) {
        // Check if we're already monitoring this element.
        if (this._elementInfo.has(element)) {
            let info = this._elementInfo.get(element);
            info.checkChildren = checkChildren;
            return info.subject.asObservable();
        }
        // Create monitored element info.
        let info = {
            unlisten: null,
            checkChildren: checkChildren,
            renderer: renderer,
            subject: new Subject()
        };
        this._elementInfo.set(element, info);
        // Start listening. We need to listen in capture phase since focus events don't bubble.
        let focusListener = (event) => this._onFocus(event, element);
        let blurListener = (event) => this._onBlur(event, element);
        this._ngZone.runOutsideAngular(() => {
            element.addEventListener('focus', focusListener, true);
            element.addEventListener('blur', blurListener, true);
        });
        // Create an unlisten function for later.
        info.unlisten = () => {
            element.removeEventListener('focus', focusListener, true);
            element.removeEventListener('blur', blurListener, true);
        };
        return info.subject.asObservable();
    }
    /**
     * Stops monitoring an element and removes all focus classes.
     * @param element The element to stop monitoring.
     */
    unmonitor(element) {
        let elementInfo = this._elementInfo.get(element);
        if (elementInfo) {
            elementInfo.unlisten();
            elementInfo.subject.complete();
            this._setClasses(element, null);
            this._elementInfo.delete(element);
        }
    }
    /**
     * Focuses the element via the specified focus origin.
     * @param element The element to focus.
     * @param renderer The renderer to use to invoke the focus method on the element.
     * @param origin The focus origin.
     */
    focusVia(element, renderer, origin) {
        this._setOriginForCurrentEventQueue(origin);
        renderer.invokeElementMethod(element, 'focus');
    }
    /** Register necessary event listeners on the document and window. */
    _registerDocumentEvents() {
        // Note: we listen to events in the capture phase so we can detect them even if the user stops
        // propagation.
        // On keydown record the origin and clear any touch event that may be in progress.
        document.addEventListener('keydown', () => {
            this._lastTouchTarget = null;
            this._setOriginForCurrentEventQueue('keyboard');
        }, true);
        // On mousedown record the origin only if there is not touch target, since a mousedown can
        // happen as a result of a touch event.
        document.addEventListener('mousedown', () => {
            if (!this._lastTouchTarget) {
                this._setOriginForCurrentEventQueue('mouse');
            }
        }, true);
        // When the touchstart event fires the focus event is not yet in the event queue. This means
        // we can't rely on the trick used above (setting timeout of 0ms). Instead we wait 650ms to
        // see if a focus happens.
        document.addEventListener('touchstart', (event) => {
            if (this._touchTimeout != null) {
                clearTimeout(this._touchTimeout);
            }
            this._lastTouchTarget = event.target;
            this._touchTimeout = setTimeout(() => this._lastTouchTarget = null, TOUCH_BUFFER_MS);
        }, true);
        // Make a note of when the window regains focus, so we can restore the origin info for the
        // focused element.
        window.addEventListener('focus', () => {
            this._windowFocused = true;
            setTimeout(() => this._windowFocused = false, 0);
        });
    }
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param element The element to update the classes on.
     * @param origin The focus origin.
     */
    _setClasses(element, origin) {
        let renderer = this._elementInfo.get(element).renderer;
        renderer.setElementClass(element, 'cdk-focused', !!origin);
        renderer.setElementClass(element, 'cdk-touch-focused', origin === 'touch');
        renderer.setElementClass(element, 'cdk-keyboard-focused', origin === 'keyboard');
        renderer.setElementClass(element, 'cdk-mouse-focused', origin === 'mouse');
        renderer.setElementClass(element, 'cdk-program-focused', origin === 'program');
    }
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @param origin The origin to set.
     */
    _setOriginForCurrentEventQueue(origin) {
        this._origin = origin;
        setTimeout(() => this._origin = null, 0);
    }
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @param event The focus event to check.
     * @returns Whether the event was caused by a touch.
     */
    _wasCausedByTouch(event) {
        // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
        // Consider the following dom structure:
        //
        // <div #parent tabindex="0" cdkFocusClasses>
        //   <div #child (click)="#parent.focus()"></div>
        // </div>
        //
        // If the user touches the #child element and the #parent is programmatically focused as a
        // result, this code will still consider it to have been caused by the touch event and will
        // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
        // relatively small edge-case that can be worked around by using
        // focusVia(parentEl, renderer,  'program') to focus the parent element.
        //
        // If we decide that we absolutely must handle this case correctly, we can do so by listening
        // for the first focus event after the touchstart, and then the first blur event after that
        // focus event. When that blur event fires we know that whatever follows is not a result of the
        // touchstart.
        let focusTarget = event.target;
        return this._lastTouchTarget instanceof Node && focusTarget instanceof Node &&
            (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
    }
    /**
     * Handles focus events on a registered element.
     * @param event The focus event.
     * @param element The monitored element.
     */
    _onFocus(event, element) {
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // If we are not counting child-element-focus as focused, make sure that the event target is the
        // monitored element itself.
        if (!this._elementInfo.get(element).checkChildren && element !== event.target) {
            return;
        }
        // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
        // 1) The window has just regained focus, in which case we want to restore the focused state of
        //    the element from before the window blurred.
        // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
        // 3) The element was programmatically focused, in which case we should mark the origin as
        //    'program'.
        if (!this._origin) {
            if (this._windowFocused && this._lastFocusOrigin) {
                this._origin = this._lastFocusOrigin;
            }
            else if (this._wasCausedByTouch(event)) {
                this._origin = 'touch';
            }
            else {
                this._origin = 'program';
            }
        }
        this._setClasses(element, this._origin);
        this._elementInfo.get(element).subject.next(this._origin);
        this._lastFocusOrigin = this._origin;
        this._origin = null;
    }
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */
    _onBlur(event, element) {
        // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
        // order to focus another child of the monitored element.
        if (this._elementInfo.get(element).checkChildren && event.relatedTarget instanceof Node &&
            element.contains(event.relatedTarget)) {
            return;
        }
        this._setClasses(element, null);
        this._elementInfo.get(element).subject.next(null);
    }
};
FocusOriginMonitor = __decorate$30([
    Injectable(), 
    __metadata$30('design:paramtypes', [NgZone])
], FocusOriginMonitor);
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
let CdkMonitorFocus = class CdkMonitorFocus {
    constructor(_elementRef, _focusOriginMonitor, renderer) {
        this._elementRef = _elementRef;
        this._focusOriginMonitor = _focusOriginMonitor;
        this.cdkFocusChange = new EventEmitter();
        this._focusOriginMonitor.monitor(this._elementRef.nativeElement, renderer, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus'))
            .subscribe(origin => this.cdkFocusChange.emit(origin));
    }
    ngOnDestroy() {
        this._focusOriginMonitor.unmonitor(this._elementRef.nativeElement);
    }
};
__decorate$30([
    Output(), 
    __metadata$30('design:type', Object)
], CdkMonitorFocus.prototype, "cdkFocusChange", void 0);
CdkMonitorFocus = __decorate$30([
    Directive({
        selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]',
    }), 
    __metadata$30('design:paramtypes', [ElementRef, FocusOriginMonitor, Renderer])
], CdkMonitorFocus);
function FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY(parentDispatcher, ngZone) {
    return parentDispatcher || new FocusOriginMonitor(ngZone);
}
const FOCUS_ORIGIN_MONITOR_PROVIDER = {
    // If there is already a FocusOriginMonitor available, use that. Otherwise, provide a new one.
    provide: FocusOriginMonitor,
    deps: [[new Optional(), new SkipSelf(), FocusOriginMonitor], NgZone],
    useFactory: FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY
};

/**
 * Applies a CSS transform to an element, including browser-prefixed properties.
 * @param element
 * @param transformValue
 */
function applyCssTransform(element, transformValue) {
    // It's important to trim the result, because the browser will ignore the set operation
    // if the string contains only whitespace.
    let value = transformValue.trim();
    element.style.transform = value;
    element.style.webkitTransform = value;
}

var __decorate$29 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$29 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let StyleModule = class StyleModule {
};
StyleModule = __decorate$29([
    NgModule({
        declarations: [CdkMonitorFocus],
        exports: [CdkMonitorFocus],
        providers: [FOCUS_ORIGIN_MONITOR_PROVIDER],
    }), 
    __metadata$29('design:paramtypes', [])
], StyleModule);

/** @docs-private */
class AnimationCurves {
}
AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
/** @docs-private */
class AnimationDurations {
}
AnimationDurations.COMPLEX = '375ms';
AnimationDurations.ENTERING = '225ms';
AnimationDurations.EXITING = '195ms';

/** Coerces a data-bound value (typically a string) to a number. */
function coerceNumberProperty(value, fallbackValue = 0) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return isNaN(parseFloat(value)) || isNaN(Number(value)) ? fallbackValue : Number(value);
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdCoreModule_1 = class MdCoreModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdCoreModule_1,
            providers: [],
        };
    }
};
let MdCoreModule = MdCoreModule_1;
MdCoreModule = MdCoreModule_1 = __decorate([
    NgModule({
        imports: [
            MdLineModule,
            RtlModule,
            MdRippleModule,
            ObserveContentModule,
            PortalModule,
            OverlayModule,
            A11yModule,
            MdOptionModule,
            MdSelectionModule,
        ],
        exports: [
            MdLineModule,
            RtlModule,
            MdRippleModule,
            ObserveContentModule,
            PortalModule,
            OverlayModule,
            A11yModule,
            MdOptionModule,
            MdSelectionModule,
        ],
    }), 
    __metadata('design:paramtypes', [])
], MdCoreModule);

var __decorate$33 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$33 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$6 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Provider Expression that allows md-button-toggle-group to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
const MD_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MdButtonToggleGroup),
    multi: true
};
let _uniqueIdCounter$1 = 0;
/** Change event object emitted by MdButtonToggle. */
class MdButtonToggleChange {
}
/** Exclusive selection button toggle group that behaves like a radio-button group. */
let MdButtonToggleGroup = class MdButtonToggleGroup {
    constructor() {
        /** The value for the button toggle group. Should match currently selected button toggle. */
        this._value = null;
        /** The HTML name attribute applied to toggles in this group. */
        this._name = `md-button-toggle-group-${_uniqueIdCounter$1++}`;
        /** Disables all toggles in the group. */
        this._disabled = null;
        /** Whether the button toggle group should be vertical. */
        this._vertical = false;
        /** The currently selected button toggle, should match the value. */
        this._selected = null;
        /** Whether the button toggle group is initialized or not. */
        this._isInitialized = false;
        /**
         * The method to be called in order to update ngModel.
         * Now `ngModel` binding is not supported in multiple selection mode.
         */
        this._controlValueAccessorChangeFn = (value) => { };
        /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
        this.onTouched = () => { };
        /** Child button toggle buttons. */
        this._buttonToggles = null;
        this._change = new EventEmitter();
    }
    ngAfterViewInit() {
        this._isInitialized = true;
    }
    /** `name` attribute for the underlying `input` element. */
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
        this._updateButtonToggleNames();
    }
    /** Whether the toggle group is disabled. */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    /** Whether the toggle group is vertical. */
    get vertical() {
        return this._vertical;
    }
    set vertical(value) {
        this._vertical = coerceBooleanProperty(value);
    }
    /** Value of the toggle group. */
    get value() {
        return this._value;
    }
    set value(newValue) {
        if (this._value != newValue) {
            this._value = newValue;
            this._updateSelectedButtonToggleFromValue();
            // Only emit a change event if the view is completely initialized.
            // We don't want to emit a change event for the initial values.
            if (this._isInitialized) {
                this._emitChangeEvent();
            }
        }
    }
    /** Whether the toggle group is selected. */
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this._selected = selected;
        this.value = selected ? selected.value : null;
        if (selected && !selected.checked) {
            selected.checked = true;
        }
    }
    /** Event emitted when the group's value changes. */
    get change() {
        return this._change.asObservable();
    }
    _updateButtonToggleNames() {
        if (this._buttonToggles) {
            this._buttonToggles.forEach((toggle) => {
                toggle.name = this._name;
            });
        }
    }
    // TODO: Refactor into shared code with radio.
    _updateSelectedButtonToggleFromValue() {
        let isAlreadySelected = this._selected != null && this._selected.value == this._value;
        if (this._buttonToggles != null && !isAlreadySelected) {
            let matchingButtonToggle = this._buttonToggles.filter(buttonToggle => buttonToggle.value == this._value)[0];
            if (matchingButtonToggle) {
                this.selected = matchingButtonToggle;
            }
            else if (this.value == null) {
                this.selected = null;
                this._buttonToggles.forEach(buttonToggle => {
                    buttonToggle.checked = false;
                });
            }
        }
    }
    /** Dispatch change event with current selection and group value. */
    _emitChangeEvent() {
        let event = new MdButtonToggleChange();
        event.source = this._selected;
        event.value = this._value;
        this._controlValueAccessorChangeFn(event.value);
        this._change.emit(event);
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value Value to be set to the model.
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * Registers a callback that will be triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param fn On change callback function.
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback that will be triggered when the control has been touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn On touch callback function.
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Toggles the disabled state of the component. Implemented as part of ControlValueAccessor.
     * @param isDisabled Whether the component should be disabled.
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
};
__decorate$33([
    ContentChildren(forwardRef(() => MdButtonToggle)), 
    __metadata$33('design:type', QueryList)
], MdButtonToggleGroup.prototype, "_buttonToggles", void 0);
__decorate$33([
    Input(), 
    __metadata$33('design:type', String)
], MdButtonToggleGroup.prototype, "name", null);
__decorate$33([
    Input(), 
    __metadata$33('design:type', Boolean)
], MdButtonToggleGroup.prototype, "disabled", null);
__decorate$33([
    Input(), 
    __metadata$33('design:type', Boolean)
], MdButtonToggleGroup.prototype, "vertical", null);
__decorate$33([
    Input(), 
    __metadata$33('design:type', Object)
], MdButtonToggleGroup.prototype, "value", null);
__decorate$33([
    Input(), 
    __metadata$33('design:type', Object)
], MdButtonToggleGroup.prototype, "selected", null);
__decorate$33([
    Output(), 
    __metadata$33('design:type', Observable)
], MdButtonToggleGroup.prototype, "change", null);
MdButtonToggleGroup = __decorate$33([
    Directive({
        selector: 'md-button-toggle-group:not([multiple]), mat-button-toggle-group:not([multiple])',
        providers: [MD_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR],
        host: {
            '[class.mat-button-toggle-group]': 'true',
            'role': 'radiogroup',
            '[class.mat-button-toggle-vertical]': 'vertical'
        },
        exportAs: 'mdButtonToggleGroup',
    }), 
    __metadata$33('design:paramtypes', [])
], MdButtonToggleGroup);
/** Multiple selection button-toggle group. `ngModel` is not supported in this mode. */
let MdButtonToggleGroupMultiple = class MdButtonToggleGroupMultiple {
    constructor() {
        /** Disables all toggles in the group. */
        this._disabled = null;
        /** Whether the button toggle group should be vertical. */
        this._vertical = false;
    }
    /** Whether the toggle group is disabled. */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = (value != null && value !== false) ? true : null;
    }
    /** Whether the toggle group is vertical. */
    get vertical() {
        return this._vertical;
    }
    set vertical(value) {
        this._vertical = coerceBooleanProperty(value);
    }
};
__decorate$33([
    Input(), 
    __metadata$33('design:type', Boolean)
], MdButtonToggleGroupMultiple.prototype, "disabled", null);
__decorate$33([
    Input(), 
    __metadata$33('design:type', Boolean)
], MdButtonToggleGroupMultiple.prototype, "vertical", null);
MdButtonToggleGroupMultiple = __decorate$33([
    Directive({
        selector: 'md-button-toggle-group[multiple], mat-button-toggle-group[multiple]',
        exportAs: 'mdButtonToggleGroup',
        host: {
            '[class.mat-button-toggle-group]': 'true',
            '[class.mat-button-toggle-vertical]': 'vertical'
        }
    }), 
    __metadata$33('design:paramtypes', [])
], MdButtonToggleGroupMultiple);
/** Single button inside of a toggle group. */
let MdButtonToggle = class MdButtonToggle {
    constructor(toggleGroup, toggleGroupMultiple, _buttonToggleDispatcher, _renderer, _elementRef, _focusOriginMonitor) {
        this._buttonToggleDispatcher = _buttonToggleDispatcher;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._focusOriginMonitor = _focusOriginMonitor;
        /** Whether or not this button toggle is checked. */
        this._checked = false;
        /** Whether or not this button toggle is disabled. */
        this._disabled = null;
        /** Value assigned to this button toggle. */
        this._value = null;
        /** Whether or not the button toggle is a single selection. */
        this._isSingleSelector = null;
        /** Event emitted when the group value changes. */
        this._change = new EventEmitter();
        this.buttonToggleGroup = toggleGroup;
        this.buttonToggleGroupMultiple = toggleGroupMultiple;
        if (this.buttonToggleGroup) {
            _buttonToggleDispatcher.listen((id, name) => {
                if (id != this.id && name == this.name) {
                    this.checked = false;
                }
            });
            this._type = 'radio';
            this.name = this.buttonToggleGroup.name;
            this._isSingleSelector = true;
        }
        else {
            // Even if there is no group at all, treat the button toggle as a checkbox so it can be
            // toggled on or off.
            this._type = 'checkbox';
            this._isSingleSelector = false;
        }
    }
    /** Unique ID for the underlying `input` element. */
    get inputId() {
        return `${this.id}-input`;
    }
    /** Whether the button is checked. */
    get checked() {
        return this._checked;
    }
    set checked(newCheckedState) {
        if (this._isSingleSelector) {
            if (newCheckedState) {
                // Notify all button toggles with the same name (in the same group) to un-check.
                this._buttonToggleDispatcher.notify(this.id, this.name);
            }
        }
        this._checked = newCheckedState;
        if (newCheckedState && this._isSingleSelector && this.buttonToggleGroup.value != this.value) {
            this.buttonToggleGroup.selected = this;
        }
    }
    /** MdButtonToggleGroup reads this to assign its own value. */
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value != value) {
            if (this.buttonToggleGroup != null && this.checked) {
                this.buttonToggleGroup.value = value;
            }
            this._value = value;
        }
    }
    /** Whether the button is disabled. */
    get disabled() {
        return this._disabled || (this.buttonToggleGroup != null && this.buttonToggleGroup.disabled) ||
            (this.buttonToggleGroupMultiple != null && this.buttonToggleGroupMultiple.disabled);
    }
    set disabled(value) {
        this._disabled = (value != null && value !== false) ? true : null;
    }
    get change() {
        return this._change.asObservable();
    }
    ngOnInit() {
        if (this.id == null) {
            this.id = `md-button-toggle-${_uniqueIdCounter$1++}`;
        }
        if (this.buttonToggleGroup && this._value == this.buttonToggleGroup.value) {
            this._checked = true;
        }
        this._focusOriginMonitor.monitor(this._elementRef.nativeElement, this._renderer, true);
    }
    /** Focuses the button. */
    focus() {
        this._renderer.invokeElementMethod(this._inputElement.nativeElement, 'focus');
    }
    /** Toggle the state of the current button toggle. */
    _toggle() {
        this.checked = !this.checked;
    }
    /** Checks the button toggle due to an interaction with the underlying native input. */
    _onInputChange(event) {
        event.stopPropagation();
        if (this._isSingleSelector) {
            // Propagate the change one-way via the group, which will in turn mark this
            // button toggle as checked.
            this.checked = true;
            this.buttonToggleGroup.selected = this;
            this.buttonToggleGroup.onTouched();
        }
        else {
            this._toggle();
        }
        // Emit a change event when the native input does.
        this._emitChangeEvent();
    }
    _onInputClick(event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    }
    /** Dispatch change event with current value. */
    _emitChangeEvent() {
        let event = new MdButtonToggleChange();
        event.source = this;
        event.value = this._value;
        this._change.emit(event);
    }
};
__decorate$33([
    ViewChild('input'), 
    __metadata$33('design:type', ElementRef)
], MdButtonToggle.prototype, "_inputElement", void 0);
__decorate$33([
    HostBinding(),
    Input(), 
    __metadata$33('design:type', String)
], MdButtonToggle.prototype, "id", void 0);
__decorate$33([
    Input(), 
    __metadata$33('design:type', String)
], MdButtonToggle.prototype, "name", void 0);
__decorate$33([
    HostBinding('class.mat-button-toggle-checked'),
    Input(), 
    __metadata$33('design:type', Boolean)
], MdButtonToggle.prototype, "checked", null);
__decorate$33([
    Input(), 
    __metadata$33('design:type', Object)
], MdButtonToggle.prototype, "value", null);
__decorate$33([
    HostBinding('class.mat-button-toggle-disabled'),
    Input(), 
    __metadata$33('design:type', Boolean)
], MdButtonToggle.prototype, "disabled", null);
__decorate$33([
    Output(), 
    __metadata$33('design:type', Observable)
], MdButtonToggle.prototype, "change", null);
MdButtonToggle = __decorate$33([
    Component({selector: 'md-button-toggle, mat-button-toggle',
        template: "<label [attr.for]=\"inputId\" class=\"mat-button-toggle-label\"><input #input class=\"mat-button-toggle-input cdk-visually-hidden\" [type]=\"_type\" [id]=\"inputId\" [checked]=\"checked\" [disabled]=\"disabled\" [name]=\"name\" (change)=\"_onInputChange($event)\" (click)=\"_onInputClick($event)\"><div class=\"mat-button-toggle-label-content\"><ng-content></ng-content></div></label><div class=\"mat-button-toggle-focus-overlay\" (touchstart)=\"$event.preventDefault()\"></div>",
        styles: [".mat-button-toggle-group{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;display:inline-flex;flex-direction:row;border-radius:2px;cursor:pointer;white-space:nowrap}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle-disabled .mat-button-toggle-label-content{cursor:default}.mat-button-toggle{white-space:nowrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;position:relative}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;cursor:pointer}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;position:absolute;top:0;left:0;right:0;bottom:0} /*# sourceMappingURL=button-toggle.css.map */ "],
        encapsulation: ViewEncapsulation.None,
        host: {
            '[class.mat-button-toggle]': 'true'
        }
    }),
    __param$6(0, Optional()),
    __param$6(1, Optional()), 
    __metadata$33('design:paramtypes', [MdButtonToggleGroup, MdButtonToggleGroupMultiple, UniqueSelectionDispatcher, Renderer, ElementRef, FocusOriginMonitor])
], MdButtonToggle);

var __decorate$32 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$32 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdButtonToggleModule_1 = class MdButtonToggleModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdButtonToggleModule_1,
            providers: []
        };
    }
};
let MdButtonToggleModule = MdButtonToggleModule_1;
MdButtonToggleModule = MdButtonToggleModule_1 = __decorate$32([
    NgModule({
        imports: [FormsModule, CompatibilityModule],
        exports: [
            MdButtonToggleGroup,
            MdButtonToggleGroupMultiple,
            MdButtonToggle,
            CompatibilityModule,
        ],
        declarations: [MdButtonToggleGroup, MdButtonToggleGroupMultiple, MdButtonToggle],
        providers: [UNIQUE_SELECTION_DISPATCHER_PROVIDER, FocusOriginMonitor]
    }), 
    __metadata$32('design:paramtypes', [])
], MdButtonToggleModule);

var __decorate$35 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$35 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// TODO(kara): Convert attribute selectors to classes when attr maps become available
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdButtonCssMatStyler = class MdButtonCssMatStyler {
};
MdButtonCssMatStyler = __decorate$35([
    Directive({
        selector: 'button[md-button], button[mat-button], a[md-button], a[mat-button]',
        host: {
            '[class.mat-button]': 'true'
        }
    }), 
    __metadata$35('design:paramtypes', [])
], MdButtonCssMatStyler);
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdRaisedButtonCssMatStyler = class MdRaisedButtonCssMatStyler {
};
MdRaisedButtonCssMatStyler = __decorate$35([
    Directive({
        selector: 'button[md-raised-button], button[mat-raised-button], ' +
            'a[md-raised-button], a[mat-raised-button]',
        host: {
            '[class.mat-raised-button]': 'true'
        }
    }), 
    __metadata$35('design:paramtypes', [])
], MdRaisedButtonCssMatStyler);
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdIconButtonCssMatStyler = class MdIconButtonCssMatStyler {
};
MdIconButtonCssMatStyler = __decorate$35([
    Directive({
        selector: 'button[md-icon-button], button[mat-icon-button], a[md-icon-button], a[mat-icon-button]',
        host: {
            '[class.mat-icon-button]': 'true',
        }
    }), 
    __metadata$35('design:paramtypes', [])
], MdIconButtonCssMatStyler);
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdFabCssMatStyler = class MdFabCssMatStyler {
};
MdFabCssMatStyler = __decorate$35([
    Directive({
        selector: 'button[md-fab], button[mat-fab], a[md-fab], a[mat-fab]',
        host: {
            '[class.mat-fab]': 'true'
        }
    }), 
    __metadata$35('design:paramtypes', [])
], MdFabCssMatStyler);
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdMiniFabCssMatStyler = class MdMiniFabCssMatStyler {
};
MdMiniFabCssMatStyler = __decorate$35([
    Directive({
        selector: 'button[md-mini-fab], button[mat-mini-fab], a[md-mini-fab], a[mat-mini-fab]',
        host: {
            '[class.mat-mini-fab]': 'true'
        }
    }), 
    __metadata$35('design:paramtypes', [])
], MdMiniFabCssMatStyler);
/**
 * Material design button.
 */
let MdButton = class MdButton {
    constructor(_elementRef, _renderer, _focusOriginMonitor) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._focusOriginMonitor = _focusOriginMonitor;
        /** Whether the button is round. */
        this._isRoundButton = ['icon-button', 'fab', 'mini-fab'].some(suffix => {
            let el = this._getHostElement();
            return el.hasAttribute('md-' + suffix) || el.hasAttribute('mat-' + suffix);
        });
        /** Whether the ripple effect on click should be disabled. */
        this._disableRipple = false;
        this._disabled = null;
        this._focusOriginMonitor.monitor(this._elementRef.nativeElement, this._renderer, true);
    }
    /** Whether the ripple effect for this button is disabled. */
    get disableRipple() { return this._disableRipple; }
    set disableRipple(v) { this._disableRipple = coerceBooleanProperty(v); }
    /** Whether the button is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) { this._disabled = coerceBooleanProperty(value) ? true : null; }
    ngOnDestroy() {
        this._focusOriginMonitor.unmonitor(this._elementRef.nativeElement);
    }
    /** The color of the button. Can be `primary`, `accent`, or `warn`. */
    get color() { return this._color; }
    set color(value) { this._updateColor(value); }
    _updateColor(newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    }
    _setElementColor(color, isAdd) {
        if (color != null && color != '') {
            this._renderer.setElementClass(this._getHostElement(), `mat-${color}`, isAdd);
        }
    }
    /** Focuses the button. */
    focus() {
        this._renderer.invokeElementMethod(this._getHostElement(), 'focus');
    }
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
};
__decorate$35([
    Input(), 
    __metadata$35('design:type', Object)
], MdButton.prototype, "disableRipple", null);
__decorate$35([
    Input(), 
    __metadata$35('design:type', Object)
], MdButton.prototype, "disabled", null);
__decorate$35([
    Input(), 
    __metadata$35('design:type', String)
], MdButton.prototype, "color", null);
MdButton = __decorate$35([
    Component({selector: 'button[md-button], button[md-raised-button], button[md-icon-button],' +
            'button[md-fab], button[md-mini-fab],' +
            'button[mat-button], button[mat-raised-button], button[mat-icon-button],' +
            'button[mat-fab], button[mat-mini-fab]',
        host: {
            '[disabled]': 'disabled',
        },
        template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div md-ripple *ngIf=\"!_isRippleDisabled()\" class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"_isRoundButton\" [mdRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\" (touchstart)=\"$event.preventDefault()\"></div>",
        styles: [".mat-button,.mat-fab,.mat-icon-button,.mat-mini-fab,.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;font-size:14px;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px}[disabled].mat-button,[disabled].mat-fab,[disabled].mat-icon-button,[disabled].mat-mini-fab,[disabled].mat-raised-button{cursor:default}.cdk-keyboard-focused.mat-button .mat-button-focus-overlay,.cdk-keyboard-focused.mat-fab .mat-button-focus-overlay,.cdk-keyboard-focused.mat-icon-button .mat-button-focus-overlay,.cdk-keyboard-focused.mat-mini-fab .mat-button-focus-overlay,.cdk-keyboard-focused.mat-raised-button .mat-button-focus-overlay{opacity:1}.mat-button::-moz-focus-inner,.mat-fab::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-mini-fab::-moz-focus-inner,.mat-raised-button::-moz-focus-inner{border:0}.mat-fab,.mat-mini-fab,.mat-raised-button{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-fab:not([disabled]):active,.mat-mini-fab:not([disabled]):active,.mat-raised-button:not([disabled]):active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}[disabled].mat-fab,[disabled].mat-mini-fab,[disabled].mat-raised-button{box-shadow:none}.mat-button:hover .mat-button-focus-overlay,.mat-icon-button:hover .mat-button-focus-overlay{opacity:1}.mat-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab:not([disabled]):active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab .mat-icon,.mat-fab i{padding:16px 0;line-height:24px}.mat-mini-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab:not([disabled]):active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-mini-fab .mat-icon,.mat-mini-fab i{padding:8px 0;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button,.mat-icon-button,.mat-raised-button{color:currentColor}.mat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*{vertical-align:middle}.mat-button-focus-overlay,.mat-button-ripple{position:absolute;top:0;left:0;bottom:0;right:0}.mat-button-focus-overlay{background-color:rgba(0,0,0,.12);border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1)}@media screen and (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:rgba(255,255,255,.5)}}.mat-button-ripple-round{border-radius:50%;z-index:1}@media screen and (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}} /*# sourceMappingURL=button.css.map */ "],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
    }), 
    __metadata$35('design:paramtypes', [ElementRef, Renderer, FocusOriginMonitor])
], MdButton);
/**
 * Raised Material design button.
 */
let MdAnchor = class MdAnchor extends MdButton {
    constructor(elementRef, renderer, focusOriginMonitor) {
        super(elementRef, renderer, focusOriginMonitor);
    }
    /** @docs-private */
    get tabIndex() {
        return this.disabled ? -1 : 0;
    }
    get _isAriaDisabled() {
        return this.disabled ? 'true' : 'false';
    }
    _haltDisabledEvents(event) {
        // A disabled button shouldn't apply any actions
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
};
__decorate$35([
    HostBinding('tabIndex'), 
    __metadata$35('design:type', Number)
], MdAnchor.prototype, "tabIndex", null);
MdAnchor = __decorate$35([
    Component({selector: `a[md-button], a[md-raised-button], a[md-icon-button], a[md-fab], a[md-mini-fab],
             a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab], a[mat-mini-fab]`,
        host: {
            '[attr.disabled]': 'disabled',
            '[attr.aria-disabled]': '_isAriaDisabled',
            '(click)': '_haltDisabledEvents($event)',
        },
        template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div md-ripple *ngIf=\"!_isRippleDisabled()\" class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"_isRoundButton\" [mdRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\" (touchstart)=\"$event.preventDefault()\"></div>",
        styles: [".mat-button,.mat-fab,.mat-icon-button,.mat-mini-fab,.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;font-size:14px;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px}[disabled].mat-button,[disabled].mat-fab,[disabled].mat-icon-button,[disabled].mat-mini-fab,[disabled].mat-raised-button{cursor:default}.cdk-keyboard-focused.mat-button .mat-button-focus-overlay,.cdk-keyboard-focused.mat-fab .mat-button-focus-overlay,.cdk-keyboard-focused.mat-icon-button .mat-button-focus-overlay,.cdk-keyboard-focused.mat-mini-fab .mat-button-focus-overlay,.cdk-keyboard-focused.mat-raised-button .mat-button-focus-overlay{opacity:1}.mat-button::-moz-focus-inner,.mat-fab::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-mini-fab::-moz-focus-inner,.mat-raised-button::-moz-focus-inner{border:0}.mat-fab,.mat-mini-fab,.mat-raised-button{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-fab:not([disabled]):active,.mat-mini-fab:not([disabled]):active,.mat-raised-button:not([disabled]):active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}[disabled].mat-fab,[disabled].mat-mini-fab,[disabled].mat-raised-button{box-shadow:none}.mat-button:hover .mat-button-focus-overlay,.mat-icon-button:hover .mat-button-focus-overlay{opacity:1}.mat-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab:not([disabled]):active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab .mat-icon,.mat-fab i{padding:16px 0;line-height:24px}.mat-mini-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab:not([disabled]):active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-mini-fab .mat-icon,.mat-mini-fab i{padding:8px 0;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button,.mat-icon-button,.mat-raised-button{color:currentColor}.mat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*{vertical-align:middle}.mat-button-focus-overlay,.mat-button-ripple{position:absolute;top:0;left:0;bottom:0;right:0}.mat-button-focus-overlay{background-color:rgba(0,0,0,.12);border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1)}@media screen and (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:rgba(255,255,255,.5)}}.mat-button-ripple-round{border-radius:50%;z-index:1}@media screen and (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}} /*# sourceMappingURL=button.css.map */ "],
        encapsulation: ViewEncapsulation.None
    }), 
    __metadata$35('design:paramtypes', [ElementRef, Renderer, FocusOriginMonitor])
], MdAnchor);

var __decorate$34 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$34 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdButtonModule_1 = class MdButtonModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdButtonModule_1,
            providers: []
        };
    }
};
let MdButtonModule = MdButtonModule_1;
MdButtonModule = MdButtonModule_1 = __decorate$34([
    NgModule({
        imports: [
            CommonModule,
            MdRippleModule,
            CompatibilityModule,
            StyleModule,
        ],
        exports: [
            MdButton,
            MdAnchor,
            CompatibilityModule,
            MdButtonCssMatStyler,
            MdRaisedButtonCssMatStyler,
            MdIconButtonCssMatStyler,
            MdFabCssMatStyler,
            MdMiniFabCssMatStyler,
        ],
        declarations: [
            MdButton,
            MdAnchor,
            MdButtonCssMatStyler,
            MdRaisedButtonCssMatStyler,
            MdIconButtonCssMatStyler,
            MdFabCssMatStyler,
            MdMiniFabCssMatStyler,
        ],
    }), 
    __metadata$34('design:paramtypes', [])
], MdButtonModule);

var __decorate$37 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$37 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Monotonically increasing integer used to auto-generate unique ids for checkbox components. */
let nextId = 0;
/**
 * Provider Expression that allows md-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
const MD_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MdCheckbox),
    multi: true
};
/**
 * Represents the different states that require custom transitions between them.
 * @docs-private
 */
var TransitionCheckState;
(function (TransitionCheckState) {
    /** The initial state of the component before any user interaction. */
    TransitionCheckState[TransitionCheckState["Init"] = 0] = "Init";
    /** The state representing the component when it's becoming checked. */
    TransitionCheckState[TransitionCheckState["Checked"] = 1] = "Checked";
    /** The state representing the component when it's becoming unchecked. */
    TransitionCheckState[TransitionCheckState["Unchecked"] = 2] = "Unchecked";
    /** The state representing the component when it's becoming indeterminate. */
    TransitionCheckState[TransitionCheckState["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
/** Change event object emitted by MdCheckbox. */
class MdCheckboxChange {
}
/**
 * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
 * and exposes a similar API. A MdCheckbox can be either checked, unchecked, indeterminate, or
 * disabled. Note that all additional accessibility attributes are taken care of by the component,
 * so there is no need to provide them yourself. However, if you want to omit a label and still
 * have the checkbox be accessible, you may supply an [aria-label] input.
 * See: https://www.google.com/design/spec/components/selection-controls.html
 */
let MdCheckbox = class MdCheckbox {
    constructor(_renderer, _elementRef, _changeDetectorRef, _focusOriginMonitor) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._focusOriginMonitor = _focusOriginMonitor;
        /**
         * Attached to the aria-label attribute of the host element. In most cases, arial-labelledby will
         * take precedence so this may be omitted.
         */
        this.ariaLabel = '';
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        this.ariaLabelledby = null;
        /** A unique id for the checkbox. If one is not supplied, it is auto-generated. */
        this.id = `md-checkbox-${++nextId}`;
        /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
        this.labelPosition = 'after';
        this._disabled = false;
        /** Tabindex value that is passed to the underlying input element. */
        this.tabIndex = 0;
        /** Name value will be applied to the input element if present */
        this.name = null;
        /** Event emitted when the checkbox's `checked` value changes. */
        this.change = new EventEmitter();
        /** Event emitted when the checkbox's `indeterminate` value changes. */
        this.indeterminateChange = new EventEmitter();
        /**
         * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
         * @docs-private
         */
        this.onTouched = () => { };
        this._currentAnimationClass = '';
        this._currentCheckState = TransitionCheckState.Init;
        this._checked = false;
        this._indeterminate = false;
        this._controlValueAccessorChangeFn = (value) => { };
        this.color = 'accent';
    }
    /** Whether the ripple effect for this checkbox is disabled. */
    get disableRipple() { return this._disableRipple; }
    set disableRipple(value) { this._disableRipple = coerceBooleanProperty(value); }
    /** ID of the native input element inside `<md-checkbox>` */
    get inputId() {
        return `input-${this.id}`;
    }
    /** Whether the checkbox is required. */
    get required() { return this._required; }
    set required(value) { this._required = coerceBooleanProperty(value); }
    /**
     * Whether or not the checkbox should appear before or after the label.
     * @deprecated
     */
    get align() {
        // align refers to the checkbox relative to the label, while labelPosition refers to the
        // label relative to the checkbox. As such, they are inverted.
        return this.labelPosition == 'after' ? 'start' : 'end';
    }
    set align(v) {
        this.labelPosition = (v == 'start') ? 'after' : 'before';
    }
    /** Whether the checkbox is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) { this._disabled = coerceBooleanProperty(value); }
    ngAfterViewInit() {
        this._focusedSubscription = this._focusOriginMonitor
            .monitor(this._inputElement.nativeElement, this._renderer, false)
            .subscribe(focusOrigin => {
            if (!this._focusedRipple && focusOrigin === 'keyboard') {
                this._focusedRipple = this._ripple.launch(0, 0, { persistent: true, centered: true });
            }
        });
    }
    ngOnDestroy() {
        this._focusOriginMonitor.unmonitor(this._inputElement.nativeElement);
        if (this._focusedSubscription) {
            this._focusedSubscription.unsubscribe();
            this._focusedSubscription = null;
        }
    }
    /**
     * Whether the checkbox is checked. Note that setting `checked` will immediately set
     * `indeterminate` to false.
     */
    get checked() {
        return this._checked;
    }
    set checked(checked) {
        if (checked != this.checked) {
            if (this._indeterminate) {
                this._indeterminate = false;
                this.indeterminateChange.emit(this._indeterminate);
            }
            this._checked = checked;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
     * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
     * checkable items. Note that whenever `checked` is set, indeterminate is immediately set to
     * false. This differs from the web platform in that indeterminate state on native
     * checkboxes is only remove when the user manually checks the checkbox (rather than setting the
     * `checked` property programmatically). However, we feel that this behavior is more accommodating
     * to the way consumers would envision using this component.
     */
    get indeterminate() {
        return this._indeterminate;
    }
    set indeterminate(indeterminate) {
        let changed = indeterminate != this._indeterminate;
        this._indeterminate = indeterminate;
        if (changed) {
            if (this._indeterminate) {
                this._transitionCheckState(TransitionCheckState.Indeterminate);
            }
            else {
                this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
            }
            this.indeterminateChange.emit(this._indeterminate);
        }
    }
    /** The color of the button. Can be `primary`, `accent`, or `warn`. */
    get color() { return this._color; }
    set color(value) { this._updateColor(value); }
    _updateColor(newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    }
    _setElementColor(color, isAdd) {
        if (color != null && color != '') {
            this._renderer.setElementClass(this._elementRef.nativeElement, `mat-${color}`, isAdd);
        }
    }
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value Value to be set to the model.
     */
    writeValue(value) {
        this.checked = !!value;
    }
    /**
     * Registers a callback to be triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param fn Function to be called on change.
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the control has been touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be triggered when the checkbox is touched.
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sets the checkbox's disabled state. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the checkbox should be disabled.
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    _transitionCheckState(newState) {
        let oldState = this._currentCheckState;
        let renderer = this._renderer;
        let elementRef = this._elementRef;
        if (oldState === newState) {
            return;
        }
        if (this._currentAnimationClass.length > 0) {
            renderer.setElementClass(elementRef.nativeElement, this._currentAnimationClass, false);
        }
        this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
        this._currentCheckState = newState;
        if (this._currentAnimationClass.length > 0) {
            renderer.setElementClass(elementRef.nativeElement, this._currentAnimationClass, true);
        }
    }
    _emitChangeEvent() {
        let event = new MdCheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
    }
    /** Informs the component when we lose focus in order to style accordingly */
    _onInputBlur() {
        this._removeFocusedRipple();
        this.onTouched();
    }
    /** Toggles the `checked` state of the checkbox. */
    toggle() {
        this.checked = !this.checked;
    }
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * Do not toggle on (change) event since IE doesn't fire change event when
     *   indeterminate checkbox is clicked.
     * @param event
     */
    _onInputClick(event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `checkbox` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
        this._removeFocusedRipple();
        if (!this.disabled) {
            this.toggle();
            this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
            // Emit our custom change event if the native input emitted one.
            // It is important to only emit it, if the native input triggered one, because
            // we don't want to trigger a change event, when the `checked` variable changes for example.
            this._emitChangeEvent();
        }
    }
    /** Focuses the checkbox. */
    focus() {
        this._focusOriginMonitor.focusVia(this._inputElement.nativeElement, this._renderer, 'keyboard');
    }
    _onInteractionEvent(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
    }
    _getAnimationClassForCheckStateTransition(oldState, newState) {
        let animSuffix;
        switch (oldState) {
            case TransitionCheckState.Init:
                // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
                // [checked] bound to it.
                if (newState === TransitionCheckState.Checked) {
                    animSuffix = 'unchecked-checked';
                }
                else if (newState == TransitionCheckState.Indeterminate) {
                    animSuffix = 'unchecked-indeterminate';
                }
                else {
                    return '';
                }
                break;
            case TransitionCheckState.Unchecked:
                animSuffix = newState === TransitionCheckState.Checked ?
                    'unchecked-checked' : 'unchecked-indeterminate';
                break;
            case TransitionCheckState.Checked:
                animSuffix = newState === TransitionCheckState.Unchecked ?
                    'checked-unchecked' : 'checked-indeterminate';
                break;
            case TransitionCheckState.Indeterminate:
                animSuffix = newState === TransitionCheckState.Checked ?
                    'indeterminate-checked' : 'indeterminate-unchecked';
        }
        return `mat-checkbox-anim-${animSuffix}`;
    }
    /** Fades out the focused state ripple. */
    _removeFocusedRipple() {
        if (this._focusedRipple) {
            this._focusedRipple.fadeOut();
            this._focusedRipple = null;
        }
    }
};
__decorate$37([
    Input('aria-label'), 
    __metadata$37('design:type', String)
], MdCheckbox.prototype, "ariaLabel", void 0);
__decorate$37([
    Input('aria-labelledby'), 
    __metadata$37('design:type', String)
], MdCheckbox.prototype, "ariaLabelledby", void 0);
__decorate$37([
    Input(), 
    __metadata$37('design:type', String)
], MdCheckbox.prototype, "id", void 0);
__decorate$37([
    Input(), 
    __metadata$37('design:type', Boolean)
], MdCheckbox.prototype, "disableRipple", null);
__decorate$37([
    Input(), 
    __metadata$37('design:type', Boolean)
], MdCheckbox.prototype, "required", null);
__decorate$37([
    Input(), 
    __metadata$37('design:type', Object)
], MdCheckbox.prototype, "align", null);
__decorate$37([
    Input(), 
    __metadata$37('design:type', Object)
], MdCheckbox.prototype, "labelPosition", void 0);
__decorate$37([
    Input(), 
    __metadata$37('design:type', Boolean)
], MdCheckbox.prototype, "disabled", null);
__decorate$37([
    Input(), 
    __metadata$37('design:type', Number)
], MdCheckbox.prototype, "tabIndex", void 0);
__decorate$37([
    Input(), 
    __metadata$37('design:type', String)
], MdCheckbox.prototype, "name", void 0);
__decorate$37([
    Output(), 
    __metadata$37('design:type', EventEmitter)
], MdCheckbox.prototype, "change", void 0);
__decorate$37([
    Output(), 
    __metadata$37('design:type', EventEmitter)
], MdCheckbox.prototype, "indeterminateChange", void 0);
__decorate$37([
    Input(), 
    __metadata$37('design:type', String)
], MdCheckbox.prototype, "value", void 0);
__decorate$37([
    ViewChild('input'), 
    __metadata$37('design:type', ElementRef)
], MdCheckbox.prototype, "_inputElement", void 0);
__decorate$37([
    ViewChild(MdRipple), 
    __metadata$37('design:type', MdRipple)
], MdCheckbox.prototype, "_ripple", void 0);
__decorate$37([
    Input(), 
    __metadata$37('design:type', Object)
], MdCheckbox.prototype, "checked", null);
__decorate$37([
    Input(), 
    __metadata$37('design:type', Object)
], MdCheckbox.prototype, "indeterminate", null);
__decorate$37([
    Input(), 
    __metadata$37('design:type', String)
], MdCheckbox.prototype, "color", null);
MdCheckbox = __decorate$37([
    Component({selector: 'md-checkbox, mat-checkbox',
        template: "<label class=\"mat-checkbox-layout\" #label><div class=\"mat-checkbox-inner-container\"><input #input class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\" [id]=\"inputId\" [required]=\"required\" [checked]=\"checked\" [value]=\"value\" [disabled]=\"disabled\" [name]=\"name\" [tabIndex]=\"tabIndex\" [indeterminate]=\"indeterminate\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" (blur)=\"_onInputBlur()\" (change)=\"_onInteractionEvent($event)\" (click)=\"_onInputClick($event)\"><div md-ripple *ngIf=\"!_isRippleDisabled()\" class=\"mat-checkbox-ripple\" [mdRippleTrigger]=\"label\" [mdRippleCentered]=\"true\"></div><div class=\"mat-checkbox-frame\"></div><div class=\"mat-checkbox-background\"><svg version=\"1.1\" class=\"mat-checkbox-checkmark\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" xml:space=\"preserve\"><path class=\"mat-checkbox-checkmark-path\" fill=\"none\" stroke=\"white\" d=\"M4.1,12.7 9,17.6 20.3,6.3\"/></svg><div class=\"mat-checkbox-mixedmark\"></div></div></div><span class=\"mat-checkbox-label\"><ng-content></ng-content></span></label>",
        styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-checkmark,.mat-checkbox-frame{bottom:0;left:0;position:absolute;right:0;top:0}.mat-checkbox-checkmark,.mat-checkbox-mixedmark{width:calc(100% - 4px)}.mat-checkbox-background,.mat-checkbox-frame{border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif;transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-checkbox-label{cursor:pointer}.mat-checkbox-layout{cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex}.mat-checkbox-inner-container{display:inline-block;height:20px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:20px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-checkbox-checkmark{width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.66667px}.mat-checkbox-mixedmark{height:2px;opacity:0;transform:scaleX(0) rotate(0)}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox-ripple{position:absolute;left:-15px;top:-15px;right:-15px;bottom:-15px;border-radius:50%;z-index:1;pointer-events:none} /*# sourceMappingURL=checkbox.css.map */ "],
        host: {
            '[class.mat-checkbox]': 'true',
            '[class.mat-checkbox-indeterminate]': 'indeterminate',
            '[class.mat-checkbox-checked]': 'checked',
            '[class.mat-checkbox-disabled]': 'disabled',
            '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
        },
        providers: [MD_CHECKBOX_CONTROL_VALUE_ACCESSOR],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush
    }), 
    __metadata$37('design:paramtypes', [Renderer, ElementRef, ChangeDetectorRef, FocusOriginMonitor])
], MdCheckbox);

var __decorate$36 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$36 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdCheckboxModule_1 = class MdCheckboxModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdCheckboxModule_1,
            providers: []
        };
    }
};
let MdCheckboxModule = MdCheckboxModule_1;
MdCheckboxModule = MdCheckboxModule_1 = __decorate$36([
    NgModule({
        imports: [CommonModule, MdRippleModule, CompatibilityModule],
        exports: [MdCheckbox, CompatibilityModule],
        declarations: [MdCheckbox],
        providers: [FocusOriginMonitor]
    }), 
    __metadata$36('design:paramtypes', [])
], MdCheckboxModule);

var __decorate$39 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$39 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$7 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Provider Expression that allows md-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */
const MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MdRadioGroup),
    multi: true
};
let _uniqueIdCounter$2 = 0;
/** Change event object emitted by MdRadio and MdRadioGroup. */
class MdRadioChange {
}
/**
 * A group of radio buttons. May contain one or more `<md-radio-button>` elements.
 */
let MdRadioGroup = class MdRadioGroup {
    constructor() {
        /**
         * Selected value for group. Should equal the value of the selected radio button if there *is*
         * a corresponding radio button with a matching value. If there is *not* such a corresponding
         * radio button, this value persists to be applied in case a new radio button is added with a
         * matching value.
         */
        this._value = null;
        /** The HTML name attribute applied to radio buttons in this group. */
        this._name = `md-radio-group-${_uniqueIdCounter$2++}`;
        /** Disables all individual radio buttons assigned to this group. */
        this._disabled = false;
        /** The currently selected radio button. Should match value. */
        this._selected = null;
        /** Whether the `value` has been set to its initial value. */
        this._isInitialized = false;
        /** The method to be called in order to update ngModel */
        this._controlValueAccessorChangeFn = (value) => { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * @docs-private
         */
        this.onTouched = () => { };
        /**
         * Event emitted when the group value changes.
         * Change events are only emitted when the value changes due to user interaction with
         * a radio button (the same behavior as `<input type-"radio">`).
         */
        this.change = new EventEmitter();
        /** Child radio buttons. */
        this._radios = null;
        /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
        this.labelPosition = 'after';
    }
    /** Name of the radio button group. All radio buttons inside this group will use this name. */
    get name() { return this._name; }
    set name(value) {
        this._name = value;
        this._updateRadioButtonNames();
    }
    /**
     * Alignment of the radio-buttons relative to their labels. Can be 'before' or 'after'.
     * @deprecated
     */
    get align() {
        // align refers to the checkbox relative to the label, while labelPosition refers to the
        // label relative to the checkbox. As such, they are inverted.
        return this.labelPosition == 'after' ? 'start' : 'end';
    }
    set align(v) {
        this.labelPosition = (v == 'start') ? 'after' : 'before';
    }
    /** Whether the radio button is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) {
        // The presence of *any* disabled value makes the component disabled, *except* for false.
        this._disabled = (value != null && value !== false) ? true : null;
    }
    /** Value of the radio button. */
    get value() { return this._value; }
    set value(newValue) {
        if (this._value != newValue) {
            // Set this before proceeding to ensure no circular loop occurs with selection.
            this._value = newValue;
            this._updateSelectedRadioFromValue();
            this._checkSelectedRadioButton();
        }
    }
    _checkSelectedRadioButton() {
        if (this.selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    }
    /** Whether the radio button is selected. */
    get selected() { return this._selected; }
    set selected(selected) {
        this._selected = selected;
        this.value = selected ? selected.value : null;
        this._checkSelectedRadioButton();
    }
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    ngAfterContentInit() {
        // Mark this component as initialized in AfterContentInit because the initial value can
        // possibly be set by NgModel on MdRadioGroup, and it is possible that the OnInit of the
        // NgModel occurs *after* the OnInit of the MdRadioGroup.
        this._isInitialized = true;
    }
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    _touch() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    _updateRadioButtonNames() {
        if (this._radios) {
            this._radios.forEach(radio => {
                radio.name = this.name;
            });
        }
    }
    /** Updates the `selected` radio button from the internal _value state. */
    _updateSelectedRadioFromValue() {
        // If the value already matches the selected radio, do nothing.
        let isAlreadySelected = this._selected != null && this._selected.value == this._value;
        if (this._radios != null && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach(radio => {
                radio.checked = this.value == radio.value;
                if (radio.checked) {
                    this._selected = radio;
                }
            });
        }
    }
    /** Dispatch change event with current selection and group value. */
    _emitChangeEvent() {
        if (this._isInitialized) {
            let event = new MdRadioChange();
            event.source = this._selected;
            event.value = this._value;
            this.change.emit(event);
        }
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
};
__decorate$39([
    Output(), 
    __metadata$39('design:type', EventEmitter)
], MdRadioGroup.prototype, "change", void 0);
__decorate$39([
    ContentChildren(forwardRef(() => MdRadioButton)), 
    __metadata$39('design:type', QueryList)
], MdRadioGroup.prototype, "_radios", void 0);
__decorate$39([
    Input(), 
    __metadata$39('design:type', String)
], MdRadioGroup.prototype, "name", null);
__decorate$39([
    Input(), 
    __metadata$39('design:type', Object)
], MdRadioGroup.prototype, "align", null);
__decorate$39([
    Input(), 
    __metadata$39('design:type', Object)
], MdRadioGroup.prototype, "labelPosition", void 0);
__decorate$39([
    Input(), 
    __metadata$39('design:type', Boolean)
], MdRadioGroup.prototype, "disabled", null);
__decorate$39([
    Input(), 
    __metadata$39('design:type', Object)
], MdRadioGroup.prototype, "value", null);
__decorate$39([
    Input(), 
    __metadata$39('design:type', Object)
], MdRadioGroup.prototype, "selected", null);
MdRadioGroup = __decorate$39([
    Directive({
        selector: 'md-radio-group, mat-radio-group',
        providers: [MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
        host: {
            'role': 'radiogroup',
            '[class.mat-radio-group]': 'true',
        },
    }), 
    __metadata$39('design:paramtypes', [])
], MdRadioGroup);
/**
 * A radio-button. May be inside of
 */
let MdRadioButton = class MdRadioButton {
    constructor(radioGroup, _elementRef, _renderer, _focusOriginMonitor, _radioDispatcher) {
        // Assertions. Ideally these should be stripped out by the compiler.
        // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._focusOriginMonitor = _focusOriginMonitor;
        this._radioDispatcher = _radioDispatcher;
        /** The unique ID for the radio button. */
        this.id = `md-radio-${_uniqueIdCounter$2++}`;
        /**
         * Event emitted when the checked state of this radio button changes.
         * Change events are only emitted when the value changes due to user interaction with
         * the radio button (the same behavior as `<input type-"radio">`).
         */
        this.change = new EventEmitter();
        /** Whether this radio is checked. */
        this._checked = false;
        /** Value assigned to this radio.*/
        this._value = null;
        this.radioGroup = radioGroup;
        _radioDispatcher.listen((id, name) => {
            if (id != this.id && name == this.name) {
                this.checked = false;
            }
        });
    }
    /** Whether the ripple effect for this radio button is disabled. */
    get disableRipple() { return this._disableRipple; }
    set disableRipple(value) { this._disableRipple = coerceBooleanProperty(value); }
    /** Whether this radio button is checked. */
    get checked() {
        return this._checked;
    }
    set checked(newCheckedState) {
        if (this._checked != newCheckedState) {
            this._checked = newCheckedState;
            if (newCheckedState && this.radioGroup && this.radioGroup.value != this.value) {
                this.radioGroup.selected = this;
            }
            else if (!newCheckedState && this.radioGroup && this.radioGroup.value == this.value) {
                // When unchecking the selected radio button, update the selected radio
                // property on the group.
                this.radioGroup.selected = null;
            }
            if (newCheckedState) {
                // Notify all radio buttons with the same name to un-check.
                this._radioDispatcher.notify(this.id, this.name);
            }
        }
    }
    /** The value of this radio button. */
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value != value) {
            this._value = value;
            if (this.radioGroup != null) {
                if (!this.checked) {
                    // Update checked when the value changed to match the radio group's value
                    this.checked = this.radioGroup.value == value;
                }
                if (this.checked) {
                    this.radioGroup.selected = this;
                }
            }
        }
    }
    /**
     * Whether or not the radio-button should appear before or after the label.
     * @deprecated
     */
    get align() {
        // align refers to the checkbox relative to the label, while labelPosition refers to the
        // label relative to the checkbox. As such, they are inverted.
        return this.labelPosition == 'after' ? 'start' : 'end';
    }
    set align(v) {
        this.labelPosition = (v == 'start') ? 'after' : 'before';
    }
    /** Whether the label should appear after or before the radio button. Defaults to 'after' */
    get labelPosition() {
        return this._labelPosition || (this.radioGroup && this.radioGroup.labelPosition) || 'after';
    }
    set labelPosition(value) {
        this._labelPosition = value;
    }
    /** Whether the radio button is disabled. */
    get disabled() {
        return this._disabled || (this.radioGroup != null && this.radioGroup.disabled);
    }
    set disabled(value) {
        // The presence of *any* disabled value makes the component disabled, *except* for false.
        this._disabled = (value != null && value !== false) ? true : null;
    }
    /** ID of the native input element inside `<md-radio-button>` */
    get inputId() {
        return `${this.id}-input`;
    }
    /** Focuses the radio button. */
    focus() {
        this._focusOriginMonitor.focusVia(this._inputElement.nativeElement, this._renderer, 'keyboard');
    }
    ngOnInit() {
        if (this.radioGroup) {
            // If the radio is inside a radio group, determine if it should be checked
            this.checked = this.radioGroup.value === this._value;
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
        }
    }
    ngAfterViewInit() {
        this._focusOriginMonitorSubscription = this._focusOriginMonitor
            .monitor(this._inputElement.nativeElement, this._renderer, false)
            .subscribe(focusOrigin => {
            if (focusOrigin === 'keyboard' && !this._focusedRippleRef) {
                this._focusedRippleRef = this._ripple.launch(0, 0, { persistent: true, centered: true });
            }
        });
    }
    ngOnDestroy() {
        this._focusOriginMonitor.unmonitor(this._inputElement.nativeElement);
        if (this._focusOriginMonitorSubscription) {
            this._focusOriginMonitorSubscription.unsubscribe();
            this._focusOriginMonitorSubscription = null;
        }
    }
    /** Dispatch change event with current value. */
    _emitChangeEvent() {
        let event = new MdRadioChange();
        event.source = this;
        event.value = this._value;
        this.change.emit(event);
    }
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    _onInputBlur() {
        if (this._focusedRippleRef) {
            this._focusedRippleRef.fadeOut();
            this._focusedRippleRef = null;
        }
        if (this.radioGroup) {
            this.radioGroup._touch();
        }
    }
    _onInputClick(event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `radio-button` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    }
    /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     */
    _onInputChange(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
        let groupValueChanged = this.radioGroup && this.value != this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();
        if (this.radioGroup) {
            this.radioGroup._controlValueAccessorChangeFn(this.value);
            this.radioGroup._touch();
            if (groupValueChanged) {
                this.radioGroup._emitChangeEvent();
            }
        }
    }
};
__decorate$39([
    Input(), 
    __metadata$39('design:type', String)
], MdRadioButton.prototype, "id", void 0);
__decorate$39([
    Input(), 
    __metadata$39('design:type', String)
], MdRadioButton.prototype, "name", void 0);
__decorate$39([
    Input('aria-label'), 
    __metadata$39('design:type', String)
], MdRadioButton.prototype, "ariaLabel", void 0);
__decorate$39([
    Input('aria-labelledby'), 
    __metadata$39('design:type', String)
], MdRadioButton.prototype, "ariaLabelledby", void 0);
__decorate$39([
    Input(), 
    __metadata$39('design:type', Boolean)
], MdRadioButton.prototype, "disableRipple", null);
__decorate$39([
    Input(), 
    __metadata$39('design:type', Boolean)
], MdRadioButton.prototype, "checked", null);
__decorate$39([
    Input(), 
    __metadata$39('design:type', Object)
], MdRadioButton.prototype, "value", null);
__decorate$39([
    Input(), 
    __metadata$39('design:type', Object)
], MdRadioButton.prototype, "align", null);
__decorate$39([
    Input(), 
    __metadata$39('design:type', Object)
], MdRadioButton.prototype, "labelPosition", null);
__decorate$39([
    Input(), 
    __metadata$39('design:type', Boolean)
], MdRadioButton.prototype, "disabled", null);
__decorate$39([
    Output(), 
    __metadata$39('design:type', EventEmitter)
], MdRadioButton.prototype, "change", void 0);
__decorate$39([
    ViewChild(MdRipple), 
    __metadata$39('design:type', MdRipple)
], MdRadioButton.prototype, "_ripple", void 0);
__decorate$39([
    ViewChild('input'), 
    __metadata$39('design:type', ElementRef)
], MdRadioButton.prototype, "_inputElement", void 0);
MdRadioButton = __decorate$39([
    Component({selector: 'md-radio-button, mat-radio-button',
        template: "<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label><div class=\"mat-radio-container\"><div class=\"mat-radio-outer-circle\"></div><div class=\"mat-radio-inner-circle\"></div><div md-ripple *ngIf=\"!_isRippleDisabled()\" class=\"mat-radio-ripple\" [mdRippleTrigger]=\"label\" [mdRippleCentered]=\"true\"></div></div><input #input class=\"mat-radio-input cdk-visually-hidden\" type=\"radio\" [id]=\"inputId\" [checked]=\"checked\" [disabled]=\"disabled\" [name]=\"name\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" (change)=\"_onInputChange($event)\" (blur)=\"_onInputBlur()\" (click)=\"_onInputClick($event)\"><div class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\"><ng-content></ng-content></div></label>",
        styles: [".mat-radio-button{display:inline-block;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-radio-label{cursor:pointer;display:inline-flex;align-items:baseline;white-space:nowrap}.mat-radio-container{box-sizing:border-box;display:inline-block;height:20px;position:relative;width:20px;top:2px}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;transform:scale(0);width:20px}.mat-radio-checked .mat-radio-inner-circle{transform:scale(.5)}.mat-radio-label-content{display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-ripple{position:absolute;left:-15px;top:-15px;right:-15px;bottom:-15px;border-radius:50%;z-index:1;pointer-events:none} /*# sourceMappingURL=radio.css.map */ "],
        encapsulation: ViewEncapsulation.None,
        host: {
            '[class.mat-radio-button]': 'true',
            '[class.mat-radio-checked]': 'checked',
            '[class.mat-radio-disabled]': 'disabled',
            '[attr.id]': 'id',
        }
    }),
    __param$7(0, Optional()), 
    __metadata$39('design:paramtypes', [MdRadioGroup, ElementRef, Renderer, FocusOriginMonitor, UniqueSelectionDispatcher])
], MdRadioButton);

var __decorate$38 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$38 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdRadioModule_1 = class MdRadioModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdRadioModule_1,
            providers: [],
        };
    }
};
let MdRadioModule = MdRadioModule_1;
MdRadioModule = MdRadioModule_1 = __decorate$38([
    NgModule({
        imports: [CommonModule, MdRippleModule, CompatibilityModule],
        exports: [MdRadioGroup, MdRadioButton, CompatibilityModule],
        providers: [UNIQUE_SELECTION_DISPATCHER_PROVIDER, VIEWPORT_RULER_PROVIDER, FocusOriginMonitor],
        declarations: [MdRadioGroup, MdRadioButton],
    }), 
    __metadata$38('design:paramtypes', [])
], MdRadioModule);

/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
class ListKeyManager {
    constructor(_items) {
        this._items = _items;
        this._activeItemIndex = null;
        this._tabOut = new Subject();
        this._wrap = false;
    }
    /**
     * Turns on wrapping mode, which ensures that the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     *
     * @returns The ListKeyManager that the method was called on.
     */
    withWrap() {
        this._wrap = true;
        return this;
    }
    /**
     * Sets the active item to the item at the index specified.
     *
     * @param index The index of the item to be set as active.
     */
    setActiveItem(index) {
        this._activeItemIndex = index;
        this._activeItem = this._items.toArray()[index];
    }
    /**
     * Sets the active item depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */
    onKeydown(event) {
        switch (event.keyCode) {
            case DOWN_ARROW:
                this.setNextItemActive();
                break;
            case UP_ARROW:
                this.setPreviousItemActive();
                break;
            case HOME:
                this.setFirstItemActive();
                break;
            case END:
                this.setLastItemActive();
                break;
            case TAB:
                // Note that we shouldn't prevent the default action on tab.
                this._tabOut.next(null);
                return;
            default:
                return;
        }
        event.preventDefault();
    }
    /** Returns the index of the currently active item. */
    get activeItemIndex() {
        return this._activeItemIndex;
    }
    /** Returns the currently active item. */
    get activeItem() {
        return this._activeItem;
    }
    /** Sets the active item to the first enabled item in the list. */
    setFirstItemActive() {
        this._setActiveItemByIndex(0, 1);
    }
    /** Sets the active item to the last enabled item in the list. */
    setLastItemActive() {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    }
    /** Sets the active item to the next enabled item in the list. */
    setNextItemActive() {
        this._activeItemIndex === null ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    }
    /** Sets the active item to a previous enabled item in the list. */
    setPreviousItemActive() {
        this._activeItemIndex === null && this._wrap ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    }
    /**
     * Allows setting of the activeItemIndex without any other effects.
     * @param index The new activeItemIndex.
     */
    updateActiveItemIndex(index) {
        this._activeItemIndex = index;
    }
    /**
     * Observable that emits any time the TAB key is pressed, so components can react
     * when focus is shifted off of the list.
     */
    get tabOut() {
        return this._tabOut.asObservable();
    }
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     */
    _setActiveItemByDelta(delta, items = this._items.toArray()) {
        this._wrap ? this._setActiveInWrapMode(delta, items)
            : this._setActiveInDefaultMode(delta, items);
    }
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     */
    _setActiveInWrapMode(delta, items) {
        // when active item would leave menu, wrap to beginning or end
        this._activeItemIndex =
            (this._activeItemIndex + delta + items.length) % items.length;
        // skip all disabled menu items recursively until an enabled one is reached
        if (items[this._activeItemIndex].disabled) {
            this._setActiveInWrapMode(delta, items);
        }
        else {
            this.setActiveItem(this._activeItemIndex);
        }
    }
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     */
    _setActiveInDefaultMode(delta, items) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta, items);
    }
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     */
    _setActiveItemByIndex(index, fallbackDelta, items = this._items.toArray()) {
        if (!items[index]) {
            return;
        }
        while (items[index].disabled) {
            index += fallbackDelta;
            if (!items[index]) {
                return;
            }
        }
        this.setActiveItem(index);
    }
}

class FocusKeyManager extends ListKeyManager {
    constructor(items) {
        super(items);
    }
    /**
     * This method sets the active item to the item at the specified index.
     * It also adds focuses the newly active item.
     */
    setActiveItem(index) {
        super.setActiveItem(index);
        this.activeItem.focus();
    }
}

/**
 * The following are all the animations for the md-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material md-select animation.
 */
/**
 * This animation shrinks the placeholder text to 75% of its normal size and translates
 * it to either the top left corner (ltr) or top right corner (rtl) of the trigger,
 * depending on the text direction of the application.
 */
const transformPlaceholder = trigger('transformPlaceholder', [
    state('floating-ltr', style({
        top: '-22px',
        left: '-2px',
        transform: `scale(0.75)`
    })),
    state('floating-rtl', style({
        top: '-22px',
        left: '2px',
        transform: `scale(0.75)`
    })),
    transition('* => *', animate(`400ms cubic-bezier(0.25, 0.8, 0.25, 1)`))
]);
/**
 * This animation transforms the select's overlay panel on and off the page.
 *
 * When the panel is attached to the DOM, it expands its width 32px, scales it up to
 * 100% on the Y axis, fades in its border, and translates slightly up and to the
 * side to ensure the option text correctly overlaps the trigger text.
 *
 * When the panel is removed from the DOM, it simply fades out linearly.
 */
const transformPanel = trigger('transformPanel', [
    state('showing', style({
        opacity: 1,
        minWidth: 'calc(100% + 32px)',
        transform: `scaleY(1)`
    })),
    transition('void => *', [
        style({
            opacity: 0,
            minWidth: '100%',
            transform: `scaleY(0)`
        }),
        animate(`150ms cubic-bezier(0.25, 0.8, 0.25, 1)`)
    ]),
    transition('* => void', [
        animate('250ms 100ms linear', style({ opacity: 0 }))
    ])
]);
/**
 * This animation fades in the background color and text content of the
 * select's options. It is time delayed to occur 100ms after the overlay
 * panel has transformed in.
 */
const fadeInContent = trigger('fadeInContent', [
    state('showing', style({ opacity: 1 })),
    transition('void => showing', [
        style({ opacity: 0 }),
        animate(`150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)`)
    ])
]);

/**
 * Exception thrown when attempting to change a select's `multiple` option after initialization.
 * @docs-private
 */
class MdSelectDynamicMultipleError extends MdError {
    constructor() {
        super('Cannot change `multiple` mode of select after initialization.');
    }
}
/**
 * Exception thrown when attempting to assign a non-array value to a select in `multiple` mode.
 * Note that `undefined` and `null` are still valid values to allow for resetting the value.
 * @docs-private
 */
class MdSelectNonArrayValueError extends MdError {
    constructor() {
        super('Cannot assign truthy non-array value to select in `multiple` mode.');
    }
}

var __decorate$41 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$41 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$8 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */
/** The fixed height of every option element. */
const SELECT_OPTION_HEIGHT = 48;
/** The max height of the select's overlay panel */
const SELECT_PANEL_MAX_HEIGHT = 256;
/** The max number of options visible at once in the select panel. */
const SELECT_MAX_OPTIONS_DISPLAYED = 5;
/** The fixed height of the select's trigger element. */
const SELECT_TRIGGER_HEIGHT = 30;
/**
 * Must adjust for the difference in height between the option and the trigger,
 * so the text will align on the y axis.
 * (SELECT_OPTION_HEIGHT (48) - SELECT_TRIGGER_HEIGHT (30)) / 2 = 9
 */
const SELECT_OPTION_HEIGHT_ADJUSTMENT = 9;
/** The panel's padding on the x-axis */
const SELECT_PANEL_PADDING_X = 16;
/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * (SELECT_PADDING * 1.75) + 20 = 48
 * The padding is multiplied by 1.75 because the checkbox's margin is half the padding, and
 * the browser adds ~4px, because we're using inline elements.
 * The checkbox width is 20px.
 */
const SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.75 + 20;
/**
 * The panel's padding on the y-axis. This padding indicates there are more
 * options available if you scroll.
 */
const SELECT_PANEL_PADDING_Y = 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 */
const SELECT_PANEL_VIEWPORT_PADDING = 8;
/** Change event object that is emitted when the select value has changed. */
class MdSelectChange {
    constructor(source, value) {
        this.source = source;
        this.value = value;
    }
}
let MdSelect = class MdSelect {
    constructor(_element, _renderer, _viewportRuler, _changeDetectorRef, _dir, _control, tabIndex) {
        this._element = _element;
        this._renderer = _renderer;
        this._viewportRuler = _viewportRuler;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._control = _control;
        /** Whether or not the overlay panel is open. */
        this._panelOpen = false;
        /** Whether filling out the select is required in the form.  */
        this._required = false;
        /** Whether the select is disabled.  */
        this._disabled = false;
        /** The scroll position of the overlay panel, calculated to center the selected option. */
        this._scrollTop = 0;
        /** Whether the component is in multiple selection mode. */
        this._multiple = false;
        /** The animation state of the placeholder. */
        this._placeholderState = '';
        /** View -> model callback called when value changes */
        this._onChange = (value) => { };
        /** View -> model callback called when select has been touched */
        this._onTouched = () => { };
        /** The IDs of child options to be passed to the aria-owns attribute. */
        this._optionIds = '';
        /** The value of the select panel's transform-origin property. */
        this._transformOrigin = 'top';
        /** Whether the panel's animation is done. */
        this._panelDoneAnimating = false;
        /**
         * The x-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text when
         * the panel opens. Will change based on LTR or RTL text direction.
         */
        this._offsetX = 0;
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */
        this._offsetY = 0;
        /**
         * This position config ensures that the top "start" corner of the overlay
         * is aligned with with the top "start" of the origin by default (overlapping
         * the trigger completely). If the panel cannot fit below the trigger, it
         * will fall back to a position above the trigger.
         */
        this._positions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
            },
        ];
        this._floatPlaceholder = 'auto';
        /** Event emitted when the select has been opened. */
        this.onOpen = new EventEmitter();
        /** Event emitted when the select has been closed. */
        this.onClose = new EventEmitter();
        /** Event emitted when the selected value has been changed by the user. */
        this.change = new EventEmitter();
        if (this._control) {
            this._control.valueAccessor = this;
        }
        this._tabIndex = parseInt(tabIndex) || 0;
    }
    /** Placeholder to be shown if no value has been selected. */
    get placeholder() { return this._placeholder; }
    set placeholder(value) {
        this._placeholder = value;
        // Must wait to record the trigger width to ensure placeholder width is included.
        Promise.resolve(null).then(() => this._triggerWidth = this._getWidth());
    }
    /** Whether the component is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    /** Whether the component is required. */
    get required() { return this._required; }
    set required(value) { this._required = coerceBooleanProperty(value); }
    /** Whether the user should be allowed to select multiple options. */
    get multiple() { return this._multiple; }
    set multiple(value) {
        if (this._selectionModel) {
            throw new MdSelectDynamicMultipleError();
        }
        this._multiple = coerceBooleanProperty(value);
    }
    /** Whether to float the placeholder text. */
    get floatPlaceholder() { return this._floatPlaceholder; }
    set floatPlaceholder(value) {
        this._floatPlaceholder = value || 'auto';
    }
    /** Tab index for the select element. */
    get tabIndex() { return this._disabled ? -1 : this._tabIndex; }
    set tabIndex(value) {
        if (typeof value !== 'undefined') {
            this._tabIndex = value;
        }
    }
    /** Combined stream of all of the child options' change events. */
    get optionSelectionChanges() {
        return Observable.merge(...this.options.map(option => option.onSelectionChange));
    }
    ngAfterContentInit() {
        this._selectionModel = new SelectionModel(this.multiple, null, false);
        this._initKeyManager();
        this._changeSubscription = this.options.changes.startWith(null).subscribe(() => {
            this._resetOptions();
            if (this._control) {
                // Defer setting the value in order to avoid the "Expression
                // has changed after it was checked" errors from Angular.
                Promise.resolve(null).then(() => this._setSelectionByValue(this._control.value));
            }
        });
    }
    ngOnDestroy() {
        this._dropSubscriptions();
        if (this._changeSubscription) {
            this._changeSubscription.unsubscribe();
        }
        if (this._tabSubscription) {
            this._tabSubscription.unsubscribe();
        }
    }
    /** Toggles the overlay panel open or closed. */
    toggle() {
        this.panelOpen ? this.close() : this.open();
    }
    /** Opens the overlay panel. */
    open() {
        if (this.disabled || !this.options.length) {
            return;
        }
        this._calculateOverlayPosition();
        this._placeholderState = this._floatPlaceholderState();
        this._panelOpen = true;
    }
    /** Closes the overlay panel and focuses the host element. */
    close() {
        if (this._panelOpen) {
            this._panelOpen = false;
            if (this._selectionModel.isEmpty()) {
                this._placeholderState = '';
            }
            this._focusHost();
        }
    }
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    writeValue(value) {
        if (this.options) {
            this._setSelectionByValue(value);
        }
    }
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /** Whether or not the overlay panel is open. */
    get panelOpen() {
        return this._panelOpen;
    }
    /** The currently selected option. */
    get selected() {
        return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
    }
    /** The value displayed in the trigger. */
    get triggerValue() {
        return this.multiple ?
            this._selectionModel.selected.map(option => option.viewValue).join(', ') :
            this._selectionModel.selected[0].viewValue;
    }
    /** Whether the element is in RTL mode. */
    _isRtl() {
        return this._dir ? this._dir.value === 'rtl' : false;
    }
    /** The width of the trigger element. This is necessary to match
     * the overlay width to the trigger width.
     */
    _getWidth() {
        return this._getTriggerRect().width;
    }
    /** Ensures the panel opens if activated by the keyboard. */
    _handleKeydown(event) {
        if (event.keyCode === ENTER || event.keyCode === SPACE) {
            this.open();
        }
    }
    /**
     * When the panel element is finished transforming in (though not fading in), it
     * emits an event and focuses an option if the panel is open.
     */
    _onPanelDone() {
        if (this.panelOpen) {
            this._focusCorrectOption();
            this.onOpen.emit();
        }
        else {
            this.onClose.emit();
        }
    }
    /**
     * When the panel content is done fading in, the _panelDoneAnimating property is
     * set so the proper class can be added to the panel.
     */
    _onFadeInDone() {
        this._panelDoneAnimating = this.panelOpen;
    }
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     */
    _onBlur() {
        if (!this.panelOpen) {
            this._onTouched();
        }
    }
    /**
     * Sets the scroll position of the scroll container. This must be called after
     * the overlay pane is attached or the scroll container element will not yet be
     * present in the DOM.
     */
    _setScrollTop() {
        const scrollContainer = this.overlayDir.overlayRef.overlayElement.querySelector('.mat-select-panel');
        scrollContainer.scrollTop = this._scrollTop;
    }
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */
    _setSelectionByValue(value) {
        const isArray = Array.isArray(value);
        if (this.multiple && value && !isArray) {
            throw new MdSelectNonArrayValueError();
        }
        if (isArray) {
            this._clearSelection();
            value.forEach((currentValue) => this._selectValue(currentValue));
            this._sortValues();
        }
        else if (!this._selectValue(value)) {
            this._clearSelection();
        }
        this._setValueWidth();
        if (this._selectionModel.isEmpty()) {
            this._placeholderState = '';
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Finds and selects and option based on its value.
     * @returns Option that has the corresponding value.
     */
    _selectValue(value) {
        let correspondingOption = this.options.find(option => option.value === value);
        if (correspondingOption) {
            correspondingOption.select();
            this._selectionModel.select(correspondingOption);
        }
        return correspondingOption;
    }
    /**
     * Clears the select trigger and deselects every option in the list.
     * @param skip Option that should not be deselected.
     */
    _clearSelection(skip) {
        this._selectionModel.clear();
        this.options.forEach(option => {
            if (option !== skip) {
                option.deselect();
            }
        });
    }
    _getTriggerRect() {
        return this.trigger.nativeElement.getBoundingClientRect();
    }
    /** Sets up a key manager to listen to keyboard events on the overlay panel. */
    _initKeyManager() {
        this._keyManager = new FocusKeyManager(this.options);
        this._tabSubscription = this._keyManager.tabOut.subscribe(() => this.close());
    }
    /** Drops current option subscriptions and IDs and resets from scratch. */
    _resetOptions() {
        this._dropSubscriptions();
        this._listenToOptions();
        this._setOptionIds();
        this._setOptionMultiple();
    }
    /** Listens to user-generated selection events on each option. */
    _listenToOptions() {
        this._optionSubscription = this.optionSelectionChanges
            .filter(event => event.isUserInput)
            .subscribe(event => {
            this._onSelect(event.source);
            this._setValueWidth();
            if (!this.multiple) {
                this.close();
            }
        });
    }
    /** Invoked when an option is clicked. */
    _onSelect(option) {
        const wasSelected = this._selectionModel.isSelected(option);
        if (this.multiple) {
            this._selectionModel.toggle(option);
            wasSelected ? option.deselect() : option.select();
            this._sortValues();
        }
        else {
            this._clearSelection(option);
            this._selectionModel.select(option);
        }
        if (wasSelected !== this._selectionModel.isSelected(option)) {
            this._propagateChanges();
        }
    }
    /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     */
    _sortValues() {
        if (this._multiple) {
            this._selectionModel.clear();
            this.options.forEach(option => {
                if (option.selected) {
                    this._selectionModel.select(option);
                }
            });
        }
    }
    /** Unsubscribes from all option subscriptions. */
    _dropSubscriptions() {
        if (this._optionSubscription) {
            this._optionSubscription.unsubscribe();
            this._optionSubscription = null;
        }
    }
    /** Emits change event to set the model value. */
    _propagateChanges() {
        let valueToEmit = Array.isArray(this.selected) ?
            this.selected.map(option => option.value) :
            this.selected.value;
        this._onChange(valueToEmit);
        this.change.emit(new MdSelectChange(this, valueToEmit));
    }
    /** Records option IDs to pass to the aria-owns property. */
    _setOptionIds() {
        this._optionIds = this.options.map(option => option.id).join(' ');
    }
    /**
     * Sets the `multiple` property on each option. The promise is necessary
     * in order to avoid Angular errors when modifying the property after init.
     * TODO: there should be a better way of doing this.
     */
    _setOptionMultiple() {
        if (this.multiple) {
            Promise.resolve(null).then(() => {
                this.options.forEach(option => option.multiple = this.multiple);
            });
        }
    }
    /**
     * Must set the width of the selected option's value programmatically
     * because it is absolutely positioned and otherwise will not clip
     * overflow. The selection arrow is 9px wide, add 4px of padding = 13
     */
    _setValueWidth() {
        this._selectedValueWidth = this._triggerWidth - 13;
    }
    /**
     * Focuses the selected item. If no option is selected, it will focus
     * the first item instead.
     */
    _focusCorrectOption() {
        if (this._selectionModel.isEmpty()) {
            this._keyManager.setFirstItemActive();
        }
        else {
            this._keyManager.setActiveItem(this._getOptionIndex(this._selectionModel.selected[0]));
        }
    }
    /** Focuses the host element when the panel closes. */
    _focusHost() {
        this._renderer.invokeElementMethod(this._element.nativeElement, 'focus');
    }
    /** Gets the index of the provided option in the option list. */
    _getOptionIndex(option) {
        return this.options.reduce((result, current, index) => {
            return result === undefined ? (option === current ? index : undefined) : result;
        }, undefined);
    }
    /** Calculates the scroll position and x- and y-offsets of the overlay panel. */
    _calculateOverlayPosition() {
        this._offsetX = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X : SELECT_PANEL_PADDING_X;
        if (!this._isRtl()) {
            this._offsetX *= -1;
        }
        const panelHeight = Math.min(this.options.length * SELECT_OPTION_HEIGHT, SELECT_PANEL_MAX_HEIGHT);
        const scrollContainerHeight = this.options.length * SELECT_OPTION_HEIGHT;
        // The farthest the panel can be scrolled before it hits the bottom
        const maxScroll = scrollContainerHeight - panelHeight;
        if (this._selectionModel.hasValue()) {
            const selectedIndex = this._getOptionIndex(this._selectionModel.selected[0]);
            // We must maintain a scroll buffer so the selected option will be scrolled to the
            // center of the overlay panel rather than the top.
            const scrollBuffer = panelHeight / 2;
            this._scrollTop = this._calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll);
            this._offsetY = this._calculateOverlayOffset(selectedIndex, scrollBuffer, maxScroll);
        }
        else {
            // If no option is selected, the panel centers on the first option. In this case,
            // we must only adjust for the height difference between the option element
            // and the trigger element, then multiply it by -1 to ensure the panel moves
            // in the correct direction up the page.
            this._offsetY = (SELECT_OPTION_HEIGHT - SELECT_TRIGGER_HEIGHT) / 2 * -1;
        }
        this._checkOverlayWithinViewport(maxScroll);
    }
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     */
    _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
        const optionOffsetFromScrollTop = SELECT_OPTION_HEIGHT * selectedIndex;
        const halfOptionHeight = SELECT_OPTION_HEIGHT / 2;
        // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
        // scroll container, then subtracts the scroll buffer to scroll the option down to
        // the center of the overlay panel. Half the option height must be re-added to the
        // scrollTop so the option is centered based on its middle, not its top edge.
        const optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
        return clampValue(0, optimalScrollPosition, maxScroll);
    }
    /**
     * Figures out the appropriate animation state for the placeholder.
     */
    _getPlaceholderAnimationState() {
        if (this.floatPlaceholder === 'never') {
            return '';
        }
        if (this.floatPlaceholder === 'always') {
            return this._floatPlaceholderState();
        }
        return this._placeholderState;
    }
    /**
     * Determines the CSS `visibility` of the placeholder element.
     */
    _getPlaceholderVisibility() {
        return (this.floatPlaceholder !== 'never' || this._selectionModel.isEmpty()) ?
            'visible' : 'hidden';
    }
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     */
    _calculateOverlayOffset(selectedIndex, scrollBuffer, maxScroll) {
        let optionOffsetFromPanelTop;
        if (this._scrollTop === 0) {
            optionOffsetFromPanelTop = selectedIndex * SELECT_OPTION_HEIGHT;
        }
        else if (this._scrollTop === maxScroll) {
            const firstDisplayedIndex = this.options.length - SELECT_MAX_OPTIONS_DISPLAYED;
            const selectedDisplayIndex = selectedIndex - firstDisplayedIndex;
            // Because the panel height is longer than the height of the options alone,
            // there is always extra padding at the top or bottom of the panel. When
            // scrolled to the very bottom, this padding is at the top of the panel and
            // must be added to the offset.
            optionOffsetFromPanelTop =
                selectedDisplayIndex * SELECT_OPTION_HEIGHT + SELECT_PANEL_PADDING_Y;
        }
        else {
            // If the option was scrolled to the middle of the panel using a scroll buffer,
            // its offset will be the scroll buffer minus the half height that was added to
            // center it.
            optionOffsetFromPanelTop = scrollBuffer - SELECT_OPTION_HEIGHT / 2;
        }
        // The final offset is the option's offset from the top, adjusted for the height
        // difference, multiplied by -1 to ensure that the overlay moves in the correct
        // direction up the page.
        return optionOffsetFromPanelTop * -1 - SELECT_OPTION_HEIGHT_ADJUSTMENT;
    }
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     */
    _checkOverlayWithinViewport(maxScroll) {
        const viewportRect = this._viewportRuler.getViewportRect();
        const triggerRect = this._getTriggerRect();
        const topSpaceAvailable = triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
        const bottomSpaceAvailable = viewportRect.height - triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
        const panelHeightTop = Math.abs(this._offsetY);
        const totalPanelHeight = Math.min(this.options.length * SELECT_OPTION_HEIGHT, SELECT_PANEL_MAX_HEIGHT);
        const panelHeightBottom = totalPanelHeight - panelHeightTop - triggerRect.height;
        if (panelHeightBottom > bottomSpaceAvailable) {
            this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
        }
        else if (panelHeightTop > topSpaceAvailable) {
            this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
        }
        else {
            this._transformOrigin = this._getOriginBasedOnOption();
        }
    }
    /** Adjusts the overlay panel up to fit in the viewport. */
    _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
        const distanceBelowViewport = panelHeightBottom - bottomSpaceAvailable;
        // Scrolls the panel up by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel up into the viewport.
        this._scrollTop -= distanceBelowViewport;
        this._offsetY -= distanceBelowViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very top, it won't be able to fit the panel
        // by scrolling, so set the offset to 0 to allow the fallback position to take
        // effect.
        if (this._scrollTop <= 0) {
            this._scrollTop = 0;
            this._offsetY = 0;
            this._transformOrigin = `50% bottom 0px`;
        }
    }
    /** Adjusts the overlay panel down to fit in the viewport. */
    _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
        const distanceAboveViewport = panelHeightTop - topSpaceAvailable;
        // Scrolls the panel down by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel down into the viewport.
        this._scrollTop += distanceAboveViewport;
        this._offsetY += distanceAboveViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very bottom, it won't be able to fit the
        // panel by scrolling, so set the offset to 0 to allow the fallback position
        // to take effect.
        if (this._scrollTop >= maxScroll) {
            this._scrollTop = maxScroll;
            this._offsetY = 0;
            this._transformOrigin = `50% top 0px`;
            return;
        }
    }
    /** Sets the transform origin point based on the selected option. */
    _getOriginBasedOnOption() {
        const originY = Math.abs(this._offsetY) - SELECT_OPTION_HEIGHT_ADJUSTMENT + SELECT_OPTION_HEIGHT / 2;
        return `50% ${originY}px 0px`;
    }
    /** Figures out the floating placeholder state value. */
    _floatPlaceholderState() {
        return this._isRtl() ? 'floating-rtl' : 'floating-ltr';
    }
};
__decorate$41([
    ViewChild('trigger'), 
    __metadata$41('design:type', ElementRef)
], MdSelect.prototype, "trigger", void 0);
__decorate$41([
    ViewChild(ConnectedOverlayDirective), 
    __metadata$41('design:type', ConnectedOverlayDirective)
], MdSelect.prototype, "overlayDir", void 0);
__decorate$41([
    ContentChildren(MdOption), 
    __metadata$41('design:type', QueryList)
], MdSelect.prototype, "options", void 0);
__decorate$41([
    Input(), 
    __metadata$41('design:type', Object)
], MdSelect.prototype, "placeholder", null);
__decorate$41([
    Input(), 
    __metadata$41('design:type', Object)
], MdSelect.prototype, "disabled", null);
__decorate$41([
    Input(), 
    __metadata$41('design:type', Object)
], MdSelect.prototype, "required", null);
__decorate$41([
    Input(), 
    __metadata$41('design:type', Boolean)
], MdSelect.prototype, "multiple", null);
__decorate$41([
    Input(), 
    __metadata$41('design:type', String)
], MdSelect.prototype, "floatPlaceholder", null);
__decorate$41([
    Input(), 
    __metadata$41('design:type', Number)
], MdSelect.prototype, "tabIndex", null);
__decorate$41([
    Output(), 
    __metadata$41('design:type', EventEmitter)
], MdSelect.prototype, "onOpen", void 0);
__decorate$41([
    Output(), 
    __metadata$41('design:type', EventEmitter)
], MdSelect.prototype, "onClose", void 0);
__decorate$41([
    Output(), 
    __metadata$41('design:type', EventEmitter)
], MdSelect.prototype, "change", void 0);
MdSelect = __decorate$41([
    Component({selector: 'md-select, mat-select',
        template: "<div class=\"mat-select-trigger\" cdk-overlay-origin (click)=\"toggle()\" #origin=\"cdkOverlayOrigin\" #trigger><span class=\"mat-select-placeholder\" [class.mat-floating-placeholder]=\"_selectionModel.hasValue()\" [@transformPlaceholder]=\"_getPlaceholderAnimationState()\" [style.visibility]=\"_getPlaceholderVisibility()\" [style.width.px]=\"_selectedValueWidth\">{{ placeholder }} </span><span class=\"mat-select-value\" *ngIf=\"_selectionModel.hasValue()\"><span class=\"mat-select-value-text\">{{ triggerValue }}</span> </span><span class=\"mat-select-arrow\"></span> <span class=\"mat-select-underline\"></span></div><template cdk-connected-overlay [origin]=\"origin\" [open]=\"panelOpen\" hasBackdrop (backdropClick)=\"close()\" backdropClass=\"cdk-overlay-transparent-backdrop\" [positions]=\"_positions\" [minWidth]=\"_triggerWidth\" [offsetY]=\"_offsetY\" [offsetX]=\"_offsetX\" (attach)=\"_setScrollTop()\"><div class=\"mat-select-panel\" [@transformPanel]=\"'showing'\" (@transformPanel.done)=\"_onPanelDone()\" (keydown)=\"_keyManager.onKeydown($event)\" [style.transformOrigin]=\"_transformOrigin\" [class.mat-select-panel-done-animating]=\"_panelDoneAnimating\"><div class=\"mat-select-content\" [@fadeInContent]=\"'showing'\" (@fadeInContent.done)=\"_onFadeInDone()\"><ng-content></ng-content></div></div></template>",
        styles: [".mat-select{display:inline-block;outline:0;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{display:flex;align-items:center;height:30px;min-width:112px;cursor:pointer;position:relative;box-sizing:border-box;font-size:16px}[aria-disabled=true] .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-underline{position:absolute;bottom:0;left:0;right:0;height:1px}[aria-disabled=true] .mat-select-underline{background-image:linear-gradient(to right,rgba(0,0,0,.26) 0,rgba(0,0,0,.26) 33%,transparent 0);background-size:4px 1px;background-repeat:repeat-x;background-color:transparent;background-position:0 bottom}.mat-select-placeholder{position:relative;padding:0 2px;transform-origin:left top;flex-grow:1}.mat-select-placeholder.mat-floating-placeholder{top:-22px;left:-2px;text-align:left;transform:scale(.75)}[dir=rtl] .mat-select-placeholder{transform-origin:right top}[dir=rtl] .mat-select-placeholder.mat-floating-placeholder{left:2px;text-align:right}[aria-required=true] .mat-select-placeholder::after{content:'*'}.mat-select-value{position:absolute;max-width:calc(100% - 18px);flex-grow:1;top:0;left:0;bottom:0;display:flex;align-items:center}[dir=rtl] .mat-select-value{left:auto;right:0}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:30px}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px}@media screen and (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}} /*# sourceMappingURL=select.css.map */ "],
        encapsulation: ViewEncapsulation.None,
        host: {
            'role': 'listbox',
            '[attr.tabindex]': 'tabIndex',
            '[attr.aria-label]': 'placeholder',
            '[attr.aria-required]': 'required.toString()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.aria-invalid]': '_control?.invalid || "false"',
            '[attr.aria-owns]': '_optionIds',
            '[class.mat-select-disabled]': 'disabled',
            '[class.mat-select]': 'true',
            '(keydown)': '_handleKeydown($event)',
            '(blur)': '_onBlur()'
        },
        animations: [
            transformPlaceholder,
            transformPanel,
            fadeInContent
        ],
        exportAs: 'mdSelect',
    }),
    __param$8(4, Optional()),
    __param$8(5, Self()),
    __param$8(5, Optional()),
    __param$8(6, Attribute('tabindex')), 
    __metadata$41('design:paramtypes', [ElementRef, Renderer, ViewportRuler, ChangeDetectorRef, Dir, NgControl, String])
], MdSelect);
/** Clamps a value n between min and max values. */
function clampValue(min, n, max) {
    return Math.min(Math.max(min, n), max);
}

var __decorate$40 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$40 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdSelectModule_1 = class MdSelectModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdSelectModule_1,
            providers: []
        };
    }
};
let MdSelectModule = MdSelectModule_1;
MdSelectModule = MdSelectModule_1 = __decorate$40([
    NgModule({
        imports: [CommonModule, OverlayModule, MdOptionModule, CompatibilityModule],
        exports: [MdSelect, MdOptionModule, CompatibilityModule],
        declarations: [MdSelect],
    }), 
    __metadata$40('design:paramtypes', [])
], MdSelectModule);

var __decorate$43 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$43 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const MD_SLIDE_TOGGLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MdSlideToggle),
    multi: true
};
// A simple change event emitted by the MdSlideToggle component.
class MdSlideToggleChange {
}
// Increasing integer for generating unique ids for slide-toggle components.
let nextId$1 = 0;
/**
 * Two-state control, which can be also called `switch`.
 */
let MdSlideToggle = class MdSlideToggle {
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.onChange = (_) => { };
        this.onTouched = () => { };
        // A unique id for the slide-toggle. By default the id is auto-generated.
        this._uniqueId = `md-slide-toggle-${++nextId$1}`;
        this._checked = false;
        this._isMousedown = false;
        this._slideRenderer = null;
        this._disabled = false;
        this._required = false;
        this._disableRipple = false;
        // Needs to be public to support AOT compilation (as host binding).
        this._hasFocus = false;
        /** Name value will be applied to the input element if present */
        this.name = null;
        /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
        this.id = this._uniqueId;
        /** Used to specify the tabIndex value for the underlying input element. */
        this.tabIndex = 0;
        /** Whether the label should appear after or before the slide-toggle. Defaults to 'after' */
        this.labelPosition = 'after';
        /** Used to set the aria-label attribute on the underlying input element. */
        this.ariaLabel = null;
        /** Used to set the aria-labelledby attribute on the underlying input element. */
        this.ariaLabelledby = null;
        this._change = new EventEmitter();
        /** An event will be dispatched each time the slide-toggle changes its value. */
        this.change = this._change.asObservable();
    }
    /** Whether the slide-toggle is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) { this._disabled = coerceBooleanProperty(value); }
    /** Whether the slide-toggle is required. */
    get required() { return this._required; }
    set required(value) { this._required = coerceBooleanProperty(value); }
    /** Whether the ripple effect for this slide-toggle is disabled. */
    get disableRipple() { return this._disableRipple; }
    set disableRipple(value) { this._disableRipple = coerceBooleanProperty(value); }
    /** Returns the unique id for the visual hidden input. */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    ngAfterContentInit() {
        this._slideRenderer = new SlideToggleRenderer(this._elementRef);
    }
    /**
     * The onChangeEvent method will be also called on click.
     * This is because everything for the slide-toggle is wrapped inside of a label,
     * which triggers a onChange event on click.
     */
    _onChangeEvent(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the component's `change` output.
        event.stopPropagation();
        // Once a drag is currently in progress, we do not want to toggle the slide-toggle on a click.
        if (!this.disabled && !this._slideRenderer.dragging) {
            this.toggle();
            // Emit our custom change event if the native input emitted one.
            // It is important to only emit it, if the native input triggered one, because
            // we don't want to trigger a change event, when the `checked` variable changes for example.
            this._emitChangeEvent();
        }
    }
    _onInputClick(event) {
        this.onTouched();
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    }
    _setMousedown() {
        // We only *show* the focus style when focus has come to the button via the keyboard.
        // The Material Design spec is silent on this topic, and without doing this, the
        // button continues to look :active after clicking.
        // @see http://marcysutton.com/button-focus-hell/
        this._isMousedown = true;
        setTimeout(() => this._isMousedown = false, 100);
    }
    _onInputFocus() {
        // Only show the focus / ripple indicator when the focus was not triggered by a mouse
        // interaction on the component.
        if (!this._isMousedown) {
            this._hasFocus = true;
        }
    }
    _onInputBlur() {
        this._hasFocus = false;
        this.onTouched();
    }
    /** Implemented as part of ControlValueAccessor. */
    writeValue(value) {
        this.checked = value;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /** Implemented as a part of ControlValueAccessor. */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /** Focuses the slide-toggle. */
    focus() {
        this._renderer.invokeElementMethod(this._inputElement.nativeElement, 'focus');
        this._onInputFocus();
    }
    /** Whether the slide-toggle is checked. */
    get checked() { return !!this._checked; }
    set checked(value) {
        if (this.checked !== !!value) {
            this._checked = value;
            this.onChange(this._checked);
        }
    }
    /** The color of the slide-toggle. Can be primary, accent, or warn. */
    get color() { return this._color; }
    set color(value) {
        this._updateColor(value);
    }
    /** Toggles the checked state of the slide-toggle. */
    toggle() {
        this.checked = !this.checked;
    }
    _updateColor(newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    }
    _setElementColor(color, isAdd) {
        if (color != null && color != '') {
            this._renderer.setElementClass(this._elementRef.nativeElement, `mat-${color}`, isAdd);
        }
    }
    /** Emits the change event to the `change` output EventEmitter */
    _emitChangeEvent() {
        let event = new MdSlideToggleChange();
        event.source = this;
        event.checked = this.checked;
        this._change.emit(event);
    }
    _onDragStart() {
        if (!this.disabled) {
            this._slideRenderer.startThumbDrag(this.checked);
        }
    }
    _onDrag(event) {
        if (this._slideRenderer.dragging) {
            this._slideRenderer.updateThumbPosition(event.deltaX);
        }
    }
    _onDragEnd() {
        if (this._slideRenderer.dragging) {
            let _previousChecked = this.checked;
            this.checked = this._slideRenderer.dragPercentage > 50;
            if (_previousChecked !== this.checked) {
                this._emitChangeEvent();
            }
            // The drag should be stopped outside of the current event handler, because otherwise the
            // click event will be fired before and will revert the drag change.
            setTimeout(() => this._slideRenderer.stopThumbDrag());
        }
    }
};
__decorate$43([
    Input(), 
    __metadata$43('design:type', String)
], MdSlideToggle.prototype, "name", void 0);
__decorate$43([
    Input(), 
    __metadata$43('design:type', String)
], MdSlideToggle.prototype, "id", void 0);
__decorate$43([
    Input(), 
    __metadata$43('design:type', Number)
], MdSlideToggle.prototype, "tabIndex", void 0);
__decorate$43([
    Input(), 
    __metadata$43('design:type', Object)
], MdSlideToggle.prototype, "labelPosition", void 0);
__decorate$43([
    Input('aria-label'), 
    __metadata$43('design:type', String)
], MdSlideToggle.prototype, "ariaLabel", void 0);
__decorate$43([
    Input('aria-labelledby'), 
    __metadata$43('design:type', String)
], MdSlideToggle.prototype, "ariaLabelledby", void 0);
__decorate$43([
    Input(), 
    __metadata$43('design:type', Boolean)
], MdSlideToggle.prototype, "disabled", null);
__decorate$43([
    Input(), 
    __metadata$43('design:type', Boolean)
], MdSlideToggle.prototype, "required", null);
__decorate$43([
    Input(), 
    __metadata$43('design:type', Boolean)
], MdSlideToggle.prototype, "disableRipple", null);
__decorate$43([
    Output(), 
    __metadata$43('design:type', Observable)
], MdSlideToggle.prototype, "change", void 0);
__decorate$43([
    ViewChild('input'), 
    __metadata$43('design:type', ElementRef)
], MdSlideToggle.prototype, "_inputElement", void 0);
__decorate$43([
    Input(), 
    __metadata$43('design:type', Object)
], MdSlideToggle.prototype, "checked", null);
__decorate$43([
    Input(), 
    __metadata$43('design:type', String)
], MdSlideToggle.prototype, "color", null);
MdSlideToggle = __decorate$43([
    Component({selector: 'md-slide-toggle, mat-slide-toggle',
        host: {
            '[class.mat-slide-toggle]': 'true',
            '[class.mat-checked]': 'checked',
            '[class.mat-disabled]': 'disabled',
            // This mat-slide-toggle prefix will change, once the temporary ripple is removed.
            '[class.mat-slide-toggle-focused]': '_hasFocus',
            '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
            '(mousedown)': '_setMousedown()'
        },
        template: "<label class=\"mat-slide-toggle-label\" #label><div class=\"mat-slide-toggle-bar\"><input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\" [id]=\"inputId\" [required]=\"required\" [tabIndex]=\"tabIndex\" [checked]=\"checked\" [disabled]=\"disabled\" [attr.name]=\"name\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" (blur)=\"_onInputBlur()\" (focus)=\"_onInputFocus()\" (change)=\"_onChangeEvent($event)\" (click)=\"_onInputClick($event)\"><div class=\"mat-slide-toggle-thumb-container\" (slidestart)=\"_onDragStart()\" (slide)=\"_onDrag($event)\" (slideend)=\"_onDragEnd()\"><div class=\"mat-slide-toggle-thumb\"></div><div class=\"mat-slide-toggle-ripple\" md-ripple [mdRippleTrigger]=\"label\" [mdRippleCentered]=\"true\" [mdRippleDisabled]=\"disableRipple || disabled\"></div></div></div><span class=\"mat-slide-toggle-content\"><ng-content></ng-content></span></label>",
        styles: [".mat-slide-toggle{display:inline-block;height:24px;margin:16px 0;line-height:24px;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px,0,0)}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-content{font-size:14px;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;cursor:pointer}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}.mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-right:8px;margin-left:0}.mat-slide-toggle-label-before .mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0,0,0);transition:all 80ms linear;transition-property:transform;cursor:-webkit-grab;cursor:grab}.mat-slide-toggle-thumb-container.mat-dragging{transition-duration:0s}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}@media screen and (-ms-high-contrast:active){.mat-slide-toggle-thumb{background:#fff;border:solid 1px #000}}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;border-radius:8px}@media screen and (-ms-high-contrast:active){.mat-slide-toggle-bar{background:#fff}}.mat-slide-toggle-input{bottom:0;left:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}.mat-slide-toggle-ripple{position:absolute;top:-13px;left:-13px;height:46px;width:46px;border-radius:50%;z-index:1;pointer-events:none} /*# sourceMappingURL=slide-toggle.css.map */ "],
        providers: [MD_SLIDE_TOGGLE_VALUE_ACCESSOR],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush
    }), 
    __metadata$43('design:paramtypes', [ElementRef, Renderer])
], MdSlideToggle);
/**
 * Renderer for the Slide Toggle component, which separates DOM modification in its own class
 */
class SlideToggleRenderer {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        /** Whether the thumb is currently being dragged. */
        this.dragging = false;
        this._thumbEl = _elementRef.nativeElement.querySelector('.mat-slide-toggle-thumb-container');
        this._thumbBarEl = _elementRef.nativeElement.querySelector('.mat-slide-toggle-bar');
    }
    /** Initializes the drag of the slide-toggle. */
    startThumbDrag(checked) {
        if (this.dragging) {
            return;
        }
        this._thumbBarWidth = this._thumbBarEl.clientWidth - this._thumbEl.clientWidth;
        this._thumbEl.classList.add('mat-dragging');
        this._previousChecked = checked;
        this.dragging = true;
    }
    /** Resets the current drag and returns the new checked value. */
    stopThumbDrag() {
        if (!this.dragging) {
            return;
        }
        this.dragging = false;
        this._thumbEl.classList.remove('mat-dragging');
        // Reset the transform because the component will take care of the thumb position after drag.
        applyCssTransform(this._thumbEl, '');
        return this.dragPercentage > 50;
    }
    /** Updates the thumb containers position from the specified distance. */
    updateThumbPosition(distance) {
        this.dragPercentage = this._getDragPercentage(distance);
        // Calculate the moved distance based on the thumb bar width.
        let dragX = (this.dragPercentage / 100) * this._thumbBarWidth;
        applyCssTransform(this._thumbEl, `translate3d(${dragX}px, 0, 0)`);
    }
    /** Retrieves the percentage of thumb from the moved distance. Percentage as fraction of 100. */
    _getDragPercentage(distance) {
        let percentage = (distance / this._thumbBarWidth) * 100;
        // When the toggle was initially checked, then we have to start the drag at the end.
        if (this._previousChecked) {
            percentage += 100;
        }
        return Math.max(0, Math.min(percentage, 100));
    }
}

var __decorate$42 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$42 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdSlideToggleModule_1 = class MdSlideToggleModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdSlideToggleModule_1,
            providers: []
        };
    }
};
let MdSlideToggleModule = MdSlideToggleModule_1;
MdSlideToggleModule = MdSlideToggleModule_1 = __decorate$42([
    NgModule({
        imports: [FormsModule, MdRippleModule, CompatibilityModule],
        exports: [MdSlideToggle, CompatibilityModule],
        declarations: [MdSlideToggle],
        providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
    }), 
    __metadata$42('design:paramtypes', [])
], MdSlideToggleModule);

var __decorate$45 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$45 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$9 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
 * the default separation we chose.
 */
const MIN_AUTO_TICK_SEPARATION = 30;
/** The thumb gap size for a disabled slider. */
const DISABLED_THUMB_GAP = 7;
/** The thumb gap size for a non-active slider at its minimum value. */
const MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
/** The thumb gap size for an active slider at its minimum value. */
const MIN_VALUE_ACTIVE_THUMB_GAP = 10;
/**
 * Provider Expression that allows md-slider to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)] and [formControl].
 */
const MD_SLIDER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MdSlider),
    multi: true
};
/** A simple change event emitted by the MdSlider component. */
class MdSliderChange {
}
/**
 * Allows users to select from a range of values by moving the slider thumb. It is similar in
 * behavior to the native `<input type="range">` element.
 */
let MdSlider = class MdSlider {
    constructor(renderer, _elementRef, _focusOriginMonitor, _dir) {
        this._elementRef = _elementRef;
        this._focusOriginMonitor = _focusOriginMonitor;
        this._dir = _dir;
        this._disabled = false;
        this._invert = false;
        this._max = 100;
        this._min = 0;
        this._step = 1;
        this._thumbLabel = false;
        this._tickInterval = 0;
        this._value = null;
        this._vertical = false;
        /** Event emitted when the slider value has changed. */
        this.change = new EventEmitter();
        /** Event emitted when the slider thumb moves. */
        this.input = new EventEmitter();
        /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
        this.onTouched = () => { };
        this._percent = 0;
        /**
         * Whether or not the thumb is sliding.
         * Used to determine if there should be a transition for the thumb and fill track.
         */
        this._isSliding = false;
        /**
         * Whether or not the slider is active (clicked or sliding).
         * Used to shrink and grow the thumb as according to the Material Design spec.
         */
        this._isActive = false;
        /** The size of a tick interval as a percentage of the size of the track. */
        this._tickIntervalPercent = 0;
        /** A renderer to handle updating the slider's thumb and fill track. */
        this._renderer = null;
        /** The dimensions of the slider. */
        this._sliderDimensions = null;
        this._controlValueAccessorChangeFn = () => { };
        /** The last value for which a change event was emitted. */
        this._lastChangeValue = null;
        /** The last value for which an input event was emitted. */
        this._lastInputValue = null;
        this._focusOriginMonitor.monitor(this._elementRef.nativeElement, renderer, true)
            .subscribe((origin) => this._isActive = !!origin && origin !== 'keyboard');
        this._renderer = new SliderRenderer(this._elementRef);
    }
    /** Whether or not the slider is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) { this._disabled = coerceBooleanProperty(value); }
    /** Whether the slider is inverted. */
    get invert() { return this._invert; }
    set invert(value) { this._invert = coerceBooleanProperty(value); }
    /** The maximum value that the slider can have. */
    get max() {
        return this._max;
    }
    set max(v) {
        this._max = coerceNumberProperty(v, this._max);
        this._percent = this._calculatePercentage(this._value);
    }
    /** The minimum value that the slider can have. */
    get min() {
        return this._min;
    }
    set min(v) {
        this._min = coerceNumberProperty(v, this._min);
        // If the value wasn't explicitly set by the user, set it to the min.
        if (this._value === null) {
            this.value = this._min;
        }
        this._percent = this._calculatePercentage(this._value);
    }
    /** The values at which the thumb will snap. */
    get step() { return this._step; }
    set step(v) {
        this._step = coerceNumberProperty(v, this._step);
        if (this._step % 1 !== 0) {
            this._roundLabelTo = this._step.toString().split('.').pop().length;
        }
    }
    /** Whether or not to show the thumb label. */
    get thumbLabel() { return this._thumbLabel; }
    set thumbLabel(value) { this._thumbLabel = coerceBooleanProperty(value); }
    /** @deprecated */
    get _thumbLabelDeprecated() { return this._thumbLabel; }
    set _thumbLabelDeprecated(value) { this._thumbLabel = value; }
    /**
     * How often to show ticks. Relative to the step so that a tick always appears on a step.
     * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
     */
    get tickInterval() { return this._tickInterval; }
    set tickInterval(value) {
        if (value === 'auto') {
            this._tickInterval = 'auto';
        }
        else if (typeof value === 'number' || typeof value === 'string') {
            this._tickInterval = coerceNumberProperty(value, this._tickInterval);
        }
        else {
            this._tickInterval = 0;
        }
    }
    /** @deprecated */
    get _tickIntervalDeprecated() { return this.tickInterval; }
    set _tickIntervalDeprecated(v) { this.tickInterval = v; }
    /** Value of the slider. */
    get value() {
        // If the value needs to be read and it is still uninitialized, initialize it to the min.
        if (this._value === null) {
            this.value = this._min;
        }
        return this._value;
    }
    set value(v) {
        this._value = coerceNumberProperty(v, this._value);
        this._percent = this._calculatePercentage(this._value);
    }
    /** Whether the slider is vertical. */
    get vertical() { return this._vertical; }
    set vertical(value) { this._vertical = coerceBooleanProperty(value); }
    /** The value to be used for display purposes. */
    get displayValue() {
        // Note that this could be improved further by rounding something like 0.999 to 1 or
        // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
        // every change detection cycle.
        if (this._roundLabelTo && this.value % 1 !== 0) {
            return this.value.toFixed(this._roundLabelTo);
        }
        return this.value;
    }
    /** The percentage of the slider that coincides with the value. */
    get percent() { return this._clamp(this._percent); }
    /**
     * Whether the axis of the slider is inverted.
     * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
     */
    get _invertAxis() {
        // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
        // top. However from a y-axis standpoint this is inverted.
        return this.vertical ? !this.invert : this.invert;
    }
    /** Whether the slider is at its minimum value. */
    get _isMinValue() {
        return this.percent === 0;
    }
    /**
     * The amount of space to leave between the slider thumb and the track fill & track background
     * elements.
     */
    get _thumbGap() {
        if (this.disabled) {
            return DISABLED_THUMB_GAP;
        }
        if (this._isMinValue && !this.thumbLabel) {
            return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
        }
        return 0;
    }
    /** CSS styles for the track background element. */
    get _trackBackgroundStyles() {
        let axis = this.vertical ? 'Y' : 'X';
        let sign = this._invertMouseCoords ? '-' : '';
        return {
            'transform': `translate${axis}(${sign}${this._thumbGap}px) scale${axis}(${1 - this.percent})`
        };
    }
    /** CSS styles for the track fill element. */
    get _trackFillStyles() {
        let axis = this.vertical ? 'Y' : 'X';
        let sign = this._invertMouseCoords ? '' : '-';
        return {
            'transform': `translate${axis}(${sign}${this._thumbGap}px) scale${axis}(${this.percent})`
        };
    }
    /** CSS styles for the ticks container element. */
    get _ticksContainerStyles() {
        let axis = this.vertical ? 'Y' : 'X';
        // For a horizontal slider in RTL languages we push the ticks container off the left edge
        // instead of the right edge to avoid causing a horizontal scrollbar to appear.
        let sign = !this.vertical && this._direction == 'rtl' ? '' : '-';
        let offset = this._tickIntervalPercent / 2 * 100;
        return {
            'transform': `translate${axis}(${sign}${offset}%)`
        };
    }
    /** CSS styles for the ticks element. */
    get _ticksStyles() {
        let tickSize = this._tickIntervalPercent * 100;
        let backgroundSize = this.vertical ? `2px ${tickSize}%` : `${tickSize}% 2px`;
        let axis = this.vertical ? 'Y' : 'X';
        // Depending on the direction we pushed the ticks container, push the ticks the opposite
        // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
        // ticks 180 degrees so we're really cutting off the end edge abd not the start.
        let sign = !this.vertical && this._direction == 'rtl' ? '-' : '';
        let rotate = !this.vertical && this._direction == 'rtl' ? ' rotate(180deg)' : '';
        let styles = {
            'backgroundSize': backgroundSize,
            // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
            'transform': `translateZ(0) translate${axis}(${sign}${tickSize / 2}%)${rotate}`
        };
        if (this._isMinValue && this._thumbGap) {
            let side = this.vertical ?
                (this._invertAxis ? 'Bottom' : 'Top') :
                (this._invertAxis ? 'Right' : 'Left');
            styles[`padding${side}`] = `${this._thumbGap}px`;
        }
        return styles;
    }
    get _thumbContainerStyles() {
        let axis = this.vertical ? 'Y' : 'X';
        // For a horizontal slider in RTL languages we push the thumb container off the left edge
        // instead of the right edge to avoid causing a horizontal scrollbar to appear.
        let invertOffset = (this._direction == 'rtl' && !this.vertical) ? !this._invertAxis : this._invertAxis;
        let offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
        return {
            'transform': `translate${axis}(-${offset}%)`
        };
    }
    /**
     * Whether mouse events should be converted to a slider position by calculating their distance
     * from the right or bottom edge of the slider as opposed to the top or left.
     */
    get _invertMouseCoords() {
        return (this._direction == 'rtl' && !this.vertical) ? !this._invertAxis : this._invertAxis;
    }
    /** The language direction for this slider element. */
    get _direction() {
        return (this._dir && this._dir.value == 'rtl') ? 'rtl' : 'ltr';
    }
    ngOnDestroy() {
        this._focusOriginMonitor.unmonitor(this._elementRef.nativeElement);
    }
    _onMouseenter() {
        if (this.disabled) {
            return;
        }
        // We save the dimensions of the slider here so we can use them to update the spacing of the
        // ticks and determine where on the slider click and slide events happen.
        this._sliderDimensions = this._renderer.getSliderDimensions();
        this._updateTickIntervalPercent();
    }
    _onClick(event) {
        if (this.disabled) {
            return;
        }
        this._isSliding = false;
        this._renderer.addFocus();
        this._updateValueFromPosition({ x: event.clientX, y: event.clientY });
        /* Emits a change and input event if the value changed. */
        this._emitInputEvent();
        this._emitValueIfChanged();
    }
    _onSlide(event) {
        if (this.disabled) {
            return;
        }
        // Prevent the slide from selecting anything else.
        event.preventDefault();
        this._updateValueFromPosition({ x: event.center.x, y: event.center.y });
        // Native range elements always emit `input` events when the value changed while sliding.
        this._emitInputEvent();
    }
    _onSlideStart(event) {
        if (this.disabled) {
            return;
        }
        // Simulate mouseenter in case this is a mobile device.
        this._onMouseenter();
        event.preventDefault();
        this._isSliding = true;
        this._renderer.addFocus();
        this._updateValueFromPosition({ x: event.center.x, y: event.center.y });
    }
    _onSlideEnd() {
        this._isSliding = false;
        this._emitValueIfChanged();
    }
    _onFocus() {
        // We save the dimensions of the slider here so we can use them to update the spacing of the
        // ticks and determine where on the slider click and slide events happen.
        this._sliderDimensions = this._renderer.getSliderDimensions();
        this._updateTickIntervalPercent();
    }
    _onBlur() {
        this.onTouched();
    }
    _onKeydown(event) {
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case PAGE_UP:
                this._increment(10);
                break;
            case PAGE_DOWN:
                this._increment(-10);
                break;
            case END:
                this.value = this.max;
                break;
            case HOME:
                this.value = this.min;
                break;
            case LEFT_ARROW:
                // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
                // inverted slider the thumb moves in that direction. However for a blind user, nothing
                // about the slider indicates that it is inverted. They will expect left to be decrement,
                // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
                // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
                // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
                // sighted users, therefore we do not swap the meaning.
                this._increment(this._direction == 'rtl' ? 1 : -1);
                break;
            case UP_ARROW:
                this._increment(1);
                break;
            case RIGHT_ARROW:
                // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
                this._increment(this._direction == 'rtl' ? -1 : 1);
                break;
            case DOWN_ARROW:
                this._increment(-1);
                break;
            default:
                // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
                // it.
                return;
        }
        this._isSliding = true;
        event.preventDefault();
    }
    _onKeyup() {
        this._isSliding = false;
    }
    /** Increments the slider by the given number of steps (negative number decrements). */
    _increment(numSteps) {
        this.value = this._clamp(this.value + this.step * numSteps, this.min, this.max);
        this._emitInputEvent();
        this._emitValueIfChanged();
    }
    /** Calculate the new value from the new physical location. The value will always be snapped. */
    _updateValueFromPosition(pos) {
        if (!this._sliderDimensions) {
            return;
        }
        let offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
        let size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
        let posComponent = this.vertical ? pos.y : pos.x;
        // The exact value is calculated from the event and used to find the closest snap value.
        let percent = this._clamp((posComponent - offset) / size);
        if (this._invertMouseCoords) {
            percent = 1 - percent;
        }
        let exactValue = this._calculateValue(percent);
        // This calculation finds the closest step by finding the closest whole number divisible by the
        // step relative to the min.
        let closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min;
        // The value needs to snap to the min and max.
        this.value = this._clamp(closestValue, this.min, this.max);
    }
    /** Emits a change event if the current value is different from the last emitted value. */
    _emitValueIfChanged() {
        if (this.value != this._lastChangeValue) {
            let event = this._createChangeEvent();
            this._lastChangeValue = this.value;
            this._controlValueAccessorChangeFn(this.value);
            this.change.emit(event);
        }
    }
    /** Emits an input event when the current value is different from the last emitted value. */
    _emitInputEvent() {
        if (this.value != this._lastInputValue) {
            let event = this._createChangeEvent();
            this._lastInputValue = this.value;
            this.input.emit(event);
        }
    }
    /** Updates the amount of space between ticks as a percentage of the width of the slider. */
    _updateTickIntervalPercent() {
        if (!this.tickInterval) {
            return;
        }
        if (this.tickInterval == 'auto') {
            let trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            let pixelsPerStep = trackSize * this.step / (this.max - this.min);
            let stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
            let pixelsPerTick = stepsPerTick * this.step;
            this._tickIntervalPercent = pixelsPerTick / trackSize;
        }
        else {
            this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
        }
    }
    /** Creates a slider change object from the specified value. */
    _createChangeEvent(value = this.value) {
        let event = new MdSliderChange();
        event.source = this;
        event.value = value;
        return event;
    }
    /** Calculates the percentage of the slider that a value is. */
    _calculatePercentage(value) {
        return (value - this.min) / (this.max - this.min);
    }
    /** Calculates the value a percentage of the slider corresponds to. */
    _calculateValue(percentage) {
        return this.min + percentage * (this.max - this.min);
    }
    /** Return a number between two numbers. */
    _clamp(value, min = 0, max = 1) {
        return Math.max(min, Math.min(value, max));
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * Registers a callback to eb triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the component is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sets whether the component should be disabled.
     * Implemented as part of ControlValueAccessor.
     * @param isDisabled
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
};
__decorate$45([
    Input(), 
    __metadata$45('design:type', Boolean)
], MdSlider.prototype, "disabled", null);
__decorate$45([
    Input(), 
    __metadata$45('design:type', Object)
], MdSlider.prototype, "invert", null);
__decorate$45([
    Input(), 
    __metadata$45('design:type', Object)
], MdSlider.prototype, "max", null);
__decorate$45([
    Input(), 
    __metadata$45('design:type', Object)
], MdSlider.prototype, "min", null);
__decorate$45([
    Input(), 
    __metadata$45('design:type', Object)
], MdSlider.prototype, "step", null);
__decorate$45([
    Input(), 
    __metadata$45('design:type', Boolean)
], MdSlider.prototype, "thumbLabel", null);
__decorate$45([
    Input('thumb-label'), 
    __metadata$45('design:type', Boolean)
], MdSlider.prototype, "_thumbLabelDeprecated", null);
__decorate$45([
    Input(), 
    __metadata$45('design:type', Object)
], MdSlider.prototype, "tickInterval", null);
__decorate$45([
    Input('tick-interval'), 
    __metadata$45('design:type', Object)
], MdSlider.prototype, "_tickIntervalDeprecated", null);
__decorate$45([
    Input(), 
    __metadata$45('design:type', Object)
], MdSlider.prototype, "value", null);
__decorate$45([
    Input(), 
    __metadata$45('design:type', Object)
], MdSlider.prototype, "vertical", null);
__decorate$45([
    Output(), 
    __metadata$45('design:type', Object)
], MdSlider.prototype, "change", void 0);
__decorate$45([
    Output(), 
    __metadata$45('design:type', Object)
], MdSlider.prototype, "input", void 0);
MdSlider = __decorate$45([
    Component({selector: 'md-slider, mat-slider',
        providers: [MD_SLIDER_VALUE_ACCESSOR],
        host: {
            '[class.mat-slider]': 'true',
            '(focus)': '_onFocus()',
            '(blur)': '_onBlur()',
            '(click)': '_onClick($event)',
            '(keydown)': '_onKeydown($event)',
            '(keyup)': '_onKeyup()',
            '(mouseenter)': '_onMouseenter()',
            '(slide)': '_onSlide($event)',
            '(slideend)': '_onSlideEnd()',
            '(slidestart)': '_onSlideStart($event)',
            'role': 'slider',
            'tabindex': '0',
            '[attr.aria-disabled]': 'disabled',
            '[attr.aria-valuemax]': 'max',
            '[attr.aria-valuemin]': 'min',
            '[attr.aria-valuenow]': 'value',
            '[class.mat-slider-disabled]': 'disabled',
            '[class.mat-slider-has-ticks]': 'tickInterval',
            '[class.mat-slider-horizontal]': '!vertical',
            '[class.mat-slider-axis-inverted]': '_invertAxis',
            '[class.mat-slider-sliding]': '_isSliding',
            '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
            '[class.mat-slider-vertical]': 'vertical',
            '[class.mat-slider-min-value]': '_isMinValue',
            '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue && _thumbGap && _invertAxis',
        },
        template: "<div class=\"mat-slider-wrapper\"><div class=\"mat-slider-track-wrapper\"><div class=\"mat-slider-track-background\" [ngStyle]=\"_trackBackgroundStyles\"></div><div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div></div><div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\"><div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div></div><div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\"><div class=\"mat-slider-focus-ring\"></div><div class=\"mat-slider-thumb\"></div><div class=\"mat-slider-thumb-label\"><span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span></div></div></div>",
        styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:0;vertical-align:middle}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{box-sizing:border-box;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),opacity .4s cubic-bezier(.25,.8,.25,1)}.cdk-keyboard-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(.7);transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),border-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform .4s cubic-bezier(.25,.8,.25,1),border-radius .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-label-text{z-index:1;font-size:12px;font-weight:700;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-sliding .mat-slider-thumb-container,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-track-fill{transition-duration:0s}.mat-slider-has-ticks .mat-slider-wrapper::after{content:'';position:absolute;border:0 solid rgba(0,0,0,.6);opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.cdk-focused .mat-slider-thumb-label-text{opacity:1}.cdk-mouse-focused .mat-slider-thumb,.cdk-program-focused .mat-slider-thumb,.cdk-touch-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.mat-slider-horizontal .mat-slider-ticks{background:repeating-linear-gradient(to right,rgba(0,0,0,.6),rgba(0,0,0,.6) 2px,transparent 0,transparent) repeat;background:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.6),rgba(0,0,0,.6) 2px,transparent 0,transparent) repeat;background-clip:content-box;height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{background:repeating-linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,.6) 2px,transparent 0,transparent) repeat;background-clip:content-box;width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%} /*# sourceMappingURL=slider.css.map */ "],
        encapsulation: ViewEncapsulation.None,
    }),
    __param$9(3, Optional()), 
    __metadata$45('design:paramtypes', [Renderer, ElementRef, FocusOriginMonitor, Dir])
], MdSlider);
/**
 * Renderer class in order to keep all dom manipulation in one place and outside of the main class.
 * @docs-private
 */
class SliderRenderer {
    constructor(elementRef) {
        this._sliderElement = elementRef.nativeElement;
    }
    /**
     * Get the bounding client rect of the slider track element.
     * The track is used rather than the native element to ignore the extra space that the thumb can
     * take up.
     */
    getSliderDimensions() {
        let wrapperElement = this._sliderElement.querySelector('.mat-slider-wrapper');
        return wrapperElement.getBoundingClientRect();
    }
    /**
     * Focuses the native element.
     * Currently only used to allow a blur event to fire but will be used with keyboard input later.
     */
    addFocus() {
        this._sliderElement.focus();
    }
}

var __decorate$44 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$44 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdSliderModule_1 = class MdSliderModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdSliderModule_1,
            providers: []
        };
    }
};
let MdSliderModule = MdSliderModule_1;
MdSliderModule = MdSliderModule_1 = __decorate$44([
    NgModule({
        imports: [CommonModule, FormsModule, CompatibilityModule, StyleModule, RtlModule],
        exports: [MdSlider, CompatibilityModule],
        declarations: [MdSlider],
        providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }]
    }), 
    __metadata$44('design:paramtypes', [])
], MdSliderModule);

var __decorate$47 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$47 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$10 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** Exception thrown when two MdSidenav are matching the same side. */
class MdDuplicatedSidenavError extends MdError {
    constructor(align) {
        super(`A sidenav was already declared for 'align="${align}"'`);
    }
}
/** Sidenav toggle promise result. */
class MdSidenavToggleResult {
    constructor(type, animationFinished) {
        this.type = type;
        this.animationFinished = animationFinished;
    }
}
/**
 * <md-sidenav> component.
 *
 * This component corresponds to the drawer of the sidenav.
 *
 * Please refer to README.md for examples on how to use it.
 */
let MdSidenav = class MdSidenav {
    /**
     * @param _elementRef The DOM element reference. Used for transition and width calculation.
     *     If not available we do not hook on transitions.
     */
    constructor(_elementRef, _renderer, _focusTrapFactory) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._focusTrapFactory = _focusTrapFactory;
        /** Alignment of the sidenav (direction neutral); whether 'start' or 'end'. */
        this._align = 'start';
        /** Mode of the sidenav; whether 'over' or 'side'. */
        this.mode = 'over';
        this._disableClose = false;
        /** Whether the sidenav is opened. */
        this._opened = false;
        /** Event emitted when the sidenav is being opened. Use this to synchronize animations. */
        this.onOpenStart = new EventEmitter();
        /** Event emitted when the sidenav is fully opened. */
        this.onOpen = new EventEmitter();
        /** Event emitted when the sidenav is being closed. Use this to synchronize animations. */
        this.onCloseStart = new EventEmitter();
        /** Event emitted when the sidenav is fully closed. */
        this.onClose = new EventEmitter();
        /** Event emitted when the sidenav alignment changes. */
        this.onAlignChanged = new EventEmitter();
        /** The current toggle animation promise. `null` if no animation is in progress. */
        this._toggleAnimationPromise = null;
        /**
         * The current toggle animation promise resolution function.
         * `null` if no animation is in progress.
         */
        this._resolveToggleAnimationPromise = null;
        this._elementFocusedBeforeSidenavWasOpened = null;
        this.onOpen.subscribe(() => {
            this._elementFocusedBeforeSidenavWasOpened = document.activeElement;
            if (this.isFocusTrapEnabled && this._focusTrap) {
                this._focusTrap.focusFirstTabbableElementWhenReady();
            }
        });
        this.onClose.subscribe(() => {
            if (this._elementFocusedBeforeSidenavWasOpened instanceof HTMLElement) {
                this._renderer.invokeElementMethod(this._elementFocusedBeforeSidenavWasOpened, 'focus');
            }
            else {
                this._renderer.invokeElementMethod(this._elementRef.nativeElement, 'blur');
            }
            this._elementFocusedBeforeSidenavWasOpened = null;
        });
    }
    /** Direction which the sidenav is aligned in. */
    get align() { return this._align; }
    set align(value) {
        // Make sure we have a valid value.
        value = (value == 'end') ? 'end' : 'start';
        if (value != this._align) {
            this._align = value;
            this.onAlignChanged.emit();
        }
    }
    /** Whether the sidenav can be closed with the escape key or not. */
    get disableClose() { return this._disableClose; }
    set disableClose(value) { this._disableClose = coerceBooleanProperty(value); }
    get isFocusTrapEnabled() {
        // The focus trap is only enabled when the sidenav is open in any mode other than side.
        return this.opened && this.mode !== 'side';
    }
    ngAfterContentInit() {
        this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        this._focusTrap.enabled = this.isFocusTrapEnabled;
        // This can happen when the sidenav is set to opened in
        // the template and the transition hasn't ended.
        if (this._toggleAnimationPromise) {
            this._resolveToggleAnimationPromise(true);
            this._toggleAnimationPromise = this._resolveToggleAnimationPromise = null;
        }
    }
    ngOnDestroy() {
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    }
    /**
     * Whether the sidenav is opened. We overload this because we trigger an event when it
     * starts or end.
     */
    get opened() { return this._opened; }
    set opened(v) {
        this.toggle(coerceBooleanProperty(v));
    }
    /** Open this sidenav, and return a Promise that will resolve when it's fully opened (or get
     * rejected if it didn't). */
    open() {
        return this.toggle(true);
    }
    /**
     * Close this sidenav, and return a Promise that will resolve when it's fully closed (or get
     * rejected if it didn't).
     */
    close() {
        return this.toggle(false);
    }
    /**
     * Toggle this sidenav. This is equivalent to calling open() when it's already opened, or
     * close() when it's closed.
     * @param isOpen Whether the sidenav should be open.
     * @returns Resolves with the result of whether the sidenav was opened or closed.
     */
    toggle(isOpen = !this.opened) {
        // Shortcut it if we're already opened.
        if (isOpen === this.opened) {
            return this._toggleAnimationPromise ||
                Promise.resolve(new MdSidenavToggleResult(isOpen ? 'open' : 'close', true));
        }
        this._opened = isOpen;
        if (this._focusTrap) {
            this._focusTrap.enabled = this.isFocusTrapEnabled;
        }
        if (isOpen) {
            this.onOpenStart.emit();
        }
        else {
            this.onCloseStart.emit();
        }
        if (this._toggleAnimationPromise) {
            this._resolveToggleAnimationPromise(false);
        }
        this._toggleAnimationPromise = new Promise(resolve => {
            this._resolveToggleAnimationPromise = animationFinished => resolve(new MdSidenavToggleResult(isOpen ? 'open' : 'close', animationFinished));
        });
        return this._toggleAnimationPromise;
    }
    /**
     * Handles the keyboard events.
     * @docs-private
     */
    handleKeydown(event) {
        if (event.keyCode === ESCAPE && !this.disableClose) {
            this.close();
            event.stopPropagation();
        }
    }
    /**
     * When transition has finished, set the internal state for classes and emit the proper event.
     * The event passed is actually of type TransitionEvent, but that type is not available in
     * Android so we use any.
     */
    _onTransitionEnd(transitionEvent) {
        if (transitionEvent.target == this._elementRef.nativeElement
            && transitionEvent.propertyName.endsWith('transform')) {
            if (this._opened) {
                this.onOpen.emit();
            }
            else {
                this.onClose.emit();
            }
            if (this._toggleAnimationPromise) {
                this._resolveToggleAnimationPromise(true);
                this._toggleAnimationPromise = this._resolveToggleAnimationPromise = null;
            }
        }
    }
    get _isClosing() {
        return !this._opened && !!this._toggleAnimationPromise;
    }
    get _isOpening() {
        return this._opened && !!this._toggleAnimationPromise;
    }
    get _isClosed() {
        return !this._opened && !this._toggleAnimationPromise;
    }
    get _isOpened() {
        return this._opened && !this._toggleAnimationPromise;
    }
    get _isEnd() {
        return this.align == 'end';
    }
    get _modeSide() {
        return this.mode == 'side';
    }
    get _modeOver() {
        return this.mode == 'over';
    }
    get _modePush() {
        return this.mode == 'push';
    }
    get _width() {
        if (this._elementRef.nativeElement) {
            return this._elementRef.nativeElement.offsetWidth;
        }
        return 0;
    }
};
__decorate$47([
    Input(), 
    __metadata$47('design:type', Object)
], MdSidenav.prototype, "align", null);
__decorate$47([
    Input(), 
    __metadata$47('design:type', Object)
], MdSidenav.prototype, "mode", void 0);
__decorate$47([
    Input(), 
    __metadata$47('design:type', Boolean)
], MdSidenav.prototype, "disableClose", null);
__decorate$47([
    Output('open-start'), 
    __metadata$47('design:type', Object)
], MdSidenav.prototype, "onOpenStart", void 0);
__decorate$47([
    Output('open'), 
    __metadata$47('design:type', Object)
], MdSidenav.prototype, "onOpen", void 0);
__decorate$47([
    Output('close-start'), 
    __metadata$47('design:type', Object)
], MdSidenav.prototype, "onCloseStart", void 0);
__decorate$47([
    Output('close'), 
    __metadata$47('design:type', Object)
], MdSidenav.prototype, "onClose", void 0);
__decorate$47([
    Output('align-changed'), 
    __metadata$47('design:type', Object)
], MdSidenav.prototype, "onAlignChanged", void 0);
__decorate$47([
    Input(), 
    __metadata$47('design:type', Boolean)
], MdSidenav.prototype, "opened", null);
MdSidenav = __decorate$47([
    Component({selector: 'md-sidenav, mat-sidenav',
        // TODO(mmalerba): move template to separate file.
        template: "<ng-content></ng-content>",
        host: {
            '[class.mat-sidenav]': 'true',
            '(transitionend)': '_onTransitionEnd($event)',
            '(keydown)': 'handleKeydown($event)',
            // must prevent the browser from aligning text based on value
            '[attr.align]': 'null',
            '[class.mat-sidenav-closed]': '_isClosed',
            '[class.mat-sidenav-closing]': '_isClosing',
            '[class.mat-sidenav-end]': '_isEnd',
            '[class.mat-sidenav-opened]': '_isOpened',
            '[class.mat-sidenav-opening]': '_isOpening',
            '[class.mat-sidenav-over]': '_modeOver',
            '[class.mat-sidenav-push]': '_modePush',
            '[class.mat-sidenav-side]': '_modeSide',
            'tabIndex': '-1'
        },
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
    }), 
    __metadata$47('design:paramtypes', [ElementRef, Renderer, FocusTrapFactory])
], MdSidenav);
/**
 * <md-sidenav-container> component.
 *
 * This is the parent component to one or two <md-sidenav>s that validates the state internally
 * and coordinates the backdrop and content styling.
 */
let MdSidenavContainer = class MdSidenavContainer {
    constructor(_dir, _element, _renderer, _ngZone) {
        this._dir = _dir;
        this._element = _element;
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        /** Event emitted when the sidenav backdrop is clicked. */
        this.backdropClick = new EventEmitter();
        /** Whether to enable open/close trantions. */
        this._enableTransitions = false;
        // If a `Dir` directive exists up the tree, listen direction changes and update the left/right
        // properties to point to the proper start/end.
        if (_dir != null) {
            _dir.dirChange.subscribe(() => this._validateDrawers());
        }
    }
    /** The sidenav child with the `start` alignment. */
    get start() { return this._start; }
    /** The sidenav child with the `end` alignment. */
    get end() { return this._end; }
    ngAfterContentInit() {
        // On changes, assert on consistency.
        this._sidenavs.changes.subscribe(() => this._validateDrawers());
        this._sidenavs.forEach((sidenav) => {
            this._watchSidenavToggle(sidenav);
            this._watchSidenavAlign(sidenav);
        });
        this._validateDrawers();
        // Give the view a chance to render the initial state, then enable transitions.
        this._ngZone.onMicrotaskEmpty.first().subscribe(() => this._enableTransitions = true);
    }
    /**
     * Subscribes to sidenav events in order to set a class on the main container element when the
     * sidenav is open and the backdrop is visible. This ensures any overflow on the container element
     * is properly hidden.
     */
    _watchSidenavToggle(sidenav) {
        if (!sidenav || sidenav.mode === 'side') {
            return;
        }
        sidenav.onOpen.subscribe(() => this._setContainerClass(sidenav, true));
        sidenav.onClose.subscribe(() => this._setContainerClass(sidenav, false));
    }
    /**
     * Subscribes to sidenav onAlignChanged event in order to re-validate drawers when the align
     * changes.
     */
    _watchSidenavAlign(sidenav) {
        if (!sidenav) {
            return;
        }
        // NOTE: We need to wait for the microtask queue to be empty before validating,
        // since both drawers may be swapping sides at the same time.
        sidenav.onAlignChanged.subscribe(() => this._ngZone.onMicrotaskEmpty.first().subscribe(() => this._validateDrawers()));
    }
    /** Toggles the 'mat-sidenav-opened' class on the main 'md-sidenav-container' element. */
    _setContainerClass(sidenav, bool) {
        this._renderer.setElementClass(this._element.nativeElement, 'mat-sidenav-opened', bool);
    }
    /** Validate the state of the sidenav children components. */
    _validateDrawers() {
        this._start = this._end = null;
        // Ensure that we have at most one start and one end sidenav.
        // NOTE: We must call toArray on _sidenavs even though it's iterable
        // (see https://github.com/Microsoft/TypeScript/issues/3164).
        for (let sidenav of this._sidenavs.toArray()) {
            if (sidenav.align == 'end') {
                if (this._end != null) {
                    throw new MdDuplicatedSidenavError('end');
                }
                this._end = sidenav;
            }
            else {
                if (this._start != null) {
                    throw new MdDuplicatedSidenavError('start');
                }
                this._start = sidenav;
            }
        }
        this._right = this._left = null;
        // Detect if we're LTR or RTL.
        if (this._dir == null || this._dir.value == 'ltr') {
            this._left = this._start;
            this._right = this._end;
        }
        else {
            this._left = this._end;
            this._right = this._start;
        }
    }
    _onBackdropClicked() {
        this.backdropClick.emit();
        this._closeModalSidenav();
    }
    _closeModalSidenav() {
        // Close all open sidenav's where closing is not disabled and the mode is not `side`.
        [this._start, this._end]
            .filter(sidenav => sidenav && !sidenav.disableClose && sidenav.mode !== 'side')
            .forEach(sidenav => sidenav.close());
    }
    _isShowingBackdrop() {
        return (this._isSidenavOpen(this._start) && this._start.mode != 'side')
            || (this._isSidenavOpen(this._end) && this._end.mode != 'side');
    }
    _isSidenavOpen(side) {
        return side != null && side.opened;
    }
    /**
     * Return the width of the sidenav, if it's in the proper mode and opened.
     * This may relayout the view, so do not call this often.
     * @param sidenav
     * @param mode
     */
    _getSidenavEffectiveWidth(sidenav, mode) {
        return (this._isSidenavOpen(sidenav) && sidenav.mode == mode) ? sidenav._width : 0;
    }
    _getMarginLeft() {
        return this._getSidenavEffectiveWidth(this._left, 'side');
    }
    _getMarginRight() {
        return this._getSidenavEffectiveWidth(this._right, 'side');
    }
    _getPositionLeft() {
        return this._getSidenavEffectiveWidth(this._left, 'push');
    }
    _getPositionRight() {
        return this._getSidenavEffectiveWidth(this._right, 'push');
    }
    /**
     * Returns the horizontal offset for the content area.  There should never be a value for both
     * left and right, so by subtracting the right value from the left value, we should always get
     * the appropriate offset.
     */
    _getPositionOffset() {
        return this._getPositionLeft() - this._getPositionRight();
    }
    /**
     * This is using [ngStyle] rather than separate [style...] properties because [style.transform]
     * doesn't seem to work right now.
     */
    _getStyles() {
        return {
            marginLeft: `${this._getMarginLeft()}px`,
            marginRight: `${this._getMarginRight()}px`,
            transform: `translate3d(${this._getPositionOffset()}px, 0, 0)`
        };
    }
};
__decorate$47([
    ContentChildren(MdSidenav), 
    __metadata$47('design:type', QueryList)
], MdSidenavContainer.prototype, "_sidenavs", void 0);
__decorate$47([
    Output(), 
    __metadata$47('design:type', Object)
], MdSidenavContainer.prototype, "backdropClick", void 0);
MdSidenavContainer = __decorate$47([
    Component({selector: 'md-sidenav-container, mat-sidenav-container',
        // Do not use ChangeDetectionStrategy.OnPush. It does not work for this component because
        // technically it is a sibling of MdSidenav (on the content tree) and isn't updated when MdSidenav
        // changes its state.
        template: "<div class=\"mat-sidenav-backdrop\" (click)=\"_onBackdropClicked()\" [class.mat-sidenav-shown]=\"_isShowingBackdrop()\"></div><ng-content select=\"md-sidenav, mat-sidenav\"></ng-content><div class=\"mat-sidenav-content\" [ngStyle]=\"_getStyles()\" cdk-scrollable><ng-content></ng-content></div>",
        styles: [".mat-sidenav-container{position:relative;transform:translate3d(0,0,0);box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-sidenav-container[fullscreen]{position:absolute;top:0;left:0;right:0;bottom:0}.mat-sidenav-container[fullscreen].mat-sidenav-opened{overflow:hidden}.mat-sidenav-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;display:block;z-index:2;visibility:hidden}.mat-sidenav-backdrop.mat-sidenav-shown{visibility:visible}@media screen and (-ms-high-contrast:active){.mat-sidenav-backdrop{opacity:.5}}.mat-sidenav-content{position:relative;transform:translate3d(0,0,0);display:block;height:100%;overflow:auto}.mat-sidenav{position:relative;transform:translate3d(0,0,0);display:block;position:absolute;top:0;bottom:0;z-index:3;min-width:5vw;outline:0;box-sizing:border-box;height:100%;overflow-y:auto;transform:translate3d(-100%,0,0)}.mat-sidenav.mat-sidenav-closed{visibility:hidden}.mat-sidenav.mat-sidenav-opened,.mat-sidenav.mat-sidenav-opening{transform:translate3d(0,0,0)}.mat-sidenav.mat-sidenav-side{z-index:1}.mat-sidenav.mat-sidenav-end{right:0;transform:translate3d(100%,0,0)}.mat-sidenav.mat-sidenav-end.mat-sidenav-closed{visibility:hidden}.mat-sidenav.mat-sidenav-end.mat-sidenav-opened,.mat-sidenav.mat-sidenav-end.mat-sidenav-opening{transform:translate3d(0,0,0)}[dir=rtl] .mat-sidenav{transform:translate3d(100%,0,0)}[dir=rtl] .mat-sidenav.mat-sidenav-closed{visibility:hidden}[dir=rtl] .mat-sidenav.mat-sidenav-opened,[dir=rtl] .mat-sidenav.mat-sidenav-opening{transform:translate3d(0,0,0)}[dir=rtl] .mat-sidenav.mat-sidenav-end{left:0;right:auto;transform:translate3d(-100%,0,0)}[dir=rtl] .mat-sidenav.mat-sidenav-end.mat-sidenav-closed{visibility:hidden}[dir=rtl] .mat-sidenav.mat-sidenav-end.mat-sidenav-opened,[dir=rtl] .mat-sidenav.mat-sidenav-end.mat-sidenav-opening{transform:translate3d(0,0,0)}.mat-sidenav.mat-sidenav-opened:not(.mat-sidenav-side),.mat-sidenav.mat-sidenav-opening:not(.mat-sidenav-side){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)} /*# sourceMappingURL=sidenav.css.map */ ",
".mat-sidenav-transition .mat-sidenav{transition:transform .4s cubic-bezier(.25,.8,.25,1)}.mat-sidenav-transition .mat-sidenav-content{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:transform,margin-left,margin-right}.mat-sidenav-transition .mat-sidenav-backdrop.mat-sidenav-shown{transition:background-color .4s cubic-bezier(.25,.8,.25,1)} /*# sourceMappingURL=sidenav-transitions.css.map */ "],
        host: {
            '[class.mat-sidenav-container]': 'true',
            '[class.mat-sidenav-transition]': '_enableTransitions',
        },
        encapsulation: ViewEncapsulation.None,
    }),
    __param$10(0, Optional()), 
    __metadata$47('design:paramtypes', [Dir, ElementRef, Renderer, NgZone])
], MdSidenavContainer);

var __decorate$46 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$46 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdSidenavModule_1 = class MdSidenavModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdSidenavModule_1,
            providers: []
        };
    }
};
let MdSidenavModule = MdSidenavModule_1;
MdSidenavModule = MdSidenavModule_1 = __decorate$46([
    NgModule({
        imports: [CommonModule, CompatibilityModule, A11yModule, OverlayModule],
        exports: [MdSidenavContainer, MdSidenav, CompatibilityModule],
        declarations: [MdSidenavContainer, MdSidenav],
    }), 
    __metadata$46('design:paramtypes', [])
], MdSidenavModule);

var __decorate$49 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$49 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$11 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let MdListDivider = class MdListDivider {
};
MdListDivider = __decorate$49([
    Directive({
        selector: 'md-divider, mat-divider'
    }), 
    __metadata$49('design:paramtypes', [])
], MdListDivider);
/**
 * Token used to inject the list type into child MdListItem components so they can know whether
 * they're in a nav list (and thus should use an MdRipple).
 */
const LIST_TYPE_TOKEN = new OpaqueToken('list_type');
const NORMAL_LIST_TYPE = 'normal_list_type';
const NAV_LIST_TYPE = 'nav_list_type';
let MdList = class MdList {
};
MdList = __decorate$49([
    Component({selector: 'md-list, mat-list, md-nav-list, mat-nav-list',
        host: {
            'role': 'list' },
        template: '<ng-content></ng-content>',
        styles: [".mat-list,.mat-nav-list{padding-top:8px;display:block}.mat-list .mat-subheader,.mat-nav-list .mat-subheader{display:block;box-sizing:border-box;height:48px;padding:16px;margin:0;font-size:14px;font-weight:500}.mat-list .mat-subheader:first-child,.mat-nav-list .mat-subheader:first-child{margin-top:-8px}.mat-list .mat-list-item,.mat-nav-list .mat-list-item{display:block}.mat-list .mat-list-item .mat-list-item-content,.mat-nav-list .mat-list-item .mat-list-item-content{display:flex;flex-direction:row;align-items:center;font-family:Roboto,\"Helvetica Neue\",sans-serif;box-sizing:border-box;font-size:16px;height:48px;padding:0 16px;position:relative}.mat-list .mat-list-item.mat-list-item-avatar .mat-list-item-content,.mat-nav-list .mat-list-item.mat-list-item-avatar .mat-list-item-content{height:56px}.mat-list .mat-list-item.mat-2-line .mat-list-item-content,.mat-nav-list .mat-list-item.mat-2-line .mat-list-item-content{height:72px}.mat-list .mat-list-item.mat-3-line .mat-list-item-content,.mat-nav-list .mat-list-item.mat-3-line .mat-list-item-content{height:88px}.mat-list .mat-list-item.mat-multi-line .mat-list-item-content,.mat-nav-list .mat-list-item.mat-multi-line .mat-list-item-content{height:100%;padding:8px 16px}.mat-list .mat-list-item .mat-list-text,.mat-nav-list .mat-list-item .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0 16px}.mat-list .mat-list-item .mat-list-text>*,.mat-nav-list .mat-list-item .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list .mat-list-item .mat-list-text:empty,.mat-nav-list .mat-list-item .mat-list-text:empty{display:none}.mat-list .mat-list-item .mat-list-text:first-child,.mat-nav-list .mat-list-item .mat-list-text:first-child{padding:0}.mat-list .mat-list-item .mat-list-avatar,.mat-nav-list .mat-list-item .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%}.mat-list .mat-list-item .mat-list-icon,.mat-nav-list .mat-list-item .mat-list-icon{width:24px;height:24px;border-radius:50%;padding:4px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list[dense],.mat-nav-list[dense]{padding-top:4px;display:block}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader{display:block;box-sizing:border-box;height:40px;padding:16px;margin:0;font-size:13px;font-weight:500}.mat-list[dense] .mat-subheader:first-child,.mat-nav-list[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item{display:block}.mat-list[dense] .mat-list-item .mat-list-item-content,.mat-nav-list[dense] .mat-list-item .mat-list-item-content{display:flex;flex-direction:row;align-items:center;font-family:Roboto,\"Helvetica Neue\",sans-serif;box-sizing:border-box;font-size:13px;height:40px;padding:0 16px;position:relative}.mat-list[dense] .mat-list-item.mat-list-item-avatar .mat-list-item-content,.mat-nav-list[dense] .mat-list-item.mat-list-item-avatar .mat-list-item-content{height:48px}.mat-list[dense] .mat-list-item.mat-2-line .mat-list-item-content,.mat-nav-list[dense] .mat-list-item.mat-2-line .mat-list-item-content{height:60px}.mat-list[dense] .mat-list-item.mat-3-line .mat-list-item-content,.mat-nav-list[dense] .mat-list-item.mat-3-line .mat-list-item-content{height:76px}.mat-list[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-nav-list[dense] .mat-list-item.mat-multi-line .mat-list-item-content{height:100%;padding:8px 16px}.mat-list[dense] .mat-list-item .mat-list-text,.mat-nav-list[dense] .mat-list-item .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0 16px}.mat-list[dense] .mat-list-item .mat-list-text>*,.mat-nav-list[dense] .mat-list-item .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list[dense] .mat-list-item .mat-list-text:empty,.mat-nav-list[dense] .mat-list-item .mat-list-text:empty{display:none}.mat-list[dense] .mat-list-item .mat-list-text:first-child,.mat-nav-list[dense] .mat-list-item .mat-list-text:first-child{padding:0}.mat-list[dense] .mat-list-item .mat-list-avatar,.mat-nav-list[dense] .mat-list-item .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%}.mat-list[dense] .mat-list-item .mat-list-icon,.mat-nav-list[dense] .mat-list-item .mat-list-icon{width:24px;height:24px;border-radius:50%;padding:4px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:13px}.mat-divider{display:block;border-top-style:solid;border-top-width:1px;margin:0}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item-content{cursor:pointer}.mat-nav-list .mat-list-item-content.mat-list-item-focus,.mat-nav-list .mat-list-item-content:hover{outline:0} /*# sourceMappingURL=list.css.map */ "],
        providers: [{ provide: LIST_TYPE_TOKEN, useValue: NORMAL_LIST_TYPE }],
        encapsulation: ViewEncapsulation.None
    }), 
    __metadata$49('design:paramtypes', [])
], MdList);
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdListCssMatStyler = class MdListCssMatStyler {
};
MdListCssMatStyler = __decorate$49([
    Directive({
        selector: 'md-list, mat-list',
        host: {
            '[class.mat-list]': 'true'
        }
    }), 
    __metadata$49('design:paramtypes', [])
], MdListCssMatStyler);
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdNavListCssMatStyler = class MdNavListCssMatStyler {
};
MdNavListCssMatStyler = __decorate$49([
    Directive({
        selector: 'md-nav-list, mat-nav-list',
        host: {
            '[class.mat-nav-list]': 'true'
        }
    }), 
    __metadata$49('design:paramtypes', [])
], MdNavListCssMatStyler);
/**
 * Directive to set the ListType token to NAV_LIST_TYPE.
 */
let MdNavListTokenSetter = class MdNavListTokenSetter {
};
MdNavListTokenSetter = __decorate$49([
    Directive({
        selector: 'md-nav-list, mat-nav-list',
        providers: [{ provide: LIST_TYPE_TOKEN, useValue: NAV_LIST_TYPE }],
    }), 
    __metadata$49('design:paramtypes', [])
], MdNavListTokenSetter);
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdDividerCssMatStyler = class MdDividerCssMatStyler {
};
MdDividerCssMatStyler = __decorate$49([
    Directive({
        selector: 'md-divider, mat-divider',
        host: {
            '[class.mat-divider]': 'true'
        }
    }), 
    __metadata$49('design:paramtypes', [])
], MdDividerCssMatStyler);
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdListAvatarCssMatStyler = class MdListAvatarCssMatStyler {
};
MdListAvatarCssMatStyler = __decorate$49([
    Directive({
        selector: '[md-list-avatar], [mat-list-avatar]',
        host: {
            '[class.mat-list-avatar]': 'true'
        }
    }), 
    __metadata$49('design:paramtypes', [])
], MdListAvatarCssMatStyler);
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdListIconCssMatStyler = class MdListIconCssMatStyler {
};
MdListIconCssMatStyler = __decorate$49([
    Directive({
        selector: '[md-list-icon], [mat-list-icon]',
        host: {
            '[class.mat-list-icon]': 'true'
        }
    }), 
    __metadata$49('design:paramtypes', [])
], MdListIconCssMatStyler);
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdListSubheaderCssMatStyler = class MdListSubheaderCssMatStyler {
};
MdListSubheaderCssMatStyler = __decorate$49([
    Directive({
        selector: '[md-subheader], [mat-subheader]',
        host: {
            '[class.mat-subheader]': 'true'
        }
    }), 
    __metadata$49('design:paramtypes', [])
], MdListSubheaderCssMatStyler);
let MdListItem = class MdListItem {
    constructor(_renderer, _element, _listType) {
        this._renderer = _renderer;
        this._element = _element;
        this._listType = _listType;
        /**
         * Whether the ripple effect on click should be disabled. This applies only to list items that
         * are children of an md-nav-list; md-list items never have ripples.
         */
        this.disableRipple = false;
        this._hasFocus = false;
    }
    set _hasAvatar(avatar) {
        this._renderer.setElementClass(this._element.nativeElement, 'mat-list-item-avatar', avatar != null);
    }
    ngAfterContentInit() {
        this._lineSetter = new MdLineSetter(this._lines, this._renderer, this._element);
    }
    /** Whether this list item should show a ripple effect when clicked.  */
    isRippleEnabled() {
        return !this.disableRipple && (this._listType === NAV_LIST_TYPE);
    }
    _handleFocus() {
        this._hasFocus = true;
    }
    _handleBlur() {
        this._hasFocus = false;
    }
};
__decorate$49([
    Input(), 
    __metadata$49('design:type', Boolean)
], MdListItem.prototype, "disableRipple", void 0);
__decorate$49([
    ContentChildren(MdLine), 
    __metadata$49('design:type', QueryList)
], MdListItem.prototype, "_lines", void 0);
__decorate$49([
    ContentChild(MdListAvatarCssMatStyler), 
    __metadata$49('design:type', MdListAvatarCssMatStyler), 
    __metadata$49('design:paramtypes', [MdListAvatarCssMatStyler])
], MdListItem.prototype, "_hasAvatar", null);
MdListItem = __decorate$49([
    Component({selector: 'md-list-item, mat-list-item, a[md-list-item], a[mat-list-item]',
        host: {
            'role': 'listitem',
            '(focus)': '_handleFocus()',
            '(blur)': '_handleBlur()',
            '[class.mat-list-item]': 'true',
        },
        template: "<div class=\"mat-list-item-content\" [class.mat-list-item-focus]=\"_hasFocus\" md-ripple [mdRippleDisabled]=\"!isRippleEnabled()\"><ng-content select=\"[md-list-avatar],[md-list-icon], [mat-list-avatar], [mat-list-icon]\"></ng-content><div class=\"mat-list-text\"><ng-content select=\"[md-line], [mat-line]\"></ng-content></div><ng-content></ng-content></div>",
        encapsulation: ViewEncapsulation.None
    }),
    __param$11(2, Optional()),
    __param$11(2, Inject(LIST_TYPE_TOKEN)), 
    __metadata$49('design:paramtypes', [Renderer, ElementRef, String])
], MdListItem);

var __decorate$48 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$48 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdListModule_1 = class MdListModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdListModule_1,
            providers: []
        };
    }
};
let MdListModule = MdListModule_1;
MdListModule = MdListModule_1 = __decorate$48([
    NgModule({
        imports: [MdLineModule, MdRippleModule, CompatibilityModule],
        exports: [
            MdList,
            MdListItem,
            MdListDivider,
            MdListAvatarCssMatStyler,
            MdLineModule,
            CompatibilityModule,
            MdListIconCssMatStyler,
            MdListCssMatStyler,
            MdNavListCssMatStyler,
            MdDividerCssMatStyler,
            MdListSubheaderCssMatStyler,
            MdNavListTokenSetter,
        ],
        declarations: [
            MdList,
            MdListItem,
            MdListDivider,
            MdListAvatarCssMatStyler,
            MdListIconCssMatStyler,
            MdListCssMatStyler,
            MdNavListCssMatStyler,
            MdDividerCssMatStyler,
            MdListSubheaderCssMatStyler,
            MdNavListTokenSetter,
        ],
    }), 
    __metadata$48('design:paramtypes', [])
], MdListModule);

/**
 * Converts values into strings. Falsy values become empty strings.
 * @docs-private
 */
function coerceToString(value) {
    return `${value || ''}`;
}
/**
 * Converts a value that might be a string into a number.
 * @docs-private
 */
function coerceToNumber(value) {
    return typeof value === 'string' ? parseInt(value, 10) : value;
}

var __decorate$51 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$51 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdGridTile = class MdGridTile {
    constructor(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this._rowspan = 1;
        this._colspan = 1;
    }
    /** Amount of rows that the grid tile takes up. */
    get rowspan() { return this._rowspan; }
    set rowspan(value) { this._rowspan = coerceToNumber(value); }
    /** Amount of columns that the grid tile takes up. */
    get colspan() { return this._colspan; }
    set colspan(value) { this._colspan = coerceToNumber(value); }
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    _setStyle(property, value) {
        this._renderer.setElementStyle(this._element.nativeElement, property, value);
    }
};
__decorate$51([
    Input(), 
    __metadata$51('design:type', Object)
], MdGridTile.prototype, "rowspan", null);
__decorate$51([
    Input(), 
    __metadata$51('design:type', Object)
], MdGridTile.prototype, "colspan", null);
MdGridTile = __decorate$51([
    Component({selector: 'md-grid-tile, mat-grid-tile',
        host: {
            'role': 'listitem',
            '[class.mat-grid-tile]': 'true',
        },
        template: "<figure class=\"mat-figure\"><ng-content></ng-content></figure>",
        styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{display:flex;position:absolute;align-items:center;justify-content:center;height:100%;top:0;right:0;bottom:0;left:0;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;font-size:16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer .mat-line,.mat-grid-tile .mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile .mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile .mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none} /*# sourceMappingURL=grid-list.css.map */ "],
        encapsulation: ViewEncapsulation.None,
    }), 
    __metadata$51('design:paramtypes', [Renderer, ElementRef])
], MdGridTile);
let MdGridTileText = class MdGridTileText {
    constructor(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
    }
    ngAfterContentInit() {
        this._lineSetter = new MdLineSetter(this._lines, this._renderer, this._element);
    }
};
__decorate$51([
    ContentChildren(MdLine), 
    __metadata$51('design:type', QueryList)
], MdGridTileText.prototype, "_lines", void 0);
MdGridTileText = __decorate$51([
    Component({selector: 'md-grid-tile-header, mat-grid-tile-header, md-grid-tile-footer, mat-grid-tile-footer',
        template: "<ng-content select=\"[md-grid-avatar], [mat-grid-avatar]\"></ng-content><div class=\"mat-grid-list-text\"><ng-content select=\"[md-line], [mat-line]\"></ng-content></div><ng-content></ng-content>"
    }), 
    __metadata$51('design:paramtypes', [Renderer, ElementRef])
], MdGridTileText);
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdGridAvatarCssMatStyler = class MdGridAvatarCssMatStyler {
};
MdGridAvatarCssMatStyler = __decorate$51([
    Directive({
        selector: '[md-grid-avatar], [mat-grid-avatar]',
        host: {
            '[class.mat-grid-avatar]': 'true'
        }
    }), 
    __metadata$51('design:paramtypes', [])
], MdGridAvatarCssMatStyler);
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdGridTileHeaderCssMatStyler = class MdGridTileHeaderCssMatStyler {
};
MdGridTileHeaderCssMatStyler = __decorate$51([
    Directive({
        selector: 'md-grid-tile-header, mat-grid-tile-header',
        host: {
            '[class.mat-grid-tile-header]': 'true'
        }
    }), 
    __metadata$51('design:paramtypes', [])
], MdGridTileHeaderCssMatStyler);
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdGridTileFooterCssMatStyler = class MdGridTileFooterCssMatStyler {
};
MdGridTileFooterCssMatStyler = __decorate$51([
    Directive({
        selector: 'md-grid-tile-footer, mat-grid-tile-footer',
        host: {
            '[class.mat-grid-tile-footer]': 'true'
        }
    }), 
    __metadata$51('design:paramtypes', [])
], MdGridTileFooterCssMatStyler);

/**
 * Exception thrown when cols property is missing from grid-list
 * @docs-private
 */
class MdGridListColsError extends MdError {
    constructor() {
        super(`md-grid-list: must pass in number of columns. Example: <md-grid-list cols="3">`);
    }
}
/**
 * Exception thrown when a tile's colspan is longer than the number of cols in list
 * @docs-private
 */
class MdGridTileTooWideError extends MdError {
    constructor(cols, listLength) {
        super(`md-grid-list: tile with colspan ${cols} is wider than grid with cols="${listLength}".`);
    }
}
/**
 * Exception thrown when an invalid ratio is passed in as a rowHeight
 * @docs-private
 */
class MdGridListBadRatioError extends MdError {
    constructor(value) {
        super(`md-grid-list: invalid ratio given for row-height: "${value}"`);
    }
}

/**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 *
 * @docs-private
 */
class TileCoordinator {
    constructor(numColumns, tiles) {
        /** Index at which the search for the next gap will start. */
        this.columnIndex = 0;
        /** The current row index. */
        this.rowIndex = 0;
        this.tracker = new Array(numColumns);
        this.tracker.fill(0, 0, this.tracker.length);
        this.positions = tiles.map(tile => this._trackTile(tile));
    }
    /** Gets the total number of rows occupied by tiles */
    get rowCount() { return this.rowIndex + 1; }
    /** Gets the total span of rows occupied by tiles.
     * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2. */
    get rowspan() {
        let lastRowMax = Math.max(...this.tracker);
        // if any of the tiles has a rowspan that pushes it beyond the total row count,
        // add the difference to the rowcount
        return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
    }
    /** Calculates the row and col position of a tile. */
    _trackTile(tile) {
        // Find a gap large enough for this tile.
        let gapStartIndex = this._findMatchingGap(tile.colspan);
        // Place tile in the resulting gap.
        this._markTilePosition(gapStartIndex, tile);
        // The next time we look for a gap, the search will start at columnIndex, which should be
        // immediately after the tile that has just been placed.
        this.columnIndex = gapStartIndex + tile.colspan;
        return new TilePosition(this.rowIndex, gapStartIndex);
    }
    /** Finds the next available space large enough to fit the tile. */
    _findMatchingGap(tileCols) {
        if (tileCols > this.tracker.length) {
            throw new MdGridTileTooWideError(tileCols, this.tracker.length);
        }
        // Start index is inclusive, end index is exclusive.
        let gapStartIndex = -1;
        let gapEndIndex = -1;
        // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
        do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
                this._nextRow();
                continue;
            }
            gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
            // If there are no more empty spaces in this row at all, move on to the next row.
            if (gapStartIndex == -1) {
                this._nextRow();
                continue;
            }
            gapEndIndex = this._findGapEndIndex(gapStartIndex);
            // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.
            this.columnIndex = gapStartIndex + 1;
        } while (gapEndIndex - gapStartIndex < tileCols);
        return gapStartIndex;
    }
    /** Move "down" to the next row. */
    _nextRow() {
        this.columnIndex = 0;
        this.rowIndex++;
        // Decrement all spaces by one to reflect moving down one row.
        for (let i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
        }
    }
    /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     */
    _findGapEndIndex(gapStartIndex) {
        for (let i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
                return i;
            }
        }
        // The gap ends with the end of the row.
        return this.tracker.length;
    }
    /** Update the tile tracker to account for the given tile in the given space. */
    _markTilePosition(start, tile) {
        for (let i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
        }
    }
}
/**
 * Simple data structure for tile position (row, col).
 * @docs-private
 */
class TilePosition {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}

/**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * @docs-private
 */
class TileStyler {
    constructor() {
        this._rows = 0;
        this._rowspan = 0;
    }
    /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param gutterSize Size of the grid's gutter.
     * @param tracker Instance of the TileCoordinator.
     * @param cols Amount of columns in the grid.
     * @param direction Layout direction of the grid.
     */
    init(gutterSize, tracker, cols, direction) {
        this._gutterSize = normalizeUnits(gutterSize);
        this._rows = tracker.rowCount;
        this._rowspan = tracker.rowspan;
        this._cols = cols;
        this._direction = direction;
    }
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    getBaseTileSize(sizePercent, gutterFraction) {
        // Take the base size percent (as would be if evenly dividing the size between cells),
        // and then subtracting the size of one gutter. However, since there are no gutters on the
        // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
        // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
        // edge evenly among the cells).
        return `(${sizePercent}% - ( ${this._gutterSize} * ${gutterFraction} ))`;
    }
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param offset Number of tiles that have already been rendered in the row/column.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @return Position of the tile as a CSS calc() expression.
     */
    getTilePosition(baseSize, offset) {
        // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
        // row/column (offset).
        return calc(`(${baseSize} + ${this._gutterSize}) * ${offset}`);
    }
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param span The tile's rowspan or colspan.
     * @return Size of the tile as a CSS calc() expression.
     */
    getTileSize(baseSize, span) {
        return `(${baseSize} * ${span}) + (${span - 1} * ${this._gutterSize})`;
    }
    /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param tile Tile to which to apply the styling.
     * @param rowIndex Index of the tile's row.
     * @param colIndex Index of the tile's column.
     */
    setStyle(tile, rowIndex, colIndex) {
        // Percent of the available horizontal space that one column takes up.
        let percentWidthPerTile = 100 / this._cols;
        // Fraction of the vertical gutter size that each column takes up.
        // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
        let gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
        this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    }
    /** Sets the horizontal placement of the tile in the list. */
    setColStyles(tile, colIndex, percentWidth, gutterWidth) {
        // Base horizontal size of a column.
        let baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
        // The width and horizontal position of each tile is always calculated the same way, but the
        // height and vertical position depends on the rowMode.
        let side = this._direction === 'ltr' ? 'left' : 'right';
        tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
        tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
    }
    /**
     * Calculates the total size taken up by gutters across one axis of a list.
     */
    getGutterSpan() {
        return `${this._gutterSize} * (${this._rowspan} - 1)`;
    }
    /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param tileHeight Height of the tile.
     */
    getTileSpan(tileHeight) {
        return `${this._rowspan} * ${this.getTileSize(tileHeight, 1)}`;
    }
    /**
     * Sets the vertical placement of the tile in the list.
     * This method will be implemented by each type of TileStyler.
     * @docs-private
     */
    setRowStyles(tile, rowIndex, percentWidth, gutterWidth) { }
    /**
     * Calculates the computed height and returns the correct style property to set.
     * This method will be implemented by each type of TileStyler.
     * @docs-private
     */
    getComputedHeight() { return null; }
}
/**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example <md-grid-list cols="3" rowHeight="100px">
 * @docs-private
 */
class FixedTileStyler extends TileStyler {
    constructor(fixedRowHeight) {
        super();
        this.fixedRowHeight = fixedRowHeight;
    }
    init(gutterSize, tracker, cols, direction) {
        super.init(gutterSize, tracker, cols, direction);
        this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
    }
    setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
        tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
    }
    getComputedHeight() {
        return [
            'height', calc(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)
        ];
    }
}
/**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example <md-grid-list cols="3" rowHeight="3:1">
 * @docs-private
 */
class RatioTileStyler extends TileStyler {
    constructor(value) {
        super();
        this._parseRatio(value);
    }
    setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
        let percentHeightPerTile = percentWidth / this.rowHeightRatio;
        this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
        // Use paddingTop and marginTop to maintain the given aspect ratio, as
        // a percentage-based value for these properties is applied versus the *width* of the
        // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
        tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));
        tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
    }
    getComputedHeight() {
        return [
            'paddingBottom', calc(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)
        ];
    }
    _parseRatio(value) {
        let ratioParts = value.split(':');
        if (ratioParts.length !== 2) {
            throw new MdGridListBadRatioError(value);
        }
        this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
    }
}
/**
 * This type of styler is instantiated when the user selects a "fit" row height mode.
 * In other words, the row height will reflect the total height of the container divided
 * by the number of rows.  Example <md-grid-list cols="3" rowHeight="fit">
 *
 * @docs-private
 */
class FitTileStyler extends TileStyler {
    setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
        // Percent of the available vertical space that one row takes up.
        let percentHeightPerTile = 100 / this._rowspan;
        // Fraction of the horizontal gutter size that each column takes up.
        let gutterHeightPerTile = (this._rows - 1) / this._rows;
        // Base vertical size of a column.
        let baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
        tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
    }
}
/** Wraps a CSS string in a calc function */
function calc(exp) { return `calc(${exp})`; }
/** Appends pixels to a CSS string if no units are given. */
function normalizeUnits(value) {
    return (value.match(/px|em|rem/)) ? value : value + 'px';
}

var __decorate$52 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$52 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$12 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// TODO(kara): Conditional (responsive) column count / row size.
// TODO(kara): Re-layout on window resize / media change (debounced).
// TODO(kara): gridTileHeader and gridTileFooter.
const MD_FIT_MODE = 'fit';
let MdGridList = class MdGridList {
    constructor(_renderer, _element, _dir) {
        this._renderer = _renderer;
        this._element = _element;
        this._dir = _dir;
        /** The amount of space between tiles. This will be something like '5px' or '2em'. */
        this._gutter = '1px';
    }
    /** Amount of columns in the grid list. */
    get cols() { return this._cols; }
    set cols(value) { this._cols = coerceToNumber(value); }
    /** Size of the grid list's gutter in pixels. */
    get gutterSize() { return this._gutter; }
    set gutterSize(value) { this._gutter = coerceToString(value); }
    /** Set internal representation of row height from the user-provided value. */
    set rowHeight(value) {
        this._rowHeight = coerceToString(value);
        this._setTileStyler();
    }
    ngOnInit() {
        this._checkCols();
        this._checkRowHeight();
    }
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     */
    ngAfterContentChecked() {
        this._layoutTiles();
    }
    /** Throw a friendly error if cols property is missing */
    _checkCols() {
        if (!this.cols) {
            throw new MdGridListColsError();
        }
    }
    /** Default to equal width:height if rowHeight property is missing */
    _checkRowHeight() {
        if (!this._rowHeight) {
            this._tileStyler = new RatioTileStyler('1:1');
        }
    }
    /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
    _setTileStyler() {
        if (this._rowHeight === MD_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
        }
        else if (this._rowHeight && this._rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(this._rowHeight);
        }
        else {
            this._tileStyler = new FixedTileStyler(this._rowHeight);
        }
    }
    /** Computes and applies the size and position for all children grid tiles. */
    _layoutTiles() {
        let tracker = new TileCoordinator(this.cols, this._tiles);
        let direction = this._dir ? this._dir.value : 'ltr';
        this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
        this._tiles.forEach((tile, index) => {
            let pos = tracker.positions[index];
            this._tileStyler.setStyle(tile, pos.row, pos.col);
        });
        this._setListStyle(this._tileStyler.getComputedHeight());
    }
    /** Sets style on the main grid-list element, given the style name and value. */
    _setListStyle(style$$1) {
        if (style$$1) {
            this._renderer.setElementStyle(this._element.nativeElement, style$$1[0], style$$1[1]);
        }
    }
};
__decorate$52([
    ContentChildren(MdGridTile), 
    __metadata$52('design:type', QueryList)
], MdGridList.prototype, "_tiles", void 0);
__decorate$52([
    Input(), 
    __metadata$52('design:type', Object)
], MdGridList.prototype, "cols", null);
__decorate$52([
    Input(), 
    __metadata$52('design:type', Object)
], MdGridList.prototype, "gutterSize", null);
__decorate$52([
    Input(), 
    __metadata$52('design:type', Object), 
    __metadata$52('design:paramtypes', [Object])
], MdGridList.prototype, "rowHeight", null);
MdGridList = __decorate$52([
    Component({selector: 'md-grid-list, mat-grid-list',
        template: "<div><ng-content></ng-content></div>",
        styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{display:flex;position:absolute;align-items:center;justify-content:center;height:100%;top:0;right:0;bottom:0;left:0;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;font-size:16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer .mat-line,.mat-grid-tile .mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile .mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile .mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none} /*# sourceMappingURL=grid-list.css.map */ "],
        host: {
            'role': 'list',
            '[class.mat-grid-list]': 'true',
        },
        encapsulation: ViewEncapsulation.None,
    }),
    __param$12(2, Optional()), 
    __metadata$52('design:paramtypes', [Renderer, ElementRef, Dir])
], MdGridList);

var __decorate$50 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$50 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdGridListModule_1 = class MdGridListModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdGridListModule_1,
            providers: []
        };
    }
};
let MdGridListModule = MdGridListModule_1;
MdGridListModule = MdGridListModule_1 = __decorate$50([
    NgModule({
        imports: [MdLineModule, CompatibilityModule],
        exports: [
            MdGridList,
            MdGridTile,
            MdGridTileText,
            MdLineModule,
            CompatibilityModule,
            MdGridTileHeaderCssMatStyler,
            MdGridTileFooterCssMatStyler,
            MdGridAvatarCssMatStyler
        ],
        declarations: [
            MdGridList,
            MdGridTile,
            MdGridTileText,
            MdGridTileHeaderCssMatStyler,
            MdGridTileFooterCssMatStyler,
            MdGridAvatarCssMatStyler
        ],
    }), 
    __metadata$50('design:paramtypes', [])
], MdGridListModule);

var __decorate$54 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$54 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Content of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
let MdCardContent = class MdCardContent {
};
MdCardContent = __decorate$54([
    Directive({
        selector: 'md-card-content, mat-card-content',
        host: {
            '[class.mat-card-content]': 'true'
        }
    }), 
    __metadata$54('design:paramtypes', [])
], MdCardContent);
/**
 * Title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
let MdCardTitle = class MdCardTitle {
};
MdCardTitle = __decorate$54([
    Directive({
        selector: 'md-card-title, mat-card-title',
        host: {
            '[class.mat-card-title]': 'true'
        }
    }), 
    __metadata$54('design:paramtypes', [])
], MdCardTitle);
/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
let MdCardSubtitle = class MdCardSubtitle {
};
MdCardSubtitle = __decorate$54([
    Directive({
        selector: 'md-card-subtitle, mat-card-subtitle',
        host: {
            '[class.mat-card-subtitle]': 'true'
        }
    }), 
    __metadata$54('design:paramtypes', [])
], MdCardSubtitle);
/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
let MdCardActions = class MdCardActions {
};
MdCardActions = __decorate$54([
    Directive({
        selector: 'md-card-actions, mat-card-actions',
        host: {
            '[class.mat-card-actions]': 'true'
        }
    }), 
    __metadata$54('design:paramtypes', [])
], MdCardActions);
/**
 * Footer of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
let MdCardFooter = class MdCardFooter {
};
MdCardFooter = __decorate$54([
    Directive({
        selector: 'md-card-footer, mat-card-footer',
        host: {
            '[class.mat-card-footer]': 'true'
        }
    }), 
    __metadata$54('design:paramtypes', [])
], MdCardFooter);
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
let MdCardSmImage = class MdCardSmImage {
};
MdCardSmImage = __decorate$54([
    Directive({
        selector: '[md-card-sm-image], [mat-card-sm-image]',
        host: {
            '[class.mat-card-sm-image]': 'true'
        }
    }), 
    __metadata$54('design:paramtypes', [])
], MdCardSmImage);
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
let MdCardMdImage = class MdCardMdImage {
};
MdCardMdImage = __decorate$54([
    Directive({
        selector: '[md-card-md-image], [mat-card-md-image]',
        host: {
            '[class.mat-card-md-image]': 'true'
        }
    }), 
    __metadata$54('design:paramtypes', [])
], MdCardMdImage);
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
let MdCardLgImage = class MdCardLgImage {
};
MdCardLgImage = __decorate$54([
    Directive({
        selector: '[md-card-lg-image], [mat-card-lg-image]',
        host: {
            'class.mat-card-lg-image': 'true'
        }
    }), 
    __metadata$54('design:paramtypes', [])
], MdCardLgImage);
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
let MdCardImage = class MdCardImage {
};
MdCardImage = __decorate$54([
    Directive({
        selector: '[md-card-image], [mat-card-image]',
        host: {
            '[class.mat-card-image]': 'true'
        }
    }), 
    __metadata$54('design:paramtypes', [])
], MdCardImage);
/**
 * Large image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
let MdCardXlImage = class MdCardXlImage {
};
MdCardXlImage = __decorate$54([
    Directive({
        selector: '[md-card-xl-image], [mat-card-xl-image]',
        host: {
            '[class.mat-card-xl-image]': 'true'
        }
    }), 
    __metadata$54('design:paramtypes', [])
], MdCardXlImage);
/**
 * Avatar image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
let MdCardAvatar = class MdCardAvatar {
};
MdCardAvatar = __decorate$54([
    Directive({
        selector: '[md-card-avatar], [mat-card-avatar]',
        host: {
            '[class.mat-card-avatar]': 'true'
        }
    }), 
    __metadata$54('design:paramtypes', [])
], MdCardAvatar);
/**
 * A basic content container component that adds the styles of a Material design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - md-card-title
 * - md-card-subtitle
 * - md-card-content
 * - md-card-actions
 * - md-card-footer
 */
let MdCard = class MdCard {
};
MdCard = __decorate$54([
    Component({selector: 'md-card, mat-card',
        template: "<ng-content></ng-content>",
        styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);will-change:box-shadow;display:block;position:relative;padding:24px;border-radius:2px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}@media screen and (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-flat{box-shadow:none}.mat-card-actions,.mat-card-content,.mat-card-subtitle,.mat-card-title{display:block;margin-bottom:16px}.mat-card-title{font-size:24px;font-weight:400}.mat-card-subtitle{font-size:14px}.mat-card-content{font-size:14px}.mat-card-actions{margin-left:-16px;margin-right:-16px;padding:8px 0}.mat-card-actions[align=end]{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 48px);margin:0 -24px 16px -24px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-footer{position:absolute;width:100%;min-height:5px;bottom:0;left:0}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 4px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header-text{margin:0 8px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0}.mat-card-header .mat-card-title{font-size:14px}.mat-card-lg-image,.mat-card-md-image,.mat-card-sm-image{margin:-8px 0}.mat-card-title-group{display:flex;justify-content:space-between;margin:0 -8px}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}@media (max-width:600px){.mat-card{padding:24px 16px}.mat-card-actions{margin-left:-8px;margin-right:-8px}.mat-card-image{width:calc(100% + 32px);margin:16px -16px}.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}.mat-card-header{margin:-8px 0 0 0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child,.mat-card>:last-child{margin-bottom:0}.mat-card-image:first-child{margin-top:-24px}.mat-card>.mat-card-actions:last-child{margin-bottom:-16px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px} /*# sourceMappingURL=card.css.map */ "],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            '[class.mat-card]': 'true'
        }
    }), 
    __metadata$54('design:paramtypes', [])
], MdCard);
/**
 * Component intended to be used within the `<md-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * @docs-private
 */
let MdCardHeader = class MdCardHeader {
};
MdCardHeader = __decorate$54([
    Component({selector: 'md-card-header, mat-card-header',
        template: "<ng-content select=\"[md-card-avatar], [mat-card-avatar]\"></ng-content><div class=\"mat-card-header-text\"><ng-content select=\"md-card-title, mat-card-title, md-card-subtitle, mat-card-subtitle\"></ng-content></div><ng-content></ng-content>",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            '[class.mat-card-header]': 'true'
        }
    }), 
    __metadata$54('design:paramtypes', [])
], MdCardHeader);
/**
 * Component intended to be used within the <md-card> component. It adds styles for a preset
 * layout that groups an image with a title section.
 * @docs-private
 */
let MdCardTitleGroup = class MdCardTitleGroup {
};
MdCardTitleGroup = __decorate$54([
    Component({selector: 'md-card-title-group, mat-card-title-group',
        template: "<div><ng-content select=\"md-card-title, mat-card-title, md-card-subtitle, mat-card-subtitle\"></ng-content></div><ng-content select=\"img\"></ng-content><ng-content></ng-content>",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            '[class.mat-card-title-group]': 'true'
        }
    }), 
    __metadata$54('design:paramtypes', [])
], MdCardTitleGroup);

var __decorate$53 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$53 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdCardModule_1 = class MdCardModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdCardModule_1,
            providers: []
        };
    }
};
let MdCardModule = MdCardModule_1;
MdCardModule = MdCardModule_1 = __decorate$53([
    NgModule({
        imports: [CompatibilityModule],
        exports: [
            MdCard,
            MdCardHeader,
            MdCardTitleGroup,
            MdCardContent,
            MdCardTitle,
            MdCardSubtitle,
            MdCardActions,
            MdCardFooter,
            MdCardSmImage,
            MdCardMdImage,
            MdCardLgImage,
            MdCardImage,
            MdCardXlImage,
            MdCardAvatar,
            CompatibilityModule,
        ],
        declarations: [
            MdCard, MdCardHeader, MdCardTitleGroup, MdCardContent, MdCardTitle, MdCardSubtitle,
            MdCardActions, MdCardFooter, MdCardSmImage, MdCardMdImage, MdCardLgImage, MdCardImage,
            MdCardXlImage, MdCardAvatar,
        ],
    }), 
    __metadata$53('design:paramtypes', [])
], MdCardModule);

var __decorate$57 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$57 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Material design styled Chip component. Used inside the MdChipList component.
 */
let MdChip = class MdChip {
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** Whether or not the chip is disabled. Disabled chips cannot be focused. */
        this._disabled = null;
        /** Whether or not the chip is selected. */
        this._selected = false;
        /** The palette color of selected chips. */
        this._color = 'primary';
        /** Emitted when the chip is focused. */
        this.onFocus = new EventEmitter();
        /** Emitted when the chip is selected. */
        this.select = new EventEmitter();
        /** Emitted when the chip is deselected. */
        this.deselect = new EventEmitter();
        /** Emitted when the chip is destroyed. */
        this.destroy = new EventEmitter();
    }
    ngOnInit() {
        this._addDefaultCSSClass();
        this._updateColor(this._color);
    }
    ngOnDestroy() {
        this.destroy.emit({ chip: this });
    }
    /** Whether or not the chip is disabled. */
    get disabled() {
        return this._disabled;
    }
    /** Sets the disabled state of the chip. */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value) ? true : null;
    }
    /** A String representation of the current disabled state. */
    get _isAriaDisabled() {
        return String(coerceBooleanProperty(this.disabled));
    }
    /** Whether or not this chip is selected. */
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = coerceBooleanProperty(value);
        if (this._selected) {
            this.select.emit({ chip: this });
        }
        else {
            this.deselect.emit({ chip: this });
        }
    }
    /**
     * Toggles the current selected state of this chip.
     * @return Whether the chip is selected.
     */
    toggleSelected() {
        this.selected = !this.selected;
        return this.selected;
    }
    /** The color of the chip. Can be `primary`, `accent`, or `warn`. */
    get color() {
        return this._color;
    }
    set color(value) {
        this._updateColor(value);
    }
    /** Allows for programmatic focusing of the chip. */
    focus() {
        this._renderer.invokeElementMethod(this._elementRef.nativeElement, 'focus');
        this.onFocus.emit({ chip: this });
    }
    /** Ensures events fire properly upon click. */
    _handleClick(event) {
        // Check disabled
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            this.focus();
        }
    }
    /** Initializes the appropriate CSS classes based on the chip type (basic or standard). */
    _addDefaultCSSClass() {
        let el = this._elementRef.nativeElement;
        // Always add the `mat-chip` class
        el.classList.add('mat-chip');
        // If we are a basic chip, also add the `mat-basic-chip` class for :not() targeting
        if (el.nodeName.toLowerCase() == 'mat-basic-chip' || el.hasAttribute('mat-basic-chip') ||
            el.nodeName.toLowerCase() == 'md-basic-chip' || el.hasAttribute('md-basic-chip')) {
            el.classList.add('mat-basic-chip');
        }
    }
    /** Updates the private _color variable and the native element. */
    _updateColor(newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    }
    /** Sets the mat-color on the native element. */
    _setElementColor(color, isAdd) {
        if (color != null && color != '') {
            this._renderer.setElementClass(this._elementRef.nativeElement, `mat-${color}`, isAdd);
        }
    }
};
__decorate$57([
    Output(), 
    __metadata$57('design:type', Object)
], MdChip.prototype, "select", void 0);
__decorate$57([
    Output(), 
    __metadata$57('design:type', Object)
], MdChip.prototype, "deselect", void 0);
__decorate$57([
    Output(), 
    __metadata$57('design:type', Object)
], MdChip.prototype, "destroy", void 0);
__decorate$57([
    Input(), 
    __metadata$57('design:type', Boolean)
], MdChip.prototype, "disabled", null);
__decorate$57([
    Input(), 
    __metadata$57('design:type', Boolean)
], MdChip.prototype, "selected", null);
__decorate$57([
    Input(), 
    __metadata$57('design:type', String)
], MdChip.prototype, "color", null);
MdChip = __decorate$57([
    Component({
        selector: `md-basic-chip, [md-basic-chip], md-chip, [md-chip],
             mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]`,
        template: `<ng-content></ng-content>`,
        host: {
            '[class.mat-chip]': 'true',
            'tabindex': '-1',
            'role': 'option',
            '[class.mat-chip-selected]': 'selected',
            '[attr.disabled]': 'disabled',
            '[attr.aria-disabled]': '_isAriaDisabled',
            '(click)': '_handleClick($event)'
        }
    }), 
    __metadata$57('design:paramtypes', [Renderer, ElementRef])
], MdChip);

var __decorate$56 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$56 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * A material design chips component (named ChipList for it's similarity to the List component).
 *
 * Example:
 *
 *     <md-chip-list>
 *       <md-chip>Chip 1<md-chip>
 *       <md-chip>Chip 2<md-chip>
 *     </md-chip-list>
 */
let MdChipList = class MdChipList {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        /** Track which chips we're listening to for focus/destruction. */
        this._subscribed = new WeakMap();
        /** Whether or not the chip is selectable. */
        this._selectable = true;
    }
    ngAfterContentInit() {
        this._keyManager = new FocusKeyManager(this.chips).withWrap();
        // Go ahead and subscribe all of the initial chips
        this._subscribeChips(this.chips);
        // When the list changes, re-subscribe
        this.chips.changes.subscribe((chips) => {
            this._subscribeChips(chips);
        });
    }
    /**
     * Whether or not this chip is selectable. When a chip is not selectable,
     * it's selected state is always ignored.
     */
    get selectable() {
        return this._selectable;
    }
    set selectable(value) {
        this._selectable = coerceBooleanProperty(value);
    }
    /**
     * Programmatically focus the chip list. This in turn focuses the first
     * non-disabled chip in this chip list.
     */
    focus() {
        // TODO: ARIA says this should focus the first `selected` chip.
        this._keyManager.setFirstItemActive();
    }
    /** Passes relevant key presses to our key manager. */
    _keydown(event) {
        let target = event.target;
        // If they are on a chip, check for space/left/right, otherwise pass to our key manager
        if (target && target.classList.contains('mat-chip')) {
            switch (event.keyCode) {
                case SPACE:
                    // If we are selectable, toggle the focused chip
                    if (this.selectable) {
                        this._toggleSelectOnFocusedChip();
                    }
                    // Always prevent space from scrolling the page since the list has focus
                    event.preventDefault();
                    break;
                case LEFT_ARROW:
                    this._keyManager.setPreviousItemActive();
                    event.preventDefault();
                    break;
                case RIGHT_ARROW:
                    this._keyManager.setNextItemActive();
                    event.preventDefault();
                    break;
                default:
                    this._keyManager.onKeydown(event);
            }
        }
    }
    /** Toggles the selected state of the currently focused chip. */
    _toggleSelectOnFocusedChip() {
        // Allow disabling of chip selection
        if (!this.selectable) {
            return;
        }
        let focusedIndex = this._keyManager.activeItemIndex;
        if (this._isValidIndex(focusedIndex)) {
            let focusedChip = this.chips.toArray()[focusedIndex];
            if (focusedChip) {
                focusedChip.toggleSelected();
            }
        }
    }
    /**
     * Iterate through the list of chips and add them to our list of
     * subscribed chips.
     *
     * @param chips The list of chips to be subscribed.
     */
    _subscribeChips(chips) {
        chips.forEach(chip => this._addChip(chip));
    }
    /**
     * Add a specific chip to our subscribed list. If the chip has
     * already been subscribed, this ensures it is only subscribed
     * once.
     *
     * @param chip The chip to be subscribed (or checked for existing
     * subscription).
     */
    _addChip(chip) {
        // If we've already been subscribed to a parent, do nothing
        if (this._subscribed.has(chip)) {
            return;
        }
        // Watch for focus events outside of the keyboard navigation
        chip.onFocus.subscribe(() => {
            let chipIndex = this.chips.toArray().indexOf(chip);
            if (this._isValidIndex(chipIndex)) {
                this._keyManager.updateActiveItemIndex(chipIndex);
            }
        });
        // On destroy, remove the item from our list, and check focus
        chip.destroy.subscribe(() => {
            let chipIndex = this.chips.toArray().indexOf(chip);
            if (this._isValidIndex(chipIndex)) {
                // Check whether the chip is the last item
                if (chipIndex < this.chips.length - 1) {
                    this._keyManager.setActiveItem(chipIndex);
                }
                else if (chipIndex - 1 >= 0) {
                    this._keyManager.setActiveItem(chipIndex - 1);
                }
            }
            this._subscribed.delete(chip);
            chip.destroy.unsubscribe();
        });
        this._subscribed.set(chip, true);
    }
    /**
     * Utility to ensure all indexes are valid.
     *
     * @param index The index to be checked.
     * @returns True if the index is valid for our list of chips.
     */
    _isValidIndex(index) {
        return index >= 0 && index < this.chips.length;
    }
};
__decorate$56([
    Input(), 
    __metadata$56('design:type', Boolean)
], MdChipList.prototype, "selectable", null);
MdChipList = __decorate$56([
    Component({selector: 'md-chip-list, mat-chip-list',
        template: `<div class="mat-chip-list-wrapper"><ng-content></ng-content></div>`,
        host: {
            // Properties
            'tabindex': '0',
            'role': 'listbox',
            '[class.mat-chip-list]': 'true',
            // Events
            '(focus)': 'focus()',
            '(keydown)': '_keydown($event)'
        },
        queries: {
            chips: new ContentChildren(MdChip)
        },
        styles: [".mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:flex-start}.mat-chip-list-wrapper .mat-chip:not(.mat-basic-chip){margin:0 3px 0 3px}.mat-chip-list-wrapper .mat-chip:not(.mat-basic-chip):first-child{margin-left:0;margin-right:3px}[dir=rtl] .mat-chip-list-wrapper .mat-chip:not(.mat-basic-chip):first-child{margin-left:3px;margin-right:0}.mat-chip-list-wrapper .mat-chip:not(.mat-basic-chip):last-child{margin-left:3px;margin-right:0}[dir=rtl] .mat-chip-list-wrapper .mat-chip:not(.mat-basic-chip):last-child{margin-left:0;margin-right:3px}.mat-chip:not(.mat-basic-chip){display:inline-block;padding:8px 12px 8px 12px;border-radius:24px;font-size:13px;line-height:16px}.mat-chip-list-stacked .mat-chip-list-wrapper{display:block}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-chip:not(.mat-basic-chip){display:block;margin:0;margin-bottom:8px}[dir=rtl] .mat-chip-list-stacked .mat-chip-list-wrapper .mat-chip:not(.mat-basic-chip){margin:0;margin-bottom:8px}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-chip:not(.mat-basic-chip):last-child,[dir=rtl] .mat-chip-list-stacked .mat-chip-list-wrapper .mat-chip:not(.mat-basic-chip):last-child{margin-bottom:0} /*# sourceMappingURL=chips.css.map */ "],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush
    }), 
    __metadata$56('design:paramtypes', [ElementRef])
], MdChipList);

var __decorate$55 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$55 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdChipsModule_1 = class MdChipsModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdChipsModule_1,
            providers: []
        };
    }
};
let MdChipsModule = MdChipsModule_1;
MdChipsModule = MdChipsModule_1 = __decorate$55([
    NgModule({
        imports: [],
        exports: [MdChipList, MdChip],
        declarations: [MdChipList, MdChip]
    }), 
    __metadata$55('design:paramtypes', [])
], MdChipsModule);

var __decorate$60 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$60 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Exception thrown when attempting to load an icon with a name that cannot be found.
 * @docs-private
 */
class MdIconNameNotFoundError extends MdError {
    constructor(iconName) {
        super(`Unable to find icon with the name "${iconName}"`);
    }
}
/**
 * Exception thrown when attempting to load SVG content that does not contain the expected
 * <svg> tag.
 * @docs-private
 */
class MdIconSvgTagNotFoundError extends MdError {
    constructor() {
        super('<svg> tag not found');
    }
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * @docs-private
 */
class SvgIconConfig {
    constructor(url) {
        this.url = url;
        this.svgElement = null;
    }
}
/** Returns the cache key to use for an icon namespace and name. */
const iconKey = (namespace, name) => namespace + ':' + name;
/**
 * Service to register and display icons used by the <md-icon> component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */
let MdIconRegistry = class MdIconRegistry {
    constructor(_http, _sanitizer) {
        this._http = _http;
        this._sanitizer = _sanitizer;
        /**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */
        this._svgIconConfigs = new Map();
        /**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
         * Multiple icon sets can be registered under the same namespace.
         */
        this._iconSetConfigs = new Map();
        /** Cache for icons loaded by direct URLs. */
        this._cachedIconsByUrl = new Map();
        /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
        this._inProgressUrlFetches = new Map();
        /** Map from font identifiers to their CSS class names. Used for icon fonts. */
        this._fontCssClassesByAlias = new Map();
        /**
         * The CSS class to apply when an <md-icon> component has no icon name, url, or font specified.
         * The default 'material-icons' value assumes that the material icon font has been loaded as
         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */
        this._defaultFontSetClass = 'material-icons';
    }
    /**
     * Registers an icon by URL in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    addSvgIcon(iconName, url) {
        return this.addSvgIconInNamespace('', iconName, url);
    }
    /**
     * Registers an icon by URL in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    addSvgIconInNamespace(namespace, iconName, url) {
        const key = iconKey(namespace, iconName);
        this._svgIconConfigs.set(key, new SvgIconConfig(url));
        return this;
    }
    /**
     * Registers an icon set by URL in the default namespace.
     * @param url
     */
    addSvgIconSet(url) {
        return this.addSvgIconSetInNamespace('', url);
    }
    /**
     * Registers an icon set by URL in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param url
     */
    addSvgIconSetInNamespace(namespace, url) {
        const config = new SvgIconConfig(url);
        if (this._iconSetConfigs.has(namespace)) {
            this._iconSetConfigs.get(namespace).push(config);
        }
        else {
            this._iconSetConfigs.set(namespace, [config]);
        }
        return this;
    }
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an mdIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the <md-icon> element.
     *
     * @param alias Alias for the font.
     * @param className Class name override to be used instead of the alias.
     */
    registerFontClassAlias(alias, className = alias) {
        this._fontCssClassesByAlias.set(alias, className);
        return this;
    }
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     */
    classNameForFontAlias(alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
    }
    /**
     * Sets the CSS class name to be used for icon fonts when an <md-icon> component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @param className
     */
    setDefaultFontSetClass(className) {
        this._defaultFontSetClass = className;
        return this;
    }
    /**
     * Returns the CSS class name to be used for icon fonts when an <md-icon> component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     */
    getDefaultFontSetClass() {
        return this._defaultFontSetClass;
    }
    /**
     * Returns an Observable that produces the icon (as an <svg> DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param safeUrl URL from which to fetch the SVG icon.
     */
    getSvgIconFromUrl(safeUrl) {
        let url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
        if (this._cachedIconsByUrl.has(url)) {
            return Observable.of(cloneSvg(this._cachedIconsByUrl.get(url)));
        }
        return this._loadSvgIconFromConfig(new SvgIconConfig(url))
            .do(svg => this._cachedIconsByUrl.set(url, svg))
            .map(svg => cloneSvg(svg));
    }
    /**
     * Returns an Observable that produces the icon (as an <svg> DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an MdIconNameNotFoundError.
     *
     * @param name Name of the icon to be retrieved.
     * @param namespace Namespace in which to look for the icon.
     */
    getNamedSvgIcon(name, namespace = '') {
        // Return (copy of) cached icon if possible.
        const key = iconKey(namespace, name);
        if (this._svgIconConfigs.has(key)) {
            return this._getSvgFromConfig(this._svgIconConfigs.get(key));
        }
        // See if we have any icon sets registered for the namespace.
        const iconSetConfigs = this._iconSetConfigs.get(namespace);
        if (iconSetConfigs) {
            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }
        return Observable.throw(new MdIconNameNotFoundError(key));
    }
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     */
    _getSvgFromConfig(config) {
        if (config.svgElement) {
            // We already have the SVG element for this icon, return a copy.
            return Observable.of(cloneSvg(config.svgElement));
        }
        else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return this._loadSvgIconFromConfig(config)
                .do(svg => config.svgElement = svg)
                .map(svg => cloneSvg(svg));
        }
    }
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new <svg> element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * MdIconNameNotFoundError if no icon with the specified name can be found.
     */
    _getSvgFromIconSetConfigs(name, iconSetConfigs) {
        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
        // requested name.
        const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (namedIcon) {
            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
            // time anyway, there's probably not much advantage compared to just always extracting
            // it from the icon set.
            return Observable.of(namedIcon);
        }
        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
        // fetched, fetch them now and look for iconName in the results.
        const iconSetFetchRequests = iconSetConfigs
            .filter(iconSetConfig => !iconSetConfig.svgElement)
            .map(iconSetConfig => this._loadSvgIconSetFromConfig(iconSetConfig)
            .catch((err, caught) => {
            let url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, iconSetConfig.url);
            // Swallow errors fetching individual URLs so the combined Observable won't
            // necessarily fail.
            console.log(`Loading icon set URL: ${url} failed: ${err}`);
            return Observable.of(null);
        })
            .do(svg => {
            // Cache SVG element.
            if (svg) {
                iconSetConfig.svgElement = svg;
            }
        }));
        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
        // cached SVG element (unless the request failed), and we can check again for the icon.
        return Observable.forkJoin(iconSetFetchRequests)
            .map((ignoredResults) => {
            const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
            if (!foundIcon) {
                throw new MdIconNameNotFoundError(name);
            }
            return foundIcon;
        });
    }
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
        // Iterate backwards, so icon sets added later have precedence.
        for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
            const config = iconSetConfigs[i];
            if (config.svgElement) {
                const foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName);
                if (foundIcon) {
                    return foundIcon;
                }
            }
        }
        return null;
    }
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    _loadSvgIconFromConfig(config) {
        return this._fetchUrl(config.url)
            .map(svgText => this._createSvgElementForSingleIcon(svgText));
    }
    /**
     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    _loadSvgIconSetFromConfig(config) {
        // TODO: Document that icons should only be loaded from trusted sources.
        return this._fetchUrl(config.url)
            .map(svgText => this._svgElementFromString(svgText));
    }
    /**
     * Creates a DOM element from the given SVG string, and adds default attributes.
     */
    _createSvgElementForSingleIcon(responseText) {
        const svg = this._svgElementFromString(responseText);
        this._setSvgAttributes(svg);
        return svg;
    }
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    _extractSvgIconFromSet(iconSet, iconName) {
        const iconNode = iconSet.querySelector('#' + iconName);
        if (!iconNode) {
            return null;
        }
        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
        // the content of a new <svg> node.
        if (iconNode.tagName.toLowerCase() == 'svg') {
            return this._setSvgAttributes(iconNode.cloneNode(true));
        }
        // createElement('SVG') doesn't work as expected; the DOM ends up with
        // the correct nodes, but the SVG content doesn't render. Instead we
        // have to create an empty SVG node using innerHTML and append its content.
        // Elements created using DOMParser.parseFromString have the same problem.
        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
        const svg = this._svgElementFromString('<svg></svg>');
        // Clone the node so we don't remove it from the parent icon set element.
        svg.appendChild(iconNode.cloneNode(true));
        return this._setSvgAttributes(svg);
    }
    /**
     * Creates a DOM element from the given SVG string.
     */
    _svgElementFromString(str) {
        // TODO: Is there a better way than innerHTML? Renderer doesn't appear to have a method for
        // creating an element from an HTML string.
        const div = document.createElement('DIV');
        div.innerHTML = str;
        const svg = div.querySelector('svg');
        if (!svg) {
            throw new MdIconSvgTagNotFoundError();
        }
        return svg;
    }
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     */
    _setSvgAttributes(svg) {
        if (!svg.getAttribute('xmlns')) {
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        }
        svg.setAttribute('fit', '');
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
        return svg;
    }
    /**
     * Returns an Observable which produces the string contents of the given URL. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     */
    _fetchUrl(safeUrl) {
        let url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
        // already a request in progress for that URL. It's necessary to call share() on the
        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
        if (this._inProgressUrlFetches.has(url)) {
            return this._inProgressUrlFetches.get(url);
        }
        // TODO(jelbourn): for some reason, the `finally` operator "loses" the generic type on the
        // Observable. Figure out why and fix it.
        const req = this._http.get(url)
            .map(response => response.text())
            .finally(() => {
            this._inProgressUrlFetches.delete(url);
        })
            .share();
        this._inProgressUrlFetches.set(url, req);
        return req;
    }
};
MdIconRegistry = __decorate$60([
    Injectable(), 
    __metadata$60('design:paramtypes', [Http, DomSanitizer])
], MdIconRegistry);
/** Clones an SVGElement while preserving type information. */
function cloneSvg(svg) {
    return svg.cloneNode(true);
}

var __decorate$59 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$59 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Exception thrown when an invalid icon name is passed to an md-icon component. */
class MdIconInvalidNameError extends MdError {
    constructor(iconName) {
        super(`Invalid icon name: "${iconName}"`);
    }
}
/**
 * Component to display an icon. It can be used in the following ways:
 * - Specify the svgSrc input to load an SVG icon from a URL. The SVG content is directly inlined
 *   as a child of the <md-icon> component, so that CSS styles can easily be applied to it.
 *   The URL is loaded via an XMLHttpRequest, so it must be on the same domain as the page or its
 *   server must be configured to allow cross-domain requests.
 *   Example:
 *     <md-icon svgSrc="assets/arrow.svg"></md-icon>
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MdIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     <md-icon svgIcon="left-arrow"></md-icon>
 *     <md-icon svgIcon="animals:cat"></md-icon>
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the <md-icon>
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MdIconRegistry.registerFontClassAlias.
 *   Examples:
 *     <md-icon>home</md-icon>
 *     <md-icon fontSet="myfont">sun</md-icon>
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     <md-icon fontSet="fa" fontIcon="alarm"></md-icon>
 */
let MdIcon = class MdIcon {
    constructor(_elementRef, _renderer, _mdIconRegistry) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._mdIconRegistry = _mdIconRegistry;
        /** Screenreader label for the icon. */
        this.hostAriaLabel = '';
    }
    /** Color of the icon. */
    get color() { return this._color; }
    set color(value) { this._updateColor(value); }
    _updateColor(newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    }
    _setElementColor(color, isAdd) {
        if (color != null && color != '') {
            this._renderer.setElementClass(this._elementRef.nativeElement, `mat-${color}`, isAdd);
        }
    }
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws a MdIconInvalidNameError if the name contains two or more ':' separators.
     * Examples:
     *   'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws MdIconInvalidNameError)
     */
    _splitIconName(iconName) {
        if (!iconName) {
            return ['', ''];
        }
        const parts = iconName.split(':');
        switch (parts.length) {
            case 1:
                // Use default namespace.
                return ['', parts[0]];
            case 2:
                return parts;
            default:
                throw new MdIconInvalidNameError(iconName);
        }
    }
    ngOnChanges(changes) {
        const changedInputs = Object.keys(changes);
        // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
        if (changedInputs.indexOf('svgIcon') != -1 || changedInputs.indexOf('svgSrc') != -1) {
            if (this.svgIcon) {
                const [namespace, iconName] = this._splitIconName(this.svgIcon);
                this._mdIconRegistry.getNamedSvgIcon(iconName, namespace).first().subscribe(svg => this._setSvgElement(svg), (err) => console.log(`Error retrieving icon: ${err.message}`));
            }
        }
        if (this._usingFontIcon()) {
            this._updateFontIconClasses();
        }
        this._updateAriaLabel();
    }
    ngOnInit() {
        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
        // e.g. <md-icon>arrow</md-icon>. In this case we need to add a CSS class for the default font.
        if (this._usingFontIcon()) {
            this._updateFontIconClasses();
        }
    }
    ngAfterViewChecked() {
        // Update aria label here because it may depend on the projected text content.
        // (e.g. <md-icon>home</md-icon> should use 'home').
        this._updateAriaLabel();
    }
    _updateAriaLabel() {
        const ariaLabel = this._getAriaLabel();
        if (ariaLabel && ariaLabel !== this._previousAriaLabel) {
            this._previousAriaLabel = ariaLabel;
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'aria-label', ariaLabel);
        }
    }
    _getAriaLabel() {
        // If the parent provided an aria-label attribute value, use it as-is. Otherwise look for a
        // reasonable value from the alt attribute, font icon name, SVG icon name, or (for ligatures)
        // the text content of the directive.
        const label = this.hostAriaLabel ||
            this.alt ||
            this.fontIcon ||
            this._splitIconName(this.svgIcon)[1];
        if (label) {
            return label;
        }
        // The "content" of an SVG icon is not a useful label.
        if (this._usingFontIcon()) {
            const text = this._elementRef.nativeElement.textContent;
            if (text) {
                return text;
            }
        }
        // TODO: Warn here in dev mode.
        return null;
    }
    _usingFontIcon() {
        return !this.svgIcon;
    }
    _setSvgElement(svg) {
        const layoutElement = this._elementRef.nativeElement;
        // Remove existing child nodes and add the new SVG element.
        // We would use renderer.detachView(Array.from(layoutElement.childNodes)) here,
        // but it fails in IE11: https://github.com/angular/angular/issues/6327
        layoutElement.innerHTML = '';
        this._renderer.projectNodes(layoutElement, [svg]);
    }
    _updateFontIconClasses() {
        if (!this._usingFontIcon()) {
            return;
        }
        const elem = this._elementRef.nativeElement;
        const fontSetClass = this.fontSet ?
            this._mdIconRegistry.classNameForFontAlias(this.fontSet) :
            this._mdIconRegistry.getDefaultFontSetClass();
        if (fontSetClass != this._previousFontSetClass) {
            if (this._previousFontSetClass) {
                this._renderer.setElementClass(elem, this._previousFontSetClass, false);
            }
            if (fontSetClass) {
                this._renderer.setElementClass(elem, fontSetClass, true);
            }
            this._previousFontSetClass = fontSetClass;
        }
        if (this.fontIcon != this._previousFontIconClass) {
            if (this._previousFontIconClass) {
                this._renderer.setElementClass(elem, this._previousFontIconClass, false);
            }
            if (this.fontIcon) {
                this._renderer.setElementClass(elem, this.fontIcon, true);
            }
            this._previousFontIconClass = this.fontIcon;
        }
    }
};
__decorate$59([
    Input(), 
    __metadata$59('design:type', String)
], MdIcon.prototype, "svgIcon", void 0);
__decorate$59([
    Input(), 
    __metadata$59('design:type', String)
], MdIcon.prototype, "fontSet", void 0);
__decorate$59([
    Input(), 
    __metadata$59('design:type', String)
], MdIcon.prototype, "fontIcon", void 0);
__decorate$59([
    Input(), 
    __metadata$59('design:type', String)
], MdIcon.prototype, "alt", void 0);
__decorate$59([
    Input('aria-label'), 
    __metadata$59('design:type', String)
], MdIcon.prototype, "hostAriaLabel", void 0);
__decorate$59([
    Input(), 
    __metadata$59('design:type', String)
], MdIcon.prototype, "color", null);
MdIcon = __decorate$59([
    Component({template: '<ng-content></ng-content>',
        selector: 'md-icon, mat-icon',
        styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px} /*# sourceMappingURL=icon.css.map */ "],
        host: {
            'role': 'img',
            '[class.mat-icon]': 'true',
        },
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
    }), 
    __metadata$59('design:paramtypes', [ElementRef, Renderer, MdIconRegistry])
], MdIcon);
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, http, sanitizer) {
    return parentRegistry || new MdIconRegistry(http, sanitizer);
}

const ICON_REGISTRY_PROVIDER = {
    // If there is already an MdIconRegistry available, use that. Otherwise, provide a new one.
    provide: MdIconRegistry,
    deps: [[new Optional(), new SkipSelf(), MdIconRegistry], Http, DomSanitizer],
    useFactory: ICON_REGISTRY_PROVIDER_FACTORY,
};

var __decorate$58 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$58 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdIconModule_1 = class MdIconModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdIconModule_1,
            providers: [],
        };
    }
};
let MdIconModule = MdIconModule_1;
MdIconModule = MdIconModule_1 = __decorate$58([
    NgModule({
        imports: [HttpModule, CompatibilityModule],
        exports: [MdIcon, CompatibilityModule],
        declarations: [MdIcon],
        providers: [ICON_REGISTRY_PROVIDER],
    }), 
    __metadata$58('design:paramtypes', [])
], MdIconModule);

var __decorate$62 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$62 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// TODO(josephperrott): Benchpress tests.
/** A single degree in radians. */
const DEGREE_IN_RADIANS = Math.PI / 180;
/** Duration of the indeterminate animation. */
const DURATION_INDETERMINATE = 667;
/** Duration of the indeterminate animation. */
const DURATION_DETERMINATE = 225;
/** Start animation value of the indeterminate animation */
const startIndeterminate = 3;
/** End animation value of the indeterminate animation */
const endIndeterminate = 80;
/* Maximum angle for the arc. The angle can't be exactly 360, because the arc becomes hidden. */
const MAX_ANGLE = 359.99 / 100;
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdProgressSpinnerCssMatStyler = class MdProgressSpinnerCssMatStyler {
};
MdProgressSpinnerCssMatStyler = __decorate$62([
    Directive({
        selector: 'md-progress-spinner, mat-progress-spinner',
        host: {
            '[class.mat-progress-spinner]': 'true'
        }
    }), 
    __metadata$62('design:paramtypes', [])
], MdProgressSpinnerCssMatStyler);
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdProgressCircleCssMatStyler = class MdProgressCircleCssMatStyler {
};
MdProgressCircleCssMatStyler = __decorate$62([
    Directive({
        selector: 'md-progress-circle, mat-progress-circle',
        host: {
            '[class.mat-progress-circle]': 'true'
        }
    }), 
    __metadata$62('design:paramtypes', [])
], MdProgressCircleCssMatStyler);
/**
 * <md-progress-spinner> component.
 */
let MdProgressSpinner = class MdProgressSpinner {
    constructor(_ngZone, _elementRef, _renderer) {
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /** The id of the last requested animation. */
        this._lastAnimationId = 0;
        this._mode = 'determinate';
        this._color = 'primary';
    }
    /**
     * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
     * because voiceover does not report the progress indicator as indeterminate if the aria min
     * and/or max value are number values.
     */
    get _ariaValueMin() {
        return this.mode == 'determinate' ? 0 : null;
    }
    get _ariaValueMax() {
        return this.mode == 'determinate' ? 100 : null;
    }
    /** @docs-private */
    get interdeterminateInterval() {
        return this._interdeterminateInterval;
    }
    /** @docs-private */
    set interdeterminateInterval(interval) {
        clearInterval(this._interdeterminateInterval);
        this._interdeterminateInterval = interval;
    }
    /**
     * Clean up any animations that were running.
     */
    ngOnDestroy() {
        this._cleanupIndeterminateAnimation();
    }
    /** The color of the progress-spinner. Can be primary, accent, or warn. */
    get color() { return this._color; }
    set color(value) {
        this._updateColor(value);
    }
    /** Value of the progress circle. It is bound to the host as the attribute aria-valuenow. */
    get value() {
        if (this.mode == 'determinate') {
            return this._value;
        }
    }
    set value(v) {
        if (v != null && this.mode == 'determinate') {
            let newValue = clamp(v);
            this._animateCircle((this.value || 0), newValue, linearEase, DURATION_DETERMINATE, 0);
            this._value = newValue;
        }
    }
    /**
     * Mode of the progress circle
     *
     * Input must be one of the values from ProgressMode, defaults to 'determinate'.
     * mode is bound to the host as the attribute host.
     */
    get mode() {
        return this._mode;
    }
    set mode(m) {
        if (m == 'indeterminate') {
            this._startIndeterminateAnimation();
        }
        else {
            this._cleanupIndeterminateAnimation();
        }
        this._mode = m;
    }
    /**
     * Animates the circle from one percentage value to another.
     *
     * @param animateFrom The percentage of the circle filled starting the animation.
     * @param animateTo The percentage of the circle filled ending the animation.
     * @param ease The easing function to manage the pace of change in the animation.
     * @param duration The length of time to show the animation, in milliseconds.
     * @param rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     */
    _animateCircle(animateFrom, animateTo, ease, duration, rotation) {
        let id = ++this._lastAnimationId;
        let startTime = Date.now();
        let changeInValue = animateTo - animateFrom;
        // No need to animate it if the values are the same
        if (animateTo === animateFrom) {
            this._renderArc(animateTo, rotation);
        }
        else {
            let animation = () => {
                let elapsedTime = Math.max(0, Math.min(Date.now() - startTime, duration));
                this._renderArc(ease(elapsedTime, animateFrom, changeInValue, duration), rotation);
                // Prevent overlapping animations by checking if a new animation has been called for and
                // if the animation has lasted longer than the animation duration.
                if (id === this._lastAnimationId && elapsedTime < duration) {
                    requestAnimationFrame(animation);
                }
            };
            // Run the animation outside of Angular's zone, in order to avoid
            // hitting ZoneJS and change detection on each frame.
            this._ngZone.runOutsideAngular(animation);
        }
    }
    /**
     * Starts the indeterminate animation interval, if it is not already running.
     */
    _startIndeterminateAnimation() {
        let rotationStartPoint = 0;
        let start = startIndeterminate;
        let end = endIndeterminate;
        let duration = DURATION_INDETERMINATE;
        let animate$$1 = () => {
            this._animateCircle(start, end, materialEase, duration, rotationStartPoint);
            // Prevent rotation from reaching Number.MAX_SAFE_INTEGER.
            rotationStartPoint = (rotationStartPoint + end) % 100;
            let temp = start;
            start = -end;
            end = -temp;
        };
        if (!this.interdeterminateInterval) {
            this._ngZone.runOutsideAngular(() => {
                this.interdeterminateInterval = setInterval(animate$$1, duration + 50, 0, false);
                animate$$1();
            });
        }
    }
    /**
     * Removes interval, ending the animation.
     */
    _cleanupIndeterminateAnimation() {
        this.interdeterminateInterval = null;
    }
    /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     */
    _renderArc(currentValue, rotation) {
        // Caches the path reference so it doesn't have to be looked up every time.
        let path = this._path = this._path || this._elementRef.nativeElement.querySelector('path');
        // Ensure that the path was found. This may not be the case if the
        // animation function fires too early.
        if (path) {
            path.setAttribute('d', getSvgArc(currentValue, rotation));
        }
    }
    /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     */
    _updateColor(newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    }
    /** Sets the given palette class on the component element. */
    _setElementColor(color, isAdd) {
        if (color != null && color != '') {
            this._renderer.setElementClass(this._elementRef.nativeElement, `mat-${color}`, isAdd);
        }
    }
};
__decorate$62([
    Input(), 
    __metadata$62('design:type', String)
], MdProgressSpinner.prototype, "color", null);
__decorate$62([
    Input(),
    HostBinding('attr.aria-valuenow'), 
    __metadata$62('design:type', Object)
], MdProgressSpinner.prototype, "value", null);
__decorate$62([
    HostBinding('attr.mode'),
    Input(), 
    __metadata$62('design:type', Object)
], MdProgressSpinner.prototype, "mode", null);
MdProgressSpinner = __decorate$62([
    Component({selector: 'md-progress-spinner, mat-progress-spinner, md-progress-circle, mat-progress-circle',
        host: {
            'role': 'progressbar',
            '[attr.aria-valuemin]': '_ariaValueMin',
            '[attr.aria-valuemax]': '_ariaValueMax'
        },
        template: "<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\"><path></path></svg>",
        styles: [":host{display:block;height:100px;width:100px;overflow:hidden}:host svg{height:100%;width:100%;transform-origin:center}:host path{fill:transparent;stroke-width:10px;transition:stroke .3s cubic-bezier(.35,0,.25,1)}:host[mode=indeterminate] svg{animation-duration:5.25s,2.887s;animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;animation-timing-function:cubic-bezier(.35,0,.25,1),linear;animation-iteration-count:infinite;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-sporadic-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}} /*# sourceMappingURL=progress-spinner.css.map */ "],
        changeDetection: ChangeDetectionStrategy.OnPush,
    }), 
    __metadata$62('design:paramtypes', [NgZone, ElementRef, Renderer])
], MdProgressSpinner);
/**
 * <md-spinner> component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate <md-progress-spinner> instance.
 */
let MdSpinner = class MdSpinner extends MdProgressSpinner {
    constructor(elementRef, ngZone, renderer) {
        super(ngZone, elementRef, renderer);
        this.mode = 'indeterminate';
    }
    ngOnDestroy() {
        // The `ngOnDestroy` from `MdProgressSpinner` should be called explicitly, because
        // in certain cases Angular won't call it (e.g. when using AoT and in unit tests).
        super.ngOnDestroy();
    }
};
MdSpinner = __decorate$62([
    Component({selector: 'md-spinner, mat-spinner',
        host: {
            'role': 'progressbar',
            'mode': 'indeterminate',
            '[class.mat-spinner]': 'true',
        },
        template: "<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\"><path></path></svg>",
        styles: [":host{display:block;height:100px;width:100px;overflow:hidden}:host svg{height:100%;width:100%;transform-origin:center}:host path{fill:transparent;stroke-width:10px;transition:stroke .3s cubic-bezier(.35,0,.25,1)}:host[mode=indeterminate] svg{animation-duration:5.25s,2.887s;animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;animation-timing-function:cubic-bezier(.35,0,.25,1),linear;animation-iteration-count:infinite;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-sporadic-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}} /*# sourceMappingURL=progress-spinner.css.map */ "],
    }), 
    __metadata$62('design:paramtypes', [ElementRef, NgZone, Renderer])
], MdSpinner);
/**
 * Module functions.
 */
/** Clamps a value to be between 0 and 100. */
function clamp(v) {
    return Math.max(0, Math.min(100, v));
}
/**
 * Converts Polar coordinates to Cartesian.
 */
function polarToCartesian(radius, pathRadius, angleInDegrees) {
    let angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
    return (radius + (pathRadius * Math.cos(angleInRadians))) +
        ',' + (radius + (pathRadius * Math.sin(angleInRadians)));
}
/**
 * Easing function for linear animation.
 */
function linearEase(currentTime, startValue, changeInValue, duration) {
    return changeInValue * currentTime / duration + startValue;
}
/**
 * Easing function to match material design indeterminate animation.
 */
function materialEase(currentTime, startValue, changeInValue, duration) {
    let time = currentTime / duration;
    let timeCubed = Math.pow(time, 3);
    let timeQuad = Math.pow(time, 4);
    let timeQuint = Math.pow(time, 5);
    return startValue + changeInValue * ((6 * timeQuint) + (-15 * timeQuad) + (10 * timeCubed));
}
/**
 * Determines the path value to define the arc.  Converting percentage values to to polar
 * coordinates on the circle, and then to cartesian coordinates in the viewport.
 *
 * @param currentValue The current percentage value of the progress circle, the percentage of the
 *    circle to fill.
 * @param rotation The starting point of the circle with 0 being the 0 degree point.
 * @return A string for an SVG path representing a circle filled from the starting point to the
 *    percentage value provided.
 */
function getSvgArc(currentValue, rotation) {
    let startPoint = rotation || 0;
    let radius = 50;
    let pathRadius = 40;
    let startAngle = startPoint * MAX_ANGLE;
    let endAngle = currentValue * MAX_ANGLE;
    let start = polarToCartesian(radius, pathRadius, startAngle);
    let end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
    let arcSweep = endAngle < 0 ? 0 : 1;
    let largeArcFlag;
    if (endAngle < 0) {
        largeArcFlag = endAngle >= -180 ? 0 : 1;
    }
    else {
        largeArcFlag = endAngle <= 180 ? 0 : 1;
    }
    return `M${start}A${pathRadius},${pathRadius} 0 ${largeArcFlag},${arcSweep} ${end}`;
}

var __decorate$61 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$61 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdProgressSpinnerModule_1 = class MdProgressSpinnerModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdProgressSpinnerModule_1,
            providers: []
        };
    }
};
let MdProgressSpinnerModule = MdProgressSpinnerModule_1;
MdProgressSpinnerModule = MdProgressSpinnerModule_1 = __decorate$61([
    NgModule({
        imports: [CompatibilityModule],
        exports: [
            MdProgressSpinner,
            MdSpinner,
            CompatibilityModule,
            MdProgressSpinnerCssMatStyler,
            MdProgressCircleCssMatStyler
        ],
        declarations: [
            MdProgressSpinner,
            MdSpinner,
            MdProgressSpinnerCssMatStyler,
            MdProgressCircleCssMatStyler
        ],
    }), 
    __metadata$61('design:paramtypes', [])
], MdProgressSpinnerModule);

var __decorate$64 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$64 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// TODO(josephperrott): Benchpress tests.
// TODO(josephperrott): Add ARIA attributes for progressbar "for".
/**
 * <md-progress-bar> component.
 */
let MdProgressBar = class MdProgressBar {
    constructor() {
        /** Color of the progress bar. */
        this.color = 'primary';
        this._value = 0;
        this._bufferValue = 0;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */
        this.mode = 'determinate';
    }
    /** Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow. */
    get value() { return this._value; }
    set value(v) { this._value = clamp$1(v || 0); }
    /** Buffer value of the progress bar. Defaults to zero. */
    get bufferValue() { return this._bufferValue; }
    set bufferValue(v) { this._bufferValue = clamp$1(v || 0); }
    /** Gets the current transform value for the progress bar's primary indicator. */
    _primaryTransform() {
        let scale = this.value / 100;
        return { transform: `scaleX(${scale})` };
    }
    /**
     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     */
    _bufferTransform() {
        if (this.mode == 'buffer') {
            let scale = this.bufferValue / 100;
            return { transform: `scaleX(${scale})` };
        }
    }
};
__decorate$64([
    Input(), 
    __metadata$64('design:type', Object)
], MdProgressBar.prototype, "color", void 0);
__decorate$64([
    Input(),
    HostBinding('attr.aria-valuenow'), 
    __metadata$64('design:type', Object)
], MdProgressBar.prototype, "value", null);
__decorate$64([
    Input(), 
    __metadata$64('design:type', Object)
], MdProgressBar.prototype, "bufferValue", null);
__decorate$64([
    Input(),
    HostBinding('attr.mode'), 
    __metadata$64('design:type', Object)
], MdProgressBar.prototype, "mode", void 0);
MdProgressBar = __decorate$64([
    Component({selector: 'md-progress-bar, mat-progress-bar',
        host: {
            'role': 'progressbar',
            'aria-valuemin': '0',
            'aria-valuemax': '100',
            '[class.mat-primary]': 'color == "primary"',
            '[class.mat-accent]': 'color == "accent"',
            '[class.mat-warn]': 'color == "warn"',
            '[class.mat-progress-bar]': 'true',
        },
        template: "<div class=\"mat-progress-bar-background mat-progress-bar-element\"></div><div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div><div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\"></div><div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>",
        styles: [":host{display:block;height:5px;overflow:hidden;position:relative;transform:translateZ(0);transition:opacity 250ms linear;width:100%}:host .mat-progress-bar-element,:host .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}:host .mat-progress-bar-background{background-repeat:repeat-x;background-size:10px 4px;display:none}:host .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease,stroke .3s cubic-bezier(.35,0,.25,1)}:host .mat-progress-bar-secondary{display:none}:host .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease,stroke .3s cubic-bezier(.35,0,.25,1)}:host .mat-progress-bar-fill::after{animation:none;content:'';display:inline-block;left:0}:host[mode=query]{transform:rotateZ(180deg)}:host[mode=indeterminate] .mat-progress-bar-fill,:host[mode=query] .mat-progress-bar-fill{transition:none}:host[mode=indeterminate] .mat-progress-bar-primary,:host[mode=query] .mat-progress-bar-primary{animation:mat-progress-bar-primary-indeterminate-translate 2s infinite linear;left:-145.166611%}:host[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,:host[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{animation:mat-progress-bar-primary-indeterminate-scale 2s infinite linear}:host[mode=indeterminate] .mat-progress-bar-secondary,:host[mode=query] .mat-progress-bar-secondary{animation:mat-progress-bar-secondary-indeterminate-translate 2s infinite linear;left:-54.888891%;display:block}:host[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,:host[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{animation:mat-progress-bar-secondary-indeterminate-scale 2s infinite linear}:host[mode=buffer] .mat-progress-bar-background{animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}:host-context([dir=rtl]){transform:rotateY(180deg)}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-10px)}} /*# sourceMappingURL=progress-bar.css.map */ "],
        changeDetection: ChangeDetectionStrategy.OnPush,
    }), 
    __metadata$64('design:paramtypes', [])
], MdProgressBar);
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp$1(v, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}

var __decorate$63 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$63 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdProgressBarModule_1 = class MdProgressBarModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdProgressBarModule_1,
            providers: []
        };
    }
};
let MdProgressBarModule = MdProgressBarModule_1;
MdProgressBarModule = MdProgressBarModule_1 = __decorate$63([
    NgModule({
        imports: [CommonModule, CompatibilityModule],
        exports: [MdProgressBar, CompatibilityModule],
        declarations: [MdProgressBar],
    }), 
    __metadata$63('design:paramtypes', [])
], MdProgressBarModule);

/** @docs-private */
class MdInputContainerPlaceholderConflictError extends MdError {
    constructor() {
        super('Placeholder attribute and child element were both specified.');
    }
}
/** @docs-private */
class MdInputContainerUnsupportedTypeError extends MdError {
    constructor(type) {
        super(`Input type "${type}" isn't supported by md-input-container.`);
    }
}
/** @docs-private */
class MdInputContainerDuplicatedHintError extends MdError {
    constructor(align) {
        super(`A hint was already declared for 'align="${align}"'.`);
    }
}
/** @docs-private */
class MdInputContainerMissingMdInputError extends MdError {
    constructor() {
        super('md-input-container must contain an mdInput directive. Did you forget to add mdInput ' +
            'to the native input or textarea element?');
    }
}

var __decorate$66 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$66 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$13 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Invalid input type. Using one of these will throw an MdInputContainerUnsupportedTypeError.
const MD_INPUT_INVALID_TYPES = [
    'button',
    'checkbox',
    'color',
    'file',
    'hidden',
    'image',
    'radio',
    'range',
    'reset',
    'submit'
];
let nextUniqueId$1 = 0;
/**
 * The placeholder directive. The content can declare this to implement more
 * complex placeholders.
 */
let MdPlaceholder = class MdPlaceholder {
};
MdPlaceholder = __decorate$66([
    Directive({
        selector: 'md-placeholder, mat-placeholder'
    }), 
    __metadata$66('design:paramtypes', [])
], MdPlaceholder);
/** The hint directive, used to tag content as hint labels (going under the input). */
let MdHint = class MdHint {
    constructor() {
        // Whether to align the hint label at the start or end of the line.
        this.align = 'start';
        // Unique ID for the hint. Used for the aria-describedby on the input.
        this.id = `md-input-hint-${nextUniqueId$1++}`;
    }
};
__decorate$66([
    Input(), 
    __metadata$66('design:type', Object)
], MdHint.prototype, "align", void 0);
__decorate$66([
    Input(), 
    __metadata$66('design:type', String)
], MdHint.prototype, "id", void 0);
MdHint = __decorate$66([
    Directive({
        selector: 'md-hint, mat-hint',
        host: {
            '[class.mat-hint]': 'true',
            '[class.mat-right]': 'align == "end"',
            '[attr.id]': 'id',
        }
    }), 
    __metadata$66('design:paramtypes', [])
], MdHint);
/** The input directive, used to mark the input that `MdInputContainer` is wrapping. */
let MdInputDirective = class MdInputDirective {
    constructor(_elementRef, _renderer, _ngControl) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._ngControl = _ngControl;
        /** Variables used as cache for getters and setters. */
        this._type = 'text';
        this._placeholder = '';
        this._disabled = false;
        this._required = false;
        /** Whether the element is focused or not. */
        this.focused = false;
        /**
         * Emits an event when the placeholder changes so that the `md-input-container` can re-validate.
         */
        this._placeholderChange = new EventEmitter();
        this._neverEmptyInputTypes = [
            'date',
            'datetime',
            'datetime-local',
            'month',
            'time',
            'week'
        ].filter(t => getSupportedInputTypes().has(t));
        // Force setter to be called in case id was not specified.
        this.id = this.id;
    }
    /** Whether the element is disabled. */
    get disabled() {
        return this._ngControl ? this._ngControl.disabled : this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    /** Unique id of the element. */
    get id() { return this._id; }
    ;
    set id(value) { this._id = value || this._uid; }
    /** Placeholder attribute of the element. */
    get placeholder() { return this._placeholder; }
    set placeholder(value) {
        if (this._placeholder !== value) {
            this._placeholder = value;
            this._placeholderChange.emit(this._placeholder);
        }
    }
    /** Whether the element is required. */
    get required() { return this._required; }
    set required(value) { this._required = coerceBooleanProperty(value); }
    /** Input type of the element. */
    get type() { return this._type; }
    set type(value) {
        this._type = value || 'text';
        this._validateType();
        // When using Angular inputs, developers are no longer able to set the properties on the native
        // input element. To ensure that bindings for `type` work, we need to sync the setter
        // with the native property. Textarea elements don't support the type property or attribute.
        if (!this._isTextarea() && getSupportedInputTypes().has(this._type)) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'type', this._type);
        }
    }
    /** The input element's value. */
    get value() { return this._elementRef.nativeElement.value; }
    set value(value) { this._elementRef.nativeElement.value = value; }
    get empty() {
        return !this._isNeverEmpty() &&
            (this.value == null || this.value === '') &&
            // Check if the input contains bad input. If so, we know that it only appears empty because
            // the value failed to parse. From the user's perspective it is not empty.
            // TODO(mmalerba): Add e2e test for bad input case.
            !this._isBadInput();
    }
    get _uid() { return this._cachedUid = this._cachedUid || `md-input-${nextUniqueId$1++}`; }
    /** Focuses the input element. */
    focus() { this._renderer.invokeElementMethod(this._elementRef.nativeElement, 'focus'); }
    _onFocus() { this.focused = true; }
    _onBlur() { this.focused = false; }
    _onInput() {
        // This is a noop function and is used to let Angular know whenever the value changes.
        // Angular will run a new change detection each time the `input` event has been dispatched.
        // It's necessary that Angular recognizes the value change, because when floatingLabel
        // is set to false and Angular forms aren't used, the placeholder won't recognize the
        // value changes and will not disappear.
        // Listening to the input event wouldn't be necessary when the input is using the
        // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
    }
    /** Make sure the input is a supported type. */
    _validateType() {
        if (MD_INPUT_INVALID_TYPES.indexOf(this._type) !== -1) {
            throw new MdInputContainerUnsupportedTypeError(this._type);
        }
    }
    _isNeverEmpty() { return this._neverEmptyInputTypes.indexOf(this._type) !== -1; }
    _isBadInput() {
        return this._elementRef.nativeElement.validity.badInput;
    }
    /** Determines if the component host is a textarea. If not recognizable it returns false. */
    _isTextarea() {
        let nativeElement = this._elementRef.nativeElement;
        return nativeElement ? nativeElement.nodeName.toLowerCase() === 'textarea' : false;
    }
};
__decorate$66([
    Input(), 
    __metadata$66('design:type', Object)
], MdInputDirective.prototype, "disabled", null);
__decorate$66([
    Input(), 
    __metadata$66('design:type', Object)
], MdInputDirective.prototype, "id", null);
__decorate$66([
    Input(), 
    __metadata$66('design:type', Object)
], MdInputDirective.prototype, "placeholder", null);
__decorate$66([
    Input(), 
    __metadata$66('design:type', Object)
], MdInputDirective.prototype, "required", null);
__decorate$66([
    Input(), 
    __metadata$66('design:type', Object)
], MdInputDirective.prototype, "type", null);
__decorate$66([
    Output(), 
    __metadata$66('design:type', Object)
], MdInputDirective.prototype, "_placeholderChange", void 0);
MdInputDirective = __decorate$66([
    Directive({
        selector: `input[mdInput], textarea[mdInput], input[matInput], textarea[matInput]`,
        host: {
            '[class.mat-input-element]': 'true',
            // Native input properties that are overwritten by Angular inputs need to be synced with
            // the native input element. Otherwise property bindings for those don't work.
            '[id]': 'id',
            '[placeholder]': 'placeholder',
            '[disabled]': 'disabled',
            '[required]': 'required',
            '[attr.aria-describedby]': 'ariaDescribedby',
            '(blur)': '_onBlur()',
            '(focus)': '_onFocus()',
            '(input)': '_onInput()',
        }
    }),
    __param$13(2, Optional()), 
    __metadata$66('design:paramtypes', [ElementRef, Renderer, NgControl])
], MdInputDirective);
/**
 * Component that represents a text input. It encapsulates the <input> HTMLElement and
 * improve on its behaviour, along with styling it according to the Material Design.
 */
let MdInputContainer = class MdInputContainer {
    constructor() {
        /** Alignment of the input container's content. */
        this.align = 'start';
        /** Color of the input divider, based on the theme. */
        this.dividerColor = 'primary';
        this._hintLabel = '';
        // Unique id for the hint label.
        this._hintLabelId = `md-input-hint-${nextUniqueId$1++}`;
        this._floatPlaceholder = 'auto';
    }
    /** Whether the floating label should always float or not. */
    get _shouldAlwaysFloat() { return this._floatPlaceholder === 'always'; }
    ;
    /** Whether the placeholder can float or not. */
    get _canPlaceholderFloat() { return this._floatPlaceholder !== 'never'; }
    /** Text for the input hint. */
    get hintLabel() { return this._hintLabel; }
    set hintLabel(value) {
        this._hintLabel = value;
        this._processHints();
    }
    /** Whether the placeholder should always float, never float or float as the user types. */
    get floatPlaceholder() { return this._floatPlaceholder; }
    set floatPlaceholder(value) {
        this._floatPlaceholder = value || 'auto';
    }
    ngAfterContentInit() {
        if (!this._mdInputChild) {
            throw new MdInputContainerMissingMdInputError();
        }
        this._processHints();
        this._validatePlaceholders();
        // Re-validate when things change.
        this._hintChildren.changes.subscribe(() => this._processHints());
        this._mdInputChild._placeholderChange.subscribe(() => this._validatePlaceholders());
    }
    /** Determines whether a class from the NgControl should be forwarded to the host element. */
    _shouldForward(prop) {
        let control = this._mdInputChild ? this._mdInputChild._ngControl : null;
        return control && control[prop];
    }
    /** Whether the input has a placeholder. */
    _hasPlaceholder() { return !!(this._mdInputChild.placeholder || this._placeholderChild); }
    /** Focuses the underlying input. */
    _focusInput() { this._mdInputChild.focus(); }
    /**
     * Ensure that there is only one placeholder (either `input` attribute or child element with the
     * `md-placeholder` attribute.
     */
    _validatePlaceholders() {
        if (this._mdInputChild.placeholder && this._placeholderChild) {
            throw new MdInputContainerPlaceholderConflictError();
        }
    }
    /**
     * Does any extra processing that is required when handling the hints.
     */
    _processHints() {
        this._validateHints();
        this._syncAriaDescribedby();
    }
    /**
     * Ensure that there is a maximum of one of each `<md-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     */
    _validateHints() {
        if (this._hintChildren) {
            let startHint = null;
            let endHint = null;
            this._hintChildren.forEach((hint) => {
                if (hint.align == 'start') {
                    if (startHint || this.hintLabel) {
                        throw new MdInputContainerDuplicatedHintError('start');
                    }
                    startHint = hint;
                }
                else if (hint.align == 'end') {
                    if (endHint) {
                        throw new MdInputContainerDuplicatedHintError('end');
                    }
                    endHint = hint;
                }
            });
        }
    }
    /**
     * Sets the child input's `aria-describedby` to a space-separated list of the ids
     * of the currently-specified hints, as well as a generated id for the hint label.
     */
    _syncAriaDescribedby() {
        let ids = [];
        let startHint = this._hintChildren ?
            this._hintChildren.find(hint => hint.align === 'start') : null;
        let endHint = this._hintChildren ?
            this._hintChildren.find(hint => hint.align === 'end') : null;
        if (startHint) {
            ids.push(startHint.id);
        }
        else if (this._hintLabel) {
            ids.push(this._hintLabelId);
        }
        if (endHint) {
            ids.push(endHint.id);
        }
        this._mdInputChild.ariaDescribedby = ids.join(' ');
    }
};
__decorate$66([
    Input(), 
    __metadata$66('design:type', Object)
], MdInputContainer.prototype, "align", void 0);
__decorate$66([
    Input(), 
    __metadata$66('design:type', Object)
], MdInputContainer.prototype, "dividerColor", void 0);
__decorate$66([
    Input(), 
    __metadata$66('design:type', Object)
], MdInputContainer.prototype, "hintLabel", null);
__decorate$66([
    Input(), 
    __metadata$66('design:type', Object)
], MdInputContainer.prototype, "floatPlaceholder", null);
__decorate$66([
    ContentChild(MdInputDirective), 
    __metadata$66('design:type', MdInputDirective)
], MdInputContainer.prototype, "_mdInputChild", void 0);
__decorate$66([
    ContentChild(MdPlaceholder), 
    __metadata$66('design:type', MdPlaceholder)
], MdInputContainer.prototype, "_placeholderChild", void 0);
__decorate$66([
    ContentChildren(MdHint), 
    __metadata$66('design:type', QueryList)
], MdInputContainer.prototype, "_hintChildren", void 0);
MdInputContainer = __decorate$66([
    Component({selector: 'md-input-container, mat-input-container',
        template: "<div class=\"mat-input-wrapper\"><div class=\"mat-input-table\"><div class=\"mat-input-prefix\"><ng-content select=\"[mdPrefix], [matPrefix], [md-prefix]\"></ng-content></div><div class=\"mat-input-infix\" [class.mat-end]=\"align == 'end'\"><ng-content selector=\"input, textarea\"></ng-content><span class=\"mat-input-placeholder-wrapper\"><label class=\"mat-input-placeholder\" [attr.for]=\"_mdInputChild.id\" [class.mat-empty]=\"_mdInputChild.empty && !_shouldAlwaysFloat\" [class.mat-float]=\"_canPlaceholderFloat\" [class.mat-accent]=\"dividerColor == 'accent'\" [class.mat-warn]=\"dividerColor == 'warn'\" *ngIf=\"_hasPlaceholder()\"><ng-content select=\"md-placeholder, mat-placeholder\"></ng-content>{{_mdInputChild.placeholder}} <span class=\"mat-placeholder-required\" *ngIf=\"_mdInputChild.required\">*</span></label></span></div><div class=\"mat-input-suffix\"><ng-content select=\"[mdSuffix], [matSuffix], [md-suffix]\"></ng-content></div></div><div class=\"mat-input-underline\" [class.mat-disabled]=\"_mdInputChild.disabled\"><span class=\"mat-input-ripple\" [class.mat-accent]=\"dividerColor == 'accent'\" [class.mat-warn]=\"dividerColor == 'warn'\"></span></div><div *ngIf=\"hintLabel != ''\" [attr.id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div><ng-content select=\"md-hint, mat-hint\"></ng-content></div>",
        styles: [".mat-input-container{display:inline-block;position:relative;font-family:Roboto,\"Helvetica Neue\",sans-serif;line-height:normal;text-align:left}[dir=rtl] .mat-input-container{text-align:right}.mat-input-container .mat-icon{width:auto;height:auto;font-size:100%;vertical-align:top}.mat-input-wrapper{margin:1em 0;padding-bottom:6px}.mat-input-table{display:inline-table;flex-flow:column;vertical-align:bottom;width:100%}.mat-input-table>*{display:table-cell}.mat-input-infix{position:relative}.mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;width:100%}.mat-end .mat-input-element{text-align:right}[dir=rtl] .mat-end .mat-input-element{text-align:left}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element:-webkit-autofill+.mat-input-placeholder-wrapper .mat-float{display:block;transform:translateY(-1.35em) scale(.75);width:133.33333%}.mat-input-element::placeholder{color:transparent}.mat-input-element::-moz-placeholder{color:transparent}.mat-input-element::-webkit-input-placeholder{color:transparent}.mat-input-element:-ms-input-placeholder{color:transparent}.mat-input-placeholder{position:absolute;left:0;top:0;font-size:100%;pointer-events:none;z-index:1;padding-top:1em;width:100%;display:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform:translateY(0);transform-origin:bottom left;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1)}.mat-input-placeholder.mat-empty{display:block;cursor:text}.mat-focused .mat-input-placeholder.mat-float,.mat-input-placeholder.mat-float:not(.mat-empty){display:block;transform:translateY(-1.35em) scale(.75);width:133.33333%}[dir=rtl] .mat-input-placeholder{transform-origin:bottom right;left:auto;right:0}.mat-input-placeholder-wrapper{position:absolute;left:0;top:-1em;width:100%;padding-top:1em;overflow:hidden;pointer-events:none;transform:translate3d(0,0,0)}.mat-input-placeholder-wrapper::after{content:'';display:inline-table}.mat-input-underline{position:absolute;height:1px;width:100%;margin-top:4px;border-top-width:1px;border-top-style:solid}.mat-input-underline.mat-disabled{background-image:linear-gradient(to right,rgba(0,0,0,.26) 0,rgba(0,0,0,.26) 33%,transparent 0);background-size:4px 1px;background-repeat:repeat-x;border-top:0;background-position:0}.mat-input-underline .mat-input-ripple{position:absolute;height:2px;z-index:1;top:-1px;width:100%;transform-origin:top;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-focused .mat-input-underline .mat-input-ripple{opacity:1}.mat-hint{display:block;position:absolute;font-size:75%;bottom:0}.mat-hint.mat-right{right:0}[dir=rtl] .mat-hint{right:0;left:auto}[dir=rtl] .mat-hint.mat-right{right:auto;left:0}.mat-input-prefix,.mat-input-suffix{width:.1px;white-space:nowrap} /*# sourceMappingURL=input-container.css.map */ "],
        host: {
            // Remove align attribute to prevent it from interfering with layout.
            '[attr.align]': 'null',
            '[class.mat-input-container]': 'true',
            '[class.mat-focused]': '_mdInputChild.focused',
            '[class.ng-untouched]': '_shouldForward("untouched")',
            '[class.ng-touched]': '_shouldForward("touched")',
            '[class.ng-pristine]': '_shouldForward("pristine")',
            '[class.ng-dirty]': '_shouldForward("dirty")',
            '[class.ng-valid]': '_shouldForward("valid")',
            '[class.ng-invalid]': '_shouldForward("invalid")',
            '[class.ng-pending]': '_shouldForward("pending")',
            '(click)': '_focusInput()',
        },
        encapsulation: ViewEncapsulation.None,
    }), 
    __metadata$66('design:paramtypes', [])
], MdInputContainer);

var __decorate$67 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$67 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Directive to automatically resize a textarea to fit its content.
 */
let MdTextareaAutosize = class MdTextareaAutosize {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    get mdAutosizeMinRows() {
        return this.minRows;
    }
    set mdAutosizeMinRows(value) {
        this.minRows = value;
    }
    get mdAutosizeMaxRows() {
        return this.maxRows;
    }
    set mdAutosizeMaxRows(value) {
        this.maxRows = value;
    }
    /** The minimum height of the textarea as determined by minRows. */
    get _minHeight() {
        return this.minRows ? `${this.minRows * this._cachedLineHeight}px` : null;
    }
    /** The maximum height of the textarea as determined by maxRows. */
    get _maxHeight() {
        return this.maxRows ? `${this.maxRows * this._cachedLineHeight}px` : null;
    }
    ngOnInit() {
        this._cacheTextareaLineHeight();
        this.resizeToFitContent();
    }
    /**
     * Cache the height of a single-row textarea.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */
    _cacheTextareaLineHeight() {
        let textarea = this._elementRef.nativeElement;
        // Use a clone element because we have to override some styles.
        let textareaClone = textarea.cloneNode(false);
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        textarea.parentNode.appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.offsetHeight;
        textarea.parentNode.removeChild(textareaClone);
    }
    /** Resize the textarea to fit its content. */
    resizeToFitContent() {
        let textarea = this._elementRef.nativeElement;
        // Reset the textarea height to auto in order to shrink back to its default size.
        textarea.style.height = 'auto';
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = `${textarea.scrollHeight}px`;
    }
};
__decorate$67([
    Input(), 
    __metadata$67('design:type', Number)
], MdTextareaAutosize.prototype, "minRows", void 0);
__decorate$67([
    Input(), 
    __metadata$67('design:type', Number)
], MdTextareaAutosize.prototype, "mdAutosizeMinRows", null);
__decorate$67([
    Input(), 
    __metadata$67('design:type', Number)
], MdTextareaAutosize.prototype, "maxRows", void 0);
__decorate$67([
    Input(), 
    __metadata$67('design:type', Number)
], MdTextareaAutosize.prototype, "mdAutosizeMaxRows", null);
MdTextareaAutosize = __decorate$67([
    Directive({
        selector: 'textarea[md-autosize], textarea[mdTextareaAutosize],' +
            'textarea[mat-autosize], textarea[matTextareaAutosize]',
        exportAs: 'mdTextareaAutosize',
        host: {
            '(input)': 'resizeToFitContent()',
            '[style.min-height]': '_minHeight',
            '[style.max-height]': '_maxHeight',
        },
    }), 
    __metadata$67('design:paramtypes', [ElementRef])
], MdTextareaAutosize);

var __decorate$65 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$65 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdInputModule_1 = class MdInputModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdInputModule_1,
            providers: [],
        };
    }
};
let MdInputModule = MdInputModule_1;
MdInputModule = MdInputModule_1 = __decorate$65([
    NgModule({
        declarations: [
            MdPlaceholder,
            MdInputContainer,
            MdHint,
            MdTextareaAutosize,
            MdInputDirective
        ],
        imports: [
            CommonModule,
            FormsModule,
            PlatformModule,
        ],
        exports: [
            MdPlaceholder,
            MdInputContainer,
            MdHint,
            MdTextareaAutosize,
            MdInputDirective
        ],
    }), 
    __metadata$65('design:paramtypes', [])
], MdInputModule);

/**
 * Configuration used when opening a snack-bar.
 */
class MdSnackBarConfig {
    constructor() {
        /** The politeness level for the MdAriaLiveAnnouncer announcement. */
        this.politeness = 'assertive';
        /** Message to be announced by the MdAriaLiveAnnouncer */
        this.announcementMessage = '';
        /** The view container to place the overlay for the snack bar into. */
        this.viewContainerRef = null;
        /** The length of time in milliseconds to wait before automatically dismissing the snack bar. */
        this.duration = 0;
    }
}

// TODO(josephperrott): Implement onAction observable.
/**
 * Reference to a snack bar dispatched from the snack bar service.
 */
class MdSnackBarRef {
    constructor(instance, containerInstance, _overlayRef) {
        this._overlayRef = _overlayRef;
        /** Subject for notifying the user that the snack bar has closed. */
        this._afterClosed = new Subject();
        /** Subject for notifying the user that the snack bar action was called. */
        this._onAction = new Subject();
        // Sets the readonly instance of the snack bar content component.
        this._instance = instance;
        this.containerInstance = containerInstance;
        // Dismiss snackbar on action.
        this.onAction().subscribe(() => this.dismiss());
        containerInstance._onExit().subscribe(() => this._finishDismiss());
    }
    /** The instance of the component making up the content of the snack bar. */
    get instance() {
        return this._instance;
    }
    /** Dismisses the snack bar. */
    dismiss() {
        if (!this._afterClosed.closed) {
            this.containerInstance.exit();
        }
    }
    /** Marks the snackbar action clicked. */
    _action() {
        if (!this._onAction.closed) {
            this._onAction.next();
            this._onAction.complete();
        }
    }
    /** Marks the snackbar as opened */
    _open() {
        if (!this._afterOpened.closed) {
            this._afterOpened.next();
            this._afterOpened.complete();
        }
    }
    /** Cleans up the DOM after closing. */
    _finishDismiss() {
        this._overlayRef.dispose();
        this._afterClosed.next();
        this._afterClosed.complete();
    }
    /** Gets an observable that is notified when the snack bar is finished closing. */
    afterDismissed() {
        return this._afterClosed.asObservable();
    }
    /** Gets an observable that is notified when the snack bar has opened and appeared. */
    afterOpened() {
        return this.containerInstance._onEnter();
    }
    /** Gets an observable that is notified when the snack bar action is called. */
    onAction() {
        return this._onAction.asObservable();
    }
}

/**
 * Error that is thrown when attempting to attach a snack bar that is already attached.
 * @docs-private
 */
class MdSnackBarContentAlreadyAttached extends MdError {
    constructor() {
        super('Attempting to attach snack bar content after content is already attached');
    }
}

var __decorate$70 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$70 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// TODO(jelbourn): we can't use constants from animation.ts here because you can't use
// a text interpolation in anything that is analyzed statically with ngc (for AoT compile).
const SHOW_ANIMATION = '225ms cubic-bezier(0.4,0.0,1,1)';
const HIDE_ANIMATION = '195ms cubic-bezier(0.0,0.0,0.2,1)';
/**
 * Internal component that wraps user-provided snack bar content.
 * @docs-private
 */
let MdSnackBarContainer = class MdSnackBarContainer extends BasePortalHost {
    constructor(_ngZone, _renderer, _elementRef) {
        super();
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** Subject for notifying that the snack bar has exited from view. */
        this.onExit = new Subject();
        /** Subject for notifying that the snack bar has finished entering the view. */
        this.onEnter = new Subject();
        /** The state of the snack bar animations. */
        this.animationState = 'initial';
    }
    /** Attach a component portal as content to this snack bar container. */
    attachComponentPortal(portal) {
        if (this._portalHost.hasAttached()) {
            throw new MdSnackBarContentAlreadyAttached();
        }
        if (this.snackBarConfig.extraClasses) {
            // Not the most efficient way of adding classes, but the renderer doesn't allow us
            // to pass in an array or a space-separated list.
            for (let cssClass of this.snackBarConfig.extraClasses) {
                this._renderer.setElementClass(this._elementRef.nativeElement, cssClass, true);
            }
        }
        return this._portalHost.attachComponentPortal(portal);
    }
    /** Attach a template portal as content to this snack bar container. */
    attachTemplatePortal(portal) {
        throw Error('Not yet implemented');
    }
    /** Handle end of animations, updating the state of the snackbar. */
    onAnimationEnd(event) {
        if (event.toState === 'void' || event.toState === 'complete') {
            this._completeExit();
        }
        if (event.toState === 'visible') {
            this._ngZone.run(() => {
                this.onEnter.next();
                this.onEnter.complete();
            });
        }
    }
    /** Begin animation of snack bar entrance into view. */
    enter() {
        this.animationState = 'visible';
    }
    /** Returns an observable resolving when the enter animation completes.  */
    _onEnter() {
        this.animationState = 'visible';
        return this.onEnter.asObservable();
    }
    /** Begin animation of the snack bar exiting from view. */
    exit() {
        this.animationState = 'complete';
        return this._onExit();
    }
    /** Returns an observable that completes after the closing animation is done. */
    _onExit() {
        return this.onExit.asObservable();
    }
    /**
     * Makes sure the exit callbacks have been invoked when the element is destroyed.
     */
    ngOnDestroy() {
        this._completeExit();
    }
    /**
     * Waits for the zone to settle before removing the element. Helps prevent
     * errors where we end up removing an element which is in the middle of an animation.
     */
    _completeExit() {
        this._ngZone.onMicrotaskEmpty.first().subscribe(() => {
            this.onExit.next();
            this.onExit.complete();
        });
    }
};
__decorate$70([
    ViewChild(PortalHostDirective), 
    __metadata$70('design:type', PortalHostDirective)
], MdSnackBarContainer.prototype, "_portalHost", void 0);
MdSnackBarContainer = __decorate$70([
    Component({selector: 'snack-bar-container',
        template: "<template cdkPortalHost></template>",
        styles: [":host{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);background:#323232;border-radius:2px;box-sizing:content-box;display:block;height:20px;max-width:568px;min-width:288px;overflow:hidden;padding:14px 24px;transform:translateY(100%)}@media screen and (-ms-high-contrast:active){:host{border:solid 1px}} /*# sourceMappingURL=snack-bar-container.css.map */ "],
        host: {
            'role': 'alert',
            '[@state]': 'animationState',
            '(@state.done)': 'onAnimationEnd($event)'
        },
        animations: [
            trigger('state', [
                state('initial', style({ transform: 'translateY(100%)' })),
                state('visible', style({ transform: 'translateY(0%)' })),
                state('complete', style({ transform: 'translateY(100%)' })),
                transition('visible => complete', animate(HIDE_ANIMATION)),
                transition('initial => visible, void => visible', animate(SHOW_ANIMATION)),
            ])
        ],
    }), 
    __metadata$70('design:paramtypes', [NgZone, Renderer, ElementRef])
], MdSnackBarContainer);

var __decorate$71 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$71 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * A component used to open as the default snack bar, matching material spec.
 * This should only be used internally by the snack bar service.
 */
let SimpleSnackBar = class SimpleSnackBar {
    /** Dismisses the snack bar. */
    dismiss() {
        this.snackBarRef._action();
    }
    /** If the action button should be shown. */
    get hasAction() { return !!this.action; }
};
SimpleSnackBar = __decorate$71([
    Component({selector: 'simple-snack-bar',
        template: "<span class=\"mat-simple-snackbar-message\">{{message}}</span> <button class=\"mat-simple-snackbar-action\" *ngIf=\"hasAction\" (click)=\"dismiss()\">{{action}}</button>",
        styles: [":host{display:flex;justify-content:space-between;color:#fff;line-height:20px;font-size:14px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar-message{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-simple-snackbar-action{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;background:0 0;margin:-5px 0 0;padding:5px;text-transform:uppercase;color:inherit;line-height:inherit;flex-shrink:0;font-family:inherit;font-size:inherit;font-weight:600} /*# sourceMappingURL=simple-snack-bar.css.map */ "],
        host: {
            '[class.mat-simple-snackbar]': 'true',
        }
    }), 
    __metadata$71('design:paramtypes', [])
], SimpleSnackBar);

/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param dest The object which will have properties copied to it.
 * @param sources The source objects from which properties will be copied.
 */
function extendObject(dest, ...sources) {
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (let source of sources) {
        if (source != null) {
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

var __decorate$69 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$69 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$14 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Service to dispatch Material Design snack bar messages.
 */
let MdSnackBar = class MdSnackBar {
    constructor(_overlay, _live, _parentSnackBar) {
        this._overlay = _overlay;
        this._live = _live;
        this._parentSnackBar = _parentSnackBar;
    }
    /** Reference to the currently opened snackbar at *any* level. */
    get _openedSnackBarRef() {
        return this._parentSnackBar ?
            this._parentSnackBar._openedSnackBarRef : this._snackBarRefAtThisLevel;
    }
    set _openedSnackBarRef(value) {
        if (this._parentSnackBar) {
            this._parentSnackBar._openedSnackBarRef = value;
        }
        else {
            this._snackBarRefAtThisLevel = value;
        }
    }
    /**
     * Creates and dispatches a snack bar with a custom component for the content, removing any
     * currently opened snack bars.
     *
     * @param component Component to be instantiated.
     * @param config Extra configuration for the snack bar.
     */
    openFromComponent(component, config) {
        config = _applyConfigDefaults(config);
        let overlayRef = this._createOverlay();
        let snackBarContainer = this._attachSnackBarContainer(overlayRef, config);
        let snackBarRef = this._attachSnackbarContent(component, snackBarContainer, overlayRef);
        // When the snackbar is dismissed, clear the reference to it.
        snackBarRef.afterDismissed().subscribe(() => {
            // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
            if (this._openedSnackBarRef == snackBarRef) {
                this._openedSnackBarRef = null;
            }
        });
        // If a snack bar is already in view, dismiss it and enter the new snack bar after exit
        // animation is complete.
        if (this._openedSnackBarRef) {
            this._openedSnackBarRef.afterDismissed().subscribe(() => {
                snackBarRef.containerInstance.enter();
            });
            this._openedSnackBarRef.dismiss();
        }
        else {
            snackBarRef.containerInstance.enter();
        }
        // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.
        if (config.duration > 0) {
            snackBarRef.afterOpened().subscribe(() => {
                setTimeout(() => snackBarRef.dismiss(), config.duration);
            });
        }
        this._live.announce(config.announcementMessage, config.politeness);
        this._openedSnackBarRef = snackBarRef;
        return this._openedSnackBarRef;
    }
    /**
     * Opens a snackbar with a message and an optional action.
     * @param message The message to show in the snackbar.
     * @param action The label for the snackbar action.
     * @param config Additional configuration options for the snackbar.
     */
    open(message, action = '', config = {}) {
        config.announcementMessage = message;
        let simpleSnackBarRef = this.openFromComponent(SimpleSnackBar, config);
        simpleSnackBarRef.instance.snackBarRef = simpleSnackBarRef;
        simpleSnackBarRef.instance.message = message;
        simpleSnackBarRef.instance.action = action;
        return simpleSnackBarRef;
    }
    /**
     * Dismisses the currently-visible snack bar.
     */
    dismiss() {
        if (this._openedSnackBarRef) {
            this._openedSnackBarRef.dismiss();
        }
    }
    /**
     * Attaches the snack bar container component to the overlay.
     */
    _attachSnackBarContainer(overlayRef, config) {
        let containerPortal = new ComponentPortal(MdSnackBarContainer, config.viewContainerRef);
        let containerRef = overlayRef.attach(containerPortal);
        containerRef.instance.snackBarConfig = config;
        return containerRef.instance;
    }
    /**
     * Places a new component as the content of the snack bar container.
     */
    _attachSnackbarContent(component, container, overlayRef) {
        let portal = new ComponentPortal(component);
        let contentRef = container.attachComponentPortal(portal);
        return new MdSnackBarRef(contentRef.instance, container, overlayRef);
    }
    /**
     * Creates a new overlay and places it in the correct location.
     */
    _createOverlay() {
        let state$$1 = new OverlayState();
        state$$1.positionStrategy = this._overlay.position().global()
            .centerHorizontally()
            .bottom('0');
        return this._overlay.create(state$$1);
    }
};
MdSnackBar = __decorate$69([
    Injectable(),
    __param$14(2, Optional()),
    __param$14(2, SkipSelf()), 
    __metadata$69('design:paramtypes', [Overlay, LiveAnnouncer, MdSnackBar])
], MdSnackBar);
/**
 * Applies default options to the snackbar config.
 * @param config The configuration to which the defaults will be applied.
 * @returns The new configuration object with defaults applied.
 */
function _applyConfigDefaults(config) {
    return extendObject(new MdSnackBarConfig(), config);
}

var __decorate$68 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$68 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdSnackBarModule_1 = class MdSnackBarModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdSnackBarModule_1,
            providers: []
        };
    }
};
let MdSnackBarModule = MdSnackBarModule_1;
MdSnackBarModule = MdSnackBarModule_1 = __decorate$68([
    NgModule({
        imports: [OverlayModule, PortalModule, CommonModule, CompatibilityModule],
        exports: [MdSnackBarContainer, CompatibilityModule],
        declarations: [MdSnackBarContainer, SimpleSnackBar],
        entryComponents: [MdSnackBarContainer, SimpleSnackBar],
        providers: [MdSnackBar, LIVE_ANNOUNCER_PROVIDER]
    }), 
    __metadata$68('design:paramtypes', [])
], MdSnackBarModule);

var __decorate$74 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$74 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Used to flag tab labels for use with the portal directive */
let MdTabLabel = class MdTabLabel extends TemplatePortalDirective {
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
};
MdTabLabel = __decorate$74([
    Directive({
        selector: '[md-tab-label], [mat-tab-label]',
    }), 
    __metadata$74('design:paramtypes', [TemplateRef, ViewContainerRef])
], MdTabLabel);

var __decorate$73 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$73 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdTab = class MdTab {
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        /** The plain text label for the tab, used when there is no template label. */
        this.textLabel = '';
        /** The portal that will be the hosted content of the tab */
        this._contentPortal = null;
        /**
         * The relatively indexed position where 0 represents the center, negative is left, and positive
         * represents the right.
         */
        this.position = null;
        /**
         * The initial relatively index origin of the tab if it was created and selected after there
         * was already a selected tab. Provides context of what position the tab should originate from.
         */
        this.origin = null;
        this._disabled = false;
    }
    get content() { return this._contentPortal; }
    /** Whether the tab is disabled */
    set disabled(value) { this._disabled = coerceBooleanProperty(value); }
    get disabled() { return this._disabled; }
    ngOnInit() {
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    }
};
__decorate$73([
    ContentChild(MdTabLabel), 
    __metadata$73('design:type', MdTabLabel)
], MdTab.prototype, "templateLabel", void 0);
__decorate$73([
    ViewChild(TemplateRef), 
    __metadata$73('design:type', TemplateRef)
], MdTab.prototype, "_content", void 0);
__decorate$73([
    Input('label'), 
    __metadata$73('design:type', String)
], MdTab.prototype, "textLabel", void 0);
__decorate$73([
    Input(), 
    __metadata$73('design:type', Boolean), 
    __metadata$73('design:paramtypes', [Boolean])
], MdTab.prototype, "disabled", null);
MdTab = __decorate$73([
    Component({selector: 'md-tab, mat-tab',
        template: "<template><ng-content></ng-content></template>",
    }), 
    __metadata$73('design:paramtypes', [ViewContainerRef])
], MdTab);

var __decorate$75 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$75 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Used to generate unique ID's for each tab component */
let nextId$2 = 0;
/** A simple change event emitted on focus or selection changes. */
class MdTabChangeEvent {
}
/**
 * Material design tab-group component.  Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://www.google.com/design/spec/components/tabs.html
 */
let MdTabGroup = class MdTabGroup {
    constructor(_renderer) {
        this._renderer = _renderer;
        /** Whether this component has been initialized. */
        this._isInitialized = false;
        /** The tab index that should be selected after the content has been checked. */
        this._indexToSelect = 0;
        /** Snapshot of the height of the tab body wrapper before another tab is activated. */
        this._tabBodyWrapperHeight = null;
        /** Whether the tab group should grow to the size of the active tab */
        this._dynamicHeight = false;
        this._selectedIndex = null;
        /** Position of the tab header. */
        this.headerPosition = 'above';
        this._onFocusChange = new EventEmitter();
        this._onSelectChange = new EventEmitter(true);
        this._groupId = nextId$2++;
    }
    get dynamicHeight() { return this._dynamicHeight; }
    set dynamicHeight(value) { this._dynamicHeight = coerceBooleanProperty(value); }
    /** @deprecated */
    get _dynamicHeightDeprecated() { return this._dynamicHeight; }
    set _dynamicHeightDeprecated(value) { this._dynamicHeight = value; }
    /** The index of the active tab. */
    set selectedIndex(value) { this._indexToSelect = value; }
    get selectedIndex() { return this._selectedIndex; }
    /** Output to enable support for two-way binding on `selectedIndex`. */
    get selectedIndexChange() {
        return this.selectChange.map(event => event.index);
    }
    /** Event emitted when focus has changed within a tab group. */
    get focusChange() {
        return this._onFocusChange.asObservable();
    }
    /** Event emitted when the tab selection has changed. */
    get selectChange() {
        return this._onSelectChange.asObservable();
    }
    /**
     * After the content is checked, this component knows what tabs have been defined
     * and what the selected index should be. This is where we can know exactly what position
     * each tab should be in according to the new selected index, and additionally we know how
     * a new selected tab should transition in (from the left or right).
     */
    ngAfterContentChecked() {
        // Clamp the next selected index to the bounds of 0 and the tabs length. Note the `|| 0`, which
        // ensures that values like NaN can't get through and which would otherwise throw the
        // component into an infinite loop (since Math.max(NaN, 0) === NaN).
        this._indexToSelect =
            Math.min(this._tabs.length - 1, Math.max(this._indexToSelect || 0, 0));
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this._selectedIndex != this._indexToSelect && this._selectedIndex != null) {
            this._onSelectChange.emit(this._createChangeEvent(this._indexToSelect));
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this._tabs.forEach((tab, index) => {
            tab.position = index - this._indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
                tab.origin = this._indexToSelect - this._selectedIndex;
            }
        });
        this._selectedIndex = this._indexToSelect;
    }
    /**
     * Waits one frame for the view to update, then updates the ink bar
     * Note: This must be run outside of the zone or it will create an infinite change detection loop.
     */
    ngAfterViewChecked() {
        this._isInitialized = true;
    }
    _focusChanged(index) {
        this._onFocusChange.emit(this._createChangeEvent(index));
    }
    _createChangeEvent(index) {
        const event = new MdTabChangeEvent;
        event.index = index;
        if (this._tabs && this._tabs.length) {
            event.tab = this._tabs.toArray()[index];
        }
        return event;
    }
    /** Returns a unique id for each tab label element */
    _getTabLabelId(i) {
        return `md-tab-label-${this._groupId}-${i}`;
    }
    /** Returns a unique id for each tab content element */
    _getTabContentId(i) {
        return `md-tab-content-${this._groupId}-${i}`;
    }
    /**
     * Sets the height of the body wrapper to the height of the activating tab if dynamic
     * height property is true.
     */
    _setTabBodyWrapperHeight(tabHeight) {
        if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
            return;
        }
        this._renderer.setElementStyle(this._tabBodyWrapper.nativeElement, 'height', this._tabBodyWrapperHeight + 'px');
        // This conditional forces the browser to paint the height so that
        // the animation to the new height can have an origin.
        if (this._tabBodyWrapper.nativeElement.offsetHeight) {
            this._renderer.setElementStyle(this._tabBodyWrapper.nativeElement, 'height', tabHeight + 'px');
        }
    }
    /** Removes the height of the tab body wrapper. */
    _removeTabBodyWrapperHeight() {
        this._tabBodyWrapperHeight = this._tabBodyWrapper.nativeElement.clientHeight;
        this._renderer.setElementStyle(this._tabBodyWrapper.nativeElement, 'height', '');
    }
};
__decorate$75([
    ContentChildren(MdTab), 
    __metadata$75('design:type', QueryList)
], MdTabGroup.prototype, "_tabs", void 0);
__decorate$75([
    ViewChild('tabBodyWrapper'), 
    __metadata$75('design:type', ElementRef)
], MdTabGroup.prototype, "_tabBodyWrapper", void 0);
__decorate$75([
    Input(), 
    __metadata$75('design:type', Boolean)
], MdTabGroup.prototype, "dynamicHeight", null);
__decorate$75([
    Input('md-dynamic-height'), 
    __metadata$75('design:type', Boolean)
], MdTabGroup.prototype, "_dynamicHeightDeprecated", null);
__decorate$75([
    Input(), 
    __metadata$75('design:type', Number), 
    __metadata$75('design:paramtypes', [Number])
], MdTabGroup.prototype, "selectedIndex", null);
__decorate$75([
    Input(), 
    __metadata$75('design:type', String)
], MdTabGroup.prototype, "headerPosition", void 0);
__decorate$75([
    Output(), 
    __metadata$75('design:type', Observable)
], MdTabGroup.prototype, "selectedIndexChange", null);
__decorate$75([
    Output(), 
    __metadata$75('design:type', Observable)
], MdTabGroup.prototype, "focusChange", null);
__decorate$75([
    Output(), 
    __metadata$75('design:type', Observable)
], MdTabGroup.prototype, "selectChange", null);
MdTabGroup = __decorate$75([
    Component({selector: 'md-tab-group, mat-tab-group',
        template: "<md-tab-header [selectedIndex]=\"selectedIndex\" #tabHeader (indexFocused)=\"_focusChanged($event)\" (selectFocusedIndex)=\"selectedIndex = $event\"><div class=\"mat-tab-label\" role=\"tab\" md-tab-label-wrapper md-ripple *ngFor=\"let tab of _tabs; let i = index\" [id]=\"_getTabLabelId(i)\" [tabIndex]=\"selectedIndex == i ? 0 : -1\" [attr.aria-controls]=\"_getTabContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [class.mat-tab-label-active]=\"selectedIndex == i\" [disabled]=\"tab.disabled\" (click)=\"tabHeader.focusIndex = selectedIndex = i\"><template [ngIf]=\"tab.templateLabel\"><template [cdkPortalHost]=\"tab.templateLabel\"></template></template><template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</template></div></md-tab-header><div class=\"mat-tab-body-wrapper\" #tabBodyWrapper><md-tab-body role=\"tabpanel\" *ngFor=\"let tab of _tabs; let i = index\" [id]=\"_getTabContentId(i)\" [attr.aria-labelledby]=\"_getTabLabelId(i)\" [class.mat-tab-body-active]=\"selectedIndex == i\" [content]=\"tab.content\" [position]=\"tab.position\" [origin]=\"tab.origin\" (onCentered)=\"_removeTabBodyWrapperHeight()\" (onCentering)=\"_setTabBodyWrapperHeight($event)\"></md-tab-body></div>",
        styles: [":host{display:flex;flex-direction:column;font-family:Roboto,\"Helvetica Neue\",sans-serif}:host.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{line-height:48px;height:48px;padding:0 12px;font-size:14px;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;position:relative}.mat-tab-label:focus{outline:0;opacity:1}@media (max-width:600px){.mat-tab-label{min-width:72px}}:host[mat-stretch-tabs] .mat-tab-label,:host[md-stretch-tabs] .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height .5s cubic-bezier(.35,0,.25,1)}.mat-tab-body{position:absolute;top:0;left:0;right:0;bottom:0;display:block;overflow:hidden}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}:host.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}.mat-tab-disabled{cursor:default;pointer-events:none} /*# sourceMappingURL=tab-group.css.map */ "],
        host: {
            '[class.mat-tab-group]': 'true',
            '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
            '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"',
        }
    }), 
    __metadata$75('design:paramtypes', [Renderer])
], MdTabGroup);

var __decorate$76 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$76 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Used in the `md-tab-group` view to display tab labels.
 * @docs-private
 */
let MdTabLabelWrapper = class MdTabLabelWrapper {
    constructor(elementRef, _renderer) {
        this.elementRef = elementRef;
        this._renderer = _renderer;
        /** Whether the tab label is disabled.  */
        this._disabled = false;
    }
    /** Whether the element is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) { this._disabled = coerceBooleanProperty(value); }
    /** Sets focus on the wrapper element */
    focus() {
        this._renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
    }
    getOffsetLeft() {
        return this.elementRef.nativeElement.offsetLeft;
    }
    getOffsetWidth() {
        return this.elementRef.nativeElement.offsetWidth;
    }
};
__decorate$76([
    Input(), 
    __metadata$76('design:type', Object)
], MdTabLabelWrapper.prototype, "disabled", null);
MdTabLabelWrapper = __decorate$76([
    Directive({
        selector: '[md-tab-label-wrapper], [mat-tab-label-wrapper]',
        host: {
            '[class.mat-tab-disabled]': 'disabled'
        }
    }), 
    __metadata$76('design:paramtypes', [ElementRef, Renderer])
], MdTabLabelWrapper);

var __decorate$78 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$78 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * The ink-bar is used to display and animate the line underneath the current active tab label.
 * @docs-private
 */
let MdInkBar = class MdInkBar {
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
    }
    /**
     * Calculates the styles from the provided element in order to align the ink-bar to that element.
     * Shows the ink bar if previously set as hidden.
     * @param element
     */
    alignToElement(element) {
        this.show();
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'left', this._getLeftPosition(element));
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'width', this._getElementWidth(element));
    }
    /** Shows the ink bar. */
    show() {
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'visibility', 'visible');
    }
    /** Hides the ink bar. */
    hide() {
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'visibility', 'hidden');
    }
    /**
     * Generates the pixel distance from the left based on the provided element in string format.
     * @param element
     */
    _getLeftPosition(element) {
        return element ? element.offsetLeft + 'px' : '0';
    }
    /**
     * Generates the pixel width from the provided element in string format.
     * @param element
     */
    _getElementWidth(element) {
        return element ? element.offsetWidth + 'px' : '0';
    }
};
MdInkBar = __decorate$78([
    Directive({
        selector: 'md-ink-bar, mat-ink-bar',
        host: {
            '[class.mat-ink-bar]': 'true',
        },
    }), 
    __metadata$78('design:paramtypes', [Renderer, ElementRef])
], MdInkBar);

var __decorate$77 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$77 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$15 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */
let MdTabNavBar = class MdTabNavBar {
    /** Notifies the component that the active link has been changed. */
    updateActiveLink(element) {
        this._activeLinkChanged = this._activeLinkElement != element;
        this._activeLinkElement = element;
    }
    /** Checks if the active link has been changed and, if so, will update the ink bar. */
    ngAfterContentChecked() {
        if (this._activeLinkChanged) {
            this._inkBar.alignToElement(this._activeLinkElement.nativeElement);
            this._activeLinkChanged = false;
        }
    }
};
__decorate$77([
    ViewChild(MdInkBar), 
    __metadata$77('design:type', MdInkBar)
], MdTabNavBar.prototype, "_inkBar", void 0);
MdTabNavBar = __decorate$77([
    Component({selector: '[md-tab-nav-bar], [mat-tab-nav-bar]',
        template: "<div class=\"mat-tab-links\"><ng-content></ng-content><md-ink-bar></md-ink-bar></div>",
        styles: [".mat-tab-nav-bar{overflow:hidden;position:relative;flex-shrink:0}.mat-tab-links{position:relative}.mat-tab-link{line-height:48px;height:48px;padding:0 12px;font-size:14px;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-block;vertical-align:top;text-decoration:none;position:relative;overflow:hidden}.mat-tab-link:focus{outline:0;opacity:1}@media (max-width:600px){.mat-tab-link{min-width:72px}}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0} /*# sourceMappingURL=tab-nav-bar.css.map */ "],
        host: {
            '[class.mat-tab-nav-bar]': 'true',
        },
        encapsulation: ViewEncapsulation.None,
    }), 
    __metadata$77('design:paramtypes', [])
], MdTabNavBar);
/**
 * Link inside of a `md-tab-nav-bar`.
 */
let MdTabLink = class MdTabLink {
    constructor(_mdTabNavBar, _elementRef) {
        this._mdTabNavBar = _mdTabNavBar;
        this._elementRef = _elementRef;
        this._isActive = false;
    }
    /** Whether the link is active. */
    get active() { return this._isActive; }
    set active(value) {
        this._isActive = value;
        if (value) {
            this._mdTabNavBar.updateActiveLink(this._elementRef);
        }
    }
};
__decorate$77([
    Input(), 
    __metadata$77('design:type', Boolean)
], MdTabLink.prototype, "active", null);
MdTabLink = __decorate$77([
    Directive({
        selector: '[md-tab-link], [mat-tab-link]',
        host: {
            '[class.mat-tab-link]': 'true',
        }
    }), 
    __metadata$77('design:paramtypes', [MdTabNavBar, ElementRef])
], MdTabLink);
/**
 * Simple directive that extends the ripple and matches the selector of the MdTabLink. This
 * adds the ripple behavior to nav bar labels.
 */
let MdTabLinkRipple = class MdTabLinkRipple extends MdRipple {
    constructor(elementRef, ngZone, ruler, globalOptions) {
        super(elementRef, ngZone, ruler, globalOptions);
    }
};
MdTabLinkRipple = __decorate$77([
    Directive({
        selector: '[md-tab-link], [mat-tab-link]',
        host: {
            '[class.mat-tab-link]': 'true',
        },
    }),
    __param$15(3, Optional()),
    __param$15(3, Inject(MD_RIPPLE_GLOBAL_OPTIONS)), 
    __metadata$77('design:paramtypes', [ElementRef, NgZone, ViewportRuler, Object])
], MdTabLinkRipple);

var __decorate$79 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$79 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$16 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Wrapper for the contents of a tab.
 * @docs-private
 */
let MdTabBody = class MdTabBody {
    constructor(_dir, _elementRef, _changeDetectorRef) {
        this._dir = _dir;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        /** Event emitted when the tab begins to animate towards the center as the active tab. */
        this.onCentering = new EventEmitter();
        /** Event emitted when the tab completes its animation towards the center. */
        this.onCentered = new EventEmitter(true);
        /** Whether the element is allowed to be animated. */
        this._canBeAnimated = false;
    }
    set position(position) {
        if (position < 0) {
            this._position = this._getLayoutDirection() == 'ltr' ? 'left' : 'right';
        }
        else if (position > 0) {
            this._position = this._getLayoutDirection() == 'ltr' ? 'right' : 'left';
        }
        else {
            this._position = 'center';
        }
    }
    /** The origin position from which this tab should appear when it is centered into view. */
    set origin(origin) {
        if (origin == null) {
            return;
        }
        const dir = this._getLayoutDirection();
        if ((dir == 'ltr' && origin <= 0) || (dir == 'rtl' && origin > 0)) {
            this._origin = 'left';
        }
        else {
            this._origin = 'right';
        }
    }
    /**
     * After initialized, check if the content is centered and has an origin. If so, set the
     * special position states that transition the tab from the left or right before centering.
     */
    ngOnInit() {
        if (this._position == 'center' && this._origin) {
            this._position = this._origin == 'left' ? 'left-origin-center' : 'right-origin-center';
        }
    }
    /**
     * After the view has been set, check if the tab content is set to the center and attach the
     * content if it is not already attached.
     */
    ngAfterViewChecked() {
        if (this._isCenterPosition(this._position) && !this._portalHost.hasAttached()) {
            this._portalHost.attach(this._content);
        }
    }
    /**
     * After the content has been checked, determines whether the element should be allowed to
     * animate. This has to be limited, because under a specific set of circumstances (see #2151),
     * the animations can be triggered too early, which either crashes Chrome by putting it into an
     * infinite loop (with Angular < 2.3.0) or throws an error because the element doesn't have a
     * computed style (with Angular > 2.3.0). This can alternatively be determined by checking the
     * transform: canBeAnimated = getComputedStyle(element) !== '', however document.contains should
     * be faster since it doesn't cause a reflow.
     *
     * TODO: This can safely be removed after we stop supporting Angular < 2.4.2. The fix landed via
     * https://github.com/angular/angular/commit/21030e9a1cf30e8101399d8535ed72d847a23ba6
     */
    ngAfterContentChecked() {
        if (!this._canBeAnimated) {
            this._canBeAnimated = document.body.contains(this._elementRef.nativeElement);
            if (this._canBeAnimated) {
                this._changeDetectorRef.markForCheck();
            }
        }
    }
    _onTranslateTabStarted(e) {
        if (this._isCenterPosition(e.toState)) {
            this.onCentering.emit(this._elementRef.nativeElement.clientHeight);
        }
    }
    _onTranslateTabComplete(e) {
        // If the end state is that the tab is not centered, then detach the content.
        if (!this._isCenterPosition(e.toState) && !this._isCenterPosition(this._position)) {
            this._portalHost.detach();
        }
        // If the transition to the center is complete, emit an event.
        if (this._isCenterPosition(e.toState) && this._isCenterPosition(this._position)) {
            this.onCentered.emit();
        }
    }
    /** The text direction of the containing app. */
    _getLayoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Whether the provided position state is considered center, regardless of origin. */
    _isCenterPosition(position) {
        return position == 'center' ||
            position == 'left-origin-center' ||
            position == 'right-origin-center';
    }
};
__decorate$79([
    ViewChild(PortalHostDirective), 
    __metadata$79('design:type', PortalHostDirective)
], MdTabBody.prototype, "_portalHost", void 0);
__decorate$79([
    Output(), 
    __metadata$79('design:type', EventEmitter)
], MdTabBody.prototype, "onCentering", void 0);
__decorate$79([
    Output(), 
    __metadata$79('design:type', EventEmitter)
], MdTabBody.prototype, "onCentered", void 0);
__decorate$79([
    Input('content'), 
    __metadata$79('design:type', TemplatePortal)
], MdTabBody.prototype, "_content", void 0);
__decorate$79([
    Input('position'), 
    __metadata$79('design:type', Number), 
    __metadata$79('design:paramtypes', [Number])
], MdTabBody.prototype, "position", null);
__decorate$79([
    Input('origin'), 
    __metadata$79('design:type', Number), 
    __metadata$79('design:paramtypes', [Number])
], MdTabBody.prototype, "origin", null);
MdTabBody = __decorate$79([
    Component({selector: 'md-tab-body, mat-tab-body',
        template: "<div class=\"mat-tab-body-content\" #content [@translateTab]=\"_canBeAnimated ? _position : null\" (@translateTab.start)=\"_onTranslateTabStarted($event)\" (@translateTab.done)=\"_onTranslateTabComplete($event)\"><template cdkPortalHost></template></div>",
        styles: [".mat-tab-body-content{height:100%} /*# sourceMappingURL=tab-body.css.map */ "],
        host: {
            '[class.mat-tab-body]': 'true',
        },
        animations: [
            trigger('translateTab', [
                state('left', style({ transform: 'translate3d(-100%, 0, 0)' })),
                state('left-origin-center', style({ transform: 'translate3d(0, 0, 0)' })),
                state('right-origin-center', style({ transform: 'translate3d(0, 0, 0)' })),
                state('center', style({ transform: 'translate3d(0, 0, 0)' })),
                state('right', style({ transform: 'translate3d(100%, 0, 0)' })),
                transition('* => left, * => right, left => center, right => center', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
                transition('void => left-origin-center', [
                    style({ transform: 'translate3d(-100%, 0, 0)' }),
                    animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')
                ]),
                transition('void => right-origin-center', [
                    style({ transform: 'translate3d(100%, 0, 0)' }),
                    animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')
                ])
            ])
        ]
    }),
    __param$16(0, Optional()), 
    __metadata$79('design:paramtypes', [Dir, ElementRef, ChangeDetectorRef])
], MdTabBody);

var __decorate$80 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$80 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$17 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
 * provide a small affordance to the label next to it.
 */
const EXAGGERATED_OVERSCROLL = 60;
/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * @docs-private
 */
let MdTabHeader = class MdTabHeader {
    constructor(_zone, _elementRef, _dir) {
        this._zone = _zone;
        this._elementRef = _elementRef;
        this._dir = _dir;
        /** The tab index that is focused. */
        this._focusIndex = 0;
        /** The distance in pixels that the tab labels should be translated to the left. */
        this._scrollDistance = 0;
        /** Whether the header should scroll to the selected index after the view has been checked. */
        this._selectedIndexChanged = false;
        /** Whether the controls for pagination should be displayed */
        this._showPaginationControls = false;
        /** Whether the tab list can be scrolled more towards the end of the tab label list. */
        this._disableScrollAfter = true;
        /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */
        this._disableScrollBefore = true;
        this._selectedIndex = 0;
        /** Event emitted when the option is selected. */
        this.selectFocusedIndex = new EventEmitter();
        /** Event emitted when a label is focused. */
        this.indexFocused = new EventEmitter();
    }
    /** The index of the active tab. */
    set selectedIndex(value) {
        this._selectedIndexChanged = this._selectedIndex != value;
        this._selectedIndex = value;
        this._focusIndex = value;
    }
    get selectedIndex() { return this._selectedIndex; }
    ngAfterContentChecked() {
        // If the number of tab labels have changed, check if scrolling should be enabled
        if (this._tabLabelCount != this._labelWrappers.length) {
            this._updatePagination();
            this._tabLabelCount = this._labelWrappers.length;
        }
        // If the selected index has changed, scroll to the label and check if the scrolling controls
        // should be disabled.
        if (this._selectedIndexChanged) {
            this._scrollToLabel(this._selectedIndex);
            this._checkScrollingControls();
            this._alignInkBarToSelectedTab();
            this._selectedIndexChanged = false;
        }
        // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
        // then translate the header to reflect this.
        if (this._scrollDistanceChanged) {
            this._updateTabScrollPosition();
            this._scrollDistanceChanged = false;
        }
    }
    _handleKeydown(event) {
        switch (event.keyCode) {
            case RIGHT_ARROW:
                this._focusNextTab();
                break;
            case LEFT_ARROW:
                this._focusPreviousTab();
                break;
            case ENTER:
                this.selectFocusedIndex.emit(this.focusIndex);
                break;
        }
    }
    /**
     * Aligns the ink bar to the selected tab on load.
     */
    ngAfterContentInit() {
        this._alignInkBarToSelectedTab();
    }
    /**
     * Callback for when the MutationObserver detects that the content has changed.
     */
    _onContentChanges() {
        this._updatePagination();
        this._alignInkBarToSelectedTab();
    }
    /**
     * Updating the view whether pagination should be enabled or not
     */
    _updatePagination() {
        this._checkPaginationEnabled();
        this._checkScrollingControls();
        this._updateTabScrollPosition();
    }
    /** When the focus index is set, we must manually send focus to the correct label */
    set focusIndex(value) {
        if (!this._isValidIndex(value) || this._focusIndex == value) {
            return;
        }
        this._focusIndex = value;
        this.indexFocused.emit(value);
        this._setTabFocus(value);
    }
    /** Tracks which element has focus; used for keyboard navigation */
    get focusIndex() { return this._focusIndex; }
    /**
     * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
     * providing a valid index and return true.
     */
    _isValidIndex(index) {
        if (!this._labelWrappers) {
            return true;
        }
        const tab = this._labelWrappers ? this._labelWrappers.toArray()[index] : null;
        return tab && !tab.disabled;
    }
    /**
     * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
     * scrolling is enabled.
     */
    _setTabFocus(tabIndex) {
        if (this._showPaginationControls) {
            this._scrollToLabel(tabIndex);
        }
        if (this._labelWrappers && this._labelWrappers.length) {
            this._labelWrappers.toArray()[tabIndex].focus();
            // Do not let the browser manage scrolling to focus the element, this will be handled
            // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
            // should be the full width minus the offset width.
            const containerEl = this._tabListContainer.nativeElement;
            const dir = this._getLayoutDirection();
            if (dir == 'ltr') {
                containerEl.scrollLeft = 0;
            }
            else {
                containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
            }
        }
    }
    /**
     * Moves the focus towards the beginning or the end of the list depending on the offset provided.
     * Valid offsets are 1 and -1.
     */
    _moveFocus(offset) {
        if (this._labelWrappers) {
            const tabs = this._labelWrappers.toArray();
            for (let i = this.focusIndex + offset; i < tabs.length && i >= 0; i += offset) {
                if (this._isValidIndex(i)) {
                    this.focusIndex = i;
                    return;
                }
            }
        }
    }
    /** Increment the focus index by 1 until a valid tab is found. */
    _focusNextTab() {
        this._moveFocus(this._getLayoutDirection() == 'ltr' ? 1 : -1);
    }
    /** Decrement the focus index by 1 until a valid tab is found. */
    _focusPreviousTab() {
        this._moveFocus(this._getLayoutDirection() == 'ltr' ? -1 : 1);
    }
    /** The layout direction of the containing app. */
    _getLayoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
    _updateTabScrollPosition() {
        let translateX = this.scrollDistance + 'px';
        if (this._getLayoutDirection() == 'ltr') {
            translateX = '-' + translateX;
        }
        applyCssTransform(this._tabList.nativeElement, `translate3d(${translateX}, 0, 0)`);
    }
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
    set scrollDistance(v) {
        this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), v));
        // Mark that the scroll distance has changed so that after the view is checked, the CSS
        // transformation can move the header.
        this._scrollDistanceChanged = true;
        this._checkScrollingControls();
    }
    get scrollDistance() { return this._scrollDistance; }
    /**
     * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively). The distance to scroll is computed to be a third of the
     * length of the tab list view window.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _scrollHeader(scrollDir) {
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        // Move the scroll distance one-third the length of the tab list's viewport.
        this.scrollDistance += (scrollDir == 'before' ? -1 : 1) * viewLength / 3;
    }
    /**
     * Moves the tab list such that the desired tab label (marked by index) is moved into view.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _scrollToLabel(labelIndex) {
        const selectedLabel = this._labelWrappers
            ? this._labelWrappers.toArray()[labelIndex]
            : null;
        if (!selectedLabel) {
            return;
        }
        // The view length is the visible width of the tab labels.
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        let labelBeforePos, labelAfterPos;
        if (this._getLayoutDirection() == 'ltr') {
            labelBeforePos = selectedLabel.getOffsetLeft();
            labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
        }
        else {
            labelAfterPos = this._tabList.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
            labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
        }
        const beforeVisiblePos = this.scrollDistance;
        const afterVisiblePos = this.scrollDistance + viewLength;
        if (labelBeforePos < beforeVisiblePos) {
            // Scroll header to move label to the before direction
            this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
        }
        else if (labelAfterPos > afterVisiblePos) {
            // Scroll header to move label to the after direction
            this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
        }
    }
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * tab list is wider than the size of the header container, then the pagination controls should
     * be shown.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _checkPaginationEnabled() {
        this._showPaginationControls =
            this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
        if (!this._showPaginationControls) {
            this.scrollDistance = 0;
        }
    }
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _checkScrollingControls() {
        // Check if the pagination arrows should be activated.
        this._disableScrollBefore = this.scrollDistance == 0;
        this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _getMaxScrollDistance() {
        const lengthOfTabList = this._tabList.nativeElement.scrollWidth;
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        return lengthOfTabList - viewLength;
    }
    /** Tells the ink-bar to align itself to the current label wrapper */
    _alignInkBarToSelectedTab() {
        const selectedLabelWrapper = this._labelWrappers && this._labelWrappers.length
            ? this._labelWrappers.toArray()[this.selectedIndex].elementRef.nativeElement
            : null;
        this._zone.runOutsideAngular(() => {
            requestAnimationFrame(() => {
                this._inkBar.alignToElement(selectedLabelWrapper);
            });
        });
    }
};
__decorate$80([
    ContentChildren(MdTabLabelWrapper), 
    __metadata$80('design:type', QueryList)
], MdTabHeader.prototype, "_labelWrappers", void 0);
__decorate$80([
    ViewChild(MdInkBar), 
    __metadata$80('design:type', MdInkBar)
], MdTabHeader.prototype, "_inkBar", void 0);
__decorate$80([
    ViewChild('tabListContainer'), 
    __metadata$80('design:type', ElementRef)
], MdTabHeader.prototype, "_tabListContainer", void 0);
__decorate$80([
    ViewChild('tabList'), 
    __metadata$80('design:type', ElementRef)
], MdTabHeader.prototype, "_tabList", void 0);
__decorate$80([
    Input(), 
    __metadata$80('design:type', Number), 
    __metadata$80('design:paramtypes', [Number])
], MdTabHeader.prototype, "selectedIndex", null);
__decorate$80([
    Output(), 
    __metadata$80('design:type', Object)
], MdTabHeader.prototype, "selectFocusedIndex", void 0);
__decorate$80([
    Output(), 
    __metadata$80('design:type', Object)
], MdTabHeader.prototype, "indexFocused", void 0);
MdTabHeader = __decorate$80([
    Component({selector: 'md-tab-header, mat-tab-header',
        template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\" aria-hidden=\"true\" md-ripple [mdRippleDisabled]=\"_disableScrollBefore\" [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\" (click)=\"_scrollHeader('before')\"><div class=\"mat-tab-header-pagination-chevron\"></div></div><div class=\"mat-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\"><div class=\"mat-tab-list\" #tabList role=\"tablist\" (cdkObserveContent)=\"_onContentChanges()\"><div class=\"mat-tab-labels\"><ng-content></ng-content></div><md-ink-bar></md-ink-bar></div></div><div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\" aria-hidden=\"true\" md-ripple [mdRippleDisabled]=\"_disableScrollAfter\" [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\" (click)=\"_scrollHeader('after')\"><div class=\"mat-tab-header-pagination-chevron\"></div></div>",
        styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-label{line-height:48px;height:48px;padding:0 12px;font-size:14px;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;position:relative}.mat-tab-label:focus{outline:0;opacity:1}@media (max-width:600px){.mat-tab-label{min-width:72px}}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.mat-tab-header-pagination{position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-pagination-after,.mat-tab-header-rtl .mat-tab-header-pagination-before{padding-right:4px}.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:#ccc}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-list{flex-grow:1;position:relative;transition:transform .5s cubic-bezier(.35,0,.25,1)}.mat-tab-labels{display:flex} /*# sourceMappingURL=tab-header.css.map */ "],
        encapsulation: ViewEncapsulation.None,
        host: {
            'class': 'mat-tab-header',
            '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
            '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
        }
    }),
    __param$17(2, Optional()), 
    __metadata$80('design:paramtypes', [NgZone, ElementRef, Dir])
], MdTabHeader);

var __decorate$72 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$72 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdTabsModule_1 = class MdTabsModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdTabsModule_1,
            providers: []
        };
    }
};
let MdTabsModule = MdTabsModule_1;
MdTabsModule = MdTabsModule_1 = __decorate$72([
    NgModule({
        imports: [CommonModule, PortalModule, MdRippleModule, ObserveContentModule],
        // Don't export all components because some are only to be used internally.
        exports: [
            MdTabGroup,
            MdTabLabel,
            MdTab,
            MdTabNavBar,
            MdTabLink,
            MdTabLinkRipple
        ],
        declarations: [
            MdTabGroup,
            MdTabLabel,
            MdTab,
            MdInkBar,
            MdTabLabelWrapper,
            MdTabNavBar,
            MdTabLink,
            MdTabBody,
            MdTabLinkRipple,
            MdTabHeader
        ],
        providers: [VIEWPORT_RULER_PROVIDER, SCROLL_DISPATCHER_PROVIDER],
    }), 
    __metadata$72('design:paramtypes', [])
], MdTabsModule);

var __decorate$82 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$82 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdToolbarRow = class MdToolbarRow {
};
MdToolbarRow = __decorate$82([
    Directive({
        selector: 'md-toolbar-row, mat-toolbar-row',
        host: {
            '[class.mat-toolbar-row]': 'true',
        },
    }), 
    __metadata$82('design:paramtypes', [])
], MdToolbarRow);
let MdToolbar = class MdToolbar {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /** The color of the toolbar. Can be primary, accent, or warn. */
    get color() {
        return this._color;
    }
    set color(value) {
        this._updateColor(value);
    }
    _updateColor(newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    }
    _setElementColor(color, isAdd) {
        if (color != null && color != '') {
            this.renderer.setElementClass(this.elementRef.nativeElement, `mat-${color}`, isAdd);
        }
    }
};
__decorate$82([
    Input(), 
    __metadata$82('design:type', String)
], MdToolbar.prototype, "color", null);
MdToolbar = __decorate$82([
    Component({selector: 'md-toolbar, mat-toolbar',
        template: "<div class=\"mat-toolbar-layout\"><md-toolbar-row><ng-content></ng-content></md-toolbar-row><ng-content select=\"md-toolbar-row, mat-toolbar-row\"></ng-content></div>",
        styles: [".mat-toolbar{display:flex;box-sizing:border-box;width:100%;font-size:20px;font-weight:500;font-family:Roboto,\"Helvetica Neue\",sans-serif;padding:0 16px;flex-direction:column}.mat-toolbar .mat-toolbar-row{display:flex;box-sizing:border-box;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar{min-height:64px}.mat-toolbar-row{height:64px}@media (max-width:600px){.mat-toolbar{min-height:56px}.mat-toolbar-row{height:56px}} /*# sourceMappingURL=toolbar.css.map */ "],
        host: {
            '[class.mat-toolbar]': 'true',
            'role': 'toolbar'
        },
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None
    }), 
    __metadata$82('design:paramtypes', [ElementRef, Renderer])
], MdToolbar);

var __decorate$81 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$81 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdToolbarModule_1 = class MdToolbarModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdToolbarModule_1,
            providers: []
        };
    }
};
let MdToolbarModule = MdToolbarModule_1;
MdToolbarModule = MdToolbarModule_1 = __decorate$81([
    NgModule({
        imports: [CompatibilityModule],
        exports: [MdToolbar, MdToolbarRow, CompatibilityModule],
        declarations: [MdToolbar, MdToolbarRow],
    }), 
    __metadata$81('design:paramtypes', [])
], MdToolbarModule);

/**
 * Exception thrown when a tooltip has an invalid position.
 * @docs-private
 */
class MdTooltipInvalidPositionError extends MdError {
    constructor(position) {
        super(`Tooltip position "${position}" is invalid.`);
    }
}

var __decorate$84 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$84 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$18 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** Time in ms to delay before changing the tooltip visibility to hidden */
const TOUCHEND_HIDE_DELAY = 1500;
/** Time in ms to throttle repositioning after scroll events. */
const SCROLL_THROTTLE_MS = 20;
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.google.com/components/tooltips.html
 */
let MdTooltip = class MdTooltip {
    constructor(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _renderer, _platform, _dir) {
        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewContainerRef = _viewContainerRef;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._platform = _platform;
        this._dir = _dir;
        this._position = 'below';
        this._disabled = false;
        /** The default delay in ms before showing the tooltip after show is called */
        this.showDelay = 0;
        /** The default delay in ms before hiding the tooltip after hide is called */
        this.hideDelay = 0;
        // The mouse events shouldn't be bound on iOS devices, because
        // they can prevent the first tap from firing it's click event.
        if (!_platform.IOS) {
            _renderer.listen(_elementRef.nativeElement, 'mouseenter', () => this.show());
            _renderer.listen(_elementRef.nativeElement, 'mouseleave', () => this.hide());
        }
    }
    /** Allows the user to define the position of the tooltip relative to the parent element */
    get position() { return this._position; }
    set position(value) {
        if (value !== this._position) {
            this._position = value;
            // TODO(andrewjs): When the overlay's position can be dynamically changed, do not destroy
            // the tooltip.
            if (this._tooltipInstance) {
                this._disposeTooltip();
            }
        }
    }
    /** Disables the display of the tooltip. */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        // If tooltip is disabled, hide immediately.
        if (this._disabled) {
            this.hide(0);
        }
    }
    /** @deprecated */
    get _positionDeprecated() { return this._position; }
    set _positionDeprecated(value) { this._position = value; }
    /** The message to be displayed in the tooltip */
    get message() { return this._message; }
    set message(value) {
        this._message = value;
        if (this._tooltipInstance) {
            this._setTooltipMessage(this._message);
        }
    }
    /** @deprecated */
    get _deprecatedMessage() { return this.message; }
    set _deprecatedMessage(v) { this.message = v; }
    // Properties with `mat-` prefix for noconflict mode.
    get _matMessage() { return this.message; }
    set _matMessage(v) { this.message = v; }
    // Properties with `mat-` prefix for noconflict mode.
    get _matPosition() { return this.position; }
    set _matPosition(v) { this.position = v; }
    // Properties with `mat-` prefix for noconflict mode.
    get _matDisabled() { return this.disabled; }
    set _matDisabled(v) { this.disabled = v; }
    // Properties with `mat-` prefix for noconflict mode.
    get _matHideDelay() { return this.hideDelay; }
    set _matHideDelay(v) { this.hideDelay = v; }
    // Properties with `mat-` prefix for noconflict mode.
    get _matShowDelay() { return this.showDelay; }
    set _matShowDelay(v) { this.showDelay = v; }
    ngOnInit() {
        // When a scroll on the page occurs, update the position in case this tooltip needs
        // to be repositioned.
        this.scrollSubscription = this._scrollDispatcher.scrolled(SCROLL_THROTTLE_MS, () => {
            if (this._overlayRef) {
                this._overlayRef.updatePosition();
            }
        });
    }
    /**
     * Dispose the tooltip when destroyed.
     */
    ngOnDestroy() {
        if (this._tooltipInstance) {
            this._disposeTooltip();
        }
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
        }
    }
    /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
    show(delay = this.showDelay) {
        if (this.disabled || !this._message || !this._message.trim()) {
            return;
        }
        if (!this._tooltipInstance) {
            this._createTooltip();
        }
        this._setTooltipMessage(this._message);
        this._tooltipInstance.show(this._position, delay);
    }
    /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
    hide(delay = this.hideDelay) {
        if (this._tooltipInstance) {
            this._tooltipInstance.hide(delay);
        }
    }
    /** Shows/hides the tooltip */
    toggle() {
        this._isTooltipVisible() ? this.hide() : this.show();
    }
    /** Returns true if the tooltip is currently visible to the user */
    _isTooltipVisible() {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
    }
    /** Create the tooltip to display */
    _createTooltip() {
        this._createOverlay();
        let portal = new ComponentPortal(TooltipComponent, this._viewContainerRef);
        this._tooltipInstance = this._overlayRef.attach(portal).instance;
        // Dispose the overlay when finished the shown tooltip.
        this._tooltipInstance.afterHidden().subscribe(() => {
            // Check first if the tooltip has already been removed through this components destroy.
            if (this._tooltipInstance) {
                this._disposeTooltip();
            }
        });
    }
    /** Create the overlay config and position strategy */
    _createOverlay() {
        let origin = this._getOrigin();
        let position = this._getOverlayPosition();
        // Create connected position strategy that listens for scroll events to reposition.
        // After position changes occur and the overlay is clipped by a parent scrollable then
        // close the tooltip.
        let strategy = this._overlay.position().connectedTo(this._elementRef, origin, position);
        strategy.withScrollableContainers(this._scrollDispatcher.getScrollContainers(this._elementRef));
        strategy.onPositionChange.subscribe(change => {
            if (change.scrollableViewProperties.isOverlayClipped &&
                this._tooltipInstance && this._tooltipInstance.isVisible()) {
                this.hide(0);
            }
        });
        let config = new OverlayState();
        config.positionStrategy = strategy;
        this._overlayRef = this._overlay.create(config);
    }
    /** Disposes the current tooltip and the overlay it is attached to */
    _disposeTooltip() {
        this._overlayRef.dispose();
        this._overlayRef = null;
        this._tooltipInstance = null;
    }
    /** Returns the origin position based on the user's position preference */
    _getOrigin() {
        if (this.position == 'above' || this.position == 'below') {
            return { originX: 'center', originY: this.position == 'above' ? 'top' : 'bottom' };
        }
        const isDirectionLtr = !this._dir || this._dir.value == 'ltr';
        if (this.position == 'left' ||
            this.position == 'before' && isDirectionLtr ||
            this.position == 'after' && !isDirectionLtr) {
            return { originX: 'start', originY: 'center' };
        }
        if (this.position == 'right' ||
            this.position == 'after' && isDirectionLtr ||
            this.position == 'before' && !isDirectionLtr) {
            return { originX: 'end', originY: 'center' };
        }
        throw new MdTooltipInvalidPositionError(this.position);
    }
    /** Returns the overlay position based on the user's preference */
    _getOverlayPosition() {
        if (this.position == 'above') {
            return { overlayX: 'center', overlayY: 'bottom' };
        }
        if (this.position == 'below') {
            return { overlayX: 'center', overlayY: 'top' };
        }
        const isLtr = !this._dir || this._dir.value == 'ltr';
        if (this.position == 'left' ||
            this.position == 'before' && isLtr ||
            this.position == 'after' && !isLtr) {
            return { overlayX: 'end', overlayY: 'center' };
        }
        if (this.position == 'right' ||
            this.position == 'after' && isLtr ||
            this.position == 'before' && !isLtr) {
            return { overlayX: 'start', overlayY: 'center' };
        }
        throw new MdTooltipInvalidPositionError(this.position);
    }
    /** Updates the tooltip message and repositions the overlay according to the new message length */
    _setTooltipMessage(message) {
        // Must wait for the message to be painted to the tooltip so that the overlay can properly
        // calculate the correct positioning based on the size of the text.
        this._tooltipInstance.message = message;
        this._ngZone.onMicrotaskEmpty.first().subscribe(() => {
            if (this._tooltipInstance) {
                this._overlayRef.updatePosition();
            }
        });
    }
};
__decorate$84([
    Input('mdTooltipPosition'), 
    __metadata$84('design:type', String)
], MdTooltip.prototype, "position", null);
__decorate$84([
    Input('mdTooltipDisabled'), 
    __metadata$84('design:type', Boolean)
], MdTooltip.prototype, "disabled", null);
__decorate$84([
    Input('tooltip-position'), 
    __metadata$84('design:type', String)
], MdTooltip.prototype, "_positionDeprecated", null);
__decorate$84([
    Input('mdTooltipShowDelay'), 
    __metadata$84('design:type', Object)
], MdTooltip.prototype, "showDelay", void 0);
__decorate$84([
    Input('mdTooltipHideDelay'), 
    __metadata$84('design:type', Object)
], MdTooltip.prototype, "hideDelay", void 0);
__decorate$84([
    Input('mdTooltip'), 
    __metadata$84('design:type', Object)
], MdTooltip.prototype, "message", null);
__decorate$84([
    Input('md-tooltip'), 
    __metadata$84('design:type', String)
], MdTooltip.prototype, "_deprecatedMessage", null);
__decorate$84([
    Input('matTooltip'), 
    __metadata$84('design:type', Object)
], MdTooltip.prototype, "_matMessage", null);
__decorate$84([
    Input('matTooltipPosition'), 
    __metadata$84('design:type', Object)
], MdTooltip.prototype, "_matPosition", null);
__decorate$84([
    Input('matTooltipDisabled'), 
    __metadata$84('design:type', Object)
], MdTooltip.prototype, "_matDisabled", null);
__decorate$84([
    Input('matTooltipHideDelay'), 
    __metadata$84('design:type', Object)
], MdTooltip.prototype, "_matHideDelay", null);
__decorate$84([
    Input('matTooltipShowDelay'), 
    __metadata$84('design:type', Object)
], MdTooltip.prototype, "_matShowDelay", null);
MdTooltip = __decorate$84([
    Directive({
        selector: '[md-tooltip], [mdTooltip], [mat-tooltip], [matTooltip]',
        host: {
            '(longpress)': 'show()',
            '(touchend)': 'hide(' + TOUCHEND_HIDE_DELAY + ')',
        },
        exportAs: 'mdTooltip',
    }),
    __param$18(7, Optional()), 
    __metadata$84('design:paramtypes', [Overlay, ElementRef, ScrollDispatcher, ViewContainerRef, NgZone, Renderer, Platform, Dir])
], MdTooltip);
/**
 * Internal component that wraps the tooltip's content.
 * @docs-private
 */
let TooltipComponent = class TooltipComponent {
    constructor(_dir, _changeDetectorRef) {
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        /** Property watched by the animation framework to show or hide the tooltip */
        this._visibility = 'initial';
        /** Whether interactions on the page should close the tooltip */
        this._closeOnInteraction = false;
        /** The transform origin used in the animation for showing and hiding the tooltip */
        this._transformOrigin = 'bottom';
        /** Subject for notifying that the tooltip has been hidden from the view */
        this._onHide = new Subject();
    }
    /**
     * Shows the tooltip with an animation originating from the provided origin
     * @param position Position of the tooltip.
     * @param delay Amount of milliseconds to the delay showing the tooltip.
     */
    show(position, delay) {
        // Cancel the delayed hide if it is scheduled
        if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
        }
        // Body interactions should cancel the tooltip if there is a delay in showing.
        this._closeOnInteraction = true;
        this._setTransformOrigin(position);
        this._showTimeoutId = setTimeout(() => {
            this._visibility = 'visible';
            // If this was set to true immediately, then a body click that triggers show() would
            // trigger interaction and close the tooltip right after it was displayed.
            this._closeOnInteraction = false;
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            this._changeDetectorRef.markForCheck();
            setTimeout(() => { this._closeOnInteraction = true; }, 0);
        }, delay);
    }
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param delay Amount of milliseconds to delay showing the tooltip.
     */
    hide(delay) {
        // Cancel the delayed show if it is scheduled
        if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
        }
        this._hideTimeoutId = setTimeout(() => {
            this._visibility = 'hidden';
            this._closeOnInteraction = false;
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            this._changeDetectorRef.markForCheck();
        }, delay);
    }
    /**
     * Returns an observable that notifies when the tooltip has been hidden from view
     */
    afterHidden() {
        return this._onHide.asObservable();
    }
    /**
     * Whether the tooltip is being displayed
     */
    isVisible() {
        return this._visibility === 'visible';
    }
    /** Sets the tooltip transform origin according to the tooltip position */
    _setTransformOrigin(value) {
        const isLtr = !this._dir || this._dir.value == 'ltr';
        switch (value) {
            case 'before':
                this._transformOrigin = isLtr ? 'right' : 'left';
                break;
            case 'after':
                this._transformOrigin = isLtr ? 'left' : 'right';
                break;
            case 'left':
                this._transformOrigin = 'right';
                break;
            case 'right':
                this._transformOrigin = 'left';
                break;
            case 'above':
                this._transformOrigin = 'bottom';
                break;
            case 'below':
                this._transformOrigin = 'top';
                break;
            default: throw new MdTooltipInvalidPositionError(value);
        }
    }
    _afterVisibilityAnimation(e) {
        if (e.toState === 'hidden' && !this.isVisible()) {
            this._onHide.next();
        }
    }
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.google.com/components/tooltips.html#tooltips-interaction
     */
    _handleBodyInteraction() {
        if (this._closeOnInteraction) {
            this.hide(0);
        }
    }
};
TooltipComponent = __decorate$84([
    Component({selector: 'md-tooltip-component, mat-tooltip-component',
        template: "<div class=\"mat-tooltip\" [style.transform-origin]=\"_transformOrigin\" [@state]=\"_visibility\" (@state.done)=\"_afterVisibilityAnimation($event)\">{{message}}</div>",
        styles: [":host{pointer-events:none}.mat-tooltip{color:#fff;padding:6px 8px;border-radius:2px;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;margin:14px;max-width:250px}@media screen and (-ms-high-contrast:active){.mat-tooltip{outline:solid 1px}} /*# sourceMappingURL=tooltip.css.map */ "],
        animations: [
            trigger('state', [
                state('void', style({ transform: 'scale(0)' })),
                state('initial', style({ transform: 'scale(0)' })),
                state('visible', style({ transform: 'scale(1)' })),
                state('hidden', style({ transform: 'scale(0)' })),
                transition('* => visible', animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
                transition('* => hidden', animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
            ])
        ],
        host: {
            '(body:click)': 'this._handleBodyInteraction()'
        }
    }),
    __param$18(0, Optional()), 
    __metadata$84('design:paramtypes', [Dir, ChangeDetectorRef])
], TooltipComponent);

var __decorate$83 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$83 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdTooltipModule_1 = class MdTooltipModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdTooltipModule_1,
            providers: []
        };
    }
};
let MdTooltipModule = MdTooltipModule_1;
MdTooltipModule = MdTooltipModule_1 = __decorate$83([
    NgModule({
        imports: [OverlayModule, CompatibilityModule, PlatformModule],
        exports: [MdTooltip, TooltipComponent, CompatibilityModule],
        declarations: [MdTooltip, TooltipComponent],
        entryComponents: [TooltipComponent],
    }), 
    __metadata$83('design:paramtypes', [])
], MdTooltipModule);

/**
 * Exception thrown when menu trigger doesn't have a valid md-menu instance
 * @docs-private
 */
class MdMenuMissingError extends MdError {
    constructor() {
        super(`md-menu-trigger: must pass in an md-menu instance.

    Example:
      <md-menu #menu="mdMenu"></md-menu>
      <button [mdMenuTriggerFor]="menu"></button>
    `);
    }
}
/**
 * Exception thrown when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * @docs-private
 */
class MdMenuInvalidPositionX extends MdError {
    constructor() {
        super(`x-position value must be either 'before' or after'.
      Example: <md-menu x-position="before" #menu="mdMenu"></md-menu>
    `);
    }
}
/**
 * Exception thrown when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * @docs-private
 */
class MdMenuInvalidPositionY extends MdError {
    constructor() {
        super(`y-position value must be either 'above' or below'.
      Example: <md-menu y-position="above" #menu="mdMenu"></md-menu>
    `);
    }
}

var __decorate$87 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$87 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This directive is intended to be used inside an md-menu tag.
 * It exists mostly to set the role attribute.
 */
let MdMenuItem = class MdMenuItem {
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** Whether the menu item is disabled */
        this._disabled = false;
    }
    /** Focuses the menu item. */
    focus() {
        this._renderer.invokeElementMethod(this._getHostElement(), 'focus');
    }
    /** Whether the menu item is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    /** Used to set the `tabindex`. */
    _getTabIndex() {
        return this._disabled ? '-1' : '0';
    }
    /** Used to set the HTML `disabled` attribute. Necessary for links to be disabled properly. */
    _getDisabledAttr() {
        return this._disabled ? true : null;
    }
    /** Returns the host DOM element. */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    /** Prevents the default element actions if it is disabled. */
    _checkDisabled(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
};
__decorate$87([
    Input(), 
    __metadata$87('design:type', Object)
], MdMenuItem.prototype, "disabled", null);
MdMenuItem = __decorate$87([
    Component({selector: '[md-menu-item], [mat-menu-item]',
        host: {
            'role': 'menuitem',
            '[class.mat-menu-item]': 'true',
            '[attr.tabindex]': '_getTabIndex()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.disabled]': '_getDisabledAttr()',
            '(click)': '_checkDisabled($event)',
        },
        template: "<ng-content></ng-content><div class=\"mat-menu-ripple\" *ngIf=\"!disabled\" md-ripple [mdRippleTrigger]=\"_getHostElement()\"></div>",
        exportAs: 'mdMenuItem'
    }), 
    __metadata$87('design:paramtypes', [Renderer, ElementRef])
], MdMenuItem);

/**
 * Below are all the animations for the md-menu component.
 * Animation duration and timing values are based on AngularJS Material.
 */
/**
 * This animation controls the menu panel's entry and exit from the page.
 *
 * When the menu panel is added to the DOM, it scales in and fades in its border.
 *
 * When the menu panel is removed from the DOM, it simply fades out after a brief
 * delay to display the ripple.
 */
// TODO(kara): switch to :enter and :leave once Mobile Safari is sorted out.
const transformMenu = trigger('transformMenu', [
    state('showing', style({
        opacity: 1,
        transform: `scale(1)`
    })),
    transition('void => *', [
        style({
            opacity: 0,
            transform: `scale(0)`
        }),
        animate(`200ms cubic-bezier(0.25, 0.8, 0.25, 1)`)
    ]),
    transition('* => void', [
        animate('50ms 100ms linear', style({ opacity: 0 }))
    ])
]);
/**
 * This animation fades in the background color and content of the menu panel
 * after its containing element is scaled in.
 */
const fadeInItems = trigger('fadeInItems', [
    state('showing', style({ opacity: 1 })),
    transition('void => *', [
        style({ opacity: 0 }),
        animate(`200ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)`)
    ])
]);

// TODO(kara): prevent-close functionality
var __decorate$86 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$86 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$19 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let MdMenu = class MdMenu {
    constructor(posX, posY, deprecatedPosX, deprecatedPosY) {
        /** Config object to be passed into the menu's ngClass */
        this._classList = {};
        /** Position of the menu in the X axis. */
        this.positionX = 'after';
        /** Position of the menu in the Y axis. */
        this.positionY = 'below';
        this.overlapTrigger = true;
        /** Event emitted when the menu is closed. */
        this.close = new EventEmitter();
        // TODO(kara): Remove kebab-case attributes after next release
        if (deprecatedPosX) {
            this._setPositionX(deprecatedPosX);
        }
        if (deprecatedPosY) {
            this._setPositionY(deprecatedPosY);
        }
        if (posX) {
            this._setPositionX(posX);
        }
        if (posY) {
            this._setPositionY(posY);
        }
        this.setPositionClasses(this.positionX, this.positionY);
    }
    ngAfterContentInit() {
        this._keyManager = new FocusKeyManager(this.items).withWrap();
        this._tabSubscription = this._keyManager.tabOut.subscribe(() => {
            this._emitCloseEvent();
        });
    }
    ngOnDestroy() {
        if (this._tabSubscription) {
            this._tabSubscription.unsubscribe();
        }
    }
    /**
     * This method takes classes set on the host md-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @param classes list of class names
     */
    set classList(classes) {
        this._classList = classes.split(' ').reduce((obj, className) => {
            obj[className] = true;
            return obj;
        }, {});
        this.setPositionClasses(this.positionX, this.positionY);
    }
    /**
     * Focus the first item in the menu. This method is used by the menu trigger
     * to focus the first item when the menu is opened by the ENTER key.
     */
    focusFirstItem() {
        this._keyManager.setFirstItemActive();
    }
    /**
     * This emits a close event to which the trigger is subscribed. When emitted, the
     * trigger will close the menu.
     */
    _emitCloseEvent() {
        this.close.emit();
    }
    _setPositionX(pos) {
        if (pos !== 'before' && pos !== 'after') {
            throw new MdMenuInvalidPositionX();
        }
        this.positionX = pos;
    }
    _setPositionY(pos) {
        if (pos !== 'above' && pos !== 'below') {
            throw new MdMenuInvalidPositionY();
        }
        this.positionY = pos;
    }
    /**
     * It's necessary to set position-based classes to ensure the menu panel animation
     * folds out from the correct direction.
     */
    setPositionClasses(posX, posY) {
        this._classList['mat-menu-before'] = posX == 'before';
        this._classList['mat-menu-after'] = posX == 'after';
        this._classList['mat-menu-above'] = posY == 'above';
        this._classList['mat-menu-below'] = posY == 'below';
    }
};
__decorate$86([
    ViewChild(TemplateRef), 
    __metadata$86('design:type', TemplateRef)
], MdMenu.prototype, "templateRef", void 0);
__decorate$86([
    ContentChildren(MdMenuItem), 
    __metadata$86('design:type', QueryList)
], MdMenu.prototype, "items", void 0);
__decorate$86([
    Input(), 
    __metadata$86('design:type', Object)
], MdMenu.prototype, "overlapTrigger", void 0);
__decorate$86([
    Input('class'), 
    __metadata$86('design:type', String), 
    __metadata$86('design:paramtypes', [String])
], MdMenu.prototype, "classList", null);
__decorate$86([
    Output(), 
    __metadata$86('design:type', Object)
], MdMenu.prototype, "close", void 0);
MdMenu = __decorate$86([
    Component({selector: 'md-menu, mat-menu',
        host: { 'role': 'menu' },
        template: "<template><div class=\"mat-menu-panel\" [ngClass]=\"_classList\" (keydown)=\"_keyManager.onKeydown($event)\" (click)=\"_emitCloseEvent()\" [@transformMenu]=\"'showing'\"><div class=\"mat-menu-content\" [@fadeInItems]=\"'showing'\"><ng-content></ng-content></div></div></template>",
        styles: [".mat-menu-panel{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh + 48px)}.mat-menu-panel.mat-menu-after.mat-menu-below{transform-origin:left top}.mat-menu-panel.mat-menu-after.mat-menu-above{transform-origin:left bottom}.mat-menu-panel.mat-menu-before.mat-menu-below{transform-origin:right top}.mat-menu-panel.mat-menu-before.mat-menu-above{transform-origin:right bottom}[dir=rtl] .mat-menu-panel.mat-menu-after.mat-menu-below{transform-origin:right top}[dir=rtl] .mat-menu-panel.mat-menu-after.mat-menu-above{transform-origin:right bottom}[dir=rtl] .mat-menu-panel.mat-menu-before.mat-menu-below{transform-origin:left top}[dir=rtl] .mat-menu-panel.mat-menu-before.mat-menu-above{transform-origin:left bottom}@media screen and (-ms-high-contrast:active){.mat-menu-panel{outline:solid 1px}}.mat-menu-content{padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;font-size:16px;font-family:Roboto,\"Helvetica Neue\",sans-serif;text-align:left;text-decoration:none;position:relative}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px}button.mat-menu-item{width:100%}.mat-menu-ripple{position:absolute;top:0;left:0;bottom:0;right:0} /*# sourceMappingURL=menu.css.map */ "],
        encapsulation: ViewEncapsulation.None,
        animations: [
            transformMenu,
            fadeInItems
        ],
        exportAs: 'mdMenu'
    }),
    __param$19(0, Attribute('xPosition')),
    __param$19(1, Attribute('yPosition')),
    __param$19(2, Attribute('x-position')),
    __param$19(3, Attribute('y-position')), 
    __metadata$86('design:paramtypes', [String, String, String, String])
], MdMenu);

var __decorate$88 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$88 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$20 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors
/**
 * This directive is intended to be used in conjunction with an md-menu tag.  It is
 * responsible for toggling the display of the provided menu instance.
 */
let MdMenuTrigger = class MdMenuTrigger {
    constructor(_overlay, _element, _viewContainerRef, _renderer, _dir) {
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._dir = _dir;
        this._menuOpen = false;
        // tracking input type is necessary so it's possible to only auto-focus
        // the first item of the list when the menu is opened via the keyboard
        this._openedByMouse = false;
        /** Event emitted when the associated menu is opened. */
        this.onMenuOpen = new EventEmitter();
        /** Event emitted when the associated menu is closed. */
        this.onMenuClose = new EventEmitter();
    }
    /** @deprecated */
    get _deprecatedMdMenuTriggerFor() { return this.menu; }
    set _deprecatedMdMenuTriggerFor(v) { this.menu = v; }
    /** @deprecated */
    get _deprecatedMatMenuTriggerFor() { return this.menu; }
    set _deprecatedMatMenuTriggerFor(v) { this.menu = v; }
    // Trigger input for compatibility mode
    get _matMenuTriggerFor() { return this.menu; }
    set _matMenuTriggerFor(v) { this.menu = v; }
    ngAfterViewInit() {
        this._checkMenu();
        this.menu.close.subscribe(() => this.closeMenu());
    }
    ngOnDestroy() { this.destroyMenu(); }
    /** Whether the menu is open. */
    get menuOpen() { return this._menuOpen; }
    /** Toggles the menu between the open and closed states. */
    toggleMenu() {
        return this._menuOpen ? this.closeMenu() : this.openMenu();
    }
    /** Opens the menu. */
    openMenu() {
        if (!this._menuOpen) {
            this._createOverlay();
            this._overlayRef.attach(this._portal);
            this._subscribeToBackdrop();
            this._initMenu();
        }
    }
    /** Closes the menu. */
    closeMenu() {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this._backdropSubscription.unsubscribe();
            this._resetMenu();
        }
    }
    /** Removes the menu from the DOM. */
    destroyMenu() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
            this._cleanUpSubscriptions();
        }
    }
    /** Focuses the menu trigger. */
    focus() {
        this._renderer.invokeElementMethod(this._element.nativeElement, 'focus');
    }
    /** The text direction of the containing app. */
    get dir() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /**
     * This method ensures that the menu closes when the overlay backdrop is clicked.
     * We do not use first() here because doing so would not catch clicks from within
     * the menu, and it would fail to unsubscribe properly. Instead, we unsubscribe
     * explicitly when the menu is closed or destroyed.
     */
    _subscribeToBackdrop() {
        this._backdropSubscription = this._overlayRef.backdropClick().subscribe(() => {
            this.menu._emitCloseEvent();
        });
    }
    /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     */
    _initMenu() {
        this._setIsMenuOpen(true);
        // Should only set focus if opened via the keyboard, so keyboard users can
        // can easily navigate menu items. According to spec, mouse users should not
        // see the focus style.
        if (!this._openedByMouse) {
            this.menu.focusFirstItem();
        }
    }
    ;
    /**
     * This method resets the menu when it's closed, most importantly restoring
     * focus to the menu trigger if the menu was opened via the keyboard.
     */
    _resetMenu() {
        this._setIsMenuOpen(false);
        // Focus only needs to be reset to the host element if the menu was opened
        // by the keyboard and manually shifted to the first menu item.
        if (!this._openedByMouse) {
            this.focus();
        }
        this._openedByMouse = false;
    }
    // set state rather than toggle to support triggers sharing a menu
    _setIsMenuOpen(isOpen) {
        this._menuOpen = isOpen;
        this._menuOpen ? this.onMenuOpen.emit() : this.onMenuClose.emit();
    }
    /**
     *  This method checks that a valid instance of MdMenu has been passed into
     *  mdMenuTriggerFor. If not, an exception is thrown.
     */
    _checkMenu() {
        if (!this.menu) {
            throw new MdMenuMissingError();
        }
    }
    /**
     *  This method creates the overlay from the provided menu's template and saves its
     *  OverlayRef so that it can be attached to the DOM when openMenu is called.
     */
    _createOverlay() {
        if (!this._overlayRef) {
            this._portal = new TemplatePortal(this.menu.templateRef, this._viewContainerRef);
            const config = this._getOverlayConfig();
            this._subscribeToPositions(config.positionStrategy);
            this._overlayRef = this._overlay.create(config);
        }
    }
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @returns OverlayState
     */
    _getOverlayConfig() {
        const overlayState = new OverlayState();
        overlayState.positionStrategy = this._getPosition()
            .withDirection(this.dir);
        overlayState.hasBackdrop = true;
        overlayState.backdropClass = 'cdk-overlay-transparent-backdrop';
        overlayState.direction = this.dir;
        return overlayState;
    }
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     */
    _subscribeToPositions(position) {
        this._positionSubscription = position.onPositionChange.subscribe((change) => {
            const posX = change.connectionPair.originX === 'start' ? 'after' : 'before';
            let posY = change.connectionPair.originY === 'top' ? 'below' : 'above';
            if (!this.menu.overlapTrigger) {
                posY = posY === 'below' ? 'above' : 'below';
            }
            this.menu.setPositionClasses(posX, posY);
        });
    }
    /**
     * This method builds the position strategy for the overlay, so the menu is properly connected
     * to the trigger.
     * @returns ConnectedPositionStrategy
     */
    _getPosition() {
        const [posX, fallbackX] = this.menu.positionX === 'before' ? ['end', 'start'] : ['start', 'end'];
        const [overlayY, fallbackOverlayY] = this.menu.positionY === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];
        let originY = overlayY;
        let fallbackOriginY = fallbackOverlayY;
        if (!this.menu.overlapTrigger) {
            originY = overlayY === 'top' ? 'bottom' : 'top';
            fallbackOriginY = fallbackOverlayY === 'top' ? 'bottom' : 'top';
        }
        return this._overlay.position()
            .connectedTo(this._element, { originX: posX, originY: originY }, { overlayX: posX, overlayY: overlayY })
            .withFallbackPosition({ originX: fallbackX, originY: originY }, { overlayX: fallbackX, overlayY: overlayY })
            .withFallbackPosition({ originX: posX, originY: fallbackOriginY }, { overlayX: posX, overlayY: fallbackOverlayY })
            .withFallbackPosition({ originX: fallbackX, originY: fallbackOriginY }, { overlayX: fallbackX, overlayY: fallbackOverlayY });
    }
    _cleanUpSubscriptions() {
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
        }
        if (this._positionSubscription) {
            this._positionSubscription.unsubscribe();
        }
    }
    _handleMousedown(event) {
        if (!isFakeMousedownFromScreenReader(event)) {
            this._openedByMouse = true;
        }
    }
};
__decorate$88([
    Input('md-menu-trigger-for'), 
    __metadata$88('design:type', Object)
], MdMenuTrigger.prototype, "_deprecatedMdMenuTriggerFor", null);
__decorate$88([
    Input('mat-menu-trigger-for'), 
    __metadata$88('design:type', Object)
], MdMenuTrigger.prototype, "_deprecatedMatMenuTriggerFor", null);
__decorate$88([
    Input('matMenuTriggerFor'), 
    __metadata$88('design:type', Object)
], MdMenuTrigger.prototype, "_matMenuTriggerFor", null);
__decorate$88([
    Input('mdMenuTriggerFor'), 
    __metadata$88('design:type', Object)
], MdMenuTrigger.prototype, "menu", void 0);
__decorate$88([
    Output(), 
    __metadata$88('design:type', Object)
], MdMenuTrigger.prototype, "onMenuOpen", void 0);
__decorate$88([
    Output(), 
    __metadata$88('design:type', Object)
], MdMenuTrigger.prototype, "onMenuClose", void 0);
MdMenuTrigger = __decorate$88([
    Directive({
        selector: `[md-menu-trigger-for], [mat-menu-trigger-for],
             [mdMenuTriggerFor], [matMenuTriggerFor]`,
        host: {
            'aria-haspopup': 'true',
            '(mousedown)': '_handleMousedown($event)',
            '(click)': 'toggleMenu()',
        },
        exportAs: 'mdMenuTrigger'
    }),
    __param$20(4, Optional()), 
    __metadata$88('design:paramtypes', [Overlay, ElementRef, ViewContainerRef, Renderer, Dir])
], MdMenuTrigger);

var __decorate$85 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$85 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdMenuModule_1 = class MdMenuModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdMenuModule_1,
            providers: [],
        };
    }
};
let MdMenuModule = MdMenuModule_1;
MdMenuModule = MdMenuModule_1 = __decorate$85([
    NgModule({
        imports: [OverlayModule, CommonModule, MdRippleModule, CompatibilityModule],
        exports: [MdMenu, MdMenuItem, MdMenuTrigger, CompatibilityModule],
        declarations: [MdMenu, MdMenuItem, MdMenuTrigger],
    }), 
    __metadata$85('design:paramtypes', [])
], MdMenuModule);

// TODO(jelbourn): resizing
// TODO(jelbourn): afterOpen and beforeClose
/**
 * Reference to a dialog opened via the MdDialog service.
 */
class MdDialogRef {
    constructor(_overlayRef, _containerInstance) {
        this._overlayRef = _overlayRef;
        this._containerInstance = _containerInstance;
        /** Subject for notifying the user that the dialog has finished closing. */
        this._afterClosed = new Subject();
        _containerInstance._onAnimationStateChange.subscribe((state$$1) => {
            if (state$$1 === 'exit-start') {
                // Transition the backdrop in parallel with the dialog.
                this._overlayRef.detachBackdrop();
            }
            else if (state$$1 === 'exit') {
                this._overlayRef.dispose();
                this._afterClosed.next(this._result);
                this._afterClosed.complete();
                this.componentInstance = null;
            }
        });
    }
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    close(dialogResult) {
        this._result = dialogResult;
        this._containerInstance._exit();
    }
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     */
    afterClosed() {
        return this._afterClosed.asObservable();
    }
}

const MD_DIALOG_DATA = new OpaqueToken('MdDialogData');
/** Custom injector type specifically for instantiating components with a dialog. */
class DialogInjector {
    constructor(_parentInjector, _dialogRef, _data) {
        this._parentInjector = _parentInjector;
        this._dialogRef = _dialogRef;
        this._data = _data;
    }
    get(token, notFoundValue) {
        if (token === MdDialogRef) {
            return this._dialogRef;
        }
        if (token === MD_DIALOG_DATA && this._data) {
            return this._data;
        }
        return this._parentInjector.get(token, notFoundValue);
    }
}

/**
 * Configuration for opening a modal dialog with the MdDialog service.
 */
class MdDialogConfig {
    constructor() {
        /** The ARIA role of the dialog element. */
        this.role = 'dialog';
        /** Whether the user can use escape or clicking outside to close a modal. */
        this.disableClose = false;
        /** Width of the dialog. */
        this.width = '';
        /** Height of the dialog. */
        this.height = '';
    }
}

/**
 * Exception thrown when a ComponentPortal is attached to a DomPortalHost without an origin.
 * @docs-private
 */
class MdDialogContentAlreadyAttachedError extends MdError {
    constructor() {
        super('Attempting to attach dialog content after content is already attached');
    }
}

var __decorate$91 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$91 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Internal component that wraps user-provided dialog content.
 * Animation is based on https://material.io/guidelines/motion/choreography.html.
 * @docs-private
 */
let MdDialogContainer = class MdDialogContainer extends BasePortalHost {
    constructor(_ngZone, _renderer, _elementRef, _focusTrapFactory) {
        super();
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /** Element that was focused before the dialog was opened. Save this to restore upon close. */
        this._elementFocusedBeforeDialogWasOpened = null;
        /** State of the dialog animation. */
        this._state = 'enter';
        /** Emits the current animation state whenever it changes. */
        this._onAnimationStateChange = new EventEmitter();
    }
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachComponentPortal(portal) {
        if (this._portalHost.hasAttached()) {
            throw new MdDialogContentAlreadyAttachedError();
        }
        let attachResult = this._portalHost.attachComponentPortal(portal);
        this._trapFocus();
        return attachResult;
    }
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachTemplatePortal(portal) {
        if (this._portalHost.hasAttached()) {
            throw new MdDialogContentAlreadyAttachedError();
        }
        let attachedResult = this._portalHost.attachTemplatePortal(portal);
        this._trapFocus();
        return attachedResult;
    }
    /**
     * Moves the focus inside the focus trap.
     * @private
     */
    _trapFocus() {
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        }
        // If were to attempt to focus immediately, then the content of the dialog would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        this._ngZone.onMicrotaskEmpty.first().subscribe(() => {
            this._elementFocusedBeforeDialogWasOpened = document.activeElement;
            this._focusTrap.focusFirstTabbableElement();
        });
    }
    /**
     * Kicks off the leave animation.
     * @docs-private
     */
    _exit() {
        this._state = 'exit';
        this._onAnimationStateChange.emit('exit-start');
    }
    /**
     * Callback, invoked whenever an animation on the host completes.
     * @docs-private
     */
    _onAnimationDone(event) {
        this._onAnimationStateChange.emit(event.toState);
    }
    ngOnDestroy() {
        // When the dialog is destroyed, return focus to the element that originally had it before
        // the dialog was opened. Wait for the DOM to finish settling before changing the focus so
        // that it doesn't end up back on the <body>. Also note that we need the extra check, because
        // IE can set the `activeElement` to null in some cases.
        this._ngZone.onMicrotaskEmpty.first().subscribe(() => {
            let toFocus = this._elementFocusedBeforeDialogWasOpened;
            // We need to check whether the focus method exists at all, because IE seems to throw an
            // exception, even if the element is the document.body.
            if (toFocus && 'focus' in toFocus) {
                toFocus.focus();
            }
            this._onAnimationStateChange.complete();
        });
        this._focusTrap.destroy();
    }
};
__decorate$91([
    ViewChild(PortalHostDirective), 
    __metadata$91('design:type', PortalHostDirective)
], MdDialogContainer.prototype, "_portalHost", void 0);
MdDialogContainer = __decorate$91([
    Component({selector: 'md-dialog-container, mat-dialog-container',
        template: "<template cdkPortalHost></template>",
        styles: [".mat-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);display:block;padding:24px;border-radius:2px;box-sizing:border-box;overflow:auto;max-width:80vw;width:100%;height:100%}@media screen and (-ms-high-contrast:active){.mat-dialog-container{outline:solid 1px}}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto}.mat-dialog-title{font-size:20px;font-weight:700;margin:0 0 20px;display:block}.mat-dialog-actions{padding:12px 0;display:flex}.mat-dialog-actions:last-child{margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center} /*# sourceMappingURL=dialog.css.map */ "],
        encapsulation: ViewEncapsulation.None,
        animations: [
            trigger('slideDialog', [
                state('void', style({ transform: 'translateY(25%) scale(0.9)', opacity: 0 })),
                state('enter', style({ transform: 'translateY(0%) scale(1)', opacity: 1 })),
                state('exit', style({ transform: 'translateY(25%)', opacity: 0 })),
                transition('* => *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
            ])
        ],
        host: {
            '[class.mat-dialog-container]': 'true',
            '[attr.role]': 'dialogConfig?.role',
            '[@slideDialog]': '_state',
            '(@slideDialog.done)': '_onAnimationDone($event)',
        },
    }), 
    __metadata$91('design:paramtypes', [NgZone, Renderer, ElementRef, FocusTrapFactory])
], MdDialogContainer);

var __decorate$90 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$90 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$21 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Service to open Material Design modal dialogs.
 */
let MdDialog = class MdDialog {
    constructor(_overlay, _injector, _parentDialog) {
        this._overlay = _overlay;
        this._injector = _injector;
        this._parentDialog = _parentDialog;
        this._openDialogsAtThisLevel = [];
        this._afterAllClosedAtThisLevel = new Subject();
        this._afterOpenAtThisLevel = new Subject();
        this._boundKeydown = this._handleKeydown.bind(this);
        /** Gets an observable that is notified when a dialog has been opened. */
        this.afterOpen = this._afterOpen.asObservable();
        /** Gets an observable that is notified when all open dialog have finished closing. */
        this.afterAllClosed = this._afterAllClosed.asObservable();
    }
    /** Keeps track of the currently-open dialogs. */
    get _openDialogs() {
        return this._parentDialog ? this._parentDialog._openDialogs : this._openDialogsAtThisLevel;
    }
    /** Subject for notifying the user that all open dialogs have finished closing. */
    get _afterOpen() {
        return this._parentDialog ? this._parentDialog._afterOpen : this._afterOpenAtThisLevel;
    }
    /** Subject for notifying the user that a dialog has opened. */
    get _afterAllClosed() {
        return this._parentDialog ?
            this._parentDialog._afterAllClosed : this._afterAllClosedAtThisLevel;
    }
    /**
     * Opens a modal dialog containing the given component.
     * @param componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param config Extra configuration options.
     * @returns Reference to the newly-opened dialog.
     */
    open(componentOrTemplateRef, config) {
        config = _applyConfigDefaults$1(config);
        let overlayRef = this._createOverlay(config);
        let dialogContainer = this._attachDialogContainer(overlayRef, config);
        let dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
        if (!this._openDialogs.length && !this._parentDialog) {
            document.addEventListener('keydown', this._boundKeydown);
        }
        this._openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe(() => this._removeOpenDialog(dialogRef));
        this._afterOpen.next(dialogRef);
        return dialogRef;
    }
    /**
     * Closes all of the currently-open dialogs.
     */
    closeAll() {
        let i = this._openDialogs.length;
        while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            this._openDialogs[i].close();
        }
    }
    /**
     * Creates the overlay into which the dialog will be loaded.
     * @param dialogConfig The dialog configuration.
     * @returns A promise resolving to the OverlayRef for the created overlay.
     */
    _createOverlay(dialogConfig) {
        let overlayState = this._getOverlayState(dialogConfig);
        return this._overlay.create(overlayState);
    }
    /**
     * Attaches an MdDialogContainer to a dialog's already-created overlay.
     * @param overlay Reference to the dialog's underlying overlay.
     * @param config The dialog configuration.
     * @returns A promise resolving to a ComponentRef for the attached container.
     */
    _attachDialogContainer(overlay, config) {
        let viewContainer = config ? config.viewContainerRef : null;
        let containerPortal = new ComponentPortal(MdDialogContainer, viewContainer);
        let containerRef = overlay.attach(containerPortal);
        containerRef.instance.dialogConfig = config;
        return containerRef.instance;
    }
    /**
     * Attaches the user-provided component to the already-created MdDialogContainer.
     * @param componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param dialogContainer Reference to the wrapping MdDialogContainer.
     * @param overlayRef Reference to the overlay in which the dialog resides.
     * @param config The dialog configuration.
     * @returns A promise resolving to the MdDialogRef that should be returned to the user.
     */
    _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        let dialogRef = new MdDialogRef(overlayRef, dialogContainer);
        if (!config.disableClose) {
            // When the dialog backdrop is clicked, we want to close it.
            overlayRef.backdropClick().first().subscribe(() => dialogRef.close());
        }
        // We create an injector specifically for the component we're instantiating so that it can
        // inject the MdDialogRef. This allows a component loaded inside of a dialog to close itself
        // and, optionally, to return a value.
        let userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        let dialogInjector = new DialogInjector(userInjector || this._injector, dialogRef, config.data);
        if (componentOrTemplateRef instanceof TemplateRef) {
            dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null));
        }
        else {
            let contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, null, dialogInjector));
            dialogRef.componentInstance = contentRef.instance;
        }
        return dialogRef;
    }
    /**
     * Creates an overlay state from a dialog config.
     * @param dialogConfig The dialog configuration.
     * @returns The overlay configuration.
     */
    _getOverlayState(dialogConfig) {
        let state$$1 = new OverlayState();
        let strategy = this._overlay.position().global();
        let position = dialogConfig.position;
        state$$1.hasBackdrop = true;
        state$$1.positionStrategy = strategy;
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        strategy.width(dialogConfig.width).height(dialogConfig.height);
        return state$$1;
    }
    /**
     * Removes a dialog from the array of open dialogs.
     * @param dialogRef Dialog to be removed.
     */
    _removeOpenDialog(dialogRef) {
        let index = this._openDialogs.indexOf(dialogRef);
        if (index > -1) {
            this._openDialogs.splice(index, 1);
            // no open dialogs are left, call next on afterAllClosed Subject
            if (!this._openDialogs.length) {
                this._afterAllClosed.next();
                document.removeEventListener('keydown', this._boundKeydown);
            }
        }
    }
    /**
     * Handles global key presses while there are open dialogs. Closes the
     * top dialog when the user presses escape.
     */
    _handleKeydown(event) {
        let topDialog = this._openDialogs[this._openDialogs.length - 1];
        if (event.keyCode === ESCAPE && topDialog &&
            !topDialog._containerInstance.dialogConfig.disableClose) {
            topDialog.close();
        }
    }
};
MdDialog = __decorate$90([
    Injectable(),
    __param$21(2, Optional()),
    __param$21(2, SkipSelf()), 
    __metadata$90('design:paramtypes', [Overlay, Injector, MdDialog])
], MdDialog);
/**
 * Applies default options to the dialog config.
 * @param dialogConfig Config to be modified.
 * @returns The new configuration object.
 */
function _applyConfigDefaults$1(dialogConfig) {
    return extendObject(new MdDialogConfig(), dialogConfig);
}

var __decorate$92 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$92 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Button that will close the current dialog.
 */
let MdDialogClose = class MdDialogClose {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        /** Screenreader label for the button. */
        this.ariaLabel = 'Close dialog';
    }
};
__decorate$92([
    Input('aria-label'), 
    __metadata$92('design:type', String)
], MdDialogClose.prototype, "ariaLabel", void 0);
MdDialogClose = __decorate$92([
    Directive({
        selector: 'button[md-dialog-close], button[mat-dialog-close]',
        host: {
            '(click)': 'dialogRef.close()',
            '[attr.aria-label]': 'ariaLabel',
            'type': 'button',
        }
    }), 
    __metadata$92('design:paramtypes', [MdDialogRef])
], MdDialogClose);
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
let MdDialogTitle = class MdDialogTitle {
};
MdDialogTitle = __decorate$92([
    Directive({
        selector: '[md-dialog-title], [mat-dialog-title]',
        host: {
            '[class.mat-dialog-title]': 'true'
        }
    }), 
    __metadata$92('design:paramtypes', [])
], MdDialogTitle);
/**
 * Scrollable content container of a dialog.
 */
let MdDialogContent = class MdDialogContent {
};
MdDialogContent = __decorate$92([
    Directive({
        selector: '[md-dialog-content], md-dialog-content, [mat-dialog-content], mat-dialog-content',
        host: {
            '[class.mat-dialog-content]': 'true'
        }
    }), 
    __metadata$92('design:paramtypes', [])
], MdDialogContent);
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
let MdDialogActions = class MdDialogActions {
};
MdDialogActions = __decorate$92([
    Directive({
        selector: '[md-dialog-actions], md-dialog-actions, [mat-dialog-actions], mat-dialog-actions',
        host: {
            '[class.mat-dialog-actions]': 'true'
        }
    }), 
    __metadata$92('design:paramtypes', [])
], MdDialogActions);

var __decorate$89 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$89 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdDialogModule_1 = class MdDialogModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdDialogModule_1,
            providers: [],
        };
    }
};
let MdDialogModule = MdDialogModule_1;
MdDialogModule = MdDialogModule_1 = __decorate$89([
    NgModule({
        imports: [
            OverlayModule,
            PortalModule,
            A11yModule,
            CompatibilityModule,
        ],
        exports: [
            MdDialogContainer,
            MdDialogClose,
            MdDialogTitle,
            MdDialogContent,
            MdDialogActions,
            CompatibilityModule,
        ],
        declarations: [
            MdDialogContainer,
            MdDialogClose,
            MdDialogTitle,
            MdDialogActions,
            MdDialogContent,
        ],
        providers: [
            MdDialog,
        ],
        entryComponents: [MdDialogContainer],
    }), 
    __metadata$89('design:paramtypes', [])
], MdDialogModule);

class ActiveDescendantKeyManager extends ListKeyManager {
    constructor(items) {
        super(items);
    }
    /**
     * This method sets the active item to the item at the specified index.
     * It also adds active styles to the newly active item and removes active
     * styles from the previously active item.
     */
    setActiveItem(index) {
        Promise.resolve().then(() => {
            if (this.activeItem) {
                this.activeItem.setInactiveStyles();
            }
            super.setActiveItem(index);
            if (this.activeItem) {
                this.activeItem.setActiveStyles();
            }
        });
    }
}

var __decorate$94 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$94 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Autocomplete IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
let _uniqueAutocompleteIdCounter = 0;
let MdAutocomplete = class MdAutocomplete {
    constructor() {
        /** Whether the autocomplete panel displays above or below its trigger. */
        this.positionY = 'below';
        /** Whether the autocomplete panel should be visible, depending on option length. */
        this.showPanel = false;
        /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */
        this.id = `md-autocomplete-${_uniqueAutocompleteIdCounter++}`;
    }
    ngAfterContentInit() {
        this._keyManager = new ActiveDescendantKeyManager(this.options).withWrap();
    }
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display
     * options below the fold, as they are not actually being focused when active.
     */
    _setScrollTop(scrollTop) {
        if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
        }
    }
    /** Panel should hide itself when the option list is empty. */
    _setVisibility() {
        Promise.resolve().then(() => this.showPanel = !!this.options.length);
    }
    /** Sets a class on the panel based on its position (used to set y-offset). */
    _getClassList() {
        return {
            'mat-autocomplete-panel-below': this.positionY === 'below',
            'mat-autocomplete-panel-above': this.positionY === 'above',
            'mat-autocomplete-visible': this.showPanel,
            'mat-autocomplete-hidden': !this.showPanel
        };
    }
};
__decorate$94([
    ViewChild(TemplateRef), 
    __metadata$94('design:type', TemplateRef)
], MdAutocomplete.prototype, "template", void 0);
__decorate$94([
    ViewChild('panel'), 
    __metadata$94('design:type', ElementRef)
], MdAutocomplete.prototype, "panel", void 0);
__decorate$94([
    ContentChildren(MdOption), 
    __metadata$94('design:type', QueryList)
], MdAutocomplete.prototype, "options", void 0);
__decorate$94([
    Input(), 
    __metadata$94('design:type', Function)
], MdAutocomplete.prototype, "displayWith", void 0);
MdAutocomplete = __decorate$94([
    Component({selector: 'md-autocomplete, mat-autocomplete',
        template: "<template><div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_getClassList()\" #panel><ng-content></ng-content></div></template>",
        styles: [".mat-autocomplete-panel{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative}.mat-autocomplete-panel.mat-autocomplete-panel-below{top:6px}.mat-autocomplete-panel.mat-autocomplete-panel-above{top:-24px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden} /*# sourceMappingURL=autocomplete.css.map */ "],
        encapsulation: ViewEncapsulation.None,
        exportAs: 'mdAutocomplete',
        host: {
            '[class.mat-autocomplete]': 'true'
        }
    }), 
    __metadata$94('design:paramtypes', [])
], MdAutocomplete);

var __decorate$95 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$95 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$22 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the scrollTop of the panel. Because we are not
 * actually focusing the active item, scroll must be handled manually.
 */
/** The height of each autocomplete option. */
const AUTOCOMPLETE_OPTION_HEIGHT = 48;
/** The total height of the autocomplete panel. */
const AUTOCOMPLETE_PANEL_HEIGHT = 256;
/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * @docs-private
 */
const MD_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MdAutocompleteTrigger),
    multi: true
};
let MdAutocompleteTrigger = class MdAutocompleteTrigger {
    constructor(_element, _overlay, _viewContainerRef, _dir, _zone, _inputContainer) {
        this._element = _element;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._zone = _zone;
        this._inputContainer = _inputContainer;
        this._panelOpen = false;
        /** Stream of blur events that should close the panel. */
        this._blurStream = new Subject();
        /** Whether or not the placeholder state is being overridden. */
        this._manuallyFloatingPlaceholder = false;
        /** View -> model callback called when value changes */
        this._onChange = (value) => { };
        /** View -> model callback called when autocomplete has been touched */
        this._onTouched = () => { };
    }
    /** Property with mat- prefix for no-conflict mode. */
    get _matAutocomplete() {
        return this.autocomplete;
    }
    set _matAutocomplete(autocomplete) {
        this.autocomplete = autocomplete;
    }
    ngOnDestroy() {
        if (this._panelPositionSubscription) {
            this._panelPositionSubscription.unsubscribe();
        }
        this._destroyPanel();
    }
    /* Whether or not the autocomplete panel is open. */
    get panelOpen() {
        return this._panelOpen && this.autocomplete.showPanel;
    }
    /** Opens the autocomplete suggestion panel. */
    openPanel() {
        if (!this._overlayRef) {
            this._createOverlay();
        }
        else {
            /** Update the panel width, in case the host width has changed */
            this._overlayRef.getState().width = this._getHostWidth();
        }
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._portal);
            this._subscribeToClosingActions();
        }
        this._panelOpen = true;
        this._floatPlaceholder();
    }
    /** Closes the autocomplete suggestion panel. */
    closePanel() {
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
        this._panelOpen = false;
        this._resetPlaceholder();
    }
    /**
     * A stream of actions that should close the autocomplete panel, including
     * when an option is selected, on blur, and when TAB is pressed.
     */
    get panelClosingActions() {
        return Observable.merge(this.optionSelections, this._blurStream.asObservable(), this.autocomplete._keyManager.tabOut);
    }
    /** Stream of autocomplete option selections. */
    get optionSelections() {
        return Observable.merge(...this.autocomplete.options.map(option => option.onSelectionChange));
    }
    /** The currently active option, coerced to MdOption type. */
    get activeOption() {
        if (this.autocomplete._keyManager) {
            return this.autocomplete._keyManager.activeItem;
        }
    }
    /**
     * Sets the autocomplete's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    writeValue(value) {
        Promise.resolve(null).then(() => this._setTriggerValue(value));
    }
    /**
     * Saves a callback function to be invoked when the autocomplete's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Saves a callback function to be invoked when the autocomplete is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    _handleKeydown(event) {
        if (this.activeOption && event.keyCode === ENTER) {
            this.activeOption._selectViaInteraction();
        }
        else {
            this.autocomplete._keyManager.onKeydown(event);
            if (event.keyCode === UP_ARROW || event.keyCode === DOWN_ARROW) {
                this.openPanel();
                Promise.resolve().then(() => this._scrollToOption());
            }
        }
    }
    _handleInput(event) {
        // We need to ensure that the input is focused, because IE will fire the `input`
        // event on focus/blur/load if the input has a placeholder. See:
        // https://connect.microsoft.com/IE/feedback/details/885747/
        if (document.activeElement === event.target) {
            this._onChange(event.target.value);
            this.openPanel();
        }
    }
    _handleBlur(newlyFocusedTag) {
        this._onTouched();
        // Only emit blur event if the new focus is *not* on an option.
        if (newlyFocusedTag !== 'MD-OPTION') {
            this._blurStream.next(null);
        }
    }
    /**
     * In "auto" mode, the placeholder will animate down as soon as focus is lost.
     * This causes the value to jump when selecting an option with the mouse.
     * This method manually floats the placeholder until the panel can be closed.
     */
    _floatPlaceholder() {
        if (this._inputContainer && this._inputContainer.floatPlaceholder === 'auto') {
            this._inputContainer.floatPlaceholder = 'always';
            this._manuallyFloatingPlaceholder = true;
        }
    }
    /** If the placeholder has been manually elevated, return it to its normal state. */
    _resetPlaceholder() {
        if (this._manuallyFloatingPlaceholder) {
            this._inputContainer.floatPlaceholder = 'auto';
            this._manuallyFloatingPlaceholder = false;
        }
    }
    /**
     * Given that we are not actually focusing active options, we must manually adjust scroll
     * to reveal options below the fold. First, we find the offset of the option from the top
     * of the panel. The new scrollTop will be that offset - the panel height + the option
     * height, so the active option will be just visible at the bottom of the panel.
     */
    _scrollToOption() {
        const optionOffset = this.autocomplete._keyManager.activeItemIndex * AUTOCOMPLETE_OPTION_HEIGHT;
        const newScrollTop = Math.max(0, optionOffset - AUTOCOMPLETE_PANEL_HEIGHT + AUTOCOMPLETE_OPTION_HEIGHT);
        this.autocomplete._setScrollTop(newScrollTop);
    }
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     */
    _subscribeToClosingActions() {
        // When the zone is stable initially, and when the option list changes...
        Observable.merge(this._zone.onStable.first(), this.autocomplete.options.changes)
            .switchMap(() => {
            this._resetPanel();
            return this.panelClosingActions;
        })
            .first()
            .subscribe(event => this._setValueAndClose(event));
    }
    /** Destroys the autocomplete suggestion panel. */
    _destroyPanel() {
        if (this._overlayRef) {
            this.closePanel();
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
    }
    _setTriggerValue(value) {
        const toDisplay = this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value;
        this._element.nativeElement.value = toDisplay || '';
    }
    /**
    * This method closes the panel, and if a value is specified, also sets the associated
    * control to that value. It will also mark the control as dirty if this interaction
    * stemmed from the user.
    */
    _setValueAndClose(event) {
        if (event) {
            this._setTriggerValue(event.source.value);
            this._onChange(event.source.value);
        }
        this.closePanel();
    }
    _createOverlay() {
        this._portal = new TemplatePortal(this.autocomplete.template, this._viewContainerRef);
        this._overlayRef = this._overlay.create(this._getOverlayConfig());
    }
    _getOverlayConfig() {
        const overlayState = new OverlayState();
        overlayState.positionStrategy = this._getOverlayPosition();
        overlayState.width = this._getHostWidth();
        overlayState.direction = this._dir ? this._dir.value : 'ltr';
        return overlayState;
    }
    _getOverlayPosition() {
        this._positionStrategy = this._overlay.position().connectedTo(this._element, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' });
        this._subscribeToPositionChanges(this._positionStrategy);
        return this._positionStrategy;
    }
    /**
     * This method subscribes to position changes in the autocomplete panel, so the panel's
     * y-offset can be adjusted to match the new position.
     */
    _subscribeToPositionChanges(strategy) {
        this._panelPositionSubscription = strategy.onPositionChange.subscribe(change => {
            this.autocomplete.positionY = change.connectionPair.originY === 'top' ? 'above' : 'below';
        });
    }
    /** Returns the width of the input element, so the panel width can match it. */
    _getHostWidth() {
        return this._element.nativeElement.getBoundingClientRect().width;
    }
    /** Reset active item to null so arrow events will activate the correct options.*/
    _resetActiveItem() {
        this.autocomplete._keyManager.setActiveItem(null);
    }
    /**
     * Resets the active item and re-calculates alignment of the panel in case its size
     * has changed due to fewer or greater number of options.
     */
    _resetPanel() {
        this._resetActiveItem();
        this._positionStrategy.recalculateLastPosition();
        this.autocomplete._setVisibility();
    }
};
__decorate$95([
    Input('mdAutocomplete'), 
    __metadata$95('design:type', MdAutocomplete)
], MdAutocompleteTrigger.prototype, "autocomplete", void 0);
__decorate$95([
    Input('matAutocomplete'), 
    __metadata$95('design:type', MdAutocomplete)
], MdAutocompleteTrigger.prototype, "_matAutocomplete", null);
MdAutocompleteTrigger = __decorate$95([
    Directive({
        selector: 'input[mdAutocomplete], input[matAutocomplete]',
        host: {
            'role': 'combobox',
            'autocomplete': 'off',
            'aria-autocomplete': 'list',
            'aria-multiline': 'false',
            '[attr.aria-activedescendant]': 'activeOption?.id',
            '[attr.aria-expanded]': 'panelOpen.toString()',
            '[attr.aria-owns]': 'autocomplete?.id',
            '(focus)': 'openPanel()',
            '(blur)': '_handleBlur($event.relatedTarget?.tagName)',
            '(input)': '_handleInput($event)',
            '(keydown)': '_handleKeydown($event)',
        },
        providers: [MD_AUTOCOMPLETE_VALUE_ACCESSOR]
    }),
    __param$22(3, Optional()),
    __param$22(5, Optional()),
    __param$22(5, Host()), 
    __metadata$95('design:paramtypes', [ElementRef, Overlay, ViewContainerRef, Dir, NgZone, MdInputContainer])
], MdAutocompleteTrigger);

var __decorate$93 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$93 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MdAutocompleteModule_1 = class MdAutocompleteModule {
    /** @deprecated */
    static forRoot() {
        return {
            ngModule: MdAutocompleteModule_1,
            providers: [OVERLAY_PROVIDERS]
        };
    }
};
let MdAutocompleteModule = MdAutocompleteModule_1;
MdAutocompleteModule = MdAutocompleteModule_1 = __decorate$93([
    NgModule({
        imports: [MdOptionModule, OverlayModule, CompatibilityModule, CommonModule],
        exports: [MdAutocomplete, MdOptionModule, MdAutocompleteTrigger, CompatibilityModule],
        declarations: [MdAutocomplete, MdAutocompleteTrigger],
    }), 
    __metadata$93('design:paramtypes', [])
], MdAutocompleteModule);

var __decorate$31 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$31 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const MATERIAL_MODULES = [
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdChipsModule,
    MdCheckboxModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    OverlayModule,
    PortalModule,
    RtlModule,
    StyleModule,
    A11yModule,
    PlatformModule,
    ProjectionModule,
    CompatibilityModule,
    ObserveContentModule
];
let MaterialRootModule = class MaterialRootModule {
};
MaterialRootModule = __decorate$31([
    NgModule({
        imports: [
            MdAutocompleteModule.forRoot(),
            MdButtonModule.forRoot(),
            MdCardModule.forRoot(),
            MdChipsModule.forRoot(),
            MdCheckboxModule.forRoot(),
            MdGridListModule.forRoot(),
            MdInputModule.forRoot(),
            MdListModule.forRoot(),
            MdProgressBarModule.forRoot(),
            MdProgressSpinnerModule.forRoot(),
            MdRippleModule.forRoot(),
            MdSelectModule.forRoot(),
            MdSidenavModule.forRoot(),
            MdTabsModule.forRoot(),
            MdToolbarModule.forRoot(),
            PortalModule.forRoot(),
            ProjectionModule.forRoot(),
            RtlModule.forRoot(),
            ObserveContentModule.forRoot(),
            // These modules include providers.
            A11yModule.forRoot(),
            MdButtonToggleModule.forRoot(),
            MdDialogModule.forRoot(),
            MdIconModule.forRoot(),
            MdMenuModule.forRoot(),
            MdRadioModule.forRoot(),
            MdSliderModule.forRoot(),
            MdSlideToggleModule.forRoot(),
            MdSnackBarModule.forRoot(),
            MdTooltipModule.forRoot(),
            PlatformModule.forRoot(),
            OverlayModule.forRoot(),
            CompatibilityModule.forRoot(),
        ],
        exports: MATERIAL_MODULES,
    }), 
    __metadata$31('design:paramtypes', [])
], MaterialRootModule);
let MaterialModule = class MaterialModule {
    /** @deprecated */
    static forRoot() {
        return { ngModule: MaterialRootModule };
    }
};
MaterialModule = __decorate$31([
    NgModule({
        imports: MATERIAL_MODULES,
        exports: MATERIAL_MODULES,
    }), 
    __metadata$31('design:paramtypes', [])
], MaterialModule);

export { MdCoreModule, Dir, RtlModule, ObserveContentModule, ObserveContent, MdOptionModule, MdOption, Portal, BasePortalHost, ComponentPortal, TemplatePortal, PortalHostDirective, TemplatePortalDirective, PortalModule, DomPortalHost, Platform as MdPlatform, Overlay, OVERLAY_PROVIDERS, OverlayContainer, FullscreenOverlayContainer, OverlayRef, OverlayState, ConnectedOverlayDirective, OverlayOrigin, OverlayModule, ScrollDispatcher, GestureConfig, LiveAnnouncer, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_PROVIDER, LiveAnnouncer as MdLiveAnnouncer, InteractivityChecker, isFakeMousedownFromScreenReader, A11yModule, UniqueSelectionDispatcher, UNIQUE_SELECTION_DISPATCHER_PROVIDER, UniqueSelectionDispatcher as MdUniqueSelectionDispatcher, MdLineModule, MdLine, MdLineSetter, MdError, coerceBooleanProperty, coerceNumberProperty, CompatibilityModule, NoConflictStyleCompatibilityMode, DomProjectionHost, DomProjection, ProjectionModule, PlatformModule, Platform, getSupportedInputTypes, ConnectedPositionStrategy, ConnectionPositionPair, ScrollableViewProperties, ConnectedOverlayPositionChange, MdRippleModule, MdRipple, MD_RIPPLE_GLOBAL_OPTIONS, RippleRef, RippleState, SelectionModel, SelectionChange, FocusTrap, FocusTrapFactory, FocusTrapDeprecatedDirective, FocusTrapDirective, StyleModule, TOUCH_BUFFER_MS, FocusOriginMonitor, CdkMonitorFocus, FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY, FOCUS_ORIGIN_MONITOR_PROVIDER, applyCssTransform, UP_ARROW, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, PAGE_UP, PAGE_DOWN, HOME, END, ENTER, SPACE, TAB, ESCAPE, BACKSPACE, DELETE, MATERIAL_COMPATIBILITY_MODE, MAT_ELEMENTS_SELECTOR, MD_ELEMENTS_SELECTOR, MatPrefixRejector, MdPrefixRejector, AnimationCurves, AnimationDurations, MdSelectionModule, MdPseudoCheckbox, MaterialRootModule, MaterialModule, MdAutocompleteModule, MdAutocomplete, AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MD_AUTOCOMPLETE_VALUE_ACCESSOR, MdAutocompleteTrigger, MdButtonModule, MdButtonCssMatStyler, MdRaisedButtonCssMatStyler, MdIconButtonCssMatStyler, MdFabCssMatStyler, MdMiniFabCssMatStyler, MdButton, MdAnchor, MdButtonToggleModule, MD_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MdButtonToggleChange, MdButtonToggleGroup, MdButtonToggleGroupMultiple, MdButtonToggle, MdCardModule, MdCardContent, MdCardTitle, MdCardSubtitle, MdCardActions, MdCardFooter, MdCardSmImage, MdCardMdImage, MdCardLgImage, MdCardImage, MdCardXlImage, MdCardAvatar, MdCard, MdCardHeader, MdCardTitleGroup, MdChipsModule, MdChipList, MdChip, MdCheckboxModule, MD_CHECKBOX_CONTROL_VALUE_ACCESSOR, TransitionCheckState, MdCheckboxChange, MdCheckbox, MdDialogModule, MD_DIALOG_DATA, MdDialog, MdDialogContainer, MdDialogClose, MdDialogTitle, MdDialogContent, MdDialogActions, MdDialogConfig, MdDialogRef, MdGridListModule, MdGridList, MdIconModule, MdIconRegistry, MdIconInvalidNameError, MdIcon, ICON_REGISTRY_PROVIDER_FACTORY, ICON_REGISTRY_PROVIDER, MdInputModule, MdTextareaAutosize, MdPlaceholder, MdHint, MdInputDirective, MdInputContainer, MdInputContainerPlaceholderConflictError, MdInputContainerUnsupportedTypeError, MdInputContainerDuplicatedHintError, MdInputContainerMissingMdInputError, MdListModule, MdListDivider, LIST_TYPE_TOKEN, MdList, MdListCssMatStyler, MdNavListCssMatStyler, MdNavListTokenSetter, MdDividerCssMatStyler, MdListAvatarCssMatStyler, MdListIconCssMatStyler, MdListSubheaderCssMatStyler, MdListItem, MdMenuModule, MdMenuTrigger, fadeInItems, transformMenu, MdMenu, MdMenuItem, MdProgressBarModule, MdProgressBar, MdProgressSpinnerModule, MdProgressSpinnerModule as MdProgressCircleModule, MdProgressSpinner as MdProgressCircle, MdProgressSpinnerCssMatStyler, MdProgressCircleCssMatStyler, MdProgressSpinner, MdSpinner, MdRadioModule, MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MdRadioChange, MdRadioGroup, MdRadioButton, MdSelectModule, fadeInContent, transformPanel, transformPlaceholder, SELECT_OPTION_HEIGHT, SELECT_PANEL_MAX_HEIGHT, SELECT_MAX_OPTIONS_DISPLAYED, SELECT_TRIGGER_HEIGHT, SELECT_OPTION_HEIGHT_ADJUSTMENT, SELECT_PANEL_PADDING_X, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_PADDING_Y, SELECT_PANEL_VIEWPORT_PADDING, MdSelectChange, MdSelect, MdSidenavModule, MdDuplicatedSidenavError, MdSidenavToggleResult, MdSidenav, MdSidenavContainer, MdSliderModule, MD_SLIDER_VALUE_ACCESSOR, MdSliderChange, MdSlider, SliderRenderer, MdSlideToggleModule, MD_SLIDE_TOGGLE_VALUE_ACCESSOR, MdSlideToggleChange, MdSlideToggle, MdSnackBarModule, MdSnackBar, SHOW_ANIMATION, HIDE_ANIMATION, MdSnackBarContainer, MdSnackBarConfig, MdSnackBarRef, SimpleSnackBar, MdTabsModule, MdInkBar, MdTabBody, MdTabHeader, MdTabLabelWrapper, MdTab, MdTabLabel, MdTabChangeEvent, MdTabGroup, MdTabNavBar, MdTabLink, MdTabLinkRipple, MdToolbarModule, MdToolbarRow, MdToolbar, MdTooltipModule, TOUCHEND_HIDE_DELAY, SCROLL_THROTTLE_MS, MdTooltip, TooltipComponent };
