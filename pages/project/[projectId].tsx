import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import BasePage from '../../src/components/BasePage'

const Edit: NextPage = () => {
  const router = useRouter()
  const { projectId } = router.query

  return (
    <BasePage pageName='Edit Project'>
      Edit Project {projectId}
    </BasePage>
  )
}

export default Edit
