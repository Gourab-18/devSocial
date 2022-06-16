import React from "react";
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Column = ({ data }) => {
  // Create a JSON object to store the chart configurations
  const chartConfigs = {
    type: "column3d", // The chart type
    width: "600", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Popular", //Set the chart caption
        // subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
        xAxisName: "Repos", //Set the x-axis name
        yAxisName: "Stars", //Set the y-axis name
        numberSuffix: "K",
        theme: "fusion", //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Column;
