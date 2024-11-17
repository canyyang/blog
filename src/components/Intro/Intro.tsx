import { Flex } from "antd"

import style from './Intro.module.css'

export default function Blog() {
    return (
        <Flex vertical={true} align="center" className={style.father}>
            <img className={style.logo} src="/imgs/avatar.jpg" />
            <span className={style.name}>canyyang</span>
            <span className={style.slogan}>Magic within you prevails</span>
        </Flex>
    )
}