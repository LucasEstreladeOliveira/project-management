import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import BasePage from '../../src/components/BasePage'

const Edit: NextPage = () => {
  const router = useRouter()
  const { userId } = router.query

  return (
    <BasePage pageName='Edit User'>
      Edit User {userId}
    </BasePage>
  )
}

export default Edit
