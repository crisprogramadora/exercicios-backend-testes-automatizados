import solucao from "./checagemDeSenha"
let caracter: number = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
const senhaValida = `${caracter}${caracter}${caracter}${caracter}`
describe('Testar senha', () => {
    test('Deve verificar se a senha digitada é válida', () => {
        expect(solucao(`${1234}`)).toBe("Senha Válida")
    })
    test('Deve verificar se a senha digitada é inválida', () => {
        expect(solucao(`${134}b`)).not.toBe("senha Inválida")
    })
})