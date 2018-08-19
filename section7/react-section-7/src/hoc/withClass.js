import React from 'react';

// const withClass = (props) => (
//    <div className={props.classes} >
//       {props.children}
//    </div>
// );

const withClass = (WrappedComponent, className) => {
   const WithClass =  class extends Component {
      render () {
         return (
            <div className={className}>
               <WrappedComponent {...this.props} />
            </div>
         )
      }
   }

   return React.forwardRef((props, ref) => {
      return <WithClass {...props} forwardRef={ref} />
   });
}

export default withClass;