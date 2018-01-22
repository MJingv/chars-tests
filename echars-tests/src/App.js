import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import echarts from 'echarts'
import Scatter from './Scatter';
import Calendar from './Calendar';
import Gauge from './Gauge';
import Temperature from './Temperature'
import Earth from './Earth'
class App extends Component {
    constructor() {
        super();
        this.state = {
            option: {
                global:true,
                visualMap: {
                    show: true,
                    min: 0,
                    max: 80,
                    inRange: {
                        colorLightness: [0,0.8]
                    }
                },
                tooltip:{
                    show:true,
                    trigger:'item',
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
                // textStyle: {
                //     color: 'rgba(255, 255, 255, 0.3)'
                // },
                // backgroundColor: '#2c343c',
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        // 阴影的大小
                        shadowBlur: 50,
                        // 阴影水平方向上的偏移
                        shadowOffsetX: 0,
                        // 阴影垂直方向上的偏移
                        shadowOffsetY: 0,
                        // 阴影颜色
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        shadowBlur: 100,
                        shadowColor: 'rgba(0, 0, 0, 1)'
                    },
                },
                title: {
                    text: 'ECharts 入门示例'
                },

                legend: {
                    data: ['销量']
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [
                    {
                        name: '访问来源',
                        type: 'bar',
                        radius: '60%',
                        markPoint:{
                          data:[
                              {type:'max',name:'最大值'},
                              {type:'min',name:'最小值',symbol:'arrow'},

                          ]
                        },
                        markLine:{
                            data:[
                                {type:'average',name:'平均值'},
                            ]
                        },
                        data: [
                            {
                                value: 23, name: '衬衫'
                            },
                            {value: 74, name: '羊毛衫'},
                            {value: 31, name: '雪纺衫'},
                            {value: 50, name: '裤子'},
                            {value: 40, name: '高跟鞋'},
                            {value: 22, name: '袜子'}
                        ]
                    }
                ]
            }
        }
    }

    componentDidMount() {
        if (this.refs.bar){
            var myChart = echarts.init(this.refs.bar);
            myChart.setOption(this.state.option);
        }

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome test </h1>
                </header>
                <section>
                    {/*<div className='main' ref='bar'></div>*/}
                    {/*<Scatter/>*/}
                    {/*<Calendar/>*/}
                    {/*<Gauge/>*/}
                    {/*<Temperature/>*/}
                    <Earth/>

                </section>

            </div>
        );
    }
}

export default App;
