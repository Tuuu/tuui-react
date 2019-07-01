import React from 'react';
import { scopeClassMaker } from '../helpers/classes';

const scopeClass = scopeClassMaker('tui-layout');

const Content: React.FunctionComponent = () => {
  return <div className={scopeClass('content')}>Content</div>;
};

export default Content;