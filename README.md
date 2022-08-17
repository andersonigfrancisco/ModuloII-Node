# ModuloII-Node

ModuloII-Node

# Dependencias 

1. Yarn add express
2. yarn add @types/express -D
3. yarn add typescript -D
4. yarn tsc --init (inicilizando o Typescript)
4. yarn tsc (convereter arquivo ts em js)

# Debbug Config 

{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "outFiles": [
        "${workspaceFolder}/**/*.js"
      ]
    }
  ]
}