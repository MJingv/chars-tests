import React, {Component} from 'react';
import './index.css'
import echarts from 'echarts'

export default class Gauge extends Component {
    constructor() {
        super();
        this.state = {
            option: {
                tooltip: {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                }, animationDelay: function (idx) {
                    // 越往后的数据延迟越大
                    return idx * 100;
                },
                series: [
                    {
                        name: '业务指标',
                        type: 'gauge',
                        detail: {formatter: '{value}%'},
                        data: [
                            {
                                value: 20,
                                name: '完成率'
                            }]
                    }
                ],
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


            }

        }

    }

    componentDidMount() {
        var myChart = echarts.init(this.refs.main);
        myChart.setOption(this.state.option);
        this.setState({
            option:{
                series:{
                    data:{
                        value:80,
                    }
                }
            }
        })
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