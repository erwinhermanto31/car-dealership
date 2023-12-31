# Makefile for Corplabs Project

# Set the default goal to 'help'
.DEFAULT_GOAL := help

# Variables
DOCKER_COMPOSE = docker-compose
DOCKER_EXEC = $(DOCKER_COMPOSE) exec app

# Commands
install: ## Install project dependencies
	yarn

migrate-up: ## Run database migrations
	sequelize db:migrate

migrate-down: ## Rollback database migrations
	sequelize db:migrate:undo

start: ## Start the application
	$(DOCKER_COMPOSE) up -d
	yarn install

stop: ## Stop the application
	$(DOCKER_COMPOSE) down

test: ## Run automated tests
	yarn test

run:
	yarn start

validate-swagger:
	yarn generate-swagger

# Help
help:
	@echo "Corplabs Project Makefile"
	@echo "Available commands:"
	@echo "  - make install         : Install project dependencies"
	@echo "  - make migrate-up      : Run database migrations"
	@echo "  - make migrate-down    : Rollback database migrations"
	@echo "  - make start           : Start the application"
	@echo "  - make stop            : Stop the application"
	@echo "  - make test            : Run automated tests"
	@echo "  - make help            : Show this help message"
