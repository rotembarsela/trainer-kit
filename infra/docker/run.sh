#!/bin/bash

set -e

case "$1" in
  dev)
    echo "🚀 Starting in DEVELOPMENT mode..."
    docker-compose --profile dev up --build
    ;;

  prod)
    echo "🚀 Starting in PRODUCTION mode..."
    docker-compose --profile prod up --build -d
    ;;

  remove-dev)
    echo "🗑️  Removing DEVELOPMENT containers and volumes..."
    docker-compose --profile dev down -v
    ;;

  remove-prod)
    echo "🗑️  Removing PRODUCTION containers and volumes..."
    docker-compose --profile prod down -v
    ;;

  *)
    echo "❌ Invalid option! Usage: ./start.sh [dev|prod|remove-dev|remove-prod]"
    exit 1
    ;;
esac
