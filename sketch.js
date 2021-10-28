var arco , flecha,  planoFundo;
var imagemArco, imagemFlecha, imagem_balaoVerde, imagem_balaoVermelho, imagem_balaoRosa ,imagem_balaoAzul, imagemPlanoFundo;
var pontuacao;
var grupoFlecha, bVermelho, bAzul, bVerde, bRosa;
var pontuacao=0;

function preload(){
  
  imagemPlanoFundo = loadImage("background0.png");
  imagemFlecha = loadImage("arrow0.png");
  imagemArco = loadImage("bow0.png");
  imagem_balaoVermelho = loadImage("red_balloon0.png");
  imagem_balaoAzul = loadImage("blue_balloon0.png");
  imagem_balaoVerde = loadImage("green_balloon0.png");
  imagem_balaoRosa = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //criando plano de fundo background
  cenario = createSprite(0,0,400,400);
  cenario.addImage(imagemPlanoFundo);
  cenario.scale = 2.5
  
  // criando arco para lançar a fecha
  arco = createSprite(380,220,20,50);
  arco.addImage(imagemArco); 
  arco.scale = 1;
  
  pontuacao = 0;
  
  grupoFlecha = createGroup();
  bVermelho = createGroup();
  bAzul = createGroup();
  bVerde = createGroup();
  bRosa = createGroup();
}

function draw() {
 background(0);
  
  

    cenario.velocityX = -3 

    if (cenario.x < 0){
      cenario.x = cenario.width/2;
    }
  
 
  arco.y = World.mouseY
  
   
  if (keyDown("space")) {
    criarFlecha();
    
  }
  
  
  var selecionar_balao = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (selecionar_balao == 1) {
      balaoVermelho();
    } else if (selecionar_balao == 2) {
      balaoAzul();
    } else if (selecionar_balao == 3) {
      balaoVerde();
    } else if (selecionar_balao == 4) {
      balaoRosa();
    }
  }
  
  if (grupoFlecha.isTouching(bVermelho)) {
    bVermelho.destroyEach();
    grupoFlecha.destroyEach();
    pontuacao=pontuacao+1;
    
  }
  
  if (grupoFlecha.isTouching(bAzul)) {
    bAzul.destroyEach();
    grupoFlecha.destroyEach();
    pontuacao=pontuacao+2;
    
  }
  
  if (grupoFlecha.isTouching(bVerde)) {
    bVerde.destroyEach();
    grupoFlecha.destroyEach();
    pontuacao=pontuacao-3;
    
  }
  
  if (grupoFlecha.isTouching(bRosa)) {
    bRosa.destroyEach();
    grupoFlecha.destroyEach();
    pontuacao=pontuacao+10;
    
  }
  
  drawSprites();
  text("Pontos:" + pontuacao,270,30);
}


// Criando flechas para o arco
 function criarFlecha() {
  var flecha= createSprite(100, 100, 60, 10);
  flecha.addImage(imagemFlecha);
  flecha.x = 360;
  flecha.y=arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
  grupoFlecha.add(flecha);
}


function balaoVermelho() {
  var vermelho = createSprite(0,Math.round(random(20, 370)), 10, 10);
  vermelho.addImage(imagem_balaoVermelho);
  vermelho.velocityX = 8;
  vermelho.lifetime = 150;
  vermelho.scale = 0.1;
  bVermelho.add(vermelho);
}

function balaoAzul() {
  var azul = createSprite(0,Math.round(random(50,350)), 20, 20);
  azul.addImage(imagem_balaoAzul);
  azul.velocityX = 8;
  azul.lifetime = 150;
  azul.scale = 0.1;
  bAzul.add(azul);
}

function balaoVerde() {
  var verde = createSprite(0,Math.round(random(10,300)), 10, 10);
  verde.addImage(imagem_balaoVerde);
  verde.velocityX = 3;
  verde.lifetime = 150;
  verde.scale = 0.1;
  bVerde.add(verde);
}

function balaoRosa() {
  var rosa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  rosa.addImage(imagem_balaoRosa);
  rosa.velocityX = 3;
  rosa.lifetime = 150;
  rosa.scale = 0.1;
  bRosa.add(rosa);
}
