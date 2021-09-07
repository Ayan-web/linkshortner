const {get,pushLink} = require('../server/urldatabase')

test('database test',async ()=>{
    const url = 'https://www.google.com/elephant?what=is(it)'
    const hash = await pushLink(url)
    const getUrl = await get(hash)
    expect(url).toBe(getUrl)
})
