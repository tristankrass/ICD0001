const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://algod.netlify.com/",
		"gaTrackingId": null
	},
	"header": {
		"logo": "/",
		"logoLink": "/",
		"title": "Algoritmid ja andmestruktuurid -ICD0001",
		"githubUrl": "https://github.com/tristankrass/ICD0001",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/codeblock"
		],
		"links": [
			{ "text": "ICD0001", "link": "/"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Algoritmid ja andmestruktuurid|ICD0001",
		"description": "KordamisKüsimused",
		"ogImage": null,
		"docsLocation": "https://github.com/tristankrass/ICD0001/tree/master/content", 
		"favicon": "/" 
	},
};

module.exports = config;