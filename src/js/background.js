import $ from 'jquery';
import Greeting from './greeting';
import Quote from './quote';
let userChoiceString = 'relaxation';
/*
* Objectif : récupérer une image par rapport à des mots clés que l'utlisateur rentre à partir d'une API et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une image de façon asynchrone à partir de l'API d'Unsplash (https://source.unsplash.com/)
* 3- Définir l'image comme fond
* */

export default class background {
	constructor () {
		this.initEls();
		this.initEvents();
	}


	initEls(){
			//this fait ref à background
			this.$els = {
				background:$('.js-background'),
			};
			this.url='https://source.unsplash.com/featured/?' + userChoiceString;
			//this.cat='638440';//catégorie
			this.size='1920x1080'
		}

	initEvents() {
		this.loadImage();
	}

	loadImage() {
		const promise = new Promise((resolve, reject) => {
			const image = new Image();
			image.src = `${this.url}/${this.size}`;
			image.onload = () => {
				console.log(image);
				resolve(image);
			};
			image.onerror = (error) =>{
				reject(error);
			}
		});
		promise.then((image) => {
			this.addBackground(image);
		});
		promise.catch((error) => {
			console.log('Error with the unplash image', error);
		});
	}

	addBackground(image) {
		this.$els.background.css('background-image', `url(${image.src})`);
		this.$els.background.addClass('is-ready');
	}

	executeUserChoice(inputString) {
		userChoiceString=inputString;

	}
}
