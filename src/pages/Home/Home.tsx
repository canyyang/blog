import { useState, useEffect } from 'react';
import { Flex, Button, Card, message } from 'antd'
import { useNavigate } from 'react-router-dom'

import Intro from '../../components/Intro/Intro'
import { getList } from '../../service/request'
import style from './Home.module.css'
import tagArr from '../../common/tag'
import { PageProps, InforObject, BlogItem } from '../../types/type';


const infor:InforObject = {
  '邮箱': 'canyangchen@126.com',
  'QQ': '2357873118'
}

export default function Home({isMobile}:PageProps) {
  const [messageApi, contextHolder] = message.useMessage()
  const [blogArr, setBlogArr] = useState<BlogItem[]>([])

  const navigate = useNavigate();

  const goPath = (path:string) => {
    navigate(path);
  };

  const goArticle = (id:string) => {
    navigate(`/article?id=${id}`);
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await getList();
        setBlogArr(data.slice(0, 5));
      } catch (err) {
        console.log(err)
      }
    };

    fetchBlogData(); // 自动请求数据
  }, []);

  const copyMessage = async (type: string) => {
    try {
      await navigator.clipboard.writeText(infor[type]);
      messageApi.open({
        type: 'success',
        content: `${type}号已保存到剪贴板`,
      });
    } catch (err) {
      console.error('复制失败', err);
    }
  };
  
  return (
    <Flex className={style.container}>
      {contextHolder}
      <Flex className={style.fixbox} vertical={true} align='center' style={{top: '100px'}}>
        <Intro />
        <Flex justify='space-between' className={style.tagList}>
          {tagArr.map(item => (<Button
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
            <div className={`${style['intro-context']}`}>前端开发者/在读研究生/CV魔法师</div>
            <Flex justify='flex-end'><Button type='text' className={`${style['left-button']}`} onClick={() => goPath('/about')}>了解更多</Button></Flex>
          </Card>
          <Card className={`${style.card}  ${style['right-card']}`}>
            <Flex align='center' className={`${style['intro-title']}`}><img src='imgs/github.png' style={{width: '23px', marginRight: '5px'}} />代码仓库</Flex>
            <div className={`${style['intro-context']}`}>https://github.com/canyyang</div>
            <Flex justify='flex-end'><Button type='text' className={`${style['right-button']}`}><a href="https://www.github.com/canyyang" target="_blank" rel="noopener noreferrer">去逛逛</a></Button></Flex>
          </Card>
        </Flex>
        <Card className={`${style.card}  ${style['card-title']}`} style={{width: `${isMobile ? '88vw' : '850px'}`}}>🔧 个人项目</Card>
        <Flex vertical={isMobile ? true : false} wrap justify='space-between' style={{width: `${isMobile ? '88vw' : '850px'}`}}>
          <Card className={`${style.item} ${style['first-item']}`}>
            <Flex align='center' className={`${style['intro-title']}`}>CANYYANG</Flex>
            <div className={`${style['intro-context']}`}>基于React+TypeScript+Antd的个人网站</div>
            <Flex justify='flex-end'><Button type='text' className={`${style['left-button']}`}><a href="https://www.github.com/canyyang/ZenLedger" target="_blank" rel="noopener noreferrer">查看详情</a></Button></Flex>
          </Card>
          <Card className={`${style.item} ${style['second-item']}`}>
            <Flex align='center' className={`${style['intro-title']}`}>YunHan</Flex>
            <div className={`${style['intro-context']}`}>基于Vue 3.0+Element UI的家教管理平台</div>
            <Flex justify='flex-end'><Button type='text' className={`${style['left-button']}`}><a href="https://www.github.com/canyyang/yunhan" target="_blank" rel="noopener noreferrer">查看详情</a></Button></Flex>
          </Card>
          <Card className={`${style.item} ${style['third-item']}`}>
            <Flex align='center' className={`${style['intro-title']}`}>YunServer</Flex>
            <div className={`${style['intro-context']}`}>基于EggJS+MongoDB的家教管理API系统</div>
            <Flex justify='flex-end'><Button type='text' className={`${style['left-button']}`}><a href="https://www.github.com/canyyang/ZenLedger" target="_blank" rel="noopener noreferrer">查看详情</a></Button></Flex>
          </Card>
          <Card className={`${style.item} ${style['fourth-item']}`}>
            <Flex align='center' className={`${style['intro-title']}`}>ZenLedger</Flex>
            <div className={`${style['intro-context']}`}>基于UniApp+uCharts的极简记账APP</div>
            <Flex justify='flex-end'><Button type='text' className={`${style['left-button']}`}><a href="https://www.github.com/canyyang/ZenLedger" target="_blank" rel="noopener noreferrer">查看详情</a></Button></Flex>
          </Card>
        </Flex>
        <Card className={`${style.card}  ${style['card-title']}`} style={{width: `${isMobile ? '88vw' : '850px'}`}}>📜 博客文章</Card>
        <Card className={`${style.card}`} style={{width: `${isMobile ? '88vw' : '850px'}`}}>
          {blogArr.map(item => (
            <Flex vertical={isMobile ? true : false} align={isMobile ? 'stretch' : 'center' } justify='space-between' className={style.blog} onClick={() => {goArticle(item.id)}} key={item.id}>
            <span className={`${style['blog-title']}`}>{item.title}</span>
            <span className={`${style['blog-time']}`}>{item.time}</span>
          </Flex>
          ))}
          <Flex align='center' justify='flex-end' className={`${style['blog-more']}`}>
            <div className={style.more} onClick={() => goPath('/blog')}>查看更多</div>
          </Flex>
        </Card>
        <Card className={`${style.card}  ${style['card-title']}`} style={{width: `${isMobile ? '88vw' : '850px'}`}}>📞 与我联系</Card>
        <Flex justify='space-between' vertical={isMobile ? true : false} style={{width: `${isMobile ? '88vw' : '850px'}`}}>
          <Flex onClick={() => copyMessage('邮箱')} className={`${style.card}  ${style['contact']}`}><div className={`${style['contact-img']}`} style={{backgroundPosition: '0 0'}}></div><span> Email: canyangchen@126.com</span></Flex>
          <Flex onClick={() => copyMessage('QQ')} className={`${style.card}  ${style['contact']}`}><div className={`${style['contact-img']}`} style={{backgroundPosition: '-32px 0'}}></div><span> QQ: 2357873118</span></Flex>
        </Flex>
      </Flex>
      <Flex vertical={true} align='center' className={style.fixbox} style={{bottom: '15px'}}>
        <a href="http://beian.miit.gov.cn/" className={style.record}>粤ICP备2024334937号</a>
      </Flex>
    </Flex>
  )
}