import { Flex, Timeline } from 'antd';

import { BlogItem } from '../../common/blog';
import blog from '../../common/blog';

import style from './Blog.module.css'

import Intro from '../../components/Intro/Intro'

interface TimeItem {
    color?: string,
    children: JSX.Element
}

type BlogProps = {
    isMobile: boolean
}

let currentYear:string = blog[0].time.slice(0, 4);

const blogArr = blog.reduce<Array<TimeItem>>((timeArr:Array<TimeItem>, item:BlogItem) => {
    let year:string = item.time.slice(0, 4);
    if (!timeArr.length || currentYear != year) {
        currentYear = year
        timeArr.push({
            color: 'gray',
            children: (<span className={style.year}>{year}</span>)
        })
    }
    timeArr.push({
        children: (
                    <div>
                        <span className={style.time}>{item.time.slice(5)}</span>
                        <span className={style.title}>{item.title}</span>
                    </div>)
    })
    return timeArr
}, [])


export default function Blog({isMobile}:BlogProps) {
    return (
        <Flex>
            {/* <Flex justify='center' align='center' className={style.header}>CANYYANG</Flex> */}
            <Flex vertical={true} className={style.leftbox}><Timeline items={blogArr} className={style['time-line']}/></Flex>
            {!isMobile && (<Flex className={style.rightbox} vertical={true} align='center'><Intro /></Flex>)}
        </Flex>
    )
}