import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import echarts from 'echarts'

class App extends Component {
    constructor() {
        super();
        this.state = {
            option: {
               // backgroundColor: '#2c343c',
                itemStyle: {
                    normal: {
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
                tooltip: {},
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
                        type: 'pie',
                        radius: '60%',
                        data: [
                            {value: 235, name: '视频广告'},
                            {value: 274, name: '联盟广告'},
                            {value: 310, name: '邮件营销'},
                            {value: 335, name: '直接访问'},
                            {value: 400, name: '搜索引擎'}
                        ]
                    }
                ]
            }
        }
    }

    componentDidMount() {
        var myChart = echarts.init(this.refs.bar);
        myChart.setOption(this.state.option);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React </h1>
                </header>
                <section>
                    <div className='main' ref='bar'></div>

                </section>
            </div>
        );
    }
}

export default App;
