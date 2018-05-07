var TodoInfo = (function(){
	function TodoInfo(title, state){
		this.title = title || "";
		this.state = state || 0;
	}
	return TodoInfo;
})();