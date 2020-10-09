import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators"

@Injectable()
export class AppService {
    response = []

    constructor(private http: HttpClient) {
        
    }
    
    get() {
        return this.http.get<FormDataResponse>("formData")
            .pipe(map(response => { return response.responses; }));
    }

}
export interface FormData {
    response: string;
}

export interface FormDataResponse {
    responses: FormData[];
}