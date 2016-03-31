import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    save() {
      var params = {
        username: this.get('userName'),
        commentContent: this.get('commentContent'),
        post: this.get('post')
      };
      this.set('addNewComment', false);
      this.sendAction('save', params);
    }
  }
});
