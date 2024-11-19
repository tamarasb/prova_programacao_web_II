function criptografia(mensagem, chave, converter){
    var nova_mensagem = "";
    for (let i = 0; i < mensagem.length; i++) {
        nova_mensagem += converter(mensagem[i], chave);        
    }
    return nova_mensagem;
}

function cifraLetra(letra, chave){
    var alfabeto = ["a","b","c","d","e","f","g","h","i","j",
        "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var size = alfabeto.length;

    if(letra > alfabeto[size - chave]){
        for (let i = size - chave; i < size; i++) {
            if (letra == alfabeto[i]) {
                return alfabeto[i - size + chave];
            }
        }
    }else{
        for (let i = 0; i < alfabeto.length; i++) {
            if(alfabeto[i] == letra){
                return alfabeto[i+chave];
            }   
        }
    }
    return " ";
}

function decifraLetra(letra, chave){
    var alfabeto = ["a","b","c","d","e","f","g","h","i","j",
        "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var size = alfabeto.length;

    if(letra < alfabeto[chave]){
        for (let i = 0; i < chave; i++) {
            if (letra == alfabeto[i]) {
                return alfabeto[size - chave + i];
            }
        }
    }else{
        for (let i = chave; i < size; i++) {
            if(alfabeto[i] == letra){
                return alfabeto[i-chave];
            }   
        }
    }
    return " ";
}

export default {criptografia, cifraLetra, decifraLetra}