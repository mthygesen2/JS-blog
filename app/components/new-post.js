import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    save() {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        author: this.get('author'),
        image: this.get('image'),
        content: this.get('content'),
      };
      this.set('addNewPost', false);
      this.sendAction('save', params);
    }
  }
});




// var inputNames = ['title', 'author', 'date', 'image', 'content'];
// var self = this;
// self will save the element to this so that below it will know what this is
// inputNames.forEach(function(name) {
//   self.set(name, '');
// });
