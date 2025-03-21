export default function solucao(valorVenda: number, valorCompra: number): number | string {
    const lucro: number = valorVenda - valorCompra
    const prejuizo: number = valorVenda - valorCompra
    if (valorVenda - valorCompra > 0) {
        return `"O valor do lucro é: R$${lucro}"`

    } else if (valorVenda - valorCompra < 0) {
        return `"O valor do prejuízo é: R$${prejuizo}"`

    }
    return "Venda a preço de custo"
}