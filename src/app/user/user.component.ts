import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../app.service';
import { User } from './user';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: './user.component.html'
})
export class UserComponent {
    
    meuForm: FormGroup;
    title: string = 'Criar Usuário';
    message: string = '';
    messageBtn: string = 'Criar novo usuário';
    user: User = new User();
    private _userLogin: User;
    private _localStorageService: LocalStorageService;
    private _route: ActivatedRoute;
    private _router: Router;
    private _service: UserService;

    constructor(fb: FormBuilder, localStorageService: LocalStorageService, route: ActivatedRoute, router: Router, service: UserService) {
        this._localStorageService = localStorageService;
        this._route = route;
        this._router = router;
        this._service = service;
        this.meuForm = fb.group({
            name: ['', Validators.required ],
            email: ['', Validators.required ],
            password: ['', Validators.required ],
            password_confirmation: ['', Validators.required ]
        });
        this._userLogin = new User(this._localStorageService.get('user'));
        this._route.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.title = 'Editar Usuário';
                this.messageBtn = 'Salvar alterações';
                this._service.getUser(id).subscribe(user => this.user = new User(user));
                this.meuForm = fb.group({
                    name: ['', Validators.required ],
                    email: ['', Validators.required ],
                    password: [''],
                    password_confirmation: ['']
                });
            }
        });
    }

    _createUser(): void {
        this._service.createUser(this.user).subscribe(user => {
            this.user = new User();
            console.log('Usuário salvo com sucesso');
            this._localStorageService.set('user', user);
            this._router.navigate(['user', user.id]);
        }, error => console.log(error));
    }

    _editUser(): void {
        this._service.editUser(this.user).subscribe(res => {
            this._localStorageService.set('user', this.user);
            this._userLogin.isAdmin() ? this._router.navigate(['users']) : this.message = 'usuário editado com sucesso';
        }, error => console.log(error));
    }

    deleteUser(): void {
        this._service.deleteUser(this.user).subscribe(res => {
            this._userLogin.isAdmin() ? this._router.navigate(['users']) : this._router.navigate(['login']);
        });
    }

    saveUser(event): void {
        event.preventDefault();
        this.user.id ? this._editUser() : this._createUser();
    }

}
