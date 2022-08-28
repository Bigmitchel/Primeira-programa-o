let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

// Criei esse programa para determinar quais são os produtos internacionais e nacionais.
// Neles, hávera a diferença de preço ente 12% de imposto para nacionais e 20% internacionais.

let produtos = (produtoA, produtoB, produtoC)


produtoA.nome = "camiseta"
produtoA.valor = 100.00
produtoA.internacional = true

produtoB.nome = "perfume"
produtoB.valor = 200.00
produtoB.internacional = true

produtoC.nome = "sandália"
produtoC.valor = 120.00
produtoC.internacional = false
 
let impostoInternacional = 1.2
let impostoNacional = 1.12

// Código para o Produto A.
if (produtoA.internacional == true)
{console.log("Produto:" + produtoA.nome + " - Valor com Imposto: " + impostoInternacional*produtoA.valor)}
else {console.log("Produto:" +produtoA.nome + " - Valor com impostos: " + impostoNacional*produtoA.valor)}

// Código para o Produto B.
if (produtoB.internacional == true)
{console.log("Produto:" + produtoB.nome + " - Valor com imposto: " + impostoInternacional*produtoB.valor)}
else {console.log("Produto:" + produtoB.nome + " - Valor com imposto: " + impostoNacional*produtoB.valor)}

// Código para o Produto C.
if (produtoC.internacional == true)
{console.log("Produto:" + produtoC.nome + " - Valor com imposto: " + impostoInternacional*produtoC.valor)}
else {console.log("Produto:" + produtoC.nome + " - Valor com imposto: " + impostoNacional*produtoC.valor)}