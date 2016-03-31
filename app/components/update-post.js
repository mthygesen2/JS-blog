import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        image: this.get('image'),
        content: this.get('content'),
      };
      debugger;
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});


// var inputNames = ['title', 'author', 'date', 'image', 'content'];
// var self = this;
// // self will save the element to this so that below it will know what this is
// inputNames.forEach(function(name) {
//   self.set(name, '');
// });
