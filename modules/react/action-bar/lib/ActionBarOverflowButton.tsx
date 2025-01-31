import * as React from 'react';
import styled from '@emotion/styled';

import {relatedActionsIcon} from '@workday/canvas-system-icons-web';
import {
  createElemPropsHook,
  composeHooks,
  subModelHook,
  createSubcomponent,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {useOverflowListTarget} from '@workday/canvas-kit-react/collection';

import {useMenuTarget} from '@workday/canvas-kit-react/menu';
import {useActionBarModel} from './useActionBarModel';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export const useActionBarOverflowButton = composeHooks(
  createElemPropsHook(useActionBarModel)(() => ({
    'aria-haspopup': true,
  })),
  useOverflowListTarget,
  subModelHook((m: ReturnType<typeof useActionBarModel>) => m.menu, useMenuTarget)
);

const StyledSecondaryButton = styled(SecondaryButton)<StyledType>({
  flex: 0,
});

export const ActionBarOverflowButton = createSubcomponent('button')({
  displayName: 'ActionBar.OverflowButton',
  modelHook: useActionBarModel,
  elemPropsHook: useActionBarOverflowButton,
})((elemProps, Element) => {
  return <StyledSecondaryButton as={Element} icon={relatedActionsIcon} {...elemProps} />;
});
