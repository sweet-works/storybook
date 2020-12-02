
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button.js';
export default { title: 'Button' };

export const withText = () => <Button>with text</Button>;

export const withEmoji = () => <Button>😀 😎 👍 💯</Button>;

storiesOf('Modules/core/Accordion', module)
    .add('default',
        () => {
            return (
                <div>
                    <Button type='warning'>warning</Button>
                    <Button type='ghost'>ghost</Button>
                    <Button>with text</Button>
                </div>
            );
        }
    ).add('default2',
        () => {
            return (
                <div>
                    <Button type='primary'>primary</Button>
                    <Button type='dashed'>dashed</Button>
                    <Button type='link'>link</Button>
                </div>
            );
        }
    );