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
var core_1 = require('@angular/core');
var http_service_1 = require('../resources/http.service');
var router_1 = require('@angular/router');
var DetailsComponent = (function () {
    function DetailsComponent(route, httpService) {
        var _this = this;
        this.route = route;
        this.httpService = httpService;
        this.projects = [];
        this.routeSubscription = route.params.subscribe(function (params) { return _this.id = params['id']; });
    }
    DetailsComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData().subscribe(function (data) { return _this.projects = data.json(); });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'proj-detail',
            templateUrl: 'app/proj-details-component/details.component.html',
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, http_service_1.HttpService])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map