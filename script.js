// Loading Animation
$(window).on('load', function (){
    $('.animation-screen').fadeOut('slow');
})

// Social Media Links
document.querySelector('.linkedin').addEventListener("click", () => window.open("https://www.linkedin.com/in/haseebqureshiishere/", "_self"));

document.querySelector('.g-mail').addEventListener("click", () => window.open("mailto:qureshihaxeeb2@gmail.com", "_self"));

document.querySelector('.instagram').addEventListener("click", () => window.open("https://www.instagram.com/haseebxqureshi/", "_self"));

// Github Link 
document.querySelector('.posts6').addEventListener("click", () => window.open("https://github.com/HaseebQureshi7", "_self"));


var today = new Date;
today = today.toDateString()
console.log(today);

document.querySelector('.text').innerHTML = "<h2>"+today+"</h2>";


// For Testing Only
document.querySelector('.posts1').addEventListener("click", () => window.location.href = "posts/post-view.html");

