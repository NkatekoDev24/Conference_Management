// app/routes/schedule-sessions.js
import Route from '@ember/routing/route';

export default class ScheduleSessionsRoute extends Route {
  model() {
    return {
      sessions: [
        { title: 'Session 1', time: '9:00 AM - 10:00 AM' },
        { title: 'Session 2', time: '10:30 AM - 11:30 AM' },
        { title: 'Session 3', time: '1:00 PM - 2:00 PM' },
      ],
    };
  }
}
