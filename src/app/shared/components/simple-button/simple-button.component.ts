import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss']
})
export class SimpleButtonComponent implements OnInit {

  @Input()
  public buttonText: string = 'Simple button';

  @Input()
  public buttonClass: string = '';

  @Output()
  public simpleButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.simpleButtonClicked.emit();
  }

}
