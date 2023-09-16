comando para iniciar typescript no angular
dentro da pasta raiz do projeto
    npm init -y  =>  cria um arquivo de node na raiz do projeto
    npm install typescript -D  =>  instala o typescript mas só para o desenvolvimento, ele não vai subir para o deploi
    node src/index.ts  =>  executa o arquivo em typescript via terminal
    npx tsc src/index.ts  =>  converte o arquivo typescript para javascript
    npx tsc --init  =>  cria um arquivo de configuração do typescript

    ----arquivos abilitados----
    "outDir": "./build", 
    "rootDir": "./src", 

    ----criando um script novo na pasta package.json-----
    "start": "npx tsc && node build/index.js",  =>  chamamos estes comandos com apenas um comando que é o npm run start
    instalando um servidor local que entende typescript => npm install ts-node-dev -D (no power shell).
    (no arquivo package.json insira) => "start:dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    comando para rodar o servidor local de type script sem gerar uma build => npm run start:dev