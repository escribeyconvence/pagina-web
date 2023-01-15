//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("servicios");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("c");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("liderazgo");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

// -----------------------------------

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});





// consoleText(['¿Qué Puedo Hacer?', 'Todo lo que pienses', 'Se puede escribir.'], 'text',['#008e97','var(--secundary-color)','lightblue']);

// function consoleText(words, id, colors) {
//   if (colors === undefined) colors = ['#fff'];
//   var visible = true;
//   var con = document.getElementById('console');
//   var letterCount = 1;
//   var x = 1;
//   var waiting = false;
//   var target = document.getElementById(id)
//   target.setAttribute('style', 'color:' + colors[0])
//   window.setInterval(function() {

//     if (letterCount === 0 && waiting === false) {
//       waiting = true;
//       target.innerHTML = words[0].substring(0, letterCount)
//       window.setTimeout(function() {
//         var usedColor = colors.shift();
//         colors.push(usedColor);
//         var usedWord = words.shift();
//         words.push(usedWord);
//         x = 1;
//         target.setAttribute('style', 'color:' + colors[0])
//         letterCount += x;
//         waiting = false;
//       }, 1000)
//     } else if (letterCount === words[0].length + 1 && waiting === false) {
//       waiting = true;
//       window.setTimeout(function() {
//         x = -1;
//         letterCount += x;
//         waiting = false;
//       }, 1000)
//     } else if (waiting === false) {
//       target.innerHTML = words[0].substring(0, letterCount)
//       letterCount += x;
//     }
//   }, 120)
//   window.setInterval(function() {
//     if (visible === true) {
//       con.className = 'console-underscore hidden'
//       visible = false;

//     } else {
//       con.className = 'console-underscore'

//       visible = true;
//     }
//   }, 400)
// }