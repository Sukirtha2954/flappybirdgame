var myGamePiece;
var myObstacles = [];
var myScore;
var flappy = "https://www.pngitem.com/pimgs/b/184-1842507_flappy-bird-png.png" //data:image/png;base64,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

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, flappy, 10, 120, "image");
    myScore = new component("30px", "Consolas", "#5f27cd", 280, 40, "text");
    
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 600;
        this.canvas.height = 370;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
  if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } 
        else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}