function verificarPalindromo() {
    let palavra = document.getElementById("palavra").value;

    palavra = palavra.replace(/\s/g, '').toLowerCase();

    let palavraInvertida = palavra.split('').reverse().join('');

    if (palavra === palavraInvertida) {
        alert('A palavra é um palíndromo!');
    } else {
        alert('A palavra é um texto.');
    }
}
