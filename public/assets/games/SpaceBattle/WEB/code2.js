gdjs.liderBoardCode = {};
gdjs.liderBoardCode.localVariables = [];
gdjs.liderBoardCode.GDLightningTextureObjects1= [];
gdjs.liderBoardCode.GDLightningTextureObjects2= [];


gdjs.liderBoardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "c99e7cef-e1cb-421b-96bd-a50bfcd71e0c", runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber(), "");
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "c99e7cef-e1cb-421b-96bd-a50bfcd71e0c", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.liderBoardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.liderBoardCode.GDLightningTextureObjects1.length = 0;
gdjs.liderBoardCode.GDLightningTextureObjects2.length = 0;

gdjs.liderBoardCode.eventsList0(runtimeScene);

return;

}

gdjs['liderBoardCode'] = gdjs.liderBoardCode;
