'use strict';

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('.carousel ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function play() {
    setTimeout(() => {
      currentIndex++;
      if (currentIndex === slides.length){
        currentIndex = 0;
      }
      updateButtons();
      updateDots();
      moveSlides();
      play();
    }, 7000);
  }
  
  play();

  function updateButtons(){
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    
    if (currentIndex === 0){
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1){
      next.classList.add('hidden');
    }
  }

  function moveSlides(){
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for(let i = 0; i < slides.length; i++){
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        moveSlides();
        updateButtons();
      })
      dots.push(button);

  document.querySelector('.carousel nav').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
  });


  window.addEventListener('resize', () => {
    moveSlides();
  });

  const next2 = document.getElementById('next-2');
  const prev2 = document.getElementById('prev-2');
  const ul2 = document.querySelector('.events .cards');
  const card = ul2.children;
  let currentSlide = 0;

  function play2() {
    setTimeout(() => {
      currentSlide++;
      if (currentSlide === card.length){
        currentSlide = 0;
      }
      updateButtons2();
      moveCards();
      play2();
    }, 7000);
  }
  
  play2();

  function updateButtons2(){
    prev2.classList.remove('hidden');
    next2.classList.remove('hidden');
    
    if (currentSlide === 0){
      prev2.classList.add('hidden');
    }
    if (currentSlide === card.length - 1){
      next2.classList.add('hidden');
    }
  }

  function moveCards(){
    const cardWidth = card[0].getBoundingClientRect().width;
    ul2.style.transform = `translateX(${-1 * cardWidth * currentSlide}px)`;
  }

  next2.addEventListener('click', () => {
    currentSlide++;
    updateButtons2();
    moveCards();
  });

  prev2.addEventListener('click', () => {
    currentSlide--;
    updateButtons2();
    moveCards();
  });

  const icons = document.querySelectorAll('.bar');
  const menu = document.querySelector('.menu');
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const lists = document.querySelectorAll('.menu ul li');

  function switchMenu() {
      menu.classList.toggle('active');
      open.classList.toggle('active');
      close.classList.toggle('active');
  }

  icons.forEach(icon => {
    icon.addEventListener('click', () => {
      switchMenu();
    });
  });

  lists.forEach(list => {
    list.addEventListener('click', () => {
      list.classList.remove('current');
      lists.forEach(li => {
        if(list !== li) {
          li.classList.remove('current');
        }
      });
      list.classList.add('current');
      switchMenu();
    });
  });

  function onScrollCallback(entries){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        toTop.classList.add('scrolled');
      } else {
        toTop.classList.remove('scrolled');
      }
    });
  }

  const toTop = document.getElementById('to_top');
  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}