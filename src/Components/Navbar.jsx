import React from 'react'
import { Link } from 'react-router-dom'
import { Anchor } from 'antd'
import styles from '../Styles/navbar.module.css'
const Navbar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <Anchor
                    direction="horizontal"
                    items={[
                        {
                            key: 'part-1',
                            href: '#navbar',
                            title: 'Home',
                        },
                        {
                            key: 'part-2',
                            href: '#about',
                            title: 'About',
                        },
                        {
                            key: 'part-3',
                            href: '#skills',
                            title: 'Skills',
                        },
                        {
                            key: 'part-4',
                            href: '#stats',
                            title: 'Stats',
                        },
                        {
                            key: 'part-5',
                            href: '#projects',
                            title: 'Projects',
                        },
                        {
                            key: 'part-6',
                            href: '#contact',
                            title: 'Contact',
                        },
                        {
                            key: 'part-6',
                            href: '#resume',
                            title: 'Resume',
                        },
                    ]}
                />
            </div>
        </>
    )
}

export default Navbar