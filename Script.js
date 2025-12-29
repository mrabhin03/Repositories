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
        "Color" : "Prototype",
        "Languages":["HTML","Mysql","PHP"],
        "WebLink":"https://lavenderblush-elk-818814.hostingersite.com/PHPs/"
    },
     
    895807119 : //Simple Java Codes Management
    {
        "Color" : "Complete",
        "Languages":["HTML","Js","PHP"]
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
        "Color" : "Prototype",
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
    797359498 : //Project Manage
    {
        "Color" : "Prototype",
        "Languages":["Django","HTML","Js"]
    },
    924693810: //Codes Hub
    {
        "Color" : "Complete",
        "Languages":["HTML","Js","PHP"]
    },
    923090226: //Calendar MarkDate
    {
        "Color" : "Prototype",
        "Languages":["HTML","Js","PHP"]
    },
    917762943: //Arduino Light control using Web
    {
        "Color" : "Complete",
        "Languages":["HTML","CSS","Js"]
    },
    925247248: //IOT Wifi Module Controller
    {
        "Color" : "Complete",
        "Languages":["Dart"]
    },
    975353141://3D Portfolio
    {
        "Color" : "Complete",
        "Languages":["ThreeJs","HTML"]
    },
    1068441634://PTA
    {
        "Color" : "Prototype",
    }
};
function RepoDetails(){
    GetRepos();
}

function GetRepos(){
    fetch("https://palegreen-chough-695018.hostingersite.com/Github.php")
      .then(res => res.json())
      .then(repos => {
        repos.sort((a, b) =>
          new Date(b.pushed_at) - new Date(a.pushed_at)
        );
        DisplayRepos(repos);
      })
      .catch(err => console.error(err));
}





function DisplayRepos(repos){
    Divdata=``;
    const container = document.getElementById('repo-details');
    repos.forEach(repo => {
        // console.log(repo.id)
        if(repo.id!=909760542 && repo.id!=949534881){
            ColorValue=`Complete`;
            if(repo.id in RepoData){
                ColorValue=RepoData[repo.id]['Color']
            }
            visit=``;
            if(repo.homepage){
                WebLink=repo.homepage
                if(repo.id in RepoData){
                    if(RepoData[repo.id]['WebLink']){
                        WebLink=RepoData[repo.id]['WebLink']
                    }
                }
                visit=`<a href="${WebLink}" target='_blank'><button class="Visit-button">Visit</button></a>`;
            }
            TheLanguage=getCodeLanguage(repo.id,repo.language);
            
            Divdata+=`<div class="Repo" name='${repo.id}'>
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
    RepoAnimation();
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
function RepoAnimation() {
    setTimeout(()=>{
        const repoData = document.querySelectorAll(".Repo");
        repoData.forEach((Therepo, index) => {
            setTimeout(() => {
                Therepo.classList.add("Show");
            }, index * 150); 
        });
    },200);
}

document.addEventListener("DOMContentLoaded", () => {
    RepoDetails();
    setTimeout(typingTitle, 300);
});


const MyTitle=["Programmer","Designer","Video Editor", "3D Designer"];
var titleno=0;
var word = MyTitle[titleno]; 
const typingSpeed = 120;
let charIndex = 0;

const typedTextElement = document.querySelector(".typing-effect");

function typingTitle() {
  if (charIndex < word.length) {
    typedTextElement.textContent += word.charAt(charIndex);
    charIndex++;
    setTimeout(typingTitle, typingSpeed);
  }else{
    setTimeout(() => {
        ClearTitle()
    }, 4000);
    
  }
}
function ClearTitle() {
    if (charIndex > 0) {
        typedTextElement.textContent = word.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(ClearTitle, typingSpeed); 
    }
    else{
        titleno++;
        if(titleno>=MyTitle.length){
            titleno=0;
        }
        word=MyTitle[titleno]
        setTimeout(() => {
            typingTitle()
        }, 300);
        
      }
}



