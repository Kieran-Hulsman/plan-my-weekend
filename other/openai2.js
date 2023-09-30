const openAI = require("openai");

// Create an instance of the OpenAIApi class by passing a configuration object
const openai = new openAI({
    apiKey: "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",
});

// Define a function to generate text
const generateText = async (prompt) => {
    // Make a call to the createCompletion method of the OpenAIApi class
    // and pass in an object with the desired parameters
    await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{"role": "user", "content": prompt}],
        max_tokens: 100
    }).then(response => console.log(response.choices[0].message.content));
}

// Call the generateText function and pass the prompt
generateText("Write a short article on - how to write a book for beginners");