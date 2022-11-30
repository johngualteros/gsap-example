gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.nav-item a');
const activeNav = document.querySelector('.active-nav');

links.forEach(link => {
    link.addEventListener('click', e => {
        gsap.to(links, {color: "#252525"});
        
        if(document.activeElement === e.target) {
            gsap.to(link, { color: "#385ae0" });
        }

        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            absolute: true
        });
    });

});


const cards = document.querySelectorAll('.card');


cards.forEach((card, index) => {
    card.addEventListener('click', e => {

        const state = Flip.getState(cards);

        //add the active class

        const isCardActive = card.classList.contains('active');

        cards.forEach((otherCard, otherIdx) => {
            otherCard.classList.remove('active');
            otherCard.classList.remove('is-inactive');

            if(!isCardActive && index !== otherIdx) {
                otherCard.classList.add('is-inactive');
            }
        });

        if(!isCardActive) {
            card.classList.add('active');
        }
        
        Flip.from(state, {
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            absolute: true
        });
    });
});