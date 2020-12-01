## Git Question A:

You have committed and pushed a bad change to your git repo.  How can you fix it (give exact command)?

### Answer: git revert <commit_hash>. 
### This command is used when the user wants to apply the inverse of a commit in the users's project history.


Consider how to do this without destroying history, since others might have pulled your bad change and based their changes on yours?  What would this command do?

### Answer: git checkout -b. This command helps you navigate between branches created. You can switch between 
### branches with this command as well as retaining the history. The -b is a convinient way to create a new
### branch to switch with the git checkout for convienience.


## Git Question B:

How do you delete a local branch after completing work on it.  How would you delete a remote branch?

### Answer: git branch -d localBranchName. 
### This code will delete branch history locally.

### Answer git push origin --delete remoteBranchName. 
### This code will delete branch history remotely.
