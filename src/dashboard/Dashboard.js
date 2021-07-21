import { Button, ButtonGroup, Card, CardContent, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import BigNumberChart from '../charts/BigNumberChart'
import generateJob from '../data'
import JobsLengthChart from './JobsLengthChart'
import JobTypeChart from './JobTypeChart'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import EditIcon from '@material-ui/icons/Edit'

const data = new Array(10).fill().map(() => generateJob());

const ResponsiveGridLayout = WidthProvider(Responsive);
const defaultLayout = {
  lg: [
    { i: 'TotalJobs', x: 0, y: 0, w: 4, h: 2, minW: 2 },
    { i: 'TotalCompanies', x: 4, y: 0, w: 4, h: 2, minW: 2 },
    { i: 'JobTypeChart', x: 8, y: 0, w: 4, h: 2, minW: 4, minH: 2 },
    { i: 'JobsLengthChart', x: 0, y: 1, w: 12, h: 4, minW: 12, minH: 3 },
    // { i: 'TotalJobs', x: 0, y: 0, w: 1, h: 1 },
    // { i: 'TotalCompanies', x: 1, y: 0, w: 1, h: 1 },
    // { i: 'JobTypeChart', x: 2, y: 0, w: 1, h: 1 },
    // { i: 'JobsLengthChart', x: 0, y: 1, w: 3, h: 2 },
  ]
};

export default function Dashboard() {

  // console.log(data);
  const [lib, setLib] = useState('Recharts')
  const [editable, setEditable] = useState(false);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs>
          <ButtonGroup>
            <Button
              onClick={() => setLib('Recharts')}
              color={lib === 'Recharts' ? 'primary' : 'default'}
            >
              Recharts
            </Button>
            <Button
              onClick={() => setLib('Nivo')}
              color={lib === 'Nivo' ? 'primary' : 'default'}
            >
              Nivo
            </Button>
            <Button
              onClick={() => setLib('GCharts')}
              color={lib === 'GCharts' ? 'primary' : 'default'}
            >
              Google Charts
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={1}>
          <Button
            variant='outlined'
            color={editable ? 'primary' : 'default'}
            onClick={() => { setEditable(!editable) }}
            aria-label='edit'
            size='small'
          >
            <EditIcon />
          </Button>
        </Grid>
      </Grid>
      <ResponsiveGridLayout
        layouts={defaultLayout}
        // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        // cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={165}
        margin={[30, 20]}
        isResizable={editable}
        isDraggable={editable}
      >
        {/* <Grid container spacing={4}>
          <Grid item xs={12}> */}
        {/* </Grid>
          <Grid item md={4} xs={12}> */}
        <Card key='TotalJobs'>
          <CardContent>
            <BigNumberChart title="Total de jobs" value={data.length} />
          </CardContent>
        </Card>
        {/* </Grid>
          <Grid item md={4} xs={12}> */}
        <Card key='TotalCompanies'>
          <CardContent>
            <BigNumberChart title="Total de empresas" value={data.reduce((prev, curr) => (prev + curr.cnpjsList.length), 0)} />
          </CardContent>
        </Card>
        {/* </Grid>
          <Grid item md={4} xs={12}> */}
        <Card key='JobTypeChart'>
          <CardContent>
            <JobTypeChart data={data} lib={lib} />
          </CardContent>
        </Card>

        {/* </Grid>
          <Grid item xs={12}> */}
        <Card key='JobsLengthChart'>
          <CardContent>
            <JobsLengthChart data={data} lib={lib} />
          </CardContent>
        </Card>

        {/* </Grid>
        </Grid> */}
      </ResponsiveGridLayout>
    </>
  )
}
