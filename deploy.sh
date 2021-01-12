#!/usr/bin/env sh

# 發生錯誤終止動作
set -e

# 构建
npm run build

# 移動到build出來的資料夾
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:computer13563/VUE-Final.git master

cd -