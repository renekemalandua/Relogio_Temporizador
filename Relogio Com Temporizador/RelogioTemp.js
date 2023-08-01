const temporizador = document.querySelector(".Temporizador");
const relogio = document.querySelector(".Relogio");
const cronometro = document.querySelector(".Cronometro");
const MinhaData = new Date();
let hora = document.querySelector(".hora");
let minuto = document.querySelector(".minuto");
let segundos = document.querySelector(".segundo");

let opt1 = document.querySelector(".opt1");
let opt2 = document.querySelector(".opt2");
let opt3 = document.querySelector(".opt3");

let h =  new Date().getHours();
let m = new Date().getMinutes();
let s =new Date().getSeconds();

opt1.addEventListener("click", () =>{
    temporizador.setAttribute("style", "display:none");
    opt2.setAttribute("style", "background-color:  azure");

    cronometro.setAttribute("style", "display:none");
    opt3.setAttribute("style", "background-color:  azure");

    relogio.setAttribute("style", "display:flex");
    opt1.setAttribute("style", "background-color:  gold");
    
})
opt2.addEventListener("click", () =>{
    temporizador.setAttribute("style", "display:flex");
    opt2.setAttribute("style", "background-color:   gold");
   
    cronometro.setAttribute("style", "display:none");
    opt3.setAttribute("style", "background-color:  azure");

    relogio.setAttribute("style", "display:none");
    opt1.setAttribute("style", "background-color: azure");
})
opt3.addEventListener("click", () =>{
    temporizador.setAttribute("style", "display:none");
    opt2.setAttribute("style", "background-color:  azure");

    cronometro.setAttribute("style", "display:flex");
    opt3.setAttribute("style", "background-color:  gold");

    relogio.setAttribute("style", "display:none");
    opt1.setAttribute("style", "background-color: azure");
})

setInterval(() =>{

    let h =  new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    //zero a esquerda
    h=(h<10)? "0" + h:h;

    m=(m<10)? "0" + m:m;

    s=(s<10)? "0" + s:s;

    hora.innerHTML = h;
    minuto.innerHTML = m;
    segundos.innerHTML = s;

},1000);

// Cronometro =================
let btnOn_Off = document.querySelector(".cronPower");
let btnReset = document.querySelector(".CromReset");
let milisegundo = document.querySelector(".milisegundo");
let croMin = document.querySelector(".croMinuto");
let croseg = document.querySelector(".CroSegundo");

let ligado = false;
let min = 0;
let seg = 0;
let mls = 0;
var interMls = 0;
var interSeg = 0;
var interMin = 0;
btnOn_Off.addEventListener("click", () => {

    if(ligado){
        btnOn_Off.innerHTML = "Iniciar";
        clearInterval(interMin);
        clearInterval(interSeg);
        clearInterval(interMls);
        ligado = false;
    }else{
        btnOn_Off.innerHTML ="Parar";
        interMin = setInterval(() =>{
            min++;
            min=(min<10)? "0" + min:min;
            croMin.innerHTML = min;
        },60000);// Minutos

        interSeg = setInterval(() =>{
           seg++;
           seg=(seg<10)? "0" + seg:seg;
           if(seg === 60) seg = 0;
           croseg.innerHTML = seg;
        },1000);// Segundos

        interMls = setInterval(() =>{
           mls++;
           mls=(mls<10)? "0" + mls:mls;
           if(mls === 100) mls = 0;
           milisegundo.innerHTML = mls;
        },10);// milisegundos

        ligado = true;
    }
})

btnReset.addEventListener("click", () => {
    clearInterval(interMin);
    clearInterval(interSeg);
    clearInterval(interMls);
    min = 00;
    seg = 0;
    mls = 0;
    croMin.innerHTML = "00";
    croseg.innerHTML = "00";
    milisegundo.innerHTML = "00";
    btnOn_Off.innerHTML = "Iniciar";
    ligado = false;
});

