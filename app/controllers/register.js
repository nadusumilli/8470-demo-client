import Ember from 'ember';

export default Ember.Controller.extend({
	confirmpassword: '',
	showPolicy: false,
	success: false,
	genders: ['Male', 'Female', 'Other'],
	educationLevels: ['some highschool','highschool', 'some college(2 years or less)', 'bachelor\'s degree', 'graduate degree'],
	states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
	agree: false,
	validationErrorMsg: "",
	actions: {
		showPolicy: function(){
			this.set('showPolicy', !this.get('showPolicy'));
		},
		register: function(){
			this.set('validationErrorMsg', '');
			var user = this.get('content');
			if (user.get('username')==undefined||user.get('username')==''){
				this.set('validationErrorMsg', 'You must specify a username.');
				return;
			}
			if (user.get('password')==undefined||user.get('password')==''){
				this.set('validationErrorMsg', 'You must specify a password.');
				return;
			}
			if (user.get('password').length<4){
				this.set('validationErrorMsg', 'Your password must be at least 4 characters');
			 	return;
			}
			if (user.get('age')==undefined||user.get('age')<0){
				this.set('validationErrorMsg', 'You must specify your age.');
				return;
			}
			if (user.get('gender')==undefined){
				this.set('validationErrorMsg', 'Please select your gender.');
				return;
			}
			if (user.get('educationLevel')==undefined){
				this.set('validationErrorMsg', 'Please select your education level.');
				return;
			}
			if (user.get('city')==undefined){
				this.set('validationErrorMsg', 'Please select your city.');
				return;
			}
			if (user.get('state')==undefined){
				this.set('validationErrorMsg', 'Please select your state.');
				return;
			}
			if(!this.get('agree')){
				this.set('validationErrorMsg', 'You must agree to the privacy and informed consent policy');
				return;
			}
			var confirm = this.get('confirmpassword');
			user.set('email', user.get('username')+"@cyberphishing.com");
			if(user.get('password') === confirm){
				this.updateServerModel();
			}
			else {
				this.set('validationErrorMsg', 'Passwords don\'t match');
			}

		},
		updateServerModel: function(){
			var user = this.get('content');
			var t = this;
			user.save().then( function(response){
				//Bootstrap.GNM.push('Success!', 'You\'ve created the account '+user.get('username'), 'success');
				Ember.$.ajax({
					url: '../api/register/newTaskset',
					type: 'POST',
					contentType:"application/json",
					data: JSON.stringify(user)
			  	}).done(function (data, status, request){
					//if(App.debug){console.log("Successful ajax call: " + request.responseText);}
						t.transitionTo("signin");
			  	}).fail(function(request, status, error){
					//if(App.debug){console.log("Ajax error: "+request.responseText);}
				});
			  
			},function(response){
				var errMsg = '';
				if(response.responseText.search('email')!=-1){
					errMsg = "Someone else is using that username, please select another";
				}
				else if(response.responseText.search('username')!=-1){
					errMsg = "Someone else is using that username, please select another";
				}
				else{
					errMsg = "An unknown error occured. Please try again";
				}

				//Bootstrap.GNM.push('Error saving '+user.get('username'), errMsg, 'danger');
				t.set('validationErrorMsg', errMsg);
			});
			
		},
	}
});
