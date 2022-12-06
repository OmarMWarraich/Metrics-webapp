import React, { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import styles from './Home.module.css';

const dataset = {
  dimensions: ['name', 'score'],
  source: [
    ['Eth', 314],
    ['Ath', 351],
    ['Bth ', 287],
    ['Cth', 219],
    ['Dth', 253],
    ['Fth', 165],
    ['Gth', 318],
    ['Hth', 366],
  ],
};
const pieOption = {
  dataset: [dataset],
  series: [
    {
      type: 'pie',
      // associate the series to be animated by id
      id: 'Score',
      width: '80%',
      radius: [0, '50%'],
      universalTransition: true,
      animationDurationUpdate: 1000,
    },
  ],
};
const barOption = {
  dataset: [dataset],
  xAxis: {
    type: 'category',
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      width: '100%',
      // associate the series to be animated by id
      id: 'Score',
      // Each data will have a different color
      colorBy: 'data',
      encode: { x: 'name', y: 'score' },
      universalTransition: true,
      animationDurationUpdate: 1000,
    },
  ],
};

const PieToBarChart = () => {
  const [currentChart, setCurrentChart] = useState(pieOption);

  useEffect(() => {
    let currentOption = pieOption;
    setInterval(() => {
      currentOption = currentOption === pieOption ? barOption : pieOption;
      setCurrentChart(currentOption);
    }, 2000);
  }, []);

  return (
    <>
      <div className={styles.PieToBarChart}>
        <ReactEcharts option={currentChart} style={{ width: '100%', height: '100%' }} />
      </div>
    </>
  );
};

export default PieToBarChart;
