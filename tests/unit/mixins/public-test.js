import Ember from 'ember';
import PublicMixin from '../../../mixins/public';
import { module, test } from 'qunit';

module('Unit | Mixin | public');

test('it works', function(assert) {
  var PublicObject = Ember.Object.extend(PublicMixin);
  var subject = PublicObject.create();
  assert.ok(subject);
});
