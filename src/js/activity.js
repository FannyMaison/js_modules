import $ from 'jquery';


export default class activity {
	constructor (_searchType) {
		this.executeUserChoice(_searchType);
	}

	initEls() { //défini les "variables"
		this.$els = {
			activity: $('.js-activity'),
			type: $('.js-activity-type'),
			participants: $('.js-activity-participants'),
			link: $('.js-activity-link'),
			container: $('.js-container')

		};
		this.url='http://www.boredapi.com/api/activity/';
		
	}
	initEvents() {
		this.getActivity();
	}

	getActivity() {
		const api = {
			endpoint: 'http://www.boredapi.com/api/activity?type=' + this.searchType,
			params: {
				'per_page': 1,
			},
		};

		$.ajaxSetup({cache: false});
		$.getJSON(api.endpoint, api.params)
		.then((response) =>{
			//console.log(response);
			this.renderActivity(response.activity, response.type, response.participants, response.link);
		})
		.catch((e) => {
			console.log('error with the activity :', e);
		});
	}
	//défini où les response de l'API vont s'injecter 
	renderActivity(activity, type, participants, link) {
		this.$els.activity.text(activity);
		this.$els.type.text(type);
		this.$els.participants.text(participants);
		this.$els.link.text(link);
		this.$els.container.addClass('is-ready');
	}

	executeUserChoice(inputString) {
		this.searchType=inputString;
		this.initEls();
		this.initEvents();
	}
}