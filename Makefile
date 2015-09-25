test:
	node tests/mishear-tests.js

pushall:
	git push origin master && npm publish
