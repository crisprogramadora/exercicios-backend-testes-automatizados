export default function solucao(senha: string) {
    let caracter: number = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    const senhaValida = `${caracter}${caracter}${caracter}${caracter}`

    if (senhaValida) {
        return "Senha Válida"
    } else {
        return "Senha Inválida"
    }
}