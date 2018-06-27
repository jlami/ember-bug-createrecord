import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      tags:  this.get('store').findAll('tag'),
      posts: this.get('store').findAll('post')
    }).then(({posts}) => {
      if (posts.length > 0) return posts.toArray()[0];
      
      return this.store.createRecord('post', {name: 'Test post'}).save();
    })
//    .then(post => {
//      return this.store.createRecord('tag', {name: 'tag' + (posts.get('tags.length') + 1), post})
//      .save().then(() => post);
//    })
    ;
  },
  
  actions: {
    saveAll() {
      this.currentModel.get('tags').invoke('save');
    },
    save(m) {
      console.log(m.save());
    },
    delete(m) {
      m.deleteRecord();
    },
    addTag2(post) {
      let result = this.store.createRecord('tag', {name: 'tag' + (post.get('tags.length') + 1)});
      result.set('post', post);
    },
    addTag(post) {
      let result = this.store.createRecord('tag', {name: 'tag' + (post.get('tags.length') + 1), post});
      
      console.log(result);
    },
    addPost() {
      this.store.createRecord('post', {name: 'postName'});
    },
    log(m) {
      console.log(m);
    },
  }
});
