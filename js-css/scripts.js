function gridsetup(){
    const gridcontainer = document.createElement('div')
    gridcontainer.classList.add("gridcontainer")
    for (let i = 0; i < 256; i++ ) {
        const gridelement = document.createElement('div');
        gridelement.classList.add('gridelement')
        gridcontainer.appendChild(gridelement)
        gridelement.addEventListener(onmouseenter, function() {test1()})
        gridelement.addEventListener(onmouseleave, function() {test2()})
    }
    document.body.appendChild(gridcontainer)
}
// I won't show for space but test1 & 2 output 'meep1/2' to console.log
function colorchange(title){
    title.target.style.backgroundColor(`hsl(${Math.random() * 360}, 100%, 50%`);
}

function colorchange2(title){
    title.target.style.backgroundColor('#A9A9A9');
}

function test1(){
    console.log("meep");
}
function test2(){
    console.log("meep1");
}



gridsetup()