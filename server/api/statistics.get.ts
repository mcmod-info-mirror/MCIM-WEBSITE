export default defineEventHandler(async () => {
  try {
    const response = await fetch('https://mod.mcimirror.top/statistics', {
      headers: { 'User-Agent': 'MCIM-Website/1.0' },
    })
    if (!response.ok) return null
    return response.json()
  } catch {
    return null
  }
})
