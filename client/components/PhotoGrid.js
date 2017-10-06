import React from 'react';


const PhotoGrid  = React.createClass({
   render(){
       return(
          <div className='Photo-grid'>
          <pre>
          {JSON.stringify(this.props.posts)}

         </pre>
         </div>
       )
   }
})

export default PhotoGrid;
