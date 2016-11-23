import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['intro'],
  highlighs: [{
    name: 'Calculator',
    link: 'calculator'
  }, {
    name: 'To Do List',
    link: 'index'
  }, {
    name: 'Timer',
    link: 'index'
  }, {
    name: 'Team Builder',
    link: 'index'
  }],
});
