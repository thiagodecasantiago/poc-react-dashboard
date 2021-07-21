import { Box, Typography } from '@material-ui/core'
import React from 'react'

function BigNumberChart({ title, subtitle, value }) {
  return (
    <Box>
      {title && <Typography align="center" variant="h6" gutterBottom>{title}</Typography>}
      {subtitle && <Typography align="center" variant="subtitle1" gutterBottom>{subtitle}</Typography>}
      <Typography align="center" variant="h2" gutterBottom>{value}</Typography>
    </Box>
  )
}

export default BigNumberChart
