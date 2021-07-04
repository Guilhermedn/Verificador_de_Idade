function Verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO 404] Verifique os Dados e Tente Novamente`)
    }
    else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked) {
           let Homen = 'Homem'

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

            res.innerHTML = `Detectamos <strong style='color:Navy;font-weight: bold';>${Homen}</strong> com <strong style='font-weight: bold;font-size: 18px';>${idade}</strong> Anos. <br> <br> <br>`
        }
        else  {
            let Mulher = 'Mulher'

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
            res.innerHTML = `Detectamos <strong style='color:DarkMagenta;font-weight: bold';>${Mulher}</strong> com <strong style='font-weight: bold;font-size: 18px';>${idade}</strong> Anos. <br> <br> <br> `
        }

        res.appendChild(img)
    }
    
}