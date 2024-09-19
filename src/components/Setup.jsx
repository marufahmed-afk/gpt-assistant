import { useState } from 'react';

const Setup = ({ gptKey }) => {
  const [apiKey, setApiKey] = useState(gptKey || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('gptKey', apiKey);
    location.reload();
  };

  const handleChange = (e) => {
    setApiKey(e.target.value);
  };

  return (
    <>
      <h2>Enter your GPT key: </h2>
      <form
        action='submit'
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <input onChange={handleChange} value={apiKey} />
        <button type='submit'>Save</button>
      </form>
    </>
  );
};

export default Setup;
