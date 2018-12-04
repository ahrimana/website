import background from './backgroundimage.svg'

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
      // backgroundColor: 'rgba(0, 255, 255, 0.75)',
  },
  
  text: {
      fontSize: '25px',
      maxWidth: 600,
      textAlign: 'center',
      backgroundColor: 'white',
  },
}
