```javascript
<div class="flex">
  <div class="bg-red-500 p-4 w-1/2 flex-shrink-0"></div>
  <div class="bg-blue-500 p-4 w-1/2 flex-shrink-0"></div>
</div>
```
This improved code utilizes `flex-shrink-0` to prevent the divs from shrinking below their specified width.  Alternatively, consider using a more robust sizing approach, for example, setting fixed widths and using `box-sizing: border-box;` to ensure that padding is included within the element's total width.  Experiment with different techniques based on your specific layout needs.