const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// 
//NAVIGATION
// 
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = Array.from(document.getElementsByTagName("a"));
for(let i = 0; i < navItems.length; i++){
  navItems[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
}

// 
//CTA
// 
let headerText = document.querySelector("h1");
headerText.textContent = siteContent["cta"]["h1"];

let CTAButton = document.querySelector("button");
CTAButton.textContent = siteContent["cta"]["button"];

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

// 
// MAIN CONTENT
// 
let contenth4 = Array.from(document.querySelectorAll(".text-content h4"));
let contentBodies = Array.from(document.querySelectorAll(".text-content p"));

contenth4[0].textContent = siteContent["main-content"]["features-h4"];
contenth4[1].textContent = siteContent["main-content"]["about-h4"];
contenth4[2].textContent = siteContent["main-content"]["services-h4"];
contenth4[3].textContent = siteContent["main-content"]["product-h4"];
contenth4[4].textContent = siteContent["main-content"]["vision-h4"];

contentBodies[0].textContent = siteContent["main-content"]["features-content"];
contentBodies[1].textContent = siteContent["main-content"]["about-content"];
contentBodies[2].textContent = siteContent["main-content"]["services-content"];
contentBodies[3].textContent = siteContent["main-content"]["product-content"];
contentBodies[4].textContent = siteContent["main-content"]["vision-content"];

let middleImg = document.querySelector(".main-content img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// 
// CONTACT
// 
let contacth4 = document.querySelector(".contact h4");
contacth4.textContent = siteContent["contact"]["contact-h4"];

let contactp = Array.from(document.querySelectorAll(".contact p"));
contactp[0].textContent = siteContent["contact"]["address"];
contactp[1].textContent = siteContent["contact"]["phone"];
contactp[2].textContent = siteContent["contact"]["email"];

// 
// FOOTER
// 
let copyright = document.querySelector("footer p");
copyright.textContent = siteContent["footer"]["copyright"];

//
//Task 3
//
let nav = document.querySelector("nav");
nav.appendChild(document.createElement('a')).textContent = "append";
nav.prepend(document.createElement('a'));
document.querySelector("a").textContent = "prepend";

navItems = Array.from(document.getElementsByTagName("a"));

navItems.forEach(element => {
  element.style.color = "lightgreen";
});

//
//STRETCH - TIMER
//
let time = 0;
let maxTime = 10000
let timerController;

CTAButton.addEventListener("click", startTimer);
;


function timer(){
  if(time < maxTime){
    time += 10;
    headerText.textContent = `${time/1000}`;
  }
  else{
    headerText.style.color = "red"
    headerText.textContent = `${time/1000}`;
    stopTimer();
  }
}

function stopTimer(){
  clearInterval(timerController);
}

function startTimer(){
  headerText.style.width = "200px"
  headerText.style.textAlign = "left";
  CTAButton.textContent = "Timer Start/Reset"
  time = 0;
  headerText.style.color = "black"
  clearInterval(timerController);
  timerController = setInterval(timer,10);
}
