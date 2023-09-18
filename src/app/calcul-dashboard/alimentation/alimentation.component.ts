import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alimentation',
  templateUrl: './alimentation.component.html',
  styleUrls: ['./alimentation.component.css']
})
export class AlimentationComponent implements OnInit {
  mangeAuSein: boolean = false;
  apportDuDehors: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  @Output() alimentationDataEmitter = new EventEmitter<any>();
  emitAlimentationData() {
    const alimentationData = {
      test: this.mangeAuSein || this.apportDuDehors // Set 'test' based on checkbox selection
    };
    this.alimentationDataEmitter.emit(alimentationData);
  }

}
