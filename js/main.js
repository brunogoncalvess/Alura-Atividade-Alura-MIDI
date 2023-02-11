const keys = document.querySelectorAll('.tecla')
const audios = document.querySelectorAll('audio')

keys.forEach((key, i) => {
 key.addEventListener('click', () => {
  handleClick(i)
 })
 key.addEventListener('keydown', (e) => {
  if (e.code == 'Enter' || e.code == 'Space') {
    e.target.classList.add('ativa')
  }
 })
 key.addEventListener('keyup', (e) => {
  e.target.classList.remove('ativa')
 })
})

const handleClick = i => {
  audios[i].play()
}