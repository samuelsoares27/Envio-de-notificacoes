onst http = require("http");
const express = require("express");

http.createServer(express).listen(3000, () => console.log("Servidor rodando local na porta 3000"));