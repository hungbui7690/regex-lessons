/*
  More named capturing group example
  - The following regular expression matches the path posts/2022/02/18
    >   /\w+\/d{4}\/d{2}\/d{2}/
  - To capture the resource (post), year (2022), month (02), and day (18), you use the named capturing groups like this:
    >   /(?<resource>\w+)\/(?<year>\d{4})\/(?<month>\d{2})\/(?<day>\d{2})/

*/

// This program uses the patterns to match the path and shows all the subgroups:
const path = 'posts/2022/02/18'
const pattern =
  /(?<resource>\w+)\/(?<year>\d{4})\/(?<month>\d{2})\/(?<day>\d{2})/

const match = path.match(pattern)
console.log(match.groups) // {resource: 'posts', year: '2022', month: '02', day: '18'}

//////////////////////////////////

// Place a rule in parentheses () to create a capturing group. A regular expression can have multiple capturing groups.
// Use the (?<capturingGroupName>rule) to create a named capturing group for the rule in a pattern.
