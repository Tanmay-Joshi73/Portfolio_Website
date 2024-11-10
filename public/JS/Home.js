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
                 if(index < iteration) {
                     return event.target.dataset.value[index];
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
 console.log(nameElement.dataset.value)
 // Typing effect
 const typingEffect = () => {
     const text = nameElement.innerText;
     nameElement.innerText = '';
     let i = 0;

     const typing = setInterval(() => {
         if (i < text.length) {
             nameElement.innerText += text.charAt(i);
             i++;
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