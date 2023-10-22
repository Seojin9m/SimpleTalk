import {useState} from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

const {Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
  apiKey: 'INSERT API KEY HERE'
});

const openai = new OpenAIApi(configuration);

function TextForm({handleAdd}) {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    if (text === '') {
      setMessage(null);
      setBtnDisabled(true);
    } else if (text !== '' && text.trim().length <= 1) {
      setMessage('Text must be at least 1 character!')
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (text.trim().length > 1) {
      const newText = {
        text: text
      }

      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: text,
        max_tokens: 256,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      });

      const newResponse = {
        text: response.data.choices[0].text
      }
        
      handleAdd(newText, newResponse);
      setText('');
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
          <h2>Let's have a chat!</h2>
          <div className='input-group'>
            <input onChange={handleTextChange} type='text' placeholder='Enter your message here' value={text}/>
            <Button type='submit' isDisabled={btnDisabled}>Send</Button>
          </div>
          {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default TextForm;