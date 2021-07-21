import { Box, Typography } from '@material-ui/core'
// import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { BasicTooltip } from '@nivo/tooltip';
import React from 'react'

const TimelineTooltip = ({ slice }) => {
  return (
    <BasicTooltip
      id={slice.points[0].serieId}
      value={slice.points[0].data.xFormatted}
      color={slice.points[0].serieColor}
      enableChip
    />
  );
};

function TimelineChartNivo({ title, data }) {
  return (
    <Box width="100%" height="500px">
      {title && <Typography align="center" variant="h6" gutterBottom>{title}</Typography>}
      {/* <ResponsiveBar
        data={data}
        keys={['initialDate', 'deltaDate']}
        indexBy="jobId"
        margin={{ top: 0, right: 30, bottom: 80, left: 100 }}
        padding={0.3}
        innerPadding={1}
        layout="horizontal"
        valueScale={{ type: 'linear', format: '%Y-%m-%d', min: 1293840000000, max: new Date().valueOf() }}
        indexScale={{ type: 'band', round: true }}
        colors={["#FFF", "#00C49F"]}
        orderRadius={1}
        axisBottom={{ format: d => format(new Date(d), 'yyyy-MM-dd'), tickValues: 5 }}
        enableLabel={false}
        onMouseEnter={(_data, event) => {
          event.target.style.opacity = 0;
        }}
        onMouseLeave={(_data, event) => {
          event.target.style.opacity = 1;
        }}
      /> */}
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 10, bottom: 80, left: 60 }}
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          useUTC: false,
          precision: 'day',
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: 'linear',
          stacked: false,
        }}
        axisLeft={{

        }}
        axisBottom={{
          format: '%Y',
          tickValues: 'every year',
        }}
        colors="#00C49F"
        lineWidth={20}
        enablePoints={false}
        enableSlices={"x"}
        tooltip={TimelineTooltip}
        sliceTooltip={TimelineTooltip}
      />
    </Box>
  )
}

export default TimelineChartNivo
