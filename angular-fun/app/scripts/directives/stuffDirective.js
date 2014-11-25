


angular.module('angularFunApp')
	.directive('stuffDirective', function(){
		return {
			restrict: 'AEC',
			link: function(scope, element, attrs) {
				console.log(scope, element, attrs);
				var firstLoad = true;
				init();
				//element.css({top: randomTop, left: randomLeft});
				function init() {
					TweenMax.set(element, {
						left: -100,
						top: -100
					});
					aniIn();
					firstLoad = false;
				}
				function aniIn(){
					var randomTop = (Math.random() * 200) + 5;
					var randomLeft = (Math.random() * 200) + 5;
					var randomTime = 2.5;
					var randomDelay = 0;
					if (firstLoad) {
						randomTime = (Math.random() * 3) + 1;
						randomDelay = (Math.random() * 0.75) + 0;
					}
					
					TweenMax.to(element, randomTime, {left: randomLeft, top: randomTop, ease: Elastic.easeOut, delay: randomDelay});
				}
				scope.mouseOver = function()  {
					TweenMax.to(element, 1, {
						css:{scaleX: 1.5, scaleY: 1.5},
						ease: Expo.easeInOut
					})
				}
				scope.mouseOut = function() {
					TweenMax.to(element, 1, {
						css:{scaleX: 1, scaleY: 1 }
					})
					aniIn();
				}
			}//end function
		}//end of my return
	});//end of my directive