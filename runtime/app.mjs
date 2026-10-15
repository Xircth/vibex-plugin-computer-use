import React from 'react';
import { createRoot } from 'react-dom/client';
import { definePluginApp } from '@vibex/plugin-sdk/app';
import ComputerUseSettingsView from '../src/views/view.tsx';
import './app.css';

export default definePluginApp(({ root, bridge, slot }) => {
  const reactRoot = createRoot(root);
  reactRoot.render(
    React.createElement(ComputerUseSettingsView, {
      environment: {
        pluginId: bridge.pluginId,
        surfaceId: 'computer-use',
        slot: slot ?? 'app.settings.page',
        invoke: (handler, input) => bridge.invoke(handler, input ?? {}),
      },
    })
  );
  bridge.ready();
  return () => {
    reactRoot.unmount();
  };
});
