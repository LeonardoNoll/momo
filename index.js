let btn = document.getElementById("btn");
let porcento = document.getElementById("porcento");
let barraFill = document.getElementById("barra-fill");
let imagem = document.getElementById("reacao");

btn.addEventListener("click", function () {
let n1 = document.getElementById("pessoa1");
let n2 = document.getElementById("pessoa2");
  if (n1.value == "" || n2.value == "") {
    alert("Digite os nomes para calcular a porcentagem");
  } else {
    if (n1.value.toLowerCase() == "léo" && n2.value.toLowerCase() == "nina") {
     var porcentagem = 666;
    } else if (n1.value.toLowerCase() == "nina" &&n2.value.toLowerCase() == "léo") {
      var porcentagem = 666;
    } else if (n1.value.toLowerCase() == "leonardo" &&n2.value.toLowerCase() == "anielli") {
        var porcentagem = 666;
    } else if (n1.value.toLowerCase() == "anielli" &&n2.value.toLowerCase() == "leoanrdo") {
        var porcentagem = 666;
    } else if (n1.value.toLowerCase() == "leonardo" &&n2.value.toLowerCase() == "nina") {
        var porcentagem = 666;
    } else if (n1.value.toLowerCase() == "nina" &&n2.value.toLowerCase() == "leonardo") {
        var porcentagem = 666;
    } else if (n1.value.toLowerCase() == "anielli" &&n2.value.toLowerCase() == "léo") {
        var porcentagem = 666;
    } else if (n1.value.toLowerCase() == "léo" &&n2.value.toLowerCase() == "anielli") {
        var porcentagem = 666;
    } else if (n1.value.toLowerCase() == 'léo' && n2.value.toLowerCase() != 'nina'){
        var porcentagem = 0
    } else if (n2.value.toLowerCase() == 'léo' && n1.value.toLowerCase() != 'nina'){
        var porcentagem = 0
    } else if (n1.value.toLowerCase() == 'nina' && n2.value.toLowerCase() != 'léo'){
        var porcentagem = 0
    } else if (n2.value.toLowerCase() == 'nina' && n1.value.toLowerCase() != 'léo'){
        var porcentagem = 0
    } else {
      var porcentagem = Math.floor(Math.random() * 100);
    }
    
    if(porcentagem == 666){
        imagem.src = "imgs/download.jpg";
        imagem.style.display = "block";
        barraFill.style.backgroundColor = "purple";
        let lulu = document.createElement("img");
        lulu.src = "imgs/lul.jpg";
        lulu.style.width = "100%";
        lulu.style.height = "100%";
        lulu.style.position = "absolute";
        lulu.style.top = "0";
        lulu.style.transition = "1000ms";
        lulu.style.opacity = "0";
        setTimeout(function(){
            lulu.style.opacity = "1";
        }, 1000);
        document.body.appendChild(lulu);
    } else if (porcentagem <= 100 && porcentagem >=70){
        imagem.src = "imgs/5897aa00cba9841eabab615a.png";
        imagem.style.display = "block";
        barraFill.style.backgroundColor = "red";
    } else if (porcentagem <= 69 && porcentagem >= 30){
        imagem.src = "imgs/Happy-Emoji-PNG.png";
        imagem.style.display = "block";
        barraFill.style.backgroundColor = "red";
    } else if (porcentagem <= 29 && porcentagem >= 0){
        imagem.src = "imgs/sad-emoji-01.png";
        imagem.style.display = "block";
        barraFill.style.backgroundColor = "red";
    }
    barraFill.style.width = porcentagem + "%";
    porcento.innerHTML = porcentagem + "%";
    console.log(porcentagem);
  }
});
