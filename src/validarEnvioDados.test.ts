import solucao from "./validarEnvioDados";

describe("Validar cadastro", () => {
    test("deve retornar mensagem de erro se algum campo não for enviado", () => {
        const semNome = solucao({
            email: "cris@email.com",
            senha: "54321",
        });
        const semEmail = solucao({
            nome: "Cris",
            senha: "54321",
        });

        const semSenha = solucao({
            nome: "Cris",
            email: "cris@email.com",
        });

        expect(semNome).toBe("Todos os campos são obrigatórios");
        expect(semEmail).toBe("Todos os campos são obrigatórios");
        expect(semSenha).toBe("Todos os campos são obrigatórios");
    });

    test("deve retornar true se todos os dados forem enviados", () => {
        const cadastroValido = solucao({
            nome: "Cris",
            email: "cris@email.com",
            senha: "54321",
        });

        expect(cadastroValido).toBeTruthy();
    });
});