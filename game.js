
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = '1280';
canvas.height = '630';
context.fillStyle = "#145C66";
context.fillRect(0, 0, canvas.width, canvas.height);

const background0 = new Image();
background0.src = 'square.jpg';


const background1 = new Image();
background1.src = '7verq.jpg';

const backgroundy = new Image();
backgroundy.src = 'gyumri.jpg';

const background2 = new Image();
background2.src = 'shiraz.jpg';

const background3 = new Image();
background3.src = 'church.jpg';

const background4 = new Image();
background4.src = 'dzit.jpg';

const background5 = new Image();
background5.src = 'gitc.jpg';

const background6 = new Image();
background6.src = '58.jpg';

const background7 = new Image();
background7.src = '51.jpg';

const background8 = new Image();
background8.src = 'polozmukuch.jpg';

const background9 = new Image();
background9.src ='tatron.jpg';

const background10 = new Image();
background10.src ='KumayriDistrict.jpg';

const background11 = new Image();
background11.src ='gyumri6.jpg';

const background12 = new Image();
background12.src ='fortress.jpg';

const background13 = new Image();
background13.src ='kirovbuilding.jpg';

const background14 = new Image();
background14.src ='tun.jpg';

const background15 = new Image();
background15.src = 'station.jpg';

const background16 = new Image();
background16.src = 'welcome.jpg';

const tourist= new Image();
tourist.src = 'http://knowmadsapp.com/wp-content/uploads/2016/08/knowmads-traveler.png';
const rock = new Image();
rock.src = 'https://png2.kisspng.com/20180516/ffe/kisspng-animation-club-penguin-stone-youtube-5afc5e504124f3.7001558815264886562668.png?fbclid=IwAR190PbAmgtcia2qvJZhE5XmkL5WVcsLcX0mQCloG7DqNhBHN4_bFO2bLhM';

const rand = function(num) {
  return Math.floor(Math.random() * num);
};


const createOpsticals = function (count) {

	const obstacles  =[];
	for (let i=0; i< count; i++) {
	 const obstacle = {
		x: rand(canvas.width),
		y: 560,
		width: 75,
		height: 75,
		image: rock
		}	
		obstacles.push(obstacle)
	}
	return	obstacles;
};


let slide =0;
let data = [
{
	background: background0,
	obstacles: createOpsticals(2)
},{
	background: background1,
	obstacles: createOpsticals(2)
},{
	background: backgroundy,
	obstacles: createOpsticals(2)
},{
	background: background2,
	obstacles: createOpsticals(2)
},{
	background: background3,
	obstacles: createOpsticals(2)
},{
	background: background4,
	obstacles: createOpsticals(2)
},{
	background: background5,
	obstacles: createOpsticals(2)
},{
	background: background6,
	obstacles: createOpsticals(2)
},{
	background: background7,
	obstacles: createOpsticals(2)
},{
	background: background8,
	obstacles: createOpsticals(2)
},{
	background: background9,
	obstacles: createOpsticals(2)
},{
	background: background10,
	obstacles: createOpsticals(3)
}, {
	background: background11,
	obstacles: createOpsticals(2)
}, {
	background: background12,
	obstacles: createOpsticals(3)
},{
	background: background13,
	obstacles: createOpsticals(2)
},{
	background: background14,
	obstacles: createOpsticals(3)
},{
	background: background15,
	obstacles: createOpsticals(2)
},{
	background: background16,
	obstacles: createOpsticals(3)
}
]


const hero = {
	x: 0,
	y: 335,
	width: 200,
	height: 300,
	xDelta: 0,
	yDelta: 0,
	image: tourist,
	gravity: 300,
}; 

 
 const leftKey = 37;
 const upKey = 38;
 const rightKey = 39;
 const downKey = 40;
 const spaceKey = 32;
document.addEventListener('keydown', function(event) {
	if(event.keyCode === rightKey) {
		hero.xDelta = 5; 
	} 
	if(event.keyCode === spaceKey) {
		jump();
	}
        });



//jokes 
let jokeArr = ['joke1', 'joke2', 'joke3', 'joke4', 'joke5', 'joke6', 'joke7', 'joke8', 'joke9', 'joke10','joke11', 'joke12', 'joke13', 'joke14', 'joke15', 'joke16', 'joke17', 'joke18' ];
/*if(hero.x + hero.width === 1270 || hero.x + hero.width === 3830 || hero.x + hero.width === 6390 || hero.x + hero.width === 8950 || hero.x + hero.width === 11510 || hero.x + hero.width === 14070 || hero.x + hero.width === 16630 || hero.x + hero.width === 19190 || hero.x + hero.width === 23030) {
	alert(jokeArr[i]);
	jokeArr.splice(i, 1);
}; */


// window.onload = function () {
// 	window.scrollTo(1280, 0);
// 	window.onscroll = function () {
// 		let doc = document.body
// 		pageSize = (doc.scrollHeight - doc.clientHeight);
// 		percentageScrolled = Math.floor((scrollPosition / pageSize) * 1); 

//      if (percentageScrolled >= 1270){ // if the percentage is >= 50, scroll to top
//        window.scrollTo(1270,0); 
//      } 
//    }; 
// 	}


const jump = () => {
	if(hero.yDelta !== 0) return;
	hero.yDelta = -6;
	setTimeout(() => {
		hero.yDelta = 6;
		setTimeout(() => {
			hero.yDelta = 0;
		}, 800)
	}, 800) 
};

const intersect = (rect1, rect2) => {
        const x = Math.max(rect1.x, rect2.x),
            num1 = Math.min(rect1.x + rect1.w, rect2.x + rect2.w),
            y = Math.max(rect1.y, rect2.y),
            num2 = Math.min(rect1.y + rect1.h, rect2.y + rect2.h);
        return (num1 >= x && num2 >= y);
    };

const draw = function() {

let currBackground =data[slide].background
let currentOps = data[slide].obstacles
	
	context.drawImage(currBackground, 0,0, canvas.width, canvas.height);
	for(let k = 0; k < currentOps.length; k++) {
		context.drawImage(currentOps[k].image, currentOps[k].x, currentOps[k].y, currentOps[k].width, currentOps[k].height)
	}
	context.drawImage(hero.image, hero.x, hero.y, hero.width, hero.height);
}; 
 
  
const update = function() {
	hero.x += hero.xDelta;
	hero.y += hero.yDelta;

let currentOps = data[slide].obstacles;
	currentOps.forEach(ops=>{
		if(intersect(hero,ops))
			alert("game over")
		if(hero.x + hero.width <= ops.x + ops.width  && hero.x + hero.width  >= ops.x){
			// alert("iii")
		}
	})
}

 const loop = function () {
 	draw();
 	if(hero.x + hero.width <= canvas.width) {
	update();
 	intersect();
 	// collision();
	}else{
		slide++
		hero.x = -40;
		alert("joke")
	}	
	requestAnimationFrame(loop);
 };
   loop();








