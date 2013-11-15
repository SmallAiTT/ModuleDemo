
/**
 * Base 4 tt.
 * User: small
 * Date: 13-10-12
 * Time: 下午5:10
 * To change this template use File | Settings | File Templates.
 */
var __PUBLISH = false;
var cc = cc || {};
cc.CFG_DIR = "cfg/";
cc._ccDir = "";
cc._modulesDir = "";
cc._moduleCache = {};
cc._baseDir = "../../";
cc.__currModuleName = "";
cc._cfgCache = {};
cc._gameModules = [];//游戏的加载模块，分不同模块进行资源的分块加载
/**
 * Desc: 根据http请求获取数据
 * @returns {*}
 * @private
 */
cc._getXMLHttpRequest = function () {
    if (window.XMLHttpRequest) {
        return new window.XMLHttpRequest();
    } else {
        return new ActiveXObject("MSXML2.XMLHTTP");
    }
};
/**
 * Desc: 加载json文件
 * @param fileUrl
 * @param cb
 */
cc.loadJson = function (fileUrl, cb) {
    var selfPointer = this;
    var xhr = cc._getXMLHttpRequest();
    xhr.open("GET", fileUrl, true);
    if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
        // IE-specific logic here
        xhr.setRequestHeader("Accept-Charset", "utf-8");
    } else {
        if (xhr.overrideMimeType)
            xhr.overrideMimeType("text\/plain; charset=utf-8");
    }
    xhr.onreadystatechange = function (event) {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                cb(null, JSON.parse(xhr.responseText));
            } else {
                cb(null, null);
            }
        }
    };
    xhr.send(null);
};
/**
 * 加载js文件列表
 * @param baseDir
 * @param jsList
 * @param cb
 * @returns {*}
 */
cc.loadJs = function(baseDir, jsList, cb){
    if(arguments.length < 1) return;
    if(arguments.length == 1){
        jsList = baseDir instanceof Array ? baseDir : [baseDir];
        baseDir = "";
    }else if(arguments.length == 2){
        if(typeof jsList == "function"){
            cb = jsList;
            jsList = baseDir instanceof Array ? baseDir : [baseDir];
            baseDir = "";
        }else{
            jsList = jsList instanceof Array ? jsList : [jsList];
        }
    }else{
        jsList = jsList instanceof Array ? jsList : [jsList];
    }
    return cc._loadJsArr(baseDir, jsList, 0, cb);
};
/**
 * Desc: 加载js列表，私有方法
 * @param baseDir
 * @param jsList
 * @param index
 * @param cb
 * @private
 */
cc._loadJsArr = function(baseDir, jsList, index, cb){
    baseDir = baseDir || "";
    if(index >= jsList.length) {
        if(cb) cb();
        return;
    }
    var f = document.createElement('script');
    f.type = 'text/javascript';
    f.src = baseDir + jsList[index];
    f.addEventListener('load',function(){
        cc._loadJsArr(baseDir, jsList, index+1, cb);
        this.removeEventListener('load', arguments.callee, false);
    },false);
    document.head.appendChild(f);
};

/**
 * Desc: 加载游戏，当继承资源加载完毕之后，将会调用cb这个回调函数
 * @param cb
 */
cc.loadGame = function(cb){
    if(__PUBLISH){
        return cb();
    }else{
        cc.loadJson(cc._baseDir + "/cocos.json", function(err, data){
            if(err){
                console.error(err);
            }else{
                var dependencies = cc._getDependencies(data.dependencies);
                cc.__currModuleName = data.name;
                cc._ccDir = cc._baseDir + data.ccDir;
                cc._modulesDir = cc._ccDir + "modules/";
                //加载core模块基础的js文件，默认放在src/cfg/中
                cc.loadJs(cc._baseDir + cc.CFG_DIR  + "res.js", function(){
                    cc.loadJs(cc._ccDir + "core/" + cc.CFG_DIR , ["jsRes.js", "resCfg.js"], function(){
                        //加载自身模块信息
                        cc.loadRes("core", function(result){
                            cc.loadJs(result.js, function(){
                                cc.loadDependencies(dependencies, 0, data.name, cb);
                            });
                        });
                    });
                });
            }
        });
    }
};
/**
 * Desc: 返回依赖数组
 * @param temp
 * @returns {Array}
 * @private
 */
