let itext = $('.ba-interest__item-text')



$(document).ready(function () {
    $('.ba-menu-btn').on('click', function () {

        $('.ba-menu').toggle();
    });



//прокрутка

let $page = $('html, body');
$('a[href*="#"]').on('click',function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});




    $('.ba-interest__item').find('i').on('click', function () {
        event.preventDefault()
    })



    $('.ba-interest__item').find('i').on('mouseenter', function () {
        $(this).parent().addClass('ba-interest__item-focus')
        $(this).parent().siblings(itext).show()

    });
    $('.ba-interest__item').find('i').on('mouseout', function () {
        $(this).parent().removeClass('ba-interest__item-focus')
        $(this).parent().siblings(itext).hide()
    });



    $(window).on('resize', function () {
        if ($(this).width() > 991) {
            $('.ba-menu').show();
            itext.hide()
        } else {
            $('.ba-menu').hide();
            itext.show()
        }


    })




    if ($(window).width() < 1024) {
        $(this).parent().siblings(itext).show()
    } else {
        $(this).parent().siblings(itext).hide()
    }







    //тут делаем модальное окно

    $('.ba-work__img').on('click', function () {
        let imgSrc = $(this).find('img').attr('src'),
            $modalImage = $('<img>');
        $modalImage.attr('src', imgSrc);


        $('.ba-modal-content-wrapper').append($modalImage);
        openModal();

    })


    let openModal = function () {

        $('.ba-modal').addClass('ba-modal--open');
        $('body').addClass('ba-modal-is-open');
        $(document).on('keydown', function (e) {
            if (e.keyCode == 27) {
                closeModal();
            };
        });

    };



    let closeModal = function () {
        $('.ba-modal').removeClass('ba-modal--open');
        $('body').removeClass('ba-modal-is-open');
        $('.ba-modal-content-wrapper').empty();
        $(document).off('keydown', closeModal);
    };



    $('.ba-modal-close').on('click', closeModal);


    $('.ba-modal').on('click', function (e) {


        if ($(e.target).hasClass('ba-modal')) {
            closeModal()
        }

    })






    $(function () {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });



})


//load more
$(function () {
    $('.ba-blog__item').slice(0, 3).show();
    $('#loadMore').on('click', function (e) {
        e.preventDefault();
        $('.ba-blog__item:hidden').slice(0, 3).slideDown();
    })
})


//jqery end

