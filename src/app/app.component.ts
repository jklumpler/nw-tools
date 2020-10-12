import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nw-tools';
  @Input() zax = 750;
  @Input() zenPrice = 100;
  @Input() sellPrice = 0;
  amountAd = 0;
  breakEvenAd = 0;
  profit = 0;
  profitPct = 0;

  calculate(): void {
    this.amountAd = this.zenPrice * this.zax;
    this.breakEvenAd = Math.ceil(this.amountAd / 0.9);
    this.profit = Math.floor(this.sellPrice * 0.9) - this.amountAd;
    this.profitPct = this.profit / this.amountAd * 100.0;
  }

  ngOnInit(): void {
    this.calculate();
  }

  onZenPriceChange(event: any): void {
    this.zenPrice = event.target.value;
    // console.log();
    this.calculate();
  }

  onZaxChange(event: any): void {
    this.zax = event.target.value;
    this.calculate();
  }

  onSellPriceChange(event: any): void {
    this.sellPrice = event.target.value;
    this.calculate();
  }
}
