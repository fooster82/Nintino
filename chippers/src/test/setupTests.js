import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import "@testing-library/jest-dom";

// global.screen = screen;
global.React = React;
global.render = render;
global.userEvent = userEvent;
