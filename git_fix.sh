rm -rf .git
git init
git remote add origin https://github.com/akshay-rajan/aura.git
git fetch origin

# Optional: Commit local changes
git add .
git commit -m "Initial local commit"

# Pull with the allow-unrelated-histories flag
git pull origin master --allow-unrelated-histories

# Resolve any merge conflicts and commit the changes
git add .
git commit -m "Resolved merge conflicts"

# Push the changes to the remote repository
git push -u origin master
