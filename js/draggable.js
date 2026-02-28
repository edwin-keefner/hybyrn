class Draggable {
    constructor() {
        this.target = null;
        this.movingTarget = null;
        this.x = null;
        this.y = null;
        this.oldX = null;
        this.oldY = null;
        this.targetX = null;
        this.targetY = null;
        this.draggable = 0;
        this.init();
    }

    init() {
        document.onclick = e => {
            e.preventDefault();
        }
        document.onmousedown = this.drag;
        document.onmouseup = this.link;
    }

    drag = (e) => {
        this.target = e.target;
        this.oldX = e.clientX;
        this.oldY = e.clientY; 

        if (document.getElementById(this.target.id + "_parent")) {
            this.movingTarget = document.getElementById(this.target.id + "_parent");
            this.draggable = 1;
            if (isNaN(parseInt(this.movingTarget.style.left))) {
                this.movingTarget.style.left = 0;
                console.log("bug");
            }
            if (isNaN(parseInt(this.movingTarget.style.top))) {
                this.movingTarget.style.top = 0;
                console.log("bug2");
            }
            this.x = e.clientX; 
            this.y = e.clientY;
            this.targetX = parseInt(this.movingTarget.style.left);
            this.targetY = parseInt(this.movingTarget.style.top);
            if (e.preventDefault) {
                e.preventDefault();
            }
            document.onmousemove = this.move; 
        }
    };
    
    move = (e) => {
        if (this.draggable === 1) {
            this.movingTarget.style.left = (this.targetX + (e.clientX - this.x)) + "px";
            this.movingTarget.style.top = (this.targetY + (e.clientY - this.y)) + "px";
            return false;
        }
    };

    link = (e) => {
        this.draggable = 0;
        if (Math.abs(this.oldX - e.clientX) <= 50 && Math.abs(this.oldY - e.clientY) <= 50) { // 50 is a buffer so clicks on links are responsive . probably will break a draggable window that's also a link but i dont have those yet or plan on having those
            if (e.target.parentElement && typeof e.target.parentElement.href !== "undefined") {
                if (e.target.parentElement.target !== '_blank') {
                    window.open(e.target.parentElement.href, '_self');
                } else {
                    window.open(e.target.parentElement.href, '_blank');
                }
            }
            if (typeof e.target.href !== "undefined") {
                if (e.target.target !== '_blank') {
                    window.open(e.target.href, '_self');
                } else {
                    window.open(e.target.href, '_blank');
                }
            }
        }
    };
}

new Draggable();

try {
    const toDoList = document.getElementById("todo_window_header_parent");
    toDoList.style.left = "100px";
    toDoList.style.top = "100px";
} catch {};
