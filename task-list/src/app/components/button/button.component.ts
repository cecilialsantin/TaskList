import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "";
  @Input() color: string = "";

  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
