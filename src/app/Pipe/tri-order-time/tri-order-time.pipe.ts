import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'triOrderTime',
  standalone: true
})

export class TriOrderTimePipe implements PipeTransform {
  
  transform(array: any[], field:string): any[]{
return array.sort((a,b) => b[field] - a[field])
  }


}


