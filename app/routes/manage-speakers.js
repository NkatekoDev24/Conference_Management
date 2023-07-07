import Route from '@ember/routing/route';

export default class ManageSpeakersRoute extends Route {
  model() {
    return {
      speakers: [
        {
          name: 'Speaker 1',
          bio: 'Bio 1',
          sessions: [{ title: 'Session 1' }, { title: 'Session 2' }],
        },
        {
          name: 'Speaker 2',
          bio: 'Bio 2',
          sessions: [{ title: 'Session 3' }, { title: 'Session 4' }],
        },
      ],
    };
  }
}
