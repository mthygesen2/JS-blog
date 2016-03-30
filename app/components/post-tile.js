import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(params) {
      this.sendAction('save', params);
    }
  }
});
