option = {
    title:{
        text:'全国加权复工缺工曲线'
    },
    xAxis: {
        axisLine:{
            show:true
        },
        axisTick: {
            "show": true,
        },
        axisLabel: {
            "show": true,
        },
        type: 'category',
        boundaryGap: false,
        data: fugong_btm.dateList
    },
    yAxis: {
        axisLine:{
            show:true
        },
        axisTick: {
            "show": true,
        },
        axisLabel: {
            "show": true,
        },
        type: 'value',
        splitLine:{
            show:true  ,
            lineStyle:{
            color:'white',
            width: 1,
            type:'dashed'
            },
        }
    },
    legend:{
        top:'20px',
        data:['复工','缺工'],
        show:true
    },
    series: [{
        name:'复工',
        data: fugong_btm.value,
        type: 'line'
    },
    {   name:'缺工',
        data: quegong_btm.value,
        type:'line'
    }
    ]
};

var dom = document.getElementById("bottomContent");
var myChart = echarts.init(dom,'customed');
myChart.setOption(option)