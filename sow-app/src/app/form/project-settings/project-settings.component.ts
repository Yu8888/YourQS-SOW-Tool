import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-project-settings',
  templateUrl: './project-settings.component.html',
  styleUrls: ['./project-settings.component.scss']
})
export class ProjectSettingsComponent{

    projectSettings = new FormGroup({
        address: new FormControl(''),
        client: new FormControl(''),
        projectDescription: new FormControl(''),

        peoplePricing: new FormGroup({
            nCarpenters: new FormControl(''),
            eProjectDuration: new FormControl(''), // Estimated project duration
            bContingency: new FormControl(''), // Builders contingency
            dContingency: new FormControl(''), // Drainage contingency
            pContingency: new FormControl(''), // Plumbing contingency
            eContingency: new FormControl(''), // Electrical contingency
            cContingency: new FormControl('') // Client contingency allowance
        }),

        siteArrangement: new FormGroup({
            siteAccess: new FormControl(''), // Site Access
            spaceStorage: new FormControl(''), // Space for material storage
            scaffoldAComment: new FormControl(''), // Scaffold access comment
            sWrapping: new FormControl(''), // Scaffold Wrapping
            livingArrange: new FormControl(''), // Living Arrangements
            addHours: new FormControl(''), // Allow additonal hours due to site
            seasprayzone: new FormControl('')  // Is Sea Spray Zone?
        }),

        safetyRequirements: new FormGroup({
            siteSecurityFencing: new FormControl(''), // Site Security Fencing
            fallInProtection: new FormControl(''), // Fall In Protection
            toiletHireRequired: new FormControl(''), // Toilet Hire Required
            vehicleCrossingProtect: new FormControl('') // Vehicle Crossing Protection
        }),

        allowancesInsurances: new FormGroup({
            contractorsRiskFee: new FormControl(''),
            buildingGuaranteeFee: new FormControl('')
        }),

        professionalServices: new FormGroup({
            drawings: new FormControl(''),
            geotechnical: new FormControl(''),
            engineering: new FormControl(''),
            landSurveyor: new FormControl(''),
            councilFees: new FormControl(''),
            other: new FormControl('')
        }),

        interior: new FormGroup({
            material: new FormGroup({
                doors: new FormControl(''),
                skirting: new FormControl(''),
                scotia: new FormControl(''), // Scotia/Cornice
                architrave: new FormControl('')
            }),

            style: new FormGroup({
                doors: new FormControl(''),
                skirting: new FormControl(''),
                scotia: new FormControl(''), // Scotia/Cornice
                architrave: new FormControl('')
            })
        }),

        exterior: new FormGroup({
            material: new FormGroup({
                primaryCladding: new FormControl(''),
                secondaryCladding: new FormControl(''),
                joineryType: new FormControl(''),
                roof: new FormControl('')
            }),

            type: new FormGroup({
                primaryCladding: new FormControl(''),
                secondaryCladding: new FormControl(''),
                joineryType: new FormControl(''),
                roof: new FormControl('')
            })
        }),

        otherComments: new FormControl('')
    })
}
