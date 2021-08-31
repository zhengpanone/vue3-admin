import { App } from '@vue/runtime-core';
import { Button, Form, Input, Layout, Menu, Row, Col } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'

const components = [
    Form, Input, Button, Layout, Menu, Row, Col
]

export function setupAntd(app: App) {
    components.forEach(component => {
        app.use(component)
    })

}