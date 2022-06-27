1. 草稿
git stash #将当前未提交的修改存放到暂存区
git stash pop #恢复存储的草稿，必须在同一个分支下面
git stash list #查看所有草稿
git stash apply stash@{1} #取出草稿stash@{1}
git stash clear #清空所有草稿
2. 配置终端git别名

alias gt="git status"
alias gpl="git pull"
alias gps="git push"
alias gbr="git branch"
alias gck="git checkout"
alias log="git log"

3. >本地提交
git commit --amend "注释" #修正上次提交，不产生新的commit log

4. >查看日志 
git log #查看提交日志
git log --pretty=oneline #查看提交日志，单行模式
git log --pretty=oneline --max-count=2
git log --pretty=oneline --since='5 minutes ago'
git log --pretty=oneline --until='5 minutes ago'
git log --pretty=oneline --author=<your name>
---------------------------------
##推荐查看方式
```js
    git log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short
```
5. .sh文件自动配置git别名
#!/bin/bash set -v git config --global alias.st status git config --global alias.co checkout git config --global alias.ci commit git config --global alias.br branch


6. >重置
>git reset （回到）会直接删除旧的commit提交记录
git reset --hard HEAD #取消所有修改，返回到上一次提交时的状态 将文件完全恢复到某个版本状态
git reset --hard HEAD~3 #取消最新3次修改
git reset HEAD^ xxx #将xxx回退到上个版本 
----
git reset –soft：回退到某个版本，仅仅销毁commit的提交记录，不会撤销文件的修改
git reset –hard：彻底回退到某个版本，本地的源码也会变为上一个版本的内容 ，并且销毁提交记录

>git revert （撤销）保留旧的commit记录的前提，新增新的撤销文件的commit记录
git revert 命令会通过一个新的commit 来使仓库倒退一个commit
git revert HEAD #撤销前一次 commit；git revert HEAD^ #撤销前前一次 commit
git revert 3ce072c72d948abfa #撤销指定的3ce072c72d948abfa提交，撤销也会作为一次提交记录进行保存。 
git rebase 简介和跟merge的恩怨
