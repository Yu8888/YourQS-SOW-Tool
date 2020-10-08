import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-business-defaults',
  templateUrl: './business-defaults.component.html',
  styleUrls: ['./business-defaults.component.scss']
})
export class BusinessDefaultsComponent implements OnInit {

    businessDefaults = new FormGroup({
        companyName: new FormControl(''),
        yourName: new FormControl(''),
        // People and pricing
        peoplePricing: new FormGroup({
            markup: new FormControl(''),
            adminHours: new FormControl(''),
            supervisionHours: new FormControl(''),
            projectMHours: new FormControl(''),
            // CPH - cost per hour
            adminCPH: new FormControl(''),
            supervisionCPH: new FormControl(''),
            projectMCPH: new FormControl(''),
            buildingTCPH: new FormControl('')
        }),
        // Site Sign
        siteSign: new FormControl(''),
        // Sub Trades
        subTrades: new FormGroup({
            plasterboardLabourBy: new FormControl(''),
            plasterboardCeilingDefault: new FormControl(''),
            insulation: new FormControl(''),
            ceilingBattens: new FormControl('')
        }),
        // Job rates
        jobRates: new FormGroup({
            plumber: new FormControl(''),
            electrician: new FormControl(''),
            painter: new FormControl(''),
            drainlayer: new FormControl(''),
            roofer: new FormControl('')
        })
    });

  constructor() { }

  ngOnInit(): void {
  }

}
