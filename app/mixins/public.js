import Ember from 'ember';

export default Ember.Mixin.create({

  init: function (...etc) {
    this._super(etc);
    this.SharedPublic();
  },

  signal: function (methodName, ...etc) {
    Ember.deprecate('This method deprecated. Usage method Signal(...)', false);
    var method = this.get('public.' + methodName);
    if (Ember.isEmpty(method) === true) {
      Ember.warn('Method or property not found');
      return null;
    }
    if (Ember.typeOf(method) === 'function') {
      method = method.bind(this);
      return method(etc);
    } else {
      return method;
    }
  },

  Signal: function (sectionName, methodName, ...params) {
    var method = this.get(sectionName + '.' + methodName);
    if (Ember.isEmpty(method) === true) {
      Ember.warn('Method or property not found');
      return null;
    }
    if (Ember.typeOf(method) === 'function') {
      return method.apply(this, params);
    } else {
      return method;
    }
  },

  SharedPublic: function () {
    var listeners = this.get('public');
    var key, val;
    for (key in listeners) {
      val = listeners[key];
      this.set(key, val);
    }
  }

});
