import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  graviteeApiKey: '',
  appUrl: '',
};

@Injectable()
export class PaymentRequestService {
  private paymentRequestUrl =
    environment.apiUrl + '/commercial/payment-request';

  constructor(private http: HttpClient) {}

  requestPayment(token: string) {
    return this.http.get(`${this.paymentRequestUrl}/${token}`);
  }

  checkCodePromo(promoCode: string, token: string) {
    return this.http.get(
      `${this.paymentRequestUrl}/code-promo/${promoCode}/${token}`,
      {}
    );
  }
}
