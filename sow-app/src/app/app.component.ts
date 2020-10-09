import { Component, Input, OnInit } from '@angular/core';
import { BusinessDefaultsComponent } from './form/business-defaults/business-defaults.component';
import { ProjectSettingsComponent } from './form/project-settings/project-settings.component';
import { ZoneComponent } from './zone/zone.component';
import { AppService } from './app.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'sow-app';
    zone = null;
    response;
    @Input() zoneComponent: ZoneComponent;
    @Input() businessDefaultsComponent: BusinessDefaultsComponent;
    @Input() projectSettingsComponent: ProjectSettingsComponent;

    constructor(private appService: AppService) {}

    ngOnInit() {
      this.appService.get()
        .subscribe(response => {
          this.response = response;
        });
    }

    submit() {
        // Zone
        this.zone = this.zoneComponent.zone;

        console.warn(this.zoneComponent.zone.get("description").value);
    }
    
}
