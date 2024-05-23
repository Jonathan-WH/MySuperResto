import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Recipe } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { TotalCartPricePipe } from '../Pipe/total-cart-price/total-cart-price.pipe';
import { RemovefromcartService } from '../service/addremovefromcart.service';
import { Observable, firstValueFrom } from 'rxjs';
import { IonicModule, ModalController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular/standalone';
import { ListmodalComponent } from '../listmodal/listmodal.component';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule, TotalCartPricePipe, IonicModule, ListmodalComponent]
})
export class CartComponent {
  
  order$: Observable<{ quantity?: number, recipe?: Partial<Recipe> }[]> = this.removeFromCartService.getOrder();

  total: number = 0 ;

  leaveAnimation: any;
  enterAnimation: any;

  

  // Injection du service dans le constructeur
  constructor(
    private removeFromCartService: RemovefromcartService,
    private modalCtrl: ModalController
  ) { }

  removeFromCart(recipe?: Partial<Recipe>) {
    if (recipe) {
      this.removeFromCartService.removeFromCart(recipe as Recipe);
    }
  }


 

  clearCart() {
    this.removeFromCartService.clearCart();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ListmodalComponent,
      componentProps: {
        order: this.removeFromCartService.getOrderValue()
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

   
  }
}
  
