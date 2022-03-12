document.addEventListener('DOMContentLoaded', () => {
    const expandsMore = document.querySelectorAll('[expand-more]');

    
    function expand(){
        const showContent = document.getElementById(this.dataset.target);

        if(showContent.classList.contains('expand-active')) {
            this.innerHTML = this.dataset.showtext;
        } else {
            this.innerHTML = this.dataset.hidetext;
        }
        showContent.classList.toggle('expand-active');
    }
    
    expandsMore.forEach(expandMore => {
        expandMore.addEventListener('click', expand);
    });

    function scrollAppear(){
        var cards = document.querySelector('.welcome-cards');
        var services = document.querySelector('.services');
        var aboutText = document.querySelector('.about-text1');
        var chooseText = document.querySelector('.why-choose-us');
        var contactInfo = document.querySelector('.contact-info');
        var contactForm = document.querySelector('.contact-form');


        //Get the element's position
        var cardPosition = cards.getBoundingClientRect().top;
        var servicesPosition = services.getBoundingClientRect().top;
        var aboutTextPosition = aboutText.getBoundingClientRect().top;
        var chooseTextPosition = chooseText.getBoundingClientRect().top;
        var contactInfoTextPosition = contactInfo.getBoundingClientRect().top;
        var contactFormPosition = contactForm.getBoundingClientRect().top;

        //Get screen height
        var screenPosition = window.innerHeight / 1.3;

        if(cardPosition < screenPosition){
            cards.classList.add('vertical-slide');
        }
        if(servicesPosition < screenPosition){
            services.classList.add('fade-appear');
        }
        if(aboutTextPosition < screenPosition){
            aboutText.classList.add('horizontal-slide');
        }
        if(chooseTextPosition < screenPosition){
            chooseText.classList.add('horizontal-slide');
        }
        if(contactInfoTextPosition < screenPosition){
            contactInfo.classList.add('horizontal-slide');
        }
        if(contactFormPosition < screenPosition){
            contactForm.classList.add('horizontal-slide');
        }
    }

    window.addEventListener('scroll', scrollAppear);

});