import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Template from 'templates/default'
import titleActions from 'templates/default/actions'
import errorActions from 'templates/empty/actions'
import styles from './styles'



const mapStateToProps = () => ({})


class Landing extends Component {
  componentWillMount() {
    this.props.requestTitle('Landing')
  }

  handleError = () => {
    this.props.requestError('Landing')
  }

  render() {
    console.log(styles)
    return (
      <Template style={{ }}>
         <div style={styles.slika}>
           <div style={styles.center}>
             <div style={styles.prvitext}>
               <p>Never doubt that a small group of thoughtful, 
               committed citizens can change the world; 
               indeed, it is the only thing that ever has.</p>
               <p>Welcome to Tilda Center!</p>
             </div>
           </div>
         </div>
         <div style={styles.drugidiv}>
			 <div style={styles.drugitext}>
			 WHAT WE DO AND HOW WE DO IT
			 </div>
			   <div style={styles.prvaikona}>
               </div>
			     <Button 
				   style={styles.dugme} 
				   variant="contained" 
				   onClick={this.handleError}
				  >
				 LEARN MORE
			   </Button>
         </div>
      </Template>
    )
  }
}


Landing.propTypes = {
  requestError: PropTypes.func.isRequired,
  requestTitle: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, { ...errorActions, ...titleActions })(
  Landing,
)
