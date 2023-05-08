import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multiple-select-dropdown',
  templateUrl: './multiple-select-dropdown.component.html',
  styleUrls: ['./multiple-select-dropdown.component.scss'],
})
export class MultipleSelectDropdownComponent {
  public isDropdownOpen: boolean = false;
  public selectedItems: any[] = [];
  @Output() itemEvent = new EventEmitter<any>();
  @Input() maxLimit?: number;
  @Input() minLimit?: number;
  @Input() limit?: number;

  @Input() dropdownData: any = [];
  @Input() dropdownTitle: string = '';
  @Input() firstItemSelected: boolean | undefined;

  ngOnInit(): void {
    if (this.firstItemSelected) {
      this.selectedItems.push(this.dropdownData[0].label);
    }
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleOption(option: string): void {
    const index = this.selectedItems.indexOf(option);
    if (this.maxLimit && this.minLimit) {
      if (index > -1) {
        this.selectedItems.splice(index, 1);
      } else {
        if (this.selectedItems.length + 1 <= this.maxLimit) {
          this.selectedItems.push(option);
          if (this.selectedItems.length === this.minLimit) {
            this.itemEvent.emit(this.selectedItems);
          }
        }
      }
    }
  }
}
