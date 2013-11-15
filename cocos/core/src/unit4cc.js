/**
 * Test unit 4 mo.
 * @type {*|{}}
 */

var cc = cc || {};
cc.resCfg = cc.resCfg || {};
var resCfg = cc.resCfg;
cc.getClazz = function(clazzPath){
    var clazz = null;
    var arr = clazzPath.split(".");
    for(var i = 0; i < arr.length; ++i){
        clazz = clazz == null ? window[arr[i]] : clazz[arr[i]];
    }
    return clazz;
};
/**
 * Desc:test for sprite.
 * @param cfgName
 */
cc.testSprite = function(clazz, args){
    var layer = cc.Layer.create();
    var sprite = clazz.create(args || {});
    layer.addChild(sprite);
    var winSize = cc.Director.getInstance().getWinSize();
    sprite.setPosition(winSize.width/2, winSize.height/2);
    var scene = cc.Scene.create();
    scene.addChild(layer);
    cc.Director.getInstance().replaceScene(scene);
};
/**
 * Desc: test for layer.
 * @param cfgName
 */
cc.testLayer = function(clazz, args){
    var scene = cc.Scene.create();
    scene.addChild(clazz.create(args || {}));
    cc.Director.getInstance().replaceScene(scene);
};
/**
 * Desc: test for scene.
 * @param cfgName
 */
cc.testScene = function(clazz, args){
    var scene = clazz.create(args || {});
    cc.Director.getInstance().replaceScene(scene);
};
/**
 * Desc: test for ccbi.
 * @param cfgName
 */
cc.testCCBI = function(cfgName, cfg){
    var node = cc.BuilderReader.load(cfgName);
    var scene = cc.Scene.create();
    if(node != null) scene.addChild(node);
    cc.Director.getInstance().replaceScene(scene);
};

cc.unitMap = {
    scene : cc.testScene,
    layer : cc.testLayer,
    sprite : cc.testSprite,
    ccbi : cc.testCCBI
};
cc.unitMap4Cust = {
    ccbi : true
};
cc._trans4Res = function(resArr){
    var arr = [];
    for(var i = 0, li = resArr.length; i < li; i++){
        var itemi = resArr[i];
        arr.push({src : itemi});
    }
    return arr;
}
/**
 * Desc: enter point of test unit.
 * @param cfgName
 */
cc.test = function(cfgName){
    cc.loadRes(cfgName, function(result){
        cc.loadJs(result.js, function(){
            cc.LoaderScene.preload(cc._trans4Res(result.res), function(){
                var cfg = resCfg[cfgName];
                if(!cfg) throw "Please config the info of [" + cfgName + "] in resCfg.js first!"
                for (var key in cc.unitMap) {
                    if(!key) continue;
                    if(!cfg[key]) continue;
                    if(cc.unitMap4Cust[key]) return c.unitMap[key](cfgName, cfg);
                    var clazz = cc.getClazz(cfg[key]);
                    if(!clazz) return console.error("class of [" + cfg[key] + "] not exists!")
                    return cc.unitMap[key](clazz, cfg.args);
                }
            });
        });
    });
};
