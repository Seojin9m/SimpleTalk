import {FaTimes} from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';

function TextItem({item, handleDelete}) {
  return ( // <Card reverse={true}> for dark mode card
    <Card> 
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='purple'/>
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

TextItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default TextItem;