import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    update(comment) {
      var params = {
        username: this.get('userName'),
        commentContent: this.get('commentContent'),
        post: this.get('post')
      };
      this.set('updateCommentForm', false);
      this.sendAction('update', comment, params);
    }
  }
});
