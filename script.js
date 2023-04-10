canvas=new fabric.Canvas('myCanvas');
playerX=10;
playerY=10;
blockImageWidth=30;
blockImageHeight=30;
playerObject="";
blockImageObject="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(140);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);
    })
}
function new_image(getImage){
    fabric.Image.fromURL(getImage,function (Img){
        blockImageObject=Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(blockImageObject);
    })
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(e.shiftKey && keypressed=='80'){
        blockImageWidth+=10;
        blockImageHeight+=10;
        document.getElementById("current_width").innerHTML=blockImageWidth;
        document.getElementById("current_height").innerHTML=blockImageHeight;
    }
    if(e.shiftKey && keypressed=='77'){
        blockImageWidth-=10;
        blockImageHeight-=10;
        document.getElementById("current_width").innerHTML=blockImageWidth;
        document.getElementById("current_height").innerHTML=blockImageHeight;
    }
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
    if(keypressed=='87'){
        new_image('wall.jpg');
        console.log("w");
    }
    if(keypressed=='71'){
        new_image('ground.png');
        console.log("g");
    }
    if(keypressed=='76'){
        new_image('light_green.png');
        console.log("l");
    }
    if(keypressed=='84'){
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keypressed=='82'){
        new_image('roof.jpg');
        console.log("r");
    }
    if(keypressed=='89'){
        new_image('yellow_wall.png');
        console.log("y");
    }
    if(keypressed=='68'){
        new_image('dark_green.png');
        console.log("d");
    }
    if(keypressed=='67'){
        new_image('cloud.jpg');
        console.log("c");
    }
    if(keypressed=='85'){
        new_image('unique.png');
        console.log("u");
    }
}
function up(){
    if(playerY>=0){
        playerY-=blockImageHeight;
        canvas.remove(playerObject);
        player_update();
    }
}
function down(){
    if(playerY<=460){
        playerY+=blockImageHeight;
        canvas.remove(playerObject);
        player_update();
    }
}
function left(){
    if(playerX>=0){
        playerX-=blockImageWidth;
        canvas.remove(playerObject);
        player_update();
    }
}
function right(){
    if(playerX<=860){
        playerX+=blockImageHeight;
        canvas.remove(playerObject);
        player_update();
    }
}