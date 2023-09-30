const express = require("express");
const openAI = require("openai");
const app = express();
app.use(express.json());

const openai = new openAI({
    apiKey: "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",
});

app.get('/getResponse', async(req,res) => {
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{"role": "user", "content": "essay on global warming"}],
        max_tokens: 100
    })
    console.log(response.choices[0].message.content);
})

app.listen(3000, () => {
    console.log("server started")
})