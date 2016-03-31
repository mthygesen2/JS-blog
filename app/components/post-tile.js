import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    // Saves comment sends it to route index
    save(params) {
      this.sendAction('save', params);
    },
    update(comment, params) {
      this.sendAction('update', comment, params);
    }
  }
});
