var resCfg = cc.resCfg;

resCfg["TestProj"] = {
    ref : [js_TestProj.tt_js]
};

resCfg[js_TestProj.Btn_js] = {
    res : [res.btnbg_1_png]
};
resCfg[js_TestProj.Sprite_js] = {
    ref : [js_TestProj.Btn_js],
    res : [res.bg_1_jpg],
    sprite : "tt.Sprite"
};
resCfg[js_TestProj.Layer_js] = {
    ref : [js_TestProj.Sprite_js],
    layer : "tt.Layer"
};

resCfg.gameModules = [js_TestProj.Sprite_js, js_TestProj.Layer_js];