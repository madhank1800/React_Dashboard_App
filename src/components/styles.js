import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({
    salesSvg: {
     "&& .css-1arc5ws-MuiSvgIcon-root":{
        color:"red !important"
     }
    },
    bgColor:{
        "&& .css-11lq3yg-MuiGrid-root":{
            backgroundColor: `aliceblue !important`
        }
    },
    bg:{
        "&& .css-1hsz34s-MuiDrawer-docked .MuiDrawer-paper":{
                // background:"#242973 !important"
        },
        "&& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper ,":{
            backgroundColor: '#131859 !important' ,
            color: 'white !important'
        }
    },
    chartStyle:{
        "&& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-line ,.MuiChartsAxis-directionY,.MuiChartsAxis-tick ":{
            display:"none !important"
        },
        "&& .css-1vuxth3-MuiBarElement-root":{
            fill: '#E3E2FB !important' 
        }
    }
  }));