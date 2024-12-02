import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' })
    }

    // const openAiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     model: 'gpt-3.5-turbo',
    //     messages: [
    //       {
    //         role: 'user',
    //         content: prompt,
    //       },
    //     ],
    //     max_tokens: 150,
    //     temperature: 0.7,
    //   }),
    // })

    // if (!openAiResponse.ok) {
    //   throw new Error('OpenAI API request failed')
    // }

    // const responseData = await openAiResponse.json()

    const responseData = {
      id: 'chatcmpl-Aa5L5M0ypJWRLeUo3o1alarweAhr2',
      object: 'chat.completion',
      created: 1733163695,
      model: 'gpt-3.5-turbo-0125',
      choices: [
        {
          index: 0,
          message: {
            role: 'assistant',
            content:
            'Integration is on a little break right now — Martin\'s wallet is on a strict diet! 😂 But hey, if you\'re a recruiter, feel free to grill him about it in the interview!',
            refusal: null,
          },
          logprobs: null,
          finish_reason: 'stop',
        },
      ],
      usage: {
        prompt_tokens: 11,
        completion_tokens: 1,
        total_tokens: 12,
        prompt_tokens_details: {
          cached_tokens: 0,
          audio_tokens: 0,
        },
        completion_tokens_details: {
          reasoning_tokens: 0,
          audio_tokens: 0,
          accepted_prediction_tokens: 0,
          rejected_prediction_tokens: 0,
        },
      },
      system_fingerprint: null,
    }

    return NextResponse.json({
      data: responseData.choices[0].message.content,
      error: null,
    })
  } catch (error) {
    console.error('Error calling OpenAI API:', error)
    return NextResponse.json({ data: null, error: 'Failed to process the request' })
  }
}
