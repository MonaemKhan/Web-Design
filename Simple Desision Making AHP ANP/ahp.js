var table = document.getElementsByClassName("criteria");

table[1].addEventListener('keyup', (e) => {
    var num = table[1].value;
    table[3].setAttribute('value', 1 / num);
});

table[2].addEventListener('keyup', (e) => {
    var num = table[2].value;
    table[6].value = 1 / num;
});

table[5].addEventListener('keyup', (e) => {
    var num = table[5].value;
    table[7].value = 1 / num;
});

document.getElementById("ahpCal").addEventListener('click', () => {
    var t0 = parseFloat(table[0].value);
    var t1 = parseFloat(table[1].value);
    var t2 = parseFloat(table[2].value);
    var t3 = parseFloat(table[3].value);
    var t4 = parseFloat(table[4].value);
    var t5 = parseFloat(table[5].value);
    var t6 = parseFloat(table[6].value);
    var t7 = parseFloat(table[7].value);
    var t8 = parseFloat(table[8].value);

    var sum1 = (t0 + t3 + t6);
    var sum2 = (t1 + t4 + t7);
    var sum3 = (t2 + t5 + t8);

    ut0 = t0 / sum1;
    ut1 = t1 / sum2;
    ut2 = t2 / sum3;
    ut3 = t3 / sum1;
    ut4 = t4 / sum2;
    ut5 = t5 / sum3;
    ut6 = t6 / sum1;
    ut7 = t7 / sum2;
    ut8 = t8 / sum3;

    row1 = (ut0 + ut1 + ut2) / 3.0;
    row2 = (ut3 + ut4 + ut5) / 3.0;
    row3 = (ut6 + ut7 + ut8) / 3.0;

    var para = document.getElementsByClassName('para');
//row 1
    var num = parseInt(row1 * 100);
    num = parseInt(num / 5);
    console.log(num);
    var str = "<u>Criteria1</u> : ";
    for (var i = 0; i < num; i++) {
        str = str + "="
    }
    str = str + " " + (row1 * 100).toFixed(4) + "%"
    console.log(str)
    para[0].innerHTML = str;
//row2
    num = parseInt(row2 * 100);
    num = parseInt(num / 5);
    console.log(num);
    str = "<u>Criteria2</u> : ";
    for (var i = 0; i < num; i++) {
        str = str + "="
    }
    str = str + " " + (row2 * 100).toFixed(4) + "%"
    console.log(str)
    para[1].innerHTML = str;
//row3
    num = parseInt(row3 * 100);
    num = parseInt(num / 5);
    console.log(num);
    var str = "<u>Criteria3</u> : ";
    for (var i = 0; i < num; i++) {
        str = str + "="
    }
    str = str + " " + (row3 * 100).toFixed(4) + "%"
    console.log(str)
    para[2].innerHTML = str;

    para[3].innerHTML = "Total Weight is : "+((row1+row2+row3)*100).toFixed(2)+"%";

});