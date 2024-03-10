$(document).ready(function () {
    /* animate skill bars */
    $(".skillbar").each(function () {
        $(this)
            .find(".skillbar-bar")
            .animate(
                {
                    width: $(this).attr("data-percent")
                },
                2500
            );
    });

    // add class navbarDark on navbar scroll
    const header = document.querySelector('.navbar-dark');
    console.log(header)
    window.onscroll = function () {
        const top = window.scrollY;
        if (top >= 100) {
            header.classList.add('navbarDark');
        }
        else {
            header.classList.remove('navbarDark');
        }
    }
    // This is end
});