import { Injectable } from '@angular/core';
import { Subject } from '../model/subject';


@Injectable()
export class GlobalProvider {

 subject: Subject;


    constructor() {}

    getSubject() {

         console.log("subject" + this.subject.isPhysics);   
         return this.subject;
    }

    setSubject(s:Subject) {

        this.subject = s;

    }

}

