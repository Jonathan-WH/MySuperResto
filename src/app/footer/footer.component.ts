import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  @Output() public FooterEvent: EventEmitter<string> = new EventEmitter();

  emitEvent() {
    console.log('[INFO] EmitEvent to parent component.');
    this.FooterEvent.emit('event from child')
  }

  @Input() title?: string;
}
