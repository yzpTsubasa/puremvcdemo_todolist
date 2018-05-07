var GameData  = {
	facade: null,
};
Laya.getset(true, GameData, "TodoProxy", function(){
	return this.facade.retrieveProxy(TodoProxy.NAME);
})