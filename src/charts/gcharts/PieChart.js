import { Box, Typography } from '@material-ui/core';
import React from 'react'
import Chart from "react-google-charts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function PieChartGoogle({ title, data }) {
  const chartData = [['jobType', 'count']].concat(data.map(({ name, count }) => ([
    name, count
  ])));

  return (
    <Box>
      {title && <Typography align="center" variant="h6" gutterBottom>{title}</Typography>}
      <Chart
        width={'100%'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          pieHole: 0.4,
          legend: {
            position: 'bottom',
            maxLines: 4,
          },
          slices: COLORS.map((colorItem) => ({ color: colorItem }))
        }}
      />
    </Box>
  )
}

export default PieChartGoogle
