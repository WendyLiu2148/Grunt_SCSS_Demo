参考网址：http://yujiangshui.com/grunt-basic-tutorial/


1.安装node.js [grunt依赖node.js]
2.安装grunt : npm install -g grunt-cli
3.生成 package.json 文件：　npm init
4.安装grunt所需要的插件 : npm install --save-dev grunt-contrib-sass
5.配置 Gruntfile.js 的语法

module.exports = function(grunt) {

  var sassStyle = 'expanded';　//无缩进的css扩展

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist : {　　／／编写一个 Sass 任务 dist（名字可以改变）　任务配置
        options: {
          style: sassStyle
        },
        files: {
          'css/style.css': 'SCSS/style.scss'　　//将‘SCSS/style.scss’路径下的scss编译到'css/style.css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');　／／插件加载(安装什么插件，就加载什么插件)

  grunt.registerTask('cbuild',['sass']);　　／／任务注册　（在该路径下执行命令：grunt cbuild即可编译）
  grunt.registerTask('default');

};

要将scss用于项目要安装sass
1.安装ruby : sudo apt-get install ruby (安装sass需要安装ruby)
2.安装sass: gem install sass