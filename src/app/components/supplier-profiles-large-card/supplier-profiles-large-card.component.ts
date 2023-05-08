import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-supplier-profiles-large-card',
  templateUrl: './supplier-profiles-large-card.component.html',
  styleUrls: ['./supplier-profiles-large-card.component.scss'],
})
export class SupplierProfilesLargeCardComponent {
  @Input() cardData?: any;
}
