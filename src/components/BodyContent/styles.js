import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(3),
    background: "#80D0C2",
    width: "100%",
    textAlign: 'left',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  post: {
      padding: "8px",
      marginBottom: "8px"
  },
  header:{
      background: "#80D0C2"
  },
  image:{
      width:"48%",
        margin: "auto",
        marginTop: "8px",
        borderRadius: "16px"
  }
}));