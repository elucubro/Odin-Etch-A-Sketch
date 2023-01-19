function gridsetup(){
    const gridcontainer = document.createElement('div')
    gridcontainer.classList.add("gridcontainer")
    for (let i = 0; i < 256; i++ ) {
        const gridelement = document.createElement('div');
        gridelement.classList.add('gridelement')
        gridcontainer.appendChild(gridelement)
        gridelement.addEventListener('click', function() {colorchange(gridelement)})
        gridelement.addEventListener('contextmenu', function() {colorchange2(gridelement)})
    }
    document.body.appendChild(gridcontainer)
}
// I won't show for space but test1 & 2 output 'meep1/2' to console.log
function colorchange(objitem){
    objitem.classList.add("bluey")
}

function colorchange2(objitem){
    objitem.classList.remove("bluey");
}

function test1(){
    console.log("meep");
}
function test2(){
    console.log("meep1");
}



gridsetup()