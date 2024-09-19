// const apiKey = import.meta.env.VITE_OPEN_AI_SECRET;
const apiKey = localStorage.getItem('gptKey');
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const sendChatRequest = async (text) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'User: ' + text,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error('ChatGPT API request failed');
    }

    const data = await response.json();

    return data.choices[0].message.content; // Extract the response message
  } catch (error) {
    console.error('Error sending request to ChatGPT API:', error);
    return null;
  }
};

export default sendChatRequest;
