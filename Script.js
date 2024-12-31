RepoData = {
        
    909760542 : //Repositories
    {
        "Color" : "Complete",
        "Languages":["CPP","HTML"]
    },
     
    859438083 : //Instagram Stories ViewersDetails Using PHP
    {
        "Color" : "Complete",
        "Languages":["HTML","Mysql","PHP"],
        "WebLink":"https://dimgrey-duck-260558.hostingersite.com/PHPs/"
    },
     
    908311067 : //Quiz Hub
    {
        "Color" : "Pending",
        "Languages":["HTML","CSS","Js"],
        "WebLink":"https://lavenderblush-elk-818814.hostingersite.com/PHPs/"
    },
     
    895807119 : //Simple Java Codes Management
    {
        "Color" : "Complete",
        "Languages":["HTML","CSS","Js"]
    },
     
    882621657 : //NoorAlMiqat
    {
        "Color" : "Complete",
        "Languages":["HTML","CSS","Js"]
    },
     
    884862920 : //Maze Solver
    {
        "Color" : "Complete",
        "Languages":["HTML","CSS","Js"]
    },
     
    890373635 : //N Queen Algorithm
    {
        "Color" : "Complete",
        "Languages":["HTML","CSS","Js"]
    },
     
    878335662 : //Sudoku
    {
        "Color" : "Complete",
        "Languages":["HTML","CSS","Js"]
    },
     
    817931584 : //Ludo Using HTML CSS Javascript
    {
        "Color" : "Prototype",
        "Languages":["HTML","CSS","Js"]
    },
     
    861315744 : //Youtube Template Using Flutter
    {
        "Color" : "Complete",
        "Languages":["Dart"]
    },
     
    861164465 : //Dart For Basic Connection With GoogleFireBase
    {
        "Color" : "Complete",
        "Languages":["Dart"]
    },
     
    860805010 : //Flutter Trainee Project DataCalculator
    {
        "Color" : "Complete",
        "Languages":["Dart"]
    },
     
    747825474 : //Weather Station Using IOT Django JupyterNotebook
    {
        "Color" : "Complete",
        "Languages":["Python","HTML","Jupyter"]
    },
     
    765507433 : //Employee Attendance and payroll management System PHP with IOT fingerprintscanner
    {
        "Color" : "Complete",
        "Languages":["HTML","Mysql","PHP"]
    },
     
    632395736 : //Login Signup page
    {
        "Color" : "Complete",
        "Languages":["HTML","CSS","Js"]
    },
};
var repos;
function RepoDetails(){
    repos=GetRepos();
}

function GetRepos(){
    const username = 'mrabhin03'; 
    const apiURL = `https://api.github.com/users/${username}/repos`;
    fetch(apiURL)
    .then(response => response.json())
    .then(repos => {
        
        
        repos.sort((a, b) => {
            if (a.pushed_at < b.pushed_at) return 1;
            if (a.pushed_at > b.pushed_at) return -1; 
            return 0; 
        });
        DisplayRepos(repos);
        return repos;
        
    })
    .catch(error => console.error('Error fetching repositories:', error));
}


function DisplayRepos(repos){
    Divdata=``;
    const container = document.getElementById('repo-details');
    repos.forEach(repo => {
        if(repo.id!=909760542){
            ColorValue=`Complete`;
            if(repo.id in RepoData){
                ColorValue=RepoData[repo.id]['Color']
            }
            visit=``;
            if(repo.homepage){
                WebLink=repo.homepage
                if(RepoData[repo.id]['WebLink']){
                    WebLink=RepoData[repo.id]['WebLink']
                }
                visit=`<a href="${WebLink}" target='_blank'><button class="Visit-button">Visit</button></a>`;
            }
            TheLanguage=getCodeLanguage(repo.id,repo.language);
            
            Divdata+=`<div class="Repo">
                        <div class='SideColor ${ColorValue}'></div>
                        <div class='DataShow'>
                            <h3>${repo.name.replaceAll("-"," ")}</h3>
                            <span>${repo.description}</span>
                            <div class="repo-footer">
                                <div class="languages">
                                    ${TheLanguage}
                                </div>
                                <div class="button">
                                    ${visit}
                                    <a href="${repo.html_url}" target='_blank'><button class="Repository-button">Repository</button></a>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }
        
    });
    container.innerHTML=Divdata;
}
function getCodeLanguage(RepoID,language){
    MainLanguage=`<span>${language}</span>`
    if(RepoID in RepoData){
        if(RepoData[RepoID]['Languages']){
            languageData=RepoData[RepoID]['Languages'];
            MainLanguage=``;
            languageData.forEach((element)=>{
                MainLanguage+=`<span>${element}</span>`;
            })
        }
    }
    return MainLanguage;
}
RepoDetails()