/// Temporizador
let btnconcluido = document.querySelector(".btnconcluido");
let telaAjuste = document.querySelector(".ajustarTemp");
let btnIniciar = document.querySelector(".TempPower");
let btnRepor = document.querySelector(".TempReset");

let TempHora = 0;
let TempMinuto = 0;
let TempSegundo = 0;

let Contando = false;
var fimTemporizador = false;

var interHora = 0;
var interSegundo = 0;
var interMinuto = 0;

var strSegundo;
var strMinuto;
var strHora;

let ShowHora = document.querySelector(".ShowHora");
let ShowMin = document.querySelector(".ShowMin");
let ShowSeg = document.querySelector(".ShowSeg");


btnconcluido.addEventListener("click", () => {
    telaAjuste.setAttribute("style", "display:none");
    let auxHora = document.querySelector(".inHora");
    let auxMinuto = document.querySelector(".inMin");
    let auxSegundo = document.querySelector(".inSeg");

    TempHora = Number(auxHora.value);
    TempMinuto = Number(auxMinuto.value);
    TempSegundo = Number(auxSegundo.value);

    strSegundo  = TempSegundo.toString();
    strMinuto = TempMinuto.toString();
    strHora = TempHora.toString();
    
    TempHora=(TempHora<10)? "0" + TempHora:TempHora;
    TempMinuto=(TempMinuto < 10)? "0" + TempMinuto:TempMinuto;
    TempSegundo=(TempSegundo<10)? "0" + TempSegundo:TempSegundo;
    

    ShowHora.innerHTML = TempHora;
    ShowMin.innerHTML = TempMinuto;
    ShowSeg.innerHTML = TempSegundo;
});

btnIniciar.addEventListener("click", () => {

    if(Contando){
        btnIniciar.innerHTML = "Iniciar";
        PararTemporizador();
        Contando = false;
    }else{
        btnIniciar.innerHTML ="Parar";

        interSegundo = setInterval(() =>{
            if(strMinuto === "00" && strSegundo === "01" && strHora === "00"){
                fimTemporizador = true;
                console.log("FIm");
            }
            // Os Segundos
            strSegundo  = TempSegundo.toString();
            if(!isNaN(strSegundo) && !fimTemporizador){
                if(strSegundo != "00" && strSegundo != "0-1"){
                    TempSegundo--;
                    TempSegundo=(TempSegundo<10)? "0" + TempSegundo:TempSegundo;
                    ShowSeg.innerHTML = TempSegundo;
                }
                if(strSegundo === "00"){
                    TempSegundo = 59;
                    ShowSeg.innerHTML = TempSegundo;
                }
            }

           // Os Minutos
            strMinuto = TempMinuto.toString();
            if(strSegundo === "00"){
                if(!isNaN(strMinuto)){
                    if(strMinuto != "00" && strMinuto != "0-1"){
                        TempMinuto--;
                        TempMinuto=(TempMinuto < 10)? "0" + TempMinuto:TempMinuto;
                        ShowMin.innerHTML = TempMinuto;
                    }
                }
            }
            
            // As horas
            strHora = TempHora.toString();
            if (strMinuto === "00" && strSegundo === "00") {
                if(!isNaN(strHora)){
                    if (strHora != "00" && strHora != "0-1") {
                        TempHora--;
                        TempMinuto = 59;
                        ShowMin.innerHTML = TempMinuto;
                        TempHora=(TempHora<10)? "0" + TempHora:TempHora;
                        ShowHora.innerHTML = TempHora;
                    }
                }
            }

        },1000);// Segundos

        Contando = true;
    }
});

btnRepor.addEventListener("click", () =>{

    clearInterval(interSegundo);

    ShowHora.innerHTML ="00";
    ShowMin.innerHTML= "00";
    ShowSeg.innerHTML= "00";

    interHora = 0;
    interSegundo = 0;
    interMinuto = 0;

    telaAjuste.setAttribute("style", "display:flex");
    btnIniciar.innerHTML = "Iniciar";
    Contando = false;
});

function PararTemporizador(){
    clearInterval(interSegundo);
}