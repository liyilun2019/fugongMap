var dom = document.getElementById("bar1");
var myChart = echarts.init(dom,'customed');
var dom2 = document.getElementById("bar2");
var myChart2 = echarts.init(dom2,'customed');
var app = {};

function get_option(data,phase,color){
    option = null;
    option = {
        title: {
            text: phase,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        // legend: {
        //     data: ['2011年', '2012年']
        // },
        grid: {
            left: '5%',
            right: '10%',
            top:'13%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0,0.01]
        },
        yAxis: {
            type: 'category',
            data: data['cities']
        },
        series: [
            {
                name: '2011年',
                type: 'bar',
                data: data['values'],
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                              '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                               '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                               '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'right',
                        }
                    }
                },
                barWidth:10,
            }
        ]
    };
    return option
}

option = get_option(sideCard['in'],'年后人口流入城市Top10')
if (option && typeof option === "object") {
    myChart.setOption(option, true,'#c23531');
}
option2 = get_option(sideCard['out'],'年后人口流出城市Top10')
if (option2 && typeof option2 === "object") {
    myChart2.setOption(option2, true,'#d96a2f');
}
