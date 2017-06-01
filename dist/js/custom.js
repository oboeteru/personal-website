var rafId = null;
var delay = 400;
var lTime = 0;

function scroll() {
  var scrollTop = $(window).scrollTop();
  var height = $(window).height()
  var visibleTop = scrollTop + height;
  $('.reveal').each(function() {
    var $t = $(this);
    if ($t.hasClass('reveal_visible')) { return; }
    var top = $t.offset().top;
    if (top <= visibleTop) {
      if (top + $t.height() < scrollTop) {
        $t.removeClass('reveal_pending').addClass('reveal_visible');
      } else {
        $t.addClass('reveal_pending');
        if (!rafId) requestAnimationFrame(reveal);  
      }
    }
  });
}
function reveal() {
  rafId = null;
  var now = performance.now();
  
  if (now - lTime > delay) {
    lTime = now;
    var $ts = $('.reveal_pending');
    $($ts.get(0)).removeClass('reveal_pending').addClass('reveal_visible');  
  }
  
  
  if ($('.reveal_pending').length >= 1) rafId = requestAnimationFrame(reveal);
}

$(scroll);
$(window).scroll(scroll);



var app = angular.module('plunker', ['ui.bootstrap']);

var CmArticles = function ($scope) {
	$scope.articles = [
	{'picsrc' : "dist/svg/satellite.svg", 'text' : "Lorem ipsum dolor sit amet, accusamus egestas. Curabitur sed fermentum, vitae mauris in, mauris venenatis. Eu lobortis purus. Elit arcu, in fringilla. Ligula amet vel, ut mattis fermentum.", "title" : "Rather ranndom title"},
	{'picsrc' : "dist/svg/half-moon-stars.svg", 'text' : "Lorem ipsum dolor sit amet, accusamus egestas. Curabitur sed fermentum, vitae mauris in, mauris venenatis. Eu lobortis purus. Elit arcu, in fringilla. Ligula amet vel, ut mattis fermentum.", "title" : "Rather ranndom title"},
	{'picsrc' : "dist/svg/rocket.svg", 'text' : "Lorem ipsum dolor sit amet, accusamus egestas. Curabitur sed fermentum, vitae mauris in, mauris venenatis. Eu lobortis purus. Elit arcu, in fringilla. Ligula amet vel, ut mattis fermentum.", "title" : "Rather ranndom title"},
	{'picsrc' : "dist/svg/moon.svg", 'text' : "Lorem ipsum dolor sit amet, accusamus egestas. Curabitur sed fermentum, vitae mauris in, mauris venenatis. Eu lobortis purus. Elit arcu, in fringilla. Ligula amet vel, ut mattis fermentum.", "title" : "Rather ranndom title"},
	{'picsrc' : "dist/svg/planets.svg", 'text' : "Lorem ipsum dolor sit amet, accusamus egestas. Curabitur sed fermentum, vitae mauris in, mauris venenatis. Eu lobortis purus. Elit arcu, in fringilla. Ligula amet vel, ut mattis fermentum.", "title" : "Rather ranndom title"},
	{'picsrc' : "dist/svg/milky-way.svg", 'text' : "Lorem ipsum dolor sit amet, accusamus egestas. Curabitur sed fermentum, vitae mauris in, mauris venenatis. Eu lobortis purus. Elit arcu, in fringilla. Ligula amet vel, ut mattis fermentum.", "title" : "Rather ranndom title"},
	{'picsrc' : "dist/svg/astronaut-face.svg", 'text' : "Lorem ipsum dolor sit amet, accusamus egestas. Curabitur sed fermentum, vitae mauris in, mauris venenatis. Eu lobortis purus. Elit arcu, in fringilla. Ligula amet vel, ut mattis fermentum.", "title" : "Rather ranndom title 7"}];

  $scope.totalItems = $scope.articles.length;
  $scope.currentPage = 1;
  $scope.currentItem = 0;
};

