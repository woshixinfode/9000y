import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { Row, Col, Menu, Icon } from 'antd'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Row type='flex' justify="space-around">
          <Col span="3">
            <p>服务</p>
            <ul>
              <li><Link to="/">产品开发</Link></li>
              <li><Link to="/">策划与运营</Link></li>
              <li><Link to="/">影视传播</Link></li>
            </ul>
          </Col>
          <Col span="3">
            <p>产品</p>
            <ul>
              <li><Link to="/">Web应用</Link></li>
              <li><Link to="/">App应用</Link></li>
              <li><Link to="/">影视广告</Link></li>
              <li><Link to="/">策划运营</Link></li>
              <li><Link to="/">动漫游戏</Link></li>
            </ul>
          </Col>
          <Col span="3">
            <p>支持</p>
            <ul>
              <li><Link to="/">帮助与支持</Link></li>
              <li><Link to="/">问题搜索与解答</Link></li>
              <li><Link to="/">常见问题</Link></li>
              <li><Link to="/">联系我们</Link></li>
            </ul>
          </Col>
          <Col span="3">
            <p>关于</p>
            <ul>
              <li><Link to="/">关于九千年</Link></li>
              <li><Link to="/">九千年新闻</Link></li>
              <li><Link to="/">招贤纳士</Link></li>
              <li><Link to="/">网站地图</Link></li>
            </ul>
          </Col>
          <Col span="8">
            <Row>
              <span id="Logo-footer"></span>
              <small> 中国 光谷</small>
              <br/>
              <span className="CW">BG Studio/ 简過工作室</span>
            </Row>
            © 2016 BriefGuo
          </Col>
        </Row>
      </footer>
    )
  }
}
export { Footer };
