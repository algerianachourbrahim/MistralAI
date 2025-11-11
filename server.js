import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { Mistral } from '@mistralai/mistralai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const apiKey = process.env.MISTRAL_API_KEY;
if (!apiKey) throw new Error('MISTRAL_API_KEY not defined in .env');

const client = new Mistral({ apiKey });

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle AI chat
app.post('/chat', async (req, res) => {
  const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'No message provided' });

      try {
          const response = await client.chat.complete({
                model: 'mistral-medium-latest',
                      messages: [{ role: 'user', content: message }]
                          });

                              res.json({ reply: response.choices[0].message?.content });
                                } catch (error) {
                                    res.status(500).json({ error: error.message });
                                      }
                                      });

                                      // Start server
                                      app.listen(PORT, () => {
                                        console.log(`Server running on http://localhost:${PORT}`);
                                        });