import type { NextPage } from 'next'
import BasePage from '../../src/components/BasePage'
import BaseForm from '../../src/components/BaseForm'
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert, selectAlert } from '../../src/redux/alertSlice';
import { IconButton, Slide, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons'

const New: NextPage = () => {
  const { message, open } = useSelector(selectAlert);
  const dispatch = useDispatch()

  return (
    <BasePage pageName='New Project'>
      <BaseForm isProject /> 
      <Snackbar
        open={open}
        onClose={closeAlert}
        TransitionComponent={props => <Slide {...props} direction="up" />}
        message={message}
        key={message}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={() => dispatch(closeAlert())}>
            <Close fontSize="small" />
          </IconButton>
        }
      />
    </BasePage>
  )
}
export default New