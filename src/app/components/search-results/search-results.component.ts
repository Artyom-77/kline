import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public advancedOpen: boolean = false
  public isModalVisible: boolean = false;
  public loadMoreVisible: boolean = false;
  public selectedKeywordsList  : any[] = [];
  public layoutType : number = 2;
  public breadcrumpData: any[] = [{
    home: 'Search Results',
  }]
 public keywordsList: any[] = [
  {
    id: 1,
    label: 'Conventional PAO'
  },
  {
    id: 2,
    label: 'HDMO'
  },
  {
    id: 3,
    label: 'Gear Oil'
  },
  {
    id: 4,
    label: 'Grease'
  },
  {
    id: 5,
    label: 'PCMO'
  },
 ]
 public searchText: string = ''
 public arr : any[] = [1,2,3,4,5,6,7,8]
 public booleanOperatorsList: any[] = [1];

  ngOnInit(): void {

  }

  openLoadMoreModal() {
    this.loadMoreVisible = true;
    document.querySelector('.kline-app')?.classList.add('fixed');
    console.log('searchText',this.searchText);
    
  }
  onCloseLoadMoreModal() {
    this.loadMoreVisible = false;
    document.querySelector('.kline-app')?.classList.remove('fixed');
  }
  openModal() {
    this.isModalVisible = true;
    document.querySelector('.kline-app')?.classList.add('fixed');
  }
  onCloseModal() {
    this.isModalVisible = false;
    document.querySelector('.kline-app')?.classList.remove('fixed');
  }

  handleMultipleKeywardsChange(arg: any[]) {
    console.log('arg',arg)
    this.selectedKeywordsList = this.keywordsList.filter((item) =>
      arg.includes(item.label)
    );
  }

}
