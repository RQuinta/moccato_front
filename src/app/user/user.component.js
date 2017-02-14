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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_service_1 = require("./../app.service");
var user_1 = require("./user");
var UserComponent = (function () {
    function UserComponent(fb, route, router, service) {
        var _this = this;
        this.title = 'Criar Usuário';
        this.user = new user_1.User();
        this._route = route;
        this._router = router;
        this._service = service;
        this.meuForm = fb.group({
            name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            password_confirmation: ['', forms_1.Validators.required]
        });
        this._route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.title = 'Editar Usuário';
                _this._service.getUser(id).subscribe(function (user) { return _this.user = user; });
                _this.meuForm = fb.group({
                    name: ['', forms_1.Validators.required],
                    email: ['', forms_1.Validators.required],
                    password: [''],
                    password_confirmation: ['']
                });
            }
        });
    }
    UserComponent.prototype._createUser = function () {
        var _this = this;
        this._service.createUser(this.user).subscribe(function (res) {
            _this.user = new user_1.User();
            console.log('Usuário salvo com sucesso');
            _this._router.navigate(['users']);
        }, function (error) { return console.log(error); });
    };
    UserComponent.prototype._editUser = function () {
        var _this = this;
        this._service.editUser(this.user).subscribe(function (res) {
            _this.user = new user_1.User();
            console.log('Usuário editado com sucesso');
            _this._router.navigate(['users']);
        }, function (error) { return console.log(error); });
    };
    UserComponent.prototype.deleteUser = function () {
        this._service.deleteUser(this.user).subscribe(function (res) { return console.log(res); });
    };
    UserComponent.prototype.saveUser = function (event) {
        event.preventDefault();
        this.user.id ? this._editUser() : this._createUser();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user',
        templateUrl: './user.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, app_service_1.UserService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map