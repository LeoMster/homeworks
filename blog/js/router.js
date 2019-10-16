const resMethods    = require('./resMethods');

function router(pa,data,res){
    switch(pa[1]){
        case '':
        case 'list':
        case 'login':
        case 'detail':
        case 'listmanager':
        case 'addChapter':
            var type = 'html';
            resMethods.resMethods(pa,type,data,res);
            break;
        case 'css':
            var type = 'css';
            resMethods.resMethods(pa,type,data,res);
            break;
        case 'images':
            var type = 'images';
            resMethods.resMethods(pa,type,data,res);
            break;
        case 'js':
            var type = 'js';
            resMethods.resMethods(pa,type,data,res);
            break;
        case 'getData':
        case 'getUser':
        case 'getAdd':
            var type = 'json';
            resMethods.resMethods(pa,type,data,res);
            break;
        default:
            console.log('');
    }
}

exports.router = router;