ModuleDemo
==========

###  理想的执行步骤：
* 1、安装nodejs。
* 2、安装cocos模块（这个是一个nodejs模块，后面所说的工程依赖模块就不是nodejs的模块了，而是引擎的模块）。
* 3、执行 `cocos init projName -ccDir cch5Dir`创建工程。
* 4、在`cocos.json`的`dependencies`中添加工程依赖的模块，然后在工程根目录下执行`cocos install`进行模块的安装。
* 5、编写游戏代码。
* 6、在工程根目录底下执行`cocos genJsRes`生成js的路径映射配置文件。
* 7、在工程根目录底下执行`cocos genRes`生成资源的路径映射配置文件。
* 8、在`resCfg.js`中配置文件依赖。
* 9、在`projects/proj.html5`中，`main.js`中写游戏的路口，通过`index.html`进行开发测试，最终发布的时候js会压缩混淆到`mini.js`中，通过release.html运行。
* 10、`main.js`中，通过配置config的`test`选项控制是否启动单例测试。
* 11、在工程根目录下执行`cocos publish`进行工程的发布。
* 12、开发完的一个项目就是一个模块，直接扔到引擎的`modules`目录底下就可以被其他人使用。

其中，在工程根目录下的 `tools.json` 中，配置了执行工具脚本的一些配置信息。在一般情况下，开发者按照默认执行就可以了。




## 现实总是残酷的，现在还没实现的那么完整
脚本部分还未整理成通过 `cocos` 命令统一执行，而是分散成几个脚本文件，通过webStorm可以直接右击运行。目前除了`cocos.js`（用于创建工程的demo脚本），其余的都放在`tools`目录下面。而且依赖模块安装的功能尚未实现。


## 目前的操作步骤
* 1、安装nodejs。

开发环境：webStorm，对于webstorm对nodejs的支持（能够右键运行）需要简单配置，点击工具栏中nodejs图片的按键，然后配置Sources of node.js Core Modules。


* 2、在`cocos.js`中修改`projName`和`projDir`（默认两个值写成一样的好），然后右击运行该脚本。例如`projName` 和 `projDir`都配置为myProj，那么在于`cocos.js`同级的目录下就会创建出`myProj`工程。

工程的目录结构为：`src`为代码目录，`res`为资源文件目录，`test`为测试代码目录，`cfg`为配置文件目录，`projects/proj.html5`为工程运行目录，`tools`为工具脚本目录。


* 3、添加资源文件和源码，为了测试方便，可以先从`testProj`中的`res`和`src`拷到相应的文件夹中。然后点击`tools`中的`ResGen.js`和`JsResGen.js`运行，此时会在`cfg`的`res.js`和`jsRes.js`中生成相应的路径映射配置信息。`res`的生成规则为：

`res`作为对象名称，`资源的文件名`格式化后作为key，`路径`作为value。例如 `res/img/bg.png` --> `res.bg_png = "res/img/bg.png"`。`jsRes`同理，只不过对象名称的规则为：js_ + 模块名称，以当前为例则为：`js_myProj`。

该脚本功能的一个好处是，只要文件名不变，就算你是在项目开发的任何一个时刻改变了文件的所在路径，游戏代码汇中是不需要做任何改动的，只需要重新执行一下脚本生成配置就可以了（切记是文件名不变，而且要唯一）。
	

* 4、修改`main.js`。请注意看config的`test`选项的注释，如果打开该项，并且填上要进行测试的js配置名称，例如`js_myProj.Layer_js`。在代码下方还有一部分代码是注释掉的，这里是游戏的路口，请根据项目情况进行相应的改动（在当前案例中，直接把注释打开就行了）。


* 5、配置`resCfg.js`中的文件依赖（这块是最麻烦最繁琐的一步了，但是却能比较有效的提高项目管理，并为最终的publish提供支持）。

配置的格式为：

```js
resCfg[key] = {//key为string，一般来说都配jsRes.js中的内容就可以了，例如js_myProj.Layer_js
  ref : [依赖的key1, 依赖的key2],//同上面的key，一般的意思为该模块需要依赖哪些js
  res : [资源路径1, 资源路径2],//该js需要的资源，配置为res.js中的内容，例如res.bg_1_jpg
  
  //以下几个是为单例调试所提供的，只配一个。也提供了用户自定义的拓展功能。
  sprite : "tt.Sprite",//Sprite.js中的类名称，必须有tt.Sprite.create方法
  layer : "tt.Layer",//Layer.js中的类名称，必须有tt.Layer.create方法
  scene : "tt.Scene",//Scene.js中的类名称，必须有tt.Scene.create方法
  args : {}//会往create中传这个参数进去。这样测试的时候，就不用改动到游戏源码就可以进行测试了。
};
```

