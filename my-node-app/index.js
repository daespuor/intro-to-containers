const http = require('http');

http.createServer((request,response)=>{
    console.log('request recieved');
    response.end('omg hi','utf-8');
})
.listen(3000,()=>{
    console.log('Server started');
});

