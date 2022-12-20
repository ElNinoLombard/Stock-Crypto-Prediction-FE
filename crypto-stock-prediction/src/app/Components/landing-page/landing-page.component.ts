import { Component, OnInit } from '@angular/core';

export interface TableData {
  content: string;
  className: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  tableContent: Array<TableData> = [
    {
      content: 'Invest in crypto currency with security and accuracy',
      className: 'td-one',
    },
    {
      content: 'Choose your crypto trading bot depending on your objectives',
      className: 'td-two',
    },
    {
      content: 'Get real time predictions in the crypto stock market',
      className: 'td-three',
    },
    {
      content: 'Help us build a decentralized network',
      className: 'td-four',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
