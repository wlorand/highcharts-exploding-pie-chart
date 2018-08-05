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
        text: "WhereHaus Places",
        style: {
          color: "rgb(255,255,255)"
        }
      },
      tooltip: {
        pointFormat: "<b>{point.x}</b>", //"<b>{point.percentage:.1f}%</b>",
        style: {
          color: "rgb(255,255,255)"
        }
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
                "white"
            }
          }
        }
      },
      // Data Starts Here
      series: [
        {
          name: "WhereHaus Places",
          colorByPoint: true,
          data: [
            {
              name: "Postal Codes",
              y: 36.2,
              x: "3,317,478"
            },
            {
              name: "Towns & Suburbs",
              y: 31.5,
              x: "2,903,126"
            },
            {
              name: "POI",
              y: 23.2,
              x: "2,128,837",
              drilldown: "POI"
            },
            {
              name: "Other Data Layers",
              y: 3.7,
              x: "329,110"
            },
            {
              name: "Admin Layers",
              y: 3.0,
              x: "269,271"
            },
            {
              name: "Geo Features",
              y: 2.4,
              x: "210,494"
            }
          ]
        }
      ],
      drilldown: {
        series: [
          {
            name: "POI",
            id: "POI",
            data: [
              {
                name: "Tourist Attraction",
                y: 33,
                x: "1001"
              },
              {
                name: "Sports Venue",
                y: 34,
                x: "1009"
              },
              {
                name: "Shopping Mall",
                y: 34,
                x: "1009"
              }

              // ["Tourist Attraction", 33],
              // ["Sports Venue", 34],
              // ["Shopping Mall", 33]
            ]
          }
        ]
      }
    });
  };

  // vanilla JS event handler
  document.addEventListener("DOMContentLoaded", renderWHStatsPie);
})();
