#!/bin/bash
 
git add . & pid=$!
wait $pid
echo "<====================添加变更到暂存区成功=========================================>"
echo "<====================开始提交变更=================================================>"
git commit -m "$1"
if [ $? -eq 0 ]; then
    echo "<====================提交变更成功=============================================>"
  else
    echo "<====================提交变更失败=============================================>"
    exit 1
  fi
echo "<====================开始拉取远程分支并合并变更=====================================>"

git pull --rebase
if [ $? -eq 0 ]; then
    echo "<====================拉取远程分支并合并变更成功=================================>"
  else
    echo "!====================推送到远程分支失败，可能存在冲突或网络问题==================!"
    exit 1
  fi
echo "<====================开始推送到当前分支的远程分支===================================>"
# 在终端运行以下命令
branch_name=$(git rev-parse --abbrev-ref HEAD)
		echo "<====================当前分支是：$branch_name===================================>"
git push origin "$branch_name"
  if [ $? -eq 0 ]; then
    echo "<====================推送到远程分支成功==========================================>"
  else
    echo "<====================推送到远程分支失败==========================================>"
    exit 1
  fi
