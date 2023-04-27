const React = require("react");
const ReactDOM = require("react-dom");

const ReactHighstock = require("react-highcharts/ReactHighstock"); // Expects that Highcharts was loaded in the code.

const config = {
  /* HighchartsConfig */
};
ReactDOM.render(<ReactHighstock config={config}></ReactHighstock>, document.body);
const Chart = () => {
  return <div></div>;
};

export default Chart;
