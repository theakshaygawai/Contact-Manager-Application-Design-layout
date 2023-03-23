import React from 'react'

interface IProps {
    heading : string,
    color : string
}

const Heading:React.FC<IProps> = (props) => {
    const {heading , color} = props;
  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <p className={`h3 ${color}`}>{heading}</p>
                <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi culpa possimus consequatur veritatis quasi ex esse expedita, commodi veniam, perspiciatis magnam facilis in architecto suscipit ratione officiis temporibus vitae?</p>
            </div>
        </div>
       </div>
    </>
  )
}

export default Heading