import type { NextPage } from 'next'
import BasePage from '../../src/components/BasePage'
import BaseForm from '../../src/components/BaseForm'
import { Slide, Snackbar } from '@material-ui/core'
import { closeAlert, selectAlert } from '../../src/redux/alertSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'

const New: NextPage = () => {
  const { message, open, type } = useSelector(selectAlert);
  const dispatch = useDispatch()

  return (
    <BasePage pageName='New User'>
      <BaseForm isProject={false} /> 
      <Snackbar 
        open={open} 
        TransitionComponent={props => <Slide {...props} direction="up" />}
        onClose={closeAlert}
      > 
        <Alert onClose={() => dispatch(closeAlert())} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </BasePage>
  )
}
export default New