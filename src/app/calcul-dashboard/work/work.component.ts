import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  input1: number = 0;
  input2: number = 0;
  input3: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  @Output() workDataEmitter = new EventEmitter<any>();
  emitWorkData() {
    const workData = {
      a: this.input1,
      b: this.input2,
      c: this.input3
    };
    this.workDataEmitter.emit(workData);
  }
  submitWorkData() {
    // Perform form validation if needed

    // Trigger the emission of work data
    this.emitWorkData();
  }
}
