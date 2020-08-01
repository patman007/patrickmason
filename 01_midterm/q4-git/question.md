1. What is the difference between `git pull` and `git fetch`?

1. Why is the "index" or "staging area" needed in git? Put another way, why do you use the command `git add`?


### Answer:
### What is the difference between `git pull` and `git fetch`?
### Git fetch is the command that tells a developers local git 
### to go and get the latest dat info, but only checks to see
### changes are available. Git Pull does the actual file 
### transfering and brings the changes done from the latest
### edits/changes from the remote repository.

### Answer
### Why is the "index" or "staging area" needed in git? 
### Put another way, why do you use the command `git add`?
### An index is needed in git to build sets of changes/edits
### the developer wants to commit together. The staging area 
### is between the working directory and the developer
### repository and without it we could not have the directories
### communicate to each other. The git add command uses the 
### staging area to add changes in the developer working
### directory to select what the developer wants in the index
### in git.