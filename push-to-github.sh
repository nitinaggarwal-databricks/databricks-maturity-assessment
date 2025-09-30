#!/bin/bash

# Databricks Technical Maturity Assessment Framework - GitHub Push Script
# Run this script to push the code to your GitHub repository

echo "🚀 Pushing Databricks Technical Maturity Assessment Framework to GitHub..."

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the databricks-assessment directory"
    exit 1
fi

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
fi

# Set up git configuration
echo "⚙️  Setting up Git configuration..."
git config user.name "nitinaggarwal-databricks"
git config user.email "nitin.aggarwal@databricks.com"

# Add remote origin
echo "🔗 Adding remote origin..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/nitinaggarwal-databricks/databricks-maturity-assessment.git

# Add all files
echo "📦 Adding files to repository..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Initial commit: Databricks Technical Maturity Assessment Framework

- 4-pillar assessment framework (Platform, Data, ML, GenAI)
- 100 total questions (25 per pillar, 5 dimensions each)
- Real-time scoring and recommendations
- Immediate pillar-specific recommendations modal
- Comprehensive Databricks tools integration
- Responsive web interface with Bootstrap 5
- Optional questions with partial completion support
- Export functionality for recommendations
- Modern UI with progress tracking and visual indicators"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
echo "Please enter your GitHub Personal Access Token when prompted:"
git push -u origin main

echo "✅ Done! Your Databricks Technical Maturity Assessment Framework has been pushed to GitHub."
echo "🌐 Repository URL: https://github.com/nitinaggarwal-databricks/databricks-maturity-assessment"
