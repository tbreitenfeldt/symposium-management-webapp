

#

# menu.js Documentation

### `function removeSideBar(barId, iconId)`

 * **Parameters:**
   * `barId` — `*` — 
   * `iconId` — `*` — 

### `function openSidebar(sidebarType, headingId)`

 * **Parameters:**
   * `sidebarType` — `*` — 
   * `headingId` — `*` — 

### `function closeLeftSideBar()`

### `function closeCenterSideBar()`

### `function closeRightSideBar()`

### `function hideContentPage()`

### `function showContentPage()`

### `function isMobile()`

 * **Returns:** `u` — 

### `function toggleBodySidebar()`

### `function getPageWidth()`

 * **Returns:** `u` — 

### `function isMobileScreenWidth()`

 * **Returns:** `u` — 

### `function closeMenus()`

### `function changeSize(element, style, size)`

 * **Parameters:**
   * `element` — `*` — 
   * `style` — `*` — 
   * `size` — `*` — 

### `function setCurrentFontDisplay()`

### `function toggleGraystyle()`

### `function toggleInvertColor()`

### `function turnOnGrayStyle()`

### `function turnOnColorDefault()`

### `function turnOnInverseStyle()`

### `function removeCurrentColorSetting()`

### `function toggleAriaButtonPress(elementId)`

 * **Parameters:** `elementId` — `*` — 

### `function changeFontScreen()`

### `function setCookie(cname, cvalue)`

 * **Parameters:**
   * `cname` — `*` — 
   * `cvalue` — `*` — 

### `function getCookie(cname)`

 * **Parameters:** `cname` — `*` — 
 * **Returns:** `u` — 

### `function onloadCook()`

### `function onFontChange()`

When the one of the following ids ['increase-font', 'decrease-font', 'increase-font'] are clicked, the respective clickEvent will change the global variable that contains the current size setting. onFontChange will adjust the new currentSizing by calling the respective methods that adjusts sizes.
