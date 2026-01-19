import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    if (args.length) {
      const shortenString: string = value.substring(0, args[0]) + '...';
      return shortenString;
    }
    const shortenString: string = value.substring(0, 10) + '...';
    return shortenString;
  }

}
