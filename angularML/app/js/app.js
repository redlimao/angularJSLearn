
var bookStoreApp = angular.module('bookStoreApp',['ngRoute','ngAnimate']);

bookStoreApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/hello',{
		templateUrl:'tpls/hello.html',
		controller:'helloCtrl'
	}).when('/list',{
		templateUrl:'tpls/list.html',
		controller:'listCtrl'
	}).when('/1learn',{
		templateUrl:'tpls/1learn.html',
		controller:'CommonController',
		controller:'Controller1',
		controller:'Controller2'
	}).when('/2learn',{
		templateUrl:'tpls/2learn.html',
		controller:'myCtrl',
		controller:'ListCtrl'
	}).when('/3learn',{
		templateUrl:'tpls/3learn.html'
	}).when('/double1',{
		templateUrl:'tpls/1.双向数据绑定.html',
		controller:'UserInfoCtrl'
	}).when('/double2',{
		templateUrl:'tpls/2.双向数据绑定.html',
		controller:'HeaderController'
	}).when('/ngshow',{
		templateUrl:'tpls/ngshow.html',
		controller:'showCtrl'
	}).otherwise({
		redirectTo:'/'
	});
}]);