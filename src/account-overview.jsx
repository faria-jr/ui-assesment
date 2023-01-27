import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Email, Info, MoveToInbox } from '@mui/icons-material';


const mdTheme = createTheme();

export const AccountOverview = ({data}) => {

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '120vh',
            overflow: 'auto',

          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

            <Grid container direction="row-reverse">
              <Grid item xs={12} md={10} lg={6}>
                <Typography align="left" color="grey" sx={{ flex: 1 }}>
                    <b>YOUR FEEFO SUPORT CONTACT</b>
                </Typography>
              </Grid>
            </Grid>


            <Grid container>
            
              <Grid item xs={12} md={12} lg={6}>
                <Typography align="left" color="text.secondary" variant="h4" sx={{ flex: 1 }}>
                  Account overview
                </Typography>
              </Grid>

              <Grid item xs={12} md={12} lg={6}>
                <Grid container>

                  <Grid item xs={2} md={2} lg={2}>
                    <Paper
                      sx={{
                        backgroundColor: 'yellow',
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 60,
                      }}
                    >
                      <Typography align="center" sx={{ flex: 1 }}>
                        <b>S</b>
                      </Typography> 
                    </Paper>
                  </Grid>

                  <Grid item xs={5} md={5} lg={5} paddingLeft={3}>
                    <Typography align="left" color="text.secondary" sx={{ flex: 1 }}>
                      <b>Support</b>
                    </Typography>
                    <Grid container paddingTop={1}>
                      <Grid item xs={2} md={2} lg={2}>
                        <Typography align="left" color="text.secondary" sx={{ flex: 1 }}>
                          <Email /> 
                        </Typography>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <Typography align="left" color="text.secondary" sx={{ flex: 1 }}>
                          support@feefo.com
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={5} md={5} lg={5}>
                    <Typography align="left" color="text.secondary" paddingTop={4} sx={{ flex: 1 }}>
                      020 3362 4208
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>


            <Grid container marginTop={5}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 120,
                  }}
                >
                  <React.Fragment>
                    <Grid container>

                      <Grid item xs={6} md={6} lg={6}>
                        <Grid container>

                          <Grid item xs={1} md={1} lg={1}>
                            <Typography align="left">
                              <MoveToInbox color='info'/>
                            </Typography>
                          </Grid>

                          <Grid item xs={11} md={11} lg={11}>
                            <Typography align="left">
                              <b>Sales</b>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={6} md={6} lg={6}>
                        <Typography align="right" color="text.secondary">
                          <Info />
                        </Typography>
                      </Grid>
                    </Grid>
                      <Typography paddingTop={4} align="left" color="text.secondary" sx={{ flex: 1, alignItems: 'end' }}>
                        You had <b>0 uploads</b> and <b>0 lines</b> added.
                      </Typography>
                  </React.Fragment>
                </Paper>
              </Grid>
            </Grid>

            <Grid container paddingTop={0.1}>

              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 120,
                  }}
                >
                  <React.Fragment>
                    <Typography align="left" variant="h4" sx={{ flex: 1, color:'lightgreen' }}>
                      <b>0%</b>
                    </Typography>
                    <Typography align="left" color="text.secondary" sx={{ flex: 1 }}>
                      <b>UPLOAD SUCCESS</b>
                    </Typography>
                  </React.Fragment>
                </Paper>
              </Grid> 
              
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 120,
                  }}
                >
                 <React.Fragment>
                    <Typography align="left" variant="h4" sx={{ flex: 1, color:'lightgreen' }}>
                      <b>0%</b>
                    </Typography>
                    <Typography align="left" color="text.secondary" sx={{ flex: 1 }}>
                      <b>LINES SAVED</b>
                    </Typography>
                  </React.Fragment>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default AccountOverview;