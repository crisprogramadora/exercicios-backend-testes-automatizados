import resultado from "./resultadoDeUmaVenda"

describe('Testar o resultado de uma venda', () => {
    test('deve verificar se a venda gerou lucro', () => {
        expect(resultado(20, 10)).toBe(`"O valor do lucro é: R$${10}"`)
    })
    test('deve verificar se a venda gerou prejuízo', () => {
        expect(resultado(10, 20)).toBe(`"O valor do prejuízo é: R$${-10}"`)
    })
    test('deve verificar se a venda foi a preço de custo', () => {
        expect(resultado(20, 20)).toBe("Venda a preço de custo")
    })
})