import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-chart-sustainability-measures',
  templateUrl: './supplier-chart-sustainability-measures.component.html',
  styleUrls: ['./supplier-chart-sustainability-measures.component.scss'],
})
export class SupplierChartSustainabilityMeasuresComponent implements OnInit {
  @Input() chartData?: any;
  @Input() text?: string;
  public dataValues: any[] = [];
  ngOnInit(): void {
    this.chartData.map((item:any) => {
      this.dataValues.push(item.value)
    })
    console.log(this.dataValues)
  }
  customizeText(arg: any) {
    return `${arg.valueText} %`;
  }

  getText(item: any, text: any) {
    return `Parameter ${item.index + 1}`;
  }

  customizeTooltip = (arg: any) => ({
    text: this.getText(arg, arg.valueText),
  });

  customizeText1 = (arg: any) => this.getText(arg.item, arg.text);
}
