import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

export class MapSetting {
  key?: string;

  name?: string;
}

export class Tooltip {
  isShown: boolean;

  text: string;
}

export class Marker {
  location: any;

  tooltip: Tooltip;
}

const markerUrl =
  'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/maps/map-marker.png';

const mapTypes: MapSetting[] = [
  {
    key: 'roadmap',
    name: 'Road Map',
  },
  {
    key: 'satellite',
    name: 'Satellite (Photographic) Map',
  },
  {
    key: 'hybrid',
    name: 'Hybrid Map',
  },
];

const markers: Marker[] = [
  // {
  //   location: [40.755833, -73.986389],
  //   tooltip: {
  //     isShown: false,
  //     text: 'Times Square',
  //   },
  // },
  // {
  //   location: '40.7825, -73.966111',
  //   tooltip: {
  //     isShown: false,
  //     text: 'Central Park',
  //   },
  // },
  // {
  //   location: {
  //     lat: 40.753889,
  //     lng: -73.981389,
  //   },
  //   tooltip: {
  //     isShown: false,
  //     text: 'Fifth Avenue',
  //   },
  // },
  {
    location: 'Argentina',
    tooltip: {
      isShown: false,
      text: 'Argentina',
    },
  },
  {
    location: 'Brazil',
    tooltip: {
      isShown: false,
      text: 'Brazil',
    },
  },
  {
    location: 'Mexico',
    tooltip: {
      isShown: false,
      text: 'Mexico',
    },
  },
];

@Injectable({
  providedIn: 'root',
})
export class RrboService {
  public europeCountries: any[] = ['WesternEurope', 'Russia'];
  public northAmericaCountries: any[] = ['USA', 'Mexico', 'Canada'];
  public southAmericaCountries: any[] = ['Brazil'];
  public africaCountries: any[] = ['India'];
  public asiaCountries: any[] = [
    'China',
    'Indonesia',
    'Japan',
    'SouthKorea',
    'Thailand',
    'Malaysia',
  ];
  public reguliarSummary: any[] = [
    {
      question: 'Are there any requirements on who can collect used oil?​',
      USA: 'Yes',
      Brazil: 'Yes',
      India: 'Yes',
      China: 'Yes',
      Indonesia: 'Yes',
      Japan: 'Yes',
      Malaysia: 'Yes',
      Mexico: 'Yes',
      Russia: 'Yes',
      SouthKorea: 'Yes',
      Thailand: 'Yes',
      Canada: 'Yes',
      WesternEurope: 'Yes',
    },
    {
      question: 'Do regulations exist specifically for used oil?​​',
      USA: 'Yes',
      Brazil: 'Yes',
      India: 'Yes',
      China: 'Yes',
      Indonesia: 'Yes',
      Japan: 'Yes',
      Malaysia: 'Yes',
      Mexico: 'Yes',
      Russia: 'Yes',
      SouthKorea: 'Yes',
      Thailand: 'Yes',
      Canada: 'Yes',
      WesternEurope: 'Yes',
    },
    {
      question:
        ' How is used oil classified i.e., hazardous waste, special waste etc.?​​​',
      USA: 'Special Waste, not Hazardous Waste​',
      Brazil: 'Special Waste, not Hazardous Waste​',
      India: 'Special Waste, not Hazardous Waste​',
      China: 'Special Waste, not Hazardous Waste​',
      Indonesia: 'Special Waste, not Hazardous Waste​',
      Japan: 'Special Waste, not Hazardous Waste​',
      Malaysia: 'Special Waste, not Hazardous Waste​',
      Mexico: 'Special Waste, not Hazardous Waste​',
      Russia: 'Special Waste, not Hazardous Waste​',
      SouthKorea: 'Special Waste, not Hazardous Waste​',
      Thailand: 'Special Waste, not Hazardous Waste​',
      Canada: 'Special Waste, not Hazardous Waste​',
      WesternEurope: 'Special Waste, not Hazardous Waste​',
    },
    {
      question:
        'Does the country have any legislation that requires used oil to be re-refined?​',
      USA: 'No',
      Brazil: 'No',
      India: 'No',
      China: 'No',
      Indonesia: 'No',
      Japan: 'No',
      Malaysia: 'No',
      Mexico: 'No',
      Russia: 'No',
      SouthKorea: 'No',
      Thailand: 'No',
      Canada: 'No',
      WesternEurope: 'No',
    },
    {
      question:
        'Does country have an association(s) managing the collection and disposal of used oil? ​​',
      USA: 'NORA represents the industry but does not manage collection or use​',
      Brazil:
        'NORA represents the industry but does not manage collection or use​',
      India:
        'NORA represents the industry but does not manage collection or use​',
      China:
        'NORA represents the industry but does not manage collection or use​',
      Indonesia:
        'NORA represents the industry but does not manage collection or use​',
      Japan:
        'NORA represents the industry but does not manage collection or use​',
      Malaysia:
        'NORA represents the industry but does not manage collection or use​',
      Mexico:
        'NORA represents the industry but does not manage collection or use​',
      Russia:
        'NORA represents the industry but does not manage collection or use​',
      SouthKorea:
        'NORA represents the industry but does not manage collection or use​',
      Thailand:
        'NORA represents the industry but does not manage collection or use​',
      Canada:
        'NORA represents the industry but does not manage collection or use​',
      WesternEurope:
        'NORA represents the industry but does not manage collection or use​',
    },
    {
      question:
        'Is a levy charged on sales of lubricants to support used oil collection associations?​​',
      USA: 'Not at the Federal level​',
      Brazil: 'Not at the Federal level​',
      India: 'Not at the Federal level​',
      China: 'Not at the Federal level​',
      Indonesia: 'Not at the Federal level​',
      Japan: 'Not at the Federal level​',
      Malaysia: 'Not at the Federal level​',
      Mexico: 'Not at the Federal level​',
      Russia: 'Not at the Federal level​',
      SouthKorea: 'Not at the Federal level​',
      Thailand: 'Not at the Federal level​',
      Canada: 'Not at the Federal level​',
      WesternEurope: 'Not at the Federal level​',
    },
    {
      question:
        'Does the country have requirements or regulations regarding the export or import of used oil?​​',
      USA: 'Not specific to UO​',
      Brazil: 'Not specific to UO​',
      India: 'Not specific to UO​',
      China: 'Not specific to UO​',
      Indonesia: 'Not specific to UO​',
      Japan: 'Not specific to UO​',
      Malaysia: 'Not specific to UO​',
      Mexico: 'Not specific to UO​',
      Russia: 'Not specific to UO​',
      SouthKorea: 'Not specific to UO​',
      Thailand: 'Not specific to UO​',
      Canada: 'Not specific to UO​',
      WesternEurope: 'Not specific to UO​',
    },
    {
      question:
        'Are there any requirements for how used oil generators manage used oil? ​​',
      USA: 'Yes',
      Brazil: 'Yes',
      India: 'Yes',
      China: 'Yes',
      Indonesia: 'Yes',
      Japan: 'Yes',
      Malaysia: 'Yes',
      Mexico: 'Yes',
      Russia: 'Yes',
      SouthKorea: 'Yes',
      Thailand: 'Yes',
      Canada: 'Yes',
      WesternEurope: 'Yes',
    },
    {
      question:
        'Are there requirements for oil manufacturers, marketers, or retailers to take back used oil?​​​',
      USA: 'No',
      Brazil: 'No',
      India: 'No',
      China: 'No',
      Indonesia: 'No',
      Japan: 'No',
      Malaysia: 'No',
      Mexico: 'No',
      Russia: 'No',
      SouthKorea: 'No',
      Thailand: 'No',
      Canada: 'No',
      WesternEurope: 'No',
    },
    {
      question:
        'Do any requirements/legislation exist around different types of used oil?​​​',
      USA: 'Yes',
      Brazil: 'Yes',
      India: 'Yes',
      China: 'Yes',
      Indonesia: 'Yes',
      Japan: 'Yes',
      Malaysia: 'Yes',
      Mexico: 'Yes',
      Russia: 'Yes',
      SouthKorea: 'Yes',
      Thailand: 'Yes',
      Canada: 'Yes',
      WesternEurope: 'Yes',
    },
    {
      question:
        'Does the country have legislation that requires lubricating oil to contain a percentage of re-refined basestock?​​​​',
      USA: 'No',
      Brazil: 'No',
      India: 'No',
      China: 'No',
      Indonesia: 'No',
      Japan: 'No',
      Malaysia: 'No',
      Mexico: 'No',
      Russia: 'No',
      SouthKorea: 'No',
      Thailand: 'No',
      Canada: 'No',
      WesternEurope: 'No',
    },
    {
      question:
        'Does the country have legislation that gives incentives, financial subsidies or priority to any particular Used Oil disposition – e.g., re-refining, fuel for burning, landfill etc.​​',
      USA: 'Not at the federal level​',
      Brazil: 'Not at the federal level​',
      India: 'Not at the federal level​',
      China: 'Not at the federal level​',
      Indonesia: 'Not at the federal level​',
      Japan: 'Not at the federal level​',
      Malaysia: 'Not at the federal level​',
      Mexico: 'Not at the federal level​',
      Russia: 'Not at the federal level​',
      SouthKorea: 'Not at the federal level​',
      Thailand: 'Not at the federal level​',
      Canada: 'Not at the federal level​',
      WesternEurope: 'Not at the federal level​',
    },
    {
      question: 'no title ​​​',
      USA: 'ii. Blending with crude oil at a refinery​-Allowed',
      Brazil: 'ii. Blending with crude oil at a refinery​-Allowed',
      India: 'ii. Blending with crude oil at a refinery​-Allowed',
      China: 'ii. Blending with crude oil at a refinery​-Allowed',
      Indonesia: 'ii. Blending with crude oil at a refinery​-Allowed',
      Japan: 'ii. Blending with crude oil at a refinery​-Allowed',
      Malaysia: 'ii. Blending with crude oil at a refinery​-Allowed',
      Mexico: 'ii. Blending with crude oil at a refinery​-Allowed',
      Russia: 'ii. Blending with crude oil at a refinery​-Allowed',
      SouthKorea: 'ii. Blending with crude oil at a refinery​-Allowed',
      Thailand: 'ii. Blending with crude oil at a refinery​-Allowed',
      Canada: 'ii. Blending with crude oil at a refinery​-Allowed',
      WesternEurope: 'ii. Blending with crude oil at a refinery​-Allowed',
    },
    {
      question: 'Is used oil allowed to be placed in a landfill?​​​​',
      USA: 'No​',
      Brazil: 'No​',
      India: 'No​',
      China: 'No​',
      Indonesia: 'No​',
      Japan: 'No​',
      Malaysia: 'No​',
      Mexico: 'No​',
      Russia: 'No​',
      SouthKorea: 'No​',
      Thailand: 'No​',
      Canada: 'No​',
      WesternEurope: 'No​',
    },
    {
      question:
        ' Does the country allow used oil to be burned as a fuel (cement kilns, industrial boilers or furnaces, power plants, etc.)?​​​​',
      USA: 'Yes​',
      Brazil: 'Yes​',
      India: 'Yes​',
      China: 'Yes​',
      Indonesia: 'Yes​',
      Japan: 'Yes​',
      Malaysia: 'Yes​',
      Mexico: 'Yes​',
      Russia: 'Yes​',
      SouthKorea: 'Yes​',
      Thailand: 'Yes​',
      Canada: 'Yes​',
      WesternEurope: 'Yes​',
    },
    {
      question: 'no title ​​​',
      USA: 'iii. Dust suppressant​-Prohibited',
      Brazil: 'iii. Dust suppressant​-Prohibited',
      India: 'iii. Dust suppressant​-Prohibited',
      China: 'iii. Dust suppressant​-Prohibited',
      Indonesia: 'iii. Dust suppressant​-Prohibited',
      Japan: 'iii. Dust suppressant​-Prohibited',
      Malaysia: 'iii. Dust suppressant​-Prohibited',
      Mexico: 'iii. Dust suppressant​-Prohibited',
      Russia: 'iii. Dust suppressant​-Prohibited',
      SouthKorea: 'iii. Dust suppressant​-Prohibited',
      Thailand: 'iii. Dust suppressant​-Prohibited',
      Canada: 'iii. Dust suppressant​-Prohibited',
      WesternEurope: 'iii. Dust suppressant​-Prohibited',
    },
    {
      question:
        'If used oil can be burned as a fuel, is the fuel burner subject to a different and more stringent set of air emissions requirements (relative to operating without burning used oil as a fuel) or must the fuel burner install additional pollution control equipment or energy recovery equipment before it can burn the used oil?​ ​​​',
      USA: 'Not at the federal level​',
      Brazil: 'Not at the federal level​',
      India: 'Not at the federal level​',
      China: 'Not at the federal level​',
      Indonesia: 'Not at the federal level​',
      Japan: 'Not at the federal level​',
      Malaysia: 'Not at the federal level​',
      Mexico: 'Not at the federal level​',
      Russia: 'Not at the federal level​',
      SouthKorea: 'Not at the federal level​',
      Thailand: 'Not at the federal level​',
      Canada: 'Not at the federal level​',
      WesternEurope: 'Not at the federal level​',
    },
    {
      question:
        ' Please indicate whether used oil can be legally used (i.e., regulations do not prohibit) for the following purposes, assuming that used oil is not being mixed first with a hazardous waste:​​​​',
      USA: 'i.  Burning in space heaters​-Allowed',
      Brazil: 'i.  Burning in space heaters​-Allowed',
      India: 'i.  Burning in space heaters​-Allowed',
      China: 'i.  Burning in space heaters​-Allowed',
      Indonesia: 'i.  Burning in space heaters​-Allowed',
      Japan: 'i.  Burning in space heaters​-Allowed',
      Malaysia: 'i.  Burning in space heaters​-Allowed',
      Mexico: 'i.  Burning in space heaters​-Allowed',
      Russia: 'i.  Burning in space heaters​-Allowed',
      SouthKorea: 'i.  Burning in space heaters​-Allowed',
      Thailand: 'i.  Burning in space heaters​-Allowed',
      Canada: 'i.  Burning in space heaters​-Allowed',
      WesternEurope: 'i.  Burning in space heaters​-Allowed',
    },
    {
      question:
        ' Are there companies/associations advocating in used oil category?​​​​',
      USA: 'Yes​',
      Brazil: 'Yes​',
      India: 'Yes​',
      China: 'Yes​',
      Indonesia: 'Yes​',
      Japan: 'Yes​',
      Malaysia: 'Yes​',
      Mexico: 'Yes​',
      Russia: 'Yes​',
      SouthKorea: 'Yes​',
      Thailand: 'Yes​',
      Canada: 'Yes​',
      WesternEurope: 'Yes​',
    },
  ];

