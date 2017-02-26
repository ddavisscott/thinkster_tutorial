var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello Isabel!';
  $scope.posts = [
  		{title:'post1', upvotes:5},
  		{title:'post2', upvotes:2},
  		{title:'post3', upvotes:15},
  		{title:'post4', upvotes:9},
  		{title:'post5', upvotes:4}
	];
	$scope.addPost = function(){
		if ($scope.title===''){return;} 
		if ($scope.upvotes===''){return;} 
		$scope.posts.push({
			title:$scope.title,
			link: $scope.link,
			upvotes: 4
			});
		$scope.title = '';
		$scope.upvotes = '';
	}



	$scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};
}]);