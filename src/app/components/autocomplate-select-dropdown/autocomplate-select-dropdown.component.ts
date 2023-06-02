import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-autocomplate-select-dropdown',
  templateUrl: './autocomplate-select-dropdown.component.html',
  styleUrls: ['./autocomplate-select-dropdown.component.scss']
})
export class AutocomplateSelectDropdownComponent {
  public isDropdownOpen: boolean = false;
  public selectedItems: any[] = [];
  @Output() itemEvent = new EventEmitter<any>();
  @Input() maxLimit?: number;
  @Input() minLimit?: number;
  @Input() limit?: number;

  @Input() dropdownData: any = [];
  @Input() dropdownTitle: string = '';
  @Input() firstItemSelected: boolean | undefined;
  myInputValue: string;
  inputValue: string;
  public dData: any[] = []
  ngOnInit(): void {
    if (this.firstItemSelected) {
      this.selectedItems.push(this.dropdownData[0].label);
    }
    this.dData = this.dropdownData
  }
  toggleDropdown() {
    this.isDropdownOpen = true;
  }

  onInputChange() {
    console.log('this.inputValue',this.inputValue);
    if(this.inputValue.length){
      console.log('item?.lable?.toLowerCase().includes(this.inputValue.toLowerCase())',this.dropdownData)
      console.log('SAADSSADSAD',this.inputValue)
      // console.log('item?.lable?.toLowerCase().includes(this.inputValue.toLowerCase())',this.dropdownData[1]?.lable?.toLowerCase().includes(this.inputValue.toLowerCase()))
      // console.log('item?.lable?.toLowerCase().includes(this.inputValue.toLowerCase())',this.dropdownData[2]?.lable?.toLowerCase().includes(this.inputValue.toLowerCase()))
      // console.log('item?.lable?.toLowerCase().includes(this.inputValue.toLowerCase())',this.dropdownData[3]?.lable?.toLowerCase().includes(this.inputValue.toLowerCase()))
      // console.log('item?.lable?.toLowerCase().includes(this.inputValue.toLowerCase())',this.dropdownData[4]?.lable?.toLowerCase().includes(this.inputValue.toLowerCase()))
      this.dData = this.dropdownData.filter(item => item?.label?.toLowerCase().includes(this.inputValue.toLowerCase()) )
    }
    else{
      this.dData = this.dropdownData
    }
    console.log('this.dData',this.dData);
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
