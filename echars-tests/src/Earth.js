import React, {Component} from 'react';
import './index.css'
import echarts from 'echarts'


var random = function (max) {
    return (Math.random() * max).toFixed(3);
};



export default class Earth extends Component {
    constructor() {
        super();
        this.state = {
            option:{
                backgroundColor: '#ccc',
                globe: {
                    baseTexture: '/asset/get/s/data-1491890179041-Hkj-elqpe.jpg',
                    heightTexture: '/asset/get/s/data-1491889019097-rJQYikcpl.jpg',

                    displacementScale: 0.1,

                    shading: 'lambert',

                    environment: '/asset/get/s/data-1491837999815-H1_44Qtal.jpg',

                    light: {
                        ambient: {
                            intensity: 0.1
                        },
                        main: {
                            intensity: 1.5
                        }
                    },

                    layers: [{
                        type: 'blend',
                        blendTo: 'emission',
                        texture: '/asset/get/s/data-1491890291849-rJ2uee5ag.jpg'
                    }, {
                        type: 'overlay',
                        texture: '/asset/get/s/data-1491890092270-BJEhJg96l.png',
                        shading: 'lambert',
                        distance: 5
                    }]
                },
                series: []
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



