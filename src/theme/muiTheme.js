import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  ...
  overrides: {
    // Overriding example:
    // MuiDrawer: {
    //   background: '#18202c',
    // },
  },
});

export default theme;