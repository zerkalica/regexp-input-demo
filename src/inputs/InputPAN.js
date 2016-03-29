/* @flow */

import React from 'react'
import MaskedInput from 'regexp-input-demo/inputs/MaskedInput'

type InputPANProps = {
    value: string;
    onChange: (val: string) => void;
}

export default function InputPAN({
    value,
    onChange
}: InputPANProps): React$Element {
    return (
        <MaskedInput
            type="text"
            placeholder="1234-1234-1234-1234"
            pattern="\d{4}-\d{4}-\d{4}-\d{4,7}"
            value={value}
            onChange={onChange}
        />
    )
}
