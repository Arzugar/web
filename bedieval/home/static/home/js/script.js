window.onscroll = function () {
    var header = document.querySelector('.pinning_header_container');
    if (window.scrollY > 0) {
        console.log('scrolling');
        header.style.backgroundColor = 'red'; // Add this line to change the background color
    } else {
        console.log('att_the top');
        header.style.backgroundColor = 'transparent';
    }
};