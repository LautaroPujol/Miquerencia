import Spinner from 'react-bootstrap/Spinner';
import "./loading.css"

const Loading = () => {
  return (
    <div className='gira'>
         <Spinner  animation="border" variant='danger' />
    </div>
  )
}

export default Loading