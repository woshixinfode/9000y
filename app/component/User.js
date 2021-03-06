import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { message, Affix, Breadcrumb, Form, Tag, Row, Col, Input, Button, Upload, Select, Checkbox, Radio, Tooltip, Icon } from 'antd';
import { query } from '../common/query'
import { UserDetail } from './UserDetail'
import { UserInfo } from './UserInfo'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class User extends React.Component {
  render() {
    return (
      <div className="content">
        <Row className="content">
          <Col span="14">
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}

export { User, UserDetail, UserInfo };
