import React, { Component } from 'react';
import { Card, Form, Input, Row, Col} from 'antd';

export class CallApi extends Component {
  render() {
    return (
      <Row>
          <Col>
            <Card title="Call API">
                <Row>
                    <Col md={12}>
                        <Card title="API" size="small">

                        </Card>
                    </Col>
                    <Col md={12}>
                        <Card title="Kết quả" size="small">

                        </Card>
                    </Col>
                </Row>
            </Card>
          </Col>
      </Row>
    )
  }
}

export default CallApi
