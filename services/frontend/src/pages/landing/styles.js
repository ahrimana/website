import background from './backgroundimage.svg'
import firsticon from './prvaikonica.svg'

export default {
  slika: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: 'calc(100vh - 65px)',
  },
  
  center: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      //backgroundColor: 'rgba(0, 255, 255, 0.75)',
  },
  
  prvitext: {
	  padding: '10px',
      fontSize: '25px',
      maxWidth: 900,
      textAlign: 'center',
      color: '#e0e0e0',
      backgroundColor: 'rgba(84, 0, 0, 0.8)',
      borderRadius: '25px',
  },
  
  dugme: {
	  marginTop: '10px',
	  fontSize: '20px',
  },
  
  drugidiv: {
	  backgroundColor: '#e0e0e0',
  },
  
  drugitext: {
	  textAlign: 'center',
	  padding: '50px',
	  fontSize: '35px',
	  
  },
  
  prvaikona: {
	  backgroundImage: `url(${firsticon})`,
	  display: 'flex',
	  alighnItems: 'stretch',
	  backgroundRepeat: 'no-repeat',
	  height: 600,  
   },
}
