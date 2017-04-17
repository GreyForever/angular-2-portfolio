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
var ProjectsListComponent = (function () {
    function ProjectsListComponent(httpService) {
        this.httpService = httpService;
        this.catName = '';
        this.projects = [];
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData().subscribe(function (data) { return _this.projects = data.json(); });
    };
    ProjectsListComponent.prototype.toggle = function (cat) {
        this.catName = cat;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ProjectsListComponent.prototype, "projNumb", void 0);
    ProjectsListComponent = __decorate([
        core_1.Component({
            selector: 'projects-list',
            templateUrl: 'app/projects-list/projects-list.component.html',
            styles: [".portfolio-item {margin-bottom: 25px;} .img-responsive {max-height: 300px; margin: auto;padding:5px;}\n\t.portfolio-item:hover{\n\t-moz-box-shadow: 0 0 10px #ccc; -webkit-box-shadow: 0 0 10px #ccc; box-shadow: 0 0 10px #ccc;\n\t}"],
            providers: [http_service_1.HttpService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());
exports.ProjectsListComponent = ProjectsListComponent;
//# sourceMappingURL=projects-list.component.js.map