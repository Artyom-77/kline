import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() btnText?: string;
  @Input() type?: string;
  @Input() icon?: boolean;
  @Input() isActive?: boolean;
  @Input() iconName?: string;
}
