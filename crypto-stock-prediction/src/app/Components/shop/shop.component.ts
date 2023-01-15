import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initForm();
    this.fetchRouteParams();
    this.getScoreFullPrice();
  }

  initForm() {}

  fetchRouteParams() {}

  getScoreFullPrice() {}

  requestPayment() {}

  updatePrice() {}
}
