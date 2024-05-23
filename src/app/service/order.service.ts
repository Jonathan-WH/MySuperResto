// src/app/order.service.ts

import { Injectable } from '@angular/core';
import { Recipe } from '../home/home.component';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, query, updateDoc, doc } from '@angular/fire/firestore';
import { timestamp } from 'rxjs';
import {map} from 'rxjs/operators';
import {Order} from '../kitchen/kitchen.component';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  constructor(private readonly _firestore: Firestore) {}

  data$ = this.loadData();
  
  // Enregistrer une nouvelle commande dans le Firestore
  sendOrder(order: { quantity?: number, recipe?: Partial<Recipe> }[]) {
    const collectionOrder = collection(this._firestore,'order');
    addDoc(collectionOrder, { 
      order: order,
      timestamp: Date.now(),
      status: 'pending'});
  }

  // Récupérer toutes les commandes depuis le Firestore
  loadData() {
    const collectionOrder = collection(this._firestore, 'order');
    const q = query(collectionOrder)
    return collectionData(q, {idField: 'id'}).pipe(
      map((orders: any[]) => (orders as Order[]).sort((a, b) => b.timestamp - a.timestamp))
    )
  }

  updateOrderStart(id: string) {
    const orderDoc = doc(this._firestore, 'order', id);
    updateDoc(orderDoc, { status: 'started' });
  }

  updateOrderCancel(id: string) {
    const orderDoc = doc(this._firestore, 'order', id);
    updateDoc(orderDoc, { status: 'cancelled' });
   

  }

  updateOrderFinish(id: string) {
    const orderDoc = doc(this._firestore, 'order', id);
    updateDoc(orderDoc, { status: 'finished' });
   

  }
}
