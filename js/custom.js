// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var displayYearEl = document.querySelector("#displayYear");
    if (displayYearEl) {
        displayYearEl.innerHTML = currentYear;
    }
}
getYear();

// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
});

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

// Booking form handler
document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevents the default form submission behavior

            // Collect form data
            const customerName = document.getElementById('customerName').value.trim();
            const customerPhone = document.getElementById('customerPhone').value.trim();
            const customerEmail = document.getElementById('customerEmail').value.trim();
            const numberOfPersons = document.getElementById('numberOfPersons').value;
            const bookingDate = document.getElementById('date').value;

            // Simple validation
            if (!customerName || !customerPhone || !customerEmail || !numberOfPersons || !bookingDate) {
                alert('Por favor, preencha todos os campos para fazer a reserva.');
                return;
            }

            // Display confirmation
            alert(`Reserva confirmada!\n\nDetalhes:\nNome: ${customerName}\nTelefone: ${customerPhone}\nEmail: ${customerEmail}\nNúmero de Pessoas: ${numberOfPersons}\nData: ${bookingDate}`);

            // Reset the form after successful submission
            bookingForm.reset();

            // nice-select needs to be updated after a reset
            $('select').niceSelect('update');
        });
    }
});