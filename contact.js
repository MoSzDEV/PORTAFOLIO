let form = document.getElementById("form")
form.action = 'https://formsubmit.co/moszdev@gmail.com';
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

