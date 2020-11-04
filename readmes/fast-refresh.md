# Shorten the feedback loop with Fast Refresh

React has attempted to implement reliable live reloading for some time now, but it is not until recently that a sustainable solution that didn't have loads of bugs emerged.

[React Fast refresh](https://mariosfakiolas.com/blog/what-the-heck-is-react-fast-refresh) is the React team's solution to reloading components without loosing application state, and gives you as a developer instant feedback on the code changes you just made.

Fast Refresh does not come out of the box with react, but must be supported by your tooling, which in our case would be webpack and babel. It is however directly supported by frameworks such as **React Native**, **Create React App**, **Gatsby** and **Next.js**, meaning most new react projects have it by default.

In order for you to try it out, I have prepared a small demo.

## Demo

Open the source code of this page in `pages/fast-refresh.tsx`. Read the code comments in that file for instructions for how to observe different aspects of Fast Refresh.

> 💡 The animated little triangle popping out in the bottom right corner of the screen when saving is Next.js' way of telling you that it has done a fast refresh.
