# Snap! (BYOB) Dev History

## in development:
* **New Features:**
    * color type input slots for custom blocks
    * metaprogramming support for clor type input slots (number: 13, spec: "clr", mnemonic: "color")
    * variadic variables type input slots for custom blocks
    * metaprogramming support for clor type variadic variables slots (number: 14, spec: "scriptVars", mnemonic: "vars")
    * destinations dropdown menu for custom blocks
* **Notable Changes:**
    * when querying the defintion of a block via metaprogramming the number of inputs of the resulting ring now matches that of the header expression
* **Notable Fixes:**
    * fixed a type error when using metaprogramming to copy default inputs from a primitive over to a custom block definition
* **Documentation Updates:**
* **Translation Updates:**

### 2023-08-03
* byob: made distancesMenu() available for custom blocks
* blocks, byob: renamed distancesMenu() into destinationsMenu()
* threads: fixed a type error when using metaprogramming to copy default inputs from a primitive over to a custom block definition
* threads: when querying the defintion of a block via metaprogramming make sure the number of inputs of the resulting ring matches that of the header expression 
* byob, threads: tweaked some metaprogramming edge cases

### 2023-08-02
* new dev branch and version
* blocks, byob: made %clr input slots available for custom blocks
* threads: metaprogramming support for color type input slots
* byob: made %scriptVars input slots available for custom blocks
* threads: metaprogramming support for %scriptVars input slots
* threads: moved script var declaration to multi-arg evaluation, eliminates necessity for doDeclareVariables()
