import React from 'react';
import { classesJoin, scopeClassMaker } from '../helpers/classes';

const scopeClass = scopeClassMaker('tui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;
  return (
    <div className={classesJoin(scopeClass('header'), className)} {...restProps}>
      Header
    </div>
  );
};

export default Header;
