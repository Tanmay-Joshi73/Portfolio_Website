 // Enhanced text animation
 const nameElement = document.querySelector('.highlight');
 const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let interval = null;

 nameElement.onmouseover = event => {  
     let iteration = 0;
     
     clearInterval(interval);
     
     interval = setInterval(() => {
         event.target.innerText = event.target.innerText
             .split("")
             .map((letter, index) => {
                 if(index <iteration) {
                     return event.target.dataset.value[index];
                    //  console.log(event.target.dataset.value[index]);
                 }
             
                 return letters[Math.floor(Math.random() * 26)]
             })
             .join("");
         
         if(iteration >= event.target.dataset.value.length){ 
             clearInterval(interval);
         }
         
         iteration += 1/3;
     }, 30);
 }

 // Set initial name
 nameElement.dataset.value = nameElement.innerText;
//  console.log(nameElement.dataset.value)
 // Typing effect
 const typingEffect = () => {
     const text = nameElement.innerText;
     nameElement.innerText = '';
     let i = 0;

     const typing = setInterval(() => {
         if (i <text.length) {
          
             console.log(nameElement.innerText += text.charAt(i));
          
             console.log(i++);
           
         } else {
             clearInterval(typing);
             nameElement.classList.remove('typing-effect');
         }
     }, 100);
 }

 // Start typing effect on load
 window.addEventListener('load', typingEffect);



 ///Code for the cards
 document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = -(x - centerX) / 15;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
})



// Code for the Forth Container
function createStars() {
    const container = document.querySelector('.fourth-container');
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = Math.random() * 3 + 'px';
      star.style.height = star.style.width;
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(star);
    }
  }
  
  // Create floating orbs
  function createGlowingOrbs() {
    const container = document.querySelector('.fourth-container');
    for (let i = 0; i < 10; i++) {
      const orb = document.createElement('div');
      orb.className = 'glow-orb';
      orb.style.left = Math.random() * 100 + '%';
      orb.style.top = Math.random() * 100 + '%';
      orb.style.setProperty('--float-x', (Math.random() * 40 - 20) + 'px');
      orb.style.setProperty('--float-y', (Math.random() * 40 - 20) + 'px');
      orb.style.animationDelay = -Math.random() * 6 + 's';
      container.appendChild(orb);
    }
  }
  
  // Create explosion effect
  function createExplosion(x, y) {
    const container = document.querySelector('.fourth-container');
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    explosion.style.left = x + 'px';
    explosion.style.top = y + 'px';
  
    // Create multiple particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'explosion-particle';
      
      const angle = (Math.PI * 2 * i) / 20;
      const velocity = 50 + Math.random() * 50;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      
      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      particle.style.animation = 'explode 1s ease-out forwards';
      
      explosion.appendChild(particle);
    }
  
    container.appendChild(explosion);
    setTimeout(() => explosion.remove(), 1000);
  }
  
  // Create shooting star with trail
  function createShootingStar() {
    const container = document.querySelector('.fourth-container');
    const star = document.createElement('div');
    star.className = 'neon-shooting-star';
    
    const startX = -50;
    const startY = Math.random() * (window.innerHeight / 2);
    const endX = window.innerWidth + 50;
    const endY = startY + Math.random() * 200;
    
    star.style.left = startX + 'px';
    star.style.top = startY + 'px';
    
    container.appendChild(star);
    
    const duration = 2000;
    const startTime = performance.now();
    
    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = elapsed / duration;
      
      if (progress >= 1) {
        star.remove();
        createExplosion(endX - 100, endY);
        return;
      }
      
      const currentX = startX + (endX - startX) * progress;
      const currentY = startY + (endY - startY) * progress;
      
      star.style.left = currentX + 'px';
      star.style.top = currentY + 'px';
      
      const trail = document.createElement('div');
      trail.className = 'star-trail';
      trail.style.left = currentX + 'px';
      trail.style.top = currentY + 'px';
      trail.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX)}rad)`;
      container.appendChild(trail);
      
      setTimeout(() => trail.remove(), 100);
      
      requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);
  }
 
