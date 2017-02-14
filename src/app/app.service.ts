import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { AppSettings } from './app.settings';
import { Observable } from 'rxjs';
import { User } from './user/user';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class UserService {

    _http: Http;
    _headers: Headers;
    _localStorageService: LocalStorageService;
    _url: string;

    constructor(http: Http, localStorageService: LocalStorageService) {
        this._http = http;
        this._headers = new Headers();
        this._localStorageService = localStorageService;
        this._url = AppSettings.API_ENDPOINT + 'users';
        this._headers.append('Content-Type', 'application/json');
    }

    private _controlToken(): void {
        let headerName: string = 'AUTHORIZATION';
        let user: User = new User(this._localStorageService.get('user'));
        user.token ? this._headers.append(headerName, 'Token token=' + 'wzjDZHgWkoLHKp2oNkPLY4MR') : this._headers.delete(headerName);
    }

    createUser(user): Observable<User> {
        this._controlToken();
        return this._http.post(this._url, JSON.stringify({ user: user }), { headers: this._headers }).map(res => res.json());
    }

    deleteUser(user): Observable<Response> {
        this._controlToken();
        return this._http.delete(this._url + '/' + user.id, { headers: this._headers });
    }

    editUser(user): Observable<Response> {
        this._controlToken();
        return this._http.put(this._url + '/' + user.id, JSON.stringify(user), { headers: this._headers });
    }

    getUser(id: number): Observable<User> {
        this._controlToken();
        return this._http.get(this._url + '/' + id, { headers: this._headers }).map(res => res.json());
    }

    getUsers(deleted: boolean): Observable<User[]> {
        this._controlToken();
        let params = new URLSearchParams();
        params.set('deleted', String(deleted));
        return this._http.get(this._url, { headers: this._headers, search: params }).map(res => res.json());
    }

}
