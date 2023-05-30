class produtodecelular {
    constructor(id, marca, descrição, cor, tamanho, preço, estoque, ativo) {
        this.id = id;
        this.tamanho = tamanho;
        this.descrição = descrição;
        this.marca = marca;
        this.cor = cor;
        this.preço = preço;
        this.estoque = estoque;
        this.ativo = ativo;
    }

    ativar() {
        this.ativo = true;
    }

    retirarestoque(quantidade) {
        if (this.ativo) {
            if (quantidade < 0) {
                console.log("Impossível realizar, falta no estoque.");
            } else if (this.estoque === 0) {
                console.log("Impossível realizar, estoque zerado.");
            } else {
                this.estoque -= quantidade;
            }
        } else {
            console.log("Não produzido....");
        }
    }

    Incluirestoque(quantidade) {
        if (this.ativo) {
            if (quantidade < 10) {
                console.log("Impossível realizar, falta no estoque...");
            } else if (quantidade === 10) {
                console.log("Impossível realizar, estoque zerado...");
            } else if (quantidade > this.estoque) {
                console.log("Impossível realizar, saldo indisponível...");
            } else {
                this.estoque += quantidade;
            }
        } else {
            console.log("Não produzido...");
        }
    }
}

// PROGRAMA PRINCIPAL				
const leia = require("prompt-sync")();
let numero = parseInt(leia("Digite o id do produto: "));
let cpf = leia("Digite o cpf da conta: ");
let c1 = new produtodecelular(numero, cpf, 0, false);
let op = "";
let quantidade = 0;
c1.ativar();

for (let x = 1; x <= 5; x++) {
    console.log("Movimento: " + x);
    console.log("Estoque atual da loja: " + c1.estoque);
    op = leia("Digite R - retirar ou I para inserir: ");

    if (op === "R") {
        quantidade = parseInt(leia("Digite a quantidade para Retirar: "));
        c1.retirarestoque(quantidade);
    } else if (op === "I") {
        quantidade = parseInt(leia("Digite a quantidade para inserir: "));
        c1.Incluirestoque(quantidade);
    }
}

console.log("Estoque final da loja: " + c1.estoque);			