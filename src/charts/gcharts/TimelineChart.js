import { Box, Typography } from '@material-ui/core'
import React from 'react'
import Chart from 'react-google-charts';

function TimelineChartGoogle({ title, data }) {
  const chartData = [[
    { type: 'string', id: 'jobId' },
    { type: 'date', id: 'Start' },
    { type: 'date', id: 'End' },]]
    .concat(data.map(({ id, initialDate, finalDate }) => ([
      id, initialDate, finalDate
    ])));

  return (
    <Box>
      {title && <Typography align="center" variant="h6" gutterBottom>{title}</Typography>}
      <Chart
        width={'100%'}
        height={'500px'}
        chartType="Timeline"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          showRowNumber: true,
          timeline: {
            singleColor: '#00C49F',
          }
        }}
      />
    </Box>
  )
}

export default TimelineChartGoogle
