import { Typography } from '@material-ui/core'
import { format } from 'date-fns';
import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function TimelineChartRecharts({ title, data }) {
  const formatXAxis = (tickItem) => {
    return format(tickItem, "yyyy")
  }

  // const renderTooltip = ({ active, payload }) => {
  //   // console.log(tooltipContent);
  //   if (active && payload && payload.length) {
  //     return (
  //       <div>
  //         <p>{payload[0].value.toString()}</p>
  //       </div>
  //     );
  //   }

  //   return null;
  // }

  const formatTooltip = (value, name, props) => {
    // console.log(value);
    const initDate = format(new Date(value[0]), 'yyyy-MM-dd');
    const finDate = format(new Date(value[1]), 'yyyy-MM-dd');
    return ([`${initDate} -> ${finDate}`, '', ''])
  }
  return (
    <>
      {title && <Typography align="center" variant="h6" gutterBottom>{title}</Typography>}
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart layout="vertical" data={data}>
          <CartesianGrid />
          <XAxis dataKey="dates" type="number" domain={['auto', new Date().valueOf()]} scale='time' tickFormatter={formatXAxis} />
          <YAxis dateKey="jobId" type="category" domain={['dataMin', 'dataMax']} />
          <Tooltip separator="" formatter={formatTooltip} />
          <Bar dataKey="dates" fill="#00C49F" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default TimelineChartRecharts
