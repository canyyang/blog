import { Flex, Button, Card } from 'antd'

import style from './Home.module.css'

const buttonText:Array<string> = ['00后', 'SCUT', '前端开发', 'ENFJ-A']

const isMobile:boolean = window.innerWidth <= 768;
console.log(isMobile)

export default function Home() {
  return (
    <Flex className={style.container}>
      <Flex className={style.fixbox} vertical={true} align='center' style={{top: '100px'}}>
        <img className={style.logo} src="/imgs/avatar.jpg" />
        <span className={style.name}>canyyang</span>
        <span className={style.slogan}>Magic within you prevails</span>
        <Flex justify='space-between' className={style.tagList}>
          {buttonText.map(item => (<Button
                                      className={style.tag} 
                                      key={item}
                                      type='text'>
                                      {item}
                                    </Button>))}
        </Flex>
      </Flex>
      {!isMobile && (<div className={style.leftbox}></div>)}
      <Flex className={style.rightbox}  vertical={true} align='center'>
        <Flex justify='space-between' vertical={isMobile ? true : false} style={{width: `${isMobile ? '88vw' : '850px'}`}} align='center'>
          <Card className={`${style.card} ${style['left-card']}`}>
            <Flex align='center' className={`${style['intro-title']}`}><img src='imgs/yang.png' style={{width: '25px', marginRight: '5px'}} /> 陈灿阳@canyyang</Flex>
            <div className={`${style['intro-context']}`}>前端开发者/在读研究生/代码魔法家</div>
            <Flex justify='flex-end'><Button type='text' className={`${style['left-button']}`}>了解更多</Button></Flex>
          </Card>
          <Card className={`${style.card}  ${style['right-card']}`}>
            <Flex align='center' className={`${style['intro-title']}`}><img src='imgs/github.png' style={{width: '23px', marginRight: '5px'}} />代码仓库</Flex>
            <div className={`${style['intro-context']}`}>https://github.com/canyyang</div>
            <Flex justify='flex-end'><Button type='text' className={`${style['right-button']}`}><a href="https://www.github.com/canyyang" target="_blank" rel="noopener noreferrer">去逛逛</a></Button></Flex>
          </Card>
        </Flex>
        <Card className={`${style.card}  ${style['card-title']}`} style={{width: `${isMobile ? '88vw' : '850px'}`}}>🔧 个人项目</Card>
        <Flex vertical={isMobile ? true : false} justify='space-between' style={{width: `${isMobile ? '88vw' : '850px'}`}}>
          <Card className={`${style.item} ${style['first-item']}`}>
            <Flex align='center' className={`${style['intro-title']}`}><img src='imgs/money.png' style={{width: '25px', marginRight: '6px'}} /> ZenLedger</Flex>
            <div className={`${style['intro-context']}`}>基于uniapp的免登录极简记账APP</div>
            <Flex justify='flex-end'><Button type='text' className={`${style['left-button']}`}><a href="https://www.github.com/canyyang/ZenLedger" target="_blank" rel="noopener noreferrer">查看详情</a></Button></Flex>
          </Card>
        </Flex>
        <Card className={`${style.card}  ${style['card-title']}`} style={{width: `${isMobile ? '88vw' : '850px'}`}}>📜 博客文章</Card>
        <Card className={`${style.card}`} style={{width: `${isMobile ? '88vw' : '850px'}`}}>
          <Flex vertical={isMobile ? true : false} align={isMobile ? 'stretch' : 'center' } justify='space-between' className={style.blog}>
            <span className={`${style['blog-title']}`}>2024年度总结：欲买桂花同载酒</span>
            <span className={`${style['blog-time']}`}>2024.11.14</span>
          </Flex>
          <Flex vertical={isMobile ? true : false} align={isMobile ? 'stretch' : 'center' } justify='space-between' className={style.blog}>
            <span className={`${style['blog-title']}`}>2024年度总结：终不似，少年游</span>
            <span className={`${style['blog-time']}`}>2024.11.14</span>
          </Flex>
          <Flex align='center' justify='flex-end' className={`${style['blog-more']}`}>
            <div className={style.more}>查看更多</div>
          </Flex>
        </Card>
        <Card className={`${style.card}  ${style['card-title']}`} style={{width: `${isMobile ? '88vw' : '850px'}`}}>📞 与我联系</Card>
        <Flex justify='space-between' vertical={isMobile ? true : false} style={{width: `${isMobile ? '88vw' : '850px'}`}}>
          <Flex className={`${style.card}  ${style['contact']}`}><div className={`${style['contact-img']}`} style={{backgroundPosition: '0 0'}}></div><span> Email: canyangchen@126.com</span></Flex>
          <Flex className={`${style.card}  ${style['contact']}`}><div className={`${style['contact-img']}`} style={{backgroundPosition: '-32px 0'}}></div><span> QQ: 2357873118</span></Flex>
        </Flex>
      </Flex>
      <Flex vertical={true} align='center' className={style.fixbox} style={{bottom: '15px'}}>
        <a href="http://beian.miit.gov.cn/" className={style.record}>粤ICP备2024334937号</a>
      </Flex>
    </Flex>
  )
}