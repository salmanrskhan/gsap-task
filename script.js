

document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll('.text > div');
    const headingElements = document.querySelectorAll('.text-inside-img > div');
    const pages = document.querySelectorAll('.page');
    const leftPanel = document.querySelector('.left-panel');
    const spans = document.querySelectorAll('.previous-and-current div');
    const circleCont = document.querySelector('.circle-cont')

    gsap.set(textElements, { display: 'none', y: 20 });
    gsap.set(headingElements, { display: 'none', y: 20 });

    gsap.set(spans, { opacity: 0.4 });
    let activePageIndex = 0;

    function handleScroll() {
        const scrollPosition = window.scrollY;

        if (scrollPosition < pages[0].offsetTop) {
            gsap.set(textElements, { display: 'none', y: 20 });
            gsap.set(headingElements, { display: 'none', y: 20 });

            gsap.set(textElements[0], { display: 'block', y: 0 });
            gsap.set(headingElements[0], { display: 'block', y: 0 });

            gsap.to(textElements[0], { opacity: 1, y: 0, duration: 0.4 });
            gsap.to(headingElements[0], { opacity: 1, y: 0, duration: 0.4 });

            leftPanel.style.backgroundColor = '#3498db';

            gsap.to(spans, { opacity: (index) => (index < 1 ? 1 : 0.4) });

            return;
        }

        pages.forEach((page, index) => {
            const offset = page.offsetTop;

            if (scrollPosition >= offset && scrollPosition < offset + page.clientHeight) {
                if (activePageIndex !== index) {
                    animatePage(index);
                }

                activePageIndex = index;

                gsap.set(textElements, { display: 'none', y: 20 });
                gsap.set(headingElements, { display: 'none', y: 20 });

                gsap.set(textElements[index], { display: 'block', y: 20 });
                gsap.set(headingElements[index], { display: 'block', y: 20 });

                gsap.to(textElements[index], { opacity: 1, y: 0, duration: 0.4 });
                gsap.to(headingElements[index], { opacity: 1, y: 0, duration: 0.4 });

                leftPanel.style.backgroundColor = getBackgroundColor(index);
                circleCont.style.background = getCircleBackground(index);

                gsap.to(spans, { opacity: (spanIndex) => (spanIndex < index ? 1 : 0.4) });
            }
        });
    }

    function getBackgroundColor(index) {
        const backgroundColors = ['#17263a', '#0f0f38', '#4b18c6', '#5d00a3', '#05298d', '#184d9d', '#0b944d'];
        return backgroundColors[index % backgroundColors.length];
    }
    function getCircleBackground(index) {
        const background = ['#162539', '#0e0e37', '#4918c5', '#5c00a0', '#06278c', '#1a57bb', '#0b944d'];
        return background[index];
    }

    function animatePage(index) {

        // Extra animation: Flip the heading text
        // gsap.fromTo(
        //     headingElements[index],
        //     { rotationX: 90 },
        //     { rotationX: 0, duration: 0.4, ease: "power1.inOut" }
        // );

        // Reset previous images to their initial position
        // gsap.set('.page img', { y: '-100%' });

        // Animate the current page's images
        // gsap.from('.page:nth-child(' + (index + 1) + ') img', {
        //     duration: 0.8,
        //     y: '0%',
        //     stagger: 0.2, // Adjust the stagger value as needed
        //     ease: 'power2.out',
        // });

        // Other existing animations
        gsap.to(textElements[index], { opacity: 1, y: 0, duration: 0.4 });
        gsap.to(headingElements[index], { opacity: 1, y: 0, duration: 0.4 });

        leftPanel.style.backgroundColor = getBackgroundColor(index);

        leftPanel.style.backgroundColor = getBackgroundColor(index);
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
    animatePage(activePageIndex);
});


$(".slider").owlCarousel({
    autoplay: false,
    slideSpeed: 1000,
    items: 3,
    loop: true,
    nav: true,
    navText: ['', ''],
    margin: 20,
    dots: true,
    responsive: {
        120: {
            items: 1
        },
        320: {
            items: 1
        },
        767: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});

