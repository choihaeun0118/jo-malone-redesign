document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".best-item .swiper", {
        loop: true,

        slidesPerView: 2,
        slidesPerGroup: 2,   
        spaceBetween: 100,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        navigation: {
            prevEl: ".best-item .best-navigation .prev",
            nextEl: ".best-item .best-navigation .next",
        },

        pagination: {
            el: ".best-item .dot-pager",
            clickable: true,
        },

        speed: 2000,
        breakpoints: {
    768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
    },
    1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
    }
}
    });
});

document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".season-swiper", {
        loop: true,
        speed: 900,

        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },

        pagination: {
        el: ".season-pagination",
        clickable: true,
        },
    });
    });

document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".product-items .swiper", {
        slidesPerView: 4,     
        spaceBetween: 40,
        loop: false,

        navigation: {
            prevEl: ".product-items .prev",
            nextEl: ".product-items .next",
        },
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const hamburger = document.querySelector(".btn-hamburger");
    const mobileTitles = document.querySelectorAll(".mobile-title");

    if (!header) return;

    let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (header.classList.contains("is-open")) return;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
});

if (hamburger) {
    hamburger.addEventListener("click", () => {
        header.classList.toggle("is-open");
        header.classList.remove("hide");
    });
}


mobileTitles.forEach(title => {
    title.addEventListener("click", () => {  
        const item = title.closest(".mobile-item");

        document.querySelectorAll(".mobile-item.is-open").forEach(openItem => {
            if (openItem !== item) {
                openItem.classList.remove("is-open");
            }
        });

        item.classList.toggle("is-open");
    });
});
});

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".jm-footer-m");
    if (!footer) return;

    const accTitles = footer.querySelectorAll(".acc-title");

accTitles.forEach(title => {
    title.addEventListener("click", () => {
        const item = title.closest(".acc-item");
        if (!item) return;

        const isOpen = item.classList.contains("active");

        footer.querySelectorAll(".acc-item").forEach(el => {
            el.classList.remove("active");
        });

        if (!isOpen) {
            item.classList.add("active");
        }
    });
});
});

document.addEventListener("DOMContentLoaded", () => {
    const topBtn = document.querySelector(".btn-top");
    const bestItem = document.querySelector(".best-item");

    if (!topBtn || !bestItem) return;

    const bestOffset = bestItem.offsetTop;

    window.addEventListener("scroll", () => {
        if (window.scrollY >= bestOffset - 200) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".banner-list");
    const items = document.querySelectorAll(".banner");
    const currentEl = document.querySelector(".fraction-indicator .current");
    const totalEl = document.querySelector(".fraction-indicator .total");

    if (!list || items.length === 0) return;

    let index = 0;
    const length = items.length;
    let interval;

    totalEl.textContent = length;
    currentEl.textContent = index + 1;

    function moveSlide() {
        list.style.transition = "transform 0.5s ease";
        list.style.transform = `translateX(-${index * 100}%)`;
        currentEl.textContent = index + 1;
    }

    function startAutoSlide() {
        interval = setInterval(() => {
        index = (index + 1) % length;
        moveSlide();
        }, 7000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
}

startAutoSlide();

let startX = 0;
let isDragging = false;

list.addEventListener("touchstart", (e) => {
    stopAutoSlide();
    startX = e.touches[0].clientX;
    isDragging = true;
    list.style.transition = "none";
    });

list.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;

    list.style.transform = `translateX(calc(-${index * 100}% + ${diff}px))`;
    });

list.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    isDragging = false;

    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff < -50 && index < length - 1) index++;
    else if (diff > 50 && index > 0) index--;

    moveSlide();
    startAutoSlide();
    });
});





