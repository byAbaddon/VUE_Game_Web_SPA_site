gdjs.MenuSceneCode = {};
gdjs.MenuSceneCode.GDLogoTextObjects1= [];
gdjs.MenuSceneCode.GDLogoTextObjects2= [];
gdjs.MenuSceneCode.GDNewSpriteObjects1= [];
gdjs.MenuSceneCode.GDNewSpriteObjects2= [];
gdjs.MenuSceneCode.GDPlayButtonObjects1= [];
gdjs.MenuSceneCode.GDPlayButtonObjects2= [];
gdjs.MenuSceneCode.GDDeveloperTextObjects1= [];
gdjs.MenuSceneCode.GDDeveloperTextObjects2= [];


gdjs.MenuSceneCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.unloadMusic(runtimeScene, "assets/sounds/game_over_music.mp3");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14043188);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets/sounds/menuBG.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuSceneCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuSceneCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuSceneCode.GDPlayButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuSceneCode.GDPlayButtonObjects1[k] = gdjs.MenuSceneCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuSceneCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "GameSeceneOne");
}}

}


};

gdjs.MenuSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuSceneCode.GDLogoTextObjects1.length = 0;
gdjs.MenuSceneCode.GDLogoTextObjects2.length = 0;
gdjs.MenuSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuSceneCode.GDPlayButtonObjects1.length = 0;
gdjs.MenuSceneCode.GDPlayButtonObjects2.length = 0;
gdjs.MenuSceneCode.GDDeveloperTextObjects1.length = 0;
gdjs.MenuSceneCode.GDDeveloperTextObjects2.length = 0;

gdjs.MenuSceneCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuSceneCode'] = gdjs.MenuSceneCode;
