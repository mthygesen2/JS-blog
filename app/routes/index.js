import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
  },
  actions:  {
    // Saves new comment from post-tile sends to model
    save(params) {
      var newComment= this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('index');
    },
    update(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key,params[key]);
        }
      });
      comment.save();
      this.transitionTo('index');
    },
    destroyComment(comment) {
      var post = comment.get('post');
      comment.destroyRecord().then(function(){
         post.save();
      });
      this.transitionTo('index');
    }
  }
});
