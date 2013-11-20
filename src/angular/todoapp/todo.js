function todoCtrl($scope){
	$scope.todos = [];
	
	$scope.addTodo = function(){
		$scope.todos.push({text:$scope.todoText, done:false});
		$scope.todoText = '';
	};

	$scope.remaining = function(){
		var count = 0;
		angular.forEach(
				$scope.todos,
				function(todo){
					count += todo.done ? 0 : 1;
				});
		return count;
	};

	$scope.archive = function(){
		var old = $scope.todos;
		$scope.todos = [];
		angular.forEach(
				old,
				function(todo){
					if(!todo.done){
						$scope.todos.push(todo);
					}
				});
	};
}
