import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | modal', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');

    await click('[data-test-modal-launch]');
    assert.dom('[data-test-modal-body]').hasText('xyz');

    await click('[data-test-modal-close]');
    assert.dom('[data-test-modal]').doesNotHaveStyle({ display: 'block' }, 'Modal appears to be closed but "modal-backdrop" is outside of qunit container');
  });
});
