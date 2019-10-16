const path              = require('path'),
        fs              = require('fs'),
        StringDecoder   = require('string_decoder').StringDecoder,
        decoder         = new StringDecoder('utf8');
        

function inResponse(str,type,img,response){
    let imagePath = path.join(__dirname,str,img);
    let imageContent = fs.readFileSync(imagePath);
    response.writeHead(200,{"Content-Type":"image/"+type});
    response.write(imageContent);
    response.end();
}

function imgResponse(img,is,response){
    let arr =  img.split('.');
    let type = arr[arr.length-1];
    let str;
    if(is){
        str = '../images/img/';
    }else{
        str = '../images/'
    }
    switch(type){
        case 'jpg':
            inResponse(str,type,img,response);
            break;
            case 'jpeg':
            inResponse(str,type,img,response);
            break;
        case 'png':
            inResponse(str,type,img,response);
            break;
        default:
            console.log('');
    }
}

function resMethods(pa,type,data,response){
    switch(type){
        case 'html':
            let htmlPath = path.join(__dirname,'../' + data[pa[1]].name+ '.html');
            let htmlContent = fs.readFileSync(htmlPath);
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(htmlContent);
            response.end();
            break;
        case 'css':
            let cssPath = path.join(__dirname,'../css/' + pa[2]);
            let cssContent = fs.readFileSync(cssPath);
            response.writeHead(200,{"Content-Type":"text/css"});
            response.write(cssContent);
            response.end();
            break;
        case 'images':
            if(pa[2] === 'img'){
                let img = pa[3];
                let isImg  = true; 
                imgResponse(img,isImg,response);
            }else{
                let img = pa[2];
                let isImg  = false; 
                imgResponse(img,isImg,response);
            }
            break;
        case 'js':
            let jsPath = path.join(__dirname,pa[2]);
            let jsContent = fs.readFileSync(jsPath);
            response.writeHead(200,{"Content-Type":"text/javascript"});
            response.write(jsContent);
            response.end();
            break;
        case 'json':
            let dataPath = path.join(__dirname,'../json/' + data[pa[1]].name + '.json');
            fs.readFile(dataPath,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    let str = decoder.write(data);
                    response.end(str);
                }
            });
            break;
        default:
            console.log('');
    }
}

exports.resMethods = resMethods;