import { Injectable } from '@angular/core';
import { Recipe } from '../home/home.component';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RemovefromcartService {
  orderForm: FormArray<
    FormGroup<{
      quantity: FormControl;
      recipe: FormGroup<{
        uuid: FormControl;
        price: FormControl;
        title: FormControl;
        imageUrl: FormControl
      }>;
    }>
  > = new FormArray(
    [],
    Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(3),
    ])
  ) as any;

  constructor() { }

  removeFromCart(recipeToRemove: Recipe): void {
    const index = this.orderForm.value.findIndex(item => item?.recipe?.uuid === recipeToRemove.uuid);
    if (index !== -1) {
      const itemControl = this.orderForm.at(index) as FormGroup;
      const currentQuantity = itemControl.get('quantity')?.value || 0;
      if (currentQuantity > 1) {
        itemControl.patchValue({ quantity: currentQuantity - 1 });
      } else {
        this.orderForm.removeAt(index);
      }
    }
  }

  getOrder() {
    return this.orderForm.valueChanges;
  }

  getOrderValue() {
    return this.orderForm.value;
  }


  AddToCart(recipe: Recipe): void {
    const existingOrderIndex = this.orderForm.value.findIndex(o => o.recipe?.uuid === recipe.uuid);

    if (existingOrderIndex > -1) {
      // Trouver le FormGroup correspondant et mettre à jour la quantité
      const itemControl = this.orderForm.at(existingOrderIndex) as FormGroup;
      const currentQuantity = itemControl.get('quantity')?.value || 0;
      itemControl.patchValue({ quantity: currentQuantity + 1 });
    } else {
      // Créer un nouveau FormGroup et l'ajouter à orderForm
      const newItem = new FormGroup({
        quantity: new FormControl(1, Validators.compose([Validators.required, Validators.min(1)])),
        recipe: new FormGroup({
          price: new FormControl(recipe.price),
          uuid: new FormControl(recipe.uuid),
          title: new FormControl(recipe.title),
          imageUrl: new FormControl(recipe.imageUrl)
        })
      });
      this.orderForm.push(newItem);
    }

    console.log(this.orderForm.value);

  }

  clearCart() {
    this.orderForm.clear();
  }

}
