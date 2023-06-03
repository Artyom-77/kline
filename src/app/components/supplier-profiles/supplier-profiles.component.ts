import { Component, OnInit } from '@angular/core';
import { SupplierProfilesService } from 'src/app/services/supplier-profiles/supplier-profiles.service';

@Component({
  selector: 'app-supplier-profiles',
  templateUrl: './supplier-profiles.component.html',
  styleUrls: ['./supplier-profiles.component.scss'],
})
export class SupplierProfilesComponent implements OnInit {
  public selectedMainTab: number = 1;
  public companiesList: any[] = [];
  public supplierDropList: any[] = [
    {
      id: 1,
      label: 'Bahrain Petroleum Company (BLBOC)',
    },
    {
      id: 2,
      label: 'Abu Dhabi National Oil Company- ADNOC',
    },
    {
      id: 3,
      label: 'Shell',
    },
    {
      id: 4,
      label: 'Petronas',
    },
    {
      id: 5,
      label: 'SK',
    },
    {
      id: 6,
      label: 'S-Oil',
    },
  ];
  public regionsList: any[] = [
    {
      id: 1,
      label: 'Bahrain',
    },
    {
      id: 2,
      label: 'Abu Dhabi',
    },
    {
      id: 3,
      label: 'Qatar',
    },
    {
      id: 4,
      label: 'Malaysia',
    },
    {
      id: 5,
      label: 'Indonesia',
    },
    {
      id: 6,
      label: 'South Korea',
    },
  ];
  public selectedCompanyList: any[] = [];

  public unitList: any[] = [
    {
      id: 1,
      label: 'KTPA',
    },
    {
      id: 2,
      label: 'B/D',
    },
  ];
  public selectedCompanyName: string = 'Bahrain Petroleum Company (BLBOC)';
  public selectedCompany?: any;
  public breadcrumpData: any[] = [{
    home: 'Basestock Market Watch',
    main: 'Supplier Profiles and Competitive Landscape',
    // tab: 'Tabular View'
  }]
  constructor(private service: SupplierProfilesService) {
    this.companiesList = service.suppliersList;
  }
  ngOnInit(): void {
    this.selectedCompany = this.companiesList.filter(
      (item) => item.Company === this.selectedCompanyName
    )[0];
  }

  handleSupplierChange(arg: string) {
    this.selectedCompany = this.companiesList.filter(
      (item) => item.Company === arg
    )[0];
  }
  handleMultipleSupplierChange(arg: any[]) {
    this.selectedCompanyList = this.companiesList.filter((item) =>
      arg.includes(item.Company)
    );
  }
  handleRegionChange(arg: string) {}
  handleMultipleRegionChange(arg: any) {}
  handleUnitChange(arg: string) {}
}
