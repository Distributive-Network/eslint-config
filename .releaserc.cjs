/**
 * @type {import('semantic-release').Options}
 */
module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          {
            release: 'patch',
            type: 'docs',
          },
          {
            release: 'patch',
            type: 'refactor',
          },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/git',
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        // Avoid an API rate limit error.
        success: false,
        fail: false,
      },
    ],
  ],
};
