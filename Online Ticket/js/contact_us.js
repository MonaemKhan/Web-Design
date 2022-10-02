var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Sent',
                showConfirmButton: false,
                timer: 3000
            })
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: 'Oops!!',
                        text: data["errors"].map(error => error["message"]).join(", "),
                        showConfirmButton: false,
                        timer: 3000
                    })
                } else {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: "Oops! There was a problem submitting your form",
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
            })
        }
    }).catch(error => {
        Swal.fire({
            position: 'top',
            icon: 'top-center',
            title: "Oops! There was a problem submitting your form",
            showConfirmButton: false,
            timer: 3000
        })
    });
}
form.addEventListener("submit", handleSubmit)