import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exemplo'
})
export class ExemploPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    return value.replace(/\//gi,'%');
  }

}