cc._getDependencies = function(temp){
    var dependencies = [];
    for(var key in temp){
        dependencies.push(key);
    };
    return dependencies;
}
/**
 * Desc: 加载依赖模块
 * @param dependencies
 * @param index
 * @param moduleName
 * @param cb
 */
cc.loadDependencies = function(dependencies, index, moduleName, cb){
    var moduleDir = cc.__currModuleName == moduleName ? cc._baseDir : cc._modulesDir + moduleName + "/";//模块的路径
    if(cc._moduleCache[moduleName]){
        if(cb) cb();
        return;
    }
    if(index >= dependencies.length || !dependencies[index]) {
        var cfgDir = moduleName == cc.__currModuleName ? cc._baseDir + cc.CFG_DIR  : cc._modulesDir + moduleName + "/" + cc.CFG_DIR ;
        cc.loadJs(cfgDir, ["jsRes.js", "resCfg.js"], function(){
            //加载自身模块信息
            cc.loadRes(moduleName, function(result){
                cc.loadJs(result.js, cb);
            });
        });
        return;
    }
    var dependency = dependencies[index];
    cc.loadJson(cc._modulesDir + dependency + "/cocos.json", function(err, data){
        if(err){
            console.error(err);
            console.error("Please install the module [" + dependency + "] first!");
        }else{
            cc.loadDependencies(cc._getDependencies((data.dependencies)), 0, dependency, function(){
                cc.loadDependencies(dependencies, index+1, moduleName, cb);
            });
        }
    });
};

/**
 * Desc: 加载当前资源。
 * @param js
 * @param ref
 * @param index
 * @param cb
 * @param result
 * @returns {*}
 * @private
 */
cc._loadCurrRes = function(js, ref, index, cb, result){
    if(cc._cfgCache[js]) return cc.loadRes(ref, index + 1, cb, result);
    cc._cfgCache[js] = true;
    var cfg = resCfg[js];
    if(cfg && cfg.res && cfg.res.length > 0) result.res = result.res.concat(cfg.res);
    if(typeof  js == "string" && js.length > 3 && js.indexOf(".js") == js.length - 3){
        var results = js.match(/\[\%[\w_\d]+\%\]/);
        if(results && results.length > 0){
            var moduleName = results[0].substring(2, results[0].length - 2);
            var dir = moduleName == "core" ? cc._ccDir : cc._modulesDir;
            dir += moduleName;
            if(moduleName == cc.__currModuleName) dir = cc._baseDir;
            js = js.replace(/\[\%[\w_\d]+\%\]/, dir);
        }
        result.js.push(js);
        if(index < ref.length - 1) cc.loadRes(ref, index + 1, cb, result);
        else cb(result);
    }else if(index < ref.length - 1)cc.loadRes(ref, index + 1, cb, result);
    else cb(result);
};
/**
 * Desc: 加载资源，获取到之后，会给回调函数cb一个result的参数，格式为{js : [], res : []}。
 * @param ref
 * @param index
 * @param cb
 * @param result
 * @returns {*}
 */
cc.loadRes = function(ref, index, cb, result){
    if(arguments.length == 2){
        cb = index;
        index = 0;
        ref = [ref];
    }
    result = result || {js : [], res : []};
    var js = ref[index];
    if(!js) return cb(result);
    var cfg = typeof js == "string" ? cc.resCfg[js] : js;

    if(cfg && cfg.ref){//有引用到其他js
        cc.loadRes(cfg.ref, 0, function(result){
            //加载当前js
            cc._loadCurrRes(js, ref, index, cb, result);
        }, result);
    }else{
        cc._loadCurrRes(js, ref, index, cb, result);
    }
};

cc.getRes4GameModule = function(moduleName){
    if(__PUBLISH){
        var res4GM = cc.res4GameModules[moduleName];
        if(!res4GM) return [];
        var arr = [];
        for(var i = 0; i < res4GM.length; ++i){
            arr.push({src : res4GM[i]})
        }
        return arr;
    }else{
        return [];
    }
};

cc.loadGameModule = function(moduleName, cb){
    cc.loadRes(moduleName, function(result){
        cc.loadJs(result.js, function(){
            var resArr = result.res;
            var arr = [];
            for(var i = 0; i < resArr.length; ++i){
                arr.push({src : resArr[i]})
            }
            cb(arr);
        });
    });
}