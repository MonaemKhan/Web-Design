const ser_sub = document.getElementsByClassName('select');

document.getElementById('subm').addEventListener('click', () => {
    var msg = ser_sub[0].value + " to " + ser_sub[1].value + " on " + ser_sub[2].value;
    document.getElementById('journey_label').innerHTML = msg;
});