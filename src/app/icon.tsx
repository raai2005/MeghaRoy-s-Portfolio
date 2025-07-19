// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  const response = await fetch('https://res.cloudinary.com/dcz3olflf/image/upload/v1/portfolio/favicon.png')
  return new Response(response.body, {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}
