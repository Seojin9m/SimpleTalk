import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import TextList from './components/TextList';
import TextData from './data/TextData';
import TextForm from './components/TextForm';

function App() {
	const [text, setText] = useState(TextData);

	const deleteText = (id) => {
		if (window.confirm('Are you sure you want to delete the following text?')) {
			setText(text.filter((item) => item.id !== id));
		}
	}

	const addText = (newText, newResponse) => {
	  newText.id = uuidv4();
		newResponse.id = uuidv4();
		setText([...text, newText, newResponse]);
	}

  return (
		<>
			<Header/>
			<div className='container'>
				<TextList text={text} handleDelete={deleteText}/>
				<div>&nbsp;</div>
				<TextForm handleAdd={addText}/>
			</div>
		</>
	)
}

export default App;
