# Inconsistent Sizing in Tailwind CSS Flexbox

This repository demonstrates a common issue encountered when using Tailwind CSS flexbox for layout.  The problem arises when expecting two divs within a flex container to perfectly split the available width, but they don't due to unforeseen factors like padding or content overflow.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides a solution using techniques like `flex-shrink-0` to prevent unexpected shrinking or improved sizing strategies to ensure consistent layout.