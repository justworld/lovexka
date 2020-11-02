# lovexka
送给女朋友、老婆的网站，给枯燥的生活一点小惊喜

### 1、时间爱心
写好初始时间，然后开始计时，效果图：
![](https://github.com/justworld/lovexka/blob/master/imgs/2.png)

### 2、情书弹窗
js会自动加载letters文件夹中和当日同名（规则：年月日.html，如2020517.html）的html，并弹窗显示，你可以在一些特殊的时间写些情书。效果图：
![](https://github.com/justworld/lovexka/blob/master/imgs/1.png)

### 3、时间线
letters文件夹下的所有情书会根据时间线加载，这里没有做成自动的，在timeline.html里需要手动配置：
```
var times = [{ "year": 2020, "date": '05/16', "url": 'letters/2020517.html' },
        { "year": 2020, "date": '05/17', "url": 'letters/2020517.html' },
        { "year": 2020, "date": '05/18', "url": 'letters/2020517.html' }]
```
点击爱心里的时间，即可调到时间线页面，效果图：
![](https://github.com/justworld/lovexka/blob/master/imgs/3.png)

### 4、情侣悄悄话

### 5、最后
生活不止眼前的苟且，试着去制造浪漫，祝有情人终成眷属！
