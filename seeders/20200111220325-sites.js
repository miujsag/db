'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const sites = await queryInterface.bulkInsert('Sites', [
      {
        name: "népszabadság",
        url: "http://nol.hu",
        feed: "http://nol.hu/rss/mindencsatorna",
        state: "inactive",
        slug: "nepszabadsag",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h1",
            "category": "",
            "author": ".cikkSzerzo",
            "published_at": ".cikkDatum.centered",
            "container": ".cikkBlock.kethasabos",
            "description": ".lead"
          },
          "article": {
            "title": "",
            "category": "",
            "author": "",
            "published_at": "",
            "content": ""
          }
        } */
      },
      {
        name: "nyugat",
        url: "https://nyugat.hu",
        feed: "https://www.nyugat.hu/tartalom/rss",
        state: "active",
        slug: "nyugat",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h2 a",
            "category": "",
            "author": "",
            "published_at": ".publisheddiv",
            "container": ".wrapper1",
            "description": ".article_lead"
          },
          "article": {
            "title": ".articlehead h1",
            "category": ".rovathead h2 a",
            "author": ".articlehead .article_author",
            "published_at": ".articlehead .article_published span",
            "content": ".articlenode .article_text"
          }
        } */
      },
      {
        name: "átlátszó",
        url: "https://atlatszo.hu",
        feed: "https://atlatszo.hu/feed/",
        state: "selected",
        slug: "atlatszo",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h3 a",
            "category": "",
            "author": ".the_author",
            "published_at": "time",
            "container": "article",
            "description": ".the_text"
          },
          "article": {
            "title": ".heading .the_title",
            "category": ".heading .the_category",
            "author": ".post_content .author_url",
            "published_at": ".post_content .the_post_date",
            "content": ".post_content .the_content > :not(.facebook_comments_trigger, #the_share_under)"
          }
        } */
      },
      {
        name: "444",
        url: "https://444.hu",
        feed: "https://444.hu/feed",
        state: "selected",
        slug: "444",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h3 a",
            "category": "",
            "author": ".byline__author",
            "published_at": "",
            "container": ".card",
            "description": "p"
          },
          "article": {
            "title": "#headline h1",
            "category": "#headline .byline__category a",
            "author": "#headline .byline__authors a",
            "published_at": "#headline .byline__info span:nth-of-type(5)",
            "content": "#content-main article > :not(footer)"
          }
        } */
      },
      {
        name: "index",
        url: "https://index.hu",
        feed: "https://index.hu/24ora/rss/",
        state: "selected",
        slug: "index",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h2 a",
            "category": "",
            "author": "",
            "published_at": ".datum.cikk-date-label",
            "container": ".rovatajanlo",
            "description": "p"
          },
          "article": {
            "title": ".content-title h1",
            "category": ".cikk-cimkek li:first-of-type",
            "author": ".szerzo a",
            "published_at": ".datum span:first-of-type",
            "content": ".cikk-torzs > :not(.m-automatic-file-snippet, .nm_mini__wrapper, .nm_widget__wrapper)"
          }
        } */
      },
      {
        name: "24",
        url: "https://24.hu",
        feed: "https://24.hu/feed/",
        state: "active",
        slug: "24",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h3 a",
            "category": "",
            "author": ".author-content",
            "published_at": ".post-date",
            "container": "article",
            "description": ".lead.lead-after-wrap"
          },
          "article": {
            "title": ".o-post__title span",
            "category": ".o-articleHead__catWrap:first-of-type",
            "author": ".m-author__authorLinkWrap a",
            "published_at": ".m-author__wrapCatDateTitulus",
            "content": ".post-body"
          }
        } */
      },
      {
        name: "origo",
        url: "http://origo.hu",
        feed: "https://www.origo.hu/contentpartner/rss/origoall/origo.xml",
        state: "selected",
        slug: "origo",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h3 a",
            "category": "",
            "author": "",
            "published_at": "span",
            "container": ".archive-cikk",
            "description": ""
          },
          "article": {
            "title": "#article-head h1",
            "category": "#breadcrumb a",
            "author": ".article-author",
            "published_at": "#article-date",
            "content": "#article-text"
          }
        } */
      },
      {
        name: "168 óra",
        url: "https://168ora.hu",
        feed: "https://168ora.hu/rss",
        state: "active",
        slug: "168-ora",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "a",
            "category": "",
            "author": "",
            "published_at": "",
            "container": ".simple.list-element",
            "description": "p"
          },
          "article": {
            "title": ".article-page-main-title",
            "category": "#breadcrumb a",
            "author": ".top-bar",
            "published_at": ".top-bar",
            "content": "#article-content > :not(.fb-share-button)"
          }
        } */
      },
      {
        name: "hvg",
        url: "https://hvg.hu",
        feed: "https://hvg.hu/rss",
        state: "selected",
        slug: "hvg",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h2 a",
            "category": "",
            "author": ".info span",
            "published_at": "time",
            "container": ".articlelist-element.clear",
            "description": "p"
          },
          "article": {
            "title": ".article-title",
            "category": ".article-info .info .uppercase",
            "author": ".author-name",
            "published_at": ".article-datetime",
            "content": ".article-main"
          }
        } */
      },
      {
        name: "magyar narancs",
        url: "https://magyarnarancs.hu",
        feed: "https://magyarnarancs.hu/rss/",
        state: "active",
        slug: "magyar-narancs",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h4 a",
            "category": "",
            "author": "em",
            "published_at": "",
            "container": ".noimg",
            "description": "p"
          },
          "article": {
            "title": "h1",
            "category": ".box.breadcrumb li:last-of-type a",
            "author": "#mainCikkBody + .cikkbar  .szerzoText div:last-of-type",
            "published_at": "#mainCikkBody + .cikkbar .update_time",
            "content": ".cikkbody clr"
          }
        } */
      },
      {
        name: "válasz",
        url: "http://valasz.hu",
        feed: "http://valasz.hu/rss",
        state: "inactive",
        slug: "valasz",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h2 a",
            "category": "",
            "author": ".szerzo",
            "published_at": "",
            "container": ".text",
            "description": ".lead"
          },
          "article": {
            "title": "h1",
            "category": "",
            "author": ".toolbar a",
            "published_at": ".datum",
            "content": ".szoveg"
          }
        } */
      },
      {
        name: "mandiner",
        url: "http://mandiner.hu",
        feed: "https://mandiner.hu/rss/",
        state: "active",
        slug: "mandiner",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "a",
            "category": "",
            "author": "",
            "published_at": ".info",
            "container": ".news_list_row",
            "description": ".lead"
          },
          "article": {
            "title": "h1",
            "category": "",
            "author": ".articletext span:first-of-type",
            "published_at": ".info",
            "content": ".text"
          }
        } */
      },
      {
        name: "vs",
        url: "https://vs.hu",
        feed: "https://vs.hu/feed",
        state: "inactive",
        slug: "vs",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h3",
            "category": "",
            "author": "",
            "published_at": "",
            "container": ".column",
            "description": "p"
          },
          "article": {
            "title": ".inner_content h1",
            "category": "",
            "author": ".author span span",
            "published_at": ".date",
            "content": ".content"
          }
        } */
      },
      {
        name: "pestisrácok",
        url: "https://pestisracok.hu",
        feed: "https://pestisracok.hu/feed/",
        state: "active",
        slug: "pestisracok",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": ".widget-full-list-text a",
            "category": "",
            "author": ".widget-post-author",
            "published_at": ".widget-post-date",
            "container": ".infinite-post",
            "description": "p"
          },
          "article": {
            "title": ".story-title.entry-title",
            "category": ".img-cat",
            "author": ".author-info-wrap .author-name a",
            "published_at": "#left-content time",
            "content": "#content-area > :not(#wpdevar_comment_3, .post-tags)"
          }
        } */
      },
      {
        name: "magyar nemzet",
        url: "https://magyarnemzet.hu",
        feed: "https://magyarnemzet.hu/feed/?",
        state: "active",
        slug: "magyar-nemzet",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h3 a",
            "category": "",
            "author": ".szerzo",
            "published_at": ".datum",
            "container": ".box",
            "description": ".lead"
          },
          "article": {
            "title": "h1",
            "category": ".en-article-header-column a",
            "author": ".en-article-header-column a",
            "published_at": ".en-article-dates-main",
            "content": ".entry-content"
          }
        } */
      },
      {
        name: "888",
        url: "https://888.hu",
        feed: "https://888.hu/rss/",
        state: "active",
        slug: "888",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "figcaption a",
            "category": "",
            "author": "",
            "published_at": "",
            "container": ".fig-wrap",
            "description": ".text-box"
          },
          "article": {
            "title": "h1:first-of-type",
            "category": "",
            "author": ".note-block .text-wrap",
            "published_at": ".note-block + p",
            "content": ".maincontent8"
          }
        } */
      },
      {
        name: "magyar idők",
        url: "https://magyaridok.hu",
        feed: "https://magyaridok.hu/feed/",
        state: "inactive",
        slug: "magyar-idok",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h2 a",
            "category": "",
            "author": "",
            "published_at": ".en-article-date",
            "container": ".et_pb_row.article.clearfix",
            "description": "p"
          },
          "article": {
            "title": "h1",
            "category": "",
            "author": ".en-article-author",
            "published_at": ".en-article-dates-main",
            "content": ".entry-content"
          }
        } */
      },
      {
        name: "alfahír",
        url: "https://alfahir.hu",
        feed: "https://alfahir.hu/rss.xml",
        state: "selected",
        slug: "alfahir",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": ".views-field-title a",
            "category": "",
            "author": "",
            "published_at": ".views-field.views-field-created",
            "container": ".views-row-first",
            "description": ".views-field-field-lead"
          },
          "article": {
            "title": "h1",
            "category": "",
            "author": ".field--name-username a",
            "published_at": ".region-content > .node--type-article .field--name-node-post-date",
            "content": ".article-content-elements"
          }
        } */
      },
      {
        name: "népszava",
        url: "https://nepszava.hu",
        feed: "https://nepszava.hu/rss",
        slug: "nepszava",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h2 a",
            "category": "",
            "author": "",
            "published_at": ".tags",
            "container": ".ts",
            "description": "p"
          },
          "article": {
            "title": "#content > .article:first-of-type h1",
            "author": "#content > .article:first-of-type .news .author a",
            "published_at": "#content > .article:first-of-type .news .timestamp",
            "category": "#content > .article:first-of-type .tags a",
            "content": "#content > .article:first-of-type .left",
            "site": "nepszava"
          }
        } */
      },
      {
        name: "faktor",
        url: "http://faktor.hu",
        feed: "http://faktor.hu/rss/",
        state: "active",
        slug: "faktor",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "h2 a",
            "category": "",
            "author": "",
            "published_at": ".text",
            "container": ".article-detail",
            "description": "p a"
          },
          "article": {
            "title": ".header h1",
            "category": ".author-area > .list li:first-of-type",
            "author": ".author-holder .text",
            "published_at": ".author-holder time",
            "content": ".ststst"
          }
        } */
      },
      {
        name: "azonnali",
        url: "http://azonnali.hu/",
        feed: "http://azonnali.hu/rss",
        state: "active",
        slug: "azonnali",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": "a",
            "category": "",
            "author": "",
            "published_at": ".datum",
            "container": ".newsrow",
            "description": "div:last-of-type"
          },
          "article": {
            "title": ".home_title h1",
            "category": "",
            "author": ".editors",
            "published_at": ".datum",
            "content": ".content > :not(#szerk, #disqus_thread)"
          }
        } */
      },
      {
        name: "mérce",
        url: "https://merce.hu/",
        feed: "https://merce.hu/feed/",
        state: "selected",
        slug: "merce",
        created_at: new Date(),
        updated_at: new Date()
        /* "selectors": {
          "archive": {
            "title": ".entry-text a",
            "category": "",
            "author": ".meta-author",
            "published_at": "time",
            "container": "article",
            "description": "p"
          },
          "article": {
            "title": ".main-article-header h1",
            "category": ".main-article-header .tag",
            "author": ".meta-data.track-cat .byline",
            "published_at": ".meta-time",
            "content": ".entry-content"
          }
        } */
      }  
    ], {});

    console.log(sites)

    return sites
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sites', null, {});
  }
};
