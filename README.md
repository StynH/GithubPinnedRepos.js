# GithubPinnedRepos.js
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
      "url": "https://github.com/StynVanDeHaterd/CrossWars-2"
    },
    {
      "name": "B2Engine",
      "url": "https://github.com/StynVanDeHaterd/B2Engine"
    },
    {
      "name": "CrossWars",
      "url": "https://github.com/StynVanDeHaterd/CrossWars"
    },
    {
      "name": "floatygons.js",
      "url": "https://github.com/StynVanDeHaterd/floatygons.js"
    },
    {
      "name": "textygons.js",
      "url": "https://github.com/StynVanDeHaterd/textygons.js"
    },
    {
      "name": "texterfall.js",
      "url": "https://github.com/StynVanDeHaterd/texterfall.js"
    }
  ]
}
```
