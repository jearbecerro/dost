/* eslint-disable */
import { Card } from "antd";
import ReactApexChart from "react-apexcharts"

export default function Barcharts({ title, data, label, colors }){

    const init = {
          
        series: [{
          name: label,
          data: data
        }],
        options: {
          title: {
            text: `${title}`,
            align: 'center',
            margin: 15,
            style: {
              fontSize:  '15px',
              fontWeight:  'bold',
              fontFamily:  "Helvetica",
              color:  '#263238'
            },
          },
          colors: colors,
          chart: {
            type: 'bar',
            height: "50%"
          },
          legend: {
            position: "bottom",
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '80%',
              endingShape: 'rounded',
              dataLabels: {
                      position: 'bottom',
                      maxItems: 12,
                      colors: "black",
                },
            },
          },
          dataLabels: {
            enabled: false,
            offsetX: 0,
            offsetY: -30,
            style: {
                  colors: ["#000000"],
                  fontSize: 12,
                  fontFamily: "Helvetica, Arial, sans-serif"
              },
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: data[0]===undefined? [""] : ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
          },
          yaxis: {
            title: {
              text: label
            }
          },
          fill: {
            opacity: 1
          },
        },
      
      };
    return <Card
    bordered
    >
      <ReactApexChart options={init.options} series={init.series} type={"bar"}  />
    </Card>
}