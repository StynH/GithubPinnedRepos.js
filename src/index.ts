type PinnedRepos = {
    itemsRemaining: number;
    totalPinnedRepos: number;
    pinnedRepos: PinnedRepo[];
}

type PinnedRepo = {
    name: string;
    url: string;
}

export class GithubPinnedRepos{

    private static GITHUB_GRAPHQL_API_URL: string = "https://api.github.com/graphql";
    private static READY_STATE_READY: number = 4;

    static getPinnedRepos(username: string, personalToken: string, callback: (pinnedRepos: PinnedRepos) => any): void{
        const xhr = new XMLHttpRequest();
        xhr.open("POST", GithubPinnedRepos.GITHUB_GRAPHQL_API_URL);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader('Authorization','bearer ' + personalToken);

        const query = "{\n" +
            "  repositoryOwner(login: \"" + username + "\") {\n" +
            "    ... on ProfileOwner {\n" +
            "      pinnedItemsRemaining\n" +
            "      itemShowcase {\n" +
            "        items(first: 6) {\n" +
            "          totalCount\n" +
            "          edges {\n" +
            "            node {\n" +
            "              ... on Repository {\n" +
            "                name,\n" +
            "                url\n" +
            "              }\n" +
            "            }\n" +
            "          }\n" +
            "        }\n" +
            "        hasPinnedItems\n" +
            "      }\n" +
            "    }\n" +
            "  }\n" +
            "}"
        const json = JSON.stringify({ query: query });

        xhr.onreadystatechange = () => {
            if (xhr.readyState === GithubPinnedRepos.READY_STATE_READY) {
                const parsed = JSON.parse(xhr.responseText);
                const innerObject = parsed["data"]["repositoryOwner"];
                const data = innerObject["itemShowcase"]["items"]["edges"];
                const totalCount = innerObject["itemShowcase"]["items"]["totalCount"];

                const repos: PinnedRepos = {
                    itemsRemaining: innerObject["pinnedItemsRemaining"],
                    totalPinnedRepos: totalCount,
                    pinnedRepos: []
                };

                for(let i = 0; i < totalCount; ++i){
                    const repo: PinnedRepo = {
                        name: data[i]["node"]["name"],
                        url: data[i]["node"]["url"]
                    }
                    repos.pinnedRepos.push(repo);
                }

                callback(repos);
            }
        };
        xhr.send(json);
    }

}
