Laya.init(480, 600, Laya.WebGL);
Laya.stage.bgColor = "#cccccc";
Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(this, this.onResLoad));
function onResLoad(){
	var facade = new AppFacade("TodoApp");
	GameData.facade = facade;
	facade.startup();
}