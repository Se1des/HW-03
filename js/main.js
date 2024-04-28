const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const menuItems = document.querySelectorAll('.menu__item');

let isWhite = false;

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');

    if (isWhite) {
        menuBtn.classList.remove('menu__btn--white');
    } else {
        menuBtn.classList.add('menu__btn--white');
    }

    isWhite = !isWhite;
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu__list--active');
        menuBtn.classList.remove('menu__btn--white');
        isWhite = false;
    });
});

// ==================== модальне вікно
var formDataArray = [];

function openModal() {
    document.getElementById("myModal").style.display = "block";
    window.addEventListener('keydown', closeModalOnEscape);
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    window.removeEventListener('keydown', closeModalOnEscape);
}

function closeModalOnEscape(event) {
    if (event.key === "Escape") {
        closeModal();
    }
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Функція валідації форми
function validateForm() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;


    if (name.trim() == '' || phone.trim() == '' || email.trim() == '') {
        alert('Будь ласка, заповніть всі обов\'язкові поля');
        return false;
    }

    return true;
}


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {

        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        var formData = {
            name: name,
            phone: phone,
            email: email,
            message: message
        };

        formDataArray.push(formData);

        console.log(formDataArray);

        document.querySelector('form').reset();
    }
});


// ==================== плавність
document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== дотаткова інформація
const yearBtn = document.querySelector('.year__btn');
const additionalInfo = document.querySelector('.additional-info');

yearBtn.addEventListener('click', () => {
    additionalInfo.classList.toggle('active');
});


// ==================== swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 2,
        }

    },
});