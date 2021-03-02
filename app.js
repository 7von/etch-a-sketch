/*--  Variables  --*/
let tbl = document.getElementById('grid');

let inputValue = document.getElementById('slider')//assign inputValue to the ID 
inputValue.oninput = function() {   //this will update our slider value
    inputValue = this.value
}

let blackBtn = document.getElementById('blackBtn').addEventListener('click', () => {
    colorBtn.removeEventListener
})

let colorBtn = document.getElementById('colorBtn').addEventListener('click', () => {
    square.changeColor()
});

let reset = document.getElementById('reset')

/*--  Functions  --*/
//creates the grid when we first load up the page
makeGrid = (a) => {
    for (let i = 0; i < a; i++){
        let row = document.createElement('tr');
        row.id = "row" + i;
        tbl.appendChild(row);
        let roww = document.getElementById('row' + i);
        
        for (var j = 0; j < a; j++) {
            let square = document.createElement('td');
            square.id = "square";
            square.addEventListener("mouseover", (event) => 
                {event.target.style.backgroundColor = 'black';})

            roww.appendChild(square);
        }
    }
}

//Removes the nodes that are currently in the grid so we do not keep adding
removeAllChildNodes = (parent) => {
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    }

//Function change the grid based on the range slider
changeGrid = (a) => {
    removeAllChildNodes(tbl); //function reset the grid 
    makeGrid(a)
}
//Function change the color of selected square to a specific color


/*--  Event Listener  --*/
inputValue.addEventListener("click", () => changeGrid(inputValue));

reset.addEventListener('click', () => {
    if (inputValue ){
        changeGrid(inputValue)
    }    
  }
)
    
makeGrid(16); //Creates the grid when we load up the page