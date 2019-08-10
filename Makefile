include Makefile.include.mk

help:
	$(call serve.help)
	$(call gen.help)
	$(call commit.help)
	$(call release.help)
	$(call deploy.help)
	$(call test.help)
	$(call dashboard.help)
	$(call ci.help)
	$(call github.help)
	@echo "\n"

init:
	npm install

dep:
	npm install # for commitizen

# shortcut for serve.local
dev:
	npm run local

build:
	npm build

build.dev:
	npm run build.dev

build.prod:
	npm run build.prod

serve.help:
	$(call serve.help)
	@echo "\n"
serve:
	$(call serve.help)
	@echo "\n"
serve.local:
	npm run local
serve.dev:
	npm run serve.dev
serve.prod:
	npm run serve.prod

gen.help:
	$(call gen.help)
	@echo "\n"
gen:
	npm run gen

commit.help:
	$(call commit.help)
	@echo "\n"
commit:
	npx git-cz

# release
release.help:
	$(call release.help)
	@echo "\n"
release:
	npm run release
release.master:
	npm run release
	git push --follow-tags origin master
release.dev:
	npm run release
	git push --follow-tags origin dev

deploy:
	$(call deploy.help)
	@echo "\n"
deploy.help:
	$(call deploy.help)
	@echo "\n"
deploy.dev:
	./deploy/dev/packer.sh
	git add .
	git commit -am "build: development"
	git push
	@echo "------------------------------"
	@echo "deploy to docker done!"
	@echo "todo: restart docker container"
deploy.prod:
	./deploy/production/packer.sh
	git add .
	git commit -am "build: production"
	git push
	@echo "------------------------------"
	@echo "deploy to docker done!"
	@echo "todo: restart docker container"


clean.cache:
	rm -rf ./node_modules/.cache
test.help:
	$(call test.help)
	@echo "\n"
test:
	npm run test
test.e2e:
	npm run test:e2e
test.dev:
	npm run test:dev
test.watch:
	npm run test:watch
test.coverage:
	npm run test:cover
test.report.text:
	npm run test:cover

# lint code
lint.help:
	$(call lint.help)
	@echo "\n"
lint:
	npm run lint
lint.watch:
	npm run lint:watch # use dialyzer

# dashboard
dashboard.help:
	$(call dashboard.help)
	@echo "\n"
dashboard:
	$(call dashboard.help)
	@echo "\n"
dashboard.ga:
	$(call browse,"$(DASHBOARD_GA_LINK)")
dashboard.apollo:
	$(call browse,"$(DASHBOARD_APOLLO_LINK)")
dashboard.pm2:
	$(call browse,"$(DASHBOARD_PM2_LINK)")
dashboard.errors:
	$(call browse,"$(DASHBOARD_SENTRY_LINK)")
dashboard.aliyun:
	$(call browse,"$(DASHBOARD_ALIYUN_LINK)")

# ci helpers
ci.help:
	$(call ci.help)
	@echo "\n"
ci:
	$(call ci.help)
	@echo "\n"
ci.build:
	$(call browse,"$(CI_BUILD_LINK)")
ci.coverage:
	$(call browse,"$(CI_COVERAGE_LINK)")
ci.codecov:
	$(call browse,"$(CI_CODECOV_LINK)")
ci.codefactor:
	$(call browse,"$(CI_CODEFACTOR_LINK)")
ci.codacy:
	$(call browse,"$(CI_CODACY_LINK)")
ci.doc:
	$(call browse,"$(CI_DOC_LINK)")
ci.depsbot:
	$(call browse,"$(CI_DEPSBOT_LINK)")

# github helpers
github:
	$(call github.help)
	@echo "\n"
github.help:
	$(call github.help)
	@echo "\n"
github.code:
	$(call browse,"$(GITHUB_CODE_LINK)")
github.doc:
	$(call browse,"$(GITHUB_DOC_LINK)")
github.pr:
	$(call browse,"$(GITHUB_PR_LINK)")
github.issue:
	$(call browse,"$(GITHUB_ISSUE_LINK)")
github.issue.new:
	$(call browse,"$(GITHUB_ISSUE_LINK)/new")
github.app:
	$(call browse,"$(GITHUB_APP_LINK)")
