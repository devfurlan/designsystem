import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Checkbox, CheckboxProps } from '@devfurlan/react';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    label: 'Accept terms of use',
    'aria-label': 'Accept terms of use',
    'aria-labelledby': 'accept-terms-of-use',
  },
  decorators: [
    (Story) => {
      const storyContext = Story();

      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {storyContext}
          <Text size="sm" id={storyContext.props['aria-labelledby']}>
            {storyContext.props.label}
          </Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
