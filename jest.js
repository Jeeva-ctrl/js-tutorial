/*

Snapshot Testing


import renderer from 'react-test-renderer';

===========================================================================================================================


Snapshot Testing with Mocks, Enzyme and React 16#


There's a caveat around snapshot testing when using Enzyme and React 16+. If you mock out a module using the following style:

jest.mock('../SomeDirectory/SomeComponent', () => 'SomeComponent');

===========================================================================================================================


DOM Testing#

If you'd like to assert, and manipulate your rendered components you can use react-testing-library, Enzyme, or React's TestUtils. The following two examples use react-testing-library and Enzyme.

========================================================================================================================

import { cleanup, fireEvent, render } from "@testing-library/react";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

//Render into a container which is appended to document.body. It should be used with cleanup.

 const { queryByLabelText, getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  ===========================================================================================================================

  (method) jest.Matchers<void, HTMLElement>.toBeTruthy(): void
Use when you don't care what a value is, you just want to ensure a value is true in a boolean context. In JavaScript, there are six falsy values: false, 0, '', null, undefined, and NaN. Everything else is truthy.


  ===========================================================================================================================
Enzyme - 

Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.

*/

