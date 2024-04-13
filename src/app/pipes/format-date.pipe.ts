import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'formatDate',
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): unknown {
    let date = new Date(value);
    return moment(date).format('MMM DD, YYYY');
  }
}
