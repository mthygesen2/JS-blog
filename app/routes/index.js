import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.query('post', {
        limitToLast: 5
      }),
      comments: this.store.findAll('comment')
    });
  },
});
