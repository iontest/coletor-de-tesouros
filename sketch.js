var caminho,menino,dinheiro,diamantes,joias,espada;
var imgCaminho,imgMenino,imgDinheiro,imgDiamantes,imgJoias,imgEspada;
var colecaoTesouros = 0;
var dinheiroG,diamantesG,joiasG,grupoEspada;
var fim,fim1;
//Estados de jogo
var JOGAR=1;
var ENCERRAR=0;
var estadoJogo=1;

function preload(){
  imgCaminho = loadImage("Road.png");
  imgMenino = loadAnimation("Runner-1.png","Runner-2.png");
  imgDinheiro = loadImage("cash.png");
  imgDiamantes = loadImage("diamonds.png");
  imgJoias = loadImage("jwell.png");
  imgEspada = loadImage("sword.png");
  fim1 = loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// movendo o plano de fundo
caminho=createSprite(200,200);
caminho.addImage(imgCaminho);
caminho.velocityY = 4;

  

//criando o menino correndo
menino = createSprite(70,580,20,20);
menino.addAnimation("SahilRunning",imgMenino);
menino.scale=0.08;
  
fim=createSprite(200, 300, 10, 10)
fim.addImage(fim1);
fim.scale=0.7;  
fim.visible=false;

  
  
dinheiroG=new Group();
diamantesG=new Group();
joiasG=new Group();
grupoEspada=new Group();

}

function draw() {

  if(estadoJogo===JOGAR){
  background(0);
  menino.x = World.mouseX;
  
  edges= createEdgeSprites();
  menino.collide(edges);
  
  //código para resetar o plano de fundo
  if(caminho.y > 400 ){
    caminho.y = height/2;
  }
  
    criarDinheiro();
    criarDiamantes();
    criarJoias();
    criarEspadas();

    if (dinheiroG.isTouching(menino)) {
      dinheiroG.destroyEach();
      colecaoTesouros=colecaoTesouros+5;
    }
    else if (diamantesG.isTouching(menino)) {
      diamantesG.destroyEach();
     colecaoTesouros=colecaoTesouros+100;
      
    }else if(joiasG.isTouching(menino)) {
      joiasG.destroyEach();
    colecaoTesouros=colecaoTesouros+15;
      

      
    }else{
      if(grupoEspada.isTouching(menino)) {

    estadoJogo=ENCERRAR;   
        
        
    }
  }
  
 if(estadoJogo===ENCERRAR){
   
   
 
 dinheiroG.setVelocityXEach(0);
 dinheiroG.setVelocityXEach(0);  
 
 diamantesG.setVelocityXEach(0);
 diamantesG.setVelocityXEach(0);   
 
 joiasG.setVelocityXEach(0);
 joiasG.setVelocityXEach(0);   
 
 fim.visible=true;  
   
 }  
    
   
    
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesouros: "+ colecaoTesouros,150,30);
  }

}

function criarDinheiro() {
  if (World.frameCount % 100 == 0) {
  var dinheiro = createSprite(Math.round(random(50, 350),40, 10, 10));
  dinheiro.addImage(imgDinheiro);
  dinheiro.scale=0.12;
  dinheiro.velocityY = 5;
  dinheiro.lifetime = 150;
  dinheiroG.add(dinheiro);
  }
}

function criarDiamantes() {
  if (World.frameCount % 500 == 0) {
  var diamantes = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamantes.addImage(imgDiamantes);
  diamantes.scale=0.03;
  diamantes.velocityY = 20;
  diamantes.lifetime = 150;
  diamantesG.add(diamantes);
}
}

function criarJoias() {
  if (World.frameCount % 200 == 0) {
  var joias = createSprite(Math.round(random(50, 350),40, 10, 10));
  joias.addImage(imgJoias);
  joias.scale=0.13;
  joias.velocityY = 10;
  joias.lifetime = 150;
  joiasG.add(joias);
  }
}

function criarEspadas(){
  if (World.frameCount % 150 == 0) {
  var espada = createSprite(Math.round(random(50, 350),40, 10, 10));
  espada.addImage(imgEspada);
  espada.scale=0.1;
  espada.velocityY = 15;
  espada.lifetime = 150;
  grupoEspada.add(espada);
  }
}