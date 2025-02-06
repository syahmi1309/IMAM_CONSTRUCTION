let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.nav');

    // Simulate loading process
    window.addEventListener('load', function() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    });

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}


