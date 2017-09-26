"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(el, router) {
        this.router = router;
        this.el = el;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var script = document.createElement('script');
        var pageScripts = document.getElementsByTagName('script')[1];
        script.async = true;
        script.src = 'static/javascripts/rd-tracking.js';
        pageScripts.parentNode.insertBefore(script, pageScripts);
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (window['trackVisit']) {
                    window['trackVisit']('97a39a2f-b395-45f7-824e-2ec26525f1cb', event.url);
                }
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: '[app]',
        styleUrls: ['/static/stylesheets/application.css'],
        templateUrl: '/static/views/core/core.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
