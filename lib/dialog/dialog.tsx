import React, { ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import { Icon } from '../index';
import { scopeClassMaker } from '../helpers/classes';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopeClass = scopeClassMaker('tui-dialog');

const Dialog: React.FunctionComponent<Props> = props => {
  const onClickClose: React.MouseEventHandler = e => {
    props.onClose(e);
  };
  const onClickMask: React.MouseEventHandler = e => {
    if (props.closeOnClickMask) props.onClose(e);
  };
  const dialogContent = props.visible ? (
    <>
      <div className={scopeClass('mask')} onClick={onClickMask} />
      <div className={scopeClass()}>
        <div className={scopeClass('close')} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={scopeClass('header')}>提示</header>
        <main className={scopeClass('main')}>{props.children}</main>
        {props.buttons &&
          props.buttons.length > 0 && (
            <footer className={scopeClass('footer')}>
              {props.buttons.map((button, index) =>
                React.cloneElement(button, {
                  key: index,
                })
              )}
            </footer>
          )}
      </div>
    </>
  ) : null;
  return ReactDOM.createPortal(dialogContent, document.body);
};

Dialog.defaultProps = {
  closeOnClickMask: false,
};

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div); //隐藏 dialog
    ReactDOM.unmountComponentAtNode(div); // 写在卸载 div
    div.remove(); // 删除 div
  };
  const component = (
    <Dialog
      visible={true}
      onClose={() => {
        onClose();
        afterClose && afterClose();
      }}
      buttons={buttons}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose;
};

const alert = (content: string) => {
  const buttons = [<button onClick={() => close()}>OK</button>];
  const close = modal(content, buttons);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [<button onClick={onYes}>yes</button>, <button onClick={onNo}>no</button>];
  const close = modal(content, buttons, no);
};

export { alert, confirm, modal };

export default Dialog;
