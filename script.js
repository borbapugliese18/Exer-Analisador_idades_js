var botao = document.querySelector("input#btn")
botao.addEventListener("click",clicar)


function clicar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var message = document.querySelector("p.msg")
    var anotxt = document.querySelector("input#ano")
    var anoNasc = Number(anotxt.value)
    var idade = anoAtual - anoNasc
    

    if((anoNasc <=  0 || idade > 120) || anoNasc > anoAtual){
        message.innerHTML = "[ERRO] Verifique os dados e tente novamente!"
    }else{
        var sexoM = document.querySelector("input#m") 
        var sexoF = document.querySelector("input#f")
        var image = document.createElement("img")
        image.setAttribute("id","foto")
        image.style.borderRadius = "50%"
        image.style.width = "300px"
        image.style.height = "300px"

        if(sexoM.checked){
            var genero = "Homem"

            if(idade >= 0 && idade < 12){
                image.setAttribute("src", "img/criancam.png")
            }else if(idade < 18){
                image.setAttribute("src","img/teenm.png")
            }else if(idade < 60){
                image.setAttribute("src","img/adultom.png")
            }else if(idade <= 120){
                image.setAttribute("src","img/veiom.png")
            }
        }else{
            var genero = "Mulher"
            
            if(idade >= 0 && idade < 12){
                image.setAttribute("src","img/criancaf.png")
            }else if(idade < 18){
                image.setAttribute("src","img/teenf.png")
            }else if(idade < 60){
                image.setAttribute("src","img/adultof.png")
            }else if(idade <= 120){
                image.setAttribute("src","img/veiof.png")
            }
        }

        message.innerHTML = `<p>Detectamos ${genero} com ${idade} anos<p>`
        message.appendChild(image)
  
    }
   
    

   
  
}