import { Component, OnInit } from '@angular/core';
import { SupplierProfilesService } from 'src/app/services/supplier-profiles/supplier-profiles.service';

@Component({
  selector: 'app-supplier-profiles',
  templateUrl: './supplier-profiles.component.html',
  styleUrls: ['./supplier-profiles.component.scss'],
})
export class SupplierProfilesComponent implements OnInit {
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
  public selectedCompanyName: string = 'Bahrain Petroleum Company (BLBOC)';
  public selectedCompany?: any;
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
}
