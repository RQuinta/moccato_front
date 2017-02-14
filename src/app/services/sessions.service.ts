import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { AppSettings } from './../app.settings';
import { Observable } from 'rxjs';
import { User } from './../user/user';

@Injectable()
export class SessionsService {

    private _http: Http;
    private _headers: Headers;
    private _url: string;

    constructor(http: Http) {
        this._http = http;
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json');
        this._url = `${AppSettings.API_ENDPOINT}sessions`;
    }

    login(user: User): Observable<User> {
        return this._http.post(this._url, JSON.stringify({ session: user }), { headers: this._headers }).map(res => res.json());
    }

}
