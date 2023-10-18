import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({
    salesSvg: {
     "&& .css-1arc5ws-MuiSvgIcon-root":{
        color:"red !important"
     }
    },
    bg:{
        "&& .css-1hsz34s-MuiDrawer-docked .MuiDrawer-paper":{
                background:"#242973 !important"
        }
    }
  }));