import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { personas } from '@/app/data/personas';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { personaId, message, conversationHistory } = await request.json();

    // Validate inputs
    if (!personaId || !message) {
      return NextResponse.json(
        { error: 'PersonaId und Message sind erforderlich' },
        { status: 400 }
      );
    }

    // Find persona
    const persona = personas.find((p) => p.id === personaId);
    if (!persona) {
      return NextResponse.json(
        { error: 'Persona nicht gefunden' },
        { status: 404 }
      );
    }

    // Build system prompt from persona personality
    const systemPrompt = `Du bist ${persona.name}, ${persona.role}.

Deine Persönlichkeit: ${persona.personality}

Wichtig:
- Antworte IMMER in der Ich-Perspektive als ${persona.name}
- Bleibe konsequent in deinem Charakter und Sprachstil
- Nutze die beschriebenen Eigenheiten deiner Persönlichkeit
- Antworte auf Deutsch
- Halte Antworten prägnant (2-4 Sätze), außer der User fragt explizit nach mehr Details`;

    // Build messages array with conversation history
    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: 'system', content: systemPrompt },
    ];

    // Add conversation history if provided
    if (conversationHistory && Array.isArray(conversationHistory)) {
      conversationHistory.forEach((msg: { role: string; content: string }) => {
        if (msg.role === 'user' || msg.role === 'assistant') {
          messages.push({
            role: msg.role as 'user' | 'assistant',
            content: msg.content,
          });
        }
      });
    }

    // Add current user message
    messages.push({ role: 'user', content: message });

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages,
      temperature: 0.8, // Higher temperature for more personality variation
      max_tokens: 500,
    });

    const responseContent = completion.choices[0]?.message?.content;

    if (!responseContent) {
      throw new Error('Keine Antwort von OpenAI erhalten');
    }

    return NextResponse.json({
      response: responseContent,
      usage: completion.usage,
    });
  } catch (error) {
    console.error('OpenAI API Error:', error);

    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        {
          error: 'OpenAI API Fehler',
          details: error.message,
        },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      { error: 'Interner Server-Fehler beim Generieren der Antwort' },
      { status: 500 }
    );
  }
}
