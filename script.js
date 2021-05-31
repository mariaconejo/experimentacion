

// Variables
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
const maximusRadius =100;


// colores Array
// https://paletadecolores.online/neon/  paleta de color 

const colorArray = ['#c501e2','#2ef8a0','#f82d97','#fff','#e830ce'];
// registrar controladores de eventos de cambio de tamaño de la ventana

window.addEventListener('resize', function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
})

// pinta  los circulos 
function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)]; // asigna los colores a los circulos
    
    // pinta los circulos
	this.draw = function() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	}
    // velocidad del circulo
	this.speed = function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
		this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
		this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}
// crea los circulos 
let circleArray = [];

function init() {
	circleArray = [];
	for (let i = 0; i < 800; i++) {
		let radius = Math.random() * 30 + 1;
		let x = Math.random() * (innerWidth - radius * 4) + radius;
		let y = Math.random() * (innerHeight - radius * 4) + radius;
		let dx = (Math.random() - 3);
		let dy = (Math.random() - 3);
		circleArray.push(new Circle(x, y, dx, dy, radius));
	}
    console.log(circleArray);
}


function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);

	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].speed();
	}

}
init();
animate();