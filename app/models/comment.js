import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  commentContent: DS.attr(),
  post: DS.belongsTo('post', { async: true })
});
