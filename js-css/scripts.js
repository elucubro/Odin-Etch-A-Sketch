function gridsetup(){
    const gridcontainer = document.createElement('div')
    gridcontainer.classList.add("gridcontainer")
    for (let i = 0; i < 256; i++ ) {
        const gridelement = document.createElement('div');
        gridelement.classList.add('gridelement')
        gridcontainer.appendChild(gridelement)
        gridelement.addEventListener(onmouseenter, function() {colorchange(gridelement)})
        gridelement.addEventListener(onmouseleave, function() {colorchange2(gridelement)})
    }
    document.body.appendChild(gridcontainer)
}

function colorchange(title){
    title.target.style.backgroundColor(`hsl(${Math.random() * 360}, 100%, 50%`);
}

function colorchange2(title){
    title.target.style.backgroundColor('#A9A9A9');
}


gridsetup()