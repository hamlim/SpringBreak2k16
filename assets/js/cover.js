$(document).ready(function(){
    // on button click, grab vars and store to localStorage
    let state = JSON.parse(localStorage.getItem('state'));

    document.getElementsByClassName('js-company').innerHTML = state.company;
    document.getElementsByClassName('js-link').innerHTML = state.link;
    document.getElementsByClassName('js-job').innerHTML = state.job;
    document.getElementsByClassName('js-date').innerHTML = state.date;


});
