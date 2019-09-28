import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'

const ApplicationBar = () => (
  <AppBar position="static">
    <Toolbar className='toolbar'>
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">
        NY Times Most Popular
      </Typography>
      <div>
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
)

export default ApplicationBar