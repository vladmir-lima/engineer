export class Chart {

 constructor() {  
  }
  
  simpleLineOptions: {
      color: any,
      fullWidth: boolean,
      height: string,
      chartPadding: {
        right: number
      }
    };
  
    simpleLineData: {
      labels: any,
      series: any;      
    };
  
   areaLineData: {
      labels: any,
      series: any
    }
  
  areaLineOptions: {
      fullWidth: boolean,
      height: string,
      low: number,
      showArea: boolean
    };
  
   biLineData: {
      labels: any,
      series: any
    };
  
   biLineOptions: {
      height: string,
      high: number,
      low: number,
      showArea: boolean,
      showLine: boolean,
      showPoint: boolean,
      fullWidth: boolean,
      axisX: {
        showGrid: boolean
      }
    };
  
  
  simpleBarData: {
      labels: any,
      series: any
    };
  
    simpleBarOptions: {
      fullWidth: boolean,
      height: string
    };
  
  
    multiBarData: {
      labels: any,
      series: any
    };
  
    multiBarOptions: {
      fullWidth: boolean,
      height: string,
      stackBars: boolean,
      axisX: {
        labelInterpolationFnc: any
      };
      axisY: {
        offset: number
      }
    };
  
    multiBarResponsive: [
      ['screen and (min-width: 400px)', {
        reverseData: boolean,
        horizontalBars: boolean,
        axisX: {
          labelInterpolationFnc: any
        },
        axisY: {
          offset: number
        }
      }],
      ['screen and (min-width: 700px)', {
        stackBars: boolean,
        reverseData: boolean,
        horizontalBars: boolean,
        seriesBarDistance: number
      }]
    ];
  
    stackedBarData: {
      labels: any,
      series: any
    };
  
    stackedBarOptions: {
      fullWidth: boolean,
      height: string,
      stackBars: boolean,
      axisY: {
        labelInterpolationFnc: any
      }
    };
  
    simplePieData: {
      series: any
    };
  
    simplePieOptions: {
      fullWidth: true,
      height: string,
      weight: string,
      labelInterpolationFnc: any
    };
  
    labelsPieData: {
      labels: any,
      series: any,
    };
  
    labelsPieOptions: {
      fullWidth: boolean,
      height: string,
      weight: string,
      labelDirection: string,
      labelInterpolationFnc: any
    };
  
    simpleDonutData: {
      labels: any,
      series: any
    };
  
  
    simpleDonutOptions: {
      fullWidth: boolean,
      donut: boolean,
      height: string,
      weight: string,
      labelDirection: string,
      labelInterpolationFnc: any
    }

}