var CmProjects = function ($scope) {
	$scope.cmprojects = [ 
	{'id' : '1', 'name' : 'Project One', 'steps' : { '1' : {'title' : 'project one step 1', 'short_desc' : 'short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc', 'long_desc' : 'long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desclong_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc', 'picsrc' : "dist/svg/satellite-2.svg"}, '2' : {'title' : 'project one step 2', 'short_desc' : 'short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc', 'long_desc' : 'long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desclong_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc', 'picsrc' : "dist/svg/satellite-2.svg"}, '3' : {'title' : 'project one step 3', 'short_desc' : 'short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc', 'long_desc' : 'long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desclong_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc', 'picsrc' : "dist/svg/satellite-2.svg"}, '4' : {'title' : 'project one step 4', 'short_desc' : 'short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc', 'long_desc' : 'long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desclong_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc', 'picsrc' : "dist/svg/satellite-2.svg"}, '5' : {'title' : 'project one step 5', 'short_desc' : 'short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc', 'long_desc' : 'long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desclong_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc', 'picsrc' : "dist/svg/satellite-2.svg"}}, 'description' : "In tincidunt, dui eu placerat commodo, nulla est fermentum ipsum, a porta magna dolor in velit. Fusce justo ipsum, tristique quis pharetra et, faucibus nec tellus. Etiam tempus ante quis ipsum viverra, et feugiat sapien luctus. Pellentesque sodales libero sit amet nibh aliquam ultricies. Phasellus malesuada ligula non ex pulvinar, non commodo magna sagittis. Pellentesque fringilla laoreet congue. Curabitur tincidunt tempor sagittis. Duis vitae auctor ipsum. Duis egestas fringilla ullamcorper. Nunc vel velit urna. Aenean eget velit tempus, vehicula mauris eu, porttitor nulla. Curabitur ac nulla neque. Curabitur justo felis, condimentum fringilla egestas sed, feugiat a tortor. Nunc vehicula viverra ultricies. Donec vulputate sit amet enim ut elementum.", 'tools' : ['Python', 'Git', 'CSS'], 'time_total' : '3h', 'additional_remarks' : 'This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible.<br><br>This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible.<br><br>This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible.This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible.', 'date_finished' : '1487602192000', 'main_image' : 'dist/svg/satellite-2.svg', 'keywords' : ['one', 'two', 'three']},
	
	{'id' : '2', 'name' : 'Project Two', 'steps' : { '1' : {'title' : 'project 2 step 1', 'short_desc' : 'short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc', 'long_desc' : 'long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desclong_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc', 'picsrc' : "dist/svg/satellite-2.svg"}, '2' : {'title' : 'project 2 step 2', 'short_desc' : 'short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc', 'long_desc' : 'long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desclong_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc', 'picsrc' : "dist/svg/satellite-2.svg"}, '3' : {'title' : 'project 2 step 3', 'short_desc' : 'short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc', 'long_desc' : 'long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desclong_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc', 'picsrc' : "dist/svg/satellite-2.svg"}, '4' : {'title' : 'project 2 step 4', 'short_desc' : 'short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc', 'long_desc' : 'long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desclong_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc', 'picsrc' : "dist/svg/satellite-2.svg"}, '5' : {'title' : 'project 2 step 5', 'short_desc' : 'short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc', 'long_desc' : 'long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desclong_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc', 'picsrc' : "dist/svg/satellite-2.svg"}}, 'description' : "In tincidunt, dui eu placerat commodo, nulla est fermentum ipsum, a porta magna dolor in velit. Fusce justo ipsum, tristique quis pharetra et, faucibus nec tellus. Etiam tempus ante quis ipsum viverra, et feugiat sapien luctus. Pellentesque sodales libero sit amet nibh aliquam ultricies. Phasellus malesuada ligula non ex pulvinar, non commodo magna sagittis. Pellentesque fringilla laoreet congue. Curabitur tincidunt tempor sagittis. Duis vitae auctor ipsum. Duis egestas fringilla ullamcorper. Nunc vel velit urna. Aenean eget velit tempus, vehicula mauris eu, porttitor nulla. Curabitur ac nulla neque. Curabitur justo felis, condimentum fringilla egestas sed, feugiat a tortor. Nunc vehicula viverra ultricies. Donec vulputate sit amet enim ut elementum.", 'tools' : ['Python', 'Git', 'CSS'], 'time_total' : '3h', 'additional_remarks' : 'This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible.<br><br>This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible.<br><br>This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible.This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible.', 'date_finished' : '1484232592000', 'main_image' : 'dist/svg/satellite.svg', 'keywords' : ['two', 'three']},
		
	{'id' : '3', 'name' : 'Project Eight', 'steps' : { '1' : {'title' : 'project eight step 1', 'short_desc' : 'short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc', 'long_desc' : 'long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desclong_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc', 'picsrc' : "dist/svg/satellite-2.svg"}, '2' : {'title' : 'project eight step 2', 'short_desc' : 'short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc', 'long_desc' : 'long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desclong_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc', 'picsrc' : "dist/svg/satellite-2.svg"}, '3' : {'title' : 'project eight step 3', 'short_desc' : 'short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc', 'long_desc' : 'long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desclong_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc', 'picsrc' : "dist/svg/satellite-2.svg"}, '4' : {'title' : 'project eight step 4', 'short_desc' : 'short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc short_desc', 'long_desc' : 'long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desclong_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc long_desc', 'picsrc' : "dist/svg/satellite-2.svg"}}, 'description' : "In tincidunt, dui eu placerat commodo, nulla est fermentum ipsum, a porta magna dolor in velit. Fusce justo ipsum, tristique quis pharetra et, faucibus nec tellus. Etiam tempus ante quis ipsum viverra, et feugiat sapien luctus. Pellentesque sodales libero sit amet nibh aliquam ultricies. Phasellus malesuada ligula non ex pulvinar, non commodo magna sagittis. Pellentesque fringilla laoreet congue. Curabitur tincidunt tempor sagittis. Duis vitae auctor ipsum. Duis egestas fringilla ullamcorper. Nunc vel velit urna. Aenean eget velit tempus, vehicula mauris eu, porttitor nulla. Curabitur ac nulla neque. Curabitur justo felis, condimentum fringilla egestas sed, feugiat a tortor. Nunc vehicula viverra ultricies. Donec vulputate sit amet enim ut elementum.", 'tools' : ['Python', 'Git', 'CSS'], 'time_total' : '3h', 'additional_remarks' : 'This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible.<br><br>This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible.<br><br>This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible.This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible. This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible.', 'date_finished' : '1481899792000', 'main_image' : 'dist/svg/alien.svg', 'keywords' : ['three', 'four']}
	];
	var lastproject = function(){
		for (var i = 0, sum_len = $scope.cmprojects.length; i < sum_len; i++){
			if (sum_len == $scope.cmprojects[i].id){
				$scope.current_project = $scope.cmprojects[i];
			}
		}
	}
	lastproject();
	$scope.limit = 350;
	$scope.cmtools = {'1': [20, 'dist/img/tools/python.png', 'Python'], '2': [4, 'dist/img/tools/git.png', 'Git'], '3': [88, 'dist/img/tools/css.png', 'CSS'], '4': [120, 'dist/img/tools/html.png', 'HTML'], '5': [12, 'dist/img/tools/mercurial.png', 'Mercurial'], '6': [56, 'dist/img/tools/javascript.png', 'JavaScript'], '7': [75, 'dist/img/tools/photoshop.png', 'Photoshop'], '8': [34, 'dist/img/tools/artrage.png', 'ArtRage']};
	
	$scope.choose_project = function(num){
		for (var i = 0, len = $scope.cmprojects.length; i < len; i++){
			if (num === $scope.cmprojects[i].id){
				$scope.current_project = $scope.cmprojects[i]
			}
		}
		
		$scope.current_project_steps = Object.keys($scope.current_project.steps).length;
		document.getElementById("top").scrollIntoView();
		$( "singleproject .active" ).removeClass("active");
		$(".cm-steps li.cm-step:first a").addClass("active");
		$("#step0").addClass("active");
	};

};

