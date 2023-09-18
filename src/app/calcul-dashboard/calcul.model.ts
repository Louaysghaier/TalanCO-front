import { CUSTOM_ELEMENTS_SCHEMA, NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalcullayoutComponent } from './calcullayout/calcullayout.component';
import { WorkComponent } from './work/work.component';
import { CommonModule } from '@angular/common';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { TransportComponent } from './transport/transport.component';
import { CalnavComponent } from './calnav/calnav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { FooterComponent } from '../shared/footer/footer.component';

const calrouters: Routes = [
    {path:'calcul',
  component:CalcullayoutComponent,
  children: [
     // 1st Route
    { path: 'work',  component: WorkComponent, },
    // 3rd Route
    { path: 'transport',  component: TransportComponent, },
    // 4th Route
    { path: 'alimentation',  component: AlimentationComponent, },

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
            CalcullayoutComponent,
            WorkComponent,
            AlimentationComponent,
            TransportComponent,
            
        ],
        providers: [],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [RouterModule]

  })
  export class calculmodel {}