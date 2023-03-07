//obtener la referencia del lienzo con fabric.Canvas() y almacenarlo dentro de la variable canvas.

var canvas = new fabric.Canvas('myCanvas');

// posición donde aparecerá el jugador

//En fabric.js, se almacenan las imágenes en el lienzo como objetos, así que
//conforme añadimos objetos, también podemos eliminarlos. Esto solo
//significa que podemos añadir y eliminar imágenes si las utilizamos como objetos.

player_x = 10;
player_y = 10;


block_image_width = 30;
block_image_height = 30;

// Ahora define la variable player_objetct para almacenar el objeto de la imagen del jugador.
var player_object= "";
var block_image_object= "";

//Ahora añade la función player_update() para añadir la imagen del jugador. Esta
//función cargará la imagen del jugador en el lienzo.
function player_update()
{
	//Define la función fabric.Image.fromURL() de fabric.js para subir una imagen al lienzo.
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	//El código anterior es un código preestablecido para añadir imágenes al lienzo.

	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

//Presiona las teclas shift y p = 80 ASCII al mismo tiempo en el teclado, después presiona
//cualquiera de las teclas anteriores y muestra cómo el tamaño de los bloques se
//incrementa. También muestra que las etiquetas Ancho y Altura incrementan.

if(e.shiftKey == true && keyPressed == '80')
{
	console.log("Se presiona p y shift al mismo tiempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}

//Presiona las teclas shift y m = 77 ASCII al mismo tiempo en el teclado, después presiona
//cualquiera de las teclas anteriores y muestra cómo el tamaño de los bloques
//disminuye. También muestra que las etiquetas Ancho y Altura disminuyen.

if(e.shiftKey && keyPressed == '77')
{
	console.log("Se presiona m y shift al mismo tiempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	if(keyPressed == '87')
	{
		new_image('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71')
	{
		new_image('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		new_image('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		new_image('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		new_image('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		new_image('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		new_image('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		new_image('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		new_image('cloud.jpg'); 
		console.log("c");
	}
	
}

//La declaración anterior dice que player_y se actualizará conforme
//player_y - block_image_height
//Por ejemplo:
//player_y = 50 y block_image_height = 30
//Cuando se presiona la flecha hacia arriba, queremos que el jugador se
//mueva hacia arriba sobre el eje y. Es por eso que escribimos player_y =
//player_y - block_image_height.
//Esto significa player_y = 50 -30, así que player_y será 20,
//Así, la nueva posición en las coordenadas y del jugador es 20, lo que
//mostrará la imagen del jugador más arriba de su posición actual.

function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha izquierda, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha derecha, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
