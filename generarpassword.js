function generarpassword(nro_char=15,caps=true,char_esp=true,nums=true, emoji=true) {
    let listachar=[];
    let contrasena=[];
    let i = 0;
    let szcontrasena = ''
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const alphabet_caps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const listespchar=['~','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']','|','/',':',';',',','>','.','?']
    const numeros=[1,2,3,4,5,6,7,8,9,0]
    const emojis = ["😃", "⭐","✨","❤️","✋","🌕","✂️","⛽"]

    listachar = listachar.concat(alphabet)
    
    if (caps==true) {
        listachar = listachar.concat(alphabet_caps)
    }
    if (char_esp==true) {
        listachar = listachar.concat(listespchar)  
    }
    if (nums==true) {
        listachar = listachar.concat(numeros)    
    }
    if (emoji==true) {
        listachar = listachar.concat(emojis)    
    }
    while (i<nro_char) {
        contrasena.push(listachar[Math.floor(Math.random() * listachar.length)]);
        i+=1;
    }
    szcontrasena = contrasena.join('')
    console.log(contrasena)
    return szcontrasena
}

let resultado = generarpassword(20, true, true, true)

console.log(resultado)