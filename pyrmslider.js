//pyramid JS functions

function pyramidSym() {
    var symbol = document.getElementById("symbol").value;
    return symbol   //grabs symbol from selector
    //alert(symbol);
}

function pyrHeight() {
   var hval = document.getElementById("slider").value; //grabs onInput value
   document.getElementById('output').innerHTML = hval; //outputs slider value to HTML
   return hval 
   //drawPyramid(hval);
   //console.log(val)
}

function drawPyramid() {
    symbol = pyramidSym()
    height = pyrHeight()
    document.getElementById("pyramid").innerHTML = " "

    for (var row = 0; row < height; row++) {
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += " "; 
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

        //rowStr = rowStr.replace(/\s/g, '\xC2\xA0') //replace space with unicode

        var para = document.createElement("P");
        var pyrRow = document.createTextNode(`${rowStr}`);
        para.appendChild(pyrRow); 
        
        document.getElementById("pyramid").appendChild(para);   
    }
}