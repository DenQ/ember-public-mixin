//import Ember from 'ember';
//
//export default Ember.Mixin.create({
//
//  signal: function(methodName, ...etc) {
//    var method = this.get('public.' + methodName);
//    if (Ember.isEmpty(method) === true) {
//      Ember.warn('Method or property not found');
//      return null;
//    }
//    if (Ember.typeOf(method) === 'function') {
//      method = method.bind(this);
//      return method(etc);
//    } else {
//      return method;
//    }
//  }
//
//});
