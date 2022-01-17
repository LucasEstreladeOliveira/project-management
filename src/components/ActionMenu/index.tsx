import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons';
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
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} data-testid="action-menu-button">
        <MoreVert />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map( option => (
          <MenuItem key={option.label} onClick={() => handleClose(option.action)} data-testid={`action-menu-${option.label.toLowerCase()}-button`}>{option.label}</MenuItem>

        ))}
      </Menu>
    </div>
  )
}

export default ActionMenu