// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default async function AppleIcon() {
  const response = await fetch('https://res.cloudinary.com/dcz3olflf/image/upload/v1/portfolio/apple-icon.png')
  return new Response(response.body, {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}
