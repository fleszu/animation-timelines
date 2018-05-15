$(window).load(function () {
	init();
});

function init() {
	var toolTimeline = new TimelineMax();
	var duration = .5;
	toolTimeline.from('.mainTitle', duration, {
		opacity: 0,
		scale: 25,
		ease: Linear.easeInOut
	});
	/*	toolTimeline.to('#weightLifer', duration, {
			y: -100,
			ease: Bounce.easeInOut
		});
		toolTimeline.to('#crazy', duration, {
			y: -100,
			ease: Elastic.easeInOut
		});
		toolTimeline.to('#leaf', duration, {
			y: -100,
			ease: Back.easeInOut
		}); */


}
