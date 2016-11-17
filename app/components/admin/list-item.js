import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	showDeleteModal: false,
	actions: {
		download: function(){
			console.log('Download');
		},	
		delete: function(){
			this.set('showDeleteModal', false);
			console.log('Delete');
		},
		areYouSure: function(){
			this.set('showDeleteModal', !this.get('showDeleteModal'));
		}
	}
});
