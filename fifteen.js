window.onload = function(){

   
    var pieces = document.querySelectorAll("#puzzlearea div"); // to select all puzzle pieces
    
      
        var posX=0; 
        var posY= 0;
    for(var z=0; z < pieces.length; z++){  // set layout of tiles
       
        pieces[z].setAttribute("class", "puzzlepiece") ;
        pieces[z].style.left= posX + 'px';
        pieces[z].style.top= posY + 'px';
        pieces[z].style.backgroundPosition= "-" + posX + "px " + "-" + posY + "px";
        if (posX < 300){
          posX+=100;
        }
        else
        {
            posX=0;
            posY+=100;
        }
    }
    
    var fromTop= "300px";
    var fromLeft= "300px";
    var pieceTop, pieceLeft; 
    
    var shufflebutton= document.getElementById('shufflebutton');
    shufflebutton.addEventListener("click", shuffle);
     for(var z=0; z < pieces.length; z++){
         
          (function(index) {
              
            pieces[index].addEventListener("mouseover", function(){
            validMove(this);
            });
            
            pieces[index].addEventListener("click", function(){
            if (validMove(this)){
                     move(pieces[index]); 
            }
            });
            
            pieces[index].addEventListener("mouseout", function(){
                       this.setAttribute("class", "puzzlepiece");
            });
          })(z);
          
     }
     
     
    function move(puzzlepiece){
            topPiece=puzzlepiece.offsetTop;
            leftPiece=puzzlepiece.offsetLeft;
            
            
            puzzlepiece.setAttribute("id", "selected");
            $('#selected').animate(
                    {backgroundImage: "url(background.jpg)",
                	border: "2px solid black",
                	height: "96px",
                	lineHeight: "96px",
                	position: "absolute",
                	textAlign: "center",
                	verticalAlign: "middle",
                	width: "96px",
                    left: fromLeft,
                    top: fromTop
                    
                    });
                  
           
              puzzlepiece.style.top = fromTop;
              puzzlepiece.style.left = fromLeft;
              fromTop= topPiece + "px";
              fromLeft=leftPiece + "px";
              puzzlepiece.removeAttribute("id");
              
             
          
    }
          
    
    function validMove(puzzlepiece){
                topPiece=puzzlepiece.offsetTop;
                leftPiece= puzzlepiece.offsetLeft;
                var top= topPiece + "px";
                var left= leftPiece + "px";
               
                var testleft= Math.abs(parseInt(left) - parseInt(fromLeft));
                if (top == fromTop && testleft==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        return true;
                      
                       }
                        
                var testright= Math.abs(parseInt(top) - parseInt(fromTop));
                if (left == fromLeft && testright==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        return true;
                       
                       }
        
    }
    
    function shuffle(){
        var choice;
        for (var i=0; i<100; i++){ 
                choice=  Math.floor(Math.random() * 15);
                move(pieces[choice]);
        }
        
       
    }
    
};