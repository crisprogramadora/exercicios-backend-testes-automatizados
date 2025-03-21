export default function solucao(dados: any) {
    const { nome, email, senha } = dados;

    if (!nome || !email || !senha) {
        return "Todos os campos são obrigatórios";
    }

    return true;
}