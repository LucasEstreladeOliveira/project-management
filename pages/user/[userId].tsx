import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import BasePage from '../../src/components/BasePage'
import BaseForm from '../../src/components/BaseForm'
import { useDispatch, useSelector } from 'react-redux'
import { closeAlert, selectAlert } from '../../src/redux/alertSlice'
import { IconButton, Slide, Snackbar } from '@material-ui/core'
import { Close } from '@material-ui/icons'

const Edit: NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { message, open } = useSelector(selectAlert);

  const { userId } = router.query
  const id = userId ? Number(userId) : null

  return (
    <BasePage pageName='Edit User'>
      <BaseForm isProject={false} id={id}/> 
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