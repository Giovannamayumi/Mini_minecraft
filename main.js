var canvas = new fabric.Canvas("myCanvas");
var blocol = 30;
var blocoa = 30;
var playerx = 10;
var playery = 10;

var playerobj = "";
function playerupload() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerobj = Img;
        playerobj.scaleToWidth(200);
        playerobj.scaleToHeight(190);
        playerobj.set({
            top: playery,
            left: playerx

        });
        canvas.add(playerobj);
    });
}
function obejectupload(getimg) {
    fabric.Image.fromURL(getimg, function (Img) {
        blockobj = Img;
        blockobj.scaleToWidth(blocol);
        blockobj.scaleToHeight(blocoa);
        blockobj.set({
            top: playery,
            left: playerx

        });
        canvas.add(blockobj);
    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    tecla = e.keyCode;
    if (e.shiftKey == true && tecla == "80") {
        blocol = blocol + 10;
        blocoa = blocoa + 10;
        document.getElementById("largura").innerHTML = blocol;
        document.getElementById("altura").innerHTML = blocoa;
    }
    if (e.shiftKey == true && tecla == "77") {
        blocol = blocol - 10;
        blocoa = blocoa - 10;
        document.getElementById("largura").innerHTML = blocol;
        document.getElementById("altura").innerHTML = blocoa;
    }
    if (tecla == "38") {
        up();
    }
    if (tecla == "40") {
        down();
    }
    if (tecla == "37") {
        left();
    }
    if (tecla == "39") {
        right();
    }
    if (tecla == "87") {
        obejectupload("wall.jpg");
    }
    if (tecla == "71") {
        obejectupload("ground.png");
    }
    if (tecla == "76") {
        obejectupload("light_green.png");
    }
    if (tecla == "84") {
        obejectupload("trunk.jpg");
    }
    if (tecla == "82") {
        obejectupload("roof.jpg");
    }
    if (tecla == "89") {
        obejectupload("yellow_wall.png");
    }
    if (tecla == "68") {
        obejectupload("dark_green.png");
    }
    if (tecla == "85") {
        obejectupload("unique.png");
    }
    if (tecla == "67") {
        obejectupload("cloud.jpg");
    }
}

function up() {
    if (playery >= 0) {
        playery = playery - blocoa;
        canvas.remove(playerobj);
        playerupload();
    }
}
function down() {
    if (playery <= 500) {
        playery = playery + blocoa;
        canvas.remove(playerobj);
        playerupload();
    }
}
function left() {
    if (playerx >= 0) {
        playerx = playerx - blocol;
        canvas.remove(playerobj);
        playerupload();
    }
}
function right() {
    if (playerx <= 850) {
        playerx = playerx + blocol;
        canvas.remove(playerobj);
        playerupload();
    }
}
