let pantalla = 1;
let mapa1;
let mapa2;
let mapa3;
let personaje;
let enemigo;
let pImg;
let eImg;
let enemigos = [];
let inicioJuego = false;
let terminoJuego = false;
let nivel1_Termino = false;
let nivel2_Termino = false;
let nivel3_Termino = false;
let nivel1_Inicio = false;
let nivel2_Inicio = false;
let nivel3_Inicio = false;
let pantallaInicio=true;


function setup() {
  mapa1 = loadImage('img/mapa/1.png');
  mapa2 = loadImage('img/mapa/2.png');
  mapa3 = loadImage('img/mapa/3.png');
  pImg = loadImage('img/personaje/pj.png');
  eImg = loadImage('img/fantasma/fm.png');
  createCanvas(1280,720);
  personaje = new Personaje;
  enemigo = new Enemigo;
  
}

function draw() {
  
//  console.log(pantalla)
 if (pantallaInicio=true){
        inicio();
      if(keyCode===ENTER){
        nivel1_Inicio=true;
        inicioJuego=true;

      }
 }

 if(inicioJuego){
       if(keyIsPressed){
      if( key === 'w'){
        personaje.moveUp();
      }
      if(key === 'd'){
        personaje.moveRight();
      }
      if(key === 's'){
        personaje.moveDown();
      }
      if(key === 'a'){
        personaje.moveLeft();
      }   
    }
  }

  if (nivel1_Inicio){
      
      const nivel = new nivel1()
      nivel1()
      if (nivel.gane()){
        nivel1_Termino=true
        nivel2_Inicio=true
        nivel1_Inicio=false
    }
      if(nivel.colision()){
          perder();
          inicioJuego=false
      }
  }


  // console.log(pantalla)
   
 


  
  if (nivel2_Inicio){
    const nivel = new nivel2()
    nivel2()
    if (nivel.gane()){
      nivel2_Termino=true
      nivel3_Inicio=true
      nivel2_inicio=false
      
  }
    if(nivel.colision()){
        perder();
        inicioJuego=false
    }
}



if (nivel3_Inicio){
  const nivel = new nivel3()
  nivel3()
  if (nivel.gane()){ 
    nivel3_Termino=true
}
  if(nivel.colision()){
      perder();
      inicioJuego=false
  }
}
  
  // text( mouseX + "-" + mouseY, width/2, height/2);
}
