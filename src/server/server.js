//引入express
const express = require('express');
//创建应用对象
const app = express();



app.use((request, response, next) => {
    console.log("someone request");
    next()
})

app.get('/student', (request, response) => {
       response.setHeader('Access-Control-Allow-Origin', '*');

    const student = [
        { id: '001', name: 'tom', age: 18 },
        { id: '002', name: 'tom2', age: 28 },
        { id: '003', name: 'tom3', age: 38 },
    ]


    response.send(student);
})





//监听端口 启动服务
app.listen(8000, () => {
    console.log("Serve is succuessful, listen 8000 now");
})