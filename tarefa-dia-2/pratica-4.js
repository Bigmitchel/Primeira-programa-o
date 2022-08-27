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

if (produtos == true) {console.log(produtos.valor*impostoInternacional)}
else {console.log(produtos.valor*impostoNacional)}