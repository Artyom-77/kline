import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() onClose = new EventEmitter();
  @Input() title?: string;

  close() {
    this.onClose.emit();
  }
}
