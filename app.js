/*--  Variables  --*/
let tbl = document.getElementById('grid');
let inputValue = document.getElementById('slider')//assign inputValue to the ID 
inputValue.oninput = function() {   //this will update our slider value
    inputValue = this.value
}
let colorBtn = document.getElementById('colorBtn').addEventListener('click', () => {
    square.changeColor()
});
let reset = document.getElementById('reset')

/*--  Functions  --*/
//creates the grid when we first load up the page
makeGrid = () => {
    for (let i = 0; i < 16; i++){
        let row = document.createElement('tr');
        row.id = "row" + i;

        tbl.appendChild(row);
        let roww = document.getElementById('row' + i);
        
        for (var j = 0; j < 16; j++) {
            let square = document.createElement('td');
            square.id = "square";
            square.addEventListener("mouseover", function(event){
                event.target.style.backgroundColor = 'black';})
            
            roww.appendChild(square);
        }
    }
}

//Function change the grid based on the range slider
changeGrid = (a) => {
    let tbl = document.getElementById('grid');
    removeAllChildNodes(tbl); //function reset the grid 

    //Nested for loop creates the grid
    for (let i = 0; i < a; i++){
        let row = document.createElement('tr');
        row.id = "row" + i;
        tbl.appendChild(row);

        let roww = document.getElementById('row' + i);
        
        for (var j = 0; j < a; j++) {
            let square = document.createElement('td');
            square.id = "square";
            square.addEventListener("click", function(event){
                square.addEventListener("mouseover", (e) => {event.target.style.backgroundColor = 'black';})
            })
            roww.appendChild(square);
        }
      }
    }

//Removes the nodes that are currently in the grid
removeAllChildNodes = (parent) => {
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    }

/*--  Event Listener  --*/
inputValue.addEventListener("click", () => changeGrid(inputValue));

reset.addEventListener('click', () => {
        a = prompt("How many sides would you like on each side?(1-16):")
        if (a <= 16 && a >= 0){
            changeGrid(a)
        } else {return null}
    });
    
makeGrid(); //Creates the grid when we load up the page