
/**
 * Base 4 tt.
 * User: small
 * Date: 13-10-12
 * Time: 下午5:10
 * To change this template use File | Settings | File Templates.
 */
var cc = cc || {};

/**
 * Desc: 加载游戏，当继承资源加载完毕之后，将会调用cb这个回调函数
 * @param cb
 */
cc.loadGame = function(cb){
    return cb();
};
cc.getRes4GameModule = function(moduleName){
    var res4GM = cc.res4GameModules[moduleName];
    if(!res4GM) return [];
    var arr = [];
    for(var i = 0; i < res4GM.length; ++i){
        arr.push({src : res4GM[i]})
    }
    return arr;
};

cc.loadGameModule = function(moduleName, cb){
    var res4GM = cc.res4GameModules[moduleName];
    if(!res4GM) return cb([]);
    var arr = [];
    for(var i = 0; i < res4GM.length; ++i){
        arr.push({src : res4GM[i]})
    }
    cb(arr);
}