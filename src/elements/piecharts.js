/* eslint-disable */
import { Card } from "antd";
import ReactApexChart from "react-apexcharts"

export default function Piecharts({ title, data, labels, theme, type, lpos }){

    const init = {
          
    series: data,
    options: {
      title: {
        text: `${title}`,
        align: 'left',
        margin: 15,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:  "Helvetica",
          color:  '#263238'
        },
      },
      subtitle:{
        text: ``
      },
      legend: {
        position: lpos,
        style: {
            colors: ["#F0F8FF"],
            fontSize: 12,
            fontFamily: "Helvetica, Arial, sans-serif"
        },
      },
      theme: {
        palette: `palette${theme}`,
      },
      labels: labels,
      chart: {
        type: type,
        dropShadow: {
          enabled: true,
          color: '#111',
          top: -1,
          left: 3,
          blur: 3,
          opacity: 0.2
        }
      }
    },
  
  };
    return <Card
    bordered
    >
      <ReactApexChart options={init.options} series={init.series} type={type} height={300}  />
    </Card>
}