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
      new Background();
      new Activity();
    }
}

new App();


let postForm = () => {
    $("#search_form").submit(function(){
        let type = $('#search_text').val();
        $('#search_text').val('');
        //requestType(type);
        Activity(type);
        Background(type);
        return false;
    });
}
//requestType(type);
postForm();