$(document).ready(function(){
    // on button click, grab vars and store to localStorage
    let state = {};
    state.time = Date.now();

    let btn = document.getElementsByClassName('js-btn')[0];
    btn.addEventListener("click", clickHandler());

    function clickHandler(){
        let company = document.getElementsByClassName('js-input-company')[0].value;
        let job = document.getElementsByClassName('js-input-jobName')[0].value;
        let link = document.getElementsByClassName('js-input-link')[0].value;
        let date = document.getElementsByClassName('js-input-date')[0].value;

        if(company != "" && job != "" && link != "" && date != ""){
            //ready to push the values to the state
            state.company = company;
            state.job = job;
            state.link = link;
            state.date = date;
            //now save state to localStorage
            localStorage.setItem('state', JSON.stringify(state));
            //now we re-route to cover.html
            window.location.href = './cover.html';
        }
    }
});
