import React from 'react';
import { classesJoin, scopeClassMaker } from '../helpers/classes';

const scopeClass = scopeClassMaker('tui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;
  return (
    <div className={classesJoin(scopeClass('footer'), className)} {...restProps}>
      Footer
    </div>
  );
};

export default Footer;
