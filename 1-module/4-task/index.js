function checkSpam(str) {
  let mini = str.toLowerCase()
  if (mini.includes('1xbet') || mini.includes('xxx')) {
    return true
  } else {
    return false
  }
}