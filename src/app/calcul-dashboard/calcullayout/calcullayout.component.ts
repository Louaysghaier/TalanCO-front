import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { WorkData } from '../formdata.model';
import { AlimentationData } from '../formdata.model'; 
import { TransportData } from '../formdata.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-calcullayout',
  templateUrl: './calcullayout.component.html',
  styleUrls: ['./calcullayout.component.css']
})
export class CalcullayoutComponent implements OnInit {
  currentYear: number;

  constructor(private FormService:FormService,private router: Router) { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
  workData: WorkData = new WorkData(0, 0, 0);
  alimentationData: AlimentationData = new AlimentationData(false);

transportData =new TransportData(0,0,0);
selectedTransportOption: string; 

onWorkDataEmitted(workData: any) {
  this.workData = workData;
}

onAlimentationDataEmitted(alimentationData: any) {
  this.alimentationData = alimentationData;
}

onTransportDataEmitted(transportData: any) {
  this.transportData = transportData;
}


submitForm() {
  
  this.FormService.submitWorkData(this.workData).subscribe(
    (workResponse) => {
      console.log('Work Response:', workResponse);
    },
    (workError) => {
      console.error('Work Error:', workError);
    }
  );

  this.FormService.submitAlimentationData(this.alimentationData).subscribe(
    (alimentationResponse) => {
      console.log('Alimentation Response:', alimentationResponse);
    },
    (alimentationError) => {
      console.error('Alimentation Error:', alimentationError);
    }
  );
  
  this.FormService.sumTotal().subscribe();
  this.router.navigate(['/user_dashboard/monprofil']); 

}

}
