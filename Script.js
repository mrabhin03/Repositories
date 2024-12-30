const username = 'mrabhin03'; 
const apiURL = `https://api.github.com/users/${username}/repos`;
Divdata=``;
fetch(apiURL)
    .then(response => response.json())
    .then(repos => {
        console.log(repos)
        const container = document.getElementById('repo-details');
        repos.sort((a, b) => {
            if (a.pushed_at < b.pushed_at) return 1;
            if (a.pushed_at > b.pushed_at) return -1; 
            return 0; 
        });
        repos.forEach(repo => {
            visit=``;
            if(repo.homepage){
                visit=`<a href="${repo.homepage}" target='_blank'><button class="Visit-button">Visit</button></a>`;
            }
            Divdata+=`<div class="Repo">
                        <h3>${repo.name.replaceAll("-"," ")}</h3>
                        <span>${repo.description}</span>
                        <div class="repo-footer">
                            <div class="languages">
                                <span>HTML</span>
                                <span>Javascript</span>
                                <span>CSS</span>
                            </div>
                            <div class="button">
                                ${visit}
                                <a href="${repo.html_url}" target='_blank'><button class="Repository-button">Repository</button></a>
                            </div>
                        </div>
                    </div>`
            
        });
        container.innerHTML=Divdata;
    })
.catch(error => console.error('Error fetching repositories:', error));