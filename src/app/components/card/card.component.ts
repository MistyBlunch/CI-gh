import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  user = {
    name: 'Grace',
    lastname: 'Alvarado',
    nick: 'Misty Blunch',
  };

  constructor() {}

  ngOnInit(): void {}
}
