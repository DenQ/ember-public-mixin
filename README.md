# Ember-public-mixin

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`


## Usage

    `import Ember from 'ember'`
    `import PublicMixin from '../mixins/public'`
    
    IndexController = Ember.Controller.extend PublicMixin,
      zoo: 111
      Baz:->
        console.log 'Baz'
        return
    
      init:(etc...)->
        @_super etc
        @signal 'Foo'
        return
    
      'public':
        Foo:->
          @Baz()
          console.log 'public.Foo'
          return
    
    `export default IndexController`
  
