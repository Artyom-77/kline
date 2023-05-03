import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss'],
})
export class SelectDropdownComponent implements OnInit {
  public isDropdownOpen: boolean = false;
  public selectedItem: string = '';
  @Input() dropdownData: any = [];
  @Input() dropdownTitle: string = '';
  @Input() dropdownDataKey: string = '';
  public keyItem?: any;
  ngOnInit(): void {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toggleOption(option: string): void {
    this.selectedItem = option;
  }
  toggleMultipleOption(option: string): void {
    this.selectedItem = option;
    this.dropdownData.map((item: any) => {
      this.keyItem = Object.keys(item).filter(
        (elem) => elem === this.dropdownDataKey
      );
      // this.keyItem = Object.keys(item);
      console.log('this.keyItem', this.keyItem[0]);
      // console.log('this.keyItem', this.keyItem);
    });
  }
  onOutclick() {
    if (this.isDropdownOpen === true) {
      this.isDropdownOpen = false;
    }
  }
}
