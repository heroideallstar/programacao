//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;
//----------------------------------------------
//Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
//----------------------------------------------
//Variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;
//----------------------------------------------
//Variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
//----------------------------------------------
//Placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;
//----------------------------------------------
function setup() {
  createCanvas(600, 400);
}
//----------------------------------------------
function mostrarBolinha(){
    circle(xBolinha, yBolinha, diametro);

};
function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
};
function verificaColisaoBorda(){
  
  if(xBolinha + raio > width || xBolinha -raio < 0){
    velocidadeXBolinha *= -1;
  };
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  };
};
function mostrarRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
};
function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  };
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  };
};
function verificarColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteComprimento 
    && yBolinha - raio < yRaquete + raqueteAltura
    && yBolinha + raio < yRaquete){
    velocidadeXBolinha *= -1;
  };  
};
function colisaoRaqueteBiblioteca(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
  };
};
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento/2 -30;
  yRaqueteOponente += velocidadeYOponente
};
function incluirPlacar(){
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26)
};
function marcarPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  };
  if (xBolinha < 10){
    pontosDoOponente += 1;
  };
};
//----------------------------------------------
function draw() {
  background(255, 220, 0);
  mostrarBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostrarRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificarColisaoRaquete();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar();
  marcarPonto();
}
