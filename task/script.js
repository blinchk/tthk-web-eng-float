function scrollToContent() {
    $('html, body').animate({
        scrollTop: $("footer").offset().top
    }, 300);
}