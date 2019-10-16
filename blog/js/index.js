const server = require('./server');
const router = require('./router');

var data = {
    '':{
        name: 'chapterList',
        info: '列表页'
    },
    list:{
        name: 'chapterList',
        info: '列表页'
    },
    detail:{
        name: 'chapter',
        info: '博客详情页'
    },
    login:{
        name: 'login',
        info: '后台登录页面'
    },
    listmanager:{
        name: 'list',
        info: '后台文章列表页面'
    },
    addChapter:{
        name: 'addChapter',
        info: '后台添加文章页面'
    },
    getData:{
        name: 'dataFile',
        info: '服务器数据'
    },
    getUser:{
        name: 'userList',
        info: '用户数据'
    },
    getAdd:{
        name: 'add',
        info: '文章数据'
    }
}

server.server(router.router,data);