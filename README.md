# 30-days-of-react-native

30天学习ReactNative, [灵感来自](https://github.com/fangwei716/30-days-of-react-native), 目前开启v2分支, 重写该项目以支持安卓。

```shell

git clone https://github.com/BengBu-YueZhang/30-days-of-react-native.git

yarn install

react-native run-ios

react-native run-android
```

## 第零天

### 预览

### 遇到的问题

#### 安卓模拟器如何开启热更新？

[How to enable live reload in react native on android?](https://stackoverflow.com/questions/36933287/how-to-enable-live-reload-in-react-native-on-android)

#### 刘海屏的适配

[react-navigation提供了SafeAreaView组件可以为留海屏提供适配的功能](https://reactnavigation.org/docs/zh-Hans/handling-iphonex.html)

#### Error: bundling failed

[解决方案](https://stackoverflow.com/questions/51068105/react-native-bundling-failed)

#### react-native-vector-icons的使用

##### 下载

```js

npm install react-native-vector-icons --save

sudo npm install -g rnpm

rnpm link
```

##### 使用

![image](https://i.loli.net/2019/02/07/5c5bcd53cbb3d.png)

```js

// 引入自己想要使用的图表库
import Icon from 'react-native-vector-icons/FontAwesome'

import Icon from 'react-native-vector-icons/MaterialIcons'
```

## 第一天