app.directive('cmprojects', function($window) {
	return {
		restrict: 'E',
		template: '<div ng-include="cmprojects"></div>',
        link: function(scope) {
			scope.cmprojects = 'projects.html';
		}
	};
});

app.directive('singleproject', function($window) {
	return {
		restrict: 'E',
		template: '<div ng-include="singleproject"></div>',
        link: function(scope) {
			scope.singleproject = 'singleproject.html';
		}
	};
});

app.directive('browseContent', function($window) {
    return {
        restrict: 'E',
        template: '<div ng-include="templateUrl"></div>',
        link: function(scope) {
            
            $window.onresize = function() {
                changeTemplate();
                scope.$apply();
            };
            changeTemplate();
            
            function changeTemplate() {
                var screenWidth = $window.innerWidth;
                if (screenWidth < 576) {
                    scope.templateUrl = 'col1.html';
					scope.itemsPerPage = 1;
                } else if ((screenWidth >= 576) && (screenWidth < 992)){
                    scope.templateUrl = 'col2.html';
					scope.itemsPerPage = 2;
                } else {
					scope.templateUrl = 'col3.html';
					scope.itemsPerPage = 3;
				}
            }
        }
    }
});


app.directive('cmfooter', function($window) {
	return {
		restrict: 'E',
		template: '<div ng-include="cmfooter"></div>',
        link: function(scope) {
			scope.cmfooter = 'cmfooter.html';
		}
	};
});

app.directive('cmhome', function($window) {
	return {
		restrict: 'E',
		template: '<div ng-include="cmhome"></div>',
        link: function(scope) {
			scope.cmhome = 'home.html';
		}
	};
});

app.directive('cmstats', function($window) {
	return {
		restrict: 'E',
		template: '<div ng-include="cmstats"></div>',
        link: function(scope) {
			scope.cmstats = 'stats.html';
		}
	};
});

app.directive('cmaboutme', function($window) {
	return {
		restrict: 'E',
		template: '<div ng-include="cmaboutme"></div>',
        link: function(scope) {
			scope.cmaboutme = 'aboutme.html';
		}
	};
});
