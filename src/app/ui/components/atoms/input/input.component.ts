import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  emailctrl = new FormControl("ejemplo@gmail.com", []);

  constructor() { }

  ngOnInit(): void {
  }

}
