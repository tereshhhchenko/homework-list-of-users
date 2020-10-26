export default (() => {
  let i = 42
  return (prefix = 'ui') => `${prefix}-${i++}`
})()
