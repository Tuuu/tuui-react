import React, { ReactElement } from 'react';
import { classesJoin, scopeClassMaker } from '../helpers/classes';
import './layout.scss';
import Aside from './aside';

const scopeClass = scopeClassMaker('tui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const Layout: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;
  const x = props.children as Array<ReactElement>;
  const hasAside = !!x.length && x.some(node => node.type === Aside);
  return (
    <div
      className={classesJoin(scopeClass(), scopeClass(hasAside && 'hasAside'), className)}
      {...restProps}
    >
      {props.children}
    </div>
  );
};

export default Layout;
export { Layout };
export { default as Header } from './header';
export { default as Aside } from './aside';
export { default as Content } from './content';
export { default as Footer } from './footer';
