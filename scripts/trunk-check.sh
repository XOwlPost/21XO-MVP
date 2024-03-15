#!/bin/sh

# Initialize Trunk CLI
trunk init

# Pull latest checks
trunk pull --all

# Run checks
trunk check --all

# Push results (if applicable)
trunk push --all
