import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component'
import { BusinessDefaultsComponent } from './form/business-defaults/business-defaults.component';
import { ProjectSettingsComponent } from './form/project-settings/project-settings.component';
import { ZoneComponent } from './zone/zone.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
    { path: '', redirectTo: "home", pathMatch: 'full' },
    { path: 'contact', component: ContactComponent },
    { path: 'project-list', component: ProjectListComponent},
    { path: 'home', component: HomeComponent },
    { path: 'project-list', component: ProjectListComponent},
    { path: 'businessDefaults', component: BusinessDefaultsComponent },
    { path: 'projectSettings', component: ProjectSettingsComponent },
    { path: 'zone', component: ZoneComponent },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
