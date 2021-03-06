import React from 'react';
import { classesJoin, scopeClassMaker } from '../helpers/classes';

const scopeClass = scopeClassMaker('tui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Content: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;
  return (
    <div className={classesJoin(scopeClass('content'), className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Content;
