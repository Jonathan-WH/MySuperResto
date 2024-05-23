import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { IonicModule } from '@ionic/angular';
import '@khmyznikov/pwa-install'

@Component({
  selector: 'app-root',
  template: `<app-footer (childEvent)="listenChildEvent($event)"></app-footer>`,
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    KitchenComponent,
    IonicModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class AppComponent {
  


}
