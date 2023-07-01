const express = require("express");

const webserver = express();
const port = 3050;

let result = [
    {
      key:0,
      name: "Мне нравится Java",
      voice: 3,
    },
    {
      key:1,
      name: "Мне нравится JavaScript",
      voice: 4,
    },
    {
      key:2,
      name: "Мне нравится C#",
      voice: 7,
    },
    {
      key:3,
      name: "Мне не нравится программирование",
      voice: 1,
    },
];
  
// устанавливаем обработчик для маршрута "/"
webserver.get("/", function(request, response){
 
    response.end("Hello from Express!");
});

webserver.get('/variants', (req, res) => { 
    // возвращает возможные варианты ответов (код ответа, текст ответа) в формате JSON
    res.end(JSON.stringify(result));
    console.log(`service1 called, req.originalUrl=${req.originalUrl}`);
    res.send("service1 ok!");
});

webserver.get('/service2', (req, res) => { 
    // при обращении по этому УРЛу - ответ зависит от GET-параметров
    console.log(`service2 called, req.originalUrl=${req.originalUrl}, req.query=`,req.query);
    res.send("service2 ok, par1="+req.query.par1+" par2="+req.query.par2);
});

webserver.listen(port,()=>{ 
    console.log("web server running on port "+port);
}); 