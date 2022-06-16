// Step 1 - Include react
import React from "react";
// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
// const chartData = [
//   {
//     label: "Venezuela",
//     value: "290",
//   },
//   {
//     label: "Saudi",
//     value: "260",
//   },
//   {
//     label: "Canada",
//     value: "180",
//   },
//   {
//     label: "Iran",
//     value: "140",
//   },
//   {
//     label: "Russia",
//     value: "115",
//   },
//   {
//     label: "UAE",
//     value: "100",
//   },
//   {
//     label: "US",
//     value: "30",
//   },
//   {
//     label: "China",
//     value: "30",
//   },
// ];

// Create a JSON object to store the chart configurations

const Bar = ({ data }) => {
  const chartConfigs = {
    type: "bar3d", // The chart type
    width: "600", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Forked", //Set the chart caption
        subCaption: "Projects Most Forked", //Set the chart subcaption
        xAxisName: "Repos", //Set the x-axis name
        yAxisName: "Forks", //Set the y-axis name
        numberSuffix: "K",
        theme: "fusion", //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Bar;
