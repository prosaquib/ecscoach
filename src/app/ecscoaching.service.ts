import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EscCoachingService{
    headers: Headers;
    private serverUrl = 'http://jsonstub.com/QnA/2'
    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'JsonStub-User-Key': 'a67c3db7-405f-4d0d-9958-265eaa47fad4',
            'JsonStub-Project-Key':'feef8e12-f80b-4886-a567-0ec30a53b730'
        });
}
    getEcsCoaching():Observable<any>{
        return this._http.get(this.serverUrl,{headers:this.headers})
            .map((res:Response)=> res.json())
            .catch(error => { return Observable.throw(error) })
    }
}