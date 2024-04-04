const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function decrypt(text, decalage) {
    decalage = decalage % 26;
    let result = '';
    // Boucle sur le texte
    for (let i = 0; i < text.length; i++) {
        // Stock un carractere par tour de boucle
        const carractere = text[i];
        // Stock les carracteres en majuscule
        let maj = carractere === carractere.toUpperCase();
        // Stock l'index du carractere dans l'alphabet
        const index = alphabet.indexOf(carractere.toLowerCase());
        // Si le carractere n'est pas dans l'alphabet on ne le touche pas
        if (index === -1) {
            result += carractere;
            continue;
        }
        
        // Stock le nouvel index du carractere
        const newIndex = (index - decalage + alphabet.length) % alphabet.length;
        // Stock nouveau carractere
        const newCar = alphabet[newIndex];
        // Ajouter les carracteres un à un dans result tout en prettant attention aux majuscules
        if(maj == true){
            result += newCar.toUpperCase();
        }
        else {
            result += newCar;
        }
    }
    return result;
}
console.log(decrypt('Tmbip§ vejjspi hy tsypix, Qivpmr tvijivi pi neqfsr', 4));