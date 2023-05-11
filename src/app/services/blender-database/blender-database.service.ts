import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class BlenderDatabaseService {
  public regionsList: any[] = [
    {
      id: 1,
      label: 'All',
    },
    {
      id: 2,
      label: 'Argentina',
    },
    {
      id: 3,
      label: 'Chile',
    },
    {
      id: 4,
      label: 'Columbia',
    },
    {
      id: 5,
      label: 'Panama',
    },
    {
      id: 6,
      label: 'Uruguay',
    },
    {
      id: 7,
      label: 'Brazil',
    },
  ];

  public groupList: any[] = [
    {
      id: 1,
      label: 'All',
    },
    {
      id: 2,
      label: 'Group I',
    },
    {
      id: 3,
      label: 'Group II',
    },
    {
      id: 4,
      label: 'Group II+',
    },
    {
      id: 5,
      label: 'Group III',
    },
    {
      id: 6,
      label: 'Group III+',
    },
  ];

  public nameList: any[] = [
    {
      id: 1,
      label: 'All',
    },
    {
      id: 2,
      label: 'Total',
    },
    {
      id: 3,
      label: 'La Plata Refinery',
    },
    {
      id: 4,
      label: 'AXION energy',
    },
    {
      id: 5,
      label: 'Shell Sola Plant',
    },
    {
      id: 6,
      label: 'Petrobras',
    },
    {
      id: 7,
      label: 'Petronas Argentina SA Buenos Aires Plant',
    },
    {
      id: 8,
      label: 'Gulf Oil Argentina',
    },
    {
      id: 9,
      label: 'DAPSA',
    },
    {
      id: 10,
      label: 'Norte Repuestos SRL',
    },
    {
      id: 11,
      label: 'Tecnifos SA',
    },
    {
      id: 12,
      label: 'Total Chile S.A',
    },
    {
      id: 14,
      label: 'COPEC',
    },
    {
      id: 15,
      label: 'Aceites Industriales Ltda',
    },
    {
      id: 16,
      label: 'Luval',
    },
    {
      id: 17,
      label: 'Crescent',
    },
    {
      id: 18,
      label: 'ExxonMobil de Colombia S.A.',
    },
    {
      id: 19,
      label: 'Shell Colombia',
    },
    {
      id: 20,
      label: 'Chevron',
    },
    {
      id: 21,
      label: 'Prolub SA',
    },
    {
      id: 22,
      label: 'Pennport de Colombia SA',
    },
    {
      id: 23,
      label: 'Lubrigras',
    },
    {
      id: 24,
      label: 'Terpel',
    },
    {
      id: 25,
      label: 'Venoco Colombia SAS',
    },
    {
      id: 26,
      label: 'BEG',
    },
    {
      id: 27,
      label: 'SAIN Lubricantes',
    },
    {
      id: 28,
      label: 'Lubricantes VanssOil',
    },
    {
      id: 29,
      label: 'Maxum Oil Service de Panama S.A.',
    },
    {
      id: 30,
      label: 'ANCAP',
    },
    {
      id: 31,
      label: 'Agecom Produtos de Petroleo (Agecom) ',
    },
  ];

  public blanderData: any[] = [
    {
      id: uuidv4(),
      name: 'Total',
      'Ownership/ attiliation': 'Total',
      website: 'Link',
      'Location: City': 'La Tablada	',
      'Location: address': 'Chiclana 209, Tablada, Buenos Aires, Argentina	',
      'Capacity (blending), KT': '50-100',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Argentina',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'La Plata Refinery',
      'Ownership/ attiliation': 'YPF',
      website: 'Link',
      'Location: City': 'Buenos Aires	',
      'Location: address': 'Buenos Aires,La Plata Refinery	',
      'Capacity (blending), KT': '150',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Argentina',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'AXION energy',
      'Ownership/ attiliation':
        'JV between Bridas Corporation Group and Chinese CNOOC International Limited Bought ExxonMobil business in 2012	',
      website: 'Link',
      'Location: City': 'Campana',
      'Location: address': '',
      'Capacity (blending), KT': '100',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Argentina',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Shell Sola Plant',
      'Ownership/ attiliation': 'Shell',
      website: 'Link',
      'Location: City': 'Sola',
      'Location: address': 'Petroleo S A Buenos Aires	',
      'Capacity (blending), KT': '170',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Argentina',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Petrobras',
      'Ownership/ attiliation': '',
      website: 'Link',
      'Location: City': 'Bahia Blanca	',
      'Location: address':
        'Dr. Ricardo Eliçabe Refinery, Province of Buenos Aires, Argentina	',
      'Capacity (blending), KT': '',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Argentina',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Petronas Argentina SA Buenos Aires Plant',
      'Ownership/ attiliation': 'Petronas',
      website: 'Link',
      'Location: City': 'Buenos Aires	',
      'Location: address':
        'Argentina, Buenos Aires Avenida Mitre 4979, Ezpeleta Partido de Quilmes Provincia. Buenos Aires A1882AAJ, Argentina	',
      'Capacity (blending), KT': '',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Argentina',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Gulf Oil Argentina',
      'Ownership/ attiliation': 'Gulf Oil	',
      website: 'Link',
      'Location: City': 'La Reja, Buenos Aires	',
      'Location: address':
        'town of La Reja, a province of Buenos Aires, Argentina.	',
      'Capacity (blending), KT': '24	',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Argentina',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Petronas Argentina SA Buenos Aires Plant',
      'Ownership/ attiliation': 'Petronas',
      website: 'Link',
      'Location: City': 'Ezeira',
      'Location: address': 'Ezeira',
      'Capacity (blending), KT': '',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Argentina',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'DAPSA',
      'Ownership/ attiliation': '',
      website: 'Link',
      'Location: City': 'Dock Sud	',
      'Location: address': 'Sgto Ponce, Dock Sud, Buenos Aires, Argentina	',
      'Capacity (blending), KT': '64 - lubricants 11 - greases	',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Argentina',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Fuchs',
      'Ownership/ attiliation': '',
      website: 'Link',
      'Location: City': 'Buenos Aires	',
      'Location: address':
        'Belgrano 2551, 1618 El Talar, Buenos Aires, Argentina	',
      'Capacity (blending), KT': '',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Argentina',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Norte Repuestos SRL',
      'Ownership/ attiliation': 'Norte Repuestos SRL	',
      website: 'Link',
      'Location: City': 'City of Granadero Baigorria / Province of Santa Fe	',
      'Location: address': 'Orsetti 854	',
      'Capacity (blending), KT': '',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Argentina',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Tecnifos SA',
      'Ownership/ attiliation': 'Tecnifos SA	',
      website: 'Link',
      'Location: City': 'Buenos Aires	',
      'Location: address': 'Jose Maria Paz 1490	',
      'Capacity (blending), KT': '',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Argentina',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Total Chile S.A',
      'Ownership/ attiliation': 'Total',
      website: 'Link',
      'Location: City': 'Santiago',
      'Location: address':
        'Calle Uno, 3010, Quilicura, Santiago, Región Metropolitana, Chile	',
      'Capacity (blending), KT': '20 initially; expanded in 2015	',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Chile',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Petrobras',
      'Ownership/ attiliation': 'Petrobras',
      website: 'Link',
      'Location: City': 'Santiago',
      'Location: address': 'Santiago',
      'Capacity (blending), KT': '15',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Chile',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'COPEC',
      'Ownership/ attiliation': 'COPEC/ Mobil marketer',
      website: 'Link',
      'Location: City': 'Quintero',
      'Location: address': 'Quintero, Region V',
      'Capacity (blending), KT': '111',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Chile',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Aceites Industriales Ltda',
      'Ownership/ attiliation': 'Aceites Industriales Ltda',
      website: 'Link',
      'Location: City': 'Santiago',
      'Location: address':
        'Avenida Américo Vespucio 2880 ofi 602, conchalí, RM',
      'Capacity (blending), KT': '',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Chile',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Luval',
      'Ownership/ attiliation': 'Distribute Valvoline products',
      website: 'Link',
      'Location: City': 'Santiago',
      'Location: address': '',
      'Capacity (blending), KT': 'Oil and greases',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Chile',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Crescent',
      'Ownership/ attiliation': '',
      website: 'Link',
      'Location: City': 'Lampa, Santiago',
      'Location: address': 'Los Nogales Poniente 30A, Lampa, RM',
      'Capacity (blending), KT': '',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Chile',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'ExxonMobil de Colombia S.A.',
      'Ownership/ attiliation': 'Exxon Mobil',
      website: 'Link',
      'Location: City': 'Cartagena',
      'Location: address':
        'Cartagena LOBP Cartagena, Via Mamonal Km 11-Cartegna Cartagena, Bolivar, Colombia',
      'Capacity (blending), KT': '100',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Columbia',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Shell Colombia',
      'Ownership/ attiliation': 'Shell',
      website: 'Link',
      'Location: City': 'Mosquera',
      'Location: address': 'Mosquera, Cundinamarca, Colombia',
      'Capacity (blending), KT': 'Grease plant',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Columbia',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Chevron',
      'Ownership/ attiliation': 'Chevron',
      website: 'Link',
      'Location: City': 'Bogota',
      'Location: address': 'Calle 100, 19A-30 Bogotá, Colombia',
      'Capacity (blending), KT': '40',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Columbia',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Prolub SA',
      'Ownership/ attiliation': 'Subsidiary of Gulf Oil International',
      website: 'Link',
      'Location: City': 'Ibague',
      'Location: address':
        'National Logistic Park of Tolima Km 10 Vía Ibagué Gualanday Vda Buenos Aires Ibagué, Colombia',
      'Capacity (blending), KT': '49',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Columbia',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Petrobras',
      'Ownership/ attiliation': 'Subsidiary of Petroleo Brasileiro SA',
      website: 'Link',
      'Location: City': 'Bogota',
      'Location: address': 'Cra 50 No. 19 - 42, Bogota DC, Colombia',
      'Capacity (blending), KT': '34',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Columbia',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Pennport de Colombia SA',
      'Ownership/ attiliation': '',
      website: 'Link',
      'Location: City': 'Bogota',
      'Location: address': 'Carrera 102 No 19-72 Bogotá',
      'Capacity (blending), KT': '',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Columbia',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Lubrigras',
      'Ownership/ attiliation': '',
      website: 'Link',
      'Location: City': 'Bucaramanga',
      'Location: address': 'Carrera 15 No. 20 - 61 Bucaramanga, Colombia',
      'Capacity (blending), KT': 'Combined capacity of 2 plants: 12 KT',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Columbia',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Terpel',
      'Ownership/ attiliation': '',
      website: 'Link',
      'Location: City': 'Bucaramanga',
      'Location: address': 'Bucaramanga, Colombia',
      'Capacity (blending), KT': '16',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Columbia',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Venoco Colombia SAS',
      'Ownership/ attiliation': '',
      website: 'Link',
      'Location: City': 'Baranquilla',
      'Location: address':
        'Winery # 1, Industrial Park Galapark 3-588 Carrera 71, Carretera La Cordialidad Via Galapa, Municipality Galapa. Baranquilla, Colombia',
      'Capacity (blending), KT': 'Oils: 100 Greases: 10',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Columbia',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'BEG',
      'Ownership/ attiliation': 'Caria Group Co.',
      website: 'Link',
      'Location: City': 'Bogota',
      'Location: address': 'CRA 6, No11 62 Sur, Bogota, Colombia',
      'Capacity (blending), KT': '',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Columbia',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'SAIN Lubricantes',
      'Ownership/ attiliation': '',
      website: 'Link',
      'Location: City': 'Bogota',
      'Location: address': 'Carrera 36, No. 16-39, Bogota	',
      'Capacity (blending), KT': '',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Columbia',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Lubrigras',
      'Ownership/ attiliation': '',
      website: 'Link',
      'Location: City': 'Bucaramanga',
      'Location: address': 'Industrial zone, Bucaramanga, Colombia',
      'Capacity (blending), KT': 'Combined capacity of 2 plants: 12 KT',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': '',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Lubricantes VanssOil',
      'Ownership/ attiliation': '',
      website: 'Link',
      'Location: City': 'Bogota',
      'Location: address': 'Carrera 28 No. 76-34, Bogotá',
      'Capacity (blending), KT': '',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details': '',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': '',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Maxum Oil Service de Panama S.A.',
      'Ownership/ attiliation':
        'In June 2014, Belle Chasse Marine Transportation (BCMT) from Louisiana bought Maxum Oil Service de Panama, S.A. In 2007, MOSSA purchased the Panalube blend plant from ESSO, providing complete marine lubricant logistics for all major oil companies. In addition, they are the only authorized distributors of lubricant and marine oil from companies like Shell, Exxonmobil, Gulf, Lukoil, Castrol, Total, Vickers oils and Aegean',
      website: 'Link',
      'Location: City': 'Panama city',
      'Location: address':
        'Vía transistmica, Buena Vista, El Giral Colón, República de Panamá',
      'Capacity (blending), KT': '30',
      'Capacity: source': 'Link',
      'Year Built': '1998',
      'Contact Details':
        'info@maxumpetroleum.com, Ralph Smith, Pedro Paredes, 844.356.3762, 19501 S Santa Fe Ave. Rancho Dominguez, CA 90221',
      'Contact Address': '',
      Headquarters: '',
      Integration: '',
      'Location: Country': 'Panama',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'ANCAP',
      'Ownership/ attiliation': 'State-owned',
      website: 'Link',
      'Location: City': '',
      'Location: address':
        'Refinery plant "La Teja", in Montevideo. It has total production capacity of 16,300 m3/year. It is the only lubricant blender in Uruguay.',
      'Capacity (blending), KT': '',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details':
        'Paysandú y Avda. Libertador Brig. Gral. Lavalleja; Montevideo, Uruguay Tel: (+598) (2) 1931 / (+598) 2902 0608/ (+598) 2902 3892 "Ana Laura Testa - Chief Sales Specialist, Energy Business atesta@ancap.com.uy Tel.+(598 2) 1931 int. 3943 / Cel. +(598) 99351010"',
      'Contact Address': '',
      Headquarters: 'Montevideo',
      Integration: '',
      'Location: Country': 'Uruguay',
      'Location: State': '',
      Membership: '',
    },
    {
      id: uuidv4(),
      name: 'Agecom Produtos de Petroleo (Agecom)',
      'Ownership/ attiliation': 'Private company',
      website: 'Link',
      'Location: City': '',
      'Location: address':
        'Mauá (Sao Paulo), Diadema (Sao Paulo), Ipero (Sao Paulo)',
      'Capacity (blending), KT': '175 KT',
      'Capacity: source': 'Link',
      'Year Built': '',
      'Contact Details':
        'Alexandre Asminavicius Administrative and Financial Officer Evandro Joao Augusto Guerra Finance Director Tel: + 55 11 2146-8922',
      'Contact Address': '',
      Headquarters: 'Mauá (San Paulo)',
      Integration: '',
      'Location: Country': 'Brazil',
      'Location: State': '',
      Membership: '',
    },
  ];

  constructor() {}
}