import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionsService } from './../services/sessions.service';
import { User } from './../user/user';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    mensagem: string = '';
    meuForm: FormGroup;
    user: User = new User();
    private _localStorageService: LocalStorageService;
    private _route: ActivatedRoute;
    private _router: Router;
    private _service: SessionsService;

    constructor(fb: FormBuilder, localStorageService: LocalStorageService, route: ActivatedRoute, router: Router, service: SessionsService) {
        this._localStorageService = localStorageService;
        this._route = route;
        this._router = router;
        this._service = service;
        this.meuForm = fb.group({
            email: ['', Validators.required ],
            password: ['', Validators.required ],
        });
    }

    saveUser(event): void {
        event.preventDefault();
        this._service.login(this.user).subscribe(user => {
            this._localStorageService.set('user', user);
            let u: User = new User(user);
            u.isAdmin() ? this._router.navigate(['users']) : this._router.navigate(['user', u.id])
        }, error => {
            console.log(error);
            this.mensagem = 'Verifique o usuario e senha informados';
        });
    }

}
