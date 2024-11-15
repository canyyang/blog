import { Button, Flex } from "antd";

import style from './About.module.css'

import intro from "../../common/intro";

const buttonText:Array<string> = ['00后', 'SCUT', '前端开发', 'ENFJ-A']

export default function About() {
    return (
      <Flex vertical={true} align="center" justify="center" className={style.container}>
        <Flex vertical={true} align="center">
            <img src="/imgs/avatar.jpg" className={style.avatar} />
            <Flex justify='space-between' className={style.tagList}>
              {buttonText.map(item => (<Button
                                          className={style.tag} 
                                          key={item}
                                          type='text'>
                                          {item}
                                        </Button>))}
            </Flex>
            <span className={style.title}>关于我</span>
            <div className={style.split}></div>
            {intro.map(item => (
                <span className={style.intro} key={item}>{item}</span>
            ))}
        </Flex>
      </Flex>
    )
  }