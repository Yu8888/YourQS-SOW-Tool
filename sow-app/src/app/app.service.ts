import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators"

@Injectable()
export class AppService {

    constructor(private http: HttpClient) {
        
    }

    options: {
        headers?: HttpHeaders | {[header: string]: string | string[]},
        observe?: 'body' | 'events' | 'response',
        params?: HttpParams|{[param: string]: string | string[]},
        reportProgress?: boolean,
        responseType?: 'arraybuffer'|'blob'|'json'|'text',
        withCredentials?: boolean,
    }

    formUrl = 'app-zone';

    getConfig() {
        
    }

    showConfig() {
        return this.http.get<ZoneResponse>(this.formUrl)
            .pipe(map(response => { return response.zones}));
    }
    
    getData() {
        this.http.get("app-zone");
    }

}
export interface Zones {

}

export interface ZoneResponse {
    zones: Zones[];
}