import React, { ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import { Icon } from '../index';
import { scopeClassMaker } from '../helpers/classes';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
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
  const dialogContent = props.visible ? (
    <>
      <div className={scopeClass('mask')} onClick={onClickMask} />
      <div className={scopeClass()}>
        <div className={scopeClass('close')} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={scopeClass('header')}>提示</header>
        <main className={scopeClass('main')}>{props.children}</main>
        <footer className={scopeClass('footer')}>
          {props.buttons &&
            props.buttons.map((button, index) =>
              React.cloneElement(button, {
                key: index,
              })
            )}
        </footer>
      </div>
    </>
  ) : null;
  return ReactDOM.createPortal(dialogContent, document.body);
};

Dialog.defaultProps = {
  closeOnClickMask: false,
};

const alert = (content: string) => {
  const component = (
    <Dialog
      visible={true}
      onclose={() => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div); //隐藏 dialog
        ReactDOM.unmountComponentAtNode(div); // 写在卸载 div
        div.remove(); // 删除 div
      }}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  console.log(content);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div); // 写在卸载 div
    div.remove(); // 删除 div
    yes && yes();
  };
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div); // 写在卸载 div
    div.remove(); // 删除 div
    no && no();
  };
  const component = (
    <Dialog
      visible={true}
      onclose={onNo}
      buttons={[<button onClick={onYes}>yes</button>, <button onClick={onNo}>no</button>]}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
};

const modal = (content: ReactNode) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div); // 写在卸载 div
    div.remove(); // 删除 div
  };
  const component = (
    <Dialog visible={true} onclose={onClose}>
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose;
};

export { alert, confirm, modal };

export default Dialog;
