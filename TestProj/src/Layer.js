/**
 * Created by small on 13-11-12.
 */
tt.Layer = cc.Layer.extend({
    init : function(){
        this._super();
        var sp = tt.Sprite.create();
        this.addChild(sp);
        var winSize = cc.Director.getInstance().getWinSize();
        sp.setPosition(winSize.width/2, winSize.height/2);
        return true;
    }
});
tt.Layer.create = function(args){
    var layer = new tt.Layer();
    layer.init();
    return layer;
};