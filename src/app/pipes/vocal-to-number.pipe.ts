import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vocalToNumber',
})
export class VocalToNumberPipe implements PipeTransform {
  transform(value: string): string {
    let newString = value.replace(/a/gi, '@');
    newString = value.replace(/e/gi, '@');
    newString = value.replace(/i/gi, '3');
    newString = value.replace(/o/gi, '1');
    newString = value.replace(/u/gi, '0');
    return newString;
  }
}
