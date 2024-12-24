document.addEventListener('DOMContentLoaded', function() {
    // 初始化柱状折线图
    var barLineChart = echarts.init(document.getElementById('bar-line-chart'));
    var barLineOption = {
        title: {
            text: '历年奖状数据'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['双创类', '专利论文', '奖学金']
        },
        xAxis: {
            type: 'category',
            data: ['2022年', '2023年', '2024年']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '双创类',
                type: 'bar',
                data: [21, 12, 1]
            },
            {
                name: '专利论文',
                type: 'bar',
                data: [21, 12, 1]
            },
            {
                name: '奖学金',
                type: 'line',
                data: [21, 12, 1]
            }
        ]
    };
    barLineChart.setOption(barLineOption);

    // 初始化云图
    var wordCloudChart = echarts.init(document.getElementById('word-cloud'));
    var wordCloudOption = {
        title: {
            text: '奖状类别云图'
        },
        tooltip: {},
        series: [{
            type: 'wordCloud',
            shape: 'circle',
            sizeRange: [12, 50],
            rotationRange: [-90, 90],
            textStyle: {
                normal: {
                    color: function() {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                }
            },
            data: [
                {name: '院级', value: 10},
                {name: '校级', value: 20},
                {name: '省级', value: 30},
                {name: '国家级', value: 40},
                {name: 'EI', value: 15},
                {name: 'SCI', value: 25},
                {name: 'HC', value: 35},
                {name: '发明专利', value: 45},
                {name: '实用新型专利', value: 55},
                {name: '校一等奖', value: 60},
                {name: '院一等奖', value: 70},
                {name: '校二等奖', value: 80},
                {name: '院二等奖', value: 90},
                {name: '校三等奖', value: 100}
            ]
        }]
    };
    wordCloudChart.setOption(wordCloudOption);

    // 初始化饼图
    var pieChart = echarts.init(document.getElementById('pie-chart'));
    var pieOption = {
        title: {
            text: '各类奖状数量',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['双创类', '专利论文', '奖学金']
        },
        series: [
            {
                name: '奖状数量',
                type: 'pie',
                radius: '50%',
                data: [
                    {value: 33, name: '双创类'},
                    {value: 33, name: '专利论文'},
                    {value: 33, name: '奖学金'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    pieChart.setOption(pieOption);
});