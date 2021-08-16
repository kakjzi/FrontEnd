// Don't Edit className ,style in js
// ex1) [tagName].style.color ="blue"
// ex2) [tagName].className = [className];


//const h1 = document.querySelector("h1");
// h1.onclick = (event) => {
//     const clickedClass = "clicked";
    
//     if (h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     }else{
//         h1.classList.add(clickedClass);
//         console.log(h1.className);
//     }
   
// };
const h1 = document.querySelector("h1");

h1.addEventListener('click', (event)=>{
    h1.classList.toggle("clicked");
}) ;

