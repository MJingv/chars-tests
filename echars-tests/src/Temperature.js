import React, {Component} from 'react';
import './index.css'
import echarts from 'echarts'

export default class Temperature extends Component {
    constructor() {
        super();
        this.state = {
            option: {
                title: {
                    text: '未来一周气温变化',
                },
                tooltip: {
                    show: true,
                    trigger: 'axis'
                },
                legend: {
                    data: ['温度', '湿度']
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['line', 'bar']},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                    {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} %'
                        }
                    }
                ],
                series: [
                    {
                        name: '温度',
                        type: 'line',
                        data: [11, 1, 10, 13, 12, -3, 10],
                        markPoint: {
                            data: [
                                {type: 'max', name: 'max'},
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: 'average'}
                            ]
                        }
                        // markPoint: {
                        //     data: [
                        //         {type: 'max', name: '最大值'},
                        //         {type: 'min', name: '最小值'}
                        //     ]
                        // },
                        // markLine: {
                        //     data: [
                        //         {type: 'average', name: '平均值'}
                        //     ]
                        // }
                    },
                    {
                        name: '湿度',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [90, 80, 55, 22, 100, 33, 77],
                        markPoint: {
                            data: [
                                {type: 'max', name: 'max'},
                            ]
                        },
                        markLine: {
                            // animationDuration: function (idx) {
                            //     // 越往后的数据延迟越大
                            //     return idx * 1000;
                            // },
                            animationDelay: function (idx) {
                                // 越往后的数据延迟越大
                                return idx * 1000;
                            },
                            data: [
                                // {type:'average',name:'average'},
                                [{
                                    // 固定起点的 x 像素位置，用于模拟一条指向最大值的水平线
                                    yAxis: 'min',
                                    x: '90%',

                                }, {
                                    type: 'min'
                                }],

                                //
                                // [{
                                //     symbol: 'none',
                                //     x: '90%',
                                //     yAxis: 'max'
                                // }, {
                                //     symbol: 'circle',
                                //     label: {
                                //         normal: {
                                //             position: 'start',
                                //             formatter: '最大值'
                                //         }
                                //     },
                                //     type: 'max',
                                //     name: '最高点'
                                // }]
                            ],
                        }
                        // markPoint: {
                        //     data: [
                        //         {type: 'max', name: '最大值'},
                        //         {type: 'min', name: '最小值'}
                        //     ]
                        // },
                        // markLine: {
                        //     data: [
                        //         {type: 'average', name: '平均值'}
                        //     ]
                        // }
                    },

                ]
            }

        }

    }

    componentDidMount() {
        var myChart = echarts.init(this.refs.main);
        myChart.setOption(this.state.option);
    }


    render() {

        return (
            <div>
                hello gauge
                <div className='main' ref='main'></div>
            </div>

        )

    }
}