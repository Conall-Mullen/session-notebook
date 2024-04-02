# Notes and hints

- git add _filename_ => adds file to be committed
- git add . => adds current directory to be committed
- git commit -m _comment on commit_ => creates new commit
- git push _remote repo name_ _branchname_ => pushes commit to repo on named branch. Repo typically named origin, main branch typically named main.
- git switch => switch branches
- git switch -c _branchname_ => create a new named branch and switch to it
- git branch => list branches in repository
- git push origin _branchname_ => push commit to branch on github
- Once the commit has been pushed, make a pull request. Once it has been approved, merge the branch into main. After the merge, delete the branch from the remote repository.
- git pull origin main => pulls the main branch which has the changes on the other branch merged.
- git branch -d _branchname_ => deletes the branch locally
