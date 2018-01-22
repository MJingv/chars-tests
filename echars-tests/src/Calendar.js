import React, {Component} from 'react';
import './index.css'
import echarts from 'echarts'

export default class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            option: {
                title:{
                    show:true,
                    text:'my calendar',
                    subtext:'from jehol',
                    left:'center',
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


                visualMap: {
                    show: true,
                    min: 0,
                    max: 100
                },
                calendar: {
                    range: ['2017-02', '2017-10'],
                    // cellSize: [20, 40],
                    left: 80,
                    splitLine: true,
                },
                series: {
                    // type: 'graph',
                    hoverAnimation: true,
                    type: 'heatmap',
                    coordinateSystem: 'calendar',
                    data: this.getVirtulData(2017),
                }
            }

        }

    }

    getVirtulData(year) {
        year = year || '2017';
        var date = +echarts.number.parseDate(year + '-01-01');
        var end = +echarts.number.parseDate(year + '-12-31');
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time <= end; time += dayTime) {
            data.push([
                echarts.format.formatTime('yyyy-MM-dd', time),
                Math.floor(Math.random() * 100)
            ]);
        }
        console.log(data)
        return data;
    }

    componentDidMount() {
        var myChart = echarts.init(this.refs.main);
        myChart.setOption(this.state.option);
    }

    render() {

        return (
            <div>
                hello calendar
                <div className='main' ref='main'></div>
            </div>

        )

    }
}