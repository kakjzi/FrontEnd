const title = document.querySelector(".heheheheh");

function handleTitleClick(){
    title.style.color="blue";
}

function hihihi(){
    console.log("mouse is here");
}

function df2(){
    console.log("mouse out");
    title.style.color="red";
}


console.dir(title)
title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",hihihi);
title.addEventListener("mouseleave",df2);




