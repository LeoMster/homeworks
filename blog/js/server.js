const http  = require('http'),
        fs  = require('fs'),
      url   = require('url');
     
function server(router,data){
    function onRequest(request,response){
        let pathname = url.parse(request.url).pathname;
        let pathnameArr = pathname.split('/');
        
        if(pathnameArr[1] === 'add'){
            let addArr  = request.url.split('?')[1].split('&');
            let t       = addArr[0].split('=')[1];
            let c       = addArr[1].split('=')[1];

            var addObj = new Object();
            addObj.title    = t;
            addObj.content  = c;
            
            fs.readFile('../json/add.json','utf8',function(err,data){
                if(err) console.log(err);
                var addFile = JSON.parse(data);
                addFile.push(addObj);
                var str = JSON.stringify(addFile);
                fs.writeFile('../json/add.json',str,function(err){
                    if(err) console.log(err);
                });
            });
            response.end();
        }
        router(pathnameArr,data,response);
    }
    http.createServer(onRequest).listen(8083);
    console.log('Server has started.');
}

exports.server = server;