# dcp-docs

Documentation associated with DCP.

The git repository is filled with markdown files which are working drafts of living specs and end-user documentation.
This markdown is expected to be compatible with GitLab and GitHub provided they are equipped with a mermaid plugin.

The end product is available elsewhere, in HTML form.

## Branches

The `develop` branch represents drafts, and is where my (Wes') StackEdit instance writes temporary files.
The goal behind that is to make my own workflow as lightweight as humanly possible, while presenting the opportunity
for others to both contribute to the drafts, and making sure that everybody who wants to can see the absolute latest
spec drafts, half-baked ideas, and other mind dump activities that I do from time to time.

The `publish` branch, when pushed to, triggers an automatic build of the `docs.dcp.dev` website via
<https://gitlab.com/Distributed-Compute-Protocol/DCP-Dev-Website/docs.dcp.dev>. The contents of public will be copied into
the root directory on the `publish` branch over there: <https://gitlab.com/Distributed-Compute-Protocol/DCP-Dev-Website/docs.dcp.dev/-/tree/publish/>
So please be careful not to commit something that would unintentionally overwrite a file we have there such as `index.html`.

## Directories

`public` - Stuff that has been made public at one point in its life, or is ready to be
`public/version-name/guides` - Programmers' guides, like "Intro to DCP" or whatever
`public/version-name/specs` - Programmers' reference materials, like the Compute API spec
`READMEs` - Draft README files for various other repositories.

## Git Hooks

`husky` and `lint-staged` are used to format and lint markdown files committed locally to improve the consistency and quality of the markdown files.

---

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTUxODE3MjI3OV19
-->