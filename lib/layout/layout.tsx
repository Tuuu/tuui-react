import React from 'react';
import { scopeClassMaker } from '../helpers/classes';
import './layout.scss';

const scopeClass = scopeClassMaker('tui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Layout: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;
  return (
    <div className={[scopeClass(), className].join(' ')} {...restProps}>
      {props.children}
    </div>
  );
};

export default Layout;
