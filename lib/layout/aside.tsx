import React from 'react';
import { scopeClassMaker } from '../helpers/classes';

const scopeClass = scopeClassMaker('tui-layout');

const Aside: React.FunctionComponent = () => {
  return <div className={scopeClass('aside')}>Aside</div>;
};

export default Aside;