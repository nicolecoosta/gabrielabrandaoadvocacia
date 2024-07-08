/* FAQ */

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Make the first item open by default
    faqItems[0].classList.add('active');
    faqItems[0].querySelector('.faq-answer').style.display = 'block';

    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                    i.querySelector('.faq-answer').style.display = 'none';
                }
            });

            // Toggle the clicked item
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.display = 'none';
            } else {
                item.classList.add('active');
                item.querySelector('.faq-answer').style.display = 'block';
            }
        });
    });
});

//hamburguer
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

