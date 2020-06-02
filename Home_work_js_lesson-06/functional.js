'use strict'

function robot(name, toDo) {

	this.name = name;
	this.toDo = toDo;

	this.work = function() {
		console.log('I am ' + this.name + ' , i ' + this.toDo);
	}
}

function coffeeRobot(name, toDo) {
	robot.call(this);
	this.name = name;
	this.toDo = toDo;
}

function robotDancer(name, toDo) {
	robot.call(this);
	this.name = name;
	this.toDo = toDo;
}

function robotCoocker(name, toDo) {
	robot.call(this);
	this.name = name;
	this.toDo = toDo;
}

var r = new robot('Robot', 'just to work');
r.work();

var cr = new coffeeRobot('coffeeRobot', 'to brew coffee');
cr.work();

var rd = new robotDancer('robotDancer', 'just to dance');
rd.work();

var rc = new robotCoocker('robotCoocker', 'just to coock');
rc.work();

console.log('---------------------------------------');

var robots = [ r, cr, rd, rc ];
for (var i = 0; i < robots.length; i++) {
	robots[i].work();
}
