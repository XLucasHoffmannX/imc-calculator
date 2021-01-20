const altura = document.querySelector('.altura');
const peso = document.querySelector('.peso');
const resetAll = document.querySelector('.reset');

const data =[
    'Abaixo do peso', 
    'Saudável(peso ideal)', 
    'Levemente acima do peso',
    'Obesidade grau 1',
    'Obesidade grau 2 (severa)',
    'Obesidade grau 3 (mórbida)'
]

const geraImc = (peso, altura)=>peso/(altura**2);

const send = document.querySelector('.send').addEventListener('click', ()=>{
    const resultArea = document.querySelector('.result');
    let format = geraImc(peso.value, altura.value);
    resultArea.innerHTML = format.toFixed(2);


    const verficaValor = (value)=>{
        if(value < 18.5) return data[0];
        if(value>18.6 && value<24.9) return data[1];
        if(value>25 && value<29.9) return data[2];
        if(value>30 && value<34.9) return data[3];
        if(value>35 && value<39.9) return data[4];
        if(value>40) return data[5]
    }

    const conclusion = document.querySelector('.conclusion');

    conclusion.innerHTML = verficaValor(format);
})

resetAll.addEventListener('click', ()=>{altura.value = ''; peso.value = ''})