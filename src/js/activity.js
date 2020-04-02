import $ from 'jquery';


export default class activity {
	constructor () {
		this.initEls();
		this.initEvents();
	}

	initEls() {
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
			endpoint: 'http://www.boredapi.com/api/activity?type=:type',
			params: {
				'per_page': 1,
			},
		};

		$.ajaxSetup({cache: false});
		$.getJSON(api.endpoint, api.params)
		.then((response) =>{
			console.log(response);
			this.renderActivity(response[0].content.rendered, response[0].title.rendered);
		})
		.catch((e) => {
			console.log('error with the activity :', e);
		});
	}

	renderActivity(activity, type, participants, link) {
		this.$els.activity.text(activity);
		this.$els.type.text(type);
		this.$els.participants.text(participants);
		this.$els.link.text(link);
		this.$els.container.addClass('is-ready');
	}
}