const names = ['cannabis', 'weed', 'maryjane', 'marajuana', 'grass', 'hash']
const products = ['gummies', 'vapes', 'cookies', 'tinctures', 'joints']
const effects = ['high', 'happy', 'sane', 'sleepy', 'giddy', 'hungry']

const randName = names[Math.floor(Math.random() * names.length)]
const randProduct = products[Math.floor(Math.random() * products.length)]
const randEffect = effects[Math.floor(Math.random() * effects.length)]

console.log(`${randName} ${randProduct} can make you ${randEffect}`)