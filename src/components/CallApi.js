import React, { Component } from 'react';
import { Card, Form, Input, Row, Col, Button} from 'antd';

export class CallApi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            userName: 'ducchungtx'
        }
        this.changeUrl = this.changeUrl.bind(this);
        this.callApi = this.callApi.bind(this);
        this.btnCallAction = this.btnCallAction.bind(this);
    }

    componentDidMount() {
        this.callApi('ducchungtx');
    }

    changeUrl(e) {
        this.setState({ userName: e.target.value });
    }

    callApi(username) {
        let gitHubLink = `https://api.github.com/users/${username}/repos`;
        fetch(gitHubLink).then(response => response.json()).then(data => this.setState({ data }));
    }

    btnCallAction() {
        this.callApi(this.state.userName);
    }

  render() {
      const { data } = this.state;
    return (
      <Row>
          <Col>
            <Card title="Call API">
                <Row>
                    <Col md={12}>
                        <Card title="API" size="small">
                            <Form>
                                <Input name="url" onBlur={ this.changeUrl } />
                                <Button onClick={this.btnCallAction}>Gọi API</Button>
                            </Form>
                        </Card>
                    </Col>
                    <Col md={12}>
                        <Card title="Kết quả" size="small">
                            { data ?
                            data.map((item, index) => {
                                return(
                                    <p key={index}>{item.url}</p>
                                )
                            })
                            : null}
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
