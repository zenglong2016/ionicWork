// Ionic Stater App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

//.run(function($ionicPlatform) {
//$ionicPlatform.ready(function() {
//  if(window.cordova && window.cordova.plugins.Keyboard) {
//    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//    // for form inputs)
//    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//
//    // Don't remove this line unless you know what you are doing. It stops the viewport
//    // from snapping when text inputs are focused. Ionic handles this internally for
//    // a much nicer keyboard experience.
//    cordova.plugins.Keyboard.disableScroll(true);
//  }
//  if(window.StatusBar) {
//    StatusBar.styleDefault();
//  }
//});
//})

.controller('ctrl',function($scope,$timeout,$ionicActionSheet,$ionicLoading,$ionicPopup){
	$scope.data=[11,22]
	
	$scope.dorefresh = function(){
		$timeout(function(){ 
			$scope.data=[33,44]
			$scope.$broadcast('scroll.refreshComplete');
		},2000)		
	}
	
	$scope.show=function(){
		$ionicActionSheet.show({
			buttons:[
			{text:'选项一'},
			{text:'选项二'}
			],
			titleText:'标题',
			cancelText:'取消',
			cancel:function(){
				console.log('取消了')
			},
			buttonClicked:function(res){
				if(res==0){//点击了选项一
					console.log('点击了选项一')
				}else{
					console.log('点击了选项二')
				}
			}
		})
	}
	$scope.a = "未选中";
	$scope.chec = function(b){
		if(b){
			$scope.a = "选中";
		}else{
			$scope.a = "未选中";
		}
	}
	$scope.onhold = function(){
		console.log("长按事件")
	}
	$scope.doub = function(){
		console.log("双击事件")
	}
	$scope.load = function(){
		$ionicLoading.show()
		 
		$timeout(function(){
			$ionicLoading.hide()
		},2000)
	}

	$scope.tap=function(){
		$ionicPopup.show({
			template:'<input type="text" />',
			title:'主题标',
			subTitle:"二级标题",
			buttons:[
			{text:'取消'},
			{text:'确认',type:'button-dark',onTap:function(){
				console.log('queren')
			}}
			]
		})
	}
	$scope.tap1=function(){
		$ionicPopup.confirm({
			title:'确认框',
			template:'你要给我一百万吗？'
		}).then(function(res){
			if(res){
				alert('不客气')
			}else{
				alert('一百万都不给')
			}
		})
	}
	$scope.tap2=function(){
		$ionicPopup.alert({
			title:'警告',
			template:'此物有毒，赶紧走'
		}).then(function(res){
			alert('好嘛')
		})
	}
})

.constant('$ionicLoadingConfig',{
	template:'<ion-spinner icon="bubbles" class="spinner-balanced"></ion-spinner>'
})













