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

  ngOnInit(): void {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toggleOption(option: any): void {
    this.selectedItem = option.label;
    this.itemEvent.emit(this.selectedItem);
  }


  // toggleMultipleOption(option: string): void {
  //   this.selectedItem = option;
  //   this.dropdownData.map((item: any) => {
  //     this.keyItem = Object.keys(item).filter(
  //       (elem) => elem === this.dropdownDataKey
  //     );
  //     // this.keyItem = Object.keys(item);
  //     console.log('this.keyItem', this.keyItem[0]);
  //     // console.log('this.keyItem', this.keyItem);
  //   });
  // }
}
