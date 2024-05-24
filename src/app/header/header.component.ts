import { Component, Input } from '@angular/core';

import { IonToolbar, IonTitle, IonHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ IonHeader, IonToolbar, IonTitle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() title?: string;
}
