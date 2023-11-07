![taskify](https://github.com/henilGondalia/taskify/assets/34880491/e89a2b87-ad48-4d84-b281-36e6a940266d)

Taskify is a productivity app for my daily task activity.


## Tech Stack

**Client:** [Next.js](https://nextjs.org/), [Tailwind](https://tailwindcss.com/), [Headlessui](https://headlessui.com), [zustand](https://zustand-demo.pmnd.rs/)

**Database:** Appwrite

## Features

- Responsive design: A mobile-friendly interface for seamless usage on any device.
- Mange Task: Dragabble Cards to move task according to progress

## To Run it Locally

First, Create appwrite databse and set .env file with parameter

```bash
NEXT_PUBLIC_APPWRITE_ID='64e...10c'
NEXT_PUBLIC_DATABASE_ID='64...a1'
NEXT_PUBLIC_TODO_COLLECTION_ID='64...8'
OPENAI_API_KEY='sk..F'
NEXT_BUCKET_ID='6...3'
```

then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Stay tuned for updates on these exciting features!⭐️
