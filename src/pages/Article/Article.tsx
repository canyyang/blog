import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Flex } from 'antd';

import { getArticle } from '../../service/request'
import style from './Article.module.css'
import './markdown.css'


export default function Article() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id:string = queryParams.get('id') || '01'; // 获取 'id' 参数
  const [htmlContent, setHtmlContent] = useState<string>('');

  // 通过 fetch 获取从服务器解析后的 HTML 内容
  useEffect(() => {
    const getMarkdown = async () => {
      try {
        const data = await getArticle(id);
        setHtmlContent(data);  // 设置 HTML 内容到状态
      } catch (error) {
        console.error('Error fetching markdown:', error);
      }
    };
    getMarkdown();
  }, []);

  return (
    <Flex vertical={true} className={style.container} align='center'>
        <div className={`markdown-body ${style['markdown-body']}`} dangerouslySetInnerHTML={{ __html: htmlContent }}>
        </div>
    </Flex>
  );
};