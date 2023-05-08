import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-supplier-profiles-filtering-cards',
  templateUrl: './supplier-profiles-filtering-cards.component.html',
  styleUrls: ['./supplier-profiles-filtering-cards.component.scss'],
})
export class SupplierProfilesFilteringCardsComponent {
  @Input() cardsData?: any[] = [];
}
