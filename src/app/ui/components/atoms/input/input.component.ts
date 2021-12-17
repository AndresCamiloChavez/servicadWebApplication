import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'input-srv',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() titleBoxInput = "";

  constructor() {
  }

  ngOnInit(): void {
  }

}
