setup:
	yarn install

run:
	yarn start

run-functions:
	ENV=DEV && cd functions && firebase serve --only functions

deploy:
	yarn build && firebase deploy

setup-functions:
	cd functions && yarn install

deploy-functions:
	cd functions && npm run deploy