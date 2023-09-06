$(document).ready(function () {

    // Аккардион
    $(document).ready(() => {
        // Hide all accordion contents when the page loads
        $(".accardion-contents").hide();
    
        // Add "active" class to the first .accardion-heading element
        $(".accardion-heading:first").addClass("active");
    
        // Show the content of the first accordion section
        $(".accardion-heading:first")
            .next(".accardion-contents")
            .slideDown();
    
        $(".accardion").on("click", ".accardion-heading", function () {
            const $accordionContainer = $(this).closest(".accordion-container");
    
            // Check if the current heading has the "active" class
            const isActive = $(this).hasClass("active");
    
            // Hide all accordion contents
            $(".accardion-contents").slideUp(300);
    
            // Remove the "active" class from all headings
            $(".accardion-heading").removeClass("active");
    
            // Remove the "active" class from all accordion containers
            $(".accordion-container").removeClass("active");
    
            if (!isActive) {
                // Show the content and add the "active" class only to the current heading and its accordion-container
                $(this).next().slideDown();
                $accordionContainer.addClass("active");
                $(this).addClass("active");
            }
        });
    });
    
    // Слайдер
    $(document).ready(function () {
        // Для того чтобы наш слайдер работал на ширине меньше 1280px нужно поместить наш код в if ($(window).width() < 1280)
        // if ($(window).width() < 1280) {

        // }
        var touchStartX = 0;
        var touchStartY = 0;

        // Инициализация Slick Slider
        $('.slider-container').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            variableWidth: true,
            dots: true,
            centerMode: true,
            appendDots: $('.slider-dots'),
            // prevArrow: $('.prev'),
            // nextArrow: $('.next'),
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    swipe: false, // Отключаем стандартный свайп Slick Slider
                  },
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint:767,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
              ],
        });

        // Добавление обработчика для начала свайпа
        $('.slider-container').on('touchstart', function (event) {
            touchStartX = event.originalEvent.touches[0].clientX;
            touchStartY = event.originalEvent.touches[0].clientY;
        });

        // Добавление обработчика для завершения свайпа
        $('.slider-container').on('touchend', function (event) {
            var touchEndX = event.originalEvent.changedTouches[0].clientX;
            var touchEndY = event.originalEvent.changedTouches[0].clientY;

            var deltaX = touchStartX - touchEndX;
            var deltaY = touchStartY - touchEndY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                // Если горизонтальное движение больше, чем вертикальное, выполните действия свайпа
                if (deltaX > 0) {
                    $('.slider-container').slick('slickNext'); // Свайп влево
                } else {
                    $('.slider-container').slick('slickPrev'); // Свайп вправо
                }
            }
        });
    });

    // Плавный переход к якорю 
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    // Бургер меню
    document.querySelectorAll('.burger-link-close').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.burger-icon').classList.remove('open');
            document.querySelector('.burger-menu').classList.remove('open');
            document.querySelector('.body').classList.remove('open');
        });
    });
    document.querySelector('.burger-icon').addEventListener('click', () => {
        document.querySelector('.burger-icon').classList.toggle('open');
        document.querySelector('.burger-menu').classList.toggle('open');
        document.querySelector('.body').classList.toggle('open');
    });

    // Попап
    const openPopupButton = document.getElementById('openPopupButton');
    const closePopupButton = document.getElementById('closePopupButton');
    const popup = document.getElementById('popup');
    function openPopup() {
        popup.style.display = 'block';
    }
    function closePopup() {
        popup.style.display = 'none';
    }
    openPopupButton.addEventListener('click', openPopup);
    closePopupButton.addEventListener('click', closePopup);
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            closePopup();
        }
    });
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && popup.style.display === 'block') {
            closePopup();
        }
    });



    // Tabs
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Скрыть все содержимое вкладок
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Найти соответствующее содержимое вкладки и показать его
            const tabId = tab.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);
            tabContent.classList.add('active');
        });
    });

    // По умолчанию показать первую вкладку
    tabContents[0].classList.add('active');


});