import { PropsWithChildren } from 'react'
import Taro, { useLaunch } from '@tarojs/taro'
import './app.css'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')

    let url =
      'https://tracklog.58.com/wx/click/empty.js.gif?wxid=wxc97b21c63d084d92' +
      '&uid=weappharmonyadb873f1848d46ce8c6894f98a3673c3' +
      '&loginUid=undefined' +
      '&from=tongcheng_58wxindex_homepage_show_selectcity' +
      '&trackURL=%7B%22pagePath%22%3A%22%2Fpages%2Findex%2Findex%22%2C%22refPagePath%22%3A%22%22%2C%22pageParam%22%3A%22%22%2C%22pageType%22%3A%2258wxindex%22%2C%22pageName%22%3A%22homepage%22%2C%22pageInfo%22%3A%22%22%2C%22loadTime%22%3A0%2C%22clickType%22%3A%22show%22%2C%22clickName%22%3A%22selectcity%22%2C%22cityid%22%3A1%2C%22abtest%22%3A%22test_a%22%2C%22scene%22%3A1001%2C%22thirdKey%22%3A%22aloHjAxMwz5BMNZF4ERfr5BFcYVhuTKwzriW2UNpFhnnj7PcuFagPFp9oeNMduA1%22%2C%22area%22%3A%221%22%2C%22openId%22%3A%22weappharmonyadb873f1848d46ce8c6894f98a3673c3%22%2C%22unionId%22%3A%22weappharmonyadb873f1848d46ce8c6894f98a3673c3%22%2C%22pagetype%22%3A%2258wxindex%22%2C%22page%22%3A%22%22%2C%22qudao%22%3A%22weixin%22%2C%22url%22%3A%22%2Fpages%2Findex%2Findex%22%2C%22referrer%22%3A%22%22%2C%22version%22%3A%222.12.12%22%2C%22spm%22%3A%22%22%2C%22utm_source%22%3A%22%22%2C%22launch_source%22%3A%22%22%2C%22from_userid%22%3A%22%22%2C%22hasuserid%22%3A0%7D' +
      '&v=1.0.0' +
      '&rand_id=' + Math.random() +
      '&thirdKey=aloHjAxMwz5BMNZF4ERfr5BFcYVhuTKwzriW2UNpFhnnj7PcuFagPFp9oeNMduA1&appCode=10'


    Taro.request({
      url: url,
      method: 'GET',
      data: {},
      header: {
      },
      success(res) {
        console.log('request(tracklog)', res.data);
      },
      fail: msg => {
        console.error('request(tracklog)', msg);
      },
    // @ts-ignore
    }, false);
  })

  // children 是将要会渲染的页面
  return children
}

export default App
