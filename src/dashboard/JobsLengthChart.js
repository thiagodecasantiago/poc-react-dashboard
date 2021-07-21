import React from 'react'
import TimelineChartGoogle from '../charts/gcharts/TimelineChart';
import TimelineChartNivo from '../charts/nivo/TimelineChart';
import TimelineChartRecharts from '../charts/recharts/TimelineChart'

function JobsLengthChart({ data, lib }) {
  const jobLengthData = data.sort((a, b) => a.initialDate - b.initialDate).map((job, index) => ({
    ...job,
    dates: [job.initialDate.valueOf(), job.finalDate.valueOf()],
    id: job.jobId,
    data: [{ x: job.initialDate, y: index }, { x: job.finalDate, y: index }],
  }));
  // console.log(jobLengthData);

  return (
    <div>
      {lib === 'Recharts' &&
        <TimelineChartRecharts title="Jobs ao longo do tempo" data={jobLengthData} />}
      {lib === 'Nivo' &&
        <TimelineChartNivo title="Jobs ao longo do tempo" data={jobLengthData} />}
      {lib === 'GCharts' && <TimelineChartGoogle title="Jobs ao longo do tempo" data={jobLengthData} />}
    </div>
  )
}

export default JobsLengthChart
