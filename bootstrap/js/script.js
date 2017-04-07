var lineChartData = {
	// X坐标数据
	labels : ["周一","周二","周三","周四","周五","周六","周日"],
	datasets : [
		{	
			//ͳ统计表的背景颜色
			fillColor : "rgba(255,255,255,0)",
			//ͳ统计表的画笔颜色
			strokeColor : "rgba(0, 0,0, 1)",
			// 点的颜色
			pointColor : "gold",
			// 点边框的颜色
			pointStrokeColor : "#f40",
			// 鼠标触发是点的颜色
			pointHighlightFill : "#fff",
			// 鼠标触发是点边框的颜色
			pointHighlightStroke : "rgba(220,220,220,1)",
			// y坐标数据
			data : [100,239,320,500,830,900,1000]
		},
		{
			fillColor : "rgba(255,255,255,0)",
			strokeColor : "rgba(92, 184, 92, 1)",
			pointColor : "rgba(23, 126, 23, 1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			data : [200,250,430,510,700,630,899]
		},
		{
			fillColor : "rgba(255,255,255,0)",
			strokeColor : "skyblue",
			pointColor : "rgba(23, 126, 23, 1)",
			pointStrokeColor : "#f00",
			pointHighlightFill : "#00f",
			pointHighlightStroke : "pink",
			data : [200,350,400,530,740,630,1000]
		}
	]

}

window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
	});
}