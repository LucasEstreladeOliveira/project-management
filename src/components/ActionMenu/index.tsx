import { Button, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { useState } from 'react';

interface ActionMenuProps {
  options: {
    label: string;
    action: () => void;
  }[]
}

const ActionMenu = ({options}:ActionMenuProps) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (cb: Function) => {
    if(typeof cb === 'function') {
      cb()
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Options
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map( option => (
          <MenuItem key={option.label} onClick={() => handleClose(option.action)}>{option.label}</MenuItem>

        ))}
      </Menu>
    </div>
  )
}

export default ActionMenu