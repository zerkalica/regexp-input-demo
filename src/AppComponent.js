/* @flow */

import React, {Component} from 'react'
import InputPAN from 'regexp-input-demo/inputs/InputPAN'
import type {
    CreateEventFilter
} from 'regexp-input/i/interfaces'

type AppComponentProps = {
}

type AppComponentState = {
    pan: string;
}

export default class AppComponent extends Component<void, AppComponentProps, AppComponentState> {
    props: AppComponentProps;
    state: AppComponentState;

    constructor(props: AppComponentProps) {
        super(props)
        this.state = {
            pan: '123'
        }
    }

    _onPANChange: (pan: string) => void = (pan: string) => {
        this.setState({pan})
    };

    render(): React$Element {
        return (
            <ul>
                <li>
                    <h2>InputPAN</h2>
                    <InputPAN
                        value={this.state.pan}
                        onChange={this._onPANChange}
                    />
                </li>
            </ul>
        )
    }
}
