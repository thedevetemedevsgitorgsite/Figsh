const toggleMenu = document.querySelector(".toggle-menu");
const menu = document.querySelector(".mobile-list");


toggleMenu.addEventListener("click", e=>{
  menu.classList.toggle("hidden");
  
  if(!menu.classList.contains("hidden")){
    toggleMenu.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" 
     width="24" height="24" 
     viewBox="0 0 24 24" 
     fill="none" stroke="currentColor" 
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>`;
  }
  else{
    toggleMenu.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" 
     width="26" height="26" 
     viewBox="0 0 24 24" 
     fill="none" stroke="currentColor" 
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3" y1="6" x2="21" y2="6" />
  <line x1="3" y1="12" x2="21" y2="12" />
  <line x1="3" y1="18" x2="21" y2="18" />
</svg>`;
  }
  
})

menu.querySelectorAll(".mobile-list a").forEach(m=>{
  m.addEventListener("click", e=>{
    menu.classList.add("hidden");
    toggleMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" 
     width="26" height="26" 
     viewBox="0 0 24 24" 
     fill="none" stroke="currentColor" 
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3" y1="6" x2="21" y2="6" />
  <line x1="3" y1="12" x2="21" y2="12" />
  <line x1="3" y1="18" x2="21" y2="18" />
</svg>`;
  })
})
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('push');
    }
    else{
      if(entry.target.classList.contains("push"))entry.target.classList.remove("push");
    }
  });
}, { threshold: 0.2 });


const skillLevel = document.querySelectorAll(".info-list.rap .rapper");
skillLevel.forEach(level=>{
  levelPush = level.querySelector("strong");
  
  levelPush.style.maxWidth=level?.dataset.value?level.dataset.value:'5%';
  observer.observe(levelPush);
})

const observeOpac = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opac');
    }
    else {
      if (entry.target.classList.contains("opac")) entry.target.classList.remove("opac");
    }
  });
}, { threshold: 0.2 });

const secDiv = document.querySelectorAll(".section div");
const underline = document.querySelectorAll(".underline");

secDiv.forEach(sec=>observeOpac.observe(sec));

underline.forEach(line=>observeOpac.observe(line));

const hrefElem = document.querySelectorAll("[data-url]");

if(hrefElem){
  hrefElem.forEach(el=>{
    if (el.dataset.url) {
      const locationHref = el.dataset.url;
      el.addEventListener("click", e=>{
        location.href = locationHref;
      })
    }
  })
}
document.querySelector("footer .footer-bottom").innerHTML=`<p>&copy; ${new Date().getFullYear()} Figsh Technology. All Rights Reserved.</p>`;