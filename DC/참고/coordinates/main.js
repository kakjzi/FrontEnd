const vertical =document.querySelector('.vertical');
const horizontal =document.querySelector('.horizontal');
const target =document.querySelector('.target');
const tag =document.querySelector('.tag');


window.onload = (event)=>{
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.Height / 2;
    console.log(targetRect)

    document.addEventListener('mousemove',event =>{
        const x = event.clientX;
        const y = event.clientY;

        vertical.style.transform =`translateX(${x}px)`;
        horizontal.style.transform =`translateY(${y}px)`;
        target.style.transform = `translate(${x-targetHalfWidth}px, ${
            y - targetHalfHeight
        }px)`;
        tag.style.transform = `translate(${x+20}px, ${y+20}px)`;
        tag.innerText = `${x}px, ${y}px`;
});
}
const h2 = document.createElement('h2');
h2.setAttribute('class', 'hi');
h2.text
