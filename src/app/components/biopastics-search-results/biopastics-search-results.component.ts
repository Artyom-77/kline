import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'title' })
export class TitlePipe implements PipeTransform {
  transform(item: any): string {
    return item.text + (item.price ? ` ($${item.price})` : '');
  }
}
@Component({
  selector: 'app-biopastics-search-results',
  templateUrl: './biopastics-search-results.component.html',
  styleUrls: ['./biopastics-search-results.component.scss'],
})
export class BiopasticsSearchResultsComponent implements OnInit {
  public advancedOpen: boolean = false;
  public isModalVisible: boolean = false;
  public selectedKeywordsList: any[] = [];
  public newsList: any[] = [];

  selectedEmployees: any[] = [];

  showCheckBoxesModes: string[] = ['normal', 'selectAll', 'none'];

  showCheckBoxesMode: string = this.showCheckBoxesModes[0];

  selectionModes: string[] = ['multiple', 'single'];

  selectionMode: string = this.selectionModes[0];

  selectNodesRecursive = true;

  selectByClick = false;

  isRecursiveDisabled = false;

  isSelectionModeDisabled = false;

  public employees: any[] = [
    {
      id: 1,
      fullName: 'John Heart',
      prefix: 'Dr.',
      position: 'CEO',
      expanded: true,
      items: [
        {
          id: 2,
          fullName: 'Samantha Bright',
          prefix: 'Dr.',
          position: 'COO',
          expanded: true,
          items: [
            {
              id: 3,
              fullName: 'Kevin Carter',
              prefix: 'Mr.',
              position: 'Shipping Manager',
            },
            {
              id: 14,
              fullName: 'Victor Norris',
              prefix: 'Mr.',
              selected: true,
              position: 'Shipping Assistant',
            },
          ],
        },
        {
          id: 4,
          fullName: 'Brett Wade',
          prefix: 'Mr.',
          position: 'IT Manager',
          expanded: true,
          items: [
            {
              id: 5,
              fullName: 'Amelia Harper',
              prefix: 'Mrs.',
              position: 'Network Admin',
            },
            {
              id: 6,
              fullName: 'Wally Hobbs',
              prefix: 'Mr.',
              position: 'Programmer',
            },
            {
              id: 7,
              fullName: 'Brad Jameson',
              prefix: 'Mr.',
              position: 'Programmer',
            },
            {
              id: 8,
              fullName: 'Violet Bailey',
              prefix: 'Ms.',
              position: 'Jr Graphic Designer',
            },
          ],
        },
        {
          id: 9,
          fullName: 'Barb Banks',
          prefix: 'Mrs.',
          position: 'Support Manager',
          expanded: true,
          items: [
            {
              id: 10,
              fullName: 'Kelly Rodriguez',
              prefix: 'Ms.',
              position: 'Support Assistant',
            },
            {
              id: 11,
              fullName: 'James Anderson',
              prefix: 'Mr.',
              position: 'Support Assistant',
            },
          ],
        },
      ],
    },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('../../../assets/json/bioplastics_data.json')
      .subscribe((data: any) => {
        this.newsList = data;
      });
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
    console.log('arg', arg);
    // this.selectedKeywordsList = this.keywordsList.filter((item) =>
    //   arg.includes(item.label)
    // );
  }

  treeViewSelectionChanged(e) {
    this.syncSelection(e.component);
  }

  treeViewContentReady(e) {
    this.syncSelection(e.component);
  }

  syncSelection(treeView) {
    const selectedEmployees = treeView
      .getSelectedNodes()
      .map((node) => node.itemData);

    this.selectedEmployees = selectedEmployees;
  }

  showCheckBoxesModeValueChanged(e) {
    this.showCheckBoxesMode = e.value;
    this.isSelectionModeDisabled = e.value === 'selectAll';
    if (e.value === 'selectAll') {
      this.selectionMode = 'multiple';
      this.isRecursiveDisabled = false;
    }
  }

  selectionModeValueChanged(e) {
    this.selectionMode = e.value;
    this.isRecursiveDisabled = e.value === 'single';
    if (e.value === 'single') {
      this.selectNodesRecursive = false;
      // this.treeView.instance.unselectAll();
    }
  }
}
