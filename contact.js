let form = document.getElementById("form")
<<<<<<< HEAD

form.action = 'https://formsubmit.co/31ac8cd7b28df87b7d952999d606171a';
=======
form.action = 'https://formsubmit.co/moszdev@gmail.com';
>>>>>>> 364ad57df8010e061399725c17c169905d601f11
form.method = 'post';

form.onsubmit = () => {
    Toastify({
        
        
        text: "I will contact you!",
        
        duration: 1600,
        newWindow: true,
        
        style: {
            background: "linear-gradient(to right, #960001, #960000cc)",
        },
        
    }).showToast();
}

