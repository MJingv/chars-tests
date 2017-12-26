import React, {Component} from 'react';
import './index.css'
import echarts from 'echarts'
var data1 = [];
var data2 = [];
var data3 = [];

var random = function (max) {
    return (Math.random() * max).toFixed(3);
};

for (var i = 0; i < 500; i++) {
    data1.push([random(15), random(10), random(1)]);
    data2.push([random(10), random(10), random(1)]);
    data3.push([random(7), random(10), random(1)]);
}

export default class Scatter extends Component {
    constructor() {
        super();
        this.state = {
            option: {
                visualMap: {
                    min: 0,
                    max: 1,
                    splitNumber: 5,
                    color: ['#d94e5d','#eac736','#50a3ba'],
                    textStyle: {
                        color: '#ccc'
                    },
                },
                legend:{
                    data: ['scatter', 'scatter2', 'scatter3']
                },
                dataZoom: [
                    {
                        type: 'slider',
                        show: true,
                        xAxisIndex: [0],
                        start: 1,
                        end: 35
                    },
                    {
                        type: 'slider',
                        show: true,
                        yAxisIndex: [0],
                        left: '93%',
                        start: 29,
                        end: 36
                    },
                    {
                        type: 'inside',
                        xAxisIndex: [0],
                        start: 1,
                        end: 35
                    },
                    {
                        type: 'inside',
                        yAxisIndex: [0],
                        start: 29,
                        end: 36
                    }
                ],
                xAxis: {type: 'value',
                    splitLine: {
                        show: true
                    }},
                yAxis: {type: 'value',
                    splitLine: {
                        show: true
                    }},
                series: [{
                    type: 'scatter',
                    animationDelay: function (idx) {
                        return idx * 10;
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.8,
                            color:'orange',
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] * 40;
                    },
                    data:data1

                },
               {
                    type: 'scatter',
                   animationDelay: function (idx) {
                       return idx * 1000;
                   },
                    itemStyle: {
                        normal: {
                            opacity: 0.8,
                            color:'yellow',
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] * 40;
                    },
                    data:data2

                },
               {
                    type: 'scatter',
                   animationDelay: function (idx) {
                       return idx * 100;
                   },
                    itemStyle: {
                        normal: {
                            opacity: 0.8,
                            color:'green',
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] * 40;
                    },
                    data:data3

                },],

            }
        }
    }
    componentDidMount() {
        var myChart1 = echarts.init(this.refs.main);
        myChart1.setOption(this.state.option);
    }

    render() {
        return (
            <div>
                hello scatter
                <div ref='main' className='main'/>
            </div>
        )
    }
}



