// app/routes/manage-payment.js
import Route from '@ember/routing/route';

export default class ManagePaymentRoute extends Route {
  model() {
    return {
      payments: [
        {
          id: 1,
          amount: 100,
          date: '2023-06-22',
          status: 'Paid',
        },
        {
          id: 2,
          amount: 150,
          date: '2023-06-23',
          status: 'Pending',
        },
      ],
    };
  }
}
