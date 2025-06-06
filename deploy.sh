bash
CopyEdit
#!/bin/bash

# Exit on error
set -e

echo "Running build..."
npm run build

echo "Copying build files to docs/..."
rm -rf docs
mkdir docs
cp -r build/* docs/

echo "Adding changes to git..."
git add .

echo "Committing changes..."
git commit -m "Running deploy build"

echo "Pushing to GitHub..."
git push origin main

echo "Deployment complete!"

