import {motion, AnimatePresence} from 'framer-motion';
import TextItem from './TextItem';

function TextList({text, handleDelete}) {
  if (!text || text.length === 0) {
    return <p>No Text Yet</p>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {text.map((item) => (
          <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <TextItem key={item.id} item={item} handleDelete={handleDelete}/>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default TextList;
