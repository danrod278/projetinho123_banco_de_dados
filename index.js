const fs = require("fs")
const path = require("path")
function criarPasta(nome){
    fs.mkdir(path.join(__dirname, `${nome}`), (erro)=>{
        if(erro){
            console.log("Houve um erro ao criar a pasta: " + erro)
            return
        }
        console.log("Pasta criada com sucesso!")
    })
}
function criarDataBase(pasta, nome_arquivo, nome_database){
    const obj_inicial = `{
        "${nome_database}":{

    }
}`
    var caminho_database = path.join(pasta, "/"+nome_arquivo+".json")
    console.log(caminho_database)
    fs.writeFileSync(`${caminho_database}`, "", "utf-8")

    fs.writeFile(caminho_database, obj_inicial, "utf-8", (err)=>{
        if(err){
            console.log(`Houve um erro ao criar o arquivo ${caminho_database}:       `+err)
            return
        }
        console.log(`Arquivo ${caminho_database}.json criado com sucesso`)    })
}
function add_obj(pasta, nome_arquivo, nome_database, objeto) {
    try {
        var caminho = `${pasta}/${nome_arquivo}.json`
        fs.readFile(caminho, 'utf-8',(err, dado)=>{
            if(err){
                    console.log("Houve um erro                   ." +err)
                    return
            }try{
                const arquivo = JSON.parse(dado) 
                arquivo[nome_database][objeto] = {};

                fs.writeFile(`${pasta}/${nome_arquivo}.json`, JSON.stringify(arquivo, null, 2), '', (err) => {
                    if (err) {
                        console.log('Erro ao criar objeto:', err);
                        return;
                    }
                    console.log('Objeto criado com sucesso!');
                })
            }
            catch(erro){
                console.log("Huve um erro 2                 ."+erro)
            }
            })
        } 
    catch (err) {
        console.log('Erro ao ler ou manipular o arquivo:', err);
    }  
}
