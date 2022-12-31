import type { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps, Text } from '@ailembrei/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui
        incidunt repellat accusamus soluta esse in optio praesentium repellendus
        a pariatur omnis, sequi quibusdam deserunt odit inventore officia
        debitis asperiores.
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
