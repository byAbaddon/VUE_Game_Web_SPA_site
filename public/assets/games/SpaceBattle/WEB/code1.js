gdjs.creditsScentCode = {};
gdjs.creditsScentCode.localVariables = [];
gdjs.creditsScentCode.GDBG_9595CreditsObjects1= [];
gdjs.creditsScentCode.GDBG_9595CreditsObjects2= [];
gdjs.creditsScentCode.GDbuttonBackObjects1= [];
gdjs.creditsScentCode.GDbuttonBackObjects2= [];
gdjs.creditsScentCode.GDtextBackObjects1= [];
gdjs.creditsScentCode.GDtextBackObjects2= [];
gdjs.creditsScentCode.GDLightningTextureObjects1= [];
gdjs.creditsScentCode.GDLightningTextureObjects2= [];


gdjs.creditsScentCode.asyncCallback16715588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.creditsScentCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "introScene");
}}
gdjs.creditsScentCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.creditsScentCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.creditsScentCode.asyncCallback16715588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.creditsScentCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("buttonBack"), gdjs.creditsScentCode.GDbuttonBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.creditsScentCode.GDbuttonBackObjects1.length;i<l;++i) {
    if ( gdjs.creditsScentCode.GDbuttonBackObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.creditsScentCode.GDbuttonBackObjects1[k] = gdjs.creditsScentCode.GDbuttonBackObjects1[i];
        ++k;
    }
}
gdjs.creditsScentCode.GDbuttonBackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16714764);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/sounds/clickButton/btn_one.wav", false, 100, 1);
}
{ //Subevents
gdjs.creditsScentCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.creditsScentCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.creditsScentCode.GDBG_9595CreditsObjects1.length = 0;
gdjs.creditsScentCode.GDBG_9595CreditsObjects2.length = 0;
gdjs.creditsScentCode.GDbuttonBackObjects1.length = 0;
gdjs.creditsScentCode.GDbuttonBackObjects2.length = 0;
gdjs.creditsScentCode.GDtextBackObjects1.length = 0;
gdjs.creditsScentCode.GDtextBackObjects2.length = 0;
gdjs.creditsScentCode.GDLightningTextureObjects1.length = 0;
gdjs.creditsScentCode.GDLightningTextureObjects2.length = 0;

gdjs.creditsScentCode.eventsList1(runtimeScene);

return;

}

gdjs['creditsScentCode'] = gdjs.creditsScentCode;
