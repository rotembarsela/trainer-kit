APP_NAME := pulse
BUILD_DIR := bin
SRC_DIR := ./cmd
GO := go

.PHONY: all
all: build

.PHONY: build
build:
	@echo "Building $(APP_NAME)..."
	$(GO) build -o $(BUILD_DIR)/$(APP_NAME) $(SRC_DIR)/main.go

.PHONY: run
run: build
	@echo "Running $(APP_NAME)..."
	./$(BUILD_DIR)/$(APP_NAME)

.PHONY: test
test:
	@echo "Running tests..."
	$(GO) test ./...

.PHONY: clean
clean:
	@echo "Cleaning up..."
	rm -rf $(BUILD_DIR)

.PHONY: fmt
fmt:
	@echo "Formatting code..."
	$(GO) fmt ./...

.PHONY: lint
lint:
	@echo "Linting code..."
	golangci-lint run

.PHONY: deps
deps:
	@echo "Installing dependencies..."
	$(GO) mod tidy