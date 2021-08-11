const h1 = document.querySelector(".heheheheh");

//if else
h1.onclick = (event) => {
    const curColor = h1.style.color;
    let newColor;
    
    if(curColor === "blue"){
        newColor ="tomato";
    }else {
        newColor="blue";
    }
    h1.style.color = newColor;
};





