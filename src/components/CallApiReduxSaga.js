import React, { Component } from 'react';
import { connect } from "react-redux";
import { Card, Form, Input, Row, Col, Button} from 'antd';
import {
  fetchGithubUser
} from '../actions/gitHubActions';

export class CallApiReduxSaga extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            userName: 'ducchungtx'
        }
        this.changeUrl = this.changeUrl.bind(this);
        this.btnCallAction = this.btnCallAction.bind(this);
    }

    componentDidMount() {
        this.props.fetchGithubUser('ducchungtx');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      const { gitHubReducer } = nextProps;
      return { data: gitHubReducer.data };
    }

    changeUrl(e) {
        this.setState({ userName: e.target.value });
    }

    btnCallAction() {
        this.props.fetchGithubUser(this.state.userName);
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

const mapStateToProps = state => {
  console.log('state', state);
  const { gitHubReducer } = state;
  return { gitHubReducer };
};
export default connect(
  mapStateToProps,
  { fetchGithubUser }
)(CallApiReduxSaga);

