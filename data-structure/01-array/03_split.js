let sentence = 'the quick brown fox jumped over the lazy dog'
let words = sentence.split(' ')
for (let i = 0; i < words.length; i++) {
  console.info(`word ${i}: ${words[i]}`)
}
