import React from 'react';
import {Box} from 'native-base';

type Props = {
  children: JSX.Element;
  w?: string;
  h?: string;
};

/**
 * Renders an icon with the specified dimensions.
 *
 * @param {Props} children - The children to render inside the icon.
 * @param {string} w - The width of the icon. Defaults to '30px'.
 * @param {string} h - The height of the icon. Defaults to '30px'.
 * @return {ReactElement} The rendered icon element.
 */
export default function RenderIcon({
  children,
  w = '30px',
  h = '30px',
}: Props): React.ReactElement {
  return (
    <Box alignItems={'center'} justifyContent={'center'} w={w} h={h}>
      {children}
    </Box>
  );
}
