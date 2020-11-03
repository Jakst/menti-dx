import { namedOneThing } from "../components/namedOneThing";

// Instructions:
// This is a named import, so it needs to match the name of 
// the export in the module we import from. But typescript
// supports renaming across the whole project.

// Go to the file which this function is imported from
// (Cmd-clicking it is the fastest). Press F2, or use the 
// right-click menu to rename the symbol. Come back to this file
// and observe that it has been renamed here as well.
namedOneThing()