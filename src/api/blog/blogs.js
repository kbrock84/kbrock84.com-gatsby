const getBlog = (id, callback) =>
  callback(`# Test Blog 
\`\`\` javascript

console.log(() => "Test Blog ${id}"

\`\`\`
`);

module.exports.getBlog = getBlog;
