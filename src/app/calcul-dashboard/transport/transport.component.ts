import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
  selectedTransportOption: string;

  constructor(private formService: FormService) { }

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
    
    this.formService.submitTransportData({ option: this.selectedTransportOption }, apiUrl).subscribe(
      (transportResponse) => {
        console.log('Transport Response:', transportResponse);
      },
      (transportError) => {
        console.error('Transport Error:', transportError);
      }
    );
  }
}