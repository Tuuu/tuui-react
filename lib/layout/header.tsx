import React from 'react';
import { scopeClassMaker } from '../helpers/classes';
const scopeClass = scopeClassMaker('tui-layout');

const Header: React.FunctionComponent = () => {
  return <div className={scopeClass('header')}>Header</div>;
};

export default Header;