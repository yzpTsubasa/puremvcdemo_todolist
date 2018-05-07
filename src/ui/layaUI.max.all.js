var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var TodoItemRenderUI=(function(_super){
		function TodoItemRenderUI(){
			
		    this.check_content=null;
		    this.lab_title=null;
		    this.btn_delete=null;

			TodoItemRenderUI.__super.call(this);
		}

		CLASS$(TodoItemRenderUI,'ui.component.TodoItemRenderUI',_super);
		var __proto__=TodoItemRenderUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TodoItemRenderUI.uiView);

		}

		TodoItemRenderUI.uiView={"type":"View","props":{"width":150,"height":30},"child":[{"type":"CheckBox","props":{"y":8,"x":8,"var":"check_content","skin":"comp/checkbox.png","height":14}},{"type":"Label","props":{"y":3,"x":24,"width":99,"var":"lab_title","valign":"middle","text":"XXXXXX","height":24,"color":"#ff5b00","bold":true,"align":"left"}},{"type":"Button","props":{"y":5,"x":123,"width":25,"visible":false,"var":"btn_delete","skin":"comp/btn_close.png","height":20}}]};
		return TodoItemRenderUI;
	})(View);
var MainUI=(function(_super){
		function MainUI(){
			
		    this.list_todo=null;
		    this.input_todo=null;
		    this.btn_add=null;

			MainUI.__super.call(this);
		}

		CLASS$(MainUI,'ui.view.MainUI',_super);
		var __proto__=MainUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ui.component.TodoItemRenderUI",ui.component.TodoItemRenderUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MainUI.uiView);

		}

		MainUI.uiView={"type":"View","props":{"width":480,"height":600},"child":[{"type":"Label","props":{"y":20,"x":162,"text":"TODO  List","fontSize":30,"color":"#ff8400","centerX":0,"bold":true}},{"type":"List","props":{"y":161,"x":165,"width":150,"var":"list_todo","repeatX":1,"height":435,"centerX":0},"child":[{"type":"TodoItemRender","props":{"renderType":"render","runtime":"ui.component.TodoItemRenderUI"}}]},{"type":"TextInput","props":{"y":70,"x":149,"width":181,"var":"input_todo","promptColor":"#00c1ff","prompt":"Input your todo item here~","height":40,"fontSize":14,"color":"#ffffff","borderColor":"#ffffff","bgColor":"#121111"}},{"type":"Button","props":{"y":119,"x":148,"width":184,"var":"btn_add","skin":"comp/button.png","label":"ADD","height":40,"sizeGrid":"5,5,5,5"}}]};
		return MainUI;
	})(View);