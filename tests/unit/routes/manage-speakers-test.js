import { module, test } from 'qunit';
import { setupTest } from 'conference-management/tests/helpers';

module('Unit | Route | manage-speakers', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:manage-speakers');
    assert.ok(route);
  });
});
