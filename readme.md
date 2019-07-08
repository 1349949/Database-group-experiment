

### 功能介绍

**1.登陆页面：**

如下图所示：

![](https://s2.ax1x.com/2019/07/08/ZrfxSK.png)



​	用户可在登陆页面输入自己的账号和密码进行登陆，分为普通用户与管理员员用户，学生账号普通用户，教师账号为管理员用户，二者分别有不同的权限（教师用户可以对题目进行修改以及编辑操作学生做题情况与实验报告，完成批注与打分）。

​	另外，还可以选择绑定qq或微信等其他方式登陆（暂时没有实现）





**2.主页：**

​	当用户登陆成功后，会自动跳转到主页部分，主页一共分为：个人信息、侧边栏、章节列表、功能按钮、状态分析、小工具栏六大部分。

如下图所示：

![](https://s2.ax1x.com/2019/07/08/ZsFN0e.png)

![](https://s2.ax1x.com/2019/07/08/ZsEU7F.png)

**·个人信息：**	用户登录后，相关的姓名、学号、头像等会在此显示

**·侧边栏：**	侧边栏包含了各个页面以及其子页面的导航索引，点击可以实现相应的跳转

**·功能按钮：**	功能按钮包括全屏，调整字体大小、搜索、面包屑导航，为用户提供更加个性化的需求

**·章节列表：**	章节列表简略地展示了用户各章节习题的完成情况。其中下方是进度条以及每章节相应的deadline。已完成或已经超过日期的，会显示为灰色；未完成且即将截止的，会显示为红色；离截止日期还有较长时间的，会显示为黑色，另外，进度条也直观地反映了用户各章节习题的完成情况。

​				点击每个章节列表中的小缩略图，还能够跳转到相应的习题列表界面，如下图所示：



![](https://s2.ax1x.com/2019/07/08/ZsFcnS.png)



**·状态分析：**	

​	状态分析分为两大部分，左边是一个折线图，展示了用户每周习题的按时完成情况，教师可以设置每周需完成题目数量，系统会自动的将实际完成数量与期望完成数量进行对比显示在折线图上，这样可以清楚地得知用户是否每周都按时完成作业；

​	右边的饼状图是用户每章节的平均错误次数统计，通过该统计，可以反映出用户哪一章节做题时错误较多，从而侧面反映出永固对于该章节地掌握程度不够熟练								



![](https://s2.ax1x.com/2019/07/08/ZsFWkj.png)

**·小工具栏：**

​	小工具栏共有三个，分别是题目状态、todolist、错题小站。

​	题目状态



![](https://s2.ax1x.com/2019/07/08/ZskiHe.png)





**3.创建与修改习题**

![1562575352856](https://s2.ax1x.com/2019/07/08/ZsVmg1.png)

界面如上，点击Publish为发布，点击Draft为保存草稿。

编辑器为实时呈现排版效果的MarkDown编辑器，便于编辑题目

![1562576319226](https://s2.ax1x.com/2019/07/08/ZsVnjx.png)

**在管理员模式下**可以点击Edit按钮对习题进行修改，非管理员是不能修改的

![3](https://s2.ax1x.com/2019/07/08/ZsVZC9.png)

![4](https://s2.ax1x.com/2019/07/08/ZsVMDK.png)

非管理员：

![5](https://s2.ax1x.com/2019/07/08/ZsVe3R.png)

**4.浏览题目与创建习题集**

在题目页面下单击标题可以快速预览题目内容：

![6](https://s2.ax1x.com/2019/07/08/ZsVQHO.png)

点击+按钮，可以把题目添加进“购物车”中。

![7](https://s2.ax1x.com/2019/07/08/ZsVKu6.png)

右下角出现“购物车”，单击创建习题集。

![8](https://s2.ax1x.com/2019/07/08/ZsVY8A.png)

右侧会列出创建的习题集，单击进入：

![9](https://s2.ax1x.com/2019/07/08/ZsV84H.png)

点击Post，跳转到做题页面：

![10](https://s2.ax1x.com/2019/07/08/ZsV3Ue.jpg)

**5.智能markdown编辑器**



该编辑没有采用传统的一边写代码，一边预览的分屏编辑模式，而是采用即时渲染的模式，给人沉浸式的编写体验。除了支持全部markdown语法，还支持Latex公式/代码高亮/Vega Chart/Flow Chart/Sequence Diagram。

​	该编辑器为本项目提供题目编辑渲染，SQL编辑/运行/结果显示和一键生成实验报告的功能。

![WX20190708-210931@2x](https://s2.ax1x.com/2019/07/08/ZsnXSH.png)

![WX20190708-211045@2x](https://s2.ax1x.com/2019/07/08/ZsuSmt.png)

​	如上图所示，管理员用户可以编辑题目的任何一部分，普通用户只可以编辑代码与解题思路这两部分。点击代码框左上角的小图标，可以提交代码并查看返回结果。

​	点击编辑器右上角的导出按钮，可以一键导出成PDF实验报告。


