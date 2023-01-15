const movimento = function(x,y){
    let movimento = document.querySelectorAll("img")[0].style
    let EixoX=transformSI(movimento.marginLeft)
    let EixoY=transformSI(movimento.marginTop)
    EixoX=transformIS(EixoX += x)
    EixoY=transformIS(EixoY += y)
    movimento.marginLeft = EixoX
    movimento.marginTop = EixoY
}