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
              y: 36.1
            },
            {
              name: "POI",
              y: 23.1,
              selected: true
            },
            {
              name: "Towns",
              y: 26.8
            },
            {
              name: "Suburbs",
              y: 4.7
            },
            {
              name: "Other Data Layers",
              y: 3.4
            },
            {
              name: "Admin Layers",
              y: 2.9
            },
            {
              name: "Geo Features",
              y: 2.3
            },
            {
              name: "Airports",
              y: 0.2
            }
          ]
        }
      ]
    });
  };
  document.addEventListener("DOMContentLoaded", renderWHStatsPie);
})();
