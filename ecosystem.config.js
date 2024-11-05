module.exports = {
    apps: [
      {
        name: 'blog', // 项目名称
        script: 'react-admin-server.js'
      },
    ],
    deploy: {
      production: {
        user: 'root', // 通过root权限进入服务器
        host: '120.77.36.205', // 服务器ip地址
        ref: 'origin/main', // 要拉取代码的分支
        repo: 'git@github.com:canyyang/blog.git', 
        path: '~/workspace/blog', // 拉取代码后，存放在服务器的文件地址。
        'post-deploy': 'git reset --hard && git checkout main && git pull && npm i --production=false && npm run build && pm2 startOrReload ecosystem.config.js', // 顺序执行这些指令，最后 pm2 startOrReload ecosystem.config.js 会通过 pm2 启动 react-admin-server.js
        env: {
          NODE_ENV: 'production'
        }
      }
    }
  }