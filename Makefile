include Makefile.include.mk

help:
	$(call launch.help)
	$(call gen.help)
	$(call commit.help)
	$(call release.help)
	$(call deploy.help)
	$(call console.help)
	$(call test.help)
	$(call dashboard.help)
	$(call ci.help)
	$(call github.help)
	@echo "\n"

init:
	mix ecto.setup

dep:
	mix deps.get
	npm install # for commitizen

build:
	mix compile

format:
	mix format

launch.help:
	$(call launch.help)
	@echo "\n"
launch:
	mix phx.server
launch.dev:
	MIX_ENV=dev mix phx.server
launch.mock:
	MIX_ENV=mock mix phx.server

migrate:
	mix ecto.migrate
rollback:
	mix ecto.rollback
migrate.mock:
  MIX_ENV=mock mix ecto.migrate
rollback.mock:
  MIX_ENV=mock mix ecto.rollback
migrate.dev:
	MIX_ENV=dev mix ecto.migrate
rollback.dev:
  MIX_ENV=dev mix ecto.rollback

gen.help:
	$(call gen.help)
	@echo "\n"
gen:
	$(call gen.help)
	@echo "\n"
gen.migration:
	mix ecto.gen.migration $(arg)
gen.context:
	mix phx.gen.context $(arg)

commit.help:
	$(call commit.help)
	@echo "\n"
commit:
	@npx git-cz

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
deploy.prod:
	./deploy/production/packer.sh

test.help:
	$(call test.help)
	@echo "\n"
test:
	mix test
test.watch:
	mix test.watch
test.watch.wip:
	mix test.watch --only wip
test.db_reset:
	env MIX_ENV=test mix ecto.drop
	env MIX_ENV=test mix ecto.create
test.report:
	MIX_ENV=mix test.coverage
	$(call browse,"./cover/excoveralls.html")
test.report.text:
	MIX_ENV=mix test.coverage.short

# lint code
lint.help:
	$(call lint.help)
	@echo "\n"
lint:
	mix lint # credo --strict
lint.static:
	mix lint.static # use dialyzer

# open iex with history support
console.help:
	$(call console.help)
	@echo "\n"
console:
	iex --erl "-kernel shell_history enabled" -S mix
console.dev:
	MIX_ENV=dev iex --erl "-kernel shell_history enabled" -S mix
console.mock:
	MIX_ENV=mock iex --erl "-kernel shell_history enabled" -S mix

# dashboard
dashboard.help:
	$(call dashboard.help)
	@echo "\n"
dashboard:
	$(call dashboard.help)
	@echo "\n"
dashboard.apollo:
	$(call browse,"$(DASHBOARD_APOLLO_LINK)")
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
