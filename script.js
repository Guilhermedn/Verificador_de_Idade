function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO 404] Verifique os Dados e Tente Novamente`)
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked) {
           genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','image/kidsman.png')
            }
        
            else if (idade < 16) {
                img.setAttribute('src','image/adolecentem.png')
            }

            else if (idade < 25) {
                img.setAttribute('src','image/jovemm.png')
            }
        
            else if (idade < 50) {
                img.setAttribute('src','image/adultom.png')
            }

            else {
                img.setAttribute('src','image/oldman.png')
            }
        }
        else  {
            genero = 'Mulher'

            if (idade > 0 && idade < 10) {
                img.setAttribute('src','image/kidsfemale.png')
            }           

            else if (idade < 16){
                img.setAttribute('src','image/adolecentef.png')
            }

            else if (idade < 25) {
                img.setAttribute('src','image/jovemf.png')
            }

            else if (idade < 50) {
                img.setAttribute('src','image/adultof.png')
            }

            else {
                img.setAttribute('src','image/oldwo.png')
            }
        }
    
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos. <br> <br> <br>`  
        res.appendChild(img)
    }
    
}