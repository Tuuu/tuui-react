import React from 'react';
import classes from '../helpers/classes';
import './importAllIcons';
import './icon.scss';

// 声明接口类型
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  const { className, name, ...restProps } = props;
  return (
    <svg className={classes('tui-icon', className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
