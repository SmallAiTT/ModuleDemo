var fs = require("fs");
var path = require("path");

var projDir = path.join(__dirname, "TestProj1");
var projName = "TestProj1";
var ccDir = "../cocos/";//相对于项目的路径
var tempDir = path.join(__dirname, "projTemp");

var fileFrmt = {};

function pubFrmt(content, info){
    content = content.replace(/\[\%name\%\]/g, info.name);
    content = content.replace(/\[\%ccDir\%\]/g, info.ccDir);
    return content;
}

fileFrmt["index.html"] = pubFrmt;
fileFrmt["release.html"] = pubFrmt;
fileFrmt["resCfg.js"] = pubFrmt;
fileFrmt["index.html"] = pubFrmt;
fileFrmt["cocos.json"] = pubFrmt;
fileFrmt["main.js"] = pubFrmt;

function copyFiles(srcDir, targetDir, info){
    var files = fs.readdirSync(srcDir);
    for(var i = 0, li = files.length; i < li; i++){
        var file = files[i];
        if(fs.statSync(path.join(srcDir, file)).isDirectory()){//如果是目录则创建目录
            var dir = path.join(targetDir, file + "/");
            fs.mkdirSync(dir);
            copyFiles(path.join(srcDir, file + "/"), dir, info);//继续递归
        }else{
            var content = fs.readFileSync(path.join(srcDir, file)).toString();
            console.log(file);
            if(fileFrmt[file]) content = fileFrmt[file](content, info);
            fs.writeFileSync(path.join(targetDir, file), content);//如果是文件则复制过去
        }
    }
}

function create(tempDir, projDir, info){
    //判断模板是否存在
    if(!fs.existsSync(tempDir)) return console.error(tempDir + " not exists!");

    //目录已经存在就不允许再次创建
    if(fs.existsSync(projDir)) return console.error(projDir + " exists! Can not create again!");

    fs.mkdirSync(projDir);//创建项目目录

    copyFiles(tempDir, projDir, info);
};

var info = {
    name : projName,
    ccDir : ccDir
}
create(tempDir, projDir, info);