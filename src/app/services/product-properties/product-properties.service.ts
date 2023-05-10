import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ProductPropertiesService {
  public dropdownProductItems: any[] = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Group I' },
    { id: 3, label: 'Group II' },
    { id: 4, label: 'Group III' },
    { id: 5, label: 'PAG' },
    { id: 6, label: 'PAO' },
    { id: 7, label: 'PIB' },
    { id: 8, label: 'Phosphate Esters' },
    { id: 9, label: 'Refined Oil and Biobased Oil' },
    { id: 10, label: 'Synthetic Ester' },
  ];

  public dropdownCompanyItems: any[] = [
    { id: 1, label: 'All' },
    { id: 2, label: 'American Refining Group' },
    { id: 3, label: 'Aramco' },
    { id: 4, label: 'Calumet' },
    { id: 5, label: 'Cepsa' },
    { id: 6, label: 'Exxon Mobil' },
    { id: 7, label: 'HollyFrontier' },
  ];

  public productPropertiesData: any[] = [
    {
      id: uuidv4(),
      companyName: 'American Refining Group',
      productName: 'Group I',
      fileName: 'ARG_CORE150',
      uploadDate: '01/02/2023'

    },
    {
      id: uuidv4(),
      companyName: 'American Refining Group',
      productName: 'Group II',
      fileName: 'ARG_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'American Refining Group',
      productName: 'Group III',
      fileName: 'ARG_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'American Refining Group',
      productName: 'PAG',
      fileName: 'ARG_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'American Refining Group',
      productName: 'PAO',
      fileName: 'ARG_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'American Refining Group',
      productName: 'PIB',
      fileName: 'ARG_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'American Refining Group',
      productName: 'Phosphate Esters',
      fileName: 'ARG_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'American Refining Group',
      productName: 'Refined Oil and Biobased Oil',
      fileName: 'ARG_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'American Refining Group',
      productName: 'Synthetic Ester',
      fileName: 'ARG_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Aramco',
      productName: 'Group I',
      fileName: 'Aramco_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Aramco',
      productName: 'Group II',
      fileName: 'Aramco_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Aramco',
      productName: 'Group III',
      fileName: 'Aramco_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Aramco',
      productName: 'PAG',
      fileName: 'Aramco_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Aramco',
      productName: 'PAO',
      fileName: 'Aramco_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Aramco',
      productName: 'PIB',
      fileName: 'Aramco_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Aramco',
      productName: 'Phosphate Esters',
      fileName: 'Aramco_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Aramco',
      productName: 'Refined Oil and Biobased Oil',
      fileName: 'Aramco_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Aramco',
      productName: 'Synthetic Ester',
      fileName: 'Aramco_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Calumet',
      productName: 'Group I',
      fileName: 'Calumet_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Calumet',
      productName: 'Group II',
      fileName: 'Calumet_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Calumet',
      productName: 'Group III',
      fileName: 'Calumet_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Calumet',
      productName: 'PAG',
      fileName: 'Calumet_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Calumet',
      productName: 'PAO',
      fileName: 'Calumet_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Calumet',
      productName: 'PIB',
      fileName: 'Calumet_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Calumet',
      productName: 'Phosphate Esters',
      fileName: 'Calumet_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Calumet',
      productName: 'Refined Oil and Biobased Oil',
      fileName: 'Calumet_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Calumet',
      productName: 'Synthetic Ester',
      fileName: 'Calumet_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Cepsa',
      productName: 'Group I',
      fileName: 'Cepsa_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Cepsa',
      productName: 'Group II',
      fileName: 'Cepsa_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Cepsa',
      productName: 'Group III',
      fileName: 'Cepsa_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Cepsa',
      productName: 'PAG',
      fileName: 'Cepsa_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Cepsa',
      productName: 'PAO',
      fileName: 'Cepsa_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Cepsa',
      productName: 'PIB',
      fileName: 'Cepsa_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Cepsa',
      productName: 'Phosphate Esters',
      fileName: 'Cepsa_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Cepsa',
      productName: 'Refined Oil and Biobased Oil',
      fileName: 'Cepsa_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Cepsa',
      productName: 'Synthetic Ester',
      fileName: 'Cepsa_CORE150',
      uploadDate: '01/02/2023'
    },

    {
      id: uuidv4(),
      companyName: 'Exxon Mobil',
      productName: 'Group I',
      fileName: 'Exxon_Mobil_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Exxon Mobil',
      productName: 'Group II',
      fileName: 'Exxon_Mobil_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Exxon Mobil',
      productName: 'Group III',
      fileName: 'Exxon_Mobil_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Exxon Mobil',
      productName: 'PAG',
      fileName: 'Exxon_Mobil_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Exxon Mobil',
      productName: 'PAO',
      fileName: 'Exxon_Mobil_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Exxon Mobil',
      productName: 'PIB',
      fileName: 'Exxon_Mobil_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Exxon Mobil',
      productName: 'Phosphate Esters',
      fileName: 'Exxon_Mobil_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Exxon Mobil',
      productName: 'Refined Oil and Biobased Oil',
      fileName: 'Exxon_Mobil_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'Exxon Mobil',
      productName: 'Synthetic Ester',
      fileName: 'Exxon_Mobil_CORE150',
      uploadDate: '01/02/2023'
    },

    {
      id: uuidv4(),
      companyName: 'HollyFrontier',
      productName: 'Group I',
      fileName: 'HollyFrontier_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'HollyFrontier',
      productName: 'Group II',
      fileName: 'HollyFrontier_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'HollyFrontier',
      productName: 'Group III',
      fileName: 'HollyFrontier_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'HollyFrontier',
      productName: 'PAG',
      fileName: 'HollyFrontier_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'HollyFrontier',
      productName: 'PAO',
      fileName: 'HollyFrontier_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'HollyFrontier',
      productName: 'PIB',
      fileName: 'HollyFrontier_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'HollyFrontier',
      productName: 'Phosphate Esters',
      fileName: 'HollyFrontier_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'HollyFrontier',
      productName: 'Refined Oil and Biobased Oil',
      fileName: 'HollyFrontier_CORE150',
      uploadDate: '01/02/2023'
    },
    {
      id: uuidv4(),
      companyName: 'HollyFrontier',
      productName: 'Synthetic Ester',
      fileName: 'HollyFrontier_CORE150',
      uploadDate: '01/02/2023'
    },
  ];

  constructor() {}
}
