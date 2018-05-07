var MainMediator = (function(){
	function MainMediator(){
		MainMediator.__super.apply(this, arguments);
	}
	Laya.class(MainMediator, "MainMediator", puremvc.Mediator);
	MainMediator.NAME = "MainMediator";
	MainMediator.prototype.onRegister = function(){
		Laya.stage.addChild(this.viewComponent);
	}
	MainMediator.prototype.onRemove = function(){
		this.viewComponent.destroy();
	}
	MainMediator.prototype.listNotificationInterests = function(){
		return [
			Notify.TodoListChange,
			Notify.RefreshTodoItem,
			Notify.DelTodoItem,
			Notify.AddTodoItem,
		];
	}
	MainMediator.prototype.handleNotification = function(notification){
		switch (notification.getName()){
			case Notify.TodoListChange:
				this.viewComponent.refreshTodoList();
			break;
			case Notify.AddTodoItem:
				this.viewComponent.addTodoItem(notification.getBody());
			break;
			case Notify.DelTodoItem:
				this.viewComponent.delTodoItem(notification.getBody());
			break;
			case Notify.RefreshTodoItem:
				this.viewComponent.refreshTodoItem(notification.getBody());
			break;
		}
	}
	return MainMediator;
})();