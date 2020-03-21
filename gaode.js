// console.log(fugong)
if (!isSupportCanvas()) {
    alert('热力图仅对支持canvas的浏览器适用,您所使用的浏览器不能使用热力图功能,请换个浏览器试试~')
}
//初始化地图
var map = new AMap.Map('container', {
    resizeEnable: true, //是否监控地图容器尺寸变化
    // viewMode: '3D',
    // pitch: 45,
    mapStyle: "amap://styles/darkblue",
    zoom:4.5, //初始化地图层级
    center: [112.938814, 28.228209]
    });

var heatmap;
map.plugin(["AMap.Heatmap"], function () {
    //初始化heatmap对象
    heatmap = new AMap.Heatmap(map, {
        radius: 15, //给定半径
        opacity: [0, 0.8]
        /*,
        gradient:{
            0.5: 'blue',
            0.65: 'rgb(117,211,248)',
            0.7: 'rgb(0, 255, 0)',
            0.9: '#ffea00',
            1.0: 'red'
        }
            */
    });
    //设置数据集：该数据为北京部分“公园”数据
    heatmap.setDataSet({
        data: fugong,
    });
});
//判断浏览区是否支持canvas
function isSupportCanvas() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}