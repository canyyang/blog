import { Button, Flex } from "antd";

import style from './About.module.css'

import intro from "../../common/intro"
import tagList from "../../common/tag"


export default function About() {
    return (
      <Flex vertical={true} align="center" justify="center" className={style.container}>
        <Flex vertical={true} align="center">
            <img src="/imgs/avatar.jpg" className={style.avatar} />
            <Flex justify='space-between' className={style.tagList}>
              {tagList.map(item => (<Button
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