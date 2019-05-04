import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Questions} from '../model/questions';

@Pipe({
  name: 'subjectFilter'
})


@Injectable()
export class SubjectFilterPipe implements PipeTransform {
  
  transform(items:Questions[], value: string, args:string[]): any {
  console.log("the value of value " + value);
  console.log("the value of value " + items)
    // let value1 = args[0]
    if (!items)  return items;
    return items.filter(q => q.subject == value);

  }

}