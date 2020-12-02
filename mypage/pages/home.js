/*
 * @Autor: yaojie
 * @Date: 2020-12-02 15:01:40
 * @LastEditors: yaojie
 * @LastEditTime: 2020-12-02 15:18:42
 * @Description: 
 */
import React, { Component } from 'react'
import { Button, List } from 'antd-mobile'
export default class componentName extends Component {
    render() {
        return (
            <div>
                is new page!!!
                <Button type="ghost" size="small" inline>small</Button>
                <Button type="ghost" size="large" inline>small</Button>
                <Button type='primary' size='small' inline>small</Button>
                <Button type='primary' size='large' inline>small</Button>
                <Button type='warning' size="small" inline>small</Button>
                <Button type='warning' size="smalargell" inline>small</Button>
            </div>
        )
    }
}
