// app/routes/manage-conferences.js
import Route from '@ember/routing/route';

export default class ManageConferencesRoute extends Route {
  async model() {
    // You can fetch the conferences data from your API or use a test data array
    return [
      {
        id: 1,
        name: 'Conference 1',
        date: '2023-07-10',
        location: 'City A',
      },
      {
        id: 2,
        name: 'Conference 2',
        date: '2023-08-15',
        location: 'City B',
      },
    ];
  }

  setupController(controller, model) {
    controller.set('conferences', model);
  }
}
