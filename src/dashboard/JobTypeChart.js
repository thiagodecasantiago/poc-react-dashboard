import React from 'react'
import PieChartGoogle from '../charts/gcharts/PieChart';
import PieChartNivo from '../charts/nivo/PieChart';
import PieChartRecharts from '../charts/recharts/PieChart'

const jobNames = [
  "Auditoria ICMS",
  "Recuperação PIS/COFINS",
  "Recuperação ICMS",
  "Recuperação INSS",
];

function JobTypeChart({ data, lib }) {
  const jobTypesData = data.reduce((prev, curr) => {
    const typeIndex = prev.findIndex((item) => item.jobType === curr.jobType);
    if (typeIndex > -1) {
      prev[typeIndex].count++;
      prev[typeIndex].value++;
    } else {
      prev.push({
        name: jobNames[curr.jobType],
        jobType: curr.jobType,
        count: 1,
      })
    };

    return prev;
  }, []).sort((a, b) => a.jobType - b.jobType);

  // console.log(jobTypesData);

  return (
    <>
      {lib === 'Recharts' &&
        <PieChartRecharts title="Jobs por tipo" data={jobTypesData} datakey="count" tooltipkey="name" />}
      {lib === 'Nivo' && <PieChartNivo title="Jobs por tipo" data={jobTypesData} />}
      {lib === 'GCharts' && <PieChartGoogle title="Jobs por tipo" data={jobTypesData} />}
    </>
  )
}

export default JobTypeChart
