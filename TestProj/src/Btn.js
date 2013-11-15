/**
 * Created by small on 13-11-12.
 */
tt.Btn = cc.Sprite.extend({
    init : function(){
        this._super(res.btnbg_1_png);
        return true;
    }
});
tt.Btn.create = function(args){
    var btn = new tt.Btn();
    btn.init();
    return btn;
};