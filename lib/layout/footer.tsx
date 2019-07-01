import React from 'react';
import { scopeClassMaker } from '../helpers/classes';

const scopeClass = scopeClassMaker('tui-layout');

const Footer: React.FunctionComponent = () => {
  return <div className={scopeClass('footer')}>Footer</div>;
};

export default Footer;