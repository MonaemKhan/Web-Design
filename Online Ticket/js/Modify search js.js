const modify = document.getElementById('modify');
const modify_search = document.getElementById('modify_search');

const search_result = document.getElementsByClassName('search_result');
const journey_label = document.getElementById('journey_label');

document.getElementById('modify_button').addEventListener('click',()=>{
    modify.style = "visibility: hidden;"
    modify_search.style = "visibility: visible;"
});

document.getElementById('modify_search_button').addEventListener('click',()=>{
    modify.style = "visibility: visible;"
    modify_search.style = "visibility: hidden;"
    journey_label.innerHTML = search_result[0].value+" to "+search_result[1].value+" on "+search_result[2].value;
});

