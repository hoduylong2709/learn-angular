import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../products/product';

@Pipe({
    name: 'filterString'
})
export class FilterStringPipe implements PipeTransform {
    transform(items: IProduct[], filter: string): IProduct[] {
        if (!items || !filter)
            return items;

        return items.filter((item: IProduct) => item.productName.toLowerCase().includes(filter.toLowerCase()));
    }
}