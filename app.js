function pesquisar() {
    // obtém a seção HTML onde os resultaos serão exibidos
    let section = document.getElementById
        ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
        ("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome correto.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenaros os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    //Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se o titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.
            includes(campoPesquisa) || tags.includes
                (campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
             <h2>
             <a href="#" target="_blank">${dado.titulo}</a>
             </h2>
             <p class="descricao-meta">${dado.descricao}</p>
             <a href=${dado.link} target=_blank">mais
             informações</a>
             `;
        }
        if (!resultados) {
            resultados = "<p>Nada foi encontrado</p>"
        }
    }
    section.innerHTML = resultados
}