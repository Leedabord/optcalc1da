import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  foods: any[] = [
    { name: 'Pizza', rating: 'Excellent' },
    { name: 'Burritos', rating: 'Great' },
    { name: 'French fries', rating: 'Pretty good' },
  ];

  public buysell = [ { value: 1, viewValue: "Buy" },
              { value: -1, viewValue: "Sell" }  ];
  public dbcr = [ { value: -1, viewValue: "cr" },
              { value: 1, viewValue: "db" }  ];
  public putcall = [ { value: 1, viewValue: "Call" },
              { value: -1, viewValue: "Put" }  ];  
  public pos = { sym: "sym", size: 8,  cost: 1.25, dbcr: 1 };

  public optLegs = [ 
    {bs: 1, qty: 1, exp: "", strike: 50, cp: 1 },
    {bs: -1, qty: 1, exp: "", strike: 45, cp: 1 },
    {bs: 1, qty: 1, exp: "", strike: 33, cp: -1 },
    {bs: -1, qty: 1, exp: "", strike: 36, cp: -1 },
  ];

  public plgrid = [
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0},
    { mark: 0, w0: [0,0,0,0], sum1: 0, sum2: 0, sum3: 0}
  ];

  public tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  public color: string;

  public availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  constructor(
    private httpC: HttpClient, 
    private formB: FormBuilder
    ) {  

    }

  ngOnInit() { 
  this.tempfn();
}

tempfn() { 
  var ii = 0, jj = 0;
  var minstrike = 9999;
  for (ii = 0; ii < 4; ii++) {
    if (this.optLegs[ii].qty > 0) {
      minstrike = Math.min(minstrike, this.optLegs[ii].strike)
    }
  }

  for (ii = 0; ii < this.plgrid.length; ii++) {
    this.plgrid[ii].mark = minstrike + ii - 5;
    this.plgrid[ii].sum1 = 0;
    for (jj = 0; jj < 4; jj++) {
      if (this.optLegs[jj].qty > 0) {
        this.plgrid[ii].w0[jj] = (this.plgrid[ii].mark - this.optLegs[jj].strike) * this.optLegs[jj].cp * this.optLegs[jj].qty;

        if (this.plgrid[ii].w0[jj] < 0) {
          this.plgrid[ii].w0[jj] = 0;
        }

          this.plgrid[ii].w0[jj] = this.plgrid[ii].w0[jj] * this.optLegs[jj].bs;
  
      }
      else {
        this.plgrid[ii].w0[jj] = 0;
      }
      this.plgrid[ii].sum1 += this.plgrid[ii].w0[jj];
      this.plgrid[ii].sum2 = this.plgrid[ii].sum1 - (this.pos.cost * this.pos.dbcr);
      this.plgrid[ii].sum3 = this.plgrid[ii].sum2 * this.pos.size * 100;
    }
  }
  
} // end tempfn()

}
