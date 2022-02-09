/* Dúvida: 

Professor, tem alguma forma deu restringir o uso do botão a somente um click?
Digo isso porque toda vez que o usuário clica no botão "Calcular", aparece mais uma <section> contendo o valor total a pagar e eu gostaria que ela só aparecesse uma vez.

*/

function calcular() {
    var peso = document.getElementById("pesoAlmoco")
    peso = parseFloat(peso.value)
    var desconto = document.getElementById("desconto")
    desconto = parseInt(desconto.value)

    /* Multiplicando o valor do peso lido pelo preço do quilo */
    var valorPeso = (peso / 1000) * 44.5
    /* Aplicando o desconto sobre o valor obtido */
    var valorFinal = valorPeso - (valorPeso * (desconto / 100))

    /* Variável que vai permitir inserir uma nova <section> contendo o valor final dentro da tag <main> */
    var tagMain = document.getElementsByTagName("main")

    /* Esses espaços em branco representam os tabs para deixar o novo bloco de conteúdo a ser inserido também identado */
    tagMain[0].innerHTML += `\n    <section id="resultado">\n        <p>Valor total a pagar: R$${valorFinal.toFixed(2)}</p>\n    </section>`
}