var plan = 
    ["##########################",
     "##oo    #   #       o    ##",
     "##                      ##",
     "##      ####            ##",
     "##                      ##",
     "##    ##    #  #   ##   ##",
     "##     #                ##",
     "##  o   o   #           ##",
     "##            ##        ##",
     "##########################",
    ]

function Vector(x,y){
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(vector){
    return new Vector(this.x+vector.x,this.y+vector.y);
}

function Grid(width, height) {
    this.space = new Array(width * height);
    this.width = width;
    this.height = height;
}

Grid.prototype.isInside = function(vector) {
    return vector.x < this.width && vector.x > 0 && vector.y <this.height && this.y >0;
}

Grid.prototype.get = function(vector) {
    return this.space[vector.y*this.width+vector.x];
}

Grid.prototype.set = function(vector,value) {
    this.space[vector.y*this.width+vector.x] = value;
}

//  value, new Vector(x,y)
Grid.prototype.forEach = function(f,context) {
    for (let x = 0;x<this.width;x++) {
        for(let y = 0;y<this.height;y++) {
            var value = this.space[x+y*this.width];
            if (value!=null) {
                //???
                f.call(context, value, new Vector(x,y));
            }
        }
    }
}

directions = {
    'n':new Vector(0,-1),
    's':new Vector(0,1),
    'w':new Vector(-1,0),
    'e':new Vector(1,0),
    'ne':new Vector(1,-1),
    'se':new Vector(1,1),
    'sw':new Vector(-1,1),
    'nw':new Vector(-1,-1)
}

function randomArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var directionArray = ['n','e','s','w','ne','se','sw','nw'];

function BouncingCritter() {
    this.direction = randomArray(directionArray);
}

BouncingCritter.prototype.act =function(view) {
    if (view.look(this.direction) != " ") {
        this.direction = view.find(" ") || 's';
    }
    return {
        type:'move',
        direction:this.direction
    }
}

function elementFromChar(ch, legend) {
    if (ch == " ") {
        return null;
    }
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
}

function charFromElement(element) {
    if (element == null) {
        return " ";
    }
    return element.originChar;
}

function World(map, legend) {
    grid = new Grid(map[0].length,map.length);
    this.grid = grid;
    this.legend = legend;

    //遍历 赋值对象
    map.forEach((value,index) => {
        for (let i = 0;i < value.length;i++) {
            this.grid.set(new Vector(i,index),elementFromChar(value[i], legend));
        }
    });
}

World.prototype.letAct = function(crriter, vector) {
    var action = crriter.act(new View(this, vector))
    if ( action && action.type == 'move') {
       var dest = this.checkDestination(action, vector);
       if (dest && this.grid.get(dest) == null) {
           this.grid.set(vector, null);
           this.grid.set(dest, crriter);
       }
       
    }

}
var acted = []
World.prototype.turn = function() {
   
    this.grid.forEach(function(element, vector) {
        if (element.act && acted.indexOf(element) == -1) {
            acted.push(element);
            this.letAct(element,vector);
        }
    },this)
}
World.prototype.checkDestination = function(action, vector) {
    if (directions.hasOwnProperty(action.direction)) {
        var dest = vector.plus(directions[action.direction]);
        if (this.grid.isInside(dest)) {
            return dest;
        }
    }
}

World.prototype.toString = function() {
    let output = ""
    for (let y=0;y<this.grid.height;y++) {
        for (let x=0;x <this.grid.width;x++) {
            output += charFromElement(this.grid.get(new Vector(x,y)));
        }
        output+='\n';
    }
    return output;
}

function View(world, vector) {
    this.world = world;
    this.vector = vector
}

View.prototype.look = function(dir) {
    var target = this.vector.plus(directions[dir]);
    if (this.world.grid.isInside(target)) {
        return charFromElement(this.world.grid.get(target));
    } else {
        return "#";
    }
}

View.prototype.findAll = function(ch) {
    var dirs = [];
    for (let dir in directions) {
        if (this.look(dir) == ch) {
            dirs.push(dir)
        }
    }
    return dirs;
}

View.prototype.find = function(ch) {
    let found = this.findAll(ch);
    if (found.length == 0) {
        return null;
    }
    return randomArray(found);
}   

function Wall() {
    
}

var world = new World(plan,{'#':Wall,'o':BouncingCritter})
for (var i=0;i<5;i++) {
    world.turn();
    console.log(world.toString());
}