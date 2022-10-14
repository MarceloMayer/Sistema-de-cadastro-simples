let btn = document.querySelector('#btn-submit')
let btnback = document.getElementById('btn-back')


function enviar() {
    //VARIÁVEIS
    let name = document.getElementById('inputName').value
    let age = document.getElementById('inputIdade')
    let age2 = Number(age.value)
    let res = document.getElementById('resposta')
    let sex = document.getElementsByName('sex')
    let genero = ''
    if (sex[0].checked) {
        genero = "homem"

    } else if (sex[1].checked) {
        genero = "mulher"
    } else if (sex[2].checked) {
        genero = "prefiro não informar"
    }
    if (name !== '' && age2 >= 1 && age2<100 && genero !== '') {
        console.log(name)
        console.log(age2)
        console.log(genero)

        if (genero == "homem" || genero == 'prefiro não informar') {
            res.innerHTML = `Olá, ${name} ! muito obrigado pelo seu cadastro, seja bem vindo em nossos sitemas. Sua idade é de ${age2} anos, temos muito tempo pela frente e iremos crescer juntos!`
        } else {
            res.innerHTML = `Olá, ${name} ! muito obrigada pelo seu cadastro, seja bem vinda em nossos sitemas. Sua idade é de ${age2} anos, temos muito tempo pela frente e iremos crescer juntas!`
        }
        //limpar o sistema
        btn.style.display = "none"
        btnback.style.display = "block";
        btnback.addEventListener('click', limpar)

        function limpar() {
            res.innerHTML = ''
            btnback.style.display = "none";
            btn.style.display = "block";
        }
    } else {
        res.innerHTML = 'Preencha os dados corretamente'
    }



}
btn.addEventListener('click', enviar)



















