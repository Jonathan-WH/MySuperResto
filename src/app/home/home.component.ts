
import { Component, Pipe, PipeTransform, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import database from '../assets/data.json';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FilterByCategoryPipe } from '../Pipe/FilterByCategory/filter-by-category.pipe';
import { CartComponent } from '../cart/cart.component';
import { TotalCartPricePipe } from '../Pipe/total-cart-price/total-cart-price.pipe';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { RemovefromcartService } from '../service/addremovefromcart.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SplashScreenComponent } from '../splash-screen/splash-screen.component';


export interface Recipe {
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  uuid: string;
  nutritionalInfo: {
    allergens: string;
    displayString: string;
  };
  hasCustomizations: boolean;
}

export interface Category {
  title: string;
  uuid: string;
  recipes: Recipe[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule,
    FooterComponent,
    FilterByCategoryPipe,
    CartComponent,
    TotalCartPricePipe,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    IonicModule,
    SplashScreenComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title!: string; //= database.title;
  categories!: Category[] //= database.data;
  selectedCategoryUuid!: string | null //= null;
  order: { quantity: number, recipe: Recipe }[] = [];



  listenChildEvent($event: string) {
    console.log('[INFO] EmitEvent to parent component.', $event)
  }





  constructor(route: ActivatedRoute, apiService: ApiService, private FormService: RemovefromcartService, private api: ApiService) {
    console.log('ici avec resolve>>>>', Date.now());
    api.getData().then((database) => {
      console.log('ici sans resolve>>>>>', Date.now());
    });
    const { title, data } = route.snapshot.data['database'];
    this.title = title;
    this.categories = data;
    this.selectedCategoryUuid = data[0];

  }

  getSelectedCategoryName(): string | undefined {
    const category = this.categories?.find(cat => cat.uuid === this.selectedCategoryUuid);
    return category ? category.title : undefined;
  }

  AddToCart(Recipe: Recipe) {
    this.FormService.AddToCart(Recipe)
  }


  @Output() updateCart = new EventEmitter();

  cartUpdated(): void {
    console.log('Cart updated!');
    // Add any actions needed when the cart is updated
  }



}
