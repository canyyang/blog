import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Flex, Timeline } from 'antd'

import { getList } from '../../service/request'
import style from './Blog.module.css'
import Intro from '../../components/Intro/Intro'
import { TimeItem, PageProps, BlogItem } from '../../types/type';

export default function Blog({isMobile}:PageProps) {
    const [blog, setBlog] = useState<BlogItem[]>([]);
    let currentYear = '';

    const navigate = useNavigate();
    const goArticle = (id:string) => {
        navigate(`/article?id=${id}`);
    };

    useEffect(() => {
        const fetchBlogData = async () => {
          try {
            const data = await getList();
            setBlog(data);
            currentYear = data[0].time.slice(0, 4);
          } catch (err) {
            console.log(err)
          }
        };
    
        fetchBlogData(); // 自动请求数据
      }, []);

    const blogArr = blog.reduce<Array<TimeItem>>((timeArr:Array<TimeItem>, item:BlogItem) => {

        let year:string = item.time.slice(0, 4);
        if (!timeArr.length || currentYear != year) {
            currentYear = year;
            timeArr.push({
                color: 'gray',
                children: (<span className={style.year}>{year}</span>)
            })
        }
        timeArr.push({
            children: (
                        <div>
                            <span className={style.time}>{item.time.slice(5)}</span>
                            <span className={style.title} onClick={() => {goArticle(item.id)}}>{item.title}</span>
                        </div>)
        })
        return timeArr
    }, [])

    return (
        <Flex>
            <Flex vertical={true} className={style.leftbox}><Timeline items={blogArr} className={style['time-line']}/></Flex>
            {!isMobile && (<Flex className={style.rightbox} vertical={true} align='center'><Intro /></Flex>)}
        </Flex>
    )
}