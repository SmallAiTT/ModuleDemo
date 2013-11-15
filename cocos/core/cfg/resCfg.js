var cc = cc || {};
cc.resCfg = cc.resCfg || {};

/**
 * cc.resCfg[js_core.a_js] = {ref : [], res : []}
 */

var resCfg = cc.resCfg;
//模块名称作为key，作为该模块资源配置的base加载部分
resCfg["core"] = {
    ref : [
        js_core.unit4cc_js,

        js_core.CCClass_js,
        js_core.CCConfig_js,
        js_core.miniFramework_js,
        js_core.CCCommon_js,
        js_core.base64_js,
        js_core.gzip_js,
        js_core.CCMacro_js,
        js_core.CCFileUtils_js,
        js_core.CCTypes_js,
        js_core.CCAccelerometer_js,
        js_core.zlib_min_js,
        js_core.CCEGLView_js,
        js_core.CCImage_js,
        js_core.utility_js,
//        js_core.vec2_js,
//        js_core.vec3_js,
//        js_core.vec4_js,
//        js_core.mat3_js,
//        js_core.mat4_js,
//        js_core.plane_js,
//        js_core.quaternion_js,
//        js_core.aabb_js,
//        js_core.mat4stack_js,
//        js_core.matrix_js,
//        js_core.CCSet_js,
//        js_core.CCNS_js,
//        js_core.CCAffineTransform_js,
//        js_core.CCPointExtension_js,
//        js_core.CCUserDefault_js,
//        js_core.CCVertex_js,
//        js_core.TransformUtils_js,
//        js_core.CCTGAlib_js,
//        js_core.CCPNGReader_js,
//        js_core.CCTIFFReader_js,
//        js_core.CCComponent_js,
//        js_core.CCComponentContainer_js,
        js_core.CCShaders_js,
//        js_core.CCShaderCache_js,
//        js_core.CCGLProgram_js,
//        js_core.CCGLStateCache_js,
//        js_core.CCNode_js,
//        js_core.CCAtlasNode_js,
//        js_core.CCTexture2D_js,
//        js_core.CCTextureCache_js,
//        js_core.CCTextureAtlas_js,
//        js_core.CCRenderTexture_js,
//        js_core.CCProgressTimer_js,
//        js_core.CCMotionStreak_js,
//        js_core.CCClippingNode_js,
//        js_core.CCGrid_js,
//        js_core.CCGrabber_js,
//        js_core.CCDrawNode_js,

        js_core.AppControl_js,
        js_core.CCNode_js,
        js_core.CCSprite_js,
        js_core.CCLayer_js,
        js_core.CCScene_js,
        js_core.CCLoader_js,
        js_core.CCCamera_js,
        js_core.CCDirector_js,
        js_core.CCScheduler_js
    ]
};

resCfg[js_core.CCConfig_js] = {
    ref : [js_core.CCGeometry_js, js_core.Sys_js]
};

resCfg[js_core.matrix_js] = {
    ref : [js_core.vec3_js, js_core.mat4stack_js, js_core.mat4_js]
};

resCfg[js_core.CCLoader_js] = {
    ref : [
        js_core.CCScene_js, js_core.CCLabelTTF_js, js_core.SimpleAudioEngine_js, js_core.CCSAXParser_js,
        js_core.CCActionEase_js
    ]
};

resCfg[js_core.base64_js] = {
    ref : [js_core.ZipUtils_js]
};

resCfg[js_core.CCApplication_js] = {
    ref : [js_core.CCDrawingPrimitives_js, js_core.CCConfiguration_js, js_core.CCActionInterval_js]
};
resCfg[js_core.CCActionInterval_js] = {
    ref : [js_core.CCAction_js]
};
resCfg[js_core.CCDrawingPrimitives_js] = {
    ref : [js_core.CCTextureCache_js]
};

resCfg[js_core.CCActionCamera_js] = {
    ref : [js_core.CCActionInterval_js]
};
resCfg[js_core.CCDirector_js] = {
    ref : [
        js_core.CCActionManager_js, js_core.CCTouchDispatcher_js, js_core.CCKeyboardDispatcher_js, js_core.CCAccelerometer_js,
        js_core.CCMouseDispatcher_js, js_core.CCEGLView_js, js_core.CCTexture2D_js, js_core.CCLabelAtlas_js,
        js_core.CCPointExtension_js, js_core.CCTransition_js, js_core.matrix_js
    ]
};
resCfg[js_core.mat4_js] = {
    ref : [js_core.utility_js]
};
resCfg[js_core.CCNode_js] = {
    ref : [js_core.CCAffineTransform_js, js_core.CCComponentContainer_js, js_core.mat4_js]
};
resCfg[js_core.CCLabelAtlas_js] = {
    ref : [js_core.CCAtlasNode_js]
};
resCfg[js_core.CCAtlasNode_js] = {
    ref : [js_core.CCTextureAtlas_js]
};
resCfg[js_core.CCTexture2D_js] = {
    ref : [js_core.CCGLStateCache_js, js_core.CCShaderCache_js]
};

resCfg[js_core.CCShaderCache_js] = {
    ref : [js_core.CCGLProgram_js]
};
resCfg[js_core.CCConfiguration_js] = {
    ref : [js_core.CCConfig_js, js_core.CCMacro_js]
}
resCfg[js_core.CCMouseDispatcher_js] = {
    ref : [js_core.CCTouchDelegateProtocol_js]
};
resCfg[js_core.AppControl_js] = {
    ref : [js_core.CCApplication_js]
};