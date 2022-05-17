/**
 * 
 * 
 * */

import * as  React from 'react';
import { Tooltip } from 'antd'


class AbbrProps {
    className?= '';

    text: number | string | undefined | null | '';

    length?: number ;


}

class Abbr extends React.PureComponent<AbbrProps, any> {
    static defaultProps = new AbbrProps();

    // private el: HTMLElement;

    // state = {
    //     // 仅对line模式生效

    // }
}
