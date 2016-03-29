/* @flow */

import React, {Component} from 'react'
import {createEventFilterCreator} from 'regexp-input'
import type {
    EventFilter
} from 'regexp-input-demo/i/interfaces'

const createEventFilter = createEventFilterCreator(window)

type MaskedInputProps = {
    value: string;
    pattern: string;
    onChange: (val: string) => string;
}

export default class MaskedInput extends Component {
    _eventFilter: EventFilter;

    constructor(props: MaskedInputProps) {
        super(props)

        this._eventFilter = createEventFilter({
            value: props.value,
            pattern: props.pattern,
            onChange: props.onChange
        });
    }

    render(): React$Element {
        const ef = this._eventFilter
        return (
            <input
                {...this.props}
                onChange={ef.onChange}
                onKeyPress={ef.onKeypress}
                onPaste={ef.onPaste}
                onKeyDown={ef.onKeyDown}
            />
        )
    }
}
