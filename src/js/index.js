import $ from 'jquery';
import '../css/app.scss';
import Background from './background';
import Activity from './activity';

let input = $('#search_text');

class App {
    constructor () {
        this.initApp();
    }

    initApp () {
      // Start application
        this.pBackground = new Background("");	//mémorise le pointeur qui fait appel à la fonction Background
      this.pActivity = new Activity("");
    }
}

let pApp = new App();

//fonction qui permet de récupérer ce que l'utilisateur a récupéré dans l'input pour le transmettre aux modules background et activity
let postForm = () => {
    $("#search_form").submit(function(){
        let type = $('#search_text').val();
        $('#search_text').val('');
        pApp.pBackground.executeUserChoice(type);
		pApp.pActivity.executeUserChoice(type);
        return false;
    });
}

postForm();