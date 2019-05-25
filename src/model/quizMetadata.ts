import {Questions} from './questions';

export class QuizMetadata {

title: string;
description:string;
quiz_type:string;
start_date:string;
end_date:string;
duration:number;
atmots_allowed:number;
randomize:boolean;
user_id:number;
questions:[Questions];

}