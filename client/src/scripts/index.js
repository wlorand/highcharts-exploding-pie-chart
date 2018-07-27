/**
 * File: index.js (for wh stats pie)
 */
"use strict";

// IIFE with vanilla JS event listener for loaded DOM
(function() {
  const renderWHStatsPie = () => {
    const myPie = Highcharts.chart("wh-stats-pie", {
      chart: {
        type: "pie"
      },
      title: {
        text: "WhereHaus Total Stats"
      },
      tooltip: {
        pointFormat: "<b>{point.percentage:.1f}%</b>" // ?
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            // these are the callouts
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %", // data attribs for your chart!
            style: {
              color:
                (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                "black"
            }
          }
        }
      },
      series: [
        {
          colorByPoint: true,
          data: [
            {
              name: "Postal Codes",
              y: 36.2
            },
            {
              name: "Towns & Suburbs",
              y: 31.5
            },
            {
              name: "POI",
              y: 23.2,
              selected: true
            },
            {
              name: "Other Data Layers",
              y: 3.7
            },
            {
              name: "Admin Layers",
              y: 3.0
            },
            {
              name: "Geo Features",
              y: 2.4
            }
          ]
        }
      ]
    });
  };
  document.addEventListener("DOMContentLoaded", renderWHStatsPie);
})();
