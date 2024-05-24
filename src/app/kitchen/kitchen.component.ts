// kitchen.component.ts
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { IonContent, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonAvatar, IonText, IonNote, IonButton, IonToast, IonAccordionGroup, IonAccordion, IonIcon, IonList } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SplashScreenComponent } from '../splash-screen/splash-screen.component';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { TriOrderTimePipe } from '../Pipe/tri-order-time/tri-order-time.pipe';
import { of } from 'rxjs';
import { Recipe } from '../home/home.component';

export interface Order {
  id: string;
  order: { quantity?: number, recipe?: Partial<Recipe> }[];
  timestamp: number;
  status: string;
}

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule, RouterLink, SplashScreenComponent, TriOrderTimePipe, IonContent, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonAvatar, IonText, IonNote, IonButton, IonToast, IonAccordionGroup, IonAccordion, IonIcon, IonList],

  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss'],
  providers: [DatePipe]
})
export class KitchenComponent implements OnInit {
  title: string = 'Kitchen';
  orders: Observable<any[]> = of([]);

  constructor(
    private orderService: OrderService,
    private datePipe: DatePipe,
  ) { }

  formatDate(timestamp: number): string {
    // Utiliser 'medium' ou tout autre format que vous préférez
    return this.datePipe.transform(timestamp, 'medium')!;
  }

  ngOnInit() {
    // Récupérer les commandes depuis le service
    this.orders = this.orderService.loadData();
  }

  updateOrderStart(id: string) {
    this.orderService.updateOrderStart(id);
  }

  updateOrderFinish(id: string) {
    this.orderService.updateOrderFinish(id);
  }
  updateOrderCancel(id: string) {
    this.orderService.updateOrderCancel(id);
  }

  trackItems(index: number, item: any) {
    return item.id;

  }


}