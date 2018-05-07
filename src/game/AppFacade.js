var AppFacade = (function(){
    function AppFacade(){
    	AppFacade.__super.apply(this, arguments);
    }
    Laya.class(AppFacade, "AppFacade", puremvc.Facade);
    AppFacade.prototype.startup = function(){
    	this.initializeFacade();

    	this.registerProxy(new TodoProxy);

    	this.registerMediator(new MainMediator(null, new Main()));
    }
    return AppFacade;
})(window);