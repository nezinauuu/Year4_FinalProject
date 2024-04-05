// import OpenAI, { ClientOptions } from "openai";

// // Ensure that OPENAI_API_KEY is defined before trying to create OpenAI instance
// if (!process.env.OPENAI_API_KEY) {
//   console.error("OpenAI API key is not defined.");
//   process.exit(1); // Exit the process with a non-zero status code to indicate failure
// }

// const options: ClientOptions = {
//   apiKey: process.env.OPENAI_API_KEY,
// };

// const openai = new OpenAI(options);

// async function main() {
//   const assistant = await openai.beta.assistants.create({
//     name: "Math Tutor",
//     instructions:
//       "You are a personal math tutor. Write and run code to answer math questions.",
//     tools: [{ type: "code_interpreter" }],
//     model: "gpt-3.5-turbo-0125",
//   });

//   console.log("Assistant created:", assistant);

//   const thread = await openai.beta.threads.create();

//   console.log("Thread created:", thread);

//   const message = await openai.beta.threads.messages.create(thread.id, {
//     role: "user",
//     content: "I need to solve the equation `3x + 11 = 14`. Can you help me?",
//   });

//   console.log("Message sent:", message);

//   let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
//     assistant_id: assistant.id,
//     instructions:
//       "Please address the user as Jane Doe. The user has a premium account.",
//   });

//   console.log("Run created and polled:", run);
// }

// main();
