import React from 'react';
import ReactDOM from 'react-dom/client';
import * as components from './app/components/index';

type ComponentName = keyof typeof components;

declare global {
  interface Window {
    ChloePreview: {
      render: (componentName: string, containerId: string) => void;
    };
  }
}

window.ChloePreview = {
  render(componentName: string, containerId: string) {
    const Component = components[componentName as ComponentName] as React.ComponentType;
    if (!Component) {
      console.error(`Component "${componentName}" not found`);
      return;
    }
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container "${containerId}" not found`);
      return;
    }
    ReactDOM.createRoot(container).render(React.createElement(Component));
  },
};