在这个配置文件中，比较特殊的是默认已经生成的格式里：
```js
resCfg[模块名] = {...}
```

这个配置意思是该模块默认都会加载的配置。例如有某个工程中的js文件是经常要用到的，就可以直接配进来，这样其他的js就不必要再配置其ref了。

配置这个依赖看似很烦，其实也很简单，因为你只需要知道你当前的这个js用到了什么资源（这个开发者肯定知道的吧），还有这个js需要用到哪些js（这个也是很容易知道的），然后配上就可以了。这样做的一个好处是解耦。例如：

`a.js`使用了`a1.png`, `a2.png`， 并且引用到了 `b.js`，`b.js`中使用了`b1.png`、`b2.png`等等，`b.js` 引用到了`c.js`，`c.js`又...
	
对于`a.js`来说，他只关心自己用到了`a1.png`和`a2.png`两个资源，以及用到了一个`b.js`文件，而`b.js`具体用到了什么，对于`a.js`来说是透明的，是无需关注的，只要`b.js`对外提供的接口不变，无论`b.js`如何改动，都不会影响到`a.js`。因此，`a.js`的配置如下：
```js
resCfg[js_YourProjName.a_js] = {
    ref : [js_YourProjName.b_js],
    res : [res.a1_png, res.a2_png]
};
```
注意：如果你的js没有用到资源，也没有使用到其他js或者说这个js已经配置在`resCfg[项目名]`这边了的话，那是可以不用配置该js的resCfg配置的。
	
具体配置可以参见`testProj`中的`resCfg.js`。
	
这个配置应该不难吧？只是看起来比较繁琐，但是如果是边开发边配置其实也还好，而且有以下几个好处：
	
* 1)、有利于多人开发的进行。例如`程序猿A`需要用到`程序猿B`所开发的模块，那么A只需要关注B提供的模块的js是哪个以及其对外的接口就好了，至于B对其模块做什么改动，`只要对位的接口以及js文件名不变就可以了`。
* 2)、可以非常方便的实现按模块加载资源（将你的资源划分配置在resCfg.gameModules中就可以了）。
* 3)、项目要混淆发布的时候，会读取`resCfg`中的配置，检索出所有需要加载的js文件，以及按模块罗列出需要加载的资源文件路径。混淆加载的路口会以`resCfg.gameModules`的配置列表为主。通过依赖配置，可以自动剔除掉没有用到的文件。
    
* 5、运行`index.html`。
* 6、在`main.js`中打开`test`配置项并进行配置就可以单例调试某一js了。
* 7、右击运行`tools`中的`publish.js`，打包成`mini.js`，运行`release.html`。
* 8、工程依赖模块：在`cocos.json`中的`dependencies`加入：`"m1" : "*"`，前面为模块名，后面为版本号（版本号目前没用）。重新运行`index.html`发现控制台输出了m1。证明模块被正确引入了。继续添加`"m2" : "*"`，运行，发现控制台输出了`m1 m2`，证明`m2`也被正确引入了。其中，可以查看`m2`的`cocos.json`，发现`m2`引用了`m1`，但是`m1`只在控制台打印了一次，说明了`m1`没有被重复加载。


完毕！


## publish说明
为了提高混淆压缩的质量，在代码里又分压缩前代码和压缩后代码，例如例子中是以 `__PUBLISH` 变量为分界。例如以下代码：
```js	
if(__PUBLISH) code1 else code2
```
那么publish之后只会剩下code1。这在某种意义上也会提高代码的运行效率，例如`log`。而且，如果是`log`的时候，通常都是打印写死的String，而String无法压缩。如果用这种方法，可以略微提高压缩率。
	
发布时，`cc.js`不会被加载进去，而是加载`cc4Publish.js`。
	
`res.js`会被加载进去，但是`jsRes.js`不会被加载进去，只有`resCfg.gameModules`中配置的几项，会被额外的抽取出来并进行了加工，载加载进去。`resCfg`也不会被加载进去，而是根据`gameModules`，抽取出其资源列表再进行加载。`jsRes.js`和`resCfg.js`进行加工后的文件可以在`tools/temp/resCfg4Publish.js`中看到。这样做可以有效的提高压缩量，因为这边的配置基本都是路径配置相关，而路径配置是String，String无法再进行压缩了。
    
当前的高级混淆我还没摸透，会出问题，所以目前就没用高级混淆了，只是提供了这种方案而已。

