var mybutton = document.getElementById("button");
mybutton.onclick = function() {
    window.scrollTo(0, 0);
}


window.onscroll = function() {

    if (window.pageYOffset > 1000) {
        mybutton.style.display = 'block';

        mybutton.onclick = function() {
            window.scrollTo(0, 0);

        }

    }





}