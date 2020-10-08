import { Component, Input } from '@angular/core';
import { BusinessDefaultsComponent } from './form/business-defaults/business-defaults.component';
import { ProjectSettingsComponent } from './form/project-settings/project-settings.component';
import { ZoneComponent } from './zone/zone.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'sow-app';
    zone = null;
    @Input() zoneComponent: ZoneComponent;
    @Input() businessDefaultsComponent: BusinessDefaultsComponent;
    @Input() projectSettingsComponent: ProjectSettingsComponent;

    submit() {
        // Zone
        this.zone = this.zoneComponent.zone;

        console.warn(this.zoneComponent.zone.get("description").value);
    }
    
}
