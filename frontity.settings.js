const settings = {
  "name": "lode-corp",
  "state": {
    "frontity": {
      "url": "",
      "title": "LODE One",
      "description": "Constructing the digital money of the future"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Solutions",
              "/"
            ],
            [
              "About",
              "/"
            ],
            [
              "Assets",
              "/"
            ],
            [
              "Login / Sign Up",
              "/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://lode.tech"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
