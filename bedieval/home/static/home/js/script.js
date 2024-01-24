window.onscroll = function () {
    var nav_bar = document.getElementById('nav-bar-id');
    if (window.scrollY > 0) {
        console.log('scrolling');
        nav_bar.style.transition = 'background-color 0.3s, background-image 0.3s';
        nav_bar.style.backgroundColor = '#141414';
        nav_bar.style.backgroundImage = '';
    } else {
        console.log('att_the top');
        nav_bar.style.transition = 'background-color 0.3s, background-image 0.3s';
        nav_bar.style.backgroundColor = 'transparent';
        nav_bar.style.backgroundImage = "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)";
    }
};