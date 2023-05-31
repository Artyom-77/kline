import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class LandingServiceService {
  private scrollToValue = new BehaviorSubject<any>(window.scrollY);
  public coveragesList: any[] = [
    {
      id: uuidv4(),
      title: 'Conventional Market Fundamentals',
      // subtitle: 'Group I, II, III, Naphthenic',
      list: [
        {
          itemId: uuidv4(),
          path: '/basestocks-introduction-overview',
          name: 'Basestocks Introduction Overview',
        },
        {
          itemId: uuidv4(),
          path: '/conventional-basestocks',
          name: 'Conventional Basestocks Supply and Demand Model',
        },
        {
          itemId: uuidv4(),
          path: '/paraffinic-price',
          name: 'Paraffinic Price Forecast Model',
        },
        {
          itemId: uuidv4(),
          path: '/naphthenic-price',
          name: 'Naphthenic Price Forecast Model',
        },
        {
          itemId: uuidv4(),
          path: '/manufacturing-cost',
          name: 'Manufacturing Cost Model',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Sustainability focused Basestocks',
      subtitle: '',
      list: [
        {
          itemId: uuidv4(),
          path: '/bio-basestocks',
          name: 'Bio-Basestocks—Regulatory Environment and Changes',
        },
        {
          itemId: uuidv4(),
          path: '/rrbo',
          name: 'RRBO—Regulations, Capacity Map, and Material Balance',
        },
        {
          itemId: uuidv4(),
          path: '/routes-to-decarbonization',
          name: 'Routes to Decarbonization',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Synthetic Market Fundamentals',
      // subtitle: 'Group III/III+, IV, and V',
      list: [
        {
          itemId: uuidv4(),
          path: '/synthetic-basestocks',
          name: 'Synthetic Basestocks Deblend Model',
        },
        {
          itemId: uuidv4(),
          path: '/pao-demand',
          name: 'PAO Demand Deblend Model',
        },
      ],
    },

    {
      id: uuidv4(),
      title: 'Basestock Market Watch',
      subtitle: '',
      list: [
        {
          itemId: uuidv4(),
          path: '/blender-database',
          name: 'Finished Lubricant Blender Database',
        },
        {
          itemId: uuidv4(),
          path: '/supplier-profiles',
          name: 'Supplier Profiles and Competitive Landscape',
        },
        {
          itemId: uuidv4(),
          path: 'product-properties',
          name: 'Product Properties and Specification Sheets',
        },
      ],
    },
  ];
  public customPalette: string[] = ['#3f3f3f', '#df7b2e', '#113B5A', '#008083'];
  public infoTabData: any[] = [
    {
      id: 1,
      name: 'Synthetic Basestock Model',
      path: 'synthetic-basestocks',
      selectedTab: 2,
    },
    {
      id: 2,
      name: 'PAO Demand Model',
      path: 'pao-demand',
      selectedTab: 2,
    },
    {
      id: 3,
      name: 'RRBO Material Balance',
      path: 'rrbo',
      selectedTab: 3,
    },
    {
      id: 4,
      name: 'RRBO Capacity Map',
      path: 'rrbo',
      selectedTab: 2,
    },
    // {
    //   id: 4,
    //   name: 'Competitive Landscape',
    //   path: 'supplier-profiles',
    //   selectedTab: 2,
    // },
  ];
  public infoTabMapsData: any[] = [
    {
      id: 1,
      name: 'Finished Lubricant Blender Database',
      path: 'blender-database',
      // selectedTab: 2,
    },
    {
      id: 2,
      name: 'RRBO Capacity Map',
      path: 'rrbo',
      selectedTab: 2,
    },
    {
      id: 3,
      name: 'Synthetic Basestock Database',
      path: 'synthetic-basestocks',
      // selectedTab: 2,
    },
    {
      id: 4,
      name: 'PAO Demand Database',
      path: 'pao-demand',
      // selectedTab: 2,
    },
  ];

  public infoSecondaryTabData: any[] = [
    {
      id: 1,
      name: 'Reports & Presentations',
      path: 'insights',
    },
    {
      id: 2,
      name: 'Quarterly Newsletters',
      path: 'insights',
    },
    {
      id: 3,
      name: 'Webinars',
      path: 'insights',
    },
  ];

  public basestockOverviewData: any[] = [
    {
      title: 'About the IC',
      accardionItem: [
        {
          title: 'How do I navigate across the IC?',
          desc: 'The IC home page has three tabs for navigation - Deblend Model, News Center and FAQ section. Clicking on the any one tab will take you to the section. Each of the three sections gives the user an option to return to the Home Page',
        },
        {
          title: 'What are the different sections in the IC?',
          desc: 'The basestocks IC has four sections - Deblend Model, News Center, Basestocks Deblend Model Background and Kline Content.',
        },
      ],
    },
    {
      title: 'Features',
      accardionItem: [
        {
          title: 'How do we generate an analyst query?',
          desc: 'Click on the "Contact Us" button on the top right corner of the page ( the button is present on each section page). Enter your specific query in the pop-up box that appears and click on submit query. Your query will be routed to a dedicated team of analysts',
        },
      ],
    },
    {
      title: 'Deblend Model',
      accardionItem: [
        {
          title: 'Glossary of technical terms within the deblend model',
          tableData: [
            {
              'ACRONYM/ ABBREVIATION': '2T/4T',
              DEFINITION: 'Two-wheeler engine oil',
            },
            {
              'ACRONYM/ ABBREVIATION': 'ATF',
              DEFINITION: 'Automatic transmission fluid',
            },
            {
              'ACRONYM/ ABBREVIATION': 'B/D',
              DEFINITION: 'Barrels per day',
            },
            {
              'ACRONYM/ ABBREVIATION': 'BPCD',
              DEFINITION: 'Barrels per calendar day',
            },
            {
              'ACRONYM/ ABBREVIATION': 'cSt/cS',
              DEFINITION: 'Centistoke',
            },
            {
              'ACRONYM/ ABBREVIATION': 'HD',
              DEFINITION: 'Heavy-duty',
            },
            {
              'ACRONYM/ ABBREVIATION': 'HDMO',
              DEFINITION: 'Heavy-duty motor oil',
            },
            {
              'ACRONYM/ ABBREVIATION': 'HTF',
              DEFINITION: 'Hydraulic transmission fluid',
            },
            {
              'ACRONYM/ ABBREVIATION': 'ISO',
              DEFINITION: 'International Organization for Standardization',
            },
            {
              'ACRONYM/ ABBREVIATION': 'KBD',
              DEFINITION: 'Thousand barrels per day',
            },
            {
              'ACRONYM/ ABBREVIATION': 'KT',
              DEFINITION: 'Kilotonnes',
            },
            {
              'ACRONYM/ ABBREVIATION': 'KTPA',
              DEFINITION: 'Kilotonnes per annum',
            },
            {
              'ACRONYM/ ABBREVIATION': 'MVI',
              DEFINITION: 'Medium Viscosity Index',
            },
            {
              'ACRONYM/ ABBREVIATION': 'PCMO',
              DEFINITION: 'Passenger car motor oil',
            },
            {
              'ACRONYM/ ABBREVIATION': 'SAE',
              DEFINITION: 'Society of Automotive Engineers',
            },
            {
              'ACRONYM/ ABBREVIATION': 'THF',
              DEFINITION: 'Tractor hydraulic fluid',
            },
          ],
        },
        {
          title: 'Visualizing data within model',
          desc: 'Click on the deblend model section in the home page. Choose values from the dropdown for region, Recipe, Demand and supply year. Click on "Start Model" and navigate to the top right corner of the page to the visualization button. This will open the visualization tab to display graphs/tables based on the deblend model',
        },
      ],
    },
    {
      title: 'Segment Definitions',
      accardionItem: [
        {
          title: 'Commercial Automotive Lubricants',
          desc: '- Commercial automotive lubricants are consumed in commercial vehicles which include light commercial vehicle such as vans, minibuses, heavy trucks, tractors, buses, three-wheelers, coaches, over-the-road construction and mining vehicles, on-road passenger transport fleets, and other on- and off-road commercial vehicles.',
          desc1:
            '- Consumption of commercial automotive lubricants is segmented into the on-highway and off-highway trade classes. On-highway includes such trade classes and fleets as for-hire trucking, private fleets, state and local governments, lease-rental, and transportation. Off-highway includes such trade classes as agriculture, construction, mining and federal government.',
          ulList: {
            ulTitle:
              '- Lubricants used by the commercial automotive market segment are classified into four product categories:',
            ulData: [
              'Engine oil (HDMO)',
              'Hydraulic and transmission fluid',
              'Gear oil',
              'Grease',
            ],
          },
        },
        {
          title: 'Consumer Automotive Lubricants',
          desc: '- Vehicles using these lubricants include passenger cars, sport utility vehicles (SUVs), light commercial vehicles (LCVs), minivans, minibuses, pick-up trucks, 2 and 3 wheelers, lawn and garden equipment, light duty marine and personal watercraft, recreational vehicles and equipment, and all other related vehicles owned and operated by individuals for non-commercial usage and activities.',
          ulList: {
            ulTitle: '- The major product categories within the segment are:',
            ulData: [
              'Engine oil (Passenger car motor oil or PCMO, passenger car diesel oil, 2T and 4T, motorcycle and recreational vehicle oil)',
              'Automatic transmission fluid (ATF)',
              'Gear oil',
              'Grease',
            ],
          },
        },
        {
          title: 'Industrial oils and fluids',
          desc: 'The highly complex and diffuse business of industrial oils and fluids consists of more than 25 products in five major groups. These products are consumed by 15 major end-use industries and, in addition, by several minor ones. There are few clearcut distinctions between some products as well as end uses, and a great deal of overlap exists.',
          desc1:
            '- The 15 major end-use industries include: rubber and plastic products, electrical equipment and energy transmission, chemicals and allied products, off-highway transportation, transportation equipment manufacturing, printing, primary metals, fabricated metal products, machinery, mining, agriculture-forestry-fishing, wood and paper products, food processing, oil and gas extraction and petroleum refining, and textiles.',
          desc2:
            '- The five major product groups are process oils, general industrial oils, metalworking fluids, industrial engine oils, and greases',
        },
      ],
    },
    {
      title: 'Product Definitions',
      accardionItem: [
        {
          title: 'Product Definitions',
          definations: [
            {
              subtitle: 'PCMO',
              desc: 'This includes passenger car oils used in both gasoline and diesel vehicles.',
            },
            {
              subtitle: 'HDMO',
              desc: 'This includes engine oil used in heavy commercial vehicles (LCV, MCV, HCV). These are engine oil used in both on-highway and off-highway vehicles.',
            },
            {
              subtitle: 'Industrial Engine Oils',
              desc: 'These oils are used in a wide range of engine types, including diesel, dual fuel, liquefied petroleum gas (LPG), and natural gas engines.  Industrial Engine oils include natural gas engine oil, marine engine oil, railroad engine oil, and piston aircraft oils.',
              defUl: [
                'These engines represent highly efficient, convenient, and economical power sources.',
                'The diesel engine predominates in marine propulsion, railroad locomotives, and heavy construction equipment, and is widely used for electric power generation in remote locations.',
                'Natural gas and dual fuel engines are used in pipeline transmission service but are also common in power generation and chemical processing. LPG engines are primarily used in automotive applications.',
              ],
            },
            {
              subtitle: 'Hydraulic Fluids',
              desc: 'In the industrial segment, these fluids are used in hydraulic pumps found on a wide variety of stationary equipment, from construction equipment, to highly automated precision machinery.',
              defUl: [
                'Hydraulic pumps are found in stationary, and aviation equipment.',
                'They must operate under a wide range of temperatures and conditions.',
                'The same piece of equipment may have both piston and vane pumps operating simultaneously, although on different circuits.',
                'The main function of a hydraulic fluid is to transfer power from an external power source, such as an electric motor, to a working mechanical device, such as a hydraulic cylinder or even another hydraulic pump that is used as a motor.',
              ],
            },
            {
              subtitle: 'Compressor Oils',
              desc: 'Compressors are gas pumps that move gas by compressing it into a smaller volume while raising its temperature.',
              defUl: [
                'All compressors work on the same principle of taking a gas at relatively low pressure and mechanically compressing it into a smaller volume, which raises its pressure and temperature.',
                'Compressor oils reduce friction and seal the pressurized gas between the high- and low-pressure sides of the compressor unit.',
                'Rotary compressors require lubrication for the rotor shaft, bearings, and cylinder walls.',
                'Centrifugal compressors require lubricants for journal bearings that support the impeller shafts.',
                'Reciprocal compressors require lubrication for bearings, crankshaft, connecting rods, cylinder walls, piston rings, and valves.',
              ],
            },
            {
              subtitle: 'Refrigeration Oils ',
              desc: 'are used in refrigeration compressors.',
              defUl: [
                'Gases that may be encountered in refrigeration compressors include ammonia, R-12 (Freon), R-114, R-22, and R-134a.',
              ],
            },
            {
              subtitle: 'Turbine and Circulating Oils',
              desc: 'Turbine oils are used in gas turbines, steam turbines, and their auxiliary equipment.',
              defUl: [
                'Turbines are precision machined, balanced mechanisms constructed with close tolerances.',
                'Lubricating oils used in turbines are primarily rust and oxidation-inhibited (R&O) mineral oils.',
                'They are also suitable for use as circulating oils in equipment that uses a common reservoir to lubricate mechanisms that are not heavily loaded.',
              ],
            },
            {
              subtitle: 'Industrial Gear Oils',
              desc: 'Gearing mechanisms are used to transfer and regulate power from a power source (such as an electric motor or internal combustion engine) to a mechanism that performs work.',
              defUl: [
                'Gearing mechanisms occur in all sizes, from the large highly loaded gear sets found in surface mining draglines to small gear sets used in high-speed, lightly loaded precision equipment.',
                'Gear oils are used in machinery in leading industries such as mining, transportation equipment manufacturing, primary metals, machinery, and fabricated metals products.',
              ],
            },
            {
              subtitle: 'Metalworking Fluids',
              desc: 'These are used in metalworking operations including cutting, grinding, boring and quenching.',
              defUl: [
                'MWFs are used in major end-use industries, such as the production of transportation equipment, fabricated metal products, machinery, primary ferrous products, primary aluminum products, and metal cans.',
                'The types of metalworking fluids include removal fluid, forming fluid, protecting fluid, and treating fluid.',
              ],
            },
            {
              subtitle: 'Process oils ',
              desc: 'are frequently identical to the basestocks used in industrial and automotive lubricants and are produced in the same refining process.',
              defUl: [
                'The chemical composition of the basestock is, however, critical to their properties and utility.',
                'Process oils are often also specialty cuts and may be further refined.',
                'Process oils include rubber, aromatic, white, paraffinic, naphthenic, electrical, and other oil types that are used in a number of different manufactured products, including rubber, plastics, agricultural chemicals, printing inks, textile finishes, and electrical transmission oils.',
              ],
            },
            {
              subtitle: 'Industrial Greases',
              desc: 'Typical soap thickeners are lithium or lithium complex, calcium or calcium complex, aluminum or aluminum complex, and sodium soaps',
              defUl: [
                'Industrial greases are used in machinery in leading industries such as mining, transportation equipment manufacturing, food processing, primary metals, machinery, fabricated metals products, among other.',
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Region Definition',
      accardionItem: [
        {
          title: 'Region Definition',
          desc: 'This study is global in nature and analyzes various regions:',
          descList: [
            '- Africa and the Middle East',
            '- Asia–Pacific',
            '- Europe',
            '- North America',
            '- South America (includes Mexico)',
          ],
        },
      ],
    },
    {
      title: 'Conversion factors',
      accardionItem: [
        {
          title: 'Conversion factors',
          tableTitle: 'AVERAGE MASS-TO-VOLUME CONVERSION FACTORS FOR KEY BASESTOCK GRADES',
          tableData: [
            {
              "API GROUP": 'Group I',
              "GRADES": 'SN 100/SN 150',
              "KT-a": '100.0',
              "B/D-b": '2,000.0'
            },
            {
              "API GROUP": 'Group I',
              "GRADES": 'SN 500',
              "KT-a": '100.0',
              "B/D-b": '1,969.9'
            },
            {
              "API GROUP": 'Group I',
              "GRADES": 'Brightstock',
              "KT-a": '100.0',
              "B/D-b": '1,919.3'
            },
            {
              "API GROUP": 'Group II',
              "GRADES": '100N',
              "KT-a": '100.0',
              "B/D-b": '2,054.8'
            },
            {
              "API GROUP": 'Group II',
              "GRADES": '200N',
              "KT-a": '100.0',
              "B/D-b": '1,986.3'
            },
            {
              "API GROUP": 'Group II',
              "GRADES": '600N',
              "KT-a": '100.0',
              "B/D-b": '1,969.9'
            },
            {
              "API GROUP": 'Group III',
              "GRADES": '4 cSt',
              "KT-a": '100.0',
              "B/D-b": '2,068.5'
            },
            {
              "API GROUP": 'Group III',
              "GRADES": '6 cSt',
              "KT-a": '100.0',
              "B/D-b": '2,054.8'
            },
            {
              "API GROUP": 'Group III',
              "GRADES": '8 cSt',
              "KT-a": '100.0',
              "B/D-b": '2,041.1'
            },
          ],
          descList: [
            'a-Kilotonnes',
            'b-Barrels per day',
          ],
        },
      ],
    },
    {
      title: 'Major Basestock Trade Flows',
      accardionItem: [
        {
          title: 'Major Basestock Trade Flows',
          tables: [
            {
              tableTitle: 'GLOBAL GROUP I BASESTOCK TRADE, 2021 (IN KT)',
              tableData: [
                {
                  " ": 'North America',
                  "North America": '-',
                  "South America": '700-800',
                  "Europe": '',
                  "Asia-Pacific": '',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'South America',
                  "North America": '',
                  "South America": '-',
                  "Europe": '',
                  "Asia-Pacific": '',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'Europe',
                  "North America": '',
                  "South America": '150-180',
                  "Europe": '-',
                  "Asia-Pacific": '600-800',
                  "Africa and the Middle East": '900-1,000',
                },
                {
                  " ": 'Asia-Pacific',
                  "North America": '',
                  "South America": '',
                  "Europe": '',
                  "Asia-Pacific": '-',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'Africa and the Middle East',
                  "North America": '',
                  "South America": '',
                  "Europe": '',
                  "Asia-Pacific": '',
                  "Africa and the Middle East": '-',
                },

              ],
              descList: [
                'NOTE: Regions in column indicate Origin and regions in row indicate destination.',
                'Interpretation example: Europe exported 150-180 KT of Group I basestocks to South America',
              ],
            },
            {
              tableTitle: 'GLOBAL GROUP II/II+ BASESTOCK TRADE, 2021 (IN KT)',
              tableData: [
                {
                  " ": 'North America',
                  "North America": '-',
                  "South America": '700-800',
                  "Europe": '750-800',
                  "Asia-Pacific": '',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'South America',
                  "North America": '',
                  "South America": '-',
                  "Europe": '',
                  "Asia-Pacific": '',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'Europe',
                  "North America": '',
                  "South America": '',
                  "Europe": '-',
                  "Asia-Pacific": '',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'Asia-Pacific',
                  "North America": '',
                  "South America": '',
                  "Europe": '',
                  "Asia-Pacific": '-',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'Africa and the Middle East',
                  "North America": '',
                  "South America": '',
                  "Europe": '',
                  "Asia-Pacific": '300-400',
                  "Africa and the Middle East": '-',
                },
              ],
            },
            {
              tableTitle: 'GLOBAL GROUP III/III+ BASESTOCK TRADE, 2021 (IN KT)',
              tableData: [
                {
                  " ": 'North America',
                  "North America": '-',
                  "South America": '',
                  "Europe": '',
                  "Asia-Pacific": '',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'South America',
                  "North America": '',
                  "South America": '-',
                  "Europe": '',
                  "Asia-Pacific": '',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'Europe',
                  "North America": '',
                  "South America": '',
                  "Europe": '-',
                  "Asia-Pacific": '',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'Asia-Pacific',
                  "North America": '500-600',
                  "South America": '80-100',
                  "Europe": '300-400',
                  "Asia-Pacific": '-',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'Africa and the Middle East',
                  "North America": '700-800',
                  "South America": '70-80',
                  "Europe": '300-400',
                  "Asia-Pacific": '',
                  "Africa and the Middle East": '-',
                },
              ],
            },
            {
              tableTitle: 'GLOBAL NAPHTHENIC BASESTOCK TRADE, 2021 (IN KT)',
              tableData: [
                {
                  " ": 'North America',
                  "North America": '-',
                  "South America": '',
                  "Europe": '',
                  "Asia-Pacific": '',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'South America',
                  "North America": '',
                  "South America": '-',
                  "Europe": '',
                  "Asia-Pacific": '',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'Europe',
                  "North America": '',
                  "South America": '',
                  "Europe": '-',
                  "Asia-Pacific": '250-350',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'Asia-Pacific',
                  "North America": '',
                  "South America": '',
                  "Europe": '',
                  "Asia-Pacific": '-',
                  "Africa and the Middle East": '',
                },
                {
                  " ": 'Africa and the Middle East',
                  "North America": '',
                  "South America": '',
                  "Europe": '',
                  "Asia-Pacific": '',
                  "Africa and the Middle East": '-',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Product Specifications',
      accardionItem:[
        {
          title: 'Product Specifications',
          tables: [
            {
              tableTitle: 'GLOBAL GROUP I BASESTOCK TRADE, 2021 (IN KT)',
              tableData: [
                {
                  "Refiner": 'Shell',
                  "Product": 'Shell GTL ',
                  "Kinematic viscosity at 100oC (cSt)": '4.0',
                  "Viscosity index": '135',
                  "Pour point (oC)": '(30)',
                  "Flash point (oC)": '215',
                  "NOACK volatility (% loss)": '12.0',
                },
                {
                  "Refiner": '',
                  "Product": 'Shell GTL',
                  "Kinematic viscosity at 100oC (cSt)": '7.5',
                  "Viscosity index": '145',
                  "Pour point (oC)": '(24)',
                  "Flash point (oC)": '240',
                  "NOACK volatility (% loss)": '3.0',
                },
                {
                  "Refiner": 'ADNOC',
                  "Product": 'ADbase 4CST',
                  "Kinematic viscosity at 100oC (cSt)": '4.35',
                  "Viscosity index": '130',
                  "Pour point (oC)": '(18)',
                  "Flash point (oC)": '220',
                  "NOACK volatility (% loss)": '12.5',
                },
                {
                  "Refiner": '',
                  "Product": 'ADbase 6CST',
                  "Kinematic viscosity at 100oC (cSt)": '6.18',
                  "Viscosity index": '137',
                  "Pour point (oC)": '(15)',
                  "Flash point (oC)": '235',
                  "NOACK volatility (% loss)": '6.8',
                },
                {
                  "Refiner": '',
                  "Product": 'ADbase 8CST',
                  "Kinematic viscosity at 100oC (cSt)": '8.05',
                  "Viscosity index": '137',
                  "Pour point (oC)": '(12)',
                  "Flash point (oC)": '255',
                  "NOACK volatility (% loss)": '3.5',
                },
                {
                  "Refiner": 'Petronas',
                  "Product": 'ETRO 4+',
                  "Kinematic viscosity at 100oC (cSt)": '4.1',
                  "Viscosity index": '132',
                  "Pour point (oC)": '(18)',
                  "Flash point (oC)": '220',
                  "NOACK volatility (% loss)": '13.2',
                },
                {
                  "Refiner": '',
                  "Product": 'ETRO 6+',
                  "Kinematic viscosity at 100oC (cSt)": '6.0',
                  "Viscosity index": '132',
                  "Pour point (oC)": '(18)',
                  "Flash point (oC)": '240',
                  "NOACK volatility (% loss)": '5.8',
                },
                {
                  "Refiner": 'SK Lubricants',
                  "Product": 'YUBASE 4+',
                  "Kinematic viscosity at 100oC (cSt)": '4.2',
                  "Viscosity index": '134',
                  "Pour point (oC)": '(18)',
                  "Flash point (oC)": '230',
                  "NOACK volatility (% loss)": '13.0',
                },
              ],
            },
            {
              tableTitle: 'PHYSICAL CHARACTERISTICS OF SELECT GROUP III BASE FLUIDS',
              tableData: [
                {
                  "Refiner": 'Aramco (S-OIL)',
                  "Product": 'aramcoULTRA 4',
                  "Kinematic viscosity at 100oC (cSt)": '4.3',
                  "Viscosity index": '124',
                  "Pour point (oC)": '(20)',
                  "Flash point (oC)": '220',
                  "NOACK volatility (% loss)": '14.7',
                },
                {
                  "Refiner": '',
                  "Product": 'aramcoULTRA 6',
                  "Kinematic viscosity at 100oC (cSt)": '6.0',
                  "Viscosity index": '134',
                  "Pour point (oC)": '(16)',
                  "Flash point (oC)": '240',
                  "NOACK volatility (% loss)": '6.4',
                },


                {
                  "Refiner": '',
                  "Product": 'aramcoULTRA 8',
                  "Kinematic viscosity at 100oC (cSt)": '7.1',
                  "Viscosity index": '134',
                  "Pour point (oC)": '(14)',
                  "Flash point (oC)": '250',
                  "NOACK volatility (% loss)": '4.0',
                },
                {
                  "Refiner": 'NESTE OIL ',
                  "Product": 'NEXBASE 3043',
                  "Kinematic viscosity at 100oC (cSt)": '4.3',
                  "Viscosity index": '122',
                  "Pour point (oC)": '(18)',
                  "Flash point (oC)": '228',
                  "NOACK volatility (% loss)": '14.2',
                },
                {
                  "Refiner": '',
                  "Product": 'NEXBASE 3060',
                  "Kinematic viscosity at 100oC (cSt)": '5.9',
                  "Viscosity index": '128',
                  "Pour point (oC)": '(15)',
                  "Flash point (oC)": '240',
                  "NOACK volatility (% loss)": '7.2',
                },
                {
                  "Refiner": '',
                  "Product": 'NEXBASE 3080',
                  "Kinematic viscosity at 100oC (cSt)": '7.9',
                  "Viscosity index": '130',
                  "Pour point (oC)": '(12)',
                  "Flash point (oC)": '261',
                  "NOACK volatility (% loss)": '3.5',
                },
                {
                  "Refiner": 'Petronas',
                  "Product": 'ETRO 4',
                  "Kinematic viscosity at 100oC (cSt)": '4.3',
                  "Viscosity index": '129',
                  "Pour point (oC)": '(18)',
                  "Flash point (oC)": '220',
                  "NOACK volatility (% loss)": '13.8',
                },
                {
                  "Refiner": '',
                  "Product": 'ETRO 6',
                  "Kinematic viscosity at 100oC (cSt)": '6.1',
                  "Viscosity index": '127',
                  "Pour point (oC)": '(18)',
                  "Flash point (oC)": '238',
                  "NOACK volatility (% loss)": '6.5',
                },
                {
                  "Refiner": 'SK Lubricants',
                  "Product": 'YUBASE 4',
                  "Kinematic viscosity at 100oC (cSt)": '4.2',
                  "Viscosity index": '122',
                  "Pour point (oC)": '(15)',
                  "Flash point (oC)": '230',
                  "NOACK volatility (% loss)": '15.0',
                },
                {
                  "Refiner": '',
                  "Product": 'YUBASE 6',
                  "Kinematic viscosity at 100oC (cSt)": '6.5',
                  "Viscosity index": '131',
                  "Pour point (oC)": '(15)',
                  "Flash point (oC)": '240',
                  "NOACK volatility (% loss)": '7.0',
                },
                {
                  "Refiner": '',
                  "Product": 'YUBASE 8',
                  "Kinematic viscosity at 100oC (cSt)": '7.6',
                  "Viscosity index": '128',
                  "Pour point (oC)": '(12)',
                  "Flash point (oC)": '260',
                  "NOACK volatility (% loss)": '6.5',
                },
              ],
            },
          ]
        }
      ]
    },
    {
      title: 'Re-refined basestocks',
      accardionItem: [
        {
          title: 'Re-refined basestocks',
          subtitle: 'Re-refining models',
          descriptions: [
            '- Re-refining and basestock sales: It is fairly simple to penetrate the market with this particular model. With factors such as acceptable product quality, price competitiveness, and necessary certifications in place, a re-refiner can sell large volumes quickly. Most re-refiners work with this model.',
            ' - In-house blending and private-label sales: With sales of the re-refined baseoil in place, the re-refiner can envision improving margins by setting up a blending facility to produce finished lubricants. These finished lubricants can then be sold off to an already existing major brand of re-refined finished lubricant.',
            '- In-house blending and branded label sales: This is a very tough model to execute, as the re-refiner needs to compete with the other major lube marketers. These major lube marketers have huge investments that go into branding and advertising their products, and it is difficult to take on these big companies in terms of product branding. Typically, re-refiners who try to create a brand in the re-refining finished lubricant industry do it at a very low cost and in a subtle manner and aim to capture a very small local market share and then grow. This model is currently followed by re-refiners such as Safety-Kleen and Universal Lubes in North America, Mangalam Lubricants in India, and PT. Wiraswasta Gemilang in Indonesia.',
          ],
          lists: [
            {
             ulTitle: '- Closed-Loop Model: In closed-loop re-refining, a re-refiner will collect the used oil from a generator, usually an industrial company or a fleet, re-refine it into a basestock, and then blend the basestock to produce lubricant. This lubricant is then sold back to the same generator from whom the used oil was collected. The closed-loop model is only seen primarily in North America and Western Europe. In other markets, re-refiners do not focus on closed-loop re-refining. This is due to three reasons.',
             ulData: [
               'Firstly, there is limited acceptability of re-refined lubricants among consumers, fleets, and industrial units due to poor re-refining technology. Hence, used oil generators who could potentially participate in closed-loop re-refining are not willing to do so.',
               'Secondly, closed-loop re-refining requires large scale operations, which re-refiners in other markets do not have.',
               'Thirdly, there is a trust issue due to illegal activities of selling used oil as fresh lubricants in India or unlicensed collectors involved in collection in China. Generators may run a high risk if they sell used oil to such collectors and get fake sub-standard lubricants in return.',
               'Finally, another reason for the low acceptance of this model is that a re-refiner will be in direct competition with major lubricant suppliers. These suppliers could throttle the supply of used oil to re-refiners and make it difficult for the re-refiner to collect used oil from generators.',
             ],
           },
            {
              listName: 'Re-refining technology',
             ulTitle: '- Re-refined basestocks are produced through various techniques:',
             ulData: [
               'Atmospheric and vacuum distillation',
               'N-methyl pyrrolidinone (NMP) solvent re-refining after distillation',
               'Furfural re-refining',
               'Molecular distillation process',
               'Kettle-type distillation process',
               'Wiped film evaporation technology',
               'Thin-film vacuum technology',
               'UOP-HyLube technology',
               'ReGen (for Group III basestocks)',
               'Meiken (or acid/clay) technology',
             ],
           },
            {
              listName: 'Collection of used oil',
              listDesc: '- All the used oil that is generated is not collected. Used oil collection in a region mainly depends on used oil regulations, their enforcement, and the depth and spread of the collection infrastructure. The collection rate in most countries varies in the range of 60% to 75% across the regions.',
             ulTitle: '- Challenges of used oil collection are as below:',
             ulData: [
               'Generators are located in remote areas, and it is not feasible to collect the used oil from them.',
               'Used oil is collected but not recorded as it is disposed off illegally. In some countries used oil is burned illegally by generators for heating purposes.',
               'Used oil is also used in industrial fuel applications, which typically include cement kilns, steel furnaces, asphalt plants, utility boilers, and other industrial fuel applications.',
               'The collection rate is low at 44% in Brazil due to regulations. Certain lubricants used for agriculture pulverization, chainsaw oils, process oils, etc., are exempt from collection due to various reasons. For example, agriculture pulverization oils are non-toxic and are mixed with the crop protection products to be used on crops.',
             ],
           },
          ],
        },
      ],
    },
  ];

  constructor() {}

  getCoveragesList(): any[] {
    return this.coveragesList;
  }
  getTopPosition() {
    return this.scrollToValue;
  }
}
