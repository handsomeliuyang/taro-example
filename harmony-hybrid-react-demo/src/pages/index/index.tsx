import { View, Text, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>首页</Text>
      <Button
        onClick={()=>{
          Taro.navigateTo({url: '/redirect/pages/list/index'})
        }}>
        customRoutes: 重定向
      </Button>
      <Button
        onClick={()=>{
          Taro.navigateTo({url: '/forward/pages/list/index'})
        }}>
        customRoutes: 转发
      </Button>
    </View>
  )
}
