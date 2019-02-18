$(document).ready(function () {
    var $grid = $('.grid');
    // Init Isotope Grid
    $grid.isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        layoutMode: 'fitRows'
    })

    // Filter items on button click
    $('.filter-button-group').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
        $('.filter-button-group li').removeClass('active');
        $(this).addClass('active');
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });  
})