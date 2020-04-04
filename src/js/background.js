import $ from 'jquery';

/*
* Objectif : récupérer une image par rapport à des mots clés que l'utlisateur rentre à partir d'une API et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une image de façon asynchrone à partir de l'API d'Unsplash (https://source.unsplash.com/)
* 3- Définir l'image comme fond
* */

export default class background {
	constructor (_searchType) {			//permet de donner l'url en fonction de la requête de l'utilisateur
		this.executeUserChoice(_searchType);
	}


	initEls(){
			this.$els = {
				background:$('.js-background'),
			};
			this.url='https://source.unsplash.com/featured/?' + this.searchType;
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
	//permet d'executer la requête de l'utilisateur entrée dans le input
	executeUserChoice(inputString) {
		this.searchType=inputString;
		this.initEls();
		this.initEvents();
	}
}
