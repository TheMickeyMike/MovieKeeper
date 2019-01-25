
export PATH := node_modules/.bin:$(PATH)
export SHELL := /bin/bash

APP_VERSION=`node -p "require('./package.json').version"`
APP_NAME=`node -p "require('./package.json').name"`
GIT_REV=`git rev-parse --short HEAD`

build:
		docker build -t $(APP_NAME)-$(APP_VERSION)-$(GIT_REV) .

create-tag:
		git tag v$(APP_VERSION) && git push --tags

copy-artifacts:
		@echo 'copy artifacts from container'
		docker run --name=$(APP_NAME) -itd $(APP_NAME)-$(APP_VERSION)-$(GIT_REV) /bin/bash
		docker cp $(APP_NAME):/usr/src/app/build build

relese: build create-tag copy-artifacts