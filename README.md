# GithubPinnedRepos.js
[![npm version](https://badge.fury.io/js/githubpinnedrepos.svg)](https://badge.fury.io/js/githubpinnedrepos)
![npm](https://img.shields.io/npm/dw/githubpinnedrepos)

A simple Javascript extension to fetch pinned repositories from a Github profile.

## Usage
You will need a [Github Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) that has access to **read:user**.

### Example
```html
<script src="githubpinnedrepos.js"></script>
<script>
  function printRepos(repos){
    console.log(repos);
  }

  window.GithubPinnedRepos.getPinnedRepos(*YourGithubUsername*, *YourPersonalAccessToken*, printRepos);
</script>
```
**Example Output**
```json
{
  "itemsRemaining": 0,
  "totalPinnedRepos": 6,
  "pinnedRepos": [
    {
      "name": "CrossWars-2",
      "url": "https://github.com/StynVanDeHaterd/CrossWars-2",
      "primaryLanguage": "C"
    },
    {
      "name": "B2Engine",
      "url": "https://github.com/StynVanDeHaterd/B2Engine",
      "primaryLanguage": "C"
    },
    {
      "name": "CrossWars",
      "url": "https://github.com/StynVanDeHaterd/CrossWars",
      "primaryLanguage": "C++"
    },
    {
      "name": "floatygons.js",
      "url": "https://github.com/StynVanDeHaterd/floatygons.js",
      "primaryLanguage": "JavaScript"
    },
    {
      "name": "textygons.js",
      "url": "https://github.com/StynVanDeHaterd/textygons.js",
      "primaryLanguage": "TypeScript"
    },
    {
      "name": "texterfall.js",
      "url": "https://github.com/StynVanDeHaterd/texterfall.js",
      "primaryLanguage": "TypeScript"
    }
  ]
}
```
