

#

# javadoc-to-markdown.js Documentation

### `var JavadocToMarkdown = function (fName)`

Generate Markdown from your Javadoc, PHPDoc or JSDoc comments

Usage: Create a new instance of `JavadocToMarkdown` and then call either `fromJavadoc()`, `fromPHPDoc()` or `fromJSDoc()`

 * **Constructor**

### `function fromDoc(code, headingsLevel, fnAddTagsMarkdown)`

Generates Markdown documentation from code on a more abstract level

 * **Parameters:**
   * `code` — `string` — the code that contains doc comments
   * `headingsLevel` — `number` — the headings level to use as the base (1-6)
   * `fnAddTagsMarkdown` — `function` — the function that processes doc tags and generates the Markdown documentation
 * **Returns:** `string` — the Markdown documentation

### `this.fromStaticTypesDoc = function(code, headingsLevel)`

Generates Markdown documentation from a statically typed language's doc comments

 * **Parameters:**
   * `code` — `string` — the code that contains doc comments
   * `headingsLevel` — `number` — the headings level to use as the base (1-6)
 * **Returns:** `string` — the Markdown documentation

### `this.fromDynamicTypesDoc = function(code, headingsLevel, fnFormatType, fnFormatTypeAndName)`

Generates Markdown documentation from a dynamically typed language's doc comments

 * **Parameters:**
   * `code` — `string` — the code that contains doc comments
   * `headingsLevel` — `number` — the headings level to use as the base (1-6)
   * `fnFormatType` — `function` — the function that formats a type information (single argument)
   * `fnFormatTypeAndName` — `function` — the function that formats type and name information (two arguments)
 * **Returns:** `string` — the Markdown documentation

### `this.fromJavadoc = function(code, headingsLevel)`

Generates Markdown documentation from Javadoc comments

 * **Parameters:**
   * `code` — `string` — the code that contains doc comments
   * `headingsLevel` — `number` — the headings level to use as the base (1-6)
 * **Returns:** `string` — the Markdown documentation

### `this.fromPHPDoc = function(code, headingsLevel)`

Generates Markdown documentation from PHPDoc comments

 * **Parameters:**
   * `code` — `string` — the code that contains doc comments
   * `headingsLevel` — `number` — the headings level to use as the base (1-6)
 * **Returns:** `string` — the Markdown documentation

### `this.fromJSDoc = function(code, headingsLevel)`

Generates Markdown documentation from JSDoc comments

 * **Parameters:**
   * `code` — `string` — the code that contains doc comments
   * `headingsLevel` — `number` — the headings level to use as the base (1-6)
 * **Returns:** `string` — the Markdown documentation

### `function fromSection(section, headingsLevel, fnAddTagsMarkdown)`

Generates Markdown documentation from a given section

The function processes units of documentation, a line of code with accompanying doc comment

 * **Parameters:**
   * `section` — `object` — the section that consists of code line and doc comment
   * `headingsLevel` — `number` — the headings level to use as the base (1-6)
   * `fnAddTagsMarkdown` — `function` — the function that processes doc tags and generates the Markdown documentation
 * **Returns:** `string` — the Markdown documentation
