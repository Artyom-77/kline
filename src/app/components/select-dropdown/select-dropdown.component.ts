import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss'],
})
export class SelectDropdownComponent implements OnInit {
  public isDropdownOpen: boolean = false;
  public selectedItem: any = '';
  @Output() itemEvent = new EventEmitter<any>();

  @Input() dropdownData: any = [];
  @Input() dropdownTitle: string = '';
  @Input() firstItemSelected: boolean | undefined;

  ngOnInit(): void {
    if (this.firstItemSelected) {
      this.selectedItem = this.dropdownData[0].label;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toggleOption(option: any): void {
    this.selectedItem = option.label;
    this.itemEvent.emit(this.selectedItem);
  }
}
