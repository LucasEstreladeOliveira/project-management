import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import BasePage from '../../src/components/BasePage'
import BaseForm from '../../src/components/BaseForm'
import { IconButton, Slide, Snackbar } from '@material-ui/core'
import { closeAlert, selectAlert } from '../../src/redux/alertSlice'
import { Close } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
const Edit: NextPage = () => {
  const router = useRouter()
  const { message, open } = useSelector(selectAlert);
  const dispatch = useDispatch()

  const { projectId } = router.query
  const id = projectId ? Number(projectId) : null

  return (
    <BasePage pageName='Edit Project'>
      <BaseForm isProject id={id}/> 
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

export default Edit