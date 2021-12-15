import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'button-srv',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() titleButton = "";

  constructor() { }

  ngOnInit(): void {
  }

}
