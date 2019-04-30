import * as React from 'react';
import './dialog.scss';
import { Icon } from '../index';
import { scopeClassMaker } from '../helpers/classes';

interface Props {
  visible: boolean;
}

const scopeClass = scopeClassMaker('tui-dialog');

const Dialog: React.FunctionComponent<Props> = props => {
  return props.visible ? (
    <>
      <div className={scopeClass('mask')} />
      <div className={scopeClass()}>
        <div className={scopeClass('close')}>
          <Icon name="close" />
        </div>
        <header className={scopeClass('中文')}>提示</header>
        <main className={scopeClass('main')}>{props.children}</main>
        <footer className={scopeClass('footer')}>
          <button>取消</button>
          <button>确定</button>
        </footer>
      </div>
    </>
  ) : null;
};

export default Dialog;
