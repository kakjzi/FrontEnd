const h1 = document.querySelector(".heheheheh");

//if else
h1.onclick = (event) => {
    const clickedClass = "clicked";
    if (h1.className ===  clickedClass){
        h1.className ="";
    }else{
        h1.className = clickedClass;
    }
    console.log(h1.className);
};







