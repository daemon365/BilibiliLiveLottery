const users = [
  {
    caption: "User1",
    image: "/test-site/img/docusaurus.svg",
    infoLink: "https://www.example.com",
    pinned: true
  }
];

const siteConfig = {
  title: "Docusaurus",
  tagline: "Generate websites!",
  url: "https://docusaurus.io",
  baseUrl: "/",
// 对于 github.io 类型的 URLS，你可以将 url 和 baseUrl 结合起来：
// url: "https://reasonml.github.io",
// url: "/reason-react/",
  organizationName: "facebook",
  projectName: "docusaurus",
  noIndex: false,
  headerLinks: [
    { doc: "doc1", label: "Docs" },
    { page: "help", label: "Help" },
    { search: true },
    { blog: true }
  ],
// 对于顶部导航栏中没有标题链接 -> headerLinks: [],
  headerIcon: "img/docusaurus.svg",
  favicon: "img/favicon.png",
  colors: {
    primaryColor: "#2E8555",
    secondaryColor: "#205C3B"
  },
  editUrl: "https://github.com/facebook/docusaurus/edit/master/docs/",
  users,
  disableHeaderTitle: true,
  disableTitleTagline: true,
  separateCss: ["static/css/non-docusaurus", "static/assets/separate-css"],
  footerIcon: "img/docusaurus.svg",
  translationRecruitingLink:
    "https://crowdin.com/project/docusaurus",
  algolia: {
    apiKey:
      "0f9f28b9ab9efae89810921a351753b5",
    indexName: "github"
  },
  gaTrackingId: "U-A2352",
  highlight: {
    theme: 'default'
  },
  markdownPlugins: [
    function foo(md) {
      md.renderer.rules.fence_custom.foo = function(tokens, idx, options, env, instance) {
        return '<div class="foo">bar</div>';
      }
    }
  ],
  scripts: [ "https://docusaurus.io/slash.js" ],
  stylesheets: [ "https://docusaurus.io/style.css" ],
  facebookAppId: "1615782811974223",
  twitter: "true"
};

module.exports = siteConfig;