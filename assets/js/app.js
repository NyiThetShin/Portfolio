let toggleBar = document.querySelector('.bar');
let menuToggle = document.querySelector('.menu_toggle');

toggleBar.addEventListener('click',() => {
    console.log('hello')
    menuToggle.classList.toggle('active');
})

window.addEventListener('resize',() => {
    const innerWidth = window.innerWidth;
    if(innerWidth > 900){
        menuToggle.classList.remove('active')
    }
})




// portfolio create card






 ScrollReveal({

    distance: "50px",
    duration: 2000,
    reset: true,
})

ScrollReveal().reveal('.about_section,.skill_section,.contact_section,.footer_section', {
    origin:'bottom',
    delay:150
})
ScrollReveal().reveal('.project_section',{
    origin:'bottom',
    delay:500
})

ScrollReveal().reveal('.who',{
    origin:'left',
    delay:300
})

ScrollReveal().reveal('.name', {
    origin:'right',
    delay:400
})
ScrollReveal().reveal('.career', {
    origin: 'bottom',
    delay: 500
})
ScrollReveal().reveal('.logo', {
    origin: 'top',
    delay: 300
})



// sending email 



const sendEmail  = () => {
   Email.send({
       SecureToken: "362f2559-42a2-4e49-bc4c-675759bca9bf",
       To: 'nyithetshin.2001@gmail.com',
       From: document.querySelector('#email').value,
       Subject: "This is the subject",
       Body: "Name:" + document.querySelector('#name').value 
              + "<br> Email : " + document.querySelector('#email').value
             + "<br> Phone : " + document.querySelector('#phone').value
             +"<br> Message : " + document.querySelector('#message').value
   }).then(
       message => alert('Your message is successfully')
   );
}