  public usedOilData: any[] = [
    {
      country: 'All',
      details: [
        {
          name: 'Generation',
          list: [
            {
              text: 'Generators are responsible for environmental release cleanup.',
            },
            {
              text: 'Information or testing is required to ensure that the contaminants are under an acceptable limit.',
            }

          ],
        },
        {
          name: 'Classification (Special Waste)',
          list: [
            {
              text: 'Used oil is classified into on-specification and off-specification used oil for using it as a fuel. On-specification used oil has an arsenic concentration of up to 5 parts per million (ppm), cadmium up to 2 ppm, chromium up to 10 ppm, lead up to 100 ppm, total halogens up to 4,000 ppm, and a minimum flash point of 100°F. Used oil is classified as off-specification if it does not meet the criteria mentioned above. ',
            },
            {
              text: 'However, if the total halogen concentration goes beyond 1,000 ppm, used oil is classified as a hazardous waste. In case of hazardous waste, used oil must be disposed of per criteria laid out under 40 CFR 260 through 266, 268, 270, and 124. In case of non-hazardous solid waste, it must comply with regulations included under 40 CFR 239 through 259.',
            },
            {
              text: 'Used oil contaminated with PCBs',
              listDetails: [
                'Used oil with PCB concentrations ≥ 50 ppm is regulated for disposal under the Toxic Substances Control Act (TSCA).',
                'Used oil with lower PCB concentrations (≥ 2 ppm and < 50 ppm) may be burned as a fuel, subject to restrictions listed in 40 CFR §761.20(e), 40 CFR part 279, and any applicable state and local laws.',
                'Used oil with < 2 ppm may be managed as used oil.',
                'TSCA requirements may not be avoided through dilution.',
                'Contaminated oil must be disposed of in accordance with PCB regulations 40 CFR §761.79.',
              ]
            },
          ],
        },
        {
          name: 'Prohibitions',
          list: [
            {
              text: 'Used oil as a dust suppressant (effectively)',
              listDetails: [
                'The regulations allow a state to petition the EPA for an exception; however, no states have been granted this permission.',
                'Surface impoundments',
                'Off-specification used oil fuel may only be burned for energy recovery in particular units'
              ]
            },
          ],
        },
        {
          name: 'Collections',
          list: [
            {
              text: 'Information or testing required to rebut the hazardous waste mixing presumption',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
          ],
        },
        {
          name: ' Transportation and Storage',
          list: [
            {
              text: 'Minimum storage tank and container requirements:',
              listDetails: [
                'Must be in good condition',
                'Must be labeled “Used Oil”'
              ]
            },
            {
              text: 'Generators, transporters, processors/re-refiners, and burners are also subject to Spill Prevention, Control, and Countermeasures (40 CFR part 112).',
            },
            {
              text: 'Storage in underground tanks is regulated under RCRA Subtitle I, 40 CFR 280.',
            },

            {
              text: 'Transportation & Transfer Facilities:',
              listDetails: [
                'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
                'Secondary containment required (not for transporters)',
                'Responsible for environmental release cleanup',
                'EPA Identification Number and notification required',
              ]
            },
            {
              text: 'Acceptance and delivery records (three years) must be kept.',
            },
            {
              text: 'Information or testing is needed to rebut the hazardous waste mixing presumption (keep records for three years).',
            },
            {
              text: 'Persons transporting used oil that meets the definition of hazardous material in 49 CFR 171.8 must comply with all applicable USDOT regulations in 49 CFR parts 171 through 180.',
            },



          ],
        },
        {
          name: ' Disposal – Re-refining​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Required to keep acceptance and delivery records (three years)',
            },
            {
              text:'Required to create and follow an analysis plan that details how the hazardous waste mixing presumption will be rebutted',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'A contingency plan and emergency procedures (same as Parts 264 & 265 subpart D)',
            },
            {
              text:'Written report on biennial basis',
            },
          ],
        },
        {
          name: 'Disposal – Fuel​​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Must keep acceptance records (three years)',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'Off-specification used oil fuel may be burned for energy recovery in only the following devices:',
            },
            {
              text:'Industrial furnaces identified in §260.10',
            },
            {
              text:'Boilers as defined in §260.10 and identified in §279.12',
            },
            {
              text:'Hazardous waste incinerators subject to regulation under the Subpart O of parts 264 or 265',
            },
          ],
        },
        {
          name: ' Regulations on Imports or Exports of Used Oil​',
          list: [
            {
              text: 'Transporters who import or export used oil are subject to the requirements of 40 CFR Subpart E from the time the used oil enters until the time it exits the United States.',
            },
            {
              text:'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
            },

          ],
        },
        {
          name: 'Regulatory Enforcement',
          olList: [
            {
              text: 'Responsible Agencies',
              listDetails:[
                'EPA',
                'State, county, and/or municipal governments'
              ]
            },
            {
              text: ' Enforcement Mechanisms',
              listDetails:[
                'Federally required record-keeping',
                'EPA notifications and identification numbers',
                'State required reporting, registration, and/or notification',
                'Federal EPA identification numbers',
              ]
            },
            {
              text: 'Effectiveness of Regulations Enforcement',
              listDetails:[
                'The federal regulations and standards dictate the minimum standards of used oil management programs in the individual states',
                'Individual states’ oversight is far more effective and differs widely between states',
              ]
            },

          ],
        },
        {
          name: 'Key Influencers',
          tabs: [
            {
              title: 'Public Sector',
              tabsList:[
                'EPA',
                'DOE',
                'State, county, and municipal governments',
                'Executive Orders',
              ]
            },
            {
              title: 'Private Sector',
              tabsList:[
                'ExxonMobil',
                'Chevron',
                'Shell',
                'Valvoline',
                'ConocoPhillips',
                'BP',
                'Safety-Kleen',
              ]
            },

          ]
        },
        {
          name: 'Key Influencers',
          desc : 'Federal used oil regulations and standards provide a general framework for used oil handlers to manage used oil operations and minimize the potential for environmental impact. However, the system largely relies on self-regulation and enforcement at the state and local levels. The implementation and oversight of a used oil management program is largely left to individual states, provided the state regulations are at least as strict as the federal used oil standards. Compliance and enforcement varies widely, with California (through CalRecycle) leading the way with state initiatives, which go well beyond Federal guidelines.'
        },
      ],
    },
    {
      country: 'WesternEurope',
     details: [
        {
          name: 'Generation',
          list: [
            {
              text: 'Generators are responsible for environmental release cleanup.',
            },
            {
              text: 'Information or testing is required to ensure that the contaminants are under an acceptable limit.',
            }

          ],
        },
        {
          name: 'Classification (Special Waste)',
          list: [
            {
              text: 'Used oil is classified into on-specification and off-specification used oil for using it as a fuel. On-specification used oil has an arsenic concentration of up to 5 parts per million (ppm), cadmium up to 2 ppm, chromium up to 10 ppm, lead up to 100 ppm, total halogens up to 4,000 ppm, and a minimum flash point of 100°F. Used oil is classified as off-specification if it does not meet the criteria mentioned above. ',
            },
            {
              text: 'However, if the total halogen concentration goes beyond 1,000 ppm, used oil is classified as a hazardous waste. In case of hazardous waste, used oil must be disposed of per criteria laid out under 40 CFR 260 through 266, 268, 270, and 124. In case of non-hazardous solid waste, it must comply with regulations included under 40 CFR 239 through 259.',
            },
            {
              text: 'Used oil contaminated with PCBs',
              listDetails: [
                'Used oil with PCB concentrations ≥ 50 ppm is regulated for disposal under the Toxic Substances Control Act (TSCA).',
                'Used oil with lower PCB concentrations (≥ 2 ppm and < 50 ppm) may be burned as a fuel, subject to restrictions listed in 40 CFR §761.20(e), 40 CFR part 279, and any applicable state and local laws.',
                'Used oil with < 2 ppm may be managed as used oil.',
                'TSCA requirements may not be avoided through dilution.',
                'Contaminated oil must be disposed of in accordance with PCB regulations 40 CFR §761.79.',
              ]
            },
          ],
        },
        {
          name: 'Prohibitions',
          list: [
            {
              text: 'Used oil as a dust suppressant (effectively)',
              listDetails: [
                'The regulations allow a state to petition the EPA for an exception; however, no states have been granted this permission.',
                'Surface impoundments',
                'Off-specification used oil fuel may only be burned for energy recovery in particular units'
              ]
            },
          ],
        },
        {
          name: 'Collections',
          list: [
            {
              text: 'Information or testing required to rebut the hazardous waste mixing presumption',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
          ],
        },
        {
          name: ' Transportation and Storage',
          list: [
            {
              text: 'Minimum storage tank and container requirements:',
              listDetails: [
                'Must be in good condition',
                'Must be labeled “Used Oil”'
              ]
            },
            {
              text: 'Generators, transporters, processors/re-refiners, and burners are also subject to Spill Prevention, Control, and Countermeasures (40 CFR part 112).',
            },
            {
              text: 'Storage in underground tanks is regulated under RCRA Subtitle I, 40 CFR 280.',
            },

            {
              text: 'Transportation & Transfer Facilities:',
              listDetails: [
                'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
                'Secondary containment required (not for transporters)',
                'Responsible for environmental release cleanup',
                'EPA Identification Number and notification required',
              ]
            },
            {
              text: 'Acceptance and delivery records (three years) must be kept.',
            },
            {
              text: 'Information or testing is needed to rebut the hazardous waste mixing presumption (keep records for three years).',
            },
            {
              text: 'Persons transporting used oil that meets the definition of hazardous material in 49 CFR 171.8 must comply with all applicable USDOT regulations in 49 CFR parts 171 through 180.',
            },



          ],
        },
        {
          name: ' Disposal – Re-refining​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Required to keep acceptance and delivery records (three years)',
            },
            {
              text:'Required to create and follow an analysis plan that details how the hazardous waste mixing presumption will be rebutted',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'A contingency plan and emergency procedures (same as Parts 264 & 265 subpart D)',
            },
            {
              text:'Written report on biennial basis',
            },
          ],
        },
        {
          name: 'Disposal – Fuel​​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Must keep acceptance records (three years)',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'Off-specification used oil fuel may be burned for energy recovery in only the following devices:',
            },
            {
              text:'Industrial furnaces identified in §260.10',
            },
            {
              text:'Boilers as defined in §260.10 and identified in §279.12',
            },
            {
              text:'Hazardous waste incinerators subject to regulation under the Subpart O of parts 264 or 265',
            },
          ],
        },
        {
          name: ' Regulations on Imports or Exports of Used Oil​',
          list: [
            {
              text: 'Transporters who import or export used oil are subject to the requirements of 40 CFR Subpart E from the time the used oil enters until the time it exits the United States.',
            },
            {
              text:'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
            },

          ],
        },
        {
          name: 'Regulatory Enforcement',
          olList: [
            {
              text: 'Responsible Agencies',
              listDetails:[
                'EPA',
                'State, county, and/or municipal governments'
              ]
            },
            {
              text: ' Enforcement Mechanisms',
              listDetails:[
                'Federally required record-keeping',
                'EPA notifications and identification numbers',
                'State required reporting, registration, and/or notification',
                'Federal EPA identification numbers',
              ]
            },
            {
              text: 'Effectiveness of Regulations Enforcement',
              listDetails:[
                'The federal regulations and standards dictate the minimum standards of used oil management programs in the individual states',
                'Individual states’ oversight is far more effective and differs widely between states',
              ]
            },

          ],
        },
        {
          name: 'Key Influencers',
          tabs: [
            {
              title: 'Public Sector',
              tabsList:[
                'EPA',
                'DOE',
                'State, county, and municipal governments',
                'Executive Orders',
              ]
            },
            {
              title: 'Private Sector',
              tabsList:[
                'ExxonMobil',
                'Chevron',
                'Shell',
                'Valvoline',
                'ConocoPhillips',
                'BP',
                'Safety-Kleen',
              ]
            },

          ]
        },
        {
          name: 'Key Influencers',
          desc : 'Federal used oil regulations and standards provide a general framework for used oil handlers to manage used oil operations and minimize the potential for environmental impact. However, the system largely relies on self-regulation and enforcement at the state and local levels. The implementation and oversight of a used oil management program is largely left to individual states, provided the state regulations are at least as strict as the federal used oil standards. Compliance and enforcement varies widely, with California (through CalRecycle) leading the way with state initiatives, which go well beyond Federal guidelines.'
        },
      ],
    },
    {
      country: 'USA',
     details: [
        {
          name: 'Generation',
          list: [
            {
              text: 'Generators are responsible for environmental release cleanup.',
            },
            {
              text: 'Information or testing is required to ensure that the contaminants are under an acceptable limit.',
            }

          ],
        },
        {
          name: 'Classification (Special Waste)',
          list: [
            {
              text: 'Used oil is classified into on-specification and off-specification used oil for using it as a fuel. On-specification used oil has an arsenic concentration of up to 5 parts per million (ppm), cadmium up to 2 ppm, chromium up to 10 ppm, lead up to 100 ppm, total halogens up to 4,000 ppm, and a minimum flash point of 100°F. Used oil is classified as off-specification if it does not meet the criteria mentioned above. ',
            },
            {
              text: 'However, if the total halogen concentration goes beyond 1,000 ppm, used oil is classified as a hazardous waste. In case of hazardous waste, used oil must be disposed of per criteria laid out under 40 CFR 260 through 266, 268, 270, and 124. In case of non-hazardous solid waste, it must comply with regulations included under 40 CFR 239 through 259.',
            },
            {
              text: 'Used oil contaminated with PCBs',
              listDetails: [
                'Used oil with PCB concentrations ≥ 50 ppm is regulated for disposal under the Toxic Substances Control Act (TSCA).',
                'Used oil with lower PCB concentrations (≥ 2 ppm and < 50 ppm) may be burned as a fuel, subject to restrictions listed in 40 CFR §761.20(e), 40 CFR part 279, and any applicable state and local laws.',
                'Used oil with < 2 ppm may be managed as used oil.',
                'TSCA requirements may not be avoided through dilution.',
                'Contaminated oil must be disposed of in accordance with PCB regulations 40 CFR §761.79.',
              ]
            },
          ],
        },
        {
          name: 'Prohibitions',
          list: [
            {
              text: 'Used oil as a dust suppressant (effectively)',
              listDetails: [
                'The regulations allow a state to petition the EPA for an exception; however, no states have been granted this permission.',
                'Surface impoundments',
                'Off-specification used oil fuel may only be burned for energy recovery in particular units'
              ]
            },
          ],
        },
        {
          name: 'Collections',
          list: [
            {
              text: 'Information or testing required to rebut the hazardous waste mixing presumption',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
          ],
        },
        {
          name: ' Transportation and Storage',
          list: [
            {
              text: 'Minimum storage tank and container requirements:',
              listDetails: [
                'Must be in good condition',
                'Must be labeled “Used Oil”'
              ]
            },
            {
              text: 'Generators, transporters, processors/re-refiners, and burners are also subject to Spill Prevention, Control, and Countermeasures (40 CFR part 112).',
            },
            {
              text: 'Storage in underground tanks is regulated under RCRA Subtitle I, 40 CFR 280.',
            },

            {
              text: 'Transportation & Transfer Facilities:',
              listDetails: [
                'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
                'Secondary containment required (not for transporters)',
                'Responsible for environmental release cleanup',
                'EPA Identification Number and notification required',
              ]
            },
            {
              text: 'Acceptance and delivery records (three years) must be kept.',
            },
            {
              text: 'Information or testing is needed to rebut the hazardous waste mixing presumption (keep records for three years).',
            },
            {
              text: 'Persons transporting used oil that meets the definition of hazardous material in 49 CFR 171.8 must comply with all applicable USDOT regulations in 49 CFR parts 171 through 180.',
            },



          ],
        },
        {
          name: ' Disposal – Re-refining​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Required to keep acceptance and delivery records (three years)',
            },
            {
              text:'Required to create and follow an analysis plan that details how the hazardous waste mixing presumption will be rebutted',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'A contingency plan and emergency procedures (same as Parts 264 & 265 subpart D)',
            },
            {
              text:'Written report on biennial basis',
            },
          ],
        },
        {
          name: 'Disposal – Fuel​​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Must keep acceptance records (three years)',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'Off-specification used oil fuel may be burned for energy recovery in only the following devices:',
            },
            {
              text:'Industrial furnaces identified in §260.10',
            },
            {
              text:'Boilers as defined in §260.10 and identified in §279.12',
            },
            {
              text:'Hazardous waste incinerators subject to regulation under the Subpart O of parts 264 or 265',
            },
          ],
        },
        {
          name: ' Regulations on Imports or Exports of Used Oil​',
          list: [
            {
              text: 'Transporters who import or export used oil are subject to the requirements of 40 CFR Subpart E from the time the used oil enters until the time it exits the United States.',
            },
            {
              text:'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
            },

          ],
        },
        {
          name: 'Regulatory Enforcement',
          olList: [
            {
              text: 'Responsible Agencies',
              listDetails:[
                'EPA',
                'State, county, and/or municipal governments'
              ]
            },
            {
              text: ' Enforcement Mechanisms',
              listDetails:[
                'Federally required record-keeping',
                'EPA notifications and identification numbers',
                'State required reporting, registration, and/or notification',
                'Federal EPA identification numbers',
              ]
            },
            {
              text: 'Effectiveness of Regulations Enforcement',
              listDetails:[
                'The federal regulations and standards dictate the minimum standards of used oil management programs in the individual states',
                'Individual states’ oversight is far more effective and differs widely between states',
              ]
            },

          ],
        },
        {
          name: 'Key Influencers',
          tabs: [
            {
              title: 'Public Sector',
              tabsList:[
                'EPA',
                'DOE',
                'State, county, and municipal governments',
                'Executive Orders',
              ]
            },
            {
              title: 'Private Sector',
              tabsList:[
                'ExxonMobil',
                'Chevron',
                'Shell',
                'Valvoline',
                'ConocoPhillips',
                'BP',
                'Safety-Kleen',
              ]
            },

          ]
        },
        {
          name: 'Key Influencers',
          desc : 'Federal used oil regulations and standards provide a general framework for used oil handlers to manage used oil operations and minimize the potential for environmental impact. However, the system largely relies on self-regulation and enforcement at the state and local levels. The implementation and oversight of a used oil management program is largely left to individual states, provided the state regulations are at least as strict as the federal used oil standards. Compliance and enforcement varies widely, with California (through CalRecycle) leading the way with state initiatives, which go well beyond Federal guidelines.'
        },
      ],
    },
    {
      country: 'Canada',
     details: [
        {
          name: 'Generation',
          list: [
            {
              text: 'Generators are responsible for environmental release cleanup.',
            },
            {
              text: 'Information or testing is required to ensure that the contaminants are under an acceptable limit.',
            }

          ],
        },
        {
          name: 'Classification (Special Waste)',
          list: [
            {
              text: 'Used oil is classified into on-specification and off-specification used oil for using it as a fuel. On-specification used oil has an arsenic concentration of up to 5 parts per million (ppm), cadmium up to 2 ppm, chromium up to 10 ppm, lead up to 100 ppm, total halogens up to 4,000 ppm, and a minimum flash point of 100°F. Used oil is classified as off-specification if it does not meet the criteria mentioned above. ',
            },
            {
              text: 'However, if the total halogen concentration goes beyond 1,000 ppm, used oil is classified as a hazardous waste. In case of hazardous waste, used oil must be disposed of per criteria laid out under 40 CFR 260 through 266, 268, 270, and 124. In case of non-hazardous solid waste, it must comply with regulations included under 40 CFR 239 through 259.',
            },
            {
              text: 'Used oil contaminated with PCBs',
              listDetails: [
                'Used oil with PCB concentrations ≥ 50 ppm is regulated for disposal under the Toxic Substances Control Act (TSCA).',
                'Used oil with lower PCB concentrations (≥ 2 ppm and < 50 ppm) may be burned as a fuel, subject to restrictions listed in 40 CFR §761.20(e), 40 CFR part 279, and any applicable state and local laws.',
                'Used oil with < 2 ppm may be managed as used oil.',
                'TSCA requirements may not be avoided through dilution.',
                'Contaminated oil must be disposed of in accordance with PCB regulations 40 CFR §761.79.',
              ]
            },
          ],
        },
        {
          name: 'Prohibitions',
          list: [
            {
              text: 'Used oil as a dust suppressant (effectively)',
              listDetails: [
                'The regulations allow a state to petition the EPA for an exception; however, no states have been granted this permission.',
                'Surface impoundments',
                'Off-specification used oil fuel may only be burned for energy recovery in particular units'
              ]
            },
          ],
        },
        {
          name: 'Collections',
          list: [
            {
              text: 'Information or testing required to rebut the hazardous waste mixing presumption',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
          ],
        },
        {
          name: ' Transportation and Storage',
          list: [
            {
              text: 'Minimum storage tank and container requirements:',
              listDetails: [
                'Must be in good condition',
                'Must be labeled “Used Oil”'
              ]
            },
            {
              text: 'Generators, transporters, processors/re-refiners, and burners are also subject to Spill Prevention, Control, and Countermeasures (40 CFR part 112).',
            },
            {
              text: 'Storage in underground tanks is regulated under RCRA Subtitle I, 40 CFR 280.',
            },

            {
              text: 'Transportation & Transfer Facilities:',
              listDetails: [
                'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
                'Secondary containment required (not for transporters)',
                'Responsible for environmental release cleanup',
                'EPA Identification Number and notification required',
              ]
            },
            {
              text: 'Acceptance and delivery records (three years) must be kept.',
            },
            {
              text: 'Information or testing is needed to rebut the hazardous waste mixing presumption (keep records for three years).',
            },
            {
              text: 'Persons transporting used oil that meets the definition of hazardous material in 49 CFR 171.8 must comply with all applicable USDOT regulations in 49 CFR parts 171 through 180.',
            },



          ],
        },
        {
          name: ' Disposal – Re-refining​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Required to keep acceptance and delivery records (three years)',
            },
            {
              text:'Required to create and follow an analysis plan that details how the hazardous waste mixing presumption will be rebutted',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'A contingency plan and emergency procedures (same as Parts 264 & 265 subpart D)',
            },
            {
              text:'Written report on biennial basis',
            },
          ],
        },
        {
          name: 'Disposal – Fuel​​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Must keep acceptance records (three years)',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'Off-specification used oil fuel may be burned for energy recovery in only the following devices:',
            },
            {
              text:'Industrial furnaces identified in §260.10',
            },
            {
              text:'Boilers as defined in §260.10 and identified in §279.12',
            },
            {
              text:'Hazardous waste incinerators subject to regulation under the Subpart O of parts 264 or 265',
            },
          ],
        },
        {
          name: ' Regulations on Imports or Exports of Used Oil​',
          list: [
            {
              text: 'Transporters who import or export used oil are subject to the requirements of 40 CFR Subpart E from the time the used oil enters until the time it exits the United States.',
            },
            {
              text:'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
            },

          ],
        },
        {
          name: 'Regulatory Enforcement',
          olList: [
            {
              text: 'Responsible Agencies',
              listDetails:[
                'EPA',
                'State, county, and/or municipal governments'
              ]
            },
            {
              text: ' Enforcement Mechanisms',
              listDetails:[
                'Federally required record-keeping',
                'EPA notifications and identification numbers',
                'State required reporting, registration, and/or notification',
                'Federal EPA identification numbers',
              ]
            },
            {
              text: 'Effectiveness of Regulations Enforcement',
              listDetails:[
                'The federal regulations and standards dictate the minimum standards of used oil management programs in the individual states',
                'Individual states’ oversight is far more effective and differs widely between states',
              ]
            },

          ],
        },
        {
          name: 'Key Influencers',
          tabs: [
            {
              title: 'Public Sector',
              tabsList:[
                'EPA',
                'DOE',
                'State, county, and municipal governments',
                'Executive Orders',
              ]
            },
            {
              title: 'Private Sector',
              tabsList:[
                'ExxonMobil',
                'Chevron',
                'Shell',
                'Valvoline',
                'ConocoPhillips',
                'BP',
                'Safety-Kleen',
              ]
            },

          ]
        },
        {
          name: 'Key Influencers',
          desc : 'Federal used oil regulations and standards provide a general framework for used oil handlers to manage used oil operations and minimize the potential for environmental impact. However, the system largely relies on self-regulation and enforcement at the state and local levels. The implementation and oversight of a used oil management program is largely left to individual states, provided the state regulations are at least as strict as the federal used oil standards. Compliance and enforcement varies widely, with California (through CalRecycle) leading the way with state initiatives, which go well beyond Federal guidelines.'
        },
      ],
    },
    {
      country: 'India',
     details: [
        {
          name: 'Generation',
          list: [
            {
              text: 'Generators are responsible for environmental release cleanup.',
            },
            {
              text: 'Information or testing is required to ensure that the contaminants are under an acceptable limit.',
            }

          ],
        },
        {
          name: 'Classification (Special Waste)',
          list: [
            {
              text: 'Used oil is classified into on-specification and off-specification used oil for using it as a fuel. On-specification used oil has an arsenic concentration of up to 5 parts per million (ppm), cadmium up to 2 ppm, chromium up to 10 ppm, lead up to 100 ppm, total halogens up to 4,000 ppm, and a minimum flash point of 100°F. Used oil is classified as off-specification if it does not meet the criteria mentioned above. ',
            },
            {
              text: 'However, if the total halogen concentration goes beyond 1,000 ppm, used oil is classified as a hazardous waste. In case of hazardous waste, used oil must be disposed of per criteria laid out under 40 CFR 260 through 266, 268, 270, and 124. In case of non-hazardous solid waste, it must comply with regulations included under 40 CFR 239 through 259.',
            },
            {
              text: 'Used oil contaminated with PCBs',
              listDetails: [
                'Used oil with PCB concentrations ≥ 50 ppm is regulated for disposal under the Toxic Substances Control Act (TSCA).',
                'Used oil with lower PCB concentrations (≥ 2 ppm and < 50 ppm) may be burned as a fuel, subject to restrictions listed in 40 CFR §761.20(e), 40 CFR part 279, and any applicable state and local laws.',
                'Used oil with < 2 ppm may be managed as used oil.',
                'TSCA requirements may not be avoided through dilution.',
                'Contaminated oil must be disposed of in accordance with PCB regulations 40 CFR §761.79.',
              ]
            },
          ],
        },
        {
          name: 'Prohibitions',
          list: [
            {
              text: 'Used oil as a dust suppressant (effectively)',
              listDetails: [
                'The regulations allow a state to petition the EPA for an exception; however, no states have been granted this permission.',
                'Surface impoundments',
                'Off-specification used oil fuel may only be burned for energy recovery in particular units'
              ]
            },
          ],
        },
        {
          name: 'Collections',
          list: [
            {
              text: 'Information or testing required to rebut the hazardous waste mixing presumption',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
          ],
        },
        {
          name: ' Transportation and Storage',
          list: [
            {
              text: 'Minimum storage tank and container requirements:',
              listDetails: [
                'Must be in good condition',
                'Must be labeled “Used Oil”'
              ]
            },
            {
              text: 'Generators, transporters, processors/re-refiners, and burners are also subject to Spill Prevention, Control, and Countermeasures (40 CFR part 112).',
            },
            {
              text: 'Storage in underground tanks is regulated under RCRA Subtitle I, 40 CFR 280.',
            },

            {
              text: 'Transportation & Transfer Facilities:',
              listDetails: [
                'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
                'Secondary containment required (not for transporters)',
                'Responsible for environmental release cleanup',
                'EPA Identification Number and notification required',
              ]
            },
            {
              text: 'Acceptance and delivery records (three years) must be kept.',
            },
            {
              text: 'Information or testing is needed to rebut the hazardous waste mixing presumption (keep records for three years).',
            },
            {
              text: 'Persons transporting used oil that meets the definition of hazardous material in 49 CFR 171.8 must comply with all applicable USDOT regulations in 49 CFR parts 171 through 180.',
            },



          ],
        },
        {
          name: ' Disposal – Re-refining​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Required to keep acceptance and delivery records (three years)',
            },
            {
              text:'Required to create and follow an analysis plan that details how the hazardous waste mixing presumption will be rebutted',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'A contingency plan and emergency procedures (same as Parts 264 & 265 subpart D)',
            },
            {
              text:'Written report on biennial basis',
            },
          ],
        },
        {
          name: 'Disposal – Fuel​​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Must keep acceptance records (three years)',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'Off-specification used oil fuel may be burned for energy recovery in only the following devices:',
            },
            {
              text:'Industrial furnaces identified in §260.10',
            },
            {
              text:'Boilers as defined in §260.10 and identified in §279.12',
            },
            {
              text:'Hazardous waste incinerators subject to regulation under the Subpart O of parts 264 or 265',
            },
          ],
        },
        {
          name: ' Regulations on Imports or Exports of Used Oil​',
          list: [
            {
              text: 'Transporters who import or export used oil are subject to the requirements of 40 CFR Subpart E from the time the used oil enters until the time it exits the United States.',
            },
            {
              text:'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
            },

          ],
        },
        {
          name: 'Regulatory Enforcement',
          olList: [
            {
              text: 'Responsible Agencies',
              listDetails:[
                'EPA',
                'State, county, and/or municipal governments'
              ]
            },
            {
              text: ' Enforcement Mechanisms',
              listDetails:[
                'Federally required record-keeping',
                'EPA notifications and identification numbers',
                'State required reporting, registration, and/or notification',
                'Federal EPA identification numbers',
              ]
            },
            {
              text: 'Effectiveness of Regulations Enforcement',
              listDetails:[
                'The federal regulations and standards dictate the minimum standards of used oil management programs in the individual states',
                'Individual states’ oversight is far more effective and differs widely between states',
              ]
            },

          ],
        },
        {
          name: 'Key Influencers',
          tabs: [
            {
              title: 'Public Sector',
              tabsList:[
                'EPA',
                'DOE',
                'State, county, and municipal governments',
                'Executive Orders',
              ]
            },
            {
              title: 'Private Sector',
              tabsList:[
                'ExxonMobil',
                'Chevron',
                'Shell',
                'Valvoline',
                'ConocoPhillips',
                'BP',
                'Safety-Kleen',
              ]
            },

          ]
        },
        {
          name: 'Key Influencers',
          desc : 'Federal used oil regulations and standards provide a general framework for used oil handlers to manage used oil operations and minimize the potential for environmental impact. However, the system largely relies on self-regulation and enforcement at the state and local levels. The implementation and oversight of a used oil management program is largely left to individual states, provided the state regulations are at least as strict as the federal used oil standards. Compliance and enforcement varies widely, with California (through CalRecycle) leading the way with state initiatives, which go well beyond Federal guidelines.'
        },
      ],
    },
    {
      country: 'Indonesia',
     details: [
        {
          name: 'Generation',
          list: [
            {
              text: 'Generators are responsible for environmental release cleanup.',
            },
            {
              text: 'Information or testing is required to ensure that the contaminants are under an acceptable limit.',
            }

          ],
        },
        {
          name: 'Classification (Special Waste)',
          list: [
            {
              text: 'Used oil is classified into on-specification and off-specification used oil for using it as a fuel. On-specification used oil has an arsenic concentration of up to 5 parts per million (ppm), cadmium up to 2 ppm, chromium up to 10 ppm, lead up to 100 ppm, total halogens up to 4,000 ppm, and a minimum flash point of 100°F. Used oil is classified as off-specification if it does not meet the criteria mentioned above. ',
            },
            {
              text: 'However, if the total halogen concentration goes beyond 1,000 ppm, used oil is classified as a hazardous waste. In case of hazardous waste, used oil must be disposed of per criteria laid out under 40 CFR 260 through 266, 268, 270, and 124. In case of non-hazardous solid waste, it must comply with regulations included under 40 CFR 239 through 259.',
            },
            {
              text: 'Used oil contaminated with PCBs',
              listDetails: [
                'Used oil with PCB concentrations ≥ 50 ppm is regulated for disposal under the Toxic Substances Control Act (TSCA).',
                'Used oil with lower PCB concentrations (≥ 2 ppm and < 50 ppm) may be burned as a fuel, subject to restrictions listed in 40 CFR §761.20(e), 40 CFR part 279, and any applicable state and local laws.',
                'Used oil with < 2 ppm may be managed as used oil.',
                'TSCA requirements may not be avoided through dilution.',
                'Contaminated oil must be disposed of in accordance with PCB regulations 40 CFR §761.79.',
              ]
            },
          ],
        },
        {
          name: 'Prohibitions',
          list: [
            {
              text: 'Used oil as a dust suppressant (effectively)',
              listDetails: [
                'The regulations allow a state to petition the EPA for an exception; however, no states have been granted this permission.',
                'Surface impoundments',
                'Off-specification used oil fuel may only be burned for energy recovery in particular units'
              ]
            },
          ],
        },
        {
          name: 'Collections',
          list: [
            {
              text: 'Information or testing required to rebut the hazardous waste mixing presumption',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
          ],
        },
        {
          name: ' Transportation and Storage',
          list: [
            {
              text: 'Minimum storage tank and container requirements:',
              listDetails: [
                'Must be in good condition',
                'Must be labeled “Used Oil”'
              ]
            },
            {
              text: 'Generators, transporters, processors/re-refiners, and burners are also subject to Spill Prevention, Control, and Countermeasures (40 CFR part 112).',
            },
            {
              text: 'Storage in underground tanks is regulated under RCRA Subtitle I, 40 CFR 280.',
            },

            {
              text: 'Transportation & Transfer Facilities:',
              listDetails: [
                'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
                'Secondary containment required (not for transporters)',
                'Responsible for environmental release cleanup',
                'EPA Identification Number and notification required',
              ]
            },
            {
              text: 'Acceptance and delivery records (three years) must be kept.',
            },
            {
              text: 'Information or testing is needed to rebut the hazardous waste mixing presumption (keep records for three years).',
            },
            {
              text: 'Persons transporting used oil that meets the definition of hazardous material in 49 CFR 171.8 must comply with all applicable USDOT regulations in 49 CFR parts 171 through 180.',
            },



          ],
        },
        {
          name: ' Disposal – Re-refining​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Required to keep acceptance and delivery records (three years)',
            },
            {
              text:'Required to create and follow an analysis plan that details how the hazardous waste mixing presumption will be rebutted',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'A contingency plan and emergency procedures (same as Parts 264 & 265 subpart D)',
            },
            {
              text:'Written report on biennial basis',
            },
          ],
        },
        {
          name: 'Disposal – Fuel​​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Must keep acceptance records (three years)',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'Off-specification used oil fuel may be burned for energy recovery in only the following devices:',
            },
            {
              text:'Industrial furnaces identified in §260.10',
            },
            {
              text:'Boilers as defined in §260.10 and identified in §279.12',
            },
            {
              text:'Hazardous waste incinerators subject to regulation under the Subpart O of parts 264 or 265',
            },
          ],
        },
        {
          name: ' Regulations on Imports or Exports of Used Oil​',
          list: [
            {
              text: 'Transporters who import or export used oil are subject to the requirements of 40 CFR Subpart E from the time the used oil enters until the time it exits the United States.',
            },
            {
              text:'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
            },

          ],
        },
        {
          name: 'Regulatory Enforcement',
          olList: [
            {
              text: 'Responsible Agencies',
              listDetails:[
                'EPA',
                'State, county, and/or municipal governments'
              ]
            },
            {
              text: ' Enforcement Mechanisms',
              listDetails:[
                'Federally required record-keeping',
                'EPA notifications and identification numbers',
                'State required reporting, registration, and/or notification',
                'Federal EPA identification numbers',
              ]
            },
            {
              text: 'Effectiveness of Regulations Enforcement',
              listDetails:[
                'The federal regulations and standards dictate the minimum standards of used oil management programs in the individual states',
                'Individual states’ oversight is far more effective and differs widely between states',
              ]
            },

          ],
        },
        {
          name: 'Key Influencers',
          tabs: [
            {
              title: 'Public Sector',
              tabsList:[
                'EPA',
                'DOE',
                'State, county, and municipal governments',
                'Executive Orders',
              ]
            },
            {
              title: 'Private Sector',
              tabsList:[
                'ExxonMobil',
                'Chevron',
                'Shell',
                'Valvoline',
                'ConocoPhillips',
                'BP',
                'Safety-Kleen',
              ]
            },

          ]
        },
        {
          name: 'Key Influencers',
          desc : 'Federal used oil regulations and standards provide a general framework for used oil handlers to manage used oil operations and minimize the potential for environmental impact. However, the system largely relies on self-regulation and enforcement at the state and local levels. The implementation and oversight of a used oil management program is largely left to individual states, provided the state regulations are at least as strict as the federal used oil standards. Compliance and enforcement varies widely, with California (through CalRecycle) leading the way with state initiatives, which go well beyond Federal guidelines.'
        },
      ],
    },
    {
      country: 'Japan',
     details: [
        {
          name: 'Generation',
          list: [
            {
              text: 'Generators are responsible for environmental release cleanup.',
            },
            {
              text: 'Information or testing is required to ensure that the contaminants are under an acceptable limit.',
            }

          ],
        },
        {
          name: 'Classification (Special Waste)',
          list: [
            {
              text: 'Used oil is classified into on-specification and off-specification used oil for using it as a fuel. On-specification used oil has an arsenic concentration of up to 5 parts per million (ppm), cadmium up to 2 ppm, chromium up to 10 ppm, lead up to 100 ppm, total halogens up to 4,000 ppm, and a minimum flash point of 100°F. Used oil is classified as off-specification if it does not meet the criteria mentioned above. ',
            },
            {
              text: 'However, if the total halogen concentration goes beyond 1,000 ppm, used oil is classified as a hazardous waste. In case of hazardous waste, used oil must be disposed of per criteria laid out under 40 CFR 260 through 266, 268, 270, and 124. In case of non-hazardous solid waste, it must comply with regulations included under 40 CFR 239 through 259.',
            },
            {
              text: 'Used oil contaminated with PCBs',
              listDetails: [
                'Used oil with PCB concentrations ≥ 50 ppm is regulated for disposal under the Toxic Substances Control Act (TSCA).',
                'Used oil with lower PCB concentrations (≥ 2 ppm and < 50 ppm) may be burned as a fuel, subject to restrictions listed in 40 CFR §761.20(e), 40 CFR part 279, and any applicable state and local laws.',
                'Used oil with < 2 ppm may be managed as used oil.',
                'TSCA requirements may not be avoided through dilution.',
                'Contaminated oil must be disposed of in accordance with PCB regulations 40 CFR §761.79.',
              ]
            },
          ],
        },
        {
          name: 'Prohibitions',
          list: [
            {
              text: 'Used oil as a dust suppressant (effectively)',
              listDetails: [
                'The regulations allow a state to petition the EPA for an exception; however, no states have been granted this permission.',
                'Surface impoundments',
                'Off-specification used oil fuel may only be burned for energy recovery in particular units'
              ]
            },
          ],
        },
        {
          name: 'Collections',
          list: [
            {
              text: 'Information or testing required to rebut the hazardous waste mixing presumption',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
          ],
        },
        {
          name: ' Transportation and Storage',
          list: [
            {
              text: 'Minimum storage tank and container requirements:',
              listDetails: [
                'Must be in good condition',
                'Must be labeled “Used Oil”'
              ]
            },
            {
              text: 'Generators, transporters, processors/re-refiners, and burners are also subject to Spill Prevention, Control, and Countermeasures (40 CFR part 112).',
            },
            {
              text: 'Storage in underground tanks is regulated under RCRA Subtitle I, 40 CFR 280.',
            },

            {
              text: 'Transportation & Transfer Facilities:',
              listDetails: [
                'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
                'Secondary containment required (not for transporters)',
                'Responsible for environmental release cleanup',
                'EPA Identification Number and notification required',
              ]
            },
            {
              text: 'Acceptance and delivery records (three years) must be kept.',
            },
            {
              text: 'Information or testing is needed to rebut the hazardous waste mixing presumption (keep records for three years).',
            },
            {
              text: 'Persons transporting used oil that meets the definition of hazardous material in 49 CFR 171.8 must comply with all applicable USDOT regulations in 49 CFR parts 171 through 180.',
            },



          ],
        },
        {
          name: ' Disposal – Re-refining​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Required to keep acceptance and delivery records (three years)',
            },
            {
              text:'Required to create and follow an analysis plan that details how the hazardous waste mixing presumption will be rebutted',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'A contingency plan and emergency procedures (same as Parts 264 & 265 subpart D)',
            },
            {
              text:'Written report on biennial basis',
            },
          ],
        },
        {
          name: 'Disposal – Fuel​​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Must keep acceptance records (three years)',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'Off-specification used oil fuel may be burned for energy recovery in only the following devices:',
            },
            {
              text:'Industrial furnaces identified in §260.10',
            },
            {
              text:'Boilers as defined in §260.10 and identified in §279.12',
            },
            {
              text:'Hazardous waste incinerators subject to regulation under the Subpart O of parts 264 or 265',
            },
          ],
        },
        {
          name: ' Regulations on Imports or Exports of Used Oil​',
          list: [
            {
              text: 'Transporters who import or export used oil are subject to the requirements of 40 CFR Subpart E from the time the used oil enters until the time it exits the United States.',
            },
            {
              text:'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
            },

          ],
        },
        {
          name: 'Regulatory Enforcement',
          olList: [
            {
              text: 'Responsible Agencies',
              listDetails:[
                'EPA',
                'State, county, and/or municipal governments'
              ]
            },
            {
              text: ' Enforcement Mechanisms',
              listDetails:[
                'Federally required record-keeping',
                'EPA notifications and identification numbers',
                'State required reporting, registration, and/or notification',
                'Federal EPA identification numbers',
              ]
            },
            {
              text: 'Effectiveness of Regulations Enforcement',
              listDetails:[
                'The federal regulations and standards dictate the minimum standards of used oil management programs in the individual states',
                'Individual states’ oversight is far more effective and differs widely between states',
              ]
            },

          ],
        },
        {
          name: 'Key Influencers',
          tabs: [
            {
              title: 'Public Sector',
              tabsList:[
                'EPA',
                'DOE',
                'State, county, and municipal governments',
                'Executive Orders',
              ]
            },
            {
              title: 'Private Sector',
              tabsList:[
                'ExxonMobil',
                'Chevron',
                'Shell',
                'Valvoline',
                'ConocoPhillips',
                'BP',
                'Safety-Kleen',
              ]
            },

          ]
        },
        {
          name: 'Key Influencers',
          desc : 'Federal used oil regulations and standards provide a general framework for used oil handlers to manage used oil operations and minimize the potential for environmental impact. However, the system largely relies on self-regulation and enforcement at the state and local levels. The implementation and oversight of a used oil management program is largely left to individual states, provided the state regulations are at least as strict as the federal used oil standards. Compliance and enforcement varies widely, with California (through CalRecycle) leading the way with state initiatives, which go well beyond Federal guidelines.'
        },
      ],
    },
    {
      country: 'SouthKorea',
     details: [
        {
          name: 'Generation',
          list: [
            {
              text: 'Generators are responsible for environmental release cleanup.',
            },
            {
              text: 'Information or testing is required to ensure that the contaminants are under an acceptable limit.',
            }

          ],
        },
        {
          name: 'Classification (Special Waste)',
          list: [
            {
              text: 'Used oil is classified into on-specification and off-specification used oil for using it as a fuel. On-specification used oil has an arsenic concentration of up to 5 parts per million (ppm), cadmium up to 2 ppm, chromium up to 10 ppm, lead up to 100 ppm, total halogens up to 4,000 ppm, and a minimum flash point of 100°F. Used oil is classified as off-specification if it does not meet the criteria mentioned above. ',
            },
            {
              text: 'However, if the total halogen concentration goes beyond 1,000 ppm, used oil is classified as a hazardous waste. In case of hazardous waste, used oil must be disposed of per criteria laid out under 40 CFR 260 through 266, 268, 270, and 124. In case of non-hazardous solid waste, it must comply with regulations included under 40 CFR 239 through 259.',
            },
            {
              text: 'Used oil contaminated with PCBs',
              listDetails: [
                'Used oil with PCB concentrations ≥ 50 ppm is regulated for disposal under the Toxic Substances Control Act (TSCA).',
                'Used oil with lower PCB concentrations (≥ 2 ppm and < 50 ppm) may be burned as a fuel, subject to restrictions listed in 40 CFR §761.20(e), 40 CFR part 279, and any applicable state and local laws.',
                'Used oil with < 2 ppm may be managed as used oil.',
                'TSCA requirements may not be avoided through dilution.',
                'Contaminated oil must be disposed of in accordance with PCB regulations 40 CFR §761.79.',
              ]
            },
          ],
        },
        {
          name: 'Prohibitions',
          list: [
            {
              text: 'Used oil as a dust suppressant (effectively)',
              listDetails: [
                'The regulations allow a state to petition the EPA for an exception; however, no states have been granted this permission.',
                'Surface impoundments',
                'Off-specification used oil fuel may only be burned for energy recovery in particular units'
              ]
            },
          ],
        },
        {
          name: 'Collections',
          list: [
            {
              text: 'Information or testing required to rebut the hazardous waste mixing presumption',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
          ],
        },
        {
          name: ' Transportation and Storage',
          list: [
            {
              text: 'Minimum storage tank and container requirements:',
              listDetails: [
                'Must be in good condition',
                'Must be labeled “Used Oil”'
              ]
            },
            {
              text: 'Generators, transporters, processors/re-refiners, and burners are also subject to Spill Prevention, Control, and Countermeasures (40 CFR part 112).',
            },
            {
              text: 'Storage in underground tanks is regulated under RCRA Subtitle I, 40 CFR 280.',
            },

            {
              text: 'Transportation & Transfer Facilities:',
              listDetails: [
                'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
                'Secondary containment required (not for transporters)',
                'Responsible for environmental release cleanup',
                'EPA Identification Number and notification required',
              ]
            },
            {
              text: 'Acceptance and delivery records (three years) must be kept.',
            },
            {
              text: 'Information or testing is needed to rebut the hazardous waste mixing presumption (keep records for three years).',
            },
            {
              text: 'Persons transporting used oil that meets the definition of hazardous material in 49 CFR 171.8 must comply with all applicable USDOT regulations in 49 CFR parts 171 through 180.',
            },



          ],
        },
        {
          name: ' Disposal – Re-refining​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Required to keep acceptance and delivery records (three years)',
            },
            {
              text:'Required to create and follow an analysis plan that details how the hazardous waste mixing presumption will be rebutted',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'A contingency plan and emergency procedures (same as Parts 264 & 265 subpart D)',
            },
            {
              text:'Written report on biennial basis',
            },
          ],
        },
        {
          name: 'Disposal – Fuel​​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Must keep acceptance records (three years)',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'Off-specification used oil fuel may be burned for energy recovery in only the following devices:',
            },
            {
              text:'Industrial furnaces identified in §260.10',
            },
            {
              text:'Boilers as defined in §260.10 and identified in §279.12',
            },
            {
              text:'Hazardous waste incinerators subject to regulation under the Subpart O of parts 264 or 265',
            },
          ],
        },
        {
          name: ' Regulations on Imports or Exports of Used Oil​',
          list: [
            {
              text: 'Transporters who import or export used oil are subject to the requirements of 40 CFR Subpart E from the time the used oil enters until the time it exits the United States.',
            },
            {
              text:'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
            },

          ],
        },
        {
          name: 'Regulatory Enforcement',
          olList: [
            {
              text: 'Responsible Agencies',
              listDetails:[
                'EPA',
                'State, county, and/or municipal governments'
              ]
            },
            {
              text: ' Enforcement Mechanisms',
              listDetails:[
                'Federally required record-keeping',
                'EPA notifications and identification numbers',
                'State required reporting, registration, and/or notification',
                'Federal EPA identification numbers',
              ]
            },
            {
              text: 'Effectiveness of Regulations Enforcement',
              listDetails:[
                'The federal regulations and standards dictate the minimum standards of used oil management programs in the individual states',
                'Individual states’ oversight is far more effective and differs widely between states',
              ]
            },

          ],
        },
        {
          name: 'Key Influencers',
          tabs: [
            {
              title: 'Public Sector',
              tabsList:[
                'EPA',
                'DOE',
                'State, county, and municipal governments',
                'Executive Orders',
              ]
            },
            {
              title: 'Private Sector',
              tabsList:[
                'ExxonMobil',
                'Chevron',
                'Shell',
                'Valvoline',
                'ConocoPhillips',
                'BP',
                'Safety-Kleen',
              ]
            },

          ]
        },
        {
          name: 'Key Influencers',
          desc : 'Federal used oil regulations and standards provide a general framework for used oil handlers to manage used oil operations and minimize the potential for environmental impact. However, the system largely relies on self-regulation and enforcement at the state and local levels. The implementation and oversight of a used oil management program is largely left to individual states, provided the state regulations are at least as strict as the federal used oil standards. Compliance and enforcement varies widely, with California (through CalRecycle) leading the way with state initiatives, which go well beyond Federal guidelines.'
        },
      ],
    },
    {
      country: 'Thailand',
     details: [
        {
          name: 'Generation',
          list: [
            {
              text: 'Generators are responsible for environmental release cleanup.',
            },
            {
              text: 'Information or testing is required to ensure that the contaminants are under an acceptable limit.',
            }

          ],
        },
        {
          name: 'Classification (Special Waste)',
          list: [
            {
              text: 'Used oil is classified into on-specification and off-specification used oil for using it as a fuel. On-specification used oil has an arsenic concentration of up to 5 parts per million (ppm), cadmium up to 2 ppm, chromium up to 10 ppm, lead up to 100 ppm, total halogens up to 4,000 ppm, and a minimum flash point of 100°F. Used oil is classified as off-specification if it does not meet the criteria mentioned above. ',
            },
            {
              text: 'However, if the total halogen concentration goes beyond 1,000 ppm, used oil is classified as a hazardous waste. In case of hazardous waste, used oil must be disposed of per criteria laid out under 40 CFR 260 through 266, 268, 270, and 124. In case of non-hazardous solid waste, it must comply with regulations included under 40 CFR 239 through 259.',
            },
            {
              text: 'Used oil contaminated with PCBs',
              listDetails: [
                'Used oil with PCB concentrations ≥ 50 ppm is regulated for disposal under the Toxic Substances Control Act (TSCA).',
                'Used oil with lower PCB concentrations (≥ 2 ppm and < 50 ppm) may be burned as a fuel, subject to restrictions listed in 40 CFR §761.20(e), 40 CFR part 279, and any applicable state and local laws.',
                'Used oil with < 2 ppm may be managed as used oil.',
                'TSCA requirements may not be avoided through dilution.',
                'Contaminated oil must be disposed of in accordance with PCB regulations 40 CFR §761.79.',
              ]
            },
          ],
        },
        {
          name: 'Prohibitions',
          list: [
            {
              text: 'Used oil as a dust suppressant (effectively)',
              listDetails: [
                'The regulations allow a state to petition the EPA for an exception; however, no states have been granted this permission.',
                'Surface impoundments',
                'Off-specification used oil fuel may only be burned for energy recovery in particular units'
              ]
            },
          ],
        },
        {
          name: 'Collections',
          list: [
            {
              text: 'Information or testing required to rebut the hazardous waste mixing presumption',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
          ],
        },
        {
          name: ' Transportation and Storage',
          list: [
            {
              text: 'Minimum storage tank and container requirements:',
              listDetails: [
                'Must be in good condition',
                'Must be labeled “Used Oil”'
              ]
            },
            {
              text: 'Generators, transporters, processors/re-refiners, and burners are also subject to Spill Prevention, Control, and Countermeasures (40 CFR part 112).',
            },
            {
              text: 'Storage in underground tanks is regulated under RCRA Subtitle I, 40 CFR 280.',
            },

            {
              text: 'Transportation & Transfer Facilities:',
              listDetails: [
                'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
                'Secondary containment required (not for transporters)',
                'Responsible for environmental release cleanup',
                'EPA Identification Number and notification required',
              ]
            },
            {
              text: 'Acceptance and delivery records (three years) must be kept.',
            },
            {
              text: 'Information or testing is needed to rebut the hazardous waste mixing presumption (keep records for three years).',
            },
            {
              text: 'Persons transporting used oil that meets the definition of hazardous material in 49 CFR 171.8 must comply with all applicable USDOT regulations in 49 CFR parts 171 through 180.',
            },



          ],
        },
        {
          name: ' Disposal – Re-refining​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Required to keep acceptance and delivery records (three years)',
            },
            {
              text:'Required to create and follow an analysis plan that details how the hazardous waste mixing presumption will be rebutted',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'A contingency plan and emergency procedures (same as Parts 264 & 265 subpart D)',
            },
            {
              text:'Written report on biennial basis',
            },
          ],
        },
        {
          name: 'Disposal – Fuel​​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Must keep acceptance records (three years)',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'Off-specification used oil fuel may be burned for energy recovery in only the following devices:',
            },
            {
              text:'Industrial furnaces identified in §260.10',
            },
            {
              text:'Boilers as defined in §260.10 and identified in §279.12',
            },
            {
              text:'Hazardous waste incinerators subject to regulation under the Subpart O of parts 264 or 265',
            },
          ],
        },
        {
          name: ' Regulations on Imports or Exports of Used Oil​',
          list: [
            {
              text: 'Transporters who import or export used oil are subject to the requirements of 40 CFR Subpart E from the time the used oil enters until the time it exits the United States.',
            },
            {
              text:'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
            },

          ],
        },
        {
          name: 'Regulatory Enforcement',
          olList: [
            {
              text: 'Responsible Agencies',
              listDetails:[
                'EPA',
                'State, county, and/or municipal governments'
              ]
            },
            {
              text: ' Enforcement Mechanisms',
              listDetails:[
                'Federally required record-keeping',
                'EPA notifications and identification numbers',
                'State required reporting, registration, and/or notification',
                'Federal EPA identification numbers',
              ]
            },
            {
              text: 'Effectiveness of Regulations Enforcement',
              listDetails:[
                'The federal regulations and standards dictate the minimum standards of used oil management programs in the individual states',
                'Individual states’ oversight is far more effective and differs widely between states',
              ]
            },

          ],
        },
        {
          name: 'Key Influencers',
          tabs: [
            {
              title: 'Public Sector',
              tabsList:[
                'EPA',
                'DOE',
                'State, county, and municipal governments',
                'Executive Orders',
              ]
            },
            {
              title: 'Private Sector',
              tabsList:[
                'ExxonMobil',
                'Chevron',
                'Shell',
                'Valvoline',
                'ConocoPhillips',
                'BP',
                'Safety-Kleen',
              ]
            },

          ]
        },
        {
          name: 'Key Influencers',
          desc : 'Federal used oil regulations and standards provide a general framework for used oil handlers to manage used oil operations and minimize the potential for environmental impact. However, the system largely relies on self-regulation and enforcement at the state and local levels. The implementation and oversight of a used oil management program is largely left to individual states, provided the state regulations are at least as strict as the federal used oil standards. Compliance and enforcement varies widely, with California (through CalRecycle) leading the way with state initiatives, which go well beyond Federal guidelines.'
        },
      ],
    },
    {
      country: 'Malaysia',
     details: [
        {
          name: 'Generation',
          list: [
            {
              text: 'Generators are responsible for environmental release cleanup.',
            },
            {
              text: 'Information or testing is required to ensure that the contaminants are under an acceptable limit.',
            }

          ],
        },
        {
          name: 'Classification (Special Waste)',
          list: [
            {
              text: 'Used oil is classified into on-specification and off-specification used oil for using it as a fuel. On-specification used oil has an arsenic concentration of up to 5 parts per million (ppm), cadmium up to 2 ppm, chromium up to 10 ppm, lead up to 100 ppm, total halogens up to 4,000 ppm, and a minimum flash point of 100°F. Used oil is classified as off-specification if it does not meet the criteria mentioned above. ',
            },
            {
              text: 'However, if the total halogen concentration goes beyond 1,000 ppm, used oil is classified as a hazardous waste. In case of hazardous waste, used oil must be disposed of per criteria laid out under 40 CFR 260 through 266, 268, 270, and 124. In case of non-hazardous solid waste, it must comply with regulations included under 40 CFR 239 through 259.',
            },
            {
              text: 'Used oil contaminated with PCBs',
              listDetails: [
                'Used oil with PCB concentrations ≥ 50 ppm is regulated for disposal under the Toxic Substances Control Act (TSCA).',
                'Used oil with lower PCB concentrations (≥ 2 ppm and < 50 ppm) may be burned as a fuel, subject to restrictions listed in 40 CFR §761.20(e), 40 CFR part 279, and any applicable state and local laws.',
                'Used oil with < 2 ppm may be managed as used oil.',
                'TSCA requirements may not be avoided through dilution.',
                'Contaminated oil must be disposed of in accordance with PCB regulations 40 CFR §761.79.',
              ]
            },
          ],
        },
        {
          name: 'Prohibitions',
          list: [
            {
              text: 'Used oil as a dust suppressant (effectively)',
              listDetails: [
                'The regulations allow a state to petition the EPA for an exception; however, no states have been granted this permission.',
                'Surface impoundments',
                'Off-specification used oil fuel may only be burned for energy recovery in particular units'
              ]
            },
          ],
        },
        {
          name: 'Collections',
          list: [
            {
              text: 'Information or testing required to rebut the hazardous waste mixing presumption',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
          ],
        },
        {
          name: ' Transportation and Storage',
          list: [
            {
              text: 'Minimum storage tank and container requirements:',
              listDetails: [
                'Must be in good condition',
                'Must be labeled “Used Oil”'
              ]
            },
            {
              text: 'Generators, transporters, processors/re-refiners, and burners are also subject to Spill Prevention, Control, and Countermeasures (40 CFR part 112).',
            },
            {
              text: 'Storage in underground tanks is regulated under RCRA Subtitle I, 40 CFR 280.',
            },

            {
              text: 'Transportation & Transfer Facilities:',
              listDetails: [
                'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
                'Secondary containment required (not for transporters)',
                'Responsible for environmental release cleanup',
                'EPA Identification Number and notification required',
              ]
            },
            {
              text: 'Acceptance and delivery records (three years) must be kept.',
            },
            {
              text: 'Information or testing is needed to rebut the hazardous waste mixing presumption (keep records for three years).',
            },
            {
              text: 'Persons transporting used oil that meets the definition of hazardous material in 49 CFR 171.8 must comply with all applicable USDOT regulations in 49 CFR parts 171 through 180.',
            },



          ],
        },
        {
          name: ' Disposal – Re-refining​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Required to keep acceptance and delivery records (three years)',
            },
            {
              text:'Required to create and follow an analysis plan that details how the hazardous waste mixing presumption will be rebutted',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'A contingency plan and emergency procedures (same as Parts 264 & 265 subpart D)',
            },
            {
              text:'Written report on biennial basis',
            },
          ],
        },
        {
          name: 'Disposal – Fuel​​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Must keep acceptance records (three years)',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'Off-specification used oil fuel may be burned for energy recovery in only the following devices:',
            },
            {
              text:'Industrial furnaces identified in §260.10',
            },
            {
              text:'Boilers as defined in §260.10 and identified in §279.12',
            },
            {
              text:'Hazardous waste incinerators subject to regulation under the Subpart O of parts 264 or 265',
            },
          ],
        },
        {
          name: ' Regulations on Imports or Exports of Used Oil​',
          list: [
            {
              text: 'Transporters who import or export used oil are subject to the requirements of 40 CFR Subpart E from the time the used oil enters until the time it exits the United States.',
            },
            {
              text:'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
            },

          ],
        },
        {
          name: 'Regulatory Enforcement',
          olList: [
            {
              text: 'Responsible Agencies',
              listDetails:[
                'EPA',
                'State, county, and/or municipal governments'
              ]
            },
            {
              text: ' Enforcement Mechanisms',
              listDetails:[
                'Federally required record-keeping',
                'EPA notifications and identification numbers',
                'State required reporting, registration, and/or notification',
                'Federal EPA identification numbers',
              ]
            },
            {
              text: 'Effectiveness of Regulations Enforcement',
              listDetails:[
                'The federal regulations and standards dictate the minimum standards of used oil management programs in the individual states',
                'Individual states’ oversight is far more effective and differs widely between states',
              ]
            },

          ],
        },
        {
          name: 'Key Influencers',
          tabs: [
            {
              title: 'Public Sector',
              tabsList:[
                'EPA',
                'DOE',
                'State, county, and municipal governments',
                'Executive Orders',
              ]
            },
            {
              title: 'Private Sector',
              tabsList:[
                'ExxonMobil',
                'Chevron',
                'Shell',
                'Valvoline',
                'ConocoPhillips',
                'BP',
                'Safety-Kleen',
              ]
            },

          ]
        },
        {
          name: 'Key Influencers',
          desc : 'Federal used oil regulations and standards provide a general framework for used oil handlers to manage used oil operations and minimize the potential for environmental impact. However, the system largely relies on self-regulation and enforcement at the state and local levels. The implementation and oversight of a used oil management program is largely left to individual states, provided the state regulations are at least as strict as the federal used oil standards. Compliance and enforcement varies widely, with California (through CalRecycle) leading the way with state initiatives, which go well beyond Federal guidelines.'
        },
      ],
    },
    {
      country: 'Brazil',
     details: [
        {
          name: 'Generation',
          list: [
            {
              text: 'Generators are responsible for environmental release cleanup.',
            },
            {
              text: 'Information or testing is required to ensure that the contaminants are under an acceptable limit.',
            }

          ],
        },
        {
          name: 'Classification (Special Waste)',
          list: [
            {
              text: 'Used oil is classified into on-specification and off-specification used oil for using it as a fuel. On-specification used oil has an arsenic concentration of up to 5 parts per million (ppm), cadmium up to 2 ppm, chromium up to 10 ppm, lead up to 100 ppm, total halogens up to 4,000 ppm, and a minimum flash point of 100°F. Used oil is classified as off-specification if it does not meet the criteria mentioned above. ',
            },
            {
              text: 'However, if the total halogen concentration goes beyond 1,000 ppm, used oil is classified as a hazardous waste. In case of hazardous waste, used oil must be disposed of per criteria laid out under 40 CFR 260 through 266, 268, 270, and 124. In case of non-hazardous solid waste, it must comply with regulations included under 40 CFR 239 through 259.',
            },
            {
              text: 'Used oil contaminated with PCBs',
              listDetails: [
                'Used oil with PCB concentrations ≥ 50 ppm is regulated for disposal under the Toxic Substances Control Act (TSCA).',
                'Used oil with lower PCB concentrations (≥ 2 ppm and < 50 ppm) may be burned as a fuel, subject to restrictions listed in 40 CFR §761.20(e), 40 CFR part 279, and any applicable state and local laws.',
                'Used oil with < 2 ppm may be managed as used oil.',
                'TSCA requirements may not be avoided through dilution.',
                'Contaminated oil must be disposed of in accordance with PCB regulations 40 CFR §761.79.',
              ]
            },
          ],
        },
        {
          name: 'Prohibitions',
          list: [
            {
              text: 'Used oil as a dust suppressant (effectively)',
              listDetails: [
                'The regulations allow a state to petition the EPA for an exception; however, no states have been granted this permission.',
                'Surface impoundments',
                'Off-specification used oil fuel may only be burned for energy recovery in particular units'
              ]
            },
          ],
        },
        {
          name: 'Collections',
          list: [
            {
              text: 'Information or testing required to rebut the hazardous waste mixing presumption',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
          ],
        },
        {
          name: ' Transportation and Storage',
          list: [
            {
              text: 'Minimum storage tank and container requirements:',
              listDetails: [
                'Must be in good condition',
                'Must be labeled “Used Oil”'
              ]
            },
            {
              text: 'Generators, transporters, processors/re-refiners, and burners are also subject to Spill Prevention, Control, and Countermeasures (40 CFR part 112).',
            },
            {
              text: 'Storage in underground tanks is regulated under RCRA Subtitle I, 40 CFR 280.',
            },

            {
              text: 'Transportation & Transfer Facilities:',
              listDetails: [
                'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
                'Secondary containment required (not for transporters)',
                'Responsible for environmental release cleanup',
                'EPA Identification Number and notification required',
              ]
            },
            {
              text: 'Acceptance and delivery records (three years) must be kept.',
            },
            {
              text: 'Information or testing is needed to rebut the hazardous waste mixing presumption (keep records for three years).',
            },
            {
              text: 'Persons transporting used oil that meets the definition of hazardous material in 49 CFR 171.8 must comply with all applicable USDOT regulations in 49 CFR parts 171 through 180.',
            },



          ],
        },
        {
          name: ' Disposal – Re-refining​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Required to keep acceptance and delivery records (three years)',
            },
            {
              text:'Required to create and follow an analysis plan that details how the hazardous waste mixing presumption will be rebutted',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'A contingency plan and emergency procedures (same as Parts 264 & 265 subpart D)',
            },
            {
              text:'Written report on biennial basis',
            },
          ],
        },
        {
          name: 'Disposal – Fuel​​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Must keep acceptance records (three years)',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'Off-specification used oil fuel may be burned for energy recovery in only the following devices:',
            },
            {
              text:'Industrial furnaces identified in §260.10',
            },
            {
              text:'Boilers as defined in §260.10 and identified in §279.12',
            },
            {
              text:'Hazardous waste incinerators subject to regulation under the Subpart O of parts 264 or 265',
            },
          ],
        },
        {
          name: ' Regulations on Imports or Exports of Used Oil​',
          list: [
            {
              text: 'Transporters who import or export used oil are subject to the requirements of 40 CFR Subpart E from the time the used oil enters until the time it exits the United States.',
            },
            {
              text:'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
            },

          ],
        },
        {
          name: 'Regulatory Enforcement',
          olList: [
            {
              text: 'Responsible Agencies',
              listDetails:[
                'EPA',
                'State, county, and/or municipal governments'
              ]
            },
            {
              text: ' Enforcement Mechanisms',
              listDetails:[
                'Federally required record-keeping',
                'EPA notifications and identification numbers',
                'State required reporting, registration, and/or notification',
                'Federal EPA identification numbers',
              ]
            },
            {
              text: 'Effectiveness of Regulations Enforcement',
              listDetails:[
                'The federal regulations and standards dictate the minimum standards of used oil management programs in the individual states',
                'Individual states’ oversight is far more effective and differs widely between states',
              ]
            },

          ],
        },
        {
          name: 'Key Influencers',
          tabs: [
            {
              title: 'Public Sector',
              tabsList:[
                'EPA',
                'DOE',
                'State, county, and municipal governments',
                'Executive Orders',
              ]
            },
            {
              title: 'Private Sector',
              tabsList:[
                'ExxonMobil',
                'Chevron',
                'Shell',
                'Valvoline',
                'ConocoPhillips',
                'BP',
                'Safety-Kleen',
              ]
            },

          ]
        },
        {
          name: 'Key Influencers',
          desc : 'Federal used oil regulations and standards provide a general framework for used oil handlers to manage used oil operations and minimize the potential for environmental impact. However, the system largely relies on self-regulation and enforcement at the state and local levels. The implementation and oversight of a used oil management program is largely left to individual states, provided the state regulations are at least as strict as the federal used oil standards. Compliance and enforcement varies widely, with California (through CalRecycle) leading the way with state initiatives, which go well beyond Federal guidelines.'
        },
      ],
    },
    {
      country: 'Mexico',
     details: [
        {
          name: 'Generation',
          list: [
            {
              text: 'Generators are responsible for environmental release cleanup.',
            },
            {
              text: 'Information or testing is required to ensure that the contaminants are under an acceptable limit.',
            }

          ],
        },
        {
          name: 'Classification (Special Waste)',
          list: [
            {
              text: 'Used oil is classified into on-specification and off-specification used oil for using it as a fuel. On-specification used oil has an arsenic concentration of up to 5 parts per million (ppm), cadmium up to 2 ppm, chromium up to 10 ppm, lead up to 100 ppm, total halogens up to 4,000 ppm, and a minimum flash point of 100°F. Used oil is classified as off-specification if it does not meet the criteria mentioned above. ',
            },
            {
              text: 'However, if the total halogen concentration goes beyond 1,000 ppm, used oil is classified as a hazardous waste. In case of hazardous waste, used oil must be disposed of per criteria laid out under 40 CFR 260 through 266, 268, 270, and 124. In case of non-hazardous solid waste, it must comply with regulations included under 40 CFR 239 through 259.',
            },
            {
              text: 'Used oil contaminated with PCBs',
              listDetails: [
                'Used oil with PCB concentrations ≥ 50 ppm is regulated for disposal under the Toxic Substances Control Act (TSCA).',
                'Used oil with lower PCB concentrations (≥ 2 ppm and < 50 ppm) may be burned as a fuel, subject to restrictions listed in 40 CFR §761.20(e), 40 CFR part 279, and any applicable state and local laws.',
                'Used oil with < 2 ppm may be managed as used oil.',
                'TSCA requirements may not be avoided through dilution.',
                'Contaminated oil must be disposed of in accordance with PCB regulations 40 CFR §761.79.',
              ]
            },
          ],
        },
        {
          name: 'Prohibitions',
          list: [
            {
              text: 'Used oil as a dust suppressant (effectively)',
              listDetails: [
                'The regulations allow a state to petition the EPA for an exception; however, no states have been granted this permission.',
                'Surface impoundments',
                'Off-specification used oil fuel may only be burned for energy recovery in particular units'
              ]
            },
          ],
        },
        {
          name: 'Collections',
          list: [
            {
              text: 'Information or testing required to rebut the hazardous waste mixing presumption',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
          ],
        },
        {
          name: ' Transportation and Storage',
          list: [
            {
              text: 'Minimum storage tank and container requirements:',
              listDetails: [
                'Must be in good condition',
                'Must be labeled “Used Oil”'
              ]
            },
            {
              text: 'Generators, transporters, processors/re-refiners, and burners are also subject to Spill Prevention, Control, and Countermeasures (40 CFR part 112).',
            },
            {
              text: 'Storage in underground tanks is regulated under RCRA Subtitle I, 40 CFR 280.',
            },

            {
              text: 'Transportation & Transfer Facilities:',
              listDetails: [
                'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
                'Secondary containment required (not for transporters)',
                'Responsible for environmental release cleanup',
                'EPA Identification Number and notification required',
              ]
            },
            {
              text: 'Acceptance and delivery records (three years) must be kept.',
            },
            {
              text: 'Information or testing is needed to rebut the hazardous waste mixing presumption (keep records for three years).',
            },
            {
              text: 'Persons transporting used oil that meets the definition of hazardous material in 49 CFR 171.8 must comply with all applicable USDOT regulations in 49 CFR parts 171 through 180.',
            },



          ],
        },
        {
          name: ' Disposal – Re-refining​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Required to keep acceptance and delivery records (three years)',
            },
            {
              text:'Required to create and follow an analysis plan that details how the hazardous waste mixing presumption will be rebutted',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'A contingency plan and emergency procedures (same as Parts 264 & 265 subpart D)',
            },
            {
              text:'Written report on biennial basis',
            },
          ],
        },
        {
          name: 'Disposal – Fuel​​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Must keep acceptance records (three years)',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'Off-specification used oil fuel may be burned for energy recovery in only the following devices:',
            },
            {
              text:'Industrial furnaces identified in §260.10',
            },
            {
              text:'Boilers as defined in §260.10 and identified in §279.12',
            },
            {
              text:'Hazardous waste incinerators subject to regulation under the Subpart O of parts 264 or 265',
            },
          ],
        },
        {
          name: ' Regulations on Imports or Exports of Used Oil​',
          list: [
            {
              text: 'Transporters who import or export used oil are subject to the requirements of 40 CFR Subpart E from the time the used oil enters until the time it exits the United States.',
            },
            {
              text:'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
            },

          ],
        },
        {
          name: 'Regulatory Enforcement',
          olList: [
            {
              text: 'Responsible Agencies',
              listDetails:[
                'EPA',
                'State, county, and/or municipal governments'
              ]
            },
            {
              text: ' Enforcement Mechanisms',
              listDetails:[
                'Federally required record-keeping',
                'EPA notifications and identification numbers',
                'State required reporting, registration, and/or notification',
                'Federal EPA identification numbers',
              ]
            },
            {
              text: 'Effectiveness of Regulations Enforcement',
              listDetails:[
                'The federal regulations and standards dictate the minimum standards of used oil management programs in the individual states',
                'Individual states’ oversight is far more effective and differs widely between states',
              ]
            },

          ],
        },
        {
          name: 'Key Influencers',
          tabs: [
            {
              title: 'Public Sector',
              tabsList:[
                'EPA',
                'DOE',
                'State, county, and municipal governments',
                'Executive Orders',
              ]
            },
            {
              title: 'Private Sector',
              tabsList:[
                'ExxonMobil',
                'Chevron',
                'Shell',
                'Valvoline',
                'ConocoPhillips',
                'BP',
                'Safety-Kleen',
              ]
            },

          ]
        },
        {
          name: 'Key Influencers',
          desc : 'Federal used oil regulations and standards provide a general framework for used oil handlers to manage used oil operations and minimize the potential for environmental impact. However, the system largely relies on self-regulation and enforcement at the state and local levels. The implementation and oversight of a used oil management program is largely left to individual states, provided the state regulations are at least as strict as the federal used oil standards. Compliance and enforcement varies widely, with California (through CalRecycle) leading the way with state initiatives, which go well beyond Federal guidelines.'
        },
      ],
    },
    {
      country: 'China',
     details: [
        {
          name: 'Generation',
          list: [
            {
              text: 'Generators are responsible for environmental release cleanup.',
            },
            {
              text: 'Information or testing is required to ensure that the contaminants are under an acceptable limit.',
            }

          ],
        },
        {
          name: 'Classification (Special Waste)',
          list: [
            {
              text: 'Used oil is classified into on-specification and off-specification used oil for using it as a fuel. On-specification used oil has an arsenic concentration of up to 5 parts per million (ppm), cadmium up to 2 ppm, chromium up to 10 ppm, lead up to 100 ppm, total halogens up to 4,000 ppm, and a minimum flash point of 100°F. Used oil is classified as off-specification if it does not meet the criteria mentioned above. ',
            },
            {
              text: 'However, if the total halogen concentration goes beyond 1,000 ppm, used oil is classified as a hazardous waste. In case of hazardous waste, used oil must be disposed of per criteria laid out under 40 CFR 260 through 266, 268, 270, and 124. In case of non-hazardous solid waste, it must comply with regulations included under 40 CFR 239 through 259.',
            },
            {
              text: 'Used oil contaminated with PCBs',
              listDetails: [
                'Used oil with PCB concentrations ≥ 50 ppm is regulated for disposal under the Toxic Substances Control Act (TSCA).',
                'Used oil with lower PCB concentrations (≥ 2 ppm and < 50 ppm) may be burned as a fuel, subject to restrictions listed in 40 CFR §761.20(e), 40 CFR part 279, and any applicable state and local laws.',
                'Used oil with < 2 ppm may be managed as used oil.',
                'TSCA requirements may not be avoided through dilution.',
                'Contaminated oil must be disposed of in accordance with PCB regulations 40 CFR §761.79.',
              ]
            },
          ],
        },
        {
          name: 'Prohibitions',
          list: [
            {
              text: 'Used oil as a dust suppressant (effectively)',
              listDetails: [
                'The regulations allow a state to petition the EPA for an exception; however, no states have been granted this permission.',
                'Surface impoundments',
                'Off-specification used oil fuel may only be burned for energy recovery in particular units'
              ]
            },
          ],
        },
        {
          name: 'Collections',
          list: [
            {
              text: 'Information or testing required to rebut the hazardous waste mixing presumption',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
          ],
        },
        {
          name: ' Transportation and Storage',
          list: [
            {
              text: 'Minimum storage tank and container requirements:',
              listDetails: [
                'Must be in good condition',
                'Must be labeled “Used Oil”'
              ]
            },
            {
              text: 'Generators, transporters, processors/re-refiners, and burners are also subject to Spill Prevention, Control, and Countermeasures (40 CFR part 112).',
            },
            {
              text: 'Storage in underground tanks is regulated under RCRA Subtitle I, 40 CFR 280.',
            },

            {
              text: 'Transportation & Transfer Facilities:',
              listDetails: [
                'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
                'Secondary containment required (not for transporters)',
                'Responsible for environmental release cleanup',
                'EPA Identification Number and notification required',
              ]
            },
            {
              text: 'Acceptance and delivery records (three years) must be kept.',
            },
            {
              text: 'Information or testing is needed to rebut the hazardous waste mixing presumption (keep records for three years).',
            },
            {
              text: 'Persons transporting used oil that meets the definition of hazardous material in 49 CFR 171.8 must comply with all applicable USDOT regulations in 49 CFR parts 171 through 180.',
            },



          ],
        },
        {
          name: ' Disposal – Re-refining​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Required to keep acceptance and delivery records (three years)',
            },
            {
              text:'Required to create and follow an analysis plan that details how the hazardous waste mixing presumption will be rebutted',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'A contingency plan and emergency procedures (same as Parts 264 & 265 subpart D)',
            },
            {
              text:'Written report on biennial basis',
            },
          ],
        },
        {
          name: 'Disposal – Fuel​​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Must keep acceptance records (three years)',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'Off-specification used oil fuel may be burned for energy recovery in only the following devices:',
            },
            {
              text:'Industrial furnaces identified in §260.10',
            },
            {
              text:'Boilers as defined in §260.10 and identified in §279.12',
            },
            {
              text:'Hazardous waste incinerators subject to regulation under the Subpart O of parts 264 or 265',
            },
          ],
        },
        {
          name: ' Regulations on Imports or Exports of Used Oil​',
          list: [
            {
              text: 'Transporters who import or export used oil are subject to the requirements of 40 CFR Subpart E from the time the used oil enters until the time it exits the United States.',
            },
            {
              text:'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
            },

          ],
        },
        {
          name: 'Regulatory Enforcement',
          olList: [
            {
              text: 'Responsible Agencies',
              listDetails:[
                'EPA',
                'State, county, and/or municipal governments'
              ]
            },
            {
              text: ' Enforcement Mechanisms',
              listDetails:[
                'Federally required record-keeping',
                'EPA notifications and identification numbers',
                'State required reporting, registration, and/or notification',
                'Federal EPA identification numbers',
              ]
            },
            {
              text: 'Effectiveness of Regulations Enforcement',
              listDetails:[
                'The federal regulations and standards dictate the minimum standards of used oil management programs in the individual states',
                'Individual states’ oversight is far more effective and differs widely between states',
              ]
            },

          ],
        },
        {
          name: 'Key Influencers',
          tabs: [
            {
              title: 'Public Sector',
              tabsList:[
                'EPA',
                'DOE',
                'State, county, and municipal governments',
                'Executive Orders',
              ]
            },
            {
              title: 'Private Sector',
              tabsList:[
                'ExxonMobil',
                'Chevron',
                'Shell',
                'Valvoline',
                'ConocoPhillips',
                'BP',
                'Safety-Kleen',
              ]
            },

          ]
        },
        {
          name: 'Key Influencers',
          desc : 'Federal used oil regulations and standards provide a general framework for used oil handlers to manage used oil operations and minimize the potential for environmental impact. However, the system largely relies on self-regulation and enforcement at the state and local levels. The implementation and oversight of a used oil management program is largely left to individual states, provided the state regulations are at least as strict as the federal used oil standards. Compliance and enforcement varies widely, with California (through CalRecycle) leading the way with state initiatives, which go well beyond Federal guidelines.'
        },
      ],
    },
    {
      country: 'Russia',
     details: [
        {
          name: 'Generation',
          list: [
            {
              text: 'Generators are responsible for environmental release cleanup.',
            },
            {
              text: 'Information or testing is required to ensure that the contaminants are under an acceptable limit.',
            }

          ],
        },
        {
          name: 'Classification (Special Waste)',
          list: [
            {
              text: 'Used oil is classified into on-specification and off-specification used oil for using it as a fuel. On-specification used oil has an arsenic concentration of up to 5 parts per million (ppm), cadmium up to 2 ppm, chromium up to 10 ppm, lead up to 100 ppm, total halogens up to 4,000 ppm, and a minimum flash point of 100°F. Used oil is classified as off-specification if it does not meet the criteria mentioned above. ',
            },
            {
              text: 'However, if the total halogen concentration goes beyond 1,000 ppm, used oil is classified as a hazardous waste. In case of hazardous waste, used oil must be disposed of per criteria laid out under 40 CFR 260 through 266, 268, 270, and 124. In case of non-hazardous solid waste, it must comply with regulations included under 40 CFR 239 through 259.',
            },
            {
              text: 'Used oil contaminated with PCBs',
              listDetails: [
                'Used oil with PCB concentrations ≥ 50 ppm is regulated for disposal under the Toxic Substances Control Act (TSCA).',
                'Used oil with lower PCB concentrations (≥ 2 ppm and < 50 ppm) may be burned as a fuel, subject to restrictions listed in 40 CFR §761.20(e), 40 CFR part 279, and any applicable state and local laws.',
                'Used oil with < 2 ppm may be managed as used oil.',
                'TSCA requirements may not be avoided through dilution.',
                'Contaminated oil must be disposed of in accordance with PCB regulations 40 CFR §761.79.',
              ]
            },
          ],
        },
        {
          name: 'Prohibitions',
          list: [
            {
              text: 'Used oil as a dust suppressant (effectively)',
              listDetails: [
                'The regulations allow a state to petition the EPA for an exception; however, no states have been granted this permission.',
                'Surface impoundments',
                'Off-specification used oil fuel may only be burned for energy recovery in particular units'
              ]
            },
          ],
        },
        {
          name: 'Collections',
          list: [
            {
              text: 'Information or testing required to rebut the hazardous waste mixing presumption',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
          ],
        },
        {
          name: ' Transportation and Storage',
          list: [
            {
              text: 'Minimum storage tank and container requirements:',
              listDetails: [
                'Must be in good condition',
                'Must be labeled “Used Oil”'
              ]
            },
            {
              text: 'Generators, transporters, processors/re-refiners, and burners are also subject to Spill Prevention, Control, and Countermeasures (40 CFR part 112).',
            },
            {
              text: 'Storage in underground tanks is regulated under RCRA Subtitle I, 40 CFR 280.',
            },

            {
              text: 'Transportation & Transfer Facilities:',
              listDetails: [
                'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
                'Secondary containment required (not for transporters)',
                'Responsible for environmental release cleanup',
                'EPA Identification Number and notification required',
              ]
            },
            {
              text: 'Acceptance and delivery records (three years) must be kept.',
            },
            {
              text: 'Information or testing is needed to rebut the hazardous waste mixing presumption (keep records for three years).',
            },
            {
              text: 'Persons transporting used oil that meets the definition of hazardous material in 49 CFR 171.8 must comply with all applicable USDOT regulations in 49 CFR parts 171 through 180.',
            },



          ],
        },
        {
          name: ' Disposal – Re-refining​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Required to keep acceptance and delivery records (three years)',
            },
            {
              text:'Required to create and follow an analysis plan that details how the hazardous waste mixing presumption will be rebutted',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'A contingency plan and emergency procedures (same as Parts 264 & 265 subpart D)',
            },
            {
              text:'Written report on biennial basis',
            },
          ],
        },
        {
          name: 'Disposal – Fuel​​',
          list: [
            {
              text: 'Secondary containment required',
            },
            {
              text:'Responsible for environmental release cleanup',
            },
            {
              text:'Required EPA Identification Number and notification',
            },
            {
              text:'Must keep acceptance records (three years)',
            },
            {
              text:'Information or testing needed to rebut the hazardous waste mixing presumption (keep records for three years)',
            },
            {
              text:'Off-specification used oil fuel may be burned for energy recovery in only the following devices:',
            },
            {
              text:'Industrial furnaces identified in §260.10',
            },
            {
              text:'Boilers as defined in §260.10 and identified in §279.12',
            },
            {
              text:'Hazardous waste incinerators subject to regulation under the Subpart O of parts 264 or 265',
            },
          ],
        },
        {
          name: ' Regulations on Imports or Exports of Used Oil​',
          list: [
            {
              text: 'Transporters who import or export used oil are subject to the requirements of 40 CFR Subpart E from the time the used oil enters until the time it exits the United States.',
            },
            {
              text:'Anyone transporting used oil, except under the self-transport provisions of 279.24(a), must also comply with 40 CFR Subpart E.',
            },

          ],
        },
        {
          name: 'Regulatory Enforcement',
          olList: [
            {
              text: 'Responsible Agencies',
              listDetails:[
                'EPA',
                'State, county, and/or municipal governments'
              ]
            },
            {
              text: ' Enforcement Mechanisms',
              listDetails:[
                'Federally required record-keeping',
                'EPA notifications and identification numbers',
                'State required reporting, registration, and/or notification',
                'Federal EPA identification numbers',
              ]
            },
            {
              text: 'Effectiveness of Regulations Enforcement',
              listDetails:[
                'The federal regulations and standards dictate the minimum standards of used oil management programs in the individual states',
                'Individual states’ oversight is far more effective and differs widely between states',
              ]
            },

          ],
        },
        {
          name: 'Key Influencers',
          tabs: [
            {
              title: 'Public Sector',
              tabsList:[
                'EPA',
                'DOE',
                'State, county, and municipal governments',
                'Executive Orders',
              ]
            },
            {
              title: 'Private Sector',
              tabsList:[
                'ExxonMobil',
                'Chevron',
                'Shell',
                'Valvoline',
                'ConocoPhillips',
                'BP',
                'Safety-Kleen',
              ]
            },

          ]
        },
        {
          name: 'Key Influencers',
          desc : 'Federal used oil regulations and standards provide a general framework for used oil handlers to manage used oil operations and minimize the potential for environmental impact. However, the system largely relies on self-regulation and enforcement at the state and local levels. The implementation and oversight of a used oil management program is largely left to individual states, provided the state regulations are at least as strict as the federal used oil standards. Compliance and enforcement varies widely, with California (through CalRecycle) leading the way with state initiatives, which go well beyond Federal guidelines.'
        },
      ],
    },
  ];
  public capacityData: any[] = [
    {
      country: 'Argentina',
      owner: 'Lubrisider SA',
      location: 'Buenos Aires',
      ktonsYear1: 10,
      ktonsYear2: null,
      GroupI: null,
      GroupII: null,
      GroupIII: null,
      vgoMdo: null,
      reganTransform: 9,
      comments: '',
    },
    {
      country: 'Brazil',
      owner: 'Lubrasil',
      location: 'Piracicaba',
      ktonsYear1: 50,
      ktonsYear2: 31.5,
      GroupI: 31.5,
      GroupII: null,
      GroupIII: null,
      vgoMdo: null,
      reganTransform: null,
      comments: '',
    },
    {
      country: 'Brazil',
      owner: 'Petrolub',
      location: 'Sete Lagoas',
      ktonsYear1: 50,
      ktonsYear2: 30,
      GroupI: 30,
      GroupII: null,
      GroupIII: null,
      vgoMdo: null,
      reganTransform: null,
      comments: '',
    },
    {
      country: 'Argentina',
      owner: 'IASA',
      location: 'Buenos Aires',
      ktonsYear1: 1,
      ktonsYear2: 1,
      GroupI: null,
      GroupII: 1,
      GroupIII: 1,
      vgoMdo: null,
      reganTransform: null,
      comments: '',
    },
    {
      country: 'Mexico',
      owner: 'Bravo Energy',
      location: 'Querétaro',
      ktonsYear1: 51.7,
      ktonsYear2: null,
      GroupI: null,
      GroupII: null,
      GroupIII: null,
      vgoMdo: 33.6,
      reganTransform: null,
      comments: 'Appears to be largely an RFO plant',
    },
    {
      country: 'Chile',
      owner: 'Petroquimica Futuroil',
      location: 'Lampa, Chile	',
      ktonsYear1: 3.2,
      ktonsYear2: 2.1,
      GroupI: 2.1,
      GroupII: null,
      GroupIII: null,
      vgoMdo: 33.6,
      reganTransform: null,
      comments: '',
    },
    {
      country: 'Puerto Rico',
      owner: 'Olein Recovery	',
      location: 'Yabucoa',
      ktonsYear1: 34,
      ktonsYear2: 23.1,
      GroupI: null,
      GroupII: 23.1,
      GroupIII: 23.1,
      vgoMdo: 33.6,
      reganTransform: null,
      comments: 'Damaged by hurricane in late 2017, but operations restored',
    },
    {
      country: 'OPERATING RRFs PRODUCING BASE OIL',
      owner: 'Olein Recovery	',
      location: 'Yabucoa',
      ktonsYear1: 131,
      ktonsYear2: 439,
      GroupI: null,
      GroupII: null,
      GroupIII: null,
      vgoMdo: null,
      reganTransform: null,
      comments: '',
    },
    {
      country: 'TOTAL LATIN AMERICA & CARIBBEAN',
      owner: '',
      location: '',
      ktonsYear1: 640,
      ktonsYear2: 297	,
      GroupI: 124.7	,
      GroupII: 175.3,
      GroupIII: 175.3,
      vgoMdo: 60.3,
      reganTransform: 9,
      comments: '',
    },
    {
      country: 'TOTAL RRFs PRODUCING BASE OIL	',
      owner: '',
      location: '',
      ktonsYear1: 134.3,
      ktonsYear2: 449.2,
      GroupI: null,
      GroupII: null,
      GroupIII: null,
      vgoMdo: null,
      reganTransform: null,
      comments: '',
    },
  ];
  public materialBalanceData: any[] = [
    {
      id: 1,
      country: 'USA',
      region: 'North America',
      generation: {
        lubricantLost: {
          label: 'Lubricant Lost',
          value: 4300,
        },
        usedOilGenerated: {
          label: 'Used Oil Generated',
          value: 5600,
        },
      },
      collection: {
        collected: {
          label: 'Collected',
          value: 3300,
        },
        notCollected: {
          label: 'Not Collected',
          value: 5000,
        },
      },
      disposal: {
        refined: {
          label: 'Re-Refined-a',
          value: 7300,
        },
        fuel: {
          label: 'Fuel',
          value: 10600,
        },
        others: {
          label: 'All others-b',
          value: 1000,
        },
      },
      refining: {
        basestock: {
          label: 'Basestock',
          value: 2000,
        },
        others: {
          label: 'All other',
          value: 6600,
        },
      },
    },
    {
      id: 2,
      country: 'UK',
      region: 'Europe',
      generation: {
        lubricantLost: {
          label: 'Lubricant Lost',
          value: 4300,
        },
        usedOilGenerated: {
          label: 'Used Oil Generated',
          value: 5600,
        },
      },
      collection: {
        collected: {
          label: 'Collected',
          value: 4300,
        },
        notCollected: {
          label: 'Not Collected',
          value: 5600,
        },
      },
      disposal: {
        refined: {
          label: 'Re-Refined-a',
          value: 4300,
        },
        fuel: {
          label: 'Fuel',
          value: 5600,
        },
        others: {
          label: 'All others-b',
          value: 500,
        },
      },
      refining: {
        basestock: {
          label: 'Basestock',
          value: 4300,
        },
        others: {
          label: 'All other',
          value: 3600,
        },
      },
    },
    {
      id: 3,
      country: 'India',
      region: 'Middle East and Africa',
      generation: {
        lubricantLost: {
          label: 'Lubricant Lost',
          value: 4300,
        },
        usedOilGenerated: {
          label: 'Used Oil Generated',
          value: 5600,
        },
      },
      collection: {
        collected: {
          label: 'Collected',
          value: 4300,
        },
        notCollected: {
          label: 'Not Collected',
          value: 5600,
        },
      },
      disposal: {
        refined: {
          label: 'Re-Refined-a',
          value: 4300,
        },
        fuel: {
          label: 'Fuel',
          value: 5600,
        },
        others: {
          label: 'All others-b',
          value: 500,
        },
      },
      refining: {
        basestock: {
          label: 'Basestock',
          value: 4300,
        },
        others: {
          label: 'All other',
          value: 3600,
        },
      },
    },
    {
      id: 4,
      country: 'Indonesia',
      region: 'APAC',
      generation: {
        lubricantLost: {
          label: 'Lubricant Lost',
          value: 4300,
        },
        usedOilGenerated: {
          label: 'Used Oil Generated',
          value: 5600,
        },
      },
      collection: {
        collected: {
          label: 'Collected',
          value: 4300,
        },
        notCollected: {
          label: 'Not Collected',
          value: 5600,
        },
      },
      disposal: {
        refined: {
          label: 'Re-Refined-a',
          value: 4300,
        },
        fuel: {
          label: 'Fuel',
          value: 5600,
        },
        others: {
          label: 'All others-b',
          value: 500,
        },
      },
      refining: {
        basestock: {
          label: 'Basestock',
          value: 4300,
        },
        others: {
          label: 'All other',
          value: 3600,
        },
      },
    },
    {
      id: 5,
      country: 'Brazil',
      region: 'South America',
      generation: {
        lubricantLost: {
          label: 'Lubricant Lost',
          value: 4300,
        },
        usedOilGenerated: {
          label: 'Used Oil Generated',
          value: 5600,
        },
      },
      collection: {
        collected: {
          label: 'Collected',
          value: 4300,
        },
        notCollected: {
          label: 'Not Collected',
          value: 5600,
        },
      },
      disposal: {
        refined: {
          label: 'Re-Refined-a',
          value: 4300,
        },
        fuel: {
          label: 'Fuel',
          value: 5600,
        },
        others: {
          label: 'All others-b',
          value: 500,
        },
      },
      refining: {
        basestock: {
          label: 'Basestock',
          value: 4300,
        },
        others: {
          label: 'All other',
          value: 3600,
        },
      },
    },
  ];

  getMapTypes(): MapSetting[] {
    return mapTypes;
  }
  getMarkerUrl(): string {
    return markerUrl;
  }

  getMarkers(): Marker[] {
    return markers;
  }

  constructor() {}
}
