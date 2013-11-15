/**
 * Created by small on 13-11-11.
 */
tt.Sprite = cc.Sprite.extend({
    init : function(){
        this._super(res.bg_1_jpg);
        var btn = tt.Btn.create();
        this.addChild(btn);
        btn.setPosition(100, 100);
        return true;
    }
});
tt.Sprite.create = function(args){
    var sp = new tt.Sprite();
    sp.init();
    return sp;
};