// Função para deixar a imagem da logo da marca numa versão mais escura
function logoDarker() {
    let imagem = document.getElementById('opalineLogo'); // pega a tag de imagem
    let caminho = imagem.src; // pega o caminho da imagem
    let posicaoUltimaBarra = caminho.lastIndexOf('/'); // pega a posição da última barra ('/') do caminho da imagem
    let arquivo = caminho.substring(posicaoUltimaBarra + 1);

    if (arquivo == 'logoOpalineWhite.png')
        imagem.src = 'midia/logoOpalineWhiteHover.png';
}

function logoNormal() {
    let imagem = document.getElementById('opalineLogo'); // pega a tag de imagem
    let caminho = imagem.src; // pega o caminho da imagem
    let posicaoUltimaBarra = caminho.lastIndexOf('/'); // pega a posição da última barra ('/') do caminho da imagem
    let arquivo = caminho.substring(posicaoUltimaBarra + 1);

    if (arquivo == 'logoOpalineWhiteHover.png')
        imagem.src = 'midia/logoOpalineWhite.png';
}

// Função para alternar entre modo claro e escuro
function alterarModo() {
    const icone = document.getElementById('icone-modo');

    if (icone.classList.contains('fa-toggle-off')) {
        icone.classList.replace('fa-toggle-off', 'fa-toggle-on');
        //Gravando a escolha de modo escuro no localStorage
        localStorage.setItem('modo', 'escuro');
    }        
    else {
        icone.classList.replace('fa-toggle-on', 'fa-toggle-off');
        //Gravando a escolha de modo claro no localStorage
        localStorage.setItem('modo', 'claro'); 
    }       

    document.body.classList.toggle('dark-mode');
    document.getElementById('div-destaque').classList.toggle('font-mode2')
}

/*---- verificando o modo salvo e carregando do localStorage ---*/
function carregarModo() {
    const modoSalvo = localStorage.getItem('modo');
    const icone = document.getElementById('icone-modo');

    if (modoSalvo == 'escuro') {
        document.body.classList.add('dark-mode');
        icone.classList.replace('fa-toggle-off', 'fa-toggle-on');
    }
    else {
        document.body.classList.remove('dark-mode');
        icone.classList.replace('fa-toggle-on', 'fa-toggle-off');
    }
}

/*--- Executando a função carregarModo() no carregamento da página --*/
carregarModo();

/* --- criando o slide show --- */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}