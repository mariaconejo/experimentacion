
// Variables
const canvas = document.querySelector('canvas');
const maximusRadius =100;
let circleArray = [];

// me devuelve la altura y ancho de la ventana 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// registrar controladores de eventos de cambio de tamaño de la ventana
window.addEventListener('resize', function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
})

// pinta  los circulos en la canvas
function Circle(x, y, dx, dy, radius) {
   // colores Array
   // https://paletadecolores.online/neon/  paleta de color 
   // se usa con this para crear varias instancias de los circulos
    const colorArray = ['#c501e2','#2ef8a0','#f82d97','#fff','#e830ce'];
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)]; // asigna los colores a los circulos
    
    // pinta los circulos
	this.draw = function() {
		const ctx = canvas.getContext('2d');
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

function init() {
	circleArray = [];
	for (let i = 0; i < 800; i++) { // me crea mas circulos
		let radius = Math.random() * 30 + 1; // modifica el tamaño
		// posicion 
		let x = Math.random() * (innerWidth - radius * 4) + radius;
		let y = Math.random() * (innerHeight - radius * 4) + radius;
		// velocidad
		let dx = (Math.random() - 5);
		let dy = (Math.random() - 5);
		circleArray.push(new Circle(x, y, dx, dy, radius));
	}
}


function animate() {
	const ctx = canvas.getContext('2d');
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);

	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].speed();
	}

}
init();
animate();