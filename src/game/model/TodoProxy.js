var TodoProxy = (function(){
	function TodoProxy(){
		TodoProxy.__super.apply(this, arguments);
	}
	Laya.class(TodoProxy, "TodoProxy", puremvc.Proxy);
	TodoProxy.NAME = "TodoProxy";
	TodoProxy.prototype.onRegister = function(){
		this.list = [
			new TodoInfo("洗衣服", 1),
			new TodoInfo("电话咨询", 0),
			new TodoInfo("补充日用品", 0),
			new TodoInfo("订机票", 1),
		];
		this.sendNotification(Notify.TodoListChange);
	}
	TodoProxy.prototype.onRemove = function(){
		this.list.length = 0;
		this.list = null;
	}
	TodoProxy.prototype.addTodo = function(title) {
		if (!title) {
			console.warn("内容为空~");
			return false;
		}
		var info = new TodoInfo();
		info.title = title;
		info.state = 0;
		this.list.push(info);

		this.sendNotification(Notify.AddTodoItem, info);

		return true;
	}
	TodoProxy.prototype.delTodo = function(info) {
		if (!info) {
			return;
		}
		var index = this.list.indexOf(info);
		if (index != -1) {
			this.list.splice(index, 1);
		}
		this.sendNotification(Notify.DelTodoItem, info);
		return true;
	}
	TodoProxy.prototype.toggleTodo = function(info) {
		if (!info) {
			return;
		}
		info.state = (!info.state) * 1;
		this.sendNotification(Notify.RefreshTodoItem, info);
		return true;
	}
	return TodoProxy;
})();