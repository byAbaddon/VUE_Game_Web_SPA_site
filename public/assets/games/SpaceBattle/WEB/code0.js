gdjs.introSceneCode = {};
gdjs.introSceneCode.localVariables = [];
gdjs.introSceneCode.GDintorBGObjects1= [];
gdjs.introSceneCode.GDintorBGObjects2= [];
gdjs.introSceneCode.GDredObjects1= [];
gdjs.introSceneCode.GDredObjects2= [];
gdjs.introSceneCode.GDrankListObjects1= [];
gdjs.introSceneCode.GDrankListObjects2= [];
gdjs.introSceneCode.GDtextRedButtonObjects1= [];
gdjs.introSceneCode.GDtextRedButtonObjects2= [];
gdjs.introSceneCode.GDtextRankListButtonObjects1= [];
gdjs.introSceneCode.GDtextRankListButtonObjects2= [];
gdjs.introSceneCode.GDtextLogoObjects1= [];
gdjs.introSceneCode.GDtextLogoObjects2= [];
gdjs.introSceneCode.GDcreditsObjects1= [];
gdjs.introSceneCode.GDcreditsObjects2= [];
gdjs.introSceneCode.GDtexCreditskButtonObjects1= [];
gdjs.introSceneCode.GDtexCreditskButtonObjects2= [];
gdjs.introSceneCode.GDLightningTextureObjects1= [];
gdjs.introSceneCode.GDLightningTextureObjects2= [];


gdjs.introSceneCode.asyncCallback16666516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.introSceneCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "creditsScent");
}}
gdjs.introSceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.introSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.introSceneCode.asyncCallback16666516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introSceneCode.asyncCallback16668412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.introSceneCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "gameSceneOne");
}}
gdjs.introSceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.introSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.introSceneCode.asyncCallback16668412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introSceneCode.asyncCallback16669604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.introSceneCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "liderBoard");
}}
gdjs.introSceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.introSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.introSceneCode.asyncCallback16669604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introSceneCode.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("credits"), gdjs.introSceneCode.GDcreditsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introSceneCode.GDcreditsObjects1.length;i<l;++i) {
    if ( gdjs.introSceneCode.GDcreditsObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.introSceneCode.GDcreditsObjects1[k] = gdjs.introSceneCode.GDcreditsObjects1[i];
        ++k;
    }
}
gdjs.introSceneCode.GDcreditsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16666156);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/sounds/clickButton/btn_one.wav", false, 100, 1);
}
{ //Subevents
gdjs.introSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("red"), gdjs.introSceneCode.GDredObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introSceneCode.GDredObjects1.length;i<l;++i) {
    if ( gdjs.introSceneCode.GDredObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.introSceneCode.GDredObjects1[k] = gdjs.introSceneCode.GDredObjects1[i];
        ++k;
    }
}
gdjs.introSceneCode.GDredObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16667604);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/sounds/clickButton/btn_one.wav", false, 100, 1);
}
{ //Subevents
gdjs.introSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rankList"), gdjs.introSceneCode.GDrankListObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introSceneCode.GDrankListObjects1.length;i<l;++i) {
    if ( gdjs.introSceneCode.GDrankListObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.introSceneCode.GDrankListObjects1[k] = gdjs.introSceneCode.GDrankListObjects1[i];
        ++k;
    }
}
gdjs.introSceneCode.GDrankListObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16669244);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/sounds/clickButton/btn_one.wav", false, 100, 1);
}
{ //Subevents
gdjs.introSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.introSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introSceneCode.GDintorBGObjects1.length = 0;
gdjs.introSceneCode.GDintorBGObjects2.length = 0;
gdjs.introSceneCode.GDredObjects1.length = 0;
gdjs.introSceneCode.GDredObjects2.length = 0;
gdjs.introSceneCode.GDrankListObjects1.length = 0;
gdjs.introSceneCode.GDrankListObjects2.length = 0;
gdjs.introSceneCode.GDtextRedButtonObjects1.length = 0;
gdjs.introSceneCode.GDtextRedButtonObjects2.length = 0;
gdjs.introSceneCode.GDtextRankListButtonObjects1.length = 0;
gdjs.introSceneCode.GDtextRankListButtonObjects2.length = 0;
gdjs.introSceneCode.GDtextLogoObjects1.length = 0;
gdjs.introSceneCode.GDtextLogoObjects2.length = 0;
gdjs.introSceneCode.GDcreditsObjects1.length = 0;
gdjs.introSceneCode.GDcreditsObjects2.length = 0;
gdjs.introSceneCode.GDtexCreditskButtonObjects1.length = 0;
gdjs.introSceneCode.GDtexCreditskButtonObjects2.length = 0;
gdjs.introSceneCode.GDLightningTextureObjects1.length = 0;
gdjs.introSceneCode.GDLightningTextureObjects2.length = 0;

gdjs.introSceneCode.eventsList3(runtimeScene);

return;

}

gdjs['introSceneCode'] = gdjs.introSceneCode;
