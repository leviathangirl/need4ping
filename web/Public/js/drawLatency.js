function drawLatency() {
  timeAxis = new Date(obj[0].TIME);

  $.each(obj[0].TIME,function(index, value) {
    timeAxis[index] = new Date();
    timeAxis[index].setTime(value * 1000);
    timeAxis[index] = timeAxis[index].toLocaleString();
  });

  $('#LATENCY_container').highcharts({
    chart: {
      type: 'spline',
      renderTo: 'LATENCY_container'
    },
    title: {
      text: '服务器网络延迟',
      x: -20 // center
    },
    subtitle: {
      text: 'Source: pi.catscarlet.com',
      x: -20
    },
    xAxis: {
      categories: timeAxis
      //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: '延迟(ms)'
      },
      value: 0,
      width: 1,
      color: '#808080'
    },
    tooltip: {
      valueSuffix: 'ms'
    },
    legend: {
      enabled: true,
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    plotOptions: {
      spline: {
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },

      }
    },
    /*
    series: [{
      name: obj.server_name,
      data: obj.rtt_avg
    }
]
    */
  });
};
