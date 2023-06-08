let form = document.getElementById("form")
form.action = 'https://formsubmit.co/31ac8cd7b28df87b7d952999d606171a';
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

