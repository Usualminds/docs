// create md file auto
let fs = require('fs')
let path = require('path')

function readFileList(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    files.forEach((item, index) => {
        var fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            //如果当前是文件目录，递归读取文件
            readFileList(path.join(dir, item), filesList);
        } else {
            filesList.push(fullPath);
        }
    });
    return filesList;
}

function mkdirs(dirname, callback) {
    fs.exists(dirname, function (exists) {
        if (exists) {
            // 是个目录则执行callback方法
            callback();
        } else {
            // 递归调用mkdirs
            /*console.log(dirname);  
            console.log(path.dirname(dirname)); */
            mkdirs(path.dirname(dirname), function () {
                fs.mkdir(dirname, callback);
                console.log('在' + path.dirname(dirname) + '目录创建好' + dirname + '目录');
            });
        }
    });
}

/**
 * @author: Benny
 * @description: 创建文件
 * @param {filename}  文件路径+名字
 */
function makeFiles(filename, content) {
    fs.writeFile(filename, content, function (err) {
        if (err) {
            console.log("error");
            return;
        }
        console.log(`创建${filename}成功`);

    })
}

let filesList = readFileList('docs/test')
let jsTemplate = `export default {
    data() {
        return {

        }
    },
    created() {
        
    },
}`

let newList = []
filesList.forEach((item) => {
    console.log(item)
    let jsItem = item.replace(/views/g, 'scripts');
    newList.push(jsItem)
    let cssItem = item.replace(/views/g, 'styles');
    newList.push(cssItem)

})

newList.forEach((item) => {
    let dir = path.parse(item).dir //文件夹路径
    let filename = path.parse(item).name.replace(/^\_([A-Z])/g, function (str) {
        return str.toLowerCase().replace(/\_/g, '')
    }) //文件名称
    let newFileNamePath;
    //包含style且排除block
    // if(dir.indexOf('styles')>0 && dir.indexOf('block') == -1 ){
    if (dir.indexOf('styles') > 0) {
        newFileNamePath = `${dir}/${filename}.less`
        mkdirs(dir, (data) => {
            //如果文件已存在
            if (fs.existsSync(newFileNamePath)) {
                console.log('已存在')
            } else {
                //生成文件
                makeFiles(newFileNamePath, '')
            }
        })
    }

    if (dir.indexOf('scripts') > 0) {
        newFileNamePath = `${dir}/${filename}.js`
        mkdirs(dir, (data) => {
            //如果文件已存在
            if (fs.existsSync(newFileNamePath)) {
                console.log('已存在')
            } else {
                //生成文件
                makeFiles(newFileNamePath, jsTemplate)
            }
        })
    }

})