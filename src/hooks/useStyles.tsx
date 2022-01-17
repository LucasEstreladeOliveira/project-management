import { createStyles, makeStyles, Theme } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerContainer: {
        overflow: 'auto',
      },
      content: {
        flexGrow: 1,
        height: '100vh',
        padding: theme.spacing(3),
      },
      form: {
        display: 'flex',
        width: '35%',
        flexDirection: 'column',
        margin: 'auto',
        gap: '30px'
      },
      formBox: {
        gap: '60px',
        display: 'flex',
        flexDirection: 'column'
      },
      landingWrapper: {
        gap: '40px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }),
  );

export default useStyles