var mainapp = angular.module("testapp" , ['ngCamRecorder']);

mainapp.controller("testcontroller" , function ($scope) {
	$scope.questions = [1,2,3];
	
	$scope.objects = [];
	$scope.inits = {};
	for(var i=0; i<$scope.questions.length; i++){
		var obj = {
			question: $scope.questions[i],
			configuration: {
				videoElementId: "viredemovideoele"+i,
				init : $scope.inits[$scope.questions[i]],
				recConf:{   
					recorvideodsize : 0.4, 
					webpquality     : 0.7, 
					framerate       : 15,  
					videoWidth      : 500,
					videoHeight     : 375,            
				},

				recfuncConf :{
					showbuton : 2000,
					url : "http://localhost/ngCam/js/modules/vaRecorder/php/fileupload.php",
					chunksize : 1048576,
					recordingtime : 17,
					requestparam : "filename",
					videoname : "video.webm",
					audioname : "audio.wav", 
				},

				output :{
					recordingthumb : null,
					recordinguploaded : function(){
						alert("uploaded");
					}
				},

				recordingerror : function(){
					alert("browser not compatible");
				}      
			}
		}
		$scope.objects.push(obj);
	}
	//$scope.camconfiguration = configuration;
});
