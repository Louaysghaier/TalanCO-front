import { Component, OnInit } from '@angular/core';
import { ResourceData, TransportData } from '../formentrpdata.model';
import { FormentrpService } from '../formentrp.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-calculentrplayout',
  templateUrl: './calculentrplayout.component.html',
  styleUrls: ['./calculentrplayout.component.css']
})
export class CalculentrplayoutComponent implements OnInit {

  constructor(private FormentrpService: FormentrpService,private router: Router) { }

  ngOnInit(): void {
  }
  transportData =new TransportData(0,0,0);
selectedTransportOption: string; 
ResourceData: ResourceData = new ResourceData(0, 0, 0,0,0);

onTransportDataEmitted(transportData: any) {
  this.transportData = transportData;
}
onresourcesDataEmitted(ResourceData: any) {
  console.log("ResourceData",ResourceData);
  this.ResourceData = ResourceData;
}

submitForm() {

  this.FormentrpService.submitresourcesData(this.ResourceData).subscribe(
    (ResourceDataResponse) => {
      console.log('ResourceData Response:', ResourceDataResponse);
    },
    (ResourceDataerror) => {
      console.error('resource Error:', ResourceDataerror);
    }
  );
  this.FormentrpService.sumTotal().subscribe();
  this.router.navigate(['/user_dashboard/monprofil']); 
}


}
