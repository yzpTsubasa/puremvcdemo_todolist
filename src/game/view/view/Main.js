/**Created by the LayaAirIDE*/
	var Main=(function(_super){
		function Main(){
			Main.__super.apply(this, arguments);
		}

		Laya.class(Main,'Main',_super);

		Main.prototype.createChildren = function(){
			_super.prototype.createChildren.apply(this, arguments);

			this.btn_add.clickHandler = new Laya.Handler(this, this.onAdd);
			this.list_todo.renderHandler = new Laya.Handler(this, this.onListRender);
			this.list_todo.vScrollBarSkin = "";
			this.list_todo.scrollBar.elasticDistance = 100;
			this.input_todo.on(Laya.Event.ENTER, this, this.onInputEnter);

			this.list_todo.array = GameData.TodoProxy.list.concat();
		}
		Main.prototype.onAdd = function(){
			GameData.TodoProxy.addTodo(this.input_todo.text);
			this.input_todo.text = "";
		}
		Main.prototype.onInputEnter = function(){
			this.onAdd();
		}
		Main.prototype.onToggle = function(index) {
			GameData.TodoProxy.toggleTodo(this.list_todo.array[index]);
		}
		Main.prototype.onDelete = function(index) {
			GameData.TodoProxy.delTodo(this.list_todo.array[index]);
		}
		Main.prototype.onListRender = function(cell, index) {
			var data = this.list_todo.array[index];
			if (data instanceof TodoInfo) {
				var hasFinish = data.state == 1;
				cell.check_content.selected = hasFinish;
				cell.lab_title.text = data.title;
				cell.lab_title.italic = hasFinish;
				cell.data = data;
				cell.btn_delete.clickHandler = new Laya.Handler(this, this.onDelete, [index]);
				cell.off(Laya.Event.MOUSE_OVER, this, this.onMouseOver);
				cell.off(Laya.Event.MOUSE_OUT, this, this.onMouseOut);
				cell.off(Laya.Event.CLICK, this, this.onToggle);
				cell.on(Laya.Event.CLICK, this, this.onToggle, [index]);
				cell.on(Laya.Event.MOUSE_OVER, this, this.onMouseOver, [cell, index]);
				cell.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut, [cell, index]);
			}
		}
		Main.prototype.onMouseOver = function(cell, index){
			cell.btn_delete.visible = true;
		}
		Main.prototype.onMouseOut = function(cell, index){
			cell.btn_delete.visible = false;
		}
		Main.prototype.refreshTodoList = function(info){
			this.list_todo.refresh();
		}
		Main.prototype.addTodoItem = function(info){
			this.list_todo.addItem(info);
		}
		Main.prototype.delTodoItem = function(info){
			this.list_todo.deleteItem(this.list_todo.array.indexOf(info));
		}
		Main.prototype.refreshTodoItem = function(info){
			var index = this.list_todo.array.indexOf(info);
			this.list_todo.setItem(index, info);
		}

		return Main;
	})(MainUI)