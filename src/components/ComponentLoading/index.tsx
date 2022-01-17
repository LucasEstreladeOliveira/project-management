import { Box, CircularProgress } from '@material-ui/core'
import React, { Component } from 'react'
import { Project } from '../../types/project'
import { User } from '../../types/user'

interface Props {

}
interface WithLoadingProps {
  loading: boolean
}

function ComponentLoading<P extends object>(WrappedComponent: React.ComponentType<P>) {
  // eslint-disable-next-line react/display-name
  return class extends React.Component<P, WithLoadingProps> {
    constructor(props: Props) {
      super(props);
      this.state = { loading: true}
    }
    componentDidMount() {
      setTimeout(() => this.setState({ loading: false}), 1000)
    }
    render() {
      return this.state.loading ? 
      (
        <Box display='flex' alignItems='center' justifyContent='center' height='100%'>
          <CircularProgress />
        </Box>
      ) : <WrappedComponent {...this.props}/>

    }
  }
}

export default ComponentLoading