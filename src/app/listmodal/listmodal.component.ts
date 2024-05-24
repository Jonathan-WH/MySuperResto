import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonAvatar, IonText, IonNote, IonButton, IonToast, IonAccordionGroup, IonAccordion, IonIcon, IonList, IonButtons } from '@ionic/angular/standalone';
import { TotalCartPricePipe } from '../Pipe/total-cart-price/total-cart-price.pipe';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Recipe } from '../home/home.component';
import { RemovefromcartService } from '../service/addremovefromcart.service';
import { Input } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { CartComponent } from '../cart/cart.component';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-listmodal',
  templateUrl: './listmodal.component.html',
  styleUrls: ['./listmodal.component.scss'],
  standalone: true,
  imports: [ TotalCartPricePipe, CommonModule, CartComponent, IonContent, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonAvatar, IonText, IonNote, IonButton, IonToast, IonAccordionGroup, IonAccordion, IonIcon, IonList, IonButtons]
})
export class ListmodalComponent  implements OnInit {
  @Input() order?:{ quantity?: number, recipe?: Partial<Recipe> }[];
  

  // Injection du service dans le constructeur
  constructor(
    public modalectrl:ModalController,
    private orderService: OrderService,
    private removeFromCartService: RemovefromcartService,
    
  ) { }

  //Utiliser le service pour envoyer la commande
  sendOrder() {
    if(this.order){
      this.orderService.sendOrder(this.order),
      //remettre a zéro le cart avec ClearCart
      this.removeFromCartService.clearCart();
    }
    
  }

  
  

  ngOnInit() {}

  

}
