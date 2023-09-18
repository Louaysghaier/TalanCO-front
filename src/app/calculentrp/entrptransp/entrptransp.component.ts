import { Component, OnInit } from '@angular/core';
import { FormentrpService } from '../formentrp.service';
@Component({
  selector: 'app-entrptransp',
  templateUrl: './entrptransp.component.html',
  styleUrls: ['./entrptransp.component.css']
})
export class EntrptranspComponent implements OnInit {

  selectedTransportOption: string;

  constructor(private FormentrpService: FormentrpService) { }

  ngOnInit(): void {
  }

  submitTransportData() {
    let apiUrl = '';

    if (this.selectedTransportOption === 'option1') {
      apiUrl = 'http://localhost:8081/api/transport/sum_carbo_tP';
    } else if (this.selectedTransportOption === 'option2') {
      apiUrl = 'http://localhost:8081/api/transport/sum_carbo_tvt';
    } else if (this.selectedTransportOption === 'option3') {
      apiUrl = 'http://localhost:8081/api/transport/sum_carbo_tP';
    }

    this.FormentrpService.submitTransportData({ option: this.selectedTransportOption }, apiUrl).subscribe(
      (transportResponse) => {
        console.log('Transport Response:', transportResponse);
      },
      (transportError) => {
        console.error('Transport Error:', transportError);
      }
    );
  }

}
