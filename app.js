// año automático
document.getElementById("year").textContent=new Date().getFullYear();

// typing
const text="Desarrollador Full Stack";
let index=0;

function type(){
if(index<text.length){
document.getElementById("typing-text").textContent+=text.charAt(index);
index++;
setTimeout(type,70);
}
}
type();

// navbar móvil
const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");

toggle.addEventListener("click",()=>{
nav.classList.toggle("active");
});

// modal proyectos
const modal=document.getElementById("projectModal");

function openModal(project){

modal.style.display="flex";

if(project==="hospe"){
document.getElementById("modalTitle").textContent="HospeDATE";
document.getElementById("modalDescription").textContent="Sistema hospitalario.";
}

if(project==="clima"){
document.getElementById("modalTitle").textContent="Clima";
document.getElementById("modalDescription").textContent="App del clima con APIs.";
}

}

function closeModal(){
modal.style.display="none";
}

// Scroll animation con Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade').forEach(el => observer.observe(el));
});

