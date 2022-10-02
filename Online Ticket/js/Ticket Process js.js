const seat = document.getElementById('seat-select');

const ticket_num = document.getElementById('ticket-num');
const seat_num = document.getElementById('seat-num');
const ticket_fair = document.getElementById('ticket-fair');

const ss = document.createElement('option');

// ss.text = 'A2';
// seat.add(ss);
let count = 0;
document.getElementById('add_seat').addEventListener('click', () => {
    console.log(seat.selectedIndex);
    count++;
    ticket_num.innerHTML = count;
    let seat_no = seat_num.textContent + seat.value;
    seat_num.innerHTML = seat_no;
    ticket_fair.innerHTML = (800 * count);
    seat.remove(seat.selectedIndex);
});


const mobile_input = document.getElementById('mobile_input');
const mobile_button = document.getElementById('mobile_button');

const varify_input = document.getElementById('varify_input');
const varift_button = document.getElementById('varify_button');

const name_input = document.getElementById('name_input');
const address_input = document.getElementById('address_input');

document.getElementById('proceed_button').addEventListener('click', () => {
    if (ticket_num.textContent != '') {
        var alertMsg = "Total Ticket: " + ticket_num.textContent + "\nSeat Number: " + seat_num.textContent + "\nTotal Fair: " + ticket_fair.textContent;
        alert(alertMsg);
        mobile_input.disabled = false;
        mobile_button.disabled = false;
    }else{
        alert("Requried input");
    }
});

mobile_button.addEventListener('click', () => {
    alert(mobile_input.value + "\nWait 30sec");
    mobile_input.disabled = true;
    mobile_button.disabled = true;

    varify_input.disabled = false;
    setTimeout(() => {
        varift_button.disabled = false;
    }, 5000)

});

varift_button.addEventListener('click', () => {
    if (varify_input.value === '1234') {
        name_input.disabled = false;
        address_input.disabled = false;
    } else {
        alert("Wrong Varification Code");
        varify_input.value = "";
    }
});

document.getElementById('submit_next').addEventListener('click',()=>{
    var alertMsg1 = "Total Ticket: " + ticket_num.textContent + "\nSeat Number: " + seat_num.textContent + "\nTotal Fair: " + ticket_fair.textContent;
    var alertMsg2 = "Name: "+name_input.value+"\nAddress: "+address_input.value+"\nMobile No.: "+mobile_input.value;
    alert(alertMsg1+alertMsg2);
});