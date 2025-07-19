export default function Debug() {
  return (
    <div style={{ 
      background: 'blue', 
      color: 'white', 
      padding: '20px',
      fontSize: '24px',
      minHeight: '100vh'
    }}>
      <h1>DEBUG PAGE</h1>
      <p>This is a new debug page</p>
      <p>Time: {new Date().toLocaleString()}</p>
    </div>
  )
}
