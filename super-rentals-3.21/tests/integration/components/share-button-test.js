import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service'

class MockRouterService extends Service{
  get currentURL(){
    return '/foo/bar?baz=true#some-section'
  }
}

module('Integration | Component | share-button', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:router', MockRouterService);

    this.tweetParam = (param) => {
      let link = find('a')
      let url = new URL(link.href)
      return url.searchParams.get(param)
    }
  });

  test('basic usage', async function(assert) {
    await render(hbs`<ShareButton>Tweet this!</ShareButton>`);

    assert.dom('a').exists();
    assert.dom('a').hasAttribute('target', '_blank');
    assert.dom('a').hasAttribute('rel', 'external nofollow noopener noreferrer');

    assert.dom('a').hasAttribute('href', /^https:\/\/twitter\.com\/intent\/tweet/)
    assert.dom('a').hasClass('share');
    assert.dom('a').hasClass('button');
    assert.dom('a').containsText('Tweet this!');

    assert.equal(
      this.tweetParam('url'),
      new URL('/foo/bar?baz=true#some-section', window.location.origin)
    );
  });
});
