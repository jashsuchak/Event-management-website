// Event Handling: Toggle classes on menu click
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Event Handling: Remove classes on window scroll
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

try {
    // Exception Handling: Swiper initialization for the home slider
    var homeSwiper = new Swiper(".home-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });

    // Exception Handling: Swiper initialization for the review slider
    var reviewSwiper = new Swiper(".review-slider", {
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        spaceBetween: 10,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            700: {
                slidesPerView: 2,
            },
            1050: {
                slidesPerView: 3,
            },
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    });
} catch (error) {
    // Exception Handling: Log error if Swiper initialization fails
    console.error('An error occurred during Swiper initialization:', error);
}
function clearErrors()
{
errors =document.getElementsByClassName('formerror');
for(let item of errors)
{
    item.innerHTML ="";}
}functionseterror(id,error)
{//sets error inside tag of id
    element =document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML =error;
}
    functionvalidateForm()
    {
    var returnval =true;
    clearErrors();//perform validation and if validation fails, set the value of returnval to false
    var name =document.forms['myForm']["fname"].value;
    if(name.length<5)
    {seterror("name","*Length of name is too short");
    returnval =false;}
    if(name.length ==0){
        seterror("name","*Length of name cannot be zero!");
        returnval =false;}varemail =document.forms['myForm']["femail"].value;if(email.length>15){seterror("email","*Email length is too long");returnval =false;}varphone =document.forms['myForm']["fphone"].value;if(phone.length !=10){seterror("phone","*Phone number should be of 10 digits!");returnval =false;}varpassword =document.forms['myForm']["fpass"].value;if(password.length <6){// Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letterseterror("pass","*Password should be atleast 6 characters long!");returnval =false;}varcpassword =document.forms['myForm']["fcpass"].value;if(cpassword !=password){seterror("cpass","*Password and Confirm password should match!");returnval =false;}returnreturnval;}
    