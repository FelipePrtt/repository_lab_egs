var carro = {
    marca: "",
    modelo: "",
    ano: 0,
    cor: "",
    kilometragem: 0,
    valor_fipe: 0,

    //Métodos
    anosUtilizacao: function() {
        return new Date().getFullYear() - this.ano;
    },

    valorMercado: function() {
        let kmPorAno = this.kilometragem / this.anosUtilizacao();
        if (kmPorAno <= 30000) {
            return this.valor_fipe * 1.1;
        } else if (kmPorAno <= 50000) {
            return this.valor_fipe;
        } else {
            return this.valor_fipe * 0.9;
        }
    }
};

function novoCarro(event) {
    event.preventDefault();
    
    carro.marca = document.getElementById("marca").value;
    carro.modelo = document.getElementById("modelo").value;
    carro.ano = parseInt(document.getElementById("ano").value);
    carro.cor = document.getElementById("cor").value;
    carro.kilometragem = parseFloat(document.getElementById("km").value);
    carro.valor_fipe = parseFloat(document.getElementById("valor_fipe").value);

    document.getElementById("resultado").innerHTML = `Anos de utilização: ${carro.anosUtilizacao()} <br>Valor de mercado: R$${carro.valorMercado()}`;
}