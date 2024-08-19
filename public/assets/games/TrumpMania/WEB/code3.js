gdjs.GameOverSceneCode = {};
gdjs.GameOverSceneCode.GDGameOverTextObjects1= [];
gdjs.GameOverSceneCode.GDGameOverTextObjects2= [];
gdjs.GameOverSceneCode.GDExitButtonObjects1= [];
gdjs.GameOverSceneCode.GDExitButtonObjects2= [];
gdjs.GameOverSceneCode.GDMenuButtonObjects1= [];
gdjs.GameOverSceneCode.GDMenuButtonObjects2= [];
gdjs.GameOverSceneCode.GDDeveloperTextObjects1= [];
gdjs.GameOverSceneCode.GDDeveloperTextObjects2= [];


gdjs.GameOverSceneCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.unloadMusic(runtimeScene, "assets/sounds/game_music.mp3");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14061692);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets/sounds/game_over_music.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.GameOverSceneCode.GDExitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverSceneCode.GDExitButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverSceneCode.GDExitButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverSceneCode.GDExitButtonObjects1[k] = gdjs.GameOverSceneCode.GDExitButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverSceneCode.GDExitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.GameOverSceneCode.GDMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverSceneCode.GDMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverSceneCode.GDMenuButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverSceneCode.GDMenuButtonObjects1[k] = gdjs.GameOverSceneCode.GDMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverSceneCode.GDMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "MenuScene");
}}

}


};

gdjs.GameOverSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverSceneCode.GDGameOverTextObjects1.length = 0;
gdjs.GameOverSceneCode.GDGameOverTextObjects2.length = 0;
gdjs.GameOverSceneCode.GDExitButtonObjects1.length = 0;
gdjs.GameOverSceneCode.GDExitButtonObjects2.length = 0;
gdjs.GameOverSceneCode.GDMenuButtonObjects1.length = 0;
gdjs.GameOverSceneCode.GDMenuButtonObjects2.length = 0;
gdjs.GameOverSceneCode.GDDeveloperTextObjects1.length = 0;
gdjs.GameOverSceneCode.GDDeveloperTextObjects2.length = 0;

gdjs.GameOverSceneCode.eventsList0(runtimeScene);

return;

}

gdjs['GameOverSceneCode'] = gdjs.GameOverSceneCode;
