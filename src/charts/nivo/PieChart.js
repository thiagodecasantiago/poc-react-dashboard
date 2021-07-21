import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { ResponsivePie } from '@nivo/pie';
import { BasicTooltip } from '@nivo/tooltip';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieTooltip = ({ datum }) => {
  return (
    <BasicTooltip
      id={datum.label}
      value={datum.value}
      color={datum.color}
      enableChip
    />
  );
};

export default function PieChartNivo({ title, data }) {
  const chartData = data.map(({ name, jobType, count }) => ({
    id: jobType,
    label: name,
    value: count,
  }));

  return (
    <Box width="100%" height="262px">
      {title && <Typography align="center" variant="h6" gutterBottom>{title}</Typography>}
      <ResponsivePie
        data={chartData}
        margin={{ top: 20, right: 0, bottom: 80, left: 0 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={COLORS}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        enableArcLinkLabels={false}
        // arcLinkLabel={d => `${d.label}`}
        // arcLinkLabelsSkipAngle={10}
        // arcLinkLabelsStraightLength={10}
        // arcLinkLabelsDiagonalLength={10}
        // arcLinkLabelsTextColor="#333333"
        // arcLinkLabelsThickness={2}
        // arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: -10,
            translateY: 30,
            itemsSpacing: 10,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: { from: 'color' },
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 13,
            symbolShape: 'square',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ],
            data: chartData
              .slice(0, Math.floor(chartData.length / 2))
              .map((cur, index) => ({
                id: cur.id,
                label: cur.label,
                color: COLORS
                  .slice(0, Math.floor(chartData.length / 2))[index],
              })),
          },
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 10,
            translateY: 50,
            itemsSpacing: 10,
            itemWidth: 120,
            itemHeight: 18,
            itemTextColor: { from: 'color' },
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 13,
            symbolShape: 'square',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ],
            data: chartData
              .slice(Math.floor(chartData.length / 2))
              .map((cur, index) => ({
                id: cur.id,
                label: cur.label,
                color: COLORS.slice(Math.floor(chartData.length / 2))[index],
              })),
          }
        ]}
        tooltip={PieTooltip}
      />
    </Box>
  );
}
