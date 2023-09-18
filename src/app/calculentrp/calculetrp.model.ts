import { CUSTOM_ELEMENTS_SCHEMA, NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { FooterComponent } from '../shared/footer/footer.component';
import { EntrptranspComponent } from './entrptransp/entrptransp.component';
import { ResourcesComponent } from './resources/resources.component';
import { CalculentrplayoutComponent } from './calculentrplayout/calculentrplayout.component';

const calrouters: Routes = [
    {path:'calculentrp',
  component: CalculentrplayoutComponent,
  children: [
     // 1st Route
    { path: 'resource',  component: ResourcesComponent, },
    // 3rd Route
    { path: 'transport',  component: EntrptranspComponent, },
    // 4th Route

    // 5th Route
    { path: 'footer',  component:FooterComponent, },

  
  ]},
    
  ];


  @NgModule({
    imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        MatStepperModule,
        CommonModule,
        RouterModule.forChild(calrouters)],
        declarations:[
           EntrptranspComponent,
           ResourcesComponent,
            CalculentrplayoutComponent,
        ],
        providers: [],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [RouterModule]

  })
  export class calculentrpmodel {}