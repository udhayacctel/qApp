import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { QuizMetadata} from '../model/quizMetadata';
import { Constants} from '../utilities/Constants';
import { Subject } from '../model/subject';

@Injectable()
export class QuizProvider {

subject: Subject = new Subject();




    constructor(public http: Http, public httpClient: HttpClient) {}

    getQuestions(isPhysics:Boolean,isChemistry:Boolean,isBiology:Boolean) {

        let s: Array<string> = new Array();
        let int: number = 0;

        if (isBiology) {
            s[int] = "B";
            int = int + 1;
        }

        if (isChemistry){
            s[int] = "C";
            int = int + 1;
        }

        if (isPhysics) {
            s[int] = "P";
            int = int + 1;
            }

        let x = s.toString().replace(/,/g,'');
            
        console.log("the length of string" + x);

       

        let q_id = 2;

        let url: string = `${Constants.servicesURLPrefix}/quizzer/questionId`
        let params: URLSearchParams = new URLSearchParams();
        params.set("subject",x);
        params.set("id",q_id.toString());    

     
         return this.http.get(url, {params:params})
         .pipe(map((response: any) => response.json()))
          catchError(error => Observable.throw(new Error(error.status)));
    
    }
        
    

    getQuestions1() {

        let url: string = `${Constants.servicesURLPrefix}/quizzer/questionId`;
        let params: URLSearchParams = new URLSearchParams();
        params.set("subject","Physics")
        params.set("subject","Chemistry")
        params.set("id","2")
    
        return this.http.get(url, {params:params})
        .pipe(map((response: any) => response.json()))
         catchError(error => Observable.throw(new Error(error.status)));

    }    
}   