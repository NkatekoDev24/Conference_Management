import { module, test } from 'qunit';
import { setupTest } from 'conference-management/tests/helpers';

module('Unit | Model | conference', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('conference', {});
    assert.ok(model);
  });
});
