const transformIS = function(inteiro){//retorna uma string
    return `${inteiro}px`
}
const transformSI = function(string){//retorna o inteiro
    let array = string.split('');
    for(let i = 0;i<=array.length-1;i++){
 if(array[array.length-1]=="x"){
    array.pop()
    array.pop()  
 }
 if(array.length>1){
    array[array.length-2]=array[array.length-2]+array[array.length-1]
    array.pop()
 }
    }
    let retorno=parseInt(array[0])
    let numero = array[0]==undefined?0:retorno
    return numero
}
console.log(transformIS(1));
console.log(transformSI("3px"));
