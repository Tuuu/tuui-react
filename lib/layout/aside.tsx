import React from 'react';
import { classesJoin, scopeClassMaker } from '../helpers/classes';

const scopeClass = scopeClassMaker('tui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Aside: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;
  return (
    <div className={classesJoin(scopeClass('aside'), className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Aside;
