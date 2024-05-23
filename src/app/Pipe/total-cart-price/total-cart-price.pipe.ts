import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../../home/home.component';
@Pipe({
  name: 'totalCartPrice',
  standalone: true
})
export class TotalCartPricePipe implements PipeTransform {

  transform(order: { quantity?: number, recipe?: Partial<Recipe> }[] | null): number {
    if (!order) return 0;
    return order.reduce((acc, item) => acc + ((item?.recipe?.price || 0) * (item?.quantity || 0) / 100), 0);
  }

}
