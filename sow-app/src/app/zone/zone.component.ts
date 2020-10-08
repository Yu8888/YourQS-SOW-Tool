import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent{

    @Input() app : AppComponent
    
    zone = new FormGroup({
        description: new FormControl(''),

        demolition: new FormControl(''),
        demolitionAllowances: new FormControl(''),

        carpentry: new FormControl(''),
        descriptionAllowances: new FormControl(''),

        plumbing: new FormControl(''),
        plumbingAllowances: new FormControl(''),

        electrical: new FormControl(''),
        electricalAllowances: new FormControl(''),

        cabinetry: new FormControl(''),
        cabinetryAllowances: new FormControl(''),

        tiling: new FormControl(''),
        tilingAllowances: new FormControl(''),

        decorating: new FormControl(''),
        decoratingAllowances: new FormControl(''),

        other: new FormControl(''),
        otherAllowances: new FormControl(''),
    })

    onSubmit() { // call the root app submit method
        this.app.submit()
    }
}
