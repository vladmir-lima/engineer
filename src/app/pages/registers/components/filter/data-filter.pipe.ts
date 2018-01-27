import * as _ from 'lodash';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

    transform(array: any[], fieldQuery: string, query: string): any {
        if (query) {
            return _.filter(array, row=>row[fieldQuery].toLowerCase().indexOf(query.toLowerCase()) > -1);
        }
        return array;
    }
}