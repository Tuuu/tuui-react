import React, { ReactElement } from 'react';
import './dialog.scss';
import { Icon } from '../index';
import { scopeClassMaker } from '../helpers/classes';

interface Props {
  visible: boolean;
  buttons: Array<ReactElement>;
  onclose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopeClass = scopeClassMaker('tui-dialog');

const Dialog: React.FunctionComponent<Props> = props => {
  const onClickClose: React.MouseEventHandler = e => {
    props.onclose(e);
  };
  const onClickMask: React.MouseEventHandler = e => {
    if (props.closeOnClickMask) props.onclose(e);
  };
  return props.visible ? (
    <>
      <div className={scopeClass('mask')} onClick={onClickMask} />
      <div className={scopeClass()}>
        <div className={scopeClass('close')} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={scopeClass('header')}>提示</header>
        <main className={scopeClass('main')}>{props.children}</main>
        <footer className={scopeClass('footer')}>
          {props.buttons.map((button, index) =>
            React.cloneElement(button, {
              key: index,
            }),
          )}
        </footer>
      </div>
    </>
  ) : null;
};

Dialog.defaultProps = {
  closeOnClickMask: false,
};

export default Dialog;
