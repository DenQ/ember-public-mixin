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
    
      init:(etc...)->
        @_super etc
        @Signal 'public', 'Foo'
        @Signal 'private', 'Foo'
        @Signal 'foobar', 'Foo', 'Coffee'
        return
    
      'public':
        Foo:->
          console.log '1'
          return
          
      'private':
        Foo:->
          console.log '2'
          return
          
      'foobar':
        Foo:(name)->
          console.log '2', name
          return
    
    `export default IndexController`
  
