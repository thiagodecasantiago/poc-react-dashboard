import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip } from 'recharts';
import { Typography } from '@material-ui/core';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props) => {
  // console.log(props);
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.25;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      {/* <text x={cx} y={cy} angl>
        {`${(percent * 100).toFixed(0)}%`}
      </text> */}
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </>
  );
};

// const renderCustomizedLabelList = (props) => {
//   const { x, y, width, value } = props;
//   const radius = 10;

//   return (
//     <g>
//       <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
//         {value}
//       </text>
//     </g>
//   );
// };

export default function PieChartRecharts({ title, data, datakey, tooltipkey }) {
  const chartDataData = data.map(({ name, jobType, count }) => ({
    name,
    jobType,
    count,
  }));

  return (
    <>
      {title && <Typography align="center" variant="h6" gutterBottom>{title}</Typography>}
      <ResponsiveContainer width="100%" aspect={1.4}>
        <PieChart>
          <Pie data={chartDataData} dataKey={datakey} innerRadius={"40%"} fill="#8884d8" labelLine={false} label={renderCustomizedLabel}>
            {/* <LabelList datakey={tooltipkey} content={renderCustomizedLabelList} /> */}
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" align="center" layout="horizontal" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
