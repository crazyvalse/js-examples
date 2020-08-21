const { remote } = require('webdriverio');

(async () => {
  const browser = await remote({
    logLevel: 'trace',
    capabilities: {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--headless', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--window-size=1920,1080']
      }
    }
  })

  await browser.url('http://app-design.test1.fzyun.cn/index.html#/login')

  const result = await browser.execute(() => {
    return _TEST_PAGE_OBJECTS_
  }, [])

  await browser.deleteSession()
})().catch((e) => console.error(e))
