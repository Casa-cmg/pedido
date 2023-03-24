// const btn = 
const btn3 = document.getElementById('btn-sim3');
const btn4 = document.getElementById('btn-sim4');

function funcao() {
    document.getElementById('pergunta').innerHTML = 'Você responderá com total sinceridade?';
    document.getElementById('btn-sim').style.display = 'none';
    document.getElementById('btn-sim2').style.display = 'block'
}

function funcao2() {
    document.getElementById('pergunta').innerHTML = 'Tem certeza de que deseja continuar?';
    document.getElementById('btn-sim2').style.display = 'none';
    document.getElementById('btn-sim3').style.display = 'block'
}

function funcao3() {
    document.getElementById('pergunta').innerHTML = 'Casa comigo? 💍 ';
    document.getElementById('btn-sim3').style.display = 'none';
    document.getElementById('btn-sim4').style.display = 'block';
    document.getElementById('btn-nao').style.display = 'block';
}

const btnNao = document.querySelector('#btn-nao');
const btnSim = document.querySelector('#btn-sim4');

btnNao.addEventListener("click", (e) => {
    e.preventDefault;
    btnNao.classList.add('animate');
    setTimeout(() => {
        btnNao.classList.remove('animate');
        btnNao.style.display = 'none'
        btnSim.style.margin = "35px"
    }, 600)
})

const container__response = document.querySelector('.container__response')
const pergunta = document.querySelector('#pergunta')
const img = document.querySelector('.img');


btnSim.addEventListener("click", (e) => {
    e.preventDefault;
    container__response.style.display = 'block'
    btnSim.style.display = 'none'
    btnNao.style.display = 'none'
    pergunta.style.display = 'none'
    img.style.marginBottom = '0px'
})

const txt = document.querySelector('.text');
const txtInitialHeight = txt.clientHeight;
const overflow = document.querySelector('.overflow');
const button = document.querySelector('.toggle');

button.addEventListener("click", initToggle);

function initToggle(e) {
    txt.style.maxHeight = 
        e.target.dataset.state === 'more'
        ? `${txt.scrollHeight}px`
        : `${txtInitialHeight}px`;

        e.target.setAttribute(
            "data-state",
            e.target.dataset.state === "more" ? "less" : "more"
        );

        e.target.innerHTML =
        e.target.dataset.state === "more" ? "" : "";

        overflow.setAttribute (
            "data-state",
            e.target.dataset.state === "more" ? "visible" : "hidden"
        )

        button.style.display = 'none'
        
    img.style.marginTop = "-30px"
}