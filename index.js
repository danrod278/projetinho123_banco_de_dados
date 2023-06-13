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

function criarDataBase(caminho, pasta, nome){
    const coisa_inicial = `{"${nome}":{}
}`
    var caminho_database = path.join(pasta, "/"+nome+".json")
    fs.writeFileSync(`${caminho_database}`, "", "utf-8", (err)=>{
        if(err){
            console.log(caminho_database+err)
            return
        }
        
    })
    fs.writeFile(caminho_database, coisa_inicial, "utf-8", (err)=>{
        if(err){
            console.log(`Houve um erro ao criar o arquivo ${caminho_database}:       `+err)
            return
        }
        console.log(`Arquivo ${caminho_database}.json criado com sucesso`)    })
}
 
var pasta = "teste5"
var arquivo = "teste6"

criarPasta(pasta)
criarDataBase(__dirname, pasta, arquivo)
//criarDataBase(caminho, pasta, arquivo/**/)
