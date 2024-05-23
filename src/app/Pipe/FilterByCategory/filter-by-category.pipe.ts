import { Pipe, PipeTransform } from '@angular/core';
import { Category, Recipe } from '../../home/home.component';


@Pipe({
  name: 'filterByCategory',
  standalone: true
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(categories: Category[], selectedCategoryUuid: string): Recipe[] {

    if (!selectedCategoryUuid) {
      return [];
    }
    const category = categories.find(cat => cat.uuid === selectedCategoryUuid);
    return category ? category.recipes : [];;
  }

}
