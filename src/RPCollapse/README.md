# RPCollapse
----

## Example usage

```js
import React from 'react';
import { RPCollapse } from 'react-rp-components';

const SomeComponent = () => (
  <div>
    <RPCollapse
      defaultOpen
      render={({ isOpen, toggle }) => (
        <div>
          <button type="button" onClick={toggle}>Toggle My Collapse</button>
          {isOpen && (
            <div>Some Collapse Content</div>
          )}
        </div>
      )}
    />
  </div>
);
```

### props
name | type | required | description
--- | --- | --- | ---
render | function | yes | Use the exposed props as desired.
defaultOpen | boolean | no | Sets initial isOpen state

### render props
name | type | description
--- | --- | ---
isOpen | boolean | Whether the collapse is open or not
toggle | function | Function to toggle isOpen
