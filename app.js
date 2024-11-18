require('dotenv').config();
console.log("Loaded API Key:", process.env.OPENAI_API_KEY);
const express = require('express');
const OpenAI = require('openai');  // Ensure Configuration is imported

const app = express();
const port = process.env.PORT || 4000;


const openai = new OpenAI();

app.use(express.json());

app.use(express.static('public'));

const cors = require("cors");
app.use(cors({
    origin: "https://it-interface-1.onrender.com",
}));

app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;
    const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        { role: "user", content: userMessage},
   
    ],
});

    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    res.status(500).json({ error: 'Something went wrong with the AI request.' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
