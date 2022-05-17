import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { actions, InitialState } from './homeRedux'
import { Button } from 'antd'
import { queryUrlParams } from '../../unils/getUrl'
import { IDEState } from '../../redux/rootReducer';

const mapStateToProps = (state: IDEState): InitialState => {
  return {
    ...state.homeReducer
  }
};

const mapDispatchToProps = { ...actions };

interface Props {
  id: number;
  changeId:(val:number)=> void;
}

const Home = (props: Props) => {

  const { id, changeId } = props;

  const [val, setVal] = useState<string>('')

  useEffect(() => {
    setVal('https://www.baidu.com/m?a=1&b=2&c=3')
  }, [])


  const handleOk = () => {
    console.log('queryUrlParams', queryUrlParams(val))
  }

  const handleChangeId = () => {
    changeId(Math.random()*100)
  }
  return (
    <div>
      <Button type='primary' onClick={handleOk} > {'确定'}</Button>
      <Button type='primary' onClick={handleChangeId} > {'确定'}</Button>
      <div>
        {id}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);