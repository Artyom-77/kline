import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebinarsService } from 'src/app/services/webinars/webinars.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-webinars',
  templateUrl: './webinars.component.html',
  styleUrls: ['./webinars.component.scss'],
})
export class WebinarsComponent implements OnInit {
  public uniqueId: any = uuidv4();
  public industryFilterItems: any[] = [
    'All',
    'Agrochemicals/Specialty Pesticides',
    'Beauty and Wellbeing',
    'Chemicals & Materials',
    'Energy',
    'Food & Nutrition',
    'Healthcare',
    'Industrial & Institutional Cleaning',
  ];
  public selectedIndustry: string = '';
  public webinarsList: any[] = [];
  public filteredWebinarsList: any[] = [];
  public dateList: string[] = ['All', '2021', '2022', '2023'];
  public selectedDate: string = '';
  public searchTerm: string = '';
  public router: any;
  public isOpen: boolean = false;
  public isDateOpen: boolean = false;
  public selectedOptions: string[] = [];
  public isModalVisible: boolean = false;

  constructor(
    private webinaryService: WebinarsService,
    private routers: Router
  ) {
    this.webinarsList = webinaryService.webinarsListDummyData;
    this.router = routers;
  }

  ngOnInit(): void {
    this.filteredWebinarsList = this.webinarsList;
    console.log('this.webinarsList', this.webinarsList);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  toggleDateDropdown() {
    this.isDateOpen = !this.isDateOpen;
  }

  onOutclick() {
    if (this.isOpen === true) {
      this.isOpen = false;
    }
  }
  onOutclickDate() {
    if (this.isDateOpen === true) {
      this.isDateOpen = false;
    }
  }

  openModal() {
    this.isModalVisible = true;
    document.querySelector('.kline-app')?.classList.add('fixed');
  }

  onCloseModal() {
    this.isModalVisible = false;
    document.querySelector('.kline-app')?.classList.remove('fixed');
    console.log('this.isModalVisible', this.isModalVisible);
  }

  toggleOption(option: string) {
    this.selectedIndustry = option;
  }
  toggleDateOption(option: string) {
    this.selectedDate = option;
  }

  removeFilters(): void {
    this.searchTerm = '';
    this.selectedDate = '';
    this.selectedIndustry = '';
    this.filteredWebinarsList = this.webinarsList;
  }
}
